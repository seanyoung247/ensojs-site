
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    multisheet:
`Enso.component('my-counter', {
    watched: {
        count: attr(0)
    },
    styles: [css(Reset), css\`
        .counter {
            colour: white;
        }
    \`],
    template: html\`
        <button
            @click="() => @:count++" 
            class="counter">
            {{ @:count }}
        </button>
    \`
});`,
    reactivity:
`Enso.component('status-indicator', {
    watched: {
        active: attr(false)
    },
    styles: css\`
        .active {
            color: green;
        }
        .inactive {
            color: grey;
        }
    \`,
    template: html\`
        <span :class="{{ @:active ? 'active' : 'inactive' }}">
            Status
        </span>
    \`
});`
}

export default Enso.component('components-styles-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="styling-components">
                <h1>Styling components with CSS</h1>
                <p>
                    Enso components can use multiple stylesheets, making it easy to share resets,
                    themes and other common styles. Stylesheets are attached to the nearest root
                    as adopted stylesheets, allowing multiple components to share the same
                    stylesheet without duplicating its contents. This reduces memory usage and
                    overhead while retaining style encapsulation when using Shadow DOM.
                </p>
                <p>
                    For single stylesheets the styles field accepts a single Enso stylesheet
                    object created using the <code class="callout">css()</code> function.
                    When supplying multiple stylesheets, the styles field accepts an array
                    of Enso stylesheet objects.
                </p>
                <enso-code-view
                    .code="examples.multisheet"
                    language="javascript"
                ></enso-code-view>
                <p>
                    Stylesheets are static, but components can dynamically change their appearance
                    using reactive <code class="callout">class</code> and
                    <code class="callout">style</code> attribute bindings. These use the same template
                    expressions described in the Templates documentation.
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
                { title: "Styling Components", link: "#styling-components" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
