
import Enso, { css, html } from 'ensojs';
import './navbtn.enso';

import Reset from "../styles/reset.css?inline";

Enso.component('enso-nav', {
    styles: [
        css(Reset),
        css`
        nav {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1000;
        }
        .spacer {
            height: 3em;
        }
    `],
    template: html`
        <nav>
            <nav-btn width="40" height="40"
                @nav-toggle="()=>console.log('nav changed')"
            ></nav-btn>
        </nav>
        <div class="spacer"></div>
    `,
});