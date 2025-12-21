
import Enso, { css, html } from 'ensojs';
import "../components/section.enso";


export default Enso.component("why-enso", {
    settings: { useShadow: false },
    styles: css`
        .why-enso-grid {
            width: 100%;
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.5rem;
            & > .why-card {
                background: var(--back-overlay);
                border-radius: 0.75rem;
                padding: 1.25rem;
                color: var(--primary-text);
                transition: 
                    transform 200ms ease, 
                    box-shadow 200ms ease;
                &:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                }
                & h4 {
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                    border-bottom: 1px solid var(--stroke-color);
                }
                & .lede {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                & p {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: var(--secondary-text);
                }
            }
        }
    `,
    template: html`
        <site-section id="why-enso">
            <h3>Why Enso?</h3>

            <ul class="why-enso-grid">
                <li class="why-card">
                    <h4>Minimal</h4>
                    <p class="lede">~7kb gzipped.</p>
                    <p>
                        Write components directly, no required build step,
                        no compilation pipeline, no framework ceremony.
                    </p>
                </li>

                <li class="why-card">
                    <h4>Fast</h4>
                    <p class="lede">
                        Updates are scheduled efficiently and applied directly to the DOM.
                    </p>
                    <p>
                        No virtual DOM, no diffing abstractions,
                        just precise updates, when they're needed.
                    </p>
                </li>

                <li class="why-card">
                    <h4>Reactive</h4>
                    <p class="lede">
                        Reactive state updates templates automatically.
                    </p>
                    <p>
                        Data drives rendering, rendering drives lifecycle,
                        with predictable timing.
                    </p>
                </li>

                <li class="why-card">
                    <h4>Native</h4>
                    <p class="lede">
                        Built on Web Components and the platform itself.
                    </p>
                    <p>
                        Encapsulated styles, real custom elements,
                        no runtime illusion.
                    </p>
                </li>
            </ul>
        </site-section>
    `
});
