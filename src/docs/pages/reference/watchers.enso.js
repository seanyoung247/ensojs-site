import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`Enso.component('enso-watchers', {
    watched: {
        count: attr(0),
        fibonacci: computed(function () {
            const sequence = [0, 1];

            while (sequence.length < this.count) {
                const n = sequence.length;
                sequence.push(sequence[n - 1] + sequence[n - 2]);
            }

            return sequence.slice(0, this.count);
        }, ['count'])
    },
    
    template: html\`
        <span>{{ @:fibonacci.join(',') }}</span>
        <button @click="()=>@:count++">
            {{ count }}
        </button>
    \`,

    script: {
        onMount: watches(() => {
            console.log('mounted');
        }, [lifecycle.mount], false),

        onCount: watches(function() {
            console.log(this.count);
        }, ['count'])
    }
});`
}

export default Enso.component('components-watchers-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="reference-watchers">
                <h1>Watchers</h1>
                <p>
                    Watcher functions are functions that can be attached to watched properties and
                    lifecycle events. The provided watcher will be called when any of the listed
                    watched properties are changed, or on listed lifecycle events.
                </p>
                <enso-func-sig
                    name="watcher" 
                    .params="['prop', 'value']"
                    returns="any"
                ></enso-func-sig>
                <p class="spaced">
                    <code class="callout">Prop</code> is the string name of the changed value.
                    <code class="callout">value</code> is the new value of the property.
                </p>
                <p>
                    <code class="callout">watches()</code> ignores the return value, while
                    <code class="callout">computed()</code> uses it as the new value of the computed
                    property.
                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>
                <p>
                   Watchers can be arrow functions or regular functions. Enso invokes regular watcher
                   functions with the component as their <code class="callout">this</code> context.
                   Arrow functions retain their lexical <code class="callout">this</code>, so use a
                   regular function when you need to access the component through
                   <code class="callout">this</code>.
                </p>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Watchers", link: "#reference-watchers" },
            ];
        },
        getSection() {
            return "docs-reference-section";
        }
    }
});
