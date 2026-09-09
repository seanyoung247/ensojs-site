
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
                id: "about-enso",
                title: "About",
                link: "about-enso",
                loader: () => import('./intro/about.enso'),
            },
            {
                id: "installing-enso",
                title: "Installing",
                link: "installing-enso",
                loader: () => import('./intro/install.enso'),
            },
            {
                id: "first-enso-component",
                title: "Basic Component",
                link: "first-enso-component",
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