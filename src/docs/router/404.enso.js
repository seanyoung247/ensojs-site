
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";

export default Enso.component('enso-404', {
    styles: [css(Reset), css`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 {
            font-size: 15vw;
        }
        p {
            font-size: 4vw;
        }
    `],
    template: html`
        <h1>404</h1>
        <p>Page not found.</p>
    `
});
