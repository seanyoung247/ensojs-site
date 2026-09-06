
import Enso, { css, html } from 'ensojs';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


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
    styles: [css(Reset), css(DocStyles), css`
        ul.philosophy {
            padding-left: 1.5em;
        }
        ul.features {
            padding-left: 1.5em;
            & > li {
                padding-left: 0.25em;
                &::marker {
                    content: attr(data-icon);
                }
            }
        }
    `],
    template: html`
        <section>
            <h1 id="about">About</h1>
            <p>Enso is a lightweight Web Component framework that simplifies development by removing boilerplate, providing intuitive declarative templates, and enabling clean component structure.</p>
            <p>It aims to be modern, minimal, and forward focused: no build step, no virtual DOM, and no legacy baggage.</p>
        </section>

        <section>
            <h2 id="philosophy">Philosophy</h2>
            <ul class="philosophy">
                <li>Native-first. Build on browser standards: Custom Elements, Shadow DOM, template literals.</li>
                <li>Minimal surface area. Small API, small mental overhead.</li>
                <li>Declarative over imperative. Components describe what they are, not how to wire them.</li>
                <li>No build step. Just write HTML, CSS, and JS.</li>
                <li>Modern browser focus. No polyfills, no legacy module formats, no baggage.</li>
                <li>Zero boilerplate. Refs, events, bindings, and reactivity should “just work.”</li>
            </ul>
        </section>
        
        <section>
            <h2 id="features">Features</h2>
            <ul class="features">
                <li data-icon="✨">Tiny, modern, reactive core
                <li data-icon="💡">Component-based architecture using native custom elements
                <li data-icon="🔍">Intuitive templates with @:value 
                <li data-icon="⚡">Reactive proxies with minimal overhead
                <li data-icon="🎨">Built-in helpers for attributes, props, styles, and templates
                <li data-icon="🧩">No build step required for usage
                <li data-icon="📦">ESM-first, no legacy module formats
                <li data-icon="🔌">Extensible template pipeline — define custom attribute handlers or parsing steps
            </ul>
        </section>

        <section>
            <h2 id="history">History</h2>
            <p>Enso began life as a small utility class intended to reduce the repetitive boilerplate associated with writing Web Components. You simply extended from it, and added your own code.</p>
            <code class="code-pane">
                ${webComponentCode}
            </code>
            <p>
                As real-world components grew, new sources of repetitive boilerplate appeared. For instance, querying the DOM for child elements. To solve this, a quick and simple processing
                step was added to the template parsing, to extract #ref="myRef" attributes, and insert them as fields on the component, for simple access via the class: this.myRef. But it soon
                became apparent that there was still a great deal of boilerplate, attaching events and the @event="" attribute evolved to replace calls to this.myRef.addEventListener(...). 
                As more features were added, Enso started to form.
            </p>
            <p class="spaced">From:</p>
            <code class="code-pane">
                ${ensoClassCode}
            </code>
            <p class="spaced">To the current declarative:</p>
            <code class="code-pane">
                ${ensoComponentCode}
            </code>
            <p class="spaced">Enso today continues that original spirit: remove friction, embrace clarity, let components express themselves naturally.</p>
        </section>
    
    `,
    script: {
        getHeadings() {
            return [
                { title: "About", link: "#about" },
                { title: "Philosophy", link: "#philosophy" },
                { title: "Features", link: "#features" },
                { title: "History", link: "#history" }
            ];
        },
        getSection() {
            return "docs-getting-started";
        }
    }
})
