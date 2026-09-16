# Individuelle Learning Phase: Listen, Links, Bilder und einfache Formulare in HTML



## Dein Ziel 

Du erstellst eine kleine HTML-Seite, auf der du geordnete und ungeordnete Listen einsetzt, interne und externe Links einbindest, Bilder mit sinnvollen Attributen verwendest und ein einfaches Formular sauber strukturierst. Am Ende hast du eine funktionierende Übungsseite, die mehrere grundlegende HTML-Elemente sinnvoll kombiniert.



## Das brauchst du 

- Einen Rechner mit Code-Editor, zum Beispiel Visual Studio Code
- Einen Webbrowser
- Einen Arbeitsordner, zum Beispiel `html-grundlagen`
- Eine HTML-Datei, zum Beispiel `index.html`
- Optional einen Unterordner `images` für Bilddateien
- Mindestens ein Bild, das du lokal speichern und in deine Seite einbinden kannst



## Zeitplanung 

- 10 Minuten: Ordnerstruktur anlegen und HTML-Grundgerüst erstellen
- 20 Minuten: Listen aufbauen
- 20 Minuten: Links einfügen und testen
- 20 Minuten: Bilder einbinden und Pfade prüfen
- 25 Minuten: Einfaches Formular erstellen
- 15 Minuten: Erweiterungen, Prüfung und Überarbeitung
- 10 Minuten: Reflexion



## Basis-Aufgaben 



### Aufgabe 1: 
Seiten-Grundgerüst erstellen **Ziel:** Du bereitest eine saubere Arbeitsumgebung vor und legst die Basis für alle weiteren Aufgaben. 

**Arbeitsauftrag:** Lege einen Projektordner an und erstelle darin eine Datei `index.html`. Erstelle ein vollständiges HTML-Grundgerüst mit `<!DOCTYPE html>`, `html`, `head`, `title` und `body`. Gib der Seite eine klare Überschrift, zum Beispiel zu einem alltagsnahen Thema wie „Meine Lernseite“, „Reiseideen“, „Hobbyübersicht“ oder „Mini-Profil“. Ergänze unter der Überschrift einen kurzen einleitenden Absatz. 

**Erwartetes Ergebnis / Soll-Zustand:** Deine HTML-Datei lässt sich im Browser öffnen und zeigt eine sinnvoll benannte Seite mit Überschrift und kurzem Beschreibungstext.



### Aufgabe 2: 
Geordnete und ungeordnete Listen erstellen **Ziel:** Du nutzt `ul`, `ol` und `li`, um Inhalte strukturiert darzustellen. 

**Arbeitsauftrag:** Ergänze auf deiner Seite zwei verschiedene Listen:
- eine ungeordnete Liste mit mindestens 4 Einträgen
- eine geordnete Liste mit mindestens 3 Einträgen

Wähle Inhalte, die zu deinem Seitenthema passen. Beispiele:
- ungeordnete Liste: Materialien, Hobbys, Reiseziele, Werkzeuge
- geordnete Liste: Arbeitsschritte, Tagesablauf, Lernplan, Rezeptschritte

Achte darauf, dass jeder Eintrag sinnvoll formuliert ist. Füge über jeder Liste eine passende Zwischenüberschrift ein. 

**Erwartetes Ergebnis / Soll-Zustand:** Deine Seite enthält mindestens eine `ul` und eine `ol` mit korrekt verschachtelten `li`-Elementen und verständlichen Inhalten.



### Aufgabe 3: 
Hyperlinks einfügen und unterscheiden **Ziel:** Du verwendest `a` und `href` für externe und interne Verlinkungen und erkennst den Unterschied zwischen absoluten und relativen Pfaden. 

**Arbeitsauftrag:** Ergänze unterhalb deiner Listen einen Bereich „Links“. Füge dort mindestens 3 Links ein:
- 2 externe Links zu realen Webseiten mit vollständiger URL
- 1 internen Link zu einer zweiten HTML-Datei in deinem Projekt, zum Beispiel `kontakt.html` oder `infos.html`

Erstelle die verlinkte zweite HTML-Datei ebenfalls mit einem einfachen Grundgerüst und einer kurzen Überschrift. Teste alle Links im Browser. Beschrifte die Links so, dass klar ist, wohin sie führen. 

**Erwartetes Ergebnis / Soll-Zustand:** Du hast funktionierende externe und interne Links. Die absoluten Links öffnen eine echte Website, und der relative Link führt zu einer lokalen HTML-Datei in deinem Projektordner.



### Aufgabe 4: 
Bilder mit sinnvollen Attributen einbinden **Ziel:** Du bindest ein Bild mit `img` ein und setzt `src`, `alt` und `title` sinnvoll ein. 

**Arbeitsauftrag:** Lege einen Unterordner `images` an und speichere dort mindestens ein Bild. Binde dieses Bild in deine `index.html` ein. Verwende:
- `src` mit einem korrekten relativen Pfad
- `alt` mit einer sinnvollen Bildbeschreibung
- `title` mit einem kurzen ergänzenden Hinweis

