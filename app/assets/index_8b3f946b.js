(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const bt="modulepreload",yt=function(t){return"/"+t},Ie={},x=function(e,n,a){let o=Promise.resolve();if(n&&n.length>0){let u=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");o=u(n.map(p=>{if(p=yt(p),p in Ie)return;Ie[p]=!0;const _=p.endsWith(".css"),b=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const y=document.createElement("link");if(y.rel=_?"stylesheet":bt,_||(y.as="script"),y.crossOrigin="",y.href=p,r&&y.setAttribute("nonce",r),document.head.appendChild(y),_)return new Promise((w,N)=>{y.addEventListener("load",w),y.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return o.then(s=>{for(const r of s||[])r.status==="rejected"&&i(r.reason);return e().catch(i)})};var Et=/([:*])(\w+)/g,St="([^/]+)",At=/\*/g,wt="?(?:.*)",Tt=/\/\?/g,It="/?([^/]+|)",Nt="(?:/^|^)",kt="";function $e(t){return t===void 0&&(t="/"),Ee()?location.pathname+location.search+location.hash:t}function k(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function ee(t){return typeof t=="string"}function Ot(t){return typeof t=="function"}function te(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function Rt(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(n,a,o){return n===null&&(n={}),n[e[o]]=decodeURIComponent(a),n},null)}function ne(t){var e=k(t).split(/\?(.*)?$/);return[k(e[0]),e.slice(1).join("")]}function ye(t){for(var e={},n=t.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(o[0]!==""){var i=decodeURIComponent(o[0]);e[i]?(Array.isArray(e[i])||(e[i]=[e[i]]),e[i].push(decodeURIComponent(o[1]||""))):e[i]=decodeURIComponent(o[1]||"")}}return e}function qe(t,e){var n=ne(k(t.currentLocationPath)),a=n[0],o=n[1],i=o===""?null:ye(o),s=[],r;if(ee(e.path)){if(r=Nt+k(e.path).replace(Et,function(b,y,w){return s.push(w),St}).replace(At,wt).replace(Tt,It)+"$",k(e.path)===""&&k(a)==="")return{url:a,queryString:o,hashString:te(t.to),route:e,data:null,params:i}}else r=e.path;var u=new RegExp(r,kt),p=a.match(u);if(p){var _=ee(e.path)?Rt(p,s):p.groups?p.groups:p.slice(1);return{url:k(a.replace(new RegExp("^"+t.instance.root),"")),queryString:o,hashString:te(t.to),route:e,data:_,params:i}}return!1}function ze(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function H(t,e){return typeof t[e]>"u"||t[e]===!0}function Ct(t){if(!t)return{};var e=t.split(","),n={},a;return e.forEach(function(o){var i=o.split(":").map(function(s){return s.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":n.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":a||(a={}),a.strategy=i[1];break;case"resolveOptionsHash":a||(a={}),a.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[i[0]]=i[1]==="true";break}}),a&&(n.resolveOptions=a),n}function Ee(){return typeof window<"u"}function Lt(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(a){n[a]&&(e[a]||(e[a]=[]),e[a].push(n[a]))})}),e}function U(t,e,n){var a=e||{},o=0;(function i(){if(!t[o]){n&&n(a);return}Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](a)?t[o][1]:t[o][2])),i()):t[o](a,function(s){typeof s>"u"||s===!0?(o+=1,i()):n&&n(a)})})()}U.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};function Ne(t,e){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=$e(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function re(t,e){for(var n=0;n<t.instance.routes.length;n++){var a=t.instance.routes[n],o=qe(t,a);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),t.resolveOptions.strategy==="ONE")){e();return}}e()}function Pt(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function xt(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var ke=Ee(),Mt=ze();function Ft(t,e){if(H(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),a=ke&&t.resolveOptions&&t.resolveOptions.hash===!0;Mt?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",a?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!a){var o=location.hash;location.hash="",location.hash=o}t.instance.__freezeListening=!1},1))):ke&&(window.location.href=t.to)}e()}function je(t,e){var n=t.instance;if(!n.lastResolved()){e();return}U(n.lastResolved().map(function(a){return function(o,i){if(!a.route.hooks||!a.route.hooks.leave){i();return}var s=!1,r=t.instance.matchLocation(a.route.path,t.currentLocationPath,!1);if(a.route.path!=="*")s=!r;else{var u=t.matches?t.matches.find(function(p){return a.route.path===p.route.path}):!1;s=!u}if(H(t.navigateOptions,"callHooks")&&s){U(a.route.hooks.leave.map(function(p){return function(_,b){return p(function(y){y===!1?t.instance.__markAsClean(t):b()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return e()})}function Ut(t,e){t.match.route.hooks&&t.match.route.hooks.before&&H(t.navigateOptions,"callHooks")?U(t.match.route.hooks.before.map(function(n){return function(o,i){return n(function(s){s===!1?t.instance.__markAsClean(t):i()},t.match)}}).concat([function(){return e()}])):e()}function Dt(t,e){H(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function Gt(t,e){t.match.route.hooks&&t.match.route.hooks.after&&H(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(n){return n(t.match)}),e()}function Bt(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString){n.forEach(function(a){a.route.hooks&&a.route.hooks.already&&H(t.navigateOptions,"callHooks")&&a.route.hooks.already.forEach(function(o){return o(t.match)})}),e(!1);return}e()}function Ht(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var a=ne(t.currentLocationPath),o=a[0],i=a[1],s=te(t.to);n.path=k(o);var r={url:n.path,queryString:i,hashString:s,data:null,route:n,params:i!==""?ye(i):null};t.matches=[r],t.match=r}e()}function Vt(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function $t(t,e){t.instance._setCurrent(null),e()}function Ye(t,e){H(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var Ke=[Bt,Ut,Dt,Gt],Oe=[je,Ht,U.if(function(t){var e=t.notFoundHandled;return e},Ke.concat([Ye]),[Vt,$t])];function _e(){return _e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},_e.apply(this,arguments)}function Re(t,e){var n=0;function a(){if(n===t.matches.length){Ye(t,e);return}U(Ke,_e({},t,{match:t.matches[n]}),function(){n+=1,a()})}je(t,a)}function le(t){t.instance.__markAsClean(t)}function he(){return he=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},he.apply(this,arguments)}var Ce="[data-navigo]";function qt(t,e){var n=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ce},a=this,o="/",i=null,s=[],r=!1,u,p=ze(),_=Ee();t?o=k(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function b(d){return d.indexOf("#")>=0&&(n.hash===!0?d=d.split("#")[1]||"/":d=d.split("#")[0]),d}function y(d){return k(o+"/"+k(d))}function w(d,m,E,T){return d=ee(d)?y(d):d,{name:T||k(String(d)),path:d,handler:m,hooks:Lt(E)}}function N(d,m,E){var T=this;return typeof d=="object"&&!(d instanceof RegExp)?(Object.keys(d).forEach(function(S){if(typeof d[S]=="function")T.on(S,d[S]);else{var F=d[S],j=F.uses,ft=F.as,vt=F.hooks;s.push(w(S,j,[u,vt],ft))}}),this):(typeof d=="function"&&(E=m,m=d,d=o),s.push(w(d,m,[u,E])),this)}function g(d,m){if(a.__dirty){a.__waiting.push(function(){return a.resolve(d,m)});return}else a.__dirty=!0;d=d?k(o)+"/"+k(d):void 0;var E={instance:a,to:d,currentLocationPath:d,navigateOptions:{},resolveOptions:he({},n,m)};return U([Ne,re,U.if(function(T){var S=T.matches;return S&&S.length>0},Re,Oe)],E,le),E.matches?E.matches:!1}function h(d,m){if(a.__dirty){a.__waiting.push(function(){return a.navigate(d,m)});return}else a.__dirty=!0;d=k(o)+"/"+k(d);var E={instance:a,to:d,navigateOptions:m||{},resolveOptions:m&&m.resolveOptions?m.resolveOptions:n,currentLocationPath:b(d)};U([Pt,xt,re,U.if(function(T){var S=T.matches;return S&&S.length>0},Re,Oe),Ft,le],E,le)}function v(d,m,E){var T=Ae(d,m);return T!==null?(h(T.replace(new RegExp("^/?"+o),""),E),!0):!1}function R(d){return this.routes=s=s.filter(function(m){return ee(d)?k(m.path)!==k(d):Ot(d)?d!==m.handler:String(m.path)!==String(d)}),this}function C(){p&&(this.__popstateListener=function(){a.__freezeListening||g()},window.addEventListener("popstate",this.__popstateListener))}function P(){this.routes=s=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=r=!0}function G(d,m){return a._notFoundRoute=w("*",d,[u,m],"__NOT_FOUND__"),this}function M(){if(_)return V().forEach(function(d){if(d.getAttribute("data-navigo")==="false"||d.getAttribute("target")==="_blank"){d.hasListenerAttached&&d.removeEventListener("click",d.navigoHandler);return}d.hasListenerAttached||(d.hasListenerAttached=!0,d.navigoHandler=function(m){if((m.ctrlKey||m.metaKey)&&m.target.tagName.toLowerCase()==="a")return!1;var E=d.getAttribute("href");if(typeof E>"u"||E===null)return!1;if(E.match(/^(http|https)/)&&typeof URL<"u")try{var T=new URL(E);E=T.pathname+T.search}catch{}var S=Ct(d.getAttribute("data-navigo-options"));r||(m.preventDefault(),m.stopPropagation(),a.navigate(k(E),S))},d.addEventListener("click",d.navigoHandler))}),a}function V(){return _?[].slice.call(document.querySelectorAll(n.linksSelector||Ce)):[]}function se(d){return"/"+o+"/"+k(d)}function z(d){return u=d,this}function ut(){return i}function Ae(d,m,E){var T=s.find(function(j){return j.name===d}),S=null;if(T){if(S=T.path,m)for(var F in m)S=S.replace(":"+F,m[F]);S=S.match(/^\//)?S:"/"+S}return S&&E&&!E.includeRoot&&(S=S.replace(new RegExp("^/"+o),"")),S}function pt(d){return d.getAttribute("href")}function we(d){var m=ne(k(d)),E=m[0],T=m[1],S=T===""?null:ye(T),F=te(d),j=w(E,function(){},[u],E);return{url:E,queryString:T,hashString:F,route:j,data:null,params:S}}function gt(){return we(k($e(o)).replace(new RegExp("^"+o),""))}function _t(d){var m={instance:a,currentLocationPath:d,to:d,resolveOptions:n};return re(m,function(){}),m.matches?m.matches:!1}function ht(d,m,E){typeof m<"u"&&(typeof E>"u"||E)&&(m=y(m));var T={instance:a,to:m,currentLocationPath:m};Ne(T,function(){}),typeof d=="string"&&(d=typeof E>"u"||E?y(d):d);var S=qe(T,{name:String(d),path:d,handler:function(){},hooks:{}});return S||!1}function J(d,m,E){return typeof m=="string"&&(m=Te(m)),m?(m.hooks[d]||(m.hooks[d]=[]),m.hooks[d].push(E),function(){m.hooks[d]=m.hooks[d].filter(function(T){return T!==E})}):(console.warn("Route doesn't exists: "+m),function(){})}function Te(d){return typeof d=="string"?s.find(function(m){return m.name===y(d)}):s.find(function(m){return m.handler===d})}function mt(d){d.instance.__dirty=!1,d.instance.__waiting.length>0&&d.instance.__waiting.shift()()}this.root=o,this.routes=s,this.destroyed=r,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=mt,this.on=N,this.off=R,this.resolve=g,this.navigate=h,this.navigateByName=v,this.destroy=P,this.notFound=G,this.updatePageLinks=M,this.link=se,this.hooks=z,this.extractGETParameters=function(d){return ne(b(d))},this.lastResolved=ut,this.generate=Ae,this.getLinkPath=pt,this.match=_t,this.matchLocation=ht,this.getCurrentLocation=gt,this.addBeforeHook=J.bind(this,"before"),this.addAfterHook=J.bind(this,"after"),this.addAlreadyHook=J.bind(this,"already"),this.addLeaveHook=J.bind(this,"leave"),this.getRoute=Te,this._pathToMatchObject=we,this._clean=k,this._checkForAHash=b,this._setCurrent=function(d){return i=a.current=d},C.call(this),M.call(this)}var zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y={exports:{}},Yt=Y.exports,Le;function Kt(){return Le||(Le=1,(function(t,e){(function(n,a){var o={};n.PubSub?(o=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=o,a(o)),t!==void 0&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o})(typeof window=="object"&&window||Yt||zt,function(n){var a={},o=-1,i="*";function s(g){var h;for(h in g)if(Object.prototype.hasOwnProperty.call(g,h))return!0;return!1}function r(g){return function(){throw g}}function u(g,h,v){try{g(h,v)}catch(R){setTimeout(r(R),0)}}function p(g,h,v){g(h,v)}function _(g,h,v,R){var C=a[h],P=R?p:u,G;if(Object.prototype.hasOwnProperty.call(a,h))for(G in C)Object.prototype.hasOwnProperty.call(C,G)&&P(C[G],g,v)}function b(g,h,v){return function(){var C=String(g),P=C.lastIndexOf(".");for(_(g,g,h,v);P!==-1;)C=C.substr(0,P),P=C.lastIndexOf("."),_(g,C,h,v);_(g,i,h,v)}}function y(g){var h=String(g),v=!!(Object.prototype.hasOwnProperty.call(a,h)&&s(a[h]));return v}function w(g){for(var h=String(g),v=y(h)||y(i),R=h.lastIndexOf(".");!v&&R!==-1;)h=h.substr(0,R),R=h.lastIndexOf("."),v=y(h);return v}function N(g,h,v,R){g=typeof g=="symbol"?g.toString():g;var C=b(g,h,R),P=w(g);return P?(v===!0?C():setTimeout(C,0),!0):!1}n.publish=function(g,h){return N(g,h,!1,n.immediateExceptions)},n.publishSync=function(g,h){return N(g,h,!0,n.immediateExceptions)},n.subscribe=function(g,h){if(typeof h!="function")return!1;g=typeof g=="symbol"?g.toString():g,Object.prototype.hasOwnProperty.call(a,g)||(a[g]={});var v="uid_"+String(++o);return a[g][v]=h,v},n.subscribeAll=function(g){return n.subscribe(i,g)},n.subscribeOnce=function(g,h){var v=n.subscribe(g,function(){n.unsubscribe(v),h.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(h){var v;for(v in a)Object.prototype.hasOwnProperty.call(a,v)&&v.indexOf(h)===0&&delete a[v]},n.countSubscriptions=function(h){var v,R,C=0;for(v in a)if(Object.prototype.hasOwnProperty.call(a,v)&&v.indexOf(h)===0){for(R in a[v])C++;break}return C},n.getSubscriptions=function(h){var v,R=[];for(v in a)Object.prototype.hasOwnProperty.call(a,v)&&v.indexOf(h)===0&&R.push(v);return R},n.unsubscribe=function(g){var h=function(se){var z;for(z in a)if(Object.prototype.hasOwnProperty.call(a,z)&&z.indexOf(se)===0)return!0;return!1},v=typeof g=="string"&&(Object.prototype.hasOwnProperty.call(a,g)||h(g)),R=!v&&typeof g=="string",C=typeof g=="function",P=!1,G,M,V;if(v){n.clearSubscriptions(g);return}for(G in a)if(Object.prototype.hasOwnProperty.call(a,G)){if(M=a[G],R&&M[g]){delete M[g],P=g;break}if(C)for(V in M)Object.prototype.hasOwnProperty.call(M,V)&&M[V]===g&&(delete M[V],P=!0)}return P}})})(Y,Y.exports)),Y.exports}var Wt=Kt();const l=jt(Wt),c=Object.freeze({APP:"APP",APP_READY:"APP.READY",APP_ERROR:"APP.ERROR",APP_SIGNOUT:"APP.SIGNOUT",APP_AUTH:"APP.AUTH",APP_USER_LOADED:"APP.USER.LOADED",ROUTE_NAV:"ROUTE.NAV",ROUTE_NAV_BEFORE:"ROUTE.NAV.BEFORE",ROUTE_NAV_AFTER:"ROUTE.NAV.AFTER",ROUTE_NAV_ERROR:"ROUTE.NAV.ERROR",AUTH_SIGNIN:"AUTH.SIGNIN",AUTH_SIGNIN_SUCCESS:"AUTH.SIGNIN.SUCCESS",AUTH_SIGNIN_FAIL:"AUTH.SIGNIN.FAIL",AUTH_SIGNUP:"AUTH.SIGNUP",AUTH_SIGNUP_SUCCESS:"AUTH.SIGNUP.SUCCESS",AUTH_SIGNUP_FAIL:"AUTH.SIGNUP.FAIL",AUTH_VERIFY_LINK:"AUTH.VERIFY.LINK",AUTH_SIGNOUT:"AUTH.SIGNOUT",AUTH_SIGNOUT_SUCCESS:"AUTH.SIGNOUT.SUCCESS",AUTH_FORGOT:"AUTH.FORGOT",AUTH_FORGOT_SUCCESS:"AUTH.FORGOT.SUCCESS",AUTH_RESETHASH:"AUTH.RESETHASH",AUTH_RESETHASH_SUCCESS:"AUTH.RESETHASH.SUCCESS",AUTH_RESETHASH_NAV:"AUTH.RESETHASH.NAV",AUTH_TOKEN_EXPIRED:"AUTH.TOKEN.EXPIRED",AUTH_TOKEN_INVALID:"AUTH.TOKEN.INVALID",AUTH_SCOPE_LOADED:"AUTH.SCOPE.LOADED",M5T_PRIMARY_NAV:"M5T_PRIMARY_NAV",M5T_PRIMARY_NAV_LOGO_TAP:"M5T_PRIMARY_NAV.LOGO_TAP",M5T_PRIMARY_NAV_HOVER:"M5T_PRIMARY_NAV.HOVER",M5T_PRIMARY_NAV_TAP:"M5T_PRIMARY_NAV.TAP",M5T_PRIMARY_NAV_DOUBLE_TAP:"M5T_PRIMARY_NAV.DOUBLE_TAP",M5T_PRIMARY_NAV_LONG_TAP:"M5T_PRIMARY_NAV.LONG_TAP",M5T_SIDE_NAV:"M5T_SIDE_NAV",M5T_SIDE_NAV_TAP:"M5T_SIDE_NAV.TAP",M5T_SIDE_NAV_COLLAPSE:"M5T_SIDE_NAV.COLLAPSE",M5T_SIDE_NAV_LOGO_TAP:"M5T_SIDE_NAV.LOGO_TAP",M5T_SIDE_NAV_ORG_SWITCH:"M5T_SIDE_NAV.ORG_SWITCH",M5T_SIDE_NAV_FOOTER_ACTION:"M5T_SIDE_NAV.FOOTER_ACTION",UI_LOADING_START:"UI.LOADING.START",UI_LOADING_END:"UI.LOADING.END",UI_TOAST:"UI.TOAST",UI_MODAL_OPEN:"UI.MODAL.OPEN",UI_MODAL_CLOSE:"UI.MODAL.CLOSE",UI_WELCOME_BACK_CLICKED:"UI.WELCOME_BACK_CLICKED",DATA_REFRESH:"DATA.REFRESH",DATA_UPDATE:"DATA.UPDATE",DATA_ERROR:"DATA.ERROR",I18N:"I18N",I18N_SET_LANG:"I18N.SET_LANG",CONVERSATION:"CONVERSATION",CONVERSATION_PROMPT:"CONVERSATION.PROMPT",CONVERSATION_PROMPT_AGENT_CANVAS:"CONVERSATION.PROMPT.AGENT_CANVAS",CONVERSATION_PROMPT_AGENT:"CONVERSATION.PROMPT.AGENT",CONVERSATION_PROMPT_CANVAS:"CONVERSATION.PROMPT.CANVAS",CONVERSATION_PROMPT_STAGE:"CONVERSATION.PROMPT.STAGE",CONVERSATION_RESPONSE:"CONVERSATION.RESPONSE",CONVERSATION_RESPONSE_CANVAS:"CONVERSATION.RESPONSE.CANVAS",CONVERSATION_RESPONSE_WORKFLOW:"CONVERSATION.RESPONSE.WORKFLOW",CANVAS:"CANVAS",CANVAS_DO_SCROLL:"CANVAS.DO.SCROLL",MESSAGE:"MESSAGE",MESSAGE_CREATE:"MESSAGE.CREATE",MESSAGE_CREATED:"MESSAGE.CREATED",MESSAGE_EDIT:"MESSAGE.EDIT",MESSAGE_UPDATED:"MESSAGE.UPDATED",MESSAGE_DELETE:"MESSAGE.DELETE",MESSAGE_DELETED:"MESSAGE.DELETED",MESSAGE_REFRESH:"MESSAGE.REFRESH"}),ce={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_BASE_URL:"https://machfivemagnet-saas.onrender.com"};var de={};const I=Object.freeze({FF_SSE_LS_SESSION_USER:"mvv_session_user",FF_SSE_LS_TOKEN:"mvv",FF_SSE_LS_USER_PREFS:"mvv_user_prefs",FF_SSE_LS_THEME:"mvv_theme",FF_SSE_LS_LAST_ROUTE:"mvv_last_route",FF_SSE_API_DEBUG_LOGGING:!1,FF_SSE_API_TIMEOUT:3e4,FF_SSE_API_MAX_RETRIES:3,FF_SSE_API_CACHE_ENABLED:!0,FF_SSE_AUTH_TOKEN_EXPIRY_HOURS:6,FF_SSE_AUTH_AUTO_REFRESH:!1,FF_SSE_AUTH_SESSION_WARNING_MINUTES:5,FF_SSE_AUTH_REMEMBER_ME:!0,FF_SSE_AUTH_MAX_LOGIN_ATTEMPTS:5,FF_SSE_UI_TOAST_ENABLED:!0,FF_SSE_UI_TOAST_DURATION:5e3,FF_SSE_UI_LOADING_SPINNERS:!0,FF_SSE_UI_DARK_MODE:!1,FF_SSE_UI_ANIMATIONS:!0,FF_SSE_FEATURE_SIGNUP_ENABLED:!0,FF_SSE_FEATURE_PASSWORD_RESET_ENABLED:!0,FF_SSE_FEATURE_EMAIL_VERIFICATION_ENABLED:!0,FF_SSE_FEATURE_PROFILE_EDIT_ENABLED:!0,FF_SSE_FEATURE_ANALYTICS_ENABLED:!1,FF_SSE_CACHE_TTL_MS:3e5,FF_SSE_COMPRESSION_ENABLED:!0,FF_SSE_MAX_PAYLOAD_SIZE_MB:50,FF_SSE_DEBUG_VERBOSE:!1,FF_SSE_DEBUG_REDUX_DEVTOOLS:!1,FF_SSE_DEBUG_PERFORMANCE:!1,FF_SSE_DEBUG_BYPASS_AUTH:!1,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:"main_carousel_nav",FF_CLIENT_LS_SESSION_ENTITY:"sse_entity",FF_CLIENT_LS_DEEP_LINK:"sse_deeplink",FF_CLIENT_ROUTE_SIGNIN:"signin_route",FF_CLIENT_ROUTE_SIGNUP:"signup_route",FF_CLIENT_ROUTE_HOME:"home_route",FF_CLIENT_ROUTE_RESET_HASH:"resethash_route",FF_CLIENT_ROUTE_RESET_FORGOT:"resetforgot_route",FF_CLIENT_ROUTE_SIGNOUT:"signout_route",FF_CLIENT_ROUTE_ERROR:"error_route",FF_CLIENT_ROUTE_VERF_LINK:"verf_link_route",FF_CLIENT_ROUTE_OFFLINE:"offline_route",FF_CLIENT_PROTECTED_ROUTES:["home_route","resethash_route","signout_route","user_management_route"],FF_CLIENT_ENDPOINT_SIGNIN:"/m5t/v5/acctEntity/signin",FF_CLIENT_ENDPOINT_SIGNOUT:"/m5t/v5/acctEntity/signout",FF_CLIENT_ENDPOINT_SIGNUP:"/m5t/v5/acctEntity/",FF_CLIENT_ENDPOINT_RESET_HASH:"/m5t/v5/acctEntity/resetHash",FF_CLIENT_ENDPOINT_RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",FF_CLIENT_ENDPOINT_PING:"/ping",FF_CLIENT_ENDPOINT_METER:"/m5t/v5/coreMeter/",FF_CLIENT_METER_DEEP_LINK:"deep_link_access",FF_CLIENT_METER_SIGNOUT_CLIENT:"signout_client_initiated",FF_CLIENT_METER_SIGNOUT_SERVER:"signout_server_initiated",FF_CLIENT_METER_PING_SUCCESS:"ping_auth_success",FF_CLIENT_METER_PING_FAILURE:"ping_auth_failure",FF_SSE_I18N_BUILD_MODE:"LOCAL",FF_SSE_I18N_PRODUCT:"SSE",FF_SSE_I18N_WHITELABEL:"M5T",FF_SSE_I18N_LANG:"en",FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:"mvv_user_lang",FF_SSE_LS_WHITELABEL:"mvv_whitelabel"});function We(t,e=null){if(t in I)return I[t];if(typeof process<"u"&&de&&de[t]){const n=de[t];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}if(typeof import.meta<"u"&&ce&&ce[t]){const n=ce[t];return n==="true"?!0:n==="false"?!1:isNaN(n)?n:Number(n)}return e}function Jt(t){return We(t,!1)===!0}function Qt(){return{...I}}typeof module<"u"&&module.exports&&(module.exports={FEATURE_FLAGS:I,getFlag:We,isEnabled:Jt,getAllFlags:Qt});function Xt(){const t=e=>n=>{const a=n.detail?.pubsubTopic;a&&l.publish(a,n.detail)};document.addEventListener("nav-select",t()),document.addEventListener("logo-click",t()),document.addEventListener("nav-hover",t()),document.addEventListener("nav-double-tap",t()),document.addEventListener("nav-long-tap",t()),document.addEventListener("message-sent",t())}function Zt(){console.log("[AppEvents] Initializing event listeners..."),l.subscribe(c.APP_READY,(n,a)=>{console.log("[AppEvents] APP_READY:",a)}),l.subscribe(c.APP_ERROR,(n,a)=>{console.error("[AppEvents] APP_ERROR:",a)}),l.subscribe(c.APP_SIGNOUT,(n,a)=>{console.log("[AppEvents] APP_SIGNOUT:",a)}),l.subscribe(c.ROUTE_NAV_BEFORE,(n,a)=>{console.log("[AppEvents] ROUTE_NAV_BEFORE:",a),l.publish(c.UI_LOADING_START)}),l.subscribe(c.ROUTE_NAV_AFTER,(n,a)=>{console.log("[AppEvents] ROUTE_NAV_AFTER:",a),l.publish(c.UI_LOADING_END)}),l.subscribe(c.ROUTE_NAV_ERROR,(n,a)=>{console.error("[AppEvents] ROUTE_NAV_ERROR:",a),l.publish(c.APP_ERROR,{message:"Navigation error",details:a})}),l.subscribe(c.AUTH_SIGNIN_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:",a)}),l.subscribe(c.AUTH_SIGNIN_FAIL,(n,a)=>{console.error("[AppEvents] AUTH_SIGNIN_FAIL:",a),l.publish(c.UI_TOAST,{message:a.message||"Sign in failed",type:"danger"})}),l.subscribe(c.AUTH_SIGNUP_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:",a),l.publish(c.UI_TOAST,{message:"Account created! Please check your email to verify.",type:"success"}),l.publish(c.AUTH_VERIFY_LINK)}),l.subscribe(c.AUTH_VERIFY_LINK,(n,a)=>{console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route"),window.router&&window.router.navigate("/verf-link")}),l.subscribe(c.AUTH_SIGNUP_FAIL,(n,a)=>{console.error("[AppEvents] AUTH_SIGNUP_FAIL:",a),l.publish(c.UI_TOAST,{message:a.message||"Sign up failed",type:"danger"})}),l.subscribe(c.AUTH_SIGNOUT_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:",a),l.publish(c.UI_TOAST,{message:"Signed out successfully",type:"info"})}),l.subscribe(c.AUTH_SIGNUP,(n,a)=>{console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route"),window.router&&window.router.navigate("/signup")}),l.subscribe(c.AUTH_FORGOT,(n,a)=>{console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route"),window.router&&window.router.navigate("/forgot")}),l.subscribe(c.AUTH_FORGOT_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_FORGOT_SUCCESS:",a),l.publish(c.UI_TOAST,{message:"Password reset email sent!",type:"success"})}),l.subscribe(c.AUTH_RESETHASH_NAV,(n,a)=>{console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route"),window.router&&window.router.navigate("/resethash")}),l.subscribe(c.AUTH_RESETHASH_SUCCESS,(n,a)=>{console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:",a),l.publish(c.UI_TOAST,{message:"Password reset successfully! Please sign in.",type:"success"})}),l.subscribe(c.AUTH_TOKEN_EXPIRED,(n,a)=>{console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:",a),l.publish(c.UI_TOAST,{message:"Session expired. Please sign in again.",type:"warning"})}),l.subscribe(c.I18N_SET_LANG,(n,a)=>{console.log("[AppEvents] I18N_SET_LANG:",a);const{langCode:o}=a;if(!o){console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");return}if(window.I18nController&&typeof window.I18nController.setLanguage=="function")try{window.I18nController.setLanguage(o),console.log("[AppEvents] Language changed successfully to:",o),l.publish(c.UI_TOAST,{message:`Language changed to ${o}`,type:"success"})}catch(i){console.error("[AppEvents] Error changing language:",i),l.publish(c.UI_TOAST,{message:`Failed to change language: ${i.message}`,type:"danger"})}else console.error("[AppEvents] I18nController not available")}),l.subscribe("CONVERSATION.PROMPT",(n,a)=>{const o=n.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${o}:`,a),!a||!a.message){console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display prompt in canvas:",a.message),ue(a.message,"user",a.timestamp),l.publish(c.CANVAS_DO_SCROLL);break;case"AGENT":console.log("[AppEvents] Agent prompt (no implementation):",a.message);break;case"AGENT_CANVAS":console.log("[AppEvents] Display message in canvas:",a.message),ue(a.message,"user",a.timestamp),l.publish(c.CANVAS_DO_SCROLL);break;case"STAGE":console.log("[AppEvents] Stage prompt for editing:",a.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${o}`);break}}),l.subscribe("CONVERSATION.RESPONSE",(n,a)=>{const o=n.split(".")[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${o}:`,a),!a||!a.message){console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");return}switch(o){case"CANVAS":console.log("[AppEvents] Display response in canvas:",a.message),ue(a.message,"assistant",a.timestamp,a.streaming);break;case"WORKFLOW":console.log("[AppEvents] Send response to workflow engine:",a.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${o}`);break}}),l.subscribe(c.UI_LOADING_START,(n,a)=>{const o=document.getElementById("app-loader");o&&o.classList.add("active")}),l.subscribe(c.UI_LOADING_END,(n,a)=>{const o=document.getElementById("app-loader");o&&o.classList.remove("active")}),l.subscribe(c.UI_TOAST,(n,a)=>{console.log("[AppEvents] UI_TOAST:",a)}),l.subscribe(c.UI_WELCOME_BACK_CLICKED,()=>{console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");const n="0.1",a=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`${n} 6/28/2026, 3:35:58 PM|© ${a} Mach Five Tech`,"night")}),Xt(),l.subscribe("M5T_PRIMARY_NAV",(n,a)=>{const o=n.split(".")[1];switch(o){case"TAP":t(a);break;case"LOGO_TAP":e();break;case"HOVER":break;case"DOUBLE_TAP":break;case"LONG_TAP":break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${o}`);break}});function t(n){const{token:a,level:o,primaryToken:i}=n;switch(a){case"RESET_PASSWORD":console.log("[AppEvents] Password reset requested"),l.publish(c.AUTH_RESETHASH_NAV);break;case"SIGN_OUT":console.log("[AppEvents] Sign out requested"),window.router&&window.router.navigate("/signout");break;default:console.log(`[AppEvents] Navigation: ${o} -> ${a}`,{primaryToken:i});break}}function e(n){const o=new Date().getFullYear();typeof neodigmToast<"u"&&neodigmToast.q(`0.1 6/28/2026, 3:35:58 PM|© ${o} Mach Five Tech`,"night",5e3)}l.subscribe(c.AUTH_SIGNOUT,(n,a)=>{console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage"),localStorage.removeItem(I.FF_SSE_LS_SESSION_USER)}),console.log("[AppEvents] Event listeners initialized")}function ue(t,e="user",n=null,a=!1){const o=document.getElementById("chat-messages");if(!o){console.warn("[AppEvents] chat-messages element not found - may not be on home route");return}if(n||(n=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})),a&&e==="assistant"){const s=o.firstElementChild;if(s&&s.tagName.toLowerCase()==="m5t-chat-response"){s.setAttribute("message",t),console.log(`[AppEvents] Updated streaming ${e} bubble (${t.length} chars)`);return}}let i;e==="user"||e==="prompt"?i=document.createElement("m5t-chat-prompt"):i=document.createElement("m5t-chat-response"),i.setAttribute("message",t),i.setAttribute("timestamp",n),o.prepend(i),console.log(`[AppEvents] Added ${e} bubble to canvas (${t.length} chars)`)}class A{static CONFIG={BASE_URL:"https://machfivemagnet-saas.onrender.com",FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:"sse_session_user",DEEP_LINK:"sse_deeplink",SCOPE:"sse_session_scope",ACTIVE_ORG:"sse_active_org"},ROUTES:{SIGNIN:"signin",SIGNUP:"signup",HOME:"home",RESET_HASH:"resethash",FORGOT:"forgot",SPLASH:"splash"},PROTECTED_ROUTES:["home","resethash"],ENDPOINTS:{SIGNIN:"/m5t/v5/acctEntity/signin",SIGNOUT:"/m5t/v5/acctEntity/signout",SIGNUP:"/m5t/v5/acctEntity/",RESET_HASH:"/m5t/v5/acctEntity/resetHash",RESET_FORGOT:"/m5t/v5/acctEntity/resetforgot",ME:"/m5t/v5/acctEntity/me",PING:"/ping"},METER_CAPTIONS:{DEEP_LINK:"deep_link_access",SIGNOUT_CLIENT:"signout_client_initiated",SIGNOUT_SERVER:"signout_server_initiated",PING_SUCCESS:"ping_auth_success",PING_FAILURE:"ping_auth_failure"}};static#e=!1;static#t=null;static#o=null;static#n=null;static#a=!1;static#i=null;static#r=null;static async init({BASE_URL:e,navigateFunction:n,customConfig:a={}}={}){if(this.#e)return console.warn("[AuthController] Already initialized"),!0;try{if(n&&typeof n=="function")this.#r=n;else throw new Error("navigateFunction is required and must be a function");return e&&(this.CONFIG.BASE_URL=e),a&&Object.keys(a).length>0&&(this.CONFIG={...this.CONFIG,...a}),console.log("[AuthController] Initializing with config:",{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#l(),this.#u(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.#e=!0,console.log("[AuthController] Initialized successfully"),!0}catch(o){return console.error("[AuthController] Initialization failed:",o),!1}}static#u(){if(typeof mvvLegit>"u"||!mvvLegit)throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");mvvLegit.setNavConroller((e=null)=>{if(e){if((window.location.hash||"").startsWith("#/accept-invite")&&(e==="splash"||e==="signin")){console.log("[AuthController] Ignoring mvvLegit redirect to",e,"— keeping invitee on accept-invite");return}console.log("[AuthController] mvvLegit navigation to:",e),this.#s(e)}}).setOnState((e=null)=>{if(e)switch(console.log("[AuthController] Auth state changed:",e),e){case"AUTH":case 4:this.#m();break;case"UNAUTH":case 1:this.#f();break;case"UNVERF":case 2:this.#v();break}}).init({BASE:this.CONFIG.BASE_URL}),console.log("[AuthController] mvvLegit initialized")}static#s(e){if(!this.#r){console.error("[AuthController] Navigate function not set");return}console.log("[AuthController] #navigate called with:",e);const n=e.replace(/_route$/,"").replace(/_/g,"-");console.log("[AuthController] Navigating to path:",n),this.#r(n)}static#l(){try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#o=JSON.parse(e),console.log("[AuthController] Entity state loaded:",this.#o?.email))}catch(e){console.error("[AuthController] Error loading entity state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#o=null}this.#i=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);e&&(this.#n=JSON.parse(e),console.log("[AuthController] Scope state loaded (cached):",this.#n?.uiMode))}catch(e){console.error("[AuthController] Error loading scope state:",e),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#n=null}}static#d(e){try{this.#o=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log("[AuthController] Entity state saved")}catch(n){console.error("[AuthController] Error saving entity state:",n)}}static#p(){this.#o=null,this.#n=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}}static getEntity(){return this.#o}static#c(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(e))}catch(n){console.error("[AuthController] Error saving scope state:",n)}}static async fetchScope(){if(typeof mvvLegit>"u"||!this.isAuthenticated())return console.log("[AuthController] fetchScope skipped — not authenticated"),this.#n;if(this.#a)return this.#n;this.#a=!0;try{const e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),n=e?`?org=${encodeURIComponent(e)}`:"",a=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${n}`);if(a.status===401||a.status===403)return console.warn("[AuthController] /me unauthorized — signing out"),this.doSignout(!0),null;if(!a.ok)return console.warn(`[AuthController] /me failed (${a.status}) — using cached scope`),this.#n;const o=await a.json();return o?.ok?(this.#c(o),l.publish(c.AUTH_SCOPE_LOADED,o),console.log(`[AuthController] Scope loaded: ${o.uiMode} (${o.memberships?.length||0} org(s))`),o):(console.warn("[AuthController] /me returned not-ok — using cached scope"),this.#n)}catch(e){return console.error("[AuthController] fetchScope error:",e),this.#n}finally{this.#a=!1}}static async setActiveOrg(e){try{e?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,e):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#n}static getCapabilities(){return this.#n?.capabilities||[]}static getUiMode(){return this.#n?.uiMode||"self_serve"}static getActiveOrg(){return this.#n?.activeOrg||null}static getMemberships(){return this.#n?.memberships||[]}static async doSignin(e,n){try{const a=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:n})}),o=await a.json();return a.status===303?(console.warn("[AuthController] Password reset required"),o.accessToken&&(mvvLegit.doSignin(o.accessToken),this.#d(o.entity)),setTimeout(()=>{this.#s(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:o}):a.ok&&o.accessToken?(console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()"),mvvLegit.doSignin(o.accessToken),this.#d(o.entity),this.fetchScope(),console.log("[AuthController] Explicitly navigating to home"),this.#s(this.CONFIG.ROUTES.HOME),{ok:!0,data:o}):{ok:!1,error:o.error||"Sign in failed",data:o}}catch(a){return console.error("[AuthController] Signin error:",a),{ok:!1,error:a.message}}}static async doSignout(e=!1){console.log("[AuthController] doSignout called, serverInitiated:",e);try{const n=mvvLegit.getConf()?.token;if(console.log("[AuthController] Token exists:",!!n),!e&&n){const a=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(n)}`;if(console.log("[AuthController] Sending signout beacon to:",a),navigator.sendBeacon){const o=navigator.sendBeacon(a);console.log("[AuthController] Beacon sent:",o),o||console.warn("[AuthController] Beacon failed - browser may be blocking it")}else console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered")}else n||console.warn("[AuthController] No token found for signout request");console.log("[AuthController] Clearing mvvLegit state..."),mvvLegit.doSignout(),console.log("[AuthController] Setting signout timestamp..."),localStorage.setItem("mvv_ts",Date.now().toString()),console.log("[AuthController] Clearing entity state..."),this.#p(),console.log("[AuthController] Stopping auth ping..."),this.#_(),setTimeout(()=>{console.log("[AuthController] Performing hard refresh..."),typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(n){console.error("[AuthController] Signout error:",n),setTimeout(()=>{typeof neodigmUtils<"u"&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{const n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await n.json();return n.ok&&a.accessToken?(console.log("[AuthController] Signup successful - user needs to verify email"),this.#d(a.entity),{ok:!0,data:a}):{ok:!1,error:a.error||"Sign up failed",data:a}}catch(n){return console.error("[AuthController] Signup error:",n),{ok:!1,error:n.message}}}static async doResetHash(e,n){try{const a=mvvLegit.getConf()?.token,o=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({email:e,hash:n,modified_by:e})}),i=await o.json();return o.ok&&i.ok?(console.log("[AuthController] Password reset successful"),await this.doSignout(),{ok:!0,data:i}):{ok:!1,error:i.error||"Password reset failed",data:i}}catch(a){return console.error("[AuthController] Reset password error:",a),{ok:!1,error:a.message}}}static#g(){this.#t&&(console.log("[AuthController] Clearing existing ping interval"),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#h()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#_(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log("[AuthController] Auth ping stopped"))}static async#h(){try{const e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log("[AuthController] Ping success"):(e.status===401||e.status===403)&&(console.warn("[AuthController] Auth ping failed - signing out"),this.doSignout(!0))}catch(e){console.error("[AuthController] Ping error:",e)}}static setDeepLinkGuid(e){this.#i=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log("[AuthController] Deep-link GUID stored:",e)}static getDeepLinkGuid(){return this.#i}static clearDeepLink(){this.#i=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#m(){console.log("[AuthController] User authenticated"),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.fetchScope()}static#f(){console.log("[AuthController] User unauthenticated"),this.#_()}static#v(){console.log("[AuthController] User unverified")}static getAuthState(){try{const e=mvvLegit.getConf()?.LSKEY||"mvv",n=localStorage.getItem(e);if(!n)return"UNAUTH";if(typeof LZString>"u")return null;const a=LZString.decompressFromUTF16(n),i=JSON.parse(a)?.state;return i===1?"UNAUTH":i===2?"UNVERF":i===4?"AUTH":i===5?"FORGOT":null}catch{return null}}static isAuthenticated(){return this.getAuthState()==="AUTH"}static getConfig(){return this.CONFIG}static navigateTo(e){this.#s(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log("[AuthController] DEBUG: Manually triggering ping..."),await this.#h()}}class f{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",enter_email_and_password:"Enter email and password",sign_in:"Sign in",forgot_password:"Forgot password?",dont_have_an_account:"START YOUR FREE ACCOUNT",sign_up:"Sign up",please_enter_your_details_to_get_started:"Please enter your details to get started",already_have_an_account:"Already have an account?",log_in:"Log in",name:"Name",enter_your_name:"Enter your name",first_name:"First name",last_name:"Last name",company:"Company",phone:"Phone",confirm_password:"Confirm password",create_account:"Create account",home:"Home",dashboard:"Dashboard",correspondence:"Correspondence",settings:"Settings",sign_out:"Sign out",reset_password:"Reset password",new_password:"New password",confirm_new_password:"Confirm new password",enter_new_password:"Enter new password",enter_company_name:"Enter your company name",enter_phone_number:"Enter your phone number",reenter_password:"Re-enter your password",update_password:"Update password",update_your_password:"Update your account password",are_you_sure_sign_out:"Are you sure you want to sign out?",enter_email_for_reset:"Please enter your email to receive a password reset link",send_reset_link:"Send reset link",remember_password:"Remember your password?",cancel:"Cancel",save:"Save",delete:"Delete",edit:"Edit",loading:"Loading...",error:"Error",success:"Success",refresh:"Refresh",search:"Search",filter:"Filter",sort:"Sort",view:"View",close:"Close",submit:"Submit",back:"Back",next:"Next",previous:"Previous",confirm:"Confirm",yes:"Yes",no:"No",ok:"OK",validation_email_required:"Please enter your email",validation_email_invalid:"Please enter a valid email address",validation_password_required:"Please enter your password",validation_password_min_length:"Password must be at least 10 characters",validation_password_mismatch:"Passwords do not match",validation_first_name_required:"Please enter your first name",validation_last_name_required:"Please enter your last name",validation_new_password_required:"Please enter a new password",success_welcome_back:"Welcome back!",success_password_reset:"Password reset successfully",success_signed_out:"Signed out successfully",success_reset_link_sent:"Password reset link sent!|Please check your email",error_signin_failed:"Sign in failed",error_signup_failed:"Sign up failed",error_network:"Network error - please try again",error_password_reset_required:"Password reset required - redirecting...",loading_signing_in:"SIGNING IN...",loading_creating_account:"Creating account...",loading_resetting_password:"Resetting password...",nav_home:"Home",nav_home_tagline:"Dashboard and overview",nav_home_apps:"My Apps",nav_home_apps_tagline:"Your applications and integrations",nav_home_dash:"Dashboard",nav_home_dash_tagline:"Main dashboard and analytics",nav_engagements:"Engagements",nav_engagements_tagline:"Customer engagement tools and interactions",nav_develop:"Develop",nav_develop_tagline:"Development tools and resources",nav_profile:"Profile",nav_profile_tagline:"Account settings and preferences",nav_engagements_surveys:"Surveys",nav_engagements_surveys_tagline:"Create and manage customer surveys",nav_engagements_thumbs:"Feedback",nav_engagements_thumbs_tagline:"Collect thumbs up/down feedback",nav_engagements_voicemail:"Voicemail",nav_engagements_voicemail_tagline:"Voice message collection",nav_engagements_guidedtours:"Guided Tours",nav_engagements_guidedtours_tagline:"Interactive product tours",nav_engagements_slideshows:"Slideshows",nav_engagements_slideshows_tagline:"Content slideshows and presentations",nav_engagements_abtests:"A/B Tests",nav_engagements_abtests_tagline:"A/B testing campaigns",nav_engagements_questionnaires:"Questionnaires",nav_engagements_questionnaires_tagline:"Detailed questionnaires and forms",nav_develop_documentation:"Documentation",nav_develop_documentation_tagline:"API and product documentation",nav_develop_devtools:"Dev Tools",nav_develop_devtools_tagline:"Developer tools and utilities",nav_develop_kbase:"Knowledge Base",nav_develop_kbase_tagline:"Technical knowledge base and articles",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Hackathon events and challenges",nav_develop_partner:"Partner",nav_develop_partner_tagline:"Partner program and integrations",nav_develop_certification:"Certification",nav_develop_certification_tagline:"Developer certification programs",nav_profile_aboutme:"About Me",nav_profile_aboutme_tagline:"View and edit your personal information",nav_profile_badges:"Badges",nav_profile_badges_tagline:"View your earned badges and achievements",nav_profile_language:"Language",nav_profile_language_tagline:"Manage language settings and preferences",nav_reset_password:"Reset Password",nav_reset_password_tagline:"Change your account password",nav_sign_out:"Sign Out",nav_sign_out_tagline:"Sign out of your account",nav_account:"Account",nav_account_tagline:"Account management and support",nav_account_contact:"Contact",nav_account_contact_tagline:"Contact support and sales",nav_account_pricetier:"Price Tier",nav_account_pricetier_tagline:"View and manage pricing plans",nav_account_helpfaq:"Help & FAQ",nav_account_helpfaq_tagline:"Frequently asked questions and help",nav_account_team:"Team",nav_account_team_tagline:"Manage team members and permissions",nav_account_terms:"Terms",nav_account_terms_tagline:"Terms of service and legal agreements",nav_dashboard:"Dashboard",nav_dashboard_tagline:"Overview of your activity",nav_magnets:"Your Magnets",nav_magnets_tagline:"Manage your conversational magnets",nav_templates:"Templates",nav_templates_tagline:"Start from a magnet template",nav_conversations:"Conversations",nav_conversations_tagline:"Captured lead conversations",nav_ab_testing:"A/B Testing",nav_ab_testing_tagline:"Experiment and optimize",nav_analytics:"Analytics",nav_analytics_tagline:"Performance and ad metrics",nav_ad_accounts:"Ad Accounts",nav_ad_accounts_tagline:"Connect advertising accounts",nav_clients:"Clients",nav_clients_tagline:"Manage your client accounts",nav_team:"Team",nav_team_tagline:"Invite and manage teammates",nav_billing:"Billing",nav_billing_tagline:"Plan, usage, and invoices",nav_settings:"Settings",nav_settings_tagline:"Account and workspace settings",nav_home:"Home",nav_home_tagline:"Admin console home dashboard",nav_entities:"Entities",nav_entities_tagline:"Entity and account management",nav_accounts:"Accounts",nav_accounts_tagline:"User account management",nav_groups:"Groups",nav_groups_tagline:"Group and role management",nav_invoices:"Invoices",nav_invoices_tagline:"Invoice and billing management",nav_ab_tests:"A/B Tests",nav_ab_tests_tagline:"A/B testing campaigns",nav_feedback:"Feedback",nav_feedback_tagline:"User feedback collection",nav_guided_tours:"Guided Tours",nav_guided_tours_tagline:"Interactive product tours",nav_questionnaires:"Questionnaires",nav_questionnaires_tagline:"Detailed questionnaires and forms",nav_slideshows:"Slideshows",nav_slideshows_tagline:"Content slideshows and presentations",nav_surveys:"Surveys",nav_surveys_tagline:"Survey campaigns and analytics",nav_voicemail:"Voicemail",nav_voicemail_tagline:"Voice message management",nav_ethercards:"EtherCards",nav_ethercards_tagline:"EtherCards platform management",nav_apps:"Apps",nav_apps_tagline:"Application management",nav_channels:"Channels",nav_channels_tagline:"Communication channels",nav_messages:"Messages",nav_messages_tagline:"Message management and templates",nav_content:"Content",nav_content_tagline:"Content and asset management",nav_rss:"RSS",nav_rss_tagline:"RSS feed management and syndication",nav_core_assets:"Core Assets",nav_core_assets_tagline:"Manage core application assets and resources",nav_deeplinks:"Deeplinks",nav_deeplinks_tagline:"Deep link management and tracking",nav_snippets:"Snippets",nav_snippets_tagline:"Code and content snippet management",nav_rollers:"Rollers",nav_rollers_tagline:"Rolling deployments and version management",nav_support:"Support",nav_support_tagline:"Support and monitoring tools",nav_dialog:"Dialog",nav_dialog_tagline:"Dialog and modal management",nav_meter:"Meter",nav_meter_tagline:"Usage metering and analytics",nav_metadata:"Metadata",nav_metadata_tagline:"Metadata and configuration",nav_i18n:"I18N",nav_i18n_tagline:"Internationalization maintenance",nav_meta_maint:"Meta Maint",nav_meta_maint_tagline:"Metadata maintenance and configuration",nav_silos:"Silos",nav_silos_tagline:"Data silo management",nav_cache:"Cache",nav_cache_tagline:"Cache management and statistics",nav_lifecycle:"Lifecycle",nav_lifecycle_tagline:"Data lifecycle and retention policies",nav_notifications:"Notifications",nav_notifications_tagline:"Notification management",nav_bell_drawer:"Bell Drawer",nav_bell_drawer_tagline:"Notification drawer configuration",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Webhook configuration and monitoring",nav_language:"Language",nav_language_tagline:"Change language preferences"},es:{welcome_back:"Bienvenido de nuevo",please_enter_your_details:"Por favor ingrese sus datos",email:"Correo electrónico",enter_your_email:"Ingrese su correo electrónico",password:"Contraseña",enter_your_password:"Ingrese su contraseña",enter_email_and_password:"Ingrese correo y contraseña",sign_in:"Iniciar sesión",forgot_password:"¿Olvidó su contraseña?",dont_have_an_account:"¿No tiene una cuenta?",sign_up:"Registrarse",please_enter_your_details_to_get_started:"Ingrese sus datos para comenzar",already_have_an_account:"¿Ya tiene una cuenta?",log_in:"Iniciar sesión",name:"Nombre",enter_your_name:"Ingrese su nombre",first_name:"Nombre",last_name:"Apellido",company:"Empresa",phone:"Teléfono",confirm_password:"Confirmar contraseña",create_account:"Crear cuenta",home:"Inicio",dashboard:"Panel",correspondence:"Correspondencia",settings:"Configuración",sign_out:"Cerrar sesión",reset_password:"Restablecer contraseña",new_password:"Nueva contraseña",confirm_new_password:"Confirmar nueva contraseña",enter_new_password:"Ingrese nueva contraseña",enter_company_name:"Ingrese el nombre de su empresa",enter_phone_number:"Ingrese su número de teléfono",reenter_password:"Vuelva a ingresar su contraseña",update_password:"Actualizar contraseña",update_your_password:"Actualice la contraseña de su cuenta",are_you_sure_sign_out:"¿Está seguro de que desea cerrar sesión?",enter_email_for_reset:"Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",send_reset_link:"Enviar enlace de restablecimiento",remember_password:"¿Recuerda su contraseña?",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",edit:"Editar",loading:"Cargando...",error:"Error",success:"Éxito",refresh:"Actualizar",search:"Buscar",filter:"Filtrar",sort:"Ordenar",view:"Ver",close:"Cerrar",submit:"Enviar",back:"Atrás",next:"Siguiente",previous:"Anterior",confirm:"Confirmar",yes:"Sí",no:"No",ok:"OK",validation_email_required:"Por favor ingrese su correo electrónico",validation_email_invalid:"Por favor ingrese una dirección de correo válida",validation_password_required:"Por favor ingrese su contraseña",validation_password_min_length:"La contraseña debe tener al menos 10 caracteres",validation_password_mismatch:"Las contraseñas no coinciden",validation_first_name_required:"Por favor ingrese su nombre",validation_last_name_required:"Por favor ingrese su apellido",validation_new_password_required:"Por favor ingrese una nueva contraseña",success_welcome_back:"¡Bienvenido de nuevo!",success_password_reset:"Contraseña restablecida exitosamente",success_signed_out:"Sesión cerrada exitosamente",success_reset_link_sent:"¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",error_signin_failed:"Error al iniciar sesión",error_signup_failed:"Error al registrarse",error_network:"Error de red - por favor intente de nuevo",error_password_reset_required:"Restablecimiento de contraseña requerido - redirigiendo...",loading_signing_in:"INICIANDO SESIÓN...",loading_creating_account:"Creando cuenta...",loading_resetting_password:"Restableciendo contraseña...",nav_home:"Inicio",nav_home_tagline:"Panel y resumen",nav_home_apps:"Mis Aplicaciones",nav_home_apps_tagline:"Sus aplicaciones e integraciones",nav_home_dash:"Panel",nav_home_dash_tagline:"Panel principal y análisis",nav_engagements:"Compromisos",nav_engagements_tagline:"Herramientas de interacción con clientes",nav_develop:"Desarrollar",nav_develop_tagline:"Herramientas y recursos de desarrollo",nav_profile:"Perfil",nav_profile_tagline:"Configuración y preferencias de cuenta",nav_engagements_surveys:"Encuestas",nav_engagements_surveys_tagline:"Crear y gestionar encuestas de clientes",nav_engagements_thumbs:"Retroalimentación",nav_engagements_thumbs_tagline:"Recopilar opiniones positivas y negativas",nav_engagements_voicemail:"Buzón de voz",nav_engagements_voicemail_tagline:"Recopilación de mensajes de voz",nav_engagements_guidedtours:"Recorridos guiados",nav_engagements_guidedtours_tagline:"Recorridos interactivos de productos",nav_engagements_slideshows:"Presentaciones",nav_engagements_slideshows_tagline:"Presentaciones y diapositivas de contenido",nav_engagements_abtests:"Pruebas A/B",nav_engagements_abtests_tagline:"Campañas de pruebas A/B",nav_engagements_questionnaires:"Cuestionarios",nav_engagements_questionnaires_tagline:"Cuestionarios y formularios detallados",nav_develop_documentation:"Documentación",nav_develop_documentation_tagline:"Documentación de API y productos",nav_develop_devtools:"Herramientas Dev",nav_develop_devtools_tagline:"Herramientas y utilidades de desarrollo",nav_develop_kbase:"Base de Conocimientos",nav_develop_kbase_tagline:"Base de conocimientos y artículos técnicos",nav_develop_hackathon:"Hackathon",nav_develop_hackathon_tagline:"Eventos y desafíos de hackathon",nav_develop_partner:"Socio",nav_develop_partner_tagline:"Programa de socios e integraciones",nav_develop_certification:"Certificación",nav_develop_certification_tagline:"Programas de certificación para desarrolladores",nav_profile_aboutme:"Sobre Mí",nav_profile_aboutme_tagline:"Ver y editar su información personal",nav_profile_badges:"Insignias",nav_profile_badges_tagline:"Ver sus insignias y logros obtenidos",nav_profile_language:"Idioma",nav_profile_language_tagline:"Gestionar configuración y preferencias de idioma",nav_reset_password:"Restablecer Contraseña",nav_reset_password_tagline:"Cambiar la contraseña de su cuenta",nav_sign_out:"Cerrar Sesión",nav_sign_out_tagline:"Cerrar sesión de su cuenta",nav_account:"Cuenta",nav_account_tagline:"Gestión de cuenta y soporte",nav_account_contact:"Contacto",nav_account_contact_tagline:"Contactar con soporte y ventas",nav_account_pricetier:"Nivel de Precio",nav_account_pricetier_tagline:"Ver y gestionar planes de precios",nav_account_helpfaq:"Ayuda y FAQ",nav_account_helpfaq_tagline:"Preguntas frecuentes y ayuda",nav_account_team:"Equipo",nav_account_team_tagline:"Gestionar miembros del equipo y permisos",nav_account_terms:"Términos",nav_account_terms_tagline:"Términos de servicio y acuerdos legales",nav_home:"Inicio",nav_home_tagline:"Panel de inicio de la consola de administración",nav_silo_audits:"Auditorías de Silo",nav_silo_audits_tagline:"Auditar e inspeccionar datos de silo",nav_cache:"Caché",nav_cache_tagline:"Gestión de caché y estadísticas",nav_cache_stats:"Estadísticas",nav_cache_stats_tagline:"Estadísticas de rendimiento de caché",nav_dialog_links:"Enlaces de Diálogo",nav_dialog_links_tagline:"Gestionar configuraciones de enlaces de diálogo y modal",nav_i18n_maint:"Mant. I18n",nav_i18n_maint_tagline:"Mantenimiento de internacionalización y gestión de microcopia",nav_meta_maint:"Mant. Meta",nav_meta_maint_tagline:"Mantenimiento de metadatos y configuración",nav_bell_drawer:"Cajón de Campana",nav_bell_drawer_tagline:"Gestión de notificaciones y configuración del cajón de campana",nav_meter:"Medidor",nav_meter_tagline:"Medición de uso y analíticas",nav_deeplinks:"Enlaces Profundos",nav_deeplinks_tagline:"Gestión y seguimiento de enlaces profundos",nav_rss:"RSS",nav_rss_tagline:"Gestión de feeds RSS y sindicación",nav_core_assets:"Activos Principales",nav_core_assets_tagline:"Gestionar activos y recursos principales de la aplicación",nav_web_hooks:"Web Hooks",nav_web_hooks_tagline:"Configuración y monitoreo de webhooks",nav_snippets:"Fragmentos",nav_snippets_tagline:"Gestión de fragmentos de código y contenido",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"Fragmentos y plantillas de consultas SQL",nav_snippets_js:"JS",nav_snippets_js_tagline:"Fragmentos de código JavaScript",nav_rollers:"Rollers",nav_rollers_tagline:"Despliegues progresivos y gestión de versiones",nav_rollers_primary_nav:"Nav Primaria",nav_rollers_primary_nav_tagline:"Configuración del roller de navegación primaria"},"zh-Hans":{welcome_back:"欢迎回来",please_enter_your_details:"请输入您的详细信息",email:"电子邮件",enter_your_email:"输入您的电子邮件",password:"密码",enter_your_password:"输入您的密码",enter_email_and_password:"输入邮箱和密码",sign_in:"登入",forgot_password:"忘记密码？",dont_have_an_account:"没有账户？",sign_up:"报名",please_enter_your_details_to_get_started:"请输入您的详细信息以开始",already_have_an_account:"已有账户？",log_in:"登录",name:"姓名",enter_your_name:"输入您的姓名",first_name:"名字",last_name:"姓氏",company:"公司",phone:"电话",confirm_password:"确认密码",create_account:"创建账户",home:"首页",dashboard:"仪表板",correspondence:"信件",settings:"设置",sign_out:"登出",reset_password:"重置密码",new_password:"新密码",confirm_new_password:"确认新密码",enter_new_password:"输入新密码",enter_company_name:"输入您的公司名称",enter_phone_number:"输入您的电话号码",reenter_password:"重新输入您的密码",update_password:"更新密码",update_your_password:"更新您的账户密码",are_you_sure_sign_out:"您确定要登出吗？",enter_email_for_reset:"请输入您的电子邮件以接收密码重置链接",send_reset_link:"发送重置链接",remember_password:"记得您的密码？",cancel:"取消",save:"保存",delete:"删除",edit:"编辑",loading:"加载中...",error:"错误",success:"成功",refresh:"刷新",search:"搜索",filter:"筛选",sort:"排序",view:"查看",close:"关闭",submit:"提交",back:"返回",next:"下一个",previous:"上一个",confirm:"确认",yes:"是",no:"否",ok:"确定",validation_email_required:"请输入您的电子邮件",validation_email_invalid:"请输入有效的电子邮件地址",validation_password_required:"请输入您的密码",validation_password_min_length:"密码必须至少10个字符",validation_password_mismatch:"密码不匹配",validation_first_name_required:"请输入您的名字",validation_last_name_required:"请输入您的姓氏",validation_new_password_required:"请输入新密码",success_welcome_back:"欢迎回来！",success_password_reset:"密码重置成功",success_signed_out:"成功登出",success_reset_link_sent:"密码重置链接已发送！|请检查您的电子邮件",error_signin_failed:"登录失败",error_signup_failed:"注册失败",error_network:"网络错误 - 请重试",error_password_reset_required:"需要重置密码 - 正在重定向...",loading_signing_in:"正在登录...",loading_creating_account:"正在创建账户...",loading_resetting_password:"正在重置密码...",nav_home:"首页",nav_home_tagline:"仪表板和概览",nav_home_apps:"我的应用",nav_home_apps_tagline:"您的应用程序和集成",nav_home_dash:"仪表板",nav_home_dash_tagline:"主仪表板和分析",nav_engagements:"互动",nav_engagements_tagline:"客户互动工具和交互",nav_develop:"开发",nav_develop_tagline:"开发工具和资源",nav_profile:"个人资料",nav_profile_tagline:"账户设置和偏好",nav_engagements_surveys:"调查",nav_engagements_surveys_tagline:"创建和管理客户调查",nav_engagements_thumbs:"反馈",nav_engagements_thumbs_tagline:"收集赞成和反对意见",nav_engagements_voicemail:"语音信箱",nav_engagements_voicemail_tagline:"语音留言收集",nav_engagements_guidedtours:"引导式导览",nav_engagements_guidedtours_tagline:"交互式产品导览",nav_engagements_slideshows:"幻灯片",nav_engagements_slideshows_tagline:"内容幻灯片和演示",nav_engagements_abtests:"A/B测试",nav_engagements_abtests_tagline:"A/B测试活动",nav_engagements_questionnaires:"问卷",nav_engagements_questionnaires_tagline:"详细问卷和表单",nav_develop_documentation:"文档",nav_develop_documentation_tagline:"API和产品文档",nav_develop_devtools:"开发工具",nav_develop_devtools_tagline:"开发者工具和实用程序",nav_develop_kbase:"知识库",nav_develop_kbase_tagline:"技术知识库和文章",nav_develop_hackathon:"黑客马拉松",nav_develop_hackathon_tagline:"黑客马拉松活动和挑战",nav_develop_partner:"合作伙伴",nav_develop_partner_tagline:"合作伙伴计划和集成",nav_develop_certification:"认证",nav_develop_certification_tagline:"开发者认证计划",nav_profile_aboutme:"关于我",nav_profile_aboutme_tagline:"查看和编辑您的个人信息",nav_profile_badges:"徽章",nav_profile_badges_tagline:"查看您获得的徽章和成就",nav_profile_language:"语言",nav_profile_language_tagline:"管理语言设置和偏好",nav_reset_password:"重置密码",nav_reset_password_tagline:"更改您的账户密码",nav_sign_out:"登出",nav_sign_out_tagline:"退出您的账户",nav_account:"账户",nav_account_tagline:"账户管理和支持",nav_account_contact:"联系",nav_account_contact_tagline:"联系支持和销售",nav_account_pricetier:"价格等级",nav_account_pricetier_tagline:"查看和管理定价计划",nav_account_helpfaq:"帮助和常见问题",nav_account_helpfaq_tagline:"常见问题和帮助",nav_account_team:"团队",nav_account_team_tagline:"管理团队成员和权限",nav_account_terms:"条款",nav_account_terms_tagline:"服务条款和法律协议",nav_home:"主页",nav_home_tagline:"管理控制台主页仪表板",nav_silo_audits:"仓库审计",nav_silo_audits_tagline:"审计和检查仓库数据",nav_cache:"缓存",nav_cache_tagline:"缓存管理和统计",nav_cache_stats:"统计",nav_cache_stats_tagline:"缓存性能统计",nav_dialog_links:"对话框链接",nav_dialog_links_tagline:"管理对话框和模态链接配置",nav_i18n_maint:"国际化维护",nav_i18n_maint_tagline:"国际化维护和微文案管理",nav_meta_maint:"元数据维护",nav_meta_maint_tagline:"元数据维护和配置",nav_bell_drawer:"铃铛抽屉",nav_bell_drawer_tagline:"通知管理和铃铛抽屉配置",nav_meter:"计量器",nav_meter_tagline:"使用计量和分析",nav_deeplinks:"深层链接",nav_deeplinks_tagline:"深层链接管理和跟踪",nav_rss:"RSS",nav_rss_tagline:"RSS订阅源管理和联合",nav_core_assets:"核心资产",nav_core_assets_tagline:"管理核心应用程序资产和资源",nav_web_hooks:"网络钩子",nav_web_hooks_tagline:"Webhook配置和监控",nav_snippets:"代码片段",nav_snippets_tagline:"代码和内容片段管理",nav_snippets_sql:"SQL",nav_snippets_sql_tagline:"SQL查询片段和模板",nav_snippets_js:"JS",nav_snippets_js_tagline:"JavaScript代码片段",nav_rollers:"滚动器",nav_rollers_tagline:"滚动部署和版本管理",nav_rollers_primary_nav:"主导航",nav_rollers_primary_nav_tagline:"主导航滚动器配置"}}}},SIT:{SSE:{M5T:{en:{welcome_back:["Welcome back","Good to see you again","Hello again"],please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},UAT:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},QA:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}},PROD:{SSE:{M5T:{en:{welcome_back:"Welcome back",please_enter_your_details:"Please enter your details",email:"Email",enter_your_email:"Enter your email",password:"Password",enter_your_password:"Enter your password",sign_in:"Sign in"}}}}};static#t={buildMode:"DEV",product:"SSE",whitelabel:"M5T",lang:"en"};static setContext({buildMode:e,product:n,whitelabel:a,lang:o}){e&&(this.#t.buildMode=e),n&&(this.#t.product=n),a&&(this.#t.whitelabel=a),o&&(this.#t.lang=o)}static getContext(){return{...this.#t}}static get(e,n={}){const a={...this.#t,...n},{buildMode:o,product:i,whitelabel:s,lang:r}=a;try{const u=this.#e[o]?.[i]?.[s]?.[r]?.[e];return u?Array.isArray(u)?u[Math.floor(Math.random()*u.length)]:u:(console.warn(`[MicrocopyManager] Token not found: ${e} (${o}/${i}/${s}/${r})`),null)}catch(u){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,u),null}}static getAll(e={}){const n={...this.#t,...e},{buildMode:a,product:o,whitelabel:i,lang:s}=n;try{return this.#e[a]?.[o]?.[i]?.[s]||null}catch(r){return console.error("[MicrocopyManager] Error retrieving all tokens",r),null}}static has(e,n={}){const a={...this.#t,...n},{buildMode:o,product:i,whitelabel:s,lang:r}=a;try{return!!this.#e[o]?.[i]?.[s]?.[r]?.[e]}catch{return!1}}static getAvailableLanguages(){const{buildMode:e,product:n,whitelabel:a}=this.#t;try{return Object.keys(this.#e[e]?.[n]?.[a]||{})}catch{return[]}}static update(e,n,a={}){const o={...this.#t,...a},{buildMode:i,product:s,whitelabel:r,lang:u}=o;try{return this.#e[i]||(this.#e[i]={}),this.#e[i][s]||(this.#e[i][s]={}),this.#e[i][s][r]||(this.#e[i][s][r]={}),this.#e[i][s][r][u]||(this.#e[i][s][r][u]={}),this.#e[i][s][r][u][e]=n,!0}catch(p){return console.error(`[MicrocopyManager] Error updating token: ${e}`,p),!1}}static delete(e,n={}){const a={...this.#t,...n},{buildMode:o,product:i,whitelabel:s,lang:r}=a;try{return delete this.#e[o]?.[i]?.[s]?.[r]?.[e],!0}catch(u){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,u),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(n){return console.error("[MicrocopyManager] Error importing data",n),!1}}}typeof module<"u"&&module.exports&&(module.exports={MicrocopyManager:f});class D{static#e=!1;static#t=null;static#o=null;static initialize(){if(this.#e){console.warn("[I18nController] Already initialized");return}const e=this.#a();f.setContext(e),console.log("[I18nController] Initialized with context:",e),console.log("[I18nController] Available languages:",this.getAvailableLanguages()),I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Debug mode enabled"),this.#i(),this.#u(),this.#e=!0,this.refresh()}static#n(e){const n={development:"LOCAL",local:"LOCAL",dev:"DEV",sit:"SIT",qa:"QA",uat:"QA",production:"PROD",prod:"PROD"},a=e.toLowerCase();return n[a]||"DEV"}static#a(){const n=this.#n("production"),a=localStorage.getItem(I.FF_SSE_LS_WHITELABEL)||I.FF_SSE_I18N_WHITELABEL,o=localStorage.getItem(I.FF_SSE_LS_USER_LANG)||I.FF_SSE_I18N_LANG;return{buildMode:n,product:I.FF_SSE_I18N_PRODUCT,whitelabel:a,lang:o}}static#i(){typeof neodigmCarousel<"u"&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,n,a)=>{I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Route changed:",a),this.#t=a,setTimeout(()=>{this.refresh()},I.FF_SSE_I18N_APPLY_DELAY_MS)},I.FF_CLIENT_CAROUSEL_ID):(console.warn("[I18nController] neodigmCarousel not found. Using fallback polling."),this.#r())}static#r(){setInterval(()=>{const n=document.querySelector("[data-n55-carousel-page-name]")?.getAttribute("data-n55-carousel-page-name");n&&n!==this.#t&&(this.#t=n,this.refresh())},500)}static#u(){this.#o||(this.#o=new MutationObserver(e=>{let n=!1;for(const a of e){for(const o of a.addedNodes)if(o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("data-meta-copywrite-i118n")||o.querySelector("[data-meta-copywrite-i118n]"))){n=!0;break}if(n)break}n&&(I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] DOM mutation detected, refreshing i18n"),this.refresh())}),this.#o.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn("[I18nController] Not initialized. Call initialize() first.");return}this.#s(document.body),this.#l(document.body),I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Refresh complete")}static#s(e){const n=e.querySelectorAll("[data-meta-copywrite-i118n]");I.FF_SSE_I18N_DEBUG&&n.length>0&&console.log(`[I18nController] Processing ${n.length} elements`),n.forEach(a=>{try{const o=a.getAttribute("data-meta-copywrite-i118n"),i=JSON.parse(o);if(!i.token){console.warn("[I18nController] Missing token in config:",i);return}const s=i.attribute||"textContent",r=f.get(i.token);if(r===null){console.warn(`[I18nController] Microcopy not found for token: ${i.token}`);return}s==="textContent"?a.textContent=r:s==="innerHTML"?a.innerHTML=r:a.setAttribute(s,r),I.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${r}" to ${s} for token: ${i.token}`)}catch(o){console.error("[I18nController] Error processing element:",o,a)}})}static#l(e){e.querySelectorAll("*").forEach(a=>{a.shadowRoot&&(this.#s(a.shadowRoot),this.#l(a.shadowRoot))})}static setLanguage(e){const n=f.getAvailableLanguages();if(!n.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,n);return}localStorage.setItem(I.FF_SSE_LS_USER_LANG,e),f.setContext({lang:e}),console.log("[I18nController] Language changed to:",e);const a=new CustomEvent("language-changed",{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(a),this.refresh()}static setWhitelabel(e){localStorage.setItem(I.FF_SSE_LS_WHITELABEL,e),f.setContext({whitelabel:e}),I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Whitelabel changed to:",e),this.refresh()}static getLanguage(){return f.getContext().lang}static getAvailableLanguages(){return f.getAvailableLanguages()}static getContext(){return f.getContext()}static destroy(){this.#o&&(this.#o.disconnect(),this.#o=null),this.#e=!1,this.#t=null,I.FF_SSE_I18N_DEBUG&&console.log("[I18nController] Destroyed")}}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{D.initialize()}):D.initialize());class Se{static _initialized=!1;static _debug=!1;static init(e={}){if(this._initialized)return console.warn("[MachVive] Already initialized, skipping duplicate initialization"),this;if(this._debug=e.debug||!1,!window.mvvSSEther)return console.error("[MachVive] mvvSSEther not found - cannot initialize bridge"),console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()"),this;console.log("[MachVive] Initializing SSE to PubSub bridge...");const n=a=>{this._handleSSEMessage(a)};return window.mvvSSEther.onmessage(n),this._initialized=!0,console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully"),console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage"),this}static _handleSSEMessage(e){try{this._debug&&console.log("[MachVive] SSE message received:",e);const n=e?.data;if(!n){this._debug&&console.log("[MachVive] No data in message, skipping");return}const a=n.data||n.package||n;if(!a){this._debug&&console.log("[MachVive] No package found in message, skipping");return}let o=a.cfg;const i=a.msg;if(this._debug&&(console.log("[MachVive] cfg (raw):",o,"type:",typeof o,"length:",o?.length),console.log("[MachVive] msg (raw):",i)),typeof o=="string"){if(o.trim()===""){this._debug&&console.log("[MachVive] cfg is empty string, skipping");return}try{o=JSON.parse(o),console.log("[MachVive] cfg (parsed):",o)}catch(r){console.warn("[MachVive] Failed to parse cfg as JSON:",{cfg:o,cfgLength:o.length,error:r.message});return}}else if(!o){this._debug&&console.log("[MachVive] cfg is empty/null, skipping");return}const s=o?.topic;if(!s){this._debug&&console.log("[MachVive] No topic found in cfg, skipping");return}if(console.log("[MachVive] Extracted topic:",s),!this._isValidTopic(s)){console.warn(`[MachVive] Topic '${s}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(s,i,e,n)}catch(n){console.error("[MachVive] Error handling SSE message:",n)}}static _isValidTopic(e){return!c||!c.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,n,a,o){try{if(!window.PubSub&&typeof PubSub>"u"){console.error("[MachVive] PubSub not available");return}const i=window.PubSub||PubSub,s={message:n,metadata:{source:"sse",sseEventId:a.id,timestamp:a.timestamp,appGuid:o.app_guid,channelGuid:o.channel_guid,eventAction:o.event_action,status:o.status,class:o.class,raw:o}};console.log(`[MachVive] Publishing to topic '${e}':`,s);const r=c[e];console.log(`[MachVive] AppBroadcast.${e} = '${r}'`),i.publish(r,s),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(i){console.error(`[MachVive] Error publishing to topic '${e}':`,i)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?"enabled":"disabled"}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log("[MachVive] Reset complete"),this}}typeof module<"u"&&module.exports&&(module.exports=Se);typeof window<"u"&&(window.MachVive=Se);const Pe="m5t_sidenav_collapsed",en={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class tn extends HTMLElement{static get observedAttributes(){return["data-active-token","data-collapsed"]}constructor(){super(),this.attachShadow({mode:"open"}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=e=>{if(this.getAttribute("data-open")==="true"){if(e.key==="Escape"){e.preventDefault(),this.closeDrawer();return}if(e.key==="Tab"){const n=this.#p();if(n.length<2)return;const a=n[0],o=n[n.length-1],i=this.shadowRoot.activeElement;e.shiftKey&&i===a?(e.preventDefault(),o.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),a.focus())}}};#o=()=>{this.closeDrawer(),this.#c()};connectedCallback(){if(!this.hasAttribute("data-collapsed"))try{localStorage.getItem(Pe)==="true"&&this.setAttribute("data-collapsed","true")}catch{}this.activeToken=this.getAttribute("data-active-token")||null,this.render(),this.#l(),this.addEventListener("keydown",this.#t),this.#e=window.matchMedia("(max-width: 768px)"),this.#e.addEventListener("change",this.#o),this.#c()}disconnectedCallback(){this.removeEventListener("keydown",this.#t),this.#e?.removeEventListener("change",this.#o)}attributeChangedCallback(e,n,a){n===a||!this.shadowRoot||(e==="data-active-token"?(this.activeToken=a,this.#d()):e==="data-collapsed"&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:e,orgs:n,activeOrg:a,footerBadge:o,loading:i}={}){e!==void 0&&(this.items=Array.isArray(e)?e:this.#n(e)||[]),n!==void 0&&(this.orgs=Array.isArray(n)?n:this.#n(n)||[]),a!==void 0&&(this.activeOrgGuid=a||null),o!==void 0&&(this.footerBadge=o||null),i!==void 0&&(this.loading=!!i),this.shadowRoot&&(this.render(),this.#l())}setButtons(e){this.setState({buttons:e})}setOrgs(e){this.setState({orgs:e})}setActiveOrgGuid(e){this.setState({activeOrg:e})}setFooterBadge(e){this.setState({footerBadge:e})}setActiveToken(e){this.activeToken=e||null,this.#d()}toggleCollapsed(e){const n=typeof e=="boolean"?e:this.getAttribute("data-collapsed")!=="true";this.setAttribute("data-collapsed",String(n));try{localStorage.setItem(Pe,String(n))}catch{}this.dispatchEvent(new CustomEvent("nav-collapse",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.COLLAPSE",collapsed:n,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute("data-open","true"),this.shadowRoot.querySelector(".hamburger")?.setAttribute("aria-expanded","true"),this.#c(),(this.#p()[0]||this.shadowRoot.querySelector(".sidenav"))?.focus?.()}closeDrawer(){if(this.getAttribute("data-open")!=="true")return;this.removeAttribute("data-open");const e=this.shadowRoot.querySelector(".hamburger");e?.setAttribute("aria-expanded","false"),this.#c(),e&&this.#e?.matches?e.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute("data-open")==="true"?this.closeDrawer():this.openDrawer()}#n(e){try{return e?JSON.parse(e):null}catch(n){return console.error("[M5TSideNav] bad JSON:",n),null}}#a(e){return String(e??"").replace(/[&<>"']/g,n=>en[n])}#i(e){return e?`<span class="ms" aria-hidden="true">${this.#a(e)}</span>`:""}#r(e){if(!e||!e.token)return"";const n=e.token===this.activeToken,a=e.route||"#",o=a.startsWith("#")?a:`#${a}`,i=typeof e.count=="number"&&e.count>0?`<span class="badge">${e.count}</span>`:"";return`
      <a class="nav-item${n?" active":""}" href="${this.#a(o)}"
         data-token="${this.#a(e.token)}" data-route="${this.#a(a)}"
         ${n?'aria-current="page"':""}
         ${e.tagline?`title="${this.#a(e.tagline)}"`:""}>
        ${this.#i(e.icon)}
        <span class="label">${this.#a(e.caption||e.token)}</span>
        ${i}
      </a>`}#u(){return this.loading?Array.from({length:6}).map(()=>'<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>').join(""):this.items.map(e=>e&&e.group&&Array.isArray(e.items)?`
          <div class="nav-group">
            <div class="group-label">${this.#a(e.caption||"")}</div>
            ${e.items.map(n=>this.#r(n)).join("")}
          </div>`:this.#r(e)).join("")}#s(){const e=this.footerBadge,n=Array.isArray(this.orgs)&&this.orgs.length>1?`
      <label class="org-switcher" title="Active organization">
        ${this.#i("corporate_fare")}
        <select class="org-select" aria-label="Active organization">
          ${this.orgs.map(o=>`<option value="${this.#a(o.guid)}" ${o.guid===this.activeOrgGuid?"selected":""}>${this.#a(o.name||o.guid)}</option>`).join("")}
        </select>
      </label>`:"",a=e?`<span class="footer-badge">${this.#i(e.icon||"verified")}<span>${this.#a(e.caption||"")}</span></span>`:"";return`
      ${n}
      ${a}
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
    `}#l(){this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",n=>{n.metaKey||n.ctrlKey||n.shiftKey||n.button===1||(n.preventDefault(),this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.TAP",token:e.getAttribute("data-token"),route:e.getAttribute("data-route"),caption:e.querySelector(".label")?.textContent||"",timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(".collapse-btn")?.addEventListener("click",()=>this.toggleCollapsed()),this.shadowRoot.querySelector(".hamburger")?.addEventListener("click",()=>this.toggleDrawer()),this.shadowRoot.querySelector(".scrim")?.addEventListener("click",()=>this.closeDrawer()),this.#c(),this.shadowRoot.querySelector(".logo")?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.LOGO_TAP",timestamp:Date.now()}}))}),this.shadowRoot.querySelector(".org-select")?.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("org-switch",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.ORG_SWITCH",orgGuid:e.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(".footer-action").forEach(e=>{e.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("footer-action",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_SIDE_NAV.FOOTER_ACTION",action:e.getAttribute("data-action"),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute("data-open")==="true"&&this.#p()[0]?.focus()}#d(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".nav-item").forEach(e=>{const n=e.getAttribute("data-token")===this.activeToken;e.classList.toggle("active",n),n?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}#p(){return Array.from(this.shadowRoot.querySelectorAll(".sidenav a[href], .sidenav button:not([disabled]), .sidenav select")).filter(e=>e.offsetParent!==null)}#c(){const e=this.shadowRoot?.querySelector(".sidenav");if(!e)return;const n=this.#e?this.#e.matches:window.matchMedia("(max-width: 768px)").matches;e.inert=n&&this.getAttribute("data-open")!=="true"}}customElements.define("m5t-side-nav",tn);class oe{static#e=null;static#t={"client-saas":[{token:"HOME",caption:"Home",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Home Landing Page",secondary:[{token:"HOME_APPS",caption:"My Apps",enabled:!0,icon:"--icon",admin_role:!1,tagline:"My Apps"},{token:"HOME_DASH",caption:"Dashboard",enabled:!0,icon:"--icon",admin_role:!1,tagline:"Dashboard"}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"var(--icon-engagements)",admin_role:!1,tagline:"Customer engagement tools and interactions",secondary:[{token:"ENGAGEMENTS_SURVEYS",caption:"Surveys",enabled:!0,icon:"var(--icon-surveys)",admin_role:!1,tagline:"Create and manage customer surveys",secondary:[]},{token:"ENGAGEMENTS_THUMBS",caption:"Feedback",enabled:!0,icon:"var(--icon-feedback)",admin_role:!1,tagline:"Quick thumbs up/down feedback",secondary:[]},{token:"ENGAGEMENTS_VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"var(--icon-voicemail)",admin_role:!1,tagline:"Voice message collection",secondary:[]},{token:"ENGAGEMENTS_GUIDEDTOURS",caption:"Guided Tours",enabled:!0,icon:"var(--icon-guided-tours)",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"ENGAGEMENTS_SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"var(--icon-slideshows)",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"ENGAGEMENTS_ABTESTS",caption:"A/B Tests",enabled:!0,icon:"var(--icon-ab-tests)",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"ENGAGEMENTS_QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"var(--icon-questionnaires)",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]}]},{token:"DEVELOP",caption:"Develop",enabled:!0,icon:"var(--icon-develop)",admin_role:!1,tagline:"Developer resources and tools",secondary:[{token:"DEVELOP_DOCUMENTATION",caption:"Documentation",enabled:!0,icon:"var(--icon-documentation)",admin_role:!1,tagline:"API and product documentation",secondary:[]},{token:"DEVELOP_DEVTOOLS",caption:"Dev Tools",enabled:!0,icon:"var(--icon-dev-tools)",admin_role:!1,tagline:"Developer tools and utilities",secondary:[]},{token:"DEVELOP_KBASE",caption:"Knowledge Base",enabled:!0,icon:"var(--icon-knowledge-base)",admin_role:!1,tagline:"Technical knowledge base and articles",secondary:[]},{token:"DEVELOP_HACKATHON",caption:"Hackathon",enabled:!0,icon:"var(--icon-hackathon)",admin_role:!1,tagline:"Hackathon events and challenges",secondary:[]},{token:"DEVELOP_PARTNER",caption:"Partner",enabled:!0,icon:"var(--icon-partner)",admin_role:!1,tagline:"Partner program and integrations",secondary:[]},{token:"DEVELOP_CERTIFICATION",caption:"Certification",enabled:!0,icon:"var(--icon-certification)",admin_role:!1,tagline:"Developer certification programs",secondary:[]}]},{token:"PROFILE",caption:"Profile",enabled:!0,icon:"var(--icon-profile)",admin_role:!1,tagline:"Manage your personal profile and account",secondary:[{token:"PROFILE_ABOUTME",caption:"About Me",enabled:!0,icon:"var(--icon-about-me)",admin_role:!1,tagline:"View and edit your personal information",secondary:[]},{token:"PROFILE_BADGES",caption:"Badges",enabled:!0,icon:"var(--icon-badges)",admin_role:!1,tagline:"View your earned badges and achievements",secondary:[]},{token:"PROFILE_LANGUAGE",caption:"Language",enabled:!0,icon:"var(--icon-profile-language)",admin_role:!1,tagline:"Manage language settings and preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Change Password",enabled:!0,icon:"var(--icon-change-password)",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"var(--icon-sign-out)",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"var(--icon-account)",admin_role:!1,tagline:"Account management and support",secondary:[{token:"ACCOUNT_CONTACT",caption:"Contact",enabled:!0,icon:"var(--icon-contact)",admin_role:!1,tagline:"Contact support and sales",secondary:[]},{token:"ACCOUNT_PRICETIER",caption:"Price Tier",enabled:!0,icon:"var(--icon-price-tier)",admin_role:!1,tagline:"View and manage pricing plans",secondary:[]},{token:"ACCOUNT_HELPFAQ",caption:"Help FAQ",enabled:!0,icon:"var(--icon-help-faq)",admin_role:!1,tagline:"Frequently asked questions",secondary:[]},{token:"ACCOUNT_TEAM",caption:"Team",enabled:!0,icon:"var(--icon-team)",admin_role:!1,tagline:"Manage team members and roles",secondary:[]},{token:"ACCOUNT_TERMS",caption:"Terms",enabled:!0,icon:"var(--icon-terms)",admin_role:!1,tagline:"Terms of service and legal documents",secondary:[]}]}],"client-sse-console":[{token:"HOME",caption:"Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Admin console home dashboard",secondary:[]},{token:"ENTITIES",caption:"Entities",enabled:!0,icon:"fas fa-users",admin_role:!1,tagline:"Entity and account management",secondary:[{token:"ACCOUNTS",caption:"Accounts",enabled:!0,icon:"fas fa-user",admin_role:!1,tagline:"User account management",secondary:[]},{token:"GROUPS",caption:"Groups",enabled:!0,icon:"fas fa-users-cog",admin_role:!1,tagline:"Group and role management",secondary:[]},{token:"INVOICES",caption:"Invoices",enabled:!0,icon:"fas fa-file-invoice-dollar",admin_role:!1,tagline:"Invoice and billing management",secondary:[]}]},{token:"CONTENT",caption:"Content",enabled:!0,icon:"fas fa-folder-open",admin_role:!1,tagline:"Content and asset management",secondary:[{token:"RSS",caption:"RSS",enabled:!0,icon:"fas fa-rss",admin_role:!1,tagline:"RSS feed management and syndication",secondary:[]},{token:"CORE_ASSETS",caption:"Core Assets",enabled:!0,icon:"fas fa-box",admin_role:!1,tagline:"Manage core application assets and resources",secondary:[]},{token:"DEEPLINKS",caption:"Deeplinks",enabled:!0,icon:"fas fa-anchor",admin_role:!1,tagline:"Deep link management and tracking",secondary:[]},{token:"SNIPPETS",caption:"Snippets",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Code and content snippet management",secondary:[]},{token:"ROLLERS",caption:"Rollers",enabled:!0,icon:"fas fa-sync-alt",admin_role:!1,tagline:"Rolling deployments and version management",secondary:[]}]},{token:"SUPPORT",caption:"Support",enabled:!0,icon:"fas fa-life-ring",admin_role:!1,tagline:"Support and monitoring tools",secondary:[{token:"DIALOG",caption:"Dialog",enabled:!0,icon:"fas fa-comment-alt",admin_role:!1,tagline:"Dialog and modal management",secondary:[]},{token:"HEALTH",caption:"Health",enabled:!0,icon:"fas fa-heartbeat",admin_role:!1,tagline:"API health and authentication testing",secondary:[]},{token:"METER",caption:"Meter",enabled:!0,icon:"fas fa-tachometer-alt",admin_role:!1,tagline:"Usage metering and analytics",secondary:[]}]},{token:"METADATA",caption:"Metadata",enabled:!0,icon:"fas fa-cog",admin_role:!1,tagline:"Metadata and configuration",secondary:[{token:"I18N",caption:"I18N",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Internationalization maintenance",secondary:[]},{token:"META_MAINT",caption:"Meta Maint",enabled:!0,icon:"fas fa-tools",admin_role:!1,tagline:"Metadata maintenance and configuration",secondary:[]}]},{token:"SILOS",caption:"Silos",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Data silo management",secondary:[{token:"CACHE",caption:"Cache",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Cache management and statistics",secondary:[]},{token:"LIFECYCLE",caption:"Lifecycle",enabled:!0,icon:"fas fa-recycle",admin_role:!1,tagline:"Data lifecycle and retention policies",secondary:[]}]},{token:"LEADS",caption:"Leads",enabled:!0,icon:"fas fa-user-plus",admin_role:!1,tagline:"Lead management and tracking",secondary:[{token:"LEADS_MANAGE",caption:"Manage",enabled:!0,icon:"fas fa-list-ul",admin_role:!1,tagline:"Manage leads (CRUD operations)",secondary:[]},{token:"LEADS_EXPORT",caption:"Export",enabled:!0,icon:"fas fa-file-export",admin_role:!1,tagline:"Export leads to external systems",secondary:[]}]},{token:"NOTIFICATIONS",caption:"Notifications",enabled:!0,icon:"fas fa-bell",admin_role:!1,tagline:"Notification management",secondary:[{token:"BELL_DRAWER",caption:"Bell Drawer",enabled:!0,icon:"fas fa-inbox",admin_role:!1,tagline:"Notification drawer configuration",secondary:[]},{token:"WEB_HOOKS",caption:"Web Hooks",enabled:!0,icon:"fas fa-webhook",admin_role:!1,tagline:"Webhook configuration and monitoring",secondary:[]}]},{token:"ACCOUNT",caption:"Account",enabled:!0,icon:"fas fa-user-circle",admin_role:!1,tagline:"Account settings and actions",secondary:[{token:"LANGUAGE",caption:"Language",enabled:!0,icon:"fas fa-language",admin_role:!1,tagline:"Change language preferences",secondary:[]},{token:"RESET_PASSWORD",caption:"Reset Password",enabled:!0,icon:"fas fa-key",admin_role:!1,tagline:"Change your account password",secondary:[]},{token:"SIGN_OUT",caption:"Sign Out",enabled:!0,icon:"fas fa-sign-out-alt",admin_role:!1,tagline:"Log out of your account",secondary:[]}]},{token:"ENGAGEMENTS",caption:"Engagements",enabled:!0,icon:"fas fa-chart-line",admin_role:!1,tagline:"User engagement tools",secondary:[{token:"AB_TESTS",caption:"A/B Tests",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"A/B testing campaigns",secondary:[]},{token:"FEEDBACK",caption:"Feedback",enabled:!0,icon:"fas fa-comments",admin_role:!1,tagline:"User feedback collection",secondary:[]},{token:"GUIDED_TOURS",caption:"Guided Tours",enabled:!0,icon:"fas fa-route",admin_role:!1,tagline:"Interactive product tours",secondary:[]},{token:"QUESTIONNAIRES",caption:"Questionnaires",enabled:!0,icon:"fas fa-clipboard-list",admin_role:!1,tagline:"Detailed questionnaires and forms",secondary:[]},{token:"SLIDESHOWS",caption:"Slideshows",enabled:!0,icon:"fas fa-images",admin_role:!1,tagline:"Content slideshows and presentations",secondary:[]},{token:"SURVEYS",caption:"Surveys",enabled:!0,icon:"fas fa-poll",admin_role:!1,tagline:"Survey campaigns and analytics",secondary:[]},{token:"VOICEMAIL",caption:"Voicemail",enabled:!0,icon:"fas fa-voicemail",admin_role:!1,tagline:"Voice message management",secondary:[]}]},{token:"ETHERCARDS",caption:"EtherCards",enabled:!0,icon:"fas fa-credit-card",admin_role:!1,tagline:"EtherCards platform management",secondary:[{token:"APPS",caption:"Apps",enabled:!0,icon:"fas fa-mobile-alt",admin_role:!1,tagline:"Application management",secondary:[]},{token:"CHANNELS",caption:"Channels",enabled:!0,icon:"fas fa-broadcast-tower",admin_role:!1,tagline:"Communication channels",secondary:[]},{token:"MESSAGES",caption:"Messages",enabled:!0,icon:"fas fa-envelope",admin_role:!1,tagline:"Message management and templates",secondary:[]}]}],LaunCh_console_applet:[{token:"CONSOLE_HOME",caption:"Console Home",enabled:!0,icon:"fas fa-terminal",admin_role:!1,tagline:"Launch console home dashboard",secondary:[]},{token:"SYSTEM_MONITOR",caption:"System Monitor",enabled:!0,icon:"fas fa-desktop",admin_role:!1,tagline:"Real-time system monitoring and health checks",secondary:[{token:"SYSTEM_MONITOR_CPU",caption:"CPU Usage",enabled:!0,icon:"fas fa-microchip",admin_role:!1,tagline:"Monitor CPU performance and load",secondary:[]},{token:"SYSTEM_MONITOR_MEMORY",caption:"Memory",enabled:!0,icon:"fas fa-memory",admin_role:!1,tagline:"Track memory usage and allocation",secondary:[]},{token:"SYSTEM_MONITOR_NETWORK",caption:"Network",enabled:!0,icon:"fas fa-network-wired",admin_role:!1,tagline:"Network traffic and connectivity",secondary:[]}]},{token:"LOGS",caption:"Logs",enabled:!0,icon:"fas fa-file-medical-alt",admin_role:!1,tagline:"View system logs and error reports",secondary:[{token:"LOGS_APPLICATION",caption:"Application",enabled:!0,icon:"fas fa-code",admin_role:!1,tagline:"Application-level logs",secondary:[]},{token:"LOGS_SYSTEM",caption:"System",enabled:!0,icon:"fas fa-server",admin_role:!1,tagline:"System-level logs",secondary:[]},{token:"LOGS_SECURITY",caption:"Security",enabled:!0,icon:"fas fa-lock",admin_role:!1,tagline:"Security audit logs",secondary:[]}]},{token:"DEPLOYMENTS",caption:"Deployments",enabled:!0,icon:"fas fa-rocket",admin_role:!1,tagline:"Manage application deployments",secondary:[]}],Client_Property_Sandbox_Emulator:[{token:"SANDBOX_HOME",caption:"Sandbox Home",enabled:!0,icon:"fas fa-home",admin_role:!1,tagline:"Sandbox testing environment home",secondary:[]},{token:"API_TESTING",caption:"API Testing",enabled:!0,icon:"fas fa-vial",admin_role:!1,tagline:"Test API endpoints and responses",secondary:[{token:"API_TESTING_ENDPOINTS",caption:"Endpoints",enabled:!0,icon:"fas fa-plug",admin_role:!1,tagline:"Available API endpoints",secondary:[]},{token:"API_TESTING_REQUESTS",caption:"Requests",enabled:!0,icon:"fas fa-paper-plane",admin_role:!1,tagline:"Send test requests",secondary:[]},{token:"API_TESTING_HISTORY",caption:"History",enabled:!0,icon:"fas fa-history",admin_role:!1,tagline:"Request history and logs",secondary:[]}]},{token:"DATA_SIMULATOR",caption:"Data Simulator",enabled:!0,icon:"fas fa-database",admin_role:!1,tagline:"Simulate data scenarios and edge cases",secondary:[{token:"DATA_SIMULATOR_GENERATE",caption:"Generate",enabled:!0,icon:"fas fa-magic",admin_role:!1,tagline:"Generate mock data",secondary:[]},{token:"DATA_SIMULATOR_LOAD",caption:"Load",enabled:!0,icon:"fas fa-upload",admin_role:!1,tagline:"Load data fixtures",secondary:[]}]},{token:"SCENARIOS",caption:"Scenarios",enabled:!0,icon:"fas fa-project-diagram",admin_role:!1,tagline:"Pre-configured test scenarios",secondary:[]},{token:"RESET_SANDBOX",caption:"Reset Sandbox",enabled:!0,icon:"fas fa-redo",admin_role:!1,tagline:"Reset sandbox to initial state",secondary:[]}]};static#o={"client-saas":[{token:"DASHBOARD",caption:"Dashboard",icon:"dashboard",route:"/home",capability:"view_dashboard",enabled:!0,tagline:"Overview of your activity"},{token:"MAGNETS",caption:"Your Magnets",icon:"widgets",route:"/magnets",capability:"view_magnets",enabled:!0,tagline:"Manage your conversational magnets",children:[{token:"MAGNETS_ALL",caption:"All",route:"/magnets",capability:"view_magnets"},{token:"MAGNETS_DRAFTS",caption:"Drafts",route:"/magnets/drafts",capability:"view_magnets"},{token:"MAGNETS_ARCHIVED",caption:"Archived",route:"/magnets/archived",capability:"view_magnets"}]},{token:"TEMPLATES",caption:"Templates",icon:"content_copy",route:"/templates",capabilityAny:["provision_magnets","manage_magnets"],enabled:!0,tagline:"Start from a magnet template"},{token:"CONVERSATIONS",caption:"Conversations",icon:"forum",route:"/conversations",capability:"view_conversations",enabled:!0,tagline:"Captured lead conversations"},{token:"AB_TESTING",caption:"A/B Testing",icon:"science",route:"/ab-testing",capability:"manage_magnets",enabled:!0,tagline:"Experiment and optimize"},{token:"ANALYTICS",caption:"Analytics",icon:"monitoring",route:"/analytics",capability:"view_stats",enabled:!0,tagline:"Performance and ad metrics",children:[{token:"ANALYTICS_OVERVIEW",caption:"Overview",route:"/analytics",capability:"view_stats"},{token:"ANALYTICS_CONVERSIONS",caption:"Conversions",route:"/analytics/conversions",capability:"view_stats"},{token:"ANALYTICS_ADS",caption:"Ad Performance",route:"/analytics/ad-performance",capability:"view_ad_metrics"}]},{token:"AD_ACCOUNTS",caption:"Ad Accounts",icon:"ads_click",route:"/ad-accounts",capability:"connect_ad_accounts",enabled:!0,tagline:"Connect advertising accounts"},{token:"CLIENTS",caption:"Clients",icon:"groups",route:"/clients",capability:"create_client_accounts",enabled:!0,tagline:"Manage your client accounts"},{token:"TEAM",caption:"Team",icon:"group",route:"/team",capability:"manage_team",enabled:!0,tagline:"Invite and manage teammates"},{token:"BILLING",caption:"Billing",icon:"receipt_long",route:"/billing",capability:"view_billing",enabled:!0,tagline:"Plan, usage, and invoices"},{token:"SETTINGS",caption:"Settings",icon:"settings",route:"/settings",capability:null,enabled:!0,tagline:"Account and workspace settings",children:[{token:"SETTINGS_GENERAL",caption:"General",route:"/settings",capability:null},{token:"SETTINGS_WORKSPACE",caption:"Workspace",route:"/settings/workspace",capability:null},{token:"SETTINGS_INTEGRATIONS",caption:"Integrations",route:"/settings/integrations",capability:null},{token:"SETTINGS_SECURITY",caption:"Security",route:"/settings/security",capability:null}]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(", ")}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#n(e){if(!e)return e;const n=e.token.toLowerCase(),a=`nav_${n}`,o=`nav_${n}_tagline`,i=f.get(a)||e.caption,s=f.get(o)||e.tagline;return{...e,caption:i,tagline:s,secondary:e.secondary?e.secondary.map(r=>this.#n(r)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(n=>this.#n(n)):(console.warn("[NavMetaManager] No app token set. Call setAppToken() first."),[])}static getFlattenedNav(){const e=this.getPrimaryNav(),n=[];return e.forEach(a=>{n.push(a),a.secondary&&a.secondary.length>0&&n.push(...a.secondary)}),n}static getNavByToken(e){return this.getFlattenedNav().find(a=>a.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(n=>n.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#a(e){if(!e||!e.token)return e;const n=e.token.toLowerCase();return{...e,caption:f.get(`nav_${n}`)||e.caption,tagline:f.get(`nav_${n}_tagline`)||e.tagline}}static getSideNav(e=[],{uiMode:n=null}={}){const a=this.#o[this.#e]?this.#e:"client-saas",o=this.#o[a]||[],i=Array.isArray(e)?e:[],s=u=>u.capability==null&&!u.capabilityAny?!0:!(u.capability&&!i.includes(u.capability)||u.capabilityAny&&!u.capabilityAny.some(p=>i.includes(p))),r=[];for(const u of o)if(u.group&&Array.isArray(u.items)){if(!s(u))continue;const p=u.items.filter(s).map(_=>this.#a(_));p.length&&r.push({...this.#a(u),items:p})}else if(s(u)){const p=this.#a(u);Array.isArray(u.children)&&u.children.length&&(p.children=u.children.filter(s).map(_=>this.#a(_))),r.push(p)}return r}static getSideNavJSON(e=[],n={}){return JSON.stringify(this.getSideNav(e,n))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e="/m5t/v5"){if(!this.#e)return console.warn("[NavMetaManager] No app token set. Using static config."),this.getPrimaryNav();try{const n=`NAV_${this.#e.toUpperCase().replace(/-/g,"_")}`,a=await fetch(`${e}/coreMeta?meta_token=${n}`);if(!a.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${a.status}), using static config`),this.getPrimaryNav();const o=await a.json();return o.ok&&o.data&&o.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${n}`),o.data.meta_keyval):(console.warn("[NavMetaManager] No data in coreMeta response, using static config"),this.getPrimaryNav())}catch(n){return console.error("[NavMetaManager] Error fetching from coreMeta:",n),this.getPrimaryNav()}}static getAll(){return{...this.#t}}}typeof module<"u"&&module.exports&&(module.exports={NavMetaManager:oe});class nn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.hideLogo=!1,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute("data-logo-topic"),this.showSecondary=this.getAttribute("data-show-secondary")!=="false",this.hideLogo=this.getAttribute("data-hide-logo")==="true",this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");const e=oe.getPrimaryNav();e&&e.length>0?(this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager")},document.addEventListener("language-changed",this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener("language-changed",this.languageChangeHandler)}parseButtons(){const e=this.getAttribute("data-buttons");if(e)try{this.buttons=JSON.parse(e);const n=this.buttons.find(a=>a.selected);this.selectedPrimaryToken=n?n.token:this.buttons[0]?.token||null}catch(n){console.error("[M5TPrimaryNav] Error parsing buttons:",n),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(n=>n.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,n){if(n==="primary"){const a=this.buttons.find(o=>o.token===e);return{caption:a?.caption||"",tagline:a?.tagline||""}}else for(const a of this.buttons)if(a.secondary){const o=a.secondary.find(i=>i.token===e);if(o)return{caption:o.caption||"",tagline:o.tagline||""}}return{caption:"",tagline:""}}render(){const e=this.getSecondaryButtons(),n=e.length>0,a=!Array.isArray(this.buttons)||this.buttons.length===0;this.shadowRoot.innerHTML=`
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

      <div class="nav-wrapper${a?" is-spacer":""}">
        <nav class="nav-container">
          ${this.hideLogo?"":`<div class="logo" title="Mach Five Magnet">
            <img class="logo-mark" src="/m5m-mark.svg" alt="Mach Five Magnet" width="28" height="28" />
            <span class="logo-text">Mach Five <b>Magnet</b></span>
          </div>`}
          ${this.buttons.map((o,i)=>this.renderButton(o,i,"primary")).join("")}
        </nav>
        ${n?`
        <nav class="secondary-nav">
          ${e.map((o,i)=>this.renderButton(o,i,"secondary")).join("")}
        </nav>`:""}
      </div>
    `}renderButton(e,n,a="primary"){const o=a==="primary"?e.token===this.selectedPrimaryToken:!1,i=typeof e.count=="number"&&e.count!==null&&e.count!==void 0,s=e.icon&&e.icon.trim()!=="",r=e.tagline&&e.tagline.trim()!=="";return`
      <button
        class="nav-button ${o?"selected":""}"
        data-token="${e.token}"
        data-level="${a}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?"":"disabled"}
        ${r?`title="${e.tagline}"`:""}
      >
        ${s?`<i class="${e.icon} nav-button-icon"></i>`:""}
        <span>${e.caption}</span>
        ${i?`<span class="count-badge">${e.count}</span>`:""}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(".nav-button").forEach(a=>{const o=a.getAttribute("data-token"),i=a.getAttribute("data-level");a.addEventListener("click",s=>{o&&!s.currentTarget.disabled&&!this.longTapFired&&(i==="primary"?this.selectPrimaryButton(o):this.selectSecondaryButton(o)),this.longTapFired=!1}),a.addEventListener("dblclick",s=>{if(o&&!s.currentTarget.disabled){const r=this.getButtonData(o,i);console.log("[M5TPrimaryNav] Button double-clicked:",o),this.dispatchEvent(new CustomEvent("nav-double-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.DOUBLE_TAP",token:o,level:i,caption:r.caption,tagline:r.tagline,timestamp:Date.now()}}))}}),a.addEventListener("mouseenter",s=>{if(o&&!s.currentTarget.disabled){const r=this.getButtonData(o,i);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:i,caption:r.caption,tagline:r.tagline,action:"enter",timestamp:Date.now()}}))}}),a.addEventListener("mouseleave",s=>{if(o&&!s.currentTarget.disabled){const r=this.getButtonData(o,i);this.dispatchEvent(new CustomEvent("nav-hover",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.HOVER",token:o,level:i,caption:r.caption,tagline:r.tagline,action:"leave",timestamp:Date.now()}}))}}),a.addEventListener("mousedown",s=>{o&&!s.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{const r=this.getButtonData(o,i);console.log("[M5TPrimaryNav] Button long-tap:",o),this.longTapFired=!0,this.dispatchEvent(new CustomEvent("nav-long-tap",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LONG_TAP",token:o,level:i,caption:r.caption,tagline:r.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),a.addEventListener("mouseup",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1}),a.addEventListener("mouseleave",s=>{this.longTapTimer&&(clearTimeout(this.longTapTimer),this.longTapTimer=null),this.longTapActive=!1})});const n=this.shadowRoot.querySelector(".logo");n&&n.addEventListener("click",()=>{console.log("[M5TPrimaryNav] Logo clicked"),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found"),this.dispatchEvent(new CustomEvent("logo-click",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.LOGO_TAP",timestamp:Date.now()}}))})}selectPrimaryButton(e){const n=this.buttons.find(o=>o.token===e),a=this.getButtonData(e,"primary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,level:"primary",caption:a.caption,tagline:a.tagline,hasSecondary:(n?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){const n=this.getButtonData(e,"secondary");this.dispatchEvent(new CustomEvent("nav-select",{bubbles:!0,composed:!0,detail:{pubsubTopic:"M5T_PRIMARY_NAV.TAP",token:e,primaryToken:this.selectedPrimaryToken,level:"secondary",caption:n.caption,tagline:n.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute("data-buttons",JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,n,a="primary"){let o;a==="primary"?o=this.buttons.find(i=>i.token===e):o=this.getSecondaryButtons().find(s=>s.token===e),o&&(o.count=n,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}}customElements.define("m5t-primary-nav",nn);window.m5t=Object.create(null);window.m5t.pubsub=l;console.log("StreamSyncEngage SaaS Client - Starting...");console.log("Environment:","production");console.log("Document readyState:",document.readyState);console.log("window.mvvLegit:",typeof window.mvvLegit);console.log("globalThis.mvvLegit:",typeof globalThis.mvvLegit);try{console.log("mvvLegit (direct):",typeof mvvLegit)}catch(t){console.log("mvvLegit (direct): ReferenceError -",t.message)}const an=Object.keys(window).filter(t=>t.toLowerCase().includes("mvv")||t.toLowerCase().includes("neodigm")||t.toLowerCase().includes("legit"));console.log("Possible Neodigm globals:",an);const O=new qt("/",{hash:!0});window.router=O;const pe=(window.location.hash||"").startsWith("#/accept-invite")?window.location.hash:null;if(pe){let t=0;const e=l.subscribe(c.ROUTE_NAV_AFTER,(n,a)=>{if(a?.route==="accept-invite"){l.unsubscribe(e);return}(a?.route==="splash"||a?.route==="signin")&&t<3&&(t+=1,console.log("[Router] Recovering invite target after cold-load bounce:",pe),setTimeout(()=>{window.router.navigate(pe.replace(/^#/,""))},30))})}function W(t){const e=t?`${t.replace(/-/g,"_")}_route`:"splash_route";return console.log(`[Router] Checking access: ${t} -> ${e}`),mvvLegit.isRouteAllowed(e)?!0:(console.warn(`[Router] Access denied to route: ${e}`),l.publish(c.UI_TOAST,{message:"Please sign in to access this page",type:"warning"}),!1)}function B(t){console.log("[Router] Navigating to:",t),O.navigate(`/${t}`)}const on=new Set(["splash","signin","signup","forgot","resethash","verf-link","accept-invite","signout"]);let K={},me={},fe=null;const sn={admin:{caption:"Platform Admin",icon:"shield_person"},reseller:{caption:"Reseller",icon:"handshake"},managed:{caption:"Managed",icon:"visibility"},self_serve:{caption:"Self-Serve",icon:"rocket_launch"}};function ge(){const t=document.getElementById("m5t-side-nav");if(!t)return;const e=!A.getScope()&&A.isAuthenticated(),n=A.getCapabilities(),a=A.getUiMode(),o=oe.getSideNav(n,{uiMode:a});K={},me={};const i=p=>{p.route&&(K[p.route]={sectionToken:p.token,childToken:null,children:p.children||null},Array.isArray(p.children)&&p.children.forEach(_=>{_.route&&(me[_.token]=_.route,K[_.route]={sectionToken:p.token,childToken:_.token,children:p.children})}))},s=p=>p.forEach(_=>{_.group&&Array.isArray(_.items)?s(_.items):i(_)});s(o);const r=A.getMemberships(),u=A.getActiveOrg();t.setState({buttons:o,orgs:r.map(p=>({guid:p.orgGuid,name:p.name||p.channel,channel:p.channel})),activeOrg:u?.guid||null,footerBadge:sn[a]||null,loading:e}),fe&&Je(fe)}function Je(t){const e=document.getElementById("m5t-side-nav"),n=K[`/${t}`]||K[t]||null;e?.setActiveToken(n?.sectionToken||null),rn(n)}function rn(t){const e=document.getElementById("m5t-sub-nav"),n=document.getElementById("app-shell");if(!e)return;const a=t?.children;e.hidden=!1,a&&a.length>1?(e.updateButtons(a.map(o=>({token:o.token,caption:o.caption,enabled:!0,selected:o.token===t.childToken}))),n?.classList.add("has-sub-nav")):(e.updateButtons([]),n?.classList.remove("has-sub-nav"))}function ln(){const t=D.getAvailableLanguages&&D.getAvailableLanguages()||[];if(t.length<2){l.publish(c.UI_TOAST,{message:"Only one language is available",type:"info"});return}const e=localStorage.getItem(I.FF_SSE_LS_USER_LANG)||I.FF_SSE_I18N_LANG||t[0],n=t[(t.indexOf(e)+1)%t.length];D.setLanguage(n),l.publish(c.UI_TOAST,{message:`Language: ${n}`,type:"info"})}function cn(){const t=document.getElementById("m5t-side-nav");if(!t)return;oe.setAppToken("client-saas"),document.getElementById("app-shell")?.classList.toggle("nav-collapsed",t.getAttribute("data-collapsed")==="true"),t.addEventListener("nav-select",n=>{const a=n.detail?.route;a&&O.navigate(a.startsWith("/")?a:`/${a}`)}),t.addEventListener("logo-click",()=>O.navigate("/home")),t.addEventListener("nav-collapse",n=>{document.getElementById("app-shell")?.classList.toggle("nav-collapsed",!!n.detail?.collapsed)}),t.addEventListener("org-switch",n=>{const a=n.detail?.orgGuid;a&&A.setActiveOrg(a)}),t.addEventListener("footer-action",n=>{switch(n.detail?.action){case"account":O.navigate("/settings");break;case"signout":O.navigate("/signout");break;case"lang":ln();break}}),document.getElementById("m5t-sub-nav")?.addEventListener("nav-select",n=>{const a=me[n.detail?.token];a&&O.navigate(a)}),document.addEventListener("language-changed",()=>ge()),ge(),l.subscribe(c.AUTH_SCOPE_LOADED,()=>ge())}function dn(t){fe=t;const e=document.getElementById("m5t-side-nav"),n=document.getElementById("app-shell");if(!e||!n)return;const a=!on.has(t);if(e.hidden=!a,n.classList.toggle("has-side-nav",a),a)Je(t);else{const o=document.getElementById("m5t-sub-nav");o&&(o.hidden=!0),n.classList.remove("has-sub-nav")}}l.subscribe(c.ROUTE_NAV_AFTER,(t,e)=>{e?.route&&dn(e.route)});O.on("/",()=>{console.log("[Router] Route: /"),l.publish(c.ROUTE_NAV_BEFORE,{route:"splash"}),x(()=>Promise.resolve().then(()=>Xe),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"splash"})}).catch(t=>{console.error("[Router] Error loading splash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"splash",error:t})})});O.on("/splash",()=>{console.log("[Router] Route: /splash"),l.publish(c.ROUTE_NAV_BEFORE,{route:"splash"}),x(()=>Promise.resolve().then(()=>Xe),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"splash"})}).catch(t=>{console.error("[Router] Error loading splash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"splash",error:t})})});O.on("/signin",()=>{console.log("[Router] Route: /signin"),l.publish(c.ROUTE_NAV_BEFORE,{route:"signin"}),x(()=>Promise.resolve().then(()=>yn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signin"})}).catch(t=>{console.error("[Router] Error loading signin route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signin",error:t})})});O.on("/signup",()=>{console.log("[Router] Route: /signup"),l.publish(c.ROUTE_NAV_BEFORE,{route:"signup"}),x(()=>Promise.resolve().then(()=>In),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signup"})}).catch(t=>{console.error("[Router] Error loading signup route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signup",error:t})})});O.on("/verf-link",()=>{console.log("[Router] Route: /verf-link"),l.publish(c.ROUTE_NAV_BEFORE,{route:"verf-link"}),x(()=>Promise.resolve().then(()=>On),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"verf-link"})}).catch(t=>{console.error("[Router] Error loading verf-link route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"verf-link",error:t})})});const Qe=()=>{console.log("[Router] Route: /accept-invite"),l.publish(c.ROUTE_NAV_BEFORE,{route:"accept-invite"}),x(()=>Promise.resolve().then(()=>Pn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"accept-invite"})}).catch(t=>{console.error("[Router] Error loading accept-invite route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"accept-invite",error:t})})};O.on("/accept-invite/:uid/:token",Qe);O.on("/accept-invite",Qe);O.on("/forgot",()=>{console.log("[Router] Route: /forgot"),l.publish(c.ROUTE_NAV_BEFORE,{route:"forgot"}),x(()=>Promise.resolve().then(()=>Hn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"forgot"})}).catch(t=>{console.error("[Router] Error loading forgot route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"forgot",error:t})})});O.on("/resethash",()=>{if(console.log("[Router] Route: /resethash"),!W("resethash")){B("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"resethash"}),x(()=>Promise.resolve().then(()=>qn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"resethash"})}).catch(t=>{console.error("[Router] Error loading resethash route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"resethash",error:t})})});O.on("/home",()=>{if(console.log("[Router] Route: /home"),!W("home")){B("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"home"}),x(()=>Promise.resolve().then(()=>jn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"home"})}).catch(t=>{console.error("[Router] Error loading home route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"home",error:t})})});O.on("/signout",()=>{if(console.log("[Router] Route: /signout"),!W("signout")){B("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"signout"}),x(()=>Promise.resolve().then(()=>Wn),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"signout"})}).catch(t=>{console.error("[Router] Error loading signout route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"signout",error:t})})});const un=[{path:"/magnets",name:"magnets",title:"Your Magnets",icon:"widgets"},{path:"/templates",name:"templates",title:"Templates",icon:"content_copy"},{path:"/conversations",name:"conversations",title:"Conversations",icon:"forum"},{path:"/ab-testing",name:"ab-testing",title:"A/B Testing",icon:"science"},{path:"/analytics",name:"analytics",title:"Analytics",icon:"monitoring"},{path:"/ad-accounts",name:"ad-accounts",title:"Ad Accounts",icon:"ads_click"},{path:"/team",name:"team",title:"Team",icon:"group"},{path:"/billing",name:"billing",title:"Billing",icon:"receipt_long"},{path:"/settings",name:"settings",title:"Settings",icon:"settings"},{path:"/magnets/drafts",name:"magnets/drafts",title:"Magnets · Drafts",icon:"widgets"},{path:"/magnets/archived",name:"magnets/archived",title:"Magnets · Archived",icon:"widgets"},{path:"/analytics/conversions",name:"analytics/conversions",title:"Analytics · Conversions",icon:"monitoring"},{path:"/analytics/ad-performance",name:"analytics/ad-performance",title:"Analytics · Ad Performance",icon:"monitoring"},{path:"/settings/workspace",name:"settings/workspace",title:"Settings · Workspace",icon:"settings"},{path:"/settings/integrations",name:"settings/integrations",title:"Settings · Integrations",icon:"settings"},{path:"/settings/security",name:"settings/security",title:"Settings · Security",icon:"settings"}];un.forEach(({path:t,name:e,title:n,icon:a})=>{O.on(t,()=>{if(console.log(`[Router] Route: ${t}`),!W("home")){B("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:e}),x(()=>Promise.resolve().then(()=>Xn),void 0).then(o=>{const i=document.getElementById("app");i.innerHTML=o.render({title:n,icon:a,name:e}),o.init&&o.init({name:e}),l.publish(c.ROUTE_NAV_AFTER,{route:e})}).catch(o=>{console.error(`[Router] Error loading section route (${e}):`,o),l.publish(c.ROUTE_NAV_ERROR,{route:e,error:o})})})});O.on("/clients",()=>{if(console.log("[Router] Route: /clients"),!W("home")){B("signin");return}l.publish(c.ROUTE_NAV_BEFORE,{route:"clients"}),x(()=>Promise.resolve().then(()=>la),void 0).then(t=>{const e=document.getElementById("app");e.innerHTML=t.render(),t.init&&t.init(),l.publish(c.ROUTE_NAV_AFTER,{route:"clients"})}).catch(t=>{console.error("[Router] Error loading clients route:",t),l.publish(c.ROUTE_NAV_ERROR,{route:"clients",error:t})})});O.notFound(()=>{console.log("[Router] Route not found - redirecting to splash"),B("splash")});l.subscribe(c.ROUTE_NAV,(t,e)=>{console.log("[Router] ROUTE_NAV event received:",e),e?.route&&B(e.route)});function xe(){console.log("[App] Waiting for Neodigm 55 library...");let t=0;const e=100,n=setInterval(()=>{t++,t%10===0&&console.log(`[App] Still waiting... attempt ${t}/100`,{mvvLegitExists:typeof mvvLegit<"u",neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<"u"?(console.log(`[App] Neodigm 55 loaded after ${t*100}ms`),clearInterval(n),pn()):t>=e&&(clearInterval(n),console.error("[App] Failed to load Neodigm 55 library after 10 seconds"),console.error("[App] Check browser console for CORS or network errors"),document.getElementById("app").innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,l.publish(c.APP_ERROR,{message:"Failed to load authentication library"}))},100)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",xe):xe();async function pn(){if(console.log("[App] Neodigm 55 loaded, initializing..."),Zt(),D.initialize(),console.log("[App] I18n Controller initialized"),!await A.init({BASE_URL:"https://machfivemagnet-saas.onrender.com",navigateFunction:n=>{console.log("[AuthController] Navigation requested:",n),B(n)}})){console.error("[App] AuthController initialization failed");return}const e=A.getEntity();e&&(console.log("[App] Session restored for:",e.email),l.publish(c.APP_USER_LOADED,{entity:e}),A.isAuthenticated()&&A.fetchScope()),l.publish(c.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),cn(),O.resolve(),window.AuthController=A,window.I18nController=D,window.MachVive=Se,console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)")}l.subscribe(c.ROUTE_NAV_AFTER,(t,e)=>{typeof D<"u"&&D.refresh&&setTimeout(()=>{D.refresh()},100)});function gn(){return`
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
  `}function _n(){console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds..."),setTimeout(()=>{const t=localStorage.getItem(I.FF_SSE_LS_TOKEN),e=localStorage.getItem("mvv_ts");console.log("[SplashRoute] localStorage check:",{hasMvvToken:!!t,hasMvvTs:!!e});const n=document.getElementById("splash-loader"),a=document.getElementById("splash-actions");t?(console.log("[SplashRoute] Auth token found → HOME"),l.publish(c.ROUTE_NAV,{route:"home"})):e?(console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN"),l.publish(c.ROUTE_NAV,{route:"signin"})):(console.log("[SplashRoute] New user (no session history) → Showing buttons"),n&&(n.style.display="none"),a&&(a.style.display="flex"),document.querySelectorAll("[data-route]").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-route");console.log(`[SplashRoute] Button clicked - navigating to: ${s}`),l.publish(c.ROUTE_NAV,{route:s})})}))},4e3)}const Xe=Object.freeze(Object.defineProperty({__proto__:null,init:_n,render:gn},Symbol.toStringTag,{value:"Module"}));function ie(t){return t=String(t),Math.abs(t.split("").reduce((e,n)=>(e<<5)-e+n.charCodeAt(0)|0,0))}function hn(){return`
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
  `}function mn(){console.log("[SigninRoute] Initialized");const t=document.getElementById("loginForm"),e=document.getElementById("email"),n=document.getElementById("password");document.getElementById("togglePassword")?.addEventListener("click",()=>{const i=n.type==="password"?"text":"password";n.type=i}),t?.addEventListener("submit",async i=>{i.preventDefault();const s=e.value.trim(),r=n.value;fn(s,e)&&vn(r,n)&&await bn(s,r)}),document.getElementById("link--uc__underline")?.addEventListener("click",i=>{i.preventDefault(),l.publish(c.AUTH_FORGOT)}),document.querySelector('.auth-switch a[href="#/signup"]')?.addEventListener("click",i=>{i.preventDefault(),console.log("[SigninRoute] Sign up link clicked - navigating to signup"),l.publish(c.ROUTE_NAV,{route:"signup"})})}function fn(t,e){if(!t)return ae(e,f.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,a=(t.match(/\./g)||[]).length;return n!==1||a<1?(ae(e,f.get("validation_email_invalid")),!1):!0}function vn(t,e){return t?t.length<10?(ae(e,f.get("validation_password_min_length")),!1):!0:(ae(e,f.get("validation_password_required")),!1)}function ae(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function bn(t,e){const n=document.querySelector(".btn");n.disabled=!0,n.textContent=f.get("loading_signing_in");try{const a=ie(e),o=await A.doSignin(t,a);o.ok?(console.log("[SigninRoute] Signin successful"),typeof neodigmToast<"u"&&neodigmToast.q(f.get("success_welcome_back"),"success"),l.publish(c.AUTH_SIGNIN_SUCCESS,{entity:A.getEntity()})):o.resetRequired?(console.log("[SigninRoute] Password reset required"),typeof neodigmToast<"u"&&neodigmToast.q(f.get("error_password_reset_required"),"warning")):(typeof neodigmToast<"u"&&neodigmToast.q(o.error||f.get("error_signin_failed"),"danger"),n.disabled=!1,n.textContent=f.get("sign_in").toUpperCase())}catch(a){console.error("[SigninRoute] Sign in error:",a),typeof neodigmToast<"u"&&neodigmToast.q(a.message||f.get("error_network"),"danger"),n.disabled=!1,n.textContent=f.get("sign_in").toUpperCase(),l.publish(c.AUTH_SIGNIN_FAIL,{message:a.message})}}const yn=Object.freeze(Object.defineProperty({__proto__:null,init:mn,render:hn},Symbol.toStringTag,{value:"Module"}));function Ze(t){const e=[];return t.length<10&&e.push("at least 10 characters"),/[a-z]/.test(t)||e.push("1 lowercase"),/[A-Z]/.test(t)||e.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t)||e.push("1 special character"),/[^\x00-\x7F]/.test(t)&&e.push("ASCII characters only"),e}function et(t){return t.length===0?"":t.includes("ASCII characters only")?"Password cannot contain emoji|or special unicode characters":t.includes("at least 10 characters")?"Password must have at least|10 characters":"Password must have: Uppercase,|Lowercase, and Special Character"}function En(){return`
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
  `}function Sn(){console.log("[SignupRoute] Initialized");const t=document.getElementById("signupForm"),e=t.querySelector('button[type="submit"]');Me("togglePassword","password","eyeIcon"),Me("toggleConfirmPassword","confirmPassword","eyeIconConfirm"),document.querySelector('.auth-switch a[href="#/signin"]')?.addEventListener("click",a=>{a.preventDefault(),console.log("[SignupRoute] Sign in link clicked - navigating to signin"),l.publish(c.ROUTE_NAV,{route:"signin"})}),t.addEventListener("submit",async a=>{a.preventDefault();const o=document.getElementById("first").value.trim(),i=document.getElementById("last").value.trim(),s=document.getElementById("email").value.trim(),r=document.getElementById("company").value.trim(),u=document.getElementById("phone").value.trim(),p=document.getElementById("password").value,_=document.getElementById("confirmPassword").value,b=document.getElementById("first"),y=document.getElementById("last"),w=document.getElementById("email"),N=document.getElementById("password"),g=document.getElementById("confirmPassword");if(Fe(o,b,f.get("validation_first_name_required"))&&Fe(i,y,f.get("validation_last_name_required"))&&An(s,w)&&wn(p,N)){if(p!==_){q(g,f.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=f.get("loading_creating_account"),await Tn(o,i,s,r,u,p)}})}function Me(t,e,n){const a=document.getElementById(t),o=document.getElementById(e),i=document.getElementById(n);!a||!o||!i||a.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?i.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:i.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Fe(t,e,n){return t?!0:(q(e,n),!1)}function An(t,e){if(!t)return q(e,f.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,a=(t.match(/\./g)||[]).length;return n!==1||a<1?(q(e,f.get("validation_email_invalid")),!1):!0}function wn(t,e){if(!t)return q(e,f.get("validation_password_required")),!1;const n=Ze(t);return n.length>0?(q(e,et(n)),!1):!0}function q(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Tn(t,e,n,a,o,i){const s=document.querySelector('button[type="submit"]');try{const r=ie(i),u={email:n,hash:r,first:t,last:e};a&&(u.company=a),o&&(u.phone=o);const p=await A.doSignup(u);if(p.ok)l.publish(c.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<"u"&&mvvLegit.doUNVERF();else{const _=p.error||p.message||f.get("error_signup_failed");typeof neodigmToast<"u"&&neodigmToast.q(_,"danger"),s.disabled=!1,s.textContent=f.get("create_account").toUpperCase(),l.publish(c.AUTH_SIGNUP_FAIL,{message:_})}}catch(r){console.error("[SignupRoute] Sign up error:",r),typeof neodigmToast<"u"&&neodigmToast.q(r.message||f.get("error_network"),"danger"),s.disabled=!1,s.textContent=f.get("create_account").toUpperCase(),l.publish(c.AUTH_SIGNUP_FAIL,{message:r.message})}}const In=Object.freeze(Object.defineProperty({__proto__:null,init:Sn,render:En},Symbol.toStringTag,{value:"Module"}));function Nn(){return`
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
  `}function kn(){console.log("[VerfLinkRoute] Initialized");const t=7200,e=Date.now(),n=document.getElementById("countdown-display");function a(){const i=Date.now()-e,s=Math.floor(i/1e3),r=Math.max(0,t-s),u=Math.floor(r/3600),p=Math.floor(r%3600/60),_=r%60,b=`${String(u).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(_).padStart(2,"0")}`;n&&(n.textContent=b,r<600&&(n.style.color="#ef4444",n.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),r===0&&(n.style.color="#7f1d1d",n.style.textShadow="none")),r===0&&(clearInterval(o),console.log("[VerfLinkRoute] Countdown expired"),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate("/splash")},600))}a();const o=setInterval(a,1e3);window.addEventListener("beforeunload",()=>{clearInterval(o)})}const On=Object.freeze(Object.defineProperty({__proto__:null,init:kn,render:Nn},Symbol.toStringTag,{value:"Module"}));let Ue=!1;function Rn(){if(Ue)return;const t=document.createElement("style");t.id="m5t-accept-invite-styles",t.textContent=`
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
  `,document.head.appendChild(t),Ue=!0}function Cn(){const t=window.location.hash||"",n=t.replace(/^#\/?/,"").split("?")[0].split("/").filter(Boolean);let a=n[1]||"",o=n[2]||"";if(!a||!o){const i=t.includes("?")?t.slice(t.indexOf("?")+1):"",s=new URLSearchParams(i);a=a||s.get("uid")||"",o=o||s.get("token")||""}try{return{uid:decodeURIComponent(a),token:decodeURIComponent(o)}}catch{return{uid:a,token:o}}}function tt(){return Rn(),`
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
    </div>`}function nt(){const{uid:t,token:e}=Cn(),n=document.getElementById("accept-invite-form"),a=document.getElementById("ai-pass"),o=document.getElementById("ai-confirm"),i=document.getElementById("ai-submit"),s=document.getElementById("ai-msg");if(!n)return;const r=(u,p="error")=>{s.textContent=u,s.className=`accept-invite-msg ${p}`};if(!t||!e){r("This invitation link is invalid or incomplete. Please use the link from your email."),i.disabled=!0;return}n.addEventListener("submit",async u=>{u.preventDefault();const p=a.value||"",_=o.value||"";if(p.length<8){r("Password must be at least 8 characters.");return}if(p!==_){r("Passwords do not match.");return}i.disabled=!0,r("Setting up your account…","ok");const b=ie(p);try{const y=A.getConfig?.().BASE_URL||"",w=await fetch(`${y}/m5t/v5/acctEntity/acceptInvite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:t,token:e,hash:b})}),N=await w.json().catch(()=>({}));if(!w.ok||!N.ok){const h=w.status===410?"This invitation has expired — ask for a new one.":w.status===409?"This invitation has already been used. Try signing in.":N.error||`Could not accept the invitation (HTTP ${w.status}).`;r(h),i.disabled=!1;return}r("Welcome! Signing you in…","ok"),(await A.doSignin(N.entity.email,b))?.ok||(r("Your account is ready. Please sign in.","ok"),setTimeout(()=>{window.location.hash="#/signin"},1200))}catch(y){console.error("[accept-invite] error:",y),r("Something went wrong. Please try again."),i.disabled=!1}})}const Ln={render:tt,init:nt},Pn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln,init:nt,render:tt},Symbol.toStringTag,{value:"Module"})),xn="https://machfivemagnet-saas.onrender.com";class Mn{constructor(){this.baseUrl=xn}async request(e,n={}){const a=`${this.baseUrl}${e}`,o={"Content-Type":"application/json",...n.headers};try{const i=await fetch(a,{...n,headers:o});if(i.status===401||i.status===403){l.publish(c.AUTH_TOKEN_EXPIRED,{status:i.status,endpoint:e});const r=await i.json().catch(()=>({}));throw new Error(r.error||"Authentication failed")}const s=await i.json();return{ok:i.ok,status:i.status,data:s}}catch(i){throw console.error("API Request Error:",i),l.publish(c.APP_ERROR,{message:i.message,endpoint:e}),i}}async get(e){return this.request(e,{method:"GET"})}async post(e,n){return this.request(e,{method:"POST",body:JSON.stringify(n)})}async put(e,n){return this.request(e,{method:"PUT",body:JSON.stringify(n)})}async delete(e){return this.request(e,{method:"DELETE"})}async signin(e,n){return this.post("/api/acctEntity/signin",{email:e,hash:n})}async signup(e){return this.post("/api/acctEntity/signup",e)}async signout(){return this.post("/api/acctEntity/signout",{})}async forgotPassword(e){return this.post("/api/acctEntity/forgot",{email:e})}async resetHash(e,n){return this.post("/api/acctEntity/resethash",{email:e,hash:n})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get("/api/acctEntity")}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,n){return this.put(`/api/acctEntity/${e}`,n)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get("/ping")}}const Fn=new Mn;function Un(){return`
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

  `}function Dn(){console.log("[ForgotRoute] Initialized");const t=document.getElementById("forgot-form"),e=document.getElementById("email");t?.addEventListener("submit",async n=>{n.preventDefault();const a=e.value.trim();Gn(a,e)&&await Bn(a)})}function Gn(t,e){if(!t)return De(e,f.get("validation_email_required")),!1;const n=(t.match(/@/g)||[]).length,a=(t.match(/\./g)||[]).length;return n!==1||a<1?(De(e,f.get("validation_email_invalid")),!1):!0}function De(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}async function Bn(t){const e=document.querySelector(".btn");e.disabled=!0,e.textContent="SENDING...";try{const n=await Fn.forgotPassword(t);n.ok&&n.data.ok?(typeof neodigmToast<"u"&&neodigmToast.q(f.get("success_reset_link_sent"),"success"),l.publish(c.AUTH_FORGOT_SUCCESS,{email:t}),setTimeout(()=>{window.router&&window.router.navigate("/verf-link")},2e3)):(typeof neodigmToast<"u"&&neodigmToast.q(n.data.error||f.get("error_signin_failed"),"danger"),e.disabled=!1,e.textContent=f.get("send_reset_link").toUpperCase())}catch(n){console.error("[ForgotRoute] Forgot password error:",n),typeof neodigmToast<"u"&&neodigmToast.q(n.message||f.get("error_network"),"danger"),e.disabled=!1,e.textContent=f.get("send_reset_link").toUpperCase()}}const Hn=Object.freeze(Object.defineProperty({__proto__:null,init:Dn,render:Un},Symbol.toStringTag,{value:"Module"}));function Vn(){return`
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
  `}function $n(){console.log("[ResethashRoute] Initialized");const t=document.getElementById("resethash-form"),e=t.querySelector('button[type="submit"]');Ge("toggleNewPassword","new-password","eyeIconNew"),Ge("toggleConfirmPassword","confirm-password","eyeIconConfirm"),t?.addEventListener("submit",async n=>{n.preventDefault();const a=t.email.value.trim(),o=t.newPassword.value,i=t.confirmPassword.value,s=document.getElementById("new-password"),r=document.getElementById("confirm-password");if(!o){$(s,f.get("validation_new_password_required"));return}const u=Ze(o);if(u.length>0){$(s,et(u));return}if(!i){$(r,f.get("validation_new_password_required"));return}if(o!==i){$(r,f.get("validation_password_mismatch"));return}e.disabled=!0,e.textContent=f.get("loading_resetting_password");try{const p=ie(o),_=await A.doResetHash(a,p);_.ok?(typeof neodigmToast<"u"&&neodigmToast.q(f.get("success_password_reset"),"success"),l.publish(c.AUTH_RESETHASH_SUCCESS,{email:a})):($(s,_.error||f.get("error_signin_failed")),e.disabled=!1,e.textContent=f.get("update_password").toUpperCase())}catch(p){console.error("[ResethashRoute] Reset password error:",p),$(s,p.message||f.get("error_network")),e.disabled=!1,e.textContent=f.get("update_password").toUpperCase()}})}function Ge(t,e,n){const a=document.getElementById(t),o=document.getElementById(e),i=document.getElementById(n);!a||!o||!i||a.addEventListener("click",()=>{const s=o.type==="password";o.type=s?"text":"password",s?i.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:i.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function $(t,e){typeof neodigmToast<"u"&&neodigmToast.q(e,"danger"),typeof neodigmUtils<"u"?neodigmUtils.shake(`#${t.id}`):(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),300)),t.focus()}const qn=Object.freeze(Object.defineProperty({__proto__:null,init:$n,render:Vn},Symbol.toStringTag,{value:"Module"})),ve=(t,e)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`,Q=({icon:t,label:e,valueId:n,value:a="—",subId:o,sub:i=""})=>`
  <div class="stat-card">
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${t}</span>
      <span class="stat-label">${e}</span>
    </div>
    <div class="stat-value"${n?` id="${n}"`:""}>${a}</div>
    <div class="stat-change"><span class="stat-sublabel"${o?` id="${o}"`:""}>${i}</span></div>
  </div>`,X=(t,e,{wide:n=!1,full:a=!1,controls:o=!1}={})=>`
  <div class="dashboard-card${n?" chart-card-wide":""}${a?" chart-card-full":""}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${t}</span> ${e}</h2>
      ${o?`<div class="chart-controls">
        <button class="chart-period-btn active" type="button" data-period="7">7 Days</button>
        <button class="chart-period-btn" type="button" data-period="30">30 Days</button>
      </div>`:""}
    </div>
    <div class="card-body">${ve("insights","Insights appear here once your magnets start capturing conversations.")}</div>
  </div>`;function at(){return`
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
        ${Q({icon:"widgets",label:"Active Magnets",valueId:"stat-active-magnets",subId:"stat-active-magnets-sub",sub:"Loading…"})}
        ${Q({icon:"forum",label:"Conversations Started",sub:"Coming soon"})}
        ${Q({icon:"person_add",label:"Leads Captured",sub:"Coming soon"})}
        ${Q({icon:"check_circle",label:"Flow Completion Rate",sub:"Coming soon"})}
      </div>

      <div class="charts-section">
        ${X("show_chart","Conversation Trends",{wide:!0,controls:!0})}
        <div class="charts-grid">
          ${X("filter_alt","Completion Funnel")}
          ${X("source","Traffic Sources")}
          ${X("bar_chart","Magnet Performance",{full:!0})}
        </div>
      </div>

      <div class="content-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Recent Interactions</h2>
            <span class="live-indicator"><span class="pulse-dot"></span> Live</span>
          </div>
          <div class="card-body">
            ${ve("sensors","No interactions yet — they'll stream in live as visitors engage your magnets.")}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/conversations">View all →</a>
          </div>
          <div class="card-body">
            ${ve("contacts","No leads captured yet. Publish a magnet to start collecting and scoring leads.")}
          </div>
        </div>
      </div>
    </div>`}async function ot(){const t=document.getElementById("stat-active-magnets"),e=document.getElementById("stat-active-magnets-sub");if(t)try{const n=A.getConfig?.().BASE_URL||"",a=await fetch(`${n}/m5t/v5/sseEtherSubscriberApp`);if(!a.ok)throw new Error(`HTTP ${a.status}`);const o=await a.json(),i=Array.isArray(o?.data)?o.data:[],s=i.filter(u=>u.status==="ENABLED").length;t.textContent=String(s);const r=new Set;i.forEach(u=>{(Array.isArray(u.app_domains)?u.app_domains:[]).forEach(_=>{const b=typeof _=="string"?_:_&&(_.domain||_.host);b&&(typeof _=="string"||_.active!==!1)&&r.add(String(b).toLowerCase())})}),e&&(e.textContent=r.size?`Across ${r.size} domain${r.size===1?"":"s"}`:s?"No domains configured":"No magnets yet")}catch(n){console.warn("[dashboard] Active Magnets fetch failed:",n),t.textContent="—",e&&(e.textContent="Unavailable")}}const zn={render:at,init:ot},jn=Object.freeze(Object.defineProperty({__proto__:null,default:zn,init:ot,render:at},Symbol.toStringTag,{value:"Module"}));function Yn(){return`
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
  `}function Kn(){console.log("[SignoutRoute] Initialized");const t=document.getElementById("confirm-signout-btn");t?.addEventListener("click",async()=>{t.disabled=!0,t.textContent="SIGNING OUT...",console.log("[SignoutRoute] User confirmed signout"),await A.doSignout()})}const Wn=Object.freeze(Object.defineProperty({__proto__:null,init:Kn,render:Yn},Symbol.toStringTag,{value:"Module"}));let Be=!1;function Jn(){if(Be)return;const t=document.createElement("style");t.id="m5t-section-page-styles",t.textContent=`
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
  `,document.head.appendChild(t),Be=!0}function it({title:t="Section",icon:e="widgets",name:n=""}={}){return Jn(),`
    <section class="section-page" data-section="${n}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${e}</span>
        <h1 class="section-page__title">${t}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired — content lands next.</p>
      </div>
    </section>`}function st(){}const Qn={render:it,init:st},Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Qn,init:st,render:it},Symbol.toStringTag,{value:"Module"})),He="reseller_org",rt="managed_client";let Ve=!1;const Zn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},L=t=>String(t??"").replace(/[&<>"']/g,e=>Zn[e]);function be(t,e="info"){try{l.publish(c.UI_TOAST,{message:t,type:e})}catch{}}function ea(){const t=A.getActiveOrg();if(t&&t.channel===He)return{guid:t.guid,name:t.name};const e=A.getMemberships().find(n=>n.channel===He);return e?{guid:e.orgGuid,name:e.name}:null}function ta(t){const e=t?.created_tz;if(!e)return"";const n=new Date(e);return Number.isNaN(n.getTime())?"":n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function na(){if(Ve)return;const t=document.createElement("style");t.id="m5t-clients-styles",t.textContent=`
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
  `,document.head.appendChild(t),Ve=!0}const aa=t=>String(t||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]||"").join("").toUpperCase()||"?";function Z(t,e){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${t}</span><p>${e}</p></div>`}function oa(t){const e=t.caption||t.guid,n=t.status||"ENABLED";return`
    <div class="client-card">
      <span class="client-card__avatar">${L(aa(e))}</span>
      <span class="client-card__main">
        <div class="client-card__name" title="${L(e)}">${L(e)}</div>
        <div class="client-card__meta">Added ${L(ta(t.created))||"—"}</div>
        <span class="client-card__status" data-status="${L(n)}">${L(n)}</span>
        <div>
          <button class="client-card__invite" type="button" data-client-guid="${L(t.guid)}" data-client-name="${L(e)}">
            <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
          </button>
        </div>
      </span>
    </div>`}function lt(){return na(),`
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
          ${Z("hourglass_empty","Loading clients…")}
        </div>
      </div>
    </div>`}async function ct(){const t=ea();document.getElementById("clients-add-btn")?.addEventListener("click",()=>ia(t)),await dt(t)}async function dt(t){const e=document.getElementById("clients-body"),n=document.getElementById("clients-count");if(e){if(!t?.guid){e.innerHTML=Z("info","Client provisioning is available to reseller / agency accounts."),n&&(n.textContent="");return}try{const a=A.getConfig?.().BASE_URL||"",o=await fetch(`${a}/m5t/v5/acctGroup`);if(!o.ok)throw new Error(`HTTP ${o.status}`);const i=await o.json(),r=(Array.isArray(i?.data)?i.data:[]).filter(u=>u.class===rt&&(!u.parent||u.parent===t.guid));if(!r.length){e.innerHTML=Z("group_off","No clients yet. Add your first client to start managing magnets on their behalf."),n&&(n.textContent="");return}e.innerHTML=`<div class="clients-grid">${r.map(oa).join("")}</div>`,n&&(n.textContent=`${r.length} client${r.length===1?"":"s"}`),e.querySelectorAll(".client-card__invite").forEach(u=>{u.addEventListener("click",()=>sa(u.dataset.clientGuid,u.dataset.clientName))})}catch(a){console.warn("[clients] load failed:",a),e.innerHTML=Z("error","Couldn’t load clients. Please try again."),n&&(n.textContent="")}}}function ia(t){if(!t?.guid){be("Only reseller / agency accounts can add clients.","error");return}const e=document.createElement("div");e.className="client-modal-scrim";const n=document.createElement("div");n.className="client-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${L(t.name||"your agency")}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`,document.body.appendChild(e),document.body.appendChild(n),requestAnimationFrame(()=>{e.classList.add("open"),n.classList.add("open")});const a=n.querySelector("#client-name-input"),o=n.querySelector("#client-modal-error"),i=n.querySelector('[data-act="create"]');a?.focus();const s=()=>{e.classList.remove("open"),n.classList.remove("open"),document.removeEventListener("keydown",r),setTimeout(()=>{e.remove(),n.remove()},200)},r=p=>{p.key==="Escape"&&s()};document.addEventListener("keydown",r),e.addEventListener("click",s),n.querySelector(".client-modal__close")?.addEventListener("click",s),n.querySelector('[data-act="cancel"]')?.addEventListener("click",s);const u=async()=>{const p=(a?.value||"").trim();if(o.textContent="",!p){o.textContent="Please enter a client name.",a?.focus();return}i.disabled=!0;const _=i.innerHTML;i.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…';try{const b=A.getConfig?.().BASE_URL||"",y=await fetch(`${b}/m5t/v5/acctGroup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({class:rt,caption:p,parent:t.guid})}),w=await y.json().catch(()=>({}));if(!y.ok||!w?.ok){const N=y.status===403?"You are not authorized to add a client here.":w?.message||w?.error||`Failed (HTTP ${y.status})`;throw new Error(N)}be(`Added client “${p}”`,"success"),s(),await dt(t)}catch(b){console.warn("[clients] create failed:",b),o.textContent=b.message||"Something went wrong. Please try again.",i.disabled=!1,i.innerHTML=_}};i?.addEventListener("click",u),a?.addEventListener("keydown",p=>{p.key==="Enter"&&u()})}function sa(t,e){if(!t)return;const n=document.createElement("div");n.className="client-modal-scrim";const a=document.createElement("div");a.className="client-modal",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${L(e||"this client")}</strong> to a read-only login for their account.</p>
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
    </div>`,document.body.appendChild(n),document.body.appendChild(a),requestAnimationFrame(()=>{n.classList.add("open"),a.classList.add("open")});const o=()=>{n.classList.remove("open"),a.classList.remove("open"),document.removeEventListener("keydown",i),setTimeout(()=>{n.remove(),a.remove()},200)},i=_=>{_.key==="Escape"&&o()};document.addEventListener("keydown",i),n.addEventListener("click",o),a.querySelector(".client-modal__close")?.addEventListener("click",o),a.querySelector('[data-act="cancel"]')?.addEventListener("click",o);const s=a.querySelector("#inv-email"),r=a.querySelector("#inv-error"),u=a.querySelector('[data-act="send"]');s?.focus();const p=_=>_.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(_.dataset.url),_.textContent="Copied!",setTimeout(()=>{_.textContent="Copy link"},1500)}catch{}});(async function(){const b=a.querySelector("#invite-pending");if(b)try{const y=A.getConfig?.().BASE_URL||"",N=await(await fetch(`${y}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invites`)).json().catch(()=>({})),g=N.ok&&Array.isArray(N.invites)?N.invites:[];if(!g.length){b.innerHTML="";return}b.innerHTML=`
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${g.map(h=>`
            <div class="invite-pending__row">
              <span class="invite-pending__email${h.expired?" expired":""}" title="${L(h.email)}">${L(h.email)}${h.expired?" · expired":""}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${L(h.inviteUrl)}">Copy link</button>
            </div>`).join("")}
        </div>`,b.querySelectorAll(".invite-pending__copy").forEach(p)}catch{b.innerHTML=""}})(),u?.addEventListener("click",async()=>{const _=(a.querySelector("#inv-email").value||"").trim(),b=(a.querySelector("#inv-first").value||"").trim(),y=(a.querySelector("#inv-last").value||"").trim();if(r.textContent="",!_||!b||!y){r.textContent="Email, first, and last name are required.";return}u.disabled=!0;const w=u.innerHTML;u.innerHTML='<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';try{const N=A.getConfig?.().BASE_URL||"",g=await fetch(`${N}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:_,first:b,last:y})}),h=await g.json().catch(()=>({}));if(!g.ok||!h.ok){const R=g.status===409?"A user with that email already exists.":g.status===403?"You are not authorized to invite for this client.":h.message||h.error||`Failed (HTTP ${g.status})`;throw new Error(R)}be(`Invite created for ${_}`,"success"),a.querySelector("#invite-body").innerHTML=`
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${h.emailQueued?`An invite email is on its way to <strong>${L(_)}</strong>.`:`Invite created for <strong>${L(_)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly — it lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${L(h.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;const v=a.querySelector("#inv-link");a.querySelector("#inv-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(v.value),a.querySelector("#inv-copy").textContent="Copied!"}catch{v.select()}}),a.querySelector('[data-act="done"]')?.addEventListener("click",o)}catch(N){console.warn("[clients] invite failed:",N),r.textContent=N.message||"Something went wrong. Please try again.",u.disabled=!1,u.innerHTML=w}})}const ra={render:lt,init:ct},la=Object.freeze(Object.defineProperty({__proto__:null,default:ra,init:ct,render:lt},Symbol.toStringTag,{value:"Module"}));
//# sourceMappingURL=index.js.map
