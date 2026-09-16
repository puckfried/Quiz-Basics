# Linux-Praxiswerkstatt

Du musst nicht alle Aufgaben bearbeiten. Suche dir eine Aufgabe aus, die dich interessiert. Wenn du fertig bist, kannst du sie erweitern oder zu einer anderen Aufgabe wechseln.

Du arbeitest überwiegend selbstständig. Wenn du nicht weiterkommst, kannst du konkrete Fragen im Kurscall oder im Chat stellen.

## So funktionieren die Aufgaben

1. Lies zuerst das Ziel und den Soll-Zustand.
2. Versuche, selbst einen ersten Schritt zu finden.
3. Öffne die Tipps, wenn du Unterstützung brauchst.
4. Prüfe am Ende, ob dein Ergebnis wirklich funktioniert.

Es gibt keine feste Zeitvorgabe und keine formale Abgabe. Ein funktionierendes Ergebnis und eine verstandene Fehlermeldung sind wichtiger als möglichst viele Aufgaben.

## Wichtige Regeln

- Lies Befehle, bevor du sie ausführst.
- Verwende `sudo` nur bei den Schritten, die es ausdrücklich verlangen.
- Füge keine unbekannten Paketquellen hinzu.
- Eine VM im Bridged-Modus kann aus dem lokalen Netzwerk erreichbar sein.

---

## Inhaltsverzeichnis

Die Links führen auf GitHub direkt zur jeweiligen Aufgabe:

