
import Enso, { css, html } from 'ensojs';
import Reset from "../styles/reset.css?inline";


Enso.component('code-pane', {
    styles: [css(Reset),
    css`
        slot[name="code"] {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 0.5em;
            background: var(--code-back);
        }
    `],
    template: html`
        <slot name="code"></slot>
        <slot name="live"></slot>
    `
});