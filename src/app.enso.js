
import Enso, { css, html, attr } from 'ensojs';
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
import Reset from "@styles/reset.css?inline";
import "@styles/main.css";


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

Enso.component('enso-styles', {
    watched: { value: attr(0) },
    styles: [css(Reset), css`
        button {
            background: lightgrey;
            padding: 0.5rem;
            &:active:not([disabled]) {
                filter: brightness(2.0);
            }
        }
    `],
    template: html`
        <button 
            @click="()=>@:value++"
            :style="color: {{ @:value >= 9 ? 'red' : 'black' }};"
            :disabled="{{ @:value >= 9 }}">
            Value = {{ @:value }}
        </button>`
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
        ${ Overview }

        <footer>
            Built with Enso v.${Enso.version}
        </footer>
    `
});