Füge über dem Bild eine Zwischenüberschrift ein. Prüfe im Browser, ob das Bild korrekt geladen wird. Teste anschließend bewusst einen falschen Pfad und stelle danach den korrekten Pfad wieder her, damit du den Unterschied erkennst. 

**Erwartetes Ergebnis / Soll-Zustand:** Auf deiner Seite wird ein lokales Bild korrekt angezeigt. Der Dateipfad funktioniert, und die Attribute `alt` und `title` sind sinnvoll gesetzt.



### Aufgabe 5: 
Ein einfaches Formular aufbauen **Ziel:** Du erstellst ein strukturiertes Formular mit `form`, `label`, `input` und `button`. 

**Arbeitsauftrag:** Ergänze auf deiner Seite einen Formularbereich, der zu deinem Thema passt. Erstelle ein einfaches Formular mit mindestens:
- 2 Textfeldern
- 1 E-Mail-Feld oder einem weiteren passenden Eingabefeld
- 1 Button zum Absenden

Verknüpfe jedes Eingabefeld mit einem passenden `label`. Verwende sinnvolle Bezeichnungen, zum Beispiel Name, E-Mail, Thema, Nachricht oder Lieblingshobby. Setze bei `form` ein `action`-Attribut mit `#` und wähle eine Methode wie `get` oder `post`. 

**Erwartetes Ergebnis / Soll-Zustand:** Deine Seite enthält ein sauber strukturiertes Formular mit beschrifteten Eingabefeldern und einem Button. Der Aufbau ist im Browser klar lesbar und logisch angeordnet.



## Erweiterungsaufgaben 



### Erweiterungsaufgabe 1: Formular logisch erweitern 

**Ziel:** Du baust dein Formular um zusätzliche Eingabemöglichkeiten aus. 

**Arbeitsauftrag:** Ergänze dein Formular um mindestens zwei weitere Formularelemente, zum Beispiel:
- ein Kontrollkästchen
- einen Radiobutton
- ein Eingabefeld für Telefonnummer
- ein Datumsfeld

Achte darauf, dass die Beschriftungen verständlich bleiben und die neuen Elemente zu deinem Seitenthema passen. 

**Erwartetes Ergebnis / Soll-Zustand:** Dein Formular enthält zusätzliche, sinnvoll ausgewählte Eingabeelemente und bleibt übersichtlich aufgebaut.



### Erweiterungsaufgabe 2: Interne Navigation mit Links verbessern 

**Ziel:** Du strukturierst deine Seite besser und nutzt Links innerhalb deiner eigenen Seite. 

**Arbeitsauftrag:** Vergib mindestens drei Abschnitten deiner `index.html` eigene Sprungziele, zum Beispiel für Listen, Bilder und Formular. Erstelle am Seitenanfang eine kleine Navigation mit Links zu diesen Abschnitten. Teste, ob die Sprünge im Browser funktionieren. 

**Erwartetes Ergebnis / Soll-Zustand:** Deine Seite besitzt eine interne Navigation, mit der du direkt zu mehreren Bereichen springen kannst.



### Erweiterungsaufgabe 3: Zweite Unterseite mit Bild und Rücklink ergänzen 

**Ziel:** Du festigst relative Verlinkungen über mehrere Dateien hinweg. 

**Arbeitsauftrag:** Erweitere deine zweite HTML-Datei aus Aufgabe 3. Füge dort eine kurze Liste, ein Bild oder einen kleinen Textblock ein. Ergänze außerdem einen Rücklink zur `index.html`. Wenn du ein Bild einbindest, achte wieder auf korrekte Pfadangaben. 

**Erwartetes Ergebnis / Soll-Zustand:** Deine zweite HTML-Datei ist inhaltlich erweitert und über funktionierende Links mit deiner Startseite verbunden.



## Wichtige Hinweise 

- Arbeite schrittweise und teste nach jeder Aufgabe im Browser.
- Achte auf korrekt geschriebene HTML-Tags und saubere Verschachtelung.
- Verwende aussagekräftige Texte statt Platzhalter wie „Link 1“ oder „Bild“.
- Nutze für lokale Dateien relative Pfade.
- Nutze für externe Webseiten vollständige URLs mit `http://` oder `https://`.
- Wähle für `alt` eine Beschreibung, die den Bildinhalt sinnvoll wiedergibt.
- Prüfe bei Formularen, ob jedes `label` zu einem passenden Eingabefeld gehört.
- Speichere deine Dateien regelmäßig.



## Reflexionsfragen 

- Wo hast du `ul` und `ol` eingesetzt, und warum war diese Unterscheidung sinnvoll?
- Woran erkennst du in deinem Projekt den Unterschied zwischen relativen und absoluten Links?
- Welche Probleme sind bei Bildpfaden aufgetreten, und wie hast du sie erkannt?
- Wie hast du entschieden, welche `alt`-Texte für deine Bilder passend sind?
- Ist dein Formular für andere verständlich aufgebaut?
- Welche Stelle deiner Seite würdest du als Nächstes verbessern, wenn du noch 30 Minuten Zeit hättest?



---