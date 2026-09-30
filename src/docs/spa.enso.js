
import Enso, { css, html, watches, lifecycle, prop } from 'ensojs';
import { captureNavigation, EnsoRouter } from './router';
import { routes } from './pages/manifest';

import Nav from "../sections/nav.enso";

import Reactive from '@styles/reactive.css?inline';
import Theme from '@styles/theme.css?inline';

const spaBase = (
    `${new URL('./', import.meta.url).pathname}/`
).replace(/\/+$/, '/');

Enso.component("enso-spa", {
    watched: { headings: prop([]) },

    styles: [css(Theme), css(Reactive), css`
        enso-spa {
            width: 100%;
        }
        main {
            padding: 3rem 0.5rem 0.5rem;
            display: flex;
            flex-flow: column no-wrap;
            color: var(--primary-text);
        }
        nav {

            width: 300px;
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
            ]`
        }) }

        <main id="main-content">
            <nav aria-label="Documentation page navigation">
                <slot></slot>
            </nav>
            <section 
                #ref="outlet" id="outlet"
                aria-label="Documentation content"
            >
            </section>
        </main>
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