- [Aufgabe 1: Linux-System untersuchen](#aufgabe-1-linux-system-untersuchen) – Ermittle Betriebssystem, Kernel, CPU, Arbeitsspeicher und Festplattenspeicher deiner VM.
- [Aufgabe 2: Dateien und Pfade verwenden](#aufgabe-2-dateien-und-pfade-verwenden) – Erstelle eine Ordnerstruktur und übe Navigation, Kopieren, Umbenennen und versteckte Dateien.
- [Aufgabe 3: Programme mit APT installieren](#aufgabe-3-programme-mit-apt-installieren) – Untersuche und installiere kleine Werkzeuge wie `tree`, `htop`, `ncdu`, `curl` oder `figlet`.
- [Aufgabe 4: Prozesse beobachten](#aufgabe-4-prozesse-beobachten) – Starte einen Hintergrundprozess, finde ihn in der Prozessliste und beende ihn kontrolliert.
- [Aufgabe 5: Textdateien verarbeiten](#aufgabe-5-textdateien-verarbeiten) – Suche, sortiere und filtere Text mit `grep`, `wc`, Pipes und Umleitungen.
- [Aufgabe 6: Shell-Skript erstellen](#aufgabe-6-shell-skript-erstellen) – Speichere mehrere Systembefehle in einem ausführbaren Skript.
- [Aufgabe 7: Netzwerk untersuchen](#aufgabe-7-netzwerk-untersuchen) – Ermittle IP-Adresse, Standardroute, Namensauflösung und lauschende TCP-Ports.
- [Aufgabe 8: Webserver mit Nginx einrichten](#aufgabe-8-webserver-mit-nginx-einrichten) – Installiere Nginx auf Debian oder Lubuntu und veröffentliche eine eigene HTML-Seite.


Für einen kleinen Einstieg eignen sich die Aufgaben 1 bis 3. Dei anderen Aufgaben sind etwas fortgeschrittener und nutzen Befehle, die wir im UNterricht noch nciht gesehen haben. Dafür sind sie aber auch spannender. Ihr könnt die Tipps und Chatbots eurer Wahl befragen, falls ihr nicht weiter kommt.

---

## Aufgabe 1: Linux-System untersuchen

### Ziel

Finde heraus, welche Hardware und welches Betriebssystem deine VM erkennt.

### Deine Aufgabe

Ermittle:

- deinen Benutzernamen
- den Rechnernamen
- die installierte Distribution
- die Kernel-Version
- die Anzahl der erkannten CPUs
- den verfügbaren Arbeitsspeicher
- die Größe der virtuellen Festplatte
- die bisherige Laufzeit der VM

Vergleiche CPU, RAM und Festplatte anschließend mit den Einstellungen in VirtualBox.

### Fertig, wenn

Du hast mindestens fünf Informationen gefunden. Formuliere für dich selbst, warum die VM nicht automatisch die gesamte Hardware des Hosts sieht.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
whoami
hostname
cat /etc/os-release
uname -a
lscpu
free -h
df -h
uptime
```

Du musst nicht jede Zeile der Ausgaben verstehen. Suche gezielt nach den Informationen aus der Aufgabe.

</details>

<details>
<summary>Zusatzidee</summary>

Erstelle in deinem Home-Verzeichnis eine Datei `systemprofil.txt` und notiere darin die wichtigsten Werte.

Auf Lubuntu kannst du dafür das Textprogramm verwenden. Auf Debian kannst du beispielsweise `nano` verwenden, falls es installiert ist.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 2: Dateien und Pfade verwenden

### Ziel

Baue eine kleine Ordnerstruktur auf und bewege dich sicher darin.

### Deine Aufgabe

Erstelle unter deinem Home-Verzeichnis diese Struktur:

```text
praxiswerkstatt/
├── backup/
├── notizen/
└── web/
```

Danach:

1. Lege in `notizen` eine Datei `linux.txt` an.
2. Schreibe mindestens drei gelernte Linux-Befehle hinein.
3. Kopiere die Datei nach `backup`.
4. Benenne die Kopie in `linux-kopie.txt` um.
5. Lege einen versteckten Ordner `.werkstatt-config` an.
6. Lass dir die gesamte Struktur im Terminal anzeigen.

### Fertig, wenn

Du kannst jede Datei im Terminal und – auf Lubuntu – zusätzlich im Dateimanager wiederfinden.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
cd ~
mkdir -p praxiswerkstatt/notizen
mkdir -p praxiswerkstatt/web
mkdir -p praxiswerkstatt/backup
cd praxiswerkstatt
touch notizen/linux.txt
cp notizen/linux.txt backup/
mv backup/linux.txt backup/linux-kopie.txt
mkdir .werkstatt-config
ls -la
```

Den Text kannst du grafisch oder mit einem Terminal-Editor eintragen.

Auf Debian beispielsweise:

```bash
nano notizen/linux.txt
```

Falls Nano noch nicht installiert ist:

```bash
sudo apt update
sudo apt install nano
```

Wenn `tree` installiert ist:

```bash
tree -a ~/praxiswerkstatt
```

</details>

<details>
<summary>Zusatzidee</summary>

- Was ist der absolute Pfad zu `linux-kopie.txt`?
- Wie lautet ein relativer Pfad dorthin, wenn du dich in `praxiswerkstatt` befindest?
- Warum ist `.werkstatt-config` bei einem normalen `ls` nicht sichtbar?

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 3: Programme mit APT installieren

### Ziel

Wähle ein kleines Programm, untersuche sein Paket und installiere es mit APT.

### Programmauswahl

| Paket | Was macht es? | Erster Test |
|---|---|---|
| `tree` | zeigt Ordner als Baum | `tree -L 2 ~` |
| `htop` | zeigt laufende Prozesse interaktiv | `htop` |
| `ncdu` | untersucht die Speicherbelegung | `ncdu ~` |
| `curl` | ruft Inhalte und HTTP-Informationen ab | `curl -I https://example.com` |
| `figlet` | erzeugt große Schrift im Terminal | `figlet Linux` |

### Deine Aufgabe

1. Wähle mindestens ein Paket.
2. Suche danach mit APT.
3. Lies die Paketbeschreibung.
4. Installiere das Paket.
5. Starte es und probiere mindestens eine Option aus.
6. Formuliere für dich selbst in einem Satz, wofür das Programm nützlich ist.

### Fertig, wenn

Das ausgewählte Programm startet und du seinen Nutzen anhand eines sichtbaren Beispiels nachvollziehen kannst.

<details>
<summary>Tipps zur Paketsuche und Installation</summary>

Ersetze `PAKET` durch den gewünschten Namen:

```bash
sudo apt update
apt search PAKET
apt show PAKET
sudo apt install PAKET
```

`sudo apt update` muss nicht vor jedem einzelnen Paket erneut ausgeführt werden.

</details>

<details>
<summary>Bedienung der Programme</summary>

- `htop`: Mit `q` oder `F10` beenden.
- `ncdu`: Mit den Pfeiltasten navigieren und mit `q` beenden. Heute nichts daraus löschen.
- `tree`: Mit `tree --help` nach weiteren Optionen suchen.
- `curl`: Mit `-I` nur die HTTP-Header anzeigen.
- `figlet`: Hinter den Befehl einen eigenen kurzen Text schreiben.

</details>

<details>
<summary>Zusatzidee</summary>

Untersuche nach der Installation:

```bash
which PAKET
apt-cache policy PAKET
```

- Wo liegt der ausführbare Befehl?
- Welche Version wurde installiert?
- Aus welcher Paketquelle stammt sie?

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 4: Prozesse beobachten

### Ziel

Starte einen Prozess im Hintergrund, finde ihn wieder und beende ihn kontrolliert.

### Deine Aufgabe

1. Starte einen Prozess, der mehrere Minuten läuft.
2. Hole dir den Prompt zurück, ohne den Prozess zu beenden.
3. Finde den Prozess in der Prozessliste.
4. Beende nur den selbst gestarteten Prozess.
5. Kontrolliere, ob er wirklich beendet wurde.

### Fertig, wenn

Formuliere für dich selbst den Unterschied zwischen einem Befehl, einem laufenden Prozess und einem Hintergrundjob.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
sleep 300 &
jobs
ps
```

Das `&` startet den Befehl im Hintergrund der aktuellen Shell.

Beenden:

```bash
kill %1
jobs
```

Wenn `jobs` eine andere Jobnummer zeigt, verwende diese Nummer statt `%1`.

</details>

<details>
<summary>Mit htop beobachten</summary>

Falls `htop` noch fehlt:

```bash
sudo apt install htop
```

Danach:

```bash
htop
```

Suche nach `sleep`. Beende `htop` mit `q` oder `F10`.

Beende in `htop` keine unbekannten Systemprozesse.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 5: Textdateien verarbeiten

### Ziel

Verarbeite eine Textdatei mit mehreren kleinen Terminalwerkzeugen.

### Vorbereitung

Erstelle deinen Arbeitsordner, falls er noch nicht existiert:

```bash
mkdir -p ~/praxiswerkstatt
```

Lege die Datei `~/praxiswerkstatt/linux-fakten.txt` mit diesem Inhalt an:

```text
Linux läuft auf Servern.
Lubuntu ist eine Distribution.
Das Terminal führt Befehle aus.
Linux läuft in unserer virtuellen Maschine.
APT installiert Pakete.
Ein Webserver stellt Webseiten bereit.
```

Auf Debian kannst du die Datei mit `nano ~/praxiswerkstatt/linux-fakten.txt` anlegen. Falls Nano fehlt, installiere es mit `sudo apt install nano`.

### Deine Aufgabe

- Lass dir den Dateiinhalt anzeigen.
- Zähle die Zeilen.
- Suche alle Zeilen mit dem Wort `Linux`.
- Sortiere die Zeilen alphabetisch.
- Verbinde zwei Befehle mit einer Pipe.
- Schreibe ein sortiertes Ergebnis in eine neue Datei.

### Fertig, wenn

Die neue Datei `sortierte-fakten.txt` existiert. Formuliere für dich selbst, was die Zeichen `|` und `>` bewirken.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
cd ~/praxiswerkstatt
cat linux-fakten.txt
wc -l linux-fakten.txt
grep Linux linux-fakten.txt
grep -i linux linux-fakten.txt
sort linux-fakten.txt
```

Mit einer Pipe:

```bash
cat linux-fakten.txt | grep -i linux
cat linux-fakten.txt | sort
```

In eine neue Datei schreiben:

```bash
sort linux-fakten.txt > sortierte-fakten.txt
cat sortierte-fakten.txt
```

`>` überschreibt eine bereits vorhandene Zieldatei. Verwende deshalb hier bewusst den neuen Dateinamen `sortierte-fakten.txt`.

</details>

<details>
<summary>Zusatzidee</summary>

Füge mehrere gleiche Zeilen in die Ausgangsdatei ein und probiere:

```bash
sort linux-fakten.txt | uniq
```

Was verändert `uniq`?

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 6: Shell-Skript erstellen

### Ziel

Speichere mehrere bekannte Befehle in einer Datei und führe sie in einem Ablauf aus.

### Deine Aufgabe

Erstelle unter `~/praxiswerkstatt` ein Skript `systemcheck.sh`.

Erstelle den Ordner zuerst mit `mkdir -p ~/praxiswerkstatt`, falls du eine andere Aufgabe noch nicht bearbeitet hast.

Das Skript soll:

- eine Begrüßung ausgeben
- Benutzer und Rechnername anzeigen
- Datum und Laufzeit anzeigen
- freien Arbeitsspeicher anzeigen
- freien Speicherplatz des Wurzeldateisystems anzeigen

Starte das Skript zuerst über Bash. Mache es danach selbst ausführbar und starte es mit `./systemcheck.sh`.

### Fertig, wenn

Alle Informationen mit einem einzigen Skriptaufruf erscheinen.

<details>
<summary>Möglicher Inhalt von systemcheck.sh</summary>

```bash
#!/bin/bash

echo "Linux-Systemcheck"
echo "Benutzer:"
whoami
echo "Rechnername:"
hostname
echo "Datum:"
date
echo "Laufzeit:"
uptime
echo "Arbeitsspeicher:"
free -h
echo "Festplatte:"
df -h /
```

Du kannst die Datei mit dem grafischen Textprogramm oder mit `nano` bearbeiten.

Falls Nano fehlt:

```bash
sudo apt update
sudo apt install nano
```

</details>

<details>
<summary>Skript starten und ausführbar machen</summary>

```bash
mkdir -p ~/praxiswerkstatt
cd ~/praxiswerkstatt
bash systemcheck.sh
ls -l systemcheck.sh
chmod +x systemcheck.sh
ls -l systemcheck.sh
./systemcheck.sh
```

- `chmod +x` ergänzt das Recht zum Ausführen.
- `./` bedeutet: Verwende die Datei aus dem aktuellen Verzeichnis.
- `#!/bin/bash` legt fest, welcher Interpreter das Skript liest.

</details>

<details>
<summary>Zusatzidee</summary>

Speichere die Ausgabe des Skripts:

```bash
./systemcheck.sh > systembericht.txt
cat systembericht.txt
```

Erweitere das Skript anschließend um einen eigenen Befehl.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 7: Netzwerk untersuchen

### Ziel

Untersuche die Netzwerkkonfiguration deiner VM und verbinde sie mit den Begriffen aus der Firmennetz-Demonstration.

### Deine Aufgabe

Finde heraus:

- welche IP-Adresse die VM besitzt
- welcher Netzwerkadapter aktiv ist
- welche Standardroute verwendet wird
- ob ein Domainname aufgelöst werden kann
- welche TCP-Ports auf der VM auf Verbindungen warten
- welcher Netzwerkmodus in den VirtualBox-Einstellungen ausgewählt ist

### Fertig, wenn

Du hast IP-Adresse, Standardroute und mindestens einen lauschenden Port gefunden. Formuliere für dich selbst, was diese drei Informationen bedeuten.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
hostname -I
ip address
ip route
getent hosts example.com
ss -ltn
```

Die Standardroute erkennst du an einer Zeile, die mit `default` beginnt.

Ein lauschender Port bedeutet: Ein Dienst wartet dort auf neue Verbindungen.

</details>

<details>
<summary>NAT und Bridged vergleichen</summary>

- Bei NAT vermittelt VirtualBox den Internetzugang der VM.
- Bei Bridged Networking erscheint die VM als eigenes Gerät im lokalen Netz.
- Fahre die VM herunter, bevor du den Netzwerkmodus in VirtualBox änderst.
- Starte die VM danach neu und vergleiche `hostname -I` und `ip route`.

Ändere den Modus nur, wenn du weißt, welche VM du gerade bearbeitest.

</details>

<details>
<summary>Zusatzidee</summary>

Falls `ping` installiert ist:

```bash
ping -c 3 127.0.0.1
ping -c 3 1.1.1.1
ping -c 3 www.debian.org
```

Überlege bei jedem Test:

- Wird nur der eigene Rechner geprüft?
- Wird zusätzlich Routing benötigt?
- Wird zusätzlich DNS benötigt?

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 8: Webserver mit Nginx einrichten

### Ziel

Installiere Nginx, veröffentliche eine eigene HTML-Seite und rufe sie über HTTP auf.

Auf einer Debian-VM im Bridged-Modus soll die Seite vom Browser des Hosts erreichbar sein. Auf Lubuntu kannst du zuerst direkt mit Falkon über `http://localhost` testen.

### Vor dem Start

Du brauchst:

- eine gestartete Debian- oder Lubuntu-VM
- Internetzugang in der VM
- einen Benutzer mit `sudo`
- für den Zugriff vom Host: Bridged Networking

Verwende auf deiner Seite nur erfundene Inhalte. Eine Bridged-VM kann aus dem lokalen Netzwerk erreichbar sein.

### Teil 1: Netzwerk prüfen

Ermittle die IP-Adresse deiner VM und prüfe die Standardroute.

<details>
<summary>Tipps</summary>

```bash
hostname -I
ip route
```

Notiere die passende IP-Adresse. `127.0.0.1` ist nur die lokale Loopback-Adresse und nicht die Adresse für den Zugriff vom Host.

</details>

### Teil 2: Nginx installieren

Installiere Nginx und ein Werkzeug, mit dem du HTTP direkt aus dem Terminal testen kannst.

<details>
<summary>Befehle anzeigen</summary>

```bash
sudo apt update
sudo apt install nginx curl
```

Falls du auf Debian einen einfachen Terminal-Editor benötigst:

```bash
sudo apt install nano
```

</details>

### Teil 3: Dienst prüfen

Finde heraus, ob Nginx läuft und auf welchem TCP-Port der Webserver wartet.

<details>
<summary>Befehle anzeigen</summary>

```bash
systemctl status nginx --no-pager
systemctl is-active nginx
ss -ltn
```

Nginx verwendet für unverschlüsseltes HTTP normalerweise TCP-Port `80`.

Falls der Dienst nach der Installation noch nicht läuft:

```bash
sudo systemctl start nginx
```

</details>

### Teil 4: Lokal testen

Teste die Webseite zuerst innerhalb derselben VM.

<details>
<summary>Befehle und Adressen anzeigen</summary>

Im Terminal:

```bash
curl -I http://localhost
curl http://localhost | head
```

Auf Lubuntu zusätzlich in Falkon:

```text
http://localhost
```

Eine Antwort mit `200 OK` zeigt, dass der Webserver die Anfrage erfolgreich beantwortet hat.

</details>

### Teil 5: Vom Host zugreifen

Wenn die VM Bridged Networking verwendet, öffne auf dem Host:

```text
http://IP-DER-VM
```

Beispiel:

```text
http://192.168.1.50
```

Verwende deine eigene IP-Adresse und kopiere nicht die Beispieladresse.

### Teil 6: Eigene Webseite erstellen

Untersuche zuerst das Webverzeichnis und erstelle dann eine eigene `index.html`.

<details>
<summary>Befehle und Beispiel-HTML anzeigen</summary>

```bash
ls -la /var/www/html
sudo nano /var/www/html/index.html
```

Möglicher Inhalt:

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>Mein Linux-Webserver</title>
  </head>
  <body>
    <h1>Mein Linux-Webserver läuft!</h1>
    <p>Diese Seite kommt aus meiner virtuellen Maschine.</p>
    <p>Bereitgestellt mit Nginx.</p>
  </body>
</html>
```

In Nano:

- `Ctrl` + `O`: speichern
- Enter: Dateiname bestätigen
- `Ctrl` + `X`: Nano verlassen

Das Verzeichnis `/var/www/html` gehört zum System. Deshalb wird beim Speichern `sudo` benötigt. Ändere die Rechte nicht mit `chmod 777`.

</details>

Rufe danach erneut auf:

- in der VM: `http://localhost`
- vom Host: `http://IP-DER-VM`

### Teil 7: Rechner, Netzwerk und Dienst unterscheiden

Stoppe Nginx kurz und teste erneut.

<details>
<summary>Befehle anzeigen</summary>

```bash
sudo systemctl stop nginx
systemctl is-active nginx
```

Teste jetzt:

- antwortet die VM eventuell weiterhin auf Ping?
- ist die Webseite noch erreichbar?

Starte Nginx anschließend wieder:

```bash
sudo systemctl start nginx
systemctl is-active nginx
```

</details>

Wichtige Beobachtung:

> Die VM und das Netzwerk können funktionieren, obwohl der Webdienst gestoppt ist.

### Teil 8: Zugriffe im Log beobachten

Öffne das Zugriffsprotokoll und lade die Seite mehrmals neu.

<details>
<summary>Befehl anzeigen</summary>

```bash
sudo tail -f /var/log/nginx/access.log
```

Lade die Webseite im Browser neu. Beende die laufende Loganzeige anschließend mit `Ctrl` + `C`.

Suche in einer Logzeile:

- die IP-Adresse des Clients
- die angeforderte Datei
- den HTTP-Statuscode
- den verwendeten Browser

</details>

### Fertig, wenn

- Nginx installiert ist
- der Dienst läuft
- `curl http://localhost` HTML zurückliefert
- deine eigene Seite im Browser erscheint
- bei Bridged Networking der Host die Seite über die VM-IP erreicht
- du Nginx stoppen und wieder starten kannst

### Wenn etwas nicht funktioniert

<details>
<summary>Die VM hat keine passende IP-Adresse</summary>

- Prüfe in VirtualBox, ob der Netzwerkadapter aktiviert ist.
- Für den Host-Zugriff muss **Netzwerkbrücke / Bridged Adapter** ausgewählt sein.
- Prüfe, ob der richtige physische Netzwerkadapter ausgewählt ist.
- Starte die VM nach einer Änderung neu.
- Führe erneut `hostname -I` und `ip route` aus.

</details>

<details>
<summary>APT kann keine Pakete laden</summary>

```bash
ip route
getent hosts deb.debian.org
```

- Fehlt die Standardroute?
- Funktioniert die Namensauflösung?
- Ist der Netzwerkadapter verbunden?
- Lies die genaue Fehlermeldung, bevor du Einstellungen änderst.

</details>

<details>
<summary>Nginx läuft nicht</summary>

```bash
systemctl status nginx --no-pager
sudo journalctl -u nginx --no-pager -n 30
ss -ltn
```

Suche nach der ersten konkreten Fehlermeldung. Ändere nicht mehrere Einstellungen gleichzeitig.

</details>

<details>
<summary>Lokal funktioniert es, aber der Host erreicht die Seite nicht</summary>

Wenn `curl http://localhost` funktioniert, sind Nginx und die Webseite grundsätzlich in Ordnung.

Prüfe dann:

- verwendest du wirklich die aktuelle VM-IP?
- läuft die VM im Bridged-Modus?
- befinden sich Host und VM im gleichen lokalen Netzwerk?
- blockiert das Kursnetz direkte Verbindungen zwischen Geräten?
- wartet Nginx laut `ss -ltn` auf Port 80?

Ändere keine Nginx-Konfiguration, solange der lokale Test bereits funktioniert. Das Problem liegt dann wahrscheinlich beim Netzwerkzugriff.

</details>

<details>
<summary>Der Browser zeigt noch die alte Seite</summary>

```bash
cat /var/www/html/index.html
curl http://localhost
```

- Wurde die richtige Datei gespeichert?
- Zeigt `curl` bereits den neuen Inhalt?
- Lade die Seite mit `Ctrl` + `F5` neu.

</details>

### Weitere Möglichkeiten

- Ergänze Überschriften, Listen und Links in der HTML-Datei.
- Zeige mit `curl -I`, welche HTTP-Header Nginx sendet.
- Öffne die Seite von einer zweiten eigenen VM.
- Beobachte dabei erneut das Access-Log.
- Vergleiche die Client-IP im Log mit der Ausgabe von `hostname -I` auf dem Client.

### Nach der Aufgabe

Wenn du die Bridged-VM nicht weiter benötigst:

```bash
sudo systemctl stop nginx
```

Oder fahre die VM vollständig herunter. So bleibt der Webserver nicht unnötig im lokalen Netzwerk erreichbar.

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Selbstcheck zum Abschluss

Beantworte die Fragen für dich selbst:

- Was hast du praktisch gebaut oder untersucht?
- Welcher Befehl war neu?
- Welche Ausgabe oder Fehlermeldung war interessant?
- Kannst du dir selbst erklären, wie dein Ergebnis zustande gekommen ist?
- Was möchtest du als Nächstes ausprobieren?

Du musst dafür keinen Bericht abgeben. Entscheidend ist, dass du dein Ergebnis nachvollziehen kannst.
