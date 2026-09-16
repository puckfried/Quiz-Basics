# Individuelle Learning Phase: GitHub-Remote-Repositories und Synchronisation in der Praxis

## Dein Ziel 

Du richtest ein eigenes GitHub-Repository ein, verbindest es mit einem lokalen Repository, synchronisierst Änderungen in beide Richtungen und nutzt GitHub zur einfachen Dokumentation. Außerdem lernst du den Grundablauf von Pull Requests kennen und erkennst einfache Merge-Konflikte in einer realistischen Übung.

## Das brauchst du 

- Ein GitHub-Konto
- Git auf deinem Rechner
- Ein Terminal oder eine Konsole
- Einen Editor, z. B. VS Code
- Internetzugang
- Einen lokalen Arbeitsordner für deine Übung, z. B. `github-remote-praxis`

## Zeitplanung 

- 10 Minuten: Aufgabe 1
- 20 Minuten: Aufgabe 2
- 20 Minuten: Aufgabe 3
- 25 Minuten: Aufgabe 4
- 20 Minuten: Aufgabe 5
- 25 Minuten: Erweiterungsaufgaben und Reflexion

## Basis-Aufgaben

### Aufgabe 1: 

GitHub-Repository anlegen und Oberfläche erkunden  
**Ziel:** Du legst ein eigenes Remote-Repository an und orientierst dich in der GitHub-Weboberfläche.  

**Arbeitsauftrag:**  
1. Melde dich bei GitHub an.  
2. Lege ein neues Repository an, z. B. `coretech-github-praxis`.  
3. Wähle eine kurze Beschreibung.  
4. Prüfe in der Weboberfläche mindestens diese Bereiche:
   - Repository-Startseite
   - Code
   - Issues
   - Pull requests
   - Settings
5. Notiere dir die URL des Repositories.  
6. Prüfe, ob das Repository leer ist oder bereits Dateien enthält.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast ein eigenes GitHub-Repository erstellt, kennst die wichtigsten Navigationsbereiche und hast die Remote-URL griffbereit.

### Aufgabe 2: 

Lokales Repository erstellen und mit GitHub verbinden  
**Ziel:** Du richtest ein lokales Repository ein und verknüpfst es mit deinem Remote-Repository auf GitHub.  

**Arbeitsauftrag:**  
1. Erstelle lokal einen neuen Arbeitsordner.  
2. Initialisiere darin ein Git-Repository.  
3. Erstelle mindestens diese Dateien:
   - `README.md`
   - `.gitignore`
   - eine einfache Textdatei oder Projektdatei, z. B. `notizen.txt`
4. Füge einen ersten sinnvollen Inhalt ein.  
5. Erstelle deinen ersten Commit.  
6. Verbinde dein lokales Repository mit dem zuvor angelegten GitHub-Repository als Remote.  
7. Prüfe die Remote-Konfiguration.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast lokal ein Git-Repository mit mindestens einem Commit erstellt und es erfolgreich mit deinem GitHub-Repository verbunden.

### Aufgabe 3: 

README dokumentieren und Änderungen zu GitHub übertragen  
**Ziel:** Du dokumentierst dein Projekt mit einer einfachen README und überträgst deine lokalen Änderungen ins Remote-Repository.  

**Arbeitsauftrag:**  
1. Ergänze die `README.md` mit folgenden Abschnitten:
   - Projektname
   - Kurzbeschreibung
   - Inhalt des Repositories
   - Erste Nutzung oder Zweck
2. Ergänze die `.gitignore` um mindestens 2 Einträge, die in deinem Umfeld sinnvoll sind.  
3. Speichere alle Änderungen.  
4. Erstelle einen weiteren Commit mit einer klaren Commit-Message.  
5. Übertrage deine Commits in das Remote-Repository auf GitHub.  
6. Öffne das Repository im Browser und kontrolliere, ob die Dateien und Inhalte sichtbar sind.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Repository auf GitHub enthält deine Dateien, mindestens zwei Commits und eine lesbare `README.md` als einfache Projektdokumentation.

### Aufgabe 4: 

Bestehendes Repository klonen und Synchronisation testen  
**Ziel:** Du klonst ein bestehendes Repository und übst das Abrufen und Integrieren von Änderungen.  

**Arbeitsauftrag:**  
1. Klone dein GitHub-Repository in einen zweiten lokalen Ordner, z. B. `github-remote-praxis-klon`.  
2. Prüfe im geklonten Repository die Commit-Historie und den aktuellen Stand der Dateien.  
3. Wechsle zurück in dein erstes lokales Repository.  
4. Ändere dort die `README.md` und eine weitere Datei.  
5. Committe die Änderungen und übertrage sie zu GitHub.  
6. Wechsle in den geklonten Ordner.  
7. Rufe die Änderungen aus dem Remote-Repository ab und integriere sie lokal.  
8. Kontrolliere, ob beide lokalen Arbeitsstände wieder identisch sind.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast ein Repository erfolgreich geklont, Änderungen aus einem anderen Arbeitsstand per GitHub synchronisiert und den aktuellen Stand lokal integriert.

