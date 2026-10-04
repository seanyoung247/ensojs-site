import { Enso, css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`const Comp = comp(Enso.component('enso-comp', {
    watched: {
        count: attr(0)
    },
    template: html\`
        <button @click="()=>@:count++">
            {{ @:count }}
        </button>
    \`
}));

const el = Comp({ count: 5 });
// <enso-comp count="5"> instance

const template = Comp.html({ count:2 });
// string: '<enso-comp count="2"></enso-comp>'`,

    html:
`Enso.component('enso-nested', {
    template: html\`
        \${ Comp.html({ count: 5 }) }
    \`
});`,

    children:
`const template = Comp.html(
    { count: 2 },
    '<span>Some content</span>'
);

// '<enso-comp count="2"><span>Some content</span></enso-comp>'`
};

export default Enso.component('helpers-comp-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-comp">
                <h1>comp()</h1>
                <enso-func-sig
                    name="comp" 
                    .params="['componentClass']"
                    returns="function object"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['ComponentClass', 'Class', 'The component class to wrap.']
                    ]"
                ></docs-table>
                <p class="spaced">
                    The <code class="callout">comp()</code> function takes a registered component class
                    (returned from <code class="callout">Enso.component</code> /
                    <code class="callout">Enso.register</code>) and returns a function that can instantiate
                    a live custom element of the component, or produce an HTML string for use in templates.
                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>
                <section>
                    <h2>Component Factory Function</h2>
                    <enso-func-sig
                        name="Comp" 
                        .params="['attrs', 'children']"
                        returns="CustomElement"
                    ></enso-func-sig>
                    <docs-table 
                        .headers="['Parameter', 'Type', 'Description']"
                        .rows="[
                            ['attrs', 'object', 'An object literal containing key-value pairs of attributes.'],
                            ['children', 'string', 'An HTML string of child text/elements.']
                        ]"
                    ></docs-table>
                    <p class="spaced">
                        The returned <code class="callout">Comp()</code> function creates an element instance
                        of the wrapped component. It optionally takes an object literal defining attributes
                        and their values, and an HTML string to be used as the element's children.
                    </p>
                    <p>
                        The returned element is upgraded and ready for use, but is not inserted into the document
                        until added by the caller.
                    </p>
                    <p>
                        The <code class="callout">Comp()</code> function has the following properties:
                    </p>
                    <docs-table 
                        .headers="['Property', 'Type', 'Description']"
                        .rows="[
                            ['tag', 'string', 'The registered tag name of the component.'],
                            ['Class', 'class', 'The wrapped component class.']
                        ]"
                    ></docs-table>
                    <enso-func-sig
                        name="Comp.html" 
                        .params="['attrs', 'children']"
                        returns="string"
                    ></enso-func-sig>
                    <p class="spaced">
                        The <code class="callout">Comp()</code> function also has the <code class="callout">html</code>
                        member function. <code class="callout">Comp.html()</code> is similar to
                        <code class="callout">Comp()</code> in its parameters, but instead of returning a component
                        instance, it returns an HTML string for inclusion in Enso templates.
                    </p>
                    <enso-code-view
                        .code="examples.html"
                        language="javascript"
                    ></enso-code-view>
                    <p>
                        Both <code class="callout">Comp()</code> and <code class="callout">Comp.html()</code> accept
                        children in the same way:
                    </p>
                    <enso-code-view
                        .code="examples.children"
                        language="javascript"
                    ></enso-code-view>
                </section>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Comp", link: "#helper-comp" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
