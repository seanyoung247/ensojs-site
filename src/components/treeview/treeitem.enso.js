
import Enso, { css, html, prop } from 'ensojs';


export default Enso.component("enso-tree-item", {
    watched: {
        item: prop(null)
    },
    styles: css`

        ul { list-style: var(--list-style); }
        a {
            color: var(--item-color);
            text-decoration: var(--link-style);
        }
    `,
    template: html`
        <a *if="{{ !@:item.children?.length }}" 
            :href="{{ @:item.link }}"
            part="item-link"
        >
            {{ @:item.title }}
        </a>

        <details *if="{{ @:item.children?.length }}">
            <summary>
                <a :href="{{ @:item.link }}" part="item-link">
                    {{ @:item.title }}
                </a>
            </summary>
            <ul *if="{{ @:item.children?.length }}">
                <li *for="it of @:item.children">
                    <enso-tree-item .item="{{ it }}"></enso-tree-item>
                </li>
            </ul>
        </details>
    `

});