### Aufgabe 5: 

Branch, Pull Request und einfachen Konflikt erkennen  
**Ziel:** Du verstehst den Grundablauf eines Pull Requests und erkennst einen einfachen Merge-Konflikt.  

**Arbeitsauftrag:**  
1. Erstelle in deinem ersten lokalen Repository einen neuen Branch, z. B. `feature-readme-update`.  
2. Ändere in diesem Branch genau eine Zeile in der `README.md`, die du dir gut merken kannst.  
3. Committe die Änderung und übertrage den Branch zu GitHub.  
4. Öffne auf GitHub den Hinweis zum Vergleichen des Branches und starte einen Pull Request.  
5. Sieh dir den Pull-Request-Bereich an:
   - Titel
   - Beschreibung
   - Changed files
   - Merge-Status
6. Erzeuge nun im Standard-Branch eine andere Änderung an genau derselben Zeile der `README.md`.  
7. Committe und pushe diese Änderung.  
8. Prüfe erneut den Pull Request auf GitHub oder versuche lokal, die Branches zusammenzuführen.  
9. Halte schriftlich fest, woran du den Konflikt erkannt hast.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast einen Branch erstellt, einen Pull Request geöffnet und einen einfachen Merge-Konflikt sichtbar gemacht oder lokal erkannt.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: README strukturieren und verbessern 

**Ziel:** Du machst deine Projektdokumentation übersichtlicher und GitHub-tauglich.  

**Arbeitsauftrag:**  
1. Ergänze deine `README.md` um weitere sinnvolle Abschnitte, z. B.:
   - Voraussetzungen
   - Projektstruktur
   - Nächste Schritte
2. Nutze Markdown-Elemente wie Überschriften, Listen und Codeblöcke.  
3. Prüfe die Darstellung direkt auf GitHub im Browser.  
4. Committe und pushe deine Überarbeitung.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine `README.md` ist klar gegliedert, gut lesbar und in GitHub sauber formatiert dargestellt.

### Erweiterungsaufgabe 2: Remote-Änderung direkt auf GitHub und lokal integrieren 

**Ziel:** Du übst einen typischen Fall, bei dem Änderungen direkt im Browser entstehen und lokal übernommen werden müssen.  

**Arbeitsauftrag:**  
1. Bearbeite eine Datei direkt in der GitHub-Weboberfläche, z. B. die `README.md` oder `notizen.txt`.  
2. Speichere die Änderung direkt im Standard-Branch mit einem Commit.  
3. Gehe in dein lokales Repository.  
4. Rufe die Remote-Änderung ab und integriere sie lokal.  
5. Kontrolliere, ob dein lokaler Stand wieder mit GitHub übereinstimmt.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine direkt auf GitHub erstellte Änderung lokal übernommen und den gemeinsamen Stand erfolgreich synchronisiert.

### Erweiterungsaufgabe 3: Kleines Synchronisationsprotokoll erstellen 

**Ziel:** Du hältst deinen Arbeitsablauf nachvollziehbar fest.  

**Arbeitsauftrag:**  
1. Erstelle eine Datei `workflow-notizen.md`.  
2. Notiere darin stichpunktartig:
   - welche Schritte du beim Verbinden mit einem Remote durchgeführt hast
   - wie du Änderungen zu GitHub übertragen hast
   - wie du Änderungen von GitHub lokal integriert hast
   - an welcher Stelle du den Merge-Konflikt erkannt hast
3. Committe und pushe die Datei.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein Repository enthält eine kurze, nachvollziehbare Ablaufdokumentation deines GitHub-Workflows.

## Wichtige Hinweise 

- Arbeite in kleinen, nachvollziehbaren Schritten.
- Verwende klare Commit-Messages.
- Prüfe vor jedem Push und Pull deinen aktuellen Branch.
- Lege keine sensiblen Daten, Passwörter oder privaten Schlüssel im Repository ab.
- Wenn ein Schritt nicht funktioniert, dokumentiere kurz die Fehlermeldung und deinen letzten erfolgreichen Stand.

## Reflexionsfragen 

- Wie erkennst du, ob dein lokales Repository mit dem Remote-Repository verbunden ist?
- Woran hast du gesehen, dass ein Push erfolgreich war?
- Woran hast du erkannt, dass neue Änderungen aus GitHub lokal angekommen sind?
- Was ist der praktische Nutzen eines Pull Requests, auch wenn du allein arbeitest?
- Wodurch entsteht ein einfacher Merge-Konflikt?
- Welche Informationen in deiner `README.md` helfen dir oder anderen am meisten?

---