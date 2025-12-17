
import Enso, { css, html, watches, lifecycle } from 'ensojs';
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
        <button 
            @click="()=>@:value--"
        >-</button>
        {{ @:value }}
        <button
            @click="()=>@:value++"
        >+</button>
    \`
});`
);
const counterHTML = escapeCode(`<tiny-counter value="5"></tiny-counter>`);


console.log(Enso.version);


Enso.component("enso-app", {
    settings: { useShadow: false },
    styles: css(Styles),
    template: html`
        <site-nav>
            <li class="nav-section">
                <h2>On this page</h2>
                <ul>
                    <li class="nav-item"><a href="#why-enso">Why Enso?</a></li>
                    <li class="nav-item"><a href="#overview">Overview</a></li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Explore</h2>
                <ul>
                    <li class="nav-item">Dummy Link</li>
                    <li class="nav-item">Dummy Link</li>
                    <li class="nav-item">Dummy Link</li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Settings</h2>
                <ul>
                    <li class="nav-item theme">
                        <span>Theme: </span>
                        <theme-switch #ref="themer"></theme-switch>
                    </li>
                </ul>
            </li>
        </site-nav>
        <site-header>
            <enso-icon></enso-icon>
            <h1>Enso</h1>
        </site-header>
        <site-section>
            <h2 id="tag-line">
                <span>Minimal</span>
                <span>Fast</span>
                <span>Reactive</span>
            </h2>
            <p class="body-text">
                A native-first microframework for building declarative Web Components.
            </p>
            <div class="code-example">
                <code-pane lang="js" enso:ignore>
                    ${counterCode}
                </code-pane>
                <div class="live-example">
                    <code-pane lang="html" enso:ignore>
                        ${counterHTML}
                    </code-pane>
                    <tiny-counter value="5"></tiny-counter>
                </div>
            </div>
        </site-section>
        <site-section id="why-enso">
            <h3>Why Enso?</h3>

            <ul class="why-enso-grid">
                <li class="why-card">
                    <h4>Minimal</h4>
                    <p class="lede">~7kb gzipped.</p>
                    <p>
                        Write components directly, no required build step,
                        no compilation pipeline, no framework ceremony.
                    </p>
                </li>

                <li class="why-card">
                    <h4>Fast</h4>
                    <p class="lede">
                        Updates are scheduled efficiently and applied directly to the DOM.
                    </p>
                    <p>
                        No virtual DOM, no diffing abstractions,
                        just precise updates, when they're needed.
                    </p>
                </li>

                <li class="why-card">
                    <h4>Reactive</h4>
                    <p class="lede">
                        Reactive state updates templates automatically.
                    </p>
                    <p>
                        Data drives rendering, rendering drives lifecycle,
                        with predictable timing.
                    </p>
                </li>

                <li class="why-card">
                    <h4>Native</h4>
                    <p class="lede">
                        Built on Web Components and the platform itself.
                    </p>
                    <p>
                        Encapsulated styles, real custom elements,
                        no runtime illusion.
                    </p>
                </li>
            </ul>
        </site-section>

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
