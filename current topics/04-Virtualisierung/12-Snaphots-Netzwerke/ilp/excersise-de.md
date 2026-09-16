# Individuelle Learning Phase: Virtuelle Maschinen sicher nutzen und vernetzen

## Dein Ziel

Du richtest eine kleine virtuelle Testumgebung ein, sicherst deinen Arbeitsstand mit Snapshots, erstellst Kopien einer VM und vergleichst die Netzwerkmodi NAT, Bridged und Host-only praktisch. Am Ende hast du eine dokumentierte Mini-Umgebung mit zwei virtuellen Maschinen und nachvollziehbaren Testergebnissen zur Erreichbarkeit und zu einfachen Sicherheitsaspekten.

## Das brauchst du

- Einen Rechner mit einer Virtualisierungslösung, z. B. VirtualBox oder VMware Workstation/Player
- Mindestens eine lauffähige virtuelle Maschine
- Nach Möglichkeit ein zweites Betriebssystem oder ausreichend Speicherplatz zum Klonen
- Zugriff auf grundlegende Netzwerkbefehle in der VM, z. B. `ipconfig` / `ifconfig`, `ping`, optional `hostname`
- Einen Editor für Notizen oder eine Datei zur Dokumentation deiner Ergebnisse
- Optional Internetzugang für Tests im NAT- oder Bridged-Modus

## Zeitplanung

- 10 Min: Umgebung prüfen und Dokumentation anlegen
- 20 Min: Basis-Aufgabe 1
- 15 Min: Basis-Aufgabe 2
- 20 Min: Basis-Aufgabe 3
- 20 Min: Basis-Aufgabe 4
- 20 Min: Basis-Aufgabe 5
- 15 Min: Erweiterungsaufgaben bearbeiten
- 10 Min: Ergebnisse prüfen und Reflexion beantworten

## Basis-Aufgaben

### Aufgabe 1:
Bestandsaufnahme und Ausgangs-VM vorbereiten  
**Ziel:** Du schaffst eine saubere Ausgangsbasis für alle weiteren Schritte.  
**Arbeitsauftrag:**  
- Starte deine vorhandene VM oder erstelle eine einfache Test-VM, falls noch keine vorhanden ist.  
- Prüfe den aktuellen Namen der VM, das installierte Betriebssystem und den konfigurierten Netzwerkmodus.  
- Ermittle in der VM die aktuelle IP-Adresse und den Hostnamen.  
- Lege eine Dokumentationsdatei an und notiere:
  - Name der VM
  - Betriebssystem
  - aktueller Netzwerkmodus
  - IP-Adresse
  - Hostname
- Fahre die VM sauber herunter, wenn dein Virtualisierungstool bestimmte Änderungen nur im ausgeschalteten Zustand erlaubt.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine funktionsfähige Ausgangs-VM und eine kurze Dokumentation mit den wichtigsten Startinformationen.

### Aufgabe 2:
Snapshot erstellen und gezielt nutzen  
**Ziel:** Du sicherst einen definierten Zustand der VM und verstehst den praktischen Nutzen eines Snapshots.  
**Arbeitsauftrag:**  
- Erstelle für deine Ausgangs-VM einen Snapshot mit einem aussagekräftigen Namen, z. B. „Ausgangszustand vor Netzwerkänderungen“.  
- Starte die VM und führe eine kleine, gut erkennbare Änderung durch, z. B.:
  - Erstelle eine Testdatei auf dem Desktop
  - Ändere den Hostnamen
  - Ergänze einen Eintrag in einer Textdatei
- Prüfe, dass die Änderung sichtbar ist.  
- Setze die VM anschließend auf den Snapshot zurück.  
- Kontrolliere, ob die vorgenommene Änderung wieder verschwunden ist oder der frühere Zustand wiederhergestellt wurde.  
- Notiere in deiner Dokumentation:
  - Name des Snapshots
  - Welche Änderung du durchgeführt hast
  - Was nach dem Zurücksetzen sichtbar war  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast einen Snapshot erstellt, eine Änderung getestet und den vorherigen Zustand erfolgreich wiederhergestellt.

