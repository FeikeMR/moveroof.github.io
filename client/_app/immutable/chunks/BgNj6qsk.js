import{Y as i,Q as c,y as _,aa as m,V as p}from"./BPB6zGR0.js";function u(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function h(e){c===null&&u(),m&&c.l!==null?d(c).m.push(e):i(()=>{const t=p(e);if(typeof t=="function")return t})}function v(e,t,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:o,cancelable:s})}function x(){const e=c;return e===null&&u(),(t,o,s)=>{var a;const n=(a=e.s.$$events)==null?void 0:a[t];if(n){const l=_(n)?n.slice():[n],r=v(t,o,s);for(const f of l)f.call(e.x,r);return!r.defaultPrevented}return!0}}function d(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}export{x as c,h as o};
