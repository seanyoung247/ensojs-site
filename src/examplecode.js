
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
/*
Enso.component ('enso-templates', {
    watched: { name: attr('World') },
    template:  html`
        <div #ref="output">Hello {{ @:name }}</div>
        <input type = "text"
            :value="{{ @:name }}" 
            @change = "(e)=>@:name = e.target.value"
        /> 
    `
});
*/
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
/*
Enso.component('enso-styles', {
    watched: { value: attr(0) },
    styles: [css(Reset), css`
        button {
            background: lightgrey;
            padding: 0.5rem;
            &:active:not([disabled]) {
                filter: brightness(2.0);
            }
        }
    `],
    template: html`
        <button 
            @click="()=>@:value++"
            :style="color: {{ @:value >= 9 ? 'red' : 'black' }};"
            :disabled="{{ @:value >= 9 }}">
            Value = {{ @:value }}
        </button>`
});
*/
export const stylesEx = `
    <span class="code-line">
        <span class="token property">Enso</span>
        <span class="token punctuation">.</span>
        <span class="token function">component</span>
        <span class="token punctuation">(</span>
        <span class="token string">'enso-styles'</span>
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
        <span class="space"> </span>
        <span class="token property">value</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">attr</span>
        <span class="token punctuation">(</span>
        <span class="token number">0</span>
        <span class="token punctuation">)</span>
        <span class="space"> </span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="highlight brush"
            data-title="Adopted stylesheets"
            data-description="Styles are applied using adopted stylesheets, giving components fast, platform-native styling. When a component uses Shadow DOM, styles are scoped automatically to that component."
        >
            <span class="token property">styles</span>
        </span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="highlight brush"
            data-title="Multiple stylesheets"
            data-description="Components can apply multiple stylesheets, making it easy to share resets, base styles, or themes between components."
        >
            <span class="token punctuation">[</span>
            <span class="token function">css</span>
            <span class="token punctuation">(</span>
            <span class="token constant">Reset</span>
            <span class="token punctuation">)</span>
            <span class="token punctuation">,</span>
            <span class="space"> </span>
            <span class="token function">css</span>
            <span class="token punctuation">\`</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token property">button</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token property">background</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token string">lightgrey</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token property">padding</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token number">0.5</span>
        <span class="token unit">rem</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="highlight brush"
            data-title="Modern CSS"
            data-description="Enso uses real CSS. Write modern selectors, pseudo-classes, and nesting without framework-specific syntax or abstractions."
        >
            <span class="token punctuation">&amp;:</span>
            <span class="token pseudo-class">active</span>
            <span class="token punctuation">:</span>
            <span class="token function">not</span>
            <span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
            <span class="token property">disabled</span>
            <span class="token punctuation">]</span>
            <span class="token punctuation">)</span>
        </span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token property">filter</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">brightness</span>
        <span class="token punctuation">(</span>
        <span class="token number">2.0</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token punctuation">}</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">\`</span>
        <span class="token punctuation">]</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">template</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">html</span>
        <span class="token punctuation">\`</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">button</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token event">@click</span>
        <span class="token punctuation">=</span>
        <span class="token string">"()=&gt;</span>
        <span class="token binding">@:</span>
        <span class="token variable">value</span>
        <span class="token operator">++</span>
        <span class="token string">"</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="highlight brush"
            data-title="Reactive inline styles"
            data-description="Style attributes can be bound to state safely. Inline styles are applied per instance and work consistently in both shadow and flat components."
        >
            <span class="token binding">:style</span>
            <span class="token punctuation">=</span>
            <span class="token string">"color: {{ </span>
            <span class="token binding">@:</span>
            <span class="token variable">value</span>
            <span class="token space"> </span>
            <span class="token operator">&gt;=</span>
            <span class="token space"> </span>
            <span class="token number">9</span>
            <span class="token space"> </span>
            <span class="token operator">?</span>
            <span class="token space"> </span>
            <span class="token string">'red'</span>
            <span class="token space"> </span>
            <span class="token operator">:</span>
            <span class="token space"> </span>
            <span class="token string">'black'</span>
            <span class="token space"> </span>
            <span class="token string">}};"</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token binding">:disabled</span>
        <span class="token punctuation">=</span>
        <span class="token string">"{{ </span>
        <span class="token binding">@:</span>
        <span class="token variable">value</span>
        <span class="token space"> </span>
        <span class="token operator">&gt;=</span>
        <span class="token space"> </span>
        <span class="token number">9</span>
        <span class="token string"> }}"</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token string">Value</span>
        <span class="space"> </span>
        <span class="token operator">=</span>
        <span class="space"> </span>
        <span class="token string">{{ </span>
        <span class="token binding">@:</span>
        <span class="token variable">value</span>
        <span class="token string"> }}</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">button</span>
        <span class="token punctuation">&gt;\`</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">});</span>
    </span>
`;

