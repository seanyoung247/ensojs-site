import Enso, { html, css, watches, lifecycle } from 'ensojs';
import Reset from './reset.css?inline';


Enso.component('tab-panel', {
    settings: { useShadow: false },
    styles: [css(Reset),css`
        tab-panel {
            --panel-border: darkgrey;
            --panel-bg: lightgrey;

            border-top: 2px solid var(--panel-border);
            background: var(--panel-bg);
            display: block;
            width: 100%;
            &[hidden] {
                display: none;
            }
        }
    `],
    template: html`<slot></slot>`,
    script: {
        _index: 0,
        get index() { return this._index; },
        set index(val) {
            this._index = val;
            this._setHost();
        },

        onMount: watches(function() {
            this._setHost();
        }, [lifecycle.mount]),

        get title() {
            return this.getAttribute('title') || '';
        },

        setSelected(val) {
            this.hidden = !val;
        },

        _setHost() {
            this.id = `panel-${this._index}`;
            this.setAttribute('role', 'tabpanel');
            this.setAttribute(
                'aria-labelledby', `tab-${this._index}`
            );
        }
    }
});
