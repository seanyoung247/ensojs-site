

import Enso, { html } from 'ensojs';
import { getStored, setStored } from "@components/themeSwitch.enso";

// Images
import ThemeIcons from "/theme_icons.svg";

export default Enso.component('enso-theme-switch', {
    expose: { getStored },
    template: html`
        <theme-switch
            .themes="[
                {name: 'light', icon:'${ThemeIcons}#light'}, 
                {name: 'dark', icon:'${ThemeIcons}#dark'},
                {name: 'auto', icon:'${ThemeIcons}#auto'}
            ]"
            :theme="{{ getStored('enso-theme', 'auto') }}"
            @theme-changed="this.onThemeChanged"
        ></theme-switch>
    `,
    script: {
        onThemeChanged(e) {
            const theme = e.detail.theme;
            document.body.setAttribute('data-theme', theme);
            setStored('enso-theme', theme);
        }
    }
});
