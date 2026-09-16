# Versionskontrolle

## HEUTE

- Warum brauchen wir Versionskontrolle?
- Ein Projekt als Git-Repository initialisieren
- Änderungen prüfen, auswählen und als Commit speichern
- Die Git-Historie ansehen


## Versionskontrollsysteme

- Bei der Softwareentwicklung benötigst Du ein Versionskontrollsystem
- Es speichert nicht nur den aktuellen Stand, sondern eine nachvollziehbare Historie
- Du kannst sehen, was geändert wurde, wann es geändert wurde und von wem
- Frühere Stände gehen nicht einfach verloren
- Versionskontrolle ist besonders wichtig für die Zusammenarbeit
- Versionskontrollsysteme helfen bei:
    - Arbeiten an mehreren Aufgaben
    - Änderungen an denselben Dateien
    - Fehlersuche und Wiederherstellung
    - Codeüberprüfung

### Ein vereinfachtes Beispiel aus einem echten Projekt

- Du arbeitest an einer neuen Funktion, die noch nicht fertig ist
- Währenddessen wird ein kritischer Fehler in der stabilen Version gefunden
- Du musst Deine unfertige Arbeit sicher stehen lassen
- Du behebst den Fehler und kehrst danach zu Deiner ursprünglichen Aufgabe zurück
- Ein Versionskontrollsystem macht solche getrennten Arbeitsstände handhabbar

## Git

- Versionskontrollsysteme gibt es seit ungefähr 50 Jahren
    - Das heute überwiegend verwendete System ist **Git**
    - Vor Git war **Subversion** (`svn`) weit verbreitet
- Git basiert auf **Repositories**
    - Ein Repository ist ein Projektordner, dessen Änderungen Git verwaltet
    - Git speichert die Historie der erfassten Dateien in Commits
    - Jeder Projektordner kann in ein Git-Repository umgewandelt werden -> Repo

- Ein Commit ist ein bewusst gespeicherter Stand (Snapshot)
    - Ein Commit kann hinzugefügte, veränderte und gelöschte Dateien enthalten
    - Zusammen bilden die Commits die Historie des Projekts


### Git-Konfiguration kurz prüfen

- Bevor Du committest, sollte Git wissen, wer Du bist
- Name und E-Mail werden in den Metadaten Deiner Commits gespeichert
- Diese Angaben dienen nicht zur Anmeldung bei GitHub oder GitLab

```sh
git config --global user.name
git config --global user.email
```

- Falls noch keine Werte gesetzt sind:

```sh
git config --global user.name "Dein Name"
git config --global user.email "deine.email@example.com"
```

## Erster Git-Durchlauf: Repository und erster Commit

### 1. Status prüfen

```sh
git status
```

- Wir befinden uns noch nicht in einem Git-Repository
- Lies die Fehlermeldung gemeinsam mit den Schülern
- `git status` ist einer der wichtigsten Git-Befehle
- Wenn Du nicht weißt, was gerade los ist: zuerst `git status`

### 2. Repository initialisieren

```sh
git init
git status
```

- `git init` macht den aktuellen Ordner zu einem Git-Repository
- Dabei entsteht der versteckte Ordner `.git`
- `.git` enthält die Verwaltungsdaten und die Historie des Repositories
- Bearbeite den Inhalt von `.git` nicht von Hand
- Nach `git init` erkennt Git unsere Dateien, speichert sie aber noch nicht automatisch

### 3. Änderungen für den Commit auswählen

- Unser einfaches mentales Modell:

```text
Arbeitsordner -- git add --> Staging-Bereich -- git commit --> Historie
```

- Im Arbeitsordner erstellst und bearbeitest Du Dateien
- Mit `git add` wählst Du Änderungen für den nächsten Commit aus
- Diese Auswahl heißt **Staging-Bereich** oder **Stage**

```sh
git add recipes.txt
git status

git add assets
git status

git add .
git status
```

- `git add <pfad>` wählt eine bestimmte Datei oder einen bestimmten Ordner aus
- `git add .` wählt alle Änderungen im aktuellen Projektordner aus
- Prüfe nach jedem `git add` erneut den Status
- Welche Dateien sind noch untracked?
- Welche Änderungen sind bereits „ready to be committed“?

### 4. Ersten Commit erstellen

```sh
git commit -m "Add pancake recipe"
git status
```

- Ein Commit speichert die ausgewählten Änderungen in der Historie
- Die Commit-Nachricht beschreibt den gespeicherten Arbeitsschritt
- Eine gute erste Regel für Commit-Nachrichten:
    - kurz und eindeutig
    - im Imperativ formuliert

- Beispiele:
    - `Add pancake recipe`
    - `Improve banana bread recipe`
    - `Fix broken pancake image`
    - `Fix typo`

### 5. Historie ansehen

```sh
git log
git log --oneline
```

- `git log` zeigt die Commits des Repositories
- Hier siehst Du Autor, Datum und Commit-Nachricht
- `git log --oneline` zeigt eine kurze Übersicht


## Kleine Aufgabe zum Abschluss

- Erstelle einen Projektordner `albums` und initialisiere ihn als Repository
    - Öffne WSL
    - Erstelle einen neuen Projektordner: `mkdir albums`
    - Initialisiere Git: `git init`
    - Öffne den Ordner mit VS Code: `code .`

- Füge drei verschiedene Alben als Dateien hinzu und committe jedes separat



## Zusammenfassung

- Versionskontrollsysteme helfen bei der Zusammenarbeit
- Versionskontrollsysteme helfen bei parallelen Versionen
- Git ist der De-facto-Standard der Versionskontrollsysteme
- Git-Befehle: `init`, `status`, `add`, `commit`, `log`
