
import Enso, { css, html } from 'ensojs';
// Components
import "@components/icons/icon.enso";
// Styles
import Reset from "@styles/reset.css?inline";
import Footer from "./footer.css?inline";

export default Enso.component('site-footer', {
    styles: [ css(Reset), css(Footer) ],
    template: html`
        <footer>
            <enso-icon 
                aria-hidden="true"
                role="presentation"
                focusable="false"
            >
            </enso-icon>
            <span class="version">
                Built with Enso v.${Enso.version}
            </span>
            <span class="links">
                Native Web Components
                <a href="#">Docs</a>
                <a href="https://github.com/seanyoung247/ensoJS">Github</a>
            </span>
            <span class="copyright">
                &copy; Sean Young ${new Date().getFullYear()}
            </span>
        </footer>
    `
});