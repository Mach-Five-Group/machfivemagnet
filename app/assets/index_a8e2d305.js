(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const ot="modulepreload",st=function(a){return"/"+a},Se={},I=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(E=>Promise.resolve(E).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");o=u(t.map(h=>{if(h=st(h),h in Se)return;Se[h]=!0;const E=h.endsWith(".css"),O=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${O}`))return;const w=document.createElement("link");if(w.rel=E?"stylesheet":ot,E||(w.as="script"),w.crossOrigin="",w.href=h,c&&w.setAttribute("nonce",c),document.head.appendChild(w),E)return new Promise((k,D)=>{w.addEventListener("load",k),w.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return o.then(r=>{for(const c of r||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};var rt=/([:*])(\w+)/g,it="([^/]+)",lt=/\*/g,ct="?(?:.*)",dt=/\/\?/g,ut="/?([^/]+|)",gt="(?:/^|^)",pt="";function De(a){return a===void 0&&(a="/"),me()?location.pathname+location.search+location.hash:a}function A(a){return a.replace(/\/+$/,"").replace(/^\/+/,"")}function ee(a){return typeof a=="string"}function ht(a){return typeof a=="function"}function te(a){return a&&a.indexOf("#")>=0&&a.split("#").pop()||""}function mt(a,e){return e.length===0||!a?null:a.slice(1,a.length).reduce(function(t,n,o){return t===null&&(t={}),t[e[o]]=decodeURIComponent(n),t},null)}function ne(a){var e=A(a).split(/\?(.*)?$/);return[A(e[0]),e.slice(1).join("")]}function he(a){for(var e={},t=a.split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]!==""){var s=decodeURIComponent(o[0]);e[s]?(Array.isArray(e[s])||(e[s]=[e[s]]),e[s].push(decodeURIComponent(o[1]||""))):e[s]=decodeURIComponent(o[1]||"")}}return e}function Ge(a,e){var t=ne(A(a.currentLocationPath)),n=t[0],o=t[1],s=o===""?null:he(o),r=[],c;if(ee(e.path)){if(c=gt+A(e.path).replace(rt,function(O,w,k){return r.push(k),it}).replace(lt,ct).replace(dt,ut)+"$",A(e.path)===""&&A(n)==="")return{url:n,queryString:o,hashString:te(a.to),route:e,data:null,params:s}}else c=e.path;var u=new RegExp(c,pt),h=n.match(u);if(h){var E=ee(e.path)?mt(h,r):h.groups?h.groups:h.slice(1);return{url:A(n.replace(new RegExp("^"+a.instance.root),"")),queryString:o,hashString:te(a.to),route:e,data:E,params:s}}return!1}function He(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function G(a,e){return typeof a[e]>"u"||a[e]===!0}function _t(a){if(!a)return{};var e=a.split(","),t={},n;return e.forEach(function(o){var s=o.split(":").map(function(r){return r.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":t.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=s[1];break;case"resolveOptionsHash":n||(n={}),n.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":t[s[0]]=s[1]==="true";break}}),n&&(t.resolveOptions=n),t}function me(){return typeof window<"u"}function ft(a,e){return a===void 0&&(a=[]),e===void 0&&(e={}),a.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(n){t[n]&&(e[n]||(e[n]=[]),e[n].push(t[n]))})}),e}function x(a,e,t){var n=e||{},o=0;(function s(){if(!a[o]){t&&t(n);return}Array.isArray(a[o])?(a.splice.apply(a,[o,1].concat(a[o][0](n)?a[o][1]:a[o][2])),s()):a[o](n,function(r){typeof r>"u"||r===!0?(o+=1,s()):t&&t(n)})})()}x.if=function(a,e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),[a,e,t]};function Ae(a,e){typeof a.currentLocationPath>"u"&&(a.currentLocationPath=a.to=De(a.instance.root)),a.currentLocationPath=a.instance._checkForAHash(a.currentLocationPath),e()}function re(a,e){for(var t=0;t<a.instance.routes.length;t++){var n=a.instance.routes[t],o=Ge(a,n);if(o&&(a.matches||(a.matches=[]),a.matches.push(o),a.resolveOptions.strategy==="ONE")){e();return}}e()}function vt(a,e){a.navigateOptions&&(typeof a.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof a.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function bt(a,e){a.navigateOptions.force===!0?(a.instance._setCurrent([a.instance._pathToMatchObject(a.to)]),e(!1)):e()}var we=me(),Et=He();function yt(a,e){if(G(a.navigateOptions,"updateBrowserURL")){var t=("/"+a.to).replace(/\/\//g,"/"),n=we&&a.resolveOptions&&a.resolveOptions.hash===!0;Et?(history[a.navigateOptions.historyAPIMethod||"pushState"](a.navigateOptions.stateObj||{},a.navigateOptions.title||"",n?"#"+t:t),location&&location.hash&&(a.instance.__freezeListening=!0,setTimeout(function(){if(!n){var o=location.hash;location.hash="",location.hash=o}a.instance.__freezeListening=!1},1))):we&&(window.location.href=a.to)}e()}function Be(a,e){var t=a.instance;if(!t.lastResolved()){e();return}x(t.lastResolved().map(function(n){return function(o,s){if(!n.route.hooks||!n.route.hooks.leave){s();return}var r=!1,c=a.instance.matchLocation(n.route.path,a.currentLocationPath,!1);if(n.route.path!=="*")r=!c;else{var u=a.matches?a.matches.find(function(h){return n.route.path===h.route.path}):!1;r=!u}if(G(a.navigateOptions,"callHooks")&&r){x(n.route.hooks.leave.map(function(h){return function(E,O){return h(function(w){w===!1?a.instance.__markAsClean(a):O()},a.matches&&a.matches.length>0?a.matches.length===1?a.matches[0]:a.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return e()})}function St(a,e){a.match.route.hooks&&a.match.route.hooks.before&&G(a.navigateOptions,"callHooks")?x(a.match.route.hooks.before.map(function(t){return function(o,s){return t(function(r){r===!1?a.instance.__markAsClean(a):s()},a.match)}}).concat([function(){return e()}])):e()}function At(a,e){G(a.navigateOptions,"callHandler")&&a.match.route.handler(a.match),a.instance.updatePageLinks(),e()}function wt(a,e){a.match.route.hooks&&a.match.route.hooks.after&&G(a.navigateOptions,"callHooks")&&a.match.route.hooks.after.forEach(function(t){return t(a.match)}),e()}function Tt(a,e){var t=a.instance.lastResolved();if(t&&t[0]&&t[0].route===a.match.route&&t[0].url===a.match.url&&t[0].queryString===a.match.queryString){t.forEach(function(n){n.route.hooks&&n.route.hooks.already&&G(a.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(o){return o(a.match)})}),e(!1);return}e()}function Ct(a,e){var t=a.instance._notFoundRoute;if(t){a.notFoundHandled=!0;var n=ne(a.currentLocationPath),o=n[0],s=n[1],r=te(a.to);t.path=A(o);var c={url:t.path,queryString:s,hashString:r,data:null,route:t,params:s!==""?he(s):null};a.matches=[c],a.match=c}e()}function Ot(a,e){(!a.resolveOptions||a.resolveOptions.noMatchWarning===!1||typeof a.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+a.currentLocationPath+`" didn't match any of the registered routes.`),e()}function Lt(a,e){a.instance._setCurrent(null),e()}function Ve(a,e){G(a.navigateOptions,"updateState")&&a.instance._setCurrent(a.matches),e()}var $e=[Tt,St,At,wt],Te=[Be,Ct,x.if(function(a){var e=a.notFoundHandled;return e},$e.concat([Ve]),[Ot,Lt])];function ge(){return ge=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},ge.apply(this,arguments)}function Ce(a,e){var t=0;function n(){if(t===a.matches.length){Ve(a,e);return}x($e,ge({},a,{match:a.matches[t]}),function(){t+=1,n()})}Be(a,n)}function ie(a){a.instance.__markAsClean(a)}function pe(){return pe=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},pe.apply(this,arguments)}var Oe="[data-navigo]";function Nt(a,e){var t=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Oe},n=this,o="/",s=null,r=[],c=!1,u,h=He(),E=me();a?o=A(a):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function O(d){return d.indexOf("#")>=0&&(t.hash===!0?d=d.split("#")[1]||"/":d=d.split("#")[0]),d}function w(d){return A(o+"/"+A(d))}function k(d,p,v,S){return d=ee(d)?w(d):d,{name:S||A(String(d)),path:d,handler:p,hooks:ft(v)}}function D(d,p,v){var S=this;return typeof d=="object"&&!(d instanceof RegExp)?(Object.keys(d).forEach(function(b){if(typeof d[b]=="function")S.on(b,d[b]);else{var P=d[b],Y=P.uses,nt=P.as,at=P.hooks;r.push(k(b,Y,[u,at],nt))}}),this):(typeof d=="function"&&(v=p,p=d,d=o),r.push(k(d,p,[u,v])),this)}function g(d,p){if(n.__dirty){n.__waiting.push(function(){return n.resolve(d,p)});return}else n.__dirty=!0;d=d?A(o)+"/"+A(d):void 0;var v={instance:n,to:d,currentLocationPath:d,navigateOptions:{},resolveOptions:pe({},t,p)};return x([Ae,re,x.if(function(S){var b=S.matches;return b&&b.length>0},Ce,Te)],v,ie),v.matches?v.matches:!1}function _(d,p){if(n.__dirty){n.__waiting.push(function(){return n.navigate(d,p)});return}else n.__dirty=!0;d=A(o)+"/"+A(d);var v={instance:n,to:d,navigateOptions:p||{},resolveOptions:p&&p.resolveOptions?p.resolveOptions:t,currentLocationPath:O(d)};x([vt,bt,re,x.if(function(S){var b=S.matches;return b&&b.length>0},Ce,Te),yt,ie],v,ie)}function f(d,p,v){var S=be(d,p);return S!==null?(_(S.replace(new RegExp("^/?"+o),""),v),!0):!1}function T(d){return this.routes=r=r.filter(function(p){return ee(d)?A(p.path)!==A(d):ht(d)?d!==p.handler:String(p.path)!==String(d)}),this}function C(){h&&(this.__popstateListener=function(){n.__freezeListening||g()},window.addEventListener("popstate",this.__popstateListener))}function R(){this.routes=r=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=c=!0}function U(d,p){return n._notFoundRoute=k("*",d,[u,p],"__NOT_FOUND__"),this}function M(){if(E)return B().forEach(function(d){if(d.getAttribute("data-navigo")==="false"||d.getAttribute("target")==="_blank"){d.hasListenerAttached&&d.removeEventListener("click",d.navigoHandler);return}d.hasListenerAttached||(d.hasListenerAttached=!0,d.navigoHandler=function(p){if((p.ctrlKey||p.metaKey)&&p.target.tagName.toLowerCase()==="a")return!1;var v=d.getAttribute("href");if(typeof v>"u"||v===null)return!1;if(v.match(/^(http|https)/)&&typeof URL<"u")try{var S=new URL(v);v=S.pathname+S.search}catch{}var b=_t(d.getAttribute("data-navigo-options"));c||(p.preventDefault(),p.stopPropagation(),n.navigate(A(v),b))},d.addEventListener("click",d.navigoHandler))}),n}function B(){return E?[].slice.call(document.querySelectorAll(t.linksSelector||Oe)):[]}function se(d){return"/"+o+"/"+A(d)}function j(d){return u=d,this}function Je(){return s}function be(d,p,v){var S=r.find(function(Y){return Y.name===d}),b=null;if(S){if(b=S.path,p)for(var P in p)b=b.replace(":"+P,p[P]);b=b.match(/^\//)?b:"/"+b}return b&&v&&!v.includeRoot&&(b=b.replace(new RegExp("^/"+o),"")),b}function Qe(d){return d.getAttribute("href")}function Ee(d){var p=ne(A(d)),v=p[0],S=p[1],b=S===""?null:he(S),P=te(d),Y=k(v,function(){},[u],v);return{url:v,queryString:S,hashString:P,route:Y,data:null,params:b}}function Xe(){return Ee(A(De(o)).replace(new RegExp("^"+o),""))}function Ze(d){var p={instance:n,currentLocationPath:d,to:d,resolveOptions:t};return re(p,function(){}),p.matches?p.matches:!1}function et(d,p,v){typeof p<"u"&&(typeof v>"u"||v)&&(p=w(p));var S={instance:n,to:p,currentLocationPath:p};Ae(S,function(){}),typeof d=="string"&&(d=typeof v>"u"||v?w(d):d);var b=Ge(S,{name:String(d),path:d,handler:function(){},hooks:{}});return b||!1}function J(d,p,v){return typeof p=="string"&&(p=ye(p)),p?(p.hooks[d]||(p.hooks[d]=[]),p.hooks[d].push(v),function(){p.hooks[d]=p.hooks[d].filter(function(S){return S!==v})}):(console.warn("Route doesn't exists: "+p),function(){})}function ye(d){return typeof d=="string"?r.find(function(p){return p.name===w(d)}):r.find(function(p){return p.handler===d})}function tt(d){d.instance.__dirty=!1,d.instance.__waiting.length>0&&d.instance.__waiting.shift()()}this.root=o,this.routes=r,this.destroyed=c,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=tt,this.on=D,this.off=T,this.resolve=g,this.navigate=_,this.navigateByName=f,this.destroy=R,this.notFound=U,this.updatePageLinks=M,this.link=se,this.hooks=j,this.extractGETParameters=function(d){return ne(O(d))},this.lastResolved=Je,this.generate=be,this.getLinkPath=Qe,this.match=Ze,this.matchLocation=et,this.getCurrentLocation=Xe,this.addBeforeHook=J.bind(this,"before"),this.addAfterHook=J.bind(this,"after"),this.addAlreadyHook=J.bind(this,"already"),this.addLeaveHook=J.bind(this,"leave"),this.getRoute=ye,this._pathToMatchObject=Ee,this._clean=A,this._checkForAHash=O,this._setCurrent=function(d){return s=n.current=d},C.call(this),M.call(this)}var Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function It(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var W={exports:{}},kt=W.exports,Le;function Mt(){return Le||(Le=1,(function(a,e){(function(t,n){var o={};t.PubSub?(o=t.PubSub,console.warn("PubSub already loaded, using existing version")):(t.PubSub=o,n(o)),a!==void 0&&a.exports&&(e=a.exports=o),e.PubSub=o,a.exports=e=o})(typeof window=="object"&&window||kt||Rt,function(t){var n={},o=-1,s="*";function r(g){var _;for(_ in g)if(Object.prototype.hasOwnProperty.call(g,_))return!0;return!1}function c(g){return function(){throw g}}function u(g,_,f){try{g(_,f)}catch(T){setTimeout(c(T),0)}}function h(g,_,f){g(_,f)}function E(g,_,f,T){var C=n[_],R=T?h:u,U;if(Object.prototype.hasOwnProperty.call(n,_))for(U in C)Object.prototype.hasOwnProperty.call(C,U)&&R(C[U],g,f)}function O(g,_,f){return function(){var C=String(g),R=C.lastIndexOf(".");for(E(g,g,_,f);R!==-1;)C=C.substr(0,R),R=C.lastIndexOf("."),E(g,C,_,f);E(g,s,_,f)}}function w(g){var _=String(g),f=!!(Object.prototype.hasOwnProperty.call(n,_)&&r(n[_]));return f}function k(g){for(var _=String(g),f=w(_)||w(s),T=_.lastIndexOf(".");!f&&T!==-1;)_=_.substr(0,T),T=_.lastIndexOf("."),f=w(_);return f}function D(g,_,f,T){g=typeof g=="symbol"?g.toString():g;var C=O(g,_,T),R=k(g);return R?(f===!0?C():setTimeout(C,0),!0):!1}t.publish=function(g,_){return D(g,_,!1,t.immediateExceptions)},t.publishSync=function(g,_){return D(g,_,!0,t.immediateExceptions)},t.subscribe=function(g,_){if(typeof _!="function")return!1;g=typeof g=="symbol"?g.toString():g,Object.prototype.hasOwnProperty.call(n,g)||(n[g]={});var f="uid_"+String(++o);return n[g][f]=_,f},t.subscribeAll=function(g){return t.subscribe(s,g)},t.subscribeOnce=function(g,_){var f=t.subscribe(g,function(){t.unsubscribe(f),_.apply(this,arguments)});return t},t.clearAllSubscriptions=function(){n={}},t.clearSubscriptions=function(_){var f;for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(_)===0&&delete n[f]},t.countSubscriptions=function(_){var f,T,C=0;for(f in n)if(Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(_)===0){for(T in n[f])C++;break}return C},t.getSubscriptions=function(_){var f,T=[];for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(_)===0&&T.push(f);return T},t.unsubscribe=function(g){var _=function(se){var j;for(j in n)if(Object.prototype.hasOwnProperty.call(n,j)&&j.indexOf(se)===0)return!0;return!1},f=typeof g=="string"&&(Object.prototype.hasOwnProperty.call(n,g)||_(g)),T=!f&&typeof g=="string",C=typeof g=="function",R=!1,U,M,B;if(f){t.clearSubscriptions(g);return}for(U in n)if(Object.prototype.hasOwnProperty.call(n,U)){if(M=n[U],T&&M[g]){delete M[g],R=g;break}if(C)for(B in M)Object.prototype.hasOwnProperty.call(M,B)&&M[B]===g&&(delete M[B],R=!0)}return R}})})(W,W.exports)),W.exports}var Pt=Mt();const i=It(Pt),l=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",AUTH_SCOPE_LOADED:"AUTH.SCOPE.LOADED",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",M5T_SIDE_NAV:"M5T_SIDE_NAV",M5T_SIDE_NAV_TAP:"M5T_SIDE_NAV.TAP",M5T_SIDE_NAV_COLLAPSE:"M5T_SIDE_NAV.COLLAPSE",M5T_SIDE_NAV_LOGO_TAP:"M5T_SIDE_NAV.LOGO_TAP",M5T_SIDE_NAV_ORG_SWITCH:"M5T_SIDE_NAV.ORG_SWITCH",M5T_SIDE_NAV_FOOTER_ACTION:"M5T_SIDE_NAV.FOOTER_ACTION",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",LLM:"LLM",LLM_DO_DOWNLOAD:"LLM.DO.DOWNLOAD",LLM_STATUS:"LLM.STATUS",LLM_COMPLETE:"LLM.COMPLETE",LLM_ERROR:"LLM.ERROR",LLM_PROMPT:"LLM.PROMPT",LLM_RESPONSE:"LLM.RESPONSE",LLM_CANCEL:"LLM.CANCEL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),le={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://machfivemagnet-saas.onrender.com"};var ce={};const y=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function ze(a,e=null){if(a in y)return y[a];if(typeof process<"u"&&ce&&ce[a]){const t=ce[a];return t==="true"?!0:t==="false"?!1:isNaN(t)?t:Number(t)}if(typeof import.meta<"u"&&le&&le[a]){const t=le[a];return t==="true"?!0:t==="false"?!1:isNaN(t)?t:Number(t)}return e}function xt(a){return ze(a,!1)===!0}function Ft(){return{...y}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:y,getFlag:ze,isEnabled:xt,getAllFlags:Ft});function Ut(){const a=e=>t=>{const n=t.detail?.pubsubTopic;n&&i.publish(n,t.detail)};document.addEventListener("nav-select",a()),document.addEventListener("logo-click",a()),document.addEventListener("nav-hover",a()),document.addEventListener("nav-double-tap",a()),document.addEventListener("nav-long-tap",a()),document.addEventListener("message-sent",a())}function Dt(){console.log("[AppEvents] Initializing event listeners..."),i.subscribe(l.APP_READY,(t,n)=>{console.log("[AppEvents] APP_READY:",n)}),i.subscribe(l.APP_ERROR,(t,n)=>{console.error("[AppEvents] APP_ERROR:",n)}),i.subscribe(l.APP_SIGNOUT,(t,n)=>{console.log("[AppEvents] APP_SIGNOUT:",n)}),i.subscribe(l.ROUTE_NAV_BEFORE,(t,n)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",n),i.publish(l.UI_LOADING_START)}),i.subscribe(l.ROUTE_NAV_AFTER,(t,n)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",n),i.publish(l.UI_LOADING_END)}),i.subscribe(l.ROUTE_NAV_ERROR,(t,n)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",n),i.publish(l.APP_ERROR,{message:"Navigation error",details:n})}),i.subscribe(l.AUTH_SIGNIN_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",n)}),i.subscribe(l.AUTH_SIGNIN_FAIL,(t,n)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",n),i.publish(l.UI_TOAST,{message:n.message||"Sign in failed",type:"danger"})}),i.subscribe(l.AUTH_SIGNUP_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),i.publish(l.AUTH_VERIFY_LINK)}),i.subscribe(l.AUTH_VERIFY_LINK,(t,n)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),i.subscribe(l.AUTH_SIGNUP_FAIL,(t,n)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",n),i.publish(l.UI_TOAST,{message:n.message||"Sign up failed",type:"danger"})}),i.subscribe(l.AUTH_SIGNOUT_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Signed out successfully",type:"info"})}),i.subscribe(l.AUTH_SIGNUP,(t,n)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),i.subscribe(l.AUTH_FORGOT,(t,n)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),i.subscribe(l.AUTH_FORGOT_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),i.subscribe(l.AUTH_RESETHASH_NAV,(t,n)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),i.subscribe(l.AUTH_RESETHASH_SUCCESS,(t,n)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",n),i.publish(l.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),i.subscribe(l.AUTH_TOKEN_EXPIRED,(t,n)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",n),i.publish(l.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),i.subscribe(l.I18N_SET_LANG,(t,n)=>{console.log("[AppEvents] I18N_SET_LANG:",n);const{langCode:o}=n;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),i.publish(l.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(s){console.error("[AppEvents] Error changing language:",s),i.publish(l.UI_TOAST,{message:`Failed to change language: ${s.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),i.subscribe("CONVERSATION.PROMPT",(t,n)=>{const o=t.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display prompt in canvas:",n.message),Q(n.message,"user",n.timestamp),i.publish(l.CANVAS_DO_SCROLL);break;case"AGENT":console.log("[AppEvents] Send prompt to agent:",n.message),i.publish(l.LLM_PROMPT,{message:n.message});break;case"AGENT_CANVAS":if(n.message&&n.message.startsWith("::")){console.log("[AppEvents] CLI command detected:",n.message),Q(n.message,"user",n.timestamp),i.publish(l.CANVAS_DO_SCROLL),(async()=>{const s=(await I(async()=>{const{default:u}=await Promise.resolve().then(()=>Qt);return{default:u}},void 0)).default,r=window.AuthController?.getEntity(),c=await s.process(n.message,r);i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:c.message,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}),i.publish(l.CANVAS_DO_SCROLL)})();break}console.log("[AppEvents] Send prompt to agent + canvas:",n.message),Q(n.message,"user",n.timestamp),i.publish(l.CANVAS_DO_SCROLL),i.publish(l.LLM_PROMPT,{message:n.message});break;case"STAGE":console.log("[AppEvents] Stage prompt for editing:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${o}`);break}}),i.subscribe("CONVERSATION.RESPONSE",(t,n)=>{const o=t.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${o}:`,n),!n||!n.message){console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display response in canvas:",n.message),Q(n.message,"assistant",n.timestamp,n.streaming);break;case"WORKFLOW":console.log("[AppEvents] Send response to workflow engine:",n.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${o}`);break}}),i.subscribe(l.UI_LOADING_START,(t,n)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),i.subscribe(l.UI_LOADING_END,(t,n)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),i.subscribe(l.UI_TOAST,(t,n)=>{console.log("[AppEvents] UI_TOAST:",n)}),i.subscribe(l.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const t="0.1",n=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${t} 6/27/2026, 12:41:17 PM|© ${n} Mach Five Tech`,"night")}),Ut(),i.subscribe("M5T_PRIMARY_NAV",(t,n)=>{const o=t.split(".")[1];switch(o){case"TAP":a(n);break;case"LOGO_TAP":e();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function a(t){const{token:n,level:o,primaryToken:s}=t;switch(n){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),i.publish(l.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${n}`,{primaryToken:s});break}}function e(t){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 6/27/2026, 12:41:17 PM|© ${o} Mach Five Tech`,"night",5e3)}i.subscribe(l.LLM_DO_DOWNLOAD,(t,n)=>{console.log("[AppEvents] LLM_DO_DOWNLOAD:",n),window.LLMController?window.LLMController.loadModel():console.error("[AppEvents] LLMController not available")}),i.subscribe(l.LLM_STATUS,(t,n)=>{console.log("[AppEvents] LLM_STATUS:",n),n&&typeof neodigmToast<"u"&&(n.text||`${n.progressPercent}`)}),i.subscribe(l.LLM_COMPLETE,(t,n)=>{console.log("[AppEvents] LLM_COMPLETE:",n),i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:`✓ AI Model Ready: ${n.modelId}`,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})})}),i.subscribe(l.LLM_ERROR,(t,n)=>{console.error("[AppEvents] LLM_ERROR:",n);const o=`AI Error: ${n.error||"Unknown error"}`;typeof neodigmToast<"u"&&neodigmToast.q(o,"danger",8e3),i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:`✗ ${o}`,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})})}),i.subscribe(l.LLM_PROMPT,(t,n)=>{console.log("[AppEvents] LLM_PROMPT:",n),window.LLMController&&n?.message?window.LLMController.chat(n.message):console.error("[AppEvents] LLMController not available or no message provided")}),i.subscribe(l.LLM_RESPONSE,(t,n)=>{console.log("[AppEvents] LLM_RESPONSE:",n),!n?.done&&n?.fullContent&&i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:n.fullContent,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),streaming:!0})}),i.subscribe(l.LLM_CANCEL,(t,n)=>{console.log("[AppEvents] LLM_CANCEL"),window.LLMController&&window.LLMController.cancelGeneration()}),i.subscribe(l.AUTH_SIGNOUT,(t,n)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(y.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}function Q(a,e="user",t=null,n=!1){const o=document.getElementById("chat-messages");if(!o){console.warn("[AppEvents] chat-messages element not found - may not be on home route");return}if(t||(t=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})),n&&e==="assistant"){const r=o.firstElementChild;if(r&&r.tagName.toLowerCase()==="m5t-chat-response"){r.setAttribute("message",a),console.log(`[AppEvents] Updated streaming ${e} bubble (${a.length} chars)`);return}}let s;e==="user"||e==="prompt"?s=document.createElement("m5t-chat-prompt"):s=document.createElement("m5t-chat-response"),s.setAttribute("message",a),s.setAttribute("timestamp",t),o.prepend(s),console.log(`[AppEvents] Added ${e} bubble to canvas (${a.length} chars)`)}class L{static CONFIG={BASE_URL:"https://machfivemagnet-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink",SCOPE:"sse_session_scope",ACTIVE_ORG:"sse_active_org"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",ME:"/m5t/v5/acctEntity/me",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#o=null;static#n=null;static#a=!1;static#s=null;static#i=null;static async init({BASE_URL:e,navigateFunction:t,customConfig:n={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(t&&typeof t=="function")this.#i=t;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#l(),this.#u(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#p(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#u(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{e&&(console.log("[AuthController] mvvLegit navigation to:",e),this.#r(e))}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#_();break;case"UNAUTH":case 1:this.#f();break;case"UNVERF":case 2:this.#v();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#r(e){if(!this.#i){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const t=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",t),this.#i(t)}static#l(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#o=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#o?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#o=null}this.#s=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);e&&(this.#n=JSON.parse(e),console.log("[AuthController] Scope state loaded (cached):",this.#n?.uiMode))}catch(e){console.error("[AuthController] Error loading scope state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#n=null}}static#d(e){try{this.#o=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(t){console.error("[AuthController] Error saving entity state:",t)}}static#g(){this.#o=null,this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}}static getEntity(){return this.#o}static#c(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(e))}catch(t){console.error("[AuthController] Error saving scope state:",t)}}static async fetchScope(){if(typeof mvvLegit>"u"||!this.isAuthenticated())return console.log("[AuthController] fetchScope skipped — not authenticated"),this.#n;if(this.#a)return this.#n;this.#a=!0;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),t=e?`?org=${encodeURIComponent(e)}`:"",n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${t}`);if(n.status===401||n.status===403)return console.warn("[AuthController] /me unauthorized — signing out"),this.doSignout(!0),null;if(!n.ok)return console.warn(`[AuthController] /me failed (${n.status}) — using cached scope`),this.#n;const o=await n.json();return o?.ok?(this.#c(o),i.publish(l.AUTH_SCOPE_LOADED,o),console.log(`[AuthController] Scope loaded: ${o.uiMode} (${o.memberships?.length||0} org(s))`),o):(console.warn("[AuthController] /me returned not-ok — using cached scope"),this.#n)}catch(e){return console.error("[AuthController] fetchScope error:",e),this.#n}finally{this.#a=!1}}static async setActiveOrg(e){try{e?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,e):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#n}static getCapabilities(){return this.#n?.capabilities||[]}static getUiMode(){return this.#n?.uiMode||"self_serve"}static getActiveOrg(){return this.#n?.activeOrg||null}static getMemberships(){return this.#n?.memberships||[]}static async doSignin(e,t){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:t})}),o=await n.json();return n.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#d(o.entity)),setTimeout(()=>{this.#r(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):n.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#d(o.entity),this.fetchScope(),console.log("[AuthController] Explicitly navigating to home"),this.#r(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(n){return console.error("[AuthController] Signin error:",n),{ok:!1,error:n.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const t=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!t),!e&&t){const n=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(t)}`;if(console.log("[AuthController] Sending signout beacon to:",n),navigator.sendBeacon){const o=navigator.sendBeacon(n);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else t||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#g(),console.log("[AuthController] Stopping auth ping..."),this.#h(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(t){console.error("[AuthController] Signout error:",t),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();return t.ok&&n.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#d(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||"Sign up failed",data:n}}catch(t){return console.error("[AuthController] Signup error:",t),{ok:!1,error:t.message}}}static async doResetHash(e,t){try{const n=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:t,modified_by:e})}),s=await o.json();return o.ok&&s.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:s}):{ok:!1,error:s.error||"Password reset failed",data:s}}catch(n){return console.error("[AuthController] Reset password error:",n),{ok:!1,error:n.message}}}static#p(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#m()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#h(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#m(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#s=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#s}static clearDeepLink(){this.#s=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#_(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#p(),this.fetchScope()}static#f(){console.log("[AuthController] User unauthenticated"),this.#h()}static#v(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",t=localStorage.getItem(e);if(!t)return"UNAUTH";if(typeof LZString>"u")return null;const n=LZString.decompressFromUTF16(t),s=JSON.parse(n)?.state;return s===1?"UNAUTH":s===2?"UNVERF":s===4?"AUTH":s===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#r(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#m()}}class m{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_dashboard:"Dashboard",nav_dashboard_tagline:"Overview of your activity",nav_magnets:"Your Magnets",nav_magnets_tagline:"Manage your conversational magnets",nav_templates:"Templates",nav_templates_tagline:"Start from a magnet template",nav_conversations:"Conversations",nav_conversations_tagline:"Captured lead conversations",nav_ab_testing:"A/B Testing",nav_ab_testing_tagline:"Experiment and optimize",nav_analytics:"Analytics",nav_analytics_tagline:"Performance and ad metrics",nav_ad_accounts:"Ad Accounts",nav_ad_accounts_tagline:"Connect advertising accounts",nav_clients:"Clients",nav_clients_tagline:"Manage your client accounts",nav_team:"Team",nav_team_tagline:"Invite and manage teammates",nav_billing:"Billing",nav_billing_tagline:"Plan, usage, and invoices",nav_settings:"Settings",nav_settings_tagline:"Account and workspace settings",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:t,whitelabel:n,lang:o}){e&&(this.#t.buildMode=e),t&&(this.#t.product=t),n&&(this.#t.whitelabel=n),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(e,t={}){const n={...this.#t,...t},{buildMode:o,product:s,whitelabel:r,lang:c}=n;try{const u=this.#e[o]?.[s]?.[r]?.[c]?.[e];return u?Array.isArray(u)?u[Math.floor(Math.random()*u.length)]:u:(console.warn(`[MicrocopyManager] Token not found: ${e} (${o}/${s}/${r}/${c})`),null)}catch(u){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,u),null}}static getAll(e={}){const t={...this.#t,...e},{buildMode:n,product:o,whitelabel:s,lang:r}=t;try{return this.#e[n]?.[o]?.[s]?.[r]||null}catch(c){return console.error("[MicrocopyManager] Error retrieving all tokens",c),null}}static has(e,t={}){const n={...this.#t,...t},{buildMode:o,product:s,whitelabel:r,lang:c}=n;try{return!!this.#e[o]?.[s]?.[r]?.[c]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:t,whitelabel:n}=this.#t;try{return Object.keys(this.#e[e]?.[t]?.[n]||{})}catch{return[]}}static update(e,t,n={}){const o={...this.#t,...n},{buildMode:s,product:r,whitelabel:c,lang:u}=o;try{return this.#e[s]||(this.#e[s]={}),this.#e[s][r]||(this.#e[s][r]={}),this.#e[s][r][c]||(this.#e[s][r][c]={}),this.#e[s][r][c][u]||(this.#e[s][r][c][u]={}),this.#e[s][r][c][u][e]=t,!0}catch(h){return console.error(`[MicrocopyManager] Error updating token: ${e}`,h),!1}}static delete(e,t={}){const n={...this.#t,...t},{buildMode:o,product:s,whitelabel:r,lang:c}=n;try{return delete this.#e[o]?.[s]?.[r]?.[c]?.[e],!0}catch(u){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,u),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(t){return console.error("[MicrocopyManager] Error importing data",t),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:m});class F{static#e=!1;static#t=null;static#o=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#a();m.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#s(),this.#u(),this.#e=!0,this.refresh()}static#n(e){const t={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},n=e.toLowerCase();return t[n]||"DEV"}static#a(){const t=this.#n("production"),n=localStorage.getItem(y.FF_SSE_LS_WHITELABEL)||y.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(y.FF_SSE_LS_USER_LANG)||y.FF_SSE_I18N_LANG;return{buildMode:t,product:y.FF_SSE_I18N_PRODUCT,whitelabel:n,lang:o}}static#s(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,t,n)=>{y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",n),this.#t=n,setTimeout(()=>{this.refresh()},y.FF_SSE_I18N_APPLY_DELAY_MS)},y.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#i())}static#i(){setInterval(()=>{const t=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");t&&t!==this.#t&&(this.#t=t,this.refresh())},500)}static#u(){this.#o||(this.#o=new MutationObserver(e=>{let t=!1;for(const n of e){for(const o of n.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){t=!0;break}if(t)break}t&&(y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#o.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#r(document.body),this.#l(document.body),y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#r(e){const t=e.querySelectorAll("[data-meta-copywrite-i118n]");y.FF_SSE_I18N_DEBUG&&t.length>0&&console.log(`[I18nController] Processing ${t.length} elements`),t.forEach(n=>{try{const o=n.getAttribute("data-meta-copywrite-i118n"),s=JSON.parse(o);if(!s.token){console.warn("[I18nController] Missing token in config:",s);return}const r=s.attribute||"textContent",c=m.get(s.token);if(c===null){console.warn(`[I18nController] Microcopy not found for token: ${s.token}`);return}r==="textContent"?n.textContent=c:r==="innerHTML"?n.innerHTML=c:n.setAttribute(r,c),y.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${c}" to ${r} for token: ${s.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,n)}})}static#l(e){e.querySelectorAll("*").forEach(n=>{n.shadowRoot&&(this.#r(n.shadowRoot),this.#l(n.shadowRoot))})}static setLanguage(e){const t=m.getAvailableLanguages();if(!t.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,t);return}localStorage.setItem(y.FF_SSE_LS_USER_LANG,e),m.setContext({lang:e}),console.log("[I18nController] Language changed to:",e);const n=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(e){localStorage.setItem(y.FF_SSE_LS_WHITELABEL,e),m.setContext({whitelabel:e}),y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return m.getContext().lang}static getAvailableLanguages(){return m.getAvailableLanguages()}static getContext(){return m.getContext()}static destroy(){this.#o&&(this.#o.disconnect(),this.#o=null),this.#e=!1,this.#t=null,y.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{F.initialize()}):F.initialize());class Ne{static engine=null;static webllm=null;static isInitialized=!1;static currentModel=null;static isGenerating=!1;static isModelCached=!1;static DEFAULT_MODEL="Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC";static messages=[{role:"system",content:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful."}];static async initialize(){if(this.isInitialized)return console.log("[LLMController] Already initialized"),!0;console.log("[LLMController] Initializing WebLLM module...");try{if(!navigator.gpu)throw new Error("WebGPU is not available. Please use a supported browser (Chrome 113+, Edge 113+).");if(console.log("[LLMController] WebGPU detected"),this.webllm=await I(()=>import("https://esm.run/@mlc-ai/web-llm"),[]),console.log("[LLMController] WebLLM module loaded"),!this.webllm||!this.webllm.MLCEngine)throw new Error("MLCEngine not found in WebLLM module");return this.engine=new this.webllm.MLCEngine,console.log("[LLMController] MLCEngine created"),this.engine.setInitProgressCallback(e=>{this.handleInitProgress(e)}),this.isModelCached=await this.checkModelCache(),this.isInitialized=!0,console.log("[LLMController] Engine initialized, attempting auto-load..."),await this.autoLoadCachedModel(),console.log("[LLMController] Initialization complete"),!0}catch(e){return console.error("[LLMController] Initialization failed:",e),i.publish(l.LLM_ERROR,{error:e.message,phase:"initialization"}),!1}}static async checkModelCache(){console.log(`[LLMController] Checking cache for model: ${this.DEFAULT_MODEL}`);try{const t=(await caches.keys()).find(c=>c.includes("webllm/model"));if(!t)return console.log("[LLMController] No WebLLM model cache found"),!1;const s=(await(await caches.open(t)).keys()).filter(c=>c.url.includes(this.DEFAULT_MODEL)||c.url.includes("Hermes-2-Pro-Llama-3-8B")),r=s.length>0;return console.log(`[LLMController] Model cached: ${r} (${s.length} files)`),r}catch(e){return console.warn("[LLMController] Cache check failed:",e.message),!1}}static async autoLoadCachedModel(){try{this.isModelCached?console.log(`[LLMController] Loading cached model: ${this.DEFAULT_MODEL}`):console.log(`[LLMController] No cached model found - starting download: ${this.DEFAULT_MODEL}`),await this.loadModel(),console.log("[LLMController] Model ready")}catch(e){console.error("[LLMController] Auto-load failed:",e)}}static async loadModel(){if(!this.isInitialized)return console.error("[LLMController] Cannot load model: not initialized"),i.publish(l.LLM_ERROR,{error:"LLMController not initialized",modelId:this.DEFAULT_MODEL}),!1;const e=this.isModelCached;console.log(`[LLMController] Loading model: ${this.DEFAULT_MODEL} (cached: ${e})`);try{const t={temperature:.7,top_p:.95};return await this.engine.reload(this.DEFAULT_MODEL,t),this.currentModel=this.DEFAULT_MODEL,this.isModelCached=!0,console.log(`[LLMController] Model loaded successfully: ${this.DEFAULT_MODEL}`),i.publish(l.LLM_COMPLETE,{modelId:this.DEFAULT_MODEL,cached:e}),!0}catch(t){return console.error("[LLMController] Failed to load model:",t),i.publish(l.LLM_ERROR,{error:t.message,modelId:this.DEFAULT_MODEL,phase:"download"}),!1}}static handleInitProgress(e){const t=(e.progress*100).toFixed(1);let n=e.text;(t>0||!e.text.includes("Loading model from cache"))&&(n=`${t}% - ${e.text}`),console.log(`[LLMController] Progress: ${n}`),i.publish(l.LLM_STATUS,{progress:e.progress,progressPercent:parseFloat(t),text:n,modelId:this.currentModel||this.DEFAULT_MODEL})}static async chat(e){if(!this.currentModel){console.error("[LLMController] No model loaded - still downloading or initialization failed"),i.publish(l.LLM_ERROR,{error:"AI model is still loading. Please wait a moment and try again.",phase:"chat"});return}if(this.isGenerating){console.warn("[LLMController] Already generating response");return}console.log(`[LLMController] Processing chat message: "${e}"`);const t={role:"user",content:e};this.messages.push(t),this.isGenerating=!0;let n="";try{const o=await this.engine.chat.completions.create({stream:!0,messages:this.messages,stream_options:{include_usage:!0}});for await(const s of o){const r=s.choices[0]?.delta?.content;r&&(n+=r,i.publish(l.LLM_RESPONSE,{content:r,fullContent:n,done:!1})),s.usage&&console.log("[LLMController] Usage stats:",s.usage)}this.messages.push({role:"assistant",content:n}),i.publish(l.LLM_RESPONSE,{content:"",fullContent:n,done:!0}),console.log(`[LLMController] Response complete (${n.length} chars)`)}catch(o){console.error("[LLMController] Chat error:",o),i.publish(l.LLM_ERROR,{error:o.message,phase:"chat"})}finally{this.isGenerating=!1}}static cancelGeneration(){if(!this.isGenerating||!this.engine){console.warn("[LLMController] Nothing to cancel");return}console.log("[LLMController] Cancelling generation...");try{this.engine.interruptGenerate(),this.isGenerating=!1,console.log("[LLMController] Generation cancelled")}catch(e){console.error("[LLMController] Cancel failed:",e)}}static getStatus(){return{modelId:this.DEFAULT_MODEL,isLoaded:!!this.currentModel,isCached:this.isModelCached,isGenerating:this.isGenerating,messageCount:this.messages.length}}static resetConversation(){this.messages=[{role:"system",content:"You are a helpful AI assistant running locally in the browser using WebLLM. Be concise and helpful."}],console.log("[LLMController] Conversation reset")}}class _e{static _initialized=!1;static _debug=!1;static init(e={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=e.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const t=n=>{this._handleSSEMessage(n)};return window.mvvSSEther.onmessage(t),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(e){try{this._debug&&console.log("[MachVive] SSE message received:",e);const t=e?.data;if(!t){this._debug&&console.log("[MachVive] No data in message, skipping");return}const n=t.data||t.package||t;if(!n){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=n.cfg;const s=n.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",s)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(c){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:c.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const r=o?.topic;if(!r){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",r),!this._isValidTopic(r)){console.warn(`[MachVive] Topic '${r}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(r,s,e,t)}catch(t){console.error("[MachVive] Error handling SSE message:",t)}}static _isValidTopic(e){return!l||!l.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,t,n,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const s=window.PubSub||PubSub,r={message:t,metadata:{source:"sse",sseEventId:n.id,timestamp:n.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${e}':`,r);const c=l[e];console.log(`[MachVive] AppBroadcast.${e} = '${c}'`),s.publish(c,r),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(s){console.error(`[MachVive] Error publishing to topic '${e}':`,s)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=_e);typeof window<"u"&&(window.MachVive=_e);const Re="m5t_sidenav_collapsed",Gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class Ht extends HTMLElement{static get observedAttributes(){return["data-active-token","data-collapsed"]}constructor(){super(),this.attachShadow({mode:"open"}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=e=>{if(this.getAttribute("data-open")==="true"){if(e.key==="Escape"){e.preventDefault(),this.closeDrawer();return}if(e.key==="Tab"){const t=this.#g();if(t.length<2)return;const n=t[0],o=t[t.length-1],s=this.shadowRoot.activeElement;e.shiftKey&&s===n?(e.preventDefault(),o.focus()):!e.shiftKey&&s===o&&(e.preventDefault(),n.focus())}}};#o=()=>{this.closeDrawer(),this.#c()};connectedCallback(){if(!this.hasAttribute("data-collapsed"))try{localStorage.getItem(Re)==="true"&&this.setAttribute("data-collapsed","true")}catch{}this.activeToken=this.getAttribute("data-active-token")||null,this.render(),this.#l(),this.addEventListener("keydown",this.#t),this.#e=window.matchMedia("(max-width: 768px)"),this.#e.addEventListener("change",this.#o),this.#c()}disconnectedCallback(){this.removeEventListener("keydown",this.#t),this.#e?.removeEventListener("change",this.#o)}attributeChangedCallback(e,t,n){t===n||!this.shadowRoot||(e==="data-active-token"?(this.activeToken=n,this.#d()):e==="data-collapsed"&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:e,orgs:t,activeOrg:n,footerBadge:o,loading:s}={}){e!==void 0&&(this.items=Array.isArray(e)?e:this.#n(e)||[]),t!==void 0&&(this.orgs=Array.isArray(t)?t:this.#n(t)||[]),n!==void 0&&(this.activeOrgGuid=n||null),o!==void 0&&(this.footerBadge=o||null),s!==void 0&&(this.loading=!!s),this.shadowRoot&&(this.render(),this.#l())}setButtons(e){this.setState({buttons:e})}setOrgs(e){this.setState({orgs:e})}setActiveOrgGuid(e){this.setState({activeOrg:e})}setFooterBadge(e){this.setState({footerBadge:e})}setActiveToken(e){this.activeToken=e||null,this.#d()}toggleCollapsed(e){const t=typeof e=="boolean"?e:this.getAttribute("data-collapsed")!=="true";this.setAttribute("data-collapsed",String(t));try{localStorage.setItem(Re,String(t))}catch{}this.dispatchEvent(new CustomEvent("nav-collapse",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.COLLAPSE",collapsed:t,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute("data-open","true"),this.shadowRoot.querySelector(".hamburger")?.setAttribute("aria-expanded","true"),this.#c(),(this.#g()[0]||this.shadowRoot.querySelector(".sidenav"))?.focus?.()}closeDrawer(){if(this.getAttribute("data-open")!=="true")return;this.removeAttribute("data-open");const e=this.shadowRoot.querySelector(".hamburger");e?.setAttribute("aria-expanded","false"),this.#c(),e&&this.#e?.matches?e.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute("data-open")==="true"?this.closeDrawer():this.openDrawer()}#n(e){try{return e?JSON.parse(e):null}catch(t){return console.error("[M5TSideNav] bad JSON:",t),null}}#a(e){return String(e??"").replace(/[&<>"']/g,t=>Gt[t])}#s(e){return e?`<span class="ms" aria-hidden="true">${this.#a(e)}</span>`:""}#i(e){if(!e||!e.token)return"";const t=e.token===this.activeToken,n=e.route||"#",o=n.startsWith("#")?n:`#${n}`,s=typeof e.count=="number"&&e.count>0?`<span class="badge">${e.count}</span>`:"";return`
      <a class="nav-item${t?" active":""}" href="${this.#a(o)}"
         data-token="${this.#a(e.token)}" data-route="${this.#a(n)}"
         ${t?'aria-current="page"':""}
         ${e.tagline?`title="${this.#a(e.tagline)}"`:""}>
        ${this.#s(e.icon)}
        <span class="label">${this.#a(e.caption||e.token)}</span>
        ${s}
      </a>`}#u(){return this.loading?Array.from({length:6}).map(()=>'<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>').join(""):this.items.map(e=>e&&e.group&&Array.isArray(e.items)?`
          <div class="nav-group">
            <div class="group-label">${this.#a(e.caption||"")}</div>
            ${e.items.map(t=>this.#i(t)).join("")}
          </div>`:this.#i(e)).join("")}#r(){const e=this.footerBadge,t=Array.isArray(this.orgs)&&this.orgs.length>1?`
      <label class="org-switcher" title="Active organization">
        ${this.#s("corporate_fare")}
        <select class="org-select" aria-label="Active organization">
          ${this.orgs.map(o=>`<option value="${this.#a(o.guid)}" ${o.guid===this.activeOrgGuid?"selected":""}>${this.#a(o.name||o.guid)}</option>`).join("")}
        </select>
      </label>`:"",n=e?`<span class="footer-badge">${this.#s(e.icon||"verified")}<span>${this.#a(e.caption||"")}</span></span>`:"";return`
      ${t}
      ${n}
      <div class="footer-actions">
        <button class="footer-action" type="button" data-action="account" aria-label="Account" title="Account">${this.#s("account_circle")}<span>Account</span></button>
        <button class="footer-action" type="button" data-action="lang" aria-label="Language" title="Language">${this.#s("language")}<span>Language</span></button>
        <button class="footer-action" type="button" data-action="signout" aria-label="Sign out" title="Sign out">${this.#s("logout")}<span>Sign out</span></button>
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

        .nav { flex: 1 1 auto; overflow-y: auto; padding: 16px 0; }
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
        :host([data-collapsed="true"]) .footer-action span,
        :host([data-collapsed="true"]) .footer-badge span:not(.ms) { display: none; }
        :host([data-collapsed="true"]) .nav-item { justify-content: center; gap: 0; padding-left: 0; padding-right: 0; }
        :host([data-collapsed="true"]) .header { justify-content: center; padding: 18px 0; }
        :host([data-collapsed="true"]) .collapse-btn { margin-left: 0; }
        :host([data-collapsed="true"]) .footer { padding: 12px 0; align-items: center; }
        :host([data-collapsed="true"]) .footer-badge { padding: 8px; align-self: center; }
        :host([data-collapsed="true"]) .footer-actions { flex-direction: column; gap: 2px; width: 100%; }

        /* Hamburger + scrim: desktop hidden; shown on mobile (off-canvas drawer) */
        .hamburger, .scrim { display: none; }

        @media (max-width: 768px) {
          .sidenav { transform: translateX(-100%); width: var(--sidenav-width); box-shadow: 4px 0 24px rgba(0,0,0,0.4); }
          :host([data-open="true"]) .sidenav { transform: translateX(0); }
          :host([data-collapsed="true"]) .sidenav { width: var(--sidenav-width); }
          .collapse-btn { display: none; } /* collapse is a desktop-only affordance */

          .hamburger {
            display: grid; place-items: center;
            position: fixed; top: 12px; left: 12px; z-index: 95;
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
          ${this.#r()}
        </div>
      </aside>
    `}#l(){this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",t=>{t.metaKey||t.ctrlKey||t.shiftKey||t.button===1||(t.preventDefault(),this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.TAP",token:e.getAttribute("data-token"),route:e.getAttribute("data-route"),caption:e.querySelector(".label")?.textContent||"",timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(".collapse-btn")?.addEventListener("click",()=>this.toggleCollapsed()),this.shadowRoot.querySelector(".hamburger")?.addEventListener("click",()=>this.toggleDrawer()),this.shadowRoot.querySelector(".scrim")?.addEventListener("click",()=>this.closeDrawer()),this.#c(),this.shadowRoot.querySelector(".logo")?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.LOGO_TAP",timestamp:Date.now()}}))}),this.shadowRoot.querySelector(".org-select")?.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("org-switch",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.ORG_SWITCH",orgGuid:e.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(".footer-action").forEach(e=>{e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("footer-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.FOOTER_ACTION",action:e.getAttribute("data-action"),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute("data-open")==="true"&&this.#g()[0]?.focus()}#d(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{const t=e.getAttribute("data-token")===this.activeToken;e.classList.toggle("active",t),t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}#g(){return Array.from(this.shadowRoot.querySelectorAll(".sidenav a[href], .sidenav button:not([disabled]), .sidenav select")).filter(e=>e.offsetParent!==null)}#c(){const e=this.shadowRoot?.querySelector(".sidenav");if(!e)return;const t=this.#e?this.#e.matches:window.matchMedia("(max-width: 768px)").matches;e.inert=t&&this.getAttribute("data-open")!=="true"}}customElements.define("m5t-side-nav",Ht);class q{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static#o={"client-saas":[{token:"DASHBOARD",caption:"Dashboard",icon:"dashboard",route:"/home",capability:"view_dashboard",enabled:!0,tagline:"Overview of your activity"},{token:"MAGNETS",caption:"Your Magnets",icon:"widgets",route:"/magnets",capability:"view_magnets",enabled:!0,tagline:"Manage your conversational magnets"},{token:"TEMPLATES",caption:"Templates",icon:"content_copy",route:"/templates",capabilityAny:["provision_magnets","manage_magnets"],enabled:!0,tagline:"Start from a magnet template"},{token:"CONVERSATIONS",caption:"Conversations",icon:"forum",route:"/conversations",capability:"view_conversations",enabled:!0,tagline:"Captured lead conversations"},{token:"AB_TESTING",caption:"A/B Testing",icon:"science",route:"/ab-testing",capability:"manage_magnets",enabled:!0,tagline:"Experiment and optimize"},{token:"ANALYTICS",caption:"Analytics",icon:"monitoring",route:"/analytics",capability:"view_stats",enabled:!0,tagline:"Performance and ad metrics"},{token:"AD_ACCOUNTS",caption:"Ad Accounts",icon:"ads_click",route:"/ad-accounts",capability:"connect_ad_accounts",enabled:!0,tagline:"Connect advertising accounts"},{token:"CLIENTS",caption:"Clients",icon:"groups",route:"/clients",capability:"create_client_accounts",enabled:!0,tagline:"Manage your client accounts"},{token:"TEAM",caption:"Team",icon:"group",route:"/team",capability:"manage_team",enabled:!0,tagline:"Invite and manage teammates"},{token:"BILLING",caption:"Billing",icon:"receipt_long",route:"/billing",capability:"view_billing",enabled:!0,tagline:"Plan, usage, and invoices"},{token:"SETTINGS",caption:"Settings",icon:"settings",route:"/settings",capability:null,enabled:!0,tagline:"Account and workspace settings"}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#n(e){if(!e)return e;const t=e.token.toLowerCase(),n=`nav_${t}`,o=`nav_${t}_tagline`,s=m.get(n)||e.caption,r=m.get(o)||e.tagline;return{...e,caption:s,tagline:r,secondary:e.secondary?e.secondary.map(c=>this.#n(c)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(t=>this.#n(t)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),t=[];return e.forEach(n=>{t.push(n),n.secondary&&n.secondary.length>0&&t.push(...n.secondary)}),t}static getNavByToken(e){return this.getFlattenedNav().find(n=>n.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(t=>t.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(t=>t.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#a(e){if(!e||!e.token)return e;const t=e.token.toLowerCase();return{...e,caption:m.get(`nav_${t}`)||e.caption,tagline:m.get(`nav_${t}_tagline`)||e.tagline}}static getSideNav(e=[],{uiMode:t=null}={}){const n=this.#o[this.#e]?this.#e:"client-saas",o=this.#o[n]||[],s=Array.isArray(e)?e:[],r=u=>u.capability==null&&!u.capabilityAny?!0:!(u.capability&&!s.includes(u.capability)||u.capabilityAny&&!u.capabilityAny.some(h=>s.includes(h))),c=[];for(const u of o)if(u.group&&Array.isArray(u.items)){if(!r(u))continue;const h=u.items.filter(r).map(E=>this.#a(E));h.length&&c.push({...this.#a(u),items:h})}else r(u)&&c.push(this.#a(u));return c}static getSideNavJSON(e=[],t={}){return JSON.stringify(this.getSideNav(e,t))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const t=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,n=await fetch(`${e}/coreMeta?meta_token=${t}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();const o=await n.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${t}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(t){return console.error("[NavMetaManager] Error fetching from coreMeta:",t),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:q});window.m5t=Object.create(null);window.m5t.pubsub=i;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(a){console.log("mvvLegit (direct): ReferenceError -",a.message)}const Bt=Object.keys(window).filter(a=>a.toLowerCase().includes("mvv")||a.toLowerCase().includes("neodigm")||a.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",Bt);const N=new Nt("/",{hash:!0});window.router=N;function oe(a){const e=a?`${a.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${a} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),i.publish(l.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function H(a){console.log("[Router] Navigating to:",a),N.navigate(`/${a}`)}const Vt=new Set(["splash","signin","signup","forgot","resethash","verf-link","signout"]);let $={},Z=null;const $t={admin:{caption:"Platform Admin",icon:"shield_person"},reseller:{caption:"Reseller",icon:"handshake"},managed:{caption:"Managed",icon:"visibility"},self_serve:{caption:"Self-Serve",icon:"rocket_launch"}};function de(){const a=document.getElementById("m5t-side-nav");if(!a)return;const e=!L.getScope()&&L.isAuthenticated(),t=L.getCapabilities(),n=L.getUiMode(),o=q.getSideNav(t,{uiMode:n});$={};const s=u=>u.forEach(h=>{h.group&&Array.isArray(h.items)?s(h.items):h.route&&($[h.route]=h.token)});s(o);const r=L.getMemberships(),c=L.getActiveOrg();if(a.setState({buttons:o,orgs:r.map(u=>({guid:u.orgGuid,name:u.name||u.channel,channel:u.channel})),activeOrg:c?.guid||null,footerBadge:$t[n]||null,loading:e}),Z){const u=$[`/${Z}`]||$[Z]||null;a.setActiveToken(u)}}function zt(){const a=F.getAvailableLanguages&&F.getAvailableLanguages()||[];if(a.length<2){i.publish(l.UI_TOAST,{message:"Only one language is available",type:"info"});return}const e=localStorage.getItem(y.FF_SSE_LS_USER_LANG)||y.FF_SSE_I18N_LANG||a[0],t=a[(a.indexOf(e)+1)%a.length];F.setLanguage(t),i.publish(l.UI_TOAST,{message:`Language: ${t}`,type:"info"})}function qt(){const a=document.getElementById("m5t-side-nav");a&&(q.setAppToken("client-saas"),a.addEventListener("nav-select",e=>{const t=e.detail?.route;t&&N.navigate(t.startsWith("/")?t:`/${t}`)}),a.addEventListener("logo-click",()=>N.navigate("/home")),a.addEventListener("nav-collapse",e=>{document.getElementById("app-shell")?.classList.toggle("nav-collapsed",!!e.detail?.collapsed)}),a.addEventListener("org-switch",e=>{const t=e.detail?.orgGuid;t&&L.setActiveOrg(t)}),a.addEventListener("footer-action",e=>{switch(e.detail?.action){case"account":N.navigate("/settings");break;case"signout":N.navigate("/signout");break;case"lang":zt();break}}),document.addEventListener("language-changed",()=>de()),de(),i.subscribe(l.AUTH_SCOPE_LOADED,()=>de()))}function jt(a){Z=a;const e=document.getElementById("m5t-side-nav"),t=document.getElementById("app-shell");if(!e||!t)return;const n=!Vt.has(a);if(e.hidden=!n,t.classList.toggle("has-side-nav",n),n){const o=$[`/${a}`]||$[a]||null;e.setActiveToken(o)}}i.subscribe(l.ROUTE_NAV_AFTER,(a,e)=>{e?.route&&jt(e.route)});N.on("/",()=>{console.log("[Router] Route: /"),i.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),I(()=>Promise.resolve().then(()=>qe),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(a=>{console.error("[Router] Error loading splash route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:a})})});N.on("/splash",()=>{console.log("[Router] Route: /splash"),i.publish(l.ROUTE_NAV_BEFORE,{route:"splash"}),I(()=>Promise.resolve().then(()=>qe),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"splash"})}).catch(a=>{console.error("[Router] Error loading splash route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"splash",error:a})})});N.on("/signin",()=>{console.log("[Router] Route: /signin"),i.publish(l.ROUTE_NAV_BEFORE,{route:"signin"}),I(()=>Promise.resolve().then(()=>sn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"signin"})}).catch(a=>{console.error("[Router] Error loading signin route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"signin",error:a})})});N.on("/signup",()=>{console.log("[Router] Route: /signup"),i.publish(l.ROUTE_NAV_BEFORE,{route:"signup"}),I(()=>Promise.resolve().then(()=>gn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"signup"})}).catch(a=>{console.error("[Router] Error loading signup route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"signup",error:a})})});N.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),i.publish(l.ROUTE_NAV_BEFORE,{route:"verf-link"}),I(()=>Promise.resolve().then(()=>mn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(a=>{console.error("[Router] Error loading verf-link route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"verf-link",error:a})})});N.on("/forgot",()=>{console.log("[Router] Route: /forgot"),i.publish(l.ROUTE_NAV_BEFORE,{route:"forgot"}),I(()=>Promise.resolve().then(()=>An),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(a=>{console.error("[Router] Error loading forgot route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"forgot",error:a})})});N.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!oe("resethash")){H("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:"resethash"}),I(()=>Promise.resolve().then(()=>Cn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(a=>{console.error("[Router] Error loading resethash route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"resethash",error:a})})});N.on("/home",()=>{if(console.log("[Router] Route: /home"),!oe("home")){H("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:"home"}),I(()=>Promise.resolve().then(()=>Gn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"home"})}).catch(a=>{console.error("[Router] Error loading home route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"home",error:a})})});N.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!oe("signout")){H("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:"signout"}),I(()=>Promise.resolve().then(()=>Vn),void 0).then(a=>{const e=document.getElementById("app");e.innerHTML=a.render(),a.init&&a.init(),i.publish(l.ROUTE_NAV_AFTER,{route:"signout"})}).catch(a=>{console.error("[Router] Error loading signout route:",a),i.publish(l.ROUTE_NAV_ERROR,{route:"signout",error:a})})});const Yt=[{path:"/magnets",name:"magnets",title:"Your Magnets",icon:"widgets"},{path:"/templates",name:"templates",title:"Templates",icon:"content_copy"},{path:"/conversations",name:"conversations",title:"Conversations",icon:"forum"},{path:"/ab-testing",name:"ab-testing",title:"A/B Testing",icon:"science"},{path:"/analytics",name:"analytics",title:"Analytics",icon:"monitoring"},{path:"/ad-accounts",name:"ad-accounts",title:"Ad Accounts",icon:"ads_click"},{path:"/clients",name:"clients",title:"Clients",icon:"groups"},{path:"/team",name:"team",title:"Team",icon:"group"},{path:"/billing",name:"billing",title:"Billing",icon:"receipt_long"},{path:"/settings",name:"settings",title:"Settings",icon:"settings"}];Yt.forEach(({path:a,name:e,title:t,icon:n})=>{N.on(a,()=>{if(console.log(`[Router] Route: ${a}`),!oe("home")){H("signin");return}i.publish(l.ROUTE_NAV_BEFORE,{route:e}),I(()=>Promise.resolve().then(()=>qn),void 0).then(o=>{const s=document.getElementById("app");s.innerHTML=o.render({title:t,icon:n,name:e}),o.init&&o.init({name:e}),i.publish(l.ROUTE_NAV_AFTER,{route:e})}).catch(o=>{console.error(`[Router] Error loading section route (${e}):`,o),i.publish(l.ROUTE_NAV_ERROR,{route:e,error:o})})})});N.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),H("splash")});i.subscribe(l.ROUTE_NAV,(a,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&H(e.route)});function Ie(){console.log("[App] Waiting for Neodigm 55 library...");let a=0;const e=100,t=setInterval(()=>{a++,a%10===0&&console.log(`[App] Still waiting... attempt ${a}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${a*100}ms`),clearInterval(t),Wt()):a>=e&&(clearInterval(t),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,i.publish(l.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ie):Ie();async function Wt(){if(console.log("[App] Neodigm 55 loaded, initializing..."),Dt(),F.initialize(),console.log("[App] I18n Controller initialized"),Ne.initialize().then(t=>{t?console.log("[App] LLM Controller initialized successfully"):console.warn("[App] LLM Controller initialization failed (non-critical)")}).catch(t=>{console.error("[App] LLM Controller initialization error:",t)}),!await L.init({BASE_URL:"https://machfivemagnet-saas.onrender.com",navigateFunction:t=>{console.log("[AuthController] Navigation requested:",t),H(t)}})){console.error("[App] AuthController initialization failed");return}const e=L.getEntity();e&&(console.log("[App] Session restored for:",e.email),i.publish(l.APP_USER_LOADED,{entity:e}),L.isAuthenticated()&&L.fetchScope()),i.publish(l.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),qt(),N.resolve(),window.AuthController=L,window.I18nController=F,window.LLMController=Ne,window.MachVive=_e,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, LLMController, MachVive available globally)")}i.subscribe(l.ROUTE_NAV_AFTER,(a,e)=>{typeof F<"u"&&F.refresh&&setTimeout(()=>{F.refresh()},100)});const Kt=Object.freeze({admin_root_role:{value:100,desc:"Administrator superuser infrastructure architecture"},admin_business_role:{value:90,desc:"Administrator financial oversight"},admin_support_role:{value:80,desc:"Administrator maintenance and configuration"},admin_readonly_role:{value:70,desc:"Administrator information help desk"},client_tier_3_role:{value:30,desc:"Client paid tier 3"},client_tier_2_role:{value:20,desc:"Client paid tier 2"},client_tier_1_role:{value:10,desc:"Client paid tier 1"},client_standard_role:{value:0,desc:"Client free tier 0"}});function ke(a){return Kt[a]||null}class Jt{static MIN_ROLE_VALUE=50;static COMMANDS={help:"Show available commands",clear:"Clear chat canvas",debug:"Toggle debug mode (::debug on|off)",version:"Show application version",feature:"Feature flag operations (::feature list|get|set)",model:"LLM model operations (::model status|download|clear)",reload:"Reload the page",export:"Export chat history as JSON",theme:"Toggle theme (::theme dark|light)",auth:"Show authentication status"};static hasAccess(e){if(!e||!e.class)return!1;let t=0;if(typeof e.class=="string"){const n=ke(e.class);t=n?n.value:0}else typeof e.class=="object"&&e.class.value!==void 0&&(t=e.class.value);return console.log(`[CLIController] Role check: ${e.class} → value: ${t}`),t>=this.MIN_ROLE_VALUE}static async process(e,t){if(!this.hasAccess(t))return{error:!0,message:`⛔ **Access Denied**

CLI commands require admin privileges (role ≥ 50).`};const n=e.slice(2).trim(),[o,...s]=n.split(/\s+/);switch(console.log("[CLIController] Processing command:",o,"Args:",s),o.toLowerCase()){case"help":return this.cmdHelp();case"clear":return this.cmdClear();case"debug":return this.cmdDebug(s);case"version":return this.cmdVersion();case"feature":return this.cmdFeature(s);case"model":return this.cmdModel(s);case"reload":return this.cmdReload();case"export":return this.cmdExport();case"theme":return this.cmdTheme(s);case"auth":return this.cmdAuth(t);default:return{error:!0,message:`❌ **Unknown command:** \`${o}\`

Type \`::help\` for available commands.`}}}static cmdHelp(){let e=`📖 **CLI Commands**

`;e+="Available commands (prefix with `::`)\n\n";for(const[t,n]of Object.entries(this.COMMANDS))e+=`• \`::${t}\` - ${n}
`;return e+=`
**Examples:**
`,e+="• `::debug on` - Enable debug logging\n",e+="• `::feature list` - Show all feature flags\n",e+="• `::model status` - Check LLM model status\n",{message:e}}static cmdClear(){const e=document.getElementById("chat-messages");return e?(e.innerHTML="",{message:"✅ Chat canvas cleared"}):{error:!0,message:"❌ Failed to clear canvas"}}static cmdDebug(e){const t=e[0]?.toLowerCase();if(!t||!["on","off"].includes(t))return{message:`🐛 **Debug Mode**

Current state: \`${localStorage.getItem("debug_mode")==="true"?"ON":"OFF"}\`

Usage: \`::debug on|off\``};const n=t==="on";return localStorage.setItem("debug_mode",n),{message:`🐛 Debug mode ${n?"**enabled**":"**disabled**"}`}}static cmdVersion(){return{message:`ℹ️ **StreamSyncEngage SaaS Client**

Version: 1.0.0
Build: production
Node Env: production`}}static cmdFeature(e){const t=e[0]?.toLowerCase();if(!t)return{message:"🚩 **Feature Flags**\n\nUsage:\n• `::feature list` - List all flags\n• `::feature get <name>` - Get flag value\n• `::feature set <name> <value>` - Set flag value"};switch(t){case"list":{let n=`🚩 **Feature Flags**

`;const o=Object.entries(y).slice(0,20);for(const[s,r]of o)n+=`• \`${s}\`: \`${r}\`
`;return n+=`
*Showing 20 of ${Object.keys(y).length} flags*`,{message:n}}case"get":{const n=e[1];if(!n)return{error:!0,message:"❌ Flag name required: `::feature get <name>`"};const o=y[n];return o===void 0?{error:!0,message:`❌ Flag not found: \`${n}\``}:{message:`🚩 \`${n}\` = \`${o}\``}}case"set":return{message:`⚠️ **Feature flag modification**

Setting flags dynamically is not yet implemented.
Flags are loaded from \`featureFlags.js\`.`};default:return{error:!0,message:`❌ Unknown action: \`${t}\``}}}static cmdModel(e){const t=e[0]?.toLowerCase();if(!t)return{message:"🤖 **LLM Model Operations**\n\nUsage:\n• `::model status` - Show model status\n• `::model download` - Download model\n• `::model clear` - Clear model cache"};switch(t){case"status":{if(!window.LLMController)return{error:!0,message:"❌ LLMController not available"};const n=window.LLMController.getStatus();let o=`🤖 **LLM Model Status**

`;return o+=`• Model: \`${n.modelId}\`
`,o+=`• Loaded: \`${n.isLoaded?"YES":"NO"}\`
`,o+=`• Cached: \`${n.isCached?"YES":"NO"}\`
`,o+=`• Generating: \`${n.isGenerating?"YES":"NO"}\`
`,o+=`• Message Count: \`${n.messageCount}\`
`,{message:o}}case"download":return window.LLMController?(window.LLMController.loadModel(),{message:"⏳ Starting model download..."}):{error:!0,message:"❌ LLMController not available"};case"clear":return{message:`⚠️ **Clear Model Cache**

Clearing browser cache requires manual action:
1. Open DevTools (F12)
2. Application → Storage → Cache Storage
3. Delete \`webllm/model\``};default:return{error:!0,message:`❌ Unknown action: \`${t}\``}}}static cmdReload(){return setTimeout(()=>{window.location.reload()},500),{message:"🔄 Reloading page..."}}static cmdExport(){const e=document.getElementById("chat-messages");if(!e)return{error:!0,message:"❌ Chat canvas not found"};const n=Array.from(e.children).map(u=>({type:u.tagName.toLowerCase().includes("prompt")?"user":"assistant",message:u.getAttribute("message"),timestamp:u.getAttribute("timestamp")})),o=JSON.stringify(n,null,2),s=new Blob([o],{type:"application/json"}),r=URL.createObjectURL(s),c=document.createElement("a");return c.href=r,c.download=`chat-export-${Date.now()}.json`,c.click(),URL.revokeObjectURL(r),{message:`✅ Exported ${n.length} messages`}}static cmdTheme(e){const t=e[0]?.toLowerCase();return!t||!["dark","light"].includes(t)?{message:"🎨 **Theme Toggle**\n\nUsage: `::theme dark|light`"}:(localStorage.setItem("theme",t),{message:`🎨 Theme set to **${t}**

⚠️ Theme switching not yet implemented in UI.`})}static cmdAuth(e){if(!e)return{error:!0,message:"❌ Not authenticated"};let t="Unknown",n=0;if(typeof e.class=="string"){const s=ke(e.class);s&&(t=s.desc,n=s.value)}else typeof e.class=="object"&&(t=e.class.desc||"Unknown",n=e.class.value||0);let o=`🔐 **Authentication Status**

`;return o+=`• Email: \`${e.email}\`
`,o+=`• Name: \`${e.first} ${e.last}\`
`,o+=`• Role: \`${e.class}\`
`,o+=`• Role Description: \`${t}\`
`,o+=`• Role Value: \`${n}\`
`,o+=`• Company: \`${e.company||"N/A"}\`
`,o+=`• Status: \`${e.status||"Unknown"}\`
`,{message:o}}}const Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Jt},Symbol.toStringTag,{value:"Module"}));function Xt(){return`
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
  `}function Zt(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const a=localStorage.getItem(y.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!a,hasMvvTs:!!e});const t=document.getElementById("splash-loader"),n=document.getElementById("splash-actions");a?(console.log("[SplashRoute] Auth token found → HOME"),i.publish(l.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),i.publish(l.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),t&&(t.style.display="none"),n&&(n.style.display="flex"),document.querySelectorAll("[data-route]").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${r}`),i.publish(l.ROUTE_NAV,{route:r})})}))},4e3)}const qe=Object.freeze(Object.defineProperty({__proto__:null,init:Zt,render:Xt},Symbol.toStringTag,{value:"Module"}));function fe(a){return a=String(a),Math.abs(a.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0))}function en(){return`
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
  `}function tn(){console.log("[SigninRoute] Initialized");const a=document.getElementById("loginForm"),e=document.getElementById("email"),t=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const s=t.type==="password"?"text":"password";t.type=s}),a?.addEventListener("submit",async s=>{s.preventDefault();const r=e.value.trim(),c=t.value;nn(r,e)&&an(c,t)&&await on(r,c)}),document.getElementById("link--uc__underline")?.addEventListener("click",s=>{s.preventDefault(),i.publish(l.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",s=>{s.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),i.publish(l.ROUTE_NAV,{route:"signup"})})}function nn(a,e){if(!a)return ae(e,m.get("validation_email_required")),!1;const t=(a.match(/@/g)||[]).length,n=(a.match(/\./g)||[]).length;return t!==1||n<1?(ae(e,m.get("validation_email_invalid")),!1):!0}function an(a,e){return a?a.length<10?(ae(e,m.get("validation_password_min_length")),!1):!0:(ae(e,m.get("validation_password_required")),!1)}function ae(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}async function on(a,e){const t=document.querySelector(".btn");t.disabled=!0,t.textContent=m.get("loading_signing_in");try{const n=fe(e),o=await L.doSignin(a,n);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(m.get("success_welcome_back"),"success"),i.publish(l.AUTH_SIGNIN_SUCCESS,{entity:L.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(m.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||m.get("error_signin_failed"),"danger"),t.disabled=!1,t.textContent=m.get("sign_in").toUpperCase())}catch(n){console.error("[SigninRoute] Sign in error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||m.get("error_network"),"danger"),t.disabled=!1,t.textContent=m.get("sign_in").toUpperCase(),i.publish(l.AUTH_SIGNIN_FAIL,{message:n.message})}}const sn=Object.freeze(Object.defineProperty({__proto__:null,init:tn,render:en},Symbol.toStringTag,{value:"Module"}));function je(a){const e=[];return a.length<10&&e.push("at least 10 characters"),/[a-z]/.test(a)||e.push("1 lowercase"),/[A-Z]/.test(a)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(a)||e.push("1 special character"),/[^\x00-\x7F]/.test(a)&&e.push("ASCII characters only"),e}function Ye(a){return a.length===0?"":a.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":a.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function rn(){return`
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
  `}function ln(){console.log("[SignupRoute] Initialized");const a=document.getElementById("signupForm"),e=a.querySelector('button[type="submit"]');Me("togglePassword","password","eyeIcon"),Me("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",n=>{n.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),i.publish(l.ROUTE_NAV,{route:"signin"})}),a.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("first").value.trim(),s=document.getElementById("last").value.trim(),r=document.getElementById("email").value.trim(),c=document.getElementById("company").value.trim(),u=document.getElementById("phone").value.trim(),h=document.getElementById("password").value,E=document.getElementById("confirmPassword").value,O=document.getElementById("first"),w=document.getElementById("last"),k=document.getElementById("email"),D=document.getElementById("password"),g=document.getElementById("confirmPassword");if(Pe(o,O,m.get("validation_first_name_required"))&&Pe(s,w,m.get("validation_last_name_required"))&&cn(r,k)&&dn(h,D)){if(h!==E){z(g,m.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=m.get("loading_creating_account"),await un(o,s,r,c,u,h)}})}function Me(a,e,t){const n=document.getElementById(a),o=document.getElementById(e),s=document.getElementById(t);!n||!o||!s||n.addEventListener("click",()=>{const r=o.type==="password";o.type=r?"text":"password",r?s.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:s.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Pe(a,e,t){return a?!0:(z(e,t),!1)}function cn(a,e){if(!a)return z(e,m.get("validation_email_required")),!1;const t=(a.match(/@/g)||[]).length,n=(a.match(/\./g)||[]).length;return t!==1||n<1?(z(e,m.get("validation_email_invalid")),!1):!0}function dn(a,e){if(!a)return z(e,m.get("validation_password_required")),!1;const t=je(a);return t.length>0?(z(e,Ye(t)),!1):!0}function z(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}async function un(a,e,t,n,o,s){const r=document.querySelector('button[type="submit"]');try{const c=fe(s),u={email:t,hash:c,first:a,last:e};n&&(u.company=n),o&&(u.phone=o);const h=await L.doSignup(u);if(h.ok)i.publish(l.AUTH_SIGNUP_SUCCESS,{email:t}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const E=h.error||h.message||m.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(E,"danger"),r.disabled=!1,r.textContent=m.get("create_account").toUpperCase(),i.publish(l.AUTH_SIGNUP_FAIL,{message:E})}}catch(c){console.error("[SignupRoute] Sign up error:",c),typeof neodigmToast<"u"&&neodigmToast.q(c.message||m.get("error_network"),"danger"),r.disabled=!1,r.textContent=m.get("create_account").toUpperCase(),i.publish(l.AUTH_SIGNUP_FAIL,{message:c.message})}}const gn=Object.freeze(Object.defineProperty({__proto__:null,init:ln,render:rn},Symbol.toStringTag,{value:"Module"}));function pn(){return`
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
  `}function hn(){console.log("[VerfLinkRoute] Initialized");const a=7200,e=Date.now(),t=document.getElementById("countdown-display");function n(){const s=Date.now()-e,r=Math.floor(s/1e3),c=Math.max(0,a-r),u=Math.floor(c/3600),h=Math.floor(c%3600/60),E=c%60,O=`${String(u).padStart(2,"0")}:${String(h).padStart(2,"0")}:${String(E).padStart(2,"0")}`;t&&(t.textContent=O,c<600&&(t.style.color="#ef4444",t.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),c===0&&(t.style.color="#7f1d1d",t.style.textShadow="none")),c===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}n();const o=setInterval(n,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const mn=Object.freeze(Object.defineProperty({__proto__:null,init:hn,render:pn},Symbol.toStringTag,{value:"Module"})),_n="https://machfivemagnet-saas.onrender.com";class fn{constructor(){this.baseUrl=_n}async request(e,t={}){const n=`${this.baseUrl}${e}`,o={"Content-Type":"application/json",...t.headers};try{const s=await fetch(n,{...t,headers:o});if(s.status===401||s.status===403){i.publish(l.AUTH_TOKEN_EXPIRED,{status:s.status,endpoint:e});const c=await s.json().catch(()=>({}));throw new Error(c.error||"Authentication failed")}const r=await s.json();return{ok:s.ok,status:s.status,data:r}}catch(s){throw console.error("API Request Error:",s),i.publish(l.APP_ERROR,{message:s.message,endpoint:e}),s}}async get(e){return this.request(e,{method:"GET"})}async post(e,t){return this.request(e,{method:"POST",body:JSON.stringify(t)})}async put(e,t){return this.request(e,{method:"PUT",body:JSON.stringify(t)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,t){return this.post("/api/acctEntity/signin",{email:e,hash:t})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,t){return this.post("/api/acctEntity/resethash",{email:e,hash:t})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,t){return this.put(`/api/acctEntity/${e}`,t)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const vn=new fn;function bn(){return`
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

  `}function En(){console.log("[ForgotRoute] Initialized");const a=document.getElementById("forgot-form"),e=document.getElementById("email");a?.addEventListener("submit",async t=>{t.preventDefault();const n=e.value.trim();yn(n,e)&&await Sn(n)})}function yn(a,e){if(!a)return xe(e,m.get("validation_email_required")),!1;const t=(a.match(/@/g)||[]).length,n=(a.match(/\./g)||[]).length;return t!==1||n<1?(xe(e,m.get("validation_email_invalid")),!1):!0}function xe(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}async function Sn(a){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const t=await vn.forgotPassword(a);t.ok&&t.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(m.get("success_reset_link_sent"),"success"),i.publish(l.AUTH_FORGOT_SUCCESS,{email:a}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(t.data.error||m.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=m.get("send_reset_link").toUpperCase())}catch(t){console.error("[ForgotRoute] Forgot password error:",t),typeof neodigmToast<"u"&&neodigmToast.q(t.message||m.get("error_network"),"danger"),e.disabled=!1,e.textContent=m.get("send_reset_link").toUpperCase()}}const An=Object.freeze(Object.defineProperty({__proto__:null,init:En,render:bn},Symbol.toStringTag,{value:"Module"}));function wn(){return`
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
                value="${L.getEntity()?.email||""}"
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
  `}function Tn(){console.log("[ResethashRoute] Initialized");const a=document.getElementById("resethash-form"),e=a.querySelector('button[type="submit"]');Fe("toggleNewPassword","new-password","eyeIconNew"),Fe("toggleConfirmPassword","confirm-password","eyeIconConfirm"),a?.addEventListener("submit",async t=>{t.preventDefault();const n=a.email.value.trim(),o=a.newPassword.value,s=a.confirmPassword.value,r=document.getElementById("new-password"),c=document.getElementById("confirm-password");if(!o){V(r,m.get("validation_new_password_required"));return}const u=je(o);if(u.length>0){V(r,Ye(u));return}if(!s){V(c,m.get("validation_new_password_required"));return}if(o!==s){V(c,m.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=m.get("loading_resetting_password");try{const h=fe(o),E=await L.doResetHash(n,h);E.ok?(typeof neodigmToast<"u"&&neodigmToast.q(m.get("success_password_reset"),"success"),i.publish(l.AUTH_RESETHASH_SUCCESS,{email:n})):(V(r,E.error||m.get("error_signin_failed")),e.disabled=!1,e.textContent=m.get("update_password").toUpperCase())}catch(h){console.error("[ResethashRoute] Reset password error:",h),V(r,h.message||m.get("error_network")),e.disabled=!1,e.textContent=m.get("update_password").toUpperCase()}})}function Fe(a,e,t){const n=document.getElementById(a),o=document.getElementById(e),s=document.getElementById(t);!n||!o||!s||n.addEventListener("click",()=>{const r=o.type==="password";o.type=r?"text":"password",r?s.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:s.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function V(a,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${a.id}`):(a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),300)),a.focus()}const Cn=Object.freeze(Object.defineProperty({__proto__:null,init:Tn,render:wn},Symbol.toStringTag,{value:"Module"}));class On extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const e=q.getPrimaryNav();e&&e.length>0?(this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const t=this.buttons.find(n=>n.selected);this.selectedPrimaryToken=t?t.token:this.buttons[0]?.token||null}catch(t){console.error("[M5TPrimaryNav] Error parsing buttons:",t),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(t=>t.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,t){if(t==="primary"){const n=this.buttons.find(o=>o.token===e);return{caption:n?.caption||"",tagline:n?.tagline||""}}else for(const n of this.buttons)if(n.secondary){const o=n.secondary.find(s=>s.token===e);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const e=this.getSecondaryButtons(),t=e.length>0;this.shadowRoot.innerHTML=`
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

      <div class="nav-wrapper">
        <nav class="nav-container">
          <div class="logo" title="Mach Five Magnet">
            <img class="logo-mark" src="/m5m-mark.svg" alt="Mach Five Magnet" width="28" height="28" />
            <span class="logo-text">Mach Five <b>Magnet</b></span>
          </div>
          ${this.buttons.map((n,o)=>this.renderButton(n,o,"primary")).join("")}
        </nav>
        ${t?`
        <nav class="secondary-nav">
          ${e.map((n,o)=>this.renderButton(n,o,"secondary")).join("")}
        </nav>`:""}
      </div>
    `}renderButton(e,t,n="primary"){const o=n==="primary"?e.token===this.selectedPrimaryToken:!1,s=typeof e.count=="number"&&e.count!==null&&e.count!==void 0,r=e.icon&&e.icon.trim()!=="",c=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${e.token}"
        data-level="${n}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${c?`title="${e.tagline}"`:""}
      >
        ${r?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${s?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(n=>{const o=n.getAttribute("data-token"),s=n.getAttribute("data-level");n.addEventListener("click",r=>{o&&!r.currentTarget.disabled&&!this.longTapFired&&(s==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),n.addEventListener("dblclick",r=>{if(o&&!r.currentTarget.disabled){const c=this.getButtonData(o,s);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:s,caption:c.caption,tagline:c.tagline,timestamp:Date.now()}}))}}),n.addEventListener("mouseenter",r=>{if(o&&!r.currentTarget.disabled){const c=this.getButtonData(o,s);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:s,caption:c.caption,tagline:c.tagline,action:"enter",timestamp:Date.now()}}))}}),n.addEventListener("mouseleave",r=>{if(o&&!r.currentTarget.disabled){const c=this.getButtonData(o,s);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:s,caption:c.caption,tagline:c.tagline,action:"leave",timestamp:Date.now()}}))}}),n.addEventListener("mousedown",r=>{o&&!r.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const c=this.getButtonData(o,s);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:s,caption:c.caption,tagline:c.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),n.addEventListener("mouseup",r=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),n.addEventListener("mouseleave",r=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const t=this.shadowRoot.querySelector(".logo");t&&t.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(e){const t=this.buttons.find(o=>o.token===e),n=this.getButtonData(e,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,level:"primary",caption:n.caption,tagline:n.tagline,hasSecondary:(t?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){const t=this.getButtonData(e,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:t.caption,tagline:t.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,t,n="primary"){let o;n==="primary"?o=this.buttons.find(s=>s.token===e):o=this.getSecondaryButtons().find(r=>r.token===e),o&&(o.count=t,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",On);class Ln extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp"]}attributeChangedCallback(e,t,n){t!==n&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const e=this.getAttribute("timestamp");return e||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}render(){const e=this.getMessage(),t=this.getTimestamp(),n=this.shouldShowTimestamp();this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-self: flex-end;
          max-width: 70%;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bubble-content {
          background: #92a8d1;
          color: #ffffff;
          border-radius: 18px 18px 4px 18px;
          padding: 0.875rem 1.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
          word-wrap: break-word;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .bubble-timestamp {
          font-size: 0.75rem;
          color: #a8a8a8;
          margin-top: 0.25rem;
          padding: 0 0.5rem;
          text-align: right;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          :host {
            max-width: 85%;
          }

          .bubble-content {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
        }
      </style>

      <div class="bubble-content">${this.escapeHtml(e)}</div>
      ${n?`<div class="bubble-timestamp">${this.escapeHtml(t)}</div>`:""}
    `}}customElements.define("m5t-chat-prompt",Ln);let X=null,ue=null;async function Nn(){return X||(ue||(ue=I(()=>import("https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm"),[]).then(a=>{const e=a.default;return X=e({html:!1,breaks:!0,linkify:!0,typographer:!0}),X})),ue)}class Rn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["message","timestamp","show-timestamp","avatar","show-avatar"]}attributeChangedCallback(e,t,n){t!==n&&this.render()}getMessage(){return this.getAttribute("message")||""}getTimestamp(){const e=this.getAttribute("timestamp");return e||new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}shouldShowTimestamp(){return this.getAttribute("show-timestamp")!=="false"}getAvatar(){return this.getAttribute("avatar")||""}shouldShowAvatar(){return this.getAttribute("show-avatar")==="true"&&this.getAvatar()}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}async renderMarkdown(e){return(await Nn()).render(e)}async render(){const e=this.getMessage(),t=this.getTimestamp(),n=this.shouldShowTimestamp(),o=this.getAvatar(),s=this.shouldShowAvatar(),r=await this.renderMarkdown(e);this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-self: flex-start;
          max-width: 70%;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bubble-wrapper {
          display: flex;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #3a3a3a;
        }

        .bubble-content {
          background: #2d2d2d;
          color: #e4e4e4;
          border-radius: 18px 18px 18px 4px;
          border: 1px solid #3a3a3a;
          padding: 0.875rem 1.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
          word-wrap: break-word;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Markdown styling */
        .bubble-content h1,
        .bubble-content h2,
        .bubble-content h3 {
          margin: 0.5em 0 0.25em 0;
          color: #edba08;
        }

        .bubble-content h1 { font-size: 1.4em; }
        .bubble-content h2 { font-size: 1.2em; }
        .bubble-content h3 { font-size: 1.1em; }

        .bubble-content p {
          margin: 0.5em 0;
        }

        .bubble-content p:first-child {
          margin-top: 0;
        }

        .bubble-content p:last-child {
          margin-bottom: 0;
        }

        .bubble-content code {
          background: #1a1a1a;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: #92a8d1;
        }

        .bubble-content pre {
          background: #1a1a1a;
          padding: 1em;
          border-radius: 6px;
          overflow-x: auto;
          margin: 0.5em 0;
        }

        .bubble-content pre code {
          background: none;
          padding: 0;
          color: #e4e4e4;
        }

        .bubble-content ul,
        .bubble-content ol {
          margin: 0.5em 0;
          padding-left: 1.5em;
        }

        .bubble-content li {
          margin: 0.25em 0;
        }

        .bubble-content a {
          color: #92a8d1;
          text-decoration: underline;
        }

        .bubble-content a:hover {
          color: #edba08;
        }

        .bubble-content blockquote {
          border-left: 3px solid #3a3a3a;
          padding-left: 1em;
          margin: 0.5em 0;
          color: #a8a8a8;
        }

        .bubble-timestamp {
          font-size: 0.75rem;
          color: #a8a8a8;
          margin-top: 0.25rem;
          padding: 0 0.5rem;
          text-align: left;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          :host {
            max-width: 85%;
          }

          .bubble-content {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .avatar {
            width: 28px;
            height: 28px;
          }
        }
      </style>

      <div class="bubble-wrapper">
        ${s?`<img src="${this.escapeHtml(o)}" alt="Avatar" class="avatar">`:""}
        <div>
          <div class="bubble-content">${r}</div>
          ${n?`<div class="bubble-timestamp">${this.escapeHtml(t)}</div>`:""}
        </div>
      </div>
    `}}customElements.define("m5t-chat-response",Rn);class In extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.attachEventListeners()}getPlaceholder(){return this.getAttribute("placeholder")||"Type your message..."}getMaxRows(){return parseInt(this.getAttribute("max-rows"))||5}render(){const e=this.getPlaceholder(),t=this.getMaxRows();this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 4px 32px;
        }

        .prompt-container {
          display: grid;
          grid-template-columns: 48px 1fr 48px;
          grid-template-areas: "cancel prompt send";
          gap: 12px;
          background: #2d2d2d;
          border: 2px solid #3a3a3a;
          border-radius: 28px;
          padding: 8px 12px;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .prompt-container:focus-within {
          border-color: #92a8d1;
          box-shadow: 0 4px 16px rgba(146, 168, 209, 0.3);
        }

        .cancel-btn {
          grid-area: cancel;
          width: 48px;
          height: 48px;
          background: #92a8d1;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cancel-btn:hover {
          background: #364C75;
          transform: scale(1.05);
        }

        .cancel-btn:active {
          transform: scale(0.95);
        }

        .prompt-area {
          grid-area: prompt;
          background: transparent;
          border: none;
          color: #e4e4e4;
          font-size: 1rem;
          font-family: inherit;
          line-height: 1.5;
          resize: none;
          overflow-y: auto;
          outline: none;
          padding: 8px 0;
          min-height: 24px;
          max-height: calc(1.5rem * ${t});
        }

        .prompt-area::placeholder {
          color: #a8a8a8;
        }

        .prompt-area::-webkit-scrollbar {
          width: 6px;
        }

        .prompt-area::-webkit-scrollbar-track {
          background: transparent;
        }

        .prompt-area::-webkit-scrollbar-thumb {
          background: #3a3a3a;
          border-radius: 3px;
        }

        .send-btn {
          grid-area: send;
          width: 48px;
          height: 48px;
          background: #92a8d1;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .send-btn:hover {
          background: #364C75;
          transform: scale(1.05);
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        .send-btn:disabled,
        .cancel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          :host {
            padding: 4px 16px;
          }

          .prompt-container {
            gap: 8px;
            padding: 6px 10px;
          }

          .cancel-btn,
          .send-btn {
            width: 40px;
            height: 40px;
          }

          .prompt-area {
            font-size: 0.95rem;
          }
        }
      </style>

      <div class="prompt-container">
        <button class="cancel-btn" id="cancel-btn" title="Cancel">
          <!-- Placeholder: Blue square -->
        </button>

        <textarea
          class="prompt-area"
          id="prompt-textarea"
          placeholder="${e}"
          rows="1"
        ></textarea>

        <button class="send-btn" id="send-btn" title="Send (Enter)">
          <!-- Placeholder: Blue square -->
        </button>
      </div>
    `}attachEventListeners(){const e=this.shadowRoot.getElementById("prompt-textarea"),t=this.shadowRoot.getElementById("send-btn"),n=this.shadowRoot.getElementById("cancel-btn");!e||!t||!n||(e.addEventListener("input",()=>{this.autoExpandTextarea(e)}),e.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this.handleSend())}),t.addEventListener("click",()=>{this.handleSend()}),n.addEventListener("click",()=>{this.handleCancel()}))}autoExpandTextarea(e){e.style.height="auto",e.style.height=e.scrollHeight+"px"}handleSend(){const e=this.shadowRoot.getElementById("prompt-textarea");if(!e)return;const t=e.value.trim();if(!t){console.warn("[M5TChatPromptArea] Cannot send empty message");return}const n=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:t,timestamp:n,pubsubTopic:"CONVERSATION.PROMPT.AGENT_CANVAS"};console.log("[M5TChatPromptArea] Dispatching message-sent event:",o),e.value="",e.style.height="auto",this.dispatchEvent(new CustomEvent("message-sent",{bubbles:!0,composed:!0,detail:o}))}handleCancel(){const e=this.shadowRoot.getElementById("prompt-textarea");e&&(e.value="",e.style.height="auto",console.log("[M5TChatPromptArea] Input cancelled"),this.dispatchEvent(new CustomEvent("message-cancelled",{bubbles:!0,composed:!0})))}getMessage(){const e=this.shadowRoot.getElementById("prompt-textarea");return e?e.value:""}setMessage(e){const t=this.shadowRoot.getElementById("prompt-textarea");t&&(t.value=e,this.autoExpandTextarea(t))}clear(){this.handleCancel()}focus(){const e=this.shadowRoot.getElementById("prompt-textarea");e&&e.focus()}}customElements.define("m5t-chat-prompt-area",In);q.setAppToken("client-saas");function kn(){return`
    <div class="home-container">
      <m5t-primary-nav
        data-buttons='${q.getPrimaryNavJSON()}'
      ></m5t-primary-nav>

      <main class="home-main" id="chat-canvas">
        <!-- Chat bubbles will be injected here dynamically -->
        <div class="chat-messages" id="chat-messages">
          <!-- Messages will appear here via PubSub events -->
        </div>
      </main>

      <!-- Fixed Prompt Area -->
      <div class="prompt-area" id="prompt-area">
        <m5t-chat-prompt-area placeholder="Ask me anything..."></m5t-chat-prompt-area>
      </div>
    </div>

    <style>
      :root {
        overflow: hidden !important;
        scrollbar-gutter: auto !important;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        overflow: hidden !important;
        height: 100vh;
        width: 100vw;
        scrollbar-gutter: auto !important;
        scrollbar-width: none !important;
      }

      body {
        overflow: hidden !important;
        height: 100vh;
        width: 100vw;
        margin: 0 !important;
        padding: 0 !important;
        scrollbar-gutter: auto !important;
        scrollbar-width: none !important;
      }

      #app {
        overflow: hidden !important;
        height: 100vh;
        scrollbar-gutter: auto !important;
      }

      .home-container {
        height: 100vh;
        width: 100vw;
        background: #6c757d;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden !important;
        position: relative;
        scrollbar-gutter: auto !important;
      }

      /* Chat Canvas - Scrollable Area */
      .home-main {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        scrollbar-gutter: auto !important;
      }

      .chat-messages { 
        /* max-width: 900px; */
        /* margin: 0 auto; */
        padding: 32px 32px 100px 32px;
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
        overflow-y: auto;
        flex: 1;
        width: 100%;
      }

      /* Fixed Prompt Area */
      .prompt-area {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 80px;
        background: #1a1a1a;
        border-top: 2px solid #3a3a3a;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .chat-messages {
          padding: 1rem 0.75rem;
        }

        .chat-bubble {
          max-width: 85%;
        }

        .bubble-content {
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }

        .prompt-area {
          min-height: 70px;
          padding: 0.75rem;
        }
      }

      /* Custom Scrollbar - Applied to chat-messages (the actual scrolling container) */
      .chat-messages::-webkit-scrollbar {
        width: 8px;
      }

      .chat-messages::-webkit-scrollbar-track {
        background: #2d2d2d;
      }

      .chat-messages::-webkit-scrollbar-thumb {
        background: #92a8d1;
        border-radius: 4px;
      }

      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: #364C75;
      }
    </style>
  `}function Mn(){console.log("[HomeRoute] Initialized"),i.subscribe(l.CANVAS_DO_SCROLL,(a,e)=>{console.log("[HomeRoute] CANVAS.DO.SCROLL triggered"),Pn()}),i.subscribe(l.LLM_STATUS,(a,e)=>{if(console.log("[HomeRoute] LLM_STATUS:",e),e&&e.text){const t=`🔄 ${e.text}`;i.publish(l.CONVERSATION_RESPONSE_CANVAS,{message:t,timestamp:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),streaming:!0})}})}function Pn(){setTimeout(()=>{const a=document.getElementById("chat-messages");a?(a.scrollTo({top:0,behavior:"smooth"}),console.log("[HomeRoute] Scrolled chat-messages to bottom (top: 0 with column-reverse)")):console.warn("[HomeRoute] chat-messages element not found")},80)}function ve(a,e="user",t="canvas"){const n=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),o={message:a,timestamp:n};if(e==="user"||e==="prompt")switch(t.toUpperCase()){case"CANVAS":i.publish(l.CONVERSATION_PROMPT_CANVAS,o);break;case"AGENT":i.publish(l.CONVERSATION_PROMPT_AGENT,o);break;case"AGENT_CANVAS":i.publish(l.CONVERSATION_PROMPT_AGENT_CANVAS,o);break;case"STAGE":i.publish(l.CONVERSATION_PROMPT_STAGE,o);break;default:i.publish(l.CONVERSATION_PROMPT_CANVAS,o)}else switch(t.toUpperCase()){case"CANVAS":i.publish(l.CONVERSATION_RESPONSE_CANVAS,o);break;case"WORKFLOW":i.publish(l.CONVERSATION_RESPONSE_WORKFLOW,o);break;default:i.publish(l.CONVERSATION_RESPONSE_CANVAS,o)}}function xn(a=10,e=500){const t=["Hey, how's it going?","Can you help me with something?","What's the weather like today?","I need assistance with my account","Tell me a joke!","How do I reset my password?","What are your hours?","Thanks for your help!","I have a question about billing","Can you explain this feature?","How do I upgrade my plan?","What's new in the latest update?","I'm having trouble logging in","Where can I find the settings?","How secure is my data?","Do you offer customer support?","What payment methods do you accept?","Can I cancel my subscription?","How do I export my data?","Is there a mobile app?"],n=["I'm doing great! How can I help you today?","Of course! I'd be happy to assist you.","Let me check that for you...","Here's what I found:","That's a great question!","I can help you with that.","Let me walk you through the steps.","You're very welcome!","I understand your concern. Let me explain...","That feature is located in the settings menu.","Your account is fully secured with encryption.","We're available 24/7 to help you!","We accept all major credit cards and PayPal.","You can upgrade anytime from your account settings.","The latest update includes several new features!","Try resetting your password using the forgot password link.","Your data is encrypted and stored securely.","Yes! Our mobile app is available for iOS and Android.","You can export your data from the account settings.","Absolutely! You can cancel anytime with no fees."];let o=0;const s=setInterval(()=>{if(o>=a){clearInterval(s),console.log(`[Test] Generated ${a} random bubbles`);return}const r=Math.random()>.5,c=r?"user":"assistant",u=r?t:n,h=u[Math.floor(Math.random()*u.length)];ve(h,c),o++,console.log(`[Test] Added bubble ${o}/${a} (${c})`)},e)}let K=null;function Fn(a=1e3){if(K){console.log("[Test] Bubble stream already running. Stop it first with stopBubbleStream()");return}console.log("[Test] Starting continuous bubble stream..."),K=setInterval(()=>{const e=Math.random()>.5,t=e?["Quick message!","Another one!","Test bubble","Hello there!","Random user text"]:["Response here","Got it!","Processing...","Here's the answer","Understood!"],n=t[Math.floor(Math.random()*t.length)];ve(n,e?"user":"assistant")},a)}function Un(){K?(clearInterval(K),K=null,console.log("[Test] Bubble stream stopped")):console.log("[Test] No bubble stream running")}function Dn(){const a=document.getElementById("chat-messages");a&&(a.innerHTML="",console.log("[Test] All bubbles cleared"))}window.addChatBubble=ve;window.generateRandomBubbles=xn;window.startBubbleStream=Fn;window.stopBubbleStream=Un;window.clearAllBubbles=Dn;console.log("[HomeRoute] Test functions available:");console.log("  - window.generateRandomBubbles(count, delay) - Generate N bubbles with delay");console.log("  - window.startBubbleStream(delayMs) - Continuous bubble generation");console.log("  - window.stopBubbleStream() - Stop continuous generation");console.log("  - window.clearAllBubbles() - Remove all bubbles");console.log("  - window.addChatBubble(message, type) - Add single bubble");const Gn=Object.freeze(Object.defineProperty({__proto__:null,init:Mn,render:kn},Symbol.toStringTag,{value:"Module"}));function Hn(){return`
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
  `}function Bn(){console.log("[SignoutRoute] Initialized");const a=document.getElementById("confirm-signout-btn");a?.addEventListener("click",async()=>{a.disabled=!0,a.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await L.doSignout()})}const Vn=Object.freeze(Object.defineProperty({__proto__:null,init:Bn,render:Hn},Symbol.toStringTag,{value:"Module"}));let Ue=!1;function $n(){if(Ue)return;const a=document.createElement("style");a.id="m5t-section-page-styles",a.textContent=`
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
  `,document.head.appendChild(a),Ue=!0}function We({title:a="Section",icon:e="widgets",name:t=""}={}){return $n(),`
    <section class="section-page" data-section="${t}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${e}</span>
        <h1 class="section-page__title">${a}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired — content lands next.</p>
      </div>
    </section>`}function Ke(){}const zn={render:We,init:Ke},qn=Object.freeze(Object.defineProperty({__proto__:null,default:zn,init:Ke,render:We},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
