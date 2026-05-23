
export default {
    async fetch(request, env) {

        const url = new URL(request.url);

        // Try static asset first
        const asset = await env.ASSETS.fetch(request);

        // If asset exists, return it
        if (asset.status !== 404) {
            return asset;
        }

        // Docs SPA fallback
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
