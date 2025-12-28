
import Enso, { css, html, attr } from 'ensojs';
// Components
import "./components/icons/icon.enso";
import "./components/layout/header.enso";
import "./components/annotatedCode.enso";
import "./components/tabs/";

// Sections
import Nav from "./sections/nav.enso"
import Example from "./sections/example.enso"
import WhyEnso from "./sections/why.enso"

// Styles
import Styles from "./app.css?inline";
import CodeStyles from "@styles/code.css?inline";
import "@styles/main.css";

import { templateEx } from './examplecode';


Enso.component ('enso-templates', {
    watched: { name: attr('World') },
    template:  html`
        <div #ref="output">Hello {{ @:name }}</div>
        <input type = "text"
            :value="{{ @:name }}" 
            @change = "(e)=>@:name = e.target.value"
        /> 
    `
}); 

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

        <tabbed-view tab-width="equal">
            <tab-panel title="Templates">
                <annotated-code>
                    ${ templateEx }
                </annotated-code>
            </tab-panel>
            <tab-panel title="test">
                Hello World
            </tab-panel>
            <tab-panel title="test2">
                Hello World
            </tab-panel>
        </tabbed-view>

        <footer>
            Built with Enso v.${Enso.version}
        </footer>
    `
});
