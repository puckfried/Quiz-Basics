# GitHub und Remote-Repositories


## HEUTE

- Was ist der Unterschied zwischen Git und GitHub?
- Ein GitHub-Konto einrichten
- Lokale und entfernte Repositories verbinden
- Repositories klonen
- Änderungen pushen und pullen
- Die GitHub-Oberfläche kennenlernen
- Eine README mit Markdown schreiben


## RÜCKBLICK
- Was war noch mal ein Repository?
    - unsere Codebase
    - auf unserem Rechner ein Ordner
    - ein Projekt in sich geschlossen, enthält alles was zum Projekt gehört (auch damit es owanders läuft)
    - enthält einen `.git`-Ordner -> `git init` 
    - werden wir mit github verbinden
    - hat meist eine README
- Was zeigt uns `git status`?
    - current state of the repository
    - current status of files and folder (modifiziert, gelöscht untracked)
    - zeigt ob Dateien oder Ordner bereits tracked/untracked sind
    - rote Farbe -> noch nicht in der Staging Area, fehlender `git add`-Befehl 
    - grüne Farbe -> der Inhalt der Staging Area
- Was ist die Staging Area
    - Die Dateien/Ordner die beim nächsten Commit in die Historie übertragen werden
- Wie kann ich die Historie anzeigen lassen?
    - `git log`

- Bis jetzt befindet sich unsere komplette Git-Historie nur auf unserem Rechner


## GitHub
- GitHub ist ein Online-Dienst für Git-Repositories
- Ein Repository kann dort auf einem Server gespeichert werden
- GitHub ist nicht Git
    - **Git** verwaltet die Versionen unseres Projekts
    - **GitHub** hostet Git-Repositories und bietet Werkzeuge für Zusammenarbeit
- GitHub ist nicht der einzige Anbieter
    - GitLab und Bitbucket sind weitere Beispiele


## GitHub-Konto und Authentifizierung

### Git-Konfiguration ist keine GitHub-Anmeldung

- Gestern haben wir Name und E-Mail für unsere Commits eingestellt

```sh
git config --global user.name
git config --global user.email
```
- Diese Angaben stehen später in unseren Commits
- Sie melden uns aber nicht bei GitHub an
- Für `push` benötigt GitHub eine zusätzliche Authentifizierung



### SSH
- Secure Shell
- Wir verwenden dafür SSH-Schlüssel
- Ein SSH-Schlüsselpaar besteht aus zwei Teilen
    - einem **private key**
    - einem **public key**
- Stell dir den öffentlichen Schlüssel wie ein Schloss vor
- Dieses Schloss geben wir GitHub
- Nur dein privater Schlüssel kann beweisen, dass die Anfrage von dir kommt
- Der private Schlüssel bleibt immer auf deinem Rechner
- Zeige und verschicke deinen privaten Schlüssel niemals
- Private Schlüssel gehören natürlich auch niemals in ein Repository

## Git Remotes

- Git-Repositories können miteinander verbunden werden
- Eine solche gespeicherte Verbindung heißt **Remote**
- Ein Remote besteht im Wesentlichen aus:
    - einem Namen
    - der Adresse eines anderen Repositories
- Der übliche Name für unser wichtigstes Remote ist `origin`
- `origin` ist kein besonderer Server und kein GitHub-Konto
- Es ist nur ein sehr verbreiteter Name für die Verbindung

```sh
git remote -v
```

- Der Befehl zeigt uns die gespeicherten Remote-Verbindungen
- Nach dem Klonen ist `origin` normalerweise schon eingerichtet
- Bei einem zuerst lokal erstellten Repository richten wir es selbst ein


## Beispiel 1: Ein GitHub-Repository klonen

- Wir beginnen mit dem einfacheren Weg
- Zuerst erstellen wir ein Repository auf GitHub
- GitHub legt auch direkt eine `README.md` an
- Danach klonen wir das Repository auf unseren Rechner

- LEHRER:
    1. Neues GitHub-Repository mit README erstellen
    2. SSH-Adresse über den grünen **Code**-Button kopieren
    3. Repository klonen
    4. In den neuen Ordner wechseln
    5. Remote-Verbindung und Historie ansehen

```sh
git clone <repository-url>
cd <repository-name>
git remote -v
git log --oneline
code .
```

- `git clone` erstellt eine vollständige lokale Kopie
- Wir erhalten nicht nur die Dateien
- Wir erhalten auch:
    - die Git-Historie
    - die Branches
    - die Verbindung zum Remote-Repository


## Eine Änderung zu GitHub pushen

- Wir bearbeiten die README lokal in VS Code
- Danach verwenden wir zunächst unseren bekannten Git-Ablauf

```sh
git status
git add README.md
git status
git commit -m "Update README"
git status
```

- `git status` zeigt uns, welche Dateien verändert wurden

```sh
git push
```

- Erst `git push` überträgt unseren neuen Commit zu GitHub


## Beispiel 2: Ein lokales Repository mit GitHub verbinden

- Manchmal existiert zuerst das lokale Projekt
- Das haben wir gestern bereits gemacht
- Danach erstellen wir auf GitHub ein passendes Remote-Repository

- Ganz wichtig:
    - Das GitHub-Repository bleibt bei diesem Weg **leer**
    - Keine README erzeugen lassen
    - Keine `.gitignore` erzeugen lassen
    - Keine Lizenz erzeugen lassen
- Sonst haben das lokale und das entfernte Repository bereits unterschiedliche erste Commits

```sh
git status
git branch
git branch -M main
git remote add origin <repository-url>
git remote -v
git push -u origin main
```

- `git remote add origin ...` speichert die Verbindung
- `git push` überträgt die Commits
- `-u` verbindet unseren lokalen Branch mit dem passenden Remote-Branch
- Danach reicht normalerweise:

```sh
git push
```
