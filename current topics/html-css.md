# Unsere HTML- und CSS-Grundlagen

Diese Liste sammeln und erweitern wir gemeinsam. HTML und CSS enthalten keine Terminalbefehle: In HTML verwenden wir Elemente und Attribute, in CSS Selektoren, Eigenschaften und Werte.

## Ein HTML-Grundgerüst

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Meine Webseite</title>
</head>
<body>
    <h1>Willkommen</h1>
    <p>Meine erste Webseite</p>
</body>
</html>
```

`<!DOCTYPE html>` – teilt dem Browser mit, dass das Dokument modernes HTML verwendet.

`<html lang="de">` – ist das Wurzelelement und legt Deutsch als Sprache der Seite fest.

`<head>` – enthält Informationen für den Browser, die nicht zum sichtbaren Seiteninhalt gehören.

`<meta charset="UTF-8">` – sorgt dafür, dass Zeichen wie ä, ö, ü und € richtig dargestellt werden.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` – hilft dem Browser, die Seite auf verschiedenen Geräten richtig zu skalieren.

`<title>Meine Webseite</title>` – legt den Text im Browser-Tab fest.

`<body>` – enthält den sichtbaren Inhalt der Webseite.

## Elemente, Attribute und Kommentare

`<p>Ein Absatz</p>` – ist ein vollständiges Element mit öffnendem Tag, Inhalt und schließendem Tag.

`<a href="kontakt.html">Kontakt</a>` – enthält mit `href` ein Attribut. Attribute geben einem Element zusätzliche Informationen.

```html
<!-- Dieser Kommentar wird nicht auf der Webseite angezeigt. -->
```

`<br>`, `<hr>`, `<img>` und `<input>` – sind Void-Elemente und benötigen kein schließendes Tag.

Verschachtelte Elemente werden übersichtlich eingerückt und in umgekehrter Reihenfolge geschlossen:

```html
<p>Dieser Text ist <strong>wichtig</strong>.</p>
```

## Texte strukturieren

`<h1>Hauptüberschrift</h1>` – ist die wichtigste Überschrift einer Seite und sollte normalerweise nur einmal vorkommen.

`<h2>Unterüberschrift</h2>` bis `<h6>Überschrift</h6>` – bilden weitere Überschriftenebenen.

`<p>Ein Absatz</p>` – erstellt einen zusammenhängenden Textabsatz.

`<strong>Wichtiger Text</strong>` – kennzeichnet Text als besonders wichtig und wird meist fett dargestellt.

`<em>Betonter Text</em>` – betont Text und wird meist kursiv dargestellt.

`<br>` – erzwingt einen Zeilenumbruch innerhalb eines Textes. Für normale Abstände verwenden wir CSS.

`<hr>` – markiert einen thematischen Wechsel und wird meist als horizontale Linie dargestellt.

`<div>...</div>` – gruppiert mehrere Elemente, damit wir sie gemeinsam strukturieren oder gestalten können.

## Listen erstellen

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

`<ul>` – erstellt eine ungeordnete Liste mit Aufzählungszeichen.

`<ol>` – erstellt eine geordnete, meist nummerierte Liste.

`<li>` – enthält einen einzelnen Listeneintrag und gehört in eine `ul` oder `ol`.

## Links und Pfade

`<a href="https://example.com">Example</a>` – verlinkt mit einer absoluten, vollständigen Internetadresse auf eine externe Webseite.

`<a href="kontakt.html">Kontakt</a>` – verlinkt mit einem relativen Pfad auf eine Datei im selben Ordner.

`<a href="seiten/kontakt.html">Kontakt</a>` – verlinkt auf eine Datei im Unterordner `seiten`.

`<a href="../index.html">Startseite</a>` – geht zuerst eine Ordnerebene nach oben und verlinkt dort auf `index.html`.

## Bilder einbinden

```html
<img src="images/katze.jpg" alt="Eine schwarze Katze auf einem Sofa" title="Unsere Katze Luna">
```

`src` – enthält den Pfad zur Bilddatei.

`alt` – beschreibt den Inhalt oder Zweck des Bildes. Die Beschreibung ist wichtig, wenn das Bild nicht gesehen oder geladen werden kann.

`title` – kann einen zusätzlichen Hinweis enthalten, ist aber kein Ersatz für `alt`.

## Ein einfaches Formular

```html
<form action="#" method="get">
    <label for="name">Name</label>
    <input id="name" name="name" type="text">

    <label for="email">E-Mail</label>
    <input id="email" name="email" type="email">

    <button type="submit">Absenden</button>
</form>
```

`<form action="#" method="get">` – fasst das Formular zusammen. `action` bestimmt das Ziel und `method` die Art des Sendens.

`method="get"` – hängt die Formulardaten an die Adresse an und eignet sich zum Beispiel für eine Suche.

`method="post"` – sendet die Formulardaten im Inhalt der Anfrage und wird häufig zum Übermitteln neuer Daten verwendet.

`<label for="name">Name</label>` – beschriftet ein Eingabefeld. Der Wert von `for` muss zur `id` des Eingabefeldes passen.

`<input id="name" name="name" type="text">` – erstellt ein Eingabefeld. `name` bestimmt den Namen, unter dem sein Wert gesendet wird.

