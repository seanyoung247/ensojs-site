import Enso, { css, html } from 'ensojs';
import "../components/section.enso";
import "../components/codepane.enso";
import "../components/counter.enso";

const charMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
    "{": "&#123;",
    "}": "&#125;"
};

const escapeCode = (code) => {
    const out = [];
    for (let i = 0; i < code.length; i++) {
        const ch = code[i];
        out.push(charMap[ch] || ch);
    }
    return out.join("");
}

const counterCode = escapeCode(`
Enso.component("tiny-counter", {
    watched: { value: attr(0) },
    styles: css\`:host {
        display:flex;
        justify-content:space-between;
    }\`,
    template: html\`
        <button 
            @click="()=>@:value--"
        >-</button>
        {{ @:value }}
        <button
            @click="()=>@:value++"
        >+</button>
    \`
});`
);
const counterHTML = escapeCode(`<tiny-counter value="5"></tiny-counter>`);

export default Enso.component('example-section', {
    settings: { useShadow: false },
    styles: css`
        #tag-line {
            display: flex;
            justify-content: center;
            padding-bottom: 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
            font-size: 1.5rem;
            & > span::after {
                content: '.';
            }
        }

        .body-text {
            text-align: center;
        }

        .code-example {
            max-width: 768px;
            width: 100%;
        }
        .live-example {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 0.5rem;
            & > code-pane {
                flex: 1 1 fit-content;
            }
            & > tiny-counter {
                flex: 1 1 25%;
                min-width: 100px;
                max-width: 200px;
                margin: 0 0.5rem;
            }
        }
    `,
    template: html`
        <site-section>
            <h2 id="tag-line">
                <span>Minimal</span>
                <span>Fast</span>
                <span>Reactive</span>
            </h2>
            <p class="body-text">
                A native-first microframework for building declarative Web Components.
            </p>
            <div class="code-example">
                <code-pane lang="js" enso:ignore>
                    ${counterCode}
                </code-pane>
                <div class="live-example">
                    <code-pane lang="html" enso:ignore>
                        ${counterHTML}
                    </code-pane>
                    <tiny-counter value="5"></tiny-counter>
                </div>
            </div>
        </site-section>
    `
});
