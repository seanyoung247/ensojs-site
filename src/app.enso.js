
import Enso, { css, html } from 'ensojs';

// Sections
import Nav from "./sections/nav.enso";
import header from "./sections/header.enso";
import Example from "./sections/example.enso";
import WhyEnso from "./sections/why.enso";
import Overview from "./sections/overview.enso";
import Footer from "./sections/footer.enso";

// Styles
import CodeStyles from "@styles/code.css?inline";
import Reactive from '@styles/reactive.css?inline';
import "@styles/main.css";


Enso.component("enso-app", {
    settings: { useShadow: false },
    styles: [css(CodeStyles), css(Reactive), css`
        enso-app {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width: 100%;
            height: fit-content;
            padding-top: 2rem;
            color: var(--primary-text);

            @media (min-width: 768px) {
                padding-top: 4rem;
            }
        }

        h3 {
            font-size: 1.5rem;
            text-align: center;
            padding-bottom: 1rem;
        }

        site-section {
            align-items: center;
        }
    `],
    template: html`
        ${ Nav.html({class:"constrained"}) }
        ${ header.html({class:"constrained"}) }
        ${ Example.html({class:"constrained"}) }
        ${ WhyEnso.html({class:"constrained"}) }
        ${ Overview.html({class:"constrained"}) }
        ${ Footer.html({class:"constrained"}) }
    `,
});
