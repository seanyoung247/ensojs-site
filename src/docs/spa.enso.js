
import Enso, { css, html, watches, lifecycle } from 'ensojs';
import { captureLinks, DocsRouter } from './router';
import { routes } from './pages/manifest';

Enso.component("enso-spa", {
    settings: { useShadow: false },
    styles: css`
        enso-spa {
            display: flex;
            width: 100%;
            height: 100%;
        }
        main {
            border: 1px solid red;
        }
    `,
    template: html`
        <slot></slot>
        <main #ref="outlet" id="outlet"></main>
    `,
    script: {
        router: null,

        onStart: watches(async function() {
            this.router = new DocsRouter(
                this.refs.outlet,
                routes,
                { defaultPage: 'test-page-1' }
            );

            captureLinks(this.router, '/docs');

            await this.router.load(location.pathname);
        }, [lifecycle.mount], false)
    }
});
