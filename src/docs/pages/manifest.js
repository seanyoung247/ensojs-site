
export const pages = [
    { 
        id: "intro",
        title: "Introduction",
        link: "intro",
        load() { return import("./intro.enso.js") },
    }
];