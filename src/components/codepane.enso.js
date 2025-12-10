
import Enso, { css, html } from 'ensojs';
import Prism from 'prismjs';

import Reset from "../styles/reset.css?inline";




Enso.component('code-pane', {
    styles: [css(Reset),
    css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            overflow: hidden;
        }
        slot {
            display: block;
            width: 100%;
        }
    `],
    template: html`
        <slot name="code" @slotchange="this.slotChange"></slot>
        <slot name="live"></slot>
    `,
    script: {
        slotChange(event) {
            const slot = event.target;
            const nodes = slot.assignedNodes();
            for (const node of nodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const lang = (node.getAttribute('data-lang') || 'javascript')
                        .split(',').map(l => `language-${l}`);

                    node.classList.add(...lang);
                    Prism.highlightElement(node);
                }
            }
        }
    }
});