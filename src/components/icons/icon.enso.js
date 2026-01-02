
import Enso, { css, html } from 'ensojs';
import EnsoUrl from "/icon.svg";


export default Enso.component("enso-icon", {
    styles: css`
        :host { display: block; }
        svg {
            width: 100%;
            height: 100%;
        }
    `,
    template: html`
        <svg viewBox="0 0 129.64582 129.64585">
            <use href="${EnsoUrl}#enso"></use>
        </svg>
    `
});
