
import Enso, { 
    html, css, prop, attr, 
    setWatched, getWatched,
} from 'ensojs';
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
        selected: attr(null, Number)
    },
    styles: [ css(Reset), css(CodeStyles), css(BrushStroke), css`
        .item {
            position: relative;
            background: var(--back-overlay);
            border-radius: 0.75rem;
            padding: 1.25rem;
            color: var(--primary-text);
            padding-left: 1.5em;
            cursor: pointer;
            &::before {
                content: attr(data-index);

                display: inline-flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                left: calc(0.75em - 0.625em); top: calc(50% - 0.625em);

                width: 1.25em;
                height: 1.25em;

                border: 2px solid var(--stroke-color );
                border-radius: 50%;

                font-size: 0.75em;
                line-height: 1;

                color: var(--muted-text);
                background: transparent;
            }
            &.active::before {
                border-color: var(--current-stroke);
                color: var(--primary-text);
            }
            &  > h4 {
                font-size: 1rem;
                margin-bottom: 0.25rem;
                border-bottom: 1px solid var(--stroke-color);
            }
        }
        .descriptions {
            list-style: none;

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
                @click="e=>{
                    e.stopPropagation();
                    this.setSelected(desc.index);
                }"
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
                element.onclick = ()=>this.setSelected(i+1);
                return {
                    el: element,
                    index: i + 1,
                    title: element.dataset.title,
                    description: element.dataset.description
                };
            });
            setWatched(this, { descriptions });
        },
        setSelected(which) {
            const { selected, descriptions } = getWatched(this);
            const prev = descriptions[selected - 1];
            if (prev) {
                prev.el.classList.remove('active');
            }
            let nextSelected = 0;
            const next = descriptions[which - 1];
            if (which !== selected && next) {
                next.el.classList.add('active');
                nextSelected = which;
            }
            setWatched(this, { selected: nextSelected });
        }
    }
});
