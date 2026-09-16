# Einrichten eines Debian-Servers

In dieser Zusatzaufgabe sollt ihr eine weitere virtuelle Maschine erstellen: einen einfachen Debian-Server. Debian ist sehr weit verbreitet.

## Vorbereitung

- Download des ISO-Images von [hier](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.6.0-amd64-netinst.iso)
- Anlegen einer neuen virtuellen Maschine mit 2 GB RAM und 2 Prozessoren
- Ihr verwendet das heruntergeladene ISO-Image als Installationsmedium.

## Installation des Betriebssystems

- Nachfolgend findet ihr eine Schritt-für-Schritt-Anleitung durch den Installationsprozess.
- Nachdem ihr die virtuelle Maschine gestartet habt, werdet ihr vom Installer begrüßt.

### 1. Installer starten

- Wählt im ersten Menü `Graphical install` aus.
- Der grafische Installer wird nur für die Installation verwendet. Das fertige System bekommt später keine grafische Oberfläche.

![Startmenü des Debian-Installers](./assets_zusatz/01-installer-menue.png)

![Graphical install auswählen](./assets_zusatz/02-graphical-install-auswaehlen.png)

### 2. Sprache und Tastatur einstellen

- Sprache: `Deutsch`
- Standort: `Deutschland`
- Tastaturbelegung: `Deutsch`

Der Installer lädt anschließend einige Bestandteile. Das kann einen Moment dauern.

### 3. Netzwerk einrichten

- Als Rechnername könnt ihr `debian` verwenden.
- Den Domain-Namen lasst ihr leer.

![Domain-Name leer lassen](./assets_zusatz/03-domainname-leer-lassen.png)

### 4. Benutzer einrichten

- Lasst beide Felder für das Root-Passwort leer.
- Dadurch wird der Root-Zugang per Passwort gesperrt.
- Euer normaler Benutzer kann später mit `sudo` administrative Aufgaben ausführen.

![Root-Passwort leer lassen](./assets_zusatz/04-root-passwort-leer-lassen.png)

- Gebt euren vollständigen Namen ein.
- Danach legt ihr einen Benutzernamen fest.
- Vergebt ein Passwort und bestätigt es im nächsten Feld.

![Vollständigen Namen eingeben](./assets_zusatz/05-benutzer-vollstaendiger-name.png)

### 5. Festplatte partitionieren

- Wählt `Geführt - gesamte Platte verwenden`.

![Gesamte virtuelle Festplatte verwenden](./assets_zusatz/06-partitionierung-gesamte-platte.png)

- Wählt die virtuelle Festplatte aus. In unserem Beispiel ist das die `VBOX HARDDISK`.
- Wählt anschließend `Alle Dateien auf eine Partition`.

![Alle Dateien auf eine Partition schreiben](./assets_zusatz/07-partitionierung-alle-dateien.png)

- Wählt `Partitionierung beenden und Änderungen übernehmen`.

![Partitionierung beenden](./assets_zusatz/08-partitionierung-abschliessen.png)

- Bestätigt das Schreiben der Änderungen mit `Ja`.

> Achtung: Dabei wird die virtuelle Festplatte der neuen VM gelöscht und neu eingerichtet.

![Änderungen an der Partitionierung bestätigen](./assets_zusatz/09-partitionierung-bestaetigen.png)

Die Installation des Grundsystems beginnt. Das kann einige Minuten dauern.

### 6. Paketmanager einrichten

- Wählt bei der Frage nach einem weiteren Installationsmedium `Nein`.

![Kein weiteres Installationsmedium einlesen](./assets_zusatz/10-kein-weiteres-installationsmedium.png)

- Wählt als Land des Spiegelservers `Deutschland`.

![Deutschland als Land des Spiegelservers auswählen](./assets_zusatz/11-spiegelserver-land-deutschland.png)

- Wählt als Spiegelserver `deb.debian.org`.

![deb.debian.org als Spiegelserver auswählen](./assets_zusatz/12-spiegelserver-deb-debian-org.png)

- Falls ihr keinen HTTP-Proxy verwendet, lasst das Feld leer.

![HTTP-Proxy leer lassen](./assets_zusatz/13-http-proxy-leer-lassen.png)

- Die Teilnahme an der Paketverwendungserfassung könnt ihr mit `Nein` ablehnen.

![Paketverwendungserfassung ablehnen](./assets_zusatz/14-paketstatistik-ablehnen.png)

### 7. Software auswählen

Dieser Schritt ist wichtig, damit ein Server **ohne grafische Oberfläche** installiert wird.

- Mit der Leertaste könnt ihr eine Auswahl setzen oder entfernen.
- Wählt `Debian desktop environment` und alle Desktop-Umgebungen ab.
- Wählt `SSH server` aus.
- `Standard-Systemwerkzeuge` bleibt ausgewählt.
- Alle anderen Einträge bleiben abgewählt.

![Desktop-Umgebung abwählen und SSH-Server auswählen](./assets_zusatz/15-softwareauswahl-desktop-abwaehlen.png)

Die Auswahl sollte am Ende so aussehen:

```text
[ ] Debian desktop environment
[x] SSH server
[x] Standard-Systemwerkzeuge
```

![Fertige Softwareauswahl für den Debian-Server](./assets_zusatz/16-softwareauswahl-ssh-server.png)

Bestätigt die Auswahl mit `Weiter`. Die ausgewählten Pakete werden nun installiert.

### 8. GRUB-Bootloader installieren

- Wählt bei der Installation des GRUB-Bootloaders `Ja`.

![GRUB-Bootloader installieren](./assets_zusatz/17-grub-installieren.png)

- Wählt als Ziel die virtuelle Festplatte `/dev/sda`.

![GRUB auf dev sda installieren](./assets_zusatz/18-grub-auf-dev-sda.png)

### 9. Installation abschließen

- Schließt die Installation ab und startet die VM neu.
- Falls erneut das Installationsmenü erscheint, entfernt das ISO-Image aus dem virtuellen Laufwerk und startet die VM noch einmal.
- Nach dem Start erscheint die Login-Aufforderung.

![Login-Aufforderung des Debian-Servers](./assets_zusatz/19-login-aufforderung.png)

- Gebt euren Benutzernamen ein und drückt `Enter`.
- Gebt anschließend euer Passwort ein. Während der Eingabe werden keine Zeichen angezeigt.

![Anmeldung mit Benutzername und Passwort](./assets_zusatz/20-login-benutzername-passwort.png)

Wenn ihr die Kommandozeile mit eurem Benutzernamen seht, war die Anmeldung erfolgreich und euer Debian-Server ist einsatzbereit.

![Erfolgreich am Debian-Server angemeldet](./assets_zusatz/21-login-erfolgreich.png)
