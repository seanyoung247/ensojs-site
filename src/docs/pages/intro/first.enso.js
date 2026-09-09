
import Enso, { css, html, attr } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    hello_world:
`import { Enso, html } from 'ensojs';

Enso.component('hello-world', {
    template: html\`
        <p>Hello World!</p>
    \`
});`,

    simple_counter:
`import { Enso, html, attr } from 'ensojs';

Enso.component('enso-counter', {
    watched: {
        count: attr(0, Number)
    },

    template: html\`
        <button @click="()=>this.count--">-</button>
        <span>{{ @:count }}</span>
        <button @click="()=>this.count++">+</button>
    \`
});`,

    attributes:
        `<enso-counter count="10"></enso-counter>`
};


Enso.component('enso-counter', {
    watched: { count: attr(0, Number) },
    template: html`
        <button @click="()=>this.count--">-</button>
        <span>{{ @:count }}</span>
        <button @click="()=>this.count++">+</button>
    `
})


export default Enso.component('first-enso-component-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],
    template: html`
        <div class="document">
            <section>
                <h1 id="basic-component">A basic component</h1>
                <p>
                    A minimal Enso component only needs a tag name and a template, defined using 
                    the<code class="callout"> Enso.component() </code>function.
                </p>
                <p>
                    The first argument is the tag name used to insert the component into the DOM.
                    Enso is built on the Web Components specification, which requires custom element
                    names to contain a hyphen ('-'). For example,<code class="callout"> hello-world </code>is
                    valid, but<code class="callout"> helloworld </code>is not.
                </p>
                <p class="note">
                    enso- is often used in examples, but is merely a convention, not a
                    requirement.
                </p>
                <enso-code-view
                    .code="{{ examples.hello_world }}"
                    language="javascript"
                ></enso-code-view>
                <p>
                    The component's behaviour and properties are defined by the object literal
                    passed as the second argument. Here, the component's HTML is defined by
                    the<code class="callout"> template </code>field using
                    Enso's<code class="callout"> html </code>tagged template literal.
                </p>
            </section>

            <section>
                <h2 id="simple-counter">A Simple Counter</h2>
                <p>
                    Reactivity is provided through watched properties and attributes. When a
                    watched value changes, Enso automatically updates any parts of the template
                    that depend on it.
                </p>
                <enso-code-view
                    .code="{{ examples.simple_counter }}"
                    language="javascript"
                ></enso-code-view>
                <enso-counter></enso-counter>
                <p>
                    This example shows Enso's reactivity and event handling in
                    action.<code class="callout"> @click </code>assigns click event 
                    handlers to the buttons, which increment and decrement the 
                    watched<code class="callout"> count </code>attribute.
                </p>
                <p>
                    Template expressions are written using <span enso:ignore>{{}}</span>.
                    The JavaScript expression inside is evaluated and its result inserted
                    into the DOM as text. Here,<code class="callout"> @:count </code> is
                    shorthand for the watched<code class="callout"> count </code>value.
                    Because the expression depends on count, Enso will automatically update 
                    it whenever<code class="callout"> count </code>changes.
                </p>
                <enso-code-view
                    .code="{{ examples.attributes }}"
                    language="javascript"
                ></enso-code-view>
                <enso-counter count="10"></enso-counter>
                <p>
                    Because<code class="callout"> count </code>is an attribute, its initial
                    value can also be supplied directly in HTML.
                </p>
            </section>
        </div>
    `,
    
    script: {
        getHeadings() {
            return [
                { title: "A Basic Component", link: "#basic-component" },
                { title: "A Simple Counter", link: "#simple-counter" },
            ];
        },
        getSection() {
            return "docs-getting-started";
        }
    }
})
