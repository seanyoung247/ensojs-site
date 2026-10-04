import { Enso, css, html } from 'ensojs';

import '@components/codeView.enso';
import '@components/docsSignature.enso';
import '@components/docsTable.enso';

import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


const examples = {
    usage:
`const rng1 = range(5);        // 0, 1, 2, 3, 4
const rng2 = range(1,5);      // 1, 2, 3, 4
const rng3 = range(1,5,2);    // 1, 3
const rng4 = range(0,1,0.25); // 0, 0.25, 0.5, 0.75`,
    iteration:
`const rng = range(5);
for (const i of rng) {
    console.log(i); // 0, 1, 2, 3, 4
}`,
    methods:
`const rng = range(1,6);         // 1, 2, 3, 4, 5
console.log(rng.step(2));       // 3
console.log(rng.indexOf(4));    // 3
console.log(rng.inRange(6));    // false
console.log(rng.wrap(8));       // 3
console.log(rng.clamp(8));      // 5`
};

export default Enso.component('helpers--page', {
    settings: { useShadow: false },
    expose: { examples },
    styles: [css(Reset), css(DocStyles)],

    template: html`
        <div class="document">
            <section id="helpers-range">
                <h1>range()</h1>
                <enso-func-sig
                    name="range" 
                    .params="['start', 'stop', 'step']"
                    returns="Range"
                ></enso-func-sig>
                <docs-table 
                    .headers="['Parameter', 'Type', 'Description']"
                    .rows="[
                        ['start', 'number', 'Start of the range. With one argument, this is treated as stop.'],
                        ['stop', 'number', 'Exclusive end of the range.'],
                        ['step', 'number', 'Amount to increment or decrement each step. Defaults to 1.']
                    ]"
                ></docs-table>
                <p class="spaced">
                    The <code class="callout">range()</code> function constructs and returns a 
                    <code class="callout">Range</code> object with the given start, stop, and step
                    values. The stop value is exclusive.
                </p>
                <p>
                    <code class="callout">start</code> defaults to 0 and <code class="callout">step</code>
                    defaults to 1. If a single value is given, it is treated as <code class="callout">stop</code>,
                    producing a range from 0 up to, but not including, that value.
                </p>
                <enso-code-view
                    .code="examples.usage"
                    language="javascript"
                ></enso-code-view>
                <section>
                    <h2>Range class</h2>
                    <p>
                        The <code class="callout">Range</code> class models a range of values and allows them
                        to be iterated and manipulated.
                    </p>
                    <enso-code-view
                        .code="examples.iteration"
                        language="javascript"
                    ></enso-code-view>
                    <p class="spaced">
                        The <code class="callout">Range</code> class is immutable. Once created, its start, stop
                        and step values cannot be altered.
                    <p>
                        The <code class="callout">Range</code> class has the following read-only properties:
                    </p>
                    <docs-table 
                        .headers="['Property', 'Type', 'Description']"
                        .rows="[
                            ['start', 'number', 'The start value of the Range.'],
                            ['stop', 'number', 'The exclusive end of the Range.'],
                            ['size', 'number', 'The number of values in the Range.'],
                            ['stepSize','number','The difference between two values in the Range.'],
                            ['lastStep','number','The last value in the Range.']
                        ]"
                    ></docs-table>
                    <p class="spaced">
                        <code class="callout">Range</code> provides these methods:
                    </p>
                    <docs-table 
                        .headers="['Method', 'Parameters', 'Description']"
                        .rows="[
                            ['step', 'index', 'Returns the value at the given index in the Range.'],
                            ['indexOf', 'value', 'Returns the index of the value passed in the Range, or -1 if not in Range.'],
                            ['inRange', 'value', 'Returns true if value is a valid step in the Range, otherwise false.'],
                            ['wrap', 'value', 'Returns the closest step in the Range to value, wrapping at the extremes.'],
                            ['clamp', 'value', 'Returns the closest step in the Range to value, clamping at the extremes.']
                        ]"
                    ></docs-table>
                    <enso-code-view
                        .code="examples.methods"
                        language="javascript"
                    ></enso-code-view>
                </section>
            </section>
        </div>
    `, 

    script: {
        getHeadings() {
            return [
                { title: "Range", link: "#helper-range" },
            ];
        },
        getSection() {
            return "docs-helpers-section";
        }
    }
});
