
import Enso, { css, html } from 'ensojs';
import Reset from "@styles/reset.css?inline";


Enso.component("docs-intro-page", {
    settings: { useShadow: false },
    styles: [css(Reset), css`
        docs-intro-page {
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
        <h1>Welcome to EnsoJS Documentation</h1>
        <p>Your journey to mastering EnsoJS starts here. Explore guides, tutorials, and API references to build amazing web applications with EnsoJS.</p>
    `,
}); 