
import Enso, { css, html } from 'ensojs';
import Reset from "../styles/reset.css?inline";


Enso.component('enso-section', {
    styles: [css(Reset),
    css`
        section {
            padding: 1em;
            border-bottom: 2px solid var(--stroke-color);
        }
    `],
    template: html`
        <section>
            <slot></slot>
        </section>
    `
});
