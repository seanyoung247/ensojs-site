
import Enso, { html, css } from 'ensojs';

import './icons/arrow.enso';

import Reset from '../styles/reset.css?inline';


Enso.component('stack-list-view', {
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
                padding: var(--space-md);

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
                margin: var(--space-md);
                z-index: 0;
                pointer-events: none;
                grid-column: 2 / 5;
                grid-row: 1;
            }
            & ::slotted(*) {
                grid-area: 1 / 1;
                pointer-events: none;
                opacity: 0;
                top: 0;
                transition: opacity 0.75s ease;
            }
            & ::slotted([data-active]) {
                pointer-events: all;
                opacity: 1;
            }
        }
        arrow-icon { --color: var(--primary-text); }
        :host([mode="list"]) {
            & > button { display: none; }
            & > ul {
                grid-column: 1 / 6;
                gap: var(--space-md);
                margin: 0 var(--space-md);
                height: 100%;
            }
            & ::slotted(*) {
                pointer-events: all;
                opacity: 1;
                grid-area: auto;
            }
        }
    `], 
    template: html`
        <button aria-label="previous" @click="this.prev">
            <arrow-icon></arrow-icon>
        </button>
        <ul>
            <slot></slot>
        </ul>
        <button aria-label="next" @click="this.next">
            <arrow-icon></arrow-icon>
        </button>
    `,
    script: {
        prev() {
            this.dispatchEvent(
                new CustomEvent('prev', { bubbles: true })
            );
        },
        next() {
            this.dispatchEvent(
                new CustomEvent('next', { bubbles: true })
            );
        }, 
    } 
});
