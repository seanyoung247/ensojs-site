
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";


Enso.component('site-section', {
    styles: [css(Reset),
    css`
        :host {
            display: block;
            height: var(--height, auto);
            --direction: column;
            --align: center;
        }
        section {
            display: flex;
            flex-direction: var(--direction);
            align-items: var(--align);
            padding: var(--space-md);
            border-bottom: 2px solid var(--stroke-color);
            height: 100%;
            width: 100%;
            max-width: var(--max-content, 100%);
            margin-inline: auto;
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
