# Individuelle Learning Phase: Linux-Grundlagen in der virtuellen Maschine



## Dein Ziel 

Du richtest eine Linux-Distribution in einer virtuellen Maschine ein, meldest dich erfolgreich an und arbeitest dich in die grafische Oberfläche sowie in das Terminal ein. Am Ende kannst du typische Einsatzgebiete von Linux benennen, eine Distribution begründet auswählen und dich sicher zwischen GUI und Terminal bewegen.



## Das brauchst du 

- einen Rechner mit Internetzugang
- eine Virtualisierungssoftware, z. B. VirtualBox oder VMware Workstation Player
- ein ISO-Image einer Linux-Distribution, z. B. Ubuntu Desktop, Debian oder Fedora Workstation
- mindestens 25 GB freien Speicherplatz
- Schreibmöglichkeit für Notizen, z. B. Textdatei, OneNote oder Papier
- Möglichkeit für Screenshots



## Zeitplanung 

- 0–15 Min.: Aufgabe 1
- 15–50 Min.: Aufgabe 2
- 50–65 Min.: Aufgabe 3
- 65–85 Min.: Aufgabe 4
- 85–105 Min.: Aufgabe 5
- 105–120 Min.: Erweiterungsaufgabe 1 und/oder 2
- Falls du schneller bist: Erweiterungsaufgabe 3



## Basis-Aufgaben 



### Aufgabe 1: Distribution auswählen und kurz begründen

**Ziel:** Du verschaffst dir einen Überblick über Linux, typische Einsatzgebiete und wählst eine passende Distribution für deine VM aus.

**Arbeitsauftrag:**  
1. Recherchiere kurz zu mindestens drei Linux-Distributionen, z. B.:
   - Ubuntu Desktop
   - Debian
   - Fedora Workstation
2. Notiere zu jeder Distribution stichpunktartig:
   - typischer Einsatzbereich
   - ob eher einsteigerfreundlich oder eher technisch
   - ob sie eher für Desktop oder Server bekannt ist
3. Ergänze anschließend in deinen Notizen:
   - mindestens drei typische Einsatzgebiete von Linux
   - mindestens drei Unterschiede zwischen Linux und einem dir bekannten Betriebssystem
4. Entscheide dich für eine Distribution, die du in der VM installierst, und begründe deine Wahl in 3–5 Sätzen.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine kurze Vergleichsübersicht zu mindestens drei Distributionen erstellt und eine konkrete Distribution für die Installation ausgewählt und begründet.



### Aufgabe 2: Virtuelle Maschine erstellen und Linux installieren

**Ziel:** Du setzt eine funktionsfähige Linux-VM auf und führst die Installation erfolgreich durch.

**Arbeitsauftrag:**  
1. Erstelle eine neue virtuelle Maschine für deine ausgewählte Distribution.
2. Konfiguriere die VM mit sinnvollen Grundeinstellungen, z. B.:
   - Name der VM
   - Arbeitsspeicher
   - CPU-Kerne
   - virtuelle Festplatte
3. Binde das ISO-Image ein und starte die VM.
4. Installiere Linux in der VM.
5. Lege während der Installation fest:
   - Sprache
   - Zeitzone
   - Tastaturlayout
   - Benutzername
   - Rechnername
   - Passwort
6. Starte die VM nach der Installation neu und entferne bei Bedarf das Installationsmedium.
7. Mache einen Screenshot von:
   - der fertig eingerichteten VM in der Virtualisierungssoftware
   - dem Anmeldebildschirm oder dem ersten gestarteten Desktop

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Linux-Distribution ist vollständig in der VM installiert, startet fehlerfrei und zeigt den Anmeldebildschirm oder direkt den Desktop an.



### Aufgabe 3: Erstes Einloggen und Systemdaten prüfen

**Ziel:** Du meldest dich erfolgreich an und prüfst grundlegende Informationen zum installierten System.

**Arbeitsauftrag:**  
1. Melde dich mit deinem angelegten Benutzerkonto an.
2. Prüfe in der grafischen Oberfläche:
   - deinen Benutzernamen
   - den Rechnernamen
   - Sprache oder Tastaturlayout
3. Öffne anschließend ein Terminal.
4. Führe im Terminal nacheinander folgende Befehle aus und notiere jeweils kurz, was du erkennst:
   - `whoami`
   - `hostname`
   - `pwd`
   - `uname -a`
   - `cat /etc/os-release`
5. Speichere einen Screenshot vom geöffneten Terminal mit den ausgeführten Befehlen.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du bist erfolgreich angemeldet und hast die wichtigsten Basisinformationen zu Benutzer, Rechner und Linux-Version sichtbar dokumentiert.



### Aufgabe 4: Grafische Oberfläche gezielt erkunden

**Ziel:** Du findest dich in der Linux-GUI zurecht und kennst zentrale Bereiche der Oberfläche.

**Arbeitsauftrag:**  
1. Erkunde die grafische Oberfläche und finde:
   - Anwendungsmenü oder Startbereich
   - Dateimanager
   - Systemeinstellungen
   - Bereich für Netzwerk, Lautstärke oder Uhrzeit
2. Öffne den Dateimanager und führe folgende Schritte aus:
   - öffne deinen Home-Ordner
   - lege einen Ordner mit dem Namen `learning-phase` an
   - lege darin eine Textdatei mit dem Namen `notizen.txt` an
3. Öffne die Systemeinstellungen und prüfe:
   - Benutzerkonto
   - Datum/Uhrzeit
   - Netzwerkstatus
4. Notiere kurz:
   - welche Elemente dir vertraut vorkommen
   - was sich im Vergleich zu Windows oder macOS anders anfühlt
