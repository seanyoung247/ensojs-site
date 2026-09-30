import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`const style = cssObj({
    '.myStyle': {
        backgroundColor: 'red',
        borderRadius: '1em',
    },
    table: { display: 'flex' }   
});

console.log(style);
/*
    .myStyle {
        background-color: red;
        border-radius: 1em;
    }
    table {
        display: flex;
    }
*/
css(style);
`
};

export default Enso.component('helpers-cssobj-page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-cssobj">
                <h1>cssObj()</h1>
                <enso-func-sig
                    name="cssObj" 
                    .params="['css']"
                    returns="string"
                ></enso-func-sig>
                <p class="spaced">
                    The <code class="callout">cssObj()</code> function takes a JavaScript object literal and
                    converts it into a string of CSS rules, converting camelCase property names to CSS
                    dash-case.
                </p>

                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>

            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "CSSObj", link: "#helper-cssobj" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
