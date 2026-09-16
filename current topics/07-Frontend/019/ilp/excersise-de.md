# Individuelle Learning Phase: Wie das Web funktioniert und deine erste HTML-Seite



## Dein Ziel 

Du verstehst die grundlegende Kommunikation zwischen Browser und Server, unterscheidest HTTP und HTTPS in einfacher Form und erstellst selbst eine kleine, sauber strukturierte HTML-Seite mit head- und body-Bereich sowie typischen Text-Elementen.



## Das brauchst du 

- einen Rechner mit Internetzugang  
- einen Browser  
- einen Texteditor oder eine Entwicklungsumgebung  
- einen lokalen Arbeitsordner, zum Beispiel `web-grundlagen`  
- optional: die Entwicklerwerkzeuge im Browser  



## Zeitplanung 

- 10 Minuten: Aufgabe 1  
- 15 Minuten: Aufgabe 2  
- 20 Minuten: Aufgabe 3  
- 25 Minuten: Aufgabe 4  
- 20 Minuten: Aufgabe 5  
- 20 Minuten: Erweiterungsaufgaben  
- 10 Minuten: Abschluss und Reflexion  



## Basis-Aufgaben 



### Aufgabe 1: 



Vom Browser zur Webseite **Ziel:** Du machst dir den Weg einer Webseite vom Aufruf bis zur Anzeige im Browser konkret verständlich.  

**Arbeitsauftrag:**  
1. Öffne im Browser eine beliebige öffentliche Webseite, zum Beispiel eine Nachrichtenseite, eine Firmenwebseite oder eine Dokumentationsseite.  
2. Notiere dir in einer Datei oder auf Papier diese Stationen in der Reihenfolge, in der sie beim Aufruf vorkommen:  
   - dein Browser  
   - Anfrage an einen Server  
   - Übertragungsweg über das Internet  
   - Antwort des Servers  
   - Anzeige im Browser  
3. Schreibe zu jeder Station 1 kurzen Satz in deinen eigenen Worten.  
4. Prüfe in der Adresszeile, ob die Seite mit `http://` oder `https://` beginnt.  
5. Notiere zusätzlich:  
   - den Domainnamen  
   - ob ein Schlosssymbol angezeigt wird  
   - was dir am Unterschied zwischen HTTP und HTTPS auffällt  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine kurze, nachvollziehbare Beschreibung des Ablaufs vom Seitenaufruf bis zur Anzeige und eine einfache Gegenüberstellung von HTTP und HTTPS erstellt.



### Aufgabe 2: 

Dein erstes HTML-Grundgerüst **Ziel:** Du erstellst ein minimales HTML-Dokument mit den wichtigsten Grundelementen.  

**Arbeitsauftrag:**  
1. Lege in deinem Arbeitsordner eine Datei mit dem Namen `index.html` an.  
2. Erstelle darin ein minimales HTML-Dokument mit diesen Bestandteilen:  
   - `<!DOCTYPE html>`  
   - `html`  
   - `head`  
   - `body`  
3. Speichere die Datei und öffne sie im Browser.  
4. Prüfe, ob die Datei ohne Fehlermeldung angezeigt wird.  
5. Ändere den Inhalt im `body` testweise und lade die Seite im Browser neu.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine lokal ausführbare Datei `index.html`, die im Browser geöffnet werden kann und ein korrektes HTML-Grundgerüst enthält.



### Aufgabe 3: 

Informationen im head-Bereich **Ziel:** Du ergänzt dein HTML-Dokument um grundlegende Angaben im `head` und erkennst deren Wirkung im Browser.  

**Arbeitsauftrag:**  
1. Ergänze in deiner `index.html` im `head` einen sinnvollen `title`.  
2. Ergänze eine grundlegende `meta`-Angabe für den Zeichensatz.  
3. Ergänze eine `meta`-Angabe für die Darstellung auf unterschiedlichen Geräten.  
4. Speichere die Datei und prüfe im Browser:  
   - Welcher Text steht im Tab?  
   - Wird die Datei weiterhin korrekt dargestellt?  
5. Ändere den `title` einmal bewusst und beobachte die Auswirkung direkt im Browser-Tab.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine Seite enthält einen sinnvollen `title` und grundlegende `meta`-Angaben, und du kannst die sichtbare Wirkung des `title` im Browser nachvollziehen.



### Aufgabe 4: 

Eine inhaltlich strukturierte Webseite erstellen **Ziel:** Du baust im `body` eine kleine, logisch gegliederte Webseite mit typischen HTML-Text-Elementen auf.  

**Arbeitsauftrag:**  
Erstelle im `body` eine kurze Infoseite mit dem Thema **„Das Web verstehen“**. Verwende dabei mindestens die folgenden Elemente:  
- 1 Hauptüberschrift mit `h1`  
- mindestens 2 Zwischenüberschriften mit `h2`  
- mindestens 1 weitere Unterüberschrift mit `h3`  
- mindestens 3 Absätze mit `p`  
- mindestens 2 Textauszeichnungen mit `strong`  
- mindestens 2 Textauszeichnungen mit `em`  
- mindestens 1 Zeilenumbruch mit `br`  
- mindestens 1 horizontale Linie mit `hr`  

Baue inhaltlich mindestens diese Abschnitte ein:  
1. Was ein Client ist  
2. Was ein Server ist  
3. Was bei einem Webseitenaufruf passiert  
4. Worin sich HTTP und HTTPS grob unterscheiden  

