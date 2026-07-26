
import Enso, { css, html } from 'ensojs';

import Reset from "@styles/reset.css?inline";


export const webComponentCode = `
    <span class="code-line">
        <span class="token keyword">class</span>
        <span class="token property"> MyComponent </span>
        <span class="token keyword">extends</span>
        <span class="token property"> WebComponent </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token keyword">static</span>
        <span class="token function"> get</span>
        <span class="token property"> tagName</span>
        <span class="token punctuation">() {</span>
        <span class="token keyword"> return</span>
        <span class="token string"> 'my-component'</span>
        <span class="token punctuation">; }</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token keyword">static</span>
        <span class="token function"> get</span>
        <span class="token property"> attributes</span>
        <span class="token punctuation">() {</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token keyword">return</span>
        <span class="token punctuation"> {</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token string">'value'</span>
        <span class="token punctuation">: {</span>
        <span class="token property">type</span>
        <span class="token punctuation">: </span>
        <span class="token property">Number</span>
        <span class="token punctuation">, </span>
        <span class="token property">default</span>
        <span class="token punctuation">: </span>
        <span class="token number">0</span>
        <span class="token punctuation">}</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">};</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token punctuation">}</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token comment">// component logic</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">}</span>
    </span>
`;

export const ensoClassCode = `
    <span class="code-line">
        <span class="token keyword">class</span>
        <span class="token property"> MyComponent </span>
        <span class="token keyword">extends</span>
        <span class="token property"> Enso </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token keyword">static</span>
        <span class="token function"> get</span>
        <span class="token property"> tagName</span>
        <span class="token punctuation">() {</span>
        <span class="token keyword"> return</span>
        <span class="token string"> 'my-component'</span>
        <span class="token punctuation">; }</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token comment">// component logic</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">}</span>
    </span>
`;

export const ensoComponentCode = `
    <span class="code-line">
        <span class="token property">Enso</span>
        <span class="token punctuation">.</span>
        <span class="token function">component</span>
        <span class="token punctuation">(</span>
        <span class="token string">'my-component'</span>
        <span class="token punctuation">, {</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token comment">// Component declaration</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">});</span>
    </span>
`;


export default Enso.component('intro-about-page', {
    settings: { useShadow: false },
    styles: [css(Reset), css`
        h1, h2 {
            padding: 0.5em 0;
        }
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
        code.code-pane {
            padding: 0.1em;
        }
    `],
    template: html`
        <h1 id="about">About</h1>
        <p>Enso is a lightweight Web Component framework that simplifies development by removing boilerplate, providing intuitive declarative templates, and enabling clean component structure.</p>
        <p>It aims to be modern, minimal, and forward focused — no build step, no virtual DOM, and no legacy baggage.</p>

        <h2 id="philosophy">Philosophy</h2>
        <ul class="philosophy">
            <li>Native-first — build on browser standards: Custom Elements, Shadow DOM, template literals.</li>
            <li>Minimal surface area — small API, small mental overhead.</li>
            <li>Declarative over imperative — components describe what they are, not how to wire them.</li>
            <li>No build step — just write HTML, CSS, and JS.</li>
            <li>Modern browser focus — no polyfills, no legacy module formats, no baggage.</li>
            <li>Zero boilerplate — refs, events, bindings, and reactivity should “just work.”</li>
        </ul>

        <h2 id="features">Features</h2>
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

        <h2 id="history">History</h2>
        <p>Enso began life as a small utility class intended to reduce the repetitive boilerplate associated with writing Web Components. You simply extended from it, and added your own code.</p>
        <code class="code-pane">
            ${webComponentCode}
        </code>
        <p>
            As real-world components grew, new sources of repetitive boilerplate appeared. For instance, querying the DOM for child elements. To solve this, a quick and simple processing
            step was added to the template parsing, to extract #ref="myRef" attributes, and insert them as fields on the component, for simple access via the class: this.myRef. But it soon
            became apparent that there was still a great deal of boilerplate, attaching events and the @<event>="" attribute evolved to replace calls to this.myRef.addEventListener(...). 
            As more features were added, Enso started to form.
        </p>
        <br/>
        <p>From:</p>
        <code class="code-pane">
            ${ensoClassCode}
        </code>
        <p>To the current declarative:</p>
        <code class="code-pane">
            ${ensoComponentCode}
        </code>
        <p>Enso today continues that original spirit: remove friction, embrace clarity, let components express themselves naturally.</p>
    `,
    script: {
        getHeadings() {
            return [
                { title: "About", link: "#about" },
                { title: "Philosophy", link: "#philosophy" },
                { title: "Features", link: "#features" },
                { title: "History", link: "#history" }
            ]
        }
    }
})
