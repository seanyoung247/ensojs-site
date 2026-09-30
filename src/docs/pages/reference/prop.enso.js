import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`Enso.component('enso-props', {
    watched: {
        headers: prop([]),   // deep - false
        rows: prop([], true) // deep - true
    },
});`,
    reactivity:
`// Doesn't trigger reactivity
ensoPropEl.headers.push('new header');
// Will trigger reactivity
ensoPropEl.headers = ['header 1', 'header 2'];

// Will also trigger reactivity
ensoPropEl.rows.push('new Row');
`
}

export default Enso.component('components-prop-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-prop">
                <h1>prop()</h1>
                <enso-func-sig
                    name="prop" 
                    .params="['value = null', 'deep = false']"
                    returns="Object"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['value', 'any', 'Initial and default value of the watched property. Defaults to null.'],
                        ['deep', 'boolean', 'Enables deep reactivity for objects and arrays. Defaults to false.']
                    ]"
                ></docs-table>
                <p class="spaced">
                    The <code class="callout">prop()</code> function takes a default value,
                    and a boolean flag: deep. Returns a property configuration object for use
                    by the component's reactivity system. If the default value is an object or
                    array and the flag is true, deep reactivity will be used for the watched
                    property.
                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>
                <p>
                    Deep reactivity allows Enso to detect changes to nested object properties
                    and array operations such as <code class="callout">push()</code>. It uses
                    recursive proxies to observe these changes, introducing additional
                    performance overhead. For this reason, deep reactivity is opt-in, and
                    shallow reactivity is the default.
                </p>
                <p>
                    For shallow reactivity, the property itself must be reassigned to trigger
                    an update.
                </p>
                <enso-code-view
                    .code="examples.reactivity"
                    language="javascript"
                ></enso-code-view>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Prop", link: "#reference-prop" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
