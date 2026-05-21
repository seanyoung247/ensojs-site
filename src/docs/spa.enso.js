
import Enso, { css, html, watches, lifecycle } from 'ensojs';
import { captureNavigation, DocsRouter } from './router';
import { routes } from './pages/manifest';

const appBase = new URL('docs/', location.origin + import.meta.env.BASE_URL).pathname;

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
                {
                    base: appBase,
                    defaultPage: 'test-page-1'
                }
            );

            captureNavigation(this.router, appBase);

            await this.router.load(location.pathname);
        }, [lifecycle.mount], false)
    }
});
