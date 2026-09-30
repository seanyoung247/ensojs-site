
import { Enso, html, css, prop, attr } from "ensojs";

import "./codeView.enso";


Enso.component("annotated-code-view", {
    watched: {
        sections: prop([]),
        language: attr('javascript')
    },

    styles: [css`
        enso-code-view {
            &::part(code-pane) {
                margin-block: 0;
                border-radius: 0;
            }
        }
    `],

    template: html`
        <section *for="section of @:sections">

            <div class="annotation">
                <h2>{{ section.title }}</h2>
                <p>{{ section.description }}</p>
            </div>

            <enso-code-view
                .code="{{ section.code }}"
                :language="{{ @:language }}"
            ></enso-code-view>
        </section>
    `
});
