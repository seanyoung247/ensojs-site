
export * from './docsRouter';

export function getSlug() {
    const path = location.pathname.replace(/\/$/, '');
    const slug = path.split('/').pop();
    return slug || 'intro';
}

export function captureLinks(router, base = '/docs') {
    document.addEventListener('click', e => {
        if (e.defaultPrevented) return;

        if (e.button !== 0) return;

        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const link = e.target.closest('a');

        if (!link) return;

        if (link.target === '_blank') return;

        const url = new URL(link.href);

        if (url.origin !== location.origin) return;

        if (!url.pathname.startsWith(base)) return;

        e.preventDefault();

        router.navigate(url.pathname);
    });
}
