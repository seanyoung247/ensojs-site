
import page404 from "./404.enso";

export class DocsRouter {
    #outlet;
    #pages;
    #defaultPage;
    
    constructor(outlet, pages, options = {}) {
        this.#outlet = outlet;
        this.#pages = pages;
        this.#defaultPage = options.defaultPage ?? 'intro';

        window.addEventListener('popstate', () => {
            this.load(location.pathname);
        });
    }

    async navigate(path) {
        history.pushState({}, '', path);
        await this.load(path);
    }

    async load(pathname) {
        const parts = pathname.split('/');
        const pageID = parts.pop() || this.#defaultPage;
        const loader = this.#pages[pageID];
        const page = (!loader) ? page404 : (await loader()).default; 

        this.#outlet.replaceChildren(page());
    }
}
