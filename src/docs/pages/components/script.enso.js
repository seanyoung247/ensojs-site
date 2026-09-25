
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    script:
`Enso.component('enso-script', {
    watched: {
        count: attr(0)
    },
    template: html\`
        <button @click="this.inc">
            {{ @:count }}
        </button>
    \`,
    script: {
        inc() {
            this.count++;
        }
    }
});`,
    watches:
`Enso.component('enso-watches', {
    watched: {
        count: attr(0)
    },
    script: {
        onCount: watches(function(){
            console.log(this.count);
        }, ['count'])
    }
});`
};


export default Enso.component('components-script-page', {
    settings: { useShadow: false },
    expose: { examples },

    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="components-scripts">
                <h1>Scripts</h1>
                <p>
                    The <code class="callout">script</code> field allows properties
                    and methods to be added to the component. It allows you to add
                    custom behaviour and lifecycle hooks and perform operations not
                    possible with template expressions alone.
                </p>
                <enso-code-view
                    .code="examples.script"
                    language="javascript"
                ></enso-code-view>
                <p>
                    Script methods run in the component's context, so they can access
                    other component properties and methods through 
                    <code class="callout">this</code>, and be referenced by template
                    expressions.
                </p>
                <h2>Watches</h2>
                <p>
                    The <code class="callout">script</code> field is also where you can
                    define functions using <code class="callout">watches</code>. These
                    functions run when specified watched properties change or when particular component lifecycle events occur.
                </p>
                <enso-code-view
                    .code="examples.watches"
                    language="javascript"
                ></enso-code-view>
                <p>
                    Here the onCount function will run when
                    <code class="callout">count</code> changes.
                </p>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Scripts", link: "#components-scripts" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
