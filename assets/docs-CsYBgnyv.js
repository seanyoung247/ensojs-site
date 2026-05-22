const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/intro.enso-D_gc-b3o.js","assets/reset-CKXpDUjB.js","assets/testpage2.enso-KUgENA5R.js"])))=>i.map(i=>d[i]);
import{L as n,b as o,i as a,R as p,_ as r,T as f,C as g,a as d}from"./reset-CKXpDUjB.js";const y=n.component("enso-404",{styles:[a(p),a`

    `],template:o`
        <h1>404</h1>
        <p>Page not found.</p>
    `});class w{#e;#i;#s;#t;constructor(t,e,i={}){this.#e=t,this.#i=e,this.#s=i.defaultPage??"intro",this.#t=i.base??"/"}normalize(t){return console.log(this.#t),this.#t!=="/"&&t.startsWith(this.#t)&&(t=t.slice(this.#t.length)),t}async navigate(t){const e=new URL(t,location.origin);history.pushState({},"",e.pathname),await this.load(e.pathname)}async load(t){t=this.normalize(t);const i=t.split("/").filter(Boolean).pop()||this.#s,l=this.#i[i],u=l?(await l()).default:y;this.#e.replaceChildren(u())}}function _(s,t="/docs"){navigation.addEventListener("navigate",e=>{if(!e.canIntercept)return;const i=new URL(e.destination.url);i.origin===location.origin&&i.pathname.startsWith(t)&&e.intercept({async handler(){await s.load(i.pathname)}})})}const h=[{title:"Test",children:[{id:"test-page-1",title:"Intro test",link:"test-page-1",loader:()=>r(()=>import("./intro.enso-D_gc-b3o.js"),__vite__mapDeps([0,1])),children:[{title:"dummy heading 1"}]}]},{title:"Test - 2",children:[{id:"test-page-2",title:"Test page 2",link:"test-page-2",loader:()=>r(()=>import("./testpage2.enso-KUgENA5R.js"),__vite__mapDeps([2,1]))}]}];function m(s,t={}){for(const e of s)e.id&&e.loader&&(t[e.id]=e.loader),e.children&&m(e.children,t);return t}const v=m(h),c="/ensojs-sitedocs/";n.component("enso-spa",{settings:{useShadow:!1},styles:a`
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
    `,script:{router:null,onStart:f(async function(){this.router=new w(this.refs.outlet,v,{base:c,defaultPage:"test-page-1"}),_(this.router,c),await this.router.load(location.pathname)},[g.mount],!1)}});n.component("enso-tree-item",{watched:{item:d(null)},template:o`
        <a *if="{{ !@:item.children?.length }}" :href="{{ @:item.link }}">{{ @:item.title }}</a>

        <details *if="{{ @:item.children?.length }}">
            <summary><a :href="{{ @:item.link }}">{{ @:item.title }}</a></summary>
            <ul *if="{{ @:item.children?.length }}">
                <li *for="it of @:item.children">
                    <enso-tree-item .item="{{ it }}"></enso-tree-item>
                </li>
            </ul>
        </details>
    `});n.component("enso-tree-view",{watched:{items:d([],!0)},styles:[a`
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
    `});const R=document.querySelector("enso-tree-view");R.items=h;
