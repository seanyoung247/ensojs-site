
import { Enso, html, css, prop, attr, watches, lifecycle } from 'ensojs';
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
        <pre><code #ref="codePane"
            class="code-pane scroll-hint"
            part="code-pane"
        ></code></pre>
    `,

    script: {
        updated: watches(function() {
            this.refs.codePane.innerHTML = Prism.highlight(
                this.code, 
                Prism.languages[this.language],
                this.language
            );
        }, [lifecycle.update], false),
    }
});
