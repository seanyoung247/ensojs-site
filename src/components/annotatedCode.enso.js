
import Enso, { html, css, prop, attr, watches, lifecycle } from 'ensojs';
import { range } from 'ensojs/helpers';

import './stackListView.enso';

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

function scrollIntoContainer(el, container, options = {}) {
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const fullyVisible =
            elRect.top >= containerRect.top &&
            elRect.bottom <= containerRect.bottom;

    if (fullyVisible) return;

    container.scrollTo({
        top:
            elRect.top -
            containerRect.top +
            container.scrollTop - 5,
        behavior: options.behavior ?? 'smooth'
    });
}

Enso.component('annotated-code', {
    watched: {
        descriptions: prop([]),
        selected: attr(1, Number),
        mode: prop('stack'),
    },
    styles: [ css(Reset), css(CodeStyles), css(BrushStroke), css`
        :host {
            --code-height: min(450px, 50dvh);
        }
        .item {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-auto-rows: auto;
            column-gap: var(--space-lg);
            align-items: center;
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
                border-bottom: 1px solid var(--stroke-color);
            }
            @media (min-width: 900px) {
                margin: 0;
                position: relative;
                border: 2px solid var(--code-back);
                overflow: visible;
                &[data-active] {
                    border-left: 2px solid var(--accent-color);
                    &::after {
                        content: '';
                        position: absolute;
                        width: 0; height: 0;
                        left: -10px;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent; 
                        border-right:10px solid var(--accent-color); 
                    }
                    & > h4 {
                        border-bottom: 1px solid var(--accent-color);
                    }
                }
            }
        }
        code.code-pane {
            height: var(--code-height);
            margin: 0;
            @media (min-width: 900px) {
                height: auto;
                max-height: 100%;
            }
        }
    `],
    template: html`
        <code #ref="codePane" class="code-pane scroll-hint" part="code">
            <slot @slotchange="this.onSlotChange"></slot>
        </code>
        <stack-list-view 
            :mode="{{ @:mode }}"
            @prev="()=>this.watched.selected--" 
            @next="()=>this.watched.selected++"
        >
            <li *for="{ index, title, description } of @:descriptions"
                :data-index="{{ index }}"
                :data-active="{{ @:selected === index }}"
                @mousemove="()=>this.watched.selected = index"
                class="item code-pane"
            >
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </li>
        </stack-list-view>
    `,
    script: {
        _annotations: [],
        _range: range(0),

        mount: watches(function() {
            const mq = window.matchMedia('(min-width: 900px)');

            const update = () => {
                this.watched.mode = mq.matches ? 'list' : 'stack';
            };

            update();
            mq.addEventListener('change', update);

            this._cleanup = () => mq.removeEventListener('change', update);
        }, [lifecycle.mount]),

        unMount: watches(function() {
            this._cleanup();
        }, [lifecycle.unmount]),

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
            this._range = range(1, this._annotations.length + 1);
            this.watched.selected = 1;
            this.watched.descriptions = descriptions;
        },

        setSelected: watches(function() {
            const which = this._range.wrap(this.watched.selected);
            if (which !== this.watched.selected) {
                this.watched.selected = which;
                return;
            }

            this._annotations.forEach((el, i) => {
                const active = (i === (which - 1));
                el.classList.toggle('active', active);
                if (active) {
                    el.setAttribute('aria-current', 'true');
                    scrollIntoContainer(el, this.refs.codePane);
                } else {
                    el.removeAttribute('aria-current');
                }
            });
        }, ['selected']),
    }
});
