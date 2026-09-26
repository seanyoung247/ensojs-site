
import { Enso, html, css, prop, attr } from 'ensojs';


import Reset from "@styles/reset.css?inline";


Enso.component('enso-func-sig', {
    watched: {
        name: attr('undefined'),
        params: prop([]),
        returns: attr('')
    },

    styles: [ css(Reset), css`
        :host {
            display: block;
        }
        .name {
            font-weight: bold;
        }
        .returns {
            margin-left: 0.5em;
        }
    `],

    template: html`
        <code>
            <span class="name">{{ this.name }}</span><!--
         --><span class="params">({{ this.params.join(', ') }})</span>
            <span *if="this.returns"
                class="returns"
            >
                &#x27F6; {{ this.returns }}
            </span>
        </code>
    `
});