`type="text"` – erstellt ein normales Textfeld.

`type="email"` – erstellt ein Feld für eine E-Mail-Adresse.

`type="password"` – erstellt ein Feld, dessen Eingabe verdeckt dargestellt wird.

`<button type="submit">Absenden</button>` – erstellt einen Button zum Absenden des Formulars.

## CSS einbinden

Externes CSS ist für unsere Projekte die bevorzugte Variante. Diese Zeile gehört in den `head` der HTML-Datei:

```html
<link rel="stylesheet" href="style.css">
```

Internes CSS steht in einem `<style>`-Element im `head`. Inline-CSS steht direkt im HTML-Element. Beide Varianten werden in größeren Projekten schnell unübersichtlich.

```html
<style>
    p { color: red; }
</style>

<p style="color: red;">Roter Text</p>
```

## Eine CSS-Regel

```css
p {
    color: darkgreen;
    font-size: 18px;
}
```

`p` – ist der Selektor und wählt die HTML-Elemente aus.

`color` und `font-size` – sind Eigenschaften.

`darkgreen` und `18px` – sind die zugehörigen Werte.

Der Doppelpunkt trennt Eigenschaft und Wert. Das Semikolon beendet eine Zuweisung.

## Wichtige Selektoren

```css
p {
    color: darkgreen;
}

.highlight {
    color: white;
    background-color: darkred;
}

#special {
    color: red;
}
```

`p` – ist ein Elementselektor und wählt alle `p`-Elemente aus.

`.highlight` – ist ein Klassenselektor und wählt alle Elemente mit `class="highlight"` aus.

`#special` – ist ein ID-Selektor und wählt das Element mit `id="special"` aus. In unserem Kurs verwenden wir IDs normalerweise nicht zum Styling.

Ein ID-Selektor ist spezifischer als ein Klassenselektor, ein Klassenselektor spezifischer als ein Elementselektor. Bei gleicher Spezifität gewinnt die später geschriebene Regel.

## Farben und Text gestalten

`color: darkgreen;` – setzt die Textfarbe mit einem Farbnamen.

`color: #6f1a07;` – setzt die Textfarbe mit einem Hex-Farbwert.

`color: rgb(255, 0, 0);` – setzt die Textfarbe mit Rot-, Grün- und Blauwerten.

`background-color: aquamarine;` – setzt die Hintergrundfarbe.

`font-size: 18px;` – setzt die Schriftgröße.

`font-family: Verdana, sans-serif;` – legt die Schriftart und eine Ersatzschrift fest.

`font-style: italic;` – stellt den Text kursiv dar.

`font-weight: 700;` – stellt den Text fett dar.

`line-height: 1.5;` – legt den Abstand zwischen den Textzeilen fest.

`text-align: center;` – richtet Text innerhalb seines Elements mittig aus.

## Das Box-Modell

Der Browser behandelt jedes Element als rechteckige Box:

```text
Margin
└── Border
    └── Padding
        └── Content
```

`width: 400px;` – legt die Breite des Inhalts fest.

`height: 200px;` – legt die Höhe des Inhalts fest.

`max-width: 100%;` – verhindert, dass ein Element breiter als sein verfügbarer Bereich wird.

`padding: 20px;` – erzeugt Innenabstand zwischen Inhalt und Rahmen.

`border: 5px solid green;` – erzeugt einen fünf Pixel breiten, durchgezogenen, grünen Rahmen.

`margin: 20px;` – erzeugt Außenabstand zu anderen Elementen.

`margin-top: 20px;` – setzt nur den Außenabstand nach oben. Entsprechend gibt es `right`, `bottom` und `left`.

`margin: 0 auto;` – zentriert ein Blockelement mit festgelegter oder begrenzter Breite horizontal.

`box-sizing: border-box;` – rechnet Padding und Border in die festgelegte Breite und Höhe ein.

## Flexbox-Grundlagen

Flexbox wird auf einem Elterncontainer aktiviert und ordnet dessen direkte Kinder an:

```html
<div class="container">
    <div class="box">HTML</div>
    <div class="box">CSS</div>
</div>
```

```css
.container {
    display: flex;
    justify-content: center;
    gap: 20px;
}
```

`display: flex;` – macht das Element zum Flex-Container. Seine direkten Kinder stehen standardmäßig nebeneinander.

`justify-content: center;` – richtet die Kinder mittig auf der Hauptachse aus.

`justify-content: space-between;` – verteilt den freien Platz zwischen den Kindern.

`gap: 20px;` – erzeugt einen gleichmäßigen Abstand zwischen den Flex-Kindern.

## Emmet in Visual Studio Code

Emmet-Abkürzungen werden in einer HTML- oder CSS-Datei eingegeben und meistens mit `Tab` bestätigt.

`!` – erzeugt ein vollständiges HTML-Grundgerüst.

`h1` – erzeugt `<h1></h1>`.

`link:css` – erzeugt die Verknüpfung zu einer externen CSS-Datei.

`lorem10` – erzeugt einen kurzen Blindtext mit ungefähr zehn Wörtern.

Emmet ist eine Hilfe des Editors. Die Abkürzungen selbst sind kein HTML oder CSS.
