
import Enso, { css, html, prop } from 'ensojs';
import { classList } from 'ensojs/helpers';

// Components
import "@components/icons/icon.enso";
// Styles
import Reset from "@styles/reset.css?inline";
import Header from "./header.css?inline";

export default Enso.component('header-banner', {
    script: { useShadow: false },
    watched: { copied: prop(false) },
    styles: [css(Reset), css(Header)],
    expose: { classList },
    script: {
        _timer: null,
        async copyText(element) {
            await navigator.clipboard.writeText(element.dataset.copy);
            this.watched.copied = true;
            clearTimeout(this._timer);
            setTimeout(() => {
                this.watched.copied = false;
            }, 2000);
        }
    },
    template: html`
        <header>
            <div class="hero left">
                <button title="Copy CDN link (JSDelivr)"
                    data-copy="https://cdn.jsdelivr.net/npm/ensojs"
                    :class="{{ classList('button', 'copy', @:copied && 'copied') }}"
                    @click="e=>this.copyText(e.currentTarget)"
                >
                    ensoJS CDN
                </button>
            </div>

            <div class="hero center">
                <enso-icon></enso-icon>
                <h1>Enso</h1>
                <h2 id="tag-line">
                    <span>Minimal</span>
                    <span>Fast</span>
                    <span>Reactive</span>
                </h2>
            </div>

            <div class="hero right">
                <a title="Ensojs NPM page"
                    class="button"
                    href="https://www.npmjs.com/package/ensojs?activeTab=readme"
                >
                    npm i ensojs
                </a>
            </div>
        </header>
    `
});
