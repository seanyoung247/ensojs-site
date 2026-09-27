import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`Enso.component('enso-computed', {
    watched: {
        firstName: prop('Jane'),
        lastName: prop('Doe'),

        fullName: computed(
            function () {
                return \`\${this.firstName} \${this.lastName}\`;
            },
            ['firstName', 'lastName']
        )
    },

    template: html\`
        <p>{{ this.fullName }}</p>
    \`
});`
}

export default Enso.component('components-computed-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-computed">
                <h1>computed()</h1>
                <enso-func-sig
                    name="computed" 
                    .params="['fn', 'deps']"
                    returns="Object"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['fn', 'function', 'The function called when any dependencies are changed.'],
                        ['deps', 'string array', 'An Array of string names of the dependencies of this property.']
                    ]"
                ></docs-table>

                <p>
                    The <code class="callout">computed()</code> function creates a read-only watched property
                    that derives its value from other watched properties.
                </p>
                <p>
                    It takes a watcher function (see <a href="/reference-watchers">watchers</a>) that is called
                    to recalculate and return the new property value. The second parameter is the dependencies array.
                    This should be an array of string watched property names.
                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>
                <p>
                    The computed property is calculated when the component is initialised and recalculated whenever
                    one of its dependencies changes. In this example, changing either 
                    <code class="callout">firstName</code> or <code class="callout">lastName</code> updates
                    <code class="callout">fullName</code>.
                </p>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Computed", link: "#reference-computed" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
