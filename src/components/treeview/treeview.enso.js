
import Enso, { css, html, prop, watches, lifecycle } from 'ensojs';
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
            <li *for="item of @:items">
                <enso-tree-item .item="{{ item }}"></enso-tree-item>
            </li>
        </ul>
    `,

    // script: {
    //     onStart: watches(function() {
    //         console.log(this.items.children?.length);
    //     }, [lifecycle.mount], false)
    // }
});

// ${ TreeItem.html({'.item': "{{ item }}"} ) }