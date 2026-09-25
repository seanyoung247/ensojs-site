
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    settings:
`Enso.component('enso-settings', {
    settings: {
        useShadow: true,
        shadowMode: 'closed'
    },
    template: html\`
        <p>Hello World!</p>
    \`
});`
};


export default Enso.component('components-settings-page', {
    settings: { useShadow: false },
    expose: { examples },

    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="component-settings">
                <h1>Settings</h1>
                <p>
                    The <code class="callout">settings</code> field controls how
                    Enso creates and renders a component. Currently there are two
                    options:
                </p>
                <table class="docs-table">
                    <thead>
                        <tr>
                            <th>Setting</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>useShadow</td>
                            <td>true</td>
                            <td>
                                If <code class="callout">true</code>, the component
                                uses Shadow DOM. When <code class="callout">false</code>,
                                the component renders directly into its surrounding
                                DOM.
                            </td>
                        </tr>
                        <tr>
                            <td>shadowMode</td>
                            <td>"open"</td>
                            <td>
                                The Shadow DOM mode: <code class="callout">"open"</code>
                                or <code class="callout">"closed"</code>. Only applies
                                when <code class="callout">useShadow</code> is true.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <enso-code-view
                    .code="examples.settings"
                    language="javascript"
                ></enso-code-view>
                <p>
                    Most components shouldn't need to change their settings. If you opt out of
                    Shadow DOM with <code class="callout">useShadow: false</code> you lose
                    style encapsulation. Your component's styles can affect elements outside
                    the component, and external styles can affect your component. I'd recommend
                    leaving useShadow at its default unless you have a specific reason to
                    disable it.
                </p>
                <p>
                    Similarly, there are few reasons to use a closed shadow root. The default,
                    <code class="callout">"open"</code>, allows external JavaScript to access
                    the component's shadow root.
                </p>
                <p>
                    You can find more information on the Shadow DOM
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">
                        here</a>.
                </p>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Settings", link: "#component-settings" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
