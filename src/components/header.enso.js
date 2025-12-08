
import Enso, { css, html } from 'ensojs';

import Reset from "../styles/reset.css?inline";

Enso.component("enso-header", {
    styles: [css(Reset), 
        css`
            header {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    `],
    template: html`
        <header>
            <slot></slot>
        </header>
    `
});
