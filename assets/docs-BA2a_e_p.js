const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./intro.enso-C6qS0vi7.js","./reset-tpUweo2c.js","./testpage2.enso-BxNaP3bJ.js"])))=>i.map(i=>d[i]);
import{L as n,b as o,i as s,R as p,_ as r,T as f,C as g,a as d}from"./reset-tpUweo2c.js";const w=n.component("enso-404",{styles:[s(p),s`

    `],template:o`
        <h1>404</h1>
        <p>Page not found.</p>
    `});class y{#e;#i;#a;#t;constructor(t,e,i={}){this.#e=t,this.#i=e,this.#a=i.defaultPage??"intro",this.#t=i.base??"/"}normalize(t){return console.log(this.#t),this.#t!=="/"&&t.startsWith(this.#t)&&(t=t.slice(this.#t.length)),t}async navigate(t){const e=new URL(t,location.origin);history.pushState({},"",e.pathname),await this.load(e.pathname)}async load(t){t=this.normalize(t);const i=t.split("/").filter(Boolean).pop()||this.#a,l=this.#i[i],u=l?(await l()).default:w;this.#e.replaceChildren(u())}}function _(a,t="/docs"){navigation.addEventListener("navigate",e=>{if(!e.canIntercept)return;const i=new URL(e.destination.url);i.origin===location.origin&&i.pathname.startsWith(t)&&e.intercept({async handler(){await a.load(i.pathname)}})})}const m=[{title:"Test",children:[{id:"test-page-1",title:"Intro test",link:"test-page-1",loader:()=>r(()=>import("./intro.enso-C6qS0vi7.js"),__vite__mapDeps([0,1]),import.meta.url),children:[{title:"dummy heading 1"}]}]},{title:"Test - 2",children:[{id:"test-page-2",title:"Test page 2",link:"test-page-2",loader:()=>r(()=>import("./testpage2.enso-BxNaP3bJ.js"),__vite__mapDeps([2,1]),import.meta.url)}]}];function h(a,t={}){for(const e of a)e.id&&e.loader&&(t[e.id]=e.loader),e.children&&h(e.children,t);return t}const v=h(m),c=new URL("docs/",location.origin+"./").pathname;n.component("enso-spa",{settings:{useShadow:!1},styles:s`
        enso-spa {
            display: flex;
            width: 100%;
            height: 100%;
        }
        main {
            border: 1px solid red;
        }
    `,template:o`
        <slot></slot>
        <main #ref="outlet" id="outlet"></main>
    `,script:{router:null,onStart:f(async function(){this.router=new y(this.refs.outlet,v,{base:c,defaultPage:"test-page-1"}),_(this.router,c),await this.router.load(location.pathname)},[g.mount],!1)}});n.component("enso-tree-item",{watched:{item:d(null)},template:o`
        <a *if="{{ !@:item.children?.length }}" :href="{{ @:item.link }}">{{ @:item.title }}</a>

        <details *if="{{ @:item.children?.length }}">
            <summary><a :href="{{ @:item.link }}">{{ @:item.title }}</a></summary>
            <ul *if="{{ @:item.children?.length }}">
                <li *for="it of @:item.children">
                    <enso-tree-item .item="{{ it }}"></enso-tree-item>
                </li>
            </ul>
        </details>
    `});n.component("enso-tree-view",{watched:{items:d([],!0)},styles:[s`
        :host { display: block; }
        ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }
    `],template:o`
        <ul>
            <li *for="item of @:items">
                <enso-tree-item .item="{{ item }}"></enso-tree-item>
            </li>
        </ul>
    `});const R=document.querySelector("enso-tree-view");R.items=m;
