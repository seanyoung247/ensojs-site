
import Enso, { html, css, prop, attr, watches } from 'ensojs';
import Styles from './tabview.css?inline';


const clamp = (min, max, val) => Math.max(min, Math.min(val ,max));

Enso.component('tabbed-view', {
    watched: {
        tabs: prop([]),
        selected: attr(0)
    },
    styles: css(Styles),
    template: html`
        <div role="tablist" part="tablist" aria-orientation="horizontal">
            <button *for="tab of @:tabs"
                role="tab" part="tab"

                :id="tab-{{ tab.index }}"
                :aria-controls="panel-{{ tab.index }}"
                :aria-selected="{{ tab.index === @:selected ? 'true' : 'false' }}"
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
            const sel = clamp(0, max, val);
            if (sel !== val) {
                this.watched.selected = sel;
                return;
            }
            for (const tab of this.watched.tabs) {
                tab.el.setSelected(tab.index === sel);
            }
        }, ['selected']),

        onKeyDown(e, index) {
            const manual = this.getAttribute('activation') === 'manual';
            const count = this.watched.tabs.length - 1;
            const next = { 
                'ArrowRight': index + 1,
                'ArrowLeft': index - 1,
                'Home': 0,
                'End': count
            }[e.key];
            if (next === undefined) return;

            e.preventDefault();
            const selected = clamp(0, count, next);
            this.shadowRoot.querySelector(
                `#tab-${selected}`
            )?.focus();

            if (!manual && this.watched.selected != selected) {
                this.watched.selected = selected;
            }
        }
    }
});
