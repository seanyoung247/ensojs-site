
import Enso, { css, html } from 'ensojs';

import '@components/codeView.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    import:
`import { lifecycle } from 'ensojs';`,
    mount:
`Enso.component('enso-mount', {
    script: {
        onMount: watches(function() {
            console.log('mounted');
        }, [lifecycle.mount])
    }
});`,
    update:
`Enso.component('enso-update', {
    watched: {
        message: attr('Hello World!')
    },
    template: html\`
        <span #ref="msgEl">{{ @:message }}</span>
    \`,
    script: {
        onUpdate: watches(function() {
            this.refs.msgEl.innerText = "Brave New World";
        }, [lifecycle.update])
    }
});`,
    unmount:
`Enso.component('enso-unmount', {
    script: {
        _timer: null,

        onMount: watches(function() {
            this._timer = setInterval(() => {
                console.log('Tick');
            }, 1000);
        }, [lifecycle.mount]),

        onUnmount: watches(function() {
            clearInterval(this._timer);
        }, [lifecycle.unmount])
    }
});`,
    remounting:
`const counter = document.createElement('my-counter');

document.body.append(counter); // Mount
counter.count = 10;

counter.remove();              // Unmount

document.body.append(counter); // Mount again
console.log(counter.count);    // 10`,
};


export default Enso.component('components-lifecycle-page', {
    settings: { useShadow: false },
    expose: { examples },

    styles: [css(Reset), css(DocStyles)],
    
    template: html`
        <div class="document">
            <section id="component-lifecycle">
                <h1>Lifecycle</h1>
                <p>
                    The Enso component lifecycle is fairly straightforward,
                    and largely built around a normal element's lifecycle.
                </p>
                <p>
                    Components have the following lifecycle:
                </p>
                <ul>
                    <li>mount</li>
                    <li>update</li>
                    <li>unmount</li>
                </ul>
                <p>
                    There are lifecycle hooks for each of these, which you can use
                    with the lifecycle object:
                </p>
                <enso-code-view
                    .code="examples.import"
                    language="javascript"
                ></enso-code-view>
                <section>
                    <h2>Mount</h2>
                    <p>
                        When a component is connected to the document, it mounts. 
                        During mounting, Enso creates the component's internal HTML,
                        initialises its watched properties and runs its initial effects.
                    </p>
                    <p>
                        The <code class="callout">mount</code> lifecycle hook runs at
                        the end of the mount process. This allows component script code
                        to run as soon as the component has initialised and mounted in
                        the DOM.
                    </p>
                    <p>
                        You can use this hook with the <code class="callout">watches</code>
                        function.
                    </p>
                    <enso-code-view
                        .code="examples.mount"
                        language="javascript"
                    ></enso-code-view>
                </section>
                <section>
                    <h2>Update</h2>
                    <p>
                        When Enso detects that watched properties have changed, it
                        schedules a component update. Update runs just before the browser
                        paints, and runs any effects bound to changed properties, ensuring
                        the component HTML reflects its current state for the coming
                        frame.
                    </p>
                    <p>
                        The <code class="callout">update</code> lifecycle hook runs at
                        the end of the update process. At this point the component's
                        HTML will be updated, but the browser will not have painted yet.
                        This makes the <code class="callout">update</code> hook a good
                        time to make manual DOM changes if you need to.
                    </p>
                    <enso-code-view
                        .code="examples.update"
                        language="javascript"
                    ></enso-code-view>
                </section>
                <section>
                    <h2>Unmount</h2>
                    <p>
                        The <code class="callout">unmount</code> lifecycle hook runs at
                        the end of the unmounting process. The component and its data 
                        still exist, but the component has been disconnected from the DOM.
                        This makes the <code class="callout">unmount</code> hook a good
                        place to clean up resources created by the component, such as
                        timers, external event listeners and subscriptions.
                    </p>
                    <enso-code-view
                        .code="examples.unmount"
                        language="javascript"
                    ></enso-code-view>
                    <p>
                        Mounting and unmounting are not creation and destruction. A component
                        can be removed from the DOM and subsequently reattached. Its existing
                        instance and state are preserved, but its mount and unmount hooks run
                        again.
                    </p>
                    <enso-code-view
                        .code="examples.remounting"
                        language="javascript"
                    ></enso-code-view>
                </section>
                <section>
                    <h2>Watches and the Lifecycle</h2>
                    <p>
                        Watchers run as soon as their watched dependencies change, whereas
                        Enso schedules DOM updates for the next frame.
                    </p>
                    <p>
                        Because of this, you should avoid manually modifying the DOM in
                        ordinary watchers. Enso may subsequently overwrite those changes
                        when it updates the component.
                    </p>
                    <p>
                        If you need to manipulate the DOM after Enso has applied its changes,
                        use the <code class="callout">lifecycle.update</code> hook instead.
                        It runs after the component's reactive DOM updates, but before the
                        browser paints.
                    </p>
                </section>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Lifecycle", link: "#component-lifecycle" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
