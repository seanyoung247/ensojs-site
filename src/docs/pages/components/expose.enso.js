
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    expose:
`const message = "Hello World";
const formatMsg = msg => msg.toUpperCase();

Enso.component('enso-expose', {
    expose: { message, formatMsg },
    template: html\`
        {{ formatMsg(message) }}
    \`
});`
};


export default Enso.component('components-expose-page', {
    settings: { useShadow: false },
    expose: { examples },

    styles: [css(Reset), css(DocStyles)],
  
    template: html`
        <div class="document">
            <section id="component-expose">
                <h1>Expose</h1>
                <p>
                    The <code class="callout">expose</code> field makes JavaScript values
                    and functions from outside the component available to its templates. 
                    Unlike watched properties, exposed values are not reactive, so changing
                    them will not trigger a component update.
                </p>
                <enso-code-view
                    .code="examples.expose"
                    language="javascript"
                ></enso-code-view>
            </section>
        </div>
    `,  
  
    script: {
        getHeadings() {
            return [
                { title: "Expose", link: "#component-expose" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
