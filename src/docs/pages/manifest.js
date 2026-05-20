
/*
 * Section
 *   -> Pages
 *        -> Headings
 */

export const pages = [
    // Test section
    {
        title: "Test",
        children: [
            {
                id: "test-page-1",
                title: "Intro test",
                loader: () => import('./intro.enso')
            }
        ]
    },
    // Test 2 section
    {
        title: "Test2",
        children: [
            {
                id: "test-page-2",
                title: "Test page 2",
                loader: () => import('./testpage2.enso')
            }
        ]
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