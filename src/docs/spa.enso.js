
import { Enso, css, html, watches, lifecycle, prop, attr } from 'ensojs';
import { comp } from 'ensojs/helpers';

import { captureNavigation, EnsoRouter } from './router';
import { routes, pages as docs } from './pages/manifest';
import { siteUrl } from '../urls';

import NavComp from "../sections/nav.enso";
import FooterComp from "../sections/footer.enso";

import Reactive from '@styles/reactive.css?inline';
import Theme from '@styles/theme.css?inline';
import Reset from "@styles/reset.css?inline";
import Code from "@styles/code.css?inline";

const Nav = comp(NavComp);
const Footer = comp(FooterComp)

const spaBase = '/';

Enso.enableDiagnostics();
Enso.component("enso-spa", {
    settings: { useShadow: false },
    watched: { 
        headings: prop([]),
        section: attr('')
    },
    expose: { docs },

    styles: [css(Reset), css(Theme), css(Code), 
                css(Reactive), css`
        enso-spa {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            min-height: 100dvh;
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

        section, article {
            scroll-margin-top: 80px;
        }

        @media (min-width: 768px) {
            main {
                display: grid;
                grid-template-columns:
                    var(--docs-nav-width)
                    minmax(0, var(--max-content));

                justify-content: center;
            }
            #outlet {
                grid-column: 2;
            }
        }

        @media (min-width: 1250px) {
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
            <div 
                #ref="outlet" id="outlet"
                aria-label="Documentation content"
            >
            </div>
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
                    defaultPage: 'about-enso'
                }
            );

            captureNavigation(this.router, spaBase);
            this.router.addEventListener("page-loaded", e=>{
                const component = e.detail;
                this.headings = component?.getHeadings?.() ?? [];
                this.section = component?.getSection?.() ?? '';
            });

            await this.router.load(location.pathname);

        }, [lifecycle.mount], false)
    }
});
