
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import 'prismjs/components/prism-bash';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const npmExamples = {
    install:
`npm install ensojs`,
    import:
`import Enso, { html, css, prop } from 'ensojs';`,
};


export default Enso.component('install-about-page', {
    expose: { npmExamples },
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
