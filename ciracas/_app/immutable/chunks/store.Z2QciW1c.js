import{I as m,J as I,K as L,L as O,M as y,N as b,O as N,P as V,H as l,Q as H,R as Y,S as M,T as C,U as P,V as W,W as $,D as j,p as k,G as w,x as G,a as J,d as K,n as E,e as Q,y as U,X,i as q,Y as z}from"./runtime.DBfScqvE.js";import{a as B,r as S,h}from"./events.HeriMUw_.js";import{b as F}from"./disclose-version.D5KV41or.js";const Z=["touchstart","touchmove"];function x(e){return Z.includes(e)}function ae(e,s){var r=s==null?"":typeof s=="object"?s+"":s;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ee(e,s){return A(e,s)}function ie(e,s){m(),s.intro=s.intro??!1;const r=s.target,t=w,o=l;try{for(var n=I(r);n&&(n.nodeType!==8||n.data!==L);)n=O(n);if(!n)throw y;b(!0),N(n),V();const f=A(e,{...s,anchor:n});if(l===null||l.nodeType!==8||l.data!==H)throw Y(),y;return b(!1),f}catch(f){if(f===y)return s.recover===!1&&M(),m(),C(r),b(!1),ee(e,s);throw f}finally{b(t),N(o)}}const d=new Map;function A(e,{target:s,anchor:r,props:t={},events:o,context:n,intro:f=!0}){m();var g=new Set,p=u=>{for(var a=0;a<u.length;a++){var i=u[a];if(!g.has(i)){g.add(i);var c=x(i);s.addEventListener(i,h,{passive:c});var R=d.get(i);R===void 0?(document.addEventListener(i,h,{passive:c}),d.set(i,1)):d.set(i,R+1)}}};p(P(B)),S.add(p);var _=void 0,D=W(()=>{var u=r??s.appendChild($());return j(()=>{if(n){k({});var a=K;a.c=n}o&&(t.$$events=o),w&&F(u,null),_=e(u,t)||{},w&&(G.nodes_end=l),n&&J()}),()=>{var c;for(var a of g){s.removeEventListener(a,h);var i=d.get(a);--i===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,i)}S.delete(p),T.delete(_),u!==r&&((c=u.parentNode)==null||c.removeChild(u))}});return T.set(_,D),_}let T=new WeakMap;function ue(e){const s=T.get(e);s&&s()}function se(e,s,r){if(e==null)return s(void 0),E;const t=Q(()=>e.subscribe(s,r));return t.unsubscribe?()=>t.unsubscribe():t}let v=!1;function oe(e,s,r){const t=r[s]??(r[s]={store:null,source:X(void 0),unsubscribe:E});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=E;else{var o=!0;t.unsubscribe=se(e,n=>{o?t.source.v=n:z(t.source,n)}),o=!1}return q(t.source)}function de(){const e={};return U(()=>{for(var s in e)e[s].unsubscribe()}),e}function fe(e){var s=v;try{return v=!1,[e(),v]}finally{v=s}}export{ae as a,oe as b,fe as c,ie as h,ee as m,de as s,ue as u};