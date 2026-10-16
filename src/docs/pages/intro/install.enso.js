
import { Enso, css, html } from 'ensojs';

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

const manualExamples = {
    import:
`import { Enso, html, css, prop } from './vendor/ensojs/ensojs.es.js';`,
    importMap:
`<script type="importmap">
{
    "imports": {
        "ensojs": "./vendor/ensojs/ensojs.es.js"
    }
}
</script>`,
    import2:
`import { Enso, html, css, prop } from 'ensojs';`
};

export default Enso.component('installing-enso-page', {
    settings: { useShadow: false },
    expose: { npmExamples, cdnExamples, manualExamples },
    styles: [css(Reset), css(DocStyles), css`
    
    `],
    template: html`
        <div class="document">
            <section id="installing">
                <h1>Installing</h1>
                <p>
                    Enso can be added to your project through npm, a CDN, or a manual 
                    download. Enso does not require a build step, but works equally well
                    in projects that use build tools such as Vite.
                </p>
                <p>
                    For projects using a package manager, npm is the recommended
                    option. CDN imports are ideal for using Enso directly in the
                    browser with no installation or build tooling.
                </p>
            </section>

            <section id="npm">
                <h2>npm</h2>

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

            <section id="cdn">
                <h2>CDN</h2>

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
            <section id="manual">
                <h2>Manual installation</h2>
                <p>
                    You can also install EnsoJS manually from the GitHub release.
                <p>
                <p>
                    Download the EnsoJS ZIP (for instance, ensojs.v1.x.x.zip) archive from the latest GitHub
                    <a href="https://github.com/seanyoung247/ensoJS/releases">release</a>, extract
                    it, and copy the JavaScript files into your project. For example, into vendor/ensojs/.
                </p>
                <p>
                    Keep the files together so their relative imports continue to work. The .map
                    files are optional and support debugging.
                </p>
                <p>Import Enso using its local path:</p>
                <enso-code-view
                    .code="{{ manualExamples.import }}"
                    language="javascript"
                ></enso-code-view>
                <p>
                    Or, as above, use an import map:
                </p>
                <enso-code-view
                    .code="{{ manualExamples.importMap }}"
                    language="javascript"
                ></enso-code-view>
                <enso-code-view
                    .code="{{ manualExamples.import2 }}"
                    language="javascript"
                ></enso-code-view>
            </section>
        </div>
    `,
    
    script: {
        getHeadings() {
            return [
                { title: "Installing", link: "#installing" },
                { title: "NPM", link: "#npm" },
                { title: "CDN", link: "#cdn" },
                { title: "Manual", link: "#manual"}
            ];
        },
        getSection() {
            return "docs-getting-started";
        }
    } 
})
