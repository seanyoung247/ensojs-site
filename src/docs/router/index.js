

function getSlug() {
    const path = location.pathname.replace(/\/$/, '');
    const slug = path.split('/').pop();
    return slug || 'intro';
}

