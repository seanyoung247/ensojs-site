
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    immediate:
`Enso.component('enso-immediate', {
    ...
});`,
    deferred:
`const defined = Enso.define({
    ...
});
Enso.register('enso-define', defined);
`
};


export default Enso.component('components-settings-page', {
    settings: { useShadow: false },
    expose: { examples },

    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="component-creation">
                <h1>Creation</h1>
                <p>
                    Enso provides two ways to create components: immediate and
                    deferred registration. 
                </p>
                <section>
                    <h2>Immediate Registration</h2>
                    <p>
                        Immediate registration defines the component and registers it
                        as a custom element in one step, using the 
                        <code class="callout">Enso.component()</code> function.
                    </p>
                    <enso-func-sig
                        name="Enso.component" 
                        .params="['tag', 'config']"
                        returns="CustomElementClass"
                    ></enso-func-sig>
                    <p>
                        For most applications, this is the simplest approach.
                    </p>
                    <enso-code-view
                        .code="examples.immediate"
                        language="javascript"
                    ></enso-code-view>
                </section>
                <section>
                    <h2>Deferred Registration</h2>
                    <p>
                        Deferred registration splits definition and registration in
                        to two discrete steps, using the
                        <code class="callout">Enso.define()</code> function to define
                        the component, and <code class="callout">Enso.register()</code>
                        to register the component in the browser.
                    </p>
                    <enso-func-sig
                        name="Enso.define" 
                        .params="['config']"
                        returns="ComponentClass"
                    ></enso-func-sig>
                    <enso-func-sig
                        name="Enso.register" 
                        .params="['tag', 'ComponentClass']"
                        returns="CustomElementClass"
                    ></enso-func-sig>
                    <p>
                        Since tag name collisions can prevent a component from
                        being created when using immediate registration, deferred
                        registration may be desirable for reusable components and
                        component libraries.
                    </p>
                    <enso-code-view
                        .code="examples.deferred"
                        language="javascript"
                    ></enso-code-view>
                </section>
                <section>
                    <h2>ComponentClass vs CustomElementClass</h2>
                    <p>
                        Both are the same underlying class, but a
                        <code class="callout">CustomElementClass</code> has a
                        static <code class="callout">tagName</code> and is
                        registered with the browser, while a
                        <code class="callout">ComponentClass</code> is not.
                        Registration modifies the existing class rather than
                        creating a new one.
                    </p>
                </section>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Creation", link: "#component-creation" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
