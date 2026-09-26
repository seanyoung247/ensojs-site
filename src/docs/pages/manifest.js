
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
                id: "components-creation",
                title: "Creation",
                link: "components-creation",
                loader: () => import('./components/creation.enso'),
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
        children: [
            {
                id: "reference-html",
                title: "html()",
                link: "reference-html",
                loader: ()=> import('./reference/html.enso')
            },
            {
                id: "reference-css",
                title: "css()",
                link: "reference-css",
                loader: ()=> import('./reference/css.enso')
            },
            {
                id: "reference-prop",
                title: "prop()",
                link: "reference-prop",
                loader: ()=> import('./reference/prop.enso')
            },
            {
                id: "reference-attr",
                title: "attr()",
                link: "reference-attr",
                loader: ()=> import('./reference/attr.enso')
            },
            {
                id: "reference-computed",
                title: "computed()",
                link: "reference-computed",
                loader: ()=> import('./reference/computed.enso')
            },
            {
                id: "reference-watches",
                title: "watches()",
                link: "reference-watches",
                loader: ()=> import('./reference/watches.enso')
            },
            {
                id: "reference-getwatched",
                title: "getWatched()",
                link: "reference-getwatched",
                loader: ()=> import('./reference/getwatched.enso')
            },
            {
                id: "reference-setwatched",
                title: "setWatched()",
                link: "reference-setwatched",
                loader: ()=> import('./reference/setwatched.enso')
            },
        ] 
    },
    // Helpers Section
    {
        id: "docs-helpers-section",
        title: "Helpers",
        children: []
    }

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