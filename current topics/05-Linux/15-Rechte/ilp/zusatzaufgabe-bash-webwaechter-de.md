# Zusatzaufgabe: Der Nginx-Webwächter

## Die Situation

Du betreust für einen kleinen Verein eine Website auf einem Nginx-Webserver.

Die Website soll regelmäßig kontrolliert werden. Außerdem soll es Sicherungskopien der HTML-Datei geben. Bisher müsste jemand beides jedes Mal von Hand erledigen.

Dein Auftrag:

> Entwickle ein Bash-Skript, das die Website sichert, ihre Erreichbarkeit prüft und seine Arbeit protokolliert.

Du brauchst noch keine Erfahrung mit Bash-Skripten. Du solltest aber bereit sein, Befehle selbst zu recherchieren, kleine Versuche zu machen und Fehlermeldungen zu untersuchen.

## Zeit und mögliche Abschlüsse

Plane ungefähr **2 bis 3 Stunden** ein.

Die Aufgabe hat drei Stufen. Nach jeder Stufe hast du ein funktionierendes Ergebnis, das du vorzeigen und abgeben kannst.


## Das kennst du bereits

Du kannst dein Wissen aus dem heutigen Unterricht verwenden:

- mit absoluten und relativen Pfaden arbeiten
- Dateien und Ordner anlegen, kopieren und untersuchen
- Nginx und `http://localhost/rechte.html` aufrufen
- Rechte mit `ls -l` lesen und mit `chmod` ändern
- Fehlermeldungen systematisch untersuchen
- `sudo` bewusst einsetzen

Neu sind vor allem Bash-Syntax, Variablen, Bedingungen, Exit-Codes und später Cron.

## Sicherheitsregeln

- Arbeite für dein Projekt nur in deinem Home-Verzeichnis.
- Verändere die Website-Datei in `/var/www/html` nicht durch dein Skript.
- Dein Skript darf die Website-Datei lesen und kopieren, aber nicht überschreiben oder löschen.
- Verwende im Skript kein `sudo`.
- Nutze nicht `sudo crontab -e`. Der Cronjob soll nur für deinen eigenen Benutzer gelten.
- Verwende nicht `crontab -r`. Dieser Befehl würde alle persönlichen Cronjobs löschen.
- Automatisiere keine Löschbefehle.

## Vorbereitung

Erstelle diese Projektstruktur in deinem Home-Verzeichnis:

```text
~/webwaechter/
├── backups/
├── logs/
└── webwaechter.sh
```

Prüfe anschließend:

- Wo befindest du dich?
- Wem gehört `webwaechter.sh`?
- Welche Rechte hat die Datei?
- Ist `/var/www/html/rechte.html` vorhanden und für dich lesbar?
- Ist die Seite unter `http://localhost/rechte.html` erreichbar?

Lege zusätzlich `~/webwaechter/recherche.md` an. Notiere dort während der Arbeit mindestens drei neue Dinge, die du über Bash oder Cron herausfindest.

---

## Ein Backup-Skript bauen

### Ziel

Nach jedem Start legt dein Skript eine neue, eindeutig benannte Sicherung von `rechte.html` an.

Beispiele für mögliche Dateinamen:

```text
rechte_2026-09-04_14-05-22.html
rechte_2026-09-04_14-08-47.html
```

### Anforderungen

Dein Skript soll:

1. mit einer passenden Shebang beginnen
2. Variablen für Quelldatei, Backup-Ordner und Zeitstempel verwenden
3. den Backup-Ordner bei Bedarf selbst anlegen
4. prüfen, ob die Quelldatei existiert und lesbar ist
5. bei einem Problem eine verständliche Fehlermeldung ausgeben und mit Exit-Code `1` enden
6. bei Erfolg eine zeitgestempelte Kopie anlegen
7. den Pfad der neuen Backup-Datei anzeigen
8. bei Erfolg mit Exit-Code `0` enden

Mache das Skript ausführbar und starte es über seinen Pfad:

```bash
~/webwaechter/webwaechter.sh
```

