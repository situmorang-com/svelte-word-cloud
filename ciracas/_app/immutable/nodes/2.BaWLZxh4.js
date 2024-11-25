import{a as Fu,t as Uu}from"../chunks/disclose-version.D5KV41or.js";import{i as Ah}from"../chunks/legacy.DAPzh17X.js";import{G as Ds,at as Rh,au as bh,av as Sh,ad as Ch,p as Ph,f as xh,a as Vh,Y as Gi,i as Er,c as Bu,b as kh,r as $u,aw as Dh,ax as Nh}from"../chunks/runtime.DBfScqvE.js";import{b as Mh,l as Oh,e as wr}from"../chunks/events.HeriMUw_.js";import{o as Lh}from"../chunks/index-client.CqmGgTt3.js";import{w as Fh}from"../chunks/index.xkdO41z5.js";function Uh(n){if(Ds){var t=!1,e=()=>{if(!t){if(t=!0,n.hasAttribute("value")){var r=n.value;Ea(n,"value",null),n.value=r}if(n.hasAttribute("checked")){var i=n.checked;Ea(n,"checked",null),n.checked=i}}};n.__on_r=e,Rh(e),Mh()}}function Ea(n,t,e,r){var i=n.__attributes??(n.__attributes={});Ds&&(i[t]=n.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&n.nodeName==="LINK")||i[t]!==(i[t]=e)&&(t==="style"&&"__styles"in n&&(n.__styles={}),t==="loading"&&(n[bh]=e),n.removeAttribute(t))}function Bh(n,t,e=t){var r=Sh();Oh(n,"input",()=>{var i=Hi(n)?Ki(n.value):n.value;e(i),r&&i!==(i=t())&&(n.value=i??"")}),Ch(()=>{var i=t();if(Ds&&n.defaultValue!==n.value){e(Hi(n)?Ki(n.value):n.value);return}Hi(n)&&i===Ki(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Hi(n){var t=n.type;return t==="number"||t==="range"}function Ki(n){return n===""?null:+n}class wa extends Map{constructor(t,e=zh){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[r,i]of t)this.set(r,i)}get(t){return super.get(Ta(this,t))}has(t){return super.has(Ta(this,t))}set(t,e){return super.set($h(this,t),e)}delete(t){return super.delete(qh(this,t))}}function Ta({_intern:n,_key:t},e){const r=t(e);return n.has(r)?n.get(r):e}function $h({_intern:n,_key:t},e){const r=t(e);return n.has(r)?n.get(r):(n.set(r,e),e)}function qh({_intern:n,_key:t},e){const r=t(e);return n.has(r)&&(e=n.get(r),n.delete(r)),e}function zh(n){return n!==null&&typeof n=="object"?n.valueOf():n}var jh={value:()=>{}};function qu(){for(var n=0,t=arguments.length,e={},r;n<t;++n){if(!(r=arguments[n]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new xr(e)}function xr(n){this._=n}function Gh(n,t){return n.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}xr.prototype=qu.prototype={constructor:xr,on:function(n,t){var e=this._,r=Gh(n+"",e),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(n=r[o]).type)&&(i=Hh(e[i],n.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(n=r[o]).type)e[i]=Ia(e[i],n.name,t);else if(t==null)for(i in e)e[i]=Ia(e[i],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new xr(n)},call:function(n,t){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],r=0,i=o.length;r<i;++r)o[r].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,o=r.length;i<o;++i)r[i].value.apply(t,e)}};function Hh(n,t){for(var e=0,r=n.length,i;e<r;++e)if((i=n[e]).name===t)return i.value}function Ia(n,t,e){for(var r=0,i=n.length;r<i;++r)if(n[r].name===t){n[r]=jh,n=n.slice(0,r).concat(n.slice(r+1));break}return e!=null&&n.push({name:t,value:e}),n}var is="http://www.w3.org/1999/xhtml";const Aa={svg:"http://www.w3.org/2000/svg",xhtml:is,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function si(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Aa.hasOwnProperty(t)?{space:Aa[t],local:n}:n}function Kh(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===is&&t.documentElement.namespaceURI===is?t.createElement(n):t.createElementNS(e,n)}}function Wh(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function zu(n){var t=si(n);return(t.local?Wh:Kh)(t)}function Qh(){}function Ns(n){return n==null?Qh:function(){return this.querySelector(n)}}function Xh(n){typeof n!="function"&&(n=Ns(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,c=r[i]=new Array(a),l,f,d=0;d<a;++d)(l=o[d])&&(f=n.call(l,l.__data__,d,o))&&("__data__"in l&&(f.__data__=l.__data__),c[d]=f);return new kt(r,this._parents)}function Yh(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Jh(){return[]}function ju(n){return n==null?Jh:function(){return this.querySelectorAll(n)}}function Zh(n){return function(){return Yh(n.apply(this,arguments))}}function tf(n){typeof n=="function"?n=Zh(n):n=ju(n);for(var t=this._groups,e=t.length,r=[],i=[],o=0;o<e;++o)for(var a=t[o],c=a.length,l,f=0;f<c;++f)(l=a[f])&&(r.push(n.call(l,l.__data__,f,a)),i.push(l));return new kt(r,i)}function Gu(n){return function(){return this.matches(n)}}function Hu(n){return function(t){return t.matches(n)}}var ef=Array.prototype.find;function nf(n){return function(){return ef.call(this.children,n)}}function rf(){return this.firstElementChild}function sf(n){return this.select(n==null?rf:nf(typeof n=="function"?n:Hu(n)))}var of=Array.prototype.filter;function af(){return Array.from(this.children)}function uf(n){return function(){return of.call(this.children,n)}}function cf(n){return this.selectAll(n==null?af:uf(typeof n=="function"?n:Hu(n)))}function lf(n){typeof n!="function"&&(n=Gu(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,c=r[i]=[],l,f=0;f<a;++f)(l=o[f])&&n.call(l,l.__data__,f,o)&&c.push(l);return new kt(r,this._parents)}function Ku(n){return new Array(n.length)}function hf(){return new kt(this._enter||this._groups.map(Ku),this._parents)}function Br(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Br.prototype={constructor:Br,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function ff(n){return function(){return n}}function df(n,t,e,r,i,o){for(var a=0,c,l=t.length,f=o.length;a<f;++a)(c=t[a])?(c.__data__=o[a],r[a]=c):e[a]=new Br(n,o[a]);for(;a<l;++a)(c=t[a])&&(i[a]=c)}function pf(n,t,e,r,i,o,a){var c,l,f=new Map,d=t.length,_=o.length,E=new Array(d),R;for(c=0;c<d;++c)(l=t[c])&&(E[c]=R=a.call(l,l.__data__,c,t)+"",f.has(R)?i[c]=l:f.set(R,l));for(c=0;c<_;++c)R=a.call(n,o[c],c,o)+"",(l=f.get(R))?(r[c]=l,l.__data__=o[c],f.delete(R)):e[c]=new Br(n,o[c]);for(c=0;c<d;++c)(l=t[c])&&f.get(E[c])===l&&(i[c]=l)}function mf(n){return n.__data__}function gf(n,t){if(!arguments.length)return Array.from(this,mf);var e=t?pf:df,r=this._parents,i=this._groups;typeof n!="function"&&(n=ff(n));for(var o=i.length,a=new Array(o),c=new Array(o),l=new Array(o),f=0;f<o;++f){var d=r[f],_=i[f],E=_.length,R=_f(n.call(d,d&&d.__data__,f,r)),P=R.length,k=c[f]=new Array(P),x=a[f]=new Array(P),q=l[f]=new Array(E);e(d,_,k,x,q,R,t);for(var B=0,G=0,tt,_t;B<P;++B)if(tt=k[B]){for(B>=G&&(G=B+1);!(_t=x[G])&&++G<P;);tt._next=_t||null}}return a=new kt(a,r),a._enter=c,a._exit=l,a}function _f(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function yf(){return new kt(this._exit||this._groups.map(Ku),this._parents)}function vf(n,t,e){var r=this.enter(),i=this,o=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),t!=null&&(i=t(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function Ef(n){for(var t=n.selection?n.selection():n,e=this._groups,r=t._groups,i=e.length,o=r.length,a=Math.min(i,o),c=new Array(i),l=0;l<a;++l)for(var f=e[l],d=r[l],_=f.length,E=c[l]=new Array(_),R,P=0;P<_;++P)(R=f[P]||d[P])&&(E[P]=R);for(;l<i;++l)c[l]=e[l];return new kt(c,this._parents)}function wf(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var r=n[t],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Tf(n){n||(n=If);function t(_,E){return _&&E?n(_.__data__,E.__data__):!_-!E}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a=e[o],c=a.length,l=i[o]=new Array(c),f,d=0;d<c;++d)(f=a[d])&&(l[d]=f);l.sort(t)}return new kt(i,this._parents).order()}function If(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function Af(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Rf(){return Array.from(this)}function bf(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function Sf(){let n=0;for(const t of this)++n;return n}function Cf(){return!this.node()}function Pf(n){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],o=0,a=i.length,c;o<a;++o)(c=i[o])&&n.call(c,c.__data__,o,i);return this}function xf(n){return function(){this.removeAttribute(n)}}function Vf(n){return function(){this.removeAttributeNS(n.space,n.local)}}function kf(n,t){return function(){this.setAttribute(n,t)}}function Df(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function Nf(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Mf(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Of(n,t){var e=si(n);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((t==null?e.local?Vf:xf:typeof t=="function"?e.local?Mf:Nf:e.local?Df:kf)(e,t))}function Wu(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Lf(n){return function(){this.style.removeProperty(n)}}function Ff(n,t,e){return function(){this.style.setProperty(n,t,e)}}function Uf(n,t,e){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,e)}}function Bf(n,t,e){return arguments.length>1?this.each((t==null?Lf:typeof t=="function"?Uf:Ff)(n,t,e??"")):Ye(this.node(),n)}function Ye(n,t){return n.style.getPropertyValue(t)||Wu(n).getComputedStyle(n,null).getPropertyValue(t)}function $f(n){return function(){delete this[n]}}function qf(n,t){return function(){this[n]=t}}function zf(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function jf(n,t){return arguments.length>1?this.each((t==null?$f:typeof t=="function"?zf:qf)(n,t)):this.node()[n]}function Qu(n){return n.trim().split(/^|\s+/)}function Ms(n){return n.classList||new Xu(n)}function Xu(n){this._node=n,this._names=Qu(n.getAttribute("class")||"")}Xu.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Yu(n,t){for(var e=Ms(n),r=-1,i=t.length;++r<i;)e.add(t[r])}function Ju(n,t){for(var e=Ms(n),r=-1,i=t.length;++r<i;)e.remove(t[r])}function Gf(n){return function(){Yu(this,n)}}function Hf(n){return function(){Ju(this,n)}}function Kf(n,t){return function(){(t.apply(this,arguments)?Yu:Ju)(this,n)}}function Wf(n,t){var e=Qu(n+"");if(arguments.length<2){for(var r=Ms(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof t=="function"?Kf:t?Gf:Hf)(e,t))}function Qf(){this.textContent=""}function Xf(n){return function(){this.textContent=n}}function Yf(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function Jf(n){return arguments.length?this.each(n==null?Qf:(typeof n=="function"?Yf:Xf)(n)):this.node().textContent}function Zf(){this.innerHTML=""}function td(n){return function(){this.innerHTML=n}}function ed(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function nd(n){return arguments.length?this.each(n==null?Zf:(typeof n=="function"?ed:td)(n)):this.node().innerHTML}function rd(){this.nextSibling&&this.parentNode.appendChild(this)}function id(){return this.each(rd)}function sd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function od(){return this.each(sd)}function ad(n){var t=typeof n=="function"?n:zu(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ud(){return null}function cd(n,t){var e=typeof n=="function"?n:zu(n),r=t==null?ud:typeof t=="function"?t:Ns(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function ld(){var n=this.parentNode;n&&n.removeChild(this)}function hd(){return this.each(ld)}function fd(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function dd(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function pd(n){return this.select(n?dd:fd)}function md(n){return arguments.length?this.property("__data__",n):this.node().__data__}function gd(n){return function(t){n.call(this,t,this.__data__)}}function _d(n){return n.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}function yd(n){return function(){var t=this.__on;if(t){for(var e=0,r=-1,i=t.length,o;e<i;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function vd(n,t,e){return function(){var r=this.__on,i,o=gd(t);if(r){for(var a=0,c=r.length;a<c;++a)if((i=r[a]).type===n.type&&i.name===n.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=t;return}}this.addEventListener(n.type,o,e),i={type:n.type,name:n.name,value:t,listener:o,options:e},r?r.push(i):this.__on=[i]}}function Ed(n,t,e){var r=_d(n+""),i,o=r.length,a;if(arguments.length<2){var c=this.node().__on;if(c){for(var l=0,f=c.length,d;l<f;++l)for(i=0,d=c[l];i<o;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(c=t?vd:yd,i=0;i<o;++i)this.each(c(r[i],t,e));return this}function Zu(n,t,e){var r=Wu(n),i=r.CustomEvent;typeof i=="function"?i=new i(t,e):(i=r.document.createEvent("Event"),e?(i.initEvent(t,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(t,!1,!1)),n.dispatchEvent(i)}function wd(n,t){return function(){return Zu(this,n,t)}}function Td(n,t){return function(){return Zu(this,n,t.apply(this,arguments))}}function Id(n,t){return this.each((typeof t=="function"?Td:wd)(n,t))}function*Ad(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var tc=[null];function kt(n,t){this._groups=n,this._parents=t}function Yn(){return new kt([[document.documentElement]],tc)}function Rd(){return this}kt.prototype=Yn.prototype={constructor:kt,select:Xh,selectAll:tf,selectChild:sf,selectChildren:cf,filter:lf,data:gf,enter:hf,exit:yf,join:vf,merge:Ef,selection:Rd,order:wf,sort:Tf,call:Af,nodes:Rf,node:bf,size:Sf,empty:Cf,each:Pf,attr:Of,style:Bf,property:jf,classed:Wf,text:Jf,html:nd,raise:id,lower:od,append:ad,insert:cd,remove:hd,clone:pd,datum:md,on:Ed,dispatch:Id,[Symbol.iterator]:Ad};function Ra(n){return typeof n=="string"?new kt([[document.querySelector(n)]],[document.documentElement]):new kt([[n]],tc)}function Os(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function ec(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function Jn(){}var Un=.7,$r=1/Un,We="\\s*([+-]?\\d+)\\s*",Bn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ut="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",bd=/^#([0-9a-f]{3,8})$/,Sd=new RegExp(`^rgb\\(${We},${We},${We}\\)$`),Cd=new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`),Pd=new RegExp(`^rgba\\(${We},${We},${We},${Bn}\\)$`),xd=new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${Bn}\\)$`),Vd=new RegExp(`^hsl\\(${Bn},${Ut},${Ut}\\)$`),kd=new RegExp(`^hsla\\(${Bn},${Ut},${Ut},${Bn}\\)$`),ba={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Os(Jn,$n,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Sa,formatHex:Sa,formatHex8:Dd,formatHsl:Nd,formatRgb:Ca,toString:Ca});function Sa(){return this.rgb().formatHex()}function Dd(){return this.rgb().formatHex8()}function Nd(){return nc(this).formatHsl()}function Ca(){return this.rgb().formatRgb()}function $n(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=bd.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Pa(t):e===3?new Ct(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Tr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Tr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Sd.exec(n))?new Ct(t[1],t[2],t[3],1):(t=Cd.exec(n))?new Ct(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Pd.exec(n))?Tr(t[1],t[2],t[3],t[4]):(t=xd.exec(n))?Tr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Vd.exec(n))?ka(t[1],t[2]/100,t[3]/100,1):(t=kd.exec(n))?ka(t[1],t[2]/100,t[3]/100,t[4]):ba.hasOwnProperty(n)?Pa(ba[n]):n==="transparent"?new Ct(NaN,NaN,NaN,0):null}function Pa(n){return new Ct(n>>16&255,n>>8&255,n&255,1)}function Tr(n,t,e,r){return r<=0&&(n=t=e=NaN),new Ct(n,t,e,r)}function Md(n){return n instanceof Jn||(n=$n(n)),n?(n=n.rgb(),new Ct(n.r,n.g,n.b,n.opacity)):new Ct}function ss(n,t,e,r){return arguments.length===1?Md(n):new Ct(n,t,e,r??1)}function Ct(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}Os(Ct,ss,ec(Jn,{brighter(n){return n=n==null?$r:Math.pow($r,n),new Ct(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Un:Math.pow(Un,n),new Ct(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Ct(Ce(this.r),Ce(this.g),Ce(this.b),qr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:xa,formatHex:xa,formatHex8:Od,formatRgb:Va,toString:Va}));function xa(){return`#${be(this.r)}${be(this.g)}${be(this.b)}`}function Od(){return`#${be(this.r)}${be(this.g)}${be(this.b)}${be((isNaN(this.opacity)?1:this.opacity)*255)}`}function Va(){const n=qr(this.opacity);return`${n===1?"rgb(":"rgba("}${Ce(this.r)}, ${Ce(this.g)}, ${Ce(this.b)}${n===1?")":`, ${n})`}`}function qr(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ce(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function be(n){return n=Ce(n),(n<16?"0":"")+n.toString(16)}function ka(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Mt(n,t,e,r)}function nc(n){if(n instanceof Mt)return new Mt(n.h,n.s,n.l,n.opacity);if(n instanceof Jn||(n=$n(n)),!n)return new Mt;if(n instanceof Mt)return n;n=n.rgb();var t=n.r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),o=Math.max(t,e,r),a=NaN,c=o-i,l=(o+i)/2;return c?(t===o?a=(e-r)/c+(e<r)*6:e===o?a=(r-t)/c+2:a=(t-e)/c+4,c/=l<.5?o+i:2-o-i,a*=60):c=l>0&&l<1?0:a,new Mt(a,c,l,n.opacity)}function Ld(n,t,e,r){return arguments.length===1?nc(n):new Mt(n,t,e,r??1)}function Mt(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}Os(Mt,Ld,ec(Jn,{brighter(n){return n=n==null?$r:Math.pow($r,n),new Mt(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Un:Math.pow(Un,n),new Mt(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new Ct(Wi(n>=240?n-240:n+120,i,r),Wi(n,i,r),Wi(n<120?n+240:n-120,i,r),this.opacity)},clamp(){return new Mt(Da(this.h),Ir(this.s),Ir(this.l),qr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=qr(this.opacity);return`${n===1?"hsl(":"hsla("}${Da(this.h)}, ${Ir(this.s)*100}%, ${Ir(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Da(n){return n=(n||0)%360,n<0?n+360:n}function Ir(n){return Math.max(0,Math.min(1,n||0))}function Wi(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const rc=n=>()=>n;function Fd(n,t){return function(e){return n+e*t}}function Ud(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}function Bd(n){return(n=+n)==1?ic:function(t,e){return e-t?Ud(t,e,n):rc(isNaN(t)?e:t)}}function ic(n,t){var e=t-n;return e?Fd(n,e):rc(isNaN(n)?t:n)}const Na=function n(t){var e=Bd(t);function r(i,o){var a=e((i=ss(i)).r,(o=ss(o)).r),c=e(i.g,o.g),l=e(i.b,o.b),f=ic(i.opacity,o.opacity);return function(d){return i.r=a(d),i.g=c(d),i.b=l(d),i.opacity=f(d),i+""}}return r.gamma=n,r}(1);function ie(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}var os=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Qi=new RegExp(os.source,"g");function $d(n){return function(){return n}}function qd(n){return function(t){return n(t)+""}}function zd(n,t){var e=os.lastIndex=Qi.lastIndex=0,r,i,o,a=-1,c=[],l=[];for(n=n+"",t=t+"";(r=os.exec(n))&&(i=Qi.exec(t));)(o=i.index)>e&&(o=t.slice(e,o),c[a]?c[a]+=o:c[++a]=o),(r=r[0])===(i=i[0])?c[a]?c[a]+=i:c[++a]=i:(c[++a]=null,l.push({i:a,x:ie(r,i)})),e=Qi.lastIndex;return e<t.length&&(o=t.slice(e),c[a]?c[a]+=o:c[++a]=o),c.length<2?l[0]?qd(l[0].x):$d(t):(t=l.length,function(f){for(var d=0,_;d<t;++d)c[(_=l[d]).i]=_.x(f);return c.join("")})}var Ma=180/Math.PI,as={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function sc(n,t,e,r,i,o){var a,c,l;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(l=n*e+t*r)&&(e-=n*l,r-=t*l),(c=Math.sqrt(e*e+r*r))&&(e/=c,r/=c,l/=c),n*r<t*e&&(n=-n,t=-t,l=-l,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,n)*Ma,skewX:Math.atan(l)*Ma,scaleX:a,scaleY:c}}var Ar;function jd(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?as:sc(t.a,t.b,t.c,t.d,t.e,t.f)}function Gd(n){return n==null||(Ar||(Ar=document.createElementNS("http://www.w3.org/2000/svg","g")),Ar.setAttribute("transform",n),!(n=Ar.transform.baseVal.consolidate()))?as:(n=n.matrix,sc(n.a,n.b,n.c,n.d,n.e,n.f))}function oc(n,t,e,r){function i(f){return f.length?f.pop()+" ":""}function o(f,d,_,E,R,P){if(f!==_||d!==E){var k=R.push("translate(",null,t,null,e);P.push({i:k-4,x:ie(f,_)},{i:k-2,x:ie(d,E)})}else(_||E)&&R.push("translate("+_+t+E+e)}function a(f,d,_,E){f!==d?(f-d>180?d+=360:d-f>180&&(f+=360),E.push({i:_.push(i(_)+"rotate(",null,r)-2,x:ie(f,d)})):d&&_.push(i(_)+"rotate("+d+r)}function c(f,d,_,E){f!==d?E.push({i:_.push(i(_)+"skewX(",null,r)-2,x:ie(f,d)}):d&&_.push(i(_)+"skewX("+d+r)}function l(f,d,_,E,R,P){if(f!==_||d!==E){var k=R.push(i(R)+"scale(",null,",",null,")");P.push({i:k-4,x:ie(f,_)},{i:k-2,x:ie(d,E)})}else(_!==1||E!==1)&&R.push(i(R)+"scale("+_+","+E+")")}return function(f,d){var _=[],E=[];return f=n(f),d=n(d),o(f.translateX,f.translateY,d.translateX,d.translateY,_,E),a(f.rotate,d.rotate,_,E),c(f.skewX,d.skewX,_,E),l(f.scaleX,f.scaleY,d.scaleX,d.scaleY,_,E),f=d=null,function(R){for(var P=-1,k=E.length,x;++P<k;)_[(x=E[P]).i]=x.x(R);return _.join("")}}}var Hd=oc(jd,"px, ","px)","deg)"),Kd=oc(Gd,", ",")",")"),Je=0,Cn=0,Sn=0,ac=1e3,zr,Pn,jr=0,xe=0,oi=0,qn=typeof performance=="object"&&performance.now?performance:Date,uc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Ls(){return xe||(uc(Wd),xe=qn.now()+oi)}function Wd(){xe=0}function Gr(){this._call=this._time=this._next=null}Gr.prototype=cc.prototype={constructor:Gr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Ls():+e)+(t==null?0:+t),!this._next&&Pn!==this&&(Pn?Pn._next=this:zr=this,Pn=this),this._call=n,this._time=e,us()},stop:function(){this._call&&(this._call=null,this._time=1/0,us())}};function cc(n,t,e){var r=new Gr;return r.restart(n,t,e),r}function Qd(){Ls(),++Je;for(var n=zr,t;n;)(t=xe-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Je}function Oa(){xe=(jr=qn.now())+oi,Je=Cn=0;try{Qd()}finally{Je=0,Yd(),xe=0}}function Xd(){var n=qn.now(),t=n-jr;t>ac&&(oi-=t,jr=n)}function Yd(){for(var n,t=zr,e,r=1/0;t;)t._call?(r>t._time&&(r=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:zr=e);Pn=n,us(r)}function us(n){if(!Je){Cn&&(Cn=clearTimeout(Cn));var t=n-xe;t>24?(n<1/0&&(Cn=setTimeout(Oa,n-qn.now()-oi)),Sn&&(Sn=clearInterval(Sn))):(Sn||(jr=qn.now(),Sn=setInterval(Xd,ac)),Je=1,uc(Oa))}}function La(n,t,e){var r=new Gr;return t=t==null?0:+t,r.restart(i=>{r.stop(),n(i+t)},t,e),r}var Jd=qu("start","end","cancel","interrupt"),Zd=[],lc=0,Fa=1,cs=2,Vr=3,Ua=4,ls=5,kr=6;function ai(n,t,e,r,i,o){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;tp(n,e,{name:t,index:r,group:i,on:Jd,tween:Zd,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:lc})}function Fs(n,t){var e=Lt(n,t);if(e.state>lc)throw new Error("too late; already scheduled");return e}function Gt(n,t){var e=Lt(n,t);if(e.state>Vr)throw new Error("too late; already running");return e}function Lt(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function tp(n,t,e){var r=n.__transition,i;r[t]=e,e.timer=cc(o,0,e.time);function o(f){e.state=Fa,e.timer.restart(a,e.delay,e.time),e.delay<=f&&a(f-e.delay)}function a(f){var d,_,E,R;if(e.state!==Fa)return l();for(d in r)if(R=r[d],R.name===e.name){if(R.state===Vr)return La(a);R.state===Ua?(R.state=kr,R.timer.stop(),R.on.call("interrupt",n,n.__data__,R.index,R.group),delete r[d]):+d<t&&(R.state=kr,R.timer.stop(),R.on.call("cancel",n,n.__data__,R.index,R.group),delete r[d])}if(La(function(){e.state===Vr&&(e.state=Ua,e.timer.restart(c,e.delay,e.time),c(f))}),e.state=cs,e.on.call("start",n,n.__data__,e.index,e.group),e.state===cs){for(e.state=Vr,i=new Array(E=e.tween.length),d=0,_=-1;d<E;++d)(R=e.tween[d].value.call(n,n.__data__,e.index,e.group))&&(i[++_]=R);i.length=_+1}}function c(f){for(var d=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(l),e.state=ls,1),_=-1,E=i.length;++_<E;)i[_].call(n,d);e.state===ls&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=kr,e.timer.stop(),delete r[t];for(var f in r)return;delete n.__transition}}function ep(n,t){var e=n.__transition,r,i,o=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((r=e[a]).name!==t){o=!1;continue}i=r.state>cs&&r.state<ls,r.state=kr,r.timer.stop(),r.on.call(i?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete e[a]}o&&delete n.__transition}}function np(n){return this.each(function(){ep(this,n)})}function rp(n,t){var e,r;return function(){var i=Gt(this,n),o=i.tween;if(o!==e){r=e=o;for(var a=0,c=r.length;a<c;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function ip(n,t,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=Gt(this,n),a=o.tween;if(a!==r){i=(r=a).slice();for(var c={name:t,value:e},l=0,f=i.length;l<f;++l)if(i[l].name===t){i[l]=c;break}l===f&&i.push(c)}o.tween=i}}function sp(n,t){var e=this._id;if(n+="",arguments.length<2){for(var r=Lt(this.node(),e).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===n)return a.value;return null}return this.each((t==null?rp:ip)(e,n,t))}function Us(n,t,e){var r=n._id;return n.each(function(){var i=Gt(this,r);(i.value||(i.value={}))[t]=e.apply(this,arguments)}),function(i){return Lt(i,r).value[t]}}function hc(n,t){var e;return(typeof t=="number"?ie:t instanceof $n?Na:(e=$n(t))?(t=e,Na):zd)(n,t)}function op(n){return function(){this.removeAttribute(n)}}function ap(n){return function(){this.removeAttributeNS(n.space,n.local)}}function up(n,t,e){var r,i=e+"",o;return function(){var a=this.getAttribute(n);return a===i?null:a===r?o:o=t(r=a,e)}}function cp(n,t,e){var r,i=e+"",o;return function(){var a=this.getAttributeNS(n.space,n.local);return a===i?null:a===r?o:o=t(r=a,e)}}function lp(n,t,e){var r,i,o;return function(){var a,c=e(this),l;return c==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=c+"",a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,c)))}}function hp(n,t,e){var r,i,o;return function(){var a,c=e(this),l;return c==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=c+"",a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,c)))}}function fp(n,t){var e=si(n),r=e==="transform"?Kd:hc;return this.attrTween(n,typeof t=="function"?(e.local?hp:lp)(e,r,Us(this,"attr."+n,t)):t==null?(e.local?ap:op)(e):(e.local?cp:up)(e,r,t))}function dp(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function pp(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function mp(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&pp(n,o)),e}return i._value=t,i}function gp(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&dp(n,o)),e}return i._value=t,i}function _p(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var r=si(n);return this.tween(e,(r.local?mp:gp)(r,t))}function yp(n,t){return function(){Fs(this,n).delay=+t.apply(this,arguments)}}function vp(n,t){return t=+t,function(){Fs(this,n).delay=t}}function Ep(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?yp:vp)(t,n)):Lt(this.node(),t).delay}function wp(n,t){return function(){Gt(this,n).duration=+t.apply(this,arguments)}}function Tp(n,t){return t=+t,function(){Gt(this,n).duration=t}}function Ip(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?wp:Tp)(t,n)):Lt(this.node(),t).duration}function Ap(n,t){if(typeof t!="function")throw new Error;return function(){Gt(this,n).ease=t}}function Rp(n){var t=this._id;return arguments.length?this.each(Ap(t,n)):Lt(this.node(),t).ease}function bp(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Gt(this,n).ease=e}}function Sp(n){if(typeof n!="function")throw new Error;return this.each(bp(this._id,n))}function Cp(n){typeof n!="function"&&(n=Gu(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,c=r[i]=[],l,f=0;f<a;++f)(l=o[f])&&n.call(l,l.__data__,f,o)&&c.push(l);return new Xt(r,this._parents,this._name,this._id)}function Pp(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,r=t.length,i=e.length,o=Math.min(r,i),a=new Array(r),c=0;c<o;++c)for(var l=t[c],f=e[c],d=l.length,_=a[c]=new Array(d),E,R=0;R<d;++R)(E=l[R]||f[R])&&(_[R]=E);for(;c<r;++c)a[c]=t[c];return new Xt(a,this._parents,this._name,this._id)}function xp(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function Vp(n,t,e){var r,i,o=xp(t)?Fs:Gt;return function(){var a=o(this,n),c=a.on;c!==r&&(i=(r=c).copy()).on(t,e),a.on=i}}function kp(n,t){var e=this._id;return arguments.length<2?Lt(this.node(),e).on.on(n):this.each(Vp(e,n,t))}function Dp(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function Np(){return this.on("end.remove",Dp(this._id))}function Mp(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Ns(n));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var c=r[a],l=c.length,f=o[a]=new Array(l),d,_,E=0;E<l;++E)(d=c[E])&&(_=n.call(d,d.__data__,E,c))&&("__data__"in d&&(_.__data__=d.__data__),f[E]=_,ai(f[E],t,e,E,f,Lt(d,e)));return new Xt(o,this._parents,t,e)}function Op(n){var t=this._name,e=this._id;typeof n!="function"&&(n=ju(n));for(var r=this._groups,i=r.length,o=[],a=[],c=0;c<i;++c)for(var l=r[c],f=l.length,d,_=0;_<f;++_)if(d=l[_]){for(var E=n.call(d,d.__data__,_,l),R,P=Lt(d,e),k=0,x=E.length;k<x;++k)(R=E[k])&&ai(R,t,e,k,E,P);o.push(E),a.push(d)}return new Xt(o,a,t,e)}var Lp=Yn.prototype.constructor;function Fp(){return new Lp(this._groups,this._parents)}function Up(n,t){var e,r,i;return function(){var o=Ye(this,n),a=(this.style.removeProperty(n),Ye(this,n));return o===a?null:o===e&&a===r?i:i=t(e=o,r=a)}}function fc(n){return function(){this.style.removeProperty(n)}}function Bp(n,t,e){var r,i=e+"",o;return function(){var a=Ye(this,n);return a===i?null:a===r?o:o=t(r=a,e)}}function $p(n,t,e){var r,i,o;return function(){var a=Ye(this,n),c=e(this),l=c+"";return c==null&&(l=c=(this.style.removeProperty(n),Ye(this,n))),a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,c))}}function qp(n,t){var e,r,i,o="style."+t,a="end."+o,c;return function(){var l=Gt(this,n),f=l.on,d=l.value[o]==null?c||(c=fc(t)):void 0;(f!==e||i!==d)&&(r=(e=f).copy()).on(a,i=d),l.on=r}}function zp(n,t,e){var r=(n+="")=="transform"?Hd:hc;return t==null?this.styleTween(n,Up(n,r)).on("end.style."+n,fc(n)):typeof t=="function"?this.styleTween(n,$p(n,r,Us(this,"style."+n,t))).each(qp(this._id,n)):this.styleTween(n,Bp(n,r,t),e).on("end.style."+n,null)}function jp(n,t,e){return function(r){this.style.setProperty(n,t.call(this,r),e)}}function Gp(n,t,e){var r,i;function o(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&jp(n,a,e)),r}return o._value=t,o}function Hp(n,t,e){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Gp(n,t,e??""))}function Kp(n){return function(){this.textContent=n}}function Wp(n){return function(){var t=n(this);this.textContent=t??""}}function Qp(n){return this.tween("text",typeof n=="function"?Wp(Us(this,"text",n)):Kp(n==null?"":n+""))}function Xp(n){return function(t){this.textContent=n.call(this,t)}}function Yp(n){var t,e;function r(){var i=n.apply(this,arguments);return i!==e&&(t=(e=i)&&Xp(i)),t}return r._value=n,r}function Jp(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Yp(n))}function Zp(){for(var n=this._name,t=this._id,e=dc(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],c=a.length,l,f=0;f<c;++f)if(l=a[f]){var d=Lt(l,t);ai(l,n,e,f,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Xt(r,this._parents,n,e)}function tm(){var n,t,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var c={value:a},l={value:function(){--i===0&&o()}};e.each(function(){var f=Gt(this,r),d=f.on;d!==n&&(t=(n=d).copy(),t._.cancel.push(c),t._.interrupt.push(c),t._.end.push(l)),f.on=t}),i===0&&o()})}var em=0;function Xt(n,t,e,r){this._groups=n,this._parents=t,this._name=e,this._id=r}function dc(){return++em}var Qt=Yn.prototype;Xt.prototype={constructor:Xt,select:Mp,selectAll:Op,selectChild:Qt.selectChild,selectChildren:Qt.selectChildren,filter:Cp,merge:Pp,selection:Fp,transition:Zp,call:Qt.call,nodes:Qt.nodes,node:Qt.node,size:Qt.size,empty:Qt.empty,each:Qt.each,on:kp,attr:fp,attrTween:_p,style:zp,styleTween:Hp,text:Qp,textTween:Jp,remove:Np,tween:sp,delay:Ep,duration:Ip,ease:Rp,easeVarying:Sp,end:tm,[Symbol.iterator]:Qt[Symbol.iterator]};function nm(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var rm={time:null,delay:0,duration:250,ease:nm};function im(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function sm(n){var t,e;n instanceof Xt?(t=n._id,n=n._name):(t=dc(),(e=rm).time=Ls(),n=n==null?null:n+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],c=a.length,l,f=0;f<c;++f)(l=a[f])&&ai(l,n,t,f,a,e||im(l,t));return new Xt(r,this._parents,n,t)}Yn.prototype.interrupt=np;Yn.prototype.transition=sm;function om(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}const Ba=Symbol("implicit");function pc(){var n=new wa,t=[],e=[],r=Ba;function i(o){let a=n.get(o);if(a===void 0){if(r!==Ba)return r;n.set(o,a=t.push(o)-1)}return e[a%e.length]}return i.domain=function(o){if(!arguments.length)return t.slice();t=[],n=new wa;for(const a of o)n.has(a)||n.set(a,t.push(a)-1);return i},i.range=function(o){return arguments.length?(e=Array.from(o),i):e.slice()},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return pc(t,e).unknown(r)},om.apply(i,arguments),i}function am(n){for(var t=n.length/6|0,e=new Array(t),r=0;r<t;)e[r]="#"+n.slice(r*6,++r*6);return e}const um=am("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");function xn(n,t,e){this.k=n,this.x=t,this.y=e}xn.prototype={constructor:xn,scale:function(n){return n===1?this:new xn(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new xn(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};xn.prototype;function cm(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),e}var lm={value:function(){}};function mc(){for(var n=0,t=arguments.length,e={},r;n<t;++n){if(!(r=arguments[n]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new Dr(e)}function Dr(n){this._=n}function hm(n,t){return n.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}Dr.prototype=mc.prototype={constructor:Dr,on:function(n,t){var e=this._,r=hm(n+"",e),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(n=r[o]).type)&&(i=fm(e[i],n.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(n=r[o]).type)e[i]=$a(e[i],n.name,t);else if(t==null)for(i in e)e[i]=$a(e[i],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Dr(n)},call:function(n,t){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],r=0,i=o.length;r<i;++r)o[r].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,o=r.length;i<o;++i)r[i].value.apply(t,e)}};function fm(n,t){for(var e=0,r=n.length,i;e<r;++e)if((i=n[e]).name===t)return i.value}function $a(n,t,e){for(var r=0,i=n.length;r<i;++r)if(n[r].name===t){n[r]=lm,n=n.slice(0,r).concat(n.slice(r+1));break}return e!=null&&n.push({name:t,value:e}),n}const dm=Object.freeze(Object.defineProperty({__proto__:null,dispatch:mc},Symbol.toStringTag,{value:"Module"})),pm=cm(dm);pm.dispatch;var qa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},mm=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],c=n[e++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,f=l?n[i+2]:0,d=o>>2,_=(o&3)<<4|c>>4;let E=(c&15)<<2|f>>6,R=f&63;l||(R=64,a||(E=64)),r.push(e[d],e[_],e[E],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(gc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mm(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const _=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||_==null)throw new gm;const E=o<<2|c>>4;if(r.push(E),f!==64){const R=c<<4&240|f>>2;if(r.push(R),_!==64){const P=f<<6&192|_;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(n){const t=gc(n);return _c.encodeByteArray(t,!0)},Hr=function(n){return _m(n).replace(/\./g,"")},ym=function(n){try{return _c.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=()=>vm().__FIREBASE_DEFAULTS__,wm=()=>{if(typeof process>"u"||typeof qa>"u")return;const n=qa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ym(n[1]);return t&&JSON.parse(t)},Bs=()=>{try{return Em()||wm()||Tm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Im=n=>{var t,e;return(e=(t=Bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Am=n=>{const t=Im(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},yc=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hr(JSON.stringify(e)),Hr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cm(){var n;const t=(n=Bs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return!Cm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Vm(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="FirebaseError";class an extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=km,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vc.prototype.create)}}class vc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Dm(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new an(i,c,r)}}function Dm(n,t){return n.replace(Nm,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nm=/\{\$([^}]+)}/g;function hs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(za(o)&&za(a)){if(!hs(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function za(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){return n&&n._delegate?n._delegate:n}class zn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Rm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lm(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Om(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Om(n){return n===Re?void 0:n}function Lm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Mm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Um={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Bm=K.INFO,$m={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},qm=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=$m[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ec{constructor(t){this.name=t,this._logLevel=Bm,this._logHandler=qm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Um[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const zm=(n,t)=>t.some(e=>n instanceof e);let ja,Ga;function jm(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gm(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wc=new WeakMap,fs=new WeakMap,Tc=new WeakMap,Xi=new WeakMap,$s=new WeakMap;function Hm(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(oe(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&wc.set(e,n)}).catch(()=>{}),$s.set(t,n),t}function Km(n){if(fs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});fs.set(n,t)}let ds={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return fs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Tc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return oe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Wm(n){ds=n(ds)}function Qm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Yi(this),t,...e);return Tc.set(r,t.sort?t.sort():[t]),oe(r)}:Gm().includes(n)?function(...t){return n.apply(Yi(this),t),oe(wc.get(this))}:function(...t){return oe(n.apply(Yi(this),t))}}function Xm(n){return typeof n=="function"?Qm(n):(n instanceof IDBTransaction&&Km(n),zm(n,jm())?new Proxy(n,ds):n)}function oe(n){if(n instanceof IDBRequest)return Hm(n);if(Xi.has(n))return Xi.get(n);const t=Xm(n);return t!==n&&(Xi.set(n,t),$s.set(t,n)),t}const Yi=n=>$s.get(n);function Ym(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),c=oe(a);return r&&a.addEventListener("upgradeneeded",l=>{r(oe(a.result),l.oldVersion,l.newVersion,oe(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Jm=["get","getKey","getAll","getAllKeys","count"],Zm=["put","add","delete","clear"],Ji=new Map;function Ha(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ji.get(t))return Ji.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Zm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jm.includes(e)))return;const o=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&l.done]))[0]};return Ji.set(t,o),o}Wm(n=>({...n,get:(t,e,r)=>Ha(t,e)||n.get(t,e,r),has:(t,e)=>!!Ha(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(eg(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function eg(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ps="@firebase/app",Ka="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Ec("@firebase/app"),ng="@firebase/app-compat",rg="@firebase/analytics-compat",ig="@firebase/analytics",sg="@firebase/app-check-compat",og="@firebase/app-check",ag="@firebase/auth",ug="@firebase/auth-compat",cg="@firebase/database",lg="@firebase/data-connect",hg="@firebase/database-compat",fg="@firebase/functions",dg="@firebase/functions-compat",pg="@firebase/installations",mg="@firebase/installations-compat",gg="@firebase/messaging",_g="@firebase/messaging-compat",yg="@firebase/performance",vg="@firebase/performance-compat",Eg="@firebase/remote-config",wg="@firebase/remote-config-compat",Tg="@firebase/storage",Ig="@firebase/storage-compat",Ag="@firebase/firestore",Rg="@firebase/vertexai",bg="@firebase/firestore-compat",Sg="firebase",Cg="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]",Pg={[ps]:"fire-core",[ng]:"fire-core-compat",[ig]:"fire-analytics",[rg]:"fire-analytics-compat",[og]:"fire-app-check",[sg]:"fire-app-check-compat",[ag]:"fire-auth",[ug]:"fire-auth-compat",[cg]:"fire-rtdb",[lg]:"fire-data-connect",[hg]:"fire-rtdb-compat",[fg]:"fire-fn",[dg]:"fire-fn-compat",[pg]:"fire-iid",[mg]:"fire-iid-compat",[gg]:"fire-fcm",[_g]:"fire-fcm-compat",[yg]:"fire-perf",[vg]:"fire-perf-compat",[Eg]:"fire-rc",[wg]:"fire-rc-compat",[Tg]:"fire-gcs",[Ig]:"fire-gcs-compat",[Ag]:"fire-fst",[bg]:"fire-fst-compat",[Rg]:"fire-vertex","fire-js":"fire-js",[Sg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,xg=new Map,gs=new Map;function Wa(n,t){try{n.container.addComponent(t)}catch(e){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Wr(n){const t=n.name;if(gs.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;gs.set(t,n);for(const e of Kr.values())Wa(e,n);for(const e of xg.values())Wa(e,n);return!0}function Vg(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new vc("app","Firebase",kg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=Cg;function Ic(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ms,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ae.create("bad-app-name",{appName:String(i)});if(e||(e=yc()),!e)throw ae.create("no-options");const o=Kr.get(i);if(o){if(hs(e,o.options)&&hs(r,o.config))return o;throw ae.create("duplicate-app",{appName:i})}const a=new Fm(i);for(const l of gs.values())a.addComponent(l);const c=new Dg(e,r,a);return Kr.set(i,c),c}function Mg(n=ms){const t=Kr.get(n);if(!t&&n===ms&&yc())return Ic();if(!t)throw ae.create("no-app",{appName:n});return t}function Qe(n,t,e){var r;let i=(r=Pg[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(c.join(" "));return}Wr(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firebase-heartbeat-database",Lg=1,jn="firebase-heartbeat-store";let Zi=null;function Ac(){return Zi||(Zi=Ym(Og,Lg,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(jn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),Zi}async function Fg(n){try{const e=(await Ac()).transaction(jn),r=await e.objectStore(jn).get(Rc(n));return await e.done,r}catch(t){if(t instanceof an)Jt.warn(t.message);else{const e=ae.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(e.message)}}}async function Qa(n,t){try{const r=(await Ac()).transaction(jn,"readwrite");await r.objectStore(jn).put(t,Rc(n)),await r.done}catch(e){if(e instanceof an)Jt.warn(e.message);else{const r=ae.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(r.message)}}}function Rc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=1024,Bg=30*24*60*60*1e3;class $g{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Bg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xa(),{heartbeatsToSend:r,unsentEntries:i}=qg(this._heartbeatsCache.heartbeats),o=Hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Jt.warn(e),""}}}function Xa(){return new Date().toISOString().substring(0,10)}function qg(n,t=Ug){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ya(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ya(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class zg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xm()?Vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Fg(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ya(n){return Hr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){Wr(new zn("platform-logger",t=>new tg(t),"PRIVATE")),Wr(new zn("heartbeat",t=>new $g(t),"PRIVATE")),Qe(ps,Ka,n),Qe(ps,Ka,"esm2017"),Qe("fire-js","")}jg("");var Gg="firebase",Hg="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(Gg,Hg,"app");var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pe,bc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(w,v,T){for(var m=Array(arguments.length-2),X=2;X<arguments.length;X++)m[X-2]=arguments[X];return g.prototype[v].apply(w,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)w[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;16>v;++v)w[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],v=I.g[2];var T=I.g[3],m=g+(T^y&(v^T))+w[0]+3614090360&4294967295;g=y+(m<<7&4294967295|m>>>25),m=T+(v^g&(y^v))+w[1]+3905402710&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(y^T&(g^y))+w[2]+606105819&4294967295,v=T+(m<<17&4294967295|m>>>15),m=y+(g^v&(T^g))+w[3]+3250441966&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(T^y&(v^T))+w[4]+4118548399&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(v^g&(y^v))+w[5]+1200080426&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(y^T&(g^y))+w[6]+2821735955&4294967295,v=T+(m<<17&4294967295|m>>>15),m=y+(g^v&(T^g))+w[7]+4249261313&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(T^y&(v^T))+w[8]+1770035416&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(v^g&(y^v))+w[9]+2336552879&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(y^T&(g^y))+w[10]+4294925233&4294967295,v=T+(m<<17&4294967295|m>>>15),m=y+(g^v&(T^g))+w[11]+2304563134&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(T^y&(v^T))+w[12]+1804603682&4294967295,g=y+(m<<7&4294967295|m>>>25),m=T+(v^g&(y^v))+w[13]+4254626195&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(y^T&(g^y))+w[14]+2792965006&4294967295,v=T+(m<<17&4294967295|m>>>15),m=y+(g^v&(T^g))+w[15]+1236535329&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(v^T&(y^v))+w[1]+4129170786&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^v&(g^y))+w[6]+3225465664&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(T^g))+w[11]+643717713&4294967295,v=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(v^T))+w[0]+3921069994&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(y^v))+w[5]+3593408605&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^v&(g^y))+w[10]+38016083&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(T^g))+w[15]+3634488961&4294967295,v=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(v^T))+w[4]+3889429448&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(y^v))+w[9]+568446438&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^v&(g^y))+w[14]+3275163606&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(T^g))+w[3]+4107603335&4294967295,v=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(v^T))+w[8]+1163531501&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(y^v))+w[13]+2850285829&4294967295,g=y+(m<<5&4294967295|m>>>27),m=T+(y^v&(g^y))+w[2]+4243563512&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(T^g))+w[7]+1735328473&4294967295,v=T+(m<<14&4294967295|m>>>18),m=y+(T^g&(v^T))+w[12]+2368359562&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(y^v^T)+w[5]+4294588738&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^v)+w[8]+2272392833&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^y)+w[11]+1839030562&4294967295,v=T+(m<<16&4294967295|m>>>16),m=y+(v^T^g)+w[14]+4259657740&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(y^v^T)+w[1]+2763975236&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^v)+w[4]+1272893353&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^y)+w[7]+4139469664&4294967295,v=T+(m<<16&4294967295|m>>>16),m=y+(v^T^g)+w[10]+3200236656&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(y^v^T)+w[13]+681279174&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^v)+w[0]+3936430074&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^y)+w[3]+3572445317&4294967295,v=T+(m<<16&4294967295|m>>>16),m=y+(v^T^g)+w[6]+76029189&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(y^v^T)+w[9]+3654602809&4294967295,g=y+(m<<4&4294967295|m>>>28),m=T+(g^y^v)+w[12]+3873151461&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^y)+w[15]+530742520&4294967295,v=T+(m<<16&4294967295|m>>>16),m=y+(v^T^g)+w[2]+3299628645&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(v^(y|~T))+w[0]+4096336452&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~v))+w[7]+1126891415&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~y))+w[14]+2878612391&4294967295,v=T+(m<<15&4294967295|m>>>17),m=y+(T^(v|~g))+w[5]+4237533241&4294967295,y=v+(m<<21&4294967295|m>>>11),m=g+(v^(y|~T))+w[12]+1700485571&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~v))+w[3]+2399980690&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~y))+w[10]+4293915773&4294967295,v=T+(m<<15&4294967295|m>>>17),m=y+(T^(v|~g))+w[1]+2240044497&4294967295,y=v+(m<<21&4294967295|m>>>11),m=g+(v^(y|~T))+w[8]+1873313359&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~v))+w[15]+4264355552&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~y))+w[6]+2734768916&4294967295,v=T+(m<<15&4294967295|m>>>17),m=y+(T^(v|~g))+w[13]+1309151649&4294967295,y=v+(m<<21&4294967295|m>>>11),m=g+(v^(y|~T))+w[4]+4149444226&4294967295,g=y+(m<<6&4294967295|m>>>26),m=T+(y^(g|~v))+w[11]+3174756917&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~y))+w[2]+718787259&4294967295,v=T+(m<<15&4294967295|m>>>17),m=y+(T^(v|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+T&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,w=this.B,v=this.h,T=0;T<g;){if(v==0)for(;T<=y;)i(this,I,T),T+=this.blockSize;if(typeof I=="string"){for(;T<g;)if(w[v++]=I.charCodeAt(T++),v==this.blockSize){i(this,w),v=0;break}}else for(;T<g;)if(w[v++]=I[T++],v==this.blockSize){i(this,w),v=0;break}}this.h=v,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)I[y++]=this.g[g]>>>w&255;return I};function o(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;for(var y=[],w=!0,v=I.length-1;0<=v;v--){var T=I[v]|0;w&&T==g||(y[v]=T,w=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?o(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return x(f(-I));for(var g=[],y=1,w=0;I>=y;w++)g[w]=I/y|0,y*=4294967296;return new a(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return x(d(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(g,8)),w=_,v=0;v<I.length;v+=8){var T=Math.min(8,I.length-v),m=parseInt(I.substring(v,v+T),g);8>T?(T=f(Math.pow(g,T)),w=w.j(T).add(f(m))):(w=w.j(y),w=w.add(f(m)))}return w}var _=l(0),E=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(k(this))return-x(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);I+=(0<=w?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(k(this))return"-"+x(this).toString(I);for(var g=f(Math.pow(I,6)),y=this,w="";;){var v=tt(y,g).g;y=q(y,v.j(g));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=v,P(y))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=q(this,I),k(I)?-1:P(I)?0:1};function x(I){for(var g=I.g.length,y=[],w=0;w<g;w++)y[w]=~I.g[w];return new a(y,~I.h).add(E)}n.abs=function(){return k(this)?x(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0,v=0;v<=g;v++){var T=w+(this.i(v)&65535)+(I.i(v)&65535),m=(T>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);w=m>>>16,T&=65535,m&=65535,y[v]=m<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(I,g){return I.add(x(g))}n.j=function(I){if(P(this)||P(I))return _;if(k(this))return k(I)?x(this).j(x(I)):x(x(this).j(I));if(k(I))return x(this.j(x(I)));if(0>this.l(R)&&0>I.l(R))return f(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var v=0;v<I.g.length;v++){var T=this.i(w)>>>16,m=this.i(w)&65535,X=I.i(v)>>>16,L=I.i(v)&65535;y[2*w+2*v]+=m*L,B(y,2*w+2*v),y[2*w+2*v+1]+=T*L,B(y,2*w+2*v+1),y[2*w+2*v+1]+=m*X,B(y,2*w+2*v+1),y[2*w+2*v+2]+=T*X,B(y,2*w+2*v+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new a(y,0)};function B(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function G(I,g){this.g=I,this.h=g}function tt(I,g){if(P(g))throw Error("division by zero");if(P(I))return new G(_,_);if(k(I))return g=tt(x(I),g),new G(x(g.g),x(g.h));if(k(g))return g=tt(I,x(g)),new G(x(g.g),g.h);if(30<I.g.length){if(k(I)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,w=g;0>=w.l(I);)y=_t(y),w=_t(w);var v=ut(y,1),T=ut(w,1);for(w=ut(w,2),y=ut(y,2);!P(w);){var m=T.add(w);0>=m.l(I)&&(v=v.add(y),T=m),w=ut(w,1),y=ut(y,1)}return g=q(I,v.j(g)),new G(v,g)}for(v=_;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=f(y),m=T.j(g);k(m)||0<m.l(I);)y-=w,T=f(y),m=T.j(g);P(T)&&(T=E),v=v.add(T),I=q(I,m)}return new G(v,I)}n.A=function(I){return tt(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function _t(I){for(var g=I.g.length+1,y=[],w=0;w<g;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function ut(I,g){var y=g>>5;g%=32;for(var w=I.g.length-y,v=[],T=0;T<w;T++)v[T]=0<g?I.i(T+y)>>>g|I.i(T+y+1)<<32-g:I.i(T+y);return new a(v,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Pe=a}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sc,Vn,Cc,Nr,_s,Pc,xc,Vc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,h){return s==Array.prototype||s==Object.prototype||(s[u]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rr=="object"&&Rr];for(var u=0;u<s.length;++u){var h=s[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var h=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var A=s[p];if(!(A in h))break t;h=h[A]}s=s[s.length-1],p=h[s],u=u(p),u!=p&&u!=null&&t(h,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var h=0,p=!1,A={next:function(){if(!p&&h<s.length){var b=h++;return{value:u(b,s[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function f(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function d(s,u,h){return s.call.apply(s.bind,arguments)}function _(s,u,h){if(!s)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),s.apply(u,A)}}return function(){return s.apply(u,arguments)}}function E(s,u,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:_,E.apply(null,arguments)}function R(s,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function P(s,u){function h(){}h.prototype=u.prototype,s.aa=u.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(p,A,b){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return u.prototype[A].apply(p,V)}}function k(s){const u=s.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=s[p];return h}return[]}function x(s,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(l(p)){const A=s.length||0,b=p.length||0;s.length=A+b;for(let V=0;V<b;V++)s[A+V]=p[V]}else s.push(p)}}class q{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function tt(s){return tt[" "](s),s}tt[" "]=function(){};var _t=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ut(s,u,h){for(const p in s)u.call(h,s[p],p,s)}function I(s,u){for(const h in s)u.call(void 0,s[h],h,s)}function g(s){const u={};for(const h in s)u[h]=s[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,u){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)s[h]=p[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(p,h)&&(s[h]=p[h])}}function v(s){var u=1;s=s.split(":");const h=[];for(;0<u&&s.length;)h.push(s.shift()),u--;return s.length&&h.push(s.join(":")),h}function T(s){c.setTimeout(()=>{throw s},0)}function m(){var s=Ht;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class X{constructor(){this.h=this.g=null}add(u,h){const p=L.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var L=new q(()=>new z,s=>s.reset());class z{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,it=!1,Ht=new X,_e=()=>{const s=c.Promise.resolve(void 0);nt=()=>{s.then(Ai)}};var Ai=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(h){T(h)}var u=L;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}it=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return s}();function Dt(s,u){if(st.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(_t){t:{try{tt(u.nodeName);var A=!0;break t}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=s.fromElement:h=="mouseout"&&(u=s.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Me[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Dt.aa.h.call(this)}}P(Dt,st);var Me={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function Fe(s,u,h,p,A){this.listener=s,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=A,this.key=++Le,this.da=this.fa=!1}function ve(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Ee(s){this.src=s,this.g={},this.h=0}Ee.prototype.add=function(s,u,h,p,A){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var V=dn(s,u,p,A);return-1<V?(u=s[V],h||(u.fa=!1)):(u=new Fe(u,this.src,b,!!p,A),u.fa=h,s.push(u)),u};function fn(s,u){var h=u.type;if(h in s.g){var p=s.g[h],A=Array.prototype.indexOf.call(p,u,void 0),b;(b=0<=A)&&Array.prototype.splice.call(p,A,1),b&&(ve(u),s.g[h].length==0&&(delete s.g[h],s.h--))}}function dn(s,u,h,p){for(var A=0;A<s.length;++A){var b=s[A];if(!b.da&&b.listener==u&&b.capture==!!h&&b.ha==p)return A}return-1}var Ue="closure_lm_"+(1e6*Math.random()|0),Ri={};function wo(s,u,h,p,A){if(Array.isArray(u)){for(var b=0;b<u.length;b++)wo(s,u[b],h,p,A);return null}return h=Ao(h),s&&s[Oe]?s.K(u,h,f(p)?!!p.capture:!!p,A):Ql(s,u,h,!1,p,A)}function Ql(s,u,h,p,A,b){if(!u)throw Error("Invalid event type");var V=f(A)?!!A.capture:!!A,Y=Si(s);if(Y||(s[Ue]=Y=new Ee(s)),h=Y.add(u,h,p,V,b),h.proxy)return h;if(p=Xl(),h.proxy=p,p.src=s,p.listener=h,s.addEventListener)ye||(A=V),A===void 0&&(A=!1),s.addEventListener(u.toString(),p,A);else if(s.attachEvent)s.attachEvent(Io(u.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xl(){function s(h){return u.call(s.src,s.listener,h)}const u=Yl;return s}function To(s,u,h,p,A){if(Array.isArray(u))for(var b=0;b<u.length;b++)To(s,u[b],h,p,A);else p=f(p)?!!p.capture:!!p,h=Ao(h),s&&s[Oe]?(s=s.i,u=String(u).toString(),u in s.g&&(b=s.g[u],h=dn(b,h,p,A),-1<h&&(ve(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete s.g[u],s.h--)))):s&&(s=Si(s))&&(u=s.g[u.toString()],s=-1,u&&(s=dn(u,h,p,A)),(h=-1<s?u[s]:null)&&bi(h))}function bi(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Oe])fn(u.i,s);else{var h=s.type,p=s.proxy;u.removeEventListener?u.removeEventListener(h,p,s.capture):u.detachEvent?u.detachEvent(Io(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Si(u))?(fn(h,s),h.h==0&&(h.src=null,u[Ue]=null)):ve(s)}}}function Io(s){return s in Ri?Ri[s]:Ri[s]="on"+s}function Yl(s,u){if(s.da)s=!0;else{u=new Dt(u,this);var h=s.listener,p=s.ha||s.src;s.fa&&bi(s),s=h.call(p,u)}return s}function Si(s){return s=s[Ue],s instanceof Ee?s:null}var Ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(s){return typeof s=="function"?s:(s[Ci]||(s[Ci]=function(u){return s.handleEvent(u)}),s[Ci])}function yt(){Ft.call(this),this.i=new Ee(this),this.M=this,this.F=null}P(yt,Ft),yt.prototype[Oe]=!0,yt.prototype.removeEventListener=function(s,u,h,p){To(this,s,u,h,p)};function At(s,u){var h,p=s.F;if(p)for(h=[];p;p=p.F)h.push(p);if(s=s.M,p=u.type||u,typeof u=="string")u=new st(u,s);else if(u instanceof st)u.target=u.target||s;else{var A=u;u=new st(p,s),w(u,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var V=u.g=h[b];A=ir(V,p,!0,u)&&A}if(V=u.g=s,A=ir(V,p,!0,u)&&A,A=ir(V,p,!1,u)&&A,h)for(b=0;b<h.length;b++)V=u.g=h[b],A=ir(V,p,!1,u)&&A}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var h=s.g[u],p=0;p<h.length;p++)ve(h[p]);delete s.g[u],s.h--}}this.F=null},yt.prototype.K=function(s,u,h,p){return this.i.add(String(s),u,!1,h,p)},yt.prototype.L=function(s,u,h,p){return this.i.add(String(s),u,!0,h,p)};function ir(s,u,h,p){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,b=0;b<u.length;++b){var V=u[b];if(V&&!V.da&&V.capture==h){var Y=V.listener,dt=V.ha||V.src;V.fa&&fn(s.i,V),A=Y.call(dt,p)!==!1&&A}}return A&&!p.defaultPrevented}function Ro(s,u,h){if(typeof s=="function")h&&(s=E(s,h));else if(s&&typeof s.handleEvent=="function")s=E(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function bo(s){s.g=Ro(()=>{s.g=null,s.i&&(s.i=!1,bo(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Jl extends Ft{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:bo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(s){Ft.call(this),this.h=s,this.g={}}P(pn,Ft);var So=[];function Co(s){ut(s.g,function(u,h){this.g.hasOwnProperty(h)&&bi(u)},s),s.g={}}pn.prototype.N=function(){pn.aa.N.call(this),Co(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=c.JSON.stringify,Zl=c.JSON.parse,th=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function xi(){}xi.prototype.h=null;function Po(s){return s.h||(s.h=s.i())}function xo(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vi(){st.call(this,"d")}P(Vi,st);function ki(){st.call(this,"c")}P(ki,st);var we={},Vo=null;function sr(){return Vo=Vo||new yt}we.La="serverreachability";function ko(s){st.call(this,we.La,s)}P(ko,st);function gn(s){const u=sr();At(u,new ko(u))}we.STAT_EVENT="statevent";function Do(s,u){st.call(this,we.STAT_EVENT,s),this.stat=u}P(Do,st);function Rt(s){const u=sr();At(u,new Do(u,s))}we.Ma="timingevent";function No(s,u){st.call(this,we.Ma,s),this.size=u}P(No,st);function _n(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function eh(s,u,h,p,A,b){s.info(function(){if(s.g)if(b)for(var V="",Y=b.split("&"),dt=0;dt<Y.length;dt++){var W=Y[dt].split("=");if(1<W.length){var vt=W[0];W=W[1];var Et=vt.split("_");V=2<=Et.length&&Et[1]=="type"?V+(vt+"="+W+"&"):V+(vt+"=redacted&")}}else V=null;else V=b;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+h+`
`+V})}function nh(s,u,h,p,A,b,V){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+h+`
`+b+" "+V})}function Be(s,u,h,p){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+ih(s,h)+(p?" "+p:"")})}function rh(s,u){s.info(function(){return"TIMEOUT: "+u})}yn.prototype.info=function(){};function ih(s,u){if(!s.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var p=h[s];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return Pi(h)}catch{return u}}var or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Di;function ar(){}P(ar,xi),ar.prototype.g=function(){return new XMLHttpRequest},ar.prototype.i=function(){return{}},Di=new ar;function ee(s,u,h,p){this.j=s,this.i=u,this.l=h,this.R=p||1,this.U=new pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oo}function Oo(){this.i=null,this.g="",this.h=!1}var Lo={},Ni={};function Mi(s,u,h){s.L=1,s.v=hr(Kt(u)),s.m=h,s.P=!0,Fo(s,null)}function Fo(s,u){s.F=Date.now(),ur(s),s.A=Kt(s.v);var h=s.A,p=s.R;Array.isArray(p)||(p=[String(p)]),Jo(h.i,"t",p),s.C=0,h=s.j.J,s.h=new Oo,s.g=ga(s.j,h?u:null,!s.m),0<s.O&&(s.M=new Jl(E(s.Y,s,s.g),s.O)),u=s.U,h=s.g,p=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(So[0]=A.toString()),A=So);for(var b=0;b<A.length;b++){var V=wo(h,A[b],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),gn(),eh(s.i,s.u,s.A,s.l,s.R,s.m)}ee.prototype.ca=function(s){s=s.target;const u=this.M;u&&Wt(s)==3?u.j():this.Y(s)},ee.prototype.Y=function(s){try{if(s==this.g)t:{const Et=Wt(this.g);var u=this.g.Ba();const ze=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||sa(this.g)))){this.J||Et!=4||u==7||(u==8||0>=ze?gn(3):gn(2)),Oi(this);var h=this.g.Z();this.X=h;e:if(Uo(this)){var p=sa(this.g);s="";var A=p.length,b=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Te(this),vn(this);var V="";break e}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,s+=this.h.i.decode(p[u],{stream:!(b&&u==A-1)});p.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,nh(this.i,this.u,this.A,this.l,this.R,Et,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,dt=this.g;if((Y=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Y)){var W=Y;break e}}W=null}if(h=W)Be(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Li(this,h);else{this.o=!1,this.s=3,Rt(12),Te(this),vn(this);break t}}if(this.P){h=!0;let Nt;for(;!this.J&&this.C<V.length;)if(Nt=sh(this,V),Nt==Ni){Et==4&&(this.s=4,Rt(14),h=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Lo){this.s=4,Rt(15),Be(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Be(this.i,this.l,Nt,null),Li(this,Nt);if(Uo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||V.length!=0||this.h.h||(this.s=1,Rt(16),h=!1),this.o=this.o&&h,!h)Be(this.i,this.l,V,"[Invalid Chunked Response]"),Te(this),vn(this);else if(0<V.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),zi(vt),vt.M=!0,Rt(11))}}else Be(this.i,this.l,V,null),Li(this,V);Et==4&&Te(this),this.o&&!this.J&&(Et==4?fa(this.j,this):(this.o=!1,ur(this)))}else Th(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Te(this),vn(this)}}}catch{}finally{}};function Uo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function sh(s,u){var h=s.C,p=u.indexOf(`
`,h);return p==-1?Ni:(h=Number(u.substring(h,p)),isNaN(h)?Lo:(p+=1,p+h>u.length?Ni:(u=u.slice(p,p+h),s.C=p+h,u)))}ee.prototype.cancel=function(){this.J=!0,Te(this)};function ur(s){s.S=Date.now()+s.I,Bo(s,s.I)}function Bo(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=_n(E(s.ba,s),u)}function Oi(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ee.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(rh(this.i,this.A),this.L!=2&&(gn(),Rt(17)),Te(this),this.s=2,vn(this)):Bo(this,this.S-s)};function vn(s){s.j.G==0||s.J||fa(s.j,s)}function Te(s){Oi(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Co(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Li(s,u){try{var h=s.j;if(h.G!=0&&(h.g==s||Fi(h.h,s))){if(!s.K&&Fi(h.h,s)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)_r(h),mr(h);else break t;qi(h),Rt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=_n(E(h.Za,h),6e3));if(1>=zo(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ae(h,11)}else if((s.K||h.g==s)&&_r(h),!B(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let W=A[u];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const vt=W[3];vt!=null&&(h.la=vt,h.j.info("VER="+h.la));const Et=W[4];Et!=null&&(h.Aa=Et,h.j.info("SVER="+h.Aa));const ze=W[5];ze!=null&&typeof ze=="number"&&0<ze&&(p=1.5*ze,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Nt=s.g;if(Nt){const vr=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var b=p.h;b.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ui(b,b.h),b.h=null))}if(p.D){const ji=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;ji&&(p.ya=ji,J(p.I,p.D,ji))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=s;if(p.qa=ma(p,p.J?p.ia:null,p.W),V.K){jo(p.h,V);var Y=V,dt=p.L;dt&&(Y.I=dt),Y.B&&(Oi(Y),ur(Y)),p.g=V}else la(p);0<h.i.length&&gr(h)}else W[0]!="stop"&&W[0]!="close"||Ae(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Ae(h,7):$i(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}gn(4)}catch{}}var oh=class{constructor(s,u){this.g=s,this.map=u}};function $o(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function zo(s){return s.h?1:s.g?s.g.size:0}function Fi(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Ui(s,u){s.g?s.g.add(u):s.h=u}function jo(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}$o.prototype.cancel=function(){if(this.i=Go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Go(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const h of s.g.values())u=u.concat(h.D);return u}return k(s.i)}function ah(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(l(s)){for(var u=[],h=s.length,p=0;p<h;p++)u.push(s[p]);return u}u=[],h=0;for(p in s)u[h++]=s[p];return u}function uh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(l(s)||typeof s=="string"){var u=[];s=s.length;for(var h=0;h<s;h++)u.push(h);return u}u=[],h=0;for(const p in s)u[h++]=p;return u}}}function Ho(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(l(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var h=uh(s),p=ah(s),A=p.length,b=0;b<A;b++)u.call(void 0,p[b],h&&h[b],s)}var Ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ch(s,u){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var p=s[h].indexOf("="),A=null;if(0<=p){var b=s[h].substring(0,p);A=s[h].substring(p+1)}else b=s[h];u(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ie){this.h=s.h,cr(this,s.j),this.o=s.o,this.g=s.g,lr(this,s.s),this.l=s.l;var u=s.i,h=new Tn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Wo(this,h),this.m=s.m}else s&&(u=String(s).match(Ko))?(this.h=!1,cr(this,u[1]||"",!0),this.o=En(u[2]||""),this.g=En(u[3]||"",!0),lr(this,u[4]),this.l=En(u[5]||"",!0),Wo(this,u[6]||"",!0),this.m=En(u[7]||"")):(this.h=!1,this.i=new Tn(null,this.h))}Ie.prototype.toString=function(){var s=[],u=this.j;u&&s.push(wn(u,Qo,!0),":");var h=this.g;return(h||u=="file")&&(s.push("//"),(u=this.o)&&s.push(wn(u,Qo,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(wn(h,h.charAt(0)=="/"?fh:hh,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",wn(h,ph)),s.join("")};function Kt(s){return new Ie(s)}function cr(s,u,h){s.j=h?En(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function lr(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function Wo(s,u,h){u instanceof Tn?(s.i=u,mh(s.i,s.h)):(h||(u=wn(u,dh)),s.i=new Tn(u,s.h))}function J(s,u,h){s.i.set(u,h)}function hr(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function En(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function wn(s,u,h){return typeof s=="string"?(s=encodeURI(s).replace(u,lh),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function lh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Qo=/[#\/\?@]/g,hh=/[#\?:]/g,fh=/[#\?]/g,dh=/[#\?@]/g,ph=/#/g;function Tn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function ne(s){s.g||(s.g=new Map,s.h=0,s.i&&ch(s.i,function(u,h){s.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Tn.prototype,n.add=function(s,u){ne(this),this.i=null,s=$e(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(u),this.h+=1,this};function Xo(s,u){ne(s),u=$e(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Yo(s,u){return ne(s),u=$e(s,u),s.g.has(u)}n.forEach=function(s,u){ne(this),this.g.forEach(function(h,p){h.forEach(function(A){s.call(u,A,p,this)},this)},this)},n.na=function(){ne(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const A=s[p];for(let b=0;b<A.length;b++)h.push(u[p])}return h},n.V=function(s){ne(this);let u=[];if(typeof s=="string")Yo(this,s)&&(u=u.concat(this.g.get($e(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)u=u.concat(s[h])}return u},n.set=function(s,u){return ne(this),this.i=null,s=$e(this,s),Yo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function Jo(s,u,h){Xo(s,u),0<h.length&&(s.i=null,s.g.set($e(s,u),k(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const b=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var A=b;V[p]!==""&&(A+="="+encodeURIComponent(String(V[p]))),s.push(A)}}return this.i=s.join("&")};function $e(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function mh(s,u){u&&!s.j&&(ne(s),s.i=null,s.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(Xo(this,p),Jo(this,A,h))},s)),s.j=u}function gh(s,u){const h=new yn;if(c.Image){const p=new Image;p.onload=R(re,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(re,h,"TestLoadImage: error",!1,u,p),p.onabort=R(re,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(re,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else u(!1)}function _h(s,u){const h=new yn,p=new AbortController,A=setTimeout(()=>{p.abort(),re(h,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:p.signal}).then(b=>{clearTimeout(A),b.ok?re(h,"TestPingServer: ok",!0,u):re(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),re(h,"TestPingServer: error",!1,u)})}function re(s,u,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function yh(){this.g=new th}function vh(s,u,h){const p=h||"";try{Ho(s,function(A,b){let V=A;f(A)&&(V=Pi(A)),u.push(p+b+"="+encodeURIComponent(V))})}catch(A){throw u.push(p+"type="+encodeURIComponent("_badmap")),A}}function fr(s){this.l=s.Ub||null,this.j=s.eb||!1}P(fr,xi),fr.prototype.g=function(){return new dr(this.l,this.j)},fr.prototype.i=function(s){return function(){return s}}({});function dr(s,u){yt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(dr,yt),n=dr.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,An(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?In(this):An(this),this.readyState==3&&Zo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,In(this))},n.Qa=function(s){this.g&&(this.response=s,In(this))},n.ga=function(){this.g&&In(this)};function In(s){s.readyState=4,s.l=null,s.j=null,s.v=null,An(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=u.next();return s.join(`\r
`)};function An(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ta(s){let u="";return ut(s,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Bi(s,u,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=ta(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):J(s,u,h))}function rt(s){yt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(rt,yt);var Eh=/^https?$/i,wh=["POST","PUT"];n=rt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Di.g(),this.v=this.o?Po(this.o):Po(Di),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(b){ea(this,b);return}if(s=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())h.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wh,u,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,V]of h)this.g.setRequestHeader(b,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ia(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){ea(this,b)}};function ea(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,na(s),pr(s)}function na(s){s.A||(s.A=!0,At(s,"complete"),At(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,At(this,"complete"),At(this,"abort"),pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},n.bb=function(){ra(this)};function ra(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Wt(s)!=4||s.Z()!=2)){if(s.u&&Wt(s)==4)Ro(s.Ea,0,s);else if(At(s,"readystatechange"),Wt(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var p;if(p=V===0){var A=String(s.D).match(Ko)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!Eh.test(A?A.toLowerCase():"")}h=p}if(h)At(s,"complete"),At(s,"success");else{s.m=6;try{var b=2<Wt(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",na(s)}}finally{pr(s)}}}}function pr(s,u){if(s.g){ia(s);const h=s.g,p=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||At(s,"ready");try{h.onreadystatechange=p}catch{}}}function ia(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Wt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Zl(u)}};function sa(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Th(s){const u={};s=(s.g&&2<=Wt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(B(s[p]))continue;var h=v(s[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=u[A]||[];u[A]=b,b.push(h)}I(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rn(s,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||u}function oa(s){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rn("baseRetryDelayMs",5e3,s),this.cb=Rn("retryDelaySeedMs",1e4,s),this.Wa=Rn("forwardChannelMaxRetries",2,s),this.wa=Rn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new $o(s&&s.concurrentRequestLimit),this.Da=new yh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=oa.prototype,n.la=8,n.G=1,n.connect=function(s,u,h,p){Rt(0),this.W=s,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ma(this,null,this.W),gr(this)};function $i(s){if(aa(s),s.G==3){var u=s.U++,h=Kt(s.I);if(J(h,"SID",s.K),J(h,"RID",u),J(h,"TYPE","terminate"),bn(s,h),u=new ee(s,s.j,u),u.L=2,u.v=hr(Kt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=ga(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ur(u)}pa(s)}function mr(s){s.g&&(zi(s),s.g.cancel(),s.g=null)}function aa(s){mr(s),s.u&&(c.clearTimeout(s.u),s.u=null),_r(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function gr(s){if(!qo(s.h)&&!s.s){s.s=!0;var u=s.Ga;nt||_e(),it||(nt(),it=!0),Ht.add(u,s),s.B=0}}function Ih(s,u){return zo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=_n(E(s.Ga,s,u),da(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new ee(this,this.j,s);let b=this.o;if(this.S&&(b?(b=g(b),w(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=ca(this,A,u),h=Kt(this.I),J(h,"RID",s),J(h,"CVER",22),this.D&&J(h,"X-HTTP-Session-Id",this.D),bn(this,h),b&&(this.O?u="headers="+encodeURIComponent(String(ta(b)))+"&"+u:this.m&&Bi(h,this.m,b)),Ui(this.h,A),this.Ua&&J(h,"TYPE","init"),this.P?(J(h,"$req",u),J(h,"SID","null"),A.T=!0,Mi(A,h,null)):Mi(A,h,u),this.G=2}}else this.G==3&&(s?ua(this,s):this.i.length==0||qo(this.h)||ua(this))};function ua(s,u){var h;u?h=u.l:h=s.U++;const p=Kt(s.I);J(p,"SID",s.K),J(p,"RID",h),J(p,"AID",s.T),bn(s,p),s.m&&s.o&&Bi(p,s.m,s.o),h=new ee(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),u&&(s.i=u.D.concat(s.i)),u=ca(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ui(s.h,h),Mi(h,p,u)}function bn(s,u){s.H&&ut(s.H,function(h,p){J(u,p,h)}),s.l&&Ho({},function(h,p){J(u,p,h)})}function ca(s,u,h){h=Math.min(s.i.length,h);var p=s.l?E(s.l.Na,s.l,s):null;t:{var A=s.i;let b=-1;for(;;){const V=["count="+h];b==-1?0<h?(b=A[0].g,V.push("ofs="+b)):b=0:V.push("ofs="+b);let Y=!0;for(let dt=0;dt<h;dt++){let W=A[dt].g;const vt=A[dt].map;if(W-=b,0>W)b=Math.max(0,A[dt].g-100),Y=!1;else try{vh(vt,V,"req"+W+"_")}catch{p&&p(vt)}}if(Y){p=V.join("&");break t}}}return s=s.i.splice(0,h),u.D=s,p}function la(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;nt||_e(),it||(nt(),it=!0),Ht.add(u,s),s.v=0}}function qi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=_n(E(s.Fa,s),da(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=_n(E(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),mr(this),ha(this))};function zi(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function ha(s){s.g=new ee(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Kt(s.qa);J(u,"RID","rpc"),J(u,"SID",s.K),J(u,"AID",s.T),J(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(u,"TO",s.ja),J(u,"TYPE","xmlhttp"),bn(s,u),s.m&&s.o&&Bi(u,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=hr(Kt(u)),h.m=null,h.P=!0,Fo(h,s)}n.Za=function(){this.C!=null&&(this.C=null,mr(this),qi(this),Rt(19))};function _r(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function fa(s,u){var h=null;if(s.g==u){_r(s),zi(s),s.g=null;var p=2}else if(Fi(s.h,u))h=u.D,jo(s.h,u),p=1;else return;if(s.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=s.B;p=sr(),At(p,new No(p,h)),gr(s)}else la(s);else if(A=u.s,A==3||A==0&&0<u.X||!(p==1&&Ih(s,u)||p==2&&qi(s)))switch(h&&0<h.length&&(u=s.h,u.i=u.i.concat(h)),A){case 1:Ae(s,5);break;case 4:Ae(s,10);break;case 3:Ae(s,6);break;default:Ae(s,2)}}}function da(s,u){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*u}function Ae(s,u){if(s.j.info("Error code "+u),u==2){var h=E(s.fb,s),p=s.Xa;const A=!p;p=new Ie(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||cr(p,"https"),hr(p),A?gh(p.toString(),h):_h(p.toString(),h)}else Rt(2);s.G=0,s.l&&s.l.sa(u),pa(s),aa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function pa(s){if(s.G=0,s.ka=[],s.l){const u=Go(s.h);(u.length!=0||s.i.length!=0)&&(x(s.ka,u),x(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function ma(s,u,h){var p=h instanceof Ie?Kt(h):new Ie(h);if(p.g!="")u&&(p.g=u+"."+p.g),lr(p,p.s);else{var A=c.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var b=new Ie(null);p&&cr(b,p),u&&(b.g=u),A&&lr(b,A),h&&(b.l=h),p=b}return h=s.D,u=s.ya,h&&u&&J(p,h,u),J(p,"VER",s.la),bn(s,p),p}function ga(s,u,h){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new rt(new fr({eb:h})):new rt(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}n=_a.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function yr(){}yr.prototype.g=function(s,u){return new Pt(s,u)};function Pt(s,u){yt.call(this),this.g=new oa(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!B(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new qe(this)}P(Pt,yt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){$i(this.g)},Pt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Pi(s),s=h);u.i.push(new oh(u.Ya++,s)),u.G==3&&gr(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,$i(this.g),delete this.g,Pt.aa.N.call(this)};function ya(s){Vi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const h in u){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}P(ya,Vi);function va(){ki.call(this),this.status=1}P(va,ki);function qe(s){this.g=s}P(qe,_a),qe.prototype.ua=function(){At(this.g,"a")},qe.prototype.ta=function(s){At(this.g,new ya(s))},qe.prototype.sa=function(s){At(this.g,new va)},qe.prototype.ra=function(){At(this.g,"b")},yr.prototype.createWebChannel=yr.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Vc=function(){return new yr},xc=function(){return sr()},Pc=we,_s={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},or.NO_ERROR=0,or.TIMEOUT=8,or.HTTP_ERROR=6,Nr=or,Mo.COMPLETE="complete",Cc=Mo,xo.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Vn=xo,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Sc=rt}).apply(typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{});const Za="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Ec("@firebase/firestore");function je(){return Ve.logLevel}function D(n,...t){if(Ve.logLevel<=K.DEBUG){const e=t.map(qs);Ve.debug(`Firestore (${un}): ${n}`,...e)}}function Zt(n,...t){if(Ve.logLevel<=K.ERROR){const e=t.map(qs);Ve.error(`Firestore (${un}): ${n}`,...e)}}function Ze(n,...t){if(Ve.logLevel<=K.WARN){const e=t.map(qs);Ve.warn(`Firestore (${un}): ${n}`,...e)}}function qs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const t=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: `+n;throw Zt(t),new Error(t)}function Q(n,t){n||O()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends an{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class Wg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Qg{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let o=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ue,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ue)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new kc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new Tt(t)}}class Xg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Yg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Xg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Q(this.o===void 0);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new Jg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=t_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function tn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new lt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new lt(0,0))}static max(){return new F(new lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Gn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends Gn{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const e_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Gn{construct(t,e,r){return new mt(t,e,r)}static isValidIdentifier(t){return e_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Z.fromString(t))}static fromName(t){return new M(Z.fromString(t).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Z(t.slice()))}}function n_(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new lt(e+1,0):new lt(e,r));return new le(i,M.empty(),t)}function r_(n){return new le(n.readTime,n.key,-1)}class le{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new le(F.min(),M.empty(),-1)}static max(){return new le(F.max(),M.empty(),-1)}}function i_(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==s_)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},l=>r(l))}),a=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(i=>i?S.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,i)=>{const o=t.length,a=new Array(o);let c=0;for(let l=0;l<o;l++){const f=l;e(t[f]).next(d=>{a[f]=d,++c,c===o&&r(a)},d=>i(d))}})}static doWhile(t,e){return new S((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function a_(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ui.oe=-1;function ci(n){return n==null}function Qr(n){return n===0&&1/n==-1/0}function u_(n){return typeof n=="number"&&Number.isInteger(n)&&!Qr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=tu(t)),t=l_(n.get(e),t);return tu(t)}function l_(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function tu(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Nc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new br(this.root,t,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new br(this.root,t,this.comparator,!0)}}class br{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=o??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new pt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,i,o){return this}insert(t,e,r){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(t){return new nu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class nu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new xt([])}unionWith(t){let e=new ht(mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Mc("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const h_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(n){if(Q(!!n),typeof n=="string"){let t=0;const e=h_.exec(n);if(Q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function li(n){const t=n.mapValue.fields.__previous_value__;return zs(t)?li(t):t}function Hn(n){const t=he(n.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,e,r,i,o,a,c,l,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f}}class Kn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Kn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zs(n)?4:p_(n)?9007199254740991:d_(n)?10:11:O()}function zt(n,t){if(n===t)return!0;const e=de(n);if(e!==de(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Hn(n).isEqual(Hn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=he(i.timestampValue),c=he(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return fe(i.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return ot(i.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ot(i.integerValue)===ot(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ot(i.doubleValue),c=ot(o.doubleValue);return a===c?Qr(a)===Qr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return tn(n.arrayValue.values||[],t.arrayValue.values||[],zt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(eu(a)!==eu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!zt(a[l],c[l])))return!1;return!0}(n,t);default:return O()}}function Wn(n,t){return(n.values||[]).find(e=>zt(e,t))!==void 0}function en(n,t){if(n===t)return 0;const e=de(n),r=de(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=ot(o.integerValue||o.doubleValue),l=ot(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,t);case 3:return ru(n.timestampValue,t.timestampValue);case 4:return ru(Hn(n),Hn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,a){const c=fe(o),l=fe(a);return c.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),l=a.split("/");for(let f=0;f<c.length&&f<l.length;f++){const d=j(c[f],l[f]);if(d!==0)return d}return j(c.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=j(ot(o.latitude),ot(a.latitude));return c!==0?c:j(ot(o.longitude),ot(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return iu(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,l,f,d;const _=o.fields||{},E=a.fields||{},R=(c=_.value)===null||c===void 0?void 0:c.arrayValue,P=(l=E.value)===null||l===void 0?void 0:l.arrayValue,k=j(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:iu(R,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Sr.mapValue&&a===Sr.mapValue)return 0;if(o===Sr.mapValue)return 1;if(a===Sr.mapValue)return-1;const c=o.fields||{},l=Object.keys(c),f=a.fields||{},d=Object.keys(f);l.sort(),d.sort();for(let _=0;_<l.length&&_<d.length;++_){const E=j(l[_],d[_]);if(E!==0)return E;const R=en(c[l[_]],f[d[_]]);if(R!==0)return R}return j(l.length,d.length)}(n.mapValue,t.mapValue);default:throw O()}}function ru(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=he(n),r=he(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function iu(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=en(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function nn(n){return ys(n)}function ys(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=he(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ys(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ys(e.fields[a])}`;return i+"}"}(n.mapValue):O()}function Mr(n){switch(de(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=li(n);return t?16+Mr(t):16;case 5:return 2*n.stringValue.length;case 6:return fe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Mr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return me(r.fields,(o,a)=>{i+=o.length+Mr(a)}),i}(n.mapValue);default:throw O()}}function vs(n){return!!n&&"integerValue"in n}function js(n){return!!n&&"arrayValue"in n}function su(n){return!!n&&"nullValue"in n}function ou(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Or(n){return!!n&&"mapValue"in n}function d_(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function p_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Or(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mn(e)}setAll(t){let e=mt.emptyPath(),r={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=c.popLast()}a?r[c.lastSegment()]=Mn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Or(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Or(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){me(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new St(Mn(this.value))}}function Oc(n){const t=[];return me(n.fields,(e,r)=>{const i=new mt([e]);if(Or(r)){const o=Oc(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new xt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,r,i,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new It(t,0,F.min(),F.min(),F.min(),St.empty(),0)}static newFoundDocument(t,e,r,i){return new It(t,1,e,F.min(),r,i,0)}static newNoDocument(t,e){return new It(t,2,e,F.min(),F.min(),St.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,F.min(),F.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e){this.position=t,this.inclusive=e}}function au(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=en(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!zt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e="asc"){this.field=t,this.dir=e}}function m_(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{}class ct extends Lc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new __(t,e,r):e==="array-contains"?new E_(t,r):e==="in"?new w_(t,r):e==="not-in"?new T_(t,r):e==="array-contains-any"?new I_(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new y_(t,r):new v_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(en(e,this.value)):e!==null&&de(this.value)===de(e)&&this.matchesComparison(en(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Lc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new jt(t,e)}matches(t){return Fc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fc(n){return n.op==="and"}function Uc(n){return g_(n)&&Fc(n)}function g_(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Es(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(Uc(n))return n.filters.map(t=>Es(t)).join(",");{const t=n.filters.map(e=>Es(e)).join(",");return`${n.op}(${t})`}}function Bc(n,t){return n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&zt(r.value,i.value)}(n,t):n instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&Bc(a,i.filters[c]),!0):!1}(n,t):void O()}function $c(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${nn(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map($c).join(" ,")+"}"}(n):"Filter"}class __ extends ct{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class y_ extends ct{constructor(t,e){super(t,"in",e),this.keys=qc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class v_ extends ct{constructor(t,e){super(t,"not-in",e),this.keys=qc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class E_ extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return js(e)&&Wn(e.arrayValue,this.value)}}class w_ extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Wn(this.value.arrayValue,e)}}class T_ extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Wn(this.value.arrayValue,e)}}class I_ extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!js(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Wn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e=null,r=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function cu(n,t=null,e=[],r=[],i=null,o=null,a=null){return new A_(n,t,e,r,i,o,a)}function Gs(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Es(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ci(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>nn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>nn(r)).join(",")),t.ue=e}return t.ue}function Hs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!m_(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Bc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!uu(n.startAt,t.startAt)&&uu(n.endAt,t.endAt)}function ws(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e=null,r=[],i=[],o=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function R_(n,t,e,r,i,o,a,c){return new hi(n,t,e,r,i,o,a,c)}function Ks(n){return new hi(n)}function lu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function b_(n){return n.collectionGroup!==null}function On(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ht(mt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Yr(o,r))}),e.has(mt.keyField().canonicalString())||t.ce.push(new Yr(mt.keyField(),r))}return t.ce}function Bt(n){const t=U(n);return t.le||(t.le=S_(t,On(n))),t.le}function S_(n,t){if(n.limitType==="F")return cu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Yr(i.field,o)});const e=n.endAt?new Xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xr(n.startAt.position,n.startAt.inclusive):null;return cu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ts(n,t,e){return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function fi(n,t){return Hs(Bt(n),Bt(t))&&n.limitType===t.limitType}function zc(n){return`${Gs(Bt(n))}|lt:${n.limitType}`}function Ge(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>$c(i)).join(", ")}]`),ci(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>nn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>nn(i)).join(",")),`Target(${r})`}(Bt(n))}; limitType=${n.limitType})`}function di(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of On(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,c,l){const f=au(a,c,l);return a.inclusive?f<=0:f<0}(r.startAt,On(r),i)||r.endAt&&!function(a,c,l){const f=au(a,c,l);return a.inclusive?f>=0:f>0}(r.endAt,On(r),i))}(n,t)}function C_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jc(n){return(t,e)=>{let r=!1;for(const i of On(n)){const o=P_(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function P_(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const l=a.data.field(o),f=c.data.field(o);return l!==null&&f!==null?en(l,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Nc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new et(M.comparator);function te(){return x_}const Gc=new et(M.comparator);function kn(...n){let t=Gc;for(const e of n)t=t.insert(e.key,e);return t}function Hc(n){let t=Gc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Se(){return Ln()}function Kc(){return Ln()}function Ln(){return new De(n=>n.toString(),(n,t)=>n.isEqual(t))}const V_=new et(M.comparator),k_=new ht(M.comparator);function $(...n){let t=k_;for(const e of n)t=t.add(e);return t}const D_=new ht(j);function N_(){return D_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(t)?"-0":t}}function Wc(n){return{integerValue:""+n}}function M_(n,t){return u_(t)?Wc(t):Ws(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}function O_(n,t,e){return n instanceof Jr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&zs(o)&&(o=li(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Qn?Xc(n,t):n instanceof Xn?Yc(n,t):function(i,o){const a=Qc(i,o),c=hu(a)+hu(i.Pe);return vs(a)&&vs(i.Pe)?Wc(c):Ws(i.serializer,c)}(n,t)}function L_(n,t,e){return n instanceof Qn?Xc(n,t):n instanceof Xn?Yc(n,t):e}function Qc(n,t){return n instanceof Zr?function(r){return vs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Jr extends pi{}class Qn extends pi{constructor(t){super(),this.elements=t}}function Xc(n,t){const e=Jc(t);for(const r of n.elements)e.some(i=>zt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Xn extends pi{constructor(t){super(),this.elements=t}}function Yc(n,t){let e=Jc(t);for(const r of n.elements)e=e.filter(i=>!zt(i,r));return{arrayValue:{values:e}}}class Zr extends pi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function hu(n){return ot(n.integerValue||n.doubleValue)}function Jc(n){return js(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function F_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Qn&&i instanceof Qn||r instanceof Xn&&i instanceof Xn?tn(r.elements,i.elements,zt):r instanceof Zr&&i instanceof Zr?zt(r.Pe,i.Pe):r instanceof Jr&&i instanceof Jr}(n.transform,t.transform)}class U_{constructor(t,e){this.version=t,this.transformResults=e}}class Ot{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Lr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class mi{}function Zc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Qs(n.key,Ot.none()):new Zn(n.key,n.data,Ot.none());{const e=n.data,r=St.empty();let i=new ht(mt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ge(n.key,r,new xt(i.toArray()),Ot.none())}}function B_(n,t,e){n instanceof Zn?function(i,o,a){const c=i.value.clone(),l=du(i.fieldTransforms,o,a.transformResults);c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ge?function(i,o,a){if(!Lr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=du(i.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(tl(i)),l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Fn(n,t,e,r){return n instanceof Zn?function(o,a,c,l){if(!Lr(o.precondition,a))return c;const f=o.value.clone(),d=pu(o.fieldTransforms,l,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ge?function(o,a,c,l){if(!Lr(o.precondition,a))return c;const f=pu(o.fieldTransforms,l,a),d=a.data;return d.setAll(tl(o)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,t,e,r):function(o,a,c){return Lr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function $_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Qc(r.transform,i||null);o!=null&&(e===null&&(e=St.empty()),e.set(r.field,o))}return e||null}function fu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&tn(r,i,(o,a)=>F_(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Zn extends mi{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ge extends mi{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function tl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function du(n,t,e){const r=new Map;Q(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);r.set(o.field,L_(a,c,e[i]))}return r}function pu(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,O_(o,a,t))}return r}class Qs extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q_ extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&B_(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Kc();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const l=Zc(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&tn(this.mutations,t.mutations,(e,r)=>fu(e,r))&&tn(this.baseMutations,t.baseMutations,(e,r)=>fu(e,r))}}class Xs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Q(t.mutations.length===r.length);let i=function(){return V_}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Xs(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,H;function H_(n){switch(n){default:return O();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function el(n){if(n===void 0)return Zt("GRPC error has no .code"),C.UNKNOWN;switch(n){case at.OK:return C.OK;case at.CANCELLED:return C.CANCELLED;case at.UNKNOWN:return C.UNKNOWN;case at.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case at.INTERNAL:return C.INTERNAL;case at.UNAVAILABLE:return C.UNAVAILABLE;case at.UNAUTHENTICATED:return C.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case at.NOT_FOUND:return C.NOT_FOUND;case at.ALREADY_EXISTS:return C.ALREADY_EXISTS;case at.PERMISSION_DENIED:return C.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case at.ABORTED:return C.ABORTED;case at.OUT_OF_RANGE:return C.OUT_OF_RANGE;case at.UNIMPLEMENTED:return C.UNIMPLEMENTED;case at.DATA_LOSS:return C.DATA_LOSS;default:return O()}}(H=at||(at={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new Pe([4294967295,4294967295],0);function mu(n){const t=K_().encode(n),e=new bc;return e.update(t),new Uint8Array(e.digest())}function gu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Pe([e,r],0),new Pe([i,o],0)]}class Ys{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Dn(`Invalid padding: ${e}`);if(r<0)throw new Dn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Dn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Dn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=Pe.fromNumber(this.Te)}Ee(t,e,r){let i=t.add(e.multiply(Pe.fromNumber(r)));return i.compare(W_)===1&&(i=new Pe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=mu(t),[r,i]=gu(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ys(o,i,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Te===0)return;const e=mu(t),[r,i]=gu(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,tr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gi(F.min(),i,new et(j),te(),$())}}class tr{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new tr(r,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class nl{constructor(t,e){this.targetId=t,this.me=e}}class rl{constructor(t,e,r=gt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class _u{constructor(){this.fe=0,this.ge=yu(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=$(),e=$(),r=$();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:O()}}),new tr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=yu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Q_{constructor(t){this.Le=t,this.Be=new Map,this.ke=te(),this.qe=Cr(),this.Qe=Cr(),this.Ke=new et(j)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.je(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(ws(o))if(r===0){const a=new M(o.path);this.We(e,a,It.newNoDocument(a,F.min()))}else Q(r===1);else{const a=this.Ze(e);if(a!==r){const c=this.Xe(t),l=c?this.et(c,t,a):1;if(l!==0){this.He(e);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=fe(r).toUint8Array()}catch(l){if(l instanceof Mc)return Ze("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ys(a,i,o)}catch(l){return Ze(l instanceof Dn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(t,e,r){return e.me.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Ye(a);if(c){if(o.current&&ws(c.target)){const l=new M(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,It.newNoDocument(l,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=$();this.Qe.forEach((o,a)=>{let c=!0;a.forEachWhile(l=>{const f=this.Ye(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new gi(t,e,this.Ke,this.ke,r);return this.ke=te(),this.qe=Cr(),this.Qe=Cr(),this.Ke=new et(j),i}Ue(t,e){if(!this.je(t))return;const r=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new _u,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new ht(j),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(j),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new _u),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Cr(){return new et(M.comparator)}function yu(){return new et(M.comparator)}const X_={asc:"ASCENDING",desc:"DESCENDING"},Y_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},J_={and:"AND",or:"OR"};class Z_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Is(n,t){return n.useProto3Json||ci(t)?t:{value:t}}function ti(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function il(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ty(n,t){return ti(n,t.toTimestamp())}function $t(n){return Q(!!n),F.fromTimestamp(function(e){const r=he(e);return new lt(r.seconds,r.nanos)}(n))}function Js(n,t){return As(n,t).canonicalString()}function As(n,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function sl(n){const t=Z.fromString(n);return Q(ll(t)),t}function Rs(n,t){return Js(n.databaseId,t.path)}function ts(n,t){const e=sl(t);if(e.get(1)!==n.databaseId.projectId)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(al(e))}function ol(n,t){return Js(n.databaseId,t)}function ey(n){const t=sl(n);return t.length===4?Z.emptyPath():al(t)}function bs(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function al(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vu(n,t,e){return{name:Rs(n,t),fields:e.value.mapValue.fields}}function ny(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,d){return f.useProto3Json?(Q(d===void 0||typeof d=="string"),gt.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array),gt.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const d=f.code===void 0?C.UNKNOWN:el(f.code);return new N(d,f.message||"")}(a);e=new rl(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ts(n,r.document.name),o=$t(r.document.updateTime),a=r.document.createTime?$t(r.document.createTime):F.min(),c=new St({mapValue:{fields:r.document.fields}}),l=It.newFoundDocument(i,o,a,c),f=r.targetIds||[],d=r.removedTargetIds||[];e=new Fr(f,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ts(n,r.document),o=r.readTime?$t(r.readTime):F.min(),a=It.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Fr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ts(n,r.document),o=r.removedTargetIds||[];e=new Fr([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new G_(i,o),c=r.targetId;e=new nl(c,a)}}return e}function ry(n,t){let e;if(t instanceof Zn)e={update:vu(n,t.key,t.value)};else if(t instanceof Qs)e={delete:Rs(n,t.key)};else if(t instanceof ge)e={update:vu(n,t.key,t.data),updateMask:fy(t.fieldMask)};else{if(!(t instanceof q_))return O();e={verify:Rs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Jr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ty(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function iy(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?$t(i.updateTime):$t(o);return a.isEqual(F.min())&&(a=$t(o)),new U_(a,i.transformResults||[])}(e,t))):[]}function sy(n,t){return{documents:[ol(n,t.path)]}}function oy(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ol(n,i);const o=function(f){if(f.length!==0)return cl(jt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(d=>function(E){return{field:He(E.field),direction:cy(E.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Is(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:i}}function ay(n){let t=ey(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Q(r===1);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let o=[];e.where&&(o=function(_){const E=ul(_);return E instanceof jt&&Uc(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(_){return _.map(E=>function(P){return new Yr(Ke(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(e.orderBy));let c=null;e.limit&&(c=function(_){let E;return E=typeof _=="object"?_.value:_,ci(E)?null:E}(e.limit));let l=null;e.startAt&&(l=function(_){const E=!!_.before,R=_.values||[];return new Xr(R,E)}(e.startAt));let f=null;return e.endAt&&(f=function(_){const E=!_.before,R=_.values||[];return new Xr(R,E)}(e.endAt)),R_(t,i,a,o,c,"F",l,f)}function uy(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ul(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ke(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ke(e.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ke(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ke(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return ct.create(Ke(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(r=>ul(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function cy(n){return X_[n]}function ly(n){return Y_[n]}function hy(n){return J_[n]}function He(n){return{fieldPath:n.canonicalString()}}function Ke(n){return mt.fromServerFormat(n.fieldPath)}function cl(n){return n instanceof ct?function(e){if(e.op==="=="){if(ou(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NAN"}};if(su(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ou(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NOT_NAN"}};if(su(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:He(e.field),op:ly(e.op),value:e.value}}}(n):n instanceof jt?function(e){const r=e.getFilters().map(i=>cl(i));return r.length===1?r[0]:{compositeFilter:{op:hy(e.op),filters:r}}}(n):O()}function fy(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ll(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e,r,i,o=F.min(),a=F.min(),c=gt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(t){this.ht=t}}function py(n){const t=ay({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.ln=new gy}addToCollectionParentIndex(t,e){return this.ln.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(le.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(le.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class gy{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ht(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ht(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(41943040,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new rn(0)}static Qn(){return new rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class _y{constructor(t){this.Gn=t,this.buffer=new ht(wu),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();wu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class yy{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){D("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await cn(e)}await this.Yn(3e5)})}}class vy{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(ui.oe);const r=new _y(e);return this.Zn.forEachTarget(t,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Eu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eu):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let r,i,o,a,c,l,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(t,i))).next(_=>(r=_,c=Date.now(),this.removeTargets(t,r,e))).next(_=>(o=_,l=Date.now(),this.removeOrphanedDocuments(t,r))).next(_=>(f=Date.now(),je()<=K.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(l-c)+`ms
	Removed ${_} documents in `+(f-l)+`ms
Total Duration: ${f-d}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:_})))}}function Ey(n,t){return new vy(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.changes=new De(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Fn(r.mutation,i,xt.empty(),lt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,e,r=$()){const i=Se();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=kn();return o.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,$()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,i){let o=te();const a=Ln(),c=function(){return Ln()}();return e.forEach((l,f)=>{const d=r.get(f.key);i.has(f.key)&&(d===void 0||d.mutation instanceof ge)?o=o.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Fn(d.mutation,f,d.mutation.getFieldMask(),lt.now())):a.set(f.key,xt.empty())}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((f,d)=>a.set(f,d)),e.forEach((f,d)=>{var _;return c.set(f,new Ty(d,(_=a.get(f))!==null&&_!==void 0?_:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Ln();let i=new et((a,c)=>a-c),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(l=>{const f=e.get(l);if(f===null)return;let d=r.get(l)||xt.empty();d=c.applyToLocalView(f,d),r.set(l,d);const _=(i.get(c.batchId)||$()).add(l);i=i.insert(c.batchId,_)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,d=l.value,_=Kc();d.forEach(E=>{if(!o.has(E)){const R=Zc(e.get(E),r.get(E));R!==null&&_.set(E,R),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,_))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):b_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(Se());let c=-1,l=o;return a.next(f=>S.forEach(f,(d,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),o.get(d)?S.resolve():this.remoteDocumentCache.getEntry(t,d).next(E=>{l=l.insert(d,E)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,l,f,$())).next(d=>({batchId:c,changes:Hc(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=kn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=kn();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,l=>{const f=function(_,E){return new hi(E,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(e,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(d=>{d.forEach((_,E)=>{a=a.insert(_,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((l,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,It.newInvalidDocument(d)))});let c=kn();return a.forEach((l,f)=>{const d=o.get(l);d!==void 0&&Fn(d.mutation,f,xt.empty(),lt.now()),di(e,f)&&(c=c.insert(l,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return S.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:$t(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:py(i.bundledQuery),readTime:$t(i.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.overlays=new et(M.comparator),this.Er=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Se();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Tt(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=Se(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new et((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let d=o.get(f.largestBatchId);d===null&&(d=Se(),o=o.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const c=Se(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,d)=>c.set(f,d)),!(c.size()>=i)););return S.resolve(c)}Tt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new j_(e,r));let o=this.Er.get(e);o===void 0&&(o=$(),this.Er.set(e,o)),this.Er.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.dr=new ht(ft.Ar),this.Rr=new ht(ft.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.gr(new ft(t,e))}pr(t,e){t.forEach(r=>this.removeReference(r,e))}yr(t){const e=new M(new Z([])),r=new ft(e,t),i=new ft(e,t+1),o=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new Z([])),r=new ft(e,t),i=new ft(e,t+1);let o=$();return this.Rr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ft(t,0),r=this.dr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||j(t.br,e.br)}static Vr(t,e){return j(t.br,e.br)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new ht(ft.Ar)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new z_(o,e,r,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new ft(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Fr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),i=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],a=>{const c=this.Cr(a.br);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(j);return e.forEach(i=>{const o=new ft(i,0),a=new ft(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],c=>{r=r.add(c.br)})}),S.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ft(new M(o),0);let c=new ht(j);return this.vr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(l.br)),!0)},a),S.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(r=>{const i=this.Cr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return S.forEach(e.mutations,i=>{const o=new ft(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=r})}Ln(t){}containsKey(t,e){const r=new ft(e,0),i=this.vr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t){this.Nr=t,this.docs=function(){return new et(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Nr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=te();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():It.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=te();const a=e.path,c=new M(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:d}}=l.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||i_(r_(d),r)<=0||(i.has(d.key)||di(e,d))&&(o=o.insert(d.key,d.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){O()}Lr(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Py(this)}getSize(t){return S.resolve(this.size)}}class Py extends wy{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t){this.persistence=t,this.Br=new De(e=>Gs(e),Hs),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zs,this.targetCount=0,this.Qr=rn.qn()}forEachTarget(t,e){return this.Br.forEach((r,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.kr&&(this.kr=e),S.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new rn(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Un(e),S.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Br.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Br.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.qr.mr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.qr.pr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.qr.Sr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.Kr={},this.overlays={},this.$r=new ui(0),this.Ur=!1,this.Ur=!0,this.Wr=new by,this.referenceDelegate=t(this),this.Gr=new xy(this),this.indexManager=new my,this.remoteDocumentCache=function(i){return new Cy(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new dy(e),this.jr=new Ay(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ry,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Kr[t.toKey()];return r||(r=new Sy(e,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Vy(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return S.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,e)))}}class Vy extends o_{constructor(t){super(),this.currentSequenceNumber=t}}class to{constructor(t){this.persistence=t,this.Zr=new Zs,this.Xr=null}static ei(t){return new to(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,r){return this.Zr.addReference(r,e),this.ti.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Zr.removeReference(r,e),this.ti.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),S.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ti,r=>{const i=M.fromPath(r);return this.ni(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(r=>{r?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return S.or([()=>S.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class ei{constructor(t,e){this.persistence=t,this.ri=new De(r=>c_(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ey(this,e)}static ei(t,e){return new ei(t,e)}Hr(){}Jr(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}nr(t){let e=0;return this.er(t,r=>{e++}).next(()=>e)}er(t,e){return S.forEach(this.ri,(r,i)=>this.ir(t,r,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,a=>this.ir(t,a,e).next(c=>{c||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),S.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Mr(t.data.value)),e}ir(t,e,r){return S.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Wi=r,this.Gi=i}static zi(t,e){let r=$(),i=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new eo(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Pm()?8:a_(Sm())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Xi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new ky;return this.ts(t,e,a).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,a,c.size)})}).next(()=>o.result)}ns(t,e,r,i){return r.documentReadCount<this.Ji?(je()<=K.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),S.resolve()):(je()<=K.DEBUG&&D("QueryEngine","Query:",Ge(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(je()<=K.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):S.resolve())}Xi(t,e){if(lu(e))return S.resolve(null);let r=Bt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ts(e,null,"F"),r=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=$(...o);return this.Zi.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(l=>{const f=this.rs(e,c);return this.ss(e,f,a,l.readTime)?this.Xi(t,Ts(e,null,"F")):this.os(t,f,e,l)}))})))}es(t,e,r,i){return lu(e)||i.isEqual(F.min())?S.resolve(null):this.Zi.getDocuments(t,r).next(o=>{const a=this.rs(e,o);return this.ss(e,a,r,i)?S.resolve(null):(je()<=K.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ge(e)),this.os(t,a,e,n_(i,-1)).next(c=>c))})}rs(t,e){let r=new ht(jc(t));return e.forEach((i,o)=>{di(t,o)&&(r=r.add(o))}),r}ss(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,r){return je()<=K.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.Zi.getDocumentsMatchingQuery(t,e,le.min(),r)}os(t,e,r,i){return this.Zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,e,r,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new et(j),this.cs=new De(o=>Gs(o),Hs),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Iy(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function My(n,t,e,r){return new Ny(n,t,e,r)}async function fl(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let l=$();for(const f of i){a.push(f.batchId);for(const d of f.mutations)l=l.add(d.key)}for(const f of o){c.push(f.batchId);for(const d of f.mutations)l=l.add(d.key)}return e.localDocuments.getDocuments(r,l).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:c}))})})}function Oy(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,f,d){const _=f.batch,E=_.keys();let R=S.resolve();return E.forEach(P=>{R=R.next(()=>d.getEntry(l,P)).next(k=>{const x=f.docVersions.get(P);Q(x!==null),k.version.compareTo(x)<0&&(_.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),d.addEntry(k)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,_))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=$();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(l=l.add(c.batch.mutations[f].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function dl(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Ly(n,t){const e=U(n),r=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const c=[];t.targetChanges.forEach((d,_)=>{const E=i.get(_);if(!E)return;c.push(e.Gr.removeMatchingKeys(o,d.removedDocuments,_).next(()=>e.Gr.addMatchingKeys(o,d.addedDocuments,_)));let R=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(_)!==null?R=R.withResumeToken(gt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),i=i.insert(_,R),function(k,x,q){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(E,R,d)&&c.push(e.Gr.updateTargetData(o,R))});let l=te(),f=$();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,d))}),c.push(Fy(o,a,t.documentUpdates).next(d=>{l=d.Is,f=d.Es})),!r.isEqual(F.min())){const d=e.Gr.getLastRemoteSnapshotVersion(o).next(_=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(d)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,l,f)).next(()=>l)}).then(o=>(e.us=i,o))}function Fy(n,t,e){let r=$(),i=$();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=te();return e.forEach((c,l)=>{const f=o.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(F.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):D("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Is:a,Es:i}})}function Uy(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function By(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Gr.getTargetData(r,t).next(o=>o?(i=o,S.resolve(i)):e.Gr.allocateTargetId(r).next(a=>(i=new se(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(r.targetId,r),e.cs.set(t,r.targetId)),r})}async function Ss(n,t,e){const r=U(n),i=r.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ln(a))throw a;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.us=r.us.remove(t),r.cs.delete(i.target)}function Tu(n,t,e){const r=U(n);let i=F.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,f,d){const _=U(l),E=_.cs.get(d);return E!==void 0?S.resolve(_.us.get(E)):_.Gr.getTargetData(f,d)}(r,a,Bt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{o=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,t,e?i:F.min(),e?o:$())).next(c=>($y(r,C_(t),c),{documents:c,ds:o})))}function $y(n,t,e){let r=n.ls.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(t,r)}class Iu{constructor(){this.activeTargetIds=N_()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qy{constructor(){this._o=new Iu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,r){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Iu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr=null;function es(){return Pr===null?Pr=function(){return 268435456+Math.round(2147483648*Math.random())}():Pr++,"0x"+Pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class Hy extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,r,i,o,a){const c=es(),l=this.No(e,r.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,l,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,a),this.Bo(e,l,f,i).then(d=>(D("RestConnection",`Received RPC '${e}' ${c}: `,d),d),d=>{throw Ze("RestConnection",`RPC '${e}' ${c} failed with error: `,d,"url: ",l,"request:",i),d})}ko(e,r,i,o,a,c){return this.Oo(e,r,i,o,a)}Lo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}No(e,r){const i=jy[e];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,r,i){const o=es();return new Promise((a,c)=>{const l=new Sc;l.setWithCredentials(!0),l.listenOnce(Cc.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nr.NO_ERROR:const d=l.getResponseJson();D(wt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case Nr.TIMEOUT:D(wt,`RPC '${t}' ${o} timed out`),c(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case Nr.HTTP_ERROR:const _=l.getStatus();if(D(wt,`RPC '${t}' ${o} failed with status:`,_,"response text:",l.getResponseText()),_>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const P=function(x){const q=x.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(q)>=0?q:C.UNKNOWN}(R.status);c(new N(P,R.message))}else c(new N(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new N(C.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D(wt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(wt,`RPC '${t}' ${o} sending request:`,i),l.send(e,"POST",f,r,15)})}qo(t,e,r){const i=es(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Vc(),c=xc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const d=o.join("");D(wt,`Creating RPC '${t}' stream ${i}: ${d}`,l);const _=a.createWebChannel(d,l);let E=!1,R=!1;const P=new Gy({Eo:x=>{R?D(wt,`Not sending because RPC '${t}' stream ${i} is closed:`,x):(E||(D(wt,`Opening RPC '${t}' stream ${i} transport.`),_.open(),E=!0),D(wt,`RPC '${t}' stream ${i} sending:`,x),_.send(x))},Ao:()=>_.close()}),k=(x,q,B)=>{x.listen(q,G=>{try{B(G)}catch(tt){setTimeout(()=>{throw tt},0)}})};return k(_,Vn.EventType.OPEN,()=>{R||(D(wt,`RPC '${t}' stream ${i} transport opened.`),P.So())}),k(_,Vn.EventType.CLOSE,()=>{R||(R=!0,D(wt,`RPC '${t}' stream ${i} transport closed`),P.Do())}),k(_,Vn.EventType.ERROR,x=>{R||(R=!0,Ze(wt,`RPC '${t}' stream ${i} transport errored:`,x),P.Do(new N(C.UNAVAILABLE,"The operation could not be completed")))}),k(_,Vn.EventType.MESSAGE,x=>{var q;if(!R){const B=x.data[0];Q(!!B);const G=B,tt=(G==null?void 0:G.error)||((q=G[0])===null||q===void 0?void 0:q.error);if(tt){D(wt,`RPC '${t}' stream ${i} received error:`,tt);const _t=tt.status;let ut=function(y){const w=at[y];if(w!==void 0)return el(w)}(_t),I=tt.message;ut===void 0&&(ut=C.INTERNAL,I="Unknown error status: "+_t+" with message "+tt.message),R=!0,P.Do(new N(ut,I)),_.close()}else D(wt,`RPC '${t}' stream ${i} received:`,B),P.vo(B)}}),k(c,Pc.STAT_EVENT,x=>{x.stat===_s.PROXY?D(wt,`RPC '${t}' stream ${i} detected buffering proxy`):x.stat===_s.NOPROXY&&D(wt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function ns(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){return new Z_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e,r,i,o,a,c,l){this.li=t,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new pl(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Zt(e.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===e&&this.I_(r,i)},r=>{t(()=>{const i=new N(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(t,e){const r=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ky extends ml{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=ny(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?$t(a.readTime):F.min()}(t);return this.listener.R_(e,r)}V_(t){const e={};e.database=bs(this.serializer),e.addTarget=function(o,a){let c;const l=a.target;if(c=ws(l)?{documents:sy(o,l)}:{query:oy(o,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=il(o,a.resumeToken);const f=Is(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=ti(o,a.snapshotVersion.toTimestamp());const f=Is(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=uy(this.serializer,t);r&&(e.labels=r),this.c_(e)}m_(t){const e={};e.database=bs(this.serializer),e.removeTarget=t,this.c_(e)}}class Wy extends ml{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return Q(!!t.streamToken),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=iy(t.writeResults,t.commitTime),r=$t(t.commitTime);return this.listener.y_(r,e)}w_(){const t={};t.database=bs(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ry(this.serializer,r))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(t,As(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())})}ko(t,e,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(t,As(e,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(C.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Xy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Zt(e),this.C_=!1):D("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Ne(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const f=U(l);f.k_.add(4),await er(f),f.K_.set("Unknown"),f.k_.delete(4),await yi(f)}(this))})}),this.K_=new Xy(r,i)}}async function yi(n){if(Ne(n))for(const t of n.q_)await t(!0)}async function er(n){for(const t of n.q_)await t(!1)}function gl(n,t){const e=U(n);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),so(e)?io(e):hn(e).s_()&&ro(e,t))}function no(n,t){const e=U(n),r=hn(e);e.B_.delete(t),r.s_()&&_l(e,t),e.B_.size===0&&(r.s_()?r.a_():Ne(e)&&e.K_.set("Unknown"))}function ro(n,t){if(n.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}hn(n).V_(t)}function _l(n,t){n.U_.xe(t),hn(n).m_(t)}function io(n){n.U_=new Q_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.B_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.K_.F_()}function so(n){return Ne(n)&&!hn(n).i_()&&n.B_.size>0}function Ne(n){return U(n).k_.size===0}function yl(n){n.U_=void 0}async function Jy(n){n.K_.set("Online")}async function Zy(n){n.B_.forEach((t,e)=>{ro(n,t)})}async function tv(n,t){yl(n),so(n)?(n.K_.O_(t),io(n)):n.K_.set("Unknown")}async function ev(n,t,e){if(n.K_.set("Online"),t instanceof rl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ni(n,r)}else if(t instanceof Fr?n.U_.$e(t):t instanceof nl?n.U_.Je(t):n.U_.Ge(t),!e.isEqual(F.min()))try{const r=await dl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.U_.it(a);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const d=o.B_.get(f);d&&o.B_.set(f,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,f)=>{const d=o.B_.get(l);if(!d)return;o.B_.set(l,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),_l(o,l);const _=new se(d.target,l,f,d.sequenceNumber);ro(o,_)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await ni(n,r)}}async function ni(n,t,e){if(!ln(t))throw t;n.k_.add(1),await er(n),n.K_.set("Offline"),e||(e=()=>dl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await yi(n)})}function vl(n,t){return t().catch(e=>ni(n,e,t))}async function vi(n){const t=U(n),e=pe(t);let r=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;nv(t);)try{const i=await Uy(t.localStore,r);if(i===null){t.L_.length===0&&e.a_();break}r=i.batchId,rv(t,i)}catch(i){await ni(t,i)}El(t)&&wl(t)}function nv(n){return Ne(n)&&n.L_.length<10}function rv(n,t){n.L_.push(t);const e=pe(n);e.s_()&&e.f_&&e.g_(t.mutations)}function El(n){return Ne(n)&&!pe(n).i_()&&n.L_.length>0}function wl(n){pe(n).start()}async function iv(n){pe(n).w_()}async function sv(n){const t=pe(n);for(const e of n.L_)t.g_(e.mutations)}async function ov(n,t,e){const r=n.L_.shift(),i=Xs.from(r,t,e);await vl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await vi(n)}async function av(n,t){t&&pe(n).f_&&await async function(r,i){if(function(a){return H_(a)&&a!==C.ABORTED}(i.code)){const o=r.L_.shift();pe(r).__(),await vl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await vi(r)}}(n,t),El(n)&&wl(n)}async function Ru(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Ne(e);e.k_.add(3),await er(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await yi(e)}async function uv(n,t){const e=U(n);t?(e.k_.delete(2),await yi(e)):t||(e.k_.add(2),await er(e),e.K_.set("Unknown"))}function hn(n){return n.W_||(n.W_=function(e,r,i){const o=U(e);return o.b_(),new Ky(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:Jy.bind(null,n),mo:Zy.bind(null,n),po:tv.bind(null,n),R_:ev.bind(null,n)}),n.q_.push(async t=>{t?(n.W_.__(),so(n)?io(n):n.K_.set("Unknown")):(await n.W_.stop(),yl(n))})),n.W_}function pe(n){return n.G_||(n.G_=function(e,r,i){const o=U(e);return o.b_(),new Wy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:iv.bind(null,n),po:av.bind(null,n),p_:sv.bind(null,n),y_:ov.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await vi(n)):(await n.G_.stop(),n.L_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,c=new oo(t,e,a,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ao(n,t){if(Zt("AsyncQueue",`${t}: ${n}`),ln(n))return new N(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{static emptySet(t){return new Xe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=kn(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Xe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.z_=new et(M.comparator)}track(t){const e=t.doc.key,r=this.z_.get(e);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(e,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(e):t.type===1&&r.type===2?this.z_=this.z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class sn{constructor(t,e,r,i,o,a,c,l,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new sn(t,e,Xe.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class lv{constructor(){this.queries=Su(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,r){const i=U(e),o=i.queries;i.queries=Su(),o.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new N(C.ABORTED,"Firestore shutting down"))}}function Su(){return new De(n=>zc(n),fi)}async function Tl(n,t){const e=U(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(r=2):(o=new cv,r=t.Z_()?0:1);try{switch(r){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=ao(a,`Initialization of query '${Ge(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&uo(e)}async function Il(n,t){const e=U(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.J_.indexOf(t);a>=0&&(o.J_.splice(a,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function hv(n,t){const e=U(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&uo(e)}function fv(n,t,e){const r=U(n),i=r.queries.get(t);if(i)for(const o of i.J_)o.onError(e);r.queries.delete(t)}function uo(n){n.X_.forEach(t=>{t.next()})}var Cs,Cu;(Cu=Cs||(Cs={})).na="default",Cu.Cache="cache";class Al{constructor(t,e,r){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const r=e!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Cs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.key=t}}class bl{constructor(t){this.key=t}}class dv{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=$(),this.mutatedKeys=$(),this.Va=jc(t),this.ma=new Xe(this.Va)}get fa(){return this.da}ga(t,e){const r=e?e.pa:new bu,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,_)=>{const E=i.get(d),R=di(this.query,_)?_:null,P=!!E&&this.mutatedKeys.has(E.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;E&&R?E.data.isEqual(R.data)?P!==k&&(r.track({type:3,doc:R}),x=!0):this.ya(E,R)||(r.track({type:2,doc:R}),x=!0,(l&&this.Va(R,l)>0||f&&this.Va(R,f)<0)&&(c=!0)):!E&&R?(r.track({type:0,doc:R}),x=!0):E&&!R&&(r.track({type:1,doc:E}),x=!0,(l||f)&&(c=!0)),x&&(R?(a=a.add(R),o=k?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{ma:a,pa:r,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((d,_)=>function(R,P){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return k(R)-k(P)}(d.type,_.type)||this.Va(d.doc,_.doc)),this.wa(r),i=i!=null&&i;const c=e&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,f=l!==this.Aa;return this.Aa=l,a.length!==0||f?{snapshot:new sn(this.query,t.ma,o,a,t.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new bu,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=$(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const e=[];return t.forEach(r=>{this.Ra.has(r)||e.push(new bl(r))}),this.Ra.forEach(r=>{t.has(r)||e.push(new Rl(r))}),e}va(t){this.da=t.ds,this.Ra=$();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return sn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class pv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class mv{constructor(t){this.key=t,this.Fa=!1}}class gv{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new De(c=>zc(c),fi),this.Oa=new Map,this.Na=new Set,this.La=new et(M.comparator),this.Ba=new Map,this.ka=new Zs,this.qa={},this.Qa=new Map,this.Ka=rn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function _v(n,t,e=!0){const r=kl(n);let i;const o=r.xa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await Sl(r,t,e,!0),i}async function yv(n,t){const e=kl(n);await Sl(e,t,!0,!1)}async function Sl(n,t,e,r){const i=await By(n.localStore,Bt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await vv(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&gl(n.remoteStore,i),c}async function vv(n,t,e,r,i){n.Ua=(_,E,R)=>async function(k,x,q,B){let G=x.view.ga(q);G.ss&&(G=await Tu(k.localStore,x.query,!1).then(({documents:I})=>x.view.ga(I,G)));const tt=B&&B.targetChanges.get(x.targetId),_t=B&&B.targetMismatches.get(x.targetId)!=null,ut=x.view.applyChanges(G,k.isPrimaryClient,tt,_t);return xu(k,x.targetId,ut.ba),ut.snapshot}(n,_,E,R);const o=await Tu(n.localStore,t,!0),a=new dv(t,o.ds),c=a.ga(o.documents),l=tr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,l);xu(n,e,f.ba);const d=new pv(t,e,a);return n.xa.set(t,d),n.Oa.has(e)?n.Oa.get(e).push(t):n.Oa.set(e,[t]),f.snapshot}async function Ev(n,t,e){const r=U(n),i=r.xa.get(t),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(a=>!fi(a,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ss(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&no(r.remoteStore,i.targetId),Ps(r,i.targetId)}).catch(cn)):(Ps(r,i.targetId),await Ss(r.localStore,i.targetId,!0))}async function wv(n,t){const e=U(n),r=e.xa.get(t),i=e.Oa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),no(e.remoteStore,r.targetId))}async function Tv(n,t,e){const r=Pv(n);try{const i=await function(a,c){const l=U(a),f=lt.now(),d=c.reduce((R,P)=>R.add(P.key),$());let _,E;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=te(),k=$();return l.hs.getEntries(R,d).next(x=>{P=x,P.forEach((q,B)=>{B.isValidDocument()||(k=k.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,P)).next(x=>{_=x;const q=[];for(const B of c){const G=$_(B,_.get(B.key).overlayedDocument);G!=null&&q.push(new ge(B.key,G,Oc(G.value.mapValue),Ot.exists(!0)))}return l.mutationQueue.addMutationBatch(R,f,q,c)}).next(x=>{E=x;const q=x.applyToLocalDocumentSet(_,k);return l.documentOverlayCache.saveOverlays(R,x.batchId,q)})}).then(()=>({batchId:E.batchId,changes:Hc(_)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let f=a.qa[a.currentUser.toKey()];f||(f=new et(j)),f=f.insert(c,l),a.qa[a.currentUser.toKey()]=f}(r,i.batchId,e),await nr(r,i.changes),await vi(r.remoteStore)}catch(i){const o=ao(i,"Failed to persist write");e.reject(o)}}async function Cl(n,t){const e=U(n);try{const r=await Ly(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ba.get(o);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?Q(a.Fa):i.removedDocuments.size>0&&(Q(a.Fa),a.Fa=!1))}),await nr(e,r,t)}catch(r){await cn(r)}}function Pu(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.xa.forEach((o,a)=>{const c=a.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=U(a);l.onlineState=c;let f=!1;l.queries.forEach((d,_)=>{for(const E of _.J_)E.ea(c)&&(f=!0)}),f&&uo(l)}(r.eventManager,t),i.length&&r.Ma.R_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Iv(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ba.get(t),o=i&&i.key;if(o){let a=new et(M.comparator);a=a.insert(o,It.newNoDocument(o,F.min()));const c=$().add(o),l=new gi(F.min(),new Map,new et(j),a,c);await Cl(r,l),r.La=r.La.remove(o),r.Ba.delete(t),co(r)}else await Ss(r.localStore,t,!1).then(()=>Ps(r,t,e)).catch(cn)}async function Av(n,t){const e=U(n),r=t.batch.batchId;try{const i=await Oy(e.localStore,t);xl(e,r,null),Pl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await nr(e,i)}catch(i){await cn(i)}}async function Rv(n,t,e){const r=U(n);try{const i=await function(a,c){const l=U(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return l.mutationQueue.lookupMutationBatch(f,c).next(_=>(Q(_!==null),d=_.keys(),l.mutationQueue.removeMutationBatch(f,_))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>l.localDocuments.getDocuments(f,d))})}(r.localStore,t);xl(r,t,e),Pl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await nr(r,i)}catch(i){await cn(i)}}function Pl(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function xl(n,t,e){const r=U(n);let i=r.qa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.qa[r.currentUser.toKey()]=i}}function Ps(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Oa.get(t))n.xa.delete(r),e&&n.Ma.Wa(r,e);n.Oa.delete(t),n.isPrimaryClient&&n.ka.yr(t).forEach(r=>{n.ka.containsKey(r)||Vl(n,r)})}function Vl(n,t){n.Na.delete(t.path.canonicalString());const e=n.La.get(t);e!==null&&(no(n.remoteStore,e),n.La=n.La.remove(t),n.Ba.delete(e),co(n))}function xu(n,t,e){for(const r of e)r instanceof Rl?(n.ka.addReference(r.key,t),bv(n,r)):r instanceof bl?(D("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,t),n.ka.containsKey(r.key)||Vl(n,r.key)):O()}function bv(n,t){const e=t.key,r=e.path.canonicalString();n.La.get(e)||n.Na.has(r)||(D("SyncEngine","New document in limbo: "+e),n.Na.add(r),co(n))}function co(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const t=n.Na.values().next().value;n.Na.delete(t);const e=new M(Z.fromString(t)),r=n.Ka.next();n.Ba.set(r,new mv(e)),n.La=n.La.insert(e,r),gl(n.remoteStore,new se(Bt(Ks(e.path)),r,"TargetPurposeLimboResolution",ui.oe))}}async function nr(n,t,e){const r=U(n),i=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,t,e).then(f=>{var d;if((f||e)&&r.isPrimaryClient){const _=f?!f.fromCache:(d=e==null?void 0:e.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(f){i.push(f);const _=eo.zi(l.targetId,f);o.push(_)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,f){const d=U(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>S.forEach(f,E=>S.forEach(E.Wi,R=>d.persistence.referenceDelegate.addReference(_,E.targetId,R)).next(()=>S.forEach(E.Gi,R=>d.persistence.referenceDelegate.removeReference(_,E.targetId,R)))))}catch(_){if(!ln(_))throw _;D("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of f){const E=_.targetId;if(!_.fromCache){const R=d.us.get(E),P=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(P);d.us=d.us.insert(E,k)}}}(r.localStore,o))}async function Sv(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await fl(e.localStore,t);e.currentUser=t,function(o,a){o.Qa.forEach(c=>{c.forEach(l=>{l.reject(new N(C.CANCELLED,a))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await nr(e,r.Ts)}}function Cv(n,t){const e=U(n),r=e.Ba.get(t);if(r&&r.Fa)return $().add(r.key);{let i=$();const o=e.Oa.get(t);if(!o)return i;for(const a of o){const c=e.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function kl(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Iv.bind(null,t),t.Ma.R_=hv.bind(null,t.eventManager),t.Ma.Wa=fv.bind(null,t.eventManager),t}function Pv(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Av.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rv.bind(null,t),t}class ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_i(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return My(this.persistence,new Dy,t.initialUser,this.serializer)}ja(t){return new hl(to.ei,this.serializer)}za(t){return new qy}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ri.provider={build:()=>new ri};class xv extends ri{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){Q(this.persistence.referenceDelegate instanceof ei);const r=this.persistence.referenceDelegate.garbageCollector;return new yy(r,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new hl(r=>ei.ei(r,e),this.serializer)}}class xs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sv.bind(null,this.syncEngine),await uv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new lv}()}createDatastore(t){const e=_i(t.databaseInfo.databaseId),r=function(o){return new Hy(o)}(t.databaseInfo);return function(o,a,c,l){return new Qy(o,a,c,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,c){return new Yy(r,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Pu(this.syncEngine,e,0),function(){return Au.p()?new Au:new zy}())}createSyncEngine(t,e){return function(i,o,a,c,l,f,d){const _=new gv(i,o,a,c,l,f);return d&&(_.$a=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=U(i);D("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await er(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}xs.provider={build:()=>new xs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Zt("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=Dc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ao(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function rs(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Vu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kv(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ru(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ru(t.remoteStore,i)),n._onlineComponents=t}async function kv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await rs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ze("Error using user provided cache. Falling back to memory cache: "+e),await rs(n,new ri)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await rs(n,new xv(void 0));return n._offlineComponents}async function Nl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Vu(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Vu(n,new xs))),n._onlineComponents}function Dv(n){return Nl(n).then(t=>t.syncEngine)}async function Vs(n){const t=await Nl(n),e=t.eventManager;return e.onListen=_v.bind(null,t.syncEngine),e.onUnlisten=Ev.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=yv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=wv.bind(null,t.syncEngine),e}function Nv(n,t,e={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,f){const d=new Dl({next:E=>{d.eu(),a.enqueueAndForget(()=>Il(o,_)),E.fromCache&&l.source==="server"?f.reject(new N(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(E)},error:E=>f.reject(E)}),_=new Al(c,d,{includeMetadataChanges:!0,ua:!0});return Tl(o,_)}(await Vs(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,t,e){if(!e)throw new N(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Mv(n,t,e,r){if(t===!0&&r===!0)throw new N(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Du(n){if(!M.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nu(n){if(M.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function qt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=lo(n);throw new N(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ml((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ei{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kg;switch(r.type){case"firstParty":return new Yg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ku.get(e);r&&(D("ComponentProvider","Removing Datastore"),ku.delete(e),r.terminate())}(this),Promise.resolve()}}function Ov(n,t,e,r={}){var i;const o=(n=qt(n,Ei))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Tt.MOCK_USER;else{c=bm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Tt(f)}n._authCredentials=new Wg(new kc(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new rr(this.firestore,t,this._query)}}class Vt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ce(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Vt(this.firestore,t,this._key)}}class ce extends rr{constructor(t,e,r){super(t,e,Ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Vt(this.firestore,null,new M(t))}withConverter(t){return new ce(this.firestore,t,this._path)}}function Lv(n,t,...e){if(n=Yt(n),Ol("collection","path",t),n instanceof Ei){const r=Z.fromString(t,...e);return Nu(r),new ce(n,null,r)}{if(!(n instanceof Vt||n instanceof ce))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Nu(r),new ce(n.firestore,null,r)}}function Ll(n,t,...e){if(n=Yt(n),arguments.length===1&&(t=Dc.newId()),Ol("doc","path",t),n instanceof Ei){const r=Z.fromString(t,...e);return Du(r),new Vt(n,null,new M(r))}{if(!(n instanceof Vt||n instanceof ce))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Du(r),new Vt(n.firestore,n instanceof ce?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new pl(this,"async_queue_retry"),this.fu=()=>{const r=ns();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const e=ns();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=ns();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new ue;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!ln(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Zt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=e,e}enqueueAfterDelay(t,e,r){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=oo.createAndSchedule(this,t,e,r,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function Lu(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class ke extends Ei{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ou,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ou(t),this._firestoreClient=void 0,await t}}}function Fv(n,t){const e=typeof n=="object"?n:Mg(),r=typeof n=="string"?n:"(default)",i=Vg(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Am("firestore");o&&Ov(i,...o)}return i}function ho(n){if(n._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Uv(n),n._firestoreClient}function Uv(n){var t,e,r;const i=n._freezeSettings(),o=function(c,l,f,d){return new f_(c,l,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ml(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Vv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(gt.fromBase64String(t))}catch(e){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new on(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=/^__.*__$/;class $v{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Zn(t,this.data,e,this.fieldTransforms)}}class Fl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ge(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ul(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class go{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new go(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Lu(t),i}Bu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return ii(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(Ul(this.Mu)&&Bv.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class qv{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||_i(t)}$u(t,e,r,i=!1){return new go({Mu:t,methodName:e,Ku:r,path:mt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bl(n){const t=n._freezeSettings(),e=_i(n._databaseId);return new qv(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zv(n,t,e,r,i,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,t,e,i);_o("Data must be an object, but it was:",a,r);const c=$l(r,a);let l,f;if(o.merge)l=new xt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const d=[];for(const _ of o.mergeFields){const E=ks(t,_,e);if(!a.contains(E))throw new N(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);zl(d,E)||d.push(E)}l=new xt(d),f=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,f=a.fieldTransforms;return new $v(new St(c),l,f)}class Ti extends fo{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ti}}function jv(n,t,e,r){const i=n.$u(1,t,e);_o("Data must be an object, but it was:",i,r);const o=[],a=St.empty();me(r,(l,f)=>{const d=yo(t,l,e);f=Yt(f);const _=i.Bu(d);if(f instanceof Ti)o.push(d);else{const E=Ii(f,_);E!=null&&(o.push(d),a.set(d,E))}});const c=new xt(o);return new Fl(a,c,i.fieldTransforms)}function Gv(n,t,e,r,i,o){const a=n.$u(1,t,e),c=[ks(t,r,e)],l=[i];if(o.length%2!=0)throw new N(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)c.push(ks(t,o[E])),l.push(o[E+1]);const f=[],d=St.empty();for(let E=c.length-1;E>=0;--E)if(!zl(f,c[E])){const R=c[E];let P=l[E];P=Yt(P);const k=a.Bu(R);if(P instanceof Ti)f.push(R);else{const x=Ii(P,k);x!=null&&(f.push(R),d.set(R,x))}}const _=new xt(f);return new Fl(d,_,a.fieldTransforms)}function Ii(n,t){if(ql(n=Yt(n)))return _o("Unsupported field value:",t,n),$l(n,t);if(n instanceof fo)return function(r,i){if(!Ul(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let l=Ii(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return M_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=lt.fromDate(r);return{timestampValue:ti(i.serializer,o)}}if(r instanceof lt){const o=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ti(i.serializer,o)}}if(r instanceof po)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:il(i.serializer,r._byteString)};if(r instanceof Vt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Js(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Ws(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${lo(r)}`)}(n,t)}function $l(n,t){const e={};return Nc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,(r,i)=>{const o=Ii(i,t.Ou(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ql(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof lt||n instanceof po||n instanceof on||n instanceof Vt||n instanceof fo||n instanceof mo)}function _o(n,t,e){if(!ql(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=lo(e);throw r==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+r)}}function ks(n,t,e){if((t=Yt(t))instanceof wi)return t._internalPath;if(typeof t=="string")return yo(n,t);throw ii("Field path arguments must be of type string or ",n,!1,void 0,e)}const Hv=new RegExp("[~\\*/\\[\\]]");function yo(n,t,e){if(t.search(Hv)>=0)throw ii(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new wi(...t.split("."))._internalPath}catch{throw ii(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ii(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new N(C.INVALID_ARGUMENT,c+n+l)}function zl(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Kv extends jl{data(){return super.data()}}function Gl(n,t){return typeof t=="string"?yo(n,t):t instanceof wi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wv{convertValue(t,e="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return me(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ot(a.doubleValue));return new mo(o)}convertGeoPoint(t){return new po(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=li(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){const e=he(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);Q(ll(r));const i=new Kn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Zt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kl extends jl{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Gl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ur extends Kl{data(t={}){return super.data(t)}}class Wl{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ur(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new Ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Nn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const l=new Ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Nn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Xv(c.type),doc:l,oldIndex:f,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class vo extends Wv{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Vt(this.firestore,null,e)}}function Yv(n){n=qt(n,rr);const t=qt(n.firestore,ke),e=ho(t),r=new vo(t);return Hl(n._query),Nv(e,n._query).then(i=>new Wl(t,r,n,i))}function Jv(n,t,e,...r){n=qt(n,Vt);const i=qt(n.firestore,ke),o=Bl(i);let a;return a=typeof(t=Yt(t))=="string"||t instanceof wi?Gv(o,"updateDoc",n._key,t,e,r):jv(o,"updateDoc",n._key,t),Eo(i,[a.toMutation(n._key,Ot.exists(!0))])}function Zv(n){return Eo(qt(n.firestore,ke),[new Qs(n._key,Ot.none())])}function t0(n,t){const e=qt(n.firestore,ke),r=Ll(n),i=Qv(n.converter,t);return Eo(e,[zv(Bl(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function e0(n,...t){var e,r,i;n=Yt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Lu(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Lu(t[a])){const _=t[a];t[a]=(e=_.next)===null||e===void 0?void 0:e.bind(_),t[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),t[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let l,f,d;if(n instanceof Vt)f=qt(n.firestore,ke),d=Ks(n._key.path),l={next:_=>{t[a]&&t[a](n0(f,n,_))},error:t[a+1],complete:t[a+2]};else{const _=qt(n,rr);f=qt(_.firestore,ke),d=_._query;const E=new vo(f);l={next:R=>{t[a]&&t[a](new Wl(f,E,_,R))},error:t[a+1],complete:t[a+2]},Hl(n._query)}return function(E,R,P,k){const x=new Dl(k),q=new Al(R,x,P);return E.asyncQueue.enqueueAndForget(async()=>Tl(await Vs(E),q)),()=>{x.eu(),E.asyncQueue.enqueueAndForget(async()=>Il(await Vs(E),q))}}(ho(f),d,c,l)}function Eo(n,t){return function(r,i){const o=new ue;return r.asyncQueue.enqueueAndForget(async()=>Tv(await Dv(r),i,o)),o.promise}(ho(n),t)}function n0(n,t,e){const r=e.docs.get(t._key),i=new vo(n);return new Kl(n,i,t._key,r,new Nn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){un=i})(Ng),Wr(new zn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new ke(new Qg(r.getProvider("auth-internal")),new Zg(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(f.options.projectId,d)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Qe(Za,"4.7.5",t),Qe(Za,"4.7.5","esm2017")})();const r0=["asshole","bastard","bitch","bollocks","bullshit","cunt","damn","dick","douche","fag","faggot","fuck","fucking","motherfucker","nigga","nigger","piss","prick","shit","slut","whore","wanker","bimbo","cock","cum","dickhead","dildo","dyke","fucked","goddamn","hell","jerk","knob","moron","pussy","retard","shag","skank","spaz","tits","twat","vagina","bastards","fuckface","scumbag","fucker","arse","bugger","crap","shithead","shitface","asswipe","jackass","dumbass","fuckboy","fucktard","asshat","clit","fisting","goddammit","assclown","cocksucker","cumdumpster","motherfucking","asslicker","bastarding","bitches","bitchy","cockhead","dickwad","dickweed","doggy style","horny","mofo","nutjob","piss off","shitstorm","wank","whorehouse","arsehole","tosser","screw","bitchslap","bastardly","dickless","fucked up","goddamned","jackshit","shithole","shitload","sluts","scum","anjing","bajingan","bangsat","brengsek","goblok","tolol","bego","bodoh","memek","kontol","ngentot","perek","babi","kampret","setan","tai","pepek","pukimak","idiot","monyet","iblis","sialan","laknat","jahanam","kurang ajar","keparat","pecundang","jancuk","lonte","pelacur","bencong","waria","ngewe","pantek","asu","puki","coli","bangke","banci","kntl","gblk","tmn","pntk","kampang","gembel","tempik","jembut","tetek","pler","kimak","titit","koplak","dodok","kencot","pantat","burit","blangsat","congor","jembel","culun","budek","puki mak","asu tenan","mbedhes","mbedhesmu","sundal","betina liar","maling","copet","cuki","peler","penis","gatel","pengecut","sarap","tongong","kedul","beruk","mampos","mati lo","tai anjing","berak","eek","telek","pantesan","lonthe","ngehek","bajigur","najis","bejat","kacuk","embel","omdo","cepu","modar","ndasmu","ndas lo","taplok","plir","ngaceng","toel","genjot","embuh","silit","cawet","kerad","nista","lesbi","homo","bokep","masturbasi","selangkangan","ewe","ngocok","mancungin","niple","parasit","penjilat"],i0={badWords:r0};var s0=Uu('<div class="form-container svelte-uxt6ca"><input type="text" placeholder="Enter word" maxlength="30" style="border: 1px solid #d3d3d3;"> <button style="background: rgba(0, 0, 0, 0.5); color: white;  border-radius: 5px; padding: 5px 10px; cursor: pointer;">Add</button></div> <div id="wordcloud" class="svelte-uxt6ca"></div>',1);function o0(n,t){Ph(t,!1);const r=Ic({apiKey:"AIzaSyCZYHA7hki0cn2BWxks22djlka-w-szNsU",authDomain:"wordcloud-pajero.firebaseapp.com",projectId:"wordcloud-pajero",storageBucket:"wordcloud-pajero.firebasestorage.app",messagingSenderId:"1027865305131",appId:"1:1027865305131:web:f9f4c01566b6c25b940a6e"}),i=Fv(r),o=Lv(i,"words");let a=Fh([]),c=Nh(""),l=30,f,d=new Map,_,E,R;const P=pc(um);function k(){R=setTimeout(()=>{q()},3e3)}function x(){clearTimeout(R)}async function q(){try{(await Yv(o)).forEach(async T=>{await Zv(T.ref)}),a.set([]),d.clear(),_t([])}catch(v){console.error("Error clearing words: ",v)}}async function B(){if(Er(c).trim()===""||Er(c).length>30)return;const v=Er(c).toLowerCase();if(i0.badWords.includes(v)){new Audio("/sounds/sorry-words-not-allowed.mp3").play(),Gi(c,"");return}let T=null,m=0;if(a.update(X=>{const L=X.findIndex(z=>z.text===v);if(L!==-1)T=X[L].id,m=X[L].size+parseInt(l),X[L].size=m;else{const z={text:v,size:parseInt(l),x:(Math.random()-.5)*100,y:(Math.random()-.5)*100};X.push(z)}return X}),T)try{await Jv(Ll(i,"words",T),{size:m})}catch(X){console.error("Error updating document: ",X)}else{const X={text:v,size:parseInt(l),x:(Math.random()-.5)*100,y:(Math.random()-.5)*100};try{await t0(o,X)}catch(L){console.error("Error adding document: ",L)}}Gi(c,""),l=parseInt(l)}Lh(()=>{_=window.innerWidth,E=window.innerHeight,f=Ra("#wordcloud").append("svg").attr("width",_).attr("height",E).append("g").attr("transform",`translate(${_/2}, ${E/2})`),e0(o,v=>{const T=[];v.forEach(m=>{const X=m.data();T.push({...X,id:m.id})}),T.forEach(m=>{d.has(m.text)||d.set(m.text,{x:m.x,y:m.y})}),a.set(T),_t(T)}),a.subscribe(v=>{v.length>0&&_t(v)})});function G(v,T){return!(v.right+10<T.left||v.left-10>T.right||v.bottom+10<T.top||v.top-10>T.bottom)}function tt(v,T,m){const X=T/2,L=m/2,z=20,nt=_/2-X-z,it=-_/2+X+z,Ht=E/2-L-z,_e=-E/2+L+z;return{x:Math.min(Math.max(v.x,it),nt),y:Math.min(Math.max(v.y,_e),Ht)}}function _t(v){v.map(L=>{const z=d.get(L.text);return{...L,x:z?z.x:L.x||0,y:z?z.y:L.y||0}});const T=new Map;v.forEach(L=>{const z=f.append("text").style("font-size",`${L.size}px`).style("font-family","Impact").text(L.text),nt=z.node().getBBox();z.remove(),T.set(L.text,nt)});for(let L=0;L<v.length;(L+=1)-1){const z=v[L],nt=T.get(z.text);let it=d.get(z.text)||{x:z.x,y:z.y},Ht=!0,_e=0;const Ai=100;for(;Ht&&_e<Ai;){Ht=!1,_e+=1;const Ft={left:it.x-nt.width/2,right:it.x+nt.width/2,top:it.y-nt.height/2,bottom:it.y+nt.height/2};for(let st=0;st<v.length;(st+=1)-1)if(L!==st){const ye=v[st],Dt=d.get(ye.text)||{x:ye.x,y:ye.y},Me=T.get(ye.text),Oe={left:Dt.x-Me.width/2,right:Dt.x+Me.width/2,top:Dt.y-Me.height/2,bottom:Dt.y+Me.height/2};if(G(Ft,Oe)){const Le=it.x-Dt.x,Fe=it.y-Dt.y,ve=5;if(Le===0&&Fe===0)it.x+=(Math.random()-.5)*ve,it.y+=(Math.random()-.5)*ve;else{const Ee=Math.sqrt(Le*Le+Fe*Fe),fn=Le/Ee,dn=Fe/Ee,Ue=Math.max(z.size,ye.size)/2;it.x+=fn*Ue,it.y+=dn*Ue}it=tt(it,nt.width,nt.height),Ht=!0}}}d.set(z.text,it)}const m=f.selectAll("text").data(v,L=>L.text);m.exit().remove();const X=m.enter().append("text").style("font-size",L=>`${L.size}px`).style("fill",L=>P(L.text)).style("font-family","Impact").attr("text-anchor","middle").attr("transform",L=>{const z=d.get(L.text);return`translate(${z.x}, ${z.y})`}).text(L=>L.text).on("end",function(L){Ra(this).transition().duration(500).attr("transform",z=>{const nt=d.get(z.text);return`translate(${nt.x}, ${nt.y}) scale(1.2)`}).transition().duration(500).attr("transform",z=>{const nt=d.get(z.text);return`translate(${nt.x}, ${nt.y}) scale(1)`})});m.merge(X).transition().duration(750).style("font-size",L=>`${L.size}px`).attr("transform",L=>{const z=d.get(L.text);return`translate(${z.x}, ${z.y})`}).style("fill",L=>P(L.text))}function ut(v){v.key==="Enter"&&B()}Ah();var I=s0(),g=xh(I),y=Bu(g);Uh(y);var w=kh(y,2);$u(g),Dh(2),Bh(y,()=>Er(c),v=>Gi(c,v)),wr("keypress",y,ut),wr("click",w,B),wr("mousedown",w,k),wr("mouseup",w,x),Fu(n,I),Vh()}var a0=Uu("<main><!></main>");function _0(n){var t=a0(),e=Bu(t);o0(e,{}),$u(t),Fu(n,t)}export{_0 as component};
