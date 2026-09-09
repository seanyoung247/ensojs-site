
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";


export default Enso.component('first-enso-component-page', {
    settings: { useShadow: false },
    styles: [css(Reset), css`
    
    `],
    template: html`
    `,
    
    script: {
        getHeadings() {
            return [];
        },
        getSection() {
            return "docs-getting-started";
        }
    }
})
