
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    html:
`const temp = "<p>Hello World</p>";
html(temp);

html\`<p>Hello World</p>\`;`
};

export default Enso.component('components-styles-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-html">
                <h1>html()</h1>
                <p>
                    The <code class="callout">html()</code> function accepts a string
                    or template literal and creates an Enso template for ingestion by
                    a component.
                </p>
                <enso-code-view
                    .code="examples.html"
                    language="javascript"
                ></enso-code-view>
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