Führe es mindestens zweimal aus. Bereits vorhandene Backups dürfen dabei nicht überschrieben werden.

### ist fertig, wenn

- [ ] das Skript direkt ausführbar ist
- [ ] mindestens zwei unterschiedlich benannte Backups vorhanden sind
- [ ] die Backups den erwarteten HTML-Inhalt enthalten
- [ ] Pfade mit Variablen in doppelten Anführungszeichen verwendet werden
- [ ] `echo $?` nach einem erfolgreichen Lauf `0` zeigt
- [ ] ein absichtlich falscher Quellpfad eine verständliche Meldung und Exit-Code `1` erzeugt
- [ ] der korrekte Quellpfad nach dem Fehlertest wiederhergestellt wurde

<details>
<summary>Hinweise zu Shebang, Variablen und Zeitstempel</summary>

Recherchiere diese Begriffe:

- Bash shebang
- Bash variable verwenden
- Linux date format timestamp
- Bash exit code

Kleine Bausteine:

```bash
#!/usr/bin/env bash

NAME="Wert"
echo "$NAME"

ZEITSTEMPEL=$(date '+%Y-%m-%d_%H-%M-%S')
```

In Bash darf um das `=` einer Variablenzuweisung kein Leerzeichen stehen.

</details>

<details>
<summary>Hinweis zur Prüfung der Quelldatei</summary>

Mit `-f` kannst du prüfen, ob ein Pfad eine normale Datei ist. Mit `-r` prüfst du, ob die Datei für den aktuellen Benutzer lesbar ist.

Allgemeine Form einer Bedingung:

```bash
if [[ BEDINGUNG ]]; then
    # Befehle für diesen Fall
else
    # Befehle für den anderen Fall
fi
```

Recherchiere auch, was `exit 0` und `exit 1` bedeuten.

</details>

<details>
<summary>Hinweis, falls das Skript nicht startet</summary>

Prüfe nacheinander:

```bash
ls -l ~/webwaechter/webwaechter.sh
head -n 1 ~/webwaechter/webwaechter.sh
```

Frage dich danach:

- Hat die Datei ein Ausführrecht?
- Ist die Shebang die erste Zeile?
- Startest du die richtige Datei?

</details>

---

## Die Website prüfen und ein Log schreiben

### Ziel

Dein Skript prüft zusätzlich die veröffentlichte Website und dokumentiert jeden Lauf.

Eine mögliche Logdatei könnte später so aussehen:

```text
2026-09-04 14:05:22 | HTTP 200 | OK | Backup erstellt
2026-09-04 14:10:23 | HTTP 404 | FEHLER | Website nicht erreichbar
```

Deine Formulierung darf anders aussehen. Wichtig ist, dass ein anderer Mensch den Eintrag verstehen kann.

### Anforderungen

Erweitere dein Bronze-Skript. Es soll jetzt:

1. eine Variable für `http://localhost/rechte.html` besitzen
2. die URL mit `curl` aufrufen und den HTTP-Statuscode speichern
3. mit einer `if`-Abfrage prüfen, ob der Statuscode `200` ist
4. Datum, Uhrzeit, Statuscode und Ergebnis an `~/webwaechter/logs/webwaechter.log` anhängen
5. bei HTTP `200` eine Erfolgsmeldung ausgeben
6. bei einem anderen Statuscode eine verständliche Warnung ausgeben
7. bei Erfolg mit `0`, bei einer fehlgeschlagenen Prüfung mit `1` enden

Dein Skript soll benötigte Ordner selbst mit `mkdir -p` anlegen. Die vorhandene Logdatei darf bei einem neuen Lauf nicht überschrieben werden.

### ist fertig, wenn

- [ ] Bronze weiterhin funktioniert
- [ ] ein erfolgreicher Aufruf einen Eintrag mit HTTP `200` erzeugt
- [ ] ein weiterer Lauf den bestehenden Loginhalt ergänzt
- [ ] eine nicht vorhandene Test-URL, zum Beispiel `http://localhost/gibt-es-nicht.html`, als Fehler protokolliert wird
- [ ] `echo $?` nach diesem Fehlertest `1` zeigt
- [ ] die richtige URL nach dem Fehlertest wiederhergestellt wurde
- [ ] Terminalausgabe und Logeinträge verständlich sind

