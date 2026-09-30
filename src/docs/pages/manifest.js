
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
        children: [
            {
                id: "components-overview",
                title: "Overview",
                link: "components-overview",
                loader: () => import('./components/overview.enso'),
            },
            {
                id: "components-templates",
                title: "Templates",
                link: "components-templates",
                loader: () => import('./components/templates.enso'),
            },
            {
                id: "components-styles",
                title: "Styles",
                link: "components-styles",
                loader: () => import('./components/styles.enso'),
            },
            {
                id: "components-watched",
                title: "Watched",
                link: "components-watched",
                loader: () => import('./components/watched.enso'),
            },
            {
                id: "components-expose",
                title: "Expose",
                link: "components-expose",
                loader: () => import('./components/expose.enso'),
            },
            {
                id: "components-script",
                title: "Script",
                link: "components-script",
                loader: () => import('./components/script.enso'),
            },
            {
                id: "components-settings",
                title: "Settings",
                link: "components-settings",
                loader: () => import('./components/settings.enso'),
            },
            {
                id: "components-lifecycle",
                title: "Lifecycle",
                link: "components-lifecycle",
                loader: () => import('./components/lifecycle.enso'),
            },
        ]
    },
    // Reference Section
    {
        id: "docs-reference-section",
        title: "Reference",
        children: [] 
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