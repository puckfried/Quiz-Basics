# Individuelle Learning Phase: Linux-Berechtigungen, Paketverwaltung und sicheres Arbeiten im Terminal

## Dein Ziel

Du richtest dir eine sichere Arbeitsumgebung im Terminal ein, prüfst und änderst Dateiberechtigungen unter Linux, arbeitest mit der Paketverwaltung und entwickelst einfache Routinen für sicheres und effizientes Arbeiten im Alltag.

## Das brauchst du

- Einen Linux-Rechner oder eine Linux-VM
- Ein Terminal
- Ein Benutzerkonto mit Zugriff auf dein Home-Verzeichnis
- Wenn möglich: sudo-Rechte für die Paketverwaltung
- Einen Texteditor im Terminal oder mit grafischer Oberfläche
- Eine Internetverbindung oder erreichbare Paketquellen

## Zeitplanung

- 15 Minuten: Aufgabe 1
- 20 Minuten: Aufgabe 2
- 25 Minuten: Aufgabe 3
- 30 Minuten: Aufgabe 4
- 20 Minuten: Aufgabe 5
- 10 Minuten: Reflexion, Nacharbeit oder Start einer Erweiterungsaufgabe

## Basis-Aufgaben

### Aufgabe 1:

Sichere Arbeitsumgebung aufbauen **Ziel:** Du richtest dir einen klaren, sicheren Arbeitsbereich ein und nutzt erste sinnvolle Terminal-Routinen.

**Arbeitsauftrag:**  
- Öffne ein Terminal.
- Erstelle in deinem Home-Verzeichnis einen Arbeitsordner, z. B. `~/ilp-linux`.
- Lege darin die Unterordner `rechte`, `pakete` und `notizen` an.
- Wechsle in den neuen Arbeitsordner und prüfe mit passenden Befehlen:
  - in welchem Verzeichnis du dich befindest
  - welche Dateien und Ordner vorhanden sind
  - welche versteckten Dateien angezeigt werden
- Lege folgende Testdateien an:
  - `rechte/bericht.txt`
  - `rechte/start.sh`
  - `notizen/arbeitsprotokoll.md`
- Öffne `rechte/start.sh` in einem Editor und trage ein kleines Shell-Skript ein, das beim Start eine kurze Meldung ausgibt.
- Nutze während dieser Aufgabe bewusst mindestens drei hilfreiche Arbeitsroutinen oder Shortcuts, zum Beispiel:
  - Tab-Vervollständigung
  - Pfeiltasten für frühere Befehle
  - `Ctrl + C` zum sauberen Abbrechen eines harmlosen Befehls
  - `Ctrl + L` oder `clear` zum Aufräumen des Terminals
- Notiere in `notizen/arbeitsprotokoll.md`, welche Routinen oder Shortcuts du verwendet hast und wofür.

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Arbeitsordner mit der gewünschten Struktur existiert. Die drei Testdateien sind angelegt. In deinem Arbeitsprotokoll stehen mindestens drei genutzte Terminal-Routinen oder Shortcuts.

### Aufgabe 2:

Dateiberechtigungen sichtbar machen und einordnen **Ziel:** Du liest Berechtigungen mit `ls -l` aus und ordnest owner, group und others sicher zu.

**Arbeitsauftrag:**  
- Ermittle mit passenden Befehlen:
  - deinen Benutzernamen
  - deine Gruppen
- Zeige die Dateien und Ordner in `~/ilp-linux/rechte` sowie den Arbeitsordner selbst mit `ls -l` an.
- Dokumentiere in `notizen/arbeitsprotokoll.md` zu mindestens vier Einträgen:
  - Name der Datei oder des Ordners
  - Berechtigungsanzeige aus `ls -l`
  - Besitzer
  - Gruppe
  - welche Rechte owner, group und others jeweils haben
- Vergleiche mindestens eine Datei mit einem Ordner und notiere, was dir an der Berechtigungsanzeige auffällt.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast für mindestens vier Einträge eine kurze Übersicht dokumentiert und kannst owner, group und others in der `ls -l`-Ausgabe sauber zuordnen.

