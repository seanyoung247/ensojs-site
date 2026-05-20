
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";


export default Enso.component("test-page-2", {
    settings: { useShadow: false },
    styles: [css(Reset), css`
        test-page-2 {
            display: block;
            width: 100%;
            height: fit-content;
            padding: 2rem 1rem;
            box-sizing: border-box;
            color: var(--primary-text);
        }

        h1 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.125rem;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }
    `],
    template: html`
        <h1>Test Page 2</h1>
        <p>This is a test page!</p>
    `,
}); 

