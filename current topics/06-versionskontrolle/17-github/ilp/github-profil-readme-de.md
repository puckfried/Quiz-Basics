# Zusatzaufgabe: Dein GitHub-Profil

## Dein Ziel

Du gestaltest dein persönliches GitHub-Profil und erstellst eine Profil-README.

Dabei übst du noch einmal einen vollständigen Git-Workflow:

- Repository auf GitHub erstellen
- Repository klonen
- `README.md` lokal bearbeiten
- Änderungen prüfen und committen
- Commit zu GitHub pushen
- Ergebnis auf deinem Profil kontrollieren




## Was ist ein GitHub-Profil?

Dein GitHub-Profil ist deine öffentliche Übersichtsseite auf GitHub.

Du findest es unter:

```text
https://github.com/DEIN-BENUTZERNAME
```

Auf deinem Profil können andere Menschen unter anderem sehen:

- deinen Namen und Benutzernamen
- deine kurze Bio
- deine öffentlichen Repositories
- von dir ausgewählte Projekte
- deine öffentlichen Aktivitäten und Beiträge
- Organisationen, in denen du Mitglied bist
- deine Profil-README

Du entscheidest selbst, welche persönlichen Informationen du dort veröffentlichst.

GitHub erklärt die Bestandteile eines Profils hier:

