
import Enso, { attr, css, html, watches } from 'ensojs';
import Reset from "../styles/reset.css?inline";


Enso.component('nav-btn', {
    watched: {
        open: attr(false),
        width: attr(40),
        height: attr(40)
    },
    styles: [css(Reset), css`
        :host {
            display: block;
            position: fixed;
            top: 0.5em; right: 0.5em;
        }
        button {
            width: var(--w, 40px);
            height: var(--h, 40px);
            background: transparent;
            border: none;
        }
        .line {
            stroke: var(--primary-text);
            stroke-linecap: round;
            stroke-width: 6;
        }
        .enso {
            fill: none;
            stroke: var(--primary-text);
            stroke-width: 8;
            stroke-linecap: round;
            stroke-dasharray: 200 220;
            stroke-dashoffset: 200;
            transition: stroke-dashoffset 0.5s ease;
        }
        .line.top, .line.bottom {
            transform-origin: 50% 50%;
            transition:
                transform 0.5s ease 0.1s,
                stroke 0.5s ease,
                opacity 0.5s ease;
        }
        .line.middle {
            stroke-dasharray: 65 65;
            stroke-dashoffset: 0;
            transition: stroke-dashoffset 0.5s ease 0.2s;
        }
        svg * {
            pointer-events: none;
        }

        :host([open]) { outline: none; }
        :host([open]) .enso {
            stroke-dashoffset: 10;
            transition: stroke-dashoffset 0.5s ease 0.2s;
        }
        :host([open]) .line.bottom { --f: -1; }
        :host([open]) .line.top, :host([open]) .line.bottom {
            opacity: 0.85;
            stroke: var(--accent-color);
            transform:
                translateY(calc(12.5% * var(--f, 1)))
                translateX(-10%)
                rotate(calc(45deg * var(--f, 1)))
                scale(0.8);
            transition: 
                transform 0.5s ease 0.1s,
                stroke 0.5s ease,
                opacity 0.5s ease;
        }
        :host([open]) .line.middle {
            stroke-dashoffset: -65;
            transition: stroke-dashoffset 0.5s ease;
        }
    `],
    template: html`
        <button 
            @click="() => @:open = !@:open" 
            aria-label="Toggle Navigation Menu"
            :style="--width: {{ @:w }}px; --h: {{ @:height }}px;"
        >
            <svg viewBox="0 0 100 100">
                <line class="line top"    x1="20" y1="30" x2="80" y2="30" />
                <line class="line middle" x1="20" y1="50" x2="80" y2="50" />
                <line class="line bottom" x1="20" y1="70" x2="80" y2="70" />

                <circle class="enso" cx="50" cy="50" r="35" />
            </svg>
        </button>
    `,
    script: {
        notify: watches(function() {
            const event = new CustomEvent("nav-toggle", {
                detail: { open: this.watched.open },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        }, ['open'])
    }
});

