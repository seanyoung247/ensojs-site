
import Enso, { css, html } from 'ensojs';
import EnsoIcon from "/icon.svg?raw";


export default Enso.component("enso-icon", {
    styles: css`
        :host { display: block; }
        svg {
            width: 100%;
            height: 100%;
        }
    `,
    template: html(EnsoIcon),
});