<details>
<summary>Hinweis zum HTTP-Statuscode mit curl</summary>

Untersuche zuerst, ob `curl` vorhanden ist:

```bash
command -v curl
```

Ein nützlicher Einzeltest ist:

```bash
curl --silent --output /dev/null --write-out "%{http_code}" "http://localhost/rechte.html"
```

Informiere dich, was die drei Optionen bewirken. Speichere anschließend die Ausgabe des Befehls in einer Variablen, ähnlich wie beim Zeitstempel.

Falls `curl` fehlt, prüfe zunächst mit `apt`, welches Paket benötigt wird. Installiere es nur, wenn du auf deinem System Pakete installieren darfst.

</details>

<details>
<summary>Hinweise zum Vergleichen und Protokollieren</summary>

Ein Textvergleich kann so aussehen:

```bash
if [[ "$WERT" == "erwartet" ]]; then
    echo "Der Wert passt."
fi
```

`>` ersetzt den bisherigen Inhalt einer Datei. `>>` hängt eine neue Zeile an. Für eine fortlaufende Logdatei benötigst du die passende Variante.

Recherchiere:

- Bash output append file
- Bash string comparison if

</details>

<details>
<summary>Zusatzhinweis bei HTTP 000</summary>

Der Status `000` ist kein normaler HTTP-Statuscode. Er bedeutet meistens, dass `curl` den Webserver gar nicht erreichen konnte.

Prüfe dann zum Beispiel:

```bash
systemctl is-active nginx
```

Falls dein WSL kein systemd verwendet:

```bash
sudo service nginx status
```

</details>

---

## Das Skript mit Cron automatisieren

### Ziel

Das fertige Silber-Skript wird für einen kurzen Test automatisch alle fünf Minuten ausgeführt.

Cron ist eine Zusatzstufe. Unter WSL kann es vorkommen, dass der Dienst nicht installiert ist oder nicht automatisch läuft. Wenn du das Problem sinnvoll untersuchst und dokumentierst, ist das ebenfalls ein gutes Ergebnis.

### Cron vorbereiten

Prüfe zuerst:

```bash
command -v cron
systemctl is-active cron
```

Falls dein WSL kein systemd verwendet, kannst du den Status so prüfen:

```bash
sudo service cron status
```

Starte oder installiere nichts blind. Lies die Ausgabe und recherchiere die passende Vorgehensweise für dein System. `sudo` darf nötig sein, um den Dienst zu starten, gehört aber niemals in dein Skript oder deinen persönlichen Cronjob.

### Absoluten Skriptpfad ermitteln

Wechsle in deinen Projektordner und ermittle den vollständigen Pfad:

```bash
cd ~/webwaechter
pwd
```

Cron arbeitet nicht aus deinem gewohnten Terminal-Verzeichnis. Verwende deshalb im Cronjob einen absoluten Pfad und nicht `~`.

### Persönlichen Cronjob einrichten

Öffne deinen persönlichen Crontab:

```bash
crontab -e
```

Die fünf Zeitfelder bedeuten:

```text
Minute Stunde Tag-im-Monat Monat Wochentag
```

Dieser Ausdruck steht für „alle fünf Minuten“:

```text
*/5 * * * *
```

Ergänze dahinter den **absoluten** Pfad zu deinem Skript. Leite normale Ausgaben und Fehlermeldungen zusätzlich in eine eigene Datei `logs/cron.log` um.

Die allgemeine Form ist:

```text
*/5 * * * * /absoluter/pfad/webwaechter.sh >> /absoluter/pfad/logs/cron.log 2>&1
```

Übernimm `/absoluter/pfad/` nicht wörtlich, sondern ersetze ihn durch deinen ermittelten Pfad.

### Automatischen Lauf nachweisen

