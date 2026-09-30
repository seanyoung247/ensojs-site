
import { Enso, css, html } from 'ensojs';
import { comp } from 'ensojs/helpers';

// Sections
import NavComp from "./sections/nav.enso";
import HeaderComp from "./sections/header.enso";
import ExampleComp from "./sections/example.enso";
import WhyEnsoComp from "./sections/why.enso";
import OverviewComp from "./sections/overview.enso";
import FooterComp from "./sections/footer.enso";

const Nav = comp(NavComp);
const Header = comp(HeaderComp);
const Example = comp(ExampleComp);
const WhyEnso = comp(WhyEnsoComp);
const Overview = comp(OverviewComp);
const Footer = comp(FooterComp);

// Styles
import CodeStyles from "@styles/code.css?inline";
import Reactive from '@styles/reactive.css?inline';
import "@styles/main.css";
import { docsUrl } from './urls';


Enso.enableDiagnostics();
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
            scroll-margin-top: 80px;
        }
    `],
    template: html`
        ${ Nav.html({
            class: "constrained",
            '.headings': `[
                { title: 'Why Enso?', link: '#why-enso' },
                { title: 'Overview', link: '#overview' }
            ]`,
            '.pages': `[
                { title: 'Docs', link: '${docsUrl}' },
                { title: 'GitHub', link: 'https://github.com/seanyoung247/ensoJS' }
            ]`
        }) }
        ${ Header.html({class:"constrained"}) }
        ${ Example.html({class:"constrained"}) }
        ${ WhyEnso.html({class:"constrained"}) }
        ${ Overview.html({class:"constrained"}) }
        ${ Footer.html({class:"constrained"}) }
    `,
});
