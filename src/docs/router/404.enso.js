
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";

export default Enso.component('enso-404', {
    styles: [css(Reset), css`

    `],
    template: html`
        <h1>404</h1>
        <p>Page not found.</p>
    `
});
