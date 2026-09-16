# Linux-Terminal mit WSL

## heute

- Ubuntu mit WSL unter Windows installiert
- Linux- und Windows-Verzeichnisse unterschieden
- im Terminal zwischen Ordnern gewechselt
- Ordner und Dateien erstellt
- Dateien verschoben und umbenannt
- Textdateien mit `nano` bearbeitet
- Dateien mit `cat` und `less` angesehen

## WSL und Ubuntu

**WSL** steht für **Windows Subsystem for Linux**. Damit können wir eine Linux-Umgebung direkt unter Windows verwenden. Wir haben dafür die Linux-Distribution **Ubuntu** installiert.

WSL 2 verwendet einen echten Linux-Kernel in einer kleinen, von Windows verwalteten virtuellen Maschine. Im Gegensatz zu einer klassischen VM müssen wir dafür nicht selbst virtuelle Hardware, Festplatten oder ein eigenes Fenster konfigurieren.

### Einordnung des Hypervisors

- Hyper-V verwendet eine Typ-1-Hypervisor-Architektur.
- Der Hypervisor liegt zwischen der Hardware und den Betriebssystem-Umgebungen.
- Windows läuft dabei in der sogenannten Root-Partition und verwaltet die weiteren virtuellen Umgebungen.
- WSL 2 nutzt diese Virtualisierungstechnik, ist aber nicht selbst der Typ-1-Hypervisor.

Die verwendete WSL-Version lässt sich in einer Windows-PowerShell prüfen:

```powershell
wsl --list --verbose
```

## Linux- und Windows-Verzeichnisse

Linux und Windows besitzen jeweils ein eigenes Home-Verzeichnis.

| Ort | Pfad in WSL |
|---|---|
| Linux-Home | `~` |
| Windows-Benutzerordner | `/mnt/c/Users/<Windows-Benutzername>` |

Die Tilde `~` wird auf einer deutschen Tastatur mit `Alt Gr` + `+` geschrieben.

`/mnt/c` ist das unter Linux eingebundene Windows-Laufwerk `C:`. Für Linux-Projekte ist das Linux-Home normalerweise der bessere Arbeitsort. `/mnt/c` eignet sich, wenn Dateien bewusst mit Windows ausgetauscht werden sollen.

Pfade können auf unterschiedliche Arten geschrieben werden:

- `/mnt/c/Users/...` beginnt bei `/` und ist ein **absoluter Pfad**.
- `ablage/eingang` beginnt am aktuellen Ort und ist ein **relativer Pfad**.
- `..` steht für das übergeordnete Verzeichnis.
- `~` steht für das eigene Linux-Home.

## Terminalbefehle

Bei Datei- und Ordnernamen möglichst die **Tab-Taste** verwenden. Die Shell vervollständigt damit bekannte Namen und viele Tippfehler werden vermieden.

| Befehl | Bedeutung |
|---|---|
| `cd ORDNER` | in einen Ordner wechseln |
| `cd ..` | eine Ordnerebene nach oben wechseln |
| `mkdir name` | einen neuen Ordner `name` erstellen |
| `mkdir -p ablage/eingang` | `ablage` und darin `eingang` erstellen |
| `mkdir -p ablage/ausgang ablage/muell` | mehrere Unterordner auf einmal erstellen |
| `touch mail1.txt mail2.txt` | zwei leere Dateien erstellen |
| `mv QUELLE ZIEL` | eine Datei verschieben oder umbenennen |
| `nano befehle.md` | eine Datei im Texteditor Nano öffnen oder neu erstellen |
| `cat befehle.md` | den gesamten Inhalt einer kurzen Datei anzeigen |
| `less befehle.md` | eine längere Datei seitenweise ansehen und durchsuchen |

Beispiel zum Verschieben einer Datei in den übergeordneten Ordner `ausgang`:

```bash
mv mail1.txt ../ausgang/
```

Beispiel zum Umbenennen einer Datei:

```bash
mv mail2.txt mail-kunde.txt
```

### Nano bedienen

- `Strg` + `O`: speichern
- `Enter`: Dateinamen bestätigen
- `Strg` + `W`: nach Text suchen
- `Strg` + `X`: Nano beenden

### Less bedienen

- Pfeiltasten: zeilenweise bewegen
- Leertaste: eine Seite weiter
- `/WORT`: nach einem Wort suchen
- `n`: zum nächsten Treffer springen
- `q`: Less beenden

Merksatz:

> `cat` ist praktisch für kurze Dateien. `less` ist angenehmer für längere Dateien.
