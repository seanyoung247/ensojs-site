
import page404 from "./404.enso";

export class DocsRouter {
    #outlet;
    #pages;
    #defaultPage;
    #base;

    constructor(outlet, pages, options = {}) {
        this.#outlet = outlet;
        this.#pages = pages;
        this.#defaultPage = options.defaultPage ?? 'intro';
        this.#base = options.base ?? '/';
    }
 
    normalize(pathname) {

        console.log(this.#base);
        if (this.#base !== '/' &&
            pathname.startsWith(this.#base)) {

            pathname = pathname.slice(this.#base.length);
        }

        return pathname;
    }

    async navigate(path) {

        const target = new URL(path, location.origin);

        history.pushState({}, '', target.pathname);

        await this.load(target.pathname);
    }

    async load(pathname) {

        pathname = this.normalize(pathname);

        const parts = pathname.split('/').filter(Boolean);

        const pageID =
            parts.pop() || this.#defaultPage;

        const loader = this.#pages[pageID];

        const page =
            (!loader)
                ? page404
                : (await loader()).default;

        const component = page();
        this.#outlet.replaceChildren(component);
        return component;
    }
}