### Aufgabe 3:
VM klonen oder exportieren und wieder importieren  
**Ziel:** Du erzeugst eine zweite, eigenständige VM auf Basis deiner Ausgangs-VM.  
**Arbeitsauftrag:**  
- Erstelle aus deiner Ausgangs-VM eine Kopie. Nutze dazu entweder:
  - die Klon-Funktion deiner Virtualisierungslösung oder
  - Export und anschließenden Import der VM
- Vergib für die Kopie einen klar unterscheidbaren Namen, z. B. `Test-VM-02`.  
- Starte beide VMs nacheinander und prüfe:
  - ob beide in der Verwaltungsoberfläche sichtbar sind
  - ob sich Name, Speicherort oder Konfigurationsdaten unterscheiden
  - ob die zweite VM grundsätzlich startfähig ist
- Falls beide VMs denselben Hostnamen haben, ändere den Hostnamen der Kopie, damit du sie später besser unterscheiden kannst.  
- Dokumentiere:
  - ob du geklont oder exportiert/importiert hast
  - die Namen beider VMs
  - ob beide VMs erfolgreich startbar sind  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast zwei getrennt nutzbare VMs, die du in der Oberfläche klar unterscheiden kannst und die grundsätzlich starten.

### Aufgabe 4:
NAT, Bridged und Host-only vergleichen  
**Ziel:** Du erkennst die Unterschiede der drei Netzwerkmodi durch eigene Tests.  
**Arbeitsauftrag:**  
- Wähle eine deiner VMs und teste nacheinander die Modi NAT, Bridged und Host-only.  
- Gehe bei jedem Modus gleich vor:
  - Stelle den Netzwerkmodus ein
  - Starte die VM
  - Ermittle die IP-Adresse
  - Prüfe, ob die VM den Host erreichen kann
  - Prüfe, ob Internetzugriff vorhanden ist, falls in deiner Umgebung möglich
- Notiere für jeden Modus in einer kleinen Tabelle:
  - vergebene IP-Adresse
  - Erreichbarkeit des Hosts: ja/nein
  - Internetzugriff: ja/nein
  - dein kurzer Eindruck zur typischen Verwendung
- Achte darauf, nach jedem Test sauber zum nächsten Modus zu wechseln.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast für NAT, Bridged und Host-only je einen praktischen Test durchgeführt und die Unterschiede anhand realer Beobachtungen dokumentiert.

### Aufgabe 5:
Kommunikation zwischen zwei virtuellen Maschinen prüfen  
**Ziel:** Du testest, wie zwei VMs in einem gemeinsamen virtuellen Netzwerk miteinander kommunizieren.  
**Arbeitsauftrag:**  
- Konfiguriere beide VMs so, dass sie im gleichen passenden Netzwerkmodus laufen. Für die direkte Kommunikation eignet sich besonders Host-only; falls möglich, kannst du zusätzlich Bridged testen.  
- Starte beide VMs.  
- Ermittle auf beiden VMs die IP-Adresse und den Hostnamen.  
- Prüfe von VM 1 aus die Erreichbarkeit von VM 2 per `ping`.  
- Prüfe anschließend von VM 2 aus die Erreichbarkeit von VM 1.  
- Falls die Kommunikation nicht funktioniert:
  - prüfe, ob beide VMs im gleichen Netzwerk sind
  - prüfe, ob die IP-Adressen zum selben Netzbereich passen
  - prüfe, ob eine lokale Firewall die Antwort blockiert
- Dokumentiere:
  - Netzwerkmodus
  - IP-Adresse und Hostname beider VMs
  - Ergebnis der Erreichbarkeit in beide Richtungen
  - mögliche Ursache bei fehlender Verbindung  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast zwei VMs in einem gemeinsamen virtuellen Netzwerk getestet und nachvollziehbar dokumentiert, ob und warum sie miteinander kommunizieren können oder nicht.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Sicherheitscheck der Netzwerkmodi  
