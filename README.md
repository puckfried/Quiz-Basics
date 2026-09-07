# CTF Lernquiz

Statisches, zweisprachiges Lernquiz. Alle 96 Fragen basieren ausschließlich auf dem aktuellen Stoff in `../CTF-26a`; der Ordner `vorbereitung` wurde nicht verwendet.

## Lokal starten

```bash
python3 scripts/questions.py
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen. Ein direktes Öffnen von `index.html` funktioniert wegen der JSON-Ladezugriffe nicht zuverlässig.

## Ein neues Thema hinzufügen

1. Eine weitere JSON-Datei in `questions/` anlegen; eine vorhandene Datei eignet sich als Vorlage.
2. `python3 scripts/questions.py` ausführen. Das Skript validiert alle Daten und erzeugt `questions/index.json` neu.
3. Änderungen pushen. Der GitHub-Pages-Workflow erledigt dieselben Prüfungen und veröffentlicht die Seite.

Damit ist keine manuelle Änderung an HTML oder JavaScript nötig. IDs müssen projektweit eindeutig sein. Jede Frage benötigt deutsche und englische Texte sowie einen Quellenpfad innerhalb von `CTF-26a`.

## GitHub Pages

Das Verzeichnis ist als eigenes Repository gedacht. Unter **Settings → Pages → Source** muss **GitHub Actions** ausgewählt sein.

## VPS

Nach dem Kopieren oder Auschecken einmal `python3 scripts/questions.py` ausführen und den Ordner anschließend mit einem statischen Webserver wie Nginx bereitstellen. Eine serverseitige Anwendung ist nicht erforderlich.
