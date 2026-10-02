import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`Enso.component('enso-attr', {
    watched: {
        count: attr(0),
        message: attr(null, String),
        selected: attr(null, Number)
    }
});`
}

export default Enso.component('components-attr-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-attr">
                <h1>attr()</h1>
                <enso-func-sig
                    name="attr" 
                    .params="['value = null', 'type = String']"
                    returns="Object"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['value', 'null || string || number || boolean', 'Initial and default value of the watched property. Defaults to null.'],
                        ['type', 'Function', 'Defines the type of the attribute. Can be String, Boolean, or Number. Defaults to String.']
                    ]"
                ></docs-table>

                <p class="spaced">
                    The <code class="callout">attr()</code> function creates a watched property backed by
                    an HTML attribute. Its type is inferred from the default value, or can be specified
                    explicitly when the default is <code class="callout">null</code>. Supported types are
                    the JavaScript constructors <code class="callout">String</code>,
                    <code class="callout">Number</code>, and <code class="callout">Boolean</code>.
                </p>
                <p>
                    Returns a property configuration object for use by the component's reactivity system.
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
                { title: "Attr", link: "#reference-attr" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