- [About your profile – GitHub Docs](https://docs.github.com/en/account-and-profile/concepts/personal-profile)


## Wofür wird ein GitHub-Profil genutzt?

Ein GitHub-Profil kann verschiedene Zwecke haben:

- eigene Projekte sammeln und präsentieren
- Lernfortschritte dokumentieren
- anderen Entwicklerinnen und Entwicklern zeigen, woran du arbeitest
- an Open-Source-Projekten mitarbeiten
- eine Ergänzung zu Portfolio und Lebenslauf sein
- Kontaktmöglichkeiten und fachliche Interessen zeigen

Menschen, die dein Profil besuchen, möchten häufig schnell verstehen:

1. Wer bist du?
2. Was lernst oder entwickelst du gerade?
3. Mit welchen Technologien arbeitest du?
4. Welche Projekte möchtest du zeigen?
5. Wo finden sie weitere Informationen über dich?

Dein Profil muss dafür nicht besonders bunt oder kompliziert sein. Ein kurzer, ehrlicher und übersichtlicher Text ist oft nützlicher als sehr viele Bilder, Statistiken und Badges.

GitHub stellt auch Hinweise zur Nutzung des Profils bei einer Bewerbung bereit:

- [Using your GitHub profile to enhance your resume – GitHub Docs](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume)


## Was ist eine Profil-README?

Eine Profil-README ist eine besondere `README.md`, die GitHub direkt oben auf deiner Profilseite anzeigt.

Dafür gelten diese Bedingungen:

- Das Repository hat genau denselben Namen wie dein GitHub-Benutzername
- Das Repository ist **public**
- Im Hauptordner liegt eine Datei namens `README.md`
- Die README ist nicht leer

Beispiel:

```text
GitHub-Benutzername: octocat
Repository:          octocat
Profil:              https://github.com/octocat
Repository:          https://github.com/octocat/octocat
```

Die offizielle Anleitung findest du hier:

- [Managing your profile README – GitHub Docs](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)


## Bevor du beginnst: Was soll öffentlich sein?

Dein Profil und die Profil-README sind öffentlich sichtbar.

Veröffentliche dort niemals:

- Passwörter
- private SSH-Schlüssel
- Zugangstoken oder API-Keys
- private Adressen oder Telefonnummern
- Ausweis- oder Kontodaten
- interne Informationen von Unternehmen
- persönliche Daten anderer Menschen

Du musst auch deinen Wohnort, ein Foto, Pronomen oder private Social-Media-Konten nicht angeben. Diese Angaben sind freiwillig.

Prüfe vor dem Push immer noch einmal, ob du mit allen Inhalten einverstanden bist.


## Aufgabe 1: Vorhandene Profile untersuchen

Sieh dir mindestens **drei** der folgenden Profile an.

### Lernorientiertes Beispiel

- [new2code](https://github.com/new2code)
- Passendes Repository: [new2code/new2code](https://github.com/new2code/new2code)

Achte darauf:

- Wie stellt sich die Person vor?
- Wie werden aktuelle Lernziele sichtbar?
- Welche Informationen wären für ein Junior-Profil nützlich?

### Persönlich und projektorientiert

- [cassidoo](https://github.com/cassidoo)
- Passendes Repository: [cassidoo/cassidoo](https://github.com/cassidoo/cassidoo)

Achte darauf:

- Wie wird Persönlichkeit gezeigt?
- Wie werden Projekte verlinkt?
- Welche Informationen findest du sofort?

### Sehr reduziert

- [sindresorhus](https://github.com/sindresorhus)
- Passendes Repository: [sindresorhus/sindresorhus](https://github.com/sindresorhus/sindresorhus)

Achte darauf:

- Wie wenig Inhalt kann trotzdem funktionieren?
- Welche Informationen kommen aus der normalen Profilansicht?
- Welche Repositories wurden hervorgehoben?


Achte darauf:

- Welche visuellen Elemente werden verwendet?
- Welche Projekte stehen im Mittelpunkt?
- Was davon hilft beim Verstehen und was ist eher Dekoration?

### Weitere Inspiration

- [Awesome GitHub Profile README](https://github.com/roypriyanshu02/awesome-github-profile-readme)

Dieses Repository sammelt viele unterschiedliche Profil-READMEs. Lass dich inspirieren, aber kopiere nicht einfach ein komplettes fremdes Profil.

Notiere zu deinen drei ausgewählten Profilen:

1. Was gefällt dir?
2. Was findest du unübersichtlich?
3. Welche eine Idee möchtest du für dein Profil übernehmen?


## Aufgabe 2: Dein Profil planen

Bevor du die README schreibst, beantworte diese Fragen in deinen Notizen:

- Wie möchtest du dich in zwei Sätzen vorstellen?
- Was lernst du gerade?
- Welche Technologien hast du bereits verwendet?
- Welches Projekt möchtest du zeigen?
- Welche fachlichen Themen interessieren dich?
- Möchtest du eine Kontaktmöglichkeit angeben?
- Schreibst du dein Profil auf Deutsch oder Englisch?

Du musst noch keine lange Liste an Projekten oder Berufserfahrung haben. Schreibe ehrlich über deinen aktuellen Stand.

Beispiele:

- „Ich lerne gerade Webentwicklung mit HTML, CSS und JavaScript.“
- „Aktuell beschäftige ich mich mit Git, GitHub und responsiven Webseiten.“
- „In meinem ersten Projekt baue ich eine kleine Webseite für …“

Vermeide Aussagen über Kenntnisse, die du noch nicht erklären oder praktisch zeigen kannst.


## Aufgabe 3: Profil-Repository erstellen

1. Melde dich bei GitHub an.
2. Öffne dein Profil und prüfe die genaue Schreibweise deines Benutzernamens.
3. Klicke auf **New repository**.
4. Gib als Repository-Namen exakt deinen Benutzernamen ein.
5. Setze das Repository auf **Public**.
6. Aktiviere **Add a README file**.
7. Erstelle das Repository.
8. Öffne anschließend dein GitHub-Profil in einem neuen Browser-Tab.

GitHub zeigt beim richtigen Repository-Namen normalerweise einen Hinweis an, dass du ein besonderes Profil-Repository gefunden hast.

**Fertig, wenn:** Auf deiner Profilseite wird eine README angezeigt.


## Aufgabe 4: Repository klonen

Jetzt bearbeitest du das Profil nicht direkt im Browser, sondern lokal mit VS Code und Git.

1. Öffne dein Profil-Repository.
2. Klicke auf den grünen **Code**-Button.
3. Wähle **SSH**.
4. Kopiere die angezeigte URL.
5. Öffne dein Terminal.
6. Wechsle in einen Ordner, in dem du deine Projekte speicherst.
7. Klone das Repository.

```sh
git clone <repository-url>
```

Beispiel:

```sh
git clone git@github.com:octocat/octocat.git
```

Wechsle danach in den geklonten Ordner:

```sh
cd <dein-benutzername>
```

Prüfe den Zustand und die Remote-Verbindung:

```sh
git status
git remote -v
git log --oneline
```

Öffne den Ordner in VS Code:

```sh
code .
```

**Fertig, wenn:** Du siehst die `README.md` lokal in VS Code und `git remote -v` zeigt dein GitHub-Repository als `origin`.


## Aufgabe 5: Profil-README bearbeiten

Öffne die Datei `README.md` und aktiviere die Markdown-Vorschau in VS Code.

Deine erste Version sollte mindestens enthalten:

- eine Begrüßung oder Überschrift mit deinem Namen
- zwei bis vier Sätze über dich
- deine aktuellen Lernthemen
- verwendete Technologien
- mindestens ein Projekt oder ein aktuelles Lernprojekt
- optional eine Kontakt- oder Portfolio-Verlinkung

Du kannst diese Vorlage als Startpunkt verwenden. Passe alle Texte an dich an und entferne Abschnitte, die du nicht brauchst.

````md
# Hallo, ich bin Vorname 👋

Ich lerne gerade Webentwicklung und interessiere mich besonders für moderne Webseiten.

## Über mich

- 🌱 Aktuell lerne ich JavaScript und Git
- 💻 Ich arbeite an kleinen Webprojekten
- 🎯 Mein nächstes Ziel ist ...

## Technologien

- HTML
- CSS
- JavaScript
- Git und GitHub

## Projekte

### [Name meines Projekts](LINK-ZUM-REPOSITORY)

Kurze Erklärung: Was macht das Projekt und was hast du dabei gelernt?

## Kontakt

- [Portfolio](LINK)
- [LinkedIn](LINK)
````


## Tipps für ein gutes Profil

### Mache es leicht lesbar

- Beginne mit den wichtigsten Informationen
- Verwende kurze Absätze und klare Überschriften
- Nutze Listen für Technologien und Lernziele
- Prüfe Rechtschreibung und Links

### Zeige konkrete Dinge

- Verlinke echte Projekte
- Beschreibe kurz, was ein Projekt macht
- Schreibe dazu, was du daran selbst gemacht oder gelernt hast
- Ein kleines fertiges Projekt ist interessanter als eine sehr lange Liste von Technologien

### Bleibe ehrlich

- Du darfst schreiben, dass du noch lernst
- Nenne nur Technologien, mit denen du schon gearbeitet hast
- Kopiere keine fremde Biografie
- Verwende fremde Bilder oder Grafiken nur, wenn du sie verwenden darfst

### Weniger ist oft mehr

- Viele Badges machen ein Profil nicht automatisch besser
- Automatische Statistiken können interessant sein, sind aber nicht notwendig
- GIFs und Animationen können schnell vom Inhalt ablenken
- Erstelle zuerst eine klare Textversion
- Dekoration kannst du später ergänzen

### Wähle eine Sprache

- Deutsch ist passend, wenn du dich vor allem im deutschsprachigen Raum bewirbst
- Englisch ist praktisch für internationale Kontakte und Projekte
- Beide Sprachen sind möglich, aber halte die erste Version möglichst einheitlich


## Aufgabe 6: Änderungen prüfen und committen

Speichere deine README und prüfe danach deine Änderung:

```sh
git status
git diff
```

Lies deine README noch einmal in der Markdown-Vorschau.

Prüfe besonders:

- Sind noch Platzhalter wie `LINK` oder `Vorname` enthalten?
- Funktionieren alle Links?
- Sind alle Informationen für die Öffentlichkeit geeignet?
- Ist der Text auch für eine Person verständlich, die dich noch nicht kennt?

Wenn alles passt, erstelle einen Commit:

```sh
git add README.md
git diff --staged
git commit -m "Create GitHub profile README"
```

Prüfe anschließend:

```sh
git status
git log --oneline
```

**Fertig, wenn:** Der Status ist sauber und deine Historie enthält den neuen Commit.


## Aufgabe 7: Profil zu GitHub pushen

Der neue Commit existiert bisher nur in deinem lokalen Repository.

Übertrage ihn zu GitHub:

```sh
git push
```

Öffne danach deine Profilseite:

```text
https://github.com/DEIN-BENUTZERNAME
```

Aktualisiere die Seite und kontrolliere:

- Wird die neue README angezeigt?
- Stimmen Überschriften und Listen?
- Funktionieren die Links?
- Sieht die Darstellung auch ohne VS-Code-Vorschau gut aus?

**Fertig, wenn:** Deine neue Profil-README ist öffentlich auf deinem GitHub-Profil sichtbar.


## Wenn `git push` nicht funktioniert

Führe nicht sofort einen Force-Push aus.

Prüfe zuerst:

```sh
git status
git branch
git remote -v
```

Lies die Fehlermeldung vollständig.

Falls auf GitHub bereits ein neuer Commit existiert, den du lokal noch nicht hast:

```sh
git pull
```

Prüfe danach erneut den Status und versuche den Push noch einmal.

Wenn du die Fehlermeldung nicht verstehst, notiere sie oder zeige sie der Lehrkraft. Lösche das Repository nicht einfach und verwende kein `git push --force`.


## Aufgabe 8: Profil vervollständigen

Öffne die Einstellungen deines GitHub-Profils und prüfe, welche Angaben du ergänzen möchtest.

Mögliche Angaben:

- Profilbild oder Avatar
- sichtbarer Name
- kurze Bio
- Link zu Portfolio oder persönlicher Webseite
- Social-Media-Link, zum Beispiel LinkedIn
- Ort, wenn du ihn öffentlich teilen möchtest

Wenn du bereits passende Projekte hast, kannst du außerdem einige Repositories auf deinem Profil anheften. Wähle lieber wenige Projekte, die du erklären kannst, als viele zufällige Repositories.




## Reflexion

- Welche Zielgruppe soll dein Profil ansprechen?
- Welche Informationen hast du bewusst nicht veröffentlicht?
- Welche Idee aus einem anderen Profil hat dir geholfen?
- Was soll eine fremde Person als Erstes über dich erfahren?
- Welches Projekt möchtest du in den nächsten Wochen ergänzen?
- An welchen Befehlen erkennst du noch einmal den Weg von der lokalen Änderung bis zu GitHub?


## Erwartetes Ergebnis

Am Ende dieser Aufgabe:

- besitzt du ein öffentliches Profil-Repository
- hast du das Repository lokal geklont
- enthält deine Profil-README eine persönliche und ehrliche Vorstellung
- hast du die Änderung lokal geprüft und committet
- hast du mindestens einen Commit zu GitHub gepusht
- ist die README auf deiner Profilseite sichtbar
- hast du Feedback erhalten und mindestens eine Verbesserung vorgenommen
