var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var d=s(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define(`Navigo`,[],r):typeof e==`object`?e.Navigo=r():n.Navigo=r()})(typeof self<`u`?self:e,(function(){return function(){var e={407:function(e,t,n){n.d(t,{default:function(){return pe}});var r=/([:*])(\w+)/g,i=/\*/g,a=/\/\?/g;function o(e){return e===void 0&&(e=`/`),h()?location.pathname+location.search+location.hash:e}function s(e){return e.replace(/\/+$/,``).replace(/^\/+/,``)}function c(e){return typeof e==`string`}function l(e){return e&&e.indexOf(`#`)>=0&&e.split(`#`).pop()||``}function u(e){var t=s(e).split(/\?(.*)?$/);return[s(t[0]),t.slice(1).join(``)]}function d(e){for(var t={},n=e.split(`&`),r=0;r<n.length;r++){var i=n[r].split(`=`);if(i[0]!==``){var a=decodeURIComponent(i[0]);t[a]?(Array.isArray(t[a])||(t[a]=[t[a]]),t[a].push(decodeURIComponent(i[1]||``))):t[a]=decodeURIComponent(i[1]||``)}}return t}function f(e,t){var n,o=u(s(e.currentLocationPath)),f=o[0],p=o[1],m=p===``?null:d(p),h=[];if(c(t.path)){if(n=`(?:/^|^)`+s(t.path).replace(r,(function(e,t,n){return h.push(n),`([^/]+)`})).replace(i,`?(?:.*)`).replace(a,`/?([^/]+|)`)+`$`,s(t.path)===``&&s(f)===``)return{url:f,queryString:p,hashString:l(e.to),route:t,data:null,params:m}}else n=t.path;var g=new RegExp(n,``),_=f.match(g);if(_){var v=c(t.path)?function(e,t){return t.length===0?null:e?e.slice(1,e.length).reduce((function(e,n,r){return e===null&&(e={}),e[t[r]]=decodeURIComponent(n),e}),null):null}(_,h):_.groups?_.groups:_.slice(1);return{url:s(f.replace(RegExp(`^`+e.instance.root),``)),queryString:p,hashString:l(e.to),route:t,data:v,params:m}}return!1}function p(){return!(typeof window>`u`||!window.history||!window.history.pushState)}function m(e,t){return e[t]===void 0||!0===e[t]}function h(){return typeof window<`u`}function g(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter((function(e){return e})).forEach((function(e){[`before`,`after`,`already`,`leave`].forEach((function(n){e[n]&&(t[n]||(t[n]=[]),t[n].push(e[n]))}))})),t}function _(e,t,n){var r=t||{},i=0;(function t(){e[i]?Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](r)?e[i][1]:e[i][2])),t()):e[i](r,(function(e){e===void 0||!0===e?(i+=1,t()):n&&n(r)})):n&&n(r)})()}function v(e,t){e.currentLocationPath===void 0&&(e.currentLocationPath=e.to=o(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function y(e,t){for(var n=0;n<e.instance.routes.length;n++){var r=f(e,e.instance.routes[n]);if(r&&(e.matches||=[],e.matches.push(r),e.resolveOptions.strategy===`ONE`))return void t()}t()}function ee(e,t){e.navigateOptions&&(e.navigateOptions.shouldResolve!==void 0&&console.warn(`"shouldResolve" is deprecated. Please check the documentation.`),e.navigateOptions.silent!==void 0&&console.warn(`"silent" is deprecated. Please check the documentation.`)),t()}function b(e,t){!0===e.navigateOptions.force?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}_.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};var te=h(),ne=p();function re(e,t){if(m(e.navigateOptions,`updateBrowserURL`)){var n=(`/`+e.to).replace(/\/\//g,`/`),r=te&&e.resolveOptions&&!0===e.resolveOptions.hash;ne?(history[e.navigateOptions.historyAPIMethod||`pushState`](e.navigateOptions.stateObj||{},e.navigateOptions.title||``,r?`#`+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout((function(){if(!r){var t=location.hash;location.hash=``,location.hash=t}e.instance.__freezeListening=!1}),1))):te&&(window.location.href=e.to)}t()}function ie(e,t){var n=e.instance;n.lastResolved()?_(n.lastResolved().map((function(t){return function(n,r){if(t.route.hooks&&t.route.hooks.leave){var i=!1,a=e.instance.matchLocation(t.route.path,e.currentLocationPath,!1);i=t.route.path===`*`?!(e.matches&&e.matches.find((function(e){return t.route.path===e.route.path}))):!a,m(e.navigateOptions,`callHooks`)&&i?_(t.route.hooks.leave.map((function(t){return function(n,r){return t((function(t){!1===t?e.instance.__markAsClean(e):r()}),e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}})).concat([function(){return r()}])):r()}else r()}})),{},(function(){return t()})):t()}function ae(e,t){m(e.navigateOptions,`updateState`)&&e.instance._setCurrent(e.matches),t()}var oe=[function(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString)return n.forEach((function(t){t.route.hooks&&t.route.hooks.already&&m(e.navigateOptions,`callHooks`)&&t.route.hooks.already.forEach((function(t){return t(e.match)}))})),void t(!1);t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.before&&m(e.navigateOptions,`callHooks`)?_(e.match.route.hooks.before.map((function(t){return function(n,r){return t((function(t){!1===t?e.instance.__markAsClean(e):r()}),e.match)}})).concat([function(){return t()}])):t()},function(e,t){m(e.navigateOptions,`callHandler`)&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.after&&m(e.navigateOptions,`callHooks`)&&e.match.route.hooks.after.forEach((function(t){return t(e.match)})),t()}],se=[ie,function(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var r=u(e.currentLocationPath),i=r[0],a=r[1],o=l(e.to);n.path=s(i);var c={url:n.path,queryString:a,hashString:o,data:null,route:n,params:a===``?null:d(a)};e.matches=[c],e.match=c}t()},_.if((function(e){return e.notFoundHandled}),oe.concat([ae]),[function(e,t){e.resolveOptions&&!1!==e.resolveOptions.noMatchWarning&&e.resolveOptions.noMatchWarning!==void 0||console.warn(`Navigo: "`+e.currentLocationPath+`" didn't match any of the registered routes.`),t()},function(e,t){e.instance._setCurrent(null),t()}])];function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(e,t){var n=0;ie(e,(function r(){n===e.matches.length?ae(e,t):_(oe,ce({},e,{match:e.matches[n]}),(function(){n+=1,r()}))}))}function ue(e){e.instance.__markAsClean(e)}function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var fe=`[data-navigo]`;function pe(e,t){var n,r=t||{strategy:`ONE`,hash:!1,noMatchWarning:!1,linksSelector:fe},i=this,a=`/`,m=null,te=[],ne=!1,ie=p(),ae=h();function oe(e){return e.indexOf(`#`)>=0&&(e=!0===r.hash?e.split(`#`)[1]||`/`:e.split(`#`)[0]),e}function ce(e){return s(a+`/`+s(e))}function pe(e,t,n,r){return e=c(e)?ce(e):e,{name:r||s(String(e)),path:e,handler:t,hooks:g(n)}}function me(e,t){if(!i.__dirty){i.__dirty=!0,e=e?s(a)+`/`+s(e):void 0;var n={instance:i,to:e,currentLocationPath:e,navigateOptions:{},resolveOptions:de({},r,t)};return _([v,y,_.if((function(e){var t=e.matches;return t&&t.length>0}),le,se)],n,ue),!!n.matches&&n.matches}i.__waiting.push((function(){return i.resolve(e,t)}))}function he(e,t){if(i.__dirty)i.__waiting.push((function(){return i.navigate(e,t)}));else{i.__dirty=!0,e=s(a)+`/`+s(e);var n={instance:i,to:e,navigateOptions:t||{},resolveOptions:t&&t.resolveOptions?t.resolveOptions:r,currentLocationPath:oe(e)};_([ee,b,y,_.if((function(e){var t=e.matches;return t&&t.length>0}),le,se),re,ue],n,ue)}}function ge(){if(ae)return(ae?[].slice.call(document.querySelectorAll(r.linksSelector||fe)):[]).forEach((function(e){e.getAttribute(`data-navigo`)!==`false`&&e.getAttribute(`target`)!==`_blank`?e.hasListenerAttached||(e.hasListenerAttached=!0,e.navigoHandler=function(t){if((t.ctrlKey||t.metaKey)&&t.target.tagName.toLowerCase()===`a`)return!1;var n=e.getAttribute(`href`);if(n==null)return!1;if(n.match(/^(http|https)/)&&typeof URL<`u`)try{var r=new URL(n);n=r.pathname+r.search}catch{}var a=function(e){if(!e)return{};var t,n=e.split(`,`),r={};return n.forEach((function(e){var n=e.split(`:`).map((function(e){return e.replace(/(^ +| +$)/g,``)}));switch(n[0]){case`historyAPIMethod`:r.historyAPIMethod=n[1];break;case`resolveOptionsStrategy`:t||={},t.strategy=n[1];break;case`resolveOptionsHash`:t||={},t.hash=n[1]===`true`;break;case`updateBrowserURL`:case`callHandler`:case`updateState`:case`force`:r[n[0]]=n[1]===`true`}})),t&&(r.resolveOptions=t),r}(e.getAttribute(`data-navigo-options`));ne||(t.preventDefault(),t.stopPropagation(),i.navigate(s(n),a))},e.addEventListener(`click`,e.navigoHandler)):e.hasListenerAttached&&e.removeEventListener(`click`,e.navigoHandler)})),i}function _e(e,t,n){var r=te.find((function(t){return t.name===e})),i=null;if(r){if(i=r.path,t)for(var o in t)i=i.replace(`:`+o,t[o]);i=i.match(/^\//)?i:`/`+i}return i&&n&&!n.includeRoot&&(i=i.replace(RegExp(`^/`+a),``)),i}function ve(e){var t=u(s(e)),r=t[0],i=t[1],a=i===``?null:d(i);return{url:r,queryString:i,hashString:l(e),route:pe(r,(function(){}),[n],r),data:null,params:a}}function ye(e,t,n){return typeof t==`string`&&(t=be(t)),t?(t.hooks[e]||(t.hooks[e]=[]),t.hooks[e].push(n),function(){t.hooks[e]=t.hooks[e].filter((function(e){return e!==n}))}):(console.warn(`Route doesn't exists: `+t),function(){})}function be(e){return typeof e==`string`?te.find((function(t){return t.name===ce(e)})):te.find((function(t){return t.handler===e}))}e?a=s(e):console.warn(`Navigo requires a root path in its constructor. If not provided will use "/" as default.`),this.root=a,this.routes=te,this.destroyed=ne,this.current=m,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(e){e.instance.__dirty=!1,e.instance.__waiting.length>0&&e.instance.__waiting.shift()()},this.on=function(e,t,r){var i=this;return typeof e!=`object`||e instanceof RegExp?(typeof e==`function`&&(r=t,t=e,e=a),te.push(pe(e,t,[n,r])),this):(Object.keys(e).forEach((function(t){if(typeof e[t]==`function`)i.on(t,e[t]);else{var r=e[t],a=r.uses,o=r.as,s=r.hooks;te.push(pe(t,a,[n,s],o))}})),this)},this.off=function(e){return this.routes=te=te.filter((function(t){return c(e)?s(t.path)!==s(e):typeof e==`function`?e!==t.handler:String(t.path)!==String(e)})),this},this.resolve=me,this.navigate=he,this.navigateByName=function(e,t,n){var r=_e(e,t);return r!==null&&(he(r.replace(RegExp(`^/?`+a),``),n),!0)},this.destroy=function(){this.routes=te=[],ie&&window.removeEventListener(`popstate`,this.__popstateListener),this.destroyed=ne=!0},this.notFound=function(e,t){return i._notFoundRoute=pe(`*`,e,[n,t],`__NOT_FOUND__`),this},this.updatePageLinks=ge,this.link=function(e){return`/`+a+`/`+s(e)},this.hooks=function(e){return n=e,this},this.extractGETParameters=function(e){return u(oe(e))},this.lastResolved=function(){return m},this.generate=_e,this.getLinkPath=function(e){return e.getAttribute(`href`)},this.match=function(e){var t={instance:i,currentLocationPath:e,to:e,navigateOptions:{},resolveOptions:r};return y(t,(function(){})),!!t.matches&&t.matches},this.matchLocation=function(e,t,n){t===void 0||n!==void 0&&!n||(t=ce(t));var r={instance:i,to:t,currentLocationPath:t};return v(r,(function(){})),typeof e==`string`&&(e=n===void 0||n?ce(e):e),f(r,{name:String(e),path:e,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return ve(s(o(a)).replace(RegExp(`^`+a),``))},this.addBeforeHook=ye.bind(this,`before`),this.addAfterHook=ye.bind(this,`after`),this.addAlreadyHook=ye.bind(this,`already`),this.addLeaveHook=ye.bind(this,`leave`),this.getRoute=be,this._pathToMatchObject=ve,this._clean=s,this._checkForAHash=oe,this._setCurrent=function(e){return m=i.current=e},function(){ie&&(this.__popstateListener=function(){i.__freezeListening||me()},window.addEventListener(`popstate`,this.__popstateListener))}.call(this),ge.call(this)}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(407)}().default}))})),f=s(((e,t)=>{(function(n,r){var i={};n.PubSub?(i=n.PubSub,console.warn(`PubSub already loaded, using existing version`)):(n.PubSub=i,r(i)),typeof e==`object`?(t!==void 0&&t.exports&&(e=t.exports=i),e.PubSub=i,t.exports=e=i):typeof define==`function`&&define.amd&&define(function(){return i})})(typeof window==`object`&&window||e||global,function(e){var t={},n=-1,r=`*`;function i(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}function a(e){return function(){throw e}}function o(e,t,n){try{e(t,n)}catch(e){setTimeout(a(e),0)}}function s(e,t,n){e(t,n)}function c(e,n,r,i){var a=t[n],c=i?s:o,l;if(Object.prototype.hasOwnProperty.call(t,n))for(l in a)Object.prototype.hasOwnProperty.call(a,l)&&c(a[l],e,r)}function l(e,t,n){return function(){var i=String(e),a=i.lastIndexOf(`.`);for(c(e,e,t,n);a!==-1;)i=i.substr(0,a),a=i.lastIndexOf(`.`),c(e,i,t,n);c(e,r,t,n)}}function u(e){var n=String(e);return!!(Object.prototype.hasOwnProperty.call(t,n)&&i(t[n]))}function d(e){for(var t=String(e),n=u(t)||u(r),i=t.lastIndexOf(`.`);!n&&i!==-1;)t=t.substr(0,i),i=t.lastIndexOf(`.`),n=u(t);return n}function f(e,t,n,r){e=typeof e==`symbol`?e.toString():e;var i=l(e,t,r);return d(e)?(n===!0?i():setTimeout(i,0),!0):!1}e.publish=function(t,n){return f(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return f(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if(typeof r!=`function`)return!1;e=typeof e==`symbol`?e.toString():e,Object.prototype.hasOwnProperty.call(t,e)||(t[e]={});var i=`uid_`+String(++n);return t[e][i]=r,i},e.subscribeAll=function(t){return e.subscribe(r,t)},e.subscribeOnce=function(t,n){var r=e.subscribe(t,function(){e.unsubscribe(r),n.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0&&delete t[n]},e.countSubscriptions=function(e){var n,r,i=0;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0){for(r in t[n])i++;break}return i},e.getSubscriptions=function(e){var n,r=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0&&r.push(n);return r},e.unsubscribe=function(n){var r=typeof n==`string`&&(Object.prototype.hasOwnProperty.call(t,n)||function(e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0)return!0;return!1}(n)),i=!r&&typeof n==`string`,a=typeof n==`function`,o=!1,s,c,l;if(r){e.clearSubscriptions(n);return}for(s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(c=t[s],i&&c[n]){delete c[n],o=n;break}if(a)for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&c[l]===n&&(delete c[l],o=!0)}return o}})})),p,m=o((()=>{p=Object.freeze({APP:`APP`,APP_READY:`APP.READY`,APP_ERROR:`APP.ERROR`,APP_SIGNOUT:`APP.SIGNOUT`,APP_AUTH:`APP.AUTH`,APP_USER_LOADED:`APP.USER.LOADED`,ROUTE_NAV:`ROUTE.NAV.GO`,ROUTE_NAV_BEFORE:`ROUTE.NAV.BEFORE`,ROUTE_NAV_AFTER:`ROUTE.NAV.AFTER`,ROUTE_NAV_ERROR:`ROUTE.NAV.ERROR`,AUTH_SIGNIN:`AUTH.SIGNIN.GO`,AUTH_SIGNIN_SUCCESS:`AUTH.SIGNIN.SUCCESS`,AUTH_SIGNIN_FAIL:`AUTH.SIGNIN.FAIL`,AUTH_SIGNUP:`AUTH.SIGNUP.GO`,AUTH_SIGNUP_SUCCESS:`AUTH.SIGNUP.SUCCESS`,AUTH_SIGNUP_FAIL:`AUTH.SIGNUP.FAIL`,AUTH_VERIFY_LINK:`AUTH.VERIFY.LINK`,AUTH_SIGNOUT:`AUTH.SIGNOUT.GO`,AUTH_SIGNOUT_SUCCESS:`AUTH.SIGNOUT.SUCCESS`,AUTH_FORGOT:`AUTH.FORGOT.GO`,AUTH_FORGOT_SUCCESS:`AUTH.FORGOT.SUCCESS`,AUTH_RESETHASH:`AUTH.RESETHASH.GO`,AUTH_RESETHASH_SUCCESS:`AUTH.RESETHASH.SUCCESS`,AUTH_RESETHASH_NAV:`AUTH.RESETHASH.NAV`,AUTH_TOKEN_EXPIRED:`AUTH.TOKEN.EXPIRED`,AUTH_TOKEN_INVALID:`AUTH.TOKEN.INVALID`,AUTH_SCOPE_LOADED:`AUTH.SCOPE.LOADED`,M5T_PRIMARY_NAV:`M5T_PRIMARY_NAV`,M5T_PRIMARY_NAV_LOGO_TAP:`M5T_PRIMARY_NAV.LOGO_TAP`,M5T_PRIMARY_NAV_HOVER:`M5T_PRIMARY_NAV.HOVER`,M5T_PRIMARY_NAV_TAP:`M5T_PRIMARY_NAV.TAP`,M5T_PRIMARY_NAV_DOUBLE_TAP:`M5T_PRIMARY_NAV.DOUBLE_TAP`,M5T_PRIMARY_NAV_LONG_TAP:`M5T_PRIMARY_NAV.LONG_TAP`,M5T_SIDE_NAV:`M5T_SIDE_NAV`,M5T_SIDE_NAV_TAP:`M5T_SIDE_NAV.TAP`,M5T_SIDE_NAV_COLLAPSE:`M5T_SIDE_NAV.COLLAPSE`,M5T_SIDE_NAV_LOGO_TAP:`M5T_SIDE_NAV.LOGO_TAP`,M5T_SIDE_NAV_ORG_SWITCH:`M5T_SIDE_NAV.ORG_SWITCH`,M5T_SIDE_NAV_FOOTER_ACTION:`M5T_SIDE_NAV.FOOTER_ACTION`,UI_LOADING_START:`UI.LOADING.START`,UI_LOADING_END:`UI.LOADING.END`,UI_TOAST:`UI.TOAST`,UI_MODAL_OPEN:`UI.MODAL.OPEN`,UI_MODAL_CLOSE:`UI.MODAL.CLOSE`,UI_THEME_CHANGED:`UI.THEME.CHANGED`,UI_WELCOME_BACK_CLICKED:`UI.WELCOME_BACK_CLICKED`,DATA_REFRESH:`DATA.REFRESH`,DATA_UPDATE:`DATA.UPDATE`,DATA_ERROR:`DATA.ERROR`,I18N:`I18N`,I18N_SET_LANG:`I18N.SET_LANG`,CONVERSATION:`CONVERSATION`,CONVERSATION_PROMPT:`CONVERSATION.PROMPT`,CONVERSATION_PROMPT_AGENT_CANVAS:`CONVERSATION.PROMPT.AGENT_CANVAS`,CONVERSATION_PROMPT_AGENT:`CONVERSATION.PROMPT.AGENT`,CONVERSATION_PROMPT_CANVAS:`CONVERSATION.PROMPT.CANVAS`,CONVERSATION_PROMPT_STAGE:`CONVERSATION.PROMPT.STAGE`,CONVERSATION_RESPONSE:`CONVERSATION.RESPONSE`,CONVERSATION_RESPONSE_CANVAS:`CONVERSATION.RESPONSE.CANVAS`,CONVERSATION_RESPONSE_WORKFLOW:`CONVERSATION.RESPONSE.WORKFLOW`,CANVAS:`CANVAS`,CANVAS_DO_SCROLL:`CANVAS.DO.SCROLL`,MESSAGE:`MESSAGE`,MESSAGE_CREATE:`MESSAGE.CREATE`,MESSAGE_CREATED:`MESSAGE.CREATED`,MESSAGE_EDIT:`MESSAGE.EDIT`,MESSAGE_UPDATED:`MESSAGE.UPDATED`,MESSAGE_DELETE:`MESSAGE.DELETE`,MESSAGE_DELETED:`MESSAGE.DELETED`,MESSAGE_REFRESH:`MESSAGE.REFRESH`})}));function h(e,t=null){if(e in v)return v[e];if(typeof process<`u`&&{}[e]){let t={}[e];return t===`true`?!0:t===`false`?!1:isNaN(t)?t:Number(t)}if({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_API_BASE_URL:`http://localhost:3333`}[e]){let t={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_API_BASE_URL:`http://localhost:3333`}[e];return t===`true`?!0:t===`false`?!1:isNaN(t)?t:Number(t)}return t}function g(e){return h(e,!1)===!0}function _(){return{...v}}var v,y=o((()=>{v=Object.freeze({FF_SSE_LS_SESSION_USER:`mvv_session_user`,FF_SSE_LS_TOKEN:`mvv`,FF_SSE_LS_THEME:`mvv_theme`,FF_SSE_UI_DARK_MODE:!0,FF_SSE_UI_ANIMATIONS:!0,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:`main_carousel_nav`,FF_CLIENT_LS_SESSION_ENTITY:`sse_entity`,FF_CLIENT_LS_DEEP_LINK:`sse_deeplink`,FF_CLIENT_ROUTE_SIGNIN:`signin_route`,FF_CLIENT_ROUTE_SIGNUP:`signup_route`,FF_CLIENT_ROUTE_HOME:`home_route`,FF_CLIENT_ROUTE_RESET_HASH:`resethash_route`,FF_CLIENT_ROUTE_RESET_FORGOT:`resetforgot_route`,FF_CLIENT_ROUTE_SIGNOUT:`signout_route`,FF_CLIENT_ROUTE_ERROR:`error_route`,FF_CLIENT_ROUTE_VERF_LINK:`verf_link_route`,FF_CLIENT_ROUTE_OFFLINE:`offline_route`,FF_CLIENT_PROTECTED_ROUTES:[`home_route`,`resethash_route`,`signout_route`,`user_management_route`],FF_CLIENT_ENDPOINT_SIGNIN:`/m5t/v5/acctEntity/signin`,FF_CLIENT_ENDPOINT_SIGNOUT:`/m5t/v5/acctEntity/signout`,FF_CLIENT_ENDPOINT_SIGNUP:`/m5t/v5/acctEntity/`,FF_CLIENT_ENDPOINT_RESET_HASH:`/m5t/v5/acctEntity/resetHash`,FF_CLIENT_ENDPOINT_RESET_FORGOT:`/m5t/v5/acctEntity/resetforgot`,FF_CLIENT_ENDPOINT_PING:`/ping`,FF_CLIENT_ENDPOINT_METER:`/m5t/v5/coreMeter/`,FF_CLIENT_METER_DEEP_LINK:`deep_link_access`,FF_CLIENT_METER_SIGNOUT_CLIENT:`signout_client_initiated`,FF_CLIENT_METER_SIGNOUT_SERVER:`signout_server_initiated`,FF_CLIENT_METER_PING_SUCCESS:`ping_auth_success`,FF_CLIENT_METER_PING_FAILURE:`ping_auth_failure`,FF_SSE_I18N_PRODUCT:`SSE`,FF_SSE_I18N_WHITELABEL:`M5T`,FF_SSE_I18N_LANG:`en`,FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:`mvv_user_lang`,FF_SSE_LS_WHITELABEL:`mvv_whitelabel`,FF_API_RATELIMIT_SIGNIN_ENFORCE:!0,FF_API_RATELIMIT_SIGNIN_IP_LIMIT:20,FF_API_RATELIMIT_SIGNIN_EMAIL_LIMIT:10,FF_API_RATELIMIT_FORGOT_ENFORCE:!0,FF_API_RATELIMIT_FORGOT_IP_LIMIT:15,FF_API_RATELIMIT_FORGOT_EMAIL_LIMIT:5,FF_API_RATELIMIT_RESET_ACCOUNT_LIMIT:5,FF_API_RATELIMIT_CAPTURE_ENFORCE:!0,FF_API_RATELIMIT_CAPTURE_LIMIT:30,FF_API_RATELIMIT_EVENT_ENFORCE:!0,FF_API_RATELIMIT_EVENT_LIMIT:600,FF_API_RATELIMIT_CSP_PING_ENFORCE:!0,FF_API_RATELIMIT_CSP_PING_LIMIT:30,FF_API_RATELIMIT_WEBAUTHN_AUTH_ENFORCE:!0,FF_API_RATELIMIT_WEBAUTHN_AUTH_IP_LIMIT:20,FF_API_RATELIMIT_INTEGRATIONS_ENFORCE:!0,FF_API_RATELIMIT_INTEGRATIONS_LIMIT:60,FF_API_RATELIMIT_QUESTIONNAIRE_ENFORCE:!0,FF_API_RATELIMIT_QUESTIONNAIRE_LIMIT:30,FF_API_RATELIMIT_DELIVERABLE_ENFORCE:!0,FF_API_RATELIMIT_DELIVERABLE_LIMIT:30,FF_API_RATELIMIT_PAIRING_ENFORCE:!0,FF_API_RATELIMIT_PAIRING_LIMIT:20,FF_API_RATELIMIT_SITE_OPS_ENFORCE:!0,FF_API_RATELIMIT_SITE_OPS_LIMIT:120,FF_API_RATELIMIT_AUTHENTICATED_ENFORCE:!0,FF_API_RATELIMIT_AUTHENTICATED_LIMIT:600,FF_API_MAGNET_REQUIRE_ORIGIN_ENFORCE:!1,FF_API_RATELIMIT_GLOBAL_ENFORCE:!0,FF_API_RATELIMIT_GLOBAL_LIMIT:2e3}),typeof module<`u`&&module.exports&&(module.exports={FEATURE_FLAGS:v,getFlag:h,isEnabled:g,getAllFlags:_})})),ee=u(d(),1),b=u(f(),1);m(),y();var te={success:{border:`var(--color-success, #009473)`,bg:`var(--color-success-soft, rgba(0,148,115,0.10))`,icon:`check_circle`},danger:{border:`var(--color-danger, #DD4124)`,bg:`var(--color-danger-soft, rgba(221,65,36,0.09))`,icon:`error`},error:{border:`var(--color-danger, #DD4124)`,bg:`var(--color-danger-soft, rgba(221,65,36,0.09))`,icon:`error`},warning:{border:`var(--color-warning, #D97706)`,bg:`var(--color-warning-soft, #FEF3C7)`,icon:`warning`},info:{border:`var(--color-info, #0D9488)`,bg:`var(--color-info-soft, #CCFBF1)`,icon:`info`}},ne=4500,re=220,ie=null,ae=!1;function oe(){if(ae)return;let e=document.createElement(`style`);e.id=`m5t-toast-styles`,e.textContent=`
    .m5t-toast-stack { position: fixed; top: 16px; right: 16px; z-index: 6000; display: flex; flex-direction: column; gap: 10px; pointer-events: none; max-width: min(380px, calc(100vw - 32px)); }
    .m5t-toast { pointer-events: auto; display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); border: 1px solid; box-shadow: 0 8px 24px rgba(11,18,32,0.16); font-size: 0.86rem; line-height: 1.4; color: var(--color-text, #0B1220); opacity: 0; transform: translateX(16px); transition: opacity ${re}ms ease, transform ${re}ms ease; }
    .m5t-toast.is-in { opacity: 1; transform: none; }
    .m5t-toast.is-out { opacity: 0; transform: translateX(16px); }
    .m5t-toast .material-symbols-outlined { font-size: 19px; flex: 0 0 auto; margin-top: 1px; }
    .m5t-toast__msg { flex: 1 1 auto; min-width: 0; word-break: break-word; }
    .m5t-toast__close { flex: 0 0 auto; appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); padding: 2px; line-height: 1; font-size: 17px; border-radius: 6px; }
    .m5t-toast__close:hover { color: var(--color-text, #0B1220); background: var(--color-surface-2, rgba(11,18,32,0.06)); }
    @media (prefers-reduced-motion: reduce) { .m5t-toast { transition: none; } }
  `,document.head.appendChild(e),ae=!0}function se(){return ie&&document.body.contains(ie)?ie:(ie=document.createElement(`div`),ie.className=`m5t-toast-stack`,ie.setAttribute(`role`,`status`),ie.setAttribute(`aria-live`,`polite`),document.body.appendChild(ie),ie)}function ce(e){let t=e&&e.message;if(!t)return;oe();let n=te[e.type]||te.info,r=document.createElement(`div`);r.className=`m5t-toast`,r.style.borderColor=n.border,r.style.background=n.bg,r.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true" style="color:${n.border}">${n.icon}</span><span class="m5t-toast__msg"></span><button type="button" class="m5t-toast__close" aria-label="Dismiss"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>`,r.querySelector(`.m5t-toast__msg`).textContent=String(t),se().appendChild(r),requestAnimationFrame(()=>r.classList.add(`is-in`));let i=!1,a=()=>{i||(i=!0,clearTimeout(o),r.classList.remove(`is-in`),r.classList.add(`is-out`),setTimeout(()=>r.remove(),re))},o=setTimeout(a,ne);r.querySelector(`.m5t-toast__close`).addEventListener(`click`,a)}function le(){let e=e=>e=>{let t=e.detail?.pubsubTopic;t&&b.default.publish(t,e.detail)};document.addEventListener(`nav-select`,e(`nav-select`)),document.addEventListener(`logo-click`,e(`logo-click`)),document.addEventListener(`nav-hover`,e(`nav-hover`)),document.addEventListener(`nav-double-tap`,e(`nav-double-tap`)),document.addEventListener(`nav-long-tap`,e(`nav-long-tap`)),document.addEventListener(`message-sent`,e(`message-sent`))}function ue(){console.log(`[AppEvents] Initializing event listeners...`),b.default.subscribe(p.APP_READY,(e,t)=>{console.log(`[AppEvents] APP_READY:`,t)}),b.default.subscribe(p.APP_ERROR,(e,t)=>{console.error(`[AppEvents] APP_ERROR:`,t)}),b.default.subscribe(p.APP_SIGNOUT,(e,t)=>{console.log(`[AppEvents] APP_SIGNOUT:`,t)}),b.default.subscribe(p.ROUTE_NAV_BEFORE,(e,t)=>{console.log(`[AppEvents] ROUTE_NAV_BEFORE:`,t),b.default.publish(p.UI_LOADING_START)}),b.default.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{console.log(`[AppEvents] ROUTE_NAV_AFTER:`,t),b.default.publish(p.UI_LOADING_END)}),b.default.subscribe(p.ROUTE_NAV_ERROR,(e,t)=>{console.error(`[AppEvents] ROUTE_NAV_ERROR:`,t),b.default.publish(p.APP_ERROR,{message:`Navigation error`,details:t})}),b.default.subscribe(p.AUTH_SIGNIN_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNIN_SUCCESS:`,t)}),b.default.subscribe(p.AUTH_SIGNIN_FAIL,(e,t)=>{console.error(`[AppEvents] AUTH_SIGNIN_FAIL:`,t),b.default.publish(p.UI_TOAST,{message:t.message||`Sign in failed`,type:`danger`})}),b.default.subscribe(p.AUTH_SIGNUP_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNUP_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Account created! Please check your email to verify.`,type:`success`}),b.default.publish(p.AUTH_VERIFY_LINK)}),b.default.subscribe(p.AUTH_VERIFY_LINK,(e,t)=>{console.log(`[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route`),window.router&&window.router.navigate(`/verf-link`)}),b.default.subscribe(p.AUTH_SIGNUP_FAIL,(e,t)=>{console.error(`[AppEvents] AUTH_SIGNUP_FAIL:`,t),b.default.publish(p.UI_TOAST,{message:t.message||`Sign up failed`,type:`danger`})}),b.default.subscribe(p.AUTH_SIGNOUT_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNOUT_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Signed out successfully`,type:`info`})}),b.default.subscribe(p.AUTH_SIGNUP,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNUP: Navigating to signup route`),window.router&&window.router.navigate(`/signup`)}),b.default.subscribe(p.AUTH_FORGOT,(e,t)=>{console.log(`[AppEvents] AUTH_FORGOT: Navigating to forgot route`),window.router&&window.router.navigate(`/forgot`)}),b.default.subscribe(p.AUTH_FORGOT_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_FORGOT_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Password reset email sent!`,type:`success`})}),b.default.subscribe(p.AUTH_RESETHASH_NAV,(e,t)=>{console.log(`[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route`),window.router&&window.router.navigate(`/resethash`)}),b.default.subscribe(p.AUTH_RESETHASH_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_RESETHASH_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Password reset successfully! Please sign in.`,type:`success`})}),b.default.subscribe(p.AUTH_TOKEN_EXPIRED,(e,t)=>{console.warn(`[AppEvents] AUTH_TOKEN_EXPIRED:`,t),b.default.publish(p.UI_TOAST,{message:`Session expired. Please sign in again.`,type:`warning`})}),b.default.subscribe(p.I18N_SET_LANG,(e,t)=>{console.log(`[AppEvents] I18N_SET_LANG:`,t);let{langCode:n}=t;if(!n){console.error(`[AppEvents] No langCode provided in I18N_SET_LANG event`);return}if(window.I18nController&&typeof window.I18nController.setLanguage==`function`)try{window.I18nController.setLanguage(n),console.log(`[AppEvents] Language changed successfully to:`,n),b.default.publish(p.UI_TOAST,{message:`Language changed to ${n}`,type:`success`})}catch(e){console.error(`[AppEvents] Error changing language:`,e),b.default.publish(p.UI_TOAST,{message:`Failed to change language: ${e.message}`,type:`danger`})}else console.error(`[AppEvents] I18nController not available`)}),b.default.subscribe(`CONVERSATION.PROMPT`,(e,t)=>{let n=e.split(`.`)[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${n}:`,t),!t||!t.message){console.warn(`[AppEvents] CONVERSATION.PROMPT received without message data`);return}switch(n){case`CANVAS`:console.log(`[AppEvents] Display prompt in canvas:`,t.message),de(t.message,`user`,t.timestamp),b.default.publish(p.CANVAS_DO_SCROLL);break;case`AGENT`:console.log(`[AppEvents] Agent prompt (no implementation):`,t.message);break;case`AGENT_CANVAS`:console.log(`[AppEvents] Display message in canvas:`,t.message),de(t.message,`user`,t.timestamp),b.default.publish(p.CANVAS_DO_SCROLL);break;case`STAGE`:console.log(`[AppEvents] Stage prompt for editing:`,t.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${n}`)}}),b.default.subscribe(`CONVERSATION.RESPONSE`,(e,t)=>{let n=e.split(`.`)[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${n}:`,t),!t||!t.message){console.warn(`[AppEvents] CONVERSATION.RESPONSE received without message data`);return}switch(n){case`CANVAS`:console.log(`[AppEvents] Display response in canvas:`,t.message),de(t.message,`assistant`,t.timestamp,t.streaming);break;case`WORKFLOW`:console.log(`[AppEvents] Send response to workflow engine:`,t.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${n}`)}}),b.default.subscribe(p.UI_LOADING_START,(e,t)=>{let n=document.getElementById(`app-loader`);n&&n.classList.add(`active`)}),b.default.subscribe(p.UI_LOADING_END,(e,t)=>{let n=document.getElementById(`app-loader`);n&&n.classList.remove(`active`)}),b.default.subscribe(p.UI_TOAST,(e,t)=>{ce(t)}),b.default.subscribe(p.UI_WELCOME_BACK_CLICKED,()=>{console.log(`[AppEvents] UI_WELCOME_BACK_CLICKED`);let e=new Date().getFullYear();typeof neodigmToast<`u`&&neodigmToast.q(`0.1 8/26/2026, 10:42:03 AM|© ${e} Mach Five Tech`,`night`)}),le(),b.default.subscribe(`M5T_PRIMARY_NAV`,(n,r)=>{let i=n.split(`.`)[1];switch(i){case`TAP`:e(r);break;case`LOGO_TAP`:t(r);break;case`HOVER`:break;case`DOUBLE_TAP`:break;case`LONG_TAP`:break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${i}`)}});function e(e){let{token:t,level:n,primaryToken:r}=e;switch(t){case`RESET_PASSWORD`:console.log(`[AppEvents] Password reset requested`),b.default.publish(p.AUTH_RESETHASH_NAV);break;case`SIGN_OUT`:console.log(`[AppEvents] Sign out requested`),window.router&&window.router.navigate(`/signout`);break;default:console.log(`[AppEvents] Navigation: ${n} -> ${t}`,{primaryToken:r})}}function t(e){let t=new Date().getFullYear();typeof neodigmToast<`u`&&neodigmToast.q(`0.1 8/26/2026, 10:42:03 AM|© ${t} Mach Five Tech`,`night`,5e3)}b.default.subscribe(p.AUTH_SIGNOUT,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage`),localStorage.removeItem(v.FF_SSE_LS_SESSION_USER)}),console.log(`[AppEvents] Event listeners initialized`)}function de(e,t=`user`,n=null,r=!1){let i=document.getElementById(`chat-messages`);if(!i){console.warn(`[AppEvents] chat-messages element not found - may not be on home route`);return}if(n||=new Date().toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`}),r&&t===`assistant`){let n=i.firstElementChild;if(n&&n.tagName.toLowerCase()===`m5t-chat-response`){n.setAttribute(`message`,e),console.log(`[AppEvents] Updated streaming ${t} bubble (${e.length} chars)`);return}}let a;a=t===`user`||t===`prompt`?document.createElement(`m5t-chat-prompt`):document.createElement(`m5t-chat-response`),a.setAttribute(`message`,e),a.setAttribute(`timestamp`,n),i.prepend(a),console.log(`[AppEvents] Added ${t} bubble to canvas (${e.length} chars)`)}function fe(e=window.location.search){let t=new URLSearchParams(e||``);return!!(t.get(`uid`)&&t.get(`token`))}var pe=o((()=>{}));function me(e=window.location.search){let t=new URLSearchParams(e||``);return!!(t.get(`qr`)&&t.get(`token`))}function he(e=window.location.search){let t=new URLSearchParams(e||``),n=t.get(`qr`),r=t.get(`token`);return n&&r?{guid:n,token:r}:null}var ge=o((()=>{}));function _e(e=window.location.search){let t=new URLSearchParams(e||``);return!!(t.get(`dl`)&&t.get(`token`))}function ve(e=window.location.search){let t=new URLSearchParams(e||``),n=t.get(`dl`),r=t.get(`token`);return n&&r?{guid:n,token:r}:null}var ye=o((()=>{}));function be(e=window.location.search){return we.find(t=>t.matches(e))||null}function xe(e=window.location.search){return be(e)!==null}function Se(e=window.location.hash){return Te.some(t=>e===t||e.startsWith(t+`/`))}function Ce(e,t=window.location.search,n=window.location.hash){return xe(t)||Se(n)}var we,Te,Ee=o((()=>{pe(),ge(),ye(),we=Object.freeze([Object.freeze({name:`invite`,matches:fe}),Object.freeze({name:`questionnaire`,matches:me}),Object.freeze({name:`deliverable`,matches:_e})]),Te=Object.freeze([`#/templates`])}));function De(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)):!1}var Oe=o((()=>{})),ke=o((()=>{})),Ae=o((()=>{}));function je(e){return Ne[e]||null}function Me(e){return e>=50}var Ne,Pe=o((()=>{Ne=Object.freeze({admin_root_role:{value:100,label:`Administrator`,desc:`Mach Five platform staff — full access across every organization`},client_standard_role:{value:0,label:`Client`,desc:`Everyone else — what they can do comes from their organization membership, not this class`}})}));function Fe(e){let t=je(e);return!!t&&Me(t.value)}function Ie({entityClass:e,orgChannel:t,memberRole:n}={}){if(Fe(e))return[...Be];let r=He[t],i=r&&r[n];return i?[...i]:[]}function Le(e,t){let n=Re[e]?.rank??-1,r=Re[t]?.rank??1/0;return n>=Re.admin.rank&&n>=r}var Re,ze,x,Be,Ve,He,Ue=o((()=>{Pe(),Object.freeze({reseller_org:{value:`reseller_org`,label:`Reseller / Agency`,desc:`A Mach Five Marketing reseller. Creates and manages client accounts, provisions magnets on their behalf, monitors stats and ad numbers.`,uiMode:`reseller`,billable:!0,managesSubtree:!0},managed_client:{value:`managed_client`,label:`Managed Client`,desc:`A client account created by a reseller. Read-only: views its own active magnets, stats, and ad numbers. Does not provision.`,uiMode:`managed`,billable:!0,managesSubtree:!1,readOnly:!0},saas_org:{value:`saas_org`,label:`Self-Serve`,desc:`A self-serve SaaS customer. Provisions its own magnets and connects its own ad accounts — the full demo experience.`,uiMode:`self_serve`,billable:!0,managesSubtree:!1}}),Re=Object.freeze({owner:{value:`owner`,rank:30,label:`Owner`},admin:{value:`admin`,rank:20,label:`Admin`},member:{value:`member`,rank:10,label:`Member`},viewer:{value:`viewer`,rank:0,label:`Viewer`}}),ze=Object.freeze({VIEW_DASHBOARD:`view_dashboard`,VIEW_MAGNETS:`view_magnets`,PROVISION_MAGNETS:`provision_magnets`,MANAGE_MAGNETS:`manage_magnets`,VIEW_CONVERSATIONS:`view_conversations`,VIEW_STATS:`view_stats`,VIEW_AD_METRICS:`view_ad_metrics`,CONNECT_AD_ACCOUNTS:`connect_ad_accounts`,CREATE_CLIENT_ACCOUNTS:`create_client_accounts`,MANAGE_TEAM:`manage_team`,VIEW_BILLING:`view_billing`,MANAGE_BILLING:`manage_billing`}),x=ze,Be=Object.freeze(Object.values(x)),Ve=Object.freeze([x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS,x.VIEW_AD_METRICS]),Object.freeze([x.PROVISION_MAGNETS,x.MANAGE_MAGNETS,x.CONNECT_AD_ACCOUNTS,x.CREATE_CLIENT_ACCOUNTS,x.MANAGE_TEAM,x.MANAGE_BILLING]),Object.freeze([x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS,x.VIEW_AD_METRICS,x.VIEW_BILLING]),He=Object.freeze({reseller_org:{owner:Be,admin:[x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.PROVISION_MAGNETS,x.MANAGE_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS,x.VIEW_AD_METRICS,x.CONNECT_AD_ACCOUNTS,x.CREATE_CLIENT_ACCOUNTS,x.MANAGE_TEAM,x.VIEW_BILLING],member:[x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.PROVISION_MAGNETS,x.MANAGE_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS,x.VIEW_AD_METRICS],viewer:Ve},managed_client:{owner:[...Ve,x.VIEW_BILLING],admin:[...Ve,x.VIEW_BILLING],member:Ve,viewer:Ve},saas_org:{owner:[x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.PROVISION_MAGNETS,x.MANAGE_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS,x.VIEW_AD_METRICS,x.CONNECT_AD_ACCOUNTS,x.MANAGE_TEAM,x.VIEW_BILLING,x.MANAGE_BILLING],admin:[x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.PROVISION_MAGNETS,x.MANAGE_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS,x.VIEW_AD_METRICS,x.CONNECT_AD_ACCOUNTS,x.MANAGE_TEAM,x.VIEW_BILLING],member:[x.VIEW_DASHBOARD,x.VIEW_MAGNETS,x.PROVISION_MAGNETS,x.MANAGE_MAGNETS,x.VIEW_CONVERSATIONS,x.VIEW_STATS],viewer:Ve}})})),We,Ge=o((()=>{We=[{value:`name`,label:`Full name (splits into first + last automatically)`},{value:`first_name`,label:`First name`},{value:`last_name`,label:`Last name`},{value:`email`,label:`Email`},{value:`phone`,label:`Phone`},{value:`mobile`,label:`Mobile phone`},{value:`company`,label:`Company`},{value:`title`,label:`Job title`},{value:`city`,label:`City`},{value:`state`,label:`State / province`},{value:`product_interest`,label:`Product interest`},{value:`lead_source`,label:`Lead source`},{value:`rating`,label:`Rating (Hot / Warm / Cold)`},{value:`description`,label:`Notes / description`},{value:`salutation`,label:`Salutation (Mr. / Ms. / Dr.)`},{value:`street`,label:`Street address`},{value:`zip`,label:`Postal / ZIP code`},{value:`country`,label:`Country`},{value:`url`,label:`Website URL`},{value:`industry`,label:`Industry`},{value:`annual_revenue`,label:`Annual revenue (number)`},{value:`employees`,label:`Number of employees (whole number)`},{value:`is_primary`,label:`Primary contact (Yes / No)`},{value:`current_generators`,label:`Current generator(s)`},{value:`number_of_locations`,label:`Number of locations (whole number)`}],new Set(We.map(e=>e.value))})),Ke,qe=o((()=>{Ke=[{value:`single_select`,label:`Multiple choice`},{value:`multi_select`,label:`Select all`},{value:`scheduler`,label:`Scheduler`},{value:`text`,label:`Short text`},{value:`email`,label:`Email`},{value:`phone`,label:`Phone`},{value:`message`,label:`Message`}],new Set(Ke.map(e=>e.value))})),Je,Ye,Xe,Ze,Qe=o((()=>{Je=[{value:`inline`,label:`Inline`},{value:`chat`,label:`Chat`},{value:`right_slide`,label:`Slide`},{value:`modal`,label:`Modal`}],Ye=[{value:`auto`,label:`Auto (visitor OS setting)`},{value:`sync`,label:`Sync (match the site's own dark mode)`},{value:`light`,label:`Light`},{value:`dark`,label:`Dark`}],Xe=[{value:`on_load`,label:`Immediately on page load`},{value:`on_8_seconds`,label:`After 8 seconds`},{value:`on_scroll_80_percent`,label:`At 80% scroll depth`},{value:`on_exit_intent`,label:`On exit intent (mouse leaves the page)`},{value:`none`,label:`Manual only (visitor clicks the launcher)`}],Ze=[{value:`book`,label:`Book`},{value:`call`,label:`Call`},{value:`email`,label:`Email`},{value:`chat`,label:`Chat`},{value:`support`,label:`Support`}],Je.map(e=>e.value),Ye.map(e=>e.value),Xe.map(e=>e.value),Object.freeze({manual:`none`}),Ze.map(e=>e.value)})),$e=o((()=>{Pe(),Ue(),Ge(),qe(),Qe()})),et=o((()=>{Oe(),ke(),Ae(),$e()})),tt,nt,rt,S,it=o((()=>{tt=`modulepreload`,nt=function(e,t){return new URL(e,t).href},rt={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=nt(t,n),t=s(t),t in rt)return;rt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:tt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function at(e){let t=new Uint8Array(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}var ot=o((()=>{}));function st(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,`=`),i=atob(r),a=new ArrayBuffer(i.length),o=new Uint8Array(a);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return a}var ct=o((()=>{}));function lt(){return ut.stubThis(globalThis?.PublicKeyCredential!==void 0&&typeof globalThis.PublicKeyCredential==`function`)}var ut,dt=o((()=>{ut={stubThis:e=>e}}));function ft(e){let{id:t}=e;return{...e,id:st(t),transports:e.transports}}var pt=o((()=>{ct()}));function mt(e){return e===`localhost`||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}var ht=o((()=>{})),gt,_t=o((()=>{gt=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r??n.name,this.code=t}}}));function vt({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new gt({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new gt({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new gt({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new gt({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new gt({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new gt({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new gt({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new gt({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!mt(t))return new gt({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new gt({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new gt({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new gt({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}var yt=o((()=>{ht(),_t()})),bt,xt,St=o((()=>{bt=class{constructor(){Object.defineProperty(this,"controller",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}},xt=new bt}));function Ct(e){if(e&&!(wt.indexOf(e)<0))return e}var wt,Tt=o((()=>{wt=[`cross-platform`,`platform`]}));async function Et(e){!e.optionsJSON&&e.challenge&&(console.warn(`startRegistration() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useAutoRegister:n=!1}=e;if(!lt())throw Error(`WebAuthn is not supported in this browser`);let r={...t,challenge:st(t.challenge),user:{...t.user,id:st(t.user.id)},excludeCredentials:t.excludeCredentials?.map(ft)},i={};n&&(i.mediation=`conditional`),i.publicKey=r,i.signal=xt.createNewAbortSignal();let a;try{a=await navigator.credentials.create(i)}catch(e){throw vt({error:e,options:i})}if(!a)throw Error(`Registration was not completed`);let{id:o,rawId:s,response:c,type:l}=a,u;typeof c.getTransports==`function`&&(u=c.getTransports());let d;if(typeof c.getPublicKeyAlgorithm==`function`)try{d=c.getPublicKeyAlgorithm()}catch(e){Dt(`getPublicKeyAlgorithm()`,e)}let f;if(typeof c.getPublicKey==`function`)try{let e=c.getPublicKey();e!==null&&(f=at(e))}catch(e){Dt(`getPublicKey()`,e)}let p;if(typeof c.getAuthenticatorData==`function`)try{p=at(c.getAuthenticatorData())}catch(e){Dt(`getAuthenticatorData()`,e)}return{id:o,rawId:at(s),response:{attestationObject:at(c.attestationObject),clientDataJSON:at(c.clientDataJSON),transports:u,publicKeyAlgorithm:d,publicKey:f,authenticatorData:p},type:l,clientExtensionResults:a.getClientExtensionResults(),authenticatorAttachment:Ct(a.authenticatorAttachment)}}function Dt(e,t){console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`,t)}var Ot=o((()=>{ot(),ct(),dt(),pt(),yt(),St(),Tt()}));function kt(){if(!lt())return At.stubThis(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?At.stubThis(new Promise(e=>e(!1))):At.stubThis(e.isConditionalMediationAvailable())}var At,jt=o((()=>{dt(),At={stubThis:e=>e}}));function Mt({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new gt({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new gt({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!mt(t))return new gt({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new gt({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new gt({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}var Nt=o((()=>{ht(),_t()}));async function Pt(e){!e.optionsJSON&&e.challenge&&(console.warn(`startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useBrowserAutofill:n=!1,verifyBrowserAutofillInput:r=!0}=e;if(!lt())throw Error(`WebAuthn is not supported in this browser`);let i;t.allowCredentials?.length!==0&&(i=t.allowCredentials?.map(ft));let a={...t,challenge:st(t.challenge),allowCredentials:i},o={};if(n){if(!await kt())throw Error(`Browser does not support WebAuthn autofill`);if(document.querySelectorAll(`input[autocomplete$='webauthn']`).length<1&&r)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');o.mediation=`conditional`,a.allowCredentials=[]}o.publicKey=a,o.signal=xt.createNewAbortSignal();let s;try{s=await navigator.credentials.get(o)}catch(e){throw Mt({error:e,options:o})}if(!s)throw Error(`Authentication was not completed`);let{id:c,rawId:l,response:u,type:d}=s,f;return u.userHandle&&(f=at(u.userHandle)),{id:c,rawId:at(l),response:{authenticatorData:at(u.authenticatorData),clientDataJSON:at(u.clientDataJSON),signature:at(u.signature),userHandle:f},type:d,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:Ct(s.authenticatorAttachment)}}var Ft=o((()=>{ot(),ct(),dt(),jt(),pt(),Nt(),St(),Tt()}));function It(){return lt()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():new Promise(e=>e(!1))}var Lt=o((()=>{dt()})),Rt=o((()=>{})),zt=c({WebAuthnAbortService:()=>xt,WebAuthnError:()=>gt,_browserSupportsWebAuthnAutofillInternals:()=>At,_browserSupportsWebAuthnInternals:()=>ut,base64URLStringToBuffer:()=>st,browserSupportsWebAuthn:()=>lt,browserSupportsWebAuthnAutofill:()=>kt,bufferToBase64URLString:()=>at,platformAuthenticatorIsAvailable:()=>It,startAuthentication:()=>Pt,startRegistration:()=>Et}),Bt=o((()=>{Ot(),Ft(),dt(),Lt(),jt(),ct(),ot(),St(),_t(),Rt()})),Vt,C,w=o((()=>{Vt=u(f(),1),m(),et(),Ee(),it(),C=class{static CONFIG={BASE_URL:`https://machfivemagnet-saas.onrender.com`,FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:`sse_session_user`,DEEP_LINK:`sse_deeplink`,SCOPE:`sse_session_scope`,ACTIVE_ORG:`sse_active_org`,REMEMBERED_EMAIL:`sse_remembered_email`},ROUTES:{SIGNIN:`signin`,SIGNUP:`signup`,HOME:`home`,RESET_HASH:`resethash`,FORGOT:`forgot`,SPLASH:`splash`},PROTECTED_ROUTES:[`home`,`resethash`],ENDPOINTS:{SIGNIN:`/m5t/v5/acctEntity/signin`,SIGNOUT:`/m5t/v5/acctEntity/signout`,SIGNUP:`/m5t/v5/acctEntity/`,RESET_HASH:`/m5t/v5/acctEntity/resetHash`,RESET_FORGOT:`/m5t/v5/acctEntity/resetforgot`,ME:`/m5t/v5/acctEntity/me`,PING:`/ping`,WEBAUTHN_AUTH_OPTIONS:`/m5t/v5/webauthn/authenticate/options`,WEBAUTHN_AUTH_VERIFY:`/m5t/v5/webauthn/authenticate/verify`},METER_CAPTIONS:{DEEP_LINK:`deep_link_access`,SIGNOUT_CLIENT:`signout_client_initiated`,SIGNOUT_SERVER:`signout_server_initiated`,PING_SUCCESS:`ping_auth_success`,PING_FAILURE:`ping_auth_failure`}};static#e=!1;static#t=null;static#n=null;static#r=null;static#i=null;static#a=null;static#o=null;static async init({BASE_URL:e,navigateFunction:t,customConfig:n={}}={}){if(this.#e)return console.warn(`[AuthController] Already initialized`),!0;try{if(t&&typeof t==`function`)this.#o=t;else throw Error(`navigateFunction is required and must be a function`);return e&&(this.CONFIG.BASE_URL=e),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log(`[AuthController] Initializing with config:`,{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#u(),this.#s(),this.#l(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.#e=!0,console.log(`[AuthController] Initialized successfully`),!0}catch(e){return console.error(`[AuthController] Initialization failed:`,e),!1}}static#s(){if(typeof mvvLegit>`u`||!mvvLegit)throw Error(`mvvLegit is not available. Ensure neodigm55 library is loaded.`);mvvLegit.setNavConroller((e=null)=>{if(e){if(Ce(e)){console.log(`[AuthController] Ignoring mvvLegit redirect to`,e,`— keeping visitor on their public landing page`);return}console.log(`[AuthController] mvvLegit navigation to:`,e),this.#c(e)}}).setOnState((e=null)=>{if(e)switch(console.log(`[AuthController] Auth state changed:`,e),e){case`AUTH`:case 4:this.#y();break;case`UNAUTH`:case 1:this.#b();break;case`UNVERF`:case 2:this.#x()}}).init({BASE:this.CONFIG.BASE_URL}),console.log(`[AuthController] mvvLegit initialized`)}static#c(e){if(!this.#o){console.error(`[AuthController] Navigate function not set`);return}console.log(`[AuthController] #navigate called with:`,e);let t=e.replace(/_route$/,``).replace(/_/g,`-`);console.log(`[AuthController] Navigating to path:`,t),this.#o(t)}static#l(){if(window.__m5tActiveOrgFetch)return;let e=window.fetch.bind(window);window.fetch=(t,n)=>{try{let e=typeof t==`string`?t:t?.url||``,r=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);if(r&&e.startsWith(this.CONFIG.BASE_URL)){let e=new Headers(n&&n.headers||(t instanceof Request?t.headers:void 0));e.set(`X-Active-Org`,r),n={...n||{},headers:e}}}catch{}return e(t,n)},window.__m5tActiveOrgFetch=!0,console.log(`[AuthController] Active-org fetch header installed`)}static#u(){try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#n=JSON.parse(e),console.log(`[AuthController] Entity state loaded; hasEmail:`,!!this.#n?.email))}catch(e){console.error(`[AuthController] Error loading entity state:`,e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#a=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);e&&(this.#r=JSON.parse(e),console.log(`[AuthController] Scope state loaded (cached):`,this.#r?.uiMode))}catch(e){console.error(`[AuthController] Error loading scope state:`,e),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#r=null}}static#d(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log(`[AuthController] Entity state saved`)}catch(e){console.error(`[AuthController] Error saving entity state:`,e)}}static#f(){this.#n=null,this.#r=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#h)}catch{}}static getEntity(){return this.#n}static#p(e){try{this.#r=e,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(e))}catch(e){console.error(`[AuthController] Error saving scope state:`,e)}}static async fetchScope(){return typeof mvvLegit>`u`||!this.isAuthenticated()?(console.log(`[AuthController] fetchScope skipped — not authenticated`),this.#r):(this.#i||=this.#m().finally(()=>{this.#i=null}),this.#i)}static async#m(){try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),t=e?`?org=${encodeURIComponent(e)}`:``,n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${t}`);if(n.status===401||n.status===403)return console.warn(`[AuthController] /me unauthorized — signing out`),this.doSignout(!0),null;if(!n.ok)return console.warn(`[AuthController] /me failed (${n.status}) — using cached scope`),this.#r;let r=await n.json();if(!r?.ok)return console.warn(`[AuthController] /me returned not-ok — using cached scope`),this.#r;try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);e&&r.activeOrg?.guid!==e&&(console.warn(`[AuthController] Stored active org not honored by /me${r.activeOrgError?` (activeOrgError)`:``} — clearing`),localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG))}catch{}return this.#p(r),Vt.default.publish(p.AUTH_SCOPE_LOADED,r),console.log(`[AuthController] Scope loaded: ${r.uiMode} (${r.memberships?.length||0} org(s), ${r.managedClients?.length||0} client(s))`),r}catch(e){return console.error(`[AuthController] fetchScope error:`,e),this.#r}}static async setActiveOrg(e){try{e?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,e):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#r}static getCapabilities(){return this.isPreviewingAsClient()?Ie({orgChannel:`managed_client`,memberRole:`owner`}):this.#r?.capabilities||[]}static getUiMode(){return this.isPreviewingAsClient()?`managed`:this.#r?.uiMode||`self_serve`}static getActiveOrg(){return this.#r?.activeOrg||null}static getMemberships(){return this.#r?.memberships||[]}static getManagedClients(){return this.#r?.managedClients||[]}static getStoredActiveOrg(){try{return localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{return null}}static#h=`m5m_preview_as_client`;static isPreviewingAsClient(){try{return sessionStorage.getItem(this.#h)===`1`&&!!this.#r?.activeOrg?.viaSubtree}catch{return!1}}static setPreviewAsClient(e){try{e?sessionStorage.setItem(this.#h,`1`):sessionStorage.removeItem(this.#h)}catch{}this.#r&&Vt.default.publish(p.AUTH_SCOPE_LOADED,this.#r)}static async doSignin(e,t){try{let n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t})}),r=await n.json();if(n.status===303)return console.warn(`[AuthController] Password reset required`),r.accessToken&&(mvvLegit.doSignin(r.accessToken),this.#d(r.entity)),setTimeout(()=>{this.#c(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:r};if(n.ok&&r.accessToken){console.log(`[AuthController] Signin successful, calling mvvLegit.doSignin()`),mvvLegit.doSignin(r.accessToken),this.#d(r.entity);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#h)}catch{}return this.fetchScope(),console.log(`[AuthController] Explicitly navigating to home`),this.#c(this.CONFIG.ROUTES.HOME),{ok:!0,data:r}}return{ok:!1,error:r.error||`Sign in failed`,data:r}}catch(e){return console.error(`[AuthController] Signin error:`,e),{ok:!1,error:e.message}}}static async doPasskeySignin(){if(!window.PublicKeyCredential)return{ok:!1,error:`Passkeys are not supported in this browser`};try{let{startAuthentication:e}=await S(async()=>{let{startAuthentication:e}=await Promise.resolve().then(()=>(Bt(),zt));return{startAuthentication:e}},void 0,import.meta.url),t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.WEBAUTHN_AUTH_OPTIONS}`,{method:`POST`}),n=await t.json();if(!t.ok||!n.ok)return{ok:!1,error:n.error||`Could not start passkey sign-in`};let r;try{r=await e({optionsJSON:n.options})}catch(e){let t=e?.name===`NotAllowedError`;return t||console.error(`[AuthController] Passkey ceremony error:`,e),{ok:!1,canceled:t,error:t?`Passkey sign-in was canceled`:e.message||`Passkey sign-in failed`}}let i=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.WEBAUTHN_AUTH_VERIFY}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({response:r})}),a=await i.json();if(!i.ok||!a.ok||!a.accessToken)return{ok:!1,error:a.error||`Passkey sign-in failed`,data:a};mvvLegit.doSignin(a.accessToken),this.#d(a.entity);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#h)}catch{}return this.fetchScope(),this.#c(this.CONFIG.ROUTES.HOME),{ok:!0,data:a}}catch(e){return console.error(`[AuthController] Passkey signin error:`,e),{ok:!1,error:e.message}}}static async doSignout(e=!1){console.log(`[AuthController] doSignout called, serverInitiated:`,e);try{let t=mvvLegit.getConf()?.token;if(console.log(`[AuthController] Token exists:`,!!t),!e&&t){let e=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(t)}`;if(console.log(`[AuthController] Sending signout beacon to:`,e),navigator.sendBeacon){let t=navigator.sendBeacon(e);console.log(`[AuthController] Beacon sent:`,t),t||console.warn(`[AuthController] Beacon failed - browser may be blocking it`)}else console.warn(`[AuthController] navigator.sendBeacon not supported, signout not metered`)}else t||console.warn(`[AuthController] No token found for signout request`);console.log(`[AuthController] Clearing mvvLegit state...`),mvvLegit.doSignout(),console.log(`[AuthController] Setting signout timestamp...`),localStorage.setItem(`mvv_ts`,Date.now().toString()),console.log(`[AuthController] Clearing entity state...`),this.#f(),console.log(`[AuthController] Stopping auth ping...`),this.#_(),setTimeout(()=>{console.log(`[AuthController] Performing hard refresh...`),typeof neodigmUtils<`u`&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(e){console.error(`[AuthController] Signout error:`,e),setTimeout(()=>{typeof neodigmUtils<`u`&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{let t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),n=await t.json();return t.ok&&n.accessToken?(console.log(`[AuthController] Signup successful - user needs to verify email`),this.#d(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||`Sign up failed`,data:n}}catch(e){return console.error(`[AuthController] Signup error:`,e),{ok:!1,error:e.message}}}static async doResetHash(e,t){try{let n=mvvLegit.getConf()?.token,r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:`POST`,headers:{Authorization:`Bearer ${n}`,"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t,modified_by:e})}),i=await r.json();return r.ok&&i.ok?(console.log(`[AuthController] Password reset successful`),await this.doSignout(),{ok:!0,data:i}):{ok:!1,error:i.error||`Password reset failed`,data:i}}catch(e){return console.error(`[AuthController] Reset password error:`,e),{ok:!1,error:e.message}}}static#g(){this.#t&&(console.log(`[AuthController] Clearing existing ping interval`),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#v()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#_(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log(`[AuthController] Auth ping stopped`))}static async#v(){try{let e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log(`[AuthController] Ping success`):(e.status===401||e.status===403)&&(console.warn(`[AuthController] Auth ping failed - signing out`),this.doSignout(!0))}catch(e){console.error(`[AuthController] Ping error:`,e)}}static setDeepLinkGuid(e){this.#a=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log(`[AuthController] Deep-link GUID stored:`,e)}static getDeepLinkGuid(){return this.#a}static clearDeepLink(){this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#y(){console.log(`[AuthController] User authenticated`),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),queueMicrotask(()=>this.fetchScope())}static#b(){console.log(`[AuthController] User unauthenticated`),this.#_()}static#x(){console.log(`[AuthController] User unverified`)}static getAuthState(){try{let e=mvvLegit.getConf()?.LSKEY||`mvv`,t=localStorage.getItem(e);if(!t)return`UNAUTH`;if(typeof LZString>`u`)return null;let n=LZString.decompressFromUTF16(t),r=JSON.parse(n)?.state;return r===1?`UNAUTH`:r===2?`UNVERF`:r===4?`AUTH`:r===5?`FORGOT`:null}catch{return null}}static isAuthenticated(){return this.getAuthState()===`AUTH`}static getConfig(){return this.CONFIG}static navigateTo(e){this.#c(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log(`[AuthController] DEBUG: Manually triggering ping...`),await this.#v()}}})),T,Ht=o((()=>{T=class{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,enter_email_and_password:`Enter email and password`,sign_in:`Sign in`,forgot_password:`Forgot password?`,remember_email:`Remember my email`,dont_have_an_account:`START YOUR FREE ACCOUNT`,sign_up:`Sign up`,please_enter_your_details_to_get_started:`Please enter your details to get started`,already_have_an_account:`Already have an account?`,log_in:`Log in`,name:`Name`,enter_your_name:`Enter your name`,first_name:`First name`,last_name:`Last name`,company:`Company`,phone:`Phone`,confirm_password:`Confirm password`,create_account:`Create account`,home:`Home`,dashboard:`Dashboard`,correspondence:`Correspondence`,settings:`Settings`,sign_out:`Sign out`,reset_password:`Reset password`,new_password:`New password`,confirm_new_password:`Confirm new password`,enter_new_password:`Enter new password`,enter_company_name:`Enter your company name`,enter_phone_number:`Enter your phone number`,reenter_password:`Re-enter your password`,update_password:`Update password`,update_your_password:`Update your account password`,are_you_sure_sign_out:`Are you sure you want to sign out?`,enter_email_for_reset:`Please enter your email to receive a password reset link`,send_reset_link:`Send reset link`,remember_password:`Remember your password?`,cancel:`Cancel`,save:`Save`,delete:`Delete`,edit:`Edit`,loading:`Loading...`,error:`Error`,success:`Success`,refresh:`Refresh`,search:`Search`,filter:`Filter`,sort:`Sort`,view:`View`,close:`Close`,submit:`Submit`,back:`Back`,next:`Next`,previous:`Previous`,confirm:`Confirm`,yes:`Yes`,no:`No`,ok:`OK`,validation_email_required:`Please enter your email`,validation_email_invalid:`Please enter a valid email address`,validation_password_required:`Please enter your password`,validation_password_min_length:`Password must be at least 10 characters`,validation_password_mismatch:`Passwords do not match`,validation_first_name_required:`Please enter your first name`,validation_last_name_required:`Please enter your last name`,validation_new_password_required:`Please enter a new password`,success_welcome_back:`Welcome back!`,success_password_reset:`Password reset successfully`,success_signed_out:`Signed out successfully`,success_reset_link_sent:`Password reset link sent!|Please check your email`,error_signin_failed:`Sign in failed`,error_signup_failed:`Sign up failed`,error_network:`Network error - please try again`,error_password_reset_required:`Password reset required - redirecting...`,loading_signing_in:`SIGNING IN...`,loading_creating_account:`Creating account...`,loading_resetting_password:`Resetting password...`,nav_home:`Home`,nav_home_tagline:`Dashboard and overview`,nav_home_apps:`My Apps`,nav_home_apps_tagline:`Your applications and integrations`,nav_home_dash:`Dashboard`,nav_home_dash_tagline:`Main dashboard and analytics`,nav_engagements:`Engagements`,nav_engagements_tagline:`Customer engagement tools and interactions`,nav_develop:`Develop`,nav_develop_tagline:`Development tools and resources`,nav_profile:`Profile`,nav_profile_tagline:`Account settings and preferences`,nav_engagements_surveys:`Surveys`,nav_engagements_surveys_tagline:`Create and manage customer surveys`,nav_engagements_thumbs:`Feedback`,nav_engagements_thumbs_tagline:`Collect thumbs up/down feedback`,nav_engagements_voicemail:`Voicemail`,nav_engagements_voicemail_tagline:`Voice message collection`,nav_engagements_guidedtours:`Guided Tours`,nav_engagements_guidedtours_tagline:`Interactive product tours`,nav_engagements_slideshows:`Slideshows`,nav_engagements_slideshows_tagline:`Content slideshows and presentations`,nav_engagements_abtests:`A/B Tests`,nav_engagements_abtests_tagline:`A/B testing campaigns`,nav_engagements_questionnaires:`Questionnaires`,nav_engagements_questionnaires_tagline:`Detailed questionnaires and forms`,nav_develop_documentation:`Documentation`,nav_develop_documentation_tagline:`API and product documentation`,nav_develop_devtools:`Dev Tools`,nav_develop_devtools_tagline:`Developer tools and utilities`,nav_develop_kbase:`Knowledge Base`,nav_develop_kbase_tagline:`Technical knowledge base and articles`,nav_develop_hackathon:`Hackathon`,nav_develop_hackathon_tagline:`Hackathon events and challenges`,nav_develop_partner:`Partner`,nav_develop_partner_tagline:`Partner program and integrations`,nav_develop_certification:`Certification`,nav_develop_certification_tagline:`Developer certification programs`,nav_profile_aboutme:`About Me`,nav_profile_aboutme_tagline:`View and edit your personal information`,nav_profile_badges:`Badges`,nav_profile_badges_tagline:`View your earned badges and achievements`,nav_profile_language:`Language`,nav_profile_language_tagline:`Manage language settings and preferences`,nav_reset_password:`Reset Password`,nav_reset_password_tagline:`Change your account password`,nav_sign_out:`Sign Out`,nav_sign_out_tagline:`Sign out of your account`,nav_account:`Account`,nav_account_tagline:`Account management and support`,nav_account_contact:`Contact`,nav_account_contact_tagline:`Contact support and sales`,nav_account_pricetier:`Price Tier`,nav_account_pricetier_tagline:`View and manage pricing plans`,nav_account_helpfaq:`Help & FAQ`,nav_account_helpfaq_tagline:`Frequently asked questions and help`,nav_account_team:`Team`,nav_account_team_tagline:`Manage team members and permissions`,nav_account_terms:`Terms`,nav_account_terms_tagline:`Terms of service and legal agreements`,nav_dashboard:`Dashboard`,nav_dashboard_tagline:`Overview of your activity`,nav_magnets:`Your Magnets`,nav_magnets_tagline:`Manage your conversational magnets`,nav_templates:`Templates`,nav_templates_tagline:`Start from a magnet template`,nav_conversations:`Conversations`,nav_conversations_tagline:`Captured lead conversations`,nav_ab_testing:`A/B Testing`,nav_ab_testing_tagline:`Experiment and optimize`,nav_analytics:`Analytics`,nav_analytics_tagline:`Performance and ad metrics`,nav_ad_accounts:`Ad Accounts`,nav_ad_accounts_tagline:`Connect advertising accounts`,nav_clients:`Clients`,nav_clients_tagline:`Manage your client accounts`,nav_team:`Team`,nav_team_tagline:`Invite and manage teammates`,nav_billing:`Billing`,nav_billing_tagline:`Plan, usage, and invoices`,nav_settings:`Settings`,nav_settings_tagline:`Account and workspace settings`,nav_home:`Home`,nav_home_tagline:`Admin console home dashboard`,nav_entities:`Entities`,nav_entities_tagline:`Entity and account management`,nav_accounts:`Accounts`,nav_accounts_tagline:`User account management`,nav_groups:`Groups`,nav_groups_tagline:`Group and role management`,nav_invoices:`Invoices`,nav_invoices_tagline:`Invoice and billing management`,nav_ab_tests:`A/B Tests`,nav_ab_tests_tagline:`A/B testing campaigns`,nav_feedback:`Feedback`,nav_feedback_tagline:`User feedback collection`,nav_guided_tours:`Guided Tours`,nav_guided_tours_tagline:`Interactive product tours`,nav_questionnaires:`Questionnaires`,nav_questionnaires_tagline:`Detailed questionnaires and forms`,nav_slideshows:`Slideshows`,nav_slideshows_tagline:`Content slideshows and presentations`,nav_surveys:`Surveys`,nav_surveys_tagline:`Survey campaigns and analytics`,nav_voicemail:`Voicemail`,nav_voicemail_tagline:`Voice message management`,nav_ethercards:`EtherCards`,nav_ethercards_tagline:`EtherCards platform management`,nav_apps:`Apps`,nav_apps_tagline:`Application management`,nav_channels:`Channels`,nav_channels_tagline:`Communication channels`,nav_messages:`Messages`,nav_messages_tagline:`Message management and templates`,nav_content:`Content`,nav_content_tagline:`Content and asset management`,nav_rss:`RSS`,nav_rss_tagline:`RSS feed management and syndication`,nav_core_assets:`Core Assets`,nav_core_assets_tagline:`Manage core application assets and resources`,nav_deeplinks:`Deeplinks`,nav_deeplinks_tagline:`Deep link management and tracking`,nav_snippets:`Snippets`,nav_snippets_tagline:`Code and content snippet management`,nav_rollers:`Magnet Builder`,nav_rollers_tagline:`Rolling deployments and version management`,nav_support:`Support`,nav_support_tagline:`Support and monitoring tools`,nav_dialog:`Dialog`,nav_dialog_tagline:`Dialog and modal management`,nav_meter:`Meter`,nav_meter_tagline:`Usage metering and analytics`,nav_metadata:`Metadata`,nav_metadata_tagline:`Metadata and configuration`,nav_i18n:`I18N`,nav_i18n_tagline:`Internationalization maintenance`,nav_meta_maint:`Meta Maint`,nav_meta_maint_tagline:`Metadata maintenance and configuration`,nav_silos:`Silos`,nav_silos_tagline:`Data silo management`,nav_cache:`Cache`,nav_cache_tagline:`Cache management and statistics`,nav_lifecycle:`Lifecycle`,nav_lifecycle_tagline:`Data lifecycle and retention policies`,nav_notifications:`Notifications`,nav_notifications_tagline:`Notification management`,nav_bell_drawer:`Bell Drawer`,nav_bell_drawer_tagline:`Notification drawer configuration`,nav_web_hooks:`Web Hooks`,nav_web_hooks_tagline:`Webhook configuration and monitoring`,nav_language:`Language`,nav_language_tagline:`Change language preferences`},es:{welcome_back:`Bienvenido de nuevo`,please_enter_your_details:`Por favor ingrese sus datos`,email:`Correo electrónico`,enter_your_email:`Ingrese su correo electrónico`,password:`Contraseña`,enter_your_password:`Ingrese su contraseña`,enter_email_and_password:`Ingrese correo y contraseña`,sign_in:`Iniciar sesión`,forgot_password:`¿Olvidó su contraseña?`,remember_email:`Recordar mi correo electrónico`,dont_have_an_account:`¿No tiene una cuenta?`,sign_up:`Registrarse`,please_enter_your_details_to_get_started:`Ingrese sus datos para comenzar`,already_have_an_account:`¿Ya tiene una cuenta?`,log_in:`Iniciar sesión`,name:`Nombre`,enter_your_name:`Ingrese su nombre`,first_name:`Nombre`,last_name:`Apellido`,company:`Empresa`,phone:`Teléfono`,confirm_password:`Confirmar contraseña`,create_account:`Crear cuenta`,home:`Inicio`,dashboard:`Panel`,correspondence:`Correspondencia`,settings:`Configuración`,sign_out:`Cerrar sesión`,reset_password:`Restablecer contraseña`,new_password:`Nueva contraseña`,confirm_new_password:`Confirmar nueva contraseña`,enter_new_password:`Ingrese nueva contraseña`,enter_company_name:`Ingrese el nombre de su empresa`,enter_phone_number:`Ingrese su número de teléfono`,reenter_password:`Vuelva a ingresar su contraseña`,update_password:`Actualizar contraseña`,update_your_password:`Actualice la contraseña de su cuenta`,are_you_sure_sign_out:`¿Está seguro de que desea cerrar sesión?`,enter_email_for_reset:`Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña`,send_reset_link:`Enviar enlace de restablecimiento`,remember_password:`¿Recuerda su contraseña?`,cancel:`Cancelar`,save:`Guardar`,delete:`Eliminar`,edit:`Editar`,loading:`Cargando...`,error:`Error`,success:`Éxito`,refresh:`Actualizar`,search:`Buscar`,filter:`Filtrar`,sort:`Ordenar`,view:`Ver`,close:`Cerrar`,submit:`Enviar`,back:`Atrás`,next:`Siguiente`,previous:`Anterior`,confirm:`Confirmar`,yes:`Sí`,no:`No`,ok:`OK`,validation_email_required:`Por favor ingrese su correo electrónico`,validation_email_invalid:`Por favor ingrese una dirección de correo válida`,validation_password_required:`Por favor ingrese su contraseña`,validation_password_min_length:`La contraseña debe tener al menos 10 caracteres`,validation_password_mismatch:`Las contraseñas no coinciden`,validation_first_name_required:`Por favor ingrese su nombre`,validation_last_name_required:`Por favor ingrese su apellido`,validation_new_password_required:`Por favor ingrese una nueva contraseña`,success_welcome_back:`¡Bienvenido de nuevo!`,success_password_reset:`Contraseña restablecida exitosamente`,success_signed_out:`Sesión cerrada exitosamente`,success_reset_link_sent:`¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico`,error_signin_failed:`Error al iniciar sesión`,error_signup_failed:`Error al registrarse`,error_network:`Error de red - por favor intente de nuevo`,error_password_reset_required:`Restablecimiento de contraseña requerido - redirigiendo...`,loading_signing_in:`INICIANDO SESIÓN...`,loading_creating_account:`Creando cuenta...`,loading_resetting_password:`Restableciendo contraseña...`,nav_home:`Inicio`,nav_home_tagline:`Panel y resumen`,nav_home_apps:`Mis Aplicaciones`,nav_home_apps_tagline:`Sus aplicaciones e integraciones`,nav_home_dash:`Panel`,nav_home_dash_tagline:`Panel principal y análisis`,nav_engagements:`Compromisos`,nav_engagements_tagline:`Herramientas de interacción con clientes`,nav_develop:`Desarrollar`,nav_develop_tagline:`Herramientas y recursos de desarrollo`,nav_profile:`Perfil`,nav_profile_tagline:`Configuración y preferencias de cuenta`,nav_engagements_surveys:`Encuestas`,nav_engagements_surveys_tagline:`Crear y gestionar encuestas de clientes`,nav_engagements_thumbs:`Retroalimentación`,nav_engagements_thumbs_tagline:`Recopilar opiniones positivas y negativas`,nav_engagements_voicemail:`Buzón de voz`,nav_engagements_voicemail_tagline:`Recopilación de mensajes de voz`,nav_engagements_guidedtours:`Recorridos guiados`,nav_engagements_guidedtours_tagline:`Recorridos interactivos de productos`,nav_engagements_slideshows:`Presentaciones`,nav_engagements_slideshows_tagline:`Presentaciones y diapositivas de contenido`,nav_engagements_abtests:`Pruebas A/B`,nav_engagements_abtests_tagline:`Campañas de pruebas A/B`,nav_engagements_questionnaires:`Cuestionarios`,nav_engagements_questionnaires_tagline:`Cuestionarios y formularios detallados`,nav_develop_documentation:`Documentación`,nav_develop_documentation_tagline:`Documentación de API y productos`,nav_develop_devtools:`Herramientas Dev`,nav_develop_devtools_tagline:`Herramientas y utilidades de desarrollo`,nav_develop_kbase:`Base de Conocimientos`,nav_develop_kbase_tagline:`Base de conocimientos y artículos técnicos`,nav_develop_hackathon:`Hackathon`,nav_develop_hackathon_tagline:`Eventos y desafíos de hackathon`,nav_develop_partner:`Socio`,nav_develop_partner_tagline:`Programa de socios e integraciones`,nav_develop_certification:`Certificación`,nav_develop_certification_tagline:`Programas de certificación para desarrolladores`,nav_profile_aboutme:`Sobre Mí`,nav_profile_aboutme_tagline:`Ver y editar su información personal`,nav_profile_badges:`Insignias`,nav_profile_badges_tagline:`Ver sus insignias y logros obtenidos`,nav_profile_language:`Idioma`,nav_profile_language_tagline:`Gestionar configuración y preferencias de idioma`,nav_reset_password:`Restablecer Contraseña`,nav_reset_password_tagline:`Cambiar la contraseña de su cuenta`,nav_sign_out:`Cerrar Sesión`,nav_sign_out_tagline:`Cerrar sesión de su cuenta`,nav_account:`Cuenta`,nav_account_tagline:`Gestión de cuenta y soporte`,nav_account_contact:`Contacto`,nav_account_contact_tagline:`Contactar con soporte y ventas`,nav_account_pricetier:`Nivel de Precio`,nav_account_pricetier_tagline:`Ver y gestionar planes de precios`,nav_account_helpfaq:`Ayuda y FAQ`,nav_account_helpfaq_tagline:`Preguntas frecuentes y ayuda`,nav_account_team:`Equipo`,nav_account_team_tagline:`Gestionar miembros del equipo y permisos`,nav_account_terms:`Términos`,nav_account_terms_tagline:`Términos de servicio y acuerdos legales`,nav_home:`Inicio`,nav_home_tagline:`Panel de inicio de la consola de administración`,nav_silo_audits:`Auditorías de Silo`,nav_silo_audits_tagline:`Auditar e inspeccionar datos de silo`,nav_cache:`Caché`,nav_cache_tagline:`Gestión de caché y estadísticas`,nav_cache_stats:`Estadísticas`,nav_cache_stats_tagline:`Estadísticas de rendimiento de caché`,nav_dialog_links:`Enlaces de Diálogo`,nav_dialog_links_tagline:`Gestionar configuraciones de enlaces de diálogo y modal`,nav_i18n_maint:`Mant. I18n`,nav_i18n_maint_tagline:`Mantenimiento de internacionalización y gestión de microcopia`,nav_meta_maint:`Mant. Meta`,nav_meta_maint_tagline:`Mantenimiento de metadatos y configuración`,nav_bell_drawer:`Cajón de Campana`,nav_bell_drawer_tagline:`Gestión de notificaciones y configuración del cajón de campana`,nav_meter:`Medidor`,nav_meter_tagline:`Medición de uso y analíticas`,nav_deeplinks:`Enlaces Profundos`,nav_deeplinks_tagline:`Gestión y seguimiento de enlaces profundos`,nav_rss:`RSS`,nav_rss_tagline:`Gestión de feeds RSS y sindicación`,nav_core_assets:`Activos Principales`,nav_core_assets_tagline:`Gestionar activos y recursos principales de la aplicación`,nav_web_hooks:`Web Hooks`,nav_web_hooks_tagline:`Configuración y monitoreo de webhooks`,nav_snippets:`Fragmentos`,nav_snippets_tagline:`Gestión de fragmentos de código y contenido`,nav_snippets_sql:`SQL`,nav_snippets_sql_tagline:`Fragmentos y plantillas de consultas SQL`,nav_snippets_js:`JS`,nav_snippets_js_tagline:`Fragmentos de código JavaScript`,nav_rollers:`Magnet Builder`,nav_rollers_tagline:`Despliegues progresivos y gestión de versiones`,nav_rollers_primary_nav:`Nav Primaria`,nav_rollers_primary_nav_tagline:`Configuración del roller de navegación primaria`},"zh-Hans":{welcome_back:`欢迎回来`,please_enter_your_details:`请输入您的详细信息`,email:`电子邮件`,enter_your_email:`输入您的电子邮件`,password:`密码`,enter_your_password:`输入您的密码`,enter_email_and_password:`输入邮箱和密码`,sign_in:`登入`,forgot_password:`忘记密码？`,remember_email:`记住我的邮箱`,dont_have_an_account:`没有账户？`,sign_up:`报名`,please_enter_your_details_to_get_started:`请输入您的详细信息以开始`,already_have_an_account:`已有账户？`,log_in:`登录`,name:`姓名`,enter_your_name:`输入您的姓名`,first_name:`名字`,last_name:`姓氏`,company:`公司`,phone:`电话`,confirm_password:`确认密码`,create_account:`创建账户`,home:`首页`,dashboard:`仪表板`,correspondence:`信件`,settings:`设置`,sign_out:`登出`,reset_password:`重置密码`,new_password:`新密码`,confirm_new_password:`确认新密码`,enter_new_password:`输入新密码`,enter_company_name:`输入您的公司名称`,enter_phone_number:`输入您的电话号码`,reenter_password:`重新输入您的密码`,update_password:`更新密码`,update_your_password:`更新您的账户密码`,are_you_sure_sign_out:`您确定要登出吗？`,enter_email_for_reset:`请输入您的电子邮件以接收密码重置链接`,send_reset_link:`发送重置链接`,remember_password:`记得您的密码？`,cancel:`取消`,save:`保存`,delete:`删除`,edit:`编辑`,loading:`加载中...`,error:`错误`,success:`成功`,refresh:`刷新`,search:`搜索`,filter:`筛选`,sort:`排序`,view:`查看`,close:`关闭`,submit:`提交`,back:`返回`,next:`下一个`,previous:`上一个`,confirm:`确认`,yes:`是`,no:`否`,ok:`确定`,validation_email_required:`请输入您的电子邮件`,validation_email_invalid:`请输入有效的电子邮件地址`,validation_password_required:`请输入您的密码`,validation_password_min_length:`密码必须至少10个字符`,validation_password_mismatch:`密码不匹配`,validation_first_name_required:`请输入您的名字`,validation_last_name_required:`请输入您的姓氏`,validation_new_password_required:`请输入新密码`,success_welcome_back:`欢迎回来！`,success_password_reset:`密码重置成功`,success_signed_out:`成功登出`,success_reset_link_sent:`密码重置链接已发送！|请检查您的电子邮件`,error_signin_failed:`登录失败`,error_signup_failed:`注册失败`,error_network:`网络错误 - 请重试`,error_password_reset_required:`需要重置密码 - 正在重定向...`,loading_signing_in:`正在登录...`,loading_creating_account:`正在创建账户...`,loading_resetting_password:`正在重置密码...`,nav_home:`首页`,nav_home_tagline:`仪表板和概览`,nav_home_apps:`我的应用`,nav_home_apps_tagline:`您的应用程序和集成`,nav_home_dash:`仪表板`,nav_home_dash_tagline:`主仪表板和分析`,nav_engagements:`互动`,nav_engagements_tagline:`客户互动工具和交互`,nav_develop:`开发`,nav_develop_tagline:`开发工具和资源`,nav_profile:`个人资料`,nav_profile_tagline:`账户设置和偏好`,nav_engagements_surveys:`调查`,nav_engagements_surveys_tagline:`创建和管理客户调查`,nav_engagements_thumbs:`反馈`,nav_engagements_thumbs_tagline:`收集赞成和反对意见`,nav_engagements_voicemail:`语音信箱`,nav_engagements_voicemail_tagline:`语音留言收集`,nav_engagements_guidedtours:`引导式导览`,nav_engagements_guidedtours_tagline:`交互式产品导览`,nav_engagements_slideshows:`幻灯片`,nav_engagements_slideshows_tagline:`内容幻灯片和演示`,nav_engagements_abtests:`A/B测试`,nav_engagements_abtests_tagline:`A/B测试活动`,nav_engagements_questionnaires:`问卷`,nav_engagements_questionnaires_tagline:`详细问卷和表单`,nav_develop_documentation:`文档`,nav_develop_documentation_tagline:`API和产品文档`,nav_develop_devtools:`开发工具`,nav_develop_devtools_tagline:`开发者工具和实用程序`,nav_develop_kbase:`知识库`,nav_develop_kbase_tagline:`技术知识库和文章`,nav_develop_hackathon:`黑客马拉松`,nav_develop_hackathon_tagline:`黑客马拉松活动和挑战`,nav_develop_partner:`合作伙伴`,nav_develop_partner_tagline:`合作伙伴计划和集成`,nav_develop_certification:`认证`,nav_develop_certification_tagline:`开发者认证计划`,nav_profile_aboutme:`关于我`,nav_profile_aboutme_tagline:`查看和编辑您的个人信息`,nav_profile_badges:`徽章`,nav_profile_badges_tagline:`查看您获得的徽章和成就`,nav_profile_language:`语言`,nav_profile_language_tagline:`管理语言设置和偏好`,nav_reset_password:`重置密码`,nav_reset_password_tagline:`更改您的账户密码`,nav_sign_out:`登出`,nav_sign_out_tagline:`退出您的账户`,nav_account:`账户`,nav_account_tagline:`账户管理和支持`,nav_account_contact:`联系`,nav_account_contact_tagline:`联系支持和销售`,nav_account_pricetier:`价格等级`,nav_account_pricetier_tagline:`查看和管理定价计划`,nav_account_helpfaq:`帮助和常见问题`,nav_account_helpfaq_tagline:`常见问题和帮助`,nav_account_team:`团队`,nav_account_team_tagline:`管理团队成员和权限`,nav_account_terms:`条款`,nav_account_terms_tagline:`服务条款和法律协议`,nav_home:`主页`,nav_home_tagline:`管理控制台主页仪表板`,nav_silo_audits:`仓库审计`,nav_silo_audits_tagline:`审计和检查仓库数据`,nav_cache:`缓存`,nav_cache_tagline:`缓存管理和统计`,nav_cache_stats:`统计`,nav_cache_stats_tagline:`缓存性能统计`,nav_dialog_links:`对话框链接`,nav_dialog_links_tagline:`管理对话框和模态链接配置`,nav_i18n_maint:`国际化维护`,nav_i18n_maint_tagline:`国际化维护和微文案管理`,nav_meta_maint:`元数据维护`,nav_meta_maint_tagline:`元数据维护和配置`,nav_bell_drawer:`铃铛抽屉`,nav_bell_drawer_tagline:`通知管理和铃铛抽屉配置`,nav_meter:`计量器`,nav_meter_tagline:`使用计量和分析`,nav_deeplinks:`深层链接`,nav_deeplinks_tagline:`深层链接管理和跟踪`,nav_rss:`RSS`,nav_rss_tagline:`RSS订阅源管理和联合`,nav_core_assets:`核心资产`,nav_core_assets_tagline:`管理核心应用程序资产和资源`,nav_web_hooks:`网络钩子`,nav_web_hooks_tagline:`Webhook配置和监控`,nav_snippets:`代码片段`,nav_snippets_tagline:`代码和内容片段管理`,nav_snippets_sql:`SQL`,nav_snippets_sql_tagline:`SQL查询片段和模板`,nav_snippets_js:`JS`,nav_snippets_js_tagline:`JavaScript代码片段`,nav_rollers:`Magnet Builder`,nav_rollers_tagline:`滚动部署和版本管理`,nav_rollers_primary_nav:`主导航`,nav_rollers_primary_nav_tagline:`主导航滚动器配置`}}}},SIT:{SSE:{M5T:{en:{welcome_back:[`Welcome back`,`Good to see you again`,`Hello again`],please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}},UAT:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}},QA:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}},PROD:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}}};static#t={buildMode:`DEV`,product:`SSE`,whitelabel:`M5T`,lang:`en`};static setContext({buildMode:e,product:t,whitelabel:n,lang:r}){e&&(this.#t.buildMode=e),t&&(this.#t.product=t),n&&(this.#t.whitelabel=n),r&&(this.#t.lang=r)}static getContext(){return{...this.#t}}static get(e,t={}){let{buildMode:n,product:r,whitelabel:i,lang:a}={...this.#t,...t};try{let t=this.#e[n]?.[r]?.[i]?.[a]?.[e],o=n;return!t&&n!==`LOCAL`&&(t=this.#e.LOCAL?.[r]?.[i]?.[a]?.[e],o=`LOCAL (fallback)`),t?(o===`LOCAL (fallback)`&&console.warn(`[MicrocopyManager] Token '${e}' missing from ${n} — served from LOCAL instead. Backfill ${n}'s block if this is intentionally different copy.`),Array.isArray(t)?t[Math.floor(Math.random()*t.length)]:t):(console.warn(`[MicrocopyManager] Token not found: ${e} (${n}/${r}/${i}/${a}, LOCAL fallback also missing it)`),null)}catch(t){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,t),null}}static getAll(e={}){let{buildMode:t,product:n,whitelabel:r,lang:i}={...this.#t,...e};try{return this.#e[t]?.[n]?.[r]?.[i]||null}catch(e){return console.error(`[MicrocopyManager] Error retrieving all tokens`,e),null}}static has(e,t={}){let{buildMode:n,product:r,whitelabel:i,lang:a}={...this.#t,...t};try{return!!this.#e[n]?.[r]?.[i]?.[a]?.[e]}catch{return!1}}static getAvailableLanguages(){let{buildMode:e,product:t,whitelabel:n}=this.#t;try{return Object.keys(this.#e[e]?.[t]?.[n]||{})}catch{return[]}}static update(e,t,n={}){let{buildMode:r,product:i,whitelabel:a,lang:o}={...this.#t,...n};try{return this.#e[r]||(this.#e[r]={}),this.#e[r][i]||(this.#e[r][i]={}),this.#e[r][i][a]||(this.#e[r][i][a]={}),this.#e[r][i][a][o]||(this.#e[r][i][a][o]={}),this.#e[r][i][a][o][e]=t,!0}catch(t){return console.error(`[MicrocopyManager] Error updating token: ${e}`,t),!1}}static delete(e,t={}){let{buildMode:n,product:r,whitelabel:i,lang:a}={...this.#t,...t};try{return delete this.#e[n]?.[r]?.[i]?.[a]?.[e],!0}catch(t){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,t),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(e){return console.error(`[MicrocopyManager] Error importing data`,e),!1}}},typeof module<`u`&&module.exports&&(module.exports={MicrocopyManager:T})})),Ut,Wt=o((()=>{Ht(),y(),Ut=class{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn(`[I18nController] Already initialized`);return}let e=this.#i();T.setContext(e),console.log(`[I18nController] Initialized with context:`,e),console.log(`[I18nController] Available languages:`,this.getAvailableLanguages()),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Debug mode enabled`),this.#a(),this.#s(),this.#e=!0,this.refresh()}static#r(e){return{development:`LOCAL`,local:`LOCAL`,dev:`DEV`,sit:`SIT`,qa:`QA`,uat:`QA`,production:`PROD`,prod:`PROD`}[e.toLowerCase()]||`DEV`}static#i(){let e=this.#r(`production`),t=localStorage.getItem(v.FF_SSE_LS_WHITELABEL)||v.FF_SSE_I18N_WHITELABEL,n=localStorage.getItem(v.FF_SSE_LS_USER_LANG)||v.FF_SSE_I18N_LANG;return{buildMode:e,product:v.FF_SSE_I18N_PRODUCT,whitelabel:t,lang:n}}static#a(){typeof neodigmCarousel<`u`&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,t,n)=>{v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Route changed:`,n),this.#t=n,setTimeout(()=>{this.refresh()},v.FF_SSE_I18N_APPLY_DELAY_MS)},v.FF_CLIENT_CAROUSEL_ID):(console.warn(`[I18nController] neodigmCarousel not found. Using fallback polling.`),this.#o())}static#o(){setInterval(()=>{let e=document.querySelector(`[data-n55-carousel-page-name]`)?.getAttribute(`data-n55-carousel-page-name`);e&&e!==this.#t&&(this.#t=e,this.refresh())},500)}static#s(){this.#n||(this.#n=new MutationObserver(e=>{let t=!1;for(let n of e){for(let e of n.addedNodes)if(e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`data-meta-copywrite-i118n`)||e.querySelector(`[data-meta-copywrite-i118n]`))){t=!0;break}if(t)break}t&&(v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] DOM mutation detected, refreshing i18n`),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn(`[I18nController] Not initialized. Call initialize() first.`);return}this.#c(document.body),this.#l(document.body),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Refresh complete`)}static#c(e){let t=e.querySelectorAll(`[data-meta-copywrite-i118n]`);v.FF_SSE_I18N_DEBUG&&t.length>0&&console.log(`[I18nController] Processing ${t.length} elements`),t.forEach(e=>{try{let t=e.getAttribute(`data-meta-copywrite-i118n`),n=JSON.parse(t);if(!n.token){console.warn(`[I18nController] Missing token in config:`,n);return}let r=n.attribute||`textContent`,i=T.get(n.token);if(i===null){console.warn(`[I18nController] Microcopy not found for token: ${n.token}`);return}r===`textContent`?e.textContent=i:r===`innerHTML`?e.innerHTML=i:e.setAttribute(r,i),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${i}" to ${r} for token: ${n.token}`)}catch(t){console.error(`[I18nController] Error processing element:`,t,e)}})}static#l(e){e.querySelectorAll(`*`).forEach(e=>{e.shadowRoot&&(this.#c(e.shadowRoot),this.#l(e.shadowRoot))})}static setLanguage(e){let t=T.getAvailableLanguages();if(!t.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,t);return}localStorage.setItem(v.FF_SSE_LS_USER_LANG,e),T.setContext({lang:e}),console.log(`[I18nController] Language changed to:`,e);let n=new CustomEvent(`language-changed`,{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(e){localStorage.setItem(v.FF_SSE_LS_WHITELABEL,e),T.setContext({whitelabel:e}),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Whitelabel changed to:`,e),this.refresh()}static getLanguage(){return T.getContext().lang}static getAvailableLanguages(){return T.getAvailableLanguages()}static getContext(){return T.getContext()}static destroy(){this.#n&&=(this.#n.disconnect(),null),this.#e=!1,this.#t=null,v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Destroyed`)}},typeof window<`u`&&typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{Ut.initialize()}):Ut.initialize())}));w(),Wt(),m();var Gt=class{static _initialized=!1;static _debug=!1;static init(e={}){return this._initialized?(console.warn(`[MachVive] Already initialized, skipping duplicate initialization`),this):(this._debug=e.debug||!1,window.mvvSSEther?(console.log(`[MachVive] Initializing SSE to PubSub bridge...`),window.mvvSSEther.onmessage(e=>{this._handleSSEMessage(e)}),this._initialized=!0,console.log(`[MachVive] ✓ SSE to PubSub bridge initialized successfully`),console.log(`[MachVive] ✓ Bound callback to mvvSSEther.onmessage`),this):(console.error(`[MachVive] mvvSSEther not found - cannot initialize bridge`),console.error(`[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()`),this))}static _handleSSEMessage(e){try{this._debug&&console.log(`[MachVive] SSE message received:`,e);let t=e?.data;if(!t){this._debug&&console.log(`[MachVive] No data in message, skipping`);return}let n=t.data||t.package||t;if(!n){this._debug&&console.log(`[MachVive] No package found in message, skipping`);return}let r=n.cfg,i=n.msg;if(this._debug&&(console.log(`[MachVive] cfg (raw):`,r,`type:`,typeof r,`length:`,r?.length),console.log(`[MachVive] msg (raw):`,i)),typeof r==`string`){if(r.trim()===``){this._debug&&console.log(`[MachVive] cfg is empty string, skipping`);return}try{r=JSON.parse(r),console.log(`[MachVive] cfg (parsed):`,r)}catch(e){console.warn(`[MachVive] Failed to parse cfg as JSON:`,{cfg:r,cfgLength:r.length,error:e.message});return}}else if(!r){this._debug&&console.log(`[MachVive] cfg is empty/null, skipping`);return}let a=r?.topic;if(!a){this._debug&&console.log(`[MachVive] No topic found in cfg, skipping`);return}if(console.log(`[MachVive] Extracted topic:`,a),!this._isValidTopic(a)){console.warn(`[MachVive] Topic '${a}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(a,i,e,t)}catch(e){console.error(`[MachVive] Error handling SSE message:`,e)}}static _isValidTopic(e){return!p||!p.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,t,n,r){try{if(!window.PubSub&&typeof PubSub>`u`){console.error(`[MachVive] PubSub not available`);return}let i=window.PubSub||PubSub,a={message:t,metadata:{source:`sse`,sseEventId:n.id,timestamp:n.timestamp,appGuid:r.app_guid,channelGuid:r.channel_guid,eventAction:r.event_action,status:r.status,class:r.class,raw:r}};console.log(`[MachVive] Publishing to topic '${e}':`,a);let o=p[e];console.log(`[MachVive] AppBroadcast.${e} = '${o}'`),i.publish(o,a),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(t){console.error(`[MachVive] Error publishing to topic '${e}':`,t)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?`enabled`:`disabled`}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log(`[MachVive] Reset complete`),this}};typeof module<`u`&&module.exports&&(module.exports=Gt),typeof window<`u`&&(window.MachVive=Gt);var Kt=`m5t_sidenav_collapsed`,qt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Jt=class extends HTMLElement{static get observedAttributes(){return[`data-active-token`,`data-collapsed`]}constructor(){super(),this.attachShadow({mode:`open`}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=e=>{if(this.getAttribute(`data-open`)===`true`){if(e.key===`Escape`){e.preventDefault(),this.closeDrawer();return}if(e.key===`Tab`){let t=this.#d();if(t.length<2)return;let n=t[0],r=t[t.length-1],i=this.shadowRoot.activeElement;e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())}}};#n=()=>{this.closeDrawer(),this.#f()};connectedCallback(){if(!this.hasAttribute(`data-collapsed`))try{localStorage.getItem(Kt)===`true`&&this.setAttribute(`data-collapsed`,`true`)}catch{}this.activeToken=this.getAttribute(`data-active-token`)||null,this.render(),this.#l(),this.addEventListener(`keydown`,this.#t),this.#e=window.matchMedia(`(max-width: 768px)`),this.#e.addEventListener(`change`,this.#n),this.#f()}disconnectedCallback(){this.removeEventListener(`keydown`,this.#t),this.#e?.removeEventListener(`change`,this.#n)}attributeChangedCallback(e,t,n){t===n||!this.shadowRoot||(e===`data-active-token`?(this.activeToken=n,this.#u()):e===`data-collapsed`&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:e,orgs:t,activeOrg:n,footerBadge:r,loading:i}={}){e!==void 0&&(this.items=Array.isArray(e)?e:this.#r(e)||[]),t!==void 0&&(this.orgs=Array.isArray(t)?t:this.#r(t)||[]),n!==void 0&&(this.activeOrgGuid=n||null),r!==void 0&&(this.footerBadge=r||null),i!==void 0&&(this.loading=!!i),this.shadowRoot&&(this.render(),this.#l())}setButtons(e){this.setState({buttons:e})}setOrgs(e){this.setState({orgs:e})}setActiveOrgGuid(e){this.setState({activeOrg:e})}setFooterBadge(e){this.setState({footerBadge:e})}setActiveToken(e){this.activeToken=e||null,this.#u()}toggleCollapsed(e){let t=typeof e==`boolean`?e:this.getAttribute(`data-collapsed`)!==`true`;this.setAttribute(`data-collapsed`,String(t));try{localStorage.setItem(Kt,String(t))}catch{}this.dispatchEvent(new CustomEvent(`nav-collapse`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.COLLAPSE`,collapsed:t,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute(`data-open`,`true`),this.shadowRoot.querySelector(`.hamburger`)?.setAttribute(`aria-expanded`,`true`),this.#f(),(this.#d()[0]||this.shadowRoot.querySelector(`.sidenav`))?.focus?.()}closeDrawer(){if(this.getAttribute(`data-open`)!==`true`)return;this.removeAttribute(`data-open`);let e=this.shadowRoot.querySelector(`.hamburger`);e?.setAttribute(`aria-expanded`,`false`),this.#f(),e&&this.#e?.matches?e.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute(`data-open`)===`true`?this.closeDrawer():this.openDrawer()}#r(e){try{return e?JSON.parse(e):null}catch(e){return console.error(`[M5TSideNav] bad JSON:`,e),null}}#i(e){return String(e??``).replace(/[&<>"']/g,e=>qt[e])}#a(e){return e?`<span class="ms" aria-hidden="true">${this.#i(e)}</span>`:``}#o(e){if(!e||!e.token)return``;let t=e.token===this.activeToken,n=e.route||`#`,r=n.startsWith(`#`)?n:`#${n}`,i=typeof e.count==`number`&&e.count>0?`<span class="badge">${e.count}</span>`:``;return`
      <a class="nav-item${t?` active`:``}" href="${this.#i(r)}"
         data-token="${this.#i(e.token)}" data-route="${this.#i(n)}"
         ${t?`aria-current="page"`:``}
         ${e.tagline?`title="${this.#i(e.tagline)}"`:``}>
        ${this.#a(e.icon)}
        <span class="label">${this.#i(e.caption||e.token)}</span>
        ${i}
      </a>`}#s(){return this.loading?Array.from({length:6}).map(()=>`<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>`).join(``):this.items.map(e=>e&&e.group&&Array.isArray(e.items)?`
          <div class="nav-group">
            <div class="group-label">${this.#i(e.caption||``)}</div>
            ${e.items.map(e=>this.#o(e)).join(``)}
          </div>`:this.#o(e)).join(``)}#c(){let e=this.footerBadge,t=e=>`<option value="${this.#i(e.guid)}" ${e.guid===this.activeOrgGuid?`selected`:``}>${this.#i(e.name||e.guid)}</option>`,n=[];for(let e of Array.isArray(this.orgs)?this.orgs:[]){let t=e.group||``,r=n[n.length-1];r&&r.label===t?r.items.push(e):n.push({label:t,items:[e]})}let r=n.map(e=>e.label?`<optgroup label="${this.#i(e.label)}">${e.items.map(t).join(``)}</optgroup>`:e.items.map(t).join(``)).join(``);return`
      ${Array.isArray(this.orgs)&&this.orgs.length>1?`
      <label class="org-switcher" title="Active organization">
        ${this.#a(`corporate_fare`)}
        <select class="org-select" aria-label="Active organization">
          ${r}
        </select>
      </label>`:``}
      ${e?`<span class="footer-badge">${this.#a(e.icon||`verified`)}<span>${this.#i(e.caption||``)}</span></span>`:``}
      <div class="footer-actions">
        <button class="footer-action" type="button" data-action="account" aria-label="Account" title="Account">${this.#a(`account_circle`)}<span>Account</span></button>
        <button class="footer-action" type="button" data-action="lang" aria-label="Language" title="Language">${this.#a(`language`)}<span>Language</span></button>
        <button class="footer-action" type="button" data-action="theme" aria-label="Toggle dark mode" title="Toggle dark mode">${this.#a(`dark_mode`)}<span>Theme</span></button>
        <button class="footer-action" type="button" data-action="signout" aria-label="Sign out" title="Sign out">${this.#a(`logout`)}<span>Sign out</span></button>
      </div>`}render(){let e=this.getAttribute(`data-collapsed`)===`true`;this.shadowRoot.innerHTML=`
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
        aria-expanded="${this.getAttribute(`data-open`)===`true`?`true`:`false`}" aria-controls="m5t-sidenav-aside">
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
            aria-expanded="${e?`false`:`true`}">
            <span class="ms" aria-hidden="true">${e?`chevron_right`:`chevron_left`}</span>
          </button>
        </div>

        <nav class="nav" aria-label="Primary"${this.loading?` aria-busy="true"`:``}>
          ${this.#s()}
        </nav>

        <div class="footer" part="footer">
          ${this.#c()}
        </div>
      </aside>
    `}#l(){this.shadowRoot.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.metaKey||t.ctrlKey||t.shiftKey||t.button===1||(t.preventDefault(),this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.TAP`,token:e.getAttribute(`data-token`),route:e.getAttribute(`data-route`),caption:e.querySelector(`.label`)?.textContent||``,timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(`.collapse-btn`)?.addEventListener(`click`,()=>this.toggleCollapsed()),this.shadowRoot.querySelector(`.hamburger`)?.addEventListener(`click`,()=>this.toggleDrawer()),this.shadowRoot.querySelector(`.scrim`)?.addEventListener(`click`,()=>this.closeDrawer()),this.#f(),this.shadowRoot.querySelector(`.logo`)?.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`logo-click`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.LOGO_TAP`,timestamp:Date.now()}}))}),this.shadowRoot.querySelector(`.org-select`)?.addEventListener(`change`,e=>{this.dispatchEvent(new CustomEvent(`org-switch`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.ORG_SWITCH`,orgGuid:e.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(`.footer-action`).forEach(e=>{e.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`footer-action`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.FOOTER_ACTION`,action:e.getAttribute(`data-action`),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute(`data-open`)===`true`&&this.#d()[0]?.focus()}#u(){this.shadowRoot&&this.shadowRoot.querySelectorAll(`.nav-item`).forEach(e=>{let t=e.getAttribute(`data-token`)===this.activeToken;e.classList.toggle(`active`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}#d(){return Array.from(this.shadowRoot.querySelectorAll(`.sidenav a[href], .sidenav button:not([disabled]), .sidenav select`)).filter(e=>e.offsetParent!==null)}#f(){let e=this.shadowRoot?.querySelector(`.sidenav`);e&&(e.inert=(this.#e?this.#e.matches:window.matchMedia(`(max-width: 768px)`).matches)&&this.getAttribute(`data-open`)!==`true`)}};customElements.define(`m5t-side-nav`,Jt),Ht();var Yt=class{static#e=null;static#t={"client-saas":[{token:`HOME`,caption:`Home`,enabled:!0,icon:`--icon`,admin_role:!1,tagline:`Home Landing Page`,secondary:[{token:`HOME_APPS`,caption:`My Apps`,enabled:!0,icon:`--icon`,admin_role:!1,tagline:`My Apps`},{token:`HOME_DASH`,caption:`Dashboard`,enabled:!0,icon:`--icon`,admin_role:!1,tagline:`Dashboard`}]},{token:`ENGAGEMENTS`,caption:`Engagements`,enabled:!0,icon:`var(--icon-engagements)`,admin_role:!1,tagline:`Customer engagement tools and interactions`,secondary:[{token:`ENGAGEMENTS_SURVEYS`,caption:`Surveys`,enabled:!0,icon:`var(--icon-surveys)`,admin_role:!1,tagline:`Create and manage customer surveys`,secondary:[]},{token:`ENGAGEMENTS_THUMBS`,caption:`Feedback`,enabled:!0,icon:`var(--icon-feedback)`,admin_role:!1,tagline:`Quick thumbs up/down feedback`,secondary:[]},{token:`ENGAGEMENTS_VOICEMAIL`,caption:`Voicemail`,enabled:!0,icon:`var(--icon-voicemail)`,admin_role:!1,tagline:`Voice message collection`,secondary:[]},{token:`ENGAGEMENTS_GUIDEDTOURS`,caption:`Guided Tours`,enabled:!0,icon:`var(--icon-guided-tours)`,admin_role:!1,tagline:`Interactive product tours`,secondary:[]},{token:`ENGAGEMENTS_SLIDESHOWS`,caption:`Slideshows`,enabled:!0,icon:`var(--icon-slideshows)`,admin_role:!1,tagline:`Content slideshows and presentations`,secondary:[]},{token:`ENGAGEMENTS_ABTESTS`,caption:`A/B Tests`,enabled:!0,icon:`var(--icon-ab-tests)`,admin_role:!1,tagline:`A/B testing campaigns`,secondary:[]},{token:`ENGAGEMENTS_QUESTIONNAIRES`,caption:`Questionnaires`,enabled:!0,icon:`var(--icon-questionnaires)`,admin_role:!1,tagline:`Detailed questionnaires and forms`,secondary:[]}]},{token:`DEVELOP`,caption:`Develop`,enabled:!0,icon:`var(--icon-develop)`,admin_role:!1,tagline:`Developer resources and tools`,secondary:[{token:`DEVELOP_DOCUMENTATION`,caption:`Documentation`,enabled:!0,icon:`var(--icon-documentation)`,admin_role:!1,tagline:`API and product documentation`,secondary:[]},{token:`DEVELOP_DEVTOOLS`,caption:`Dev Tools`,enabled:!0,icon:`var(--icon-dev-tools)`,admin_role:!1,tagline:`Developer tools and utilities`,secondary:[]},{token:`DEVELOP_KBASE`,caption:`Knowledge Base`,enabled:!0,icon:`var(--icon-knowledge-base)`,admin_role:!1,tagline:`Technical knowledge base and articles`,secondary:[]},{token:`DEVELOP_HACKATHON`,caption:`Hackathon`,enabled:!0,icon:`var(--icon-hackathon)`,admin_role:!1,tagline:`Hackathon events and challenges`,secondary:[]},{token:`DEVELOP_PARTNER`,caption:`Partner`,enabled:!0,icon:`var(--icon-partner)`,admin_role:!1,tagline:`Partner program and integrations`,secondary:[]},{token:`DEVELOP_CERTIFICATION`,caption:`Certification`,enabled:!0,icon:`var(--icon-certification)`,admin_role:!1,tagline:`Developer certification programs`,secondary:[]}]},{token:`PROFILE`,caption:`Profile`,enabled:!0,icon:`var(--icon-profile)`,admin_role:!1,tagline:`Manage your personal profile and account`,secondary:[{token:`PROFILE_ABOUTME`,caption:`About Me`,enabled:!0,icon:`var(--icon-about-me)`,admin_role:!1,tagline:`View and edit your personal information`,secondary:[]},{token:`PROFILE_BADGES`,caption:`Badges`,enabled:!0,icon:`var(--icon-badges)`,admin_role:!1,tagline:`View your earned badges and achievements`,secondary:[]},{token:`PROFILE_LANGUAGE`,caption:`Language`,enabled:!0,icon:`var(--icon-profile-language)`,admin_role:!1,tagline:`Manage language settings and preferences`,secondary:[]},{token:`RESET_PASSWORD`,caption:`Change Password`,enabled:!0,icon:`var(--icon-change-password)`,admin_role:!1,tagline:`Change your account password`,secondary:[]},{token:`SIGN_OUT`,caption:`Sign Out`,enabled:!0,icon:`var(--icon-sign-out)`,admin_role:!1,tagline:`Log out of your account`,secondary:[]}]},{token:`ACCOUNT`,caption:`Account`,enabled:!0,icon:`var(--icon-account)`,admin_role:!1,tagline:`Account management and support`,secondary:[{token:`ACCOUNT_CONTACT`,caption:`Contact`,enabled:!0,icon:`var(--icon-contact)`,admin_role:!1,tagline:`Contact support and sales`,secondary:[]},{token:`ACCOUNT_PRICETIER`,caption:`Price Tier`,enabled:!0,icon:`var(--icon-price-tier)`,admin_role:!1,tagline:`View and manage pricing plans`,secondary:[]},{token:`ACCOUNT_HELPFAQ`,caption:`Help FAQ`,enabled:!0,icon:`var(--icon-help-faq)`,admin_role:!1,tagline:`Frequently asked questions`,secondary:[]},{token:`ACCOUNT_TEAM`,caption:`Team`,enabled:!0,icon:`var(--icon-team)`,admin_role:!1,tagline:`Manage team members and roles`,secondary:[]},{token:`ACCOUNT_TERMS`,caption:`Terms`,enabled:!0,icon:`var(--icon-terms)`,admin_role:!1,tagline:`Terms of service and legal documents`,secondary:[]}]}],"client-sse-console":[{token:`HOME`,caption:`Home`,enabled:!0,icon:`fas fa-home`,admin_role:!1,tagline:`Admin console home dashboard`,secondary:[]},{token:`ACCOUNTS`,caption:`Accounts`,enabled:!0,icon:`fas fa-user`,admin_role:!1,tagline:`User account management`,secondary:[]},{token:`GROUPS`,caption:`Groups`,enabled:!0,icon:`fas fa-users-cog`,admin_role:!1,tagline:`Group and role management`,secondary:[]},{token:`QUESTIONNAIRES`,caption:`Questionnaires`,enabled:!0,icon:`fas fa-clipboard-list`,admin_role:!1,tagline:`Client kickoff questionnaires — read answers and finalize`,secondary:[]},{token:`LEADS_MANAGE`,caption:`Leads`,enabled:!0,icon:`fas fa-user-plus`,admin_role:!1,tagline:`Lead management and tracking`,secondary:[]},{token:`ROLLERS`,caption:`Magnet Builder`,enabled:!0,icon:`fas fa-magnet`,admin_role:!1,tagline:`Build and configure magnets (steps, actions, flow)`,secondary:[]},{token:`SYSTEM`,caption:`System`,enabled:!0,icon:`fas fa-server`,admin_role:!1,tagline:`System tools — dialog, health, and metering`,secondary:[{token:`DIALOG`,caption:`Dialog`,enabled:!0,icon:`fas fa-comment-alt`,admin_role:!1,tagline:`Dialog and modal management`,secondary:[]},{token:`HEALTH`,caption:`Health`,enabled:!0,icon:`fas fa-heartbeat`,admin_role:!1,tagline:`API health and authentication testing`,secondary:[]},{token:`METER`,caption:`Meter`,enabled:!0,icon:`fas fa-tachometer-alt`,admin_role:!1,tagline:`Usage metering and analytics`,secondary:[]}]},{token:`APPS`,caption:`Apps`,enabled:!0,icon:`fas fa-mobile-alt`,admin_role:!1,tagline:`Subscriber apps (EtherCards)`,secondary:[]},{token:`MESSAGES`,caption:`Messages`,enabled:!0,icon:`fas fa-envelope`,admin_role:!1,tagline:`Message management and templates`,secondary:[]}],LaunCh_console_applet:[{token:`CONSOLE_HOME`,caption:`Console Home`,enabled:!0,icon:`fas fa-terminal`,admin_role:!1,tagline:`Launch console home dashboard`,secondary:[]},{token:`SYSTEM_MONITOR`,caption:`System Monitor`,enabled:!0,icon:`fas fa-desktop`,admin_role:!1,tagline:`Real-time system monitoring and health checks`,secondary:[{token:`SYSTEM_MONITOR_CPU`,caption:`CPU Usage`,enabled:!0,icon:`fas fa-microchip`,admin_role:!1,tagline:`Monitor CPU performance and load`,secondary:[]},{token:`SYSTEM_MONITOR_MEMORY`,caption:`Memory`,enabled:!0,icon:`fas fa-memory`,admin_role:!1,tagline:`Track memory usage and allocation`,secondary:[]},{token:`SYSTEM_MONITOR_NETWORK`,caption:`Network`,enabled:!0,icon:`fas fa-network-wired`,admin_role:!1,tagline:`Network traffic and connectivity`,secondary:[]}]},{token:`LOGS`,caption:`Logs`,enabled:!0,icon:`fas fa-file-medical-alt`,admin_role:!1,tagline:`View system logs and error reports`,secondary:[{token:`LOGS_APPLICATION`,caption:`Application`,enabled:!0,icon:`fas fa-code`,admin_role:!1,tagline:`Application-level logs`,secondary:[]},{token:`LOGS_SYSTEM`,caption:`System`,enabled:!0,icon:`fas fa-server`,admin_role:!1,tagline:`System-level logs`,secondary:[]},{token:`LOGS_SECURITY`,caption:`Security`,enabled:!0,icon:`fas fa-lock`,admin_role:!1,tagline:`Security audit logs`,secondary:[]}]},{token:`DEPLOYMENTS`,caption:`Deployments`,enabled:!0,icon:`fas fa-rocket`,admin_role:!1,tagline:`Manage application deployments`,secondary:[]}],Client_Property_Sandbox_Emulator:[{token:`SANDBOX_HOME`,caption:`Sandbox Home`,enabled:!0,icon:`fas fa-home`,admin_role:!1,tagline:`Sandbox testing environment home`,secondary:[]},{token:`API_TESTING`,caption:`API Testing`,enabled:!0,icon:`fas fa-vial`,admin_role:!1,tagline:`Test API endpoints and responses`,secondary:[{token:`API_TESTING_ENDPOINTS`,caption:`Endpoints`,enabled:!0,icon:`fas fa-plug`,admin_role:!1,tagline:`Available API endpoints`,secondary:[]},{token:`API_TESTING_REQUESTS`,caption:`Requests`,enabled:!0,icon:`fas fa-paper-plane`,admin_role:!1,tagline:`Send test requests`,secondary:[]},{token:`API_TESTING_HISTORY`,caption:`History`,enabled:!0,icon:`fas fa-history`,admin_role:!1,tagline:`Request history and logs`,secondary:[]}]},{token:`DATA_SIMULATOR`,caption:`Data Simulator`,enabled:!0,icon:`fas fa-database`,admin_role:!1,tagline:`Simulate data scenarios and edge cases`,secondary:[{token:`DATA_SIMULATOR_GENERATE`,caption:`Generate`,enabled:!0,icon:`fas fa-magic`,admin_role:!1,tagline:`Generate mock data`,secondary:[]},{token:`DATA_SIMULATOR_LOAD`,caption:`Load`,enabled:!0,icon:`fas fa-upload`,admin_role:!1,tagline:`Load data fixtures`,secondary:[]}]},{token:`SCENARIOS`,caption:`Scenarios`,enabled:!0,icon:`fas fa-project-diagram`,admin_role:!1,tagline:`Pre-configured test scenarios`,secondary:[]},{token:`RESET_SANDBOX`,caption:`Reset Sandbox`,enabled:!0,icon:`fas fa-redo`,admin_role:!1,tagline:`Reset sandbox to initial state`,secondary:[]}]};static#n={"client-saas":[{token:`DASHBOARD`,caption:`Dashboard`,icon:`dashboard`,route:`/home`,capability:`view_dashboard`,enabled:!0,tagline:`Overview of your activity`},{token:`MAGNETS`,caption:`Your Magnets`,icon:`widgets`,route:`/magnets`,capability:`view_magnets`,enabled:!0,tagline:`Manage your conversational magnets`,children:[{token:`MAGNETS_ALL`,caption:`All`,route:`/magnets`,capability:`view_magnets`},{token:`MAGNETS_DRAFTS`,caption:`Drafts`,route:`/magnets/drafts`,capability:`view_magnets`,enabled:!1},{token:`MAGNETS_ARCHIVED`,caption:`Archived`,route:`/magnets/archived`,capability:`view_magnets`,enabled:!1}]},{token:`LEADS`,caption:`Leads`,icon:`contacts`,route:`/leads`,capability:`view_magnets`,enabled:!0,tagline:`Leads your magnets captured`},{token:`TEMPLATES`,caption:`Templates`,icon:`content_copy`,route:`/templates`,capabilityAny:[`provision_magnets`,`manage_magnets`],enabled:!0,tagline:`Start from a magnet template`},{token:`CONVERSATIONS`,caption:`Conversations`,icon:`forum`,route:`/conversations`,capability:`view_conversations`,enabled:!0,tagline:`Captured lead conversations`},{token:`AB_TESTING`,caption:`A/B Testing`,icon:`science`,route:`/ab-testing`,capability:`manage_magnets`,enabled:!0,tagline:`Experiment and optimize`},{token:`ANALYTICS`,caption:`Analytics`,icon:`monitoring`,route:`/analytics`,capability:`view_stats`,enabled:!0,tagline:`Magnet performance and conversions`,children:[{token:`ANALYTICS_OVERVIEW`,caption:`Overview`,route:`/analytics`,capability:`view_stats`},{token:`ANALYTICS_CONVERSIONS`,caption:`Conversions`,route:`/analytics/conversions`,capability:`view_ad_metrics`,enabled:!0},{token:`ANALYTICS_TRAFFIC`,caption:`Traffic`,route:`/analytics/traffic`,capability:`view_stats`,enabled:!0}]},{token:`ADVERTISING`,caption:`Advertising`,icon:`ads_click`,route:`/analytics/ad-performance`,capabilityAny:[`view_ad_metrics`,`connect_ad_accounts`],enabled:!0,tagline:`Ad performance and connected accounts`,children:[{token:`ADVERTISING_PERFORMANCE`,caption:`Ad Performance`,route:`/analytics/ad-performance`,capability:`view_ad_metrics`},{token:`ADVERTISING_ACCOUNTS`,caption:`Ad Accounts`,route:`/ad-accounts`,capability:`connect_ad_accounts`}]},{token:`CLIENTS`,caption:`Clients`,icon:`groups`,route:`/clients`,capability:`create_client_accounts`,enabled:!0,tagline:`Manage your client accounts`},{token:`QUESTIONNAIRES`,caption:`Questionnaires`,icon:`fact_check`,route:`/questionnaires`,capability:`create_client_accounts`,enabled:!0,tagline:`Kickoff questionnaire status per client`},{token:`DELIVERABLES`,caption:`Deliverables`,icon:`approval`,route:`/deliverables`,capabilityAny:[`create_client_accounts`,`view_magnets`],enabled:!0,tagline:`Plans and sign-off status`},{token:`TEAM`,caption:`Team`,icon:`group`,route:`/team`,capability:`manage_team`,enabled:!0,tagline:`Invite and manage teammates`},{token:`BILLING`,caption:`Billing`,icon:`receipt_long`,route:`/billing`,capability:`view_billing`,enabled:!1,tagline:`Plan, usage, and invoices`},{token:`SETTINGS`,caption:`Settings`,icon:`settings`,route:`/settings`,capability:null,enabled:!0,tagline:`Account and workspace settings`,children:[{token:`SETTINGS_GENERAL`,caption:`General`,route:`/settings`,capability:null},{token:`SETTINGS_WORKSPACE`,caption:`Workspace`,route:`/settings/workspace`,capability:null},{token:`SETTINGS_NOTIFICATIONS`,caption:`Notifications`,route:`/settings/notifications`,capability:null},{token:`SETTINGS_INTEGRATIONS`,caption:`Integrations`,route:`/settings/integrations`,capability:null},{token:`SETTINGS_SECURITY`,caption:`Security`,route:`/settings/security`,capability:null}]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(`, `)}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#r(e){if(!e)return e;let t=e.token.toLowerCase(),n=`nav_${t}`,r=`nav_${t}_tagline`,i=T.get(n)||e.caption,a=T.get(r)||e.tagline;return{...e,caption:i,tagline:a,secondary:e.secondary?e.secondary.map(e=>this.#r(e)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(e=>this.#r(e)):(console.warn(`[NavMetaManager] No app token set. Call setAppToken() first.`),[])}static getFlattenedNav(){let e=this.getPrimaryNav(),t=[];return e.forEach(e=>{t.push(e),e.secondary&&e.secondary.length>0&&t.push(...e.secondary)}),t}static getNavByToken(e){return this.getFlattenedNav().find(t=>t.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(e=>e.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(e=>e.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#i(e){if(!e||!e.token)return e;let t=e.token.toLowerCase();return{...e,caption:T.get(`nav_${t}`)||e.caption,tagline:T.get(`nav_${t}_tagline`)||e.tagline}}static getSideNav(e=[],{uiMode:t=null}={}){let n=this.#n[this.#e]?this.#e:`client-saas`,r=this.#n[n]||[],i=Array.isArray(e)?e:[],a=e=>e.enabled===!1?!1:e.capability==null&&!e.capabilityAny||!(e.capability&&!i.includes(e.capability)||e.capabilityAny&&!e.capabilityAny.some(e=>i.includes(e))),o=[];for(let e of r)if(e.group&&Array.isArray(e.items)){if(!a(e))continue;let t=e.items.filter(a).map(e=>this.#i(e));t.length&&o.push({...this.#i(e),items:t})}else if(a(e)){let t=this.#i(e);Array.isArray(e.children)&&e.children.length&&(t.children=e.children.filter(a).map(e=>this.#i(e))),o.push(t)}return o}static getSideNavJSON(e=[],t={}){return JSON.stringify(this.getSideNav(e,t))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e=`/m5t/v5`){if(!this.#e)return console.warn(`[NavMetaManager] No app token set. Using static config.`),this.getPrimaryNav();try{let t=`NAV_${this.#e.toUpperCase().replace(/-/g,`_`)}`,n=await fetch(`${e}/coreMeta?meta_token=${t}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();let r=await n.json();return r.ok&&r.data&&r.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${t}`),r.data.meta_keyval):(console.warn(`[NavMetaManager] No data in coreMeta response, using static config`),this.getPrimaryNav())}catch(e){return console.error(`[NavMetaManager] Error fetching from coreMeta:`,e),this.getPrimaryNav()}}static getAll(){return{...this.#t}}};typeof module<`u`&&module.exports&&(module.exports={NavMetaManager:Yt});var Xt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.hideLogo=!1,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute(`data-logo-topic`),this.showSecondary=this.getAttribute(`data-show-secondary`)!==`false`,this.hideLogo=this.getAttribute(`data-hide-logo`)===`true`,this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log(`[M5TPrimaryNav] Language changed, refreshing navigation with i18n`);let e=Yt.getPrimaryNav();e&&e.length>0?(this.setAttribute(`data-buttons`,JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn(`[M5TPrimaryNav] No navigation data returned from NavMetaManager`)},document.addEventListener(`language-changed`,this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener(`language-changed`,this.languageChangeHandler)}parseButtons(){let e=this.getAttribute(`data-buttons`);if(e)try{this.buttons=JSON.parse(e);let t=this.buttons.find(e=>e.selected);this.selectedPrimaryToken=t?t.token:this.buttons[0]?.token||null}catch(e){console.error(`[M5TPrimaryNav] Error parsing buttons:`,e),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(e=>e.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,t){if(t===`primary`){let t=this.buttons.find(t=>t.token===e);return{caption:t?.caption||``,tagline:t?.tagline||``}}for(let t of this.buttons)if(t.secondary){let n=t.secondary.find(t=>t.token===e);if(n)return{caption:n.caption||``,tagline:n.tagline||``}}return{caption:``,tagline:``}}render(){let e=this.getSecondaryButtons(),t=e.length>0,n=!Array.isArray(this.buttons)||this.buttons.length===0;this.shadowRoot.innerHTML=`
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

        /* Brand palette — reads the host page's design tokens so this bar follows
           [data-theme="dark"] like the rest of the app shell (it used to hardcode an
           always-light palette here, so it stayed a bright white bar no matter what
           theme the app was in). Falls back to the original light literals for a host
           that has no token system (e.g. this component used standalone). */
        :host {
          --nav-bg: var(--color-bg, #ffffff);
          --nav-border: var(--color-border, #e2e8f0);
          --nav-text: var(--color-text-muted, #475569);
          --nav-text-strong: var(--color-text, #0f172a);
          --nav-muted: var(--color-text-subtle, #64748b);
          --nav-accent: var(--color-accent, #0284c7);
          /* Text-on-accent-soft (selected tab label) and text-on-accent (badge number)
             need different ends of the accent scale to each clear 4.5:1 — accent-hover
             is the more-saturated-in-dark/darker-in-light variant that works as text on
             top of the soft accent wash; accent-active is dark enough in both themes to
             hold white badge text. Verified against launCh.css's actual dark values,
             not eyeballed. */
          --nav-accent-strong: var(--color-accent-hover, #0369a1);
          --nav-accent-badge: var(--color-accent-active, #075985);
          --nav-accent-soft: var(--color-accent-soft, #f0f9ff);
          --nav-surface: var(--color-surface, #f8fafc);
          --nav-surface-2: var(--color-surface-2, #eef2f7);
          /* Deliberately NOT theme-reactive: a tooltip is always a dark chip with white
             text regardless of app theme (flipping it light-on-light in dark mode would
             recreate the exact bug this pass fixes). */
          --nav-tooltip-bg: #0f172a;
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
          /* Nothing is drawn here, so it must not intercept clicks either: an invisible
             full-width strip pinned at z-index 1000 otherwise swallows whatever sits
             beneath it — the notification bell sits in exactly this band. */
          pointer-events: none;
        }
        /* THE FIX for "content scrolls up behind the bar and gets clipped".
           The rule above cleared the WRAPPER's background, but .nav-container below
           paints var(--nav-bg) again and nothing overrode it — so "spacer" mode still
           rendered an opaque, full-width, 60px, z-index:1000 bar pinned to the top of the
           viewport. Every section without sub-tabs (Home, Leads, Magnets, Conversations,
           Templates, A/B Testing, Clients, Questionnaires, Team, Analytics) scrolled its
           content underneath it, clipping headings. The comment above always claimed this
           mode was invisible; only the wrapper ever was.

           NOTE for anyone tempted to "fix" a recurrence with padding-top on .page-shell:
           this bar is position:sticky, NOT fixed, so it already occupies flow space at
           scroll 0. Padding would open a 60px gap at the top of every page AND still not
           stop the overlap once scrolled. */
        .nav-wrapper.is-spacer .nav-container {
          background: transparent;
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
          /* Room at the right end for whatever the host page floats over this bar — in
             client-saas that is the fixed notification bell, which sits at the same
             viewport edge and was covering the last tab's label and ~40px of its hit
             area. Opt-in and 0 by default: this component is also used without a bell
             (client-sse-console), and a component should not reserve space for something
             it cannot see. The host sets it — see #m5t-sub-nav in client-saas/index.html,
             where it is derived from the bell's own size and offset rather than restated.
             Custom properties inherit through the shadow boundary, which is what makes
             this settable from outside at all.

             MARGIN, NOT PADDING. This strip is overflow-x:auto, so once the tabs are
             wider than the bar they scroll. Trailing PADDING sits at the end of the
             scrolled CONTENT, which leaves the scrollport's own right edge at the viewport
             edge — directly under the bell — so visible tabs sit under it at most scroll
             offsets. Measured in Chromium with five tabs, worst visible overlap across
             scroll positions: padding 40px @820 and 35px @500; margin 0px at every width
             tested (1440/1280/1024/820/700/500). Margin shrinks the scrollport itself, so
             no tab can be painted in that band at any scroll position. The bar still looks
             full-width because .nav-wrapper paints the background behind this. */
          margin-right: var(--m5t-nav-end-gutter, 0px);
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
          color: var(--nav-accent-strong);
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
          background: var(--nav-surface-2);
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
          background: var(--nav-accent-badge);
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
          background: var(--nav-tooltip-bg);
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

      <div class="nav-wrapper${n?` is-spacer`:``}">
        <nav class="nav-container">
          ${this.hideLogo?``:`<div class="logo" title="Mach Five Magnet">
            <img class="logo-mark" src="m5m-mark.svg" alt="Mach Five Magnet" width="28" height="28" />
            <span class="logo-text">Mach Five <b>Magnet</b></span>
          </div>`}
          ${this.buttons.map((e,t)=>this.renderButton(e,t,`primary`)).join(``)}
        </nav>
        ${t?`
        <nav class="secondary-nav">
          ${e.map((e,t)=>this.renderButton(e,t,`secondary`)).join(``)}
        </nav>`:``}
      </div>
    `}renderButton(e,t,n=`primary`){let r=n===`primary`&&e.token===this.selectedPrimaryToken,i=typeof e.count==`number`&&e.count!==null&&e.count!==void 0,a=e.icon&&e.icon.trim()!==``,o=e.tagline&&e.tagline.trim()!==``;return`
      <button
        class="nav-button ${r?`selected`:``}"
        data-token="${e.token}"
        data-level="${n}"
        data-admin="${e.admin_role||!1}"
        ${e.enabled?``:`disabled`}
        ${o?`title="${e.tagline}"`:``}
      >
        ${a?`<i class="${e.icon} nav-button-icon"></i>`:``}
        <span>${e.caption}</span>
        ${i?`<span class="count-badge">${e.count}</span>`:``}
      </button>
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(`.nav-button`).forEach(e=>{let t=e.getAttribute(`data-token`),n=e.getAttribute(`data-level`);e.addEventListener(`click`,e=>{t&&!e.currentTarget.disabled&&!this.longTapFired&&(n===`primary`?this.selectPrimaryButton(t):this.selectSecondaryButton(t)),this.longTapFired=!1}),e.addEventListener(`dblclick`,e=>{if(t&&!e.currentTarget.disabled){let e=this.getButtonData(t,n);console.log(`[M5TPrimaryNav] Button double-clicked:`,t),this.dispatchEvent(new CustomEvent(`nav-double-tap`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.DOUBLE_TAP`,token:t,level:n,caption:e.caption,tagline:e.tagline,timestamp:Date.now()}}))}}),e.addEventListener(`mouseenter`,e=>{if(t&&!e.currentTarget.disabled){let e=this.getButtonData(t,n);this.dispatchEvent(new CustomEvent(`nav-hover`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.HOVER`,token:t,level:n,caption:e.caption,tagline:e.tagline,action:`enter`,timestamp:Date.now()}}))}}),e.addEventListener(`mouseleave`,e=>{if(t&&!e.currentTarget.disabled){let e=this.getButtonData(t,n);this.dispatchEvent(new CustomEvent(`nav-hover`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.HOVER`,token:t,level:n,caption:e.caption,tagline:e.tagline,action:`leave`,timestamp:Date.now()}}))}}),e.addEventListener(`mousedown`,e=>{t&&!e.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{let e=this.getButtonData(t,n);console.log(`[M5TPrimaryNav] Button long-tap:`,t),this.longTapFired=!0,this.dispatchEvent(new CustomEvent(`nav-long-tap`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.LONG_TAP`,token:t,level:n,caption:e.caption,tagline:e.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),e.addEventListener(`mouseup`,e=>{this.longTapTimer&&=(clearTimeout(this.longTapTimer),null),this.longTapActive=!1}),e.addEventListener(`mouseleave`,e=>{this.longTapTimer&&=(clearTimeout(this.longTapTimer),null),this.longTapActive=!1})});let e=this.shadowRoot.querySelector(`.logo`);e&&e.addEventListener(`click`,()=>{console.log(`[M5TPrimaryNav] Logo clicked`),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn(`[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found`),this.dispatchEvent(new CustomEvent(`logo-click`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.LOGO_TAP`,timestamp:Date.now()}}))})}selectPrimaryButton(e){let t=this.buttons.find(t=>t.token===e),n=this.getButtonData(e,`primary`);this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.TAP`,token:e,level:`primary`,caption:n.caption,tagline:n.tagline,hasSecondary:(t?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){let t=this.getButtonData(e,`secondary`);this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.TAP`,token:e,primaryToken:this.selectedPrimaryToken,level:`secondary`,caption:t.caption,tagline:t.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute(`data-buttons`,JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,t,n=`primary`){let r;r=n===`primary`?this.buttons.find(t=>t.token===e):this.getSecondaryButtons().find(t=>t.token===e),r&&(r.count=t,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}};customElements.define(`m5t-primary-nav`,Xt);function Zt(){if(typeof document<`u`){let e=document.getElementById(`app`);if(e&&typeof e.scrollTo==`function`)return e}return typeof window<`u`?window:null}var Qt=null;function $t(e,t={}){if(!e||e===Qt)return!1;Qt=e;let n=t.scroller||Zt();if(!n||typeof n.scrollTo!=`function`)return!1;try{n.scrollTo({top:0,left:0,behavior:`instant`})}catch{try{n.scrollTo(0,0)}catch{}}return!0}function en({total:e=0,shown:t=0,size:n=25,noun:r=``,id:i=``}={}){let a=Number(rn[0])||25;if(e<=a)return``;let o=r?` ${nn(r)}`:``,s=Math.min(t||a,e),c=rn.filter(t=>t===`ALL`||Number(t)<e).map(e=>{let t=String(e);return`<option value="${t}"${String(n)===t?` selected`:``}>${e===`ALL`?`All`:t}</option>`}).join(``);return`<div class="m5t-list-size"${i?` id="${nn(i)}"`:``}>
      <span class="m5t-list-size__count">Showing ${s.toLocaleString()} of ${e.toLocaleString()}${o}</span>
      <label class="m5t-list-size__pick">
        <span>Show</span>
        <select class="m5t-list-size__sel" data-action="list-size" aria-label="Rows to show${o}">${c}</select>
      </label>
    </div>`}function tn(e,{total:t=0,onSize:n}={}){let r=e?.querySelector?.(`[data-action="list-size"]`);if(!r||typeof n!=`function`)return()=>{};let i=e=>n(on(e.target.value,t),e.target.value);return r.addEventListener(`change`,i),()=>r.removeEventListener(`change`,i)}function E(e,{rowSelector:t,cap:n=25,noun:r=``,controlHost:i,key:a}={}){if(!e||!t)return 0;e.querySelectorAll(`:scope > .m5t-list-size, .m5t-list-size`).forEach(e=>e.remove());let o=[...e.querySelectorAll(t)];if(o.forEach(e=>e.removeAttribute(`hidden`)),o.length<=n)return 0;let s=a||r||t,c=an.get(s)??n,l=on(c,o.length),u=i||e,d=()=>{l=on(c,o.length),o.forEach((e,t)=>{t<l?e.removeAttribute(`hidden`):e.setAttribute(`hidden`,``)}),u.querySelectorAll(`.m5t-list-size`).forEach(e=>e.remove());let e=en({total:o.length,shown:l,size:c,noun:r});e&&(u.insertAdjacentHTML(`beforeend`,e),tn(u,{total:o.length,onSize:(e,t)=>{c=t,an.set(s,t),d()}}))};return d(),Math.max(0,o.length-l)}function nn(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var rn,an,on,sn=o((()=>{rn=[25,50,100,`ALL`],an=new Map,on=(e,t)=>e===`ALL`?t:Number(e)||25}));sn();var cn=()=>C.getConfig?.().BASE_URL||``,ln={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},un=e=>String(e??``).replace(/[&<>"']/g,e=>ln[e]),dn=3e5;function fn(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function pn(e){let t=`
      <div class="m5t-notif-title">${un(e.title)}</div>
      ${e.body?`<div class="m5t-notif-body">${un(e.body)}</div>`:``}
      <div class="m5t-notif-time">${un(fn(e.created_tz))}</div>`;return`<div class="m5t-notif-item" data-guid="${un(e.guid)}" data-read="${e.read}" role="menuitem">
    ${e.link?`<a class="m5t-notif-main m5t-notif-link" href="${un(e.link)}">${t}</a>`:`<div class="m5t-notif-main">${t}</div>`}
    <button class="m5t-notif-dismiss" type="button" aria-label="Clear “${un(e.title)}”" data-dismiss="${un(e.guid)}">Clear</button>
  </div>`}var mn=`<div class="m5t-notif-skel"><span></span><span></span><span></span></div>`.repeat(3),hn=e=>e.dataset.open===`true`,gn=(e,t)=>{e.dataset.open=t?`true`:`false`};function _n(e){let t=document.getElementById(`m5t-notif-bell`);if(t&&(t.hidden=!e),!e){let e=document.getElementById(`m5t-notif-panel`);e&&gn(e,!1)}}var vn=14,yn=null,bn=null;function xn(e){if(typeof ResizeObserver>`u`||!e)return;let t=document.getElementById(`m5t-notif-bell`),n=document.getElementById(`m5t-notif-bell-btn`);if(!t||!n)return;let r=()=>{let r=e.hidden?null:e.querySelector(`.ocb-btn`);if(!r){t.style.top=`${vn}px`;return}let i=n.getBoundingClientRect().height;if(!i)return;let a=r.getBoundingClientRect();t.style.top=`${Math.round(a.top+(a.height-i)/2)}px`};yn?.disconnect(),yn=new ResizeObserver(r),yn.observe(e),bn?.disconnect(),bn=new MutationObserver(r),bn.observe(t,{attributes:!0,attributeFilter:[`hidden`]}),r()}var Sn=null,Cn=null,wn=null;function Tn(){let e=document.getElementById(`m5t-notif-bell-btn`),t=document.getElementById(`m5t-notif-badge`),n=document.getElementById(`m5t-notif-panel`);if(!e||!t||!n)return;let r=e=>{t.textContent=e>99?`99+`:String(e),t.hidden=!e},i=async()=>{try{let e=await fetch(`${cn()}/m5t/v5/notifications/unread-count`),t=await e.json().catch(()=>({}));e.ok&&t.ok&&r(t.count||0)}catch{}},a=e=>{if(e.length>=50){i();return}r(e.filter(e=>!e.read).length)},o=(e=``)=>`<div class="m5t-notif-head">Notifications${e?`<span class="m5t-notif-head__actions">${e}</span>`:``}</div>`,s=()=>{n.querySelectorAll(`.m5t-notif-item, .m5t-notif-empty`).forEach(e=>e.remove()),n.querySelector(`.m5t-notif-head__actions`)?.remove(),n.insertAdjacentHTML(`beforeend`,`<div class="m5t-notif-empty">You’re all caught up.</div>`)},c=async()=>{n.innerHTML=o()+mn;try{let e=await fetch(`${cn()}/m5t/v5/notifications`),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error();let r=t.notifications||[],i=[r.some(e=>!e.read)?`<button class="m5t-notif-markall" type="button">Mark all read</button>`:``,r.length?`<button class="m5t-notif-clearall" type="button">Clear all</button>`:``].join(``);n.innerHTML=o(i)+(r.length?r.map(pn).join(``):`<div class="m5t-notif-empty">You’re all caught up.</div>`),E(n,{rowSelector:`.m5t-notif-item`,noun:`notifications`}),a(r)}catch{n.innerHTML=o()+`<div class="m5t-notif-empty">Could not load. Try again.</div>`}},l=()=>{gn(n,!1),e.setAttribute(`aria-expanded`,`false`)},u=async()=>{gn(n,!0),e.setAttribute(`aria-expanded`,`true`),await c()};e.addEventListener(`click`,e=>{e.stopPropagation(),hn(n)?l():u()}),wn&&document.removeEventListener(`visibilitychange`,wn),wn=()=>{document.visibilityState===`visible`&&i()},document.addEventListener(`visibilitychange`,wn),Cn&&document.removeEventListener(`click`,Cn),Cn=t=>{hn(n)&&!n.contains(t.target)&&t.target!==e&&l()},document.addEventListener(`click`,Cn),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&hn(n)&&(l(),e.focus())}),n.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-dismiss]`);if(t){e.preventDefault(),e.stopPropagation();let r=t.closest(`.m5t-notif-item`),a=t.dataset.dismiss,o=r?.dataset.read===`false`;r?.setAttribute(`data-leaving`,`true`);try{await fetch(`${cn()}/m5t/v5/notifications/${encodeURIComponent(a)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:`DISMISSED`})})}catch{}setTimeout(()=>{r?.remove(),n.querySelector(`.m5t-notif-item`)||s()},180),o&&i();return}let r=e.target.closest(`.m5t-notif-clearall`);if(r){e.preventDefault(),r.disabled=!0,n.querySelectorAll(`.m5t-notif-item`).forEach(e=>e.setAttribute(`data-leaving`,`true`));try{await fetch(`${cn()}/m5t/v5/notifications/dismiss-all`,{method:`PATCH`})}catch{}setTimeout(s,180),i();return}let a=e.target.closest(`.m5t-notif-item`);if(a&&a.dataset.read===`false`){let e=a.dataset.guid;a.dataset.read=`true`;try{await fetch(`${cn()}/m5t/v5/notifications/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({read:!0})}),i()}catch{}return}let o=e.target.closest(`.m5t-notif-markall`);if(o){e.preventDefault(),n.querySelectorAll(`.m5t-notif-item`).forEach(e=>{e.dataset.read=`true`}),o.remove();try{await fetch(`${cn()}/m5t/v5/notifications/read-all`,{method:`PATCH`})}catch{}i()}}),i(),clearInterval(Sn),Sn=setInterval(i,dn)}function En(){return g(`FF_SSE_UI_DARK_MODE`)}function Dn(e=En()){return e&&localStorage.getItem(v.FF_SSE_LS_THEME)===`dark`?`dark`:`light`}function On(e=g(`FF_SSE_UI_ANIMATIONS`)){return!e}function kn(e,t=En()){!e||t||e.shadowRoot?.querySelector(`.footer-action[data-action="theme"]`)?.remove()}var An=o((()=>{y()}));function jn(e){document.documentElement.setAttribute(`data-theme`,e)}function Mn(){jn(Dn())}function Nn(){return document.documentElement.getAttribute(`data-theme`)===`dark`?`dark`:`light`}function Pn(e,{quiet:t=!1}={}){if(!En())return;let n=e===`dark`?`dark`:`light`;n!==Nn()&&(jn(n),localStorage.setItem(v.FF_SSE_LS_THEME,n),t||In.default.publish(p.UI_TOAST,{message:n===`dark`?`Dark mode on`:`Dark mode off`,type:`info`}),In.default.publish(p.UI_THEME_CHANGED,{theme:n}))}function Fn(){Pn(Nn()===`dark`?`light`:`dark`)}var In,Ln=o((()=>{In=u(f(),1),m(),y(),An()})),Rn=c({default:()=>Wn,init:()=>Hn,render:()=>Vn});function zn(){if(Un)return;let e=document.createElement(`style`);e.id=`m5t-accept-invite-styles`,e.textContent=`
    .accept-invite-page {
      min-height: 100%;   /* the scroll pane, not the viewport */ display: grid; place-items: center; padding: 32px 20px;
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
  `,document.head.appendChild(e),Un=!0}function Bn(){let e=new URLSearchParams(window.location.search||``),t=e.get(`uid`)||``,n=e.get(`token`)||``;if(!t||!n){let e=window.location.hash||``,r=e.includes(`?`)?e.slice(e.indexOf(`?`)+1):``,i=new URLSearchParams(r);if(t=t||i.get(`uid`)||``,n=n||i.get(`token`)||``,!t||!n){let r=e.replace(/^#\/?/,``).split(`?`)[0].split(`/`).filter(Boolean);t=t||r[1]||``,n=n||r[2]||``}}try{return{uid:decodeURIComponent(t),token:decodeURIComponent(n)}}catch{return{uid:t,token:n}}}function Vn(){return zn(),`
    <div class="accept-invite-page">
      <div class="accept-invite-card">
        <h1>Accept your invitation</h1>
        <p class="sub">Tell us your name and set a password to access your Mach Five Magnet account.</p>
        <form id="accept-invite-form" autocomplete="off">
          <div class="accept-invite-field">
            <label for="ai-first">First name</label>
            <input type="text" id="ai-first" autocomplete="given-name" maxlength="80" placeholder="Your first name" />
          </div>
          <div class="accept-invite-field">
            <label for="ai-last">Last name</label>
            <input type="text" id="ai-last" autocomplete="family-name" maxlength="80" placeholder="Your last name" />
          </div>
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
    </div>`}function Hn(){let{uid:e,token:t}=Bn(),n=document.getElementById(`accept-invite-form`),r=document.getElementById(`ai-first`),i=document.getElementById(`ai-last`),a=document.getElementById(`ai-pass`),o=document.getElementById(`ai-confirm`),s=document.getElementById(`ai-submit`),c=document.getElementById(`ai-msg`);if(!n)return;let l=(e,t=`error`)=>{c.textContent=e,c.className=`accept-invite-msg ${t}`};if(!e||!t){l(`This invitation link is invalid or incomplete. Please use the link from your email.`),s.disabled=!0;return}n.addEventListener(`submit`,async n=>{n.preventDefault();let c=(r.value||``).trim(),u=(i.value||``).trim(),d=a.value||``,f=o.value||``;if(!c||!u){l(`Please enter your first and last name.`);return}if(d.length<8){l(`Password must be at least 8 characters.`);return}if(d!==f){l(`Passwords do not match.`);return}s.disabled=!0,l(`Setting up your account…`,`ok`);try{let n=C.getConfig?.().BASE_URL||``,r=await fetch(`${n}/m5t/v5/acctEntity/acceptInvite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({uid:e,token:t,password:d,first:c,last:u})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok){let e=r.status===410?`This invitation has expired. Ask for a new one.`:r.status===409?`This invitation has already been used. Try signing in.`:i.error||`Could not accept the invitation (HTTP ${r.status}).`;l(e),s.disabled=!1;return}try{window.history.replaceState({},``,window.location.pathname+window.location.hash)}catch{}l(`Welcome! Signing you in…`,`ok`),(await C.doSignin(i.entity.email,d))?.ok||(l(`Your account is ready. Please sign in.`,`ok`),setTimeout(()=>{window.location.hash=`#/signin`},1200))}catch(e){console.error(`[accept-invite] error:`,e),l(`Something went wrong. Please try again.`),s.disabled=!1}})}var Un,Wn,Gn=o((()=>{w(),Un=!1,Wn={render:Vn,init:Hn}})),Kn,qn=o((()=>{Kn=``+new URL(`mfm-lockup-white.png`,import.meta.url).href})),Jn,Yn=o((()=>{Jn=``+new URL(`mfm-lockup-black.png`,import.meta.url).href})),Xn,Zn=o((()=>{Xn=``+new URL(`mfm-lockup-color.png`,import.meta.url).href})),Qn,$n=o((()=>{Qn=``+new URL(`m5mag-lockup.png`,import.meta.url).href}));function er(e=`#/splash`){return`
        <a class="auth-brand" href="${e}" aria-label="Mach Five Magnet">
          <img src="${Qn}" alt="Mach Five Magnet" height="42" />
        </a>`}function tr(e=`panel`){let t=e===`light`;return`
    <a class="auth-cobrand${t?` auth-cobrand--light`:``}" href="${nr}"
       target="_blank" rel="noopener" aria-label="From Mach Five Marketing">
      <span class="auth-cobrand__label">From</span>
      <img class="auth-cobrand__logo" src="${t?Jn:Kn}"
           alt="Mach Five Marketing" height="26" loading="lazy" />
    </a>`}var nr,rr,ir,ar=o((()=>{qn(),Yn(),Zn(),$n(),nr=`https://www.machfivemarketing.com`,rr=Qn,ir=Xn}));function D(e){if(!e)return``;try{return new Date(e).toLocaleString([],{dateStyle:`medium`,timeStyle:`short`})}catch{return String(e)}}function or(e,t={}){let n=t[e.id];if(e.type===`checkbox_group`){let e=Array.isArray(n)?n:[];return e.length?pr(e.join(`, `)):``}return n?pr(n):``}function sr(e,{emptyLabel:t=`(blank)`,renderAnswer:n=null}={}){let r=e?.questionnaire?.sections||[],i=e?.answers||{};return r.length?r.map(e=>`
    <div class="qm-section">
      <h3>${pr(e.title)}</h3>
      ${(e.questions||[]).map(e=>`
        <div class="qm-qa" data-question-id="${pr(e.id)}" data-question-type="${pr(e.type)}">
          <div class="qm-qa__q">${pr(e.label)}</div>
          <div class="qm-qa__a">${n?n(e,i):or(e,i)||`<span class="qm-qa__a--empty">${pr(t)}</span>`}</div>
        </div>`).join(``)}
    </div>`).join(``):`<p class="qm-qa__a qm-qa__a--empty">This questionnaire has no questions.</p>`}function cr(e,t={}){let n=t[e.id];if(e.type===`checkbox_group`){let t=Array.isArray(n)?n:[];return`<div class="qm-checkbox-group">${(Array.isArray(e.options)?e.options:[]).map(e=>`
      <label><input type="checkbox" value="${pr(e)}" ${t.includes(e)?`checked`:``}/> ${pr(e)}</label>`).join(``)}</div>`}return e.type===`textarea`?`<textarea>${pr(n||``)}</textarea>`:`<input type="text" value="${pr(n||``)}" />`}function lr(e){let t={};return e&&e.querySelectorAll(`[data-question-id]`).forEach(e=>{let n=e.dataset.questionId;if(e.dataset.questionType===`checkbox_group`){let r=[...e.querySelectorAll(`input[type="checkbox"]:checked`)].map(e=>e.value);r.length&&(t[n]=r)}else{let r=(e.querySelector(`input,textarea`)?.value||``).trim();r&&(t[n]=r)}}),t}function ur(e){let t=e?.recipient_email?`<p class="qm-recipient">Sent to ${pr(e.recipient_email)}</p>`:``,n=e?.last_edited_tz?`<p class="qm-edited-marker">Last edited by ${pr(e.last_edited_by_email||`a team member`)} on ${pr(D(e.last_edited_tz))}</p>`:``,r=e?.client_edited_tz?`<p class="qm-edited-marker">Updated by the client on ${pr(D(e.client_edited_tz))}</p>`:``;return t+n+r}function dr(){if(mr)return;let e=document.createElement(`style`);e.id=`m5t-questionnaire-answer-styles`,e.textContent=`
    .qm-status { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB); margin-bottom: 16px; font-size: 0.85rem; }
    .qm-status .material-symbols-outlined { color: var(--color-primary-600, #0072BA); }
    .qm-status[data-status="SUBMITTED"] .material-symbols-outlined { color: var(--color-success, #009473); }
    .qm-status[data-status="CANCELLED"] .material-symbols-outlined { color: var(--color-danger, #DD4124); }
    .qm-status[data-status="LOCKED"] { background: var(--color-surface-2, #EAF0F7); }
    .qm-status[data-status="LOCKED"] .material-symbols-outlined { color: var(--color-text-muted, #4A5A78); }
    .qm-recipient { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin: -8px 0 16px; }
    .qm-edited-marker { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: -8px 0 16px; }
    .qm-section { margin-bottom: 18px; }
    .qm-section h3 { font-size: 0.92rem; font-weight: 600; margin: 0 0 10px; padding-bottom: 6px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .qm-qa { margin-bottom: 10px; }
    .qm-qa__q { font-size: 0.78rem; font-weight: 600; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 3px; }
    .qm-qa__a { font-size: 0.9rem; white-space: pre-wrap; }
    .qm-qa__a.qm-qa__a--empty, .qm-qa__a .qm-qa__a--empty { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .qm-qa__a input[type="text"], .qm-qa__a textarea {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.88rem; padding: 8px 10px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 8px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .qm-qa__a textarea { min-height: 60px; resize: vertical; }
    .qm-qa__a .qm-checkbox-group { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 0.85rem; }
    .qm-qa__a .qm-checkbox-group label { display: flex; align-items: center; gap: 5px; }
  `,document.head.appendChild(e),mr=!0}var fr,pr,mr,hr=o((()=>{fr={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},pr=e=>String(e??``).replace(/[&<>"']/g,e=>fr[e]),mr=!1})),gr,_r=o((()=>{gr=``+new URL(`auth-hero-sketch.jpg`,import.meta.url).href})),vr=c({default:()=>Mr,init:()=>Tr,render:()=>wr});function yr(){if(jr)return;let e=document.createElement(`style`);e.id=`m5t-questionnaire-fill-styles`,e.textContent=`
    .qf-page {
      min-height: 100%;   /* the scroll pane, not the viewport */ padding: 32px 20px 64px; position: relative;
      /* The auth panel's brand-blue field, one step lighter (500/700/800 vs
         the panel's 600/800/900) so the white card leads. */
      background:
        radial-gradient(120% 120% at 80% 10%, rgba(34, 160, 255, 0.30) 0%, transparent 55%),
        linear-gradient(160deg, var(--color-primary-500, #0088DD) 0%, var(--color-primary-700, #00558D) 70%, var(--color-primary-800, #003961) 100%);
      color: var(--color-text, #0B1220);
      color-scheme: light; font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    /* The marketing hero sketch over the blue field - same multiply treatment
       as the auth panel (white ground sinks, linework survives as darker
       blue), a touch quieter here. fixed = holds still while the form scrolls. */
    .qf-page::before {
      content: ""; position: fixed; inset: 0; z-index: 0;
      background: url("${gr}") center / cover no-repeat;
      mix-blend-mode: multiply;
      opacity: 0.24; pointer-events: none;
    }
    .qf-card {
      width: min(680px, 100%); margin: 0 auto; background: var(--color-bg, #fff);
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); padding: 36px 32px;
      position: relative; z-index: 1;
    }
    .qf-card h1 { font-family: var(--font-display, inherit); font-size: 1.5rem; font-weight: 600; margin: 0 0 6px; color: var(--color-primary-600, #0072BA); }
    .qf-card .qf-sub { font-size: 0.9rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 28px; }
    .qf-brand { height: 38px; width: auto; display: block; margin: 0 0 18px; }
    .qf-help { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); margin: -2px 0 6px; }
    .qf-section { margin-bottom: 28px; }
    .qf-section h2 { font-size: 1.05rem; font-weight: 600; margin: 0 0 14px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .qf-field { margin-bottom: 18px; }
    .qf-field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px; }
    .qf-field input[type="text"], .qf-field textarea {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.92rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px);
      background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .qf-field textarea { min-height: 76px; resize: vertical; }
    .qf-field input:focus, .qf-field textarea:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .qf-checkbox-group { display: flex; flex-wrap: wrap; gap: 10px 20px; }
    .qf-checkbox-row { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; }
    .qf-btn {
      width: 100%; appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px; border-radius: var(--radius-md, 10px); background: var(--color-primary-600, #0072BA); color: #fff; margin-top: 8px;
    }
    .qf-btn:hover { background: var(--color-primary-700, #00558D); }
    .qf-btn[disabled] { opacity: 0.6; cursor: default; }
    .qf-msg { font-size: 0.85rem; margin: 14px 0 0; min-height: 1em; }
    .qf-msg.error { color: var(--color-danger, #DD4124); }
    .qf-msg.ok { color: var(--color-success, #009473); }
    .qf-state { text-align: center; padding: 20px 0; }
    .qf-state .material-symbols-outlined { font-size: 2.4rem; color: var(--color-primary-600, #0072BA); }
    /* ── stepper chrome ── */
    .qf-progress { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 18px; }
    .qf-progress-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }
    .qf-dots { display: flex; gap: 8px; }
    .qf-dot {
      appearance: none; border: 0; cursor: pointer; padding: 0;
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--color-border, #D4DCE8); transition: background .15s ease, transform .15s ease;
    }
    .qf-dot[aria-current="step"] { background: var(--color-primary-600, #0072BA); transform: scale(1.25); }
    .qf-dot:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.25)); }
    .qf-section[hidden] { display: none; }
    .qf-section { margin-bottom: 8px; }
    .qf-section.qf-enter { animation: qfSlideIn .18s ease; }
    @keyframes qfSlideIn { from { opacity: 0; transform: translateX(var(--qf-dx, 14px)); } }
    html.ff-no-animations .qf-section.qf-enter { animation: none; }
    @media (prefers-reduced-motion: reduce) { .qf-section.qf-enter { animation: none; } }
    .qf-nav { display: flex; align-items: center; gap: 10px; margin-top: 20px; }
    .qf-nav .qf-btn { margin-top: 0; }
    .qf-btn--ghost {
      appearance: none; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px 18px; border-radius: var(--radius-md, 10px);
      border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
      display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;
    }
    .qf-btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .qf-btn--ghost .material-symbols-outlined, .qf-btn .material-symbols-outlined { font-size: 1.1rem; }
    /* ── return-visit chrome (edit + locked states) ── */
    .qf-note {
      display: flex; align-items: flex-start; gap: 8px; padding: 11px 13px; margin: 0 0 20px;
      border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB);
      font-size: 0.85rem; line-height: 1.45; color: var(--color-text, #0B1220);
    }
    .qf-note .material-symbols-outlined { font-size: 1.15rem; flex: 0 0 auto; color: var(--color-primary-600, #0072BA); }
    .qf-note--locked .material-symbols-outlined { color: var(--color-text-muted, #4A5A78); }
    .qf-note--done { background: var(--color-success-soft, #E6F5F1); }
    .qf-note--done .material-symbols-outlined { color: var(--color-success, #009473); }
  `,document.head.appendChild(e),dr(),jr=!0}function br(){return C.getConfig?.().BASE_URL||``}function xr(e){let t=`qf-${e.id}`;if(e.type===`checkbox_group`){let n=Array.isArray(e.options)?e.options:[];return`
      <div class="qf-field" data-question-id="${e.id}" data-question-type="checkbox_group">
        <label>${Sr(e.label)}</label>
        ${e.help?`<p class="qf-help">${Sr(e.help)}</p>`:``}
        <div class="qf-checkbox-group">
          ${n.map((e,n)=>`
            <label class="qf-checkbox-row">
              <input type="checkbox" id="${t}-${n}" value="${Sr(e)}" />
              ${Sr(e)}
            </label>`).join(``)}
        </div>
      </div>`}return e.type===`textarea`?`
      <div class="qf-field" data-question-id="${e.id}" data-question-type="textarea">
        <label for="${t}">${Sr(e.label)}</label>
        ${e.help?`<p class="qf-help">${Sr(e.help)}</p>`:``}
        <textarea id="${t}"></textarea>
      </div>`:`
    <div class="qf-field" data-question-id="${e.id}" data-question-type="text">
      <label for="${t}">${Sr(e.label)}</label>
      ${e.help?`<p class="qf-help">${Sr(e.help)}</p>`:``}
      <input type="text" id="${t}" />
    </div>`}function Sr(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function Cr(e,t,n){return`
    <div class="qf-page"><div class="qf-card"><div class="qf-state">
      <span class="material-symbols-outlined">${e}</span>
      <h1>${Sr(t)}</h1>
      <p class="qf-sub">${Sr(n)}</p>
    </div></div></div>`}function wr(){return yr(),`<div id="qf-root">${Cr(`hourglass_top`,`Loading your questionnaire…`,`One moment.`)}</div>`}async function Tr(){let e=document.getElementById(`qf-root`);if(!e)return;let t=he();if(!t){e.innerHTML=Cr(`error`,`Invalid link`,`This link is missing required information. Please use the link exactly as sent.`);return}let n;try{let r=await fetch(`${br()}/m5t/v5/m5mQuestionnaireResponse/public/${encodeURIComponent(t.guid)}?token=${encodeURIComponent(t.token)}`),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok){e.innerHTML=Cr(`error`,`Cannot open this questionnaire`,r.status===404?i.error||`This link is invalid or has expired.`:`Something went wrong loading your questionnaire. Please try again shortly.`);return}n=i.data}catch(t){console.error(`[questionnaire-fill] load error:`,t),e.innerHTML=Cr(`wifi_off`,`Connection problem`,`Could not reach the server. Please check your connection and try again.`);return}let r=Er(n);if(r===`locked`){Or(e,n);return}kr(e,n,t,r)}function Er(e){return e.status===`SUBMITTED`?(e.editability||{editable:!e.locked_tz}).editable?`edit`:`locked`:`fill`}function Dr(e){let t=e.editability||{};return t.reason===`finalized`?`Your account manager has finalised these answers, so they can no longer be changed here.`:`Answers can be changed for 14 days after they are submitted.${t.deadline?` The window closed on ${D(t.deadline)}.`:``}`}function Or(e,t){e.innerHTML=`
    <div class="qf-page"><div class="qf-card">
      <img class="qf-brand" src="${ir}" alt="Mach Five Marketing" height="34" />
      <h1>${Sr(t.questionnaire?.name||`Kickoff Questionnaire`)}</h1>
      <p class="qf-sub">${t.submitted_tz?`Submitted ${Sr(D(t.submitted_tz))}.`:`Submitted.`} Here is what you sent.</p>
      <div class="qf-note qf-note--locked">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        <span>${Sr(Dr(t))} To change anything now, contact your account manager.</span>
      </div>
      ${ur(t)}
      ${sr(t,{emptyLabel:`Left blank`})}
    </div></div>`}function kr(e,t,n,r){let i=r===`edit`,a=t.questionnaire?.sections||[],o=t.answers||{},s=t.editability?.deadline,c=i?`Change anything you need to, then save. Everything you sent before is already filled in.`:`Answer what applies. If a question doesn't apply to your business, leave it blank.`,l=i?`<div class="qf-note">
         <span class="material-symbols-outlined" aria-hidden="true">edit_note</span>
         <span>You already submitted this${t.submitted_tz?` on ${Sr(D(t.submitted_tz))}`:``}.${s?` You can make changes until <strong>${Sr(D(s))}</strong>.`:``}</span>
       </div>`:``;e.innerHTML=`
    <div class="qf-page"><div class="qf-card">
      <img class="qf-brand" src="${ir}" alt="Mach Five Marketing" height="34" />
      <h1>${Sr(t.questionnaire?.name||`Kickoff Questionnaire`)}</h1>
      <p class="qf-sub">${Sr(c)}</p>
      ${l}
      <div class="qf-progress">
        <span class="qf-progress-label" id="qf-progress-label"></span>
        <div class="qf-dots" role="group" aria-label="Sections">
          ${a.map((e,t)=>`<button type="button" class="qf-dot" data-step="${t}" aria-label="${Sr(e.title)}"></button>`).join(``)}
        </div>
      </div>
      <form id="qf-form" novalidate>
        ${a.map((e,t)=>`
          <div class="qf-section" data-step="${t}" hidden>
            <h2>${Sr(e.title)}</h2>
            ${(e.questions||[]).map(xr).join(``)}
          </div>`).join(``)}
        <div class="qf-nav">
          <button class="qf-btn--ghost" type="button" id="qf-back"><span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>Back</button>
          <button class="qf-btn" type="button" id="qf-next">Next<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
          <button class="qf-btn" type="submit" id="qf-submit">${i?`Save changes`:`Submit questionnaire`}</button>
        </div>
        <p class="qf-msg" id="qf-msg" role="status"></p>
      </form>
    </div></div>`;let u=[...e.querySelectorAll(`.qf-section[data-step]`)],d=[...e.querySelectorAll(`.qf-dot`)],f=document.getElementById(`qf-back`),p=document.getElementById(`qf-next`),m=document.getElementById(`qf-submit`),h=document.getElementById(`qf-progress-label`),g=0;function _(t,n=1){g=Math.max(0,Math.min(a.length-1,t)),u.forEach((e,t)=>{e.hidden=t!==g,e.classList.remove(`qf-enter`)});let r=u[g];r&&(r.style.setProperty(`--qf-dx`,`${n>=0?14:-14}px`),r.offsetWidth,r.classList.add(`qf-enter`)),d.forEach((e,t)=>{t===g?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}),h&&(h.textContent=`Section ${g+1} of ${a.length}`),f.style.visibility=g===0?`hidden`:``,p.style.display=g===a.length-1?`none`:``,m.style.display=g===a.length-1?``:`none`,e.querySelector(`.qf-card`)?.scrollIntoView({block:`start`})}f.addEventListener(`click`,()=>_(g-1,-1)),p.addEventListener(`click`,()=>_(g+1,1)),d.forEach(e=>e.addEventListener(`click`,()=>{let t=Number(e.dataset.step)||0;_(t,t>=g?1:-1)})),_(0),e.querySelectorAll(`[data-question-id]`).forEach(e=>{let t=e.dataset.questionId,n=e.dataset.questionType,r=o[t];if(r!=null){if(n===`checkbox_group`){let t=Array.isArray(r)?r:[];e.querySelectorAll(`input[type="checkbox"]`).forEach(e=>{e.checked=t.includes(e.value)})}else{let t=e.querySelector(`input,textarea`);t&&(t.value=r)}}});let v=document.getElementById(`qf-form`),y=document.getElementById(`qf-submit`),ee=document.getElementById(`qf-msg`),b=(e,t=`error`)=>{ee.textContent=e,ee.className=`qf-msg ${t}`};v.addEventListener(`submit`,async t=>{t.preventDefault();let r=lr(e),a=`${br()}/m5t/v5/m5mQuestionnaireResponse/public/${encodeURIComponent(n.guid)}`,o=i?`${a}?token=${encodeURIComponent(n.token)}`:`${a}/submit?token=${encodeURIComponent(n.token)}`;y.disabled=!0,b(i?`Saving…`:`Submitting…`,`ok`);let s;try{s=await fetch(o,{method:i?`PUT`:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({answers:r})});let t=await s.json().catch(()=>({}));if(!s.ok||!t.ok){if(s.status===423){b(t.error||`These answers are now locked.`,`error`),await Tr();return}let e=s.status===409?i?`This questionnaire is not open for changes.`:`This questionnaire has already been submitted.`:s.status===404?`This link is invalid or has expired.`:t.error||`Could not ${i?`save`:`submit`} (HTTP ${s.status}).`;b(e),y.disabled=!1;return}Ar(e,i,t.data?.editability?.deadline)}catch(e){console.error(`[questionnaire-fill] ${i?`edit`:`submit`} error:`,e),b(`Something went wrong. Please try again.`),y.disabled=!1}})}function Ar(e,t,n){let r=n?` until ${D(n)}`:``;e.innerHTML=`
    <div class="qf-page"><div class="qf-card"><div class="qf-state">
      <span class="material-symbols-outlined">check_circle</span>
      <h1>${t?`Changes saved`:`Thank you!`}</h1>
      <p class="qf-sub">${t?`Your account manager will see the updated answers.`:`Your answers have been submitted. Your account manager will be in touch.`}</p>
      <div class="qf-note qf-note--done">
        <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
        <span>Need to change something? This same link keeps working${Sr(r)}. Keep the email we sent you and open it again any time before then.</span>
      </div>
      <button class="qf-btn" type="button" id="qf-again">Make another change</button>
    </div></div></div>`,document.getElementById(`qf-again`)?.addEventListener(`click`,()=>{Tr()})}var jr,Mr,Nr=o((()=>{w(),ge(),ar(),hr(),_r(),jr=!1,Mr={render:wr,init:Tr}}));function Pr(e){return e&&typeof e.repeat==`string`&&e.repeat?e.repeat:null}function Fr(e){let t=Pr(e);return t?(e.questions||[]).filter(e=>e.group===`${t}1`):[]}function Ir(e,t,n){return(e||[]).map(e=>({...e,id:e.id.replace(`_${t}1_`,`_${t}${n}_`),group:`${t}${n}`,label:String(e.label||``).replace(/\b1\b/,String(n))}))}function Lr(e,t){return RegExp(`^${Br(e).replace(`_${t}1_`,`_${t}(\\d+)_`)}$`)}function Rr(e,...t){let n=Pr(e);if(!n)return 0;let r=Fr(e).filter(e=>e.id&&e.id.includes(`_${n}1_`)).map(e=>Lr(e.id,n)),i=1;for(let e of t)for(let t of Object.keys(e||{}))for(let e of r){let n=t.match(e);n&&(i=Math.max(i,parseInt(n[1],10)))}return Math.min(i,Vr)}function zr(e,...t){return(Array.isArray(e)?e:[]).map(e=>{let n=Pr(e);if(!n)return e;let r=Fr(e);if(!r.length)return e;let i=(e.questions||[]).filter(e=>e.group!==`${n}1`),a=Rr(e,...t),o=[];for(let e=1;e<=a;e++)o.push(...Ir(r,n,e));return{...e,questions:[...o,...i]}})}var Br,Vr,Hr=o((()=>{Br=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),Vr=200})),Ur=c({default:()=>si,init:()=>$r,render:()=>Qr});function Wr(){if(ai)return;let e=document.createElement(`style`);e.id=`m5t-deliverable-fill-styles`,e.textContent=`
    .dlf-page {
      /* FORCED-LIGHT SURFACE: this is a client-facing document, not an app
         screen. The app's theme tokens can be dark-remapped, which made every
         var()-colored heading render pale gray on the white card whenever the
         viewer's OS was in dark mode (reported twice before the cause was
         found). Pin the light palette locally so no theme touches it. */
      --color-text: #0B1220; --color-text-muted: #4A5A78; --color-text-subtle: #6C7C9A;
      --color-border: #D4DCE8; --color-bg: #fff; --color-surface: #F4F7FB; --color-surface-2: #EAF0F7;
      --color-primary-500: #0088DD; --color-primary-600: #0072BA; --color-primary-700: #00558D; --color-primary-800: #003961;
      --color-danger: #DD4124; --color-success: #009473; --color-success-soft: #E6F5F1;
      --color-accent-soft: rgba(0,114,186,0.15);
      min-height: 100%;   /* the scroll pane, not the viewport */ padding: 32px 20px 64px; position: relative;
      /* Same brand-blue field as the questionnaire fill page (auth panel one
         step lighter), so every emailed-link surface reads as one family. */
      background:
        radial-gradient(120% 120% at 80% 10%, rgba(34, 160, 255, 0.30) 0%, transparent 55%),
        linear-gradient(160deg, var(--color-primary-500, #0088DD) 0%, var(--color-primary-700, #00558D) 70%, var(--color-primary-800, #003961) 100%);
      color: var(--color-text, #0B1220);
      color-scheme: light; font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .dlf-page::before {
      content: ""; position: fixed; inset: 0; z-index: 0;
      background: url("${gr}") center / cover no-repeat;
      mix-blend-mode: multiply;
      opacity: 0.24; pointer-events: none;
    }
    .dlf-card {
      width: min(720px, 100%); margin: 0 auto; background: var(--color-bg, #fff);
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); padding: 36px 32px;
      position: relative; z-index: 1;
    }
    .dlf-card h1 { font-family: var(--font-display, inherit); font-size: 1.5rem; font-weight: 600; margin: 0 0 6px; color: var(--color-primary-600, #0072BA); }
    .dlf-card .dlf-sub { font-size: 0.9rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 28px; }
    .dlf-brand { height: 38px; width: auto; display: block; margin: 0 0 18px; }
    .dlf-section { margin-bottom: 8px; }
    .dlf-section[hidden] { display: none; }
    /* Branded blue, per owner ruling: section titles are never gray. */
    .dlf-section h2 { font-size: 1.05rem; font-weight: 600; margin: 0 0 10px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border, #D4DCE8); color: var(--color-primary-700, #00558D); }
    .dlf-intro { font-size: 0.85rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 16px; }
    /* The authored plan content — the document the client is approving. A
       tinted panel keeps "their plan" visually distinct from "your review". */
    .dlf-plan { background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 14px 16px; margin: 0 0 18px; }
    .dlf-plan__item { margin-bottom: 12px; }
    .dlf-plan__item:last-child { margin-bottom: 0; }
    /* Full ink, not gray: these are the headlines over every plan value and
       gray-on-white failed readability twice (owner). */
    .dlf-plan__label { font-size: 0.78rem; font-weight: 700; color: var(--color-text, #0B1220); margin-bottom: 2px; }
    .dlf-plan__value { font-size: 0.92rem; white-space: pre-wrap; }
    .dlf-plan__empty { font-size: 0.85rem; color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .dlf-help { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); margin: -2px 0 6px; }
    .dlf-field { margin-bottom: 18px; }
    .dlf-field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px; }
    .dlf-field input[type="text"], .dlf-field textarea {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.92rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px);
      background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .dlf-field textarea { min-height: 76px; resize: vertical; }
    .dlf-field input:focus, .dlf-field textarea:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .dlf-checkbox-group { display: flex; flex-wrap: wrap; gap: 10px 20px; }
    .dlf-checkbox-row { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; }
    /* Gated review fields: visible but inert until the section's decision
       ("I have edits") unlocks them, or while edits gray out the sign-off. */
    .dlf-field.dlf-gated { opacity: 0.45; }
    .dlf-field.dlf-gated input, .dlf-field.dlf-gated textarea { background: var(--color-surface, #F4F7FB); cursor: not-allowed; }
    .dlf-btn {
      width: 100%; appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px; border-radius: var(--radius-md, 10px); background: var(--color-primary-600, #0072BA); color: #fff; margin-top: 8px;
    }
    .dlf-btn:hover { background: var(--color-primary-700, #00558D); }
    .dlf-btn[disabled] { opacity: 0.6; cursor: default; }
    .dlf-btn--ghost {
      appearance: none; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px 18px; border-radius: var(--radius-md, 10px);
      border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
      display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;
    }
    .dlf-btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .dlf-btn--ghost .material-symbols-outlined, .dlf-btn .material-symbols-outlined { font-size: 1.1rem; }
    .dlf-msg { font-size: 0.85rem; margin: 14px 0 0; min-height: 1em; }
    .dlf-msg.error { color: var(--color-danger, #DD4124); }
    .dlf-msg.ok { color: var(--color-success, #009473); }
    .dlf-state { text-align: center; padding: 20px 0; }
    .dlf-state .material-symbols-outlined { font-size: 2.4rem; color: var(--color-primary-600, #0072BA); }
    /* ── stepper chrome — same roller as the questionnaire fill page ── */
    .dlf-progress { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 18px; }
    .dlf-progress-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-primary-700, #00558D); }
    /* Locked/read-only labels inherit the shared gray — override to ink here. */
    .dlf-page .qm-qa__q { color: var(--color-text, #0B1220); }
    .dlf-dots { display: flex; gap: 8px; }
    .dlf-dot {
      appearance: none; border: 0; cursor: pointer; padding: 0;
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--color-border, #D4DCE8); transition: background .15s ease, transform .15s ease;
    }
    .dlf-dot[aria-current="step"] { background: var(--color-primary-600, #0072BA); transform: scale(1.25); }
    .dlf-dot:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.25)); }
    .dlf-section.dlf-enter { animation: dlfSlideIn .18s ease; }
    @keyframes dlfSlideIn { from { opacity: 0; transform: translateX(var(--dlf-dx, 14px)); } }
    html.ff-no-animations .dlf-section.dlf-enter { animation: none; }
    @media (prefers-reduced-motion: reduce) { .dlf-section.dlf-enter { animation: none; } }
    .dlf-nav { display: flex; align-items: center; gap: 10px; margin-top: 20px; }
    .dlf-nav .dlf-btn { margin-top: 0; }
    /* ── return-visit chrome (edit + locked states) ── */
    .dlf-note {
      display: flex; align-items: flex-start; gap: 8px; padding: 11px 13px; margin: 0 0 20px;
      border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB);
      font-size: 0.85rem; line-height: 1.45; color: var(--color-text, #0B1220);
    }
    /* display:flex above beats the UA's [hidden] rule — restate it, or the
       edits explainer shows with no edits selected (shipped exactly that). */
    .dlf-note[hidden] { display: none; }
    .dlf-note .material-symbols-outlined { font-size: 1.15rem; flex: 0 0 auto; color: var(--color-primary-600, #0072BA); }
    .dlf-note--locked .material-symbols-outlined { color: var(--color-text-muted, #4A5A78); }
    .dlf-note--done { background: var(--color-success-soft, #E6F5F1); }
    .dlf-note--done .material-symbols-outlined { color: var(--color-success, #009473); }
  `,document.head.appendChild(e),dr(),ai=!0}function Gr(){return C.getConfig?.().BASE_URL||``}function O(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function Kr(e,t){let n=t?.[e.id];return Array.isArray(n)?n.length>0:!!(n&&String(n).trim())}function qr(e,t){let n=(e.questions||[]).filter(e=>oi(e)&&Kr(e,t));return n.length?`<div class="dlf-plan">${n.map(e=>`
    <div class="dlf-plan__item">
      <div class="dlf-plan__label">${O(e.label)}</div>
      <div class="dlf-plan__value">${or(e,t)}</div>
    </div>`).join(``)}</div>`:``}function Jr(e){let t=`dlf-${e.id}`;if(e.type===`checkbox_group`){let n=Array.isArray(e.options)?e.options:[];return`
      <div class="dlf-field" data-question-id="${e.id}" data-question-type="checkbox_group">
        <label>${O(e.label)}</label>
        ${e.help?`<p class="dlf-help">${O(e.help)}</p>`:``}
        <div class="dlf-checkbox-group">
          ${n.map((e,n)=>`
            <label class="dlf-checkbox-row">
              <input type="checkbox" id="${t}-${n}" value="${O(e)}" />
              ${O(e)}
            </label>`).join(``)}
        </div>
      </div>`}return e.type===`textarea`?`
      <div class="dlf-field" data-question-id="${e.id}" data-question-type="textarea">
        <label for="${t}">${O(e.label)}</label>
        ${e.help?`<p class="dlf-help">${O(e.help)}</p>`:``}
        <textarea id="${t}"></textarea>
      </div>`:`
    <div class="dlf-field" data-question-id="${e.id}" data-question-type="text">
      <label for="${t}">${O(e.label)}</label>
      ${e.help?`<p class="dlf-help">${O(e.help)}</p>`:``}
      <input type="text" id="${t}" />
    </div>`}function Yr(e,t){return`
    <div class="qm-qa">
      <div class="qm-qa__q">${O(e.label)}</div>
      <div class="qm-qa__a">${or(e,t)||`<span class="qm-qa__a--empty">Left blank</span>`}</div>
    </div>`}function Xr(e,t,{readOnly:n=!1,answers:r={}}={}){let i=(e.questions||[]).filter(e=>!oi(e)),a=qr(e,t),o=i.map(e=>n?Yr(e,r):Jr(e)).join(``);return`
    ${e.intro?`<p class="dlf-intro">${O(e.intro)}</p>`:``}
    ${a}
    ${o}`}function Zr(e,t,n){return`
    <div class="dlf-page"><div class="dlf-card"><div class="dlf-state">
      <span class="material-symbols-outlined">${e}</span>
      <h1>${O(t)}</h1>
      <p class="dlf-sub">${O(n)}</p>
    </div></div></div>`}function Qr(){return Wr(),`<div id="dlf-root">${Zr(`hourglass_top`,`Loading your plan…`,`One moment.`)}</div>`}async function $r(){let e=document.getElementById(`dlf-root`);if(!e)return;let t=ve();if(!t){e.innerHTML=Zr(`error`,`Invalid link`,`This link is missing required information. Please use the link exactly as sent.`);return}let n;try{let r=await fetch(`${Gr()}/m5t/v5/m5mDeliverable/public/${encodeURIComponent(t.guid)}?token=${encodeURIComponent(t.token)}`),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok){e.innerHTML=Zr(`error`,`Cannot open this plan`,r.status===404?i.error||`This link is invalid or has expired.`:`Something went wrong loading your plan. Please try again shortly.`);return}n=i.data}catch(t){console.error(`[deliverable-fill] load error:`,t),e.innerHTML=Zr(`wifi_off`,`Connection problem`,`Could not reach the server. Please check your connection and try again.`);return}let r=ei(n);if(r===`locked`){ni(e,n);return}ri(e,n,t,r)}function ei(e){return e.status===`SUBMITTED`?(e.editability||{editable:!e.locked_tz}).editable?`edit`:`locked`:`fill`}function ti(e){let t=e.editability||{};return t.reason===`finalized`?`Your account manager has finalised this plan, so the review can no longer be changed here.`:`A review can be changed for 14 days after it is submitted.${t.deadline?` The window closed on ${D(t.deadline)}.`:``}`}function ni(e,t){let n=zr(t.template?.sections||[],t.content,t.answers);e.innerHTML=`
    <div class="dlf-page"><div class="dlf-card">
      <img class="dlf-brand" src="${ir}" alt="Mach Five Marketing" height="34" />
      <h1>${O(t.template?.name||`Your Plan`)}</h1>
      <p class="dlf-sub">${t.submitted_tz?`Submitted ${O(D(t.submitted_tz))}.`:`Submitted.`} Here is the plan and your review.</p>
      <div class="dlf-note dlf-note--locked">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        <span>${O(ti(t))} To change anything now, contact your account manager.</span>
      </div>
      ${n.map(e=>`
        <div class="dlf-section">
          <h2>${O(e.title)}</h2>
          ${Xr(e,t.content||{},{readOnly:!0,answers:t.answers||{}})}
        </div>`).join(``)}
    </div></div>`}function ri(e,t,n,r){let i=r===`edit`,a=zr(t.template?.sections||[],t.content,t.answers),o=t.answers||{},s=t.content||{},c=t.editability?.deadline,l=i?`Change anything you need to, then save. Everything you sent before is already filled in.`:`Review each section and mark it Approved, or note what you want changed.`,u=i?`<div class="dlf-note">
         <span class="material-symbols-outlined" aria-hidden="true">edit_note</span>
         <span>You already submitted this${t.submitted_tz?` on ${O(D(t.submitted_tz))}`:``}.${c?` You can make changes until <strong>${O(D(c))}</strong>.`:``}</span>
       </div>`:``;e.innerHTML=`
    <div class="dlf-page"><div class="dlf-card">
      <img class="dlf-brand" src="${ir}" alt="Mach Five Marketing" height="34" />
      <h1>${O(t.template?.name||`Your Plan`)}</h1>
      <p class="dlf-sub">${O(l)}</p>
      ${u}
      <div class="dlf-progress">
        <span class="dlf-progress-label" id="dlf-progress-label"></span>
        <div class="dlf-dots" role="group" aria-label="Sections">
          ${a.map((e,t)=>`<button type="button" class="dlf-dot" data-step="${t}" aria-label="${O(e.title)}"></button>`).join(``)}
        </div>
      </div>
      <form id="dlf-form" novalidate>
        ${a.map((e,t)=>`
          <div class="dlf-section" data-step="${t}" hidden>
            <h2>${O(e.title)}</h2>
            ${Xr(e,s)}
          </div>`).join(``)}
        <div class="dlf-nav">
          <button class="dlf-btn--ghost" type="button" id="dlf-back"><span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>Back</button>
          <button class="dlf-btn" type="button" id="dlf-next">Next<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
          <button class="dlf-btn" type="submit" id="dlf-submit">${i?`Save changes`:`Submit review`}</button>
        </div>
        <p class="dlf-msg" id="dlf-msg" role="status"></p>
      </form>
    </div></div>`;let d=[...e.querySelectorAll(`.dlf-section[data-step]`)],f=[...e.querySelectorAll(`.dlf-dot`)],p=document.getElementById(`dlf-back`),m=document.getElementById(`dlf-next`),h=document.getElementById(`dlf-submit`),g=document.getElementById(`dlf-progress-label`),_=0;function v(t,n=1){_=Math.max(0,Math.min(a.length-1,t)),d.forEach((e,t)=>{e.hidden=t!==_,e.classList.remove(`dlf-enter`)});let r=d[_];r&&(r.style.setProperty(`--dlf-dx`,`${n>=0?14:-14}px`),r.offsetWidth,r.classList.add(`dlf-enter`)),f.forEach((e,t)=>{t===_?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}),g&&(g.textContent=`Section ${_+1} of ${a.length}`),p.style.visibility=_===0?`hidden`:``,m.style.display=_===a.length-1?`none`:``,h&&(h.style.display=_===a.length-1?``:`none`),e.querySelector(`.dlf-card`)?.scrollIntoView({block:`start`})}p.addEventListener(`click`,()=>v(_-1,-1)),m.addEventListener(`click`,()=>v(_+1,1)),f.forEach(e=>e.addEventListener(`click`,()=>{let t=Number(e.dataset.step)||0;v(t,t>=_?1:-1)})),v(0),e.querySelectorAll(`[data-question-id]`).forEach(e=>{let t=e.dataset.questionId,n=e.dataset.questionType,r=o[t];if(r!=null){if(n===`checkbox_group`){let t=Array.isArray(r)?r:[];e.querySelectorAll(`input[type="checkbox"]`).forEach(e=>{e.checked=t.includes(e.value)})}else{let t=e.querySelector(`input,textarea`);t&&(t.value=r)}}});let y=`I have edits`,ee=[...e.querySelectorAll(`.dlf-field[data-question-type="checkbox_group"]`)].filter(e=>{let t=[...e.querySelectorAll(`input[type="checkbox"]`)].map(e=>e.value);return t.includes(`Approved`)&&t.includes(y)}),b=e.querySelector(`.dlf-field[data-question-id="cl_sign_approve"]`),te=()=>{let e=!1;if(ee.forEach(t=>{let n=t.closest(`.dlf-section`),r=[...t.querySelectorAll(`input:checked`)].map(e=>e.value).includes(y);r&&(e=!0),n?.querySelectorAll(`.dlf-field`).forEach(e=>{e!==t&&(e.classList.toggle(`dlf-gated`,!r),e.querySelectorAll(`input,textarea`).forEach(e=>{e.disabled=!r}))})}),b&&ee.length){b.classList.toggle(`dlf-gated`,e),b.querySelectorAll(`input`).forEach(t=>{t.disabled=e,e&&(t.checked=!1)});let t=b.closest(`.dlf-section`),n=t?.querySelector(`#dlf-edits-note`);!n&&t&&(n=document.createElement(`div`),n.id=`dlf-edits-note`,n.className=`dlf-note`,n.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">forward_to_inbox</span><span>You marked sections with edits, so approval is off for this round. Use <strong>Send back with edits</strong> below and your account manager will follow up with a revised plan.</span>`,t.insertBefore(n,t.querySelector(`.dlf-field`))),n&&(n.hidden=!e);let r=document.getElementById(`dlf-submit`);r&&(r.textContent=i?`Save changes`:e?`Send back with edits`:`Submit review`)}};ee.forEach(e=>{e.querySelectorAll(`input[type="checkbox"]`).forEach(t=>{t.addEventListener(`change`,()=>{t.checked&&e.querySelectorAll(`input[type="checkbox"]`).forEach(e=>{e!==t&&(e.checked=!1)}),te()})})}),ee.length&&te();let ne=document.getElementById(`dlf-form`),re=document.getElementById(`dlf-submit`),ie=document.getElementById(`dlf-msg`),ae=(e,t=`error`)=>{ie.textContent=e,ie.className=`dlf-msg ${t}`};ne.addEventListener(`submit`,async r=>{if(r.preventDefault(),ee.length){let e=ee.find(e=>!e.querySelector(`input:checked`));if(e){v(Number(e.closest(`.dlf-section`)?.dataset.step)||0),ae(`Mark each section Approved or I have edits.`);return}if(!ee.some(e=>[...e.querySelectorAll(`input:checked`)].some(e=>e.value===y))&&b&&!b.querySelector(`input:checked`)){v(a.length-1),ae(`To approve the plan, check I approve this plan.`);return}}let o=lr(e),s=`${Gr()}/m5t/v5/m5mDeliverable/public/${encodeURIComponent(n.guid)}`,c=i?`${s}?token=${encodeURIComponent(n.token)}`:`${s}/submit?token=${encodeURIComponent(n.token)}`;re.disabled=!0,ae(i?`Saving…`:`Submitting…`,`ok`);let l;try{l=await fetch(c,{method:i?`PUT`:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i?{answers:o}:{answers:o,content_fingerprint:t.content_fingerprint||``})});let n=await l.json().catch(()=>({}));if(!l.ok||!n.ok){if(l.status===423){ae(n.error||`This review is now locked.`,`error`),await $r();return}if(l.status===409&&n.reason===`content_changed`){await $r();let e=document.getElementById(`dlf-msg`);e&&(e.textContent=n.error||`This plan was updated after you opened it. Review the latest version and submit again.`,e.className=`dlf-msg error`);return}let e=l.status===409?i?`This plan is not open for changes.`:`This plan has already been submitted.`:l.status===404?`This link is invalid or has expired.`:n.error||`Could not ${i?`save`:`submit`} (HTTP ${l.status}).`;ae(e),re.disabled=!1;return}ii(e,i,n.data?.editability?.deadline)}catch(e){console.error(`[deliverable-fill] ${i?`edit`:`submit`} error:`,e),ae(`Something went wrong. Please try again.`),re.disabled=!1}})}function ii(e,t,n){let r=n?` until ${D(n)}`:``;e.innerHTML=`
    <div class="dlf-page"><div class="dlf-card"><div class="dlf-state">
      <span class="material-symbols-outlined">check_circle</span>
      <h1>${t?`Changes saved`:`Thank you`}</h1>
      <p class="dlf-sub">${t?`Your account manager will see the updated review.`:`Your review has been submitted. Your account manager will be in touch.`}</p>
      <div class="dlf-note dlf-note--done">
        <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
        <span>Need to change something? This same link keeps working${O(r)}. Keep the email we sent you and open it again any time before then.</span>
      </div>
      <button class="dlf-btn" type="button" id="dlf-again">Make another change</button>
    </div></div></div>`,document.getElementById(`dlf-again`)?.addEventListener(`click`,()=>{$r()})}var ai,oi,si,ci=o((()=>{w(),ye(),ar(),hr(),Hr(),_r(),ai=!1,oi=e=>e.audience===`am`,si={render:Qr,init:$r}})),li=c({init:()=>di,render:()=>ui});function ui(){return`
    <div class="auth-container splash">
      <div class="auth-left">
        <div class="splash-content">
          <h1 class="splash-mark"><img src="${rr}" alt="Mach Five Magnet" height="88" /></h1>
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
          ${tr()}
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
  `}function di(){console.log(`[SplashRoute] Initialized - checking authentication state in 3.6 seconds...`),setTimeout(()=>{let e=localStorage.getItem(v.FF_SSE_LS_TOKEN),t=localStorage.getItem(`mvv_ts`);console.log(`[SplashRoute] localStorage check:`,{hasMvvToken:!!e,hasMvvTs:!!t});let n=document.getElementById(`splash-loader`),r=document.getElementById(`splash-actions`);e?(console.log(`[SplashRoute] Auth token found → HOME`),fi.default.publish(p.ROUTE_NAV,{route:`home`})):t?(console.log(`[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN`),fi.default.publish(p.ROUTE_NAV,{route:`signin`})):(console.log(`[SplashRoute] New user (no session history) → Showing buttons`),n&&(n.style.display=`none`),r&&(r.style.display=`flex`),document.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-route`);console.log(`[SplashRoute] Button clicked - navigating to: ${t}`),fi.default.publish(p.ROUTE_NAV,{route:t})})}))},4e3)}var fi,pi=o((()=>{fi=u(f(),1),ar(),m(),y()}));function mi(e,t){typeof neodigmToast<`u`&&neodigmToast.q(t,`danger`),typeof neodigmUtils<`u`?neodigmUtils.shake(`#${e.id}`):(e.classList.add(`shake`),setTimeout(()=>e.classList.remove(`shake`),300)),e.focus()}function hi(e,t){return e?gi.test(e)?!0:(mi(t,T.get(`validation_email_invalid`)),!1):(mi(t,T.get(`validation_email_required`)),!1)}var gi,_i=o((()=>{Ht(),gi=/^[^\s@]+@[^\s@]+\.[^\s@]+$/})),vi=c({init:()=>bi,render:()=>yi});function yi(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${er()}
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

            <div class="form-consent">
              <input type="checkbox" id="rememberEmail" name="rememberEmail" />
              <label for="rememberEmail" data-meta-copywrite-i118n='{"token": "remember_email", "attribute": "textContent"}'>Remember my email</label>
            </div>

            <div class="form-footer">
              <a href="#/forgot" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>FORGOT PASSWORD</a>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</button>
          </form>

          <div class="auth-divider" id="passkeyDivider" style="display:none">OR</div>
          <button type="button" class="btn-outline" id="passkeySigninBtn" style="display:none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="8" cy="8" r="5"></circle>
              <path d="M11.5 11.5 21 21M17 15l3 3M14 18l2 2"></path>
            </svg>
            Sign in with a passkey
          </button>
          <p class="auth-hint" id="passkeyHint" style="display:none">Works best in Chrome, Edge, or Safari. On Firefox or Linux, you may need a physical security key.</p>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "dont_have_an_account", "attribute": "textContent"}'>START YOUR FREE ACCOUNT</span> &nbsp;  <a class="link-brand--uc__underline" href="#/signup" data-meta-copywrite-i118n='{"token": "sign_up", "attribute": "textContent"}'>SIGN UP</a>
          </p>

          <p class="auth-legal">
            <a href="https://machfivemagnet.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="https://machfivemagnet.com/terms/" target="_blank" rel="noopener noreferrer">Terms</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          ${tr()}
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
  `}function bi(){console.log(`[SigninRoute] Initialized`);let e=document.getElementById(`loginForm`),t=document.getElementById(`email`),n=document.getElementById(`password`),r=document.getElementById(`togglePassword`),i=document.getElementById(`rememberEmail`),a=localStorage.getItem(C.CONFIG.LS_KEYS.REMEMBERED_EMAIL);a&&t&&i&&(t.value=a,i.checked=!0,n?.focus()),r?.addEventListener(`click`,()=>{let e=n.type===`password`?`text`:`password`;n.type=e});let o=document.getElementById(`passkeySigninBtn`),s=document.getElementById(`passkeyDivider`),c=document.getElementById(`passkeyHint`);window.PublicKeyCredential&&o&&s&&(o.style.display=``,s.style.display=``,c&&(o.title=c.textContent),o.addEventListener(`click`,()=>Ci())),e?.addEventListener(`submit`,async e=>{e.preventDefault();let r=t.value.trim(),a=n.value;hi(r,t)&&xi(a,n)&&(i?.checked?localStorage.setItem(C.CONFIG.LS_KEYS.REMEMBERED_EMAIL,r):localStorage.removeItem(C.CONFIG.LS_KEYS.REMEMBERED_EMAIL),await Si(r,a))}),document.getElementById(`link--uc__underline`)?.addEventListener(`click`,e=>{e.preventDefault(),wi.default.publish(p.AUTH_FORGOT)}),document.querySelector(`.auth-switch a[href="#/signup"]`)?.addEventListener(`click`,e=>{e.preventDefault(),console.log(`[SigninRoute] Sign up link clicked - navigating to signup`),wi.default.publish(p.ROUTE_NAV,{route:`signup`})})}function xi(e,t){return e?e.length<10?(mi(t,T.get(`validation_password_min_length`)),!1):!0:(mi(t,T.get(`validation_password_required`)),!1)}async function Si(e,t){let n=document.querySelector(`.btn`);n.disabled=!0,n.textContent=T.get(`loading_signing_in`);try{let r=await C.doSignin(e,t);r.ok?(console.log(`[SigninRoute] Signin successful`),typeof neodigmToast<`u`&&neodigmToast.q(T.get(`success_welcome_back`),`success`),wi.default.publish(p.AUTH_SIGNIN_SUCCESS,{entity:C.getEntity()})):r.resetRequired?(console.log(`[SigninRoute] Password reset required`),typeof neodigmToast<`u`&&neodigmToast.q(T.get(`error_password_reset_required`),`warning`)):(typeof neodigmToast<`u`&&neodigmToast.q(r.error||T.get(`error_signin_failed`),`danger`),n.disabled=!1,n.textContent=(T.get(`sign_in`)||`Sign in`).toUpperCase())}catch(e){console.error(`[SigninRoute] Sign in error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||T.get(`error_network`),`danger`),n.disabled=!1,n.textContent=(T.get(`sign_in`)||`Sign in`).toUpperCase(),wi.default.publish(p.AUTH_SIGNIN_FAIL,{message:e.message})}}async function Ci(){let e=document.getElementById(`passkeySigninBtn`);e.disabled=!0;try{let e=await C.doPasskeySignin();e.ok?(console.log(`[SigninRoute] Passkey signin successful`),typeof neodigmToast<`u`&&neodigmToast.q(T.get(`success_welcome_back`),`success`),wi.default.publish(p.AUTH_SIGNIN_SUCCESS,{entity:C.getEntity()})):document.getElementById(`passkeyHint`)?.style.removeProperty(`display`),!e.ok&&!e.canceled&&typeof neodigmToast<`u`&&neodigmToast.q(e.error||T.get(`error_signin_failed`),`danger`)}catch(e){console.error(`[SigninRoute] Passkey signin error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||T.get(`error_network`),`danger`)}finally{e.disabled=!1}}var wi,Ti=o((()=>{wi=u(f(),1),ar(),m(),w(),Ht(),_i()}));function Ei(e){let t=[];return e.length<12&&t.push(`at least 12 characters`),e.length>1024&&t.push(`at most 1024 characters`),/[a-z]/.test(e)||t.push(`1 lowercase`),/[A-Z]/.test(e)||t.push(`1 uppercase`),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push(`1 special character`),/[^\x00-\x7F]/.test(e)&&t.push(`ASCII characters only`),t}function Di(e){if(e.length===0)return``;if(e.includes(`ASCII characters only`))return`Password cannot contain emoji|or special unicode characters`;let t=e.find(e=>/^at (?:least|most) \d+ characters$/.test(e));return t?`Password must have ${t.replace(/ (\d+ characters)$/,`|$1`)}`:`Password must have: Uppercase,|Lowercase, and Special Character`}var Oi=o((()=>{})),ki=c({init:()=>ji,render:()=>Ai});function Ai(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${er()}
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
          ${tr()}
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
  `}function ji(){console.log(`[SignupRoute] Initialized`);let e=document.getElementById(`signupForm`),t=e.querySelector(`button[type="submit"]`);Mi(`togglePassword`,`password`,`eyeIcon`),Mi(`toggleConfirmPassword`,`confirmPassword`,`eyeIconConfirm`),document.querySelector(`.auth-switch a[href="#/signin"]`)?.addEventListener(`click`,e=>{e.preventDefault(),console.log(`[SignupRoute] Sign in link clicked - navigating to signin`),Ii.default.publish(p.ROUTE_NAV,{route:`signin`})}),e.addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`first`).value.trim(),r=document.getElementById(`last`).value.trim(),i=document.getElementById(`email`).value.trim(),a=document.getElementById(`company`).value.trim(),o=document.getElementById(`phone`).value.trim(),s=document.getElementById(`password`).value,c=document.getElementById(`confirmPassword`).value,l=document.getElementById(`first`),u=document.getElementById(`last`),d=document.getElementById(`email`),f=document.getElementById(`password`),p=document.getElementById(`confirmPassword`);if(!Ni(n,l,T.get(`validation_first_name_required`))||!Ni(r,u,T.get(`validation_last_name_required`))||!hi(i,d)||!Pi(s,f))return;if(s!==c){mi(p,T.get(`validation_password_mismatch`));return}let m=document.getElementById(`acceptTerms`);if(!m.checked){mi(m,`Please accept the Terms of Service and Privacy Policy to continue.`);return}t.disabled=!0,t.textContent=T.get(`loading_creating_account`),await Fi(n,r,i,a,o,s)})}function Mi(e,t,n){let r=document.getElementById(e),i=document.getElementById(t),a=document.getElementById(n);!r||!i||!a||r.addEventListener(`click`,()=>{let e=i.type===`password`;i.type=e?`text`:`password`,e?a.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:a.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Ni(e,t,n){return e?!0:(mi(t,n),!1)}function Pi(e,t){if(!e)return mi(t,T.get(`validation_password_required`)),!1;let n=Ei(e);return n.length>0?(mi(t,Di(n)),!1):!0}async function Fi(e,t,n,r,i,a){let o=document.querySelector(`button[type="submit"]`);try{let s={email:n,password:a,first:e,last:t};r&&(s.company=r),i&&(s.phone=i),s.terms_accepted=!0,s.legal_version=Li;let c=await C.doSignup(s);if(c.ok)Ii.default.publish(p.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<`u`&&mvvLegit.doUNVERF();else{let e=c.error||c.message||T.get(`error_signup_failed`);typeof neodigmToast<`u`&&neodigmToast.q(e,`danger`),o.disabled=!1,o.textContent=(T.get(`create_account`)||`Create account`).toUpperCase(),Ii.default.publish(p.AUTH_SIGNUP_FAIL,{message:e})}}catch(e){console.error(`[SignupRoute] Sign up error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||T.get(`error_network`),`danger`),o.disabled=!1,o.textContent=(T.get(`create_account`)||`Create account`).toUpperCase(),Ii.default.publish(p.AUTH_SIGNUP_FAIL,{message:e.message})}}var Ii,Li,Ri=o((()=>{Ii=u(f(),1),ar(),m(),w(),Oi(),Ht(),_i(),Li=`2026-07-15`})),zi=c({init:()=>Vi,render:()=>Bi});function Bi(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${er()}
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
          ${tr()}
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
  `}function Vi(){console.log(`[VerfLinkRoute] Initialized`);let e=Date.now(),t=document.getElementById(`countdown-display`);function n(){let n=Date.now()-e,i=Math.floor(n/1e3),a=Math.max(0,7200-i),o=Math.floor(a/3600),s=Math.floor(a%3600/60),c=a%60,l=`${String(o).padStart(2,`0`)}:${String(s).padStart(2,`0`)}:${String(c).padStart(2,`0`)}`;t&&(t.textContent=l,a<600&&(t.style.color=`#ef4444`,t.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),a===0&&(t.style.color=`#7f1d1d`,t.style.textShadow=`none`)),a===0&&(clearInterval(r),console.log(`[VerfLinkRoute] Countdown expired`),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate(`/splash`)},600))}n();let r=setInterval(n,1e3);window.addEventListener(`beforeunload`,()=>{clearInterval(r)})}var Hi=o((()=>{ar()})),Ui,Wi,Gi,Ki,qi=o((()=>{Ui=u(f(),1),m(),Wi=`https://machfivemagnet-saas.onrender.com`,Gi=class{constructor(){this.baseUrl=Wi}async request(e,t={}){let n=`${this.baseUrl}${e}`,r={"Content-Type":`application/json`,...t.headers};try{let i=await fetch(n,{...t,headers:r});if(i.status===401||i.status===403){Ui.default.publish(p.AUTH_TOKEN_EXPIRED,{status:i.status,endpoint:e});let t=await i.json().catch(()=>({}));throw Error(t.error||`Authentication failed`)}let a=await i.json();return{ok:i.ok,status:i.status,data:a}}catch(t){throw console.error(`API Request Error:`,t),Ui.default.publish(p.APP_ERROR,{message:t.message,endpoint:e}),t}}async get(e){return this.request(e,{method:`GET`})}async post(e,t){return this.request(e,{method:`POST`,body:JSON.stringify(t)})}async put(e,t){return this.request(e,{method:`PUT`,body:JSON.stringify(t)})}async delete(e){return this.request(e,{method:`DELETE`})}async signin(e,t){return this.post(`/api/acctEntity/signin`,{email:e,hash:t})}async signup(e){return this.post(`/api/acctEntity/signup`,e)}async signout(){return this.post(`/api/acctEntity/signout`,{})}async forgotPassword(e){return this.get(`/m5t/v5/acctEntity/forgot?CODE=${encodeURIComponent(e)}`)}async resetHash(e,t){return this.post(`/api/acctEntity/resethash`,{email:e,hash:t})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get(`/api/acctEntity`)}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,t){return this.put(`/api/acctEntity/${e}`,t)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get(`/ping`)}},Ki=new Gi})),Ji=c({init:()=>Xi,render:()=>Yi});function Yi(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${er(`#/signin`)}
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
          ${tr()}
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

  `}function Xi(){console.log(`[ForgotRoute] Initialized`);let e=document.getElementById(`forgot-form`),t=document.getElementById(`email`);e?.addEventListener(`submit`,async e=>{e.preventDefault();let n=t.value.trim();hi(n,t)&&await Zi(n)})}async function Zi(e){let t=document.querySelector(`.btn`);t.disabled=!0,t.textContent=`SENDING...`;try{let n=await Ki.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<`u`&&neodigmToast.q(T.get(`success_reset_link_sent`),`success`),Qi.default.publish(p.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate(`/verf-link`)},2e3)):(typeof neodigmToast<`u`&&neodigmToast.q(n.data.error||T.get(`error_signin_failed`),`danger`),t.disabled=!1,t.textContent=(T.get(`send_reset_link`)||`Send reset link`).toUpperCase())}catch(e){console.error(`[ForgotRoute] Forgot password error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||T.get(`error_network`),`danger`),t.disabled=!1,t.textContent=(T.get(`send_reset_link`)||`Send reset link`).toUpperCase()}}var Qi,$i=o((()=>{Qi=u(f(),1),ar(),m(),qi(),Ht(),_i()})),ea=c({init:()=>na,render:()=>ta});function ta(){let e=C.getEntity()?.email||``;return`
    <div class="auth-container">
      <div class="auth-left">
        ${er(`#/home`)}
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
                value="${e}"
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
          ${tr()}
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
  `}function na(){console.log(`[ResethashRoute] Initialized`);let e=document.getElementById(`resethash-form`),t=e.querySelector(`button[type="submit"]`);ra(`toggleNewPassword`,`new-password`,`eyeIconNew`),ra(`toggleConfirmPassword`,`confirm-password`,`eyeIconConfirm`),e?.addEventListener(`submit`,async n=>{n.preventDefault();let r=e.email.value.trim(),i=e.newPassword.value,a=e.confirmPassword.value,o=document.getElementById(`new-password`),s=document.getElementById(`confirm-password`);if(!i){mi(o,T.get(`validation_new_password_required`));return}let c=Ei(i);if(c.length>0){mi(o,Di(c));return}if(!a){mi(s,T.get(`validation_new_password_required`));return}if(i!==a){mi(s,T.get(`validation_password_mismatch`));return}t.disabled=!0,t.textContent=T.get(`loading_resetting_password`);try{let e=await C.doResetHash(r,i);e.ok?(typeof neodigmToast<`u`&&neodigmToast.q(T.get(`success_password_reset`),`success`),ia.default.publish(p.AUTH_RESETHASH_SUCCESS,{email:r})):(mi(o,e.error||T.get(`error_signin_failed`)),t.disabled=!1,t.textContent=(T.get(`update_password`)||`Update password`).toUpperCase())}catch(e){console.error(`[ResethashRoute] Reset password error:`,e),mi(o,e.message||T.get(`error_network`)),t.disabled=!1,t.textContent=(T.get(`update_password`)||`Update password`).toUpperCase()}})}function ra(e,t,n){let r=document.getElementById(e),i=document.getElementById(t),a=document.getElementById(n);!r||!i||!a||r.addEventListener(`click`,()=>{let e=i.type===`password`;i.type=e?`text`:`password`,e?a.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:a.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}var ia,aa=o((()=>{ia=u(f(),1),ar(),m(),w(),Oi(),Ht(),_i()}));function oa(){if(_a)return;let e=document.createElement(`style`);e.id=`m5t-portfolio-styles`,e.textContent=`
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
    .page-shell .dash-clients .dc-delta-up { color:var(--color-tip,#059669); font-weight:600; }
    .page-shell .dash-clients .dc-delta-down { color:var(--color-danger,#DC2626); font-weight:600; }
    .page-shell .dash-clients .dc-view { color:var(--color-accent,#0072BA); font-weight:600; }
    .page-shell .dash-clients-scroll { overflow-x:auto; }
    .page-shell .pf-client-chip { font-size:0.64rem; font-weight:700; letter-spacing:0.03em; padding:2px 8px; border-radius:999px; background:var(--color-accent-soft,rgba(0,114,186,0.1)); color:var(--color-accent-hover,#00558D); white-space:nowrap; }
    .page-shell .pf-access-error { display:flex; align-items:center; gap:8px; font-size:0.84rem; font-weight:500; color:var(--color-danger,#DD4124); background:var(--color-danger-soft,rgba(221,65,36,0.08)); border:1px solid var(--color-danger,#DD4124); border-radius:var(--radius-md,10px); padding:10px 14px; margin-bottom:12px; }
    .page-shell .dc-skel { display:inline-block; width:44px; height:12px; border-radius:6px; background:var(--color-surface-2,#EAF0F7); animation:pf-skel 1.2s ease-in-out infinite; }
    @keyframes pf-skel { 0%,100% { opacity:1; } 50% { opacity:0.45; } }
  `,document.head.appendChild(e),_a=!0}async function sa(e,{days:t=30}={}){let n=new Date,r=va(new Date(n.getTime()-(t-1)*864e5)),i=va(n),a=await fetch(`${e}/m5t/v5/dashboard/stats?from=${r}&to=${i}&group_by=owner`);if(!a.ok)throw Error(`HTTP ${a.status}`);let o=await a.json();if(!o.ok)throw Error(`stats not ok`);return o.by_owner||[]}function ca(e,t){let n=e;return`<div class="dash-clients-scroll"><table class="dash-clients">
    <thead><tr>
      <th>Client</th>${t.map(e=>`<th>${e.h}</th>`).join(``)}<th></th>
    </tr></thead>
    <tbody>${n.map(e=>`
      <tr data-org="${ha(e.owner_guid)}" tabindex="0" role="button"
          aria-label="Open ${ha(e.name||`client`)}">
        <td><span class="dc-name">${ha(e.name||e.owner_guid)}
          <span class="dc-chip">${ha(ga[e.channel]||e.channel||``)}</span></span></td>
        ${t.map(t=>`<td>${t.td(e)}</td>`).join(``)}
        <td><span class="dc-view">View →</span></td>
      </tr>`).join(``)}</tbody>
  </table></div>`}function la(e){let t=e.querySelector(`.pf-access-error`);t||(t=document.createElement(`div`),t.className=`pf-access-error`,e.prepend(t)),t.textContent=`You don't have direct access to manage this org. Use the admin console to act on its behalf.`}function ua(e){if(!e)return;E(e.querySelector(`.dash-clients tbody`)||e,{rowSelector:`tr[data-org]`,noun:`clients`,controlHost:e.querySelector(`.dash-clients-scroll`)||e});let t=async t=>{let n=t?.dataset?.org;n&&(await C.setActiveOrg(n))?.activeOrgError&&la(e)};e.querySelectorAll(`tbody tr[data-org]`).forEach(e=>{e.addEventListener(`click`,()=>t(e)),e.addEventListener(`keydown`,n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),t(e))})})}function da({section:e,title:t,description:n}){return oa(),`
    <div class="page-shell" data-section="${ha(e)}">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${ha(t)}</h1>
          <p class="page-description">${ha(n)}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
        </div>
        <div class="card-body" id="pf-picker-body">${ya(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}function fa(e){let t=C.getManagedClients().map(e=>({owner_guid:e.orgGuid,name:e.name,channel:`managed_client`}));return t.length?ca(t,e.map(e=>({h:e.h,td:()=>`<span class="dc-skel" aria-hidden="true"></span>`}))):ya(`hourglass_empty`,`Loading…`)}async function pa(e,t,{emptyMsg:n}={}){let r=document.getElementById(`pf-picker-body`);if(r){r.innerHTML=fa(t),ua(r);try{let i=await sa(e);if(!i.length){r.innerHTML=ya(`groups`,n||`No client orgs yet. Create one under Clients first.`);return}r.innerHTML=ca(i,t),ua(r)}catch(e){console.warn(`[portfolio] picker load failed:`,e),r.innerHTML=ya(`error`,`Could not load your clients. Please refresh.`)}}}function ma(){let e={};return C.getManagedClients().forEach(t=>{e[t.orgGuid]=t.name}),C.getMemberships().forEach(t=>{t.orgGuid&&!e[t.orgGuid]&&(e[t.orgGuid]=t.name||``)}),e}var k,ha,ga,_a,va,ya,ba,xa=o((()=>{w(),sn(),k=()=>C.getManagedClients().length>0&&!C.getStoredActiveOrg(),ha=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),ga={reseller_org:`Your org`,managed_client:`Client`,saas_org:`Org`},_a=!1,va=e=>e.toISOString().slice(0,10),ya=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,ba=e=>e?`<span class="pf-client-chip">${ha(e)}</span>`:``}));function Sa(e,t){Ea.set(e,t)}function Ca(e){if(!Ea.has(e))return null;let t=Ea.get(e);return Ea.delete(e),t}function wa(e){return Ea.has(e)?Ea.get(e):null}var Ta,Ea,Da=o((()=>{Ta=Object.freeze({MAGNET_TEMPLATE:`magnet_template`,LEADS_SEARCH:`leads_search`,LEADS_DAY:`leads_day`}),Ea=new Map}));function A({icon:e,label:t,valueId:n,value:r=`—`,subId:i,sub:a=``,href:o,trendId:s}={}){let c=o?`a`:`div`;return`
  <${c}${o?` href="${ka(o)}" class="stat-card stat-card--link"`:` class="stat-card"`}>
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${ka(e)}</span>
      <span class="stat-label">${ka(t)}</span>
      ${o?`<span class="stat-go material-symbols-outlined" aria-hidden="true">north_east</span>`:``}
    </div>
    <div class="stat-value"${n?` id="${ka(n)}"`:``}>${r}</div>
    <div class="stat-change">${s?`<span class="stat-trend" id="${ka(s)}"></span>`:``}<span class="stat-sublabel"${i?` id="${ka(i)}"`:``}>${a}</span></div>
  </${c}>`}var Oa,ka,Aa=o((()=>{Oa={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ka=e=>String(e??``).replace(/[&<>"']/g,e=>Oa[e])}));function ja(e){if(e<=0)return 1;let t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function Ma(){if(za)return;let e=document.createElement(`style`);e.id=`m5c-chart-styles`,e.textContent=`
    .m5c-wrap { position: relative; }
    .m5c-chart { width: 100%; height: auto; display: block; }
    .m5c-legend { display: flex; gap: 16px; margin: 0 0 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .m5c-legend i { display: inline-block; width: 11px; height: 11px; border-radius: 3px; margin-right: 5px; vertical-align: middle; }
    text.m5c-ax { font-size: 11px; fill: var(--color-text-subtle, #6C7C9A); }
    line.m5c-grid { stroke: var(--chart-grid, #EAF0F7); }

    /* Marks sit at 0.85 so the active one can go to full without a hue change — a
       brightness shift reads as "this one" more cleanly and keeps the legend honest. */
    .m5c-bar { fill: var(--chart-1, #0072BA); opacity: 0.85; transition: opacity .12s ease; }
    .m5c-bar--on { opacity: 1; }
    .m5c-line { stroke: var(--chart-2, #009473); }
    .m5c-dot { fill: var(--chart-2, #009473); transition: r .12s ease, stroke-width .12s ease; }
    /* Ring lifts the active dot off the line it sits on. */
    .m5c-dot--on { r: 5.2; stroke: var(--color-bg, #fff); stroke-width: 2; }
    .m5c-sw--1 { background: var(--chart-1, #0072BA); }
    .m5c-sw--2 { background: var(--chart-2, #009473); }

    .m5c-hit { cursor: pointer; fill: transparent; transition: fill .12s ease; }
    .m5c-hit--on { fill: color-mix(in srgb, var(--chart-1, #0072BA) 6%, transparent); }
    /* A point with nothing to drill into must not offer to. */
    .m5c-hit[data-activatable="false"] { cursor: default; }
    /* Keyboard focus has to be visible on a transparent target, or tabbing through the
       chart looks like nothing is happening. */
    .m5c-hit:focus { outline: none; }
    .m5c-hit:focus-visible { fill: color-mix(in srgb, var(--chart-1, #0072BA) 12%, transparent); stroke: var(--chart-1, #0072BA); stroke-width: 1.5; }
    .m5c-crosshair { stroke: var(--color-text-subtle, #6C7C9A); stroke-width: 1; stroke-dasharray: 3 3; opacity: 0; transition: opacity .12s ease; }
    .m5c-crosshair--on { opacity: 0.55; }

    .m5c-tip { position: absolute; transform: translate(-50%, -100%) translateY(-8px); pointer-events: none; z-index: 5; background: var(--chart-tip-bg, #0B1220); color: var(--chart-tip-text, #F2F7FB); padding: 8px 10px; border-radius: 8px; font-size: 0.78rem; line-height: 1.5; white-space: nowrap; box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.18)); }
    .m5c-tip[hidden] { display: none; }
    .m5c-tip__title { font-weight: 700; margin-bottom: 3px; }
    .m5c-tip__row { display: flex; align-items: center; gap: 6px; }
    .m5c-tip__row i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; flex: 0 0 auto; }
    .m5c-tip__go { margin-top: 5px; padding-top: 5px; border-top: 1px solid rgba(255,255,255,0.18); font-weight: 700; color: var(--chart-tip-link, #7BB7FF); }
    [data-theme="dark"] .m5c-tip { border: 1px solid var(--color-border-strong, #3D6A8F); }

    html.ff-no-animations .m5c-bar, html.ff-no-animations .m5c-dot,
    html.ff-no-animations .m5c-hit, html.ff-no-animations .m5c-crosshair { transition: none; }
    @media (prefers-reduced-motion: reduce) {
      .m5c-bar, .m5c-dot, .m5c-hit, .m5c-crosshair { transition: none; }
    }
  `,document.head.appendChild(e),za=!0}function Na({rows:e=[],xLabel:t=()=>``,left:n,right:r,ariaLabel:i=`Chart`,activatable:a=()=>!1,pointLabel:o=()=>``,hitData:s=()=>({})}){let c=e.length||1,l=n.fmt||Ra,u=r.fmt||Ra,d=ja(Math.max(1,...e.map(e=>n.value(e)||0))),f=ja(Math.max(1,...e.map(e=>r.value(e)||0))),p=738/c,m=Math.min(22,p*.55),h=e=>56+p*(e+.5),g=e=>266-e/d*248,_=e=>266-e/f*248,v=[0,.5,1].map(e=>{let t=266-e*248;return`<line x1="56" y1="${t.toFixed(1)}" x2="794" y2="${t.toFixed(1)}" class="m5c-grid"/><text x="48" y="${(t+3.5).toFixed(1)}" text-anchor="end" class="m5c-ax">${La(l(d*e))}</text><text x="802" y="${(t+3.5).toFixed(1)}" text-anchor="start" class="m5c-ax">${La(u(f*e))}</text>`}).join(``),y=e.map((e,t)=>{let r=g(n.value(e)||0);return`<rect class="m5c-bar" data-i="${t}" x="${(h(t)-m/2).toFixed(1)}" y="${r.toFixed(1)}" width="${m.toFixed(1)}" height="${Math.max(0,266-r).toFixed(1)}" rx="3"/>`}).join(``),ee=e.map((e,t)=>`${h(t).toFixed(1)},${_(r.value(e)||0).toFixed(1)}`).join(` `),b=c>1?`<polyline class="m5c-line" points="${ee}" fill="none" stroke-width="2.5"/>`:``,te=e.map((e,t)=>`<circle class="m5c-dot" data-i="${t}" cx="${h(t).toFixed(1)}" cy="${_(r.value(e)||0).toFixed(1)}" r="3.2"/>`).join(``),ne=Math.max(1,Math.ceil(c/6)),re=e.map((e,n)=>n%ne===0||n===c-1?`<text x="${h(n).toFixed(1)}" y="288" text-anchor="middle" class="m5c-ax">${La(t(e,n))}</text>`:``).join(``),ie=e.map((e,t)=>{let n=!!a(e),r=Object.entries(s(e)||{}).map(([e,t])=>` data-${La(e)}="${La(t)}"`).join(``);return`<rect class="m5c-hit" data-i="${t}" data-activatable="${n}" tabindex="0" role="button" aria-label="${La(o(e,t))}"${r} x="${(56+p*t).toFixed(1)}" y="18" width="${p.toFixed(1)}" height="${248 .toFixed(1)}" fill="transparent"/>`}).join(``);return`
    <div class="m5c-legend">
      <span><i class="m5c-sw m5c-sw--1"></i>${La(n.label)}</span>
      <span><i class="m5c-sw m5c-sw--2"></i>${La(r.label)}</span>
    </div>
    <div class="m5c-wrap">
      <svg class="m5c-chart" viewBox="0 0 840 300" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${La(i)}">
        ${v}<line class="m5c-crosshair" x1="0" y1="18" x2="0" y2="266" pointer-events="none"/>${y}${b}${te}${re}${ie}
      </svg>
      <div class="m5c-tip" role="status" hidden></div>
    </div>`}function Pa(){try{return!window.matchMedia||window.matchMedia(`(hover: hover)`).matches}catch{return!0}}function Fa(e,{rows:t=[],tipHTML:n,onActivate:r}={}){if(!e?.addEventListener||typeof n!=`function`)return()=>{};let i=()=>e.querySelector(`.m5c-wrap`),a=()=>e.querySelector(`.m5c-tip`),o=e=>{e.querySelectorAll(`.m5c-bar--on, .m5c-dot--on, .m5c-hit--on`).forEach(e=>e.classList.remove(`m5c-bar--on`,`m5c-dot--on`,`m5c-hit--on`)),e.querySelector(`.m5c-crosshair`)?.classList.remove(`m5c-crosshair--on`)},s=(e,t,n)=>{o(e),e.querySelector(`.m5c-bar[data-i="${t}"]`)?.classList.add(`m5c-bar--on`),e.querySelector(`.m5c-dot[data-i="${t}"]`)?.classList.add(`m5c-dot--on`),n.classList.add(`m5c-hit--on`);let r=e.querySelector(`.m5c-crosshair`);if(r){let e=Number(n.getAttribute(`x`))+Number(n.getAttribute(`width`))/2;r.setAttribute(`x1`,e),r.setAttribute(`x2`,e),r.classList.add(`m5c-crosshair--on`)}},c=(e,r)=>{let o=i(),c=a(),l=t[e];if(!o||!c||!l||!r)return;c.innerHTML=n(l,e);let u=r.getBoundingClientRect(),d=o.getBoundingClientRect(),f=u.left-d.left+u.width/2,p=(c.offsetWidth||0)/2;p&&(f=Math.min(Math.max(f,p+4),Math.max(p+4,d.width-p-4))),c.style.left=`${f}px`,c.style.top=`${u.top-d.top}px`,c.hidden=!1,s(o,e,r)},l=()=>{let e=i(),t=a();t&&(t.hidden=!0),e&&o(e)},u=t=>{let n=t.target.closest?.(`.m5c-hit`);return n&&e.contains(n)?n:null},d=e=>Number(e?.dataset?.i),f=e=>{let n=d(e),i=t[n];!i||e.dataset.activatable!==`true`||typeof r!=`function`||r(i,n)},p=e=>{let t=u(e);t&&c(d(t),t)},m=t=>{let n=t.relatedTarget;n&&e.contains(n)&&n.closest?.(`.m5c-hit`)||l()},h=e=>{let t=u(e);if(!t)return;let n=t.classList.contains(`m5c-hit--on`);c(d(t),t),!(!Pa()&&!n)&&f(t)},g=e=>{let t=u(e);t&&c(d(t),t)},_=t=>{let n=t.relatedTarget;n&&e.contains(n)&&n.closest?.(`.m5c-hit`)||l()},v=t=>{let n=u(t);if(!n)return;let r=[...e.querySelectorAll(`.m5c-hit`)],i=r.indexOf(n),a=e=>{let n=r[Math.max(0,Math.min(r.length-1,e))];n&&(t.preventDefault(),n.focus?.(),c(d(n),n))};switch(t.key){case`Enter`:case` `:case`Spacebar`:t.preventDefault(),f(n);break;case`ArrowRight`:a(i+1);break;case`ArrowLeft`:a(i-1);break;case`Home`:a(0);break;case`End`:a(r.length-1);break;case`Escape`:l(),n.blur?.()}};return e.addEventListener(`mouseover`,p),e.addEventListener(`mouseout`,m),e.addEventListener(`click`,h),e.addEventListener(`focusin`,g),e.addEventListener(`focusout`,_),e.addEventListener(`keydown`,v),()=>{e.removeEventListener(`mouseover`,p),e.removeEventListener(`mouseout`,m),e.removeEventListener(`click`,h),e.removeEventListener(`focusin`,g),e.removeEventListener(`focusout`,_),e.removeEventListener(`keydown`,v)}}var Ia,La,Ra,za,Ba=o((()=>{Ia={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},La=e=>String(e??``).replace(/[&<>"']/g,e=>Ia[e]),Ra=e=>{let t=Math.round(e);return t>=1e3?`${(t/1e3).toFixed(t%1e3==0?0:1)}k`:String(t)},za=!1})),Va=c({default:()=>po,init:()=>qa,render:()=>Ka,statCard:()=>A,svgTrendChart:()=>Qa,wireTrendTooltip:()=>eo});function Ha(e){let t=e.created?.created_tz;if(!t)return``;try{return new Date(t).toLocaleDateString([],{month:`short`,day:`numeric`})}catch{return``}}function Ua(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function Wa(){if(Ma(),oo)return;let e=document.createElement(`style`);e.id=`m5t-dash-recent-styles`,e.textContent=`
    .page-shell .recent-lead { display:flex; align-items:center; gap:10px; padding:10px 4px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); text-decoration:none; color:inherit; }
    .page-shell .recent-lead:last-child { border-bottom:0; }
    .page-shell .recent-lead:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .recent-lead__ava { flex:0 0 auto; width:34px; height:34px; border-radius:50%; display:grid; place-items:center; font-weight:700; font-size:0.74rem; color:#fff; background:var(--color-primary-600,#0072BA); }
    .page-shell .recent-lead__main { flex:1 1 auto; min-width:0; display:flex; flex-direction:column; }
    .page-shell .recent-lead__name { font-weight:600; font-size:0.9rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .recent-lead__sub { font-size:0.78rem; color:var(--color-text-subtle,#6C7C9A); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    /* Colors come from ui-kit .m5t-badge[data-s] (dark-mode aware); this rule is layout only. */
    .page-shell .recent-lead__badge { flex:0 0 auto; }
    .page-shell .recent-lead__time { flex:0 0 auto; font-size:0.74rem; color:var(--color-text-subtle,#6C7C9A); }

    /* Chart marks, tooltip and hit bands now live in services/chart-kit.js (.m5c-*),
       shared with ad-performance and analytics. The funnel/list rules below are a
       different component family and stay here. */

    .page-shell .dash-funnel { display:flex; flex-direction:column; gap:12px; padding:6px 2px; }
    .page-shell .dash-funnel__row { display:flex; flex-direction:column; gap:4px; }
    .page-shell .dash-funnel__meta { display:flex; justify-content:space-between; font-size:0.8rem; }
    .page-shell .dash-funnel__label { font-weight:600; color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-funnel__val { font-weight:700; color:var(--color-text,#0B1220); }
    .page-shell .dash-funnel__track { height:12px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); overflow:hidden; }
    .page-shell .dash-funnel__bar { height:100%; border-radius:999px; background:var(--chart-1,#0072BA); transition:width .4s ease; }
    .page-shell .dash-funnel__bar--mid { background:var(--color-info,#0D9488); }
    .page-shell .dash-funnel__bar--end { background:var(--color-success,#009473); }
    .page-shell .dash-funnel__pct { font-size:0.72rem; color:var(--color-text-subtle,#6C7C9A); }

    .page-shell .dash-list { display:flex; flex-direction:column; }
    .page-shell .dash-list__row { display:flex; align-items:center; gap:10px; padding:9px 4px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); font-size:0.86rem; }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .dash-list__row[hidden] { display: none; }
    .page-shell .dash-list__row:last-child { border-bottom:0; }
    .page-shell .dash-list__ico { flex:0 0 auto; width:28px; height:28px; border-radius:8px; display:grid; place-items:center; background:var(--color-accent-soft,rgba(0,114,186,0.1)); color:var(--color-accent,#0072BA); }
    .page-shell .dash-list__ico .material-symbols-outlined { font-size:17px; }
    .page-shell .dash-list__main { flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .dash-list__num { flex:0 0 auto; font-weight:700; }
    .page-shell .dash-list__time { flex:0 0 auto; font-size:0.74rem; color:var(--color-text-subtle,#6C7C9A); }
    .page-shell .dash-list__mode { flex:0 0 auto; font-size:0.66rem; font-weight:700; letter-spacing:0.03em; padding:2px 7px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); color:var(--color-text-muted,#4A5A78); }
    /* Drill-through rows: same row shape, but they announce themselves as links. */
    .page-shell .dash-list__row--link { text-decoration:none; color:inherit; border-radius:8px; transition:background .14s ease; }
    .page-shell .dash-list__row--link:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .dash-list__row--link:hover .dash-list__main { color:var(--color-primary-600,#0072BA); }
    .page-shell .dash-list__go { flex:0 0 auto; font-size:18px; color:var(--color-text-subtle,#6C7C9A); opacity:0; transition:opacity .14s ease; }
    .page-shell .dash-list__row--link:hover .dash-list__go, .page-shell .dash-list__row--link:focus-visible .dash-list__go { opacity:1; }
    /* Touch has no hover — keep the affordance visible there. */
    @media (hover: none) { .page-shell .dash-list__go { opacity:1; } }
    html.ff-no-animations .page-shell .dash-list__row--link, html.ff-no-animations .page-shell .dash-list__go { transition:none; }
    @media (prefers-reduced-motion: reduce) { .page-shell .dash-list__row--link, .page-shell .dash-list__go { transition:none; } }

    /* card-header is a two-child space-between; this keeps the Live pill and the
       view-all link together on the right instead of pushing the title off-centre. */
    .page-shell .card-header__aside { display:inline-flex; align-items:center; gap:14px; }

  `,document.head.appendChild(e),oo=!0}function Ga(e){return`<a class="recent-lead" href="#/leads">
    <span class="recent-lead__ava">${ro(ao(e))}</span>
    <span class="recent-lead__main">
      <span class="recent-lead__name">${ro(io(e))}</span>
      <span class="recent-lead__sub">${ro(e.email||e.phone||``)}</span>
    </span>
    <span class="m5t-badge recent-lead__badge" data-s="${ro(e.status)}">${ro(e.status)}</span>
    <span class="recent-lead__time">${ro(Ha(e))}</span>
  </a>`}function Ka(){Wa(),oa();let e=k();return`
    <div class="page-shell" data-section="home">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${e?`Portfolio`:`Dashboard`}</h1>
          ${e?``:`<p class="page-description">Your magnets, conversations, and lead performance at a glance.</p>`}
        </div>
      </div>

      ${e?`
      <div class="dashboard-card dashboard-card--lead">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="dash-portfolio">${fa(to)}</div>
      </div>`:``}

      <div class="stats-grid">
        ${A({icon:`widgets`,label:`Active Magnets`,valueId:`stat-active-magnets`,subId:`stat-active-magnets-sub`,sub:`Loading…`,href:`#/magnets`})}
        ${A({icon:`ads_click`,label:`Magnet Opens`,valueId:`stat-opens`,subId:`stat-opens-sub`,sub:`Loading…`,href:`#/analytics`})}
        ${A({icon:`person_add`,label:`Leads Captured`,valueId:`stat-leads`,subId:`stat-leads-sub`,sub:`Loading…`,href:`#/leads`,trendId:`stat-leads-trend`})}
        ${A({icon:`check_circle`,label:`Completion Rate`,valueId:`stat-completion`,subId:`stat-completion-sub`,sub:`Loading…`,href:`#/analytics`})}
      </div>

      <div class="charts-section">
        ${so(`show_chart`,`Opens & Leads`,`dash-trend`,{wide:!0,controls:!0})}
        <div class="charts-grid">
          ${so(`filter_alt`,`Completion Funnel`,`dash-funnel`)}
          ${so(`source`,`Top Campaigns`,`dash-campaigns`)}
          ${so(`touch_app`,`CTA Usage`,`dash-routes`,{full:!0})}
        </div>
      </div>

      <div class="content-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Recent Interactions</h2>
            <span class="card-header__aside">
              <span class="live-indicator"><span class="pulse-dot"></span> Live</span>
              <a class="view-all-link" href="#/conversations">View all →</a>
            </span>
          </div>
          <div class="card-body" id="dash-interactions">
            ${no(`sensors`,`Loading…`)}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/leads">View all →</a>
          </div>
          <div class="card-body" id="recent-leads-body">
            ${no(`hourglass_empty`,`Loading leads…`)}
          </div>
        </div>
      </div>
    </div>`}async function qa(){let e=C.getConfig?.().BASE_URL||``;k()&&ua(document.getElementById(`dash-portfolio`)),document.getElementById(`dash-periods`)?.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-days]`);n&&(co=Number(n.dataset.days)||30,document.querySelectorAll(`#dash-periods .chart-period-btn`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.days)===co)),Ja(e))}),document.getElementById(`dash-campaigns`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-campaign]`);t&&Sa(Ta.LEADS_SEARCH,t.dataset.campaign)}),await Promise.all([Ja(e),Za(e)])}async function Ja(e){let t=new Date,n=fo(new Date(t.getTime()-(co-1)*864e5)),r=fo(t),i=k(),a;try{let t=await fetch(`${e}/m5t/v5/dashboard/stats?from=${n}&to=${r}${i?`&group_by=owner`:``}`);if(!t.ok)throw Error(`HTTP ${t.status}`);if(a=await t.json(),!a.ok)throw Error(`stats not ok`)}catch(e){console.warn(`[dashboard] stats fetch failed:`,e),[`stat-active-magnets`,`stat-opens`,`stat-leads`,`stat-completion`].forEach(e=>lo(e,`—`)),[`stat-active-magnets-sub`,`stat-opens-sub`,`stat-leads-sub`,`stat-completion-sub`].forEach(e=>lo(e,`Unavailable`));let t=document.getElementById(`stat-leads-trend`);t&&(t.className=`stat-trend`,t.innerHTML=``),[`dash-trend`,`dash-funnel`,`dash-campaigns`,`dash-routes`,`dash-interactions`,`dash-portfolio`].forEach(e=>uo(e,no(`error`,`Could not load. Please refresh.`)));return}i&&Ya(a.by_owner||[]),lo(`stat-active-magnets`,j(a.magnets.active)),lo(`stat-active-magnets-sub`,a.magnets.total>a.magnets.active?`${j(a.magnets.total-a.magnets.active)} paused`:a.magnets.active?`All running`:`No magnets yet`);let o=a.funnel||{};lo(`stat-opens`,o.opens?j(o.opens):`—`),lo(`stat-opens-sub`,o.opens?o.engagement_rate==null?`${j(o.engaged)} engaged`:`${o.engagement_rate}% engage`:`No opens in this range yet`);let s=a.leads||{};lo(`stat-leads`,j(s.total));let c=(s.this_week||0)-(s.prev_week||0);lo(`stat-leads-sub`,s.total?`${j(s.this_week)} this week`:`No leads yet`);let l=document.getElementById(`stat-leads-trend`);if(l){if((s.prev_week||0)>0){let e=c>0?`positive`:c<0?`negative`:`neutral`,t=c>0?`trending_up`:c<0?`trending_down`:`trending_flat`;l.className=`stat-trend ${e}`,l.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">${t}</span>${c>0?`+`:``}${j(c)}`}else l.className=`stat-trend`,l.innerHTML=``}lo(`stat-completion`,o.completion_rate==null?`—`:`${o.completion_rate}%`),lo(`stat-completion-sub`,o.opens?`${j(o.completions)} completed of ${j(o.opens)} opens`:`Appears once magnets get opened`);let u=a.by_day||[],d=u.some(e=>e.opens||e.leads);uo(`dash-trend`,d?Qa(u):no(`show_chart`,`No activity in this range yet. Opens and leads chart here as visitors engage your magnets.`)),d&&eo(u),uo(`dash-funnel`,o.opens?Xa(o):no(`filter_alt`,`The funnel fills in once your magnets record opens.`));let f=a.top_campaigns||[];uo(`dash-campaigns`,f.length?`<div class="dash-list">${f.map(e=>`
        <a class="dash-list__row dash-list__row--link" href="#/leads" data-campaign="${ro(e.campaign)}" title="Show the leads from ${ro(e.campaign)}">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">campaign</span></span>
          <span class="dash-list__main">${ro(e.campaign)}</span>
          <span class="dash-list__num">${j(e.leads)}</span>
          <span class="dash-list__go material-symbols-outlined" aria-hidden="true">chevron_right</span>
        </a>`).join(``)}</div>`:no(`source`,`No tagged campaigns yet. Leads arriving with ?utm_campaign=… rank here.`));{let e=document.getElementById(`dash-campaigns`)?.querySelector(`.dash-list`);e&&E(e,{rowSelector:`.dash-list__row`,noun:`campaigns`})}let p={book:[`event`,`Book`],chat:[`chat`,`Chat`],call:[`phone_in_talk`,`Call`],email:[`mail`,`Email`],support:[`support_agent`,`Support`]},m=Object.entries(o.routes||{}).sort((e,t)=>t[1]-e[1]),h=m.length?m[0][1]:0;uo(`dash-routes`,m.length?`<div class="dash-funnel">${m.map(([e,t])=>{let[n,r]=p[e]||[`touch_app`,e];return`<div class="dash-funnel__row">
          <div class="dash-funnel__meta"><span class="dash-funnel__label"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px">${n}</span> ${ro(r)}</span><span class="dash-funnel__val">${j(t)}</span></div>
          <div class="dash-funnel__track"><div class="dash-funnel__bar" style="width:${h?Math.max(4,Math.round(t/h*100)):0}%"></div></div>
        </div>`}).join(``)}</div>`:no(`touch_app`,`CTA taps (Book, Chat, Call, Support) rank here once visitors use the action bar.`));let g={open:[`visibility`,`Magnet opened`],engage:[`touch_app`,`Visitor engaged`],route:[`alt_route`,`Picked a channel`],complete:[`check_circle`,`Completed: lead captured`]},_=a.recent_events||[];uo(`dash-interactions`,_.length?`<div class="dash-list">${_.map(e=>{let[t,n]=g[e.event]||[`sensors`,e.event];return`<div class="dash-list__row">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">${t}</span></span>
          <span class="dash-list__main">${n}${e.event===`route`&&e.detail?` · ${ro(e.detail)}`:``}</span>
          ${e.display_mode?`<span class="dash-list__mode">${ro(e.display_mode)}</span>`:``}
          <span class="dash-list__time">${ro(Ua(e.at))}</span>
        </div>`}).join(``)}</div>`:no(`sensors`,`No interactions yet. They'll stream in as visitors engage your magnets.`));{let e=document.getElementById(`dash-interactions`)?.querySelector(`.dash-list`);e&&E(e,{rowSelector:`.dash-list__row`,noun:`interactions`})}}function Ya(e){let t=document.getElementById(`dash-portfolio`);if(!t)return;if(!e.length){t.innerHTML=no(`groups`,`No client orgs yet. Create one under Clients to see its numbers here.`);return}let n=e.some(e=>e.ad),r=e=>{let t=(e.leads.this_week||0)-(e.leads.prev_week||0);return!e.leads.this_week&&!e.leads.prev_week?``:` <span class="${t>=0?`dc-delta-up`:`dc-delta-down`}">(${t>=0?`+`:``}${j(t)})</span>`};t.innerHTML=ca(e,[{h:`Magnets`,td:e=>`${j(e.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${j(e.magnets.total)}</span>`},{h:`Leads · wk`,td:e=>`${j(e.leads.this_week)}${r(e)}`},{h:`Leads · total`,td:e=>j(e.leads.total)},{h:`Opens`,td:e=>j(e.opens)},{h:`Compl.`,td:e=>e.completion_rate==null?`—`:`${e.completion_rate}%`},...e.some(e=>e.ab_tests?.running||e.ab_tests?.completed)?[{h:`A/B`,td:e=>e.ab_tests?.running?`${j(e.ab_tests.running)} <span class="dc-sub">running</span>`:e.ab_tests?.completed?`${j(e.ab_tests.completed)} <span class="dc-sub">done</span>`:`—`}]:[],...e.some(e=>e.booked)?[{h:`Booked`,td:e=>e.booked?j(e.booked):`—`}]:[],...e.some(e=>e.called)?[{h:`Called`,td:e=>e.called?j(e.called):`—`}]:[],...n?[{h:`Spend`,td:e=>e.ad?`$${j(e.ad.spend)}`:`—`},{h:`CPL`,td:e=>e.ad?.cost_per_lead==null?`—`:`$${j(e.ad.cost_per_lead)}`}]:[]]),ua(t)}function Xa(e){let t=[[`Opened`,e.opens,``],[`Engaged`,e.engaged,` dash-funnel__bar--mid`],[`Completed`,e.completions,` dash-funnel__bar--end`],...e.booked?[[`Booked`,e.booked,` dash-funnel__bar--end`]]:[],...e.called?[[`Called`,e.called,` dash-funnel__bar--end`]]:[]],n=Math.max(1,e.opens||0),r=e=>Math.min(100,Math.round((e||0)/n*100));return`<div class="dash-funnel">${t.map(([e,t,n])=>`
    <div class="dash-funnel__row">
      <div class="dash-funnel__meta">
        <span class="dash-funnel__label">${e}</span>
        <span class="dash-funnel__val">${j(t)} <span class="dash-funnel__pct">${r(t)}%</span></span>
      </div>
      <div class="dash-funnel__track"><div class="dash-funnel__bar${n}" style="width:${Math.max(2,r(t))}%"></div></div>
    </div>`).join(``)}</div>`}async function Za(e){let t=document.getElementById(`recent-leads-body`);if(t)try{let n=await fetch(`${e}/m5t/v5/m5mLead?limit=5`);if(!n.ok)throw Error(`HTTP ${n.status}`);let r=await n.json(),i=(Array.isArray(r?.data)?r.data:[]).filter(e=>![`DELETED`,`ARCHIVED`].includes(e.status));t.innerHTML=i.length?i.slice(0,5).map(Ga).join(``):no(`contacts`,`No leads captured yet. Publish a magnet to start collecting.`)}catch(e){console.warn(`[dashboard] Leads fetch failed:`,e),t.innerHTML=no(`error`,`Could not load recent leads.`)}}function Qa(e){return Na({rows:e,xLabel:e=>String(e.date||``).slice(5),left:{value:e=>e.opens||0,label:`Magnet Opens`},right:{value:e=>e.leads||0,label:`Leads`},ariaLabel:`Magnet opens versus leads over time`,activatable:e=>Number(e.leads||0)>0,pointLabel:e=>`${$a(e.date)}: ${j(e.opens||0)} opens, ${j(e.leads||0)} leads`,hitData:e=>({day:e.date,leads:Number(e.leads||0)})})}function $a(e){try{return new Date(`${e}T00:00:00`).toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})}catch{return e}}function eo(e){let t=document.getElementById(`dash-trend`);return t?Fa(t,{rows:e,tipHTML:e=>`
      <div class="m5c-tip__title">${$a(e.date)}</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--1"></i>${j(e.opens||0)} opens</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--2"></i>${j(e.leads||0)} leads</div>
      ${Number(e.leads||0)>0?`<div class="m5c-tip__go">Open these leads →</div>`:``}`,onActivate:e=>{Sa(Ta.LEADS_DAY,e.date),window.location.hash=`#/leads`}}):()=>{}}var to,no,ro,j,io,ao,oo,so,co,lo,uo,fo,po,mo=o((()=>{w(),xa(),Da(),Aa(),Ba(),sn(),to=[{h:`Magnets`},{h:`Leads · wk`},{h:`Leads · total`},{h:`Opens`},{h:`Compl.`}],no=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,ro=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),j=e=>Number(e||0).toLocaleString(),io=e=>[e.first_name,e.last_name].filter(Boolean).join(` `).trim()||e.email||`(no name)`,ao=e=>(io(e).split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``)||`?`).toUpperCase(),oo=!1,so=(e,t,n,{wide:r=!1,full:i=!1,controls:a=!1}={})=>`
  <div class="dashboard-card${r?` chart-card-wide`:``}${i?` chart-card-full`:``}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${e}</span> ${t}</h2>
      ${a?`<div class="chart-controls" id="dash-periods">
        <button class="chart-period-btn" type="button" data-days="7">7 Days</button>
        <button class="chart-period-btn active" type="button" data-days="30">30 Days</button>
      </div>`:``}
    </div>
    <div class="card-body" id="${n}">${no(`hourglass_empty`,`Loading…`)}</div>
  </div>`,co=30,lo=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)},uo=(e,t)=>{let n=document.getElementById(e);n&&(n.innerHTML=t)},fo=e=>e.toISOString().slice(0,10),po={render:Ka,init:qa}})),ho=c({init:()=>_o,render:()=>go});function go(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${er(`#/home`)}
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
          ${tr()}
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
  `}function _o(){console.log(`[SignoutRoute] Initialized`);let e=document.getElementById(`confirm-signout-btn`);e?.addEventListener(`click`,async()=>{e.disabled=!0,e.textContent=`SIGNING OUT...`,console.log(`[SignoutRoute] User confirmed signout`),await C.doSignout()})}var vo=o((()=>{w(),ar()})),yo=c({default:()=>wo,init:()=>So,render:()=>xo});function bo(){if(Co)return;let e=document.createElement(`style`);e.id=`m5t-section-page-styles`,e.textContent=`
    .section-page {
      min-height: 100%;   /* the scroll pane, not the viewport */
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
  `,document.head.appendChild(e),Co=!0}function xo({title:e=`Section`,icon:t=`widgets`,name:n=``}={}){return bo(),`
    <section class="section-page" data-section="${n}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${t}</span>
        <h1 class="section-page__title">${e}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired. Content lands next.</p>
      </div>
    </section>`}function So(){}var Co,wo,To=o((()=>{Co=!1,wo={render:xo,init:So}})),Eo=c({default:()=>Jo,init:()=>No,render:()=>Mo});function Do(){if(Ko)return;let e=document.createElement(`style`);e.id=`m5t-settings-general-styles`,e.textContent=`
    .page-shell[data-section="settings-general"] a.settings-link-card { padding: 18px 24px; }
    .page-shell[data-section="settings-general"] .settings-item__control .settings-select { width: auto; min-width: 190px; }
  `,document.head.appendChild(e),Ko=!0}function Oo(){try{return Ut.getAvailableLanguages()||[]}catch{return[]}}function ko(){let e=Oo(),t=e.includes(v.FF_SSE_I18N_LANG)?v.FF_SSE_I18N_LANG:e[0]||v.FF_SSE_I18N_LANG;try{let n=localStorage.getItem(v.FF_SSE_LS_USER_LANG);return n&&e.includes(n)?n:t}catch{return t}}function Ao(e){try{let t=new Intl.DisplayNames([e],{type:`language`}).of(e);if(t&&t!==e)return t.charAt(0).toUpperCase()+t.slice(1)}catch{}return e}function jo(){let e=En(),t=Oo(),n=t.length>1;if(!e&&!n)return``;let r=ko();return`
    <div class="dashboard-card" id="gen-appearance-card" style="margin-top:24px">
      <div class="card-body">
        <div class="settings-section__head">
          <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">palette</span></span>
          <div>
            <h2 class="settings-section__title">Appearance and language</h2>
            <p class="settings-section__desc">Theme and display language.</p>
          </div>
        </div>
        ${e?`
        <div class="settings-item" id="gen-dark-item">
          <div class="settings-item__info">
            <div class="settings-item__title">Dark mode</div>
            <div class="settings-item__desc">Off by default. Applies on this device.</div>
          </div>
          <div class="settings-item__control">
            <label class="m5t-switch">
              <input type="checkbox" role="switch" id="gen-dark" aria-label="Dark mode" ${Nn()===`dark`?`checked`:``} />
              <span class="m5t-switch__track" aria-hidden="true"></span>
            </label>
          </div>
        </div>`:``}
        ${n?`
        <div class="settings-item" id="gen-lang-item">
          <div class="settings-item__info">
            <div class="settings-item__title">Language</div>
          </div>
          <div class="settings-item__control">
            <select class="settings-select" id="gen-lang" aria-label="Language">
              ${t.map(e=>`<option value="${Vo(e)}" ${e===r?`selected`:``}>${Vo(Ao(e))}</option>`).join(``)}
            </select>
          </div>
        </div>`:``}
      </div>
    </div>`}function Mo(){return Do(),`
    <div class="page-shell" data-section="settings-general">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">General</h1>
          <p class="page-description">Your profile and preferences.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">person</span></span>
            <div>
              <h2 class="settings-section__title">Profile</h2>
              <p class="settings-section__desc">How you appear across Mach Five Magnet.</p>
            </div>
          </div>
          <div id="gen-profile-body">${qo(`hourglass_empty`,`Loading…`)}</div>
        </div>
      </div>

      ${jo()}

      <a class="dashboard-card settings-link-card" href="#/settings/security" style="margin-top:24px">
        <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">passkey</span></span>
        <div>
          <div class="settings-section__title">Sign-in and security</div>
          <p class="settings-section__desc">Password and passkeys.</p>
        </div>
        <span class="settings-link-card__go material-symbols-outlined" aria-hidden="true">chevron_right</span>
      </a>
    </div>`}async function No(){Ro(),await Fo()}function Po(e){return`
    <div class="settings-grid-2">
      <div class="settings-field">
        <label class="settings-label" for="gen-first">First name</label>
        <input class="settings-input" id="gen-first" type="text" autocomplete="given-name" value="${Vo(e.first)}" />
        <p class="settings-error" id="gen-first-error" role="alert" hidden></p>
      </div>
      <div class="settings-field">
        <label class="settings-label" for="gen-last">Last name</label>
        <input class="settings-input" id="gen-last" type="text" autocomplete="family-name" value="${Vo(e.last)}" />
        <p class="settings-error" id="gen-last-error" role="alert" hidden></p>
      </div>
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-company">Company</label>
      <input class="settings-input" id="gen-company" type="text" autocomplete="organization" value="${Vo(e.company)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-phone">Phone</label>
      <input class="settings-input" id="gen-phone" type="tel" autocomplete="tel" value="${Vo(e.phone)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-email">Sign-in email</label>
      <input class="settings-input" id="gen-email" type="email" value="${Vo(e.email)}" readonly />
      <p class="settings-help">Your sign-in email. Contact support to change it.</p>
    </div>
    <div class="settings-save-row">
      <button class="btn btn-primary" id="gen-save" type="button">Save</button>
    </div>`}async function Fo(){let e=document.getElementById(`gen-profile-body`);if(e){try{let e=await fetch(Wo()),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok||!t.data)throw Error(t.error||`Failed to load`);Go.profile=t.data}catch(t){console.warn(`[settings-general] profile load failed:`,t),e.innerHTML=qo(`error`,`Could not load your profile. Please try again.`);return}e.innerHTML=Po(Go.profile),e.querySelector(`#gen-save`)?.addEventListener(`click`,Lo)}}function Io(e,t){let n=document.getElementById(`${e}-error`);n&&(n.textContent=t||``,n.hidden=!t);let r=document.getElementById(e);r&&r.setAttribute(`aria-invalid`,t?`true`:`false`)}async function Lo(){let e=document.getElementById(`gen-save`),t=e=>(document.getElementById(e)?.value??``).trim(),n={first:t(`gen-first`),last:t(`gen-last`),company:t(`gen-company`),phone:t(`gen-phone`)};if(Io(`gen-first`,n.first?``:`First name is required.`),Io(`gen-last`,n.last?``:`Last name is required.`),!(!n.first||!n.last)){e&&(e.disabled=!0);try{let e=await fetch(Wo(),{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)}),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(t.error||`Could not save.`);t.data&&(Go.profile=t.data),Ho(`Profile updated.`,`success`)}catch(e){console.warn(`[settings-general] profile save failed:`,e),Ho(e.message||`Could not save.`,`error`)}finally{e&&(e.disabled=!1)}}}function Ro(){let e=document.getElementById(`gen-dark`);if(e){e.addEventListener(`change`,()=>{Pn(e.checked?`dark`:`light`),e.checked=Nn()===`dark`});let t=zo.default.subscribe(p.UI_THEME_CHANGED,()=>{if(!e.isConnected){zo.default.unsubscribe(t);return}e.checked=Nn()===`dark`})}let t=document.getElementById(`gen-lang`);t&&t.addEventListener(`change`,()=>{try{Ut.setLanguage(t.value)}catch(e){console.warn(`[settings-general] setLanguage failed:`,e)}})}var zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo=o((()=>{w(),zo=u(f(),1),m(),y(),Ln(),An(),Bo={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Vo=e=>String(e??``).replace(/[&<>"']/g,e=>Bo[e]),Ho=(e,t=`info`)=>{try{zo.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Uo=()=>C.getConfig?.().BASE_URL||``,Wo=()=>`${Uo()}/m5t/v5/acctEntity/profile`,Go={profile:null},Ko=!1,qo=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Jo={render:Mo,init:No}})),Xo=c({default:()=>Ts,init:()=>$o,render:()=>Qo});function Zo(){if(Ss)return;let e=document.createElement(`style`);e.id=`m5t-workspace-styles`,e.textContent=`
    .page-shell .ws-title-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .page-shell textarea.settings-input { resize: vertical; line-height: 1.5; }
    .page-shell .settings-save-row .settings-help { margin-right: auto; text-align: left; }
    .page-shell .ws-avatars { display: flex; align-items: center; margin-bottom: 10px; }
    .page-shell .ws-avatar {
      flex: 0 0 auto; width: 34px; height: 34px; border-radius: 50%;
      display: grid; place-items: center; font-size: 0.74rem; font-weight: 700;
      color: #fff; background: var(--color-primary-600, #0072BA);
      border: 2px solid var(--color-bg, #fff); margin-left: -8px;
    }
    .page-shell .ws-avatar:first-child { margin-left: 0; }
    .page-shell .ws-avatar--more { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .ws-counts { font-size: 0.84rem; color: var(--color-text-muted, #4A5A78); margin: 0; }
    .page-shell .ws-team-actions { margin-top: 14px; }
  `,document.head.appendChild(e),Ss=!0}function Qo(){Zo();let e=gs[bs()];return`
    <div class="page-shell" data-section="settings-workspace">
      <div class="page-header">
        <div class="page-header-text">
          <div class="ws-title-row">
            <h1 class="page-title">Workspace</h1>
            ${e?`<span class="m5t-chip">${ds(e)}</span>`:``}
          </div>
          <p class="page-description">Your organization's identity and team.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-body">
          ${ws(`apartment`,`Organization`,`Name and details.`)}
          <div id="ws-org-body">${Cs(`hourglass_empty`,`Loading…`)}</div>
        </div>
      </div>

      <div class="dashboard-card" id="ws-team-card" style="margin-top:24px; display:none">
        <div class="card-body">
          ${ws(`group`,`Team`,`Who has access.`)}
          <div id="ws-team-body"></div>
        </div>
      </div>
    </div>`}async function $o(){vs.org=null,await es(),await as()}async function es(){let e=document.getElementById(`ws-org-body`);if(!e)return;let t=ys();if(!t){e.innerHTML=Cs(`apartment`,`No workspace on this account yet.`);return}try{let e=await fetch(`${ps()}/m5t/v5/acctGroup`),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`Failed (HTTP ${e.status})`);if(vs.org=(n.data||[]).find(e=>e.guid===t)||null,!vs.org)throw Error(`Org row not in scope`)}catch(t){console.warn(`[settings-workspace] load failed:`,t),e.innerHTML=Cs(`error`,`Could not load your workspace. Please try again.`);return}ns()}function ts(){let e=gs[bs()]||``,t=vs.org?.created?.created_tz,n=``;if(t){let e=new Date(t);Number.isNaN(e.getTime())||(n=`Created ${e.toLocaleDateString()}`)}let r=[e,n].filter(Boolean);return r.length?`<p class="settings-help">${ds(r.join(` · `))}</p>`:``}function ns(){let e=document.getElementById(`ws-org-body`);if(!e)return;let t=vs.org||{};if(!xs()){let n=bs()===hs?`<div class="settings-note"><span class="material-symbols-outlined" aria-hidden="true">info</span> This workspace is managed for you.</div>`:``;e.innerHTML=`
      <div class="settings-item">
        <div class="settings-item__info">
          <div class="settings-item__title">Organization name</div>
          <div class="settings-item__desc">${ds(t.caption||`Not set`)}</div>
        </div>
      </div>
      <div class="settings-item">
        <div class="settings-item__info">
          <div class="settings-item__title">Description</div>
          <div class="settings-item__desc">${ds(t.description||`Not set`)}</div>
        </div>
      </div>
      ${n}
      <div style="margin-top:12px">${ts()}</div>`;return}e.innerHTML=`
    <div class="settings-field">
      <label class="settings-label" for="ws-name">Organization name</label>
      <input class="settings-input" id="ws-name" type="text" required value="${ds(t.caption||``)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="ws-desc">Description</label>
      <textarea class="settings-input" id="ws-desc" rows="2">${ds(t.description||``)}</textarea>
    </div>
    <p class="settings-error" id="ws-org-error"></p>
    <div class="settings-save-row">
      ${ts()}
      <button class="btn btn-primary" type="button" id="ws-save">Save</button>
    </div>`,document.getElementById(`ws-save`)?.addEventListener(`click`,rs)}async function rs(){let e=document.getElementById(`ws-save`),t=document.getElementById(`ws-org-error`),n=(document.getElementById(`ws-name`)?.value||``).trim(),r=(document.getElementById(`ws-desc`)?.value||``).trim();if(t&&(t.textContent=``),!n){t&&(t.textContent=`Organization name is required.`);return}e&&(e.disabled=!0);try{let e=await fetch(`${ps()}/m5t/v5/acctGroup/${encodeURIComponent(vs.org.id)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({caption:n,description:r})}),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(t.message||t.error||`Failed (HTTP ${e.status})`);vs.org={...vs.org,caption:n,description:r},fs(`Workspace updated.`,`success`)}catch(t){console.warn(`[settings-workspace] save failed:`,t),fs(t.message||`Could not save`,`danger`),e&&(e.disabled=!1);return}e&&(e.disabled=!1);try{await C.fetchScope?.()}catch(e){console.warn(`[settings-workspace] fetchScope after save failed:`,e)}}function is(){document.getElementById(`ws-team-card`)?.remove()}async function as(){let e=document.getElementById(`ws-team-card`);if(!e)return;let t=ys();if(!t||!xs()){is();return}let n=[],r=[];try{let[e,i]=await Promise.all([fetch(`${ps()}/m5t/v5/acctGroup/${encodeURIComponent(t)}/members`),fetch(`${ps()}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invites`)]);if(e.status===403||i.status===403){is();return}let[a,o]=await Promise.all([e.json().catch(()=>({})),i.json().catch(()=>({}))]);if(!e.ok||!i.ok)throw Error(`members: ${e.status}, invites: ${i.status}`);n=a.members||[],r=o.invites||[]}catch(t){console.warn(`[settings-workspace] team load failed:`,t),e.style.display=``;let n=document.getElementById(`ws-team-body`);n&&(n.innerHTML=Cs(`error`,`Could not load your team. Please try again.`));return}cs(n,r)}function os(e){if(!e.length)return``;let t=e.slice(0,_s),n=e.length-t.length;return`
    <div class="ws-avatars">
      ${t.map(e=>`<span class="ws-avatar" title="${ds(e.name||e.email)}">${ds(ms(e.name||e.email))}</span>`).join(``)}
      ${n>0?`<span class="ws-avatar ws-avatar--more">+${n}</span>`:``}
    </div>`}function ss(e,t){let n=`${e.length} member${e.length===1?``:`s`}`;return t.length?`${n} · ${t.length} pending invite${t.length===1?``:`s`}`:n}function cs(e,t){let n=document.getElementById(`ws-team-card`),r=document.getElementById(`ws-team-body`);if(!n||!r)return;n.style.display=``;let i=bs()!==hs;r.innerHTML=`
    ${os(e)}
    <p class="ws-counts">${ds(ss(e,t))}</p>
    ${i?`<div class="ws-team-actions"><a class="btn btn-secondary" href="#/team">Manage team</a></div>`:``}`}var ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es=o((()=>{w(),ls=u(f(),1),m(),us={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ds=e=>String(e??``).replace(/[&<>"']/g,e=>us[e]),fs=(e,t=`info`)=>{try{ls.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},ps=()=>C.getConfig?.().BASE_URL||``,ms=e=>String(e||`?`).trim().split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,hs=`managed_client`,gs={reseller_org:`Your organization`,managed_client:`Client workspace`,saas_org:`Organization`},_s=6,vs={org:null},ys=()=>C.getActiveOrg()?.guid||C.getMemberships()[0]?.orgGuid||null,bs=()=>C.getActiveOrg()?.channel||C.getMemberships()[0]?.channel||null,xs=()=>C.getCapabilities().includes(`manage_team`),Ss=!1,Cs=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,ws=(e,t,n)=>`
  <div class="settings-section__head">
    <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">${e}</span></span>
    <div>
      <h2 class="settings-section__title">${t}</h2>
      <p class="settings-section__desc">${n}</p>
    </div>
  </div>`,Ts={render:Qo,init:$o}})),Ds=c({default:()=>Zs,init:()=>As,render:()=>ks});function Os(){if(Ys)return;let e=document.createElement(`style`);e.id=`m5t-notif-styles`,e.textContent=`
    .page-shell .ntf-row { display: flex; gap: 16px; align-items: flex-start; padding: 16px 4px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); flex-wrap: wrap; }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .ntf-row[hidden] { display: none; }
    .page-shell .ntf-row:last-child { border-bottom: 0; }
    .page-shell .ntf-magnet { flex: 0 0 220px; min-width: 0; }
    .page-shell .ntf-name { font-weight: 600; font-size: 0.92rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .ntf-meta { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .ntf-state { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; margin-top: 8px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .ntf-state.on { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .ntf-state .material-symbols-outlined { font-size: 14px; }
    .page-shell .ntf-config { flex: 1 1 320px; min-width: 0; }
    .page-shell .ntf-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
    .page-shell .ntf-chip { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 600; padding: 5px 6px 5px 12px; border-radius: 999px; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }
    .page-shell .ntf-chip button { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1rem; line-height: 1; color: inherit; padding: 0 5px; border-radius: 50%; }
    .page-shell .ntf-chip button:hover { background: rgba(0,85,141,0.12); }
    .page-shell .ntf-none { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .page-shell .ntf-addrow { display: flex; gap: 8px; flex-wrap: wrap; }
    .page-shell .ntf-input { font: inherit; font-size: 0.84rem; padding: 7px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 240px; }
    .page-shell .ntf-input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .ntf-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
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
  `,document.head.appendChild(e),Ys=!0}function ks(){return Os(),oa(),k()?da({section:`settings-notifications`,title:`Notifications`,description:`Pick a client to manage their lead alerts.`}):`
    <div class="page-shell" data-section="settings-notifications">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Notifications</h1>
          <p class="page-description">Where your captured leads go.</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span></span>
            <div>
              <h2 class="settings-section__title">Lead alerts</h2>
              <p class="settings-section__desc">Email sent the moment a magnet captures a lead. Up to ${Gs} recipients per magnet.</p>
            </div>
          </div>
          <div id="ntf-body">${Xs(`hourglass_empty`,`Loading…`)}</div>
        </div>
      </div>
      <div class="dashboard-card" id="ntf-wh-card" style="margin-top:24px; display:none">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">webhook</span></span>
            <div>
              <h2 class="settings-section__title">Lead delivery webhook</h2>
              <p class="settings-section__desc">Captured and qualified leads are sent to this URL as JSON. Works with Zapier catch hooks and any CRM endpoint.</p>
            </div>
          </div>
          <div id="ntf-wh-body"></div>
        </div>
      </div>
    </div>`}async function As(){if(k()){let e=e=>Number(e||0).toLocaleString();return pa(Us(),[{h:`Magnets`,td:t=>`${e(t.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${e(t.magnets.total)}</span>`},{h:`Leads · wk`,td:t=>e(t.leads.this_week)}],{emptyMsg:`No client orgs yet. Create one under Clients first.`})}await Promise.all([Ps(),js()])}async function js(){let e=qs();if(!e||!Js()){Ks.webhookAllowed=!1;return}try{let t=await fetch(`${Us()}/m5t/v5/acctGroup/${encodeURIComponent(e)}/webhook`);if(t.status===403){Ks.webhookAllowed=!1;return}let n=await t.json().catch(()=>({}));if(!n.ok)return;Ks.webhook=n.webhook,Ns()}catch{}}function Ms(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function Ns(){let e=document.getElementById(`ntf-wh-card`),t=document.getElementById(`ntf-wh-body`);if(!e||!t)return;e.style.display=``;let n=Ks.webhook,r=n?.last_delivery;t.innerHTML=`
    <div class="ntf-wh">
      <div class="settings-field" style="margin-bottom:0">
        <label class="settings-label" for="ntf-wh-url">Webhook URL</label>
        <input class="ntf-input" id="ntf-wh-url" type="url" placeholder="https://hooks.zapier.com/hooks/catch/…" value="${Vs(n?.uri||``)}" />
      </div>
      <div class="settings-field" style="margin-bottom:0">
        <label class="settings-label" for="ntf-wh-secret">Signing secret</label>
        <input class="ntf-input" id="ntf-wh-secret" type="text" autocomplete="off" placeholder="${n?.has_secret?`Signing secret saved. Type to replace.`:`Optional`}" />
        <p class="settings-help">Sent as an HMAC signature header so your endpoint can verify deliveries.</p>
      </div>
      <div class="ntf-wh__row">
        <button class="ntf-btn" type="button" id="ntf-wh-save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save</button>
        <button class="ntf-btn" type="button" id="ntf-wh-test" ${n?.uri?``:`disabled`}><span class="material-symbols-outlined" aria-hidden="true">send</span> Send test</button>
        <span class="ntf-wh__status">${r?r.ok?`Last delivery: <span class="ok">delivered</span> ${Vs(Ms(r.tz))}`:`Last delivery: <span class="bad">failed</span> ${Vs(Ms(r.tz))} (${Vs(r.error||``)})`:``}</span>
      </div>
    </div>`,t.querySelector(`#ntf-wh-save`)?.addEventListener(`click`,async()=>{let e=t.querySelector(`#ntf-wh-url`)?.value.trim()||``,n=t.querySelector(`#ntf-wh-secret`)?.value??``,r={uri:e};n.trim()!==``&&(r.secret=n.trim());try{let t=await fetch(`${Us()}/m5t/v5/acctGroup/${encodeURIComponent(qs())}/webhook`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`Failed (HTTP ${t.status})`);Ks.webhook=n.webhook,Hs(e?`Webhook saved`:`Webhook removed`,`success`),Ns()}catch(e){Hs(e.message||`Could not save`,`danger`)}}),t.querySelector(`#ntf-wh-test`)?.addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0;try{let e=await fetch(`${Us()}/m5t/v5/acctGroup/${encodeURIComponent(qs())}/webhook-test`,{method:`POST`}),t=await e.json().catch(()=>({}));e.ok&&t.ok?Hs(`Test delivery sent`,`success`):Hs(t.error||`Could not deliver the test`,`danger`)}catch{Hs(`Could not deliver the test`,`danger`)}finally{t.disabled=!1}try{await js()}catch(e){console.warn(`[notifications] loadWebhook refresh failed:`,e)}})}async function Ps(){let e=document.getElementById(`ntf-body`);if(e){try{let e=await(await fetch(`${Us()}/m5t/v5/magnets`)).json().catch(()=>({}));if(!e.ok)throw Error(e.message||`Failed to load`);Ks.magnets=(e.magnets||[]).filter(e=>e.status!==`ARCHIVED`),Ks.canManage=!!e.canManage}catch(t){console.warn(`[notifications] load failed:`,t),e.innerHTML=Xs(`error`,`Could not load your magnets. Please try again.`);return}Is()}}function Fs(e){let t=Array.isArray(e.notify_emails)?e.notify_emails:[],n=t.length>0;return`
    <div class="ntf-row" data-guid="${Vs(e.guid)}">
      <div class="ntf-magnet">
        <div class="ntf-name" title="${Vs(e.name)}">${Vs(e.name)}</div>
        <div class="ntf-meta">${Vs((e.domains||[]).join(`, `)||e.status)}</div>
        <span class="ntf-state${n?` on`:``}">
          <span class="material-symbols-outlined" aria-hidden="true">${n?`notifications_active`:`notifications_off`}</span>
          ${n?`Alerts on · ${t.length}`:`Alerts off`}
        </span>
      </div>
      <div class="ntf-config">
        ${t.length?`<div class="ntf-chips">${t.map(e=>`
              <span class="ntf-chip">${Vs(e)}${Ks.canManage?`<button type="button" data-remove="${Vs(e)}" aria-label="Remove ${Vs(e)}">&times;</button>`:``}</span>`).join(``)}</div>`:`<div class="ntf-none">No alert emails.</div>`}
        ${Ks.canManage?`
        <div class="ntf-addrow">
          <input class="ntf-input" type="email" placeholder="name@business.com" aria-label="Add alert email" ${t.length>=Gs?`disabled`:``} />
          <button class="ntf-btn" type="button" data-add ${t.length>=Gs?`disabled`:``}>
            <span class="material-symbols-outlined" aria-hidden="true">add</span> Add
          </button>
        </div>`:``}
      </div>
      ${Ks.canManage?`
      <div class="ntf-actions">
        <button class="ntf-btn" type="button" data-test ${t.length?``:`disabled`} title="${t.length?`Send a sample alert to the emails above`:`Add an alert email first`}">
          <span class="material-symbols-outlined" aria-hidden="true">send</span> Send test
        </button>
      </div>`:``}
    </div>`}function Is(){let e=document.getElementById(`ntf-body`);if(e){if(!Ks.magnets.length){e.innerHTML=Xs(`widgets`,`No magnets yet. Create one under Your Magnets first.`);return}e.innerHTML=Ks.magnets.map(Fs).join(``),E(e,{rowSelector:`.ntf-row`,noun:`magnets`}),e.querySelectorAll(`.ntf-row`).forEach(e=>{let t=e.dataset.guid,n=e.querySelector(`.ntf-input`),r=()=>{let e=(n?.value||``).trim().toLowerCase();if(!e)return;if(!Ws(e)){Hs(`That does not look like an email address`,`danger`);return}let r=[...Ks.magnets.find(e=>e.guid===t).notify_emails||[]];if(r.includes(e)){Hs(`Already added`,`info`);return}if(r.length>=Gs){Hs(`Up to ${Gs} emails per magnet`,`info`);return}Ls(t,[...r,e])};e.querySelector(`[data-add]`)?.addEventListener(`click`,r),n?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),e.querySelectorAll(`[data-remove]`).forEach(e=>e.addEventListener(`click`,()=>{let n=Ks.magnets.find(e=>e.guid===t);Ls(t,(n.notify_emails||[]).filter(t=>t!==e.dataset.remove))})),e.querySelector(`[data-test]`)?.addEventListener(`click`,()=>Rs(t,e.querySelector(`[data-test]`)))})}}async function Ls(e,t){try{let n=await fetch(`${Us()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({notify_emails:t})}),r=await n.json().catch(()=>({}));if(!n.ok||!r.ok)throw Error(r.error||r.message||`Failed (HTTP ${n.status})`);let i=Ks.magnets.find(t=>t.guid===e);i&&(i.notify_emails=t),Hs(`Alert emails updated`,`success`)}catch(e){console.warn(`[notifications] save failed:`,e),Hs(e.message||`Could not save`,`danger`);return}try{Is()}catch(e){console.error(`[notifications] renderBody after save failed:`,e)}}async function Rs(e,t){t&&(t.disabled=!0);try{let t=await fetch(`${Us()}/m5t/v5/magnets/${encodeURIComponent(e)}/notify-test`,{method:`POST`}),n=await t.json().catch(()=>({}));t.ok&&n.ok?Hs(`Test alert sent`,`success`):Hs(n.error||`Could not send the test`,`danger`)}catch{Hs(`Could not send the test`,`danger`)}finally{t&&(t.disabled=!1)}}var zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs=o((()=>{w(),et(),zs=u(f(),1),m(),xa(),sn(),Bs={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Vs=e=>String(e??``).replace(/[&<>"']/g,e=>Bs[e]),Hs=(e,t=`info`)=>{try{zs.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Us=()=>C.getConfig?.().BASE_URL||``,Ws=e=>De(e),Gs=5,Ks={magnets:[],canManage:!1,webhook:null,webhookAllowed:!0},qs=()=>C.getActiveOrg()?.guid||C.getMemberships()[0]?.orgGuid||null,Js=()=>C.getCapabilities().includes(`manage_magnets`),Ys=!1,Xs=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Zs={render:ks,init:As}}));function $s({label:e=``,content:t=``,size:n=``,onClose:r=null}={}){let i=document.activeElement,a=document.createElement(`div`);a.className=`m5t-modal-scrim`,a.innerHTML=`
    <div class="m5t-modal${n===`wide`?` m5t-modal--wide`:``}" role="dialog" aria-modal="true" aria-label="${ec(e)}" tabindex="-1">
      <div class="m5t-modal__head">
        <h2 class="m5t-modal__title"></h2>
        <button type="button" class="m5t-modal__close" aria-label="Close">&times;</button>
      </div>
      <div class="m5t-modal__body"></div>
    </div>`,a.querySelector(`.m5t-modal__title`).textContent=e;let o=a.querySelector(`.m5t-modal`),s=a.querySelector(`.m5t-modal__body`);t instanceof Element?s.appendChild(t):s.innerHTML=String(t);let c=!1,l=e=>{if(c)return;c=!0,tc=Math.max(0,tc-1),document.removeEventListener(`keydown`,d,!0),a.classList.remove(`open`);let t=()=>{a.remove();try{i?.focus?.()}catch{}r&&r(e)};document.documentElement.classList.contains(`ff-no-animations`)||window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches?t():setTimeout(t,180)},u=e=>{for(let t=e;t&&t!==a;t=t.parentElement)if(t.hidden||t.style?.display===`none`||t.style?.visibility===`hidden`)return!1;return!0},d=e=>{if(e.key===`Escape`){e.stopPropagation(),l(void 0);return}if(e.key!==`Tab`||c)return;let t=[...o.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)].filter(u);if(!t.length){e.preventDefault(),o.focus();return}let n=t[0],r=t[t.length-1],i=document.activeElement;if(!o.contains(i)){e.preventDefault(),(e.shiftKey?r:n).focus();return}e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())};return a.addEventListener(`click`,e=>{e.target===a&&l(void 0)}),a.querySelector(`.m5t-modal__close`).addEventListener(`click`,()=>l(void 0)),document.addEventListener(`keydown`,d,!0),document.body.appendChild(a),tc++,o.contains(document.activeElement)||o.focus(),requestAnimationFrame(()=>a.classList.add(`open`)),{el:a,close:l}}function ec(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var tc,nc=o((()=>{tc=0}));function rc({title:e=`Are you sure?`,message:t=``,confirmLabel:n=`Confirm`,cancelLabel:r=`Cancel`,danger:i=!1}={}){return new Promise(a=>{let o=!1,s=e=>{o||(o=!0,a(e))},c=document.createElement(`div`);c.innerHTML=`
      ${t?`<p style="margin:0 0 4px">${ac(t)}</p>`:``}
      <div class="m5t-modal__foot" style="margin:16px -20px -18px; padding-left:20px; padding-right:20px">
        <button type="button" class="m5t-modal__btn" data-x="cancel">${ac(r)}</button>
        <button type="button" class="m5t-modal__btn ${i?`m5t-modal__btn--danger`:`m5t-modal__btn--primary`}" data-x="confirm">${ac(n)}</button>
      </div>`;let{close:l}=$s({label:e,content:c,onClose:()=>s(!1)});c.querySelector(`[data-x="cancel"]`).addEventListener(`click`,()=>{s(!1),l()}),c.querySelector(`[data-x="confirm"]`).addEventListener(`click`,()=>{s(!0),l()}),requestAnimationFrame(()=>c.querySelector(`[data-x="cancel"]`)?.focus())})}var ic,ac,oc=o((()=>{nc(),ic={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ac=e=>String(e??``).replace(/[&<>"']/g,e=>ic[e])})),sc,cc,lc,uc,dc,fc=o((()=>{sc={google_ads:{what:`See ad spend lined up next to the leads it generated, so you know which campaigns are actually working.`,steps:[`Click Connect and sign in with a Google account that has access to your Ads accounts.`,`Choose which ad accounts should feed reporting.`,`Metrics refresh automatically once a day. Click Sync now any time for an immediate pull.`]},calendly:{what:`Let visitors book directly from a magnet conversation, and get notified the moment they do.`,steps:[`Click Connect and authorize your Calendly account.`,`Turn on Calendly booking for any magnet’s Book action, under Magnets.`,`Confirmed and canceled bookings sync back to the lead automatically. Webhooks need a paid Calendly plan; a free plan still lets visitors book, just without the automatic lead sync.`]},callrail:{what:`Every tracked phone call becomes a lead automatically, complete with recording and source.`,steps:[`In CallRail, go to Integrations, then Data access, then API keys, and create a key. Read-only works for calls; Allow Writes lets us set up call sync automatically.`,`Paste the key here and pick the account and company this workspace tracks.`,`Calls start landing in your Leads inbox within minutes.`]},google_analytics:{what:`See how visitors reach your site and behave once they get there. Sessions, pageviews, and engagement, right alongside the leads your magnets capture.`,steps:[`Click Connect and sign in with a Google account that has access to your GA4 property.`,`Choose which GA4 properties should feed reporting.`,`See traffic beside your magnet leads under Analytics, then Traffic.`,`Metrics refresh automatically once a day. Click Sync now any time for an immediate pull.`]},hubspot:{what:`Every captured lead becomes a HubSpot contact automatically, with the magnet conversation on its timeline.`,steps:[`Click Connect and sign in to the HubSpot account this workspace should sync into.`,`New leads sync as contacts within minutes. Existing contacts are updated, never duplicated.`,`Optional: turn on qualified-lead sync to set the contact lifecycle stage when you qualify a lead.`]},zoho:{what:`Every captured lead lands in the Zoho CRM Leads module automatically, with the magnet conversation as a note.`,steps:[`Click Connect and sign in to the Zoho account this workspace should sync into.`,`New leads sync within minutes. Existing Zoho leads are updated by email, never duplicated.`,`Optional: turn on qualified-lead sync to set the Zoho lead status when you qualify a lead.`]},salesforce:{what:`Every captured lead becomes a Salesforce lead automatically, with the magnet conversation as a note on the record.`,steps:[`Click Connect and sign in to the Salesforce org this workspace should sync into.`,`New leads sync within minutes. Existing Salesforce leads are updated by email, never duplicated.`,`Qualified-lead sync sets the Salesforce lead status. If your org uses custom status values, set yours on this page.`]},ms_bookings:{what:`Visitors pick a real open time and book inside the magnet, straight onto your Microsoft Bookings calendar. Each booking is added to the lead, with the Teams meeting link included.`,steps:[`Click Connect and sign in with your Microsoft 365 work account.`,`Approve in-magnet booking on the Microsoft screen that follows. One-time, one click for a Microsoft 365 admin. It lets visitors book inside the magnet instead of on your Microsoft page.`,`Set any magnet Book button to a Bookings page, under Magnets.`,`Bookings sync to your leads every few minutes. Click Sync now for an immediate sync.`],shots:[{section:`intro`,file:`ms_bookings-scheduler.png`,alt:`A magnet showing real open times from Microsoft Bookings`,caption:`A visitor picks a real open time inside the magnet.`},{section:`setup`,file:`ms_bookings-steps.png`,alt:`The Microsoft Bookings integration page showing the three setup steps`,caption:`The integration page walks the setup, step by step.`},{section:`editor`,file:`ms_bookings-editor.png`,alt:`The magnet editor Book call-to-action set to a Microsoft Bookings page and service`,caption:`The Book call-to-action, set to a Bookings page and service.`}],editor:{title:`Turn it on in the magnet editor`,steps:[`Under Magnets, edit a magnet and open its Welcome and CTAs tab.`,`In the Call-to-action bar, check Book.`,`Set the Book source to Microsoft Bookings.`,`Pick your Bookings page, then pick a service. A service gives visitors the in-magnet scheduler with your real open times. Whole page opens your Microsoft page inside the magnet instead.`,`Save. Visitors who tap Book now pick a time and book without leaving the magnet, and the appointment lands on your Bookings calendar with a Teams link.`]}},gohighlevel:{what:`Every captured lead becomes a HighLevel contact automatically, with the conversation as a note and a tag your workflows can use.`,steps:[`In HighLevel, open the sub-account, go to Settings, then Private Integrations, and create a token with the contacts.write scope.`,`Copy the sub-account Location ID from Settings, then Business Profile.`,`Paste both here. Qualified leads get a tag your automations can trigger on.`]},calcom:{what:`Visitors book your Cal.com events from a magnet. Each booking is added to the lead. Works on every Cal.com plan, including free.`,steps:[`In Cal.com, go to Settings, then Developer, then API keys, and create a key.`,`Paste the key here. Booking sync is set up automatically.`,`Turn on Cal.com booking for any magnet, in the Book call-to-action under Magnets.`]}},cc={google_ads:{slug:`google_ads`,web:{copy:`Spend, clicks, and conversions show next to the leads they produced. Captured and qualified leads are sent back to Google Ads as conversions, so bidding optimizes toward real leads.`},urlSlug:`google-ads`,category:`advertising`,label:`Google Ads`,logo:`integrations/google-ads.svg`,connect:{fallbackError:`Could not start the Google connection.`},disconnect:{confirm:`Daily metric refreshes stop until reconnected.`,toast:`Google Ads disconnected.`},card:{tint:`primary`,icon:`ads_click`,sub:`Spend and clicks beside your leads.`,tile:`See ad spend and cost per lead.`,ids:{connect:`intg-g-connect`,choose:`intg-g-accounts`,sync:`intg-g-sync`,disconnect:`intg-g-disconnect`,panel:`intg-g-picker`},chooseLabel:`Choose accounts`,idleDesc:`Connect a Google account with access to your ad accounts. Spend and clicks show next to your magnet leads in Ad performance.`,brokenDesc:`The connection stopped working. Reconnect to resume daily metric refreshes.`,reachDesc:e=>`This connection can reach <b>${e}</b> ad account${e===1?``:`s`}. Choose which ones feed reporting; metrics refresh daily in Ad performance.`,noneDesc:`Connected, but no ad accounts are reachable from this Google account. Reconnect with an account that has Google Ads access.`,reachableCount:e=>e?.customer_ids?.length||0},picker:{path:`accounts`,itemsField:`accounts`,saveField:`customer_ids`,dataAttr:`intg-acct`,datasetKey:`intgAcct`,ids:{cancel:`intg-picker-cancel`,save:`intg-picker-save`},loading:`Loading your ad accounts…`,loadError:`Could not load your ad accounts. Try again, or reconnect if this keeps happening.`,heading:`Accounts that feed reporting`,emptyMsg:`No ad accounts are reachable from this Google account.`,namePrefix:`Account `,rowDisabled:e=>!!(e.manager||e.error),rowBadge:e=>e.manager?`Manager`:e.error?`Unavailable`:e.status&&e.status!==`ENABLED`?e.status[0]+e.status.slice(1).toLowerCase():e.via_manager?`Via MCC`:e.currency||``,savedToast:e=>`${e} account${e===1?``:`s`} linked. First sync is running.`,saveError:`Could not save account selection.`},sync:{itemsField:`accounts`,failedToast:e=>`Sync finished with ${e} account error${e===1?``:`s`}.`}},google_analytics:{slug:`google_analytics`,web:{copy:`Traffic and engagement from your GA4 property show next to your magnet leads.`},urlSlug:`google-analytics`,category:`analytics`,label:`Google Analytics`,logo:`integrations/google-analytics.svg`,connect:{fallbackError:`Could not start the Google Analytics connection.`},disconnect:{confirm:`Daily metric refreshes stop until reconnected.`,toast:`Google Analytics disconnected.`},card:{tint:`success`,icon:`monitoring`,sub:`Traffic and engagement beside your leads.`,tile:`See site traffic and engagement.`,ids:{connect:`intg-a-connect`,choose:`intg-a-properties`,sync:`intg-a-sync`,disconnect:`intg-a-disconnect`,panel:`intg-a-picker`},chooseLabel:`Choose properties`,idleDesc:`Connect a Google account with access to your GA4 property. Traffic and engagement show next to your magnet leads.`,brokenDesc:`The connection stopped working. Reconnect to resume daily metric refreshes.`,reachDesc:e=>`This connection can reach <b>${e}</b> GA4 propert${e===1?`y`:`ies`}. Choose which ones feed reporting; metrics refresh daily.`,noneDesc:`Connected, but no GA4 properties are reachable from this Google account. Reconnect with an account that has Analytics access.`,reachableCount:e=>e?.properties?.length||0},picker:{path:`properties`,itemsField:`properties`,saveField:`property_ids`,dataAttr:`intg-prop`,datasetKey:`intgProp`,ids:{cancel:`intg-a-picker-cancel`,save:`intg-a-picker-save`},loading:`Loading your GA4 properties…`,loadError:`Could not load your GA4 properties. Try again, or reconnect if this keeps happening.`,heading:`Properties that feed reporting`,emptyMsg:`No GA4 properties are reachable from this Google account.`,namePrefix:`Property `,rowDisabled:()=>!1,rowBadge:e=>e.account||``,savedToast:e=>`${e} propert${e===1?`y`:`ies`} linked. First sync is running.`,saveError:`Could not save property selection.`},sync:{itemsField:`properties`,failedToast:e=>`Sync finished with ${e} property error${e===1?``:`s`}.`}},calendly:{slug:`calendly`,web:{copy:`Visitors book your Calendly events from the magnet Book button. Confirmed, rescheduled, and canceled bookings update the lead.`},urlSlug:`calendly`,category:`scheduling`,label:`Calendly`,logo:`integrations/calendly.svg`,connect:{fallbackError:`Could not start the Calendly connection.`},disconnect:{confirm:`Magnet booking falls back to the built-in scheduler and booking sync stops.`,toast:`Calendly disconnected.`},card:{tint:`accent`,icon:`event`,sub:`Bookings on your magnets.`,tile:`Visitors book your Calendly events.`,ids:{connect:`intg-c-connect`,disconnect:`intg-c-disconnect`},idleDesc:`Visitors book your Calendly events from the magnet Book button. Each booking is added to the lead.`,brokenDesc:`The connection stopped working. Reconnect to resume booking sync.`}},hubspot:{slug:`hubspot`,web:{copy:`Each captured lead becomes a HubSpot contact, with the conversation saved as a note. Qualified leads update the lifecycle stage.`},urlSlug:`hubspot`,category:`crm`,label:`HubSpot`,logo:`integrations/hubspot.svg`,connect:{fallbackError:`Could not start the HubSpot connection.`},disconnect:{confirm:`New leads stop syncing to HubSpot until reconnected.`,toast:`HubSpot disconnected.`},card:{tint:`accent`,icon:`hub`,sub:`Leads into your CRM.`,tile:`Leads sync to HubSpot as contacts.`,ids:{connect:`intg-h-connect`,sync:`intg-h-sync`,disconnect:`intg-h-disconnect`},idleDesc:`Each captured lead becomes a HubSpot contact, with the conversation saved as a note. Qualified leads update the lifecycle stage.`,brokenDesc:`The connection stopped working. Reconnect to resume lead sync.`},crm:{syncDesc:`Captured leads become contacts, with the conversation as a note on the timeline. Sync runs every few minutes.`,qualifiedToggle:`Set the lifecycle stage when a lead is qualified`,countLabels:{contact:`Contacts`,qualified:`Qualified leads`}}},salesforce:{slug:`salesforce`,web:{copy:`Each captured lead becomes a Salesforce lead, with the conversation saved as a note. Qualified leads update the Salesforce lead status.`},urlSlug:`salesforce`,category:`crm`,label:`Salesforce`,logo:`integrations/salesforce.svg`,connect:{fallbackError:`Could not start the Salesforce connection.`},disconnect:{confirm:`New leads stop syncing to Salesforce until reconnected.`,toast:`Salesforce disconnected.`},card:{tint:`primary`,icon:`cloud_sync`,sub:`Leads into your CRM.`,tile:`Leads sync to Salesforce.`,ids:{connect:`intg-sf-connect`,sync:`intg-sf-sync`,disconnect:`intg-sf-disconnect`},idleDesc:`Each captured lead becomes a Salesforce lead, with the conversation saved as a note. Qualified leads update the Salesforce lead status.`,brokenDesc:`The connection stopped working. Reconnect to resume lead sync.`},crm:{syncDesc:`Captured leads become Salesforce leads, with the conversation as a note. Sync runs every few minutes.`,qualifiedToggle:`Set the Salesforce lead status when a lead is qualified`,countLabels:{contact:`Leads`,qualified:`Qualified leads`}}},zoho:{slug:`zoho`,web:{copy:`Each captured lead becomes a Zoho CRM lead, with the conversation saved as a note. Qualified leads update the Zoho lead status.`},urlSlug:`zoho`,category:`crm`,label:`Zoho CRM`,logo:`integrations/zoho.svg`,connect:{fallbackError:`Could not start the Zoho connection.`},disconnect:{confirm:`New leads stop syncing to Zoho CRM until reconnected.`,toast:`Zoho CRM disconnected.`},card:{tint:`primary`,icon:`contact_page`,sub:`Leads into your CRM.`,tile:`Leads sync to the Zoho Leads module.`,ids:{connect:`intg-z-connect`,sync:`intg-z-sync`,disconnect:`intg-z-disconnect`},idleDesc:`Each captured lead becomes a Zoho CRM lead, with the conversation saved as a note. Qualified leads update the Zoho lead status.`,brokenDesc:`The connection stopped working. Reconnect to resume lead sync.`},crm:{syncDesc:`Captured leads land in the Zoho Leads module, with the conversation as a note. Sync runs every few minutes.`,qualifiedToggle:`Set the Zoho lead status to Qualified when you qualify a lead`,countLabels:{contact:`Leads`,qualified:`Qualified leads`}}},ms_bookings:{slug:`ms_bookings`,web:{copy:`Visitors pick a real open time and book inside the magnet, no Microsoft page. Each booking is added to the lead, with the Teams meeting link included.`},urlSlug:`microsoft-bookings`,category:`scheduling`,label:`Microsoft Bookings`,logo:`integrations/microsoft-bookings.svg`,connect:{fallbackError:`Could not start the Microsoft connection.`},disconnect:{confirm:`Bookings stop syncing to your leads until reconnected.`,toast:`Microsoft Bookings disconnected.`},card:{tint:`info`,icon:`event_note`,sub:`Teams meetings on your magnets.`,tile:`Visitors book through your Bookings page.`,ids:{connect:`intg-mb-connect`,sync:`intg-mb-sync`,disconnect:`intg-mb-disconnect`},idleDesc:`Connect your Microsoft 365 work account. Each booking is added to the lead, with the Teams meeting link included.`,brokenDesc:`The connection stopped working. Reconnect to resume booking sync.`}},gohighlevel:{slug:`gohighlevel`,web:{copy:`Each captured lead becomes a HighLevel contact, with the conversation saved as a note. Qualified leads get a tag your automations can use.`},urlSlug:`gohighlevel`,category:`crm`,label:`HighLevel`,logo:`integrations/gohighlevel.svg`,disconnect:{confirm:`New leads stop syncing to HighLevel until reconnected.`,toast:`HighLevel disconnected.`},card:{tint:`accent`,icon:`device_hub`,sub:`Leads into your CRM.`,tile:`Leads sync to HighLevel as contacts.`,ids:{connect:`intg-gh-connect`,sync:`intg-gh-sync`,disconnect:`intg-gh-disconnect`,setup:`intg-gh-setup`},idleDesc:`Each captured lead becomes a HighLevel contact, with the conversation saved as a note. Qualified leads get a tag your automations can use.`,brokenDesc:`The connection stopped working. Reconnect with a current private integration token.`},crm:{syncDesc:`Captured leads become HighLevel contacts, with the conversation as a note. Qualified leads get a tag your automations can trigger on. Sync runs every few minutes.`,qualifiedToggle:`Tag the HighLevel contact when a lead is qualified`,countLabels:{contact:`Contacts`,qualified:`Qualified leads`}}},calcom:{slug:`calcom`,web:{copy:`Visitors book your Cal.com events from the magnet Book button. Works on every Cal.com plan, including free.`},urlSlug:`calcom`,category:`scheduling`,label:`Cal.com`,logo:`integrations/calcom.svg`,disconnect:{confirm:`Magnet booking falls back to the built-in scheduler and booking sync stops.`,toast:`Cal.com disconnected.`},card:{tint:`success`,icon:`event_available`,sub:`Bookings on your magnets.`,tile:`Visitors book your Cal.com events.`,ids:{connect:`intg-cc-connect`,disconnect:`intg-cc-disconnect`,setup:`intg-cc-setup`},idleDesc:`Visitors book your Cal.com events from the magnet Book button. Each booking is added to the lead. Works on every Cal.com plan.`,brokenDesc:`The connection stopped working. Reconnect with a current Cal.com API key.`}},callrail:{slug:`callrail`,web:{copy:`Tracked calls appear in your leads inbox with the caller, source, and recording. Calls that match an ad click are sent to Google Ads as conversions.`},urlSlug:`callrail`,category:`calls`,label:`CallRail`,logo:`integrations/callrail.svg`,disconnect:{confirm:`Calls stop landing in your Leads inbox.`,toast:`CallRail disconnected.`},card:{tint:`info`,icon:`call`,sub:`Calls in your leads inbox.`,tile:`Tracked phone calls become leads.`,ids:{connect:`intg-r-connect`,sync:`intg-r-sync`,disconnect:`intg-r-disconnect`,setup:`intg-r-setup`},idleDesc:`Paste a CallRail API key. Tracked calls appear in your Leads inbox with the caller, source, and recording.`,brokenDesc:`The connection stopped working. Reconnect with a current CallRail API key.`}}},lc=[{key:`crm`,title:`CRM`,intro:`Send captured leads to the CRM your team uses.`},{key:`scheduling`,title:`Scheduling`,intro:`Let visitors book meetings from a magnet.`},{key:`advertising`,title:`Advertising`,intro:`See what your ads produce.`},{key:`analytics`,title:`Analytics`,intro:`See how visitors reach your site.`},{key:`calls`,title:`Call Tracking`,intro:`Turn tracked phone calls into leads.`},{key:`automation`,title:`Automation`,intro:`Send leads anywhere else.`}],uc=[{label:`Webhook and Zapier`,logo:`integrations/zapier.svg`,icon:`bolt`,sub:`Leads to any endpoint.`,tile:`Send every lead to Zapier or your own URL.`,href:`#/settings/notifications`}],dc=new Set([`salesforce`,`zoho`,`calcom`])}));function pc(e){Bc=e}function mc(){let e=Bc;return Bc=null,e}function hc(e,{size:t=``}={}){return`
    <span class="intg-mark${t?` intg-mark--${t}`:``}${dc.has(e.slug)?` intg-mark--wide`:``}">
      <img class="intg-logo" src="${M(e.logo)}" alt="" loading="lazy"
           onerror="this.style.display='none';this.parentElement.querySelector('.intg-logo-fallback').style.display=''">
      <span class="material-symbols-outlined intg-logo-fallback" aria-hidden="true" style="display:none">${e.card.icon}</span>
    </span>`}function gc(e,t){let n=Ic(),r=e?.[t]||[];return r.find(e=>e.owner_guid===n)||r[0]||null}function _c(e,t,n){return e.connect&&!n?`unavailable`:t?t.connect_status===`ACTIVE`?`connected`:`broken`:`idle`}function vc(e,t){return e===`unavailable`?`<span class="intg-state">Not available yet</span>`:e===`idle`?`<span class="intg-state">Not connected</span>`:e===`connected`?`<span class="intg-state on"><span class="material-symbols-outlined" aria-hidden="true">check</span>Connected</span>`:`<span class="intg-state warn"><span class="material-symbols-outlined" aria-hidden="true">priority_high</span>${M(t?.connect_status===`NEEDS_REAUTH`?`Reconnect needed`:`Connection error`)}</span>`}async function yc(){let e=await fetch(`${P()}/m5t/v5/integrations`);if(e.status===403)return{denied:!0};let t=await e.json();if(!t.ok)throw Error(t.error||`load failed`);return{providers:t.data.providers,configured:t.data.configured}}async function bc(e){if(!zc.busy){zc.busy=!0;try{let t=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/connect`)).json();if(!t.ok||!t.data?.url)throw Error(t.error||`connect failed`);window.location.href=t.data.url}catch(t){N(t.message||e.connect.fallbackError,`error`),zc.busy=!1}}}async function xc(e,{refresh:t}={}){if(zc.busy)return;zc.busy=!0;let n=document.getElementById(e.card.ids.sync);n&&(n.disabled=!0);try{let t=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/sync`,{method:`POST`})).json();if(!t.ok)throw Error(t.error||`sync failed`);let n=(t.data?.connections?.[0]?.[e.sync.itemsField]||[]).filter(e=>e.error).length;N(n?e.sync.failedToast(n):`Metrics synced.`,n?`warning`:`success`)}catch{N(`Sync failed.`,`error`)}finally{zc.busy=!1,n&&(n.disabled=!1),t?.()}}async function Sc(e,{refresh:t}={}){if(zc.busy)return;zc.busy=!0;let n=!1;try{n=await rc({title:`Disconnect ${e.label}?`,message:e.disconnect.confirm,confirmLabel:`Disconnect`,danger:!0})}finally{n||(zc.busy=!1)}if(n)try{let t=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}`,{method:`DELETE`})).json().catch(()=>({}));if(!t.ok)throw Error(t.error||`disconnect failed`);N(e.disconnect.toast,`success`)}catch{N(`Disconnect failed.`,`error`)}finally{zc.busy=!1,t?.()}}async function Cc(e,{refresh:t}={}){let n=e.picker,r=document.getElementById(e.card.ids.panel);if(r){r.style.display=``,r.innerHTML=F(n.loading);try{let r=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/${n.path}`)).json();if(!r.ok)throw Error(r.error||`load failed`);wc(e,r.data[n.itemsField]||[],new Set(r.data.linked||[]),{refresh:t})}catch{r.innerHTML=F(n.loadError,`error`)}}}function wc(e,t,n,{refresh:r}={}){let i=e.picker,a=document.getElementById(e.card.ids.panel);if(!a)return;let o=t.map(e=>{let t=i.rowDisabled(e),r=i.rowBadge(e),a=n.has(e.id)&&!t;return`
      <label class="intg-acct${t?` disabled`:``}">
        <input type="checkbox" data-${i.dataAttr}="${M(e.id)}" ${a?`checked`:``} ${t?`disabled`:``}>
        <span style="min-width:0">
          <span class="intg-acct__name">${M(e.name||i.namePrefix+e.id)}</span>
          <div class="intg-acct__id">${M(e.id)}</div>
        </span>
        ${r?`<span class="intg-acct__badge">${M(r)}</span>`:`<span></span>`}
      </label>`}).join(``);a.innerHTML=`
    <div class="intg-picker">
      <div class="intg-picker__head">
        <span>${i.heading}</span>
        <span style="font-weight:500">${t.filter(e=>!i.rowDisabled(e)).length} selectable</span>
      </div>
      <div class="intg-picker__list">
        ${o||`<div class="intg-picker__empty">${i.emptyMsg}</div>`}
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="${i.ids.cancel}">Cancel</button>
        <button type="button" class="intg-btn primary" id="${i.ids.save}"><span class="material-symbols-outlined" aria-hidden="true">save</span>Save</button>
      </div>
    </div>`,document.getElementById(i.ids.cancel)?.addEventListener(`click`,()=>{a.style.display=`none`}),document.getElementById(i.ids.save)?.addEventListener(`click`,()=>Tc(e,{refresh:r}))}async function Tc(e,{refresh:t}={}){let n=e.picker,r=document.getElementById(e.card.ids.panel),i=[...r?.querySelectorAll(`input[data-${n.dataAttr}]:checked`)||[]].map(e=>e.dataset[n.datasetKey]),a=document.getElementById(n.ids.save);a&&(a.disabled=!0);try{let a=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/${n.path}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({[n.saveField]:i})})).json();if(!a.ok)throw Error(a.error||`save failed`);N(n.savedToast(a.data.linked),`success`),r&&(r.style.display=`none`),t?.()}catch{N(n.saveError,`error`),a&&(a.disabled=!1)}}function Ec({refresh:e}={}){let t=document.getElementById(cc.gohighlevel.card.ids.setup);if(!t)return;t.style.display=``,t.innerHTML=`
    <div class="intg-picker">
      <div class="intg-picker__head"><span>Connect HighLevel</span></div>
      <div class="intg-form">
        <div>
          <label for="intg-gh-token">Private integration token</label>
          <input class="intg-input" id="intg-gh-token" type="password" autocomplete="off" spellcheck="false" placeholder="pit-...">
          <p class="intg-hint">Create one in the sub-account under Settings, then Private Integrations, with the contacts.write scope.</p>
        </div>
        <div>
          <label for="intg-gh-location">Location ID</label>
          <input class="intg-input" id="intg-gh-location" type="text" autocomplete="off" spellcheck="false" placeholder="The sub-account Location ID">
          <p class="intg-hint">Copy it from the sub-account under Settings, then Business Profile.</p>
        </div>
        <p class="intg-hint" id="intg-gh-status" role="status"></p>
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="intg-gh-cancel">Cancel</button>
        <button type="button" class="intg-btn primary" id="intg-gh-save">Connect</button>
      </div>
    </div>`;let n=e=>{let t=document.getElementById(`intg-gh-status`);t&&(t.textContent=e)};document.getElementById(`intg-gh-cancel`)?.addEventListener(`click`,()=>{t.style.display=`none`}),document.getElementById(`intg-gh-save`)?.addEventListener(`click`,async()=>{let r=document.getElementById(`intg-gh-save`),i=document.getElementById(`intg-gh-token`)?.value.trim()||``,a=document.getElementById(`intg-gh-location`)?.value.trim()||``;if(!i||!a){n(`Paste the token and the Location ID first.`);return}r.disabled=!0,n(`Checking with HighLevel…`);try{let n=await(await fetch(`${P()}/m5t/v5/integrations/gohighlevel/connect`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:i,location_id:a})})).json().catch(()=>({}));if(!n.ok)throw Error(n.error||`Could not connect HighLevel.`);N(`HighLevel connected${n.data.location_name?` to ${n.data.location_name}`:``}.`,`success`),t.style.display=`none`,e?.()}catch(e){n(e.message||`Could not connect HighLevel.`),r.disabled=!1}}),document.getElementById(`intg-gh-token`)?.focus()}function Dc({refresh:e}={}){let t=document.getElementById(cc.calcom.card.ids.setup);if(!t)return;t.style.display=``,t.innerHTML=`
    <div class="intg-picker">
      <div class="intg-picker__head"><span>Connect Cal.com</span></div>
      <div class="intg-form">
        <div>
          <label for="intg-cc-key">API key</label>
          <input class="intg-input" id="intg-cc-key" type="password" autocomplete="off" spellcheck="false" placeholder="cal_live_...">
          <p class="intg-hint">Create one in Cal.com under Settings, then Developer, then API keys.</p>
        </div>
        <p class="intg-hint" id="intg-cc-status" role="status"></p>
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="intg-cc-cancel">Cancel</button>
        <button type="button" class="intg-btn primary" id="intg-cc-save">Connect</button>
      </div>
    </div>`;let n=e=>{let t=document.getElementById(`intg-cc-status`);t&&(t.textContent=e)};document.getElementById(`intg-cc-cancel`)?.addEventListener(`click`,()=>{t.style.display=`none`}),document.getElementById(`intg-cc-save`)?.addEventListener(`click`,async()=>{let r=document.getElementById(`intg-cc-save`),i=document.getElementById(`intg-cc-key`)?.value.trim()||``;if(!i){n(`Paste an API key first.`);return}r.disabled=!0,n(`Checking the key with Cal.com…`);try{let n=await(await fetch(`${P()}/m5t/v5/integrations/calcom/connect`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:i})})).json().catch(()=>({}));if(!n.ok)throw Error(n.error||`Could not connect Cal.com.`);N(`Cal.com connected as ${n.data.username||`your account`}.`,`success`),t.style.display=`none`,e?.()}catch(e){n(e.message||`Could not connect Cal.com.`),r.disabled=!1}}),document.getElementById(`intg-cc-key`)?.focus()}function Oc({refresh:e,replaceKey:t=!1}={}){let n=document.getElementById(cc.callrail.card.ids.setup);n&&(n.style.display=``,n.innerHTML=`
    <div class="intg-picker">
      <div class="intg-picker__head"><span>${t?`Replace API key`:`Connect CallRail`}</span></div>
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
    </div>`,document.getElementById(`intg-r-cancel`)?.addEventListener(`click`,()=>{n.style.display=`none`}),document.getElementById(`intg-r-continue`)?.addEventListener(`click`,()=>kc({refresh:e})),document.getElementById(`intg-r-key`)?.focus())}async function kc({refresh:e}={}){let t=document.getElementById(`intg-r-continue`),n=document.getElementById(`intg-r-key`)?.value.trim()||``,r=document.getElementById(`intg-r-pickers`);if(!n){Hc(`Paste an API key first.`);return}if(r&&!r.hidden)return jc(n,{refresh:e});t&&(t.disabled=!0),Hc(`Checking the key with CallRail…`);try{let e=await(await fetch(`${P()}/m5t/v5/integrations/callrail/validate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:n})})).json();if(!e.ok){Hc(e.error||`CallRail rejected that key.`);return}let i=e.data.accounts||[],a=document.getElementById(`intg-r-account`);a&&(a.innerHTML=i.map(e=>`<option value="${M(e.id)}">${M(e.name)}</option>`).join(``),a.onchange=()=>Ac(n,a.value)),r&&(r.hidden=!1),t&&(t.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">save</span>Save`),Hc(``),await Ac(n,i[0]?.id)}catch{Hc(`Could not reach CallRail. Try again.`)}finally{t&&(t.disabled=!1)}}async function Ac(e,t){let n=document.getElementById(`intg-r-company`);if(!(!n||!t)){n.innerHTML=`<option value="">Loading companies…</option>`;try{let r=await(await fetch(`${P()}/m5t/v5/integrations/callrail/companies`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:e,account_id:t})})).json(),i=r.ok&&r.data.companies||[];n.innerHTML=i.length?i.map(e=>`<option value="${M(e.id)}">${M(e.name)}</option>`).join(``):`<option value="">No active companies in this account</option>`}catch{n.innerHTML=`<option value="">Could not load companies</option>`}}}async function jc(e,{refresh:t}={}){let n=document.getElementById(`intg-r-continue`),r=document.getElementById(`intg-r-account`)?.value||``,i=document.getElementById(`intg-r-company`)?.value||``;if(!i){Hc(`Pick the company this workspace tracks.`);return}n&&(n.disabled=!0),Hc(`Connecting…`);try{let n=await(await fetch(`${P()}/m5t/v5/integrations/callrail`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:e,account_id:r,company_id:i})})).json();if(!n.ok)throw Error(n.error||`connect failed`);N(n.data?.webhook_state===`active`?`CallRail connected. Call sync is on.`:`CallRail connected. Call sync setup needs attention; see below.`,`success`),t?.()}catch{Hc(`Could not connect. Check the key and try again.`),n&&(n.disabled=!1)}}async function Mc({refresh:e}={}){if(zc.busy)return;zc.busy=!0;let t=document.getElementById(cc.callrail.card.ids.sync);t&&(t.disabled=!0);try{let e=await(await fetch(`${P()}/m5t/v5/integrations/callrail/sync?days=7`,{method:`POST`})).json();if(!e.ok)throw Error(e.error||`sync failed`);let t=e.data?.connections?.[0]||{};N(t.error?`Sync finished with errors.`:`Sync done. ${t.processed||0} new call${(t.processed||0)===1?``:`s`} recorded.`,t.error?`warning`:`success`)}catch{N(`Sync failed.`,`error`)}finally{zc.busy=!1,t&&(t.disabled=!1),e?.()}}function Nc(){if(Uc)return;let e=document.createElement(`style`);e.id=`m5t-intg-styles`,e.textContent=`
    /* ── shared marks / pills / buttons / alerts ── */
    /* Brand marks sit on a neutral white chip - marks are designed for white,
       and a tinted background fought every logo's own colors. */
    .page-shell .intg-mark { position: relative; width: 62px; height: 62px; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; background: #fff; border: 1px solid var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); flex: 0 0 auto; }
    .page-shell .intg-mark .material-symbols-outlined { font-size: 30px; }
    .page-shell .intg-mark--hero { width: 74px; height: 74px; border-radius: 16px; }
    .page-shell .intg-logo { width: 64%; height: 64%; object-fit: contain; display: block; }
    /* Wide marks (wordmark shapes) fill more of the chip or they turn illegible. */
    .page-shell .intg-mark--wide .intg-logo { width: 82%; height: 82%; }
    .page-shell .intg-state { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.02em; padding: 6px 14px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); white-space: nowrap; }
    /* Connected/broken are SOLID fills - status is the loudest thing on the
       card by design. The -text tokens are the fills (dark enough for white
       text); the -soft versions failed to stand out. */
    .page-shell .intg-state.on { background: var(--color-success-text, #006B54); color: #fff; }
    .page-shell .intg-state.warn { background: var(--color-warning-text, #92400E); color: #fff; }
    .page-shell .intg-state .material-symbols-outlined { font-size: 16px; }
    .page-shell .intg-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
    .page-shell .intg-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .intg-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .intg-btn.primary { background: var(--color-primary-600, #0072BA); border-color: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .intg-btn.primary:hover { background: var(--color-primary-700, #00558D); }
    .page-shell .intg-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .intg-btn .material-symbols-outlined { font-size: 16px; }
    .page-shell .intg-alert { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 10px 14px; border-radius: 10px; font-size: 0.82rem; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); max-width: 640px; }
    .page-shell .intg-alert.error { background: var(--color-danger-soft, #FDF1EE); border-color: var(--color-danger, #DD4124); color: var(--color-danger, #DD4124); }
    .page-shell .intg-alert .material-symbols-outlined { font-size: 17px; flex: 0 0 auto; }

    /* ── hub tiles ── */
    .page-shell .intg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 20px; }
    /* Card chrome on .intg-tile (coming-soon tiles are <div>s, not anchors);
       interactive affordances stay qualified to a.intg-tile. */
    .page-shell .intg-tile { display: flex; flex-direction: column; gap: 14px; padding: 24px; text-decoration: none; color: inherit; background: var(--color-bg, #fff); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 12px); box-shadow: var(--shadow-sm, 0 1px 2px rgba(11,18,32,0.06)); }
    .page-shell a.intg-tile { transition: box-shadow .15s ease, border-color .15s ease, transform .15s ease; }
    .page-shell a.intg-tile:hover { border-color: var(--color-accent-muted, #7BB7FF); box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); transform: translateY(-2px); }
    .page-shell a.intg-tile:focus-visible { outline: none; box-shadow: var(--focus-ring, 0 0 0 3px rgba(0,114,186,0.30)); }
    .page-shell .intg-tile__head { display: flex; align-items: center; gap: 14px; }
    .page-shell .intg-tile__titles { min-width: 0; }
    .page-shell .intg-tile__name { font-weight: 700; font-size: 1.08rem; color: var(--color-text, #0B1220); }
    .page-shell .intg-tile__sub { font-size: 0.84rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .intg-tile__desc { font-size: 0.92rem; color: var(--color-text-muted, #4A5A78); line-height: 1.55; margin: 0; flex: 1 1 auto; }
    .page-shell .intg-tile__foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .page-shell .intg-tile__go { color: var(--color-text-subtle, #6C7C9A); transition: color .12s ease, transform .12s ease; }
    .page-shell .intg-section { margin-bottom: 38px; }
    .page-shell .intg-section__title { font-size: 1.2rem; font-weight: 700; color: var(--color-text, #0B1220); margin: 0 0 3px; }
    .page-shell .intg-section__intro { font-size: 0.92rem; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 15px; }
    .page-shell a.intg-tile:hover .intg-tile__go { color: var(--color-accent, #0072BA); transform: translateX(2px); }
    /* Coming-soon: inert, with only the logo mark dimmed. No tile-level
       opacity (it dropped the text and pill below readable contrast). */
    .page-shell .intg-tile--soon { pointer-events: none; }
    .page-shell .intg-tile--soon .intg-mark { filter: grayscale(1); opacity: 0.55; }
    .page-shell .intg-tile--soon .intg-tile__name, .page-shell .intg-tile--soon .intg-tile__sub { color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-tile--soon .intg-state { background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-grid__soon-label { grid-column: 1 / -1; margin: 8px 0 -6px; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }

    /* ── detail page ── */
    .page-shell a.intg-back { display: inline-flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); text-decoration: none; margin-bottom: 14px; }
    .page-shell a.intg-back:hover { color: var(--color-accent, #0072BA); }
    .page-shell .intg-hero { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center; }
    .page-shell .intg-hero__meta { min-width: 0; }
    .page-shell .intg-hero__name-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .page-shell .intg-hero__name { font-family: var(--font-display, inherit); font-weight: 700; font-size: 1.25rem; color: var(--color-text, #0B1220); }
    .page-shell .intg-hero__sub { font-size: 0.84rem; color: var(--color-text-muted, #4A5A78); margin-top: 3px; }
    .page-shell .intg-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
    .page-shell .intg-desc { font-size: 0.86rem; color: var(--color-text-muted, #4A5A78); margin: 14px 0 0; max-width: 640px; line-height: 1.55; }
    .page-shell .intg-desc b { color: var(--color-text, #0B1220); }
    .page-shell .intg-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0; counter-reset: none; }
    .page-shell .intg-step { display: flex; gap: 12px; padding: 10px 0; }
    .page-shell .intg-step__num { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.74rem; font-weight: 700; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-step--done .intg-step__num { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .intg-step--done .intg-step__num .material-symbols-outlined { font-size: 15px; }
    .page-shell .intg-step--current .intg-step__num { background: var(--color-accent, #0072BA); color: #fff; }
    .page-shell .intg-step__text { font-size: 0.85rem; color: var(--color-text-muted, #4A5A78); line-height: 1.55; padding-top: 3px; }
    .page-shell .intg-step--current .intg-step__text { color: var(--color-text, #0B1220); }
    .page-shell .intg-kv { display: grid; grid-template-columns: 150px 1fr; gap: 8px 16px; font-size: 0.84rem; }
    .page-shell .intg-kv dt { color: var(--color-text-subtle, #6C7C9A); font-weight: 600; }
    .page-shell .intg-kv dd { margin: 0; color: var(--color-text, #0B1220); overflow-wrap: anywhere; }
    .page-shell .intg-ev { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.85rem; }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .intg-ev[hidden] { display: none; }
    .page-shell .intg-ev:last-child { border-bottom: 0; }
    .page-shell .intg-ev__name { font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .intg-ev__meta { color: var(--color-text-subtle, #6C7C9A); font-size: 0.76rem; }
    .page-shell .intg-ca-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.85rem; cursor: pointer; }
    .page-shell .intg-ca-row:last-child { border-bottom: 0; }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .intg-ca-row[hidden] { display: none; }
    .page-shell .intg-ca-row input { accent-color: var(--color-accent, #0072BA); }
    .page-shell .intg-ca-name { font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .intg-ca-cat { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }

    /* ── shared sub-panels (picker, CallRail form, walkthrough) ── */
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
    .page-shell .intg-walkthrough { margin-top: 14px; max-width: 640px; }
    .page-shell .intg-walkthrough summary { cursor: pointer; list-style: none; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .intg-walkthrough summary::-webkit-details-marker { display: none; }
    .page-shell .intg-walkthrough summary::before { content: 'expand_more'; font-family: 'Material Symbols Outlined'; font-size: 18px; transition: transform .15s ease; }
    .page-shell .intg-walkthrough[open] summary::before { transform: rotate(180deg); }
    .page-shell .intg-walkthrough summary:hover { color: var(--color-accent-hover, #00558D); }
    .page-shell .intg-walkthrough__body { margin-top: 10px; padding: 14px 16px; border-radius: 10px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .intg-walkthrough__body p { margin: 0 0 10px; font-size: 0.84rem; color: var(--color-text, #0B1220); line-height: 1.55; }
    .page-shell .intg-walkthrough__body ol { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 7px; }
    .page-shell .intg-walkthrough__body li { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); line-height: 1.5; }
    .page-shell .intg-card { margin-bottom: 20px; }

    @media (max-width: 720px) {
      .page-shell .intg-hero { grid-template-columns: auto 1fr; }
      .page-shell .intg-actions { grid-column: 1 / -1; justify-content: flex-start; }
      .page-shell .intg-kv { grid-template-columns: 1fr; gap: 2px 0; }
      .page-shell .intg-kv dd { margin-bottom: 8px; }
    }

    html.ff-no-animations .page-shell a.intg-tile,
    html.ff-no-animations .page-shell .intg-tile__go,
    html.ff-no-animations .page-shell .intg-walkthrough summary::before { transition: none; }
    @media (prefers-reduced-motion: reduce) {
      .page-shell a.intg-tile, .page-shell .intg-tile__go,
      .page-shell .intg-walkthrough summary::before { transition: none; transform: none; }
    }
  `,document.head.appendChild(e),Uc=!0}var Pc,Fc,M,N,P,Ic,Lc,Rc,F,zc,Bc,Vc,Hc,Uc,Wc=o((()=>{w(),Pc=u(f(),1),m(),oc(),fc(),Fc={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},M=e=>String(e??``).replace(/[&<>"']/g,e=>Fc[e]),N=(e,t=`info`)=>{try{Pc.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},P=()=>C.getConfig?.().BASE_URL||``,Ic=()=>C.getActiveOrg()?.guid||C.getMemberships()[0]?.orgGuid||null,Lc=()=>C.getCapabilities().includes(`manage_magnets`),Rc=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,F=(e,t=``)=>`<div class="intg-alert ${t}"><span class="material-symbols-outlined" aria-hidden="true">${t===`error`?`error`:`info`}</span><span>${e}</span></div>`,zc={busy:!1},Bc=null,Vc=Object.fromEntries(Object.values(cc).map(e=>[e.urlSlug,e.slug])),Hc=e=>{let t=document.getElementById(`intg-r-status`);t&&(t.textContent=e)},Uc=!1})),Gc=c({default:()=>tl,init:()=>qc,render:()=>Kc});function Kc(){return Nc(),oa(),k()?da({section:`settings-integrations`,title:`Integrations`,description:`Pick a client to manage their connections.`}):`
    <div class="page-shell" data-section="settings-integrations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Integrations</h1>
          <p class="page-description">Connected accounts for this workspace.</p>
        </div>
      </div>
      <div id="intg-body">
        <div class="dashboard-card intg-card"><div class="card-body">${Rc(`hourglass_empty`,`Loading…`)}</div></div>
      </div>
    </div>`}async function qc(){if(k()){let e=e=>Number(e||0).toLocaleString();return pa(P(),[{h:`Magnets`,td:t=>`${e(t.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${e(t.magnets.total)}</span>`},{h:`Leads · wk`,td:t=>e(t.leads.this_week)}],{emptyMsg:`No client orgs yet. Create one under Clients first.`})}Jc()||await Yc()}function Jc(){try{let e=new URLSearchParams(window.location.search),t=e.get(`connected`),n=e.get(`error`)?e.get(`provider`)||`google_ads`:null,r=null;if(t&&Object.hasOwn(el,t)){let n=t===`ms_bookings`?e.get(`consent`):null;n===`granted`?N(`In-magnet booking approved for your organization.`,`success`):n===`declined`?N(`Microsoft Bookings is connected. In-magnet booking still needs the one-time approval, see step 2.`,`warning`):N(`${el[t]} connected.`,`success`),pc({slug:t,connected:!0}),r=Object.hasOwn(cc,t)?cc[t]:null}else if(n){let t=Object.hasOwn(el,n)?el[n]:n;N(`${t} connection failed (${e.get(`error`)}).`,`error`),r=Object.hasOwn(cc,n)?cc[n]:null}else return!1;return window.history.replaceState(null,``,window.location.pathname+window.location.hash),r?(window.router?.navigate(`/settings/integrations/${r.urlSlug}`),!0):!1}catch{return!1}}async function Yc(){let e=document.getElementById(`intg-body`);try{let{denied:t,providers:n,configured:r}=await yc();if(t){e&&(e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${Rc(`lock`,`Integrations are managed by workspace admins.`)}</div></div>`);return}e&&(e.innerHTML=$c(n,r))}catch{e&&(e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${Rc(`error`,`Could not load integrations.`)}</div></div>`)}}function Xc(e,t,n){let r=_c(e,t,n);return`
    <a class="intg-tile" href="#/settings/integrations/${e.urlSlug}" data-provider="${e.slug}">
      <div class="intg-tile__head">
        ${hc(e)}
        <div class="intg-tile__titles">
          <div class="intg-tile__name">${M(e.label)}</div>
          <div class="intg-tile__sub">${M(e.card.sub)}</div>
        </div>
      </div>
      <p class="intg-tile__desc">${M(Zc(e,t,r))}</p>
      <div class="intg-tile__foot">
        ${vc(r,t)}
        <span class="intg-tile__go material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </div>
    </a>`}function Zc(e,t,n){if(n===`connected`){let n=t?.external_account||{};if(e.slug===`calendly`)return n.name?`Connected as ${n.name}.`:`Connected.`;if(e.slug===`callrail`){let e=[n.account_name,n.company_name].filter(Boolean).join(` · `);return e?`Connected to ${e}.`:`Connected.`}if(e.slug===`hubspot`)return n.hub_domain?`Connected to ${n.hub_domain}.`:`Connected.`;if(e.slug===`zoho`)return n.location?`Connected to Zoho CRM (${String(n.location).toUpperCase()}).`:`Connected to Zoho CRM.`;if(e.slug===`calcom`||e.slug===`salesforce`)return n.username?`Connected as ${n.username}.`:`Connected.`;if(e.slug===`gohighlevel`)return n.location_name?`Connected to ${n.location_name}.`:`Connected.`;if(e.slug===`ms_bookings`)return n.upn?`Connected as ${n.upn}.`:`Connected.`;let r=e.card.reachableCount(n);return r?`${r} ${e.slug===`google_analytics`?r===1?`property`:`properties`:r===1?`account`:`accounts`} feeding reporting.`:`Connected.`}return n===`broken`?`The connection stopped working. Open to reconnect.`:e.card.tile||e.card.sub}function Qc(e){return`
    <a class="intg-tile" href="${M(e.href)}" data-provider="webhook">
      <div class="intg-tile__head">
        <span class="intg-mark">
          <img class="intg-logo" src="${M(e.logo)}" alt="" loading="lazy"
               onerror="this.style.display='none';this.parentElement.querySelector('.intg-logo-fallback').style.display=''">
          <span class="material-symbols-outlined intg-logo-fallback" aria-hidden="true" style="display:none">${e.icon}</span>
        </span>
        <div class="intg-tile__titles">
          <div class="intg-tile__name">${M(e.label)}</div>
          <div class="intg-tile__sub">${M(e.sub)}</div>
        </div>
      </div>
      <p class="intg-tile__desc">${M(e.tile)}</p>
      <div class="intg-tile__foot">
        <span class="intg-state">Set up under Notifications</span>
        <span class="intg-tile__go material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </div>
    </a>`}function $c(e,t){return lc.map(n=>{let r=n.key===`automation`?uc.map(Qc).join(``):Object.values(cc).filter(e=>e.category===n.key).map(n=>Xc(n,gc(e,n.slug),!!t?.[n.slug])).join(``);return r?`
      <section class="intg-section" data-category="${M(n.key)}">
        <h2 class="intg-section__title">${M(n.title)}</h2>
        <p class="intg-section__intro">${M(n.intro)}</p>
        <div class="intg-grid">${r}</div>
      </section>`:``}).join(``)}var el,tl,nl=o((()=>{Wc(),xa(),el=Object.fromEntries(Object.values(cc).filter(e=>e.connect).map(e=>[e.slug,e.label])),tl={render:Kc,init:qc}})),rl=c({default:()=>wl,init:()=>al,render:()=>il});function il({provider:e}={}){Nc(),oa();let t=Vc[e];if(!t||k())return`<div class="page-shell"></div>`;let n=cc[t];return I.provider=n,`
    <div class="page-shell" data-section="settings-integrations">
      <a class="intg-back" href="#/settings/integrations"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:16px">arrow_back</span>All integrations</a>
      <div id="intg-detail">
        <div class="dashboard-card intg-card"><div class="card-body">${Rc(`hourglass_empty`,`Loading…`)}</div></div>
      </div>
    </div>`}async function al({provider:e}={}){let t=Vc[e];if(!t||k()){window.router?.navigate(`/settings/integrations`,{historyAPIMethod:`replaceState`});return}await ol();let n=mc();n?.connected&&n.slug===t&&I.provider?.picker&&Lc()&&Cc(I.provider,{refresh:ol})}async function ol(){let e=document.getElementById(`intg-detail`);if(!(!e||!I.provider))try{let{denied:t,providers:n,configured:r}=await yc();if(t){e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${Rc(`lock`,`Integrations are managed by workspace admins.`)}</div></div>`;return}I.conn=gc(n,I.provider.slug),I.configured=!!r?.[I.provider.slug],I.status=_c(I.provider,I.conn,I.configured),e.innerHTML=sl(),_l()}catch{e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${Rc(`error`,`Could not load this integration.`)}</div></div>`}}function sl(){let e=I.provider;return[ll(e),ul(e),dl(e),hl(e),gl(e)].filter(Boolean).join(``)}function cl(e){let t=I.conn?.external_account||{};if(I.status!==`connected`)return e.card.sub;if(e.slug===`calendly`){let e=[t.name,t.email&&`(${t.email})`].filter(Boolean).join(` `);return e?`Connected as ${e}.`:`Connected.`}if(e.slug===`callrail`){let e=[t.account_name,t.company_name].filter(Boolean).join(` · `);return e?`Connected to ${e}.`:`Connected.`}if(e.slug===`hubspot`)return t.hub_domain?`Connected to ${t.hub_domain}.`:`Connected.`;if(e.slug===`zoho`)return t.location?`Connected to Zoho CRM (${String(t.location).toUpperCase()} data center).`:`Connected to Zoho CRM.`;if(e.slug===`salesforce`)return t.username?`Connected as ${t.username}.`:`Connected.`;if(e.slug===`gohighlevel`)return t.location_name?`Connected to ${t.location_name}.`:`Connected.`;if(e.slug===`calcom`)return t.username?`Connected as ${t.username}.`:`Connected.`;if(e.slug===`ms_bookings`)return t.upn?`Connected as ${t.upn}.`:`Connected.`;let n=e.card.reachableCount(t);return n?`${n} reachable ${e.slug===`google_analytics`?n===1?`property`:`properties`:n===1?`account`:`accounts`}.`:`Connected.`}function ll(e){let t=``;Lc()&&(e.connect&&(I.status===`idle`||I.status===`broken`)&&I.configured&&(t=`<button type="button" class="intg-btn primary" id="${e.card.ids.connect}"><span class="material-symbols-outlined" aria-hidden="true">link</span>${I.status===`broken`?`Reconnect`:`Connect`}</button>`),(e.slug===`callrail`||e.slug===`calcom`||e.slug===`gohighlevel`)&&I.status!==`connected`&&(t=`<button type="button" class="intg-btn primary" id="${e.card.ids.connect}"><span class="material-symbols-outlined" aria-hidden="true">link</span>${I.status===`broken`?`Reconnect`:`Connect`}</button>`));let n;return n=I.status===`unavailable`?`${e.label} is being set up for this platform.`:I.status===`broken`?e.card.brokenDesc:I.status===`idle`?Lc()?e.card.idleDesc:e.card.sub:cl(e),`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="intg-hero">
          ${hc(e,{size:`hero`})}
          <div class="intg-hero__meta">
            <div class="intg-hero__name-row">
              <span class="intg-hero__name">${M(e.label)}</span>
              ${vc(I.status,I.conn)}
            </div>
            <div class="intg-hero__sub">${M(e.card.sub)}</div>
          </div>
          <div class="intg-actions">${t}</div>
        </div>
        <p class="intg-desc">${M(n)}</p>
        ${(e.slug===`callrail`||e.slug===`calcom`||e.slug===`gohighlevel`)&&I.status!==`connected`?`<div id="${e.card.ids.setup}" style="display:none"></div>`:``}
      </div>
    </div>`}function ul(e){let t=sc[e.slug];return t?I.status===`connected`||I.status===`unavailable`||!Lc()?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <p class="intg-desc" style="margin-top:0">${M(t.what)}</p>
          <details class="intg-walkthrough">
            <summary>Setup guide</summary>
            <div class="intg-walkthrough__body">
              <ol>${t.steps.map(e=>`<li>${M(e)}</li>`).join(``)}</ol>
            </div>
          </details>
        </div>
      </div>`:`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">checklist</span> Set up ${M(e.label)}</div>
        <p class="intg-desc" style="margin:0 0 10px">${M(t.what)}</p>
        <ol class="intg-steps">
          ${t.steps.map((e,t)=>`
            <li class="intg-step${t===0?` intg-step--current`:``}">
              <span class="intg-step__num">${t+1}</span>
              <span class="intg-step__text">${M(e)}</span>
            </li>`).join(``)}
        </ol>
      </div>
    </div>`:``}function dl(e){if(I.status!==`connected`)return``;let t=Lc();if(e.picker){let n=e.card.reachableCount(I.conn?.external_account);return`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">tune</span> Reporting</div>
          <p class="intg-desc" style="margin:0">${n?e.card.reachDesc(n):e.card.noneDesc}</p>
          ${t?`
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${e.card.ids.choose}"><span class="material-symbols-outlined" aria-hidden="true">checklist</span>${e.card.chooseLabel}</button>
            <button type="button" class="intg-btn" id="${e.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
          </div>`:``}
          <div id="${e.card.ids.panel}" style="display:none"></div>
        </div>
      </div>
      ${e.slug===`google_ads`&&t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">flag</span> Conversions in reporting</div>
          <p class="intg-desc" style="margin:0 0 6px">Choose which Google Ads conversion actions count on Ad Performance, beside magnet leads. Counts stay Google's own numbers.</p>
          <div id="intg-g-convactions">${F(`Loading conversion actions…`)}</div>
        </div>
      </div>`:``}`}return e.slug===`calendly`?t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">event_available</span> Booking</div>
          <p class="intg-desc" style="margin:0 0 6px">Turn on Calendly booking per magnet under Magnets, in the Book call-to-action. These event types are available:</p>
          <div id="intg-c-events">${F(`Loading event types…`)}</div>
        </div>
      </div>`:``:e.crm?t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">sync_alt</span> Lead sync</div>
          <p class="intg-desc" style="margin:0 0 6px">${M(e.crm.syncDesc)}</p>
          <div id="intg-crm-status">${F(`Loading sync status…`)}</div>
          <label class="intg-ca-row" style="margin-top:10px">
            <input type="checkbox" id="intg-crm-qualified">
            <span class="intg-ca-name">${M(e.crm.qualifiedToggle)}</span>
          </label>
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${e.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
          </div>
        </div>
      </div>`:``:e.slug===`ms_bookings`?t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">event_note</span> Booking pages</div>
          <p class="intg-desc" style="margin:0 0 6px">Point any magnet Book button at a Bookings page, in the Book call-to-action under Magnets. Appointments sync to your leads every few minutes, Teams link included. These pages are connected:</p>
          <div id="intg-mb-businesses">${F(`Loading booking pages…`)}</div>
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${e.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
          </div>
        </div>
      </div>
      ${pl()}`:``:e.slug===`calcom`?t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">event_available</span> Booking</div>
          <p class="intg-desc" style="margin:0 0 6px">Turn on Cal.com booking per magnet under Magnets, in the Book call-to-action. These event types are available:</p>
          <div id="intg-cc-events">${F(`Loading event types…`)}</div>
        </div>
      </div>`:``:e.slug===`callrail`&&t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">call</span> Call tracking</div>
          <p class="intg-desc" style="margin:0 0 6px">Tracked calls land in your Leads inbox with the caller, source, and recording. These tracking numbers are active:</p>
          <div id="intg-r-trackers">${F(`Loading tracking numbers…`)}</div>
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${e.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
            <button type="button" class="intg-btn" id="intg-r-replace"><span class="material-symbols-outlined" aria-hidden="true">key</span>Replace API key</button>
          </div>
          <div id="${e.card.ids.setup}" style="display:none"></div>
        </div>
      </div>`:``}function fl(){let e=sc.ms_bookings?.editor;return e?.steps?.length?`
    <details class="intg-walkthrough" style="margin-top:8px">
      <summary>${M(e.title)}</summary>
      <div class="intg-walkthrough__body">
        <ol>${e.steps.map(e=>`<li>${M(e)}</li>`).join(``)}</ol>
      </div>
    </details>`:``}function pl(){let e=I.conn?.app_consent===!0,t=I.conn?.external_account?.upn||``,n=(e,t,n)=>`
    <li class="intg-step${e}">
      <span class="intg-step__num">${t}</span>
      <span class="intg-step__text">${n}</span>
    </li>`,r=`<span class="material-symbols-outlined" aria-hidden="true">check</span>`;return`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">verified_user</span> In-magnet booking</div>
          <p class="intg-desc" style="margin:0 0 6px">Visitors pick a real open time and book inside the magnet itself, no Microsoft page. ${e?`Set up and on for this account.`:`One step left to turn it on.`}</p>
          <ol class="intg-steps">
            ${n(` intg-step--done`,r,`<strong>Connect Microsoft Bookings.</strong> Done${t?`, connected as ${M(t)}`:``}.`)}
            ${e?n(` intg-step--done`,r,`<strong>Approve for your organization.</strong> Done. Your Microsoft 365 admin approved in-magnet booking.`):n(` intg-step--current`,`2`,`<strong>Approve for your organization.</strong> A one-time approval on a Microsoft screen. If you are the Microsoft 365 admin it is one click. If not, Microsoft sends the request to your admin. Until it is approved, magnet Book buttons open your Microsoft page in a new tab instead.
                <div class="intg-actions" style="justify-content:flex-start;margin-top:10px">
                  <button type="button" class="intg-btn" id="intg-msb-consent"><span class="material-symbols-outlined" aria-hidden="true">how_to_reg</span>Approve with Microsoft</button>
                </div>`)}
            ${n(e?` intg-step--current`:``,`3`,`<strong>Point a magnet at a page.</strong> Under <a href="#/magnets">Magnets</a>, add the Book call-to-action and pick your Bookings page and service.${fl()}`)}
          </ol>
        </div>
      </div>`}function ml(e){if(!e)return``;try{return new Date(e).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`})}catch{return String(e).slice(0,10)}}function hl(e){if(!I.conn)return``;let t=I.conn.webhook||{},n=[];n.push([`Status`,I.status===`connected`?`Active`:I.conn.connect_status===`NEEDS_REAUTH`?`Needs reconnecting`:`Error`]),e.slug===`calendly`&&(n.push([`Booking sync`,t.state===`active`?`On`:`Off (paid Calendly plan required)`]),t.last_received_tz&&n.push([`Last booking received`,ml(t.last_received_tz)])),e.slug===`calcom`&&(n.push([`Booking sync`,t.state===`active`?`On`:`Needs attention`]),t.last_received_tz&&n.push([`Last booking received`,ml(t.last_received_tz)])),e.slug===`ms_bookings`&&(n.push([`Booking sync`,`Every few minutes (polled)`]),t.last_swept_tz&&n.push([`Last sweep`,ml(t.last_swept_tz)])),e.slug===`callrail`&&(n.push([`Call sync`,t.state===`active`?`On`:`Needs attention`]),t.cookie_capture&&n.push([`Session capture`,t.cookie_capture===`active`?`On`:`Needs attention`]),t.last_received_tz&&n.push([`Last call received`,ml(t.last_received_tz)])),I.conn.created?.created_tz&&n.push([`Connected on`,ml(I.conn.created.created_tz)]);let r=e.slug===`calendly`&&I.status===`connected`&&t.state!==`active`?F(`Booking sync is off: webhooks need a paid Calendly plan. Visitors can still book in the magnet; bookings just will not appear on the lead automatically. Reconnect after upgrading to turn it on.`,`error`):e.slug===`calcom`&&I.status===`connected`&&t.state!==`active`?F(`Booking sync could not be set up in Cal.com. Visitors can still book; bookings just will not appear on the lead automatically. Reconnect to retry the setup.`,`error`):e.slug===`callrail`&&I.status===`connected`&&t.state!==`active`?F(`Automatic call sync could not be set up in CallRail. Calls still arrive via the daily sweep and Sync now. Reconnect to retry the setup.`,`error`):``;return`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="card-title" style="margin-bottom:12px"><span class="material-symbols-outlined" aria-hidden="true">monitor_heart</span> Health</div>
        <dl class="intg-kv">
          ${n.map(([e,t])=>`<dt>${M(e)}</dt><dd>${M(t)}</dd>`).join(``)}
        </dl>
        ${r}
      </div>
    </div>`}function gl(e){return I.status!==`connected`&&I.status!==`broken`||!Lc()?``:`
    <div class="dashboard-card intg-card settings-danger">
      <div class="card-body">
        <div class="settings-danger__action">
          <div>
            <div class="settings-item__title">Disconnect ${M(e.label)}</div>
            <div class="settings-item__desc">${M(e.disconnect.confirm)}</div>
          </div>
          <button type="button" class="settings-danger__btn" id="${e.card.ids.disconnect}">Disconnect</button>
        </div>
      </div>
    </div>`}function _l(){let e=I.provider;if(!e)return;let t=ol;e.connect&&document.getElementById(e.card.ids.connect)?.addEventListener(`click`,()=>bc(e)),e.slug===`calcom`&&(document.getElementById(e.card.ids.connect)?.addEventListener(`click`,()=>Dc({refresh:t})),I.status===`connected`&&Lc()&&xl()),e.slug===`gohighlevel`&&document.getElementById(e.card.ids.connect)?.addEventListener(`click`,()=>Ec({refresh:t})),e.slug===`ms_bookings`&&I.status===`connected`&&Lc()&&(document.getElementById(`intg-msb-consent`)?.addEventListener(`click`,async()=>{try{let e=await(await fetch(`${P()}/m5t/v5/integrations/ms_bookings/adminconsent`)).json();if(e.ok&&e.data?.url){window.location.href=e.data.url;return}throw Error()}catch{N(`Could not start Microsoft approval`,`danger`)}}),bl(),document.getElementById(e.card.ids.sync)?.addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0;try{let e=await(await fetch(`${P()}/m5t/v5/integrations/ms_bookings/sync/run`,{method:`POST`})).json();if(!e.ok)throw Error(e.error||`sync failed`);let t=e.data||{};N(t.errors?`Sync finished with ${t.errors} error${t.errors===1?``:`s`}.`:`Sync done. ${t.booked||0} booking${(t.booked||0)===1?``:`s`} recorded.`,t.errors?`warning`:`success`)}catch(e){N(e.message||`Sync failed.`,`error`)}finally{t.disabled=!1}})),e.slug===`callrail`&&(document.getElementById(e.card.ids.connect)?.addEventListener(`click`,()=>Oc({refresh:t})),document.getElementById(`intg-r-replace`)?.addEventListener(`click`,()=>Oc({refresh:t,replaceKey:!0})),document.getElementById(e.card.ids.sync)?.addEventListener(`click`,()=>Mc({refresh:t})),I.status===`connected`&&Lc()&&Cl()),e.picker&&(document.getElementById(e.card.ids.choose)?.addEventListener(`click`,()=>Cc(e,{refresh:t})),document.getElementById(e.card.ids.sync)?.addEventListener(`click`,()=>xc(e,{refresh:t}))),e.slug===`google_ads`&&I.status===`connected`&&Lc()&&vl(),e.slug===`calendly`&&I.status===`connected`&&Lc()&&Sl(),e.crm&&I.status===`connected`&&Lc()&&yl(e),document.getElementById(e.card.ids.disconnect)?.addEventListener(`click`,()=>Sc(e,{refresh:t}))}async function vl(){let e=document.getElementById(`intg-g-convactions`);if(e)try{let t=await(await fetch(`${P()}/m5t/v5/integrations/google_ads/conversion_actions`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.actions||[],r=new Set(t.data.selected||[]);if(!n.length){e.innerHTML=F(`No enabled conversion actions in the linked accounts.`);return}e.innerHTML=`
      <div class="intg-ca-list">
        ${n.map(e=>`
          <label class="intg-ca-row">
            <input type="checkbox" value="${M(e.id)}" ${r.has(e.id)?`checked`:``}>
            <span class="intg-ca-name">${M(e.name||e.id)}</span>
            ${e.category?`<span class="intg-ca-cat">${M(String(e.category).toLowerCase().replace(/_/g,` `))}</span>`:``}
          </label>`).join(``)}
      </div>
      <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
        <button type="button" class="intg-btn primary" id="intg-g-ca-save"><span class="material-symbols-outlined" aria-hidden="true">save</span>Save selection</button>
      </div>`,E(e.querySelector(`.intg-ca-list`),{rowSelector:`.intg-ca-row`,noun:`actions`}),document.getElementById(`intg-g-ca-save`)?.addEventListener(`click`,async()=>{let t=document.getElementById(`intg-g-ca-save`),n=[...e.querySelectorAll(`input[type="checkbox"]:checked`)].map(e=>e.value);t.disabled=!0;try{let e=await(await fetch(`${P()}/m5t/v5/integrations/google_ads/conversion_actions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({conversion_action_ids:n})})).json();if(!e.ok)throw Error(e.error||`save failed`);N(n.length?`Counting ${n.length} conversion action${n.length===1?``:`s`} in reporting.`:`Conversion counting turned off.`,`success`)}catch(e){N(e.message||`Could not save the selection.`,`error`)}finally{t.disabled=!1}})}catch{e.innerHTML=F(`Could not load conversion actions. If this keeps happening, reconnect.`,`error`)}}async function yl(e){let t=document.getElementById(`intg-crm-status`),n=document.getElementById(`intg-crm-qualified`),r=document.getElementById(e.card.ids.sync),i=async()=>{if(t)try{let r=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/status`)).json();if(!r.ok)throw Error(r.error||`load failed`);let i=r.data.counts||[],a=(e,t)=>i.find(n=>n.kind===e&&n.status===t)?.n||0,o=(e,t)=>{let n=[`${a(t,`SENT`)} synced`];return a(t,`QUEUE`)&&n.push(`${a(t,`QUEUE`)} queued`),a(t,`FAILED`)&&n.push(`${a(t,`FAILED`)} failed`),`
          <div class="intg-ev">
            <span class="intg-ev__name">${M(e)}</span>
            <span class="intg-ev__meta">${M(n.join(` · `))}</span>
          </div>`};t.innerHTML=o(e.crm.countLabels.contact,`contact`)+(r.data.qualified_sync?o(e.crm.countLabels.qualified,`qualified`):``),n&&(n.checked=!!r.data.qualified_sync)}catch{t.innerHTML=F(`Could not load sync status. If this keeps happening, reconnect.`,`error`)}};n?.addEventListener(`change`,async()=>{if(!n.checked&&!window.confirm(`Qualified leads will stop updating their status in ${e.label}. Turn this off?`)){n.checked=!0;return}n.disabled=!0;try{let t=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/config`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({qualified_sync:n.checked})})).json();if(!t.ok)throw Error(t.error||`save failed`);N(n.checked?`Qualified leads now sync their status.`:`Qualified-lead sync turned off.`,`success`),i()}catch(e){n.checked=!n.checked,N(e.message||`Could not save the setting.`,`error`)}finally{n.disabled=!1}}),r?.addEventListener(`click`,async()=>{r.disabled=!0;try{let t=await(await fetch(`${P()}/m5t/v5/integrations/${e.slug}/sync/run`,{method:`POST`})).json();if(!t.ok)throw Error(t.error||`sync failed`);let n=t.data||{};N(n.failed?`Sync finished with ${n.failed} error${n.failed===1?``:`s`}.`:`Sync done. ${n.sent||0} lead${(n.sent||0)===1?``:`s`} pushed.`,n.failed?`warning`:`success`),i()}catch(e){N(e.message||`Sync failed.`,`error`)}finally{r.disabled=!1}}),i()}async function bl(e=``){let t=document.getElementById(`intg-mb-businesses`);if(t)try{let n=await(await fetch(`${P()}/m5t/v5/integrations/ms_bookings/businesses${e?`?q=${encodeURIComponent(e)}`:``}`)).json();if(!n.ok)throw Error(n.error||`load failed`);let r=n.data.businesses||[];t.innerHTML=r.length?r.map(e=>`
          <div class="intg-ev">
            <span class="intg-ev__name">${M(e.name)}</span>
            <span class="intg-ev__meta">${M(e.public_url||``)}</span>
          </div>`).join(``):F(`No shared Bookings pages found for this Microsoft account. Note: a Personal booking page ("Bookings with me") cannot connect anywhere, Microsoft has no API for it. Shared booking pages appear when the connected account is on their Staff list. Try the search below with the page’s exact name.`)+`<div class="intg-msb-search" style="display:flex;gap:8px;margin-top:10px"><input class="mag-modal__input" id="intg-msb-q" type="text" placeholder="Shared page name, e.g. Nicholas Krause"><button class="btn btn-secondary" type="button" id="intg-msb-search">Search</button></div>`,E(t,{rowSelector:`.intg-ev`,noun:`pages`}),document.getElementById(`intg-msb-search`)?.addEventListener(`click`,()=>{let e=document.getElementById(`intg-msb-q`)?.value.trim();e&&bl(e)})}catch{t.innerHTML=F(`Could not load booking pages. If this keeps happening, reconnect.`,`error`)}}async function xl(){let e=document.getElementById(`intg-cc-events`);if(e)try{let t=await(await fetch(`${P()}/m5t/v5/integrations/calcom/event_types`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.event_types||[];e.innerHTML=n.length?n.map(e=>`
          <div class="intg-ev">
            <span class="intg-ev__name">${M(e.title)}</span>
            <span class="intg-ev__meta">${e.length?`${M(String(e.length))} min`:``}</span>
          </div>`).join(``):F(`No event types on this Cal.com account yet. Create one in Cal.com and it appears here.`),E(e,{rowSelector:`.intg-ev`,noun:`event types`})}catch{e.innerHTML=F(`Could not load event types. If this keeps happening, reconnect.`,`error`)}}async function Sl(){let e=document.getElementById(`intg-c-events`);if(e)try{let t=await(await fetch(`${P()}/m5t/v5/integrations/calendly/event_types`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.event_types||[],r=t.data.scheduling_url?`<div class="intg-ev"><span class="intg-ev__name">Full scheduling page</span><span class="intg-ev__meta">${M(t.data.scheduling_url)}</span></div>`:``;e.innerHTML=n.length||r?`${r}${n.map(e=>`
          <div class="intg-ev">
            <span class="intg-ev__name">${M(e.name)}</span>
            <span class="intg-ev__meta">${e.duration?`${M(String(e.duration))} min`:``}</span>
          </div>`).join(``)}`:F(`No active event types on this Calendly account.`),E(e,{rowSelector:`.intg-ev`,noun:`event types`})}catch{e.innerHTML=F(`Could not load event types. If this keeps happening, reconnect.`,`error`)}}async function Cl(){let e=document.getElementById(`intg-r-trackers`);if(e)try{let t=await(await fetch(`${P()}/m5t/v5/integrations/callrail/trackers`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.trackers||[];e.innerHTML=n.length?n.map(e=>`
          <div class="intg-ev">
            <span class="intg-ev__name">${M(e.name)}</span>
            <span class="intg-ev__meta">${M(e.number)}${e.type===`session`?` · number pool`:``}</span>
          </div>`).join(``):F(`No active tracking numbers in this company yet. Create one in CallRail and it appears here.`),E(e,{rowSelector:`.intg-ev`,noun:`numbers`})}catch{e.innerHTML=F(`Could not load tracking numbers.`,`error`)}}var I,wl,Tl=o((()=>{Wc(),xa(),sn(),I={provider:null,conn:null,configured:!1,status:`idle`},wl={render:il,init:al}})),El=c({default:()=>Yl,init:()=>kl,render:()=>Ol});function Dl(){if(Gl)return;let e=document.createElement(`style`);e.id=`m5t-security-styles`,e.textContent=`
    .page-shell .pk-row { display: flex; gap: 16px; align-items: center; padding: 14px 4px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .pk-row[hidden] { display: none; }
    .page-shell .pk-row:last-child { border-bottom: 0; }
    .page-shell .pk-icon { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); }
    .page-shell .pk-info { flex: 1 1 auto; min-width: 0; }
    .page-shell .pk-name { font-weight: 600; font-size: 0.92rem; }
    .page-shell .pk-meta { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .pk-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .pk-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .pk-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .pk-btn--danger { color: var(--color-danger, #DD4124); border-color: var(--color-danger, #DD4124); }
    .page-shell .pk-btn--danger:hover { background: var(--color-danger-soft, #FBEAE6); }
    .page-shell .pk-btn .material-symbols-outlined { font-size: 16px; }
    .page-shell .pk-unsupported { font-size: 0.84rem; color: var(--color-text-subtle, #6C7C9A); }
  `,document.head.appendChild(e),Gl=!0}function Ol(){return Dl(),`
    <div class="page-shell" data-section="settings-security">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Security</h1>
          <p class="page-description">How you sign in to Mach Five Magnet.</p>
        </div>
      </div>
      <div class="dashboard-card" style="margin-bottom:20px">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">password</span></span>
            <div>
              <h2 class="settings-section__title">Password</h2>
              <p class="settings-section__desc">Signing in as ${Vl(Ll())}. You stay signed in on this device after a change.</p>
            </div>
          </div>
          <div class="settings-grid-2">
            <div class="settings-field">
              <label class="settings-label" for="pw-new">New password</label>
              <input class="settings-input" id="pw-new" type="password" autocomplete="new-password">
            </div>
            <div class="settings-field">
              <label class="settings-label" for="pw-confirm">Confirm new password</label>
              <input class="settings-input" id="pw-confirm" type="password" autocomplete="new-password">
            </div>
          </div>
          <p class="settings-error" id="pw-error" role="alert" hidden></p>
          <div class="settings-save-row">
            <button class="btn btn-primary" id="pw-save" type="button">Update password</button>
          </div>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">passkey</span> Passkeys</h2>
          <button class="btn btn-secondary" id="pk-add-btn" type="button" style="display:none">
            <span class="material-symbols-outlined" aria-hidden="true">add</span>
            Add a passkey
          </button>
        </div>
        <div class="card-body" id="pk-body">${Kl(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function kl(){document.getElementById(`pw-save`)?.addEventListener(`click`,Rl);let e=document.getElementById(`pk-add-btn`);e&&window.PublicKeyCredential&&(e.style.display=``,e.addEventListener(`click`,Fl)),await Al()}async function Al(){let e=document.getElementById(`pk-body`);if(e){try{let e=await fetch(`${Ul()}/m5t/v5/webauthn`),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(t.error||`Failed to load`);Wl.passkeys=t.passkeys||[],Wl.loaded=!0}catch(t){console.warn(`[settings-security] load failed:`,t),e.innerHTML=Kl(`error`,`Could not load your passkeys. Please try again.`);return}Nl()}}function jl(e){if(!e)return null;try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return null}}function Ml(e){let t=jl(e.last_used_time),n=e.created?.created_tz,r=jl(n),i=[e.device_type===`multiDevice`?`Syncs across devices`:`This device only`,t?`Last used ${t}`:`Never used to sign in yet`,r?`Added ${r}`:null].filter(Boolean).join(` · `);return`
    <div class="pk-row" data-guid="${Vl(e.guid)}">
      <span class="pk-icon"><span class="material-symbols-outlined" aria-hidden="true">passkey</span></span>
      <div class="pk-info">
        <div class="pk-name">${Vl(e.device_label||`Passkey`)}</div>
        <div class="pk-meta">${Vl(i)}</div>
      </div>
      <button class="pk-btn pk-btn--danger" type="button" data-remove="${Vl(e.guid)}">
        <span class="material-symbols-outlined" aria-hidden="true">delete</span> Remove
      </button>
    </div>`}function Nl(){let e=document.getElementById(`pk-body`);if(e){if(!window.PublicKeyCredential){e.innerHTML=`<p class="pk-unsupported">This browser doesn't support passkeys. Your password sign-in still works as usual.</p>`;return}if(!Wl.passkeys.length){e.innerHTML=Kl(`passkey`,`No passkeys yet. Add one for a faster, phishing-resistant sign-in.`);return}e.innerHTML=Wl.passkeys.map(Ml).join(``),E(e,{rowSelector:`.pk-row`,noun:`passkeys`}),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>Il(e.dataset.remove,e))})}}function Pl(){try{let e=navigator.userAgent||``,t=/iPhone/.test(e)?`iPhone`:/iPad/.test(e)?`iPad`:/Android/.test(e)?`Android`:/Mac OS X/.test(e)?`Mac`:/Windows/.test(e)?`Windows`:/Linux/.test(e)?`Linux`:`device`,n=/Edg\//.test(e)?`Edge`:/Chrome\//.test(e)?`Chrome`:/Firefox\//.test(e)?`Firefox`:/Safari\//.test(e)?`Safari`:``;return n?`${n} on ${t}`:t}catch{return`Passkey`}}async function Fl(){let e=document.getElementById(`pk-add-btn`);e&&(e.disabled=!0);try{let{startRegistration:e}=await S(async()=>{let{startRegistration:e}=await Promise.resolve().then(()=>(Bt(),zt));return{startRegistration:e}},void 0,import.meta.url),t=await fetch(`${Ul()}/m5t/v5/webauthn/register/options`,{method:`POST`}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`Could not start passkey registration`);let r;try{r=await e({optionsJSON:n.options})}catch(e){if(e?.name===`NotAllowedError`)return;throw e}let i=await fetch(`${Ul()}/m5t/v5/webauthn/register/verify`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({response:r,deviceLabel:Pl()})}),a=await i.json().catch(()=>({}));if(!i.ok||!a.ok)throw Error(a.error||`Could not register this passkey`);Hl(`Passkey added`,`success`),await Al()}catch(e){console.warn(`[settings-security] addPasskey failed:`,e),Hl(e.message||`Could not add a passkey`,`danger`)}finally{e&&(e.disabled=!1)}}async function Il(e,t){if(await rc({title:`Remove this passkey?`,message:`You can always add it back later.`,confirmLabel:`Remove`,danger:!0})){t&&(t.disabled=!0);try{let t=await fetch(`${Ul()}/m5t/v5/webauthn/${encodeURIComponent(e)}`,{method:`DELETE`}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`Could not remove this passkey`);Wl.passkeys=Wl.passkeys.filter(t=>t.guid!==e),Hl(`Passkey removed`,`success`),Nl()}catch(e){console.warn(`[settings-security] removePasskey failed:`,e),Hl(e.message||`Could not remove this passkey`,`danger`),t&&(t.disabled=!1)}}}function Ll(){try{return C.getScope()?.entity?.email||C.getEntity?.()?.email||`your account`}catch{return`your account`}}async function Rl(){let e=document.getElementById(`pw-new`),t=document.getElementById(`pw-confirm`),n=document.getElementById(`pw-save`),r=e?.value||``,i=t?.value||``,a=Ei(r);if(a.length){ql(`Password needs: ${Jl(a)}.`);return}if(r!==i){ql(`Passwords do not match.`);return}ql(``),n&&(n.disabled=!0);try{let n=await fetch(`${Ul()}/m5t/v5/acctEntity/resetHash`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({password:r})}),i=await n.json().catch(()=>({}));if(!n.ok||!i.ok)throw Error(i.error||`Could not update your password`);Hl(`Password updated`,`success`),e&&(e.value=``),t&&(t.value=``)}catch(e){ql(e.message||`Could not update your password.`)}finally{n&&(n.disabled=!1)}}var zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl=o((()=>{w(),zl=u(f(),1),m(),oc(),Oi(),sn(),it(),Bl={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Vl=e=>String(e??``).replace(/[&<>"']/g,e=>Bl[e]),Hl=(e,t=`info`)=>{try{zl.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Ul=()=>C.getConfig?.().BASE_URL||``,Wl={passkeys:[],loaded:!1},Gl=!1,Kl=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,ql=e=>{let t=document.getElementById(`pw-error`);t&&(t.textContent=e||``,t.hidden=!e)},Jl=e=>e.length<=1?String(e[0]??``):e.length===2?`${e[0]} and ${e[1]}`:`${e.slice(0,-1).join(`, `)}, and ${e[e.length-1]}`,Yl={render:Ol,init:kl}})),Zl=c({default:()=>yu,init:()=>au,render:()=>iu});function Ql(e){return e&&([e.first_name,e.last_name].filter(Boolean).join(` `).trim()||e.email)||null}function $l(e){return(e.split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``)||`?`).toUpperCase()}function eu(e){try{return new Date(e).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}catch{return``}}function tu(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function nu(e){return e==null?`—`:e<60?`${e}s`:`${Math.floor(e/60)}m ${String(e%60).padStart(2,`0`)}s`}function ru(){if(gu)return;let e=document.createElement(`style`);e.id=`m5t-convs-styles`,e.textContent=`
    .page-shell .convs-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .convs-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .convs-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .convs-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
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
  `,document.head.appendChild(e),gu=!0}function iu(){return ru(),oa(),`
    <div class="page-shell" data-section="conversations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Conversations</h1>
          <p class="page-description">${k()?`All conversations across your clients.`:`Every visitor journey through your magnets: completed, in progress, or abandoned.`}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="convs-body">
          ${_u(`hourglass_empty`,`Loading journeys…`)}
        </div>
      </div>
    </div>`}async function au(){await ou()}async function ou(){let e=document.getElementById(`convs-body`);if(e){try{let[e,t]=await Promise.all([fetch(`${fu()}/m5t/v5/conversations`),fetch(`${fu()}/m5t/v5/magnets`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Failed to load`);if(R.conversations=n.conversations||[],R.counts=n.counts||{},R.book=k(),t){let e=await t.json().catch(()=>({}));R.magnetNames={},R.magnetOwnerNames={};let n=R.book?ma():{};(e.magnets||[]).forEach(e=>{R.magnetNames[e.guid]=e.name,R.book&&(R.magnetOwnerNames[e.guid]=e.owner_name||n[e.owner_guid]||``)})}}catch(t){console.warn(`[conversations] load failed:`,t),e.innerHTML=_u(`error`,`Could not load journeys. Please try again.`);return}lu()}}function su(){return R.filter===`ALL`?R.conversations:R.conversations.filter(e=>e.status===R.filter)}function cu(e){let t=Ql(e.lead),n=R.magnetNames[e.magnet_guid]||`—`,r=mu[e.status]||mu.ABANDONED,i=e.steps_total?Math.min(100,Math.round((e.steps_reached||0)/e.steps_total*100)):null,a=(e.routes||[]).map(e=>hu[e]||e).join(`, `);return`
    <tr class="convs-row" data-session="${L(e.session)}">
      <td>
        <span class="convs-who">
          <span class="convs-ava${t?``:` anon`}">${t?L($l(t)):`<span class="material-symbols-outlined" style="font-size:16px">person_off</span>`}</span>
          <span><span class="convs-name">${t?L(t):`<span class="convs-muted">Anonymous visitor</span>`}</span>
            ${e.lead?.email?`<div class="convs-sub">${L(e.lead.email)}</div>`:a?`<div class="convs-sub">Picked: ${L(a)}</div>`:``}</span>
        </span>
      </td>
      ${R.book?`<td>${ba(R.magnetOwnerNames[e.magnet_guid]||``)||`<span class="convs-muted">—</span>`}</td>`:``}
      <td><span class="convs-sub">${L(n)}</span></td>
      <td><span class="convs-badge" data-s="${L(e.status)}"><span class="material-symbols-outlined" aria-hidden="true">${r.icon}</span>${r.label}</span></td>
      <td>${i==null?`<span class="convs-muted">—</span>`:`<span class="convs-prog"><span class="convs-prog__track"><span class="convs-prog__fill" style="width:${i}%"></span></span><span class="convs-sub">${e.steps_reached}/${e.steps_total}</span></span>`}</td>
      <td class="convs-muted" style="white-space:nowrap" title="${L(eu(e.started_at))}">${L(tu(e.started_at))}</td>
      <td class="convs-muted" style="white-space:nowrap">${L(nu(e.duration_s))}</td>
    </tr>`}function lu(){let e=document.getElementById(`convs-body`);if(!e)return;if(!R.conversations.length){e.innerHTML=_u(`route`,`No journeys yet. As visitors open your magnets, every session, completed or abandoned, appears here.`);return}let t=su();e.innerHTML=`
    <div class="convs-bar">
      <div class="convs-filter">
        ${[[`ALL`,`All`],[`COMPLETED`,`Completed`],[`IN_PROGRESS`,`In progress`],[`ABANDONED`,`Abandoned`]].map(([e,t])=>`<button data-filter="${e}" class="${R.filter===e?`active`:``}">${t}${e!==`ALL`&&R.counts[e]?` (${pu(R.counts[e])})`:``}</button>`).join(``)}
      </div>
      <span class="convs-count">${pu(t.length)} of ${pu(R.conversations.length)} (30 days)</span>
    </div>
    <div class="convs-tablewrap">
      <table class="convs-table">
        <thead><tr><th>Visitor</th>${R.book?`<th>Client</th>`:``}<th>Magnet</th><th>Status</th><th>Progress</th><th>Started</th><th>Duration</th></tr></thead>
        <tbody id="convs-tbody">${t.map(cu).join(``)||`<tr><td colspan="${R.book?7:6}"><div class="convs-muted" style="padding:14px 4px">No ${R.filter.toLowerCase().replace(`_`,` `)} journeys.</div></td></tr>`}</tbody>
      </table>
    </div>`;let n=e.querySelector(`#convs-tbody`);n&&E(n,{rowSelector:`tr.convs-row`,noun:`journeys`,controlHost:e.querySelector(`.convs-tablewrap`)||n.parentElement}),e.querySelector(`.convs-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(R.filter=t.dataset.filter,lu())}),e.querySelector(`#convs-tbody`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.convs-row`);t&&uu(t.dataset.session)})}async function uu(e){let t=R.conversations.find(t=>t.session===e);if(!t)return;let n=null;try{n=await(await fetch(`${fu()}/m5t/v5/conversations/${encodeURIComponent(e)}`)).json().catch(()=>null),n?.ok||(n=null)}catch{n=null}let r=Ql(t.lead),i=R.magnetNames[t.magnet_guid]||`—`,a=(n?.events||[]).filter((e,t,n)=>e.event!==`step`||!(n[t+1]&&n[t+1].event===`step`)).map(e=>`
    <div class="convs-tl__item${e.event===`complete`?` done`:``}">
      <span class="convs-tl__dot"></span>
      <div class="convs-tl__label">${L((vu[e.event]||(()=>e.event))(e.detail))}</div>
      <div class="convs-tl__time">${L(eu(e.at))}${e.variant?` · Variant ${L(e.variant)}`:``}</div>
    </div>`).join(``),o=document.createElement(`div`);o.className=`convs-drawer-scrim`,o.innerHTML=`
    <aside class="convs-drawer" role="dialog" aria-modal="true" aria-label="Journey detail">
      <div class="convs-drawer__head">
        <span class="convs-drawer__title">${r?L(r):`Anonymous visitor`}</span>
        <button class="convs-drawer__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="convs-drawer__body">
        ${r?`<a class="convs-drawer__lead" href="#/leads">
              <span class="convs-ava">${L($l(r))}</span>
              <span><div class="convs-name">${L(r)}</div><div class="convs-sub">${L(t.lead?.email||t.lead?.phone||``)}</div></span>
              <span class="material-symbols-outlined" style="margin-left:auto;color:var(--color-text-subtle,#6C7C9A)">chevron_right</span>
            </a>`:`<div class="convs-drawer__anon">This visitor didn’t finish, so no contact details were captured. Answers are only collected when a journey completes.</div>`}
        <div class="convs-sub" style="margin-bottom:6px">${L(i)} · ${L(nu(t.duration_s))}${t.variant?` · Variant ${L(t.variant)}`:``}</div>
        ${a?`<div class="convs-tl">${a}</div>`:_u(`timeline`,`No timeline available for this journey.`)}
      </div>
    </aside>`,document.body.appendChild(o),requestAnimationFrame(()=>{o.classList.add(`open`),o.querySelector(`.convs-drawer`).classList.add(`open`)});let s=()=>{o.classList.remove(`open`),setTimeout(()=>o.remove(),220)};o.querySelector(`.convs-drawer__close`).addEventListener(`click`,s),o.addEventListener(`click`,e=>{e.target===o&&s()})}var du,L,fu,pu,R,mu,hu,gu,_u,vu,yu,bu=o((()=>{w(),xa(),sn(),du={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},L=e=>String(e??``).replace(/[&<>"']/g,e=>du[e]),fu=()=>C.getConfig?.().BASE_URL||``,pu=e=>Number(e||0).toLocaleString(),R={conversations:[],counts:{},magnetNames:{},filter:`ALL`,book:!1,magnetOwnerNames:{}},mu={COMPLETED:{label:`Completed`,icon:`check_circle`},IN_PROGRESS:{label:`In progress`,icon:`pending`},ABANDONED:{label:`Abandoned`,icon:`highlight_off`}},hu={book:`Book`,chat:`Chat`,call:`Call`,email:`Email`,support:`Support`},gu=!1,_u=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,vu={open:()=>`Opened the magnet`,engage:e=>`First interaction${e?`: ${hu[e]||e}`:``}`,route:e=>`Picked ${hu[e]||e||`a channel`}`,step:e=>`Reached step ${e||``}`,complete:()=>`Completed: lead captured`},yu={render:iu,init:au}})),xu=c({default:()=>Gu,init:()=>wu,render:()=>Cu});function Su(){if(Uu)return;let e=document.createElement(`style`);e.id=`m5t-abt-styles`,e.textContent=`
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
    .page-shell .abt-variant.leader { border-color: var(--color-tip, #059669); background: var(--color-tip-soft, #F0FDF4); }
    .page-shell .abt-vhead { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
    .page-shell .abt-vname { font-weight: 700; font-size: 0.92rem; }
    .page-shell .abt-vtag { font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-vtag.win { background: #DCFCE7; color: #047857; }
    .page-shell .abt-vdesc { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 10px; }
    .page-shell .abt-mrow { display: flex; justify-content: space-between; align-items: baseline; padding: 6px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.84rem; }
    .page-shell .abt-mrow:last-child { border-bottom: 0; }
    .page-shell .abt-mrow .k { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .abt-mrow .v { font-weight: 700; }
    .page-shell .abt-mrow.hl .v { font-size: 1.25rem; color: var(--color-accent-hover, #00558D); }
    .page-shell .abt-variant.leader .abt-mrow.hl .v { color: var(--color-tip, #059669); }
    .page-shell .abt-improve { font-size: 0.72rem; font-weight: 700; color: var(--color-tip, #059669); margin-left: 6px; }
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
  `,document.head.appendChild(e),Uu=!0}function Cu(){return k()?da({section:`ab-testing`,title:`A/B Testing`,description:`Pick a client to view their experiments.`}):(Su(),`
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
      <div id="abt-body">${Wu(`hourglass_empty`,`Loading tests…`)}</div>
    </div>`)}async function wu(){if(k())return pa(zu(),[{h:`Running`,td:e=>Bu(e.ab_tests?.running)},{h:`Completed`,td:e=>Bu(e.ab_tests?.completed)},{h:`Compl. %`,td:e=>e.completion_rate==null?`—`:`${e.completion_rate}%`}],{emptyMsg:`No client orgs yet. Experiments appear per client once you have one.`});let e=document.getElementById(`abt-body`);try{let e=new Date,t=new Date(e.getTime()-76896e5).toISOString().slice(0,10),n=e.toISOString().slice(0,10),[r,i]=await Promise.all([fetch(`${zu()}/m5t/v5/magnets`),fetch(`${zu()}/m5t/v5/magnets/stats?from=${t}&to=${n}`)]),a=await r.json().catch(()=>({}));if(!a.ok)throw Error(a.message||`Failed to load`);Vu.magnets=a.magnets||[],Vu.canManage=!!a.canManage;let o=await i.json().catch(()=>({}));Vu.stats=o?.stats||{}}catch(t){console.warn(`[ab-testing] load failed:`,t),e&&(e.innerHTML=Wu(`error`,`Could not load your tests. Please try again.`));return}Tu()}function Tu(){let e=document.getElementById(`abt-body`);if(!e)return;let t=Vu.magnets.filter(e=>e.ab?.enabled),n=Vu.magnets.filter(e=>!e.ab?.enabled&&e.ab?.declared);if(!t.length&&!n.length){e.innerHTML=Wu(`science`,`No experiments yet. Open a magnet on Your Magnets → Edit → “A/B experiment”, give variant B a change, and results appear here.`);return}e.innerHTML=(t.length?`<div class="abt-sect">Running</div>${t.map(Au).join(``)}`:``)+(n.length?`<div class="abt-sect">Completed Tests</div>${n.map(ju).join(``)}`:``),E(e,{rowSelector:`.abt-card`,noun:`tests`}),e.querySelectorAll(`[data-declare]`).forEach(e=>e.addEventListener(`click`,()=>Mu(e.dataset.declare,e.dataset.winner)))}function Eu(e){let t=Vu.stats[e.guid]?.variants||{};return{A:{opens:0,engaged:0,completions:0,rate:null,...t.A||{}},B:{opens:0,engaged:0,completions:0,rate:null,...t.B||{}}}}function Du(e){let t=Object.keys(e?.b||{}).map(e=>Hu[e]||e);return t.length?`Changes: ${t.join(`, `)}`:``}function Ou(e){try{return Math.max(0,Math.floor((Date.now()-new Date(e).getTime())/864e5))}catch{return null}}function ku(e,t,n,r,i,a){return`
    <div class="abt-variant${i?` leader`:``}">
      <div class="abt-vhead"><span class="abt-vname">${Lu(e)}</span><span class="abt-vtag${i?` win`:``}">${Lu(t)}</span></div>
      ${n?`<div class="abt-vdesc">${Lu(n)}</div>`:``}
      <div class="abt-mrow"><span class="k">Visitors</span><span class="v">${Bu(r.opens)}</span></div>
      <div class="abt-mrow"><span class="k">Completions</span><span class="v">${Bu(r.completions)}</span></div>
      <div class="abt-mrow hl"><span class="k">Conversion Rate</span><span class="v">${r.rate==null?`—`:r.rate+`%`}${a?`<span class="abt-improve">${a}</span>`:``}</span></div>
    </div>`}function Au(e){let t=e.ab,{A:n,B:r}=Eu(e),i=(r.rate??-1)>(n.rate??-1)?`B`:(n.rate??-1)>(r.rate??-1)?`A`:null,a=i&&n.rate!=null&&r.rate!=null?`+${Math.round(Math.abs(r.rate-n.rate)*10)/10}%`:``,o=Nu(n,r),s=t.started_tz?Ou(t.started_tz):null,c=(n.opens||0)+(r.opens||0),l=t.split||50;return`
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${Lu(e.name)}</h2>
        <span class="abt-status running"><span class="pulse-dot"></span>Running</span>
        <div class="abt-actions">
          ${Vu.canManage&&i?`<button class="btn btn-primary" type="button" data-declare="${Lu(e.guid)}" data-winner="${i}"><span class="material-symbols-outlined" aria-hidden="true">emoji_events</span>Declare Winner</button>`:``}
        </div>
      </div>
      <div class="abt-meta">
        ${s==null?``:`<span><span class="material-symbols-outlined" aria-hidden="true">schedule</span>Started ${s===0?`today`:`${s} day${s===1?``:`s`} ago`}</span>`}
        <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span>${Bu(c)} total visitors</span>
        <span><span class="material-symbols-outlined" aria-hidden="true">swap_horiz</span>${100-l}/${l} traffic split</span>
      </div>
      <div class="abt-compare">
        ${ku(`Variant A`,`Control`,`The magnet as configured`,n,i===`A`,i===`A`?a:``)}
        <div class="abt-vs">VS</div>
        ${ku(`Variant B`,i===`B`?`Leading`:`Challenger`,Du(t),r,i===`B`,i===`B`?a:``)}
      </div>
      <div class="abt-sig">
        <div class="abt-sig__bar"><div class="abt-sig__fill${o!=null&&o>=95?` sig`:``}" style="width:${o==null?0:Math.min(100,o)}%"></div></div>
        <div class="abt-sig__text">
          <span class="material-symbols-outlined" aria-hidden="true">${o!=null&&o>=95?`check_circle`:`hourglass_top`}</span>
          ${o==null?`<span>Not enough data yet. Confidence appears after ~30 visitors per variant.</span>`:`<span><strong>${o}% Statistical Confidence</strong>: results ${o>=95?`are statistically significant`:`are not yet significant; keep it running`}</span>`}
        </div>
      </div>
    </div>`}function ju(e){let t=e.ab.declared,n=t.A?.opens?t.A.completions/t.A.opens*100:null,r=t.B?.opens?t.B.completions/t.B.opens*100:null,i=n!=null&&r!=null&&Math.min(n,r)>0?Math.round(Math.abs(r-n)/Math.min(n,r)*100):null,a=e.ab.started_tz&&t.tz?Math.max(1,Math.round((new Date(t.tz)-new Date(e.ab.started_tz))/864e5)):null,o=(t.A?.opens||0)+(t.B?.opens||0);return`
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${Lu(e.name)}</h2>
        <span class="abt-status completed"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:14px">check_circle</span>Completed</span>
      </div>
      <div class="abt-summary">
        <span><span class="k">Winner:</span><span class="v">Variant ${Lu(t.winner)}</span></span>
        ${i==null?``:`<span><span class="k">Improvement:</span><span class="v pos">+${i}%</span></span>`}
        ${a==null?``:`<span><span class="k">Duration:</span><span class="v">${a} day${a===1?``:`s`}</span></span>`}
        <span><span class="k">Total Visitors:</span><span class="v">${Bu(o)}</span></span>
      </div>
    </div>`}async function Mu(e,t){let n=Vu.magnets.find(t=>t.guid===e);if(n&&window.confirm(`Declare Variant ${t} the winner for “${n.name}”?\n\n${t===`B`?`Variant B’s changes become the magnet’s configuration for everyone.`:`The magnet keeps its current configuration.`} The experiment ends and moves to Completed.`)){try{let n=await(await fetch(`${zu()}/m5t/v5/magnets/${encodeURIComponent(e)}/ab/declare`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({winner:t})})).json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Declare failed`);Ru(`Variant ${t} declared the winner`,`success`)}catch(e){Ru(e.message||`Could not declare a winner`,`danger`);return}try{await wu()}catch(e){console.warn(`[ab-testing] refresh after declare failed:`,e)}}}function Nu(e,t){let n=e.opens||0,r=t.opens||0,i=e.completions||0,a=t.completions||0;if(n<30||r<30||i+a<5)return null;let o=i/n,s=a/r,c=(i+a)/(n+r),l=Math.sqrt(c*(1-c)*(1/n+1/r));if(!l)return null;let u=Math.abs(s-o)/l;return Math.round(2*(Pu(u)-.5)*1e3)/10}function Pu(e){let t=1/(1+.2316419*Math.abs(e)),n=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return e>0?1-n:n}var Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku=o((()=>{w(),Fu=u(f(),1),m(),xa(),sn(),Iu={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Lu=e=>String(e??``).replace(/[&<>"']/g,e=>Iu[e]),Ru=(e,t=`info`)=>{try{Fu.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},zu=()=>C.getConfig?.().BASE_URL||``,Bu=e=>Number(e||0).toLocaleString(),Vu={magnets:[],stats:{},canManage:!1},Hu={mag_title:`header title`,mag_subtitle:`subtitle`,mag_welcome:`welcome message`,mag_theme_color:`color`,mag_launcher_label:`launcher label`},Uu=!1,Wu=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Gu={render:Cu,init:wu}}));function qu(e,t){let n={};return Object.keys(e&&typeof e==`object`?e:{}).forEach(r=>{t.includes(r)||(n[r]=e[r])}),Object.keys(n).length?n:null}function Ju(e){return qu(e,Rd)}function Yu(e,t){let n=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(e||``).trim());return n?`rgba(${parseInt(n[1],16)},${parseInt(n[2],16)},${parseInt(n[3],16)},${t})`:`rgba(0,114,186,${t})`}function Xu(){if(Vd)return;let e=document.createElement(`style`);e.id=`m5t-flow-styles`,e.textContent=`
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
    /* "optional" flips to "required" once either half of the CTA pair is filled. */
    .flow-sub--req { color: var(--color-danger, #DD4124); font-weight: 600; }
    .flow-cta-warn { margin: 6px 0 0; font-size: 0.76rem; font-weight: 600; color: var(--color-danger, #DD4124); }
    .flow-cta-warn[hidden] { display: none; }
    .flow-f-invalid { border-color: var(--color-danger, #DD4124) !important; }
    .flow-f-invalid:focus { outline-color: var(--color-danger, #DD4124); }
    /* The save error sits ABOVE the canvas, not after the palette where it used to —
       a validation nobody scrolls to is a validation nobody sees. */
    #flow-error:not(:empty) { margin: 0 0 12px; padding: 9px 12px; border-radius: var(--radius-md, 10px); background: var(--color-danger-soft, #FDECEA); border: 1px solid var(--color-danger, #DD4124); font-weight: 600; }
    .flow-opts { display: flex; flex-direction: column; gap: 6px; }
    .flow-opt { display: flex; gap: 6px; align-items: center; }
    .flow-opt .flow-o-label { flex: 1 1 auto; min-width: 0; }
    .flow-opt .flow-o-icon { flex: 0 0 auto; width: 118px; }
    .flow-opt__del { appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; flex: 0 0 auto; }
    .flow-opt__del:hover:not(:disabled) { color: var(--color-danger, #DD4124); background: var(--color-surface-2, #EAF0F7); }
    .flow-opt__del:disabled { opacity: 0.35; cursor: default; }
    .mag-flow__addopt { appearance: none; border: 1px dashed var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.86rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 9px 14px; border-radius: var(--radius-md, 10px); display: inline-flex; align-items: center; gap: 6px; margin-top: 6px; }
    .mag-flow__addopt:hover { background: var(--color-accent-soft, rgba(0,114,186,0.08)); }
    .mag-flow__addopt .material-symbols-outlined { font-size: 18px; }

    .flow-palette { margin-top: 16px; border-top: 1px dashed var(--color-border, #D4DCE8); padding-top: 14px; }
    .flow-palette__t { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 8px; }
    .flow-palette__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(128px, 1fr)); gap: 8px; }
    .flow-palette__chip { display: flex; align-items: center; gap: 7px; padding: 9px 11px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: var(--color-text, #0B1220); text-align: left; }
    .flow-palette__chip:hover { border-color: var(--pc, #0072BA); background: var(--color-surface, #F4F7FB); }
    .flow-palette__chip .material-symbols-outlined { font-size: 18px; color: var(--pc, #0072BA); }
  `,document.head.appendChild(e),Vd=!0}function Zu(e=`single_select`){return{_uid:Qd(),id:``,step_type:e,step_prompts:[``],step_options:Md(e)?[{label:``,goto:``,icon:``},{label:``,goto:``,icon:``}]:[],step_columns:Id(e)?[Id(e)]:[],step_description:``,step_config:Pd(e)?Ld():null}}function Qu(e){return(Array.isArray(e)?e:[]).map(e=>({_uid:Qd(),id:e.id==null?``:String(e.id),step_type:Od[e.step_type]?e.step_type:`single_select`,step_prompts:Array.isArray(e.step_prompts)?e.step_prompts.map(String):[],step_options:(Array.isArray(e.step_options)?e.step_options:[]).map(e=>({label:e&&e.label!=null?String(e.label):``,goto:e&&e.goto!=null?String(e.goto):``,icon:e&&e.icon!=null?String(e.icon):``})),step_columns:Array.isArray(e.step_columns)?e.step_columns.map(String):[],step_description:e.step_description==null?``:String(e.step_description),step_config:Pd(e.step_type)?{...Ld(),...e.step_config&&typeof e.step_config==`object`?e.step_config:{}}:e.step_config&&typeof e.step_config==`object`?{...e.step_config}:null}))}function $u(){return[{_uid:Qd(),id:``,step_type:`text`,step_prompts:[`Great, and your name?`],step_options:[],step_columns:[`first_name`],step_description:``,step_config:null},{_uid:Qd(),id:``,step_type:`email`,step_prompts:[`The best email to reach you?`],step_options:[],step_columns:[`email`],step_description:``,step_config:null}]}function ed(e,t){if(e===`book`)return[{_uid:Qd(),id:``,step_type:`scheduler`,step_prompts:[`When works best for you?`],step_options:[],step_columns:[],step_description:``,step_config:Ld()},...$u()];if(e===`support`){let e=(t.actions||[]).find(e=>e&&e.type===`support`),n=e&&e.config&&Array.isArray(e.config.options)?e.config.options:[],r=n.length?n.map(e=>({label:e&&e.label||String(e),goto:``,icon:e&&e.icon||``})):[`Sales enquiry`,`Support`,`Billing`,`Something else`].map(e=>({label:e,goto:``,icon:``}));return[{_uid:Qd(),id:``,step_type:`multi_select`,step_prompts:[`How can we help you today?`],step_options:r,step_columns:[],step_description:`Select all that apply`,step_config:null},...$u()]}return[Zu(`single_select`)]}function td(e,t){let n=Qu(e===`chat`?t.steps:t.routes&&t.routes[e]);return n.length?n:e===`chat`?[Zu(`single_select`)]:ed(e,t)}function nd(e){Md(e.step_type)?e.step_options.length||(e.step_options=[{label:``,goto:``,icon:``},{label:``,goto:``,icon:``}]):e.step_options=[],Nd(e.step_type)?!e.step_columns.length&&Id(e.step_type)&&(e.step_columns=[Id(e.step_type)]):e.step_columns=[],e.step_config=Pd(e.step_type)?{...Ld(),...e.step_config||{}}:Ju(e.step_config)}function rd(e,t){return`<div class="flow-opt">
    <input class="mag-modal__input flow-o-label" type="text" value="${Td(e.label)}" placeholder="Option label">
    <select class="mag-modal__select flow-o-icon" title="Icon">${Bd.map(([t,n])=>`<option value="${Td(t)}"${t===e.icon?` selected`:``}>${Td(n)}</option>`).join(``)}</select>
    <button class="flow-opt__del" type="button" data-x="delopt" title="Remove choice"${t?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
  </div>`}function id(e){let t=kd.map(t=>`<option value="${t}"${t===e.step_type?` selected`:``}>${Td(jd(t).label)}</option>`).join(``),n=e.step_options.length<=1;return`<div class="flow-node__body">
    <label class="mag-modal__label">Step type</label>
    <select class="mag-modal__select flow-f-type">${t}</select>

    <label class="mag-modal__label">${e.step_type===`message`?`Message`:`Question`} <span class="flow-sub">one bubble per line</span></label>
    <textarea class="mag-modal__input flow-f-prompts" rows="2" placeholder="${e.step_type===`message`?`Thanks! One moment…`:`What can we help you with?`}">${Td(e.step_prompts.join(`
`))}</textarea>

    ${Fd(e.step_type)?`
    <div class="mag-tog-row" style="margin-top:10px">
      <input type="checkbox" class="flow-f-terminal" id="flow-f-terminal-${e._uid}"${e.step_config?.terminal?` checked`:``}>
      <label for="flow-f-terminal-${e._uid}">End the conversation here</label>
    </div>
    ${e.step_config?.terminal?`
    <label class="mag-modal__label">Link label <span class="flow-sub flow-cta-req">optional</span></label>
    <input class="mag-modal__input flow-f-cta-label" type="text" value="${Td(e.step_config?.cta?.label||``)}" placeholder="e.g. Visit our site">
    <label class="mag-modal__label">Link URL <span class="flow-sub flow-cta-req">optional</span></label>
    <input class="mag-modal__input flow-f-cta-url" type="url" value="${Td(e.step_config?.cta?.url||``)}" placeholder="https://example.com">
    <p class="flow-cta-warn" hidden>Both are needed to show the button — fill in the other one, or clear this one.</p>
    <p class="mag-modal__hint">Fill in both to show a button after this message, or leave both blank to just end the conversation. Opens in a new tab.</p>`:``}`:``}

    ${Nd(e.step_type)?`
    <label class="mag-modal__label">Saves to</label>
    <select class="mag-modal__select flow-f-field">
      <option value=""${e.step_columns[0]?``:` selected`} disabled>Choose a lead field…</option>
      ${We.map(t=>`<option value="${Td(t.value)}"${t.value===e.step_columns[0]?` selected`:``}>${Td(t.label)}</option>`).join(``)}
    </select>
    <p class="mag-modal__hint">The lead record field this answer fills in — these are the only fields a magnet can actually save to.</p>`:``}

    ${Md(e.step_type)?`
    <label class="mag-modal__label">Choices${e.step_type===`multi_select`?` <span class="flow-sub">visitor can pick several</span>`:``}</label>
    <div class="flow-opts">${e.step_options.map(e=>rd(e,n)).join(``)}</div>
    <button class="mag-flow__addopt" type="button" data-x="addopt"><span class="material-symbols-outlined" aria-hidden="true">add</span> Add choice</button>`:``}

    ${Pd(e.step_type)?`
    <label class="mag-modal__label">Meeting label <span class="flow-sub">optional</span></label>
    <input class="mag-modal__input flow-f-mtlabel" type="text" value="${Td(e.step_config?.meeting_label||``)}" placeholder="e.g. 15 minute call">
    <div class="mag-modal__row" style="margin-top:8px">
      <div><label class="mag-modal__label">From</label><input class="mag-modal__input flow-f-start" type="time" value="${Td(e.step_config?.start||`09:00`)}"></div>
      <div><label class="mag-modal__label">To</label><input class="mag-modal__input flow-f-end" type="time" value="${Td(e.step_config?.end||`17:00`)}"></div>
      <div style="flex:0 0 auto"><label class="mag-modal__label">Slot</label>
        <select class="mag-modal__select flow-f-mins">${[15,30,45,60].map(t=>`<option value="${t}"${(e.step_config?.mins||30)===t?` selected`:``}>${t} min</option>`).join(``)}</select></div>
    </div>
    <p class="mag-modal__hint">Visitors pick a day + time within these hours; the choice saves to the field above.</p>`:``}
  </div>`}function ad(e){let t=e.step_prompts.find(e=>String(e).trim()!==``)||``,n=t?`<div class="flow-node__prompt">“${Td(t)}”</div>`:`<div class="flow-node__prompt is-empty">${e.step_type===`message`?`No message yet`:`No question yet`}</div>`,r=``;if(Md(e.step_type)){let t=e.step_options.map(e=>String(e.label).trim()).filter(Boolean);t.length&&(r=`<div class="flow-node__chips">${t.slice(0,4).map(e=>`<span class="flow-node__chip">${Td(e)}</span>`).join(``)}${t.length>4?`<span class="flow-node__chip">+${t.length-4}</span>`:``}</div>`)}else if(Nd(e.step_type)&&e.step_columns[0]){let t=We.find(t=>t.value===e.step_columns[0])?.label||e.step_columns[0];r=`<div class="flow-node__meta">Saves to <b>${Td(t)}</b></div>`}else if(Fd(e.step_type)&&e.step_config?.terminal){let t=String(e.step_config?.cta?.label||``).trim();r=`<div class="flow-node__meta">Ends the conversation${t?` — link: <b>${Td(t)}</b>`:``}</div>`}return`<div class="flow-node__preview">${n}${r}</div>`}function od(e,t,n){let r=jd(e.step_type),i=e._uid===Hd,a=`--nc:${r.color};--nct:${Yu(r.color,.14)}`;return`<div class="flow-node${i?` flow-node--open`:``}" data-uid="${e._uid}" style="${a}"${i?``:` draggable="true"`}>
    <div class="flow-node__hd">
      <span class="flow-node__grip" title="${i?``:`Drag to reorder`}"><span class="material-symbols-outlined" aria-hidden="true">${i?`expand_less`:`drag_indicator`}</span></span>
      <span class="flow-node__ico"><span class="material-symbols-outlined" aria-hidden="true">${r.icon}</span></span>
      <span class="flow-node__type">${Td(r.label)}</span>
      <span class="flow-node__n">Step ${t+1}</span>
      <span class="flow-node__tools">
        <button type="button" data-x="up" title="Move up"${t===0?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span></button>
        <button type="button" data-x="down" title="Move down"${t===n-1?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span></button>
        <button type="button" data-x="del" title="Delete step"${n===1?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </span>
    </div>
    ${i?id(e):ad(e)}
  </div>`}function sd(){let e=document.getElementById(`flow-nodes`);if(!e)return;let t=z.length,n=[`<div class="flow-start"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Conversation starts</div>`,$d];z.forEach((e,r)=>{n.push(od(e,r,t)),r<t-1&&n.push($d)}),e.innerHTML=n.join(``)}function cd(){let e=document.querySelector(`.flow-node--open`);if(!e)return;let t=z.find(t=>t._uid===e.dataset.uid);if(!t)return;let n=e.querySelector(`.flow-f-type`);n&&(t.step_type=n.value);let r=e.querySelector(`.flow-f-prompts`);r&&(t.step_prompts=r.value.split(`
`));let i=e.querySelector(`.flow-f-field`);if(t.step_columns=i&&i.value.trim()?[i.value.trim()]:[],Md(t.step_type)){let n=t.step_options,r=[];e.querySelectorAll(`.flow-opt`).forEach((e,t)=>{r.push({label:e.querySelector(`.flow-o-label`)?.value??``,icon:e.querySelector(`.flow-o-icon`)?.value??``,goto:n[t]&&n[t].goto||``})}),t.step_options=r}else t.step_options=[];if(Pd(t.step_type)){let n=e.querySelector(`.flow-f-mtlabel`),r=e.querySelector(`.flow-f-start`),i=e.querySelector(`.flow-f-end`),a=e.querySelector(`.flow-f-mins`);t.step_config={...t.step_config||Ld(),...n?{meeting_label:n.value.trim()}:{},...r&&r.value?{start:r.value}:{},...i&&i.value?{end:i.value}:{},...a?{mins:parseInt(a.value,10)||30}:{}}}else if(Fd(t.step_type)){let n=e.querySelector(`.flow-f-terminal`);if(n){let r=e.querySelector(`.flow-f-cta-label`),i=e.querySelector(`.flow-f-cta-url`),a=qu(t.step_config,zd)||{};t.step_config=n.checked?{...a,terminal:!0,cta:{label:r?r.value:``,url:i?i.value:``}}:qu(t.step_config,zd)}}else t.step_config=Ju(t.step_config)}function ld(){document.querySelectorAll(`.flow-node.drop-before, .flow-node.drop-after`).forEach(e=>e.classList.remove(`drop-before`,`drop-after`))}function ud(){ld(),document.querySelectorAll(`.flow-node.dragging`).forEach(e=>e.classList.remove(`dragging`)),Wd=null,Gd=null}function dd(e=z){if(!e.length)return{message:`Add at least one step.`,uid:null,field:null};for(let t=0;t<e.length;t++){let n=e[t],r=t+1,i=(e,t=null)=>({message:e,uid:n._uid,field:t});if(!n.step_prompts.some(e=>String(e).trim()!==``))return i(`Step ${r}: add what the magnet should say.`,`prompts`);if(Md(n.step_type)&&!n.step_options.some(e=>String(e.label).trim()!==``))return i(`Step ${r}: add at least one choice.`,`options`);if(Nd(n.step_type)&&!n.step_columns.length)return i(`Step ${r}: choose which field this answer saves to.`,`field`);if(Fd(n.step_type)&&n.step_config?.terminal){let e=String(n.step_config.cta?.label||``).trim(),t=String(n.step_config.cta?.url||``).trim();if(!!e!=!!t)return i(`Step ${r}: fill in both the link label and URL, or leave both blank.`,`cta`)}}return null}function fd(e){if(!e)return;let t=e.querySelector(`.flow-f-cta-label`),n=e.querySelector(`.flow-f-cta-url`);if(!t||!n)return;let r=t.value.trim()!==``,i=n.value.trim()!==``,a=r||i,o=r!==i;e.querySelectorAll(`.flow-cta-req`).forEach(e=>{e.textContent=a?`required`:`optional`,e.classList.toggle(`flow-sub--req`,a)}),t.classList.toggle(`flow-f-invalid`,o&&!r),n.classList.toggle(`flow-f-invalid`,o&&!i);let s=e.querySelector(`.flow-cta-warn`);s&&(s.hidden=!o)}function pd(e=z){let t=0;return e.forEach(e=>{let n=parseInt(e.id,10);!isNaN(n)&&n>t&&(t=n)}),e.map(e=>{let n=e.id&&String(e.id).trim()?String(e.id):String(++t),r=Md(e.step_type)?e.step_options.map(e=>{let t={label:String(e.label).trim(),goto:String(e.goto||``)};return e.icon&&(t.icon=String(e.icon)),t}).filter(e=>e.label!==``):[],i={id:n,step_type:e.step_type,step_prompts:e.step_prompts.map(e=>String(e)).filter(e=>e.trim()!==``),step_options:r,step_columns:e.step_columns.slice(),step_description:e.step_description||``};if(Pd(e.step_type))e.step_config&&(i.step_config={...Ld(),...e.step_config});else if(e.step_config&&Object.keys(e.step_config).length){let t={...e.step_config};if(Fd(e.step_type)&&t.terminal){let e=String(t.cta?.label??``).trim(),n=String(t.cta?.url??``).trim();e&&n?t.cta={label:e,url:n}:delete t.cta}i.step_config=t}return i})}function md(e,t,n){Xu(),Yd=t,Xd=typeof n==`function`?n:null,Zd=t?.modified_tz||``,Jd=[`chat`,...[`book`,`support`].filter(e=>(t.actions||[]).some(t=>t&&t.type===e))],qd={chat:td(`chat`,t)},Kd=`chat`,z=qd.chat,Hd=z.length===1?z[0]._uid:null,Wd=null,Gd=null,e.innerHTML=`
    <p class="mag-modal__hint" style="margin-top:0">Each card is one thing your magnet asks. Drag a card to reorder, click to edit, add steps from the palette below.</p>
    ${Jd.length>1?`<div class="flow-routes"><span class="flow-routes__lbl">Editing flow</span><select class="mag-modal__select" id="flow-route">${Jd.map(e=>`<option value="${e}">${Td(Ad[e]||e)}</option>`).join(``)}</select></div>`:``}
    <p class="mag-modal__error" id="flow-error"></p>
    <div class="flow-canvas" id="flow-nodes"></div>
    <div class="flow-palette">
      <p class="flow-palette__t">Add a step</p>
      <div class="flow-palette__grid" id="flow-palette">
        ${kd.map(e=>{let t=jd(e);return`<button class="flow-palette__chip" type="button" data-type="${e}" style="--pc:${t.color}"><span class="material-symbols-outlined" aria-hidden="true">${t.icon}</span>${Td(t.label)}</button>`}).join(``)}
      </div>
    </div>`,sd(),_d(e)}function hd(){Xd&&Xd()}function gd(){let e=document.getElementById(`flow-error`);e&&(e.textContent=``)}function _d(e){let t=e.querySelector(`#flow-nodes`),n=e.querySelector(`#flow-route`);n?.addEventListener(`change`,()=>{cd(),Kd=n.value,qd[Kd]||(qd[Kd]=td(Kd,Yd)),z=qd[Kd],Hd=z.length===1?z[0]._uid:null,gd(),sd()});let r=e=>{gd();let t=Hd;cd(),Hd=Hd===e?null:e,t&&hd(),sd()};t.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-x]`),n=e.target.closest(`.flow-node`);if(!n)return;let i=z.findIndex(e=>e._uid===n.dataset.uid);if(!(i<0)){if(t){let e=t.dataset.x;if(gd(),cd(),e===`up`&&i>0)[z[i-1],z[i]]=[z[i],z[i-1]],hd(),sd();else if(e===`down`&&i<z.length-1)[z[i+1],z[i]]=[z[i],z[i+1]],hd(),sd();else if(e===`del`&&z.length>1)Hd===n.dataset.uid&&(Hd=null),z.splice(i,1),hd(),sd();else if(e===`addopt`)z[i].step_options.push({label:``,goto:``,icon:``}),hd(),sd();else if(e===`delopt`){let e=t.closest(`.flow-opt`),n=Array.from(e.parentNode.children).indexOf(e);z[i].step_options.length>1&&n>=0&&(z[i].step_options.splice(n,1),hd(),sd())}return}e.target.closest(`.flow-node__body`)||(e.target.closest(`.flow-node__hd`)||e.target.closest(`.flow-node__preview`))&&r(n.dataset.uid)}}),t.addEventListener(`input`,e=>{!e.target.classList?.contains(`flow-f-cta-label`)&&!e.target.classList?.contains(`flow-f-cta-url`)||(gd(),fd(e.target.closest(`.flow-node`)))}),t.addEventListener(`change`,e=>{e.stopPropagation();let t=e.target.classList.contains(`flow-f-type`),n=e.target.classList.contains(`flow-f-terminal`);if(!(!t&&!n)){if(gd(),cd(),t){let t=z.find(t=>t._uid===e.target.closest(`.flow-node`)?.dataset.uid);t&&nd(t)}hd(),sd()}}),t.addEventListener(`dragstart`,e=>{let t=e.target.closest(`.flow-node`);if(!(!t||t.getAttribute(`draggable`)!==`true`)){Wd=t.dataset.uid,e.dataTransfer.effectAllowed=`move`;try{e.dataTransfer.setData(`text/plain`,Wd)}catch{}requestAnimationFrame(()=>t.classList.add(`dragging`))}}),t.addEventListener(`dragover`,e=>{if(!Wd)return;e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.target.closest(`.flow-node`);if(ld(),!t||t.dataset.uid===Wd){Gd=null;return}let n=t.getBoundingClientRect(),r=e.clientY>n.top+n.height/2;t.classList.add(r?`drop-after`:`drop-before`),Gd={uid:t.dataset.uid,after:r}}),t.addEventListener(`drop`,e=>{if(!Wd||!Gd){ud();return}e.preventDefault(),gd(),cd();let t=z.findIndex(e=>e._uid===Wd);if(t<0){ud();return}let[n]=z.splice(t,1),r=z.findIndex(e=>e._uid===Gd.uid);if(r<0){z.splice(t,0,n),ud();return}z.splice(Gd.after?r+1:r,0,n),hd(),ud(),sd()}),t.addEventListener(`dragend`,ud),e.querySelector(`#flow-palette`).addEventListener(`click`,e=>{let n=e.target.closest(`[data-type]`);if(!n)return;gd(),cd();let r=Zu(n.dataset.type);z.push(r),Hd=r._uid,hd(),sd(),t.lastElementChild?.scrollIntoView({behavior:`smooth`,block:`nearest`})})}function vd(){cd();for(let e of Object.keys(qd)){let t=dd(qd[e]);if(t)return{route:e,message:(Jd.length>1?`${Ad[e]||e}: `:``)+t.message,uid:t.uid,field:t.field}}return null}function yd(e,t,n={}){let{uid:r=null,field:i=null}=n;if(qd[e]){cd(),Kd=e,z=qd[e],Hd=r&&z.some(e=>e._uid===r)?r:null;let t=document.getElementById(`flow-route`);t&&(t.value=e),sd()}let a=document.getElementById(`flow-error`);if(a&&(a.textContent=t||``),!r)return;let o=document.querySelector(`.flow-node[data-uid="${r}"]`);if(o&&(o.scrollIntoView?.({behavior:`smooth`,block:`center`}),i===`cta`)){fd(o);let e=o.querySelector(`.flow-f-cta-label`),t=o.querySelector(`.flow-f-cta-url`);(e&&e.value.trim()===``?e:t)?.focus?.()}}function bd(e){Zd=e||``}async function xd(e){if(Zd)try{let t=((await(await fetch(`${Ed()}/m5t/v5/magnets`)).json().catch(()=>({}))).magnets||[]).find(t=>t.guid===e);if(!t||!t.modified_tz||t.modified_tz===Zd)return;if(!confirm(`This magnet was edited elsewhere since you opened it — saving now may overwrite those changes. Save anyway?`))throw Error(`Save cancelled — this magnet was edited elsewhere.`);Zd=t.modified_tz}catch(e){if(e.message&&e.message.indexOf(`Save cancelled`)===0)throw e;console.warn(`[magnet-flow] save-conflict check failed, proceeding without it:`,e)}}async function Sd(e){await xd(e),cd();for(let t of Object.keys(qd)){let n=t===`chat`?{steps:pd(qd[t])}:{route:t,steps:pd(qd[t])},r=await(await fetch(`${Ed()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})).json().catch(()=>({}));if(!r.ok)throw Error(r.message||`Flow save failed`)}}function Cd(){return cd(),pd(qd.chat||[])}var wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,z,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef=o((()=>{w(),f(),m(),et(),wd={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Td=e=>String(e??``).replace(/[&<>"']/g,e=>wd[e]),Ed=()=>C.getConfig?.().BASE_URL||``,Dd={single_select:{icon:`quiz`,color:`#0072BA`,darkColor:`#38BDF8`},multi_select:{icon:`checklist`,color:`#0E6BA8`,darkColor:`#22D3EE`},scheduler:{icon:`event`,color:`#915E8B`,darkColor:`#E879F9`},text:{icon:`short_text`,color:`#5B54C6`,darkColor:`#A78BFA`},email:{icon:`mail`,color:`#0E8F86`,darkColor:`#2DD4BF`},phone:{icon:`call`,color:`#2E8B57`,darkColor:`#4ADE80`},message:{icon:`chat`,color:`#B4791F`,darkColor:`#FBBF24`}},Od={},Ke.forEach(e=>{Od[e.value]={label:e.label,...Dd[e.value]||{icon:`quiz`,color:`#0072BA`,darkColor:`#38BDF8`}}}),kd=Ke.map(e=>e.value),Ad={chat:`Chat / default`,book:`Book (scheduler)`,support:`Support (intake)`},jd=e=>{let t=Od[e]||Od.single_select;return document.documentElement.getAttribute(`data-theme`)===`dark`?{...t,color:t.darkColor}:t},Md=e=>e===`single_select`||e===`multi_select`,Nd=e=>e!==`message`,Pd=e=>e===`scheduler`,Fd=e=>e===`message`,Id=e=>e===`email`?`email`:e===`phone`?`phone`:``,Ld=()=>({meeting_label:``,start:`09:00`,end:`17:00`,mins:30,days:14}),Rd=[`meeting_label`,`start`,`end`,`mins`,`days`],zd=[`terminal`,`cta`],Bd=[[``,`No icon`],[`event`,`Calendar`],[`schedule`,`Clock`],[`mail`,`Email`],[`sms`,`Text`],[`phone`,`Phone`],[`chat`,`Chat`],[`description`,`Document`],[`help`,`Question`],[`place`,`Location`],[`person`,`Person`],[`bolt`,`Quick`],[`check_circle`,`Check`],[`star`,`Star`],[`home`,`Home`],[`build`,`Service`]],Vd=!1,z=[],Hd=null,Ud=0,Wd=null,Gd=null,Kd=`chat`,qd={},Jd=[],Yd=null,Xd=null,Zd=``,Qd=()=>`f`+ ++Ud,$d=`<div class="flow-conn"><span class="flow-conn__line"></span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></div>`})),tf,nf=o((()=>{tf=`!function(){"use strict";try{window.machfivemagnet={appGuid:"##APPGUID##",magnets:"##MAGNET_DEFINITIONS##"}}catch(e){return}var e=window.machfivemagnet||{},t="string"==typeof e.appGuid?e.appGuid:"",a=Array.isArray(e.magnets)?e.magnets:[];if(t&&a.length){var r,n="function"==typeof window.fetch?window.fetch.bind(window):null,o="#0072BA",i="Chat with us",m="Typically replies in a few minutes",s=function(){try{var e=document.currentScript;if(!e||!e.src)for(var t=document.getElementsByTagName("script"),a=t.length-1;a>=0;a--)if(/coreSnippet/.test(t[a].src||"")){e=t[a];break}if(e&&e.src)return new URL(e.src,location.href).origin}catch(e){}return"https://machfivemagnet-saas.onrender.com"}(),l=function(){var e={};try{var t=new URLSearchParams(location.search);["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(a){var r=t.get(a);r&&(e[a]=r)})}catch(e){}try{var a=JSON.parse(sessionStorage.getItem("m5m_attr")||"{}");e=Object.assign({},a,e),Object.keys(e).length&&sessionStorage.setItem("m5m_attr",JSON.stringify(e))}catch(e){}return e}(),c=function(){try{var e=window.MachFiveMagnet;return e&&"object"==typeof e&&Array.isArray(e.instances)||(e={instances:[],open:function(t,a){var r=_(e.instances,t);if(r)try{r.open(a||null)}catch(e){A(e)}return!!r},close:function(t){var a=_(e.instances,t);if(a)try{a.close()}catch(e){}return!!a}},window.MachFiveMagnet=e),e}catch(e){return{instances:[]}}}(),d={attrs:["data-theme","data-mode","data-color-scheme"],dark:["dark","theme-dark"],light:["light","theme-light"]},p=[],u=null,g={manual:"none"},h={surface:"--m5-surface",surface_2:"--m5-surface-2",border:"--m5-border",text:"--m5-text",text_sub:"--m5-text-sub",meta:"--m5-meta",msg_bg:"--m5-msg-bg",bot_bg:"--m5-bot-bg",bot_border:"--m5-bot-border",radius:"--m5-radius",radius_msg:"--m5-radius-msg"},f={inter:"Inter:wght@400;500;600;700",roboto:"Roboto:wght@400;500;700",poppins:"Poppins:wght@400;500;600;700",montserrat:"Montserrat:wght@400;500;600;700",lato:"Lato:wght@400;700","open sans":"Open+Sans:wght@400;600;700",nunito:"Nunito:wght@400;600;700",raleway:"Raleway:wght@400;600;700","work sans":"Work+Sans:wght@400;500;600;700",oswald:"Oswald:wght@400;500;600;700",merriweather:"Merriweather:wght@400;700"},v={call:{icon:"phone",label:"Call"},email:{icon:"mail",label:"Email"},book:{icon:"event",label:"Book"},chat:{icon:"chat",label:"Chat"},support:{icon:"headset",label:"Support"}},b=[{label:"Sales enquiry",icon:"description"},{label:"Support",icon:"help"},{label:"Billing",icon:"description"},{label:"Something else",icon:"chat"}],x={chat:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',close:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',send:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',check:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',arrow:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',phone:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',mail:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',calendar:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'},y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAABi2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlJlYWxGYXZpY29uR2VuZXJhdG9yIChodHRwczovL3JlYWxmYXZpY29uZ2VuZXJhdG9yLm5ldCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiC1sxQAAAP8SURBVFgJ7VZNaFxVFP7uu+/NS1piBH+qYqG4aBFiEcSflYo/aKuCG0V3guDGhSC66UZ0IbooUjeCC4ugGxGxFKQoFmooVDTVxkWkJmDixCYpmaZOmuT93Hv9zpu86XQy744wgiA9MDDvnXPP+c53fu4Drsp/zIDyx3cKL02Efps+2g/vygHlqqz8AF49sRPY+BgIRqBQ6aSnc8cTQBMGL+DQo3M9bfjSn12SDSPGvQhr2+AMtkBQnfi78CkN5Mk6QwxXBZf3fgDa0qtKYTICsD4/gKG+xCC4wsJ1isJH9VE/AJ5TNmdshbt3jeLdp/YUMTQzP/LLIt47PgOlNfUOLz+wC4/svg7GOAjUN45NY2r+LyCqVUenpg+ABKBzxV5srm3g9FxDHqEDhbnlVYIzBGQR6QBDgcXMUhNU4cJahvpyk+cy6ktaeuPoCyCwmuw6XD+s8fDuG9peLlxK2RYZqVd488kxPDF2EyztxPbFTyfQXF0HyYFJ2Dse8QKIkwQmiOjFYTRWuPPW0baridkGByTBfbfvwCsP3oZttZaro5PzmKo3yEQAxb6IyQx5rJSgUrOpUEWWkinHuUPyPEcQGBx4fE87+MX1DG8dnUSabLD3MpaI5/qIlwEkKVTIopIBJWPYIWmWYf/em7Fv7Jb224/Gz+LH6QVEoWTP4DI5bGKf+AEIeUYKSQBdDNw4EuPA/jsQBi0S/2BTHjp2BtqRGcN3nBTn2IAhS+gRP4CUfiJmYmXGr8xk396dGBm67PzgVz9hdmEZQ9ILMoeypARAIg/V4gdABlhm/mwxcp1urhm+PN/fT5/D4eOTbDhharPuBKA4EVYPCECRTulmWUi9JKPu7c9PYrV5idmzXKWUDOje50ozLwOx7CGdkoGtPVA6+PLUr/hm4jdwTRRAy/dlCbStecfQC4AFLGiUjdc9BRJohcvm4BfjbPSEq78je1G2GRhwEyr2gMoJoEcJDn/9A34++zviiHmYK8e0BOBYIp/4GeAmVFzu0oQmS7HGvSCNrZjd7GIDHxz5DhGnQ3pkixQMcBB0F7AuQy+AmMYZu7pGZ6enZvDYa+/TYwvAyuoaFpcavIg4793ZSxABwCmIc15kXUE7H70AQAa4bklBgGYzwZmVi+2zwkLIW5BfPMWnT1tR/ikY4DXK0fSJH0CrCXnnKqOdU0w2KG5XcS5i2BxVIggd93c2AICo4eaza+3TXCehc/YerpZ3Cr/GLrhAva6UrnPdV15oRJtH23W9CqO830zFZ9LS7bj/+Yega986m//JrfDc+ROfjPc/1d+iTwk6HFizHS45x8569vz4Zyc7NAP9/ccArDF1ft0/s3Tq3ws+EPKrh/83DPwN2Ems/cosU7cAAAAASUVORK5CYII=",w={event:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",schedule:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",mail:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",chat:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",sms:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",phone:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",description:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",help:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",place:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",person:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",bolt:"M7 2v11h3v9l7-12h-4l4-8z",check_circle:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",home:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",build:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",headset:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z",copy:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},k={calendar:"event",appointment:"event",book:"event",email:"mail",message:"chat",text:"sms",call:"phone",quote:"description",document:"description",question:"help",location:"place",clock:"schedule",quick:"bolt",check:"check_circle",services:"build",service:"build",support:"headset",support_agent:"headset",headset_mic:"headset"};r=function(){try{!function(){for(var e={},t=0;t<a.length;t++){var r=a[t],n=r&&r.mag_display_mode;n&&!e[n]&&(e[n]=!0,"chat"===n||"right_slide"===n||"modal"===n||"inline"===n?U(r,n):A("display mode not yet supported: "+n))}}()}catch(e){A("boot failed",e)}},document.body?r():document.addEventListener("DOMContentLoaded",function(){r()})}function _(e,t){if(!Array.isArray(e)||!e.length)return null;if(null==t||""===t)return e[0];var a,r=String(t);for(a=0;a<e.length;a++)if(e[a]&&e[a].id===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].guid===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].mode===r)return e[a];return null}function A(){try{console.warn.apply(console,["[m5m]"].concat([].slice.call(arguments)))}catch(e){}}function S(e){var t=e&&e.mag_theme_sync&&"object"==typeof e.mag_theme_sync?e.mag_theme_sync:{},a=function(e){var a=Array.isArray(t[e])?t[e].filter(function(e){return"string"==typeof e&&e}):[];return d[e].concat(a)};return{attrs:a("attrs"),dark:a("dark"),light:a("light")}}function C(e){try{var t=document.documentElement;if(!t)return null;for(var a=0;a<e.attrs.length;a++){var r=t.getAttribute(e.attrs[a]);if(r){if("dark"===(r=String(r).trim().toLowerCase()))return"dark";if("light"===r)return"light"}}try{var n=(window.getComputedStyle(t).colorScheme||"").trim().toLowerCase();if(n&&"normal"!==n){var o=n.split(/\\s+/).filter(function(e){return"only"!==e});if(1===o.length&&"dark"===o[0])return"dark";if(1===o.length&&"light"===o[0])return"light"}}catch(e){}var i=t.classList;if(i){var m=e.dark.some(function(e){return i.contains(e)}),s=e.light.some(function(e){return i.contains(e)});if(m&&!s)return"dark";if(s&&!m)return"light"}}catch(e){}return null}function L(e){var t=C(e.cfg),a=e.el&&e.el.classList;return a?(a.toggle("m5m-dark","dark"===t),a.toggle("m5m-light","light"===t),t):t}function E(e,t){if(!e)return null;var a={el:e,cfg:S(t)};p.push(a);var r=L(a);if(!u&&"function"==typeof MutationObserver){u=new MutationObserver(function(){for(var e=0;e<p.length;e++)p[e].el&&!1!==p[e].el.isConnected&&L(p[e])});try{u.observe(document.documentElement,{attributes:!0})}catch(e){u=null}}return r}function z(e,t){try{if("function"==typeof CSSStyleSheet&&"adoptedStyleSheets"in e){var a=new CSSStyleSheet;if("function"==typeof a.replaceSync)return a.replaceSync(t),e.adoptedStyleSheets=[a],"adopted"}}catch(e){}var r=document.createElement("style");return r.textContent=t,e.prepend?e.prepend(r):e.appendChild(r),"style-element"}function M(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}function P(e){3===(e=String(e||"").trim().replace("#","")).length&&(e=e.split("").map(function(e){return e+e}).join("")),/^[0-9a-fA-F]{6}$/.test(e)||(e=o.replace("#",""));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}function I(e,t){return e.map(function(e){return Math.max(0,Math.min(255,Math.round(e*t)))})}function T(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function N(e,t){return"rgba("+e[0]+","+e[1]+","+e[2]+","+t+")"}function D(e){var t=e.map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return.2126*t[0]+.7152*t[1]+.0722*t[2]}function H(e){if(null==e)return"";var t=String(e).trim();return!t||t.length>40?"":/^\\d+(\\.\\d+)?$/.test(t)?t+"px":/^\\d+(\\.\\d+)?(px|rem|em|vh|vw|%)$/.test(t)||/^(min|max|clamp)\\(\\s*[\\d.\\s,a-z%()+*/-]+\\)$/i.test(t)?t:""}function B(e){if(!e)return null;try{var t=new URL(e,location.href).protocol;return/^(https?|mailto|tel):$/.test(t)?e:null}catch(e){return null}}function j(e){try{if(!e)return;var t=String(e).split(",")[0].trim().replace(/^["']+|["']+$/g,"").toLowerCase(),a=f[t];if(!a)return;var r="m5m-font-"+t.replace(/\\s+/g,"-");if(document.getElementById(r))return;var n=document.createElement("link");n.id=r,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family="+a+"&display=swap",(document.head||document.documentElement).appendChild(n)}catch(e){}}function O(e,t){var a=[];try{var r=e.mag_theme_vars&&"object"==typeof e.mag_theme_vars?e.mag_theme_vars:{};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&h[n]){var o=String(r[n]).trim();o&&o.length<=60&&/^[#a-zA-Z0-9(),.%\\s/-]+$/.test(o)&&a.push(h[n]+":"+o)}if(e.mag_font){var i=String(e.mag_font).trim();i&&i.length<=120&&/^[a-zA-Z0-9'",\\s-]+$/.test(i)&&a.push("font-family:"+i)}}catch(e){}return a.length?".m5m-root.m5m-mode-"+t+"{"+a.join(";")+";}":""}function Y(e){var t=[];return(Array.isArray(e)?e:[]).forEach(function(e){if(v[(e=e||{}).type]){var a="call"===e.type||"email"===e.type,r=null!=e.value?String(e.value).trim():"";a&&!r||t.push({type:e.type,label:null!=e.label&&String(e.label).trim()||v[e.type].label,value:r,config:e.config&&"object"==typeof e.config?e.config:{}})}}),t.slice(0,6)}function q(e){return e.length?'<div class="m5m-actionbar">'+e.map(function(e){return'<button type="button" class="m5m-action" data-m5m-act="'+M(e.type)+'">'+F(v[e.type].icon)+"<span>"+M(e.label)+"</span></button>"}).join("")+"</div>":""}function R(e){try{return/^https?:$/.test(new URL(e).protocol)}catch(e){return!1}}function G(){return'<div class="m5m-attrib"><a href="https://machfivemagnet.com/?utm_source=machfivemagnet&utm_medium=attribution&utm_content='+encodeURIComponent(t)+'" target="_blank" rel="noopener" aria-label="Powered by Mach Five Magnet"><img src="'+y+'" alt=""><span class="m5m-attrib-t">Powered by <b>Mach Five Magnet</b></span></a></div>'}function F(e){if(!e)return"";var t=String(e).trim().toLowerCase().replace(/[\\s-]+/g,"_");return k[t]&&(t=k[t]),w[t]?'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+w[t]+'"></path></svg>':""}function U(e,a){var r=null;try{var d=e&&e.mag_ab;if(d&&d.enabled&&d.b&&"object"==typeof d.b){var p="m5m_ab_"+t;try{r=localStorage.getItem(p)}catch(e){}if("A"!==r&&"B"!==r){var u="number"==typeof d.split?d.split:50;r=100*Math.random()<u?"B":"A";try{localStorage.setItem(p,r)}catch(e){}}"B"===r&&(e=Object.assign({},e,d.b))}}catch(e){r=null}var h,f,v=e,y=[],w={},k=0,_=0,L={},U="",J=!1,Z=a||"chat",X=[],Q=!1,W=!1,K=!1,$="",ee=null,te=[],ae={},re=[],ne=!1,oe=0,ie={},me=-1,se=!1,le="m5m"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),ce=!1,de=!1;function pe(){if(!de){de=!0,A("Requests to "+s+" are being blocked by this page — captures and leads will silently fail until this is fixed. This is almost always the HOST PAGE'S own Content-Security-Policy (connect-src), not a bug in the widget: check this tab's Console for a line like \\"Content-Security-Policy: ... blocked ... connect-src ...\\". Fix: add "+s+' to connect-src (also confirm script-src and img-src) — the Magnets page in your MachFiveMagnet dashboard has a copy-paste-ready snippet under "Strict Content-Security-Policy on your site?".');try{(new Image).src=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/csp-ping"}catch(e){}}}function ue(e,a){try{var o=JSON.stringify({event:e,detail:a||null,mode:Z,session:le,variant:r}),i=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/event";if(n)return void n(i,{method:"POST",headers:{"Content-Type":"application/json"},body:o,keepalive:!0}).catch(function(){pe()});navigator.sendBeacon&&navigator.sendBeacon(i,o)}catch(e){}}function ge(e){if(!ce){ce=!0,ue("engage",e);try{document.cookie="m5m_sid="+encodeURIComponent(le)+"; max-age=1800; path=/; SameSite=Lax"}catch(e){}}}function he(){return'<span class="m5m-ava-mark">'+x.chat+"</span>"+(U?'<img class="m5m-ava-img" src="'+M(U)+'" alt="">':"")}function fe(){return!(!ae.root||!ae.root.classList.contains("m5m-open"))}function ve(e,t){var a=setTimeout(e,t);return re.push(a),a}function be(){re.forEach(clearTimeout),re=[],oe=0}function xe(e,t){return oe++,ve(function(){oe--,e()},t)}function ye(){if(!fe()){ae.root.classList.add("m5m-open");try{ae.panel.focus()}catch(e){}if(!Q)return Q=!0,ue("open"),void Be();!ne||K||W||ke()}}function we(){oe>0&&(ne=!0),be(),ae.root.classList.remove("m5m-open");try{ae.launcher.focus()}catch(e){}}function ke(){ne=!1,function(){try{for(var e=ae.messages.querySelectorAll(".m5m-typing"),t=0;t<e.length;t++){var a=e[t].parentNode;a&&a.parentNode&&a.parentNode.removeChild(a)}}catch(e){}}(),He()}function _e(e){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function Ae(){X.push({idx:k,answers:_e(L),emailOptOut:se,messageCount:me}),Se(X.length>1)}function Se(e){ae.backBtn&&ae.backBtn.classList.toggle("m5m-hidden",!e)}function Ce(e){ae.attrband&&ae.attrband.classList.toggle("m5m-hidden",!e)}function Le(){ae.backBtn=h.querySelector(".m5m-back"),ae.backBtn&&ae.backBtn.addEventListener("click",function(){try{!function(){if(!(X.length<2||W||K)){X.pop();var e=X.pop();if(k=e.idx,L=_e(e.answers),se=!!e.emailOptOut,be(),ae.messages)for(;ae.messages.children.length>e.messageCount;)ae.messages.removeChild(ae.messages.lastChild);Pe(),He(!0)}}()}catch(e){A(e)}})}function Ee(){try{c.instances.push({id:null!=v.mag_id&&""!==String(v.mag_id)?String(v.mag_id):null,guid:null!=v.mag_guid&&""!==String(v.mag_guid)?String(v.mag_guid):null,mode:Z,launcher:"inline"!==Z&&!0!==v.mag_hide_launcher,appGuid:t,open:function(e){try{!function(e){e=e&&"object"==typeof e?e:{};var t=Q&&!K&&(!0===e.reset||W);t&&(be(),L={},ie={},$="",se=!1,ee=null,W=!1,K=!1,J=!1,k=0,_=0,ne=!1,me=-1,X=[],Se(!1),ae.messages&&(ae.messages.innerHTML=""),Pe(),Oe(null),y=Array.isArray(v.mag_macro_steps)?v.mag_macro_steps:[],w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)})),function(e){if(e&&"object"==typeof e){var t=0;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t>=40)break;var r=e[a];if(null!=r&&""!==(r=String(r).slice(0,250))){var n=String(a).slice(0,60);Object.prototype.hasOwnProperty.call(L,n)||(L[n]=r,ie[n]=!0,t++)}}}}(e.prefill),"inline"!==Z?(ye(),t&&Be()):t?Be():!ne||K||W||ke()}(e)}catch(e){A(e)}},close:function(){if("inline"!==Z)try{we()}catch(e){}}})}catch(e){}}function ze(){var e=ae.messages.lastElementChild;return!(!e||!e.classList.contains("m5m-row-bot"))}function Me(){if("inline"===Z&&me>=0){var e=ae.messages.children[me];if(e)return void(ae.messages.scrollTop=Math.max(0,e.getBoundingClientRect().top-ae.messages.getBoundingClientRect().top+ae.messages.scrollTop-8))}ae.messages.scrollTop=ae.messages.scrollHeight}function Pe(){ae.input.innerHTML=""}function Ie(e){me=-1;var t=document.createElement("div");t.className="m5m-row m5m-row-user";var a=document.createElement("div");a.className="m5m-msg m5m-user",a.textContent=e,t.appendChild(a),ae.messages.appendChild(t),Me()}function Te(){var e=ze(),t=document.createElement("div");t.className="m5m-row m5m-row-bot"+(e?" m5m-grouped":""),t.setAttribute("aria-hidden","true");var a=document.createElement("span");a.className="m5m-msg-ava",e||(a.innerHTML=he());var r=document.createElement("div");return r.className="m5m-typing",r.innerHTML="<span></span><span></span><span></span>",t.appendChild(a),t.appendChild(r),ae.messages.appendChild(t),Me(),t}function Ne(e,t){if(e){var a=Te();xe(function(){a.parentNode&&a.parentNode.removeChild(a),function(e){var t=ze(),a=document.createElement("div");a.className="m5m-row m5m-row-bot"+(t?" m5m-grouped":"");var r=document.createElement("span");r.className="m5m-msg-ava",t||(r.innerHTML=he());var n=document.createElement("div");n.className="m5m-msg m5m-bot",n.innerHTML=M(e);var o=document.createElement("div");o.className="m5m-col",o.appendChild(n);var i=document.createElement("span");i.className="m5m-time",i.setAttribute("aria-hidden","true"),i.textContent=function(){try{return(new Date).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}catch(e){return""}}(),o.appendChild(i),a.appendChild(r),a.appendChild(o),ae.messages.appendChild(a),Me()}(e),t&&t()},550)}else t&&t()}function De(e,t){var a=(Array.isArray(e)?e:[]).filter(function(e){return null!=e&&""!==String(e)}),r=0;!function e(){fe()?r>=a.length?t():Ne(a[r++],e):ne=!0}()}function He(e){if(fe()){if(ne=!1,me=ae.messages?ae.messages.children.length:-1,!e&&++_>100)return A("step guard tripped — ending flow"),void $e();if(k<0||k>=y.length)return Se(!1),void(v&&v.mag_summary&&!J&&Ke().length?(J=!0,function(){Pe();var e=v&&v.mag_summary_heading||"Here’s what we’ve got",t=v&&v.mag_summary_confirm_label||"Confirm & send",a=Ke().map(function(e){return'<div class="m5m-sum-row"><span class="m5m-sum-label">'+M((t=e,(t=String(t).replace(/_/g," ").trim())?t.charAt(0).toUpperCase()+t.slice(1):t))+'</span><span class="m5m-sum-val">'+M(L[e])+"</span></div>";var t}).join(""),r=document.createElement("div");r.className="m5m-summary",r.innerHTML='<div class="m5m-sum-head" role="heading" aria-level="2">'+M(e)+'</div><div class="m5m-sum-rows">'+a+'</div><button type="button" class="m5m-sum-confirm">'+M(t)+"</button>",ae.messages.appendChild(r),Me();var n=r.querySelector(".m5m-sum-confirm");n.addEventListener("click",function(){n.disabled=!0,$e()}),n.focus()}()):$e());var t=y[k]||{},a=t.step_type,r=t.step_config&&"object"==typeof t.step_config?t.step_config:{};if(r.skip_if_prefilled&&function(e){var t=Array.isArray(e.step_columns)?e.step_columns:[];if(!t.length)return!1;for(var a=0;a<t.length;a++){var r=L[String(t[a])];if(null==r||""===r)return!1}return!0}(t))We("");else{if(ue("step",k+1+"/"+y.length),"message"===a)return r.terminal?(Ae(),void De(t.step_prompts,function(){!function(e){Pe();var t=e&&e.cta&&"object"==typeof e.cta?e.cta:null,a=t?B(t.url):null,r=t&&null!=t.label?String(t.label):"";if(a&&r){var n=document.createElement("div");n.className="m5m-terminal",n.innerHTML='<a class="m5m-terminal-cta" href="'+M(a)+'" target="_blank" rel="noopener noreferrer">'+M(r)+"</a>",ae.messages.appendChild(n),Me()}}(r)})):void De(t.step_prompts,function(){We("")});Ae(),De(t.step_prompts,function(){"single_select"===a?function(e){Pe();var t="inline"===Z,a=document.createElement("div");a.className="m5m-choices"+(t?" m5m-tiles":"");var r=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});r.length?(r.forEach(function(r){var n=String(r.label),o=F(r.icon),i=r.description?String(r.description):"",m=document.createElement("button");m.type="button",m.className="m5m-choice",m.innerHTML=(o?'<span class="m5m-choice-icon">'+o+"</span>":"")+'<span class="m5m-choice-body"><span class="m5m-choice-label">'+M(n)+"</span>"+(i?'<span class="m5m-choice-desc">'+M(i)+"</span>":"")+'</span><span class="m5m-choice-arrow">'+x.arrow+"</span>",m.addEventListener("click",function(){ge("choice"),Qe(e,n),t&&a.parentNode&&a.remove(),Ie(n),Pe();var o=r.config;if(o&&"object"==typeof o&&(o.restyle&&function(e){if(e&&"object"==typeof e&&f&&ae.root)try{if("string"==typeof e.color&&e.color){var t=P(e.color),a=D(t)>.55;f.style.setProperty("--m5-brand",T(t)),f.style.setProperty("--m5-brand-2",T(I(t,a?.6:.78))),f.style.setProperty("--m5-brand-soft",N(t,.12)),f.style.setProperty("--m5-brand-glow",N(t,.34)),f.style.setProperty("--m5-brand-ring",N(t,.38)),f.style.setProperty("--m5-on-brand",a?"#16243a":"#ffffff")}if("string"==typeof e.logo&&e.logo){U=e.logo;for(var r=ae.root.querySelectorAll(".m5m-ava"),n=0;n<r.length;n++)r[n].innerHTML=he()}if("contain"!==e.logo_fit&&"cover"!==e.logo_fit||f.style.setProperty("--m5-logo-fit",e.logo_fit),!0===e.dark?(ae.root.classList.add("m5m-dark"),ae.root.classList.remove("m5m-light")):!1===e.dark&&(ae.root.classList.add("m5m-light"),ae.root.classList.remove("m5m-dark")),"string"==typeof e.title&&e.title){var o=ae.root.querySelector(".m5m-title");o&&(o.textContent=e.title)}if("string"==typeof e.subtitle&&e.subtitle){var i=ae.root.querySelector(".m5m-subtitle");i&&(i.innerHTML='<i class="m5m-online"></i>'+M(e.subtitle))}}catch(e){A(e)}}(o.restyle),"string"==typeof o.open&&o.open))try{window.MachFiveMagnet&&window.MachFiveMagnet.open(String(o.open))||A('option config.open: no magnet registered as "'+o.open+'" on this page')}catch(e){A(e)}xe(function(){We(r.goto?String(r.goto):"")},260)}),a.appendChild(m)}),(t?ae.messages:ae.input).appendChild(a),Me()):We("")}(t):"multi_select"===a?function(e){Pe();var t=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});if(t.length){var a=document.createElement("div");a.className="m5m-multi";var r={},n=document.createElement("button");t.forEach(function(e){var t=String(e.label),o=F(e.icon),i=document.createElement("button");i.type="button",i.className="m5m-mopt",i.innerHTML=(o?'<span class="m5m-mopt-icon">'+o+"</span>":"")+'<span class="m5m-mopt-label">'+M(t)+'</span><span class="m5m-mopt-check">'+x.check+"</span>",i.addEventListener("click",function(){var e=!r[t];r[t]=e,i.classList.toggle("m5m-mopt-on",e),function(){var e=!1;for(var t in r)if(r[t]){e=!0;break}n.disabled=!e}()}),a.appendChild(i)}),n.type="button",n.className="m5m-multi-cont",n.textContent="Continue",n.disabled=!0,n.addEventListener("click",function(){var t=[];for(var n in r)r[n]&&t.push(n);if(t.length){ge("multi_select");var o=t.join(", ");Qe(e,o),a.parentNode&&a.remove(),Ie(o),Pe(),xe(function(){We("")},260)}}),a.appendChild(n),ae.messages.appendChild(a),Me()}else We("")}(t):"scheduler"===a?function(e){if(Pe(),!Array.isArray(e.step_columns)||!e.step_columns.length)return A("scheduler step has no Saves-to field configured — skipping"),void We("");var t=e&&e.step_config||{};if("ms_bookings"!==t.remote){var a=t.meeting_label||"",r=Xe(t.start||"09:00"),n=Xe(t.end||"17:00"),o=t.mins||30,i=Math.max(1,Math.min(60,t.days||14)),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=new Date;l.setHours(0,0,0,0);for(var c=[],d=0;d<i;d++)c.push(new Date(l.getTime()+864e5*d));for(var p=[],u=r;u<n;u+=o)p.push(u);var g=0,h=null,f=function(e){var t=Math.floor(e/60),a=e%60,r=t%12;return 0===r&&(r=12),r+":"+(a<10?"0"+a:a)+" "+(t>=12?"PM":"AM")},v=document.createElement("div");v.className="m5m-sched";var b=function(){var e=c.map(function(e,t){return'<button type="button" class="m5m-sd-day'+(t===g?" m5m-sd-on":"")+'" data-d="'+t+'"><span class="m5m-sd-dow">'+m[e.getDay()]+'</span><span class="m5m-sd-num">'+e.getDate()+'</span><span class="m5m-sd-mon">'+s[e.getMonth()]+"</span></button>"}).join(""),t=p.map(function(e){return'<button type="button" class="m5m-sd-slot'+(h===e?" m5m-sd-on":"")+'" data-t="'+e+'">'+f(e)+"</button>"}).join("");v.innerHTML=(a?'<div class="m5m-sd-meta">'+F("schedule")+"<span>"+M(a)+"</span></div>":"")+'<div class="m5m-sd-days">'+e+'</div><div class="m5m-sd-slots">'+t+'</div><button type="button" class="m5m-sd-confirm"'+(null===h?" disabled":"")+">Confirm time</button>"};b(),v.addEventListener("click",function(t){var a=t.target.closest(".m5m-sd-day");if(a){var r=parseInt(a.getAttribute("data-d"),10)||0,n=r>g?1:r<g?-1:0;g=r,h=null,b();var o=v.querySelector(".m5m-sd-slots");o&&n&&(o.className="m5m-sd-slots "+(n>0?"m5m-slide-l":"m5m-slide-r"))}else{var i=t.target.closest(".m5m-sd-slot");if(i)return h=parseInt(i.getAttribute("data-t"),10),void b();if(t.target.closest(".m5m-sd-confirm")){if(null===h)return;ge("scheduler");var l=c[g],d=m[l.getDay()]+" "+s[l.getMonth()]+" "+l.getDate()+", "+f(h);try{$=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(t){$=""}Qe(e,d),v.parentNode&&v.remove(),Ie(d),Pe(),xe(function(){We("")},260)}}}),ae.messages.appendChild(v),Me()}else!function(e,t){var a=document.createElement("div");a.className="m5m-sched",a.innerHTML='<div class="m5m-sd-meta">'+F("schedule")+"<span>"+M(t.meeting_label||"Loading times…")+"</span></div>",ae.messages.appendChild(a),Me(),Je(a,{step:e,cfg:t,viewStart:Date.now(),horizonDays:90,duration:30,serviceName:""},!0)}(e,t)}(t):function(e){if(Pe(),!Array.isArray(e.step_columns)||!e.step_columns.length)return A("input step has no Saves-to field configured — skipping"),void We("");var t=e.step_type,a=e.step_config&&"object"==typeof e.step_config?e.step_config:{},r=document.createElement("form");r.className="m5m-form";var n=document.createElement("input");n.type="email"===t?"email":"phone"===t?"tel":"text",n.placeholder=null!=a.placeholder&&""!==String(a.placeholder)?String(a.placeholder):v&&v.mag_input_placeholder||"Type your answer…",n.autocomplete="email"===t?"email":"phone"===t?"tel":"off",n.required=!0;var o=document.createElement("button");if(o.type="submit",o.className="m5m-send",o.setAttribute("aria-label","Send"),o.innerHTML=x.send,r.appendChild(n),r.appendChild(o),r.addEventListener("submit",function(a){a.preventDefault();var r=(n.value||"").trim();!r||"email"===t&&n.validity&&!n.validity.valid?n.focus():(ge("input"),Qe(e,r),Ie(r),Pe(),xe(function(){We("")},260))}),ae.input.appendChild(r),"email"===t){var i=document.createElement("label");i.className="m5m-optout";var m=document.createElement("input");m.type="checkbox",m.checked=se,m.addEventListener("change",function(){se=m.checked});var s=document.createElement("span");s.textContent="Don’t email me updates",i.appendChild(m),i.appendChild(s),ae.input.appendChild(i)}if(a.optional){var l=document.createElement("button");l.type="button",l.className="m5m-skip",l.textContent=null!=a.skip_label&&""!==String(a.skip_label)?String(a.skip_label):"Skip",l.addEventListener("click",function(){ge("skip"),Pe(),xe(function(){We("")},120)}),ae.input.appendChild(l)}n.focus(),Me()}(t)})}}}function Be(){v&&v.mag_home&&te.length>0?function(){ae.messages&&(ae.messages.innerHTML=""),Ce(!1),Pe(),Oe(null),Se(!1);var e=null!=v.mag_welcome?String(v.mag_welcome):"",t=v.mag_home_title||v.mag_title||"How can we help?",a=document.createElement("div");a.className="m5m-home",a.innerHTML='<div class="m5m-home-ava">'+he()+"</div>"+("inline"===Z?"":'<div class="m5m-home-title" role="heading" aria-level="2">'+M(t)+"</div>")+(e?'<div class="m5m-home-text">'+M(e)+"</div>":"")+'<div class="m5m-home-hint">'+F("bolt")+"<span>Choose an option below to get started.</span></div>",ae.messages.appendChild(a),Me()}():(k=0,_=0,He())}function je(){ae.actionbar&&ae.actionbar.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("[data-m5m-act]"):null;if(a)try{!function(e){for(var a=null,r=0;r<te.length;r++)if(te[r].type===e){a=te[r];break}if(a)if(ue("route",e),ge(e),be(),Oe(e),Se(!1),"call"!==e&&"email"!==e)if("book"===e&&a.config&&"calendly"===a.config.source&&function(e){try{var t=new URL(e);return"https:"===t.protocol&&("calendly.com"===t.hostname||/\\.calendly\\.com$/.test(t.hostname))}catch(e){return!1}}(a.config.calendly_url))!function(e){var a;Ce(!0);try{a=new URL(e.config.calendly_url)}catch(e){return void Fe(Ue("book",{type:"book",config:{}}))}a.searchParams.set("embed_domain",location.hostname||"localhost"),a.searchParams.set("embed_type","Inline"),a.searchParams.set("hide_gdpr_banner","1"),a.searchParams.set("utm_source","machfivemagnet"),a.searchParams.set("utm_content",t),a.searchParams.set("salesforce_uuid",le);var r=qe(["email","email_address","work_email"]),n=qe(["name","full_name"]);n||(n=[qe(["first_name","firstname"]),qe(["last_name","lastname"])].filter(function(e){return e}).join(" ")),n&&a.searchParams.set("name",n.slice(0,100)),r&&a.searchParams.set("email",r.slice(0,100)),function(e){Re=e,Ge||(Ge=!0,window.addEventListener("message",function(e){try{var t="";try{t=new URL(e.origin).hostname}catch(e){return}if("calendly.com"!==t&&!/\\.calendly\\.com$/.test(t))return;if(!e.data||"calendly.event_scheduled"!==e.data.event)return;if(!Re||!Re.isConnected)return;if(Re.querySelector(".m5m-cal-done"))return;var a=document.createElement("div");a.className="m5m-cal-done",a.textContent="You are booked. A confirmation email is on the way.",Re.appendChild(a),Me()}catch(e){}}))}(Ye(a.toString(),e.config.event_name||"Schedule a meeting"))}(a);else{if("book"===e&&a.config&&"ms_bookings"===a.config.source&&a.config.business_id&&a.config.service_id)return L={},J=!1,W=!1,K=!1,$="",ee=null,void Fe(Ue(e,a));if("book"===e&&function(e){try{var t=new URL(e);if("https:"!==t.protocol)return"";var a=t.hostname;return"outlook.office.com"===a||"outlook.office365.com"===a?"ms_bookings":"cal.com"===a||/\\.cal\\.com$/.test(a)?"calcom":""}catch(e){return""}}(a.value))return Ce(!0),void Ye(a.value,a.label||"Book a time");if("book"===e&&R(a.value))try{window.open(a.value,"_blank","noopener")}catch(e){}else L={},J=!1,W=!1,K=!1,$="",ee=null,Fe(Ue(e,a))}else!function(e,t){Ce(!0),ae.messages&&(ae.messages.innerHTML=""),Pe();var a=t&&t.value?String(t.value):"",r="call"===e,n=B(r?"tel:"+a.replace(/[^\\d+]/g,""):"mailto:"+a),o=document.createElement("div");o.className="m5m-reveal",o.innerHTML='<div class="m5m-reveal-icon">'+F(r?"phone":"mail")+'</div><div class="m5m-reveal-title" role="heading" aria-level="2">'+(r?"Call us":"Email us")+"</div>"+(n?'<a class="m5m-reveal-val" href="'+M(n)+'"'+(r?"":' target="_blank" rel="noopener noreferrer"')+">"+M(a)+"</a>":'<div class="m5m-reveal-val">'+M(a)+"</div>")+'<button type="button" class="m5m-reveal-copy">'+F("copy")+"<span>Copy</span></button>",ae.messages.appendChild(o);var i=o.querySelector(".m5m-reveal-copy");if(i&&i.addEventListener("click",function(){var e=o.querySelector(".m5m-reveal-val");!function(e,t){var a=function(){var e=t&&t.querySelector("span");if(e){var a=e.textContent;e.textContent="Copied",ve(function(){e&&(e.textContent=a)},1400)}};try{if(navigator.clipboard&&navigator.clipboard.writeText)return void navigator.clipboard.writeText(e).then(a,function(){Ve(e),a()})}catch(e){}Ve(e),a()}((e&&e.textContent?e.textContent.replace(/^\\s+|\\s+$/g,""):"")||a,i)}),Me(),r&&f)try{window.CallTrk&&"function"==typeof window.CallTrk.swap&&window.CallTrk.swap(f)}catch(e){}}(e,a)}(a.getAttribute("data-m5m-act"))}catch(e){A(e)}})}function Oe(e){if(ae.actionbar)for(var t=ae.actionbar.querySelectorAll("[data-m5m-act]"),a=0;a<t.length;a++)t[a].classList.toggle("m5m-act-on",t[a].getAttribute("data-m5m-act")===e)}function Ye(e,t){ae.messages&&(ae.messages.innerHTML=""),Pe();var a=document.createElement("div");a.className="m5m-cal";var r=document.createElement("iframe");return r.className="m5m-cal-frame",r.src=e,r.title=t,a.appendChild(r),ae.messages.appendChild(a),Me(),a}function qe(e){for(var t in L)if(Object.prototype.hasOwnProperty.call(L,t)&&-1!==e.indexOf(String(t).toLowerCase())&&String(L[t]||"").trim())return String(L[t]).trim();return""}var Re=null,Ge=!1;function Fe(e){Ce(!0),y=Array.isArray(e)?e.slice():[],w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)}),ae.messages&&(ae.messages.innerHTML=""),Pe(),k=0,_=0,X=[],me=-1,Se(!1),y.length?He():A("route has no steps")}function Ue(e,t){var a=v&&v.mag_routes||{},r=function(e){return Array.isArray(e)&&e.length?e:null};return"chat"===e?r(a.chat)||(Array.isArray(v.mag_macro_steps)?v.mag_macro_steps:[]):"book"===e?r(a.book)||function(e){var t=e&&e.config||{},a="ms_bookings"===t.source&&t.business_id&&t.service_id;return[{id:"m5m_book",step_type:"scheduler",step_options:[],step_columns:[t.column||"preferred_time"],step_prompts:[t.heading||"When works best for you?"],step_config:a?{meeting_label:t.event_name||t.meeting_label||"",remote:"ms_bookings"}:{meeting_label:t.meeting_label||"",start:t.start||"09:00",end:t.end||"17:00",mins:t.mins||30,days:t.days||14}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):"support"===e?r(a.support)||function(e){var t=e&&e.config||{};return[{id:"m5m_support",step_type:"multi_select",step_options:(Array.isArray(t.options)&&t.options.length?t.options:b).map(function(e){return e&&"object"==typeof e?{label:String(e.label||""),icon:e.icon||""}:{label:String(e),icon:""}}).filter(function(e){return""!==e.label}),step_columns:t.column?[t.column]:[],step_prompts:[t.heading||"How can we help you today?"],step_description:"Select all that apply",step_config:{}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):[]}function Ve(e){try{var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",(h||document.body).appendChild(t),t.focus(),t.select(),document.execCommand("copy"),t.parentNode&&t.parentNode.removeChild(t)}catch(e){}}function Je(e,a,r){!function(e,t){for(var a="",r=0;r<7;r++)a+='<span class="m5m-sd-day m5m-skel"></span>';for(var n="",o=0;o<6;o++)n+='<span class="m5m-sd-slot m5m-skel"></span>';e.innerHTML='<div class="m5m-sd-meta">'+F("schedule")+"<span>"+M(t.cfg.meeting_label||t.serviceName||"Loading times…")+'</span></div><div class="m5m-sd-nav"><span class="m5m-sd-month m5m-skel"></span></div><div class="m5m-sd-strip"><button type="button" class="m5m-sd-pg" disabled>&lsaquo;</button><div class="m5m-sd-days">'+a+'</div><button type="button" class="m5m-sd-pg" disabled>&rsaquo;</button></div><div class="m5m-sd-slots">'+n+'</div><button type="button" class="m5m-sd-confirm" disabled>Confirm time</button>'}(e,a);var o=r?"":"?from="+encodeURIComponent(new Date(a.viewStart).toISOString());n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/booking/slots"+o).then(function(e){if(!e.ok)throw new Error("slots HTTP "+e.status);return e.json()}).then(function(t){if(!t||!t.ok)throw new Error("bad slots");if(a.horizonDays=t.horizon_days||90,a.duration=t.duration_mins||30,a.serviceName=t.service_name||"",r&&(!t.slots||!t.slots.length))throw new Error("no slots");Ze(e,a,t.slots||[])}).catch(function(t){if(A("remote slots failed",t),r){e.parentNode&&e.remove();for(var n=null,o=0;o<te.length;o++)if("book"===te[o].type){n=te[o];break}n&&R(n.value)?(Ce(!0),Ye(n.value,n.label||"Book a time")):Ne("Live availability is unavailable right now. Tell us a good time below instead.",function(){We("")})}else Ze(e,a,[])})}function Ze(e,t,a){var r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=[],i={};a.forEach(function(e){var t=new Date(e.start),a=t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate();i[a]||(i[a]=[],o.push({key:a,dt:t})),i[a].push(e)});var m=0,s=-1,l=new Date;l.setHours(0,0,0,0);for(var c=l.getTime()+864e5*t.horizonDays,d=t.viewStart>Date.now()+6e4,p=t.viewStart+12096e5<c,u=function(e){var t=new Date(e),a=t.getHours(),r=t.getMinutes(),n=a%12;return 0===n&&(n=12),n+":"+(r<10?"0"+r:r)+" "+(a>=12?"PM":"AM")},g=[],h=new Date(l.getFullYear(),l.getMonth(),1);h.getTime()<c;)g.push({y:h.getFullYear(),m:h.getMonth()}),h=new Date(h.getFullYear(),h.getMonth()+1,1);var f=new Date(t.viewStart),v=function(a){var l=o.map(function(e,t){return'<button type="button" class="m5m-sd-day'+(t===m?" m5m-sd-on":"")+'" data-d="'+t+'"><span class="m5m-sd-dow">'+r[e.dt.getDay()]+'</span><span class="m5m-sd-num">'+e.dt.getDate()+'</span><span class="m5m-sd-mon">'+n[e.dt.getMonth()]+"</span></button>"}).join(""),c=(o.length&&i[o[m].key]||[]).map(function(e,t){return'<button type="button" class="m5m-sd-slot'+(s===t?" m5m-sd-on":"")+'" data-t="'+t+'">'+u(e.start)+"</button>"}).join(""),h='<select class="m5m-sd-month" aria-label="Jump to month">'+g.map(function(e){var t=e.y===f.getFullYear()&&e.m===f.getMonth();return'<option value="'+e.y+"-"+e.m+'"'+(t?" selected":"")+">"+n[e.m]+" "+e.y+"</option>"}).join("")+"</select>";e.innerHTML='<div class="m5m-sd-meta">'+F("schedule")+"<span>"+M(t.cfg.meeting_label||t.serviceName||"Pick a time")+'</span></div><div class="m5m-sd-nav">'+h+'</div><div class="m5m-sd-strip"><button type="button" class="m5m-sd-pg" data-pg="-1" aria-label="Earlier days"'+(d?"":" disabled")+'>&lsaquo;</button><div class="m5m-sd-days">'+(l||'<span class="m5m-sd-none">No open times in this window</span>')+'</div><button type="button" class="m5m-sd-pg" data-pg="1" aria-label="Later days"'+(p?"":" disabled")+'>&rsaquo;</button></div><div class="m5m-sd-slots'+(a?a>0?" m5m-slide-l":" m5m-slide-r":"")+'">'+c+'</div><button type="button" class="m5m-sd-confirm"'+(s<0?" disabled":"")+">Confirm time</button>"};v(),e.onclick=function(a){var l=a.target.closest(".m5m-sd-pg");if(l&&!l.disabled)return t.viewStart=Math.max(Date.now(),t.viewStart+14*(parseInt(l.getAttribute("data-pg"),10)||1)*864e5),void Je(e,t,!1);var c=a.target.closest(".m5m-sd-day");if(c){var d=parseInt(c.getAttribute("data-d"),10)||0,p=d>m?1:d<m?-1:0;return m=d,s=-1,void v(p)}var g=a.target.closest(".m5m-sd-slot");if(g)return s=parseInt(g.getAttribute("data-t"),10),void v();if(a.target.closest(".m5m-sd-confirm")){if(s<0||!o.length)return;ge("scheduler");var h=(i[o[m].key]||[])[s];if(!h)return;var f=o[m].dt,b=r[f.getDay()]+" "+n[f.getMonth()]+" "+f.getDate()+", "+u(h.start);try{$=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(e){$=""}ee={start:h.start,staff_id:h.staff_id||""},Qe(t.step,b),e.parentNode&&e.remove(),Ie(b),Pe(),xe(function(){We("")},260)}},e.onchange=function(a){var r=a.target.closest(".m5m-sd-month");if(r){var n=String(r.value).split("-"),o=new Date(parseInt(n[0],10),parseInt(n[1],10),1).getTime();t.viewStart=Math.max(Date.now(),o),Je(e,t,!1)}}}function Xe(e){var t=String(e).split(":");return 60*(parseInt(t[0],10)||0)+(parseInt(t[1],10)||0)}function Qe(e,t){(Array.isArray(e.step_columns)?e.step_columns:[]).forEach(function(e){e&&(L[String(e)]=t,delete ie[String(e)])})}function We(e){if(e){if(!Object.prototype.hasOwnProperty.call(w,e))return A("goto target not found: "+e),void $e();k=w[e]}else k+=1;He()}function Ke(){return Object.keys(L).filter(function(e){return!ie[e]})}function $e(){if(fe()&&(Pe(),!W&&!K))if(n){K=!0;var e=Te();!function(){if(!ee||!n)return Promise.resolve(!1);var e=ee;ee=null;var a=qe(["email","email_address","work_email"]),r=qe(["name","full_name"])||[qe(["first_name","firstname"]),qe(["last_name","lastname"])].filter(function(e){return e}).join(" ");a?n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/booking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({start:e.start,staff_id:e.staff_id,name:r,email:a,session:le}),keepalive:!0}).then(function(e){return e.ok}).catch(function(){return!1}):Promise.resolve(!1)}();var a={"Content-Type":"application/json"},o="";try{o=window.localStorage&&window.localStorage.getItem("m5m_test_token")||""}catch(e){}o&&(a.Authorization="Bearer "+o,a["X-M5M-Test-Mode"]="1"),n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/capture",{method:"POST",headers:a,body:JSON.stringify({fields:L,attribution:l,session:le,mode:Z,variant:r,scheduler_tz:$||void 0,email_opt_out:se}),keepalive:!0}).then(function(e){if(!e.ok)throw new Error("capture HTTP "+e.status);return e.json().catch(function(){return{}})}).then(function(){W=!0,K=!1,e.parentNode&&e.parentNode.removeChild(e),fe()&&function(){Pe();var e=v&&v.mag_success_title||"You’re all set!",t=v&&null!=v.mag_success_text?String(v.mag_success_text):"Thanks! We’ve got your details and someone will be in touch shortly.",a=v&&v.mag_success_cta&&"object"==typeof v.mag_success_cta?v.mag_success_cta:null,r=a?B(a.url):null,n=a&&null!=a.label?String(a.label):"",o=document.createElement("div");o.className="m5m-success";var i="inline"===Z;o.innerHTML='<div class="m5m-success-icon">'+x.check+'</div><div class="m5m-success-title" role="heading" aria-level="2">'+M(e)+"</div>"+(t?'<div class="m5m-success-text">'+M(t)+"</div>":"")+(r&&n?'<a class="m5m-success-link" href="'+M(r)+'" target="_blank" rel="noopener noreferrer">'+M(n)+"</a>":"")+(i?"":'<button type="button" class="m5m-success-cta">Close</button>'),ae.messages.appendChild(o),Me();var m=o.querySelector(".m5m-success-link"),s=o.querySelector(".m5m-success-cta");s&&s.addEventListener("click",we),m?m.focus():s&&s.focus()}()}).catch(function(t){K=!1,e.parentNode&&e.parentNode.removeChild(e),A("capture failed",t),t instanceof TypeError&&pe(),fe()&&et()})}else et()}function et(){ae.input.innerHTML='<div class="m5m-error"><div class="m5m-error-text">Something went wrong sending your details.</div><button type="button" class="m5m-retry">Try again</button></div>';var e=ae.input.querySelector(".m5m-retry");e.addEventListener("click",function(){Pe(),K=!1,$e()}),e.focus()}"inline"===Z?function(){if(document.body&&!document.getElementById("m5m-magnet-inline")){var t=function(){try{var e=document.querySelector("[data-m5m-inline], #m5m-inline");if(e)return e;for(var t=null,a=document.getElementsByTagName("script"),r=a.length-1;r>=0;r--)if(/coreSnippet/.test(a[r].src||"")){t=a[r];break}if(t&&t.parentNode){var n=document.createElement("div");return t.parentNode.insertBefore(n,t.nextSibling),n}}catch(e){}return null}();if(t)if(y=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],te=Y(e.mag_actions),y.length||e.mag_home&&te.length){w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)});var a=e.mag_theme_color||o,r=e.mag_title||i,n=null!=e.mag_subtitle?String(e.mag_subtitle):m,s=e.mag_theme_mode,l="sync"===s?C(S(e)):null,c="dark"===s||"dark"===l?"m5m-dark":"light"===s||"light"===l?"m5m-light":"";j(e.mag_font),U=e.mag_logo_url||"";var d=q(te),p=P(a),u=D(p)>.55,g=T(I(p,u?.6:.78));(f=document.createElement("div")).id="m5m-magnet-inline",f.style.setProperty("--m5-brand",T(p)),f.style.setProperty("--m5-brand-2",g),f.style.setProperty("--m5-brand-soft",N(p,.12)),f.style.setProperty("--m5-brand-glow",N(p,.34)),f.style.setProperty("--m5-brand-ring",N(p,.38)),f.style.setProperty("--m5-on-brand",u?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover");var v=H(e.mag_inline_width),b=H(e.mag_inline_height);/%\\s*$/.test(b)&&(b=""),v&&f.style.setProperty("--m5-inline-w",v),b&&f.style.setProperty("--m5-inline-h",b),t.appendChild(f),(h=f.attachShadow({mode:"open"})).innerHTML='<div class="m5m-root m5m-mode-inline m5m-open'+(c?" "+c:"")+'"><section class="m5m-inline-card" aria-label="'+M(r)+'"><header class="m5m-header"><button class="m5m-back m5m-hidden" type="button" aria-label="Back to the previous question">'+x.arrow+'</button><span class="m5m-ava">'+he()+'</span><span class="m5m-head-text"><span class="m5m-title">'+M(r)+"</span>"+(n?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+M(n)+"</span>":"")+'</span></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+d+G()+"</section></div>",z(h,V()+O(e,Z)),ae.root=h.querySelector(".m5m-root"),"sync"===s&&E(ae.root,e),ae.panel=h.querySelector(".m5m-inline-card"),ae.messages=h.querySelector(".m5m-messages"),ae.input=h.querySelector(".m5m-input"),ae.actionbar=h.querySelector(".m5m-actionbar"),ae.attrband=h.querySelector(".m5m-attrib"),je(),Le(),h.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),h.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),Q=!0,ue("open"),Be(),Ee()}else A("magnet has no steps");else A("inline magnet: no mount target — add <div data-m5m-inline></div> where it should appear")}}():function(){if(document.body){var a="m5m-magnet-"+Z;if(!document.getElementById(a))if(y=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],te=Y(e.mag_actions),y.length||e.mag_home&&te.length){w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)});var r=e.mag_theme_color||o,n=e.mag_title||i,s=null!=e.mag_subtitle?String(e.mag_subtitle):m,l=e.mag_launcher_label||n,d=e.mag_theme_mode,p="sync"===d?C(S(e)):null,u="dark"===d||"dark"===p?"m5m-dark":"light"===d||"light"===p?"m5m-light":"";!0===e.mag_hide_launcher&&(u+=(u?" ":"")+"m5m-no-launcher");var v=0;if(!0!==e.mag_hide_launcher)try{v=c.instances.filter(function(e){return e&&e.launcher}).length}catch(e){}j(e.mag_font),U=e.mag_logo_url||"";var b=q(te),k=P(r),_=D(k)>.55,L=T(I(k,_?.6:.78));(f=document.createElement("div")).id=a,f.style.setProperty("--m5-brand",T(k)),f.style.setProperty("--m5-brand-2",L),f.style.setProperty("--m5-brand-soft",N(k,.12)),f.style.setProperty("--m5-brand-glow",N(k,.34)),f.style.setProperty("--m5-brand-ring",N(k,.38)),f.style.setProperty("--m5-on-brand",_?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover"),v>0&&f.style.setProperty("--m5-launcher-bottom",20+74*v+"px"),document.body.appendChild(f),(h=f.attachShadow({mode:"open"})).innerHTML='<div class="m5m-root m5m-mode-'+Z+(u?" "+u:"")+'"><div class="m5m-scrim"></div><button class="m5m-launcher" type="button" aria-label="Open '+M(n)+'"><span class="m5m-launcher-ava">'+x.chat+'</span><span class="m5m-launcher-label">'+M(l)+'</span></button><section class="m5m-panel" role="dialog" aria-modal="'+("modal"===Z?"true":"false")+'" tabindex="-1" aria-label="'+M(n)+'"><header class="m5m-header"><button class="m5m-back m5m-hidden" type="button" aria-label="Back to the previous question">'+x.arrow+'</button><span class="m5m-ava">'+he()+'</span><span class="m5m-head-text"><span class="m5m-title">'+M(n)+"</span>"+(s?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+M(s)+"</span>":"")+'</span><button class="m5m-close" type="button" aria-label="Close '+M(n)+'">'+x.close+'</button></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+b+G()+"</section></div>",z(h,V()+O(e,Z)),ae.root=h.querySelector(".m5m-root"),"sync"===d&&E(ae.root,e),ae.launcher=h.querySelector(".m5m-launcher"),ae.panel=h.querySelector(".m5m-panel"),ae.messages=h.querySelector(".m5m-messages"),ae.input=h.querySelector(".m5m-input"),ae.actionbar=h.querySelector(".m5m-actionbar"),ae.attrband=h.querySelector(".m5m-attrib"),je(),Le(),ae.launcher.addEventListener("click",function(){try{ye()}catch(e){A(e)}}),h.querySelector(".m5m-close").addEventListener("click",function(){try{we()}catch(e){}}),h.querySelector(".m5m-scrim").addEventListener("click",function(){try{we()}catch(e){}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&fe()&&we()}),h.addEventListener("keydown",function(e){if("Tab"===e.key&&"modal"===Z&&fe()){var t=function(){try{var e=ae.panel.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(e)}catch(e){return[]}}();if(t.length){var a=t[0],r=t[t.length-1],n=h.activeElement;e.shiftKey?n!==a&&-1!==t.indexOf(n)||(e.preventDefault(),r.focus()):n!==r&&-1!==t.indexOf(n)||(e.preventDefault(),a.focus())}}}),h.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),h.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),function(e){var a="m5m_auto_opened_"+t;try{if("1"===sessionStorage.getItem(a))return}catch(e){}function r(){if(!Q){try{sessionStorage.setItem(a,"1")}catch(e){}try{ye()}catch(e){}}}try{if("on_load"===e)ve(r,500);else if("on_8_seconds"===e)ve(r,8e3);else if("on_scroll_80_percent"===e){var n=function(){try{var e=window.pageYOffset||document.documentElement.scrollTop||0,t=document.documentElement.scrollHeight-window.innerHeight;t>0&&e/t>=.8&&(window.removeEventListener("scroll",n),r())}catch(e){}};window.addEventListener("scroll",n,{passive:!0})}else if("on_exit_intent"===e){var o=function(e){(null==e.clientY||e.clientY<=0)&&!Q&&(document.removeEventListener("mouseout",o),r())};document.addEventListener("mouseout",o)}}catch(e){}}((H=e.mag_trigger,B=H,H&&"object"==typeof H&&!Array.isArray(H)&&(B=function(){try{return window.matchMedia?window.matchMedia("(max-width: 480px)").matches:(window.innerWidth||document.documentElement.clientWidth||0)<=480}catch(e){return!1}}()?H.mobile:H.desktop),"string"!=typeof B?"none":(B=B.trim(),g[B]||B))),Ee()}else A("magnet has no steps")}var H,B}()}function V(){var e="--m5-surface:#0F2435;--m5-surface-2:#17334A;--m5-border:#2a4a66;--m5-text:#E8F0F7;--m5-text-sub:#8FA8C0;--m5-meta:#9ab0c6;--m5-danger:#F87171;--m5-msg-bg:#0c1c2b;--m5-bot-bg:#17334A;--m5-bot-border:#23425e;--m5-shadow-launcher:0 8px 24px rgba(0,0,0,.5);--m5-shadow-panel:0 24px 60px rgba(0,0,0,.55),0 6px 16px rgba(0,0,0,.40);";return[":host{all:initial;}","[hidden]{display:none!important;}",".m5m-root{all:initial;","--m5-surface:#ffffff;--m5-surface-2:#f1f5f9;--m5-border:#e6ebf2;","--m5-text:#16243a;--m5-text-sub:#64748b;--m5-meta:#5b6b7f;--m5-danger:#DC2626;","--m5-msg-bg:#eef2f7;--m5-bot-bg:#ffffff;--m5-bot-border:#dde5ef;","--m5-shadow-launcher:0 8px 24px rgba(15,23,42,.20);","--m5-shadow-panel:0 24px 60px rgba(15,23,42,.22),0 6px 16px rgba(15,23,42,.10);","--m5-radius:18px;--m5-radius-msg:16px;--m5-radius-pill:999px;--m5-ease:cubic-bezier(.4,0,.2,1);",'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.45;}',".m5m-root *{box-sizing:border-box;}","@media (prefers-color-scheme: dark){.m5m-root:not(.m5m-light){"+e+"}}",".m5m-root.m5m-dark{"+e+"}",".m5m-launcher{position:fixed;bottom:var(--m5-launcher-bottom,20px);right:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);height:58px;padding:0 22px 0 16px;","border-radius:var(--m5-radius-pill);box-shadow:var(--m5-shadow-launcher),0 0 0 0 var(--m5-brand-glow);","transition:transform .22s var(--m5-ease),box-shadow .22s var(--m5-ease),opacity .2s var(--m5-ease);}",".m5m-launcher:hover{transform:translateY(-2px);box-shadow:var(--m5-shadow-launcher),0 10px 30px var(--m5-brand-glow);}",".m5m-launcher:active{transform:translateY(0);}",".m5m-launcher-ava{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(127,127,127,.18);color:var(--m5-on-brand);}",".m5m-launcher-ava svg{width:20px;height:20px;}",".m5m-launcher-label{font-size:15px;font-weight:650;letter-spacing:.1px;white-space:nowrap;}",".m5m-open .m5m-launcher{opacity:0;transform:translateY(8px) scale(.9);pointer-events:none;}",".m5m-panel{position:fixed;bottom:20px;right:20px;z-index:2147483000;width:374px;max-width:calc(100vw - 32px);","height:560px;max-height:calc(100vh - 40px);background:var(--m5-surface);border-radius:var(--m5-radius);","box-shadow:var(--m5-shadow-panel);display:flex;flex-direction:column;overflow:hidden;outline:none;","opacity:0;visibility:hidden;transform:translateY(14px) scale(.97);transform-origin:bottom right;pointer-events:none;","transition:opacity .26s var(--m5-ease),transform .26s var(--m5-ease),visibility 0s linear .26s;}",".m5m-open .m5m-panel{opacity:1;visibility:visible;transform:none;pointer-events:auto;transition:opacity .28s var(--m5-ease),transform .28s var(--m5-ease);}",".m5m-mode-right_slide .m5m-panel{top:0;bottom:0;right:0;height:100%;max-height:100%;width:400px;max-width:100vw;border-radius:0;transform:translateX(28px);}",".m5m-mode-right_slide.m5m-open .m5m-panel{transform:none;}",".m5m-mode-modal .m5m-panel{top:50%;left:50%;right:auto;bottom:auto;transform:translate(-50%,-46%) scale(.97);width:400px;max-width:calc(100vw - 24px);height:min(600px,86vh);transform-origin:center;}",".m5m-mode-modal.m5m-open .m5m-panel{transform:translate(-50%,-50%);}",".m5m-scrim{position:fixed;inset:0;z-index:2147482999;background:rgba(11,18,32,.5);opacity:0;visibility:hidden;transition:opacity .25s var(--m5-ease),visibility 0s linear .25s;}",".m5m-mode-modal.m5m-open .m5m-scrim{opacity:1;visibility:visible;transition:opacity .25s var(--m5-ease);}",".m5m-mode-inline{display:block;width:100%;}",".m5m-inline-card{display:flex;flex-direction:column;width:100%;max-width:var(--m5-inline-w,640px);margin:0 auto;height:var(--m5-inline-h,min(520px,80vh));","background:var(--m5-surface);border:1px solid var(--m5-border);border-radius:var(--m5-radius);box-shadow:0 6px 24px rgba(15,23,42,.08);overflow:hidden;}",".m5m-mode-inline .m5m-header{position:relative;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:24px 22px 18px;background:var(--m5-surface);color:var(--m5-text);border-bottom:1px solid var(--m5-border);}",".m5m-mode-inline .m5m-back{position:absolute;top:10px;left:10px;color:var(--m5-text);}",".m5m-mode-inline .m5m-ava{width:54px;height:54px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mode-inline .m5m-ava svg{width:28px;height:28px;}",".m5m-mode-inline .m5m-head-text{align-items:center;}",".m5m-mode-inline .m5m-title{font-size:20px;font-weight:700;line-height:1.28;}",".m5m-mode-inline .m5m-subtitle{color:var(--m5-text-sub);opacity:1;justify-content:center;}",".m5m-mode-inline .m5m-messages{padding:18px 18px 10px;}",".m5m-choices.m5m-tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;}",".m5m-tiles .m5m-choice:last-child:nth-child(odd){grid-column:1 / -1;}",".m5m-tiles .m5m-choice{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:10px;min-height:84px;padding:14px 16px;border:0;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:hover{transform:translateY(-2px);border:0;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 24px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:active{transform:translateY(0) scale(.99);}",".m5m-tiles .m5m-choice-icon{width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.22);color:var(--m5-on-brand);}",".m5m-tiles .m5m-choice-icon svg{width:22px;height:22px;}",".m5m-tiles .m5m-choice-body{flex:1 1 auto;}",".m5m-tiles .m5m-choice-label{font-size:14.5px;font-weight:650;line-height:1.3;white-space:normal;}",".m5m-tiles .m5m-choice-desc{color:var(--m5-on-brand);opacity:.85;}",".m5m-tiles .m5m-choice-arrow{display:none;}","@media (max-width:420px){.m5m-choices.m5m-tiles{grid-template-columns:1fr;}}",".m5m-header{display:flex;align-items:center;gap:12px;padding:15px 16px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));}",".m5m-ava{position:relative;flex:0 0 auto;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:rgba(127,127,127,.20);overflow:hidden;color:var(--m5-on-brand);}",".m5m-ava svg{width:21px;height:21px;}",".m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:50%;}",".m5m-head-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-title{font-size:15.5px;font-weight:680;letter-spacing:.1px;line-height:1.25;}",".m5m-subtitle{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.92;font-weight:500;}",".m5m-online{width:7px;height:7px;border-radius:50%;background:#34D399;box-shadow:0 0 0 0 rgba(52,211,153,.6);animation:m5mPulse 2.4s ease-in-out infinite;}",".m5m-close,.m5m-back{flex:0 0 auto;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:var(--m5-on-brand);cursor:pointer;transition:background .18s var(--m5-ease);}",".m5m-close:hover,.m5m-back:hover{background:rgba(127,127,127,.22);}",".m5m-back svg{transform:rotate(180deg);}",".m5m-messages{flex:1;overflow-y:auto;padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px;background:var(--m5-msg-bg);}",".m5m-row{display:flex;align-items:flex-end;gap:8px;max-width:100%;animation:m5mIn .32s var(--m5-ease) both;}",".m5m-row-user{flex-direction:row-reverse;}",".m5m-row.m5m-grouped{margin-top:-4px;}",".m5m-msg-ava{position:relative;flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));overflow:hidden;align-self:flex-start;color:var(--m5-on-brand);}",".m5m-msg-ava:empty{background:transparent;}",".m5m-msg-ava svg{width:15px;height:15px;}",".m5m-col{display:flex;flex-direction:column;gap:3px;max-width:78%;}",".m5m-msg{padding:10px 14px;border-radius:var(--m5-radius-msg);font-size:14px;line-height:1.45;word-wrap:break-word;}",".m5m-bot{background:var(--m5-bot-bg);color:var(--m5-text);border:1px solid var(--m5-bot-border);border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(15,23,42,.10);}",".m5m-user{max-width:78%;align-self:flex-end;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);border-bottom-right-radius:5px;box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-time{font-size:11px;color:var(--m5-meta);padding:0 6px;}",".m5m-typing{display:flex;align-items:center;gap:4px;padding:13px 15px;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);border-bottom-left-radius:5px;}",".m5m-typing span{width:7px;height:7px;border-radius:50%;background:var(--m5-text-sub);opacity:.55;animation:m5mDot 1.2s infinite ease-in-out;}",".m5m-typing span:nth-child(2){animation-delay:.16s;}",".m5m-typing span:nth-child(3){animation-delay:.32s;}",".m5m-input{padding:12px 14px 14px;background:var(--m5-surface);border-top:1px solid var(--m5-border);}",".m5m-input:empty{display:none;}",".m5m-actionbar{display:flex;border-top:1px solid var(--m5-border);background:var(--m5-surface);}",".m5m-action{flex:1;appearance:none;border:0;background:var(--m5-surface);cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:9px 4px;min-height:54px;color:var(--m5-text-sub);text-decoration:none;font-size:11px;font-weight:600;transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-action svg{width:20px;height:20px;}",".m5m-action:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-action:active{background:var(--m5-brand-soft);}",".m5m-action.m5m-act-on{color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:inset 0 -2.5px 0 var(--m5-brand);}",".m5m-action + .m5m-action{border-left:1px solid var(--m5-border);}",".m5m-form{display:flex;gap:8px;align-items:center;}",".m5m-form input{flex:1;min-width:0;border:1.5px solid var(--m5-border);border-radius:var(--m5-radius-pill);padding:11px 16px;font-size:14px;outline:none;background:var(--m5-surface);color:var(--m5-text);transition:border-color .18s var(--m5-ease),box-shadow .18s var(--m5-ease);}",".m5m-form input::placeholder{color:var(--m5-text-sub);}",".m5m-form input:focus{border-color:var(--m5-brand);box-shadow:0 0 0 3px var(--m5-brand-ring);}",".m5m-send{flex:0 0 auto;width:44px;height:44px;border:0;border-radius:50%;color:var(--m5-on-brand);cursor:pointer;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-send:hover{transform:scale(1.06);}",".m5m-send:active{transform:scale(.94);}",".m5m-choices{display:flex;flex-direction:column;gap:8px;}",".m5m-choice{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:14px;background:var(--m5-surface);color:var(--m5-text);padding:11px 14px;font-size:14px;font-weight:600;font-family:inherit;min-height:44px;transition:transform .16s var(--m5-ease),border-color .16s var(--m5-ease),background .16s var(--m5-ease),box-shadow .16s var(--m5-ease);}",".m5m-choice:hover{transform:translateX(4px);border-color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:0 4px 14px var(--m5-brand-glow);}",".m5m-choice:active{transform:translateX(2px) scale(.99);}",".m5m-choice-icon{flex:0 0 auto;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-choice-icon svg{width:18px;height:18px;}",".m5m-choice-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-choice-label{line-height:1.3;}",".m5m-choice-arrow{flex:0 0 auto;color:var(--m5-text-sub);opacity:0;transform:translateX(-4px);transition:opacity .16s var(--m5-ease),transform .16s var(--m5-ease),color .16s var(--m5-ease);display:grid;place-items:center;}",".m5m-choice:hover .m5m-choice-arrow{opacity:1;transform:translateX(0);color:var(--m5-brand);}",".m5m-success{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:26px 22px;margin-top:auto;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-success-icon{display:grid;place-items:center;width:62px;height:62px;border-radius:18px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 28px var(--m5-brand-glow);animation:m5mPop .42s var(--m5-ease) both;}",".m5m-success-title{font-size:17px;font-weight:700;color:var(--m5-text);margin-top:4px;}",".m5m-success-text{font-size:13.5px;color:var(--m5-text-sub);max-width:260px;}",".m5m-success-cta{margin-top:8px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:11px 26px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-success-cta:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-success-link{display:inline-block;margin-top:8px;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-success-link:hover{transform:translateY(-1px);}",".m5m-terminal{display:flex;justify-content:center;padding:8px 0 14px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-terminal-cta{display:inline-block;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-terminal-cta:hover{transform:translateY(-1px);}",".m5m-skip{display:block;margin:8px auto 0;border:0;background:transparent;color:var(--m5-text-sub);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;padding:4px 10px;border-radius:var(--m5-radius-pill);transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-skip:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-optout{display:flex;align-items:center;gap:6px;margin:8px 2px 0;font-size:12.5px;color:var(--m5-text-sub);cursor:pointer;user-select:none;}",".m5m-optout input{margin:0;flex:0 0 auto;accent-color:var(--m5-brand);cursor:pointer;}",".m5m-no-launcher .m5m-launcher{display:none!important;}",".m5m-summary{align-self:stretch;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);padding:15px 16px;box-shadow:0 1px 3px rgba(15,23,42,.10);animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sum-head{font-size:13px;font-weight:700;color:var(--m5-text);margin-bottom:11px;}",".m5m-sum-rows{display:flex;flex-direction:column;gap:9px;}",".m5m-sum-row{display:flex;justify-content:space-between;gap:14px;font-size:13px;line-height:1.35;}",".m5m-sum-label{color:var(--m5-text-sub);white-space:nowrap;}",".m5m-sum-val{color:var(--m5-text);font-weight:600;text-align:right;word-break:break-word;}",".m5m-sum-confirm{margin-top:14px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:11px;font-size:14px;font-weight:650;cursor:pointer;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-sum-confirm:hover{transform:translateY(-1px);}",".m5m-sum-confirm:disabled{opacity:.6;cursor:default;transform:none;}",".m5m-error{display:flex;flex-direction:column;gap:10px;align-items:center;padding:18px;text-align:center;}",".m5m-error-text{font-size:13.5px;color:var(--m5-danger);}",".m5m-retry{border:0;border-radius:var(--m5-radius-pill);padding:11px 22px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-home{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:22px 20px 10px;margin:auto 0;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-home-ava{position:relative;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 26px var(--m5-brand-glow);overflow:hidden;}",".m5m-home-ava .m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-home-ava svg{width:26px;height:26px;}",".m5m-home-ava .m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:16px;}",".m5m-home-title{font-size:18px;font-weight:750;color:var(--m5-text);line-height:1.3;}",".m5m-home-text{font-size:13.5px;color:var(--m5-text-sub);max-width:290px;line-height:1.5;}",".m5m-home-hint{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:var(--m5-brand);}",".m5m-home-hint svg{width:16px;height:16px;}",".m5m-reveal{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:26px 22px;margin:auto 0;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-reveal-icon{display:grid;place-items:center;width:56px;height:56px;border-radius:16px;color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-reveal-icon svg{width:26px;height:26px;}",".m5m-reveal-title{font-size:16px;font-weight:700;color:var(--m5-text);}",".m5m-reveal-val{font-size:19px;font-weight:750;color:var(--m5-brand);text-decoration:none;word-break:break-word;}",".m5m-reveal-val:hover{text-decoration:underline;}",".m5m-reveal-copy{display:inline-flex;align-items:center;gap:6px;margin-top:4px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease),color .16s var(--m5-ease);}",".m5m-reveal-copy:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-reveal-copy svg{width:15px;height:15px;}",".m5m-multi{display:flex;flex-direction:column;gap:8px;align-self:stretch;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-mopt{display:flex;align-items:center;gap:11px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:13px;background:var(--m5-surface);color:var(--m5-text);padding:12px 14px;font-size:14px;font-weight:600;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-mopt:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-icon{flex:0 0 auto;display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mopt-icon svg{width:17px;height:17px;}",".m5m-mopt-label{flex:1;min-width:0;}",".m5m-mopt-check{flex:0 0 auto;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--m5-border);color:transparent;transition:background .14s var(--m5-ease),border-color .14s var(--m5-ease),color .14s var(--m5-ease);}",".m5m-mopt-check svg{width:13px;height:13px;}",".m5m-mopt-on{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-on .m5m-mopt-check{background:var(--m5-brand);border-color:var(--m5-brand);color:var(--m5-on-brand);}",".m5m-multi-cont{margin-top:6px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-multi-cont:hover:not(:disabled){transform:translateY(-1px);}",".m5m-multi-cont:disabled{opacity:.5;cursor:default;}",".m5m-sched{align-self:stretch;display:flex;flex-direction:column;gap:12px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sd-meta{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--m5-text-sub);}",".m5m-sd-meta svg{width:16px;height:16px;}",".m5m-sd-days{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;}",".m5m-sd-day{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:1px;width:52px;padding:8px 4px;border:1.5px solid var(--m5-border);border-radius:12px;background:var(--m5-surface);color:var(--m5-text);cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-day:hover{border-color:var(--m5-brand);}",".m5m-sd-dow{font-size:10.5px;font-weight:600;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-num{font-size:17px;font-weight:750;}",".m5m-sd-mon{font-size:10px;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-day.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-day.m5m-sd-on .m5m-sd-dow,.m5m-sd-day.m5m-sd-on .m5m-sd-mon{color:rgba(255,255,255,.85);}",".m5m-sd-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}",".m5m-sd-nav{display:flex;align-items:center;gap:8px;margin:2px 0 8px;}",".m5m-sd-strip{display:flex;align-items:stretch;gap:6px;margin-bottom:8px;}",".m5m-sd-strip .m5m-sd-days{flex:1 1 auto;padding-bottom:0;}",".m5m-sd-strip .m5m-sd-pg{align-self:center;flex:none;}",".m5m-skel{position:relative;overflow:hidden;background:var(--m5-border);border:0;border-radius:12px;min-height:44px;opacity:.55;}",".m5m-sd-day.m5m-skel{width:52px;min-height:58px;flex:none;}",".m5m-sd-month.m5m-skel{height:32px;min-height:32px;width:120px;display:inline-block;}",".m5m-skel::after{content:'';position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent);animation:m5mShimmer 1.1s infinite;}","@keyframes m5mShimmer{to{transform:translateX(100%);}}","@media (prefers-reduced-motion:reduce){.m5m-skel::after{animation:none;}}",".m5m-sd-pg{appearance:none;border:1.5px solid var(--m5-border);background:var(--m5-surface);color:var(--m5-text);cursor:pointer;width:32px;height:32px;border-radius:10px;font-size:18px;line-height:1;font-family:inherit;}",".m5m-sd-pg:disabled{opacity:.35;cursor:default;}",".m5m-sd-month{flex:1 1 auto;appearance:none;border:1.5px solid var(--m5-border);background:var(--m5-surface);color:var(--m5-text);font:inherit;font-size:13px;font-weight:600;border-radius:10px;padding:6px 10px;cursor:pointer;}",".m5m-sd-none{font-size:13px;color:var(--m5-text-sub);padding:8px 2px;}","@keyframes m5mSlideL{from{opacity:.25;transform:translateX(18px);}to{opacity:1;transform:none;}}","@keyframes m5mSlideR{from{opacity:.25;transform:translateX(-18px);}to{opacity:1;transform:none;}}",".m5m-slide-l{animation:m5mSlideL .28s var(--m5-ease) both;}",".m5m-slide-r{animation:m5mSlideR .28s var(--m5-ease) both;}","@media (prefers-reduced-motion:reduce){.m5m-slide-l,.m5m-slide-r{animation:none;}}",".m5m-sd-slot{border:1.5px solid var(--m5-border);border-radius:10px;background:var(--m5-surface);color:var(--m5-text);padding:9px 4px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-slot:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-sd-slot.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-confirm{margin-top:2px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-sd-confirm:hover:not(:disabled){transform:translateY(-1px);}",".m5m-sd-confirm:disabled{opacity:.5;cursor:default;}",".m5m-cal{align-self:stretch;display:flex;flex-direction:column;gap:10px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-cal-frame{border:0;width:100%;flex:1 1 auto;min-height:440px;border-radius:12px;background:#fff;}",".m5m-cal-done{padding:11px 14px;border-radius:12px;background:var(--m5-brand-soft);color:var(--m5-text);font-size:13px;font-weight:600;}",".m5m-hidden{display:none!important;}",".m5m-attrib{display:flex;justify-content:center;border-top:1px solid var(--m5-border);background:var(--m5-surface);}",".m5m-attrib a{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;color:var(--m5-text-sub);text-decoration:none;cursor:pointer;}",".m5m-attrib img{width:13px;height:13px;opacity:.7;transition:opacity .22s ease,transform .22s ease;}",".m5m-attrib-t{font-size:10.5px;line-height:1;letter-spacing:.02em;white-space:nowrap;opacity:.75;transition:opacity .22s ease;}",".m5m-attrib-t b{font-weight:600;}",".m5m-attrib a:hover img,.m5m-attrib a:focus-visible img{opacity:1;transform:rotate(-8deg);}",".m5m-attrib a:hover .m5m-attrib-t,.m5m-attrib a:focus-visible .m5m-attrib-t{opacity:1;}",".m5m-attrib a:focus-visible{outline:2px solid var(--m5-brand);outline-offset:-2px;border-radius:6px;}","@media (prefers-reduced-motion:reduce){.m5m-attrib img,.m5m-attrib-t{transition:none;}}","@keyframes m5mIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}","@keyframes m5mDot{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-4px);opacity:1;}}","@keyframes m5mPulse{0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5);}50%{box-shadow:0 0 0 5px rgba(52,211,153,0);}}","@keyframes m5mPop{0%{transform:scale(.4);opacity:0;}60%{transform:scale(1.08);}100%{transform:scale(1);opacity:1;}}","@media (max-width:480px){.m5m-panel{width:auto;left:12px;right:12px;bottom:12px;height:auto;top:12px;max-height:none;}.m5m-launcher{bottom:var(--m5-launcher-bottom,14px);right:14px;}}","@media (prefers-reduced-motion: reduce){.m5m-root *{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;}.m5m-choice:hover,.m5m-launcher:hover,.m5m-send:hover{transform:none;}}"].join("")}}();`}));function rf(e={}){let t=e||{},n=Array.isArray(t.steps)&&t.steps.length?t.steps:[{id:`1`,step_type:`message`,step_prompts:[`👋 Add steps in the flow builder to preview the conversation.`],step_options:[],step_columns:[],step_description:``}];return{mag_display_mode:t.display_mode||`chat`,mag_trigger:`on_load`,mag_theme_color:/^#[0-9a-fA-F]{6}$/.test(t.theme_color||``)?t.theme_color:`#0072BA`,mag_theme_mode:t.theme_mode||`auto`,mag_title:t.title&&String(t.title).trim()||t.name||`Chat with us`,mag_subtitle:t.subtitle==null?`Typically replies in a few minutes`:t.subtitle,mag_launcher_label:t.launcher_label||``,mag_logo_url:t.logo_url||``,mag_logo_fit:t.logo_fit===`contain`?`contain`:`cover`,mag_summary:!!t.summary,mag_summary_heading:t.summary_heading||``,mag_summary_confirm_label:t.summary_confirm_label||``,mag_home:!!t.home,mag_welcome:t.welcome==null?``:t.welcome,mag_actions:Array.isArray(t.actions)?t.actions:[],mag_macro_steps:n,mag_font:t.font||``,mag_theme_vars:t.theme_vars&&typeof t.theme_vars==`object`&&Object.keys(t.theme_vars).length?t.theme_vars:void 0,mag_inline_width:t.inline_width||``,mag_inline_height:t.inline_height||``,mag_input_placeholder:t.input_placeholder||``,mag_success_title:t.success_title||``,mag_success_text:t.success_text==null?``:t.success_text,mag_success_cta:t.success_cta&&t.success_cta.url&&t.success_cta.label?t.success_cta:void 0}}function af(e){let t=JSON.stringify([e]),n=tf.replace(/##APPGUID##/g,()=>`preview`).replace(/["']##MAGNET_DEFINITIONS##["']/g,()=>t).replace(/<\/script>/gi,`<\\/script>`);return`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
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
  .pv-slot { max-width: 960px; margin: 0 auto; }
  .pv-cards { max-width: 680px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .pv-card { height: 120px; border-radius: 12px; background: #fff; border: 1px solid #e2e8f0; }
  @media (max-width: 460px) { .pv-cards { grid-template-columns: 1fr; } .pv-navlinks { display: none; } }
</style></head>
<body>
  <div class="pv-nav"><span class="pv-logo"></span><span class="pv-navlinks"><i></i><i></i><i></i></span></div>
  <div class="pv-hero"><div class="l1"></div><div class="l2"></div></div>
  <div class="pv-content">
    ${e.mag_display_mode===`inline`?`<div class="pv-slot"><div data-m5m-inline></div></div>`:`<div class="pv-cards"><div class="pv-card"></div><div class="pv-card"></div></div>`}
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
  <script>${n}<\/script>
</body></html>`}function of(){if(df)return;let e=document.createElement(`style`);e.id=`m5t-preview-styles`,e.textContent=`
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
    .pv-stage[data-device="desktop"] { width: 100%; max-width: 820px; }
    .pv-stage[data-device="tablet"] { width: 640px; max-width: 100%; }
    .pv-stage[data-device="mobile"] { width: 390px; }
    .pv-frame { width: 100%; border: 0; background: #eef2f7; border-radius: 12px; box-shadow: 0 6px 24px rgba(11,18,32,0.12); }
    .pv-stage[data-device="desktop"] .pv-frame { height: 560px; }
    .pv-stage[data-device="tablet"] .pv-frame { height: 600px; }
    .pv-stage[data-device="mobile"] .pv-frame { height: 620px; border-radius: 22px; border: 8px solid #1e293b; box-shadow: 0 10px 30px rgba(11,18,32,0.28); }
    .pv-hint { text-align: center; font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: 10px 0 0; }
    /* embedded live pane (edit modal's right column) */
    .pv-pane { display: flex; flex-direction: column; height: 100%; }
    .pv-pane__hd { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); padding: 0 0 10px; }
    .pv-pane__hd > .material-symbols-outlined { font-size: 18px; color: var(--color-primary-600, #0072BA); }
    .pv-pane__hdright { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    .pv-pane__seg button { padding: 5px 8px; }
    .pv-pane__seg button .material-symbols-outlined { font-size: 17px; }
    .pv-pane__badge { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 600; color: var(--color-accent, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.12)); padding: 2px 9px; border-radius: 999px; }
    .pv-pane__badge[hidden] { display: none; }
    .pv-pane__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--color-primary-600, #0072BA); animation: pvPulse 0.8s ease-in-out infinite; }
    @keyframes pvPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
    .pv-pane__body { flex: 1 1 auto; min-height: 0; }
    .pv-pane__vp { width: 100%; height: 100%; display: flex; justify-content: center; }
    /* 1:1, no downscaling — the iframe width IS the viewport that drives the widget's
       responsive layout (mobile full-screen panel vs desktop floating card). */
    .pv-pane__frame { height: 100%; border: 0; border-radius: 12px; background: #eef2f7; box-shadow: 0 6px 24px rgba(11,18,32,0.10); display: block; }
    .pv-pane__frame[data-device="mobile"] { width: 390px; max-width: 100%; }
    .pv-pane__frame[data-device="tablet"] { width: 640px; max-width: 100%; }
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
  `,document.head.appendChild(e),df=!0}function sf(e){return`<div class="pv-hintwrap">
    <p class="pv-hint">${e}</p>
    <p class="pv-hint pv-hint--style">Custom styling on your site won't be shown here
      <button type="button" class="pv-info" data-pv-info aria-label="More about custom styling"><span class="material-symbols-outlined" aria-hidden="true">info</span></button>
    </p>
    <div class="pv-info-pop" data-pv-info-pop hidden>
      <strong>About custom styling</strong>
      This preview shows the magnet exactly as you set it up here. If you style over it with your own CSS on your website or app, those changes won't show in this preview, so the live version can look a little different.
    </div>
  </div>`}function cf(e){let t=e.querySelector(`[data-pv-info]`),n=e.querySelector(`[data-pv-info-pop]`);t&&n&&t.addEventListener(`click`,()=>{n.hidden=!n.hidden})}function lf(e,t){of(),e.innerHTML=`
    <div class="pv-pane">
      <div class="pv-pane__hd"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Live preview
        <span class="pv-pane__hdright">
          <span class="pv-pane__badge" hidden><span class="pv-pane__dot"></span>Updating…</span>
          <span class="pv-seg pv-pane__seg" role="group" aria-label="Preview device">
            <button type="button" data-device="mobile" class="is-on" title="Mobile" aria-label="Mobile preview"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span></button>
            <button type="button" data-device="tablet" title="Tablet" aria-label="Tablet preview"><span class="material-symbols-outlined" aria-hidden="true">tablet_mac</span></button>
            <button type="button" data-device="desktop" title="Desktop" aria-label="Desktop preview"><span class="material-symbols-outlined" aria-hidden="true">desktop_windows</span></button>
          </span>
        </span>
      </div>
      <div class="pv-pane__body"><div class="pv-pane__vp"><iframe class="pv-pane__frame" data-device="mobile" sandbox="allow-scripts" title="Live magnet preview"></iframe></div></div>
      ${sf(`Live render of the real widget. Capture is disabled, so no test leads.`)}
    </div>`,cf(e);let n=e.querySelector(`.pv-pane__frame`),r=e.querySelector(`.pv-pane__badge`),i=null,a=0;n.addEventListener(`load`,()=>{let e=(typeof performance<`u`?performance.now():Date.now())-a;clearTimeout(i),e<450?i=setTimeout(()=>{r.hidden=!0},450-e):r.hidden=!0});let o=()=>{let e;try{e=af(t())}catch{return}a=typeof performance<`u`?performance.now():Date.now(),r.hidden=!1,n.srcdoc=e,clearTimeout(i),i=setTimeout(()=>{r.hidden=!0},1500)};return e.querySelector(`.pv-pane__seg`).addEventListener(`click`,t=>{let r=t.target.closest(`button[data-device]`);!r||r.dataset.device===n.dataset.device||(e.querySelectorAll(`.pv-pane__seg button`).forEach(e=>e.classList.toggle(`is-on`,e===r)),n.dataset.device=r.dataset.device)}),o(),{refresh:o,destroy(){clearTimeout(i)}}}function uf(e){of();let t=`desktop`,n=document.createElement(`div`);n.className=`pv-scrim`,n.innerHTML=`
    <div class="pv-modal" role="dialog" aria-modal="true" aria-label="Magnet preview">
      <div class="pv-head">
        <span class="pv-title"><span class="material-symbols-outlined" aria-hidden="true">visibility</span> Live preview</span>
        <div class="pv-ctrls">
          <div class="pv-seg" role="group" aria-label="Device">
            <button type="button" data-device="desktop" class="is-on"><span class="material-symbols-outlined" aria-hidden="true">desktop_windows</span>Desktop</button>
            <button type="button" data-device="tablet"><span class="material-symbols-outlined" aria-hidden="true">tablet_mac</span>Tablet</button>
            <button type="button" data-device="mobile"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span>Mobile</button>
          </div>
          <button class="pv-iconbtn" type="button" data-x="refresh" title="Restart preview"><span class="material-symbols-outlined" aria-hidden="true">refresh</span></button>
          <button class="pv-iconbtn" type="button" data-x="close" title="Close"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
        </div>
      </div>
      <div class="pv-body">
        <div>
          <div class="pv-stage" data-device="desktop"><iframe class="pv-frame" sandbox="allow-scripts" title="Magnet preview"></iframe></div>
          ${sf(`Live render of the actual widget. Capture is disabled, so no test leads are created.`)}
        </div>
      </div>
    </div>`,document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add(`open`)),cf(n);let r=n.querySelector(`.pv-frame`),i=n.querySelector(`.pv-stage`),a=()=>{try{r.srcdoc=af(e())}catch{}};a();let o=()=>{n.classList.remove(`open`),setTimeout(()=>n.remove(),180)};return n.querySelector(`[data-x="close"]`).addEventListener(`click`,o),n.querySelector(`[data-x="refresh"]`).addEventListener(`click`,a),n.addEventListener(`click`,e=>{e.target===n&&o()}),n.querySelector(`.pv-seg`).addEventListener(`click`,e=>{let r=e.target.closest(`button[data-device]`);!r||r.dataset.device===t||(t=r.dataset.device,n.querySelectorAll(`.pv-seg button`).forEach(e=>e.classList.toggle(`is-on`,e.dataset.device===t)),i.dataset.device=t,a())}),{close:o,rebuild:a}}var df,ff=o((()=>{nf(),df=!1}));function pf(e,t){let n=vf(e),r=vf(t),i=gf.find(e=>vf(e.w)===n&&vf(e.h)===r);return i?i.id:`custom`}function mf(e){let t=gf.find(t=>t.id===e);return t?{w:t.w,h:t.h}:null}function hf(e,t){let n=String(e||``).trim();return n?n.length>40?`Keep it under 40 characters.`:!yf.test(n)&&!bf.test(n)?`That isn't a size the widget understands — use a CSS length like 720px or 80vh${t===`width`?` or 100%`:``}, or min()/max()/clamp().`:t===`height`&&/%\s*$/.test(n)?`A percentage height won’t work here — the card would collapse to its content. Use px or vh instead (720px, 80vh).`:``:``}var gf,_f,vf,yf,bf,xf=o((()=>{gf=Object.freeze([{id:`compact`,name:`Compact`,hint:`Sidebars and narrow slots`,w:`480px`,h:`440px`},{id:`standard`,name:`Standard`,hint:`The default fit`,w:``,h:``},{id:`tall`,name:`Tall`,hint:`Longer flows, content columns`,w:`640px`,h:`min(720px, 82vh)`},{id:`hero`,name:`Hero`,hint:`The magnet is the page`,w:`100%`,h:`min(80vh, 860px)`}]),_f=Object.freeze({compact:{w:26,h:26},standard:{w:34,h:30},tall:{w:34,h:40},hero:{w:52,h:38}}),vf=e=>String(e||``).trim().replace(/\s+/g,` `).toLowerCase(),yf=/^\d+(\.\d+)?(px|rem|em|vh|vw|%)?$/,bf=/^(min|max|clamp)\(\s*[\d.\s,a-z%()+*/-]+\)$/i}));function Sf(e){return{id:e.slug,name:e.name,description:e.description,icon:e.icon,category:e.category,tags:e.tags||[],featured:!!e.featured,appearance:e.appearance||{},steps:e.steps||[],appguid:e.appguid}}function Cf(){return Rf||Lf}function wf(){return Rf?Promise.resolve(Rf):(zf||=fetch(`${Ki.baseUrl}/m5t/v5/templates`).then(e=>e.ok?e.json():null).then(e=>(e?.ok&&Array.isArray(e.templates)&&e.templates.length&&(Rf=e.templates.map(Sf)),Cf())).catch(()=>(zf=null,Cf())),zf)}function Tf(e){let t=[];for(let n of e.steps||[])for(let e of n.step_columns||[])e&&!t.includes(e)&&t.push(e);return t}function Ef(e){let t=(e.steps||[])[0]||{},n=(t.step_prompts||[])[0]||``,r=``;return t.step_type===`single_select`||t.step_type===`multi_select`?r=(t.step_options||[]).slice(0,3).map(e=>`<span class="mag-tpl-pv__btn">${Ff(e?.label)}</span>`).join(``):Bf[t.step_type]?r=`<span class="mag-tpl-pv__input">${Ff(Bf[t.step_type])}</span>`:t.step_type===`scheduler`&&(r=`<span class="mag-tpl-pv__cal"><span class="material-symbols-outlined" aria-hidden="true">calendar_month</span>Pick a time</span>`),`<div class="mag-tpl-card__preview" aria-hidden="true"><span class="mag-tpl-pv__bubble">${Ff(n)}</span>${r}</div>`}function Df(e,{detail:t=!1,gallery:n=!1,canUse:r=!0}={}){let i=t?Tf(e):[],a=n?` mag-tpl-card--gallery`:``,o=n?` data-cat="${Ff(e.category||``)}"`:``,s=n&&e.featured?`<span class="m5t-badge m5t-badge--featured m5t-featured-corner">Most popular</span>`:``,c=n?Ef(e):``,l=n&&(e.tags||[]).length?`<div class="m5t-chip-row mag-tpl-card__tags">${e.tags.map(e=>`<span class="m5t-chip">${Ff(e)}</span>`).join(``)}</div>`:``,u=r?`<button class="mag-tpl-card__btn" type="button" data-tpl="${e.id}">
        <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>Use this template
      </button>`:``,d=n?`<button class="mag-tpl-card__btn mag-tpl-card__btn--ghost" type="button" data-preview="${e.id}">
        <span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview
      </button>`:``;return`
    <div class="mag-tpl-card${a}"${o}>${s}${c}
      <span class="mag-tpl-card__icon"><span class="material-symbols-outlined" aria-hidden="true">${e.icon}</span></span>
      <span class="mag-tpl-card__name">${e.name}</span>
      <p class="mag-tpl-card__desc">${e.description}</p>${l}
      ${t?`<p class="mag-tpl-card__meta">
        <span><span class="material-symbols-outlined" aria-hidden="true">list_alt</span>${(e.steps||[]).length} steps</span>
        ${i.length?`<span><span class="material-symbols-outlined" aria-hidden="true">badge</span>Captures ${i.join(`, `)}</span>`:``}
      </p>`:``}
      ${n?`<div class="mag-tpl-card__actions">${u}${d}</div>`:u}
    </div>`}function Of(e){Sa(Ta.MAGNET_TEMPLATE,{id:e,at:Date.now()})}function kf(e){if(!e)return null;if(typeof e==`string`)return Cf().find(t=>t.id===e)||null;let{id:t,at:n}=e;return typeof n==`number`&&Date.now()-n>=Vf?null:Cf().find(e=>e.id===t)||null}function Af(){return kf(Ca(Ta.MAGNET_TEMPLATE))}function jf(){return kf(wa(Ta.MAGNET_TEMPLATE))}function Mf(){if(Hf)return;let e=document.createElement(`style`);e.id=`m5t-mag-template-styles`,e.textContent=`
    .mag-tpl-modal .mag-modal { width: min(880px, 92vw); height: auto; max-height: 88vh; }
    .mag-tpl-modal .mag-modal__body { padding: 20px 24px; }
    .mag-tpl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
    @media (max-width: 640px) { .mag-tpl-grid { grid-template-columns: 1fr; } }
    .mag-tpl-card { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 14px); padding: 16px; display: flex; flex-direction: column; gap: 10px; transition: box-shadow .15s ease, border-color .15s ease; }
    .mag-tpl-card:hover { box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08); border-color: var(--color-primary-600, #0072BA); }
    .mag-tpl-card[hidden] { display: none; }
    .mag-tpl-card__icon { width: 42px; height: 42px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); }
    .mag-tpl-card__icon .material-symbols-outlined { font-size: 22px; }
    .mag-tpl-card__name { font-weight: 650; font-size: 0.98rem; color: var(--color-text, #0B1220); }
    .mag-tpl-card__desc { font-size: 0.84rem; color: var(--color-text-muted, #4A5A78); line-height: 1.5; flex: 1 1 auto; margin: 0; }
    .mag-tpl-card__btn { align-self: flex-start; appearance: none; border: 1px solid var(--color-accent, #0072BA); background: transparent; color: var(--color-accent, #0072BA); cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .mag-tpl-card__btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .mag-tpl-card__btn[disabled] { opacity: 0.55; cursor: default; }
    .mag-tpl-card__meta { display: flex; flex-wrap: wrap; gap: 4px 14px; margin: 0; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .mag-tpl-card__meta span { display: inline-flex; align-items: center; gap: 5px; }
    .mag-tpl-card__meta .material-symbols-outlined { font-size: 15px; }
    /* Browse page: room for more than the modal's fixed two columns. */
    .mag-tpl-grid--page { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }

    /* ── gallery face (browse page only) ─────────────────────────────────── */
    .mag-tpl-card--gallery { position: relative; overflow: hidden; padding-top: 0; background: var(--color-bg, #fff); }
    .mag-tpl-card__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
    .mag-tpl-card__btn--ghost { border-color: var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); }
    .mag-tpl-card__btn--ghost:hover { background: var(--color-surface, #F4F7FB); border-color: var(--color-accent, #0072BA); color: var(--color-accent, #0072BA); }
    .mag-tpl-card__tags { margin-top: -2px; }

    /* ── derived card-face art ───────────────────────────────────────────── */
    .mag-tpl-card__preview { margin: 0 -16px; padding: 16px; min-height: 104px; display: flex; flex-direction: column; align-items: flex-start; gap: 7px; background: linear-gradient(135deg, var(--color-surface, #F4F7FB), var(--color-accent-soft, #D8E6FF)); border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .mag-tpl-pv__bubble { max-width: 100%; font-size: 0.74rem; line-height: 1.35; padding: 7px 11px; border-radius: 12px 12px 12px 3px; background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: var(--shadow-sm, 0 1px 3px rgba(11, 18, 32, 0.06)); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .mag-tpl-pv__btn, .mag-tpl-pv__input, .mag-tpl-pv__cal { max-width: 100%; font-size: 0.7rem; font-weight: 600; padding: 4px 11px; border-radius: 999px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .mag-tpl-pv__btn { background: var(--color-bg, #fff); color: var(--color-accent, #0072BA); border: 1px solid var(--color-accent, #0072BA); }
    .mag-tpl-pv__input { align-self: stretch; background: var(--color-bg, #fff); color: var(--color-text-subtle, #6C7C9A); border: 1px dashed var(--color-border, #D4DCE8); font-weight: 500; }
    .mag-tpl-pv__cal { display: inline-flex; align-items: center; gap: 5px; background: var(--color-bg, #fff); color: var(--color-accent, #0072BA); border: 1px solid var(--color-accent, #0072BA); }
    .mag-tpl-pv__cal .material-symbols-outlined { font-size: 14px; }

    html.ff-no-animations .mag-tpl-card { transition: none; }
    @media (prefers-reduced-motion: reduce) { .mag-tpl-card { transition: none; } }
  `,document.head.appendChild(e),Hf=!0}function Nf(e){wf(),Mf();let t=document.createElement(`div`);t.className=`mag-modal-scrim mag-tpl-modal`,t.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="Start from a template">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Start from a template</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body">
        <div class="mag-tpl-grid">
          ${Cf().map(e=>Df(e)).join(``)}
        </div>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`open`),t.querySelector(`.mag-modal`).classList.add(`open`)});let n=()=>{t.classList.remove(`open`),setTimeout(()=>t.remove(),180),document.removeEventListener(`keydown`,r)};function r(e){e.key===`Escape`&&(e.preventDefault(),n())}document.addEventListener(`keydown`,r),t.querySelector(`.mag-modal__close`).addEventListener(`click`,n),t.querySelectorAll(`[data-tpl]`).forEach(r=>{r.addEventListener(`click`,()=>{let i=Cf().find(e=>e.id===r.dataset.tpl);i&&(t.querySelectorAll(`[data-tpl]`).forEach(e=>{e.disabled=!0}),n(),e(i))})})}var Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf=o((()=>{Da(),qi(),Pf={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Ff=e=>String(e??``).replace(/[&<>"']/g,e=>Pf[e]),If=Object.freeze({lead_capture:`Lead capture`,booking:`Booking`,engagement:`Engagement`,support:`Support`}),Lf=[{id:`lead_capture`,name:`Lead Capture`,description:`A general-purpose qualify-and-capture flow. Ask what a visitor needs, then get their contact info.`,icon:`person_add`,category:`lead_capture`,tags:[`Contact info`,`Qualifying`],featured:!0,appearance:{title:`Chat with us`,subtitle:`Typically replies in a few minutes`},steps:[{id:`1`,step_type:`single_select`,step_columns:[`product_interest`],step_prompts:[`Hi there! 👋`,`What brings you here today?`],step_options:[{label:`Get a quote`,goto:``},{label:`Learn more`,goto:``},{label:`Just browsing`,goto:``}],step_description:``},{id:`2`,step_type:`text`,step_columns:[`name`],step_prompts:[`Great! What’s your name?`],step_options:[],step_description:``},{id:`3`,step_type:`email`,step_columns:[`email`],step_prompts:[`And your best email?`],step_options:[],step_description:``},{id:`4`,step_type:`phone`,step_columns:[`phone`],step_prompts:[`Last thing. A phone number in case we need to follow up?`],step_options:[],step_description:``}]},{id:`appointment_booking`,name:`Appointment Booking`,description:`Collect contact details, then let the visitor pick a time. Pairs with the Calendly integration under Settings.`,icon:`event_available`,category:`booking`,tags:[`Scheduling`,`Calendly`],featured:!1,appearance:{title:`Book a time with us`,subtitle:`Pick whatever works for your schedule`},steps:[{id:`1`,step_type:`text`,step_columns:[`name`],step_prompts:[`Hi! 👋 What’s your name?`],step_options:[],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`What’s the best email for your confirmation?`],step_options:[],step_description:``},{id:`3`,step_type:`phone`,step_columns:[`phone`],step_prompts:[`And a phone number, in case we need to reach you?`],step_options:[],step_description:``},{id:`4`,step_type:`scheduler`,step_columns:[],step_prompts:[`When works best for a quick call?`],step_options:[],step_description:``,step_config:{meeting_label:``,start:`09:00`,end:`17:00`,mins:30,days:14}}]},{id:`support_triage`,name:`Support Triage`,description:`Route a visitor to the right kind of help before they describe the issue, so your team sees the full picture up front.`,icon:`support_agent`,category:`support`,tags:[`Routing`,`Existing customers`],featured:!1,appearance:{title:`How can we help?`,subtitle:`We’ll get back to you as soon as we can`},steps:[{id:`1`,step_type:`multi_select`,step_columns:[`product_interest`],step_prompts:[`What do you need help with?`,`Pick everything that applies.`],step_options:[{label:`Billing question`,goto:``},{label:`Technical issue`,goto:``},{label:`Feature request`,goto:``},{label:`Something else`,goto:``}],step_description:``},{id:`2`,step_type:`text`,step_columns:[`description`],step_prompts:[`Can you describe what’s going on?`],step_options:[],step_description:``},{id:`3`,step_type:`text`,step_columns:[`name`],step_prompts:[`What’s your name?`],step_options:[],step_description:``},{id:`4`,step_type:`email`,step_columns:[`email`],step_prompts:[`Best email to follow up on this?`],step_options:[],step_description:``}]},{id:`quote_request`,name:`Quote Request`,description:`For local and home-service businesses. Describe the job, leave contact info, get a callback.`,icon:`request_quote`,category:`lead_capture`,tags:[`Local services`,`Callback`],featured:!1,appearance:{title:`Get a free quote`,subtitle:`Tell us about the job and we’ll follow up`},steps:[{id:`1`,step_type:`text`,step_columns:[`description`],step_prompts:[`What’s the job? 🛠️`,`(e.g. roof repair, install a fence, fix a leak…)`],step_options:[],step_description:``},{id:`2`,step_type:`text`,step_columns:[`name`],step_prompts:[`What’s your name?`],step_options:[],step_description:``},{id:`3`,step_type:`phone`,step_columns:[`phone`],step_prompts:[`Best phone number for a quick callback?`],step_options:[],step_description:``},{id:`4`,step_type:`email`,step_columns:[`email`],step_prompts:[`And an email, in case we can’t reach you by phone?`],step_options:[],step_description:``}]},{id:`site_navigation_guide`,name:`Site Navigation Guide`,description:`A branching menu for content or reference sites. Visitors pick where they want to go instead of filling out a form. No contact info collected.`,icon:`signpost`,category:`engagement`,tags:[`Branching`,`No contact info`],featured:!1,appearance:{title:`Looking for something?`,subtitle:`Pick an option below`},steps:[{id:`1`,step_type:`single_select`,step_columns:[],step_prompts:[`Hi there! 👋`,`What can I help you find?`],step_options:[{label:`Browse products`,goto:`2`},{label:`See pricing`,goto:`3`},{label:`Read our guide`,goto:`4`},{label:`Something else`,goto:`5`}],step_description:``},{id:`2`,step_type:`message`,step_columns:[],step_prompts:[`Here’s where to browse. Take a look!`],step_options:[],step_description:``,step_config:{terminal:!0,cta:{label:`Browse products`,url:`https://example.com/products`}}},{id:`3`,step_type:`message`,step_columns:[],step_prompts:[`Here’s our pricing. Take a look!`],step_options:[],step_description:``,step_config:{terminal:!0,cta:{label:`See pricing`,url:`https://example.com/pricing`}}},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`Here’s our guide. Take a look!`],step_options:[],step_description:``,step_config:{terminal:!0,cta:{label:`Read our guide`,url:`https://example.com/guide`}}},{id:`5`,step_type:`message`,step_columns:[],step_prompts:[`Thanks for stopping by. Feel free to reach out if you need anything else.`],step_options:[],step_description:``,step_config:{terminal:!0}}]},{id:`newsletter_signup`,name:`Newsletter Signup`,description:`Pick a topic, leave an email, done. The shortest path from visitor to subscriber.`,icon:`mail`,category:`lead_capture`,tags:[`Email list`,`Two questions`],featured:!1,appearance:{title:`Join the list`,subtitle:`One short email, now and then`},steps:[{id:`1`,step_type:`single_select`,step_columns:[`product_interest`],step_prompts:[`Hi there! 👋`,`What do you want to hear about?`],step_options:[{label:`Product updates`,goto:``},{label:`Tips and how-tos`,goto:``},{label:`Deals and offers`,goto:``}],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`Where should we send it?`],step_options:[],step_description:``},{id:`3`,step_type:`message`,step_columns:[],step_prompts:[`You’re on the list. Watch your inbox!`],step_options:[],step_description:``}]},{id:`demo_request`,name:`Demo Request`,description:`Qualify a B2B visitor on name, work email, company and industry, then let them book the call.`,icon:`co_present`,category:`booking`,tags:[`B2B`,`Scheduling`],featured:!1,appearance:{title:`See a demo`,subtitle:`A short walkthrough, on your schedule`},steps:[{id:`1`,step_type:`text`,step_columns:[`name`],step_prompts:[`Happy to show you around! 👋`,`What’s your name?`],step_options:[],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`What’s your work email?`],step_options:[],step_description:``},{id:`3`,step_type:`text`,step_columns:[`company`],step_prompts:[`Where do you work?`],step_options:[],step_description:``},{id:`4`,step_type:`single_select`,step_columns:[`industry`],step_prompts:[`What kind of business is it?`],step_options:[{label:`Agency`,goto:``},{label:`Ecommerce`,goto:``},{label:`SaaS`,goto:``},{label:`Other`,goto:``}],step_description:``},{id:`5`,step_type:`scheduler`,step_columns:[],step_prompts:[`When works best for your demo?`],step_options:[],step_description:``,step_config:{meeting_label:``,start:`09:00`,end:`17:00`,mins:30,days:14}}]},{id:`feedback_pulse`,name:`Feedback Pulse`,description:`A three-tap sentiment check with room for a comment and an optional reply address.`,icon:`reviews`,category:`engagement`,tags:[`Feedback`,`Existing customers`],featured:!1,appearance:{title:`Quick question`,subtitle:`Takes about twenty seconds`},steps:[{id:`1`,step_type:`single_select`,step_columns:[],step_prompts:[`How was your experience with us?`],step_options:[{label:`Great`,goto:``},{label:`Okay`,goto:``},{label:`Not great`,goto:``}],step_description:``},{id:`2`,step_type:`text`,step_columns:[`description`],step_prompts:[`What could we do better?`],step_options:[],step_description:``},{id:`3`,step_type:`email`,step_columns:[`email`],step_prompts:[`Want a reply? Leave your email.`],step_options:[],step_description:``},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`Thanks, that really helps.`],step_options:[],step_description:``}]},{id:`exit_intent_offer`,name:`Exit Intent Offer`,description:`A discount for visitors about to leave, with a polite exit for anyone who says no.`,icon:`door_open`,category:`engagement`,tags:[`Discount`,`Branching`],featured:!1,appearance:{title:`Before you go`,subtitle:`10% off your first order`},steps:[{id:`1`,step_type:`single_select`,step_columns:[],step_prompts:[`Before you go, want 10% off your first order?`],step_options:[{label:`Yes, send me the code`,goto:`2`},{label:`No thanks`,goto:`4`}],step_description:``},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`No worries, enjoy your visit!`],step_options:[],step_description:``,step_config:{terminal:!0}},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`Where should we send the code?`],step_options:[],step_description:``},{id:`3`,step_type:`message`,step_columns:[],step_prompts:[`Check your inbox, your code is on the way.`],step_options:[],step_description:``}]},{id:`event_registration`,name:`Event Registration`,description:`Register an attendee and let them pick the session they want.`,icon:`event`,category:`booking`,tags:[`Events`,`Sessions`],featured:!1,appearance:{title:`Save your seat`,subtitle:`Register in under a minute`},steps:[{id:`1`,step_type:`text`,step_columns:[`name`],step_prompts:[`Glad you’re coming! 🎟️`,`What’s your name?`],step_options:[],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`Where should we send your ticket?`],step_options:[],step_description:``},{id:`3`,step_type:`single_select`,step_columns:[],step_prompts:[`Which session do you want?`],step_options:[{label:`Morning session`,goto:``},{label:`Afternoon session`,goto:``},{label:`Evening session`,goto:``}],step_description:``},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`You’re registered. See you there!`],step_options:[],step_description:``}]}],Rf=null,zf=null,Bf={text:`Type your answer`,email:`you@example.com`,phone:`(555) 123-4567`},Vf=3e5,Hf=!1})),Wf=c({CTA_META:()=>xm,CTA_ORDER:()=>Sm,DISPLAY_OPTS:()=>vm,FONT_GROUPS:()=>Nm,MOBILE_BREAKPOINT_PX:()=>480,MODE_LABEL:()=>_m,THEME_OPTS:()=>ym,TRIGGER_OPTS:()=>bm,__stopPairingTimerForTests:()=>xp,collectTrigger:()=>Jf,connIsPast:()=>pp,cspNoteHTML:()=>hm,init:()=>Ip,installGuideHTML:()=>gm,openModal:()=>um,perDeviceSide:()=>Kf,perDeviceTrigger:()=>Yf,perDeviceTriggerLabel:()=>Xf,render:()=>Fp,stepFunnelHTML:()=>Yp,syncPerDeviceVisibility:()=>qf,triggerSelection:()=>Gf});function Gf(e){return e?Yf(e)?`__per_device`:e.trigger||`none`:`on_load`}function Kf(e,t){let n=Yf(e);if(n)return n[t]||`none`;let r=e&&typeof e.trigger==`string`?e.trigger:`on_load`;return t===`mobile`?`none`:r}function qf(e){let t=e.querySelector(`#mag-f-trigger`),n=e.querySelector(`#mag-f-perdev`);if(!t||!n)return;let r=e.querySelector(`input[name="mag-display"]:checked`)?.value===`inline`,i=t.querySelector(`option[value="__per_device"]`);i&&(i.hidden=r),r&&t.value===`__per_device`&&(t.value=`none`),n.hidden=r||t.value!==`__per_device`}function Jf(e){let t=e.querySelector(`#mag-f-trigger`)?.value||`on_load`;if(t!==`__per_device`)return t;let n=e.querySelector(`#mag-f-trigger-desktop`)?.value,r=e.querySelector(`#mag-f-trigger-mobile`)?.value;if(!(!n||!r))return{desktop:n,mobile:r}}function Yf(e){let t=e&&e.trigger;return t&&typeof t==`object`&&!Array.isArray(t)?t:null}function Xf(e){let t=Yf(e);if(!t)return``;let n=e=>(bm.find(t=>t.value===(e||`none`))||{}).label||e||`none`;return`Per device — desktop: ${n(t.desktop)}; mobile: ${n(t.mobile)}`}async function Zf(){if(Cm)return Cm;let e;try{let t=await fetch(`${U()}/m5t/v5/integrations/calendly/event_types`),n=await t.json().catch(()=>({}));e=t.status===404?{ok:!1,reason:`not_connected`}:n.ok?{ok:!0,list:n.data.event_types||[],scheduling_url:n.data.scheduling_url||``}:{ok:!1,reason:`error`}}catch{e={ok:!1,reason:`error`}}return e.ok&&(Cm=e),e}async function Qf(){if(wm)return wm;let e;try{let t=await fetch(`${U()}/m5t/v5/integrations/calcom/event_types`),n=await t.json().catch(()=>({}));e=t.status===404?{ok:!1,reason:`not_connected`}:n.ok?{ok:!0,list:n.data.event_types||[]}:{ok:!1,reason:`error`}}catch{e={ok:!1,reason:`error`}}return e.ok&&(wm=e),e}async function $f(e){let t=e.dataset.saved||``,n=e.dataset.savedName||`Saved Cal.com event`;e.innerHTML=`<option value="${V(t)}">${t?V(n):`Loading event types`}</option>`;let r=await Qf();if(!r.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${V(t)}" selected>${V(n)}</option>`:`<option value="">${r.reason===`not_connected`?`Connect Cal.com under Settings, Integrations first`:`Could not load event types`}</option>`;return}let i=r.list.map(e=>({url:e.url,label:e.length?`${e.title} (${e.length} min)`:e.title}));t&&!i.some(e=>e.url===t)&&i.unshift({url:t,label:n}),e.innerHTML=i.length?i.map(e=>`<option value="${V(e.url)}"${e.url===(t||i[0].url)?` selected`:``}>${V(e.label)}</option>`).join(``):`<option value="">No event types on this Cal.com account</option>`}async function ep(){if(Tm)return Tm;let e;try{let t=await fetch(`${U()}/m5t/v5/integrations/ms_bookings/businesses`),n=await t.json().catch(()=>({}));e=t.status===404?{ok:!1,reason:`not_connected`}:n.ok?{ok:!0,list:(n.data.businesses||[]).filter(e=>e.public_url)}:{ok:!1,reason:`error`}}catch{e={ok:!1,reason:`error`}}return e.ok&&(Tm=e),e}async function tp(e){let t=e.dataset.saved||``,n=e.dataset.savedName||`Saved Bookings page`;e.innerHTML=`<option value="${V(t)}">${t?V(n):`Loading booking pages`}</option>`;let r=await ep();if(!r.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${V(t)}" selected>${V(n)}</option>`:`<option value="">${r.reason===`not_connected`?`Connect Microsoft Bookings under Settings, Integrations first`:`Could not load booking pages`}</option>`;return}let i=e.dataset.savedBiz||``,a=r.list.map(e=>({url:e.public_url,label:e.name,id:e.id}));t&&!a.some(e=>e.url===t)&&a.unshift({url:t,label:n,id:i}),e.innerHTML=a.length?a.map(e=>`<option value="${V(e.url)}" data-id="${V(e.id||``)}"${e.url===(t||a[0].url)?` selected`:``}>${V(e.label)}</option>`).join(``):`<option value="">No Bookings pages on this Microsoft account</option>`,np(e),e.addEventListener(`change`,()=>np(e))}async function np(e){let t=e.closest(`.mag-cta`)?.querySelector(`.mag-cta__mbservice`);if(!t)return;let n=e.selectedOptions?.[0]?.dataset?.id||``,r=t.dataset.saved||``,i=t.dataset.savedName||`Saved service`,a=`<option value="">Whole page (opens in the magnet)</option>`;if(!n){t.innerHTML=a;return}t.innerHTML=`<option value="">Loading services…</option>`;try{let e=await(await fetch(`${U()}/m5t/v5/integrations/ms_bookings/services?business_id=${encodeURIComponent(n)}`)).json();if(!e.ok)throw Error();t.innerHTML=a+(e.data.services||[]).map(e=>`<option value="${V(e.id)}"${e.id===r?` selected`:``}>${V(e.name)} (${e.duration_mins} min, books in the magnet)</option>`).join(``)}catch{t.innerHTML=r?`<option value="">Whole page (opens in the magnet)</option><option value="${V(r)}" selected>${V(i)}</option>`:a}}async function rp(e){let t=e.dataset.saved||``,n=e.dataset.savedName||`Saved Calendly event`;e.innerHTML=`<option value="${V(t)}">${t?V(n):`Loading event types`}</option>`;let r=await Zf();if(!r.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${V(t)}" selected>${V(n)}</option>`:`<option value="">${r.reason===`not_connected`?`Connect Calendly under Settings, Integrations first`:`Could not load event types`}</option>`;return}let i=[];r.scheduling_url&&i.push({url:r.scheduling_url,label:`Full scheduling page (visitor picks the event)`}),r.list.forEach(e=>i.push({url:e.scheduling_url,label:e.duration?`${e.name} (${e.duration} min)`:e.name})),t&&!i.some(e=>e.url===t)&&i.unshift({url:t,label:n}),e.innerHTML=i.length?i.map(e=>`<option value="${V(e.url)}"${e.url===(t||i[0].url)?` selected`:``}>${V(e.label)}</option>`).join(``):`<option value="">No active event types</option>`}async function ip(){if(Em)return Em;let e;try{let t=await fetch(`${U()}/m5t/v5/integrations/callrail/trackers`),n=await t.json().catch(()=>({}));e=t.status===404?{ok:!1,reason:`not_connected`}:n.ok?{ok:!0,list:n.data.trackers||[]}:{ok:!1,reason:`error`}}catch{e={ok:!1,reason:`error`}}return e.ok&&(Em=e),e}async function ap(e){let t=e.dataset.saved||``,n=e.dataset.savedName||`Saved tracking number`;e.innerHTML=`<option value="${V(t)}">${t?V(n):`Loading tracking numbers`}</option>`;let r=await ip();if(!r.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${V(t)}" selected>${V(n)}</option>`:`<option value="">${r.reason===`not_connected`?`Connect CallRail under Settings, Integrations first`:`Could not load tracking numbers`}</option>`;return}let i=r.list.map(e=>({number:e.number,id:e.id,name:e.name,label:`${e.name} · ${e.number}${e.type===`session`?` (number pool)`:``}`}));t&&!i.some(e=>e.number===t)&&i.unshift({number:t,id:e.dataset.savedId||``,name:n,label:n}),e.innerHTML=i.length?i.map(e=>`<option value="${V(e.number)}" data-tracker-id="${V(e.id)}" data-tracker-name="${V(e.name)}"${e.number===(t||i[0].number)?` selected`:``}>${V(e.label)}</option>`).join(``):`<option value="">No active tracking numbers in this company</option>`}function op(e,t,n){return`<div class="mag-seg" role="radiogroup" aria-label="${V(e)}">${n.map(n=>`
    <label><input type="radio" name="${V(e)}" value="${V(n.value)}"${n.value===t?` checked`:``}>
      <span><span class="material-symbols-outlined" aria-hidden="true">${V(n.icon)}</span>${V(n.label)}</span></label>`).join(``)}</div>`}function sp(e,t){let n=xm[e],r=!!t,i=r?``:` disabled`,a=``;if(n.kind===`value`&&e===`call`){let e=t?.config?.source===`callrail`,r=e&&t?.value||``,o=e?t?.config?.tracker_name||`Saved tracking number`:``;a=`
      <select class="mag-modal__select mag-cta__callsrc"${i}>
        <option value=""${e?``:` selected`}>Phone number</option>
        <option value="callrail"${e?` selected`:``}>CallRail</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="${V(n.placeholder)}" value="${V(e?``:t?.value||``)}"${i}${e?` hidden`:``}>
      <select class="mag-modal__select mag-cta__crtracker" data-saved="${V(r)}" data-saved-name="${V(o)}" data-saved-id="${V(e&&t?.config?.tracker_id||``)}"${i}${e?``:` hidden`}>
        ${r?`<option value="${V(r)}" selected>${V(o)}</option>`:``}
      </select>`}else if(n.kind===`value`)a=`<input class="mag-modal__input mag-cta__val" type="text" placeholder="${V(n.placeholder)}" value="${V(t?.value||``)}"${i}>`;else if(n.kind===`book`){let e=t?.config?.source===`calendly`,n=t?.config?.source===`calcom`,r=t?.config?.source===`ms_bookings`,o=t?.config?.meeting_label||(n||r?``:t?.value)||``,s=e&&t?.config?.calendly_url||``,c=e?t?.config?.event_name||`Saved Calendly event`:``,l=n&&t?.value||``,u=n?t?.config?.event_name||`Saved Cal.com event`:``,d=r&&t?.value||``,f=r?t?.config?.event_name||`Saved Bookings page`:``;a=`
      <select class="mag-modal__select mag-cta__booksrc"${i}>
        <option value=""${e||n||r?``:` selected`}>Built-in scheduler</option>
        <option value="calendly"${e?` selected`:``}>Calendly</option>
        <option value="calcom"${n?` selected`:``}>Cal.com</option>
        <option value="ms_bookings"${r?` selected`:``}>Microsoft Bookings</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="Meeting label (e.g. 15 minute call), or paste a booking link" value="${V(o)}"${i}${e||n||r?` hidden`:``}>
      <select class="mag-modal__select mag-cta__calevent" data-saved="${V(s)}" data-saved-name="${V(c)}"${i}${e?``:` hidden`}>
        ${s?`<option value="${V(s)}" selected>${V(c)}</option>`:``}
      </select>
      <select class="mag-modal__select mag-cta__ccevent" data-saved="${V(l)}" data-saved-name="${V(u)}"${i}${n?``:` hidden`}>
        ${l?`<option value="${V(l)}" selected>${V(u)}</option>`:``}
      </select>
      <select class="mag-modal__select mag-cta__mbevent" data-saved="${V(d)}" data-saved-name="${V(f)}" data-saved-biz="${V(r&&t?.config?.business_id||``)}"${i}${r?``:` hidden`}>
        ${d?`<option value="${V(d)}" data-id="${V(r&&t?.config?.business_id||``)}" selected>${V(f)}</option>`:``}
      </select>
      <select class="mag-modal__select mag-cta__mbservice" data-saved="${V(r&&t?.config?.service_id||``)}" data-saved-name="${V(r&&t?.config?.event_name||``)}"${i}${r?``:` hidden`}>
        ${r&&t?.config?.service_id?`<option value="${V(t.config.service_id)}" selected>${V(t?.config?.event_name||`Saved service`)}</option>`:`<option value="">Whole page (opens in the magnet)</option>`}
      </select>`}else a=`<span class="mag-cta__note">${n.kind===`support`?`Multi-select intake`:`Opens your conversation flow`}</span>`;let o=``;if(n.kind===`support`){let e=(t?.config?.options||[]).map(e=>e&&e.label||e).filter(Boolean);o=`<textarea class="mag-modal__input mag-cta__opts" rows="3" placeholder="Support options, one per line (e.g. Sales&#10;Support&#10;Billing)"${i}>${V(e.join(`
`))}</textarea>`}return`<div class="mag-cta" data-type="${e}" data-kind="${n.kind}">
    <div class="mag-cta__main">
      <label class="mag-cta__tog"><input type="checkbox" class="mag-cta__on"${r?` checked`:``}>
        <span class="material-symbols-outlined" aria-hidden="true">${n.icon}</span>${n.label}</label>
      ${a}
    </div>
    ${o}
  </div>`}function cp(){if(fm)return;let e=document.createElement(`style`);e.id=`m5t-magnets-styles`,e.textContent=`
    /* List rows, not a card grid (2026-08-20 redesign). .mag-grid / .mag-card class
       names survive as selector anchors — tests and the async install/connection
       patchers key on them — but the grid is now a bordered list panel of rows. */
    .page-shell .mag-grid { --magcols: minmax(220px, 1.7fr) minmax(135px, 1fr) minmax(150px, 1fr) max-content; display: flex; flex-direction: column; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px); background: var(--color-bg, #fff); overflow: visible; }
    .page-shell .mag-head { display: grid; grid-template-columns: var(--magcols); column-gap: 18px; padding: 10px 18px; border-bottom: 1px solid var(--color-border, #D4DCE8); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-card { padding: 16px 18px; border-bottom: 1px solid var(--color-border, #D4DCE8); transition: background 0.15s ease; }
    .page-shell .mag-card.is-open { background: var(--color-surface, #F4F7FB); box-shadow: inset 3px 0 0 var(--color-accent, #0072BA); }
    .page-shell .mag-card:last-child { border-bottom: 0; }
    .page-shell .mag-line { display: grid; grid-template-columns: var(--magcols); column-gap: 18px; align-items: center; cursor: pointer; }
    .page-shell .mag-card:hover:not(.is-open) { background: var(--color-surface, #F4F7FB); }
    .page-shell .mag-cell { min-width: 0; }
    .page-shell .mag-cell--act { display: flex; align-items: center; gap: 6px; justify-content: flex-end; }
    .page-shell .mag-cellsub { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-status { display: flex; align-items: center; gap: 7px; font-size: 0.9rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-status[data-live="live"] { color: var(--color-success, #009473); }
    .page-shell .mag-status[data-live="seen"] { color: #B45309; }
    .page-shell .mag-statline { font-size: 0.9rem; font-variant-numeric: tabular-nums; color: var(--color-text, #0B1220); }
    .page-shell .mag-statline b { font-weight: 700; }
    .page-shell .mag-statline--empty { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-btn--icon { padding: 0; width: 34px; height: 34px; justify-content: center; border-radius: 9px; }
    .page-shell .mag-dot { flex: 0 0 auto; width: 10px; height: 10px; border-radius: 50%; background: var(--color-border, #D4DCE8); }
    .page-shell .mag-dot[data-live="live"] { background: var(--color-success, #009473); }
    .page-shell .mag-dot[data-live="seen"] { background: #B45309; }
    .page-shell .mag-dot[data-live="quiet"] { background: transparent; box-shadow: inset 0 0 0 2px var(--color-border, #D4DCE8); }
    .page-shell .mag-dot[data-live="off"] { background: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-dot[data-live="draft"] { background: transparent; box-shadow: inset 0 0 0 2px var(--color-text-subtle, #6C7C9A); opacity: 0.65; }
    .page-shell .mag-id__line { display: flex; align-items: center; gap: 8px; min-width: 0; }
    .page-shell .mag-sub { margin-top: 2px; }
    .page-shell .mag-name { font-weight: 700; font-size: 1.02rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-sub { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-more-wrap { position: relative; }
    .page-shell .mag-menu { position: absolute; right: 0; top: calc(100% + 4px); z-index: 30; min-width: 158px; background: var(--color-bg, #fff); border: 1px solid var(--color-border, #D4DCE8); border-radius: 10px; box-shadow: 0 10px 28px rgba(11, 18, 32, 0.14); padding: 4px; display: flex; flex-direction: column; }
    .page-shell .mag-menu[hidden] { display: none; }
    .page-shell .mag-menu__item { appearance: none; border: 0; background: none; cursor: pointer; font: inherit; font-size: 0.84rem; font-weight: 600; text-align: left; display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 7px; color: var(--color-text, #0B1220); }
    .page-shell .mag-menu__item:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .mag-menu__item.danger { color: var(--color-danger, #DD4124); }
    .page-shell .mag-menu__item .material-symbols-outlined { font-size: 16px; }
    .page-shell .mag-detail { margin: 13px 0 3px 22px; padding: 14px 16px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); border-radius: 12px; display: flex; flex-direction: column; gap: 11px; }
    .page-shell .mag-detail:not([hidden]) { animation: mag-reveal 0.18s ease; }
    @keyframes mag-reveal { from { opacity: 0; transform: translateY(-5px); } }
    @media (prefers-reduced-motion: reduce) { .page-shell .mag-detail:not([hidden]) { animation: none; } .page-shell .mag-card { transition: none; } }
    .page-shell .mag-detail__hd { display: flex; align-items: center; gap: 9px; border-bottom: 1px solid var(--color-border, #D4DCE8); padding-bottom: 10px; }
    .page-shell .mag-detail__k { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--color-accent, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.10)); padding: 3px 8px; border-radius: 6px; }
    .page-shell .mag-detail__n { font-size: 0.92rem; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-detail__x { appearance: none; border: 0; background: none; cursor: pointer; margin-left: auto; width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-detail__x:hover { background: var(--color-surface, #F4F7FB); color: var(--color-text, #0B1220); }
    .page-shell .mag-detail__x .material-symbols-outlined { font-size: 19px; }
    .page-shell .mag-detail[hidden] { display: none; }
    .page-shell .mag-detail .mag-embed input { background: var(--color-surface, #F4F7FB); }
    @media (max-width: 760px) {
      .page-shell .mag-head { display: none; }
      .page-shell .mag-line { grid-template-columns: 1fr max-content; row-gap: 7px; }
      .page-shell .mag-cell--status, .page-shell .mag-cell--stats { grid-column: 1 / -1; display: flex; align-items: baseline; gap: 8px; }
      .page-shell .mag-cell--status .mag-cellsub, .page-shell .mag-cell--stats .mag-cellsub { margin-top: 0; }
      .page-shell .mag-detail { margin-left: 0; }
    }
    .page-shell .mag-owner { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-badge { flex: 0 0 auto; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; }
    .page-shell .mag-badge[data-s="ENABLED"] { background: #DCFCE7; color: #047857; }
    .page-shell .mag-badge[data-s="DISABLED"], .page-shell .mag-badge[data-s="DRAFT"] { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-ab-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 999px; background: #EDE9FE; color: #6D28D9; }
    .page-shell .mag-ab-chip .material-symbols-outlined { font-size: 13px; }
    .page-shell .mag-alert-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 999px; background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); text-decoration: none; }
    .page-shell .mag-alert-chip:hover { filter: brightness(0.95); }
    .page-shell .mag-alert-chip .material-symbols-outlined { font-size: 13px; }
    .page-shell .mag-inline-note { display: flex; gap: 6px; align-items: flex-start; font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); margin-top: -4px; }
    .page-shell .mag-inline-note .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; margin-top: 1px; }
    .page-shell .mag-inline-note code, .mag-modal__body code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
    .page-shell .mag-embed { display: flex; gap: 6px; align-items: center; }
    .page-shell .mag-embed input { flex: 1 1 auto; min-width: 0; font: inherit; font-size: 0.78rem; font-family: ui-monospace, Menlo, monospace; padding: 7px 9px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-surface, #F4F7FB); color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-guide { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-guide summary { display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 600; color: var(--color-primary-600, #0072BA); list-style: none; }
    .page-shell .mag-guide summary::-webkit-details-marker { display: none; }
    .page-shell .mag-guide summary .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; }
    .page-shell .mag-guide__body { margin: 6px 0 0 21px; padding: 8px 10px; border-left: 2px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-guide__plat + .mag-guide__plat { margin-top: 10px; padding-top: 9px; border-top: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-guide__plat h4 { display: flex; align-items: center; gap: 6px; margin: 0 0 4px; font-size: 0.74rem; font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .mag-guide__plat h4 .material-symbols-outlined { font-size: 15px; color: var(--color-primary-600, #0072BA); }
    .page-shell .mag-guide__body ol { margin: 0; padding-left: 18px; }
    .page-shell .mag-guide__body li { margin-bottom: 3px; line-height: 1.45; }
    .page-shell .mag-guide__note { margin: 5px 0 0; line-height: 1.45; }
    .page-shell .mag-guide__snippet { margin: 5px 0 0; padding: 7px 9px; border-radius: 6px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); overflow-x: auto; }
    .page-shell .mag-guide__snippet code { font-family: ui-monospace, Menlo, monospace; font-size: 0.9em; white-space: pre; background: none; padding: 0; }
    .page-shell .mag-guide code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
    .page-shell .mag-csp-note { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-csp-note summary { display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 600; color: var(--color-warning, #915E00); list-style: none; }
    .page-shell .mag-csp-note summary::-webkit-details-marker { display: none; }
    .page-shell .mag-csp-note summary .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; }
    .page-shell .mag-csp-note__body { margin: 6px 0 0 21px; padding: 8px 10px; border-left: 2px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-csp-note__body p { margin: 0 0 6px; }
    .page-shell .mag-csp-note__body ul { margin: 0 0 6px; padding-left: 18px; }
    .page-shell .mag-csp-note__body li { margin-bottom: 2px; }
    .page-shell .mag-csp-note code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
    /* install status — tokens only, and a state attribute rather than three class
       names, so the three states cannot drift apart visually. */
    .page-shell .mag-install { margin: 8px 0 0; padding: 10px 12px; border-radius: 8px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); font-size: 0.84rem; }
    .page-shell .mag-install__hd { display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .mag-install__hd .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-install[data-state="live"] .mag-install__hd { color: var(--color-success, #009473); }
    .page-shell .mag-install[data-state="seen"] .mag-install__hd { color: var(--color-warning-text, #92400E); }
    .page-shell .mag-install[data-state="quiet"] .mag-install__hd { color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-install__hint { margin: 5px 0 0; color: var(--color-text-subtle, #6C7C9A); line-height: 1.45; }
    .page-shell .mag-install__seen { margin-top: 7px; }
    .page-shell .mag-install__seenhd { color: var(--color-text-muted, #4A5A78); margin-bottom: 4px; }
    .page-shell .mag-install__row { display: flex; align-items: center; gap: 8px; padding: 3px 0; }
    .page-shell .mag-install__dom { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, Menlo, monospace; }
    .page-shell .mag-install__hits { flex: 0 0 auto; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-install__dismissed { margin-top: 7px; }
    .page-shell .mag-install__dismissed > summary { cursor: pointer; color: var(--color-text-muted, #4A5A78); font-size: 0.76rem; }
    .page-shell .mag-install__dismissed > summary:hover { color: var(--color-text, #0B1220); }
    .page-shell .mag-install__dismissed .mag-install__dom { color: var(--color-text-subtle, #6C7C9A); }
    /* connected sites — same surface, border and type scale as the install block above,
       and the same data-state-over-class-names approach, so the two read as one section
       rather than two widgets that happen to sit together. Tokens only. */
    .page-shell .mag-conn { margin: 8px 0 0; padding: 10px 12px; border-radius: 8px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); font-size: 0.84rem; }
    .page-shell .mag-conn__hd { display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .mag-conn__hd .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-conn__row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
    .page-shell .mag-conn__row + .mag-conn__row { border-top: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-conn__icon { font-size: 17px; flex: 0 0 auto; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-conn__row[data-state="live"] .mag-conn__icon { color: var(--color-success, #009473); }
    .page-shell .mag-conn__row[data-state="pending"] .mag-conn__icon { color: var(--color-warning-text, #92400E); }
    .page-shell .mag-conn__row[data-state="off"] { opacity: 0.62; }
    .page-shell .mag-conn__site { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
    .page-shell .mag-conn__host { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, Menlo, monospace; }
    .page-shell .mag-conn__sub { color: var(--color-text-subtle, #6C7C9A); font-size: 0.8rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-conn__status { flex: 0 0 auto; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-conn__past { margin-top: 4px; }
    .page-shell .mag-conn__past > summary { cursor: pointer; color: var(--color-text-muted, #4A5A78); font-size: 0.82rem; padding: 3px 0; }
    .page-shell .mag-conn__past > summary:hover { color: var(--color-text, #0B1220); }
    .page-shell .mag-conn__code { margin-top: 8px; padding: 9px 10px; border-radius: 8px; border: 1px dashed var(--color-border, #D4DCE8); background: var(--color-bg, #FFFFFF); }
    .page-shell .mag-conn__code[data-state="done"] .mag-conn__hd { color: var(--color-success, #009473); }
    /* The code has to survive a narrow card without a horizontal scrollbar — it is 48
       characters and someone has to read it off the screen to paste it. */
    .page-shell .mag-conn__codebox { display: flex; align-items: center; gap: 8px; margin-top: 6px; }
    .page-shell .mag-conn__codebox code { flex: 1 1 auto; min-width: 0; font-family: ui-monospace, Menlo, monospace; font-size: 0.82rem; letter-spacing: 0.02em; word-break: break-all; background: var(--color-surface, #F4F7FB); border-radius: 6px; padding: 6px 8px; }
    .page-shell .mag-conn__countdown { margin: 6px 0 0; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-csp-note__snippet { margin: 0 0 8px; padding: 10px 12px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; overflow-x: auto; }
    .page-shell .mag-csp-note__snippet code { display: block; background: transparent; padding: 0; white-space: pre; line-height: 1.6; }
    .page-shell .mag-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.84rem; font-weight: 600; padding: 7px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 5px; color: var(--color-text, #0B1220); }
    .page-shell .mag-btn:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .mag-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .mag-btn .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-btn--primary { border-color: var(--color-accent, #0072BA); color: var(--color-accent, #0072BA); font-weight: 700; }
    .page-shell .mag-btn--primary:hover { background: var(--color-accent-soft, rgba(0,114,186,0.10)); }
    .page-shell .mag-btn.is-open { background: var(--color-accent-soft, rgba(0,114,186,0.12)); border-color: var(--color-accent, #0072BA); color: var(--color-accent, #0072BA); }
    .mag-funnel-modal .mag-modal__body { max-height: 70vh; overflow-y: auto; }
    .mag-funnel { display: flex; flex-direction: column; gap: 12px; }
    .mag-funnel__row { display: flex; flex-direction: column; gap: 4px; }
    .mag-funnel__meta { display: flex; justify-content: space-between; font-size: 0.8rem; }
    .mag-funnel__label { font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .mag-funnel__val { font-weight: 700; color: var(--color-text, #0B1220); }
    .mag-funnel__pct { font-size: 0.72rem; font-weight: 500; color: var(--color-text-subtle, #6C7C9A); }
    .mag-funnel__track { height: 12px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); overflow: hidden; }
    .mag-funnel__bar { height: 100%; border-radius: 999px; background: var(--color-primary-600, #0072BA); transition: width 0.4s ease; }
    .mag-funnel__bar--drop { background: #7BC4C4; }

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
    .mag-modal__dirty { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; font-weight: 600; color: var(--color-warning, #915E00); }
    .mag-modal__dirty .material-symbols-outlined { font-size: 15px; }
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
    .mag-seg input:checked + span { border-color: var(--color-accent, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.12)); color: var(--color-accent, #0072BA); }
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
    .mag-size-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(104px, 1fr)); gap: 10px; margin-top: 8px; }
    .mag-size-card { position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; border: 1.5px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 10px 8px 9px; cursor: pointer; text-align: center; }
    .mag-size-card:hover { border-color: var(--color-primary-600, #0072BA); }
    .mag-size-card input { position: absolute; opacity: 0; pointer-events: none; }
    .mag-size-card.is-on { border-color: var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.06)); }
    .mag-size-thumb { width: 56px; height: 44px; display: grid; place-items: center; }
    .mag-size-thumb i { display: block; border: 1.5px solid var(--color-text-subtle, #6C7C9A); border-radius: 4px; background: var(--color-surface, #F4F7FB); }
    .mag-size-card.is-on .mag-size-thumb i { border-color: var(--color-primary-600, #0072BA); background: var(--color-bg, #fff); }
    .mag-size-name { font-size: 0.82rem; font-weight: 700; }
    .mag-size-hint { font-size: 0.68rem; color: var(--color-text-subtle, #6C7C9A); line-height: 1.3; }
    #mag-f-inline-custom[hidden] { display: none; }
    .mag-size-err { color: var(--color-danger-text, #B3261E); font-size: 0.78rem; margin: 6px 0 0; }
    .mag-size-err:empty { display: none; }
    .mag-logo-drop { display: flex; align-items: center; gap: 12px; border: 1.5px dashed var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 12px; cursor: pointer; transition: border-color .12s, background .12s; }
    .mag-logo-drop:hover, .mag-logo-drop.is-dragover { border-color: var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.06)); }
    .mag-logo-drop__preview { flex: 0 0 auto; width: 48px; height: 48px; border-radius: 50%; overflow: hidden; display: grid; place-items: center; background: var(--color-surface, #F4F7FB); color: var(--color-text-subtle, #6C7C9A); }
    .mag-logo-drop__preview img { width: 100%; height: 100%; object-fit: cover; }
    .mag-logo-drop__body { flex: 1 1 auto; min-width: 0; }
    .mag-logo-drop__t { margin: 0; font-size: 0.86rem; }
    .mag-logo-drop__browse { appearance: none; border: none; background: none; padding: 0; font: inherit; font-weight: 700; color: var(--color-accent, #0072BA); cursor: pointer; text-decoration: underline; }
    .mag-logo-drop__remove { flex: 0 0 auto; appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .mag-logo-drop__remove:hover { color: var(--color-danger, #DD4124); border-color: var(--color-danger, #DD4124); }
    .mag-logo-drop__remove .material-symbols-outlined { font-size: 17px; }
    .mag-logo-drop__remove[hidden] { display: none; }
  `,document.head.appendChild(e),fm=!0}function lp(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function up(e){let t=B.stats[e];if(!t||!t.opens&&!t.leads)return`<div class="mag-statline mag-statline--empty">&mdash;</div><div class="mag-cellsub">No activity yet</div>`;let n=e=>Number(e||0).toLocaleString();return`<div class="mag-statline" title="Trailing 30 days"><b>${n(t.opens)}</b> opens &middot; <b>${n(t.leads)}</b> leads</div>
    ${t.completion_rate==null?``:`<div class="mag-cellsub">${t.completion_rate}% complete the conversation</div>`}`}function dp(e){let t=B.install[e.guid];if(!t)return``;let n=t.unrecognized||[],r=(t.traffic?.opens||0)>0,i=e.can_manage===!0,a=n.length?`
    <div class="mag-install__seen">
      <div class="mag-install__seenhd">Seen requesting this magnet, not on the allow-list:</div>
      ${n.map(t=>`
        <div class="mag-install__row">
          <span class="mag-install__dom" title="${V(t.domain)}">${V(t.domain)}</span>
          <span class="mag-install__hits">${Number(t.hits||0).toLocaleString()}&times;</span>
          ${i?`<button class="mag-btn" data-action="allow-domain" data-guid="${V(e.guid)}" data-domain="${V(t.domain)}">Allow</button>
          <button class="mag-btn" data-action="dismiss-domain" data-guid="${V(e.guid)}" data-domain="${V(t.domain)}" title="Stop showing this domain">Dismiss</button>`:``}
        </div>`).join(``)}
      <p class="mag-install__hint">Domains must be approved before this magnet will load on them. Only approve a domain you recognise — approving the wrong one lets that site use your magnet. Dismiss hides a domain from this list for good; it does not approve it.</p>
    </div>`:``,o=Number(t.no_referer?.hits||0),s=o?`
    <p class="mag-install__hint">
      ${o.toLocaleString()} request${o===1?``:`s`} in the last ${Number(t.window_days||30)} days arrived with no
      referrer, so we couldn't tell which site they came from. They were served. This is
      usually a site sending <code>Referrer-Policy: no-referrer</code>.
    </p>`:``,c=t.dismissed||[],l=c.length?`
    <details class="mag-install__dismissed">
      <summary>Dismissed (${c.length})</summary>
      ${c.map(t=>`
        <div class="mag-install__row">
          <span class="mag-install__dom" title="${V(t)}">${V(t)}</span>
          ${i?`<button class="mag-btn" data-action="restore-domain" data-guid="${V(e.guid)}" data-domain="${V(t)}">Restore</button>`:``}
        </div>`).join(``)}
      <p class="mag-install__hint">Dismissing also covers subdomains — hiding <code>vercel.app</code> hides every preview URL under it.</p>
    </details>`:``;if(r){let e=t.traffic.last_open_at?new Date(t.traffic.last_open_at).toLocaleString():``;return`<div class="mag-install" data-state="live">
      <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
        Live${e?` — last visitor ${V(e)}`:``}</div>
      ${a}
      ${s}
      ${l}
    </div>`}return n.length?`<div class="mag-install" data-state="seen">
      <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">travel_explore</span>
        Installed somewhere we don't recognise</div>
      ${a}
      ${s}
      ${l}
    </div>`:`<div class="mag-install" data-state="quiet">
    <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">help</span>Not seen yet</div>
    <p class="mag-install__hint">No visitor has loaded this magnet in the last ${Number(t.window_days||30)} days. Either the snippet isn't on the site yet, or it is and the site's Content-Security-Policy is blocking it — see the note above.</p>
    ${s}
    ${l}
  </div>`}async function fp(){await Promise.all(B.magnets.map(async e=>{try{let t=await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity`)).json().catch(()=>({}));if(!t.ok)return;B.install[e.guid]=t,Pp(e)}catch(t){console.warn(`[magnets] install activity failed:`,e.guid,t)}}))}function pp(e){return e?e.status===`REVOKED`||e.status===`PENDING`&&e.codeLive===!1:!1}function mp(e,t){let n=t.status===`PENDING`&&t.codeLive===!1,r=(n?Om.EXPIRED:Om[t.status])||{label:t.status,icon:`help`,tone:`off`},i=t.lastSeen?new Date(t.lastSeen).toLocaleString():``,a=t.host?V(t.host):n||t.status===`REVOKED`?`Code was never used`:`Waiting for a site to use this code`,o=[t.siteName?V(t.siteName):``,i?`last seen ${V(i)}`:``].filter(Boolean).join(` — `);return`
    <div class="mag-conn__row" data-conn="${V(t.guid)}" data-state="${r.tone}">
      <span class="mag-conn__icon material-symbols-outlined" aria-hidden="true">${r.icon}</span>
      <span class="mag-conn__site">
        <span class="mag-conn__host">${a}</span>
        ${o?`<span class="mag-conn__sub">${o}</span>`:``}
      </span>
      <span class="mag-conn__status">${V(r.label)}</span>
      ${e.can_manage===!0?pp(t)?`<button class="mag-btn" data-action="clear-connection" data-guid="${V(e.guid)}" data-conn="${V(t.guid)}"
                   data-label="${V(t.host||`this unused code`)}"
                   title="Remove this finished record from the list">
             Clear
           </button>`:`<button class="mag-btn" data-action="revoke-connection" data-guid="${V(e.guid)}" data-conn="${V(t.guid)}"
                   title="${t.status===`PENDING`?`Cancel this pairing code`:`Disconnect this site and revoke its key`}">
             ${t.status===`PENDING`?`Cancel`:`Disconnect`}
           </button>`:``}
    </div>`}function hp(e){let t=B.pairing[e.guid];if(!t)return``;if(t.error)return`<div class="mag-conn__code" data-state="error">
      <p class="mag-install__hint">${V(t.error)}</p>
      <button class="mag-btn" data-action="pair-start" data-guid="${V(e.guid)}">Try again</button>
    </div>`;if(t.connected)return`<div class="mag-conn__code" data-state="done">
      <div class="mag-conn__hd"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
        Connected${t.connectedHost?` — ${V(t.connectedHost)}`:``}</div>
      <p class="mag-install__hint">The site is paired and its domain has been added to this magnet.</p>
    </div>`;let n=Math.max(0,Math.ceil((t.expiresAt-Date.now())/1e3));if(n<=0)return`<div class="mag-conn__code" data-state="expired">
      <p class="mag-install__hint">That code expired. Codes are shown once and can't be retrieved, so generate a new one.</p>
      <button class="mag-btn mag-btn--primary" data-action="pair-start" data-guid="${V(e.guid)}">Generate a new code</button>
    </div>`;let r=String(Math.floor(n/60)),i=String(n%60).padStart(2,`0`);return`<div class="mag-conn__code" data-state="live">
    <div class="mag-conn__hd">Your pairing code</div>
    <div class="mag-conn__codebox">
      <code data-x="code">${V(t.code)}</code>
      <button class="mag-btn" data-action="copy-code" data-guid="${V(e.guid)}" title="Copy pairing code">
        <span class="material-symbols-outlined" aria-hidden="true">content_copy</span>
      </button>
    </div>
    <p class="mag-conn__countdown">Expires in <strong data-x="countdown">${r}:${i}</strong>. Waiting for your site to connect&hellip;</p>
    <p class="mag-install__hint">This code is shown once and can't be shown again — if you lose it, generate another. It only works for this magnet.</p>
  </div>`}function gp(e){let t=B.connections[e.guid];if(!t)return``;if(t.failed)return`<div class="mag-conn">
      <div class="mag-conn__hd">
        <span class="material-symbols-outlined" aria-hidden="true">lan</span>Connected sites
      </div>
      <p class="mag-install__hint">Couldn't load connected sites just now. Reload to try again — this doesn't affect the magnet itself.</p>
    </div>`;let n=t.connections||[],r=n.filter(t=>t.status!==`PENDING`||e.can_manage===!0),i=n.filter(e=>e.status===`ACTIVE`).length,a=hp(e),o=r.filter(e=>!pp(e)),s=r.filter(e=>pp(e)),c=o.length?o.map(t=>mp(e,t)).join(``):`<p class="mag-install__hint">No sites connected yet. On WordPress, connecting a site pairs it without pasting the snippet by hand.</p>`,l=s.length?`
    <details class="mag-conn__past">
      <summary>${s.length} earlier ${s.length===1?`code or disconnected site`:`codes and disconnected sites`}</summary>
      ${s.map(t=>mp(e,t)).join(``)}
    </details>`:``;return`<div class="mag-conn">
    <div class="mag-conn__hd">
      <span class="material-symbols-outlined" aria-hidden="true">lan</span>
      Connected sites${i?` (${i})`:``}
    </div>
    ${c}
    ${l}
    ${a}
    ${e.can_manage===!0&&!a?`
      <button class="mag-btn" data-action="pair-start" data-guid="${V(e.guid)}">
        <span class="material-symbols-outlined" aria-hidden="true">add_link</span>Connect a WordPress site
      </button>`:``}
  </div>`}function _p(e){let t=document.querySelector(`.mag-card[data-guid="${CSS.escape(e.guid)}"] .mag-conn-slot`);t&&(t.innerHTML=gp(e))}async function vp(e){let t=await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/connections`)).json().catch(()=>({}));if(!t.ok)throw Error(t.error||`Could not load connected sites`);return t}async function yp(){await Promise.all(B.magnets.map(async e=>{try{B.connections[e.guid]=await vp(e)}catch(t){console.warn(`[magnets] connections failed:`,e.guid,t),B.connections[e.guid]={failed:!0}}_p(e)}))}function bp(){B.pairTimer&&(clearInterval(B.pairTimer),B.pairTimer=null)}function xp(){bp()}function Sp(e){return!!document.querySelector(`.mag-card[data-guid="${CSS.escape(e)}"] .mag-conn-slot`)}function Cp(){if(B.pairTimer)return;let e=0;B.pairTimer=setInterval(async()=>{for(let e of Object.keys(B.pairing))Sp(e)||delete B.pairing[e];let t=Object.keys(B.pairing);if(!t.length){bp();return}if(!t.some(e=>{let t=B.pairing[e];return!t.connected&&!t.error&&t.expiresAt-Date.now()>0})){t.forEach(e=>{let t=B.magnets.find(t=>t.guid===e);t&&_p(t)}),bp();return}e+=1e3;let n=e>=Dm;n&&(e=0);for(let e of t){let t=B.magnets.find(t=>t.guid===e),r=B.pairing[e];if(!t||!r)continue;let i=r.expiresAt-Date.now()<=0;if(n&&!r.connected&&!r.error&&!i)try{let n=await vp(t);B.connections[e]=n;let i=(n.connections||[]).find(e=>e.guid===r.connectionGuid&&e.status===`ACTIVE`);i&&(B.pairing[e]={connected:!0,connectionGuid:r.connectionGuid,connectedHost:i.host},H(`${i.host||`Your site`} connected`,`success`))}catch{}_p(t)}},1e3)}async function wp(e){try{let t=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/pairing-code`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok){B.pairing[e.guid]={error:n.message||n.error||`Could not generate a pairing code`},_p(e);return}B.pairing[e.guid]={code:n.pairingCode,connectionGuid:n.connectionGuid,expiresAt:new Date(n.expiresAt).getTime()};try{B.connections[e.guid]=await vp(e)}catch{}_p(e),Cp()}catch{B.pairing[e.guid]={error:`Could not reach the server. Try again.`},_p(e)}}async function Tp(e){let t=B.pairing[e.guid]?.code;if(t)try{await navigator.clipboard.writeText(t),H(`Pairing code copied`,`success`)}catch{H(`Copy failed — select the code and copy it manually`,`danger`)}}async function Ep(e,t,n){if(window.confirm(`Clear the record for ${n||`this connection`}?\n\nIt is removed from this list for good. This only tidies up the history — the site is already disconnected, so nothing about access changes.`))try{let n=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/connections/${encodeURIComponent(t)}`,{method:`DELETE`}),r=await n.json().catch(()=>({}));if(!n.ok||!r.ok){H(r.message||r.error||`Could not clear that record`,`danger`);return}H(`Record cleared`,`success`);try{B.connections[e.guid]=await vp(e)}catch{}_p(e)}catch{H(`Could not reach the server`,`danger`)}}async function Dp(e,t){let n=(B.connections[e.guid]?.connections||[]).find(e=>e.guid===t),r=n?.status===`PENDING`,i=r?`Cancel this pairing code?`:`Disconnect ${n?.host||`this site`}?`,a=r?`The code stops working immediately.`:`Its key stops working immediately and the plugin will show as disconnected. The domain stays on the allow-list — remove it separately if you want the magnet off that site.`;if(window.confirm(`${i}\n\n${a}`))try{let n=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/connections/${encodeURIComponent(t)}/revoke`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`}),i=await n.json().catch(()=>({}));if(!n.ok||!i.ok){H(i.message||i.error||`Could not disconnect`,`danger`);return}B.pairing[e.guid]?.connectionGuid===t&&delete B.pairing[e.guid],H(r?`Pairing code cancelled`:`Site disconnected`,`success`);try{B.connections[e.guid]=await vp(e)}catch{}_p(e)}catch{H(`Could not reach the server`,`danger`)}}function Op(e){if(e.status===`DRAFT`)return`draft`;if(e.status!==`ENABLED`)return`off`;let t=B.install[e.guid];return t?(t.traffic?.opens||0)>0?`live`:(t.unrecognized||[]).length?`seen`:`quiet`:`unknown`}function kp(e){let t=Op(e),n=B.install[e.guid],r=``,i=``;if(t===`draft`)r=`Draft`,i=`Not live yet`;else if(t===`off`)r=`Disabled`,i=`Hidden from visitors`;else if(t===`live`){let e=n.traffic?.last_open_at?new Date(n.traffic.last_open_at):null,t=e&&e.toDateString()===new Date().toDateString(),a=e?t?e.toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}):e.toLocaleDateString():``;r=`Live`,i=a?`Last visitor ${V(a)}`:`Serving visitors`}else t===`seen`?(r=`Needs review`,i=`Unrecognised domain`):t===`quiet`&&(r=`Not seen`,i=`No visitors in ${Number(n.window_days||30)} days`);return r?`<div class="mag-status" data-live="${t}"><span class="mag-dot" data-live="${t}" aria-hidden="true"></span>${r}</div>
          ${i?`<div class="mag-cellsub">${i}</div>`:``}`:``}function Ap(e){let t=B.owners.length>1||C.getMemberships().length>1,n=(e.domains||[]).filter(Boolean),r=e.can_manage===!0,i=B.detailOpen[e.guid]===!0,a=[_m[e.display_mode]||`Chat bubble`,n.length?n.join(`, `):`No domains set. Add yours to go live.`,t&&e.owner_name?e.owner_name:``].filter(Boolean).join(` · `);return`
    <div class="mag-card${i?` is-open`:``}" data-guid="${V(e.guid)}">
      <div class="mag-line">
        <div class="mag-cell mag-cell--id">
          <div class="mag-id__line">
            <span class="mag-name" title="${V(e.name)}">${V(e.name)}</span>
            ${e.ab?.enabled?`<span class="mag-ab-chip"><span class="material-symbols-outlined" aria-hidden="true">science</span>A/B</span>`:``}
            ${(e.notify_emails||[]).length?`<a class="mag-alert-chip" href="#/settings/notifications" title="Lead alerts to ${(e.notify_emails||[]).length} email${(e.notify_emails||[]).length===1?``:`s`}. Manage in Settings."><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span>${(e.notify_emails||[]).length}</a>`:``}
            ${e.status===`ENABLED`?``:`<span class="mag-badge" data-s="${V(e.status)}">${V(e.status)}</span>`}
          </div>
          <div class="mag-cellsub mag-sub" title="${V(a)}">${V(a)}</div>
        </div>
        <div class="mag-cell mag-cell--status">${kp(e)}</div>
        <div class="mag-cell mag-cell--stats">${up(e.guid)}</div>
        <div class="mag-cell mag-cell--act">
          ${r?`<button class="mag-btn mag-btn--primary" data-action="edit" data-guid="${V(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Edit</button>`:``}
          <button class="mag-btn mag-btn--icon${i?` is-open`:``}" data-action="install-toggle" data-guid="${V(e.guid)}" aria-expanded="${i}" aria-controls="mag-detail-${V(e.guid)}" title="${i?`Close`:`Open`} install and health"><span class="material-symbols-outlined" aria-hidden="true">${i?`expand_less`:`expand_more`}</span></button>
          <div class="mag-more-wrap">
              <button class="mag-btn" data-action="menu" data-guid="${V(e.guid)}" aria-haspopup="true" aria-expanded="false" title="More actions"><span class="material-symbols-outlined" aria-hidden="true">more_horiz</span></button>
              <div class="mag-menu" hidden role="menu">
                <button class="mag-menu__item" role="menuitem" data-action="preview" data-guid="${V(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview</button>
                <button class="mag-menu__item" role="menuitem" data-action="funnel" data-guid="${V(e.guid)}" title="Which question loses the most visitors"><span class="material-symbols-outlined" aria-hidden="true">filter_alt</span>Funnel</button>
                ${r?`
                <button class="mag-menu__item" role="menuitem" data-action="flow" data-guid="${V(e.guid)}" title="Edit the conversation flow"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
                ${e.status===`DRAFT`?``:`
                <button class="mag-menu__item" role="menuitem" data-action="toggle" data-guid="${V(e.guid)}">${e.status===`ENABLED`?`<span class="material-symbols-outlined" aria-hidden="true">pause</span>Disable`:`<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Enable`}</button>`}
                <button class="mag-menu__item danger" role="menuitem" data-action="delete" data-guid="${V(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">delete</span>Delete</button>`:``}
            </div>
          </div>
        </div>
      </div>
      <div class="mag-detail" id="mag-detail-${V(e.guid)}" ${i?``:`hidden`}>
        <div class="mag-detail__hd">
          <span class="mag-detail__k">Install</span>
          <span class="mag-detail__n" title="${V(e.name)}">${V(e.name)}</span>
          <button class="mag-detail__x" type="button" data-action="install-toggle" data-guid="${V(e.guid)}" title="Close"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
        </div>
        <div class="mag-embed">
          <input type="text" readonly value="${V(mm(e.guid))}" aria-label="Embed snippet">
          <button class="mag-btn" data-action="copy" data-guid="${V(e.guid)}" title="Copy embed snippet"><span class="material-symbols-outlined" aria-hidden="true">content_copy</span></button>
        </div>
        ${gm(e.guid)}
        ${hm()}
        ${e.display_mode===`inline`?`<div class="mag-inline-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><span>Inline mode: also place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> where you want it to appear. The card fills that spot up to its max width.</span></div>`:``}
        <div class="mag-install-slot">${dp(e)}</div>
        <div class="mag-conn-slot">${gp(e)}</div>
      </div>
    </div>`}function jp(e,t){let n=typeof t==`boolean`?t:B.detailOpen[e]!==!0;B.detailOpen[e]=n;let r=document.querySelector(`.mag-card[data-guid="${CSS.escape(e)}"]`);if(!r)return;r.classList.toggle(`is-open`,n);let i=r.querySelector(`.mag-detail`);i&&(i.hidden=!n);let a=r.querySelector(`[data-action="install-toggle"][aria-controls]`);if(a){a.setAttribute(`aria-expanded`,String(n)),a.classList.toggle(`is-open`,n);let e=a.querySelector(`.material-symbols-outlined`);e&&(e.textContent=n?`expand_less`:`expand_more`)}}function Mp(){km||(km=!0,document.addEventListener(`click`,e=>{e.target.closest?.(`.mag-more-wrap`)||Np()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&Np()}))}function Np(e){document.querySelectorAll(`.mag-menu`).forEach(t=>{if(t===e)return;t.hidden=!0;let n=t.parentElement?.querySelector(`[data-action="menu"]`);n&&n.setAttribute(`aria-expanded`,`false`)})}function Pp(e){let t=document.querySelector(`.mag-card[data-guid="${CSS.escape(e.guid)}"]`);if(!t)return;let n=t.querySelector(`.mag-install-slot`);n&&(n.innerHTML=dp(e));let r=Op(e),i=t.querySelector(`.mag-cell--status`);i&&(i.innerHTML=kp(e)),(r===`quiet`||r===`seen`)&&B.detailOpen[e.guid]===void 0&&jp(e.guid,!0)}function Fp(){return k()?da({section:`magnets`,title:`Your Magnets`,description:`Pick a client to view and manage their magnets.`}):(cp(),`
    <div class="page-shell" data-section="magnets">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Your Magnets</h1>
          <p class="page-description">Conversational lead-capture widgets you embed on your site.</p>
        </div>
        <div class="mag-header-actions" style="display:flex;gap:10px;">
          <button class="btn btn-secondary" id="mag-template-btn" type="button" style="display:none">
            <span class="material-symbols-outlined" aria-hidden="true">auto_awesome</span>
            Template
          </button>
          <button class="btn btn-primary" id="mag-new-btn" type="button" style="display:none">
            <span class="material-symbols-outlined" aria-hidden="true">add</span>
            New magnet
          </button>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="mag-body">
          ${lp(`hourglass_empty`,`Loading magnets…`)}
        </div>
      </div>
    </div>`)}async function Ip(){if(k()){let e=jf();if(e){let t=document.querySelector(`.page-shell .page-header-text .page-description`);t&&(t.textContent=`Template picked: ${e.name}. Choose the client to build it for.`)}let t=e=>Number(e||0).toLocaleString();return pa(U(),[{h:`Magnets`,td:e=>`${t(e.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${t(e.magnets.total)}</span>`},{h:`Leads · wk`,td:e=>t(e.leads.this_week)},{h:`Leads · total`,td:e=>t(e.leads.total)}],{emptyMsg:`No client orgs yet. Create one under Clients, then provision its magnets here.`})}Cm=null,wm=null,Tm=null,Em=null,document.getElementById(`mag-new-btn`)?.addEventListener(`click`,Wp),document.getElementById(`mag-template-btn`)?.addEventListener(`click`,Kp),document.getElementById(`mag-body`)?.addEventListener(`click`,qp),Mp(),await Rp();let e=Af();e&&B.canProvision&&Gp(e)}function Lp(e){e&&(e.innerHTML=`<div class="mag-grid">
    <div class="mag-head" aria-hidden="true"><span>Magnet</span><span>Status</span><span>Last 30 days</span><span></span></div>
    ${B.magnets.map(Ap).join(``)}</div>`,E(e.querySelector(`.mag-grid`),{rowSelector:`.mag-card`,noun:`magnets`}))}async function Rp(){let e=document.getElementById(`mag-body`);if(!e)return;try{let[e,t]=await Promise.all([fetch(`${U()}/m5t/v5/magnets`),fetch(`${U()}/m5t/v5/magnets/stats`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Failed to load`);B.magnets=n.magnets||[],B.owners=n.owners||[],B.canProvision=!!n.canProvision,B.canManage=!!n.canManage,B.primaryOrgGuid=n.primaryOrgGuid||null;let r=t?await t.json().catch(()=>({})):{};B.stats=r?.stats||{}}catch{e.innerHTML=lp(`error`,`Could not load your magnets. Please try again.`);return}let t=document.getElementById(`mag-new-btn`);t&&(t.style.display=B.canProvision?``:`none`);let n=document.getElementById(`mag-template-btn`);if(n&&(n.style.display=B.canProvision?``:`none`),!B.magnets.length){e.innerHTML=lp(`widgets`,B.canProvision?`No magnets yet. Click “New magnet” to create your first.`:`No magnets yet.`);return}Lp(e),fp(),yp()}async function zp(e){let t={"Content-Type":`application/json`,"Idempotency-Key":crypto.randomUUID()},n={status:`DRAFT`};e&&(n.owner_guid=e);let r=await fetch(`${U()}/m5t/v5/magnets`,{method:`POST`,headers:t,body:JSON.stringify(n)}),i={};try{i=await r.json()}catch{}if(!r.ok||!i.ok)throw Error(i.message||`Could not start a new magnet (${r.status})`);return i.magnet}async function Bp(e,t){let n=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:t.name,...t.appearance,steps:t.steps})}),r={};try{r=await n.json()}catch{}if(!n.ok||!r.ok)throw Error(r.message||`Could not apply the ${t.name} template (${n.status})`)}async function Vp(e,t){let n=document.getElementById(`mag-new-btn`),r=document.getElementById(`mag-template-btn`);n&&(n.disabled=!0),r&&(r.disabled=!0);let i=null;try{let n=await zp(e);i=n.guid,t?(await Bp(n.guid,t),await Rp(),n=B.magnets.find(e=>e.guid===n.guid)||n):(B.magnets=[n,...B.magnets],Lp(document.getElementById(`mag-body`))),um(n,void 0,{freshDraft:!0})}catch(e){i&&fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(i)}`,{method:`DELETE`}).catch(()=>{}),H(e.message||`Could not start a new magnet`,`danger`)}finally{n&&(n.disabled=!1),r&&(r.disabled=!1)}}function Hp(e){let t=document.createElement(`div`);t.className=`mag-modal-scrim`,t.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="Choose client" style="max-width:420px">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${e?`New magnet from “${V(e.name)}”`:`New magnet`}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body" style="padding:20px">
        <label class="mag-modal__label" for="mag-owner-pick">Client / workspace</label>
        <select class="mag-modal__select" id="mag-owner-pick">
          ${B.owners.map(e=>`<option value="${V(e.guid)}"${e.guid===B.primaryOrgGuid?` selected`:``}>${V(e.name||e.guid)}</option>`).join(``)}
        </select>
        <p class="mag-modal__hint">Which client is this magnet for? You can't change this later.</p>
      </div>
      <div class="mag-modal__foot">
        <div class="mag-modal__foot-btns">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="continue">Continue</button>
        </div>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`open`),t.querySelector(`.mag-modal`).classList.add(`open`)});let n=()=>{t.classList.remove(`open`),setTimeout(()=>t.remove(),180),document.removeEventListener(`keydown`,r)};function r(e){e.key===`Escape`&&(e.preventDefault(),n())}document.addEventListener(`keydown`,r),t.querySelector(`.mag-modal__close`).addEventListener(`click`,n),t.querySelector(`[data-x="cancel"]`).addEventListener(`click`,n),t.querySelector(`[data-x="continue"]`).addEventListener(`click`,()=>{let r=t.querySelector(`#mag-owner-pick`).value;n(),Vp(r,e)})}function Up(){return B.owners.length===1?B.owners[0].guid:null}function Wp(){if(B.owners.length>1){Hp();return}Vp(Up())}function Gp(e){if(B.owners.length>1){Hp(e);return}Vp(Up(),e)}function Kp(){Nf(Gp)}function qp(e){let t=e.target.closest(`[data-action]`);if(!t){if(Np(),!e.target.closest(`a`)){let t=e.target.closest(`.mag-line`)?.closest(`.mag-card`);t?.dataset.guid&&jp(t.dataset.guid)}return}let n=t.dataset.guid,r=B.magnets.find(e=>e.guid===n),i=t.dataset.action;if(i===`menu`){let e=t.parentElement?.querySelector(`.mag-menu`);if(!e)return;let n=e.hidden;Np(e),e.hidden=!n,t.setAttribute(`aria-expanded`,String(n));return}if(Np(),i===`install-toggle`)return jp(n);if(i===`copy`)return Jp(n);if(r){if(i===`preview`)return uf(()=>rf(r));if(i===`funnel`)return Xp(r);if(i===`edit`)return um(r);if(i===`flow`)return um(r,`flow`);if(i===`allow-domain`)return Zp(r,t.dataset.domain);if(i===`dismiss-domain`)return Qp(r,t.dataset.domain);if(i===`restore-domain`)return $p(r,t.dataset.domain);if(i===`pair-start`)return wp(r);if(i===`copy-code`)return Tp(r);if(i===`revoke-connection`)return Dp(r,t.dataset.conn);if(i===`clear-connection`)return Ep(r,t.dataset.conn,t.dataset.label);if(i===`toggle`)return tm(r);if(i===`delete`)return nm(r)}}async function Jp(e){try{await navigator.clipboard.writeText(mm(e)),H(`Embed snippet copied`,`success`)}catch{H(`Copy failed`,`danger`)}}function Yp(e){let t=Number(e?.total_steps)||0,n={};if((Array.isArray(e?.funnel)?e.funnel:[]).forEach(e=>{n[e.position]=Number(e.reached)||0}),!t||!Object.keys(n).length)return`<p class="mag-modal__hint" style="margin:0">No step activity yet in this window. As visitors answer questions, drop-off by step will appear here.</p>`;let r=Math.max(1,n[1]||0),i=[];for(let e=1;e<=t;e++){let a=n[e]||0,o=Math.min(100,Math.round(a/r*100));i.push(`
      <div class="mag-funnel__row">
        <div class="mag-funnel__meta">
          <span class="mag-funnel__label">Step ${e} of ${t}</span>
          <span class="mag-funnel__val">${a.toLocaleString()} <span class="mag-funnel__pct">${o}%</span></span>
        </div>
        <div class="mag-funnel__track"><div class="mag-funnel__bar${e===1?``:` mag-funnel__bar--drop`}" style="width:${o}%"></div></div>
      </div>`)}return`<div class="mag-funnel">${i.join(``)}</div>`}async function Xp(e){let t=document.createElement(`div`);t.className=`mag-modal-scrim`,t.innerHTML=`
    <div class="mag-modal mag-funnel-modal" role="dialog" aria-modal="true" aria-label="Step funnel for ${V(e.name)}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Step funnel — ${V(e.name)}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body" style="padding:20px">
        <p class="mag-modal__hint" style="margin-top:0">How many visitors reached each question, last 30 days. A big drop between two steps is where people bail.</p>
        <div id="mag-funnel-body">${lp(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`open`),t.querySelector(`.mag-modal`).classList.add(`open`)});let n=()=>{t.classList.remove(`open`),setTimeout(()=>t.remove(),180),document.removeEventListener(`keydown`,r)};function r(e){e.key===`Escape`&&(e.preventDefault(),n())}document.addEventListener(`keydown`,r),t.querySelector(`.mag-modal__close`).addEventListener(`click`,n),t.addEventListener(`click`,e=>{e.target===t&&n()});let i=t.querySelector(`#mag-funnel-body`);try{let t=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/step-funnel`),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.message||`Failed (${t.status})`);i.innerHTML=Yp(n)}catch{i.innerHTML=`<p class="mag-modal__hint" style="margin:0">Could not load the funnel. Please try again.</p>`}}async function Zp(e,t){let n=String(t||``).trim().toLowerCase();if(!n||!window.confirm(`Allow ${n} to load this magnet?\n\nOnly do this for a site you recognise — anyone can put this magnet's embed code on a page.`))return;let r=[...new Set([...(e.domains||[]).filter(Boolean),n])];try{if(!(await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({domains:r})})).json().catch(()=>({}))).ok)throw Error();H(`${n} allowed`,`success`)}catch{H(`Could not allow that domain`,`danger`);return}try{await Rp()}catch(e){console.warn(`[magnets] refresh after allow-domain failed:`,e)}}async function Qp(e,t){let n=String(t||``).trim().toLowerCase();if(!n)return;let r=n.split(`.`),i=r.length>2?r.slice(-2).join(`.`):null,a=n;i&&window.confirm(`Hide ${n} from this list?\n\nOK — hide every domain under ${i} too (covers preview/staging URLs that change every deploy).\nCancel — hide only ${n}.`)&&(a=i);try{if(!(await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity/dismiss`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({domain:a})})).json().catch(()=>({}))).ok)throw Error();H(`${a} hidden from this list`,`success`)}catch{H(`Could not dismiss that domain`,`danger`);return}await em(e)}async function $p(e,t){let n=String(t||``).trim().toLowerCase();if(n){try{if(!(await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity/restore`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({domain:n})})).json().catch(()=>({}))).ok)throw Error();H(`${n} will show again`,`success`)}catch{H(`Could not restore that domain`,`danger`);return}await em(e)}}async function em(e){try{let t=await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity`)).json().catch(()=>({}));if(!t.ok)return;B.install[e.guid]=t,Pp(e)}catch(e){console.warn(`[magnets] install refresh failed:`,e)}}async function tm(e){if(e.status===`DRAFT`){H(`Open Edit and Save to publish a draft magnet.`,`info`);return}let t=e.status===`ENABLED`?`DISABLED`:`ENABLED`;try{if(!(await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})})).json().catch(()=>({}))).ok)throw Error();H(t===`ENABLED`?`Magnet enabled`:`Magnet disabled`,`success`)}catch{H(`Update failed`,`danger`);return}try{await Rp()}catch(e){console.warn(`[magnets] refresh after status toggle failed:`,e)}}async function nm(e){if(window.confirm(`Delete “${e.name}”? Visitors will no longer see this magnet.`)){try{if(!(await(await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`DELETE`})).json().catch(()=>({}))).ok)throw Error();H(`Magnet deleted`,`success`)}catch{H(`Delete failed`,`danger`);return}try{await Rp()}catch(e){console.warn(`[magnets] refresh after delete failed:`,e)}}}function rm(e){let t=[];e.querySelectorAll(`.mag-cta`).forEach(e=>{if(!e.querySelector(`.mag-cta__on`).checked)return;let n=e.dataset.type,r=e.dataset.kind,i=e.querySelector(`.mag-cta__val`),a=i?i.value.trim():``;if(r===`value`){if(n===`call`&&e.querySelector(`.mag-cta__callsrc`)?.value===`callrail`){let r=e.querySelector(`.mag-cta__crtracker`),i=r?.value||``,a=r?.selectedOptions?.[0];i&&t.push({type:n,value:i,config:{source:`callrail`,...a?.dataset?.trackerId?{tracker_id:a.dataset.trackerId}:{},...a?.dataset?.trackerName?{tracker_name:a.dataset.trackerName}:{}}})}else a&&t.push({type:n,value:a})}else if(r===`book`){let r=e.querySelector(`.mag-cta__booksrc`)?.value;if(r===`calendly`){let r=e.querySelector(`.mag-cta__calevent`),i=r?.value||``,a=(r?.selectedOptions?.[0]?.textContent||``).trim();t.push({type:n,config:{source:`calendly`,...i?{calendly_url:i}:{},...i&&a?{event_name:a}:{}}})}else if(r===`calcom`||r===`ms_bookings`){let i=e.querySelector(r===`calcom`?`.mag-cta__ccevent`:`.mag-cta__mbevent`),a=i?.value||``,o=(i?.selectedOptions?.[0]?.textContent||``).trim(),s={source:r,...a&&o?{event_name:o}:{}};if(r===`ms_bookings`){let t=i?.selectedOptions?.[0]?.dataset?.id||``,n=e.querySelector(`.mag-cta__mbservice`),r=n?.value||``;if(t&&r){s.business_id=t,s.service_id=r;let e=(n.selectedOptions?.[0]?.textContent||``).replace(/ \(.*$/,``).trim();e&&(s.event_name=e)}}t.push({type:n,...a?{value:a}:{},config:s})}else{let e={type:n};a&&(/^https?:\/\//i.test(a)?e.value=a:e.config={meeting_label:a}),t.push(e)}}else if(r===`support`){let r=(e.querySelector(`.mag-cta__opts`)?.value||``).split(`
`).map(e=>e.trim()).filter(Boolean).map(e=>({label:e})),i={type:n};r.length&&(i.config={options:r}),t.push(i)}else t.push({type:n})});let n={display_mode:e.querySelector(`input[name="mag-display"]:checked`)?.value||`chat`,trigger:Jf(e),theme_mode:e.querySelector(`input[name="mag-theme"]:checked`)?.value||`auto`,title:e.querySelector(`#mag-f-title`).value.trim(),theme_color:e.querySelector(`#mag-f-color`).value,subtitle:e.querySelector(`#mag-f-subtitle`).value,launcher_label:e.querySelector(`#mag-f-launcher`).value.trim(),logo_url:e.querySelector(`#mag-f-logo`).value.trim(),logo_fit:e.querySelector(`#mag-f-logo-fit`)?.value===`contain`?`contain`:`cover`,summary:e.querySelector(`#mag-f-summary`).checked,summary_heading:e.querySelector(`#mag-f-summary-heading`).value.trim(),home:e.querySelector(`#mag-f-home`).checked,welcome:e.querySelector(`#mag-f-welcome`).value,ab:cm(e),actions:t,font:e.querySelector(`#mag-f-font`).value.trim(),theme_vars:om(e),...(()=>{let t=mf(e.querySelector(`input[name="mag-size-preset"]:checked`)?.value||`standard`);return t?{inline_width:t.w,inline_height:t.h}:{inline_width:e.querySelector(`#mag-f-inline-w`).value.trim(),inline_height:e.querySelector(`#mag-f-inline-h`).value.trim()}})(),hide_launcher:e.querySelector(`#mag-f-hide-launcher`).checked,input_placeholder:e.querySelector(`#mag-f-input-ph`).value,summary_confirm_label:e.querySelector(`#mag-f-summary-confirm`).value.trim(),success_title:e.querySelector(`#mag-f-success-title`).value.trim(),success_text:e.querySelector(`#mag-f-success-text`).value,success_cta:sm(e)};return n.trigger===void 0&&delete n.trigger,n}function im(e){return new Promise((t,n)=>{let r=new Image,i=new FileReader;i.onerror=()=>n(Error(`Could not read that file.`)),i.onload=()=>{r.onerror=()=>n(Error(`That file isn’t a readable image.`)),r.onload=()=>{let e=Math.min(1,Am/Math.max(r.naturalWidth,r.naturalHeight)),n=Math.max(1,Math.round(r.naturalWidth*e)),i=Math.max(1,Math.round(r.naturalHeight*e)),a=document.createElement(`canvas`);a.width=n,a.height=i,a.getContext(`2d`).drawImage(r,0,0,n,i),t(a.toDataURL(`image/png`))},r.src=i.result},i.readAsDataURL(e)})}function am(e,t){let n=e.querySelector(`#mag-logo-drop`);if(!n)return;let r=e.querySelector(`#mag-f-logo-file`),i=e.querySelector(`#mag-logo-browse`),a=e.querySelector(`#mag-logo-remove`),o=e.querySelector(`#mag-logo-preview`),s=e.querySelector(`#mag-logo-status`),c=e.querySelector(`#mag-f-logo`),l=(e,t)=>{s.textContent=e,s.style.color=t?`var(--color-danger, #DD4124)`:``},u=e=>{o.innerHTML=e?`<img src="${V(e)}" alt="">`:`<span class="material-symbols-outlined" aria-hidden="true">image</span>`,a.hidden=!e},d=e=>{c.value=e,c.dispatchEvent(new Event(`input`,{bubbles:!0})),c.dispatchEvent(new Event(`change`,{bubbles:!0}))};async function f(e){if(!jm.has(e.type)){l(`PNG, JPEG, GIF, or WEBP only.`,!0);return}if(e.size>Mm){l(`That file is too large (8MB max before resizing).`,!0);return}l(`Uploading…`,!1);try{let n=await im(e),r=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}/logo`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({image:n})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok)throw Error(i.error||`Upload failed (${r.status})`);let a=`${U()}/m5t/v5/magnet/${encodeURIComponent(t.guid)}/logo?v=${Date.now()}`;d(a),u(a),l(`Logo updated.`,!1)}catch(e){l(e.message||`Upload failed.`,!0)}}r.addEventListener(`change`,()=>{r.files[0]&&f(r.files[0]),r.value=``}),n.addEventListener(`click`,e=>{e.target===a||a.contains(e.target)||e.target!==i&&r.click()}),i.addEventListener(`click`,()=>r.click()),[`dragenter`,`dragover`].forEach(e=>n.addEventListener(e,e=>{e.preventDefault(),n.classList.add(`is-dragover`)})),[`dragleave`,`drop`].forEach(e=>n.addEventListener(e,e=>{e.preventDefault(),n.classList.remove(`is-dragover`)})),n.addEventListener(`drop`,e=>{let t=e.dataTransfer?.files?.[0];t&&f(t)}),a.addEventListener(`click`,async e=>{e.stopPropagation(),l(`Removing…`,!1);try{let e=await fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}/logo`,{method:`DELETE`}),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`Remove failed (${e.status})`);d(``),u(``),l(`Logo removed.`,!1)}catch(e){l(e.message||`Remove failed.`,!0)}})}function om(e){return e.querySelector(`#mag-f-surface-on`)?.checked?{surface:e.querySelector(`#mag-f-sv-surface`).value,surface_2:e.querySelector(`#mag-f-sv-surface2`).value,border:e.querySelector(`#mag-f-sv-border`).value,text:e.querySelector(`#mag-f-sv-text`).value,text_sub:e.querySelector(`#mag-f-sv-textsub`).value}:{}}function sm(e){let t=e.querySelector(`#mag-f-success-cta-label`).value.trim(),n=e.querySelector(`#mag-f-success-cta-url`).value.trim();return t&&n?{label:t,url:n}:{}}function cm(e){let t={},n=e.querySelector(`#mag-f-ab-title`)?.value.trim(),r=e.querySelector(`#mag-f-ab-welcome`)?.value.trim(),i=e.querySelector(`#mag-f-ab-color`)?.value||``,a=e.querySelector(`#mag-f-color`)?.value||``;return n&&(t.title=n),r&&(t.welcome=r),i&&i.toLowerCase()!==a.toLowerCase()&&(t.theme_color=i),{enabled:!!e.querySelector(`#mag-f-ab`)?.checked,split:Number(e.querySelector(`#mag-f-ab-split`)?.value)||50,b:t}}function lm(e){let t=String(e||``),n=new Set(Nm.flatMap(e=>e.opts.map(([e])=>e))),r=e=>e===t?` selected`:``,i=`<option value=""${t===``?` selected`:``}>System default</option>`;t&&!n.has(t)&&(i+=`<option value="${V(t)}" selected>Current: ${V(t)}</option>`);for(let e of Nm)i+=`<optgroup label="${V(e.label)}">`+e.opts.map(([e,t])=>`<option value="${V(e)}"${r(e)}>${V(t)}</option>`).join(``)+`</optgroup>`;return i}function um(e,t,n={}){let{freshDraft:r=!1}=n,i=!!e,a=i?null:crypto.randomUUID(),o=!i&&B.owners.length>1,s=e?.display_mode||`chat`,c=e?.theme_mode||`auto`,l={};(e?.actions||[]).forEach(e=>{e&&e.type&&(l[e.type]=e)});let u=!i||!!e.home,d=i?e.subtitle==null?``:e.subtitle:`Typically replies in a few minutes`,f=e?.theme_vars&&typeof e.theme_vars==`object`?e.theme_vars:{},m=Object.keys(f).length>0,h=(e,t)=>V(/^#[0-9a-fA-F]{6}$/.test(f[e]||``)?f[e]:t),g=document.createElement(`div`);g.className=`mag-modal-scrim`,g.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="${i?`Edit magnet`:`New magnet`}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${i?`Edit magnet`:`New magnet`}</span>
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
        <input class="mag-modal__input" id="mag-f-name" type="text" placeholder="e.g. Homepage quote magnet" value="${V(e?.name||``)}">

        ${o?`
        <label class="mag-modal__label" for="mag-f-owner">Client / workspace</label>
        <select class="mag-modal__select" id="mag-f-owner">
          ${B.owners.map(e=>`<option value="${V(e.guid)}"${e.guid===B.primaryOrgGuid?` selected`:``}>${V(e.name||e.guid)}</option>`).join(``)}
        </select>`:``}

        <label class="mag-modal__label">Display mode</label>
        ${op(`mag-display`,s,vm)}
        <p class="mag-modal__hint">Inline renders where you place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> on your page. Chat, Slide &amp; Modal float over it, no markup needed.</p>

        <label class="mag-modal__label" for="mag-f-trigger">Auto-open</label>
        <select class="mag-modal__select" id="mag-f-trigger">
          ${bm.map(t=>`<option value="${t.value}"${Gf(e)===t.value?` selected`:``}>${V(t.label)}</option>`).join(``)}
          <option value="__per_device"${Gf(e)===`__per_device`?` selected`:``}>Per device&hellip;</option>
        </select>
        <div class="mag-perdev" id="mag-f-perdev"${Gf(e)===`__per_device`?``:` hidden`}>
          <div class="mag-perdev__row">
            <label class="mag-modal__label" for="mag-f-trigger-desktop">Desktop</label>
            <select class="mag-modal__select" id="mag-f-trigger-desktop">
              ${bm.map(t=>`<option value="${t.value}"${Kf(e,`desktop`)===t.value?` selected`:``}>${V(t.label)}</option>`).join(``)}
            </select>
          </div>
          <div class="mag-perdev__row">
            <label class="mag-modal__label" for="mag-f-trigger-mobile">Mobile</label>
            <select class="mag-modal__select" id="mag-f-trigger-mobile">
              ${bm.map(t=>`<option value="${t.value}"${Kf(e,`mobile`)===t.value?` selected`:``}>${V(t.label)}</option>`).join(``)}
            </select>
          </div>
          <p class="mag-modal__hint">Mobile means a viewport under 480px — the width at which the panel goes near-fullscreen, which is why an auto-open that suits desktop can be too much on a phone.</p>
        </div>
        <p class="mag-modal__hint">When the panel opens on its own: once per visit, and never after the visitor has already opened it. Doesn't apply to Inline, which is always visible.</p>

        <label class="mag-modal__label" for="mag-f-domains">Allowed domain(s)</label>
        <input class="mag-modal__input" id="mag-f-domains" type="text" placeholder="example.com, www.example.com" value="${V((e?.domains||[]).join(`, `))}">
        <p class="mag-modal__hint">Comma-separated. The magnet only loads on these domains.</p>

        ${e?`
        <label class="mag-modal__label">Lead alerts</label>
        <p class="mag-modal__hint" style="margin-top:0">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px;color:${(e.notify_emails||[]).length?`var(--color-success, #009473)`:`var(--color-text-subtle, #6C7C9A)`}">${(e.notify_emails||[]).length?`notifications_active`:`notifications_off`}</span>
          ${(e.notify_emails||[]).length?`On for ${(e.notify_emails||[]).length} email${(e.notify_emails||[]).length===1?``:`s`}.`:`Off.`}
          <a href="#/settings/notifications" data-close-modal>Manage in Settings</a>
        </p>`:``}
          </section>

          <section class="mag-tab" data-tab="appearance" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Appearance</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-title">Header title</label>
              <input class="mag-modal__input" id="mag-f-title" type="text" placeholder="Chat with us" value="${V(e?.title||``)}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-color">Color</label>
              <input class="mag-modal__color" id="mag-f-color" type="color" value="${V(/^#[0-9a-fA-F]{6}$/.test(e?.theme_color||``)?e.theme_color:`#0072BA`)}">
            </div>
          </div>

          <label class="mag-modal__label" for="mag-f-subtitle">Subtitle</label>
          <input class="mag-modal__input" id="mag-f-subtitle" type="text" placeholder="Typically replies in a few minutes" value="${V(d)}">
          <p class="mag-modal__hint">Small line under the title. Leave blank to hide it.</p>

          <label class="mag-modal__label" for="mag-f-launcher">Launcher label</label>
          <input class="mag-modal__input" id="mag-f-launcher" type="text" placeholder="Defaults to the title" value="${V(e?.launcher_label||``)}">
          <p class="mag-modal__hint">Text on the floating button (Chat / Slide / Modal only).</p>

          <label class="mag-modal__label">Theme</label>
          ${op(`mag-theme`,c,ym)}

          <label class="mag-modal__label">Logo</label>
          ${i?`
          <div class="mag-logo-drop" id="mag-logo-drop">
            <input type="file" id="mag-f-logo-file" accept="image/png,image/jpeg,image/gif,image/webp" hidden>
            <div class="mag-logo-drop__preview" id="mag-logo-preview">${e?.logo_url?`<img src="${V(e.logo_url)}" alt="">`:`<span class="material-symbols-outlined" aria-hidden="true">image</span>`}</div>
            <div class="mag-logo-drop__body">
              <p class="mag-logo-drop__t">Drag an image here, or <button type="button" class="mag-logo-drop__browse" id="mag-logo-browse">browse</button></p>
              <p class="mag-modal__hint" style="margin:2px 0 0">PNG, JPEG, GIF, or WEBP — resized automatically.</p>
            </div>
            <button type="button" class="mag-logo-drop__remove" id="mag-logo-remove"${e?.logo_url?``:` hidden`} title="Remove logo"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
          </div>
          <p class="mag-modal__hint" id="mag-logo-status" role="status" style="min-height:1em"></p>
          `:`<p class="mag-modal__hint" style="margin-top:0">Save this magnet first, then reopen it here to upload a logo.</p>`}

          <label class="mag-modal__label" for="mag-f-logo">Or paste a logo URL</label>
          <input class="mag-modal__input" id="mag-f-logo" type="text" placeholder="https://…/logo.png" value="${V(e?.logo_url||``)}">
          <p class="mag-modal__hint">Shown in the header and on bot avatars. Falls back to a color mark.</p>

          <label class="mag-modal__label" for="mag-f-logo-fit">Logo fit</label>
          <select class="mag-modal__select" id="mag-f-logo-fit">
            <option value="cover"${(e?.logo_fit||`cover`)===`cover`?` selected`:``}>Cover: fills the circle (crops a wide logo)</option>
            <option value="contain"${e?.logo_fit===`contain`?` selected`:``}>Contain: shows the whole logo</option>
          </select>
          <p class="mag-modal__hint">Use “Contain” for a wide wordmark so it isn’t cropped.</p>

          <label class="mag-modal__label" for="mag-f-font">Font family</label>
          <select class="mag-modal__select" id="mag-f-font">${lm(e?.font||``)}</select>
          <p class="mag-modal__hint">Web fonts load automatically. System fonts always work. Leave on System default to match nothing in particular.</p>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-surface-on"${m?` checked`:``}>
            <label for="mag-f-surface-on">Custom surface colors (match a branded dark or light page)</label>
          </div>
          <div id="mag-f-surface" class="mag-surface-grid"${m?``:` hidden`}>
            <div><label class="mag-modal__label" for="mag-f-sv-surface">Background</label><input class="mag-modal__color" id="mag-f-sv-surface" type="color" value="${h(`surface`,`#141414`)}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-surface2">Panel / raised</label><input class="mag-modal__color" id="mag-f-sv-surface2" type="color" value="${h(`surface_2`,`#1e1e1e`)}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-border">Border</label><input class="mag-modal__color" id="mag-f-sv-border" type="color" value="${h(`border`,`#2a2a2a`)}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-text">Text</label><input class="mag-modal__color" id="mag-f-sv-text" type="color" value="${h(`text`,`#ffffff`)}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-textsub">Muted text</label><input class="mag-modal__color" id="mag-f-sv-textsub" type="color" value="${h(`text_sub`,`#a8a8a8`)}"></div>
          </div>
          <p class="mag-modal__hint">Off = the built-in light/dark surfaces (set by Theme above). On = these exact colors, so the card sits on your brand instead of a generic panel.</p>

          <div id="mag-f-inline-size"${s===`inline`?``:` hidden`}>
            <label class="mag-modal__label">Inline size</label>
            <div class="mag-size-grid" role="radiogroup" aria-label="Inline size">
              ${(()=>{let t=pf(e?.inline_width,e?.inline_height),n=(e,n,r,i,a)=>`
                  <label class="mag-size-card${t===e?` is-on`:``}">
                    <input type="radio" name="mag-size-preset" value="${e}"${t===e?` checked`:``}>
                    <span class="mag-size-thumb" aria-hidden="true"><i style="width:${i}px;height:${a}px"></i></span>
                    <span class="mag-size-name">${n}</span>
                    <span class="mag-size-hint">${r}</span>
                  </label>`;return gf.map(e=>n(e.id,e.name,e.hint,_f[e.id].w,_f[e.id].h)).join(``)+n(`custom`,`Custom`,`Your own CSS sizes`,44,32)})()}
            </div>
            <p class="mag-modal__hint">The card fills the space you give it on your page, up to its max width, and keeps its height on every step. Where you place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> decides the space.</p>
            <div id="mag-f-inline-custom"${pf(e?.inline_width,e?.inline_height)===`custom`?``:` hidden`}>
              <div class="mag-modal__row">
                <div>
                  <label class="mag-modal__label" for="mag-f-inline-w">Max width</label>
                  <input class="mag-modal__input" id="mag-f-inline-w" type="text" placeholder="640px" value="${V(e?.inline_width||``)}">
                </div>
                <div>
                  <label class="mag-modal__label" for="mag-f-inline-h">Height</label>
                  <input class="mag-modal__input" id="mag-f-inline-h" type="text" placeholder="min(520px, 80vh)" value="${V(e?.inline_height||``)}">
                </div>
              </div>
              <p class="mag-modal__hint">A CSS length (<code>760px</code>, <code>80vh</code>) or <code>min()/max()/clamp()</code>. Blank = default size. Height can't be a percentage.</p>
              <p class="mag-size-err" id="mag-f-inline-err"></p>
            </div>
          </div>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-hide-launcher"${e?.hide_launcher?` checked`:``}>
            <label for="mag-f-hide-launcher">Hide the floating button (opens only from your own button or link)</label>
          </div>
          <p class="mag-modal__hint">For Chat / Slide / Modal: no bubble appears; you open it by calling <code>MachFiveMagnet.open()</code> from your page. Pair with Auto-open = “Manual”.</p>

          <label class="mag-modal__label" for="mag-f-input-ph">Input placeholder</label>
          <input class="mag-modal__input" id="mag-f-input-ph" type="text" placeholder="Type your answer…" value="${V(e?.input_placeholder||``)}">
        </div>
          </section>

          <section class="mag-tab" data-tab="welcome" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Welcome screen</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-home"${u?` checked`:``}>
            <label for="mag-f-home">Open on a welcome message + CTA bar (hub)</label>
          </div>
          <label class="mag-modal__label" for="mag-f-welcome">Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-welcome" rows="2" placeholder="Welcome! Pick an option below and we’ll take it from there.">${V(e?.welcome||``)}</textarea>
          <p class="mag-modal__hint">Shown first when the magnet opens. Visitors choose a CTA below instead of a blank chat.</p>
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Call-to-action bar</p>
          <p class="mag-modal__hint" style="margin-top:0">The persistent buttons a visitor taps to pick a channel. Book opens an in-panel scheduler, or your connected scheduling tool (Calendly, Cal.com, Microsoft Bookings). Call can use a CallRail tracking number when connected, so calls attribute to this magnet. Chat runs your flow, Support is a multi-select intake. Leave unchecked to hide.</p>
          ${Sm.map(e=>sp(e,l[e])).join(``)}
        </div>
          </section>

          <section class="mag-tab" data-tab="flow" hidden>
            <div id="mag-flow-panel"></div>
          </section>

          <section class="mag-tab" data-tab="ab" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">A/B experiment</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-ab"${e?.ab?.enabled?` checked`:``}>
            <label for="mag-f-ab">Run an A/B test on this magnet</label>
          </div>
          <p class="mag-modal__hint">Variant A is what you configured above. Fill in what variant B changes. Visitors are split between them and results appear on <b>A/B Testing</b>.</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-ab-title">B: Header title</label>
              <input class="mag-modal__input" id="mag-f-ab-title" type="text" placeholder="(unchanged)" value="${V(e?.ab?.b?.mag_title||``)}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-ab-color">B: Color</label>
              <input class="mag-modal__color" id="mag-f-ab-color" type="color" value="${V(/^#[0-9a-fA-F]{6}$/.test(e?.ab?.b?.mag_theme_color||``)?e.ab.b.mag_theme_color:e?.theme_color||`#0072BA`)}">
            </div>
          </div>
          <label class="mag-modal__label" for="mag-f-ab-welcome">B: Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-ab-welcome" rows="2" placeholder="(unchanged)">${V(e?.ab?.b?.mag_welcome||``)}</textarea>
          <label class="mag-modal__label" for="mag-f-ab-split">Traffic to variant B</label>
          <select class="mag-modal__select" id="mag-f-ab-split">
            ${[25,50,75].map(t=>`<option value="${t}"${(e?.ab?.split||50)===t?` selected`:``}>${t}% see B / ${100-t}% see A</option>`).join(``)}
          </select>
        </div>
          </section>

          <section class="mag-tab" data-tab="finish" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Summary card</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-summary"${e?.summary?` checked`:``}>
            <label for="mag-f-summary">Show a recap card when the visitor finishes</label>
          </div>
          <label class="mag-modal__label" for="mag-f-summary-heading">Recap heading</label>
          <input class="mag-modal__input" id="mag-f-summary-heading" type="text" placeholder="Here’s what we’ve got" value="${V(e?.summary_heading||``)}">
          <label class="mag-modal__label" for="mag-f-summary-confirm">Confirm button label</label>
          <input class="mag-modal__input" id="mag-f-summary-confirm" type="text" placeholder="Confirm &amp; send" value="${V(e?.summary_confirm_label||``)}">
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">After submit</p>
          <p class="mag-modal__hint" style="margin-top:0">The card shown once the visitor finishes. Blank = the default “You’re all set!” message.</p>
          <label class="mag-modal__label" for="mag-f-success-title">Success title</label>
          <input class="mag-modal__input" id="mag-f-success-title" type="text" placeholder="You’re all set!" value="${V(e?.success_title||``)}">
          <label class="mag-modal__label" for="mag-f-success-text">Success message</label>
          <textarea class="mag-modal__input" id="mag-f-success-text" rows="2" placeholder="Thanks! We’ve got your details and someone will be in touch shortly.">${V(e?.success_text||``)}</textarea>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-label">Button label (optional)</label>
              <input class="mag-modal__input" id="mag-f-success-cta-label" type="text" placeholder="e.g. Visit our site" value="${V(e?.success_cta?.label||``)}">
            </div>
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-url">Button link</label>
              <input class="mag-modal__input" id="mag-f-success-cta-url" type="text" placeholder="https://…" value="${V(e?.success_cta?.url||``)}">
            </div>
          </div>
          <p class="mag-modal__hint">A deep link shown after submit (e.g. “Play now”). Needs both a label and a URL.</p>
        </div>
          </section>
        </div>
        <aside class="mag-modal__preview" aria-label="Live preview"><div id="mag-preview-pane" style="height:100%"></div></aside>
      </div>
      <div class="mag-modal__foot">
        ${i?`<button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="preview"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:18px;vertical-align:-4px;margin-right:4px">visibility</span>Preview</button>`:``}
        <span class="mag-modal__dirty" id="mag-f-dirty" hidden><span class="material-symbols-outlined" aria-hidden="true">fiber_manual_record</span>Unsaved changes</span>
        <p class="mag-modal__error" id="mag-f-error"></p>
        <div class="mag-modal__foot-btns">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="save">${i?`Save`:`Create magnet`}</button>
        </div>
      </div>
    </div>`,document.body.appendChild(g),requestAnimationFrame(()=>{g.classList.add(`open`),g.querySelector(`.mag-modal`).classList.add(`open`)});let _=[...g.querySelectorAll(`.mag-modal__navitem`)],v=[...g.querySelectorAll(`.mag-tab`)],y=e=>{_.forEach(t=>t.classList.toggle(`is-active`,t.dataset.tab===e)),v.forEach(t=>{t.hidden=t.dataset.tab!==e}),g.querySelector(`.mag-modal__body`).scrollTop=0};_.forEach(e=>e.addEventListener(`click`,()=>y(e.dataset.tab)));let ee=()=>rf({...e,...rm(g),...i?{steps:Cd()}:{}}),b=g.querySelector(`#mag-preview-pane`),te=()=>window.matchMedia(`(min-width: 1200px)`).matches,ne=null,re=()=>{if(!ne&&te())try{ne=lf(b,ee)}catch{}},ie=null,ae=()=>{te()&&(re(),ne&&(clearTimeout(ie),ie=setTimeout(()=>{try{ne.refresh()}catch{}},300)))},oe=window.matchMedia(`(min-width: 1200px)`),se=()=>{te()&&(re(),ae())};oe.addEventListener(`change`,se);let ce=!1,le=!1,ue=g.querySelector(`#mag-f-dirty`),de=e=>{ce=e,ue&&(ue.hidden=!e)},fe=g.querySelector(`.mag-modal__main`);fe.addEventListener(`input`,()=>de(!0)),fe.addEventListener(`change`,()=>{de(!0),qf(g),ae()}),qf(g),g.querySelector(`#mag-f-color`)?.addEventListener(`input`,()=>{de(!0),ae()});let pe=e=>{ce&&(e.preventDefault(),e.returnValue=``)};window.addEventListener(`beforeunload`,pe);let me=!0,he=dm.default.subscribe(p.ROUTE_NAV_BEFORE,()=>{if(me){if(ce&&!confirm(`Discard your changes to this magnet?`)){window.router?.navigate(`/magnets`);return}ge()}}),ge=()=>{r&&!le&&e&&e.status===`DRAFT`&&(fetch(`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`DELETE`}).catch(()=>{}),B.magnets=B.magnets.filter(t=>t.guid!==e.guid),Lp(document.getElementById(`mag-body`))),me=!1,window.removeEventListener(`beforeunload`,pe),dm.default.unsubscribe(he),clearTimeout(ie),oe.removeEventListener(`change`,se),ne&&ne.destroy&&ne.destroy(),g.classList.remove(`open`),setTimeout(()=>g.remove(),180),document.removeEventListener(`keydown`,ve)},_e=()=>{ce&&!confirm(`Discard your changes to this magnet?`)||ge()};function ve(e){e.key===`Escape`&&(e.preventDefault(),_e())}document.addEventListener(`keydown`,ve),g.querySelector(`.mag-modal__close`).addEventListener(`click`,_e),g.querySelector(`[data-x="cancel"]`).addEventListener(`click`,_e),g.querySelector(`[data-close-modal]`)?.addEventListener(`click`,_e),g.querySelector(`#mag-f-name`).focus();let ye=g.querySelector(`#mag-flow-panel`);i?md(ye,e,()=>{de(!0),ae()}):ye.innerHTML=`<p class="mag-modal__hint" style="margin-top:0">Your new magnet starts with a simple starter conversation. Create it first, then reopen it here to build the flow.</p>`,am(g,e),t&&y(t),re(),g.querySelectorAll(`.mag-cta`).forEach(e=>{let t=e.querySelector(`.mag-cta__on`),n=e.querySelector(`.mag-cta__val`),r=e.querySelector(`.mag-cta__opts`),i=e.querySelectorAll(`.mag-cta__booksrc, .mag-cta__calevent, .mag-cta__callsrc, .mag-cta__crtracker`);t.addEventListener(`change`,()=>{n&&(n.disabled=!t.checked),r&&(r.disabled=!t.checked),i.forEach(e=>{e.disabled=!t.checked}),t.checked&&(n||r)?.focus()}),n&&n.addEventListener(`input`,()=>{n.value.trim()&&!t.checked&&(t.checked=!0,r&&(r.disabled=!1))})}),g.querySelectorAll(`.mag-cta[data-kind="book"]`).forEach(e=>{let t=e.querySelector(`.mag-cta__booksrc`),n=e.querySelector(`.mag-cta__val`),r=e.querySelector(`.mag-cta__calevent`),i=e.querySelector(`.mag-cta__ccevent`),a=e.querySelector(`.mag-cta__mbevent`);if(!t||!r||!i||!a)return;let o=()=>{let o=t.value===`calendly`,s=t.value===`calcom`,c=t.value===`ms_bookings`;n.hidden=o||s||c,r.hidden=!o,i.hidden=!s,a.hidden=!c;let l=e.querySelector(`.mag-cta__mbservice`);l&&(l.hidden=!c),o&&!r.dataset.listed&&(r.dataset.listed=`1`,rp(r)),s&&!i.dataset.listed&&(i.dataset.listed=`1`,$f(i)),c&&!a.dataset.listed&&(a.dataset.listed=`1`,tp(a))};t.addEventListener(`change`,()=>{let t=e.querySelector(`.mag-cta__on`);t.checked||(t.checked=!0,t.dispatchEvent(new Event(`change`))),o()}),o()}),g.querySelectorAll(`.mag-cta[data-type="call"]`).forEach(e=>{let t=e.querySelector(`.mag-cta__callsrc`),n=e.querySelector(`.mag-cta__val`),r=e.querySelector(`.mag-cta__crtracker`);if(!t||!r)return;let i=()=>{let e=t.value===`callrail`;n.hidden=e,r.hidden=!e,e&&!r.dataset.listed&&(r.dataset.listed=`1`,ap(r))};t.addEventListener(`change`,()=>{let t=e.querySelector(`.mag-cta__on`);t.checked||(t.checked=!0,t.dispatchEvent(new Event(`change`))),i()}),i()});let be=g.querySelector(`#mag-f-surface-on`),xe=g.querySelector(`#mag-f-surface`);be.addEventListener(`change`,()=>xe.hidden=!be.checked);let Se=g.querySelector(`#mag-f-inline-size`);g.querySelectorAll(`input[name="mag-size-preset"]`).forEach(e=>e.addEventListener(`change`,()=>{g.querySelectorAll(`.mag-size-card`).forEach(e=>e.classList.toggle(`is-on`,e.querySelector(`input`).checked)),g.querySelector(`#mag-f-inline-custom`).hidden=e.value!==`custom`})),g.querySelectorAll(`input[name="mag-display"]`).forEach(e=>e.addEventListener(`change`,()=>{Se.hidden=g.querySelector(`input[name="mag-display"]:checked`)?.value!==`inline`})),g.querySelector(`[data-x="preview"]`)?.addEventListener(`click`,()=>uf(()=>rf({...e,...rm(g),...i?{steps:Cd()}:{}}))),g.querySelector(`[data-x="save"]`).addEventListener(`click`,async t=>{let n=t.currentTarget,r=g.querySelector(`#mag-f-error`),s=g.querySelector(`#mag-f-name`).value.trim();if(!s){y(`basics`),r.textContent=`Please give your magnet a name.`;return}let c=g.querySelector(`#mag-f-domains`).value.split(`,`).map(e=>e.trim()).filter(Boolean);if((g.querySelector(`input[name="mag-size-preset"]:checked`)?.value||`standard`)===`custom`){let e=hf(g.querySelector(`#mag-f-inline-w`).value,`width`)||hf(g.querySelector(`#mag-f-inline-h`).value,`height`),t=g.querySelector(`#mag-f-inline-err`);if(t&&(t.textContent=e),e){y(`appearance`),r.textContent=`Check the inline size fields.`;return}}let l=``;if(g.querySelectorAll(`.mag-cta`).forEach(e=>{let t=e.querySelector(`.mag-cta__on`).checked;if(e.dataset.kind===`book`){let n=e.querySelector(`.mag-cta__booksrc`)?.value;t&&n===`calendly`&&!e.querySelector(`.mag-cta__calevent`)?.value&&(l||=`Pick a Calendly event for the Book button, or switch it back to the built-in scheduler.`),t&&n===`calcom`&&!e.querySelector(`.mag-cta__ccevent`)?.value&&(l||=`Pick a Cal.com event for the Book button, or switch it back to the built-in scheduler.`),t&&n===`ms_bookings`&&!e.querySelector(`.mag-cta__mbevent`)?.value&&(l||=`Pick a Bookings page for the Book button, or switch it back to the built-in scheduler.`);return}if(e.dataset.kind!==`value`)return;if(e.dataset.type===`call`&&e.querySelector(`.mag-cta__callsrc`)?.value===`callrail`){t&&!e.querySelector(`.mag-cta__crtracker`)?.value&&(l||=`Pick a CallRail tracking number for the Call button, or switch it back to a phone number.`);return}let n=e.querySelector(`.mag-cta__val`).value.trim();t&&!n&&(l||=`Add a target for the ${xm[e.dataset.type].label} button, or uncheck it.`)}),l){y(`welcome`),r.textContent=l;return}let u=cm(g);if(u.enabled&&!Object.keys(u.b).length){y(`ab`),r.textContent=`Give variant B at least one change (title, welcome, or color), or untick the A/B test.`;return}if(i){let e=vd();if(e){y(`flow`),r.textContent=e.message,yd(e.route,e.message,{uid:e.uid,field:e.field});return}}let d={name:s,domains:c,...rm(g)};o&&(d.owner_guid=g.querySelector(`#mag-f-owner`).value);let f=i&&e.status===`DRAFT`;f&&(d.status=`ENABLED`),n.disabled=!0,r.textContent=``;try{i&&await xd(e.guid);let t=i?`${U()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`:`${U()}/m5t/v5/magnets`,n={"Content-Type":`application/json`};a&&(n[`Idempotency-Key`]=a);let r=await fetch(t,{method:i?`PATCH`:`POST`,headers:n,body:JSON.stringify(d)}),o={};try{o=await r.json()}catch{}if(!r.ok||!o.ok)throw Error(o.message||`Save failed (${r.status})`);i&&(bd(o.modified_tz||``),await Sd(e.guid)),H(f||!i?`Magnet created`:`Magnet updated`,`success`),le=!0,ge(),await Rp()}catch(e){n.disabled=!1,r.textContent=e.message||`Something went wrong.`}})}var dm,fm,B,pm,V,H,U,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm=o((()=>{w(),dm=u(f(),1),m(),ef(),ff(),xf(),xa(),Uf(),sn(),fm=!1,B={magnets:[],owners:[],canProvision:!1,canManage:!1,primaryOrgGuid:null,stats:{},install:{},connections:{},pairing:{},pairTimer:null,detailOpen:{}},pm={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},V=e=>String(e??``).replace(/[&<>"']/g,e=>pm[e]),H=(e,t=`info`)=>{try{dm.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},U=()=>C.getConfig?.().BASE_URL||``,mm=e=>`<script src="${U()}/m5t/v5/coreSnippet?appguid=${e}" async><\/script>`,hm=()=>`<details class="mag-csp-note">
  <summary><span class="material-symbols-outlined" aria-hidden="true">shield</span>Strict Content-Security-Policy on your site? Read this</summary>
  <div class="mag-csp-note__body">
    <p>A strict CSP can silently block the widget — it just never appears, no visible error. Allowlist <code>${V(U())}</code> under all three directives. Copy-paste ready for your CSP header/meta tag:</p>
    <pre class="mag-csp-note__snippet"><code>script-src 'self' ${V(U())};
connect-src 'self' ${V(U())};
img-src 'self' ${V(U())};</code></pre>
    <ul>
      <li><code>script-src</code> — lets the install script run at all</li>
      <li><code>connect-src</code> — lets it send captures and events</li>
      <li><code>img-src</code> — lets an uploaded logo render</li>
    </ul>
    <p>Merge these into your existing policy rather than replacing it — most sites already have other origins allowlisted (analytics, fonts, etc.) that this snippet doesn't know about.</p>
    <p>Using a nonce-based CSP? Add your page's own nonce to the script tag: <code>&lt;script nonce="your-nonce" src="..."&gt;</code></p>
  </div>
</details>`,gm=e=>{let t=V(mm(e));return`<details class="mag-guide">
  <summary><span class="material-symbols-outlined" aria-hidden="true">help</span>Where do I paste this? Step-by-step for your site</summary>
  <div class="mag-guide__body">

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">code</span>A plain HTML site</h4>
      <ol>
        <li>Open the page you want the magnet on — or your shared footer/template file, if you have one, so it appears on every page.</li>
        <li>Paste the snippet just before the closing <code>&lt;/body&gt;</code> tag.</li>
        <li>Save, upload the file to your host, and reload your site.</li>
      </ol>
    </div>

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">wordpress</span>WordPress</h4>
      <ol>
        <li>In WP Admin, install a header/footer snippet plugin — <em>WPCode</em> and <em>Insert Headers and Footers</em> are the common ones.</li>
        <li>Open its settings and find the <strong>Footer</strong> (or "Body — end") box.</li>
        <li>Paste the snippet there, save, and reload your site.</li>
      </ol>
      <p class="mag-guide__note">Prefer a plugin over Appearance &rarr; Theme File Editor: a snippet pasted into a theme file is wiped by the next theme update, and a snippet plugin survives it.</p>
    </div>

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">web</span>Squarespace or Wix</h4>
      <ol>
        <li><strong>Squarespace:</strong> Settings &rarr; Advanced &rarr; <strong>Code Injection</strong>, paste into the <strong>Footer</strong> box, then Save. Code Injection needs a Business plan or higher.</li>
        <li><strong>Wix:</strong> Settings &rarr; <strong>Custom Code</strong> (under Advanced) &rarr; <em>+ Add Custom Code</em>. Paste, choose <strong>Body — end</strong>, apply to <strong>All pages</strong>, then Apply.</li>
        <li>Publish the site — on both platforms, custom code only runs on the published site, not in the editor preview.</li>
      </ol>
    </div>

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">deployed_code</span>Next.js, React or another framework</h4>
      <p class="mag-guide__note">Load it through your framework's script component rather than hand-writing the tag into JSX — React will not execute a raw <code>&lt;script&gt;</code> in markup. In Next.js, add this to your root layout:</p>
      <pre class="mag-guide__snippet"><code>import Script from 'next/script';

&lt;Script
  src="${V(U())}/m5t/v5/coreSnippet?appguid=${V(e)}"
  strategy="afterInteractive"
/&gt;</code></pre>
      <p class="mag-guide__note">If your app sets a Content-Security-Policy (a Next.js middleware with a nonce is the usual source), it will block the widget silently — see the CSP note below before you go hunting.</p>
    </div>

    <p class="mag-guide__note">Wherever it goes, the snippet is the same one shown above:</p>
    <pre class="mag-guide__snippet"><code>${t}</code></pre>
  </div>
</details>`},_m={chat:`Chat bubble`,right_slide:`Slide-in panel`,modal:`Modal`,inline:`Inline`},vm=[{value:`inline`,icon:`view_agenda`,label:`Inline`},{value:`chat`,icon:`chat`,label:`Chat`},{value:`right_slide`,icon:`vertical_split`,label:`Slide`},{value:`modal`,icon:`web_asset`,label:`Modal`}],ym=[{value:`auto`,icon:`brightness_auto`,label:`Auto`},{value:`sync`,icon:`sync`,label:`Sync`},{value:`light`,icon:`light_mode`,label:`Light`},{value:`dark`,icon:`dark_mode`,label:`Dark`}],bm=[{value:`on_load`,label:`Immediately on page load`},{value:`on_8_seconds`,label:`After 8 seconds`},{value:`on_scroll_80_percent`,label:`At 80% scroll depth`},{value:`on_exit_intent`,label:`On exit intent (mouse leaves the page)`},{value:`none`,label:`Manual only (visitor clicks the launcher)`}],xm={book:{label:`Book`,icon:`event`,kind:`book`},chat:{label:`Chat`,icon:`chat`,kind:`flow`},call:{label:`Call`,icon:`phone`,kind:`value`,placeholder:`Phone number`},email:{label:`Email`,icon:`mail`,kind:`value`,placeholder:`Email address`},support:{label:`Support`,icon:`support_agent`,kind:`support`}},Sm=[`book`,`chat`,`call`,`email`,`support`],Cm=null,wm=null,Tm=null,Em=null,Dm=5e3,Om={ACTIVE:{label:`Connected`,icon:`check_circle`,tone:`live`},PENDING:{label:`Waiting to connect`,icon:`hourglass_empty`,tone:`pending`},REVOKED:{label:`Disconnected`,icon:`link_off`,tone:`off`},EXPIRED:{label:`Expired`,icon:`timer_off`,tone:`off`}},km=!1,Am=512,jm=new Set([`image/png`,`image/jpeg`,`image/gif`,`image/webp`]),Mm=8388608,Nm=[{label:`Web fonts (loaded for you)`,opts:[[`Inter, sans-serif`,`Inter`],[`Poppins, sans-serif`,`Poppins`],[`Montserrat, sans-serif`,`Montserrat`],[`Roboto, sans-serif`,`Roboto`],[`"Open Sans", sans-serif`,`Open Sans`],[`Lato, sans-serif`,`Lato`],[`Nunito, sans-serif`,`Nunito`],[`Raleway, sans-serif`,`Raleway`],[`"Work Sans", sans-serif`,`Work Sans`],[`Oswald, sans-serif`,`Oswald`],[`Merriweather, serif`,`Merriweather (serif)`]]},{label:`System / always available`,opts:[[`system-ui, sans-serif`,`System UI`],[`Georgia, serif`,`Georgia (serif)`],[`"Times New Roman", Times, serif`,`Times (serif)`],[`Arial, Helvetica, sans-serif`,`Arial / Helvetica`],[`Verdana, Geneva, sans-serif`,`Verdana`],[`"Courier New", monospace`,`Courier (mono)`]]}]})),Fm=c({default:()=>Ym,init:()=>Vm,render:()=>zm});function Im(){let e=new Map;for(let t of Cf())e.set(t.category,(e.get(t.category)||0)+1);return Object.keys(If).filter(t=>e.has(t)).map(t=>[t,e.get(t)])}function Lm(){if(Mf(),Jm)return;let e=document.createElement(`style`);e.id=`m5t-templates-page-styles`,e.textContent=`
    .page-shell[data-section="templates"] .tpl-filters { margin: 0 0 20px; }
    .page-shell[data-section="templates"] .settings-note { margin: 0 0 20px; }
  `,document.head.appendChild(e),Jm=!0}function Rm(){let e=Km()||Gm();return`
      <div class="m5t-chip-row tpl-filters" id="tpl-filters" role="group" aria-label="Filter templates by category">
        ${qm(`all`,`All`,Cf().length,`true`)}
        ${Im().map(([e,t])=>qm(e,If[e],t,`false`)).join(``)}
      </div>

      <div class="mag-tpl-grid mag-tpl-grid--page" id="tpl-grid">
        ${Cf().map(t=>Df(t,{detail:!0,gallery:!0,canUse:e})).join(``)}
      </div>`}function zm(){Lm();let e=Km();return`
    <div class="page-shell" data-section="templates">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Templates</h1>
          <p class="page-description">Start from a proven flow instead of a blank magnet.</p>
        </div>
        ${e?`<a class="btn btn-primary" href="#/signup">
          <span class="material-symbols-outlined" aria-hidden="true">rocket_launch</span>
          Start Free
        </a>`:`<a class="btn btn-secondary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">bolt</span>
          Your magnets
        </a>`}
      </div>

      ${e||Gm()?``:`<div class="settings-note" id="tpl-readonly-note">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        Setup managed by your provider.
      </div>`}

      <div id="tpl-gallery">${Rm()}</div>
    </div>`}function Bm(){let e=document.getElementById(`tpl-grid`);document.getElementById(`tpl-filters`)?.addEventListener(`click`,t=>{let n=t.target.closest(`[data-cat]`);if(!n)return;n.parentElement.querySelectorAll(`[data-cat]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e===n))});let r=n.dataset.cat;e?.querySelectorAll(`.mag-tpl-card`).forEach(e=>{e.hidden=r!==`all`&&e.dataset.cat!==r})}),e?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-preview]`);if(t){let e=Cf().find(e=>e.id===t.dataset.preview);e&&uf(()=>rf({...e.appearance,steps:e.steps,name:e.name}));return}let n=e.target.closest(`[data-tpl]`);n&&(Of(n.dataset.tpl),window.location.hash=Km()?`#/signup`:`#/magnets`)})}function Vm(){Bm();let e=Cf();wf().then(t=>{let n=document.getElementById(`tpl-gallery`);!n||t===e||(n.innerHTML=Rm(),Bm())})}var Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm=o((()=>{w(),ff(),Uf(),Hm={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Um=e=>String(e??``).replace(/[&<>"']/g,e=>Hm[e]),Wm=[`provision_magnets`,`manage_magnets`],Gm=()=>C.getCapabilities().some(e=>Wm.includes(e)),Km=()=>!C.isAuthenticated(),qm=(e,t,n,r)=>`<button class="m5t-chip--filter" type="button" data-cat="${Um(e)}" aria-pressed="${r}">${Um(t)}<span class="m5t-chip__count">${n}</span></button>`,Jm=!1,Ym={render:zm,init:Vm}})),Zm=c({default:()=>Sh,init:()=>rh,render:()=>nh});function Qm(){if(dr(),yh)return;let e=document.createElement(`style`);e.id=`m5t-questionnaires-styles`,e.textContent=`
    .page-shell .qz-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .qz-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; flex-wrap: wrap; }
    .page-shell .qz-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .qz-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .qz-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .qz-searchwrap { position: relative; margin-left: auto; }
    .page-shell .qz-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .qz-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 220px; }
    .page-shell .qz-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .qz-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }

    .page-shell .qz-tablewrap { overflow-x: auto; }
    .page-shell .qz-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 720px; }
    .page-shell .qz-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .qz-table td { padding: 11px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .qz-table tr:last-child td { border-bottom: 0; }
    .page-shell .qz-row--open { cursor: pointer; }
    .page-shell .qz-row--open:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .qz-client { font-weight: 600; }
    .page-shell .qz-earlier { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); font-weight: 400; margin-left: 6px; }
    .page-shell .qz-when { color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .qz-badge { display: inline-block; white-space: nowrap; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .qz-badge[data-s="SUBMITTED"] { background: #DCFCE7; color: #047857; }
    .page-shell .qz-badge[data-s="DRAFT"] { background: #FEF3C7; color: #92400E; }
    .page-shell .qz-badge[data-s="CANCELLED"] { background: var(--color-danger-soft, #FBE3DE); color: var(--color-danger, #DD4124); }
    .page-shell .qz-act { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 5px 11px; border-radius: 8px; white-space: nowrap; }
    .page-shell .qz-act:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell td.qz-actcell { text-align: right; }

    /* Detail drawer — same shape as the Conversations drawer, deliberately. */
    .qz-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .qz-drawer-scrim.open { opacity: 1; }
    .qz-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(560px, 96vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .qz-drawer.open { transform: translateX(0); }
    .qz-drawer__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .qz-drawer__title { font-size: 1.02rem; font-weight: 600; }
    .qz-drawer__sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .qz-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; flex: 0 0 auto; }
    .qz-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .qz-drawer__body { flex: 1 1 auto; overflow-y: auto; padding: 20px; }
    html.ff-no-animations .qz-drawer, html.ff-no-animations .qz-drawer-scrim { transition: none; }
    @media (prefers-reduced-motion: reduce) { .qz-drawer, .qz-drawer-scrim { transition: none; } }
  `,document.head.appendChild(e),yh=!0}function $m(){return vh.clients.map(e=>{let t=vh.responses.filter(t=>t.owner_guid===e.guid),n=t[0]||null;return{guid:e.guid,name:e.caption||e.name||e.guid,latest:n,earlier:Math.max(0,t.length-1),status:n?n.status:`NOT_SENT`}})}function eh(){let e=vh.search.trim().toLowerCase();return $m().filter(t=>(vh.filter===`ALL`||t.status===vh.filter)&&(!e||t.name.toLowerCase().includes(e)))}function th(e){let t=e.status===`SUBMITTED`,n=e.status===`SUBMITTED`?`<button class="qz-act" type="button" data-act="open" data-guid="${fh(e.latest.guid)}">Read answers</button>`:e.status===`DRAFT`?`<button class="qz-act" type="button" data-act="copy" data-url="${fh(e.latest.url||``)}">Copy link</button>`:`<a class="qz-act" href="#/clients">Go to client</a>`;return`<tr class="qz-row${t?` qz-row--open`:``}"${t?` data-open-guid="${fh(e.latest.guid)}"`:``}>
    <td><span class="qz-client">${fh(e.name)}</span>${e.earlier?`<span class="qz-earlier">${e.earlier} earlier</span>`:``}</td>
    <td><span class="qz-badge" data-s="${fh(e.status)}">${fh(_h[e.status]||e.status)}</span></td>
    <td class="qz-when">${fh(xh(e,`created_tz`))}</td>
    <td class="qz-when">${fh(xh(e,`submitted_tz`))}</td>
    <td class="qz-actcell">${n}</td>
  </tr>`}function nh(){return Qm(),`
    <div class="page-shell" data-section="questionnaires">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Questionnaires</h1>
          <p class="page-description">Kickoff questionnaire status for every client, and the answers once they come back.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">fact_check</span> By client</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="qz-body">${bh(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function rh(){await ih()}async function ih(){let e=document.getElementById(`qz-body`);if(e){try{let[e,t]=await Promise.all([fetch(`${ph()}/m5t/v5/acctGroup`),fetch(`${ph()}/m5t/v5/m5mQuestionnaireResponse`)]),n=await e.json().catch(()=>({})),r=await t.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(`load failed`);vh.clients=(n.data||[]).filter(e=>e.class===hh&&![`DELETED`,`ARCHIVED`].includes(e.status)).sort((e,t)=>String(e.caption||``).localeCompare(String(t.caption||``))),vh.responses=r.data||[]}catch{e.innerHTML=bh(`error`,`Could not load questionnaires. Please try again.`);return}oh()}}function ah(){let e=document.getElementById(`qz-tbody`);e&&E(e,{rowSelector:`tr.qz-row`,noun:`clients`,controlHost:e.closest(`.qz-tablewrap`)||e.parentElement})}function oh(){let e=document.getElementById(`qz-body`);if(!e)return;if(!vh.clients.length){e.innerHTML=bh(`groups`,`No clients yet. Add a client first, then send them a kickoff questionnaire.`);return}let t=$m(),n={ALL:t.length};gh.slice(1).forEach(([e])=>{n[e]=t.filter(t=>t.status===e).length});let r=eh();e.innerHTML=`
    <div class="qz-bar">
      <div class="qz-filter">
        ${gh.map(([e,t])=>`<button data-filter="${e}" class="${vh.filter===e?`active`:``}">${fh(t)}${n[e]?`<span class="qz-pillnum">${n[e]}</span>`:``}</button>`).join(``)}
      </div>
      <span class="qz-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="qz-search" id="qz-search" type="search" placeholder="Search clients" value="${fh(vh.search)}" aria-label="Search clients" />
      </span>
      <span class="qz-count">${r.length} of ${t.length}</span>
    </div>
    <div class="qz-tablewrap">
      <table class="qz-table">
        <thead><tr><th>Client</th><th>Status</th><th>Sent</th><th>Submitted</th><th></th></tr></thead>
        <tbody id="qz-tbody">${r.length?r.map(th).join(``):`<tr><td colspan="5"><div class="qz-when" style="padding:14px 4px">${vh.search.trim()?`No clients match your search.`:`No clients with status “${fh(_h[vh.filter]||vh.filter)}”.`}</div></td></tr>`}</tbody>
      </table>
    </div>`,ah(),e.querySelector(`.qz-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(vh.filter=t.dataset.filter,oh())}),e.querySelector(`#qz-search`)?.addEventListener(`input`,e=>{vh.search=e.target.value,sh()}),e.querySelector(`#qz-tbody`)?.addEventListener(`click`,ch)}function sh(){let e=document.getElementById(`qz-tbody`);if(!e)return;let t=eh();e.innerHTML=t.length?t.map(th).join(``):`<tr><td colspan="5"><div class="qz-when" style="padding:14px 4px">No clients match your search.</div></td></tr>`,ah();let n=document.querySelector(`.qz-count`);n&&(n.textContent=`${t.length} of ${$m().length}`)}function ch(e){let t=e.target.closest(`[data-act="copy"]`);if(t){e.stopPropagation();let n=t.dataset.url;if(!n){mh(`No link on this questionnaire yet.`,`warning`);return}navigator.clipboard?.writeText(n).then(()=>{t.textContent=`Copied!`,setTimeout(()=>{t.textContent=`Copy link`},1500)},()=>mh(`Could not copy the link.`,`error`));return}let n=e.target.closest(`[data-act="open"]`),r=e.target.closest(`[data-open-guid]`),i=n?.dataset.guid||r?.dataset.openGuid;i&&lh(i)}async function lh(e){vh.openGuid=e;let t=document.createElement(`div`);t.className=`qz-drawer-scrim`;let n=document.createElement(`aside`);n.className=`qz-drawer`,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Questionnaire answers`),n.innerHTML=`
    <div class="qz-drawer__head">
      <div><div class="qz-drawer__title" id="qz-dtitle">Questionnaire</div><div class="qz-drawer__sub" id="qz-dsub"></div></div>
      <button class="qz-drawer__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="qz-drawer__body" id="qz-dbody">${bh(`hourglass_empty`,`Loading answers…`)}</div>`,document.body.append(t,n),requestAnimationFrame(()=>{t.classList.add(`open`),n.classList.add(`open`)});let r=()=>{vh.openGuid=null,t.classList.remove(`open`),n.classList.remove(`open`),setTimeout(()=>{t.remove(),n.remove()},220),document.removeEventListener(`keydown`,i)};function i(e){e.key===`Escape`&&(e.preventDefault(),r())}document.addEventListener(`keydown`,i),t.addEventListener(`click`,r),n.querySelector(`.qz-drawer__close`).addEventListener(`click`,r);try{let t=await fetch(`${ph()}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e)}`),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`load failed`);let i=r.data||{},a=vh.clients.find(e=>e.guid===i.owner_guid)?.caption||`Client`;n.querySelector(`#qz-dtitle`).textContent=a;let o=i.submitted_tz?`Submitted ${D(i.submitted_tz)}`:`Not yet submitted`;n.querySelector(`#qz-dsub`).textContent=i.locked_tz?`${o} · Finalized`:o,n.querySelector(`#qz-dbody`).innerHTML=ur(i)+sr(i,{emptyLabel:`Not answered`})}catch{n.querySelector(`#qz-dbody`).innerHTML=bh(`error`,`Could not load these answers. Please try again.`)}}var uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch=o((()=>{w(),uh=u(f(),1),m(),hr(),sn(),dh={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},fh=e=>String(e??``).replace(/[&<>"']/g,e=>dh[e]),ph=()=>C.getConfig?.().BASE_URL||``,mh=(e,t=`info`)=>{try{uh.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},hh=`managed_client`,gh=[[`ALL`,`All`],[`NOT_SENT`,`Not sent`],[`DRAFT`,`Awaiting response`],[`SUBMITTED`,`Submitted`],[`CANCELLED`,`Cancelled`]],_h=Object.fromEntries(gh),vh={clients:[],responses:[],filter:`ALL`,search:``,openGuid:null},yh=!1,bh=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,xh=(e,t)=>e?.latest?.[t]?D(e.latest[t]):`—`,Sh={render:nh,init:rh}})),wh=c({default:()=>ag,init:()=>Ah,render:()=>kh});function Th(){if(dr(),tg)return;let e=document.createElement(`style`);e.id=`m5t-deliverables-styles`,e.textContent=`
    .page-shell .dz-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .dz-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; flex-wrap: wrap; }
    .page-shell .dz-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .dz-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .dz-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .dz-searchwrap { position: relative; margin-left: auto; }
    .page-shell .dz-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .dz-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 220px; }
    .page-shell .dz-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .dz-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .dz-new { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: #fff; background: var(--color-primary-600, #0072BA); padding: 8px 14px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .dz-new:hover { background: var(--color-primary-700, #00558D); }
    .page-shell .dz-new .material-symbols-outlined { font-size: 1.05rem; }

    .page-shell .dz-tablewrap { overflow-x: auto; }
    .page-shell .dz-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 760px; }
    .page-shell .dz-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .dz-table td { padding: 11px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .dz-table tr:last-child td { border-bottom: 0; }
    .page-shell .dz-row--open { cursor: pointer; }
    .page-shell .dz-row--open:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .dz-client { font-weight: 600; }
    .page-shell .dz-kind { color: var(--color-text-muted, #4A5A78); }
    .page-shell .dz-rev { font-size: 0.68rem; font-weight: 700; color: var(--color-text-subtle, #6C7C9A); margin-left: 6px; white-space: nowrap; }
    .page-shell .dz-when { color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .dz-badge { display: inline-block; white-space: nowrap; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .dz-badge[data-s="SUBMITTED"] { background: #DCFCE7; color: #047857; }
    .page-shell .dz-badge[data-s="SENT"] { background: #FEF3C7; color: #92400E; }
    .page-shell .dz-badge[data-s="DRAFT"] { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }
    .page-shell .dz-badge[data-s="CANCELLED"] { background: var(--color-danger-soft, #FBE3DE); color: var(--color-danger, #DD4124); }
    .page-shell .dz-act { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 5px 11px; border-radius: 8px; white-space: nowrap; }
    .page-shell .dz-act:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell td.dz-actcell { text-align: right; }

    /* Drawer — same shape as the Questionnaires/Conversations drawers, wider:
       the authoring form is a real document. */
    .dz-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .dz-drawer-scrim.open { opacity: 1; }
    .dz-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(880px, 96vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .dz-drawer.open { transform: translateX(0); }
    .dz-drawer__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .dz-drawer__title { font-size: 1.02rem; font-weight: 600; }
    .dz-drawer__sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .dz-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; flex: 0 0 auto; }
    .dz-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .dz-drawer__body { flex: 1 1 auto; overflow-y: auto; padding: 20px; }
    .dz-drawer__foot { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; padding: 14px 20px; border-top: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F7FAFD); }
    html.ff-no-animations .dz-drawer, html.ff-no-animations .dz-drawer-scrim { transition: none; }
    @media (prefers-reduced-motion: reduce) { .dz-drawer, .dz-drawer-scrim { transition: none; } }

    .dz-drawer .dz-intro { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); margin: -4px 0 12px; }
    .dz-drawer .dz-note { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 14px; }
    .dz-drawer .dz-field { margin-bottom: 14px; }
    .dz-drawer .dz-field > label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 5px; }
    .dz-drawer .dz-help { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: -2px 0 5px; }
    .dz-drawer select, .dz-drawer input[type="email"] {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.88rem; padding: 8px 10px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 8px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .dz-drawer .dz-btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.84rem; font-weight: 600; color: #fff; background: var(--color-primary-600, #0072BA); padding: 9px 16px; border-radius: 9px; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; }
    .dz-drawer .dz-btn .material-symbols-outlined { font-size: 1.05rem; }
    .dz-drawer .dz-btn:hover { background: var(--color-primary-700, #00558D); }
    .dz-drawer .dz-btn[disabled] { opacity: 0.6; cursor: default; }
    .dz-drawer .dz-btn--ghost { appearance: none; cursor: pointer; font: inherit; font-size: 0.84rem; font-weight: 600; padding: 9px 14px; border-radius: 9px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; }
    .dz-drawer .dz-btn--ghost .material-symbols-outlined { font-size: 1.05rem; }
    .dz-drawer .dz-btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .dz-drawer .dz-btn--danger { color: var(--color-danger, #DD4124); border-color: var(--color-danger-soft, #FBE3DE); }
    /* authoring roller chrome — sticky, so section navigation is never below
       the fold of a long step. */
    .dz-drawer .dz-steps-head { position: sticky; top: -20px; z-index: 5; background: var(--color-bg, #fff); display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: -8px 0 14px; padding: 12px 0 10px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
    .dz-drawer .dz-step-label { font-size: 0.86rem; font-weight: 700; color: var(--color-primary-700, #00558D); }
    .dz-drawer .dz-steps-ctl { display: flex; align-items: center; gap: 10px; }
    .dz-drawer .dz-arrow { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; color: var(--color-primary-600, #0072BA); padding: 0; }
    .dz-drawer .dz-arrow .material-symbols-outlined { font-size: 1.15rem; }
    .dz-drawer .dz-arrow:hover { background: var(--color-surface, #F4F7FB); }
    .dz-drawer .dz-arrow[disabled] { opacity: 0.35; cursor: default; }
    /* Section headings AND field labels in drawer context: full ink, never
       faint gray (readability ruling, twice). */
    .dz-drawer .qm-section h3 { color: var(--color-primary-800, #003961); font-size: 1rem; }
    .dz-drawer .qm-qa__q { color: var(--color-text, #0B1220); }
    .dz-drawer .dz-dots { display: flex; gap: 8px; }
    .dz-drawer .dz-dot { appearance: none; border: 0; cursor: pointer; padding: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--color-border, #D4DCE8); transition: background .15s ease, transform .15s ease; }
    .dz-drawer .dz-dot[aria-current="step"] { background: var(--color-primary-600, #0072BA); transform: scale(1.25); }
    .dz-drawer .dz-step[hidden] { display: none; }
    .dz-drawer .dz-step-nav { display: flex; justify-content: space-between; gap: 10px; margin-top: 16px; }
    .dz-drawer .dz-cblock { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 12px 14px; margin: 0 0 12px; }
    .dz-drawer .dz-cblock[hidden] { display: none; }
    .dz-drawer .dz-cblock__title { font-size: 0.82rem; font-weight: 700; margin: 0 0 10px; color: var(--color-primary-600, #0072BA); }
    .dz-drawer .dz-addblock { display: block; width: 100%; margin: 0 0 12px; }
    .dz-drawer .dz-addblock[hidden] { display: none; }
    .dz-drawer .dz-feedback { background: var(--color-warning-soft, #FDF6E3); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 12px 14px; margin: 0 0 16px; }
    .dz-drawer .dz-feedback__title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-warning-text, #92400E); margin: 0 0 8px; }
    .dz-drawer .dz-feedback .qm-qa { margin-bottom: 8px; }
    .dz-drawer .dz-linkrow { display: flex; gap: 8px; align-items: center; margin: 0 0 14px; }
    .dz-drawer .dz-linkrow input { flex: 1 1 auto; font: inherit; font-size: 0.78rem; padding: 8px 10px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-surface, #F4F7FB); color: var(--color-text-muted, #4A5A78); }
    .dz-drawer .dz-sendrow { display: flex; gap: 8px; align-items: center; flex: 1 1 auto; }
    .dz-drawer .dz-sendrow input { flex: 1 1 auto; }
  `,document.head.appendChild(e),tg=!0}function Eh(){let e=G.search.trim().toLowerCase();return G.rows.filter(t=>(G.filter===`ALL`||t.status===G.filter)&&(!e||String(t.owner_name||``).toLowerCase().includes(e)))}function Dh(e){return e.status===`DRAFT`?`<button class="dz-act" type="button" data-act="open" data-guid="${W(e.guid)}">Edit</button>`:e.status===`SENT`?`<button class="dz-act" type="button" data-act="copy" data-url="${W(e.url||``)}">Copy link</button>`:e.status===`SUBMITTED`?`<button class="dz-act" type="button" data-act="open" data-guid="${W(e.guid)}">Read review</button>`:`<span class="dz-when">—</span>`}function Oh(e){let t=e.status!==`CANCELLED`;return`<tr class="dz-row${t?` dz-row--open`:``}"${t?` data-open-guid="${W(e.guid)}"`:``}>
    <td><span class="dz-client">${W(e.owner_name||e.owner_guid)}</span></td>
    <td><span class="dz-kind">${W(e.template_name||e.kind||``)}</span>${Number(e.revision)>1?`<span class="dz-rev">Rev ${W(e.revision)}</span>`:``}</td>
    <td><span class="dz-badge" data-s="${W(e.status)}">${W(eg[e.status]||e.status)}</span></td>
    <td class="dz-when">${e.sent_tz?W(D(e.sent_tz)):`—`}</td>
    <td class="dz-when">${e.submitted_tz?W(D(e.submitted_tz)):`—`}</td>
    <td class="dz-actcell">${Dh(e)}</td>
  </tr>`}function kh(){return Th(),`
    <div class="page-shell" data-section="deliverables">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Deliverables</h1>
          <p class="page-description">Plans and sign-off status for every client.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">approval</span> All deliverables</h2>
          <button class="dz-new" type="button" id="dz-new"><span class="material-symbols-outlined" aria-hidden="true">add</span>New deliverable</button>
        </div>
        <div class="card-body" id="dz-body">${ng(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function Ah(){document.getElementById(`dz-new`)?.addEventListener(`click`,Lh),await jh()}async function jh(){let e=document.getElementById(`dz-body`);if(e){try{let[e,t,n]=await Promise.all([fetch(`${Xh()}/m5t/v5/m5mDeliverable`),fetch(`${Xh()}/m5t/v5/acctGroup`),fetch(`${Xh()}/m5t/v5/m5mDeliverable/templates`)]),r=await e.json().catch(()=>({})),i=await t.json().catch(()=>({})),a=await n.json().catch(()=>({}));if(!e.ok||!t.ok||!n.ok)throw Error(`load failed`);G.rows=r.data||[],G.clients=(i.data||[]).filter(e=>e.class===Qh&&![`DELETED`,`ARCHIVED`].includes(e.status)).sort((e,t)=>String(e.caption||``).localeCompare(String(t.caption||``))),G.templates=a.data||[]}catch{e.innerHTML=ng(`error`,`Could not load deliverables. Please try again.`);return}Nh()}}function Mh(){let e=document.getElementById(`dz-tbody`);e&&E(e,{rowSelector:`tr.dz-row`,noun:`deliverables`,controlHost:e.closest(`.dz-tablewrap`)||e.parentElement})}function Nh(){let e=document.getElementById(`dz-body`);if(!e)return;if(!G.clients.length&&!G.rows.length){e.innerHTML=ng(`groups`,`No clients yet. Add a client first, then author their first deliverable.`);return}if(!G.rows.length){e.innerHTML=ng(`approval`,`No deliverables yet. Author the first one with New deliverable.`);return}let t={ALL:G.rows.length};$h.slice(1).forEach(([e])=>{t[e]=G.rows.filter(t=>t.status===e).length});let n=Eh();e.innerHTML=`
    <div class="dz-bar">
      <div class="dz-filter">
        ${$h.map(([e,n])=>`<button data-filter="${e}" class="${G.filter===e?`active`:``}">${W(n)}${t[e]?`<span class="dz-pillnum">${t[e]}</span>`:``}</button>`).join(``)}
      </div>
      <span class="dz-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="dz-search" id="dz-search" type="search" placeholder="Search clients" value="${W(G.search)}" aria-label="Search clients" />
      </span>
      <span class="dz-count">${n.length} of ${G.rows.length}</span>
    </div>
    <div class="dz-tablewrap">
      <table class="dz-table">
        <thead><tr><th>Client</th><th>Deliverable</th><th>Status</th><th>Sent</th><th>Returned</th><th></th></tr></thead>
        <tbody id="dz-tbody">${n.length?n.map(Oh).join(``):`<tr><td colspan="6"><div class="dz-when" style="padding:14px 4px">${G.search.trim()?`No deliverables match your search.`:`No deliverables with status “${W(eg[G.filter]||G.filter)}”.`}</div></td></tr>`}</tbody>
      </table>
    </div>`,Mh(),e.querySelector(`.dz-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(G.filter=t.dataset.filter,Nh())}),e.querySelector(`#dz-search`)?.addEventListener(`input`,e=>{G.search=e.target.value,Ph()}),e.querySelector(`#dz-tbody`)?.addEventListener(`click`,Fh)}function Ph(){let e=document.getElementById(`dz-tbody`);if(!e)return;let t=Eh();e.innerHTML=t.length?t.map(Oh).join(``):`<tr><td colspan="6"><div class="dz-when" style="padding:14px 4px">No deliverables match your search.</div></td></tr>`,Mh();let n=document.querySelector(`.dz-count`);n&&(n.textContent=`${t.length} of ${G.rows.length}`)}function Fh(e){let t=e.target.closest(`[data-act="copy"]`);if(t){e.stopPropagation();let n=t.dataset.url;if(!n){Zh(`No link on this deliverable yet.`,`warning`);return}navigator.clipboard?.writeText(n).then(()=>{t.textContent=`Copied!`,setTimeout(()=>{t.textContent=`Copy link`},1500)},()=>Zh(`Could not copy the link.`,`error`));return}let n=e.target.closest(`[data-act="open"]`),r=e.target.closest(`[data-open-guid]`),i=n?.dataset.guid||r?.dataset.openGuid;i&&qh(i)}function Ih(e){let t=document.createElement(`div`);t.className=`dz-drawer-scrim`;let n=document.createElement(`aside`);n.className=`dz-drawer`,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,e),n.innerHTML=`
    <div class="dz-drawer__head">
      <div><div class="dz-drawer__title" id="dz-dtitle">${W(e)}</div><div class="dz-drawer__sub" id="dz-dsub"></div></div>
      <button class="dz-drawer__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="dz-drawer__body" id="dz-dbody">${ng(`hourglass_empty`,`Loading…`)}</div>
    <div class="dz-drawer__foot" id="dz-dfoot"></div>`,document.body.append(t,n),requestAnimationFrame(()=>{t.classList.add(`open`),n.classList.add(`open`)});let r=()=>{t.classList.remove(`open`),n.classList.remove(`open`),setTimeout(()=>{t.remove(),n.remove()},220),document.removeEventListener(`keydown`,i)};function i(e){e.key===`Escape`&&(e.preventDefault(),r())}return document.addEventListener(`keydown`,i),t.addEventListener(`click`,r),n.querySelector(`.dz-drawer__close`).addEventListener(`click`,r),{drawer:n,close:r}}function Lh(){if(!G.clients.length){Zh(`Add a client first.`,`warning`);return}if(!G.templates.length){Zh(`No deliverable templates are configured.`,`error`);return}let{drawer:e,close:t}=Ih(`New deliverable`);e.querySelector(`#dz-dbody`).innerHTML=`
    <div class="dz-field">
      <label for="dz-new-client">Client</label>
      <select id="dz-new-client">${G.clients.map(e=>`<option value="${W(e.guid)}">${W(e.caption||e.name||e.guid)}</option>`).join(``)}</select>
    </div>
    <div class="dz-field">
      <label for="dz-new-kind">Deliverable</label>
      <select id="dz-new-kind">${G.templates.map(e=>`<option value="${W(e.kind)}">${W(e.name)}</option>`).join(``)}</select>
    </div>
    <p class="dz-note">Creates a draft. Nothing is sent until you press Send to client.</p>`;let n=e.querySelector(`#dz-dfoot`);n.innerHTML=`<button class="dz-btn" type="button" id="dz-create">Start authoring</button>`,n.querySelector(`#dz-create`).addEventListener(`click`,async()=>{let r=e.querySelector(`#dz-new-client`)?.value,i=e.querySelector(`#dz-new-kind`)?.value,a=n.querySelector(`#dz-create`);a.disabled=!0;try{let e=await fetch(`${Xh()}/m5t/v5/m5mDeliverable`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({owner_guid:r,kind:i})}),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`create failed`);t(),await jh(),qh(n.data.guid)}catch(e){Zh(e.message||`Could not create the deliverable.`,`error`),a.disabled=!1}})}function Rh(e,t,n){return`
    <div class="qm-qa" data-question-id="${W(e.id)}" data-question-type="${W(e.type)}">
      <div class="qm-qa__q">${W(n??e.label)}${e.help?` <span class="dz-help" style="display:inline;font-weight:400">(${W(e.help)})</span>`:``}</div>
      <div class="qm-qa__a">${cr(e,t)}</div>
    </div>`}function zh(e,t,n,{hidden:r=!1}={}){let i=`${t}: `,a=e[0]?.group||``;return`
      <div class="dz-cblock" data-group="${W(a)}" data-heading="${W(t)}"${r?` hidden`:``}>
        <h4 class="dz-cblock__title">${W(t)}</h4>
        ${e.map(e=>Rh(e,n,e.label.startsWith(i)?e.label.slice(i.length):e.label)).join(``)}
      </div>`}function Bh(e,t){let n=(e.questions||[]).filter(e=>e.audience===`am`),r=n.filter(e=>!e.group).map(e=>Rh(e,t)).join(``),i=Pr(e);if(i){let n=Fr(e).filter(e=>e.audience===`am`);if(!n.length)return r;let a=Rr(e,t);for(let e=1;e<=a;e++){let a=Ir(n,i,e);r+=zh(a,ig(a,`${i}${e}`),t)}let o=ig(Ir(n,i,a+1),`${i}${a+1}`);return r+=`<button class="dz-btn--ghost dz-addblock" type="button" data-repeat="${W(i)}" data-section-id="${W(e.id)}">+ Add ${W(o)}</button>`,r}let a=[...new Set(n.filter(e=>e.group).map(e=>e.group))];if(!a.length)return r;let o=null;return r+=a.map((e,r)=>{let i=n.filter(t=>t.group===e),a=ig(i,e),s=r===0||rg(i,t);return!s&&o===null&&(o={key:e,heading:a}),zh(i,a,t,{hidden:!s})}).join(``),r+=`<button class="dz-btn--ghost dz-addblock" type="button"${o?``:` hidden`}>${o?`+ Add ${W(o.heading)}`:``}</button>`,r}function Vh(e,t){let n=(e?.sections||[]).filter(e=>(e.questions||[]).some(e=>e.audience===`am`)),r=n.length>1;return`
    ${r?`
      <div class="dz-steps-head">
        <span class="dz-step-label" id="dz-step-label"></span>
        <div class="dz-steps-ctl">
          <button type="button" class="dz-arrow" id="dz-step-prev" aria-label="Previous section"><span class="material-symbols-outlined" aria-hidden="true">chevron_left</span></button>
          <div class="dz-dots" role="group" aria-label="Sections">
            ${n.map((e,t)=>`<button type="button" class="dz-dot" data-step="${t}" aria-label="${W(e.title)}"></button>`).join(``)}
          </div>
          <button type="button" class="dz-arrow" id="dz-step-fwd" aria-label="Next section"><span class="material-symbols-outlined" aria-hidden="true">chevron_right</span></button>
        </div>
      </div>`:``}
    ${n.map((e,n)=>`
      <div class="qm-section dz-step" data-step="${n}"${r&&n>0?` hidden`:``}>
        <h3>${W(e.title)}</h3>
        ${e.intro?`<p class="dz-intro">${W(e.intro)}</p>`:``}
        ${Bh(e,t)}
      </div>`).join(``)}
    ${r?`
      <div class="dz-step-nav">
        <button class="dz-btn--ghost" type="button" id="dz-step-back">Back</button>
        <button class="dz-btn" type="button" id="dz-step-next">Next</button>
      </div>`:``}`}function Hh(e,t,n){e.querySelectorAll(`.dz-addblock`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.parentElement;if(e.dataset.repeat){let r=Fr((t?.sections||[]).find(t=>t.id===e.dataset.sectionId)).filter(e=>e.audience===`am`);if(!r.length)return;let i=e.dataset.repeat,a=n.querySelectorAll(`.dz-cblock`).length+1,o=Ir(r,i,a);e.insertAdjacentHTML(`beforebegin`,zh(o,ig(o,`${i}${a}`),{}));let s=Ir(r,i,a+1);e.textContent=`+ Add ${ig(s,`${i}${a+1}`)}`;return}let r=[...n.querySelectorAll(`.dz-cblock[hidden]`)],i=r[0];i&&(i.hidden=!1);let a=r[1];a?e.textContent=`+ Add ${a.dataset.heading}`:e.hidden=!0})});let r=[...e.querySelectorAll(`.dz-step`)];if(r.length<=1)return;let i=[...e.querySelectorAll(`.dz-dot`)],a=e.querySelector(`#dz-step-label`),o=e.querySelector(`#dz-step-back`),s=e.querySelector(`#dz-step-next`),c=e.querySelector(`#dz-step-prev`),l=e.querySelector(`#dz-step-fwd`),u=0,d=t=>{u=Math.max(0,Math.min(r.length-1,t)),r.forEach((e,t)=>{e.hidden=t!==u}),i.forEach((e,t)=>{t===u?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}),a&&(a.textContent=`Step ${u+1} of ${r.length} · ${r[u].querySelector(`h3`)?.textContent||``}`),o.style.visibility=u===0?`hidden`:``,s.style.visibility=u===r.length-1?`hidden`:``,c&&(c.disabled=u===0),l&&(l.disabled=u===r.length-1),e.scrollIntoView?.({block:`start`})},f=e=>{d(e),n?.()};o.addEventListener(`click`,()=>f(u-1)),s.addEventListener(`click`,()=>f(u+1)),c?.addEventListener(`click`,()=>f(u-1)),l?.addEventListener(`click`,()=>f(u+1)),i.forEach(e=>e.addEventListener(`click`,()=>f(Number(e.dataset.step)||0))),d(0)}function Uh(e,t,n){return zr(e?.sections||[],t,n).map(e=>{let r=(e.questions||[]).filter(e=>{if(e.audience!==`am`)return!0;let n=t?.[e.id];return Array.isArray(n)?n.length>0:!!(n&&String(n).trim())});return r.length?`
      <div class="qm-section">
        <h3>${W(e.title)}</h3>
        ${r.map(e=>`
          <div class="qm-qa">
            <div class="qm-qa__q">${W(e.label)}</div>
            <div class="qm-qa__a">${e.audience===`am`?or(e,t):or(e,n)||`<span class="qm-qa__a--empty">Left blank</span>`}</div>
          </div>`).join(``)}
      </div>`:``}).join(``)}function Wh(e,t){if(!t)return``;let n=(e?.sections||[]).flatMap(e=>(e.questions||[]).filter(e=>e.audience!==`am`)).map(e=>({q:e,val:or(e,t.answers||{})})).filter(({val:e})=>e);return`
    <div class="dz-feedback">
      <p class="dz-feedback__title">Round ${W(t.round)} feedback${t.submitted_tz?` · returned ${W(D(t.submitted_tz))}`:``}</p>
      ${n.length?n.map(({q:e,val:t})=>`
        <div class="qm-qa">
          <div class="qm-qa__q">${W(e.label)}</div>
          <div class="qm-qa__a">${t}</div>
        </div>`).join(``):`<div class="qm-qa__a qm-qa__a--empty">Returned without feedback.</div>`}
    </div>`}function Gh(e,t){let n=Array.isArray(t)&&t.length?t[t.length-1]:null;return n?Wh(e,n):``}function Kh(e,t){return(Array.isArray(t)?t.slice().reverse():[]).map(t=>Wh(e,t)).join(``)}async function qh(e){let{drawer:t,close:n}=Ih(`Deliverable`),r=t.querySelector(`#dz-dbody`),i=t.querySelector(`#dz-dfoot`),a;try{let t=await fetch(`${Xh()}/m5t/v5/m5mDeliverable/${encodeURIComponent(e)}`),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`load failed`);a=n.data||{}}catch{r.innerHTML=ng(`error`,`Could not load this deliverable. Please try again.`);return}let o=G.rows.find(t=>t.guid===e)?.owner_name||G.clients.find(e=>e.guid===a.owner_guid)?.caption||`Client`;t.querySelector(`#dz-dtitle`).textContent=`${o} · ${a.template?.name||`Deliverable`}`;let s=a.status===`DRAFT`||a.status===`SENT`,c=Number(a.revision)>1?` · Rev ${a.revision}`:``,l=a.status===`SUBMITTED`?`Returned ${a.submitted_tz?D(a.submitted_tz):``}${a.locked_tz?` · Finalized`:``}${c}`:a.status===`SENT`?`Sent ${a.sent_tz?D(a.sent_tz):``} to ${a.recipient_email||``} · awaiting approval${c}`:`${eg[a.status]||a.status}${c}`;if(t.querySelector(`#dz-dsub`).textContent=l,!s){r.innerHTML=ur(a)+Uh(a.template,a.content||{},a.answers||{})+Kh(a.template,a.rounds),a.status===`SUBMITTED`&&!a.locked_tz?(i.innerHTML=`<button class="dz-btn" type="button" id="dz-revise">Revise plan</button>
        <span class="dz-note" style="margin:0">Archives this review and reopens authoring. The client approves the revised plan on a fresh link.</span>`,i.querySelector(`#dz-revise`).addEventListener(`click`,async t=>{let r=t.target;r.disabled=!0;try{let t=await fetch(`${Xh()}/m5t/v5/m5mDeliverable/${encodeURIComponent(e)}/revise`,{method:`POST`}),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`revise failed`);Zh(`Reopened for revision. The last review is pinned above the form.`,`success`),n(),await jh(),qh(e)}catch(e){Zh(e.message||`Could not revise.`,`error`),r.disabled=!1}})):i.innerHTML=``;return}r.innerHTML=`
    ${Gh(a.template,a.rounds)}
    ${a.url?`
      <div class="dz-linkrow">
        <input type="text" readonly value="${W(a.url)}" aria-label="Deliverable link" />
        <button class="dz-btn--ghost" type="button" id="dz-copylink">Copy link</button>
      </div>
      <p class="dz-note">${a.status===`SENT`?`The client already has this link. Saving updates the plan they see; if they had it open, they are asked to reload before approving. Re-sending emails the same link again.`:`The live review link. Send to client emails it, and you can also share it directly.`}</p>`:``}
    <div id="dz-author-form">${Vh(a.template,a.content||{})}</div>`,i.innerHTML=`
    <button class="dz-btn--ghost" type="button" id="dz-preview"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview</button>
    <button class="dz-btn--ghost" type="button" id="dz-save">Save draft</button>
    <span class="dz-sendrow">
      <input type="email" id="dz-email" placeholder="client@example.com" value="${W(a.recipient_email||``)}" aria-label="Recipient email" />
      <button class="dz-btn" type="button" id="dz-send"><span class="material-symbols-outlined" aria-hidden="true">send</span>${a.status===`SENT`?`Re-send`:`Send to client`}</button>
    </span>
    <button class="dz-btn--ghost dz-btn--danger" type="button" id="dz-cancel">Cancel deliverable</button>`,r.querySelector(`#dz-copylink`)?.addEventListener(`click`,e=>{let t=r.querySelector(`.dz-linkrow input`);navigator.clipboard?.writeText(t?.value||``).then(()=>{e.target.textContent=`Copied!`,setTimeout(()=>{e.target.textContent=`Copy link`},1500)},()=>Zh(`Could not copy the link.`,`error`))});let u=async()=>{let t=lr(r.querySelector(`#dz-author-form`)),i=await fetch(`${Xh()}/m5t/v5/m5mDeliverable/${encodeURIComponent(e)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({content:t})}),a=await i.json().catch(()=>({}));if(!i.ok||!a.ok){if(i.status===409)return Zh(a.error||`This deliverable is no longer editable.`,`warning`),n(),await jh(),!1;throw Error(a.error||`save failed`)}return!0};Hh(r.querySelector(`#dz-author-form`),a.template,()=>{u().catch(()=>Zh(`Autosave failed. Use Save draft.`,`warning`))}),i.querySelector(`#dz-preview`).addEventListener(`click`,async e=>{let t=e.target.closest(`button`);if(!a.url){Zh(`No link available for this deliverable.`,`warning`);return}t.disabled=!0;try{await u()&&window.open(a.url,`_blank`)}catch(e){Zh(e.message||`Could not save before previewing.`,`error`)}t.disabled=!1}),i.querySelector(`#dz-save`).addEventListener(`click`,async e=>{let t=e.target;t.disabled=!0;try{await u()&&Zh(`Draft saved.`,`success`)}catch(e){Zh(e.message||`Could not save.`,`error`)}t.disabled=!1}),i.querySelector(`#dz-send`).addEventListener(`click`,async t=>{let r=t.target,a=(i.querySelector(`#dz-email`)?.value||``).trim();if(!a){Zh(`Enter the recipient email first.`,`warning`);return}r.disabled=!0;try{if(!await u())return;let t=await fetch(`${Xh()}/m5t/v5/m5mDeliverable/${encodeURIComponent(e)}/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({recipient_email:a})}),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`send failed`);Zh(r.data?.emailQueued?`Sent. ${a} will receive the review link.`:`Link created, but the email could not be queued. Copy the link and send it yourself.`,r.data?.emailQueued?`success`:`warning`),n(),await jh()}catch(e){Zh(e.message||`Could not send.`,`error`),r.disabled=!1}}),i.querySelector(`#dz-cancel`).addEventListener(`click`,async t=>{let r=t.target;r.disabled=!0;try{let t=await fetch(`${Xh()}/m5t/v5/m5mDeliverable/${encodeURIComponent(e)}/cancel`,{method:`POST`}),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`cancel failed`);Zh(`Deliverable cancelled. Its link no longer works.`,`info`),n(),await jh()}catch(e){Zh(e.message||`Could not cancel.`,`error`),r.disabled=!1}})}var Jh,Yh,W,Xh,Zh,Qh,$h,eg,G,tg,ng,rg,ig,ag,og=o((()=>{w(),Jh=u(f(),1),m(),hr(),Hr(),sn(),Yh={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},W=e=>String(e??``).replace(/[&<>"']/g,e=>Yh[e]),Xh=()=>C.getConfig?.().BASE_URL||``,Zh=(e,t=`info`)=>{try{Jh.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Qh=`managed_client`,$h=[[`ALL`,`All`],[`DRAFT`,`In progress`],[`SENT`,`Awaiting approval`],[`SUBMITTED`,`Returned`],[`CANCELLED`,`Cancelled`]],eg=Object.fromEntries($h),G={rows:[],clients:[],templates:[],filter:`ALL`,search:``},tg=!1,ng=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,rg=(e,t)=>e.some(e=>{let n=t?.[e.id];return Array.isArray(n)?n.length>0:!!(n&&String(n).trim())}),ig=(e,t)=>{let n=String(e[0]?.label||``).match(/^(.+?):\s/);return n?n[1]:t.toUpperCase()},ag={render:kh,init:Ah}})),sg=c({default:()=>yg,init:()=>pg,render:()=>fg});function cg(e){return e.status===`SENT`?{key:`PENDING`,label:`Pending your review`}:e.status===`SUBMITTED`&&e.signed?{key:`APPROVED`,label:`Approved`}:e.status===`SUBMITTED`?{key:`RETURNED`,label:`Returned with edits`}:null}function lg(){if(dr(),_g)return;let e=document.createElement(`style`);e.id=`m5t-deliverables-client-styles`,e.textContent=`
    .page-shell .dc-tablewrap { overflow-x: auto; }
    .page-shell .dc-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 560px; }
    .page-shell .dc-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .dc-table td { padding: 11px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .dc-table tr:last-child td { border-bottom: 0; }
    .page-shell .dc-name { font-weight: 600; }
    .page-shell .dc-when { color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .dc-badge { display: inline-block; white-space: nowrap; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .dc-badge[data-s="PENDING"] { background: #FEF3C7; color: #92400E; }
    .page-shell .dc-badge[data-s="APPROVED"] { background: #DCFCE7; color: #047857; }
    .page-shell .dc-badge[data-s="RETURNED"] { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }
    .page-shell .dc-act { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 5px 11px; border-radius: 8px; white-space: nowrap; }
    .page-shell .dc-act:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell td.dc-actcell { text-align: right; }
  `,document.head.appendChild(e),_g=!0}function ug(e,t){return!e.url&&t.key===`PENDING`?``:t.key===`PENDING`?`<button class="dc-act" type="button" data-url="${hg(e.url)}">Review</button>`:t.key!==`APPROVED`&&e.url&&e.editability?.editable?`<button class="dc-act" type="button" data-url="${hg(e.url)}">Update your review</button>`:``}function dg(e){let t=cg(e);return`<tr>
    <td><span class="dc-name">${hg(e.template_name||e.kind||`Deliverable`)}</span>${Number(e.revision)>1?`<span class="dc-when" style="margin-left:6px">Rev ${hg(e.revision)}</span>`:``}</td>
    <td><span class="dc-badge" data-s="${hg(t.key)}">${hg(t.label)}</span></td>
    <td class="dc-when">${e.sent_tz?hg(D(e.sent_tz)):`—`}</td>
    <td class="dc-when">${e.submitted_tz?hg(D(e.submitted_tz)):`—`}</td>
    <td class="dc-actcell">${ug(e,t)}</td>
  </tr>`}function fg(){return lg(),`
    <div class="page-shell" data-section="deliverables-client">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Deliverables</h1>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">approval</span> Your deliverables</h2>
        </div>
        <div class="card-body" id="dc-body">${vg(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function pg(){let e=document.getElementById(`dc-body`);if(!e)return;let t;try{let e=await fetch(`${gg()}/m5t/v5/m5mDeliverable`),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(`load failed`);t=(n.data||[]).filter(e=>cg(e))}catch{e.innerHTML=vg(`error`,`Could not load your deliverables. Please try again.`);return}if(!t.length){e.innerHTML=vg(`approval`,`Nothing to review right now.`);return}e.innerHTML=`
    <div class="dc-tablewrap">
      <table class="dc-table">
        <thead><tr><th>Deliverable</th><th>Status</th><th>Received</th><th>Returned</th><th></th></tr></thead>
        <tbody id="dc-tbody">${t.map(dg).join(``)}</tbody>
      </table>
    </div>`,e.querySelector(`#dc-tbody`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-url]`);t?.dataset.url&&window.open(t.dataset.url,`_blank`)})}var mg,hg,gg,_g,vg,yg,bg=o((()=>{w(),hr(),mg={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},hg=e=>String(e??``).replace(/[&<>"']/g,e=>mg[e]),gg=()=>C.getConfig?.().BASE_URL||``,_g=!1,vg=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,yg={render:fg,init:pg}})),xg=c({init:()=>Ig,render:()=>Fg});function Sg(e){let t=a_(e);if(!t)return``;try{return new Date(t).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`})}catch{return``}}function Cg(e){let t=a_(e);if(!t)return``;try{let n=Date.now()-new Date(t).getTime();if(n<0)return Sg(e);let r=n/36e5;return r<1?`${Math.max(1,Math.floor(n/6e4))}m ago`:r<24?`${Math.floor(r)}h ago`:r<48?`Yesterday`:Sg(e)}catch{return Sg(e)}}function wg(){if(Zg)return;let e=document.createElement(`style`);e.id=`m5t-leads-styles`,e.textContent=`
    /* The slot reserves the chip's exact height at first paint - the chip
       loads after the list, and content that appears late must fill space
       that already exists, never push the page down. Empty states (read-only
       viewer, no CRM, fetch failure) keep the same quiet band. */
    .page-shell #leads-crm-slot { min-height: 27px; margin-top: 8px; }
    .page-shell .leads-crm-chip { display: inline-flex; align-items: center; gap: 6px; height: 27px; font-size: 0.78rem; font-weight: 600; padding: 0 11px; border-radius: 999px; text-decoration: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F4F7FB); color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-crm-chip:hover { border-color: var(--color-primary-600, #0072BA); color: var(--color-accent-hover, #00558D); }
    .page-shell .leads-crm-chip .material-symbols-outlined { font-size: 15px; }
    .page-shell .leads-crm-chip__dom { font-weight: 500; color: var(--color-text-subtle, #6C7C9A); margin-left: 4px; }
    .page-shell .leads-crm-chip.warn { border-color: var(--color-warning, #F5DF4D); background: var(--color-warning-soft, #FEF3C7); color: var(--color-warning-text, #92400E); }
    .page-shell .leads-crm-chip.ghost { border-style: dashed; background: transparent; }
    .page-shell .leads-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .leads-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .leads-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .leads-filter .leads-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .leads-clientsel { font: inherit; font-size: 0.8rem; font-weight: 600; padding: 7px 10px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; max-width: 220px; }
    .page-shell .leads-searchwrap { position: relative; margin-left: auto; }
    .page-shell .leads-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .leads-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 230px; }
    .page-shell .leads-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .leads-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    /* Day filter chip: the ONLY way out of a trend-chart drill-through, so it reads as
       a removable token rather than a label. */
    .page-shell .leads-daychip { display: inline-flex; align-items: center; gap: 6px; appearance: none; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; white-space: nowrap; padding: 6px 10px; border-radius: 999px; border: 1px solid var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.1)); color: var(--color-accent-hover, #00558D); }
    .page-shell .leads-daychip:hover { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .leads-daychip .material-symbols-outlined { font-size: 16px; }
    .page-shell .leads-daychip__x { opacity: 0.7; }
    .page-shell .leads-daychip:hover .leads-daychip__x { opacity: 1; }

    .page-shell .leads-tablewrap { overflow-x: auto; }
    .page-shell .leads-table { width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 0.88rem; min-width: 1000px; }
    /* Book mode adds the Client column, so the same fixed 300px of Status/Captured/
       actions has to fit alongside 82% of flexible columns instead of 70%. Its own
       floor keeps those three from being squeezed below their content. */
    .page-shell .leads-table--book { min-width: 1200px; }
    .page-shell .leads-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .page-shell .leads-table th.num, .page-shell .leads-table td.num { text-align: right; }
    /* Sortable headers. The <th> keeps its own padding/typography (above); the button
       inherits all of it and adds only the affordance, so a sortable column and a plain
       one line up exactly rather than the sortable ones sitting a pixel off. */
    .page-shell .leads-table th.leads-th--sort { padding: 0; }
    .page-shell .leads-sortbtn {
      display: inline-flex; align-items: center; gap: 4px; width: 100%;
      padding: 8px 12px; appearance: none; background: none; border: 0;
      font: inherit; color: inherit; letter-spacing: inherit; text-transform: inherit;
      cursor: pointer; white-space: nowrap;
    }
    .page-shell .leads-table th.num .leads-sortbtn { justify-content: flex-end; }
    .page-shell .leads-sortbtn:hover { color: var(--color-text, #0B1220); }
    .page-shell .leads-sortbtn:focus-visible { outline: 2px solid var(--color-primary-600, #0072BA); outline-offset: -2px; }
    .page-shell .leads-table th.is-sorted .leads-sortbtn { color: var(--color-primary-600, #0072BA); }
    .page-shell .leads-sortarrow { font-size: 15px; line-height: 1; }
    /* The neutral "this is sortable" glyph stays quiet until you go looking for it;
       the active direction arrow does not. Without this the header row reads as six
       competing arrows and the one that matters is lost among them. */
    .page-shell .leads-table th:not(.is-sorted) .leads-sortarrow { opacity: 0; transition: opacity 0.12s ease; }
    .page-shell .leads-table th:not(.is-sorted):hover .leads-sortarrow,
    .page-shell .leads-table th:not(.is-sorted):focus-within .leads-sortarrow { opacity: 0.55; }
    html.ff-no-animations .page-shell .leads-table th:not(.is-sorted) .leads-sortarrow { transition: none; }
    @media (prefers-reduced-motion: reduce) { .page-shell .leads-table th:not(.is-sorted) .leads-sortarrow { transition: none; } }
    /* NOTE: text-overflow here is inert and kept only because removing it invites
       someone to "restore" it. Ellipsis needs a single line, and this rule sets no
       white-space:nowrap — real truncation is done by the inner spans (.leads-name,
       .leads-sub, a.leads-contactlink), which each set overflow+ellipsis+nowrap
       themselves. overflow:hidden IS load-bearing: it keeps a cell's content inside
       its fixed-layout column. That combination is also the trap behind the Status
       clipping — a cell squeezed under its content clips silently here rather than
       widening the table, so the wrapper's overflow-x never gets anything to scroll.
       Size columns to fit (see colgroup below) rather than relying on this to cope. */
    .page-shell .leads-table td { padding: 10px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; overflow: hidden; text-overflow: ellipsis; }
    .page-shell .leads-row { cursor: pointer; }
    .page-shell .leads-row:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .leads-row:focus-visible { outline: 2px solid var(--color-primary-600, #0072BA); outline-offset: -2px; }
    .page-shell .leads-open { text-align: right; }
    .page-shell .leads-open .material-symbols-outlined { font-size: 20px; color: var(--color-border, #D4DCE8); vertical-align: middle; transition: color .12s ease, transform .12s ease; }
    .page-shell .leads-row:hover .leads-open .material-symbols-outlined { color: var(--color-accent, #0072BA); transform: translateX(2px); }
    .page-shell .leads-who { display: flex; align-items: center; gap: 10px; min-width: 0; }
    .page-shell .leads-who > span:last-child { min-width: 0; }
    .page-shell .leads-avatar { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.72rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .leads-name { font-weight: 600; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .leads-sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .leads-muted { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell a.leads-contactlink { color: inherit; text-decoration: none; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell a.leads-contactlink:hover { color: var(--color-accent, #0072BA); text-decoration: underline; }
    .page-shell .leads-fresh { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--color-success, #009473); margin-right: 6px; vertical-align: 1px; }
    .page-shell .leads-status { font: inherit; font-size: 0.76rem; font-weight: 600; padding: 5px 8px; border-radius: 8px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; max-width: 100%; }
    /* nowrap so a single long status ("UNQUALIFIED") can never break mid-word inside
       a tight cell — td has overflow:hidden, so a wrap there reads as truncation with
       no scrollbar to reach the rest. */
    .page-shell .leads-badge { display: inline-block; white-space: nowrap; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-badge[data-s="NEW"] { background: #DBEAFE; color: #1D4ED8; }
    .page-shell .leads-badge[data-s="WORKING"] { background: #FEF3C7; color: #92400E; }
    .page-shell .leads-badge[data-s="QUALIFIED"], .page-shell .leads-badge[data-s="CONVERTED"] { background: #DCFCE7; color: #047857; }

    /* Two-pane layout: table left, detail panel right — but the panel column only exists
       once a lead is actually selected.
       It used to reserve its 360px permanently while holding nothing but "Click to see
       lead information", and because the table in the left column has min-width 1000px
       (1200px in book mode), that reserved strip is exactly what pushed the table past
       the viewport and produced a horizontal scrollbar on the default view. The space was
       being spent to display a prompt.
       Driven by [data-has-selection] on the layout element, so the grid owns the widths
       rather than JS; the gap collapses with the column so there is no phantom 24px left
       behind either. */
    .page-shell .leads-layout { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; align-items: start; }
    .page-shell .leads-layout[data-has-selection="true"] { grid-template-columns: minmax(0, 1fr) 360px; gap: 24px; }
    .page-shell .leads-layout:not([data-has-selection="true"]) .leads-panel { display: none; }
    /* Clears the sticky sub-nav instead of guessing 24px from the viewport top. */
    /* Sticks to the SCROLL PANE (#app), whose top already sits below the contextual top
       bar — so this is a plain gap, not subnav-height plus a gap as it was when the whole
       document scrolled and the panel had to clear that bar itself. */
    .page-shell .leads-panel { position: sticky; top: 24px; max-height: calc(100dvh - var(--subnav-height, 61px) - 48px); overflow-y: auto; }
    @media (max-width: 1180px) {
      .page-shell .leads-layout[data-has-selection="true"] { grid-template-columns: 1fr; }
      .page-shell .leads-panel { position: static; max-height: none; }
    }
    .page-shell .leads-row.selected td { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-row.selected .leads-open .material-symbols-outlined { color: var(--color-accent, #0072BA); }

    .page-shell .leads-det__head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .page-shell .leads-det__ava { width: 42px; height: 42px; font-size: 0.9rem; }
    .page-shell .leads-det__name { font-family: var(--font-display, inherit); font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
    .page-shell .leads-det__contact { display: flex; gap: 8px; margin: 4px 0 14px; flex-wrap: wrap; }
    .page-shell .leads-det__cbtn { display: inline-flex; align-items: center; gap: 6px; text-decoration: none; font-size: 0.82rem; font-weight: 600; padding: 8px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); color: var(--color-accent-hover, #00558D); }
    .page-shell .leads-det__cbtn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-det__cbtn .material-symbols-outlined { font-size: 17px; }
    .page-shell .leads-det__field { padding: 9px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); display: flex; gap: 12px; }
    .page-shell .leads-det__k { flex: 0 0 96px; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .leads-det__v { flex: 1; font-size: 0.86rem; word-break: break-word; }
    .page-shell .leads-det__notes { white-space: pre-wrap; font-size: 0.84rem; line-height: 1.5; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F4F7FB); border-radius: 10px; padding: 12px 14px; margin-top: 14px; }
    /* Destructive action sits below everything else and behind a divider, so it is
       never adjacent to the routine controls (status, contact) a user clicks often. */
    .page-shell .leads-det__actions { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--color-surface-2, #EAF0F7); }
    .page-shell .leads-det__del { display: inline-flex; align-items: center; gap: 6px; appearance: none; cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; padding: 7px 12px; border-radius: 9px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-danger, #DD4124); }
    .page-shell .leads-det__del:hover:not(:disabled) { background: var(--color-danger-soft, rgba(221,65,36,0.08)); border-color: var(--color-danger, #DD4124); }
    .page-shell .leads-det__del:disabled { opacity: 0.55; cursor: default; }
    .page-shell .leads-det__del .material-symbols-outlined { font-size: 17px; }
  `,document.head.appendChild(e),Zg=!0}function Tg(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Eg(e){return`<select class="leads-status" data-id="${q(e.id)}" data-act="status" onclick="event.stopPropagation()">
    ${$g.map(t=>`<option value="${t}" ${e.status===t?`selected`:``}>${t[0]}${t.slice(1).toLowerCase()}</option>`).join(``)}
  </select>`}function Dg(e){let t=K.magnetNames[e.magnet_guid]||e.lead_source||`—`,n=e.phone?String(e.phone).replace(/[^\d+]/g,``):``;return`
    <tr class="leads-row${String(e.id)===K.selectedId?` selected`:``}" data-id="${q(e.id)}" tabindex="0" role="button" aria-label="Open lead ${q(r_(e))}">
      <td>
        <span class="leads-who">
          <span class="leads-avatar">${q(i_(e))}</span>
          <span><span class="leads-name">${q(r_(e))}</span>${e.company?`<span class="leads-sub">${q(e.company)}</span>`:``}</span>
        </span>
      </td>
      ${K.book?`<td>${ba(K.ownerNames[e.owner_guid]||``)||`<span class="leads-muted">—</span>`}</td>`:``}
      <td>
        ${e.email?`<a class="leads-contactlink" href="mailto:${q(e.email)}" title="Email ${q(e.email)}">${q(e.email)}</a>`:`<span class="leads-muted">—</span>`}
        ${e.phone?`<a class="leads-contactlink leads-sub" href="tel:${q(n)}" title="Call ${q(e.phone)}">${q(e.phone)}</a>`:``}
      </td>
      <td>${e.product_interest?q(e.product_interest):`<span class="leads-muted">—</span>`}</td>
      <td><span class="leads-sub">${q(t)}</span>${e.utm_campaign||e.utm_source?`<span class="leads-sub" title="Campaign / source">${q(e.utm_campaign||e.utm_source)}${e.gclid?` <span class="leads-badge" data-s="QUALIFIED" style="font-size:0.58rem;padding:1px 6px">Ads</span>`:``}</span>`:``}</td>
      <td>${K.canManage?Eg(e):`<span class="leads-badge" data-s="${q(e.status)}">${q(e.status)}</span>`}</td>
      <td class="num leads-muted" style="white-space:nowrap" title="${q(Sg(e))}">${o_(e)?`<span class="leads-fresh" title="Captured in the last 24 hours"></span>`:``}${q(Cg(e))}</td>
      <td class="leads-open" aria-hidden="true"><span class="material-symbols-outlined">chevron_right</span></td>
    </tr>`}function Og(e){let t=K.search.trim().toLowerCase();if(!t)return!0;let n=[e.first_name,e.last_name,e.email,e.company,e.phone,e.product_interest,K.magnetNames[e.magnet_guid],K.book?K.ownerNames[e.owner_guid]:``,e.utm_campaign,e.utm_source].filter(Boolean).join(` `).toLowerCase();return t.split(/\s+/).every(e=>n.includes(e))}function kg(e){let t=u_[K.range];if(!t)return!0;let n=a_(e);if(!n)return!1;let r=new Date(Date.now()-(t-1)*864e5).toISOString().slice(0,10);return n.slice(0,10)>=r}function Ag(){return K.leads.filter(e=>(K.filter===`ALL`||e.status===K.filter)&&s_(e)&&l_(e)&&Og(e)&&c_(e)&&kg(e))}function jg(){let e=Ag(),t=f_[K.sort.key];if(!t)return e;let n=K.sort.dir===`asc`?1:-1;return e.slice().sort((e,r)=>{let i=t.value(e),a=t.value(r);return i===``&&a===``?0:i===``?1:a===``?-1:i===a?0:i<a?-n:n})}function Mg(e,t=``){let n=f_[e],r=K.sort.key===e,i=r?K.sort.dir:``;return`<th class="leads-th--sort${t?` ${t}`:``}${r?` is-sorted`:``}"
      aria-sort="${r?i===`asc`?`ascending`:`descending`:`none`}">
      <button type="button" class="leads-sortbtn" data-sort="${e}"
        title="Sort by ${q(n.label)}${r?i===`asc`?` (descending)`:` (ascending)`:``}">
        ${q(n.label)}<span class="leads-sortarrow material-symbols-outlined" aria-hidden="true">${r?i===`asc`?`arrow_upward`:`arrow_downward`:`unfold_more`}</span>
      </button>
    </th>`}function Ng(e){return f_[e]?(K.sort.key===e?K.sort.dir=K.sort.dir===`asc`?`desc`:`asc`:K.sort={key:e,dir:f_[e].dir},K.shown=Qg(),!0):!1}function Pg(){if(!K.day)return``;let e=K.day;try{e=new Date(`${K.day}T00:00:00Z`).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`,timeZone:`UTC`})}catch{}return`<button class="leads-daychip" type="button" id="leads-dayclear" title="Show every day again">
    <span class="material-symbols-outlined" aria-hidden="true">event</span>${q(e)}
    <span class="material-symbols-outlined leads-daychip__x" aria-hidden="true">close</span>
  </button>`}function Fg(){wg(),oa();let e=k();return`
    <div class="page-shell" data-section="leads">
      ${e?`
      <div class="dashboard-card" style="margin-bottom:24px">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="pf-picker-body">${Tg(`hourglass_empty`,`Loading…`)}</div>
      </div>`:``}
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Leads</h1>
          <p class="page-description">${e?`All leads across your clients.`:`All your magnet leads.`}</p>
          ${e?``:`<div id="leads-crm-slot"></div>`}
        </div>
        <button class="btn btn-secondary" id="leads-export" type="button" style="display:none">
          <span class="material-symbols-outlined" aria-hidden="true">download</span>
          Export CSV
        </button>
      </div>
      <div class="leads-layout">
        <div class="dashboard-card">
          <div class="card-body" id="leads-body">
            ${Tg(`hourglass_empty`,`Loading leads…`)}
          </div>
        </div>
        <aside class="dashboard-card leads-panel" aria-label="Lead detail">
          <div class="card-body" id="leads-panel-body">${p_()}</div>
        </aside>
      </div>
    </div>`}async function Ig(){document.getElementById(`leads-export`)?.addEventListener(`click`,Yg);let e=Ca(Ta.LEADS_SEARCH),t=Ca(Ta.LEADS_DAY);if((e||t)&&(K.search=e||``,K.day=t||``,K.filter=`ALL`,K.clientFilter=`ALL`,K.magnetFilter=`ALL`,K.range=`ALL`,K.shown=Qg()),k()){let e=e=>Number(e||0).toLocaleString();pa(n_(),[{h:`Leads · wk`,td:t=>e(t.leads.this_week)},{h:`Leads · total`,td:t=>e(t.leads.total)},{h:`Compl.`,td:e=>e.completion_rate==null?`—`:`${e.completion_rate}%`}],{emptyMsg:`No client orgs yet. Create one under Clients first.`})}await Rg(),Lg()}async function Lg(){let e=document.getElementById(`leads-crm-slot`);if(e)try{let{denied:t,providers:n,configured:r}=await yc();if(t)return;let i=m_.map(e=>{let t=cc[e],i=gc(n,e);return{p:t,conn:i,status:_c(t,i,!!r?.[e])}}),a=i.filter(e=>e.status===`connected`),o=i.find(e=>e.status===`broken`);if(a.length){let t=a.map(e=>e.p.label).join(` and `),n=a.length===1&&a[0].conn?.external_account?.hub_domain||``;e.innerHTML=`
        <a class="leads-crm-chip" href="${a.length===1?`#/settings/integrations/${a[0].p.urlSlug}`:`#/settings/integrations`}">
          <span class="material-symbols-outlined" aria-hidden="true">sync_alt</span>
          Syncing to ${q(t)}${n?`<span class="leads-crm-chip__dom">${q(n)}</span>`:``}
        </a>`}else o?e.innerHTML=`
        <a class="leads-crm-chip warn" href="#/settings/integrations/${o.p.urlSlug}">
          <span class="material-symbols-outlined" aria-hidden="true">sync_problem</span>
          ${q(o.p.label)} needs reconnecting
        </a>`:i.some(e=>e.status===`idle`)&&K.canManage&&(e.innerHTML=`
        <a class="leads-crm-chip ghost" href="#/settings/integrations">
          <span class="material-symbols-outlined" aria-hidden="true">hub</span>
          Connect a CRM
        </a>`)}catch{}}async function Rg(){let e=document.getElementById(`leads-body`);if(e){try{let[e,t]=await Promise.all([fetch(`${n_()}/m5t/v5/m5mLead`),fetch(`${n_()}/m5t/v5/magnets`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Failed to load`);if(K.leads=(n.data||[]).filter(e=>![`DELETED`,`ARCHIVED`].includes(e.status)),K.total=Number.isFinite(n.total)?n.total:K.leads.length,K.truncated=K.total>(n.data||[]).length,K.book=k(),K.ownerNames=K.book?ma():{},t){let e=await t.json().catch(()=>({}));K.magnetNames={},(e.magnets||[]).forEach(e=>{K.magnetNames[e.guid]=e.name,e.owner_guid&&e.owner_name&&!K.ownerNames[e.owner_guid]&&(K.ownerNames[e.owner_guid]=e.owner_name)}),K.canManage=!!e.canManage}}catch{e.innerHTML=Tg(`error`,`Could not load your leads. Please try again.`);return}zg()}}function zg(){let e=document.getElementById(`leads-body`),t=document.getElementById(`leads-export`);if(!e)return;if(t&&(t.style.display=K.leads.length?``:`none`),!K.leads.length){e.innerHTML=Tg(`inbox`,`No leads captured yet. Publish a magnet and share it to start collecting.`),qg();return}let n=K.leads.filter(e=>s_(e)&&l_(e)&&kg(e)),r={ALL:n.length};$g.forEach(e=>{r[e]=n.filter(t=>t.status===e).length});let i=[...new Set(K.leads.map(e=>e.magnet_guid).filter(Boolean))].map(e=>({guid:e,name:K.magnetNames[e]||`(unnamed magnet)`})).sort((e,t)=>e.name.localeCompare(t.name)),a=K.book?[...new Set(K.leads.map(e=>e.owner_guid).filter(Boolean))].map(e=>({guid:e,name:K.ownerNames[e]||e})).sort((e,t)=>e.name.localeCompare(t.name)):[];e.innerHTML=`
    <div class="leads-bar">
      <div class="leads-filter">
        ${[`ALL`,...$g].map(e=>`<button data-filter="${e}" class="${K.filter===e?`active`:``}">${e===`ALL`?`All`:e[0]+e.slice(1).toLowerCase()}${r[e]?`<span class="leads-pillnum">${r[e]}</span>`:``}</button>`).join(``)}
      </div>
      ${K.book&&a.length>1?`
      <select class="leads-clientsel" id="leads-clientsel" aria-label="Filter by client">
        <option value="ALL">All clients</option>
        ${a.map(e=>`<option value="${q(e.guid)}" ${K.clientFilter===e.guid?`selected`:``}>${q(e.name)}</option>`).join(``)}
      </select>`:``}
      ${i.length>1?`
      <select class="leads-clientsel" id="leads-magnetsel" aria-label="Filter by magnet">
        <option value="ALL">All magnets</option>
        ${i.map(e=>`<option value="${q(e.guid)}" ${K.magnetFilter===e.guid?`selected`:``}>${q(e.name)}</option>`).join(``)}
      </select>`:``}
      <select class="leads-clientsel" id="leads-rangesel" aria-label="Filter by date captured">
        ${Object.keys(u_).map(e=>`<option value="${e}" ${K.range===e?`selected`:``}>${q(d_[e])}</option>`).join(``)}
      </select>
      ${Pg()}
      <span class="leads-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="leads-search" id="leads-search" type="search" placeholder="Search leads" value="${q(K.search)}" aria-label="Search leads" />
      </span>
      <span class="leads-count" id="leads-countlbl"></span>
    </div>
    <div id="leads-tablezone"></div>`,e.querySelector(`.leads-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(K.filter=t.dataset.filter,K.shown=Qg(),zg())}),e.querySelector(`#leads-clientsel`)?.addEventListener(`change`,e=>{K.clientFilter=e.target.value,K.shown=Qg(),zg()}),e.querySelector(`#leads-magnetsel`)?.addEventListener(`change`,e=>{K.magnetFilter=e.target.value,K.shown=Qg(),zg()}),e.querySelector(`#leads-rangesel`)?.addEventListener(`change`,e=>{K.range=e.target.value,K.day=``,K.shown=Qg(),zg()}),e.querySelector(`#leads-dayclear`)?.addEventListener(`click`,()=>{K.day=``,K.shown=Qg(),zg()}),e.querySelector(`#leads-search`)?.addEventListener(`input`,e=>{K.search=e.target.value,K.shown=Qg(),Bg()}),Bg()}function Bg(){let e=document.getElementById(`leads-tablezone`),t=document.getElementById(`leads-countlbl`);if(!e)return;let n=jg(),r=n.slice(0,K.shown),i=K.book?8:7;t&&(t.textContent=`${n.length} of ${K.leads.length}`),e.innerHTML=`
    <div class="leads-tablewrap">
      <table class="leads-table${K.book?` leads-table--book`:``}">
        ${h_()}
        <thead><tr>${Mg(`name`)}${K.book?`<th>Client</th>`:``}${Mg(`contact`)}<th>Interest</th><th>Magnet</th><th>Status</th>${Mg(`captured`,`num`)}<th></th></tr></thead>
        <tbody id="leads-tbody">${r.map(Dg).join(``)||`<tr><td colspan="${i}"><div class="leads-muted" style="padding:14px 4px">${K.search.trim()?`No leads match your search.`:`No ${K.filter.toLowerCase()} leads.`}</div></td></tr>`}</tbody>
      </table>
    </div>
    ${en({total:n.length,shown:K.shown,size:K.pageSize,noun:`leads`})}
    ${K.truncated?`<div class="leads-muted" style="padding:10px 4px">Showing your ${K.leads.length.toLocaleString()} most recent leads of ${K.total.toLocaleString()}. Search and filters cover these; older leads aren't included yet.</div>`:``}`,e.querySelector(`thead`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-sort]`);t&&Ng(t.dataset.sort)&&Bg()}),tn(e,{total:n.length,onSize:(e,t)=>{K.pageSize=t,K.shown=e,Bg()}}),e.querySelector(`#leads-tbody`)?.addEventListener(`change`,Vg),e.querySelector(`#leads-tbody`)?.addEventListener(`click`,e=>{if(e.target.closest(`.leads-status, a.leads-contactlink`))return;let t=e.target.closest(`.leads-row`);t&&Hg(t.dataset.id)}),e.querySelector(`#leads-tbody`)?.addEventListener(`keydown`,e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`.leads-row`);t&&e.target===t&&(e.preventDefault(),Hg(t.dataset.id))})}async function Vg(e){let t=e.target.closest(`.leads-status`);if(!t)return;let n=t.dataset.id,r=K.leads.find(e=>String(e.id)===String(n)),i=t.value,a=r?.status;try{if(!(await(await fetch(`${n_()}/m5t/v5/m5mLead/${encodeURIComponent(n)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:i})})).json().catch(()=>({}))).ok)throw Error();r&&(r.status=i),t_(`Marked ${i[0]}${i.slice(1).toLowerCase()}`,`success`)}catch{t.value=a||`NEW`,t_(`Could not update status`,`danger`);return}try{String(n)===K.selectedId&&qg(),K.filter!==`ALL`&&zg()}catch(e){console.warn(`[leads] re-render after status change failed:`,e)}}function Hg(e){K.selectedId=String(e),document.querySelectorAll(`.leads-row`).forEach(e=>e.classList.toggle(`selected`,e.dataset.id===K.selectedId)),qg()}function Ug(e,t){let n=Array.isArray(e.tags)?e.tags:[];for(let e=n.length-1;e>=0;e--)if(n[e]&&n[e].tag===t&&n[e].value!=null)return String(n[e].value);return``}function Wg(e){let t=Ug(e,`appointment_start`);if(!t)return null;let n=Ug(e,`appointment_status`)||`booked`,r=Ug(e,`appointment_timezone`),i=Ug(e,`appointment_event_type`),a=new Date(t),o=t;if(!Number.isNaN(a.getTime())){let e={weekday:`short`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`};try{o=new Intl.DateTimeFormat(void 0,r?{...e,timeZone:r}:e).format(a)}catch{o=new Intl.DateTimeFormat(void 0,e).format(a)}}return{when:o,status:n,type:i,start:t}}function Gg(e){let t=Array.isArray(e.tags)?e.tags:[],n=null;for(let e of t)if(!(!e||!e.tag)){if(e.tag===`callrail_call_id`){n={};continue}n&&e.tag.indexOf(`call_`)===0&&e.value!=null&&(n[e.tag]=String(e.value))}if(!n||!n.call_started)return null;let r=n.call_started,i=new Date(r),a=r;Number.isNaN(i.getTime())||(a=new Intl.DateTimeFormat(void 0,{weekday:`short`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}).format(i));let o=Number(n.call_duration)||0,s=o?o<60?`${o}s`:`${Math.floor(o/60)}m ${o%60}s`:``;return{when:a,dur:s,source:n.call_source||``,answered:n.call_answered||``,recording:n.call_recording_player||``,started:r}}function Kg(e){let t=Array.isArray(e.tags)?e.tags:[],n=e=>{for(let n=t.length-1;n>=0;n--)if(t[n]&&t[n].tag===e&&t[n].value!=null)return String(t[n].value);return``};if(!n(`lsa_lead_id`))return null;let r=n(`lsa_dispute_candidate`);return{type:n(`lsa_lead_type`),category:n(`lsa_category`),status:n(`lsa_status`).toLowerCase(),charged:n(`lsa_charged`)===`yes`,email:n(`lsa_email`),missed:n(`lsa_missed`)===`yes`,dispute:r&&r!==`no`?r:``}}function qg(){let e=document.getElementById(`leads-panel-body`);if(!e)return;let t=K.leads.find(e=>String(e.id)===K.selectedId),n=document.querySelector(`.leads-layout`);if(n&&(n.dataset.hasSelection=t?`true`:`false`),!t){e.innerHTML=p_();return}let r=K.magnetNames[t.magnet_guid]||t.lead_source||`—`,i=Wg(t),[a,o]=i?g_[i.status]||g_.booked:[``,``],s=Gg(t),c=Kg(t),l=(e,t)=>t?`<div class="leads-det__field"><span class="leads-det__k">${q(e)}</span><span class="leads-det__v">${q(t)}</span></div>`:``;e.innerHTML=`
    <div class="leads-det__head">
      <span class="leads-avatar leads-det__ava">${q(i_(t))}</span>
      <div>
        <div class="leads-det__name">${q(r_(t))}</div>
        <span class="leads-badge" data-s="${q(t.status)}">${q(t.status)}</span>
      </div>
    </div>
    <div class="leads-det__contact">
      ${t.email?`<a class="leads-det__cbtn" href="mailto:${q(t.email)}"><span class="material-symbols-outlined" aria-hidden="true">mail</span>Email</a>`:``}
      ${t.phone?`<a class="leads-det__cbtn" href="tel:${q(String(t.phone).replace(/[^\d+]/g,``))}"><span class="material-symbols-outlined" aria-hidden="true">call</span>Call</a>`:``}
    </div>
    ${l(`Email`,t.email)}
    ${l(`Phone`,t.phone)}
    ${l(`Mobile`,t.mobile)}
    ${l(`Company`,t.company)}
    ${l(`Title`,t.title)}
    ${l(`Interest`,t.product_interest)}
    ${l(`Location`,[t.city,t.state].filter(Boolean).join(`, `))}
    ${l(`Channel`,t.lead_source)}
    ${K.book?l(`Client`,K.ownerNames[t.owner_guid]||``):``}
    ${l(`Magnet`,r)}
    ${l(`Captured`,Sg(t))}
    ${i?`<div class="leads-det__field"><span class="leads-det__k">Appointment</span><span class="leads-det__v">${q([i.when,i.type].filter(Boolean).join(` · `))} <span class="leads-badge" data-s="${q(a)}">${q(o)}</span></span></div>`:``}
    ${s?`<div class="leads-det__field"><span class="leads-det__k">Last call</span><span class="leads-det__v">${q([s.when,s.dur,s.source].filter(Boolean).join(` · `))} <span class="leads-badge" data-s="${s.answered===`no`?`WORKING`:`QUALIFIED`}">${s.answered===`no`?`Missed`:`Answered`}</span>${s.recording&&/^https:\/\//i.test(s.recording)?` <a href="${q(s.recording)}" target="_blank" rel="noopener">Recording</a>`:``}</span></div>`:``}
    ${c?`<div class="leads-det__field"><span class="leads-det__k">Local Services</span><span class="leads-det__v">${q([c.type,c.category,c.status].filter(Boolean).join(` · `)||`lead`)} <span class="leads-badge" data-s="${c.charged?`QUALIFIED`:`WORKING`}">${c.charged?`Charged`:`Not charged`}</span>${c.missed?` <span class="leads-badge" data-s="UNQUALIFIED">Missed call</span>`:``}${c.dispute?` <span class="leads-badge" data-s="WORKING">Dispute candidate</span>`:``}</span></div>`:``}
    ${c&&c.email&&!t.email?l(`LSA email`,c.email):``}
    ${l(`Campaign`,t.utm_campaign)}
    ${l(`Ad source`,[t.utm_source,t.utm_medium].filter(Boolean).join(` / `))}
    ${t.gclid?`<div class="leads-det__field"><span class="leads-det__k">Paid click</span><span class="leads-det__v"><span class="leads-badge" data-s="QUALIFIED">Google Ads</span></span></div>`:``}
    ${t.description?`<div class="leads-det__notes">${q(t.description)}</div>`:``}
    ${K.canManage?`
      <div class="leads-det__actions">
        <button type="button" class="leads-det__del" data-action="delete-lead" data-id="${q(t.id)}">
          <span class="material-symbols-outlined" aria-hidden="true">delete</span>Remove lead
        </button>
      </div>`:``}`,e.querySelector(`[data-action="delete-lead"]`)?.addEventListener(`click`,Jg)}async function Jg(e){let t=e.currentTarget?.dataset?.id,n=K.leads.find(e=>String(e.id)===String(t));if(!n)return;let r=r_(n);if(!window.confirm(`Remove ${r} from your leads?\n\nThis takes the lead out of your dashboard, lists and exports. The record is kept in our system, and this address can be captured again if they come back through one of your magnets.`))return;let i=e.currentTarget;i.disabled=!0;try{let e=await fetch(`${n_()}/m5t/v5/m5mLead/${encodeURIComponent(t)}`,{method:`DELETE`}),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`HTTP ${e.status}`);K.leads=K.leads.filter(e=>String(e.id)!==String(t)),K.selectedId=null,t_(`${r} removed`,`success`),zg()}catch{i.disabled=!1,t_(`Could not remove that lead. Please try again.`,`danger`)}}function Yg(){let e=jg();if(!e.length){t_(`Nothing to export`,`info`);return}let t=[`first_name`,`last_name`,`email`,`phone`,`company`,`product_interest`,`lead_source`,`utm_source`,`utm_medium`,`utm_campaign`,`gclid`,`status`],n=e=>`"${String(e??``).replace(/"/g,`""`)}"`,r=[[...K.book?[`client`]:[],...t,`magnet`,`captured`,`appointment`,`last_call`].join(`,`)];for(let i of e){let e=Wg(i),a=Gg(i);r.push([...K.book?[n(K.ownerNames[i.owner_guid]||``)]:[],...t.map(e=>n(i[e])),n(K.magnetNames[i.magnet_guid]||i.lead_source||``),n(Sg(i)),n(e?`${e.start} (${e.status})`:``),n(a?`${a.started} (${a.answered===`no`?`missed`:`answered`})`:``)].join(`,`))}let i=new Blob([r.join(`
`)],{type:`text/csv`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`leads-${K.filter.toLowerCase()}.csv`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a),t_(`Exported ${e.length} lead${e.length===1?``:`s`}`,`success`)}var Xg,Zg,K,Qg,$g,e_,q,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__=o((()=>{w(),Xg=u(f(),1),m(),xa(),Da(),sn(),Wc(),Zg=!1,K={leads:[],magnetNames:{},filter:`ALL`,canManage:!1,book:!1,ownerNames:{},clientFilter:`ALL`,search:``,shown:25,selectedId:null,day:``,sort:{key:`captured`,dir:`desc`},magnetFilter:`ALL`,range:`ALL`,pageSize:25,total:0,truncated:!1},Qg=()=>K.pageSize===`ALL`?2**53-1:Number(K.pageSize)||25,$g=[`NEW`,`WORKING`,`QUALIFIED`,`UNQUALIFIED`,`CONVERTED`,`EXPORTED`],e_={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},q=e=>String(e??``).replace(/[&<>"']/g,e=>e_[e]),t_=(e,t=`info`)=>{try{Xg.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},n_=()=>C.getConfig?.().BASE_URL||``,r_=e=>[e.first_name,e.last_name].filter(Boolean).join(` `).trim()||e.email||`(no name)`,i_=e=>(r_(e).split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``)||`?`).toUpperCase(),a_=e=>e.created?.created_tz||``,o_=e=>{let t=a_(e);if(!t)return!1;try{return Date.now()-new Date(t).getTime()<864e5}catch{return!1}},s_=e=>K.clientFilter===`ALL`||e.owner_guid===K.clientFilter,c_=e=>!K.day||a_(e).slice(0,10)===K.day,l_=e=>K.magnetFilter===`ALL`||e.magnet_guid===K.magnetFilter,u_={ALL:null,7:7,30:30,90:90},d_={ALL:`All time`,7:`Last 7 days`,30:`Last 30 days`,90:`Last 90 days`},f_={name:{label:`Name`,dir:`asc`,value:e=>r_(e).toLowerCase()},contact:{label:`Contact`,dir:`asc`,value:e=>String(e.email||e.phone||``).toLowerCase()},captured:{label:`Captured`,dir:`desc`,value:e=>a_(e)}},p_=()=>Tg(`touch_app`,`Click to see lead information.`),m_=[`hubspot`,`zoho`,`salesforce`,`gohighlevel`],h_=()=>`
  <colgroup>
    <col style="width:22%">
    ${K.book?`<col style="width:12%">`:``}
    <col style="width:20%">
    <col style="width:13%">
    <col style="width:15%">
    <col style="width:150px">
    <col style="width:110px">
    <col style="width:40px">
  </colgroup>`,g_={booked:[`QUALIFIED`,`Booked`],rescheduled:[`WORKING`,`Rescheduled`],canceled:[`CANCELED`,`Canceled`]}})),v_=c({init:()=>D_,render:()=>C_,tableHTML:()=>S_});function y_(){if(L_)return;let e=document.createElement(`style`);e.id=`m5t-analytics-styles`,e.textContent=`
    .page-shell .anl-wrap { overflow-x: auto; }
    .page-shell .anl-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .anl-table th { text-align: right; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .anl-table th:first-child { text-align: left; }
    .page-shell .anl-table td { padding: 10px 12px; text-align: right; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-variant-numeric: tabular-nums; white-space: nowrap; }
    .page-shell .anl-table td:first-child { text-align: left; white-space: normal; }
    .page-shell .anl-table tr:last-child td { border-bottom: 0; }
    .page-shell .anl-name { font-weight: 600; color: inherit; text-decoration: none; }
    .page-shell .anl-name:hover { text-decoration: underline; }
    .page-shell .anl-sub { display: block; font-size: 0.74rem; font-weight: 400; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .anl-chip { display: inline-block; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 2px 6px; border-radius: 5px; margin-left: 6px; vertical-align: 2px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .anl-bar { display: block; }
    /* Off the --color-* scale and onto the chart palette, so this mark follows the theme
       with every other chart mark rather than only matching in light mode. */
    .page-shell .anl-bar__track { fill: var(--chart-grid, #EAF0F7); }
    .page-shell .anl-bar__fill { fill: var(--chart-1, #0072BA); }
    .page-shell .anl-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .anl-warn { font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F7FAFD); border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; padding: 8px 12px; margin: 0 0 12px; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
  `,document.head.appendChild(e),L_=!0}function b_(e,t){let n=t>0?Math.round(e/t*100):0,r=`${j_(e)} of ${j_(t)} leads for the busiest magnet`;return`<svg class="anl-bar" width="72" height="8" viewBox="0 0 72 8" role="img"
      aria-label="${N_(r)}">
      <title>${N_(r)}</title>
      <rect class="anl-bar__track" x="0" y="1" width="72" height="6" rx="3"></rect>
      ${n>0?`<rect class="anl-bar__fill" x="0" y="1" width="${Math.max(2,Math.round(n*.72))}" height="6" rx="3"></rect>`:``}
    </svg>`}function x_(e,t,n){let r=z_[e.status]?`<span class="anl-chip">${N_(z_[e.status])}</span>`:``,i=n&&e.owner_name?`<span class="anl-sub">${N_(e.owner_name)}</span>`:``,a=e.ab_tests&&(e.ab_tests.running||e.ab_tests.completed)?`${j_(e.ab_tests.running)} / ${j_(e.ab_tests.completed)}`:`—`;return`<tr data-guid="${N_(e.magnet_guid)}">
    <td><a class="anl-name" href="#/magnets">${N_(e.name)}</a>${r}${i}</td>
    <td>${b_(Number(e.leads?.window||0),t)}</td>
    <td>${j_(e.leads?.window)}</td>
    <td>${j_(e.opens)}</td>
    <td>${P_(e.engagement_rate)}</td>
    <td>${P_(e.completion_rate)}</td>
    <td>${P_(e.lead_rate)}</td>
    <td>${a}</td>
  </tr>`}function S_(e,t){let n=e.reduce((e,t)=>Math.max(e,Number(t.leads?.window||0)),0);return`<div class="anl-wrap"><table class="anl-table">
    <thead><tr>
      <th>Magnet</th><th></th><th>Leads</th><th>Opens</th>
      <th>Engaged</th><th>Completed</th><th>Leads / Open</th><th>A/B run / done</th>
    </tr></thead>
    <tbody>${e.map(e=>x_(e,n,t)).join(``)}</tbody>
  </table></div>`}function C_(){return k()?da({section:`analytics`,title:`Analytics`,description:`Pick a client to see how their magnets are performing.`}):(y_(),Ma(),`
    <div class="page-shell" data-section="analytics">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Analytics</h1>
          <p class="page-description">How each magnet is performing, so you can tell them apart.</p>
        </div>
        <div class="chart-controls" id="anl-periods">
          ${F_.map(e=>`<button class="chart-period-btn${e.d===I_?` active`:``}" type="button" data-days="${e.d}">${e.label}</button>`).join(``)}
        </div>
      </div>

      <div class="stats-grid">
        ${A({icon:`person_add`,label:`Leads`,valueId:`anl-leads`,href:`#/leads`})}
        ${A({icon:`visibility`,label:`Opens`,valueId:`anl-opens`})}
        ${A({icon:`task_alt`,label:`Completion Rate`,valueId:`anl-completion`,href:`#/conversations`})}
        ${A({icon:`widgets`,label:`Active Magnets`,valueId:`anl-active`,href:`#/magnets`})}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">show_chart</span> Opens &amp; Leads</h2>
        </div>
        <div class="card-body" id="anl-trend">
          ${R_(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">leaderboard</span> By magnet</h2>
          <span class="live-indicator" id="anl-range"></span>
        </div>
        <div class="card-body" id="anl-body">
          ${R_(`hourglass_empty`,`Loading magnet performance…`)}
        </div>
      </div>
      <p class="anl-note">Leads / Open is the share of visitors who opened a magnet and left contact details. Rates show “—” where nothing opened in the period, rather than 0%.</p>
    </div>`)}function w_(e){try{return new Date(`${e}T00:00:00`).toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})}catch{return String(e||``)}}function T_(e){return Na({rows:e,xLabel:e=>String(e.date||``).slice(5),left:{value:e=>e.opens||0,label:`Magnet Opens`},right:{value:e=>e.leads||0,label:`Leads`},ariaLabel:`Magnet opens versus leads over time`,activatable:e=>Number(e.leads||0)>0,pointLabel:e=>`${w_(e.date)}: ${j_(e.opens||0)} opens, ${j_(e.leads||0)} leads`,hitData:e=>({day:e.date,leads:Number(e.leads||0)})})}function E_(e){let t=document.getElementById(`anl-trend`);return t?Fa(t,{rows:e,tipHTML:e=>`
      <div class="m5c-tip__title">${w_(e.date)}</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--1"></i>${j_(e.opens||0)} opens</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--2"></i>${j_(e.leads||0)} leads</div>
      ${Number(e.leads||0)>0?`<div class="m5c-tip__go">Open these leads →</div>`:``}`,onActivate:e=>{Sa(Ta.LEADS_DAY,e.date),window.location.hash=`#/leads`}}):()=>{}}async function D_(){if(k())return pa(k_(),[{h:`Leads`,td:e=>j_(e.leads.window??e.leads.total)},{h:`Opens`,td:e=>j_(e.opens)},{h:`Completed`,td:e=>P_(e.completion_rate)}]);y_(),Ma(),await O_();let e=document.getElementById(`anl-periods`);e&&e.addEventListener(`click`,t=>{let n=t.target.closest(`.chart-period-btn`);n&&(I_=Number(n.dataset.days)||30,e.querySelectorAll(`.chart-period-btn`).forEach(e=>{e.classList.toggle(`active`,Number(e.dataset.days)===I_)}),O_())})}async function O_(){let e=document.getElementById(`anl-body`),t=document.getElementById(`anl-range`);if(!e)return;e.innerHTML=R_(`hourglass_empty`,`Loading magnet performance…`);let n=new Date,r=A_(n),i=A_(new Date(n.getTime()-(I_-1)*864e5));t&&(t.textContent=`${i} → ${r}`);let a;try{let e=await fetch(`${k_()}/m5t/v5/dashboard/stats?from=${i}&to=${r}&group_by=magnet`);if(a=await e.json(),!e.ok||!a?.ok)throw Error(a?.error||`HTTP ${e.status}`)}catch(t){e.innerHTML=R_(`cloud_off`,`Could not load analytics. Refresh to try again.`),console.error(`[analytics] load failed:`,t);return}let o=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)};o(`anl-leads`,j_(a.by_day?.reduce((e,t)=>e+Number(t.leads||0),0))),o(`anl-opens`,j_(a.funnel?.opens)),o(`anl-completion`,P_(a.funnel?.completion_rate)),o(`anl-active`,j_(a.magnets?.active));let s=Array.isArray(a.by_day)?a.by_day:[],c=document.getElementById(`anl-trend`);if(c){let e=s.some(e=>Number(e.opens||0)>0||Number(e.leads||0)>0);c.innerHTML=e?T_(s):R_(`show_chart`,`No activity in this range yet. Opens and leads chart here as visitors engage your magnets.`),e&&E_(s)}let l=Array.isArray(a.by_magnet)?a.by_magnet:[];if(!l.length){e.innerHTML=R_(`widgets`,`No magnets yet. Create one and its numbers will show up here.`);return}let u=l.some(e=>Number(e.opens||0)>0||Number(e.leads?.window||0)>0),d=new Set(l.map(e=>e.owner_guid)).size>1;e.innerHTML=(a.by_magnet_truncated?`<p class="anl-warn">Showing the top ${l.length} magnets by leads. You have more than that, so this list is not complete.</p>`:``)+(u?``:`<p class="anl-warn">No opens or leads for any magnet in this period. Try a longer range.</p>`)+S_(l,d);let f=e.querySelector(`.anl-table tbody`);f&&E(f,{rowSelector:`tr`,noun:`magnets`,controlHost:e.querySelector(`.anl-wrap`)||e})}var k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_=o((()=>{w(),xa(),Aa(),sn(),Ba(),Da(),k_=()=>C.getConfig?.().BASE_URL||``,A_=e=>e.toISOString().slice(0,10),j_=e=>Number(e||0).toLocaleString(),M_={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},N_=e=>String(e??``).replace(/[&<>"']/g,e=>M_[e]),P_=e=>e==null?`—`:`${e}%`,F_=[{d:7,label:`7 Days`},{d:30,label:`30 Days`},{d:90,label:`90 Days`}],I_=30,L_=!1,R_=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,z_={DRAFT:`Draft`,DISABLED:`Paused`}})),V_=c({default:()=>yv,init:()=>W_,render:()=>U_});function H_(){if(Ma(),gv)return;let e=document.createElement(`style`);e.id=`m5t-conversions-styles`,e.textContent=`
    .page-shell .conv-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .conv-group { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 4px 2px 6px; }
    .page-shell .conv-group + .conv-group, .page-shell .conv-list + .conv-group { margin-top: 16px; }
    .page-shell .conv-row { display: flex; align-items: center; gap: 10px; padding: 7px 8px; border-radius: var(--radius-sm, 6px); cursor: pointer; }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .conv-row[hidden] { display: none; }
    .page-shell .conv-row:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .conv-row input { cursor: pointer; }
    .page-shell .conv-name { font-weight: 600; font-size: 0.88rem; }
    .page-shell .conv-cat { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .conv-tag { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 7px; border-radius: 999px; background: var(--color-accent-soft, rgba(0,114,186,0.1)); color: var(--color-accent-hover, #00558D); }
    .page-shell .conv-saverow { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 14px; }
    .page-shell .conv-savemsg { font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .conv-savemsg.err { color: var(--color-danger, #DD4124); }
    .page-shell .conv-wrap { overflow-x: auto; }
    .page-shell .conv-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .conv-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .conv-table td { padding: 9px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .conv-table .num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
    .page-shell .conv-table .sub { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .conv-busy { opacity: 0.55; transition: opacity .12s ease; }
    html.ff-no-animations .page-shell .conv-busy, html.ff-no-animations .page-shell .conv-row { transition: none; }
    @media (prefers-reduced-motion: reduce) { .page-shell .conv-busy { transition: none; } }
  `,document.head.appendChild(e),gv=!0}function U_(){return k()?da({section:`analytics-conversions`,title:`Conversions`,description:`Pick a client to view their conversion reporting.`}):(H_(),J.canSave=Lc(),`
    <div class="page-shell" data-section="analytics-conversions">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Conversions</h1>
          <p class="page-description">The Google Ads conversion actions you count as results.</p>
        </div>
        <div class="chart-controls" id="conv-periods">
          ${mv.map(e=>`<button class="chart-period-btn${e.d===hv?` active`:``}" type="button" data-days="${e.d}">${e.label}</button>`).join(``)}
        </div>
      </div>

      <div class="stats-grid" id="conv-stats">
        ${A({icon:`payments`,label:`Ad Spend`,valueId:`conv-spend`,href:`#/ad-accounts`})}
        ${A({icon:`flag`,label:`Conversions`,valueId:`conv-count`,sub:`Reported by Google Ads`})}
        ${A({icon:`request_quote`,label:`Cost / Conversion`,valueId:`conv-cpc`})}
        ${A({icon:`universal_currency_alt`,label:`Conversion Value`,valueId:`conv-value`})}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">checklist</span> Counted actions</h2>
          <span class="live-indicator" id="conv-selcount"></span>
        </div>
        <div class="card-body" id="conv-selector">
          ${_v(`hourglass_empty`,`Loading conversion actions.`)}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Conversions vs Spend</h2>
          <span class="live-indicator" id="conv-range"></span>
        </div>
        <div class="card-body" id="conv-chart">
          ${_v(`hourglass_empty`,`Loading conversions.`)}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">table_rows</span> By conversion action</h2>
          <span class="live-indicator">Reported by Google Ads</span>
        </div>
        <div class="card-body" id="conv-actions">
          ${_v(`hourglass_empty`,`Loading.`)}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">upload</span> Fed by Magnet</h2>
          <span class="live-indicator">Sent by Magnet</span>
        </div>
        <div class="card-body" id="conv-ledger">
          ${_v(`hourglass_empty`,`Loading.`)}
        </div>
      </div>
    </div>`)}async function W_(){if(k()){let e=e=>Number(e||0).toLocaleString();return pa(rv(),[{h:`Spend`,td:t=>t.ad?`$${e(t.ad.spend)}`:av},{h:`Clicks`,td:t=>t.ad?e(t.ad.clicks):av},{h:`Leads`,td:t=>e(t.leads.window??t.leads.total)},{h:`CPL`,td:t=>t.ad?.cost_per_lead==null?av:`$${e(t.ad.cost_per_lead)}`}],{emptyMsg:`No client orgs yet. Connect a client ad account to see conversions here.`})}let e=document.getElementById(`conv-periods`);e?.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-days]`);n&&(hv=Number(n.dataset.days)||30,e.querySelectorAll(`.chart-period-btn`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.days)===hv)),G_())}),document.getElementById(`conv-selector`)?.addEventListener(`change`,e=>{let t=e.target.closest(`input[type="checkbox"][data-action-id]`);t&&(t.checked?J.selection.add(t.value):J.selection.delete(t.value),Q_(),q_())}),await G_()}async function G_(){let e=new Date;J.to=iv(e),J.from=iv(new Date(e.getTime()-(hv-1)*864e5));let t=document.getElementById(`conv-range`);t&&(t.textContent=`${J.from} → ${J.to}`);let n=rv(),r=`from=${J.from}&to=${J.to}`,i=null,a=null,o=null,s=[],c=null;try{let e=Lc(),[t,l,u,d,f]=await Promise.all([fetch(`${n}/m5t/v5/coreAdMetrics/overlay?${r}`).then(e=>e.json()).catch(()=>null),fetch(`${n}/m5t/v5/coreAdMetrics/conversions?${r}`).then(e=>e.json()).catch(()=>null),fetch(`${n}/m5t/v5/coreAdMetrics/upload-ledger?${r}`).then(e=>e.json()).catch(()=>null),fetch(`${n}/m5t/v5/coreAdAccount`).then(e=>e.json()).catch(()=>null),e?fetch(`${n}/m5t/v5/integrations/google_ads/conversion_actions`).then(e=>e.json()).catch(()=>null):Promise.resolve(null)]);i=t,a=l,o=u,c=f,s=(d?.data||[]).filter(e=>e.status!==`DELETED`)}catch(e){console.warn(`[analytics-conversions] load failed:`,e),nv(`conv-chart`,_v(`error`,`Could not load conversions. Please try again.`));return}J.spend=i?.totals?.spend??null,J.overlayRows=i?.rows||[],J.canSave=Lc();let l=s.filter(e=>e.provider===`google_ads`);J.universe=K_({catalog:c,conv:a,accounts:l});let u=a?.has_selection&&Array.isArray(a.selected_ids)?a.selected_ids.map(String):[],d=J.universe.filter(e=>e.magnet).map(e=>e.id);if(J.selection=new Set(u.length?u:d),ev(o),Z_({accounts:l}),Q_(),!l.length){tv(`conv-spend`,ov(J.spend)),nv(`conv-chart`,_v(`link_off`,`No ad account connected yet. Your agency can connect Google Ads to see conversions here.`)),nv(`conv-actions`,_v(`link_off`,`No ad account connected yet.`));return}u.length||!J.selection.size?(J.conv=a,J_()):await q_()}function K_({catalog:e,conv:t,accounts:n}){let r=new Map,i=(e,t)=>{let n=String(e||``);if(!n)return;let i=r.get(n)||{id:n,name:null,category:null,magnet:!1,kind:null};r.set(n,{...i,...Object.fromEntries(Object.entries(t).filter(([,e])=>e!=null&&e!==!1))})};(e?.data?.actions||[]).forEach(e=>i(e.id,{name:e.name,category:e.category})),(t?.actions||[]).forEach(e=>i(e.id,{name:e.name,category:e.category})),n.forEach(e=>{let t=e.account_config?.magnet_actions||{};Object.entries(t).forEach(([e,t])=>{t?.id&&i(t.id,{name:t.name,magnet:!0,kind:e})})}),r.forEach(e=>{!e.magnet&&e.name&&pv.has(e.name)&&(e.magnet=!0)});let a=[...r.values()],o=e=>e.magnet?dv.indexOf(e.kind):-1;return a.sort((e,t)=>{if(e.magnet!==t.magnet)return e.magnet?-1:1;if(e.magnet){let n=o(e),r=o(t);if(n!==r)return(n<0?99:n)-(r<0?99:r)}return String(e.name||e.id).localeCompare(String(t.name||t.id))})}async function q_(){let e=[...J.selection],t=document.getElementById(`conv-chart`);t?.classList.add(`conv-busy`),J.busy=!0;try{if(!e.length)J.conv={ok:!0,has_selection:!1,rows:[],actions:[],totals:{conversions:0,value:0}};else{let t=rv(),n=await fetch(`${t}/m5t/v5/coreAdMetrics/conversions?from=${J.from}&to=${J.to}&actions=${encodeURIComponent(e.join(`,`))}`);J.conv=await n.json()}J_()}catch(e){console.warn(`[analytics-conversions] recompute failed:`,e),nv(`conv-chart`,_v(`error`,`Could not recompute for that selection. Please try again.`))}finally{J.busy=!1,t?.classList.remove(`conv-busy`)}}function J_(){let e=J.conv||{},t=e.totals||{conversions:0,value:0},n=Number(t.conversions||0);tv(`conv-spend`,ov(J.spend)),tv(`conv-count`,sv(n)),tv(`conv-cpc`,ov(uv(J.spend,n))),tv(`conv-value`,ov(t.value??0)),Y_(e.rows||[]),X_(e.actions||[])}function Y_(e){let t=document.getElementById(`conv-chart`);if(!t)return;if(!J.selection.size){t.innerHTML=_v(`checklist`,`No actions counted. Tick a conversion action to see it here.`),J.rows=[];return}let n=new Map(e.map(e=>[String(e.date).slice(0,10),e])),r=J.overlayRows.length?J.overlayRows.map(e=>String(e.date).slice(0,10)):e.map(e=>String(e.date).slice(0,10)),i=new Map(J.overlayRows.map(e=>[String(e.date).slice(0,10),Number(e.spend||0)])),a=r.map(e=>({date:e,spend:i.get(e)||0,conversions:Number(n.get(e)?.conversions||0)}));if(J.rows=a,!a.length){t.innerHTML=_v(`search_off`,`No conversions in this range for the selected actions.`);return}t.innerHTML=Na({rows:a,xLabel:e=>String(e.date||``).slice(5),left:{value:e=>e.spend||0,label:`Ad Spend`,fmt:e=>`$${Ra(e)}`},right:{value:e=>e.conversions||0,label:`Conversions`},ariaLabel:`Ad spend versus counted conversions over time`,pointLabel:e=>`${e.date}: ${ov(e.spend||0)} spend, ${sv(e.conversions||0)} conversions`,hitData:e=>({day:e.date})}),Fa(t,{rows:a,tipHTML:e=>`
      <div class="m5c-tip__title">${lv(String(e.date||``))}</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--1"></i>${ov(e.spend||0)} spend</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--2"></i>${sv(e.conversions||0)} conversions</div>`})}function X_(e){let t=document.getElementById(`conv-actions`);if(!t)return;let n=new Set(J.universe.filter(e=>e.magnet).map(e=>e.id)),r=e.filter(e=>J.selection.has(String(e.id)));if(!r.length){t.innerHTML=_v(`search_off`,J.selection.size?`No conversions in this range for the selected actions.`:`No actions counted. Tick a conversion action to see it here.`);return}t.innerHTML=`
    <div class="conv-wrap">
      <table class="conv-table">
        <thead><tr><th>Conversion action</th><th>Category</th><th class="num">Conversions</th><th class="num">Value</th></tr></thead>
        <tbody>${r.map(e=>`
          <tr>
            <td><span class="conv-name">${lv(e.name||e.id)}</span>${n.has(String(e.id))?` <span class="conv-tag">Magnet</span>`:``}</td>
            <td class="sub">${lv(vv(e.category))}</td>
            <td class="num"><b>${sv(e.conversions)}</b></td>
            <td class="num">${ov(e.value??0)}</td>
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>`;let i=t.querySelector(`.conv-table tbody`);i&&E(i,{rowSelector:`tr`,noun:`actions`,controlHost:t.querySelector(`.conv-wrap`)||t})}function Z_({accounts:e}){let t=document.getElementById(`conv-selector`);if(!t)return;if(!e.length){t.innerHTML=_v(`link_off`,`No ad account connected yet. Your agency can connect Google Ads to see conversions here.`);return}if(!J.universe.length){t.innerHTML=`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">checklist</span>
      <p>No conversion actions yet. Set them up in <a href="#/settings/integrations/google-ads">Settings → Integrations → Google Ads</a>.</p></div>`;return}let n=J.universe.filter(e=>e.magnet),r=J.universe.filter(e=>!e.magnet),i=e=>`
    <label class="conv-row">
      <input type="checkbox" data-action-id="${lv(e.id)}" value="${lv(e.id)}"${J.selection.has(e.id)?` checked`:``}>
      <span class="conv-name">${lv(e.name||e.id)}</span>
      ${e.magnet?`<span class="conv-tag">Magnet</span>`:``}
      ${e.category?`<span class="conv-cat">${lv(vv(e.category))}</span>`:``}
    </label>`;t.innerHTML=`
    ${n.length?`<div class="conv-group">Provisioned by Magnet</div><div class="conv-list" id="conv-list-magnet">${n.map(i).join(``)}</div>`:``}
    ${r.length?`<div class="conv-group">Other actions in this account</div><div class="conv-list" id="conv-list-other">${r.map(i).join(``)}</div>`:``}
    ${J.canSave?`
      <div class="conv-saverow">
        <button class="btn btn-primary" type="button" id="conv-save">
          <span class="material-symbols-outlined" aria-hidden="true">save</span>Save as default
        </button>
        <span class="conv-savemsg" id="conv-savemsg"></span>
      </div>`:``}`;let a=t.querySelector(`#conv-list-other`);a&&E(a,{rowSelector:`.conv-row`,noun:`actions`}),document.getElementById(`conv-save`)?.addEventListener(`click`,$_)}function Q_(){let e=document.getElementById(`conv-selcount`);if(!e)return;let t=J.selection.size;e.textContent=t?`${t} action${t===1?``:`s`} counted`:`No actions counted`}async function $_(){let e=document.getElementById(`conv-save`),t=document.getElementById(`conv-savemsg`),n=[...J.selection];e&&(e.disabled=!0),t&&(t.classList.remove(`err`),t.textContent=`Saving.`);try{let e=await(await fetch(`${rv()}/m5t/v5/integrations/google_ads/conversion_actions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({conversion_action_ids:n})})).json().catch(()=>({}));if(!e.ok)throw Error(e.error||`save failed`);t&&(t.textContent=n.length?`Saved. ${n.length} action${n.length===1?``:`s`} counted by default.`:`Saved. No actions counted by default.`)}catch{t&&(t.classList.add(`err`),t.textContent=`Could not save the selection. Please try again.`)}finally{e&&(e.disabled=!1)}}function ev(e){let t=document.getElementById(`conv-ledger`);if(!t)return;let n=e?.kinds||[];if(!n.length){t.innerHTML=_v(`upload`,`Nothing fed into Google Ads in this range yet.`);return}let r=e=>fv[e]||String(e||``).replace(/_/g,` `),i=e=>{let t=dv.indexOf(e.kind);return t<0?99:t};t.innerHTML=`
    <div class="conv-wrap">
      <table class="conv-table" id="conv-ledger-table">
        <thead><tr><th>Fed</th><th class="num">Sent</th><th class="num">Queued</th><th class="num">Failed</th><th class="num">Skipped</th></tr></thead>
        <tbody>${[...n].sort((e,t)=>i(e)-i(t)).map(e=>`
          <tr data-kind="${lv(e.kind)}">
            <td><span class="conv-name">${lv(r(e.kind))}</span></td>
            <td class="num"><b>${sv(e.sent)}</b></td>
            <td class="num">${sv(e.queued)}</td>
            <td class="num">${sv(e.failed)}</td>
            <td class="num">${sv(e.skipped)}</td>
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="conv-note">What Magnet fed into Google Ads. Google's attributed numbers above are its own and are never added to these.</p>`}function tv(e,t){let n=document.getElementById(e);n&&(n.textContent=t)}function nv(e,t){let n=document.getElementById(e);n&&(n.innerHTML=t)}var rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,J,gv,_v,vv,yv,bv=o((()=>{w(),xa(),Wc(),Aa(),Ba(),sn(),rv=()=>C.getConfig?.().BASE_URL||``,iv=e=>e.toISOString().slice(0,10),av=`—`,ov=e=>e==null?av:`$`+Number(e).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),sv=e=>e==null?av:Number(e).toLocaleString(),cv={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},lv=e=>String(e??``).replace(/[&<>"']/g,e=>cv[e]),uv=(e,t)=>{let n=Number(e),r=Number(t);return!Number.isFinite(n)||!Number.isFinite(r)||r<=0?null:Math.round(n/r*100)/100},dv=[`magnet_fill`,`qualified_lead`,`call_dni`,`calls_from_ads`],fv={magnet_fill:`Magnet fills`,qualified_lead:`Qualified leads`,call_dni:`Website calls`,calls_from_ads:`Calls from ads`},pv=new Set([`Magnet Lead`,`Magnet Qualified Lead`,`Magnet Phone Call (Website)`,`Calls from Ads (Magnet)`]),mv=[{d:7,label:`7 Days`},{d:30,label:`30 Days`},{d:90,label:`90 Days`}],hv=30,J={from:null,to:null,spend:null,universe:[],selection:new Set,conv:null,rows:[],overlayRows:[],canSave:!1,busy:!1},gv=!1,_v=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,vv=e=>String(e||``).toLowerCase().replace(/_/g,` `)||av,yv={render:U_,init:W_}})),xv=c({init:()=>wv,render:()=>Cv});function Sv(){if(Ma(),Nc(),Iv)return;let e=document.createElement(`style`);e.id=`m5t-traffic-styles`,e.textContent=`
    .page-shell .traffic-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .traffic-conn { margin-top: 6px; }
  `,document.head.appendChild(e),Iv=!0}function Cv(){return k()?da({section:`traffic`,title:`Traffic`,description:`Pick a client to view their website traffic.`}):(Sv(),`
    <div class="page-shell" data-section="traffic">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Traffic</h1>
          <p class="page-description">Your website traffic alongside the leads your magnets captured.</p>
          <div class="traffic-conn" id="traffic-conn"></div>
        </div>
        <div class="chart-controls" id="traffic-periods">
          ${Rv.map(e=>`<button class="chart-period-btn${e.d===zv?` active`:``}" type="button" data-days="${e.d}">${e.label}</button>`).join(``)}
        </div>
      </div>

      <div class="stats-grid" id="traffic-stats">
        ${A({icon:`ssid_chart`,label:`Sessions`,valueId:`traffic-sessions`})}
        ${A({icon:`group`,label:`Visitors`,valueId:`traffic-users`})}
        ${A({icon:`description`,label:`Page Views`,valueId:`traffic-views`})}
        ${A({icon:`touch_app`,label:`Engagement Rate`,valueId:`traffic-engagement`})}
        ${A({icon:`person_add`,label:`Magnet Leads`,valueId:`traffic-leads`,href:`#/leads`})}
        ${A({icon:`percent`,label:`Session to Lead Rate`,valueId:`traffic-leadrate`})}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Sessions vs Leads</h2>
          <span class="live-indicator" id="traffic-range"></span>
        </div>
        <div class="card-body" id="traffic-body">
          ${Lv(`hourglass_empty`,`Loading traffic…`)}
        </div>
      </div>
      <p class="traffic-note">Traffic comes from your connected GA4 property, refreshed daily. Leads are magnet captures on the same timeline. Sessions and leads are counted by different systems, so treat the rate as a trend, not an exact funnel.</p>
    </div>`)}async function wv(){if(k()){let e=e=>Number(e||0).toLocaleString();return pa(Av(),[{h:`Leads`,td:t=>e(t.leads.window??t.leads.total)}],{emptyMsg:`No client orgs yet. Connect a client GA4 property to see traffic here.`})}let e=document.getElementById(`traffic-periods`);e?.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-days]`);n&&(zv=Number(n.dataset.days)||30,e.querySelectorAll(`.chart-period-btn`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.days)===zv)),Tv())}),await Tv()}async function Tv(){let e=Av(),t=document.getElementById(`traffic-body`),n=document.getElementById(`traffic-range`),r=new Date,i=jv(r),a=jv(new Date(r.getTime()-(zv-1)*864e5));n&&(n.textContent=`${a} → ${i}`);let o,s=null;try{let[t,n]=await Promise.all([fetch(`${e}/m5t/v5/coreAnalyticsMetrics/overlay?from=${a}&to=${i}`),yc().catch(()=>null)]);if(!t.ok)throw Error(`HTTP ${t.status}`);o=await t.json(),s=n}catch(e){console.warn(`[traffic] load failed:`,e),t&&(t.innerHTML=Lv(`error`,`Could not load traffic. Please try again.`));return}Ev(s);let c=o.totals||{};if(Dv(`traffic-sessions`,Mv(c.sessions)),Dv(`traffic-users`,Mv(c.users)),Dv(`traffic-views`,Mv(c.page_views)),Dv(`traffic-engagement`,Nv(c.engagement_rate)),Dv(`traffic-leads`,Mv(c.magnet_leads)),Dv(`traffic-leadrate`,Nv(c.lead_rate)),!o.connected){t.innerHTML=s&&!s.denied&&gc(s.providers,`google_analytics`)?Lv(`cloud_sync`,`GA4 connected. No traffic for this range yet. Metrics appear here once they sync.`):Lv(`link_off`,`No GA4 property connected yet. Connect Google Analytics under Settings, Integrations to see traffic here.`);return}let l=o.rows||[];t.innerHTML=Ov(l),kv(l)}function Ev(e){let t=document.getElementById(`traffic-conn`);if(!t)return;if(!e||e.denied){t.innerHTML=``;return}let n=cc.google_analytics,r=gc(e.providers,`google_analytics`);if(!r){t.innerHTML=``;return}let i=_c(n,r,!!e.configured?.google_analytics);if(i!==`connected`&&i!==`broken`){t.innerHTML=``;return}let a=Lc()?` <a href="#/settings/integrations/${n.urlSlug}">Manage</a>`:``;t.innerHTML=`<span>Google Analytics</span> ${vc(i,r)}${a}`}function Dv(e,t){let n=document.getElementById(e);n&&(n.textContent=t)}function Ov(e){return Na({rows:e,xLabel:e=>String(e.date||``).slice(5),left:{value:e=>e.sessions||0,label:`Sessions`,fmt:e=>Ra(e)},right:{value:e=>e.magnet_leads||0,label:`Magnet Leads`},ariaLabel:`Website sessions versus magnet leads over time`,pointLabel:e=>`${e.date}: ${Mv(e.sessions||0)} sessions, ${Mv(e.magnet_leads||0)} leads`,hitData:e=>({day:e.date})})}function kv(e){let t=document.getElementById(`traffic-body`);return t?Fa(t,{rows:e,tipHTML:e=>`
      <div class="m5c-tip__title">${Fv(String(e.date||``))}</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--1"></i>${Mv(e.sessions||0)} sessions</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--2"></i>${Mv(e.magnet_leads||0)} leads</div>`}):()=>{}}var Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv=o((()=>{w(),xa(),Wc(),Aa(),Ba(),Av=()=>C.getConfig?.().BASE_URL||``,jv=e=>e.toISOString().slice(0,10),Mv=e=>Number(e||0).toLocaleString(),Nv=e=>e==null?`—`:`${e}%`,Pv={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Fv=e=>String(e??``).replace(/[&<>"']/g,e=>Pv[e]),Iv=!1,Lv=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Rv=[{d:7,label:`7 Days`},{d:30,label:`30 Days`},{d:90,label:`90 Days`}],zv=30})),Vv=c({default:()=>cy,init:()=>Wv,render:()=>Uv});function Hv(){if(Ma(),iy)return;let e=document.createElement(`style`);e.id=`m5t-adperf-styles`,e.textContent=`
    .page-shell .adperf-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .adperf-srcwrap { overflow-x: auto; }
    .page-shell .adperf-srctable { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .adperf-srctable th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .adperf-srctable td { padding: 9px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .adperf-srctable .num { text-align: right; white-space: nowrap; }
    /* A row that drills through to /leads. Only rows with a campaign or source get this —
       the untracked/direct bucket has nothing to search for, so it stays inert and
       deliberately looks it. */
    .page-shell .adperf-srcrow--link { cursor: pointer; transition: background 0.12s ease; }
    .page-shell .adperf-srcrow--link:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .adperf-srclink { color: inherit; text-decoration: none; font-weight: 600; }
    .page-shell .adperf-srcrow--link:hover .adperf-srclink { color: var(--color-primary-600, #0072BA); text-decoration: underline; }
    /* Focus lands on the <a>, but the whole ROW is the hit target, so show the ring on
       the row — otherwise keyboard users get an outline round the text while the thing
       that responds to Enter is the row around it. */
    .page-shell .adperf-srcrow--link:focus-within { outline: 2px solid var(--color-primary-600, #0072BA); outline-offset: -2px; }
    html.ff-no-animations .page-shell .adperf-srcrow--link { transition: none; }
    @media (prefers-reduced-motion: reduce) { .page-shell .adperf-srcrow--link { transition: none; } }
    .page-shell .adperf-src-sub { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .adperf-src-untracked { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .page-shell .adperf-conn { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adperf-conn:empty { display: none; }
    .page-shell .adperf-conn a { color: var(--color-accent, #0072BA); font-weight: 600; }
  `,document.head.appendChild(e),iy=!0}function Uv(){return k()?da({section:`ad-performance`,title:`Ad Performance`,description:`Pick a client to view their spend and lead performance.`}):(Hv(),`
    <div class="page-shell" data-section="ad-performance">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Performance</h1>
          <p class="page-description">Your advertising spend alongside the leads your magnets captured.</p>
          <div class="adperf-conn" id="adperf-conn"></div>
        </div>
        <div class="chart-controls" id="adperf-periods">
          ${oy.map(e=>`<button class="chart-period-btn${e.d===sy?` active`:``}" type="button" data-days="${e.d}">${e.label}</button>`).join(``)}
        </div>
      </div>

      <div class="stats-grid" id="adperf-stats">
        ${A({icon:`payments`,label:`Ad Spend`,valueId:`adperf-spend`,href:`#/ad-accounts`})}
        ${A({icon:`ads_click`,label:`Clicks`,valueId:`adperf-clicks`,href:`#/ad-accounts`})}
        ${A({icon:`person_add`,label:`Magnet Leads`,valueId:`adperf-leads`,href:`#/leads`})}
        ${A({icon:`request_quote`,label:`Cost / Lead`,valueId:`adperf-cpl`})}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Spend vs Leads</h2>
          <span class="live-indicator" id="adperf-range"></span>
        </div>
        <div class="card-body" id="adperf-body">
          ${ay(`hourglass_empty`,`Loading ad performance…`)}
        </div>
      </div>
      <p class="adperf-note">Spend and leads are shown on the same timeline for comparison. Leads are not yet matched to individual ad clicks.</p>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">campaign</span> Leads by campaign</h2>
          <span class="live-indicator" id="adperf-src-summary"></span>
        </div>
        <div class="card-body" id="adperf-sources">
          ${ay(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card" id="adperf-conv-card" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">flag</span> Other conversions</h2>
          <span class="live-indicator">Reported by Google Ads</span>
        </div>
        <div class="card-body" id="adperf-conv-body"></div>
      </div>

      <div class="dashboard-card" id="adperf-lsa-card" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">home_repair_service</span> Local Services</h2>
          <span class="live-indicator">Reported by Google</span>
        </div>
        <div class="card-body" id="adperf-lsa-body"></div>
      </div>
    </div>`)}async function Wv(){if(k()){let e=e=>Number(e||0).toLocaleString();return pa($v(),[{h:`Spend`,td:t=>t.ad?`$${e(t.ad.spend)}`:`—`},{h:`Clicks`,td:t=>t.ad?e(t.ad.clicks):`—`},{h:`Leads`,td:t=>e(t.leads.window??t.leads.total)},{h:`CPL`,td:t=>t.ad?.cost_per_lead==null?`—`:`$${e(t.ad.cost_per_lead)}`}],{emptyMsg:`No client orgs yet. Connect a client ad account to see spend here.`})}let e=document.getElementById(`adperf-periods`);e?.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-days]`);n&&(sy=Number(n.dataset.days)||30,e.querySelectorAll(`.chart-period-btn`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.days)===sy)),Gv())}),document.getElementById(`adperf-sources`)?.addEventListener(`click`,e=>{let t=e.target.closest(`tr[data-campaign]`);t&&(Sa(Ta.LEADS_SEARCH,t.dataset.campaign),!e.target.closest(`a`)&&(window.location.hash=`#/leads`))}),document.getElementById(`adperf-lsa-card`)?.addEventListener(`click`,e=>{let t=e.target.closest(`tr[data-lsalead]`);t&&(Sa(Ta.LEADS_SEARCH,t.dataset.lsalead),!e.target.closest(`a`)&&(window.location.hash=`#/leads`))}),await Gv()}async function Gv(){let e=$v(),t=document.getElementById(`adperf-body`),n=document.getElementById(`adperf-range`),r=new Date,i=ey(r),a=ey(new Date(r.getTime()-(sy-1)*864e5));n&&(n.textContent=`${a} → ${i}`);let o,s=[],c=null,l=null,u=null,d=null;try{let[t,n,r,f,p,m]=await Promise.all([fetch(`${e}/m5t/v5/coreAdMetrics/overlay?from=${a}&to=${i}`),fetch(`${e}/m5t/v5/coreAdAccount`),fetch(`${e}/m5t/v5/coreAdMetrics/by-source?from=${a}&to=${i}`),yc().catch(()=>null),fetch(`${e}/m5t/v5/coreAdMetrics/conversions?from=${a}&to=${i}`).then(e=>e.json()).catch(()=>null),fetch(`${e}/m5t/v5/coreAdMetrics/lsa?from=${a}&to=${i}`).then(e=>e.json()).catch(()=>null)]);if(!t.ok)throw Error(`HTTP ${t.status}`);o=await t.json(),s=((await n.json().catch(()=>({})))?.data||[]).filter(e=>e.status!==`DELETED`),c=await r.json().catch(()=>null),l=f,u=p,d=m}catch(e){console.warn(`[ad-performance] load failed:`,e),t&&(t.innerHTML=ay(`error`,`Could not load ad performance. Please try again.`));return}Kv(l,s),qv(u,o?.totals?.spend??null),Jv(d);let f=o.totals||{};if(Xv(`adperf-spend`,ty(f.spend)),Xv(`adperf-clicks`,ny(f.clicks)),Xv(`adperf-leads`,ny(f.magnet_leads)),Xv(`adperf-cpl`,ty(f.cost_per_lead)),Yv(c),!s.length){t.innerHTML=ay(`link_off`,`No ad account connected yet. Your agency can connect Google Ads or Local Services Ads to see performance here.`);return}if(!o.connected){t.innerHTML=ay(`cloud_sync`,`Account connected. No ad data for this range yet. Metrics appear here once they sync.`);return}let p=o.rows||[];t.innerHTML=Zv(p),Qv(p)}function Kv(e,t){let n=document.getElementById(`adperf-conn`);if(!n)return;if(!e||e.denied){n.innerHTML=``;return}let r=cc.google_ads,i=gc(e.providers,`google_ads`),a=_c(r,i,!!e.configured?.google_ads),o=Lc()?` <a href="#/settings/integrations/${r.urlSlug}">Manage</a>`:``;if(a===`connected`||a===`broken`){Nc(),n.innerHTML=`<span>Google Ads</span> ${vc(a,i)}${o}`;return}if(t.length){n.innerHTML=`<span>Google Ads</span> <span>${t.length} associated account${t.length===1?``:`s`}</span>`;return}n.innerHTML=``}function qv(e,t){let n=document.getElementById(`adperf-conv-card`),r=document.getElementById(`adperf-conv-body`),i=document.getElementById(`adperf-stats`),a=document.getElementById(`adperf-conv-stat`);a&&a.remove();let o=document.getElementById(`adperf-conv-cpc`);if(o&&o.remove(),!n||!r)return;if(!e?.ok||!e.has_selection){n.style.display=`none`;return}if(i){let n=document.createElement(`div`);n.innerHTML=A({icon:`flag`,label:`Ads Conversions`,value:ny(e.totals?.conversions),sub:`Reported by Google Ads`,href:`#/settings/integrations/google-ads`});let r=n.firstElementChild;r.id=`adperf-conv-stat`,i.appendChild(r);let a=Number(e.totals?.conversions||0),o=t!=null&&a>0?Math.round(Number(t)/a*100)/100:null,s=document.createElement(`div`);s.innerHTML=A({icon:`request_quote`,label:`Cost / Conversion`,value:ty(o),sub:`Against the counted actions`,href:`#/analytics/conversions`});let c=s.firstElementChild;c.id=`adperf-conv-cpc`,i.appendChild(c)}let s=e.actions||[];if(n.style.display=``,!s.length){r.innerHTML=ay(`search_off`,`No conversions in this range for the selected actions.`);return}let c=s.some(e=>e.value>0);r.innerHTML=`
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Conversion action</th><th>Category</th><th class="num">Conversions</th>${c?`<th class="num">Value</th>`:``}</tr></thead>
        <tbody>${s.map(e=>`
          <tr>
            <td>${Y(e.name||e.id)}</td>
            <td class="adperf-src-sub">${Y(String(e.category||``).toLowerCase().replace(/_/g,` `)||`—`)}</td>
            <td class="num"><b>${ny(e.conversions)}</b></td>
            ${c?`<td class="num">${ty(e.value)}</td>`:``}
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="adperf-note">Counted actions are chosen on the Google Ads integration page. These are Google's own numbers and may overlap magnet leads, so they are never added together.</p>`}function Jv(e){let t=document.getElementById(`adperf-lsa-card`),n=document.getElementById(`adperf-lsa-body`);if(!t||!n)return;if(!e?.ok||!e.connected){t.style.display=`none`;return}t.style.display=``;let r=e.totals||{},i=e.leads||[],a=e.disputes||[],o=r.answer_rate==null?`No call outcomes yet`:r.missed>0?`${ny(r.missed)} missed call${r.missed===1?``:`s`}`:`Every call answered`;n.innerHTML=`
    ${`
    <div class="stats-grid" style="margin-bottom:16px">
      ${A({icon:`payments`,label:`LSA Spend`,value:ty(r.spend),sub:`Reported by Google`})}
      ${A({icon:`person_add`,label:`LSA Leads`,value:ny(r.leads),sub:`${ny(r.phone_calls)} calls · ${ny(r.messages)} messages`})}
      ${A({icon:`paid`,label:`Charged`,value:ny(r.charged),sub:`Leads Google billed for`})}
      ${A({icon:`request_quote`,label:`Cost / Charged Lead`,value:ty(r.cost_per_charged_lead)})}
      ${A({icon:`call`,label:`Answer Rate`,value:r.answer_rate==null?`—`:`${r.answer_rate}%`,sub:o})}
      ${A({icon:`event_available`,label:`Booked`,value:ny(r.booked),sub:`Google's lead status`})}
    </div>`}
    ${i.length?`
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Lead</th><th>Contact</th><th>Type</th><th>Category</th><th>Google status</th><th class="num">Charged</th><th>Received</th></tr></thead>
        <tbody>${i.map(e=>{let t=e.phone||e.name,n=e.captured_at?new Date(e.captured_at).toLocaleDateString([],{month:`short`,day:`numeric`}):`—`;return`
          <tr${t?` data-lsalead="${Y(t)}" class="adperf-srcrow--link"`:``}>
            <td>${t?`<a class="adperf-srclink" href="#/leads" title="Open this lead">${Y(e.name)}</a>`:Y(e.name)}</td>
            <td class="adperf-src-sub">${Y([e.phone,e.email].filter(Boolean).join(` · `)||`—`)}</td>
            <td>${Y(e.type||`—`)}${e.missed?` <span class="adperf-src-untracked">· missed</span>`:``}</td>
            <td class="adperf-src-sub">${Y(e.category||`—`)}</td>
            <td class="adperf-src-sub">${Y(String(e.lsa_status||`—`).toLowerCase())}${e.dispute?` <span class="adperf-src-untracked">· dispute candidate</span>`:``}</td>
            <td class="num">${e.charged?`<b>yes</b>`:`<span class="adperf-src-sub">no</span>`}</td>
            <td class="adperf-src-sub">${Y(n)}</td>
          </tr>`}).join(``)}
        </tbody>
      </table>
    </div>`:ay(`search_off`,`No Local Services leads in this range yet.`)}
    ${a.length?`
    <div class="card-header" style="padding:16px 0 0">
      <h3 class="card-title" style="font-size:1rem"><span class="material-symbols-outlined" aria-hidden="true">flag_circle</span> Dispute candidates</h3>
      <span class="live-indicator">${ny(a.length)} inside the 30 day credit window</span>
    </div>
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Lead</th><th>Why</th><th class="num">Days left</th></tr></thead>
        <tbody>${a.map(e=>`
          <tr>
            <td>${Y(e.name)}${e.phone?` <span class="adperf-src-sub">${Y(e.phone)}</span>`:``}</td>
            <td class="adperf-src-sub">${Y(e.reason)}</td>
            <td class="num"><b>${ny(e.days_left)}</b></td>
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="adperf-note">These charged leads look credit-eligible. Review and dispute them in <a href="https://ads.google.com/localservices/leads" target="_blank" rel="noopener">your Google Local Services lead inbox</a> before the window closes.</p>`:``}
    <p class="adperf-note">Numbers come from Google's Local Services feed. These leads land in your Leads inbox and do not flow through magnets.</p>`;let s=n.querySelector(`.adperf-srctable tbody`);s&&E(s,{rowSelector:`tr`,noun:`leads`,controlHost:n.querySelector(`.adperf-srcwrap`)||n})}function Yv(e){let t=document.getElementById(`adperf-sources`),n=document.getElementById(`adperf-src-summary`);if(!t)return;let r=e&&Array.isArray(e.rows)?e.rows:[];if(!r.length){n&&(n.textContent=``),t.innerHTML=ay(`search_off`,`No leads in this range yet. Campaigns appear here as tagged leads (?utm_campaign=…) come in.`);return}let i=e.total_leads||r.reduce((e,t)=>e+(t.leads||0),0),a=e.tracked_leads||0;n&&(n.textContent=`${ny(a)} of ${ny(i)} leads tagged to a source`);let o=e=>e.campaign&&e.campaign!==`(none)`?Y(e.campaign):e.source&&e.source!==`(direct)`?Y(e.source):`<span class="adperf-src-untracked">Untracked / direct</span>`,s=e=>e.campaign&&e.campaign!==`(none)`?e.campaign:e.source&&e.source!==`(direct)`?e.source:``;t.innerHTML=`
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Campaign</th><th>Source</th><th class="num">Paid clicks</th><th class="num">Leads</th></tr></thead>
        <tbody>${r.map(e=>{let t=s(e);return`
          <tr${t?` data-campaign="${Y(t)}" class="adperf-srcrow--link"`:``}>
            <td>${t?`<a class="adperf-srclink" href="#/leads" title="Show the leads from ${Y(t)}">${o(e)}</a>`:o(e)}</td>
            <td class="adperf-src-sub">${Y(e.source||`—`)}${e.medium?` · ${Y(e.medium)}`:``}</td>
            <td class="num">${e.paid_clicks?ny(e.paid_clicks):`<span class="adperf-src-sub">—</span>`}</td>
            <td class="num"><b>${ny(e.leads)}</b></td>
          </tr>`}).join(``)}
        </tbody>
      </table>
    </div>`;let c=t.querySelector(`.adperf-srctable tbody`);c&&E(c,{rowSelector:`tr`,noun:`sources`,controlHost:t.querySelector(`.adperf-srcwrap`)||t})}function Xv(e,t){let n=document.getElementById(e);n&&(n.textContent=t)}function Zv(e){return Na({rows:e,xLabel:e=>String(e.date||``).slice(5),left:{value:e=>e.spend||0,label:`Ad Spend`,fmt:e=>`$${Ra(e)}`},right:{value:e=>e.magnet_leads||0,label:`Magnet Leads`},ariaLabel:`Ad spend versus magnet leads over time`,pointLabel:e=>`${e.date}: ${ty(e.spend||0)} spend, ${ny(e.magnet_leads||0)} leads`,hitData:e=>({day:e.date})})}function Qv(e){let t=document.getElementById(`adperf-body`);return t?Fa(t,{rows:e,tipHTML:e=>`
      <div class="m5c-tip__title">${Y(String(e.date||``))}</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--1"></i>${ty(e.spend||0)} spend</div>
      <div class="m5c-tip__row"><i class="m5c-sw m5c-sw--2"></i>${ny(e.magnet_leads||0)} leads</div>`}):()=>{}}var $v,ey,ty,ny,ry,Y,iy,ay,oy,sy,cy,ly=o((()=>{w(),xa(),Wc(),Aa(),Ba(),sn(),Da(),$v=()=>C.getConfig?.().BASE_URL||``,ey=e=>e.toISOString().slice(0,10),ty=e=>e==null?`—`:`$`+Number(e).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),ny=e=>Number(e||0).toLocaleString(),ry={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Y=e=>String(e??``).replace(/[&<>"']/g,e=>ry[e]),iy=!1,ay=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,oy=[{d:7,label:`7 Days`},{d:30,label:`30 Days`},{d:90,label:`90 Days`}],sy=30,cy={render:Uv,init:Wv}})),uy=c({default:()=>My,init:()=>my,parseBookingCsv:()=>Ty,render:()=>fy});function dy(){if(ky)return;let e=document.createElement(`style`);e.id=`m5t-adacct-styles`,e.textContent=`
    .page-shell .adacct-conn { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
    .page-shell .adacct-conn__titles { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    .page-shell .adacct-conn__name { font-weight: 700; color: var(--color-text, #0B1220); display: flex; align-items: center; gap: 10px; }
    .page-shell .adacct-conn__sub { font-size: 0.8rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-conn__spacer { flex: 1; }
    .page-shell .adacct-manage { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); text-decoration: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); padding: 7px 13px; border-radius: 10px; white-space: nowrap; }
    .page-shell .adacct-manage:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .adacct-manage:focus-visible { outline: none; box-shadow: var(--focus-ring, 0 0 0 3px rgba(0,114,186,0.30)); }
    .page-shell .adacct-wrap { overflow-x: auto; }
    .page-shell .adacct-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .adacct-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .adacct-table td { padding: 9px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; white-space: nowrap; }
    .page-shell .adacct-cid { font-variant-numeric: tabular-nums; }
    .page-shell .adacct-note { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin: 10px 2px 0; }
    .page-shell .adacct-note a { color: var(--color-accent, #0072BA); }
    .page-shell .adacct-chips { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 10px; font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-chip { font-size: 0.72rem; font-weight: 600; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-sub { font-size: 0.85rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 12px; }
    .page-shell .adacct-form { display: flex; align-items: flex-end; gap: 14px; flex-wrap: wrap; }
    .page-shell .adacct-field { display: flex; flex-direction: column; gap: 4px; font-size: 0.76rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-field select, .page-shell .adacct-field input[type="text"], .page-shell .adacct-field input[type="number"] { font: inherit; font-weight: 400; padding: 7px 10px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .page-shell .adacct-checks { display: flex; align-items: center; gap: 12px; padding: 8px 0; }
    .page-shell .adacct-checks label { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; color: var(--color-text, #0B1220); cursor: pointer; }
    .page-shell .adacct-checks input { accent-color: var(--color-accent, #0072BA); }
    .page-shell .adacct-divider { border-top: 1px solid var(--color-surface-2, #EAF0F7); margin: 18px 0; }
    .page-shell .adacct-result { font-size: 0.85rem; color: var(--color-text, #0B1220); margin-top: 10px; }
  `,document.head.appendChild(e),ky=!0}function fy(){return k()?da({section:`ad-accounts`,title:`Ad Accounts`,description:`Pick a client to see their connected ad accounts.`}):(dy(),Nc(),`
    <div class="page-shell" data-section="ad-accounts">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Accounts</h1>
          <p class="page-description">The accounts behind your ad reporting.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">link</span> Platform connection</h2>
        </div>
        <div class="card-body" id="adacct-conn">
          ${Rc(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Accounts feeding reporting</h2>
          <span class="live-indicator" id="adacct-count"></span>
        </div>
        <div class="card-body" id="adacct-list">
          ${Rc(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card" id="adacct-offline" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">upload_file</span> Offline conversions</h2>
        </div>
        <div class="card-body">
          <p class="adacct-sub">Check the upload path first: this sends one test payload through Google's validator and records nothing. A pass means auth, the linked account, and the conversion actions all work.</p>
          <div class="adacct-form">
            <button type="button" class="adacct-manage" id="adacct-probe"><span class="material-symbols-outlined" aria-hidden="true">network_check</span>Test the upload pipe</button>
          </div>
          <div id="adacct-probe-result" class="adacct-result"></div>
          <div class="adacct-divider"></div>
          <p class="adacct-sub">Magnet leads with a Google click id, packaged as an import-ready CSV. Upload it in Google Ads under Goals, then Conversions, then Uploads.</p>
          <div class="adacct-form">
            <label class="adacct-field">Window
              <select id="adacct-oc-days"><option value="30">30 days</option><option value="60">60 days</option><option value="90" selected>90 days</option></select>
            </label>
            <label class="adacct-field">Conversion name
              <input type="text" id="adacct-oc-name" value="M5M magnet lead" maxlength="100">
            </label>
            <label class="adacct-field">Value per conversion
              <input type="number" id="adacct-oc-value" placeholder="Optional" min="0" step="0.01" style="width:110px">
            </label>
            <button type="button" class="adacct-manage" id="adacct-oc-dl"><span class="material-symbols-outlined" aria-hidden="true">download</span>Download CSV</button>
            <label class="adacct-field" id="adacct-oc-target-wrap" style="display:none">Upload into
              <select id="adacct-oc-target"></select>
            </label>
            <button type="button" class="adacct-manage" id="adacct-oc-up" style="display:none"><span class="material-symbols-outlined" aria-hidden="true">cloud_upload</span>Upload to Google Ads</button>
          </div>
          <div class="adacct-checks" id="adacct-oc-statuses">
            <label><input type="checkbox" value="QUALIFIED" checked> Qualified</label>
            <label><input type="checkbox" value="CONVERTED" checked> Converted</label>
            <label><input type="checkbox" value="WORKING"> Working</label>
            <label><input type="checkbox" value="NEW"> New</label>
          </div>
          <div id="adacct-oc-result" class="adacct-result"></div>
          <div class="adacct-divider"></div>
          <p class="adacct-sub">Bookings that complete outside your magnets: upload the booking export (a CSV with an email or phone column, plus a date). Rows that match a magnet lead with a click id come back import-ready.</p>
          <input type="file" id="adacct-mc-file" accept=".csv,text/csv">
          <div id="adacct-mc-result" class="adacct-result"></div>
        </div>
      </div>
    </div>`)}async function py(e){let t=e.currentTarget,n=document.getElementById(`adacct-probe-result`);t.disabled=!0,n&&(n.textContent=`Asking Google to validate a test payload…`);try{let e=await(await fetch(`${P()}/m5t/v5/integrations/google_ads/conversion_probe`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`})).json();if(!e.ok)throw Error(e.error||`probe failed`);let t=e.data||{};n&&(n.textContent=t.ok?`Pass. Google validated the pipe end to end on account ${t.account}: connection, developer token, and the provisioned conversion actions all check out. Real conversions will upload the same way.`:`Stopped at ${t.stage}: ${t.message}`)}catch(e){n&&(n.textContent=e.message||`Probe failed. Please try again.`)}finally{t.disabled=!1}}async function my(){if(k()){let e=e=>Number(e||0).toLocaleString();return pa(P(),[{h:`Spend`,td:t=>t.ad?`$${e(t.ad.spend)}`:`—`},{h:`Leads`,td:t=>e(t.leads.window??t.leads.total)},{h:`CPL`,td:t=>t.ad?.cost_per_lead==null?`—`:`$${e(t.ad.cost_per_lead)}`}],{emptyMsg:`No client orgs yet. Connect a client ad account to see it here.`})}await hy()}async function hy(){let[e,t,n]=await Promise.all([yc().catch(()=>null),fetch(`${P()}/m5t/v5/coreAdAccount`).then(e=>e.json()).catch(()=>null),fetch(`${P()}/m5t/v5/coreAdMetrics/conversions`).then(e=>e.json()).catch(()=>null)]);gy(e,n),_y(t),vy(t)}function gy(e,t){let n=document.getElementById(`adacct-conn`);if(!n)return;let r=cc.google_ads;if(!e||e.denied){n.innerHTML=Rc(`link_off`,`Connection status is not available for your role.`);return}let i=gc(e.providers,`google_ads`),a=_c(r,i,!!e.configured?.google_ads),o=i?.external_account||{},s=r.card.reachableCount(o),c;c=a===`connected`?s?`${s} reachable account${s===1?``:`s`}.`:`Connected.`:a===`broken`?r.card.brokenDesc:a===`unavailable`?`Google Ads is being set up for this platform.`:Lc()?`Not connected yet. Connect from Settings to pull spend and clicks.`:`Not connected yet.`;let l=Lc()&&a!==`unavailable`?`<a class="adacct-manage" href="#/settings/integrations/${r.urlSlug}"><span class="material-symbols-outlined" aria-hidden="true">${a===`idle`?`link`:`settings`}</span>${a===`idle`?`Connect`:`Manage`}</a>`:``,u=``;if(t?.ok&&t.has_selection){let e=(t.actions||[]).map(e=>e.name||e.id),n=(t.selected_ids||[]).length-e.length;u=`
      <div class="adacct-chips">Counted in reporting:
        ${e.map(e=>`<span class="adacct-chip">${M(e)}</span>`).join(``)}
        ${n>0?`<span class="adacct-chip">${n} more</span>`:``}
      </div>`}n.innerHTML=`
    <div class="adacct-conn">
      ${hc(r)}
      <div class="adacct-conn__titles">
        <span class="adacct-conn__name">${M(r.label)} ${vc(a,i)}</span>
        <span class="adacct-conn__sub">${M(c)}</span>
      </div>
      <span class="adacct-conn__spacer"></span>
      ${l}
    </div>
    ${u}`}function _y(e){let t=document.getElementById(`adacct-list`),n=document.getElementById(`adacct-count`);if(!t)return;if(!e||e.ok===!1){t.innerHTML=Rc(`error`,`Could not load ad accounts. Please try again.`);return}let r=(e.data||[]).filter(e=>e.status!==`DELETED`),i=!!e.canConnect;if(n&&(n.textContent=r.length?`${r.length} account${r.length===1?``:`s`}`:``),!r.length){t.innerHTML=Rc(`link_off`,i?`No ad accounts associated yet.`:`No ad accounts yet. Your agency connects these for you.`)+(i?`<p class="adacct-note">Associate a client's Customer ID from the <a href="#/clients">Clients page</a>.</p>`:``);return}t.innerHTML=`
    <div class="adacct-wrap">
      <table class="adacct-table">
        <thead><tr><th>Platform</th><th>Customer ID</th><th>Status</th></tr></thead>
        <tbody>${r.map(e=>`
          <tr>
            <td>${M(Dy[e.provider]||e.provider)}</td>
            <td class="adacct-cid">${M(Oy(e.external_customer_id))}</td>
            <td><span class="m5t-badge" data-tone="${e.status===`ACTIVE`?`success`:`warning`}">${M(e.status===`ACTIVE`?`Active`:e.status)}</span></td>
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    ${i?`<p class="adacct-note">Associations are managed per client from the <a href="#/clients">Clients page</a>.</p>`:``}`;let a=t.querySelector(`.adacct-table tbody`);a&&E(a,{rowSelector:`tr`,noun:`accounts`,controlHost:t.querySelector(`.adacct-wrap`)||t})}function vy(e){let t=document.getElementById(`adacct-offline`);if(t){if(!e?.canConnect){t.style.display=`none`;return}t.style.display=``,document.getElementById(`adacct-oc-dl`)?.addEventListener(`click`,Cy),document.getElementById(`adacct-oc-up`)?.addEventListener(`click`,Sy),document.getElementById(`adacct-probe`)?.addEventListener(`click`,py),document.getElementById(`adacct-mc-file`)?.addEventListener(`change`,wy),yy()}}async function yy(){Ay=[];try{let e=await(await fetch(`${P()}/m5t/v5/integrations/google_ads/conversion_actions`)).json();if(!e.ok)return;let t=e.data.actions||[];if(Ay=t.filter(e=>e.type===`UPLOAD_CLICKS`&&(e.account_ids||[]).length),!Ay.length){if(t.length){let e=document.getElementById(`adacct-oc-result`);e&&(e.textContent=`Direct upload needs an import type conversion action in Google Ads. The CSV works either way.`)}return}let n=document.getElementById(`adacct-oc-target`);n&&(n.innerHTML=Ay.map(e=>`<option value="${M(e.id)}">${M(e.name||e.id)}</option>`).join(``)),document.getElementById(`adacct-oc-target-wrap`)?.style.setProperty(`display`,``),document.getElementById(`adacct-oc-up`)?.style.setProperty(`display`,``)}catch{}}function by(){let e=document.getElementById(`adacct-oc-target`)?.value;return Ay.find(t=>t.id===e)||Ay[0]||null}async function xy(e,t){let n=by();if(!n){t&&(t.textContent=`Pick an upload target first.`);return}let r=document.getElementById(`adacct-oc-value`)?.value,i=r!==``&&r!=null&&Number.isFinite(Number(r))?Number(r):null;t&&(t.textContent=`Uploading ${e.length} conversion${e.length===1?``:`s`}…`);try{let r=await(await fetch(`${P()}/m5t/v5/integrations/google_ads/upload_conversions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({customer_id:n.account_ids[0],conversion_action_id:n.id,rows:e.map(e=>i==null?e:{...e,value:i})})})).json();if(!r.ok)throw Error(r.error||`upload failed`);let a=[`${r.data.uploaded} uploaded to Google Ads.`];r.data.failed&&a.push(`${r.data.failed} rejected${r.data.errors?.[0]?`: ${r.data.errors[0]}`:`.`}`),t&&(t.textContent=a.join(` `))}catch(e){t&&(t.textContent=e.message===`upload failed`?`Upload failed. Please try again.`:`Upload failed: ${e.message}`)}}async function Sy(){let e=document.getElementById(`adacct-oc-result`),t=Number(document.getElementById(`adacct-oc-days`)?.value)||90,n=[...document.querySelectorAll(`#adacct-oc-statuses input:checked`)].map(e=>e.value);if(!n.length){e&&(e.textContent=`Pick at least one status.`);return}let r=e=>e.toISOString().slice(0,10),i=r(new Date),a=r(new Date(Date.now()-(t-1)*864e5)),o=new URLSearchParams({from:a,to:i,statuses:n.join(`,`),format:`json`});try{let t=await(await fetch(`${P()}/m5t/v5/coreAdMetrics/offline-conversions.csv?${o}`)).json();if(!t.ok)throw Error();if(!t.rows.length){e&&(e.textContent=`No leads with a click id in that window.`);return}await xy(t.rows,e)}catch{e&&(e.textContent=`Upload failed. Please try again.`)}}async function Cy(){let e=document.getElementById(`adacct-oc-result`),t=Number(document.getElementById(`adacct-oc-days`)?.value)||90,n=[...document.querySelectorAll(`#adacct-oc-statuses input:checked`)].map(e=>e.value);if(!n.length){e&&(e.textContent=`Pick at least one status.`);return}let r=document.getElementById(`adacct-oc-name`)?.value?.trim()||`M5M magnet lead`,i=document.getElementById(`adacct-oc-value`)?.value,a=e=>e.toISOString().slice(0,10),o=a(new Date),s=a(new Date(Date.now()-(t-1)*864e5)),c=new URLSearchParams({from:s,to:o,statuses:n.join(`,`),name:r});i!==``&&i!=null&&Number.isFinite(Number(i))&&c.set(`value`,i),e&&(e.textContent=`Building the export…`);try{let t=await fetch(`${P()}/m5t/v5/coreAdMetrics/offline-conversions.csv?${c}`);if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.text(),r=Math.max(0,n.trim().split(`
`).length-1);Ey(n,`google-ads-conversions-${s}-to-${o}.csv`),e&&(e.textContent=r?`${r} conversion${r===1?``:`s`} in the file.`:`No leads with a click id in that window. The file has headers only.`)}catch{e&&(e.textContent=`Export failed. Please try again.`)}}async function wy(e){let t=document.getElementById(`adacct-mc-result`),n=e.target.files?.[0];if(!n)return;let r=Ty(await n.text());if(!r.length){t&&(t.textContent=`No usable rows found. The CSV needs an email or phone column.`);return}t&&(t.textContent=`Matching ${r.length} row${r.length===1?``:`s`}…`);try{let e=await(await fetch(`${P()}/m5t/v5/coreAdMetrics/offline-conversions/match`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({rows:r})})).json();if(!e.ok)throw Error(e.error||`match failed`);let n=[`${e.matched_count} of ${r.length} rows matched a magnet lead with a click id.`];if(e.unmatched_count&&n.push(`${e.unmatched_count} had no matching lead.`),e.no_click_count&&n.push(`${e.no_click_count} matched a lead without a click id.`),!e.matched_count){t&&(t.textContent=n.join(` `));return}let i=document.getElementById(`adacct-oc-name`)?.value?.trim()||`M5M magnet lead`,a=document.getElementById(`adacct-oc-value`)?.value,o=a!==``&&a!=null&&Number.isFinite(Number(a))?Number(a):``,s=e=>`"${String(e??``).replace(/"/g,`""`)}"`,c=[`Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency`,...e.matched.map(e=>[s(e.gclid),s(i),s(e.time),o,``].join(`,`))].join(`\r
`)+`\r
`;if(jy=e.matched.map(e=>({gclid:e.gclid,time:e.time})),t){t.innerHTML=``;let e=document.createElement(`span`);e.textContent=n.join(` `)+` `;let r=document.createElement(`button`);if(r.type=`button`,r.className=`adacct-manage`,r.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">download</span>Download matched CSV`,r.addEventListener(`click`,()=>Ey(c,`google-ads-conversions-matched-${new Date().toISOString().slice(0,10)}.csv`)),t.append(e,r),Ay.length){let e=document.createElement(`button`);e.type=`button`,e.className=`adacct-manage`,e.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">cloud_upload</span>Upload to Google Ads`,e.addEventListener(`click`,()=>xy(jy,t)),t.append(` `,e)}}}catch{t&&(t.textContent=`Matching failed. Please try again.`)}finally{e.target.value=``}}function Ty(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a++){let o=e[a];i?o===`"`&&e[a+1]===`"`?(r+=`"`,a++):o===`"`?i=!1:r+=o:o===`"`?i=!0:o===`,`?(n.push(r),r=``):o===`
`||o===`\r`?(o===`\r`&&e[a+1]===`
`&&a++,n.push(r),r=``,n.some(e=>e.trim()!==``)&&t.push(n),n=[]):r+=o}if(n.push(r),n.some(e=>e.trim()!==``)&&t.push(n),t.length<2)return[];let a=t[0].map(e=>e.trim().toLowerCase()),o=a.findIndex(e=>/e-?mail/.test(e)),s=a.findIndex(e=>/phone|mobile|tel/.test(e)),c=a.findIndex(e=>/date|time|booked|appointment|start/.test(e));return o<0&&s<0?[]:t.slice(1).map(e=>({email:o>=0?(e[o]||``).trim():``,phone:s>=0?(e[s]||``).trim():``,at:c>=0?(e[c]||``).trim():``})).filter(e=>e.email||e.phone).slice(0,5e3)}function Ey(e,t){let n=new Blob([e],{type:`text/csv;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=t,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),4e3)}var Dy,Oy,ky,Ay,jy,My,Ny=o((()=>{xa(),sn(),Wc(),Dy={google_ads:`Google Ads`,google_lsa:`Local Services Ads`},Oy=e=>{let t=String(e||``).replace(/\D/g,``);return t.length===10?`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:String(e||``)},ky=!1,Ay=[],jy=null,My={render:fy,init:my}})),Py=c({default:()=>nb,init:()=>Hy,openInviteModal:()=>Ky,render:()=>Vy});function Fy(e,t=`info`){try{Yy.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}}function Iy(){let e=C.getActiveOrg();if(e&&e.channel===Xy)return{guid:e.guid,name:e.name};let t=C.getMemberships().find(e=>e.channel===Xy);return t?{guid:t.orgGuid,name:t.name}:null}function Ly(e){let t=e?.created_tz;if(!t)return``;let n=new Date(t);return Number.isNaN(n.getTime())?``:n.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function Ry(){if(Qy)return;let e=document.createElement(`style`);e.id=`m5t-clients-styles`,e.textContent=`
    .page-shell .clients-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .client-list { display: flex; flex-direction: column; }
    .page-shell .client-row {
      display: flex; gap: 12px; align-items: center; padding: 12px 4px;
      border-bottom: 1px solid var(--color-surface-2, #EAF0F7); flex-wrap: wrap;
    }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .client-row[hidden] { display: none; }
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
    .page-shell .client-row__status[data-status="DISABLED"] { background: var(--color-danger-soft, #FBE3DE); color: var(--color-danger, #DD4124); }
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
      cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA);
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

    /* Questionnaire modal */
    /* .qm-* answer styles now live in core/questionnaireAnswers.js, shared with
       the /questionnaires review page; injected via ensureQuestionnaireAnswerStyles(). */
  `,document.head.appendChild(e),dr(),Qy=!0}function zy(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function By(e){let t=e.caption||e.guid,n=e.status||`ENABLED`;return`
    <div class="client-row">
      <span class="client-row__avatar">${X(eb(t))}</span>
      <span class="client-row__main">
        <div class="client-row__name" title="${X(t)}">${X(t)}</div>
        <div class="client-row__meta">Added ${X(Ly(e.created))||`—`}</div>
      </span>
      <span class="client-row__status" data-status="${X(n)}">${X(n)}</span>
      <div class="client-row__btns">
        <button class="client-card__invite" type="button" data-action="invite" data-client-guid="${X(e.guid)}" data-client-name="${X(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
        </button>
        <button class="client-card__invite" type="button" data-action="questionnaire" data-client-guid="${X(e.guid)}" data-client-name="${X(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">checklist</span> Questionnaire
        </button>
        ${C.getCapabilities().includes(`connect_ad_accounts`)?`
        <button class="client-card__invite" type="button" data-action="adaccounts" data-client-guid="${X(e.guid)}" data-client-name="${X(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Ad accounts
        </button>`:``}
      </div>
    </div>`}function Vy(){return Ry(),`
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
          ${zy(`hourglass_empty`,`Loading clients…`)}
        </div>
      </div>
    </div>`}async function Hy(){let e=Iy();document.getElementById(`clients-add-btn`)?.addEventListener(`click`,()=>Wy(e)),await Uy(e)}async function Uy(e){let t=document.getElementById(`clients-body`),n=document.getElementById(`clients-count`);if(t){if(!e?.guid){t.innerHTML=zy(`info`,`Client provisioning is available to reseller / agency accounts.`),n&&(n.textContent=``);return}try{let r=C.getConfig?.().BASE_URL||``,i=await fetch(`${r}/m5t/v5/acctGroup`);if(!i.ok)throw Error(`HTTP ${i.status}`);let a=await i.json(),o=(Array.isArray(a?.data)?a.data:[]).filter(t=>t.class===Zy&&(!t.parent||t.parent===e.guid));if(!o.length){t.innerHTML=zy(`group_off`,`No clients yet. Add your first client to start managing magnets on their behalf.`),n&&(n.textContent=``);return}t.innerHTML=`<div class="client-list">${o.map(By).join(``)}</div>`,E(t.querySelector(`.client-list`),{rowSelector:`.client-row`,noun:`clients`}),n&&(n.textContent=`${o.length} client${o.length===1?``:`s`}`),t.querySelectorAll(`.client-card__invite`).forEach(e=>{e.addEventListener(`click`,()=>{e.dataset.action===`adaccounts`?Gy(e.dataset.clientGuid,e.dataset.clientName):e.dataset.action===`questionnaire`?Jy(e.dataset.clientGuid,e.dataset.clientName):Ky(e.dataset.clientGuid,e.dataset.clientName)})})}catch(e){console.warn(`[clients] load failed:`,e),t.innerHTML=zy(`error`,`Couldn’t load clients. Please try again.`),n&&(n.textContent=``)}}}function Wy(e){if(!e?.guid){Fy(`Only reseller / agency accounts can add clients.`,`error`);return}let t=document.createElement(`div`);t.className=`client-modal-scrim`;let n=document.createElement(`div`);n.className=`client-modal`,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-modal`,`true`),n.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${X(e.name||`your agency`)}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`,document.body.appendChild(t),document.body.appendChild(n),requestAnimationFrame(()=>{t.classList.add(`open`),n.classList.add(`open`)});let r=n.querySelector(`#client-name-input`),i=n.querySelector(`#client-modal-error`),a=n.querySelector(`[data-act="create"]`);r?.focus();let o=()=>{t.classList.remove(`open`),n.classList.remove(`open`),document.removeEventListener(`keydown`,s),setTimeout(()=>{t.remove(),n.remove()},200)},s=e=>{e.key===`Escape`&&o()};document.addEventListener(`keydown`,s),t.addEventListener(`click`,o),n.querySelector(`.client-modal__close`)?.addEventListener(`click`,o),n.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,o);let c=async()=>{let t=(r?.value||``).trim();if(i.textContent=``,!t){i.textContent=`Please enter a client name.`,r?.focus();return}a.disabled=!0;let n=a.innerHTML;a.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…`;try{let n=C.getConfig?.().BASE_URL||``,r=await fetch(`${n}/m5t/v5/acctGroup`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({class:Zy,caption:t,parent:e.guid})}),i=await r.json().catch(()=>({}));if(!r.ok||!i?.ok){let e=r.status===403?`You are not authorized to add a client here.`:i?.message||i?.error||`Failed (HTTP ${r.status})`;throw Error(e)}Fy(`Added client “${t}”`,`success`),o(),await Uy(e)}catch(e){console.warn(`[clients] create failed:`,e),i.textContent=e.message||`Something went wrong. Please try again.`,a.disabled=!1,a.innerHTML=n}};a?.addEventListener(`click`,c),r?.addEventListener(`keydown`,e=>{e.key===`Enter`&&c()})}async function Gy(e,t){let n=C.getConfig?.().BASE_URL||``,r={};try{let t=await fetch(`${n}/m5t/v5/coreAdAccount?owner_guid=${encodeURIComponent(e)}`),i=await t.json().catch(()=>({}));if(!t.ok)throw Error(`Failed to load ad accounts (${t.status})`);(i?.data||[]).forEach(e=>{r[e.provider]=e})}catch(e){console.warn(`[clients] ad-accounts prefill failed:`,e)}let i=r.google_ads,a=r.google_lsa,o=document.createElement(`div`);o.className=`client-modal-scrim`;let s=document.createElement(`div`);s.className=`client-modal`,s.setAttribute(`role`,`dialog`),s.setAttribute(`aria-modal`,`true`),s.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Ad accounts: ${X(t)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Connect this client's advertising accounts so they can see ad performance next to their magnet leads. Enter account IDs only, no passwords.</p>
      <label class="client-modal__label" for="aa-gads">Google Ads Customer ID</label>
      <input class="client-modal__input" id="aa-gads" type="text" inputmode="numeric" placeholder="123-456-7890" autocomplete="off" value="${X(i?.external_customer_id||``)}" />
      <p class="client-modal__hint">Found top-right in the client's Google Ads account. Dashes optional.</p>
      <label class="client-modal__label" for="aa-lsa" style="margin-top:14px">Local Services (LSA) Account ID</label>
      <input class="client-modal__input" id="aa-lsa" type="text" inputmode="numeric" placeholder="Optional" autocomplete="off" value="${X(a?.external_customer_id||``)}" />
      <p class="client-modal__hint">Leave a field blank to disconnect that account.</p>
      <p class="client-modal__error" id="aa-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save">
          <span class="material-symbols-outlined" aria-hidden="true">save</span> Save
        </button>
      </div>
    </div>`,document.body.appendChild(o),document.body.appendChild(s),requestAnimationFrame(()=>{o.classList.add(`open`),s.classList.add(`open`)});let c=s.querySelector(`#aa-error`),l=s.querySelector(`[data-act="save"]`),u=()=>{o.classList.remove(`open`),s.classList.remove(`open`),document.removeEventListener(`keydown`,d),setTimeout(()=>{o.remove(),s.remove()},200)},d=e=>{e.key===`Escape`&&u()};document.addEventListener(`keydown`,d),o.addEventListener(`click`,u),s.querySelector(`.client-modal__close`)?.addEventListener(`click`,u),s.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,u);let f=(t,r,i)=>{let a=`${n}/m5t/v5/coreAdAccount`;return r&&!i?fetch(a,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({owner_guid:e,provider:t,external_customer_id:r})}):r&&i&&r!==i.external_customer_id?fetch(`${a}/${encodeURIComponent(i.guid)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({external_customer_id:r})}):!r&&i?fetch(`${a}/${encodeURIComponent(i.guid)}`,{method:`DELETE`}):null};l?.addEventListener(`click`,async()=>{c.textContent=``;let e=tb(s.querySelector(`#aa-gads`).value),t=tb(s.querySelector(`#aa-lsa`).value),n=[f(`google_ads`,e,i),f(`google_lsa`,t,a)].filter(Boolean);if(!n.length){u();return}l.disabled=!0;let r=l.innerHTML;l.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…`;try{let e=await Promise.all(n);for(let t of e)if(!t.ok){let e=await t.json().catch(()=>({}));throw Error(t.status===403?`You are not authorized to connect accounts for this client.`:e?.error||e?.message||`Failed (HTTP ${t.status})`)}Fy(`Ad accounts updated`,`success`),u()}catch(e){c.textContent=e.message||`Something went wrong. Please try again.`,l.disabled=!1,l.innerHTML=r}})}function Ky(e,t){if(!e)return;let n=document.createElement(`div`);n.className=`client-modal-scrim`;let r=document.createElement(`div`);r.className=`client-modal`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${X(t||`this client`)}</strong> to a read-only login for their account.</p>
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
    </div>`,document.body.appendChild(n),document.body.appendChild(r),requestAnimationFrame(()=>{n.classList.add(`open`),r.classList.add(`open`)});let i=()=>{n.classList.remove(`open`),r.classList.remove(`open`),document.removeEventListener(`keydown`,a),setTimeout(()=>{n.remove(),r.remove()},200)},a=e=>{e.key===`Escape`&&i()};document.addEventListener(`keydown`,a),n.addEventListener(`click`,i),r.querySelector(`.client-modal__close`)?.addEventListener(`click`,i),r.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,i);let o=r.querySelector(`#inv-email`),s=r.querySelector(`#inv-error`),c=r.querySelector(`[data-act="send"]`);o?.focus();let l=e=>e.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.dataset.url),e.textContent=`Copied!`,setTimeout(()=>{e.textContent=`Copy link`},1500)}catch{}});(async function(){let t=r.querySelector(`#invite-pending`);if(t)try{let n=C.getConfig?.().BASE_URL||``,r=await fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(e)}/invites`),i=await r.json().catch(()=>({})),a=r.ok&&i.ok&&Array.isArray(i.invites)?i.invites:[];if(!a.length){t.innerHTML=``;return}t.innerHTML=`
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${a.map(e=>`
            <div class="invite-pending__row">
              <span class="invite-pending__email${e.expired?` expired`:``}" title="${X(e.email)}">${X(e.email)}${e.expired?` · expired`:``}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${X(e.inviteUrl)}">Copy link</button>
            </div>`).join(``)}
        </div>`,t.querySelectorAll(`.invite-pending__copy`).forEach(l)}catch{t.innerHTML=``}})(),c?.addEventListener(`click`,async()=>{let t=(r.querySelector(`#inv-email`).value||``).trim(),n=(r.querySelector(`#inv-first`).value||``).trim(),a=(r.querySelector(`#inv-last`).value||``).trim();if(s.textContent=``,!t||!n||!a){s.textContent=`Email, first, and last name are required.`;return}c.disabled=!0;let o=c.innerHTML;c.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…`;try{let o=C.getConfig?.().BASE_URL||``,s=await fetch(`${o}/m5t/v5/acctGroup/${encodeURIComponent(e)}/invite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:t,first:n,last:a,member_role:`viewer`})}),c=await s.json().catch(()=>({}));if(!s.ok||!c.ok){let e=s.status===409?`A user with that email already exists.`:s.status===403?`You are not authorized to invite for this client.`:c.message||c.error||`Failed (HTTP ${s.status})`;throw Error(e)}Fy(`Invite created for ${t}`,`success`),r.querySelector(`#invite-body`).innerHTML=`
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${c.emailQueued?`An invite email is on its way to <strong>${X(t)}</strong>.`:`Invite created for <strong>${X(t)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly. It lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${X(c.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;let l=r.querySelector(`#inv-link`);r.querySelector(`#inv-copy`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(l.value),r.querySelector(`#inv-copy`).textContent=`Copied!`}catch{l.select()}}),r.querySelector(`[data-act="done"]`)?.addEventListener(`click`,i)}catch(e){console.warn(`[clients] invite failed:`,e),s.textContent=e.message||`Something went wrong. Please try again.`,c.disabled=!1,c.innerHTML=o}})}function qy(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toLocaleString(void 0,{year:`numeric`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}async function Jy(e,t){if(!e)return;let n=C.getConfig?.().BASE_URL||``,r=document.createElement(`div`);r.className=`client-modal-scrim`;let i=document.createElement(`div`);i.className=`client-modal`,i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-modal`,`true`),i.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Kickoff Questionnaire: ${X(t)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="qm-body">${zy(`hourglass_empty`,`Loading…`)}</div>`,document.body.appendChild(r),document.body.appendChild(i),requestAnimationFrame(()=>{r.classList.add(`open`),i.classList.add(`open`)});let a=()=>{r.classList.remove(`open`),i.classList.remove(`open`),document.removeEventListener(`keydown`,o),setTimeout(()=>{r.remove(),i.remove()},200)},o=e=>{e.key===`Escape`&&a()};document.addEventListener(`keydown`,o),r.addEventListener(`click`,a),i.querySelector(`.client-modal__close`)?.addEventListener(`click`,a);let s=i.querySelector(`#qm-body`);function c(){s.innerHTML=`
      <p class="client-modal__sub">Send a Kickoff Questionnaire to <strong>${X(t)}</strong>. They fill it out directly in their browser, no account needed. The link expires in 7 days.</p>
      <label class="client-modal__label" for="qm-email">Send to</label>
      <input class="client-modal__input" id="qm-email" type="email" placeholder="person@client.com" autocomplete="off" />
      <p class="client-modal__hint">We'll email the link here. You'll also get a copyable link afterwards as a backup.</p>
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send questionnaire</button>
      </div>`,s.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,a);let r=s.querySelector(`[data-act="send"]`),i=s.querySelector(`#qm-error`),o=s.querySelector(`#qm-email`);o?.focus(),r?.addEventListener(`click`,async()=>{let t=(o?.value||``).trim();if(i.textContent=``,!t){i.textContent=`Enter the email address to send this to.`,o?.focus();return}if(!De(t)){i.textContent=`That does not look like a valid email address.`,o?.focus();return}r.disabled=!0;let a=r.innerHTML;r.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…`;try{let r=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({owner_guid:e,recipient_email:t})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok)throw Error(i.error||i.message||`Failed (HTTP ${r.status})`);Fy(i.data.emailQueued?`Questionnaire sent to ${t}`:`Link created — email could not be queued`,i.data.emailQueued?`success`:`info`),l({url:i.data.url,token_expiry:i.data.expires,recipient_email:i.data.recipient_email,emailQueued:i.data.emailQueued,guid:i.data.guid})}catch(e){i.textContent=e.message||`Something went wrong. Please try again.`,r.disabled=!1,r.innerHTML=a}})}function l(e){let t=e.recipient_email?`Sent`:`Link created`,r=e.emailQueued===!1?`<strong>The email could not be queued.</strong> Share the link below directly instead:`:e.recipient_email?`Emailed to <strong>${X(e.recipient_email)}</strong>. The link is also below — handy if it bounces, or to share via text or chat:`:`Share this link with your client — email, text, chat:`;s.innerHTML=`
      <div class="qm-status" data-status="DRAFT"><span class="material-symbols-outlined" aria-hidden="true">hourglass_top</span> ${t} — awaiting response${e.token_expiry?`, link expires ${X(qy(e.token_expiry))}`:``}</div>
      <p class="client-modal__hint">${r}</p>
      <div class="client-modal__linkrow">
        <input class="client-modal__input" id="qm-link" type="text" readonly value="${X(e.url||``)}" />
        <button class="client-modal__btn client-modal__btn--primary" type="button" id="qm-copy">Copy</button>
      </div>
      <p class="client-modal__error" id="qm-cancel-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel-q">Cancel questionnaire</button>
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button>
      </div>`;let i=s.querySelector(`#qm-link`);s.querySelector(`#qm-copy`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(i.value),s.querySelector(`#qm-copy`).textContent=`Copied!`}catch{i.select()}}),s.querySelector(`[data-act="done"]`)?.addEventListener(`click`,a);let o=s.querySelector(`[data-act="cancel-q"]`);o?.addEventListener(`click`,async()=>{if(!window.confirm(`Cancel this questionnaire? The link will stop working immediately. This cannot be undone — you would need to send a new one.`))return;o.disabled=!0;let t=o.innerHTML;o.innerHTML=`Cancelling…`;try{let t=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}/cancel`,{method:`POST`}),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||r.message||`Failed (HTTP ${t.status})`);Fy(`Questionnaire cancelled`,`success`),u({...e,status:`CANCELLED`,cancelled_tz:new Date().toISOString()})}catch(e){s.querySelector(`#qm-cancel-error`).textContent=e.message||`Something went wrong. Please try again.`,o.disabled=!1,o.innerHTML=t}})}function u(e){s.innerHTML=`
      <div class="qm-status" data-status="CANCELLED"><span class="material-symbols-outlined" aria-hidden="true">block</span> Cancelled${e.cancelled_tz?` ${X(qy(e.cancelled_tz))}`:``}${e.cancelled_by_email?` by ${X(e.cancelled_by_email)}`:``}</div>
      <p class="client-modal__sub">This link was revoked and no longer works.${e.recipient_email?` It had been emailed to <strong>${X(e.recipient_email)}</strong>.`:``}</p>
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Close</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="resend"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send a new one</button>
      </div>`,s.querySelector(`[data-act="done"]`)?.addEventListener(`click`,a),s.querySelector(`[data-act="resend"]`)?.addEventListener(`click`,()=>c())}function d(e,t=!1){let r=e.editability||{editable:e.status===`SUBMITTED`&&!e.locked_tz,reason:e.locked_tz?`finalized`:null,deadline:null},i=!!r.editable,o=!i&&e.status===`SUBMITTED`?r.reason===`finalized`?`<div class="qm-status" data-status="LOCKED"><span class="material-symbols-outlined" aria-hidden="true">lock</span> Finalized${e.locked_tz?` ${X(qy(e.locked_tz))}`:``}${e.locked_by_email?` by ${X(e.locked_by_email)}`:``} — no further edits.</div>`:`<div class="qm-status" data-status="LOCKED"><span class="material-symbols-outlined" aria-hidden="true">lock_clock</span> Editing closed${r.deadline?` ${X(qy(r.deadline))}`:``} — a response locks 14 days after it is submitted.</div>`:``,c=i&&r.deadline?`<p class="client-modal__sub qm-editable-hint">You can edit these answers until ${X(qy(r.deadline))}.</p>`:``;s.innerHTML=`
      <div class="qm-status" data-status="SUBMITTED"><span class="material-symbols-outlined" aria-hidden="true">task_alt</span> Submitted ${e.submitted_tz?X(qy(e.submitted_tz)):``}</div>
      ${o}
      ${ur(e)}
      <form id="qm-form">
        ${sr(e,t?{renderAnswer:cr}:{})}
      </form>
      ${t?``:c}
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        ${t?`<button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel-edit">Cancel</button>
             <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save changes</button>`:`<button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Close</button>
             ${i?`<button class="client-modal__btn client-modal__btn--primary" type="button" data-act="edit"><span class="material-symbols-outlined" aria-hidden="true">edit</span> Edit answers</button>`:``}`}
      </div>`,s.querySelector(`[data-act="done"]`)?.addEventListener(`click`,a),s.querySelector(`[data-act="cancel-edit"]`)?.addEventListener(`click`,()=>d(e,!1)),s.querySelector(`[data-act="edit"]`)?.addEventListener(`click`,()=>d(e,!0));let l=s.querySelector(`[data-act="save"]`);l?.addEventListener(`click`,async()=>{let t=lr(s);l.disabled=!0;let r=l.innerHTML;l.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…`;let i;try{i=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({answers:t})});let r=await i.json().catch(()=>({}));if(!i.ok||!r.ok)throw Error(r.error||r.message||`Failed (HTTP ${i.status})`);Fy(`Answers updated`,`success`);let a=await(await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}`)).json().catch(()=>({}));d(a.ok?a.data:{...e,answers:t},!1)}catch(t){if(i&&i.status===423){Fy(t.message||`This questionnaire is now locked.`,`info`);let r=await(await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}`)).json().catch(()=>({}));d(r.ok?r.data:e,!1);return}s.querySelector(`#qm-error`).textContent=t.message||`Something went wrong. Please try again.`,l.disabled=!1,l.innerHTML=r}})}try{let t=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse?owner_guid=${encodeURIComponent(e)}`),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`HTTP ${t.status}`);let i=(r.data||[])[0]||null;if(!i){c();return}if(i.status===`DRAFT`){l(i);return}if(i.status===`CANCELLED`){u(i);return}let a=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(i.guid)}`),o=await a.json().catch(()=>({}));if(!a.ok||!o.ok)throw Error(o.error||`HTTP ${a.status}`);d(o.data)}catch(e){console.warn(`[clients] questionnaire load failed:`,e),s.innerHTML=`<p class="client-modal__error">Could not load questionnaire status. ${X(e.message||``)}</p>`}}var Yy,Xy,Zy,Qy,$y,X,eb,tb,nb,rb=o((()=>{w(),et(),Yy=u(f(),1),m(),sn(),hr(),Xy=`reseller_org`,Zy=`managed_client`,Qy=!1,$y={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},X=e=>String(e??``).replace(/[&<>"']/g,e=>$y[e]),eb=e=>String(e||`?`).trim().split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,tb=e=>String(e||``).replace(/[^0-9]/g,``),nb={render:Vy,init:Hy}})),ib=c({default:()=>Cb,init:()=>pb,loadTeam:()=>mb,render:()=>fb});function ab(){let e=C.getActiveOrg(),t=e&&e.channel!==_b?e:null;if(!t){let e=C.getMemberships().find(e=>e.channel!==_b);e&&(t={guid:e.orgGuid,channel:e.channel,memberRole:e.memberRole})}if(!t)return null;let n=C.getMemberships().find(e=>e.orgGuid===t.guid)?.name;return{...t,name:n}}function ob(e){return Object.values(Re).filter(t=>Le(e,t.value)).sort((e,t)=>t.rank-e.rank)}function sb(){if(vb)return;let e=document.createElement(`style`);e.id=`m5t-team-styles`,e.textContent=`
    .page-shell .team-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-list { display: flex; flex-direction: column; }
    .page-shell .team-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
    /* Restated because the author display rule above beats the UA's [hidden] rule,
       and core/listExpand.js hides capped rows with setAttribute('hidden'). Without
       this the cap is a no-op: the control reads "Showing 25 of N" above N visible
       rows. Same failure deliberate-fixed once already at deliverable-fill-route.js. */
    .page-shell .team-row[hidden] { display: none; }
    .page-shell .team-row:last-child { border-bottom: 0; }
    .page-shell .team-avatar { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.8rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .team-main { flex: 1 1 auto; min-width: 0; }
    .page-shell .team-name { font-weight: 600; font-size: 0.92rem; }
    .page-shell .team-email { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .team-role { flex: 0 0 auto; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-role[data-role="owner"] { background: var(--color-accent-strong-soft, #FBF1D2); color: var(--color-accent-strong, #915E00); }
    .page-shell .team-role[data-role="admin"] { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }

    .team-pending { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 10px 12px; margin-bottom: 18px; background: var(--color-surface, #F4F7FB); }
    .team-pending__label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .team-pending__row[hidden] { display: none; }
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
  `,document.head.appendChild(e),vb=!0}function cb(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function lb(e,t,n){let r=e.member_role||`member`,i=e.entity_guid&&e.entity_guid===C.getEntity?.()?.guid,a=n&&!i&&ob(t.memberRole).some(e=>e.value===r);return`
    <div class="team-row">
      <span class="team-avatar">${bb(Sb(e.name||e.email))}</span>
      <span class="team-main">
        <div class="team-name">${bb(e.name||e.email)}${e.verified?``:` · <span style="color:var(--color-text-subtle,#6C7C9A);font-weight:400;">pending verification</span>`}</div>
        <div class="team-email" title="${bb(e.email)}">${bb(e.email)}</div>
      </span>
      <span class="team-role" data-role="${bb(r)}">${bb(Re[r]?.label||r)}</span>
      ${a?`<button class="team-modal__btn team-modal__btn--ghost team-remove" type="button" data-id="${bb(e.id)}" data-name="${bb(e.name||e.email)}">Remove</button>`:``}
    </div>`}async function ub(e,t){let{uid:n,email:r}=e.dataset;if(window.confirm(`Revoke the invitation for ${r}?\n\nThe invitation link stops working immediately, including any copy already sent. You can invite this address again afterwards.`)){e.disabled=!0;try{let e=C.getConfig?.().BASE_URL||``,i=await fetch(`${e}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/invites/${encodeURIComponent(n)}`,{method:`DELETE`}),a=await i.json().catch(()=>({}));if(!i.ok||!a.ok)throw Error(a.message||a.error||`HTTP ${i.status}`);xb(`Invitation for ${r} revoked`,`success`)}catch(t){e.disabled=!1,xb(t.message||`Could not revoke that invitation.`,`error`);return}try{await mb(t)}catch{}}}async function db(e,t){let{id:n,name:r}=e.dataset;if(window.confirm(`Remove ${r} from the team?\n\nThey lose access to this workspace immediately. Their account itself is not deleted, and you can invite them again later.`)){e.disabled=!0;try{let e=C.getConfig?.().BASE_URL||``,t=await fetch(`${e}/m5t/v5/acctGroupMember/${encodeURIComponent(n)}`,{method:`DELETE`}),i=await t.json().catch(()=>({}));if(!t.ok||!i.ok)throw Error(i.message||i.error||`HTTP ${t.status}`);xb(`${r} removed from the team`,`success`)}catch(t){e.disabled=!1,xb(t.message||`Could not remove that member.`,`error`);return}try{await mb(t)}catch{}}}function fb(){return sb(),`
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
          ${cb(`hourglass_empty`,`Loading team…`)}
        </div>
      </div>
    </div>`}async function pb(){let e=ab(),t=document.getElementById(`team-invite-btn`);if(!e){t&&(t.style.display=`none`),document.getElementById(`team-body`).innerHTML=cb(`info`,`Team management is available for agency and workspace accounts.`);return}t?.addEventListener(`click`,()=>hb(e)),await mb(e)}async function mb(e){let t=document.getElementById(`team-body`),n=document.getElementById(`team-count`);if(t)try{let r=C.getConfig?.().BASE_URL||``,[i,a]=await Promise.all([fetch(`${r}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/members`),fetch(`${r}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/invites`)]),[o,s]=await Promise.all([i.json().catch(()=>({})),a.json().catch(()=>({}))]);if(!i.ok||!a.ok)throw Error(`Failed to load team (members: ${i.status}, invites: ${a.status})`);let c=o.members||[],l=s.invites||[],u=ob(e.memberRole).length>0;t.innerHTML=(l.length?`
      <div class="team-pending">
        <div class="team-pending__label">Pending invites</div>
        ${l.map(e=>`
          <div class="team-pending__row">
            <span class="team-pending__email" title="${bb(e.email)}">${bb(e.email)}${e.expired?` · expired`:``}</span>
            <button class="team-modal__btn team-modal__btn--ghost team-copy" type="button" data-url="${bb(e.inviteUrl)}">Copy link</button>
            ${u?`<button class="team-modal__btn team-modal__btn--ghost team-revoke" type="button" data-uid="${bb(e.uid)}" data-email="${bb(e.email)}">Revoke</button>`:``}
          </div>`).join(``)}
      </div>`:``)+(c.length?`<div class="team-list">${c.map(t=>lb(t,e,u)).join(``)}</div>`:cb(`group`,`No members yet.`)),n&&(n.textContent=`${c.length} member${c.length===1?``:`s`}`),t.querySelectorAll(`.team-copy`).forEach(e=>e.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.dataset.url),e.textContent=`Copied!`,setTimeout(()=>{e.textContent=`Copy link`},1500)}catch{}})),t.querySelectorAll(`.team-revoke`).forEach(t=>t.addEventListener(`click`,()=>ub(t,e))),t.querySelectorAll(`.team-remove`).forEach(t=>t.addEventListener(`click`,()=>db(t,e)));let d=t.querySelector(`.team-list`);d&&E(d,{rowSelector:`.team-row`,noun:`members`});let f=t.querySelector(`.team-pending`);f&&E(f,{rowSelector:`.team-pending__row`,noun:`invites`})}catch(e){console.warn(`[team] load failed:`,e),t.innerHTML=cb(`error`,`Couldn’t load the team. Please try again.`)}}function hb(e){let t=ob(e.memberRole);if(!t.length){xb(`You don’t have permission to invite teammates.`,`error`);return}let n=document.createElement(`div`);n.className=`team-modal-scrim`;let r=document.createElement(`div`);r.className=`team-modal`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.innerHTML=`
    <div class="team-modal__head">
      <span class="team-modal__title">Invite a teammate</span>
      <button class="team-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="team-modal__body" id="team-invite-body">
      <p class="team-modal__sub">They'll get a link to set a password and join <strong>${bb(e.name||`your workspace`)}</strong>.</p>
      <label class="team-modal__label" for="tm-email">Email</label>
      <input class="team-modal__input" id="tm-email" type="email" placeholder="teammate@company.com" autocomplete="off" />
      <div class="team-modal__row">
        <div><label class="team-modal__label" for="tm-first">First name</label><input class="team-modal__input" id="tm-first" type="text" autocomplete="off" /></div>
        <div><label class="team-modal__label" for="tm-last">Last name</label><input class="team-modal__input" id="tm-last" type="text" autocomplete="off" /></div>
      </div>
      <label class="team-modal__label" for="tm-role">Role</label>
      <select class="team-modal__select" id="tm-role">
        ${t.map(e=>`<option value="${e.value}"${e.value===`member`?` selected`:``}>${bb(e.label)}</option>`).join(``)}
      </select>
      <p class="team-modal__error" id="tm-error"></p>
      <div class="team-modal__actions">
        <button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="team-modal__btn team-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`,document.body.appendChild(n),document.body.appendChild(r),requestAnimationFrame(()=>{n.classList.add(`open`),r.classList.add(`open`)});let i=()=>{n.classList.remove(`open`),r.classList.remove(`open`),document.removeEventListener(`keydown`,a),setTimeout(()=>{n.remove(),r.remove()},200)},a=e=>{e.key===`Escape`&&i()};document.addEventListener(`keydown`,a),n.addEventListener(`click`,i),r.querySelector(`.team-modal__close`)?.addEventListener(`click`,i),r.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,i),r.querySelector(`#tm-email`)?.focus();let o=r.querySelector(`#tm-error`),s=r.querySelector(`[data-act="send"]`);s?.addEventListener(`click`,async()=>{let t=(r.querySelector(`#tm-email`).value||``).trim(),n=(r.querySelector(`#tm-first`).value||``).trim(),a=(r.querySelector(`#tm-last`).value||``).trim(),c=r.querySelector(`#tm-role`).value;if(o.textContent=``,!t||!n||!a){o.textContent=`Email, first, and last name are required.`;return}s.disabled=!0;let l=s.innerHTML;s.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…`;try{let o=C.getConfig?.().BASE_URL||``,s=await fetch(`${o}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/invite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:t,first:n,last:a,member_role:c})}),l=await s.json().catch(()=>({}));if(!s.ok||!l.ok){let e=s.status===409?`A user with that email already exists.`:s.status===403?l.message||`You are not authorized to invite this role.`:l.message||l.error||`Failed (HTTP ${s.status})`;throw Error(e)}xb(`Invite created for ${t}`,`success`),r.querySelector(`#team-invite-body`).innerHTML=`
        <div class="team-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${l.emailQueued?`An invite email is on its way to <strong>${bb(t)}</strong>.`:`Invite created for <strong>${bb(t)}</strong>.`}</p>
          <p class="team-modal__sub">Or share this link directly:</p>
          <div class="team-modal__linkrow">
            <input class="team-modal__input" id="tm-link" type="text" readonly value="${bb(l.inviteUrl)}" />
            <button class="team-modal__btn team-modal__btn--primary" type="button" id="tm-copy">Copy</button>
          </div>
          <div class="team-modal__actions"><button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;let u=r.querySelector(`#tm-link`);r.querySelector(`#tm-copy`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(u.value),r.querySelector(`#tm-copy`).textContent=`Copied!`}catch{u.select()}}),r.querySelector(`[data-act="done"]`)?.addEventListener(`click`,()=>{i(),mb(e)})}catch(e){console.warn(`[team] invite failed:`,e),o.textContent=e.message||`Something went wrong. Please try again.`,s.disabled=!1,s.innerHTML=l}})}var gb,_b,vb,yb,bb,xb,Sb,Cb,wb=o((()=>{w(),gb=u(f(),1),m(),et(),sn(),_b=`managed_client`,vb=!1,yb={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},bb=e=>String(e??``).replace(/[&<>"']/g,e=>yb[e]),xb=(e,t=`info`)=>{try{gb.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Sb=e=>String(e||`?`).trim().split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,Cb={render:fb,init:pb}}));m(),Ee(),w(),Wt(),y(),An(),Ln(),it(),window.m5t=Object.create(null),window.m5t.pubsub=b.default,console.log(`StreamSyncEngage SaaS Client - Starting...`),console.log(`Environment:`,`production`),console.log(`Document readyState:`,document.readyState),console.log(`window.mvvLegit:`,typeof window.mvvLegit),console.log(`globalThis.mvvLegit:`,typeof globalThis.mvvLegit);try{console.log(`mvvLegit (direct):`,typeof mvvLegit)}catch(e){console.log(`mvvLegit (direct): ReferenceError -`,e.message)}var Tb=Object.keys(window).filter(e=>e.toLowerCase().includes(`mvv`)||e.toLowerCase().includes(`neodigm`)||e.toLowerCase().includes(`legit`));console.log(`Possible Neodigm globals:`,Tb);var Z=new ee.default(`/`,{hash:!0});window.router=Z;function Q(e){let t=e?`${e.replace(/-/g,`_`)}_route`:`splash_route`;return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),b.default.publish(p.UI_TOAST,{message:`Please sign in to access this page`,type:`warning`}),!1)}function $(e){console.log(`[Router] Navigating to:`,e),Z.navigate(`/${e}`)}var Eb=new Set([`splash`,`signin`,`signup`,`forgot`,`resethash`,`verf-link`,`accept-invite`,`signout`]),Db={},Ob={},kb=null,Ab={admin:{caption:`Platform Admin`,icon:`shield_person`},reseller:{caption:`Reseller`,icon:`handshake`},managed:{caption:`Managed`,icon:`visibility`},self_serve:{caption:`Self-Serve`,icon:`rocket_launch`}},jb=`__portfolio__`;function Mb(){try{Z._setCurrent(null)}catch{}Z.resolve()}function Nb(){let e=document.getElementById(`m5t-side-nav`);if(!e)return;let t=!C.getScope()&&C.isAuthenticated(),n=C.getCapabilities(),r=C.getUiMode(),i=Yt.getSideNav(n,{uiMode:r});Db={},Ob={};let a=e=>{e.route&&(Db[e.route]={sectionToken:e.token,childToken:null,children:e.children||null},Array.isArray(e.children)&&e.children.forEach(t=>{t.route&&(Ob[t.token]=t.route,Db[t.route]={sectionToken:e.token,childToken:t.token,children:e.children})}))},o=e=>e.forEach(e=>{e.group&&Array.isArray(e.items)?o(e.items):a(e)});o(i);let s=C.getMemberships(),c=C.getActiveOrg(),l=C.getManagedClients(),u=C.getStoredActiveOrg(),d=l.length?[{guid:jb,name:`Portfolio (all clients)`},...s.map(e=>({guid:e.orgGuid,name:e.name||e.channel,channel:e.channel,group:`Your organization`})),...l.map(e=>({guid:e.orgGuid,name:e.name||e.orgGuid,channel:e.channel,group:`Clients`}))]:s.map(e=>({guid:e.orgGuid,name:e.name||e.channel,channel:e.channel}));e.setState({buttons:i,orgs:d,activeOrg:l.length?u||jb:c?.guid||null,footerBadge:Ab[r]||null,loading:t}),Fb(),kb&&Ib(kb)}var Pb=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function Fb(){let e=document.getElementById(`app-content`);if(!e)return;let t=document.getElementById(`org-context-banner`);t||(t=document.createElement(`div`),t.id=`org-context-banner`,e.insertBefore(t,e.firstChild),xn(t));let n=C.getActiveOrg(),r=C.isPreviewingAsClient(),i=!!n?.viaSubtree&&!!kb&&!Eb.has(kb);if(t.hidden=!i,!i){t.innerHTML=``;return}let a=Pb(n.name||`Client`);t.innerHTML=`
    <style>
      #org-context-banner .ocb {
        display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        /* Right padding wider than the other 3 sides — #m5t-notif-bell floats
           fixed at right:20px (40px wide, z-index:90, above everything), so the
           banner's own content needs a real gutter here or its rightmost button
           renders underneath the bell. */
        padding: 10px 84px 10px 48px; font-size: 0.86rem; font-weight: 500;
        background: ${r?`color-mix(in srgb, var(--color-warning, #edba08) 16%, var(--color-surface, #F4F7FB))`:`color-mix(in srgb, var(--color-primary-600, #364C75) 10%, var(--color-surface, #F4F7FB))`};
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
        background: var(--color-bg, #fff); color: inherit; font: inherit; font-size: 0.8rem;
        font-weight: 600; padding: 5px 12px; border-radius: var(--radius-md, 8px); cursor: pointer;
        display: inline-flex; align-items: center; gap: 6px;
      }
      #org-context-banner .ocb-btn:hover { border-color: var(--color-primary-600, #364C75); }
      @media (max-width: 768px) { #org-context-banner .ocb { padding: 10px 84px 10px 64px; } }
    </style>
    <div class="ocb" role="status">
      <span class="ms" aria-hidden="true">${r?`visibility`:`supervised_user_circle`}</span>
      <span>${r?`Previewing as <strong>${a}</strong>`:`Viewing client: <strong>${a}</strong>`}</span>
      <span class="ocb-spacer"></span>
      <button type="button" class="ocb-btn" data-ocb="preview">
        <span class="ms" aria-hidden="true">${r?`visibility_off`:`visibility`}</span>
        ${r?`Exit preview`:`Preview`}
      </button>
      <button type="button" class="ocb-btn" data-ocb="portfolio">
        <span class="ms" aria-hidden="true">arrow_back</span> Back to portfolio
      </button>
    </div>`,t.querySelector(`[data-ocb="preview"]`)?.addEventListener(`click`,()=>{C.setPreviewAsClient(!C.isPreviewingAsClient()),Mb()}),t.querySelector(`[data-ocb="portfolio"]`)?.addEventListener(`click`,()=>{C.setPreviewAsClient(!1),C.setActiveOrg(null)})}function Ib(e){let t=document.getElementById(`m5t-side-nav`),n=Db[`/${e}`]||Db[e]||null;t?.setActiveToken(n?.sectionToken||null),Lb(n)}function Lb(e){let t=document.getElementById(`m5t-sub-nav`),n=document.getElementById(`app-shell`);if(!t)return;if(Eb.has(kb)){t.hidden=!0,n?.classList.remove(`has-sub-nav`);return}let r=e?.children;t.hidden=!1,r&&r.length>1?(t.updateButtons(r.map(t=>({token:t.token,caption:t.caption,enabled:!0,selected:t.token===e.childToken}))),n?.classList.add(`has-sub-nav`)):(t.updateButtons([]),n?.classList.remove(`has-sub-nav`))}function Rb(){let e=Ut.getAvailableLanguages&&Ut.getAvailableLanguages()||[];if(e.length<2){b.default.publish(p.UI_TOAST,{message:`Only one language is available`,type:`info`});return}let t=localStorage.getItem(v.FF_SSE_LS_USER_LANG)||v.FF_SSE_I18N_LANG||e[0],n=e[(e.indexOf(t)+1)%e.length];Ut.setLanguage(n),b.default.publish(p.UI_TOAST,{message:`Language: ${n}`,type:`info`})}function zb(){document.documentElement.classList.toggle(`ff-no-animations`,On())}function Bb(){let e=document.getElementById(`m5t-side-nav`);if(!e)return;Yt.setAppToken(`client-saas`),kn(e),document.getElementById(`app-shell`)?.classList.toggle(`nav-collapsed`,e.getAttribute(`data-collapsed`)===`true`),e.addEventListener(`nav-select`,e=>{let t=e.detail?.route;t&&Z.navigate(t.startsWith(`/`)?t:`/${t}`)}),e.addEventListener(`logo-click`,()=>Z.navigate(`/home`)),e.addEventListener(`nav-collapse`,e=>{document.getElementById(`app-shell`)?.classList.toggle(`nav-collapsed`,!!e.detail?.collapsed)}),e.addEventListener(`org-switch`,e=>{let t=e.detail?.orgGuid;t&&C.setActiveOrg(t===jb?null:t)}),e.addEventListener(`footer-action`,e=>{switch(e.detail?.action){case`account`:Z.navigate(`/settings`);break;case`signout`:Z.navigate(`/signout`);break;case`lang`:Rb();break;case`theme`:Fn()}}),document.getElementById(`m5t-sub-nav`)?.addEventListener(`nav-select`,e=>{let t=Ob[e.detail?.token];t&&Z.navigate(t)}),document.addEventListener(`language-changed`,()=>Nb()),Nb(),b.default.subscribe(p.AUTH_SCOPE_LOADED,()=>Nb());let t=()=>{let e=C.getScope();return[e?.uiMode,e?.activeOrg?.guid,(e?.managedClients||[]).length,(e?.capabilities||[]).join(`,`),C.getStoredActiveOrg()].join(`|`)},n=t();b.default.subscribe(p.AUTH_SCOPE_LOADED,()=>{let e=t();e!==n&&(n=e,kb&&!Eb.has(kb)&&Mb())})}function Vb(e){kb=e;let t=document.getElementById(`m5t-side-nav`),n=document.getElementById(`app-shell`);if(!t||!n)return;let r=!Eb.has(e);if(t.hidden=!r,n.classList.toggle(`has-side-nav`,r),_n(r),r)Ib(e);else{let e=document.getElementById(`m5t-sub-nav`);e&&(e.hidden=!0),n.classList.remove(`has-sub-nav`)}Fb()}b.default.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{t?.route&&($t(t.route),Vb(t.route))});var Hb=()=>{console.log(`[Router] Route: splash`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`splash`});let e=be()?.name;S(e===`invite`?()=>Promise.resolve().then(()=>(Gn(),Rn)):e===`questionnaire`?()=>Promise.resolve().then(()=>(Nr(),vr)):e===`deliverable`?()=>Promise.resolve().then(()=>(ci(),Ur)):()=>Promise.resolve().then(()=>(pi(),li)),void 0,import.meta.url).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`splash`})}).catch(e=>{console.error(`[Router] Error loading splash route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`splash`,error:e})})};Z.on(`/`,Hb),Z.on(`/splash`,Hb),Z.on(`/signin`,()=>{console.log(`[Router] Route: /signin`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`signin`}),S(()=>Promise.resolve().then(()=>(Ti(),vi)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`signin`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading signin route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`signin`,error:e})})}),Z.on(`/signup`,()=>{console.log(`[Router] Route: /signup`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`signup`}),S(()=>Promise.resolve().then(()=>(Ri(),ki)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`signup`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading signup route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`signup`,error:e})})}),Z.on(`/verf-link`,()=>{console.log(`[Router] Route: /verf-link`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`verf-link`}),S(()=>Promise.resolve().then(()=>(Hi(),zi)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`verf-link`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading verf-link route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`verf-link`,error:e})})}),Z.on(`/forgot`,()=>{console.log(`[Router] Route: /forgot`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`forgot`}),S(()=>Promise.resolve().then(()=>($i(),Ji)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`forgot`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading forgot route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`forgot`,error:e})})}),Z.on(`/resethash`,()=>{if(console.log(`[Router] Route: /resethash`),!Q(`resethash`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`resethash`}),S(()=>Promise.resolve().then(()=>(aa(),ea)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`resethash`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading resethash route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`resethash`,error:e})})}),Z.on(`/home`,()=>{if(console.log(`[Router] Route: /home`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`home`}),S(()=>Promise.resolve().then(()=>(mo(),Va)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`home`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading home route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`home`,error:e})})}),Z.on(`/signout`,()=>{if(console.log(`[Router] Route: /signout`),!Q(`signout`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`signout`}),S(()=>Promise.resolve().then(()=>(vo(),ho)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`signout`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading signout route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`signout`,error:e})})}),[{path:`/billing`,name:`billing`,title:`Billing`,icon:`receipt_long`},{path:`/magnets/drafts`,name:`magnets/drafts`,title:`Magnets · Drafts`,icon:`widgets`},{path:`/magnets/archived`,name:`magnets/archived`,title:`Magnets · Archived`,icon:`widgets`}].forEach(({path:e,name:t,title:n,icon:r})=>{Z.on(e,()=>{if(console.log(`[Router] Route: ${e}`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:t}),S(()=>Promise.resolve().then(()=>(To(),yo)).then(e=>{let i=document.getElementById(`app`);i.innerHTML=e.render({title:n,icon:r,name:t}),e.init&&e.init({name:t}),b.default.publish(p.ROUTE_NAV_AFTER,{route:t})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading section route (${t}):`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:t,error:e})})})}),Z.on(`/settings`,()=>{if(console.log(`[Router] Route: /settings`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings`}),S(()=>Promise.resolve().then(()=>(Yo(),Eo)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-general route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings`,error:e})})}),Z.on(`/settings/workspace`,()=>{if(console.log(`[Router] Route: /settings/workspace`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/workspace`}),S(()=>Promise.resolve().then(()=>(Es(),Xo)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/workspace`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-workspace route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/workspace`,error:e})})}),Z.on(`/settings/notifications`,()=>{if(console.log(`[Router] Route: /settings/notifications`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/notifications`}),S(()=>Promise.resolve().then(()=>(Qs(),Ds)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/notifications`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-notifications route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/notifications`,error:e})})}),Z.on(`/settings/integrations`,()=>{if(console.log(`[Router] Route: /settings/integrations`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/integrations`}),S(()=>Promise.resolve().then(()=>(nl(),Gc)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/integrations`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-integrations route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/integrations`,error:e})})}),Z.on(`/settings/integrations/:provider`,e=>{let t=e?.data?.provider||``;if(console.log(`[Router] Route: /settings/integrations/`+t),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/integrations`}),S(()=>Promise.resolve().then(()=>(Tl(),rl)).then(e=>{let n=document.getElementById(`app`);n.innerHTML=e.render({provider:t}),e.init&&e.init({provider:t}),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/integrations`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading integration detail route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/integrations`,error:e})})}),Z.on(`/settings/security`,()=>{if(console.log(`[Router] Route: /settings/security`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/security`}),S(()=>Promise.resolve().then(()=>(Xl(),El)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/security`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-security route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/security`,error:e})})}),Z.on(`/conversations`,()=>{if(console.log(`[Router] Route: /conversations`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`conversations`}),S(()=>Promise.resolve().then(()=>(bu(),Zl)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`conversations`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading conversations route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`conversations`,error:e})})}),Z.on(`/ab-testing`,()=>{if(console.log(`[Router] Route: /ab-testing`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`ab-testing`}),S(()=>Promise.resolve().then(()=>(Ku(),xu)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`ab-testing`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading ab-testing route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`ab-testing`,error:e})})}),Z.on(`/magnets`,()=>{if(console.log(`[Router] Route: /magnets`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`magnets`}),S(()=>Promise.resolve().then(()=>(Pm(),Wf)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`magnets`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading magnets route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`magnets`,error:e})})}),Z.on(`/templates`,()=>{console.log(`[Router] Route: /templates`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`templates`}),S(()=>Promise.resolve().then(()=>(Xm(),Fm)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`templates`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading templates route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`templates`,error:e})})}),Z.on(`/questionnaires`,()=>{if(console.log(`[Router] Route: /questionnaires`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`questionnaires`}),S(()=>Promise.resolve().then(()=>(Ch(),Zm)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`questionnaires`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading questionnaires route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`questionnaires`,error:e})})}),Z.on(`/deliverables`,()=>{if(console.log(`[Router] Route: /deliverables`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`deliverables`});let e=C.getUiMode?.();S(e===`reseller`||e===`admin`?()=>Promise.resolve().then(()=>(og(),wh)):()=>Promise.resolve().then(()=>(bg(),sg)),void 0,import.meta.url).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`deliverables`})}).catch(e=>{console.error(`[Router] Error loading deliverables route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`deliverables`,error:e})})}),Z.on(`/leads`,()=>{if(console.log(`[Router] Route: /leads`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`leads`}),S(()=>Promise.resolve().then(()=>(__(),xg)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`leads`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading leads route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`leads`,error:e})})}),Z.on(`/analytics`,()=>{if(console.log(`[Router] Route: /analytics`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`analytics`}),S(()=>Promise.resolve().then(()=>(B_(),v_)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`analytics`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading analytics route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`analytics`,error:e})})}),Z.on(`/analytics/conversions`,()=>{if(console.log(`[Router] Route: /analytics/conversions`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`analytics/conversions`}),S(()=>Promise.resolve().then(()=>(bv(),V_)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`analytics/conversions`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading conversions route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`analytics/conversions`,error:e})})}),Z.on(`/analytics/traffic`,()=>{if(console.log(`[Router] Route: /analytics/traffic`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`analytics/traffic`}),S(()=>Promise.resolve().then(()=>(Bv(),xv)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`analytics/traffic`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading traffic route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`analytics/traffic`,error:e})})}),Z.on(`/analytics/ad-performance`,()=>{if(console.log(`[Router] Route: /analytics/ad-performance`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`analytics/ad-performance`}),S(()=>Promise.resolve().then(()=>(ly(),Vv)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`analytics/ad-performance`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading ad-performance route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`analytics/ad-performance`,error:e})})}),Z.on(`/ad-accounts`,()=>{if(console.log(`[Router] Route: /ad-accounts`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`ad-accounts`}),S(()=>Promise.resolve().then(()=>(Ny(),uy)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`ad-accounts`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading ad-accounts route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`ad-accounts`,error:e})})}),Z.on(`/clients`,()=>{if(console.log(`[Router] Route: /clients`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`clients`}),S(()=>Promise.resolve().then(()=>(rb(),Py)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`clients`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading clients route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`clients`,error:e})})}),Z.on(`/team`,()=>{if(console.log(`[Router] Route: /team`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`team`}),S(()=>Promise.resolve().then(()=>(wb(),ib)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`team`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading team route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`team`,error:e})})}),Z.notFound(()=>{console.log(`[Router] Route not found - redirecting to splash`),$(`splash`)}),b.default.subscribe(p.ROUTE_NAV,(e,t)=>{console.log(`[Router] ROUTE_NAV event received:`,t),t?.route&&$(t.route)});function Ub(){console.log(`[App] Waiting for Neodigm 55 library...`);let e=0,t=setInterval(()=>{e++,e%10==0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<`u`,neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<`u`?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(t),Wb()):e>=100&&(clearInterval(t),console.error(`[App] Failed to load Neodigm 55 library after 10 seconds`),console.error(`[App] Check browser console for CORS or network errors`),document.getElementById(`app`).innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,b.default.publish(p.APP_ERROR,{message:`Failed to load authentication library`}))},100)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Ub):Ub();async function Wb(){if(console.log(`[App] Neodigm 55 loaded, initializing...`),Mn(),zb(),ue(),Ut.initialize(),console.log(`[App] I18n Controller initialized`),!await C.init({BASE_URL:`https://machfivemagnet-saas.onrender.com`,navigateFunction:e=>{console.log(`[AuthController] Navigation requested:`,e),$(e)}})){console.error(`[App] AuthController initialization failed`);return}let e=C.getEntity();e&&(console.log(`[App] Session restored for:`,e.email),b.default.publish(p.APP_USER_LOADED,{entity:e}),C.isAuthenticated()&&(localStorage.getItem(C.CONFIG.LS_KEYS.ACTIVE_ORG)?await C.fetchScope():C.fetchScope())),b.default.publish(p.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),Bb(),Tn(),Z.resolve(),window.AuthController=C,window.I18nController=Ut,window.MachVive=Gt,console.log(`[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)`)}b.default.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{Ut!==void 0&&Ut.refresh&&setTimeout(()=>{Ut.refresh()},100)});
//# sourceMappingURL=index.js.map