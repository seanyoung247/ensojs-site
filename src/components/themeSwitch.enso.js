
import Enso, { prop, css, html, attr, watches, lifecycle } from 'ensojs';

import Reset from "../styles/reset.css?inline";
import Tooltips from "../styles/tooltip.css?inline";


const themeIndex = (themes, theme) => {
    const idx = themes.findIndex(t => t.name === theme);
    return idx === -1 ? 0 : idx;
};

Enso.component('theme-switch', {
    watched: {
        themes: prop([], true),
        theme: attr(localStorage.getItem('enso-theme')),
    },
    expose: { themeIndex },
    styles: [css(Reset), css(Tooltips), css`
        :host {
            display: inline-block;
            --size: 24px;
            background: var(--muted-text);
            border-radius: calc(var(--size) / 2);
        }
        fieldset {
            display: flex;
            position: relative;
            width: fit-content;
            border-radius: calc(var(--size) / 2);
            border: 1px solid var(--primary-text);
        }
        label {
            display: block;
            text-align: center;
            cursor: pointer;
            width: var(--size);
            height: var(--size);
            user-select: none;
            input {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
            }
        }
        #toggle {
            position: absolute;
            top: 2px; left: calc(2px + ( var(--size) * var(--i, 1)));
            width: calc(var(--size) - 4px); height: calc(var(--size) - 4px);
            background: var(--primary-text);
            box-shadow: 0 0 2px #000000AA;
            border-radius: calc(var(--size) / 2);
            transition: none;
        }
        #toggle[data-animate] {
            transition: left 0.4s cubic-bezier(0.25, 1.4, 0.35, 1);
        }
        svg {
            width: calc(var(--size) - 8px);
            height: calc(var(--size) - 8px);
            stroke: var(--contrast-color);
            stroke-width: 1.5px;
            fill: var(--contrast-color);
            margin: 4px;
            pointer-events: none;
        }
        label:hover svg {
            filter: drop-shadow(0 0 1px var(--contrast-color));
        }
    `],
    template: html`
        <fieldset>
            <span id="toggle" #ref="toggle" 
                :style="--i:{{ themeIndex(@:themes, @:theme) }}">
            </span>
            <enso-fragment *for="theme of @:themes">    
                <label :for="{{ theme.name }}" :data-tooltip="{{ theme.name }} theme">
                    <input type="radio" name="theme"
                        :id="{{ theme.name }}"
                        :value="{{ theme.name }}"
                        @change="()=>this.onChange(theme.name)"
                        :checked="{{ theme.name === @:theme }}"
                    />
                    <svg *if="theme.icon" viewBox="0 0 24 24">
                        <use :href="{{ theme.icon }}"></use>
                    </svg>
                </label>
            </enso-fragment>     
        </fieldset>
    `,
    script: {
        onThemesChange: watches(function () {
            this.applyTheme(this.watched.theme);
        }, ['themes']),

        applyTheme(theme) {
            const themes = this.watched.themes;
            // normalise
            const valid =
                themes.some(t => t.name === theme)
                    ? theme
                    : themes[0]?.name ?? null;
            if (!valid) return;
            
            // update state if needed
            if (this.watched.theme !== valid) {
                this.watched.theme = valid;
            }

            // side effects
            document.body.setAttribute('data-theme', valid);
            localStorage.setItem('enso-theme', valid);

            this.dispatchEvent(
                new CustomEvent('theme-changed', {
                    detail: { theme: valid }
                })
            );
        },

        onChange(theme) {
            this.refs.toggle.setAttribute('data-animate', true);
            this.applyTheme(theme);
        }
    }
});
