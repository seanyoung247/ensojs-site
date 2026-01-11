
import Enso, { css, html, attr } from 'ensojs';


Enso.component('svg-icons', {
    watched: {
        file: attr(''),
        svgid: attr('')
    },
    styles: css`
        :host { display: block; }
        svg {
            width: 100%;
            height: 100%;
        }
    `,
    template: html`
        <svg>
            <use :href="{{ @:file }}#{{ @:svgid }}"></use>
        </svg>
    `
});