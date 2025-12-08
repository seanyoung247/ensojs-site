
import Enso, { css, html } from 'ensojs';
import './navbtn.enso';

import Reset from "../styles/reset.css?inline";

Enso.component('enso-nav', {
    styles: [
        css(Reset),
    ],
    template: html`
        <nav>
            <nav-btn></nav-btn>
        </nav>
    `,
});