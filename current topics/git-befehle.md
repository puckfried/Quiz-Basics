# Unsere Git-Befehle

Diese Liste sammeln und erweitern wir gemeinsam. In jeder Zeile steht ein Befehl mit einer kurzen Erklärung.

## Git prüfen

`git --version` – zeigt die installierte Git-Version an.

## Name und E-Mail konfigurieren

`git config --global user.name` – zeigt den global gespeicherten Namen an.

`git config --global user.email` – zeigt die global gespeicherte E-Mail-Adresse an.

`git config --global user.name "Dein Name"` – speichert den Namen global für deine Git-Commits.

`git config --global user.email "deine.email@example.com"` – speichert die E-Mail-Adresse global für deine Git-Commits.

`--global` bedeutet, dass die Einstellung für deinen Benutzer und damit für alle deine Repositories gilt.

## Ein Repository beginnen

`git init` – macht das aktuelle Verzeichnis zu einem Git-Repository und erstellt darin den versteckten Ordner `.git`.

`git status` – zeigt den aktuellen Zustand des Repositories und seiner Dateien an. Wenn du unsicher bist, prüfe zuerst den Status.

## Änderungen für einen Commit auswählen

`git add recipes.txt` – fügt die Änderungen der Datei `recipes.txt` zum Staging-Bereich hinzu.

`git add assets` – fügt die Änderungen im Ordner `assets` zum Staging-Bereich hinzu.

`git add .` – fügt alle Änderungen ab dem aktuellen Verzeichnis zum Staging-Bereich hinzu.

## Änderungen genauer prüfen

`git status -s` – zeigt den Status in einer kurzen, kompakten Form an.

`git diff` – zeigt die genauen Änderungen, die noch nicht zum Staging-Bereich hinzugefügt wurden.

`git diff --staged` – zeigt die genauen Änderungen, die bereits im Staging-Bereich liegen und in den nächsten Commit aufgenommen würden.

## Einen Commit erstellen

`git commit -m "Add pancake recipe"` – speichert die zuvor ausgewählten Änderungen als Commit. Mit `-m` wird die Commit-Nachricht direkt angegeben.

## Die Historie ansehen

`git log` – zeigt die Commit-Historie mit Autor, Datum und Commit-Nachricht an.

`git log --oneline` – zeigt jeden Commit verkürzt in einer Zeile an.

`git log --oneline --graph --decorate --all` – zeigt die Historie kompakt als Graph mit allen Branches und ihren Namen an.

## Mit Remote-Repositories arbeiten

`git remote -v` – zeigt die gespeicherten Remote-Verbindungen und ihre Adressen an.

`git clone <repository-url>` – lädt ein Remote-Repository mit seiner Historie, seinen Branches und der Verbindung `origin` als neuen Ordner herunter.

`git remote add <name> <repository-url>` – verbindet ein vorhandenes lokales Repository unter dem gewählten Namen mit einem Remote-Repository. Der übliche Name ist `origin`.

`git fetch` – lädt neue Informationen und Commits vom verbundenen Remote-Repository, verändert aber nicht die Dateien im Arbeitsordner.

`git fetch origin` – lädt neue Informationen und Commits ausdrücklich vom Remote `origin`.

`git pull` – lädt neue Commits vom verbundenen Remote-Branch und integriert sie in den aktuellen lokalen Branch.

`git pull origin main` – lädt den Branch `main` ausdrücklich vom Remote `origin` und integriert ihn in den aktuellen Branch.

`git push` – überträgt lokale Commits zum verbundenen Remote-Branch.

`git push -u origin <branch-name>` – überträgt den genannten lokalen Branch zu `origin` und richtet ihn als verbundenen Remote-Branch ein. Danach reicht normalerweise `git push`.

`git push origin <branch-name>` – überträgt den genannten lokalen Branch zu `origin`.

`git push --force` – erzwingt das Überschreiben der Remote-Historie. Verwende diesen Befehl nicht ohne einen sehr guten Grund, da dabei Commits verloren gehen können.

## Änderungen rückgängig machen

`git restore datei` – verwirft nicht gestagte Änderungen an der genannten Datei. Vorsicht: Diese lokalen Änderungen gehen dabei verloren.

`git restore .` – verwirft alle nicht gestagten Änderungen ab dem aktuellen Verzeichnis. Auch hierbei gehen die lokalen Änderungen verloren.

`git restore --staged datei` – entfernt die Datei aus dem Staging-Bereich, behält ihre Änderungen aber im Arbeitsordner.

`git revert <commit-hash>` – erstellt einen neuen Commit, der die Änderungen eines vorhandenen Commits rückgängig macht.

## Mit Branches arbeiten

`git branch` – zeigt alle lokalen Branches an. Das Sternchen markiert den aktuell ausgecheckten Branch.

`git branch <branch-name>` – erstellt einen neuen Branch, wechselt aber noch nicht dorthin.

`git branch -M main` – benennt den aktuellen Branch in `main` um.

`git switch <branch-name>` – wechselt zu einem vorhandenen Branch.

`git switch -c <branch-name>` – erstellt einen neuen Branch und wechselt direkt dorthin.

`git switch --detach <commit-hash>` – wechselt direkt zu einem bestimmten Commit, ohne auf einem Branch zu sein. Dieser Zustand heißt „detached HEAD“.

`git checkout -b <branch-name>` – ist die ältere Schreibweise, um einen neuen Branch zu erstellen und direkt dorthin zu wechseln.

## Git-Hilfe verwenden

`git help` – zeigt die allgemeine Git-Hilfe und häufig verwendete Befehle an.

`git help init` – öffnet die ausführliche Hilfe zum Befehl `git init`.

`git init --help` – öffnet ebenfalls die ausführliche Hilfe zu `git init`.

`git init -h` – zeigt eine kurze Hilfe direkt im Terminal an.

`git help -a` – zeigt eine Übersicht aller verfügbaren Git-Befehle an.

## Unser bisheriger Git-Ablauf

```text
Arbeitsordner -- git add --> Staging-Bereich -- git commit --> Historie
```

1. Mit `git status` prüfen, was sich geändert hat.
2. Mit `git add` die gewünschten Änderungen auswählen.
3. Noch einmal mit `git status` prüfen.
4. Mit `git commit -m "Nachricht"` einen Commit erstellen.
5. Mit `git log --oneline` die Historie ansehen.
