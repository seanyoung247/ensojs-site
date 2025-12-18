
import Enso, { css, html } from 'ensojs';
// Components
import "./components/icon.enso";
import "./components/header.enso";

// Sections
import Nav from "./sections/nav.enso"
import Example from "./sections/example.enso"
import WhyEnso from "./sections/why.enso"

// Styles
import Styles from "./app.css?inline";
import "./styles/main.css";


console.log(Enso.version);


Enso.component("enso-app", {
    settings: { useShadow: false },
    styles: css(Styles),
    template: html`
        ${ Nav }
        <site-header>
            <enso-icon></enso-icon>
            <h1>Enso</h1>
        </site-header>
        ${ Example }
        ${ WhyEnso }
    `,
});
