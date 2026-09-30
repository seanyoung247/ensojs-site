
/*
 * Section
 *   -> Pages
 *        -> Headings
 */

export const pages = [
    // Getting Started Section
    {
        id: "docs-getting-started",
        title: "Getting Started",
        children: [
            {
                id: "intro-about-page",
                title: "About",
                link: "intro-about-page",
                loader: () => import('./intro/about.enso'),
            },
            {
                id: "install-about-page",
                title: "Installing",
                link: "install-about-page",
                loader: () => import('./intro/install.enso'),
            },
            {
                id: "first-about-page",
                title: "Basic Component",
                link: "first-about-page",
                loader: () => import('./intro/first.enso'),
            },
        ]
    },
    // Components Section
    {
        id: "docs-components-section",
        title: "Components",
    },
    // Reference Section
    {
        id: "docs-reference-section",
        title: "Reference",
    },

];


function flattenRoutes(tree, routes = {}) {
    for (const item of tree) {
        if (item.id && item.loader) {
            routes[item.id] = item.loader;
        }

        if (item.children) {
            flattenRoutes(item.children, routes);
        }
    }

    return routes;
}


export const routes = flattenRoutes(pages);