
import Enso, { html, css, prop, attr, setWatched, watches } from 'ensojs';
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
        selected: attr(null, Number)
    },
    styles: [ css(CodeStyles), css(BrushStroke), css`
        .item {
        }
        .item::before {
            content: attr(data-index);
        }
        .item > h4 { display: inline; }
        .descriptions {
            list-style: none;
        }
        .highlight {
            border: 1px solid red;
        }
    `],
    template: html`
        <code #ref="codePane">
            <slot @slotchange="this.onSlotChange"></slot>
        </code>
        <ul class="descriptions">
            <li *for="desc of @:descriptions"
                :class="item{{ desc.index === @:selected && ' active' }}"
                :data-index="{{ desc.index }}"
            >
                <h4>{{ desc.title }}</h4>
                <p>{{ desc.description }}</p>
            </li>
        </ul>
    `,
    script: {
        onSlotChange(e) {
            // Find any slotted elements with descriptions
            const descriptors = querySlotted(
                e.target, '[data-title][data-description]'
            );
            const descriptions = descriptors.map((element,i) => {
                element.dataset.index = i + 1;
                return {
                    el: element,
                    index: i + 1,
                    title: element.dataset.title,
                    description: element.dataset.description
                };
            });
            setWatched(this, {descriptions});
        }
    }
});