
import Enso, { css, html, prop } from 'ensojs';


export default Enso.component("enso-tree-item", {
    watched: {
        item: prop(null)
    },
    template: html`

        

        <a *if="{{ @:item.link }}" :href="{{ @:item.link }}">{{ @:item.title }}</a>
        <span *if="{{ !@:item.link }}">{{ @:item.title }}</span>


    `,

});
