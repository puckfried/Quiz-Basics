# Individuelle Learning Phase: Linux-Shell im Alltag sicher anwenden

## Dein Ziel 

Du arbeitest dich sicher in der Linux-Shell durch Verzeichnisse, Dateien und Textdateien. Du nutzt relative und absolute Pfade, zeigst Inhalte mit passenden Kommandos an, erstellst und organisierst Dateien und Verzeichnisse und bearbeitest Textdateien mit `nano`. Am Ende hast du eine kleine, sauber strukturierte Arbeitsumgebung aufgebaut und typische Shell-Aufgaben selbstständig gelöst.

## Das brauchst du 

- Einen Linux-Rechner oder eine Linux-VM
- Ein Terminal
- Schreibrechte in deinem Home-Verzeichnis
- Die Kommandos `pwd`, `ls`, `cat`, `less`, `mkdir`, `cp`, `mv`, `rm`, `nano`
- Etwa 2 Stunden konzentrierte Arbeitszeit

## Zeitplanung 

- 10 Minuten: Arbeitsumgebung prüfen und Startordner anlegen
- 20 Minuten: Im Dateisystem navigieren und Inhalte anzeigen
- 25 Minuten: Dateien und Verzeichnisse erstellen und organisieren
- 25 Minuten: Textdateien mit `nano` bearbeiten
- 20 Minuten: Praxisaufgabe mit mehreren Arbeitsschritten
- 20 Minuten: Erweiterungsaufgaben oder saubere Nacharbeit

## Basis-Aufgaben

### Aufgabe 1: 
Arbeitsbereich vorbereiten **Ziel:** Du richtest dir eine übersichtliche Arbeitsstruktur im Home-Verzeichnis ein und überprüfst deine Orientierung im Dateisystem.

**Arbeitsauftrag:**  
1. Öffne ein Terminal.  
2. Prüfe, in welchem Verzeichnis du dich gerade befindest.  
3. Wechsle in dein Home-Verzeichnis.  
4. Erstelle dort einen Hauptordner mit dem Namen `shell_training`.  
5. Erstelle darin die Unterordner `notizen`, `projekte`, `backup` und `temp`.  
6. Lass dir den Inhalt deines Home-Verzeichnisses und anschließend den Inhalt von `shell_training` anzeigen.  
7. Wechsle mit relativen Pfaden in die neu erstellten Unterordner und wieder zurück.  
8. Notiere dir in einer Textdatei `notizen/start.txt`, welche Befehle du verwendet hast.

**Erwartetes Ergebnis / Soll-Zustand:**  
Im Home-Verzeichnis existiert der Ordner `shell_training` mit den vier Unterordnern. Du kannst zwischen den Ordnern mit relativen und absoluten Pfaden wechseln. Die Datei `start.txt` ist vorhanden.

### Aufgabe 2: 
Dateisystem erkunden und Inhalte anzeigen **Ziel:** Du nutzt `ls`, `cat` und `less`, um Verzeichnisinhalte und Dateien gezielt anzusehen.

**Arbeitsauftrag:**  
1. Zeige dir den Inhalt von `shell_training` und von mindestens zwei Unterordnern an.  
2. Erstelle im Ordner `notizen` eine Datei `linux_info.txt` mit mindestens 6 Zeilen Inhalt in `nano`.  
   Verwende dafür zum Beispiel diese Themen als Überschriften:
   - aktueller Arbeitsordner
   - Home-Verzeichnis
   - relativer Pfad
   - absoluter Pfad
   - wichtige Befehle
   - offene Fragen  
3. Zeige den Inhalt der Datei einmal mit `cat` und einmal mit `less` an.  
4. Nutze in `less` die Navigation nach oben und unten sowie die Suche nach einem Begriff aus deiner Datei.  
5. Ergänze in `linux_info.txt` eine weitere Zeile mit einem Beispiel für einen absoluten Pfad und eine Zeile mit einem Beispiel für einen relativen Pfad.

**Erwartetes Ergebnis / Soll-Zustand:**  
Die Datei `linux_info.txt` enthält mindestens 8 sinnvolle Zeilen. Du hast den Inhalt mit `cat` und `less` angezeigt und in `less` eine Suche durchgeführt.

