# WSL- und Terminal-Praxiswerkstatt

Du musst nicht alle Aufgaben bearbeiten. Wähle eine Aufgabe, die zu deinem Stand passt. Wenn du fertig bist, kannst du eine Erweiterung ausprobieren oder zu einer anderen Aufgabe wechseln.

Die ersten Aufgaben wiederholen Themen aus dem Unterricht. Die späteren Aufgaben führen neue Befehle ein. Lies neue Befehle zuerst vollständig und führe sie nur in den genannten Übungsordnern aus.

## So funktionieren die Aufgaben

1. Lies zuerst das Ziel und den Soll-Zustand.
2. Versuche selbst, einen ersten Schritt zu finden.
3. Öffne die Tipps, wenn du Unterstützung brauchst.
4. Prüfe am Ende, ob dein Ergebnis wirklich funktioniert.

Es gibt keine feste Zeitvorgabe und keine formale Abgabe. Ein verstandener Lösungsweg ist wichtiger als möglichst viele erledigte Aufgaben.

## Wichtige Regeln

- Arbeite nur in deinem Home-Verzeichnis oder in dem ausdrücklich genannten WSL-Übungsordner.
- Ersetze Platzhalter wie `DEIN_WINDOWS_NAME` durch den passenden Namen auf deinem Rechner.
- Verwende die Tab-Taste, um Datei- und Ordnernamen zu vervollständigen.
- Für diese Aufgaben werden weder `sudo` noch Löschbefehle benötigt.
- `>` kann eine vorhandene Datei überschreiben. Verwende damit nur die neu genannten Übungsdateien.

---

## Inhaltsverzeichnis

