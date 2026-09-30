
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


export default Enso.component('components-lifecycle-page', {
    settings: { useShadow: false },
    styles: [css(Reset), css(DocStyles)],
    template: html``,  
    script: {
        getHeadings() {
            return [
                { title: "", link: "#" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
