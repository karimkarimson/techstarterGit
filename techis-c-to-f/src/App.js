import React from 'react';
import './App.css';


function App() {
  const [anzahl, setAnzahl] = React.useState(0);
  const [waehrung, setWaehrung] = React.useState("Dollar");
  const [wechselkurs, setWechselkurs] = React.useState(0);
  const handleClick = () => {
    document.getElementById('wechselkurs').value = wechselkurs;
    setAnzahl(document.getElementById('anzahl').value);
  };

  // fetch('https://api.exchangeratesapi.io/latest?base=USD')
  //   .then(response => response.json())
  //   .then(data => setWechselkurs(data.rates.USD));



  return (
    <div className="App">
      <label>Währung-Name: </label>
      <input type="text" id="waehrung" defaultValue={waehrung} onChange={() => {setWaehrung(document.getElementById('waehrung'))}} />
      <br />
      <label>Wechselkurs: </label>
      <input type="number" id="wechselkurs" defaultValue={wechselkurs} />
      <br />
      <label>Anzahl: </label>
      <input type="text" id="anzahl" defaultValue={anzahl} />
      <br />
      <button onclick={handleClick}>Berechne</button>
      <br />
      <p>
        Nach heutigem Wechselkurs von {wechselkurs} sind {anzahl} {waehrung} Euro wert.
      </p>

    </div>
  );
}

export default App;
