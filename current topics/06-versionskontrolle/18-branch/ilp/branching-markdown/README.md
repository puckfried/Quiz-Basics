# Zusatzaufgabe: Branching und Markdown

## Ziel

Du formatierst zwei Texte nach einer Bildvorlage und übst dabei zweimal den vollständigen GitHub-Workflow:

```text
Branch erstellen → bearbeiten → committen → pushen → Pull Request → mergen → main pullen
```

Ändere nur die Formatierung. Der Inhalt der Texte soll gleich bleiben.

## Vorbereitung

1. Erstelle in deinem eigenen GitHub-Account ein neues Repository mit einer `README.md`.
2. Füge unter **Settings → Collaborators** mindestens `puckfried` als Collaborator hinzu.
3. Du darfst weitere Teilnehmende hinzufügen und gemeinsam arbeiten (siehe Hinweis am Ende). 
4. Klone das Repository und öffne es in VS Code.

```sh
git clone <repository-url>
cd <repository-name>
code .
```
5. Lege die Dateien `text-1.md` und `text-2.md` an und kopiere die beiden Starttexte hinein.


## Text 1

1. Erstelle einen Branch für den ersten Text.
    - `git switch -c format-text-1`
2. Formatiere `text-1.md` wie auf dem ersten Screenshot.
3. Committe und pushe den Branch.

```sh
git status
git add text-1.md
git commit -m "Format first text"
git push origin format-text-1
```

4. Öffne auf GitHub einen Pull Request und merge ihn in `main`.

## Zurück zu `main`

```sh
git switch main
git pull
```

Prüfe, ob die fertige Datei `text-1.md` jetzt auch lokal auf `main` liegt.

## Text 2

1. Erstelle **erst jetzt** einen neuen Branch für den zweiten Text.
    - `git switch -c format-text-2`
2. Formatiere `text-2.md` wie auf dem zweiten Screenshot.
3. Committe und pushe den Branch.

```sh
git status
git add text-2.md
git commit -m "Format second text"
git push origin format-text-2
```

4. Öffne wieder einen Pull Request und merge ihn in `main`.
5. Aktualisiere zum Abschluss deinen lokalen `main`:

```sh
git switch main
git pull
git log --oneline
```

## Fertig, wenn …

- das Repository in deinem GitHub-Account liegt
- `puckfried` als Collaborator eingeladen wurde
- beide Texte wie auf den Screenshots aussehen
- du zwei verschiedene Branches gepusht hast
- beide Pull Requests auf GitHub in `main` gemerged wurden
- dein lokaler `main` den fertigen Stand enthält

## Hinweis gemeinsam arbeiten

- Teilt die Aufgaben vor dem Start untereinander auf.
- Jede Person arbeitet auf einem eigenen Branch und erstellt einen eigenen Pull Request.
- Zwei Personen können jeweils einen der beiden Texte übernehmen.
- Für jede weitere mitarbeitende Person fügt ihr eine zusätzliche Markdown-Datei hinzu.
  - Beispiel: `bildlinks.md` mit passenden Bildern und ihren Links
  - Weitere Möglichkeiten: `quellen.md`, `tipps.md` oder `git-befehle.md`
- Vor einem neuen Branch immer zuerst zu `main` wechseln und `git pull` ausführen.
- Merged die Pull Requests nacheinander und prüft nach jedem Merge den aktuellen Stand.