- [Aufgabe 1: Eine WSL-Übergabestation bauen](#aufgabe-1-eine-wsl-übergabestation-bauen) – Erstelle und organisiere Dateien, die auch unter Windows sichtbar sind.
- [Aufgabe 2: Zwei Dateisysteme, mehrere Wege](#aufgabe-2-zwei-dateisysteme-mehrere-wege) – Vergleiche Linux-Home, Windows-Home sowie absolute und relative Pfade.
- [Aufgabe 3: Eine lange Datei untersuchen](#aufgabe-3-eine-lange-datei-untersuchen) – Vergleiche `cat` und `less` an einer echten Systemdatei.
- [Aufgabe 4: Programme im System finden](#aufgabe-4-programme-im-system-finden) – Verbinde `ls`, `grep`, `wc`, `sort`, `|` und `>`.
- [Aufgabe 5: Befehle selbstständig erforschen](#aufgabe-5-befehle-selbstständig-erforschen) – Nutze Hilfeseiten und finde heraus, wo Befehle herkommen.
- [Aufgabe 6: Windows-Werkzeuge aus WSL starten](#aufgabe-6-windows-werkzeuge-aus-wsl-starten) – Öffne Explorer und Notepad aus dem Linux-Terminal.

Für einen Einstieg eignen sich die Aufgaben 1 bis 3. Die Aufgaben 4 bis 6 enthalten zusätzliche Befehle, die wir noch nicht vollständig im Unterricht besprochen haben.

---

## Aufgabe 1: Eine WSL-Übergabestation bauen

### Ziel

Erstelle mit Ubuntu einen Arbeitsordner im Windows-Benutzerverzeichnis. Prüfe anschließend, ob du dieselben Dateien auch unter Windows findest.

### Deine Aufgabe

1. Wechsle nach `/mnt/c/Users` und lass dir die vorhandenen Benutzerordner anzeigen.
2. Finde deinen Windows-Benutzerordner. Nutze beim Wechseln die Tab-Taste.
3. Erstelle darin den Ordner `wsl-uebergabe` mit den Unterordnern `entwurf`, `fertig` und `notizen`.
4. Lege in `entwurf` die Dateien `linux-notiz.txt` und `windows-notiz.txt` an.
5. Schreibe mit `nano` mindestens drei gelernte Terminalbefehle in `linux-notiz.txt`.
6. Verschiebe die Datei nach `fertig` und benenne sie dabei in `linux-notiz-fertig.txt` um.
7. Zeige den Inhalt zuerst mit `cat` und anschließend mit `less` an.
8. Öffne den Ordner `wsl-uebergabe` im Windows-Explorer und finde die Datei dort wieder.

### Fertig, wenn

- die drei Unterordner vorhanden sind
- `linux-notiz-fertig.txt` nur noch in `fertig` liegt
- du den Inhalt im Linux-Terminal lesen kannst
- du dieselbe Datei im Windows-Explorer gefunden hast

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
cd /mnt/c/Users
ls
cd DEIN_WINDOWS_NAME
mkdir -p wsl-uebergabe/entwurf wsl-uebergabe/fertig wsl-uebergabe/notizen
cd wsl-uebergabe
touch entwurf/linux-notiz.txt entwurf/windows-notiz.txt
nano entwurf/linux-notiz.txt
mv entwurf/linux-notiz.txt fertig/linux-notiz-fertig.txt
cat fertig/linux-notiz-fertig.txt
less fertig/linux-notiz-fertig.txt
```

Beende `less` mit `q`.

Der entsprechende Windows-Pfad beginnt normalerweise so:

```text
C:\Users\DEIN_WINDOWS_NAME\wsl-uebergabe
```

</details>

<details>
<summary>Zusatzidee</summary>

Bearbeite `windows-notiz.txt` mit einem Windows-Texteditor. Öffne die Datei danach wieder mit `cat` im Ubuntu-Terminal.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 2: Zwei Dateisysteme, mehrere Wege


### Ziel

Unterscheide das Linux-Home vom Windows-Home und erreiche Orte über unterschiedliche Pfade.

### Deine Aufgabe

1. Wechsle in dein Linux-Home und notiere den vollständigen Pfad.
2. Wechsle mit einem absoluten Pfad nach `/mnt/c/Users`.
3. Gehe von dort mit einem relativen Pfad in deinen Windows-Benutzerordner.
4. Wechsle mit `~` direkt zurück in dein Linux-Home.
5. Gehe erneut zum Windows-Benutzerordner, diesmal möglichst mit Tab-Vervollständigung.
6. Erstelle im Linux-Home die Datei `pfadkarte.txt`.
7. Notiere darin:
   - den absoluten Pfad zu deinem Linux-Home
   - den absoluten WSL-Pfad zu deinem Windows-Home
   - den passenden Windows-Pfad mit `C:\Users\...`
   - die Bedeutung von `~`, `.` und `..`

### Fertig, wenn

Du kannst erklären, warum Linux-Home und Windows-Home verschiedene Orte sind und von welchem Ort ein relativer Pfad gelesen wird.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
cd ~
pwd
cd /mnt/c/Users
ls
cd DEIN_WINDOWS_NAME
pwd
cd ~
nano pfadkarte.txt
```

`pwd` zeigt immer den vollständigen Pfad deines aktuellen Arbeitsortes.

</details>

<details>
<summary>Zusatzidee</summary>

Starte in `/mnt/c/Users/DEIN_WINDOWS_NAME` und erreiche `/mnt/c` nur mit `..`. Prüfe nach jedem Schritt mit `pwd`, wo du angekommen bist.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 3: Eine lange Datei untersuchen


### Ziel

Vergleiche `cat` und `less` und lerne, in einer längeren Datei gezielt nach Informationen zu suchen.

### Deine Aufgabe

1. Prüfe, ob die Datei `/etc/services` vorhanden ist.
2. Zeige sie einmal mit `cat` an und beobachte, was passiert.
3. Öffne dieselbe Datei mit `less`.
4. Bewege dich zeilen- und seitenweise durch den Text.
5. Suche nach dem Begriff `http`.
6. Springe zum nächsten Treffer.
7. Beende `less`, ohne das Terminalfenster zu schließen.
8. Notiere in `~/lese-notizen.txt`, für welche Art von Datei du `cat` und für welche du `less` verwenden würdest.

### Fertig, wenn

Du hast in `less` mindestens zwei Treffer gefunden und kannst den Unterschied zwischen `cat` und `less` in eigenen Worten erklären.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
ls -l /etc/services
cat /etc/services
less /etc/services
nano ~/lese-notizen.txt
```

In `less`:

- `/http` sucht nach `http`
- `n` springt zum nächsten Treffer
- die Leertaste springt eine Seite weiter
- `q` beendet `less`

Falls `/etc/services` auf deinem System fehlt, verwende stattdessen:

```bash
less /usr/share/common-licenses/GPL-3
```

</details>

<details>
<summary>Zusatzidee</summary>

Öffne eine zweite längere Datei mit `less` und finde heraus, ob die Suche Groß- und Kleinschreibung unterscheidet.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 4: Programme im System finden


### Ziel

Verbinde kleine Terminalwerkzeuge und speichere nur die Ausgabe, die dich interessiert.

### Deine Aufgabe

1. Lass dir die Programmnamen unter `/usr/bin` seitenweise anzeigen.
2. Filtere alle Namen, die die Buchstaben `sh` enthalten.
3. Zähle die gefundenen Zeilen.
4. Sortiere die Treffer in umgekehrter alphabetischer Reihenfolge.
5. Schreibe das sortierte Ergebnis in die neue Datei `~/programme-mit-sh.txt`.
6. Prüfe den gespeicherten Inhalt mit `less`.
7. Erkläre in eigenen Worten, was `|` und `>` in deinem Ablauf bewirkt haben.

### Fertig, wenn

`~/programme-mit-sh.txt` existiert, nur passende Namen enthält und du die Anzahl der gefundenen Zeilen kennst.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
ls /usr/bin | less
ls /usr/bin | grep sh
ls /usr/bin | grep sh | wc -l
ls /usr/bin | grep sh | sort -r
ls /usr/bin | grep sh | sort -r > ~/programme-mit-sh.txt
less ~/programme-mit-sh.txt
```

- `|` gibt die Ausgabe links an den nächsten Befehl weiter.
- `>` schreibt die Ausgabe in eine Datei und kann vorhandenen Inhalt überschreiben.
- Verwende einen anderen Dateinamen, falls `~/programme-mit-sh.txt` bereits wichtige Inhalte besitzt.

</details>

<details>
<summary>Zusatzidee</summary>

Wähle eine andere Zeichenfolge und erstelle dafür eine zweite Ergebnisdatei. Welche Suche liefert mehr Treffer?

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 5: Befehle selbstständig erforschen


### Ziel

Finde Informationen zu Befehlen, ohne direkt nach einer fertigen Lösung zu fragen.

### Deine Aufgabe

1. Finde heraus, ob `cd` und `ls` direkt zur Shell gehören oder als eigene Programme vorliegen.
2. Ermittle, an welchem Ort das Programm `nano` liegt.
3. Öffne die Kurzhilfe von `mkdir` und finde die Erklärung für `-p`.
4. Öffne die Handbuchseite von `mv` und suche nach Informationen zum Umbenennen.
5. Erstelle `~/befehlsforscher.txt` und notiere mindestens vier Erkenntnisse.
6. Notiere außerdem, wie du eine Hilfeansicht wieder verlassen kannst.

### Fertig, wenn

Deine Notiz enthält Informationen aus mindestens drei verschiedenen Hilfe- oder Untersuchungsbefehlen.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
type cd
type ls
which nano
mkdir --help | less
man mv
nano ~/befehlsforscher.txt
```

Die Handbuchseite und `less` werden mit `q` beendet.

Falls `man` nicht installiert ist, verwende:

```bash
mv --help | less
```

</details>

<details>
<summary>Zusatzidee</summary>

Untersuche mit `type`, ob `pwd`, `cat` und `less` Shell-Befehle oder eigene Programme sind. Gibt es einen Befehl, bei dem dich das Ergebnis überrascht?

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Aufgabe 6: Windows-Werkzeuge aus WSL starten


### Ziel

Nutze die Verbindung zwischen Ubuntu und Windows und übersetze Pfade zwischen beiden Systemen.

### Deine Aufgabe

1. Erstelle im Linux-Home den Ordner `wsl-interop` und darin die Datei `austausch.txt`.
2. Schreibe mit `nano` einen kurzen Text in die Datei.
3. Lass dir die Windows-Schreibweise deines aktuellen Linux-Pfads anzeigen.
4. Öffne den aktuellen Ordner direkt aus dem Terminal im Windows-Explorer.
5. Öffne `austausch.txt` aus WSL heraus mit dem Windows-Editor Notepad.
6. Ergänze in Notepad eine Zeile und speichere die Datei.
7. Kontrolliere die Änderung anschließend mit `cat` im Linux-Terminal.
8. Übertrage den Dateiinhalt optional in die Windows-Zwischenablage und füge ihn in einer Windows-Anwendung ein.

### Fertig, wenn

Du hast dieselbe Datei mit einem Linux- und einem Windows-Programm bearbeitet und kannst den Linux- sowie den Windows-Pfad zu ihr zeigen.

<details>
<summary>Tipps und mögliche Befehle</summary>

```bash
mkdir -p ~/wsl-interop
cd ~/wsl-interop
touch austausch.txt
nano austausch.txt
wslpath -w "$(pwd)"
explorer.exe .
notepad.exe "$(wslpath -w "$(pwd)/austausch.txt")"
cat austausch.txt
```

Für die optionale Zwischenablage:

```bash
cat austausch.txt | clip.exe
```

- `wslpath -w` übersetzt einen Linux-Pfad in eine Windows-Schreibweise.
- Windows-Programme werden aus WSL mit ihrer Endung `.exe` gestartet.
- Der Punkt bei `explorer.exe .` bedeutet: Öffne den aktuellen Ordner.

</details>

<details>
<summary>Zusatzidee</summary>

Starte aus einer Windows-PowerShell einen einzelnen Linux-Befehl:

```powershell
wsl pwd
```

Vergleiche die Ausgabe mit `pwd` in deinem bereits geöffneten Ubuntu-Terminal.

</details>

[Zurück zum Inhaltsverzeichnis](#inhaltsverzeichnis)

---

## Selbstcheck zum Abschluss

- Zwischen welchen zwei Dateisystemen hast du heute gearbeitet?
- Welcher Pfad war absolut und welcher relativ?
- Wann war `less` hilfreicher als `cat`?
- Was hat eine Pipe mit der Ausgabe eines Befehls gemacht?
- Welches Windows-Werkzeug konntest du direkt aus WSL starten?
- Welchen neuen Befehl möchtest du weiter untersuchen?
