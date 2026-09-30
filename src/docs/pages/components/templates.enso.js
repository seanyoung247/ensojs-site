
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    html:
`Enso.component('hello-world', {
    template: html\`
        <p>Hello World!</p>
    \`
});`,

    boolean:
`<button :disabled="{{ @:saving }}">
    Save
</button>
`,
    reactive:
`<p>Hello, {{@:name}}!</p>`,
    direct:
`<user-card .user="@:selectedUser"></user-card>

<div *if="@:visible">
    Hello {{ @:name }}!
</div>`,
    parsing:
`<div enso:ignore>
    {{ Won't be parsed }}
</div>
<div :class="{{ @:theme }}" enso:ignore-children>
    {{ Won't be parsed }}
</div>`,
    attributes:
`<div enso-attr:class="{{ @:theme }}"></div>

<div 
    :style="color:{{ @:error ? 'red' : 'green' }}; background:{{ @:theme }};"
></div>`,
    properties:
`<todo-list
    .user="['task 1', 'task2']" 
    enso-prop:theme="@:theme"
></todo-list>`,
    references:
`<div #ref="myDiv"></div>`,
    events:
`<button @click="() => @:count++">
    Increment
</button>
<button enso-event:click="this.decrement">
    Decrement
</button>
`,
};


export default Enso.component('components-templates-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles), css`
        section.sub-section {
            margin-top: var(--space-md);
        }
    `],

    template: html`
        <div class="document">
            <section id="#component-templates-field">
                <!-- template: -->
                <h1>Templates</h1>
                <p>
                    Templates are the only required field for Enso components.
                    They define the HTML that belongs to the component.
                </p>
                <section class="sub-section">
                    <!-- html -->
                    <h3>html</h3>
                    <p>
                        Enso templates are created using 
                        the <code class="callout">html()</code> tagged 
                        template function:
                    </p>
                    <enso-code-view
                        .code="examples.html"
                        language="javascript"
                    ></enso-code-view>
                    <p>
                        <code class="callout">html()</code> can also accept strings, 
                        allowing templates to be loaded from external files.
                    </p>
                </section>
                <section class="sub-section">
                    <!-- {{}} -->
                    <h3>Template Expressions</h3>
                    <p>
                        Enso supports JavaScript expressions inline in HTML templates using a
                        Handlebars-style syntax.
                    </p>
                    <p>
                        For inserting simple values into text nodes and element attributes, use a value
                        expression: <code class="callout" enso:ignore>{{ &#x3c;JavaScript expression&#x3e; }}</code>.
                    </p>
                    <p>
                        Interpolated results are generally strings, but boolean results are preserved where they have
                        meaning to the template parser. This allows Enso to handle boolean attributes correctly. 
                        For example a <code class="callout">false</code> value bound to
                        <code class="callout">:disabled</code> removes the <code class="callout">disabled</code>
                        attribute rather than rendering <code class="callout">disabled="false"</code>.
                    </p>
                    <enso-code-view
                        .code="examples.boolean"
                        language="markup"
                    ></enso-code-view>
                    <h4>Reactivity</h4>
                    <p>
                        Expressions are evaluated when the component mounts, inserting their initial values into the
                        DOM. If an expression references one or more watched properties, it is re-evaluated when those
                        properties change, updating the DOM with the latest values.
                    </p>
                    <enso-code-view
                        .code="examples.reactive"
                        language="markup"
                    ></enso-code-view>
                    <h4>Direct expressions</h4>
                    <p>
                        Not every template expression needs <code class="callout" enso:ignore>{{ }}</code>. Property
                        bindings, event handlers, and the <code class="callout">*if</code> and
                        <code class="callout">*for</code> directives accept JavaScript expressions directly, without 
                        converting their results into DOM-compatible values.
                    </p>
                    <enso-code-view
                        .code="examples.direct"
                        language="markup"
                    ></enso-code-view>
                </section>
                <section class="sub-section">
                    <!-- enso:ignore, enso:ignore-children -->
                    <h3>Controlling template parsing</h3>
                    <p>
                        Enso processes expressions and bindings in component templates. If you need to preserve content
                        or allow another library to manage it, you can selectively prevent Enso from processing elements.
                    </p>
                    <p>
                        Use the <code class="callout">enso:ignore</code> attribute to exclude the element and its entire
                        subtree from template parsing.
                    </p>
                    <p>
                        Use the <code class="callout">enso:ignore-children</code> attribute to ignore the element's 
                        content and children, while still parsing any bindings attached directly to it.
                    </p>
                    <enso-code-view
                        .code="examples.parsing"
                        language="markup"
                    ></enso-code-view>
                </section>
            </section>
            <section id="#component-templates-bindings">
                <h2>Bindings</h2>
                <p>
                    Bindings connect template elements to component data and behaviour. They allow Enso to update
                    attributes and properties, respond to events and provide references to DOM elements.
                </p>
                <section class="sub-section">
                    <!-- attributes :attribute, enso-attr:attribute -->
                    <h3>Attributes</h3>
                    <p>
                        Attribute bindings set an element's HTML attributes using template expressions. 
                        They can contain one or more expressions, combined with ordinary text.
                    </p>
                    <p>
                        As returned values will be serialised into strings for the DOM, expressions should
                        return strings, numbers, or booleans.
                    </p>
                    <p>
                        To identify an attribute as a binding with either a long or short form prefix:
                    </p>
                    <enso-code-view
                        .code="examples.attributes"
                        language="markup"
                    ></enso-code-view>
                    <p>
                        When a watched property referenced by an attribute binding changes, Enso re-evaluates
                        the expression and updates the corresponding attribute.
                    </p>
                </section>
                <section class="sub-section">
                    <!-- properties .property, enso-prop:property -->
                    <h3>Properties</h3>
                    <p>
                        Property bindings assign JavaScript values directly to an element's properties rather
                        than setting HTML attributes. Unlike attribute bindings, they preserve the original
                        value and its type, making them particularly useful for passing complex data, such as
                        objects and arrays, between components.
                    </p>
                    <enso-code-view
                        .code="examples.properties"
                        language="markup"
                    ></enso-code-view>
                </section>
                <section class="sub-section">
                    <!-- references #ref -->
                    <h3>References</h3>
                    <p>
                        Reference bindings allow a component to access elements in its template.
                    </p>
                    <enso-code-view
                        .code="examples.references"
                        language="markup"
                    ></enso-code-view>
                    <p>
                        Here the component's div can be accessed from <code class="callout">this.refs.myDiv</code>.
                    </p>
                </section>
                <section class="sub-section">
                    <!-- events @<event name>, enso-event:<event name> -->
                    <h3>Events</h3>
                    <p>
                        Event bindings allow a function to be added as an event listener. These are identified by
                        a <code class="callout">@</code> prefix or <code class="callout">enso-event:</code> followed
                        by the event name.
                    </p>
                    <p>
                        Event bindings evaluate a JavaScript expression that returns an event listener. The listener
                        receives the event object when the event occurs.
                    </p>
                    <enso-code-view
                        .code="examples.events"
                        language="markup"
                    ></enso-code-view>
                    
                </section>
            </section>
            <section id="#component-templates-directives">
                <h2>Directives</h2>
                <!-- *if, enso-if -->
                <!-- *for, enso-for -->

            </section>
        </div>
    `,  

    script: {
        getHeadings() {
            return [
                { title: "Templates", link: "#component-templates-field" },
                { title: "Bindings", link: "#component-templates-bindings" },
                { title: "Directives", link: "#component-templates-directives" }
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
