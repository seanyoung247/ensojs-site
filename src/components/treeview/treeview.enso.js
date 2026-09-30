
import Enso, { css, html, prop, watches, lifecycle } from 'ensojs';
import TreeItem from "./treeitem.enso";


Enso.component("enso-tree-view", {
    watched: {
        items: prop([], true),
    },
    styles: [css`
        :host {
            display: block; 

            --item-color: white;
            --link-style: none;
            --list-style: '-';
        }
        ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }
    `],
    template: html`
        <ul>
            <li *for="item of @:items">
                <enso-tree-item .item="{{ item }}"></enso-tree-item>
            </li>
        </ul>
    `,
});
