
const port = location.port ? `:${location.port}` : '';

const baseHost = location.hostname.startsWith('docs.')
    ? location.hostname.slice(5)
    : location.hostname;

export const siteUrl =
    `${location.protocol}//${baseHost}${port}/`;

export const docsUrl =
    `${location.protocol}//docs.${baseHost}${port}/`;