// Component Watched
/*
Enso.component('enso-watched', {
    watched: {
        items: prop([], true),
        locked: attr(false)
    },
    template: html`
        <input
            @change="e => {
                if (@:locked) return;
                @:items.push(e.target.value);
                e.target.value = '';
            }"
            :disabled="{{ @:locked }}" 
        />
        <ul><li 
            *for="[idx, item] of @:items.entries()"
        >
            {{ item }}
            <button @click="()=>@:items.splice(idx, 1);">
                X
            </button>
        </li></ul>`
});
*/
export const watchedEx = `
    <span class="code-line">
        <span class="token property">Enso</span>
        <span class="token punctuation">.</span>
        <span class="token function">component</span>
        <span class="token punctuation">(</span>
        <span class="token string">'enso-watched'</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="highlight brush"
            data-title="Watched properties"
            data-description="Watched values define reactive state. By default, updates are detected when the value itself changes."
        >
            <span class="token property">watched</span>
        </span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token property">items</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">prop</span>
        <span class="token punctuation">(</span>
        <span class="token punctuation">[</span>
        <span class="token punctuation">]</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="highlight brush"
            data-title="Deep reactivity (opt-in)"
            data-description="Passing true enables deep reactivity. Mutating arrays or objects triggers updates automatically, but with additional runtime cost."
        >
            <span class="token boolean">true</span>
        </span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token property">locked</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="highlight brush"
            data-title="Attributes vs properties"
            data-description="attr creates watched state backed by an HTML attribute. Attributes accept only strings, numbers, or booleans."
        >
            <span class="token function">attr</span>
            <span class="token punctuation">(</span>
            <span class="token boolean">false</span>
            <span class="token punctuation">)</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token punctuation">},</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">template</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">html</span>
        <span class="token punctuation">\`</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">input</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token binding">:disabled</span>
        <span class="token punctuation">=</span>
        <span class="token string">"{{ </span>
        <span class="token binding">@:</span>
        <span class="token variable">locked</span>
        <span class="token string"> }}"</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token event">@change</span>
        <span class="token punctuation">=</span>
        <span class="token string">"e =&gt; {</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token keyword">if</span>
        <span class="token space"> </span>
        <span class="token punctuation">(</span>
        <span class="token binding">@:</span>
        <span class="token variable">locked</span>
        <span class="token punctuation">)</span>
        <span class="token space"> </span>
        <span class="token keyword">return</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="highlight brush"
            data-title="Direct mutation"
            data-description="Watched state is mutated directly. When deep reactivity is enabled, changes to arrays or objects update the DOM automatically."
        >
            <span class="token binding">@:</span>
            <span class="token variable">items</span>
            <span class="token punctuation">.</span>
            <span class="token function">push</span>
            <span class="token punctuation">(</span>
            <span class="token variable">e</span>
            <span class="token punctuation">.</span>
            <span class="token property">target</span>
            <span class="token punctuation">.</span>
            <span class="token property">value</span>
            <span class="token punctuation">)</span>
            <span class="token punctuation">;</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token variable">e</span>
        <span class="token punctuation">.</span>
        <span class="token property">target</span>
        <span class="token punctuation">.</span>
        <span class="token property">value</span>
        <span class="token space"> </span>
        <span class="token operator">=</span>
        <span class="token space"> </span>
        <span class="token string">''</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token string">}"</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">/&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">ul</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="highlight brush"
            data-title="Reactive control flow"
            data-description="Control flow directives react automatically to watched state changes."
        >
            <span class="token punctuation">&lt;</span>
            <span class="token property">li</span>
            <span class="space"> </span>
            <span class="token directive">*for</span>
            <span class="token punctuation">=</span>
            <span class="token string">"[idx, item] of </span>
            <span class="token binding">@:</span>
            <span class="token variable">items</span>
            <span class="token string">"</span>
            <span class="token punctuation">&gt;</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token string">{{ </span>
        <span class="token variable">item</span>
        <span class="token string"> }}</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">button</span>
    </span>

    <span class="code-line">
        <span class="space">                    </span>
        <span class="token event">@click</span>
        <span class="token punctuation">=</span>
        <span class="token string">"() =&gt; </span>
        <span class="token binding">@:</span>
        <span class="token variable">items</span>
        <span class="token punctuation">.</span>
        <span class="token function">splice</span>
        <span class="token punctuation">(</span>
        <span class="token variable">idx</span>
        <span class="token punctuation">,</span>
        <span class="token space"> </span>
        <span class="token number">1</span>
        <span class="token punctuation">)"</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token punctuation">&gt;</span>
        <span class="token string">X</span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">button</span>
        <span class="token punctuation">&gt;</span>
    </span>


    <span class="code-line">
        <span class="space">            </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">li</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">ul</span>
        <span class="token punctuation">&gt;\`</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">});</span>
    </span>
`;


