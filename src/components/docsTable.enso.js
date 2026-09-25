import { Enso, css, html, prop } from 'ensojs';


import Reset from "@styles/reset.css?inline";
import DocStyles from "@styles/documentation.css?inline";


export default Enso.component('docs-table', {
    watched: {
        headers: prop([]),
        rows: prop([])
    },
    styles: [css(Reset), css(DocStyles), css`
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.95rem;
            margin-top: var(--space-md);

            & :is(th, td) {
                text-align: left;
                vertical-align: top;
                padding: var(--space-sm);
                border-bottom: 1px solid var(--border-color, #ccc);
            }
            & th {
                font-weight: 600;
                background: var(--back-overlay, #f5f5f5);
            }

            & td:first-child {
                font-family: monospace;
                font-weight: 600;
                white-space: nowrap;
            }
            & td:nth-child(2) {
                font-family: monospace;
            }
            & tr:last-child td {
                border-bottom: none;
            }
        }
    `],
    template: html`
        <table>
            <thead>
                <tr>
                    <th *for="heading of @:headers">
                        {{ heading }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *for="col of @:rows">
                    <td *for="cell of col">
                        {{ cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    `
});