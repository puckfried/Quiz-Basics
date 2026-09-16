# Praxisübung: Linux-Rechte im Webprojekt

Du betreust Dateien für die Website eines kleinen Vereins. Einige Dateien sind öffentlich, andere dürfen nur intern gelesen werden.

Arbeite nur im Ordner `~/rechte-labor`. Nutze `sudo` nur dort, wo es ausdrücklich steht.

## Wichtig: Namen und Pfade genau übernehmen

- Linux unterscheidet Groß- und Kleinschreibung.
- `rechte-labor`, `Rechte-Labor` und `rechte_labor` sind drei verschiedene Namen.
- Übernimm alle Ordner- und Dateinamen genau aus der Aufgabe.
- Ergänze keine zusätzliche Endung wie `.txt` an eine Datei mit der Endung `.sh`.
- Die späteren Skripte und Browser-URLs funktionieren nur mit den beschriebenen Namen und Pfaden.

## Vorbereitung

Erstelle diese Struktur:

```text
~/rechte-labor/
├── intern/
│   ├── kundendaten.txt
│   └── team-notiz.txt
├── tools/
│   └── status.sh
├── web/
│   └── vereinsseite.html
└── .zugang-notiz
```

Schreibe in `vereinsseite.html`:

```html
<h1>Unser Verein</h1>
<p>Willkommen auf unserer lokalen Testseite.</p>
```

Schreibe in `status.sh`:

```bash
#!/usr/bin/env bash
echo "Die Vereinsseite wird geprüft."
```

<details>
<summary>Lösungsschritte zur Vorbereitung</summary>

```bash
mkdir -p ~/rechte-labor/intern ~/rechte-labor/tools ~/rechte-labor/web
touch ~/rechte-labor/intern/kundendaten.txt
touch ~/rechte-labor/intern/team-notiz.txt
touch ~/rechte-labor/.zugang-notiz
nano ~/rechte-labor/web/vereinsseite.html
nano ~/rechte-labor/tools/status.sh
```

</details>

---

## Neu: Ein Bash-Skript starten

Ein Bash-Skript ist eine Textdatei mit mehreren Terminalbefehlen. Die Endung `.sh` hilft beim Erkennen. Entscheidend für den direkten Start ist aber das Ausführrecht `x`.

Die erste Zeile nennt das Programm, das das Skript ausführen soll:

```bash
#!/usr/bin/env bash
```

Teste dein vorbereitetes `status.sh`:

```bash
cd ~/rechte-labor
ls -l tools/status.sh
./tools/status.sh
```

Beim ersten Versuch erscheint wahrscheinlich `Permission denied`, weil das Ausführrecht fehlt. Setze und prüfe es:

```bash
chmod u+x tools/status.sh
ls -l tools/status.sh
./tools/status.sh
```

- `chmod u+x` gibt dem owner das Ausführrecht.
- `./` bedeutet: Starte die Datei aus dem aktuellen Ordner über ihren Pfad.
- Der eingegebene Pfad und Dateiname müssen genau stimmen.

Dieses Muster brauchst du später erneut:

```text
Skript mit nano anlegen → Code einfügen → speichern → Ausführrecht setzen → mit ./ starten
```

---

## Aufgabe 1: Pfade und versteckte Dateien

1. Wechsle mit einem absoluten Pfad in `~/rechte-labor/web`.
2. Zeige mit `pwd`, wo du bist.
3. Wechsle mit einem relativen Pfad direkt nach `intern`.
4. Gehe zurück in den Hauptordner.
5. Zeige alle Einträge an, auch die versteckten.
6. Beantworte:
   - Warum war `.zugang-notiz` vorher nicht sichtbar?
   - Ist die Datei durch den Punkt im Namen geschützt?

### Fertig, wenn

Du hast `intern` über einen relativen Pfad erreicht und kannst die versteckte Datei anzeigen.

<details>
<summary>Lösungsschritte</summary>

```bash
cd ~/rechte-labor/web
pwd
cd ../intern
pwd
cd ..
ls -la
```

Der Punkt am Anfang versteckt den Namen in der normalen `ls`-Ausgabe. Er schützt die Datei nicht. Den Zugriff regeln die Dateirechte.

</details>

---

## Aufgabe 2: Rechte lesen

