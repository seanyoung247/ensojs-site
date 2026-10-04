import { Enso, css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    css:
`const style = "div { color: red }";
css(style);

const color = "red";
css\`div { color: \${color} }\`;`
};


export default Enso.component('components-css-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-css">
                <h1>css()</h1>
                <enso-func-sig
                    name="css" 
                    .params="['strings', '...values']"
                    returns="CSSStyleSheet"
                ></enso-func-sig>
                <p class="spaced">
                    The <code class="callout">css()</code> function accepts a string
                    or template literal and creates a 
                    <code class="callout">CSSStyleSheet</code> that can be adopted by
                    a component.
                </p>
                <enso-code-view
                    .code="examples.css"
                    language="javascript"
                ></enso-code-view>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "CSS", link: "#reference-css" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
