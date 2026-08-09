(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const Xo="modulepreload",Qo=function(e){return"/"+e},La={},W=function(t,a,n){let o=Promise.resolve();if(a&&a.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=r?.nonce||r?.getAttribute("nonce");o=l(a.map(c=>{if(c=Qo(c),c in La)return;La[c]=!0;const h=c.endsWith(".css"),y=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${y}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":Xo,h||(_.as="script"),_.crossOrigin="",_.href=c,i&&_.setAttribute("nonce",i),document.head.appendChild(_),h)return new Promise((m,x)=>{_.addEventListener("load",m),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})};var Zo=/([:*])(\w+)/g,es="([^/]+)",ts=/\*/g,as="?(?:.*)",ns=/\/\?/g,os="/?([^/]+|)",ss="(?:/^|^)",rs="";function Mn(e){return e===void 0&&(e="/"),va()?location.pathname+location.search+location.hash:e}function H(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function Tt(e){return typeof e=="string"}function is(e){return typeof e=="function"}function Ct(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function ls(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(a,n,o){return a===null&&(a={}),a[t[o]]=decodeURIComponent(n),a},null)}function It(e){var t=H(e).split(/\?(.*)?$/);return[H(t[0]),t.slice(1).join("")]}function fa(e){for(var t={},a=e.split("&"),n=0;n<a.length;n++){var o=a[n].split("=");if(o[0]!==""){var s=decodeURIComponent(o[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(o[1]||""))):t[s]=decodeURIComponent(o[1]||"")}}return t}function Fn(e,t){var a=It(H(e.currentLocationPath)),n=a[0],o=a[1],s=o===""?null:fa(o),r=[],i;if(Tt(t.path)){if(i=ss+H(t.path).replace(Zo,function(y,_,m){return r.push(m),es}).replace(ts,as).replace(ns,os)+"$",H(t.path)===""&&H(n)==="")return{url:n,queryString:o,hashString:Ct(e.to),route:t,data:null,params:s}}else i=t.path;var l=new RegExp(i,rs),c=n.match(l);if(c){var h=Tt(t.path)?ls(c,r):c.groups?c.groups:c.slice(1);return{url:H(n.replace(new RegExp("^"+e.instance.root),"")),queryString:o,hashString:Ct(e.to),route:t,data:h,params:s}}return!1}function Pn(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function ze(e,t){return typeof e[t]>"u"||e[t]===!0}function cs(e){if(!e)return{};var t=e.split(","),a={},n;return t.forEach(function(o){var s=o.split(":").map(function(r){return r.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":a.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=s[1];break;case"resolveOptionsHash":n||(n={}),n.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":a[s[0]]=s[1]==="true";break}}),n&&(a.resolveOptions=n),a}function va(){return typeof window<"u"}function ds(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(a){return a}).forEach(function(a){["before","after","already","leave"].forEach(function(n){a[n]&&(t[n]||(t[n]=[]),t[n].push(a[n]))})}),t}function Ee(e,t,a){var n=t||{},o=0;(function s(){if(!e[o]){a&&a(n);return}Array.isArray(e[o])?(e.splice.apply(e,[o,1].concat(e[o][0](n)?e[o][1]:e[o][2])),s()):e[o](n,function(r){typeof r>"u"||r===!0?(o+=1,s()):a&&a(n)})})()}Ee.if=function(e,t,a){return Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]),[e,t,a]};function Na(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=Mn(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function Vt(e,t){for(var a=0;a<e.instance.routes.length;a++){var n=e.instance.routes[a],o=Fn(e,n);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),e.resolveOptions.strategy==="ONE")){t();return}}t()}function ps(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function us(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var Oa=va(),ms=Pn();function gs(e,t){if(ze(e.navigateOptions,"updateBrowserURL")){var a=("/"+e.to).replace(/\/\//g,"/"),n=Oa&&e.resolveOptions&&e.resolveOptions.hash===!0;ms?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",n?"#"+a:a),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!n){var o=location.hash;location.hash="",location.hash=o}e.instance.__freezeListening=!1},1))):Oa&&(window.location.href=e.to)}t()}function Dn(e,t){var a=e.instance;if(!a.lastResolved()){t();return}Ee(a.lastResolved().map(function(n){return function(o,s){if(!n.route.hooks||!n.route.hooks.leave){s();return}var r=!1,i=e.instance.matchLocation(n.route.path,e.currentLocationPath,!1);if(n.route.path!=="*")r=!i;else{var l=e.matches?e.matches.find(function(c){return n.route.path===c.route.path}):!1;r=!l}if(ze(e.navigateOptions,"callHooks")&&r){Ee(n.route.hooks.leave.map(function(c){return function(h,y){return c(function(_){_===!1?e.instance.__markAsClean(e):y()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return t()})}function hs(e,t){e.match.route.hooks&&e.match.route.hooks.before&&ze(e.navigateOptions,"callHooks")?Ee(e.match.route.hooks.before.map(function(a){return function(o,s){return a(function(r){r===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return t()}])):t()}function fs(e,t){ze(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function vs(e,t){e.match.route.hooks&&e.match.route.hooks.after&&ze(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(a){return a(e.match)}),t()}function _s(e,t){var a=e.instance.lastResolved();if(a&&a[0]&&a[0].route===e.match.route&&a[0].url===e.match.url&&a[0].queryString===e.match.queryString){a.forEach(function(n){n.route.hooks&&n.route.hooks.already&&ze(e.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(o){return o(e.match)})}),t(!1);return}t()}function bs(e,t){var a=e.instance._notFoundRoute;if(a){e.notFoundHandled=!0;var n=It(e.currentLocationPath),o=n[0],s=n[1],r=Ct(e.to);a.path=H(o);var i={url:a.path,queryString:s,hashString:r,data:null,route:a,params:s!==""?fa(s):null};e.matches=[i],e.match=i}t()}function ys(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function ws(e,t){e.instance._setCurrent(null),t()}function Bn(e,t){ze(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var Un=[_s,hs,fs,vs],Ra=[Dn,bs,Ee.if(function(e){var t=e.notFoundHandled;return t},Un.concat([Bn]),[ys,ws])];function Qt(){return Qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Qt.apply(this,arguments)}function Ma(e,t){var a=0;function n(){if(a===e.matches.length){Bn(e,t);return}Ee(Un,Qt({},e,{match:e.matches[a]}),function(){a+=1,n()})}Dn(e,n)}function qt(e){e.instance.__markAsClean(e)}function Zt(){return Zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Zt.apply(this,arguments)}var Fa="[data-navigo]";function xs(e,t){var a=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Fa},n=this,o="/",s=null,r=[],i=!1,l,c=Pn(),h=va();e?o=H(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function y(u){return u.indexOf("#")>=0&&(a.hash===!0?u=u.split("#")[1]||"/":u=u.split("#")[0]),u}function _(u){return H(o+"/"+H(u))}function m(u,w,C,M){return u=Tt(u)?_(u):u,{name:M||H(String(u)),path:u,handler:w,hooks:ds(C)}}function x(u,w,C){var M=this;return typeof u=="object"&&!(u instanceof RegExp)?(Object.keys(u).forEach(function(S){if(typeof u[S]=="function")M.on(S,u[S]);else{var ie=u[S],Ce=ie.uses,z=ie.as,Ie=ie.hooks;r.push(m(S,Ce,[l,Ie],z))}}),this):(typeof u=="function"&&(C=w,w=u,u=o),r.push(m(u,w,[l,C])),this)}function g(u,w){if(n.__dirty){n.__waiting.push(function(){return n.resolve(u,w)});return}else n.__dirty=!0;u=u?H(o)+"/"+H(u):void 0;var C={instance:n,to:u,currentLocationPath:u,navigateOptions:{},resolveOptions:Zt({},a,w)};return Ee([Na,Vt,Ee.if(function(M){var S=M.matches;return S&&S.length>0},Ma,Ra)],C,qt),C.matches?C.matches:!1}function f(u,w){if(n.__dirty){n.__waiting.push(function(){return n.navigate(u,w)});return}else n.__dirty=!0;u=H(o)+"/"+H(u);var C={instance:n,to:u,navigateOptions:w||{},resolveOptions:w&&w.resolveOptions?w.resolveOptions:a,currentLocationPath:y(u)};Ee([ps,us,Vt,Ee.if(function(M){var S=M.matches;return S&&S.length>0},Ma,Ra),gs,qt],C,qt)}function v(u,w,C){var M=Se(u,w);return M!==null?(f(M.replace(new RegExp("^/?"+o),""),C),!0):!1}function I(u){return this.routes=r=r.filter(function(w){return Tt(u)?H(w.path)!==H(u):is(u)?u!==w.handler:String(w.path)!==String(u)}),this}function O(){c&&(this.__popstateListener=function(){n.__freezeListening||g()},window.addEventListener("popstate",this.__popstateListener))}function F(){this.routes=r=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=i=!0}function J(u,w){return n._notFoundRoute=m("*",u,[l,w],"__NOT_FOUND__"),this}function Y(){if(h)return ae().forEach(function(u){if(u.getAttribute("data-navigo")==="false"||u.getAttribute("target")==="_blank"){u.hasListenerAttached&&u.removeEventListener("click",u.navigoHandler);return}u.hasListenerAttached||(u.hasListenerAttached=!0,u.navigoHandler=function(w){if((w.ctrlKey||w.metaKey)&&w.target.tagName.toLowerCase()==="a")return!1;var C=u.getAttribute("href");if(typeof C>"u"||C===null)return!1;if(C.match(/^(http|https)/)&&typeof URL<"u")try{var M=new URL(C);C=M.pathname+M.search}catch{}var S=cs(u.getAttribute("data-navigo-options"));i||(w.preventDefault(),w.stopPropagation(),n.navigate(H(C),S))},u.addEventListener("click",u.navigoHandler))}),n}function ae(){return h?[].slice.call(document.querySelectorAll(a.linksSelector||Fa)):[]}function ve(u){return"/"+o+"/"+H(u)}function me(u){return l=u,this}function _e(){return s}function Se(u,w,C){var M=r.find(function(Ce){return Ce.name===u}),S=null;if(M){if(S=M.path,w)for(var ie in w)S=S.replace(":"+ie,w[ie]);S=S.match(/^\//)?S:"/"+S}return S&&C&&!C.includeRoot&&(S=S.replace(new RegExp("^/"+o),"")),S}function k(u){return u.getAttribute("href")}function N(u){var w=It(H(u)),C=w[0],M=w[1],S=M===""?null:fa(M),ie=Ct(u),Ce=m(C,function(){},[l],C);return{url:C,queryString:M,hashString:ie,route:Ce,data:null,params:S}}function be(){return N(H(Mn(o)).replace(new RegExp("^"+o),""))}function ut(u){var w={instance:n,currentLocationPath:u,to:u,resolveOptions:a};return Vt(w,function(){}),w.matches?w.matches:!1}function mt(u,w,C){typeof w<"u"&&(typeof C>"u"||C)&&(w=_(w));var M={instance:n,to:w,currentLocationPath:w};Na(M,function(){}),typeof u=="string"&&(u=typeof C>"u"||C?_(u):u);var S=Fn(M,{name:String(u),path:u,handler:function(){},hooks:{}});return S||!1}function qe(u,w,C){return typeof w=="string"&&(w=gt(w)),w?(w.hooks[u]||(w.hooks[u]=[]),w.hooks[u].push(C),function(){w.hooks[u]=w.hooks[u].filter(function(M){return M!==C})}):(console.warn("Route doesn't exists: "+w),function(){})}function gt(u){return typeof u=="string"?r.find(function(w){return w.name===_(u)}):r.find(function(w){return w.handler===u})}function T(u){u.instance.__dirty=!1,u.instance.__waiting.length>0&&u.instance.__waiting.shift()()}this.root=o,this.routes=r,this.destroyed=i,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=T,this.on=x,this.off=I,this.resolve=g,this.navigate=f,this.navigateByName=v,this.destroy=F,this.notFound=J,this.updatePageLinks=Y,this.link=ve,this.hooks=me,this.extractGETParameters=function(u){return It(y(u))},this.lastResolved=_e,this.generate=Se,this.getLinkPath=k,this.match=ut,this.matchLocation=mt,this.getCurrentLocation=be,this.addBeforeHook=qe.bind(this,"before"),this.addAfterHook=qe.bind(this,"after"),this.addAlreadyHook=qe.bind(this,"already"),this.addLeaveHook=qe.bind(this,"leave"),this.getRoute=gt,this._pathToMatchObject=N,this._clean=H,this._checkForAHash=y,this._setCurrent=function(u){return s=n.current=u},O.call(this),Y.call(this)}var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function As(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var st={exports:{}},Ss=st.exports,Pa;function ks(){return Pa||(Pa=1,(function(e,t){(function(a,n){var o={};a.PubSub?(o=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=o,n(o)),e!==void 0&&e.exports&&(t=e.exports=o),t.PubSub=o,e.exports=t=o})(typeof window=="object"&&window||Ss||Es,function(a){var n={},o=-1,s="*";function r(g){var f;for(f in g)if(Object.prototype.hasOwnProperty.call(g,f))return!0;return!1}function i(g){return function(){throw g}}function l(g,f,v){try{g(f,v)}catch(I){setTimeout(i(I),0)}}function c(g,f,v){g(f,v)}function h(g,f,v,I){var O=n[f],F=I?c:l,J;if(Object.prototype.hasOwnProperty.call(n,f))for(J in O)Object.prototype.hasOwnProperty.call(O,J)&&F(O[J],g,v)}function y(g,f,v){return function(){var O=String(g),F=O.lastIndexOf(".");for(h(g,g,f,v);F!==-1;)O=O.substr(0,F),F=O.lastIndexOf("."),h(g,O,f,v);h(g,s,f,v)}}function _(g){var f=String(g),v=!!(Object.prototype.hasOwnProperty.call(n,f)&&r(n[f]));return v}function m(g){for(var f=String(g),v=_(f)||_(s),I=f.lastIndexOf(".");!v&&I!==-1;)f=f.substr(0,I),I=f.lastIndexOf("."),v=_(f);return v}function x(g,f,v,I){g=typeof g=="symbol"?g.toString():g;var O=y(g,f,I),F=m(g);return F?(v===!0?O():setTimeout(O,0),!0):!1}a.publish=function(g,f){return x(g,f,!1,a.immediateExceptions)},a.publishSync=function(g,f){return x(g,f,!0,a.immediateExceptions)},a.subscribe=function(g,f){if(typeof f!="function")return!1;g=typeof g=="symbol"?g.toString():g,Object.prototype.hasOwnProperty.call(n,g)||(n[g]={});var v="uid_"+String(++o);return n[g][v]=f,v},a.subscribeAll=function(g){return a.subscribe(s,g)},a.subscribeOnce=function(g,f){var v=a.subscribe(g,function(){a.unsubscribe(v),f.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){n={}},a.clearSubscriptions=function(f){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(f)===0&&delete n[v]},a.countSubscriptions=function(f){var v,I,O=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(f)===0){for(I in n[v])O++;break}return O},a.getSubscriptions=function(f){var v,I=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(f)===0&&I.push(v);return I},a.unsubscribe=function(g){var f=function(ve){var me;for(me in n)if(Object.prototype.hasOwnProperty.call(n,me)&&me.indexOf(ve)===0)return!0;return!1},v=typeof g=="string"&&(Object.prototype.hasOwnProperty.call(n,g)||f(g)),I=!v&&typeof g=="string",O=typeof g=="function",F=!1,J,Y,ae;if(v){a.clearSubscriptions(g);return}for(J in n)if(Object.prototype.hasOwnProperty.call(n,J)){if(Y=n[J],I&&Y[g]){delete Y[g],F=g;break}if(O)for(ae in Y)Object.prototype.hasOwnProperty.call(Y,ae)&&Y[ae]===g&&(delete Y[ae],F=!0)}return F}})})(st,st.exports)),st.exports}var Ts=ks();const d=As(Ts),p=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV.GO",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN.GO",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP.GO",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT.GO",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT.GO",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH.GO",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",AUTH_SCOPE_LOADED:"AUTH.SCOPE.LOADED",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",M5T_SIDE_NAV:"M5T_SIDE_NAV",M5T_SIDE_NAV_TAP:"M5T_SIDE_NAV.TAP",M5T_SIDE_NAV_COLLAPSE:"M5T_SIDE_NAV.COLLAPSE",M5T_SIDE_NAV_LOGO_TAP:"M5T_SIDE_NAV.LOGO_TAP",M5T_SIDE_NAV_ORG_SWITCH:"M5T_SIDE_NAV.ORG_SWITCH",M5T_SIDE_NAV_FOOTER_ACTION:"M5T_SIDE_NAV.FOOTER_ACTION",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),jt={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://machfivemagnet-saas.onrender.com"};var Wt={};const G=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel",FF_API_RATELIMIT_SIGNIN_ENFORCE:!1,FF_API_RATELIMIT_SIGNIN_IP_LIMIT:20,FF_API_RATELIMIT_SIGNIN_EMAIL_LIMIT:10,FF_API_RATELIMIT_FORGOT_ENFORCE:!1,FF_API_RATELIMIT_FORGOT_IP_LIMIT:15,FF_API_RATELIMIT_FORGOT_EMAIL_LIMIT:5,FF_API_RATELIMIT_CAPTURE_ENFORCE:!1,FF_API_RATELIMIT_CAPTURE_LIMIT:30,FF_API_RATELIMIT_EVENT_ENFORCE:!1,FF_API_RATELIMIT_EVENT_LIMIT:600,FF_API_RATELIMIT_AUTHENTICATED_ENFORCE:!1,FF_API_RATELIMIT_AUTHENTICATED_LIMIT:600,FF_API_MAGNET_REQUIRE_ORIGIN_ENFORCE:!1,FF_API_RATELIMIT_GLOBAL_ENFORCE:!1,FF_API_RATELIMIT_GLOBAL_LIMIT:2e3});function Gn(e,t=null){if(e in G)return G[e];if(typeof process<"u"&&Wt&&Wt[e]){const a=Wt[e];return a==="true"?!0:a==="false"?!1:isNaN(a)?a:Number(a)}if(typeof import.meta<"u"&&jt&&jt[e]){const a=jt[e];return a==="true"?!0:a==="false"?!1:isNaN(a)?a:Number(a)}return t}function Cs(e){return Gn(e,!1)===!0}function Is(){return{...G}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:G,getFlag:Gn,isEnabled:Cs,getAllFlags:Is});const Da={success:{border:"var(--color-success, #009473)",bg:"var(--color-success-soft, rgba(0,148,115,0.10))",icon:"check_circle"},danger:{border:"var(--color-danger, #DD4124)",bg:"var(--color-danger-soft, rgba(221,65,36,0.09))",icon:"error"},error:{border:"var(--color-danger, #DD4124)",bg:"var(--color-danger-soft, rgba(221,65,36,0.09))",icon:"error"},warning:{border:"var(--color-warning-ink, #7a5e00)",bg:"var(--color-warning-tint, rgba(245,223,77,0.16))",icon:"warning"},info:{border:"var(--color-info, #7BC4C4)",bg:"var(--color-info-soft, rgba(123,196,196,0.12))",icon:"info"}},$s=4500,ea=220;let ke=null,Ba=!1;function Ls(){if(Ba)return;const e=document.createElement("style");e.id="m5t-toast-styles",e.textContent=`
    .m5t-toast-stack { position: fixed; top: 16px; right: 16px; z-index: 6000; display: flex; flex-direction: column; gap: 10px; pointer-events: none; max-width: min(380px, calc(100vw - 32px)); }
    .m5t-toast { pointer-events: auto; display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); border: 1px solid; box-shadow: 0 8px 24px rgba(11,18,32,0.16); font-size: 0.86rem; line-height: 1.4; color: var(--color-text, #0B1220); opacity: 0; transform: translateX(16px); transition: opacity ${ea}ms ease, transform ${ea}ms ease; }
    .m5t-toast.is-in { opacity: 1; transform: none; }
    .m5t-toast.is-out { opacity: 0; transform: translateX(16px); }
    .m5t-toast .material-symbols-outlined { font-size: 19px; flex: 0 0 auto; margin-top: 1px; }
    .m5t-toast__msg { flex: 1 1 auto; min-width: 0; word-break: break-word; }
    .m5t-toast__close { flex: 0 0 auto; appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); padding: 2px; line-height: 1; font-size: 17px; border-radius: 6px; }
    .m5t-toast__close:hover { color: var(--color-text, #0B1220); background: var(--color-surface-2, rgba(11,18,32,0.06)); }
    @media (prefers-reduced-motion: reduce) { .m5t-toast { transition: none; } }
  `,document.head.appendChild(e),Ba=!0}function Ns(){return ke&&document.body.contains(ke)||(ke=document.createElement("div"),ke.className="m5t-toast-stack",ke.setAttribute("role","status"),ke.setAttribute("aria-live","polite"),document.body.appendChild(ke)),ke}function Os(e){const t=e&&e.message;if(!t)return;Ls();const a=Da[e.type]||Da.info,n=document.createElement("div");n.className="m5t-toast",n.style.borderColor=a.border,n.style.background=a.bg,n.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true" style="color:${a.border}">${a.icon}</span><span class="m5t-toast__msg"></span><button type="button" class="m5t-toast__close" aria-label="Dismiss"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>`,n.querySelector(".m5t-toast__msg").textContent=String(t),Ns().appendChild(n),requestAnimationFrame(()=>n.classList.add("is-in"));let s=!1;const r=()=>{s||(s=!0,clearTimeout(i),n.classList.remove("is-in"),n.classList.add("is-out"),setTimeout(()=>n.remove(),ea))},i=setTimeout(r,$s);n.querySelector(".m5t-toast__close").addEventListener("click",r)}function Rs(){const e=t=>a=>{const n=a.detail?.pubsubTopic;n&&d.publish(n,a.detail)};document.addEventListener("nav-select",e()),document.addEventListener("logo-click",e()),document.addEventListener("nav-hover",e()),document.addEventListener("nav-double-tap",e()),document.addEventListener("nav-long-tap",e()),document.addEventListener("message-sent",e())}function Ms(){console.log("[AppEvents] Initializing event listeners..."),d.subscribe(p.APP_READY,(a,n)=>{console.log("[AppEvents] APP_READY:",n)}),d.subscribe(p.APP_ERROR,(a,n)=>{console.error("[AppEvents] APP_ERROR:",n)}),d.subscribe(p.APP_SIGNOUT,(a,n)=>{console.log("[AppEvents] APP_SIGNOUT:",n)}),d.subscribe(p.ROUTE_NAV_BEFORE,(a,n)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",n),d.publish(p.UI_LOADING_START)}),d.subscribe(p.ROUTE_NAV_AFTER,(a,n)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",n),d.publish(p.UI_LOADING_END)}),d.subscribe(p.ROUTE_NAV_ERROR,(a,n)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",n),d.publish(p.APP_ERROR,{message:"Navigation error",details:n})}),d.subscribe(p.AUTH_SIGNIN_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",n)}),d.subscribe(p.AUTH_SIGNIN_FAIL,(a,n)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",n),d.publish(p.UI_TOAST,{message:n.message||"Sign in failed",type:"danger"})}),d.subscribe(p.AUTH_SIGNUP_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",n),d.publish(p.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),d.publish(p.AUTH_VERIFY_LINK)}),d.subscribe(p.AUTH_VERIFY_LINK,(a,n)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),d.subscribe(p.AUTH_SIGNUP_FAIL,(a,n)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",n),d.publish(p.UI_TOAST,{message:n.message||"Sign up failed",type:"danger"})}),d.subscribe(p.AUTH_SIGNOUT_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",n),d.publish(p.UI_TOAST,{message:"Signed out successfully",type:"info"})}),d.subscribe(p.AUTH_SIGNUP,(a,n)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),d.subscribe(p.AUTH_FORGOT,(a,n)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),d.subscribe(p.AUTH_FORGOT_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",n),d.publish(p.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),d.subscribe(p.AUTH_RESETHASH_NAV,(a,n)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),d.subscribe(p.AUTH_RESETHASH_SUCCESS,(a,n)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",n),d.publish(p.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),d.subscribe(p.AUTH_TOKEN_EXPIRED,(a,n)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",n),d.publish(p.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),d.subscribe(p.I18N_SET_LANG,(a,n)=>{console.log("[AppEvents] I18N_SET_LANG:",n);const{langCode:o}=n;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),d.publish(p.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(s){console.error("[AppEvents] Error changing language:",s),d.publish(p.UI_TOAST,{message:`Failed to change language: ${s.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),d.subscribe("CONVERSATION.PROMPT",(a,n)=>{const o=a.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display prompt in canvas:",n.message),Yt(n.message,"user",n.timestamp),d.publish(p.CANVAS_DO_SCROLL);break;case"AGENT":console.log("[AppEvents] Agent prompt (no implementation):",n.message);break;case"AGENT_CANVAS":console.log("[AppEvents] Display message in canvas:",n.message),Yt(n.message,"user",n.timestamp),d.publish(p.CANVAS_DO_SCROLL);break;case"STAGE":console.log("[AppEvents] Stage prompt for editing:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${o}`);break}}),d.subscribe("CONVERSATION.RESPONSE",(a,n)=>{const o=a.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display response in canvas:",n.message),Yt(n.message,"assistant",n.timestamp,n.streaming);break;case"WORKFLOW":console.log("[AppEvents] Send response to workflow engine:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${o}`);break}}),d.subscribe(p.UI_LOADING_START,(a,n)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),d.subscribe(p.UI_LOADING_END,(a,n)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),d.subscribe(p.UI_TOAST,(a,n)=>{Os(n)}),d.subscribe(p.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const a="0.1",n=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${a} 8/8/2026, 7:05:14 PM|© ${n} Mach Five Tech`,"night")}),Rs(),d.subscribe("M5T_PRIMARY_NAV",(a,n)=>{const o=a.split(".")[1];switch(o){case"TAP":e(n);break;case"LOGO_TAP":t();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function e(a){const{token:n,level:o,primaryToken:s}=a;switch(n){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),d.publish(p.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${n}`,{primaryToken:s});break}}function t(a){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 8/8/2026, 7:05:14 PM|© ${o} Mach Five Tech`,"night",5e3)}d.subscribe(p.AUTH_SIGNOUT,(a,n)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(G.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}function Yt(e,t="user",a=null,n=!1){const o=document.getElementById("chat-messages");if(!o){console.warn("[AppEvents] chat-messages element not found - may not be on home route");return}if(a||(a=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})),n&&t==="assistant"){const r=o.firstElementChild;if(r&&r.tagName.toLowerCase()==="m5t-chat-response"){r.setAttribute("message",e),console.log(`[AppEvents] Updated streaming ${t} bubble (${e.length} chars)`);return}}let s;t==="user"||t==="prompt"?s=document.createElement("m5t-chat-prompt"):s=document.createElement("m5t-chat-response"),s.setAttribute("message",e),s.setAttribute("timestamp",a),o.prepend(s),console.log(`[AppEvents] Added ${t} bubble to canvas (${e.length} chars)`)}function Hn(e=window.location.search){const t=new URLSearchParams(e||"");return!!(t.get("uid")&&t.get("token"))}const Fs=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function Ps(e){return Fs[e]||null}function Ds(e){return e>=50}const rt=Object.freeze({owner:{value:"owner",rank:30,label:"Owner"},admin:{value:"admin",rank:20,label:"Admin"},member:{value:"member",rank:10,label:"Member"},viewer:{value:"viewer",rank:0,label:"Viewer"}}),Bs=Object.freeze({VIEW_DASHBOARD:"view_dashboard",VIEW_MAGNETS:"view_magnets",PROVISION_MAGNETS:"provision_magnets",MANAGE_MAGNETS:"manage_magnets",VIEW_CONVERSATIONS:"view_conversations",VIEW_STATS:"view_stats",VIEW_AD_METRICS:"view_ad_metrics",CONNECT_AD_ACCOUNTS:"connect_ad_accounts",CREATE_CLIENT_ACCOUNTS:"create_client_accounts",MANAGE_TEAM:"manage_team",VIEW_BILLING:"view_billing",MANAGE_BILLING:"manage_billing"}),$=Bs,zn=Object.freeze(Object.values($)),Me=Object.freeze([$.VIEW_DASHBOARD,$.VIEW_MAGNETS,$.VIEW_CONVERSATIONS,$.VIEW_STATS,$.VIEW_AD_METRICS]),Us=Object.freeze({reseller_org:{owner:zn,admin:[$.VIEW_DASHBOARD,$.VIEW_MAGNETS,$.PROVISION_MAGNETS,$.MANAGE_MAGNETS,$.VIEW_CONVERSATIONS,$.VIEW_STATS,$.VIEW_AD_METRICS,$.CONNECT_AD_ACCOUNTS,$.CREATE_CLIENT_ACCOUNTS,$.MANAGE_TEAM,$.VIEW_BILLING],member:[$.VIEW_DASHBOARD,$.VIEW_MAGNETS,$.PROVISION_MAGNETS,$.MANAGE_MAGNETS,$.VIEW_CONVERSATIONS,$.VIEW_STATS,$.VIEW_AD_METRICS],viewer:Me},managed_client:{owner:[...Me,$.VIEW_BILLING],admin:[...Me,$.VIEW_BILLING],member:Me,viewer:Me},saas_org:{owner:[$.VIEW_DASHBOARD,$.VIEW_MAGNETS,$.PROVISION_MAGNETS,$.MANAGE_MAGNETS,$.VIEW_CONVERSATIONS,$.VIEW_STATS,$.VIEW_AD_METRICS,$.CONNECT_AD_ACCOUNTS,$.MANAGE_TEAM,$.VIEW_BILLING,$.MANAGE_BILLING],admin:[$.VIEW_DASHBOARD,$.VIEW_MAGNETS,$.PROVISION_MAGNETS,$.MANAGE_MAGNETS,$.VIEW_CONVERSATIONS,$.VIEW_STATS,$.VIEW_AD_METRICS,$.CONNECT_AD_ACCOUNTS,$.MANAGE_TEAM,$.VIEW_BILLING],member:[$.VIEW_DASHBOARD,$.VIEW_MAGNETS,$.PROVISION_MAGNETS,$.MANAGE_MAGNETS,$.VIEW_CONVERSATIONS,$.VIEW_STATS],viewer:Me}});function Gs(e){const t=Ps(e);return!!t&&Ds(t.value)}function Hs({entityClass:e,orgChannel:t,memberRole:a}={}){if(Gs(e))return e==="admin_readonly_role"?[...Me,$.VIEW_BILLING]:[...zn];const n=Us[t],o=n&&n[a];return o?[...o]:[]}function zs(e,t){const a=rt[e]?.rank??-1,n=rt[t]?.rank??1/0;return a>=rt.admin.rank&&a>=n}const _a=[{value:"name",label:"Full name (splits into first + last automatically)"},{value:"first_name",label:"First name"},{value:"last_name",label:"Last name"},{value:"email",label:"Email"},{value:"phone",label:"Phone"},{value:"mobile",label:"Mobile phone"},{value:"company",label:"Company"},{value:"title",label:"Job title"},{value:"city",label:"City"},{value:"state",label:"State / province"},{value:"product_interest",label:"Product interest"},{value:"lead_source",label:"Lead source"},{value:"rating",label:"Rating (Hot / Warm / Cold)"},{value:"description",label:"Notes / description"}];new Set(_a.map(e=>e.value));const ba=[{value:"single_select",label:"Multiple choice"},{value:"multi_select",label:"Select all"},{value:"scheduler",label:"Scheduler"},{value:"text",label:"Short text"},{value:"email",label:"Email"},{value:"phone",label:"Phone"},{value:"message",label:"Message"}];new Set(ba.map(e=>e.value));class A{static CONFIG={BASE_URL:"https://machfivemagnet-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink",SCOPE:"sse_session_scope",ACTIVE_ORG:"sse_active_org"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",ME:"/m5t/v5/acctEntity/me",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#o=null;static#a=null;static#n=!1;static#s=null;static#i=null;static async init({BASE_URL:t,navigateFunction:a,customConfig:n={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(a&&typeof a=="function")this.#i=a;else throw new Error("navigateFunction is required and must be a function");return t&&(this.CONFIG.BASE_URL=t),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#m(),this.#p(),this.#l(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#p(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((t=null)=>{if(t){if(Hn()&&(t==="splash"||t==="signin")){console.log("[AuthController] Ignoring mvvLegit redirect to",t,"— keeping invitee on accept-invite");return}console.log("[AuthController] mvvLegit navigation to:",t),this.#r(t)}}).setOnState((t=null)=>{if(t)switch(console.log("[AuthController] Auth state changed:",t),t){case"AUTH":case 4:this.#_();break;case"UNAUTH":case 1:this.#b();break;case"UNVERF":case 2:this.#y();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#r(t){if(!this.#i){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",t);const a=t.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",a),this.#i(a)}static#l(){if(window.__m5tActiveOrgFetch)return;const t=window.fetch.bind(window);window.fetch=(a,n)=>{try{const o=typeof a=="string"?a:a?.url||"",s=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);if(s&&o.startsWith(this.CONFIG.BASE_URL)){const r=new Headers(n&&n.headers||(a instanceof Request?a.headers:void 0));r.set("X-Active-Org",s),n={...n||{},headers:r}}}catch{}return t(a,n)},window.__m5tActiveOrgFetch=!0,console.log("[AuthController] Active-org fetch header installed")}static#m(){try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);t&&(this.#o=JSON.parse(t),console.log("[AuthController] Entity state loaded:",this.#o?.email))}catch(t){console.error("[AuthController] Error loading entity state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#o=null}this.#s=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);t&&(this.#a=JSON.parse(t),console.log("[AuthController] Scope state loaded (cached):",this.#a?.uiMode))}catch(t){console.error("[AuthController] Error loading scope state:",t),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#a=null}}static#c(t){try{this.#o=t,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(t)),console.log("[AuthController] Entity state saved")}catch(a){console.error("[AuthController] Error saving entity state:",a)}}static#d(){this.#o=null,this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#u)}catch{}}static getEntity(){return this.#o}static#v(t){try{this.#a=t,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(t))}catch(a){console.error("[AuthController] Error saving scope state:",a)}}static async fetchScope(){if(typeof mvvLegit>"u"||!this.isAuthenticated())return console.log("[AuthController] fetchScope skipped — not authenticated"),this.#a;if(this.#n)return this.#a;this.#n=!0;try{const t=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),a=t?`?org=${encodeURIComponent(t)}`:"",n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${a}`);if(n.status===401||n.status===403)return console.warn("[AuthController] /me unauthorized — signing out"),this.doSignout(!0),null;if(!n.ok)return console.warn(`[AuthController] /me failed (${n.status}) — using cached scope`),this.#a;const o=await n.json();if(!o?.ok)return console.warn("[AuthController] /me returned not-ok — using cached scope"),this.#a;try{const s=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);s&&o.activeOrg?.guid!==s&&(console.warn(`[AuthController] Stored active org not honored by /me${o.activeOrgError?" (activeOrgError)":""} — clearing`),localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG))}catch{}return this.#v(o),d.publish(p.AUTH_SCOPE_LOADED,o),console.log(`[AuthController] Scope loaded: ${o.uiMode} (${o.memberships?.length||0} org(s), ${o.managedClients?.length||0} client(s))`),o}catch(t){return console.error("[AuthController] fetchScope error:",t),this.#a}finally{this.#n=!1}}static async setActiveOrg(t){try{t?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,t):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#a}static getCapabilities(){return this.isPreviewingAsClient()?Hs({orgChannel:"managed_client",memberRole:"owner"}):this.#a?.capabilities||[]}static getUiMode(){return this.isPreviewingAsClient()?"managed":this.#a?.uiMode||"self_serve"}static getActiveOrg(){return this.#a?.activeOrg||null}static getMemberships(){return this.#a?.memberships||[]}static getManagedClients(){return this.#a?.managedClients||[]}static getStoredActiveOrg(){try{return localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{return null}}static#u="m5m_preview_as_client";static isPreviewingAsClient(){try{return sessionStorage.getItem(this.#u)==="1"&&!!this.#a?.activeOrg?.viaSubtree}catch{return!1}}static setPreviewAsClient(t){try{t?sessionStorage.setItem(this.#u,"1"):sessionStorage.removeItem(this.#u)}catch{}this.#a&&d.publish(p.AUTH_SCOPE_LOADED,this.#a)}static async doSignin(t,a){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}),o=await n.json();if(n.status===303)return console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#c(o.entity)),setTimeout(()=>{this.#r(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o};if(n.ok&&o.accessToken){console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#c(o.entity);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#u)}catch{}return this.fetchScope(),console.log("[AuthController] Explicitly navigating to home"),this.#r(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}}return{ok:!1,error:o.error||"Sign in failed",data:o}}catch(n){return console.error("[AuthController] Signin error:",n),{ok:!1,error:n.message}}}static async doSignout(t=!1){console.log("[AuthController] doSignout called, serverInitiated:",t);try{const a=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!a),!t&&a){const n=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(a)}`;if(console.log("[AuthController] Sending signout beacon to:",n),navigator.sendBeacon){const o=navigator.sendBeacon(n);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else a||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#d(),console.log("[AuthController] Stopping auth ping..."),this.#h(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(a){console.error("[AuthController] Signout error:",a),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(t){try{const a=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await a.json();return a.ok&&n.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#c(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||"Sign up failed",data:n}}catch(a){return console.error("[AuthController] Signup error:",a),{ok:!1,error:a.message}}}static async doResetHash(t,a){try{const n=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a,modified_by:t})}),s=await o.json();return o.ok&&s.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:s}):{ok:!1,error:s.error||"Password reset failed",data:s}}catch(n){return console.error("[AuthController] Reset password error:",n),{ok:!1,error:n.message}}}static#g(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#f()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#h(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#f(){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);t.ok?console.log("[AuthController] Ping success"):(t.status===401||t.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(t){console.error("[AuthController] Ping error:",t)}}static setDeepLinkGuid(t){this.#s=t,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,t),console.log("[AuthController] Deep-link GUID stored:",t)}static getDeepLinkGuid(){return this.#s}static clearDeepLink(){this.#s=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#_(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.fetchScope()}static#b(){console.log("[AuthController] User unauthenticated"),this.#h()}static#y(){console.log("[AuthController] User unverified")}static getAuthState(){try{const t=mvvLegit.getConf()?.LSKEY||"mvv",a=localStorage.getItem(t);if(!a)return"UNAUTH";if(typeof LZString>"u")return null;const n=LZString.decompressFromUTF16(a),s=JSON.parse(n)?.state;return s===1?"UNAUTH":s===2?"UNVERF":s===4?"AUTH":s===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(t){this.#r(t)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#f()}}class L{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_dashboard:"Dashboard",nav_dashboard_tagline:"Overview of your activity",nav_magnets:"Your Magnets",nav_magnets_tagline:"Manage your conversational magnets",nav_templates:"Templates",nav_templates_tagline:"Start from a magnet template",nav_conversations:"Conversations",nav_conversations_tagline:"Captured lead conversations",nav_ab_testing:"A/B Testing",nav_ab_testing_tagline:"Experiment and optimize",nav_analytics:"Analytics",nav_analytics_tagline:"Performance and ad metrics",nav_ad_accounts:"Ad Accounts",nav_ad_accounts_tagline:"Connect advertising accounts",nav_clients:"Clients",nav_clients_tagline:"Manage your client accounts",nav_team:"Team",nav_team_tagline:"Invite and manage teammates",nav_billing:"Billing",nav_billing_tagline:"Plan, usage, and invoices",nav_settings:"Settings",nav_settings_tagline:"Account and workspace settings",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:t,product:a,whitelabel:n,lang:o}){t&&(this.#t.buildMode=t),a&&(this.#t.product=a),n&&(this.#t.whitelabel=n),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(t,a={}){const n={...this.#t,...a},{buildMode:o,product:s,whitelabel:r,lang:i}=n;try{let l=this.#e[o]?.[s]?.[r]?.[i]?.[t],c=o;return!l&&o!=="LOCAL"&&(l=this.#e.LOCAL?.[s]?.[r]?.[i]?.[t],c="LOCAL (fallback)"),l?(c==="LOCAL (fallback)"&&console.warn(`[MicrocopyManager] Token '${t}' missing from ${o} — served from LOCAL instead. Backfill ${o}'s block if this is intentionally different copy.`),Array.isArray(l)?l[Math.floor(Math.random()*l.length)]:l):(console.warn(`[MicrocopyManager] Token not found: ${t} (${o}/${s}/${r}/${i}, LOCAL fallback also missing it)`),null)}catch(l){return console.error(`[MicrocopyManager] Error retrieving token: ${t}`,l),null}}static getAll(t={}){const a={...this.#t,...t},{buildMode:n,product:o,whitelabel:s,lang:r}=a;try{return this.#e[n]?.[o]?.[s]?.[r]||null}catch(i){return console.error("[MicrocopyManager] Error retrieving all tokens",i),null}}static has(t,a={}){const n={...this.#t,...a},{buildMode:o,product:s,whitelabel:r,lang:i}=n;try{return!!this.#e[o]?.[s]?.[r]?.[i]?.[t]}catch{return!1}}static getAvailableLanguages(){const{buildMode:t,product:a,whitelabel:n}=this.#t;try{return Object.keys(this.#e[t]?.[a]?.[n]||{})}catch{return[]}}static update(t,a,n={}){const o={...this.#t,...n},{buildMode:s,product:r,whitelabel:i,lang:l}=o;try{return this.#e[s]||(this.#e[s]={}),this.#e[s][r]||(this.#e[s][r]={}),this.#e[s][r][i]||(this.#e[s][r][i]={}),this.#e[s][r][i][l]||(this.#e[s][r][i][l]={}),this.#e[s][r][i][l][t]=a,!0}catch(c){return console.error(`[MicrocopyManager] Error updating token: ${t}`,c),!1}}static delete(t,a={}){const n={...this.#t,...a},{buildMode:o,product:s,whitelabel:r,lang:i}=n;try{return delete this.#e[o]?.[s]?.[r]?.[i]?.[t],!0}catch(l){return console.error(`[MicrocopyManager] Error deleting token: ${t}`,l),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(t){try{return this.#e=t,!0}catch(a){return console.error("[MicrocopyManager] Error importing data",a),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:L});class Ae{static#e=!1;static#t=null;static#o=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const t=this.#n();L.setContext(t),console.log("[I18nController] Initialized with context:",t),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),G.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#s(),this.#p(),this.#e=!0,this.refresh()}static#a(t){const a={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},n=t.toLowerCase();return a[n]||"DEV"}static#n(){const a=this.#a("production"),n=localStorage.getItem(G.FF_SSE_LS_WHITELABEL)||G.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(G.FF_SSE_LS_USER_LANG)||G.FF_SSE_I18N_LANG;return{buildMode:a,product:G.FF_SSE_I18N_PRODUCT,whitelabel:n,lang:o}}static#s(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((t,a,n)=>{G.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",n),this.#t=n,setTimeout(()=>{this.refresh()},G.FF_SSE_I18N_APPLY_DELAY_MS)},G.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#i())}static#i(){setInterval(()=>{const a=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");a&&a!==this.#t&&(this.#t=a,this.refresh())},500)}static#p(){this.#o||(this.#o=new MutationObserver(t=>{let a=!1;for(const n of t){for(const o of n.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){a=!0;break}if(a)break}a&&(G.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#o.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#r(document.body),this.#l(document.body),G.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#r(t){const a=t.querySelectorAll("[data-meta-copywrite-i118n]");G.FF_SSE_I18N_DEBUG&&a.length>0&&console.log(`[I18nController] Processing ${a.length} elements`),a.forEach(n=>{try{const o=n.getAttribute("data-meta-copywrite-i118n"),s=JSON.parse(o);if(!s.token){console.warn("[I18nController] Missing token in config:",s);return}const r=s.attribute||"textContent",i=L.get(s.token);if(i===null){console.warn(`[I18nController] Microcopy not found for token: ${s.token}`);return}r==="textContent"?n.textContent=i:r==="innerHTML"?n.innerHTML=i:n.setAttribute(r,i),G.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${i}" to ${r} for token: ${s.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,n)}})}static#l(t){t.querySelectorAll("*").forEach(n=>{n.shadowRoot&&(this.#r(n.shadowRoot),this.#l(n.shadowRoot))})}static setLanguage(t){const a=L.getAvailableLanguages();if(!a.includes(t)){console.error(`[I18nController] Language not available: ${t}. Available:`,a);return}localStorage.setItem(G.FF_SSE_LS_USER_LANG,t),L.setContext({lang:t}),console.log("[I18nController] Language changed to:",t);const n=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:t}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(t){localStorage.setItem(G.FF_SSE_LS_WHITELABEL,t),L.setContext({whitelabel:t}),G.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",t),this.refresh()}static getLanguage(){return L.getContext().lang}static getAvailableLanguages(){return L.getAvailableLanguages()}static getContext(){return L.getContext()}static destroy(){this.#o&&(this.#o.disconnect(),this.#o=null),this.#e=!1,this.#t=null,G.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{Ae.initialize()}):Ae.initialize());class ya{static _initialized=!1;static _debug=!1;static init(t={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=t.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const a=n=>{this._handleSSEMessage(n)};return window.mvvSSEther.onmessage(a),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(t){try{this._debug&&console.log("[MachVive] SSE message received:",t);const a=t?.data;if(!a){this._debug&&console.log("[MachVive] No data in message, skipping");return}const n=a.data||a.package||a;if(!n){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=n.cfg;const s=n.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",s)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(i){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:i.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const r=o?.topic;if(!r){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",r),!this._isValidTopic(r)){console.warn(`[MachVive] Topic '${r}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(r,s,t,a)}catch(a){console.error("[MachVive] Error handling SSE message:",a)}}static _isValidTopic(t){return!p||!p.hasOwnProperty(t)?(console.warn(`[MachVive] Topic '${t}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(t,a,n,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const s=window.PubSub||PubSub,r={message:a,metadata:{source:"sse",sseEventId:n.id,timestamp:n.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${t}':`,r);const i=p[t];console.log(`[MachVive] AppBroadcast.${t} = '${i}'`),s.publish(i,r),console.log(`[MachVive] ✓ Published SSE message to topic: ${t}`)}catch(s){console.error(`[MachVive] Error publishing to topic '${t}':`,s)}}static debug(t){return this._debug=t,console.log(`[MachVive] Debug mode ${t?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=ya);typeof window<"u"&&(window.MachVive=ya);const Ua="m5t_sidenav_collapsed",Vs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class qs extends HTMLElement{static get observedAttributes(){return["data-active-token","data-collapsed"]}constructor(){super(),this.attachShadow({mode:"open"}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=t=>{if(this.getAttribute("data-open")==="true"){if(t.key==="Escape"){t.preventDefault(),this.closeDrawer();return}if(t.key==="Tab"){const a=this.#c();if(a.length<2)return;const n=a[0],o=a[a.length-1],s=this.shadowRoot.activeElement;t.shiftKey&&s===n?(t.preventDefault(),o.focus()):!t.shiftKey&&s===o&&(t.preventDefault(),n.focus())}}};#o=()=>{this.closeDrawer(),this.#d()};connectedCallback(){if(!this.hasAttribute("data-collapsed"))try{localStorage.getItem(Ua)==="true"&&this.setAttribute("data-collapsed","true")}catch{}this.activeToken=this.getAttribute("data-active-token")||null,this.render(),this.#l(),this.addEventListener("keydown",this.#t),this.#e=window.matchMedia("(max-width: 768px)"),this.#e.addEventListener("change",this.#o),this.#d()}disconnectedCallback(){this.removeEventListener("keydown",this.#t),this.#e?.removeEventListener("change",this.#o)}attributeChangedCallback(t,a,n){a===n||!this.shadowRoot||(t==="data-active-token"?(this.activeToken=n,this.#m()):t==="data-collapsed"&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:t,orgs:a,activeOrg:n,footerBadge:o,loading:s}={}){t!==void 0&&(this.items=Array.isArray(t)?t:this.#a(t)||[]),a!==void 0&&(this.orgs=Array.isArray(a)?a:this.#a(a)||[]),n!==void 0&&(this.activeOrgGuid=n||null),o!==void 0&&(this.footerBadge=o||null),s!==void 0&&(this.loading=!!s),this.shadowRoot&&(this.render(),this.#l())}setButtons(t){this.setState({buttons:t})}setOrgs(t){this.setState({orgs:t})}setActiveOrgGuid(t){this.setState({activeOrg:t})}setFooterBadge(t){this.setState({footerBadge:t})}setActiveToken(t){this.activeToken=t||null,this.#m()}toggleCollapsed(t){const a=typeof t=="boolean"?t:this.getAttribute("data-collapsed")!=="true";this.setAttribute("data-collapsed",String(a));try{localStorage.setItem(Ua,String(a))}catch{}this.dispatchEvent(new CustomEvent("nav-collapse",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.COLLAPSE",collapsed:a,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute("data-open","true"),this.shadowRoot.querySelector(".hamburger")?.setAttribute("aria-expanded","true"),this.#d(),(this.#c()[0]||this.shadowRoot.querySelector(".sidenav"))?.focus?.()}closeDrawer(){if(this.getAttribute("data-open")!=="true")return;this.removeAttribute("data-open");const t=this.shadowRoot.querySelector(".hamburger");t?.setAttribute("aria-expanded","false"),this.#d(),t&&this.#e?.matches?t.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute("data-open")==="true"?this.closeDrawer():this.openDrawer()}#a(t){try{return t?JSON.parse(t):null}catch(a){return console.error("[M5TSideNav] bad JSON:",a),null}}#n(t){return String(t??"").replace(/[&<>"']/g,a=>Vs[a])}#s(t){return t?`<span class="ms" aria-hidden="true">${this.#n(t)}</span>`:""}#i(t){if(!t||!t.token)return"";const a=t.token===this.activeToken,n=t.route||"#",o=n.startsWith("#")?n:`#${n}`,s=typeof t.count=="number"&&t.count>0?`<span class="badge">${t.count}</span>`:"";return`
      <a class="nav-item${a?" active":""}" href="${this.#n(o)}"
         data-token="${this.#n(t.token)}" data-route="${this.#n(n)}"
         ${a?'aria-current="page"':""}
         ${t.tagline?`title="${this.#n(t.tagline)}"`:""}>
        ${this.#s(t.icon)}
        <span class="label">${this.#n(t.caption||t.token)}</span>
        ${s}
      </a>`}#p(){return this.loading?Array.from({length:6}).map(()=>'<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>').join(""):this.items.map(t=>t&&t.group&&Array.isArray(t.items)?`
          <div class="nav-group">
            <div class="group-label">${this.#n(t.caption||"")}</div>
            ${t.items.map(a=>this.#i(a)).join("")}
          </div>`:this.#i(t)).join("")}#r(){const t=this.footerBadge,a=i=>`<option value="${this.#n(i.guid)}" ${i.guid===this.activeOrgGuid?"selected":""}>${this.#n(i.name||i.guid)}</option>`,n=[];for(const i of Array.isArray(this.orgs)?this.orgs:[]){const l=i.group||"",c=n[n.length-1];c&&c.label===l?c.items.push(i):n.push({label:l,items:[i]})}const o=n.map(i=>i.label?`<optgroup label="${this.#n(i.label)}">${i.items.map(a).join("")}</optgroup>`:i.items.map(a).join("")).join(""),s=Array.isArray(this.orgs)&&this.orgs.length>1?`
      <label class="org-switcher" title="Active organization">
        ${this.#s("corporate_fare")}
        <select class="org-select" aria-label="Active organization">
          ${o}
        </select>
      </label>`:"",r=t?`<span class="footer-badge">${this.#s(t.icon||"verified")}<span>${this.#n(t.caption||"")}</span></span>`:"";return`
      ${s}
      ${r}
      <div class="footer-actions">
        <button class="footer-action" type="button" data-action="account" aria-label="Account" title="Account">${this.#s("account_circle")}<span>Account</span></button>
        <button class="footer-action" type="button" data-action="lang" aria-label="Language" title="Language">${this.#s("language")}<span>Language</span></button>
        <button class="footer-action" type="button" data-action="signout" aria-label="Sign out" title="Sign out">${this.#s("logout")}<span>Sign out</span></button>
      </div>`}render(){const t=this.getAttribute("data-collapsed")==="true";this.shadowRoot.innerHTML=`
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
          -webkit-user-select: none; user-select: none;
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
        .org-select option, .org-select optgroup { color: #0B1220; } /* native dropdown list paints light */
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
          <button class="logo" type="button" aria-label="Mach Five Magnet home">
            <img src="m5m-mark.svg" alt="" width="28" height="28" />
            <span class="wordmark">Mach Five <b>Magnet</b></span>
          </button>
          <button class="collapse-btn" type="button" aria-label="Toggle sidebar"
            aria-expanded="${t?"false":"true"}">
            <span class="ms" aria-hidden="true">${t?"chevron_right":"chevron_left"}</span>
          </button>
        </div>

        <nav class="nav" aria-label="Primary"${this.loading?' aria-busy="true"':""}>
          ${this.#p()}
        </nav>

        <div class="footer" part="footer">
          ${this.#r()}
        </div>
      </aside>
    `}#l(){this.shadowRoot.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",a=>{a.metaKey||a.ctrlKey||a.shiftKey||a.button===1||(a.preventDefault(),this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.TAP",token:t.getAttribute("data-token"),route:t.getAttribute("data-route"),caption:t.querySelector(".label")?.textContent||"",timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(".collapse-btn")?.addEventListener("click",()=>this.toggleCollapsed()),this.shadowRoot.querySelector(".hamburger")?.addEventListener("click",()=>this.toggleDrawer()),this.shadowRoot.querySelector(".scrim")?.addEventListener("click",()=>this.closeDrawer()),this.#d(),this.shadowRoot.querySelector(".logo")?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.LOGO_TAP",timestamp:Date.now()}}))}),this.shadowRoot.querySelector(".org-select")?.addEventListener("change",t=>{this.dispatchEvent(new CustomEvent("org-switch",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.ORG_SWITCH",orgGuid:t.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(".footer-action").forEach(t=>{t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("footer-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.FOOTER_ACTION",action:t.getAttribute("data-action"),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute("data-open")==="true"&&this.#c()[0]?.focus()}#m(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".nav-item").forEach(t=>{const a=t.getAttribute("data-token")===this.activeToken;t.classList.toggle("active",a),a?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}#c(){return Array.from(this.shadowRoot.querySelectorAll(".sidenav a[href], .sidenav button:not([disabled]), .sidenav select")).filter(t=>t.offsetParent!==null)}#d(){const t=this.shadowRoot?.querySelector(".sidenav");if(!t)return;const a=this.#e?this.#e.matches:window.matchMedia("(max-width: 768px)").matches;t.inert=a&&this.getAttribute("data-open")!=="true"}}customElements.define("m5t-side-nav",qs);class Ut{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"LEADS",caption:"Leads",enabled:!0,icon:"fas fa-user-plus",admin_role:!1,tagline:"Lead management and tracking",secondary:[{token:"LEADS_MANAGE",caption:"Manage",enabled:!0,icon:"fas fa-list-ul",admin_role:!1,tagline:"Manage leads (CRUD operations)",secondary:[]},{token:"LEADS_EXPORT",caption:"Export",enabled:!0,icon:"fas fa-file-export",admin_role:!1,tagline:"Export leads to external systems",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static#o={"client-saas":[{token:"DASHBOARD",caption:"Dashboard",icon:"dashboard",route:"/home",capability:"view_dashboard",enabled:!0,tagline:"Overview of your activity"},{token:"MAGNETS",caption:"Your Magnets",icon:"widgets",route:"/magnets",capability:"view_magnets",enabled:!0,tagline:"Manage your conversational magnets",children:[{token:"MAGNETS_ALL",caption:"All",route:"/magnets",capability:"view_magnets"},{token:"MAGNETS_DRAFTS",caption:"Drafts",route:"/magnets/drafts",capability:"view_magnets"},{token:"MAGNETS_ARCHIVED",caption:"Archived",route:"/magnets/archived",capability:"view_magnets"}]},{token:"LEADS",caption:"Leads",icon:"contacts",route:"/leads",capability:"view_magnets",enabled:!0,tagline:"Leads your magnets captured"},{token:"TEMPLATES",caption:"Templates",icon:"content_copy",route:"/templates",capabilityAny:["provision_magnets","manage_magnets"],enabled:!0,tagline:"Start from a magnet template"},{token:"CONVERSATIONS",caption:"Conversations",icon:"forum",route:"/conversations",capability:"view_conversations",enabled:!0,tagline:"Captured lead conversations"},{token:"AB_TESTING",caption:"A/B Testing",icon:"science",route:"/ab-testing",capability:"manage_magnets",enabled:!0,tagline:"Experiment and optimize"},{token:"ANALYTICS",caption:"Analytics",icon:"monitoring",route:"/analytics",capability:"view_stats",enabled:!0,tagline:"Performance and ad metrics",children:[{token:"ANALYTICS_OVERVIEW",caption:"Overview",route:"/analytics",capability:"view_stats"},{token:"ANALYTICS_CONVERSIONS",caption:"Conversions",route:"/analytics/conversions",capability:"view_stats"},{token:"ANALYTICS_ADS",caption:"Ad Performance",route:"/analytics/ad-performance",capability:"view_ad_metrics"}]},{token:"AD_ACCOUNTS",caption:"Ad Accounts",icon:"ads_click",route:"/ad-accounts",capability:"connect_ad_accounts",enabled:!0,tagline:"Connect advertising accounts"},{token:"CLIENTS",caption:"Clients",icon:"groups",route:"/clients",capability:"create_client_accounts",enabled:!0,tagline:"Manage your client accounts"},{token:"TEAM",caption:"Team",icon:"group",route:"/team",capability:"manage_team",enabled:!0,tagline:"Invite and manage teammates"},{token:"BILLING",caption:"Billing",icon:"receipt_long",route:"/billing",capability:"view_billing",enabled:!0,tagline:"Plan, usage, and invoices"},{token:"SETTINGS",caption:"Settings",icon:"settings",route:"/settings",capability:null,enabled:!0,tagline:"Account and workspace settings",children:[{token:"SETTINGS_GENERAL",caption:"General",route:"/settings",capability:null},{token:"SETTINGS_NOTIFICATIONS",caption:"Notifications",route:"/settings/notifications",capability:null},{token:"SETTINGS_WORKSPACE",caption:"Workspace",route:"/settings/workspace",capability:null},{token:"SETTINGS_INTEGRATIONS",caption:"Integrations",route:"/settings/integrations",capability:null},{token:"SETTINGS_SECURITY",caption:"Security",route:"/settings/security",capability:null}]}]};static setAppToken(t){this.#t[t]||console.warn(`[NavMetaManager] Unknown app token: ${t}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=t,console.log(`[NavMetaManager] App token set: ${t}`)}static getAppToken(){return this.#e}static#a(t){if(!t)return t;const a=t.token.toLowerCase(),n=`nav_${a}`,o=`nav_${a}_tagline`,s=L.get(n)||t.caption,r=L.get(o)||t.tagline;return{...t,caption:s,tagline:r,secondary:t.secondary?t.secondary.map(i=>this.#a(i)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(a=>this.#a(a)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const t=this.getPrimaryNav(),a=[];return t.forEach(n=>{a.push(n),n.secondary&&n.secondary.length>0&&a.push(...n.secondary)}),a}static getNavByToken(t){return this.getFlattenedNav().find(n=>n.token===t)||null}static getAdminNav(){return this.getFlattenedNav().filter(a=>a.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(a=>a.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#n(t){if(!t||!t.token)return t;const a=t.token.toLowerCase();return{...t,caption:L.get(`nav_${a}`)||t.caption,tagline:L.get(`nav_${a}_tagline`)||t.tagline}}static getSideNav(t=[],{uiMode:a=null}={}){const n=this.#o[this.#e]?this.#e:"client-saas",o=this.#o[n]||[],s=Array.isArray(t)?t:[],r=l=>l.capability==null&&!l.capabilityAny?!0:!(l.capability&&!s.includes(l.capability)||l.capabilityAny&&!l.capabilityAny.some(c=>s.includes(c))),i=[];for(const l of o)if(l.group&&Array.isArray(l.items)){if(!r(l))continue;const c=l.items.filter(r).map(h=>this.#n(h));c.length&&i.push({...this.#n(l),items:c})}else if(r(l)){const c=this.#n(l);Array.isArray(l.children)&&l.children.length&&(c.children=l.children.filter(r).map(h=>this.#n(h))),i.push(c)}return i}static getSideNavJSON(t=[],a={}){return JSON.stringify(this.getSideNav(t,a))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(t="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const a=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,n=await fetch(`${t}/coreMeta?meta_token=${a}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();const o=await n.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${a}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(a){return console.error("[NavMetaManager] Error fetching from coreMeta:",a),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:Ut});class js extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.hideLogo=!1,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.hideLogo=this.getAttribute("data-hide-logo")==="true",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const t=Ut.getPrimaryNav();t&&t.length>0?(this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const t=this.getAttribute("data-buttons");if(t)try{this.buttons=JSON.parse(t);const a=this.buttons.find(n=>n.selected);this.selectedPrimaryToken=a?a.token:this.buttons[0]?.token||null}catch(a){console.error("[M5TPrimaryNav] Error parsing buttons:",a),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(a=>a.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(t,a){if(a==="primary"){const n=this.buttons.find(o=>o.token===t);return{caption:n?.caption||"",tagline:n?.tagline||""}}else for(const n of this.buttons)if(n.secondary){const o=n.secondary.find(s=>s.token===t);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const t=this.getSecondaryButtons(),a=t.length>0,n=!Array.isArray(this.buttons)||this.buttons.length===0;this.shadowRoot.innerHTML=`
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
            <img class="logo-mark" src="m5m-mark.svg" alt="Mach Five Magnet" width="28" height="28" />
            <span class="logo-text">Mach Five <b>Magnet</b></span>
          </div>`}
          ${this.buttons.map((o,s)=>this.renderButton(o,s,"primary")).join("")}
        </nav>
        ${a?`
        <nav class="secondary-nav">
          ${t.map((o,s)=>this.renderButton(o,s,"secondary")).join("")}
        </nav>`:""}
      </div>
    `}renderButton(t,a,n="primary"){const o=n==="primary"?t.token===this.selectedPrimaryToken:!1,s=typeof t.count=="number"&&t.count!==null&&t.count!==void 0,r=t.icon&&t.icon.trim()!=="",i=t.tagline&&t.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${t.token}"
        data-level="${n}"
        data-admin="${t.admin_role||!1}"
        ${t.enabled?"":"disabled"}
        ${i?`title="${t.tagline}"`:""}
      >
        ${r?`<i class="${t.icon} nav-button-icon"></i>`:""}
        <span>${t.caption}</span>
        ${s?`<span class="count-badge">${t.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(n=>{const o=n.getAttribute("data-token"),s=n.getAttribute("data-level");n.addEventListener("click",r=>{o&&!r.currentTarget.disabled&&!this.longTapFired&&(s==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),n.addEventListener("dblclick",r=>{if(o&&!r.currentTarget.disabled){const i=this.getButtonData(o,s);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:s,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))}}),n.addEventListener("mouseenter",r=>{if(o&&!r.currentTarget.disabled){const i=this.getButtonData(o,s);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:s,caption:i.caption,tagline:i.tagline,action:"enter",timestamp:Date.now()}}))}}),n.addEventListener("mouseleave",r=>{if(o&&!r.currentTarget.disabled){const i=this.getButtonData(o,s);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:s,caption:i.caption,tagline:i.tagline,action:"leave",timestamp:Date.now()}}))}}),n.addEventListener("mousedown",r=>{o&&!r.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const i=this.getButtonData(o,s);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:s,caption:i.caption,tagline:i.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),n.addEventListener("mouseup",r=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),n.addEventListener("mouseleave",r=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const a=this.shadowRoot.querySelector(".logo");a&&a.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(t){const a=this.buttons.find(o=>o.token===t),n=this.getButtonData(t,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,level:"primary",caption:n.caption,tagline:n.tagline,hasSecondary:(a?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==t&&(this.selectedPrimaryToken=t,this.render(),this.attachEventListeners())}selectSecondaryButton(t){const a=this.getButtonData(t,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:t,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:a.caption,tagline:a.tagline,timestamp:Date.now()}}))}updateButtons(t){this.setAttribute("data-buttons",JSON.stringify(t)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(t,a,n="primary"){let o;n==="primary"?o=this.buttons.find(s=>s.token===t):o=this.getSecondaryButtons().find(r=>r.token===t),o&&(o.count=a,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",js);window.m5t=Object.create(null);window.m5t.pubsub=d;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(e){console.log("mvvLegit (direct): ReferenceError -",e.message)}const Ws=Object.keys(window).filter(e=>e.toLowerCase().includes("mvv")||e.toLowerCase().includes("neodigm")||e.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",Ws);const B=new xs("/",{hash:!0});window.router=B;function ue(e){const t=e?`${e.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),d.publish(p.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function ee(e){console.log("[Router] Navigating to:",e),B.navigate(`/${e}`)}const wa=new Set(["splash","signin","signup","forgot","resethash","verf-link","accept-invite","signout"]);let it={},ta={},Be=null;const Ys={admin:{caption:"Platform Admin",icon:"shield_person"},reseller:{caption:"Reseller",icon:"handshake"},managed:{caption:"Managed",icon:"visibility"},self_serve:{caption:"Self-Serve",icon:"rocket_launch"}},aa="__portfolio__";function Vn(){try{B._setCurrent(null)}catch{}B.resolve()}function Kt(){const e=document.getElementById("m5t-side-nav");if(!e)return;const t=!A.getScope()&&A.isAuthenticated(),a=A.getCapabilities(),n=A.getUiMode(),o=Ut.getSideNav(a,{uiMode:n});it={},ta={};const s=_=>{_.route&&(it[_.route]={sectionToken:_.token,childToken:null,children:_.children||null},Array.isArray(_.children)&&_.children.forEach(m=>{m.route&&(ta[m.token]=m.route,it[m.route]={sectionToken:_.token,childToken:m.token,children:_.children})}))},r=_=>_.forEach(m=>{m.group&&Array.isArray(m.items)?r(m.items):s(m)});r(o);const i=A.getMemberships(),l=A.getActiveOrg(),c=A.getManagedClients(),h=A.getStoredActiveOrg(),y=c.length?[{guid:aa,name:"Portfolio (all clients)"},...i.map(_=>({guid:_.orgGuid,name:_.name||_.channel,channel:_.channel,group:"Your organization"})),...c.map(_=>({guid:_.orgGuid,name:_.name||_.orgGuid,channel:_.channel,group:"Clients"}))]:i.map(_=>({guid:_.orgGuid,name:_.name||_.channel,channel:_.channel}));e.setState({buttons:o,orgs:y,activeOrg:c.length?h||aa:l?.guid||null,footerBadge:Ys[n]||null,loading:t}),qn(),Be&&jn(Be)}const Ks=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function qn(){const e=document.getElementById("app-content");if(!e)return;let t=document.getElementById("org-context-banner");t||(t=document.createElement("div"),t.id="org-context-banner",e.insertBefore(t,e.firstChild));const a=A.getActiveOrg(),n=A.isPreviewingAsClient(),o=!!a?.viaSubtree&&!!Be&&!wa.has(Be);if(t.hidden=!o,!o){t.innerHTML="";return}const s=Ks(a.name||"Client");t.innerHTML=`
    <style>
      #org-context-banner .ocb {
        display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        padding: 10px 48px; font-size: 0.86rem; font-weight: 500;
        background: ${n?"color-mix(in srgb, var(--color-accent-500, #edba08) 16%, var(--color-surface, #F4F7FB))":"color-mix(in srgb, var(--color-primary-600, #364C75) 10%, var(--color-surface, #F4F7FB))"};
        border-bottom: 1px solid color-mix(in srgb, var(--color-primary-600, #364C75) 22%, transparent);
        color: var(--color-text, #0B1220);
      }
      #org-context-banner .ocb .ms {
        font-family: 'Material Symbols Outlined'; font-size: 19px; line-height: 1;
        -webkit-font-feature-settings: 'liga';
      }
      #org-context-banner .ocb-spacer { flex: 1 1 auto; }
      #org-context-banner .ocb-btn {
        appearance: none; border: 1px solid color-mix(in srgb, var(--color-primary-600, #364C75) 35%, transparent);
        background: var(--color-surface-raised, #fff); color: inherit; font: inherit; font-size: 0.8rem;
        font-weight: 600; padding: 5px 12px; border-radius: var(--radius-md, 8px); cursor: pointer;
        display: inline-flex; align-items: center; gap: 6px;
      }
      #org-context-banner .ocb-btn:hover { border-color: var(--color-primary-600, #364C75); }
      @media (max-width: 768px) { #org-context-banner .ocb { padding: 10px 20px 10px 64px; } }
    </style>
    <div class="ocb" role="status">
      <span class="ms" aria-hidden="true">${n?"visibility":"supervised_user_circle"}</span>
      <span>${n?`Previewing as <strong>${s}</strong>`:`Viewing client: <strong>${s}</strong>`}</span>
      <span class="ocb-spacer"></span>
      <button type="button" class="ocb-btn" data-ocb="preview">
        <span class="ms" aria-hidden="true">${n?"visibility_off":"visibility"}</span>
        ${n?"Exit preview":"Preview"}
      </button>
      <button type="button" class="ocb-btn" data-ocb="portfolio">
        <span class="ms" aria-hidden="true">arrow_back</span> Back to portfolio
      </button>
    </div>`,t.querySelector('[data-ocb="preview"]')?.addEventListener("click",()=>{A.setPreviewAsClient(!A.isPreviewingAsClient()),Vn()}),t.querySelector('[data-ocb="portfolio"]')?.addEventListener("click",()=>{A.setPreviewAsClient(!1),A.setActiveOrg(null)})}function jn(e){const t=document.getElementById("m5t-side-nav"),a=it[`/${e}`]||it[e]||null;t?.setActiveToken(a?.sectionToken||null),Js(a)}function Js(e){const t=document.getElementById("m5t-sub-nav"),a=document.getElementById("app-shell");if(!t)return;const n=e?.children;t.hidden=!1,n&&n.length>1?(t.updateButtons(n.map(o=>({token:o.token,caption:o.caption,enabled:!0,selected:o.token===e.childToken}))),a?.classList.add("has-sub-nav")):(t.updateButtons([]),a?.classList.remove("has-sub-nav"))}function Xs(){const e=Ae.getAvailableLanguages&&Ae.getAvailableLanguages()||[];if(e.length<2){d.publish(p.UI_TOAST,{message:"Only one language is available",type:"info"});return}const t=localStorage.getItem(G.FF_SSE_LS_USER_LANG)||G.FF_SSE_I18N_LANG||e[0],a=e[(e.indexOf(t)+1)%e.length];Ae.setLanguage(a),d.publish(p.UI_TOAST,{message:`Language: ${a}`,type:"info"})}function Qs(){const e=document.getElementById("m5t-side-nav");if(!e)return;Ut.setAppToken("client-saas"),document.getElementById("app-shell")?.classList.toggle("nav-collapsed",e.getAttribute("data-collapsed")==="true"),e.addEventListener("nav-select",o=>{const s=o.detail?.route;s&&B.navigate(s.startsWith("/")?s:`/${s}`)}),e.addEventListener("logo-click",()=>B.navigate("/home")),e.addEventListener("nav-collapse",o=>{document.getElementById("app-shell")?.classList.toggle("nav-collapsed",!!o.detail?.collapsed)}),e.addEventListener("org-switch",o=>{const s=o.detail?.orgGuid;s&&A.setActiveOrg(s===aa?null:s)}),e.addEventListener("footer-action",o=>{switch(o.detail?.action){case"account":B.navigate("/settings");break;case"signout":B.navigate("/signout");break;case"lang":Xs();break}}),document.getElementById("m5t-sub-nav")?.addEventListener("nav-select",o=>{const s=ta[o.detail?.token];s&&B.navigate(s)}),document.addEventListener("language-changed",()=>Kt()),Kt(),d.subscribe(p.AUTH_SCOPE_LOADED,()=>Kt());const a=()=>{const o=A.getScope();return[o?.uiMode,o?.activeOrg?.guid,(o?.managedClients||[]).length,(o?.capabilities||[]).join(","),A.getStoredActiveOrg()].join("|")};let n=a();d.subscribe(p.AUTH_SCOPE_LOADED,()=>{const o=a();o!==n&&(n=o,Be&&!wa.has(Be)&&Vn())})}function Zs(e){Be=e;const t=document.getElementById("m5t-side-nav"),a=document.getElementById("app-shell");if(!t||!a)return;const n=!wa.has(e);if(t.hidden=!n,a.classList.toggle("has-side-nav",n),n)jn(e);else{const o=document.getElementById("m5t-sub-nav");o&&(o.hidden=!0),a.classList.remove("has-sub-nav")}qn()}d.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{t?.route&&Zs(t.route)});const Wn=()=>{console.log("[Router] Route: splash"),d.publish(p.ROUTE_NAV_BEFORE,{route:"splash"});const e=Hn();W(e?()=>Promise.resolve().then(()=>sr):()=>Promise.resolve().then(()=>lr),void 0).then(a=>{const n=document.getElementById("app");n.innerHTML=a.render(),a.init&&a.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"splash"})}).catch(a=>{console.error("[Router] Error loading splash route:",a),d.publish(p.ROUTE_NAV_ERROR,{route:"splash",error:a})})};B.on("/",Wn);B.on("/splash",Wn);B.on("/signin",()=>{console.log("[Router] Route: /signin"),d.publish(p.ROUTE_NAV_BEFORE,{route:"signin"}),W(()=>Promise.resolve().then(()=>gr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"signin"})}).catch(e=>{console.error("[Router] Error loading signin route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"signin",error:e})})});B.on("/signup",()=>{console.log("[Router] Route: /signup"),d.publish(p.ROUTE_NAV_BEFORE,{route:"signup"}),W(()=>Promise.resolve().then(()=>yr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"signup"})}).catch(e=>{console.error("[Router] Error loading signup route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"signup",error:e})})});B.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),d.publish(p.ROUTE_NAV_BEFORE,{route:"verf-link"}),W(()=>Promise.resolve().then(()=>Er),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(e=>{console.error("[Router] Error loading verf-link route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"verf-link",error:e})})});B.on("/forgot",()=>{console.log("[Router] Route: /forgot"),d.publish(p.ROUTE_NAV_BEFORE,{route:"forgot"}),W(()=>Promise.resolve().then(()=>$r),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(e=>{console.error("[Router] Error loading forgot route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"forgot",error:e})})});B.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!ue("resethash")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"resethash"}),W(()=>Promise.resolve().then(()=>Or),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(e=>{console.error("[Router] Error loading resethash route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"resethash",error:e})})});B.on("/home",()=>{if(console.log("[Router] Route: /home"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"home"}),W(()=>Promise.resolve().then(()=>Wr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"home"})}).catch(e=>{console.error("[Router] Error loading home route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"home",error:e})})});B.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!ue("signout")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"signout"}),W(()=>Promise.resolve().then(()=>Jr),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"signout"})}).catch(e=>{console.error("[Router] Error loading signout route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"signout",error:e})})});const er=[{path:"/templates",name:"templates",title:"Templates",icon:"content_copy"},{path:"/analytics",name:"analytics",title:"Analytics",icon:"monitoring"},{path:"/ad-accounts",name:"ad-accounts",title:"Ad Accounts",icon:"ads_click"},{path:"/billing",name:"billing",title:"Billing",icon:"receipt_long"},{path:"/settings",name:"settings",title:"Settings",icon:"settings"},{path:"/magnets/drafts",name:"magnets/drafts",title:"Magnets · Drafts",icon:"widgets"},{path:"/magnets/archived",name:"magnets/archived",title:"Magnets · Archived",icon:"widgets"},{path:"/analytics/conversions",name:"analytics/conversions",title:"Analytics · Conversions",icon:"monitoring"},{path:"/settings/workspace",name:"settings/workspace",title:"Settings · Workspace",icon:"settings"},{path:"/settings/integrations",name:"settings/integrations",title:"Settings · Integrations",icon:"settings"},{path:"/settings/security",name:"settings/security",title:"Settings · Security",icon:"settings"}];er.forEach(({path:e,name:t,title:a,icon:n})=>{B.on(e,()=>{if(console.log(`[Router] Route: ${e}`),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:t}),W(()=>Promise.resolve().then(()=>Zr),void 0).then(o=>{const s=document.getElementById("app");s.innerHTML=o.render({title:a,icon:n,name:t}),o.init&&o.init({name:t}),d.publish(p.ROUTE_NAV_AFTER,{route:t})}).catch(o=>{console.error(`[Router] Error loading section route (${t}):`,o),d.publish(p.ROUTE_NAV_ERROR,{route:t,error:o})})})});B.on("/settings/notifications",()=>{if(console.log("[Router] Route: /settings/notifications"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"settings/notifications"}),W(()=>Promise.resolve().then(()=>ii),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"settings/notifications"})}).catch(e=>{console.error("[Router] Error loading settings-notifications route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"settings/notifications",error:e})})});B.on("/settings/integrations",()=>{if(console.log("[Router] Route: /settings/integrations"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"settings/integrations"}),W(()=>Promise.resolve().then(()=>Ii),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"settings/integrations"})}).catch(e=>{console.error("[Router] Error loading settings-integrations route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"settings/integrations",error:e})})});B.on("/conversations",()=>{if(console.log("[Router] Route: /conversations"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"conversations"}),W(()=>Promise.resolve().then(()=>Bi),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"conversations"})}).catch(e=>{console.error("[Router] Error loading conversations route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"conversations",error:e})})});B.on("/ab-testing",()=>{if(console.log("[Router] Route: /ab-testing"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"ab-testing"}),W(()=>Promise.resolve().then(()=>Zi),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"ab-testing"})}).catch(e=>{console.error("[Router] Error loading ab-testing route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"ab-testing",error:e})})});B.on("/magnets",()=>{if(console.log("[Router] Route: /magnets"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"magnets"}),W(()=>Promise.resolve().then(()=>Xl),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"magnets"})}).catch(e=>{console.error("[Router] Error loading magnets route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"magnets",error:e})})});B.on("/leads",()=>{if(console.log("[Router] Route: /leads"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"leads"}),W(()=>Promise.resolve().then(()=>pc),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"leads"})}).catch(e=>{console.error("[Router] Error loading leads route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"leads",error:e})})});B.on("/analytics/ad-performance",()=>{if(console.log("[Router] Route: /analytics/ad-performance"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"analytics/ad-performance"}),W(()=>Promise.resolve().then(()=>_c),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"analytics/ad-performance"})}).catch(e=>{console.error("[Router] Error loading ad-performance route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"analytics/ad-performance",error:e})})});B.on("/clients",()=>{if(console.log("[Router] Route: /clients"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"clients"}),W(()=>Promise.resolve().then(()=>Ic),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"clients"})}).catch(e=>{console.error("[Router] Error loading clients route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"clients",error:e})})});B.on("/team",()=>{if(console.log("[Router] Route: /team"),!ue("home")){ee("signin");return}d.publish(p.ROUTE_NAV_BEFORE,{route:"team"}),W(()=>Promise.resolve().then(()=>Dc),void 0).then(e=>{const t=document.getElementById("app");t.innerHTML=e.render(),e.init&&e.init(),d.publish(p.ROUTE_NAV_AFTER,{route:"team"})}).catch(e=>{console.error("[Router] Error loading team route:",e),d.publish(p.ROUTE_NAV_ERROR,{route:"team",error:e})})});B.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),ee("splash")});d.subscribe(p.ROUTE_NAV,(e,t)=>{console.log("[Router] ROUTE_NAV event received:",t),t?.route&&ee(t.route)});function Ga(){console.log("[App] Waiting for Neodigm 55 library...");let e=0;const t=100,a=setInterval(()=>{e++,e%10===0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(a),tr()):e>=t&&(clearInterval(a),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,d.publish(p.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ga):Ga();async function tr(){if(console.log("[App] Neodigm 55 loaded, initializing..."),Ms(),Ae.initialize(),console.log("[App] I18n Controller initialized"),!await A.init({BASE_URL:"https://machfivemagnet-saas.onrender.com",navigateFunction:a=>{console.log("[AuthController] Navigation requested:",a),ee(a)}})){console.error("[App] AuthController initialization failed");return}const t=A.getEntity();t&&(console.log("[App] Session restored for:",t.email),d.publish(p.APP_USER_LOADED,{entity:t}),A.isAuthenticated()&&A.fetchScope()),d.publish(p.APP_READY,{timestamp:new Date().toISOString(),sessionUser:t}),Qs(),B.resolve(),window.AuthController=A,window.I18nController=Ae,window.MachVive=ya,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)")}d.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{typeof Ae<"u"&&Ae.refresh&&setTimeout(()=>{Ae.refresh()},100)});let Ha=!1;function ar(){if(Ha)return;const e=document.createElement("style");e.id="m5t-accept-invite-styles",e.textContent=`
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
  `,document.head.appendChild(e),Ha=!0}function nr(){const e=new URLSearchParams(window.location.search||"");let t=e.get("uid")||"",a=e.get("token")||"";if(!t||!a){const n=window.location.hash||"",o=n.includes("?")?n.slice(n.indexOf("?")+1):"",s=new URLSearchParams(o);if(t=t||s.get("uid")||"",a=a||s.get("token")||"",!t||!a){const r=n.replace(/^#\/?/,"").split("?")[0].split("/").filter(Boolean);t=t||r[1]||"",a=a||r[2]||""}}try{return{uid:decodeURIComponent(t),token:decodeURIComponent(a)}}catch{return{uid:t,token:a}}}function Yn(){return ar(),`
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
    </div>`}function Kn(){const{uid:e,token:t}=nr(),a=document.getElementById("accept-invite-form"),n=document.getElementById("ai-pass"),o=document.getElementById("ai-confirm"),s=document.getElementById("ai-submit"),r=document.getElementById("ai-msg");if(!a)return;const i=(l,c="error")=>{r.textContent=l,r.className=`accept-invite-msg ${c}`};if(!e||!t){i("This invitation link is invalid or incomplete. Please use the link from your email."),s.disabled=!0;return}a.addEventListener("submit",async l=>{l.preventDefault();const c=n.value||"",h=o.value||"";if(c.length<8){i("Password must be at least 8 characters.");return}if(c!==h){i("Passwords do not match.");return}s.disabled=!0,i("Setting up your account…","ok");try{const y=A.getConfig?.().BASE_URL||"",_=await fetch(`${y}/m5t/v5/acctEntity/acceptInvite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:e,token:t,password:c})}),m=await _.json().catch(()=>({}));if(!_.ok||!m.ok){const g=_.status===410?"This invitation has expired. Ask for a new one.":_.status===409?"This invitation has already been used. Try signing in.":m.error||`Could not accept the invitation (HTTP ${_.status}).`;i(g),s.disabled=!1;return}try{window.history.replaceState({},"",window.location.pathname+window.location.hash)}catch{}i("Welcome! Signing you in…","ok"),(await A.doSignin(m.entity.email,c))?.ok||(i("Your account is ready. Please sign in.","ok"),setTimeout(()=>{window.location.hash="#/signin"},1200))}catch(y){console.error("[accept-invite] error:",y),i("Something went wrong. Please try again."),s.disabled=!1}})}const or={render:Yn,init:Kn},sr=Object.freeze(Object.defineProperty({__proto__:null,default:or,init:Kn,render:Yn},Symbol.toStringTag,{value:"Module"}));function rr(){return`
    <div class="auth-container splash">
      <div class="auth-left">
        <div class="splash-content">
          <img class="splash-mark" src="m5m-mark.svg" alt="" width="72" height="72" />
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
            Design no-code magnets that qualify and capture every lead, then watch them convert,
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
  `}function ir(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const e=localStorage.getItem(G.FF_SSE_LS_TOKEN),t=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!e,hasMvvTs:!!t});const a=document.getElementById("splash-loader"),n=document.getElementById("splash-actions");e?(console.log("[SplashRoute] Auth token found → HOME"),d.publish(p.ROUTE_NAV,{route:"home"})):t?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),d.publish(p.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),a&&(a.style.display="none"),n&&(n.style.display="flex"),document.querySelectorAll("[data-route]").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${r}`),d.publish(p.ROUTE_NAV,{route:r})})}))},4e3)}const lr=Object.freeze(Object.defineProperty({__proto__:null,init:ir,render:rr},Symbol.toStringTag,{value:"Module"}));function te(e,t){typeof neodigmToast<"u"&&neodigmToast.q(t,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${e.id}`):(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),300)),e.focus()}const cr=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function xa(e,t){return e?cr.test(e)?!0:(te(t,L.get("validation_email_invalid")),!1):(te(t,L.get("validation_email_required")),!1)}function dr(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/splash" aria-label="Mach Five Magnet">
          <img src="m5m-mark.svg" alt="" width="34" height="34" />
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
            every lead in real time. No code required.
          </p>
        </div>
      </div>
    </div>
  `}function pr(){console.log("[SigninRoute] Initialized");const e=document.getElementById("loginForm"),t=document.getElementById("email"),a=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const s=a.type==="password"?"text":"password";a.type=s}),e?.addEventListener("submit",async s=>{s.preventDefault();const r=t.value.trim(),i=a.value;xa(r,t)&&ur(i,a)&&await mr(r,i)}),document.getElementById("link--uc__underline")?.addEventListener("click",s=>{s.preventDefault(),d.publish(p.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",s=>{s.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),d.publish(p.ROUTE_NAV,{route:"signup"})})}function ur(e,t){return e?e.length<10?(te(t,L.get("validation_password_min_length")),!1):!0:(te(t,L.get("validation_password_required")),!1)}async function mr(e,t){const a=document.querySelector(".btn");a.disabled=!0,a.textContent=L.get("loading_signing_in");try{const n=await A.doSignin(e,t);n.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(L.get("success_welcome_back"),"success"),d.publish(p.AUTH_SIGNIN_SUCCESS,{entity:A.getEntity()})):n.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(L.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(n.error||L.get("error_signin_failed"),"danger"),a.disabled=!1,a.textContent=(L.get("sign_in")||"Sign in").toUpperCase())}catch(n){console.error("[SigninRoute] Sign in error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||L.get("error_network"),"danger"),a.disabled=!1,a.textContent=(L.get("sign_in")||"Sign in").toUpperCase(),d.publish(p.AUTH_SIGNIN_FAIL,{message:n.message})}}const gr=Object.freeze(Object.defineProperty({__proto__:null,init:pr,render:dr},Symbol.toStringTag,{value:"Module"}));function Jn(e){const t=[];return e.length<12&&t.push("at least 12 characters"),e.length>1024&&t.push("at most 1024 characters"),/[a-z]/.test(e)||t.push("1 lowercase"),/[A-Z]/.test(e)||t.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push("1 special character"),/[^\x00-\x7F]/.test(e)&&t.push("ASCII characters only"),t}function Xn(e){return e.length===0?"":e.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":e.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}const hr="2026-07-15";function fr(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/splash" aria-label="Mach Five Magnet">
          <img src="m5m-mark.svg" alt="" width="34" height="34" />
          <span class="auth-brand-name">Mach Five <b>Magnet</b></span>
        </a>
        <h1 data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>Create your account</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details_to_get_started", "attribute": "textContent"}'>Start turning conversations into conversions, free</p>

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

            <div class="form-consent">
              <input type="checkbox" id="acceptTerms" name="acceptTerms" />
              <label for="acceptTerms">
                I agree to the
                <a href="https://machfivemagnet.com/terms/" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                and
                <a href="https://machfivemagnet.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </label>
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
            pop-up, slide panel, or embed, and watch the leads roll in.
          </p>
        </div>
      </div>
    </div>
  `}function vr(){console.log("[SignupRoute] Initialized");const e=document.getElementById("signupForm"),t=e.querySelector('button[type="submit"]');za("togglePassword","password","eyeIcon"),za("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",n=>{n.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),d.publish(p.ROUTE_NAV,{route:"signin"})}),e.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("first").value.trim(),s=document.getElementById("last").value.trim(),r=document.getElementById("email").value.trim(),i=document.getElementById("company").value.trim(),l=document.getElementById("phone").value.trim(),c=document.getElementById("password").value,h=document.getElementById("confirmPassword").value,y=document.getElementById("first"),_=document.getElementById("last"),m=document.getElementById("email"),x=document.getElementById("password"),g=document.getElementById("confirmPassword");if(!Va(o,y,L.get("validation_first_name_required"))||!Va(s,_,L.get("validation_last_name_required"))||!xa(r,m)||!_r(c,x))return;if(c!==h){te(g,L.get("validation_password_mismatch"));return}const f=document.getElementById("acceptTerms");if(!f.checked){te(f,"Please accept the Terms of Service and Privacy Policy to continue.");return}t.disabled=!0,t.textContent=L.get("loading_creating_account"),await br(o,s,r,i,l,c)})}function za(e,t,a){const n=document.getElementById(e),o=document.getElementById(t),s=document.getElementById(a);!n||!o||!s||n.addEventListener("click",()=>{const r=o.type==="password";o.type=r?"text":"password",r?s.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:s.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Va(e,t,a){return e?!0:(te(t,a),!1)}function _r(e,t){if(!e)return te(t,L.get("validation_password_required")),!1;const a=Jn(e);return a.length>0?(te(t,Xn(a)),!1):!0}async function br(e,t,a,n,o,s){const r=document.querySelector('button[type="submit"]');try{const i={email:a,password:s,first:e,last:t};n&&(i.company=n),o&&(i.phone=o),i.terms_accepted=!0,i.legal_version=hr;const l=await A.doSignup(i);if(l.ok)d.publish(p.AUTH_SIGNUP_SUCCESS,{email:a}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const c=l.error||l.message||L.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(c,"danger"),r.disabled=!1,r.textContent=(L.get("create_account")||"Create account").toUpperCase(),d.publish(p.AUTH_SIGNUP_FAIL,{message:c})}}catch(i){console.error("[SignupRoute] Sign up error:",i),typeof neodigmToast<"u"&&neodigmToast.q(i.message||L.get("error_network"),"danger"),r.disabled=!1,r.textContent=(L.get("create_account")||"Create account").toUpperCase(),d.publish(p.AUTH_SIGNUP_FAIL,{message:i.message})}}const yr=Object.freeze(Object.defineProperty({__proto__:null,init:vr,render:fr},Symbol.toStringTag,{value:"Module"}));function wr(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/splash" aria-label="Mach Five Magnet">
          <img src="m5m-mark.svg" alt="" width="34" height="34" />
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
  `}function xr(){console.log("[VerfLinkRoute] Initialized");const e=7200,t=Date.now(),a=document.getElementById("countdown-display");function n(){const s=Date.now()-t,r=Math.floor(s/1e3),i=Math.max(0,e-r),l=Math.floor(i/3600),c=Math.floor(i%3600/60),h=i%60,y=`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(h).padStart(2,"0")}`;a&&(a.textContent=y,i<600&&(a.style.color="#ef4444",a.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),i===0&&(a.style.color="#7f1d1d",a.style.textShadow="none")),i===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}n();const o=setInterval(n,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const Er=Object.freeze(Object.defineProperty({__proto__:null,init:xr,render:wr},Symbol.toStringTag,{value:"Module"})),Ar="https://machfivemagnet-saas.onrender.com";class Sr{constructor(){this.baseUrl=Ar}async request(t,a={}){const n=`${this.baseUrl}${t}`,o={"Content-Type":"application/json",...a.headers};try{const s=await fetch(n,{...a,headers:o});if(s.status===401||s.status===403){d.publish(p.AUTH_TOKEN_EXPIRED,{status:s.status,endpoint:t});const i=await s.json().catch(()=>({}));throw new Error(i.error||"Authentication failed")}const r=await s.json();return{ok:s.ok,status:s.status,data:r}}catch(s){throw console.error("API Request Error:",s),d.publish(p.APP_ERROR,{message:s.message,endpoint:t}),s}}async get(t){return this.request(t,{method:"GET"})}async post(t,a){return this.request(t,{method:"POST",body:JSON.stringify(a)})}async put(t,a){return this.request(t,{method:"PUT",body:JSON.stringify(a)})}async delete(t){return this.request(t,{method:"DELETE"})}async signin(t,a){return this.post("/api/acctEntity/signin",{email:t,hash:a})}async signup(t){return this.post("/api/acctEntity/signup",t)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(t){return this.get(`/m5t/v5/acctEntity/forgot?CODE=${encodeURIComponent(t)}`)}async resetHash(t,a){return this.post("/api/acctEntity/resethash",{email:t,hash:a})}async verifyAccount(t){return this.get(`/api/acctEntity/verify?CODE=${t}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(t){return this.get(`/api/acctEntity/${t}`)}async updateAccount(t,a){return this.put(`/api/acctEntity/${t}`,a)}async deleteAccount(t){return this.delete(`/api/acctEntity/${t}`)}async ping(){return this.get("/ping")}}const kr=new Sr;function Tr(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/signin" aria-label="Mach Five Magnet">
          <img src="m5m-mark.svg" alt="" width="34" height="34" />
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

  `}function Cr(){console.log("[ForgotRoute] Initialized");const e=document.getElementById("forgot-form"),t=document.getElementById("email");e?.addEventListener("submit",async a=>{a.preventDefault();const n=t.value.trim();xa(n,t)&&await Ir(n)})}async function Ir(e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent="SENDING...";try{const a=await kr.forgotPassword(e);a.ok&&a.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(L.get("success_reset_link_sent"),"success"),d.publish(p.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(a.data.error||L.get("error_signin_failed"),"danger"),t.disabled=!1,t.textContent=(L.get("send_reset_link")||"Send reset link").toUpperCase())}catch(a){console.error("[ForgotRoute] Forgot password error:",a),typeof neodigmToast<"u"&&neodigmToast.q(a.message||L.get("error_network"),"danger"),t.disabled=!1,t.textContent=(L.get("send_reset_link")||"Send reset link").toUpperCase()}}const $r=Object.freeze(Object.defineProperty({__proto__:null,init:Cr,render:Tr},Symbol.toStringTag,{value:"Module"}));function Lr(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/home" aria-label="Mach Five Magnet">
          <img src="m5m-mark.svg" alt="" width="34" height="34" />
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
  `}function Nr(){console.log("[ResethashRoute] Initialized");const e=document.getElementById("resethash-form"),t=e.querySelector('button[type="submit"]');qa("toggleNewPassword","new-password","eyeIconNew"),qa("toggleConfirmPassword","confirm-password","eyeIconConfirm"),e?.addEventListener("submit",async a=>{a.preventDefault();const n=e.email.value.trim(),o=e.newPassword.value,s=e.confirmPassword.value,r=document.getElementById("new-password"),i=document.getElementById("confirm-password");if(!o){te(r,L.get("validation_new_password_required"));return}const l=Jn(o);if(l.length>0){te(r,Xn(l));return}if(!s){te(i,L.get("validation_new_password_required"));return}if(o!==s){te(i,L.get("validation_password_mismatch"));return}t.disabled=!0,t.textContent=L.get("loading_resetting_password");try{const c=await A.doResetHash(n,o);c.ok?(typeof neodigmToast<"u"&&neodigmToast.q(L.get("success_password_reset"),"success"),d.publish(p.AUTH_RESETHASH_SUCCESS,{email:n})):(te(r,c.error||L.get("error_signin_failed")),t.disabled=!1,t.textContent=(L.get("update_password")||"Update password").toUpperCase())}catch(c){console.error("[ResethashRoute] Reset password error:",c),te(r,c.message||L.get("error_network")),t.disabled=!1,t.textContent=(L.get("update_password")||"Update password").toUpperCase()}})}function qa(e,t,a){const n=document.getElementById(e),o=document.getElementById(t),s=document.getElementById(a);!n||!o||!s||n.addEventListener("click",()=>{const r=o.type==="password";o.type=r?"text":"password",r?s.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:s.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}const Or=Object.freeze(Object.defineProperty({__proto__:null,init:Nr,render:Lr},Symbol.toStringTag,{value:"Module"})),Q=()=>A.getManagedClients().length>0&&!A.getStoredActiveOrg(),Ne=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Rr={reseller_org:"Your org",managed_client:"Client",saas_org:"Org"};let ja=!1;function et(){if(ja)return;const e=document.createElement("style");e.id="m5t-portfolio-styles",e.textContent=`
    .page-shell .dash-clients { width:100%; border-collapse:collapse; font-size:0.86rem; }
    .page-shell .dash-clients th { text-align:right; font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-text-subtle,#6C7C9A); padding:6px 10px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); white-space:nowrap; }
    .page-shell .dash-clients th:first-child { text-align:left; }
    .page-shell .dash-clients td { padding:10px; text-align:right; border-bottom:1px solid var(--color-surface-2,#EAF0F7); font-variant-numeric:tabular-nums; white-space:nowrap; }
    .page-shell .dash-clients td:first-child { text-align:left; }
    .page-shell .dash-clients tr:last-child td { border-bottom:0; }
    .page-shell .dash-clients tbody tr { cursor:pointer; transition:background .12s ease; }
    .page-shell .dash-clients tbody tr:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .dash-clients .dc-name { font-weight:600; display:flex; align-items:center; gap:8px; }
    .page-shell .dash-clients .dc-chip { font-size:0.62rem; font-weight:700; letter-spacing:0.04em; padding:2px 7px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-clients .dc-delta-up { color:#047857; font-weight:600; }
    .page-shell .dash-clients .dc-delta-down { color:#B91C1C; font-weight:600; }
    .page-shell .dash-clients .dc-view { color:var(--color-primary-600,#0072BA); font-weight:600; }
    .page-shell .dash-clients-scroll { overflow-x:auto; }
    .page-shell .pf-client-chip { font-size:0.64rem; font-weight:700; letter-spacing:0.03em; padding:2px 8px; border-radius:999px; background:var(--color-accent-soft,rgba(0,114,186,0.1)); color:var(--color-primary-700,#00558D); white-space:nowrap; }
    .page-shell .pf-access-error { display:flex; align-items:center; gap:8px; font-size:0.84rem; font-weight:500; color:var(--color-danger,#DD4124); background:var(--color-danger-soft,rgba(221,65,36,0.08)); border:1px solid var(--color-danger,#DD4124); border-radius:var(--radius-md,10px); padding:10px 14px; margin-bottom:12px; }
  `,document.head.appendChild(e),ja=!0}const Wa=e=>e.toISOString().slice(0,10);async function Mr(e,{days:t=30}={}){const a=new Date,n=Wa(new Date(a.getTime()-(t-1)*864e5)),o=Wa(a),s=await fetch(`${e}/m5t/v5/dashboard/stats?from=${n}&to=${o}&group_by=owner`);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await s.json();if(!r.ok)throw new Error("stats not ok");return r.by_owner||[]}function Qn(e,t){return`<div class="dash-clients-scroll"><table class="dash-clients">
    <thead><tr>
      <th>Client</th>${t.map(a=>`<th>${a.h}</th>`).join("")}<th></th>
    </tr></thead>
    <tbody>${e.map(a=>`
      <tr data-org="${Ne(a.owner_guid)}" tabindex="0" role="button"
          aria-label="Open ${Ne(a.name||"client")}">
        <td><span class="dc-name">${Ne(a.name||a.owner_guid)}
          <span class="dc-chip">${Ne(Rr[a.channel]||a.channel||"")}</span></span></td>
        ${t.map(n=>`<td>${n.td(a)}</td>`).join("")}
        <td><span class="dc-view">View →</span></td>
      </tr>`).join("")}</tbody>
  </table></div>`}function Fr(e){let t=e.querySelector(".pf-access-error");t||(t=document.createElement("div"),t.className="pf-access-error",e.prepend(t)),t.textContent="You don't have direct access to manage this org. Use the admin console to act on its behalf."}function Zn(e){if(!e)return;const t=async a=>{const n=a?.dataset?.org;if(!n)return;(await A.setActiveOrg(n))?.activeOrgError&&Fr(e)};e.querySelectorAll("tbody tr[data-org]").forEach(a=>{a.addEventListener("click",()=>t(a)),a.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t(a))})})}const na=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`;function dt({section:e,title:t,description:a}){return et(),`
    <div class="page-shell" data-section="${Ne(e)}">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${Ne(t)}</h1>
          <p class="page-description">${Ne(a)}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
        </div>
        <div class="card-body" id="pf-picker-body">${na("hourglass_empty","Loading…")}</div>
      </div>
    </div>`}async function tt(e,t,{emptyMsg:a}={}){const n=document.getElementById("pf-picker-body");if(n)try{const o=await Mr(e);if(!o.length){n.innerHTML=na("groups",a||"No client orgs yet. Create one under Clients first.");return}n.innerHTML=Qn(o,t),Zn(n)}catch(o){console.warn("[portfolio] picker load failed:",o),n.innerHTML=na("error","Could not load your clients. Please refresh.")}}function eo(){const e={};return A.getManagedClients().forEach(t=>{e[t.orgGuid]=t.name}),A.getMemberships().forEach(t=>{t.orgGuid&&!e[t.orgGuid]&&(e[t.orgGuid]=t.name||"")}),e}const to=e=>e?`<span class="pf-client-chip">${Ne(e)}</span>`:"",le=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,he=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),V=e=>Number(e||0).toLocaleString(),ao=e=>[e.first_name,e.last_name].filter(Boolean).join(" ").trim()||e.email||"(no name)",Pr=e=>(ao(e).split(/\s+/).slice(0,2).map(t=>t[0]||"").join("")||"?").toUpperCase();function Dr(e){const t=e.created?.created_tz;if(!t)return"";try{return new Date(t).toLocaleDateString([],{month:"short",day:"numeric"})}catch{return""}}function Br(e){try{const t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return""}}let Ya=!1;function Ur(){if(Ya)return;const e=document.createElement("style");e.id="m5t-dash-recent-styles",e.textContent=`
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

    .page-shell .dash-chart { width:100%; height:auto; display:block; }
    .page-shell text.dash-ax { font-size:11px; fill:var(--color-text-subtle,#6C7C9A); }
    .page-shell .dash-legend { display:flex; gap:16px; margin:0 0 8px; font-size:0.8rem; font-weight:600; color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-legend i { display:inline-block; width:11px; height:11px; border-radius:3px; margin-right:5px; vertical-align:middle; }

    .page-shell .dash-funnel { display:flex; flex-direction:column; gap:12px; padding:6px 2px; }
    .page-shell .dash-funnel__row { display:flex; flex-direction:column; gap:4px; }
    .page-shell .dash-funnel__meta { display:flex; justify-content:space-between; font-size:0.8rem; }
    .page-shell .dash-funnel__label { font-weight:600; color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-funnel__val { font-weight:700; color:var(--color-text,#0B1220); }
    .page-shell .dash-funnel__track { height:12px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); overflow:hidden; }
    .page-shell .dash-funnel__bar { height:100%; border-radius:999px; background:var(--color-primary-600,#0072BA); transition:width .4s ease; }
    .page-shell .dash-funnel__bar--mid { background:#7BC4C4; }
    .page-shell .dash-funnel__bar--end { background:#009473; }
    .page-shell .dash-funnel__pct { font-size:0.72rem; color:var(--color-text-subtle,#6C7C9A); }

    .page-shell .dash-list { display:flex; flex-direction:column; }
    .page-shell .dash-list__row { display:flex; align-items:center; gap:10px; padding:9px 4px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); font-size:0.86rem; }
    .page-shell .dash-list__row:last-child { border-bottom:0; }
    .page-shell .dash-list__ico { flex:0 0 auto; width:28px; height:28px; border-radius:8px; display:grid; place-items:center; background:var(--color-accent-soft,rgba(0,114,186,0.1)); color:var(--color-primary-600,#0072BA); }
    .page-shell .dash-list__ico .material-symbols-outlined { font-size:17px; }
    .page-shell .dash-list__main { flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .dash-list__num { flex:0 0 auto; font-weight:700; }
    .page-shell .dash-list__time { flex:0 0 auto; font-size:0.74rem; color:var(--color-text-subtle,#6C7C9A); }
    .page-shell .dash-list__mode { flex:0 0 auto; font-size:0.66rem; font-weight:700; letter-spacing:0.03em; padding:2px 7px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); color:var(--color-text-muted,#4A5A78); }

  `,document.head.appendChild(e),Ya=!0}function Gr(e){return`<a class="recent-lead" href="#/leads">
    <span class="recent-lead__ava">${he(Pr(e))}</span>
    <span class="recent-lead__main">
      <span class="recent-lead__name">${he(ao(e))}</span>
      <span class="recent-lead__sub">${he(e.email||e.phone||"")}</span>
    </span>
    <span class="recent-lead__badge" data-s="${he(e.status)}">${he(e.status)}</span>
    <span class="recent-lead__time">${he(Dr(e))}</span>
  </a>`}const ht=({icon:e,label:t,valueId:a,value:n="—",subId:o,sub:s=""})=>`
  <div class="stat-card">
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${e}</span>
      <span class="stat-label">${t}</span>
    </div>
    <div class="stat-value"${a?` id="${a}"`:""}>${n}</div>
    <div class="stat-change"><span class="stat-sublabel"${o?` id="${o}"`:""}>${s}</span></div>
  </div>`,ft=(e,t,a,{wide:n=!1,full:o=!1,controls:s=!1}={})=>`
  <div class="dashboard-card${n?" chart-card-wide":""}${o?" chart-card-full":""}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${e}</span> ${t}</h2>
      ${s?`<div class="chart-controls" id="dash-periods">
        <button class="chart-period-btn" type="button" data-days="7">7 Days</button>
        <button class="chart-period-btn active" type="button" data-days="30">30 Days</button>
      </div>`:""}
    </div>
    <div class="card-body" id="${a}">${le("hourglass_empty","Loading…")}</div>
  </div>`;let oa=30;function no(){Ur(),et();const e=Q();return`
    <div class="page-shell" data-section="home">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${e?"Portfolio":"Dashboard"}</h1>
          ${e?"":'<p class="page-description">Your magnets, conversations, and lead performance at a glance.</p>'}
        </div>
        <a class="btn btn-primary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          New Magnet
        </a>
      </div>

      ${e?`
      <div class="dashboard-card" style="margin-bottom:24px">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="dash-portfolio">${le("hourglass_empty","Loading…")}</div>
      </div>`:""}

      <div class="stats-grid">
        ${ht({icon:"widgets",label:"Active Magnets",valueId:"stat-active-magnets",subId:"stat-active-magnets-sub",sub:"Loading…"})}
        ${ht({icon:"ads_click",label:"Magnet Opens",valueId:"stat-opens",subId:"stat-opens-sub",sub:"Loading…"})}
        ${ht({icon:"person_add",label:"Leads Captured",valueId:"stat-leads",subId:"stat-leads-sub",sub:"Loading…"})}
        ${ht({icon:"check_circle",label:"Completion Rate",valueId:"stat-completion",subId:"stat-completion-sub",sub:"Loading…"})}
      </div>

      <div class="charts-section">
        ${ft("show_chart","Opens & Leads","dash-trend",{wide:!0,controls:!0})}
        <div class="charts-grid">
          ${ft("filter_alt","Completion Funnel","dash-funnel")}
          ${ft("source","Top Campaigns","dash-campaigns")}
          ${ft("touch_app","CTA Usage","dash-routes",{full:!0})}
        </div>
      </div>

      <div class="content-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Recent Interactions</h2>
            <span class="live-indicator"><span class="pulse-dot"></span> Live</span>
          </div>
          <div class="card-body" id="dash-interactions">
            ${le("sensors","Loading…")}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/leads">View all →</a>
          </div>
          <div class="card-body" id="recent-leads-body">
            ${le("hourglass_empty","Loading leads…")}
          </div>
        </div>
      </div>
    </div>`}async function oo(){const e=A.getConfig?.().BASE_URL||"";document.getElementById("dash-periods")?.addEventListener("click",t=>{const a=t.target.closest("button[data-days]");a&&(oa=Number(a.dataset.days)||30,document.querySelectorAll("#dash-periods .chart-period-btn").forEach(n=>n.classList.toggle("active",Number(n.dataset.days)===oa)),Ja(e))}),await Promise.all([Ja(e),Vr(e)])}const ye=(e,t)=>{const a=document.getElementById(e);a&&(a.textContent=t)},je=(e,t)=>{const a=document.getElementById(e);a&&(a.innerHTML=t)},Ka=e=>e.toISOString().slice(0,10);async function Ja(e){const t=new Date,a=Ka(new Date(t.getTime()-(oa-1)*864e5)),n=Ka(t),o=Q();let s;try{const I=await fetch(`${e}/m5t/v5/dashboard/stats?from=${a}&to=${n}${o?"&group_by=owner":""}`);if(!I.ok)throw new Error(`HTTP ${I.status}`);if(s=await I.json(),!s.ok)throw new Error("stats not ok")}catch(v){console.warn("[dashboard] stats fetch failed:",v),["stat-active-magnets","stat-opens","stat-leads","stat-completion"].forEach(I=>ye(I,"—")),["stat-active-magnets-sub","stat-opens-sub","stat-leads-sub","stat-completion-sub"].forEach(I=>ye(I,"Unavailable")),["dash-trend","dash-funnel","dash-campaigns","dash-routes","dash-interactions","dash-portfolio"].forEach(I=>je(I,le("error","Could not load. Please refresh.")));return}o&&Hr(s.by_owner||[]),ye("stat-active-magnets",V(s.magnets.active)),ye("stat-active-magnets-sub",s.magnets.total>s.magnets.active?`${V(s.magnets.total-s.magnets.active)} paused`:s.magnets.active?"All running":"No magnets yet");const r=s.funnel||{};ye("stat-opens",r.opens?V(r.opens):"—"),ye("stat-opens-sub",r.opens?r.engagement_rate!=null?`${r.engagement_rate}% engage`:`${V(r.engaged)} engaged`:"No opens in this range yet");const i=s.leads||{};ye("stat-leads",V(i.total));const l=(i.this_week||0)-(i.prev_week||0);ye("stat-leads-sub",i.total?`${V(i.this_week)} this week (${l>=0?"+":""}${V(l)} vs last)`:"No leads yet"),ye("stat-completion",r.completion_rate!=null?`${r.completion_rate}%`:"—"),ye("stat-completion-sub",r.opens?`${V(r.completions)} completed of ${V(r.opens)} opens`:"Appears once magnets get opened");const c=s.by_day||[],h=c.some(v=>v.opens||v.leads);je("dash-trend",h?qr(c):le("show_chart","No activity in this range yet. Opens and leads chart here as visitors engage your magnets.")),je("dash-funnel",r.opens?zr(r):le("filter_alt","The funnel fills in once your magnets record opens."));const y=s.top_campaigns||[];je("dash-campaigns",y.length?`<div class="dash-list">${y.map(v=>`
        <div class="dash-list__row">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">campaign</span></span>
          <span class="dash-list__main" title="${he(v.campaign)}">${he(v.campaign)}</span>
          <span class="dash-list__num">${V(v.leads)}</span>
        </div>`).join("")}</div>`:le("source","No tagged campaigns yet. Leads arriving with ?utm_campaign=… rank here."));const _={book:["event","Book"],chat:["chat","Chat"],call:["phone_in_talk","Call"],email:["mail","Email"],support:["support_agent","Support"]},m=Object.entries(r.routes||{}).sort((v,I)=>I[1]-v[1]),x=m.length?m[0][1]:0;je("dash-routes",m.length?`<div class="dash-funnel">${m.map(([v,I])=>{const[O,F]=_[v]||["touch_app",v];return`<div class="dash-funnel__row">
          <div class="dash-funnel__meta"><span class="dash-funnel__label"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px">${O}</span> ${he(F)}</span><span class="dash-funnel__val">${V(I)}</span></div>
          <div class="dash-funnel__track"><div class="dash-funnel__bar" style="width:${x?Math.max(4,Math.round(I/x*100)):0}%"></div></div>
        </div>`}).join("")}</div>`:le("touch_app","CTA taps (Book, Chat, Call, Support) rank here once visitors use the action bar."));const g={open:["visibility","Magnet opened"],engage:["touch_app","Visitor engaged"],route:["alt_route","Picked a channel"],complete:["check_circle","Completed: lead captured"]},f=s.recent_events||[];je("dash-interactions",f.length?`<div class="dash-list">${f.map(v=>{const[I,O]=g[v.event]||["sensors",v.event],F=v.event==="route"&&v.detail?` · ${he(v.detail)}`:"";return`<div class="dash-list__row">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">${I}</span></span>
          <span class="dash-list__main">${O}${F}</span>
          ${v.display_mode?`<span class="dash-list__mode">${he(v.display_mode)}</span>`:""}
          <span class="dash-list__time">${he(Br(v.at))}</span>
        </div>`}).join("")}</div>`:le("sensors","No interactions yet. They'll stream in as visitors engage your magnets."))}function Hr(e){const t=document.getElementById("dash-portfolio");if(!t)return;if(!e.length){t.innerHTML=le("groups","No client orgs yet. Create one under Clients to see its numbers here.");return}const a=e.some(s=>s.ad),n=s=>{const r=(s.leads.this_week||0)-(s.leads.prev_week||0);return!s.leads.this_week&&!s.leads.prev_week?"":` <span class="${r>=0?"dc-delta-up":"dc-delta-down"}">(${r>=0?"+":""}${V(r)})</span>`},o=[{h:"Magnets",td:s=>`${V(s.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${V(s.magnets.total)}</span>`},{h:"Leads · wk",td:s=>`${V(s.leads.this_week)}${n(s)}`},{h:"Leads · total",td:s=>V(s.leads.total)},{h:"Opens",td:s=>V(s.opens)},{h:"Compl.",td:s=>s.completion_rate!=null?`${s.completion_rate}%`:"—"},...e.some(s=>s.booked)?[{h:"Booked",td:s=>s.booked?V(s.booked):"—"}]:[],...e.some(s=>s.called)?[{h:"Called",td:s=>s.called?V(s.called):"—"}]:[],...a?[{h:"Spend",td:s=>s.ad?`$${V(s.ad.spend)}`:"—"},{h:"CPL",td:s=>s.ad?.cost_per_lead!=null?`$${V(s.ad.cost_per_lead)}`:"—"}]:[]];t.innerHTML=Qn(e,o),Zn(t)}function zr(e){const t=[["Opened",e.opens,""],["Engaged",e.engaged," dash-funnel__bar--mid"],["Completed",e.completions," dash-funnel__bar--end"],...e.booked?[["Booked",e.booked," dash-funnel__bar--end"]]:[],...e.called?[["Called",e.called," dash-funnel__bar--end"]]:[]],a=Math.max(1,e.opens||0),n=o=>Math.min(100,Math.round((o||0)/a*100));return`<div class="dash-funnel">${t.map(([o,s,r])=>`
    <div class="dash-funnel__row">
      <div class="dash-funnel__meta">
        <span class="dash-funnel__label">${o}</span>
        <span class="dash-funnel__val">${V(s)} <span class="dash-funnel__pct">${n(s)}%</span></span>
      </div>
      <div class="dash-funnel__track"><div class="dash-funnel__bar${r}" style="width:${Math.max(2,n(s))}%"></div></div>
    </div>`).join("")}</div>`}async function Vr(e){const t=document.getElementById("recent-leads-body");if(t)try{const a=await fetch(`${e}/m5t/v5/m5mLead`);if(!a.ok)throw new Error(`HTTP ${a.status}`);const n=await a.json(),o=(Array.isArray(n?.data)?n.data:[]).filter(s=>!["DELETED","ARCHIVED"].includes(s.status));t.innerHTML=o.length?o.slice(0,5).map(Gr).join(""):le("contacts","No leads captured yet. Publish a magnet to start collecting.")}catch(a){console.warn("[dashboard] Leads fetch failed:",a),t.innerHTML=le("error","Could not load recent leads.")}}function Xa(e){if(e<=0)return 1;const t=Math.pow(10,Math.floor(Math.log10(e))),a=e/t;return(a<=1?1:a<=2?2:a<=5?5:10)*t}const Qa=e=>(e=Math.round(e),e>=1e3?(e/1e3).toFixed(e%1e3===0?0:1)+"k":String(e));function qr(e){const m=e.length||1,x=Xa(Math.max(1,...e.map(k=>k.opens||0))),g=Xa(Math.max(1,...e.map(k=>k.leads||0))),f=748/m,v=Math.min(22,f*.55),I=k=>46+f*(k+.5),O=k=>266-k/x*248,F=k=>266-k/g*248,J=[0,.5,1].map(k=>{const N=266-k*248;return`<line x1="46" y1="${N.toFixed(1)}" x2="794" y2="${N.toFixed(1)}" stroke="#EAF0F7"/><text x="38" y="${(N+3.5).toFixed(1)}" text-anchor="end" class="dash-ax">${Qa(x*k)}</text><text x="802" y="${(N+3.5).toFixed(1)}" text-anchor="start" class="dash-ax">${Qa(g*k)}</text>`}).join(""),Y=e.map((k,N)=>{const be=O(k.opens||0);return`<rect x="${(I(N)-v/2).toFixed(1)}" y="${be.toFixed(1)}" width="${v.toFixed(1)}" height="${Math.max(0,266-be).toFixed(1)}" rx="3" fill="#0072BA" opacity="0.85"><title>${k.date}: ${k.opens} opens</title></rect>`}).join(""),ae=e.map((k,N)=>`${I(N).toFixed(1)},${F(k.leads||0).toFixed(1)}`).join(" "),ve=m>1?`<polyline points="${ae}" fill="none" stroke="#009473" stroke-width="2.5"/>`:"",me=e.map((k,N)=>`<circle cx="${I(N).toFixed(1)}" cy="${F(k.leads||0).toFixed(1)}" r="3.2" fill="#009473"><title>${k.date}: ${k.leads} leads</title></circle>`).join(""),_e=Math.max(1,Math.ceil(m/6)),Se=e.map((k,N)=>N%_e===0||N===m-1?`<text x="${I(N).toFixed(1)}" y="288" text-anchor="middle" class="dash-ax">${k.date.slice(5)}</text>`:"").join("");return`
    <div class="dash-legend">
      <span><i style="background:#0072BA"></i>Magnet Opens</span>
      <span><i style="background:#009473"></i>Leads</span>
    </div>
    <svg class="dash-chart" viewBox="0 0 840 300" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Magnet opens versus leads over time">
      ${J}${Y}${ve}${me}${Se}
    </svg>`}const jr={render:no,init:oo},Wr=Object.freeze(Object.defineProperty({__proto__:null,default:jr,init:oo,render:no},Symbol.toStringTag,{value:"Module"}));function Yr(){return`
    <div class="auth-container">
      <div class="auth-left">
        <a class="auth-brand" href="#/home" aria-label="Mach Five Magnet">
          <img src="m5m-mark.svg" alt="" width="34" height="34" />
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
  `}function Kr(){console.log("[SignoutRoute] Initialized");const e=document.getElementById("confirm-signout-btn");e?.addEventListener("click",async()=>{e.disabled=!0,e.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await A.doSignout()})}const Jr=Object.freeze(Object.defineProperty({__proto__:null,init:Kr,render:Yr},Symbol.toStringTag,{value:"Module"}));let Za=!1;function Xr(){if(Za)return;const e=document.createElement("style");e.id="m5t-section-page-styles",e.textContent=`
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
  `,document.head.appendChild(e),Za=!0}function so({title:e="Section",icon:t="widgets",name:a=""}={}){return Xr(),`
    <section class="section-page" data-section="${a}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${t}</span>
        <h1 class="section-page__title">${e}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired. Content lands next.</p>
      </div>
    </section>`}function ro(){}const Qr={render:so,init:ro},Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Qr,init:ro,render:so},Symbol.toStringTag,{value:"Module"})),ei={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fe=e=>String(e??"").replace(/[&<>"']/g,t=>ei[t]),ce=(e,t="info")=>{try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Ue=()=>A.getConfig?.().BASE_URL||"",ti=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,$t=5,oe={magnets:[],canManage:!1,webhook:null,webhookAllowed:!0},sa=()=>A.getActiveOrg()?.guid||A.getMemberships()[0]?.orgGuid||null;let en=!1;function ai(){if(en)return;const e=document.createElement("style");e.id="m5t-notif-styles",e.textContent=`
    .page-shell .ntf-row { display: flex; gap: 16px; align-items: flex-start; padding: 16px 4px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); flex-wrap: wrap; }
    .page-shell .ntf-row:last-child { border-bottom: 0; }
    .page-shell .ntf-magnet { flex: 0 0 220px; min-width: 0; }
    .page-shell .ntf-name { font-weight: 600; font-size: 0.92rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .ntf-meta { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .ntf-state { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; margin-top: 8px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .ntf-state.on { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .ntf-state .material-symbols-outlined { font-size: 14px; }
    .page-shell .ntf-config { flex: 1 1 320px; min-width: 0; }
    .page-shell .ntf-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
    .page-shell .ntf-chip { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 600; padding: 5px 6px 5px 12px; border-radius: 999px; background: var(--color-accent-soft, #EEF4FF); color: var(--color-primary-700, #00558D); }
    .page-shell .ntf-chip button { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1rem; line-height: 1; color: inherit; padding: 0 5px; border-radius: 50%; }
    .page-shell .ntf-chip button:hover { background: rgba(0,85,141,0.12); }
    .page-shell .ntf-none { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .page-shell .ntf-addrow { display: flex; gap: 8px; flex-wrap: wrap; }
    .page-shell .ntf-input { font: inherit; font-size: 0.84rem; padding: 7px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 240px; }
    .page-shell .ntf-input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .ntf-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-primary-600, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .ntf-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .ntf-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .ntf-btn .material-symbols-outlined { font-size: 16px; }
    .page-shell .ntf-actions { flex: 0 0 auto; display: flex; gap: 8px; align-items: center; padding-top: 2px; }

    .page-shell .ntf-wh { display: flex; flex-direction: column; gap: 10px; max-width: 640px; }
    .page-shell .ntf-wh .ntf-input { width: 100%; box-sizing: border-box; }
    .page-shell .ntf-wh__row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
    .page-shell .ntf-wh__status { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .ntf-wh__status .ok { color: var(--color-success, #009473); font-weight: 600; }
    .page-shell .ntf-wh__status .bad { color: var(--color-danger, #DD4124); font-weight: 600; }
  `,document.head.appendChild(e),en=!0}const Ea=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`;function io(){return ai(),et(),Q()?dt({section:"settings-notifications",title:"Notifications",description:"Pick a client to manage their lead alerts."}):`
    <div class="page-shell" data-section="settings-notifications">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Notifications</h1>
          <p class="page-description">Lead alert emails for each magnet.</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span> Lead alerts</h2>
        </div>
        <div class="card-body" id="ntf-body">${Ea("hourglass_empty","Loading…")}</div>
      </div>
      <div class="dashboard-card" id="ntf-wh-card" style="margin-top:24px; display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">webhook</span> Lead delivery webhook</h2>
        </div>
        <div class="card-body" id="ntf-wh-body"></div>
      </div>
    </div>`}async function lo(){if(Q()){const e=t=>Number(t||0).toLocaleString();return tt(Ue(),[{h:"Magnets",td:t=>`${e(t.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${e(t.magnets.total)}</span>`},{h:"Leads · wk",td:t=>e(t.leads.this_week)}],{emptyMsg:"No client orgs yet. Create one under Clients first."})}await Promise.all([ni(),co()])}async function co(){const e=sa();if(e)try{const t=await fetch(`${Ue()}/m5t/v5/acctGroup/${encodeURIComponent(e)}/webhook`);if(t.status===403){oe.webhookAllowed=!1;return}const a=await t.json().catch(()=>({}));if(!a.ok)return;oe.webhook=a.webhook,po()}catch{}}function tn(e){try{const t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return""}}function po(){const e=document.getElementById("ntf-wh-card"),t=document.getElementById("ntf-wh-body");if(!e||!t)return;e.style.display="";const a=oe.webhook,n=a?.last_delivery;t.innerHTML=`
    <div class="ntf-wh">
      <p class="ntf-none" style="margin:0">Every captured lead is sent to this URL as JSON. Works with Zapier catch hooks and any CRM endpoint.</p>
      <input class="ntf-input" id="ntf-wh-url" type="url" placeholder="https://hooks.zapier.com/hooks/catch/…" value="${fe(a?.uri||"")}" />
      <input class="ntf-input" id="ntf-wh-secret" type="text" autocomplete="off" placeholder="${a?.has_secret?"Signing secret saved. Type to replace.":"Signing secret (optional)"}" />
      <div class="ntf-wh__row">
        <button class="ntf-btn" type="button" id="ntf-wh-save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save</button>
        <button class="ntf-btn" type="button" id="ntf-wh-test" ${a?.uri?"":"disabled"}><span class="material-symbols-outlined" aria-hidden="true">send</span> Send test</button>
        <span class="ntf-wh__status">${n?n.ok?`Last delivery: <span class="ok">delivered</span> ${fe(tn(n.tz))}`:`Last delivery: <span class="bad">failed</span> ${fe(tn(n.tz))} (${fe(n.error||"")})`:""}</span>
      </div>
    </div>`,t.querySelector("#ntf-wh-save")?.addEventListener("click",async()=>{const o=t.querySelector("#ntf-wh-url")?.value.trim()||"",s=t.querySelector("#ntf-wh-secret")?.value??"",r={uri:o};s.trim()!==""&&(r.secret=s.trim());try{const i=await fetch(`${Ue()}/m5t/v5/acctGroup/${encodeURIComponent(sa())}/webhook`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),l=await i.json().catch(()=>({}));if(!i.ok||!l.ok)throw new Error(l.error||`Failed (HTTP ${i.status})`);oe.webhook=l.webhook,ce(o?"Webhook saved":"Webhook removed","success"),po()}catch(i){ce(i.message||"Could not save","danger")}}),t.querySelector("#ntf-wh-test")?.addEventListener("click",async o=>{const s=o.currentTarget;s.disabled=!0;try{const r=await fetch(`${Ue()}/m5t/v5/acctGroup/${encodeURIComponent(sa())}/webhook-test`,{method:"POST"}),i=await r.json().catch(()=>({}));r.ok&&i.ok?ce("Test delivery sent","success"):ce(i.error||"Could not deliver the test","danger")}catch{ce("Could not deliver the test","danger")}finally{s.disabled=!1}try{await co()}catch(r){console.warn("[notifications] loadWebhook refresh failed:",r)}})}async function ni(){const e=document.getElementById("ntf-body");if(e){try{const a=await(await fetch(`${Ue()}/m5t/v5/magnets`)).json().catch(()=>({}));if(!a.ok)throw new Error(a.message||"Failed to load");oe.magnets=(a.magnets||[]).filter(n=>n.status!=="ARCHIVED"),oe.canManage=!!a.canManage}catch(t){console.warn("[notifications] load failed:",t),e.innerHTML=Ea("error","Could not load your magnets. Please try again.");return}uo()}}function oi(e){const t=Array.isArray(e.notify_emails)?e.notify_emails:[],a=t.length>0;return`
    <div class="ntf-row" data-guid="${fe(e.guid)}">
      <div class="ntf-magnet">
        <div class="ntf-name" title="${fe(e.name)}">${fe(e.name)}</div>
        <div class="ntf-meta">${fe((e.domains||[]).join(", ")||e.status)}</div>
        <span class="ntf-state${a?" on":""}">
          <span class="material-symbols-outlined" aria-hidden="true">${a?"notifications_active":"notifications_off"}</span>
          ${a?`Alerts on · ${t.length}`:"Alerts off"}
        </span>
      </div>
      <div class="ntf-config">
        ${t.length?`<div class="ntf-chips">${t.map(n=>`
              <span class="ntf-chip">${fe(n)}${oe.canManage?`<button type="button" data-remove="${fe(n)}" aria-label="Remove ${fe(n)}">&times;</button>`:""}</span>`).join("")}</div>`:'<div class="ntf-none">No alert emails.</div>'}
        ${oe.canManage?`
        <div class="ntf-addrow">
          <input class="ntf-input" type="email" placeholder="name@business.com" aria-label="Add alert email" ${t.length>=$t?"disabled":""} />
          <button class="ntf-btn" type="button" data-add ${t.length>=$t?"disabled":""}>
            <span class="material-symbols-outlined" aria-hidden="true">add</span> Add
          </button>
        </div>`:""}
      </div>
      ${oe.canManage?`
      <div class="ntf-actions">
        <button class="ntf-btn" type="button" data-test ${t.length?"":"disabled"} title="${t.length?"Send a sample alert to the emails above":"Add an alert email first"}">
          <span class="material-symbols-outlined" aria-hidden="true">send</span> Send test
        </button>
      </div>`:""}
    </div>`}function uo(){const e=document.getElementById("ntf-body");if(e){if(!oe.magnets.length){e.innerHTML=Ea("widgets","No magnets yet. Create one under Your Magnets first.");return}e.innerHTML=oe.magnets.map(oi).join(""),e.querySelectorAll(".ntf-row").forEach(t=>{const a=t.dataset.guid,n=t.querySelector(".ntf-input"),o=()=>{const s=(n?.value||"").trim().toLowerCase();if(!s)return;if(!ti.test(s)){ce("That does not look like an email address","danger");return}const i=[...oe.magnets.find(l=>l.guid===a).notify_emails||[]];if(i.includes(s)){ce("Already added","info");return}if(i.length>=$t){ce(`Up to ${$t} emails per magnet`,"info");return}an(a,[...i,s])};t.querySelector("[data-add]")?.addEventListener("click",o),n?.addEventListener("keydown",s=>{s.key==="Enter"&&o()}),t.querySelectorAll("[data-remove]").forEach(s=>s.addEventListener("click",()=>{const r=oe.magnets.find(i=>i.guid===a);an(a,(r.notify_emails||[]).filter(i=>i!==s.dataset.remove))})),t.querySelector("[data-test]")?.addEventListener("click",()=>si(a,t.querySelector("[data-test]")))})}}async function an(e,t){try{const a=await fetch(`${Ue()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({notify_emails:t})}),n=await a.json().catch(()=>({}));if(!a.ok||!n.ok)throw new Error(n.error||n.message||`Failed (HTTP ${a.status})`);const o=oe.magnets.find(s=>s.guid===e);o&&(o.notify_emails=t),ce("Alert emails updated","success")}catch(a){console.warn("[notifications] save failed:",a),ce(a.message||"Could not save","danger");return}try{uo()}catch(a){console.error("[notifications] renderBody after save failed:",a)}}async function si(e,t){t&&(t.disabled=!0);try{const a=await fetch(`${Ue()}/m5t/v5/magnets/${encodeURIComponent(e)}/notify-test`,{method:"POST"}),n=await a.json().catch(()=>({}));a.ok&&n.ok?ce("Test alert sent","success"):ce(n.error||"Could not send the test","danger")}catch{ce("Could not send the test","danger")}finally{t&&(t.disabled=!1)}}const ri={render:io,init:lo},ii=Object.freeze(Object.defineProperty({__proto__:null,default:ri,init:lo,render:io},Symbol.toStringTag,{value:"Module"})),li={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},se=e=>String(e??"").replace(/[&<>"']/g,t=>li[t]),K=(e,t="info")=>{try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}},re=()=>A.getConfig?.().BASE_URL||"",D={providers:null,configured:null,denied:!1,busy:!1,autoOpenPicker:!1},Aa=()=>A.getActiveOrg()?.guid||A.getMemberships()[0]?.orgGuid||null;let nn=!1;function ci(){if(nn)return;const e=document.createElement("style");e.id="m5t-intg-styles",e.textContent=`
    .page-shell .intg-card { margin-bottom: 20px; }
    .page-shell .intg-head { display: grid; grid-template-columns: auto 1fr auto; gap: 14px; align-items: center; }
    .page-shell .intg-mark { width: 42px; height: 42px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--color-accent-soft, #EEF4FF); color: var(--color-primary-600, #0072BA); }
    .page-shell .intg-mark .material-symbols-outlined { font-size: 22px; }
    .page-shell .intg-title-wrap { min-width: 0; }
    .page-shell .intg-name-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .page-shell .intg-name { font-weight: 600; font-size: 0.98rem; color: var(--color-text, #0B1220); }
    .page-shell .intg-sub { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .intg-state { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-state.on { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .intg-state.warn { background: var(--color-warning-soft, #FEF3C7); color: var(--color-warning, #915E00); }
    .page-shell .intg-state .material-symbols-outlined { font-size: 13px; }
    .page-shell .intg-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
    .page-shell .intg-desc { font-size: 0.86rem; color: var(--color-text-muted, #4A5A78); margin: 14px 0 0; max-width: 640px; line-height: 1.55; }
    .page-shell .intg-desc b { color: var(--color-text, #0B1220); }
    .page-shell .intg-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-primary-600, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
    .page-shell .intg-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .intg-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .intg-btn.primary { background: var(--color-primary-600, #0072BA); border-color: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .intg-btn.primary:hover { background: var(--color-primary-700, #00558D); }
    .page-shell .intg-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .intg-btn .material-symbols-outlined { font-size: 16px; }

    .page-shell .intg-alert { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 10px 14px; border-radius: 10px; font-size: 0.82rem; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); max-width: 640px; }
    .page-shell .intg-alert.error { background: #FDF1EE; border-color: #F3CCC2; color: var(--color-danger, #B23A25); }
    .page-shell .intg-alert .material-symbols-outlined { font-size: 17px; flex: 0 0 auto; }

    .page-shell .intg-picker { margin-top: 16px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 12px; overflow: hidden; max-width: 640px; }
    .page-shell .intg-picker__head { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 16px; background: var(--color-surface, #F4F7FB); border-bottom: 1px solid var(--color-border, #D4DCE8); font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); letter-spacing: 0.02em; }
    .page-shell .intg-picker__list { max-height: 300px; overflow-y: auto; }
    .page-shell .intg-acct { display: grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items: center; padding: 10px 16px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); cursor: pointer; }
    .page-shell .intg-acct:last-child { border-bottom: 0; }
    .page-shell .intg-acct:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .intg-acct.disabled { opacity: 0.55; cursor: default; }
    .page-shell .intg-acct input { width: 15px; height: 15px; accent-color: var(--color-primary-600, #0072BA); }
    .page-shell .intg-acct__name { font-size: 0.86rem; font-weight: 600; color: var(--color-text, #0B1220); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .intg-acct__id { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); font-family: ui-monospace, monospace; margin-top: 1px; }
    .page-shell .intg-acct__badge { font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .intg-picker__foot { display: flex; justify-content: flex-end; gap: 8px; padding: 10px 16px; background: var(--color-surface, #F4F7FB); border-top: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .intg-picker__empty { padding: 18px 16px; font-size: 0.84rem; color: var(--color-text-subtle, #6C7C9A); }

    .page-shell .intg-form { display: flex; flex-direction: column; gap: 10px; padding: 14px 16px; }
    .page-shell .intg-form label { font-size: 0.74rem; font-weight: 700; letter-spacing: 0.03em; color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-input, .page-shell .intg-select { font: inherit; font-size: 0.84rem; padding: 8px 10px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 100%; box-sizing: border-box; }
    .page-shell .intg-input:focus, .page-shell .intg-select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); }
    .page-shell .intg-hint { font-size: 0.75rem; color: var(--color-text-subtle, #6C7C9A); margin: 0; }

    @media (max-width: 720px) {
      .page-shell .intg-head { grid-template-columns: auto 1fr; }
      .page-shell .intg-actions { grid-column: 1 / -1; justify-content: flex-start; }
    }
  `,document.head.appendChild(e),nn=!0}const ra=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Xe=(e,t="")=>`<div class="intg-alert ${t}"><span class="material-symbols-outlined" aria-hidden="true">${t==="error"?"error":"info"}</span><span>${e}</span></div>`;function di(){return ci(),et(),Q()?dt({section:"settings-integrations",title:"Integrations",description:"Pick a client to manage their connections."}):`
    <div class="page-shell" data-section="settings-integrations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Integrations</h1>
          <p class="page-description">Connected accounts for this workspace.</p>
        </div>
      </div>
      <div id="intg-body">
        <div class="dashboard-card intg-card"><div class="card-body">${ra("hourglass_empty","Loading…")}</div></div>
      </div>
    </div>`}async function pi(){if(Q()){const e=t=>Number(t||0).toLocaleString();return tt(re(),[{h:"Magnets",td:t=>`${e(t.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${e(t.magnets.total)}</span>`},{h:"Leads · wk",td:t=>e(t.leads.this_week)}],{emptyMsg:"No client orgs yet. Create one under Clients first."})}ui(),await Re()}function ui(){try{const e=new URLSearchParams(window.location.search),t=e.get("provider")==="calendly"?"Calendly":"Google Ads";if(e.get("connected")==="google_ads")K("Google Ads connected.","success"),D.autoOpenPicker=!0;else if(e.get("connected")==="calendly")K("Calendly connected.","success");else if(e.get("error"))K(`${t} connection failed (${e.get("error")}).`,"error");else return;window.history.replaceState(null,"",window.location.pathname+window.location.hash)}catch{}}async function Re(){const e=document.getElementById("intg-body");try{const t=await fetch(`${re()}/m5t/v5/integrations`);if(t.status===403){D.denied=!0,e&&(e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${ra("lock","Integrations are managed by workspace admins.")}</div></div>`);return}const a=await t.json();if(!a.ok)throw new Error(a.error||"load failed");D.providers=a.data.providers,D.configured=a.data.configured,fi()}catch{e&&(e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${ra("error","Could not load integrations.")}</div></div>`)}}function mi(){const e=Aa(),t=D.providers?.google_ads||[],a=t.find(i=>i.owner_guid===e)||t[0]||null,n=!!D.configured?.google_ads;let o='<span class="intg-state">Not connected</span>',s="Connect a Google account with access to your ad accounts. Spend lines up against your magnet leads in Ad performance.",r="";if(!n)o='<span class="intg-state">Not available yet</span>',s="Google Ads reporting is being set up for this platform.";else if(!a)r='<button type="button" class="intg-btn primary" id="intg-g-connect"><span class="material-symbols-outlined" aria-hidden="true">link</span>Connect</button>';else{const i=a.external_account?.customer_ids?.length||0;a.connect_status==="ACTIVE"?(o='<span class="intg-state on"><span class="material-symbols-outlined" aria-hidden="true">check</span>Connected</span>',s=i?`This connection can reach <b>${i}</b> ad account${i===1?"":"s"}. Choose which ones feed reporting; metrics refresh daily in Ad performance.`:"Connected, but no ad accounts are reachable from this Google account. Reconnect with an account that has Google Ads access.",r=`
        <button type="button" class="intg-btn" id="intg-g-accounts"><span class="material-symbols-outlined" aria-hidden="true">checklist</span>Choose accounts</button>
        <button type="button" class="intg-btn" id="intg-g-sync"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
        <button type="button" class="intg-btn danger" id="intg-g-disconnect"><span class="material-symbols-outlined" aria-hidden="true">link_off</span>Disconnect</button>`):(o=`<span class="intg-state warn"><span class="material-symbols-outlined" aria-hidden="true">priority_high</span>${se(a.connect_status==="NEEDS_REAUTH"?"Reconnect needed":"Connection error")}</span>`,s="The connection stopped working. Reconnect to resume daily metric refreshes.",r=`
        <button type="button" class="intg-btn primary" id="intg-g-connect"><span class="material-symbols-outlined" aria-hidden="true">link</span>Reconnect</button>
        <button type="button" class="intg-btn danger" id="intg-g-disconnect"><span class="material-symbols-outlined" aria-hidden="true">link_off</span>Disconnect</button>`)}return`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="intg-head">
          <span class="intg-mark"><span class="material-symbols-outlined" aria-hidden="true">ads_click</span></span>
          <div class="intg-title-wrap">
            <div class="intg-name-row"><span class="intg-name">Google Ads</span>${o}</div>
            <div class="intg-sub">Spend and clicks beside your leads.</div>
          </div>
          <div class="intg-actions">${r}</div>
        </div>
        <p class="intg-desc">${s}</p>
        <div id="intg-g-picker" style="display:none"></div>
      </div>
    </div>`}function gi(){const e=Aa(),t=D.providers?.calendly||[],a=t.find(l=>l.owner_guid===e)||t[0]||null,n=!!D.configured?.calendly;let o='<span class="intg-state">Not connected</span>',s="Connect Calendly and your magnets book real meetings: the Book button opens your calendar in the conversation, and confirmed bookings land on the lead automatically.",r="",i="";if(!n)o='<span class="intg-state">Not available yet</span>',s="Calendly booking is being set up for this platform.";else if(!a)r='<button type="button" class="intg-btn primary" id="intg-c-connect"><span class="material-symbols-outlined" aria-hidden="true">link</span>Connect</button>';else{const l=a.external_account||{};if(a.connect_status==="ACTIVE"){o='<span class="intg-state on"><span class="material-symbols-outlined" aria-hidden="true">check</span>Connected</span>',s=`Connected as <b>${[l.name,l.email&&`(${l.email})`].filter(Boolean).map(se).join(" ")||"your Calendly account"}</b>. Turn on Calendly booking per magnet under Magnets, in the Book call-to-action.`,r=`
        <button type="button" class="intg-btn danger" id="intg-c-disconnect"><span class="material-symbols-outlined" aria-hidden="true">link_off</span>Disconnect</button>`;const y=a.webhook||{};if(y.state==="active"){const _=y.last_received_tz?` Last booking received ${se(String(y.last_received_tz).slice(0,10))}.`:"";i=Xe(`Booking sync is on. Confirmed and canceled meetings update the lead automatically.${_}`)}else i=Xe("Booking sync is off: webhooks need a paid Calendly plan. Visitors can still book in the magnet; bookings just will not appear on the lead automatically. Reconnect after upgrading to turn it on.","error")}else o=`<span class="intg-state warn"><span class="material-symbols-outlined" aria-hidden="true">priority_high</span>${se(a.connect_status==="NEEDS_REAUTH"?"Reconnect needed":"Connection error")}</span>`,s="The connection stopped working. Reconnect to resume booking sync.",r=`
        <button type="button" class="intg-btn primary" id="intg-c-connect"><span class="material-symbols-outlined" aria-hidden="true">link</span>Reconnect</button>
        <button type="button" class="intg-btn danger" id="intg-c-disconnect"><span class="material-symbols-outlined" aria-hidden="true">link_off</span>Disconnect</button>`}return`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="intg-head">
          <span class="intg-mark"><span class="material-symbols-outlined" aria-hidden="true">event</span></span>
          <div class="intg-title-wrap">
            <div class="intg-name-row"><span class="intg-name">Calendly</span>${o}</div>
            <div class="intg-sub">Bookings on your magnets.</div>
          </div>
          <div class="intg-actions">${r}</div>
        </div>
        <p class="intg-desc">${s}</p>
        ${i}
      </div>
    </div>`}function hi(){const e=Aa(),t=D.providers?.callrail||[],a=t.find(i=>i.owner_guid===e)||t[0]||null;let n='<span class="intg-state">Not connected</span>',o="Paste a CallRail API key and tracked phone calls land in your Leads inbox, with the caller, source, and recording on the lead.",s="",r="";if(!a)s='<button type="button" class="intg-btn primary" id="intg-r-connect"><span class="material-symbols-outlined" aria-hidden="true">link</span>Connect</button>';else{const i=a.external_account||{};if(a.connect_status==="ACTIVE"){n='<span class="intg-state on"><span class="material-symbols-outlined" aria-hidden="true">check</span>Connected</span>',o=`Connected to <b>${[i.account_name,i.company_name].filter(Boolean).map(se).join(" · ")||"your CallRail account"}</b>. Tracked calls arrive as leads with source and recording attached.`,s=`
        <button type="button" class="intg-btn" id="intg-r-sync"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
        <button type="button" class="intg-btn danger" id="intg-r-disconnect"><span class="material-symbols-outlined" aria-hidden="true">link_off</span>Disconnect</button>`;const h=a.webhook||{};if(h.state==="active"){const y=h.last_received_tz?` Last call received ${se(String(h.last_received_tz).slice(0,10))}.`:"";r=Xe(`Call sync is on. New calls appear within minutes; a daily sweep catches anything missed.${y}`)}else r=Xe("Automatic call sync could not be set up in CallRail. Calls still arrive via the daily sweep and Sync now. Reconnect to retry the setup.","error")}else n='<span class="intg-state warn"><span class="material-symbols-outlined" aria-hidden="true">priority_high</span>Connection error</span>',o="The connection stopped working. Reconnect with a current CallRail API key.",s=`
        <button type="button" class="intg-btn primary" id="intg-r-connect"><span class="material-symbols-outlined" aria-hidden="true">link</span>Reconnect</button>
        <button type="button" class="intg-btn danger" id="intg-r-disconnect"><span class="material-symbols-outlined" aria-hidden="true">link_off</span>Disconnect</button>`}return`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="intg-head">
          <span class="intg-mark"><span class="material-symbols-outlined" aria-hidden="true">call</span></span>
          <div class="intg-title-wrap">
            <div class="intg-name-row"><span class="intg-name">CallRail</span>${n}</div>
            <div class="intg-sub">Calls in your leads inbox.</div>
          </div>
          <div class="intg-actions">${s}</div>
        </div>
        <p class="intg-desc">${o}</p>
        ${r}
        <div id="intg-r-setup" style="display:none"></div>
      </div>
    </div>`}function fi(){const e=document.getElementById("intg-body");e&&(e.innerHTML=mi()+gi()+hi(),document.getElementById("intg-g-connect")?.addEventListener("click",bi),document.getElementById("intg-g-sync")?.addEventListener("click",yi),document.getElementById("intg-g-disconnect")?.addEventListener("click",wi),document.getElementById("intg-g-accounts")?.addEventListener("click",on),document.getElementById("intg-c-connect")?.addEventListener("click",xi),document.getElementById("intg-c-disconnect")?.addEventListener("click",Ei),document.getElementById("intg-r-connect")?.addEventListener("click",Ai),document.getElementById("intg-r-sync")?.addEventListener("click",Ti),document.getElementById("intg-r-disconnect")?.addEventListener("click",Ci),D.autoOpenPicker&&(D.autoOpenPicker=!1,document.getElementById("intg-g-accounts")&&on()))}async function on(){const e=document.getElementById("intg-g-picker");if(e){e.style.display="",e.innerHTML=Xe("Loading your ad accounts…");try{const a=await(await fetch(`${re()}/m5t/v5/integrations/google_ads/accounts`)).json();if(!a.ok)throw new Error(a.error||"load failed");vi(a.data.accounts||[],new Set(a.data.linked||[]))}catch{e.innerHTML=Xe("Could not load your ad accounts. Try again, or reconnect if this keeps happening.","error")}}}function vi(e,t){const a=document.getElementById("intg-g-picker");if(!a)return;const n=e.map(o=>{const s=o.manager||o.error,r=o.manager?"Manager":o.error?"Unavailable":o.currency||"",i=t.has(o.id)&&!s;return`
      <label class="intg-acct${s?" disabled":""}">
        <input type="checkbox" data-intg-acct="${se(o.id)}" ${i?"checked":""} ${s?"disabled":""}>
        <span style="min-width:0">
          <span class="intg-acct__name">${se(o.name||"Account "+o.id)}</span>
          <div class="intg-acct__id">${se(o.id)}</div>
        </span>
        ${r?`<span class="intg-acct__badge">${se(r)}</span>`:"<span></span>"}
      </label>`}).join("");a.innerHTML=`
    <div class="intg-picker">
      <div class="intg-picker__head">
        <span>Accounts that feed reporting</span>
        <span style="font-weight:500">${e.filter(o=>!o.manager&&!o.error).length} selectable</span>
      </div>
      <div class="intg-picker__list">
        ${n||'<div class="intg-picker__empty">No ad accounts are reachable from this Google account.</div>'}
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="intg-picker-cancel">Cancel</button>
        <button type="button" class="intg-btn primary" id="intg-picker-save"><span class="material-symbols-outlined" aria-hidden="true">save</span>Save</button>
      </div>
    </div>`,document.getElementById("intg-picker-cancel")?.addEventListener("click",()=>{a.style.display="none"}),document.getElementById("intg-picker-save")?.addEventListener("click",_i)}async function _i(){const e=document.getElementById("intg-g-picker"),t=[...e?.querySelectorAll("input[data-intg-acct]:checked")||[]].map(n=>n.dataset.intgAcct),a=document.getElementById("intg-picker-save");a&&(a.disabled=!0);try{const o=await(await fetch(`${re()}/m5t/v5/integrations/google_ads/accounts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customer_ids:t})})).json();if(!o.ok)throw new Error(o.error||"save failed");K(`${o.data.linked} account${o.data.linked===1?"":"s"} linked. First sync is running.`,"success"),e&&(e.style.display="none"),Re()}catch{K("Could not save account selection.","error"),a&&(a.disabled=!1)}}async function bi(){if(!D.busy){D.busy=!0;try{const t=await(await fetch(`${re()}/m5t/v5/integrations/google_ads/connect`)).json();if(!t.ok||!t.data?.url)throw new Error(t.error||"connect failed");window.location.href=t.data.url}catch{K("Could not start the Google connection.","error"),D.busy=!1}}}async function yi(){if(D.busy)return;D.busy=!0;const e=document.getElementById("intg-g-sync");e&&(e.disabled=!0);try{const a=await(await fetch(`${re()}/m5t/v5/integrations/google_ads/sync`,{method:"POST"})).json();if(!a.ok)throw new Error(a.error||"sync failed");const o=(a.data?.connections?.[0]?.accounts||[]).filter(s=>s.error).length;K(o?`Sync finished with ${o} account error${o===1?"":"s"}.`:"Metrics synced.",o?"warning":"success")}catch{K("Sync failed.","error")}finally{D.busy=!1,e&&(e.disabled=!1),Re()}}async function wi(){if(!D.busy&&window.confirm("Disconnect Google Ads? Daily metric refreshes stop until reconnected.")){D.busy=!0;try{const t=await(await fetch(`${re()}/m5t/v5/integrations/google_ads`,{method:"DELETE"})).json().catch(()=>({}));if(!t.ok)throw new Error(t.error||"disconnect failed");K("Google Ads disconnected.","success")}catch{K("Disconnect failed.","error")}finally{D.busy=!1,Re()}}}async function xi(){if(!D.busy){D.busy=!0;try{const t=await(await fetch(`${re()}/m5t/v5/integrations/calendly/connect`)).json();if(!t.ok||!t.data?.url)throw new Error(t.error||"connect failed");window.location.href=t.data.url}catch{K("Could not start the Calendly connection.","error"),D.busy=!1}}}async function Ei(){if(!D.busy&&window.confirm("Disconnect Calendly? Magnet booking falls back to the built-in scheduler and booking sync stops.")){D.busy=!0;try{const t=await(await fetch(`${re()}/m5t/v5/integrations/calendly`,{method:"DELETE"})).json().catch(()=>({}));if(!t.ok)throw new Error(t.error||"disconnect failed");K("Calendly disconnected.","success")}catch{K("Disconnect failed.","error")}finally{D.busy=!1,Re()}}}function Ai(){const e=document.getElementById("intg-r-setup");e&&(e.style.display="",e.innerHTML=`
    <div class="intg-picker">
      <div class="intg-picker__head"><span>Connect CallRail</span></div>
      <div class="intg-form">
        <div>
          <label for="intg-r-key">API key</label>
          <input class="intg-input" id="intg-r-key" type="password" autocomplete="off" spellcheck="false" placeholder="Paste your CallRail API v3 key">
          <p class="intg-hint">Create one in CallRail under Integrations, then Data access, then API keys. Read-only is fine for calls; Allow Writes lets us register call sync for you.</p>
        </div>
        <div id="intg-r-pickers" hidden>
          <label for="intg-r-account">Account</label>
          <select class="intg-select" id="intg-r-account"></select>
          <label for="intg-r-company" style="margin-top:8px;display:block">Company (your client)</label>
          <select class="intg-select" id="intg-r-company"></select>
        </div>
        <p class="intg-hint" id="intg-r-status" role="status"></p>
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="intg-r-cancel">Cancel</button>
        <button type="button" class="intg-btn primary" id="intg-r-continue">Continue</button>
      </div>
    </div>`,document.getElementById("intg-r-cancel")?.addEventListener("click",()=>{e.style.display="none"}),document.getElementById("intg-r-continue")?.addEventListener("click",Si),document.getElementById("intg-r-key")?.focus())}const Le=e=>{const t=document.getElementById("intg-r-status");t&&(t.textContent=e)};async function Si(){const e=document.getElementById("intg-r-continue"),t=document.getElementById("intg-r-key")?.value.trim()||"",a=document.getElementById("intg-r-pickers");if(!t){Le("Paste an API key first.");return}if(a&&!a.hidden)return ki(t);e&&(e.disabled=!0),Le("Checking the key with CallRail…");try{const o=await(await fetch(`${re()}/m5t/v5/integrations/callrail/validate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_key:t})})).json();if(!o.ok){Le(o.error||"CallRail rejected that key.");return}const s=o.data.accounts||[],r=document.getElementById("intg-r-account");r&&(r.innerHTML=s.map(i=>`<option value="${se(i.id)}">${se(i.name)}</option>`).join(""),r.onchange=()=>sn(t,r.value)),a&&(a.hidden=!1),e&&(e.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">save</span>Save'),Le(""),await sn(t,s[0]?.id)}catch{Le("Could not reach CallRail. Try again.")}finally{e&&(e.disabled=!1)}}async function sn(e,t){const a=document.getElementById("intg-r-company");if(!(!a||!t)){a.innerHTML='<option value="">Loading companies…</option>';try{const o=await(await fetch(`${re()}/m5t/v5/integrations/callrail/companies`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_key:e,account_id:t})})).json(),s=o.ok?o.data.companies||[]:[];a.innerHTML=s.length?s.map(r=>`<option value="${se(r.id)}">${se(r.name)}</option>`).join(""):'<option value="">No active companies in this account</option>'}catch{a.innerHTML='<option value="">Could not load companies</option>'}}}async function ki(e){const t=document.getElementById("intg-r-continue"),a=document.getElementById("intg-r-account")?.value||"",n=document.getElementById("intg-r-company")?.value||"";if(!n){Le("Pick the company this workspace tracks.");return}t&&(t.disabled=!0),Le("Connecting…");try{const s=await(await fetch(`${re()}/m5t/v5/integrations/callrail`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_key:e,account_id:a,company_id:n})})).json();if(!s.ok)throw new Error(s.error||"connect failed");K(s.data?.webhook_state==="active"?"CallRail connected. Call sync is on.":"CallRail connected. Call sync setup needs attention; see the card.","success"),Re()}catch{Le("Could not connect. Check the key and try again."),t&&(t.disabled=!1)}}async function Ti(){if(D.busy)return;D.busy=!0;const e=document.getElementById("intg-r-sync");e&&(e.disabled=!0);try{const a=await(await fetch(`${re()}/m5t/v5/integrations/callrail/sync?days=7`,{method:"POST"})).json();if(!a.ok)throw new Error(a.error||"sync failed");const n=a.data?.connections?.[0]||{};K(n.error?"Sync finished with errors.":`Sync done. ${n.processed||0} new call${(n.processed||0)===1?"":"s"} recorded.`,n.error?"warning":"success")}catch{K("Sync failed.","error")}finally{D.busy=!1,e&&(e.disabled=!1),Re()}}async function Ci(){if(!D.busy&&window.confirm("Disconnect CallRail? Calls stop landing in your Leads inbox.")){D.busy=!0;try{const t=await(await fetch(`${re()}/m5t/v5/integrations/callrail`,{method:"DELETE"})).json().catch(()=>({}));if(!t.ok)throw new Error(t.error||"disconnect failed");K("CallRail disconnected.","success")}catch{K("Disconnect failed.","error")}finally{D.busy=!1,Re()}}}const Ii=Object.freeze(Object.defineProperty({__proto__:null,init:pi,render:di},Symbol.toStringTag,{value:"Module"})),$i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},j=e=>String(e??"").replace(/[&<>"']/g,t=>$i[t]),ia=()=>A.getConfig?.().BASE_URL||"",Jt=e=>Number(e||0).toLocaleString(),U={conversations:[],counts:{},magnetNames:{},filter:"ALL",book:!1,magnetOwnerNames:{}},rn={COMPLETED:{label:"Completed",icon:"check_circle"},IN_PROGRESS:{label:"In progress",icon:"pending"},ABANDONED:{label:"Abandoned",icon:"highlight_off"}},la={book:"Book",chat:"Chat",call:"Call",email:"Email",support:"Support"};function mo(e){return e&&([e.first_name,e.last_name].filter(Boolean).join(" ").trim()||e.email)||null}function go(e){return(e.split(/\s+/).slice(0,2).map(t=>t[0]||"").join("")||"?").toUpperCase()}function ho(e){try{return new Date(e).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return""}}function Li(e){try{const t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return""}}function fo(e){return e==null?"—":e<60?`${e}s`:`${Math.floor(e/60)}m ${String(e%60).padStart(2,"0")}s`}let ln=!1;function Ni(){if(ln)return;const e=document.createElement("style");e.id="m5t-convs-styles",e.textContent=`
    .page-shell .convs-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .convs-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .convs-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .convs-filter button.active { background: var(--color-bg, #fff); color: var(--color-primary-700, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .convs-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); margin-left: auto; }
    .page-shell .convs-tablewrap { overflow-x: auto; }
    .page-shell .convs-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .convs-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .convs-table td { padding: 10px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .convs-row { cursor: pointer; }
    .page-shell .convs-row:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .convs-who { display: flex; align-items: center; gap: 10px; }
    .page-shell .convs-ava { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.72rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .convs-ava.anon { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .convs-name { font-weight: 600; }
    .page-shell .convs-sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .convs-muted { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .convs-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .convs-badge .material-symbols-outlined { font-size: 13px; }
    .page-shell .convs-badge[data-s="COMPLETED"] { background: #DCFCE7; color: #047857; }
    .page-shell .convs-badge[data-s="IN_PROGRESS"] { background: #DBEAFE; color: #1D4ED8; }
    .page-shell .convs-badge[data-s="ABANDONED"] { background: #FEF3C7; color: #92400E; }
    .page-shell .convs-prog { display: inline-flex; align-items: center; gap: 8px; }
    .page-shell .convs-prog__track { width: 62px; height: 6px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); overflow: hidden; }
    .page-shell .convs-prog__fill { height: 100%; border-radius: 999px; background: var(--color-primary-600, #0072BA); }

    .convs-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .convs-drawer-scrim.open { opacity: 1; }
    .convs-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(420px, 94vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .convs-drawer.open { transform: translateX(0); }
    .convs-drawer__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .convs-drawer__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 700; }
    .convs-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .convs-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .convs-drawer__body { padding: 20px; overflow-y: auto; }
    .convs-tl { position: relative; margin: 6px 0 0 8px; padding-left: 20px; border-left: 2px solid var(--color-surface-2, #EAF0F7); display: flex; flex-direction: column; gap: 14px; }
    .convs-tl__item { position: relative; }
    .convs-tl__dot { position: absolute; left: -27px; top: 2px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-primary-600, #0072BA); border: 2px solid var(--color-bg, #fff); }
    .convs-tl__item.done .convs-tl__dot { background: #047857; }
    .convs-tl__label { font-size: 0.86rem; font-weight: 600; }
    .convs-tl__time { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .convs-drawer__lead { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 12px; margin-bottom: 16px; text-decoration: none; color: inherit; }
    .convs-drawer__lead:hover { background: var(--color-surface, #F7FAFD); }
    .convs-drawer__anon { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); background: var(--color-surface, #F4F7FB); border-radius: 10px; padding: 10px 12px; margin-bottom: 16px; }
  `,document.head.appendChild(e),ln=!0}const Gt=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`;function vo(){return Ni(),et(),`
    <div class="page-shell" data-section="conversations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Conversations</h1>
          <p class="page-description">${Q()?"All conversations across your clients.":"Every visitor journey through your magnets: completed, in progress, or abandoned."}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="convs-body">
          ${Gt("hourglass_empty","Loading journeys…")}
        </div>
      </div>
    </div>`}async function _o(){await Oi()}async function Oi(){const e=document.getElementById("convs-body");if(e){try{const[t,a]=await Promise.all([fetch(`${ia()}/m5t/v5/conversations`),fetch(`${ia()}/m5t/v5/magnets`).catch(()=>null)]),n=await t.json().catch(()=>({}));if(!n.ok)throw new Error(n.message||"Failed to load");if(U.conversations=n.conversations||[],U.counts=n.counts||{},U.book=Q(),a){const o=await a.json().catch(()=>({}));U.magnetNames={},U.magnetOwnerNames={};const s=U.book?eo():{};(o.magnets||[]).forEach(r=>{U.magnetNames[r.guid]=r.name,U.book&&(U.magnetOwnerNames[r.guid]=r.owner_name||s[r.owner_guid]||"")})}}catch(t){console.warn("[conversations] load failed:",t),e.innerHTML=Gt("error","Could not load journeys. Please try again.");return}bo()}}function Ri(){return U.filter==="ALL"?U.conversations:U.conversations.filter(e=>e.status===U.filter)}function Mi(e){const t=mo(e.lead),a=U.magnetNames[e.magnet_guid]||"—",n=rn[e.status]||rn.ABANDONED,o=e.steps_total?Math.min(100,Math.round((e.steps_reached||0)/e.steps_total*100)):null,s=(e.routes||[]).map(r=>la[r]||r).join(", ");return`
    <tr class="convs-row" data-session="${j(e.session)}">
      <td>
        <span class="convs-who">
          <span class="convs-ava${t?"":" anon"}">${t?j(go(t)):'<span class="material-symbols-outlined" style="font-size:16px">person_off</span>'}</span>
          <span><span class="convs-name">${t?j(t):'<span class="convs-muted">Anonymous visitor</span>'}</span>
            ${e.lead?.email?`<div class="convs-sub">${j(e.lead.email)}</div>`:s?`<div class="convs-sub">Picked: ${j(s)}</div>`:""}</span>
        </span>
      </td>
      ${U.book?`<td>${to(U.magnetOwnerNames[e.magnet_guid]||"")||'<span class="convs-muted">—</span>'}</td>`:""}
      <td><span class="convs-sub">${j(a)}</span></td>
      <td><span class="convs-badge" data-s="${j(e.status)}"><span class="material-symbols-outlined" aria-hidden="true">${n.icon}</span>${n.label}</span></td>
      <td>${o!=null?`<span class="convs-prog"><span class="convs-prog__track"><span class="convs-prog__fill" style="width:${o}%"></span></span><span class="convs-sub">${e.steps_reached}/${e.steps_total}</span></span>`:'<span class="convs-muted">—</span>'}</td>
      <td class="convs-muted" style="white-space:nowrap" title="${j(ho(e.started_at))}">${j(Li(e.started_at))}</td>
      <td class="convs-muted" style="white-space:nowrap">${j(fo(e.duration_s))}</td>
    </tr>`}function bo(){const e=document.getElementById("convs-body");if(!e)return;if(!U.conversations.length){e.innerHTML=Gt("route","No journeys yet. As visitors open your magnets, every session, completed or abandoned, appears here.");return}const t=Ri(),a=[["ALL","All"],["COMPLETED","Completed"],["IN_PROGRESS","In progress"],["ABANDONED","Abandoned"]];e.innerHTML=`
    <div class="convs-bar">
      <div class="convs-filter">
        ${a.map(([n,o])=>`<button data-filter="${n}" class="${U.filter===n?"active":""}">${o}${n!=="ALL"&&U.counts[n]?` (${Jt(U.counts[n])})`:""}</button>`).join("")}
      </div>
      <span class="convs-count">${Jt(t.length)} of ${Jt(U.conversations.length)} (30 days)</span>
    </div>
    <div class="convs-tablewrap">
      <table class="convs-table">
        <thead><tr><th>Visitor</th>${U.book?"<th>Client</th>":""}<th>Magnet</th><th>Status</th><th>Progress</th><th>Started</th><th>Duration</th></tr></thead>
        <tbody id="convs-tbody">${t.map(Mi).join("")||`<tr><td colspan="${U.book?7:6}"><div class="convs-muted" style="padding:14px 4px">No ${U.filter.toLowerCase().replace("_"," ")} journeys.</div></td></tr>`}</tbody>
      </table>
    </div>`,e.querySelector(".convs-filter")?.addEventListener("click",n=>{const o=n.target.closest("[data-filter]");o&&(U.filter=o.dataset.filter,bo())}),e.querySelector("#convs-tbody")?.addEventListener("click",n=>{const o=n.target.closest(".convs-row");o&&Pi(o.dataset.session)})}const Fi={open:()=>"Opened the magnet",engage:e=>`First interaction${e?`: ${la[e]||e}`:""}`,route:e=>`Picked ${la[e]||e||"a channel"}`,step:e=>`Reached step ${e||""}`,complete:()=>"Completed: lead captured"};async function Pi(e){const t=U.conversations.find(c=>c.session===e);if(!t)return;let a=null;try{a=await(await fetch(`${ia()}/m5t/v5/conversations/${encodeURIComponent(e)}`)).json().catch(()=>null),a?.ok||(a=null)}catch{a=null}const n=mo(t.lead),o=U.magnetNames[t.magnet_guid]||"—",r=(a?.events||[]).filter((c,h,y)=>c.event!=="step"||!(y[h+1]&&y[h+1].event==="step")).map(c=>`
    <div class="convs-tl__item${c.event==="complete"?" done":""}">
      <span class="convs-tl__dot"></span>
      <div class="convs-tl__label">${j((Fi[c.event]||(()=>c.event))(c.detail))}</div>
      <div class="convs-tl__time">${j(ho(c.at))}${c.variant?` · Variant ${j(c.variant)}`:""}</div>
    </div>`).join(""),i=document.createElement("div");i.className="convs-drawer-scrim",i.innerHTML=`
    <aside class="convs-drawer" role="dialog" aria-modal="true" aria-label="Journey detail">
      <div class="convs-drawer__head">
        <span class="convs-drawer__title">${n?j(n):"Anonymous visitor"}</span>
        <button class="convs-drawer__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="convs-drawer__body">
        ${n?`<a class="convs-drawer__lead" href="#/leads">
              <span class="convs-ava">${j(go(n))}</span>
              <span><div class="convs-name">${j(n)}</div><div class="convs-sub">${j(t.lead?.email||t.lead?.phone||"")}</div></span>
              <span class="material-symbols-outlined" style="margin-left:auto;color:var(--color-text-subtle,#6C7C9A)">chevron_right</span>
            </a>`:'<div class="convs-drawer__anon">This visitor didn’t finish, so no contact details were captured. Answers are only collected when a journey completes.</div>'}
        <div class="convs-sub" style="margin-bottom:6px">${j(o)} · ${j(fo(t.duration_s))}${t.variant?` · Variant ${j(t.variant)}`:""}</div>
        ${r?`<div class="convs-tl">${r}</div>`:Gt("timeline","No timeline available for this journey.")}
      </div>
    </aside>`,document.body.appendChild(i),requestAnimationFrame(()=>{i.classList.add("open"),i.querySelector(".convs-drawer").classList.add("open")});const l=()=>{i.classList.remove("open"),setTimeout(()=>i.remove(),220)};i.querySelector(".convs-drawer__close").addEventListener("click",l),i.addEventListener("click",c=>{c.target===i&&l()})}const Di={render:vo,init:_o},Bi=Object.freeze(Object.defineProperty({__proto__:null,default:Di,init:_o,render:vo},Symbol.toStringTag,{value:"Module"})),Ui={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},De=e=>String(e??"").replace(/[&<>"']/g,t=>Ui[t]),cn=(e,t="info")=>{try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}},wt=()=>A.getConfig?.().BASE_URL||"",Qe=e=>Number(e||0).toLocaleString(),Oe={magnets:[],stats:{},canManage:!1},Gi={mag_title:"header title",mag_subtitle:"subtitle",mag_welcome:"welcome message",mag_theme_color:"color",mag_launcher_label:"launcher label"};let dn=!1;function Hi(){if(dn)return;const e=document.createElement("style");e.id="m5t-abt-styles",e.textContent=`
    .page-shell .abt-card { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px); background: var(--color-bg, #fff); padding: 20px 22px; margin-bottom: 18px; }
    .page-shell .abt-head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .page-shell .abt-name { font-size: 1.05rem; font-weight: 700; margin: 0; }
    .page-shell .abt-status { display: inline-flex; align-items: center; gap: 6px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; }
    .page-shell .abt-status.running { background: #DCFCE7; color: #047857; }
    .page-shell .abt-status.completed { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-status .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: #047857; }
    .page-shell .abt-actions { margin-left: auto; display: flex; gap: 8px; }
    .page-shell .abt-meta { display: flex; gap: 18px; flex-wrap: wrap; margin: 10px 0 16px; font-size: 0.8rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-meta span { display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .abt-meta .material-symbols-outlined { font-size: 16px; color: var(--color-text-subtle, #6C7C9A); }

    .page-shell .abt-compare { display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px; align-items: stretch; }
    .page-shell .abt-variant { border: 1.5px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 12px); padding: 14px 16px; }
    .page-shell .abt-variant.leader { border-color: #047857; background: #F0FDF4; }
    .page-shell .abt-vhead { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
    .page-shell .abt-vname { font-weight: 700; font-size: 0.92rem; }
    .page-shell .abt-vtag { font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-vtag.win { background: #DCFCE7; color: #047857; }
    .page-shell .abt-vdesc { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 10px; }
    .page-shell .abt-mrow { display: flex; justify-content: space-between; align-items: baseline; padding: 6px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.84rem; }
    .page-shell .abt-mrow:last-child { border-bottom: 0; }
    .page-shell .abt-mrow .k { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .abt-mrow .v { font-weight: 700; }
    .page-shell .abt-mrow.hl .v { font-size: 1.25rem; color: var(--color-primary-700, #00558D); }
    .page-shell .abt-variant.leader .abt-mrow.hl .v { color: #047857; }
    .page-shell .abt-improve { font-size: 0.72rem; font-weight: 700; color: #047857; margin-left: 6px; }
    .page-shell .abt-vs { align-self: center; display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; background: var(--color-surface-2, #EAF0F7); font-weight: 800; font-size: 0.76rem; color: var(--color-text-muted, #4A5A78); }

    .page-shell .abt-sig { margin-top: 16px; }
    .page-shell .abt-sig__bar { height: 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); overflow: hidden; }
    .page-shell .abt-sig__fill { height: 100%; border-radius: 999px; background: var(--color-primary-600, #0072BA); }
    .page-shell .abt-sig__fill.sig { background: #047857; }
    .page-shell .abt-sig__text { display: flex; align-items: center; gap: 6px; margin-top: 7px; font-size: 0.8rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-sig__text .material-symbols-outlined { font-size: 16px; }

    .page-shell .abt-summary { display: flex; gap: 26px; flex-wrap: wrap; margin-top: 8px; font-size: 0.84rem; }
    .page-shell .abt-summary .k { color: var(--color-text-subtle, #6C7C9A); margin-right: 6px; }
    .page-shell .abt-summary .v { font-weight: 700; }
    .page-shell .abt-summary .v.pos { color: #047857; }
    .page-shell .abt-sect { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 22px 0 10px; }
    @media (max-width: 640px) { .page-shell .abt-compare { grid-template-columns: 1fr; } .page-shell .abt-vs { display: none; } }
  `,document.head.appendChild(e),dn=!0}const Sa=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`;function yo(){return Q()?dt({section:"ab-testing",title:"A/B Testing",description:"Pick a client to view their experiments."}):(Hi(),`
    <div class="page-shell" data-section="ab-testing">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">A/B Testing</h1>
          <p class="page-description">Compare magnet variants to optimize conversion rates.</p>
        </div>
        <a class="btn btn-primary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          Create New Test
        </a>
      </div>
      <div id="abt-body">${Sa("hourglass_empty","Loading tests…")}</div>
    </div>`)}async function ka(){if(Q())return tt(wt(),[{h:"Running",td:t=>Qe(t.ab_tests?.running)},{h:"Completed",td:t=>Qe(t.ab_tests?.completed)},{h:"Compl. %",td:t=>t.completion_rate!=null?`${t.completion_rate}%`:"—"}],{emptyMsg:"No client orgs yet. Experiments appear per client once you have one."});const e=document.getElementById("abt-body");try{const t=new Date,a=new Date(t.getTime()-89*864e5).toISOString().slice(0,10),n=t.toISOString().slice(0,10),[o,s]=await Promise.all([fetch(`${wt()}/m5t/v5/magnets`),fetch(`${wt()}/m5t/v5/magnets/stats?from=${a}&to=${n}`)]),r=await o.json().catch(()=>({}));if(!r.ok)throw new Error(r.message||"Failed to load");Oe.magnets=r.magnets||[],Oe.canManage=!!r.canManage;const i=await s.json().catch(()=>({}));Oe.stats=i?.stats||{}}catch(t){console.warn("[ab-testing] load failed:",t),e&&(e.innerHTML=Sa("error","Could not load your tests. Please try again."));return}zi()}function zi(){const e=document.getElementById("abt-body");if(!e)return;const t=Oe.magnets.filter(n=>n.ab?.enabled),a=Oe.magnets.filter(n=>!n.ab?.enabled&&n.ab?.declared);if(!t.length&&!a.length){e.innerHTML=Sa("science","No experiments yet. Open a magnet on Your Magnets → Edit → “A/B experiment”, give variant B a change, and results appear here.");return}e.innerHTML=(t.length?`<div class="abt-sect">Running</div>${t.map(Wi).join("")}`:"")+(a.length?`<div class="abt-sect">Completed Tests</div>${a.map(Yi).join("")}`:""),e.querySelectorAll("[data-declare]").forEach(n=>n.addEventListener("click",()=>Ki(n.dataset.declare,n.dataset.winner)))}function Vi(e){const t=Oe.stats[e.guid]?.variants||{},a={opens:0,engaged:0,completions:0,rate:null,...t.A||{}},n={opens:0,engaged:0,completions:0,rate:null,...t.B||{}};return{A:a,B:n}}function qi(e){const t=Object.keys(e?.b||{}).map(a=>Gi[a]||a);return t.length?`Changes: ${t.join(", ")}`:""}function ji(e){try{return Math.max(0,Math.floor((Date.now()-new Date(e).getTime())/864e5))}catch{return null}}function pn(e,t,a,n,o,s){return`
    <div class="abt-variant${o?" leader":""}">
      <div class="abt-vhead"><span class="abt-vname">${De(e)}</span><span class="abt-vtag${o?" win":""}">${De(t)}</span></div>
      ${a?`<div class="abt-vdesc">${De(a)}</div>`:""}
      <div class="abt-mrow"><span class="k">Visitors</span><span class="v">${Qe(n.opens)}</span></div>
      <div class="abt-mrow"><span class="k">Completions</span><span class="v">${Qe(n.completions)}</span></div>
      <div class="abt-mrow hl"><span class="k">Conversion Rate</span><span class="v">${n.rate!=null?n.rate+"%":"—"}${s?`<span class="abt-improve">${s}</span>`:""}</span></div>
    </div>`}function Wi(e){const t=e.ab,{A:a,B:n}=Vi(e),o=(n.rate??-1)>(a.rate??-1)?"B":(a.rate??-1)>(n.rate??-1)?"A":null,s=o&&a.rate!=null&&n.rate!=null?`+${Math.round(Math.abs(n.rate-a.rate)*10)/10}%`:"",r=Ji(a,n),i=t.started_tz?ji(t.started_tz):null,l=(a.opens||0)+(n.opens||0),c=t.split||50;return`
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${De(e.name)}</h2>
        <span class="abt-status running"><span class="pulse-dot"></span>Running</span>
        <div class="abt-actions">
          ${Oe.canManage&&o?`<button class="btn btn-primary" type="button" data-declare="${De(e.guid)}" data-winner="${o}"><span class="material-symbols-outlined" aria-hidden="true">emoji_events</span>Declare Winner</button>`:""}
        </div>
      </div>
      <div class="abt-meta">
        ${i!=null?`<span><span class="material-symbols-outlined" aria-hidden="true">schedule</span>Started ${i===0?"today":`${i} day${i===1?"":"s"} ago`}</span>`:""}
        <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span>${Qe(l)} total visitors</span>
        <span><span class="material-symbols-outlined" aria-hidden="true">swap_horiz</span>${100-c}/${c} traffic split</span>
      </div>
      <div class="abt-compare">
        ${pn("Variant A","Control","The magnet as configured",a,o==="A",o==="A"?s:"")}
        <div class="abt-vs">VS</div>
        ${pn("Variant B",o==="B"?"Leading":"Challenger",qi(t),n,o==="B",o==="B"?s:"")}
      </div>
      <div class="abt-sig">
        <div class="abt-sig__bar"><div class="abt-sig__fill${r!=null&&r>=95?" sig":""}" style="width:${r!=null?Math.min(100,r):0}%"></div></div>
        <div class="abt-sig__text">
          <span class="material-symbols-outlined" aria-hidden="true">${r!=null&&r>=95?"check_circle":"hourglass_top"}</span>
          ${r!=null?`<span><strong>${r}% Statistical Confidence</strong>: results ${r>=95?"are statistically significant":"are not yet significant; keep it running"}</span>`:"<span>Not enough data yet. Confidence appears after ~30 visitors per variant.</span>"}
        </div>
      </div>
    </div>`}function Yi(e){const t=e.ab.declared,a=t.A?.opens?t.A.completions/t.A.opens*100:null,n=t.B?.opens?t.B.completions/t.B.opens*100:null,o=a!=null&&n!=null&&Math.min(a,n)>0?Math.round(Math.abs(n-a)/Math.min(a,n)*100):null,s=e.ab.started_tz&&t.tz?Math.max(1,Math.round((new Date(t.tz)-new Date(e.ab.started_tz))/864e5)):null,r=(t.A?.opens||0)+(t.B?.opens||0);return`
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${De(e.name)}</h2>
        <span class="abt-status completed"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:14px">check_circle</span>Completed</span>
      </div>
      <div class="abt-summary">
        <span><span class="k">Winner:</span><span class="v">Variant ${De(t.winner)}</span></span>
        ${o!=null?`<span><span class="k">Improvement:</span><span class="v pos">+${o}%</span></span>`:""}
        ${s!=null?`<span><span class="k">Duration:</span><span class="v">${s} day${s===1?"":"s"}</span></span>`:""}
        <span><span class="k">Total Visitors:</span><span class="v">${Qe(r)}</span></span>
      </div>
    </div>`}async function Ki(e,t){const a=Oe.magnets.find(n=>n.guid===e);if(a&&window.confirm(`Declare Variant ${t} the winner for “${a.name}”?

${t==="B"?"Variant B’s changes become the magnet’s configuration for everyone.":"The magnet keeps its current configuration."} The experiment ends and moves to Completed.`)){try{const o=await(await fetch(`${wt()}/m5t/v5/magnets/${encodeURIComponent(e)}/ab/declare`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({winner:t})})).json().catch(()=>({}));if(!o.ok)throw new Error(o.message||"Declare failed");cn(`Variant ${t} declared the winner`,"success")}catch(n){cn(n.message||"Could not declare a winner","danger");return}try{await ka()}catch(n){console.warn("[ab-testing] refresh after declare failed:",n)}}}function Ji(e,t){const a=e.opens||0,n=t.opens||0,o=e.completions||0,s=t.completions||0;if(a<30||n<30||o+s<5)return null;const r=o/a,i=s/n,l=(o+s)/(a+n),c=Math.sqrt(l*(1-l)*(1/a+1/n));if(!c)return null;const h=Math.abs(i-r)/c;return Math.round(2*(Xi(h)-.5)*1e3)/10}function Xi(e){const t=1/(1+.2316419*Math.abs(e)),n=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return e>0?1-n:n}const Qi={render:yo,init:ka},Zi=Object.freeze(Object.defineProperty({__proto__:null,default:Qi,init:ka,render:yo},Symbol.toStringTag,{value:"Module"})),el={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Z=e=>String(e??"").replace(/[&<>"']/g,t=>el[t]),wo=()=>A.getConfig?.().BASE_URL||"",tl={single_select:{icon:"quiz",color:"#0072BA"},multi_select:{icon:"checklist",color:"#0E6BA8"},scheduler:{icon:"event",color:"#915E8B"},text:{icon:"short_text",color:"#5B54C6"},email:{icon:"mail",color:"#0E8F86"},phone:{icon:"call",color:"#2E8B57"},message:{icon:"chat",color:"#B4791F"}},Lt={};ba.forEach(e=>{Lt[e.value]={label:e.label,...tl[e.value]||{icon:"quiz",color:"#0072BA"}}});const xo=ba.map(e=>e.value),Eo={chat:"Chat / default",book:"Book (scheduler)",support:"Support (intake)"},Ta=e=>Lt[e]||Lt.single_select,Ve=e=>e==="single_select"||e==="multi_select",Ht=e=>e!=="message",pt=e=>e==="scheduler",Nt=e=>e==="email"?"email":e==="phone"?"phone":"",Ge=()=>({meeting_label:"",start:"09:00",end:"17:00",mins:30,days:14}),al=[["","No icon"],["event","Calendar"],["schedule","Clock"],["mail","Email"],["sms","Text"],["phone","Phone"],["chat","Chat"],["description","Document"],["help","Question"],["place","Location"],["person","Person"],["bolt","Quick"],["check_circle","Check"],["star","Star"],["home","Home"],["build","Service"]];function nl(e,t){const a=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(e||"").trim());return a?`rgba(${parseInt(a[1],16)},${parseInt(a[2],16)},${parseInt(a[3],16)},${t})`:`rgba(0,114,186,${t})`}let un=!1;function ol(){if(un)return;const e=document.createElement("style");e.id="m5t-flow-styles",e.textContent=`
    .mag-modal.mag-flow { width: min(680px, 94vw); }
    .flow-routes { display: flex; align-items: center; gap: 10px; margin: 4px 0 14px; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB); }
    .flow-routes__lbl { font-size: 0.78rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); }
    .flow-routes select { flex: 1 1 auto; }
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
  `,document.head.appendChild(e),un=!0}let P=[],we=null,sl=0,$e=null,Fe=null,Pe="chat",de={},xt=[],Ao=null,ca=null,Et="";const Ze=()=>"f"+ ++sl;function Ca(e="single_select"){return{_uid:Ze(),id:"",step_type:e,step_prompts:[""],step_options:Ve(e)?[{label:"",goto:"",icon:""},{label:"",goto:"",icon:""}]:[],step_columns:Nt(e)?[Nt(e)]:[],step_description:"",step_config:pt(e)?Ge():null}}function rl(e){return(Array.isArray(e)?e:[]).map(t=>({_uid:Ze(),id:t.id!=null?String(t.id):"",step_type:Lt[t.step_type]?t.step_type:"single_select",step_prompts:Array.isArray(t.step_prompts)?t.step_prompts.map(String):[],step_options:(Array.isArray(t.step_options)?t.step_options:[]).map(a=>({label:a&&a.label!=null?String(a.label):"",goto:a&&a.goto!=null?String(a.goto):"",icon:a&&a.icon!=null?String(a.icon):""})),step_columns:Array.isArray(t.step_columns)?t.step_columns.map(String):[],step_description:t.step_description!=null?String(t.step_description):"",step_config:t.step_config&&typeof t.step_config=="object"?{...Ge(),...t.step_config}:t.step_type==="scheduler"?Ge():null}))}function mn(){return[{_uid:Ze(),id:"",step_type:"text",step_prompts:["Great, and your name?"],step_options:[],step_columns:["first_name"],step_description:"",step_config:null},{_uid:Ze(),id:"",step_type:"email",step_prompts:["The best email to reach you?"],step_options:[],step_columns:["email"],step_description:"",step_config:null}]}function il(e,t){if(e==="book")return[{_uid:Ze(),id:"",step_type:"scheduler",step_prompts:["When works best for you?"],step_options:[],step_columns:[],step_description:"",step_config:Ge()},...mn()];if(e==="support"){const a=(t.actions||[]).find(s=>s&&s.type==="support"),n=a&&a.config&&Array.isArray(a.config.options)?a.config.options:[],o=n.length?n.map(s=>({label:s&&s.label||String(s),goto:"",icon:s&&s.icon||""})):["Sales enquiry","Support","Billing","Something else"].map(s=>({label:s,goto:"",icon:""}));return[{_uid:Ze(),id:"",step_type:"multi_select",step_prompts:["How can we help you today?"],step_options:o,step_columns:[],step_description:"Select all that apply",step_config:null},...mn()]}return[Ca("single_select")]}function So(e,t){const a=e==="chat"?t.steps:t.routes&&t.routes[e],n=rl(a);return n.length?n:e==="chat"?[Ca("single_select")]:il(e,t)}function ll(e){Ve(e.step_type)?e.step_options.length||(e.step_options=[{label:"",goto:"",icon:""},{label:"",goto:"",icon:""}]):e.step_options=[],Ht(e.step_type)?!e.step_columns.length&&Nt(e.step_type)&&(e.step_columns=[Nt(e.step_type)]):e.step_columns=[],e.step_config=pt(e.step_type)?e.step_config||Ge():null}function cl(e,t){return`<div class="flow-opt">
    <input class="mag-modal__input flow-o-label" type="text" value="${Z(e.label)}" placeholder="Option label">
    <select class="mag-modal__select flow-o-icon" title="Icon">${al.map(([a,n])=>`<option value="${Z(a)}"${a===e.icon?" selected":""}>${Z(n)}</option>`).join("")}</select>
    <button class="flow-opt__del" type="button" data-x="delopt" title="Remove choice"${t?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
  </div>`}function dl(e){const t=xo.map(n=>`<option value="${n}"${n===e.step_type?" selected":""}>${Z(Ta(n).label)}</option>`).join(""),a=e.step_options.length<=1;return`<div class="flow-node__body">
    <label class="mag-modal__label">Step type</label>
    <select class="mag-modal__select flow-f-type">${t}</select>

    <label class="mag-modal__label">${e.step_type==="message"?"Message":"Question"} <span class="flow-sub">one bubble per line</span></label>
    <textarea class="mag-modal__input flow-f-prompts" rows="2" placeholder="${e.step_type==="message"?"Thanks! One moment…":"What can we help you with?"}">${Z(e.step_prompts.join(`
`))}</textarea>

    ${Ht(e.step_type)?`
    <label class="mag-modal__label">Saves to</label>
    <select class="mag-modal__select flow-f-field">
      <option value=""${e.step_columns[0]?"":" selected"} disabled>Choose a lead field…</option>
      ${_a.map(n=>`<option value="${Z(n.value)}"${n.value===e.step_columns[0]?" selected":""}>${Z(n.label)}</option>`).join("")}
    </select>
    <p class="mag-modal__hint">The lead record field this answer fills in — these are the only fields a magnet can actually save to.</p>`:""}

    ${Ve(e.step_type)?`
    <label class="mag-modal__label">Choices${e.step_type==="multi_select"?' <span class="flow-sub">visitor can pick several</span>':""}</label>
    <div class="flow-opts">${e.step_options.map(n=>cl(n,a)).join("")}</div>
    <button class="mag-flow__addopt" type="button" data-x="addopt"><span class="material-symbols-outlined" aria-hidden="true">add</span> Add choice</button>`:""}

    ${pt(e.step_type)?`
    <label class="mag-modal__label">Meeting label <span class="flow-sub">optional</span></label>
    <input class="mag-modal__input flow-f-mtlabel" type="text" value="${Z(e.step_config?.meeting_label||"")}" placeholder="e.g. 15 minute call">
    <div class="mag-modal__row" style="margin-top:8px">
      <div><label class="mag-modal__label">From</label><input class="mag-modal__input flow-f-start" type="time" value="${Z(e.step_config?.start||"09:00")}"></div>
      <div><label class="mag-modal__label">To</label><input class="mag-modal__input flow-f-end" type="time" value="${Z(e.step_config?.end||"17:00")}"></div>
      <div style="flex:0 0 auto"><label class="mag-modal__label">Slot</label>
        <select class="mag-modal__select flow-f-mins">${[15,30,45,60].map(n=>`<option value="${n}"${(e.step_config?.mins||30)===n?" selected":""}>${n} min</option>`).join("")}</select></div>
    </div>
    <p class="mag-modal__hint">Visitors pick a day + time within these hours; the choice saves to the field above.</p>`:""}
  </div>`}function pl(e){const t=e.step_prompts.find(o=>String(o).trim()!=="")||"",a=t?`<div class="flow-node__prompt">“${Z(t)}”</div>`:`<div class="flow-node__prompt is-empty">${e.step_type==="message"?"No message yet":"No question yet"}</div>`;let n="";if(Ve(e.step_type)){const o=e.step_options.map(s=>String(s.label).trim()).filter(Boolean);if(o.length){const s=o.slice(0,4).map(i=>`<span class="flow-node__chip">${Z(i)}</span>`).join(""),r=o.length>4?`<span class="flow-node__chip">+${o.length-4}</span>`:"";n=`<div class="flow-node__chips">${s}${r}</div>`}}else if(Ht(e.step_type)&&e.step_columns[0]){const o=_a.find(s=>s.value===e.step_columns[0])?.label||e.step_columns[0];n=`<div class="flow-node__meta">Saves to <b>${Z(o)}</b></div>`}return`<div class="flow-node__preview">${a}${n}</div>`}function ul(e,t,a){const n=Ta(e.step_type),o=e._uid===we,s=`--nc:${n.color};--nct:${nl(n.color,.14)}`;return`<div class="flow-node${o?" flow-node--open":""}" data-uid="${e._uid}" style="${s}"${o?"":' draggable="true"'}>
    <div class="flow-node__hd">
      <span class="flow-node__grip" title="${o?"":"Drag to reorder"}"><span class="material-symbols-outlined" aria-hidden="true">${o?"expand_less":"drag_indicator"}</span></span>
      <span class="flow-node__ico"><span class="material-symbols-outlined" aria-hidden="true">${n.icon}</span></span>
      <span class="flow-node__type">${Z(n.label)}</span>
      <span class="flow-node__n">Step ${t+1}</span>
      <span class="flow-node__tools">
        <button type="button" data-x="up" title="Move up"${t===0?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span></button>
        <button type="button" data-x="down" title="Move down"${t===a-1?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span></button>
        <button type="button" data-x="del" title="Delete step"${a===1?" disabled":""}><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </span>
    </div>
    ${o?dl(e):pl(e)}
  </div>`}const gn='<div class="flow-conn"><span class="flow-conn__line"></span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></div>';function ge(){const e=document.getElementById("flow-nodes");if(!e)return;const t=P.length,a=['<div class="flow-start"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Conversation starts</div>',gn];P.forEach((n,o)=>{a.push(ul(n,o,t)),o<t-1&&a.push(gn)}),e.innerHTML=a.join("")}function xe(){const e=document.querySelector(".flow-node--open");if(!e)return;const t=P.find(s=>s._uid===e.dataset.uid);if(!t)return;const a=e.querySelector(".flow-f-type");a&&(t.step_type=a.value);const n=e.querySelector(".flow-f-prompts");n&&(t.step_prompts=n.value.split(`
`));const o=e.querySelector(".flow-f-field");if(t.step_columns=o&&o.value.trim()?[o.value.trim()]:[],Ve(t.step_type)){const s=t.step_options,r=[];e.querySelectorAll(".flow-opt").forEach((i,l)=>{r.push({label:i.querySelector(".flow-o-label")?.value??"",icon:i.querySelector(".flow-o-icon")?.value??"",goto:s[l]&&s[l].goto||""})}),t.step_options=r}else t.step_options=[];if(pt(t.step_type)){const s=e.querySelector(".flow-f-mtlabel"),r=e.querySelector(".flow-f-start"),i=e.querySelector(".flow-f-end"),l=e.querySelector(".flow-f-mins");t.step_config={...t.step_config||Ge(),...s?{meeting_label:s.value.trim()}:{},...r&&r.value?{start:r.value}:{},...i&&i.value?{end:i.value}:{},...l?{mins:parseInt(l.value,10)||30}:{}}}else t.step_config=null}function ko(){document.querySelectorAll(".flow-node.drop-before, .flow-node.drop-after").forEach(e=>e.classList.remove("drop-before","drop-after"))}function ot(){ko(),document.querySelectorAll(".flow-node.dragging").forEach(e=>e.classList.remove("dragging")),$e=null,Fe=null}function ml(e=P){if(!e.length)return"Add at least one step.";for(let t=0;t<e.length;t++){const a=e[t],n=t+1;if(!a.step_prompts.some(o=>String(o).trim()!==""))return`Step ${n}: add what the magnet should say.`;if(Ve(a.step_type)&&!a.step_options.some(o=>String(o.label).trim()!==""))return`Step ${n}: add at least one choice.`;if(Ht(a.step_type)&&!a.step_columns.length)return`Step ${n}: choose which field this answer saves to.`}return""}function da(e=P){let t=0;return e.forEach(a=>{const n=parseInt(a.id,10);!isNaN(n)&&n>t&&(t=n)}),e.map(a=>{const n=a.id&&String(a.id).trim()?String(a.id):String(++t),o=Ve(a.step_type)?a.step_options.map(r=>{const i={label:String(r.label).trim(),goto:String(r.goto||"")};return r.icon&&(i.icon=String(r.icon)),i}).filter(r=>r.label!==""):[],s={id:n,step_type:a.step_type,step_prompts:a.step_prompts.map(r=>String(r)).filter(r=>r.trim()!==""),step_options:o,step_columns:a.step_columns.slice(),step_description:a.step_description||""};return pt(a.step_type)&&a.step_config&&(s.step_config={...Ge(),...a.step_config}),s})}function gl(e,t,a){ol(),Ao=t,ca=typeof a=="function"?a:null,Et=t?.modified_tz||"",xt=["chat",...["book","support"].filter(n=>(t.actions||[]).some(o=>o&&o.type===n))],de={chat:So("chat",t)},Pe="chat",P=de.chat,we=P.length===1?P[0]._uid:null,$e=null,Fe=null,e.innerHTML=`
    <p class="mag-modal__hint" style="margin-top:0">Each card is one thing your magnet asks. Drag a card to reorder, click to edit, add steps from the palette below.</p>
    ${xt.length>1?`<div class="flow-routes"><span class="flow-routes__lbl">Editing flow</span><select class="mag-modal__select" id="flow-route">${xt.map(n=>`<option value="${n}">${Z(Eo[n]||n)}</option>`).join("")}</select></div>`:""}
    <div class="flow-canvas" id="flow-nodes"></div>
    <div class="flow-palette">
      <p class="flow-palette__t">Add a step</p>
      <div class="flow-palette__grid" id="flow-palette">
        ${xo.map(n=>{const o=Ta(n);return`<button class="flow-palette__chip" type="button" data-type="${n}" style="--pc:${o.color}"><span class="material-symbols-outlined" aria-hidden="true">${o.icon}</span>${Z(o.label)}</button>`}).join("")}
      </div>
    </div>
    <p class="mag-modal__error" id="flow-error"></p>`,ge(),hl(e)}function Te(){ca&&ca()}function We(){const e=document.getElementById("flow-error");e&&(e.textContent="")}function hl(e){const t=e.querySelector("#flow-nodes"),a=e.querySelector("#flow-route");a?.addEventListener("change",()=>{xe(),Pe=a.value,de[Pe]||(de[Pe]=So(Pe,Ao)),P=de[Pe],we=P.length===1?P[0]._uid:null,We(),ge()});const n=o=>{We();const s=we;xe(),we=we===o?null:o,s&&Te(),ge()};t.addEventListener("click",o=>{const s=o.target.closest("button[data-x]"),r=o.target.closest(".flow-node");if(!r)return;const i=P.findIndex(l=>l._uid===r.dataset.uid);if(!(i<0)){if(s){const l=s.dataset.x;if(We(),xe(),l==="up"&&i>0)[P[i-1],P[i]]=[P[i],P[i-1]],Te(),ge();else if(l==="down"&&i<P.length-1)[P[i+1],P[i]]=[P[i],P[i+1]],Te(),ge();else if(l==="del"&&P.length>1)we===r.dataset.uid&&(we=null),P.splice(i,1),Te(),ge();else if(l==="addopt")P[i].step_options.push({label:"",goto:"",icon:""}),Te(),ge();else if(l==="delopt"){const c=s.closest(".flow-opt"),h=Array.from(c.parentNode.children).indexOf(c);P[i].step_options.length>1&&h>=0&&(P[i].step_options.splice(h,1),Te(),ge())}return}o.target.closest(".flow-node__body")||(o.target.closest(".flow-node__hd")||o.target.closest(".flow-node__preview"))&&n(r.dataset.uid)}}),t.addEventListener("change",o=>{if(o.stopPropagation(),!o.target.classList.contains("flow-f-type"))return;We(),xe();const s=P.find(r=>r._uid===o.target.closest(".flow-node")?.dataset.uid);s&&ll(s),Te(),ge()}),t.addEventListener("dragstart",o=>{const s=o.target.closest(".flow-node");if(!(!s||s.getAttribute("draggable")!=="true")){$e=s.dataset.uid,o.dataTransfer.effectAllowed="move";try{o.dataTransfer.setData("text/plain",$e)}catch{}requestAnimationFrame(()=>s.classList.add("dragging"))}}),t.addEventListener("dragover",o=>{if(!$e)return;o.preventDefault(),o.dataTransfer.dropEffect="move";const s=o.target.closest(".flow-node");if(ko(),!s||s.dataset.uid===$e){Fe=null;return}const r=s.getBoundingClientRect(),i=o.clientY>r.top+r.height/2;s.classList.add(i?"drop-after":"drop-before"),Fe={uid:s.dataset.uid,after:i}}),t.addEventListener("drop",o=>{if(!$e||!Fe){ot();return}o.preventDefault(),We(),xe();const s=P.findIndex(l=>l._uid===$e);if(s<0){ot();return}const[r]=P.splice(s,1),i=P.findIndex(l=>l._uid===Fe.uid);if(i<0){P.splice(s,0,r),ot();return}P.splice(Fe.after?i+1:i,0,r),Te(),ot(),ge()}),t.addEventListener("dragend",ot),e.querySelector("#flow-palette").addEventListener("click",o=>{const s=o.target.closest("[data-type]");if(!s)return;We(),xe();const r=Ca(s.dataset.type);P.push(r),we=r._uid,Te(),ge(),t.lastElementChild?.scrollIntoView({behavior:"smooth",block:"nearest"})})}function fl(){xe();for(const e of Object.keys(de)){const t=ml(de[e]);if(t)return{route:e,message:(xt.length>1?`${Eo[e]||e}: `:"")+t}}return null}function vl(e,t){if(de[e]){xe(),Pe=e,P=de[e],we=null;const n=document.getElementById("flow-route");n&&(n.value=e),ge()}const a=document.getElementById("flow-error");a&&(a.textContent=t||"")}async function _l(e){if(Et)try{const n=((await(await fetch(`${wo()}/m5t/v5/magnets`)).json().catch(()=>({}))).magnets||[]).find(s=>s.guid===e);if(!n||!n.modified_tz||n.modified_tz===Et)return;if(!confirm("This magnet was edited elsewhere since you opened it — saving now may overwrite those changes. Save anyway?"))throw new Error("Save cancelled — this magnet was edited elsewhere.");Et=n.modified_tz}catch(t){if(t.message&&t.message.indexOf("Save cancelled")===0)throw t;console.warn("[magnet-flow] save-conflict check failed, proceeding without it:",t)}}async function bl(e){await _l(e),xe();for(const t of Object.keys(de)){const a=t==="chat"?{steps:da(de[t])}:{route:t,steps:da(de[t])},o=await(await fetch(`${wo()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json().catch(()=>({}));if(!o.ok)throw new Error(o.message||"Flow save failed")}}function hn(){return xe(),da(de.chat||[])}const yl=`!function(){"use strict";try{window.machfivemagnet={appGuid:"##APPGUID##",magnets:"##MAGNET_DEFINITIONS##"}}catch(e){return}var e=window.machfivemagnet||{},t="string"==typeof e.appGuid?e.appGuid:"",a=Array.isArray(e.magnets)?e.magnets:[];if(t&&a.length){var r,n="function"==typeof window.fetch?window.fetch.bind(window):null,o="#0072BA",i="Chat with us",m="Typically replies in a few minutes",s=function(){try{var e=document.currentScript;if(!e||!e.src)for(var t=document.getElementsByTagName("script"),a=t.length-1;a>=0;a--)if(/coreSnippet/.test(t[a].src||"")){e=t[a];break}if(e&&e.src)return new URL(e.src,location.href).origin}catch(e){}return"https://machfivemagnet-saas.onrender.com"}(),l=function(){var e={};try{var t=new URLSearchParams(location.search);["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(a){var r=t.get(a);r&&(e[a]=r)})}catch(e){}try{var a=JSON.parse(sessionStorage.getItem("m5m_attr")||"{}");e=Object.assign({},a,e),Object.keys(e).length&&sessionStorage.setItem("m5m_attr",JSON.stringify(e))}catch(e){}return e}(),c=function(){try{var e=window.MachFiveMagnet;return e&&"object"==typeof e&&Array.isArray(e.instances)||(e={instances:[],open:function(t,a){var r=b(e.instances,t);if(r)try{r.open(a||null)}catch(e){x(e)}return!!r},close:function(t){var a=b(e.instances,t);if(a)try{a.close()}catch(e){}return!!a}},window.MachFiveMagnet=e),e}catch(e){return{instances:[]}}}(),d={surface:"--m5-surface",surface_2:"--m5-surface-2",border:"--m5-border",text:"--m5-text",text_sub:"--m5-text-sub",meta:"--m5-meta",msg_bg:"--m5-msg-bg",bot_bg:"--m5-bot-bg",bot_border:"--m5-bot-border",radius:"--m5-radius",radius_msg:"--m5-radius-msg"},p={inter:"Inter:wght@400;500;600;700",roboto:"Roboto:wght@400;500;700",poppins:"Poppins:wght@400;500;600;700",montserrat:"Montserrat:wght@400;500;600;700",lato:"Lato:wght@400;700","open sans":"Open+Sans:wght@400;600;700",nunito:"Nunito:wght@400;600;700",raleway:"Raleway:wght@400;600;700","work sans":"Work+Sans:wght@400;500;600;700",oswald:"Oswald:wght@400;500;600;700",merriweather:"Merriweather:wght@400;700"},u={call:{icon:"phone",label:"Call"},email:{icon:"mail",label:"Email"},book:{icon:"event",label:"Book"},chat:{icon:"chat",label:"Chat"},support:{icon:"headset",label:"Support"}},g=[{label:"Sales enquiry",icon:"description"},{label:"Support",icon:"help"},{label:"Billing",icon:"description"},{label:"Something else",icon:"chat"}],h={chat:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',close:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',send:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',check:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',arrow:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',phone:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',mail:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',calendar:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'},v={event:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",schedule:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",mail:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",chat:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",sms:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",phone:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",description:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",help:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",place:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",person:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",bolt:"M7 2v11h3v9l7-12h-4l4-8z",check_circle:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",home:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",build:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",headset:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z",copy:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},f={calendar:"event",appointment:"event",book:"event",email:"mail",message:"chat",text:"sms",call:"phone",quote:"description",document:"description",question:"help",location:"place",clock:"schedule",quick:"bolt",check:"check_circle",services:"build",service:"build",support:"headset",support_agent:"headset",headset_mic:"headset"};r=function(){try{!function(){for(var e={},t=0;t<a.length;t++){var r=a[t],n=r&&r.mag_display_mode;n&&!e[n]&&(e[n]=!0,"chat"===n||"right_slide"===n||"modal"===n||"inline"===n?H(r,n):x("display mode not yet supported: "+n))}}()}catch(e){x("boot failed",e)}},document.body?r():document.addEventListener("DOMContentLoaded",function(){r()})}function b(e,t){if(!Array.isArray(e)||!e.length)return null;if(null==t||""===t)return e[0];var a,r=String(t);for(a=0;a<e.length;a++)if(e[a]&&e[a].id===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].guid===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].mode===r)return e[a];return null}function x(){try{console.warn.apply(console,["[m5m]"].concat([].slice.call(arguments)))}catch(e){}}function y(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}function w(e){3===(e=String(e||"").trim().replace("#","")).length&&(e=e.split("").map(function(e){return e+e}).join("")),/^[0-9a-fA-F]{6}$/.test(e)||(e=o.replace("#",""));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}function _(e,t){return e.map(function(e){return Math.max(0,Math.min(255,Math.round(e*t)))})}function k(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function S(e,t){return"rgba("+e[0]+","+e[1]+","+e[2]+","+t+")"}function C(e){var t=e.map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return.2126*t[0]+.7152*t[1]+.0722*t[2]}function L(e){if(null==e)return"";var t=String(e).trim();return!t||t.length>40?"":/^\\d+(\\.\\d+)?$/.test(t)?t+"px":/^\\d+(\\.\\d+)?(px|rem|em|vh|vw|%)$/.test(t)||/^(min|max|clamp)\\(\\s*[\\d.\\s,a-z%()+*/-]+\\)$/i.test(t)?t:""}function z(e){if(!e)return null;try{var t=new URL(e,location.href).protocol;return/^(https?|mailto|tel):$/.test(t)?e:null}catch(e){return null}}function E(e){try{if(!e)return;var t=String(e).split(",")[0].trim().replace(/^["']+|["']+$/g,"").toLowerCase(),a=p[t];if(!a)return;var r="m5m-font-"+t.replace(/\\s+/g,"-");if(document.getElementById(r))return;var n=document.createElement("link");n.id=r,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family="+a+"&display=swap",(document.head||document.documentElement).appendChild(n)}catch(e){}}function M(e,t){var a=[];try{var r=e.mag_theme_vars&&"object"==typeof e.mag_theme_vars?e.mag_theme_vars:{};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&d[n]){var o=String(r[n]).trim();o&&o.length<=60&&/^[#a-zA-Z0-9(),.%\\s/-]+$/.test(o)&&a.push(d[n]+":"+o)}if(e.mag_font){var i=String(e.mag_font).trim();i&&i.length<=120&&/^[a-zA-Z0-9'",\\s-]+$/.test(i)&&a.push("font-family:"+i)}}catch(e){}return a.length?".m5m-root.m5m-mode-"+t+"{"+a.join(";")+";}":""}function A(e){var t=[];return(Array.isArray(e)?e:[]).forEach(function(e){if(u[(e=e||{}).type]){var a="call"===e.type||"email"===e.type,r=null!=e.value?String(e.value).trim():"";a&&!r||t.push({type:e.type,label:null!=e.label&&String(e.label).trim()||u[e.type].label,value:r,config:e.config&&"object"==typeof e.config?e.config:{}})}}),t.slice(0,6)}function N(e){return e.length?'<div class="m5m-actionbar">'+e.map(function(e){return'<button type="button" class="m5m-action" data-m5m-act="'+y(e.type)+'">'+T(u[e.type].icon)+"<span>"+y(e.label)+"</span></button>"}).join("")+"</div>":""}function T(e){if(!e)return"";var t=String(e).trim().toLowerCase().replace(/[\\s-]+/g,"_");return f[t]&&(t=f[t]),v[t]?'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+v[t]+'"></path></svg>':""}function H(e,a){var r=null;try{var d=e&&e.mag_ab;if(d&&d.enabled&&d.b&&"object"==typeof d.b){var p="m5m_ab_"+t;try{r=localStorage.getItem(p)}catch(e){}if("A"!==r&&"B"!==r){var u="number"==typeof d.split?d.split:50;r=100*Math.random()<u?"B":"A";try{localStorage.setItem(p,r)}catch(e){}}"B"===r&&(e=Object.assign({},e,d.b))}}catch(e){r=null}var v,f,b=e,H=[],P={},I=0,q=0,O={},B="",D=!1,V=a||"chat",Y=!1,R=!1,F=!1,U="",$=[],G={},J=[],X=!1,W=0,Z={},K=-1,Q="m5m"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),ee=!1;function te(e,a){try{var o=JSON.stringify({event:e,detail:a||null,mode:V,session:Q,variant:r}),i=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/event";if(n)return void n(i,{method:"POST",headers:{"Content-Type":"application/json"},body:o,keepalive:!0}).catch(function(){});navigator.sendBeacon&&navigator.sendBeacon(i,o)}catch(e){}}function ae(e){if(!ee){ee=!0,te("engage",e);try{document.cookie="m5m_sid="+encodeURIComponent(Q)+"; max-age=1800; path=/; SameSite=Lax"}catch(e){}}}function re(){return'<span class="m5m-ava-mark">'+h.chat+"</span>"+(B?'<img class="m5m-ava-img" src="'+y(B)+'" alt="">':"")}function ne(){return!(!G.root||!G.root.classList.contains("m5m-open"))}function oe(e,t){var a=setTimeout(e,t);return J.push(a),a}function ie(){J.forEach(clearTimeout),J=[],W=0}function me(e,t){return W++,oe(function(){W--,e()},t)}function se(){if(!ne()){G.root.classList.add("m5m-open");try{G.panel.focus()}catch(e){}if(!Y)return Y=!0,te("open"),void xe();!X||F||R||ce()}}function le(){W>0&&(X=!0),ie(),G.root.classList.remove("m5m-open");try{G.launcher.focus()}catch(e){}}function ce(){X=!1,function(){try{for(var e=G.messages.querySelectorAll(".m5m-typing"),t=0;t<e.length;t++){var a=e[t].parentNode;a&&a.parentNode&&a.parentNode.removeChild(a)}}catch(e){}}(),be()}function de(){try{c.instances.push({id:null!=b.mag_id&&""!==String(b.mag_id)?String(b.mag_id):null,guid:null!=b.mag_guid&&""!==String(b.mag_guid)?String(b.mag_guid):null,mode:V,launcher:"inline"!==V&&!0!==b.mag_hide_launcher,appGuid:t,open:function(e){try{!function(e){e=e&&"object"==typeof e?e:{};var t=Y&&!F&&(!0===e.reset||R);t&&(ie(),O={},Z={},U="",R=!1,F=!1,D=!1,I=0,q=0,X=!1,K=-1,G.messages&&(G.messages.innerHTML=""),ge(),we(null),H=Array.isArray(b.mag_macro_steps)?b.mag_macro_steps:[],P={},H.forEach(function(e,t){e&&null!=e.id&&(P[String(e.id)]=t)})),function(e){if(e&&"object"==typeof e){var t=0;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t>=40)break;var r=e[a];if(null!=r&&""!==(r=String(r).slice(0,250))){var n=String(a).slice(0,60);Object.prototype.hasOwnProperty.call(O,n)||(O[n]=r,Z[n]=!0,t++)}}}}(e.prefill),"inline"!==V?(se(),t&&xe()):t?xe():!X||F||R||ce()}(e)}catch(e){x(e)}},close:function(){if("inline"!==V)try{le()}catch(e){}}})}catch(e){}}function pe(){var e=G.messages.lastElementChild;return!(!e||!e.classList.contains("m5m-row-bot"))}function ue(){if("inline"===V&&K>=0){var e=G.messages.children[K];if(e)return void(G.messages.scrollTop=Math.max(0,e.getBoundingClientRect().top-G.messages.getBoundingClientRect().top+G.messages.scrollTop-8))}G.messages.scrollTop=G.messages.scrollHeight}function ge(){G.input.innerHTML=""}function he(e){K=-1;var t=document.createElement("div");t.className="m5m-row m5m-row-user";var a=document.createElement("div");a.className="m5m-msg m5m-user",a.textContent=e,t.appendChild(a),G.messages.appendChild(t),ue()}function ve(){var e=pe(),t=document.createElement("div");t.className="m5m-row m5m-row-bot"+(e?" m5m-grouped":""),t.setAttribute("aria-hidden","true");var a=document.createElement("span");a.className="m5m-msg-ava",e||(a.innerHTML=re());var r=document.createElement("div");return r.className="m5m-typing",r.innerHTML="<span></span><span></span><span></span>",t.appendChild(a),t.appendChild(r),G.messages.appendChild(t),ue(),t}function fe(e,t){var a=(Array.isArray(e)?e:[]).filter(function(e){return null!=e&&""!==String(e)}),r=0;!function e(){ne()?r>=a.length?t():function(e,t){if(e){var a=ve();me(function(){a.parentNode&&a.parentNode.removeChild(a),function(e){var t=pe(),a=document.createElement("div");a.className="m5m-row m5m-row-bot"+(t?" m5m-grouped":"");var r=document.createElement("span");r.className="m5m-msg-ava",t||(r.innerHTML=re());var n=document.createElement("div");n.className="m5m-msg m5m-bot",n.innerHTML=y(e);var o=document.createElement("div");o.className="m5m-col",o.appendChild(n);var i=document.createElement("span");i.className="m5m-time",i.setAttribute("aria-hidden","true"),i.textContent=function(){try{return(new Date).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}catch(e){return""}}(),o.appendChild(i),a.appendChild(r),a.appendChild(o),G.messages.appendChild(a),ue()}(e),t&&t()},550)}else t&&t()}(a[r++],e):X=!0}()}function be(){if(ne()){if(X=!1,K=G.messages?G.messages.children.length:-1,++q>100)return x("step guard tripped — ending flow"),void Te();if(I<0||I>=H.length)b&&b.mag_summary&&!D&&Ne().length?(D=!0,function(){ge();var e=b&&b.mag_summary_heading||"Here’s what we’ve got",t=b&&b.mag_summary_confirm_label||"Confirm & send",a=Ne().map(function(e){return'<div class="m5m-sum-row"><span class="m5m-sum-label">'+y((t=e,(t=String(t).replace(/_/g," ").trim())?t.charAt(0).toUpperCase()+t.slice(1):t))+'</span><span class="m5m-sum-val">'+y(O[e])+"</span></div>";var t}).join(""),r=document.createElement("div");r.className="m5m-summary",r.innerHTML='<div class="m5m-sum-head" role="heading" aria-level="2">'+y(e)+'</div><div class="m5m-sum-rows">'+a+'</div><button type="button" class="m5m-sum-confirm">'+y(t)+"</button>",G.messages.appendChild(r),ue();var n=r.querySelector(".m5m-sum-confirm");n.addEventListener("click",function(){n.disabled=!0,Te()}),n.focus()}()):Te();else{var e=H[I]||{},t=e.step_type,a=e.step_config&&"object"==typeof e.step_config?e.step_config:{};if(a.skip_if_prefilled&&function(e){var t=Array.isArray(e.step_columns)?e.step_columns:[];if(!t.length)return!1;for(var a=0;a<t.length;a++){var r=O[String(t[a])];if(null==r||""===r)return!1}return!0}(e))Ae("");else{if(te("step",I+1+"/"+H.length),"message"===t)return a.terminal?void fe(e.step_prompts,function(){!function(e){ge();var t=e&&e.cta&&"object"==typeof e.cta?e.cta:null,a=t?z(t.url):null,r=t&&null!=t.label?String(t.label):"";if(a&&r){var n=document.createElement("div");n.className="m5m-terminal",n.innerHTML='<a class="m5m-terminal-cta" href="'+y(a)+'" target="_blank" rel="noopener noreferrer">'+y(r)+"</a>",G.messages.appendChild(n),ue()}}(a)}):void fe(e.step_prompts,function(){Ae("")});fe(e.step_prompts,function(){"single_select"===t?function(e){ge();var t="inline"===V,a=document.createElement("div");a.className="m5m-choices"+(t?" m5m-tiles":"");var r=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});r.length?(r.forEach(function(r){var n=String(r.label),o=T(r.icon),i=r.description?String(r.description):"",m=document.createElement("button");m.type="button",m.className="m5m-choice",m.innerHTML=(o?'<span class="m5m-choice-icon">'+o+"</span>":"")+'<span class="m5m-choice-body"><span class="m5m-choice-label">'+y(n)+"</span>"+(i?'<span class="m5m-choice-desc">'+y(i)+"</span>":"")+'</span><span class="m5m-choice-arrow">'+h.arrow+"</span>",m.addEventListener("click",function(){ae("choice"),Me(e,n),t&&a.parentNode&&a.remove(),he(n),ge(),me(function(){Ae(r.goto?String(r.goto):"")},260)}),a.appendChild(m)}),(t?G.messages:G.input).appendChild(a),ue()):Ae("")}(e):"multi_select"===t?function(e){ge();var t=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});if(t.length){var a=document.createElement("div");a.className="m5m-multi";var r={},n=document.createElement("button");t.forEach(function(e){var t=String(e.label),o=T(e.icon),i=document.createElement("button");i.type="button",i.className="m5m-mopt",i.innerHTML=(o?'<span class="m5m-mopt-icon">'+o+"</span>":"")+'<span class="m5m-mopt-label">'+y(t)+'</span><span class="m5m-mopt-check">'+h.check+"</span>",i.addEventListener("click",function(){var e=!r[t];r[t]=e,i.classList.toggle("m5m-mopt-on",e),function(){var e=!1;for(var t in r)if(r[t]){e=!0;break}n.disabled=!e}()}),a.appendChild(i)}),n.type="button",n.className="m5m-multi-cont",n.textContent="Continue",n.disabled=!0,n.addEventListener("click",function(){var t=[];for(var n in r)r[n]&&t.push(n);if(t.length){ae("multi_select");var o=t.join(", ");Me(e,o),a.parentNode&&a.remove(),he(o),ge(),me(function(){Ae("")},260)}}),a.appendChild(n),G.messages.appendChild(a),ue()}else Ae("")}(e):"scheduler"===t?function(e){if(ge(),!Array.isArray(e.step_columns)||!e.step_columns.length)return x("scheduler step has no Saves-to field configured — skipping"),void Ae("");var t=e&&e.step_config||{},a=t.meeting_label||"",r=Ee(t.start||"09:00"),n=Ee(t.end||"17:00"),o=t.mins||30,i=Math.max(1,Math.min(60,t.days||14)),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=new Date;l.setHours(0,0,0,0);for(var c=[],d=0;d<i;d++)c.push(new Date(l.getTime()+864e5*d));for(var p=[],u=r;u<n;u+=o)p.push(u);var g=0,h=null,v=function(e){var t=Math.floor(e/60),a=e%60,r=t%12;return 0===r&&(r=12),r+":"+(a<10?"0"+a:a)+" "+(t>=12?"PM":"AM")},f=document.createElement("div");f.className="m5m-sched";var b=function(){var e=c.map(function(e,t){return'<button type="button" class="m5m-sd-day'+(t===g?" m5m-sd-on":"")+'" data-d="'+t+'"><span class="m5m-sd-dow">'+m[e.getDay()]+'</span><span class="m5m-sd-num">'+e.getDate()+'</span><span class="m5m-sd-mon">'+s[e.getMonth()]+"</span></button>"}).join(""),t=p.map(function(e){return'<button type="button" class="m5m-sd-slot'+(h===e?" m5m-sd-on":"")+'" data-t="'+e+'">'+v(e)+"</button>"}).join("");f.innerHTML=(a?'<div class="m5m-sd-meta">'+T("schedule")+"<span>"+y(a)+"</span></div>":"")+'<div class="m5m-sd-days">'+e+'</div><div class="m5m-sd-slots">'+t+'</div><button type="button" class="m5m-sd-confirm"'+(null===h?" disabled":"")+">Confirm time</button>"};b(),f.addEventListener("click",function(t){var a=t.target.closest(".m5m-sd-day");if(a)return g=parseInt(a.getAttribute("data-d"),10)||0,h=null,void b();var r=t.target.closest(".m5m-sd-slot");if(r)return h=parseInt(r.getAttribute("data-t"),10),void b();if(t.target.closest(".m5m-sd-confirm")){if(null===h)return;ae("scheduler");var n=c[g],o=m[n.getDay()]+" "+s[n.getMonth()]+" "+n.getDate()+", "+v(h);try{U=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(t){U=""}Me(e,o),f.parentNode&&f.remove(),he(o),ge(),me(function(){Ae("")},260)}}),G.messages.appendChild(f),ue()}(e):function(e){if(ge(),!Array.isArray(e.step_columns)||!e.step_columns.length)return x("input step has no Saves-to field configured — skipping"),void Ae("");var t=e.step_type,a=e.step_config&&"object"==typeof e.step_config?e.step_config:{},r=document.createElement("form");r.className="m5m-form";var n=document.createElement("input");n.type="email"===t?"email":"phone"===t?"tel":"text",n.placeholder=null!=a.placeholder&&""!==String(a.placeholder)?String(a.placeholder):b&&b.mag_input_placeholder||"Type your answer…",n.autocomplete="email"===t?"email":"phone"===t?"tel":"off",n.required=!0;var o=document.createElement("button");if(o.type="submit",o.className="m5m-send",o.setAttribute("aria-label","Send"),o.innerHTML=h.send,r.appendChild(n),r.appendChild(o),r.addEventListener("submit",function(a){a.preventDefault();var r=(n.value||"").trim();!r||"email"===t&&n.validity&&!n.validity.valid?n.focus():(ae("input"),Me(e,r),he(r),ge(),me(function(){Ae("")},260))}),G.input.appendChild(r),a.optional){var i=document.createElement("button");i.type="button",i.className="m5m-skip",i.textContent=null!=a.skip_label&&""!==String(a.skip_label)?String(a.skip_label):"Skip",i.addEventListener("click",function(){ae("skip"),ge(),me(function(){Ae("")},120)}),G.input.appendChild(i)}n.focus(),ue()}(e)})}}}}function xe(){b&&b.mag_home&&$.length>0?function(){G.messages&&(G.messages.innerHTML=""),ge(),we(null);var e=null!=b.mag_welcome?String(b.mag_welcome):"",t=b.mag_home_title||b.mag_title||"How can we help?",a=document.createElement("div");a.className="m5m-home",a.innerHTML='<div class="m5m-home-ava">'+re()+"</div>"+("inline"===V?"":'<div class="m5m-home-title" role="heading" aria-level="2">'+y(t)+"</div>")+(e?'<div class="m5m-home-text">'+y(e)+"</div>":"")+'<div class="m5m-home-hint">'+T("bolt")+"<span>Choose an option below to get started.</span></div>",G.messages.appendChild(a),ue()}():(I=0,q=0,be())}function ye(){G.actionbar&&G.actionbar.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("[data-m5m-act]"):null;if(a)try{!function(e){for(var a=null,r=0;r<$.length;r++)if($[r].type===e){a=$[r];break}if(a)if(te("route",e),ae(e),ie(),we(e),"call"!==e&&"email"!==e)if("book"===e&&a.config&&"calendly"===a.config.source&&function(e){try{var t=new URL(e);return"https:"===t.protocol&&("calendly.com"===t.hostname||/\\.calendly\\.com$/.test(t.hostname))}catch(e){return!1}}(a.config.calendly_url))!function(e){var a;try{a=new URL(e.config.calendly_url)}catch(e){return void Ce(Le("book",{type:"book",config:{}}))}a.searchParams.set("embed_domain",location.hostname||"localhost"),a.searchParams.set("embed_type","Inline"),a.searchParams.set("hide_gdpr_banner","1"),a.searchParams.set("utm_source","machfivemagnet"),a.searchParams.set("utm_content",t),a.searchParams.set("salesforce_uuid",Q);var r=_e(["email","email_address","work_email"]),n=_e(["name","full_name"]);n||(n=[_e(["first_name","firstname"]),_e(["last_name","lastname"])].filter(function(e){return e}).join(" ")),n&&a.searchParams.set("name",n.slice(0,100)),r&&a.searchParams.set("email",r.slice(0,100)),G.messages&&(G.messages.innerHTML=""),ge();var o=document.createElement("div");o.className="m5m-cal";var i=document.createElement("iframe");i.className="m5m-cal-frame",i.src=a.toString(),i.title=e.config.event_name||"Schedule a meeting",o.appendChild(i),G.messages.appendChild(o),ue(),function(e){ke=e,Se||(Se=!0,window.addEventListener("message",function(e){try{var t="";try{t=new URL(e.origin).hostname}catch(e){return}if("calendly.com"!==t&&!/\\.calendly\\.com$/.test(t))return;if(!e.data||"calendly.event_scheduled"!==e.data.event)return;if(!ke||!ke.isConnected)return;if(ke.querySelector(".m5m-cal-done"))return;var a=document.createElement("div");a.className="m5m-cal-done",a.textContent="You are booked. A confirmation email is on the way.",ke.appendChild(a),ue()}catch(e){}}))}(o)}(a);else if("book"===e&&function(e){try{return/^https?:$/.test(new URL(e).protocol)}catch(e){return!1}}(a.value))try{window.open(a.value,"_blank","noopener")}catch(e){}else O={},D=!1,R=!1,F=!1,U="",Ce(Le(e,a));else!function(e,t){G.messages&&(G.messages.innerHTML=""),ge();var a=t&&t.value?String(t.value):"",r="call"===e,n=z(r?"tel:"+a.replace(/[^\\d+]/g,""):"mailto:"+a),o=document.createElement("div");o.className="m5m-reveal",o.innerHTML='<div class="m5m-reveal-icon">'+T(r?"phone":"mail")+'</div><div class="m5m-reveal-title" role="heading" aria-level="2">'+(r?"Call us":"Email us")+"</div>"+(n?'<a class="m5m-reveal-val" href="'+y(n)+'"'+(r?"":' target="_blank" rel="noopener noreferrer"')+">"+y(a)+"</a>":'<div class="m5m-reveal-val">'+y(a)+"</div>")+'<button type="button" class="m5m-reveal-copy">'+T("copy")+"<span>Copy</span></button>",G.messages.appendChild(o);var i=o.querySelector(".m5m-reveal-copy");if(i&&i.addEventListener("click",function(){var e=o.querySelector(".m5m-reveal-val");!function(e,t){var a=function(){var e=t&&t.querySelector("span");if(e){var a=e.textContent;e.textContent="Copied",oe(function(){e&&(e.textContent=a)},1400)}};try{if(navigator.clipboard&&navigator.clipboard.writeText)return void navigator.clipboard.writeText(e).then(a,function(){ze(e),a()})}catch(e){}ze(e),a()}((e&&e.textContent?e.textContent.replace(/^\\s+|\\s+$/g,""):"")||a,i)}),ue(),r&&f)try{window.CallTrk&&"function"==typeof window.CallTrk.swap&&window.CallTrk.swap(f)}catch(e){}}(e,a)}(a.getAttribute("data-m5m-act"))}catch(e){x(e)}})}function we(e){if(G.actionbar)for(var t=G.actionbar.querySelectorAll("[data-m5m-act]"),a=0;a<t.length;a++)t[a].classList.toggle("m5m-act-on",t[a].getAttribute("data-m5m-act")===e)}function _e(e){for(var t in O)if(Object.prototype.hasOwnProperty.call(O,t)&&-1!==e.indexOf(String(t).toLowerCase())&&String(O[t]||"").trim())return String(O[t]).trim();return""}var ke=null,Se=!1;function Ce(e){H=Array.isArray(e)?e.slice():[],P={},H.forEach(function(e,t){e&&null!=e.id&&(P[String(e.id)]=t)}),G.messages&&(G.messages.innerHTML=""),ge(),I=0,q=0,H.length?be():x("route has no steps")}function Le(e,t){var a=b&&b.mag_routes||{},r=function(e){return Array.isArray(e)&&e.length?e:null};return"chat"===e?r(a.chat)||(Array.isArray(b.mag_macro_steps)?b.mag_macro_steps:[]):"book"===e?r(a.book)||function(e){var t=e&&e.config||{};return[{id:"m5m_book",step_type:"scheduler",step_options:[],step_columns:[t.column||"preferred_time"],step_prompts:[t.heading||"When works best for you?"],step_config:{meeting_label:t.meeting_label||"",start:t.start||"09:00",end:t.end||"17:00",mins:t.mins||30,days:t.days||14}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):"support"===e?r(a.support)||function(e){var t=e&&e.config||{};return[{id:"m5m_support",step_type:"multi_select",step_options:(Array.isArray(t.options)&&t.options.length?t.options:g).map(function(e){return e&&"object"==typeof e?{label:String(e.label||""),icon:e.icon||""}:{label:String(e),icon:""}}).filter(function(e){return""!==e.label}),step_columns:t.column?[t.column]:[],step_prompts:[t.heading||"How can we help you today?"],step_description:"Select all that apply",step_config:{}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):[]}function ze(e){try{var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",(v||document.body).appendChild(t),t.focus(),t.select(),document.execCommand("copy"),t.parentNode&&t.parentNode.removeChild(t)}catch(e){}}function Ee(e){var t=String(e).split(":");return 60*(parseInt(t[0],10)||0)+(parseInt(t[1],10)||0)}function Me(e,t){(Array.isArray(e.step_columns)?e.step_columns:[]).forEach(function(e){e&&(O[String(e)]=t,delete Z[String(e)])})}function Ae(e){if(e){if(!Object.prototype.hasOwnProperty.call(P,e))return x("goto target not found: "+e),void Te();I=P[e]}else I+=1;be()}function Ne(){return Object.keys(O).filter(function(e){return!Z[e]})}function Te(){if(ne()&&(ge(),!R&&!F))if(n){F=!0;var e=ve(),a={"Content-Type":"application/json"},o="";try{o=window.localStorage&&window.localStorage.getItem("m5m_test_token")||""}catch(e){}o&&(a.Authorization="Bearer "+o,a["X-M5M-Test-Mode"]="1"),n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/capture",{method:"POST",headers:a,body:JSON.stringify({fields:O,attribution:l,session:Q,mode:V,variant:r,scheduler_tz:U||void 0}),keepalive:!0}).then(function(e){if(!e.ok)throw new Error("capture HTTP "+e.status);return e.json().catch(function(){return{}})}).then(function(){R=!0,F=!1,e.parentNode&&e.parentNode.removeChild(e),ne()&&function(){ge();var e=b&&b.mag_success_title||"You’re all set!",t=b&&null!=b.mag_success_text?String(b.mag_success_text):"Thanks! We’ve got your details and someone will be in touch shortly.",a=b&&b.mag_success_cta&&"object"==typeof b.mag_success_cta?b.mag_success_cta:null,r=a?z(a.url):null,n=a&&null!=a.label?String(a.label):"",o=document.createElement("div");o.className="m5m-success";var i="inline"===V;o.innerHTML='<div class="m5m-success-icon">'+h.check+'</div><div class="m5m-success-title" role="heading" aria-level="2">'+y(e)+"</div>"+(t?'<div class="m5m-success-text">'+y(t)+"</div>":"")+(r&&n?'<a class="m5m-success-link" href="'+y(r)+'" target="_blank" rel="noopener noreferrer">'+y(n)+"</a>":"")+(i?"":'<button type="button" class="m5m-success-cta">Close</button>'),G.messages.appendChild(o),ue();var m=o.querySelector(".m5m-success-link"),s=o.querySelector(".m5m-success-cta");s&&s.addEventListener("click",le),m?m.focus():s&&s.focus()}()}).catch(function(t){F=!1,e.parentNode&&e.parentNode.removeChild(e),x("capture failed",t),ne()&&He()})}else He()}function He(){G.input.innerHTML='<div class="m5m-error"><div class="m5m-error-text">Something went wrong sending your details.</div><button type="button" class="m5m-retry">Try again</button></div>';var e=G.input.querySelector(".m5m-retry");e.addEventListener("click",function(){ge(),F=!1,Te()}),e.focus()}"inline"===V?function(){if(document.body&&!document.getElementById("m5m-magnet-inline")){var t=function(){try{var e=document.querySelector("[data-m5m-inline], #m5m-inline");if(e)return e;for(var t=null,a=document.getElementsByTagName("script"),r=a.length-1;r>=0;r--)if(/coreSnippet/.test(a[r].src||"")){t=a[r];break}if(t&&t.parentNode){var n=document.createElement("div");return t.parentNode.insertBefore(n,t.nextSibling),n}}catch(e){}return null}();if(t)if(H=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],$=A(e.mag_actions),H.length||e.mag_home&&$.length){P={},H.forEach(function(e,t){e&&null!=e.id&&(P[String(e.id)]=t)});var a=e.mag_theme_color||o,r=e.mag_title||i,n=null!=e.mag_subtitle?String(e.mag_subtitle):m,s=e.mag_theme_mode,l="dark"===s?"m5m-dark":"light"===s?"m5m-light":"";E(e.mag_font),B=e.mag_logo_url||"";var c=N($),d=w(a),p=C(d)>.55,u=k(_(d,p?.6:.78));(f=document.createElement("div")).id="m5m-magnet-inline",f.style.setProperty("--m5-brand",k(d)),f.style.setProperty("--m5-brand-2",u),f.style.setProperty("--m5-brand-soft",S(d,.12)),f.style.setProperty("--m5-brand-glow",S(d,.34)),f.style.setProperty("--m5-brand-ring",S(d,.38)),f.style.setProperty("--m5-on-brand",p?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover");var g=L(e.mag_inline_width),h=L(e.mag_inline_height);g&&f.style.setProperty("--m5-inline-w",g),h&&f.style.setProperty("--m5-inline-h",h),t.appendChild(f),(v=f.attachShadow({mode:"open"})).innerHTML="<style>"+j()+M(e,V)+'</style><div class="m5m-root m5m-mode-inline m5m-open'+(l?" "+l:"")+'"><section class="m5m-inline-card" aria-label="'+y(r)+'"><header class="m5m-header"><span class="m5m-ava">'+re()+'</span><span class="m5m-head-text"><span class="m5m-title">'+y(r)+"</span>"+(n?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+y(n)+"</span>":"")+'</span></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+c+"</section></div>",G.root=v.querySelector(".m5m-root"),G.panel=v.querySelector(".m5m-inline-card"),G.messages=v.querySelector(".m5m-messages"),G.input=v.querySelector(".m5m-input"),G.actionbar=v.querySelector(".m5m-actionbar"),ye(),v.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),v.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),Y=!0,te("open"),xe(),de()}else x("magnet has no steps");else x("inline magnet: no mount target — add <div data-m5m-inline></div> where it should appear")}}():function(){if(document.body){var a="m5m-magnet-"+V;if(!document.getElementById(a))if(H=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],$=A(e.mag_actions),H.length||e.mag_home&&$.length){P={},H.forEach(function(e,t){e&&null!=e.id&&(P[String(e.id)]=t)});var r=e.mag_theme_color||o,n=e.mag_title||i,s=null!=e.mag_subtitle?String(e.mag_subtitle):m,l=e.mag_launcher_label||n,d=e.mag_theme_mode,p="dark"===d?"m5m-dark":"light"===d?"m5m-light":"";!0===e.mag_hide_launcher&&(p+=(p?" ":"")+"m5m-no-launcher");var u=0;if(!0!==e.mag_hide_launcher)try{u=c.instances.filter(function(e){return e&&e.launcher}).length}catch(e){}E(e.mag_font),B=e.mag_logo_url||"";var g=N($),b=w(r),L=C(b)>.55,z=k(_(b,L?.6:.78));(f=document.createElement("div")).id=a,f.style.setProperty("--m5-brand",k(b)),f.style.setProperty("--m5-brand-2",z),f.style.setProperty("--m5-brand-soft",S(b,.12)),f.style.setProperty("--m5-brand-glow",S(b,.34)),f.style.setProperty("--m5-brand-ring",S(b,.38)),f.style.setProperty("--m5-on-brand",L?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover"),u>0&&f.style.setProperty("--m5-launcher-bottom",20+74*u+"px"),document.body.appendChild(f),(v=f.attachShadow({mode:"open"})).innerHTML="<style>"+j()+M(e,V)+'</style><div class="m5m-root m5m-mode-'+V+(p?" "+p:"")+'"><div class="m5m-scrim"></div><button class="m5m-launcher" type="button" aria-label="Open '+y(n)+'"><span class="m5m-launcher-ava">'+h.chat+'</span><span class="m5m-launcher-label">'+y(l)+'</span></button><section class="m5m-panel" role="dialog" aria-modal="'+("modal"===V?"true":"false")+'" tabindex="-1" aria-label="'+y(n)+'"><header class="m5m-header"><span class="m5m-ava">'+re()+'</span><span class="m5m-head-text"><span class="m5m-title">'+y(n)+"</span>"+(s?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+y(s)+"</span>":"")+'</span><button class="m5m-close" type="button" aria-label="Close '+y(n)+'">'+h.close+'</button></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+g+"</section></div>",G.root=v.querySelector(".m5m-root"),G.launcher=v.querySelector(".m5m-launcher"),G.panel=v.querySelector(".m5m-panel"),G.messages=v.querySelector(".m5m-messages"),G.input=v.querySelector(".m5m-input"),G.actionbar=v.querySelector(".m5m-actionbar"),ye(),G.launcher.addEventListener("click",function(){try{se()}catch(e){x(e)}}),v.querySelector(".m5m-close").addEventListener("click",function(){try{le()}catch(e){}}),v.querySelector(".m5m-scrim").addEventListener("click",function(){try{le()}catch(e){}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&ne()&&le()}),v.addEventListener("keydown",function(e){if("Tab"===e.key&&"modal"===V&&ne()){var t=function(){try{var e=G.panel.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(e)}catch(e){return[]}}();if(t.length){var a=t[0],r=t[t.length-1],n=v.activeElement;e.shiftKey?n!==a&&-1!==t.indexOf(n)||(e.preventDefault(),r.focus()):n!==r&&-1!==t.indexOf(n)||(e.preventDefault(),a.focus())}}}),v.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),v.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),function(e){var a="m5m_auto_opened_"+t;try{if("1"===sessionStorage.getItem(a))return}catch(e){}function r(){if(!Y){try{sessionStorage.setItem(a,"1")}catch(e){}try{se()}catch(e){}}}try{if("on_load"===e)oe(r,500);else if("on_8_seconds"===e)oe(r,8e3);else if("on_scroll_80_percent"===e){var n=function(){try{var e=window.pageYOffset||document.documentElement.scrollTop||0,t=document.documentElement.scrollHeight-window.innerHeight;t>0&&e/t>=.8&&(window.removeEventListener("scroll",n),r())}catch(e){}};window.addEventListener("scroll",n,{passive:!0})}else if("on_exit_intent"===e){var o=function(e){(null==e.clientY||e.clientY<=0)&&!Y&&(document.removeEventListener("mouseout",o),r())};document.addEventListener("mouseout",o)}}catch(e){}}(e.mag_trigger),de()}else x("magnet has no steps")}}()}function j(){var e="--m5-surface:#0F2435;--m5-surface-2:#17334A;--m5-border:#2a4a66;--m5-text:#E8F0F7;--m5-text-sub:#8FA8C0;--m5-meta:#9ab0c6;--m5-danger:#F87171;--m5-msg-bg:#0c1c2b;--m5-bot-bg:#17334A;--m5-bot-border:#23425e;--m5-shadow-launcher:0 8px 24px rgba(0,0,0,.5);--m5-shadow-panel:0 24px 60px rgba(0,0,0,.55),0 6px 16px rgba(0,0,0,.40);";return[":host{all:initial;}","[hidden]{display:none!important;}",".m5m-root{all:initial;","--m5-surface:#ffffff;--m5-surface-2:#f1f5f9;--m5-border:#e6ebf2;","--m5-text:#16243a;--m5-text-sub:#64748b;--m5-meta:#5b6b7f;--m5-danger:#DC2626;","--m5-msg-bg:#eef2f7;--m5-bot-bg:#ffffff;--m5-bot-border:#dde5ef;","--m5-shadow-launcher:0 8px 24px rgba(15,23,42,.20);","--m5-shadow-panel:0 24px 60px rgba(15,23,42,.22),0 6px 16px rgba(15,23,42,.10);","--m5-radius:18px;--m5-radius-msg:16px;--m5-radius-pill:999px;--m5-ease:cubic-bezier(.4,0,.2,1);",'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.45;}',".m5m-root *{box-sizing:border-box;}","@media (prefers-color-scheme: dark){.m5m-root:not(.m5m-light){"+e+"}}",".m5m-root.m5m-dark{"+e+"}",".m5m-launcher{position:fixed;bottom:var(--m5-launcher-bottom,20px);right:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);height:58px;padding:0 22px 0 16px;","border-radius:var(--m5-radius-pill);box-shadow:var(--m5-shadow-launcher),0 0 0 0 var(--m5-brand-glow);","transition:transform .22s var(--m5-ease),box-shadow .22s var(--m5-ease),opacity .2s var(--m5-ease);}",".m5m-launcher:hover{transform:translateY(-2px);box-shadow:var(--m5-shadow-launcher),0 10px 30px var(--m5-brand-glow);}",".m5m-launcher:active{transform:translateY(0);}",".m5m-launcher-ava{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(127,127,127,.18);color:var(--m5-on-brand);}",".m5m-launcher-ava svg{width:20px;height:20px;}",".m5m-launcher-label{font-size:15px;font-weight:650;letter-spacing:.1px;white-space:nowrap;}",".m5m-open .m5m-launcher{opacity:0;transform:translateY(8px) scale(.9);pointer-events:none;}",".m5m-panel{position:fixed;bottom:20px;right:20px;z-index:2147483000;width:374px;max-width:calc(100vw - 32px);","height:560px;max-height:calc(100vh - 40px);background:var(--m5-surface);border-radius:var(--m5-radius);","box-shadow:var(--m5-shadow-panel);display:flex;flex-direction:column;overflow:hidden;outline:none;","opacity:0;visibility:hidden;transform:translateY(14px) scale(.97);transform-origin:bottom right;pointer-events:none;","transition:opacity .26s var(--m5-ease),transform .26s var(--m5-ease),visibility 0s linear .26s;}",".m5m-open .m5m-panel{opacity:1;visibility:visible;transform:none;pointer-events:auto;transition:opacity .28s var(--m5-ease),transform .28s var(--m5-ease);}",".m5m-mode-right_slide .m5m-panel{top:0;bottom:0;right:0;height:100%;max-height:100%;width:400px;max-width:100vw;border-radius:0;transform:translateX(28px);}",".m5m-mode-right_slide.m5m-open .m5m-panel{transform:none;}",".m5m-mode-modal .m5m-panel{top:50%;left:50%;right:auto;bottom:auto;transform:translate(-50%,-46%) scale(.97);width:400px;max-width:calc(100vw - 24px);height:min(600px,86vh);transform-origin:center;}",".m5m-mode-modal.m5m-open .m5m-panel{transform:translate(-50%,-50%);}",".m5m-scrim{position:fixed;inset:0;z-index:2147482999;background:rgba(11,18,32,.5);opacity:0;visibility:hidden;transition:opacity .25s var(--m5-ease),visibility 0s linear .25s;}",".m5m-mode-modal.m5m-open .m5m-scrim{opacity:1;visibility:visible;transition:opacity .25s var(--m5-ease);}",".m5m-mode-inline{display:block;width:100%;}",".m5m-inline-card{display:flex;flex-direction:column;width:100%;max-width:var(--m5-inline-w,640px);margin:0 auto;height:var(--m5-inline-h,min(520px,80vh));","background:var(--m5-surface);border:1px solid var(--m5-border);border-radius:var(--m5-radius);box-shadow:0 6px 24px rgba(15,23,42,.08);overflow:hidden;}",".m5m-mode-inline .m5m-header{flex-direction:column;align-items:center;text-align:center;gap:8px;padding:24px 22px 18px;background:var(--m5-surface);color:var(--m5-text);border-bottom:1px solid var(--m5-border);}",".m5m-mode-inline .m5m-ava{width:54px;height:54px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mode-inline .m5m-ava svg{width:28px;height:28px;}",".m5m-mode-inline .m5m-head-text{align-items:center;}",".m5m-mode-inline .m5m-title{font-size:20px;font-weight:700;line-height:1.28;}",".m5m-mode-inline .m5m-subtitle{color:var(--m5-text-sub);opacity:1;justify-content:center;}",".m5m-mode-inline .m5m-messages{padding:18px 18px 10px;}",".m5m-choices.m5m-tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;}",".m5m-tiles .m5m-choice:last-child:nth-child(odd){grid-column:1 / -1;}",".m5m-tiles .m5m-choice{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:10px;min-height:84px;padding:14px 16px;border:0;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:hover{transform:translateY(-2px);border:0;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 24px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:active{transform:translateY(0) scale(.99);}",".m5m-tiles .m5m-choice-icon{width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.22);color:var(--m5-on-brand);}",".m5m-tiles .m5m-choice-icon svg{width:22px;height:22px;}",".m5m-tiles .m5m-choice-body{flex:1 1 auto;}",".m5m-tiles .m5m-choice-label{font-size:14.5px;font-weight:650;line-height:1.3;white-space:normal;}",".m5m-tiles .m5m-choice-desc{color:var(--m5-on-brand);opacity:.85;}",".m5m-tiles .m5m-choice-arrow{display:none;}","@media (max-width:420px){.m5m-choices.m5m-tiles{grid-template-columns:1fr;}}",".m5m-header{display:flex;align-items:center;gap:12px;padding:15px 16px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));}",".m5m-ava{position:relative;flex:0 0 auto;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:rgba(127,127,127,.20);overflow:hidden;color:var(--m5-on-brand);}",".m5m-ava svg{width:21px;height:21px;}",".m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:50%;}",".m5m-head-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-title{font-size:15.5px;font-weight:680;letter-spacing:.1px;line-height:1.25;}",".m5m-subtitle{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.92;font-weight:500;}",".m5m-online{width:7px;height:7px;border-radius:50%;background:#34D399;box-shadow:0 0 0 0 rgba(52,211,153,.6);animation:m5mPulse 2.4s ease-in-out infinite;}",".m5m-close{flex:0 0 auto;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:var(--m5-on-brand);cursor:pointer;transition:background .18s var(--m5-ease);}",".m5m-close:hover{background:rgba(127,127,127,.22);}",".m5m-messages{flex:1;overflow-y:auto;padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px;background:var(--m5-msg-bg);}",".m5m-row{display:flex;align-items:flex-end;gap:8px;max-width:100%;animation:m5mIn .32s var(--m5-ease) both;}",".m5m-row-user{flex-direction:row-reverse;}",".m5m-row.m5m-grouped{margin-top:-4px;}",".m5m-msg-ava{position:relative;flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));overflow:hidden;align-self:flex-start;color:var(--m5-on-brand);}",".m5m-msg-ava:empty{background:transparent;}",".m5m-msg-ava svg{width:15px;height:15px;}",".m5m-col{display:flex;flex-direction:column;gap:3px;max-width:78%;}",".m5m-msg{padding:10px 14px;border-radius:var(--m5-radius-msg);font-size:14px;line-height:1.45;word-wrap:break-word;}",".m5m-bot{background:var(--m5-bot-bg);color:var(--m5-text);border:1px solid var(--m5-bot-border);border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(15,23,42,.10);}",".m5m-user{max-width:78%;align-self:flex-end;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);border-bottom-right-radius:5px;box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-time{font-size:11px;color:var(--m5-meta);padding:0 6px;}",".m5m-typing{display:flex;align-items:center;gap:4px;padding:13px 15px;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);border-bottom-left-radius:5px;}",".m5m-typing span{width:7px;height:7px;border-radius:50%;background:var(--m5-text-sub);opacity:.55;animation:m5mDot 1.2s infinite ease-in-out;}",".m5m-typing span:nth-child(2){animation-delay:.16s;}",".m5m-typing span:nth-child(3){animation-delay:.32s;}",".m5m-input{padding:12px 14px 14px;background:var(--m5-surface);border-top:1px solid var(--m5-border);}",".m5m-input:empty{display:none;}",".m5m-actionbar{display:flex;border-top:1px solid var(--m5-border);background:var(--m5-surface);}",".m5m-action{flex:1;appearance:none;border:0;background:var(--m5-surface);cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:9px 4px;min-height:54px;color:var(--m5-text-sub);text-decoration:none;font-size:11px;font-weight:600;transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-action svg{width:20px;height:20px;}",".m5m-action:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-action:active{background:var(--m5-brand-soft);}",".m5m-action.m5m-act-on{color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:inset 0 -2.5px 0 var(--m5-brand);}",".m5m-action + .m5m-action{border-left:1px solid var(--m5-border);}",".m5m-form{display:flex;gap:8px;align-items:center;}",".m5m-form input{flex:1;min-width:0;border:1.5px solid var(--m5-border);border-radius:var(--m5-radius-pill);padding:11px 16px;font-size:14px;outline:none;background:var(--m5-surface);color:var(--m5-text);transition:border-color .18s var(--m5-ease),box-shadow .18s var(--m5-ease);}",".m5m-form input::placeholder{color:var(--m5-text-sub);}",".m5m-form input:focus{border-color:var(--m5-brand);box-shadow:0 0 0 3px var(--m5-brand-ring);}",".m5m-send{flex:0 0 auto;width:44px;height:44px;border:0;border-radius:50%;color:var(--m5-on-brand);cursor:pointer;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-send:hover{transform:scale(1.06);}",".m5m-send:active{transform:scale(.94);}",".m5m-choices{display:flex;flex-direction:column;gap:8px;}",".m5m-choice{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:14px;background:var(--m5-surface);color:var(--m5-text);padding:11px 14px;font-size:14px;font-weight:600;font-family:inherit;min-height:44px;transition:transform .16s var(--m5-ease),border-color .16s var(--m5-ease),background .16s var(--m5-ease),box-shadow .16s var(--m5-ease);}",".m5m-choice:hover{transform:translateX(4px);border-color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:0 4px 14px var(--m5-brand-glow);}",".m5m-choice:active{transform:translateX(2px) scale(.99);}",".m5m-choice-icon{flex:0 0 auto;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-choice-icon svg{width:18px;height:18px;}",".m5m-choice-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-choice-label{line-height:1.3;}",".m5m-choice-arrow{flex:0 0 auto;color:var(--m5-text-sub);opacity:0;transform:translateX(-4px);transition:opacity .16s var(--m5-ease),transform .16s var(--m5-ease),color .16s var(--m5-ease);display:grid;place-items:center;}",".m5m-choice:hover .m5m-choice-arrow{opacity:1;transform:translateX(0);color:var(--m5-brand);}",".m5m-success{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:26px 22px;margin-top:auto;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-success-icon{display:grid;place-items:center;width:62px;height:62px;border-radius:18px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 28px var(--m5-brand-glow);animation:m5mPop .42s var(--m5-ease) both;}",".m5m-success-title{font-size:17px;font-weight:700;color:var(--m5-text);margin-top:4px;}",".m5m-success-text{font-size:13.5px;color:var(--m5-text-sub);max-width:260px;}",".m5m-success-cta{margin-top:8px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:11px 26px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-success-cta:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-success-link{display:inline-block;margin-top:8px;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-success-link:hover{transform:translateY(-1px);}",".m5m-terminal{display:flex;justify-content:center;padding:8px 0 14px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-terminal-cta{display:inline-block;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-terminal-cta:hover{transform:translateY(-1px);}",".m5m-skip{display:block;margin:8px auto 0;border:0;background:transparent;color:var(--m5-text-sub);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;padding:4px 10px;border-radius:var(--m5-radius-pill);transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-skip:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-no-launcher .m5m-launcher{display:none!important;}",".m5m-summary{align-self:stretch;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);padding:15px 16px;box-shadow:0 1px 3px rgba(15,23,42,.10);animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sum-head{font-size:13px;font-weight:700;color:var(--m5-text);margin-bottom:11px;}",".m5m-sum-rows{display:flex;flex-direction:column;gap:9px;}",".m5m-sum-row{display:flex;justify-content:space-between;gap:14px;font-size:13px;line-height:1.35;}",".m5m-sum-label{color:var(--m5-text-sub);white-space:nowrap;}",".m5m-sum-val{color:var(--m5-text);font-weight:600;text-align:right;word-break:break-word;}",".m5m-sum-confirm{margin-top:14px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:11px;font-size:14px;font-weight:650;cursor:pointer;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-sum-confirm:hover{transform:translateY(-1px);}",".m5m-sum-confirm:disabled{opacity:.6;cursor:default;transform:none;}",".m5m-error{display:flex;flex-direction:column;gap:10px;align-items:center;padding:18px;text-align:center;}",".m5m-error-text{font-size:13.5px;color:var(--m5-danger);}",".m5m-retry{border:0;border-radius:var(--m5-radius-pill);padding:11px 22px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-home{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:22px 20px 10px;margin:auto 0;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-home-ava{position:relative;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 26px var(--m5-brand-glow);overflow:hidden;}",".m5m-home-ava .m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-home-ava svg{width:26px;height:26px;}",".m5m-home-ava .m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:16px;}",".m5m-home-title{font-size:18px;font-weight:750;color:var(--m5-text);line-height:1.3;}",".m5m-home-text{font-size:13.5px;color:var(--m5-text-sub);max-width:290px;line-height:1.5;}",".m5m-home-hint{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:var(--m5-brand);}",".m5m-home-hint svg{width:16px;height:16px;}",".m5m-reveal{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:26px 22px;margin:auto 0;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-reveal-icon{display:grid;place-items:center;width:56px;height:56px;border-radius:16px;color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-reveal-icon svg{width:26px;height:26px;}",".m5m-reveal-title{font-size:16px;font-weight:700;color:var(--m5-text);}",".m5m-reveal-val{font-size:19px;font-weight:750;color:var(--m5-brand);text-decoration:none;word-break:break-word;}",".m5m-reveal-val:hover{text-decoration:underline;}",".m5m-reveal-copy{display:inline-flex;align-items:center;gap:6px;margin-top:4px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease),color .16s var(--m5-ease);}",".m5m-reveal-copy:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-reveal-copy svg{width:15px;height:15px;}",".m5m-multi{display:flex;flex-direction:column;gap:8px;align-self:stretch;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-mopt{display:flex;align-items:center;gap:11px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:13px;background:var(--m5-surface);color:var(--m5-text);padding:12px 14px;font-size:14px;font-weight:600;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-mopt:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-icon{flex:0 0 auto;display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mopt-icon svg{width:17px;height:17px;}",".m5m-mopt-label{flex:1;min-width:0;}",".m5m-mopt-check{flex:0 0 auto;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--m5-border);color:transparent;transition:background .14s var(--m5-ease),border-color .14s var(--m5-ease),color .14s var(--m5-ease);}",".m5m-mopt-check svg{width:13px;height:13px;}",".m5m-mopt-on{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-on .m5m-mopt-check{background:var(--m5-brand);border-color:var(--m5-brand);color:var(--m5-on-brand);}",".m5m-multi-cont{margin-top:6px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-multi-cont:hover:not(:disabled){transform:translateY(-1px);}",".m5m-multi-cont:disabled{opacity:.5;cursor:default;}",".m5m-sched{align-self:stretch;display:flex;flex-direction:column;gap:12px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sd-meta{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--m5-text-sub);}",".m5m-sd-meta svg{width:16px;height:16px;}",".m5m-sd-days{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;}",".m5m-sd-day{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:1px;width:52px;padding:8px 4px;border:1.5px solid var(--m5-border);border-radius:12px;background:var(--m5-surface);color:var(--m5-text);cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-day:hover{border-color:var(--m5-brand);}",".m5m-sd-dow{font-size:10.5px;font-weight:600;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-num{font-size:17px;font-weight:750;}",".m5m-sd-mon{font-size:10px;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-day.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-day.m5m-sd-on .m5m-sd-dow,.m5m-sd-day.m5m-sd-on .m5m-sd-mon{color:rgba(255,255,255,.85);}",".m5m-sd-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}",".m5m-sd-slot{border:1.5px solid var(--m5-border);border-radius:10px;background:var(--m5-surface);color:var(--m5-text);padding:9px 4px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-slot:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-sd-slot.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-confirm{margin-top:2px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-sd-confirm:hover:not(:disabled){transform:translateY(-1px);}",".m5m-sd-confirm:disabled{opacity:.5;cursor:default;}",".m5m-cal{align-self:stretch;display:flex;flex-direction:column;gap:10px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-cal-frame{border:0;width:100%;flex:1 1 auto;min-height:440px;border-radius:12px;background:#fff;}",".m5m-cal-done{padding:11px 14px;border-radius:12px;background:var(--m5-brand-soft);color:var(--m5-text);font-size:13px;font-weight:600;}","@keyframes m5mIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}","@keyframes m5mDot{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-4px);opacity:1;}}","@keyframes m5mPulse{0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5);}50%{box-shadow:0 0 0 5px rgba(52,211,153,0);}}","@keyframes m5mPop{0%{transform:scale(.4);opacity:0;}60%{transform:scale(1.08);}100%{transform:scale(1);opacity:1;}}","@media (max-width:480px){.m5m-panel{width:auto;left:12px;right:12px;bottom:12px;height:auto;top:12px;max-height:none;}.m5m-launcher{bottom:var(--m5-launcher-bottom,14px);right:14px;}}","@media (prefers-reduced-motion: reduce){.m5m-root *{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;}.m5m-choice:hover,.m5m-launcher:hover,.m5m-send:hover{transform:none;}}"].join("")}}();`;function pa(e={}){const t=e||{},a=Array.isArray(t.steps)&&t.steps.length?t.steps:[{id:"1",step_type:"message",step_prompts:["👋 Add steps in the flow builder to preview the conversation."],step_options:[],step_columns:[],step_description:""}];return{mag_display_mode:t.display_mode||"chat",mag_trigger:"on_load",mag_theme_color:/^#[0-9a-fA-F]{6}$/.test(t.theme_color||"")?t.theme_color:"#0072BA",mag_theme_mode:t.theme_mode||"auto",mag_title:t.title&&String(t.title).trim()||t.name||"Chat with us",mag_subtitle:t.subtitle!=null?t.subtitle:"Typically replies in a few minutes",mag_launcher_label:t.launcher_label||"",mag_logo_url:t.logo_url||"",mag_logo_fit:t.logo_fit==="contain"?"contain":"cover",mag_summary:!!t.summary,mag_summary_heading:t.summary_heading||"",mag_summary_confirm_label:t.summary_confirm_label||"",mag_home:!!t.home,mag_welcome:t.welcome!=null?t.welcome:"",mag_actions:Array.isArray(t.actions)?t.actions:[],mag_macro_steps:a,mag_font:t.font||"",mag_theme_vars:t.theme_vars&&typeof t.theme_vars=="object"&&Object.keys(t.theme_vars).length?t.theme_vars:void 0,mag_inline_width:t.inline_width||"",mag_inline_height:t.inline_height||"",mag_input_placeholder:t.input_placeholder||"",mag_success_title:t.success_title||"",mag_success_text:t.success_text!=null?t.success_text:"",mag_success_cta:t.success_cta&&t.success_cta.url&&t.success_cta.label?t.success_cta:void 0}}function To(e){const t=JSON.stringify([e]),a=yl.replace(/##APPGUID##/g,()=>"preview").replace(/["']##MAGNET_DEFINITIONS##["']/g,()=>t).replace(/<\/script>/gi,"<\\/script>");return`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
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
    ${e.mag_display_mode==="inline"?'<div class="pv-slot"><div data-m5m-inline></div></div>':'<div class="pv-cards"><div class="pv-card"></div><div class="pv-card"></div></div>'}
  </div>
  <script>
    (function () {
      var _f = window.fetch ? window.fetch.bind(window) : null;
      window.fetch = function (u, o) {
        if (String(u).indexOf('/capture') !== -1 || String(u).indexOf('/event') !== -1) {
          return Promise.resolve({ ok: true, status: 204, json: function () { return Promise.resolve({ ok: true }); } });
        }
        return _f ? _f(u, o) : Promise.reject(new Error('no fetch'));
      };
      // Funnel beacons must not leave the preview (sendBeacon bypasses the fetch stub).
      try { navigator.sendBeacon = function () { return true; }; } catch (e) {}
    })();
  <\/script>
  <script>${a}<\/script>
</body></html>`}let fn=!1;function Co(){if(fn)return;const e=document.createElement("style");e.id="m5t-preview-styles",e.textContent=`
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
    /* embedded live pane (edit modal's right column) */
    .pv-pane { display: flex; flex-direction: column; height: 100%; }
    .pv-pane__hd { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); padding: 0 0 10px; }
    .pv-pane__hd > .material-symbols-outlined { font-size: 18px; color: var(--color-primary-600, #0072BA); }
    .pv-pane__hdright { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    .pv-pane__seg button { padding: 5px 8px; }
    .pv-pane__seg button .material-symbols-outlined { font-size: 17px; }
    .pv-pane__badge { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 600; color: var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.12)); padding: 2px 9px; border-radius: 999px; }
    .pv-pane__badge[hidden] { display: none; }
    .pv-pane__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--color-primary-600, #0072BA); animation: pvPulse 0.8s ease-in-out infinite; }
    @keyframes pvPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
    .pv-pane__body { flex: 1 1 auto; min-height: 0; }
    .pv-pane__vp { width: 100%; height: 100%; display: flex; justify-content: center; }
    /* 1:1, no downscaling — the iframe width IS the viewport that drives the widget's
       responsive layout (mobile full-screen panel vs desktop floating card). */
    .pv-pane__frame { height: 100%; border: 0; border-radius: 12px; background: #eef2f7; box-shadow: 0 6px 24px rgba(11,18,32,0.10); display: block; }
    .pv-pane__frame[data-device="mobile"] { width: 390px; max-width: 100%; }
    .pv-pane__frame[data-device="desktop"] { width: 100%; }
    .pv-pane .pv-hint { margin-top: 8px; }
    /* clickable "why might it look different" info icon + popover */
    .pv-hintwrap { position: relative; }
    .pv-info { appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); padding: 0 2px; vertical-align: -3px; line-height: 1; }
    .pv-info:hover { color: var(--color-primary-600, #0072BA); }
    .pv-info .material-symbols-outlined { font-size: 15px; }
    .pv-info-pop { position: absolute; left: 0; right: 0; bottom: 100%; margin-bottom: 8px; background: var(--color-bg, #fff); border: 1px solid var(--color-border, #D4DCE8); border-radius: 10px; box-shadow: 0 8px 26px rgba(11,18,32,0.16); padding: 12px 14px; font-size: 0.78rem; line-height: 1.5; color: var(--color-text, #0B1220); text-align: left; z-index: 5; }
    .pv-info-pop strong { display: block; margin-bottom: 4px; }
    .pv-info-pop[hidden] { display: none; }
    .pv-hint--style { margin-top: 3px; }
  `,document.head.appendChild(e),fn=!0}function Io(e){return`<div class="pv-hintwrap">
    <p class="pv-hint">${e}</p>
    <p class="pv-hint pv-hint--style">Custom styling on your site won't be shown here
      <button type="button" class="pv-info" data-pv-info aria-label="More about custom styling"><span class="material-symbols-outlined" aria-hidden="true">info</span></button>
    </p>
    <div class="pv-info-pop" data-pv-info-pop hidden>
      <strong>About custom styling</strong>
      This preview shows the magnet exactly as you set it up here. If you style over it with your own CSS on your website or app, those changes won't show in this preview, so the live version can look a little different.
    </div>
  </div>`}function $o(e){const t=e.querySelector("[data-pv-info]"),a=e.querySelector("[data-pv-info-pop]");t&&a&&t.addEventListener("click",()=>{a.hidden=!a.hidden})}function wl(e,t){Co(),e.innerHTML=`
    <div class="pv-pane">
      <div class="pv-pane__hd"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Live preview
        <span class="pv-pane__hdright">
          <span class="pv-pane__badge" hidden><span class="pv-pane__dot"></span>Updating…</span>
          <span class="pv-seg pv-pane__seg" role="group" aria-label="Preview device">
            <button type="button" data-device="mobile" class="is-on" title="Mobile" aria-label="Mobile preview"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span></button>
            <button type="button" data-device="desktop" title="Desktop" aria-label="Desktop preview"><span class="material-symbols-outlined" aria-hidden="true">desktop_windows</span></button>
          </span>
        </span>
      </div>
      <div class="pv-pane__body"><div class="pv-pane__vp"><iframe class="pv-pane__frame" data-device="mobile" sandbox="allow-scripts" title="Live magnet preview"></iframe></div></div>
      ${Io("Live render of the real widget. Capture is disabled, so no test leads.")}
    </div>`,$o(e);const a=e.querySelector(".pv-pane__frame"),n=e.querySelector(".pv-pane__badge");let o=null,s=0;const r=450,i=()=>{const c=(typeof performance<"u"?performance.now():Date.now())-s;clearTimeout(o),c<r?o=setTimeout(()=>{n.hidden=!0},r-c):n.hidden=!0};a.addEventListener("load",i);const l=()=>{let c;try{c=To(t())}catch{return}s=typeof performance<"u"?performance.now():Date.now(),n.hidden=!1,a.srcdoc=c,clearTimeout(o),o=setTimeout(()=>{n.hidden=!0},1500)};return e.querySelector(".pv-pane__seg").addEventListener("click",c=>{const h=c.target.closest("button[data-device]");!h||h.dataset.device===a.dataset.device||(e.querySelectorAll(".pv-pane__seg button").forEach(y=>y.classList.toggle("is-on",y===h)),a.dataset.device=h.dataset.device)}),l(),{refresh:l,destroy(){clearTimeout(o)}}}function Lo(e){Co();let t="desktop";const a=document.createElement("div");a.className="pv-scrim",a.innerHTML=`
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
          ${Io("Live render of the actual widget. Capture is disabled, so no test leads are created.")}
        </div>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("open")),$o(a);const n=a.querySelector(".pv-frame"),o=a.querySelector(".pv-stage"),s=()=>{try{n.srcdoc=To(e())}catch{}};s();const r=()=>{a.classList.remove("open"),setTimeout(()=>a.remove(),180)};return a.querySelector('[data-x="close"]').addEventListener("click",r),a.querySelector('[data-x="refresh"]').addEventListener("click",s),a.addEventListener("click",i=>{i.target===a&&r()}),a.querySelector(".pv-seg").addEventListener("click",i=>{const l=i.target.closest("button[data-device]");!l||l.dataset.device===t||(t=l.dataset.device,a.querySelectorAll(".pv-seg button").forEach(c=>c.classList.toggle("is-on",c.dataset.device===t)),o.dataset.device=t,s())}),{close:r,rebuild:s}}let vn=!1;const X={magnets:[],owners:[],canProvision:!1,canManage:!1,primaryOrgGuid:null,stats:{}},xl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},b=e=>String(e??"").replace(/[&<>"']/g,t=>xl[t]),He=(e,t="info")=>{try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}},pe=()=>A.getConfig?.().BASE_URL||"",No=e=>`<script src="${pe()}/m5t/v5/coreSnippet?appguid=${e}" async><\/script>`,El={chat:"Chat bubble",right_slide:"Slide-in panel",modal:"Modal",inline:"Inline"},Al={chat:"chat",right_slide:"vertical_split",modal:"web_asset",inline:"view_agenda"},Sl=[{value:"inline",icon:"view_agenda",label:"Inline"},{value:"chat",icon:"chat",label:"Chat"},{value:"right_slide",icon:"vertical_split",label:"Slide"},{value:"modal",icon:"web_asset",label:"Modal"}],kl=[{value:"auto",icon:"brightness_auto",label:"Auto"},{value:"light",icon:"light_mode",label:"Light"},{value:"dark",icon:"dark_mode",label:"Dark"}],Tl=[{value:"on_load",label:"Immediately on page load"},{value:"on_8_seconds",label:"After 8 seconds"},{value:"on_scroll_80_percent",label:"At 80% scroll depth"},{value:"on_exit_intent",label:"On exit intent (mouse leaves the page)"},{value:"none",label:"Manual only (visitor clicks the launcher)"}],Oo={book:{label:"Book",icon:"event",kind:"book"},chat:{label:"Chat",icon:"chat",kind:"flow"},call:{label:"Call",icon:"phone",kind:"value",placeholder:"Phone number"},email:{label:"Email",icon:"mail",kind:"value",placeholder:"Email address"},support:{label:"Support",icon:"support_agent",kind:"support"}},Cl=["book","chat","call","email","support"];let At=null;async function Il(){if(At)return At;let e;try{const t=await fetch(`${pe()}/m5t/v5/integrations/calendly/event_types`),a=await t.json().catch(()=>({}));t.status===404?e={ok:!1,reason:"not_connected"}:a.ok?e={ok:!0,list:a.data.event_types||[],scheduling_url:a.data.scheduling_url||""}:e={ok:!1,reason:"error"}}catch{e={ok:!1,reason:"error"}}return e.ok&&(At=e),e}async function $l(e){const t=e.dataset.saved||"",a=e.dataset.savedName||"Saved Calendly event";e.innerHTML=`<option value="${b(t)}">${t?b(a):"Loading event types"}</option>`;const n=await Il();if(!n.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${b(t)}" selected>${b(a)}</option>`:`<option value="">${n.reason==="not_connected"?"Connect Calendly under Settings, Integrations first":"Could not load event types"}</option>`;return}const o=[];n.scheduling_url&&o.push({url:n.scheduling_url,label:"Full scheduling page (visitor picks the event)"}),n.list.forEach(s=>o.push({url:s.scheduling_url,label:s.duration?`${s.name} (${s.duration} min)`:s.name})),t&&!o.some(s=>s.url===t)&&o.unshift({url:t,label:a}),e.innerHTML=o.length?o.map(s=>`<option value="${b(s.url)}"${s.url===(t||o[0].url)?" selected":""}>${b(s.label)}</option>`).join(""):'<option value="">No active event types</option>'}let St=null;async function Ll(){if(St)return St;let e;try{const t=await fetch(`${pe()}/m5t/v5/integrations/callrail/trackers`),a=await t.json().catch(()=>({}));t.status===404?e={ok:!1,reason:"not_connected"}:a.ok?e={ok:!0,list:a.data.trackers||[]}:e={ok:!1,reason:"error"}}catch{e={ok:!1,reason:"error"}}return e.ok&&(St=e),e}async function Nl(e){const t=e.dataset.saved||"",a=e.dataset.savedName||"Saved tracking number";e.innerHTML=`<option value="${b(t)}">${t?b(a):"Loading tracking numbers"}</option>`;const n=await Ll();if(!n.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${b(t)}" selected>${b(a)}</option>`:`<option value="">${n.reason==="not_connected"?"Connect CallRail under Settings, Integrations first":"Could not load tracking numbers"}</option>`;return}const o=n.list.map(s=>({number:s.number,id:s.id,name:s.name,label:`${s.name} · ${s.number}${s.type==="session"?" (number pool)":""}`}));t&&!o.some(s=>s.number===t)&&o.unshift({number:t,id:e.dataset.savedId||"",name:a,label:a}),e.innerHTML=o.length?o.map(s=>`<option value="${b(s.number)}" data-tracker-id="${b(s.id)}" data-tracker-name="${b(s.name)}"${s.number===(t||o[0].number)?" selected":""}>${b(s.label)}</option>`).join(""):'<option value="">No active tracking numbers in this company</option>'}function _n(e,t,a){return`<div class="mag-seg" role="radiogroup" aria-label="${b(e)}">${a.map(n=>`
    <label><input type="radio" name="${b(e)}" value="${b(n.value)}"${n.value===t?" checked":""}>
      <span><span class="material-symbols-outlined" aria-hidden="true">${b(n.icon)}</span>${b(n.label)}</span></label>`).join("")}</div>`}function Ol(e,t){const a=Oo[e],n=!!t,o=n?"":" disabled";let s="";if(a.kind==="value"&&e==="call"){const i=t?.config?.source==="callrail",l=i&&t?.value||"",c=i?t?.config?.tracker_name||"Saved tracking number":"";s=`
      <select class="mag-modal__select mag-cta__callsrc"${o}>
        <option value=""${i?"":" selected"}>Phone number</option>
        <option value="callrail"${i?" selected":""}>CallRail</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="${b(a.placeholder)}" value="${b(i?"":t?.value||"")}"${o}${i?" hidden":""}>
      <select class="mag-modal__select mag-cta__crtracker" data-saved="${b(l)}" data-saved-name="${b(c)}" data-saved-id="${b(i&&t?.config?.tracker_id||"")}"${o}${i?"":" hidden"}>
        ${l?`<option value="${b(l)}" selected>${b(c)}</option>`:""}
      </select>`}else if(a.kind==="value")s=`<input class="mag-modal__input mag-cta__val" type="text" placeholder="${b(a.placeholder)}" value="${b(t?.value||"")}"${o}>`;else if(a.kind==="book"){const i=t?.config?.meeting_label||t?.value||"",l=t?.config?.source==="calendly",c=l&&t?.config?.calendly_url||"",h=l?t?.config?.event_name||"Saved Calendly event":"";s=`
      <select class="mag-modal__select mag-cta__booksrc"${o}>
        <option value=""${l?"":" selected"}>Built-in scheduler</option>
        <option value="calendly"${l?" selected":""}>Calendly</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="Meeting label (e.g. 15 minute call), or paste a booking link" value="${b(i)}"${o}${l?" hidden":""}>
      <select class="mag-modal__select mag-cta__calevent" data-saved="${b(c)}" data-saved-name="${b(h)}"${o}${l?"":" hidden"}>
        ${c?`<option value="${b(c)}" selected>${b(h)}</option>`:""}
      </select>`}else s=`<span class="mag-cta__note">${a.kind==="support"?"Multi-select intake":"Opens your conversation flow"}</span>`;let r="";if(a.kind==="support"){const i=(t?.config?.options||[]).map(l=>l&&l.label||l).filter(Boolean);r=`<textarea class="mag-modal__input mag-cta__opts" rows="3" placeholder="Support options, one per line (e.g. Sales&#10;Support&#10;Billing)"${o}>${b(i.join(`
`))}</textarea>`}return`<div class="mag-cta" data-type="${e}" data-kind="${a.kind}">
    <div class="mag-cta__main">
      <label class="mag-cta__tog"><input type="checkbox" class="mag-cta__on"${n?" checked":""}>
        <span class="material-symbols-outlined" aria-hidden="true">${a.icon}</span>${a.label}</label>
      ${s}
    </div>
    ${r}
  </div>`}function Rl(){if(vn)return;const e=document.createElement("style");e.id="m5t-magnets-styles",e.textContent=`
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
    .page-shell .mag-stats { display: flex; align-items: center; gap: 12px; font-size: 0.76rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-stats span { display: inline-flex; align-items: center; gap: 4px; }
    .page-shell .mag-stats .material-symbols-outlined { font-size: 15px; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-stats b { font-weight: 700; color: var(--color-text, #0B1220); }
    .page-shell .mag-ab-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 999px; background: #EDE9FE; color: #6D28D9; }
    .page-shell .mag-ab-chip .material-symbols-outlined { font-size: 13px; }
    .page-shell .mag-alert-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 999px; background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); text-decoration: none; }
    .page-shell .mag-alert-chip:hover { filter: brightness(0.95); }
    .page-shell .mag-alert-chip .material-symbols-outlined { font-size: 13px; }
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
    .page-shell .mag-btn--primary { border-color: var(--color-primary-600, #0072BA); color: var(--color-primary-600, #0072BA); font-weight: 700; }
    .page-shell .mag-btn--primary:hover { background: var(--color-accent-soft, rgba(0,114,186,0.10)); }
    .page-shell .mag-actions--sub { margin-top: 6px; }
    .page-shell .mag-actions--sub .mag-btn { font-size: 0.74rem; color: var(--color-text-muted, #4A5A78); }

    .mag-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.5); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .mag-modal-scrim.open { opacity: 1; }
    .mag-modal { position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001; display: flex; flex-direction: column; width: min(1680px, 95vw); height: min(920px, 92vh); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3); opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease; overflow: hidden; }
    .mag-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .mag-modal__head { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .mag-modal__title { font-family: var(--font-display, inherit); font-size: 1.05rem; font-weight: 600; }
    .mag-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .mag-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    /* two-pane: section nav (sub-menu) + one panel at a time, so no giant single scroll */
    .mag-modal__main { flex: 1 1 auto; display: flex; min-height: 0; }
    .mag-modal__nav { flex: 0 0 auto; width: 188px; padding: 14px 10px; border-right: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F7F9FC); display: flex; flex-direction: column; gap: 3px; overflow-y: auto; }
    .mag-modal__navitem { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; text-align: left; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 9px; color: var(--color-text-muted, #4A5A78); }
    .mag-modal__navitem .material-symbols-outlined { font-size: 19px; }
    .mag-modal__navitem:hover { background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .mag-modal__navitem.is-active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .mag-modal__body { flex: 1 1 auto; overflow-y: auto; padding: 20px 24px; min-width: 0; }
    /* live preview column — wide screens only; narrow keeps the footer Preview button */
    .mag-modal__preview { flex: 0 0 clamp(420px, 34vw, 720px); border-left: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F7F9FC); padding: 18px; overflow: hidden; }
    @media (max-width: 1199px) { .mag-modal__preview { display: none; } }
    .mag-tab[hidden] { display: none; }
    .mag-tab > .mag-modal__sec:first-child { margin-top: 0; padding-top: 0; border-top: 0; }
    .mag-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin: 14px 0 6px; }
    .mag-modal__label:first-child { margin-top: 0; }
    .mag-modal__input, .mag-modal__select { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .mag-modal__input:focus, .mag-modal__select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .mag-modal__row { display: flex; gap: 12px; align-items: flex-end; }
    .mag-modal__row > div { flex: 1; }
    .mag-modal__color { width: 46px; height: 44px; padding: 3px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 10px; background: var(--color-bg, #fff); cursor: pointer; }
    .mag-modal__hint { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: 5px 0 0; }
    .mag-modal__foot { flex: 0 0 auto; display: flex; align-items: center; gap: 14px; padding: 13px 20px; border-top: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); }
    .mag-modal__error { flex: 1 1 auto; color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 0; min-height: 1em; }
    .mag-modal__foot-btns { flex: 0 0 auto; display: flex; gap: 10px; }
    .mag-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); }
    .mag-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .mag-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .mag-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; }
    .mag-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }
    @media (max-width: 640px) {
      .mag-modal { width: 96vw; height: 92vh; }
      .mag-modal__main { flex-direction: column; }
      .mag-modal__nav { width: auto; flex-direction: row; overflow-x: auto; border-right: 0; border-bottom: 1px solid var(--color-border, #D4DCE8); }
      .mag-modal__navitem { flex: 0 0 auto; }
    }

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
    .mag-cta__booksrc, .mag-cta__callsrc { flex: 0 0 auto; width: auto; }
    .mag-cta__calevent, .mag-cta__crtracker { flex: 1 1 auto; min-width: 0; }
    .mag-cta__note { flex: 1 1 auto; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .mag-cta__opts { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.86rem; resize: vertical; }
    .mag-cta__val:disabled, .mag-cta__opts:disabled { opacity: 0.5; }
    .mag-tog-row { display: flex; align-items: center; gap: 10px; }
    .mag-tog-row label { font-size: 0.9rem; font-weight: 600; cursor: pointer; margin: 0; }
    .mag-surface-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 10px; margin-top: 8px; }
    .mag-surface-grid[hidden] { display: none; }
    .mag-surface-grid label { display: block; }
    #mag-f-inline-size[hidden] { display: none; }
    .mag-logo-drop { display: flex; align-items: center; gap: 12px; border: 1.5px dashed var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 12px; cursor: pointer; transition: border-color .12s, background .12s; }
    .mag-logo-drop:hover, .mag-logo-drop.is-dragover { border-color: var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.06)); }
    .mag-logo-drop__preview { flex: 0 0 auto; width: 48px; height: 48px; border-radius: 50%; overflow: hidden; display: grid; place-items: center; background: var(--color-surface, #F4F7FB); color: var(--color-text-subtle, #6C7C9A); }
    .mag-logo-drop__preview img { width: 100%; height: 100%; object-fit: cover; }
    .mag-logo-drop__body { flex: 1 1 auto; min-width: 0; }
    .mag-logo-drop__t { margin: 0; font-size: 0.86rem; }
    .mag-logo-drop__browse { appearance: none; border: none; background: none; padding: 0; font: inherit; font-weight: 700; color: var(--color-primary-600, #0072BA); cursor: pointer; text-decoration: underline; }
    .mag-logo-drop__remove { flex: 0 0 auto; appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .mag-logo-drop__remove:hover { color: var(--color-danger, #DD4124); border-color: var(--color-danger, #DD4124); }
    .mag-logo-drop__remove .material-symbols-outlined { font-size: 17px; }
    .mag-logo-drop__remove[hidden] { display: none; }
  `,document.head.appendChild(e),vn=!0}function ua(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Ml(e){const t=X.stats[e];if(!t||!t.opens&&!t.leads)return'<div class="mag-stats"><span><span class="material-symbols-outlined" aria-hidden="true">monitoring</span>No activity yet (30d)</span></div>';const a=n=>Number(n||0).toLocaleString();return`<div class="mag-stats" title="Trailing 30 days">
    <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span><b>${a(t.opens)}</b>&nbsp;opens</span>
    <span><span class="material-symbols-outlined" aria-hidden="true">person_add</span><b>${a(t.leads)}</b>&nbsp;leads</span>
    ${t.completion_rate!=null?`<span><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><b>${t.completion_rate}%</b></span>`:""}
  </div>`}function Fl(e){const t=X.owners.length>1||A.getMemberships().length>1,a=(e.domains||[]).filter(Boolean),n=X.canManage;return`
    <div class="mag-card" data-guid="${b(e.guid)}">
      <div class="mag-card__top">
        <span class="mag-swatch" style="background:${b(e.theme_color||"#0072BA")}"></span>
        <span class="mag-card__hd">
          <div class="mag-name" title="${b(e.name)}">${b(e.name)}</div>
          ${t&&e.owner_name?`<div class="mag-owner">${b(e.owner_name)}</div>`:""}
        </span>
        <span class="mag-badge" data-s="${b(e.status)}">${b(e.status)}</span>
      </div>
      <span class="mag-mode"><span class="material-symbols-outlined" aria-hidden="true">${Al[e.display_mode]||"chat"}</span>${b(El[e.display_mode]||"Chat bubble")}${e.ab?.enabled?'&nbsp;&nbsp;<span class="mag-ab-chip"><span class="material-symbols-outlined" aria-hidden="true">science</span>A/B</span>':""}${(e.notify_emails||[]).length?`&nbsp;&nbsp;<a class="mag-alert-chip" href="#/settings/notifications" title="Lead alerts to ${(e.notify_emails||[]).length} email${(e.notify_emails||[]).length===1?"":"s"}. Manage in Settings."><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span>${(e.notify_emails||[]).length}</a>`:""}</span>
      ${Ml(e.guid)}
      <div class="mag-domains">${a.length?a.map(o=>b(o)).join(", "):"<span>No domains set. Add yours to go live.</span>"}</div>
      <div class="mag-embed">
        <input type="text" readonly value="${b(No(e.guid))}" aria-label="Embed snippet">
        <button class="mag-btn" data-action="copy" data-guid="${b(e.guid)}" title="Copy embed snippet"><span class="material-symbols-outlined" aria-hidden="true">content_copy</span></button>
      </div>
      ${e.display_mode==="inline"?'<div class="mag-inline-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><span>Inline mode: also place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> where you want it to appear.</span></div>':""}
      <div class="mag-actions">
        <button class="mag-btn" data-action="preview" data-guid="${b(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview</button>
        ${n?`
        <button class="mag-btn mag-btn--primary" data-action="edit" data-guid="${b(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Edit</button>`:""}
      </div>
      ${n?`
      <div class="mag-actions mag-actions--sub">
        <button class="mag-btn" data-action="flow" data-guid="${b(e.guid)}" title="Edit the conversation flow"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
        <button class="mag-btn" data-action="toggle" data-guid="${b(e.guid)}">${e.status==="ENABLED"?'<span class="material-symbols-outlined" aria-hidden="true">pause</span>Disable':'<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Enable'}</button>
        <button class="mag-btn danger" data-action="delete" data-guid="${b(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </div>`:""}
    </div>`}function Pl(){return Q()?dt({section:"magnets",title:"Your Magnets",description:"Pick a client to view and manage their magnets."}):(Rl(),`
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
          ${ua("hourglass_empty","Loading magnets…")}
        </div>
      </div>
    </div>`)}async function Dl(){if(Q()){const t=a=>Number(a||0).toLocaleString();return tt(pe(),[{h:"Magnets",td:a=>`${t(a.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${t(a.magnets.total)}</span>`},{h:"Leads · wk",td:a=>t(a.leads.this_week)},{h:"Leads · total",td:a=>t(a.leads.total)}],{emptyMsg:"No client orgs yet. Create one under Clients, then provision its magnets here."})}At=null,St=null,document.getElementById("mag-new-btn")?.addEventListener("click",()=>ma(null)),document.getElementById("mag-body")?.addEventListener("click",Bl),await zt()}async function zt(){const e=document.getElementById("mag-body");if(!e)return;try{const[a,n]=await Promise.all([fetch(`${pe()}/m5t/v5/magnets`),fetch(`${pe()}/m5t/v5/magnets/stats`).catch(()=>null)]),o=await a.json().catch(()=>({}));if(!o.ok)throw new Error(o.message||"Failed to load");X.magnets=o.magnets||[],X.owners=o.owners||[],X.canProvision=!!o.canProvision,X.canManage=!!o.canManage,X.primaryOrgGuid=o.primaryOrgGuid||null;const s=n?await n.json().catch(()=>({})):{};X.stats=s?.stats||{}}catch{e.innerHTML=ua("error","Could not load your magnets. Please try again.");return}const t=document.getElementById("mag-new-btn");if(t&&(t.style.display=X.canProvision?"":"none"),!X.magnets.length){e.innerHTML=ua("widgets",X.canProvision?"No magnets yet. Click “New magnet” to create your first.":"No magnets yet.");return}e.innerHTML=`<div class="mag-grid">${X.magnets.map(Fl).join("")}</div>`}function Bl(e){const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.guid,n=X.magnets.find(s=>s.guid===a),o=t.dataset.action;if(o==="copy")return Ul(a);if(n){if(o==="preview")return Lo(()=>pa(n));if(o==="edit")return ma(n);if(o==="flow")return ma(n,"flow");if(o==="toggle")return Gl(n);if(o==="delete")return Hl(n)}}async function Ul(e){try{await navigator.clipboard.writeText(No(e)),He("Embed snippet copied","success")}catch{He("Copy failed","danger")}}async function Gl(e){const t=e.status==="ENABLED"?"DISABLED":"ENABLED";try{if(!(await(await fetch(`${pe()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:t})})).json().catch(()=>({}))).ok)throw new Error;He(t==="ENABLED"?"Magnet enabled":"Magnet disabled","success")}catch{He("Update failed","danger");return}try{await zt()}catch(a){console.warn("[magnets] refresh after status toggle failed:",a)}}async function Hl(e){if(window.confirm(`Delete “${e.name}”? Visitors will no longer see this magnet.`)){try{if(!(await(await fetch(`${pe()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:"DELETE"})).json().catch(()=>({}))).ok)throw new Error;He("Magnet deleted","success")}catch{He("Delete failed","danger");return}try{await zt()}catch(t){console.warn("[magnets] refresh after delete failed:",t)}}}function Xt(e){const t=[];return e.querySelectorAll(".mag-cta").forEach(a=>{if(!a.querySelector(".mag-cta__on").checked)return;const n=a.dataset.type,o=a.dataset.kind,s=a.querySelector(".mag-cta__val"),r=s?s.value.trim():"";if(o==="value")if(n==="call"&&a.querySelector(".mag-cta__callsrc")?.value==="callrail"){const i=a.querySelector(".mag-cta__crtracker"),l=i?.value||"",c=i?.selectedOptions?.[0];l&&t.push({type:n,value:l,config:{source:"callrail",...c?.dataset?.trackerId?{tracker_id:c.dataset.trackerId}:{},...c?.dataset?.trackerName?{tracker_name:c.dataset.trackerName}:{}}})}else r&&t.push({type:n,value:r});else if(o==="book")if(a.querySelector(".mag-cta__booksrc")?.value==="calendly"){const i=a.querySelector(".mag-cta__calevent"),l=i?.value||"",c=(i?.selectedOptions?.[0]?.textContent||"").trim();t.push({type:n,config:{source:"calendly",...l?{calendly_url:l}:{},...l&&c?{event_name:c}:{}}})}else{const i={type:n};r&&(/^https?:\/\//i.test(r)?i.value=r:i.config={meeting_label:r}),t.push(i)}else if(o==="support"){const i=(a.querySelector(".mag-cta__opts")?.value||"").split(`
`).map(c=>c.trim()).filter(Boolean).map(c=>({label:c})),l={type:n};i.length&&(l.config={options:i}),t.push(l)}else t.push({type:n})}),{display_mode:e.querySelector('input[name="mag-display"]:checked')?.value||"chat",trigger:e.querySelector("#mag-f-trigger")?.value||"on_load",theme_mode:e.querySelector('input[name="mag-theme"]:checked')?.value||"auto",title:e.querySelector("#mag-f-title").value.trim(),theme_color:e.querySelector("#mag-f-color").value,subtitle:e.querySelector("#mag-f-subtitle").value,launcher_label:e.querySelector("#mag-f-launcher").value.trim(),logo_url:e.querySelector("#mag-f-logo").value.trim(),logo_fit:e.querySelector("#mag-f-logo-fit")?.value==="contain"?"contain":"cover",summary:e.querySelector("#mag-f-summary").checked,summary_heading:e.querySelector("#mag-f-summary-heading").value.trim(),home:e.querySelector("#mag-f-home").checked,welcome:e.querySelector("#mag-f-welcome").value,ab:Ro(e),actions:t,font:e.querySelector("#mag-f-font").value.trim(),theme_vars:Yl(e),inline_width:e.querySelector("#mag-f-inline-w").value.trim(),inline_height:e.querySelector("#mag-f-inline-h").value.trim(),hide_launcher:e.querySelector("#mag-f-hide-launcher").checked,input_placeholder:e.querySelector("#mag-f-input-ph").value,summary_confirm_label:e.querySelector("#mag-f-summary-confirm").value.trim(),success_title:e.querySelector("#mag-f-success-title").value.trim(),success_text:e.querySelector("#mag-f-success-text").value,success_cta:Kl(e)}}const zl=512,Vl=new Set(["image/png","image/jpeg","image/gif","image/webp"]),ql=8*1024*1024;function jl(e){return new Promise((t,a)=>{const n=new Image,o=new FileReader;o.onerror=()=>a(new Error("Could not read that file.")),o.onload=()=>{n.onerror=()=>a(new Error("That file isn’t a readable image.")),n.onload=()=>{const s=Math.min(1,zl/Math.max(n.naturalWidth,n.naturalHeight)),r=Math.max(1,Math.round(n.naturalWidth*s)),i=Math.max(1,Math.round(n.naturalHeight*s)),l=document.createElement("canvas");l.width=r,l.height=i,l.getContext("2d").drawImage(n,0,0,r,i),t(l.toDataURL("image/png"))},n.src=o.result},o.readAsDataURL(e)})}function Wl(e,t){const a=e.querySelector("#mag-logo-drop");if(!a)return;const n=e.querySelector("#mag-f-logo-file"),o=e.querySelector("#mag-logo-browse"),s=e.querySelector("#mag-logo-remove"),r=e.querySelector("#mag-logo-preview"),i=e.querySelector("#mag-logo-status"),l=e.querySelector("#mag-f-logo"),c=(m,x)=>{i.textContent=m,i.style.color=x?"var(--color-danger, #DD4124)":""},h=m=>{r.innerHTML=m?`<img src="${b(m)}" alt="">`:'<span class="material-symbols-outlined" aria-hidden="true">image</span>',s.hidden=!m},y=m=>{l.value=m,l.dispatchEvent(new Event("input",{bubbles:!0})),l.dispatchEvent(new Event("change",{bubbles:!0}))};async function _(m){if(!Vl.has(m.type)){c("PNG, JPEG, GIF, or WEBP only.",!0);return}if(m.size>ql){c("That file is too large (8MB max before resizing).",!0);return}c("Uploading…",!1);try{const x=await jl(m),g=await fetch(`${pe()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}/logo`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:x})}),f=await g.json().catch(()=>({}));if(!g.ok||!f.ok)throw new Error(f.error||`Upload failed (${g.status})`);const v=`${pe()}/m5t/v5/magnet/${encodeURIComponent(t.guid)}/logo?v=${Date.now()}`;y(v),h(v),c("Logo updated.",!1)}catch(x){c(x.message||"Upload failed.",!0)}}n.addEventListener("change",()=>{n.files[0]&&_(n.files[0]),n.value=""}),a.addEventListener("click",m=>{m.target===s||s.contains(m.target)||m.target!==o&&n.click()}),o.addEventListener("click",()=>n.click()),["dragenter","dragover"].forEach(m=>a.addEventListener(m,x=>{x.preventDefault(),a.classList.add("is-dragover")})),["dragleave","drop"].forEach(m=>a.addEventListener(m,x=>{x.preventDefault(),a.classList.remove("is-dragover")})),a.addEventListener("drop",m=>{const x=m.dataTransfer?.files?.[0];x&&_(x)}),s.addEventListener("click",async m=>{m.stopPropagation(),c("Removing…",!1);try{const x=await fetch(`${pe()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}/logo`,{method:"DELETE"}),g=await x.json().catch(()=>({}));if(!x.ok||!g.ok)throw new Error(g.error||`Remove failed (${x.status})`);y(""),h(""),c("Logo removed.",!1)}catch(x){c(x.message||"Remove failed.",!0)}})}function Yl(e){return e.querySelector("#mag-f-surface-on")?.checked?{surface:e.querySelector("#mag-f-sv-surface").value,surface_2:e.querySelector("#mag-f-sv-surface2").value,border:e.querySelector("#mag-f-sv-border").value,text:e.querySelector("#mag-f-sv-text").value,text_sub:e.querySelector("#mag-f-sv-textsub").value}:{}}function Kl(e){const t=e.querySelector("#mag-f-success-cta-label").value.trim(),a=e.querySelector("#mag-f-success-cta-url").value.trim();return t&&a?{label:t,url:a}:{}}function Ro(e){const t={},a=e.querySelector("#mag-f-ab-title")?.value.trim(),n=e.querySelector("#mag-f-ab-welcome")?.value.trim(),o=e.querySelector("#mag-f-ab-color")?.value||"",s=e.querySelector("#mag-f-color")?.value||"";return a&&(t.title=a),n&&(t.welcome=n),o&&o.toLowerCase()!==s.toLowerCase()&&(t.theme_color=o),{enabled:!!e.querySelector("#mag-f-ab")?.checked,split:Number(e.querySelector("#mag-f-ab-split")?.value)||50,b:t}}const bn=[{label:"Web fonts (loaded for you)",opts:[["Inter, sans-serif","Inter"],["Poppins, sans-serif","Poppins"],["Montserrat, sans-serif","Montserrat"],["Roboto, sans-serif","Roboto"],['"Open Sans", sans-serif',"Open Sans"],["Lato, sans-serif","Lato"],["Nunito, sans-serif","Nunito"],["Raleway, sans-serif","Raleway"],['"Work Sans", sans-serif',"Work Sans"],["Oswald, sans-serif","Oswald"],["Merriweather, serif","Merriweather (serif)"]]},{label:"System / always available",opts:[["system-ui, sans-serif","System UI"],["Georgia, serif","Georgia (serif)"],['"Times New Roman", Times, serif',"Times (serif)"],["Arial, Helvetica, sans-serif","Arial / Helvetica"],["Verdana, Geneva, sans-serif","Verdana"],['"Courier New", monospace',"Courier (mono)"]]}];function Jl(e){const t=String(e||""),a=new Set(bn.flatMap(s=>s.opts.map(([r])=>r))),n=s=>s===t?" selected":"";let o=`<option value=""${t===""?" selected":""}>System default</option>`;t&&!a.has(t)&&(o+=`<option value="${b(t)}" selected>Current: ${b(t)}</option>`);for(const s of bn)o+=`<optgroup label="${b(s.label)}">`+s.opts.map(([r,i])=>`<option value="${b(r)}"${n(r)}>${b(i)}</option>`).join("")+"</optgroup>";return o}function ma(e,t){const a=!!e,n=a?null:crypto.randomUUID(),o=!a&&X.owners.length>1,s=e?.display_mode||"chat",r=e?.theme_mode||"auto",i={};(e?.actions||[]).forEach(T=>{T&&T.type&&(i[T.type]=T)});const l=a?!!e.home:!0,c=a?e.subtitle!=null?e.subtitle:"":"Typically replies in a few minutes",h=e?.theme_vars&&typeof e.theme_vars=="object"?e.theme_vars:{},y=Object.keys(h).length>0,_=(T,u)=>b(/^#[0-9a-fA-F]{6}$/.test(h[T]||"")?h[T]:u),m=document.createElement("div");m.className="mag-modal-scrim",m.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="${a?"Edit magnet":"New magnet"}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${a?"Edit magnet":"New magnet"}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__main">
        <nav class="mag-modal__nav" role="tablist" aria-label="Magnet settings">
          <button type="button" class="mag-modal__navitem is-active" data-tab="basics"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Basics</button>
          <button type="button" class="mag-modal__navitem" data-tab="appearance"><span class="material-symbols-outlined" aria-hidden="true">palette</span>Appearance</button>
          <button type="button" class="mag-modal__navitem" data-tab="welcome"><span class="material-symbols-outlined" aria-hidden="true">forum</span>Welcome &amp; CTAs</button>
          <button type="button" class="mag-modal__navitem" data-tab="flow"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
          <button type="button" class="mag-modal__navitem" data-tab="finish"><span class="material-symbols-outlined" aria-hidden="true">task_alt</span>Finish</button>
          <button type="button" class="mag-modal__navitem" data-tab="ab"><span class="material-symbols-outlined" aria-hidden="true">science</span>A/B test</button>
        </nav>
        <div class="mag-modal__body">
          <section class="mag-tab" data-tab="basics">
        <label class="mag-modal__label" for="mag-f-name">Name</label>
        <input class="mag-modal__input" id="mag-f-name" type="text" placeholder="e.g. Homepage quote magnet" value="${b(e?.name||"")}">

        ${o?`
        <label class="mag-modal__label" for="mag-f-owner">Client / workspace</label>
        <select class="mag-modal__select" id="mag-f-owner">
          ${X.owners.map(T=>`<option value="${b(T.guid)}"${T.guid===X.primaryOrgGuid?" selected":""}>${b(T.name||T.guid)}</option>`).join("")}
        </select>`:""}

        <label class="mag-modal__label">Display mode</label>
        ${_n("mag-display",s,Sl)}
        <p class="mag-modal__hint">Inline renders where you place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> on your page. Chat, Slide &amp; Modal float over it, no markup needed.</p>

        <label class="mag-modal__label" for="mag-f-trigger">Auto-open</label>
        <select class="mag-modal__select" id="mag-f-trigger">
          ${Tl.map(T=>`<option value="${T.value}"${(e?e.trigger||"none":"on_load")===T.value?" selected":""}>${b(T.label)}</option>`).join("")}
        </select>
        <p class="mag-modal__hint">When the panel opens on its own: once per visit, and never after the visitor has already opened it. Doesn't apply to Inline, which is always visible.</p>

        <label class="mag-modal__label" for="mag-f-domains">Allowed domain(s)</label>
        <input class="mag-modal__input" id="mag-f-domains" type="text" placeholder="example.com, www.example.com" value="${b((e?.domains||[]).join(", "))}">
        <p class="mag-modal__hint">Comma-separated. The magnet only loads on these domains.</p>

        ${e?`
        <label class="mag-modal__label">Lead alerts</label>
        <p class="mag-modal__hint" style="margin-top:0">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px;color:${(e.notify_emails||[]).length?"var(--color-success, #009473)":"var(--color-text-subtle, #6C7C9A)"}">${(e.notify_emails||[]).length?"notifications_active":"notifications_off"}</span>
          ${(e.notify_emails||[]).length?`On for ${(e.notify_emails||[]).length} email${(e.notify_emails||[]).length===1?"":"s"}.`:"Off."}
          <a href="#/settings/notifications" data-close-modal>Manage in Settings</a>
        </p>`:""}
          </section>

          <section class="mag-tab" data-tab="appearance" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Appearance</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-title">Header title</label>
              <input class="mag-modal__input" id="mag-f-title" type="text" placeholder="Chat with us" value="${b(e?.title||"")}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-color">Color</label>
              <input class="mag-modal__color" id="mag-f-color" type="color" value="${b(/^#[0-9a-fA-F]{6}$/.test(e?.theme_color||"")?e.theme_color:"#0072BA")}">
            </div>
          </div>

          <label class="mag-modal__label" for="mag-f-subtitle">Subtitle</label>
          <input class="mag-modal__input" id="mag-f-subtitle" type="text" placeholder="Typically replies in a few minutes" value="${b(c)}">
          <p class="mag-modal__hint">Small line under the title. Leave blank to hide it.</p>

          <label class="mag-modal__label" for="mag-f-launcher">Launcher label</label>
          <input class="mag-modal__input" id="mag-f-launcher" type="text" placeholder="Defaults to the title" value="${b(e?.launcher_label||"")}">
          <p class="mag-modal__hint">Text on the floating button (Chat / Slide / Modal only).</p>

          <label class="mag-modal__label">Theme</label>
          ${_n("mag-theme",r,kl)}

          <label class="mag-modal__label">Logo</label>
          ${a?`
          <div class="mag-logo-drop" id="mag-logo-drop">
            <input type="file" id="mag-f-logo-file" accept="image/png,image/jpeg,image/gif,image/webp" hidden>
            <div class="mag-logo-drop__preview" id="mag-logo-preview">${e?.logo_url?`<img src="${b(e.logo_url)}" alt="">`:'<span class="material-symbols-outlined" aria-hidden="true">image</span>'}</div>
            <div class="mag-logo-drop__body">
              <p class="mag-logo-drop__t">Drag an image here, or <button type="button" class="mag-logo-drop__browse" id="mag-logo-browse">browse</button></p>
              <p class="mag-modal__hint" style="margin:2px 0 0">PNG, JPEG, GIF, or WEBP — resized automatically.</p>
            </div>
            <button type="button" class="mag-logo-drop__remove" id="mag-logo-remove"${e?.logo_url?"":" hidden"} title="Remove logo"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
          </div>
          <p class="mag-modal__hint" id="mag-logo-status" role="status" style="min-height:1em"></p>
          `:'<p class="mag-modal__hint" style="margin-top:0">Save this magnet first, then reopen it here to upload a logo.</p>'}

          <label class="mag-modal__label" for="mag-f-logo">Or paste a logo URL</label>
          <input class="mag-modal__input" id="mag-f-logo" type="text" placeholder="https://…/logo.png" value="${b(e?.logo_url||"")}">
          <p class="mag-modal__hint">Shown in the header and on bot avatars. Falls back to a color mark.</p>

          <label class="mag-modal__label" for="mag-f-logo-fit">Logo fit</label>
          <select class="mag-modal__select" id="mag-f-logo-fit">
            <option value="cover"${(e?.logo_fit||"cover")==="cover"?" selected":""}>Cover: fills the circle (crops a wide logo)</option>
            <option value="contain"${e?.logo_fit==="contain"?" selected":""}>Contain: shows the whole logo</option>
          </select>
          <p class="mag-modal__hint">Use “Contain” for a wide wordmark so it isn’t cropped.</p>

          <label class="mag-modal__label" for="mag-f-font">Font family</label>
          <select class="mag-modal__select" id="mag-f-font">${Jl(e?.font||"")}</select>
          <p class="mag-modal__hint">Web fonts load automatically. System fonts always work. Leave on System default to match nothing in particular.</p>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-surface-on"${y?" checked":""}>
            <label for="mag-f-surface-on">Custom surface colors (match a branded dark or light page)</label>
          </div>
          <div id="mag-f-surface" class="mag-surface-grid"${y?"":" hidden"}>
            <div><label class="mag-modal__label" for="mag-f-sv-surface">Background</label><input class="mag-modal__color" id="mag-f-sv-surface" type="color" value="${_("surface","#141414")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-surface2">Panel / raised</label><input class="mag-modal__color" id="mag-f-sv-surface2" type="color" value="${_("surface_2","#1e1e1e")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-border">Border</label><input class="mag-modal__color" id="mag-f-sv-border" type="color" value="${_("border","#2a2a2a")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-text">Text</label><input class="mag-modal__color" id="mag-f-sv-text" type="color" value="${_("text","#ffffff")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-textsub">Muted text</label><input class="mag-modal__color" id="mag-f-sv-textsub" type="color" value="${_("text_sub","#a8a8a8")}"></div>
          </div>
          <p class="mag-modal__hint">Off = the built-in light/dark surfaces (set by Theme above). On = these exact colors, so the card sits on your brand instead of a generic panel.</p>

          <div id="mag-f-inline-size"${s==="inline"?"":" hidden"}>
            <div class="mag-modal__row">
              <div>
                <label class="mag-modal__label" for="mag-f-inline-w">Inline width</label>
                <input class="mag-modal__input" id="mag-f-inline-w" type="text" placeholder="640px" value="${b(e?.inline_width||"")}">
              </div>
              <div>
                <label class="mag-modal__label" for="mag-f-inline-h">Inline height</label>
                <input class="mag-modal__input" id="mag-f-inline-h" type="text" placeholder="min(520px, 80vh)" value="${b(e?.inline_height||"")}">
              </div>
            </div>
            <p class="mag-modal__hint">Inline mode only. A CSS length (<code>760px</code>, <code>100%</code>) or <code>min()/max()/clamp()</code>. Blank = default size.</p>
          </div>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-hide-launcher"${e?.hide_launcher?" checked":""}>
            <label for="mag-f-hide-launcher">Hide the floating button (opens only from your own button or link)</label>
          </div>
          <p class="mag-modal__hint">For Chat / Slide / Modal: no bubble appears; you open it by calling <code>MachFiveMagnet.open()</code> from your page. Pair with Auto-open = “Manual”.</p>

          <label class="mag-modal__label" for="mag-f-input-ph">Input placeholder</label>
          <input class="mag-modal__input" id="mag-f-input-ph" type="text" placeholder="Type your answer…" value="${b(e?.input_placeholder||"")}">
        </div>
          </section>

          <section class="mag-tab" data-tab="welcome" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Welcome screen</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-home"${l?" checked":""}>
            <label for="mag-f-home">Open on a welcome message + CTA bar (hub)</label>
          </div>
          <label class="mag-modal__label" for="mag-f-welcome">Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-welcome" rows="2" placeholder="Welcome! Pick an option below and we’ll take it from there.">${b(e?.welcome||"")}</textarea>
          <p class="mag-modal__hint">Shown first when the magnet opens. Visitors choose a CTA below instead of a blank chat.</p>
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Call-to-action bar</p>
          <p class="mag-modal__hint" style="margin-top:0">The persistent buttons a visitor taps to pick a channel. Book opens an in-panel scheduler, or your Calendly when connected. Call can use a CallRail tracking number when connected, so calls attribute to this magnet. Chat runs your flow, Support is a multi-select intake. Leave unchecked to hide.</p>
          ${Cl.map(T=>Ol(T,i[T])).join("")}
        </div>
          </section>

          <section class="mag-tab" data-tab="flow" hidden>
            <div id="mag-flow-panel"></div>
          </section>

          <section class="mag-tab" data-tab="ab" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">A/B experiment</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-ab"${e?.ab?.enabled?" checked":""}>
            <label for="mag-f-ab">Run an A/B test on this magnet</label>
          </div>
          <p class="mag-modal__hint">Variant A is what you configured above. Fill in what variant B changes. Visitors are split between them and results appear on <b>A/B Testing</b>.</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-ab-title">B: Header title</label>
              <input class="mag-modal__input" id="mag-f-ab-title" type="text" placeholder="(unchanged)" value="${b(e?.ab?.b?.mag_title||"")}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-ab-color">B: Color</label>
              <input class="mag-modal__color" id="mag-f-ab-color" type="color" value="${b(/^#[0-9a-fA-F]{6}$/.test(e?.ab?.b?.mag_theme_color||"")?e.ab.b.mag_theme_color:e?.theme_color||"#0072BA")}">
            </div>
          </div>
          <label class="mag-modal__label" for="mag-f-ab-welcome">B: Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-ab-welcome" rows="2" placeholder="(unchanged)">${b(e?.ab?.b?.mag_welcome||"")}</textarea>
          <label class="mag-modal__label" for="mag-f-ab-split">Traffic to variant B</label>
          <select class="mag-modal__select" id="mag-f-ab-split">
            ${[25,50,75].map(T=>`<option value="${T}"${(e?.ab?.split||50)===T?" selected":""}>${T}% see B / ${100-T}% see A</option>`).join("")}
          </select>
        </div>
          </section>

          <section class="mag-tab" data-tab="finish" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Summary card</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-summary"${e?.summary?" checked":""}>
            <label for="mag-f-summary">Show a recap card when the visitor finishes</label>
          </div>
          <label class="mag-modal__label" for="mag-f-summary-heading">Recap heading</label>
          <input class="mag-modal__input" id="mag-f-summary-heading" type="text" placeholder="Here’s what we’ve got" value="${b(e?.summary_heading||"")}">
          <label class="mag-modal__label" for="mag-f-summary-confirm">Confirm button label</label>
          <input class="mag-modal__input" id="mag-f-summary-confirm" type="text" placeholder="Confirm &amp; send" value="${b(e?.summary_confirm_label||"")}">
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">After submit</p>
          <p class="mag-modal__hint" style="margin-top:0">The card shown once the visitor finishes. Blank = the default “You’re all set!” message.</p>
          <label class="mag-modal__label" for="mag-f-success-title">Success title</label>
          <input class="mag-modal__input" id="mag-f-success-title" type="text" placeholder="You’re all set!" value="${b(e?.success_title||"")}">
          <label class="mag-modal__label" for="mag-f-success-text">Success message</label>
          <textarea class="mag-modal__input" id="mag-f-success-text" rows="2" placeholder="Thanks! We’ve got your details and someone will be in touch shortly.">${b(e?.success_text||"")}</textarea>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-label">Button label (optional)</label>
              <input class="mag-modal__input" id="mag-f-success-cta-label" type="text" placeholder="e.g. Visit our site" value="${b(e?.success_cta?.label||"")}">
            </div>
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-url">Button link</label>
              <input class="mag-modal__input" id="mag-f-success-cta-url" type="text" placeholder="https://…" value="${b(e?.success_cta?.url||"")}">
            </div>
          </div>
          <p class="mag-modal__hint">A deep link shown after submit (e.g. “Play now”). Needs both a label and a URL.</p>
        </div>
          </section>
        </div>
        <aside class="mag-modal__preview" aria-label="Live preview"><div id="mag-preview-pane" style="height:100%"></div></aside>
      </div>
      <div class="mag-modal__foot">
        ${a?'<button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="preview"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:18px;vertical-align:-4px;margin-right:4px">visibility</span>Preview</button>':""}
        <p class="mag-modal__error" id="mag-f-error"></p>
        <div class="mag-modal__foot-btns">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="save">${a?"Save":"Create magnet"}</button>
        </div>
      </div>
    </div>`,document.body.appendChild(m),requestAnimationFrame(()=>{m.classList.add("open"),m.querySelector(".mag-modal").classList.add("open")});const x=[...m.querySelectorAll(".mag-modal__navitem")],g=[...m.querySelectorAll(".mag-tab")],f=T=>{x.forEach(u=>u.classList.toggle("is-active",u.dataset.tab===T)),g.forEach(u=>{u.hidden=u.dataset.tab!==T}),m.querySelector(".mag-modal__body").scrollTop=0};x.forEach(T=>T.addEventListener("click",()=>f(T.dataset.tab)));const v=()=>pa({...e,...Xt(m),...a?{steps:hn()}:{}}),I=m.querySelector("#mag-preview-pane"),O=()=>window.matchMedia("(min-width: 1200px)").matches;let F=null;const J=()=>{if(!F&&O())try{F=wl(I,v)}catch{}};let Y=null;const ae=()=>{O()&&(J(),F&&(clearTimeout(Y),Y=setTimeout(()=>{try{F.refresh()}catch{}},300)))},ve=window.matchMedia("(min-width: 1200px)"),me=()=>{O()&&(J(),ae())};ve.addEventListener("change",me);let _e=!1;const Se=m.querySelector(".mag-modal__main");Se.addEventListener("input",()=>{_e=!0}),Se.addEventListener("change",()=>{_e=!0,ae()});const k=()=>{clearTimeout(Y),ve.removeEventListener("change",me),F&&F.destroy&&F.destroy(),m.classList.remove("open"),setTimeout(()=>m.remove(),180),document.removeEventListener("keydown",be)},N=()=>{_e&&!confirm("Discard your changes to this magnet?")||k()};function be(T){T.key==="Escape"&&(T.preventDefault(),N())}document.addEventListener("keydown",be),m.querySelector(".mag-modal__close").addEventListener("click",N),m.querySelector('[data-x="cancel"]').addEventListener("click",N),m.querySelector("[data-close-modal]")?.addEventListener("click",N),m.querySelector("#mag-f-name").focus();const ut=m.querySelector("#mag-flow-panel");a?gl(ut,e,()=>{_e=!0,ae()}):ut.innerHTML='<p class="mag-modal__hint" style="margin-top:0">Your new magnet starts with a simple starter conversation. Create it first, then reopen it here to build the flow.</p>',Wl(m,e),t&&f(t),J(),m.querySelectorAll(".mag-cta").forEach(T=>{const u=T.querySelector(".mag-cta__on"),w=T.querySelector(".mag-cta__val"),C=T.querySelector(".mag-cta__opts"),M=T.querySelectorAll(".mag-cta__booksrc, .mag-cta__calevent, .mag-cta__callsrc, .mag-cta__crtracker");u.addEventListener("change",()=>{w&&(w.disabled=!u.checked),C&&(C.disabled=!u.checked),M.forEach(S=>{S.disabled=!u.checked}),u.checked&&(w||C)?.focus()}),w&&w.addEventListener("input",()=>{w.value.trim()&&!u.checked&&(u.checked=!0,C&&(C.disabled=!1))})}),m.querySelectorAll('.mag-cta[data-kind="book"]').forEach(T=>{const u=T.querySelector(".mag-cta__booksrc"),w=T.querySelector(".mag-cta__val"),C=T.querySelector(".mag-cta__calevent");if(!u||!C)return;const M=()=>{const S=u.value==="calendly";w.hidden=S,C.hidden=!S,S&&!C.dataset.listed&&(C.dataset.listed="1",$l(C))};u.addEventListener("change",()=>{const S=T.querySelector(".mag-cta__on");S.checked||(S.checked=!0,S.dispatchEvent(new Event("change"))),M()}),M()}),m.querySelectorAll('.mag-cta[data-type="call"]').forEach(T=>{const u=T.querySelector(".mag-cta__callsrc"),w=T.querySelector(".mag-cta__val"),C=T.querySelector(".mag-cta__crtracker");if(!u||!C)return;const M=()=>{const S=u.value==="callrail";w.hidden=S,C.hidden=!S,S&&!C.dataset.listed&&(C.dataset.listed="1",Nl(C))};u.addEventListener("change",()=>{const S=T.querySelector(".mag-cta__on");S.checked||(S.checked=!0,S.dispatchEvent(new Event("change"))),M()}),M()});const mt=m.querySelector("#mag-f-surface-on"),qe=m.querySelector("#mag-f-surface");mt.addEventListener("change",()=>qe.hidden=!mt.checked);const gt=m.querySelector("#mag-f-inline-size");m.querySelectorAll('input[name="mag-display"]').forEach(T=>T.addEventListener("change",()=>{gt.hidden=m.querySelector('input[name="mag-display"]:checked')?.value!=="inline"})),m.querySelector('[data-x="preview"]')?.addEventListener("click",()=>Lo(()=>pa({...e,...Xt(m),...a?{steps:hn()}:{}}))),m.querySelector('[data-x="save"]').addEventListener("click",async T=>{const u=T.currentTarget,w=m.querySelector("#mag-f-error"),C=m.querySelector("#mag-f-name").value.trim();if(!C){f("basics"),w.textContent="Please give your magnet a name.";return}const M=m.querySelector("#mag-f-domains").value.split(",").map(z=>z.trim()).filter(Boolean);let S="";if(m.querySelectorAll(".mag-cta").forEach(z=>{const Ie=z.querySelector(".mag-cta__on").checked;if(z.dataset.kind==="book"){const nt=z.querySelector(".mag-cta__booksrc")?.value==="calendly";Ie&&nt&&!z.querySelector(".mag-cta__calevent")?.value&&(S=S||"Pick a Calendly event for the Book button, or switch it back to the built-in scheduler.");return}if(z.dataset.kind!=="value")return;if(z.dataset.type==="call"&&z.querySelector(".mag-cta__callsrc")?.value==="callrail"){Ie&&!z.querySelector(".mag-cta__crtracker")?.value&&(S=S||"Pick a CallRail tracking number for the Call button, or switch it back to a phone number.");return}const at=z.querySelector(".mag-cta__val").value.trim();Ie&&!at&&(S=S||`Add a target for the ${Oo[z.dataset.type].label} button, or uncheck it.`)}),S){f("welcome"),w.textContent=S;return}const ie=Ro(m);if(ie.enabled&&!Object.keys(ie.b).length){f("ab"),w.textContent="Give variant B at least one change (title, welcome, or color), or untick the A/B test.";return}if(a){const z=fl();if(z){f("flow"),vl(z.route,z.message);return}}const Ce={name:C,domains:M,...Xt(m)};o&&(Ce.owner_guid=m.querySelector("#mag-f-owner").value),u.disabled=!0,w.textContent="";try{const z=a?`${pe()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`:`${pe()}/m5t/v5/magnets`,Ie={"Content-Type":"application/json"};n&&(Ie["Idempotency-Key"]=n);const at=await fetch(z,{method:a?"PATCH":"POST",headers:Ie,body:JSON.stringify(Ce)});let nt={};try{nt=await at.json()}catch{}if(!at.ok||!nt.ok)throw new Error(nt.message||`Save failed (${at.status})`);a&&await bl(e.guid),He(a?"Magnet updated":"Magnet created","success"),k(),await zt()}catch(z){u.disabled=!1,w.textContent=z.message||"Something went wrong."}})}const Xl=Object.freeze(Object.defineProperty({__proto__:null,init:Dl,render:Pl},Symbol.toStringTag,{value:"Module"}));let yn=!1;const E={leads:[],magnetNames:{},filter:"ALL",canManage:!1,book:!1,ownerNames:{},clientFilter:"ALL",search:"",shown:100,selectedId:null},lt=100,ga=["NEW","WORKING","QUALIFIED","UNQUALIFIED","CONVERTED","EXPORTED"],Ql={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},R=e=>String(e??"").replace(/[&<>"']/g,t=>Ql[t]),Ot=(e,t="info")=>{try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Rt=()=>A.getConfig?.().BASE_URL||"",Mt=e=>[e.first_name,e.last_name].filter(Boolean).join(" ").trim()||e.email||"(no name)",Mo=e=>(Mt(e).split(/\s+/).slice(0,2).map(t=>t[0]||"").join("")||"?").toUpperCase(),Ia=e=>e.created?.created_tz||"";function Ke(e){const t=Ia(e);if(!t)return"";try{return new Date(t).toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"})}catch{return""}}function Zl(e){const t=Ia(e);if(!t)return"";try{const a=Date.now()-new Date(t).getTime();if(a<0)return Ke(e);const n=a/36e5;return n<1?`${Math.max(1,Math.floor(a/6e4))}m ago`:n<24?`${Math.floor(n)}h ago`:n<48?"Yesterday":Ke(e)}catch{return Ke(e)}}const ec=e=>{const t=Ia(e);if(!t)return!1;try{return Date.now()-new Date(t).getTime()<24*36e5}catch{return!1}};function tc(){if(yn)return;const e=document.createElement("style");e.id="m5t-leads-styles",e.textContent=`
    .page-shell .leads-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .leads-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .leads-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-filter button.active { background: var(--color-bg, #fff); color: var(--color-primary-700, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .leads-filter .leads-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .leads-clientsel { font: inherit; font-size: 0.8rem; font-weight: 600; padding: 7px 10px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; max-width: 220px; }
    .page-shell .leads-searchwrap { position: relative; margin-left: auto; }
    .page-shell .leads-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .leads-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 230px; }
    .page-shell .leads-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .leads-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }

    .page-shell .leads-tablewrap { overflow-x: auto; }
    .page-shell .leads-table { width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 0.88rem; min-width: 860px; }
    .page-shell .leads-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .page-shell .leads-table th.num, .page-shell .leads-table td.num { text-align: right; }
    .page-shell .leads-table td { padding: 10px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; overflow: hidden; text-overflow: ellipsis; }
    .page-shell .leads-row { cursor: pointer; }
    .page-shell .leads-row:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .leads-row:focus-visible { outline: 2px solid var(--color-primary-600, #0072BA); outline-offset: -2px; }
    .page-shell .leads-open { text-align: right; }
    .page-shell .leads-open .material-symbols-outlined { font-size: 20px; color: var(--color-border, #D4DCE8); vertical-align: middle; transition: color .12s ease, transform .12s ease; }
    .page-shell .leads-row:hover .leads-open .material-symbols-outlined { color: var(--color-primary-600, #0072BA); transform: translateX(2px); }
    .page-shell .leads-who { display: flex; align-items: center; gap: 10px; min-width: 0; }
    .page-shell .leads-who > span:last-child { min-width: 0; }
    .page-shell .leads-avatar { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.72rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .leads-name { font-weight: 600; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .leads-sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .leads-muted { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell a.leads-contactlink { color: inherit; text-decoration: none; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell a.leads-contactlink:hover { color: var(--color-primary-600, #0072BA); text-decoration: underline; }
    .page-shell .leads-fresh { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--color-success, #009473); margin-right: 6px; vertical-align: 1px; }
    .page-shell .leads-more { display: block; margin: 14px auto 4px; appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: var(--color-primary-600, #0072BA); padding: 8px 18px; border-radius: 999px; }
    .page-shell .leads-more:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-status { font: inherit; font-size: 0.76rem; font-weight: 600; padding: 5px 8px; border-radius: 8px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; max-width: 100%; }
    .page-shell .leads-badge { display: inline-block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-badge[data-s="NEW"] { background: #DBEAFE; color: #1D4ED8; }
    .page-shell .leads-badge[data-s="WORKING"] { background: #FEF3C7; color: #92400E; }
    .page-shell .leads-badge[data-s="QUALIFIED"], .page-shell .leads-badge[data-s="CONVERTED"] { background: #DCFCE7; color: #047857; }

    /* Two-pane layout: table left, permanent detail panel right (inspector). */
    .page-shell .leads-layout { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 24px; align-items: start; }
    .page-shell .leads-panel { position: sticky; top: 24px; max-height: calc(100vh - 48px); overflow-y: auto; }
    @media (max-width: 1180px) {
      .page-shell .leads-layout { grid-template-columns: 1fr; }
      .page-shell .leads-panel { position: static; max-height: none; }
    }
    .page-shell .leads-row.selected td { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-row.selected .leads-open .material-symbols-outlined { color: var(--color-primary-600, #0072BA); }

    .page-shell .leads-det__head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .page-shell .leads-det__ava { width: 42px; height: 42px; font-size: 0.9rem; }
    .page-shell .leads-det__name { font-family: var(--font-display, inherit); font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
    .page-shell .leads-det__contact { display: flex; gap: 8px; margin: 4px 0 14px; flex-wrap: wrap; }
    .page-shell .leads-det__cbtn { display: inline-flex; align-items: center; gap: 6px; text-decoration: none; font-size: 0.82rem; font-weight: 600; padding: 8px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); color: var(--color-primary-700, #00558D); }
    .page-shell .leads-det__cbtn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-det__cbtn .material-symbols-outlined { font-size: 17px; }
    .page-shell .leads-det__field { padding: 9px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); display: flex; gap: 12px; }
    .page-shell .leads-det__k { flex: 0 0 96px; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .leads-det__v { flex: 1; font-size: 0.86rem; word-break: break-word; }
    .page-shell .leads-det__notes { white-space: pre-wrap; font-size: 0.84rem; line-height: 1.5; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F4F7FB); border-radius: 10px; padding: 12px 14px; margin-top: 14px; }
  `,document.head.appendChild(e),yn=!0}function ct(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function ac(e){return`<select class="leads-status" data-id="${R(e.id)}" data-act="status" onclick="event.stopPropagation()">
    ${ga.map(t=>`<option value="${t}" ${e.status===t?"selected":""}>${t[0]}${t.slice(1).toLowerCase()}</option>`).join("")}
  </select>`}function nc(e){const t=E.magnetNames[e.magnet_guid]||e.lead_source||"—",a=e.phone?String(e.phone).replace(/[^\d+]/g,""):"";return`
    <tr class="leads-row${String(e.id)===E.selectedId?" selected":""}" data-id="${R(e.id)}" tabindex="0" role="button" aria-label="Open lead ${R(Mt(e))}">
      <td>
        <span class="leads-who">
          <span class="leads-avatar">${R(Mo(e))}</span>
          <span><span class="leads-name">${R(Mt(e))}</span>${e.company?`<span class="leads-sub">${R(e.company)}</span>`:""}</span>
        </span>
      </td>
      ${E.book?`<td>${to(E.ownerNames[e.owner_guid]||"")||'<span class="leads-muted">—</span>'}</td>`:""}
      <td>
        ${e.email?`<a class="leads-contactlink" href="mailto:${R(e.email)}" title="Email ${R(e.email)}">${R(e.email)}</a>`:'<span class="leads-muted">—</span>'}
        ${e.phone?`<a class="leads-contactlink leads-sub" href="tel:${R(a)}" title="Call ${R(e.phone)}">${R(e.phone)}</a>`:""}
      </td>
      <td>${e.product_interest?R(e.product_interest):'<span class="leads-muted">—</span>'}</td>
      <td><span class="leads-sub">${R(t)}</span>${e.utm_campaign||e.utm_source?`<span class="leads-sub" title="Campaign / source">${R(e.utm_campaign||e.utm_source)}${e.gclid?' <span class="leads-badge" data-s="QUALIFIED" style="font-size:0.58rem;padding:1px 6px">Ads</span>':""}</span>`:""}</td>
      <td>${E.canManage?ac(e):`<span class="leads-badge" data-s="${R(e.status)}">${R(e.status)}</span>`}</td>
      <td class="num leads-muted" style="white-space:nowrap" title="${R(Ke(e))}">${ec(e)?'<span class="leads-fresh" title="Captured in the last 24 hours"></span>':""}${R(Zl(e))}</td>
      <td class="leads-open" aria-hidden="true"><span class="material-symbols-outlined">chevron_right</span></td>
    </tr>`}const Fo=e=>E.clientFilter==="ALL"||e.owner_guid===E.clientFilter;function oc(e){const t=E.search.trim().toLowerCase();if(!t)return!0;const a=[e.first_name,e.last_name,e.email,e.company,e.phone,e.product_interest,E.magnetNames[e.magnet_guid],E.book?E.ownerNames[e.owner_guid]:""].filter(Boolean).join(" ").toLowerCase();return t.split(/\s+/).every(n=>a.includes(n))}function Po(){return E.leads.filter(e=>(E.filter==="ALL"||e.status===E.filter)&&Fo(e)&&oc(e))}const Do=()=>ct("touch_app","Click to see lead information.");function sc(){tc(),et();const e=Q();return`
    <div class="page-shell" data-section="leads">
      ${e?`
      <div class="dashboard-card" style="margin-bottom:24px">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="pf-picker-body">${ct("hourglass_empty","Loading…")}</div>
      </div>`:""}
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Leads</h1>
          <p class="page-description">${e?"All leads across your clients.":"All your magnet leads."}</p>
        </div>
        <button class="btn btn-secondary" id="leads-export" type="button" style="display:none">
          <span class="material-symbols-outlined" aria-hidden="true">download</span>
          Export CSV
        </button>
      </div>
      <div class="leads-layout">
        <div class="dashboard-card">
          <div class="card-body" id="leads-body">
            ${ct("hourglass_empty","Loading leads…")}
          </div>
        </div>
        <aside class="dashboard-card leads-panel" aria-label="Lead detail">
          <div class="card-body" id="leads-panel-body">${Do()}</div>
        </aside>
      </div>
    </div>`}async function rc(){if(document.getElementById("leads-export")?.addEventListener("click",dc),Q()){const e=t=>Number(t||0).toLocaleString();tt(Rt(),[{h:"Leads · wk",td:t=>e(t.leads.this_week)},{h:"Leads · total",td:t=>e(t.leads.total)},{h:"Compl.",td:t=>t.completion_rate!=null?`${t.completion_rate}%`:"—"}],{emptyMsg:"No client orgs yet. Create one under Clients first."})}await ic()}async function ic(){const e=document.getElementById("leads-body");if(e){try{const[t,a]=await Promise.all([fetch(`${Rt()}/m5t/v5/m5mLead`),fetch(`${Rt()}/m5t/v5/magnets`).catch(()=>null)]),n=await t.json().catch(()=>({}));if(!n.ok)throw new Error(n.message||"Failed to load");if(E.leads=(n.data||[]).filter(o=>!["DELETED","ARCHIVED"].includes(o.status)),E.book=Q(),E.ownerNames=E.book?eo():{},a){const o=await a.json().catch(()=>({}));E.magnetNames={},(o.magnets||[]).forEach(s=>{E.magnetNames[s.guid]=s.name,s.owner_guid&&s.owner_name&&!E.ownerNames[s.owner_guid]&&(E.ownerNames[s.owner_guid]=s.owner_name)}),E.canManage=!!o.canManage}}catch{e.innerHTML=ct("error","Could not load your leads. Please try again.");return}Ft()}}const lc=()=>`
  <colgroup>
    <col style="width:23%">
    ${E.book?'<col style="width:13%">':""}
    <col style="width:21%">
    <col style="width:14%">
    <col style="width:16%">
    <col style="width:120px">
    <col style="width:110px">
    <col style="width:40px">
  </colgroup>`;function Ft(){const e=document.getElementById("leads-body"),t=document.getElementById("leads-export");if(!e)return;if(t&&(t.style.display=E.leads.length?"":"none"),!E.leads.length){e.innerHTML=ct("inbox","No leads captured yet. Publish a magnet and share it to start collecting.");return}const a=E.leads.filter(Fo),n={ALL:a.length};ga.forEach(s=>{n[s]=a.filter(r=>r.status===s).length});const o=E.book?[...new Set(E.leads.map(s=>s.owner_guid).filter(Boolean))].map(s=>({guid:s,name:E.ownerNames[s]||s})).sort((s,r)=>s.name.localeCompare(r.name)):[];e.innerHTML=`
    <div class="leads-bar">
      <div class="leads-filter">
        ${["ALL",...ga].map(s=>`<button data-filter="${s}" class="${E.filter===s?"active":""}">${s==="ALL"?"All":s[0]+s.slice(1).toLowerCase()}${n[s]?`<span class="leads-pillnum">${n[s]}</span>`:""}</button>`).join("")}
      </div>
      ${E.book&&o.length>1?`
      <select class="leads-clientsel" id="leads-clientsel" aria-label="Filter by client">
        <option value="ALL">All clients</option>
        ${o.map(s=>`<option value="${R(s.guid)}" ${E.clientFilter===s.guid?"selected":""}>${R(s.name)}</option>`).join("")}
      </select>`:""}
      <span class="leads-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="leads-search" id="leads-search" type="search" placeholder="Search leads" value="${R(E.search)}" aria-label="Search leads" />
      </span>
      <span class="leads-count" id="leads-countlbl"></span>
    </div>
    <div id="leads-tablezone"></div>`,e.querySelector(".leads-filter")?.addEventListener("click",s=>{const r=s.target.closest("[data-filter]");r&&(E.filter=r.dataset.filter,E.shown=lt,Ft())}),e.querySelector("#leads-clientsel")?.addEventListener("change",s=>{E.clientFilter=s.target.value,E.shown=lt,Ft()}),e.querySelector("#leads-search")?.addEventListener("input",s=>{E.search=s.target.value,E.shown=lt,ha()}),ha()}function ha(){const e=document.getElementById("leads-tablezone"),t=document.getElementById("leads-countlbl");if(!e)return;const a=Po(),n=a.slice(0,E.shown),o=E.book?8:7;t&&(t.textContent=`${a.length} of ${E.leads.length}`),e.innerHTML=`
    <div class="leads-tablewrap">
      <table class="leads-table">
        ${lc()}
        <thead><tr><th>Name</th>${E.book?"<th>Client</th>":""}<th>Contact</th><th>Interest</th><th>Magnet</th><th>Status</th><th class="num">Captured</th><th></th></tr></thead>
        <tbody id="leads-tbody">${n.map(nc).join("")||`<tr><td colspan="${o}"><div class="leads-muted" style="padding:14px 4px">${E.search.trim()?"No leads match your search.":`No ${E.filter.toLowerCase()} leads.`}</div></td></tr>`}</tbody>
      </table>
    </div>
    ${a.length>E.shown?`<button class="leads-more" type="button" id="leads-more">Show ${Math.min(lt,a.length-E.shown)} more (${a.length-E.shown} remaining)</button>`:""}`,e.querySelector("#leads-more")?.addEventListener("click",()=>{E.shown+=lt,ha()}),e.querySelector("#leads-tbody")?.addEventListener("change",cc),e.querySelector("#leads-tbody")?.addEventListener("click",s=>{if(s.target.closest(".leads-status, a.leads-contactlink"))return;const r=s.target.closest(".leads-row");r&&wn(r.dataset.id)}),e.querySelector("#leads-tbody")?.addEventListener("keydown",s=>{if(s.key!=="Enter"&&s.key!==" ")return;const r=s.target.closest(".leads-row");r&&s.target===r&&(s.preventDefault(),wn(r.dataset.id))})}async function cc(e){const t=e.target.closest(".leads-status");if(!t)return;const a=t.dataset.id,n=E.leads.find(r=>String(r.id)===String(a)),o=t.value,s=n?.status;try{if(!(await(await fetch(`${Rt()}/m5t/v5/m5mLead/${encodeURIComponent(a)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:o})})).json().catch(()=>({}))).ok)throw new Error;n&&(n.status=o),Ot(`Marked ${o[0]}${o.slice(1).toLowerCase()}`,"success")}catch{t.value=s||"NEW",Ot("Could not update status","danger");return}try{String(a)===E.selectedId&&Go(),E.filter!=="ALL"&&Ft()}catch(r){console.warn("[leads] re-render after status change failed:",r)}}function wn(e){E.selectedId=String(e),document.querySelectorAll(".leads-row").forEach(t=>t.classList.toggle("selected",t.dataset.id===E.selectedId)),Go()}function vt(e,t){const a=Array.isArray(e.tags)?e.tags:[];for(let n=a.length-1;n>=0;n--)if(a[n]&&a[n].tag===t&&a[n].value!=null)return String(a[n].value);return""}function Bo(e){const t=vt(e,"appointment_start");if(!t)return null;const a=vt(e,"appointment_status")||"booked",n=vt(e,"appointment_timezone"),o=vt(e,"appointment_event_type"),s=new Date(t);let r=t;if(!Number.isNaN(s.getTime())){const i={weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};try{r=new Intl.DateTimeFormat(void 0,n?{...i,timeZone:n}:i).format(s)}catch{r=new Intl.DateTimeFormat(void 0,i).format(s)}}return{when:r,status:a,type:o,start:t}}const xn={booked:["QUALIFIED","Booked"],rescheduled:["WORKING","Rescheduled"],canceled:["CANCELED","Canceled"]};function Uo(e){const t=Array.isArray(e.tags)?e.tags:[];let a=null;for(const l of t)if(!(!l||!l.tag)){if(l.tag==="callrail_call_id"){a={};continue}a&&l.tag.indexOf("call_")===0&&l.value!=null&&(a[l.tag]=String(l.value))}if(!a||!a.call_started)return null;const n=a.call_started,o=new Date(n);let s=n;Number.isNaN(o.getTime())||(s=new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(o));const r=Number(a.call_duration)||0,i=r?r<60?`${r}s`:`${Math.floor(r/60)}m ${r%60}s`:"";return{when:s,dur:i,source:a.call_source||"",answered:a.call_answered||"",recording:a.call_recording_player||"",started:n}}function Go(){const e=document.getElementById("leads-panel-body");if(!e)return;const t=E.leads.find(l=>String(l.id)===E.selectedId);if(!t){e.innerHTML=Do();return}const a=E.magnetNames[t.magnet_guid]||t.lead_source||"—",n=Bo(t),[o,s]=n?xn[n.status]||xn.booked:["",""],r=Uo(t),i=(l,c)=>c?`<div class="leads-det__field"><span class="leads-det__k">${R(l)}</span><span class="leads-det__v">${R(c)}</span></div>`:"";e.innerHTML=`
    <div class="leads-det__head">
      <span class="leads-avatar leads-det__ava">${R(Mo(t))}</span>
      <div>
        <div class="leads-det__name">${R(Mt(t))}</div>
        <span class="leads-badge" data-s="${R(t.status)}">${R(t.status)}</span>
      </div>
    </div>
    <div class="leads-det__contact">
      ${t.email?`<a class="leads-det__cbtn" href="mailto:${R(t.email)}"><span class="material-symbols-outlined" aria-hidden="true">mail</span>Email</a>`:""}
      ${t.phone?`<a class="leads-det__cbtn" href="tel:${R(String(t.phone).replace(/[^\d+]/g,""))}"><span class="material-symbols-outlined" aria-hidden="true">call</span>Call</a>`:""}
    </div>
    ${i("Email",t.email)}
    ${i("Phone",t.phone)}
    ${i("Mobile",t.mobile)}
    ${i("Company",t.company)}
    ${i("Title",t.title)}
    ${i("Interest",t.product_interest)}
    ${i("Location",[t.city,t.state].filter(Boolean).join(", "))}
    ${i("Channel",t.lead_source)}
    ${E.book?i("Client",E.ownerNames[t.owner_guid]||""):""}
    ${i("Magnet",a)}
    ${i("Captured",Ke(t))}
    ${n?`<div class="leads-det__field"><span class="leads-det__k">Appointment</span><span class="leads-det__v">${R([n.when,n.type].filter(Boolean).join(" · "))} <span class="leads-badge" data-s="${R(o)}">${R(s)}</span></span></div>`:""}
    ${r?`<div class="leads-det__field"><span class="leads-det__k">Last call</span><span class="leads-det__v">${R([r.when,r.dur,r.source].filter(Boolean).join(" · "))} <span class="leads-badge" data-s="${r.answered==="no"?"WORKING":"QUALIFIED"}">${r.answered==="no"?"Missed":"Answered"}</span>${r.recording&&/^https:\/\//i.test(r.recording)?` <a href="${R(r.recording)}" target="_blank" rel="noopener">Recording</a>`:""}</span></div>`:""}
    ${i("Campaign",t.utm_campaign)}
    ${i("Ad source",[t.utm_source,t.utm_medium].filter(Boolean).join(" / "))}
    ${t.gclid?'<div class="leads-det__field"><span class="leads-det__k">Paid click</span><span class="leads-det__v"><span class="leads-badge" data-s="QUALIFIED">Google Ads</span></span></div>':""}
    ${t.description?`<div class="leads-det__notes">${R(t.description)}</div>`:""}`}function dc(){const e=Po();if(!e.length){Ot("Nothing to export","info");return}const t=["first_name","last_name","email","phone","company","product_interest","lead_source","utm_source","utm_medium","utm_campaign","gclid","status"],a=l=>`"${String(l??"").replace(/"/g,'""')}"`,o=[[...E.book?["client"]:[],...t,"magnet","captured","appointment","last_call"].join(",")];for(const l of e){const c=Bo(l),h=Uo(l);o.push([...E.book?[a(E.ownerNames[l.owner_guid]||"")]:[],...t.map(y=>a(l[y])),a(E.magnetNames[l.magnet_guid]||l.lead_source||""),a(Ke(l)),a(c?`${c.start} (${c.status})`:""),a(h?`${h.started} (${h.answered==="no"?"missed":"answered"})`:"")].join(","))}const s=new Blob([o.join(`
`)],{type:"text/csv"}),r=URL.createObjectURL(s),i=document.createElement("a");i.href=r,i.download=`leads-${E.filter.toLowerCase()}.csv`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(r),Ot(`Exported ${e.length} lead${e.length===1?"":"s"}`,"success")}const pc=Object.freeze(Object.defineProperty({__proto__:null,init:rc,render:sc},Symbol.toStringTag,{value:"Module"})),Ho=()=>A.getConfig?.().BASE_URL||"",En=e=>e.toISOString().slice(0,10),An=e=>e==null?"—":"$"+Number(e).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),Ye=e=>Number(e||0).toLocaleString(),uc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_t=e=>String(e??"").replace(/[&<>"']/g,t=>uc[t]);let Sn=!1;function mc(){if(Sn)return;const e=document.createElement("style");e.id="m5t-adperf-styles",e.textContent=`
    .page-shell .adperf-chart { width: 100%; height: auto; display: block; }
    .page-shell text.ax { font-size: 11px; fill: var(--color-text-subtle, #6C7C9A); }
    .page-shell .adperf-legend { display: flex; gap: 16px; margin: 0 0 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adperf-legend i { display: inline-block; width: 11px; height: 11px; border-radius: 3px; margin-right: 5px; vertical-align: middle; }
    .page-shell .adperf-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .adperf-srcwrap { overflow-x: auto; }
    .page-shell .adperf-srctable { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .adperf-srctable th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .adperf-srctable td { padding: 9px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .adperf-srctable .num { text-align: right; white-space: nowrap; }
    .page-shell .adperf-src-sub { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .adperf-src-untracked { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
  `,document.head.appendChild(e),Sn=!0}const Je=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,bt=(e,t,a,n="—")=>`
  <div class="stat-card">
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${e}</span>
      <span class="stat-label">${t}</span>
    </div>
    <div class="stat-value" id="${a}">${n}</div>
  </div>`,gc=[{d:7,label:"7 Days"},{d:30,label:"30 Days"},{d:90,label:"90 Days"}];let Pt=30;function zo(){return Q()?dt({section:"ad-performance",title:"Ad Performance",description:"Pick a client to view their spend and lead performance."}):(mc(),`
    <div class="page-shell" data-section="ad-performance">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Performance</h1>
          <p class="page-description">Your advertising spend alongside the leads your magnets captured.</p>
        </div>
        <div class="chart-controls" id="adperf-periods">
          ${gc.map(e=>`<button class="chart-period-btn${e.d===Pt?" active":""}" type="button" data-days="${e.d}">${e.label}</button>`).join("")}
        </div>
      </div>

      <div class="stats-grid">
        ${bt("payments","Ad Spend","adperf-spend")}
        ${bt("ads_click","Clicks","adperf-clicks")}
        ${bt("person_add","Magnet Leads","adperf-leads")}
        ${bt("request_quote","Cost / Lead","adperf-cpl")}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Spend vs Leads</h2>
          <span class="live-indicator" id="adperf-range"></span>
        </div>
        <div class="card-body" id="adperf-body">
          ${Je("hourglass_empty","Loading ad performance…")}
        </div>
      </div>
      <p class="adperf-note">Spend and leads are shown on the same timeline for comparison. Leads are not yet matched to individual ad clicks.</p>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">campaign</span> Leads by campaign</h2>
          <span class="live-indicator" id="adperf-src-summary"></span>
        </div>
        <div class="card-body" id="adperf-sources">
          ${Je("hourglass_empty","Loading…")}
        </div>
      </div>
    </div>`)}async function Vo(){if(Q()){const t=a=>Number(a||0).toLocaleString();return tt(Ho(),[{h:"Spend",td:a=>a.ad?`$${t(a.ad.spend)}`:"—"},{h:"Clicks",td:a=>a.ad?t(a.ad.clicks):"—"},{h:"Leads",td:a=>t(a.leads.window??a.leads.total)},{h:"CPL",td:a=>a.ad?.cost_per_lead!=null?`$${t(a.ad.cost_per_lead)}`:"—"}],{emptyMsg:"No client orgs yet. Connect a client ad account to see spend here."})}const e=document.getElementById("adperf-periods");e?.addEventListener("click",t=>{const a=t.target.closest("button[data-days]");a&&(Pt=Number(a.dataset.days)||30,e.querySelectorAll(".chart-period-btn").forEach(n=>n.classList.toggle("active",Number(n.dataset.days)===Pt)),kn())}),await kn()}async function kn(){const e=Ho(),t=document.getElementById("adperf-body"),a=document.getElementById("adperf-range"),n=new Date,o=En(n),s=En(new Date(n.getTime()-(Pt-1)*864e5));a&&(a.textContent=`${s} → ${o}`);let r,i=[],l=null;try{const[h,y,_]=await Promise.all([fetch(`${e}/m5t/v5/coreAdMetrics/overlay?from=${s}&to=${o}`),fetch(`${e}/m5t/v5/coreAdAccount`),fetch(`${e}/m5t/v5/coreAdMetrics/by-source?from=${s}&to=${o}`)]);if(!h.ok)throw new Error(`HTTP ${h.status}`);r=await h.json(),i=((await y.json().catch(()=>({})))?.data||[]).filter(x=>x.status!=="DELETED"),l=await _.json().catch(()=>null)}catch(h){console.warn("[ad-performance] load failed:",h),t&&(t.innerHTML=Je("error","Could not load ad performance. Please try again."));return}const c=r.totals||{};if(yt("adperf-spend",An(c.spend)),yt("adperf-clicks",Ye(c.clicks)),yt("adperf-leads",Ye(c.magnet_leads)),yt("adperf-cpl",An(c.cost_per_lead)),hc(l),!i.length){t.innerHTML=Je("link_off","No ad account connected yet. Your agency can connect Google Ads or Local Services Ads to see performance here.");return}if(!r.connected){t.innerHTML=Je("cloud_sync","Account connected. No ad data for this range yet. Metrics appear here once they sync.");return}t.innerHTML=fc(r.rows||[])}function hc(e){const t=document.getElementById("adperf-sources"),a=document.getElementById("adperf-src-summary");if(!t)return;const n=e&&Array.isArray(e.rows)?e.rows:[];if(!n.length){a&&(a.textContent=""),t.innerHTML=Je("search_off","No leads in this range yet. Campaigns appear here as tagged leads (?utm_campaign=…) come in.");return}const o=e.total_leads||n.reduce((i,l)=>i+(l.leads||0),0),s=e.tracked_leads||0;a&&(a.textContent=`${Ye(s)} of ${Ye(o)} leads tagged to a source`);const r=i=>i.campaign&&i.campaign!=="(none)"?_t(i.campaign):i.source&&i.source!=="(direct)"?_t(i.source):'<span class="adperf-src-untracked">Untracked / direct</span>';t.innerHTML=`
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Campaign</th><th>Source</th><th class="num">Paid clicks</th><th class="num">Leads</th></tr></thead>
        <tbody>${n.map(i=>`
          <tr>
            <td>${r(i)}</td>
            <td class="adperf-src-sub">${_t(i.source||"—")}${i.medium?` · ${_t(i.medium)}`:""}</td>
            <td class="num">${i.paid_clicks?Ye(i.paid_clicks):'<span class="adperf-src-sub">—</span>'}</td>
            <td class="num"><b>${Ye(i.leads)}</b></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`}function yt(e,t){const a=document.getElementById(e);a&&(a.textContent=t)}function Tn(e){if(e<=0)return 1;const t=Math.pow(10,Math.floor(Math.log10(e))),a=e/t;return(a<=1?1:a<=2?2:a<=5?5:10)*t}function Cn(e){return e=Math.round(e),e>=1e3?(e/1e3).toFixed(e%1e3===0?0:1)+"k":String(e)}function fc(e){const m=e.length||1,x=Tn(Math.max(1,...e.map(k=>k.spend||0))),g=Tn(Math.max(1,...e.map(k=>k.magnet_leads||0))),f=738/m,v=Math.min(24,f*.55),I=k=>56+f*(k+.5),O=k=>304-k/x*282,F=k=>304-k/g*282,J=[0,.25,.5,.75,1].map(k=>{const N=304-k*282;return`<line x1="56" y1="${N.toFixed(1)}" x2="794" y2="${N.toFixed(1)}" stroke="#EAF0F7"/><text x="48" y="${(N+3.5).toFixed(1)}" text-anchor="end" class="ax">$${Cn(x*k)}</text><text x="802" y="${(N+3.5).toFixed(1)}" text-anchor="start" class="ax">${Cn(g*k)}</text>`}).join(""),Y=e.map((k,N)=>{const be=O(k.spend||0);return`<rect x="${(I(N)-v/2).toFixed(1)}" y="${be.toFixed(1)}" width="${v.toFixed(1)}" height="${Math.max(0,304-be).toFixed(1)}" rx="3" fill="#0072BA"><title>${k.date}: $${k.spend} spend</title></rect>`}).join(""),ae=e.map((k,N)=>`${I(N).toFixed(1)},${F(k.magnet_leads||0).toFixed(1)}`).join(" "),ve=m>1?`<polyline points="${ae}" fill="none" stroke="#009473" stroke-width="2.5"/>`:"",me=e.map((k,N)=>`<circle cx="${I(N).toFixed(1)}" cy="${F(k.magnet_leads||0).toFixed(1)}" r="3.5" fill="#009473"><title>${k.date}: ${k.magnet_leads} leads</title></circle>`).join(""),_e=Math.max(1,Math.ceil(m/6)),Se=e.map((k,N)=>N%_e===0||N===m-1?`<text x="${I(N).toFixed(1)}" y="326" text-anchor="middle" class="ax">${k.date.slice(5)}</text>`:"").join("");return`
    <div class="adperf-legend">
      <span><i style="background:#0072BA"></i>Ad Spend</span>
      <span><i style="background:#009473"></i>Magnet Leads</span>
    </div>
    <svg class="adperf-chart" viewBox="0 0 840 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Ad spend versus magnet leads over time">
      ${J}${Y}${ve}${me}${Se}
    </svg>`}const vc={render:zo,init:Vo},_c=Object.freeze(Object.defineProperty({__proto__:null,default:vc,init:Vo,render:zo},Symbol.toStringTag,{value:"Module"})),In="reseller_org",qo="managed_client";let $n=!1;const bc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},q=e=>String(e??"").replace(/[&<>"']/g,t=>bc[t]);function Dt(e,t="info"){try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}}function yc(){const e=A.getActiveOrg();if(e&&e.channel===In)return{guid:e.guid,name:e.name};const t=A.getMemberships().find(a=>a.channel===In);return t?{guid:t.orgGuid,name:t.name}:null}function wc(e){const t=e?.created_tz;if(!t)return"";const a=new Date(t);return Number.isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function xc(){if($n)return;const e=document.createElement("style");e.id="m5t-clients-styles",e.textContent=`
    .page-shell .clients-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .client-list { display: flex; flex-direction: column; }
    .page-shell .client-row {
      display: flex; gap: 12px; align-items: center; padding: 12px 4px;
      border-bottom: 1px solid var(--color-surface-2, #EAF0F7); flex-wrap: wrap;
    }
    .page-shell .client-row:last-child { border-bottom: 0; }
    .page-shell .client-row__avatar {
      flex: 0 0 auto; width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center;
      font-weight: 700; font-size: 0.82rem; color: #fff; background: var(--color-primary-600, #0072BA);
    }
    .page-shell .client-row__main { min-width: 0; flex: 1 1 auto; }
    .page-shell .client-row__name { font-weight: 600; font-size: 0.92rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .client-row__meta { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .client-row__status {
      flex: 0 0 auto; display: inline-block; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
      padding: 2px 8px; border-radius: 999px;
      background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473);
    }
    .page-shell .client-row__status[data-status="DRAFT"] { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .client-row__status[data-status="DISABLED"] { background: #FBE3DE; color: var(--color-danger, #DD4124); }
    .page-shell .client-row__btns { flex: 0 0 auto; display: flex; gap: 8px; flex-wrap: wrap; }

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

    /* Per-row action buttons + the invite result view */
    .page-shell .client-card__invite {
      appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent;
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
  `,document.head.appendChild(e),$n=!0}const Ec=e=>String(e||"?").trim().split(/\s+/).slice(0,2).map(t=>t[0]||"").join("").toUpperCase()||"?";function kt(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Ac(e){const t=e.caption||e.guid,a=e.status||"ENABLED";return`
    <div class="client-row">
      <span class="client-row__avatar">${q(Ec(t))}</span>
      <span class="client-row__main">
        <div class="client-row__name" title="${q(t)}">${q(t)}</div>
        <div class="client-row__meta">Added ${q(wc(e.created))||"—"}</div>
      </span>
      <span class="client-row__status" data-status="${q(a)}">${q(a)}</span>
      <div class="client-row__btns">
        <button class="client-card__invite" type="button" data-action="invite" data-client-guid="${q(e.guid)}" data-client-name="${q(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
        </button>
        ${A.getCapabilities().includes("connect_ad_accounts")?`
        <button class="client-card__invite" type="button" data-action="adaccounts" data-client-guid="${q(e.guid)}" data-client-name="${q(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Ad accounts
        </button>`:""}
      </div>
    </div>`}function jo(){return xc(),`
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
          ${kt("hourglass_empty","Loading clients…")}
        </div>
      </div>
    </div>`}async function Wo(){const e=yc();document.getElementById("clients-add-btn")?.addEventListener("click",()=>Sc(e)),await Yo(e)}async function Yo(e){const t=document.getElementById("clients-body"),a=document.getElementById("clients-count");if(t){if(!e?.guid){t.innerHTML=kt("info","Client provisioning is available to reseller / agency accounts."),a&&(a.textContent="");return}try{const n=A.getConfig?.().BASE_URL||"",o=await fetch(`${n}/m5t/v5/acctGroup`);if(!o.ok)throw new Error(`HTTP ${o.status}`);const s=await o.json(),i=(Array.isArray(s?.data)?s.data:[]).filter(l=>l.class===qo&&(!l.parent||l.parent===e.guid));if(!i.length){t.innerHTML=kt("group_off","No clients yet. Add your first client to start managing magnets on their behalf."),a&&(a.textContent="");return}t.innerHTML=`<div class="client-list">${i.map(Ac).join("")}</div>`,a&&(a.textContent=`${i.length} client${i.length===1?"":"s"}`),t.querySelectorAll(".client-card__invite").forEach(l=>{l.addEventListener("click",()=>{l.dataset.action==="adaccounts"?kc(l.dataset.clientGuid,l.dataset.clientName):Tc(l.dataset.clientGuid,l.dataset.clientName)})})}catch(n){console.warn("[clients] load failed:",n),t.innerHTML=kt("error","Couldn’t load clients. Please try again."),a&&(a.textContent="")}}}function Sc(e){if(!e?.guid){Dt("Only reseller / agency accounts can add clients.","error");return}const t=document.createElement("div");t.className="client-modal-scrim";const a=document.createElement("div");a.className="client-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${q(e.name||"your agency")}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`,document.body.appendChild(t),document.body.appendChild(a),requestAnimationFrame(()=>{t.classList.add("open"),a.classList.add("open")});const n=a.querySelector("#client-name-input"),o=a.querySelector("#client-modal-error"),s=a.querySelector('[data-act="create"]');n?.focus();const r=()=>{t.classList.remove("open"),a.classList.remove("open"),document.removeEventListener("keydown",i),setTimeout(()=>{t.remove(),a.remove()},200)},i=c=>{c.key==="Escape"&&r()};document.addEventListener("keydown",i),t.addEventListener("click",r),a.querySelector(".client-modal__close")?.addEventListener("click",r),a.querySelector('[data-act="cancel"]')?.addEventListener("click",r);const l=async()=>{const c=(n?.value||"").trim();if(o.textContent="",!c){o.textContent="Please enter a client name.",n?.focus();return}s.disabled=!0;const h=s.innerHTML;s.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…';try{const y=A.getConfig?.().BASE_URL||"",_=await fetch(`${y}/m5t/v5/acctGroup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({class:qo,caption:c,parent:e.guid})}),m=await _.json().catch(()=>({}));if(!_.ok||!m?.ok){const x=_.status===403?"You are not authorized to add a client here.":m?.message||m?.error||`Failed (HTTP ${_.status})`;throw new Error(x)}Dt(`Added client “${c}”`,"success"),r(),await Yo(e)}catch(y){console.warn("[clients] create failed:",y),o.textContent=y.message||"Something went wrong. Please try again.",s.disabled=!1,s.innerHTML=h}};s?.addEventListener("click",l),n?.addEventListener("keydown",c=>{c.key==="Enter"&&l()})}const Ln=e=>String(e||"").replace(/[^0-9]/g,"");async function kc(e,t){const a=A.getConfig?.().BASE_URL||"",n={};try{const x=await fetch(`${a}/m5t/v5/coreAdAccount?owner_guid=${encodeURIComponent(e)}`),g=await x.json().catch(()=>({}));if(!x.ok)throw new Error(`Failed to load ad accounts (${x.status})`);(g?.data||[]).forEach(f=>{n[f.provider]=f})}catch(x){console.warn("[clients] ad-accounts prefill failed:",x)}const o=n.google_ads,s=n.google_lsa,r=document.createElement("div");r.className="client-modal-scrim";const i=document.createElement("div");i.className="client-modal",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Ad accounts: ${q(t)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Connect this client's advertising accounts so they can see ad performance next to their magnet leads. Enter account IDs only, no passwords.</p>
      <label class="client-modal__label" for="aa-gads">Google Ads Customer ID</label>
      <input class="client-modal__input" id="aa-gads" type="text" inputmode="numeric" placeholder="123-456-7890" autocomplete="off" value="${q(o?.external_customer_id||"")}" />
      <p class="client-modal__hint">Found top-right in the client's Google Ads account. Dashes optional.</p>
      <label class="client-modal__label" for="aa-lsa" style="margin-top:14px">Local Services (LSA) Account ID</label>
      <input class="client-modal__input" id="aa-lsa" type="text" inputmode="numeric" placeholder="Optional" autocomplete="off" value="${q(s?.external_customer_id||"")}" />
      <p class="client-modal__hint">Leave a field blank to disconnect that account.</p>
      <p class="client-modal__error" id="aa-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save">
          <span class="material-symbols-outlined" aria-hidden="true">save</span> Save
        </button>
      </div>
    </div>`,document.body.appendChild(r),document.body.appendChild(i),requestAnimationFrame(()=>{r.classList.add("open"),i.classList.add("open")});const l=i.querySelector("#aa-error"),c=i.querySelector('[data-act="save"]'),h=()=>{r.classList.remove("open"),i.classList.remove("open"),document.removeEventListener("keydown",y),setTimeout(()=>{r.remove(),i.remove()},200)},y=x=>{x.key==="Escape"&&h()};document.addEventListener("keydown",y),r.addEventListener("click",h),i.querySelector(".client-modal__close")?.addEventListener("click",h),i.querySelector('[data-act="cancel"]')?.addEventListener("click",h);const _=(x,g,f)=>{const v=`${a}/m5t/v5/coreAdAccount`;return g&&!f?fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner_guid:e,provider:x,external_customer_id:g})}):g&&f&&g!==f.external_customer_id?fetch(`${v}/${encodeURIComponent(f.guid)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({external_customer_id:g})}):!g&&f?fetch(`${v}/${encodeURIComponent(f.guid)}`,{method:"DELETE"}):null},m=async()=>{l.textContent="";const x=Ln(i.querySelector("#aa-gads").value),g=Ln(i.querySelector("#aa-lsa").value),f=[_("google_ads",x,o),_("google_lsa",g,s)].filter(Boolean);if(!f.length){h();return}c.disabled=!0;const v=c.innerHTML;c.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…';try{const I=await Promise.all(f);for(const O of I)if(!O.ok){const F=await O.json().catch(()=>({}));throw new Error(O.status===403?"You are not authorized to connect accounts for this client.":F?.error||F?.message||`Failed (HTTP ${O.status})`)}Dt("Ad accounts updated","success"),h()}catch(I){l.textContent=I.message||"Something went wrong. Please try again.",c.disabled=!1,c.innerHTML=v}};c?.addEventListener("click",m)}function Tc(e,t){if(!e)return;const a=document.createElement("div");a.className="client-modal-scrim";const n=document.createElement("div");n.className="client-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${q(t||"this client")}</strong> to a read-only login for their account.</p>
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
    </div>`,document.body.appendChild(a),document.body.appendChild(n),requestAnimationFrame(()=>{a.classList.add("open"),n.classList.add("open")});const o=()=>{a.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",s),setTimeout(()=>{a.remove(),n.remove()},200)},s=h=>{h.key==="Escape"&&o()};document.addEventListener("keydown",s),a.addEventListener("click",o),n.querySelector(".client-modal__close")?.addEventListener("click",o),n.querySelector('[data-act="cancel"]')?.addEventListener("click",o);const r=n.querySelector("#inv-email"),i=n.querySelector("#inv-error"),l=n.querySelector('[data-act="send"]');r?.focus();const c=h=>h.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(h.dataset.url),h.textContent="Copied!",setTimeout(()=>{h.textContent="Copy link"},1500)}catch{}});(async function(){const y=n.querySelector("#invite-pending");if(y)try{const _=A.getConfig?.().BASE_URL||"",m=await fetch(`${_}/m5t/v5/acctGroup/${encodeURIComponent(e)}/invites`),x=await m.json().catch(()=>({})),g=m.ok&&x.ok&&Array.isArray(x.invites)?x.invites:[];if(!g.length){y.innerHTML="";return}y.innerHTML=`
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${g.map(f=>`
            <div class="invite-pending__row">
              <span class="invite-pending__email${f.expired?" expired":""}" title="${q(f.email)}">${q(f.email)}${f.expired?" · expired":""}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${q(f.inviteUrl)}">Copy link</button>
            </div>`).join("")}
        </div>`,y.querySelectorAll(".invite-pending__copy").forEach(c)}catch{y.innerHTML=""}})(),l?.addEventListener("click",async()=>{const h=(n.querySelector("#inv-email").value||"").trim(),y=(n.querySelector("#inv-first").value||"").trim(),_=(n.querySelector("#inv-last").value||"").trim();if(i.textContent="",!h||!y||!_){i.textContent="Email, first, and last name are required.";return}l.disabled=!0;const m=l.innerHTML;l.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const x=A.getConfig?.().BASE_URL||"",g=await fetch(`${x}/m5t/v5/acctGroup/${encodeURIComponent(e)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h,first:y,last:_})}),f=await g.json().catch(()=>({}));if(!g.ok||!f.ok){const I=g.status===409?"A user with that email already exists.":g.status===403?"You are not authorized to invite for this client.":f.message||f.error||`Failed (HTTP ${g.status})`;throw new Error(I)}Dt(`Invite created for ${h}`,"success"),n.querySelector("#invite-body").innerHTML=`
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${f.emailQueued?`An invite email is on its way to <strong>${q(h)}</strong>.`:`Invite created for <strong>${q(h)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly. It lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${q(f.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const v=n.querySelector("#inv-link");n.querySelector("#inv-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(v.value),n.querySelector("#inv-copy").textContent="Copied!"}catch{v.select()}}),n.querySelector('[data-act="done"]')?.addEventListener("click",o)}catch(x){console.warn("[clients] invite failed:",x),i.textContent=x.message||"Something went wrong. Please try again.",l.disabled=!1,l.innerHTML=m}})}const Cc={render:jo,init:Wo},Ic=Object.freeze(Object.defineProperty({__proto__:null,default:Cc,init:Wo,render:jo},Symbol.toStringTag,{value:"Module"})),Nn="managed_client";let On=!1;const $c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ne=e=>String(e??"").replace(/[&<>"']/g,t=>$c[t]),Rn=(e,t="info")=>{try{d.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Lc=e=>String(e||"?").trim().split(/\s+/).slice(0,2).map(t=>t[0]||"").join("").toUpperCase()||"?";function Nc(){const e=A.getActiveOrg();let t=e&&e.channel!==Nn?e:null;if(!t){const n=A.getMemberships().find(o=>o.channel!==Nn);n&&(t={guid:n.orgGuid,channel:n.channel,memberRole:n.memberRole})}if(!t)return null;const a=A.getMemberships().find(n=>n.orgGuid===t.guid)?.name;return{...t,name:a}}function Oc(e){return Object.values(rt).filter(t=>zs(e,t.value)).sort((t,a)=>a.rank-t.rank)}function Rc(){if(On)return;const e=document.createElement("style");e.id="m5t-team-styles",e.textContent=`
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
  `,document.head.appendChild(e),On=!0}function Bt(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Mc(e){const t=e.member_role||"member";return`
    <div class="team-row">
      <span class="team-avatar">${ne(Lc(e.name||e.email))}</span>
      <span class="team-main">
        <div class="team-name">${ne(e.name||e.email)}${e.verified?"":' · <span style="color:var(--color-text-subtle,#6C7C9A);font-weight:400;">pending verification</span>'}</div>
        <div class="team-email" title="${ne(e.email)}">${ne(e.email)}</div>
      </span>
      <span class="team-role" data-role="${ne(t)}">${ne(rt[t]?.label||t)}</span>
    </div>`}function Ko(){return Rc(),`
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
          ${Bt("hourglass_empty","Loading team…")}
        </div>
      </div>
    </div>`}async function Jo(){const e=Nc(),t=document.getElementById("team-invite-btn");if(!e){t&&(t.style.display="none"),document.getElementById("team-body").innerHTML=Bt("info","Team management is available for agency and workspace accounts.");return}t?.addEventListener("click",()=>Fc(e)),await $a(e)}async function $a(e){const t=document.getElementById("team-body"),a=document.getElementById("team-count");if(t)try{const n=A.getConfig?.().BASE_URL||"",[o,s]=await Promise.all([fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/members`),fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/invites`)]),[r,i]=await Promise.all([o.json().catch(()=>({})),s.json().catch(()=>({}))]);if(!o.ok||!s.ok)throw new Error(`Failed to load team (members: ${o.status}, invites: ${s.status})`);const l=r.members||[],c=i.invites||[],h=c.length?`
      <div class="team-pending">
        <div class="team-pending__label">Pending invites</div>
        ${c.map(y=>`
          <div class="team-pending__row">
            <span class="team-pending__email" title="${ne(y.email)}">${ne(y.email)}${y.expired?" · expired":""}</span>
            <button class="team-modal__btn team-modal__btn--ghost team-copy" type="button" data-url="${ne(y.inviteUrl)}">Copy link</button>
          </div>`).join("")}
      </div>`:"";t.innerHTML=h+(l.length?`<div class="team-list">${l.map(Mc).join("")}</div>`:Bt("group","No members yet.")),a&&(a.textContent=`${l.length} member${l.length===1?"":"s"}`),t.querySelectorAll(".team-copy").forEach(y=>y.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(y.dataset.url),y.textContent="Copied!",setTimeout(()=>{y.textContent="Copy link"},1500)}catch{}}))}catch(n){console.warn("[team] load failed:",n),t.innerHTML=Bt("error","Couldn’t load the team. Please try again.")}}function Fc(e){const t=Oc(e.memberRole);if(!t.length){Rn("You don’t have permission to invite teammates.","error");return}const a=document.createElement("div");a.className="team-modal-scrim";const n=document.createElement("div");n.className="team-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="team-modal__head">
      <span class="team-modal__title">Invite a teammate</span>
      <button class="team-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="team-modal__body" id="team-invite-body">
      <p class="team-modal__sub">They'll get a link to set a password and join <strong>${ne(e.name||"your workspace")}</strong>.</p>
      <label class="team-modal__label" for="tm-email">Email</label>
      <input class="team-modal__input" id="tm-email" type="email" placeholder="teammate@company.com" autocomplete="off" />
      <div class="team-modal__row">
        <div><label class="team-modal__label" for="tm-first">First name</label><input class="team-modal__input" id="tm-first" type="text" autocomplete="off" /></div>
        <div><label class="team-modal__label" for="tm-last">Last name</label><input class="team-modal__input" id="tm-last" type="text" autocomplete="off" /></div>
      </div>
      <label class="team-modal__label" for="tm-role">Role</label>
      <select class="team-modal__select" id="tm-role">
        ${t.map(l=>`<option value="${l.value}"${l.value==="member"?" selected":""}>${ne(l.label)}</option>`).join("")}
      </select>
      <p class="team-modal__error" id="tm-error"></p>
      <div class="team-modal__actions">
        <button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="team-modal__btn team-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`,document.body.appendChild(a),document.body.appendChild(n),requestAnimationFrame(()=>{a.classList.add("open"),n.classList.add("open")});const o=()=>{a.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",s),setTimeout(()=>{a.remove(),n.remove()},200)},s=l=>{l.key==="Escape"&&o()};document.addEventListener("keydown",s),a.addEventListener("click",o),n.querySelector(".team-modal__close")?.addEventListener("click",o),n.querySelector('[data-act="cancel"]')?.addEventListener("click",o),n.querySelector("#tm-email")?.focus();const r=n.querySelector("#tm-error"),i=n.querySelector('[data-act="send"]');i?.addEventListener("click",async()=>{const l=(n.querySelector("#tm-email").value||"").trim(),c=(n.querySelector("#tm-first").value||"").trim(),h=(n.querySelector("#tm-last").value||"").trim(),y=n.querySelector("#tm-role").value;if(r.textContent="",!l||!c||!h){r.textContent="Email, first, and last name are required.";return}i.disabled=!0;const _=i.innerHTML;i.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const m=A.getConfig?.().BASE_URL||"",x=await fetch(`${m}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,first:c,last:h,member_role:y})}),g=await x.json().catch(()=>({}));if(!x.ok||!g.ok){const v=x.status===409?"A user with that email already exists.":x.status===403?g.message||"You are not authorized to invite this role.":g.message||g.error||`Failed (HTTP ${x.status})`;throw new Error(v)}Rn(`Invite created for ${l}`,"success"),n.querySelector("#team-invite-body").innerHTML=`
        <div class="team-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${g.emailQueued?`An invite email is on its way to <strong>${ne(l)}</strong>.`:`Invite created for <strong>${ne(l)}</strong>.`}</p>
          <p class="team-modal__sub">Or share this link directly:</p>
          <div class="team-modal__linkrow">
            <input class="team-modal__input" id="tm-link" type="text" readonly value="${ne(g.inviteUrl)}" />
            <button class="team-modal__btn team-modal__btn--primary" type="button" id="tm-copy">Copy</button>
          </div>
          <div class="team-modal__actions"><button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const f=n.querySelector("#tm-link");n.querySelector("#tm-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(f.value),n.querySelector("#tm-copy").textContent="Copied!"}catch{f.select()}}),n.querySelector('[data-act="done"]')?.addEventListener("click",()=>{o(),$a(e)})}catch(m){console.warn("[team] invite failed:",m),r.textContent=m.message||"Something went wrong. Please try again.",i.disabled=!1,i.innerHTML=_}})}const Pc={render:Ko,init:Jo},Dc=Object.freeze(Object.defineProperty({__proto__:null,default:Pc,init:Jo,loadTeam:$a,render:Ko},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
