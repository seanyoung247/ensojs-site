import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
``
};

export default Enso.component('helpers--page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-range">
                <h1>range()</h1>
                <enso-func-sig
                    name="range" 
                    .params="[]"
                    returns=""
                ></enso-func-sig>
                <p class="spaced">

                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>

            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Range", link: "#helper-range" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
