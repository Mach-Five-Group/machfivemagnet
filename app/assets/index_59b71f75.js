(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const Ut="modulepreload",Dt=function(t){return"/"+t},Fe={},D=function(e,a,n){let o=Promise.resolve();if(a&&a.length>0){let d=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");o=d(a.map(p=>{if(p=Dt(p),p in Fe)return;Fe[p]=!0;const m=p.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const E=document.createElement("link");if(E.rel=m?"stylesheet":Ut,m||(E.as="script"),E.crossOrigin="",E.href=p,r&&E.setAttribute("nonce",r),document.head.appendChild(E),m)return new Promise((w,I)=>{E.addEventListener("load",w),E.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return o.then(s=>{for(const r of s||[])r.status==="rejected"&&i(r.reason);return e().catch(i)})};var Gt=/([:*])(\w+)/g,Bt="([^/]+)",$t=/\*/g,Ht="?(?:.*)",Vt=/\/\?/g,zt="/?([^/]+|)",qt="(?:/^|^)",jt="";function nt(t){return t===void 0&&(t="/"),Re()?location.pathname+location.search+location.hash:t}function k(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function le(t){return typeof t=="string"}function Wt(t){return typeof t=="function"}function ce(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Yt(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(a,n,o){return a===null&&(a={}),a[e[o]]=decodeURIComponent(n),a},null)}function de(t){var e=k(t).split(/\?(.*)?$/);return[k(e[0]),e.slice(1).join("")]}function Oe(t){for(var e={},a=t.split("&"),n=0;n<a.length;n++){var o=a[n].split("=");if(o[0]!==""){var i=decodeURIComponent(o[0]);e[i]?(Array.isArray(e[i])||(e[i]=[e[i]]),e[i].push(decodeURIComponent(o[1]||""))):e[i]=decodeURIComponent(o[1]||"")}}return e}function ot(t,e){var a=de(k(t.currentLocationPath)),n=a[0],o=a[1],i=o===""?null:Oe(o),s=[],r;if(le(e.path)){if(r=qt+k(e.path).replace(Gt,function(y,E,w){return s.push(w),Bt}).replace($t,Ht).replace(Vt,zt)+"$",k(e.path)===""&&k(n)==="")return{url:n,queryString:o,hashString:ce(t.to),route:e,data:null,params:i}}else r=e.path;var d=new RegExp(r,jt),p=n.match(d);if(p){var m=le(e.path)?Yt(p,s):p.groups?p.groups:p.slice(1);return{url:k(n.replace(new RegExp("^"+t.instance.root),"")),queryString:o,hashString:ce(t.to),route:e,data:m,params:i}}return!1}function it(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function j(t,e){return typeof t[e]>"u"||t[e]===!0}function Kt(t){if(!t)return{};var e=t.split(","),a={},n;return e.forEach(function(o){var i=o.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":a.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=i[1];break;case"resolveOptionsHash":n||(n={}),n.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":a[i[0]]=i[1]==="true";break}}),n&&(a.resolveOptions=n),a}function Re(){return typeof window<"u"}function Jt(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(a){return a}).forEach(function(a){["before","after","already","leave"].forEach(function(n){a[n]&&(e[n]||(e[n]=[]),e[n].push(a[n]))})}),e}function $(t,e,a){var n=e||{},o=0;(function i(){if(!t[o]){a&&a(n);return}Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](n)?t[o][1]:t[o][2])),i()):t[o](n,function(s){typeof s>"u"||s===!0?(o+=1,i()):a&&a(n)})})()}$.if=function(t,e,a){return Array.isArray(e)||(e=[e]),Array.isArray(a)||(a=[a]),[t,e,a]};function Ue(t,e){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=nt(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function fe(t,e){for(var a=0;a<t.instance.routes.length;a++){var n=t.instance.routes[a],o=ot(t,n);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),t.resolveOptions.strategy==="ONE")){e();return}}e()}function Xt(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function Qt(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var De=Re(),Zt=it();function ea(t,e){if(j(t.navigateOptions,"updateBrowserURL")){var a=("/"+t.to).replace(/\/\//g,"/"),n=De&&t.resolveOptions&&t.resolveOptions.hash===!0;Zt?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",n?"#"+a:a),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!n){var o=location.hash;location.hash="",location.hash=o}t.instance.__freezeListening=!1},1))):De&&(window.location.href=t.to)}e()}function st(t,e){var a=t.instance;if(!a.lastResolved()){e();return}$(a.lastResolved().map(function(n){return function(o,i){if(!n.route.hooks||!n.route.hooks.leave){i();return}var s=!1,r=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);if(n.route.path!=="*")s=!r;else{var d=t.matches?t.matches.find(function(p){return n.route.path===p.route.path}):!1;s=!d}if(j(t.navigateOptions,"callHooks")&&s){$(n.route.hooks.leave.map(function(p){return function(m,y){return p(function(E){E===!1?t.instance.__markAsClean(t):y()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return e()})}function ta(t,e){t.match.route.hooks&&t.match.route.hooks.before&&j(t.navigateOptions,"callHooks")?$(t.match.route.hooks.before.map(function(a){return function(o,i){return a(function(s){s===!1?t.instance.__markAsClean(t):i()},t.match)}}).concat([function(){return e()}])):e()}function aa(t,e){j(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function na(t,e){t.match.route.hooks&&t.match.route.hooks.after&&j(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(a){return a(t.match)}),e()}function oa(t,e){var a=t.instance.lastResolved();if(a&&a[0]&&a[0].route===t.match.route&&a[0].url===t.match.url&&a[0].queryString===t.match.queryString){a.forEach(function(n){n.route.hooks&&n.route.hooks.already&&j(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(o){return o(t.match)})}),e(!1);return}e()}function ia(t,e){var a=t.instance._notFoundRoute;if(a){t.notFoundHandled=!0;var n=de(t.currentLocationPath),o=n[0],i=n[1],s=ce(t.to);a.path=k(o);var r={url:a.path,queryString:i,hashString:s,data:null,route:a,params:i!==""?Oe(i):null};t.matches=[r],t.match=r}e()}function sa(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function ra(t,e){t.instance._setCurrent(null),e()}function rt(t,e){j(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var lt=[oa,ta,aa,na],Ge=[st,ia,$.if(function(t){var e=t.notFoundHandled;return e},lt.concat([rt]),[sa,ra])];function Ae(){return Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ae.apply(this,arguments)}function Be(t,e){var a=0;function n(){if(a===t.matches.length){rt(t,e);return}$(lt,Ae({},t,{match:t.matches[a]}),function(){a+=1,n()})}st(t,n)}function ve(t){t.instance.__markAsClean(t)}function we(){return we=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},we.apply(this,arguments)}var $e="[data-navigo]";function la(t,e){var a=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:$e},n=this,o="/",i=null,s=[],r=!1,d,p=it(),m=Re();t?o=k(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function y(u){return u.indexOf("#")>=0&&(a.hash===!0?u=u.split("#")[1]||"/":u=u.split("#")[0]),u}function E(u){return k(o+"/"+k(u))}function w(u,h,S,N){return u=le(u)?E(u):u,{name:N||k(String(u)),path:u,handler:h,hooks:Jt(S)}}function I(u,h,S){var N=this;return typeof u=="object"&&!(u instanceof RegExp)?(Object.keys(u).forEach(function(T){if(typeof u[T]=="function")N.on(T,u[T]);else{var B=u[T],ee=B.uses,Mt=B.as,Ft=B.hooks;s.push(w(T,ee,[d,Ft],Mt))}}),this):(typeof u=="function"&&(S=h,h=u,u=o),s.push(w(u,h,[d,S])),this)}function g(u,h){if(n.__dirty){n.__waiting.push(function(){return n.resolve(u,h)});return}else n.__dirty=!0;u=u?k(o)+"/"+k(u):void 0;var S={instance:n,to:u,currentLocationPath:u,navigateOptions:{},resolveOptions:we({},a,h)};return $([Ue,fe,$.if(function(N){var T=N.matches;return T&&T.length>0},Be,Ge)],S,ve),S.matches?S.matches:!1}function _(u,h){if(n.__dirty){n.__waiting.push(function(){return n.navigate(u,h)});return}else n.__dirty=!0;u=k(o)+"/"+k(u);var S={instance:n,to:u,navigateOptions:h||{},resolveOptions:h&&h.resolveOptions?h.resolveOptions:a,currentLocationPath:y(u)};$([Xt,Qt,fe,$.if(function(N){var T=N.matches;return T&&T.length>0},Be,Ge),ea,ve],S,ve)}function b(u,h,S){var N=Le(u,h);return N!==null?(_(N.replace(new RegExp("^/?"+o),""),S),!0):!1}function R(u){return this.routes=s=s.filter(function(h){return le(u)?k(h.path)!==k(u):Wt(u)?u!==h.handler:String(h.path)!==String(u)}),this}function x(){p&&(this.__popstateListener=function(){n.__freezeListening||g()},window.addEventListener("popstate",this.__popstateListener))}function U(){this.routes=s=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=r=!0}function z(u,h){return n._notFoundRoute=w("*",u,[d,h],"__NOT_FOUND__"),this}function G(){if(m)return Y().forEach(function(u){if(u.getAttribute("data-navigo")==="false"||u.getAttribute("target")==="_blank"){u.hasListenerAttached&&u.removeEventListener("click",u.navigoHandler);return}u.hasListenerAttached||(u.hasListenerAttached=!0,u.navigoHandler=function(h){if((h.ctrlKey||h.metaKey)&&h.target.tagName.toLowerCase()==="a")return!1;var S=u.getAttribute("href");if(typeof S>"u"||S===null)return!1;if(S.match(/^(http|https)/)&&typeof URL<"u")try{var N=new URL(S);S=N.pathname+N.search}catch{}var T=Kt(u.getAttribute("data-navigo-options"));r||(h.preventDefault(),h.stopPropagation(),n.navigate(k(S),T))},u.addEventListener("click",u.navigoHandler))}),n}function Y(){return m?[].slice.call(document.querySelectorAll(a.linksSelector||$e)):[]}function he(u){return"/"+o+"/"+k(u)}function Z(u){return d=u,this}function kt(){return i}function Le(u,h,S){var N=s.find(function(ee){return ee.name===u}),T=null;if(N){if(T=N.path,h)for(var B in h)T=T.replace(":"+B,h[B]);T=T.match(/^\//)?T:"/"+T}return T&&S&&!S.includeRoot&&(T=T.replace(new RegExp("^/"+o),"")),T}function Ot(u){return u.getAttribute("href")}function Pe(u){var h=de(k(u)),S=h[0],N=h[1],T=N===""?null:Oe(N),B=ce(u),ee=w(S,function(){},[d],S);return{url:S,queryString:N,hashString:B,route:ee,data:null,params:T}}function Rt(){return Pe(k(nt(o)).replace(new RegExp("^"+o),""))}function xt(u){var h={instance:n,currentLocationPath:u,to:u,resolveOptions:a};return fe(h,function(){}),h.matches?h.matches:!1}function Lt(u,h,S){typeof h<"u"&&(typeof S>"u"||S)&&(h=E(h));var N={instance:n,to:h,currentLocationPath:h};Ue(N,function(){}),typeof u=="string"&&(u=typeof S>"u"||S?E(u):u);var T=ot(N,{name:String(u),path:u,handler:function(){},hooks:{}});return T||!1}function oe(u,h,S){return typeof h=="string"&&(h=Me(h)),h?(h.hooks[u]||(h.hooks[u]=[]),h.hooks[u].push(S),function(){h.hooks[u]=h.hooks[u].filter(function(N){return N!==S})}):(console.warn("Route doesn't exists: "+h),function(){})}function Me(u){return typeof u=="string"?s.find(function(h){return h.name===E(u)}):s.find(function(h){return h.handler===u})}function Pt(u){u.instance.__dirty=!1,u.instance.__waiting.length>0&&u.instance.__waiting.shift()()}this.root=o,this.routes=s,this.destroyed=r,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Pt,this.on=I,this.off=R,this.resolve=g,this.navigate=_,this.navigateByName=b,this.destroy=U,this.notFound=z,this.updatePageLinks=G,this.link=he,this.hooks=Z,this.extractGETParameters=function(u){return de(y(u))},this.lastResolved=kt,this.generate=Le,this.getLinkPath=Ot,this.match=xt,this.matchLocation=Lt,this.getCurrentLocation=Rt,this.addBeforeHook=oe.bind(this,"before"),this.addAfterHook=oe.bind(this,"after"),this.addAlreadyHook=oe.bind(this,"already"),this.addLeaveHook=oe.bind(this,"leave"),this.getRoute=Me,this._pathToMatchObject=Pe,this._clean=k,this._checkForAHash=y,this._setCurrent=function(u){return i=n.current=u},x.call(this),G.call(this)}var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function da(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var te={exports:{}},ua=te.exports,He;function pa(){return He||(He=1,(function(t,e){(function(a,n){var o={};a.PubSub?(o=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=o,n(o)),t!==void 0&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o})(typeof window=="object"&&window||ua||ca,function(a){var n={},o=-1,i="*";function s(g){var _;for(_ in g)if(Object.prototype.hasOwnProperty.call(g,_))return!0;return!1}function r(g){return function(){throw g}}function d(g,_,b){try{g(_,b)}catch(R){setTimeout(r(R),0)}}function p(g,_,b){g(_,b)}function m(g,_,b,R){var x=n[_],U=R?p:d,z;if(Object.prototype.hasOwnProperty.call(n,_))for(z in x)Object.prototype.hasOwnProperty.call(x,z)&&U(x[z],g,b)}function y(g,_,b){return function(){var x=String(g),U=x.lastIndexOf(".");for(m(g,g,_,b);U!==-1;)x=x.substr(0,U),U=x.lastIndexOf("."),m(g,x,_,b);m(g,i,_,b)}}function E(g){var _=String(g),b=!!(Object.prototype.hasOwnProperty.call(n,_)&&s(n[_]));return b}function w(g){for(var _=String(g),b=E(_)||E(i),R=_.lastIndexOf(".");!b&&R!==-1;)_=_.substr(0,R),R=_.lastIndexOf("."),b=E(_);return b}function I(g,_,b,R){g=typeof g=="symbol"?g.toString():g;var x=y(g,_,R),U=w(g);return U?(b===!0?x():setTimeout(x,0),!0):!1}a.publish=function(g,_){return I(g,_,!1,a.immediateExceptions)},a.publishSync=function(g,_){return I(g,_,!0,a.immediateExceptions)},a.subscribe=function(g,_){if(typeof _!="function")return!1;g=typeof g=="symbol"?g.toString():g,Object.prototype.hasOwnProperty.call(n,g)||(n[g]={});var b="uid_"+String(++o);return n[g][b]=_,b},a.subscribeAll=function(g){return a.subscribe(i,g)},a.subscribeOnce=function(g,_){var b=a.subscribe(g,function(){a.unsubscribe(b),_.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){n={}},a.clearSubscriptions=function(_){var b;for(b in n)Object.prototype.hasOwnProperty.call(n,b)&&b.indexOf(_)===0&&delete n[b]},a.countSubscriptions=function(_){var b,R,x=0;for(b in n)if(Object.prototype.hasOwnProperty.call(n,b)&&b.indexOf(_)===0){for(R in n[b])x++;break}return x},a.getSubscriptions=function(_){var b,R=[];for(b in n)Object.prototype.hasOwnProperty.call(n,b)&&b.indexOf(_)===0&&R.push(b);return R},a.unsubscribe=function(g){var _=function(he){var Z;for(Z in n)if(Object.prototype.hasOwnProperty.call(n,Z)&&Z.indexOf(he)===0)return!0;return!1},b=typeof g=="string"&&(Object.prototype.hasOwnProperty.call(n,g)||_(g)),R=!b&&typeof g=="string",x=typeof g=="function",U=!1,z,G,Y;if(b){a.clearSubscriptions(g);return}for(z in n)if(Object.prototype.hasOwnProperty.call(n,z)){if(G=n[z],R&&G[g]){delete G[g],U=g;break}if(x)for(Y in G)Object.prototype.hasOwnProperty.call(G,Y)&&G[Y]===g&&(delete G[Y],U=!0)}return U}})})(te,te.exports)),te.exports}var ga=pa();const l=da(ga),c=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",AUTH_SCOPE_LOADED:"AUTH.SCOPE.LOADED",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",M5T_SIDE_NAV:"M5T_SIDE_NAV",M5T_SIDE_NAV_TAP:"M5T_SIDE_NAV.TAP",M5T_SIDE_NAV_COLLAPSE:"M5T_SIDE_NAV.COLLAPSE",M5T_SIDE_NAV_LOGO_TAP:"M5T_SIDE_NAV.LOGO_TAP",M5T_SIDE_NAV_ORG_SWITCH:"M5T_SIDE_NAV.ORG_SWITCH",M5T_SIDE_NAV_FOOTER_ACTION:"M5T_SIDE_NAV.FOOTER_ACTION",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),be={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://machfivemagnet-saas.onrender.com"};var ye={};const C=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function ct(t,e=null){if(t in C)return C[t];if(typeof process<"u"&&ye&&ye[t]){const a=ye[t];return a==="true"?!0:a==="false"?!1:isNaN(a)?a:Number(a)}if(typeof import.meta<"u"&&be&&be[t]){const a=be[t];return a==="true"?!0:a==="false"?!1:isNaN(a)?a:Number(a)}return e}function ma(t){return ct(t,!1)===!0}function _a(){return{...C}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:C,getFlag:ct,isEnabled:ma,getAllFlags:_a});function ha(){const t=e=>a=>{const n=a.detail?.pubsubTopic;n&&l.publish(n,a.detail)};document.addEventListener("nav-select",t()),document.addEventListener("logo-click",t()),document.addEventListener("nav-hover",t()),document.addEventListener("nav-double-tap",t()),document.addEventListener("nav-long-tap",t()),document.addEventListener("message-sent",t())}function fa(){console.log("[AppEvents] Initializing event listeners..."),l.subscribe(c.APP_READY,(a,n)=>{console.log("[AppEvents] APP_READY:",n)}),l.subscribe(c.APP_ERROR,(a,n)=>{console.error("[AppEvents] APP_ERROR:",n)}),l.subscribe(c.APP_SIGNOUT,(a,n)=>{console.log("[AppEvents] APP_SIGNOUT:",n)}),l.subscribe(c.ROUTE_NAV_BEFORE,(a,n)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",n),l.publish(c.UI_LOADING_START)}),l.subscribe(c.ROUTE_NAV_AFTER,(a,n)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",n),l.publish(c.UI_LOADING_END)}),l.subscribe(c.ROUTE_NAV_ERROR,(a,n)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",n),l.publish(c.APP_ERROR,{message:"Navigation error",details:n})}),l.subscribe(c.AUTH_SIGNIN_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",n)}),l.subscribe(c.AUTH_SIGNIN_FAIL,(a,n)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",n),l.publish(c.UI_TOAST,{message:n.message||"Sign in failed",type:"danger"})}),l.subscribe(c.AUTH_SIGNUP_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",n),l.publish(c.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),l.publish(c.AUTH_VERIFY_LINK)}),l.subscribe(c.AUTH_VERIFY_LINK,(a,n)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),l.subscribe(c.AUTH_SIGNUP_FAIL,(a,n)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",n),l.publish(c.UI_TOAST,{message:n.message||"Sign up failed",type:"danger"})}),l.subscribe(c.AUTH_SIGNOUT_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",n),l.publish(c.UI_TOAST,{message:"Signed out successfully",type:"info"})}),l.subscribe(c.AUTH_SIGNUP,(a,n)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),l.subscribe(c.AUTH_FORGOT,(a,n)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),l.subscribe(c.AUTH_FORGOT_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",n),l.publish(c.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),l.subscribe(c.AUTH_RESETHASH_NAV,(a,n)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),l.subscribe(c.AUTH_RESETHASH_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",n),l.publish(c.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),l.subscribe(c.AUTH_TOKEN_EXPIRED,(a,n)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",n),l.publish(c.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),l.subscribe(c.I18N_SET_LANG,(a,n)=>{console.log("[AppEvents] I18N_SET_LANG:",n);const{langCode:o}=n;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),l.publish(c.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(i){console.error("[AppEvents] Error changing language:",i),l.publish(c.UI_TOAST,{message:`Failed to change language: ${i.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),l.subscribe("CONVERSATION.PROMPT",(a,n)=>{const o=a.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display prompt in canvas:",n.message),Ee(n.message,"user",n.timestamp),l.publish(c.CANVAS_DO_SCROLL);break;case"AGENT":console.log("[AppEvents] Agent prompt (no implementation):",n.message);break;case"AGENT_CANVAS":console.log("[AppEvents] Display message in canvas:",n.message),Ee(n.message,"user",n.timestamp),l.publish(c.CANVAS_DO_SCROLL);break;case"STAGE":console.log("[AppEvents] Stage prompt for editing:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${o}`);break}}),l.subscribe("CONVERSATION.RESPONSE",(a,n)=>{const o=a.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display response in canvas:",n.message),Ee(n.message,"assistant",n.timestamp,n.streaming);break;case"WORKFLOW":console.log("[AppEvents] Send response to workflow engine:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${o}`);break}}),l.subscribe(c.UI_LOADING_START,(a,n)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),l.subscribe(c.UI_LOADING_END,(a,n)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),l.subscribe(c.UI_TOAST,(a,n)=>{console.log("[AppEvents] UI_TOAST:",n)}),l.subscribe(c.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const a="0.1",n=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${a} 7/4/2026, 10:24:48 AM|© ${n} Mach Five Tech`,"night")}),ha(),l.subscribe("M5T_PRIMARY_NAV",(a,n)=>{const o=a.split(".")[1];switch(o){case"TAP":t(n);break;case"LOGO_TAP":e();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function t(a){const{token:n,level:o,primaryToken:i}=a;switch(n){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),l.publish(c.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${n}`,{primaryToken:i});break}}function e(a){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 7/4/2026, 10:24:48 AM|© ${o} Mach Five Tech`,"night",5e3)}l.subscribe(c.AUTH_SIGNOUT,(a,n)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(C.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}function Ee(t,e="user",a=null,n=!1){const o=document.getElementById("chat-messages");if(!o){console.warn("[AppEvents] chat-messages element not found - may not be on home route");return}if(a||(a=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})),n&&e==="assistant"){const s=o.firstElementChild;if(s&&s.tagName.toLowerCase()==="m5t-chat-response"){s.setAttribute("message",t),console.log(`[AppEvents] Updated streaming ${e} bubble (${t.length} chars)`);return}}let i;e==="user"||e==="prompt"?i=document.createElement("m5t-chat-prompt"):i=document.createElement("m5t-chat-response"),i.setAttribute("message",t),i.setAttribute("timestamp",a),o.prepend(i),console.log(`[AppEvents] Added ${e} bubble to canvas (${t.length} chars)`)}class A{static CONFIG={BASE_URL:"https://machfivemagnet-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink",SCOPE:"sse_session_scope",ACTIVE_ORG:"sse_active_org"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",ME:"/m5t/v5/acctEntity/me",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#o=null;static#a=null;static#n=!1;static#i=null;static#r=null;static async init({BASE_URL:e,navigateFunction:a,customConfig:n={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(a&&typeof a=="function")this.#r=a;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#l(),this.#u(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#u(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{if(e){if((window.location.hash||"").startsWith("#/accept-invite")&&(e==="splash"||e==="signin")){console.log("[AuthController] Ignoring mvvLegit redirect to",e,"— keeping invitee on accept-invite");return}console.log("[AuthController] mvvLegit navigation to:",e),this.#s(e)}}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#h();break;case"UNAUTH":case 1:this.#f();break;case"UNVERF":case 2:this.#v();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#s(e){if(!this.#r){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const a=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",a),this.#r(a)}static#l(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#o=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#o?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#o=null}this.#i=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);e&&(this.#a=JSON.parse(e),console.log("[AuthController] Scope state loaded (cached):",this.#a?.uiMode))}catch(e){console.error("[AuthController] Error loading scope state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#a=null}}static#d(e){try{this.#o=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(a){console.error("[AuthController] Error saving entity state:",a)}}static#p(){this.#o=null,this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}}static getEntity(){return this.#o}static#c(e){try{this.#a=e,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(e))}catch(a){console.error("[AuthController] Error saving scope state:",a)}}static async fetchScope(){if(typeof mvvLegit>"u"||!this.isAuthenticated())return console.log("[AuthController] fetchScope skipped — not authenticated"),this.#a;if(this.#n)return this.#a;this.#n=!0;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),a=e?`?org=${encodeURIComponent(e)}`:"",n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${a}`);if(n.status===401||n.status===403)return console.warn("[AuthController] /me unauthorized — signing out"),this.doSignout(!0),null;if(!n.ok)return console.warn(`[AuthController] /me failed (${n.status}) — using cached scope`),this.#a;const o=await n.json();return o?.ok?(this.#c(o),l.publish(c.AUTH_SCOPE_LOADED,o),console.log(`[AuthController] Scope loaded: ${o.uiMode} (${o.memberships?.length||0} org(s))`),o):(console.warn("[AuthController] /me returned not-ok — using cached scope"),this.#a)}catch(e){return console.error("[AuthController] fetchScope error:",e),this.#a}finally{this.#n=!1}}static async setActiveOrg(e){try{e?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,e):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#a}static getCapabilities(){return this.#a?.capabilities||[]}static getUiMode(){return this.#a?.uiMode||"self_serve"}static getActiveOrg(){return this.#a?.activeOrg||null}static getMemberships(){return this.#a?.memberships||[]}static async doSignin(e,a){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:a})}),o=await n.json();return n.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#d(o.entity)),setTimeout(()=>{this.#s(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):n.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#d(o.entity),this.fetchScope(),console.log("[AuthController] Explicitly navigating to home"),this.#s(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(n){return console.error("[AuthController] Signin error:",n),{ok:!1,error:n.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const a=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!a),!e&&a){const n=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(a)}`;if(console.log("[AuthController] Sending signout beacon to:",n),navigator.sendBeacon){const o=navigator.sendBeacon(n);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else a||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#p(),console.log("[AuthController] Stopping auth ping..."),this.#m(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(a){console.error("[AuthController] Signout error:",a),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const a=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await a.json();return a.ok&&n.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#d(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||"Sign up failed",data:n}}catch(a){return console.error("[AuthController] Signup error:",a),{ok:!1,error:a.message}}}static async doResetHash(e,a){try{const n=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:a,modified_by:e})}),i=await o.json();return o.ok&&i.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:i}):{ok:!1,error:i.error||"Password reset failed",data:i}}catch(n){return console.error("[AuthController] Reset password error:",n),{ok:!1,error:n.message}}}static#g(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#_()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#m(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#_(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#i=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#i}static clearDeepLink(){this.#i=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#h(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.fetchScope()}static#f(){console.log("[AuthController] User unauthenticated"),this.#m()}static#v(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",a=localStorage.getItem(e);if(!a)return"UNAUTH";if(typeof LZString>"u")return null;const n=LZString.decompressFromUTF16(a),i=JSON.parse(n)?.state;return i===1?"UNAUTH":i===2?"UNVERF":i===4?"AUTH":i===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#s(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#_()}}class v{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_dashboard:"Dashboard",nav_dashboard_tagline:"Overview of your activity",nav_magnets:"Your Magnets",nav_magnets_tagline:"Manage your conversational magnets",nav_templates:"Templates",nav_templates_tagline:"Start from a magnet template",nav_conversations:"Conversations",nav_conversations_tagline:"Captured lead conversations",nav_ab_testing:"A/B Testing",nav_ab_testing_tagline:"Experiment and optimize",nav_analytics:"Analytics",nav_analytics_tagline:"Performance and ad metrics",nav_ad_accounts:"Ad Accounts",nav_ad_accounts_tagline:"Connect advertising accounts",nav_clients:"Clients",nav_clients_tagline:"Manage your client accounts",nav_team:"Team",nav_team_tagline:"Invite and manage teammates",nav_billing:"Billing",nav_billing_tagline:"Plan, usage, and invoices",nav_settings:"Settings",nav_settings_tagline:"Account and workspace settings",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:a,whitelabel:n,lang:o}){e&&(this.#t.buildMode=e),a&&(this.#t.product=a),n&&(this.#t.whitelabel=n),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(e,a={}){const n={...this.#t,...a},{buildMode:o,product:i,whitelabel:s,lang:r}=n;try{const d=this.#e[o]?.[i]?.[s]?.[r]?.[e];return d?Array.isArray(d)?d[Math.floor(Math.random()*d.length)]:d:(console.warn(`[MicrocopyManager] Token not found: ${e} (${o}/${i}/${s}/${r})`),null)}catch(d){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,d),null}}static getAll(e={}){const a={...this.#t,...e},{buildMode:n,product:o,whitelabel:i,lang:s}=a;try{return this.#e[n]?.[o]?.[i]?.[s]||null}catch(r){return console.error("[MicrocopyManager] Error retrieving all tokens",r),null}}static has(e,a={}){const n={...this.#t,...a},{buildMode:o,product:i,whitelabel:s,lang:r}=n;try{return!!this.#e[o]?.[i]?.[s]?.[r]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:a,whitelabel:n}=this.#t;try{return Object.keys(this.#e[e]?.[a]?.[n]||{})}catch{return[]}}static update(e,a,n={}){const o={...this.#t,...n},{buildMode:i,product:s,whitelabel:r,lang:d}=o;try{return this.#e[i]||(this.#e[i]={}),this.#e[i][s]||(this.#e[i][s]={}),this.#e[i][s][r]||(this.#e[i][s][r]={}),this.#e[i][s][r][d]||(this.#e[i][s][r][d]={}),this.#e[i][s][r][d][e]=a,!0}catch(p){return console.error(`[MicrocopyManager] Error updating token: ${e}`,p),!1}}static delete(e,a={}){const n={...this.#t,...a},{buildMode:o,product:i,whitelabel:s,lang:r}=n;try{return delete this.#e[o]?.[i]?.[s]?.[r]?.[e],!0}catch(d){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,d),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(a){return console.error("[MicrocopyManager] Error importing data",a),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:v});class H{static#e=!1;static#t=null;static#o=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#n();v.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),C.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#i(),this.#u(),this.#e=!0,this.refresh()}static#a(e){const a={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},n=e.toLowerCase();return a[n]||"DEV"}static#n(){const a=this.#a("production"),n=localStorage.getItem(C.FF_SSE_LS_WHITELABEL)||C.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(C.FF_SSE_LS_USER_LANG)||C.FF_SSE_I18N_LANG;return{buildMode:a,product:C.FF_SSE_I18N_PRODUCT,whitelabel:n,lang:o}}static#i(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,a,n)=>{C.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",n),this.#t=n,setTimeout(()=>{this.refresh()},C.FF_SSE_I18N_APPLY_DELAY_MS)},C.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#r())}static#r(){setInterval(()=>{const a=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");a&&a!==this.#t&&(this.#t=a,this.refresh())},500)}static#u(){this.#o||(this.#o=new MutationObserver(e=>{let a=!1;for(const n of e){for(const o of n.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){a=!0;break}if(a)break}a&&(C.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#o.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#s(document.body),this.#l(document.body),C.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#s(e){const a=e.querySelectorAll("[data-meta-copywrite-i118n]");C.FF_SSE_I18N_DEBUG&&a.length>0&&console.log(`[I18nController] Processing ${a.length} elements`),a.forEach(n=>{try{const o=n.getAttribute("data-meta-copywrite-i118n"),i=JSON.parse(o);if(!i.token){console.warn("[I18nController] Missing token in config:",i);return}const s=i.attribute||"textContent",r=v.get(i.token);if(r===null){console.warn(`[I18nController] Microcopy not found for token: ${i.token}`);return}s==="textContent"?n.textContent=r:s==="innerHTML"?n.innerHTML=r:n.setAttribute(s,r),C.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${r}" to ${s} for token: ${i.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,n)}})}static#l(e){e.querySelectorAll("*").forEach(n=>{n.shadowRoot&&(this.#s(n.shadowRoot),this.#l(n.shadowRoot))})}static setLanguage(e){const a=v.getAvailableLanguages();if(!a.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,a);return}localStorage.setItem(C.FF_SSE_LS_USER_LANG,e),v.setContext({lang:e}),console.log("[I18nController] Language changed to:",e);const n=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(e){localStorage.setItem(C.FF_SSE_LS_WHITELABEL,e),v.setContext({whitelabel:e}),C.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return v.getContext().lang}static getAvailableLanguages(){return v.getAvailableLanguages()}static getContext(){return v.getContext()}static destroy(){this.#o&&(this.#o.disconnect(),this.#o=null),this.#e=!1,this.#t=null,C.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{H.initialize()}):H.initialize());class xe{static _initialized=!1;static _debug=!1;static init(e={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=e.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const a=n=>{this._handleSSEMessage(n)};return window.mvvSSEther.onmessage(a),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(e){try{this._debug&&console.log("[MachVive] SSE message received:",e);const a=e?.data;if(!a){this._debug&&console.log("[MachVive] No data in message, skipping");return}const n=a.data||a.package||a;if(!n){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=n.cfg;const i=n.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",i)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(r){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:r.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const s=o?.topic;if(!s){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",s),!this._isValidTopic(s)){console.warn(`[MachVive] Topic '${s}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(s,i,e,a)}catch(a){console.error("[MachVive] Error handling SSE message:",a)}}static _isValidTopic(e){return!c||!c.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,a,n,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const i=window.PubSub||PubSub,s={message:a,metadata:{source:"sse",sseEventId:n.id,timestamp:n.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${e}':`,s);const r=c[e];console.log(`[MachVive] AppBroadcast.${e} = '${r}'`),i.publish(r,s),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(i){console.error(`[MachVive] Error publishing to topic '${e}':`,i)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=xe);typeof window<"u"&&(window.MachVive=xe);const Ve="m5t_sidenav_collapsed",va={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class ba extends HTMLElement{static get observedAttributes(){return["data-active-token","data-collapsed"]}constructor(){super(),this.attachShadow({mode:"open"}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=e=>{if(this.getAttribute("data-open")==="true"){if(e.key==="Escape"){e.preventDefault(),this.closeDrawer();return}if(e.key==="Tab"){const a=this.#p();if(a.length<2)return;const n=a[0],o=a[a.length-1],i=this.shadowRoot.activeElement;e.shiftKey&&i===n?(e.preventDefault(),o.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),n.focus())}}};#o=()=>{this.closeDrawer(),this.#c()};connectedCallback(){if(!this.hasAttribute("data-collapsed"))try{localStorage.getItem(Ve)==="true"&&this.setAttribute("data-collapsed","true")}catch{}this.activeToken=this.getAttribute("data-active-token")||null,this.render(),this.#l(),this.addEventListener("keydown",this.#t),this.#e=window.matchMedia("(max-width: 768px)"),this.#e.addEventListener("change",this.#o),this.#c()}disconnectedCallback(){this.removeEventListener("keydown",this.#t),this.#e?.removeEventListener("change",this.#o)}attributeChangedCallback(e,a,n){a===n||!this.shadowRoot||(e==="data-active-token"?(this.activeToken=n,this.#d()):e==="data-collapsed"&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:e,orgs:a,activeOrg:n,footerBadge:o,loading:i}={}){e!==void 0&&(this.items=Array.isArray(e)?e:this.#a(e)||[]),a!==void 0&&(this.orgs=Array.isArray(a)?a:this.#a(a)||[]),n!==void 0&&(this.activeOrgGuid=n||null),o!==void 0&&(this.footerBadge=o||null),i!==void 0&&(this.loading=!!i),this.shadowRoot&&(this.render(),this.#l())}setButtons(e){this.setState({buttons:e})}setOrgs(e){this.setState({orgs:e})}setActiveOrgGuid(e){this.setState({activeOrg:e})}setFooterBadge(e){this.setState({footerBadge:e})}setActiveToken(e){this.activeToken=e||null,this.#d()}toggleCollapsed(e){const a=typeof e=="boolean"?e:this.getAttribute("data-collapsed")!=="true";this.setAttribute("data-collapsed",String(a));try{localStorage.setItem(Ve,String(a))}catch{}this.dispatchEvent(new CustomEvent("nav-collapse",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.COLLAPSE",collapsed:a,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute("data-open","true"),this.shadowRoot.querySelector(".hamburger")?.setAttribute("aria-expanded","true"),this.#c(),(this.#p()[0]||this.shadowRoot.querySelector(".sidenav"))?.focus?.()}closeDrawer(){if(this.getAttribute("data-open")!=="true")return;this.removeAttribute("data-open");const e=this.shadowRoot.querySelector(".hamburger");e?.setAttribute("aria-expanded","false"),this.#c(),e&&this.#e?.matches?e.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute("data-open")==="true"?this.closeDrawer():this.openDrawer()}#a(e){try{return e?JSON.parse(e):null}catch(a){return console.error("[M5TSideNav] bad JSON:",a),null}}#n(e){return String(e??"").replace(/[&<>"']/g,a=>va[a])}#i(e){return e?`<span class="ms" aria-hidden="true">${this.#n(e)}</span>`:""}#r(e){if(!e||!e.token)return"";const a=e.token===this.activeToken,n=e.route||"#",o=n.startsWith("#")?n:`#${n}`,i=typeof e.count=="number"&&e.count>0?`<span class="badge">${e.count}</span>`:"";return`
      <a class="nav-item${a?" active":""}" href="${this.#n(o)}"
         data-token="${this.#n(e.token)}" data-route="${this.#n(n)}"
         ${a?'aria-current="page"':""}
         ${e.tagline?`title="${this.#n(e.tagline)}"`:""}>
        ${this.#i(e.icon)}
        <span class="label">${this.#n(e.caption||e.token)}</span>
        ${i}
      </a>`}#u(){return this.loading?Array.from({length:6}).map(()=>'<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>').join(""):this.items.map(e=>e&&e.group&&Array.isArray(e.items)?`
          <div class="nav-group">
            <div class="group-label">${this.#n(e.caption||"")}</div>
            ${e.items.map(a=>this.#r(a)).join("")}
          </div>`:this.#r(e)).join("")}#s(){const e=this.footerBadge,a=Array.isArray(this.orgs)&&this.orgs.length>1?`
      <label class="org-switcher" title="Active organization">
        ${this.#i("corporate_fare")}
        <select class="org-select" aria-label="Active organization">
          ${this.orgs.map(o=>`<option value="${this.#n(o.guid)}" ${o.guid===this.activeOrgGuid?"selected":""}>${this.#n(o.name||o.guid)}</option>`).join("")}
        </select>
      </label>`:"",n=e?`<span class="footer-badge">${this.#i(e.icon||"verified")}<span>${this.#n(e.caption||"")}</span></span>`:"";return`
      ${a}
      ${n}
      <div class="footer-actions">
        <button class="footer-action" type="button" data-action="account" aria-label="Account" title="Account">${this.#i("account_circle")}<span>Account</span></button>
        <button class="footer-action" type="button" data-action="lang" aria-label="Language" title="Language">${this.#i("language")}<span>Language</span></button>
        <button class="footer-action" type="button" data-action="signout" aria-label="Sign out" title="Sign out">${this.#i("logout")}<span>Sign out</span></button>
      </div>`}render(){const e=this.getAttribute("data-collapsed")==="true";this.shadowRoot.innerHTML=`
      <style>
        :host { --sidenav-width: 260px; --sidenav-width-collapsed: 68px; display: block; }
        :host([hidden]) { display: none; }

        .sidenav {
          position: fixed; inset: 0 auto 0 0;
          width: var(--sidenav-width);
          background: var(--color-sidebar, #0F2435);
          color: var(--color-sidebar-text, rgba(242,247,251,0.72));
          display: flex; flex-direction: column;
          box-shadow: 2px 0 10px rgba(0,0,0,0.18);
          z-index: 90;
          font-family: var(--font-body, 'Inter', system-ui, sans-serif);
          transition: width 0.2s ease, transform 0.2s ease;
          overflow: hidden;
        }
        :host([data-collapsed="true"]) .sidenav { width: var(--sidenav-width-collapsed); }

        /* Material Symbols (rule must live in the shadow root; the @font-face from
           the document still applies across the boundary). */
        .ms {
          font-family: 'Material Symbols Outlined';
          font-weight: normal; font-style: normal; font-size: 22px; line-height: 1;
          letter-spacing: normal; text-transform: none; display: inline-block;
          white-space: nowrap; direction: ltr; flex: 0 0 auto;
          -webkit-font-feature-settings: 'liga'; -webkit-font-smoothing: antialiased;
        }

        .header {
          display: flex; align-items: center; gap: 12px;
          padding: 18px 16px 18px 20px;
          border-bottom: 1px solid var(--color-sidebar-border, rgba(255,255,255,0.08));
        }
        .logo { display: flex; align-items: center; gap: 10px; cursor: pointer; min-width: 0; background: none; border: 0; padding: 0; color: inherit; }
        .logo img { width: 28px; height: 28px; display: block; flex: 0 0 auto; }
        .logo .wordmark {
          font-family: var(--font-display, 'Inter', system-ui, sans-serif);
          font-size: 1.05rem; font-weight: 600; letter-spacing: -0.01em;
          color: var(--color-sidebar-text-active, #F2F7FB); white-space: nowrap;
        }
        .logo .wordmark b { color: var(--color-sidebar-accent, #22A0FF); font-weight: 700; }
        .collapse-btn {
          margin-left: auto; appearance: none; background: transparent; border: 0; cursor: pointer;
          color: var(--color-sidebar-text, rgba(242,247,251,0.72));
          display: grid; place-items: center; width: 32px; height: 32px; border-radius: 8px;
          transition: background 0.15s ease, color 0.15s ease; flex: 0 0 auto;
        }
        .collapse-btn:hover { background: var(--color-sidebar-2, #17334A); color: var(--color-sidebar-text-active, #F2F7FB); }

        .nav { flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 16px 0; }
        .nav-group { padding: 6px 0; }
        .group-label {
          padding: 8px 20px 4px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--color-sidebar-text, rgba(242,247,251,0.5)); opacity: 0.7;
        }

        /* Loading skeleton (shown while tenancy scope resolves on a cold sign-in) */
        .nav-skel { display: flex; align-items: center; gap: 12px; padding: 13px 20px; }
        .skel-dot { width: 22px; height: 22px; border-radius: 6px; background: rgba(255,255,255,0.08); flex: 0 0 auto; animation: m5t-skel 1.2s ease-in-out infinite; }
        .skel-bar { height: 10px; border-radius: 5px; background: rgba(255,255,255,0.08); flex: 1 1 auto; max-width: 58%; animation: m5t-skel 1.2s ease-in-out infinite; }
        @keyframes m5t-skel { 0%, 100% { opacity: 0.45; } 50% { opacity: 0.9; } }

        .nav-item {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 20px;
          color: var(--color-sidebar-text, rgba(242,247,251,0.72));
          text-decoration: none; font-weight: 500; font-size: 0.95rem;
          border-left: 3px solid transparent; transition: background 0.15s ease, color 0.15s ease;
          white-space: nowrap;
        }
        .nav-item:hover { background: rgba(255,255,255,0.05); color: var(--color-sidebar-text-active, #F2F7FB); }
        .nav-item.active {
          background: color-mix(in srgb, var(--color-sidebar-accent, #22A0FF) 16%, transparent);
          color: var(--color-sidebar-text-active, #F2F7FB);
          border-left-color: var(--color-sidebar-accent, #22A0FF);
        }
        .nav-item.active .ms { color: var(--color-sidebar-accent, #22A0FF); }
        .nav-item .label { flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; }
        .badge {
          flex: 0 0 auto; min-width: 20px; height: 20px; padding: 0 6px; border-radius: 10px;
          background: var(--color-sidebar-accent, #22A0FF); color: #06243a;
          font-size: 0.7rem; font-weight: 700; display: grid; place-items: center;
        }

        .footer {
          padding: 14px 16px; border-top: 1px solid var(--color-sidebar-border, rgba(255,255,255,0.08));
          display: flex; flex-direction: column; gap: 12px;
        }
        .org-switcher {
          display: flex; align-items: center; gap: 8px;
          background: var(--color-sidebar-2, #17334A); border-radius: 8px; padding: 6px 10px;
        }
        .org-switcher .ms { font-size: 18px; color: var(--color-sidebar-accent, #22A0FF); }
        .org-select {
          flex: 1 1 auto; min-width: 0; background: transparent; border: 0;
          color: var(--color-sidebar-text-active, #F2F7FB); font: inherit; font-size: 0.82rem;
          cursor: pointer; outline: none;
        }
        .org-select option { color: #0B1220; } /* native dropdown list paints light */
        .footer-badge {
          display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px;
          background: color-mix(in srgb, var(--color-sidebar-accent, #22A0FF) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--color-sidebar-accent, #22A0FF) 30%, transparent);
          color: var(--color-sidebar-text-active, #F2F7FB); font-size: 0.78rem; font-weight: 600;
          align-self: flex-start;
        }
        .footer-badge .ms { font-size: 18px; }
        .footer-actions { display: flex; gap: 4px; }
        .footer-action {
          flex: 1 1 0; display: flex; flex-direction: column; align-items: center; gap: 4px;
          background: transparent; border: 0; cursor: pointer; padding: 8px 4px; border-radius: 8px;
          color: var(--color-sidebar-text, rgba(242,247,251,0.72)); font: inherit; font-size: 0.66rem; font-weight: 500;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .footer-action:hover { background: rgba(255,255,255,0.06); color: var(--color-sidebar-text-active, #F2F7FB); }
        .footer-action .ms { font-size: 20px; }

        /* Collapsed (icon-only) */
        :host([data-collapsed="true"]) .logo .wordmark,
        :host([data-collapsed="true"]) .group-label,
        :host([data-collapsed="true"]) .nav-item .label,
        :host([data-collapsed="true"]) .nav-item .badge,
        :host([data-collapsed="true"]) .org-switcher,
        :host([data-collapsed="true"]) .skel-bar,
        :host([data-collapsed="true"]) .footer-action span:not(.ms),
        :host([data-collapsed="true"]) .footer-badge span:not(.ms) { display: none; }
        :host([data-collapsed="true"]) .nav-item { justify-content: center; gap: 0; padding-left: 0; padding-right: 0; }
        /* Header stacks: logo mark on top, expand chevron centered below it. */
        :host([data-collapsed="true"]) .header { flex-direction: column; justify-content: center; gap: 10px; padding: 16px 0; }
        :host([data-collapsed="true"]) .logo { justify-content: center; gap: 0; }
        :host([data-collapsed="true"]) .collapse-btn { margin-left: 0; }
        /* Footer becomes a centered icon stack: persona badge, then account/lang/sign-out
           (sign-out anchored at the bottom). Reset the row-layout flex so icons don't stretch. */
        :host([data-collapsed="true"]) .footer { padding: 12px 0 16px; align-items: center; gap: 10px; }
        :host([data-collapsed="true"]) .footer-badge { padding: 8px; align-self: center; }
        :host([data-collapsed="true"]) .footer-actions { flex-direction: column; gap: 4px; width: auto; }
        :host([data-collapsed="true"]) .footer-action { flex: 0 0 auto; justify-content: center; width: 40px; height: 40px; padding: 0; border-radius: 8px; }

        /* Hamburger + scrim: desktop hidden; shown on mobile (off-canvas drawer) */
        .hamburger, .scrim { display: none; }

        @media (max-width: 768px) {
          .sidenav { transform: translateX(-100%); width: var(--sidenav-width); box-shadow: 4px 0 24px rgba(0,0,0,0.4); }
          :host([data-open="true"]) .sidenav { transform: translateX(0); }
          :host([data-collapsed="true"]) .sidenav { width: var(--sidenav-width); }
          .collapse-btn { display: none; } /* collapse is a desktop-only affordance */

          .hamburger {
            display: grid; place-items: center;
            position: fixed; top: 12px; left: 12px; z-index: 1100;
            width: 44px; height: 44px; border-radius: 10px; border: 0; cursor: pointer;
            background: var(--color-sidebar, #0F2435);
            color: var(--color-sidebar-text-active, #F2F7FB);
            box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.18));
          }
          .hamburger .ms { font-size: 24px; }
          :host([data-open="true"]) .hamburger { display: none; }

          .scrim { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 88; }
          :host([data-open="true"]) .scrim { display: block; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sidenav { transition: none; }
        }
      </style>

      <button class="hamburger" type="button" aria-label="Open navigation menu"
        aria-expanded="${this.getAttribute("data-open")==="true"?"true":"false"}" aria-controls="m5t-sidenav-aside">
        <span class="ms" aria-hidden="true">menu</span>
      </button>
      <div class="scrim" part="scrim"></div>

      <aside class="sidenav" id="m5t-sidenav-aside" part="sidenav">
        <div class="header">
          <button class="logo" type="button" aria-label="Mach Five Magnet — home">
            <img src="/m5m-mark.svg" alt="" width="28" height="28" />
            <span class="wordmark">Mach Five <b>Magnet</b></span>
          </button>
          <button class="collapse-btn" type="button" aria-label="Toggle sidebar"
            aria-expanded="${e?"false":"true"}">
            <span class="ms" aria-hidden="true">${e?"chevron_right":"chevron_left"}</span>
          </button>
        </div>

        <nav class="nav" aria-label="Primary"${this.loading?' aria-busy="true"':""}>
          ${this.#u()}
        </nav>

        <div class="footer" part="footer">
          ${this.#s()}
        </div>
      </aside>
    `}#l(){this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",a=>{a.metaKey||a.ctrlKey||a.shiftKey||a.button===1||(a.preventDefault(),this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.TAP",token:e.getAttribute("data-token"),route:e.getAttribute("data-route"),caption:e.querySelector(".label")?.textContent||"",timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(".collapse-btn")?.addEventListener("click",()=>this.toggleCollapsed()),this.shadowRoot.querySelector(".hamburger")?.addEventListener("click",()=>this.toggleDrawer()),this.shadowRoot.querySelector(".scrim")?.addEventListener("click",()=>this.closeDrawer()),this.#c(),this.shadowRoot.querySelector(".logo")?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.LOGO_TAP",timestamp:Date.now()}}))}),this.shadowRoot.querySelector(".org-select")?.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("org-switch",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.ORG_SWITCH",orgGuid:e.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(".footer-action").forEach(e=>{e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("footer-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.FOOTER_ACTION",action:e.getAttribute("data-action"),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute("data-open")==="true"&&this.#p()[0]?.focus()}#d(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{const a=e.getAttribute("data-token")===this.activeToken;e.classList.toggle("active",a),a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}#p(){return Array.from(this.shadowRoot.querySelectorAll(".sidenav a[href], .sidenav button:not([disabled]), .sidenav select")).filter(e=>e.offsetParent!==null)}#c(){const e=this.shadowRoot?.querySelector(".sidenav");if(!e)return;const a=this.#e?this.#e.matches:window.matchMedia("(max-width: 768px)").matches;e.inert=a&&this.getAttribute("data-open")!=="true"}}customElements.define("m5t-side-nav",ba);class ge{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"LEADS",caption:"Leads",enabled:!0,icon:"fas fa-user-plus",admin_role:!1,tagline:"Lead management and tracking",secondary:[{token:"LEADS_MANAGE",caption:"Manage",enabled:!0,icon:"fas fa-list-ul",admin_role:!1,tagline:"Manage leads (CRUD operations)",secondary:[]},{token:"LEADS_EXPORT",caption:"Export",enabled:!0,icon:"fas fa-file-export",admin_role:!1,tagline:"Export leads to external systems",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static#o={"client-saas":[{token:"DASHBOARD",caption:"Dashboard",icon:"dashboard",route:"/home",capability:"view_dashboard",enabled:!0,tagline:"Overview of your activity"},{token:"MAGNETS",caption:"Your Magnets",icon:"widgets",route:"/magnets",capability:"view_magnets",enabled:!0,tagline:"Manage your conversational magnets",children:[{token:"MAGNETS_ALL",caption:"All",route:"/magnets",capability:"view_magnets"},{token:"MAGNETS_DRAFTS",caption:"Drafts",route:"/magnets/drafts",capability:"view_magnets"},{token:"MAGNETS_ARCHIVED",caption:"Archived",route:"/magnets/archived",capability:"view_magnets"}]},{token:"TEMPLATES",caption:"Templates",icon:"content_copy",route:"/templates",capabilityAny:["provision_magnets","manage_magnets"],enabled:!0,tagline:"Start from a magnet template"},{token:"CONVERSATIONS",caption:"Conversations",icon:"forum",route:"/conversations",capability:"view_conversations",enabled:!0,tagline:"Captured lead conversations"},{token:"AB_TESTING",caption:"A/B Testing",icon:"science",route:"/ab-testing",capability:"manage_magnets",enabled:!0,tagline:"Experiment and optimize"},{token:"ANALYTICS",caption:"Analytics",icon:"monitoring",route:"/analytics",capability:"view_stats",enabled:!0,tagline:"Performance and ad metrics",children:[{token:"ANALYTICS_OVERVIEW",caption:"Overview",route:"/analytics",capability:"view_stats"},{token:"ANALYTICS_CONVERSIONS",caption:"Conversions",route:"/analytics/conversions",capability:"view_stats"},{token:"ANALYTICS_ADS",caption:"Ad Performance",route:"/analytics/ad-performance",capability:"view_ad_metrics"}]},{token:"AD_ACCOUNTS",caption:"Ad Accounts",icon:"ads_click",route:"/ad-accounts",capability:"connect_ad_accounts",enabled:!0,tagline:"Connect advertising accounts"},{token:"CLIENTS",caption:"Clients",icon:"groups",route:"/clients",capability:"create_client_accounts",enabled:!0,tagline:"Manage your client accounts"},{token:"TEAM",caption:"Team",icon:"group",route:"/team",capability:"manage_team",enabled:!0,tagline:"Invite and manage teammates"},{token:"BILLING",caption:"Billing",icon:"receipt_long",route:"/billing",capability:"view_billing",enabled:!0,tagline:"Plan, usage, and invoices"},{token:"SETTINGS",caption:"Settings",icon:"settings",route:"/settings",capability:null,enabled:!0,tagline:"Account and workspace settings",children:[{token:"SETTINGS_GENERAL",caption:"General",route:"/settings",capability:null},{token:"SETTINGS_WORKSPACE",caption:"Workspace",route:"/settings/workspace",capability:null},{token:"SETTINGS_INTEGRATIONS",caption:"Integrations",route:"/settings/integrations",capability:null},{token:"SETTINGS_SECURITY",caption:"Security",route:"/settings/security",capability:null}]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#a(e){if(!e)return e;const a=e.token.toLowerCase(),n=`nav_${a}`,o=`nav_${a}_tagline`,i=v.get(n)||e.caption,s=v.get(o)||e.tagline;return{...e,caption:i,tagline:s,secondary:e.secondary?e.secondary.map(r=>this.#a(r)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(a=>this.#a(a)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),a=[];return e.forEach(n=>{a.push(n),n.secondary&&n.secondary.length>0&&a.push(...n.secondary)}),a}static getNavByToken(e){return this.getFlattenedNav().find(n=>n.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(a=>a.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(a=>a.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#n(e){if(!e||!e.token)return e;const a=e.token.toLowerCase();return{...e,caption:v.get(`nav_${a}`)||e.caption,tagline:v.get(`nav_${a}_tagline`)||e.tagline}}static getSideNav(e=[],{uiMode:a=null}={}){const n=this.#o[this.#e]?this.#e:"client-saas",o=this.#o[n]||[],i=Array.isArray(e)?e:[],s=d=>d.capability==null&&!d.capabilityAny?!0:!(d.capability&&!i.includes(d.capability)||d.capabilityAny&&!d.capabilityAny.some(p=>i.includes(p))),r=[];for(const d of o)if(d.group&&Array.isArray(d.items)){if(!s(d))continue;const p=d.items.filter(s).map(m=>this.#n(m));p.length&&r.push({...this.#n(d),items:p})}else if(s(d)){const p=this.#n(d);Array.isArray(d.children)&&d.children.length&&(p.children=d.children.filter(s).map(m=>this.#n(m))),r.push(p)}return r}static getSideNavJSON(e=[],a={}){return JSON.stringify(this.getSideNav(e,a))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const a=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,n=await fetch(`${e}/coreMeta?meta_token=${a}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();const o=await n.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${a}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(a){return console.error("[NavMetaManager] Error fetching from coreMeta:",a),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:ge});class ya extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.hideLogo=!1,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.hideLogo=this.getAttribute("data-hide-logo")==="true",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const e=ge.getPrimaryNav();e&&e.length>0?(this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const a=this.buttons.find(n=>n.selected);this.selectedPrimaryToken=a?a.token:this.buttons[0]?.token||null}catch(a){console.error("[M5TPrimaryNav] Error parsing buttons:",a),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(a=>a.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,a){if(a==="primary"){const n=this.buttons.find(o=>o.token===e);return{caption:n?.caption||"",tagline:n?.tagline||""}}else for(const n of this.buttons)if(n.secondary){const o=n.secondary.find(i=>i.token===e);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const e=this.getSecondaryButtons(),a=e.length>0,n=!Array.isArray(this.buttons)||this.buttons.length===0;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
        }
        /* Author :host display rule beats the UA [hidden] rule — restore hide-on-hidden. */
        :host([hidden]) { display: none; }

        /* Brand palette (inherits CSS vars from the host page; falls back to brand hex) */
        :host {
          --nav-bg: #ffffff;
          --nav-border: var(--color-border, #e2e8f0);
          --nav-text: #475569;
          --nav-text-strong: #0f172a;
          --nav-muted: #64748b;
          --nav-accent: #0284c7;
          --nav-accent-soft: #f0f9ff;
          --nav-surface: #f8fafc;
        }

        .nav-wrapper {
          background: var(--nav-bg);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
        }
        /* Spacer mode (no buttons): keep the bar's height to avoid layout shift,
           but make it invisible (transparent border preserves the exact box height). */
        .nav-wrapper.is-spacer {
          background: transparent;
          border-bottom-color: transparent;
          box-shadow: none;
        }

        /* Hide scrollbars but keep horizontal scroll for many items */
        .nav-container,
        .secondary-nav {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .nav-container::-webkit-scrollbar,
        .secondary-nav::-webkit-scrollbar { display: none; }

        .nav-container {
          display: flex;
          align-items: stretch;
          height: 60px;
          background: var(--nav-bg);
        }

        .secondary-nav {
          display: flex;
          align-items: stretch;
          min-height: 44px;
          background: var(--nav-surface);
          border-top: 1px solid var(--nav-border);
        }

        .logo {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 20px;
          cursor: pointer;
          user-select: none;
          border-right: 1px solid var(--nav-border);
          transition: background 0.2s ease;
        }
        .logo:hover { background: var(--nav-surface); }
        .logo-mark { width: 28px; height: 28px; display: block; }
        .logo-text {
          font-family: var(--font-display, 'Inter', system-ui, sans-serif);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--nav-text-strong);
          white-space: nowrap;
        }
        .logo-text b { color: var(--nav-accent); font-weight: 700; }

        .nav-button {
          flex: 1 1 0;
          min-width: max-content;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          background: transparent;
          color: var(--nav-text);
          border: none;
          border-bottom: 2px solid transparent;
          font-family: var(--font-body, 'Inter', system-ui, sans-serif);
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          cursor: pointer;
          transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
          outline: none;
          padding: 8px 16px;
          white-space: nowrap;
        }

        .nav-button:hover:not(.selected):not(:disabled) {
          background: var(--nav-surface);
          color: var(--nav-text-strong);
        }

        .nav-button.selected {
          color: var(--nav-accent);
          background: var(--nav-accent-soft);
          border-bottom-color: var(--nav-accent);
        }

        .nav-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .nav-button-icon { font-size: 1rem; opacity: 0.85; }
        .nav-button.selected .nav-button-icon { opacity: 1; }

        /* Secondary navigation */
        .secondary-nav .nav-button {
          color: var(--nav-muted);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 6px 18px;
        }
        .secondary-nav .nav-button:hover:not(:disabled) {
          background: #eef2f7;
          color: var(--nav-text-strong);
        }
        .secondary-nav .nav-button-icon { font-size: 0.85rem; opacity: 0.9; }

        /* Count badge */
        .count-badge {
          position: absolute;
          top: 8px;
          right: 12px;
          min-width: 18px;
          height: 18px;
          padding: 0 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--nav-accent);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          border-radius: 10px;
          line-height: 1;
        }

        /* Admin role indicator */
        .nav-button[data-admin="true"]::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          width: 7px;
          height: 7px;
          background: #f59e0b;
          border-radius: 50%;
        }

        /* Tooltip for tagline */
        .nav-button[title]:hover::after {
          content: attr(title);
          position: absolute;
          bottom: -38px;
          left: 50%;
          transform: translateX(-50%);
          padding: 7px 11px;
          background: var(--nav-text-strong);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 400;
          text-transform: none;
          letter-spacing: normal;
          white-space: nowrap;
          border-radius: 6px;
          pointer-events: none;
          z-index: 1001;
          opacity: 0;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18);
          animation: tooltipFadeIn 0.2s ease-in forwards;
        }

        @keyframes tooltipFadeIn { to { opacity: 1; } }

        @media (max-width: 768px) {
          .nav-container { height: 52px; }
          .secondary-nav { min-height: 40px; }
          .logo { padding: 0 14px; gap: 8px; }
          .logo-mark { width: 24px; height: 24px; }
          .logo-text { display: none; } /* mark only on small screens */
          .nav-button { font-size: 0.7rem; padding: 6px 12px; gap: 2px; }
          .nav-button-icon { font-size: 0.9rem; }
          .secondary-nav .nav-button { font-size: 0.68rem; padding: 6px 12px; }
          .secondary-nav .nav-button-icon { font-size: 0.8rem; }
          .count-badge { top: 4px; right: 6px; min-width: 16px; height: 16px; font-size: 10px; }
          .nav-button[title]:hover::after { display: none; }
        }
      </style>

      <div class="nav-wrapper${n?" is-spacer":""}">
        <nav class="nav-container">
          ${this.hideLogo?"":`<div class="logo" title="Mach Five Magnet">
            <img class="logo-mark" src="/m5m-mark.svg" alt="Mach Five Magnet" width="28" height="28" />
            <span class="logo-text">Mach Five <b>Magnet</b></span>
          </div>`}
          ${this.buttons.map((o,i)=>this.renderButton(o,i,"primary")).join("")}
        </nav>
        ${a?`
        <nav class="secondary-nav">
          ${e.map((o,i)=>this.renderButton(o,i,"secondary")).join("")}
        </nav>`:""}
      </div>
    `}renderButton(e,a,n="primary"){const o=n==="primary"?e.token===this.selectedPrimaryToken:!1,i=typeof e.count=="number"&&e.count!==null&&e.count!==void 0,s=e.icon&&e.icon.trim()!=="",r=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${e.token}"
        data-level="${n}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${r?`title="${e.tagline}"`:""}
      >
        ${s?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${i?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(n=>{const o=n.getAttribute("data-token"),i=n.getAttribute("data-level");n.addEventListener("click",s=>{o&&!s.currentTarget.disabled&&!this.longTapFired&&(i==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),n.addEventListener("dblclick",s=>{if(o&&!s.currentTarget.disabled){const r=this.getButtonData(o,i);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:i,caption:r.caption,tagline:r.tagline,timestamp:Date.now()}}))}}),n.addEventListener("mouseenter",s=>{if(o&&!s.currentTarget.disabled){const r=this.getButtonData(o,i);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:i,caption:r.caption,tagline:r.tagline,action:"enter",timestamp:Date.now()}}))}}),n.addEventListener("mouseleave",s=>{if(o&&!s.currentTarget.disabled){const r=this.getButtonData(o,i);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:i,caption:r.caption,tagline:r.tagline,action:"leave",timestamp:Date.now()}}))}}),n.addEventListener("mousedown",s=>{o&&!s.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const r=this.getButtonData(o,i);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:i,caption:r.caption,tagline:r.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),n.addEventListener("mouseup",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),n.addEventListener("mouseleave",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const a=this.shadowRoot.querySelector(".logo");a&&a.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(e){const a=this.buttons.find(o=>o.token===e),n=this.getButtonData(e,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,level:"primary",caption:n.caption,tagline:n.tagline,hasSecondary:(a?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){const a=this.getButtonData(e,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:a.caption,tagline:a.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,a,n="primary"){let o;n==="primary"?o=this.buttons.find(i=>i.token===e):o=this.getSecondaryButtons().find(s=>s.token===e),o&&(o.count=a,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",ya);window.m5t=Object.create(null);window.m5t.pubsub=l;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(t){console.log("mvvLegit (direct): ReferenceError -",t.message)}const Ea=Object.keys(window).filter(t=>t.toLowerCase().includes("mvv")||t.toLowerCase().includes("neodigm")||t.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",Ea);const O=new la("/",{hash:!0});window.router=O;function W(t){const e=t?`${t.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${t} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),l.publish(c.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function V(t){console.log("[Router] Navigating to:",t),O.navigate(`/${t}`)}const Sa=new Set(["splash","signin","signup","forgot","resethash","verf-link","accept-invite","signout"]);let ae={},Te={},Ie=null;const Aa={admin:{caption:"Platform Admin",icon:"shield_person"},reseller:{caption:"Reseller",icon:"handshake"},managed:{caption:"Managed",icon:"visibility"},self_serve:{caption:"Self-Serve",icon:"rocket_launch"}};function Se(){const t=document.getElementById("m5t-side-nav");if(!t)return;const e=!A.getScope()&&A.isAuthenticated(),a=A.getCapabilities(),n=A.getUiMode(),o=ge.getSideNav(a,{uiMode:n});ae={},Te={};const i=p=>{p.route&&(ae[p.route]={sectionToken:p.token,childToken:null,children:p.children||null},Array.isArray(p.children)&&p.children.forEach(m=>{m.route&&(Te[m.token]=m.route,ae[m.route]={sectionToken:p.token,childToken:m.token,children:p.children})}))},s=p=>p.forEach(m=>{m.group&&Array.isArray(m.items)?s(m.items):i(m)});s(o);const r=A.getMemberships(),d=A.getActiveOrg();t.setState({buttons:o,orgs:r.map(p=>({guid:p.orgGuid,name:p.name||p.channel,channel:p.channel})),activeOrg:d?.guid||null,footerBadge:Aa[n]||null,loading:e}),Ie&&dt(Ie)}function dt(t){const e=document.getElementById("m5t-side-nav"),a=ae[`/${t}`]||ae[t]||null;e?.setActiveToken(a?.sectionToken||null),wa(a)}function wa(t){const e=document.getElementById("m5t-sub-nav"),a=document.getElementById("app-shell");if(!e)return;const n=t?.children;e.hidden=!1,n&&n.length>1?(e.updateButtons(n.map(o=>({token:o.token,caption:o.caption,enabled:!0,selected:o.token===t.childToken}))),a?.classList.add("has-sub-nav")):(e.updateButtons([]),a?.classList.remove("has-sub-nav"))}function Ta(){const t=H.getAvailableLanguages&&H.getAvailableLanguages()||[];if(t.length<2){l.publish(c.UI_TOAST,{message:"Only one language is available",type:"info"});return}const e=localStorage.getItem(C.FF_SSE_LS_USER_LANG)||C.FF_SSE_I18N_LANG||t[0],a=t[(t.indexOf(e)+1)%t.length];H.setLanguage(a),l.publish(c.UI_TOAST,{message:`Language: ${a}`,type:"info"})}function Ia(){const t=document.getElementById("m5t-side-nav");if(!t)return;ge.setAppToken("client-saas"),document.getElementById("app-shell")?.classList.toggle("nav-collapsed",t.getAttribute("data-collapsed")==="true"),t.addEventListener("nav-select",a=>{const n=a.detail?.route;n&&O.navigate(n.startsWith("/")?n:`/${n}`)}),t.addEventListener("logo-click",()=>O.navigate("/home")),t.addEventListener("nav-collapse",a=>{document.getElementById("app-shell")?.classList.toggle("nav-collapsed",!!a.detail?.collapsed)}),t.addEventListener("org-switch",a=>{const n=a.detail?.orgGuid;n&&A.setActiveOrg(n)}),t.addEventListener("footer-action",a=>{switch(a.detail?.action){case"account":O.navigate("/settings");break;case"signout":O.navigate("/signout");break;case"lang":Ta();break}}),document.getElementById("m5t-sub-nav")?.addEventListener("nav-select",a=>{const n=Te[a.detail?.token];n&&O.navigate(n)}),document.addEventListener("language-changed",()=>Se()),Se(),l.subscribe(c.AUTH_SCOPE_LOADED,()=>Se())}function Na(t){Ie=t;const e=document.getElementById("m5t-side-nav"),a=document.getElementById("app-shell");if(!e||!a)return;const n=!Sa.has(t);if(e.hidden=!n,a.classList.toggle("has-side-nav",n),n)dt(t);else{const o=document.getElementById("m5t-sub-nav");o&&(o.hidden=!0),a.classList.remove("has-sub-nav")}}l.subscribe(c.ROUTE_NAV_AFTER,(t,e)=>{e?.route&&Na(e.route)});const ut=()=>{console.log("[Router] Route: splash"),l.publish(c.ROUTE_NAV_BEFORE,{route:"splash"});const t=new URLSearchParams(window.location.search||""),e=!!(t.get("uid")&&t.get("token"));D(e?()=>Promise.resolve().then(()=>La):()=>Promise.resolve().then(()=>Fa),void 0).then(n=>{const o=document.getElementById("app");o.innerHTML=n.render(),n.init&&n.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"splash"})}).catch(n=>{console.error("[Router] Error loading splash route:",n),l.publish(c.ROUTE_NAV_ERROR,{route:"splash",error:n})})};O.on("/",ut);O.on("/splash",ut);O.on("/signin",()=>{console.log("[Router] Route: /signin"),l.publish(c.ROUTE_NAV_BEFORE,{route:"signin"}),D(()=>Promise.resolve().then(()=>Ha),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signin"})}).catch(t=>{console.error("[Router] Error loading signin route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signin",error:t})})});O.on("/signup",()=>{console.log("[Router] Route: /signup"),l.publish(c.ROUTE_NAV_BEFORE,{route:"signup"}),D(()=>Promise.resolve().then(()=>Ya),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signup"})}).catch(t=>{console.error("[Router] Error loading signup route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signup",error:t})})});O.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),l.publish(c.ROUTE_NAV_BEFORE,{route:"verf-link"}),D(()=>Promise.resolve().then(()=>Xa),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(t=>{console.error("[Router] Error loading verf-link route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"verf-link",error:t})})});O.on("/forgot",()=>{console.log("[Router] Route: /forgot"),l.publish(c.ROUTE_NAV_BEFORE,{route:"forgot"}),D(()=>Promise.resolve().then(()=>sn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(t=>{console.error("[Router] Error loading forgot route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"forgot",error:t})})});O.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!W("resethash")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"resethash"}),D(()=>Promise.resolve().then(()=>cn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(t=>{console.error("[Router] Error loading resethash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"resethash",error:t})})});O.on("/home",()=>{if(console.log("[Router] Route: /home"),!W("home")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"home"}),D(()=>Promise.resolve().then(()=>un),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"home"})}).catch(t=>{console.error("[Router] Error loading home route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"home",error:t})})});O.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!W("signout")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"signout"}),D(()=>Promise.resolve().then(()=>mn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signout"})}).catch(t=>{console.error("[Router] Error loading signout route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signout",error:t})})});const Ca=[{path:"/templates",name:"templates",title:"Templates",icon:"content_copy"},{path:"/conversations",name:"conversations",title:"Conversations",icon:"forum"},{path:"/ab-testing",name:"ab-testing",title:"A/B Testing",icon:"science"},{path:"/analytics",name:"analytics",title:"Analytics",icon:"monitoring"},{path:"/ad-accounts",name:"ad-accounts",title:"Ad Accounts",icon:"ads_click"},{path:"/billing",name:"billing",title:"Billing",icon:"receipt_long"},{path:"/settings",name:"settings",title:"Settings",icon:"settings"},{path:"/magnets/drafts",name:"magnets/drafts",title:"Magnets · Drafts",icon:"widgets"},{path:"/magnets/archived",name:"magnets/archived",title:"Magnets · Archived",icon:"widgets"},{path:"/analytics/conversions",name:"analytics/conversions",title:"Analytics · Conversions",icon:"monitoring"},{path:"/analytics/ad-performance",name:"analytics/ad-performance",title:"Analytics · Ad Performance",icon:"monitoring"},{path:"/settings/workspace",name:"settings/workspace",title:"Settings · Workspace",icon:"settings"},{path:"/settings/integrations",name:"settings/integrations",title:"Settings · Integrations",icon:"settings"},{path:"/settings/security",name:"settings/security",title:"Settings · Security",icon:"settings"}];Ca.forEach(({path:t,name:e,title:a,icon:n})=>{O.on(t,()=>{if(console.log(`[Router] Route: ${t}`),!W("home")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:e}),D(()=>Promise.resolve().then(()=>fn),void 0).then(o=>{const i=document.getElementById("app");i.innerHTML=o.render({title:a,icon:n,name:e}),o.init&&o.init({name:e}),l.publish(c.ROUTE_NAV_AFTER,{route:e})}).catch(o=>{console.error(`[Router] Error loading section route (${e}):`,o),l.publish(c.ROUTE_NAV_ERROR,{route:e,error:o})})})});O.on("/magnets",()=>{if(console.log("[Router] Route: /magnets"),!W("home")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"magnets"}),D(()=>Promise.resolve().then(()=>Nn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"magnets"})}).catch(t=>{console.error("[Router] Error loading magnets route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"magnets",error:t})})});O.on("/clients",()=>{if(console.log("[Router] Route: /clients"),!W("home")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"clients"}),D(()=>Promise.resolve().then(()=>Un),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"clients"})}).catch(t=>{console.error("[Router] Error loading clients route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"clients",error:t})})});O.on("/team",()=>{if(console.log("[Router] Route: /team"),!W("home")){V("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"team"}),D(()=>Promise.resolve().then(()=>Kn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"team"})}).catch(t=>{console.error("[Router] Error loading team route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"team",error:t})})});O.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),V("splash")});l.subscribe(c.ROUTE_NAV,(t,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&V(e.route)});function ze(){console.log("[App] Waiting for Neodigm 55 library...");let t=0;const e=100,a=setInterval(()=>{t++,t%10===0&&console.log(`[App] Still waiting... attempt ${t}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${t*100}ms`),clearInterval(a),ka()):t>=e&&(clearInterval(a),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,l.publish(c.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ze):ze();async function ka(){if(console.log("[App] Neodigm 55 loaded, initializing..."),fa(),H.initialize(),console.log("[App] I18n Controller initialized"),!await A.init({BASE_URL:"https://machfivemagnet-saas.onrender.com",navigateFunction:a=>{console.log("[AuthController] Navigation requested:",a),V(a)}})){console.error("[App] AuthController initialization failed");return}const e=A.getEntity();e&&(console.log("[App] Session restored for:",e.email),l.publish(c.APP_USER_LOADED,{entity:e}),A.isAuthenticated()&&A.fetchScope()),l.publish(c.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),Ia(),O.resolve(),window.AuthController=A,window.I18nController=H,window.MachVive=xe,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)")}l.subscribe(c.ROUTE_NAV_AFTER,(t,e)=>{typeof H<"u"&&H.refresh&&setTimeout(()=>{H.refresh()},100)});function me(t){return t=String(t),Math.abs(t.split("").reduce((e,a)=>(e<<5)-e+a.charCodeAt(0)|0,0))}let qe=!1;function Oa(){if(qe)return;const t=document.createElement("style");t.id="m5t-accept-invite-styles",t.textContent=`
    .accept-invite-page {
      min-height: 100vh; display: grid; place-items: center; padding: 32px 20px;
      background: var(--color-surface, #F4F7FB); color: var(--color-text, #0B1220);
      color-scheme: light; font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .accept-invite-card {
      width: min(420px, 100%); background: var(--color-bg, #fff);
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); padding: 32px 28px;
    }
    .accept-invite-card h1 { font-family: var(--font-display, inherit); font-size: 1.4rem; font-weight: 600; margin: 0 0 6px; }
    .accept-invite-card .sub { font-size: 0.9rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 22px; }
    .accept-invite-field { margin-bottom: 16px; }
    .accept-invite-field label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; }
    .accept-invite-field input {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px);
      background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .accept-invite-field input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .accept-invite-btn {
      width: 100%; appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.95rem; font-weight: 600;
      padding: 12px; border-radius: var(--radius-md, 10px); background: var(--color-primary-600, #0072BA); color: #fff; margin-top: 6px;
    }
    .accept-invite-btn:hover { background: var(--color-primary-700, #00558D); }
    .accept-invite-btn[disabled] { opacity: 0.6; cursor: default; }
    .accept-invite-msg { font-size: 0.85rem; margin: 14px 0 0; min-height: 1em; }
    .accept-invite-msg.error { color: var(--color-danger, #DD4124); }
    .accept-invite-msg.ok { color: var(--color-success, #009473); }
  `,document.head.appendChild(t),qe=!0}function Ra(){const t=new URLSearchParams(window.location.search||"");let e=t.get("uid")||"",a=t.get("token")||"";if(!e||!a){const n=window.location.hash||"",o=n.includes("?")?n.slice(n.indexOf("?")+1):"",i=new URLSearchParams(o);if(e=e||i.get("uid")||"",a=a||i.get("token")||"",!e||!a){const s=n.replace(/^#\/?/,"").split("?")[0].split("/").filter(Boolean);e=e||s[1]||"",a=a||s[2]||""}}try{return{uid:decodeURIComponent(e),token:decodeURIComponent(a)}}catch{return{uid:e,token:a}}}function pt(){return Oa(),`
    <div class="accept-invite-page">
      <div class="accept-invite-card">
        <h1>Accept your invitation</h1>
        <p class="sub">Set a password to access your Mach Five Magnet account.</p>
        <form id="accept-invite-form" autocomplete="off">
          <div class="accept-invite-field">
            <label for="ai-pass">Password</label>
            <input type="password" id="ai-pass" autocomplete="new-password" minlength="8" placeholder="At least 8 characters" />
          </div>
          <div class="accept-invite-field">
            <label for="ai-confirm">Confirm password</label>
            <input type="password" id="ai-confirm" autocomplete="new-password" placeholder="Re-enter password" />
          </div>
          <button class="accept-invite-btn" type="submit" id="ai-submit">Set password & sign in</button>
          <p class="accept-invite-msg" id="ai-msg" role="status"></p>
        </form>
      </div>
    </div>`}function gt(){const{uid:t,token:e}=Ra(),a=document.getElementById("accept-invite-form"),n=document.getElementById("ai-pass"),o=document.getElementById("ai-confirm"),i=document.getElementById("ai-submit"),s=document.getElementById("ai-msg");if(!a)return;const r=(d,p="error")=>{s.textContent=d,s.className=`accept-invite-msg ${p}`};if(!t||!e){r("This invitation link is invalid or incomplete. Please use the link from your email."),i.disabled=!0;return}a.addEventListener("submit",async d=>{d.preventDefault();const p=n.value||"",m=o.value||"";if(p.length<8){r("Password must be at least 8 characters.");return}if(p!==m){r("Passwords do not match.");return}i.disabled=!0,r("Setting up your account…","ok");const y=me(p);try{const E=A.getConfig?.().BASE_URL||"",w=await fetch(`${E}/m5t/v5/acctEntity/acceptInvite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:t,token:e,hash:y})}),I=await w.json().catch(()=>({}));if(!w.ok||!I.ok){const _=w.status===410?"This invitation has expired — ask for a new one.":w.status===409?"This invitation has already been used. Try signing in.":I.error||`Could not accept the invitation (HTTP ${w.status}).`;r(_),i.disabled=!1;return}try{window.history.replaceState({},"",window.location.pathname+window.location.hash)}catch{}r("Welcome! Signing you in…","ok"),(await A.doSignin(I.entity.email,y))?.ok||(r("Your account is ready. Please sign in.","ok"),setTimeout(()=>{window.location.hash="#/signin"},1200))}catch(E){console.error("[accept-invite] error:",E),r("Something went wrong. Please try again."),i.disabled=!1}})}const xa={render:pt,init:gt},La=Object.freeze(Object.defineProperty({__proto__:null,default:xa,init:gt,render:pt},Symbol.toStringTag,{value:"Module"}));function Pa(){return`
    <div class="auth-container splash">
      <div class="auth-left">
        <div class="splash-content">
          <img class="splash-mark" src="/m5m-mark.svg" alt="" width="72" height="72" />
          <h1>Mach Five <b>Magnet</b></h1>
          <p class="tagline">Turn conversations into conversions.</p>

          <div class="splash-loader" id="splash-loader">
            <div class="spinner"></div>
            <p class="loading-text">Loading…</p>
          </div>

          <div class="splash-actions" id="splash-actions" style="display: none;">
            <button class="btn" data-route="signin">
              Sign In
            </button>
            <button class="btn-ghost" data-route="signup">
              Create Account
            </button>
          </div>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <span class="auth-hero-eyebrow">Conversational lead capture</span>
          <h2 class="auth-hero-title">Build conversations, not forms.</h2>
          <p class="auth-hero-description">
            Design no-code magnets that qualify and capture every lead, then watch them convert —
            all from one platform.
          </p>
        </div>
      </div>
    </div>

    <style>
      /* Splash reuses the shared .auth-* brand layout; these scope the
         centered landing content and loader. */
      .splash .auth-left {
        place-content: center;
        justify-items: center;
        text-align: center;
      }

      .splash-content {
        display: grid;
        justify-items: center;
        gap: 1rem;
        max-width: 460px;
        width: 100%;
      }

      .splash-mark { margin-bottom: 0.25rem; }

      .splash-content h1 {
        font-family: var(--font-display);
        font-size: clamp(2.25rem, 5vw, 3rem);
        font-weight: 600;
        letter-spacing: -0.02em;
        color: var(--color-text);
      }
      .splash-content h1 b { color: var(--color-accent); font-weight: 700; }

      .splash .tagline {
        font-size: 1.15rem;
        color: var(--color-text-muted);
        margin-bottom: 1.5rem;
      }

      .splash-loader {
        display: grid;
        justify-items: center;
        gap: 1rem;
      }

      .spinner {
        width: 44px;
        height: 44px;
        border: 4px solid var(--color-surface-2);
        border-top-color: var(--color-accent);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }

      .loading-text {
        font-size: 0.95rem;
        color: var(--color-text-subtle);
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }

      .splash-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        margin-top: 1rem;
      }

      /* Secondary (ghost) button — pairs with the shared .btn primary */
      .btn-ghost {
        padding: 0.95rem 1.25rem;
        background: transparent;
        color: var(--color-accent);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        font-family: var(--font-body);
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: background 0.18s ease, border-color 0.18s ease, transform 0.15s ease;
      }
      .btn-ghost:hover {
        background: var(--color-surface);
        border-color: var(--color-accent);
        transform: translateY(-1px);
      }
    </style>
  `}function Ma(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const t=localStorage.getItem(C.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!t,hasMvvTs:!!e});const a=document.getElementById("splash-loader"),n=document.getElementById("splash-actions");t?(console.log("[SplashRoute] Auth token found → HOME"),l.publish(c.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),l.publish(c.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),a&&(a.style.display="none"),n&&(n.style.display="flex"),document.querySelectorAll("[data-route]").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${s}`),l.publish(c.ROUTE_NAV,{route:s})})}))},4e3)}const Fa=Object.freeze(Object.defineProperty({__proto__:null,init:Ma,render:Pa},Symbol.toStringTag,{value:"Module"}));function Ua(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/splash" aria-label="Mach Five Magnet">
          <img src="/m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1 data-meta-copywrite-i118n='{"token": "welcome_back", "attribute": "textContent"}'>Welcome back</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details", "attribute": "textContent"}'>Sign in to your Mach Five Magnet account</p>

        <div class="auth-content">
          <form id="loginForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="password" data-meta-copywrite-i118n='{"token": "password", "attribute": "textContent"}'>PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  data-meta-copywrite-i118n='{"token": "enter_your_password", "attribute": "placeholder"}'
                  autocomplete="current-password"
                />
                <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-footer">
              <a href="#/forgot" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>FORGOT PASSWORD</a>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "dont_have_an_account", "attribute": "textContent"}'>START YOUR FREE ACCOUNT</span> &nbsp;  <a class="link-brand--uc__underline" href="#/signup" data-meta-copywrite-i118n='{"token": "sign_up", "attribute": "textContent"}'>SIGN UP</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <span class="auth-hero-eyebrow">Mach Five Magnet</span>
          <h2 class="auth-hero-title">
            Turn conversations into conversions.
          </h2>
          <p class="auth-hero-description">
            Replace static forms with conversational magnets that qualify, score, and capture
            every lead in real time — no code required.
          </p>
        </div>
      </div>
    </div>
  `}function Da(){console.log("[SigninRoute] Initialized");const t=document.getElementById("loginForm"),e=document.getElementById("email"),a=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const i=a.type==="password"?"text":"password";a.type=i}),t?.addEventListener("submit",async i=>{i.preventDefault();const s=e.value.trim(),r=a.value;Ga(s,e)&&Ba(r,a)&&await $a(s,r)}),document.getElementById("link--uc__underline")?.addEventListener("click",i=>{i.preventDefault(),l.publish(c.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",i=>{i.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),l.publish(c.ROUTE_NAV,{route:"signup"})})}function Ga(t,e){if(!t)return ue(e,v.get("validation_email_required")),!1;const a=(t.match(/@/g)||[]).length,n=(t.match(/\./g)||[]).length;return a!==1||n<1?(ue(e,v.get("validation_email_invalid")),!1):!0}function Ba(t,e){return t?t.length<10?(ue(e,v.get("validation_password_min_length")),!1):!0:(ue(e,v.get("validation_password_required")),!1)}function ue(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function $a(t,e){const a=document.querySelector(".btn");a.disabled=!0,a.textContent=v.get("loading_signing_in");try{const n=me(e),o=await A.doSignin(t,n);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(v.get("success_welcome_back"),"success"),l.publish(c.AUTH_SIGNIN_SUCCESS,{entity:A.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(v.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||v.get("error_signin_failed"),"danger"),a.disabled=!1,a.textContent=v.get("sign_in").toUpperCase())}catch(n){console.error("[SigninRoute] Sign in error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||v.get("error_network"),"danger"),a.disabled=!1,a.textContent=v.get("sign_in").toUpperCase(),l.publish(c.AUTH_SIGNIN_FAIL,{message:n.message})}}const Ha=Object.freeze(Object.defineProperty({__proto__:null,init:Da,render:Ua},Symbol.toStringTag,{value:"Module"}));function mt(t){const e=[];return t.length<10&&e.push("at least 10 characters"),/[a-z]/.test(t)||e.push("1 lowercase"),/[A-Z]/.test(t)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t)||e.push("1 special character"),/[^\x00-\x7F]/.test(t)&&e.push("ASCII characters only"),e}function _t(t){return t.length===0?"":t.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":t.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function Va(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/splash" aria-label="Mach Five Magnet">
          <img src="/m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1 data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>Create your account</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details_to_get_started", "attribute": "textContent"}'>Start turning conversations into conversions — free</p>

        <div class="auth-content">
          <form id="signupForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="first" data-meta-copywrite-i118n='{"token": "first_name", "attribute": "textContent"}'>FIRST NAME</label>
              <input
                type="text"
                id="first"
                name="first"
                placeholder="Enter your first name"
                data-meta-copywrite-i118n='{"token": "enter_your_name", "attribute": "placeholder"}'
                autocomplete="given-name"
              />
            </div>

            <div class="form-group">
              <label for="last" data-meta-copywrite-i118n='{"token": "last_name", "attribute": "textContent"}'>LAST NAME</label>
              <input
                type="text"
                id="last"
                name="last"
                placeholder="Enter your last name"
                data-meta-copywrite-i118n='{"token": "enter_your_name", "attribute": "placeholder"}'
                autocomplete="family-name"
              />
            </div>

            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="company" data-meta-copywrite-i118n='{"token": "company", "attribute": "textContent"}'>COMPANY (OPTIONAL)</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                data-meta-copywrite-i118n='{"token": "enter_company_name", "attribute": "placeholder"}'
                autocomplete="organization"
              />
            </div>

            <div class="form-group">
              <label for="phone" data-meta-copywrite-i118n='{"token": "phone", "attribute": "textContent"}'>PHONE (OPTIONAL)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                data-meta-copywrite-i118n='{"token": "enter_phone_number", "attribute": "placeholder"}'
                autocomplete="tel"
              />
            </div>

            <div class="form-group">
              <label for="password" data-meta-copywrite-i118n='{"token": "password", "attribute": "textContent"}'>PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  data-meta-copywrite-i118n='{"token": "enter_your_password", "attribute": "placeholder"}'
                  autocomplete="new-password"
                />
                <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword" data-meta-copywrite-i118n='{"token": "confirm_password", "attribute": "textContent"}'>CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  data-meta-copywrite-i118n='{"token": "reenter_password", "attribute": "placeholder"}'
                  autocomplete="new-password"
                />
                <button type="button" id="toggleConfirmPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconConfirm" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>CREATE ACCOUNT</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "already_have_an_account", "attribute": "textContent"}'>ALREADY HAVE AN ACCOUNT?</span> &nbsp; <a class="link-brand--uc__underline" href="#/signin" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <span class="auth-hero-eyebrow">Get started free</span>
          <h2 class="auth-hero-title">
            Build engaging lead capture flows in minutes.
          </h2>
          <p class="auth-hero-description">
            Design conversational magnets with a visual editor, deploy them as a chat bubble,
            pop-up, slide panel, or embed — and watch the leads roll in.
          </p>
        </div>
      </div>
    </div>
  `}function za(){console.log("[SignupRoute] Initialized");const t=document.getElementById("signupForm"),e=t.querySelector('button[type="submit"]');je("togglePassword","password","eyeIcon"),je("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",n=>{n.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),l.publish(c.ROUTE_NAV,{route:"signin"})}),t.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("first").value.trim(),i=document.getElementById("last").value.trim(),s=document.getElementById("email").value.trim(),r=document.getElementById("company").value.trim(),d=document.getElementById("phone").value.trim(),p=document.getElementById("password").value,m=document.getElementById("confirmPassword").value,y=document.getElementById("first"),E=document.getElementById("last"),w=document.getElementById("email"),I=document.getElementById("password"),g=document.getElementById("confirmPassword");if(We(o,y,v.get("validation_first_name_required"))&&We(i,E,v.get("validation_last_name_required"))&&qa(s,w)&&ja(p,I)){if(p!==m){X(g,v.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=v.get("loading_creating_account"),await Wa(o,i,s,r,d,p)}})}function je(t,e,a){const n=document.getElementById(t),o=document.getElementById(e),i=document.getElementById(a);!n||!o||!i||n.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?i.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:i.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function We(t,e,a){return t?!0:(X(e,a),!1)}function qa(t,e){if(!t)return X(e,v.get("validation_email_required")),!1;const a=(t.match(/@/g)||[]).length,n=(t.match(/\./g)||[]).length;return a!==1||n<1?(X(e,v.get("validation_email_invalid")),!1):!0}function ja(t,e){if(!t)return X(e,v.get("validation_password_required")),!1;const a=mt(t);return a.length>0?(X(e,_t(a)),!1):!0}function X(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Wa(t,e,a,n,o,i){const s=document.querySelector('button[type="submit"]');try{const r=me(i),d={email:a,hash:r,first:t,last:e};n&&(d.company=n),o&&(d.phone=o);const p=await A.doSignup(d);if(p.ok)l.publish(c.AUTH_SIGNUP_SUCCESS,{email:a}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const m=p.error||p.message||v.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(m,"danger"),s.disabled=!1,s.textContent=v.get("create_account").toUpperCase(),l.publish(c.AUTH_SIGNUP_FAIL,{message:m})}}catch(r){console.error("[SignupRoute] Sign up error:",r),typeof neodigmToast<"u"&&neodigmToast.q(r.message||v.get("error_network"),"danger"),s.disabled=!1,s.textContent=v.get("create_account").toUpperCase(),l.publish(c.AUTH_SIGNUP_FAIL,{message:r.message})}}const Ya=Object.freeze(Object.defineProperty({__proto__:null,init:za,render:Va},Symbol.toStringTag,{value:"Module"}));function Ka(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/splash" aria-label="Mach Five Magnet">
          <img src="/m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1>Check your email</h1>
        <p>A verification link is on its way to the email address you provided.</p>

        <div class="auth-content">
          <!-- Countdown Timer -->
          <div class="countdown-wrapper">
            <div id="countdown-timer" class="countdown-timer">
              <div id="countdown-display" class="countdown-display">
                02:00:00
              </div>
              <div class="countdown-label">
                TIME REMAINING
              </div>
            </div>
          </div>

          <p class="text-center">
            Please click on that link to continue.
          </p>

          <p class="text-center">
            The link will expire in 2 hours.
          </p>

          <p class="text-center">
            Remember to check your spam folder.
          </p>

          <style>
            .countdown-wrapper {
              text-align: center;
              padding: 8px 0 4px;
            }

            .countdown-timer {
              display: inline-block;
              background: var(--color-surface);
              border: 1px solid var(--color-border);
              border-radius: var(--radius-md);
              padding: 20px 40px;
              box-shadow: var(--shadow-sm);
            }

            .countdown-display {
              font-family: 'Roboto Mono', 'Courier New', monospace;
              font-size: 44px;
              font-weight: 700;
              color: var(--color-accent);
              letter-spacing: 4px;
            }

            .countdown-label {
              font-size: 12px;
              color: var(--color-text-subtle);
              text-transform: uppercase;
              letter-spacing: 2px;
              margin-top: 8px;
            }

            .text-center {
              text-align: center;
              color: var(--color-text-muted);
            }
          </style>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-hero-content">
          <span class="auth-hero-eyebrow">One last step</span>
          <h2>You're almost ready to launch.</h2>
          <p>
            Verify your email to unlock your Mach Five Magnet account and start building your first magnet.
          </p>
          <p>
            Check your inbox for the link we just sent you.
          </p>
        </div>
      </div>
    </div>
  `}function Ja(){console.log("[VerfLinkRoute] Initialized");const t=7200,e=Date.now(),a=document.getElementById("countdown-display");function n(){const i=Date.now()-e,s=Math.floor(i/1e3),r=Math.max(0,t-s),d=Math.floor(r/3600),p=Math.floor(r%3600/60),m=r%60,y=`${String(d).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(m).padStart(2,"0")}`;a&&(a.textContent=y,r<600&&(a.style.color="#ef4444",a.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),r===0&&(a.style.color="#7f1d1d",a.style.textShadow="none")),r===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}n();const o=setInterval(n,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const Xa=Object.freeze(Object.defineProperty({__proto__:null,init:Ja,render:Ka},Symbol.toStringTag,{value:"Module"})),Qa="https://machfivemagnet-saas.onrender.com";class Za{constructor(){this.baseUrl=Qa}async request(e,a={}){const n=`${this.baseUrl}${e}`,o={"Content-Type":"application/json",...a.headers};try{const i=await fetch(n,{...a,headers:o});if(i.status===401||i.status===403){l.publish(c.AUTH_TOKEN_EXPIRED,{status:i.status,endpoint:e});const r=await i.json().catch(()=>({}));throw new Error(r.error||"Authentication failed")}const s=await i.json();return{ok:i.ok,status:i.status,data:s}}catch(i){throw console.error("API Request Error:",i),l.publish(c.APP_ERROR,{message:i.message,endpoint:e}),i}}async get(e){return this.request(e,{method:"GET"})}async post(e,a){return this.request(e,{method:"POST",body:JSON.stringify(a)})}async put(e,a){return this.request(e,{method:"PUT",body:JSON.stringify(a)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,a){return this.post("/api/acctEntity/signin",{email:e,hash:a})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,a){return this.post("/api/acctEntity/resethash",{email:e,hash:a})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,a){return this.put(`/api/acctEntity/${e}`,a)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const en=new Za;function tn(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/signin" aria-label="Mach Five Magnet">
          <img src="/m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1 data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>Forgot password</h1>
        <p data-meta-copywrite-i118n='{"token": "enter_email_for_reset", "attribute": "textContent"}'>Please enter your email to receive a password reset link</p>

        <div class="auth-content">
          <form id="forgot-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "send_reset_link", "attribute": "textContent"}'>SEND RESET LINK</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "remember_password", "attribute": "textContent"}'>Remember your password?</span> &nbsp; <a class="link-brand--uc__underline" href="#/signin" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-hero-content">
          <span class="auth-hero-eyebrow">Account recovery</span>
          <h2>Let's get you back in.</h2>
          <p>
            Enter your email address and we'll send you a secure link to reset your password.
          </p>
          <p>
            The reset link stays valid for 2 hours.
          </p>
        </div>
      </div>
    </div>

  `}function an(){console.log("[ForgotRoute] Initialized");const t=document.getElementById("forgot-form"),e=document.getElementById("email");t?.addEventListener("submit",async a=>{a.preventDefault();const n=e.value.trim();nn(n,e)&&await on(n)})}function nn(t,e){if(!t)return Ye(e,v.get("validation_email_required")),!1;const a=(t.match(/@/g)||[]).length,n=(t.match(/\./g)||[]).length;return a!==1||n<1?(Ye(e,v.get("validation_email_invalid")),!1):!0}function Ye(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function on(t){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const a=await en.forgotPassword(t);a.ok&&a.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(v.get("success_reset_link_sent"),"success"),l.publish(c.AUTH_FORGOT_SUCCESS,{email:t}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(a.data.error||v.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=v.get("send_reset_link").toUpperCase())}catch(a){console.error("[ForgotRoute] Forgot password error:",a),typeof neodigmToast<"u"&&neodigmToast.q(a.message||v.get("error_network"),"danger"),e.disabled=!1,e.textContent=v.get("send_reset_link").toUpperCase()}}const sn=Object.freeze(Object.defineProperty({__proto__:null,init:an,render:tn},Symbol.toStringTag,{value:"Module"}));function rn(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/home" aria-label="Mach Five Magnet">
          <img src="/m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1 data-meta-copywrite-i118n='{"token": "reset_password", "attribute": "textContent"}'>Reset password</h1>
        <p data-meta-copywrite-i118n='{"token": "update_your_password", "attribute": "textContent"}'>Update your account password</p>

        <div class="auth-content">
          <form id="resethash-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value="${A.getEntity()?.email||""}"
                readonly
                style="opacity: 0.6; cursor: not-allowed;"
              />
            </div>

            <div class="form-group">
              <label for="new-password" data-meta-copywrite-i118n='{"token": "new_password", "attribute": "textContent"}'>NEW PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  placeholder="Enter new password"
                  data-meta-copywrite-i118n='{"token": "enter_new_password", "attribute": "placeholder"}'
                  required
                  autocomplete="new-password"
                />
                <button type="button" id="toggleNewPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconNew" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirm-password" data-meta-copywrite-i118n='{"token": "confirm_new_password", "attribute": "textContent"}'>CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  data-meta-copywrite-i118n='{"token": "confirm_new_password", "attribute": "placeholder"}'
                  required
                  autocomplete="new-password"
                />
                <button type="button" id="toggleConfirmPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconConfirm" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "update_password", "attribute": "textContent"}'>UPDATE PASSWORD</button>
          </form>

          <p class="auth-switch">
            <a href="#/home" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "cancel", "attribute": "textContent"}'>CANCEL</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <span class="auth-hero-eyebrow">Account security</span>
          <h2 class="auth-hero-title">
            Keep your account secure with a strong password.
          </h2>
          <p class="auth-hero-description">
            Choose a unique password that you don't use anywhere else. You'll be signed out after updating and will need to sign in again with your new password.
          </p>
        </div>
      </div>
    </div>
  `}function ln(){console.log("[ResethashRoute] Initialized");const t=document.getElementById("resethash-form"),e=t.querySelector('button[type="submit"]');Ke("toggleNewPassword","new-password","eyeIconNew"),Ke("toggleConfirmPassword","confirm-password","eyeIconConfirm"),t?.addEventListener("submit",async a=>{a.preventDefault();const n=t.email.value.trim(),o=t.newPassword.value,i=t.confirmPassword.value,s=document.getElementById("new-password"),r=document.getElementById("confirm-password");if(!o){K(s,v.get("validation_new_password_required"));return}const d=mt(o);if(d.length>0){K(s,_t(d));return}if(!i){K(r,v.get("validation_new_password_required"));return}if(o!==i){K(r,v.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=v.get("loading_resetting_password");try{const p=me(o),m=await A.doResetHash(n,p);m.ok?(typeof neodigmToast<"u"&&neodigmToast.q(v.get("success_password_reset"),"success"),l.publish(c.AUTH_RESETHASH_SUCCESS,{email:n})):(K(s,m.error||v.get("error_signin_failed")),e.disabled=!1,e.textContent=v.get("update_password").toUpperCase())}catch(p){console.error("[ResethashRoute] Reset password error:",p),K(s,p.message||v.get("error_network")),e.disabled=!1,e.textContent=v.get("update_password").toUpperCase()}})}function Ke(t,e,a){const n=document.getElementById(t),o=document.getElementById(e),i=document.getElementById(a);!n||!o||!i||n.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?i.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:i.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function K(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}const cn=Object.freeze(Object.defineProperty({__proto__:null,init:ln,render:rn},Symbol.toStringTag,{value:"Module"})),Ne=(t,e)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`,ie=({icon:t,label:e,valueId:a,value:n="—",subId:o,sub:i=""})=>`
  <div class="stat-card">
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${t}</span>
      <span class="stat-label">${e}</span>
    </div>
    <div class="stat-value"${a?` id="${a}"`:""}>${n}</div>
    <div class="stat-change"><span class="stat-sublabel"${o?` id="${o}"`:""}>${i}</span></div>
  </div>`,se=(t,e,{wide:a=!1,full:n=!1,controls:o=!1}={})=>`
  <div class="dashboard-card${a?" chart-card-wide":""}${n?" chart-card-full":""}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${t}</span> ${e}</h2>
      ${o?`<div class="chart-controls">
        <button class="chart-period-btn active" type="button" data-period="7">7 Days</button>
        <button class="chart-period-btn" type="button" data-period="30">30 Days</button>
      </div>`:""}
    </div>
    <div class="card-body">${Ne("insights","Insights appear here once your magnets start capturing conversations.")}</div>
  </div>`;function ht(){return`
    <div class="page-shell" data-section="home">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Dashboard</h1>
          <p class="page-description">Your magnets, conversations, and lead performance at a glance.</p>
        </div>
        <a class="btn btn-primary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          New Magnet
        </a>
      </div>

      <div class="stats-grid">
        ${ie({icon:"widgets",label:"Active Magnets",valueId:"stat-active-magnets",subId:"stat-active-magnets-sub",sub:"Loading…"})}
        ${ie({icon:"forum",label:"Conversations Started",sub:"Coming soon"})}
        ${ie({icon:"person_add",label:"Leads Captured",sub:"Coming soon"})}
        ${ie({icon:"check_circle",label:"Flow Completion Rate",sub:"Coming soon"})}
      </div>

      <div class="charts-section">
        ${se("show_chart","Conversation Trends",{wide:!0,controls:!0})}
        <div class="charts-grid">
          ${se("filter_alt","Completion Funnel")}
          ${se("source","Traffic Sources")}
          ${se("bar_chart","Magnet Performance",{full:!0})}
        </div>
      </div>

      <div class="content-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Recent Interactions</h2>
            <span class="live-indicator"><span class="pulse-dot"></span> Live</span>
          </div>
          <div class="card-body">
            ${Ne("sensors","No interactions yet — they'll stream in live as visitors engage your magnets.")}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/conversations">View all →</a>
          </div>
          <div class="card-body">
            ${Ne("contacts","No leads captured yet. Publish a magnet to start collecting and scoring leads.")}
          </div>
        </div>
      </div>
    </div>`}async function ft(){const t=document.getElementById("stat-active-magnets"),e=document.getElementById("stat-active-magnets-sub");if(t)try{const a=A.getConfig?.().BASE_URL||"",n=await fetch(`${a}/m5t/v5/sseEtherSubscriberApp`);if(!n.ok)throw new Error(`HTTP ${n.status}`);const o=await n.json(),i=Array.isArray(o?.data)?o.data:[],s=i.filter(d=>d.status==="ENABLED").length;t.textContent=String(s);const r=new Set;i.forEach(d=>{(Array.isArray(d.app_domains)?d.app_domains:[]).forEach(m=>{const y=typeof m=="string"?m:m&&(m.domain||m.host);y&&(typeof m=="string"||m.active!==!1)&&r.add(String(y).toLowerCase())})}),e&&(e.textContent=r.size?`Across ${r.size} domain${r.size===1?"":"s"}`:s?"No domains configured":"No magnets yet")}catch(a){console.warn("[dashboard] Active Magnets fetch failed:",a),t.textContent="—",e&&(e.textContent="Unavailable")}}const dn={render:ht,init:ft},un=Object.freeze(Object.defineProperty({__proto__:null,default:dn,init:ft,render:ht},Symbol.toStringTag,{value:"Module"}));function pn(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/home" aria-label="Mach Five Magnet">
          <img src="/m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1 data-meta-copywrite-i118n='{"token": "sign_out", "attribute": "textContent"}'>Sign out</h1>
        <p data-meta-copywrite-i118n='{"token": "are_you_sure_sign_out", "attribute": "textContent"}'>Are you sure you want to sign out?</p>

        <div class="auth-content">
          <button id="confirm-signout-btn" class="btn" data-meta-copywrite-i118n='{"token": "sign_out", "attribute": "textContent"}'>SIGN OUT</button>

          <p class="auth-switch">
            <a id="cancel-signout-btn" class="link-brand--uc__underline" href="#/home" data-meta-copywrite-i118n='{"token": "cancel", "attribute": "textContent"}'>CANCEL</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          <span class="auth-hero-eyebrow">See you soon</span>
          <h2 class="auth-hero-title">
            Taking a break? We'll keep everything safe.
          </h2>
          <p class="auth-hero-description">
            Sign back in anytime to keep building magnets, reviewing conversations, and converting leads.
          </p>
        </div>
      </div>
    </div>
  `}function gn(){console.log("[SignoutRoute] Initialized");const t=document.getElementById("confirm-signout-btn");t?.addEventListener("click",async()=>{t.disabled=!0,t.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await A.doSignout()})}const mn=Object.freeze(Object.defineProperty({__proto__:null,init:gn,render:pn},Symbol.toStringTag,{value:"Module"}));let Je=!1;function _n(){if(Je)return;const t=document.createElement("style");t.id="m5t-section-page-styles",t.textContent=`
    .section-page {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 48px 24px;
      background: var(--color-surface, #F4F7FB);
      color: var(--color-text, #0B1220);
      font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .section-page__inner {
      max-width: 540px;
      text-align: center;
      background: var(--color-bg, #FFFFFF);
      border: 1px solid var(--color-border, #D4DCE8);
      border-radius: var(--radius-lg, 16px);
      padding: 48px 40px;
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10));
    }
    .section-page__icon {
      font-family: 'Material Symbols Outlined';
      font-size: 56px;
      line-height: 1;
      color: var(--color-primary-600, #0072BA);
      display: inline-block;
      margin-bottom: 16px;
    }
    .section-page__title {
      font-family: var(--font-display, 'Inter', system-ui, sans-serif);
      font-size: 1.9rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      margin: 0 0 10px;
    }
    .section-page__sub { font-size: 1rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 6px; }
    .section-page__hint { font-size: 0.85rem; color: var(--color-text-subtle, #6C7C9A); margin: 0; }
  `,document.head.appendChild(t),Je=!0}function vt({title:t="Section",icon:e="widgets",name:a=""}={}){return _n(),`
    <section class="section-page" data-section="${a}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${e}</span>
        <h1 class="section-page__title">${t}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired — content lands next.</p>
      </div>
    </section>`}function bt(){}const hn={render:vt,init:bt},fn=Object.freeze(Object.defineProperty({__proto__:null,default:hn,init:bt,render:vt},Symbol.toStringTag,{value:"Module"}));let Xe=!1;const M={magnets:[],owners:[],canProvision:!1,canManage:!1,primaryOrgGuid:null},vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},L=t=>String(t??"").replace(/[&<>"']/g,e=>vn[e]),q=(t,e="info")=>{try{l.publish(c.UI_TOAST,{message:t,type:e})}catch{}},Q=()=>A.getConfig?.().BASE_URL||"",yt=t=>`<script src="${Q()}/m5t/v5/coreSnippet?appguid=${t}" async><\/script>`;function bn(){if(Xe)return;const t=document.createElement("style");t.id="m5t-magnets-styles",t.textContent=`
    .page-shell .mag-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
    .page-shell .mag-card { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px); background: var(--color-bg, #fff); padding: 16px 18px; display: flex; flex-direction: column; gap: 12px; }
    .page-shell .mag-card__top { display: flex; align-items: flex-start; gap: 12px; }
    .page-shell .mag-swatch { flex: 0 0 auto; width: 40px; height: 40px; border-radius: 10px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08); }
    .page-shell .mag-card__hd { flex: 1 1 auto; min-width: 0; }
    .page-shell .mag-name { font-weight: 700; font-size: 0.98rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-owner { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-badge { flex: 0 0 auto; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; }
    .page-shell .mag-badge[data-s="ENABLED"] { background: #DCFCE7; color: #047857; }
    .page-shell .mag-badge[data-s="DISABLED"], .page-shell .mag-badge[data-s="DRAFT"] { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-domains { font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-domains span { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-embed { display: flex; gap: 6px; align-items: center; }
    .page-shell .mag-embed input { flex: 1 1 auto; min-width: 0; font: inherit; font-size: 0.72rem; font-family: ui-monospace, Menlo, monospace; padding: 7px 9px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-surface, #F4F7FB); color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-actions { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 2px; }
    .page-shell .mag-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 11px; border-radius: 8px; display: inline-flex; align-items: center; gap: 5px; color: var(--color-text, #0B1220); }
    .page-shell .mag-btn:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .mag-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .mag-btn .material-symbols-outlined { font-size: 17px; }

    .mag-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.45); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .mag-modal-scrim.open { opacity: 1; }
    .mag-modal { position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001; width: min(460px, 92vw); max-height: 90vh; overflow: auto; background: var(--color-bg, #fff); color: var(--color-text, #0B1220); border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3); opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease; }
    .mag-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .mag-modal__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .mag-modal__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 600; }
    .mag-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .mag-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    .mag-modal__body { padding: 22px; }
    .mag-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin: 14px 0 6px; }
    .mag-modal__label:first-child { margin-top: 0; }
    .mag-modal__input, .mag-modal__select { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .mag-modal__input:focus, .mag-modal__select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .mag-modal__row { display: flex; gap: 12px; align-items: flex-end; }
    .mag-modal__row > div { flex: 1; }
    .mag-modal__color { width: 46px; height: 44px; padding: 3px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 10px; background: var(--color-bg, #fff); cursor: pointer; }
    .mag-modal__hint { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: 5px 0 0; }
    .mag-modal__error { color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 12px 0 0; min-height: 1em; }
    .mag-modal__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 22px; }
    .mag-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); }
    .mag-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .mag-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .mag-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; }
    .mag-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }
  `,document.head.appendChild(t),Xe=!0}function Ce(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function yn(t){const e=M.owners.length>1||A.getMemberships().length>1,a=(t.domains||[]).filter(Boolean),n=M.canManage;return`
    <div class="mag-card" data-guid="${L(t.guid)}">
      <div class="mag-card__top">
        <span class="mag-swatch" style="background:${L(t.theme_color||"#0072BA")}"></span>
        <span class="mag-card__hd">
          <div class="mag-name" title="${L(t.name)}">${L(t.name)}</div>
          ${e&&t.owner_name?`<div class="mag-owner">${L(t.owner_name)}</div>`:""}
        </span>
        <span class="mag-badge" data-s="${L(t.status)}">${L(t.status)}</span>
      </div>
      <div class="mag-domains">${a.length?a.map(o=>L(o)).join(", "):"<span>No domains set — add yours to go live</span>"}</div>
      <div class="mag-embed">
        <input type="text" readonly value="${L(yt(t.guid))}" aria-label="Embed snippet">
        <button class="mag-btn" data-action="copy" data-guid="${L(t.guid)}" title="Copy embed snippet"><span class="material-symbols-outlined" aria-hidden="true">content_copy</span></button>
      </div>
      ${n?`
      <div class="mag-actions">
        <button class="mag-btn" data-action="edit" data-guid="${L(t.guid)}"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Edit</button>
        <button class="mag-btn" data-action="toggle" data-guid="${L(t.guid)}">${t.status==="ENABLED"?'<span class="material-symbols-outlined" aria-hidden="true">pause</span>Disable':'<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Enable'}</button>
        <button class="mag-btn danger" data-action="delete" data-guid="${L(t.guid)}"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </div>`:""}
    </div>`}function En(){return bn(),`
    <div class="page-shell" data-section="magnets">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Your Magnets</h1>
          <p class="page-description">Conversational lead-capture widgets you embed on your site.</p>
        </div>
        <button class="btn btn-primary" id="mag-new-btn" type="button" style="display:none">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          New magnet
        </button>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="mag-body">
          ${Ce("hourglass_empty","Loading magnets…")}
        </div>
      </div>
    </div>`}async function Sn(){document.getElementById("mag-new-btn")?.addEventListener("click",()=>Et(null)),document.getElementById("mag-body")?.addEventListener("click",An),await _e()}async function _e(){const t=document.getElementById("mag-body");if(!t)return;try{const n=await(await fetch(`${Q()}/m5t/v5/magnets`)).json().catch(()=>({}));if(!n.ok)throw new Error(n.message||"Failed to load");M.magnets=n.magnets||[],M.owners=n.owners||[],M.canProvision=!!n.canProvision,M.canManage=!!n.canManage,M.primaryOrgGuid=n.primaryOrgGuid||null}catch{t.innerHTML=Ce("error","Could not load your magnets. Please try again.");return}const e=document.getElementById("mag-new-btn");if(e&&(e.style.display=M.canProvision?"":"none"),!M.magnets.length){t.innerHTML=Ce("widgets",M.canProvision?"No magnets yet. Click “New magnet” to create your first.":"No magnets yet.");return}t.innerHTML=`<div class="mag-grid">${M.magnets.map(yn).join("")}</div>`}function An(t){const e=t.target.closest("[data-action]");if(!e)return;const a=e.dataset.guid,n=M.magnets.find(i=>i.guid===a),o=e.dataset.action;if(o==="copy")return wn(a);if(n){if(o==="edit")return Et(n);if(o==="toggle")return Tn(n);if(o==="delete")return In(n)}}async function wn(t){try{await navigator.clipboard.writeText(yt(t)),q("Embed snippet copied","success")}catch{q("Copy failed","danger")}}async function Tn(t){const e=t.status==="ENABLED"?"DISABLED":"ENABLED";try{if(!(await(await fetch(`${Q()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e})})).json().catch(()=>({}))).ok)throw new Error;q(e==="ENABLED"?"Magnet enabled":"Magnet disabled","success"),await _e()}catch{q("Update failed","danger")}}async function In(t){if(window.confirm(`Delete “${t.name}”? Visitors will no longer see this magnet.`))try{if(!(await(await fetch(`${Q()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`,{method:"DELETE"})).json().catch(()=>({}))).ok)throw new Error;q("Magnet deleted","success"),await _e()}catch{q("Delete failed","danger")}}function Et(t){const e=!!t,a=!e&&M.owners.length>1,n=document.createElement("div");n.className="mag-modal-scrim",n.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="${e?"Edit magnet":"New magnet"}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${e?"Edit magnet":"New magnet"}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body">
        <label class="mag-modal__label" for="mag-f-name">Name</label>
        <input class="mag-modal__input" id="mag-f-name" type="text" placeholder="e.g. Homepage quote magnet" value="${L(t?.name||"")}">

        ${a?`
        <label class="mag-modal__label" for="mag-f-owner">Client / workspace</label>
        <select class="mag-modal__select" id="mag-f-owner">
          ${M.owners.map(i=>`<option value="${L(i.guid)}"${i.guid===M.primaryOrgGuid?" selected":""}>${L(i.name||i.guid)}</option>`).join("")}
        </select>`:""}

        <label class="mag-modal__label" for="mag-f-domains">Allowed domain(s)</label>
        <input class="mag-modal__input" id="mag-f-domains" type="text" placeholder="example.com, www.example.com" value="${L((t?.domains||[]).join(", "))}">
        <p class="mag-modal__hint">Comma-separated. The magnet only loads on these domains.</p>

        <div class="mag-modal__row">
          <div>
            <label class="mag-modal__label" for="mag-f-title">Header title</label>
            <input class="mag-modal__input" id="mag-f-title" type="text" placeholder="Chat with us" value="${L(t?.title||"")}">
          </div>
          <div style="flex:0 0 auto">
            <label class="mag-modal__label" for="mag-f-color">Color</label>
            <input class="mag-modal__color" id="mag-f-color" type="color" value="${L(/^#[0-9a-fA-F]{6}$/.test(t?.theme_color||"")?t.theme_color:"#0072BA")}">
          </div>
        </div>

        <p class="mag-modal__error" id="mag-f-error"></p>
        <div class="mag-modal__actions">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="save">${e?"Save":"Create magnet"}</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n),requestAnimationFrame(()=>{n.classList.add("open"),n.querySelector(".mag-modal").classList.add("open")});const o=()=>{n.classList.remove("open"),setTimeout(()=>n.remove(),180)};n.querySelector(".mag-modal__close").addEventListener("click",o),n.querySelector('[data-x="cancel"]').addEventListener("click",o),n.addEventListener("click",i=>{i.target===n&&o()}),n.querySelector("#mag-f-name").focus(),n.querySelector('[data-x="save"]').addEventListener("click",async i=>{const s=i.currentTarget,r=n.querySelector("#mag-f-error"),d=n.querySelector("#mag-f-name").value.trim();if(!d){r.textContent="Please give your magnet a name.";return}const p=n.querySelector("#mag-f-domains").value.split(",").map(y=>y.trim()).filter(Boolean),m={name:d,domains:p,title:n.querySelector("#mag-f-title").value.trim(),theme_color:n.querySelector("#mag-f-color").value};a&&(m.owner_guid=n.querySelector("#mag-f-owner").value),s.disabled=!0,r.textContent="";try{const y=e?`${Q()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`:`${Q()}/m5t/v5/magnets`,w=await(await fetch(y,{method:e?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json().catch(()=>({}));if(!w.ok)throw new Error(w.message||"Save failed");q(e?"Magnet updated":"Magnet created","success"),o(),await _e()}catch(y){s.disabled=!1,r.textContent=y.message||"Something went wrong."}})}const Nn=Object.freeze(Object.defineProperty({__proto__:null,init:Sn,render:En},Symbol.toStringTag,{value:"Module"})),Qe="reseller_org",St="managed_client";let Ze=!1;const Cn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},P=t=>String(t??"").replace(/[&<>"']/g,e=>Cn[e]);function ke(t,e="info"){try{l.publish(c.UI_TOAST,{message:t,type:e})}catch{}}function kn(){const t=A.getActiveOrg();if(t&&t.channel===Qe)return{guid:t.guid,name:t.name};const e=A.getMemberships().find(a=>a.channel===Qe);return e?{guid:e.orgGuid,name:e.name}:null}function On(t){const e=t?.created_tz;if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Rn(){if(Ze)return;const t=document.createElement("style");t.id="m5t-clients-styles",t.textContent=`
    .page-shell .clients-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .clients-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
    .page-shell .client-card {
      display: flex; gap: 12px; align-items: flex-start; padding: 16px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 12px);
      background: var(--color-bg, #fff);
    }
    .page-shell .client-card__avatar {
      flex: 0 0 auto; width: 40px; height: 40px; border-radius: 10px; display: grid; place-items: center;
      font-weight: 700; font-size: 0.9rem; color: #fff; background: var(--color-primary-600, #0072BA);
    }
    .page-shell .client-card__main { min-width: 0; flex: 1 1 auto; }
    .page-shell .client-card__name { font-weight: 600; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .client-card__meta { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 4px; }
    .page-shell .client-card__status {
      display: inline-block; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
      padding: 2px 8px; border-radius: 999px; margin-top: 8px;
      background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473);
    }
    .page-shell .client-card__status[data-status="DRAFT"] { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .client-card__status[data-status="DISABLED"] { background: #FBE3DE; color: var(--color-danger, #DD4124); }

    /* Add-client modal */
    .client-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.45); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .client-modal-scrim.open { opacity: 1; }
    .client-modal {
      position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001;
      width: min(440px, 92vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
      border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3);
      opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease;
      font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .client-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .client-modal__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .client-modal__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 600; }
    .client-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .client-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    .client-modal__body { padding: 22px; }
    .client-modal__sub { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 16px; }
    .client-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; }
    .client-modal__input {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .client-modal__input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .client-modal__error { color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 12px 0 0; min-height: 1em; }
    .client-modal__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
    .client-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); }
    .client-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .client-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .client-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; display: inline-flex; align-items: center; gap: 6px; }
    .client-modal__btn--primary:hover { background: var(--color-primary-700, #00558D); }
    .client-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }

    /* Invite-user button on each card + the invite result view */
    .page-shell .client-card__invite {
      margin-top: 10px; appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent;
      cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-primary-600, #0072BA);
      padding: 5px 10px; border-radius: var(--radius-md, 8px); display: inline-flex; align-items: center; gap: 5px;
    }
    .page-shell .client-card__invite:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .client-card__invite .material-symbols-outlined { font-size: 16px; }
    .client-modal__row { display: flex; gap: 10px; margin-top: 12px; }
    .client-modal__row > div { flex: 1; }
    .client-modal__result { text-align: center; }
    .client-modal__result > p { font-size: 0.9rem; margin: 10px 0; }
    .client-modal__hint { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .client-modal__linkrow { display: flex; gap: 8px; margin: 8px 0 4px; }
    .client-modal__linkrow .client-modal__input { font-size: 0.8rem; }
    .invite-pending { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 10px 12px; margin-bottom: 18px; background: var(--color-surface, #F4F7FB); }
    .invite-pending__label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .invite-pending__row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
    .invite-pending__email { flex: 1 1 auto; min-width: 0; font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .invite-pending__email.expired { color: var(--color-text-subtle, #6C7C9A); }
    .invite-pending__copy { flex: 0 0 auto; font-size: 0.78rem; padding: 5px 10px; }
  `,document.head.appendChild(t),Ze=!0}const xn=t=>String(t||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()||"?";function re(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function Ln(t){const e=t.caption||t.guid,a=t.status||"ENABLED";return`
    <div class="client-card">
      <span class="client-card__avatar">${P(xn(e))}</span>
      <span class="client-card__main">
        <div class="client-card__name" title="${P(e)}">${P(e)}</div>
        <div class="client-card__meta">Added ${P(On(t.created))||"—"}</div>
        <span class="client-card__status" data-status="${P(a)}">${P(a)}</span>
        <div>
          <button class="client-card__invite" type="button" data-client-guid="${P(t.guid)}" data-client-name="${P(e)}">
            <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
          </button>
        </div>
      </span>
    </div>`}function At(){return Rn(),`
    <div class="page-shell" data-section="clients">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Clients</h1>
          <p class="page-description">The client accounts your agency manages.</p>
        </div>
        <button class="btn btn-primary" id="clients-add-btn" type="button">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          Add Client
        </button>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Managed Clients</h2>
          <span class="clients-count" id="clients-count"></span>
        </div>
        <div class="card-body" id="clients-body">
          ${re("hourglass_empty","Loading clients…")}
        </div>
      </div>
    </div>`}async function wt(){const t=kn();document.getElementById("clients-add-btn")?.addEventListener("click",()=>Pn(t)),await Tt(t)}async function Tt(t){const e=document.getElementById("clients-body"),a=document.getElementById("clients-count");if(e){if(!t?.guid){e.innerHTML=re("info","Client provisioning is available to reseller / agency accounts."),a&&(a.textContent="");return}try{const n=A.getConfig?.().BASE_URL||"",o=await fetch(`${n}/m5t/v5/acctGroup`);if(!o.ok)throw new Error(`HTTP ${o.status}`);const i=await o.json(),r=(Array.isArray(i?.data)?i.data:[]).filter(d=>d.class===St&&(!d.parent||d.parent===t.guid));if(!r.length){e.innerHTML=re("group_off","No clients yet. Add your first client to start managing magnets on their behalf."),a&&(a.textContent="");return}e.innerHTML=`<div class="clients-grid">${r.map(Ln).join("")}</div>`,a&&(a.textContent=`${r.length} client${r.length===1?"":"s"}`),e.querySelectorAll(".client-card__invite").forEach(d=>{d.addEventListener("click",()=>Mn(d.dataset.clientGuid,d.dataset.clientName))})}catch(n){console.warn("[clients] load failed:",n),e.innerHTML=re("error","Couldn’t load clients. Please try again."),a&&(a.textContent="")}}}function Pn(t){if(!t?.guid){ke("Only reseller / agency accounts can add clients.","error");return}const e=document.createElement("div");e.className="client-modal-scrim";const a=document.createElement("div");a.className="client-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${P(t.name||"your agency")}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`,document.body.appendChild(e),document.body.appendChild(a),requestAnimationFrame(()=>{e.classList.add("open"),a.classList.add("open")});const n=a.querySelector("#client-name-input"),o=a.querySelector("#client-modal-error"),i=a.querySelector('[data-act="create"]');n?.focus();const s=()=>{e.classList.remove("open"),a.classList.remove("open"),document.removeEventListener("keydown",r),setTimeout(()=>{e.remove(),a.remove()},200)},r=p=>{p.key==="Escape"&&s()};document.addEventListener("keydown",r),e.addEventListener("click",s),a.querySelector(".client-modal__close")?.addEventListener("click",s),a.querySelector('[data-act="cancel"]')?.addEventListener("click",s);const d=async()=>{const p=(n?.value||"").trim();if(o.textContent="",!p){o.textContent="Please enter a client name.",n?.focus();return}i.disabled=!0;const m=i.innerHTML;i.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…';try{const y=A.getConfig?.().BASE_URL||"",E=await fetch(`${y}/m5t/v5/acctGroup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({class:St,caption:p,parent:t.guid})}),w=await E.json().catch(()=>({}));if(!E.ok||!w?.ok){const I=E.status===403?"You are not authorized to add a client here.":w?.message||w?.error||`Failed (HTTP ${E.status})`;throw new Error(I)}ke(`Added client “${p}”`,"success"),s(),await Tt(t)}catch(y){console.warn("[clients] create failed:",y),o.textContent=y.message||"Something went wrong. Please try again.",i.disabled=!1,i.innerHTML=m}};i?.addEventListener("click",d),n?.addEventListener("keydown",p=>{p.key==="Enter"&&d()})}function Mn(t,e){if(!t)return;const a=document.createElement("div");a.className="client-modal-scrim";const n=document.createElement("div");n.className="client-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${P(e||"this client")}</strong> to a read-only login for their account.</p>
      <label class="client-modal__label" for="inv-email">Email</label>
      <input class="client-modal__input" id="inv-email" type="email" placeholder="person@client.com" autocomplete="off" />
      <div class="client-modal__row">
        <div><label class="client-modal__label" for="inv-first">First name</label><input class="client-modal__input" id="inv-first" type="text" autocomplete="off" /></div>
        <div><label class="client-modal__label" for="inv-last">Last name</label><input class="client-modal__input" id="inv-last" type="text" autocomplete="off" /></div>
      </div>
      <p class="client-modal__error" id="inv-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`,document.body.appendChild(a),document.body.appendChild(n),requestAnimationFrame(()=>{a.classList.add("open"),n.classList.add("open")});const o=()=>{a.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",i),setTimeout(()=>{a.remove(),n.remove()},200)},i=m=>{m.key==="Escape"&&o()};document.addEventListener("keydown",i),a.addEventListener("click",o),n.querySelector(".client-modal__close")?.addEventListener("click",o),n.querySelector('[data-act="cancel"]')?.addEventListener("click",o);const s=n.querySelector("#inv-email"),r=n.querySelector("#inv-error"),d=n.querySelector('[data-act="send"]');s?.focus();const p=m=>m.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(m.dataset.url),m.textContent="Copied!",setTimeout(()=>{m.textContent="Copy link"},1500)}catch{}});(async function(){const y=n.querySelector("#invite-pending");if(y)try{const E=A.getConfig?.().BASE_URL||"",I=await(await fetch(`${E}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invites`)).json().catch(()=>({})),g=I.ok&&Array.isArray(I.invites)?I.invites:[];if(!g.length){y.innerHTML="";return}y.innerHTML=`
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${g.map(_=>`
            <div class="invite-pending__row">
              <span class="invite-pending__email${_.expired?" expired":""}" title="${P(_.email)}">${P(_.email)}${_.expired?" · expired":""}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${P(_.inviteUrl)}">Copy link</button>
            </div>`).join("")}
        </div>`,y.querySelectorAll(".invite-pending__copy").forEach(p)}catch{y.innerHTML=""}})(),d?.addEventListener("click",async()=>{const m=(n.querySelector("#inv-email").value||"").trim(),y=(n.querySelector("#inv-first").value||"").trim(),E=(n.querySelector("#inv-last").value||"").trim();if(r.textContent="",!m||!y||!E){r.textContent="Email, first, and last name are required.";return}d.disabled=!0;const w=d.innerHTML;d.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const I=A.getConfig?.().BASE_URL||"",g=await fetch(`${I}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,first:y,last:E})}),_=await g.json().catch(()=>({}));if(!g.ok||!_.ok){const R=g.status===409?"A user with that email already exists.":g.status===403?"You are not authorized to invite for this client.":_.message||_.error||`Failed (HTTP ${g.status})`;throw new Error(R)}ke(`Invite created for ${m}`,"success"),n.querySelector("#invite-body").innerHTML=`
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${_.emailQueued?`An invite email is on its way to <strong>${P(m)}</strong>.`:`Invite created for <strong>${P(m)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly — it lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${P(_.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const b=n.querySelector("#inv-link");n.querySelector("#inv-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(b.value),n.querySelector("#inv-copy").textContent="Copied!"}catch{b.select()}}),n.querySelector('[data-act="done"]')?.addEventListener("click",o)}catch(I){console.warn("[clients] invite failed:",I),r.textContent=I.message||"Something went wrong. Please try again.",d.disabled=!1,d.innerHTML=w}})}const Fn={render:At,init:wt},Un=Object.freeze(Object.defineProperty({__proto__:null,default:Fn,init:wt,render:At},Symbol.toStringTag,{value:"Module"})),ne=Object.freeze({owner:{value:"owner",rank:30,label:"Owner"},admin:{value:"admin",rank:20,label:"Admin"},member:{value:"member",rank:10,label:"Member"},viewer:{value:"viewer",rank:0,label:"Viewer"}}),Dn=Object.freeze({VIEW_DASHBOARD:"view_dashboard",VIEW_MAGNETS:"view_magnets",PROVISION_MAGNETS:"provision_magnets",MANAGE_MAGNETS:"manage_magnets",VIEW_CONVERSATIONS:"view_conversations",VIEW_STATS:"view_stats",VIEW_AD_METRICS:"view_ad_metrics",CONNECT_AD_ACCOUNTS:"connect_ad_accounts",CREATE_CLIENT_ACCOUNTS:"create_client_accounts",MANAGE_TEAM:"manage_team",VIEW_BILLING:"view_billing",MANAGE_BILLING:"manage_billing"}),f=Dn,Gn=Object.freeze(Object.values(f)),J=Object.freeze([f.VIEW_DASHBOARD,f.VIEW_MAGNETS,f.VIEW_CONVERSATIONS,f.VIEW_STATS,f.VIEW_AD_METRICS]);Object.freeze({reseller_org:{owner:Gn,admin:[f.VIEW_DASHBOARD,f.VIEW_MAGNETS,f.PROVISION_MAGNETS,f.MANAGE_MAGNETS,f.VIEW_CONVERSATIONS,f.VIEW_STATS,f.VIEW_AD_METRICS,f.CONNECT_AD_ACCOUNTS,f.CREATE_CLIENT_ACCOUNTS,f.MANAGE_TEAM,f.VIEW_BILLING],member:[f.VIEW_DASHBOARD,f.VIEW_MAGNETS,f.PROVISION_MAGNETS,f.MANAGE_MAGNETS,f.VIEW_CONVERSATIONS,f.VIEW_STATS,f.VIEW_AD_METRICS],viewer:J},managed_client:{owner:[...J,f.VIEW_BILLING],admin:[...J,f.VIEW_BILLING],member:J,viewer:J},saas_org:{owner:[f.VIEW_DASHBOARD,f.VIEW_MAGNETS,f.PROVISION_MAGNETS,f.MANAGE_MAGNETS,f.VIEW_CONVERSATIONS,f.VIEW_STATS,f.VIEW_AD_METRICS,f.CONNECT_AD_ACCOUNTS,f.MANAGE_TEAM,f.VIEW_BILLING,f.MANAGE_BILLING],admin:[f.VIEW_DASHBOARD,f.VIEW_MAGNETS,f.PROVISION_MAGNETS,f.MANAGE_MAGNETS,f.VIEW_CONVERSATIONS,f.VIEW_STATS,f.VIEW_AD_METRICS,f.CONNECT_AD_ACCOUNTS,f.MANAGE_TEAM,f.VIEW_BILLING],member:[f.VIEW_DASHBOARD,f.VIEW_MAGNETS,f.PROVISION_MAGNETS,f.MANAGE_MAGNETS,f.VIEW_CONVERSATIONS,f.VIEW_STATS],viewer:J}});function Bn(t,e){const a=ne[t]?.rank??-1,n=ne[e]?.rank??1/0;return a>=ne.admin.rank&&a>=n}const et="managed_client";let tt=!1;const $n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},F=t=>String(t??"").replace(/[&<>"']/g,e=>$n[e]),at=(t,e="info")=>{try{l.publish(c.UI_TOAST,{message:t,type:e})}catch{}},Hn=t=>String(t||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()||"?";function Vn(){const t=A.getActiveOrg();let e=t&&t.channel!==et?t:null;if(!e){const n=A.getMemberships().find(o=>o.channel!==et);n&&(e={guid:n.orgGuid,channel:n.channel,memberRole:n.memberRole})}if(!e)return null;const a=A.getMemberships().find(n=>n.orgGuid===e.guid)?.name;return{...e,name:a}}function zn(t){return Object.values(ne).filter(e=>Bn(t,e.value)).sort((e,a)=>a.rank-e.rank)}function qn(){if(tt)return;const t=document.createElement("style");t.id="m5t-team-styles",t.textContent=`
    .page-shell .team-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-list { display: flex; flex-direction: column; }
    .page-shell .team-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
    .page-shell .team-row:last-child { border-bottom: 0; }
    .page-shell .team-avatar { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.8rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .team-main { flex: 1 1 auto; min-width: 0; }
    .page-shell .team-name { font-weight: 600; font-size: 0.92rem; }
    .page-shell .team-email { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .team-role { flex: 0 0 auto; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-role[data-role="owner"] { background: var(--color-accent-soft, #FBF1D2); color: var(--color-accent-strong, #915E00); }
    .page-shell .team-role[data-role="admin"] { background: var(--color-accent-soft, #EEF4FF); color: var(--color-primary-700, #00558D); }

    .team-pending { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 10px 12px; margin-bottom: 18px; background: var(--color-surface, #F4F7FB); }
    .team-pending__label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .team-pending__row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
    .team-pending__email { flex: 1 1 auto; min-width: 0; font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    /* Modal (shared visual language with the clients invite modal) */
    .team-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.45); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .team-modal-scrim.open { opacity: 1; }
    .team-modal { position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001; width: min(440px, 92vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3); opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease; font-family: var(--font-body, 'Inter', system-ui, sans-serif); }
    .team-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .team-modal__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .team-modal__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 600; }
    .team-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .team-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    .team-modal__body { padding: 22px; }
    .team-modal__sub { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 16px; }
    .team-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin: 12px 0 6px; }
    .team-modal__input, .team-modal__select { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .team-modal__input:focus, .team-modal__select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .team-modal__row { display: flex; gap: 10px; }
    .team-modal__row > div { flex: 1; }
    .team-modal__error { color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 12px 0 0; min-height: 1em; }
    .team-modal__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
    .team-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); display: inline-flex; align-items: center; gap: 6px; }
    .team-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .team-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .team-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; }
    .team-modal__btn--primary:hover { background: var(--color-primary-700, #00558D); }
    .team-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }
    .team-modal__result { text-align: center; }
    .team-modal__linkrow { display: flex; gap: 8px; margin: 10px 0 4px; }
    .team-modal__linkrow .team-modal__input { font-size: 0.8rem; }
  `,document.head.appendChild(t),tt=!0}function pe(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function jn(t){const e=t.member_role||"member";return`
    <div class="team-row">
      <span class="team-avatar">${F(Hn(t.name||t.email))}</span>
      <span class="team-main">
        <div class="team-name">${F(t.name||t.email)}${t.verified?"":' · <span style="color:var(--color-text-subtle,#6C7C9A);font-weight:400;">pending verification</span>'}</div>
        <div class="team-email" title="${F(t.email)}">${F(t.email)}</div>
      </span>
      <span class="team-role" data-role="${F(e)}">${F(ne[e]?.label||e)}</span>
    </div>`}function It(){return qn(),`
    <div class="page-shell" data-section="team">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Team</h1>
          <p class="page-description">The people who can access your workspace.</p>
        </div>
        <button class="btn btn-primary" id="team-invite-btn" type="button">
          <span class="material-symbols-outlined" aria-hidden="true">person_add</span>
          Invite teammate
        </button>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Members</h2>
          <span class="team-count" id="team-count"></span>
        </div>
        <div class="card-body" id="team-body">
          ${pe("hourglass_empty","Loading team…")}
        </div>
      </div>
    </div>`}async function Nt(){const t=Vn(),e=document.getElementById("team-invite-btn");if(!t){e&&(e.style.display="none"),document.getElementById("team-body").innerHTML=pe("info","Team management is available for agency and workspace accounts.");return}e?.addEventListener("click",()=>Wn(t)),await Ct(t)}async function Ct(t){const e=document.getElementById("team-body"),a=document.getElementById("team-count");if(e)try{const n=A.getConfig?.().BASE_URL||"",[o,i]=await Promise.all([fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/members`),fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/invites`)]),s=(await o.json().catch(()=>({}))).members||[],r=(await i.json().catch(()=>({}))).invites||[],d=r.length?`
      <div class="team-pending">
        <div class="team-pending__label">Pending invites</div>
        ${r.map(p=>`
          <div class="team-pending__row">
            <span class="team-pending__email" title="${F(p.email)}">${F(p.email)}${p.expired?" · expired":""}</span>
            <button class="team-modal__btn team-modal__btn--ghost team-copy" type="button" data-url="${F(p.inviteUrl)}">Copy link</button>
          </div>`).join("")}
      </div>`:"";e.innerHTML=d+(s.length?`<div class="team-list">${s.map(jn).join("")}</div>`:pe("group","No members yet.")),a&&(a.textContent=`${s.length} member${s.length===1?"":"s"}`),e.querySelectorAll(".team-copy").forEach(p=>p.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(p.dataset.url),p.textContent="Copied!",setTimeout(()=>{p.textContent="Copy link"},1500)}catch{}}))}catch(n){console.warn("[team] load failed:",n),e.innerHTML=pe("error","Couldn’t load the team. Please try again.")}}function Wn(t){const e=zn(t.memberRole);if(!e.length){at("You don’t have permission to invite teammates.","error");return}const a=document.createElement("div");a.className="team-modal-scrim";const n=document.createElement("div");n.className="team-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="team-modal__head">
      <span class="team-modal__title">Invite a teammate</span>
      <button class="team-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="team-modal__body" id="team-invite-body">
      <p class="team-modal__sub">They'll get a link to set a password and join <strong>${F(t.name||"your workspace")}</strong>.</p>
      <label class="team-modal__label" for="tm-email">Email</label>
      <input class="team-modal__input" id="tm-email" type="email" placeholder="teammate@company.com" autocomplete="off" />
      <div class="team-modal__row">
        <div><label class="team-modal__label" for="tm-first">First name</label><input class="team-modal__input" id="tm-first" type="text" autocomplete="off" /></div>
        <div><label class="team-modal__label" for="tm-last">Last name</label><input class="team-modal__input" id="tm-last" type="text" autocomplete="off" /></div>
      </div>
      <label class="team-modal__label" for="tm-role">Role</label>
      <select class="team-modal__select" id="tm-role">
        ${e.map(d=>`<option value="${d.value}"${d.value==="member"?" selected":""}>${F(d.label)}</option>`).join("")}
      </select>
      <p class="team-modal__error" id="tm-error"></p>
      <div class="team-modal__actions">
        <button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="team-modal__btn team-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`,document.body.appendChild(a),document.body.appendChild(n),requestAnimationFrame(()=>{a.classList.add("open"),n.classList.add("open")});const o=()=>{a.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",i),setTimeout(()=>{a.remove(),n.remove()},200)},i=d=>{d.key==="Escape"&&o()};document.addEventListener("keydown",i),a.addEventListener("click",o),n.querySelector(".team-modal__close")?.addEventListener("click",o),n.querySelector('[data-act="cancel"]')?.addEventListener("click",o),n.querySelector("#tm-email")?.focus();const s=n.querySelector("#tm-error"),r=n.querySelector('[data-act="send"]');r?.addEventListener("click",async()=>{const d=(n.querySelector("#tm-email").value||"").trim(),p=(n.querySelector("#tm-first").value||"").trim(),m=(n.querySelector("#tm-last").value||"").trim(),y=n.querySelector("#tm-role").value;if(s.textContent="",!d||!p||!m){s.textContent="Email, first, and last name are required.";return}r.disabled=!0;const E=r.innerHTML;r.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const w=A.getConfig?.().BASE_URL||"",I=await fetch(`${w}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,first:p,last:m,member_role:y})}),g=await I.json().catch(()=>({}));if(!I.ok||!g.ok){const b=I.status===409?"A user with that email already exists.":I.status===403?g.message||"You are not authorized to invite this role.":g.message||g.error||`Failed (HTTP ${I.status})`;throw new Error(b)}at(`Invite created for ${d}`,"success"),n.querySelector("#team-invite-body").innerHTML=`
        <div class="team-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${g.emailQueued?`An invite email is on its way to <strong>${F(d)}</strong>.`:`Invite created for <strong>${F(d)}</strong>.`}</p>
          <p class="team-modal__sub">Or share this link directly:</p>
          <div class="team-modal__linkrow">
            <input class="team-modal__input" id="tm-link" type="text" readonly value="${F(g.inviteUrl)}" />
            <button class="team-modal__btn team-modal__btn--primary" type="button" id="tm-copy">Copy</button>
          </div>
          <div class="team-modal__actions"><button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const _=n.querySelector("#tm-link");n.querySelector("#tm-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(_.value),n.querySelector("#tm-copy").textContent="Copied!"}catch{_.select()}}),n.querySelector('[data-act="done"]')?.addEventListener("click",()=>{o(),Ct(t)})}catch(w){console.warn("[team] invite failed:",w),s.textContent=w.message||"Something went wrong. Please try again.",r.disabled=!1,r.innerHTML=E}})}const Yn={render:It,init:Nt},Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Yn,init:Nt,render:It},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