### Aufgabe 3: 
Dateien und Ordner organisieren **Ziel:** Du verwaltest Dateien und Verzeichnisse mit `mkdir`, `cp`, `mv` und `rm`.

**Arbeitsauftrag:**  
1. Erstelle im Ordner `projekte` die Unterordner `projekt_a` und `projekt_b`.  
2. Kopiere die Datei `linux_info.txt` aus `notizen` nach `projekte/projekt_a`.  
3. Erstelle in `projekt_a` eine neue Datei `todo.txt` mit mindestens 5 kurzen Aufgabenzeilen.  
4. Verschiebe `todo.txt` von `projekt_a` nach `projekt_b`.  
5. Kopiere die Datei `todo.txt` zusätzlich in den Ordner `backup`.  
6. Erstelle im Ordner `temp` eine Testdatei `loeschen.txt` mit beliebigem Inhalt und entferne sie wieder.  
7. Prüfe nach jedem Schritt mit `ls`, ob sich die Dateien am erwarteten Ort befinden.

**Erwartetes Ergebnis / Soll-Zustand:**  
`linux_info.txt` liegt in `notizen` und zusätzlich in `projekte/projekt_a`. `todo.txt` liegt in `projekte/projekt_b` und als Kopie in `backup`. Die Testdatei in `temp` wurde wieder entfernt.

### Aufgabe 4: 
Textdateien mit nano gezielt bearbeiten **Ziel:** Du bearbeitest bestehende Dateien in `nano`, ergänzt Inhalte und findest Textstellen wieder.

**Arbeitsauftrag:**  
1. Öffne `projekte/projekt_b/todo.txt` in `nano`.  
2. Ergänze am Anfang der Datei eine Überschrift und darunter das aktuelle Datum als eigene Zeile.  
3. Füge am Ende der Datei zwei neue Aufgaben hinzu.  
4. Suche in `nano` nach einem Wort, das bereits in der Datei vorkommt.  
5. Ändere mindestens eine bestehende Zeile inhaltlich.  
6. Speichere die Datei und schließe `nano`.  
7. Zeige anschließend den Inhalt mit `cat` an.  
8. Öffne `notizen/start.txt` erneut und ergänze dort 3 typische Fehler, die dir bei Shell-Befehlen passieren könnten, zum Beispiel falscher Pfad, Tippfehler oder Datei nicht gefunden.

**Erwartetes Ergebnis / Soll-Zustand:**  
`todo.txt` wurde erweitert und sauber gespeichert. Du hast in `nano` Text gesucht und geändert. `start.txt` enthält zusätzlich drei typische Fehlerquellen.

### Aufgabe 5: 
Praxisfall: Kleine Ablage für einen Arbeitstag erstellen **Ziel:** Du verbindest Navigation, Dateiverwaltung und Textbearbeitung in einer realistischen Alltagsaufgabe.

**Arbeitsauftrag:**  
Stelle dir vor, du richtest eine einfache Ablage für einen Arbeitstag ein.  
1. Erstelle im Ordner `projekte` einen neuen Ordner `arbeitstag`.  
2. Erstelle darin die Unterordner `eingang`, `bearbeitet` und `archiv`.  
3. Lege in `eingang` drei Dateien an:
   - `mail_01.txt`
   - `mail_02.txt`
   - `aufgabenliste.txt`  
4. Schreibe in jede Datei einen kurzen, passenden Inhalt mit `nano`.  
5. Verschiebe `mail_01.txt` und `mail_02.txt` nach `bearbeitet`.  
6. Kopiere `aufgabenliste.txt` zusätzlich nach `archiv`.  
7. Zeige dir die Struktur von `arbeitstag` mit mehreren `ls`-Aufrufen an.  
8. Öffne `bearbeitet/mail_01.txt` mit `less` und suche nach einem Begriff aus dem Inhalt.  
9. Ergänze in `archiv/aufgabenliste.txt` eine Zeile: `Kontrolle abgeschlossen`.

