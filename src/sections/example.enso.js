
import Enso, { css, html } from 'ensojs';
import { counterCode } from '../examplecode';
import "../components/layout/section.enso";
import "../components/counter.enso";


export default Enso.component('example-section', {
    settings: { useShadow: false },
    styles: css`
        .body-text {
            text-align: center;
        }

        .code-example {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            width: 100%;
        }
        .live-example {
            display: flex;
            justify-content: center;
            
            flex-wrap: wrap;
            padding-top: 0.5rem;
            & > code {
                margin-top: auto;
            }
            & > tiny-counter {
                flex: 1 1 25%;
                min-width: 100px;
                max-width: 200px;
                margin: 0.5rem 0.5rem auto;
            }
        }
    `,
    template: html`
        <site-section>
            <p class="body-text">
                A native-first microframework for building declarative Web Components.
            </p>
            <div class="code-example">
                <code class="code-pane">
                    ${ counterCode }
                </code>
                <div class="live-example">
                    <code class="code-pane">
                        <counter-html #ref="counter" count="5"></counter-html>
                    </code>
                    <tiny-counter value="5" 
                        @changed="(e)=>#:counter.watched.count = e.detail"
                    >
                    </tiny-counter>
                </div>
            </div>
        </site-section>
    `
});
