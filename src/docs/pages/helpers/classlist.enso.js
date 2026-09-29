import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`classList('static', @:active ? 'active' : 'inactive');`
};

export default Enso.component('helpers-classlist-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-classlist">
                <h1>classList()</h1>
                <enso-func-sig
                    name="classList" 
                    .params="['...classes']"
                    returns="string"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['classes', '[string]', 'string classname(s)']
                    ]"
                ></docs-table>
                <p class="spaced">
                    The <code class="callout">classList()</code> function takes a list of class name strings and
                    returns them formatted for use in a class attribute.
                </p>
                <p>
                    It's intended to improve readability of dynamic class lists in templates.
                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>

            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Classlist", link: "#helper-classlist" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
