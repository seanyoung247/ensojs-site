
import Enso, { html, css, attr, watches } from 'ensojs';
import { range } from 'ensojs/helpers';

import './arrowicons.enso';

import Reset from '../styles/reset.css?inline';


Enso.component('responsive-view', {
    watched: {
        show: attr(1, Number)
    },
    styles: [ css(Reset), css`
        :host {
            display: grid;
            grid-template-columns: 1.5rem 1.5rem auto 1.5rem 1.5rem;
            grid-template-rows: 1fr;
            align-items: center;

            & > button {
                position: relative;
                z-index: 2;
                pointer-events: auto;
                border: none;
                background: transparent;
                padding: 0.5rem;

                height: 100%;
                grid-column: 1 / 3;
                grid-row: 1;

                opacity: 0.25;
                transition: opacity 0.25s ease;

                &:hover {
                    opacity: 0.75;
                    & > arrow-icon { filter: drop-shadow(1px 1px 1px black); }
                }
                &[aria-label="next"] { 
                    grid-column: 4 / 6;
                    --direction: 180deg;
                }
            }
            & > ul {
                display: grid;
                list-style: none;
                position: relative;
                z-index: 0;
                pointer-events: none;
                grid-column: 2 / 5;
                grid-row: 1;
            }
        }
        ::slotted(*) {
            grid-area: 1 / 1;
            pointer-events: none;
            opacity: 0;
            top: 0;
            transition: opacity 0.75s ease;
        }
        ::slotted([data-show]) {
            pointer-events: all;
            opacity: 1;
        }
        arrow-icon { --color: var(--primary-text); }
    `], 
    template: html`
        <button aria-label="previous" @click="this.prev">
            <arrow-icon></arrow-icon>
        </button>
        <ul>
            <slot @slotchange="this.onSlotChange"></slot>
        </ul>
        <button aria-label="next" @click="this.next">
            <arrow-icon></arrow-icon>
        </button>
    `,
    script: {
        _items: [],
        _range: range(0),
        onSlotChange({ target: slot }) {
            this._items = slot.assignedElements({flatten:true});
            this._range = range(1, this._items.length + 1);
            this.watched.show = 1;
        },
        onShowChange: watches(function() {
            if (!this._items.length) return;
              
            const show = this._range.clamp(this.watched.show);
            if (show !== this.watched.show) {
                this.watched.show = show;
                return;
            }
            this._items.forEach((el,i) => {
                const active = (i === (show - 1));
                el.toggleAttribute('data-show', active);
            });
            this.dispatchEvent(new CustomEvent('showchange', {
                detail: { show },
                bubbles: true
            }));
        }, ['show']),
        prev() {
            this.watched.show = this._range.wrap(this.watched.show - 1);
        },
        next() {
            this.watched.show = this._range.wrap(this.watched.show + 1);
        }, 
    } 
});