**Ziel:** Du leitest einfache Sicherheitsaspekte aus deinen praktischen Tests ab.  
**Arbeitsauftrag:**  
- Vergleiche deine Ergebnisse aus NAT, Bridged und Host-only.  
- Erstelle eine kurze Übersicht mit drei Spalten:
  - Sichtbarkeit der VM im Netzwerk
  - Risiko bei ungewollter Erreichbarkeit
  - sinnvoller Einsatzbereich
- Formuliere für jeden Modus eine kurze Einschätzung, wann du ihn bevorzugen würdest und wann eher nicht.  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast eine kurze, verständliche Sicherheitsbewertung der drei Netzwerkmodi erstellt.

### Erweiterungsaufgabe 2: Snapshot-Strategie für Testumgebungen  
**Ziel:** Du planst den sinnvollen Einsatz von Snapshots bei Änderungen an VMs.  
**Arbeitsauftrag:**  
- Lege für deine VM eine kleine Snapshot-Strategie mit mindestens drei sinnvollen Zeitpunkten fest, z. B.:
  - vor Netzwerkänderungen
  - vor Software-Installationen
  - vor sicherheitsrelevanten Konfigurationsänderungen
- Beschreibe zu jedem Zeitpunkt in 1–2 Sätzen:
  - warum ein Snapshot dort sinnvoll ist
  - welches Risiko du dadurch reduzierst  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast einen einfachen, praktisch nutzbaren Plan für den Einsatz von Snapshots in deiner Testumgebung.

### Erweiterungsaufgabe 3: Mini-Migrationsszenario mit Export und Import  
**Ziel:** Du simulierst die Weitergabe einer VM an ein anderes System.  
**Arbeitsauftrag:**  
- Exportiere eine VM in ein geeignetes Austauschformat, falls deine Software das unterstützt.  
- Importiere die VM wieder oder prüfe den Exportvorgang bis zu dem Punkt, an dem die exportierte Datei sichtbar vorliegt.  
- Dokumentiere:
  - Dateiname oder Format
  - Größe der Exportdatei
  - welche Einstellungen nach dem Import geprüft werden sollten, z. B. Netzwerk, Name, MAC-Adresse, Startfähigkeit  

**Erwartetes Ergebnis / Soll-Zustand:**  
Du hast den Ablauf einer einfachen VM-Weitergabe nachvollzogen und die wichtigsten Prüfpunkte nach dem Import festgehalten.

## Wichtige Hinweise

- Arbeite möglichst mit Test-VMs und nicht mit produktiven Systemen.
- Vergib klare Namen für VMs und Snapshots, damit du Zustände später sicher unterscheiden kannst.
- Dokumentiere jede Änderung direkt nach dem Schritt, damit du Ergebnisse nicht verlierst.
- Wenn ein Test nicht funktioniert, halte die Beobachtung trotzdem fest. Auch ein nicht erfolgreicher Test liefert dir verwertbare Erkenntnisse.
- Nutze für Netzwerkvergleiche möglichst immer dieselbe VM, damit deine Ergebnisse besser vergleichbar bleiben.
- Wenn Befehle je nach Betriebssystem unterschiedlich sind, verwende die passende Variante für deine VM.

## Reflexionsfragen

- Worin lag für dich der praktische Unterschied zwischen Snapshot und Klon?
- In welcher Situation würdest du eher klonen statt exportieren/importieren?
- Welcher Netzwerkmodus war für die direkte Kommunikation zwischen zwei VMs am geeignetsten?
- In welchem Modus war deine VM am stärksten vom restlichen Netzwerk getrennt?
- Welche einfachen Sicherheitsrisiken entstehen, wenn du eine VM im Bridged-Modus betreibst?
- Welche drei Prüfpunkte würdest du immer kontrollieren, nachdem du eine VM importiert oder geklont hast?

---