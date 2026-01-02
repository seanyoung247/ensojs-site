
import Enso, { html, css, prop, setWatched } from 'ensojs';
import './responsiveView.enso';
import Reset from '../styles/reset.css?inline';
import CodeStyles from '../styles/code.css?inline';
import BrushStroke from '../styles/brush.css?inline';


const querySlotted = (slot, selector) => {
    const results = [];
    for (const el of slot.assignedElements({ flatten: true })) {
        results.push(...el.querySelectorAll(selector));
    }
    return results;
}

Enso.component('annotated-code', {
    watched: {
        descriptions: prop([]),
    },
    styles: [ css(Reset), css(CodeStyles), css(BrushStroke), css`
        :host {
            --code-height: auto;
        }
        .item {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-auto-rows: auto;
            column-gap: var(--space-lg);
            align-items: center;
            margin: var(--space-md);
            &::before {
                content: attr(data-index);
                grid-area: 1 / 1 / span 2 / 2;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                
                width: 1.25em;
                height: 1.25em;

                border: 2px solid var(--stroke-color);
                border-radius: 50%;
                font-size: 0.75em;
                color: var(--muted-text);
            }
            & > h4 {
                font-size: 1rem;
                margin-bottom: 0.25rem;
                border-bottom: 1px solid var(--stroke-color);
            }
        }
        code.code-pane {
            height: var(--code-height);
        }
    `],
    template: html`
        <code class="code-pane" part="code">
            <slot @slotchange="this.onSlotChange"></slot>
        </code>
        <responsive-view @showchange="e=>this.setSelected(e.detail.show)">
            <li *for="{ index, title, description } of @:descriptions"
                :data-index="{{ index }}"
                class="item code-pane"
            >
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </li>
        </responsive-view>
    `,
    script: {
        _annotations: [],
        onSlotChange(e) {
            // Find any slotted elements with descriptions
            this._annotations = querySlotted(
                e.target, '[data-title][data-description]'
            );
            const descriptions = this._annotations.map((element,i) => {
                element.dataset.index = i + 1;
                return {
                    index: i + 1,
                    title: element.dataset.title,
                    description: element.dataset.description
                };
            });
            setWatched(this, { descriptions });
        },
        setSelected(which) {
            this._annotations.forEach((el, i) => {
                const active = (i === (which - 1));
                el.classList.toggle('active', active);
                el.setAttribute('aria-current', active)
                if (active) el.scrollIntoView({ 
                    behavior: 'smooth',
                    container: 'nearest',
                    block: 'nearest',
                    inline: 'nearest'
                });
            });
        },
    }
});
