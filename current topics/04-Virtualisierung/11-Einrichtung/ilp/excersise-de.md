# Individuelle Learning Phase: Virtualisierungssoftware einrichten und eine erste VM in Betrieb nehmen

## Dein Ziel 

Du richtest auf deinem System eine Virtualisierungssoftware ein, prüfst die wichtigsten Voraussetzungen, erstellst eine virtuelle Maschine, passt zentrale Einstellungen an und startest ein Gastbetriebssystem. Dabei dokumentierst du auffällige Meldungen und erkennst einfache Konfigurations- oder Startprobleme.

## Das brauchst du 

- Einen Rechner mit Windows, Linux oder macOS
- Internetzugang
- Lokale Administrationsrechte für Installation und Systemeinstellungen
- Eine Virtualisierungssoftware, zum Beispiel VirtualBox oder VMware Workstation Player
- Eine ISO-Datei eines Gastbetriebssystems, zum Beispiel Ubuntu Desktop
- Notizmöglichkeit für kurze Dokumentation, zum Beispiel Textdatei oder Markdown-Datei
- Genügend freien Speicherplatz, empfohlen mindestens 25 GB
- Mindestens 8 GB RAM auf dem Host-System empfohlen

## Zeitplanung 

- 0–10 Min.: Voraussetzungen prüfen und Arbeitsumgebung vorbereiten
- 10–30 Min.: Virtualisierungssoftware herunterladen und installieren
- 30–55 Min.: Neue virtuelle Maschine anlegen
- 55–80 Min.: CPU, RAM, Festplatte und Netzwerk konfigurieren
- 80–105 Min.: Gastbetriebssystem starten und erste Prüfung durchführen
- 105–120 Min.: Fehlerbilder dokumentieren, Erweiterungsaufgaben oder Reflexion bearbeiten

## Basis-Aufgaben 

### Aufgabe 1:

Voraussetzungen auf deinem System prüfen  
**Ziel:** Du stellst sicher, dass dein Rechner grundsätzlich für Virtualisierung geeignet ist.  
**Arbeitsauftrag:**  
- Prüfe, welches Betriebssystem und welche Hardware du verwendest.  
- Ermittle die Größe deines Arbeitsspeichers und den freien Festplattenspeicher.  
- Prüfe, ob Hardware-Virtualisierung im System verfügbar ist oder ob es Hinweise gibt, dass sie deaktiviert ist.  
- Notiere außerdem, ob du lokale Administrationsrechte für Installationen hast.  
- Halte alle Ergebnisse stichpunktartig in einer kurzen Datei fest.  
**Erwartetes Ergebnis / Soll-Zustand:** Du hast eine kurze Übersicht mit den wichtigsten Voraussetzungen und kannst einschätzen, ob dein System für die nächsten Schritte geeignet ist.

### Aufgabe 2:

Virtualisierungssoftware herunterladen und installieren  
**Ziel:** Du installierst eine funktionsfähige Virtualisierungssoftware auf deinem Rechner.  
**Arbeitsauftrag:**  
- Wähle eine Virtualisierungssoftware aus.  
- Lade die Installationsdatei von der offiziellen Herstellerseite herunter.  
- Installiere die Software mit den Standardoptionen oder bewusst gewählten Einstellungen.  
- Starte die Software nach der Installation.  
- Dokumentiere den Produktnamen, die Version und ob die Installation ohne Fehlermeldung abgeschlossen wurde.  
**Erwartetes Ergebnis / Soll-Zustand:** Die Virtualisierungssoftware ist installiert, startet erfolgreich und ist einsatzbereit.

### Aufgabe 3:

Eine neue virtuelle Maschine anlegen  
**Ziel:** Du legst eine saubere Grundkonfiguration für eine neue VM an.  
**Arbeitsauftrag:**  
- Erstelle eine neue virtuelle Maschine mit einem eindeutigen Namen, zum Beispiel `Ubuntu-Test-01`.  
- Wähle als Installationsquelle die ISO-Datei deines Gastbetriebssystems aus.  
- Lege Speicherort und Dateinamen der VM bewusst fest.  
- Wähle den passenden Gastbetriebssystem-Typ und die Version aus.  
- Erfasse in deiner Dokumentation den Namen der VM, das Gastbetriebssystem und den Speicherort.  
**Erwartetes Ergebnis / Soll-Zustand:** Eine neue VM ist angelegt und kann weiter konfiguriert werden.

### Aufgabe 4:

Ressourcen und grundlegende VM-Einstellungen konfigurieren  
**Ziel:** Du weist der VM sinnvolle Ressourcen zu und passt zentrale Einstellungen an.  
**Arbeitsauftrag:**  
- Weise der VM eine passende Anzahl an CPU-Kernen zu.  
- Setze den Arbeitsspeicher so, dass die VM nutzbar ist und dein Host-System stabil bleibt.  
- Lege eine virtuelle Festplatte an oder passe deren Größe an.  
- Prüfe die Netzwerkeinstellung und entscheide dich zunächst für NAT oder Bridged, je nach verfügbarer Umgebung.  
- Prüfe zusätzliche Basiseinstellungen, zum Beispiel Boot-Reihenfolge, Anzeige, Mount der ISO-Datei und automatische Einbindung von Eingabegeräten.  
- Dokumentiere alle gewählten Werte in einer Tabelle.  
**Erwartetes Ergebnis / Soll-Zustand:** Die VM ist vollständig konfiguriert und mit sinnvollen Ressourcen für einen ersten Start vorbereitet.

