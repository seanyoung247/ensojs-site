
import Enso, { css, html } from 'ensojs';
// Components
import "./components/nav.enso";
import "./components/icon.enso";
import "./components/header.enso";
import "./components/section.enso";
import "./components/codepane.enso";
import "./components/counter.enso";

// Styles
import Styles from "./app.css?inline";
import "./styles/main.css";


const counterCode = `
Enso.component("tiny-counter", &#123
    watched: &#123 value: attr(0) &#125;,
    styles: css\`:host&#123
        display:flex;
        justify-content:space-between;
    &#125;\`,
    template: html\`
        &lt;button @click="()=>@:value--"&gt;-&lt;/button&gt;
        &#123;&#123; @:value &#125;&#125;
        &lt;button @click="()=>@:value++"&gt;+&lt;/button&gt;
    \`
&#125;);`;


console.log(Enso.version);

Enso.component("enso-app", {
    styles: css(Styles),
    template: html`
        <enso-header class="section">
            <enso-nav>
                <a href="#why-enso">Why Enso?</a>
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
            <code-pane>
                <pre slot="code" class="code" data-lang="javascript">${ counterCode }</pre>
                <pre slot="code" class="code" data-lang="markup">&lt;tiny-counter value="5"&gt;&lt;/tiny-counter&gt;</pre>
                
                <div id="component-example" slot="live">
                    <tiny-counter value="5"></tiny-counter>
                </div>
            </code-pane>
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
    `
});
