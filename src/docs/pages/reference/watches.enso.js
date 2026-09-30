import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {

}

export default Enso.component('components-watches-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="">
                <h1></h1>
                <p>
                
                </p>
                <enso-code-view
                    .code=""
                    language="javascript"
                ></enso-code-view>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "", link: "#" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
