

import Enso, { html, watches, lifecycle } from 'ensojs';
import "@components/themeSwitch.enso";
// Images
import ThemeIcons from "/theme_icons.svg";

export default Enso.component('enso-theme-switch', {
    template: html`
        <theme-switch #ref="themer"></theme-switch>
    `,
    script: {
        setup: watches(function() {
            this.refs.themer.watched.themes = [
                {name: 'light', icon:`${ThemeIcons}#light`}, 
                {name: 'dark', icon:`${ThemeIcons}#dark`},
                {name: 'auto', icon:`${ThemeIcons}#auto`}
            ];
        }, [lifecycle.mount]),
    }
});
