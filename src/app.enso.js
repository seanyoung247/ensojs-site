
import Enso, { css, html, prop, watches, lifecycle } from 'ensojs';
// Components
import "./components/nav.enso";
import "./components/icon.enso";
import "./components/header.enso";
import "./components/section.enso";
import { escapeCode } from "./components/codepane.enso";
import "./components/counter.enso";
import "./components/themeSwitch.enso";

// Styles
import Styles from "./app.css?inline";
import "./styles/main.css";

// Images
import ThemeIcons from "/theme_icons.svg";


const counterCode = escapeCode(`
Enso.component("tiny-counter", {
    watched: { value: attr(0) },
    styles: css\`:host {
        display:flex;
        justify-content:space-between;
    }\`,
    template: html\`
        <button @click="()=>@:value--">-</button>
        {{ @:value }}
        <button @click="()=>@:value++">+</button>
    \`
});`
);
const counterHTML = escapeCode(`<tiny-counter value="5"></tiny-counter>`);


console.log(Enso.version);


Enso.component("enso-app", {
    settings: { useShadow: false },
    watched: { counter: prop(5) },
    styles: css(Styles),
    template: html`
        <enso-header class="section">
            <enso-nav>
                <li class="nav-item"><a href="#why-enso">Why Enso?</a></li>
                <li class="nav-item">Dummy Link</li>
                <li class="nav-item">Dummy Link</li>
                <li class="nav-item">Dummy Link</li>
                <li class="nav-item">Dummy Link</li>
                <li class="nav-item">
                    <span>Theme: </span>
                    <theme-switch #ref="themer"></theme-switch>
                </li>
            </enso-nav>
            <enso-icon></enso-icon>
            <h1>Enso</h1>
        </enso-header>
        <enso-section>
            <h2 id="tag-line">
                <span>Minimal</span>
                <span>Fast</span>
                <span>Reactive</span>
            </h2>
            <p class="body-text">
                A micro framework for writing declarative
                components with modern simplicity.
            </p>
            <code-pane lang="js" enso:ignore>
               ${counterCode}
            </code-pane>
            <div id="live-example">
                <code-pane lang="html" enso:ignore>
                    ${counterHTML}
                </code-pane>
                <tiny-counter value="5"></tiny-counter>
            </div>
        </enso-section>
        <enso-section id="why-enso">
            <h3>Why Enso?</h3>
            <ul>
                <li>Built to disappear</li>
                <li>Write components the way they should feel</li>
                <li>No build required</li>
                <li>Small, 7kb gzipped</li>
                <li>Reactive data binding</li>
                <li>Truly encapsulated styles and markup</li>
            </ul>
        </enso-section>
    `,
    script: { 
        setup: watches(function() {
            this.refs.themer.watched.themes = [
                {name: 'light', icon:`${ThemeIcons}#light`}, 
                {name: 'dark', icon:`${ThemeIcons}#dark`},
                {name: 'auto', icon:`${ThemeIcons}#auto`}
            ];
        }, [lifecycle.mount])
    }
});