Zeige die Rechte dieser Einträge an:

- `intern`
- `intern/kundendaten.txt`
- `web/vereinsseite.html`
- `tools/status.sh`
- `.zugang-notiz`

Notiere für jeden Eintrag:

- Datei oder Ordner?
- Welche Rechte hat der owner?
- Welche Rechte hat die group?
- Welche Rechte haben others?

Beantworte außerdem:

1. Woran erkennst du einen Ordner?
2. Wem gehören deine Dateien?
3. Zu welchen Gruppen gehörst du?

### Fertig, wenn

Du kannst eine vollständige Rechteanzeige wie `-rw-r--r--` in die drei Bereiche owner, group und others zerlegen.

<details>
<summary>Lösungsschritte</summary>

```bash
cd ~/rechte-labor
ls -ld intern
ls -l intern/kundendaten.txt web/vereinsseite.html tools/status.sh
ls -l .zugang-notiz
groups
```

- Das erste Zeichen ist `d` bei einem Ordner und `-` bei einer normalen Datei.
- Danach kommen jeweils drei Zeichen für owner, group und others.
- Besitzer und Gruppe stehen ebenfalls in der Ausgabe von `ls -l`.

Die genauen Rechte können je nach System leicht unterschiedlich sein.

</details>

---

## Aufgabe 3: Passende Rechte vergeben

Setze die Rechte nur mit der symbolischen Schreibweise von `chmod`.

| Datei | Soll-Zustand |
|---|---|
| `kundendaten.txt` | Nur du darfst lesen und schreiben. |
| `team-notiz.txt` | Du darfst lesen und schreiben. Die Gruppe darf lesen. Others haben keinen Zugriff. |
| `vereinsseite.html` | Du darfst lesen und schreiben. Alle anderen dürfen nur lesen. |
| `status.sh` | Nur du darfst die Datei lesen, ändern und ausführen. |
| `.zugang-notiz` | Nur du darfst die Datei lesen und schreiben. |

Prüfe nach jeder Änderung mit `ls -l`. Starte danach `status.sh` über seinen Pfad.

### Fertig, wenn

Alle fünf Dateien den Soll-Zustand haben und `status.sh` direkt startet.

<details>
<summary>Lösungsschritte</summary>

```bash
cd ~/rechte-labor

chmod u+rw,g-rwx,o-rwx intern/kundendaten.txt
chmod u+rw,g+r-wx,o-rwx intern/team-notiz.txt
chmod u+rw,g+r-wx,o+r-wx web/vereinsseite.html
chmod u+rwx,g-rwx,o-rwx tools/status.sh
chmod u+rw,g-rwx,o-rwx .zugang-notiz

ls -l intern/kundendaten.txt intern/team-notiz.txt
ls -l web/vereinsseite.html tools/status.sh .zugang-notiz
./tools/status.sh
```

Erwartete Rechte:

```text
-rw-------  kundendaten.txt
-rw-r-----  team-notiz.txt
-rw-r--r--  vereinsseite.html
-rwx------  status.sh
-rw-------  .zugang-notiz
```

</details>

---

## Aufgabe 4: Was bedeutet `x` bei einem Ordner?

Arbeite vom Ordner `~/rechte-labor` aus.

1. Prüfe zuerst, ob du `intern` betreten und `kundendaten.txt` lesen kannst.
2. Entferne für den owner das Ausführrecht am Ordner `intern`.
3. Versuche erneut:
   - die Namen im Ordner aufzulisten
   - den Ordner zu betreten
   - `kundendaten.txt` zu lesen
4. Stelle das entfernte Recht wieder her.
5. Erkläre den Unterschied zwischen `x` bei einer Datei und `x` bei einem Ordner.

### Fertig, wenn

Der Ordner am Ende wieder betretbar ist und du die Fehlermeldungen erklären kannst.

<details>
<summary>Lösungsschritte</summary>

```bash
cd ~/rechte-labor
cd intern
cat kundendaten.txt
cd ..

chmod u-x intern
ls intern
cd intern
cat intern/kundendaten.txt

chmod u+x intern
cd intern
cd ..
```

Bei einer Datei erlaubt `x` das Ausführen. Bei einem Ordner erlaubt `x`, den Ordner zu betreten und Pfade darin zu durchqueren.