// Component Script
/*
const formatTime = (t) => t.toLocaleTimeString();
Enso.component('enso-script', {
    expose: { formatTime },

    watched: {
        toasts: prop([], true),
        open: false
    },

    script: {
        onToastsChange: watches(function () {
            this.watched.open =
                this.watched.toasts.length > 0;
        }, ['toasts']),

        dismiss(idx) {
            this.watched.toasts.splice(idx, 1);
        }
    },

    template: html`
        <div *if="open">
            <div *for="[i, toast] of @:toasts.entries()">
                {{ toast.message }} —
                {{ formatTime(toast.time) }}
                <button @click="()=>this.dismiss(i)">
                    x
                </button>
            </div>
        </div>`
});
*/
export const scriptEx = `
    <span class="code-line">
        <span class="token keyword">const</span>
        <span class="space"> </span>
        <span class="token function">formatTime</span>
        <span class="space"> </span>
        <span class="token operator">=</span>
        <span class="space"> </span>
        <span class="token punctuation">(</span>
        <span class="token parameter">t</span>
        <span class="token punctuation">)</span>
        <span class="space"> </span>
        <span class="token operator">=&gt;</span>
        <span class="space"> </span>
        <span class="token parameter">t</span>
        <span class="token punctuation">.</span>
        <span class="token function">toLocaleTimeString</span>
        <span class="token punctuation">(</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="token property">Enso</span>
        <span class="token punctuation">.</span>
        <span class="token function">component</span>
        <span class="token punctuation">(</span>
        <span class="token string">'enso-script'</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="highlight brush"
            data-title="Expose"
            data-description="Injects external values into the template environment, allowing helpers and constants defined outside the component to be used safely in templates."
        >
            <span class="token property">expose</span>
            <span class="token punctuation">:</span>
            <span class="space"> </span>
            <span class="token punctuation">{</span>
            <span class="space"> </span>
            <span class="token property">formatTime</span>
            <span class="space"> </span>
            <span class="token punctuation">}</span>
        </span>
        <span class="token punctuation">,</span>
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
        <span class="token property">toasts</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">prop</span>
        <span class="token punctuation">(</span>
        <span class="token punctuation">[]</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="token boolean">true</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token property">open</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token boolean">false</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token punctuation">},</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="highlight brush"
            data-title="Script"
            data-description="Defines the component’s behaviour and methods, and provides the API available to templates and event handlers."
        >
            <span class="token property">script</span>
            <span class="token punctuation">:</span>
            <span class="space"> </span>
            <span class="token punctuation">{</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="highlight brush"
            data-title="watches"
            data-description="Registers a script function to run when a watched value changes or when a lifecycle event is triggered."
        >
            <span class="token property">onToastsChange</span>
            <span class="token punctuation">:</span>
            <span class="space"> </span>
            <span class="token function">watches</span>
            <span class="token punctuation">(</span>
            <span class="token function">function</span>
            <span class="token punctuation"> () </span>
            <span class="token punctuation">{</span>
        </span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token keyword">this</span>
        <span class="token punctuation">.</span>
        <span class="token property">watched</span>
        <span class="token punctuation">.</span>
        <span class="token property">open</span>
        <span class="space"> </span>
        <span class="token operator">=</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token keyword">this</span>
        <span class="token punctuation">.</span>
        <span class="token property">watched</span>
        <span class="token punctuation">.</span>
        <span class="token property">toasts</span>
        <span class="token punctuation">.</span>
        <span class="token property">length</span>
        <span class="space"> </span>
        <span class="token operator">&gt;</span>
        <span class="space"> </span>
        <span class="token number">0</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="token punctuation">[</span>
        <span class="token string">'toasts'</span>
        <span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">,</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token function">dismiss</span>
        <span class="token punctuation">(</span>
        <span class="token parameter">idx</span>
        <span class="token punctuation">)</span>
        <span class="space"> </span>
        <span class="token punctuation">{</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token keyword">this</span>
        <span class="token punctuation">.</span>
        <span class="token property">watched</span>
        <span class="token punctuation">.</span>
        <span class="token property">toasts</span>
        <span class="token punctuation">.</span>
        <span class="token function">splice</span>
        <span class="token punctuation">(</span>
        <span class="token parameter">idx</span>
        <span class="token punctuation">,</span>
        <span class="space"> </span>
        <span class="token number">1</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">}</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token punctuation">},</span>
    </span>

    <span class="code-line">
        <span class="space">    </span>
        <span class="token property">template</span>
        <span class="token punctuation">:</span>
        <span class="space"> </span>
        <span class="token function">html</span>
        <span class="token punctuation">\`</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">div</span>
        <span class="space"> </span>
        <span class="token directive">*if</span>
        <span class="token operator">=</span>
        <span class="token string">"open"</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">div</span>
        <span class="space"> </span>
        <span class="token directive">*for</span>
        <span class="token operator">=</span>
        <span class="token string">"[i, toast] of @:toasts.entries()"</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token string">{{</span>
        <span class="space"> </span>
        <span class="token property">toast</span>
        <span class="token punctuation">.</span>
        <span class="token property">message</span>
        <span class="space"> </span>
        <span class="token string">}}</span>
        <span class="space"> </span>
        <span class="token punctuation">—</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token string">{{</span>
        <span class="space"> </span>
        <span class="token function">formatTime</span>
        <span class="token punctuation">(</span>
        <span class="token property">toast</span>
        <span class="token punctuation">.</span>
        <span class="token property">time</span>
        <span class="token punctuation">)</span>
        <span class="space"> </span>
        <span class="token string">}}</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token punctuation">&lt;</span>
        <span class="token property">button</span>
        <span class="space"> </span>
        <span class="highlight brush"
            data-title="Event handlers"
            data-description="Template event handlers execute script methods through the component instance, enabling state changes in response to user interaction."
        >
            <span class="token event">@click</span>
            <span class="token operator">=</span>
            <span class="token string">"()=&gt;this.dismiss(i)"</span>
        </span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">                    </span>
        <span class="token string">x</span>
    </span>

    <span class="code-line">
        <span class="space">                </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">button</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">            </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">div</span>
        <span class="token punctuation">&gt;</span>
    </span>

    <span class="code-line">
        <span class="space">        </span>
        <span class="token punctuation">&lt;/</span>
        <span class="token property">div</span>
        <span class="token punctuation">&gt;\`</span>
    </span>

    <span class="code-line">
        <span class="token punctuation">});</span>
    </span>
`;


