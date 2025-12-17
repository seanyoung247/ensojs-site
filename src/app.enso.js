
import Enso, { css, html, watches, lifecycle } from 'ensojs';
// Components
import "./components/nav.enso";
import "./components/icon.enso";
import "./components/header.enso";
import "./components/themeSwitch.enso";
// Sections
import Example from "./sections/example.enso"
import WhyEnso from "./sections/why.enso"

// Styles
import Styles from "./app.css?inline";
import "./styles/main.css";

// Images
import ThemeIcons from "/theme_icons.svg";


console.log(Enso.version);


Enso.component("enso-app", {
    settings: { useShadow: false },
    styles: css(Styles),
    template: html`
        <site-nav #ref="nav">
            <li class="nav-section">
                <h2>On this page</h2>
                <ul>
                    <li class="nav-item" @click="this.closeNav">
                        <a href="#why-enso">Why Enso?</a>
                    </li>
                    <li class="nav-item">
                        <a href="#overview">Overview</a>
                    </li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Explore</h2>
                <ul>
                    <li class="nav-item">Dummy Link</li>
                    <li class="nav-item">Dummy Link</li>
                    <li class="nav-item">Dummy Link</li>
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
        <site-header>
            <enso-icon></enso-icon>
            <h1>Enso</h1>
        </site-header>
        ${ Example }
        ${ WhyEnso }
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
