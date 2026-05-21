
import Enso, { css, html, prop } from 'ensojs';


export default Enso.component("enso-tree-item", {
    watched: {
        item: prop(null)
    },
    template: html`
        <a *if="{{ !@:item.children?.length }}" :href="{{ @:item.link }}">{{ @:item.title }}</a>

        <details *if="{{ @:item.children?.length }}">
            <summary><a :href="{{ @:item.link }}">{{ @:item.title }}</a></summary>
            <ul *if="{{ @:item.children?.length }}">
                <li *for="it of @:item.children">
                    <enso-tree-item .item="{{ it }}"></enso-tree-item>
                </li>
            </ul>
        </details>
    `

});
