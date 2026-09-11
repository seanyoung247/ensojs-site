
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


export default Enso.component('first-enso-component-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],
    template: html``,  
    script: {
        getHeadings() {
            return [
                { title: "A Basic Component", link: "#basic-component" },
                { title: "A Simple Counter", link: "#simple-counter" },
            ];
        },
        getSection() {
            return "docs-components";
        }
    }
});
