import Enso, { html, css, } from 'ensojs';
import Reset from '../styles/reset.css?inline';


Enso.component('arrow-icon', {
    styles: [css(Reset), css`
        path {
            stroke: var(--color, white);
            stroke-width: 10;
            stroke-linecap: round;
            transform-origin: center;
            fill: none;
            rotate: var(--direction);
        }
        :host([direction="left"]) { --direction: 0; }
        :host([direction="right"]) { --direction: 180deg; }
        :host([direction="down"]) { --direction: 270deg; }
        :host([direction="up"]) { --direction: 90deg; }
    `],
    template: html`
        <svg viewbox="1 1 100 100">
            <path d="M95 5 L5 50 L95 95" />
        </svg>
    `
});