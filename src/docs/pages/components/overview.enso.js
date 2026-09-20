
import { Enso, css, html, attr, prop } from 'ensojs';
import { range } from 'ensojs/helpers';

import '@components/codeView.enso';
import '@components/annotatedCodeView.enso';

import DocStyles from "@styles/documentation.css?inline";
import Slideshow from "./slideshow.css?inline";
import Reset from "@styles/reset.css?inline";

Enso.component('enso-slide-show', {
    watched: {
        slides: prop([]),
        slide: attr(0, Number),
    },
    expose: { range }, 
    styles: [css(Reset), css(Slideshow), css`
        :host {
            display: block;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    `],

    template: html`
        <slot @slotchange="this.slotchanged"></slot>
        <button id="prev"
            @click="()=>this.setSelected(@:slide - 1)">
            &#60;
        </button>
        <button id="next"
            @click="()=>this.setSelected(@:slide + 1)">
            &#62;
        </button>
        <ul id="indicators">
            <li *for="i of range(@:slides.length)"
                :class="{{ i === @:slide && 'active' }}"
                @click="()=>this.setSelected(i)"
            ></li>
        </ul>
    `,
    script: {
        _range: range(0),

        slotchanged(e) {
            this.slides = e.target.assignedElements();
            this._range = range(this.slides.length);
            
            if (this.slides.length) {
                this.setSelected(this.slide);
            }
        },
        
        setSelected(which) {
            const selected = this._range.wrap(which);
            if (this.slide !== selected) this.slide = selected;

            for (let i = 0; i < this.slides.length; i++) {
                const slide = this.slides[i];
                if (i === this.slide) slide.classList.add('active');
                else slide.classList.remove('active');
            }
        }
    }
});


const slides = [
    {
        img: "john-fowler-unsplash.jpg",
        link: "https://unsplash.com/photos/canyon-beneath-the-stars-03Pv2Ikm5Hk",
        author: "John Fowler",
        portfolio: "https://unsplash.com/@wildhoney"
    },
    {
        img: "bailey-zindel-unsplash.jpg",
        link: "https://unsplash.com/photos/river-in-yosemite-valley-at-low-light-NRQV-hBF10M",
        author: "Bailey Zindel",
        portfolio: "https://unsplash.com/@baileyzindel"
    },
    {
        img: "pietro-de-grandi-unsplash.jpg",
        link: "https://unsplash.com/photos/three-brown-wooden-boat-on-blue-lake-water-taken-at-daytime-T7K4aEPoGGk",
        author: "Pietro de Grandi",
        portfolio: "https://unsplash.com/@peter_mc_greats"
    },
    {
        img: "pine-watt-unsplash.jpg",
        link: "https://unsplash.com/photos/aerial-shot-of-forest-2Hzmz15wGik",
        author: "Pine Watt",
        portfolio: "https://unsplash.com/@pinewatt"
    }
];


