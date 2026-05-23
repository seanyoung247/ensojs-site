
export default {
    async fetch(request, env) {

        const url = new URL(request.url);

        // Try actual static asset first
        const asset = await env.ASSETS.fetch(request);

        if (asset.status !== 404) {
            return asset;
        }

        // SPA fallback for docs routes
        if (url.pathname.startsWith('/docs/')) {

            return env.ASSETS.fetch(
                new Request(
                    `${url.origin}/docs/index.html`,
                    request
                )
            );
        }

        // Main site fallback
        return env.ASSETS.fetch(
            new Request(
                `${url.origin}/index.html`,
                request
            )
        );
    }
};
