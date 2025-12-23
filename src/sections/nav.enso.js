
import Enso, { css, html, watches, lifecycle } from 'ensojs';
import "../components/nav.enso";
import "../components/themeSwitch.enso";
// Styles
import BrushStroke from "../styles/brush.css?inline";
// Images
import ThemeIcons from "/theme_icons.svg";


export default Enso.component('nav-section', {
    settings: { useShadow: false },
    styles: [css(BrushStroke), css`
        site-nav {
            position: fixed;
            z-index: 99;
            top: 0;
            max-width: 1920px;
        }

        .nav-section {
            color: var(--primary-text);
            min-width: 75%;
            backdrop-filter: blur(4px);
            border-radius: 0.5rem;
            padding: 0.5rem;
            margin: 1.5rem 0;
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
            padding: 0.75rem 0.5rem;
            position: relative;
            & a {
                display: block;
                text-decoration: none;
                font-weight: bold;
                color: inherit;
                padding: 0.5em ;
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
    `],
    template: html`
        <site-nav #ref="nav">
            <li class="nav-section">
                <h2>On this page</h2>
                <ul>
                    <li class="nav-item brush" @click="this.closeNav">
                        <a href="#why-enso">Why Enso?</a>
                    </li>
                    <li class="nav-item brush" @click="this.closeNav">
                        <a href="#overview">Overview</a>
                    </li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Explore</h2>
                <ul>
                    <li class="nav-item brush">Dummy Link</li>
                    <li class="nav-item brush">Dummy Link</li>
                    <li class="nav-item brush">Dummy Link</li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Settings</h2>
                <ul>
                    <li class="nav-item theme">
                        <span>Theme: </span>
                        <theme-switch #ref="themer"></theme-switch>
                    </li>
                </ul>
            </li>
        </site-nav>
    `,
    script: { 
        setup: watches(function() {
            this.refs.themer.watched.themes = [
                {name: 'light', icon:`${ThemeIcons}#light`}, 
                {name: 'dark', icon:`${ThemeIcons}#dark`},
                {name: 'auto', icon:`${ThemeIcons}#auto`}
            ];
        }, [lifecycle.mount]),
        closeNav() {
            this.refs.nav.close();
        }
    }   
});
