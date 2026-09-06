
export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        const isDocs =
            url.hostname === 'docs.localhost' ||
            url.hostname === 'docs.ensojs.dev';

        if (request.headers.get('sec-fetch-mode') === 'navigate') {
            const entry = isDocs
                ? '/docs/index.html'
                : '/index.html';

            return env.ASSETS.fetch(
                new URL(entry, request.url)
            );
        }

        return env.ASSETS.fetch(request);
    }
};