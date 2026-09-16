# Individuelle Learning Phase: Virtualisierung verstehen und eine einfache VM-Umgebung planen

## Dein Ziel

Du erarbeitest dir die Grundlagen der Virtualisierung und wendest sie direkt auf ein realistisches Szenario an. Am Ende hast du eine kompakte Dokumentation, in der du physische und virtuelle Hardware vergleichst, passende Einsatzgebiete benennst, Hypervisoren einordnest und eine einfache virtuelle Maschine sinnvoll planst.

## Das brauchst du

- Einen PC oder Laptop
- Internetzugang oder bereitgestellte Unterlagen
- Ein Textdokument, Notiztool oder Papier für deine Ergebnisse
- Optional: installierte Virtualisierungssoftware, z. B. VirtualBox, Hyper-V oder VMware Workstation Player

## Zeitplanung

- 10 Minuten: Aufgabe 1
- 20 Minuten: Aufgabe 2
- 20 Minuten: Aufgabe 3
- 25 Minuten: Aufgabe 4
- 20 Minuten: Aufgabe 5
- 15 Minuten: Erweiterungsaufgaben nach Auswahl
- 10 Minuten: Reflexion und Abschluss

## Basis-Aufgaben

### Aufgabe 1:

Ist-Aufnahme: physisch vs. virtuell 

**Ziel:** Du unterscheidest sicher zwischen physischer Hardware und virtueller Hardware.

**Arbeitsauftrag:**  
Erstelle eine Tabelle mit zwei Spalten: „Physische Hardware“ und „Virtuelle Hardware“.  
Trage für die folgenden Komponenten jeweils ein, wie sie in einem realen Rechner und wie sie in einer virtuellen Maschine vorkommen:

- CPU
- Arbeitsspeicher
- Festplatte / Speicher
- Netzwerkkarte

Ergänze zu jeder Komponente in 1–2 kurzen Sätzen:

- Woran du die physische Variante erkennst
- Wie die virtuelle Variante bereitgestellt wird
- Warum diese Unterscheidung für den Betrieb einer VM wichtig ist

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine übersichtliche Vergleichstabelle mit allen vier Hardware-Komponenten und einer kurzen, verständlichen Einordnung pro Eintrag.

### Aufgabe 2:

Praxisbezug: Einsatzgebiete von Virtualisierung 

**Ziel:** Du erkennst, wo Virtualisierung im Alltag und im Unternehmen sinnvoll eingesetzt wird.

**Arbeitsauftrag:**  
Bearbeite folgendes Szenario:

Ein kleines Unternehmen mit 25 Arbeitsplätzen möchte:

- neue Software testen, ohne produktive PCs zu gefährden
- einen alten Fachanwendungsserver weiter betreiben
- Schulungsumgebungen für neue Mitarbeitende bereitstellen
- Hardwarekosten möglichst gering halten

Erstelle eine Übersicht mit mindestens vier konkreten Einsatzgebieten von Virtualisierung für dieses Unternehmen.  
Beschreibe zu jedem Einsatzgebiet:

- die Ausgangssituation
- wie Virtualisierung helfen kann
- welchen konkreten Vorteil das Unternehmen dadurch hat

Achte darauf, dass du nicht nur allgemeine Vorteile nennst, sondern den Bezug zum Szenario herstellst.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast mindestens vier praxisnahe Einsatzgebiete sauber beschrieben und den Nutzen von Virtualisierung konkret auf das Unternehmen bezogen.

### Aufgabe 3:

Hypervisoren einordnen 

**Ziel:** Du unterscheidest Hypervisor Typ 1 und Typ 2 im Überblick und ordnest typische Softwarebeispiele zu.

**Arbeitsauftrag:**  
Erstelle eine Vergleichsübersicht zu Hypervisor Typ 1 und Typ 2.  
Arbeite dabei mindestens die folgenden Punkte heraus:

- Wo der Hypervisor läuft
- Typische Einsatzumgebung
- Vor- und Nachteile im Überblick
- Geeignete Zielgruppe oder Einsatzszenarien

Ordne anschließend mindestens drei Beispiele für Virtualisierungssoftware zu, z. B.:

- VirtualBox
- VMware Workstation Player
- Hyper-V
- VMware ESXi

Notiere zu jedem Beispiel:

- ob es eher Typ 1 oder Typ 2 ist
- wofür es typischerweise verwendet wird

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine klare Gegenüberstellung von Typ 1 und Typ 2 sowie eine korrekte Zuordnung mehrerer Virtualisierungslösungen mit kurzem Einsatzzweck.

### Aufgabe 4:

Virtuelle Maschine planen 

**Ziel:** Du verstehst die grundlegenden virtuellen Hardware-Ressourcen und planst eine passende VM.

**Arbeitsauftrag:**  
Plane eine virtuelle Maschine für folgenden Zweck:

„Du sollst eine Testumgebung für ein Standard-Büro-System aufsetzen, in der du gefahrlos Software ausprobieren kannst.“

Lege für deine VM fest:

- Anzahl virtueller CPUs
- Größe des Arbeitsspeichers
- Größe der virtuellen Festplatte
- Art und Rolle der virtuellen Netzwerkkarte

