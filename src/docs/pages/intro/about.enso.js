
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";


export default Enso.component('intro-about-page', {
    settings: { useShadow: false },
    styles: [css(Reset), css`
        ul.philosophy {
            padding-left: 1.5em;
        }
        ul.features {
            list-style: none;
            & > li > span {
                display: inline-block;
                width: 1.5em;
                text-align: center;
            }
        }
    `],
    template: html`
        <h1>About</h1>
        <p>Enso is a lightweight Web Component framework that simplifies development by removing boilerplate, providing intuitive declarative templates, and enabling clean component structure.</p>
        <p>It aims to be modern, minimal, and forward focused — no build step, no virtual DOM, and no legacy baggage.</p>

        <h2>Philosophy</h2>
        <ul class="philosophy">
            <li>Native-first — build on browser standards: Custom Elements, Shadow DOM, template literals.</li>
            <li>Minimal surface area — small API, small mental overhead.</li>
            <li>Declarative over imperative — components describe what they are, not how to wire them.</li>
            <li>No build step — just write HTML, CSS, and JS.</li>
            <li>Modern browser focus — no polyfills, no legacy module formats, no baggage.</li>
            <li>Zero boilerplate — refs, events, bindings, and reactivity should “just work.”</li>
        </ul>

        <h2>Features</h2>
        <ul class="features">
            <li><span>✨</span>Tiny, modern, reactive core
            <li><span>💡</span>Component-based architecture using native custom elements
            <li><span>🔍</span>Intuitive templates with @:value 
            <li><span>⚡</span>Reactive proxies with minimal overhead
            <li><span>🎨</span>Built-in helpers for attributes, props, styles, and templates
            <li><span>🧩</span>No build step required for usage
            <li><span>📦</span>ESM-first, no legacy module formats
            <li><span>🔌</span>Extensible template pipeline — define custom attribute handlers or parsing steps
        </ul>
    `
})
