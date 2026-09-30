import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    basic:
`const [template, styles] = await load(
    import.meta.url,
    './template.html',
    './styles.css'
);
Enso.component('enso-basic-load', {
    styles: css(styles),
    template: html(template)
});`,
    object:
`import { Enso, html, css } from 'ensojs';

const [template, styles, data] = await load(
    import.meta.url,
    { file: './template.html', as: html },
    { file: './styles.css', as: css },
    { file: './data.json', as: JSON.parse }
);

Enso.component('enso-type-load', {
    expose: { data },
    styles,
    template
});`,
    resolver:
`const [template, styles] = await load(
    import.meta.resolve,
    './template.html',
    './styles.css'
);`
};

export default Enso.component('helpers-load-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-">
                <h1>load()</h1>
                <enso-func-sig
                    name="load" 
                    .params="[base, ...files]"
                    returns="Promise<any[]>"
                ></enso-func-sig>
                <p class="spaced">
                    The <code class="callout">load()</code> function allows components to load external files
                    for inclusion in the component definition.
                </p>
                <p>
                    The basic form takes a base URL, such as <code class="callout">import.meta.url</code>,
                    followed by one or more file paths relative to that URL. The files are loaded in parallel
                    and the returned promise resolves to an array containing their contents in argument order.
                </p>
                <enso-code-view
                    .code="examples.basic"
                    language="javascript"
                ></enso-code-view>
                <section>
                    <h2>Load As</h2>
                    <p>
                        Optionally, <code class="callout">load()</code> can take a series of objects giving the
                        file URL, and a function that converts the loaded text into a format for immediate use.
                    </p>
                    <p>
                        The <code class="callout">as</code> function receives the loaded file contents as a
                        string and may return any value, allowing <code class="callout">load()</code> to support
                        arbitrary transformations. As such you can extend <code class="callout">load()</code>
                        with your own data types.
                    </p>
                    <enso-code-view
                        .code="examples.object"
                        language="javascript"
                    ></enso-code-view>
                </section>
                <section>
                    <h2>Resolver</h2>
                    <p>
                        Instead of a base URL, <code class="callout">load()</code> can accept a resolver function.
                        The resolver receives each file path and returns the URL to load.
                    </p>
                    <enso-func-sig
                        name="resolver" 
                        .params="['file']"
                        returns="URL"
                    ></enso-func-sig>
                    <p>
                        For example, <code class="callout">import.meta.resolve()</code> can be provided to resolve
                        paths relative to the current module.
                    </p>
                    <enso-code-view
                        .code="examples.resolver"
                        language="javascript"
                    ></enso-code-view>
                </section>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Load", link: "#helper-load" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