### Aufgabe 3:

Berechtigungen gezielt ändern **Ziel:** Du passt Lese-, Schreib- und Ausführrechte mit `chmod` so an, dass verschiedene Soll-Zustände entstehen.

**Arbeitsauftrag:**  
- Arbeite im Ordner `~/ilp-linux/rechte`.
- Setze für `start.sh` einen Zustand, in dem nur du die Datei lesen, ändern und ausführen darfst.
- Setze für `bericht.txt` einen Zustand, in dem du lesen und schreiben darfst, die Gruppe nur lesen darf und others keinen Zugriff haben.
- Lege zusätzlich eine Datei `freigabe.txt` an.
- Setze für `freigabe.txt` einen Zustand, in dem:
  - du lesen und schreiben darfst
  - die Gruppe lesen und schreiben darf
  - others nur lesen dürfen
- Prüfe nach jeder Änderung die Rechte erneut mit `ls -l`.
- Führe `start.sh` aus und prüfe, ob der gesetzte Ausführungsstatus zu deinem Ziel passt.
- Notiere in deinem Arbeitsprotokoll:
  - welche Datei du geändert hast
  - welchen Soll-Zustand du erreichen wolltest
  - ob die Anzeige in `ls -l` dazu passt

**Erwartetes Ergebnis / Soll-Zustand:**  
Die drei Dateien haben unterschiedliche, bewusst gesetzte Berechtigungen. Du hast jede Änderung überprüft und dokumentiert.

### Aufgabe 4:

Software mit der Paketverwaltung installieren, prüfen und entfernen **Ziel:** Du nutzt die Paketverwaltung deines Systems für typische Alltagsaufgaben.

**Arbeitsauftrag:**  
- Nutze die Paketverwaltung deines Systems. Wenn du ein Debian-/Ubuntu-basiertes System verwendest, arbeite mit `apt`.
- Aktualisiere die Paketinformationen.
- Lass dir anzeigen, welche Pakete aktualisiert werden könnten.
- Suche dir ein kleines, unkritisches Paket aus, zum Beispiel `tree` oder `htop`, falls es noch nicht installiert ist.
- Prüfe vor der Installation die Paketinformationen.
- Installiere das Paket.
- Starte das installierte Programm einmal sinnvoll, zum Beispiel:
  - `tree` für deinen Arbeitsordner
  - `htop` zur Anzeige laufender Prozesse
- Entscheide anschließend bewusst:
  - ob du das Paket wieder entfernst
  - oder ob du es installiert lässt
- Dokumentiere in `notizen/arbeitsprotokoll.md`:
  - welches Paket du gewählt hast
  - mit welchen Befehlen du gesucht, installiert und geprüft hast
  - ob du es entfernt oder behalten hast

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast den typischen Ablauf Aktualisieren, Prüfen, Installieren und Entfernen oder Behalten mindestens einmal praktisch durchgeführt und dokumentiert.

### Aufgabe 5:

Paketquellen, Updates und sichere Terminal-Routine **Ziel:** Du prüfst Paketquellen, simulierst ein Update sinnvoll und formulierst deine persönliche Sicherheitsroutine.

**Arbeitsauftrag:**  
- Zeige die auf deinem System eingetragenen Paketquellen mit einer passenden Methode an.
- Identifiziere mindestens eine offizielle Paketquelle und notiere dazu:
  - die Quelle oder URL
  - die Distribution oder Version
  - einen sichtbaren Bestandteil wie Hauptbereich oder Komponente
- Führe eine sichere Prüfung auf mögliche Updates durch.
- Wenn dein System es unterstützt, simuliere ein Upgrade, statt es ungeprüft direkt auszuführen.
- Erstelle in `notizen/arbeitsprotokoll.md` eine persönliche Checkliste mit:
  - 5 Schritten, die du vor Updates oder sudo-Befehlen beachten willst
  - 3 Regeln für sicheres Arbeiten im Terminal
  - 3 Gewohnheiten für effizientes Arbeiten im Terminal

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast mindestens eine Paketquelle identifiziert, einen sicheren Update-Check durchgeführt und eine kurze persönliche Routine für sicheres und effizientes Arbeiten festgehalten.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Rechte mit Zahlenwerten umsetzen

