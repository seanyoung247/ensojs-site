
import { Enso, html, css, prop, attr, watches } from 'ensojs';
import Prism from 'prismjs';

import Reset from '../styles/reset.css?inline';
import Code from '../styles/code.css?inline';


export default Enso.component('enso-code-view', {
    watched: {
        code: prop(''),
        language: attr('javascript')
    },

    styles: [css(Reset), css(Code)],
    template: html`
        <pre>
            <code #ref="codePane"
                class="code-pane">
            </code>
        </pre>
    `,

    script: {
        highlight: watches(function() {
            if (!this.refs.codePane) return;

            const grammar = Prism.languages[this.language];

            this.refs.codePane.innerHTML = (
                Prism.highlight( this.code,
                    grammar, this.language
                )
            );
        }, ['code', 'language'])
    }
});

