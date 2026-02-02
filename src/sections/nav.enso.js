
import Enso, { css, html } from 'ensojs';
import "@components/nav/nav.enso";
import "@components/nav/themes.enso";

// Styles
import BrushStroke from "../styles/brush.css?inline";


export default Enso.component('nav-section', {
    settings: { useShadow: false },
    styles: [css(BrushStroke), css`
        site-nav {
            position: fixed;
            z-index: 99;
            top: 0;
            width: 100%
        }
        svg-icons {
            display: inline-block;
            width: 1em;
            height: 1em;
            --fill: var(--primary-text);
        }
        .nav-section {
            color: var(--primary-text);
            min-width: 75%;
            backdrop-filter: blur(4px);
            border-radius: var(--space-md);
            padding: var(--space-md);
            margin: var(--space-lg) 0;
            &:first-of-type {
                margin-top: 3rem;
            }
            &:last-of-type {
                max-width: 300px;
                min-width: 0;
                width: 75%;
                
                margin-top: auto;
                margin-bottom: 3rem;

                opacity: 0.9;
                background: var(--texture-overlay);
            }
            & h2 {
                font-size: 0.75rem;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                margin-bottom: 0.75rem;
                text-align: center;
            }
            & ul {
                list-style: none;
            }
        }

        .nav-item {
            color: var(--primary-text);
            padding: 0.75rem var(--space-md);
            position: relative;
            & a {
                display: block;
                text-decoration: none;
                font-weight: bold;
                color: inherit;
                padding: var(--space-md);
            }
            &.theme {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            & + & {
                border-top: 1px solid var(--stroke-color);
            }
        }
        @media (min-width: 768px) {
            site-nav {
                background: var(--code-back)
                    linear-gradient(var(--muted-text)) no-repeat bottom/100% 1px;
            }
            .nav-section {
                min-width: 0;
                width: auto;
                margin: 0;
                padding: 0;

                backdrop-filter: none;
                border-radius: 0;
                background: none;

                &:first-of-type {
                    margin-top: 0;
                }
                &:last-of-type {
                    width: auto;
                    margin-top: 0;
                    margin-bottom: 0;
                    padding: var(--space-xs) var(--space-md);
                    border-radius: 999px;
                }
                & > ul {
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    gap: var(--space-md);
                }
            }

            .nav-section h2 {
                display: none;
            }

            .nav-item {
                padding: 0;
                & a { padding: 0; }
                & + & { border-top: none; }
                &.theme { gap: var(--space-md); }
            }
        }
    `],
    template: html`
        <site-nav #ref="nav">
            <li class="nav-section">
                <h2>On this page</h2>
                <ul>
                    <li class="nav-item brush hover" @click="this.closeNav">
                        <a href="#why-enso">Why Enso?</a>
                    </li>
                    <li class="nav-item brush hover" @click="this.closeNav">
                        <a href="#overview">Overview</a>
                    </li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Explore</h2>
                <ul>
                    <li class="nav-item brush hover">
                        <a href="/docs/">Docs</a>
                    </li>
                    <li class="nav-item brush hover">
                        <a href="https://github.com/seanyoung247/ensoJS">
                            Github
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Settings</h2>
                <ul>
                    <li class="nav-item theme">
                        <span>Theme: </span>
                        <enso-theme-switch #ref="themer"></enso-theme-switch>
                    </li>
                </ul>
            </li>
        </site-nav>
    `,
    script: {
        closeNav() {
            if (window.innerWidth < 768) {
                this.refs.nav.close();
            }
        }
    }   
});