**Ziel:** Du wendest Berechtigungen zusätzlich zur symbolischen Schreibweise auch numerisch an.

**Arbeitsauftrag:**  
- Lege im Ordner `~/ilp-linux/rechte` einen Unterordner `projektA` an.
- Erstelle darin die Dateien `info.txt`, `team.txt` und `deploy.sh`.
- Setze für jede Datei einen anderen sinnvollen Berechtigungszustand mit numerischer Schreibweise.
- Prüfe die Ergebnisse mit `ls -l`.
- Notiere zu jeder Datei:
  - welchen Zustand du erreichen wolltest
  - welche numerische Angabe du verwendet hast
  - ob das Ergebnis zu deiner Erwartung passt

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast mehrere Berechtigungen mit numerischer Schreibweise gesetzt und die Wirkung mit `ls -l` überprüft.

### Erweiterungsaufgabe 2: Paketinformationen genauer untersuchen

**Ziel:** Du untersuchst ein Paket über die reine Installation hinaus.

**Arbeitsauftrag:**  
- Wähle ein Paket aus, das auf deinem System installiert ist oder das du in Aufgabe 4 verwendet hast.
- Recherchiere mit passenden Paketmanager-Befehlen:
  - installierte Version
  - verfügbare Version
  - Herkunft aus einer Paketquelle
  - kurze Beschreibung
  - wichtige Abhängigkeiten
- Halte die Ergebnisse stichpunktartig in deinem Arbeitsprotokoll fest.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast zu einem Paket mehrere technische Informationen gesammelt und nachvollziehbar dokumentiert.

### Erweiterungsaufgabe 3: Eigene Linux-Alltagskarte erstellen

**Ziel:** Du sicherst dir dein Wissen in einer kompakten, später nutzbaren Form.

**Arbeitsauftrag:**  
- Erstelle in `notizen/arbeitsprotokoll.md` oder in einer separaten Datei eine Mini-Übersicht mit:
  - 5 Befehlen zur Navigation im Terminal
  - 3 Befehlen zum Prüfen von Berechtigungen
  - 3 Beispielen zum Anpassen von Berechtigungen
  - 3 Befehlen rund um Paketverwaltung
  - 5 Regeln oder Gewohnheiten für sicheres Arbeiten
- Formuliere die Übersicht so, dass du sie später als persönliche Spickhilfe nutzen kannst.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine kompakte, selbst erstellte Übersicht für deinen Linux-Alltag.

## Wichtige Hinweise

- Arbeite nur in deinem eigenen Home-Verzeichnis und in deinem Testordner.
- Nutze `sudo` nur dort, wo es wirklich nötig ist, vor allem bei der Paketverwaltung.
- Prüfe vor dem Drücken von Enter immer Befehl, Pfad und Optionen.
- Führe keine Löschbefehle in fremden oder unklaren Verzeichnissen aus.
- Installiere nur kleine, unkritische Pakete, die du wieder entfernen kannst.
- Wenn dein System nicht mit `apt` arbeitet, nutze die passenden Befehle deines Paketmanagers.
- Lies Fehlermeldungen vollständig und halte sie bei Bedarf in deinem Arbeitsprotokoll fest.

## Reflexionsfragen

- Bei welcher Aufgabe hast du dich im Terminal am sichersten gefühlt und warum?
- Welche Berechtigungsänderung konntest du am besten nachvollziehen?
- Wo war der Unterschied zwischen Datei- und Ordnerrechten für dich am deutlichsten?
- Welche Paketmanager-Befehle willst du dir dauerhaft merken?
- Welche drei Regeln willst du ab jetzt immer beachten, bevor du `sudo` verwendest?
- Welche Routine oder welcher Shortcut hat dir heute am meisten Zeit gespart?

---