import './NewStyle.css';

function Header() {
    return (
        <header>
            <h1>Karim's React Komponenten</h1>
        </header>
    );
}
function Willkommen() {
    return (
        <section>
            <h2>Willkommen</h2>
            <p>Herzlich willkommen auf meiner einfachen Webseite!</p>
        </section>
    );
}
function AboutMe() {
    return (
        <section>
            <h2>Über mich</h2>
            <p>
                Hier ist eine kurze Beschreibung über mich und meine Interessen.
                toll ne?
            </p>
        </section>
    );
}
function Kontakt() {
    return (
        <section>
            <h2>Kontakt</h2>
            <p>
                Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
                karim.aouini@docc.techstarter.de
            </p>
        </section>
    );
}
function Footer() {
    return (
        <footer>
            <p>&copy; 2023 Meine Webseite</p>
        </footer>
    );
}

export {
    Header,
    Willkommen,
    AboutMe,
    Kontakt,
    Footer
};