5. Mache einen Screenshot vom Dateimanager im Home-Ordner oder vom angelegten Ordner `learning-phase`.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du kannst dich in der grafischen Oberfläche orientieren, den Dateimanager nutzen und hast einen eigenen Arbeitsordner erstellt.



### Aufgabe 5: Mit dem Terminal arbeiten und zwischen GUI und Terminal wechseln

**Ziel:** Du bedienst das Terminal für einfache Navigationsaufgaben und kannst den Wechsel zwischen grafischer Oberfläche und Terminal nachvollziehen.

**Arbeitsauftrag:**  
1. Öffne ein Terminal.
2. Führe folgende Befehle aus und beobachte jeweils die Wirkung:
   - `pwd`
   - `ls`
   - `cd ~`
   - `mkdir -p learning-phase/terminal-test`
   - `cd learning-phase/terminal-test`
   - `touch datei1.txt datei2.txt`
   - `ls -l`
   - `clear`
   - `history`
3. Prüfe anschließend im Dateimanager, ob der im Terminal erstellte Ordner und die Dateien sichtbar sind.
4. Wechsle mindestens einmal bewusst zwischen grafischer Oberfläche und Terminal, z. B.:
   - Terminal aus der GUI öffnen
   - zurück zur grafischen Oberfläche wechseln
   - falls möglich: auf eine Textkonsole wechseln und wieder zurück zur GUI
5. Notiere in 3–5 Stichpunkten:
   - welche Aufgaben sich im Terminal schnell erledigen lassen
   - was dir beim Wechsel zwischen GUI und Terminal aufgefallen ist

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast Ordner und Dateien per Terminal erstellt, die Ergebnisse in der GUI überprüft und den Wechsel zwischen grafischer Oberfläche und Terminal praktisch durchgeführt.



## Erweiterungsaufgaben 



### Erweiterungsaufgabe 1: Zweite Distribution kurz vergleichen

**Ziel:** Du schärfst dein Verständnis für Unterschiede zwischen Distributionen.

**Arbeitsauftrag:**  
1. Wähle eine zweite Linux-Distribution aus, die du nicht installiert hast.
2. Recherchiere zu ihr:
   - Zielgruppe
   - Desktop- oder Server-Schwerpunkt
   - typische Stärken
3. Vergleiche sie mit deiner installierten Distribution in einer Tabelle mit mindestens fünf Vergleichspunkten.
4. Ergänze am Ende eine kurze Entscheidung:
   - Für welchen Einsatzzweck würdest du welche Distribution wählen?

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine übersichtliche Vergleichstabelle erstellt und kannst deine Auswahlkriterien nachvollziehbar formulieren.



### Erweiterungsaufgabe 2: Dateistruktur im Terminal aufbauen

**Ziel:** Du vertiefst die Navigation und Dateiverwaltung im Terminal.

**Arbeitsauftrag:**  
1. Erstelle im Terminal unter deinem Home-Verzeichnis folgende Struktur:
   - `projekt`
   - `projekt/docs`
   - `projekt/scripts`
   - `projekt/logs`
2. Lege in `docs` eine Datei `readme.txt` an.
3. Lege in `scripts` zwei leere Dateien an:
   - `start.sh`
   - `backup.sh`
4. Lass dir die Struktur mit passenden `ls`-Befehlen anzeigen.
5. Öffne den Dateimanager und prüfe, ob die Struktur korrekt sichtbar ist.
6. Halte mit einem Screenshot oder einer kurzen Notiz fest, wie GUI und Terminal zusammenarbeiten.

**Erwartetes Ergebnis / Soll-Zustand:**  
Die vorgegebene Ordner- und Dateistruktur ist im Terminal erstellt und in der grafischen Oberfläche sichtbar.



### Erweiterungsaufgabe 3: Linux mit deinem Alltagssystem vergleichen

**Ziel:** Du ordnest deine ersten Linux-Erfahrungen praxisnah ein.

**Arbeitsauftrag:**  
Erstelle eine Vergleichsübersicht zwischen Linux und einem Betriebssystem, das du bereits kennst. Vergleiche mindestens diese Punkte:
- Anmeldung und Benutzerkonzept
- Dateisystem oder Ordnerstruktur
- Installation von Software
- Rolle der grafischen Oberfläche
- Bedeutung des Terminals
- typische Einsatzgebiete

Formuliere zum Schluss ein kurzes Fazit mit 4–6 Sätzen:
- Wo siehst du Vorteile von Linux?
- Wo erwartest du mehr Einarbeitung?

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine alltagsnahe Vergleichsübersicht erstellt und deine ersten Linux-Eindrücke reflektiert.



## Wichtige Hinweise 

- Arbeite schrittweise und dokumentiere jede abgeschlossene Aufgabe kurz.
- Speichere Screenshots und Notizen in deinem Ordner `learning-phase`.
- Wenn ein Befehl nicht funktioniert, prüfe zuerst Schreibweise, Leerzeichen und Groß-/Kleinschreibung.
- Wenn die VM nicht startet, prüfe ISO-Einbindung, Arbeitsspeicher und Festplatteneinstellungen.
- Ändere keine Einstellungen, deren Wirkung du nicht nachvollziehen kannst.
- Falls du bei einer Aufgabe festhängst, notiere den genauen Schritt und die angezeigte Meldung.



## Reflexionsfragen 

- Warum hast du dich für genau diese Distribution entschieden?
- Welche Einsatzgebiete von Linux erscheinen dir nach der Arbeit in der VM besonders plausibel?
- Welche Unterschiede zu anderen Betriebssystemen hast du praktisch wahrgenommen?
- Was fiel dir in der grafischen Oberfläche leicht, was ungewohnt?
- Welche Vorteile hat das Terminal für dich bereits gezeigt?
- Bei welchen Schritten brauchst du noch mehr Sicherheit?

---