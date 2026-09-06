
import Enso, { css, html, watches, lifecycle, prop, attr } from 'ensojs';
import { captureNavigation, EnsoRouter } from './router';
import { routes, pages as docs } from './pages/manifest';

import Nav from "../sections/nav.enso";
import "../components/treeview";
import Footer from "../sections/footer.enso";

import Reactive from '@styles/reactive.css?inline';
import Theme from '@styles/theme.css?inline';
import Reset from "@styles/reset.css?inline";
import Code from "@styles/code.css?inline";
import { siteUrl } from '../urls';


const spaBase = '/';

Enso.component("enso-spa", {
    watched: { 
        headings: prop([]),
        section: attr('')
    },
    expose: { docs },

    styles: [css(Reset), css(Theme), css(Code), 
                css(Reactive), css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        main {
            flex: 1;
            display: grid;
            
            color: var(--primary-text);
            padding: 3rem var(--space-md) var(--space-md);
            
        }
        #outlet {
            padding: 0 var(--space-md);
            min-width: 0;
        }

        @media (min-width: 768px) {
            main {
                display: grid;
                grid-template-columns:
                    var(--docs-nav-width)
                    minmax(0, var(--max-content));

                justify-content: center;
            }

            .left.spacer {
                display: block;
            }

            #outlet {
                grid-column: 2;
            }
        }

        @media (min-width: 1580px) {
            main {
                display: grid;
                grid-template-columns:
                    minmax(0, var(--docs-nav-width))
                    minmax(0, var(--max-content))
                    minmax(0, var(--docs-nav-width));

                justify-content: center;
                color: var(--primary-text);
                padding: 3rem var(--space-md) var(--space-md);
            }
        }
    `],

    template: html`
        ${ Nav.html({
            class: "constrained",
            '.headings': `{{ @:headings }}`,
            '.pages': `[
                { title: 'EnsoJS', link: '${siteUrl}' },
                { title: 'GitHub', link: 'https://github.com/seanyoung247/ensoJS' }
            ]`,
            '.docs': '{{ docs }}',
            ':section': '{{ @:section }}' 
        }) }
        <main id="main-content">
            <section 
                #ref="outlet" id="outlet"
                class="constrained"
                aria-label="Documentation content"
            >
            </section>
        </main>
        ${ Footer.html({class:"constrained"}) }
    `,
    
    script: {
        router: null,

        onStart: watches(async function() {
            this.router = new EnsoRouter(
                this.refs.outlet,
                routes,
                {
                    base: spaBase,
                    defaultPage: 'intro-about-page'
                }
            );

            captureNavigation(this.router, spaBase);
            this.router.addEventListener("page-loaded", e=>{
                const component = e.detail;
                this.headings = component?.getHeadings() ?? [];
                this.section = component?.getSection() ?? '';
            });

            await this.router.load(location.pathname);

        }, [lifecycle.mount], false)
    }
});
