
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    attr:
`Enso.component('enso-attr', {
    watched: {
        count: attr(0),
        max: attr(null, Number)
    },
});`,
    attr_html:
`<enso-attr count="5" max="10"></enso-attr>`,
    prop:
`Enso.component('enso-prop', {
    watched: {
        deep: prop({ nested: 0 }, true),
        shallow: prop([])
    }
});`,
    computed:
`Enso.component('enso-computed', {
    watched: {
        count: attr(0),
        max: attr(100),
        percentage: computed(function() {
            return (this.count / this.max) * 100
        }, ['count', 'max'])
    }
});`
};


export default Enso.component('components-watched-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="watched-properties">
                <h1>Watched Properties</h1>
                <p>
                    Watched properties define a component's reactive state. Enso detects changes to
                    watched properties and notifies their dependants. Bindings that reference a
                    changed property are then re-evaluated, updating the component where necessary.
                </p>
                <p>
                    There are three types of watched property: Attributes (attr), Properties (prop),
                    and Computed (computed).
                </p>
                <section 
                    id="watched-properties-attributes" 
                    class="sub-section"
                >
                    <h2>Attributes</h2>
                    <p>
                        Attributes are watched properties that are reflected as HTML attributes on
                        the component's custom element. They can be set directly in HTML or using
                        <code class="callout">el.setAttribute()</code>. The type is inferred from
                        the default value. If no default value is provided, the type defaults to
                        <code class="callout">String</code>, but you can specify
                        <code class="callout">Number</code> or <code class="callout">Boolean</code>.
                    </p>
                    <p>
                        You declare a watched attribute with the <code class="callout">attr()</code>
                        function.
                    </p>
                    <enso-code-view
                        .code="examples.attr"
                        language="javascript"
                    ></enso-code-view>
                    <enso-code-view
                        .code="examples.attr_html"
                        language="markup"
                    ></enso-code-view>
                <section>
                <section 
                    id="watched-properties-properties" 
                    class="sub-section"
                >
                    <h2>Properties</h2>
                    <p>
                        Properties do not reflect to HTML attributes, so they can hold any JavaScript
                        type. They can be read and written like ordinary properties on a custom element.
                    </p>
                    <p>
                        Properties also support optional deep reactivity, allowing Enso to detect changes
                        to nested objects and arrays.
                    </p>
                    <enso-code-view
                        .code="examples.prop"
                        language="javascript"
                    ></enso-code-view>
                    <p>
                        Pass true as the second argument to enable deep reactivity for objects and array.
                        By default, properties are shallow: assigning a new value triggers an update, but
                        modifying their nested contents does not.
                    </p>
                <section>
                <section 
                    id="watched-properties-computed" 
                    class="sub-section"
                >
                    <h2>Computed</h2>
                    <p>
                        Like properties, computed can take any JavaScript type. Unlike properties they can 
                        not be written to directly. Instead you provide a list of watched property dependencies
                        and an update function. When any of the dependencies are altered, the update function
                        is called and its return value is used to update the computed property.
                    </p>
                    <enso-code-view
                        .code="examples.computed"
                        language="javascript"
                    ></enso-code-view>
                <section>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Watched Properties", link: "#watched-properties" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
