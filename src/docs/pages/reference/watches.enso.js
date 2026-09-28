import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`Enso.component('enso-watches', {
    script: {
        onMount: watches(function() {
            console.log('Component mounted');
        }, [lifecycle.mount], true)
    }
});`
}

export default Enso.component('components-watches-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-watches">
                <h1>Watches()</h1>
                <enso-func-sig
                    name="watches" 
                    .params="['fn', 'deps = []', 'keep = false']"
                    returns="Object"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['fn', 'function', 'The watches function to be invoked when one of the dependencies is triggered.'],
                        ['deps', '[string]', 'Array of watched property names and lifecycle hooks.'],
                        ['keep', 'boolean', 'If true the function will be added to the component as a method. Default = false.']
                    ]"
                ></docs-table>
                <p class="spaced">
                    The <code class="callout">watches()</code> function allows hooking into Enso's reactivity system.
                </p>
                <p>
                    It takes a watcher function (see <a href="/reference-watchers">watchers</a>) that is called when
                    one of its listed watched properties changes or a listed lifecycle hooks runs. By default, the watcher
                    function is only registered with the reactivity system. When <code class="callout">keep</code> is
                    <code class="callout">true</code>, it is also added to the component under the name given to it in
                    <code class="callout">script</code>.
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
                { title: "Watches", link: "#reference-watches" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