### Aufgabe 5:

Gastbetriebssystem starten und erste Funktionsprüfung durchführen  
**Ziel:** Du startest die VM, prüfst den Boot-Vorgang und erkennst einfache Probleme.  
**Arbeitsauftrag:**  
- Starte die virtuelle Maschine.  
- Beobachte den Startvorgang genau und notiere Auffälligkeiten oder Fehlermeldungen.  
- Falls das Gastbetriebssystem startet, prüfe mindestens diese Punkte: Anzeige funktioniert, Eingabe funktioniert, System reagiert, Netzwerkanbindung ist grundsätzlich vorhanden oder erkennbar konfiguriert.  
- Falls ein Problem auftritt, dokumentiere es strukturiert mit: Zeitpunkt, Meldung, vermutete Ursache, bereits geprüfte Einstellung.  
- Erstelle zum Abschluss einen kurzen Statusbericht mit dem aktuellen Zustand deiner VM.  
**Erwartetes Ergebnis / Soll-Zustand:** Die VM startet bis zum Installations- oder Desktop-Bildschirm des Gastbetriebssystems oder du hast ein einfaches Startproblem klar dokumentiert.

## Erweiterungsaufgaben 

### Erweiterungsaufgabe 1: Netzwerkmodus vergleichen 

**Ziel:** Du verstehst die praktische Auswirkung unterschiedlicher Netzwerkmodi in der VM.  
**Arbeitsauftrag:**  
- Prüfe den aktuell eingestellten Netzwerkmodus deiner VM.  
- Stelle testweise auf einen anderen Modus um, zum Beispiel von NAT auf Bridged oder umgekehrt, sofern deine Umgebung das zulässt.  
- Starte die VM erneut und beobachte, ob sich die Netzwerkanbindung oder Erreichbarkeit verändert.  
- Halte fest, welcher Modus in deiner Umgebung besser geeignet wirkt und warum.  
**Erwartetes Ergebnis / Soll-Zustand:** Du hast mindestens zwei Netzwerkmodi betrachtet und ihre praktische Wirkung kurz dokumentiert.

### Erweiterungsaufgabe 2: Ressourcen anpassen und Auswirkungen beobachten 

**Ziel:** Du lernst, wie sich CPU-, RAM- und Festplatteneinstellungen auf die Nutzbarkeit der VM auswirken.  
**Arbeitsauftrag:**  
- Ändere gezielt eine Ressourceneinstellung, zum Beispiel RAM oder CPU-Kerne.  
- Starte die VM erneut und beobachte, ob sich das Verhalten beim Start oder in der Bedienung verändert.  
- Wiederhole den Test mit einer zweiten Einstellung.  
- Halte deine Beobachtungen in einer kleinen Vergleichstabelle fest.  
**Erwartetes Ergebnis / Soll-Zustand:** Du hast nachvollziehbar dokumentiert, welche Ressourceneinstellungen für deine VM sinnvoll sind.

### Erweiterungsaufgabe 3: Typische Startprobleme systematisch eingrenzen 

**Ziel:** Du gehst strukturiert mit einfachen Fehlerbildern um.  
**Arbeitsauftrag:**  
- Erstelle eine Checkliste mit mindestens fünf möglichen Ursachen für Startprobleme, zum Beispiel fehlende ISO-Einbindung, zu wenig RAM, deaktivierte Virtualisierung, falsche Boot-Reihenfolge oder blockierte Hypervisor-Funktion.  
- Prüfe deine VM oder dein Host-System anhand dieser Liste.  
- Markiere, welche Punkte in deinem Fall unkritisch sind und welche du tatsächlich kontrollieren musstest.  
**Erwartetes Ergebnis / Soll-Zustand:** Du hast eine verwendbare Prüfliste für einfache VM-Startprobleme erstellt und auf deine Umgebung angewendet.

## Wichtige Hinweise 

- Arbeite nur mit Software aus offiziellen Quellen.  
- Achte darauf, deinem Host-System genügend RAM und CPU-Leistung zu lassen.  
- Vermeide unnötig große virtuelle Festplatten, wenn dein Speicherplatz begrenzt ist.  
- Wenn eine VM nicht startet, ändere immer nur eine Einstellung nach der anderen.  
- Dokumentiere Fehlermeldungen möglichst wörtlich oder mit Screenshot.  
- Falls dein System eine Sicherheitsabfrage oder Rechteerhöhung verlangt, lies die Meldung vollständig, bevor du fortfährst.

## Reflexionsfragen 

- Welche Voraussetzungen waren auf deinem System sofort erfüllt und welche musstest du erst prüfen?  
- Warum hast du genau diese Virtualisierungssoftware gewählt?  
- Welche Einstellungen an CPU, RAM und Festplatte waren für deine VM sinnvoll?  
- Welcher Netzwerkmodus war für deinen ersten Test am praktikabelsten?  
- Welche Auffälligkeit oder welches Problem ist beim Start der VM aufgetreten?  
- Wie bist du bei der Fehlersuche vorgegangen?  
- Was würdest du bei der nächsten VM von Anfang an anders konfigurieren?

---