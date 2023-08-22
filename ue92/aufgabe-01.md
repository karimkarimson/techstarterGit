# Aufgabe 1: Inhaltsfragen

1. Welche Vorteile bietet das Verwenden von nodemon während der Entwicklung Deines Node.js-Servers, und wie wird es installiert und konfiguriert?
> nodemon startet den NodeJS-Server neu, bzw startet die Scripte neu, bei Änderungen in den Quelldateien. 
> man spart sich das manuelle Neu-Starten über die CLI, welches bei vielen kleinen Änderungen sehr viel Zeit in Anspruch nehmen würde.
2. Wie kann man CORS (Cross-Origin Resource Sharing) in einer Full-Stack-App beeinflussen und welche Probleme können auftreten, wenn dies nicht richtig konfiguriert ist?
> Es gibt Bibliotheken mit denen man CORS einstellen kann, sodass verschiedene __getrennte__ Teile der APP miteinander kommunizieren können. Auch in einem S3-Bucket kann man die CORS konfigurieren.
3. Welche Vorteile hat die Auslagerung von API-Routen in separate Dateien und Ordner in einer Node.js Express-Anwendung?
> Da Projekte recht schnell wachsen können und man typischerweise mit mehreren APIs kommuniziert, kann es schnell sehr unübersichtlich werden wenn man API-Routen als Monolith programmiert. Daher die Aufteilung.
4. Warum könnte es sinnvoll sein, React-Komponenten in separate Ordner zu organisieren, wenn Dein Frontend-Projekt wächst? Wie kannst Du Komponenten in React wiederverwenden?
> Da eine React-Seite aus verschiedenen Komponenten besteht und diese Komponenten wiederrum auch aus Komponenten bestehen und auf einer Seite typischerweise Elemente wie Buttons nicht nur einmalig verwendet werden, bietet es sich an kleinste Komponenten zu erstellen, die entsprechend in verschiedenen Teilen eingebunden werden können.
5. Was ist der Zweck des useEffect-Hooks in React, und wie wird er verwendet, um Daten zwischen Frontend und Backend in einer Full-Stack-App abzurufen und anzuzeigen?
> useEffect wird benutzt um aus einer React-App eine Verbindung zu einer API herzustellen, besonders wenn diese Verbindung offen gehalten werden soll, bzw Daten mit externen Diensten synchronisiert werden sollen. Wie zB eine Verbindung zu einer Datenbank.
```Javascript
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data)); // hier werden die Daten aus der DB-Abfrage in die App gespeist.
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        {data.map(item => (
          <div key={item.id}>{item.value}</div>
        ))}
      </p>
    </div>
  );
}

export default App;
```
6. Was macht der useState-Hook und wiese wurde er in diesem Projekt verwendet?
> die useState-Hook wird hier verwendet, um die aus dem Backend abgefragten Daten in der App zu speichern und im Anschluss im HTML zu injezieren. 