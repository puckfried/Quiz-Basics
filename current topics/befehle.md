# Unsere Konsolenbefehle

Diese Liste sammeln und erweitern wir gemeinsam. In jeder Zeile steht ein Befehl mit einer kurzen Erklärung.

## Orientierung und Systeminformationen

`pwd` – zeigt den vollständigen Pfad des aktuellen Arbeitsverzeichnisses an.

`whoami` – zeigt den Namen des aktuell angemeldeten Benutzers an.

`hostname` – zeigt den Namen des Computers an.

`uname -a` – zeigt ausführliche Informationen über den Linux-Kernel und das System an.

`cat /etc/os-release` – zeigt Informationen über die installierte Linux-Distribution an.

`date` – zeigt das aktuelle Datum und die aktuelle Uhrzeit an.

## Navigation und Verzeichnisse anzeigen

`ls` – zeigt die Dateien und Ordner im aktuellen Verzeichnis an.

`ls -a` – zeigt auch versteckte Dateien und Ordner an. Ihre Namen beginnen mit einem Punkt.

`ls -l` – zeigt eine ausführliche Liste, unter anderem mit Rechten, Besitzer, Gruppe, Größe und Änderungszeit.

`ls -la` – kombiniert `-l` und `-a` und zeigt eine ausführliche Liste einschließlich versteckter Einträge.

`cd Dokumente` – wechselt in den Unterordner `Dokumente`.

`cd ..` – wechselt eine Ebene nach oben in das übergeordnete Verzeichnis.

`cd .` – bleibt im aktuellen Verzeichnis. Der Punkt steht für das aktuelle Verzeichnis.

`cd ./Dokumente` – wechselt über einen relativen Pfad in den Unterordner `Dokumente`.

`cd /` – wechselt in das Wurzelverzeichnis des Linux-Dateisystems.

`cd ~` – wechselt in das eigene Home-Verzeichnis.

`cd /home/dci/projects` – wechselt mit einem absoluten Pfad in ein Verzeichnis.

## Ordner und Dateien erstellen

`mkdir test` – erstellt im aktuellen Verzeichnis einen neuen Ordner mit dem Namen `test`.

`mkdir -p ablage/eingang` – erstellt den Ordner `ablage` und darin den Unterordner `eingang`. Fehlende übergeordnete Ordner werden mit `-p` ebenfalls erstellt.

`mkdir -p ablage/ausgang ablage/muell` – erstellt mehrere Unterordner auf einmal.

`touch quatsch.txt` – erstellt eine leere Datei mit dem Namen `quatsch.txt`.

`touch mail1.txt mail2.txt` – erstellt mehrere leere Dateien auf einmal.

## Dateien bearbeiten und ansehen

`nano quatsch.txt` – öffnet die Datei `quatsch.txt` im Texteditor Nano oder legt sie neu an.

`cat quatsch.txt` – zeigt den gesamten Inhalt der Datei `quatsch.txt` im Terminal an.

`less befehle.md` – zeigt eine längere Datei seitenweise an und ermöglicht die Suche im Text.

## Dateien kopieren, verschieben und löschen

`cp QUELLE ZIEL` – kopiert eine Datei.

`cp notizen.txt backup/notizen.txt` – kopiert `notizen.txt` in den Ordner `backup`.

`mv QUELLE ZIEL` – verschiebt eine Datei oder benennt sie um.

`mv mail1.txt ../ausgang/` – verschiebt `mail1.txt` in den Ordner `ausgang`, der eine Ebene höher liegt.

`mv mail2.txt mail-kunde.txt` – benennt `mail2.txt` in `mail-kunde.txt` um.

`rm test.txt` – löscht die Datei `test.txt` dauerhaft.

`rm -r testordner` – löscht den Ordner `testordner` und seinen gesamten Inhalt dauerhaft. Vorher Pfad und Inhalt sorgfältig prüfen.

## Benutzer und Dateirechte

