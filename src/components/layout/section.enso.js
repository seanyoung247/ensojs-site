
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";


Enso.component('site-section', {
    styles: [css(Reset),
    css`
        :host {
            --direction: column;
            --align: center;
        }
        section {
            display: flex;
            flex-direction: var(--direction);
            align-items: var(--align);
            padding: var(--space-md);
            border-bottom: 2px solid var(--stroke-color);
        }
        ::slotted(*) {
            width: 100%;
        }
    `],
    template: html`
        <section>
            <slot></slot>
        </section>
    `
});
