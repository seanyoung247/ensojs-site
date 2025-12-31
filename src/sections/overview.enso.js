
import Enso, { css, html, attr } from 'ensojs';
import { stylesEx, templateEx, watchedEx } from '../examplecode';

import "@components/layout/section.enso";
import "@components/annotatedCode.enso";
import "@components/tabs/";

import Reset from "@styles/reset.css?inline";


export default Enso.component('overview-section', {
    settings: { useShadow: false },
    styles: [css(Reset), css`
        tabbed-view {
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
            &::part(tab):hover {
                color: var(--tab-active-fg);
            }
            &::part(tab active) {
                border-bottom: 2px solid var(--accent-color);
            }
        }
        tab-panel {
            border-top: 2px solid transparent;
            padding: var(--space-md);
            background: var(--tab-active-bg);
        }
        annotated-code {
            --code-height: 25em;

            & [data-title][data-description]::after {
                content: '[' attr(data-index) ']';
                vertical-align: super;
                font-size: 0.75em;
                color: var(--muted-text);
            }
        }
    `],
    template: html`
        <site-section id="overview">
            <h3>Enso Overview</h3>
            <tabbed-view tab-width="equal">
                <tab-panel title="Templates">
                    <annotated-code>
                        ${ templateEx }
                    </annotated-code>
                </tab-panel>
                <tab-panel title="Styles">
                    <annotated-code>
                        ${ stylesEx }
                    </annotated-code>
                </tab-panel>
                <tab-panel title="Watched">
                    <annotated-code>
                        ${ watchedEx }
                    </annotated-code>
                </tab-panel>
            </tabbed-view>
        </site-section>
    `
});