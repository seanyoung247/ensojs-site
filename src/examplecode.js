
import Enso, { html, attr } from "ensojs";

export const counterCode = `
    <span class="code-line">
        <span class="token property">Enso</span>
        <span class="token punctuation">.</span>
        <span class="token function">component</span>
        <span class="token punctuation">(</span>
        <span class="token string">"tiny-counter"</span>
        <span class="token punctuation">, </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">watched</span>
        <span class="token punctuation">: </span>
        <span class="token punctuation">{ </span>
        <span class="token property">value</span>
        <span class="token punctuation">: </span>
        <span class="token function">attr</span>
        <span class="token punctuation">(</span>
        <span class="token number">0</span>
        <span class="token punctuation">) </span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">styles</span>
        <span class="token punctuation">: </span>
        <span class="token function">css</span>
        <span class="token punctuation">\`</span>
        <span class="token property">:host </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token css-prop">display</span>
        <span class="token punctuation">: </span>
        <span class="token css-value">flex</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token css-prop">justify-content</span>
        <span class="token punctuation">: </span>
        <span class="token css-value">space-between</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">\`</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">template</span>
        <span class="token punctuation">: </span>
        <span class="token function">html</span>
        <span class="token punctuation">\`</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">button </span>
        <span class="token event">@click</span>
        <span class="token punctuation">=</span>
        <span class="token string">"()=&gt;</span>
        <span class="token binding">@:</span>
        <span class="token property">value</span>
        <span class="token punctuation">--"</span>
        <span class="token punctuation">&gt;</span>
        <span class="token string">-</span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">button</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token binding">{{ </span>
        <span class="token binding">@:</span>
        <span class="token property">value </span>
        <span class="token binding">}}</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">button </span>
        <span class="token event">@click</span>
        <span class="token punctuation">=</span>
        <span class="token string">"()=&gt;</span>
        <span class="token binding">@:</span>
        <span class="token property">value</span>
        <span class="token punctuation">++"</span>
        <span class="token punctuation">&gt;</span>
        <span class="token string">+</span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">button</span>
        <span class="token punctuation">&gt;</span>
        <span class="token punctuation">\`</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">});</span>
    </span>
`;

export const counterHTML = Enso.component('counter-html', {
    settings: { useShadow: false },
    watched: { count: attr(0) },
    template: html`
        <span class="code-line">
            <span class="token punctuation">&lt;</span>
            <span class="token property">tiny-counter </span>
            <span class="token attribute">value</span>
            <span class="token punctuation">=</span>
            <span class="token string">"{{ @:count }}"</span>
            <span class="token punctuation">&gt;</span>
            <span class="token punctuation">&lt;</span>
            <span class="token property">/tiny-counter</span>
            <span class="token punctuation">&gt;</span>
        </span>
    `
});

// Component Templates
export const templateEx = `
    <span class="code-line">
        <span class="token property">Enso</span>
        <span class="token punctuation">.</span>
        <span class="token function">component</span>
        <span class="token punctuation">(</span>
        <span class="token string">'enso-templates'</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">watched</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token property">name</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">attr</span>
        <span class="token punctuation">(</span>
        <span class="token string">'World'</span>
        <span class="token punctuation">)</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token punctuation">},</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="highlight brush"
            data-title="HTML tagged templates"
            data-description="Templates are defined using the html tagged template literal. This enables declarative HTML with embedded JavaScript expressions evaluated in component context."
        >
            <span class="token property">template</span>
            <span class="token punctuation">:</span>
            <span class="space"> </span>
            <span class="token function">html</span>
            <span class="token punctuation">\`</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">div</span>
        <span class="space"> </span>

        <span class="highlight brush"
            data-title="Refs (#ref)"
            data-description="The #ref directive creates a live reference to a DOM node. Refs are available via this.refs in script and can be accessed from templates."
        >
            <span class="token directive">#ref</span>
            <span class="token punctuation">=</span>
            <span class="token string">"output"</span>
        </span>

        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token string">Hello</span>
        <span class="space"> </span>

        <span class="highlight brush"
            data-title="Template bindings"
            data-description="Double curly braces insert JavaScript values into the template. The @: prefix accesses watched state and keeps the DOM in sync."
        >
            <span class="token string">{{ </span>
            <span class="token binding">@:</span>
            <span class="token variable">name</span>
            <span class="token string"> }}</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">div</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">input</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token property">type</span>
        <span class="token punctuation">=</span>
        <span class="token string">"text"</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="highlight brush"
            data-title="Attribute bindings"
            data-description="Attributes can be bound to JavaScript expressions using the : prefix. When the bound value changes, Enso updates the attribute automatically."
        >
            <span class="token binding">:value</span>
            <span class="token punctuation">=</span>
            <span class="token string">"{{ </span>
            <span class="token binding">@:</span>
            <span class="token variable">name</span>
            <span class="token string"> }}"</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="highlight brush"
            data-title="Inline event handlers"
            data-description="Events can be handled inline using the @event syntax. Handlers run in component context and can update watched state directly."
        >
            <span class="token event">@change</span>
            <span class="token punctuation">=</span>
            <span class="token string">"(e)=&gt;</span>
            <span class="token binding">@:</span>
            <span class="token variable">name</span>
            <span class="token punctuation">=</span>
            <span class="token variable">e</span>
            <span class="token punctuation">.</span>
            <span class="token property">target</span>
            <span class="token punctuation">.</span>
            <span class="token property">value"</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">/&gt;\`</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">});</span>
    </span>
`;

// Component Styles
export const stylesEx = ``;
// Component Expose
export const exposeEx = ``;
// Component Watched
export const watchedEx = ``;
// Component Script
export const scriptEx = ``;
// Component Settings
export const settingsEx = ``;