**Erwartetes Ergebnis / Soll-Zustand:**  
Der Ordner `arbeitstag` enthält eine nachvollziehbare Struktur. In `eingang` bleibt mindestens eine Datei, in `bearbeitet` liegen die bearbeiteten Mails, und im `archiv` liegt eine Kopie der Aufgabenliste mit ergänzter Abschlusszeile.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Pfadtraining unter Zeitdruck 
**Ziel:** Du wirst schneller und sicherer im Wechsel zwischen relativen und absoluten Pfaden.

**Arbeitsauftrag:**  
1. Starte im Home-Verzeichnis.  
2. Wechsle nacheinander in diese Ziele:
   - `shell_training/notizen`
   - `shell_training/projekte/projekt_a`
   - `shell_training/projekte/projekt_b`
   - `shell_training/backup`  
3. Führe die Wechsel einmal nur mit absoluten Pfaden und einmal nur mit relativen Pfaden aus.  
4. Dokumentiere in einer Datei `notizen/pfadtraining.txt` je ein Beispiel für einen absoluten und einen relativen Pfad zu `todo.txt`.

**Erwartetes Ergebnis / Soll-Zustand:**  
`pfadtraining.txt` ist vorhanden und enthält korrekte Pfadbeispiele. Du kannst die Zielordner auf zwei Arten erreichen.

### Erweiterungsaufgabe 2: Fehler gezielt finden und beheben 
**Ziel:** Du erkennst typische Shell-Fehler und korrigierst sie selbstständig.

**Arbeitsauftrag:**  
1. Probiere absichtlich drei fehlerhafte Kommandos aus, zum Beispiel:
   - falscher Dateiname
   - falscher Ordnername
   - falscher Pfad  
2. Lies die Fehlermeldung genau.  
3. Korrigiere das Kommando jeweils direkt danach.  
4. Dokumentiere in `notizen/fehlerprotokoll.txt` für jeden Fall:
   - dein fehlerhaftes Kommando
   - die Fehlermeldung in eigenen Worten
   - das korrigierte Kommando

**Erwartetes Ergebnis / Soll-Zustand:**  
`fehlerprotokoll.txt` enthält drei dokumentierte Fehlerfälle mit jeweils nachvollziehbarer Korrektur.

### Erweiterungsaufgabe 3: Aufräumen mit Bedacht 
**Ziel:** Du entfernst Dateien und Verzeichnisse kontrolliert und prüfst vorher den Inhalt.

**Arbeitsauftrag:**  
1. Erstelle im Ordner `temp` einen Unterordner `testbereich` mit zwei Dateien.  
2. Prüfe mit `ls`, was darin liegt.  
3. Entferne zuerst eine einzelne Datei.  
4. Entferne anschließend den kompletten Testbereich nur dann, wenn du sicher bist, dass er nicht mehr gebraucht wird.  
5. Kontrolliere zum Schluss, ob `temp` wieder sauber ist.  
6. Ergänze in `notizen/start.txt` eine kurze Warnung, worauf du beim Einsatz von `rm` achten willst.

**Erwartetes Ergebnis / Soll-Zustand:**  
Der Testbereich wurde kontrolliert erstellt und wieder entfernt. In `start.txt` steht eine sinnvolle Warnung zum vorsichtigen Löschen.

## Wichtige Hinweise 

- Arbeite nur in deinem eigenen Ordner `shell_training`.
- Prüfe vor `rm` immer mit `ls`, ob du im richtigen Verzeichnis bist.
- Nutze regelmäßig `pwd`, wenn du unsicher bist, wo du dich befindest.
- Speichere Änderungen in `nano` bewusst und kontrolliere danach den Inhalt.
- Wenn ein Kommando nicht funktioniert, lies die Fehlermeldung genau und prüfe Schreibweise, Pfad und Dateinamen.
- Achte auf Groß- und Kleinschreibung.

## Reflexionsfragen 

- Bei welchen Aufgaben hast du relative Pfade sicher eingesetzt, und wann waren absolute Pfade hilfreicher?
- Mit welchem Befehl konntest du Dateiinhalte am besten prüfen, und warum?
- Wo ist dir ein Fehler passiert, und wie hast du ihn erkannt?
- Was musst du vor dem Löschen von Dateien oder Verzeichnissen künftig immer prüfen?
- Welche drei Shell-Befehle fühlst du nach dieser Arbeitsphase am sichersten?

---