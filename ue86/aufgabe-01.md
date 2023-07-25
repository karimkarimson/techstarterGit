# Aufgabe 1: Theorie

1. **Was sind Unit Tests in der Softwareentwicklung und wie funktionieren sie?**
   - Erläutere den Zweck von Unit Tests und welche Teile des Codes sie überprüfen.
   > Unit Tests überprüfen Funktionen, Module und Methoden auf ihre korrekte und autarke Funktionsweise. Zum Beispiel mit der Hilfe von Frameworks wie Mocha und Chai lassen sich einfache Unit Tests schreiben, welche einen beschreibenden Text und eine Callback funktion empfangen und dadurch zu einem beschreibenden Testing führen.

2. **Welche Vorteile bieten Unit Tests für Entwickler und Softwareprojekte?**
   - Nenne mehrere Vorteile von Unit Tests und wie sie zur Verbesserung der Codequalität und Wartbarkeit beitragen.
   > Durch das frühzeitige Testen kleinster Code-Einheiten und -Abschnitte werden Fehler frühzeitig erkannt. Durch den beschreibenden Charakter der Tests, wird gleichzeitig auch eine Dokumentation über die Funtionen der Code-Abschnitte, die sauber aufzeigt was der Code nicht tun sollte und was er wiederum tun sollte. Dadurchhaben folgende Entwickler die an dem Code arbeiten einen übersichtlichen Einstiegspunkt der die Anwesenheit des originalen Autors nicht erfordert.

3. **Was sind die Hauptkomponenten des Testing-Frameworks Mocha?**
   - Beschreibe die grundlegenden Eigenschaften von Mocha und wie es Entwicklern hilft, Tests zu organisieren und auszuführen.
   > Mocha erleichtert es einem durch eine Beschreibende Teststruktur, asynchrone Tests, flexibler Testausführung, Hooks und Reporter, übersichtliche Tests zu schreiben.

4. **Wie kann Chai als Assertions-Bibliothek in Kombination mit Mocha verwendet werden?**
   - Erkläre, wie Chai-Assertions in Testfällen von Mocha eingesetzt werden, um die Funktionalität des Codes zu überprüfen.
   > Chai integriert sich nahtllos mit dem Mocha-Framework und vervollständigt das Testing mit einer großen Bibliothek an Funktionen zur Annahme verschiedener Zustände und Vergleich der jeweiligen Werte.


5. **Welche Schritte sind erforderlich, um Mocha und Chai in einem Node.js-Projekt zu verwenden?**
   - Beschreibe die notwendigen Schritte, um Mocha und Chai als Entwicklerabhängigkeiten zu installieren und Testdateien zu erstellen.
   > 1. in das Projektverzeichnis wechseln und Bibliotheken installieren
```bash
cd projectRepository
npm init -y
npm install mocha chai --save-dev 
vi package.json
```
   > 2. test-Skript im Package-VZ einbinden für einfacheres Aufrufen
```json
  "scripts": {
    "test": "npx mocha"
  }
```
   > 3. test-VZ sowie testdateien erstellen
```bash
mkdir test
cd test
touch myCode.test.js
vi myCode.test.js
```
   > 4. Testbibliothek "Chai" in den Test-Code einbinden
```javascript
const { expect } = require('chai');
describe("Teste diese Unit", () => {
   it("Dieser Test soll diesdas machen", () => {
      expect(functionImModul(para1, para2)).to.equal(gewuenschterWert);
   });
});
```
   > 5. test-Skript aufrufen
```bash
npm run test
```

6. **Welche zusätzlichen Möglichkeiten gibt es, um Unit Tests zu erweitern und zu verbessern?**
   - Benenne einige weitere Techniken oder Werkzeuge, die neben Mocha und Chai zur Verbesserung von Unit Tests verwendet werden können.
   > Man kann die Testing-Frameworks zum Teil selber erweitern und somit die Tests für den eigenen Gebrauch spezifizieren. Zudem gibt es viele weitere Frameworks und Tools die man nutzen kann, wie zB.: [Cypress](https://www.cypress.io/), [Cucumber](https://cucumber.io/docs/installation/javascript/) oder [QUnit](https://qunitjs.com/)

7. **Warum sollten Entwickler regelmäßig Unit Tests durchführen und wie tragen sie zur kontinuierlichen Integration und Bereitstellung bei?**
    - Erkläre den Zusammenhang zwischen Unit Tests, kontinuierlicher Integration und kontinuierlicher Bereitstellung (CI/CD) in der Softwareentwicklung.
    > Da in einer CI/CD sichergestellt werden soll, dass nur Code integriert wird der *das System nicht behindert* und der zu *keinen gravierenden Folgen* für das Programm führt, wird mit Hilfe von Tests in der CI/CD dies sichergestellt. Beim integrieren einer Änderung kann somit sichergestellt werden, dass alle bisherigen integrierten Code-Funktionen immernoch gewährleistet sind.