
import Enso, { css, html, attr, watches } from 'ensojs';

Enso.component('tiny-counter', {
    watched: { value: attr(0) },
    styles: css`:host{
        display:flex;
        justify-content:space-between;
    }`,
    template: html`
        <button @click="()=>@:value--">-</button>
        {{ @:value }}
        <button @click="()=>@:value++">+</button>
    `,
    /* Added to update parent with value */
    script: {
        onChange: watches(function() {
            const event = new CustomEvent('changed', {
                detail: this.watched.value
            })
            this.dispatchEvent(event);
        }, ['value'])
    }
});
