
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    html:
`const temp = "<p>Hello World</p>";
html(temp);

const world = "World";
html\`<p>Hello \${world}</p>\`;`
};

export default Enso.component('components-html-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-html">
                <h1>html()</h1>
                <enso-func-sig
                    name="html" 
                    .params="['strings', '...values']"
                    returns="EnsoTemplate"
                ></enso-func-sig>
                <p>
                    The <code class="callout">html()</code> function accepts a string
                    or template literal and creates an Enso template for use in a
                    component.
                </p>
                <enso-code-view
                    .code="examples.html"
                    language="javascript"
                ></enso-code-view>
                <p>
                    For more on Enso Templates, see
                    <a href="components-templates">
                        Templates
                    </a>
                </p>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "html", link: "#reference-html" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
