
import { Enso, css, html, attr, prop } from 'ensojs';
import { range } from 'ensojs/helpers';

import '@components/codeView.enso';

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
            display: flex;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    `],

    template: html`
        <slot @slotchange="this.slotchanged"></slot>
        <button @click="()=>this.setSelected(@:slide - 1)">
            &#60;
        </button>
        <button @click="()=>this.setSelected(@:slide + 1)">
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

export default Enso.component('components-overview-page', {
    settings: { useShadow: false },

    styles: [css(Reset), css(DocStyles), css`
        enso-slide-show {
            aspect-ratio: 1;
        }
        img {
            object-fit: cover;
        }
    `],
    
    template: html`
        <div class="document">
            <section>
                <enso-slide-show>
                    <img src="john-fowler-unsplash.jpg" />
                    <img src="bailey-zindel-unsplash.jpg" />
                    <img src="pietro-de-grandi-unsplash.jpg" />
                    <img src="pine-watt-unsplash.jpg" />
                </enso-slide-show>
            </section>
        </div>
    `,

    script: {
        getHeadings() {
            return [
                { title: "", link: "#" },
            ];
        },
        getSection() {
            return "docs-components";
        }
    }
});