Mit `r` am Ordner kannst du Namen sehen. Ohne `x` kannst du die Einträge trotzdem nicht normal öffnen. Fehlermeldungen in diesem Test sind beabsichtigt.

</details>

---

## Aufgabe 5: Große Knobelaufgabe – Nginx-Notfall im Vereinsbüro

Am Morgen nach einem Serverumbau gibt es drei Meldungen:

- Das Vereinsportal zeigt nur `403 Forbidden`.
- Nach der ersten Reparatur erscheint die Seite ohne grünen Statuskasten.
- Eine interne, versteckte Notiz ist über ihre genaue URL öffentlich erreichbar.

Finde und behebe alle Ursachen. Die Aufgabe verrät dir nicht, an welcher Datei oder welchem Ordner du anfangen musst.

### Vorbereitung: Setup-Skript aus GitHub übernehmen

1. Prüfe, ob Nginx installiert und aktiv ist.
2. Falls Nginx fehlt, installiere es wie in der README beschrieben.
3. Wechsle in dein Rechte-Labor und erstelle eine neue Skriptdatei:

```bash
cd ~/rechte-labor
nano rechte-notfall-vorbereiten.sh
```

4. Öffne auf GitHub die Datei [rechte-notfall-vorbereiten.sh](material/rechte-notfall-vorbereiten.sh). Nutze bei Bedarf die Ansicht **Raw**.
5. Kopiere den vollständigen Code und füge ihn in `nano` ein. Das Einfügen funktioniert je nach Terminal mit `Ctrl` + `Shift` + `V` oder über die rechte Maustaste.
6. Speichere mit `Ctrl` + `O`, bestätige mit `Enter` und beende `nano` mit `Ctrl` + `X`.
7. Prüfe den Namen und die aktuellen Rechte:

```bash
pwd
ls -l rechte-notfall-vorbereiten.sh
```

8. Setze das Ausführrecht und starte das Skript:

```bash
chmod u+x rechte-notfall-vorbereiten.sh
ls -l rechte-notfall-vorbereiten.sh
./rechte-notfall-vorbereiten.sh
```

Das Skript fragt nach deinem `sudo`-Passwort und verändert nur den Übungsordner `/var/www/html/rechte-notfall`. Bei einem erneuten Start wird der Fehlerfall zurückgesetzt.

**Achte besonders auf diese Namen:**

```text
~/rechte-labor/rechte-notfall-vorbereiten.sh
/var/www/html/rechte-notfall
http://localhost/rechte-notfall/
```

Wenn du einen Namen änderst oder dich im falschen Ordner befindest, passen die späteren Befehle und URLs nicht mehr. Den Code des Setup-Skripts musst du noch nicht vollständig verstehen. Ändere ihn für diese Aufgabe nicht.

Genauso kannst du später weitere Skripte aus GitHub übernehmen: neue `.sh`-Datei mit `nano` anlegen, Code vollständig einfügen, speichern, `x` setzen und über den genauen Pfad starten.

### Auftrag 1: Bestand aufnehmen

Untersuche den Fall, bevor du Rechte änderst:

- Läuft Nginx?
- Existiert der vollständige Pfad?
- Welche Rechte haben die beteiligten Ordner?
- Welche Rechte haben die öffentlichen und versteckten Dateien?
- Welche Rechte benötigt Nginx an einer Datei, welche an einem Ordner?

Nutze `ls -l`, `ls -la` und `ls -ld` passend. Arbeite schrittweise: Halte vor jeder Rechteänderung die aktuelle Ausgabe fest. Durch eine Reparatur können weitere Fehler erst sichtbar werden. Notiere insgesamt mindestens drei Auffälligkeiten.

### Auftrag 2: Portal reparieren

Repariere die Probleme nacheinander:

1. `http://localhost/rechte-notfall/` muss erreichbar sein.
2. Der Link zur Kontaktseite muss funktionieren.
3. Der Statuskasten muss grün erscheinen. Lade mit `Ctrl` + `F5` neu.

Ändere jeweils nur das fehlende Recht. Prüfe nach jeder Änderung erneut.

### Auftrag 3: Datenleck schließen

Diese URL darf den Inhalt der Notiz nicht ausliefern:

```text
http://localhost/rechte-notfall/.team-notiz.txt
```

Die Datei soll für owner les- und schreibbar, für die group lesbar und für others nicht lesbar sein. Verstecken allein reicht nicht.

### Auftrag 4: Übergabe dokumentieren

Erstelle `~/rechte-labor/notfallbericht.txt` mit:

- den drei gefundenen Problemen
- dem jeweils betroffenen Pfad
- deiner kleinsten passenden Rechteänderung
- dem Ergebnis nach der Reparatur
- einem Satz zum Unterschied zwischen `r` und `x` bei Ordnern

### Regeln

- Kein `chmod 777`.
- Kein `chmod -R`.
- Keine Dateien löschen oder umbenennen.
- Den Dateiinhalt nicht verändern.
- `sudo` nur für Änderungen unter `/var/www/html` verwenden.

### Fertig, wenn

- [ ] Hauptseite und Kontaktseite funktionieren
- [ ] der Statuskasten ist grün
- [ ] die interne Notiz ist im Browser nicht lesbar
- [ ] du alle Rechte mit `ls -la` geprüft hast
- [ ] dein Notfallbericht vollständig ist

<details>
<summary>Hinweise</summary>

- `ls -ld ORDNER` zeigt die Rechte des Ordners selbst.
- Um eine Datei zu erreichen, muss Nginx jeden Ordner im Pfad durchqueren können.
- HTML- und CSS-Dateien müssen gelesen, aber nicht ausgeführt werden.
- `ls -l` zeigt versteckte Namen nicht an.
- Ein `403` kann durch die Datei oder durch einen Ordner im Pfad entstehen.

</details>

<details>
<summary>Lösungsschritte</summary>

Zuerst Dienst und Pfad prüfen:

```bash
systemctl is-active nginx
ls -ld /var /var/www /var/www/html
ls -ld /var/www/html/rechte-notfall
ls -la /var/www/html/rechte-notfall
```

Die fehlenden Dateidetails oder Fehlermeldungen von `ls` sind ein zusätzlicher Hinweis: Am Ordner `rechte-notfall` fehlt `others` das Recht `x`. Nginx und dein Benutzer können ihn nicht normal durchqueren.

Das erste Problem reparieren und danach tiefer prüfen:

```bash
sudo chmod o+x /var/www/html/rechte-notfall
ls -ld /var/www/html/rechte-notfall
ls -la /var/www/html/rechte-notfall
ls -ld /var/www/html/rechte-notfall/assets
ls -la /var/www/html/rechte-notfall/assets
```

Jetzt werden die beiden weiteren Probleme sichtbar:

1. `others` fehlt `r` an `assets/style.css`. Nginx kann das Stylesheet nicht lesen.
2. `.team-notiz.txt` ist zwar versteckt, aber für `others` lesbar.

Nur die fehlenden beziehungsweise zu großen Dateirechte ändern:

```bash
sudo chmod o+r /var/www/html/rechte-notfall/assets/style.css
ls -l /var/www/html/rechte-notfall/assets/style.css

sudo chmod o-r /var/www/html/rechte-notfall/.team-notiz.txt
ls -la /var/www/html/rechte-notfall
```

Erwarteter Zustand:

```text
drwxr-xr-x  rechte-notfall
drwxr-xr-x  assets
-rw-r--r--  index.html
-rw-r--r--  kontakt.html
-rw-r--r--  style.css
-rw-r-----  .team-notiz.txt
```

Alle drei URLs im Browser prüfen:

```text
http://localhost/rechte-notfall/
http://localhost/rechte-notfall/kontakt.html
http://localhost/rechte-notfall/.team-notiz.txt
```

Die ersten beiden Seiten müssen funktionieren. Die interne Notiz muss mit `403 Forbidden` blockiert werden.

Notfallbericht erstellen:

```bash
nano ~/rechte-labor/notfallbericht.txt
```

</details>

---

## Kurzer Abschluss

Beantworte in zwei bis vier Sätzen:

- Warum ist „versteckt“ nicht dasselbe wie „geschützt“?
- Warum reicht das Leserecht an einer Datei nicht, wenn einem Ordner im Pfad `x` fehlt?
- Warum sind `chmod 777` und `chmod -R` schlechte Schnelllösungen?
