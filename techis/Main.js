  <title>Ü087-Webseite</title>
  <link rel="stylesheet" href="styles.css">

<body>

  <header>
	<h1>Karim's React Komponenten</h1>
  </header>
  
  <main>


	<section>
	</section>

	<section>
	</section>

  </main>

  <footer>
  </footer>

</body>

</html>

import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <h1>Karim#s React Komponenten</h1>
  );
}
function Willkommen() {
    return (
        <>
        <h2>Willkommen</h2>
        <p>Herzlich willkommen auf meiner einfachen Webseite!</p>
        </>
    );
}
function AboutMe() {
    return (
        <>
        <h2>Über mich</h2>
        <p>
            Hier ist eine kurze Beschreibung über mich und meine Interessen.
            toll ne?
        </p>
        </>
        );
}
function Kontakt() {
    return ( 
        <>
        <h2>Kontakt</h2>
        <p>
            Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
            karim.aouini@docc.techstarter.de
        </p>
        </>
    );
}
function Footer() {
    return (
        <>
        <p>&copy; 2023 Meine Webseite</p>
        </>
    );
}

export default Header;