Achte darauf, dass du keine reinen Stichwörter einträgst, sondern kurze, verständliche Texte formulierst.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine Seite zeigt eine klar lesbare Inhaltsstruktur mit Überschriften, Absätzen und Textauszeichnungen. Die Seite behandelt die Grundbegriffe Client, Server, Übertragungsweg, HTTP und HTTPS.



### Aufgabe 5: 

Browseranzeige und Quelltext vergleichen **Ziel:** Du erkennst den Zusammenhang zwischen HTML-Code und sichtbarer Browserdarstellung.  

**Arbeitsauftrag:**  
1. Öffne deine `index.html` im Browser.  
2. Vergleiche deinen Code im Editor mit der sichtbaren Darstellung im Browser.  
3. Prüfe gezielt diese Punkte:  
   - Welche Überschrift wird am größten dargestellt?  
   - Wie wirken `strong` und `em` in der Anzeige?  
   - Was bewirkt `br`?  
   - Was bewirkt `hr`?  
4. Ändere anschließend nacheinander 3 Dinge im HTML, zum Beispiel:  
   - eine Überschriftsebene  
   - eine Textauszeichnung  
   - die Position einer horizontalen Linie  
5. Lade die Seite nach jeder Änderung neu und notiere jeweils kurz, was sich verändert hat.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du kannst mehrere sichtbare Effekte direkt auf konkrete HTML-Elemente zurückführen und hast mindestens 3 Änderungen nachvollziehbar getestet.



## Erweiterungsaufgaben 



### Erweiterungsaufgabe 1: Eine Mini-Startseite für ein Lernprojekt 

**Ziel:** Du wendest die bisherigen HTML-Grundlagen auf eine realistische kleine Startseite an.  

**Arbeitsauftrag:**  
Erweitere deine `index.html` zu einer kleinen Startseite für ein fiktives Lernprojekt mit dem Titel **„Core Tech Fundamentals“**.  
Baue diese Inhalte ein:  
- eine Hauptüberschrift  
- einen kurzen Einleitungstext  
- einen Abschnitt **„Heute lernst du“**  
- einen Abschnitt **„Wichtige Begriffe“**  
- einen Abschnitt **„Warum HTTPS wichtig ist“**  
Verwende die bereits gelernten HTML-Elemente bewusst und strukturiere die Inhalte klar.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Deine Seite wirkt wie eine einfache, sauber gegliederte Informationsseite und nutzt die HTML-Grundelemente passend und konsistent.



### Erweiterungsaufgabe 2: Webseitenaufbau bewusst analysieren 

**Ziel:** Du trainierst dein Verständnis für die Struktur realer Webseiten im Browser.  

**Arbeitsauftrag:**  
1. Öffne zwei verschiedene Webseiten im Browser.  
2. Betrachte jeweils die sichtbare Struktur und notiere:  
   - den Seitentitel im Tab  
   - die vermutlich wichtigste Hauptüberschrift  
   - mindestens 2 weitere sichtbare Textbereiche  
   - ob die Seite per HTTP oder HTTPS geladen wurde  
3. Vergleiche beide Seiten kurz:  
   - Welche Seite wirkt klarer strukturiert?  
   - Welche Überschriften-Hierarchie erkennst du?  
   - Welche Inhalte werden besonders hervorgehoben?  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast an zwei realen Webseiten die Grundideen von Titel, Struktur, Hierarchie und sicherer Übertragung bewusst beobachtet und verglichen.



### Erweiterungsaufgabe 3: Sauberkeit und Lesbarkeit verbessern 

**Ziel:** Du überarbeitest deinen HTML-Code so, dass er leichter lesbar und nachvollziehbar ist.  

**Arbeitsauftrag:**  
1. Prüfe deine `index.html` auf Einrückung und übersichtliche Struktur.  
2. Ordne den Inhalt so, dass die Reihenfolge logisch ist:  
   - Titel der Seite  
   - Einführung  
   - Grundlagen des Webs  
   - HTTP/HTTPS  
   - Abschluss  
3. Formuliere mindestens 2 Absätze sprachlich klarer oder kürzer um.  
4. Prüfe abschließend noch einmal im Browser, ob alles weiterhin korrekt angezeigt wird.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Dein HTML-Dokument ist übersichtlich aufgebaut, inhaltlich logisch gegliedert und im Browser fehlerfrei lesbar.



## Wichtige Hinweise 

- Arbeite die Aufgaben in der vorgegebenen Reihenfolge durch.  
- Speichere deine Datei regelmäßig.  
- Lade die Seite nach jeder Änderung im Browser neu.  
- Achte darauf, dass du HTML-Tags sauber öffnest und schließt.  
- Verwende sprechende, verständliche Texte statt nur einzelner Schlagwörter.  
- Wenn etwas nicht angezeigt wird, prüfe zuerst Tag-Namen, Reihenfolge und Schreibweise.  



## Reflexionsfragen 

- Wie würdest du den Unterschied zwischen Client und Server in 2 einfachen Sätzen erklären?  
- Was passiert grob, nachdem du eine Webadresse im Browser eingibst?  
- Woran erkennst du im Browser, ob eine Verbindung über HTTPS läuft?  
- Welche Aufgabe hat der `head`-Bereich in deinem HTML-Dokument?  
- Welche Wirkung hatten `title`, `strong`, `em`, `br` und `hr` auf deine Seite?  
- Was konntest du beim Vergleich von Quelltext und Browserdarstellung besonders gut nachvollziehen?  



---