
export default {
    async fetch(request, env) {

        const url = new URL(request.url);

        // Serve real files normally
        if (url.pathname.includes('.')) {
            return env.ASSETS.fetch(request);
        }

        // Docs SPA routes
        if (url.pathname.startsWith('/docs/')) {

            return env.ASSETS.fetch(
                new Request(
                    `${url.origin}/docs/index.html`
                )
            );
        }

        // Main site
        return env.ASSETS.fetch(
            new Request(
                `${url.origin}/index.html`
            )
        );
    }
};