- Warte auf mindestens zwei geplante Ausführungen.
- Prüfe die Zeitstempel der Backups.
- Prüfe `webwaechter.log` und `cron.log`.
- Vergleiche die Uhrzeiten mit deinem Cron-Ausdruck.
- Dokumentiere den verwendeten Cron-Ausdruck in `recherche.md`.

### Testjob wieder entfernen

Öffne erneut `crontab -e` und entferne nur die von dir angelegte Zeile oder kommentiere sie mit `#` aus.

Kontrolliere danach mit:

```bash
crontab -l
```

Verwende nicht `crontab -r`, weil damit alle persönlichen Cronjobs gelöscht werden.

### Gold ist fertig, wenn

- [ ] der Cron-Dienst geprüft wurde
- [ ] der Cronjob mit absoluten Pfaden arbeitet
- [ ] mindestens zwei automatische Läufe anhand von Zeitstempeln erkennbar sind
- [ ] Ausgaben und Fehler des Cronjobs in `cron.log` landen
- [ ] der Testjob anschließend entfernt oder auskommentiert wurde
- [ ] `crontab -l` kontrolliert wurde

<details>
<summary>Hinweise zur Cron-Fehlersuche</summary>

Prüfe systematisch:

1. Ist der Cron-Dienst aktiv?
2. Zeigt `crontab -l` wirklich deinen Eintrag?
3. Ist der Skriptpfad absolut und korrekt?
4. Ist das Skript ausführbar?
5. Existiert der Ordner für `cron.log`?
6. Enthält `cron.log` eine Fehlermeldung?
7. Funktioniert exakt derselbe absolute Skriptpfad bei einem manuellen Aufruf?

Cron besitzt eine kleinere Arbeitsumgebung als dein interaktives Terminal. Verlasse dich deshalb nicht auf das aktuelle Verzeichnis.

</details>

---

## Abschlusskontrolle

Führe zum Schluss diese vier Tests bewusst durch und notiere das Ergebnis in `recherche.md`:

| Test | Erwartetes Ergebnis |
|---|---|
| Skript mit korrekter Quelle und URL | neues Backup, HTTP `200`, Exit-Code `0` |
| Skript ein zweites Mal starten | weiteres Backup, vorhandenes Backup bleibt erhalten |
| falschen Quellpfad eintragen | kein leeres Backup, klare Meldung, Exit-Code `1` |
| nicht vorhandene URL eintragen | Fehler im Log, Exit-Code `1` |

Stelle nach den Fehlertests wieder die korrekten Werte ein.

Prüfe außerdem deine Projektdateien:

```bash
ls -l ~/webwaechter
ls -l ~/webwaechter/backups
less ~/webwaechter/logs/webwaechter.log
```

## Abgabe oder kurze Präsentation

Zeige:

- dein Skript `webwaechter.sh`
- mindestens zwei unterschiedliche Backup-Dateien
- mindestens einen erfolgreichen und einen fehlgeschlagenen Logeintrag
- die Ergebnisse der vier Abschlusstests
- drei neue Erkenntnisse aus `recherche.md`
- bei Gold: den verwendeten Cron-Ausdruck und den Nachweis der automatischen Läufe

Erkläre dabei kurz:

1. Welche Arbeit automatisiert dein Skript?
2. Warum setzt du Variablen in doppelte Anführungszeichen?
3. Woran erkennt ein anderes Programm, ob dein Skript erfolgreich war?
4. Was war dein schwierigster Fehler und wie hast du ihn untersucht?

## Optionale Vertiefung, falls noch Zeit bleibt

Wähle höchstens eine Idee:

- Schreibe bei einem HTTP-Fehler zusätzlich eine Datei `logs/achtung.txt`.
- Ergänze am Anfang des Skripts einen kurzen Kommentar mit Zweck, Autor und Datum.
- Finde heraus, wie `curl` zusätzlich die Antwortzeit der Website ausgeben kann, und protokolliere sie.

Baue keine automatische Löschung alter Backups ein. Log-Rotation, Schleifen und Funktionen können in einer späteren Aufgabe behandelt werden.