Begründe jede Entscheidung kurz.  
Ergänze außerdem:

- Welche Risiken entstehen bei zu wenig Ressourcen?
- Welche Probleme entstehen bei zu großzügiger Zuweisung?
- Warum muss die Host-Hardware trotzdem ausreichend leistungsfähig sein?

Wenn du Virtualisierungssoftware verfügbar hast, prüfe dort beispielhaft die möglichen Einstellwerte und nutze realistische Angaben.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine nachvollziehbare VM-Planung mit sinnvoll gewählten Ressourcen und kurzen Begründungen für CPU, RAM, Speicher und Netzwerk.

### Aufgabe 5:

Mini-Konzept: Empfehlung für eine Virtualisierungslösung 

**Ziel:** Du führst deine Ergebnisse zu einer praxistauglichen Empfehlung zusammen.

**Arbeitsauftrag:**  
Erstelle ein kurzes Mini-Konzept für das Unternehmen aus Aufgabe 2.  
Dein Konzept soll die folgenden Punkte enthalten:

- kurzer Anlass: Warum will das Unternehmen virtualisieren?
- empfohlene Art des Hypervisors
- ein passendes Softwarebeispiel
- zwei bis drei typische Einsatzbereiche im Unternehmen
- die wichtigsten Vorteile für Anwender und Unternehmen
- grundlegende virtuelle Hardware-Ausstattung für eine Beispiel-VM

Formuliere dein Konzept so, dass es auch von einer technisch interessierten Person verstanden werden kann, die noch wenig Vorwissen hat.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast ein kurzes, strukturiertes Konzept mit klarer Empfehlung, passender Begründung und Bezug zu den vorherigen Aufgaben.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Virtualisierungssoftware untersuchen

**Ziel:** Du überträgst dein Wissen auf eine konkrete Oberfläche oder Produktdokumentation.

**Arbeitsauftrag:**  
Öffne eine installierte Virtualisierungssoftware oder recherchiere die Oberfläche über Screenshots und Herstellerseiten.  
Dokumentiere, wo du dort die Einstellungen für folgende virtuelle Hardware findest:

- CPU
- Arbeitsspeicher
- Festplatte
- Netzwerkkarte

Erstelle dazu eine kurze Schrittfolge oder eine beschriftete Skizze.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast nachvollziehbar dokumentiert, wo die wichtigsten VM-Hardwareeinstellungen in einer konkreten Lösung zu finden sind.

### Erweiterungsaufgabe 2: Softwarevergleich

**Ziel:** Du vergleichst Virtualisierungslösungen nach praxisrelevanten Kriterien.

**Arbeitsauftrag:**  
Vergleiche drei Virtualisierungslösungen deiner Wahl in einer Tabelle.  
Nutze dabei mindestens diese Kriterien:

- Hypervisor-Typ
- typischer Einsatzbereich
- Betriebssystem oder Plattform
- einfache Bedienbarkeit
- Eignung für Lernen, Testen oder Serverbetrieb

Schließe mit einer kurzen Empfehlung ab, welche Lösung du für Lernzwecke wählen würdest und warum.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine verständliche Vergleichstabelle und eine begründete Auswahl für einen konkreten Einsatzzweck.

### Erweiterungsaufgabe 3: Architektur-Skizze erstellen

**Ziel:** Du stellst den Zusammenhang zwischen Host, Hypervisor und virtueller Maschine übersichtlich dar.

**Arbeitsauftrag:**  
Erstelle eine einfache Skizze oder ein Diagramm mit folgenden Elementen:

- physische Hardware
- Host-Betriebssystem oder direkte Hardware-Nutzung
- Hypervisor
- mindestens zwei virtuelle Maschinen
- virtuelle CPU, RAM, Festplatte und Netzwerkkarte innerhalb einer VM

Beschrifte deine Skizze so, dass der Aufbau klar verständlich ist.

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine saubere Darstellung, die den Aufbau einer virtualisierten Umgebung verständlich visualisiert.

## Wichtige Hinweise

- Arbeite deine Ergebnisse fortlaufend in einem Dokument aus.
- Formuliere kurz, präzise und mit klarem Praxisbezug.
- Nutze Tabellen, Stichpunkte und Skizzen, wenn sie dir helfen.
- Wenn dir keine Virtualisierungssoftware zur Verfügung steht, bearbeite die Aufgaben mit Recherche, Screenshots oder Produktbeschreibungen.
- Achte darauf, dass deine Ergebnisse aufeinander aufbauen und sich am Ende zu einem schlüssigen Gesamtbild ergänzen.

## Reflexionsfragen

- Was ist für dich der wichtigste Unterschied zwischen physischer und virtueller Hardware?
- In welchem Einsatzgebiet erscheint dir Virtualisierung am sinnvollsten und warum?
- Wann würdest du eher einen Hypervisor Typ 1 wählen, wann eher Typ 2?
- Welche virtuelle Hardware-Komponente war für dich am leichtesten zu verstehen, welche am schwierigsten?
- Worauf würdest du bei der Planung einer VM in der Praxis besonders achten?

---