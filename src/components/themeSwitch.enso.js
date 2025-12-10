
import Enso, { prop, css, html, attr, watches, lifecycle } from 'ensojs';

import Reset from "../styles/reset.css?inline";
import Tooltips from "../styles/tooltip.css?inline";


Enso.component('theme-switch', {
    watched: {
        themes: prop(['none'], true),
        theme: attr('none'),
        auto: attr(false, Boolean)
    },
    styles: [css(Reset), css(Tooltips), css`
        :host {
            display: block;
            --size: 24px;
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
            position: relative;
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
            top: 3px; left: calc(3px + ( var(--size) * var(--i, 1)));
            width: calc(var(--size) - 6px); height: calc(var(--size) - 6px);
            background: var(--primary-text);
            border-radius: calc(var(--size) / 2);
            z-index: -1;
        
            transition: left 0.4s cubic-bezier(0.25, 1.4, 0.35, 1);*/
        }
        svg {
            width: calc(var(--size) - 8px);
            height: calc(var(--size) - 8px);
            stroke: white;
            stroke-width: 1.5px;
            margin: 4px;
            mix-blend-mode: exclusion;
            pointer-events: none;
        }
        label:hover svg {
            filter: drop-shadow(0 0 1px white);
        }
    `],
    template: html`
        <fieldset>
            <span id="toggle" :style="--i:{{ @:themes.indexOf(@:theme) }}"></span>
            <enso-fragment *for="theme of @:themes">    
                <label :for="{{ theme }}" :data-tooltip="{{ theme }} theme">
                    <input type="radio" name="theme"
                        :id="{{ theme }}"
                        :value="{{ theme }}"
                        @change="()=>this.setTheme(theme)"
                        :checked="{{ theme === @:theme }}"
                    />
                    <svg viewBox="0 0 24 24">
                        <use :href="{{ @:icons }}#{{ theme }}"></use>
                    </svg>
                </label>
            </enso-fragment>
        </fieldset>
    `,
    script: {

        onMount: watches(function() {
            const saved = localStorage.getItem('enso-theme');
            if (saved && this.watched.themes.includes(saved)) {
                this.setTheme(saved);
            }
        }, [lifecycle.mount]),

        setTheme(theme) {
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('enso-theme', theme);

            this.watched.theme = theme;

            this.dispatchEvent(
                new CustomEvent('theme-changed', { detail: { theme } })
            );
        },

    }
});
