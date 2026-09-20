
import { Enso, html, css, prop, attr } from "ensojs";

import "./codeView.enso";

import Reset from "@styles/reset.css?inline";

Enso.component("annotated-code-view", {
    watched: {
        sections: prop([]),
        language: attr('javascript')
    },

    styles: [css(Reset), css`
        :host {
            display: block;
            container-type: inline-size;
        }

        .code-section {
            border-radius: 1em;
        }

        .annotation {
            padding: 1em 0.5em;
        }

        .related {
            display: flex;
            list-style: none;
            padding-top: 0.25em;
            gap: 1em;

            & > li {
                padding: 0.25em 0.5em;
                border-radius: 999px;
                background-color: var(--stroke-color);
                
                &:hover {
                    background-color: var(--hover-accent);
                }
                & > a {
                    text-decoration: none;
                    color: var(--primary-text);
                }
            }
        }
       /* li:hover {
            background-color: var(--hover-accent);
        }*/

        @container (width > 800px) {
            .code-section {
                display: grid;
                grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
                border-radius: 0;
                gap: 1em;

                &:first-of-type > enso-code-view::part(code-pane) {
                    border-radius: 1em 1em 0 0;
                }
                &:last-of-type > enso-code-view::part(code-pane) {
                    border-radius: 0 0 1em 1em;
                }
            }

            .annotation {
                display: flex;
                flex-direction: column;
                justify-content: center;
                grid-column: 2;
                grid-row: 1;
                max-width: var(--annotation-width, 720px);
                border-bottom: 1px solid var(--stroke-color);

                & h2 {
                    font-size: 1.15rem;
                    line-height: 1.2;
                    margin-bottom: 0.6em;
                }

                & p {
                    font-size: 0.95rem;
                }
            }

            enso-code-view {
                grid-column: 1;
                grid-row: 1;
                max-width: var(--code-width, 720px);

                &::part(code-pane) {
                    margin-block: 0;
                    border-radius: 0;
                }
            }
        }
    `],

    template: html`
        <section *for="section of @:sections"
            :id="{{ section.id }}"
            class="code-section"
        >
            <div class="annotation">
                <h3>{{ section.title }}</h3>
                <p>{{ section.description }}</p>
                <ul class="related">
                    <li *for="tag of section.related">
                        <a :href="{{ tag.href }}">{{ tag.title }}</a>
                    </li>
                </ul>
            </div>

            <enso-code-view
                .code="{{ section.code }}"
                :language="{{ @:language }}"
            ></enso-code-view>
        </section>
    `
});
