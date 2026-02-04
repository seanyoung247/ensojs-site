
import Enso, { css, html, prop } from 'ensojs';


export default Enso.component("enso-tree-item", {
    watched: {
        item: prop(null)
    },
    template: html`
        <span>{{ item.title }}</span>
    `,
});
