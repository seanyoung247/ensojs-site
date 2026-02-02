
import Enso, { css, html, prop } from 'ensojs';
import TreeItem from "./treeitem.enso";

Enso.component("enso-tree-view", {
    watched: {
        items: prop([], true),
    },
    styles: [css`
        :host { display: block; }
        ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }
    `],
    template: html`
        <ul>
            <li>
                
            </li>
        </ul>
    `
});
