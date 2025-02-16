var Xt=t=>{throw TypeError(t)};var Oe=(t,e,n)=>e.has(t)||Xt("Cannot "+n);var S=(t,e,n)=>(Oe(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Xt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{o as Pt}from"./BgNj6qsk.js";import{aR as It,aS as je,aK as C,k as N,a8 as O,aL as $e}from"./BPB6zGR0.js";const q=[];function jt(t,e=It){let n=null;const r=new Set;function a(o){if(je(t,o)&&(t=o,n)){const c=!q.length;for(const l of r)l[1](),q.push(l,t);if(c){for(let l=0;l<q.length;l+=2)q[l][0](q[l+1]);q.length=0}}}function s(o){a(o(t))}function i(o,c=It){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||It),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}new URL("sveltekit-internal://");function De(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Fe(t){return t.split("%25").map(decodeURI).join("%25")}function Ve(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Ut({href:t}){return t.split("#")[0]}function qe(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function Be(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ge(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const Me=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&z.delete($t(t)),Me(t,e));const z=new Map;function Ke(t,e){const n=$t(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&z.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ge(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function He(t,e,n){if(z.size>0){const r=$t(t,n),a=z.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);z.delete(r)}}return window.fetch(e,n)}function $t(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Be(...a)}"]`}return r}const We=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ye(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Je(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Lt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Lt(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const u=We.exec(c),[,p,y,f,m]=u;return e.push({name:f,matcher:m,optional:!!p,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return Lt(c)}).join("")}).join("")}/?$`),params:e}}function ze(t){return!/^\([^)]+\)$/.test(t)}function Je(t){return t.slice(1).split("/").filter(ze)}function Xe(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=e[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Lt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ze({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:y}=Ye(o),f={id:o,exec:m=>{const d=p.exec(m);if(d)return Xe(d,y,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function he(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Zt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var ie;const x=((ie=globalThis.__sveltekit_1qg7syn)==null?void 0:ie.base)??"";var ce;const Qe=((ce=globalThis.__sveltekit_1qg7syn)==null?void 0:ce.assets)??x,tn="1739692373837",de="sveltekit:snapshot",pe="sveltekit:scroll",ge="sveltekit:states",en="sveltekit:pageurl",G="sveltekit:history",X="sveltekit:navigation",ht={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function me(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Dt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Qt={...ht,"":ht.hover};function ye(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function _e(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ye(t)}}function Ct(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||bt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ut&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function dt(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),e===null&&(e=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=ye(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Qt[r??"off"],preload_data:Qt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function te(t){const e=jt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const we={v:()=>{}};function nn(){const{set:t,subscribe:e}=jt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Qe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==tn;return i&&(t(!0),we.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function bt(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function ee(t){const e=an(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function an(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=rn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const on=-1,sn=-2,cn=-3,ln=-4,fn=-5,un=-6;function hn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===on)return;if(s===cn)return NaN;if(s===ln)return 1/0;if(s===fn)return-1/0;if(s===un)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let f=1;f<o.length;f+=1)u.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let f=1;f<o.length;f+=2)y[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],d=ee(m),h=new f(d);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=ee(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==sn&&(c[l]=a(u))}}else{const c={};r[s]=c;for(const l in o){const u=o[l];c[l]=a(u)}}return r[s]}return a(0)}const ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ve];const dn=new Set([...ve]);[...dn];function pn(t){return t.filter(e=>e!=null)}class St{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ft{constructor(e,n){this.status=e,this.location=n}}class Vt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const gn="x-sveltekit-invalidated",mn="x-sveltekit-trailing-slash";function pt(t){return t instanceof St||t instanceof Vt?t.status:500}function yn(t){return t instanceof Vt?t.text:"Internal Error"}let U,Z,Tt;const _n=Pt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Pt.toString());var et,nt,rt,at,ot,st,it,ct,le,lt,fe,ft,ue;_n?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Tt={current:!1}):(U=new(le=class{constructor(){P(this,et,C({}));P(this,nt,C(null));P(this,rt,C(null));P(this,at,C({}));P(this,ot,C({id:null}));P(this,st,C({}));P(this,it,C(-1));P(this,ct,C(new URL("https://example.com")))}get data(){return N(S(this,et))}set data(e){O(S(this,et),e)}get form(){return N(S(this,nt))}set form(e){O(S(this,nt),e)}get error(){return N(S(this,rt))}set error(e){O(S(this,rt),e)}get params(){return N(S(this,at))}set params(e){O(S(this,at),e)}get route(){return N(S(this,ot))}set route(e){O(S(this,ot),e)}get state(){return N(S(this,st))}set state(e){O(S(this,st),e)}get status(){return N(S(this,it))}set status(e){O(S(this,it),e)}get url(){return N(S(this,ct))}set url(e){O(S(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,le),Z=new(fe=class{constructor(){P(this,lt,C(null))}get current(){return N(S(this,lt))}set current(e){O(S(this,lt),e)}},lt=new WeakMap,fe),Tt=new(ue=class{constructor(){P(this,ft,C(!1))}get current(){return N(S(this,ft))}set current(e){O(S(this,ft),e)}},ft=new WeakMap,ue),we.v=()=>Tt.current=!0);function wn(t){Object.assign(U,t)}const vn="/__data.json",bn=".html__data.json";function Sn(t){return t.endsWith(".html")?t.replace(/\.html$/,bn):t.replace(/\/$/,"")+vn}const An=new Set(["icon","shortcut icon","apple-touch-icon"]),V=he(pe)??{},Q=he(de)??{},$={url:te({}),page:te({}),navigating:jt(null),updated:nn()};function qt(t){V[t]=Dt()}function kn(t,e){let n=t+1;for(;V[n];)delete V[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function be(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function ne(){}let Bt,Nt,gt,j,Ot,A;const mt=[],yt=[];let L=null;const Se=new Set,En=new Set,M=new Set;let v={branch:[],error:null,url:null},Gt=!1,_t=!1,re=!0,tt=!1,W=!1,Ae=!1,Mt=!1,ke,R,T,F;const J=new Set;async function Kn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Bt=Ze(t),j=document.documentElement,Ot=e,Nt=t.nodes[0],gt=t.nodes[1],Nt(),gt(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[X],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[X]:T},""));const r=V[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await $n(Ot,n):Nn(A.hash?Ne(new URL(location.href)):location.href,{replaceState:!0}),jn()}function Rn(){mt.length=0,Mt=!1}function Ee(t){yt.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=yt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Re(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=yt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ae(){qt(R),Zt(pe,V),Ee(T),Zt(de,Q)}async function Kt(t,e,n,r){return Y({type:"goto",url:me(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Mt=!0),e.invalidate&&e.invalidate.forEach(On)}})}async function In(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Ue({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function xt(t){var n;const e=(n=await kt(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Ie(t,e,n){var s;v=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),ke=new A.root({target:e,props:{...t.props,stores:$,components:yt},hydrate:n,sync:!1}),Re(T);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(a)),_t=!0}function wt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=De(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:pn(n).map(f=>f.node.component),page:Yt(U)}};i!==void 0&&(c.props.form=i);let l={},u=!U,p=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],d=v.branch[f];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!v.url||t.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||u)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:U.data}),c}async function Ht({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var u,p,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let f=function(...d){for(const h of d){const{href:_}=new URL(h,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:qe(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},A.hash),async fetch(d,h){let _;d instanceof Request?(_=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):_=d;const k=new URL(_,n);return o&&f(k.href),k.origin===n.origin&&(_=k.href.slice(n.origin.length)),_t?He(_,k.href,h):Ke(_,h)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function oe(t,e,n,r,a,s){if(Mt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(mt.some(o=>o(new URL(i))))return!0;return!1}function Wt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Un(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function se({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Yt(U),constructors:[]}}}async function Ue({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=v.url?t!==vt(v.url):!1,y=v.route?a.id!==v.route.id:!1,f=Un(v.url,n);let m=!1;const d=l.map((g,w)=>{var D;const b=v.branch[w],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||oe(m,y,p,f,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{u=await xe(n,d)}catch(g){const w=await K(g,{url:n,params:r,route:{id:t}});return J.has(s)?se({error:w,url:n,params:r,route:a}):At({status:pt(g),error:w,url:n,route:a})}if(u.type==="redirect")return u}const h=u==null?void 0:u.nodes;let _=!1;const k=l.map(async(g,w)=>{var Et;if(!g)return;const b=v.branch[w],E=h==null?void 0:h[w];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!oe(_,y,p,f,(Et=b.universal)==null?void 0:Et.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Ht({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Jt;const zt={};for(let Rt=0;Rt<w;Rt+=1)Object.assign(zt,(Jt=await k[Rt])==null?void 0:Jt.data);return zt},server_data_node:Wt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of k)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await k[g])}catch(w){if(w instanceof Ft)return{type:"redirect",location:w.location};if(J.has(s))return se({error:await K(w,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=pt(w),E;if(h!=null&&h.includes(w))b=w.status??b,E=w.error;else if(w instanceof St)E=w.body;else{if(await $.updated.check())return await be(),await H(n);E=await K(w,{params:r,url:n,route:{id:a.id}})}const D=await Ln(g,I,i);return D?wt({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Te(n,{id:a.id},E,b)}else I.push(void 0);return wt({url:n,params:r,branch:I,status:200,error:null,route:a,form:e?void 0:null})}async function Ln(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await xe(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||Gt)&&await H(n)}try{const o=await Ht({loader:Nt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Wt(s)}),c={node:await gt(),loader:gt,universal:null,server:null,data:null};return wt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Ft)return Kt(new URL(o.location,location.href),{},0);throw o}}function Tn(t){let e;try{if(e=A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function kt(t,e){if(t&&!bt(t,x,A.hash)){const n=Tn(t);if(!n)return;const r=xn(n);for(const a of Bt){const s=a.exec(r);if(s)return{id:vt(t),invalidating:e,route:a,params:Ve(s),url:t}}}}function xn(t){return Fe(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function vt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Le({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Ce(v,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return tt||Se.forEach(o=>o(i)),a?null:s}async function Y({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=ne,block:u=ne}){const p=F;F=c;const y=await kt(e,!1),f=Le({url:e,type:t,delta:n==null?void 0:n.delta,intent:y});if(!f){u(),F===c&&(F=p);return}const m=R,d=T;l(),tt=!0,_t&&$.navigating.set(Z.current=f.navigation);let h=y&&await Ue(y);if(!h){if(bt(e,x,A.hash))return await H(e);h=await Te(e,{id:null},await K(new Vt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(y==null?void 0:y.url)||e,F!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await At({status:500,error:await K(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Kt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await be(),await H(e));if(Rn(),qt(m),Ee(d),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,w={[G]:R+=g,[X]:T+=g,[ge]:i};(s?history.replaceState:history.pushState).call(history,w,"",e),s||kn(R,T)}if(L=null,h.props.page.state=i,_t){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(En,w=>w(f.navigation)))).filter(w=>typeof w=="function");if(g.length>0){let w=function(){g.forEach(b=>{M.delete(b)})};g.push(w),g.forEach(b=>{M.add(b)})}ke.$set(h.props),wn(h.props.page),Ae=!0}else Ie(h,Ot,!1);const{activeElement:_}=document;await $e();const k=n?n.scroll:a?Dt():null;if(re){const g=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==_&&document.activeElement!==document.body;!r&&!I&&Dn(),re=!0,h.props.page&&Object.assign(U,h.props.page),tt=!1,t==="popstate"&&Re(T),f.fulfil(void 0),M.forEach(g=>g(f.navigation)),$.navigating.set(Z.current=null)}async function Te(t,e,n,r){return t.origin===ut&&t.pathname===location.pathname&&!Gt?await At({status:r,error:n,url:t,route:e}):await H(t)}function Pn(){let t,e;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(xt(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=_e(i,j);if(!c||c===e)return;e=c;const{url:l,external:u,download:p}=Ct(c,x,A.hash);if(u||p)return;const y=dt(c),f=l&&vt(v.url)===vt(l);if(!y.reload&&!f)if(o<=y.preload_data){const m=await kt(l,!1);m&&In(m)}else o<=y.preload_code&&xt(l)}function s(){r.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:l}=Ct(i,x,A.hash);if(c||l)continue;const u=dt(i);u.reload||(u.preload_code===ht.viewport&&r.observe(i),u.preload_code===ht.eager&&xt(o))}}M.add(s),s()}function K(t,e){if(t instanceof St)return t.body;const n=pt(t),r=yn(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Cn(t,e){Pt(()=>(t.add(e),()=>{t.delete(e)}))}function Hn(t){Cn(M,t)}function Nn(t,e={}){return t=new URL(me(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):Kt(t,e,0)}function On(t){if(typeof t=="function")mt.push(t);else{const{href:e}=new URL(t,location.href);mt.push(n=>n.href===e)}}function jn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ae(),!tt){const a=Ce(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Se.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ae()}),(e=navigator.connection)!=null&&e.saveData||Pn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=_e(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Ct(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=u===Ut(location);if(s||c.reload&&(!y||!p)){Le({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(p!==void 0&&y){const[,f]=v.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(W=!0,qt(R),t(a),!c.replace_state)return;W=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(bt(o,x,!1))return;const c=n.target,l=dt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),Y({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(F={},a===R)return;const s=V[a],i=n.state[ge]??{},o=new URL(n.state[en]??location.href),c=n.state[X],l=v.url?Ut(location)===Ut(v.url):!1;if(c===T&&(Ae||l)){i!==U.state&&(U.state=i),t(o),V[R]=Dt(),s&&scrollTo(s.x,s.y),R=a;return}const p=a-R;await Y({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=a,T=c},block:()=>{history.go(-p)},nav_token:F})}else if(!W){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{W?(W=!1,history.replaceState({...history.state,[G]:++R,[X]:T},"",location.href)):A.hash&&v.url.hash===location.hash&&Y({type:"goto",url:Ne(v.url)})});for(const n of document.querySelectorAll("link"))An.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function t(n){v.url=U.url=n,$.page.set(Yt(U)),$.page.notify()}}async function $n(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Gt=!0;const l=new URL(location.href);let u;({params:a={},route:s={id:null}}=await kt(l,!1)||{}),u=Bt.find(({id:f})=>f===s.id);let p,y=!0;try{const f=r.map(async(d,h)=>{const _=o[h];return _!=null&&_.uses&&(_.uses=Pe(_.uses)),Ht({loader:A.nodes[d],url:l,params:a,route:s,parent:async()=>{const k={};for(let I=0;I<h;I+=1)Object.assign(k,(await f[I]).data);return k},server_data_node:Wt(_)})}),m=await Promise.all(f);if(u){const d=u.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}p=wt({url:l,params:a,branch:m,status:e,error:n,form:c,route:u??null})}catch(f){if(f instanceof Ft){await H(new URL(f.location,location.href));return}p=await At({status:pt(f),error:await K(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",y=!1}p.props.page&&(p.props.page.state={}),Ie(p,t,y)}async function xe(t,e){var s;const n=new URL(t);n.pathname=Sn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(mn,"1"),n.searchParams.append(gn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new St(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function u(f){return hn(f,{...A.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let p="";for(;;){const{done:f,value:m}=await c.read();if(f&&!p)break;for(p+=!m&&p?`
`:l.decode(m,{stream:!0});;){const d=p.indexOf(`
`);if(d===-1)break;const h=JSON.parse(p.slice(0,d));if(p=p.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(y=h.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Pe(_.uses),_.data=u(_.data))}),i(h);else if(h.type==="chunk"){const{id:_,data:k,error:I}=h,g=o.get(_);o.delete(_),I?g.reject(u(I)):g.fulfil(u(k))}}}})}function Pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Dn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ce(t,e,n,r){var c,l;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Yt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Ne(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Hn as a,Kn as b,Nn as g,U as p,$ as s};
