(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={6:0},i={6:0},a=[];function c(t){return s.p+"static/js/"+({}[t]||t)+"."+{0:"21009e35",1:"a3417ca1",2:"d7e2e36f",3:"6e1b03f6",4:"231062d6"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={2:1,3:1,4:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="static/css/"+({}[t]||t)+"."+{0:"31d6cfe0",1:"31d6cfe0",2:"184d1389",3:"7fffe79c",4:"cccedeed"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=i[a],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){c=l[a],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=a);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(t),u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;a.push([11,5]),n()})({11:function(t,e,n){t.exports=n("Vtdi")},"1aaI":function(t,e,n){var r,o=[];t.exports=function(t){o?o.push(t):t(r)},Promise.all([n.e(0),n.e(2)]).then(function(t){r=n("xS4w");var e=o;o=null;for(var i=0,a=e.length;i<a;i++)e[i](r)}.bind(null,n)).catch(n.oe)},"4+DQ":function(t,e,n){},"54dB":function(t,e,n){},"5Dmc":function(t,e,n){"use strict";var r=n("Mb3I"),o=n.n(r);o.a},"5xxc":function(t,e,n){"use strict";var r=n("IHwC"),o=n.n(r);o.a},"8qXm":function(t,e,n){var r={"./DishDetail.vue":"qtbh","./PokemonDetail.vue":"KZLs","./PokemonList.vue":"1aaI"};function o(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="8qXm"},"C8+0":function(t,e,n){},DSsS:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont",class:"icon-"+t.type})},o=[],i={name:"Iconfont",props:{type:String}},a=i,c=(n("eaJ2"),n("KHd+")),s=Object(c["a"])(a,r,o,!1,null,null,null);e["a"]=s.exports},HVSD:function(t,e,n){"use strict";var r=n("4+DQ"),o=n.n(r);o.a},IHwC:function(t,e,n){},KZLs:function(t,e,n){var r,o=[];t.exports=function(t){o?o.push(t):t(r)},Promise.all([n.e(0),n.e(3)]).then(function(t){r=n("YCw7");var e=o;o=null;for(var i=0,a=e.length;i<a;i++)e[i](r)}.bind(null,n)).catch(n.oe)},LRKL:function(t,e,n){},Mb3I:function(t,e,n){},Q2Dg:function(t,e,n){"use strict";var r=n("xqzn"),o=n.n(r);o.a},"R+Gs":function(t,e,n){"use strict";var r=n("54dB"),o=n.n(r);o.a},T94A:function(t,e,n){"use strict";var r=n("xoK6"),o=n.n(r);o.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm"),n("9d8Q");var r=n("Kw5r"),o=n("jE9Z"),i=n("AoTc"),a=n.n(i),c=(n("hEkN"),n("GEYT")),s=n.n(c),u={mounted:function(){this.scrollToAnchor()},methods:{scrollToAnchor:function(t){if(this.$route&&(t=t||this.$route.query.anchor,t)){var e=document.querySelector("[data-anchor=".concat(t,"]"));e&&s()(e,{time:400,align:{top:0}})}}}},l=u,f={install:function(t){t.mixin(l)}},d=f,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"view"}},[n("router-view")],1)},h=[],p={},m=p,b=(n("HVSD"),n("KHd+")),g=Object(b["a"])(m,v,h,!1,null,null,null),k=g.exports,x=(n("2Spj"),n("Mj6V")),w=n.n(x),C=(n("pdi6"),n("LRKL"),0);function y(){++C,w.a.start()}function _(){--C<=0&&(C=0,w.a.done())}function j(){var t=1;return y(),function(){1===t&&(t=null,_())}}j.wrap=function(t){var e=j();return function(){return e(),t.apply(this,arguments)}.bind(this)},j.use=function(){return Promise.resolve(j()).disposer(function(t){return t()})};var O=n("8qXm");function E(t){return function(){var e=j();return new Promise(function(n){O(t)(function(t){e(),n(t.default)})})}}var T,P,S,D,A,H,L=[{path:"/pokemon",component:E("./PokemonList.vue")},{path:"/pokemon/:id",component:E("./PokemonDetail.vue")},{path:"/dishes/:id",component:E("./DishDetail.vue")},{path:"*",redirect:"/pokemon"}],N=new o["a"]({routes:L}),$=N,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("Headful",{attrs:{title:t.fullTitle}}),t._t("default")],2)},I=[],W=n("7AJ+"),M=n.n(W),K="PokeQuest Wiki",Q={name:"Screen",props:{title:String},computed:{fullTitle:function(){var t=this.title;return t?"".concat(t," - ").concat(K):K}},components:{Headful:M.a}},B=Q,J=(n("Q2Dg"),Object(b["a"])(B,q,I,!1,null,"7d751f22",null)),V=J.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"absolute"},[t._t("absolute")],2),n("div",{ref:"scroller",staticClass:"scroller",on:{scroll:t.handleScroll}},[n("div",{staticClass:"content"},[t._t("default")],2)])])},R=[],z=n("zELP"),X=n.n(z),G={name:"Main",methods:{handleScroll:function(t){this.$emit("scroll",t)},scrollTop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;X.a.top(this.$refs.scroller,t)}}},F=G,U=(n("R+Gs"),Object(b["a"])(F,Y,R,!1,null,"67f0ece3",null)),Z=U.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isHome,expression:"!isHome"}],staticClass:"item",on:{click:t.toHome}},[n("Iconfont",{staticClass:"icon",attrs:{type:"home"}})],1),n("div",{staticClass:"item",on:{click:t.back}},[n("Iconfont",{staticClass:"icon",attrs:{type:"back"}})],1)])},et=[],nt=n("DSsS"),rt="/pokemon",ot={name:"Navbar",props:{value:String},components:{Iconfont:nt["a"]},computed:{isHome:function(){return this.$route.path===rt}},methods:{toHome:function(){this.$router.push("/")},back:function(){this.$router.back()}}},it=ot,at=(n("5xxc"),Object(b["a"])(it,tt,et,!1,null,"5df73938",null)),ct=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"})},ut=[],lt={name:"Clearfix"},ft=lt,dt=(n("5Dmc"),Object(b["a"])(ft,st,ut,!1,null,"7ef11faa",null)),vt=dt.exports,ht=n("/jzl"),pt=n.n(ht),mt=(n("OG14"),n("s4NR")),bt=n.n(mt),gt=bt.a.parse(window.location.search.slice(1)),kt="debug"in gt;kt&&n("I53Q")(j.wrap(function(t){return t.init()})),D=function(t,e){var n;return!!t&&(t!==document.body&&(n=e(t),!!n||D(t.parentNode,e)))},window.addEventListener("touchstart",function(t){T=t.targetTouches[0].target,H={},H.left=D(T,function(t){return t.scrollLeft>0}),H.top=D(T,function(t){return t.scrollTop>0}),H.right=D(T,function(t){return t.scrollWidth>t.clientWidth&&t.scrollWidth-t.clientWidth>t.scrollLeft}),H.bottom=D(T,function(t){return t.scrollHeight>t.clientHeight&&t.scrollHeight-t.clientHeight>t.scrollTop}),P=t.targetTouches[0].screenX,S=t.targetTouches[0].screenY,A=!1}),window.addEventListener("touchmove",function(t){var e,n;A?t.preventDefault():(e=t.targetTouches[0].screenX,n=t.targetTouches[0].screenY,e>P&&H.left||n<S&&H.bottom||e<P&&H.right||n>S&&H.top||(t.preventDefault(),A=!0))});var xt=n("lIOY"),wt=(n("bWfx"),n("yT7P")),Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banners"},[n("transition-group",{attrs:{name:"banner"}},t._l(t.banners,function(e,r){return n("div",{key:r,staticClass:"banner"},[n("div",{staticClass:"text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),n("div",{staticClass:"actions"},[e.actions[1]?n("div",{staticClass:"action",on:{click:function(n){t.handleClickAction(1,e,r)}}},[t._v(t._s(e.actions[1].text))]):t._e(),e.actions[0]?n("div",{staticClass:"action",on:{click:function(n){t.handleClickAction(0,e,r)}}},[t._v(t._s(e.actions[0].text))]):t._e()]),n("Clearfix")],1)}))],1)},yt=[],_t=n("iv4g"),jt={name:"Banners",data:function(){return{banners:[]}},components:{Clearfix:vt},methods:{handleClickAction:function(t,e,n){var r=e.actions[t].handler(n);!1!==r&&this.remove(n)},remove:function(t){this.banners=Object(_t["a"])(this.banners.slice(0,t)).concat(Object(_t["a"])(this.banners.slice(t+1)))}}},Ot=jt,Et=(n("T94A"),Object(b["a"])(Ot,Ct,yt,!1,null,"1532165c",null)),Tt=Et.exports,Pt=document.createElement("div");document.body.appendChild(Pt);var St=new r["a"](Object(wt["a"])({el:Pt},Tt));function Dt(t){var e=t.text,n=t.actions;n&&0!==n.length||(n=[{text:"Dismiss"}]),n=n.map(function(t){return Object(wt["a"])({},t,{handler:t.handler||function(){}})}),St.banners.push({text:e,actions:n})}var At=Dt,Ht=(n("V+eJ"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"snackbars"},[n("transition-group",{attrs:{name:"snackbar"}},t._l(t.snackbars,function(e,r){return n("div",{key:r,staticClass:"snackbar"},[n("div",{staticClass:"text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),n("div",{staticClass:"actions"},[e.action?n("div",{staticClass:"action",on:{click:function(n){t.handleClickAction(e,r)}}},[t._v(t._s(e.action.text))]):t._e()]),n("Clearfix")],1)}))],1)}),Lt=[],Nt={name:"Snackbars",data:function(){return{snackbars:[]}},components:{Clearfix:vt},methods:{handleClickAction:function(t,e){var n=t.action.handler(e);!1!==n&&this.remove(e)},remove:function(t){this.snackbars=Object(_t["a"])(this.snackbars.slice(0,t)).concat(Object(_t["a"])(this.snackbars.slice(t+1)))}}},$t=Nt,qt=(n("kPbE"),Object(b["a"])($t,Ht,Lt,!1,null,"20676068",null)),It=qt.exports,Wt=document.createElement("div");document.body.appendChild(Wt);var Mt=new r["a"](Object(wt["a"])({el:Wt},It));function Kt(t){var e=t.text,n=t.action,r=t.duration,o=void 0===r?5e3:r;n&&(n=Object(wt["a"])({},n,{handler:n.handler||function(){}}));var i={text:e,action:n,duration:o};Mt.snackbars.push(i),o&&setTimeout(function(){var t=Mt.snackbars.indexOf(i);~t&&Mt.remove(t)},o)}var Qt=Kt,Bt=function(){var t;return function(){t||(t=!0,console.log("Controller loaded"),window.location.reload())}}(),Jt=function(t){return At({text:"New version of PokeQuest Wiki is available!",actions:[{text:"Try it now!",handler:function(){"installed"===t.state&&t.postMessage("skipWaiting")}},{text:"Dismiss"}]})};"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("controllerchange",Bt),Object(xt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(t){console.log("Service worker has been registered."),t&&t.waiting&&Jt(t.waiting)},cached:function(){console.log("Content has been cached for offline use."),Qt({text:"PokeQuest Wiki is ready for offline use."})},updated:function(t){console.log("New content is available; please refresh."),t&&t.waiting&&Jt(t.waiting)},offline:function(){var t="No internet connection found. App is running in offline mode.";console.log(t),Qt({text:t})},error:function(t){console.error("Error during service worker registration:",t)}});var Vt="UA-122570654-1";pt.a.attach(document.body),r["a"].config.productionTip=!1,r["a"].component("Screen",V),r["a"].component("Main",Z),r["a"].component("Navbar",ct),r["a"].component("Navbar",ct),r["a"].component("Clearfix",vt),r["a"].use(o["a"]),Vt&&r["a"].use(a.a,{id:Vt,router:$}),r["a"].use(d),new r["a"]({router:$,render:function(t){return t(k)}}).$mount("#app")},YJjP:function(t,e,n){},eaJ2:function(t,e,n){"use strict";var r=n("YJjP"),o=n.n(r);o.a},kPbE:function(t,e,n){"use strict";var r=n("C8+0"),o=n.n(r);o.a},qtbh:function(t,e,n){var r,o=[];t.exports=function(t){o?o.push(t):t(r)},Promise.all([n.e(0),n.e(4)]).then(function(t){r=n("WueC");var e=o;o=null;for(var i=0,a=e.length;i<a;i++)e[i](r)}.bind(null,n)).catch(n.oe)},xoK6:function(t,e,n){},xqzn:function(t,e,n){}});
//# sourceMappingURL=app.8de7095f.js.map