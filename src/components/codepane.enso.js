
import Enso, { css, html, attr, watches } from 'ensojs';
import Prism from 'prismjs';

import Reset from "../styles/reset.css?inline";


const charMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
    "{": "&#123;",
    "}": "&#125;"
};

export const escapeCode = (code) => {
    const out = [];
    for (let i = 0; i < code.length; i++) {
        const ch = code[i];
        out.push(charMap[ch] || ch);    }
    return out.join("");
}

export default Enso.component('code-pane', {
    watched: { lang: attr('javascript') },
    styles: [css(Reset),
    css`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            overflow: hidden;
        }
        div {
            margin: 0.5em;
            padding: 1em;
            font-size: 0.8rem;
            overflow-x: auto;
            background: var(--code-back);
            border-radius: 0.5em;
        }
        .token.string, .token.attr-value{
            color: var(--string-color);
        }

        .token.keyword, .token.function, .token.attr-name {
            color: var(--keyword-color);
            font-weight: 550;
        }

        .token.property, .token.tag {
            color: var(--property-color);
        }   

        .token.number {
            color: var(--number-color); 
        }

        .token.comment {
            color: var(--comment-color);
            font-style: italic;
        }

        .token.punctuation {
            color: var(--punctuation-color);
        }

    `],
    template: html`
        <div #ref="output"></div>
        <slot #ref="code" @slotChange="this.slotChange" hidden></slot>
    `,
    script: {
        slotChange() {
            if (!this.refs.code) return;
            const slot = this.refs.code;
            const output = this.refs.output;
            const lang = this.watched.lang;
            const nodes = slot.assignedNodes({ flatten: true });

            const source = nodes
                .filter(n => n.nodeType === Node.TEXT_NODE)
                .map(n => n.textContent.trim())
                .join('')
                .replace(/^\n+|\n+$/g, '');

            const html = Prism.highlight(
                source,
                (Prism.languages[lang] ?? 
                    Prism.languages.javascript),
                lang
            );

            output.innerHTML = /*html*/
                `<pre><code>${html}</code></pre>`;
        },
        onLangChange: watches(function () {
            this.slotChange();
        }, ['lang'])
    }
});
