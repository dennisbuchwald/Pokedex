# Pokédex-App mit React

Dies ist eine Pokédex-App, die mit React erstellt wurde. Die App ermöglicht es dem Benutzer, eine Liste von Pokémon anzuzeigen und Details zu jedem Pokémon anzuzeigen.

Die App ist aktuell optimiert auf das IPhone 13 Pro.

https://pokedext-app-kanto.vercel.app

## Installation

Um die App zu installieren, müssen Sie die folgenden Schritte ausführen:

ausführen:

1. Klone das Repository auf deinem lokalen Computer.
2. Navigiere in den Projektordner.
3. Öffne das Terminal und führe `npm install` aus, um alle Abhängigkeiten zu installieren.
4. Führe `npm start` aus, um die App im Browser zu öffnen.

## Verwendung

Nachdem die App installiert wurde, können Sie sie verwenden, um eine Liste von Pokémon anzuzeigen und Details zu jedem Pokémon anzuzeigen.

### Anzeigen der Pokémon-Liste

Um die Pokémon-Liste anzuzeigen, müssen Sie auf die Startseite der App navigieren. Hier wird eine Liste aller Pokémon angezeigt. Sie können durch die Liste scrollen, um alle Pokémon anzuzeigen.

### Anzeigen von Pokémon-Details

Um die Details eines bestimmten Pokémon anzuzeigen, klicken Sie auf das Pokémon in der Liste. Dadurch gelangen Sie zur Detailseite des Pokémon, auf der Informationen wie Name, Typ, Fähigkeiten und Statistiken angezeigt werden.

### Technologien

Die App wurde mit React erstellt und verwendet die folgenden Technologien:

- React Router für die Navigation innerhalb der App
- Axios für das Abrufen von Pokémon-Daten von einer externen API
- Styled Components für das Styling der App
- Photoshop zum entwerfen der UI

### Credits

Diese App wurde von Dennis Buchwald erstellt. Die Pokémon-Daten wurden von der [PokéAPI API](https://pokeapi.co/) bezogen.

## Versionsgeschichte

### Version 0.1.0 (03. März 2023)

- Erste Alpha-Veröffentlichung der Pokédex-App
- Erster Entwurf des Designs und Aktualisierung des Hintergrunds
- Erstellung des Grundgerüsts

### Version 0.2.0 (04. März 2023)

- Das App-Design wurde überarbeitet und verbessert.
- Eine Komponente namens "Display" wurde integriert, die die Informationen von der API anzeigt.
- Eine Anbindung an die PokeAPI wurde hinzugefügt, um Informationen über Pokémon abzurufen.
- Zwei "Buttons" wurde hinzugefügt, der es dem Benutzer ermöglicht, neue Pokémon-Daten abzurufen.
- Das Styling des "Display" wurde verbessert, um das Erscheinungsbild der App zu verbessern.

### Version 0.3.0 (05. März 2023)

- API anbindung Bugfix
- Funktionn den Buttons hinzugefügt
- Begrenzung der möglichen Pokemons die angezeigt werden können von 1 - 151
- Display überarbeitet
- Neue Buttons hinzugefügt
- Soundeffekt beim Klicken des Buttons
- Ein Button mit dem "Shiny Mode" wurde hinzugeführt der erlaubt die Poekmons in ihrer Shiny Version zu zeigen.

Technisch:

- In der Datei `Button.js` habe ich den Button als eine Komponente definiert, die zwei Buttons, "Prev" und "Next", enthält. Ich habe auch zwei Funktionen, `handlePrev` und `handleNext`, erstellt, die aufgerufen werden, wenn auf die entsprechenden Buttons geklickt wird.
- In der Datei `App.js` habe Ich number als State mithilfe von `useState` definiert und ihn auf 6 gesetzt (Glurak). Ich habe auch die beiden Funktionen `handlePrev` und `handleNext` in App.js definiert und sie so geschrieben, dass sie den Wert von number erhöhen bzw. verringern, wenn auf den "Next" bzw. "Prev" Button geklickt wird.
- Ich habe die beiden Funktionen `handlePrev` und `handleNext` als Props an die Button Komponente weitergegeben, damit sie auf die Klicks der Buttons reagieren kann.
- Ich habe auch die beiden Bedingungen if (number <= 0) und if (number >= 151) in `handlePrev` und `handleNext` hinzugefügt, um sicherzustellen, dass number nicht unter 0 oder über 151 gehen kann.
- In `Button.js` habe ich eine weitere Funktion `handleShinyMode` hinzugefügt, die aufgerufen wird, wenn auf den "Shiny Mode" Button geklickt wird.
- Ich habe auch eine neue State-Variable `isShiny` definiert und sie standardmäßig auf `false` gesetzt. Wenn der "Shiny Mode" Button geklickt wird, wird der Wert von `isShiny` umgedreht.
- In App.js habe ich die `handleShinyMode` Funktion als Prop an die Button Komponente weitergegeben, damit sie auf den Klick des "Shiny Mode" Buttons reagieren kann.
- Ich habe auch eine weitere Prop `isShiny` an die Button Komponente weitergegeben, damit der "Shiny Mode" Button aktiviert wird, wenn `isShiny` auf `true` gesetzt ist.
- Ich habe auch eine weitere Komponente Fooder hinzugefügt, um Informationen über die App anzuzeigen.

### Bekannte Probleme/Einschränkungen:

- Display ist nicht responsiv

### Geplante Änderungen/Funktionen für zukünftige Versionen:

- Erstellung der UI/UX ✅
- Hinzufügen der Suchfunktion
- Anbindung an die API ✅
- Hinzufügen von Soundeffektn beim Klicken eine Buttons
- Hinzufügen einses "Shiny Mode" ✅
- Der Shiny Button soll die Farbe ändern, sobald er gedrückt ist.
- Hinzufügen eines "Info Screens"
- Hinzufügen von Hintergrund Musik
- Hinzufügen eines Menüs zum Steuern der Lautstärke der Soundeffekt und der Hintergrund Musik
- App auf Deutsch ändern

Ich möchten uns bei allen bedanken, die mir Feedback gegebe. Eure Unterstützung ist mir sehr wichtig, um diese App zu verbessern und weiterzuentwickeln.

<!-- - Benutzer können eine Liste von Pokémon anzeigen lassen und Details zu jedem Pokémon anzeigen
- Pokémon-Daten werden von der PokéAPI API bezogen -->

<!--
Version 1.1.0 (10. März 2023)
Verbesserung der Benutzeroberfläche und des Designs
Hinzufügen von Bildern für jedes Pokémon
Verbesserte Navigation innerhalb der App
Version 1.2.0 (17. März 2023)
Hinzufügen von Filteroptionen für die Pokémon-Liste
Verbesserte Leistung beim Laden von Pokémon-Daten
Behobene Fehler und Verbesserungen der App-Stabilität -->
