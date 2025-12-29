
import Enso, { html, css, prop, attr, watches } from 'ensojs';
import Reset from './reset.css?inline';


const clamp = (min, max, val) => Math.max(min, Math.min(val ,max));

Enso.component('tabbed-view', {
    watched: {
        tabs: prop([]),
        selected: attr(0)
    },
    styles: [ css(Reset), css`
        :host {
            --tab-border: transparent;
            --tab-bg: 
                lightgrey 
                linear-gradient(
                    0deg, rgba(0,0,0,0.5), transparent
                ) no-repeat left bottom / 100% 15%;
            --tab-active-bg: lightgrey;

            --tab-padding: 0 0.5em;
            --tab-radius: 0.25em 0.25em 0 0;
            --tab-gap: 0.5em;
        }
        div[role="tablist"] {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: max-content;
            grid-template-rows: auto;
            align-content: start;
            padding: var(--tab-padding);
            gap: var(--tab-gap);
        }
        :host([tab-width="equal"]) > div[role="tablist"] {
            grid-auto-columns: 1fr;
        }
        button[role="tab"] {
            background: var(--tab-bg);
            border: none;
            border-radius: var(--tab-radius);
            padding: 0.25em 0.5em;
            &[aria-selected] {
                background: var(--tab-active-bg);
                box-shadow: 1px 0 0 var(--tab-bg);
                z-index: 2;
            }
        }
    `],
    template: html`
        <div role="tablist" part="tablist" aria-orientation="horizontal">
            <button *for="tab of @:tabs"
                role="tab" part="tab"

                :id="tab-{{ tab.index }}"
                :aria-controls="panel-{{ tab.index }}"
                :aria-selected="{{ tab.index === @:selected }}"
                :tabindex="{{ tab.index === @:selected ? 0 : -1 }}"

                @click="() => @:selected = tab.index"
                @keydown="e => this.onKeyDown(e, tab.index)" 
            >
                {{ tab.title }}
            </button>
        </div>
        <slot @slotchange="this.onSlotChange"></slot>
    `,
    script: {
        onSlotChange({target: slot}) {
            const items = slot
                .assignedElements({flatten:true})
                .filter(el => el.tagName === 'TAB-PANEL');
            this.watched.tabs = items.map((v,i) => {
                v.index = i;
                return {
                    title: v.title,
                    index: i,
                    el: v,
                };
            });
            this.watched.selected = 0;
        },

        onSelection: watches(function(_,val) {
            if (!this.watched.tabs.length) return;
            const max = this.watched.tabs.length - 1;
            const sel = Math.min(Math.max(val, 0), max);
            if (sel !== val) {
                this.watched.selected = sel;
                return;
            }
            for (const tab of this.watched.tabs) {
                tab.el.setSelected(tab.index === sel);
            }
        }, ['selected']),

        onKeyDown(e, index) {
            const count = this.watched.tabs.length - 1;
            const next = { 
                'ArrowRight': index + 1,
                'ArrowLeft': index - 1,
                'Home': 0,
                'End': count
            }[e.key];
            if (next === undefined) return;

            e.preventDefault();  
            this.watched.selected = clamp(0, count, next);
            this.shadowRoot.querySelector(`#tab-${this.watched.selected}`)?.focus();
        }
    }
});
