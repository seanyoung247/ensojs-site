
export * from './ensorouter';


export function captureNavigation(router, base = '/docs') {

    navigation.addEventListener('navigate', e => {

        if (!e.canIntercept) return;

        const url = new URL(e.destination.url);

        if (url.origin !== location.origin) return;
        if (!url.pathname.startsWith(base)) return;

        e.intercept({
            async handler() {
                await router.load(url.pathname);
            }
        });
    });
}