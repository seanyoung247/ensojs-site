
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

const examples = {
    component:
`
import { Enso, css, html, attr, prop } from 'ensojs';
import { range } from 'ensojs/helpers';

import Slideshow from "./slideshow.css?inline";
import Reset from "@styles/reset.css?inline";

Enso.component('enso-slide-show', {
    watched: {
        slides: prop([]),
        slide: attr(0, Number),
    },
    expose: { range }, 
    styles: [css(Reset), css(Slideshow), css\`
        :host {
            display: block;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    \`],

    template: html\`
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
`
};

const sections = [
    {
        id: "enso-imports",
        title: "Enso Imports",
        description: "These are Enso's imports. There are many like them, but these are Enso's",
        code: 
`import { Enso, css, html, attr, prop } from 'ensojs';
import { range } from 'ensojs/helpers';

import Slideshow from "./slideshow.css?inline";
import Reset from "@styles/reset.css?inline";`
    },
    {
        id: "enso-components",
        title: "Enso Components",
        description: "Enso.component()",
        code:
`Enso.component('enso-slide-show', {`
    }
];

export default Enso.component('components-overview-page', {
    settings: { useShadow: false },
    expose: { slides, examples, sections },
    styles: [css(Reset), css(DocStyles), css`
        enso-slide-show {
            aspect-ratio: 2/1;

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
    `],
    
    template: html`
        <div class="document">
            <section id="enso-component-overview">
                <h1>Enso Components</h1>

                <annotated-code-view
                    .sections="{{ sections }}"
                    language="javascript"
                ></annotated-code-view>

                <enso-slide-show>
                    <figure *for="slide of slides">
                        <img :src="{{ slide.img }}" />
                        <figcaption>
                            Photo by <a :href="{{ slide.portfolio }}">{{ slide.author }}</a> on
                            <a :href="{{ slide.link }}">Unsplash</a>
                        </figcaption>
                    </figure>
                </enso-slide-show>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "Enso Components", link: "#enso-components-overview" },
            ];
        },
        getSection() {
            return "docs-components-section";
        }
    }
});
