
import Enso, { css, html, attr } from 'ensojs';
import './navbtn.enso';

import Reset from "@styles/reset.css?inline";

Enso.component('site-nav', {
    watched: { open: attr(false, Boolean) },
    styles: [
        css(Reset),
        css`
        :host {
            --height: 40px;
            width: 100%;
        }
        nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: var(--height);
            background: none;
            width: 100%;
        }
        nav-btn {
            position: absolute;
            align-self: flex-end;
            z-index: 999;
            border-radius: 10px;
        }
        #menu {
            width: 100%;
            max-width: 768px;

            display: flex;
            flex-direction: column;
            align-items: center;

            overflow-y: hidden;

            list-style: none;
            background:
                linear-gradient(
                    to bottom,
                    rgba(0,0,0,0.05),
                    var(--texture-overlay)
                );
            backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--stroke-color);
            scrollbar-width: none;

            height: 0;
            transition: height 0.5s ease, scrollbar-width 1s;
        }
        :host([open]) #menu {
            height: 100dvh;
            overflow-y: auto;
        }
    `],
    template: html`
        <nav>
            <nav-btn width="40" height="40"
                @nav-toggle="(e)=>@:open = e.detail.open"
                :open="{{ @:open }}"
            ></nav-btn>
            <ul id="menu"><slot></slot></ul>
        </nav>
    `,
    script: {
        open() {
            this.watched.open = true;
        },
        close() {
            this.watched.open = false;
        }
    }
});