`groups` – zeigt die Gruppen an, zu denen der aktuelle Benutzer gehört.

`chmod u+x start.sh` – fügt dem Besitzer (`u`) das Ausführungsrecht (`x`) hinzu.

`chmod g-w bericht.txt` – entzieht der Gruppe (`g`) das Schreibrecht (`w`).

`chmod o-r geheim.txt` – entzieht allen anderen Benutzern (`o`) das Leserecht (`r`).

`chmod o+r index.html` – gibt allen anderen Benutzern (`o`) das Leserecht (`r`).

`chmod 700 start.sh` – gibt nur dem Besitzer Lese-, Schreib- und Ausführungsrechte.

`chmod 640 bericht.txt` – gibt dem Besitzer Lese- und Schreibrechte, der Gruppe Leserechte und allen anderen keine Rechte.

`chmod 664 freigabe.txt` – gibt Besitzer und Gruppe Lese- und Schreibrechte; alle anderen dürfen nur lesen.

`./start.sh` – führt das Skript `start.sh` aus dem aktuellen Verzeichnis aus. Dafür benötigt die Datei das Ausführungsrecht.

## Programme installieren und verwalten

`sudo` – führt den folgenden Befehl mit administrativen Rechten aus. Vor dem Ausführen immer Befehl und Pfad prüfen.

`sudo apt update` – lädt aktuelle Informationen über die verfügbaren Softwarepakete. Es werden noch keine Updates installiert.

`sudo apt install falkon` – installiert das Softwarepaket `falkon` und benötigte Abhängigkeiten.

`sudo apt install nginx` – installiert das Softwarepaket `nginx` und benötigte Abhängigkeiten.

`sudo apt upgrade` – installiert verfügbare Updates für bereits installierte Pakete.

`sudo apt remove nginx` – entfernt das Softwarepaket `nginx`.

## Dienste prüfen und starten

`systemctl is-active nginx` – prüft, ob der Dienst `nginx` gerade aktiv ist.

`sudo systemctl start nginx` – startet den Dienst `nginx` mit administrativen Rechten.

## Dateien in Systemverzeichnisse kopieren

`sudo cp ~/index.html /var/www/html/index.html` – kopiert die Datei `index.html` mit administrativen Rechten in das Webverzeichnis von Nginx.

`sudo chmod o-r /var/www/html/index.html` – entzieht anderen Benutzern das Leserecht an der Nginx-Webseite.

`sudo chmod o+r /var/www/html/index.html` – gibt anderen Benutzern das Leserecht an der Nginx-Webseite zurück.

## Terminal und Programme bedienen

`clear` – leert die sichtbare Terminalansicht.

`history` – zeigt die bisher eingegebenen Befehle an.

`code .` – öffnet das aktuelle Verzeichnis in Visual Studio Code.

`Tab` – vervollständigt bekannte Datei-, Ordner- und Befehlsnamen.

`Pfeiltaste nach oben` – zeigt zuvor eingegebene Befehle erneut an.

`Strg + C` – bricht den aktuell laufenden Befehl ab.

`Strg + L` – leert wie `clear` die sichtbare Terminalansicht.

## Bedienung in Nano

`Strg + O` – speichert die geöffnete Datei; den vorgeschlagenen Dateinamen anschließend mit Enter bestätigen.

`Strg + W` – sucht in der geöffneten Datei nach einem Text.

`Strg + X` – beendet Nano und fragt bei ungespeicherten Änderungen nach, ob gespeichert werden soll.

## Bedienung in Less

`Pfeiltasten` – bewegen den Text zeilenweise nach oben oder unten.

`Leertaste` – blättert eine Seite weiter.

`/WORT` – sucht nach `WORT` in der geöffneten Datei.

`n` – springt zum nächsten Treffer der Suche.

`q` – beendet Less.

## WSL in der Windows-PowerShell prüfen

`wsl --list --verbose` – zeigt die installierten Linux-Distributionen und ihre WSL-Version an.
