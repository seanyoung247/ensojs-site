
import { Enso, html, css, prop, watches } from 'ensojs';
import Prism from 'prismjs';

import Reset from '../styles/reset.css?inline';
import Code from '../styles/code.css?inline';


export default Enso.component('enso-code-view', {
    watched: {
        code: prop('')
    },

    styles: [css(Reset), css(Code)],
    template: html`
        <pre>
            <code #ref="codePane"
                class="code-pane"
            ></code>
        </pre>
    `,

    script: {
        highlight: watches(function() {
            this.refs.codePane.innerHTML = (
                Prism.highlight( this.code,
                    Prism.languages.javascript,
                    'javascript'
                )
            );
        }, ['code'])
    }
});

