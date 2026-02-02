
import Enso, { css, html } from 'ensojs';
import { stylesEx, templateEx, watchedEx, scriptEx } from '../examplecode';

import "@components/layout/section.enso";
import "@components/annotatedCode.enso";
import "@components/tabs/";

import Reset from "@styles/reset.css?inline";


export default Enso.component('overview-section', {
    settings: { useShadow: false },
    styles: [css(Reset), css`
        overview-section > site-section {
            --height: auto;
            --align: start;

        }
        enso-tabbed-view {
            --tab-bg: var(--back-overlay);
            --tab-active-bg: color-mix(
                in srgb,
                var(--back-overlay) 85%,
                var(--stroke-color)
            );
            --tab-fg: var(--secondary-text);
            --tab-active-fg: var(--primary-text);
            --tab-separator: var(--stroke-color);
            --tab-padding: 0;
            --tab-radius: 0;
            --tab-gap: 0;
            &::part(tab) {
                border-bottom: 1px solid var(--stroke-color);
            }
            @media(hover: hover) {
                &::part(tab):hover {
                    color: var(--tab-active-fg);
                }
            }
            &::part(tab active) {
                border-bottom: 2px solid var(--accent-color);
            }
        }
        enso-tab-panel {
            border-top: 2px solid transparent;
            padding: var(--space-md);
            background: var(--tab-active-bg);
        }
        annotated-code {
            height: min(50dvh, 500px);
            & [data-title][data-description]::after {
                content: '[' attr(data-index) ']';
                vertical-align: super;
                font-size: 0.75em;
                color: var(--muted-text);
            }
            @media (min-width: 900px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                height: 500px;
            }
        }
    `],
    template: html`
        <site-section id="overview">
            <h3>Enso Overview</h3>
            <enso-tabbed-view tab-width="equal">
                <enso-tab-panel title="Templates">
                    <annotated-code>
                        ${ templateEx }
                    </annotated-code>
                </enso-tab-panel>
                <enso-tab-panel title="Styles">
                    <annotated-code>
                        ${ stylesEx }
                    </annotated-code>
                </enso-tab-panel>
                <enso-tab-panel title="Watched">
                    <annotated-code>
                        ${ watchedEx }
                    </annotated-code>
                </enso-tab-panel>
                <enso-tab-panel title="Script">
                    <annotated-code>
                        ${ scriptEx }
                    </annotated-code>
                </enso-tab-panel>
            </enso-tabbed-view>
        </site-section>
    `
});