
import Enso, { css, html } from 'ensojs';
// Components
import "./components/icons/icon.enso";
import "./components/layout/header.enso";

// Sections
import Nav from "./sections/nav.enso";
import Example from "./sections/example.enso";
import WhyEnso from "./sections/why.enso";
import Overview from "./sections/overview.enso";

// Styles
import Styles from "./app.css?inline";
import CodeStyles from "@styles/code.css?inline";
import "@styles/main.css";


Enso.component("enso-app", {
    settings: { useShadow: false },
    styles: [css(Styles), css(CodeStyles)],
    template: html`
        ${ Nav }
        <site-header>
            <enso-icon></enso-icon>
            <h1>Enso</h1>
        </site-header>
        
        ${ Example }
        ${ WhyEnso }
        ${ Overview }

        <footer>
            <enso-icon 
                aria-hidden="true"
                role="presentation"
                focusable="false"
            >
            </enso-icon>
            <span class="version">
                Built with Enso v.${Enso.version}
            </span>
            <span class="links">
                Native Web Components
                <a href="#">Docs</a>
                <a href="https://github.com/seanyoung247/ensoJS">Github</a>
            </span>
            <span class="copyright">
                &copy; Sean Young ${new Date().getFullYear()}
            </span>
        </footer>
    `,
});
