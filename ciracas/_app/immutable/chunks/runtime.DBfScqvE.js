var Rn=Array.isArray,xn=Array.from,On=Object.defineProperty,it=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Dn=Object.prototype,In=Array.prototype,Zt=Object.getPrototypeOf;const bn=()=>{};function Nn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,M=8,et=16,E=32,Z=64,x=128,B=256,p=512,A=1024,Y=2048,N=4096,j=8192,Wt=16384,dt=32768,qn=65536,zt=1<<18,yt=1<<19,ft=Symbol("$state"),Cn=Symbol("legacy props"),Pn=Symbol("");function Et(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Fn(){throw new Error("hydration_failed")}function Ln(t){throw new Error("props_invalid_value")}function Mn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}let W=!1;function jn(){W=!0}function st(t){return{f:0,v:t,reactions:null,equals:Et,version:0}}function Hn(t){return Tt(st(t))}function sn(t,n=!1){var e;const r=st(t);return n||(r.equals=wt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Un(t,n=!1){return Tt(sn(t,n))}function Tt(t){return o!==null&&o.f&m&&(y===null?wn([t]):y.push(t)),t}function Bn(t,n){return o!==null&&ut()&&o.f&(m|et)&&(y===null||!y.includes(t))&&en(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),mt(t,A),ut()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(w(u,A),J(u)):g===null?Tn([t]):g.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&A||!e&&a===u||(w(a,n),i&(p|x)&&(i&m?mt(a,Y):J(a)))}}const Vn=1,Gn=2,Kn=4,$n=8,Zn=16,Wn=1,zn=2,an="[",un="[!",on="]",kt={},Jn=Symbol();function gt(t){console.warn("hydration_mismatch")}let R=!1;function Qn(t){R=t}let d;function P(t){if(t===null)throw gt(),kt;return d=t}function Xn(){return P(O(d))}function tr(t){if(R){if(O(d)!==null)throw gt(),kt;d=t}}function nr(t=1){if(R){for(var n=t,r=d;n--;)r=O(r);d=r}}function rr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=O(n);n.remove(),n=e}}var _t,At,St;function er(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;At=it(n,"firstChild").get,St=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Q(t=""){return document.createTextNode(t)}function X(t){return At.call(t)}function O(t){return St.call(t)}function sr(t,n){if(!R)return X(t);var r=X(d);if(r===null)r=d.appendChild(Q());else if(n&&r.nodeType!==3){var e=Q();return r==null||r.before(e),P(e),e}return P(r),r}function lr(t,n){if(!R){var r=X(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function ar(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=O(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var l=Q();return e==null||e.before(l),P(l),l}return P(e),e}function ur(t){t.textContent=""}function fn(t){var n=m|A;u===null?n|=x:u.f|=yt;const r={children:null,ctx:f,deps:null,equals:Et,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function or(t){const n=fn(t);return n.equals=wt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?lt(e):C(e)}}}function xt(t){var n,r=u;$(t.parent);try{Rt(t),n=Ut(t)}finally{$(r)}return n}function Ot(t){var n=xt(t),r=(D||t.f&x)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function lt(t){Rt(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){u===null&&o===null&&tn(),o!==null&&o.f&x&&Xt(),at&&Qt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{ct(!0),z(a),a.f|=Wt}catch(c){throw C(a),c}finally{ct(i)}}else n!==null&&J(a);var T=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!T&&!s&&e&&(l!==null&&_n(a,l),o!==null&&o.f&m)){var k=o;(k.children??(k.children=[])).push(a)}return a}function ir(t){const n=q(M,null,!1);return w(n,p),n.teardown=t,n}function fr(t){Dt();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=It(t);return e}}function _r(t){return Dt(),cn(t)}function cr(t){const n=q(Z,t,!0);return()=>{C(n)}}function It(t){return q(ht,t,!1)}function cn(t){return q(M,t,!0)}function vr(t){return vn(t)}function vn(t,n=0){return q(M|et|n,t,!0)}function pr(t,n=!0){return q(M|E,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=at,e=o;vt(!0),K(null);try{n.call(null)}finally{vt(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}qt(t,n&&!r),Nt(t),L(t,0),w(t,j);var a=t.transitions;if(a!==null)for(const T of a)T.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hr(t,n){var r=[];Pt(t,r,!0),hn(r,()=>{C(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Pt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&dt)!==0||(e.f&E)!==0;Pt(e,n,l?r:!1),e=s}}}function dr(t){Ft(t,!0)}function Ft(t,n){if(t.f&N){H(t)&&z(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&E)!==0;Ft(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,tt=[],nt=[];function Lt(){V=!1;const t=tt.slice();tt=[],pt(t)}function Mt(){G=!1;const t=nt.slice();nt=[],pt(t)}function yr(t){V||(V=!0,queueMicrotask(Lt)),tt.push(t)}function Er(t){G||(G=!0,dn(Mt)),nt.push(t)}function yn(){V&&Lt(),G&&Mt()}const Yt=0,En=1;let U=Yt,F=!1,I=!1,at=!1;function ct(t){I=t}function vt(t){at=t}let S=[],b=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let y=null;function wn(t){y=t}let _=null,h=0,g=null;function Tn(t){g=t}let jt=0,D=!1,f=null;function Ht(){return++jt}function ut(){return!W||f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&A)return!0;if(n&Y){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Ot(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function mn(t,n,r){throw t}function Ut(t){var ot;var n=_,r=h,e=g,s=o,l=D,a=y,i=f,T=t.f;_=null,h=0,g=null,o=T&(E|Z)?null:t,D=!I&&(T&x)!==0,y=null,f=t.ctx;try{var k=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return k}finally{_=n,h=r,g=e,o=s,D=l,y=a,f=i}}function kn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(x|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function z(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{n&et?pn(t):qt(t),Nt(t),bt(t);var e=Ut(t);t.teardown=typeof e=="function"?e:null,t.version=jt}catch(s){mn(s)}finally{u=r}}}function Bt(){b>1e3&&(b=0,nn()),b++}function Vt(t){var n=t.length;if(n!==0){Bt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Gt(s,l),gn(l)}}finally{I=r}}}function gn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|N))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}}function An(){if(F=!1,b>1001)return;const t=S;S=[],Vt(t),F||(b=0)}function J(t){U===Yt&&(F||(F=!0,queueMicrotask(An)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|E)){if(!(r&p))return;n.f^=p}}S.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,a=l&&(s&p)!==0;if(!a&&!(s&N))if(s&M){l?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var k=v.next;if(k!==null){r=k;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Gt(i,n)}function Kt(t){var n=U,r=S;try{Bt();const s=[];U=En,S=s,F=!1,Vt(r);var e=t==null?void 0:t();return yn(),(S.length>0||s.length>0)&&Kt(),b=0,e}finally{U=n,S=r}}async function wr(){await Promise.resolve(),Kt()}function Tr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=xt(t);return lt(t),e}if(o!==null){y!==null&&y.includes(t)&&rn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&E)&&g.includes(t)&&(w(u,A),J(u))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Ot(l)),t.v}function mr(t){const n=o;try{return o=null,t()}finally{o=n}}const Sn=~(A|Y|p);function w(t,n){t.f=t.f&Sn|n}function kr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function gr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),It(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ft as $,On as A,Rn as B,vn as C,pr as D,dt as E,C as F,R as G,d as H,er as I,X as J,an as K,O as L,kt as M,Qn as N,P as O,Xn as P,on as Q,gt as R,Fn as S,ur as T,xn as U,cr as V,Q as W,sn as X,Bn as Y,Wn as Z,zn as _,gr as a,Dn as a0,In as a1,st as a2,Mn as a3,Jn as a4,it as a5,Yn as a6,Zt as a7,un as a8,rr as a9,dr as aa,hr as ab,It as ac,cn as ad,Ln as ae,qn as af,Kn as ag,wt as ah,E as ai,Z as aj,Vn as ak,Gn as al,$n as am,Cn as an,or as ao,Zn as ap,Kt as aq,wr as ar,Hn as as,Er as at,Pn as au,ut as av,nr as aw,Un as ax,ar as b,sr as c,f as d,mr as e,lr as f,_r as g,pt as h,Tr as i,Nn as j,Ar as k,W as l,fn as m,bn as n,jn as o,kr as p,K as q,tr as r,Jt as s,vr as t,fr as u,$ as v,o as w,u as x,ir as y,yr as z};