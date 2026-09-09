
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import 'prismjs/components/prism-bash';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const npmExamples = {
    install:
`npm install ensojs`,
    import:
`import { Enso, html, css, prop } from 'ensojs';`,
};

const cdnExamples = {
    import:
`import { Enso, html, css, prop } from 'https://cdn.jsdelivr.net/npm/ensojs';`,
    export:
`// enso.js:
export * from 'https://cdn.jsdelivr.net/npm/ensojs';

// component.enso.js
import { Enso, html, css, prop } from './enso.js';
`,
    importmap:
`<script type="importmap">
{
    "imports": {
        "ensojs": "https://cdn.jsdelivr.net/npm/ensojs"
    }
}
</script>`,
    import2:
`import { Enso, html, css, prop } from 'ensojs';`
};

export default Enso.component('installing-enso-page', {
    expose: { npmExamples, cdnExamples },
    styles: [css(Reset), css(DocStyles), css`
    
    `],
    template: html`
        <section>
            <h1 id="installing">Installing</h1>
            <p>
                Enso can be added to your project either by installing it from
                npm or importing it directly from a CDN. Enso does not require
                a build step, but works equally well in projects that use build
                tools such as Vite.
            </p>
            <p>
                For projects using a package manager, npm is the recommended
                option. CDN imports are ideal for using Enso directly in the
                browser with no installation or build tooling.
            </p>
        </section>

        <section>
            <h2 id="npm">NPM</h2>

            <p>
                Install Enso from npm using your preferred package manager:
            </p>

            <enso-code-view
                .code="{{ npmExamples.install }}"
                language="bash"
            ></enso-code-view>

            <p>
                Enso can then be imported into your JavaScript modules:
            </p>

            <enso-code-view
                .code="{{ npmExamples.import }}"
                language="javascript"
            ></enso-code-view>
        </section>

        <section>
            <h2 id="cdn">CDN</h2>

            <p>
                Enso can also be imported directly from jsDelivr without installing any packages:
            </p>
            <enso-code-view
                .code="{{ cdnExamples.import }}"
                language="javascript"
            ></enso-code-view>
            <p>
                Using the full URL in every component can become verbose. For larger projects, you can re-export Enso from a local module:
            </p>
            <enso-code-view
                .code="{{ cdnExamples.export }}"
                language="javascript"
            ></enso-code-view>
            <p>
                Alternatively, you can use an import map for more ergonomic imports:
            </p>
            <enso-code-view
                .code="{{ cdnExamples.importmap }}"
                language="markup"
            ></enso-code-view>
            <p>
                An import map allows the same imports used with npm to work directly in the browser:
            </p>
            <enso-code-view
                .code="{{ cdnExamples.import2 }}"
                language="javascript"
            ></enso-code-view>
            <p>
                Import maps are generally preferred, as they allow components to use the same imports whether Enso is installed from npm or loaded from a CDN.
            </p>
        </section>
    `,
    
    script: {
        getHeadings() {
            return [
                { title: "Installing", link: "#installing" },
                { title: "NPM", link: "#npm" },
                { title: "CDN", link: "#cdn" }
            ];
        },
        getSection() {
            return "docs-getting-started";
        }
    } 
})
