import{L as o,T as d,b as p,i as e,N as r,R as l,a as u,C as m}from"./reset-CKXpDUjB.js";o.component("nav-btn",{watched:{open:r(!1),width:r(40),height:r(40)},styles:[e(l),e`
        :host {
            display: block;
            width: var(--w, 40px);
            height: var(--h, 40px);
        }
        button {
            width: 100%;
            height: 100%;
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
    `],template:p`
        <button 
            @click="() => @:open = !@:open" 
            aria-label="Toggle Navigation Menu"
            :style="--w: {{ @:width }}px; --h: {{ @:height }}px;"
        >
            <svg viewBox="0 0 100 100">
                <line class="line top"    x1="20" y1="30" x2="80" y2="30" />
                <line class="line middle" x1="20" y1="50" x2="80" y2="50" />
                <line class="line bottom" x1="20" y1="70" x2="80" y2="70" />

                <circle class="enso" cx="50" cy="50" r="35" />
            </svg>
        </button>
    `,script:{notify:d(function(){const a=new CustomEvent("nav-toggle",{detail:{open:this.watched.open},bubbles:!0,composed:!0});this.dispatchEvent(a)},["open"])}});o.component("site-nav",{watched:{open:r(!1,Boolean)},styles:[e(l),e`
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
        @media (min-width: 768px) {
            :host {
                top: var(--space-lg);
                height: auto;
            }
            :host([open]) #menu {
                height: auto;
            }

            nav {
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }

            nav-btn {
                display: none;
            }

            #menu {
                height: auto;
                max-width: var(--max-content, 1200px);

                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                gap: var(--space-lg);

                background: none;
                backdrop-filter: none;
                border: none;

                overflow: visible;
                transition: none;
            }
        }
    `],template:p`
        <nav>
            <nav-btn width="40" height="40"
                @nav-toggle="(e)=>@:open = e.detail.open"
                :open="{{ @:open }}"
            ></nav-btn>

            <ul id="menu">
                <slot></slot>
            </ul>
        </nav>
    `,script:{open(){this.watched.open=!0},close(){this.watched.open=!1}}});const _='[data-tooltip]{position:relative}[data-tooltip]:after{content:attr(data-tooltip);position:absolute;top:calc(100% + 4px);left:50%;transform:translate(-50%) translateY(4px);background:var(--primary-text);color:var(--back-color);padding:3px 7px;border-radius:6px;font-size:.75rem;white-space:nowrap;opacity:0;pointer-events:none;z-index:9999;transition:opacity .15s ease .5s,transform .15s ease .5s,background .25s ease,color .25s ease}[data-tooltip]:before{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);z-index:9999;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid var(--primary-text);opacity:0;transition:opacity .15s ease .5s,transform .15s ease .5s,border-top-color .25s ease .5s}[data-tooltip]:hover:after,[data-tooltip]:hover:before{opacity:1;transform:translate(-50%) translateY(0)}',E=(a,s)=>{const n=a.findIndex(t=>t.name===s);return n===-1?0:n};o.component("theme-switch",{watched:{themes:u([],!0),theme:r(localStorage.getItem("enso-theme"))},expose:{themeIndex:E},styles:[e(l),e(_),e`
        :host {
            display: inline-block;
            --size: 24px;
            background: var(--muted-text);
            border-radius: calc(var(--size) / 2);
        }
        fieldset {
            display: flex;
            position: relative;
            width: fit-content;
            border-radius: calc(var(--size) / 2);
            border: 1px solid var(--primary-text);
        }
        label {
            display: block;
            text-align: center;
            cursor: pointer;
            width: var(--size);
            height: var(--size);
            user-select: none;
            input {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
            }
        }
        #toggle {
            position: absolute;
            top: 2px; left: calc(2px + ( var(--size) * var(--i, 1)));
            width: calc(var(--size) - 4px); height: calc(var(--size) - 4px);
            background: var(--primary-text);
            box-shadow: 0 0 2px #000000AA;
            border-radius: calc(var(--size) / 2);
            transition: none;
        }
        #toggle[data-animate] {
            transition: left 0.4s cubic-bezier(0.25, 1.4, 0.35, 1);
        }
        svg {
            width: calc(var(--size) - 8px);
            height: calc(var(--size) - 8px);
            stroke: var(--contrast-color);
            stroke-width: 1.5px;
            fill: var(--contrast-color);
            margin: 4px;
            pointer-events: none;
        }
        label:hover svg {
            filter: drop-shadow(0 0 1px var(--contrast-color));
        }
    `],template:p`
        <fieldset>
            <span id="toggle" #ref="toggle" 
                :style="--i:{{ themeIndex(@:themes, @:theme) }}">
            </span>
            <enso-fragment *for="theme of @:themes">    
                <label :for="{{ theme.name }}" :data-tooltip="{{ theme.name }} theme">
                    <input type="radio" name="theme"
                        :id="{{ theme.name }}"
                        :value="{{ theme.name }}"
                        @change="()=>this.onChange(theme.name)"
                        :checked="{{ theme.name === @:theme }}"
                    />
                    <svg *if="theme.icon" viewBox="0 0 24 24">
                        <use :href="{{ theme.icon }}"></use>
                    </svg>
                </label>
            </enso-fragment>     
        </fieldset>
    `,script:{onThemesChange:d(function(){this.applyTheme(this.watched.theme)},["themes"]),applyTheme(a){const s=this.watched.themes,n=s.some(t=>t.name===a)?a:s[0]?.name??null;n&&(this.watched.theme!==n&&(this.watched.theme=n),document.body.setAttribute("data-theme",n),localStorage.setItem("enso-theme",n),this.dispatchEvent(new CustomEvent("theme-changed",{detail:{theme:n}})))},onChange(a){this.refs.toggle.setAttribute("data-animate",!0),this.applyTheme(a)}}});const k="/ensojs-site/theme_icons.svg";o.component("enso-theme-switch",{template:p`
        <theme-switch .themes="[
                {name: 'light', icon:'${k}#light'}, 
                {name: 'dark', icon:'${k}#dark'},
                {name: 'auto', icon:'${k}#auto'}
            ]" 
        ></theme-switch>
    `});const y='.brush{position:relative;z-index:0}.brush:before{content:"";position:absolute;inset:0;background:var(--current-stroke);-webkit-mask-image:url(/ensojs-site/brush-stroke.svg);mask-image:url(/ensojs-site/brush-stroke.svg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:110% 250%;mask-size:110% 250%;-webkit-mask-position:right center;mask-position:right center;transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.25,.8,.25,1);z-index:-1}.brush.active:before,.brush.hover:hover:before{transform:scaleX(1)}',T=o.component("nav-section",{settings:{useShadow:!1},styles:[e(y),e`
        site-nav {
            position: fixed;
            z-index: 99;
            top: 0;
            width: 100%
        }
        svg-icons {
            display: inline-block;
            width: 1em;
            height: 1em;
            --fill: var(--primary-text);
        }
        .nav-section {
            color: var(--primary-text);
            min-width: 75%;
            backdrop-filter: blur(4px);
            border-radius: var(--space-md);
            padding: var(--space-md);
            margin: var(--space-lg) 0;
            &:first-of-type {
                margin-top: 3rem;
            }
            &:last-of-type {
                max-width: 300px;
                min-width: 0;
                width: 75%;
                
                margin-top: auto;
                margin-bottom: 3rem;

                opacity: 0.9;
                background: var(--texture-overlay);
            }
            & h2 {
                font-size: 0.75rem;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                margin-bottom: 0.75rem;
                text-align: center;
            }
            & ul {
                list-style: none;
            }
        }

        .nav-item {
            color: var(--primary-text);
            padding: 0.75rem var(--space-md);
            position: relative;
            & a {
                display: block;
                text-decoration: none;
                font-weight: bold;
                color: inherit;
                padding: var(--space-md);
            }
            &.theme {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            & + & {
                border-top: 1px solid var(--stroke-color);
            }
        }
        @media (min-width: 768px) {
            site-nav {
                background: var(--code-back)
                    linear-gradient(var(--muted-text)) no-repeat bottom/100% 1px;
            }
            .nav-section {
                min-width: 0;
                width: auto;
                margin: 0;
                padding: 0;

                backdrop-filter: none;
                border-radius: 0;
                background: none;

                &:first-of-type {
                    margin-top: 0;
                }
                &:last-of-type {
                    width: auto;
                    margin-top: 0;
                    margin-bottom: 0;
                    padding: var(--space-xs) var(--space-md);
                    border-radius: 999px;
                }
                & > ul {
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    gap: var(--space-md);
                }
            }

            .nav-section h2 {
                display: none;
            }

            .nav-item {
                padding: 0;
                & a { padding: 0; }
                & + & { border-top: none; }
                &.theme { gap: var(--space-md); }
            }
        }
    `],template:p`
        <site-nav #ref="nav">
            <li class="nav-section">
                <h2>On this page</h2>
                <ul>
                    <li class="nav-item brush hover" @click="this.closeNav">
                        <a href="#why-enso">Why Enso?</a>
                    </li>
                    <li class="nav-item brush hover" @click="this.closeNav">
                        <a href="#overview">Overview</a>
                    </li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Explore</h2>
                <ul>
                    <li class="nav-item brush hover">
                        <a href="docs/">Docs</a>
                    </li>
                    <li class="nav-item brush hover">
                        <a href="https://github.com/seanyoung247/ensoJS">
                            Github
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-section">
                <h2>Settings</h2>
                <ul>
                    <li class="nav-item theme">
                        <span>Theme: </span>
                        <enso-theme-switch #ref="themer"></enso-theme-switch>
                    </li>
                </ul>
            </li>
        </site-nav>
    `,script:{closeNav(){window.innerWidth<768&&this.refs.nav.close()}}}),C=(...a)=>a.filter(s=>s).join(" ");class g{static isRange(s){return s instanceof g}constructor(s,n=void 0,t=void 0){if(n===void 0&&(n=s,s=0),t===void 0&&(t=s<n?1:-1),Object.defineProperties(this,{_start:{value:s,enumerable:!0,writable:!1},_stop:{value:n,enumerable:!0,writable:!1},_step:{value:t,enumerable:!0,writable:!1}}),this._normaliser=1e10,!Number.isFinite(s)||!Number.isFinite(n)||!Number.isFinite(t))throw new TypeError("Invalid range parameters")}get size(){const s=i(this._start,this),n=i(this._stop,this),t=i(this._step,this);if(t===0)return 0;const c=n-s;return t>0&&c<=0||t<0&&c>=0?0:Math.max(0,Math.ceil(c/t))}get maxStep(){const s=this.size;if(s!==0)return this.step(s-1)}*[Symbol.iterator](){const s=i(this._start,this),n=i(this._step,this);let t=s;for(let c=0;c<this.size;c++)yield x(t,this),t+=n}step(s){if(!Number.isInteger(s)||s<0||s>=this.size)throw new Error("Invalid index");return z(s,this)}indexOf(s){return this.inRange(s)?w(s,this):-1}inRange(s){const n=Math.min(this._start,this._stop),t=Math.max(this._start,this._stop);return s<n||s>=t?!1:(i(s,this)-i(this._start,this))%i(this._step,this)===0}wrap(s){const n=Math.min(this._start,this._stop),t=this._stop-this._start,c=((s-n)%t+t)%t+n;return v(Math.min(c,this.maxStep),this)}clamp(s){const n=Math.min(this._start,this._stop),t=this.maxStep;return v(Math.min(Math.max(s,n),t),this)}}function b(a,s,n){return new g(a,s,n)}function i(a,s){return Math.round(a*s._normaliser)}function x(a,s){return a/s._normaliser}function w(a,s){return(i(a,s)-i(s._start,s))/i(s._step,s)}function z(a,s){return x(i(s._start,s)+i(s._step,s)*a,s)}function v(a,s){return z(Math.round(w(a,s)),s)}const M="/ensojs-site/icon.svg";o.component("enso-icon",{styles:e`
        :host { display: block; }
        svg {
            width: 100%;
            height: 100%;
        }
    `,template:p`
        <svg viewBox="0 0 129.64582 129.64585">
            <use href="${M}#enso"></use>
        </svg>
    `});const j='header{display:grid;grid-template-columns:1fr 2fr 1fr;align-items:center;justify-content:center;max-width:var(--max-content, auto);margin-inline:auto}header>.hero{display:flex;justify-content:center;align-items:center;flex-direction:column}header>.hero:is(.center){grid-column:2 / 3}header>.hero:is(.left,.right){display:none}header>.hero.left{justify-self:end}header>.hero.right{justify-self:start}@media screen and (min-width:768px){header>.hero:is(.left,.right){display:flex}}enso-icon{--fill: var(--primary-text);width:100px;height:100px}.button{padding:var(--space-md) var(--space-lg);color:var(--secondary-text);background:var(--code-back);border-radius:999px;border:1px solid var(--stroke-color);opacity:.8;box-shadow:0 1px 2px color-mix(in srgb,black 15%,transparent)}.button:hover{opacity:1;color:var(--primary-text)}.button:focus-visible{outline:none;box-shadow:0 0 0 2px color-mix(in srgb,var(--accent-color) 35%,transparent)}.button:active{transform:translateY(1px);box-shadow:none}.button.copy{position:relative}.button.copy:after{content:"Copied";position:absolute;bottom:calc(100% + .4rem);left:50%;transform:translate(-50%) translateY(4px);padding:var(--space-sm) var(--space-md);font-size:.75rem;background:var(--code-back);color:var(--secondary-text);border-radius:.4rem;opacity:0;pointer-events:none;transition:opacity .25s ease,transform .25s ease}.button.copy.copied:after{opacity:1;transform:translate(-50%) translateY(0)}a.button{text-decoration:none}#tag-line{display:flex;justify-content:center;align-items:center;padding-bottom:1rem;flex-wrap:wrap;gap:.5rem;font-size:1.5rem}#tag-line>span:after{content:"."}h1{text-align:center;font-family:Slackside One,cursive;font-size:6rem}',A=o.component("header-banner",{script:{useShadow:!1},watched:{copied:u(!1)},styles:[e(l),e(j)],expose:{classList:C},script:{_timer:null,async copyText(a){await navigator.clipboard.writeText(a.dataset.copy),this.watched.copied=!0,clearTimeout(this._timer),setTimeout(()=>{this.watched.copied=!1},2e3)}},template:p`
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
                    target="_blank"
                    href="https://www.npmjs.com/package/ensojs?activeTab=readme"
                >
                    npm i ensojs
                </a>
            </div>
        </header>
    `}),D=`
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
`;o.component("counter-html",{settings:{useShadow:!1},watched:{count:r(0)},template:p`
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
    `});const R=`
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
`,N=`
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
`,$=`
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
`,W=`
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
`;o.component("site-section",{styles:[e(l),e`
        :host {
            display: block;
            height: var(--height, auto);
            --direction: column;
            --align: center;
        }
        section {
            display: flex;
            flex-direction: var(--direction);
            align-items: var(--align);
            padding: var(--space-md);
            border-bottom: 2px solid var(--stroke-color);
            height: 100%;
            width: 100%;
            max-width: var(--max-content, 100%);
            margin-inline: auto;
        }
        ::slotted(*) {
            width: 100%;
        }
    `],template:p`
        <section>
            <slot></slot>
        </section>
    `});o.component("tiny-counter",{watched:{value:r(0)},styles:e`:host{
        display:flex;
        justify-content:space-between;
    }`,template:p`
        <button @click="()=>@:value--">-</button>
        {{ @:value }}
        <button @click="()=>@:value++">+</button>
    `,script:{onChange:d(function(){const a=new CustomEvent("changed",{detail:this.watched.value});this.dispatchEvent(a)},["value"])}});const B=o.component("example-section",{settings:{useShadow:!1},styles:e`
        .body-text {
            text-align: center;
        }

        .code-example {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            width: 100%;
        }
        .live-example {
            display: flex;
            justify-content: center;
            
            flex-wrap: wrap;
            padding-top: 0.5rem;
            & > code {
                margin-top: auto;
            }
            & > tiny-counter {
                flex: 1 1 25%;
                min-width: 100px;
                max-width: 200px;
                margin: 0.5rem 0.5rem auto;
            }
        }
    `,template:p`
        <site-section>
            <p class="body-text">
                A native-first microframework for building declarative Web Components.
            </p>
            <div class="code-example">
                <code class="code-pane">
                    ${D}
                </code>
                <div class="live-example">
                    <code class="code-pane">
                        <counter-html #ref="counter" count="5"></counter-html>
                    </code>
                    <tiny-counter value="5" 
                        @changed="(e)=>#:counter.watched.count = e.detail"
                    >
                    </tiny-counter>
                </div>
            </div>
        </site-section>
    `}),L=o.component("why-enso",{settings:{useShadow:!1},styles:e`
        .why-enso-grid {
            width: 100%;
            list-style: none;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;

            max-width: calc(4 * 500px + 3 * 1rem);
            margin-inline: auto;

            @media (min-width: 600px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: 1200px) {
                grid-template-columns: repeat(4, 1fr);
            }

            & > .why-card {

                transition: 
                    transform 200ms ease, 
                    box-shadow 200ms ease;

                @media (hover: hover) {
                    &:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    }
                }

                & h4 {
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                    border-bottom: 1px solid var(--stroke-color);
                }
                & .lede {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                & p {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: var(--secondary-text);
                }
            }
        }
    `,template:p`
        <site-section id="why-enso">
            <h3>Why Enso?</h3>

            <ul class="why-enso-grid">
                <li class="why-card code-pane">
                    <h4>Minimal</h4>
                    <p class="lede">~8kb gzipped.</p>
                    <p>
                        Write components directly, no required build step,
                        no compilation pipeline, no framework ceremony.
                    </p>
                </li>

                <li class="why-card code-pane">
                    <h4>Fast</h4>
                    <p class="lede">
                        Updates are scheduled efficiently and applied directly to the DOM.
                    </p>
                    <p>
                        No virtual DOM, no diffing abstractions,
                        just precise updates, when they're needed.
                    </p>
                </li>

                <li class="why-card code-pane">
                    <h4>Reactive</h4>
                    <p class="lede">
                        Reactive state updates templates automatically.
                    </p>
                    <p>
                        Data drives rendering, rendering drives lifecycle,
                        with predictable timing.
                    </p>
                </li>

                <li class="why-card code-pane">
                    <h4>Native</h4>
                    <p class="lede">
                        Built on Web Components, not abstractions.
                    </p>
                    <p>
                        Encapsulated styles. Real custom elements.
                        No runtime tricks.
                    </p>
                </li>
            </ul>
        </site-section>
    `});o.component("arrow-icon",{styles:[e(l),e`
        path {
            stroke: var(--color, white);
            stroke-width: 10;
            stroke-linecap: round;
            transform-origin: center;
            fill: none;
            rotate: var(--direction);
        }
        :host([direction="left"]) { --direction: 0; }
        :host([direction="right"]) { --direction: 180deg; }
        :host([direction="down"]) { --direction: 270deg; }
        :host([direction="up"]) { --direction: 90deg; }
    `],template:p`
        <svg viewbox="1 1 100 100">
            <path d="M95 5 L5 50 L95 95" />
        </svg>
    `});o.component("stack-list-view",{styles:[e(l),e`
        :host {
            display: grid;
            grid-template-columns: 1.5rem 1.5rem auto 1.5rem 1.5rem;
            grid-template-rows: 1fr;
            align-items: center;

            & > button {
                position: relative;
                z-index: 2;
                pointer-events: auto;
                border: none;
                background: transparent;
                padding: var(--space-md);

                height: 100%;
                grid-column: 1 / 3;
                grid-row: 1;

                opacity: 0.25;
                transition: opacity 0.25s ease;

                &:hover {
                    opacity: 0.75;
                    & > arrow-icon { filter: drop-shadow(1px 1px 1px black); }
                }
                &[aria-label="next"] { 
                    grid-column: 4 / 6;
                    --direction: 180deg;
                }
            }
            & > ul {
                display: grid;
                list-style: none;
                position: relative;
                margin: var(--space-md);
                z-index: 0;
                pointer-events: none;
                grid-column: 2 / 5;
                grid-row: 1;
            }
            & ::slotted(*) {
                grid-area: 1 / 1;
                pointer-events: none;
                opacity: 0;
                top: 0;
                transition: opacity 0.75s ease;
            }
            & ::slotted([data-active]) {
                pointer-events: all;
                opacity: 1;
            }
        }
        arrow-icon { --color: var(--primary-text); }
        :host([mode="list"]) {
            & > button { display: none; }
            & > ul {
                grid-column: 1 / 6;
                gap: var(--space-md);
                margin: 0 var(--space-md);
                height: 100%;
            }
            & ::slotted(*) {
                pointer-events: all;
                opacity: 1;
                grid-area: auto;
            }
        }
    `],template:p`
        <button aria-label="previous" @click="this.prev">
            <arrow-icon></arrow-icon>
        </button>
        <ul>
            <slot></slot>
        </ul>
        <button aria-label="next" @click="this.next">
            <arrow-icon></arrow-icon>
        </button>
    `,script:{prev(){this.dispatchEvent(new CustomEvent("prev",{bubbles:!0}))},next(){this.dispatchEvent(new CustomEvent("next",{bubbles:!0}))}}});const S='@property --keyword-color{syntax: "<color>"; inherits: true; initial-value: #c65347;}@property --function-color{syntax: "<color>"; inherits: true; initial-value: #c58700;}@property --string-color{syntax: "<color>"; inherits: true; initial-value: #4a8077;}@property --property-color{syntax: "<color>"; inherits: true; initial-value: #3f63c5;}@property --number-color{syntax: "<color>"; inherits: true; initial-value: #495d8a;}@property --comment-color{syntax: "<color>"; inherits: true; initial-value: #8C7350B2;}@property --punctuation-color{syntax: "<color>"; inherits: true; initial-value: #8a8a8a;}@property --enso-directive-color{syntax: "<color>"; inherits: true; initial-value: #9A4D9E;}@property --enso-binding-color{syntax: "<color>"; inherits: true; initial-value: #9A4D9E;}@property --enso-event-color{syntax: "<color>"; inherits: true; initial-value: #c05a00;}:root{--keyword-color-dark: #d26a5c;--string-color-dark: #7aa89f;--property-color-dark: #5780d8;--number-color-dark: #6c7ea0;--comment-color-dark: #9C846A99;--punctuation-color-dark: #d8d7d7;--enso-directive-color-dark: #B072B6;--enso-binding-color-dark: #B072B6;--enso-event-color-dark: #D69A63}@media(prefers-color-scheme:dark){body{--keyword-color: var(--keyword-color-dark);--string-color: var(--string-color-dark);--property-color: var(--property-color-dark);--number-color: var(--number-color-dark);--comment-color: var(--comment-color-dark);--punctuation-color: var(--punctuation-color-dark);--enso-directive: var(--enso-directive-color-dark);--enso-binding: var(--enso-binding-color-dark);--enso-event: var(--enso-event-color-dark)}}body[data-theme=light]{--keyword-color: revert;--string-color: revert;--property-color: revert;--number-color: revert;--comment-color: revert;--punctuation-color: revert;--enso-directive-color: revert;--enso-binding-color: revert;--enso-event-color: revert}body[data-theme=dark]{--keyword-color: var(--keyword-color-dark);--string-color: var(--string-color-dark);--property-color: var(--property-color-dark);--number-color: var(--number-color-dark);--comment-color: var(--comment-color-dark);--punctuation-color: var(--punctuation-color-dark);--enso-directive-color: var(--enso-directive-color-dark);--enso-binding-color: var(--enso-binding-color-dark);--enso-event-color: var(--enso-event-color-dark)}.token{white-space:pre}.token.keyword{color:var(--keyword-color)}.token.function{color:var(--function-color)}.token.string{color:var(--string-color)}.token.property{color:var(--property-color)}.token.number{color:var(--number-color)}.token.punctuation{color:var(--punctuation-color)}.token.comment{color:var(--comment-color);font-style:italic}.token.attribute{color:var(--function-color)}.token.directive,.token.binding,.token.event{color:var(--enso-binding-color)}.token.css-prop{color:var(--keyword-color)}.token.css-value{color:var(--string-color)}.highlight{display:flex}.highlight.active{text-shadow:1px 1px 4px var(--contrast-color)}.code-line{display:flex}.code-line>.space{white-space:pre}.code-pane{display:block;margin:var(--space-xs);padding:var(--space-sm);font-size:.8rem;overflow-x:auto;background:var(--code-back);border:var(--space-sm) solid var(--code-back);border-radius:.5rem}@media(min-width:768px){.code-pane{font-size:.9rem}}.scroll-hint{--fade-size: 45px;--shadow-size: 15px;--shadow-color: rgb(from var(--secondary-text) r g b / .25);overflow:auto;background:linear-gradient(var(--code-back) 33%,transparent) top,linear-gradient(transparent,var(--code-back) 66%) bottom,linear-gradient(to right,var(--code-back) 33%,transparent) left,linear-gradient(to left,var(--code-back) 33%,transparent) right,radial-gradient(farthest-side at 50% 0,var(--shadow-color),transparent) top,radial-gradient(farthest-side at 50% 100%,var(--shadow-color),transparent) bottom,radial-gradient(farthest-side at 0 50%,var(--shadow-color),transparent) left,radial-gradient(farthest-side at 100% 50%,var(--shadow-color),transparent) right;background-repeat:no-repeat;background-attachment:local,local,local,local,scroll,scroll,scroll,scroll;background-size:100% var(--fade-size),100% var(--fade-size),var(--fade-size) 100%,var(--fade-size) 100%,100% var(--shadow-size),100% var(--shadow-size),var(--shadow-size) 100%,var(--shadow-size) 100%;background-color:var(--code-back)}',I=(a,s)=>{const n=[];for(const t of a.assignedElements({flatten:!0}))n.push(...t.querySelectorAll(s));return n};function O(a,s,n={}){const t=a.getBoundingClientRect(),c=s.getBoundingClientRect();t.top>=c.top&&t.bottom<=c.bottom||s.scrollTo({top:t.top-c.top+s.scrollTop-5,behavior:n.behavior??"smooth"})}o.component("annotated-code",{watched:{descriptions:u([]),selected:r(1,Number),mode:u("stack")},styles:[e(l),e(S),e(y),e`
        :host {
            --code-height: min(450px, 50dvh);
        }
        .item {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-auto-rows: auto;
            column-gap: var(--space-lg);
            align-items: center;
            &::before {
                content: attr(data-index);
                grid-area: 1 / 1 / span 2 / 2;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                
                width: 1.25em;
                height: 1.25em;

                border: 2px solid var(--stroke-color);
                border-radius: 50%;
                font-size: 0.75em;
                color: var(--muted-text);
            }
            & > h4 {
                font-size: 1rem;
                border-bottom: 1px solid var(--stroke-color);
            }
            @media (min-width: 900px) {
                margin: 0;
                position: relative;
                border: 2px solid var(--code-back);
                overflow: visible;
                &[data-active] {
                    border-left: 2px solid var(--accent-color);
                    &::after {
                        content: '';
                        position: absolute;
                        width: 0; height: 0;
                        left: -10px;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent; 
                        border-right:10px solid var(--accent-color); 
                    }
                    & > h4 {
                        border-bottom: 1px solid var(--accent-color);
                    }
                }
            }
        }
        code.code-pane {
            height: var(--code-height);
            margin: 0;
            @media (min-width: 900px) {
                height: auto;
                max-height: 100%;
            }
        }
    `],template:p`
        <code #ref="codePane" class="code-pane scroll-hint" part="code">
            <slot @slotchange="this.onSlotChange"></slot>
        </code>
        <stack-list-view 
            :mode="{{ @:mode }}"
            @prev="()=>this.watched.selected--" 
            @next="()=>this.watched.selected++"
        >
            <li *for="{ index, title, description } of @:descriptions"
                :data-index="{{ index }}"
                :data-active="{{ @:selected === index }}"
                @mousemove="()=>this.watched.selected = index"
                class="item code-pane"
            >
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </li>
        </stack-list-view>
    `,script:{_annotations:[],_range:b(0),mount:d(function(){const a=window.matchMedia("(min-width: 900px)"),s=()=>{this.watched.mode=a.matches?"list":"stack"};s(),a.addEventListener("change",s),this._cleanup=()=>a.removeEventListener("change",s)},[m.mount]),unMount:d(function(){this._cleanup()},[m.unmount]),onSlotChange(a){this._annotations=I(a.target,"[data-title][data-description]");const s=this._annotations.map((n,t)=>(n.dataset.index=t+1,{index:t+1,title:n.dataset.title,description:n.dataset.description}));this._range=b(1,this._annotations.length+1),this.watched.selected=1,this.watched.descriptions=s},setSelected:d(function(){const a=this._range.wrap(this.watched.selected);if(a!==this.watched.selected){this.watched.selected=a;return}this._annotations.forEach((s,n)=>{const t=n===a-1;s.classList.toggle("active",t),t?(s.setAttribute("aria-current","true"),O(s,this.refs.codePane)):s.removeAttribute("aria-current")})},["selected"])}});const H='*{box-sizing:border-box;padding:0;margin:0}:root{interpolate-size:allow-keywords}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}*:not(:defined){display:none}:host{--tab-border: transparent;--tab-bg: lightgrey linear-gradient( 0deg, rgba(0,0,0,.5), transparent ) no-repeat left bottom / 100% 15%;--tab-active-bg: lightgrey;--tab-fg: black;--tab-active-fg: var(--tab-fg);--tab-separator: transparent;--tab-padding: 0 .5em;--tab-radius: .25em .25em 0 0;--tab-gap: .5em}div[role=tablist]{display:flex;flex-wrap:wrap;align-items:stretch;justify-content:flex-start;padding:var(--tab-padding);gap:var(--tab-gap)}div[role=tablist]>[role=tab]{flex:0 0 auto;min-width:max-content}:host([tab-width="equal"]) div[role=tablist]>[role=tab]{flex:1 1 0}button[role=tab]{color:var(--tab-fg);background:var(--tab-bg);border:none;border-radius:var(--tab-radius);padding:.25em .5em}button[role=tab][aria-selected=true]{color:var(--tab-active-fg);background:var(--tab-active-bg)}button[role=tab]~button[role=tab]{border-left:1px solid var(--tab-separator)}',f=(a,s,n)=>Math.max(a,Math.min(n,s));o.component("enso-tabbed-view",{watched:{tabs:u([]),selected:r(0)},styles:e(H),template:p`
        <div role="tablist" part="tablist" aria-orientation="horizontal">
            <button *for="tab of @:tabs"
                role="tab"

                :id="tab-{{ tab.index }}"
                :part="tab{{ tab.index === @:selected && ' active' }}"
                :aria-controls="panel-{{ tab.index }}"
                :aria-selected="{{ tab.index === @:selected ? 'true' : 'false' }}"
                :tabindex="{{ tab.index === @:selected ? 0 : -1 }}"

                @click="() => @:selected = tab.index"
                @keydown="e => this.onKeyDown(e, tab.index)" 
            >
                {{ tab.title }}
            </button>
        </div>
        <slot @slotchange="this.onSlotChange"></slot>
    `,script:{onSlotChange({target:a}){const s=a.assignedElements({flatten:!0}).filter(n=>n.tagName==="ENSO-TAB-PANEL");this.watched.tabs=s.map((n,t)=>(n.index=t,{title:n.title,index:t,el:n})),this.watched.selected=0},onSelection:d(function(a,s){if(!this.watched.tabs.length)return;const n=this.watched.tabs.length-1,t=f(0,n,s);if(t!==s){this.watched.selected=t;return}for(const c of this.watched.tabs)c.el.setSelected(c.index===t)},["selected"]),onKeyDown(a,s){const n=this.getAttribute("activation")==="manual",t=this.watched.tabs.length-1,c={ArrowRight:s+1,ArrowLeft:s-1,Home:0,End:t}[a.key];if(c===void 0)return;a.preventDefault();const h=f(0,t,c);this.shadowRoot.querySelector(`#tab-${h}`)?.focus(),!n&&this.watched.selected!=h&&(this.watched.selected=h)}}});const Y="*{box-sizing:border-box;padding:0;margin:0}:root{interpolate-size:allow-keywords}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}*:not(:defined){display:none}";o.component("enso-tab-panel",{settings:{useShadow:!1},styles:[e(Y),e`
        :where(enso-tab-panel) {
            border-top: 2px solid darkgrey;
            background: lightgrey;
            padding: 0.5rem;
            width: 100%;
        }
        enso-tab-panel {
            display: block;
            &[hidden] {
                display: none;
            }
        }
    `],template:p`<slot></slot>`,script:{_index:0,get index(){return this._index},set index(a){this._index=a,this._setHost()},onMount:d(function(){this._setHost()},[m.mount]),get title(){return this.getAttribute("title")||""},setSelected(a){this.hidden=!a},_setHost(){this.id=`panel-${this._index}`,this.setAttribute("role","tabpanel"),this.setAttribute("aria-labelledby",`tab-${this._index}`),this.setAttribute("tabindex","0")}}});const F=o.component("overview-section",{settings:{useShadow:!1},styles:[e(l),e`
        overview-section > site-section {
            --height: auto;
            --align: start;

        }
        enso-tabbed-view {
            --tab-bg: var(--back-overlay);
            --tab-active-bg: color-mix(
                in srgb,
                var(--back-overlay) 85%,
                var(--stroke-color)
            );
            --tab-fg: var(--secondary-text);
            --tab-active-fg: var(--primary-text);
            --tab-separator: var(--stroke-color);
            --tab-padding: 0;
            --tab-radius: 0;
            --tab-gap: 0;
            &::part(tab) {
                border-bottom: 1px solid var(--stroke-color);
            }
            @media(hover: hover) {
                &::part(tab):hover {
                    color: var(--tab-active-fg);
                }
            }
            &::part(tab active) {
                border-bottom: 2px solid var(--accent-color);
            }
        }
        enso-tab-panel {
            border-top: 2px solid transparent;
            padding: var(--space-md);
            background: var(--tab-active-bg);
        }
        annotated-code {
            height: min(50dvh, 500px);
            & [data-title][data-description]::after {
                content: '[' attr(data-index) ']';
                vertical-align: super;
                font-size: 0.75em;
                color: var(--muted-text);
            }
            @media (min-width: 900px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                height: 500px;
            }
        }
    `],template:p`
        <site-section id="overview">
            <h3>Enso Overview</h3>
            <enso-tabbed-view tab-width="equal">
                <enso-tab-panel title="Templates">
                    <annotated-code>
                        ${R}
                    </annotated-code>
                </enso-tab-panel>
                <enso-tab-panel title="Styles">
                    <annotated-code>
                        ${N}
                    </annotated-code>
                </enso-tab-panel>
                <enso-tab-panel title="Watched">
                    <annotated-code>
                        ${$}
                    </annotated-code>
                </enso-tab-panel>
                <enso-tab-panel title="Script">
                    <annotated-code>
                        ${W}
                    </annotated-code>
                </enso-tab-panel>
            </enso-tabbed-view>
        </site-section>
    `}),q="footer{position:relative;overflow:hidden;isolation:isolate;padding:var(--space-xl) var(--space-lg);display:grid;gap:.5rem;justify-items:space-between;text-align:center;font-size:.875rem;color:var(--secondary-text);width:100%;max-width:var(--max-content, auto);margin-inline:auto}footer>enso-icon{position:absolute;contain:layout paint;z-index:-1;width:min(60vw,420px);height:min(60vw,420px);top:-50%;left:50%;transform:translate(-50%);opacity:.1;-webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 50%,black 100%);mask-image:linear-gradient(to bottom,transparent 0%,black 50%,black 100%);pointer-events:none}footer a{color:inherit;text-decoration:none;opacity:.7}footer a:hover{opacity:1;text-decoration:underline}footer .version{opacity:.9}footer .links{opacity:.75}footer .copyright{opacity:.6;font-size:.8em}",J=o.component("site-footer",{styles:[e(l),e(q)],template:p`
        <footer>
            <enso-icon 
                aria-hidden="true"
                role="presentation"
                focusable="false"
            >
            </enso-icon>
            <span class="version">
                Built with Enso v.${o.version}
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
    `}),P=":root{--space-xs: clamp(.1rem, .25vw, .25rem);--space-sm: clamp(.25rem, .5vw, .5rem);--space-md: clamp(.5rem, 1vw, 1rem);--space-lg: clamp(1rem, 2vw, 2rem);--space-xl: clamp(2rem, 4vw, 3rem)}.constrained{--max-content: 1280px;width:100%}";o.component("enso-app",{settings:{useShadow:!1},styles:[e(S),e(P),e`
        enso-app {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width: 100%;
            height: fit-content;
            padding-top: 2rem;
            color: var(--primary-text);

            @media (min-width: 768px) {
                padding-top: 4rem;
            }
        }

        h3 {
            font-size: 1.5rem;
            text-align: center;
            padding-bottom: 1rem;
        }

        site-section {
            align-items: center;
        }
    `],template:p`
        ${T.html({class:"constrained"})}
        ${A.html({class:"constrained"})}
        ${B.html({class:"constrained"})}
        ${L.html({class:"constrained"})}
        ${F.html({class:"constrained"})}
        ${J.html({class:"constrained"})}
    `});
