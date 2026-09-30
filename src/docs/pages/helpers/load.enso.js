import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
``
};

export default Enso.component('helpers-load-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-">
                <h1>load()</h1>
                <enso-func-sig
                    name="load" 
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
                { title: "Load", link: "#helper-load" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
