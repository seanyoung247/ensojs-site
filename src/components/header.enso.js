
import Enso, { css, html } from 'ensojs';

import Reset from "../styles/reset.css?inline";

Enso.component("site-header", {
    styles: [css(Reset), 
        css`
            header {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
    `],
    template: html`
        <header role="banner">
            <slot></slot>
        </header>
    `
});