const sections = [
    {
        id: "enso-imports",
        title: "Enso Imports",
        description:
            "Enso's features are opt in via named imports. " + 
            "You can also import external stylesheets and HTML templates, " +
            "either with a build tool (Vite here) or using Enso's load() helper.",
        related: [
            { title: "css", href: "" },
            { title: "html", href: "" },
            { title: "attr", href: "" },
            { title: "prop", href: "" },
            { title: "load", href: "" },
        ],
        code: 
`import { Enso, css, html, attr, prop } from 'ensojs';
import { range } from 'ensojs/helpers';

import Slideshow from "./slideshow.css?inline";
import Reset from "@styles/reset.css?inline";`
    },
    {
        id: "enso-components",
        title: "Enso Components",
        description: 
            "Enso.component() defines and registers a custom element. " +
            "It takes a tag name and an object describing the component " +
            "and its behaviour.",
        related: [
            { title: "component", href: "" },
            { title: "define", href: "" },
            { title: "register", href: "" }
        ],
        code:
`
Enso.component('enso-slide-show', {
`
    },
    {
        id: "enso-watched",
        title: "Watched Properties",
        description: 
            "Watched values provide reactive component state. prop() creates a " +
            "JavaScript property that can accept complex data such as objects. " +
            "attr() creates an HTML attribute with Boolean, Number or String values.",
        related: [
            { title: "watched", href: "components-watched" },
            { title: "prop", href: "" },
            { title: "attr", href: ""},
            { title: "computed", href: "" }
        ],
        code: 
`   watched: {
        slides: prop([]),
        slide: attr(0, Number),
    },
`
    },
    {
        id: "enso-expose",
        title: "Exposed Values",
        description:
            "Expose makes values and objects available within the component's " +
            "HTML template. Here, range is exposed so the template can generate " +
            "one indicator for each slide.",
        related: [
            { title: "expose", href: "components-expose" }
        ],
        code: 
`    expose: {
        range
    }, 
`
    },
    {
        id: "enso-styles",
        title: "CSS Stylesheets",
        description:
            "An Enso component can have multiple stylesheets. " +
            "css() can accept template literals or strings, " +
            "allowing imported and inline styles to be composed together.",
        related: [
            { title: "styles", href: "components-styles" },
            { title: "css", href: "" }
        ],
        code: 
`    styles: [css(Reset), css(Slideshow), css\`
        :host {
            display: block;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    \`],
`
    },
    {
        id: "enso-templates",
        title: "Reactive Templates",
        description: 
            "template is the only required field for a component. " +
            "html defines the component's declarative template. " + 
            "Enso extends HTML with reactive expressions, event bindings, " + 
            "and structural directives such as *for.",
        related: [
            { title: "template", href: "components-templates" },
            { title: "html", href: "" }
        ],
        code: 
`    template: html\`
        <slot @slotchange="this.slotchanged"></slot>
        <button id="prev"
            @click="()=>this.setSelected(@:slide - 1)">
            &#60;
        </button>
        <button id="next"
            @click="()=>this.setSelected(@:slide + 1)">
            &#62;
        </button>
        <ul id="indicators">
            <li *for="i of range(@:slides.length)"
                :class="{{ i === @:slide && 'active' }}"
                @click="()=>this.setSelected(i)"
            ></li>
        </ul>
    \`,
`
    },
    {
        id: "enso-script",
        title: "Custom Scripts",
        description:
            "script lets you add methods and fields to the component. " +
            "Methods are run in the component's context, giving them " +
            "direct acces to watched state and lifecycle hooks, and " * 
            "allowing native browser APIs to be used.",
        related: [
            { title: "script", href: "components-script" },
            { title: "watches", href: "" },
            { title: "lifecycle", href: "" }
        ],
        code: 
`    script: {
        _range: range(0),

        slotchanged(e) {
            this.slides = e.target.assignedElements();
            this._range = range(this.slides.length);
            
            if (this.slides.length) {
                this.setSelected(this.slide);
            }
        },
        
        setSelected(which) {
            const selected = this._range.wrap(which);
            if (this.slide !== selected) this.slide = selected;

            for (let i = 0; i < this.slides.length; i++) {
                const slide = this.slides[i];
                if (i === this.slide) slide.classList.add('active');
                else slide.classList.remove('active');
            }
        }
    }
});
`
    },
];

export default Enso.component('components-overview-page', {
    settings: { useShadow: false },
    expose: { slides, sections },
    styles: [css(Reset), css(DocStyles), css`
        enso-slide-show {
            aspect-ratio: 2/1;
            border-radius: 10px;
            margin: 1em 0;

            & figcaption {
                position: absolute;
                top: 0; left: 0; right: 0;
                padding: 0.5em;
                color: white;
                background: linear-gradient(
                    180deg, 
                    #000000EE 0%, 
                    #00000000 100%
                );
                & > a {
                    color: white;
                }
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        div.overview-page.document {
            max-width: 100%;
        }
        .slim {
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
        }
        .codepen {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #codepen-slideshow-link {
            padding: var(--space-md) var(--space-lg);
            color: var(--secondary-text);
            background: var(--code-back);
            text-decoration: none;
            border-radius: 999px;
            opacity: 0.8;
            border: 1px solid var(--stroke-color);
            box-shadow: color-mix(in srgb, black 15%, transparent 85%) 0px 1px 2px;

            &:hover {
                opacity: 1.0;
            }
            &:active {
                transform: translateY(2px);
                box-shadow: none;
            }
        }
    `],
    
    template: html`
        <div class="overview-page document">
            <section id="enso-component-overview" class="slim">
                <h1>Enso Components</h1>
                <p>
                    Enso components combine reactive state, declarative templates, style
                    encapsulation, and custom JavaScript behaviour within native custom
                    element Web Components.
                </p>
            </section>
            <section id="slideshow-overview">
                <h2 class="slim">Slideshow</h2>
                <p class="slim">
                    This example slideshow demonstrates many of Enso's component features.
                </p>

                <enso-slide-show class="slim">
                    <figure *for="slide of slides">
                        <img :src="{{ slide.img }}" />
                        <figcaption>
                            Photo by <a :href="{{ slide.portfolio }}">{{ slide.author }}</a> on
                            <a :href="{{ slide.link }}">Unsplash</a>
                        </figcaption>
                    </figure>
                </enso-slide-show>

                <annotated-code-view
                    .sections="{{ sections }}"
                    language="javascript"
                ></annotated-code-view>

            </section>
            <div class="codepen slim">
                <a id="codepen-slideshow-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codepen.io/editor/seanyoung247/pen/01a0bf8e-57df-7c5d-90e2-065f2c195033"
                >
                    Try the slideshow on CodePen &#x2192;
                </a>
            </div>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Enso Components", link: "#enso-component-overview" },
                { title: "Slideshow", link: "#slideshow-overview" }
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
