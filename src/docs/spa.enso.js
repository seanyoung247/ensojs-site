
import Enso, { css, html } from 'ensojs';


Enso.component("enso-spa", {
    settings: { useShadow: false },
    styles: css`
        enso-spa {
            display: block;
            width: 100%;
            height: 100%;
        }
    `,
    template: html`
        <slot></slot>
        <main id="outlet"></main>
    `
});