
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


export default Enso.component('components-templates-page', {
    settings: { useShadow: false },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="#component-templates-field">
                <h1>Templates</h1>
                <!-- template: -->
                <!-- html -->
                <!-- {{}} -->
                <!-- enso:ignore, enso:ignore-children -->

            </section>
            <section id="#component-templates-bindings">
                <h2>Bindings</h2>
                <!-- attributes :attribute, enso-attr:attribute -->
                <!-- properties .property, enso-prop:property -->
                <!-- references #<ref name>, enso-event:<ref name> -->
                <!-- events @<event name>, enso-event:<event name> -->

            </section>
            <section id="#component-templates-directives">
                <h2>Directives</h2>
                <!-- *if, enso-if -->
                <!-- *for, enso-for -->

            </section>
        </div>
    `,  

    script: {
        getHeadings() {
            return [
                { title: "Templates", link: "#component-templates-field" },
                { title: "Bindings", link: "#component-templates-bindings" },
                { title: "Directives", link: "#component-templates-directives" }
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
