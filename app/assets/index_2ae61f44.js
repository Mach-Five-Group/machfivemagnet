(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const Ua="modulepreload",Ba=function(t){return"/"+t},ht={},z=function(e,a,n){let o=Promise.resolve();if(a&&a.length>0){let s=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=s(a.map(c=>{if(c=Ba(c),c in ht)return;ht[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":Ua,d||(_.as="script"),_.crossOrigin="",_.href=c,l&&_.setAttribute("nonce",l),document.head.appendChild(_),d)return new Promise((E,x)=>{_.addEventListener("load",E),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};var Ha=/([:*])(\w+)/g,Ga="([^/]+)",za=/\*/g,Va="?(?:.*)",qa=/\/\?/g,ja="/?([^/]+|)",Ya="(?:/^|^)",Wa="";function Qt(t){return t===void 0&&(t="/"),rt()?location.pathname+location.search+location.hash:t}function P(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function Oe(t){return typeof t=="string"}function Ka(t){return typeof t=="function"}function Re(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Ja(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(a,n,o){return a===null&&(a={}),a[e[o]]=decodeURIComponent(n),a},null)}function Me(t){var e=P(t).split(/\?(.*)?$/);return[P(e[0]),e.slice(1).join("")]}function ot(t){for(var e={},a=t.split("&"),n=0;n<a.length;n++){var o=a[n].split("=");if(o[0]!==""){var r=decodeURIComponent(o[0]);e[r]?(Array.isArray(e[r])||(e[r]=[e[r]]),e[r].push(decodeURIComponent(o[1]||""))):e[r]=decodeURIComponent(o[1]||"")}}return e}function Zt(t,e){var a=Me(P(t.currentLocationPath)),n=a[0],o=a[1],r=o===""?null:ot(o),i=[],l;if(Oe(e.path)){if(l=Ya+P(e.path).replace(Ha,function(f,_,E){return i.push(E),Ga}).replace(za,Va).replace(qa,ja)+"$",P(e.path)===""&&P(n)==="")return{url:n,queryString:o,hashString:Re(t.to),route:e,data:null,params:r}}else l=e.path;var s=new RegExp(l,Wa),c=n.match(s);if(c){var d=Oe(e.path)?Ja(c,i):c.groups?c.groups:c.slice(1);return{url:P(n.replace(new RegExp("^"+t.instance.root),"")),queryString:o,hashString:Re(t.to),route:e,data:d,params:r}}return!1}function ea(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function ie(t,e){return typeof t[e]>"u"||t[e]===!0}function Xa(t){if(!t)return{};var e=t.split(","),a={},n;return e.forEach(function(o){var r=o.split(":").map(function(i){return i.replace(/(^ +| +$)/g,"")});switch(r[0]){case"historyAPIMethod":a.historyAPIMethod=r[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=r[1];break;case"resolveOptionsHash":n||(n={}),n.hash=r[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":a[r[0]]=r[1]==="true";break}}),n&&(a.resolveOptions=n),a}function rt(){return typeof window<"u"}function Qa(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(a){return a}).forEach(function(a){["before","after","already","leave"].forEach(function(n){a[n]&&(e[n]||(e[n]=[]),e[n].push(a[n]))})}),e}function J(t,e,a){var n=e||{},o=0;(function r(){if(!t[o]){a&&a(n);return}Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](n)?t[o][1]:t[o][2])),r()):t[o](n,function(i){typeof i>"u"||i===!0?(o+=1,r()):a&&a(n)})})()}J.if=function(t,e,a){return Array.isArray(e)||(e=[e]),Array.isArray(a)||(a=[a]),[t,e,a]};function ft(t,e){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=Qt(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function qe(t,e){for(var a=0;a<t.instance.routes.length;a++){var n=t.instance.routes[a],o=Zt(t,n);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),t.resolveOptions.strategy==="ONE")){e();return}}e()}function Za(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function en(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var _t=rt(),tn=ea();function an(t,e){if(ie(t.navigateOptions,"updateBrowserURL")){var a=("/"+t.to).replace(/\/\//g,"/"),n=_t&&t.resolveOptions&&t.resolveOptions.hash===!0;tn?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",n?"#"+a:a),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!n){var o=location.hash;location.hash="",location.hash=o}t.instance.__freezeListening=!1},1))):_t&&(window.location.href=t.to)}e()}function ta(t,e){var a=t.instance;if(!a.lastResolved()){e();return}J(a.lastResolved().map(function(n){return function(o,r){if(!n.route.hooks||!n.route.hooks.leave){r();return}var i=!1,l=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);if(n.route.path!=="*")i=!l;else{var s=t.matches?t.matches.find(function(c){return n.route.path===c.route.path}):!1;i=!s}if(ie(t.navigateOptions,"callHooks")&&i){J(n.route.hooks.leave.map(function(c){return function(d,f){return c(function(_){_===!1?t.instance.__markAsClean(t):f()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return r()}]));return}else r()}}),{},function(){return e()})}function nn(t,e){t.match.route.hooks&&t.match.route.hooks.before&&ie(t.navigateOptions,"callHooks")?J(t.match.route.hooks.before.map(function(a){return function(o,r){return a(function(i){i===!1?t.instance.__markAsClean(t):r()},t.match)}}).concat([function(){return e()}])):e()}function on(t,e){ie(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function rn(t,e){t.match.route.hooks&&t.match.route.hooks.after&&ie(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(a){return a(t.match)}),e()}function sn(t,e){var a=t.instance.lastResolved();if(a&&a[0]&&a[0].route===t.match.route&&a[0].url===t.match.url&&a[0].queryString===t.match.queryString){a.forEach(function(n){n.route.hooks&&n.route.hooks.already&&ie(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(o){return o(t.match)})}),e(!1);return}e()}function ln(t,e){var a=t.instance._notFoundRoute;if(a){t.notFoundHandled=!0;var n=Me(t.currentLocationPath),o=n[0],r=n[1],i=Re(t.to);a.path=P(o);var l={url:a.path,queryString:r,hashString:i,data:null,route:a,params:r!==""?ot(r):null};t.matches=[l],t.match=l}e()}function cn(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function dn(t,e){t.instance._setCurrent(null),e()}function aa(t,e){ie(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var na=[sn,nn,on,rn],vt=[ta,ln,J.if(function(t){var e=t.notFoundHandled;return e},na.concat([aa]),[cn,dn])];function Xe(){return Xe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Xe.apply(this,arguments)}function bt(t,e){var a=0;function n(){if(a===t.matches.length){aa(t,e);return}J(na,Xe({},t,{match:t.matches[a]}),function(){a+=1,n()})}ta(t,n)}function je(t){t.instance.__markAsClean(t)}function Qe(){return Qe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Qe.apply(this,arguments)}var yt="[data-navigo]";function pn(t,e){var a=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:yt},n=this,o="/",r=null,i=[],l=!1,s,c=ea(),d=rt();t?o=P(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function f(m){return m.indexOf("#")>=0&&(a.hash===!0?m=m.split("#")[1]||"/":m=m.split("#")[0]),m}function _(m){return P(o+"/"+P(m))}function E(m,b,T,O){return m=Oe(m)?_(m):m,{name:O||P(String(m)),path:m,handler:b,hooks:Qa(T)}}function x(m,b,T){var O=this;return typeof m=="object"&&!(m instanceof RegExp)?(Object.keys(m).forEach(function(N){if(typeof m[N]=="function")O.on(N,m[N]);else{var W=m[N],fe=W.uses,$a=W.as,Da=W.hooks;i.push(E(N,fe,[s,Da],$a))}}),this):(typeof m=="function"&&(T=b,b=m,m=o),i.push(E(m,b,[s,T])),this)}function g(m,b){if(n.__dirty){n.__waiting.push(function(){return n.resolve(m,b)});return}else n.__dirty=!0;m=m?P(o)+"/"+P(m):void 0;var T={instance:n,to:m,currentLocationPath:m,navigateOptions:{},resolveOptions:Qe({},a,b)};return J([ft,qe,J.if(function(O){var N=O.matches;return N&&N.length>0},bt,vt)],T,je),T.matches?T.matches:!1}function h(m,b){if(n.__dirty){n.__waiting.push(function(){return n.navigate(m,b)});return}else n.__dirty=!0;m=P(o)+"/"+P(m);var T={instance:n,to:m,navigateOptions:b||{},resolveOptions:b&&b.resolveOptions?b.resolveOptions:a,currentLocationPath:f(m)};J([Za,en,qe,J.if(function(O){var N=O.matches;return N&&N.length>0},bt,vt),an,je],T,je)}function v(m,b,T){var O=xe(m,b);return O!==null?(h(O.replace(new RegExp("^/?"+o),""),T),!0):!1}function k(m){return this.routes=i=i.filter(function(b){return Oe(m)?P(b.path)!==P(m):Ka(m)?m!==b.handler:String(b.path)!==String(m)}),this}function I(){c&&(this.__popstateListener=function(){n.__freezeListening||g()},window.addEventListener("popstate",this.__popstateListener))}function D(){this.routes=i=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=l=!0}function Y(m,b){return n._notFoundRoute=E("*",m,[s,b],"__NOT_FOUND__"),this}function q(){if(d)return Z().forEach(function(m){if(m.getAttribute("data-navigo")==="false"||m.getAttribute("target")==="_blank"){m.hasListenerAttached&&m.removeEventListener("click",m.navigoHandler);return}m.hasListenerAttached||(m.hasListenerAttached=!0,m.navigoHandler=function(b){if((b.ctrlKey||b.metaKey)&&b.target.tagName.toLowerCase()==="a")return!1;var T=m.getAttribute("href");if(typeof T>"u"||T===null)return!1;if(T.match(/^(http|https)/)&&typeof URL<"u")try{var O=new URL(T);T=O.pathname+O.search}catch{}var N=Xa(m.getAttribute("data-navigo-options"));l||(b.preventDefault(),b.stopPropagation(),n.navigate(P(T),N))},m.addEventListener("click",m.navigoHandler))}),n}function Z(){return d?[].slice.call(document.querySelectorAll(a.linksSelector||yt)):[]}function he(m){return"/"+o+"/"+P(m)}function te(m){return s=m,this}function Ve(){return r}function xe(m,b,T){var O=i.find(function(fe){return fe.name===m}),N=null;if(O){if(N=O.path,b)for(var W in b)N=N.replace(":"+W,b[W]);N=N.match(/^\//)?N:"/"+N}return N&&T&&!T.includeRoot&&(N=N.replace(new RegExp("^/"+o),"")),N}function L(m){return m.getAttribute("href")}function B(m){var b=Me(P(m)),T=b[0],O=b[1],N=O===""?null:ot(O),W=Re(m),fe=E(T,function(){},[s],T);return{url:T,queryString:O,hashString:W,route:fe,data:null,params:N}}function Se(){return B(P(Qt(o)).replace(new RegExp("^"+o),""))}function Ma(m){var b={instance:n,currentLocationPath:m,to:m,resolveOptions:a};return qe(b,function(){}),b.matches?b.matches:!1}function Pa(m,b,T){typeof b<"u"&&(typeof T>"u"||T)&&(b=_(b));var O={instance:n,to:b,currentLocationPath:b};ft(O,function(){}),typeof m=="string"&&(m=typeof T>"u"||T?_(m):m);var N=Zt(O,{name:String(m),path:m,handler:function(){},hooks:{}});return N||!1}function Ae(m,b,T){return typeof b=="string"&&(b=gt(b)),b?(b.hooks[m]||(b.hooks[m]=[]),b.hooks[m].push(T),function(){b.hooks[m]=b.hooks[m].filter(function(O){return O!==T})}):(console.warn("Route doesn't exists: "+b),function(){})}function gt(m){return typeof m=="string"?i.find(function(b){return b.name===_(m)}):i.find(function(b){return b.handler===m})}function Fa(m){m.instance.__dirty=!1,m.instance.__waiting.length>0&&m.instance.__waiting.shift()()}this.root=o,this.routes=i,this.destroyed=l,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Fa,this.on=x,this.off=k,this.resolve=g,this.navigate=h,this.navigateByName=v,this.destroy=D,this.notFound=Y,this.updatePageLinks=q,this.link=he,this.hooks=te,this.extractGETParameters=function(m){return Me(f(m))},this.lastResolved=Ve,this.generate=xe,this.getLinkPath=L,this.match=Ma,this.matchLocation=Pa,this.getCurrentLocation=Se,this.addBeforeHook=Ae.bind(this,"before"),this.addAfterHook=Ae.bind(this,"after"),this.addAlreadyHook=Ae.bind(this,"already"),this.addLeaveHook=Ae.bind(this,"leave"),this.getRoute=gt,this._pathToMatchObject=B,this._clean=P,this._checkForAHash=f,this._setCurrent=function(m){return r=n.current=m},I.call(this),q.call(this)}var un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _e={exports:{}},gn=_e.exports,wt;function hn(){return wt||(wt=1,(function(t,e){(function(a,n){var o={};a.PubSub?(o=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=o,n(o)),t!==void 0&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o})(typeof window=="object"&&window||gn||un,function(a){var n={},o=-1,r="*";function i(g){var h;for(h in g)if(Object.prototype.hasOwnProperty.call(g,h))return!0;return!1}function l(g){return function(){throw g}}function s(g,h,v){try{g(h,v)}catch(k){setTimeout(l(k),0)}}function c(g,h,v){g(h,v)}function d(g,h,v,k){var I=n[h],D=k?c:s,Y;if(Object.prototype.hasOwnProperty.call(n,h))for(Y in I)Object.prototype.hasOwnProperty.call(I,Y)&&D(I[Y],g,v)}function f(g,h,v){return function(){var I=String(g),D=I.lastIndexOf(".");for(d(g,g,h,v);D!==-1;)I=I.substr(0,D),D=I.lastIndexOf("."),d(g,I,h,v);d(g,r,h,v)}}function _(g){var h=String(g),v=!!(Object.prototype.hasOwnProperty.call(n,h)&&i(n[h]));return v}function E(g){for(var h=String(g),v=_(h)||_(r),k=h.lastIndexOf(".");!v&&k!==-1;)h=h.substr(0,k),k=h.lastIndexOf("."),v=_(h);return v}function x(g,h,v,k){g=typeof g=="symbol"?g.toString():g;var I=f(g,h,k),D=E(g);return D?(v===!0?I():setTimeout(I,0),!0):!1}a.publish=function(g,h){return x(g,h,!1,a.immediateExceptions)},a.publishSync=function(g,h){return x(g,h,!0,a.immediateExceptions)},a.subscribe=function(g,h){if(typeof h!="function")return!1;g=typeof g=="symbol"?g.toString():g,Object.prototype.hasOwnProperty.call(n,g)||(n[g]={});var v="uid_"+String(++o);return n[g][v]=h,v},a.subscribeAll=function(g){return a.subscribe(r,g)},a.subscribeOnce=function(g,h){var v=a.subscribe(g,function(){a.unsubscribe(v),h.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){n={}},a.clearSubscriptions=function(h){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(h)===0&&delete n[v]},a.countSubscriptions=function(h){var v,k,I=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(h)===0){for(k in n[v])I++;break}return I},a.getSubscriptions=function(h){var v,k=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(h)===0&&k.push(v);return k},a.unsubscribe=function(g){var h=function(he){var te;for(te in n)if(Object.prototype.hasOwnProperty.call(n,te)&&te.indexOf(he)===0)return!0;return!1},v=typeof g=="string"&&(Object.prototype.hasOwnProperty.call(n,g)||h(g)),k=!v&&typeof g=="string",I=typeof g=="function",D=!1,Y,q,Z;if(v){a.clearSubscriptions(g);return}for(Y in n)if(Object.prototype.hasOwnProperty.call(n,Y)){if(q=n[Y],k&&q[g]){delete q[g],D=g;break}if(I)for(Z in q)Object.prototype.hasOwnProperty.call(q,Z)&&q[Z]===g&&(delete q[Z],D=!0)}return D}})})(_e,_e.exports)),_e.exports}var fn=hn();const p=mn(fn),u=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",AUTH_SCOPE_LOADED:"AUTH.SCOPE.LOADED",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",M5T_SIDE_NAV:"M5T_SIDE_NAV",M5T_SIDE_NAV_TAP:"M5T_SIDE_NAV.TAP",M5T_SIDE_NAV_COLLAPSE:"M5T_SIDE_NAV.COLLAPSE",M5T_SIDE_NAV_LOGO_TAP:"M5T_SIDE_NAV.LOGO_TAP",M5T_SIDE_NAV_ORG_SWITCH:"M5T_SIDE_NAV.ORG_SWITCH",M5T_SIDE_NAV_FOOTER_ACTION:"M5T_SIDE_NAV.FOOTER_ACTION",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),Ye={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://machfivemagnet-saas.onrender.com"};var We={};const R=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function oa(t,e=null){if(t in R)return R[t];if(typeof process<"u"&&We&&We[t]){const a=We[t];return a==="true"?!0:a==="false"?!1:isNaN(a)?a:Number(a)}if(typeof import.meta<"u"&&Ye&&Ye[t]){const a=Ye[t];return a==="true"?!0:a==="false"?!1:isNaN(a)?a:Number(a)}return e}function _n(t){return oa(t,!1)===!0}function vn(){return{...R}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:R,getFlag:oa,isEnabled:_n,getAllFlags:vn});function bn(){const t=e=>a=>{const n=a.detail?.pubsubTopic;n&&p.publish(n,a.detail)};document.addEventListener("nav-select",t()),document.addEventListener("logo-click",t()),document.addEventListener("nav-hover",t()),document.addEventListener("nav-double-tap",t()),document.addEventListener("nav-long-tap",t()),document.addEventListener("message-sent",t())}function yn(){console.log("[AppEvents] Initializing event listeners..."),p.subscribe(u.APP_READY,(a,n)=>{console.log("[AppEvents] APP_READY:",n)}),p.subscribe(u.APP_ERROR,(a,n)=>{console.error("[AppEvents] APP_ERROR:",n)}),p.subscribe(u.APP_SIGNOUT,(a,n)=>{console.log("[AppEvents] APP_SIGNOUT:",n)}),p.subscribe(u.ROUTE_NAV_BEFORE,(a,n)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",n),p.publish(u.UI_LOADING_START)}),p.subscribe(u.ROUTE_NAV_AFTER,(a,n)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",n),p.publish(u.UI_LOADING_END)}),p.subscribe(u.ROUTE_NAV_ERROR,(a,n)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",n),p.publish(u.APP_ERROR,{message:"Navigation error",details:n})}),p.subscribe(u.AUTH_SIGNIN_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",n)}),p.subscribe(u.AUTH_SIGNIN_FAIL,(a,n)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",n),p.publish(u.UI_TOAST,{message:n.message||"Sign in failed",type:"danger"})}),p.subscribe(u.AUTH_SIGNUP_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",n),p.publish(u.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),p.publish(u.AUTH_VERIFY_LINK)}),p.subscribe(u.AUTH_VERIFY_LINK,(a,n)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),p.subscribe(u.AUTH_SIGNUP_FAIL,(a,n)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",n),p.publish(u.UI_TOAST,{message:n.message||"Sign up failed",type:"danger"})}),p.subscribe(u.AUTH_SIGNOUT_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",n),p.publish(u.UI_TOAST,{message:"Signed out successfully",type:"info"})}),p.subscribe(u.AUTH_SIGNUP,(a,n)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),p.subscribe(u.AUTH_FORGOT,(a,n)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),p.subscribe(u.AUTH_FORGOT_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",n),p.publish(u.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),p.subscribe(u.AUTH_RESETHASH_NAV,(a,n)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),p.subscribe(u.AUTH_RESETHASH_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",n),p.publish(u.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),p.subscribe(u.AUTH_TOKEN_EXPIRED,(a,n)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",n),p.publish(u.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),p.subscribe(u.I18N_SET_LANG,(a,n)=>{console.log("[AppEvents] I18N_SET_LANG:",n);const{langCode:o}=n;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),p.publish(u.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(r){console.error("[AppEvents] Error changing language:",r),p.publish(u.UI_TOAST,{message:`Failed to change language: ${r.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),p.subscribe("CONVERSATION.PROMPT",(a,n)=>{const o=a.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display prompt in canvas:",n.message),Ke(n.message,"user",n.timestamp),p.publish(u.CANVAS_DO_SCROLL);break;case"AGENT":console.log("[AppEvents] Agent prompt (no implementation):",n.message);break;case"AGENT_CANVAS":console.log("[AppEvents] Display message in canvas:",n.message),Ke(n.message,"user",n.timestamp),p.publish(u.CANVAS_DO_SCROLL);break;case"STAGE":console.log("[AppEvents] Stage prompt for editing:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${o}`);break}}),p.subscribe("CONVERSATION.RESPONSE",(a,n)=>{const o=a.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display response in canvas:",n.message),Ke(n.message,"assistant",n.timestamp,n.streaming);break;case"WORKFLOW":console.log("[AppEvents] Send response to workflow engine:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${o}`);break}}),p.subscribe(u.UI_LOADING_START,(a,n)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),p.subscribe(u.UI_LOADING_END,(a,n)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),p.subscribe(u.UI_TOAST,(a,n)=>{console.log("[AppEvents] UI_TOAST:",n)}),p.subscribe(u.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const a="0.1",n=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${a} 7/12/2026, 12:32:33 PM|© ${n} Mach Five Tech`,"night")}),bn(),p.subscribe("M5T_PRIMARY_NAV",(a,n)=>{const o=a.split(".")[1];switch(o){case"TAP":t(n);break;case"LOGO_TAP":e();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function t(a){const{token:n,level:o,primaryToken:r}=a;switch(n){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),p.publish(u.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${n}`,{primaryToken:r});break}}function e(a){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 7/12/2026, 12:32:33 PM|© ${o} Mach Five Tech`,"night",5e3)}p.subscribe(u.AUTH_SIGNOUT,(a,n)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(R.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}function Ke(t,e="user",a=null,n=!1){const o=document.getElementById("chat-messages");if(!o){console.warn("[AppEvents] chat-messages element not found - may not be on home route");return}if(a||(a=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})),n&&e==="assistant"){const i=o.firstElementChild;if(i&&i.tagName.toLowerCase()==="m5t-chat-response"){i.setAttribute("message",t),console.log(`[AppEvents] Updated streaming ${e} bubble (${t.length} chars)`);return}}let r;e==="user"||e==="prompt"?r=document.createElement("m5t-chat-prompt"):r=document.createElement("m5t-chat-response"),r.setAttribute("message",t),r.setAttribute("timestamp",a),o.prepend(r),console.log(`[AppEvents] Added ${e} bubble to canvas (${t.length} chars)`)}class S{static CONFIG={BASE_URL:"https://machfivemagnet-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink",SCOPE:"sse_session_scope",ACTIVE_ORG:"sse_active_org"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",ME:"/m5t/v5/acctEntity/me",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#o=null;static#a=null;static#n=!1;static#r=null;static#s=null;static async init({BASE_URL:e,navigateFunction:a,customConfig:n={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(a&&typeof a=="function")this.#s=a;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#l(),this.#p(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#m(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#p(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{if(e){if((window.location.hash||"").startsWith("#/accept-invite")&&(e==="splash"||e==="signin")){console.log("[AuthController] Ignoring mvvLegit redirect to",e,"— keeping invitee on accept-invite");return}console.log("[AuthController] mvvLegit navigation to:",e),this.#i(e)}}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#f();break;case"UNAUTH":case 1:this.#_();break;case"UNVERF":case 2:this.#v();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#i(e){if(!this.#s){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const a=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",a),this.#s(a)}static#l(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#o=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#o?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#o=null}this.#r=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);e&&(this.#a=JSON.parse(e),console.log("[AuthController] Scope state loaded (cached):",this.#a?.uiMode))}catch(e){console.error("[AuthController] Error loading scope state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#a=null}}static#d(e){try{this.#o=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(a){console.error("[AuthController] Error saving entity state:",a)}}static#u(){this.#o=null,this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}}static getEntity(){return this.#o}static#c(e){try{this.#a=e,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(e))}catch(a){console.error("[AuthController] Error saving scope state:",a)}}static async fetchScope(){if(typeof mvvLegit>"u"||!this.isAuthenticated())return console.log("[AuthController] fetchScope skipped — not authenticated"),this.#a;if(this.#n)return this.#a;this.#n=!0;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),a=e?`?org=${encodeURIComponent(e)}`:"",n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${a}`);if(n.status===401||n.status===403)return console.warn("[AuthController] /me unauthorized — signing out"),this.doSignout(!0),null;if(!n.ok)return console.warn(`[AuthController] /me failed (${n.status}) — using cached scope`),this.#a;const o=await n.json();return o?.ok?(this.#c(o),p.publish(u.AUTH_SCOPE_LOADED,o),console.log(`[AuthController] Scope loaded: ${o.uiMode} (${o.memberships?.length||0} org(s))`),o):(console.warn("[AuthController] /me returned not-ok — using cached scope"),this.#a)}catch(e){return console.error("[AuthController] fetchScope error:",e),this.#a}finally{this.#n=!1}}static async setActiveOrg(e){try{e?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,e):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#a}static getCapabilities(){return this.#a?.capabilities||[]}static getUiMode(){return this.#a?.uiMode||"self_serve"}static getActiveOrg(){return this.#a?.activeOrg||null}static getMemberships(){return this.#a?.memberships||[]}static async doSignin(e,a){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:a})}),o=await n.json();return n.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#d(o.entity)),setTimeout(()=>{this.#i(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):n.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#d(o.entity),this.fetchScope(),console.log("[AuthController] Explicitly navigating to home"),this.#i(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(n){return console.error("[AuthController] Signin error:",n),{ok:!1,error:n.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const a=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!a),!e&&a){const n=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(a)}`;if(console.log("[AuthController] Sending signout beacon to:",n),navigator.sendBeacon){const o=navigator.sendBeacon(n);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else a||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#u(),console.log("[AuthController] Stopping auth ping..."),this.#g(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(a){console.error("[AuthController] Signout error:",a),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const a=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await a.json();return a.ok&&n.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#d(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||"Sign up failed",data:n}}catch(a){return console.error("[AuthController] Signup error:",a),{ok:!1,error:a.message}}}static async doResetHash(e,a){try{const n=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:a,modified_by:e})}),r=await o.json();return o.ok&&r.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:r}):{ok:!1,error:r.error||"Password reset failed",data:r}}catch(n){return console.error("[AuthController] Reset password error:",n),{ok:!1,error:n.message}}}static#m(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#h()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#g(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#h(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#r=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#r}static clearDeepLink(){this.#r=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#f(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#m(),this.fetchScope()}static#_(){console.log("[AuthController] User unauthenticated"),this.#g()}static#v(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",a=localStorage.getItem(e);if(!a)return"UNAUTH";if(typeof LZString>"u")return null;const n=LZString.decompressFromUTF16(a),r=JSON.parse(n)?.state;return r===1?"UNAUTH":r===2?"UNVERF":r===4?"AUTH":r===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#i(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#h()}}class w{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_dashboard:"Dashboard",nav_dashboard_tagline:"Overview of your activity",nav_magnets:"Your Magnets",nav_magnets_tagline:"Manage your conversational magnets",nav_templates:"Templates",nav_templates_tagline:"Start from a magnet template",nav_conversations:"Conversations",nav_conversations_tagline:"Captured lead conversations",nav_ab_testing:"A/B Testing",nav_ab_testing_tagline:"Experiment and optimize",nav_analytics:"Analytics",nav_analytics_tagline:"Performance and ad metrics",nav_ad_accounts:"Ad Accounts",nav_ad_accounts_tagline:"Connect advertising accounts",nav_clients:"Clients",nav_clients_tagline:"Manage your client accounts",nav_team:"Team",nav_team_tagline:"Invite and manage teammates",nav_billing:"Billing",nav_billing_tagline:"Plan, usage, and invoices",nav_settings:"Settings",nav_settings_tagline:"Account and workspace settings",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:a,whitelabel:n,lang:o}){e&&(this.#t.buildMode=e),a&&(this.#t.product=a),n&&(this.#t.whitelabel=n),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(e,a={}){const n={...this.#t,...a},{buildMode:o,product:r,whitelabel:i,lang:l}=n;try{const s=this.#e[o]?.[r]?.[i]?.[l]?.[e];return s?Array.isArray(s)?s[Math.floor(Math.random()*s.length)]:s:(console.warn(`[MicrocopyManager] Token not found: ${e} (${o}/${r}/${i}/${l})`),null)}catch(s){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,s),null}}static getAll(e={}){const a={...this.#t,...e},{buildMode:n,product:o,whitelabel:r,lang:i}=a;try{return this.#e[n]?.[o]?.[r]?.[i]||null}catch(l){return console.error("[MicrocopyManager] Error retrieving all tokens",l),null}}static has(e,a={}){const n={...this.#t,...a},{buildMode:o,product:r,whitelabel:i,lang:l}=n;try{return!!this.#e[o]?.[r]?.[i]?.[l]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:a,whitelabel:n}=this.#t;try{return Object.keys(this.#e[e]?.[a]?.[n]||{})}catch{return[]}}static update(e,a,n={}){const o={...this.#t,...n},{buildMode:r,product:i,whitelabel:l,lang:s}=o;try{return this.#e[r]||(this.#e[r]={}),this.#e[r][i]||(this.#e[r][i]={}),this.#e[r][i][l]||(this.#e[r][i][l]={}),this.#e[r][i][l][s]||(this.#e[r][i][l][s]={}),this.#e[r][i][l][s][e]=a,!0}catch(c){return console.error(`[MicrocopyManager] Error updating token: ${e}`,c),!1}}static delete(e,a={}){const n={...this.#t,...a},{buildMode:o,product:r,whitelabel:i,lang:l}=n;try{return delete this.#e[o]?.[r]?.[i]?.[l]?.[e],!0}catch(s){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,s),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(a){return console.error("[MicrocopyManager] Error importing data",a),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:w});class X{static#e=!1;static#t=null;static#o=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#n();w.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),R.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#r(),this.#p(),this.#e=!0,this.refresh()}static#a(e){const a={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},n=e.toLowerCase();return a[n]||"DEV"}static#n(){const a=this.#a("production"),n=localStorage.getItem(R.FF_SSE_LS_WHITELABEL)||R.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(R.FF_SSE_LS_USER_LANG)||R.FF_SSE_I18N_LANG;return{buildMode:a,product:R.FF_SSE_I18N_PRODUCT,whitelabel:n,lang:o}}static#r(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,a,n)=>{R.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",n),this.#t=n,setTimeout(()=>{this.refresh()},R.FF_SSE_I18N_APPLY_DELAY_MS)},R.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#s())}static#s(){setInterval(()=>{const a=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");a&&a!==this.#t&&(this.#t=a,this.refresh())},500)}static#p(){this.#o||(this.#o=new MutationObserver(e=>{let a=!1;for(const n of e){for(const o of n.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){a=!0;break}if(a)break}a&&(R.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#o.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#i(document.body),this.#l(document.body),R.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#i(e){const a=e.querySelectorAll("[data-meta-copywrite-i118n]");R.FF_SSE_I18N_DEBUG&&a.length>0&&console.log(`[I18nController] Processing ${a.length} elements`),a.forEach(n=>{try{const o=n.getAttribute("data-meta-copywrite-i118n"),r=JSON.parse(o);if(!r.token){console.warn("[I18nController] Missing token in config:",r);return}const i=r.attribute||"textContent",l=w.get(r.token);if(l===null){console.warn(`[I18nController] Microcopy not found for token: ${r.token}`);return}i==="textContent"?n.textContent=l:i==="innerHTML"?n.innerHTML=l:n.setAttribute(i,l),R.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${l}" to ${i} for token: ${r.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,n)}})}static#l(e){e.querySelectorAll("*").forEach(n=>{n.shadowRoot&&(this.#i(n.shadowRoot),this.#l(n.shadowRoot))})}static setLanguage(e){const a=w.getAvailableLanguages();if(!a.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,a);return}localStorage.setItem(R.FF_SSE_LS_USER_LANG,e),w.setContext({lang:e}),console.log("[I18nController] Language changed to:",e);const n=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(e){localStorage.setItem(R.FF_SSE_LS_WHITELABEL,e),w.setContext({whitelabel:e}),R.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return w.getContext().lang}static getAvailableLanguages(){return w.getAvailableLanguages()}static getContext(){return w.getContext()}static destroy(){this.#o&&(this.#o.disconnect(),this.#o=null),this.#e=!1,this.#t=null,R.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{X.initialize()}):X.initialize());class it{static _initialized=!1;static _debug=!1;static init(e={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=e.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const a=n=>{this._handleSSEMessage(n)};return window.mvvSSEther.onmessage(a),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(e){try{this._debug&&console.log("[MachVive] SSE message received:",e);const a=e?.data;if(!a){this._debug&&console.log("[MachVive] No data in message, skipping");return}const n=a.data||a.package||a;if(!n){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=n.cfg;const r=n.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",r)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(l){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:l.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const i=o?.topic;if(!i){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",i),!this._isValidTopic(i)){console.warn(`[MachVive] Topic '${i}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(i,r,e,a)}catch(a){console.error("[MachVive] Error handling SSE message:",a)}}static _isValidTopic(e){return!u||!u.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,a,n,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const r=window.PubSub||PubSub,i={message:a,metadata:{source:"sse",sseEventId:n.id,timestamp:n.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${e}':`,i);const l=u[e];console.log(`[MachVive] AppBroadcast.${e} = '${l}'`),r.publish(l,i),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(r){console.error(`[MachVive] Error publishing to topic '${e}':`,r)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=it);typeof window<"u"&&(window.MachVive=it);const Et="m5t_sidenav_collapsed",wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class En extends HTMLElement{static get observedAttributes(){return["data-active-token","data-collapsed"]}constructor(){super(),this.attachShadow({mode:"open"}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=e=>{if(this.getAttribute("data-open")==="true"){if(e.key==="Escape"){e.preventDefault(),this.closeDrawer();return}if(e.key==="Tab"){const a=this.#u();if(a.length<2)return;const n=a[0],o=a[a.length-1],r=this.shadowRoot.activeElement;e.shiftKey&&r===n?(e.preventDefault(),o.focus()):!e.shiftKey&&r===o&&(e.preventDefault(),n.focus())}}};#o=()=>{this.closeDrawer(),this.#c()};connectedCallback(){if(!this.hasAttribute("data-collapsed"))try{localStorage.getItem(Et)==="true"&&this.setAttribute("data-collapsed","true")}catch{}this.activeToken=this.getAttribute("data-active-token")||null,this.render(),this.#l(),this.addEventListener("keydown",this.#t),this.#e=window.matchMedia("(max-width: 768px)"),this.#e.addEventListener("change",this.#o),this.#c()}disconnectedCallback(){this.removeEventListener("keydown",this.#t),this.#e?.removeEventListener("change",this.#o)}attributeChangedCallback(e,a,n){a===n||!this.shadowRoot||(e==="data-active-token"?(this.activeToken=n,this.#d()):e==="data-collapsed"&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:e,orgs:a,activeOrg:n,footerBadge:o,loading:r}={}){e!==void 0&&(this.items=Array.isArray(e)?e:this.#a(e)||[]),a!==void 0&&(this.orgs=Array.isArray(a)?a:this.#a(a)||[]),n!==void 0&&(this.activeOrgGuid=n||null),o!==void 0&&(this.footerBadge=o||null),r!==void 0&&(this.loading=!!r),this.shadowRoot&&(this.render(),this.#l())}setButtons(e){this.setState({buttons:e})}setOrgs(e){this.setState({orgs:e})}setActiveOrgGuid(e){this.setState({activeOrg:e})}setFooterBadge(e){this.setState({footerBadge:e})}setActiveToken(e){this.activeToken=e||null,this.#d()}toggleCollapsed(e){const a=typeof e=="boolean"?e:this.getAttribute("data-collapsed")!=="true";this.setAttribute("data-collapsed",String(a));try{localStorage.setItem(Et,String(a))}catch{}this.dispatchEvent(new CustomEvent("nav-collapse",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.COLLAPSE",collapsed:a,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute("data-open","true"),this.shadowRoot.querySelector(".hamburger")?.setAttribute("aria-expanded","true"),this.#c(),(this.#u()[0]||this.shadowRoot.querySelector(".sidenav"))?.focus?.()}closeDrawer(){if(this.getAttribute("data-open")!=="true")return;this.removeAttribute("data-open");const e=this.shadowRoot.querySelector(".hamburger");e?.setAttribute("aria-expanded","false"),this.#c(),e&&this.#e?.matches?e.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute("data-open")==="true"?this.closeDrawer():this.openDrawer()}#a(e){try{return e?JSON.parse(e):null}catch(a){return console.error("[M5TSideNav] bad JSON:",a),null}}#n(e){return String(e??"").replace(/[&<>"']/g,a=>wn[a])}#r(e){return e?`<span class="ms" aria-hidden="true">${this.#n(e)}</span>`:""}#s(e){if(!e||!e.token)return"";const a=e.token===this.activeToken,n=e.route||"#",o=n.startsWith("#")?n:`#${n}`,r=typeof e.count=="number"&&e.count>0?`<span class="badge">${e.count}</span>`:"";return`
      <a class="nav-item${a?" active":""}" href="${this.#n(o)}"
         data-token="${this.#n(e.token)}" data-route="${this.#n(n)}"
         ${a?'aria-current="page"':""}
         ${e.tagline?`title="${this.#n(e.tagline)}"`:""}>
        ${this.#r(e.icon)}
        <span class="label">${this.#n(e.caption||e.token)}</span>
        ${r}
      </a>`}#p(){return this.loading?Array.from({length:6}).map(()=>'<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>').join(""):this.items.map(e=>e&&e.group&&Array.isArray(e.items)?`
          <div class="nav-group">
            <div class="group-label">${this.#n(e.caption||"")}</div>
            ${e.items.map(a=>this.#s(a)).join("")}
          </div>`:this.#s(e)).join("")}#i(){const e=this.footerBadge,a=Array.isArray(this.orgs)&&this.orgs.length>1?`
      <label class="org-switcher" title="Active organization">
        ${this.#r("corporate_fare")}
        <select class="org-select" aria-label="Active organization">
          ${this.orgs.map(o=>`<option value="${this.#n(o.guid)}" ${o.guid===this.activeOrgGuid?"selected":""}>${this.#n(o.name||o.guid)}</option>`).join("")}
        </select>
      </label>`:"",n=e?`<span class="footer-badge">${this.#r(e.icon||"verified")}<span>${this.#n(e.caption||"")}</span></span>`:"";return`
      ${a}
      ${n}
      <div class="footer-actions">
        <button class="footer-action" type="button" data-action="account" aria-label="Account" title="Account">${this.#r("account_circle")}<span>Account</span></button>
        <button class="footer-action" type="button" data-action="lang" aria-label="Language" title="Language">${this.#r("language")}<span>Language</span></button>
        <button class="footer-action" type="button" data-action="signout" aria-label="Sign out" title="Sign out">${this.#r("logout")}<span>Sign out</span></button>
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
          ${this.#p()}
        </nav>

        <div class="footer" part="footer">
          ${this.#i()}
        </div>
      </aside>
    `}#l(){this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",a=>{a.metaKey||a.ctrlKey||a.shiftKey||a.button===1||(a.preventDefault(),this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.TAP",token:e.getAttribute("data-token"),route:e.getAttribute("data-route"),caption:e.querySelector(".label")?.textContent||"",timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(".collapse-btn")?.addEventListener("click",()=>this.toggleCollapsed()),this.shadowRoot.querySelector(".hamburger")?.addEventListener("click",()=>this.toggleDrawer()),this.shadowRoot.querySelector(".scrim")?.addEventListener("click",()=>this.closeDrawer()),this.#c(),this.shadowRoot.querySelector(".logo")?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.LOGO_TAP",timestamp:Date.now()}}))}),this.shadowRoot.querySelector(".org-select")?.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("org-switch",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.ORG_SWITCH",orgGuid:e.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(".footer-action").forEach(e=>{e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("footer-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.FOOTER_ACTION",action:e.getAttribute("data-action"),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute("data-open")==="true"&&this.#u()[0]?.focus()}#d(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{const a=e.getAttribute("data-token")===this.activeToken;e.classList.toggle("active",a),a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}#u(){return Array.from(this.shadowRoot.querySelectorAll(".sidenav a[href], .sidenav button:not([disabled]), .sidenav select")).filter(e=>e.offsetParent!==null)}#c(){const e=this.shadowRoot?.querySelector(".sidenav");if(!e)return;const a=this.#e?this.#e.matches:window.matchMedia("(max-width: 768px)").matches;e.inert=a&&this.getAttribute("data-open")!=="true"}}customElements.define("m5t-side-nav",En);class He{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"LEADS",caption:"Leads",enabled:!0,icon:"fas fa-user-plus",admin_role:!1,tagline:"Lead management and tracking",secondary:[{token:"LEADS_MANAGE",caption:"Manage",enabled:!0,icon:"fas fa-list-ul",admin_role:!1,tagline:"Manage leads (CRUD operations)",secondary:[]},{token:"LEADS_EXPORT",caption:"Export",enabled:!0,icon:"fas fa-file-export",admin_role:!1,tagline:"Export leads to external systems",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static#o={"client-saas":[{token:"DASHBOARD",caption:"Dashboard",icon:"dashboard",route:"/home",capability:"view_dashboard",enabled:!0,tagline:"Overview of your activity"},{token:"MAGNETS",caption:"Your Magnets",icon:"widgets",route:"/magnets",capability:"view_magnets",enabled:!0,tagline:"Manage your conversational magnets",children:[{token:"MAGNETS_ALL",caption:"All",route:"/magnets",capability:"view_magnets"},{token:"MAGNETS_DRAFTS",caption:"Drafts",route:"/magnets/drafts",capability:"view_magnets"},{token:"MAGNETS_ARCHIVED",caption:"Archived",route:"/magnets/archived",capability:"view_magnets"}]},{token:"LEADS",caption:"Leads",icon:"contacts",route:"/leads",capability:"view_magnets",enabled:!0,tagline:"Leads your magnets captured"},{token:"TEMPLATES",caption:"Templates",icon:"content_copy",route:"/templates",capabilityAny:["provision_magnets","manage_magnets"],enabled:!0,tagline:"Start from a magnet template"},{token:"CONVERSATIONS",caption:"Conversations",icon:"forum",route:"/conversations",capability:"view_conversations",enabled:!0,tagline:"Captured lead conversations"},{token:"AB_TESTING",caption:"A/B Testing",icon:"science",route:"/ab-testing",capability:"manage_magnets",enabled:!0,tagline:"Experiment and optimize"},{token:"ANALYTICS",caption:"Analytics",icon:"monitoring",route:"/analytics",capability:"view_stats",enabled:!0,tagline:"Performance and ad metrics",children:[{token:"ANALYTICS_OVERVIEW",caption:"Overview",route:"/analytics",capability:"view_stats"},{token:"ANALYTICS_CONVERSIONS",caption:"Conversions",route:"/analytics/conversions",capability:"view_stats"},{token:"ANALYTICS_ADS",caption:"Ad Performance",route:"/analytics/ad-performance",capability:"view_ad_metrics"}]},{token:"AD_ACCOUNTS",caption:"Ad Accounts",icon:"ads_click",route:"/ad-accounts",capability:"connect_ad_accounts",enabled:!0,tagline:"Connect advertising accounts"},{token:"CLIENTS",caption:"Clients",icon:"groups",route:"/clients",capability:"create_client_accounts",enabled:!0,tagline:"Manage your client accounts"},{token:"TEAM",caption:"Team",icon:"group",route:"/team",capability:"manage_team",enabled:!0,tagline:"Invite and manage teammates"},{token:"BILLING",caption:"Billing",icon:"receipt_long",route:"/billing",capability:"view_billing",enabled:!0,tagline:"Plan, usage, and invoices"},{token:"SETTINGS",caption:"Settings",icon:"settings",route:"/settings",capability:null,enabled:!0,tagline:"Account and workspace settings",children:[{token:"SETTINGS_GENERAL",caption:"General",route:"/settings",capability:null},{token:"SETTINGS_WORKSPACE",caption:"Workspace",route:"/settings/workspace",capability:null},{token:"SETTINGS_INTEGRATIONS",caption:"Integrations",route:"/settings/integrations",capability:null},{token:"SETTINGS_SECURITY",caption:"Security",route:"/settings/security",capability:null}]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#a(e){if(!e)return e;const a=e.token.toLowerCase(),n=`nav_${a}`,o=`nav_${a}_tagline`,r=w.get(n)||e.caption,i=w.get(o)||e.tagline;return{...e,caption:r,tagline:i,secondary:e.secondary?e.secondary.map(l=>this.#a(l)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(a=>this.#a(a)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),a=[];return e.forEach(n=>{a.push(n),n.secondary&&n.secondary.length>0&&a.push(...n.secondary)}),a}static getNavByToken(e){return this.getFlattenedNav().find(n=>n.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(a=>a.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(a=>a.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#n(e){if(!e||!e.token)return e;const a=e.token.toLowerCase();return{...e,caption:w.get(`nav_${a}`)||e.caption,tagline:w.get(`nav_${a}_tagline`)||e.tagline}}static getSideNav(e=[],{uiMode:a=null}={}){const n=this.#o[this.#e]?this.#e:"client-saas",o=this.#o[n]||[],r=Array.isArray(e)?e:[],i=s=>s.capability==null&&!s.capabilityAny?!0:!(s.capability&&!r.includes(s.capability)||s.capabilityAny&&!s.capabilityAny.some(c=>r.includes(c))),l=[];for(const s of o)if(s.group&&Array.isArray(s.items)){if(!i(s))continue;const c=s.items.filter(i).map(d=>this.#n(d));c.length&&l.push({...this.#n(s),items:c})}else if(i(s)){const c=this.#n(s);Array.isArray(s.children)&&s.children.length&&(c.children=s.children.filter(i).map(d=>this.#n(d))),l.push(c)}return l}static getSideNavJSON(e=[],a={}){return JSON.stringify(this.getSideNav(e,a))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const a=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,n=await fetch(`${e}/coreMeta?meta_token=${a}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();const o=await n.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${a}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(a){return console.error("[NavMetaManager] Error fetching from coreMeta:",a),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:He});class xn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.hideLogo=!1,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.hideLogo=this.getAttribute("data-hide-logo")==="true",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const e=He.getPrimaryNav();e&&e.length>0?(this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const a=this.buttons.find(n=>n.selected);this.selectedPrimaryToken=a?a.token:this.buttons[0]?.token||null}catch(a){console.error("[M5TPrimaryNav] Error parsing buttons:",a),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(a=>a.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,a){if(a==="primary"){const n=this.buttons.find(o=>o.token===e);return{caption:n?.caption||"",tagline:n?.tagline||""}}else for(const n of this.buttons)if(n.secondary){const o=n.secondary.find(r=>r.token===e);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const e=this.getSecondaryButtons(),a=e.length>0,n=!Array.isArray(this.buttons)||this.buttons.length===0;this.shadowRoot.innerHTML=`
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
          ${this.buttons.map((o,r)=>this.renderButton(o,r,"primary")).join("")}
        </nav>
        ${a?`
        <nav class="secondary-nav">
          ${e.map((o,r)=>this.renderButton(o,r,"secondary")).join("")}
        </nav>`:""}
      </div>
    `}renderButton(e,a,n="primary"){const o=n==="primary"?e.token===this.selectedPrimaryToken:!1,r=typeof e.count=="number"&&e.count!==null&&e.count!==void 0,i=e.icon&&e.icon.trim()!=="",l=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${e.token}"
        data-level="${n}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${l?`title="${e.tagline}"`:""}
      >
        ${i?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${r?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(n=>{const o=n.getAttribute("data-token"),r=n.getAttribute("data-level");n.addEventListener("click",i=>{o&&!i.currentTarget.disabled&&!this.longTapFired&&(r==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),n.addEventListener("dblclick",i=>{if(o&&!i.currentTarget.disabled){const l=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:r,caption:l.caption,tagline:l.tagline,timestamp:Date.now()}}))}}),n.addEventListener("mouseenter",i=>{if(o&&!i.currentTarget.disabled){const l=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:l.caption,tagline:l.tagline,action:"enter",timestamp:Date.now()}}))}}),n.addEventListener("mouseleave",i=>{if(o&&!i.currentTarget.disabled){const l=this.getButtonData(o,r);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:r,caption:l.caption,tagline:l.tagline,action:"leave",timestamp:Date.now()}}))}}),n.addEventListener("mousedown",i=>{o&&!i.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const l=this.getButtonData(o,r);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:r,caption:l.caption,tagline:l.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),n.addEventListener("mouseup",i=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),n.addEventListener("mouseleave",i=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const a=this.shadowRoot.querySelector(".logo");a&&a.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(e){const a=this.buttons.find(o=>o.token===e),n=this.getButtonData(e,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,level:"primary",caption:n.caption,tagline:n.tagline,hasSecondary:(a?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){const a=this.getButtonData(e,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:a.caption,tagline:a.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,a,n="primary"){let o;n==="primary"?o=this.buttons.find(r=>r.token===e):o=this.getSecondaryButtons().find(i=>i.token===e),o&&(o.count=a,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",xn);window.m5t=Object.create(null);window.m5t.pubsub=p;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(t){console.log("mvvLegit (direct): ReferenceError -",t.message)}const Sn=Object.keys(window).filter(t=>t.toLowerCase().includes("mvv")||t.toLowerCase().includes("neodigm")||t.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",Sn);const M=new pn("/",{hash:!0});window.router=M;function Q(t){const e=t?`${t.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${t} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),p.publish(u.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function j(t){console.log("[Router] Navigating to:",t),M.navigate(`/${t}`)}const An=new Set(["splash","signin","signup","forgot","resethash","verf-link","accept-invite","signout"]);let ve={},Ze={},et=null;const Tn={admin:{caption:"Platform Admin",icon:"shield_person"},reseller:{caption:"Reseller",icon:"handshake"},managed:{caption:"Managed",icon:"visibility"},self_serve:{caption:"Self-Serve",icon:"rocket_launch"}};function Je(){const t=document.getElementById("m5t-side-nav");if(!t)return;const e=!S.getScope()&&S.isAuthenticated(),a=S.getCapabilities(),n=S.getUiMode(),o=He.getSideNav(a,{uiMode:n});ve={},Ze={};const r=c=>{c.route&&(ve[c.route]={sectionToken:c.token,childToken:null,children:c.children||null},Array.isArray(c.children)&&c.children.forEach(d=>{d.route&&(Ze[d.token]=d.route,ve[d.route]={sectionToken:c.token,childToken:d.token,children:c.children})}))},i=c=>c.forEach(d=>{d.group&&Array.isArray(d.items)?i(d.items):r(d)});i(o);const l=S.getMemberships(),s=S.getActiveOrg();t.setState({buttons:o,orgs:l.map(c=>({guid:c.orgGuid,name:c.name||c.channel,channel:c.channel})),activeOrg:s?.guid||null,footerBadge:Tn[n]||null,loading:e}),et&&ra(et)}function ra(t){const e=document.getElementById("m5t-side-nav"),a=ve[`/${t}`]||ve[t]||null;e?.setActiveToken(a?.sectionToken||null),kn(a)}function kn(t){const e=document.getElementById("m5t-sub-nav"),a=document.getElementById("app-shell");if(!e)return;const n=t?.children;e.hidden=!1,n&&n.length>1?(e.updateButtons(n.map(o=>({token:o.token,caption:o.caption,enabled:!0,selected:o.token===t.childToken}))),a?.classList.add("has-sub-nav")):(e.updateButtons([]),a?.classList.remove("has-sub-nav"))}function Cn(){const t=X.getAvailableLanguages&&X.getAvailableLanguages()||[];if(t.length<2){p.publish(u.UI_TOAST,{message:"Only one language is available",type:"info"});return}const e=localStorage.getItem(R.FF_SSE_LS_USER_LANG)||R.FF_SSE_I18N_LANG||t[0],a=t[(t.indexOf(e)+1)%t.length];X.setLanguage(a),p.publish(u.UI_TOAST,{message:`Language: ${a}`,type:"info"})}function In(){const t=document.getElementById("m5t-side-nav");if(!t)return;He.setAppToken("client-saas"),document.getElementById("app-shell")?.classList.toggle("nav-collapsed",t.getAttribute("data-collapsed")==="true"),t.addEventListener("nav-select",a=>{const n=a.detail?.route;n&&M.navigate(n.startsWith("/")?n:`/${n}`)}),t.addEventListener("logo-click",()=>M.navigate("/home")),t.addEventListener("nav-collapse",a=>{document.getElementById("app-shell")?.classList.toggle("nav-collapsed",!!a.detail?.collapsed)}),t.addEventListener("org-switch",a=>{const n=a.detail?.orgGuid;n&&S.setActiveOrg(n)}),t.addEventListener("footer-action",a=>{switch(a.detail?.action){case"account":M.navigate("/settings");break;case"signout":M.navigate("/signout");break;case"lang":Cn();break}}),document.getElementById("m5t-sub-nav")?.addEventListener("nav-select",a=>{const n=Ze[a.detail?.token];n&&M.navigate(n)}),document.addEventListener("language-changed",()=>Je()),Je(),p.subscribe(u.AUTH_SCOPE_LOADED,()=>Je())}function Nn(t){et=t;const e=document.getElementById("m5t-side-nav"),a=document.getElementById("app-shell");if(!e||!a)return;const n=!An.has(t);if(e.hidden=!n,a.classList.toggle("has-side-nav",n),n)ra(t);else{const o=document.getElementById("m5t-sub-nav");o&&(o.hidden=!0),a.classList.remove("has-sub-nav")}}p.subscribe(u.ROUTE_NAV_AFTER,(t,e)=>{e?.route&&Nn(e.route)});const ia=()=>{console.log("[Router] Route: splash"),p.publish(u.ROUTE_NAV_BEFORE,{route:"splash"});const t=new URLSearchParams(window.location.search||""),e=!!(t.get("uid")&&t.get("token"));z(e?()=>Promise.resolve().then(()=>Fn):()=>Promise.resolve().then(()=>Un),void 0).then(n=>{const o=document.getElementById("app");o.innerHTML=n.render(),n.init&&n.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"splash"})}).catch(n=>{console.error("[Router] Error loading splash route:",n),p.publish(u.ROUTE_NAV_ERROR,{route:"splash",error:n})})};M.on("/",ia);M.on("/splash",ia);M.on("/signin",()=>{console.log("[Router] Route: /signin"),p.publish(u.ROUTE_NAV_BEFORE,{route:"signin"}),z(()=>Promise.resolve().then(()=>qn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"signin"})}).catch(t=>{console.error("[Router] Error loading signin route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"signin",error:t})})});M.on("/signup",()=>{console.log("[Router] Route: /signup"),p.publish(u.ROUTE_NAV_BEFORE,{route:"signup"}),z(()=>Promise.resolve().then(()=>Xn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"signup"})}).catch(t=>{console.error("[Router] Error loading signup route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"signup",error:t})})});M.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),p.publish(u.ROUTE_NAV_BEFORE,{route:"verf-link"}),z(()=>Promise.resolve().then(()=>eo),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(t=>{console.error("[Router] Error loading verf-link route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"verf-link",error:t})})});M.on("/forgot",()=>{console.log("[Router] Route: /forgot"),p.publish(u.ROUTE_NAV_BEFORE,{route:"forgot"}),z(()=>Promise.resolve().then(()=>lo),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(t=>{console.error("[Router] Error loading forgot route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"forgot",error:t})})});M.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!Q("resethash")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"resethash"}),z(()=>Promise.resolve().then(()=>uo),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(t=>{console.error("[Router] Error loading resethash route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"resethash",error:t})})});M.on("/home",()=>{if(console.log("[Router] Route: /home"),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"home"}),z(()=>Promise.resolve().then(()=>yo),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"home"})}).catch(t=>{console.error("[Router] Error loading home route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"home",error:t})})});M.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!Q("signout")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"signout"}),z(()=>Promise.resolve().then(()=>xo),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"signout"})}).catch(t=>{console.error("[Router] Error loading signout route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"signout",error:t})})});const Ln=[{path:"/templates",name:"templates",title:"Templates",icon:"content_copy"},{path:"/conversations",name:"conversations",title:"Conversations",icon:"forum"},{path:"/ab-testing",name:"ab-testing",title:"A/B Testing",icon:"science"},{path:"/analytics",name:"analytics",title:"Analytics",icon:"monitoring"},{path:"/ad-accounts",name:"ad-accounts",title:"Ad Accounts",icon:"ads_click"},{path:"/billing",name:"billing",title:"Billing",icon:"receipt_long"},{path:"/settings",name:"settings",title:"Settings",icon:"settings"},{path:"/magnets/drafts",name:"magnets/drafts",title:"Magnets · Drafts",icon:"widgets"},{path:"/magnets/archived",name:"magnets/archived",title:"Magnets · Archived",icon:"widgets"},{path:"/analytics/conversions",name:"analytics/conversions",title:"Analytics · Conversions",icon:"monitoring"},{path:"/settings/workspace",name:"settings/workspace",title:"Settings · Workspace",icon:"settings"},{path:"/settings/integrations",name:"settings/integrations",title:"Settings · Integrations",icon:"settings"},{path:"/settings/security",name:"settings/security",title:"Settings · Security",icon:"settings"}];Ln.forEach(({path:t,name:e,title:a,icon:n})=>{M.on(t,()=>{if(console.log(`[Router] Route: ${t}`),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:e}),z(()=>Promise.resolve().then(()=>To),void 0).then(o=>{const r=document.getElementById("app");r.innerHTML=o.render({title:a,icon:n,name:e}),o.init&&o.init({name:e}),p.publish(u.ROUTE_NAV_AFTER,{route:e})}).catch(o=>{console.error(`[Router] Error loading section route (${e}):`,o),p.publish(u.ROUTE_NAV_ERROR,{route:e,error:o})})})});M.on("/magnets",()=>{if(console.log("[Router] Route: /magnets"),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"magnets"}),z(()=>Promise.resolve().then(()=>sr),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"magnets"})}).catch(t=>{console.error("[Router] Error loading magnets route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"magnets",error:t})})});M.on("/leads",()=>{if(console.log("[Router] Route: /leads"),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"leads"}),z(()=>Promise.resolve().then(()=>br),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"leads"})}).catch(t=>{console.error("[Router] Error loading leads route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"leads",error:t})})});M.on("/analytics/ad-performance",()=>{if(console.log("[Router] Route: /analytics/ad-performance"),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"analytics/ad-performance"}),z(()=>Promise.resolve().then(()=>Ar),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"analytics/ad-performance"})}).catch(t=>{console.error("[Router] Error loading ad-performance route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"analytics/ad-performance",error:t})})});M.on("/clients",()=>{if(console.log("[Router] Route: /clients"),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"clients"}),z(()=>Promise.resolve().then(()=>Fr),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"clients"})}).catch(t=>{console.error("[Router] Error loading clients route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"clients",error:t})})});M.on("/team",()=>{if(console.log("[Router] Route: /team"),!Q("home")){j("signin");return}p.publish(u.ROUTE_NAV_BEFORE,{route:"team"}),z(()=>Promise.resolve().then(()=>Wr),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),p.publish(u.ROUTE_NAV_AFTER,{route:"team"})}).catch(t=>{console.error("[Router] Error loading team route:",t),p.publish(u.ROUTE_NAV_ERROR,{route:"team",error:t})})});M.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),j("splash")});p.subscribe(u.ROUTE_NAV,(t,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&j(e.route)});function xt(){console.log("[App] Waiting for Neodigm 55 library...");let t=0;const e=100,a=setInterval(()=>{t++,t%10===0&&console.log(`[App] Still waiting... attempt ${t}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${t*100}ms`),clearInterval(a),On()):t>=e&&(clearInterval(a),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,p.publish(u.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",xt):xt();async function On(){if(console.log("[App] Neodigm 55 loaded, initializing..."),yn(),X.initialize(),console.log("[App] I18n Controller initialized"),!await S.init({BASE_URL:"https://machfivemagnet-saas.onrender.com",navigateFunction:a=>{console.log("[AuthController] Navigation requested:",a),j(a)}})){console.error("[App] AuthController initialization failed");return}const e=S.getEntity();e&&(console.log("[App] Session restored for:",e.email),p.publish(u.APP_USER_LOADED,{entity:e}),S.isAuthenticated()&&S.fetchScope()),p.publish(u.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),In(),M.resolve(),window.AuthController=S,window.I18nController=X,window.MachVive=it,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)")}p.subscribe(u.ROUTE_NAV_AFTER,(t,e)=>{typeof X<"u"&&X.refresh&&setTimeout(()=>{X.refresh()},100)});function Ge(t){return t=String(t),Math.abs(t.split("").reduce((e,a)=>(e<<5)-e+a.charCodeAt(0)|0,0))}let St=!1;function Rn(){if(St)return;const t=document.createElement("style");t.id="m5t-accept-invite-styles",t.textContent=`
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
  `,document.head.appendChild(t),St=!0}function Mn(){const t=new URLSearchParams(window.location.search||"");let e=t.get("uid")||"",a=t.get("token")||"";if(!e||!a){const n=window.location.hash||"",o=n.includes("?")?n.slice(n.indexOf("?")+1):"",r=new URLSearchParams(o);if(e=e||r.get("uid")||"",a=a||r.get("token")||"",!e||!a){const i=n.replace(/^#\/?/,"").split("?")[0].split("/").filter(Boolean);e=e||i[1]||"",a=a||i[2]||""}}try{return{uid:decodeURIComponent(e),token:decodeURIComponent(a)}}catch{return{uid:e,token:a}}}function sa(){return Rn(),`
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
    </div>`}function la(){const{uid:t,token:e}=Mn(),a=document.getElementById("accept-invite-form"),n=document.getElementById("ai-pass"),o=document.getElementById("ai-confirm"),r=document.getElementById("ai-submit"),i=document.getElementById("ai-msg");if(!a)return;const l=(s,c="error")=>{i.textContent=s,i.className=`accept-invite-msg ${c}`};if(!t||!e){l("This invitation link is invalid or incomplete. Please use the link from your email."),r.disabled=!0;return}a.addEventListener("submit",async s=>{s.preventDefault();const c=n.value||"",d=o.value||"";if(c.length<8){l("Password must be at least 8 characters.");return}if(c!==d){l("Passwords do not match.");return}r.disabled=!0,l("Setting up your account…","ok");const f=Ge(c);try{const _=S.getConfig?.().BASE_URL||"",E=await fetch(`${_}/m5t/v5/acctEntity/acceptInvite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:t,token:e,hash:f})}),x=await E.json().catch(()=>({}));if(!E.ok||!x.ok){const h=E.status===410?"This invitation has expired — ask for a new one.":E.status===409?"This invitation has already been used. Try signing in.":x.error||`Could not accept the invitation (HTTP ${E.status}).`;l(h),r.disabled=!1;return}try{window.history.replaceState({},"",window.location.pathname+window.location.hash)}catch{}l("Welcome! Signing you in…","ok"),(await S.doSignin(x.entity.email,f))?.ok||(l("Your account is ready. Please sign in.","ok"),setTimeout(()=>{window.location.hash="#/signin"},1200))}catch(_){console.error("[accept-invite] error:",_),l("Something went wrong. Please try again."),r.disabled=!1}})}const Pn={render:sa,init:la},Fn=Object.freeze(Object.defineProperty({__proto__:null,default:Pn,init:la,render:sa},Symbol.toStringTag,{value:"Module"}));function $n(){return`
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
  `}function Dn(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const t=localStorage.getItem(R.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!t,hasMvvTs:!!e});const a=document.getElementById("splash-loader"),n=document.getElementById("splash-actions");t?(console.log("[SplashRoute] Auth token found → HOME"),p.publish(u.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),p.publish(u.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),a&&(a.style.display="none"),n&&(n.style.display="flex"),document.querySelectorAll("[data-route]").forEach(r=>{r.addEventListener("click",()=>{const i=r.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${i}`),p.publish(u.ROUTE_NAV,{route:i})})}))},4e3)}const Un=Object.freeze(Object.defineProperty({__proto__:null,init:Dn,render:$n},Symbol.toStringTag,{value:"Module"}));function Bn(){return`
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
  `}function Hn(){console.log("[SigninRoute] Initialized");const t=document.getElementById("loginForm"),e=document.getElementById("email"),a=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const r=a.type==="password"?"text":"password";a.type=r}),t?.addEventListener("submit",async r=>{r.preventDefault();const i=e.value.trim(),l=a.value;Gn(i,e)&&zn(l,a)&&await Vn(i,l)}),document.getElementById("link--uc__underline")?.addEventListener("click",r=>{r.preventDefault(),p.publish(u.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",r=>{r.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),p.publish(u.ROUTE_NAV,{route:"signup"})})}function Gn(t,e){if(!t)return Pe(e,w.get("validation_email_required")),!1;const a=(t.match(/@/g)||[]).length,n=(t.match(/\./g)||[]).length;return a!==1||n<1?(Pe(e,w.get("validation_email_invalid")),!1):!0}function zn(t,e){return t?t.length<10?(Pe(e,w.get("validation_password_min_length")),!1):!0:(Pe(e,w.get("validation_password_required")),!1)}function Pe(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Vn(t,e){const a=document.querySelector(".btn");a.disabled=!0,a.textContent=w.get("loading_signing_in");try{const n=Ge(e),o=await S.doSignin(t,n);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(w.get("success_welcome_back"),"success"),p.publish(u.AUTH_SIGNIN_SUCCESS,{entity:S.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(w.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||w.get("error_signin_failed"),"danger"),a.disabled=!1,a.textContent=w.get("sign_in").toUpperCase())}catch(n){console.error("[SigninRoute] Sign in error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||w.get("error_network"),"danger"),a.disabled=!1,a.textContent=w.get("sign_in").toUpperCase(),p.publish(u.AUTH_SIGNIN_FAIL,{message:n.message})}}const qn=Object.freeze(Object.defineProperty({__proto__:null,init:Hn,render:Bn},Symbol.toStringTag,{value:"Module"}));function ca(t){const e=[];return t.length<10&&e.push("at least 10 characters"),/[a-z]/.test(t)||e.push("1 lowercase"),/[A-Z]/.test(t)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t)||e.push("1 special character"),/[^\x00-\x7F]/.test(t)&&e.push("ASCII characters only"),e}function da(t){return t.length===0?"":t.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":t.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function jn(){return`
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
  `}function Yn(){console.log("[SignupRoute] Initialized");const t=document.getElementById("signupForm"),e=t.querySelector('button[type="submit"]');At("togglePassword","password","eyeIcon"),At("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",n=>{n.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),p.publish(u.ROUTE_NAV,{route:"signin"})}),t.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("first").value.trim(),r=document.getElementById("last").value.trim(),i=document.getElementById("email").value.trim(),l=document.getElementById("company").value.trim(),s=document.getElementById("phone").value.trim(),c=document.getElementById("password").value,d=document.getElementById("confirmPassword").value,f=document.getElementById("first"),_=document.getElementById("last"),E=document.getElementById("email"),x=document.getElementById("password"),g=document.getElementById("confirmPassword");if(Tt(o,f,w.get("validation_first_name_required"))&&Tt(r,_,w.get("validation_last_name_required"))&&Wn(i,E)&&Kn(c,x)){if(c!==d){ue(g,w.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=w.get("loading_creating_account"),await Jn(o,r,i,l,s,c)}})}function At(t,e,a){const n=document.getElementById(t),o=document.getElementById(e),r=document.getElementById(a);!n||!o||!r||n.addEventListener("click",()=>{const i=o.type==="password";o.type=i?"text":"password",i?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Tt(t,e,a){return t?!0:(ue(e,a),!1)}function Wn(t,e){if(!t)return ue(e,w.get("validation_email_required")),!1;const a=(t.match(/@/g)||[]).length,n=(t.match(/\./g)||[]).length;return a!==1||n<1?(ue(e,w.get("validation_email_invalid")),!1):!0}function Kn(t,e){if(!t)return ue(e,w.get("validation_password_required")),!1;const a=ca(t);return a.length>0?(ue(e,da(a)),!1):!0}function ue(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Jn(t,e,a,n,o,r){const i=document.querySelector('button[type="submit"]');try{const l=Ge(r),s={email:a,hash:l,first:t,last:e};n&&(s.company=n),o&&(s.phone=o);const c=await S.doSignup(s);if(c.ok)p.publish(u.AUTH_SIGNUP_SUCCESS,{email:a}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const d=c.error||c.message||w.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(d,"danger"),i.disabled=!1,i.textContent=w.get("create_account").toUpperCase(),p.publish(u.AUTH_SIGNUP_FAIL,{message:d})}}catch(l){console.error("[SignupRoute] Sign up error:",l),typeof neodigmToast<"u"&&neodigmToast.q(l.message||w.get("error_network"),"danger"),i.disabled=!1,i.textContent=w.get("create_account").toUpperCase(),p.publish(u.AUTH_SIGNUP_FAIL,{message:l.message})}}const Xn=Object.freeze(Object.defineProperty({__proto__:null,init:Yn,render:jn},Symbol.toStringTag,{value:"Module"}));function Qn(){return`
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
  `}function Zn(){console.log("[VerfLinkRoute] Initialized");const t=7200,e=Date.now(),a=document.getElementById("countdown-display");function n(){const r=Date.now()-e,i=Math.floor(r/1e3),l=Math.max(0,t-i),s=Math.floor(l/3600),c=Math.floor(l%3600/60),d=l%60,f=`${String(s).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(d).padStart(2,"0")}`;a&&(a.textContent=f,l<600&&(a.style.color="#ef4444",a.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),l===0&&(a.style.color="#7f1d1d",a.style.textShadow="none")),l===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}n();const o=setInterval(n,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const eo=Object.freeze(Object.defineProperty({__proto__:null,init:Zn,render:Qn},Symbol.toStringTag,{value:"Module"})),to="https://machfivemagnet-saas.onrender.com";class ao{constructor(){this.baseUrl=to}async request(e,a={}){const n=`${this.baseUrl}${e}`,o={"Content-Type":"application/json",...a.headers};try{const r=await fetch(n,{...a,headers:o});if(r.status===401||r.status===403){p.publish(u.AUTH_TOKEN_EXPIRED,{status:r.status,endpoint:e});const l=await r.json().catch(()=>({}));throw new Error(l.error||"Authentication failed")}const i=await r.json();return{ok:r.ok,status:r.status,data:i}}catch(r){throw console.error("API Request Error:",r),p.publish(u.APP_ERROR,{message:r.message,endpoint:e}),r}}async get(e){return this.request(e,{method:"GET"})}async post(e,a){return this.request(e,{method:"POST",body:JSON.stringify(a)})}async put(e,a){return this.request(e,{method:"PUT",body:JSON.stringify(a)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,a){return this.post("/api/acctEntity/signin",{email:e,hash:a})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,a){return this.post("/api/acctEntity/resethash",{email:e,hash:a})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,a){return this.put(`/api/acctEntity/${e}`,a)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const no=new ao;function oo(){return`
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

  `}function ro(){console.log("[ForgotRoute] Initialized");const t=document.getElementById("forgot-form"),e=document.getElementById("email");t?.addEventListener("submit",async a=>{a.preventDefault();const n=e.value.trim();io(n,e)&&await so(n)})}function io(t,e){if(!t)return kt(e,w.get("validation_email_required")),!1;const a=(t.match(/@/g)||[]).length,n=(t.match(/\./g)||[]).length;return a!==1||n<1?(kt(e,w.get("validation_email_invalid")),!1):!0}function kt(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function so(t){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const a=await no.forgotPassword(t);a.ok&&a.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(w.get("success_reset_link_sent"),"success"),p.publish(u.AUTH_FORGOT_SUCCESS,{email:t}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(a.data.error||w.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=w.get("send_reset_link").toUpperCase())}catch(a){console.error("[ForgotRoute] Forgot password error:",a),typeof neodigmToast<"u"&&neodigmToast.q(a.message||w.get("error_network"),"danger"),e.disabled=!1,e.textContent=w.get("send_reset_link").toUpperCase()}}const lo=Object.freeze(Object.defineProperty({__proto__:null,init:ro,render:oo},Symbol.toStringTag,{value:"Module"}));function co(){return`
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
                value="${S.getEntity()?.email||""}"
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
  `}function po(){console.log("[ResethashRoute] Initialized");const t=document.getElementById("resethash-form"),e=t.querySelector('button[type="submit"]');Ct("toggleNewPassword","new-password","eyeIconNew"),Ct("toggleConfirmPassword","confirm-password","eyeIconConfirm"),t?.addEventListener("submit",async a=>{a.preventDefault();const n=t.email.value.trim(),o=t.newPassword.value,r=t.confirmPassword.value,i=document.getElementById("new-password"),l=document.getElementById("confirm-password");if(!o){le(i,w.get("validation_new_password_required"));return}const s=ca(o);if(s.length>0){le(i,da(s));return}if(!r){le(l,w.get("validation_new_password_required"));return}if(o!==r){le(l,w.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=w.get("loading_resetting_password");try{const c=Ge(o),d=await S.doResetHash(n,c);d.ok?(typeof neodigmToast<"u"&&neodigmToast.q(w.get("success_password_reset"),"success"),p.publish(u.AUTH_RESETHASH_SUCCESS,{email:n})):(le(i,d.error||w.get("error_signin_failed")),e.disabled=!1,e.textContent=w.get("update_password").toUpperCase())}catch(c){console.error("[ResethashRoute] Reset password error:",c),le(i,c.message||w.get("error_network")),e.disabled=!1,e.textContent=w.get("update_password").toUpperCase()}})}function Ct(t,e,a){const n=document.getElementById(t),o=document.getElementById(e),r=document.getElementById(a);!n||!o||!r||n.addEventListener("click",()=>{const i=o.type==="password";o.type=i?"text":"password",i?r.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:r.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function le(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}const uo=Object.freeze(Object.defineProperty({__proto__:null,init:po,render:co},Symbol.toStringTag,{value:"Module"})),ye=(t,e)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`,ce=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),pa=t=>[t.first_name,t.last_name].filter(Boolean).join(" ").trim()||t.email||"(no name)",mo=t=>(pa(t).split(/\s+/).slice(0,2).map(e=>e[0]||"").join("")||"?").toUpperCase();function go(t){const e=t.created?.created_tz;if(!e)return"";try{return new Date(e).toLocaleDateString([],{month:"short",day:"numeric"})}catch{return""}}let It=!1;function ho(){if(It)return;const t=document.createElement("style");t.id="m5t-dash-recent-styles",t.textContent=`
    .page-shell .recent-lead { display:flex; align-items:center; gap:10px; padding:10px 4px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); text-decoration:none; color:inherit; }
    .page-shell .recent-lead:last-child { border-bottom:0; }
    .page-shell .recent-lead:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .recent-lead__ava { flex:0 0 auto; width:34px; height:34px; border-radius:50%; display:grid; place-items:center; font-weight:700; font-size:0.74rem; color:#fff; background:var(--color-primary-600,#0072BA); }
    .page-shell .recent-lead__main { flex:1 1 auto; min-width:0; display:flex; flex-direction:column; }
    .page-shell .recent-lead__name { font-weight:600; font-size:0.9rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .recent-lead__sub { font-size:0.78rem; color:var(--color-text-subtle,#6C7C9A); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .recent-lead__badge { flex:0 0 auto; font-size:0.64rem; font-weight:700; letter-spacing:0.03em; padding:3px 8px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); color:var(--color-text-muted,#4A5A78); }
    .page-shell .recent-lead__badge[data-s="NEW"] { background:#DBEAFE; color:#1D4ED8; }
    .page-shell .recent-lead__badge[data-s="WORKING"] { background:#FEF3C7; color:#92400E; }
    .page-shell .recent-lead__badge[data-s="QUALIFIED"], .page-shell .recent-lead__badge[data-s="CONVERTED"] { background:#DCFCE7; color:#047857; }
    .page-shell .recent-lead__time { flex:0 0 auto; font-size:0.74rem; color:var(--color-text-subtle,#6C7C9A); }
  `,document.head.appendChild(t),It=!0}function fo(t){return`<a class="recent-lead" href="#/leads">
    <span class="recent-lead__ava">${ce(mo(t))}</span>
    <span class="recent-lead__main">
      <span class="recent-lead__name">${ce(pa(t))}</span>
      <span class="recent-lead__sub">${ce(t.email||t.phone||"")}</span>
    </span>
    <span class="recent-lead__badge" data-s="${ce(t.status)}">${ce(t.status)}</span>
    <span class="recent-lead__time">${ce(go(t))}</span>
  </a>`}const Te=({icon:t,label:e,valueId:a,value:n="—",subId:o,sub:r=""})=>`
  <div class="stat-card">
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${t}</span>
      <span class="stat-label">${e}</span>
    </div>
    <div class="stat-value"${a?` id="${a}"`:""}>${n}</div>
    <div class="stat-change"><span class="stat-sublabel"${o?` id="${o}"`:""}>${r}</span></div>
  </div>`,ke=(t,e,{wide:a=!1,full:n=!1,controls:o=!1}={})=>`
  <div class="dashboard-card${a?" chart-card-wide":""}${n?" chart-card-full":""}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${t}</span> ${e}</h2>
      ${o?`<div class="chart-controls">
        <button class="chart-period-btn active" type="button" data-period="7">7 Days</button>
        <button class="chart-period-btn" type="button" data-period="30">30 Days</button>
      </div>`:""}
    </div>
    <div class="card-body">${ye("insights","Insights appear here once your magnets start capturing conversations.")}</div>
  </div>`;function ua(){return ho(),`
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
        ${Te({icon:"widgets",label:"Active Magnets",valueId:"stat-active-magnets",subId:"stat-active-magnets-sub",sub:"Loading…"})}
        ${Te({icon:"forum",label:"Conversations Started",sub:"Coming soon"})}
        ${Te({icon:"person_add",label:"Leads Captured",valueId:"stat-leads",subId:"stat-leads-sub",sub:"Loading…"})}
        ${Te({icon:"check_circle",label:"Flow Completion Rate",sub:"Coming soon"})}
      </div>

      <div class="charts-section">
        ${ke("show_chart","Conversation Trends",{wide:!0,controls:!0})}
        <div class="charts-grid">
          ${ke("filter_alt","Completion Funnel")}
          ${ke("source","Traffic Sources")}
          ${ke("bar_chart","Magnet Performance",{full:!0})}
        </div>
      </div>

      <div class="content-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Recent Interactions</h2>
            <span class="live-indicator"><span class="pulse-dot"></span> Live</span>
          </div>
          <div class="card-body">
            ${ye("sensors","No interactions yet — they'll stream in live as visitors engage your magnets.")}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/leads">View all →</a>
          </div>
          <div class="card-body" id="recent-leads-body">
            ${ye("hourglass_empty","Loading leads…")}
          </div>
        </div>
      </div>
    </div>`}async function ma(){const t=S.getConfig?.().BASE_URL||"";await Promise.all([_o(t),vo(t)])}async function _o(t){const e=document.getElementById("stat-active-magnets"),a=document.getElementById("stat-active-magnets-sub");if(e)try{const n=await fetch(`${t}/m5t/v5/sseEtherSubscriberApp`);if(!n.ok)throw new Error(`HTTP ${n.status}`);const o=await n.json(),r=Array.isArray(o?.data)?o.data:[],i=r.filter(s=>s.status==="ENABLED").length;e.textContent=String(i);const l=new Set;r.forEach(s=>{(Array.isArray(s.app_domains)?s.app_domains:[]).forEach(d=>{const f=typeof d=="string"?d:d&&(d.domain||d.host);f&&(typeof d=="string"||d.active!==!1)&&l.add(String(f).toLowerCase())})}),a&&(a.textContent=l.size?`Across ${l.size} domain${l.size===1?"":"s"}`:i?"No domains configured":"No magnets yet")}catch(n){console.warn("[dashboard] Active Magnets fetch failed:",n),e.textContent="—",a&&(a.textContent="Unavailable")}}async function vo(t){const e=document.getElementById("stat-leads"),a=document.getElementById("stat-leads-sub"),n=document.getElementById("recent-leads-body");try{const o=await fetch(`${t}/m5t/v5/m5mLead`);if(!o.ok)throw new Error(`HTTP ${o.status}`);const r=await o.json(),i=(Array.isArray(r?.data)?r.data:[]).filter(s=>!["DELETED","ARCHIVED"].includes(s.status)),l=i.filter(s=>s.status==="NEW").length;e&&(e.textContent=String(i.length)),a&&(a.textContent=i.length?`${l} new to work`:"No leads yet"),n&&(n.innerHTML=i.length?i.slice(0,5).map(fo).join(""):ye("contacts","No leads captured yet. Publish a magnet to start collecting."))}catch(o){console.warn("[dashboard] Leads fetch failed:",o),e&&(e.textContent="—"),a&&(a.textContent="Unavailable"),n&&(n.innerHTML=ye("error","Could not load recent leads."))}}const bo={render:ua,init:ma},yo=Object.freeze(Object.defineProperty({__proto__:null,default:bo,init:ma,render:ua},Symbol.toStringTag,{value:"Module"}));function wo(){return`
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
  `}function Eo(){console.log("[SignoutRoute] Initialized");const t=document.getElementById("confirm-signout-btn");t?.addEventListener("click",async()=>{t.disabled=!0,t.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await S.doSignout()})}const xo=Object.freeze(Object.defineProperty({__proto__:null,init:Eo,render:wo},Symbol.toStringTag,{value:"Module"}));let Nt=!1;function So(){if(Nt)return;const t=document.createElement("style");t.id="m5t-section-page-styles",t.textContent=`
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
  `,document.head.appendChild(t),Nt=!0}function ga({title:t="Section",icon:e="widgets",name:a=""}={}){return So(),`
    <section class="section-page" data-section="${a}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${e}</span>
        <h1 class="section-page__title">${t}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired — content lands next.</p>
      </div>
    </section>`}function ha(){}const Ao={render:ga,init:ha},To=Object.freeze(Object.defineProperty({__proto__:null,default:Ao,init:ha,render:ga},Symbol.toStringTag,{value:"Module"})),ko=`!function(){"use strict";try{window.machfivemagnet={appGuid:"##APPGUID##",magnets:"##MAGNET_DEFINITIONS##"}}catch(e){return}var e=window.machfivemagnet||{},t="string"==typeof e.appGuid?e.appGuid:"",a=Array.isArray(e.magnets)?e.magnets:[];if(t&&a.length){var r,n="function"==typeof window.fetch?window.fetch.bind(window):null,o="#0072BA",i="Chat with us",m="Typically replies in a few minutes",s=function(){try{var e=document.currentScript;if(!e||!e.src)for(var t=document.getElementsByTagName("script"),a=t.length-1;a>=0;a--)if(/coreSnippet/.test(t[a].src||"")){e=t[a];break}if(e&&e.src)return new URL(e.src,location.href).origin}catch(e){}return"https://machfivemagnet-saas.onrender.com"}(),l=function(){var e={};try{var t=new URLSearchParams(location.search);["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(a){var r=t.get(a);r&&(e[a]=r)})}catch(e){}try{var a=JSON.parse(sessionStorage.getItem("m5m_attr")||"{}");e=Object.assign({},a,e),Object.keys(e).length&&sessionStorage.setItem("m5m_attr",JSON.stringify(e))}catch(e){}return e}(),c={call:{icon:"phone",label:"Call"},email:{icon:"mail",label:"Email"},book:{icon:"event",label:"Book"},chat:{icon:"chat",label:"Chat"},support:{icon:"headset",label:"Support"}},d=[{label:"Sales enquiry",icon:"description"},{label:"Support",icon:"help"},{label:"Billing",icon:"description"},{label:"Something else",icon:"chat"}],p={chat:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',close:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',send:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',check:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',arrow:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',phone:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',mail:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',calendar:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'},u={event:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",schedule:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",mail:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",chat:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",sms:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",phone:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",description:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",help:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",place:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",person:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",bolt:"M7 2v11h3v9l7-12h-4l4-8z",check_circle:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",home:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",build:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",headset:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z",copy:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},h={calendar:"event",appointment:"event",book:"event",email:"mail",message:"chat",text:"sms",call:"phone",quote:"description",document:"description",question:"help",location:"place",clock:"schedule",quick:"bolt",check:"check_circle",services:"build",service:"build",support:"headset",support_agent:"headset",headset_mic:"headset"};r=function(){try{!function(){for(var e={},t=0;t<a.length;t++){var r=a[t],n=r&&r.mag_display_mode;n&&!e[n]&&(e[n]=!0,"chat"===n||"right_slide"===n||"modal"===n||"inline"===n?L(r,n):g("display mode not yet supported: "+n))}}()}catch(e){g("boot failed",e)}},document.body?r():document.addEventListener("DOMContentLoaded",function(){r()})}function g(){try{console.warn.apply(console,["[m5m]"].concat([].slice.call(arguments)))}catch(e){}}function v(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}function b(e){3===(e=String(e||"").trim().replace("#","")).length&&(e=e.split("").map(function(e){return e+e}).join("")),/^[0-9a-fA-F]{6}$/.test(e)||(e=o.replace("#",""));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}function f(e,t){return e.map(function(e){return Math.max(0,Math.min(255,Math.round(e*t)))})}function x(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function y(e,t){return"rgba("+e[0]+","+e[1]+","+e[2]+","+t+")"}function w(e){var t=e.map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return.2126*t[0]+.7152*t[1]+.0722*t[2]}function k(e){var t=[];return(Array.isArray(e)?e:[]).forEach(function(e){if(c[(e=e||{}).type]){var a="call"===e.type||"email"===e.type,r=null!=e.value?String(e.value).trim():"";a&&!r||t.push({type:e.type,label:null!=e.label&&String(e.label).trim()||c[e.type].label,value:r,config:e.config&&"object"==typeof e.config?e.config:{}})}}),t.slice(0,6)}function _(e){return e.length?'<div class="m5m-actionbar">'+e.map(function(e){return'<button type="button" class="m5m-action" data-m5m-act="'+v(e.type)+'">'+z(c[e.type].icon)+"<span>"+v(e.label)+"</span></button>"}).join("")+"</div>":""}function z(e){if(!e)return"";var t=String(e).trim().toLowerCase().replace(/[\\s-]+/g,"_");return h[t]&&(t=h[t]),u[t]?'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+u[t]+'"></path></svg>':""}function L(e,a){var r,c,u=e,h=[],L={},E=0,C=0,M={},H="",N=!1,A=a||"chat",T=!1,j=!1,q=!1,I=[],P={},V=[];function B(){return'<span class="m5m-ava-mark">'+p.chat+"</span>"+(H?'<img class="m5m-ava-img" src="'+v(H)+'" alt="">':"")}function D(){return!(!P.root||!P.root.classList.contains("m5m-open"))}function Y(e,t){var a=setTimeout(e,t);return V.push(a),a}function O(){V.forEach(clearTimeout),V=[]}function F(){if(!D()){P.root.classList.add("m5m-open");try{P.panel.focus()}catch(e){}T||(T=!0,Q())}}function U(){O(),P.root.classList.remove("m5m-open");try{P.launcher.focus()}catch(e){}}function G(){var e=P.messages.lastElementChild;return!(!e||!e.classList.contains("m5m-row-bot"))}function J(){P.messages.scrollTop=P.messages.scrollHeight}function R(){P.input.innerHTML=""}function X(e){var t=document.createElement("div");t.className="m5m-row m5m-row-user";var a=document.createElement("div");a.className="m5m-msg m5m-user",a.textContent=e,t.appendChild(a),P.messages.appendChild(t),J()}function $(){var e=G(),t=document.createElement("div");t.className="m5m-row m5m-row-bot"+(e?" m5m-grouped":""),t.setAttribute("aria-hidden","true");var a=document.createElement("span");a.className="m5m-msg-ava",e||(a.innerHTML=B());var r=document.createElement("div");return r.className="m5m-typing",r.innerHTML="<span></span><span></span><span></span>",t.appendChild(a),t.appendChild(r),P.messages.appendChild(t),J(),t}function W(e,t){var a=(Array.isArray(e)?e:[]).filter(function(e){return null!=e&&""!==String(e)}),r=0;!function e(){D()&&(r>=a.length?t():function(e,t){if(e){var a=$();Y(function(){a.parentNode&&a.parentNode.removeChild(a),function(e){var t=G(),a=document.createElement("div");a.className="m5m-row m5m-row-bot"+(t?" m5m-grouped":"");var r=document.createElement("span");r.className="m5m-msg-ava",t||(r.innerHTML=B());var n=document.createElement("div");n.className="m5m-msg m5m-bot",n.innerHTML=v(e);var o=document.createElement("div");o.className="m5m-col",o.appendChild(n);var i=document.createElement("span");i.className="m5m-time",i.setAttribute("aria-hidden","true"),i.textContent=function(){try{return(new Date).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}catch(e){return""}}(),o.appendChild(i),a.appendChild(r),a.appendChild(o),P.messages.appendChild(a),J()}(e),t&&t()},550)}else t&&t()}(a[r++],e))}()}function K(){if(D()){if(++C>100)return g("step guard tripped — ending flow"),void oe();if(E<0||E>=h.length)u&&u.mag_summary&&!N&&Object.keys(M).length?(N=!0,function(){R();var e=u&&u.mag_summary_heading||"Here’s what we’ve got",t=Object.keys(M).map(function(e){return'<div class="m5m-sum-row"><span class="m5m-sum-label">'+v((t=e,(t=String(t).replace(/_/g," ").trim())?t.charAt(0).toUpperCase()+t.slice(1):t))+'</span><span class="m5m-sum-val">'+v(M[e])+"</span></div>";var t}).join(""),a=document.createElement("div");a.className="m5m-summary",a.innerHTML='<div class="m5m-sum-head" role="heading" aria-level="2">'+v(e)+'</div><div class="m5m-sum-rows">'+t+'</div><button type="button" class="m5m-sum-confirm">Confirm &amp; send</button>',P.messages.appendChild(a),J();var r=a.querySelector(".m5m-sum-confirm");r.addEventListener("click",function(){r.disabled=!0,oe()}),r.focus()}()):oe();else{var e=h[E]||{},t=e.step_type;W(e.step_prompts,"message"!==t?function(){"single_select"===t?function(e){R();var t="inline"===A,a=document.createElement("div");a.className="m5m-choices"+(t?" m5m-tiles":"");var r=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});r.length?(r.forEach(function(r){var n=String(r.label),o=z(r.icon),i=r.description?String(r.description):"",m=document.createElement("button");m.type="button",m.className="m5m-choice",m.innerHTML=(o?'<span class="m5m-choice-icon">'+o+"</span>":"")+'<span class="m5m-choice-body"><span class="m5m-choice-label">'+v(n)+"</span>"+(i?'<span class="m5m-choice-desc">'+v(i)+"</span>":"")+'</span><span class="m5m-choice-arrow">'+p.arrow+"</span>",m.addEventListener("click",function(){re(e,n),t&&a.parentNode&&a.remove(),X(n),R(),Y(function(){ne(r.goto?String(r.goto):"")},260)}),a.appendChild(m)}),(t?P.messages:P.input).appendChild(a),J()):ne("")}(e):"multi_select"===t?function(e){R();var t=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});if(t.length){var a=document.createElement("div");a.className="m5m-multi";var r={},n=document.createElement("button");t.forEach(function(e){var t=String(e.label),o=z(e.icon),i=document.createElement("button");i.type="button",i.className="m5m-mopt",i.innerHTML=(o?'<span class="m5m-mopt-icon">'+o+"</span>":"")+'<span class="m5m-mopt-label">'+v(t)+'</span><span class="m5m-mopt-check">'+p.check+"</span>",i.addEventListener("click",function(){var e=!r[t];r[t]=e,i.classList.toggle("m5m-mopt-on",e),function(){var e=!1;for(var t in r)if(r[t]){e=!0;break}n.disabled=!e}()}),a.appendChild(i)}),n.type="button",n.className="m5m-multi-cont",n.textContent="Continue",n.disabled=!0,n.addEventListener("click",function(){var t=[];for(var n in r)r[n]&&t.push(n);if(t.length){var o=t.join(", ");re(e,o),a.parentNode&&a.remove(),X(o),R(),Y(function(){ne("")},260)}}),a.appendChild(n),P.messages.appendChild(a),J()}else ne("")}(e):"scheduler"===t?function(e){R();var t=e&&e.step_config||{},a=t.meeting_label||"",r=ae(t.start||"09:00"),n=ae(t.end||"17:00"),o=t.mins||30,i=Math.max(1,Math.min(60,t.days||14)),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=new Date;l.setHours(0,0,0,0);for(var c=[],d=0;d<i;d++)c.push(new Date(l.getTime()+864e5*d));for(var p=[],u=r;u<n;u+=o)p.push(u);var h=0,g=null,b=function(e){var t=Math.floor(e/60),a=e%60,r=t%12;return 0===r&&(r=12),r+":"+(a<10?"0"+a:a)+" "+(t>=12?"PM":"AM")},f=document.createElement("div");f.className="m5m-sched";var x=function(){var e=c.map(function(e,t){return'<button type="button" class="m5m-sd-day'+(t===h?" m5m-sd-on":"")+'" data-d="'+t+'"><span class="m5m-sd-dow">'+m[e.getDay()]+'</span><span class="m5m-sd-num">'+e.getDate()+'</span><span class="m5m-sd-mon">'+s[e.getMonth()]+"</span></button>"}).join(""),t=p.map(function(e){return'<button type="button" class="m5m-sd-slot'+(g===e?" m5m-sd-on":"")+'" data-t="'+e+'">'+b(e)+"</button>"}).join("");f.innerHTML=(a?'<div class="m5m-sd-meta">'+z("schedule")+"<span>"+v(a)+"</span></div>":"")+'<div class="m5m-sd-days">'+e+'</div><div class="m5m-sd-slots">'+t+'</div><button type="button" class="m5m-sd-confirm"'+(null===g?" disabled":"")+">Confirm time</button>"};x(),f.addEventListener("click",function(t){var a=t.target.closest(".m5m-sd-day");if(a)return h=parseInt(a.getAttribute("data-d"),10)||0,g=null,void x();var r=t.target.closest(".m5m-sd-slot");if(r)return g=parseInt(r.getAttribute("data-t"),10),void x();if(t.target.closest(".m5m-sd-confirm")){if(null===g)return;var n=c[h],o=m[n.getDay()]+" "+s[n.getMonth()]+" "+n.getDate()+", "+b(g);re(e,o),f.parentNode&&f.remove(),X(o),R(),Y(function(){ne("")},260)}}),P.messages.appendChild(f),J()}(e):function(e){R();var t=e.step_type,a=document.createElement("form");a.className="m5m-form";var r=document.createElement("input");r.type="email"===t?"email":"phone"===t?"tel":"text",r.placeholder="Type your answer…",r.autocomplete="email"===t?"email":"phone"===t?"tel":"off",r.required=!0;var n=document.createElement("button");n.type="submit",n.className="m5m-send",n.setAttribute("aria-label","Send"),n.innerHTML=p.send,a.appendChild(r),a.appendChild(n),a.addEventListener("submit",function(a){a.preventDefault();var n=(r.value||"").trim();!n||"email"===t&&r.validity&&!r.validity.valid?r.focus():(re(e,n),X(n),R(),Y(function(){ne("")},260))}),P.input.appendChild(a),r.focus(),J()}(e)}:function(){ne("")})}}}function Q(){u&&u.mag_home&&I.length>0?function(){P.messages&&(P.messages.innerHTML=""),R(),ee(null);var e=null!=u.mag_welcome?String(u.mag_welcome):"",t=u.mag_home_title||u.mag_title||"How can we help?",a=document.createElement("div");a.className="m5m-home",a.innerHTML='<div class="m5m-home-ava">'+B()+"</div>"+("inline"===A?"":'<div class="m5m-home-title" role="heading" aria-level="2">'+v(t)+"</div>")+(e?'<div class="m5m-home-text">'+v(e)+"</div>":"")+'<div class="m5m-home-hint">'+z("bolt")+"<span>Choose an option below to get started.</span></div>",P.messages.appendChild(a),J()}():(E=0,C=0,K())}function Z(){P.actionbar&&P.actionbar.addEventListener("click",function(e){var t=e.target.closest?e.target.closest("[data-m5m-act]"):null;if(t)try{!function(e){for(var t=null,a=0;a<I.length;a++)if(I[a].type===e){t=I[a];break}var r;if(t)if(O(),ee(e),"call"!==e&&"email"!==e)if("book"===e&&function(e){try{return/^https?:$/.test(new URL(e).protocol)}catch(e){return!1}}(t.value))try{window.open(t.value,"_blank","noopener")}catch(e){}else M={},N=!1,j=!1,q=!1,r=function(e,t){var a=u&&u.mag_routes||{},r=function(e){return Array.isArray(e)&&e.length?e:null};return"chat"===e?r(a.chat)||(Array.isArray(u.mag_macro_steps)?u.mag_macro_steps:[]):"book"===e?r(a.book)||function(e){var t=e&&e.config||{};return[{id:"m5m_book",step_type:"scheduler",step_options:[],step_columns:[t.column||"preferred_time"],step_prompts:[t.heading||"When works best for you?"],step_config:{meeting_label:t.meeting_label||"",start:t.start||"09:00",end:t.end||"17:00",mins:t.mins||30,days:t.days||14}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great — and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):"support"===e?r(a.support)||function(e){var t=e&&e.config||{};return[{id:"m5m_support",step_type:"multi_select",step_options:(Array.isArray(t.options)&&t.options.length?t.options:d).map(function(e){return e&&"object"==typeof e?{label:String(e.label||""),icon:e.icon||""}:{label:String(e),icon:""}}).filter(function(e){return""!==e.label}),step_columns:[t.column||"support_topics"],step_prompts:[t.heading||"How can we help you today?"],step_description:"Select all that apply",step_config:{}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great — and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):[]}(e,t),h=Array.isArray(r)?r.slice():[],L={},h.forEach(function(e,t){e&&null!=e.id&&(L[String(e.id)]=t)}),P.messages&&(P.messages.innerHTML=""),R(),E=0,C=0,h.length?K():g("route has no steps");else!function(e,t){P.messages&&(P.messages.innerHTML=""),R();var a=t&&t.value?String(t.value):"",r="call"===e,n=function(e){if(!e)return null;try{var t=new URL(e,location.href).protocol;return/^(https?|mailto|tel):$/.test(t)?e:null}catch(e){return null}}(r?"tel:"+a.replace(/[^\\d+]/g,""):"mailto:"+a),o=document.createElement("div");o.className="m5m-reveal",o.innerHTML='<div class="m5m-reveal-icon">'+z(r?"phone":"mail")+'</div><div class="m5m-reveal-title" role="heading" aria-level="2">'+(r?"Call us":"Email us")+"</div>"+(n?'<a class="m5m-reveal-val" href="'+v(n)+'"'+(r?"":' target="_blank" rel="noopener noreferrer"')+">"+v(a)+"</a>":'<div class="m5m-reveal-val">'+v(a)+"</div>")+'<button type="button" class="m5m-reveal-copy">'+z("copy")+"<span>Copy</span></button>",P.messages.appendChild(o);var i=o.querySelector(".m5m-reveal-copy");i&&i.addEventListener("click",function(){!function(e,t){var a=function(){var e=t&&t.querySelector("span");if(e){var a=e.textContent;e.textContent="Copied",Y(function(){e&&(e.textContent=a)},1400)}};try{if(navigator.clipboard&&navigator.clipboard.writeText)return void navigator.clipboard.writeText(e).then(a,function(){te(e),a()})}catch(e){}te(e),a()}(a,i)}),J()}(e,t)}(t.getAttribute("data-m5m-act"))}catch(e){g(e)}})}function ee(e){if(P.actionbar)for(var t=P.actionbar.querySelectorAll("[data-m5m-act]"),a=0;a<t.length;a++)t[a].classList.toggle("m5m-act-on",t[a].getAttribute("data-m5m-act")===e)}function te(e){try{var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",(r||document.body).appendChild(t),t.focus(),t.select(),document.execCommand("copy"),t.parentNode&&t.parentNode.removeChild(t)}catch(e){}}function ae(e){var t=String(e).split(":");return 60*(parseInt(t[0],10)||0)+(parseInt(t[1],10)||0)}function re(e,t){(Array.isArray(e.step_columns)?e.step_columns:[]).forEach(function(e){e&&(M[String(e)]=t)})}function ne(e){if(e){if(!Object.prototype.hasOwnProperty.call(L,e))return g("goto target not found: "+e),void oe();E=L[e]}else E+=1;K()}function oe(){if(D()&&(R(),!j&&!q))if(n){q=!0;var e=$();n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/capture",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields:M,attribution:l})}).then(function(e){if(!e.ok)throw new Error("capture HTTP "+e.status);return e.json().catch(function(){return{}})}).then(function(){j=!0,q=!1,e.parentNode&&e.parentNode.removeChild(e),D()&&function(){R();var e=document.createElement("div");e.className="m5m-success";var t="inline"===A;e.innerHTML='<div class="m5m-success-icon">'+p.check+'</div><div class="m5m-success-title" role="heading" aria-level="2">You’re all set!</div><div class="m5m-success-text">Thanks — we’ve got your details and someone will be in touch shortly.</div>'+(t?"":'<button type="button" class="m5m-success-cta">Close</button>'),P.messages.appendChild(e),J();var a=e.querySelector(".m5m-success-cta");a&&(a.addEventListener("click",U),a.focus())}()}).catch(function(t){q=!1,e.parentNode&&e.parentNode.removeChild(e),g("capture failed",t),D()&&ie()})}else ie()}function ie(){P.input.innerHTML='<div class="m5m-error"><div class="m5m-error-text">Something went wrong sending your details.</div><button type="button" class="m5m-retry">Try again</button></div>';var e=P.input.querySelector(".m5m-retry");e.addEventListener("click",function(){R(),q=!1,oe()}),e.focus()}"inline"===A?function(){if(document.body&&!document.getElementById("m5m-magnet-inline")){var t=function(){try{var e=document.querySelector("[data-m5m-inline], #m5m-inline");if(e)return e;for(var t=null,a=document.getElementsByTagName("script"),r=a.length-1;r>=0;r--)if(/coreSnippet/.test(a[r].src||"")){t=a[r];break}if(t&&t.parentNode){var n=document.createElement("div");return t.parentNode.insertBefore(n,t.nextSibling),n}}catch(e){}return null}();if(t)if(h=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],I=k(e.mag_actions),h.length||e.mag_home&&I.length){L={},h.forEach(function(e,t){e&&null!=e.id&&(L[String(e.id)]=t)});var a=e.mag_theme_color||o,n=e.mag_title||i,s=null!=e.mag_subtitle?String(e.mag_subtitle):m,l=e.mag_theme_mode,d="dark"===l?"m5m-dark":"light"===l?"m5m-light":"";H=e.mag_logo_url||"";var p=_(I),u=b(a),z=w(u)>.55,E=x(f(u,z?.6:.78));(c=document.createElement("div")).id="m5m-magnet-inline",c.style.setProperty("--m5-brand",x(u)),c.style.setProperty("--m5-brand-2",E),c.style.setProperty("--m5-brand-soft",y(u,.12)),c.style.setProperty("--m5-brand-glow",y(u,.34)),c.style.setProperty("--m5-brand-ring",y(u,.38)),c.style.setProperty("--m5-on-brand",z?"#16243a":"#ffffff"),t.appendChild(c),(r=c.attachShadow({mode:"open"})).innerHTML="<style>"+S()+'</style><div class="m5m-root m5m-mode-inline m5m-open'+(d?" "+d:"")+'"><section class="m5m-inline-card" aria-label="'+v(n)+'"><header class="m5m-header"><span class="m5m-ava">'+B()+'</span><span class="m5m-head-text"><span class="m5m-title">'+v(n)+"</span>"+(s?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+v(s)+"</span>":"")+'</span></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+p+"</section></div>",P.root=r.querySelector(".m5m-root"),P.panel=r.querySelector(".m5m-inline-card"),P.messages=r.querySelector(".m5m-messages"),P.input=r.querySelector(".m5m-input"),P.actionbar=r.querySelector(".m5m-actionbar"),Z(),r.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),r.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),T=!0,Q()}else g("magnet has no steps");else g("inline magnet: no mount target — add <div data-m5m-inline></div> where it should appear")}}():function(){if(document.body){var t="m5m-magnet-"+A;if(!document.getElementById(t))if(h=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],I=k(e.mag_actions),h.length||e.mag_home&&I.length){L={},h.forEach(function(e,t){e&&null!=e.id&&(L[String(e.id)]=t)});var a=e.mag_theme_color||o,n=e.mag_title||i,s=null!=e.mag_subtitle?String(e.mag_subtitle):m,l=e.mag_launcher_label||n,d=e.mag_theme_mode,u="dark"===d?"m5m-dark":"light"===d?"m5m-light":"";H=e.mag_logo_url||"";var z=_(I),E=b(a),C=w(E)>.55,M=x(f(E,C?.6:.78));(c=document.createElement("div")).id=t,c.style.setProperty("--m5-brand",x(E)),c.style.setProperty("--m5-brand-2",M),c.style.setProperty("--m5-brand-soft",y(E,.12)),c.style.setProperty("--m5-brand-glow",y(E,.34)),c.style.setProperty("--m5-brand-ring",y(E,.38)),c.style.setProperty("--m5-on-brand",C?"#16243a":"#ffffff"),document.body.appendChild(c),(r=c.attachShadow({mode:"open"})).innerHTML="<style>"+S()+'</style><div class="m5m-root m5m-mode-'+A+(u?" "+u:"")+'"><div class="m5m-scrim"></div><button class="m5m-launcher" type="button" aria-label="Open chat"><span class="m5m-launcher-ava">'+p.chat+'</span><span class="m5m-launcher-label">'+v(l)+'</span></button><section class="m5m-panel" role="dialog" aria-modal="false" tabindex="-1" aria-label="'+v(n)+'"><header class="m5m-header"><span class="m5m-ava">'+B()+'</span><span class="m5m-head-text"><span class="m5m-title">'+v(n)+"</span>"+(s?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+v(s)+"</span>":"")+'</span><button class="m5m-close" type="button" aria-label="Close chat">'+p.close+'</button></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+z+"</section></div>",P.root=r.querySelector(".m5m-root"),P.launcher=r.querySelector(".m5m-launcher"),P.panel=r.querySelector(".m5m-panel"),P.messages=r.querySelector(".m5m-messages"),P.input=r.querySelector(".m5m-input"),P.actionbar=r.querySelector(".m5m-actionbar"),Z(),P.launcher.addEventListener("click",function(){try{F()}catch(e){g(e)}}),r.querySelector(".m5m-close").addEventListener("click",function(){try{U()}catch(e){}}),r.querySelector(".m5m-scrim").addEventListener("click",function(){try{U()}catch(e){}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&D()&&U()}),r.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),r.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),function(e){function t(){if(!T)try{F()}catch(e){}}try{if("on_load"===e)Y(t,500);else if("on_8_seconds"===e)Y(t,8e3);else if("on_scroll_80_percent"===e){var a=function(){try{var e=window.pageYOffset||document.documentElement.scrollTop||0,r=document.documentElement.scrollHeight-window.innerHeight;r>0&&e/r>=.8&&(window.removeEventListener("scroll",a),t())}catch(e){}};window.addEventListener("scroll",a,{passive:!0})}else if("on_exit_intent"===e){var r=function(e){(null==e.clientY||e.clientY<=0)&&!T&&(document.removeEventListener("mouseout",r),t())};document.addEventListener("mouseout",r)}}catch(e){}}(e.mag_trigger)}else g("magnet has no steps")}}()}function S(){var e="--m5-surface:#0F2435;--m5-surface-2:#17334A;--m5-border:#2a4a66;--m5-text:#E8F0F7;--m5-text-sub:#8FA8C0;--m5-meta:#9ab0c6;--m5-danger:#F87171;--m5-msg-bg:#0c1c2b;--m5-bot-bg:#17334A;--m5-bot-border:#23425e;--m5-shadow-launcher:0 8px 24px rgba(0,0,0,.5);--m5-shadow-panel:0 24px 60px rgba(0,0,0,.55),0 6px 16px rgba(0,0,0,.40);";return[":host{all:initial;}","[hidden]{display:none!important;}",".m5m-root{all:initial;","--m5-surface:#ffffff;--m5-surface-2:#f1f5f9;--m5-border:#e6ebf2;","--m5-text:#16243a;--m5-text-sub:#64748b;--m5-meta:#5b6b7f;--m5-danger:#DC2626;","--m5-msg-bg:#eef2f7;--m5-bot-bg:#ffffff;--m5-bot-border:#dde5ef;","--m5-shadow-launcher:0 8px 24px rgba(15,23,42,.20);","--m5-shadow-panel:0 24px 60px rgba(15,23,42,.22),0 6px 16px rgba(15,23,42,.10);","--m5-radius:18px;--m5-radius-msg:16px;--m5-radius-pill:999px;--m5-ease:cubic-bezier(.4,0,.2,1);",'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.45;}',".m5m-root *{box-sizing:border-box;}","@media (prefers-color-scheme: dark){.m5m-root:not(.m5m-light){"+e+"}}",".m5m-root.m5m-dark{"+e+"}",".m5m-launcher{position:fixed;bottom:20px;right:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);height:58px;padding:0 22px 0 16px;","border-radius:var(--m5-radius-pill);box-shadow:var(--m5-shadow-launcher),0 0 0 0 var(--m5-brand-glow);","transition:transform .22s var(--m5-ease),box-shadow .22s var(--m5-ease),opacity .2s var(--m5-ease);}",".m5m-launcher:hover{transform:translateY(-2px);box-shadow:var(--m5-shadow-launcher),0 10px 30px var(--m5-brand-glow);}",".m5m-launcher:active{transform:translateY(0);}",".m5m-launcher-ava{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(127,127,127,.18);color:var(--m5-on-brand);}",".m5m-launcher-ava svg{width:20px;height:20px;}",".m5m-launcher-label{font-size:15px;font-weight:650;letter-spacing:.1px;white-space:nowrap;}",".m5m-open .m5m-launcher{opacity:0;transform:translateY(8px) scale(.9);pointer-events:none;}",".m5m-panel{position:fixed;bottom:20px;right:20px;z-index:2147483000;width:374px;max-width:calc(100vw - 32px);","height:560px;max-height:calc(100vh - 40px);background:var(--m5-surface);border-radius:var(--m5-radius);","box-shadow:var(--m5-shadow-panel);display:flex;flex-direction:column;overflow:hidden;outline:none;","opacity:0;visibility:hidden;transform:translateY(14px) scale(.97);transform-origin:bottom right;pointer-events:none;","transition:opacity .26s var(--m5-ease),transform .26s var(--m5-ease),visibility 0s linear .26s;}",".m5m-open .m5m-panel{opacity:1;visibility:visible;transform:none;pointer-events:auto;transition:opacity .28s var(--m5-ease),transform .28s var(--m5-ease);}",".m5m-mode-right_slide .m5m-panel{top:0;bottom:0;right:0;height:100%;max-height:100%;width:400px;max-width:100vw;border-radius:0;transform:translateX(28px);}",".m5m-mode-right_slide.m5m-open .m5m-panel{transform:none;}",".m5m-mode-modal .m5m-panel{top:50%;left:50%;right:auto;bottom:auto;transform:translate(-50%,-46%) scale(.97);width:400px;height:min(600px,86vh);transform-origin:center;}",".m5m-mode-modal.m5m-open .m5m-panel{transform:translate(-50%,-50%);}",".m5m-scrim{position:fixed;inset:0;z-index:2147482999;background:rgba(11,18,32,.5);opacity:0;visibility:hidden;transition:opacity .25s var(--m5-ease),visibility 0s linear .25s;}",".m5m-mode-modal.m5m-open .m5m-scrim{opacity:1;visibility:visible;transition:opacity .25s var(--m5-ease);}",".m5m-mode-inline{display:block;width:100%;}",".m5m-inline-card{display:flex;flex-direction:column;width:100%;max-width:640px;margin:0 auto;height:min(520px,80vh);","background:var(--m5-surface);border:1px solid var(--m5-border);border-radius:var(--m5-radius);box-shadow:0 6px 24px rgba(15,23,42,.08);overflow:hidden;}",".m5m-mode-inline .m5m-header{flex-direction:column;align-items:center;text-align:center;gap:8px;padding:24px 22px 18px;background:var(--m5-surface);color:var(--m5-text);border-bottom:1px solid var(--m5-border);}",".m5m-mode-inline .m5m-ava{width:54px;height:54px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mode-inline .m5m-ava svg{width:28px;height:28px;}",".m5m-mode-inline .m5m-head-text{align-items:center;}",".m5m-mode-inline .m5m-title{font-size:20px;font-weight:700;line-height:1.28;}",".m5m-mode-inline .m5m-subtitle{color:var(--m5-text-sub);opacity:1;justify-content:center;}",".m5m-mode-inline .m5m-messages{padding:18px 18px 10px;}",".m5m-choices.m5m-tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;flex:1 1 auto;grid-auto-rows:1fr;}",".m5m-tiles .m5m-choice:last-child:nth-child(odd){grid-column:1 / -1;}",".m5m-tiles .m5m-choice{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:12px;min-height:106px;padding:16px;border:0;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:hover{transform:translateY(-2px);border:0;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 24px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:active{transform:translateY(0) scale(.99);}",".m5m-tiles .m5m-choice-icon{width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.22);color:var(--m5-on-brand);}",".m5m-tiles .m5m-choice-icon svg{width:22px;height:22px;}",".m5m-tiles .m5m-choice-body{flex:1 1 auto;}",".m5m-tiles .m5m-choice-label{font-size:14.5px;font-weight:650;line-height:1.3;white-space:normal;}",".m5m-tiles .m5m-choice-desc{color:var(--m5-on-brand);opacity:.85;}",".m5m-tiles .m5m-choice-arrow{display:none;}","@media (max-width:420px){.m5m-choices.m5m-tiles{grid-template-columns:1fr;}}",".m5m-header{display:flex;align-items:center;gap:12px;padding:15px 16px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));}",".m5m-ava{position:relative;flex:0 0 auto;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:rgba(127,127,127,.20);overflow:hidden;color:var(--m5-on-brand);}",".m5m-ava svg{width:21px;height:21px;}",".m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%;}",".m5m-head-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-title{font-size:15.5px;font-weight:680;letter-spacing:.1px;line-height:1.25;}",".m5m-subtitle{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.92;font-weight:500;}",".m5m-online{width:7px;height:7px;border-radius:50%;background:#34D399;box-shadow:0 0 0 0 rgba(52,211,153,.6);animation:m5mPulse 2.4s ease-in-out infinite;}",".m5m-close{flex:0 0 auto;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:var(--m5-on-brand);cursor:pointer;transition:background .18s var(--m5-ease);}",".m5m-close:hover{background:rgba(127,127,127,.22);}",".m5m-messages{flex:1;overflow-y:auto;padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px;background:var(--m5-msg-bg);}",".m5m-row{display:flex;align-items:flex-end;gap:8px;max-width:100%;animation:m5mIn .32s var(--m5-ease) both;}",".m5m-row-user{flex-direction:row-reverse;}",".m5m-row.m5m-grouped{margin-top:-4px;}",".m5m-msg-ava{position:relative;flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));overflow:hidden;align-self:flex-start;color:var(--m5-on-brand);}",".m5m-msg-ava:empty{background:transparent;}",".m5m-msg-ava svg{width:15px;height:15px;}",".m5m-col{display:flex;flex-direction:column;gap:3px;max-width:78%;}",".m5m-msg{padding:10px 14px;border-radius:var(--m5-radius-msg);font-size:14px;line-height:1.45;word-wrap:break-word;}",".m5m-bot{background:var(--m5-bot-bg);color:var(--m5-text);border:1px solid var(--m5-bot-border);border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(15,23,42,.10);}",".m5m-user{max-width:78%;align-self:flex-end;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);border-bottom-right-radius:5px;box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-time{font-size:11px;color:var(--m5-meta);padding:0 6px;}",".m5m-typing{display:flex;align-items:center;gap:4px;padding:13px 15px;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);border-bottom-left-radius:5px;}",".m5m-typing span{width:7px;height:7px;border-radius:50%;background:var(--m5-text-sub);opacity:.55;animation:m5mDot 1.2s infinite ease-in-out;}",".m5m-typing span:nth-child(2){animation-delay:.16s;}",".m5m-typing span:nth-child(3){animation-delay:.32s;}",".m5m-input{padding:12px 14px 14px;background:var(--m5-surface);border-top:1px solid var(--m5-border);}",".m5m-input:empty{display:none;}",".m5m-actionbar{display:flex;border-top:1px solid var(--m5-border);background:var(--m5-surface);}",".m5m-action{flex:1;appearance:none;border:0;background:var(--m5-surface);cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:9px 4px;min-height:54px;color:var(--m5-text-sub);text-decoration:none;font-size:11px;font-weight:600;transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-action svg{width:20px;height:20px;}",".m5m-action:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-action:active{background:var(--m5-brand-soft);}",".m5m-action.m5m-act-on{color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:inset 0 -2.5px 0 var(--m5-brand);}",".m5m-action + .m5m-action{border-left:1px solid var(--m5-border);}",".m5m-form{display:flex;gap:8px;align-items:center;}",".m5m-form input{flex:1;min-width:0;border:1.5px solid var(--m5-border);border-radius:var(--m5-radius-pill);padding:11px 16px;font-size:14px;outline:none;background:var(--m5-surface);color:var(--m5-text);transition:border-color .18s var(--m5-ease),box-shadow .18s var(--m5-ease);}",".m5m-form input::placeholder{color:var(--m5-text-sub);}",".m5m-form input:focus{border-color:var(--m5-brand);box-shadow:0 0 0 3px var(--m5-brand-ring);}",".m5m-send{flex:0 0 auto;width:44px;height:44px;border:0;border-radius:50%;color:var(--m5-on-brand);cursor:pointer;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-send:hover{transform:scale(1.06);}",".m5m-send:active{transform:scale(.94);}",".m5m-choices{display:flex;flex-direction:column;gap:8px;}",".m5m-choice{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:14px;background:var(--m5-surface);color:var(--m5-text);padding:11px 14px;font-size:14px;font-weight:600;font-family:inherit;min-height:44px;transition:transform .16s var(--m5-ease),border-color .16s var(--m5-ease),background .16s var(--m5-ease),box-shadow .16s var(--m5-ease);}",".m5m-choice:hover{transform:translateX(4px);border-color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:0 4px 14px var(--m5-brand-glow);}",".m5m-choice:active{transform:translateX(2px) scale(.99);}",".m5m-choice-icon{flex:0 0 auto;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-choice-icon svg{width:18px;height:18px;}",".m5m-choice-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-choice-label{line-height:1.3;}",".m5m-choice-arrow{flex:0 0 auto;color:var(--m5-text-sub);opacity:0;transform:translateX(-4px);transition:opacity .16s var(--m5-ease),transform .16s var(--m5-ease),color .16s var(--m5-ease);display:grid;place-items:center;}",".m5m-choice:hover .m5m-choice-arrow{opacity:1;transform:translateX(0);color:var(--m5-brand);}",".m5m-success{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:26px 22px;margin-top:auto;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-success-icon{display:grid;place-items:center;width:62px;height:62px;border-radius:18px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 28px var(--m5-brand-glow);animation:m5mPop .42s var(--m5-ease) both;}",".m5m-success-title{font-size:17px;font-weight:700;color:var(--m5-text);margin-top:4px;}",".m5m-success-text{font-size:13.5px;color:var(--m5-text-sub);max-width:260px;}",".m5m-success-cta{margin-top:8px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:11px 26px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-success-cta:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-summary{align-self:stretch;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);padding:15px 16px;box-shadow:0 1px 3px rgba(15,23,42,.10);animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sum-head{font-size:13px;font-weight:700;color:var(--m5-text);margin-bottom:11px;}",".m5m-sum-rows{display:flex;flex-direction:column;gap:9px;}",".m5m-sum-row{display:flex;justify-content:space-between;gap:14px;font-size:13px;line-height:1.35;}",".m5m-sum-label{color:var(--m5-text-sub);white-space:nowrap;}",".m5m-sum-val{color:var(--m5-text);font-weight:600;text-align:right;word-break:break-word;}",".m5m-sum-confirm{margin-top:14px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:11px;font-size:14px;font-weight:650;cursor:pointer;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-sum-confirm:hover{transform:translateY(-1px);}",".m5m-sum-confirm:disabled{opacity:.6;cursor:default;transform:none;}",".m5m-error{display:flex;flex-direction:column;gap:10px;align-items:center;padding:18px;text-align:center;}",".m5m-error-text{font-size:13.5px;color:var(--m5-danger);}",".m5m-retry{border:0;border-radius:var(--m5-radius-pill);padding:11px 22px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-home{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:22px 20px 10px;margin:auto 0;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-home-ava{position:relative;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 26px var(--m5-brand-glow);overflow:hidden;}",".m5m-home-ava .m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-home-ava svg{width:26px;height:26px;}",".m5m-home-ava .m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:16px;}",".m5m-home-title{font-size:18px;font-weight:750;color:var(--m5-text);line-height:1.3;}",".m5m-home-text{font-size:13.5px;color:var(--m5-text-sub);max-width:290px;line-height:1.5;}",".m5m-home-hint{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:var(--m5-brand);}",".m5m-home-hint svg{width:16px;height:16px;}",".m5m-reveal{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:26px 22px;margin:auto 0;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-reveal-icon{display:grid;place-items:center;width:56px;height:56px;border-radius:16px;color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-reveal-icon svg{width:26px;height:26px;}",".m5m-reveal-title{font-size:16px;font-weight:700;color:var(--m5-text);}",".m5m-reveal-val{font-size:19px;font-weight:750;color:var(--m5-brand);text-decoration:none;word-break:break-word;}",".m5m-reveal-val:hover{text-decoration:underline;}",".m5m-reveal-copy{display:inline-flex;align-items:center;gap:6px;margin-top:4px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease),color .16s var(--m5-ease);}",".m5m-reveal-copy:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-reveal-copy svg{width:15px;height:15px;}",".m5m-multi{display:flex;flex-direction:column;gap:8px;align-self:stretch;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-mopt{display:flex;align-items:center;gap:11px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:13px;background:var(--m5-surface);color:var(--m5-text);padding:12px 14px;font-size:14px;font-weight:600;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-mopt:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-icon{flex:0 0 auto;display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mopt-icon svg{width:17px;height:17px;}",".m5m-mopt-label{flex:1;min-width:0;}",".m5m-mopt-check{flex:0 0 auto;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--m5-border);color:transparent;transition:background .14s var(--m5-ease),border-color .14s var(--m5-ease),color .14s var(--m5-ease);}",".m5m-mopt-check svg{width:13px;height:13px;}",".m5m-mopt-on{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-on .m5m-mopt-check{background:var(--m5-brand);border-color:var(--m5-brand);color:var(--m5-on-brand);}",".m5m-multi-cont{margin-top:6px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-multi-cont:hover:not(:disabled){transform:translateY(-1px);}",".m5m-multi-cont:disabled{opacity:.5;cursor:default;}",".m5m-sched{align-self:stretch;display:flex;flex-direction:column;gap:12px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sd-meta{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--m5-text-sub);}",".m5m-sd-meta svg{width:16px;height:16px;}",".m5m-sd-days{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;}",".m5m-sd-day{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:1px;width:52px;padding:8px 4px;border:1.5px solid var(--m5-border);border-radius:12px;background:var(--m5-surface);color:var(--m5-text);cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-day:hover{border-color:var(--m5-brand);}",".m5m-sd-dow{font-size:10.5px;font-weight:600;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-num{font-size:17px;font-weight:750;}",".m5m-sd-mon{font-size:10px;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-day.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-day.m5m-sd-on .m5m-sd-dow,.m5m-sd-day.m5m-sd-on .m5m-sd-mon{color:rgba(255,255,255,.85);}",".m5m-sd-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}",".m5m-sd-slot{border:1.5px solid var(--m5-border);border-radius:10px;background:var(--m5-surface);color:var(--m5-text);padding:9px 4px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-slot:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-sd-slot.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-confirm{margin-top:2px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-sd-confirm:hover:not(:disabled){transform:translateY(-1px);}",".m5m-sd-confirm:disabled{opacity:.5;cursor:default;}","@keyframes m5mIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}","@keyframes m5mDot{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-4px);opacity:1;}}","@keyframes m5mPulse{0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5);}50%{box-shadow:0 0 0 5px rgba(52,211,153,0);}}","@keyframes m5mPop{0%{transform:scale(.4);opacity:0;}60%{transform:scale(1.08);}100%{transform:scale(1);opacity:1;}}","@media (max-width:480px){.m5m-panel{width:auto;left:12px;right:12px;bottom:12px;height:auto;top:12px;max-height:none;}.m5m-launcher{bottom:14px;right:14px;}}","@media (prefers-reduced-motion: reduce){.m5m-root *{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;}.m5m-choice:hover,.m5m-launcher:hover,.m5m-send:hover{transform:none;}}"].join("")}}();`;function st(t={}){const e=t||{},a=Array.isArray(e.steps)&&e.steps.length?e.steps:[{id:"1",step_type:"message",step_prompts:["👋 Add steps in the flow builder to preview the conversation."],step_options:[],step_columns:[],step_description:""}];return{mag_display_mode:e.display_mode||"chat",mag_trigger:"on_load",mag_theme_color:/^#[0-9a-fA-F]{6}$/.test(e.theme_color||"")?e.theme_color:"#0072BA",mag_theme_mode:e.theme_mode||"auto",mag_title:e.title&&String(e.title).trim()||e.name||"Chat with us",mag_subtitle:e.subtitle!=null?e.subtitle:"Typically replies in a few minutes",mag_launcher_label:e.launcher_label||"",mag_logo_url:e.logo_url||"",mag_summary:!!e.summary,mag_summary_heading:e.summary_heading||"",mag_home:!!e.home,mag_welcome:e.welcome!=null?e.welcome:"",mag_actions:Array.isArray(e.actions)?e.actions:[],mag_macro_steps:a}}function Co(t){const e=JSON.stringify([t]),a=ko.replace(/##APPGUID##/g,()=>"preview").replace(/["']##MAGNET_DEFINITIONS##["']/g,()=>e).replace(/<\/script>/gi,"<\\/script>");return`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #eef2f7; color: #334155; }
  .pv-nav { display: flex; align-items: center; gap: 14px; padding: 14px 22px; background: #fff; border-bottom: 1px solid #e2e8f0; }
  .pv-logo { width: 26px; height: 26px; border-radius: 7px; background: linear-gradient(135deg,#c7d2e0,#aab8cc); }
  .pv-navlinks { display: flex; gap: 14px; margin-left: auto; }
  .pv-navlinks i { display: block; width: 46px; height: 9px; border-radius: 5px; background: #e2e8f0; }
  .pv-hero { padding: 40px 22px 20px; text-align: center; }
  .pv-hero .l1 { height: 20px; width: min(300px, 70%); margin: 0 auto 12px; border-radius: 7px; background: #dbe3ee; }
  .pv-hero .l2 { height: 12px; width: min(420px, 84%); margin: 0 auto; border-radius: 6px; background: #e6ecf4; }
  .pv-content { padding: 26px 22px 90px; }
  .pv-slot { max-width: 680px; margin: 0 auto; }
  .pv-cards { max-width: 680px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .pv-card { height: 120px; border-radius: 12px; background: #fff; border: 1px solid #e2e8f0; }
  @media (max-width: 460px) { .pv-cards { grid-template-columns: 1fr; } .pv-navlinks { display: none; } }
</style></head>
<body>
  <div class="pv-nav"><span class="pv-logo"></span><span class="pv-navlinks"><i></i><i></i><i></i></span></div>
  <div class="pv-hero"><div class="l1"></div><div class="l2"></div></div>
  <div class="pv-content">
    ${t.mag_display_mode==="inline"?'<div class="pv-slot"><div data-m5m-inline></div></div>':'<div class="pv-cards"><div class="pv-card"></div><div class="pv-card"></div></div>'}
  </div>
  <script>
    (function () {
      var _f = window.fetch ? window.fetch.bind(window) : null;
      window.fetch = function (u, o) {
        if (String(u).indexOf('/capture') !== -1) {
          return Promise.resolve({ ok: true, json: function () { return Promise.resolve({ ok: true }); } });
        }
        return _f ? _f(u, o) : Promise.reject(new Error('no fetch'));
      };
    })();
  <\/script>
  <script>${a}<\/script>
</body></html>`}let Lt=!1;function Io(){if(Lt)return;const t=document.createElement("style");t.id="m5t-preview-styles",t.textContent=`
    .pv-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.55); z-index: 3000; opacity: 0; transition: opacity 0.18s ease; display: flex; align-items: center; justify-content: center; padding: 20px; }
    .pv-scrim.open { opacity: 1; }
    .pv-modal { width: min(880px, 96vw); max-height: 94vh; display: flex; flex-direction: column; background: var(--color-bg, #fff); color: var(--color-text, #0B1220); border-radius: var(--radius-lg, 16px); box-shadow: 0 24px 70px rgba(11,18,32,0.4); opacity: 0; transform: translateY(8px); transition: opacity 0.18s ease, transform 0.18s ease; }
    .pv-scrim.open .pv-modal { opacity: 1; transform: none; }
    .pv-head { display: flex; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .pv-title { font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 8px; }
    .pv-title .material-symbols-outlined { font-size: 20px; color: var(--color-primary-600, #0072BA); }
    .pv-ctrls { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    .pv-seg { display: inline-flex; border: 1px solid var(--color-border, #D4DCE8); border-radius: 9px; overflow: hidden; }
    .pv-seg button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; padding: 6px 12px; color: var(--color-text-muted, #4A5A78); display: inline-flex; align-items: center; gap: 5px; }
    .pv-seg button + button { border-left: 1px solid var(--color-border, #D4DCE8); }
    .pv-seg button.is-on { background: var(--color-primary-600, #0072BA); color: #fff; }
    .pv-seg button .material-symbols-outlined { font-size: 17px; }
    .pv-iconbtn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; color: var(--color-text-muted, #4A5A78); }
    .pv-iconbtn:hover { border-color: var(--color-primary-600, #0072BA); color: var(--color-primary-600, #0072BA); }
    .pv-iconbtn .material-symbols-outlined { font-size: 19px; }
    .pv-body { padding: 20px; overflow: auto; background: var(--color-surface, #F4F7FB); display: flex; justify-content: center; border-radius: 0 0 var(--radius-lg, 16px) var(--radius-lg, 16px); }
    .pv-stage { transition: width 0.2s ease; }
    .pv-stage[data-device="desktop"] { width: 100%; max-width: 760px; }
    .pv-stage[data-device="mobile"] { width: 390px; }
    .pv-frame { width: 100%; border: 0; background: #eef2f7; border-radius: 12px; box-shadow: 0 6px 24px rgba(11,18,32,0.12); }
    .pv-stage[data-device="desktop"] .pv-frame { height: 560px; }
    .pv-stage[data-device="mobile"] .pv-frame { height: 620px; border-radius: 22px; border: 8px solid #1e293b; box-shadow: 0 10px 30px rgba(11,18,32,0.28); }
    .pv-hint { text-align: center; font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: 10px 0 0; }
  `,document.head.appendChild(t),Lt=!0}function lt(t){Io();let e="desktop";const a=document.createElement("div");a.className="pv-scrim",a.innerHTML=`
    <div class="pv-modal" role="dialog" aria-modal="true" aria-label="Magnet preview">
      <div class="pv-head">
        <span class="pv-title"><span class="material-symbols-outlined" aria-hidden="true">visibility</span> Live preview</span>
        <div class="pv-ctrls">
          <div class="pv-seg" role="group" aria-label="Device">
            <button type="button" data-device="desktop" class="is-on"><span class="material-symbols-outlined" aria-hidden="true">desktop_windows</span>Desktop</button>
            <button type="button" data-device="mobile"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span>Mobile</button>
          </div>
          <button class="pv-iconbtn" type="button" data-x="refresh" title="Restart preview"><span class="material-symbols-outlined" aria-hidden="true">refresh</span></button>
          <button class="pv-iconbtn" type="button" data-x="close" title="Close"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
        </div>
      </div>
      <div class="pv-body">
        <div>
          <div class="pv-stage" data-device="desktop"><iframe class="pv-frame" sandbox="allow-scripts" title="Magnet preview"></iframe></div>
          <p class="pv-hint">Live render of the actual widget. Capture is disabled — no test leads are created.</p>
        </div>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("open"));const n=a.querySelector(".pv-frame"),o=a.querySelector(".pv-stage"),r=()=>{try{n.srcdoc=Co(t())}catch{}};r();const i=()=>{a.classList.remove("open"),setTimeout(()=>a.remove(),180)};return a.querySelector('[data-x="close"]').addEventListener("click",i),a.querySelector('[data-x="refresh"]').addEventListener("click",r),a.addEventListener("click",l=>{l.target===a&&i()}),a.querySelector(".pv-seg").addEventListener("click",l=>{const s=l.target.closest("button[data-device]");!s||s.dataset.device===e||(e=s.dataset.device,a.querySelectorAll(".pv-seg button").forEach(c=>c.classList.toggle("is-on",c.dataset.device===e)),o.dataset.device=e,r())}),{close:i,rebuild:r}}const No={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},H=t=>String(t??"").replace(/[&<>"']/g,e=>No[e]),Lo=(t,e="info")=>{try{p.publish(u.UI_TOAST,{message:t,type:e})}catch{}},Oo=()=>S.getConfig?.().BASE_URL||"",tt={single_select:{label:"Multiple choice",icon:"quiz",color:"#0072BA"},multi_select:{label:"Select all",icon:"checklist",color:"#0E6BA8"},scheduler:{label:"Scheduler",icon:"event",color:"#915E8B"},text:{label:"Short text",icon:"short_text",color:"#5B54C6"},email:{label:"Email",icon:"mail",color:"#0E8F86"},phone:{label:"Phone",icon:"call",color:"#2E8B57"},message:{label:"Message",icon:"chat",color:"#B4791F"}},fa=["single_select","multi_select","scheduler","text","email","phone","message"],ct=t=>tt[t]||tt.single_select,se=t=>t==="single_select"||t==="multi_select",ze=t=>t!=="message",we=t=>t==="scheduler",Fe=t=>t==="email"?"email":t==="phone"?"phone":t==="scheduler"?"preferred_time":"",me=()=>({meeting_label:"",start:"09:00",end:"17:00",mins:30,days:14}),Ro=["first_name","last_name","email","phone","company","product_interest","budget","timeline","message"],Mo=[["","No icon"],["event","Calendar"],["schedule","Clock"],["mail","Email"],["sms","Text"],["phone","Phone"],["chat","Chat"],["description","Document"],["help","Question"],["place","Location"],["person","Person"],["bolt","Quick"],["check_circle","Check"],["star","Star"],["home","Home"],["build","Service"]];function Po(t,e){const a=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(t||"").trim());return a?`rgba(${parseInt(a[1],16)},${parseInt(a[2],16)},${parseInt(a[3],16)},${e})`:`rgba(0,114,186,${e})`}let Ot=!1;function Fo(){if(Ot)return;const t=document.createElement("style");t.id="m5t-flow-styles",t.textContent=`
    .mag-modal.mag-flow { width: min(680px, 94vw); }
    .flow-canvas { padding: 2px 0; }
    .flow-start { display: flex; align-items: center; gap: 7px; justify-content: center; font-size: 0.74rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }
    .flow-start .material-symbols-outlined { font-size: 17px; }
    .flow-conn { display: flex; flex-direction: column; align-items: center; }
    .flow-conn__line { width: 2px; height: 12px; background: var(--color-border, #D4DCE8); }
    .flow-conn .material-symbols-outlined { font-size: 16px; color: var(--color-text-subtle, #6C7C9A); margin-top: -5px; }

    .flow-node { position: relative; border: 1px solid var(--color-border, #D4DCE8); border-left: 3px solid var(--nc, #0072BA); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); box-shadow: 0 1px 2px rgba(11,18,32,0.04); transition: box-shadow .12s, border-color .12s, opacity .12s; }
    .flow-node[draggable="true"] { cursor: grab; }
    .flow-node[draggable="true"]:hover { box-shadow: 0 3px 12px rgba(11,18,32,0.09); }
    .flow-node.dragging { opacity: 0.4; }
    .flow-node--open { box-shadow: 0 8px 26px rgba(11,18,32,0.14); }
    .flow-node.drop-before::before, .flow-node.drop-after::after { content: ""; position: absolute; left: 8px; right: 8px; height: 3px; border-radius: 3px; background: var(--color-primary-600, #0072BA); }
    .flow-node.drop-before::before { top: -8px; }
    .flow-node.drop-after::after { bottom: -8px; }
    .flow-node__hd { display: flex; align-items: center; gap: 8px; padding: 9px 11px; }
    .flow-node__grip { flex: 0 0 auto; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .flow-node__grip .material-symbols-outlined { font-size: 18px; }
    .flow-node__ico { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; background: var(--nct, rgba(0,114,186,0.14)); color: var(--nc, #0072BA); }
    .flow-node__ico .material-symbols-outlined { font-size: 17px; }
    .flow-node__type { font-weight: 700; font-size: 0.82rem; color: var(--nc, #0072BA); }
    .flow-node__n { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .flow-node__tools { margin-left: auto; display: flex; gap: 3px; }
    .flow-node__tools button { appearance: none; border: 1px solid transparent; background: transparent; cursor: pointer; width: 28px; height: 28px; border-radius: 7px; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .flow-node__tools button:hover:not(:disabled) { background: var(--color-surface, #F4F7FB); color: var(--color-text, #0B1220); }
    .flow-node__tools button:disabled { opacity: 0.35; cursor: default; }
    .flow-node__tools button .material-symbols-outlined { font-size: 17px; }
    .flow-node__preview { padding: 0 12px 12px 46px; cursor: pointer; }
    .flow-node__prompt { font-size: 0.86rem; color: var(--color-text, #0B1220); overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
    .flow-node__prompt.is-empty { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .flow-node__meta { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 5px; }
    .flow-node__meta b { color: var(--color-text-muted, #4A5A78); font-weight: 700; }
    .flow-node__chips { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 7px; }
    .flow-node__chip { font-size: 0.72rem; font-weight: 600; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .flow-node__body { padding: 4px 14px 14px; border-top: 1px solid var(--color-border, #D4DCE8); }
    .flow-node__body .mag-modal__label:first-child { margin-top: 8px; }
    .flow-sub { font-weight: 400; font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .flow-opts { display: flex; flex-direction: column; gap: 6px; }
    .flow-opt { display: flex; gap: 6px; align-items: center; }
    .flow-opt .flow-o-label { flex: 1 1 auto; min-width: 0; }
    .flow-opt .flow-o-icon { flex: 0 0 auto; width: 118px; }
    .flow-opt__del { appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; flex: 0 0 auto; }
    .flow-opt__del:hover:not(:disabled) { color: var(--color-danger, #DD4124); background: var(--color-surface-2, #EAF0F7); }
    .flow-opt__del:disabled { opacity: 0.35; cursor: default; }
    .mag-flow__addopt { appearance: none; border: 1px dashed var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.86rem; font-weight: 600; color: var(--color-primary-600, #0072BA); padding: 9px 14px; border-radius: var(--radius-md, 10px); display: inline-flex; align-items: center; gap: 6px; margin-top: 6px; }
    .mag-flow__addopt:hover { background: var(--color-accent-soft, rgba(0,114,186,0.08)); }
    .mag-flow__addopt .material-symbols-outlined { font-size: 18px; }

    .flow-palette { margin-top: 16px; border-top: 1px dashed var(--color-border, #D4DCE8); padding-top: 14px; }
    .flow-palette__t { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 8px; }
    .flow-palette__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(128px, 1fr)); gap: 8px; }
    .flow-palette__chip { display: flex; align-items: center; gap: 7px; padding: 9px 11px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: var(--color-text, #0B1220); text-align: left; }
    .flow-palette__chip:hover { border-color: var(--pc, #0072BA); background: var(--color-surface, #F4F7FB); }
    .flow-palette__chip .material-symbols-outlined { font-size: 18px; color: var(--pc, #0072BA); }
  `,document.head.appendChild(t),Ot=!0}let C=[],ne=null,$o=0,ee=null,oe=null;const _a=()=>"f"+ ++$o;function va(t="single_select"){return{_uid:_a(),id:"",step_type:t,step_prompts:[""],step_options:se(t)?[{label:"",goto:"",icon:""},{label:"",goto:"",icon:""}]:[],step_columns:Fe(t)?[Fe(t)]:[],step_description:"",step_config:we(t)?me():null}}function Do(t){const a=(Array.isArray(t.steps)?t.steps:[]).map(n=>({_uid:_a(),id:n.id!=null?String(n.id):"",step_type:tt[n.step_type]?n.step_type:"single_select",step_prompts:Array.isArray(n.step_prompts)?n.step_prompts.map(String):[],step_options:(Array.isArray(n.step_options)?n.step_options:[]).map(o=>({label:o&&o.label!=null?String(o.label):"",goto:o&&o.goto!=null?String(o.goto):"",icon:o&&o.icon!=null?String(o.icon):""})),step_columns:Array.isArray(n.step_columns)?n.step_columns.map(String):[],step_description:n.step_description!=null?String(n.step_description):"",step_config:n.step_config&&typeof n.step_config=="object"?{...me(),...n.step_config}:n.step_type==="scheduler"?me():null}));return a.length?a:[va("single_select")]}function Uo(t){se(t.step_type)?t.step_options.length||(t.step_options=[{label:"",goto:"",icon:""},{label:"",goto:"",icon:""}]):t.step_options=[],ze(t.step_type)?!t.step_columns.length&&Fe(t.step_type)&&(t.step_columns=[Fe(t.step_type)]):t.step_columns=[],t.step_config=we(t.step_type)?t.step_config||me():null}function Bo(t,e){return`<div class="flow-opt">
    <input class="mag-modal__input flow-o-label" type="text" value="${H(t.label)}" placeholder="Option label">
    <select class="mag-modal__select flow-o-icon" title="Icon">${Mo.map(([a,n])=>`<option value="${H(a)}"${a===t.icon?" selected":""}>${H(n)}</option>`).join("")}</select>
    <button class="flow-opt__del" type="button" data-x="delopt" title="Remove choice"${e?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
  </div>`}function Ho(t){const e=fa.map(n=>`<option value="${n}"${n===t.step_type?" selected":""}>${H(ct(n).label)}</option>`).join(""),a=t.step_options.length<=1;return`<div class="flow-node__body">
    <label class="mag-modal__label">Step type</label>
    <select class="mag-modal__select flow-f-type">${e}</select>

    <label class="mag-modal__label">${t.step_type==="message"?"Message":"Question"} <span class="flow-sub">one bubble per line</span></label>
    <textarea class="mag-modal__input flow-f-prompts" rows="2" placeholder="${t.step_type==="message"?"Thanks! One moment…":"What can we help you with?"}">${H(t.step_prompts.join(`
`))}</textarea>

    ${ze(t.step_type)?`
    <label class="mag-modal__label">Saves to</label>
    <input class="mag-modal__input flow-f-field" type="text" list="flow-fields" value="${H(t.step_columns[0]||"")}" placeholder="e.g. first_name">
    <p class="mag-modal__hint">The lead field this answer fills. Pick a suggestion or type your own.</p>`:""}

    ${se(t.step_type)?`
    <label class="mag-modal__label">Choices${t.step_type==="multi_select"?' <span class="flow-sub">visitor can pick several</span>':""}</label>
    <div class="flow-opts">${t.step_options.map(n=>Bo(n,a)).join("")}</div>
    <button class="mag-flow__addopt" type="button" data-x="addopt"><span class="material-symbols-outlined" aria-hidden="true">add</span> Add choice</button>`:""}

    ${we(t.step_type)?`
    <label class="mag-modal__label">Meeting label <span class="flow-sub">optional</span></label>
    <input class="mag-modal__input flow-f-mtlabel" type="text" value="${H(t.step_config?.meeting_label||"")}" placeholder="e.g. 15 minute call">
    <div class="mag-modal__row" style="margin-top:8px">
      <div><label class="mag-modal__label">From</label><input class="mag-modal__input flow-f-start" type="time" value="${H(t.step_config?.start||"09:00")}"></div>
      <div><label class="mag-modal__label">To</label><input class="mag-modal__input flow-f-end" type="time" value="${H(t.step_config?.end||"17:00")}"></div>
      <div style="flex:0 0 auto"><label class="mag-modal__label">Slot</label>
        <select class="mag-modal__select flow-f-mins">${[15,30,45,60].map(n=>`<option value="${n}"${(t.step_config?.mins||30)===n?" selected":""}>${n} min</option>`).join("")}</select></div>
    </div>
    <p class="mag-modal__hint">Visitors pick a day + time within these hours; the choice saves to the field above.</p>`:""}
  </div>`}function Go(t){const e=t.step_prompts.find(o=>String(o).trim()!=="")||"",a=e?`<div class="flow-node__prompt">“${H(e)}”</div>`:`<div class="flow-node__prompt is-empty">${t.step_type==="message"?"No message yet":"No question yet"}</div>`;let n="";if(se(t.step_type)){const o=t.step_options.map(r=>String(r.label).trim()).filter(Boolean);if(o.length){const r=o.slice(0,4).map(l=>`<span class="flow-node__chip">${H(l)}</span>`).join(""),i=o.length>4?`<span class="flow-node__chip">+${o.length-4}</span>`:"";n=`<div class="flow-node__chips">${r}${i}</div>`}}else ze(t.step_type)&&t.step_columns[0]&&(n=`<div class="flow-node__meta">Saves to <b>${H(t.step_columns[0])}</b></div>`);return`<div class="flow-node__preview">${a}${n}</div>`}function zo(t,e,a){const n=ct(t.step_type),o=t._uid===ne,r=`--nc:${n.color};--nct:${Po(n.color,.14)}`;return`<div class="flow-node${o?" flow-node--open":""}" data-uid="${t._uid}" style="${r}"${o?"":' draggable="true"'}>
    <div class="flow-node__hd">
      <span class="flow-node__grip" title="${o?"":"Drag to reorder"}"><span class="material-symbols-outlined" aria-hidden="true">${o?"expand_less":"drag_indicator"}</span></span>
      <span class="flow-node__ico"><span class="material-symbols-outlined" aria-hidden="true">${n.icon}</span></span>
      <span class="flow-node__type">${H(n.label)}</span>
      <span class="flow-node__n">Step ${e+1}</span>
      <span class="flow-node__tools">
        <button type="button" data-x="up" title="Move up"${e===0?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span></button>
        <button type="button" data-x="down" title="Move down"${e===a-1?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span></button>
        <button type="button" data-x="del" title="Delete step"${a===1?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </span>
    </div>
    ${o?Ho(t):Go(t)}
  </div>`}const Rt='<div class="flow-conn"><span class="flow-conn__line"></span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></div>';function K(){const t=document.getElementById("flow-nodes");if(!t)return;const e=C.length,a=['<div class="flow-start"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Conversation starts</div>',Rt];C.forEach((n,o)=>{a.push(zo(n,o,e)),o<e-1&&a.push(Rt)}),t.innerHTML=a.join("")}function ae(){const t=document.querySelector(".flow-node--open");if(!t)return;const e=C.find(r=>r._uid===t.dataset.uid);if(!e)return;const a=t.querySelector(".flow-f-type");a&&(e.step_type=a.value);const n=t.querySelector(".flow-f-prompts");n&&(e.step_prompts=n.value.split(`
`));const o=t.querySelector(".flow-f-field");if(e.step_columns=o&&o.value.trim()?[o.value.trim()]:[],se(e.step_type)){const r=e.step_options,i=[];t.querySelectorAll(".flow-opt").forEach((l,s)=>{i.push({label:l.querySelector(".flow-o-label")?.value??"",icon:l.querySelector(".flow-o-icon")?.value??"",goto:r[s]&&r[s].goto||""})}),e.step_options=i}else e.step_options=[];if(we(e.step_type)){const r=t.querySelector(".flow-f-mtlabel"),i=t.querySelector(".flow-f-start"),l=t.querySelector(".flow-f-end"),s=t.querySelector(".flow-f-mins");e.step_config={...e.step_config||me(),...r?{meeting_label:r.value.trim()}:{},...i&&i.value?{start:i.value}:{},...l&&l.value?{end:l.value}:{},...s?{mins:parseInt(s.value,10)||30}:{}}}else e.step_config=null}function ba(){document.querySelectorAll(".flow-node.drop-before, .flow-node.drop-after").forEach(t=>t.classList.remove("drop-before","drop-after"))}function de(){ba(),document.querySelectorAll(".flow-node.dragging").forEach(t=>t.classList.remove("dragging")),ee=null,oe=null}function Vo(){if(!C.length)return"Add at least one step.";for(let t=0;t<C.length;t++){const e=C[t],a=t+1;if(!e.step_prompts.some(n=>String(n).trim()!==""))return`Step ${a}: add what the magnet should say.`;if(se(e.step_type)&&!e.step_options.some(n=>String(n.label).trim()!==""))return`Step ${a}: add at least one choice.`;if(ze(e.step_type)&&!e.step_columns.length)return`Step ${a}: choose which field this answer saves to.`}return""}function Mt(){let t=0;return C.forEach(e=>{const a=parseInt(e.id,10);!isNaN(a)&&a>t&&(t=a)}),C.map(e=>{const a=e.id&&String(e.id).trim()?String(e.id):String(++t),n=se(e.step_type)?e.step_options.map(r=>{const i={label:String(r.label).trim(),goto:String(r.goto||"")};return r.icon&&(i.icon=String(r.icon)),i}).filter(r=>r.label!==""):[],o={id:a,step_type:e.step_type,step_prompts:e.step_prompts.map(r=>String(r)).filter(r=>r.trim()!==""),step_options:n,step_columns:e.step_columns.slice(),step_description:e.step_description||""};return we(e.step_type)&&e.step_config&&(o.step_config={...me(),...e.step_config}),o})}function qo(t,e){Fo(),C=Do(t),ne=C.length===1?C[0]._uid:null,ee=null,oe=null;const a=document.createElement("div");a.className="mag-modal-scrim",a.innerHTML=`
    <div class="mag-modal mag-flow" role="dialog" aria-modal="true" aria-label="Flow builder">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Flow builder — ${H(t.name||"magnet")}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body">
        <p class="mag-modal__hint" style="margin-top:0">Each card is one thing your magnet asks. Drag a card to reorder, click to edit, add steps from the palette below.</p>
        <datalist id="flow-fields">${Ro.map(s=>`<option value="${H(s)}"></option>`).join("")}</datalist>
        <div class="flow-canvas" id="flow-nodes"></div>
        <div class="flow-palette">
          <p class="flow-palette__t">Add a step</p>
          <div class="flow-palette__grid" id="flow-palette">
            ${fa.map(s=>{const c=ct(s);return`<button class="flow-palette__chip" type="button" data-type="${s}" style="--pc:${c.color}"><span class="material-symbols-outlined" aria-hidden="true">${c.icon}</span>${H(c.label)}</button>`}).join("")}
          </div>
        </div>
        <p class="mag-modal__error" id="flow-error"></p>
        <div class="mag-modal__actions">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="preview" style="margin-right:auto"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:18px;vertical-align:-4px;margin-right:4px">visibility</span>Preview</button>
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="save">Save flow</button>
        </div>
      </div>
    </div>`,document.body.appendChild(a),K(),requestAnimationFrame(()=>{a.classList.add("open"),a.querySelector(".mag-modal").classList.add("open")});const n=a.querySelector("#flow-error"),o=a.querySelector("#flow-nodes"),r=()=>{n.textContent=""},i=()=>{de(),a.classList.remove("open"),setTimeout(()=>a.remove(),180)};a.querySelector(".mag-modal__close").addEventListener("click",i),a.querySelector('[data-x="cancel"]').addEventListener("click",i),a.addEventListener("click",s=>{s.target===a&&i()}),a.querySelector('[data-x="preview"]').addEventListener("click",()=>{ae(),lt(()=>st({...t,steps:Mt()}))});const l=s=>{r(),ae(),ne=ne===s?null:s,K()};o.addEventListener("click",s=>{const c=s.target.closest("button[data-x]"),d=s.target.closest(".flow-node");if(!d)return;const f=C.findIndex(_=>_._uid===d.dataset.uid);if(!(f<0)){if(c){const _=c.dataset.x;if(r(),ae(),_==="up"&&f>0)[C[f-1],C[f]]=[C[f],C[f-1]],K();else if(_==="down"&&f<C.length-1)[C[f+1],C[f]]=[C[f],C[f+1]],K();else if(_==="del"&&C.length>1)ne===d.dataset.uid&&(ne=null),C.splice(f,1),K();else if(_==="addopt")C[f].step_options.push({label:"",goto:"",icon:""}),K();else if(_==="delopt"){const E=c.closest(".flow-opt"),x=Array.from(E.parentNode.children).indexOf(E);C[f].step_options.length>1&&x>=0&&(C[f].step_options.splice(x,1),K())}return}s.target.closest(".flow-node__body")||(s.target.closest(".flow-node__hd")||s.target.closest(".flow-node__preview"))&&l(d.dataset.uid)}}),o.addEventListener("change",s=>{if(!s.target.classList.contains("flow-f-type"))return;r(),ae();const c=C.find(d=>d._uid===s.target.closest(".flow-node")?.dataset.uid);c&&Uo(c),K()}),o.addEventListener("dragstart",s=>{const c=s.target.closest(".flow-node");if(!(!c||c.getAttribute("draggable")!=="true")){ee=c.dataset.uid,s.dataTransfer.effectAllowed="move";try{s.dataTransfer.setData("text/plain",ee)}catch{}requestAnimationFrame(()=>c.classList.add("dragging"))}}),o.addEventListener("dragover",s=>{if(!ee)return;s.preventDefault(),s.dataTransfer.dropEffect="move";const c=s.target.closest(".flow-node");if(ba(),!c||c.dataset.uid===ee){oe=null;return}const d=c.getBoundingClientRect(),f=s.clientY>d.top+d.height/2;c.classList.add(f?"drop-after":"drop-before"),oe={uid:c.dataset.uid,after:f}}),o.addEventListener("drop",s=>{if(!ee||!oe){de();return}s.preventDefault(),r(),ae();const c=C.findIndex(_=>_._uid===ee);if(c<0){de();return}const[d]=C.splice(c,1),f=C.findIndex(_=>_._uid===oe.uid);if(f<0){C.splice(c,0,d),de();return}C.splice(oe.after?f+1:f,0,d),de(),K()}),o.addEventListener("dragend",de),a.querySelector("#flow-palette").addEventListener("click",s=>{const c=s.target.closest("[data-type]");if(!c)return;r(),ae();const d=va(c.dataset.type);C.push(d),ne=d._uid,K(),o.lastElementChild?.scrollIntoView({behavior:"smooth",block:"nearest"})}),a.querySelector('[data-x="save"]').addEventListener("click",async s=>{const c=s.currentTarget;ae();const d=Vo();if(d){n.textContent=d;return}c.disabled=!0,n.textContent="";try{const _=await(await fetch(`${Oo()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({steps:Mt()})})).json().catch(()=>({}));if(!_.ok)throw new Error(_.message||"Save failed");Lo("Flow saved","success"),i(),typeof e=="function"&&e()}catch(f){c.disabled=!1,n.textContent=f.message||"Something went wrong."}})}let Pt=!1;const G={magnets:[],owners:[],canProvision:!1,canManage:!1,primaryOrgGuid:null},jo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A=t=>String(t??"").replace(/[&<>"']/g,e=>jo[e]),re=(t,e="info")=>{try{p.publish(u.UI_TOAST,{message:t,type:e})}catch{}},ge=()=>S.getConfig?.().BASE_URL||"",ya=t=>`<script src="${ge()}/m5t/v5/coreSnippet?appguid=${t}" async><\/script>`,Yo={chat:"Chat bubble",right_slide:"Slide-in panel",modal:"Modal",inline:"Inline"},Wo={chat:"chat",right_slide:"vertical_split",modal:"web_asset",inline:"view_agenda"},Ko=[{value:"inline",icon:"view_agenda",label:"Inline"},{value:"chat",icon:"chat",label:"Chat"},{value:"right_slide",icon:"vertical_split",label:"Slide"},{value:"modal",icon:"web_asset",label:"Modal"}],Jo=[{value:"auto",icon:"brightness_auto",label:"Auto"},{value:"light",icon:"light_mode",label:"Light"},{value:"dark",icon:"dark_mode",label:"Dark"}],wa={book:{label:"Book",icon:"event",kind:"book"},chat:{label:"Chat",icon:"chat",kind:"flow"},call:{label:"Call",icon:"phone",kind:"value",placeholder:"Phone number"},email:{label:"Email",icon:"mail",kind:"value",placeholder:"Email address"},support:{label:"Support",icon:"support_agent",kind:"support"}},Xo=["book","chat","call","email","support"];function Ft(t,e,a){return`<div class="mag-seg" role="radiogroup" aria-label="${A(t)}">${a.map(n=>`
    <label><input type="radio" name="${A(t)}" value="${A(n.value)}"${n.value===e?" checked":""}>
      <span><span class="material-symbols-outlined" aria-hidden="true">${A(n.icon)}</span>${A(n.label)}</span></label>`).join("")}</div>`}function Qo(t,e){const a=wa[t],n=!!e,o=n?"":" disabled";let r="";if(a.kind==="value")r=`<input class="mag-modal__input mag-cta__val" type="text" placeholder="${A(a.placeholder)}" value="${A(e?.value||"")}"${o}>`;else if(a.kind==="book"){const l=e?.config?.meeting_label||e?.value||"";r=`<input class="mag-modal__input mag-cta__val" type="text" placeholder="Meeting label (e.g. 15 minute call) — or paste a booking link" value="${A(l)}"${o}>`}else r=`<span class="mag-cta__note">${a.kind==="support"?"Multi-select intake":"Opens your conversation flow"}</span>`;let i="";if(a.kind==="support"){const l=(e?.config?.options||[]).map(s=>s&&s.label||s).filter(Boolean);i=`<textarea class="mag-modal__input mag-cta__opts" rows="3" placeholder="Support options — one per line (e.g. Sales&#10;Support&#10;Billing)"${o}>${A(l.join(`
`))}</textarea>`}return`<div class="mag-cta" data-type="${t}" data-kind="${a.kind}">
    <div class="mag-cta__main">
      <label class="mag-cta__tog"><input type="checkbox" class="mag-cta__on"${n?" checked":""}>
        <span class="material-symbols-outlined" aria-hidden="true">${a.icon}</span>${a.label}</label>
      ${r}
    </div>
    ${i}
  </div>`}function Zo(){if(Pt)return;const t=document.createElement("style");t.id="m5t-magnets-styles",t.textContent=`
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
    .page-shell .mag-mode { align-self: flex-start; display: inline-flex; align-items: center; gap: 5px; font-size: 0.72rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); background: var(--color-surface-2, #EAF0F7); padding: 3px 9px; border-radius: 999px; }
    .page-shell .mag-mode .material-symbols-outlined { font-size: 15px; }
    .page-shell .mag-inline-note { display: flex; gap: 6px; align-items: flex-start; font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); margin-top: -4px; }
    .page-shell .mag-inline-note .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; margin-top: 1px; }
    .page-shell .mag-inline-note code, .mag-modal__body code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
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

    /* configurator: sections + segmented controls + CTA rows */
    .mag-modal__sec { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--color-border, #D4DCE8); }
    .mag-modal__sec-t { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 10px; }
    .mag-seg { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 6px; }
    .mag-seg label { position: relative; cursor: pointer; margin: 0; }
    .mag-seg input { position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none; }
    .mag-seg span { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 9px 4px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); font-size: 0.76rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); text-align: center; transition: border-color .12s, background .12s, color .12s; }
    .mag-seg span .material-symbols-outlined { font-size: 20px; }
    .mag-seg label:hover span { border-color: var(--color-primary-600, #0072BA); }
    .mag-seg input:checked + span { border-color: var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.12)); color: var(--color-primary-600, #0072BA); }
    .mag-seg input:focus-visible + span { box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .mag-cta { display: flex; flex-direction: column; gap: 8px; padding: 7px 0; }
    .mag-cta__main { display: flex; align-items: center; gap: 10px; }
    .mag-cta__tog { flex: 0 0 auto; display: flex; align-items: center; gap: 7px; width: 84px; font-size: 0.86rem; font-weight: 600; cursor: pointer; margin: 0; }
    .mag-cta__tog .material-symbols-outlined { font-size: 18px; color: var(--color-text-subtle, #6C7C9A); }
    .mag-cta__val { flex: 1 1 auto; min-width: 0; }
    .mag-cta__note { flex: 1 1 auto; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .mag-cta__opts { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.86rem; resize: vertical; }
    .mag-cta__val:disabled, .mag-cta__opts:disabled { opacity: 0.5; }
    .mag-tog-row { display: flex; align-items: center; gap: 10px; }
    .mag-tog-row label { font-size: 0.9rem; font-weight: 600; cursor: pointer; margin: 0; }
  `,document.head.appendChild(t),Pt=!0}function at(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function er(t){const e=G.owners.length>1||S.getMemberships().length>1,a=(t.domains||[]).filter(Boolean),n=G.canManage;return`
    <div class="mag-card" data-guid="${A(t.guid)}">
      <div class="mag-card__top">
        <span class="mag-swatch" style="background:${A(t.theme_color||"#0072BA")}"></span>
        <span class="mag-card__hd">
          <div class="mag-name" title="${A(t.name)}">${A(t.name)}</div>
          ${e&&t.owner_name?`<div class="mag-owner">${A(t.owner_name)}</div>`:""}
        </span>
        <span class="mag-badge" data-s="${A(t.status)}">${A(t.status)}</span>
      </div>
      <span class="mag-mode"><span class="material-symbols-outlined" aria-hidden="true">${Wo[t.display_mode]||"chat"}</span>${A(Yo[t.display_mode]||"Chat bubble")}</span>
      <div class="mag-domains">${a.length?a.map(o=>A(o)).join(", "):"<span>No domains set — add yours to go live</span>"}</div>
      <div class="mag-embed">
        <input type="text" readonly value="${A(ya(t.guid))}" aria-label="Embed snippet">
        <button class="mag-btn" data-action="copy" data-guid="${A(t.guid)}" title="Copy embed snippet"><span class="material-symbols-outlined" aria-hidden="true">content_copy</span></button>
      </div>
      ${t.display_mode==="inline"?'<div class="mag-inline-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><span>Inline mode — also place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> where you want it to appear.</span></div>':""}
      <div class="mag-actions">
        <button class="mag-btn" data-action="preview" data-guid="${A(t.guid)}"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview</button>
        ${n?`
        <button class="mag-btn" data-action="edit" data-guid="${A(t.guid)}"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Edit</button>
        <button class="mag-btn" data-action="flow" data-guid="${A(t.guid)}"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
        <button class="mag-btn" data-action="toggle" data-guid="${A(t.guid)}">${t.status==="ENABLED"?'<span class="material-symbols-outlined" aria-hidden="true">pause</span>Disable':'<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Enable'}</button>
        <button class="mag-btn danger" data-action="delete" data-guid="${A(t.guid)}"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>`:""}
      </div>
    </div>`}function tr(){return Zo(),`
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
          ${at("hourglass_empty","Loading magnets…")}
        </div>
      </div>
    </div>`}async function ar(){document.getElementById("mag-new-btn")?.addEventListener("click",()=>Ea(null)),document.getElementById("mag-body")?.addEventListener("click",nr),await Ee()}async function Ee(){const t=document.getElementById("mag-body");if(!t)return;try{const n=await(await fetch(`${ge()}/m5t/v5/magnets`)).json().catch(()=>({}));if(!n.ok)throw new Error(n.message||"Failed to load");G.magnets=n.magnets||[],G.owners=n.owners||[],G.canProvision=!!n.canProvision,G.canManage=!!n.canManage,G.primaryOrgGuid=n.primaryOrgGuid||null}catch{t.innerHTML=at("error","Could not load your magnets. Please try again.");return}const e=document.getElementById("mag-new-btn");if(e&&(e.style.display=G.canProvision?"":"none"),!G.magnets.length){t.innerHTML=at("widgets",G.canProvision?"No magnets yet. Click “New magnet” to create your first.":"No magnets yet.");return}t.innerHTML=`<div class="mag-grid">${G.magnets.map(er).join("")}</div>`}function nr(t){const e=t.target.closest("[data-action]");if(!e)return;const a=e.dataset.guid,n=G.magnets.find(r=>r.guid===a),o=e.dataset.action;if(o==="copy")return or(a);if(n){if(o==="preview")return lt(()=>st(n));if(o==="edit")return Ea(n);if(o==="flow")return qo(n,Ee);if(o==="toggle")return rr(n);if(o==="delete")return ir(n)}}async function or(t){try{await navigator.clipboard.writeText(ya(t)),re("Embed snippet copied","success")}catch{re("Copy failed","danger")}}async function rr(t){const e=t.status==="ENABLED"?"DISABLED":"ENABLED";try{if(!(await(await fetch(`${ge()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e})})).json().catch(()=>({}))).ok)throw new Error;re(e==="ENABLED"?"Magnet enabled":"Magnet disabled","success"),await Ee()}catch{re("Update failed","danger")}}async function ir(t){if(window.confirm(`Delete “${t.name}”? Visitors will no longer see this magnet.`))try{if(!(await(await fetch(`${ge()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`,{method:"DELETE"})).json().catch(()=>({}))).ok)throw new Error;re("Magnet deleted","success"),await Ee()}catch{re("Delete failed","danger")}}function $t(t){const e=[];return t.querySelectorAll(".mag-cta").forEach(a=>{if(!a.querySelector(".mag-cta__on").checked)return;const n=a.dataset.type,o=a.dataset.kind,r=a.querySelector(".mag-cta__val"),i=r?r.value.trim():"";if(o==="value")i&&e.push({type:n,value:i});else if(o==="book"){const l={type:n};i&&(/^https?:\/\//i.test(i)?l.value=i:l.config={meeting_label:i}),e.push(l)}else if(o==="support"){const l=(a.querySelector(".mag-cta__opts")?.value||"").split(`
`).map(c=>c.trim()).filter(Boolean).map(c=>({label:c})),s={type:n};l.length&&(s.config={options:l}),e.push(s)}else e.push({type:n})}),{display_mode:t.querySelector('input[name="mag-display"]:checked')?.value||"chat",theme_mode:t.querySelector('input[name="mag-theme"]:checked')?.value||"auto",title:t.querySelector("#mag-f-title").value.trim(),theme_color:t.querySelector("#mag-f-color").value,subtitle:t.querySelector("#mag-f-subtitle").value,launcher_label:t.querySelector("#mag-f-launcher").value.trim(),logo_url:t.querySelector("#mag-f-logo").value.trim(),summary:t.querySelector("#mag-f-summary").checked,summary_heading:t.querySelector("#mag-f-summary-heading").value.trim(),home:t.querySelector("#mag-f-home").checked,welcome:t.querySelector("#mag-f-welcome").value,actions:e}}function Ea(t){const e=!!t,a=!e&&G.owners.length>1,n=t?.display_mode||"chat",o=t?.theme_mode||"auto",r={};(t?.actions||[]).forEach(d=>{d&&d.type&&(r[d.type]=d)});const i=e?!!t.home:!0,l=e?t.subtitle!=null?t.subtitle:"":"Typically replies in a few minutes",s=document.createElement("div");s.className="mag-modal-scrim",s.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="${e?"Edit magnet":"New magnet"}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${e?"Edit magnet":"New magnet"}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body">
        <label class="mag-modal__label" for="mag-f-name">Name</label>
        <input class="mag-modal__input" id="mag-f-name" type="text" placeholder="e.g. Homepage quote magnet" value="${A(t?.name||"")}">

        ${a?`
        <label class="mag-modal__label" for="mag-f-owner">Client / workspace</label>
        <select class="mag-modal__select" id="mag-f-owner">
          ${G.owners.map(d=>`<option value="${A(d.guid)}"${d.guid===G.primaryOrgGuid?" selected":""}>${A(d.name||d.guid)}</option>`).join("")}
        </select>`:""}

        <label class="mag-modal__label">Display mode</label>
        ${Ft("mag-display",n,Ko)}
        <p class="mag-modal__hint">Inline renders where you place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> on your page. Chat, Slide &amp; Modal float over it — no markup needed.</p>

        <label class="mag-modal__label" for="mag-f-domains">Allowed domain(s)</label>
        <input class="mag-modal__input" id="mag-f-domains" type="text" placeholder="example.com, www.example.com" value="${A((t?.domains||[]).join(", "))}">
        <p class="mag-modal__hint">Comma-separated. The magnet only loads on these domains.</p>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Appearance</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-title">Header title</label>
              <input class="mag-modal__input" id="mag-f-title" type="text" placeholder="Chat with us" value="${A(t?.title||"")}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-color">Color</label>
              <input class="mag-modal__color" id="mag-f-color" type="color" value="${A(/^#[0-9a-fA-F]{6}$/.test(t?.theme_color||"")?t.theme_color:"#0072BA")}">
            </div>
          </div>

          <label class="mag-modal__label" for="mag-f-subtitle">Subtitle</label>
          <input class="mag-modal__input" id="mag-f-subtitle" type="text" placeholder="Typically replies in a few minutes" value="${A(l)}">
          <p class="mag-modal__hint">Small line under the title. Leave blank to hide it.</p>

          <label class="mag-modal__label" for="mag-f-launcher">Launcher label</label>
          <input class="mag-modal__input" id="mag-f-launcher" type="text" placeholder="Defaults to the title" value="${A(t?.launcher_label||"")}">
          <p class="mag-modal__hint">Text on the floating button (Chat / Slide / Modal only).</p>

          <label class="mag-modal__label">Theme</label>
          ${Ft("mag-theme",o,Jo)}

          <label class="mag-modal__label" for="mag-f-logo">Logo URL</label>
          <input class="mag-modal__input" id="mag-f-logo" type="text" placeholder="https://…/logo.png" value="${A(t?.logo_url||"")}">
          <p class="mag-modal__hint">Shown in the header and on bot avatars. Falls back to a color mark.</p>
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Welcome screen</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-home"${i?" checked":""}>
            <label for="mag-f-home">Open on a welcome message + CTA bar (hub)</label>
          </div>
          <label class="mag-modal__label" for="mag-f-welcome">Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-welcome" rows="2" placeholder="Welcome! Pick an option below and we’ll take it from there.">${A(t?.welcome||"")}</textarea>
          <p class="mag-modal__hint">Shown first when the magnet opens. Visitors choose a CTA below instead of a blank chat.</p>
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Call-to-action bar</p>
          <p class="mag-modal__hint" style="margin-top:0">The persistent buttons a visitor taps to pick a channel. Book opens an in-panel scheduler, Chat runs your flow, Support is a multi-select intake. Leave unchecked to hide.</p>
          ${Xo.map(d=>Qo(d,r[d])).join("")}
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Summary card</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-summary"${t?.summary?" checked":""}>
            <label for="mag-f-summary">Show a recap card when the visitor finishes</label>
          </div>
          <label class="mag-modal__label" for="mag-f-summary-heading">Recap heading</label>
          <input class="mag-modal__input" id="mag-f-summary-heading" type="text" placeholder="Here’s what we’ve got" value="${A(t?.summary_heading||"")}">
        </div>

        <p class="mag-modal__error" id="mag-f-error"></p>
        <div class="mag-modal__actions">
          ${e?'<button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="preview" style="margin-right:auto"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:18px;vertical-align:-4px;margin-right:4px">visibility</span>Preview</button>':""}
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="save">${e?"Save":"Create magnet"}</button>
        </div>
      </div>
    </div>`,document.body.appendChild(s),requestAnimationFrame(()=>{s.classList.add("open"),s.querySelector(".mag-modal").classList.add("open")});const c=()=>{s.classList.remove("open"),setTimeout(()=>s.remove(),180)};s.querySelector(".mag-modal__close").addEventListener("click",c),s.querySelector('[data-x="cancel"]').addEventListener("click",c),s.addEventListener("click",d=>{d.target===s&&c()}),s.querySelector("#mag-f-name").focus(),s.querySelectorAll(".mag-cta").forEach(d=>{const f=d.querySelector(".mag-cta__on"),_=d.querySelector(".mag-cta__val"),E=d.querySelector(".mag-cta__opts");f.addEventListener("change",()=>{_&&(_.disabled=!f.checked),E&&(E.disabled=!f.checked),f.checked&&(_||E)?.focus()}),_&&_.addEventListener("input",()=>{_.value.trim()&&!f.checked&&(f.checked=!0,E&&(E.disabled=!1))})}),s.querySelector('[data-x="preview"]')?.addEventListener("click",()=>lt(()=>st({...t,...$t(s)}))),s.querySelector('[data-x="save"]').addEventListener("click",async d=>{const f=d.currentTarget,_=s.querySelector("#mag-f-error"),E=s.querySelector("#mag-f-name").value.trim();if(!E){_.textContent="Please give your magnet a name.";return}const x=s.querySelector("#mag-f-domains").value.split(",").map(v=>v.trim()).filter(Boolean);let g="";if(s.querySelectorAll(".mag-cta").forEach(v=>{if(v.dataset.kind!=="value")return;const k=v.querySelector(".mag-cta__on").checked,I=v.querySelector(".mag-cta__val").value.trim();k&&!I&&(g=g||`Add a target for the ${wa[v.dataset.type].label} button, or uncheck it.`)}),g){_.textContent=g;return}const h={name:E,domains:x,...$t(s)};a&&(h.owner_guid=s.querySelector("#mag-f-owner").value),f.disabled=!0,_.textContent="";try{const v=e?`${ge()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}`:`${ge()}/m5t/v5/magnets`,I=await(await fetch(v,{method:e?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).json().catch(()=>({}));if(!I.ok)throw new Error(I.message||"Save failed");re(e?"Magnet updated":"Magnet created","success"),c(),await Ee()}catch(v){f.disabled=!1,_.textContent=v.message||"Something went wrong."}})}const sr=Object.freeze(Object.defineProperty({__proto__:null,init:ar,render:tr},Symbol.toStringTag,{value:"Module"}));let Dt=!1;const F={leads:[],magnetNames:{},filter:"ALL",canManage:!1},xa=["NEW","WORKING","QUALIFIED","UNQUALIFIED","CONVERTED","EXPORTED"],lr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U=t=>String(t??"").replace(/[&<>"']/g,e=>lr[e]),$e=(t,e="info")=>{try{p.publish(u.UI_TOAST,{message:t,type:e})}catch{}},nt=()=>S.getConfig?.().BASE_URL||"",dt=t=>[t.first_name,t.last_name].filter(Boolean).join(" ").trim()||t.email||"(no name)",cr=t=>(dt(t).split(/\s+/).slice(0,2).map(e=>e[0]||"").join("")||"?").toUpperCase();function pt(t){const e=t.created?.created_tz;if(!e)return"";try{return new Date(e).toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})}catch{return""}}function dr(){if(Dt)return;const t=document.createElement("style");t.id="m5t-leads-styles",t.textContent=`
    .page-shell .leads-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .leads-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .leads-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-filter button.active { background: var(--color-bg, #fff); color: var(--color-primary-700, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .leads-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); margin-left: auto; }

    .page-shell .leads-tablewrap { overflow-x: auto; }
    .page-shell .leads-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .leads-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .leads-table td { padding: 10px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .leads-row { cursor: pointer; }
    .page-shell .leads-row:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .leads-who { display: flex; align-items: center; gap: 10px; }
    .page-shell .leads-avatar { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.72rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .leads-name { font-weight: 600; }
    .page-shell .leads-sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .leads-muted { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .leads-status { font: inherit; font-size: 0.76rem; font-weight: 600; padding: 5px 8px; border-radius: 8px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; }
    .page-shell .leads-badge { display: inline-block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-badge[data-s="NEW"] { background: #DBEAFE; color: #1D4ED8; }
    .page-shell .leads-badge[data-s="WORKING"] { background: #FEF3C7; color: #92400E; }
    .page-shell .leads-badge[data-s="QUALIFIED"], .page-shell .leads-badge[data-s="CONVERTED"] { background: #DCFCE7; color: #047857; }

    .leads-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .leads-drawer-scrim.open { opacity: 1; }
    .leads-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(420px, 94vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .leads-drawer.open { transform: translateX(0); }
    .leads-drawer__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .leads-drawer__title { font-family: var(--font-display, inherit); font-size: 1.15rem; font-weight: 700; }
    .leads-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .leads-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .leads-drawer__body { padding: 20px; overflow-y: auto; }
    .leads-drawer__contact { display: flex; gap: 8px; margin: 4px 0 18px; flex-wrap: wrap; }
    .leads-drawer__cbtn { display: inline-flex; align-items: center; gap: 6px; text-decoration: none; font-size: 0.82rem; font-weight: 600; padding: 8px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); color: var(--color-primary-700, #00558D); }
    .leads-drawer__cbtn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .leads-drawer__field { padding: 9px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); display: flex; gap: 12px; }
    .leads-drawer__k { flex: 0 0 108px; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .leads-drawer__v { flex: 1; font-size: 0.88rem; word-break: break-word; }
    .leads-drawer__notes { white-space: pre-wrap; font-size: 0.84rem; line-height: 1.5; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F4F7FB); border-radius: 10px; padding: 12px 14px; margin-top: 14px; }
  `,document.head.appendChild(t),Dt=!0}function ut(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function pr(t){return`<select class="leads-status" data-id="${U(t.id)}" data-act="status" onclick="event.stopPropagation()">
    ${xa.map(e=>`<option value="${e}" ${t.status===e?"selected":""}>${e[0]}${e.slice(1).toLowerCase()}</option>`).join("")}
  </select>`}function ur(t){const e=F.magnetNames[t.magnet_guid]||t.lead_source||"—";return`
    <tr class="leads-row" data-id="${U(t.id)}">
      <td>
        <span class="leads-who">
          <span class="leads-avatar">${U(cr(t))}</span>
          <span><span class="leads-name">${U(dt(t))}</span>${t.company?`<div class="leads-sub">${U(t.company)}</div>`:""}</span>
        </span>
      </td>
      <td>${t.email?U(t.email):'<span class="leads-muted">—</span>'}${t.phone?`<div class="leads-sub">${U(t.phone)}</div>`:""}</td>
      <td>${t.product_interest?U(t.product_interest):'<span class="leads-muted">—</span>'}</td>
      <td><span class="leads-sub">${U(e)}</span></td>
      <td>${F.canManage?pr(t):`<span class="leads-badge" data-s="${U(t.status)}">${U(t.status)}</span>`}</td>
      <td class="leads-muted" style="white-space:nowrap">${U(pt(t))}</td>
    </tr>`}function Sa(){return F.filter==="ALL"?F.leads:F.leads.filter(t=>t.status===F.filter)}function mr(){return dr(),`
    <div class="page-shell" data-section="leads">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Leads</h1>
          <p class="page-description">People your magnets captured. Work them here or export to your CRM.</p>
        </div>
        <button class="btn btn-secondary" id="leads-export" type="button" style="display:none">
          <span class="material-symbols-outlined" aria-hidden="true">download</span>
          Export CSV
        </button>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="leads-body">
          ${ut("hourglass_empty","Loading leads…")}
        </div>
      </div>
    </div>`}async function gr(){document.getElementById("leads-export")?.addEventListener("click",vr),await hr()}async function hr(){const t=document.getElementById("leads-body");if(t){try{const[e,a]=await Promise.all([fetch(`${nt()}/m5t/v5/m5mLead`),fetch(`${nt()}/m5t/v5/magnets`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw new Error(n.message||"Failed to load");if(F.leads=(n.data||[]).filter(o=>!["DELETED","ARCHIVED"].includes(o.status)),a){const o=await a.json().catch(()=>({}));F.magnetNames={},(o.magnets||[]).forEach(r=>{F.magnetNames[r.guid]=r.name}),F.canManage=!!o.canManage}}catch{t.innerHTML=ut("error","Could not load your leads. Please try again.");return}mt()}}function mt(){const t=document.getElementById("leads-body"),e=document.getElementById("leads-export");if(!t)return;if(e&&(e.style.display=F.leads.length?"":"none"),!F.leads.length){t.innerHTML=ut("inbox","No leads captured yet. Publish a magnet and share it to start collecting.");return}const a=Sa();t.innerHTML=`
    <div class="leads-bar">
      <div class="leads-filter">
        ${["ALL",...xa].map(n=>`<button data-filter="${n}" class="${F.filter===n?"active":""}">${n==="ALL"?"All":n[0]+n.slice(1).toLowerCase()}</button>`).join("")}
      </div>
      <span class="leads-count">${a.length} of ${F.leads.length}</span>
    </div>
    <div class="leads-tablewrap">
      <table class="leads-table">
        <thead><tr><th>Name</th><th>Contact</th><th>Interest</th><th>Magnet</th><th>Status</th><th>Captured</th></tr></thead>
        <tbody id="leads-tbody">${a.map(ur).join("")||`<tr><td colspan="6"><div class="leads-muted" style="padding:14px 4px">No ${F.filter.toLowerCase()} leads.</div></td></tr>`}</tbody>
      </table>
    </div>`,t.querySelector(".leads-filter")?.addEventListener("click",n=>{const o=n.target.closest("[data-filter]");o&&(F.filter=o.dataset.filter,mt())}),t.querySelector("#leads-tbody")?.addEventListener("change",fr),t.querySelector("#leads-tbody")?.addEventListener("click",n=>{if(n.target.closest(".leads-status"))return;const o=n.target.closest(".leads-row");o&&_r(o.dataset.id)})}async function fr(t){const e=t.target.closest(".leads-status");if(!e)return;const a=e.dataset.id,n=F.leads.find(i=>String(i.id)===String(a)),o=e.value,r=n?.status;try{if(!(await(await fetch(`${nt()}/m5t/v5/m5mLead/${encodeURIComponent(a)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:o})})).json().catch(()=>({}))).ok)throw new Error;n&&(n.status=o),$e(`Marked ${o[0]}${o.slice(1).toLowerCase()}`,"success"),F.filter!=="ALL"&&mt()}catch{e.value=r||"NEW",$e("Could not update status","danger")}}function _r(t){const e=F.leads.find(i=>String(i.id)===String(t));if(!e)return;const a=F.magnetNames[e.magnet_guid]||e.lead_source||"—",n=(i,l)=>l?`<div class="leads-drawer__field"><span class="leads-drawer__k">${U(i)}</span><span class="leads-drawer__v">${U(l)}</span></div>`:"",o=document.createElement("div");o.className="leads-drawer-scrim",o.innerHTML=`
    <aside class="leads-drawer" role="dialog" aria-modal="true" aria-label="Lead detail">
      <div class="leads-drawer__head">
        <span class="leads-drawer__title">${U(dt(e))}</span>
        <button class="leads-drawer__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="leads-drawer__body">
        <div class="leads-drawer__contact">
          ${e.email?`<a class="leads-drawer__cbtn" href="mailto:${U(e.email)}"><span class="material-symbols-outlined" aria-hidden="true">mail</span>Email</a>`:""}
          ${e.phone?`<a class="leads-drawer__cbtn" href="tel:${U(String(e.phone).replace(/[^\d+]/g,""))}"><span class="material-symbols-outlined" aria-hidden="true">call</span>Call</a>`:""}
        </div>
        ${n("Status",e.status)}
        ${n("Email",e.email)}
        ${n("Phone",e.phone)}
        ${n("Mobile",e.mobile)}
        ${n("Company",e.company)}
        ${n("Title",e.title)}
        ${n("Interest",e.product_interest)}
        ${n("Location",[e.city,e.state].filter(Boolean).join(", "))}
        ${n("Source",e.lead_source)}
        ${n("Magnet",a)}
        ${n("Captured",pt(e))}
        ${e.description?`<div class="leads-drawer__notes">${U(e.description)}</div>`:""}
      </div>
    </aside>`,document.body.appendChild(o),requestAnimationFrame(()=>{o.classList.add("open"),o.querySelector(".leads-drawer").classList.add("open")});const r=()=>{o.classList.remove("open"),setTimeout(()=>o.remove(),220)};o.querySelector(".leads-drawer__close").addEventListener("click",r),o.addEventListener("click",i=>{i.target===o&&r()})}function vr(){const t=Sa();if(!t.length){$e("Nothing to export","info");return}const e=["first_name","last_name","email","phone","company","product_interest","lead_source","status"],a=s=>`"${String(s??"").replace(/"/g,'""')}"`,o=[[...e,"magnet","captured"].join(",")];for(const s of t)o.push([...e.map(c=>a(s[c])),a(F.magnetNames[s.magnet_guid]||s.lead_source||""),a(pt(s))].join(","));const r=new Blob([o.join(`
`)],{type:"text/csv"}),i=URL.createObjectURL(r),l=document.createElement("a");l.href=i,l.download=`leads-${F.filter.toLowerCase()}.csv`,document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(i),$e(`Exported ${t.length} lead${t.length===1?"":"s"}`,"success")}const br=Object.freeze(Object.defineProperty({__proto__:null,init:gr,render:mr},Symbol.toStringTag,{value:"Module"})),yr=()=>S.getConfig?.().BASE_URL||"",Ut=t=>t.toISOString().slice(0,10),Bt=t=>t==null?"—":"$"+Number(t).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),Ht=t=>Number(t||0).toLocaleString();let Gt=!1;function wr(){if(Gt)return;const t=document.createElement("style");t.id="m5t-adperf-styles",t.textContent=`
    .page-shell .adperf-chart { width: 100%; height: auto; display: block; }
    .page-shell text.ax { font-size: 11px; fill: var(--color-text-subtle, #6C7C9A); }
    .page-shell .adperf-legend { display: flex; gap: 16px; margin: 0 0 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adperf-legend i { display: inline-block; width: 11px; height: 11px; border-radius: 3px; margin-right: 5px; vertical-align: middle; }
    .page-shell .adperf-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
  `,document.head.appendChild(t),Gt=!0}const Ne=(t,e)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`,Ce=(t,e,a,n="—")=>`
  <div class="stat-card">
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${t}</span>
      <span class="stat-label">${e}</span>
    </div>
    <div class="stat-value" id="${a}">${n}</div>
  </div>`,Er=[{d:7,label:"7 Days"},{d:30,label:"30 Days"},{d:90,label:"90 Days"}];let De=30;function Aa(){return wr(),`
    <div class="page-shell" data-section="ad-performance">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Performance</h1>
          <p class="page-description">Your advertising spend alongside the leads your magnets captured.</p>
        </div>
        <div class="chart-controls" id="adperf-periods">
          ${Er.map(t=>`<button class="chart-period-btn${t.d===De?" active":""}" type="button" data-days="${t.d}">${t.label}</button>`).join("")}
        </div>
      </div>

      <div class="stats-grid">
        ${Ce("payments","Ad Spend","adperf-spend")}
        ${Ce("ads_click","Clicks","adperf-clicks")}
        ${Ce("person_add","Magnet Leads","adperf-leads")}
        ${Ce("request_quote","Cost / Lead","adperf-cpl")}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Spend vs Leads</h2>
          <span class="live-indicator" id="adperf-range"></span>
        </div>
        <div class="card-body" id="adperf-body">
          ${Ne("hourglass_empty","Loading ad performance…")}
        </div>
      </div>
      <p class="adperf-note">Spend and leads are shown on the same timeline for comparison — leads are not yet matched to individual ad clicks.</p>
    </div>`}async function Ta(){const t=document.getElementById("adperf-periods");t?.addEventListener("click",e=>{const a=e.target.closest("button[data-days]");a&&(De=Number(a.dataset.days)||30,t.querySelectorAll(".chart-period-btn").forEach(n=>n.classList.toggle("active",Number(n.dataset.days)===De)),zt())}),await zt()}async function zt(){const t=yr(),e=document.getElementById("adperf-body"),a=document.getElementById("adperf-range"),n=new Date,o=Ut(n),r=Ut(new Date(n.getTime()-(De-1)*864e5));a&&(a.textContent=`${r} → ${o}`);let i,l=[];try{const[c,d]=await Promise.all([fetch(`${t}/m5t/v5/coreAdMetrics/overlay?from=${r}&to=${o}`),fetch(`${t}/m5t/v5/coreAdAccount`)]);if(!c.ok)throw new Error(`HTTP ${c.status}`);i=await c.json(),l=((await d.json().catch(()=>({})))?.data||[]).filter(_=>_.status!=="DELETED")}catch(c){console.warn("[ad-performance] load failed:",c),e&&(e.innerHTML=Ne("error","Could not load ad performance. Please try again."));return}const s=i.totals||{};if(Ie("adperf-spend",Bt(s.spend)),Ie("adperf-clicks",Ht(s.clicks)),Ie("adperf-leads",Ht(s.magnet_leads)),Ie("adperf-cpl",Bt(s.cost_per_lead)),!l.length){e.innerHTML=Ne("link_off","No ad account connected yet. Your agency can connect Google Ads or Local Services Ads to see performance here.");return}if(!i.connected){e.innerHTML=Ne("cloud_sync","Account connected — no ad data for this range yet. Metrics appear here once they sync.");return}e.innerHTML=xr(i.rows||[])}function Ie(t,e){const a=document.getElementById(t);a&&(a.textContent=e)}function Vt(t){if(t<=0)return 1;const e=Math.pow(10,Math.floor(Math.log10(t))),a=t/e;return(a<=1?1:a<=2?2:a<=5?5:10)*e}function qt(t){return t=Math.round(t),t>=1e3?(t/1e3).toFixed(t%1e3===0?0:1)+"k":String(t)}function xr(t){const E=t.length||1,x=Vt(Math.max(1,...t.map(L=>L.spend||0))),g=Vt(Math.max(1,...t.map(L=>L.magnet_leads||0))),h=738/E,v=Math.min(24,h*.55),k=L=>56+h*(L+.5),I=L=>304-L/x*282,D=L=>304-L/g*282,Y=[0,.25,.5,.75,1].map(L=>{const B=304-L*282;return`<line x1="56" y1="${B.toFixed(1)}" x2="794" y2="${B.toFixed(1)}" stroke="#EAF0F7"/><text x="48" y="${(B+3.5).toFixed(1)}" text-anchor="end" class="ax">$${qt(x*L)}</text><text x="802" y="${(B+3.5).toFixed(1)}" text-anchor="start" class="ax">${qt(g*L)}</text>`}).join(""),q=t.map((L,B)=>{const Se=I(L.spend||0);return`<rect x="${(k(B)-v/2).toFixed(1)}" y="${Se.toFixed(1)}" width="${v.toFixed(1)}" height="${Math.max(0,304-Se).toFixed(1)}" rx="3" fill="#0072BA"><title>${L.date}: $${L.spend} spend</title></rect>`}).join(""),Z=t.map((L,B)=>`${k(B).toFixed(1)},${D(L.magnet_leads||0).toFixed(1)}`).join(" "),he=E>1?`<polyline points="${Z}" fill="none" stroke="#009473" stroke-width="2.5"/>`:"",te=t.map((L,B)=>`<circle cx="${k(B).toFixed(1)}" cy="${D(L.magnet_leads||0).toFixed(1)}" r="3.5" fill="#009473"><title>${L.date}: ${L.magnet_leads} leads</title></circle>`).join(""),Ve=Math.max(1,Math.ceil(E/6)),xe=t.map((L,B)=>B%Ve===0||B===E-1?`<text x="${k(B).toFixed(1)}" y="326" text-anchor="middle" class="ax">${L.date.slice(5)}</text>`:"").join("");return`
    <div class="adperf-legend">
      <span><i style="background:#0072BA"></i>Ad Spend</span>
      <span><i style="background:#009473"></i>Magnet Leads</span>
    </div>
    <svg class="adperf-chart" viewBox="0 0 840 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Ad spend versus magnet leads over time">
      ${Y}${q}${he}${te}${xe}
    </svg>`}const Sr={render:Aa,init:Ta},Ar=Object.freeze(Object.defineProperty({__proto__:null,default:Sr,init:Ta,render:Aa},Symbol.toStringTag,{value:"Module"})),jt="reseller_org",ka="managed_client";let Yt=!1;const Tr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$=t=>String(t??"").replace(/[&<>"']/g,e=>Tr[e]);function Ue(t,e="info"){try{p.publish(u.UI_TOAST,{message:t,type:e})}catch{}}function kr(){const t=S.getActiveOrg();if(t&&t.channel===jt)return{guid:t.guid,name:t.name};const e=S.getMemberships().find(a=>a.channel===jt);return e?{guid:e.orgGuid,name:e.name}:null}function Cr(t){const e=t?.created_tz;if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Ir(){if(Yt)return;const t=document.createElement("style");t.id="m5t-clients-styles",t.textContent=`
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
    .client-card__btns { display: flex; gap: 8px; flex-wrap: wrap; }
  `,document.head.appendChild(t),Yt=!0}const Nr=t=>String(t||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()||"?";function Le(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function Lr(t){const e=t.caption||t.guid,a=t.status||"ENABLED";return`
    <div class="client-card">
      <span class="client-card__avatar">${$(Nr(e))}</span>
      <span class="client-card__main">
        <div class="client-card__name" title="${$(e)}">${$(e)}</div>
        <div class="client-card__meta">Added ${$(Cr(t.created))||"—"}</div>
        <span class="client-card__status" data-status="${$(a)}">${$(a)}</span>
        <div class="client-card__btns">
          <button class="client-card__invite" type="button" data-action="invite" data-client-guid="${$(t.guid)}" data-client-name="${$(e)}">
            <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
          </button>
          ${S.getCapabilities().includes("connect_ad_accounts")?`
          <button class="client-card__invite" type="button" data-action="adaccounts" data-client-guid="${$(t.guid)}" data-client-name="${$(e)}">
            <span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Ad accounts
          </button>`:""}
        </div>
      </span>
    </div>`}function Ca(){return Ir(),`
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
          ${Le("hourglass_empty","Loading clients…")}
        </div>
      </div>
    </div>`}async function Ia(){const t=kr();document.getElementById("clients-add-btn")?.addEventListener("click",()=>Or(t)),await Na(t)}async function Na(t){const e=document.getElementById("clients-body"),a=document.getElementById("clients-count");if(e){if(!t?.guid){e.innerHTML=Le("info","Client provisioning is available to reseller / agency accounts."),a&&(a.textContent="");return}try{const n=S.getConfig?.().BASE_URL||"",o=await fetch(`${n}/m5t/v5/acctGroup`);if(!o.ok)throw new Error(`HTTP ${o.status}`);const r=await o.json(),l=(Array.isArray(r?.data)?r.data:[]).filter(s=>s.class===ka&&(!s.parent||s.parent===t.guid));if(!l.length){e.innerHTML=Le("group_off","No clients yet. Add your first client to start managing magnets on their behalf."),a&&(a.textContent="");return}e.innerHTML=`<div class="clients-grid">${l.map(Lr).join("")}</div>`,a&&(a.textContent=`${l.length} client${l.length===1?"":"s"}`),e.querySelectorAll(".client-card__invite").forEach(s=>{s.addEventListener("click",()=>{s.dataset.action==="adaccounts"?Rr(s.dataset.clientGuid,s.dataset.clientName):Mr(s.dataset.clientGuid,s.dataset.clientName)})})}catch(n){console.warn("[clients] load failed:",n),e.innerHTML=Le("error","Couldn’t load clients. Please try again."),a&&(a.textContent="")}}}function Or(t){if(!t?.guid){Ue("Only reseller / agency accounts can add clients.","error");return}const e=document.createElement("div");e.className="client-modal-scrim";const a=document.createElement("div");a.className="client-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${$(t.name||"your agency")}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`,document.body.appendChild(e),document.body.appendChild(a),requestAnimationFrame(()=>{e.classList.add("open"),a.classList.add("open")});const n=a.querySelector("#client-name-input"),o=a.querySelector("#client-modal-error"),r=a.querySelector('[data-act="create"]');n?.focus();const i=()=>{e.classList.remove("open"),a.classList.remove("open"),document.removeEventListener("keydown",l),setTimeout(()=>{e.remove(),a.remove()},200)},l=c=>{c.key==="Escape"&&i()};document.addEventListener("keydown",l),e.addEventListener("click",i),a.querySelector(".client-modal__close")?.addEventListener("click",i),a.querySelector('[data-act="cancel"]')?.addEventListener("click",i);const s=async()=>{const c=(n?.value||"").trim();if(o.textContent="",!c){o.textContent="Please enter a client name.",n?.focus();return}r.disabled=!0;const d=r.innerHTML;r.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…';try{const f=S.getConfig?.().BASE_URL||"",_=await fetch(`${f}/m5t/v5/acctGroup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({class:ka,caption:c,parent:t.guid})}),E=await _.json().catch(()=>({}));if(!_.ok||!E?.ok){const x=_.status===403?"You are not authorized to add a client here.":E?.message||E?.error||`Failed (HTTP ${_.status})`;throw new Error(x)}Ue(`Added client “${c}”`,"success"),i(),await Na(t)}catch(f){console.warn("[clients] create failed:",f),o.textContent=f.message||"Something went wrong. Please try again.",r.disabled=!1,r.innerHTML=d}};r?.addEventListener("click",s),n?.addEventListener("keydown",c=>{c.key==="Enter"&&s()})}const Wt=t=>String(t||"").replace(/[^0-9]/g,"");async function Rr(t,e){const a=S.getConfig?.().BASE_URL||"",n={};try{((await(await fetch(`${a}/m5t/v5/coreAdAccount?owner_guid=${encodeURIComponent(t)}`)).json().catch(()=>({})))?.data||[]).forEach(h=>{n[h.provider]=h})}catch{}const o=n.google_ads,r=n.google_lsa,i=document.createElement("div");i.className="client-modal-scrim";const l=document.createElement("div");l.className="client-modal",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Ad accounts — ${$(e)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Connect this client's advertising accounts so they can see ad performance next to their magnet leads. Enter account IDs only — no passwords.</p>
      <label class="client-modal__label" for="aa-gads">Google Ads Customer ID</label>
      <input class="client-modal__input" id="aa-gads" type="text" inputmode="numeric" placeholder="123-456-7890" autocomplete="off" value="${$(o?.external_customer_id||"")}" />
      <p class="client-modal__hint">Found top-right in the client's Google Ads account. Dashes optional.</p>
      <label class="client-modal__label" for="aa-lsa" style="margin-top:14px">Local Services (LSA) Account ID</label>
      <input class="client-modal__input" id="aa-lsa" type="text" inputmode="numeric" placeholder="Optional" autocomplete="off" value="${$(r?.external_customer_id||"")}" />
      <p class="client-modal__hint">Leave a field blank to disconnect that account.</p>
      <p class="client-modal__error" id="aa-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save">
          <span class="material-symbols-outlined" aria-hidden="true">save</span> Save
        </button>
      </div>
    </div>`,document.body.appendChild(i),document.body.appendChild(l),requestAnimationFrame(()=>{i.classList.add("open"),l.classList.add("open")});const s=l.querySelector("#aa-error"),c=l.querySelector('[data-act="save"]'),d=()=>{i.classList.remove("open"),l.classList.remove("open"),document.removeEventListener("keydown",f),setTimeout(()=>{i.remove(),l.remove()},200)},f=x=>{x.key==="Escape"&&d()};document.addEventListener("keydown",f),i.addEventListener("click",d),l.querySelector(".client-modal__close")?.addEventListener("click",d),l.querySelector('[data-act="cancel"]')?.addEventListener("click",d);const _=(x,g,h)=>{const v=`${a}/m5t/v5/coreAdAccount`;return g&&!h?fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner_guid:t,provider:x,external_customer_id:g})}):g&&h&&g!==h.external_customer_id?fetch(`${v}/${encodeURIComponent(h.guid)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({external_customer_id:g})}):!g&&h?fetch(`${v}/${encodeURIComponent(h.guid)}`,{method:"DELETE"}):null},E=async()=>{s.textContent="";const x=Wt(l.querySelector("#aa-gads").value),g=Wt(l.querySelector("#aa-lsa").value),h=[_("google_ads",x,o),_("google_lsa",g,r)].filter(Boolean);if(!h.length){d();return}c.disabled=!0;const v=c.innerHTML;c.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…';try{const k=await Promise.all(h);for(const I of k)if(!I.ok){const D=await I.json().catch(()=>({}));throw new Error(I.status===403?"You are not authorized to connect accounts for this client.":D?.error||D?.message||`Failed (HTTP ${I.status})`)}Ue("Ad accounts updated","success"),d()}catch(k){s.textContent=k.message||"Something went wrong. Please try again.",c.disabled=!1,c.innerHTML=v}};c?.addEventListener("click",E)}function Mr(t,e){if(!t)return;const a=document.createElement("div");a.className="client-modal-scrim";const n=document.createElement("div");n.className="client-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${$(e||"this client")}</strong> to a read-only login for their account.</p>
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
    </div>`,document.body.appendChild(a),document.body.appendChild(n),requestAnimationFrame(()=>{a.classList.add("open"),n.classList.add("open")});const o=()=>{a.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",r),setTimeout(()=>{a.remove(),n.remove()},200)},r=d=>{d.key==="Escape"&&o()};document.addEventListener("keydown",r),a.addEventListener("click",o),n.querySelector(".client-modal__close")?.addEventListener("click",o),n.querySelector('[data-act="cancel"]')?.addEventListener("click",o);const i=n.querySelector("#inv-email"),l=n.querySelector("#inv-error"),s=n.querySelector('[data-act="send"]');i?.focus();const c=d=>d.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(d.dataset.url),d.textContent="Copied!",setTimeout(()=>{d.textContent="Copy link"},1500)}catch{}});(async function(){const f=n.querySelector("#invite-pending");if(f)try{const _=S.getConfig?.().BASE_URL||"",x=await(await fetch(`${_}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invites`)).json().catch(()=>({})),g=x.ok&&Array.isArray(x.invites)?x.invites:[];if(!g.length){f.innerHTML="";return}f.innerHTML=`
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${g.map(h=>`
            <div class="invite-pending__row">
              <span class="invite-pending__email${h.expired?" expired":""}" title="${$(h.email)}">${$(h.email)}${h.expired?" · expired":""}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${$(h.inviteUrl)}">Copy link</button>
            </div>`).join("")}
        </div>`,f.querySelectorAll(".invite-pending__copy").forEach(c)}catch{f.innerHTML=""}})(),s?.addEventListener("click",async()=>{const d=(n.querySelector("#inv-email").value||"").trim(),f=(n.querySelector("#inv-first").value||"").trim(),_=(n.querySelector("#inv-last").value||"").trim();if(l.textContent="",!d||!f||!_){l.textContent="Email, first, and last name are required.";return}s.disabled=!0;const E=s.innerHTML;s.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const x=S.getConfig?.().BASE_URL||"",g=await fetch(`${x}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,first:f,last:_})}),h=await g.json().catch(()=>({}));if(!g.ok||!h.ok){const k=g.status===409?"A user with that email already exists.":g.status===403?"You are not authorized to invite for this client.":h.message||h.error||`Failed (HTTP ${g.status})`;throw new Error(k)}Ue(`Invite created for ${d}`,"success"),n.querySelector("#invite-body").innerHTML=`
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${h.emailQueued?`An invite email is on its way to <strong>${$(d)}</strong>.`:`Invite created for <strong>${$(d)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly — it lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${$(h.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const v=n.querySelector("#inv-link");n.querySelector("#inv-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(v.value),n.querySelector("#inv-copy").textContent="Copied!"}catch{v.select()}}),n.querySelector('[data-act="done"]')?.addEventListener("click",o)}catch(x){console.warn("[clients] invite failed:",x),l.textContent=x.message||"Something went wrong. Please try again.",s.disabled=!1,s.innerHTML=E}})}const Pr={render:Ca,init:Ia},Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Pr,init:Ia,render:Ca},Symbol.toStringTag,{value:"Module"})),be=Object.freeze({owner:{value:"owner",rank:30,label:"Owner"},admin:{value:"admin",rank:20,label:"Admin"},member:{value:"member",rank:10,label:"Member"},viewer:{value:"viewer",rank:0,label:"Viewer"}}),$r=Object.freeze({VIEW_DASHBOARD:"view_dashboard",VIEW_MAGNETS:"view_magnets",PROVISION_MAGNETS:"provision_magnets",MANAGE_MAGNETS:"manage_magnets",VIEW_CONVERSATIONS:"view_conversations",VIEW_STATS:"view_stats",VIEW_AD_METRICS:"view_ad_metrics",CONNECT_AD_ACCOUNTS:"connect_ad_accounts",CREATE_CLIENT_ACCOUNTS:"create_client_accounts",MANAGE_TEAM:"manage_team",VIEW_BILLING:"view_billing",MANAGE_BILLING:"manage_billing"}),y=$r,Dr=Object.freeze(Object.values(y)),pe=Object.freeze([y.VIEW_DASHBOARD,y.VIEW_MAGNETS,y.VIEW_CONVERSATIONS,y.VIEW_STATS,y.VIEW_AD_METRICS]);Object.freeze({reseller_org:{owner:Dr,admin:[y.VIEW_DASHBOARD,y.VIEW_MAGNETS,y.PROVISION_MAGNETS,y.MANAGE_MAGNETS,y.VIEW_CONVERSATIONS,y.VIEW_STATS,y.VIEW_AD_METRICS,y.CONNECT_AD_ACCOUNTS,y.CREATE_CLIENT_ACCOUNTS,y.MANAGE_TEAM,y.VIEW_BILLING],member:[y.VIEW_DASHBOARD,y.VIEW_MAGNETS,y.PROVISION_MAGNETS,y.MANAGE_MAGNETS,y.VIEW_CONVERSATIONS,y.VIEW_STATS,y.VIEW_AD_METRICS],viewer:pe},managed_client:{owner:[...pe,y.VIEW_BILLING],admin:[...pe,y.VIEW_BILLING],member:pe,viewer:pe},saas_org:{owner:[y.VIEW_DASHBOARD,y.VIEW_MAGNETS,y.PROVISION_MAGNETS,y.MANAGE_MAGNETS,y.VIEW_CONVERSATIONS,y.VIEW_STATS,y.VIEW_AD_METRICS,y.CONNECT_AD_ACCOUNTS,y.MANAGE_TEAM,y.VIEW_BILLING,y.MANAGE_BILLING],admin:[y.VIEW_DASHBOARD,y.VIEW_MAGNETS,y.PROVISION_MAGNETS,y.MANAGE_MAGNETS,y.VIEW_CONVERSATIONS,y.VIEW_STATS,y.VIEW_AD_METRICS,y.CONNECT_AD_ACCOUNTS,y.MANAGE_TEAM,y.VIEW_BILLING],member:[y.VIEW_DASHBOARD,y.VIEW_MAGNETS,y.PROVISION_MAGNETS,y.MANAGE_MAGNETS,y.VIEW_CONVERSATIONS,y.VIEW_STATS],viewer:pe}});function Ur(t,e){const a=be[t]?.rank??-1,n=be[e]?.rank??1/0;return a>=be.admin.rank&&a>=n}const Kt="managed_client";let Jt=!1;const Br={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},V=t=>String(t??"").replace(/[&<>"']/g,e=>Br[e]),Xt=(t,e="info")=>{try{p.publish(u.UI_TOAST,{message:t,type:e})}catch{}},Hr=t=>String(t||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()||"?";function Gr(){const t=S.getActiveOrg();let e=t&&t.channel!==Kt?t:null;if(!e){const n=S.getMemberships().find(o=>o.channel!==Kt);n&&(e={guid:n.orgGuid,channel:n.channel,memberRole:n.memberRole})}if(!e)return null;const a=S.getMemberships().find(n=>n.orgGuid===e.guid)?.name;return{...e,name:a}}function zr(t){return Object.values(be).filter(e=>Ur(t,e.value)).sort((e,a)=>a.rank-e.rank)}function Vr(){if(Jt)return;const t=document.createElement("style");t.id="m5t-team-styles",t.textContent=`
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
  `,document.head.appendChild(t),Jt=!0}function Be(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function qr(t){const e=t.member_role||"member";return`
    <div class="team-row">
      <span class="team-avatar">${V(Hr(t.name||t.email))}</span>
      <span class="team-main">
        <div class="team-name">${V(t.name||t.email)}${t.verified?"":' · <span style="color:var(--color-text-subtle,#6C7C9A);font-weight:400;">pending verification</span>'}</div>
        <div class="team-email" title="${V(t.email)}">${V(t.email)}</div>
      </span>
      <span class="team-role" data-role="${V(e)}">${V(be[e]?.label||e)}</span>
    </div>`}function La(){return Vr(),`
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
          ${Be("hourglass_empty","Loading team…")}
        </div>
      </div>
    </div>`}async function Oa(){const t=Gr(),e=document.getElementById("team-invite-btn");if(!t){e&&(e.style.display="none"),document.getElementById("team-body").innerHTML=Be("info","Team management is available for agency and workspace accounts.");return}e?.addEventListener("click",()=>jr(t)),await Ra(t)}async function Ra(t){const e=document.getElementById("team-body"),a=document.getElementById("team-count");if(e)try{const n=S.getConfig?.().BASE_URL||"",[o,r]=await Promise.all([fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/members`),fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/invites`)]),i=(await o.json().catch(()=>({}))).members||[],l=(await r.json().catch(()=>({}))).invites||[],s=l.length?`
      <div class="team-pending">
        <div class="team-pending__label">Pending invites</div>
        ${l.map(c=>`
          <div class="team-pending__row">
            <span class="team-pending__email" title="${V(c.email)}">${V(c.email)}${c.expired?" · expired":""}</span>
            <button class="team-modal__btn team-modal__btn--ghost team-copy" type="button" data-url="${V(c.inviteUrl)}">Copy link</button>
          </div>`).join("")}
      </div>`:"";e.innerHTML=s+(i.length?`<div class="team-list">${i.map(qr).join("")}</div>`:Be("group","No members yet.")),a&&(a.textContent=`${i.length} member${i.length===1?"":"s"}`),e.querySelectorAll(".team-copy").forEach(c=>c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c.dataset.url),c.textContent="Copied!",setTimeout(()=>{c.textContent="Copy link"},1500)}catch{}}))}catch(n){console.warn("[team] load failed:",n),e.innerHTML=Be("error","Couldn’t load the team. Please try again.")}}function jr(t){const e=zr(t.memberRole);if(!e.length){Xt("You don’t have permission to invite teammates.","error");return}const a=document.createElement("div");a.className="team-modal-scrim";const n=document.createElement("div");n.className="team-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="team-modal__head">
      <span class="team-modal__title">Invite a teammate</span>
      <button class="team-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="team-modal__body" id="team-invite-body">
      <p class="team-modal__sub">They'll get a link to set a password and join <strong>${V(t.name||"your workspace")}</strong>.</p>
      <label class="team-modal__label" for="tm-email">Email</label>
      <input class="team-modal__input" id="tm-email" type="email" placeholder="teammate@company.com" autocomplete="off" />
      <div class="team-modal__row">
        <div><label class="team-modal__label" for="tm-first">First name</label><input class="team-modal__input" id="tm-first" type="text" autocomplete="off" /></div>
        <div><label class="team-modal__label" for="tm-last">Last name</label><input class="team-modal__input" id="tm-last" type="text" autocomplete="off" /></div>
      </div>
      <label class="team-modal__label" for="tm-role">Role</label>
      <select class="team-modal__select" id="tm-role">
        ${e.map(s=>`<option value="${s.value}"${s.value==="member"?" selected":""}>${V(s.label)}</option>`).join("")}
      </select>
      <p class="team-modal__error" id="tm-error"></p>
      <div class="team-modal__actions">
        <button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="team-modal__btn team-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`,document.body.appendChild(a),document.body.appendChild(n),requestAnimationFrame(()=>{a.classList.add("open"),n.classList.add("open")});const o=()=>{a.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",r),setTimeout(()=>{a.remove(),n.remove()},200)},r=s=>{s.key==="Escape"&&o()};document.addEventListener("keydown",r),a.addEventListener("click",o),n.querySelector(".team-modal__close")?.addEventListener("click",o),n.querySelector('[data-act="cancel"]')?.addEventListener("click",o),n.querySelector("#tm-email")?.focus();const i=n.querySelector("#tm-error"),l=n.querySelector('[data-act="send"]');l?.addEventListener("click",async()=>{const s=(n.querySelector("#tm-email").value||"").trim(),c=(n.querySelector("#tm-first").value||"").trim(),d=(n.querySelector("#tm-last").value||"").trim(),f=n.querySelector("#tm-role").value;if(i.textContent="",!s||!c||!d){i.textContent="Email, first, and last name are required.";return}l.disabled=!0;const _=l.innerHTML;l.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const E=S.getConfig?.().BASE_URL||"",x=await fetch(`${E}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,first:c,last:d,member_role:f})}),g=await x.json().catch(()=>({}));if(!x.ok||!g.ok){const v=x.status===409?"A user with that email already exists.":x.status===403?g.message||"You are not authorized to invite this role.":g.message||g.error||`Failed (HTTP ${x.status})`;throw new Error(v)}Xt(`Invite created for ${s}`,"success"),n.querySelector("#team-invite-body").innerHTML=`
        <div class="team-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${g.emailQueued?`An invite email is on its way to <strong>${V(s)}</strong>.`:`Invite created for <strong>${V(s)}</strong>.`}</p>
          <p class="team-modal__sub">Or share this link directly:</p>
          <div class="team-modal__linkrow">
            <input class="team-modal__input" id="tm-link" type="text" readonly value="${V(g.inviteUrl)}" />
            <button class="team-modal__btn team-modal__btn--primary" type="button" id="tm-copy">Copy</button>
          </div>
          <div class="team-modal__actions"><button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const h=n.querySelector("#tm-link");n.querySelector("#tm-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(h.value),n.querySelector("#tm-copy").textContent="Copied!"}catch{h.select()}}),n.querySelector('[data-act="done"]')?.addEventListener("click",()=>{o(),Ra(t)})}catch(E){console.warn("[team] invite failed:",E),i.textContent=E.message||"Something went wrong. Please try again.",l.disabled=!1,l.innerHTML=_}})}const Yr={render:La,init:Oa},Wr=Object.freeze(Object.defineProperty({__proto__:null,default:Yr,init:Oa,render:La},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
