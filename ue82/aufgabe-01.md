# Aufgabe 1: Verständnis

**Beschreibe die Antwort zu folgenden Fragen (kurz) mit eigenen Worten**

## Callbacks

1. Was sind Callback-Funktionen in JavaScript?
Callback-Funktionen sind Funktionen die an Funktionen als Parameter übergeben werden.
2. Wozu werden Callback-Funktionen verwendet?
Wenn eine Callback-Funktion übergeben wird, spaltet sich dieser Task ab und blockiert nicht mehr den Main-Thread. Somit hindert dieser Teil des Codes nicht mehr den Rest des Codes daran ausgeführt zu werden. Das Programm wird asynchron.
3. Wie werden Callback-Funktionen in JavaScript übergeben?
als Parameter in eine andere Funktion
```javascript
function asynchronOp(callbackFunktion) {
    setTimeout(() => {
        const result = 44;
        callbackFunktion(result);
    }, 1000);
}
```
4. Wie kann man eine anonyme Funktion als Callback übergeben und welche andere Möglichkeit gibt es?
```javascript
function (callbackFunktion) => {
    callbackFunktion();
}
function (callbackFunktion) {
    callbackFunktion();
}
function (callbackFunktion) {callbackFunktion()};
5. Was sind mögliche Alternativen zu Callback-Funktionen in JavaScript?
async await -Paare
## Promises

6. Was sind Promises in JavaScript?
Ein Versprechen, dass eine Funktion zu Ende laufen wird und ein Ergebnis enthalten wird (auch error).
7. Wozu wurden Promises entwickelt?
Um die CallBack-Hölle zu erkalten. Durch das verwenden mehrerer asynchroner Funktionen entstehen schnell sehr verschachtelte & schwer übersichtliche Strukturen. Promises helfen also den Code zu vereinfachen, verdeutlichen und besser zu strukturieren.
8. Welche Zustände können Promises haben und was bedeuten sie?
    1. pending, die Funktion läuft noch und hat kein Ergebnis geliefert
    2. fulfilled, ein Ergebnis ist vorhanden. die Funktion ist beendet
    3. rejected, das Promise konnte nicht erfüllt werden. Error.
9. Wie erstellt man ein Promise in JavaScript? (Kurzes Code Beispiel)
```javascript
const versprechen = new Promise ((resolve, reject) => {
    fetch('http://google.com');
});
```
10. Wie reagiert man auf den Erfolg oder Misserfolg eines Promises?
```javascript
promise
    .then(result => {console.log("erfolg");})
```
11. Wie behandelt man Fehler in Promises?
```javascript
    .catch(error => {console.log('error');});
```
12. Welche Vorteile bieten Promises im Vergleich zu Callback-Funktionen?
Übersichtlichkeit

##  Async Await

13. Warum wurde Async Await entwickelt?
um Asynchronität einzubringen und Code lesbarer zu machen. Ähnlich der Antwort zu Frage 1.1 & 1.2
14. Was ist der Unterschied zwischen synchronem Code und Async Await?
async await wird im Hintergrund weiter ausgeführt bis das Promise erfüllt ist. Der asynchrone Code wirkt so, als sei er in keinem single-thread-system.
15. Wie funktioniert Async Await in JavaScript? (Kurzes Code Beispiel)
```javascript
async function asyncFunktion () {
    const request = await fetch(url, res);
}
```
16. Welche Schlüsselwörter werden verwendet, um in einer Funktion das await Keyword zu nutzen?
async ... await
17. Wie funktioniert die sequenzielle Ausführung mehrerer asynchroner Operationen mit Async Await?
entweder sequenziell mit mehreren await/promises oder parallel mit zB Promise.all 
18. Welche Vorteile bietet Async Await im Vergleich zu Callback-Funktionen und Promises?
Übersichtlichkeit 