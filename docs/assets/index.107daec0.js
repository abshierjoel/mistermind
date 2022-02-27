var ft=Object.defineProperty,ct=Object.defineProperties;var $t=Object.getOwnPropertyDescriptors;var fn=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var cn=(r,n,t)=>n in r?ft(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,$n=(r,n)=>{for(var t in n||(n={}))vt.call(n,t)&&cn(r,t,n[t]);if(fn)for(var t of fn(n))lt.call(n,t)&&cn(r,t,n[t]);return r},vn=(r,n)=>ct(r,$t(n));import{j as Wr,r as mr,R as st,a as _t}from"./vendor.18225fc7.js";const mt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function t(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerpolicy&&(a.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?a.credentials="include":u.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(u){if(u.ep)return;u.ep=!0;const a=t(u);fetch(u.href,a)}};mt();const q=Wr.exports.jsx,hr=Wr.exports.jsxs,Ln=Wr.exports.Fragment,ht=({ports:r})=>{const[n,t]=mr.exports.useState(!1),[e,u]=mr.exports.useState([]),[a,i]=mr.exports.useState(gt()),o=r.addTurn.send;r.sendTurns.subscribe(l=>u(l));const $=l=>{let s=!0;for(let _=0;_<=3;_++)l[_]!=a[_]&&(s=!1);s?t(!0):o(l)};n&&alert("You Won!");const v=e.slice(Math.max(e.length-3,0));return hr("div",{className:"App",children:[q("h1",{children:"Mistermind"}),hr("p",{className:"guesses",children:["Guesses: ",e.length]}),hr("ul",{className:"board",children:[v.map((l,s)=>q(bt,{board:l,answer:a})),q(pt,{makeGuess:$})]})]})},bt=({answer:r,board:n})=>q(Ln,{children:n.map((t,e)=>{const u=t==r[e]?t:"";return q("li",{className:`square ${u}`})})}),pt=({makeGuess:r})=>{const[n,t]=mr.exports.useState([{name:"guess1",color:E.RED},{name:"guess2",color:E.BLUE},{name:"guess3",color:E.GREEN},{name:"guess4",color:E.YELLOW}]),e=a=>{const i=n.map(o=>o.name==a?vn($n({},o),{color:Dt(o.color)}):o);t(i)},u=()=>{const a=n.reduce((i,o)=>[...i,o.color],[]);r(a)};return hr(Ln,{children:[n.map(a=>q("button",{className:`square ${a.color}`,onClick:()=>e(a.name)})),q("button",{onClick:u,className:"make-guess",children:"Make Guess"})]})},gt=()=>[lr(),lr(),lr(),lr()],At=r=>Math.floor(Math.random()*r),lr=()=>{switch(At(3)){case 0:return E.RED;case 1:return E.BLUE;case 2:return E.GREEN;case 3:return E.YELLOW}},E={RED:"red",BLUE:"blue",GREEN:"green",YELLOW:"yellow"},Dt=r=>{switch(r){case E.RED:return E.BLUE;case E.BLUE:return E.GREEN;case E.GREEN:return E.YELLOW;case E.YELLOW:return E.RED}};function z(r,n,t){return t.a=r,t.f=n,t}function f(r){return z(2,r,function(n){return function(t){return r(n,t)}})}function h(r){return z(3,r,function(n){return function(t){return function(e){return r(n,t,e)}}})}function M(r){return z(4,r,function(n){return function(t){return function(e){return function(u){return r(n,t,e,u)}}}})}function fr(r){return z(5,r,function(n){return function(t){return function(e){return function(u){return function(a){return r(n,t,e,u,a)}}}}})}function wr(r){return z(6,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(i){return r(n,t,e,u,a,i)}}}}}})}function Pn(r){return z(7,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(i){return function(o){return r(n,t,e,u,a,i,o)}}}}}}})}function Vn(r){return z(8,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(i){return function(o){return function($){return r(n,t,e,u,a,i,o,$)}}}}}}}})}function Tn(r){return z(9,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(i){return function(o){return function($){return function(v){return r(n,t,e,u,a,i,o,$,v)}}}}}}}}})}function c(r,n,t){return r.a===2?r.f(n,t):r(n)(t)}function b(r,n,t,e){return r.a===3?r.f(n,t,e):r(n)(t)(e)}function O(r,n,t,e,u){return r.a===4?r.f(n,t,e,u):r(n)(t)(e)(u)}function or(r,n,t,e,u,a){return r.a===5?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function Or(r,n,t,e,u,a,i){return r.a===6?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}function wt(r,n,t,e,u,a,i,o){return r.a===7?r.f(n,t,e,u,a,i,o):r(n)(t)(e)(u)(a)(i)(o)}function Et(r,n,t,e,u,a,i,o,$){return r.a===8?r.f(n,t,e,u,a,i,o,$):r(n)(t)(e)(u)(a)(i)(o)($)}function Cn(r,n){for(var t,e=[],u=dr(r,n,0,e);u&&(t=e.pop());u=dr(t.a,t.b,0,e));return u}function dr(r,n,t,e){if(r===n)return!0;if(typeof r!="object"||r===null||n===null)return typeof r=="function"&&nr(5),!1;if(t>100)return e.push(G(r,n)),!0;r.$<0&&(r=Dn(r),n=Dn(n));for(var u in r)if(!dr(r[u],n[u],t+1,e))return!1;return!0}f(Cn);f(function(r,n){return!Cn(r,n)});function L(r,n,t){if(typeof r!="object")return r===n?0:r<n?-1:1;if(typeof r.$=="undefined")return(t=L(r.a,n.a))||(t=L(r.b,n.b))?t:L(r.c,n.c);for(;r.b&&n.b&&!(t=L(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}f(function(r,n){return L(r,n)<0});f(function(r,n){return L(r,n)<1});f(function(r,n){return L(r,n)>0});f(function(r,n){return L(r,n)>=0});f(function(r,n){var t=L(r,n);return t<0?Qn:t?ke:zn});var rr=0;function G(r,n){return{a:r,b:n}}function St(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}f(jt);function jt(r,n){if(typeof r=="string")return r+n;if(!r.b)return n;var t=d(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=d(r.a,n);return t}var g={$:0};function d(r,n){return{$:1,a:r,b:n}}var Jt=f(d);function H(r){for(var n=g,t=r.length;t--;)n=d(r[t],n);return n}function Yr(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}var Bt=h(function(r,n,t){for(var e=[];n.b&&t.b;n=n.b,t=t.b)e.push(c(r,n.a,t.a));return H(e)});M(function(r,n,t,e){for(var u=[];n.b&&t.b&&e.b;n=n.b,t=t.b,e=e.b)u.push(b(r,n.a,t.a,e.a));return H(u)});fr(function(r,n,t,e,u){for(var a=[];n.b&&t.b&&e.b&&u.b;n=n.b,t=t.b,e=e.b,u=u.b)a.push(O(r,n.a,t.a,e.a,u.a));return H(a)});wr(function(r,n,t,e,u,a){for(var i=[];n.b&&t.b&&e.b&&u.b&&a.b;n=n.b,t=t.b,e=e.b,u=u.b,a=a.b)i.push(or(r,n.a,t.a,e.a,u.a,a.a));return H(i)});f(function(r,n){return H(Yr(n).sort(function(t,e){return L(r(t),r(e))}))});f(function(r,n){return H(Yr(n).sort(function(t,e){var u=c(r,t,e);return u===zn?0:u===Qn?-1:1}))});var Ft=[];function Lt(r){return r.length}var Pt=h(function(r,n,t){for(var e=new Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),Vt=f(function(r,n){for(var t=new Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,G(t,n)});f(function(r,n){return n[r]});h(function(r,n,t){for(var e=t.length,u=new Array(e),a=0;a<e;a++)u[a]=t[a];return u[r]=n,u});f(function(r,n){for(var t=n.length,e=new Array(t+1),u=0;u<t;u++)e[u]=n[u];return e[t]=r,e});h(function(r,n,t){for(var e=t.length,u=0;u<e;u++)n=c(r,t[u],n);return n});var Tt=h(function(r,n,t){for(var e=t.length-1;e>=0;e--)n=c(r,t[e],n);return n});f(function(r,n){for(var t=n.length,e=new Array(t),u=0;u<t;u++)e[u]=r(n[u]);return e});h(function(r,n,t){for(var e=t.length,u=new Array(e),a=0;a<e;a++)u[a]=c(r,n+a,t[a]);return u});h(function(r,n,t){return t.slice(r,n)});h(function(r,n,t){var e=n.length,u=r-e;u>t.length&&(u=t.length);for(var a=e+u,i=new Array(a),o=0;o<e;o++)i[o]=n[o];for(var o=0;o<u;o++)i[o+e]=t[o];return i});f(function(r,n){return n});f(function(r,n){return console.log(r+": "+Ct()),n});function Ct(r){return"<internals>"}function nr(r){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}f(function(r,n){return r+n});f(function(r,n){return r-n});f(function(r,n){return r*n});f(function(r,n){return r/n});f(function(r,n){return r/n|0});f(Math.pow);f(function(r,n){return n%r});f(function(r,n){var t=n%r;return r===0?nr(11):t>0&&r<0||t<0&&r>0?t+r:t});f(Math.atan2);var Ot=Math.ceil,dt=Math.floor,ln=Math.log;f(function(r,n){return r&&n});f(function(r,n){return r||n});f(function(r,n){return r!==n});f(function(r,n){return r+n});function Mt(r){var n=r.charCodeAt(0);return isNaN(n)?J:y(55296<=n&&n<=56319?G(r[0]+r[1],r.slice(2)):G(r[0],r.slice(1)))}f(function(r,n){return r+n});function Rt(r){return r.length}f(function(r,n){for(var t=n.length,e=new Array(t),u=0;u<t;){var a=n.charCodeAt(u);if(55296<=a&&a<=56319){e[u]=r(n[u]+n[u+1]),u+=2;continue}e[u]=r(n[u]),u++}return e.join("")});f(function(r,n){for(var t=[],e=n.length,u=0;u<e;){var a=n[u],i=n.charCodeAt(u);u++,55296<=i&&i<=56319&&(a+=n[u],u++),r(a)&&t.push(a)}return t.join("")});h(function(r,n,t){for(var e=t.length,u=0;u<e;){var a=t[u],i=t.charCodeAt(u);u++,55296<=i&&i<=56319&&(a+=t[u],u++),n=c(r,a,n)}return n});h(function(r,n,t){for(var e=t.length;e--;){var u=t[e],a=t.charCodeAt(e);56320<=a&&a<=57343&&(e--,u=t[e]+u),n=c(r,u,n)}return n});var qt=f(function(r,n){return n.split(r)}),Ut=f(function(r,n){return n.join(r)}),Gt=h(function(r,n,t){return t.slice(r,n)});f(function(r,n){for(var t=n.length;t--;){var e=n[t],u=n.charCodeAt(t);if(56320<=u&&u<=57343&&(t--,e=n[t]+e),r(e))return!0}return!1});var Ht=f(function(r,n){for(var t=n.length;t--;){var e=n[t],u=n.charCodeAt(t);if(56320<=u&&u<=57343&&(t--,e=n[t]+e),!r(e))return!1}return!0}),Wt=f(function(r,n){return n.indexOf(r)>-1});f(function(r,n){return n.indexOf(r)===0});f(function(r,n){return n.length>=r.length&&n.lastIndexOf(r)===n.length-r.length});var Yt=f(function(r,n){var t=r.length;if(t<1)return g;for(var e=0,u=[];(e=n.indexOf(r,e))>-1;)u.push(e),e=e+t;return H(u)});function It(r){return r+""}function zt(r){for(var n=0,t=r.charCodeAt(0),e=t==43||t==45?1:0,u=e;u<r.length;++u){var a=r.charCodeAt(u);if(a<48||57<a)return J;n=10*n+a-48}return u==e?J:y(t==45?-n:n)}function Qt(r){var n=r.charCodeAt(0);return 55296<=n&&n<=56319?(n-55296)*1024+r.charCodeAt(1)-56320+65536:n}function Xt(r){return{$:0,a:r}}function Zt(r){return{$:2,b:r}}var kt=Zt(function(r){return typeof r=="string"?k(r):r instanceof String?k(r+""):W("a STRING",r)});function Kt(r){return{$:3,b:r}}f(function(r,n){return{$:6,d:r,b:n}});f(function(r,n){return{$:7,e:r,b:n}});function Q(r,n){return{$:9,f:r,g:n}}f(function(r,n){return{$:10,b:n,h:r}});var yt=f(function(r,n){return Q(r,[n])}),Nt=h(function(r,n,t){return Q(r,[n,t])});M(function(r,n,t,e){return Q(r,[n,t,e])});fr(function(r,n,t,e,u){return Q(r,[n,t,e,u])});wr(function(r,n,t,e,u,a){return Q(r,[n,t,e,u,a])});Pn(function(r,n,t,e,u,a,i){return Q(r,[n,t,e,u,a,i])});Vn(function(r,n,t,e,u,a,i,o){return Q(r,[n,t,e,u,a,i,o])});Tn(function(r,n,t,e,u,a,i,o,$){return Q(r,[n,t,e,u,a,i,o,$])});f(function(r,n){try{var t=JSON.parse(n);return F(r,t)}catch(e){return Y(c(xr,"This is not valid JSON! "+e.message,n))}});var On=f(function(r,n){return F(r,n)});function F(r,n){switch(r.$){case 2:return r.b(n);case 5:return n===null?k(r.c):W("null",n);case 3:return sr(n)?sn(r.b,n,H):W("a LIST",n);case 4:return sr(n)?sn(r.b,n,xt):W("an ARRAY",n);case 6:var t=r.d;if(typeof n!="object"||n===null||!(t in n))return W("an OBJECT with a field named `"+t+"`",n);var v=F(r.b,n[t]);return P(v)?v:Y(c(wn,t,v.a));case 7:var e=r.e;if(!sr(n))return W("an ARRAY",n);if(e>=n.length)return W("a LONGER array. Need index "+e+" but only see "+n.length+" entries",n);var v=F(r.b,n[e]);return P(v)?v:Y(c(Zn,e,v.a));case 8:if(typeof n!="object"||n===null||sr(n))return W("an OBJECT",n);var u=g;for(var a in n)if(n.hasOwnProperty(a)){var v=F(r.b,n[a]);if(!P(v))return Y(c(wn,a,v.a));u=d(G(a,v.a),u)}return k(U(u));case 9:for(var i=r.f,o=r.g,$=0;$<o.length;$++){var v=F(o[$],n);if(!P(v))return v;i=i(v.a)}return k(i);case 10:var v=F(r.b,n);return P(v)?F(r.h(v.a),n):v;case 11:for(var l=g,s=r.g;s.b;s=s.b){var v=F(s.a,n);if(P(v))return v;l=d(v.a,l)}return Y(Ke(U(l)));case 1:return Y(c(xr,r.a,n));case 0:return k(r.a)}}function sn(r,n,t){for(var e=n.length,u=new Array(e),a=0;a<e;a++){var i=F(r,n[a]);if(!P(i))return Y(c(Zn,a,i.a));u[a]=i.a}return k(t(u))}function sr(r){return Array.isArray(r)||typeof FileList!="undefined"&&r instanceof FileList}function xt(r){return c(Au,r.length,function(n){return r[n]})}function W(r,n){return Y(c(xr,"Expecting "+r,n))}function x(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 2:return r.b===n.b;case 5:return r.c===n.c;case 3:case 4:case 8:return x(r.b,n.b);case 6:return r.d===n.d&&x(r.b,n.b);case 7:return r.e===n.e&&x(r.b,n.b);case 9:return r.f===n.f&&_n(r.g,n.g);case 10:return r.h===n.h&&x(r.b,n.b);case 11:return _n(r.g,n.g)}}function _n(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!x(r[e],n[e]))return!1;return!0}var re=f(function(r,n){return JSON.stringify(n,null,r)+""});function ne(r){return r}function te(){return[]}h(function(r,n,t){return t[r]=n,t});function ee(r){return f(function(n,t){return t.push(r(n)),t})}function X(r){return{$:0,a:r}}function ue(r){return{$:1,a:r}}function R(r){return{$:2,b:r,c:null}}var Mr=f(function(r,n){return{$:3,b:r,d:n}});f(function(r,n){return{$:4,b:r,d:n}});function ae(r){return{$:5,b:r}}var ie=0;function Ir(r){var n={$:0,e:ie++,f:r,g:null,h:[]};return zr(n),n}function dn(r){return R(function(n){n(X(Ir(r)))})}function Mn(r,n){r.h.push(n),zr(r)}var oe=f(function(r,n){return R(function(t){Mn(r,n),t(X(rr))})}),Tr=!1,mn=[];function zr(r){if(mn.push(r),!Tr){for(Tr=!0;r=mn.shift();)fe(r);Tr=!1}}function fe(r){for(;r.f;){var n=r.f.$;if(n===0||n===1){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else if(n===2){r.f.c=r.f.b(function(t){r.f=t,zr(r)});return}else if(n===5){if(r.h.length===0)return;r.f=r.f.b(r.h.shift())}else r.g={$:n===3?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}function ce(r){return R(function(n){var t=setTimeout(function(){n(X(rr))},r);return function(){clearTimeout(t)}})}M(function(r,n,t,e){return Qr(n,e,r.au,r.aC,r.aA,function(){return function(){}})});function Qr(r,n,t,e,u,a){var i=c(On,r,n?n.flags:void 0);P(i)||nr(2);var o={},$=t(i.a),v=$.a,l=a(_,v),s=$e(o,_);function _(m,p){var A=c(e,m,v);l(v=A.a,p),bn(o,A.b,u(v))}return bn(o,$.b,u(v)),s?{ports:s}:{}}var j={};function $e(r,n){var t;for(var e in j){var u=j[e];u.a&&(t=t||{},t[e]=u.a(e,n)),r[e]=le(u,n)}return t}function ve(r,n,t,e,u){return{b:r,c:n,d:t,e,f:u}}function le(r,n){var t={g:n,h:void 0},e=r.c,u=r.d,a=r.e,i=r.f;function o($){return c(Mr,o,ae(function(v){var l=v.a;return v.$===0?b(u,t,l,$):a&&i?O(e,t,l.i,l.j,$):b(e,t,a?l.i:l.j,$)}))}return t.h=Ir(c(Mr,o,r.b))}var se=f(function(r,n){return R(function(t){r.g(n),t(X(rr))})});f(function(r,n){return c(oe,r.h,{$:0,a:n})});function Xr(r){return function(n){return{$:1,k:r,l:n}}}function _e(r){return{$:2,m:r}}f(function(r,n){return{$:3,n:r,o:n}});var hn=[],Cr=!1;function bn(r,n,t){if(hn.push({p:r,q:n,r:t}),!Cr){Cr=!0;for(var e;e=hn.shift();)me(e.p,e.q,e.r);Cr=!1}}function me(r,n,t){var e={};br(!0,n,e,null),br(!1,t,e,null);for(var u in r)Mn(r[u],{$:"fx",a:e[u]||{i:g,j:g}})}function br(r,n,t,e){switch(n.$){case 1:var u=n.k,a=he(r,u,e,n.l);t[u]=be(r,a,t[u]);return;case 2:for(var i=n.m;i.b;i=i.b)br(r,i.a,t,e);return;case 3:br(r,n.o,t,{s:n.n,t:e});return}}function he(r,n,t,e){function u(i){for(var o=t;o;o=o.t)i=o.s(i);return i}var a=r?j[n].e:j[n].f;return c(a,u,e)}function be(r,n,t){return t=t||{i:g,j:g},r?t.i=d(n,t.i):t.j=d(n,t.j),t}function Rn(r){j[r]&&nr(3)}function pe(r,n){return Rn(r),j[r]={e:ge,u:n,a:Ae},Xr(r)}var ge=f(function(r,n){return n});function Ae(r){var n=[],t=j[r].u,e=ce(0);j[r].b=e,j[r].c=h(function(i,o,$){for(;o.b;o=o.b)for(var v=n,l=t(o.a),s=0;s<v.length;s++)v[s](l);return e});function u(i){n.push(i)}function a(i){n=n.slice();var o=n.indexOf(i);o>=0&&n.splice(o,1)}return{subscribe:u,unsubscribe:a}}function De(r,n){return Rn(r),j[r]={f:we,u:n,a:Ee},Xr(r)}var we=f(function(r,n){return function(t){return r(n(t))}});function Ee(r,n){var t=g,e=j[r].u,u=X(null);j[r].b=u,j[r].c=h(function(i,o,$){return t=o,u});function a(i){var o=c(On,e,i);P(o)||nr(4,r,o.a);for(var $=o.a,v=t;v.b;v=v.b)n(v.a($))}return{send:a}}var pr,K=typeof document!="undefined"?document:{};function Zr(r,n){r.appendChild(n)}M(function(r,n,t,e){var u=e.node;return u.parentNode.replaceChild(I(r,function(){}),u),{}});function pn(r){return{$:0,a:r}}var Se=f(function(r,n){return f(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b||0,u.push(i)}return a+=u.length,{$:1,c:n,d:qn(t),e:u,f:r,b:a}})}),kr=Se(void 0),je=f(function(r,n){return f(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b.b||0,u.push(i)}return a+=u.length,{$:2,c:n,d:qn(t),e:u,f:r,b:a}})});je(void 0);f(function(r,n){return{$:4,j:r,k:n,b:1+(n.b||0)}});function Z(r,n){return{$:5,l:r,m:n,k:void 0}}f(function(r,n){return Z([r,n],function(){return r(n)})});h(function(r,n,t){return Z([r,n,t],function(){return c(r,n,t)})});M(function(r,n,t,e){return Z([r,n,t,e],function(){return b(r,n,t,e)})});fr(function(r,n,t,e,u){return Z([r,n,t,e,u],function(){return O(r,n,t,e,u)})});wr(function(r,n,t,e,u,a){return Z([r,n,t,e,u,a],function(){return or(r,n,t,e,u,a)})});Pn(function(r,n,t,e,u,a,i){return Z([r,n,t,e,u,a,i],function(){return Or(r,n,t,e,u,a,i)})});Vn(function(r,n,t,e,u,a,i,o){return Z([r,n,t,e,u,a,i,o],function(){return wt(r,n,t,e,u,a,i,o)})});Tn(function(r,n,t,e,u,a,i,o,$){return Z([r,n,t,e,u,a,i,o,$],function(){return Et(r,n,t,e,u,a,i,o,$)})});var Je=f(function(r,n){return{$:"a0",n:r,o:n}});f(function(r,n){return{$:"a1",n:r,o:n}});f(function(r,n){return{$:"a2",n:r,o:n}});var Be=f(function(r,n){return{$:"a3",n:r,o:n}});h(function(r,n,t){return{$:"a4",n,o:{f:r,o:t}}});f(function(r,n){return n.$==="a0"?c(Je,n.n,Fe(r,n.o)):n});function Fe(r,n){var t=nn(n);return{$:n.$,a:t?b(wu,t<3?Le:Pe,et(r),n.a):c(Du,r,n.a)}}var Le=f(function(r,n){return G(r(n.a),n.b)}),Pe=f(function(r,n){return{o:r(n.o),K:n.K,H:n.H}});function qn(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if(e==="a2"){u==="className"?gn(n,u,a):n[u]=a;continue}var i=n[e]||(n[e]={});e==="a3"&&u==="class"?gn(i,u,a):i[u]=a}return n}function gn(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function I(r,n){var t=r.$;if(t===5)return I(r.k||(r.k=r.m()),n);if(t===0)return K.createTextNode(r.a);if(t===4){for(var e=r.k,u=r.j;e.$===4;)typeof u!="object"?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n},i=I(e,a);return i.elm_event_node_ref=a,i}if(t===3){var i=r.h(r.g);return Rr(i,n,r.d),i}var i=r.f?K.createElementNS(r.f,r.c):K.createElement(r.c);pr&&r.c=="a"&&i.addEventListener("click",pr(i)),Rr(i,n,r.d);for(var o=r.e,$=0;$<o.length;$++)Zr(i,I(t===1?o[$]:o[$].b,n));return i}function Rr(r,n,t){for(var e in t){var u=t[e];e==="a1"?Ve(r,u):e==="a0"?Oe(r,n,u):e==="a3"?Te(r,u):e==="a4"?Ce(r,u):(e!=="value"&&e!=="checked"||r[e]!==u)&&(r[e]=u)}}function Ve(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function Te(r,n){for(var t in n){var e=n[t];typeof e!="undefined"?r.setAttribute(t,e):r.removeAttribute(t)}}function Ce(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;typeof a!="undefined"?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Oe(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(!a){r.removeEventListener(u,i),e[u]=void 0;continue}if(i){var o=i.q;if(o.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=de(n,a),r.addEventListener(u,i,Kr&&{passive:nn(a)<2}),e[u]=i}}var Kr;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Kr=!0}}))}catch{}function de(r,n){function t(e){var u=t.q,a=F(u.a,e);if(!!P(a)){for(var i=nn(u),o=a.a,$=i?i<3?o.a:o.o:o,v=i==1?o.b:i==3&&o.K,l=(v&&e.stopPropagation(),(i==2?o.b:i==3&&o.H)&&e.preventDefault(),r),s,_;s=l.j;){if(typeof s=="function")$=s($);else for(var _=s.length;_--;)$=s[_]($);l=l.p}l($,v)}}return t.q=n,t}function Me(r,n){return r.$==n.$&&x(r.a,n.a)}function Un(r,n){var t=[];return V(r,n,t,0),t}function S(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function V(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a)if(u===1&&a===2)n=Ie(n),a=1;else{S(t,0,e,n);return}switch(a){case 5:for(var i=r.l,o=n.l,$=i.length,v=$===o.length;v&&$--;)v=i[$]===o[$];if(v){n.k=r.k;return}n.k=n.m();var l=[];V(r.k,n.k,l,0),l.length>0&&S(t,1,e,l);return;case 4:for(var s=r.j,_=n.j,m=!1,p=r.k;p.$===4;)m=!0,typeof s!="object"?s=[s,p.j]:s.push(p.j),p=p.k;for(var A=n.k;A.$===4;)m=!0,typeof _!="object"?_=[_,A.j]:_.push(A.j),A=A.k;if(m&&s.length!==_.length){S(t,0,e,n);return}(m?!Re(s,_):s!==_)&&S(t,2,e,_),V(p,A,t,e+1);return;case 0:r.a!==n.a&&S(t,3,e,n.a);return;case 1:An(r,n,t,e,qe);return;case 2:An(r,n,t,e,Ue);return;case 3:if(r.h!==n.h){S(t,0,e,n);return}var w=yr(r.d,n.d);w&&S(t,4,e,w);var B=n.i(r.g,n.g);B&&S(t,5,e,B);return}}}function Re(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}function An(r,n,t,e,u){if(r.c!==n.c||r.f!==n.f){S(t,0,e,n);return}var a=yr(r.d,n.d);a&&S(t,4,e,a),u(r,n,t,e)}function yr(r,n,t){var e;for(var u in r){if(u==="a1"||u==="a0"||u==="a3"||u==="a4"){var a=yr(r[u],n[u]||{},u);a&&(e=e||{},e[u]=a);continue}if(!(u in n)){e=e||{},e[u]=t?t==="a1"?"":t==="a0"||t==="a3"?void 0:{f:r[u].f,o:void 0}:typeof r[u]=="string"?"":null;continue}var i=r[u],o=n[u];i===o&&u!=="value"&&u!=="checked"||t==="a0"&&Me(i,o)||(e=e||{},e[u]=o)}for(var $ in n)$ in r||(e=e||{},e[$]=n[$]);return e}function qe(r,n,t,e){var u=r.e,a=n.e,i=u.length,o=a.length;i>o?S(t,6,e,{v:o,i:i-o}):i<o&&S(t,7,e,{v:i,e:a});for(var $=i<o?i:o,v=0;v<$;v++){var l=u[v];V(l,a[v],t,++e),e+=l.b||0}}function Ue(r,n,t,e){for(var u=[],a={},i=[],o=r.e,$=n.e,v=o.length,l=$.length,s=0,_=0,m=e;s<v&&_<l;){var p=o[s],A=$[_],w=p.a,B=A.a,D=p.b,tr=A.b,Fr=void 0,Lr=void 0;if(w===B){m++,V(D,tr,u,m),m+=D.b||0,s++,_++;continue}var $r=o[s+1],Pr=$[_+1];if($r){var an=$r.a,N=$r.b;Lr=B===an}if(Pr){var on=Pr.a,Vr=Pr.b;Fr=w===on}if(Fr&&Lr){m++,V(D,Vr,u,m),er(a,u,w,tr,_,i),m+=D.b||0,m++,ur(a,u,w,N,m),m+=N.b||0,s+=2,_+=2;continue}if(Fr){m++,er(a,u,B,tr,_,i),V(D,Vr,u,m),m+=D.b||0,s+=1,_+=2;continue}if(Lr){m++,ur(a,u,w,D,m),m+=D.b||0,m++,V(N,tr,u,m),m+=N.b||0,s+=2,_+=1;continue}if($r&&an===on){m++,ur(a,u,w,D,m),er(a,u,B,tr,_,i),m+=D.b||0,m++,V(N,Vr,u,m),m+=N.b||0,s+=2,_+=2;continue}break}for(;s<v;){m++;var p=o[s],D=p.b;ur(a,u,p.a,D,m),m+=D.b||0,s++}for(;_<l;){var vr=vr||[],A=$[_];er(a,u,A.a,A.b,void 0,vr),_++}(u.length>0||i.length>0||vr)&&S(t,8,e,{w:u,x:i,y:vr})}var Gn="_elmW6BL";function er(r,n,t,e,u,a){var i=r[t];if(!i){i={c:0,z:e,r:u,s:void 0},a.push({r:u,A:i}),r[t]=i;return}if(i.c===1){a.push({r:u,A:i}),i.c=2;var o=[];V(i.z,e,o,i.r),i.r=u,i.s.s={w:o,A:i};return}er(r,n,t+Gn,e,u,a)}function ur(r,n,t,e,u){var a=r[t];if(!a){var i=S(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:i};return}if(a.c===0){a.c=2;var o=[];V(e,a.z,o,u),S(n,9,u,{w:o,A:a});return}ur(r,n,t+Gn,e,u)}function Hn(r,n,t,e){ar(r,n,t,0,0,n.b,e)}function ar(r,n,t,e,u,a,i){for(var o=t[e],$=o.r;$===u;){var v=o.$;if(v===1)Hn(r,n.k,o.s,i);else if(v===8){o.t=r,o.u=i;var l=o.s.w;l.length>0&&ar(r,n,l,0,u,a,i)}else if(v===9){o.t=r,o.u=i;var s=o.s;if(s){s.A.s=r;var l=s.w;l.length>0&&ar(r,n,l,0,u,a,i)}}else o.t=r,o.u=i;if(e++,!(o=t[e])||($=o.r)>a)return e}var _=n.$;if(_===4){for(var m=n.k;m.$===4;)m=m.k;return ar(r,m,t,e,u+1,a,r.elm_event_node_ref)}for(var p=n.e,A=r.childNodes,w=0;w<p.length;w++){u++;var B=_===1?p[w]:p[w].b,D=u+(B.b||0);if(u<=$&&$<=D&&(e=ar(A[w],B,t,e,u,D,i),!(o=t[e])||($=o.r)>a))return e;u=D}return e}function Wn(r,n,t,e){return t.length===0?r:(Hn(r,n,t,e),gr(r,t))}function gr(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Ge(u,e);u===r&&(r=a)}return r}function Ge(r,n){switch(n.$){case 0:return He(r,n.s,n.u);case 4:return Rr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return gr(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var a=n.s,e=0;e<a.i;e++)r.removeChild(r.childNodes[a.v]);return r;case 7:for(var a=n.s,t=a.e,e=a.v,u=r.childNodes[e];e<t.length;e++)r.insertBefore(I(t[e],n.u),u);return r;case 9:var a=n.s;if(!a)return r.parentNode.removeChild(r),r;var i=a.A;return typeof i.r!="undefined"&&r.parentNode.removeChild(r),i.s=gr(r,a.w),r;case 8:return We(r,n);case 5:return n.s(r);default:nr(10)}}function He(r,n,t){var e=r.parentNode,u=I(n,t);return u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref),e&&u!==r&&e.replaceChild(u,r),u}function We(r,n){var t=n.s,e=Ye(t.y,n);r=gr(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],o=i.A,$=o.c===2?o.s:I(o.z,n.u);r.insertBefore($,r.childNodes[i.r])}return e&&Zr(r,e),r}function Ye(r,n){if(!!r){for(var t=K.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;Zr(t,a.c===2?a.s:I(a.z,n.u))}return t}}function Nr(r){if(r.nodeType===3)return pn(r.textContent);if(r.nodeType!==1)return pn("");for(var n=g,t=r.attributes,e=t.length;e--;){var u=t[e],a=u.name,i=u.value;n=d(c(Be,a,i),n)}for(var o=r.tagName.toLowerCase(),$=g,v=r.childNodes,e=v.length;e--;)$=d(Nr(v[e]),$);return b(kr,o,n,$)}function Ie(r){for(var n=r.e,t=n.length,e=new Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e,f:r.f,b:r.b}}var ze=M(function(r,n,t,e){return Qr(n,e,r.au,r.aC,r.aA,function(u,a){var i=r.aD,o=e.node,$=Nr(o);return Yn(a,function(v){var l=i(v),s=Un($,l);o=Wn(o,$,s,u),$=l})})});M(function(r,n,t,e){return Qr(n,e,r.au,r.aC,r.aA,function(u,a){var i=r.I&&r.I(u),o=r.aD,$=K.title,v=K.body,l=Nr(v);return Yn(a,function(s){pr=i;var _=o(s),m=kr("body")(g)(_.an),p=Un(l,m);v=Wn(v,l,p,u),l=m,pr=0,$!==_.aB&&(K.title=$=_.aB)})})});var Ar=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)};function Yn(r,n){n(r);var t=0;function e(){t=t===1?0:(Ar(e),n(r),1)}return function(u,a){r=u,a?(n(r),t===2&&(t=1)):(t===0&&Ar(e),t=2)}}f(function(r,n){return c(un,tn,R(function(){n&&history.go(n),r()}))});f(function(r,n){return c(un,tn,R(function(){history.pushState({},"",n),r()}))});f(function(r,n){return c(un,tn,R(function(){history.replaceState({},"",n),r()}))});var Qe={addEventListener:function(){},removeEventListener:function(){}},Xe=typeof window!="undefined"?window:Qe;h(function(r,n,t){return dn(R(function(e){function u(a){Ir(t(a))}return r.addEventListener(n,u,Kr&&{passive:!0}),function(){r.removeEventListener(n,u)}}))});f(function(r,n){var t=F(r,n);return P(t)?y(t.a):J});function In(r,n){return R(function(t){Ar(function(){var e=document.getElementById(r);t(e?X(n(e)):ue(Eu(r)))})})}function Ze(r){return R(function(n){Ar(function(){n(X(r()))})})}f(function(r,n){return In(n,function(t){return t[r](),rr})});f(function(r,n){return Ze(function(){return Xe.scroll(r,n),rr})});h(function(r,n,t){return In(r,function(e){return e.scrollLeft=n,e.scrollTop=t,rr})});var zn=1,ke=2,Qn=0,T=Jt,Xn=h(function(r,n,t){r:for(;;){if(t.$===-2)return n;var e=t.b,u=t.c,a=t.d,i=t.e,o=r,$=b(r,e,u,b(Xn,r,n,i)),v=a;r=o,n=$,t=v;continue r}}),Dn=function(r){return b(Xn,h(function(n,t,e){return c(T,G(n,t),e)}),g,r)},_r=Tt;h(function(r,n,t){var e=t.c,u=t.d,a=f(function(i,o){if(i.$){var v=i.a;return b(_r,r,o,v)}else{var $=i.a;return b(_r,a,o,$)}});return b(_r,a,b(_r,r,n,u),e)});var Y=function(r){return{$:1,a:r}},xr=f(function(r,n){return{$:3,a:r,b:n}}),wn=f(function(r,n){return{$:0,a:r,b:n}}),Zn=f(function(r,n){return{$:1,a:r,b:n}}),k=function(r){return{$:0,a:r}},Ke=function(r){return{$:2,a:r}},y=function(r){return{$:0,a:r}},J={$:1},ye=Ht,Ne=re,qr=It,ir=f(function(r,n){return c(Ut,r,Yr(n))}),xe=f(function(r,n){return H(c(qt,r,n))}),kn=function(r){return c(ir,`
    `,c(xe,`
`,r))},Er=h(function(r,n,t){r:for(;;)if(t.b){var e=t.a,u=t.b,a=r,i=c(r,e,n),o=u;r=a,n=i,t=o;continue r}else return n}),Kn=function(r){return b(Er,f(function(n,t){return t+1}),0,r)},ru=Bt,nu=h(function(r,n,t){r:for(;;)if(L(r,n)<1){var e=r,u=n-1,a=c(T,n,t);r=e,n=u,t=a;continue r}else return t}),tu=f(function(r,n){return b(nu,r,n,g)}),eu=f(function(r,n){return b(ru,r,c(tu,0,Kn(n)-1),n)}),rn=Qt,yn=function(r){var n=rn(r);return 97<=n&&n<=122},Nn=function(r){var n=rn(r);return n<=90&&65<=n},uu=function(r){return yn(r)||Nn(r)},au=function(r){var n=rn(r);return n<=57&&48<=n},iu=function(r){return yn(r)||Nn(r)||au(r)},U=function(r){return b(Er,T,g,r)},ou=Mt,fu=f(function(r,n){return`

(`+(qr(r+1)+(") "+kn(cu(n))))}),cu=function(r){return c($u,r,g)},$u=f(function(r,n){r:for(;;)switch(r.$){case 0:var t=r.a,i=r.b,e=function(){var A=ou(t);if(A.$===1)return!1;var w=A.a,B=w.a,D=w.b;return uu(B)&&c(ye,iu,D)}(),u=e?"."+t:"['"+(t+"']"),$=i,v=c(T,u,n);r=$,n=v;continue r;case 1:var a=r.a,i=r.b,o="["+(qr(a)+"]"),$=i,v=c(T,o,n);r=$,n=v;continue r;case 2:var l=r.a;if(l.b)if(l.b.b){var s=function(){return n.b?"The Json.Decode.oneOf at json"+c(ir,"",U(n)):"Json.Decode.oneOf"}(),p=s+(" failed in the following "+(qr(Kn(l))+" ways:"));return c(ir,`

`,c(T,p,c(eu,fu,l)))}else{var i=l.a,$=i,v=n;r=$,n=v;continue r}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return n.b?" at json"+c(ir,"",U(n)):"!"}();default:var _=r.a,m=r.b,p=function(){return n.b?"Problem with the value at json"+(c(ir,"",U(n))+`:

    `):`Problem with the given value:

`}();return p+(kn(c(Ne,4,m))+(`

`+_))}}),C=32,Ur=M(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Gr=Ft,xn=Ot,rt=f(function(r,n){return ln(n)/ln(r)}),Hr=xn(c(rt,2,C)),vu=O(Ur,0,Hr,Gr,Gr),nt=Pt,lu=function(r){return{$:1,a:r}};f(function(r,n){return r(n)});f(function(r,n){return n(r)});var su=dt,En=Lt,_u=f(function(r,n){return L(r,n)>0?r:n}),mu=function(r){return{$:0,a:r}},tt=Vt,hu=f(function(r,n){r:for(;;){var t=c(tt,C,r),e=t.a,u=t.b,a=c(T,mu(e),n);if(u.b){var i=u,o=a;r=i,n=o;continue r}else return U(a)}}),bu=f(function(r,n){r:for(;;){var t=xn(n/C);if(t===1)return c(tt,C,r).a;var e=c(hu,r,g),u=t;r=e,n=u;continue r}}),pu=f(function(r,n){if(n.a){var t=n.a*C,e=su(c(rt,C,t-1)),u=r?U(n.d):n.d,a=c(bu,u,n.a);return O(Ur,En(n.c)+t,c(_u,5,e*Hr),a,n.c)}else return O(Ur,En(n.c),Hr,Gr,n.c)}),gu=fr(function(r,n,t,e,u){r:for(;;){if(n<0)return c(pu,!1,{d:e,a:t/C|0,c:u});var a=lu(b(nt,C,n,r)),i=r,o=n-C,$=t,v=c(T,a,e),l=u;r=i,n=o,t=$,e=v,u=l;continue r}}),Au=f(function(r,n){if(r<=0)return vu;var t=r%C,e=b(nt,t,r-t,n),u=r-t-C;return or(gu,n,u,r,g,e)}),P=function(r){return!r.$},Du=yt,wu=Nt,et=Xt,nn=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ut=function(r){return r},Eu=ut,Sn=wr(function(r,n,t,e,u,a){return{Q:a,S:n,W:e,Y:t,aa:r,ab:u}}),Su=Wt,ju=Rt,at=Gt,Sr=f(function(r,n){return r<1?n:b(at,r,ju(n),n)}),jr=Yt,Jr=function(r){return r===""},Br=f(function(r,n){return r<1?"":b(at,0,r,n)}),Ju=zt,jn=fr(function(r,n,t,e,u){if(Jr(u)||c(Su,"@",u))return J;var a=c(jr,":",u);if(a.b){if(a.b.b)return J;var i=a.a,o=Ju(c(Sr,i+1,u));if(o.$===1)return J;var $=o;return y(Or(Sn,r,c(Br,i,u),$,n,t,e))}else return y(Or(Sn,r,u,J,n,t,e))}),Jn=M(function(r,n,t,e){if(Jr(e))return J;var u=c(jr,"/",e);if(u.b){var a=u.a;return or(jn,r,c(Sr,a,e),n,t,c(Br,a,e))}else return or(jn,r,"/",n,t,e)}),Bn=h(function(r,n,t){if(Jr(t))return J;var e=c(jr,"?",t);if(e.b){var u=e.a;return O(Jn,r,y(c(Sr,u+1,t)),n,c(Br,u,t))}else return O(Jn,r,J,n,t)});f(function(r,n){if(Jr(n))return J;var t=c(jr,"#",n);if(t.b){var e=t.a;return b(Bn,r,y(c(Sr,e+1,n)),c(Br,e,n))}else return b(Bn,r,J,n)});var tn=function(r){},cr=X,Bu=cr(0),it=M(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){var $=o.a,v=o.b;if(v.b){var l=v.a,s=v.b,_=t>500?b(Er,r,n,U(s)):O(it,r,n,t+1,s);return c(r,u,c(r,i,c(r,$,c(r,l,_))))}else return c(r,u,c(r,i,c(r,$,n)))}else return c(r,u,c(r,i,n))}else return c(r,u,n)}else return n}),ot=h(function(r,n,t){return O(it,r,n,0,t)}),Fu=f(function(r,n){return b(ot,f(function(t,e){return c(T,r(t),e)}),g,n)}),Dr=Mr,en=f(function(r,n){return c(Dr,function(t){return cr(r(t))},n)}),Lu=h(function(r,n,t){return c(Dr,function(e){return c(Dr,function(u){return cr(c(r,e,u))},t)},n)}),Pu=function(r){return b(ot,Lu(T),cr(g),r)},Vu=se,Tu=f(function(r,n){var t=n;return dn(c(Dr,Vu(r),t))}),Cu=h(function(r,n,t){return c(en,function(e){return 0},Pu(c(Fu,Tu(r),n)))}),Ou=h(function(r,n,t){return cr(0)}),du=f(function(r,n){var t=n;return c(en,r,t)});j.Task=ve(Bu,Cu,Ou,du);var Mu=Xr("Task"),un=f(function(r,n){return Mu(c(en,r,n))}),Ru=ze,qu={E:g},Uu=_e,Gu=Uu(g),Hu=G(qu,Gu),Wu=Kt,Yu=kt,Iu=De("addTurn",Wu(Yu)),zu=function(r){return Iu(ut)},Fn=f(function(r,n){return b(Er,ee(r),te(),n)}),Qu=ne,Xu=pe("sendTurns",Fn(Fn(Qu))),Zu=f(function(r,n){var t=r,e=U(c(T,t,n.E));return G(St(n,{E:e}),Xu(e))}),ku=kr("div"),Ku=function(r){return c(ku,g,g)},yu=Ru({au:function(r){return Hu},aA:zu,aC:Zu,aD:Ku});const Nu={AppState:{init:yu(et(0))(0)}},xu=Nu.AppState.init({node:document.getElementById("elm-root")});st.render(q(_t.StrictMode,{children:q(ht,{ports:xu.ports})}),document.getElementById("root"));
