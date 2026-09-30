import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    css:
``
};

export default Enso.component('components-css-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-css">
                <h1></h1>
                <p>
                
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
