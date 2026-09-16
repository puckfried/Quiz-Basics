# Linux Rechte

## Pfade

- Du hast zwei Arten von Pfaden in Linux
    - `absolute` und `relative`
    - Relative Pfade sind Pfade relativ zum aktuellen Arbeitsverzeichnis
    - Absolute Pfade zeigen den vollständigen Pfad der Datei an
- Hier
    - `cd /` ist ein absoluter Pfad
    - `cd /home/dci/projects` ist ein absoluter Pfad
    - `cd projects` ist ein relativer Pfad
    - `cd ..` ist ein relativer Pfad, "eine Ebene nach oben, zum Elternverzeichnis"
    - `cd .` macht nichts, `.` bezieht sich auf das aktuelle Verzeichnis
    - `cd ./projects` und `cd projects` ist dasselbe
    - Du kannst `.` und `..` in `ls -la` sehen
    - `~` wird als absoluter Pfad angesehen... irgendwie... meistens...

- Auf Linux werden Pfade, die mit einem Punkt (`.`) beginnen, als "versteckt" angesehen

### `ls` mit Optionen
- `-a`: auch versteckte Namen anzeigen
    - versteckt bedeutet nicht geschützt
- `-l`: Details wie Rechte, Besitzer, Gruppe, Größe und Änderungszeit
- `-la` kombiniert die beiden Kurzoptionen


### Linux-Verzeichnisstruktur

| Ort | Bedeutung |
|---|---|
| `/` | Anfang des Linux-Dateisystems |
| `~` | eigenes Linux-Home |
| `/home` | Home-Verzeichnisse der Benutzer |
| `/etc` | systemweite Konfiguration |
| `/var` | veränderliche Daten und Logs |
| `/tmp` | temporäre Dateien |
| `/mnt/c` | Windows-Laufwerk `C:` unter WSL |


## Dateirechte verstehen

Typische Ausgabe:

```text
-rw-r--r-- 1 root root ... rechte.html
│└─┬┘└┬┘└┬┘
│  │  │  └─ others
│  │  └──── group
│  └─────── owner
└────────── Dateityp
```

- erstes Zeichen: `-` für Datei, `d` für Ordner
- danach je drei Rechte für owner, group und others
- Nginx arbeitet nicht als `root` und benötigt hier das Leserecht bei `others`

| Recht | Datei | Ordner |
|---|---|---|
| `r` | Inhalt lesen | Namen auflisten |
| `w` | Inhalt verändern | Einträge anlegen, löschen oder umbenennen |
| `x` | Datei ausführen | Ordner betreten oder durchqueren |

### weitere Beispiele

```
-rw-r--r-- 1 joel    joel        0 Jan 23 13:02 catto.txt
-rw-r--r-- 1 sasha   sasha       0 Jan 11 10:05 doggo.txt
-rw-r--r-- 1 syslog  adm     41187 Jan 23 13:05 auth.log
```

- catto.txt gehört dem Benutzer `joel` und der Gruppe `joel`
- doggo.txt gehört dem Benutzer `sasha` und der Gruppe `sasha`
- auth.log gehört dem Benutzer `syslog` und der Gruppe `adm`

- Alle Benutzer haben eine Gruppe für sich, um die Berechtigungen einfacher zu machen
- Du kannst zu vielen Gruppen gehören
- Schreibe `groups` im Terminal, um zu sehen, zu welchen Gruppen du gehörst




### Symbolische Schreibweise mit chmod
- folgende Kombinationen können u.a mit `chmod` genutzt werden:
    - `u`: owner/user
    - `g`: group
    - `o`: others
    - `+`: Recht hinzufügen
    - `-`: Recht entfernen

- also `chmod o-r catto.txt` - die Leserechte an catto.txt den anderen entziehen
- Nach jeder Änderung mit `ls -l` prüfen.


## 2. Verbindung mit Webserver Nginx 

Nginx verbindet Paketverwaltung, Systemverzeichnisse und Dateirechte in einem Beispiel.

```text
Paketquelle → Paketliste → APT → installiertes Programm
```

```bash
sudo apt update
sudo apt install nginx
systemctl is-active nginx
```

- `apt update`: Paketlisten aktualisieren
- `apt install`: ein Paket installieren
- `apt upgrade`: Updates installierter Pakete einspielen
- `apt remove`: ein Paket entfernen

`apt update` installiert noch keine Updates.

Falls Nginx nicht läuft:

```bash
sudo systemctl start nginx
```

Im Windows-Browser öffnen:

```text
http://localhost
```



## 3. Eine eigene Seite veröffentlichen

Die Standardseite nicht verändern. Im Home-Verzeichnis `index.html` anlegen:

```bash
nano ~/index.html
```

```html
<h1>Rechte-Labor</h1>
<p>Wenn du das lesen kannst, darf Nginx diese Datei lesen.</p>
```

In das Webverzeichnis kopieren:

```bash
sudo cp ~/index.html /var/www/html/index.html
ls -l /var/www/html/index.html
```

`sudo` ist nötig, weil `/var/www/html` ein systemweiter Ordner ist.

```text
http://localhost/index.html
```
zeigt eure Seite an


### Die Website absichtlich kaputtmachen

```bash
sudo chmod o-r /var/www/html/index.html
ls -l /var/www/html/index.html
```

Seite mit `Ctrl` + `F5` neu laden.

Erwartetes Ergebnis: **403 Forbidden**. Die Datei existiert, aber Nginx darf sie nicht lesen.

### Zugriff reparieren

```bash
sudo chmod o+r /var/www/html/index.html
ls -l /var/www/html/index.html
```

Seite erneut laden. `chmod` hat die Rechte verändert, nicht den Inhalt.