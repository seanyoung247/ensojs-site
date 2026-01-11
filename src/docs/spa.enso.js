
import Enso, { css, html } from 'ensojs';


function getSlug() {
    const path = location.pathname.replace(/\/$/, '');
    const slug = path.split('/').pop();
    return slug || 'intro';
}


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