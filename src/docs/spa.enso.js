
import Enso, { css, html, watches, lifecycle, prop } from 'ensojs';
import { captureNavigation, EnsoRouter } from './router';
import { routes, pages as docs } from './pages/manifest';

import Nav from "../sections/nav.enso";
import "../components/treeview";
import Footer from "../sections/footer.enso";

import Reactive from '@styles/reactive.css?inline';
import Theme from '@styles/theme.css?inline';
import Reset from "@styles/reset.css?inline";
import Code from "@styles/code.css?inline";

const spaBase = (
    `${new URL('./', import.meta.url).pathname}/`
).replace(/\/+$/, '/');

Enso.component("enso-spa", {
    watched: { headings: prop([]) },
    expose: { docs },

    styles: [css(Reset), css(Theme), css(Code), 
                css(Reactive), css`

        enso-spa {
            width: 100%;
        }
        main {
            padding: 3rem 0.5rem 0.5rem;
            display: flex;
            align-items: center;
            flex-flow: column nowrap;
            color: var(--primary-text);
        }
    `],

    template: html`
        ${ Nav.html({
            class: "constrained",
            '.headings': `{{ @:headings }}`,
            '.pages': `[
                { title: 'EnsoJS', link: '/' },
                { title: 'GitHub', link: 'https://github.com/seanyoung247/ensoJS' }
            ]`,
            '.docs': '{{ docs }}'
        }) }

        <main id="main-content">
            <div class="left spacer"></div>
            <section 
                #ref="outlet" id="outlet"
                class="constrained"
                aria-label="Documentation content"
            >
            </section>
            <div class="right spacer"></div>
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
                this.headings = e.detail?.getHeadings() ?? [];
            });

            await this.router.load(location.pathname);

        }, [lifecycle.mount], false)
    }
});
