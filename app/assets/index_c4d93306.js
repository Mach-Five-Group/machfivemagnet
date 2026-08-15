var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var d=s(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define(`Navigo`,[],r):typeof e==`object`?e.Navigo=r():n.Navigo=r()})(typeof self<`u`?self:e,(function(){return function(){var e={407:function(e,t,n){n.d(t,{default:function(){return de}});var r=/([:*])(\w+)/g,i=/\*/g,a=/\/\?/g;function o(e){return e===void 0&&(e=`/`),h()?location.pathname+location.search+location.hash:e}function s(e){return e.replace(/\/+$/,``).replace(/^\/+/,``)}function c(e){return typeof e==`string`}function l(e){return e&&e.indexOf(`#`)>=0&&e.split(`#`).pop()||``}function u(e){var t=s(e).split(/\?(.*)?$/);return[s(t[0]),t.slice(1).join(``)]}function d(e){for(var t={},n=e.split(`&`),r=0;r<n.length;r++){var i=n[r].split(`=`);if(i[0]!==``){var a=decodeURIComponent(i[0]);t[a]?(Array.isArray(t[a])||(t[a]=[t[a]]),t[a].push(decodeURIComponent(i[1]||``))):t[a]=decodeURIComponent(i[1]||``)}}return t}function f(e,t){var n,o=u(s(e.currentLocationPath)),f=o[0],p=o[1],m=p===``?null:d(p),h=[];if(c(t.path)){if(n=`(?:/^|^)`+s(t.path).replace(r,(function(e,t,n){return h.push(n),`([^/]+)`})).replace(i,`?(?:.*)`).replace(a,`/?([^/]+|)`)+`$`,s(t.path)===``&&s(f)===``)return{url:f,queryString:p,hashString:l(e.to),route:t,data:null,params:m}}else n=t.path;var g=new RegExp(n,``),_=f.match(g);if(_){var v=c(t.path)?function(e,t){return t.length===0?null:e?e.slice(1,e.length).reduce((function(e,n,r){return e===null&&(e={}),e[t[r]]=decodeURIComponent(n),e}),null):null}(_,h):_.groups?_.groups:_.slice(1);return{url:s(f.replace(RegExp(`^`+e.instance.root),``)),queryString:p,hashString:l(e.to),route:t,data:v,params:m}}return!1}function p(){return!(typeof window>`u`||!window.history||!window.history.pushState)}function m(e,t){return e[t]===void 0||!0===e[t]}function h(){return typeof window<`u`}function g(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter((function(e){return e})).forEach((function(e){[`before`,`after`,`already`,`leave`].forEach((function(n){e[n]&&(t[n]||(t[n]=[]),t[n].push(e[n]))}))})),t}function _(e,t,n){var r=t||{},i=0;(function t(){e[i]?Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](r)?e[i][1]:e[i][2])),t()):e[i](r,(function(e){e===void 0||!0===e?(i+=1,t()):n&&n(r)})):n&&n(r)})()}function v(e,t){e.currentLocationPath===void 0&&(e.currentLocationPath=e.to=o(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function y(e,t){for(var n=0;n<e.instance.routes.length;n++){var r=f(e,e.instance.routes[n]);if(r&&(e.matches||=[],e.matches.push(r),e.resolveOptions.strategy===`ONE`))return void t()}t()}function ee(e,t){e.navigateOptions&&(e.navigateOptions.shouldResolve!==void 0&&console.warn(`"shouldResolve" is deprecated. Please check the documentation.`),e.navigateOptions.silent!==void 0&&console.warn(`"silent" is deprecated. Please check the documentation.`)),t()}function b(e,t){!0===e.navigateOptions.force?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}_.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};var x=h(),te=p();function ne(e,t){if(m(e.navigateOptions,`updateBrowserURL`)){var n=(`/`+e.to).replace(/\/\//g,`/`),r=x&&e.resolveOptions&&!0===e.resolveOptions.hash;te?(history[e.navigateOptions.historyAPIMethod||`pushState`](e.navigateOptions.stateObj||{},e.navigateOptions.title||``,r?`#`+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout((function(){if(!r){var t=location.hash;location.hash=``,location.hash=t}e.instance.__freezeListening=!1}),1))):x&&(window.location.href=e.to)}t()}function S(e,t){var n=e.instance;n.lastResolved()?_(n.lastResolved().map((function(t){return function(n,r){if(t.route.hooks&&t.route.hooks.leave){var i=!1,a=e.instance.matchLocation(t.route.path,e.currentLocationPath,!1);i=t.route.path===`*`?!(e.matches&&e.matches.find((function(e){return t.route.path===e.route.path}))):!a,m(e.navigateOptions,`callHooks`)&&i?_(t.route.hooks.leave.map((function(t){return function(n,r){return t((function(t){!1===t?e.instance.__markAsClean(e):r()}),e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}})).concat([function(){return r()}])):r()}else r()}})),{},(function(){return t()})):t()}function re(e,t){m(e.navigateOptions,`updateState`)&&e.instance._setCurrent(e.matches),t()}var ie=[function(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString)return n.forEach((function(t){t.route.hooks&&t.route.hooks.already&&m(e.navigateOptions,`callHooks`)&&t.route.hooks.already.forEach((function(t){return t(e.match)}))})),void t(!1);t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.before&&m(e.navigateOptions,`callHooks`)?_(e.match.route.hooks.before.map((function(t){return function(n,r){return t((function(t){!1===t?e.instance.__markAsClean(e):r()}),e.match)}})).concat([function(){return t()}])):t()},function(e,t){m(e.navigateOptions,`callHandler`)&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.after&&m(e.navigateOptions,`callHooks`)&&e.match.route.hooks.after.forEach((function(t){return t(e.match)})),t()}],ae=[S,function(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var r=u(e.currentLocationPath),i=r[0],a=r[1],o=l(e.to);n.path=s(i);var c={url:n.path,queryString:a,hashString:o,data:null,route:n,params:a===``?null:d(a)};e.matches=[c],e.match=c}t()},_.if((function(e){return e.notFoundHandled}),ie.concat([re]),[function(e,t){e.resolveOptions&&!1!==e.resolveOptions.noMatchWarning&&e.resolveOptions.noMatchWarning!==void 0||console.warn(`Navigo: "`+e.currentLocationPath+`" didn't match any of the registered routes.`),t()},function(e,t){e.instance._setCurrent(null),t()}])];function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){var n=0;S(e,(function r(){n===e.matches.length?re(e,t):_(ie,oe({},e,{match:e.matches[n]}),(function(){n+=1,r()}))}))}function ce(e){e.instance.__markAsClean(e)}function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ue=`[data-navigo]`;function de(e,t){var n,r=t||{strategy:`ONE`,hash:!1,noMatchWarning:!1,linksSelector:ue},i=this,a=`/`,m=null,x=[],te=!1,S=p(),re=h();function ie(e){return e.indexOf(`#`)>=0&&(e=!0===r.hash?e.split(`#`)[1]||`/`:e.split(`#`)[0]),e}function oe(e){return s(a+`/`+s(e))}function de(e,t,n,r){return e=c(e)?oe(e):e,{name:r||s(String(e)),path:e,handler:t,hooks:g(n)}}function fe(e,t){if(!i.__dirty){i.__dirty=!0,e=e?s(a)+`/`+s(e):void 0;var n={instance:i,to:e,currentLocationPath:e,navigateOptions:{},resolveOptions:le({},r,t)};return _([v,y,_.if((function(e){var t=e.matches;return t&&t.length>0}),se,ae)],n,ce),!!n.matches&&n.matches}i.__waiting.push((function(){return i.resolve(e,t)}))}function pe(e,t){if(i.__dirty)i.__waiting.push((function(){return i.navigate(e,t)}));else{i.__dirty=!0,e=s(a)+`/`+s(e);var n={instance:i,to:e,navigateOptions:t||{},resolveOptions:t&&t.resolveOptions?t.resolveOptions:r,currentLocationPath:ie(e)};_([ee,b,y,_.if((function(e){var t=e.matches;return t&&t.length>0}),se,ae),ne,ce],n,ce)}}function me(){if(re)return(re?[].slice.call(document.querySelectorAll(r.linksSelector||ue)):[]).forEach((function(e){e.getAttribute(`data-navigo`)!==`false`&&e.getAttribute(`target`)!==`_blank`?e.hasListenerAttached||(e.hasListenerAttached=!0,e.navigoHandler=function(t){if((t.ctrlKey||t.metaKey)&&t.target.tagName.toLowerCase()===`a`)return!1;var n=e.getAttribute(`href`);if(n==null)return!1;if(n.match(/^(http|https)/)&&typeof URL<`u`)try{var r=new URL(n);n=r.pathname+r.search}catch{}var a=function(e){if(!e)return{};var t,n=e.split(`,`),r={};return n.forEach((function(e){var n=e.split(`:`).map((function(e){return e.replace(/(^ +| +$)/g,``)}));switch(n[0]){case`historyAPIMethod`:r.historyAPIMethod=n[1];break;case`resolveOptionsStrategy`:t||={},t.strategy=n[1];break;case`resolveOptionsHash`:t||={},t.hash=n[1]===`true`;break;case`updateBrowserURL`:case`callHandler`:case`updateState`:case`force`:r[n[0]]=n[1]===`true`}})),t&&(r.resolveOptions=t),r}(e.getAttribute(`data-navigo-options`));te||(t.preventDefault(),t.stopPropagation(),i.navigate(s(n),a))},e.addEventListener(`click`,e.navigoHandler)):e.hasListenerAttached&&e.removeEventListener(`click`,e.navigoHandler)})),i}function he(e,t,n){var r=x.find((function(t){return t.name===e})),i=null;if(r){if(i=r.path,t)for(var o in t)i=i.replace(`:`+o,t[o]);i=i.match(/^\//)?i:`/`+i}return i&&n&&!n.includeRoot&&(i=i.replace(RegExp(`^/`+a),``)),i}function ge(e){var t=u(s(e)),r=t[0],i=t[1],a=i===``?null:d(i);return{url:r,queryString:i,hashString:l(e),route:de(r,(function(){}),[n],r),data:null,params:a}}function _e(e,t,n){return typeof t==`string`&&(t=ve(t)),t?(t.hooks[e]||(t.hooks[e]=[]),t.hooks[e].push(n),function(){t.hooks[e]=t.hooks[e].filter((function(e){return e!==n}))}):(console.warn(`Route doesn't exists: `+t),function(){})}function ve(e){return typeof e==`string`?x.find((function(t){return t.name===oe(e)})):x.find((function(t){return t.handler===e}))}e?a=s(e):console.warn(`Navigo requires a root path in its constructor. If not provided will use "/" as default.`),this.root=a,this.routes=x,this.destroyed=te,this.current=m,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(e){e.instance.__dirty=!1,e.instance.__waiting.length>0&&e.instance.__waiting.shift()()},this.on=function(e,t,r){var i=this;return typeof e!=`object`||e instanceof RegExp?(typeof e==`function`&&(r=t,t=e,e=a),x.push(de(e,t,[n,r])),this):(Object.keys(e).forEach((function(t){if(typeof e[t]==`function`)i.on(t,e[t]);else{var r=e[t],a=r.uses,o=r.as,s=r.hooks;x.push(de(t,a,[n,s],o))}})),this)},this.off=function(e){return this.routes=x=x.filter((function(t){return c(e)?s(t.path)!==s(e):typeof e==`function`?e!==t.handler:String(t.path)!==String(e)})),this},this.resolve=fe,this.navigate=pe,this.navigateByName=function(e,t,n){var r=he(e,t);return r!==null&&(pe(r.replace(RegExp(`^/?`+a),``),n),!0)},this.destroy=function(){this.routes=x=[],S&&window.removeEventListener(`popstate`,this.__popstateListener),this.destroyed=te=!0},this.notFound=function(e,t){return i._notFoundRoute=de(`*`,e,[n,t],`__NOT_FOUND__`),this},this.updatePageLinks=me,this.link=function(e){return`/`+a+`/`+s(e)},this.hooks=function(e){return n=e,this},this.extractGETParameters=function(e){return u(ie(e))},this.lastResolved=function(){return m},this.generate=he,this.getLinkPath=function(e){return e.getAttribute(`href`)},this.match=function(e){var t={instance:i,currentLocationPath:e,to:e,navigateOptions:{},resolveOptions:r};return y(t,(function(){})),!!t.matches&&t.matches},this.matchLocation=function(e,t,n){t===void 0||n!==void 0&&!n||(t=oe(t));var r={instance:i,to:t,currentLocationPath:t};return v(r,(function(){})),typeof e==`string`&&(e=n===void 0||n?oe(e):e),f(r,{name:String(e),path:e,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return ge(s(o(a)).replace(RegExp(`^`+a),``))},this.addBeforeHook=_e.bind(this,`before`),this.addAfterHook=_e.bind(this,`after`),this.addAlreadyHook=_e.bind(this,`already`),this.addLeaveHook=_e.bind(this,`leave`),this.getRoute=ve,this._pathToMatchObject=ge,this._clean=s,this._checkForAHash=ie,this._setCurrent=function(e){return m=i.current=e},function(){S&&(this.__popstateListener=function(){i.__freezeListening||fe()},window.addEventListener(`popstate`,this.__popstateListener))}.call(this),me.call(this)}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(407)}().default}))})),f=s(((e,t)=>{(function(n,r){var i={};n.PubSub?(i=n.PubSub,console.warn(`PubSub already loaded, using existing version`)):(n.PubSub=i,r(i)),typeof e==`object`?(t!==void 0&&t.exports&&(e=t.exports=i),e.PubSub=i,t.exports=e=i):typeof define==`function`&&define.amd&&define(function(){return i})})(typeof window==`object`&&window||e||global,function(e){var t={},n=-1,r=`*`;function i(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}function a(e){return function(){throw e}}function o(e,t,n){try{e(t,n)}catch(e){setTimeout(a(e),0)}}function s(e,t,n){e(t,n)}function c(e,n,r,i){var a=t[n],c=i?s:o,l;if(Object.prototype.hasOwnProperty.call(t,n))for(l in a)Object.prototype.hasOwnProperty.call(a,l)&&c(a[l],e,r)}function l(e,t,n){return function(){var i=String(e),a=i.lastIndexOf(`.`);for(c(e,e,t,n);a!==-1;)i=i.substr(0,a),a=i.lastIndexOf(`.`),c(e,i,t,n);c(e,r,t,n)}}function u(e){var n=String(e);return!!(Object.prototype.hasOwnProperty.call(t,n)&&i(t[n]))}function d(e){for(var t=String(e),n=u(t)||u(r),i=t.lastIndexOf(`.`);!n&&i!==-1;)t=t.substr(0,i),i=t.lastIndexOf(`.`),n=u(t);return n}function f(e,t,n,r){e=typeof e==`symbol`?e.toString():e;var i=l(e,t,r);return d(e)?(n===!0?i():setTimeout(i,0),!0):!1}e.publish=function(t,n){return f(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return f(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if(typeof r!=`function`)return!1;e=typeof e==`symbol`?e.toString():e,Object.prototype.hasOwnProperty.call(t,e)||(t[e]={});var i=`uid_`+String(++n);return t[e][i]=r,i},e.subscribeAll=function(t){return e.subscribe(r,t)},e.subscribeOnce=function(t,n){var r=e.subscribe(t,function(){e.unsubscribe(r),n.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0&&delete t[n]},e.countSubscriptions=function(e){var n,r,i=0;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0){for(r in t[n])i++;break}return i},e.getSubscriptions=function(e){var n,r=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0&&r.push(n);return r},e.unsubscribe=function(n){var r=typeof n==`string`&&(Object.prototype.hasOwnProperty.call(t,n)||function(e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&n.indexOf(e)===0)return!0;return!1}(n)),i=!r&&typeof n==`string`,a=typeof n==`function`,o=!1,s,c,l;if(r){e.clearSubscriptions(n);return}for(s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(c=t[s],i&&c[n]){delete c[n],o=n;break}if(a)for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&c[l]===n&&(delete c[l],o=!0)}return o}})})),p,m=o((()=>{p=Object.freeze({APP:`APP`,APP_READY:`APP.READY`,APP_ERROR:`APP.ERROR`,APP_SIGNOUT:`APP.SIGNOUT`,APP_AUTH:`APP.AUTH`,APP_USER_LOADED:`APP.USER.LOADED`,ROUTE_NAV:`ROUTE.NAV.GO`,ROUTE_NAV_BEFORE:`ROUTE.NAV.BEFORE`,ROUTE_NAV_AFTER:`ROUTE.NAV.AFTER`,ROUTE_NAV_ERROR:`ROUTE.NAV.ERROR`,AUTH_SIGNIN:`AUTH.SIGNIN.GO`,AUTH_SIGNIN_SUCCESS:`AUTH.SIGNIN.SUCCESS`,AUTH_SIGNIN_FAIL:`AUTH.SIGNIN.FAIL`,AUTH_SIGNUP:`AUTH.SIGNUP.GO`,AUTH_SIGNUP_SUCCESS:`AUTH.SIGNUP.SUCCESS`,AUTH_SIGNUP_FAIL:`AUTH.SIGNUP.FAIL`,AUTH_VERIFY_LINK:`AUTH.VERIFY.LINK`,AUTH_SIGNOUT:`AUTH.SIGNOUT.GO`,AUTH_SIGNOUT_SUCCESS:`AUTH.SIGNOUT.SUCCESS`,AUTH_FORGOT:`AUTH.FORGOT.GO`,AUTH_FORGOT_SUCCESS:`AUTH.FORGOT.SUCCESS`,AUTH_RESETHASH:`AUTH.RESETHASH.GO`,AUTH_RESETHASH_SUCCESS:`AUTH.RESETHASH.SUCCESS`,AUTH_RESETHASH_NAV:`AUTH.RESETHASH.NAV`,AUTH_TOKEN_EXPIRED:`AUTH.TOKEN.EXPIRED`,AUTH_TOKEN_INVALID:`AUTH.TOKEN.INVALID`,AUTH_SCOPE_LOADED:`AUTH.SCOPE.LOADED`,M5T_PRIMARY_NAV:`M5T_PRIMARY_NAV`,M5T_PRIMARY_NAV_LOGO_TAP:`M5T_PRIMARY_NAV.LOGO_TAP`,M5T_PRIMARY_NAV_HOVER:`M5T_PRIMARY_NAV.HOVER`,M5T_PRIMARY_NAV_TAP:`M5T_PRIMARY_NAV.TAP`,M5T_PRIMARY_NAV_DOUBLE_TAP:`M5T_PRIMARY_NAV.DOUBLE_TAP`,M5T_PRIMARY_NAV_LONG_TAP:`M5T_PRIMARY_NAV.LONG_TAP`,M5T_SIDE_NAV:`M5T_SIDE_NAV`,M5T_SIDE_NAV_TAP:`M5T_SIDE_NAV.TAP`,M5T_SIDE_NAV_COLLAPSE:`M5T_SIDE_NAV.COLLAPSE`,M5T_SIDE_NAV_LOGO_TAP:`M5T_SIDE_NAV.LOGO_TAP`,M5T_SIDE_NAV_ORG_SWITCH:`M5T_SIDE_NAV.ORG_SWITCH`,M5T_SIDE_NAV_FOOTER_ACTION:`M5T_SIDE_NAV.FOOTER_ACTION`,UI_LOADING_START:`UI.LOADING.START`,UI_LOADING_END:`UI.LOADING.END`,UI_TOAST:`UI.TOAST`,UI_MODAL_OPEN:`UI.MODAL.OPEN`,UI_MODAL_CLOSE:`UI.MODAL.CLOSE`,UI_THEME_CHANGED:`UI.THEME.CHANGED`,UI_WELCOME_BACK_CLICKED:`UI.WELCOME_BACK_CLICKED`,DATA_REFRESH:`DATA.REFRESH`,DATA_UPDATE:`DATA.UPDATE`,DATA_ERROR:`DATA.ERROR`,I18N:`I18N`,I18N_SET_LANG:`I18N.SET_LANG`,CONVERSATION:`CONVERSATION`,CONVERSATION_PROMPT:`CONVERSATION.PROMPT`,CONVERSATION_PROMPT_AGENT_CANVAS:`CONVERSATION.PROMPT.AGENT_CANVAS`,CONVERSATION_PROMPT_AGENT:`CONVERSATION.PROMPT.AGENT`,CONVERSATION_PROMPT_CANVAS:`CONVERSATION.PROMPT.CANVAS`,CONVERSATION_PROMPT_STAGE:`CONVERSATION.PROMPT.STAGE`,CONVERSATION_RESPONSE:`CONVERSATION.RESPONSE`,CONVERSATION_RESPONSE_CANVAS:`CONVERSATION.RESPONSE.CANVAS`,CONVERSATION_RESPONSE_WORKFLOW:`CONVERSATION.RESPONSE.WORKFLOW`,CANVAS:`CANVAS`,CANVAS_DO_SCROLL:`CANVAS.DO.SCROLL`,MESSAGE:`MESSAGE`,MESSAGE_CREATE:`MESSAGE.CREATE`,MESSAGE_CREATED:`MESSAGE.CREATED`,MESSAGE_EDIT:`MESSAGE.EDIT`,MESSAGE_UPDATED:`MESSAGE.UPDATED`,MESSAGE_DELETE:`MESSAGE.DELETE`,MESSAGE_DELETED:`MESSAGE.DELETED`,MESSAGE_REFRESH:`MESSAGE.REFRESH`})}));function h(e,t=null){if(e in v)return v[e];if(typeof process<`u`&&{}[e]){let t={}[e];return t===`true`?!0:t===`false`?!1:isNaN(t)?t:Number(t)}if({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_API_BASE_URL:`http://localhost:3333`}[e]){let t={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_API_BASE_URL:`http://localhost:3333`}[e];return t===`true`?!0:t===`false`?!1:isNaN(t)?t:Number(t)}return t}function g(e){return h(e,!1)===!0}function _(){return{...v}}var v,y=o((()=>{v=Object.freeze({FF_SSE_LS_SESSION_USER:`mvv_session_user`,FF_SSE_LS_TOKEN:`mvv`,FF_SSE_LS_THEME:`mvv_theme`,FF_SSE_UI_DARK_MODE:!0,FF_SSE_UI_ANIMATIONS:!0,FF_CLIENT_AUTH_PING_MS:144e4,FF_CLIENT_CAROUSEL_ID:`main_carousel_nav`,FF_CLIENT_LS_SESSION_ENTITY:`sse_entity`,FF_CLIENT_LS_DEEP_LINK:`sse_deeplink`,FF_CLIENT_ROUTE_SIGNIN:`signin_route`,FF_CLIENT_ROUTE_SIGNUP:`signup_route`,FF_CLIENT_ROUTE_HOME:`home_route`,FF_CLIENT_ROUTE_RESET_HASH:`resethash_route`,FF_CLIENT_ROUTE_RESET_FORGOT:`resetforgot_route`,FF_CLIENT_ROUTE_SIGNOUT:`signout_route`,FF_CLIENT_ROUTE_ERROR:`error_route`,FF_CLIENT_ROUTE_VERF_LINK:`verf_link_route`,FF_CLIENT_ROUTE_OFFLINE:`offline_route`,FF_CLIENT_PROTECTED_ROUTES:[`home_route`,`resethash_route`,`signout_route`,`user_management_route`],FF_CLIENT_ENDPOINT_SIGNIN:`/m5t/v5/acctEntity/signin`,FF_CLIENT_ENDPOINT_SIGNOUT:`/m5t/v5/acctEntity/signout`,FF_CLIENT_ENDPOINT_SIGNUP:`/m5t/v5/acctEntity/`,FF_CLIENT_ENDPOINT_RESET_HASH:`/m5t/v5/acctEntity/resetHash`,FF_CLIENT_ENDPOINT_RESET_FORGOT:`/m5t/v5/acctEntity/resetforgot`,FF_CLIENT_ENDPOINT_PING:`/ping`,FF_CLIENT_ENDPOINT_METER:`/m5t/v5/coreMeter/`,FF_CLIENT_METER_DEEP_LINK:`deep_link_access`,FF_CLIENT_METER_SIGNOUT_CLIENT:`signout_client_initiated`,FF_CLIENT_METER_SIGNOUT_SERVER:`signout_server_initiated`,FF_CLIENT_METER_PING_SUCCESS:`ping_auth_success`,FF_CLIENT_METER_PING_FAILURE:`ping_auth_failure`,FF_SSE_I18N_PRODUCT:`SSE`,FF_SSE_I18N_WHITELABEL:`M5T`,FF_SSE_I18N_LANG:`en`,FF_SSE_I18N_APPLY_DELAY_MS:100,FF_SSE_I18N_DEBUG:!1,FF_SSE_LS_USER_LANG:`mvv_user_lang`,FF_SSE_LS_WHITELABEL:`mvv_whitelabel`,FF_API_RATELIMIT_SIGNIN_ENFORCE:!0,FF_API_RATELIMIT_SIGNIN_IP_LIMIT:20,FF_API_RATELIMIT_SIGNIN_EMAIL_LIMIT:10,FF_API_RATELIMIT_FORGOT_ENFORCE:!0,FF_API_RATELIMIT_FORGOT_IP_LIMIT:15,FF_API_RATELIMIT_FORGOT_EMAIL_LIMIT:5,FF_API_RATELIMIT_CAPTURE_ENFORCE:!0,FF_API_RATELIMIT_CAPTURE_LIMIT:30,FF_API_RATELIMIT_EVENT_ENFORCE:!0,FF_API_RATELIMIT_EVENT_LIMIT:600,FF_API_RATELIMIT_CSP_PING_ENFORCE:!0,FF_API_RATELIMIT_CSP_PING_LIMIT:30,FF_API_RATELIMIT_WEBAUTHN_AUTH_ENFORCE:!0,FF_API_RATELIMIT_WEBAUTHN_AUTH_IP_LIMIT:20,FF_API_RATELIMIT_INTEGRATIONS_ENFORCE:!0,FF_API_RATELIMIT_INTEGRATIONS_LIMIT:60,FF_API_RATELIMIT_QUESTIONNAIRE_ENFORCE:!0,FF_API_RATELIMIT_QUESTIONNAIRE_LIMIT:30,FF_API_RATELIMIT_PAIRING_ENFORCE:!0,FF_API_RATELIMIT_PAIRING_LIMIT:20,FF_API_RATELIMIT_SITE_OPS_ENFORCE:!0,FF_API_RATELIMIT_SITE_OPS_LIMIT:120,FF_API_RATELIMIT_AUTHENTICATED_ENFORCE:!0,FF_API_RATELIMIT_AUTHENTICATED_LIMIT:600,FF_API_MAGNET_REQUIRE_ORIGIN_ENFORCE:!1,FF_API_RATELIMIT_GLOBAL_ENFORCE:!0,FF_API_RATELIMIT_GLOBAL_LIMIT:2e3}),typeof module<`u`&&module.exports&&(module.exports={FEATURE_FLAGS:v,getFlag:h,isEnabled:g,getAllFlags:_})})),ee=u(d(),1),b=u(f(),1);m(),y();var x={success:{border:`var(--color-success, #009473)`,bg:`var(--color-success-soft, rgba(0,148,115,0.10))`,icon:`check_circle`},danger:{border:`var(--color-danger, #DD4124)`,bg:`var(--color-danger-soft, rgba(221,65,36,0.09))`,icon:`error`},error:{border:`var(--color-danger, #DD4124)`,bg:`var(--color-danger-soft, rgba(221,65,36,0.09))`,icon:`error`},warning:{border:`var(--color-warning, #D97706)`,bg:`var(--color-warning-soft, #FEF3C7)`,icon:`warning`},info:{border:`var(--color-info, #0D9488)`,bg:`var(--color-info-soft, #CCFBF1)`,icon:`info`}},te=4500,ne=220,S=null,re=!1;function ie(){if(re)return;let e=document.createElement(`style`);e.id=`m5t-toast-styles`,e.textContent=`
    .m5t-toast-stack { position: fixed; top: 16px; right: 16px; z-index: 6000; display: flex; flex-direction: column; gap: 10px; pointer-events: none; max-width: min(380px, calc(100vw - 32px)); }
    .m5t-toast { pointer-events: auto; display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); border: 1px solid; box-shadow: 0 8px 24px rgba(11,18,32,0.16); font-size: 0.86rem; line-height: 1.4; color: var(--color-text, #0B1220); opacity: 0; transform: translateX(16px); transition: opacity ${ne}ms ease, transform ${ne}ms ease; }
    .m5t-toast.is-in { opacity: 1; transform: none; }
    .m5t-toast.is-out { opacity: 0; transform: translateX(16px); }
    .m5t-toast .material-symbols-outlined { font-size: 19px; flex: 0 0 auto; margin-top: 1px; }
    .m5t-toast__msg { flex: 1 1 auto; min-width: 0; word-break: break-word; }
    .m5t-toast__close { flex: 0 0 auto; appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); padding: 2px; line-height: 1; font-size: 17px; border-radius: 6px; }
    .m5t-toast__close:hover { color: var(--color-text, #0B1220); background: var(--color-surface-2, rgba(11,18,32,0.06)); }
    @media (prefers-reduced-motion: reduce) { .m5t-toast { transition: none; } }
  `,document.head.appendChild(e),re=!0}function ae(){return S&&document.body.contains(S)?S:(S=document.createElement(`div`),S.className=`m5t-toast-stack`,S.setAttribute(`role`,`status`),S.setAttribute(`aria-live`,`polite`),document.body.appendChild(S),S)}function oe(e){let t=e&&e.message;if(!t)return;ie();let n=x[e.type]||x.info,r=document.createElement(`div`);r.className=`m5t-toast`,r.style.borderColor=n.border,r.style.background=n.bg,r.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true" style="color:${n.border}">${n.icon}</span><span class="m5t-toast__msg"></span><button type="button" class="m5t-toast__close" aria-label="Dismiss"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>`,r.querySelector(`.m5t-toast__msg`).textContent=String(t),ae().appendChild(r),requestAnimationFrame(()=>r.classList.add(`is-in`));let i=!1,a=()=>{i||(i=!0,clearTimeout(o),r.classList.remove(`is-in`),r.classList.add(`is-out`),setTimeout(()=>r.remove(),ne))},o=setTimeout(a,te);r.querySelector(`.m5t-toast__close`).addEventListener(`click`,a)}function se(){let e=e=>e=>{let t=e.detail?.pubsubTopic;t&&b.default.publish(t,e.detail)};document.addEventListener(`nav-select`,e(`nav-select`)),document.addEventListener(`logo-click`,e(`logo-click`)),document.addEventListener(`nav-hover`,e(`nav-hover`)),document.addEventListener(`nav-double-tap`,e(`nav-double-tap`)),document.addEventListener(`nav-long-tap`,e(`nav-long-tap`)),document.addEventListener(`message-sent`,e(`message-sent`))}function ce(){console.log(`[AppEvents] Initializing event listeners...`),b.default.subscribe(p.APP_READY,(e,t)=>{console.log(`[AppEvents] APP_READY:`,t)}),b.default.subscribe(p.APP_ERROR,(e,t)=>{console.error(`[AppEvents] APP_ERROR:`,t)}),b.default.subscribe(p.APP_SIGNOUT,(e,t)=>{console.log(`[AppEvents] APP_SIGNOUT:`,t)}),b.default.subscribe(p.ROUTE_NAV_BEFORE,(e,t)=>{console.log(`[AppEvents] ROUTE_NAV_BEFORE:`,t),b.default.publish(p.UI_LOADING_START)}),b.default.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{console.log(`[AppEvents] ROUTE_NAV_AFTER:`,t),b.default.publish(p.UI_LOADING_END)}),b.default.subscribe(p.ROUTE_NAV_ERROR,(e,t)=>{console.error(`[AppEvents] ROUTE_NAV_ERROR:`,t),b.default.publish(p.APP_ERROR,{message:`Navigation error`,details:t})}),b.default.subscribe(p.AUTH_SIGNIN_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNIN_SUCCESS:`,t)}),b.default.subscribe(p.AUTH_SIGNIN_FAIL,(e,t)=>{console.error(`[AppEvents] AUTH_SIGNIN_FAIL:`,t),b.default.publish(p.UI_TOAST,{message:t.message||`Sign in failed`,type:`danger`})}),b.default.subscribe(p.AUTH_SIGNUP_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNUP_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Account created! Please check your email to verify.`,type:`success`}),b.default.publish(p.AUTH_VERIFY_LINK)}),b.default.subscribe(p.AUTH_VERIFY_LINK,(e,t)=>{console.log(`[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route`),window.router&&window.router.navigate(`/verf-link`)}),b.default.subscribe(p.AUTH_SIGNUP_FAIL,(e,t)=>{console.error(`[AppEvents] AUTH_SIGNUP_FAIL:`,t),b.default.publish(p.UI_TOAST,{message:t.message||`Sign up failed`,type:`danger`})}),b.default.subscribe(p.AUTH_SIGNOUT_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNOUT_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Signed out successfully`,type:`info`})}),b.default.subscribe(p.AUTH_SIGNUP,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNUP: Navigating to signup route`),window.router&&window.router.navigate(`/signup`)}),b.default.subscribe(p.AUTH_FORGOT,(e,t)=>{console.log(`[AppEvents] AUTH_FORGOT: Navigating to forgot route`),window.router&&window.router.navigate(`/forgot`)}),b.default.subscribe(p.AUTH_FORGOT_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_FORGOT_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Password reset email sent!`,type:`success`})}),b.default.subscribe(p.AUTH_RESETHASH_NAV,(e,t)=>{console.log(`[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route`),window.router&&window.router.navigate(`/resethash`)}),b.default.subscribe(p.AUTH_RESETHASH_SUCCESS,(e,t)=>{console.log(`[AppEvents] AUTH_RESETHASH_SUCCESS:`,t),b.default.publish(p.UI_TOAST,{message:`Password reset successfully! Please sign in.`,type:`success`})}),b.default.subscribe(p.AUTH_TOKEN_EXPIRED,(e,t)=>{console.warn(`[AppEvents] AUTH_TOKEN_EXPIRED:`,t),b.default.publish(p.UI_TOAST,{message:`Session expired. Please sign in again.`,type:`warning`})}),b.default.subscribe(p.I18N_SET_LANG,(e,t)=>{console.log(`[AppEvents] I18N_SET_LANG:`,t);let{langCode:n}=t;if(!n){console.error(`[AppEvents] No langCode provided in I18N_SET_LANG event`);return}if(window.I18nController&&typeof window.I18nController.setLanguage==`function`)try{window.I18nController.setLanguage(n),console.log(`[AppEvents] Language changed successfully to:`,n),b.default.publish(p.UI_TOAST,{message:`Language changed to ${n}`,type:`success`})}catch(e){console.error(`[AppEvents] Error changing language:`,e),b.default.publish(p.UI_TOAST,{message:`Failed to change language: ${e.message}`,type:`danger`})}else console.error(`[AppEvents] I18nController not available`)}),b.default.subscribe(`CONVERSATION.PROMPT`,(e,t)=>{let n=e.split(`.`)[2];if(console.log(`[AppEvents] CONVERSATION.PROMPT.${n}:`,t),!t||!t.message){console.warn(`[AppEvents] CONVERSATION.PROMPT received without message data`);return}switch(n){case`CANVAS`:console.log(`[AppEvents] Display prompt in canvas:`,t.message),le(t.message,`user`,t.timestamp),b.default.publish(p.CANVAS_DO_SCROLL);break;case`AGENT`:console.log(`[AppEvents] Agent prompt (no implementation):`,t.message);break;case`AGENT_CANVAS`:console.log(`[AppEvents] Display message in canvas:`,t.message),le(t.message,`user`,t.timestamp),b.default.publish(p.CANVAS_DO_SCROLL);break;case`STAGE`:console.log(`[AppEvents] Stage prompt for editing:`,t.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${n}`)}}),b.default.subscribe(`CONVERSATION.RESPONSE`,(e,t)=>{let n=e.split(`.`)[2];if(console.log(`[AppEvents] CONVERSATION.RESPONSE.${n}:`,t),!t||!t.message){console.warn(`[AppEvents] CONVERSATION.RESPONSE received without message data`);return}switch(n){case`CANVAS`:console.log(`[AppEvents] Display response in canvas:`,t.message),le(t.message,`assistant`,t.timestamp,t.streaming);break;case`WORKFLOW`:console.log(`[AppEvents] Send response to workflow engine:`,t.message);break;default:console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${n}`)}}),b.default.subscribe(p.UI_LOADING_START,(e,t)=>{let n=document.getElementById(`app-loader`);n&&n.classList.add(`active`)}),b.default.subscribe(p.UI_LOADING_END,(e,t)=>{let n=document.getElementById(`app-loader`);n&&n.classList.remove(`active`)}),b.default.subscribe(p.UI_TOAST,(e,t)=>{oe(t)}),b.default.subscribe(p.UI_WELCOME_BACK_CLICKED,()=>{console.log(`[AppEvents] UI_WELCOME_BACK_CLICKED`);let e=new Date().getFullYear();typeof neodigmToast<`u`&&neodigmToast.q(`0.1 8/15/2026, 12:50:16 PM|© ${e} Mach Five Tech`,`night`)}),se(),b.default.subscribe(`M5T_PRIMARY_NAV`,(n,r)=>{let i=n.split(`.`)[1];switch(i){case`TAP`:e(r);break;case`LOGO_TAP`:t(r);break;case`HOVER`:break;case`DOUBLE_TAP`:break;case`LONG_TAP`:break;default:console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${i}`)}});function e(e){let{token:t,level:n,primaryToken:r}=e;switch(t){case`RESET_PASSWORD`:console.log(`[AppEvents] Password reset requested`),b.default.publish(p.AUTH_RESETHASH_NAV);break;case`SIGN_OUT`:console.log(`[AppEvents] Sign out requested`),window.router&&window.router.navigate(`/signout`);break;default:console.log(`[AppEvents] Navigation: ${n} -> ${t}`,{primaryToken:r})}}function t(e){let t=new Date().getFullYear();typeof neodigmToast<`u`&&neodigmToast.q(`0.1 8/15/2026, 12:50:16 PM|© ${t} Mach Five Tech`,`night`,5e3)}b.default.subscribe(p.AUTH_SIGNOUT,(e,t)=>{console.log(`[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage`),localStorage.removeItem(v.FF_SSE_LS_SESSION_USER)}),console.log(`[AppEvents] Event listeners initialized`)}function le(e,t=`user`,n=null,r=!1){let i=document.getElementById(`chat-messages`);if(!i){console.warn(`[AppEvents] chat-messages element not found - may not be on home route`);return}if(n||=new Date().toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`}),r&&t===`assistant`){let n=i.firstElementChild;if(n&&n.tagName.toLowerCase()===`m5t-chat-response`){n.setAttribute(`message`,e),console.log(`[AppEvents] Updated streaming ${t} bubble (${e.length} chars)`);return}}let a;a=t===`user`||t===`prompt`?document.createElement(`m5t-chat-prompt`):document.createElement(`m5t-chat-response`),a.setAttribute(`message`,e),a.setAttribute(`timestamp`,n),i.prepend(a),console.log(`[AppEvents] Added ${t} bubble to canvas (${e.length} chars)`)}function ue(e=window.location.search){let t=new URLSearchParams(e||``);return!!(t.get(`uid`)&&t.get(`token`))}var de=o((()=>{}));function fe(e=window.location.search){let t=new URLSearchParams(e||``);return!!(t.get(`qr`)&&t.get(`token`))}function pe(e=window.location.search){let t=new URLSearchParams(e||``),n=t.get(`qr`),r=t.get(`token`);return n&&r?{guid:n,token:r}:null}var me=o((()=>{}));function he(e=window.location.search){return ve.find(t=>t.matches(e))||null}function ge(e=window.location.search){return he(e)!==null}function _e(e,t=window.location.search){return ge(t)}var ve,ye=o((()=>{de(),me(),ve=Object.freeze([Object.freeze({name:`invite`,matches:ue}),Object.freeze({name:`questionnaire`,matches:fe})])}));function be(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)):!1}var xe=o((()=>{})),Se=o((()=>{})),Ce=o((()=>{}));function we(e){return Ee[e]||null}function Te(e){return e>=50}var Ee,De=o((()=>{Ee=Object.freeze({admin_root_role:{value:100,label:`Administrator`,desc:`Mach Five platform staff — full access across every organization`},client_standard_role:{value:0,label:`Client`,desc:`Everyone else — what they can do comes from their organization membership, not this class`}})}));function Oe(e){let t=we(e);return!!t&&Te(t.value)}function ke({entityClass:e,orgChannel:t,memberRole:n}={}){if(Oe(e))return[...Ne];let r=Fe[t],i=r&&r[n];return i?[...i]:[]}function Ae(e,t){let n=je[e]?.rank??-1,r=je[t]?.rank??1/0;return n>=je.admin.rank&&n>=r}var je,Me,C,Ne,Pe,Fe,Ie=o((()=>{De(),Object.freeze({reseller_org:{value:`reseller_org`,label:`Reseller / Agency`,desc:`A Mach Five Marketing reseller. Creates and manages client accounts, provisions magnets on their behalf, monitors stats and ad numbers.`,uiMode:`reseller`,billable:!0,managesSubtree:!0},managed_client:{value:`managed_client`,label:`Managed Client`,desc:`A client account created by a reseller. Read-only: views its own active magnets, stats, and ad numbers. Does not provision.`,uiMode:`managed`,billable:!0,managesSubtree:!1,readOnly:!0},saas_org:{value:`saas_org`,label:`Self-Serve`,desc:`A self-serve SaaS customer. Provisions its own magnets and connects its own ad accounts — the full demo experience.`,uiMode:`self_serve`,billable:!0,managesSubtree:!1}}),je=Object.freeze({owner:{value:`owner`,rank:30,label:`Owner`},admin:{value:`admin`,rank:20,label:`Admin`},member:{value:`member`,rank:10,label:`Member`},viewer:{value:`viewer`,rank:0,label:`Viewer`}}),Me=Object.freeze({VIEW_DASHBOARD:`view_dashboard`,VIEW_MAGNETS:`view_magnets`,PROVISION_MAGNETS:`provision_magnets`,MANAGE_MAGNETS:`manage_magnets`,VIEW_CONVERSATIONS:`view_conversations`,VIEW_STATS:`view_stats`,VIEW_AD_METRICS:`view_ad_metrics`,CONNECT_AD_ACCOUNTS:`connect_ad_accounts`,CREATE_CLIENT_ACCOUNTS:`create_client_accounts`,MANAGE_TEAM:`manage_team`,VIEW_BILLING:`view_billing`,MANAGE_BILLING:`manage_billing`}),C=Me,Ne=Object.freeze(Object.values(C)),Pe=Object.freeze([C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS,C.VIEW_AD_METRICS]),Object.freeze([C.PROVISION_MAGNETS,C.MANAGE_MAGNETS,C.CONNECT_AD_ACCOUNTS,C.CREATE_CLIENT_ACCOUNTS,C.MANAGE_TEAM,C.MANAGE_BILLING]),Object.freeze([C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS,C.VIEW_AD_METRICS,C.VIEW_BILLING]),Fe=Object.freeze({reseller_org:{owner:Ne,admin:[C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.PROVISION_MAGNETS,C.MANAGE_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS,C.VIEW_AD_METRICS,C.CONNECT_AD_ACCOUNTS,C.CREATE_CLIENT_ACCOUNTS,C.MANAGE_TEAM,C.VIEW_BILLING],member:[C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.PROVISION_MAGNETS,C.MANAGE_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS,C.VIEW_AD_METRICS],viewer:Pe},managed_client:{owner:[...Pe,C.VIEW_BILLING],admin:[...Pe,C.VIEW_BILLING],member:Pe,viewer:Pe},saas_org:{owner:[C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.PROVISION_MAGNETS,C.MANAGE_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS,C.VIEW_AD_METRICS,C.CONNECT_AD_ACCOUNTS,C.MANAGE_TEAM,C.VIEW_BILLING,C.MANAGE_BILLING],admin:[C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.PROVISION_MAGNETS,C.MANAGE_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS,C.VIEW_AD_METRICS,C.CONNECT_AD_ACCOUNTS,C.MANAGE_TEAM,C.VIEW_BILLING],member:[C.VIEW_DASHBOARD,C.VIEW_MAGNETS,C.PROVISION_MAGNETS,C.MANAGE_MAGNETS,C.VIEW_CONVERSATIONS,C.VIEW_STATS],viewer:Pe}})})),Le,Re=o((()=>{Le=[{value:`name`,label:`Full name (splits into first + last automatically)`},{value:`first_name`,label:`First name`},{value:`last_name`,label:`Last name`},{value:`email`,label:`Email`},{value:`phone`,label:`Phone`},{value:`mobile`,label:`Mobile phone`},{value:`company`,label:`Company`},{value:`title`,label:`Job title`},{value:`city`,label:`City`},{value:`state`,label:`State / province`},{value:`product_interest`,label:`Product interest`},{value:`lead_source`,label:`Lead source`},{value:`rating`,label:`Rating (Hot / Warm / Cold)`},{value:`description`,label:`Notes / description`},{value:`salutation`,label:`Salutation (Mr. / Ms. / Dr.)`},{value:`street`,label:`Street address`},{value:`zip`,label:`Postal / ZIP code`},{value:`country`,label:`Country`},{value:`url`,label:`Website URL`},{value:`industry`,label:`Industry`},{value:`annual_revenue`,label:`Annual revenue (number)`},{value:`employees`,label:`Number of employees (whole number)`},{value:`is_primary`,label:`Primary contact (Yes / No)`},{value:`current_generators`,label:`Current generator(s)`},{value:`number_of_locations`,label:`Number of locations (whole number)`}],new Set(Le.map(e=>e.value))})),ze,Be=o((()=>{ze=[{value:`single_select`,label:`Multiple choice`},{value:`multi_select`,label:`Select all`},{value:`scheduler`,label:`Scheduler`},{value:`text`,label:`Short text`},{value:`email`,label:`Email`},{value:`phone`,label:`Phone`},{value:`message`,label:`Message`}],new Set(ze.map(e=>e.value))})),Ve,He,Ue,We,Ge=o((()=>{Ve=[{value:`inline`,label:`Inline`},{value:`chat`,label:`Chat`},{value:`right_slide`,label:`Slide`},{value:`modal`,label:`Modal`}],He=[{value:`auto`,label:`Auto (visitor OS setting)`},{value:`sync`,label:`Sync (match the site's own dark mode)`},{value:`light`,label:`Light`},{value:`dark`,label:`Dark`}],Ue=[{value:`on_load`,label:`Immediately on page load`},{value:`on_8_seconds`,label:`After 8 seconds`},{value:`on_scroll_80_percent`,label:`At 80% scroll depth`},{value:`on_exit_intent`,label:`On exit intent (mouse leaves the page)`},{value:`none`,label:`Manual only (visitor clicks the launcher)`}],We=[{value:`book`,label:`Book`},{value:`call`,label:`Call`},{value:`email`,label:`Email`},{value:`chat`,label:`Chat`},{value:`support`,label:`Support`}],Ve.map(e=>e.value),He.map(e=>e.value),Ue.map(e=>e.value),Object.freeze({manual:`none`}),We.map(e=>e.value)})),Ke=o((()=>{De(),Ie(),Re(),Be(),Ge()})),qe=o((()=>{xe(),Se(),Ce(),Ke()})),Je,Ye,Xe,w,Ze=o((()=>{Je=`modulepreload`,Ye=function(e,t){return new URL(e,t).href},Xe={},w=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ye(t,n),t=s(t),t in Xe)return;Xe[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Je,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function Qe(e){let t=new Uint8Array(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}var $e=o((()=>{}));function et(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,`=`),i=atob(r),a=new ArrayBuffer(i.length),o=new Uint8Array(a);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return a}var tt=o((()=>{}));function nt(){return rt.stubThis(globalThis?.PublicKeyCredential!==void 0&&typeof globalThis.PublicKeyCredential==`function`)}var rt,it=o((()=>{rt={stubThis:e=>e}}));function at(e){let{id:t}=e;return{...e,id:et(t),transports:e.transports}}var ot=o((()=>{tt()}));function st(e){return e===`localhost`||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}var ct=o((()=>{})),T,lt=o((()=>{T=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r??n.name,this.code=t}}}));function ut({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new T({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new T({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new T({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new T({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new T({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new T({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new T({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new T({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!st(t))return new T({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new T({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new T({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new T({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}var dt=o((()=>{ct(),lt()})),ft,pt,mt=o((()=>{ft=class{constructor(){Object.defineProperty(this,"controller",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}},pt=new ft}));function ht(e){if(e&&!(gt.indexOf(e)<0))return e}var gt,_t=o((()=>{gt=[`cross-platform`,`platform`]}));async function vt(e){!e.optionsJSON&&e.challenge&&(console.warn(`startRegistration() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useAutoRegister:n=!1}=e;if(!nt())throw Error(`WebAuthn is not supported in this browser`);let r={...t,challenge:et(t.challenge),user:{...t.user,id:et(t.user.id)},excludeCredentials:t.excludeCredentials?.map(at)},i={};n&&(i.mediation=`conditional`),i.publicKey=r,i.signal=pt.createNewAbortSignal();let a;try{a=await navigator.credentials.create(i)}catch(e){throw ut({error:e,options:i})}if(!a)throw Error(`Registration was not completed`);let{id:o,rawId:s,response:c,type:l}=a,u;typeof c.getTransports==`function`&&(u=c.getTransports());let d;if(typeof c.getPublicKeyAlgorithm==`function`)try{d=c.getPublicKeyAlgorithm()}catch(e){yt(`getPublicKeyAlgorithm()`,e)}let f;if(typeof c.getPublicKey==`function`)try{let e=c.getPublicKey();e!==null&&(f=Qe(e))}catch(e){yt(`getPublicKey()`,e)}let p;if(typeof c.getAuthenticatorData==`function`)try{p=Qe(c.getAuthenticatorData())}catch(e){yt(`getAuthenticatorData()`,e)}return{id:o,rawId:Qe(s),response:{attestationObject:Qe(c.attestationObject),clientDataJSON:Qe(c.clientDataJSON),transports:u,publicKeyAlgorithm:d,publicKey:f,authenticatorData:p},type:l,clientExtensionResults:a.getClientExtensionResults(),authenticatorAttachment:ht(a.authenticatorAttachment)}}function yt(e,t){console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`,t)}var bt=o((()=>{$e(),tt(),it(),ot(),dt(),mt(),_t()}));function xt(){if(!nt())return St.stubThis(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?St.stubThis(new Promise(e=>e(!1))):St.stubThis(e.isConditionalMediationAvailable())}var St,Ct=o((()=>{it(),St={stubThis:e=>e}}));function wt({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new T({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new T({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!st(t))return new T({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new T({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new T({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}var Tt=o((()=>{ct(),lt()}));async function Et(e){!e.optionsJSON&&e.challenge&&(console.warn(`startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useBrowserAutofill:n=!1,verifyBrowserAutofillInput:r=!0}=e;if(!nt())throw Error(`WebAuthn is not supported in this browser`);let i;t.allowCredentials?.length!==0&&(i=t.allowCredentials?.map(at));let a={...t,challenge:et(t.challenge),allowCredentials:i},o={};if(n){if(!await xt())throw Error(`Browser does not support WebAuthn autofill`);if(document.querySelectorAll(`input[autocomplete$='webauthn']`).length<1&&r)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');o.mediation=`conditional`,a.allowCredentials=[]}o.publicKey=a,o.signal=pt.createNewAbortSignal();let s;try{s=await navigator.credentials.get(o)}catch(e){throw wt({error:e,options:o})}if(!s)throw Error(`Authentication was not completed`);let{id:c,rawId:l,response:u,type:d}=s,f;return u.userHandle&&(f=Qe(u.userHandle)),{id:c,rawId:Qe(l),response:{authenticatorData:Qe(u.authenticatorData),clientDataJSON:Qe(u.clientDataJSON),signature:Qe(u.signature),userHandle:f},type:d,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:ht(s.authenticatorAttachment)}}var Dt=o((()=>{$e(),tt(),it(),Ct(),ot(),Tt(),mt(),_t()}));function Ot(){return nt()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():new Promise(e=>e(!1))}var kt=o((()=>{it()})),At=o((()=>{})),jt=c({WebAuthnAbortService:()=>pt,WebAuthnError:()=>T,_browserSupportsWebAuthnAutofillInternals:()=>St,_browserSupportsWebAuthnInternals:()=>rt,base64URLStringToBuffer:()=>et,browserSupportsWebAuthn:()=>nt,browserSupportsWebAuthnAutofill:()=>xt,bufferToBase64URLString:()=>Qe,platformAuthenticatorIsAvailable:()=>Ot,startAuthentication:()=>Et,startRegistration:()=>vt}),Mt=o((()=>{bt(),Dt(),it(),kt(),Ct(),tt(),$e(),mt(),lt(),At()})),Nt,E,D=o((()=>{Nt=u(f(),1),m(),qe(),ye(),Ze(),E=class{static CONFIG={BASE_URL:`https://machfivemagnet-saas.onrender.com`,FF_AUTH_PING_MS:144e4,LS_KEYS:{ENTITY:`sse_session_user`,DEEP_LINK:`sse_deeplink`,SCOPE:`sse_session_scope`,ACTIVE_ORG:`sse_active_org`,REMEMBERED_EMAIL:`sse_remembered_email`},ROUTES:{SIGNIN:`signin`,SIGNUP:`signup`,HOME:`home`,RESET_HASH:`resethash`,FORGOT:`forgot`,SPLASH:`splash`},PROTECTED_ROUTES:[`home`,`resethash`],ENDPOINTS:{SIGNIN:`/m5t/v5/acctEntity/signin`,SIGNOUT:`/m5t/v5/acctEntity/signout`,SIGNUP:`/m5t/v5/acctEntity/`,RESET_HASH:`/m5t/v5/acctEntity/resetHash`,RESET_FORGOT:`/m5t/v5/acctEntity/resetforgot`,ME:`/m5t/v5/acctEntity/me`,PING:`/ping`,WEBAUTHN_AUTH_OPTIONS:`/m5t/v5/webauthn/authenticate/options`,WEBAUTHN_AUTH_VERIFY:`/m5t/v5/webauthn/authenticate/verify`},METER_CAPTIONS:{DEEP_LINK:`deep_link_access`,SIGNOUT_CLIENT:`signout_client_initiated`,SIGNOUT_SERVER:`signout_server_initiated`,PING_SUCCESS:`ping_auth_success`,PING_FAILURE:`ping_auth_failure`}};static#e=!1;static#t=null;static#n=null;static#r=null;static#i=null;static#a=null;static#o=null;static async init({BASE_URL:e,navigateFunction:t,customConfig:n={}}={}){if(this.#e)return console.warn(`[AuthController] Already initialized`),!0;try{if(t&&typeof t==`function`)this.#o=t;else throw Error(`navigateFunction is required and must be a function`);return e&&(this.CONFIG.BASE_URL=e),n&&Object.keys(n).length>0&&(this.CONFIG={...this.CONFIG,...n}),console.log(`[AuthController] Initializing with config:`,{BASE_URL:this.CONFIG.BASE_URL,PING_INTERVAL:this.CONFIG.FF_AUTH_PING_MS}),this.#u(),this.#s(),this.#l(),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),this.#e=!0,console.log(`[AuthController] Initialized successfully`),!0}catch(e){return console.error(`[AuthController] Initialization failed:`,e),!1}}static#s(){if(typeof mvvLegit>`u`||!mvvLegit)throw Error(`mvvLegit is not available. Ensure neodigm55 library is loaded.`);mvvLegit.setNavConroller((e=null)=>{if(e){if(_e(e)){console.log(`[AuthController] Ignoring mvvLegit redirect to`,e,`— keeping visitor on their public landing page`);return}console.log(`[AuthController] mvvLegit navigation to:`,e),this.#c(e)}}).setOnState((e=null)=>{if(e)switch(console.log(`[AuthController] Auth state changed:`,e),e){case`AUTH`:case 4:this.#y();break;case`UNAUTH`:case 1:this.#b();break;case`UNVERF`:case 2:this.#x()}}).init({BASE:this.CONFIG.BASE_URL}),console.log(`[AuthController] mvvLegit initialized`)}static#c(e){if(!this.#o){console.error(`[AuthController] Navigate function not set`);return}console.log(`[AuthController] #navigate called with:`,e);let t=e.replace(/_route$/,``).replace(/_/g,`-`);console.log(`[AuthController] Navigating to path:`,t),this.#o(t)}static#l(){if(window.__m5tActiveOrgFetch)return;let e=window.fetch.bind(window);window.fetch=(t,n)=>{try{let e=typeof t==`string`?t:t?.url||``,r=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);if(r&&e.startsWith(this.CONFIG.BASE_URL)){let e=new Headers(n&&n.headers||(t instanceof Request?t.headers:void 0));e.set(`X-Active-Org`,r),n={...n||{},headers:e}}}catch{}return e(t,n)},window.__m5tActiveOrgFetch=!0,console.log(`[AuthController] Active-org fetch header installed`)}static#u(){try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);e&&(this.#n=JSON.parse(e),console.log(`[AuthController] Entity state loaded; hasEmail:`,!!this.#n?.email))}catch(e){console.error(`[AuthController] Error loading entity state:`,e),localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),this.#n=null}this.#a=localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK)||null;try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);e&&(this.#r=JSON.parse(e),console.log(`[AuthController] Scope state loaded (cached):`,this.#r?.uiMode))}catch(e){console.error(`[AuthController] Error loading scope state:`,e),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE),this.#r=null}}static#d(e){try{this.#n=e,localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY,JSON.stringify(e)),console.log(`[AuthController] Entity state saved`)}catch(e){console.error(`[AuthController] Error saving entity state:`,e)}}static#f(){this.#n=null,this.#r=null,localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY),localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#h)}catch{}}static getEntity(){return this.#n}static#p(e){try{this.#r=e,localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE,JSON.stringify(e))}catch(e){console.error(`[AuthController] Error saving scope state:`,e)}}static async fetchScope(){return typeof mvvLegit>`u`||!this.isAuthenticated()?(console.log(`[AuthController] fetchScope skipped — not authenticated`),this.#r):(this.#i||=this.#m().finally(()=>{this.#i=null}),this.#i)}static async#m(){try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),t=e?`?org=${encodeURIComponent(e)}`:``,n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${t}`);if(n.status===401||n.status===403)return console.warn(`[AuthController] /me unauthorized — signing out`),this.doSignout(!0),null;if(!n.ok)return console.warn(`[AuthController] /me failed (${n.status}) — using cached scope`),this.#r;let r=await n.json();if(!r?.ok)return console.warn(`[AuthController] /me returned not-ok — using cached scope`),this.#r;try{let e=localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);e&&r.activeOrg?.guid!==e&&(console.warn(`[AuthController] Stored active org not honored by /me${r.activeOrgError?` (activeOrgError)`:``} — clearing`),localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG))}catch{}return this.#p(r),Nt.default.publish(p.AUTH_SCOPE_LOADED,r),console.log(`[AuthController] Scope loaded: ${r.uiMode} (${r.memberships?.length||0} org(s), ${r.managedClients?.length||0} client(s))`),r}catch(e){return console.error(`[AuthController] fetchScope error:`,e),this.#r}}static async setActiveOrg(e){try{e?localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG,e):localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{}return this.fetchScope()}static getScope(){return this.#r}static getCapabilities(){return this.isPreviewingAsClient()?ke({orgChannel:`managed_client`,memberRole:`owner`}):this.#r?.capabilities||[]}static getUiMode(){return this.isPreviewingAsClient()?`managed`:this.#r?.uiMode||`self_serve`}static getActiveOrg(){return this.#r?.activeOrg||null}static getMemberships(){return this.#r?.memberships||[]}static getManagedClients(){return this.#r?.managedClients||[]}static getStoredActiveOrg(){try{return localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG)}catch{return null}}static#h=`m5m_preview_as_client`;static isPreviewingAsClient(){try{return sessionStorage.getItem(this.#h)===`1`&&!!this.#r?.activeOrg?.viaSubtree}catch{return!1}}static setPreviewAsClient(e){try{e?sessionStorage.setItem(this.#h,`1`):sessionStorage.removeItem(this.#h)}catch{}this.#r&&Nt.default.publish(p.AUTH_SCOPE_LOADED,this.#r)}static async doSignin(e,t){try{let n=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t})}),r=await n.json();if(n.status===303)return console.warn(`[AuthController] Password reset required`),r.accessToken&&(mvvLegit.doSignin(r.accessToken),this.#d(r.entity)),setTimeout(()=>{this.#c(this.CONFIG.ROUTES.RESET_HASH)},1500),{ok:!1,resetRequired:!0,data:r};if(n.ok&&r.accessToken){console.log(`[AuthController] Signin successful, calling mvvLegit.doSignin()`),mvvLegit.doSignin(r.accessToken),this.#d(r.entity);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#h)}catch{}return this.fetchScope(),console.log(`[AuthController] Explicitly navigating to home`),this.#c(this.CONFIG.ROUTES.HOME),{ok:!0,data:r}}return{ok:!1,error:r.error||`Sign in failed`,data:r}}catch(e){return console.error(`[AuthController] Signin error:`,e),{ok:!1,error:e.message}}}static async doPasskeySignin(){if(!window.PublicKeyCredential)return{ok:!1,error:`Passkeys are not supported in this browser`};try{let{startAuthentication:e}=await w(async()=>{let{startAuthentication:e}=await Promise.resolve().then(()=>(Mt(),jt));return{startAuthentication:e}},void 0,import.meta.url),t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.WEBAUTHN_AUTH_OPTIONS}`,{method:`POST`}),n=await t.json();if(!t.ok||!n.ok)return{ok:!1,error:n.error||`Could not start passkey sign-in`};let r;try{r=await e({optionsJSON:n.options})}catch(e){let t=e?.name===`NotAllowedError`;return t||console.error(`[AuthController] Passkey ceremony error:`,e),{ok:!1,canceled:t,error:t?`Passkey sign-in was canceled`:e.message||`Passkey sign-in failed`}}let i=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.WEBAUTHN_AUTH_VERIFY}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({response:r})}),a=await i.json();if(!i.ok||!a.ok||!a.accessToken)return{ok:!1,error:a.error||`Passkey sign-in failed`,data:a};mvvLegit.doSignin(a.accessToken),this.#d(a.entity);try{localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG),sessionStorage.removeItem(this.#h)}catch{}return this.fetchScope(),this.#c(this.CONFIG.ROUTES.HOME),{ok:!0,data:a}}catch(e){return console.error(`[AuthController] Passkey signin error:`,e),{ok:!1,error:e.message}}}static async doSignout(e=!1){console.log(`[AuthController] doSignout called, serverInitiated:`,e);try{let t=mvvLegit.getConf()?.token;if(console.log(`[AuthController] Token exists:`,!!t),!e&&t){let e=`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(t)}`;if(console.log(`[AuthController] Sending signout beacon to:`,e),navigator.sendBeacon){let t=navigator.sendBeacon(e);console.log(`[AuthController] Beacon sent:`,t),t||console.warn(`[AuthController] Beacon failed - browser may be blocking it`)}else console.warn(`[AuthController] navigator.sendBeacon not supported, signout not metered`)}else t||console.warn(`[AuthController] No token found for signout request`);console.log(`[AuthController] Clearing mvvLegit state...`),mvvLegit.doSignout(),console.log(`[AuthController] Setting signout timestamp...`),localStorage.setItem(`mvv_ts`,Date.now().toString()),console.log(`[AuthController] Clearing entity state...`),this.#f(),console.log(`[AuthController] Stopping auth ping...`),this.#_(),setTimeout(()=>{console.log(`[AuthController] Performing hard refresh...`),typeof neodigmUtils<`u`&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}catch(e){console.error(`[AuthController] Signout error:`,e),setTimeout(()=>{typeof neodigmUtils<`u`&&neodigmUtils.hardReload?neodigmUtils.hardReload():window.location.reload()},500)}}static async doSignup(e){try{let t=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}),n=await t.json();return t.ok&&n.accessToken?(console.log(`[AuthController] Signup successful - user needs to verify email`),this.#d(n.entity),{ok:!0,data:n}):{ok:!1,error:n.error||`Sign up failed`,data:n}}catch(e){return console.error(`[AuthController] Signup error:`,e),{ok:!1,error:e.message}}}static async doResetHash(e,t){try{let n=mvvLegit.getConf()?.token,r=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`,{method:`POST`,headers:{Authorization:`Bearer ${n}`,"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t,modified_by:e})}),i=await r.json();return r.ok&&i.ok?(console.log(`[AuthController] Password reset successful`),await this.doSignout(),{ok:!0,data:i}):{ok:!1,error:i.error||`Password reset failed`,data:i}}catch(e){return console.error(`[AuthController] Reset password error:`,e),{ok:!1,error:e.message}}}static#g(){this.#t&&(console.log(`[AuthController] Clearing existing ping interval`),clearInterval(this.#t)),this.#t=setInterval(()=>{console.log(`[AuthController] ⏰ Ping interval fired at ${new Date().toLocaleTimeString()}`),this.#v()},this.CONFIG.FF_AUTH_PING_MS),console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#t}`),console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now()+this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`)}static#_(){this.#t&&(clearInterval(this.#t),this.#t=null,console.log(`[AuthController] Auth ping stopped`))}static async#v(){try{let e=await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);e.ok?console.log(`[AuthController] Ping success`):(e.status===401||e.status===403)&&(console.warn(`[AuthController] Auth ping failed - signing out`),this.doSignout(!0))}catch(e){console.error(`[AuthController] Ping error:`,e)}}static setDeepLinkGuid(e){this.#a=e,localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK,e),console.log(`[AuthController] Deep-link GUID stored:`,e)}static getDeepLinkGuid(){return this.#a}static clearDeepLink(){this.#a=null,localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK)}static#y(){console.log(`[AuthController] User authenticated`),this.CONFIG.FF_AUTH_PING_MS>0&&this.#g(),queueMicrotask(()=>this.fetchScope())}static#b(){console.log(`[AuthController] User unauthenticated`),this.#_()}static#x(){console.log(`[AuthController] User unverified`)}static getAuthState(){try{let e=mvvLegit.getConf()?.LSKEY||`mvv`,t=localStorage.getItem(e);if(!t)return`UNAUTH`;if(typeof LZString>`u`)return null;let n=LZString.decompressFromUTF16(t),r=JSON.parse(n)?.state;return r===1?`UNAUTH`:r===2?`UNVERF`:r===4?`AUTH`:r===5?`FORGOT`:null}catch{return null}}static isAuthenticated(){return this.getAuthState()===`AUTH`}static getConfig(){return this.CONFIG}static navigateTo(e){this.#c(e)}static isPingActive(){return this.#t!==null}static async triggerPingNow(){console.log(`[AuthController] DEBUG: Manually triggering ping...`),await this.#v()}}})),O,Pt=o((()=>{O=class{static#e={LOCAL:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,enter_email_and_password:`Enter email and password`,sign_in:`Sign in`,forgot_password:`Forgot password?`,remember_email:`Remember my email`,dont_have_an_account:`START YOUR FREE ACCOUNT`,sign_up:`Sign up`,please_enter_your_details_to_get_started:`Please enter your details to get started`,already_have_an_account:`Already have an account?`,log_in:`Log in`,name:`Name`,enter_your_name:`Enter your name`,first_name:`First name`,last_name:`Last name`,company:`Company`,phone:`Phone`,confirm_password:`Confirm password`,create_account:`Create account`,home:`Home`,dashboard:`Dashboard`,correspondence:`Correspondence`,settings:`Settings`,sign_out:`Sign out`,reset_password:`Reset password`,new_password:`New password`,confirm_new_password:`Confirm new password`,enter_new_password:`Enter new password`,enter_company_name:`Enter your company name`,enter_phone_number:`Enter your phone number`,reenter_password:`Re-enter your password`,update_password:`Update password`,update_your_password:`Update your account password`,are_you_sure_sign_out:`Are you sure you want to sign out?`,enter_email_for_reset:`Please enter your email to receive a password reset link`,send_reset_link:`Send reset link`,remember_password:`Remember your password?`,cancel:`Cancel`,save:`Save`,delete:`Delete`,edit:`Edit`,loading:`Loading...`,error:`Error`,success:`Success`,refresh:`Refresh`,search:`Search`,filter:`Filter`,sort:`Sort`,view:`View`,close:`Close`,submit:`Submit`,back:`Back`,next:`Next`,previous:`Previous`,confirm:`Confirm`,yes:`Yes`,no:`No`,ok:`OK`,validation_email_required:`Please enter your email`,validation_email_invalid:`Please enter a valid email address`,validation_password_required:`Please enter your password`,validation_password_min_length:`Password must be at least 10 characters`,validation_password_mismatch:`Passwords do not match`,validation_first_name_required:`Please enter your first name`,validation_last_name_required:`Please enter your last name`,validation_new_password_required:`Please enter a new password`,success_welcome_back:`Welcome back!`,success_password_reset:`Password reset successfully`,success_signed_out:`Signed out successfully`,success_reset_link_sent:`Password reset link sent!|Please check your email`,error_signin_failed:`Sign in failed`,error_signup_failed:`Sign up failed`,error_network:`Network error - please try again`,error_password_reset_required:`Password reset required - redirecting...`,loading_signing_in:`SIGNING IN...`,loading_creating_account:`Creating account...`,loading_resetting_password:`Resetting password...`,nav_home:`Home`,nav_home_tagline:`Dashboard and overview`,nav_home_apps:`My Apps`,nav_home_apps_tagline:`Your applications and integrations`,nav_home_dash:`Dashboard`,nav_home_dash_tagline:`Main dashboard and analytics`,nav_engagements:`Engagements`,nav_engagements_tagline:`Customer engagement tools and interactions`,nav_develop:`Develop`,nav_develop_tagline:`Development tools and resources`,nav_profile:`Profile`,nav_profile_tagline:`Account settings and preferences`,nav_engagements_surveys:`Surveys`,nav_engagements_surveys_tagline:`Create and manage customer surveys`,nav_engagements_thumbs:`Feedback`,nav_engagements_thumbs_tagline:`Collect thumbs up/down feedback`,nav_engagements_voicemail:`Voicemail`,nav_engagements_voicemail_tagline:`Voice message collection`,nav_engagements_guidedtours:`Guided Tours`,nav_engagements_guidedtours_tagline:`Interactive product tours`,nav_engagements_slideshows:`Slideshows`,nav_engagements_slideshows_tagline:`Content slideshows and presentations`,nav_engagements_abtests:`A/B Tests`,nav_engagements_abtests_tagline:`A/B testing campaigns`,nav_engagements_questionnaires:`Questionnaires`,nav_engagements_questionnaires_tagline:`Detailed questionnaires and forms`,nav_develop_documentation:`Documentation`,nav_develop_documentation_tagline:`API and product documentation`,nav_develop_devtools:`Dev Tools`,nav_develop_devtools_tagline:`Developer tools and utilities`,nav_develop_kbase:`Knowledge Base`,nav_develop_kbase_tagline:`Technical knowledge base and articles`,nav_develop_hackathon:`Hackathon`,nav_develop_hackathon_tagline:`Hackathon events and challenges`,nav_develop_partner:`Partner`,nav_develop_partner_tagline:`Partner program and integrations`,nav_develop_certification:`Certification`,nav_develop_certification_tagline:`Developer certification programs`,nav_profile_aboutme:`About Me`,nav_profile_aboutme_tagline:`View and edit your personal information`,nav_profile_badges:`Badges`,nav_profile_badges_tagline:`View your earned badges and achievements`,nav_profile_language:`Language`,nav_profile_language_tagline:`Manage language settings and preferences`,nav_reset_password:`Reset Password`,nav_reset_password_tagline:`Change your account password`,nav_sign_out:`Sign Out`,nav_sign_out_tagline:`Sign out of your account`,nav_account:`Account`,nav_account_tagline:`Account management and support`,nav_account_contact:`Contact`,nav_account_contact_tagline:`Contact support and sales`,nav_account_pricetier:`Price Tier`,nav_account_pricetier_tagline:`View and manage pricing plans`,nav_account_helpfaq:`Help & FAQ`,nav_account_helpfaq_tagline:`Frequently asked questions and help`,nav_account_team:`Team`,nav_account_team_tagline:`Manage team members and permissions`,nav_account_terms:`Terms`,nav_account_terms_tagline:`Terms of service and legal agreements`,nav_dashboard:`Dashboard`,nav_dashboard_tagline:`Overview of your activity`,nav_magnets:`Your Magnets`,nav_magnets_tagline:`Manage your conversational magnets`,nav_templates:`Templates`,nav_templates_tagline:`Start from a magnet template`,nav_conversations:`Conversations`,nav_conversations_tagline:`Captured lead conversations`,nav_ab_testing:`A/B Testing`,nav_ab_testing_tagline:`Experiment and optimize`,nav_analytics:`Analytics`,nav_analytics_tagline:`Performance and ad metrics`,nav_ad_accounts:`Ad Accounts`,nav_ad_accounts_tagline:`Connect advertising accounts`,nav_clients:`Clients`,nav_clients_tagline:`Manage your client accounts`,nav_team:`Team`,nav_team_tagline:`Invite and manage teammates`,nav_billing:`Billing`,nav_billing_tagline:`Plan, usage, and invoices`,nav_settings:`Settings`,nav_settings_tagline:`Account and workspace settings`,nav_home:`Home`,nav_home_tagline:`Admin console home dashboard`,nav_entities:`Entities`,nav_entities_tagline:`Entity and account management`,nav_accounts:`Accounts`,nav_accounts_tagline:`User account management`,nav_groups:`Groups`,nav_groups_tagline:`Group and role management`,nav_invoices:`Invoices`,nav_invoices_tagline:`Invoice and billing management`,nav_ab_tests:`A/B Tests`,nav_ab_tests_tagline:`A/B testing campaigns`,nav_feedback:`Feedback`,nav_feedback_tagline:`User feedback collection`,nav_guided_tours:`Guided Tours`,nav_guided_tours_tagline:`Interactive product tours`,nav_questionnaires:`Questionnaires`,nav_questionnaires_tagline:`Detailed questionnaires and forms`,nav_slideshows:`Slideshows`,nav_slideshows_tagline:`Content slideshows and presentations`,nav_surveys:`Surveys`,nav_surveys_tagline:`Survey campaigns and analytics`,nav_voicemail:`Voicemail`,nav_voicemail_tagline:`Voice message management`,nav_ethercards:`EtherCards`,nav_ethercards_tagline:`EtherCards platform management`,nav_apps:`Apps`,nav_apps_tagline:`Application management`,nav_channels:`Channels`,nav_channels_tagline:`Communication channels`,nav_messages:`Messages`,nav_messages_tagline:`Message management and templates`,nav_content:`Content`,nav_content_tagline:`Content and asset management`,nav_rss:`RSS`,nav_rss_tagline:`RSS feed management and syndication`,nav_core_assets:`Core Assets`,nav_core_assets_tagline:`Manage core application assets and resources`,nav_deeplinks:`Deeplinks`,nav_deeplinks_tagline:`Deep link management and tracking`,nav_snippets:`Snippets`,nav_snippets_tagline:`Code and content snippet management`,nav_rollers:`Magnet Builder`,nav_rollers_tagline:`Rolling deployments and version management`,nav_support:`Support`,nav_support_tagline:`Support and monitoring tools`,nav_dialog:`Dialog`,nav_dialog_tagline:`Dialog and modal management`,nav_meter:`Meter`,nav_meter_tagline:`Usage metering and analytics`,nav_metadata:`Metadata`,nav_metadata_tagline:`Metadata and configuration`,nav_i18n:`I18N`,nav_i18n_tagline:`Internationalization maintenance`,nav_meta_maint:`Meta Maint`,nav_meta_maint_tagline:`Metadata maintenance and configuration`,nav_silos:`Silos`,nav_silos_tagline:`Data silo management`,nav_cache:`Cache`,nav_cache_tagline:`Cache management and statistics`,nav_lifecycle:`Lifecycle`,nav_lifecycle_tagline:`Data lifecycle and retention policies`,nav_notifications:`Notifications`,nav_notifications_tagline:`Notification management`,nav_bell_drawer:`Bell Drawer`,nav_bell_drawer_tagline:`Notification drawer configuration`,nav_web_hooks:`Web Hooks`,nav_web_hooks_tagline:`Webhook configuration and monitoring`,nav_language:`Language`,nav_language_tagline:`Change language preferences`},es:{welcome_back:`Bienvenido de nuevo`,please_enter_your_details:`Por favor ingrese sus datos`,email:`Correo electrónico`,enter_your_email:`Ingrese su correo electrónico`,password:`Contraseña`,enter_your_password:`Ingrese su contraseña`,enter_email_and_password:`Ingrese correo y contraseña`,sign_in:`Iniciar sesión`,forgot_password:`¿Olvidó su contraseña?`,remember_email:`Recordar mi correo electrónico`,dont_have_an_account:`¿No tiene una cuenta?`,sign_up:`Registrarse`,please_enter_your_details_to_get_started:`Ingrese sus datos para comenzar`,already_have_an_account:`¿Ya tiene una cuenta?`,log_in:`Iniciar sesión`,name:`Nombre`,enter_your_name:`Ingrese su nombre`,first_name:`Nombre`,last_name:`Apellido`,company:`Empresa`,phone:`Teléfono`,confirm_password:`Confirmar contraseña`,create_account:`Crear cuenta`,home:`Inicio`,dashboard:`Panel`,correspondence:`Correspondencia`,settings:`Configuración`,sign_out:`Cerrar sesión`,reset_password:`Restablecer contraseña`,new_password:`Nueva contraseña`,confirm_new_password:`Confirmar nueva contraseña`,enter_new_password:`Ingrese nueva contraseña`,enter_company_name:`Ingrese el nombre de su empresa`,enter_phone_number:`Ingrese su número de teléfono`,reenter_password:`Vuelva a ingresar su contraseña`,update_password:`Actualizar contraseña`,update_your_password:`Actualice la contraseña de su cuenta`,are_you_sure_sign_out:`¿Está seguro de que desea cerrar sesión?`,enter_email_for_reset:`Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña`,send_reset_link:`Enviar enlace de restablecimiento`,remember_password:`¿Recuerda su contraseña?`,cancel:`Cancelar`,save:`Guardar`,delete:`Eliminar`,edit:`Editar`,loading:`Cargando...`,error:`Error`,success:`Éxito`,refresh:`Actualizar`,search:`Buscar`,filter:`Filtrar`,sort:`Ordenar`,view:`Ver`,close:`Cerrar`,submit:`Enviar`,back:`Atrás`,next:`Siguiente`,previous:`Anterior`,confirm:`Confirmar`,yes:`Sí`,no:`No`,ok:`OK`,validation_email_required:`Por favor ingrese su correo electrónico`,validation_email_invalid:`Por favor ingrese una dirección de correo válida`,validation_password_required:`Por favor ingrese su contraseña`,validation_password_min_length:`La contraseña debe tener al menos 10 caracteres`,validation_password_mismatch:`Las contraseñas no coinciden`,validation_first_name_required:`Por favor ingrese su nombre`,validation_last_name_required:`Por favor ingrese su apellido`,validation_new_password_required:`Por favor ingrese una nueva contraseña`,success_welcome_back:`¡Bienvenido de nuevo!`,success_password_reset:`Contraseña restablecida exitosamente`,success_signed_out:`Sesión cerrada exitosamente`,success_reset_link_sent:`¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico`,error_signin_failed:`Error al iniciar sesión`,error_signup_failed:`Error al registrarse`,error_network:`Error de red - por favor intente de nuevo`,error_password_reset_required:`Restablecimiento de contraseña requerido - redirigiendo...`,loading_signing_in:`INICIANDO SESIÓN...`,loading_creating_account:`Creando cuenta...`,loading_resetting_password:`Restableciendo contraseña...`,nav_home:`Inicio`,nav_home_tagline:`Panel y resumen`,nav_home_apps:`Mis Aplicaciones`,nav_home_apps_tagline:`Sus aplicaciones e integraciones`,nav_home_dash:`Panel`,nav_home_dash_tagline:`Panel principal y análisis`,nav_engagements:`Compromisos`,nav_engagements_tagline:`Herramientas de interacción con clientes`,nav_develop:`Desarrollar`,nav_develop_tagline:`Herramientas y recursos de desarrollo`,nav_profile:`Perfil`,nav_profile_tagline:`Configuración y preferencias de cuenta`,nav_engagements_surveys:`Encuestas`,nav_engagements_surveys_tagline:`Crear y gestionar encuestas de clientes`,nav_engagements_thumbs:`Retroalimentación`,nav_engagements_thumbs_tagline:`Recopilar opiniones positivas y negativas`,nav_engagements_voicemail:`Buzón de voz`,nav_engagements_voicemail_tagline:`Recopilación de mensajes de voz`,nav_engagements_guidedtours:`Recorridos guiados`,nav_engagements_guidedtours_tagline:`Recorridos interactivos de productos`,nav_engagements_slideshows:`Presentaciones`,nav_engagements_slideshows_tagline:`Presentaciones y diapositivas de contenido`,nav_engagements_abtests:`Pruebas A/B`,nav_engagements_abtests_tagline:`Campañas de pruebas A/B`,nav_engagements_questionnaires:`Cuestionarios`,nav_engagements_questionnaires_tagline:`Cuestionarios y formularios detallados`,nav_develop_documentation:`Documentación`,nav_develop_documentation_tagline:`Documentación de API y productos`,nav_develop_devtools:`Herramientas Dev`,nav_develop_devtools_tagline:`Herramientas y utilidades de desarrollo`,nav_develop_kbase:`Base de Conocimientos`,nav_develop_kbase_tagline:`Base de conocimientos y artículos técnicos`,nav_develop_hackathon:`Hackathon`,nav_develop_hackathon_tagline:`Eventos y desafíos de hackathon`,nav_develop_partner:`Socio`,nav_develop_partner_tagline:`Programa de socios e integraciones`,nav_develop_certification:`Certificación`,nav_develop_certification_tagline:`Programas de certificación para desarrolladores`,nav_profile_aboutme:`Sobre Mí`,nav_profile_aboutme_tagline:`Ver y editar su información personal`,nav_profile_badges:`Insignias`,nav_profile_badges_tagline:`Ver sus insignias y logros obtenidos`,nav_profile_language:`Idioma`,nav_profile_language_tagline:`Gestionar configuración y preferencias de idioma`,nav_reset_password:`Restablecer Contraseña`,nav_reset_password_tagline:`Cambiar la contraseña de su cuenta`,nav_sign_out:`Cerrar Sesión`,nav_sign_out_tagline:`Cerrar sesión de su cuenta`,nav_account:`Cuenta`,nav_account_tagline:`Gestión de cuenta y soporte`,nav_account_contact:`Contacto`,nav_account_contact_tagline:`Contactar con soporte y ventas`,nav_account_pricetier:`Nivel de Precio`,nav_account_pricetier_tagline:`Ver y gestionar planes de precios`,nav_account_helpfaq:`Ayuda y FAQ`,nav_account_helpfaq_tagline:`Preguntas frecuentes y ayuda`,nav_account_team:`Equipo`,nav_account_team_tagline:`Gestionar miembros del equipo y permisos`,nav_account_terms:`Términos`,nav_account_terms_tagline:`Términos de servicio y acuerdos legales`,nav_home:`Inicio`,nav_home_tagline:`Panel de inicio de la consola de administración`,nav_silo_audits:`Auditorías de Silo`,nav_silo_audits_tagline:`Auditar e inspeccionar datos de silo`,nav_cache:`Caché`,nav_cache_tagline:`Gestión de caché y estadísticas`,nav_cache_stats:`Estadísticas`,nav_cache_stats_tagline:`Estadísticas de rendimiento de caché`,nav_dialog_links:`Enlaces de Diálogo`,nav_dialog_links_tagline:`Gestionar configuraciones de enlaces de diálogo y modal`,nav_i18n_maint:`Mant. I18n`,nav_i18n_maint_tagline:`Mantenimiento de internacionalización y gestión de microcopia`,nav_meta_maint:`Mant. Meta`,nav_meta_maint_tagline:`Mantenimiento de metadatos y configuración`,nav_bell_drawer:`Cajón de Campana`,nav_bell_drawer_tagline:`Gestión de notificaciones y configuración del cajón de campana`,nav_meter:`Medidor`,nav_meter_tagline:`Medición de uso y analíticas`,nav_deeplinks:`Enlaces Profundos`,nav_deeplinks_tagline:`Gestión y seguimiento de enlaces profundos`,nav_rss:`RSS`,nav_rss_tagline:`Gestión de feeds RSS y sindicación`,nav_core_assets:`Activos Principales`,nav_core_assets_tagline:`Gestionar activos y recursos principales de la aplicación`,nav_web_hooks:`Web Hooks`,nav_web_hooks_tagline:`Configuración y monitoreo de webhooks`,nav_snippets:`Fragmentos`,nav_snippets_tagline:`Gestión de fragmentos de código y contenido`,nav_snippets_sql:`SQL`,nav_snippets_sql_tagline:`Fragmentos y plantillas de consultas SQL`,nav_snippets_js:`JS`,nav_snippets_js_tagline:`Fragmentos de código JavaScript`,nav_rollers:`Magnet Builder`,nav_rollers_tagline:`Despliegues progresivos y gestión de versiones`,nav_rollers_primary_nav:`Nav Primaria`,nav_rollers_primary_nav_tagline:`Configuración del roller de navegación primaria`},"zh-Hans":{welcome_back:`欢迎回来`,please_enter_your_details:`请输入您的详细信息`,email:`电子邮件`,enter_your_email:`输入您的电子邮件`,password:`密码`,enter_your_password:`输入您的密码`,enter_email_and_password:`输入邮箱和密码`,sign_in:`登入`,forgot_password:`忘记密码？`,remember_email:`记住我的邮箱`,dont_have_an_account:`没有账户？`,sign_up:`报名`,please_enter_your_details_to_get_started:`请输入您的详细信息以开始`,already_have_an_account:`已有账户？`,log_in:`登录`,name:`姓名`,enter_your_name:`输入您的姓名`,first_name:`名字`,last_name:`姓氏`,company:`公司`,phone:`电话`,confirm_password:`确认密码`,create_account:`创建账户`,home:`首页`,dashboard:`仪表板`,correspondence:`信件`,settings:`设置`,sign_out:`登出`,reset_password:`重置密码`,new_password:`新密码`,confirm_new_password:`确认新密码`,enter_new_password:`输入新密码`,enter_company_name:`输入您的公司名称`,enter_phone_number:`输入您的电话号码`,reenter_password:`重新输入您的密码`,update_password:`更新密码`,update_your_password:`更新您的账户密码`,are_you_sure_sign_out:`您确定要登出吗？`,enter_email_for_reset:`请输入您的电子邮件以接收密码重置链接`,send_reset_link:`发送重置链接`,remember_password:`记得您的密码？`,cancel:`取消`,save:`保存`,delete:`删除`,edit:`编辑`,loading:`加载中...`,error:`错误`,success:`成功`,refresh:`刷新`,search:`搜索`,filter:`筛选`,sort:`排序`,view:`查看`,close:`关闭`,submit:`提交`,back:`返回`,next:`下一个`,previous:`上一个`,confirm:`确认`,yes:`是`,no:`否`,ok:`确定`,validation_email_required:`请输入您的电子邮件`,validation_email_invalid:`请输入有效的电子邮件地址`,validation_password_required:`请输入您的密码`,validation_password_min_length:`密码必须至少10个字符`,validation_password_mismatch:`密码不匹配`,validation_first_name_required:`请输入您的名字`,validation_last_name_required:`请输入您的姓氏`,validation_new_password_required:`请输入新密码`,success_welcome_back:`欢迎回来！`,success_password_reset:`密码重置成功`,success_signed_out:`成功登出`,success_reset_link_sent:`密码重置链接已发送！|请检查您的电子邮件`,error_signin_failed:`登录失败`,error_signup_failed:`注册失败`,error_network:`网络错误 - 请重试`,error_password_reset_required:`需要重置密码 - 正在重定向...`,loading_signing_in:`正在登录...`,loading_creating_account:`正在创建账户...`,loading_resetting_password:`正在重置密码...`,nav_home:`首页`,nav_home_tagline:`仪表板和概览`,nav_home_apps:`我的应用`,nav_home_apps_tagline:`您的应用程序和集成`,nav_home_dash:`仪表板`,nav_home_dash_tagline:`主仪表板和分析`,nav_engagements:`互动`,nav_engagements_tagline:`客户互动工具和交互`,nav_develop:`开发`,nav_develop_tagline:`开发工具和资源`,nav_profile:`个人资料`,nav_profile_tagline:`账户设置和偏好`,nav_engagements_surveys:`调查`,nav_engagements_surveys_tagline:`创建和管理客户调查`,nav_engagements_thumbs:`反馈`,nav_engagements_thumbs_tagline:`收集赞成和反对意见`,nav_engagements_voicemail:`语音信箱`,nav_engagements_voicemail_tagline:`语音留言收集`,nav_engagements_guidedtours:`引导式导览`,nav_engagements_guidedtours_tagline:`交互式产品导览`,nav_engagements_slideshows:`幻灯片`,nav_engagements_slideshows_tagline:`内容幻灯片和演示`,nav_engagements_abtests:`A/B测试`,nav_engagements_abtests_tagline:`A/B测试活动`,nav_engagements_questionnaires:`问卷`,nav_engagements_questionnaires_tagline:`详细问卷和表单`,nav_develop_documentation:`文档`,nav_develop_documentation_tagline:`API和产品文档`,nav_develop_devtools:`开发工具`,nav_develop_devtools_tagline:`开发者工具和实用程序`,nav_develop_kbase:`知识库`,nav_develop_kbase_tagline:`技术知识库和文章`,nav_develop_hackathon:`黑客马拉松`,nav_develop_hackathon_tagline:`黑客马拉松活动和挑战`,nav_develop_partner:`合作伙伴`,nav_develop_partner_tagline:`合作伙伴计划和集成`,nav_develop_certification:`认证`,nav_develop_certification_tagline:`开发者认证计划`,nav_profile_aboutme:`关于我`,nav_profile_aboutme_tagline:`查看和编辑您的个人信息`,nav_profile_badges:`徽章`,nav_profile_badges_tagline:`查看您获得的徽章和成就`,nav_profile_language:`语言`,nav_profile_language_tagline:`管理语言设置和偏好`,nav_reset_password:`重置密码`,nav_reset_password_tagline:`更改您的账户密码`,nav_sign_out:`登出`,nav_sign_out_tagline:`退出您的账户`,nav_account:`账户`,nav_account_tagline:`账户管理和支持`,nav_account_contact:`联系`,nav_account_contact_tagline:`联系支持和销售`,nav_account_pricetier:`价格等级`,nav_account_pricetier_tagline:`查看和管理定价计划`,nav_account_helpfaq:`帮助和常见问题`,nav_account_helpfaq_tagline:`常见问题和帮助`,nav_account_team:`团队`,nav_account_team_tagline:`管理团队成员和权限`,nav_account_terms:`条款`,nav_account_terms_tagline:`服务条款和法律协议`,nav_home:`主页`,nav_home_tagline:`管理控制台主页仪表板`,nav_silo_audits:`仓库审计`,nav_silo_audits_tagline:`审计和检查仓库数据`,nav_cache:`缓存`,nav_cache_tagline:`缓存管理和统计`,nav_cache_stats:`统计`,nav_cache_stats_tagline:`缓存性能统计`,nav_dialog_links:`对话框链接`,nav_dialog_links_tagline:`管理对话框和模态链接配置`,nav_i18n_maint:`国际化维护`,nav_i18n_maint_tagline:`国际化维护和微文案管理`,nav_meta_maint:`元数据维护`,nav_meta_maint_tagline:`元数据维护和配置`,nav_bell_drawer:`铃铛抽屉`,nav_bell_drawer_tagline:`通知管理和铃铛抽屉配置`,nav_meter:`计量器`,nav_meter_tagline:`使用计量和分析`,nav_deeplinks:`深层链接`,nav_deeplinks_tagline:`深层链接管理和跟踪`,nav_rss:`RSS`,nav_rss_tagline:`RSS订阅源管理和联合`,nav_core_assets:`核心资产`,nav_core_assets_tagline:`管理核心应用程序资产和资源`,nav_web_hooks:`网络钩子`,nav_web_hooks_tagline:`Webhook配置和监控`,nav_snippets:`代码片段`,nav_snippets_tagline:`代码和内容片段管理`,nav_snippets_sql:`SQL`,nav_snippets_sql_tagline:`SQL查询片段和模板`,nav_snippets_js:`JS`,nav_snippets_js_tagline:`JavaScript代码片段`,nav_rollers:`Magnet Builder`,nav_rollers_tagline:`滚动部署和版本管理`,nav_rollers_primary_nav:`主导航`,nav_rollers_primary_nav_tagline:`主导航滚动器配置`}}}},SIT:{SSE:{M5T:{en:{welcome_back:[`Welcome back`,`Good to see you again`,`Hello again`],please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}},UAT:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}},QA:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}},PROD:{SSE:{M5T:{en:{welcome_back:`Welcome back`,please_enter_your_details:`Please enter your details`,email:`Email`,enter_your_email:`Enter your email`,password:`Password`,enter_your_password:`Enter your password`,sign_in:`Sign in`}}}}};static#t={buildMode:`DEV`,product:`SSE`,whitelabel:`M5T`,lang:`en`};static setContext({buildMode:e,product:t,whitelabel:n,lang:r}){e&&(this.#t.buildMode=e),t&&(this.#t.product=t),n&&(this.#t.whitelabel=n),r&&(this.#t.lang=r)}static getContext(){return{...this.#t}}static get(e,t={}){let{buildMode:n,product:r,whitelabel:i,lang:a}={...this.#t,...t};try{let t=this.#e[n]?.[r]?.[i]?.[a]?.[e],o=n;return!t&&n!==`LOCAL`&&(t=this.#e.LOCAL?.[r]?.[i]?.[a]?.[e],o=`LOCAL (fallback)`),t?(o===`LOCAL (fallback)`&&console.warn(`[MicrocopyManager] Token '${e}' missing from ${n} — served from LOCAL instead. Backfill ${n}'s block if this is intentionally different copy.`),Array.isArray(t)?t[Math.floor(Math.random()*t.length)]:t):(console.warn(`[MicrocopyManager] Token not found: ${e} (${n}/${r}/${i}/${a}, LOCAL fallback also missing it)`),null)}catch(t){return console.error(`[MicrocopyManager] Error retrieving token: ${e}`,t),null}}static getAll(e={}){let{buildMode:t,product:n,whitelabel:r,lang:i}={...this.#t,...e};try{return this.#e[t]?.[n]?.[r]?.[i]||null}catch(e){return console.error(`[MicrocopyManager] Error retrieving all tokens`,e),null}}static has(e,t={}){let{buildMode:n,product:r,whitelabel:i,lang:a}={...this.#t,...t};try{return!!this.#e[n]?.[r]?.[i]?.[a]?.[e]}catch{return!1}}static getAvailableLanguages(){let{buildMode:e,product:t,whitelabel:n}=this.#t;try{return Object.keys(this.#e[e]?.[t]?.[n]||{})}catch{return[]}}static update(e,t,n={}){let{buildMode:r,product:i,whitelabel:a,lang:o}={...this.#t,...n};try{return this.#e[r]||(this.#e[r]={}),this.#e[r][i]||(this.#e[r][i]={}),this.#e[r][i][a]||(this.#e[r][i][a]={}),this.#e[r][i][a][o]||(this.#e[r][i][a][o]={}),this.#e[r][i][a][o][e]=t,!0}catch(t){return console.error(`[MicrocopyManager] Error updating token: ${e}`,t),!1}}static delete(e,t={}){let{buildMode:n,product:r,whitelabel:i,lang:a}={...this.#t,...t};try{return delete this.#e[n]?.[r]?.[i]?.[a]?.[e],!0}catch(t){return console.error(`[MicrocopyManager] Error deleting token: ${e}`,t),!1}}static exportData(){return JSON.parse(JSON.stringify(this.#e))}static importData(e){try{return this.#e=e,!0}catch(e){return console.error(`[MicrocopyManager] Error importing data`,e),!1}}},typeof module<`u`&&module.exports&&(module.exports={MicrocopyManager:O})})),Ft,It=o((()=>{Pt(),y(),Ft=class{static#e=!1;static#t=null;static#n=null;static initialize(){if(this.#e){console.warn(`[I18nController] Already initialized`);return}let e=this.#i();O.setContext(e),console.log(`[I18nController] Initialized with context:`,e),console.log(`[I18nController] Available languages:`,this.getAvailableLanguages()),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Debug mode enabled`),this.#a(),this.#s(),this.#e=!0,this.refresh()}static#r(e){return{development:`LOCAL`,local:`LOCAL`,dev:`DEV`,sit:`SIT`,qa:`QA`,uat:`QA`,production:`PROD`,prod:`PROD`}[e.toLowerCase()]||`DEV`}static#i(){let e=this.#r(`production`),t=localStorage.getItem(v.FF_SSE_LS_WHITELABEL)||v.FF_SSE_I18N_WHITELABEL,n=localStorage.getItem(v.FF_SSE_LS_USER_LANG)||v.FF_SSE_I18N_LANG;return{buildMode:e,product:v.FF_SSE_I18N_PRODUCT,whitelabel:t,lang:n}}static#a(){typeof neodigmCarousel<`u`&&neodigmCarousel.setOnAfterNav?neodigmCarousel.setOnAfterNav((e,t,n)=>{v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Route changed:`,n),this.#t=n,setTimeout(()=>{this.refresh()},v.FF_SSE_I18N_APPLY_DELAY_MS)},v.FF_CLIENT_CAROUSEL_ID):(console.warn(`[I18nController] neodigmCarousel not found. Using fallback polling.`),this.#o())}static#o(){setInterval(()=>{let e=document.querySelector(`[data-n55-carousel-page-name]`)?.getAttribute(`data-n55-carousel-page-name`);e&&e!==this.#t&&(this.#t=e,this.refresh())},500)}static#s(){this.#n||(this.#n=new MutationObserver(e=>{let t=!1;for(let n of e){for(let e of n.addedNodes)if(e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`data-meta-copywrite-i118n`)||e.querySelector(`[data-meta-copywrite-i118n]`))){t=!0;break}if(t)break}t&&(v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] DOM mutation detected, refreshing i18n`),this.refresh())}),this.#n.observe(document.body,{childList:!0,subtree:!0}))}static refresh(){if(!this.#e){console.warn(`[I18nController] Not initialized. Call initialize() first.`);return}this.#c(document.body),this.#l(document.body),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Refresh complete`)}static#c(e){let t=e.querySelectorAll(`[data-meta-copywrite-i118n]`);v.FF_SSE_I18N_DEBUG&&t.length>0&&console.log(`[I18nController] Processing ${t.length} elements`),t.forEach(e=>{try{let t=e.getAttribute(`data-meta-copywrite-i118n`),n=JSON.parse(t);if(!n.token){console.warn(`[I18nController] Missing token in config:`,n);return}let r=n.attribute||`textContent`,i=O.get(n.token);if(i===null){console.warn(`[I18nController] Microcopy not found for token: ${n.token}`);return}r===`textContent`?e.textContent=i:r===`innerHTML`?e.innerHTML=i:e.setAttribute(r,i),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Applied "${i}" to ${r} for token: ${n.token}`)}catch(t){console.error(`[I18nController] Error processing element:`,t,e)}})}static#l(e){e.querySelectorAll(`*`).forEach(e=>{e.shadowRoot&&(this.#c(e.shadowRoot),this.#l(e.shadowRoot))})}static setLanguage(e){let t=O.getAvailableLanguages();if(!t.includes(e)){console.error(`[I18nController] Language not available: ${e}. Available:`,t);return}localStorage.setItem(v.FF_SSE_LS_USER_LANG,e),O.setContext({lang:e}),console.log(`[I18nController] Language changed to:`,e);let n=new CustomEvent(`language-changed`,{bubbles:!0,composed:!0,detail:{lang:e}});document.dispatchEvent(n),this.refresh()}static setWhitelabel(e){localStorage.setItem(v.FF_SSE_LS_WHITELABEL,e),O.setContext({whitelabel:e}),v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Whitelabel changed to:`,e),this.refresh()}static getLanguage(){return O.getContext().lang}static getAvailableLanguages(){return O.getAvailableLanguages()}static getContext(){return O.getContext()}static destroy(){this.#n&&=(this.#n.disconnect(),null),this.#e=!1,this.#t=null,v.FF_SSE_I18N_DEBUG&&console.log(`[I18nController] Destroyed`)}},typeof window<`u`&&typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{Ft.initialize()}):Ft.initialize())}));D(),It(),m();var Lt=class{static _initialized=!1;static _debug=!1;static init(e={}){return this._initialized?(console.warn(`[MachVive] Already initialized, skipping duplicate initialization`),this):(this._debug=e.debug||!1,window.mvvSSEther?(console.log(`[MachVive] Initializing SSE to PubSub bridge...`),window.mvvSSEther.onmessage(e=>{this._handleSSEMessage(e)}),this._initialized=!0,console.log(`[MachVive] ✓ SSE to PubSub bridge initialized successfully`),console.log(`[MachVive] ✓ Bound callback to mvvSSEther.onmessage`),this):(console.error(`[MachVive] mvvSSEther not found - cannot initialize bridge`),console.error(`[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()`),this))}static _handleSSEMessage(e){try{this._debug&&console.log(`[MachVive] SSE message received:`,e);let t=e?.data;if(!t){this._debug&&console.log(`[MachVive] No data in message, skipping`);return}let n=t.data||t.package||t;if(!n){this._debug&&console.log(`[MachVive] No package found in message, skipping`);return}let r=n.cfg,i=n.msg;if(this._debug&&(console.log(`[MachVive] cfg (raw):`,r,`type:`,typeof r,`length:`,r?.length),console.log(`[MachVive] msg (raw):`,i)),typeof r==`string`){if(r.trim()===``){this._debug&&console.log(`[MachVive] cfg is empty string, skipping`);return}try{r=JSON.parse(r),console.log(`[MachVive] cfg (parsed):`,r)}catch(e){console.warn(`[MachVive] Failed to parse cfg as JSON:`,{cfg:r,cfgLength:r.length,error:e.message});return}}else if(!r){this._debug&&console.log(`[MachVive] cfg is empty/null, skipping`);return}let a=r?.topic;if(!a){this._debug&&console.log(`[MachVive] No topic found in cfg, skipping`);return}if(console.log(`[MachVive] Extracted topic:`,a),!this._isValidTopic(a)){console.warn(`[MachVive] Topic '${a}' not found in AppBroadcast, skipping`);return}this._publishToPubSub(a,i,e,t)}catch(e){console.error(`[MachVive] Error handling SSE message:`,e)}}static _isValidTopic(e){return!p||!p.hasOwnProperty(e)?(console.warn(`[MachVive] Topic '${e}' not found in AppBroadcast`),!1):!0}static _publishToPubSub(e,t,n,r){try{if(!window.PubSub&&typeof PubSub>`u`){console.error(`[MachVive] PubSub not available`);return}let i=window.PubSub||PubSub,a={message:t,metadata:{source:`sse`,sseEventId:n.id,timestamp:n.timestamp,appGuid:r.app_guid,channelGuid:r.channel_guid,eventAction:r.event_action,status:r.status,class:r.class,raw:r}};console.log(`[MachVive] Publishing to topic '${e}':`,a);let o=p[e];console.log(`[MachVive] AppBroadcast.${e} = '${o}'`),i.publish(o,a),console.log(`[MachVive] ✓ Published SSE message to topic: ${e}`)}catch(t){console.error(`[MachVive] Error publishing to topic '${e}':`,t)}}static debug(e){return this._debug=e,console.log(`[MachVive] Debug mode ${e?`enabled`:`disabled`}`),this}static isInitialized(){return this._initialized}static reset(){return this._initialized=!1,this._debug=!1,console.log(`[MachVive] Reset complete`),this}};typeof module<`u`&&module.exports&&(module.exports=Lt),typeof window<`u`&&(window.MachVive=Lt);var Rt=`m5t_sidenav_collapsed`,zt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Bt=class extends HTMLElement{static get observedAttributes(){return[`data-active-token`,`data-collapsed`]}constructor(){super(),this.attachShadow({mode:`open`}),this.items=[],this.orgs=[],this.activeOrgGuid=null,this.activeToken=null,this.footerBadge=null,this.loading=!1,this.lastFocus=null}#e=null;#t=e=>{if(this.getAttribute(`data-open`)===`true`){if(e.key===`Escape`){e.preventDefault(),this.closeDrawer();return}if(e.key===`Tab`){let t=this.#d();if(t.length<2)return;let n=t[0],r=t[t.length-1],i=this.shadowRoot.activeElement;e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())}}};#n=()=>{this.closeDrawer(),this.#f()};connectedCallback(){if(!this.hasAttribute(`data-collapsed`))try{localStorage.getItem(Rt)===`true`&&this.setAttribute(`data-collapsed`,`true`)}catch{}this.activeToken=this.getAttribute(`data-active-token`)||null,this.render(),this.#l(),this.addEventListener(`keydown`,this.#t),this.#e=window.matchMedia(`(max-width: 768px)`),this.#e.addEventListener(`change`,this.#n),this.#f()}disconnectedCallback(){this.removeEventListener(`keydown`,this.#t),this.#e?.removeEventListener(`change`,this.#n)}attributeChangedCallback(e,t,n){t===n||!this.shadowRoot||(e===`data-active-token`?(this.activeToken=n,this.#u()):e===`data-collapsed`&&this.shadowRoot.firstChild&&(this.render(),this.#l()))}setState({buttons:e,orgs:t,activeOrg:n,footerBadge:r,loading:i}={}){e!==void 0&&(this.items=Array.isArray(e)?e:this.#r(e)||[]),t!==void 0&&(this.orgs=Array.isArray(t)?t:this.#r(t)||[]),n!==void 0&&(this.activeOrgGuid=n||null),r!==void 0&&(this.footerBadge=r||null),i!==void 0&&(this.loading=!!i),this.shadowRoot&&(this.render(),this.#l())}setButtons(e){this.setState({buttons:e})}setOrgs(e){this.setState({orgs:e})}setActiveOrgGuid(e){this.setState({activeOrg:e})}setFooterBadge(e){this.setState({footerBadge:e})}setActiveToken(e){this.activeToken=e||null,this.#u()}toggleCollapsed(e){let t=typeof e==`boolean`?e:this.getAttribute(`data-collapsed`)!==`true`;this.setAttribute(`data-collapsed`,String(t));try{localStorage.setItem(Rt,String(t))}catch{}this.dispatchEvent(new CustomEvent(`nav-collapse`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.COLLAPSE`,collapsed:t,timestamp:Date.now()}}))}openDrawer(){this.lastFocus=this.shadowRoot.activeElement||document.activeElement,this.setAttribute(`data-open`,`true`),this.shadowRoot.querySelector(`.hamburger`)?.setAttribute(`aria-expanded`,`true`),this.#f(),(this.#d()[0]||this.shadowRoot.querySelector(`.sidenav`))?.focus?.()}closeDrawer(){if(this.getAttribute(`data-open`)!==`true`)return;this.removeAttribute(`data-open`);let e=this.shadowRoot.querySelector(`.hamburger`);e?.setAttribute(`aria-expanded`,`false`),this.#f(),e&&this.#e?.matches?e.focus():this.lastFocus?.focus?.()}toggleDrawer(){this.getAttribute(`data-open`)===`true`?this.closeDrawer():this.openDrawer()}#r(e){try{return e?JSON.parse(e):null}catch(e){return console.error(`[M5TSideNav] bad JSON:`,e),null}}#i(e){return String(e??``).replace(/[&<>"']/g,e=>zt[e])}#a(e){return e?`<span class="ms" aria-hidden="true">${this.#i(e)}</span>`:``}#o(e){if(!e||!e.token)return``;let t=e.token===this.activeToken,n=e.route||`#`,r=n.startsWith(`#`)?n:`#${n}`,i=typeof e.count==`number`&&e.count>0?`<span class="badge">${e.count}</span>`:``;return`
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
    `}#l(){this.shadowRoot.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.metaKey||t.ctrlKey||t.shiftKey||t.button===1||(t.preventDefault(),this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.TAP`,token:e.getAttribute(`data-token`),route:e.getAttribute(`data-route`),caption:e.querySelector(`.label`)?.textContent||``,timestamp:Date.now()}})),this.closeDrawer())})}),this.shadowRoot.querySelector(`.collapse-btn`)?.addEventListener(`click`,()=>this.toggleCollapsed()),this.shadowRoot.querySelector(`.hamburger`)?.addEventListener(`click`,()=>this.toggleDrawer()),this.shadowRoot.querySelector(`.scrim`)?.addEventListener(`click`,()=>this.closeDrawer()),this.#f(),this.shadowRoot.querySelector(`.logo`)?.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`logo-click`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.LOGO_TAP`,timestamp:Date.now()}}))}),this.shadowRoot.querySelector(`.org-select`)?.addEventListener(`change`,e=>{this.dispatchEvent(new CustomEvent(`org-switch`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.ORG_SWITCH`,orgGuid:e.target.value,timestamp:Date.now()}}))}),this.shadowRoot.querySelectorAll(`.footer-action`).forEach(e=>{e.addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`footer-action`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_SIDE_NAV.FOOTER_ACTION`,action:e.getAttribute(`data-action`),timestamp:Date.now()}})),this.closeDrawer()})}),this.getAttribute(`data-open`)===`true`&&this.#d()[0]?.focus()}#u(){this.shadowRoot&&this.shadowRoot.querySelectorAll(`.nav-item`).forEach(e=>{let t=e.getAttribute(`data-token`)===this.activeToken;e.classList.toggle(`active`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}#d(){return Array.from(this.shadowRoot.querySelectorAll(`.sidenav a[href], .sidenav button:not([disabled]), .sidenav select`)).filter(e=>e.offsetParent!==null)}#f(){let e=this.shadowRoot?.querySelector(`.sidenav`);e&&(e.inert=(this.#e?this.#e.matches:window.matchMedia(`(max-width: 768px)`).matches)&&this.getAttribute(`data-open`)!==`true`)}};customElements.define(`m5t-side-nav`,Bt),Pt();var Vt=class{static#e=null;static#t={"client-saas":[{token:`HOME`,caption:`Home`,enabled:!0,icon:`--icon`,admin_role:!1,tagline:`Home Landing Page`,secondary:[{token:`HOME_APPS`,caption:`My Apps`,enabled:!0,icon:`--icon`,admin_role:!1,tagline:`My Apps`},{token:`HOME_DASH`,caption:`Dashboard`,enabled:!0,icon:`--icon`,admin_role:!1,tagline:`Dashboard`}]},{token:`ENGAGEMENTS`,caption:`Engagements`,enabled:!0,icon:`var(--icon-engagements)`,admin_role:!1,tagline:`Customer engagement tools and interactions`,secondary:[{token:`ENGAGEMENTS_SURVEYS`,caption:`Surveys`,enabled:!0,icon:`var(--icon-surveys)`,admin_role:!1,tagline:`Create and manage customer surveys`,secondary:[]},{token:`ENGAGEMENTS_THUMBS`,caption:`Feedback`,enabled:!0,icon:`var(--icon-feedback)`,admin_role:!1,tagline:`Quick thumbs up/down feedback`,secondary:[]},{token:`ENGAGEMENTS_VOICEMAIL`,caption:`Voicemail`,enabled:!0,icon:`var(--icon-voicemail)`,admin_role:!1,tagline:`Voice message collection`,secondary:[]},{token:`ENGAGEMENTS_GUIDEDTOURS`,caption:`Guided Tours`,enabled:!0,icon:`var(--icon-guided-tours)`,admin_role:!1,tagline:`Interactive product tours`,secondary:[]},{token:`ENGAGEMENTS_SLIDESHOWS`,caption:`Slideshows`,enabled:!0,icon:`var(--icon-slideshows)`,admin_role:!1,tagline:`Content slideshows and presentations`,secondary:[]},{token:`ENGAGEMENTS_ABTESTS`,caption:`A/B Tests`,enabled:!0,icon:`var(--icon-ab-tests)`,admin_role:!1,tagline:`A/B testing campaigns`,secondary:[]},{token:`ENGAGEMENTS_QUESTIONNAIRES`,caption:`Questionnaires`,enabled:!0,icon:`var(--icon-questionnaires)`,admin_role:!1,tagline:`Detailed questionnaires and forms`,secondary:[]}]},{token:`DEVELOP`,caption:`Develop`,enabled:!0,icon:`var(--icon-develop)`,admin_role:!1,tagline:`Developer resources and tools`,secondary:[{token:`DEVELOP_DOCUMENTATION`,caption:`Documentation`,enabled:!0,icon:`var(--icon-documentation)`,admin_role:!1,tagline:`API and product documentation`,secondary:[]},{token:`DEVELOP_DEVTOOLS`,caption:`Dev Tools`,enabled:!0,icon:`var(--icon-dev-tools)`,admin_role:!1,tagline:`Developer tools and utilities`,secondary:[]},{token:`DEVELOP_KBASE`,caption:`Knowledge Base`,enabled:!0,icon:`var(--icon-knowledge-base)`,admin_role:!1,tagline:`Technical knowledge base and articles`,secondary:[]},{token:`DEVELOP_HACKATHON`,caption:`Hackathon`,enabled:!0,icon:`var(--icon-hackathon)`,admin_role:!1,tagline:`Hackathon events and challenges`,secondary:[]},{token:`DEVELOP_PARTNER`,caption:`Partner`,enabled:!0,icon:`var(--icon-partner)`,admin_role:!1,tagline:`Partner program and integrations`,secondary:[]},{token:`DEVELOP_CERTIFICATION`,caption:`Certification`,enabled:!0,icon:`var(--icon-certification)`,admin_role:!1,tagline:`Developer certification programs`,secondary:[]}]},{token:`PROFILE`,caption:`Profile`,enabled:!0,icon:`var(--icon-profile)`,admin_role:!1,tagline:`Manage your personal profile and account`,secondary:[{token:`PROFILE_ABOUTME`,caption:`About Me`,enabled:!0,icon:`var(--icon-about-me)`,admin_role:!1,tagline:`View and edit your personal information`,secondary:[]},{token:`PROFILE_BADGES`,caption:`Badges`,enabled:!0,icon:`var(--icon-badges)`,admin_role:!1,tagline:`View your earned badges and achievements`,secondary:[]},{token:`PROFILE_LANGUAGE`,caption:`Language`,enabled:!0,icon:`var(--icon-profile-language)`,admin_role:!1,tagline:`Manage language settings and preferences`,secondary:[]},{token:`RESET_PASSWORD`,caption:`Change Password`,enabled:!0,icon:`var(--icon-change-password)`,admin_role:!1,tagline:`Change your account password`,secondary:[]},{token:`SIGN_OUT`,caption:`Sign Out`,enabled:!0,icon:`var(--icon-sign-out)`,admin_role:!1,tagline:`Log out of your account`,secondary:[]}]},{token:`ACCOUNT`,caption:`Account`,enabled:!0,icon:`var(--icon-account)`,admin_role:!1,tagline:`Account management and support`,secondary:[{token:`ACCOUNT_CONTACT`,caption:`Contact`,enabled:!0,icon:`var(--icon-contact)`,admin_role:!1,tagline:`Contact support and sales`,secondary:[]},{token:`ACCOUNT_PRICETIER`,caption:`Price Tier`,enabled:!0,icon:`var(--icon-price-tier)`,admin_role:!1,tagline:`View and manage pricing plans`,secondary:[]},{token:`ACCOUNT_HELPFAQ`,caption:`Help FAQ`,enabled:!0,icon:`var(--icon-help-faq)`,admin_role:!1,tagline:`Frequently asked questions`,secondary:[]},{token:`ACCOUNT_TEAM`,caption:`Team`,enabled:!0,icon:`var(--icon-team)`,admin_role:!1,tagline:`Manage team members and roles`,secondary:[]},{token:`ACCOUNT_TERMS`,caption:`Terms`,enabled:!0,icon:`var(--icon-terms)`,admin_role:!1,tagline:`Terms of service and legal documents`,secondary:[]}]}],"client-sse-console":[{token:`HOME`,caption:`Home`,enabled:!0,icon:`fas fa-home`,admin_role:!1,tagline:`Admin console home dashboard`,secondary:[]},{token:`ACCOUNTS`,caption:`Accounts`,enabled:!0,icon:`fas fa-user`,admin_role:!1,tagline:`User account management`,secondary:[]},{token:`GROUPS`,caption:`Groups`,enabled:!0,icon:`fas fa-users-cog`,admin_role:!1,tagline:`Group and role management`,secondary:[]},{token:`QUESTIONNAIRES`,caption:`Questionnaires`,enabled:!0,icon:`fas fa-clipboard-list`,admin_role:!1,tagline:`Client kickoff questionnaires — read answers and finalize`,secondary:[]},{token:`LEADS_MANAGE`,caption:`Leads`,enabled:!0,icon:`fas fa-user-plus`,admin_role:!1,tagline:`Lead management and tracking`,secondary:[]},{token:`ROLLERS`,caption:`Magnet Builder`,enabled:!0,icon:`fas fa-magnet`,admin_role:!1,tagline:`Build and configure magnets (steps, actions, flow)`,secondary:[]},{token:`SYSTEM`,caption:`System`,enabled:!0,icon:`fas fa-server`,admin_role:!1,tagline:`System tools — dialog, health, and metering`,secondary:[{token:`DIALOG`,caption:`Dialog`,enabled:!0,icon:`fas fa-comment-alt`,admin_role:!1,tagline:`Dialog and modal management`,secondary:[]},{token:`HEALTH`,caption:`Health`,enabled:!0,icon:`fas fa-heartbeat`,admin_role:!1,tagline:`API health and authentication testing`,secondary:[]},{token:`METER`,caption:`Meter`,enabled:!0,icon:`fas fa-tachometer-alt`,admin_role:!1,tagline:`Usage metering and analytics`,secondary:[]}]},{token:`APPS`,caption:`Apps`,enabled:!0,icon:`fas fa-mobile-alt`,admin_role:!1,tagline:`Subscriber apps (EtherCards)`,secondary:[]},{token:`MESSAGES`,caption:`Messages`,enabled:!0,icon:`fas fa-envelope`,admin_role:!1,tagline:`Message management and templates`,secondary:[]}],LaunCh_console_applet:[{token:`CONSOLE_HOME`,caption:`Console Home`,enabled:!0,icon:`fas fa-terminal`,admin_role:!1,tagline:`Launch console home dashboard`,secondary:[]},{token:`SYSTEM_MONITOR`,caption:`System Monitor`,enabled:!0,icon:`fas fa-desktop`,admin_role:!1,tagline:`Real-time system monitoring and health checks`,secondary:[{token:`SYSTEM_MONITOR_CPU`,caption:`CPU Usage`,enabled:!0,icon:`fas fa-microchip`,admin_role:!1,tagline:`Monitor CPU performance and load`,secondary:[]},{token:`SYSTEM_MONITOR_MEMORY`,caption:`Memory`,enabled:!0,icon:`fas fa-memory`,admin_role:!1,tagline:`Track memory usage and allocation`,secondary:[]},{token:`SYSTEM_MONITOR_NETWORK`,caption:`Network`,enabled:!0,icon:`fas fa-network-wired`,admin_role:!1,tagline:`Network traffic and connectivity`,secondary:[]}]},{token:`LOGS`,caption:`Logs`,enabled:!0,icon:`fas fa-file-medical-alt`,admin_role:!1,tagline:`View system logs and error reports`,secondary:[{token:`LOGS_APPLICATION`,caption:`Application`,enabled:!0,icon:`fas fa-code`,admin_role:!1,tagline:`Application-level logs`,secondary:[]},{token:`LOGS_SYSTEM`,caption:`System`,enabled:!0,icon:`fas fa-server`,admin_role:!1,tagline:`System-level logs`,secondary:[]},{token:`LOGS_SECURITY`,caption:`Security`,enabled:!0,icon:`fas fa-lock`,admin_role:!1,tagline:`Security audit logs`,secondary:[]}]},{token:`DEPLOYMENTS`,caption:`Deployments`,enabled:!0,icon:`fas fa-rocket`,admin_role:!1,tagline:`Manage application deployments`,secondary:[]}],Client_Property_Sandbox_Emulator:[{token:`SANDBOX_HOME`,caption:`Sandbox Home`,enabled:!0,icon:`fas fa-home`,admin_role:!1,tagline:`Sandbox testing environment home`,secondary:[]},{token:`API_TESTING`,caption:`API Testing`,enabled:!0,icon:`fas fa-vial`,admin_role:!1,tagline:`Test API endpoints and responses`,secondary:[{token:`API_TESTING_ENDPOINTS`,caption:`Endpoints`,enabled:!0,icon:`fas fa-plug`,admin_role:!1,tagline:`Available API endpoints`,secondary:[]},{token:`API_TESTING_REQUESTS`,caption:`Requests`,enabled:!0,icon:`fas fa-paper-plane`,admin_role:!1,tagline:`Send test requests`,secondary:[]},{token:`API_TESTING_HISTORY`,caption:`History`,enabled:!0,icon:`fas fa-history`,admin_role:!1,tagline:`Request history and logs`,secondary:[]}]},{token:`DATA_SIMULATOR`,caption:`Data Simulator`,enabled:!0,icon:`fas fa-database`,admin_role:!1,tagline:`Simulate data scenarios and edge cases`,secondary:[{token:`DATA_SIMULATOR_GENERATE`,caption:`Generate`,enabled:!0,icon:`fas fa-magic`,admin_role:!1,tagline:`Generate mock data`,secondary:[]},{token:`DATA_SIMULATOR_LOAD`,caption:`Load`,enabled:!0,icon:`fas fa-upload`,admin_role:!1,tagline:`Load data fixtures`,secondary:[]}]},{token:`SCENARIOS`,caption:`Scenarios`,enabled:!0,icon:`fas fa-project-diagram`,admin_role:!1,tagline:`Pre-configured test scenarios`,secondary:[]},{token:`RESET_SANDBOX`,caption:`Reset Sandbox`,enabled:!0,icon:`fas fa-redo`,admin_role:!1,tagline:`Reset sandbox to initial state`,secondary:[]}]};static#n={"client-saas":[{token:`DASHBOARD`,caption:`Dashboard`,icon:`dashboard`,route:`/home`,capability:`view_dashboard`,enabled:!0,tagline:`Overview of your activity`},{token:`MAGNETS`,caption:`Your Magnets`,icon:`widgets`,route:`/magnets`,capability:`view_magnets`,enabled:!0,tagline:`Manage your conversational magnets`,children:[{token:`MAGNETS_ALL`,caption:`All`,route:`/magnets`,capability:`view_magnets`},{token:`MAGNETS_DRAFTS`,caption:`Drafts`,route:`/magnets/drafts`,capability:`view_magnets`,enabled:!1},{token:`MAGNETS_ARCHIVED`,caption:`Archived`,route:`/magnets/archived`,capability:`view_magnets`,enabled:!1}]},{token:`LEADS`,caption:`Leads`,icon:`contacts`,route:`/leads`,capability:`view_magnets`,enabled:!0,tagline:`Leads your magnets captured`},{token:`TEMPLATES`,caption:`Templates`,icon:`content_copy`,route:`/templates`,capabilityAny:[`provision_magnets`,`manage_magnets`],enabled:!0,tagline:`Start from a magnet template`},{token:`CONVERSATIONS`,caption:`Conversations`,icon:`forum`,route:`/conversations`,capability:`view_conversations`,enabled:!0,tagline:`Captured lead conversations`},{token:`AB_TESTING`,caption:`A/B Testing`,icon:`science`,route:`/ab-testing`,capability:`manage_magnets`,enabled:!0,tagline:`Experiment and optimize`},{token:`ANALYTICS`,caption:`Analytics`,icon:`monitoring`,route:`/analytics`,capability:`view_stats`,enabled:!0,tagline:`Magnet performance and conversions`,children:[{token:`ANALYTICS_OVERVIEW`,caption:`Overview`,route:`/analytics`,capability:`view_stats`},{token:`ANALYTICS_CONVERSIONS`,caption:`Conversions`,route:`/analytics/conversions`,capability:`view_stats`,enabled:!1}]},{token:`ADVERTISING`,caption:`Advertising`,icon:`ads_click`,route:`/analytics/ad-performance`,capabilityAny:[`view_ad_metrics`,`connect_ad_accounts`],enabled:!0,tagline:`Ad performance and connected accounts`,children:[{token:`ADVERTISING_PERFORMANCE`,caption:`Ad Performance`,route:`/analytics/ad-performance`,capability:`view_ad_metrics`},{token:`ADVERTISING_ACCOUNTS`,caption:`Ad Accounts`,route:`/ad-accounts`,capability:`connect_ad_accounts`}]},{token:`CLIENTS`,caption:`Clients`,icon:`groups`,route:`/clients`,capability:`create_client_accounts`,enabled:!0,tagline:`Manage your client accounts`},{token:`QUESTIONNAIRES`,caption:`Questionnaires`,icon:`fact_check`,route:`/questionnaires`,capability:`create_client_accounts`,enabled:!0,tagline:`Kickoff questionnaire status per client`},{token:`TEAM`,caption:`Team`,icon:`group`,route:`/team`,capability:`manage_team`,enabled:!0,tagline:`Invite and manage teammates`},{token:`BILLING`,caption:`Billing`,icon:`receipt_long`,route:`/billing`,capability:`view_billing`,enabled:!1,tagline:`Plan, usage, and invoices`},{token:`SETTINGS`,caption:`Settings`,icon:`settings`,route:`/settings`,capability:null,enabled:!0,tagline:`Account and workspace settings`,children:[{token:`SETTINGS_GENERAL`,caption:`General`,route:`/settings`,capability:null},{token:`SETTINGS_WORKSPACE`,caption:`Workspace`,route:`/settings/workspace`,capability:null},{token:`SETTINGS_NOTIFICATIONS`,caption:`Notifications`,route:`/settings/notifications`,capability:null},{token:`SETTINGS_INTEGRATIONS`,caption:`Integrations`,route:`/settings/integrations`,capability:null},{token:`SETTINGS_SECURITY`,caption:`Security`,route:`/settings/security`,capability:null}]}]};static setAppToken(e){this.#t[e]||console.warn(`[NavMetaManager] Unknown app token: ${e}. Available: ${Object.keys(this.#t).join(`, `)}`),this.#e=e,console.log(`[NavMetaManager] App token set: ${e}`)}static getAppToken(){return this.#e}static#r(e){if(!e)return e;let t=e.token.toLowerCase(),n=`nav_${t}`,r=`nav_${t}_tagline`,i=O.get(n)||e.caption,a=O.get(r)||e.tagline;return{...e,caption:i,tagline:a,secondary:e.secondary?e.secondary.map(e=>this.#r(e)):[]}}static getPrimaryNav(){return this.#e?(this.#t[this.#e]||[]).map(e=>this.#r(e)):(console.warn(`[NavMetaManager] No app token set. Call setAppToken() first.`),[])}static getFlattenedNav(){let e=this.getPrimaryNav(),t=[];return e.forEach(e=>{t.push(e),e.secondary&&e.secondary.length>0&&t.push(...e.secondary)}),t}static getNavByToken(e){return this.getFlattenedNav().find(t=>t.token===e)||null}static getAdminNav(){return this.getFlattenedNav().filter(e=>e.admin_role===!0)}static getUserNav(){return this.getFlattenedNav().filter(e=>e.admin_role===!1)}static getPrimaryNavJSON(){return JSON.stringify(this.getPrimaryNav())}static#i(e){if(!e||!e.token)return e;let t=e.token.toLowerCase();return{...e,caption:O.get(`nav_${t}`)||e.caption,tagline:O.get(`nav_${t}_tagline`)||e.tagline}}static getSideNav(e=[],{uiMode:t=null}={}){let n=this.#n[this.#e]?this.#e:`client-saas`,r=this.#n[n]||[],i=Array.isArray(e)?e:[],a=e=>e.enabled===!1?!1:e.capability==null&&!e.capabilityAny||!(e.capability&&!i.includes(e.capability)||e.capabilityAny&&!e.capabilityAny.some(e=>i.includes(e))),o=[];for(let e of r)if(e.group&&Array.isArray(e.items)){if(!a(e))continue;let t=e.items.filter(a).map(e=>this.#i(e));t.length&&o.push({...this.#i(e),items:t})}else if(a(e)){let t=this.#i(e);Array.isArray(e.children)&&e.children.length&&(t.children=e.children.filter(a).map(e=>this.#i(e))),o.push(t)}return o}static getSideNavJSON(e=[],t={}){return JSON.stringify(this.getSideNav(e,t))}static getAvailableApps(){return Object.keys(this.#t)}static async fetchFromCoreMeta(e=`/m5t/v5`){if(!this.#e)return console.warn(`[NavMetaManager] No app token set. Using static config.`),this.getPrimaryNav();try{let t=`NAV_${this.#e.toUpperCase().replace(/-/g,`_`)}`,n=await fetch(`${e}/coreMeta?meta_token=${t}`);if(!n.ok)return console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${n.status}), using static config`),this.getPrimaryNav();let r=await n.json();return r.ok&&r.data&&r.data.meta_keyval?(console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${t}`),r.data.meta_keyval):(console.warn(`[NavMetaManager] No data in coreMeta response, using static config`),this.getPrimaryNav())}catch(e){return console.error(`[NavMetaManager] Error fetching from coreMeta:`,e),this.getPrimaryNav()}}static getAll(){return{...this.#t}}};typeof module<`u`&&module.exports&&(module.exports={NavMetaManager:Vt});var Ht=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.buttons=[],this.selectedPrimaryToken=null,this.selectedSecondaryToken=null,this.logoTopic=null,this.showSecondary=!0,this.hideLogo=!1,this.longTapTimer=null,this.longTapDelay=4600,this.longTapActive=!1,this.longTapFired=!1}connectedCallback(){this.logoTopic=this.getAttribute(`data-logo-topic`),this.showSecondary=this.getAttribute(`data-show-secondary`)!==`false`,this.hideLogo=this.getAttribute(`data-hide-logo`)===`true`,this.parseButtons(),this.render(),this.languageChangeHandler=()=>{console.log(`[M5TPrimaryNav] Language changed, refreshing navigation with i18n`);let e=Vt.getPrimaryNav();e&&e.length>0?(this.setAttribute(`data-buttons`,JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()):console.warn(`[M5TPrimaryNav] No navigation data returned from NavMetaManager`)},document.addEventListener(`language-changed`,this.languageChangeHandler),this.attachEventListeners()}disconnectedCallback(){this.languageChangeHandler&&document.removeEventListener(`language-changed`,this.languageChangeHandler)}parseButtons(){let e=this.getAttribute(`data-buttons`);if(e)try{this.buttons=JSON.parse(e);let t=this.buttons.find(e=>e.selected);this.selectedPrimaryToken=t?t.token:this.buttons[0]?.token||null}catch(e){console.error(`[M5TPrimaryNav] Error parsing buttons:`,e),this.buttons=[]}}getSecondaryButtons(){return!this.selectedPrimaryToken||!this.showSecondary?[]:this.buttons.find(e=>e.token===this.selectedPrimaryToken)?.secondary||[]}getButtonData(e,t){if(t===`primary`){let t=this.buttons.find(t=>t.token===e);return{caption:t?.caption||``,tagline:t?.tagline||``}}for(let t of this.buttons)if(t.secondary){let n=t.secondary.find(t=>t.token===e);if(n)return{caption:n.caption||``,tagline:n.tagline||``}}return{caption:``,tagline:``}}render(){let e=this.getSecondaryButtons(),t=e.length>0,n=!Array.isArray(this.buttons)||this.buttons.length===0;this.shadowRoot.innerHTML=`
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
    `}attachEventListeners(){this.shadowRoot.querySelectorAll(`.nav-button`).forEach(e=>{let t=e.getAttribute(`data-token`),n=e.getAttribute(`data-level`);e.addEventListener(`click`,e=>{t&&!e.currentTarget.disabled&&!this.longTapFired&&(n===`primary`?this.selectPrimaryButton(t):this.selectSecondaryButton(t)),this.longTapFired=!1}),e.addEventListener(`dblclick`,e=>{if(t&&!e.currentTarget.disabled){let e=this.getButtonData(t,n);console.log(`[M5TPrimaryNav] Button double-clicked:`,t),this.dispatchEvent(new CustomEvent(`nav-double-tap`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.DOUBLE_TAP`,token:t,level:n,caption:e.caption,tagline:e.tagline,timestamp:Date.now()}}))}}),e.addEventListener(`mouseenter`,e=>{if(t&&!e.currentTarget.disabled){let e=this.getButtonData(t,n);this.dispatchEvent(new CustomEvent(`nav-hover`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.HOVER`,token:t,level:n,caption:e.caption,tagline:e.tagline,action:`enter`,timestamp:Date.now()}}))}}),e.addEventListener(`mouseleave`,e=>{if(t&&!e.currentTarget.disabled){let e=this.getButtonData(t,n);this.dispatchEvent(new CustomEvent(`nav-hover`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.HOVER`,token:t,level:n,caption:e.caption,tagline:e.tagline,action:`leave`,timestamp:Date.now()}}))}}),e.addEventListener(`mousedown`,e=>{t&&!e.currentTarget.disabled&&(this.longTapActive=!0,this.longTapFired=!1,this.longTapTimer=setTimeout(()=>{let e=this.getButtonData(t,n);console.log(`[M5TPrimaryNav] Button long-tap:`,t),this.longTapFired=!0,this.dispatchEvent(new CustomEvent(`nav-long-tap`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.LONG_TAP`,token:t,level:n,caption:e.caption,tagline:e.tagline,timestamp:Date.now()}}))},this.longTapDelay))}),e.addEventListener(`mouseup`,e=>{this.longTapTimer&&=(clearTimeout(this.longTapTimer),null),this.longTapActive=!1}),e.addEventListener(`mouseleave`,e=>{this.longTapTimer&&=(clearTimeout(this.longTapTimer),null),this.longTapActive=!1})});let e=this.shadowRoot.querySelector(`.logo`);e&&e.addEventListener(`click`,()=>{console.log(`[M5TPrimaryNav] Logo clicked`),this.logoTopic&&window.m5t?.pubsub?(console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`),window.m5t.pubsub.publish(this.logoTopic,{timestamp:Date.now()})):this.logoTopic&&!window.m5t?.pubsub&&console.warn(`[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found`),this.dispatchEvent(new CustomEvent(`logo-click`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.LOGO_TAP`,timestamp:Date.now()}}))})}selectPrimaryButton(e){let t=this.buttons.find(t=>t.token===e),n=this.getButtonData(e,`primary`);this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.TAP`,token:e,level:`primary`,caption:n.caption,tagline:n.tagline,hasSecondary:(t?.secondary?.length||0)>0,timestamp:Date.now()}})),this.selectedPrimaryToken!==e&&(this.selectedPrimaryToken=e,this.render(),this.attachEventListeners())}selectSecondaryButton(e){let t=this.getButtonData(e,`secondary`);this.dispatchEvent(new CustomEvent(`nav-select`,{bubbles:!0,composed:!0,detail:{pubsubTopic:`M5T_PRIMARY_NAV.TAP`,token:e,primaryToken:this.selectedPrimaryToken,level:`secondary`,caption:t.caption,tagline:t.tagline,timestamp:Date.now()}}))}updateButtons(e){this.setAttribute(`data-buttons`,JSON.stringify(e)),this.parseButtons(),this.render(),this.attachEventListeners()}updateCount(e,t,n=`primary`){let r;r=n===`primary`?this.buttons.find(t=>t.token===e):this.getSecondaryButtons().find(t=>t.token===e),r&&(r.count=t,this.render(),this.attachEventListeners())}getSelection(){return{primary:this.selectedPrimaryToken,secondary:null}}};customElements.define(`m5t-primary-nav`,Ht);var Ut=()=>E.getConfig?.().BASE_URL||``,Wt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Gt=e=>String(e??``).replace(/[&<>"']/g,e=>Wt[e]),Kt=3e5;function qt(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function Jt(e){let t=`
      <div class="m5t-notif-title">${Gt(e.title)}</div>
      ${e.body?`<div class="m5t-notif-body">${Gt(e.body)}</div>`:``}
      <div class="m5t-notif-time">${Gt(qt(e.created_tz))}</div>`;return`<div class="m5t-notif-item" data-guid="${Gt(e.guid)}" data-read="${e.read}" role="menuitem">
    ${e.link?`<a class="m5t-notif-main m5t-notif-link" href="${Gt(e.link)}">${t}</a>`:`<div class="m5t-notif-main">${t}</div>`}
    <button class="m5t-notif-dismiss" type="button" aria-label="Clear “${Gt(e.title)}”" data-dismiss="${Gt(e.guid)}">Clear</button>
  </div>`}var Yt=`<div class="m5t-notif-skel"><span></span><span></span><span></span></div>`.repeat(3),Xt=e=>e.dataset.open===`true`,Zt=(e,t)=>{e.dataset.open=t?`true`:`false`};function Qt(e){let t=document.getElementById(`m5t-notif-bell`);if(t&&(t.hidden=!e),!e){let e=document.getElementById(`m5t-notif-panel`);e&&Zt(e,!1)}}var $t=14,en=null,tn=null;function nn(e){if(typeof ResizeObserver>`u`||!e)return;let t=document.getElementById(`m5t-notif-bell`),n=document.getElementById(`m5t-notif-bell-btn`);if(!t||!n)return;let r=()=>{let r=e.hidden?null:e.querySelector(`.ocb-btn`);if(!r){t.style.top=`${$t}px`;return}let i=n.getBoundingClientRect().height;if(!i)return;let a=r.getBoundingClientRect();t.style.top=`${Math.round(a.top+(a.height-i)/2)}px`};en?.disconnect(),en=new ResizeObserver(r),en.observe(e),tn?.disconnect(),tn=new MutationObserver(r),tn.observe(t,{attributes:!0,attributeFilter:[`hidden`]}),r()}var rn=null,an=null,on=null;function sn(){let e=document.getElementById(`m5t-notif-bell-btn`),t=document.getElementById(`m5t-notif-badge`),n=document.getElementById(`m5t-notif-panel`);if(!e||!t||!n)return;let r=e=>{t.textContent=e>99?`99+`:String(e),t.hidden=!e},i=async()=>{try{let e=await fetch(`${Ut()}/m5t/v5/notifications/unread-count`),t=await e.json().catch(()=>({}));e.ok&&t.ok&&r(t.count||0)}catch{}},a=e=>{if(e.length>=50){i();return}r(e.filter(e=>!e.read).length)},o=(e=``)=>`<div class="m5t-notif-head">Notifications${e?`<span class="m5t-notif-head__actions">${e}</span>`:``}</div>`,s=()=>{n.querySelectorAll(`.m5t-notif-item, .m5t-notif-empty`).forEach(e=>e.remove()),n.querySelector(`.m5t-notif-head__actions`)?.remove(),n.insertAdjacentHTML(`beforeend`,`<div class="m5t-notif-empty">You’re all caught up.</div>`)},c=async()=>{n.innerHTML=o()+Yt;try{let e=await fetch(`${Ut()}/m5t/v5/notifications`),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error();let r=t.notifications||[],i=[r.some(e=>!e.read)?`<button class="m5t-notif-markall" type="button">Mark all read</button>`:``,r.length?`<button class="m5t-notif-clearall" type="button">Clear all</button>`:``].join(``);n.innerHTML=o(i)+(r.length?r.map(Jt).join(``):`<div class="m5t-notif-empty">You’re all caught up.</div>`),a(r)}catch{n.innerHTML=o()+`<div class="m5t-notif-empty">Could not load. Try again.</div>`}},l=()=>{Zt(n,!1),e.setAttribute(`aria-expanded`,`false`)},u=async()=>{Zt(n,!0),e.setAttribute(`aria-expanded`,`true`),await c()};e.addEventListener(`click`,e=>{e.stopPropagation(),Xt(n)?l():u()}),on&&document.removeEventListener(`visibilitychange`,on),on=()=>{document.visibilityState===`visible`&&i()},document.addEventListener(`visibilitychange`,on),an&&document.removeEventListener(`click`,an),an=t=>{Xt(n)&&!n.contains(t.target)&&t.target!==e&&l()},document.addEventListener(`click`,an),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&Xt(n)&&(l(),e.focus())}),n.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-dismiss]`);if(t){e.preventDefault(),e.stopPropagation();let r=t.closest(`.m5t-notif-item`),a=t.dataset.dismiss,o=r?.dataset.read===`false`;r?.setAttribute(`data-leaving`,`true`);try{await fetch(`${Ut()}/m5t/v5/notifications/${encodeURIComponent(a)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:`DISMISSED`})})}catch{}setTimeout(()=>{r?.remove(),n.querySelector(`.m5t-notif-item`)||s()},180),o&&i();return}let r=e.target.closest(`.m5t-notif-clearall`);if(r){e.preventDefault(),r.disabled=!0,n.querySelectorAll(`.m5t-notif-item`).forEach(e=>e.setAttribute(`data-leaving`,`true`));try{await fetch(`${Ut()}/m5t/v5/notifications/dismiss-all`,{method:`PATCH`})}catch{}setTimeout(s,180),i();return}let a=e.target.closest(`.m5t-notif-item`);if(a&&a.dataset.read===`false`){let e=a.dataset.guid;a.dataset.read=`true`;try{await fetch(`${Ut()}/m5t/v5/notifications/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({read:!0})}),i()}catch{}return}let o=e.target.closest(`.m5t-notif-markall`);if(o){e.preventDefault(),n.querySelectorAll(`.m5t-notif-item`).forEach(e=>{e.dataset.read=`true`}),o.remove();try{await fetch(`${Ut()}/m5t/v5/notifications/read-all`,{method:`PATCH`})}catch{}i()}}),i(),clearInterval(rn),rn=setInterval(i,Kt)}function cn(){return g(`FF_SSE_UI_DARK_MODE`)}function ln(e=cn()){return e&&localStorage.getItem(v.FF_SSE_LS_THEME)===`dark`?`dark`:`light`}function un(e=g(`FF_SSE_UI_ANIMATIONS`)){return!e}function dn(e,t=cn()){!e||t||e.shadowRoot?.querySelector(`.footer-action[data-action="theme"]`)?.remove()}var fn=o((()=>{y()}));function pn(e){document.documentElement.setAttribute(`data-theme`,e)}function mn(){pn(ln())}function hn(){return document.documentElement.getAttribute(`data-theme`)===`dark`?`dark`:`light`}function gn(e,{quiet:t=!1}={}){if(!cn())return;let n=e===`dark`?`dark`:`light`;n!==hn()&&(pn(n),localStorage.setItem(v.FF_SSE_LS_THEME,n),t||vn.default.publish(p.UI_TOAST,{message:n===`dark`?`Dark mode on`:`Dark mode off`,type:`info`}),vn.default.publish(p.UI_THEME_CHANGED,{theme:n}))}function _n(){gn(hn()===`dark`?`light`:`dark`)}var vn,yn=o((()=>{vn=u(f(),1),m(),y(),fn()})),bn=c({default:()=>En,init:()=>wn,render:()=>Cn});function xn(){if(Tn)return;let e=document.createElement(`style`);e.id=`m5t-accept-invite-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Tn=!0}function Sn(){let e=new URLSearchParams(window.location.search||``),t=e.get(`uid`)||``,n=e.get(`token`)||``;if(!t||!n){let e=window.location.hash||``,r=e.includes(`?`)?e.slice(e.indexOf(`?`)+1):``,i=new URLSearchParams(r);if(t=t||i.get(`uid`)||``,n=n||i.get(`token`)||``,!t||!n){let r=e.replace(/^#\/?/,``).split(`?`)[0].split(`/`).filter(Boolean);t=t||r[1]||``,n=n||r[2]||``}}try{return{uid:decodeURIComponent(t),token:decodeURIComponent(n)}}catch{return{uid:t,token:n}}}function Cn(){return xn(),`
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
    </div>`}function wn(){let{uid:e,token:t}=Sn(),n=document.getElementById(`accept-invite-form`),r=document.getElementById(`ai-first`),i=document.getElementById(`ai-last`),a=document.getElementById(`ai-pass`),o=document.getElementById(`ai-confirm`),s=document.getElementById(`ai-submit`),c=document.getElementById(`ai-msg`);if(!n)return;let l=(e,t=`error`)=>{c.textContent=e,c.className=`accept-invite-msg ${t}`};if(!e||!t){l(`This invitation link is invalid or incomplete. Please use the link from your email.`),s.disabled=!0;return}n.addEventListener(`submit`,async n=>{n.preventDefault();let c=(r.value||``).trim(),u=(i.value||``).trim(),d=a.value||``,f=o.value||``;if(!c||!u){l(`Please enter your first and last name.`);return}if(d.length<8){l(`Password must be at least 8 characters.`);return}if(d!==f){l(`Passwords do not match.`);return}s.disabled=!0,l(`Setting up your account…`,`ok`);try{let n=E.getConfig?.().BASE_URL||``,r=await fetch(`${n}/m5t/v5/acctEntity/acceptInvite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({uid:e,token:t,password:d,first:c,last:u})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok){let e=r.status===410?`This invitation has expired. Ask for a new one.`:r.status===409?`This invitation has already been used. Try signing in.`:i.error||`Could not accept the invitation (HTTP ${r.status}).`;l(e),s.disabled=!1;return}try{window.history.replaceState({},``,window.location.pathname+window.location.hash)}catch{}l(`Welcome! Signing you in…`,`ok`),(await E.doSignin(i.entity.email,d))?.ok||(l(`Your account is ready. Please sign in.`,`ok`),setTimeout(()=>{window.location.hash=`#/signin`},1200))}catch(e){console.error(`[accept-invite] error:`,e),l(`Something went wrong. Please try again.`),s.disabled=!1}})}var Tn,En,Dn=o((()=>{D(),Tn=!1,En={render:Cn,init:wn}})),On,kn=o((()=>{On=``+new URL(`mfm-lockup-white.png`,import.meta.url).href})),An,jn=o((()=>{An=``+new URL(`mfm-lockup-black.png`,import.meta.url).href})),Mn,Nn=o((()=>{Mn=``+new URL(`mfm-lockup-color.png`,import.meta.url).href})),Pn,Fn=o((()=>{Pn=``+new URL(`m5mag-lockup.png`,import.meta.url).href}));function In(e=`#/splash`){return`
        <a class="auth-brand" href="${e}" aria-label="Mach Five Magnet">
          <img src="${Pn}" alt="Mach Five Magnet" height="42" />
        </a>`}function Ln(e=`panel`){let t=e===`light`;return`
    <a class="auth-cobrand${t?` auth-cobrand--light`:``}" href="${Rn}"
       target="_blank" rel="noopener" aria-label="From Mach Five Marketing">
      <span class="auth-cobrand__label">From</span>
      <img class="auth-cobrand__logo" src="${t?An:On}"
           alt="Mach Five Marketing" height="26" loading="lazy" />
    </a>`}var Rn,zn,Bn,Vn=o((()=>{kn(),jn(),Nn(),Fn(),Rn=`https://www.machfivemarketing.com`,zn=Pn,Bn=Mn}));function Hn(e){if(!e)return``;try{return new Date(e).toLocaleString([],{dateStyle:`medium`,timeStyle:`short`})}catch{return String(e)}}function Un(e,t={}){let n=t[e.id];if(e.type===`checkbox_group`){let e=Array.isArray(n)?n:[];return e.length?k(e.join(`, `)):``}return n?k(n):``}function Wn(e,{emptyLabel:t=`(blank)`,renderAnswer:n=null}={}){let r=e?.questionnaire?.sections||[],i=e?.answers||{};return r.length?r.map(e=>`
    <div class="qm-section">
      <h3>${k(e.title)}</h3>
      ${(e.questions||[]).map(e=>`
        <div class="qm-qa" data-question-id="${k(e.id)}" data-question-type="${k(e.type)}">
          <div class="qm-qa__q">${k(e.label)}</div>
          <div class="qm-qa__a">${n?n(e,i):Un(e,i)||`<span class="qm-qa__a--empty">${k(t)}</span>`}</div>
        </div>`).join(``)}
    </div>`).join(``):`<p class="qm-qa__a qm-qa__a--empty">This questionnaire has no questions.</p>`}function Gn(e,t={}){let n=t[e.id];if(e.type===`checkbox_group`){let t=Array.isArray(n)?n:[];return`<div class="qm-checkbox-group">${(Array.isArray(e.options)?e.options:[]).map(e=>`
      <label><input type="checkbox" value="${k(e)}" ${t.includes(e)?`checked`:``}/> ${k(e)}</label>`).join(``)}</div>`}return e.type===`textarea`?`<textarea>${k(n||``)}</textarea>`:`<input type="text" value="${k(n||``)}" />`}function Kn(e){let t={};return e&&e.querySelectorAll(`[data-question-id]`).forEach(e=>{let n=e.dataset.questionId;if(e.dataset.questionType===`checkbox_group`){let r=[...e.querySelectorAll(`input[type="checkbox"]:checked`)].map(e=>e.value);r.length&&(t[n]=r)}else{let r=(e.querySelector(`input,textarea`)?.value||``).trim();r&&(t[n]=r)}}),t}function qn(e){let t=e?.recipient_email?`<p class="qm-recipient">Sent to ${k(e.recipient_email)}</p>`:``,n=e?.last_edited_tz?`<p class="qm-edited-marker">Last edited by ${k(e.last_edited_by_email||`a team member`)} on ${k(Hn(e.last_edited_tz))}</p>`:``,r=e?.client_edited_tz?`<p class="qm-edited-marker">Updated by the client on ${k(Hn(e.client_edited_tz))}</p>`:``;return t+n+r}function Jn(){if(Xn)return;let e=document.createElement(`style`);e.id=`m5t-questionnaire-answer-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Xn=!0}var Yn,k,Xn,Zn=o((()=>{Yn={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},k=e=>String(e??``).replace(/[&<>"']/g,e=>Yn[e]),Xn=!1})),Qn,$n=o((()=>{Qn=``+new URL(`auth-hero-sketch.jpg`,import.meta.url).href})),er=c({default:()=>pr,init:()=>or,render:()=>ar});function tr(){if(fr)return;let e=document.createElement(`style`);e.id=`m5t-questionnaire-fill-styles`,e.textContent=`
    .qf-page {
      min-height: 100vh; padding: 32px 20px 64px; position: relative;
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
      background: url("${Qn}") center / cover no-repeat;
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
  `,document.head.appendChild(e),Jn(),fr=!0}function nr(){return E.getConfig?.().BASE_URL||``}function rr(e){let t=`qf-${e.id}`;if(e.type===`checkbox_group`){let n=Array.isArray(e.options)?e.options:[];return`
      <div class="qf-field" data-question-id="${e.id}" data-question-type="checkbox_group">
        <label>${A(e.label)}</label>
        ${e.help?`<p class="qf-help">${A(e.help)}</p>`:``}
        <div class="qf-checkbox-group">
          ${n.map((e,n)=>`
            <label class="qf-checkbox-row">
              <input type="checkbox" id="${t}-${n}" value="${A(e)}" />
              ${A(e)}
            </label>`).join(``)}
        </div>
      </div>`}return e.type===`textarea`?`
      <div class="qf-field" data-question-id="${e.id}" data-question-type="textarea">
        <label for="${t}">${A(e.label)}</label>
        ${e.help?`<p class="qf-help">${A(e.help)}</p>`:``}
        <textarea id="${t}"></textarea>
      </div>`:`
    <div class="qf-field" data-question-id="${e.id}" data-question-type="text">
      <label for="${t}">${A(e.label)}</label>
      ${e.help?`<p class="qf-help">${A(e.help)}</p>`:``}
      <input type="text" id="${t}" />
    </div>`}function A(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function ir(e,t,n){return`
    <div class="qf-page"><div class="qf-card"><div class="qf-state">
      <span class="material-symbols-outlined">${e}</span>
      <h1>${A(t)}</h1>
      <p class="qf-sub">${A(n)}</p>
    </div></div></div>`}function ar(){return tr(),`<div id="qf-root">${ir(`hourglass_top`,`Loading your questionnaire…`,`One moment.`)}</div>`}async function or(){let e=document.getElementById(`qf-root`);if(!e)return;let t=pe();if(!t){e.innerHTML=ir(`error`,`Invalid link`,`This link is missing required information. Please use the link exactly as sent.`);return}let n;try{let r=await fetch(`${nr()}/m5t/v5/m5mQuestionnaireResponse/public/${encodeURIComponent(t.guid)}?token=${encodeURIComponent(t.token)}`),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok){e.innerHTML=ir(`error`,`Cannot open this questionnaire`,r.status===404?i.error||`This link is invalid or has expired.`:`Something went wrong loading your questionnaire. Please try again shortly.`);return}n=i.data}catch(t){console.error(`[questionnaire-fill] load error:`,t),e.innerHTML=ir(`wifi_off`,`Connection problem`,`Could not reach the server. Please check your connection and try again.`);return}let r=sr(n);if(r===`locked`){lr(e,n);return}ur(e,n,t,r)}function sr(e){return e.status===`SUBMITTED`?(e.editability||{editable:!e.locked_tz}).editable?`edit`:`locked`:`fill`}function cr(e){let t=e.editability||{};return t.reason===`finalized`?`Your account manager has finalised these answers, so they can no longer be changed here.`:`Answers can be changed for 14 days after they are submitted.${t.deadline?` The window closed on ${Hn(t.deadline)}.`:``}`}function lr(e,t){e.innerHTML=`
    <div class="qf-page"><div class="qf-card">
      <img class="qf-brand" src="${Bn}" alt="Mach Five Marketing" height="34" />
      <h1>${A(t.questionnaire?.name||`Kickoff Questionnaire`)}</h1>
      <p class="qf-sub">${t.submitted_tz?`Submitted ${A(Hn(t.submitted_tz))}.`:`Submitted.`} Here is what you sent.</p>
      <div class="qf-note qf-note--locked">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        <span>${A(cr(t))} To change anything now, contact your account manager.</span>
      </div>
      ${qn(t)}
      ${Wn(t,{emptyLabel:`Left blank`})}
    </div></div>`}function ur(e,t,n,r){let i=r===`edit`,a=t.questionnaire?.sections||[],o=t.answers||{},s=t.editability?.deadline,c=i?`Change anything you need to, then save. Everything you sent before is already filled in.`:`Answer what applies. If a question doesn't apply to your business, leave it blank.`,l=i?`<div class="qf-note">
         <span class="material-symbols-outlined" aria-hidden="true">edit_note</span>
         <span>You already submitted this${t.submitted_tz?` on ${A(Hn(t.submitted_tz))}`:``}.${s?` You can make changes until <strong>${A(Hn(s))}</strong>.`:``}</span>
       </div>`:``;e.innerHTML=`
    <div class="qf-page"><div class="qf-card">
      <img class="qf-brand" src="${Bn}" alt="Mach Five Marketing" height="34" />
      <h1>${A(t.questionnaire?.name||`Kickoff Questionnaire`)}</h1>
      <p class="qf-sub">${A(c)}</p>
      ${l}
      <div class="qf-progress">
        <span class="qf-progress-label" id="qf-progress-label"></span>
        <div class="qf-dots" role="group" aria-label="Sections">
          ${a.map((e,t)=>`<button type="button" class="qf-dot" data-step="${t}" aria-label="${A(e.title)}"></button>`).join(``)}
        </div>
      </div>
      <form id="qf-form" novalidate>
        ${a.map((e,t)=>`
          <div class="qf-section" data-step="${t}" hidden>
            <h2>${A(e.title)}</h2>
            ${(e.questions||[]).map(rr).join(``)}
          </div>`).join(``)}
        <div class="qf-nav">
          <button class="qf-btn--ghost" type="button" id="qf-back"><span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>Back</button>
          <button class="qf-btn" type="button" id="qf-next">Next<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
          <button class="qf-btn" type="submit" id="qf-submit">${i?`Save changes`:`Submit questionnaire`}</button>
        </div>
        <p class="qf-msg" id="qf-msg" role="status"></p>
      </form>
    </div></div>`;let u=[...e.querySelectorAll(`.qf-section[data-step]`)],d=[...e.querySelectorAll(`.qf-dot`)],f=document.getElementById(`qf-back`),p=document.getElementById(`qf-next`),m=document.getElementById(`qf-submit`),h=document.getElementById(`qf-progress-label`),g=0;function _(t,n=1){g=Math.max(0,Math.min(a.length-1,t)),u.forEach((e,t)=>{e.hidden=t!==g,e.classList.remove(`qf-enter`)});let r=u[g];r&&(r.style.setProperty(`--qf-dx`,`${n>=0?14:-14}px`),r.offsetWidth,r.classList.add(`qf-enter`)),d.forEach((e,t)=>{t===g?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}),h&&(h.textContent=`Section ${g+1} of ${a.length}`),f.style.visibility=g===0?`hidden`:``,p.style.display=g===a.length-1?`none`:``,m.style.display=g===a.length-1?``:`none`,e.querySelector(`.qf-card`)?.scrollIntoView({block:`start`})}f.addEventListener(`click`,()=>_(g-1,-1)),p.addEventListener(`click`,()=>_(g+1,1)),d.forEach(e=>e.addEventListener(`click`,()=>{let t=Number(e.dataset.step)||0;_(t,t>=g?1:-1)})),_(0),e.querySelectorAll(`[data-question-id]`).forEach(e=>{let t=e.dataset.questionId,n=e.dataset.questionType,r=o[t];if(r!=null){if(n===`checkbox_group`){let t=Array.isArray(r)?r:[];e.querySelectorAll(`input[type="checkbox"]`).forEach(e=>{e.checked=t.includes(e.value)})}else{let t=e.querySelector(`input,textarea`);t&&(t.value=r)}}});let v=document.getElementById(`qf-form`),y=document.getElementById(`qf-submit`),ee=document.getElementById(`qf-msg`),b=(e,t=`error`)=>{ee.textContent=e,ee.className=`qf-msg ${t}`};v.addEventListener(`submit`,async t=>{t.preventDefault();let r=Kn(e),a=`${nr()}/m5t/v5/m5mQuestionnaireResponse/public/${encodeURIComponent(n.guid)}`,o=i?`${a}?token=${encodeURIComponent(n.token)}`:`${a}/submit?token=${encodeURIComponent(n.token)}`;y.disabled=!0,b(i?`Saving…`:`Submitting…`,`ok`);let s;try{s=await fetch(o,{method:i?`PUT`:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({answers:r})});let t=await s.json().catch(()=>({}));if(!s.ok||!t.ok){if(s.status===423){b(t.error||`These answers are now locked.`,`error`),await or();return}let e=s.status===409?i?`This questionnaire is not open for changes.`:`This questionnaire has already been submitted.`:s.status===404?`This link is invalid or has expired.`:t.error||`Could not ${i?`save`:`submit`} (HTTP ${s.status}).`;b(e),y.disabled=!1;return}dr(e,i,t.data?.editability?.deadline)}catch(e){console.error(`[questionnaire-fill] ${i?`edit`:`submit`} error:`,e),b(`Something went wrong. Please try again.`),y.disabled=!1}})}function dr(e,t,n){let r=n?` until ${Hn(n)}`:``;e.innerHTML=`
    <div class="qf-page"><div class="qf-card"><div class="qf-state">
      <span class="material-symbols-outlined">check_circle</span>
      <h1>${t?`Changes saved`:`Thank you!`}</h1>
      <p class="qf-sub">${t?`Your account manager will see the updated answers.`:`Your answers have been submitted. Your account manager will be in touch.`}</p>
      <div class="qf-note qf-note--done">
        <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
        <span>Need to change something? This same link keeps working${A(r)}. Keep the email we sent you and open it again any time before then.</span>
      </div>
      <button class="qf-btn" type="button" id="qf-again">Make another change</button>
    </div></div></div>`,document.getElementById(`qf-again`)?.addEventListener(`click`,()=>{or()})}var fr,pr,mr=o((()=>{D(),me(),Vn(),Zn(),$n(),fr=!1,pr={render:ar,init:or}})),hr=c({init:()=>_r,render:()=>gr});function gr(){return`
    <div class="auth-container splash">
      <div class="auth-left">
        <div class="splash-content">
          <h1 class="splash-mark"><img src="${zn}" alt="Mach Five Magnet" height="88" /></h1>
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
          ${Ln()}
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
  `}function _r(){console.log(`[SplashRoute] Initialized - checking authentication state in 3.6 seconds...`),setTimeout(()=>{let e=localStorage.getItem(v.FF_SSE_LS_TOKEN),t=localStorage.getItem(`mvv_ts`);console.log(`[SplashRoute] localStorage check:`,{hasMvvToken:!!e,hasMvvTs:!!t});let n=document.getElementById(`splash-loader`),r=document.getElementById(`splash-actions`);e?(console.log(`[SplashRoute] Auth token found → HOME`),vr.default.publish(p.ROUTE_NAV,{route:`home`})):t?(console.log(`[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN`),vr.default.publish(p.ROUTE_NAV,{route:`signin`})):(console.log(`[SplashRoute] New user (no session history) → Showing buttons`),n&&(n.style.display=`none`),r&&(r.style.display=`flex`),document.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-route`);console.log(`[SplashRoute] Button clicked - navigating to: ${t}`),vr.default.publish(p.ROUTE_NAV,{route:t})})}))},4e3)}var vr,yr=o((()=>{vr=u(f(),1),Vn(),m(),y()}));function j(e,t){typeof neodigmToast<`u`&&neodigmToast.q(t,`danger`),typeof neodigmUtils<`u`?neodigmUtils.shake(`#${e.id}`):(e.classList.add(`shake`),setTimeout(()=>e.classList.remove(`shake`),300)),e.focus()}function br(e,t){return e?xr.test(e)?!0:(j(t,O.get(`validation_email_invalid`)),!1):(j(t,O.get(`validation_email_required`)),!1)}var xr,Sr=o((()=>{Pt(),xr=/^[^\s@]+@[^\s@]+\.[^\s@]+$/})),Cr=c({init:()=>Tr,render:()=>wr});function wr(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${In()}
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
          ${Ln()}
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
  `}function Tr(){console.log(`[SigninRoute] Initialized`);let e=document.getElementById(`loginForm`),t=document.getElementById(`email`),n=document.getElementById(`password`),r=document.getElementById(`togglePassword`),i=document.getElementById(`rememberEmail`),a=localStorage.getItem(E.CONFIG.LS_KEYS.REMEMBERED_EMAIL);a&&t&&i&&(t.value=a,i.checked=!0,n?.focus()),r?.addEventListener(`click`,()=>{let e=n.type===`password`?`text`:`password`;n.type=e});let o=document.getElementById(`passkeySigninBtn`),s=document.getElementById(`passkeyDivider`),c=document.getElementById(`passkeyHint`);window.PublicKeyCredential&&o&&s&&(o.style.display=``,s.style.display=``,c&&(o.title=c.textContent),o.addEventListener(`click`,()=>Or())),e?.addEventListener(`submit`,async e=>{e.preventDefault();let r=t.value.trim(),a=n.value;br(r,t)&&Er(a,n)&&(i?.checked?localStorage.setItem(E.CONFIG.LS_KEYS.REMEMBERED_EMAIL,r):localStorage.removeItem(E.CONFIG.LS_KEYS.REMEMBERED_EMAIL),await Dr(r,a))}),document.getElementById(`link--uc__underline`)?.addEventListener(`click`,e=>{e.preventDefault(),kr.default.publish(p.AUTH_FORGOT)}),document.querySelector(`.auth-switch a[href="#/signup"]`)?.addEventListener(`click`,e=>{e.preventDefault(),console.log(`[SigninRoute] Sign up link clicked - navigating to signup`),kr.default.publish(p.ROUTE_NAV,{route:`signup`})})}function Er(e,t){return e?e.length<10?(j(t,O.get(`validation_password_min_length`)),!1):!0:(j(t,O.get(`validation_password_required`)),!1)}async function Dr(e,t){let n=document.querySelector(`.btn`);n.disabled=!0,n.textContent=O.get(`loading_signing_in`);try{let r=await E.doSignin(e,t);r.ok?(console.log(`[SigninRoute] Signin successful`),typeof neodigmToast<`u`&&neodigmToast.q(O.get(`success_welcome_back`),`success`),kr.default.publish(p.AUTH_SIGNIN_SUCCESS,{entity:E.getEntity()})):r.resetRequired?(console.log(`[SigninRoute] Password reset required`),typeof neodigmToast<`u`&&neodigmToast.q(O.get(`error_password_reset_required`),`warning`)):(typeof neodigmToast<`u`&&neodigmToast.q(r.error||O.get(`error_signin_failed`),`danger`),n.disabled=!1,n.textContent=(O.get(`sign_in`)||`Sign in`).toUpperCase())}catch(e){console.error(`[SigninRoute] Sign in error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||O.get(`error_network`),`danger`),n.disabled=!1,n.textContent=(O.get(`sign_in`)||`Sign in`).toUpperCase(),kr.default.publish(p.AUTH_SIGNIN_FAIL,{message:e.message})}}async function Or(){let e=document.getElementById(`passkeySigninBtn`);e.disabled=!0;try{let e=await E.doPasskeySignin();e.ok?(console.log(`[SigninRoute] Passkey signin successful`),typeof neodigmToast<`u`&&neodigmToast.q(O.get(`success_welcome_back`),`success`),kr.default.publish(p.AUTH_SIGNIN_SUCCESS,{entity:E.getEntity()})):document.getElementById(`passkeyHint`)?.style.removeProperty(`display`),!e.ok&&!e.canceled&&typeof neodigmToast<`u`&&neodigmToast.q(e.error||O.get(`error_signin_failed`),`danger`)}catch(e){console.error(`[SigninRoute] Passkey signin error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||O.get(`error_network`),`danger`)}finally{e.disabled=!1}}var kr,Ar=o((()=>{kr=u(f(),1),Vn(),m(),D(),Pt(),Sr()}));function jr(e){let t=[];return e.length<12&&t.push(`at least 12 characters`),e.length>1024&&t.push(`at most 1024 characters`),/[a-z]/.test(e)||t.push(`1 lowercase`),/[A-Z]/.test(e)||t.push(`1 uppercase`),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)||t.push(`1 special character`),/[^\x00-\x7F]/.test(e)&&t.push(`ASCII characters only`),t}function Mr(e){if(e.length===0)return``;if(e.includes(`ASCII characters only`))return`Password cannot contain emoji|or special unicode characters`;let t=e.find(e=>/^at (?:least|most) \d+ characters$/.test(e));return t?`Password must have ${t.replace(/ (\d+ characters)$/,`|$1`)}`:`Password must have: Uppercase,|Lowercase, and Special Character`}var Nr=o((()=>{})),Pr=c({init:()=>Ir,render:()=>Fr});function Fr(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${In()}
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
          ${Ln()}
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
  `}function Ir(){console.log(`[SignupRoute] Initialized`);let e=document.getElementById(`signupForm`),t=e.querySelector(`button[type="submit"]`);Lr(`togglePassword`,`password`,`eyeIcon`),Lr(`toggleConfirmPassword`,`confirmPassword`,`eyeIconConfirm`),document.querySelector(`.auth-switch a[href="#/signin"]`)?.addEventListener(`click`,e=>{e.preventDefault(),console.log(`[SignupRoute] Sign in link clicked - navigating to signin`),Vr.default.publish(p.ROUTE_NAV,{route:`signin`})}),e.addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`first`).value.trim(),r=document.getElementById(`last`).value.trim(),i=document.getElementById(`email`).value.trim(),a=document.getElementById(`company`).value.trim(),o=document.getElementById(`phone`).value.trim(),s=document.getElementById(`password`).value,c=document.getElementById(`confirmPassword`).value,l=document.getElementById(`first`),u=document.getElementById(`last`),d=document.getElementById(`email`),f=document.getElementById(`password`),p=document.getElementById(`confirmPassword`);if(!Rr(n,l,O.get(`validation_first_name_required`))||!Rr(r,u,O.get(`validation_last_name_required`))||!br(i,d)||!zr(s,f))return;if(s!==c){j(p,O.get(`validation_password_mismatch`));return}let m=document.getElementById(`acceptTerms`);if(!m.checked){j(m,`Please accept the Terms of Service and Privacy Policy to continue.`);return}t.disabled=!0,t.textContent=O.get(`loading_creating_account`),await Br(n,r,i,a,o,s)})}function Lr(e,t,n){let r=document.getElementById(e),i=document.getElementById(t),a=document.getElementById(n);!r||!i||!a||r.addEventListener(`click`,()=>{let e=i.type===`password`;i.type=e?`text`:`password`,e?a.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:a.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}function Rr(e,t,n){return e?!0:(j(t,n),!1)}function zr(e,t){if(!e)return j(t,O.get(`validation_password_required`)),!1;let n=jr(e);return n.length>0?(j(t,Mr(n)),!1):!0}async function Br(e,t,n,r,i,a){let o=document.querySelector(`button[type="submit"]`);try{let s={email:n,password:a,first:e,last:t};r&&(s.company=r),i&&(s.phone=i),s.terms_accepted=!0,s.legal_version=Hr;let c=await E.doSignup(s);if(c.ok)Vr.default.publish(p.AUTH_SIGNUP_SUCCESS,{email:n}),typeof mvvLegit<`u`&&mvvLegit.doUNVERF();else{let e=c.error||c.message||O.get(`error_signup_failed`);typeof neodigmToast<`u`&&neodigmToast.q(e,`danger`),o.disabled=!1,o.textContent=(O.get(`create_account`)||`Create account`).toUpperCase(),Vr.default.publish(p.AUTH_SIGNUP_FAIL,{message:e})}}catch(e){console.error(`[SignupRoute] Sign up error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||O.get(`error_network`),`danger`),o.disabled=!1,o.textContent=(O.get(`create_account`)||`Create account`).toUpperCase(),Vr.default.publish(p.AUTH_SIGNUP_FAIL,{message:e.message})}}var Vr,Hr,Ur=o((()=>{Vr=u(f(),1),Vn(),m(),D(),Nr(),Pt(),Sr(),Hr=`2026-07-15`})),Wr=c({init:()=>Kr,render:()=>Gr});function Gr(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${In()}
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
          ${Ln()}
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
  `}function Kr(){console.log(`[VerfLinkRoute] Initialized`);let e=Date.now(),t=document.getElementById(`countdown-display`);function n(){let n=Date.now()-e,i=Math.floor(n/1e3),a=Math.max(0,7200-i),o=Math.floor(a/3600),s=Math.floor(a%3600/60),c=a%60,l=`${String(o).padStart(2,`0`)}:${String(s).padStart(2,`0`)}:${String(c).padStart(2,`0`)}`;t&&(t.textContent=l,a<600&&(t.style.color=`#ef4444`,t.style.textShadow=`
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `),a===0&&(t.style.color=`#7f1d1d`,t.style.textShadow=`none`)),a===0&&(clearInterval(r),console.log(`[VerfLinkRoute] Countdown expired`),window.neodigmWired4Sound&&window.neodigmWired4Sound.sound(14),setTimeout(()=>{window.router&&window.router.navigate(`/splash`)},600))}n();let r=setInterval(n,1e3);window.addEventListener(`beforeunload`,()=>{clearInterval(r)})}var qr=o((()=>{Vn()})),Jr,Yr,Xr,Zr,Qr=o((()=>{Jr=u(f(),1),m(),Yr=`https://machfivemagnet-saas.onrender.com`,Xr=class{constructor(){this.baseUrl=Yr}async request(e,t={}){let n=`${this.baseUrl}${e}`,r={"Content-Type":`application/json`,...t.headers};try{let i=await fetch(n,{...t,headers:r});if(i.status===401||i.status===403){Jr.default.publish(p.AUTH_TOKEN_EXPIRED,{status:i.status,endpoint:e});let t=await i.json().catch(()=>({}));throw Error(t.error||`Authentication failed`)}let a=await i.json();return{ok:i.ok,status:i.status,data:a}}catch(t){throw console.error(`API Request Error:`,t),Jr.default.publish(p.APP_ERROR,{message:t.message,endpoint:e}),t}}async get(e){return this.request(e,{method:`GET`})}async post(e,t){return this.request(e,{method:`POST`,body:JSON.stringify(t)})}async put(e,t){return this.request(e,{method:`PUT`,body:JSON.stringify(t)})}async delete(e){return this.request(e,{method:`DELETE`})}async signin(e,t){return this.post(`/api/acctEntity/signin`,{email:e,hash:t})}async signup(e){return this.post(`/api/acctEntity/signup`,e)}async signout(){return this.post(`/api/acctEntity/signout`,{})}async forgotPassword(e){return this.get(`/m5t/v5/acctEntity/forgot?CODE=${encodeURIComponent(e)}`)}async resetHash(e,t){return this.post(`/api/acctEntity/resethash`,{email:e,hash:t})}async verifyAccount(e){return this.get(`/api/acctEntity/verify?CODE=${e}`)}async getAccounts(){return this.get(`/api/acctEntity`)}async getAccount(e){return this.get(`/api/acctEntity/${e}`)}async updateAccount(e,t){return this.put(`/api/acctEntity/${e}`,t)}async deleteAccount(e){return this.delete(`/api/acctEntity/${e}`)}async ping(){return this.get(`/ping`)}},Zr=new Xr})),$r=c({init:()=>ti,render:()=>ei});function ei(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${In(`#/signin`)}
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
          ${Ln()}
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

  `}function ti(){console.log(`[ForgotRoute] Initialized`);let e=document.getElementById(`forgot-form`),t=document.getElementById(`email`);e?.addEventListener(`submit`,async e=>{e.preventDefault();let n=t.value.trim();br(n,t)&&await ni(n)})}async function ni(e){let t=document.querySelector(`.btn`);t.disabled=!0,t.textContent=`SENDING...`;try{let n=await Zr.forgotPassword(e);n.ok&&n.data.ok?(typeof neodigmToast<`u`&&neodigmToast.q(O.get(`success_reset_link_sent`),`success`),ri.default.publish(p.AUTH_FORGOT_SUCCESS,{email:e}),setTimeout(()=>{window.router&&window.router.navigate(`/verf-link`)},2e3)):(typeof neodigmToast<`u`&&neodigmToast.q(n.data.error||O.get(`error_signin_failed`),`danger`),t.disabled=!1,t.textContent=(O.get(`send_reset_link`)||`Send reset link`).toUpperCase())}catch(e){console.error(`[ForgotRoute] Forgot password error:`,e),typeof neodigmToast<`u`&&neodigmToast.q(e.message||O.get(`error_network`),`danger`),t.disabled=!1,t.textContent=(O.get(`send_reset_link`)||`Send reset link`).toUpperCase()}}var ri,ii=o((()=>{ri=u(f(),1),Vn(),m(),Qr(),Pt(),Sr()})),ai=c({init:()=>si,render:()=>oi});function oi(){let e=E.getEntity()?.email||``;return`
    <div class="auth-container">
      <div class="auth-left">
        ${In(`#/home`)}
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
          ${Ln()}
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
  `}function si(){console.log(`[ResethashRoute] Initialized`);let e=document.getElementById(`resethash-form`),t=e.querySelector(`button[type="submit"]`);ci(`toggleNewPassword`,`new-password`,`eyeIconNew`),ci(`toggleConfirmPassword`,`confirm-password`,`eyeIconConfirm`),e?.addEventListener(`submit`,async n=>{n.preventDefault();let r=e.email.value.trim(),i=e.newPassword.value,a=e.confirmPassword.value,o=document.getElementById(`new-password`),s=document.getElementById(`confirm-password`);if(!i){j(o,O.get(`validation_new_password_required`));return}let c=jr(i);if(c.length>0){j(o,Mr(c));return}if(!a){j(s,O.get(`validation_new_password_required`));return}if(i!==a){j(s,O.get(`validation_password_mismatch`));return}t.disabled=!0,t.textContent=O.get(`loading_resetting_password`);try{let e=await E.doResetHash(r,i);e.ok?(typeof neodigmToast<`u`&&neodigmToast.q(O.get(`success_password_reset`),`success`),li.default.publish(p.AUTH_RESETHASH_SUCCESS,{email:r})):(j(o,e.error||O.get(`error_signin_failed`)),t.disabled=!1,t.textContent=(O.get(`update_password`)||`Update password`).toUpperCase())}catch(e){console.error(`[ResethashRoute] Reset password error:`,e),j(o,e.message||O.get(`error_network`)),t.disabled=!1,t.textContent=(O.get(`update_password`)||`Update password`).toUpperCase()}})}function ci(e,t,n){let r=document.getElementById(e),i=document.getElementById(t),a=document.getElementById(n);!r||!i||!a||r.addEventListener(`click`,()=>{let e=i.type===`password`;i.type=e?`text`:`password`,e?a.innerHTML=`
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `:a.innerHTML=`
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `})}var li,ui=o((()=>{li=u(f(),1),Vn(),m(),D(),Nr(),Pt(),Sr()}));function di({total:e,shown:t,id:n=``,noun:r=``,step:i=15}={}){let a=Math.max(0,(e||0)-(t||0));if(a<=0)return``;let o=Math.min(i,a),s=r?` ${pi(r)}`:``;return`<button type="button" class="m5t-list-more"${n?` id="${pi(n)}"`:``} data-action="list-expand" data-remaining="${a}" aria-label="Show ${o} more${s}, ${a} remaining">Show ${o} more${s} <span class="m5t-list-more__rest">(${a} remaining)</span></button>`}function fi(e,{rowSelector:t,cap:n=15,step:r=15,noun:i=``,controlHost:a}={}){if(!e||!t)return 0;e.querySelectorAll(`:scope > .m5t-list-more, .m5t-list-more`).forEach(e=>e.remove());let o=[...e.querySelectorAll(t)];if(o.forEach(e=>e.removeAttribute(`hidden`)),o.length<=n)return 0;let s=n,c=a||e,l=()=>{o.forEach((e,t)=>{t<s?e.removeAttribute(`hidden`):e.setAttribute(`hidden`,``)}),c.querySelectorAll(`.m5t-list-more`).forEach(e=>e.remove());let e=di({total:o.length,shown:s,noun:i,step:r});e&&(c.insertAdjacentHTML(`beforeend`,e),c.querySelector(`.m5t-list-more`)?.addEventListener(`click`,()=>{s+=r,l()}))};return l(),o.length-n}function pi(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var mi=o((()=>{}));function hi(){if(Ti)return;let e=document.createElement(`style`);e.id=`m5t-portfolio-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Ti=!0}async function gi(e,{days:t=30}={}){let n=new Date,r=Ei(new Date(n.getTime()-(t-1)*864e5)),i=Ei(n),a=await fetch(`${e}/m5t/v5/dashboard/stats?from=${r}&to=${i}&group_by=owner`);if(!a.ok)throw Error(`HTTP ${a.status}`);let o=await a.json();if(!o.ok)throw Error(`stats not ok`);return o.by_owner||[]}function _i(e,t){let n=e;return`<div class="dash-clients-scroll"><table class="dash-clients">
    <thead><tr>
      <th>Client</th>${t.map(e=>`<th>${e.h}</th>`).join(``)}<th></th>
    </tr></thead>
    <tbody>${n.map(e=>`
      <tr data-org="${Ci(e.owner_guid)}" tabindex="0" role="button"
          aria-label="Open ${Ci(e.name||`client`)}">
        <td><span class="dc-name">${Ci(e.name||e.owner_guid)}
          <span class="dc-chip">${Ci(wi[e.channel]||e.channel||``)}</span></span></td>
        ${t.map(t=>`<td>${t.td(e)}</td>`).join(``)}
        <td><span class="dc-view">View →</span></td>
      </tr>`).join(``)}</tbody>
  </table></div>`}function vi(e){let t=e.querySelector(`.pf-access-error`);t||(t=document.createElement(`div`),t.className=`pf-access-error`,e.prepend(t)),t.textContent=`You don't have direct access to manage this org. Use the admin console to act on its behalf.`}function yi(e){if(!e)return;fi(e.querySelector(`.dash-clients tbody`)||e,{rowSelector:`tr[data-org]`,noun:`clients`,controlHost:e.querySelector(`.dash-clients-scroll`)||e});let t=async t=>{let n=t?.dataset?.org;n&&(await E.setActiveOrg(n))?.activeOrgError&&vi(e)};e.querySelectorAll(`tbody tr[data-org]`).forEach(e=>{e.addEventListener(`click`,()=>t(e)),e.addEventListener(`keydown`,n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),t(e))})})}function bi({section:e,title:t,description:n}){return hi(),`
    <div class="page-shell" data-section="${Ci(e)}">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${Ci(t)}</h1>
          <p class="page-description">${Ci(n)}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
        </div>
        <div class="card-body" id="pf-picker-body">${Di(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function xi(e,t,{emptyMsg:n}={}){let r=document.getElementById(`pf-picker-body`);if(r)try{let i=await gi(e);if(!i.length){r.innerHTML=Di(`groups`,n||`No client orgs yet. Create one under Clients first.`);return}r.innerHTML=_i(i,t),yi(r)}catch(e){console.warn(`[portfolio] picker load failed:`,e),r.innerHTML=Di(`error`,`Could not load your clients. Please refresh.`)}}function Si(){let e={};return E.getManagedClients().forEach(t=>{e[t.orgGuid]=t.name}),E.getMemberships().forEach(t=>{t.orgGuid&&!e[t.orgGuid]&&(e[t.orgGuid]=t.name||``)}),e}var M,Ci,wi,Ti,Ei,Di,Oi,ki=o((()=>{D(),mi(),M=()=>E.getManagedClients().length>0&&!E.getStoredActiveOrg(),Ci=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),wi={reseller_org:`Your org`,managed_client:`Client`,saas_org:`Org`},Ti=!1,Ei=e=>e.toISOString().slice(0,10),Di=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Oi=e=>e?`<span class="pf-client-chip">${Ci(e)}</span>`:``}));function Ai(e,t){Pi.set(e,t)}function ji(e){if(!Pi.has(e))return null;let t=Pi.get(e);return Pi.delete(e),t}function Mi(e){return Pi.has(e)?Pi.get(e):null}var Ni,Pi,Fi=o((()=>{Ni=Object.freeze({MAGNET_TEMPLATE:`magnet_template`,LEADS_SEARCH:`leads_search`,LEADS_DAY:`leads_day`}),Pi=new Map}));function Ii({icon:e,label:t,valueId:n,value:r=`—`,subId:i,sub:a=``,href:o,trendId:s}={}){let c=o?`a`:`div`;return`
  <${c}${o?` href="${Ri(o)}" class="stat-card stat-card--link"`:` class="stat-card"`}>
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${Ri(e)}</span>
      <span class="stat-label">${Ri(t)}</span>
      ${o?`<span class="stat-go material-symbols-outlined" aria-hidden="true">north_east</span>`:``}
    </div>
    <div class="stat-value"${n?` id="${Ri(n)}"`:``}>${r}</div>
    <div class="stat-change">${s?`<span class="stat-trend" id="${Ri(s)}"></span>`:``}<span class="stat-sublabel"${i?` id="${Ri(i)}"`:``}>${a}</span></div>
  </${c}>`}var Li,Ri,zi=o((()=>{Li={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Ri=e=>String(e??``).replace(/[&<>"']/g,e=>Li[e])})),Bi=c({default:()=>da,init:()=>Ki,render:()=>Gi,statCard:()=>Ii,svgTrendChart:()=>Qi,wireTrendTooltip:()=>$i});function Vi(e){let t=e.created?.created_tz;if(!t)return``;try{return new Date(t).toLocaleDateString([],{month:`short`,day:`numeric`})}catch{return``}}function Hi(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function Ui(){if(ra)return;let e=document.createElement(`style`);e.id=`m5t-dash-recent-styles`,e.textContent=`
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

    .page-shell .dash-chart { width:100%; height:auto; display:block; }
    .page-shell text.dash-ax { font-size:11px; fill:var(--color-text-subtle,#6C7C9A); }
    .page-shell .dash-legend { display:flex; gap:16px; margin:0 0 8px; font-size:0.8rem; font-weight:600; color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-legend i { display:inline-block; width:11px; height:11px; border-radius:3px; margin-right:5px; vertical-align:middle; }
    .page-shell .dash-chart-wrap { position:relative; }
    .page-shell .dash-hit { cursor:pointer; fill:transparent; transition:fill .12s ease; }
    /* A day with no leads has nowhere to drill to, so it must not offer to. */
    .page-shell .dash-hit[data-leads="0"] { cursor:default; }
    .page-shell .dash-chart-tip__go { margin-top:5px; padding-top:5px; border-top:1px solid rgba(255,255,255,0.18); font-weight:700; color:var(--chart-tip-link,#7BB7FF); }
    [data-theme="dark"] .page-shell .dash-chart-tip { border:1px solid var(--color-border-strong,#3D6A8F); }

    /* Hover emphasis. The bars sit at 0.85 opacity at rest so the active one can go
       to full without changing colour — a brightness shift reads as "this one" more
       cleanly than a hue change, and keeps the legend swatch honest. */
    .page-shell .dash-bar { fill:var(--chart-1,#0072BA); opacity:0.85; transition:opacity .12s ease; }
    .page-shell .dash-bar--on { opacity:1; }
    .page-shell .dash-dot { fill:var(--chart-2,#009473); transition:r .12s ease, stroke-width .12s ease; }
    .page-shell .dash-line { stroke:var(--chart-2,#009473); }
    .page-shell line.dash-grid { stroke:var(--chart-grid,#EAF0F7); }
    .page-shell .dash-sw--1 { background:var(--chart-1,#0072BA); }
    .page-shell .dash-sw--2 { background:var(--chart-2,#009473); }
    /* White ring lifts the active dot off the trend line it sits on. */
    .page-shell .dash-dot--on { r:5.2; stroke:var(--color-bg,#fff); stroke-width:2; }
    .page-shell .dash-hit--on { fill:color-mix(in srgb, var(--chart-1,#0072BA) 6%, transparent); }
    .page-shell .dash-crosshair { stroke:var(--color-text-subtle,#6C7C9A); stroke-width:1; stroke-dasharray:3 3; opacity:0; transition:opacity .12s ease; }
    .page-shell .dash-crosshair--on { opacity:0.55; }
    html.ff-no-animations .page-shell .dash-bar,
    html.ff-no-animations .page-shell .dash-dot,
    html.ff-no-animations .page-shell .dash-hit,
    html.ff-no-animations .page-shell .dash-crosshair { transition:none; }
    @media (prefers-reduced-motion: reduce) {
      .page-shell .dash-bar, .page-shell .dash-dot,
      .page-shell .dash-hit, .page-shell .dash-crosshair { transition:none; }
    }
    .page-shell .dash-chart-tip { position:absolute; transform:translate(-50%,-100%) translateY(-8px); pointer-events:none; z-index:5; background:var(--chart-tip-bg,#0B1220); color:var(--chart-tip-text,#F2F7FB); padding:8px 10px; border-radius:8px; font-size:0.78rem; line-height:1.5; white-space:nowrap; box-shadow:var(--shadow-md,0 8px 24px rgba(11,18,32,0.18)); }
    .page-shell .dash-chart-tip[hidden] { display:none; }
    .page-shell .dash-chart-tip__date { font-weight:700; margin-bottom:3px; }
    .page-shell .dash-chart-tip__row { display:flex; align-items:center; gap:6px; }
    .page-shell .dash-chart-tip__row i { display:inline-block; width:8px; height:8px; border-radius:2px; flex:0 0 auto; }

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

  `,document.head.appendChild(e),ra=!0}function Wi(e){return`<a class="recent-lead" href="#/leads">
    <span class="recent-lead__ava">${N(na(e))}</span>
    <span class="recent-lead__main">
      <span class="recent-lead__name">${N(ta(e))}</span>
      <span class="recent-lead__sub">${N(e.email||e.phone||``)}</span>
    </span>
    <span class="m5t-badge recent-lead__badge" data-s="${N(e.status)}">${N(e.status)}</span>
    <span class="recent-lead__time">${N(Vi(e))}</span>
  </a>`}function Gi(){Ui(),hi();let e=M();return`
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
        <div class="card-body" id="dash-portfolio">${ea(`hourglass_empty`,`Loading…`)}</div>
      </div>`:``}

      <div class="stats-grid">
        ${Ii({icon:`widgets`,label:`Active Magnets`,valueId:`stat-active-magnets`,subId:`stat-active-magnets-sub`,sub:`Loading…`,href:`#/magnets`})}
        ${Ii({icon:`ads_click`,label:`Magnet Opens`,valueId:`stat-opens`,subId:`stat-opens-sub`,sub:`Loading…`,href:`#/analytics`})}
        ${Ii({icon:`person_add`,label:`Leads Captured`,valueId:`stat-leads`,subId:`stat-leads-sub`,sub:`Loading…`,href:`#/leads`,trendId:`stat-leads-trend`})}
        ${Ii({icon:`check_circle`,label:`Completion Rate`,valueId:`stat-completion`,subId:`stat-completion-sub`,sub:`Loading…`,href:`#/analytics`})}
      </div>

      <div class="charts-section">
        ${ia(`show_chart`,`Opens & Leads`,`dash-trend`,{wide:!0,controls:!0})}
        <div class="charts-grid">
          ${ia(`filter_alt`,`Completion Funnel`,`dash-funnel`)}
          ${ia(`source`,`Top Campaigns`,`dash-campaigns`)}
          ${ia(`touch_app`,`CTA Usage`,`dash-routes`,{full:!0})}
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
            ${ea(`sensors`,`Loading…`)}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/leads">View all →</a>
          </div>
          <div class="card-body" id="recent-leads-body">
            ${ea(`hourglass_empty`,`Loading leads…`)}
          </div>
        </div>
      </div>
    </div>`}async function Ki(){let e=E.getConfig?.().BASE_URL||``;document.getElementById(`dash-periods`)?.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-days]`);n&&(aa=Number(n.dataset.days)||30,document.querySelectorAll(`#dash-periods .chart-period-btn`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.days)===aa)),qi(e))}),document.getElementById(`dash-campaigns`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-campaign]`);t&&Ai(Ni.LEADS_SEARCH,t.dataset.campaign)}),await Promise.all([qi(e),Xi(e)])}async function qi(e){let t=new Date,n=ca(new Date(t.getTime()-(aa-1)*864e5)),r=ca(t),i=M(),a;try{let t=await fetch(`${e}/m5t/v5/dashboard/stats?from=${n}&to=${r}${i?`&group_by=owner`:``}`);if(!t.ok)throw Error(`HTTP ${t.status}`);if(a=await t.json(),!a.ok)throw Error(`stats not ok`)}catch(e){console.warn(`[dashboard] stats fetch failed:`,e),[`stat-active-magnets`,`stat-opens`,`stat-leads`,`stat-completion`].forEach(e=>oa(e,`—`)),[`stat-active-magnets-sub`,`stat-opens-sub`,`stat-leads-sub`,`stat-completion-sub`].forEach(e=>oa(e,`Unavailable`));let t=document.getElementById(`stat-leads-trend`);t&&(t.className=`stat-trend`,t.innerHTML=``),[`dash-trend`,`dash-funnel`,`dash-campaigns`,`dash-routes`,`dash-interactions`,`dash-portfolio`].forEach(e=>sa(e,ea(`error`,`Could not load. Please refresh.`)));return}i&&Ji(a.by_owner||[]),oa(`stat-active-magnets`,P(a.magnets.active)),oa(`stat-active-magnets-sub`,a.magnets.total>a.magnets.active?`${P(a.magnets.total-a.magnets.active)} paused`:a.magnets.active?`All running`:`No magnets yet`);let o=a.funnel||{};oa(`stat-opens`,o.opens?P(o.opens):`—`),oa(`stat-opens-sub`,o.opens?o.engagement_rate==null?`${P(o.engaged)} engaged`:`${o.engagement_rate}% engage`:`No opens in this range yet`);let s=a.leads||{};oa(`stat-leads`,P(s.total));let c=(s.this_week||0)-(s.prev_week||0);oa(`stat-leads-sub`,s.total?`${P(s.this_week)} this week`:`No leads yet`);let l=document.getElementById(`stat-leads-trend`);if(l){if((s.prev_week||0)>0){let e=c>0?`positive`:c<0?`negative`:`neutral`,t=c>0?`trending_up`:c<0?`trending_down`:`trending_flat`;l.className=`stat-trend ${e}`,l.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">${t}</span>${c>0?`+`:``}${P(c)}`}else l.className=`stat-trend`,l.innerHTML=``}oa(`stat-completion`,o.completion_rate==null?`—`:`${o.completion_rate}%`),oa(`stat-completion-sub`,o.opens?`${P(o.completions)} completed of ${P(o.opens)} opens`:`Appears once magnets get opened`);let u=a.by_day||[],d=u.some(e=>e.opens||e.leads);sa(`dash-trend`,d?Qi(u):ea(`show_chart`,`No activity in this range yet. Opens and leads chart here as visitors engage your magnets.`)),d&&$i(u),sa(`dash-funnel`,o.opens?Yi(o):ea(`filter_alt`,`The funnel fills in once your magnets record opens.`));let f=a.top_campaigns||[];sa(`dash-campaigns`,f.length?`<div class="dash-list">${f.map(e=>`
        <a class="dash-list__row dash-list__row--link" href="#/leads" data-campaign="${N(e.campaign)}" title="Show the leads from ${N(e.campaign)}">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">campaign</span></span>
          <span class="dash-list__main">${N(e.campaign)}</span>
          <span class="dash-list__num">${P(e.leads)}</span>
          <span class="dash-list__go material-symbols-outlined" aria-hidden="true">chevron_right</span>
        </a>`).join(``)}</div>`:ea(`source`,`No tagged campaigns yet. Leads arriving with ?utm_campaign=… rank here.`));let p={book:[`event`,`Book`],chat:[`chat`,`Chat`],call:[`phone_in_talk`,`Call`],email:[`mail`,`Email`],support:[`support_agent`,`Support`]},m=Object.entries(o.routes||{}).sort((e,t)=>t[1]-e[1]),h=m.length?m[0][1]:0;sa(`dash-routes`,m.length?`<div class="dash-funnel">${m.map(([e,t])=>{let[n,r]=p[e]||[`touch_app`,e];return`<div class="dash-funnel__row">
          <div class="dash-funnel__meta"><span class="dash-funnel__label"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px">${n}</span> ${N(r)}</span><span class="dash-funnel__val">${P(t)}</span></div>
          <div class="dash-funnel__track"><div class="dash-funnel__bar" style="width:${h?Math.max(4,Math.round(t/h*100)):0}%"></div></div>
        </div>`}).join(``)}</div>`:ea(`touch_app`,`CTA taps (Book, Chat, Call, Support) rank here once visitors use the action bar.`));let g={open:[`visibility`,`Magnet opened`],engage:[`touch_app`,`Visitor engaged`],route:[`alt_route`,`Picked a channel`],complete:[`check_circle`,`Completed: lead captured`]},_=a.recent_events||[];sa(`dash-interactions`,_.length?`<div class="dash-list">${_.map(e=>{let[t,n]=g[e.event]||[`sensors`,e.event];return`<div class="dash-list__row">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">${t}</span></span>
          <span class="dash-list__main">${n}${e.event===`route`&&e.detail?` · ${N(e.detail)}`:``}</span>
          ${e.display_mode?`<span class="dash-list__mode">${N(e.display_mode)}</span>`:``}
          <span class="dash-list__time">${N(Hi(e.at))}</span>
        </div>`}).join(``)}</div>`:ea(`sensors`,`No interactions yet. They'll stream in as visitors engage your magnets.`))}function Ji(e){let t=document.getElementById(`dash-portfolio`);if(!t)return;if(!e.length){t.innerHTML=ea(`groups`,`No client orgs yet. Create one under Clients to see its numbers here.`);return}let n=e.some(e=>e.ad),r=e=>{let t=(e.leads.this_week||0)-(e.leads.prev_week||0);return!e.leads.this_week&&!e.leads.prev_week?``:` <span class="${t>=0?`dc-delta-up`:`dc-delta-down`}">(${t>=0?`+`:``}${P(t)})</span>`};t.innerHTML=_i(e,[{h:`Magnets`,td:e=>`${P(e.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${P(e.magnets.total)}</span>`},{h:`Leads · wk`,td:e=>`${P(e.leads.this_week)}${r(e)}`},{h:`Leads · total`,td:e=>P(e.leads.total)},{h:`Opens`,td:e=>P(e.opens)},{h:`Compl.`,td:e=>e.completion_rate==null?`—`:`${e.completion_rate}%`},...e.some(e=>e.ab_tests?.running||e.ab_tests?.completed)?[{h:`A/B`,td:e=>e.ab_tests?.running?`${P(e.ab_tests.running)} <span class="dc-sub">running</span>`:e.ab_tests?.completed?`${P(e.ab_tests.completed)} <span class="dc-sub">done</span>`:`—`}]:[],...e.some(e=>e.booked)?[{h:`Booked`,td:e=>e.booked?P(e.booked):`—`}]:[],...e.some(e=>e.called)?[{h:`Called`,td:e=>e.called?P(e.called):`—`}]:[],...n?[{h:`Spend`,td:e=>e.ad?`$${P(e.ad.spend)}`:`—`},{h:`CPL`,td:e=>e.ad?.cost_per_lead==null?`—`:`$${P(e.ad.cost_per_lead)}`}]:[]]),yi(t)}function Yi(e){let t=[[`Opened`,e.opens,``],[`Engaged`,e.engaged,` dash-funnel__bar--mid`],[`Completed`,e.completions,` dash-funnel__bar--end`],...e.booked?[[`Booked`,e.booked,` dash-funnel__bar--end`]]:[],...e.called?[[`Called`,e.called,` dash-funnel__bar--end`]]:[]],n=Math.max(1,e.opens||0),r=e=>Math.min(100,Math.round((e||0)/n*100));return`<div class="dash-funnel">${t.map(([e,t,n])=>`
    <div class="dash-funnel__row">
      <div class="dash-funnel__meta">
        <span class="dash-funnel__label">${e}</span>
        <span class="dash-funnel__val">${P(t)} <span class="dash-funnel__pct">${r(t)}%</span></span>
      </div>
      <div class="dash-funnel__track"><div class="dash-funnel__bar${n}" style="width:${Math.max(2,r(t))}%"></div></div>
    </div>`).join(``)}</div>`}async function Xi(e){let t=document.getElementById(`recent-leads-body`);if(t)try{let n=await fetch(`${e}/m5t/v5/m5mLead?limit=5`);if(!n.ok)throw Error(`HTTP ${n.status}`);let r=await n.json(),i=(Array.isArray(r?.data)?r.data:[]).filter(e=>![`DELETED`,`ARCHIVED`].includes(e.status));t.innerHTML=i.length?i.slice(0,5).map(Wi).join(``):ea(`contacts`,`No leads captured yet. Publish a magnet to start collecting.`)}catch(e){console.warn(`[dashboard] Leads fetch failed:`,e),t.innerHTML=ea(`error`,`Could not load recent leads.`)}}function Zi(e){if(e<=0)return 1;let t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function Qi(e){let t=e.length||1,n=Zi(Math.max(1,...e.map(e=>e.opens||0))),r=Zi(Math.max(1,...e.map(e=>e.leads||0))),i=748/t,a=Math.min(22,i*.55),o=e=>46+i*(e+.5),s=e=>266-e/n*248,c=e=>266-e/r*248,l=[0,.5,1].map(e=>{let t=266-e*248;return`<line x1="46" y1="${t.toFixed(1)}" x2="794" y2="${t.toFixed(1)}" class="dash-grid"/><text x="38" y="${(t+3.5).toFixed(1)}" text-anchor="end" class="dash-ax">${ua(n*e)}</text><text x="802" y="${(t+3.5).toFixed(1)}" text-anchor="start" class="dash-ax">${ua(r*e)}</text>`}).join(``),u=e.map((e,t)=>{let n=s(e.opens||0);return`<rect class="dash-bar" data-i="${t}" x="${(o(t)-a/2).toFixed(1)}" y="${n.toFixed(1)}" width="${a.toFixed(1)}" height="${Math.max(0,266-n).toFixed(1)}" rx="3"/>`}).join(``),d=e.map((e,t)=>`${o(t).toFixed(1)},${c(e.leads||0).toFixed(1)}`).join(` `),f=t>1?`<polyline class="dash-line" points="${d}" fill="none" stroke-width="2.5"/>`:``,p=e.map((e,t)=>`<circle class="dash-dot" data-i="${t}" cx="${o(t).toFixed(1)}" cy="${c(e.leads||0).toFixed(1)}" r="3.2"/>`).join(``),m=Math.max(1,Math.ceil(t/6));return`
    <div class="dash-legend">
      <span><i class="dash-sw dash-sw--1"></i>Magnet Opens</span>
      <span><i class="dash-sw dash-sw--2"></i>Leads</span>
    </div>
    <div class="dash-chart-wrap">
      <svg class="dash-chart" viewBox="0 0 840 300" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Magnet opens versus leads over time">
        ${l}<line class="dash-crosshair" x1="0" y1="18" x2="0" y2="266" pointer-events="none"/>${u}${f}${p}${e.map((e,n)=>n%m===0||n===t-1?`<text x="${o(n).toFixed(1)}" y="288" text-anchor="middle" class="dash-ax">${e.date.slice(5)}</text>`:``).join(``)}${e.map((e,t)=>`<rect class="dash-hit" data-i="${t}" data-day="${N(e.date)}" data-leads="${Number(e.leads||0)}" x="${(46+i*t).toFixed(1)}" y="18" width="${i.toFixed(1)}" height="${248 .toFixed(1)}" fill="transparent"/>`).join(``)}
      </svg>
      <div class="dash-chart-tip" role="status" hidden></div>
    </div>`}function $i(e){let t=document.querySelector(`#dash-trend .dash-chart-wrap`),n=document.querySelector(`#dash-trend .dash-chart-tip`);if(!t||!n)return;let r=e=>{try{return new Date(`${e}T00:00:00`).toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})}catch{return e}},i=t.querySelector(`.dash-crosshair`),a=()=>{t.querySelectorAll(`.dash-bar--on, .dash-dot--on, .dash-hit--on`).forEach(e=>e.classList.remove(`dash-bar--on`,`dash-dot--on`,`dash-hit--on`)),i&&i.classList.remove(`dash-crosshair--on`)},o=(e,n)=>{if(a(),t.querySelector(`.dash-bar[data-i="${e}"]`)?.classList.add(`dash-bar--on`),t.querySelector(`.dash-dot[data-i="${e}"]`)?.classList.add(`dash-dot--on`),n.classList.add(`dash-hit--on`),i){let e=Number(n.getAttribute(`x`))+Number(n.getAttribute(`width`))/2;i.setAttribute(`x1`,e),i.setAttribute(`x2`,e),i.classList.add(`dash-crosshair--on`)}},s=(i,a)=>{let s=e[i];if(!s)return;n.innerHTML=`
      <div class="dash-chart-tip__date">${r(s.date)}</div>
      <div class="dash-chart-tip__row"><i class="dash-sw dash-sw--1"></i>${P(s.opens||0)} opens</div>
      <div class="dash-chart-tip__row"><i class="dash-sw dash-sw--2"></i>${P(s.leads||0)} leads</div>
      ${Number(s.leads||0)>0?`<div class="dash-chart-tip__go">Click to see them →</div>`:``}`;let c=a.getBoundingClientRect(),l=t.getBoundingClientRect();n.style.left=`${c.left-l.left+c.width/2}px`,n.style.top=`${c.top-l.top}px`,n.hidden=!1,o(i,a)},c=()=>{n.hidden=!0,a()};t.querySelectorAll(`.dash-hit`).forEach(e=>{let t=Number(e.dataset.i);e.addEventListener(`mouseenter`,()=>s(t,e)),e.addEventListener(`mousemove`,()=>s(t,e)),e.addEventListener(`mouseleave`,c),e.addEventListener(`click`,()=>{let n=e.classList.contains(`dash-hit--on`);s(t,e),Number(e.dataset.leads||0)&&(!la()&&!n||(Ai(Ni.LEADS_DAY,e.dataset.day),window.location.hash=`#/leads`))})})}var ea,N,P,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa=o((()=>{D(),ki(),Fi(),zi(),ea=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,N=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),P=e=>Number(e||0).toLocaleString(),ta=e=>[e.first_name,e.last_name].filter(Boolean).join(` `).trim()||e.email||`(no name)`,na=e=>(ta(e).split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``)||`?`).toUpperCase(),ra=!1,ia=(e,t,n,{wide:r=!1,full:i=!1,controls:a=!1}={})=>`
  <div class="dashboard-card${r?` chart-card-wide`:``}${i?` chart-card-full`:``}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${e}</span> ${t}</h2>
      ${a?`<div class="chart-controls" id="dash-periods">
        <button class="chart-period-btn" type="button" data-days="7">7 Days</button>
        <button class="chart-period-btn active" type="button" data-days="30">30 Days</button>
      </div>`:``}
    </div>
    <div class="card-body" id="${n}">${ea(`hourglass_empty`,`Loading…`)}</div>
  </div>`,aa=30,oa=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)},sa=(e,t)=>{let n=document.getElementById(e);n&&(n.innerHTML=t)},ca=e=>e.toISOString().slice(0,10),la=()=>typeof window.matchMedia!=`function`||window.matchMedia(`(hover: hover)`).matches,ua=e=>(e=Math.round(e),e>=1e3?(e/1e3).toFixed(e%1e3==0?0:1)+`k`:String(e)),da={render:Gi,init:Ki}})),pa=c({init:()=>ha,render:()=>ma});function ma(){return`
    <div class="auth-container">
      <div class="auth-left">
        ${In(`#/home`)}
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
          ${Ln()}
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
  `}function ha(){console.log(`[SignoutRoute] Initialized`);let e=document.getElementById(`confirm-signout-btn`);e?.addEventListener(`click`,async()=>{e.disabled=!0,e.textContent=`SIGNING OUT...`,console.log(`[SignoutRoute] User confirmed signout`),await E.doSignout()})}var ga=o((()=>{D(),Vn()})),_a=c({default:()=>Sa,init:()=>ba,render:()=>ya});function va(){if(xa)return;let e=document.createElement(`style`);e.id=`m5t-section-page-styles`,e.textContent=`
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
  `,document.head.appendChild(e),xa=!0}function ya({title:e=`Section`,icon:t=`widgets`,name:n=``}={}){return va(),`
    <section class="section-page" data-section="${n}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${t}</span>
        <h1 class="section-page__title">${e}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired. Content lands next.</p>
      </div>
    </section>`}function ba(){}var xa,Sa,Ca=o((()=>{xa=!1,Sa={render:ya,init:ba}})),wa=c({default:()=>Ka,init:()=>ja,render:()=>Aa});function Ta(){if(Wa)return;let e=document.createElement(`style`);e.id=`m5t-settings-general-styles`,e.textContent=`
    .page-shell[data-section="settings-general"] a.settings-link-card { padding: 18px 24px; }
    .page-shell[data-section="settings-general"] .settings-item__control .settings-select { width: auto; min-width: 190px; }
  `,document.head.appendChild(e),Wa=!0}function Ea(){try{return Ft.getAvailableLanguages()||[]}catch{return[]}}function Da(){let e=Ea(),t=e.includes(v.FF_SSE_I18N_LANG)?v.FF_SSE_I18N_LANG:e[0]||v.FF_SSE_I18N_LANG;try{let n=localStorage.getItem(v.FF_SSE_LS_USER_LANG);return n&&e.includes(n)?n:t}catch{return t}}function Oa(e){try{let t=new Intl.DisplayNames([e],{type:`language`}).of(e);if(t&&t!==e)return t.charAt(0).toUpperCase()+t.slice(1)}catch{}return e}function ka(){let e=cn(),t=Ea(),n=t.length>1;if(!e&&!n)return``;let r=Da();return`
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
              <input type="checkbox" role="switch" id="gen-dark" aria-label="Dark mode" ${hn()===`dark`?`checked`:``} />
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
              ${t.map(e=>`<option value="${za(e)}" ${e===r?`selected`:``}>${za(Oa(e))}</option>`).join(``)}
            </select>
          </div>
        </div>`:``}
      </div>
    </div>`}function Aa(){return Ta(),`
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
          <div id="gen-profile-body">${Ga(`hourglass_empty`,`Loading…`)}</div>
        </div>
      </div>

      ${ka()}

      <a class="dashboard-card settings-link-card" href="#/settings/security" style="margin-top:24px">
        <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">passkey</span></span>
        <div>
          <div class="settings-section__title">Sign-in and security</div>
          <p class="settings-section__desc">Password and passkeys.</p>
        </div>
        <span class="settings-link-card__go material-symbols-outlined" aria-hidden="true">chevron_right</span>
      </a>
    </div>`}async function ja(){Ia(),await Na()}function Ma(e){return`
    <div class="settings-grid-2">
      <div class="settings-field">
        <label class="settings-label" for="gen-first">First name</label>
        <input class="settings-input" id="gen-first" type="text" autocomplete="given-name" value="${za(e.first)}" />
        <p class="settings-error" id="gen-first-error" role="alert" hidden></p>
      </div>
      <div class="settings-field">
        <label class="settings-label" for="gen-last">Last name</label>
        <input class="settings-input" id="gen-last" type="text" autocomplete="family-name" value="${za(e.last)}" />
        <p class="settings-error" id="gen-last-error" role="alert" hidden></p>
      </div>
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-company">Company</label>
      <input class="settings-input" id="gen-company" type="text" autocomplete="organization" value="${za(e.company)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-phone">Phone</label>
      <input class="settings-input" id="gen-phone" type="tel" autocomplete="tel" value="${za(e.phone)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-email">Sign-in email</label>
      <input class="settings-input" id="gen-email" type="email" value="${za(e.email)}" readonly />
      <p class="settings-help">Your sign-in email. Contact support to change it.</p>
    </div>
    <div class="settings-save-row">
      <button class="btn btn-primary" id="gen-save" type="button">Save</button>
    </div>`}async function Na(){let e=document.getElementById(`gen-profile-body`);if(e){try{let e=await fetch(Ha()),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok||!t.data)throw Error(t.error||`Failed to load`);Ua.profile=t.data}catch(t){console.warn(`[settings-general] profile load failed:`,t),e.innerHTML=Ga(`error`,`Could not load your profile. Please try again.`);return}e.innerHTML=Ma(Ua.profile),e.querySelector(`#gen-save`)?.addEventListener(`click`,Fa)}}function Pa(e,t){let n=document.getElementById(`${e}-error`);n&&(n.textContent=t||``,n.hidden=!t);let r=document.getElementById(e);r&&r.setAttribute(`aria-invalid`,t?`true`:`false`)}async function Fa(){let e=document.getElementById(`gen-save`),t=e=>(document.getElementById(e)?.value??``).trim(),n={first:t(`gen-first`),last:t(`gen-last`),company:t(`gen-company`),phone:t(`gen-phone`)};if(Pa(`gen-first`,n.first?``:`First name is required.`),Pa(`gen-last`,n.last?``:`Last name is required.`),!(!n.first||!n.last)){e&&(e.disabled=!0);try{let e=await fetch(Ha(),{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)}),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(t.error||`Could not save.`);t.data&&(Ua.profile=t.data),Ba(`Profile updated.`,`success`)}catch(e){console.warn(`[settings-general] profile save failed:`,e),Ba(e.message||`Could not save.`,`error`)}finally{e&&(e.disabled=!1)}}}function Ia(){let e=document.getElementById(`gen-dark`);if(e){e.addEventListener(`change`,()=>{gn(e.checked?`dark`:`light`),e.checked=hn()===`dark`});let t=La.default.subscribe(p.UI_THEME_CHANGED,()=>{if(!e.isConnected){La.default.unsubscribe(t);return}e.checked=hn()===`dark`})}let t=document.getElementById(`gen-lang`);t&&t.addEventListener(`change`,()=>{try{Ft.setLanguage(t.value)}catch(e){console.warn(`[settings-general] setLanguage failed:`,e)}})}var La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa=o((()=>{D(),La=u(f(),1),m(),y(),yn(),fn(),Ra={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},za=e=>String(e??``).replace(/[&<>"']/g,e=>Ra[e]),Ba=(e,t=`info`)=>{try{La.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Va=()=>E.getConfig?.().BASE_URL||``,Ha=()=>`${Va()}/m5t/v5/acctEntity/profile`,Ua={profile:null},Wa=!1,Ga=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Ka={render:Aa,init:ja}})),Ja=c({default:()=>wo,init:()=>Za,render:()=>Xa});function Ya(){if(xo)return;let e=document.createElement(`style`);e.id=`m5t-workspace-styles`,e.textContent=`
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
  `,document.head.appendChild(e),xo=!0}function Xa(){Ya();let e=ho[yo()];return`
    <div class="page-shell" data-section="settings-workspace">
      <div class="page-header">
        <div class="page-header-text">
          <div class="ws-title-row">
            <h1 class="page-title">Workspace</h1>
            ${e?`<span class="m5t-chip">${lo(e)}</span>`:``}
          </div>
          <p class="page-description">Your organization's identity and team.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-body">
          ${Co(`apartment`,`Organization`,`Name and details.`)}
          <div id="ws-org-body">${So(`hourglass_empty`,`Loading…`)}</div>
        </div>
      </div>

      <div class="dashboard-card" id="ws-team-card" style="margin-top:24px; display:none">
        <div class="card-body">
          ${Co(`group`,`Team`,`Who has access.`)}
          <div id="ws-team-body"></div>
        </div>
      </div>
    </div>`}async function Za(){_o.org=null,await Qa(),await ro()}async function Qa(){let e=document.getElementById(`ws-org-body`);if(!e)return;let t=vo();if(!t){e.innerHTML=So(`apartment`,`No workspace on this account yet.`);return}try{let e=await fetch(`${fo()}/m5t/v5/acctGroup`),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`Failed (HTTP ${e.status})`);if(_o.org=(n.data||[]).find(e=>e.guid===t)||null,!_o.org)throw Error(`Org row not in scope`)}catch(t){console.warn(`[settings-workspace] load failed:`,t),e.innerHTML=So(`error`,`Could not load your workspace. Please try again.`);return}eo()}function $a(){let e=ho[yo()]||``,t=_o.org?.created?.created_tz,n=``;if(t){let e=new Date(t);Number.isNaN(e.getTime())||(n=`Created ${e.toLocaleDateString()}`)}let r=[e,n].filter(Boolean);return r.length?`<p class="settings-help">${lo(r.join(` · `))}</p>`:``}function eo(){let e=document.getElementById(`ws-org-body`);if(!e)return;let t=_o.org||{};if(!bo()){let n=yo()===mo?`<div class="settings-note"><span class="material-symbols-outlined" aria-hidden="true">info</span> This workspace is managed for you.</div>`:``;e.innerHTML=`
      <div class="settings-item">
        <div class="settings-item__info">
          <div class="settings-item__title">Organization name</div>
          <div class="settings-item__desc">${lo(t.caption||`Not set`)}</div>
        </div>
      </div>
      <div class="settings-item">
        <div class="settings-item__info">
          <div class="settings-item__title">Description</div>
          <div class="settings-item__desc">${lo(t.description||`Not set`)}</div>
        </div>
      </div>
      ${n}
      <div style="margin-top:12px">${$a()}</div>`;return}e.innerHTML=`
    <div class="settings-field">
      <label class="settings-label" for="ws-name">Organization name</label>
      <input class="settings-input" id="ws-name" type="text" required value="${lo(t.caption||``)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="ws-desc">Description</label>
      <textarea class="settings-input" id="ws-desc" rows="2">${lo(t.description||``)}</textarea>
    </div>
    <p class="settings-error" id="ws-org-error"></p>
    <div class="settings-save-row">
      ${$a()}
      <button class="btn btn-primary" type="button" id="ws-save">Save</button>
    </div>`,document.getElementById(`ws-save`)?.addEventListener(`click`,to)}async function to(){let e=document.getElementById(`ws-save`),t=document.getElementById(`ws-org-error`),n=(document.getElementById(`ws-name`)?.value||``).trim(),r=(document.getElementById(`ws-desc`)?.value||``).trim();if(t&&(t.textContent=``),!n){t&&(t.textContent=`Organization name is required.`);return}e&&(e.disabled=!0);try{let e=await fetch(`${fo()}/m5t/v5/acctGroup/${encodeURIComponent(_o.org.id)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({caption:n,description:r})}),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(t.message||t.error||`Failed (HTTP ${e.status})`);_o.org={..._o.org,caption:n,description:r},uo(`Workspace updated.`,`success`)}catch(t){console.warn(`[settings-workspace] save failed:`,t),uo(t.message||`Could not save`,`danger`),e&&(e.disabled=!1);return}e&&(e.disabled=!1);try{await E.fetchScope?.()}catch(e){console.warn(`[settings-workspace] fetchScope after save failed:`,e)}}function no(){document.getElementById(`ws-team-card`)?.remove()}async function ro(){let e=document.getElementById(`ws-team-card`);if(!e)return;let t=vo();if(!t||!bo()){no();return}let n=[],r=[];try{let[e,i]=await Promise.all([fetch(`${fo()}/m5t/v5/acctGroup/${encodeURIComponent(t)}/members`),fetch(`${fo()}/m5t/v5/acctGroup/${encodeURIComponent(t)}/invites`)]);if(e.status===403||i.status===403){no();return}let[a,o]=await Promise.all([e.json().catch(()=>({})),i.json().catch(()=>({}))]);if(!e.ok||!i.ok)throw Error(`members: ${e.status}, invites: ${i.status}`);n=a.members||[],r=o.invites||[]}catch(t){console.warn(`[settings-workspace] team load failed:`,t),e.style.display=``;let n=document.getElementById(`ws-team-body`);n&&(n.innerHTML=So(`error`,`Could not load your team. Please try again.`));return}oo(n,r)}function io(e){if(!e.length)return``;let t=e.slice(0,go),n=e.length-t.length;return`
    <div class="ws-avatars">
      ${t.map(e=>`<span class="ws-avatar" title="${lo(e.name||e.email)}">${lo(po(e.name||e.email))}</span>`).join(``)}
      ${n>0?`<span class="ws-avatar ws-avatar--more">+${n}</span>`:``}
    </div>`}function ao(e,t){let n=`${e.length} member${e.length===1?``:`s`}`;return t.length?`${n} · ${t.length} pending invite${t.length===1?``:`s`}`:n}function oo(e,t){let n=document.getElementById(`ws-team-card`),r=document.getElementById(`ws-team-body`);if(!n||!r)return;n.style.display=``;let i=yo()!==mo;r.innerHTML=`
    ${io(e)}
    <p class="ws-counts">${lo(ao(e,t))}</p>
    ${i?`<div class="ws-team-actions"><a class="btn btn-secondary" href="#/team">Manage team</a></div>`:``}`}var so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To=o((()=>{D(),so=u(f(),1),m(),co={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},lo=e=>String(e??``).replace(/[&<>"']/g,e=>co[e]),uo=(e,t=`info`)=>{try{so.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},fo=()=>E.getConfig?.().BASE_URL||``,po=e=>String(e||`?`).trim().split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,mo=`managed_client`,ho={reseller_org:`Your organization`,managed_client:`Client workspace`,saas_org:`Organization`},go=6,_o={org:null},vo=()=>E.getActiveOrg()?.guid||E.getMemberships()[0]?.orgGuid||null,yo=()=>E.getActiveOrg()?.channel||E.getMemberships()[0]?.channel||null,bo=()=>E.getCapabilities().includes(`manage_team`),xo=!1,So=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Co=(e,t,n)=>`
  <div class="settings-section__head">
    <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">${e}</span></span>
    <div>
      <h2 class="settings-section__title">${t}</h2>
      <p class="settings-section__desc">${n}</p>
    </div>
  </div>`,wo={render:Xa,init:Za}})),Eo=c({default:()=>Yo,init:()=>ko,render:()=>Oo});function Do(){if(qo)return;let e=document.createElement(`style`);e.id=`m5t-notif-styles`,e.textContent=`
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
  `,document.head.appendChild(e),qo=!0}function Oo(){return Do(),hi(),M()?bi({section:`settings-notifications`,title:`Notifications`,description:`Pick a client to manage their lead alerts.`}):`
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
              <p class="settings-section__desc">Email sent the moment a magnet captures a lead. Up to ${Wo} recipients per magnet.</p>
            </div>
          </div>
          <div id="ntf-body">${Jo(`hourglass_empty`,`Loading…`)}</div>
        </div>
      </div>
      <div class="dashboard-card" id="ntf-wh-card" style="margin-top:24px; display:none">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">webhook</span></span>
            <div>
              <h2 class="settings-section__title">Lead delivery webhook</h2>
              <p class="settings-section__desc">Every captured lead is sent to this URL as JSON. Works with Zapier catch hooks and any CRM endpoint.</p>
            </div>
          </div>
          <div id="ntf-wh-body"></div>
        </div>
      </div>
    </div>`}async function ko(){if(M()){let e=e=>Number(e||0).toLocaleString();return xi(Ho(),[{h:`Magnets`,td:t=>`${e(t.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${e(t.magnets.total)}</span>`},{h:`Leads · wk`,td:t=>e(t.leads.this_week)}],{emptyMsg:`No client orgs yet. Create one under Clients first.`})}await Promise.all([No(),Ao()])}async function Ao(){let e=Ko();if(e)try{let t=await fetch(`${Ho()}/m5t/v5/acctGroup/${encodeURIComponent(e)}/webhook`);if(t.status===403){Go.webhookAllowed=!1;return}let n=await t.json().catch(()=>({}));if(!n.ok)return;Go.webhook=n.webhook,Mo()}catch{}}function jo(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function Mo(){let e=document.getElementById(`ntf-wh-card`),t=document.getElementById(`ntf-wh-body`);if(!e||!t)return;e.style.display=``;let n=Go.webhook,r=n?.last_delivery;t.innerHTML=`
    <div class="ntf-wh">
      <div class="settings-field" style="margin-bottom:0">
        <label class="settings-label" for="ntf-wh-url">Webhook URL</label>
        <input class="ntf-input" id="ntf-wh-url" type="url" placeholder="https://hooks.zapier.com/hooks/catch/…" value="${Bo(n?.uri||``)}" />
      </div>
      <div class="settings-field" style="margin-bottom:0">
        <label class="settings-label" for="ntf-wh-secret">Signing secret</label>
        <input class="ntf-input" id="ntf-wh-secret" type="text" autocomplete="off" placeholder="${n?.has_secret?`Signing secret saved. Type to replace.`:`Optional`}" />
        <p class="settings-help">Sent as an HMAC signature header so your endpoint can verify deliveries.</p>
      </div>
      <div class="ntf-wh__row">
        <button class="ntf-btn" type="button" id="ntf-wh-save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save</button>
        <button class="ntf-btn" type="button" id="ntf-wh-test" ${n?.uri?``:`disabled`}><span class="material-symbols-outlined" aria-hidden="true">send</span> Send test</button>
        <span class="ntf-wh__status">${r?r.ok?`Last delivery: <span class="ok">delivered</span> ${Bo(jo(r.tz))}`:`Last delivery: <span class="bad">failed</span> ${Bo(jo(r.tz))} (${Bo(r.error||``)})`:``}</span>
      </div>
    </div>`,t.querySelector(`#ntf-wh-save`)?.addEventListener(`click`,async()=>{let e=t.querySelector(`#ntf-wh-url`)?.value.trim()||``,n=t.querySelector(`#ntf-wh-secret`)?.value??``,r={uri:e};n.trim()!==``&&(r.secret=n.trim());try{let t=await fetch(`${Ho()}/m5t/v5/acctGroup/${encodeURIComponent(Ko())}/webhook`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`Failed (HTTP ${t.status})`);Go.webhook=n.webhook,Vo(e?`Webhook saved`:`Webhook removed`,`success`),Mo()}catch(e){Vo(e.message||`Could not save`,`danger`)}}),t.querySelector(`#ntf-wh-test`)?.addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0;try{let e=await fetch(`${Ho()}/m5t/v5/acctGroup/${encodeURIComponent(Ko())}/webhook-test`,{method:`POST`}),t=await e.json().catch(()=>({}));e.ok&&t.ok?Vo(`Test delivery sent`,`success`):Vo(t.error||`Could not deliver the test`,`danger`)}catch{Vo(`Could not deliver the test`,`danger`)}finally{t.disabled=!1}try{await Ao()}catch(e){console.warn(`[notifications] loadWebhook refresh failed:`,e)}})}async function No(){let e=document.getElementById(`ntf-body`);if(e){try{let e=await(await fetch(`${Ho()}/m5t/v5/magnets`)).json().catch(()=>({}));if(!e.ok)throw Error(e.message||`Failed to load`);Go.magnets=(e.magnets||[]).filter(e=>e.status!==`ARCHIVED`),Go.canManage=!!e.canManage}catch(t){console.warn(`[notifications] load failed:`,t),e.innerHTML=Jo(`error`,`Could not load your magnets. Please try again.`);return}Fo()}}function Po(e){let t=Array.isArray(e.notify_emails)?e.notify_emails:[],n=t.length>0;return`
    <div class="ntf-row" data-guid="${Bo(e.guid)}">
      <div class="ntf-magnet">
        <div class="ntf-name" title="${Bo(e.name)}">${Bo(e.name)}</div>
        <div class="ntf-meta">${Bo((e.domains||[]).join(`, `)||e.status)}</div>
        <span class="ntf-state${n?` on`:``}">
          <span class="material-symbols-outlined" aria-hidden="true">${n?`notifications_active`:`notifications_off`}</span>
          ${n?`Alerts on · ${t.length}`:`Alerts off`}
        </span>
      </div>
      <div class="ntf-config">
        ${t.length?`<div class="ntf-chips">${t.map(e=>`
              <span class="ntf-chip">${Bo(e)}${Go.canManage?`<button type="button" data-remove="${Bo(e)}" aria-label="Remove ${Bo(e)}">&times;</button>`:``}</span>`).join(``)}</div>`:`<div class="ntf-none">No alert emails.</div>`}
        ${Go.canManage?`
        <div class="ntf-addrow">
          <input class="ntf-input" type="email" placeholder="name@business.com" aria-label="Add alert email" ${t.length>=Wo?`disabled`:``} />
          <button class="ntf-btn" type="button" data-add ${t.length>=Wo?`disabled`:``}>
            <span class="material-symbols-outlined" aria-hidden="true">add</span> Add
          </button>
        </div>`:``}
      </div>
      ${Go.canManage?`
      <div class="ntf-actions">
        <button class="ntf-btn" type="button" data-test ${t.length?``:`disabled`} title="${t.length?`Send a sample alert to the emails above`:`Add an alert email first`}">
          <span class="material-symbols-outlined" aria-hidden="true">send</span> Send test
        </button>
      </div>`:``}
    </div>`}function Fo(){let e=document.getElementById(`ntf-body`);if(e){if(!Go.magnets.length){e.innerHTML=Jo(`widgets`,`No magnets yet. Create one under Your Magnets first.`);return}e.innerHTML=Go.magnets.map(Po).join(``),e.querySelectorAll(`.ntf-row`).forEach(e=>{let t=e.dataset.guid,n=e.querySelector(`.ntf-input`),r=()=>{let e=(n?.value||``).trim().toLowerCase();if(!e)return;if(!Uo(e)){Vo(`That does not look like an email address`,`danger`);return}let r=[...Go.magnets.find(e=>e.guid===t).notify_emails||[]];if(r.includes(e)){Vo(`Already added`,`info`);return}if(r.length>=Wo){Vo(`Up to ${Wo} emails per magnet`,`info`);return}Io(t,[...r,e])};e.querySelector(`[data-add]`)?.addEventListener(`click`,r),n?.addEventListener(`keydown`,e=>{e.key===`Enter`&&r()}),e.querySelectorAll(`[data-remove]`).forEach(e=>e.addEventListener(`click`,()=>{let n=Go.magnets.find(e=>e.guid===t);Io(t,(n.notify_emails||[]).filter(t=>t!==e.dataset.remove))})),e.querySelector(`[data-test]`)?.addEventListener(`click`,()=>Lo(t,e.querySelector(`[data-test]`)))})}}async function Io(e,t){try{let n=await fetch(`${Ho()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({notify_emails:t})}),r=await n.json().catch(()=>({}));if(!n.ok||!r.ok)throw Error(r.error||r.message||`Failed (HTTP ${n.status})`);let i=Go.magnets.find(t=>t.guid===e);i&&(i.notify_emails=t),Vo(`Alert emails updated`,`success`)}catch(e){console.warn(`[notifications] save failed:`,e),Vo(e.message||`Could not save`,`danger`);return}try{Fo()}catch(e){console.error(`[notifications] renderBody after save failed:`,e)}}async function Lo(e,t){t&&(t.disabled=!0);try{let t=await fetch(`${Ho()}/m5t/v5/magnets/${encodeURIComponent(e)}/notify-test`,{method:`POST`}),n=await t.json().catch(()=>({}));t.ok&&n.ok?Vo(`Test alert sent`,`success`):Vo(n.error||`Could not send the test`,`danger`)}catch{Vo(`Could not send the test`,`danger`)}finally{t&&(t.disabled=!1)}}var Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo=o((()=>{D(),qe(),Ro=u(f(),1),m(),ki(),zo={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Bo=e=>String(e??``).replace(/[&<>"']/g,e=>zo[e]),Vo=(e,t=`info`)=>{try{Ro.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Ho=()=>E.getConfig?.().BASE_URL||``,Uo=e=>be(e),Wo=5,Go={magnets:[],canManage:!1,webhook:null,webhookAllowed:!0},Ko=()=>E.getActiveOrg()?.guid||E.getMemberships()[0]?.orgGuid||null,qo=!1,Jo=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Yo={render:Oo,init:ko}}));function Zo({label:e=``,content:t=``,size:n=``,onClose:r=null}={}){let i=document.activeElement,a=document.createElement(`div`);a.className=`m5t-modal-scrim`,a.innerHTML=`
    <div class="m5t-modal${n===`wide`?` m5t-modal--wide`:``}" role="dialog" aria-modal="true" aria-label="${Qo(e)}" tabindex="-1">
      <div class="m5t-modal__head">
        <h2 class="m5t-modal__title"></h2>
        <button type="button" class="m5t-modal__close" aria-label="Close">&times;</button>
      </div>
      <div class="m5t-modal__body"></div>
    </div>`,a.querySelector(`.m5t-modal__title`).textContent=e;let o=a.querySelector(`.m5t-modal`),s=a.querySelector(`.m5t-modal__body`);t instanceof Element?s.appendChild(t):s.innerHTML=String(t);let c=!1,l=e=>{if(c)return;c=!0,$o=Math.max(0,$o-1),document.removeEventListener(`keydown`,d,!0),a.classList.remove(`open`);let t=()=>{a.remove();try{i?.focus?.()}catch{}r&&r(e)};document.documentElement.classList.contains(`ff-no-animations`)||window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches?t():setTimeout(t,180)},u=e=>{for(let t=e;t&&t!==a;t=t.parentElement)if(t.hidden||t.style?.display===`none`||t.style?.visibility===`hidden`)return!1;return!0},d=e=>{if(e.key===`Escape`){e.stopPropagation(),l(void 0);return}if(e.key!==`Tab`||c)return;let t=[...o.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)].filter(u);if(!t.length){e.preventDefault(),o.focus();return}let n=t[0],r=t[t.length-1],i=document.activeElement;if(!o.contains(i)){e.preventDefault(),(e.shiftKey?r:n).focus();return}e.shiftKey&&i===n?(e.preventDefault(),r.focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n.focus())};return a.addEventListener(`click`,e=>{e.target===a&&l(void 0)}),a.querySelector(`.m5t-modal__close`).addEventListener(`click`,()=>l(void 0)),document.addEventListener(`keydown`,d,!0),document.body.appendChild(a),$o++,o.contains(document.activeElement)||o.focus(),requestAnimationFrame(()=>a.classList.add(`open`)),{el:a,close:l}}function Qo(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var $o,es=o((()=>{$o=0}));function ts({title:e=`Are you sure?`,message:t=``,confirmLabel:n=`Confirm`,cancelLabel:r=`Cancel`,danger:i=!1}={}){return new Promise(a=>{let o=!1,s=e=>{o||(o=!0,a(e))},c=document.createElement(`div`);c.innerHTML=`
      ${t?`<p style="margin:0 0 4px">${rs(t)}</p>`:``}
      <div class="m5t-modal__foot" style="margin:16px -20px -18px; padding-left:20px; padding-right:20px">
        <button type="button" class="m5t-modal__btn" data-x="cancel">${rs(r)}</button>
        <button type="button" class="m5t-modal__btn ${i?`m5t-modal__btn--danger`:`m5t-modal__btn--primary`}" data-x="confirm">${rs(n)}</button>
      </div>`;let{close:l}=Zo({label:e,content:c,onClose:()=>s(!1)});c.querySelector(`[data-x="cancel"]`).addEventListener(`click`,()=>{s(!1),l()}),c.querySelector(`[data-x="confirm"]`).addEventListener(`click`,()=>{s(!0),l()}),requestAnimationFrame(()=>c.querySelector(`[data-x="cancel"]`)?.focus())})}var ns,rs,is=o((()=>{es(),ns={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},rs=e=>String(e??``).replace(/[&<>"']/g,e=>ns[e])}));function as(e){Ms=e}function os(){let e=Ms;return Ms=null,e}function ss(e,{size:t=``}={}){return`
    <span class="intg-mark intg-mark--${e.card.tint}${t?` intg-mark--${t}`:``}">
      <img class="intg-logo" src="${F(e.logo)}" alt="" loading="lazy"
           onerror="this.style.display='none';this.parentElement.querySelector('.intg-logo-fallback').style.display=''">
      <span class="material-symbols-outlined intg-logo-fallback" aria-hidden="true" style="display:none">${e.card.icon}</span>
    </span>`}function cs(e,t){let n=Ds(),r=e?.[t]||[];return r.find(e=>e.owner_guid===n)||r[0]||null}function ls(e,t,n){return e.connect&&!n?`unavailable`:t?t.connect_status===`ACTIVE`?`connected`:`broken`:`idle`}function us(e,t){return e===`unavailable`?`<span class="intg-state">Not available yet</span>`:e===`idle`?`<span class="intg-state">Not connected</span>`:e===`connected`?`<span class="intg-state on"><span class="material-symbols-outlined" aria-hidden="true">check</span>Connected</span>`:`<span class="intg-state warn"><span class="material-symbols-outlined" aria-hidden="true">priority_high</span>${F(t?.connect_status===`NEEDS_REAUTH`?`Reconnect needed`:`Connection error`)}</span>`}async function ds(){let e=await fetch(`${I()}/m5t/v5/integrations`);if(e.status===403)return{denied:!0};let t=await e.json();if(!t.ok)throw Error(t.error||`load failed`);return{providers:t.data.providers,configured:t.data.configured}}async function fs(e){if(!js.busy){js.busy=!0;try{let t=await(await fetch(`${I()}/m5t/v5/integrations/${e.slug}/connect`)).json();if(!t.ok||!t.data?.url)throw Error(t.error||`connect failed`);window.location.href=t.data.url}catch(t){Es(t.message||e.connect.fallbackError,`error`),js.busy=!1}}}async function ps(e,{refresh:t}={}){if(js.busy)return;js.busy=!0;let n=document.getElementById(e.card.ids.sync);n&&(n.disabled=!0);try{let t=await(await fetch(`${I()}/m5t/v5/integrations/${e.slug}/sync`,{method:`POST`})).json();if(!t.ok)throw Error(t.error||`sync failed`);let n=(t.data?.connections?.[0]?.[e.sync.itemsField]||[]).filter(e=>e.error).length;Es(n?e.sync.failedToast(n):`Metrics synced.`,n?`warning`:`success`)}catch{Es(`Sync failed.`,`error`)}finally{js.busy=!1,n&&(n.disabled=!1),t?.()}}async function ms(e,{refresh:t}={}){if(js.busy)return;js.busy=!0;let n=!1;try{n=await ts({title:`Disconnect ${e.label}?`,message:e.disconnect.confirm,confirmLabel:`Disconnect`,danger:!0})}finally{n||(js.busy=!1)}if(n)try{let t=await(await fetch(`${I()}/m5t/v5/integrations/${e.slug}`,{method:`DELETE`})).json().catch(()=>({}));if(!t.ok)throw Error(t.error||`disconnect failed`);Es(e.disconnect.toast,`success`)}catch{Es(`Disconnect failed.`,`error`)}finally{js.busy=!1,t?.()}}async function hs(e,{refresh:t}={}){let n=e.picker,r=document.getElementById(e.card.ids.panel);if(r){r.style.display=``,r.innerHTML=As(n.loading);try{let r=await(await fetch(`${I()}/m5t/v5/integrations/${e.slug}/${n.path}`)).json();if(!r.ok)throw Error(r.error||`load failed`);gs(e,r.data[n.itemsField]||[],new Set(r.data.linked||[]),{refresh:t})}catch{r.innerHTML=As(n.loadError,`error`)}}}function gs(e,t,n,{refresh:r}={}){let i=e.picker,a=document.getElementById(e.card.ids.panel);if(!a)return;let o=t.map(e=>{let t=i.rowDisabled(e),r=i.rowBadge(e),a=n.has(e.id)&&!t;return`
      <label class="intg-acct${t?` disabled`:``}">
        <input type="checkbox" data-${i.dataAttr}="${F(e.id)}" ${a?`checked`:``} ${t?`disabled`:``}>
        <span style="min-width:0">
          <span class="intg-acct__name">${F(e.name||i.namePrefix+e.id)}</span>
          <div class="intg-acct__id">${F(e.id)}</div>
        </span>
        ${r?`<span class="intg-acct__badge">${F(r)}</span>`:`<span></span>`}
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
    </div>`,document.getElementById(i.ids.cancel)?.addEventListener(`click`,()=>{a.style.display=`none`}),document.getElementById(i.ids.save)?.addEventListener(`click`,()=>_s(e,{refresh:r}))}async function _s(e,{refresh:t}={}){let n=e.picker,r=document.getElementById(e.card.ids.panel),i=[...r?.querySelectorAll(`input[data-${n.dataAttr}]:checked`)||[]].map(e=>e.dataset[n.datasetKey]),a=document.getElementById(n.ids.save);a&&(a.disabled=!0);try{let a=await(await fetch(`${I()}/m5t/v5/integrations/${e.slug}/${n.path}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({[n.saveField]:i})})).json();if(!a.ok)throw Error(a.error||`save failed`);Es(n.savedToast(a.data.linked),`success`),r&&(r.style.display=`none`),t?.()}catch{Es(n.saveError,`error`),a&&(a.disabled=!1)}}function vs({refresh:e,replaceKey:t=!1}={}){let n=document.getElementById(Ps.callrail.card.ids.setup);n&&(n.style.display=``,n.innerHTML=`
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
    </div>`,document.getElementById(`intg-r-cancel`)?.addEventListener(`click`,()=>{n.style.display=`none`}),document.getElementById(`intg-r-continue`)?.addEventListener(`click`,()=>ys({refresh:e})),document.getElementById(`intg-r-key`)?.focus())}async function ys({refresh:e}={}){let t=document.getElementById(`intg-r-continue`),n=document.getElementById(`intg-r-key`)?.value.trim()||``,r=document.getElementById(`intg-r-pickers`);if(!n){Ls(`Paste an API key first.`);return}if(r&&!r.hidden)return xs(n,{refresh:e});t&&(t.disabled=!0),Ls(`Checking the key with CallRail…`);try{let e=await(await fetch(`${I()}/m5t/v5/integrations/callrail/validate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:n})})).json();if(!e.ok){Ls(e.error||`CallRail rejected that key.`);return}let i=e.data.accounts||[],a=document.getElementById(`intg-r-account`);a&&(a.innerHTML=i.map(e=>`<option value="${F(e.id)}">${F(e.name)}</option>`).join(``),a.onchange=()=>bs(n,a.value)),r&&(r.hidden=!1),t&&(t.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">save</span>Save`),Ls(``),await bs(n,i[0]?.id)}catch{Ls(`Could not reach CallRail. Try again.`)}finally{t&&(t.disabled=!1)}}async function bs(e,t){let n=document.getElementById(`intg-r-company`);if(!(!n||!t)){n.innerHTML=`<option value="">Loading companies…</option>`;try{let r=await(await fetch(`${I()}/m5t/v5/integrations/callrail/companies`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:e,account_id:t})})).json(),i=r.ok&&r.data.companies||[];n.innerHTML=i.length?i.map(e=>`<option value="${F(e.id)}">${F(e.name)}</option>`).join(``):`<option value="">No active companies in this account</option>`}catch{n.innerHTML=`<option value="">Could not load companies</option>`}}}async function xs(e,{refresh:t}={}){let n=document.getElementById(`intg-r-continue`),r=document.getElementById(`intg-r-account`)?.value||``,i=document.getElementById(`intg-r-company`)?.value||``;if(!i){Ls(`Pick the company this workspace tracks.`);return}n&&(n.disabled=!0),Ls(`Connecting…`);try{let n=await(await fetch(`${I()}/m5t/v5/integrations/callrail`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({api_key:e,account_id:r,company_id:i})})).json();if(!n.ok)throw Error(n.error||`connect failed`);Es(n.data?.webhook_state===`active`?`CallRail connected. Call sync is on.`:`CallRail connected. Call sync setup needs attention; see below.`,`success`),t?.()}catch{Ls(`Could not connect. Check the key and try again.`),n&&(n.disabled=!1)}}async function Ss({refresh:e}={}){if(js.busy)return;js.busy=!0;let t=document.getElementById(Ps.callrail.card.ids.sync);t&&(t.disabled=!0);try{let e=await(await fetch(`${I()}/m5t/v5/integrations/callrail/sync?days=7`,{method:`POST`})).json();if(!e.ok)throw Error(e.error||`sync failed`);let t=e.data?.connections?.[0]||{};Es(t.error?`Sync finished with errors.`:`Sync done. ${t.processed||0} new call${(t.processed||0)===1?``:`s`} recorded.`,t.error?`warning`:`success`)}catch{Es(`Sync failed.`,`error`)}finally{js.busy=!1,t&&(t.disabled=!1),e?.()}}function Cs(){if(Rs)return;let e=document.createElement(`style`);e.id=`m5t-intg-styles`,e.textContent=`
    /* ── shared marks / pills / buttons / alerts ── */
    .page-shell .intg-mark { position: relative; width: 46px; height: 46px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); flex: 0 0 auto; }
    .page-shell .intg-mark .material-symbols-outlined { font-size: 24px; }
    .page-shell .intg-mark--primary { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); }
    .page-shell .intg-mark--accent { background: var(--color-accent-strong-soft, #FBF1D2); color: var(--color-accent-strong, #915E00); }
    .page-shell .intg-mark--info { background: var(--color-info-soft, rgba(123,196,196,0.16)); color: var(--color-info-strong, #2F6363); }
    .page-shell .intg-mark--success { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .intg-mark--hero { width: 56px; height: 56px; border-radius: 14px; }
    .page-shell .intg-logo { width: 60%; height: 60%; object-fit: contain; display: block; }
    .page-shell .intg-state { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); white-space: nowrap; }
    /* Pill text uses the *-text tokens: the base tone colors fail contrast for
       small bold text on their own -soft fills. */
    .page-shell .intg-state.on { background: var(--color-success-soft, #E3F4EF); color: var(--color-success-text, #006B54); }
    .page-shell .intg-state.warn { background: var(--color-warning-soft, #FEF3C7); color: var(--color-warning-text, #92400E); }
    .page-shell .intg-state .material-symbols-outlined { font-size: 13px; }
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
    .page-shell .intg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
    /* Card chrome on .intg-tile (coming-soon tiles are <div>s, not anchors);
       interactive affordances stay qualified to a.intg-tile. */
    .page-shell .intg-tile { display: flex; flex-direction: column; gap: 12px; padding: 18px; text-decoration: none; color: inherit; background: var(--color-bg, #fff); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 12px); box-shadow: var(--shadow-sm, 0 1px 2px rgba(11,18,32,0.06)); }
    .page-shell a.intg-tile { transition: box-shadow .15s ease, border-color .15s ease, transform .15s ease; }
    .page-shell a.intg-tile:hover { border-color: var(--color-accent-muted, #7BB7FF); box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); transform: translateY(-2px); }
    .page-shell a.intg-tile:focus-visible { outline: none; box-shadow: var(--focus-ring, 0 0 0 3px rgba(0,114,186,0.30)); }
    .page-shell .intg-tile__head { display: flex; align-items: center; gap: 12px; }
    .page-shell .intg-tile__titles { min-width: 0; }
    .page-shell .intg-tile__name { font-weight: 700; font-size: 0.95rem; color: var(--color-text, #0B1220); }
    .page-shell .intg-tile__sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 1px; }
    .page-shell .intg-tile__desc { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); line-height: 1.5; margin: 0; flex: 1 1 auto; }
    .page-shell .intg-tile__foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .page-shell .intg-tile__go { color: var(--color-text-subtle, #6C7C9A); transition: color .12s ease, transform .12s ease; }
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
    .page-shell .intg-ev:last-child { border-bottom: 0; }
    .page-shell .intg-ev__name { font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .intg-ev__meta { color: var(--color-text-subtle, #6C7C9A); font-size: 0.76rem; }
    .page-shell .intg-ca-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.85rem; cursor: pointer; }
    .page-shell .intg-ca-row:last-child { border-bottom: 0; }
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
  `,document.head.appendChild(e),Rs=!0}var ws,Ts,F,Es,I,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs=o((()=>{D(),ws=u(f(),1),m(),is(),Ts={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},F=e=>String(e??``).replace(/[&<>"']/g,e=>Ts[e]),Es=(e,t=`info`)=>{try{ws.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},I=()=>E.getConfig?.().BASE_URL||``,Ds=()=>E.getActiveOrg()?.guid||E.getMemberships()[0]?.orgGuid||null,Os=()=>E.getCapabilities().includes(`manage_magnets`),ks=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,As=(e,t=``)=>`<div class="intg-alert ${t}"><span class="material-symbols-outlined" aria-hidden="true">${t===`error`?`error`:`info`}</span><span>${e}</span></div>`,js={busy:!1},Ms=null,Ns={google_ads:{what:`See ad spend lined up next to the leads it generated, so you know which campaigns are actually working.`,steps:[`Click Connect and sign in with a Google account that has access to your Ads accounts.`,`Choose which ad accounts should feed reporting.`,`Metrics refresh automatically once a day. Click Sync now any time for an immediate pull.`]},calendly:{what:`Let visitors book directly from a magnet conversation, and get notified the moment they do.`,steps:[`Click Connect and authorize your Calendly account.`,`Turn on Calendly booking for any magnet’s Book action, under Magnets.`,`Confirmed and canceled bookings sync back to the lead automatically. Webhooks need a paid Calendly plan; a free plan still lets visitors book, just without the automatic lead sync.`]},callrail:{what:`Every tracked phone call becomes a lead automatically, complete with recording and source.`,steps:[`In CallRail, go to Integrations, then Data access, then API keys, and create a key. Read-only works for calls; Allow Writes lets us set up call sync automatically.`,`Paste the key here and pick the account and company this workspace tracks.`,`Calls start landing in your Leads inbox within minutes.`]},google_analytics:{what:`See how visitors reach your site and behave once they get there. Sessions, pageviews, and engagement, right alongside the leads your magnets capture.`,steps:[`Click Connect and sign in with a Google account that has access to your GA4 property.`,`Choose which GA4 properties should feed reporting.`,`Metrics refresh automatically once a day. Click Sync now any time for an immediate pull.`]}},Ps={google_ads:{slug:`google_ads`,urlSlug:`google-ads`,label:`Google Ads`,logo:`integrations/google-ads.svg`,connect:{fallbackError:`Could not start the Google connection.`},disconnect:{confirm:`Daily metric refreshes stop until reconnected.`,toast:`Google Ads disconnected.`},card:{tint:`primary`,icon:`ads_click`,sub:`Spend and clicks beside your leads.`,ids:{connect:`intg-g-connect`,choose:`intg-g-accounts`,sync:`intg-g-sync`,disconnect:`intg-g-disconnect`,panel:`intg-g-picker`},chooseLabel:`Choose accounts`,idleDesc:`Connect a Google account with access to your ad accounts. Spend lines up against your magnet leads in Ad performance.`,brokenDesc:`The connection stopped working. Reconnect to resume daily metric refreshes.`,reachDesc:e=>`This connection can reach <b>${e}</b> ad account${e===1?``:`s`}. Choose which ones feed reporting; metrics refresh daily in Ad performance.`,noneDesc:`Connected, but no ad accounts are reachable from this Google account. Reconnect with an account that has Google Ads access.`,reachableCount:e=>e?.customer_ids?.length||0},picker:{path:`accounts`,itemsField:`accounts`,saveField:`customer_ids`,dataAttr:`intg-acct`,datasetKey:`intgAcct`,ids:{cancel:`intg-picker-cancel`,save:`intg-picker-save`},loading:`Loading your ad accounts…`,loadError:`Could not load your ad accounts. Try again, or reconnect if this keeps happening.`,heading:`Accounts that feed reporting`,emptyMsg:`No ad accounts are reachable from this Google account.`,namePrefix:`Account `,rowDisabled:e=>!!(e.manager||e.error),rowBadge:e=>e.manager?`Manager`:e.error?`Unavailable`:e.currency||``,savedToast:e=>`${e} account${e===1?``:`s`} linked. First sync is running.`,saveError:`Could not save account selection.`},sync:{itemsField:`accounts`,failedToast:e=>`Sync finished with ${e} account error${e===1?``:`s`}.`}},google_analytics:{slug:`google_analytics`,urlSlug:`google-analytics`,label:`Google Analytics`,logo:`integrations/google-analytics.svg`,connect:{fallbackError:`Could not start the Google Analytics connection.`},disconnect:{confirm:`Daily metric refreshes stop until reconnected.`,toast:`Google Analytics disconnected.`},card:{tint:`success`,icon:`monitoring`,sub:`Traffic and engagement beside your leads.`,ids:{connect:`intg-a-connect`,choose:`intg-a-properties`,sync:`intg-a-sync`,disconnect:`intg-a-disconnect`,panel:`intg-a-picker`},chooseLabel:`Choose properties`,idleDesc:`Connect a Google account with access to your GA4 property. Traffic and engagement line up against your magnet leads.`,brokenDesc:`The connection stopped working. Reconnect to resume daily metric refreshes.`,reachDesc:e=>`This connection can reach <b>${e}</b> GA4 propert${e===1?`y`:`ies`}. Choose which ones feed reporting; metrics refresh daily.`,noneDesc:`Connected, but no GA4 properties are reachable from this Google account. Reconnect with an account that has Analytics access.`,reachableCount:e=>e?.properties?.length||0},picker:{path:`properties`,itemsField:`properties`,saveField:`property_ids`,dataAttr:`intg-prop`,datasetKey:`intgProp`,ids:{cancel:`intg-a-picker-cancel`,save:`intg-a-picker-save`},loading:`Loading your GA4 properties…`,loadError:`Could not load your GA4 properties. Try again, or reconnect if this keeps happening.`,heading:`Properties that feed reporting`,emptyMsg:`No GA4 properties are reachable from this Google account.`,namePrefix:`Property `,rowDisabled:()=>!1,rowBadge:e=>e.account||``,savedToast:e=>`${e} propert${e===1?`y`:`ies`} linked. First sync is running.`,saveError:`Could not save property selection.`},sync:{itemsField:`properties`,failedToast:e=>`Sync finished with ${e} property error${e===1?``:`s`}.`}},calendly:{slug:`calendly`,urlSlug:`calendly`,label:`Calendly`,logo:`integrations/calendly.svg`,connect:{fallbackError:`Could not start the Calendly connection.`},disconnect:{confirm:`Magnet booking falls back to the built-in scheduler and booking sync stops.`,toast:`Calendly disconnected.`},card:{tint:`accent`,icon:`event`,sub:`Bookings on your magnets.`,ids:{connect:`intg-c-connect`,disconnect:`intg-c-disconnect`},idleDesc:`Connect Calendly and your magnets book real meetings: the Book button opens your calendar in the conversation, and confirmed bookings land on the lead automatically.`,brokenDesc:`The connection stopped working. Reconnect to resume booking sync.`}},callrail:{slug:`callrail`,urlSlug:`callrail`,label:`CallRail`,logo:`integrations/callrail.svg`,disconnect:{confirm:`Calls stop landing in your Leads inbox.`,toast:`CallRail disconnected.`},card:{tint:`info`,icon:`call`,sub:`Calls in your leads inbox.`,ids:{connect:`intg-r-connect`,sync:`intg-r-sync`,disconnect:`intg-r-disconnect`,setup:`intg-r-setup`},idleDesc:`Paste a CallRail API key and tracked phone calls land in your Leads inbox, with the caller, source, and recording on the lead.`,brokenDesc:`The connection stopped working. Reconnect with a current CallRail API key.`}}},Fs=[{label:`HubSpot`,logo:`integrations/hubspot.svg`,icon:`hub`,sub:`Leads into your CRM.`},{label:`Zapier`,logo:`integrations/zapier.svg`,icon:`bolt`,sub:`Anything into anything.`}],Is=Object.fromEntries(Object.values(Ps).map(e=>[e.urlSlug,e.slug])),Ls=e=>{let t=document.getElementById(`intg-r-status`);t&&(t.textContent=e)},Rs=!1})),Bs=c({default:()=>Xs,init:()=>Hs,render:()=>Vs});function Vs(){return Cs(),hi(),M()?bi({section:`settings-integrations`,title:`Integrations`,description:`Pick a client to manage their connections.`}):`
    <div class="page-shell" data-section="settings-integrations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Integrations</h1>
          <p class="page-description">Connected accounts for this workspace.</p>
        </div>
      </div>
      <div id="intg-body">
        <div class="dashboard-card intg-card"><div class="card-body">${ks(`hourglass_empty`,`Loading…`)}</div></div>
      </div>
    </div>`}async function Hs(){if(M()){let e=e=>Number(e||0).toLocaleString();return xi(I(),[{h:`Magnets`,td:t=>`${e(t.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${e(t.magnets.total)}</span>`},{h:`Leads · wk`,td:t=>e(t.leads.this_week)}],{emptyMsg:`No client orgs yet. Create one under Clients first.`})}Us()||await Ws()}function Us(){try{let e=new URLSearchParams(window.location.search),t=e.get(`connected`),n=e.get(`error`)?e.get(`provider`)||`google_ads`:null,r=null;if(t&&Object.hasOwn(Ys,t))Es(`${Ys[t]} connected.`,`success`),as({slug:t,connected:!0}),r=Object.hasOwn(Ps,t)?Ps[t]:null;else if(n){let t=Object.hasOwn(Ys,n)?Ys[n]:n;Es(`${t} connection failed (${e.get(`error`)}).`,`error`),r=Object.hasOwn(Ps,n)?Ps[n]:null}else return!1;return window.history.replaceState(null,``,window.location.pathname+window.location.hash),r?(window.router?.navigate(`/settings/integrations/${r.urlSlug}`),!0):!1}catch{return!1}}async function Ws(){let e=document.getElementById(`intg-body`);try{let{denied:t,providers:n,configured:r}=await ds();if(t){e&&(e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${ks(`lock`,`Integrations are managed by workspace admins.`)}</div></div>`);return}e&&(e.innerHTML=Js(n,r))}catch{e&&(e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${ks(`error`,`Could not load integrations.`)}</div></div>`)}}function Gs(e,t,n){let r=ls(e,t,n);return`
    <a class="intg-tile" href="#/settings/integrations/${e.urlSlug}" data-provider="${e.slug}">
      <div class="intg-tile__head">
        ${ss(e)}
        <div class="intg-tile__titles">
          <div class="intg-tile__name">${F(e.label)}</div>
          <div class="intg-tile__sub">${F(e.card.sub)}</div>
        </div>
      </div>
      <p class="intg-tile__desc">${F(Ks(e,t,r))}</p>
      <div class="intg-tile__foot">
        ${us(r,t)}
        <span class="intg-tile__go material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </div>
    </a>`}function Ks(e,t,n){if(n===`connected`){let n=t?.external_account||{};if(e.slug===`calendly`)return n.name?`Connected as ${n.name}.`:`Connected.`;if(e.slug===`callrail`){let e=[n.account_name,n.company_name].filter(Boolean).join(` · `);return e?`Connected to ${e}.`:`Connected.`}let r=e.card.reachableCount(n);return r?`${r} ${e.slug===`google_analytics`?r===1?`property`:`properties`:r===1?`account`:`accounts`} feeding reporting.`:`Connected.`}return n===`broken`?`The connection stopped working. Open to reconnect.`:e.card.idleDesc.split(`. `)[0]+`.`}function qs(e){return`
    <div class="intg-tile intg-tile--soon" aria-disabled="true">
      <div class="intg-tile__head">
        <span class="intg-mark">
          <img class="intg-logo" src="${F(e.logo)}" alt="" loading="lazy"
               onerror="this.style.display='none';this.parentElement.querySelector('.intg-logo-fallback').style.display=''">
          <span class="material-symbols-outlined intg-logo-fallback" aria-hidden="true" style="display:none">${e.icon}</span>
        </span>
        <div class="intg-tile__titles">
          <div class="intg-tile__name">${F(e.label)}</div>
          <div class="intg-tile__sub">${F(e.sub)}</div>
        </div>
      </div>
      <div class="intg-tile__foot"><span class="intg-state">Coming soon</span></div>
    </div>`}function Js(e,t){return`<div class="intg-grid">${Object.values(Ps).map(n=>Gs(n,cs(e,n.slug),!!t?.[n.slug])).join(``)}${Fs.length?`<div class="intg-grid__soon-label">Coming soon</div>${Fs.map(qs).join(``)}`:``}</div>`}var Ys,Xs,Zs=o((()=>{zs(),ki(),Ys=Object.fromEntries(Object.values(Ps).filter(e=>e.connect).map(e=>[e.slug,e.label])),Xs={render:Vs,init:Hs}})),Qs=c({default:()=>mc,init:()=>ec,render:()=>$s});function $s({provider:e}={}){Cs(),hi();let t=Is[e];if(!t||M())return`<div class="page-shell"></div>`;let n=Ps[t];return L.provider=n,`
    <div class="page-shell" data-section="settings-integrations">
      <a class="intg-back" href="#/settings/integrations"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:16px">arrow_back</span>All integrations</a>
      <div id="intg-detail">
        <div class="dashboard-card intg-card"><div class="card-body">${ks(`hourglass_empty`,`Loading…`)}</div></div>
      </div>
    </div>`}async function ec({provider:e}={}){let t=Is[e];if(!t||M()){window.router?.navigate(`/settings/integrations`,{historyAPIMethod:`replaceState`});return}await tc();let n=os();n?.connected&&n.slug===t&&L.provider?.picker&&Os()&&hs(L.provider,{refresh:tc})}async function tc(){let e=document.getElementById(`intg-detail`);if(!(!e||!L.provider))try{let{denied:t,providers:n,configured:r}=await ds();if(t){e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${ks(`lock`,`Integrations are managed by workspace admins.`)}</div></div>`;return}L.conn=cs(n,L.provider.slug),L.configured=!!r?.[L.provider.slug],L.status=ls(L.provider,L.conn,L.configured),e.innerHTML=nc(),uc()}catch{e.innerHTML=`<div class="dashboard-card intg-card"><div class="card-body">${ks(`error`,`Could not load this integration.`)}</div></div>`}}function nc(){let e=L.provider;return[ic(e),ac(e),oc(e),cc(e),lc(e)].filter(Boolean).join(``)}function rc(e){let t=L.conn?.external_account||{};if(L.status!==`connected`)return e.card.sub;if(e.slug===`calendly`){let e=[t.name,t.email&&`(${t.email})`].filter(Boolean).join(` `);return e?`Connected as ${e}.`:`Connected.`}if(e.slug===`callrail`){let e=[t.account_name,t.company_name].filter(Boolean).join(` · `);return e?`Connected to ${e}.`:`Connected.`}let n=e.card.reachableCount(t);return n?`${n} reachable ${e.slug===`google_analytics`?n===1?`property`:`properties`:n===1?`account`:`accounts`}.`:`Connected.`}function ic(e){let t=``;Os()&&(e.connect&&(L.status===`idle`||L.status===`broken`)&&L.configured&&(t=`<button type="button" class="intg-btn primary" id="${e.card.ids.connect}"><span class="material-symbols-outlined" aria-hidden="true">link</span>${L.status===`broken`?`Reconnect`:`Connect`}</button>`),e.slug===`callrail`&&L.status!==`connected`&&(t=`<button type="button" class="intg-btn primary" id="${e.card.ids.connect}"><span class="material-symbols-outlined" aria-hidden="true">link</span>${L.status===`broken`?`Reconnect`:`Connect`}</button>`));let n;return n=L.status===`unavailable`?`${e.label} is being set up for this platform.`:L.status===`broken`?e.card.brokenDesc:L.status===`idle`?Os()?e.card.idleDesc:e.card.sub:rc(e),`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="intg-hero">
          ${ss(e,{size:`hero`})}
          <div class="intg-hero__meta">
            <div class="intg-hero__name-row">
              <span class="intg-hero__name">${F(e.label)}</span>
              ${us(L.status,L.conn)}
            </div>
            <div class="intg-hero__sub">${F(e.card.sub)}</div>
          </div>
          <div class="intg-actions">${t}</div>
        </div>
        <p class="intg-desc">${F(n)}</p>
        ${e.slug===`callrail`&&L.status!==`connected`?`<div id="${e.card.ids.setup}" style="display:none"></div>`:``}
      </div>
    </div>`}function ac(e){let t=Ns[e.slug];return t?L.status===`connected`||L.status===`unavailable`||!Os()?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <p class="intg-desc" style="margin-top:0">${F(t.what)}</p>
          <details class="intg-walkthrough">
            <summary>Setup guide</summary>
            <div class="intg-walkthrough__body">
              <ol>${t.steps.map(e=>`<li>${F(e)}</li>`).join(``)}</ol>
            </div>
          </details>
        </div>
      </div>`:`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">checklist</span> Set up ${F(e.label)}</div>
        <p class="intg-desc" style="margin:0 0 10px">${F(t.what)}</p>
        <ol class="intg-steps">
          ${t.steps.map((e,t)=>`
            <li class="intg-step${t===0?` intg-step--current`:``}">
              <span class="intg-step__num">${t+1}</span>
              <span class="intg-step__text">${F(e)}</span>
            </li>`).join(``)}
        </ol>
      </div>
    </div>`:``}function oc(e){if(L.status!==`connected`)return``;let t=Os();if(e.picker){let n=e.card.reachableCount(L.conn?.external_account);return`
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
          <div id="intg-g-convactions">${As(`Loading conversion actions…`)}</div>
        </div>
      </div>`:``}`}return e.slug===`calendly`?t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">event_available</span> Booking</div>
          <p class="intg-desc" style="margin:0 0 6px">Turn on Calendly booking per magnet under Magnets, in the Book call-to-action. These event types are available:</p>
          <div id="intg-c-events">${As(`Loading event types…`)}</div>
        </div>
      </div>`:``:e.slug===`callrail`&&t?`
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">call</span> Call tracking</div>
          <p class="intg-desc" style="margin:0 0 6px">Tracked calls land in your Leads inbox with the caller, source, and recording. These tracking numbers are active:</p>
          <div id="intg-r-trackers">${As(`Loading tracking numbers…`)}</div>
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${e.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
            <button type="button" class="intg-btn" id="intg-r-replace"><span class="material-symbols-outlined" aria-hidden="true">key</span>Replace API key</button>
          </div>
          <div id="${e.card.ids.setup}" style="display:none"></div>
        </div>
      </div>`:``}function sc(e){if(!e)return``;try{return new Date(e).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`})}catch{return String(e).slice(0,10)}}function cc(e){if(!L.conn)return``;let t=L.conn.webhook||{},n=[];n.push([`Status`,L.status===`connected`?`Active`:L.conn.connect_status===`NEEDS_REAUTH`?`Needs reconnecting`:`Error`]),e.slug===`calendly`&&(n.push([`Booking sync`,t.state===`active`?`On`:`Off (paid Calendly plan required)`]),t.last_received_tz&&n.push([`Last booking received`,sc(t.last_received_tz)])),e.slug===`callrail`&&(n.push([`Call sync`,t.state===`active`?`On`:`Needs attention`]),t.cookie_capture&&n.push([`Session capture`,t.cookie_capture===`active`?`On`:`Needs attention`]),t.last_received_tz&&n.push([`Last call received`,sc(t.last_received_tz)])),L.conn.created?.created_tz&&n.push([`Connected on`,sc(L.conn.created.created_tz)]);let r=e.slug===`calendly`&&L.status===`connected`&&t.state!==`active`?As(`Booking sync is off: webhooks need a paid Calendly plan. Visitors can still book in the magnet; bookings just will not appear on the lead automatically. Reconnect after upgrading to turn it on.`,`error`):e.slug===`callrail`&&L.status===`connected`&&t.state!==`active`?As(`Automatic call sync could not be set up in CallRail. Calls still arrive via the daily sweep and Sync now. Reconnect to retry the setup.`,`error`):``;return`
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="card-title" style="margin-bottom:12px"><span class="material-symbols-outlined" aria-hidden="true">monitor_heart</span> Health</div>
        <dl class="intg-kv">
          ${n.map(([e,t])=>`<dt>${F(e)}</dt><dd>${F(t)}</dd>`).join(``)}
        </dl>
        ${r}
      </div>
    </div>`}function lc(e){return L.status!==`connected`&&L.status!==`broken`||!Os()?``:`
    <div class="dashboard-card intg-card settings-danger">
      <div class="card-body">
        <div class="settings-danger__action">
          <div>
            <div class="settings-item__title">Disconnect ${F(e.label)}</div>
            <div class="settings-item__desc">${F(e.disconnect.confirm)}</div>
          </div>
          <button type="button" class="settings-danger__btn" id="${e.card.ids.disconnect}">Disconnect</button>
        </div>
      </div>
    </div>`}function uc(){let e=L.provider;if(!e)return;let t=tc;e.connect&&document.getElementById(e.card.ids.connect)?.addEventListener(`click`,()=>fs(e)),e.slug===`callrail`&&(document.getElementById(e.card.ids.connect)?.addEventListener(`click`,()=>vs({refresh:t})),document.getElementById(`intg-r-replace`)?.addEventListener(`click`,()=>vs({refresh:t,replaceKey:!0})),document.getElementById(e.card.ids.sync)?.addEventListener(`click`,()=>Ss({refresh:t})),L.status===`connected`&&Os()&&pc()),e.picker&&(document.getElementById(e.card.ids.choose)?.addEventListener(`click`,()=>hs(e,{refresh:t})),document.getElementById(e.card.ids.sync)?.addEventListener(`click`,()=>ps(e,{refresh:t}))),e.slug===`google_ads`&&L.status===`connected`&&Os()&&dc(),e.slug===`calendly`&&L.status===`connected`&&Os()&&fc(),document.getElementById(e.card.ids.disconnect)?.addEventListener(`click`,()=>ms(e,{refresh:t}))}async function dc(){let e=document.getElementById(`intg-g-convactions`);if(e)try{let t=await(await fetch(`${I()}/m5t/v5/integrations/google_ads/conversion_actions`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.actions||[],r=new Set(t.data.selected||[]);if(!n.length){e.innerHTML=As(`No enabled conversion actions in the linked accounts.`);return}e.innerHTML=`
      <div class="intg-ca-list">
        ${n.map(e=>`
          <label class="intg-ca-row">
            <input type="checkbox" value="${F(e.id)}" ${r.has(e.id)?`checked`:``}>
            <span class="intg-ca-name">${F(e.name||e.id)}</span>
            ${e.category?`<span class="intg-ca-cat">${F(String(e.category).toLowerCase().replace(/_/g,` `))}</span>`:``}
          </label>`).join(``)}
      </div>
      <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
        <button type="button" class="intg-btn primary" id="intg-g-ca-save"><span class="material-symbols-outlined" aria-hidden="true">save</span>Save selection</button>
      </div>`,document.getElementById(`intg-g-ca-save`)?.addEventListener(`click`,async()=>{let t=document.getElementById(`intg-g-ca-save`),n=[...e.querySelectorAll(`input[type="checkbox"]:checked`)].map(e=>e.value);t.disabled=!0;try{let e=await(await fetch(`${I()}/m5t/v5/integrations/google_ads/conversion_actions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({conversion_action_ids:n})})).json();if(!e.ok)throw Error(e.error||`save failed`);Es(n.length?`Counting ${n.length} conversion action${n.length===1?``:`s`} in reporting.`:`Conversion counting turned off.`,`success`)}catch(e){Es(e.message||`Could not save the selection.`,`error`)}finally{t.disabled=!1}})}catch{e.innerHTML=As(`Could not load conversion actions. If this keeps happening, reconnect.`,`error`)}}async function fc(){let e=document.getElementById(`intg-c-events`);if(e)try{let t=await(await fetch(`${I()}/m5t/v5/integrations/calendly/event_types`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.event_types||[],r=t.data.scheduling_url?`<div class="intg-ev"><span class="intg-ev__name">Full scheduling page</span><span class="intg-ev__meta">${F(t.data.scheduling_url)}</span></div>`:``;e.innerHTML=n.length||r?`${r}${n.map(e=>`
          <div class="intg-ev">
            <span class="intg-ev__name">${F(e.name)}</span>
            <span class="intg-ev__meta">${e.duration?`${F(String(e.duration))} min`:``}</span>
          </div>`).join(``)}`:As(`No active event types on this Calendly account.`)}catch{e.innerHTML=As(`Could not load event types. If this keeps happening, reconnect.`,`error`)}}async function pc(){let e=document.getElementById(`intg-r-trackers`);if(e)try{let t=await(await fetch(`${I()}/m5t/v5/integrations/callrail/trackers`)).json();if(!t.ok)throw Error(t.error||`load failed`);let n=t.data.trackers||[];e.innerHTML=n.length?n.map(e=>`
          <div class="intg-ev">
            <span class="intg-ev__name">${F(e.name)}</span>
            <span class="intg-ev__meta">${F(e.number)}${e.type===`session`?` · number pool`:``}</span>
          </div>`).join(``):As(`No active tracking numbers in this company yet. Create one in CallRail and it appears here.`)}catch{e.innerHTML=As(`Could not load tracking numbers.`,`error`)}}var L,mc,hc=o((()=>{zs(),ki(),L={provider:null,conn:null,configured:!1,status:`idle`},mc={render:$s,init:ec}})),gc=c({default:()=>zc,init:()=>yc,render:()=>vc});function _c(){if(Fc)return;let e=document.createElement(`style`);e.id=`m5t-security-styles`,e.textContent=`
    .page-shell .pk-row { display: flex; gap: 16px; align-items: center; padding: 14px 4px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
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
  `,document.head.appendChild(e),Fc=!0}function vc(){return _c(),`
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
              <p class="settings-section__desc">Signing in as ${jc(Dc())}. You stay signed in on this device after a change.</p>
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
        <div class="card-body" id="pk-body">${Ic(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function yc(){document.getElementById(`pw-save`)?.addEventListener(`click`,Oc);let e=document.getElementById(`pk-add-btn`);e&&window.PublicKeyCredential&&(e.style.display=``,e.addEventListener(`click`,Tc)),await bc()}async function bc(){let e=document.getElementById(`pk-body`);if(e){try{let e=await fetch(`${Nc()}/m5t/v5/webauthn`),t=await e.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(t.error||`Failed to load`);Pc.passkeys=t.passkeys||[],Pc.loaded=!0}catch(t){console.warn(`[settings-security] load failed:`,t),e.innerHTML=Ic(`error`,`Could not load your passkeys. Please try again.`);return}Cc()}}function xc(e){if(!e)return null;try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return null}}function Sc(e){let t=xc(e.last_used_time),n=e.created?.created_tz,r=xc(n),i=[e.device_type===`multiDevice`?`Syncs across devices`:`This device only`,t?`Last used ${t}`:`Never used to sign in yet`,r?`Added ${r}`:null].filter(Boolean).join(` · `);return`
    <div class="pk-row" data-guid="${jc(e.guid)}">
      <span class="pk-icon"><span class="material-symbols-outlined" aria-hidden="true">passkey</span></span>
      <div class="pk-info">
        <div class="pk-name">${jc(e.device_label||`Passkey`)}</div>
        <div class="pk-meta">${jc(i)}</div>
      </div>
      <button class="pk-btn pk-btn--danger" type="button" data-remove="${jc(e.guid)}">
        <span class="material-symbols-outlined" aria-hidden="true">delete</span> Remove
      </button>
    </div>`}function Cc(){let e=document.getElementById(`pk-body`);if(e){if(!window.PublicKeyCredential){e.innerHTML=`<p class="pk-unsupported">This browser doesn't support passkeys. Your password sign-in still works as usual.</p>`;return}if(!Pc.passkeys.length){e.innerHTML=Ic(`passkey`,`No passkeys yet. Add one for a faster, phishing-resistant sign-in.`);return}e.innerHTML=Pc.passkeys.map(Sc).join(``),e.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>Ec(e.dataset.remove,e))})}}function wc(){try{let e=navigator.userAgent||``,t=/iPhone/.test(e)?`iPhone`:/iPad/.test(e)?`iPad`:/Android/.test(e)?`Android`:/Mac OS X/.test(e)?`Mac`:/Windows/.test(e)?`Windows`:/Linux/.test(e)?`Linux`:`device`,n=/Edg\//.test(e)?`Edge`:/Chrome\//.test(e)?`Chrome`:/Firefox\//.test(e)?`Firefox`:/Safari\//.test(e)?`Safari`:``;return n?`${n} on ${t}`:t}catch{return`Passkey`}}async function Tc(){let e=document.getElementById(`pk-add-btn`);e&&(e.disabled=!0);try{let{startRegistration:e}=await w(async()=>{let{startRegistration:e}=await Promise.resolve().then(()=>(Mt(),jt));return{startRegistration:e}},void 0,import.meta.url),t=await fetch(`${Nc()}/m5t/v5/webauthn/register/options`,{method:`POST`}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`Could not start passkey registration`);let r;try{r=await e({optionsJSON:n.options})}catch(e){if(e?.name===`NotAllowedError`)return;throw e}let i=await fetch(`${Nc()}/m5t/v5/webauthn/register/verify`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({response:r,deviceLabel:wc()})}),a=await i.json().catch(()=>({}));if(!i.ok||!a.ok)throw Error(a.error||`Could not register this passkey`);Mc(`Passkey added`,`success`),await bc()}catch(e){console.warn(`[settings-security] addPasskey failed:`,e),Mc(e.message||`Could not add a passkey`,`danger`)}finally{e&&(e.disabled=!1)}}async function Ec(e,t){if(await ts({title:`Remove this passkey?`,message:`You can always add it back later.`,confirmLabel:`Remove`,danger:!0})){t&&(t.disabled=!0);try{let t=await fetch(`${Nc()}/m5t/v5/webauthn/${encodeURIComponent(e)}`,{method:`DELETE`}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.error||`Could not remove this passkey`);Pc.passkeys=Pc.passkeys.filter(t=>t.guid!==e),Mc(`Passkey removed`,`success`),Cc()}catch(e){console.warn(`[settings-security] removePasskey failed:`,e),Mc(e.message||`Could not remove this passkey`,`danger`),t&&(t.disabled=!1)}}}function Dc(){try{return E.getScope()?.entity?.email||E.getEntity?.()?.email||`your account`}catch{return`your account`}}async function Oc(){let e=document.getElementById(`pw-new`),t=document.getElementById(`pw-confirm`),n=document.getElementById(`pw-save`),r=e?.value||``,i=t?.value||``,a=jr(r);if(a.length){Lc(`Password needs: ${Rc(a)}.`);return}if(r!==i){Lc(`Passwords do not match.`);return}Lc(``),n&&(n.disabled=!0);try{let n=await fetch(`${Nc()}/m5t/v5/acctEntity/resetHash`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({password:r})}),i=await n.json().catch(()=>({}));if(!n.ok||!i.ok)throw Error(i.error||`Could not update your password`);Mc(`Password updated`,`success`),e&&(e.value=``),t&&(t.value=``)}catch(e){Lc(e.message||`Could not update your password.`)}finally{n&&(n.disabled=!1)}}var kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc=o((()=>{D(),kc=u(f(),1),m(),is(),Nr(),Ze(),Ac={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},jc=e=>String(e??``).replace(/[&<>"']/g,e=>Ac[e]),Mc=(e,t=`info`)=>{try{kc.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},Nc=()=>E.getConfig?.().BASE_URL||``,Pc={passkeys:[],loaded:!1},Fc=!1,Ic=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Lc=e=>{let t=document.getElementById(`pw-error`);t&&(t.textContent=e||``,t.hidden=!e)},Rc=e=>e.length<=1?String(e[0]??``):e.length===2?`${e[0]} and ${e[1]}`:`${e.slice(0,-1).join(`, `)}, and ${e[e.length-1]}`,zc={render:vc,init:yc}})),Vc=c({default:()=>ll,init:()=>Yc,render:()=>Jc});function Hc(e){return e&&([e.first_name,e.last_name].filter(Boolean).join(` `).trim()||e.email)||null}function Uc(e){return(e.split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``)||`?`).toUpperCase()}function Wc(e){try{return new Date(e).toLocaleString([],{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}catch{return``}}function Gc(e){try{let t=Math.max(0,(Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}catch{return``}}function Kc(e){return e==null?`—`:e<60?`${e}s`:`${Math.floor(e/60)}m ${String(e%60).padStart(2,`0`)}s`}function qc(){if(ol)return;let e=document.createElement(`style`);e.id=`m5t-convs-styles`,e.textContent=`
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
  `,document.head.appendChild(e),ol=!0}function Jc(){return qc(),hi(),`
    <div class="page-shell" data-section="conversations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Conversations</h1>
          <p class="page-description">${M()?`All conversations across your clients.`:`Every visitor journey through your magnets: completed, in progress, or abandoned.`}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="convs-body">
          ${sl(`hourglass_empty`,`Loading journeys…`)}
        </div>
      </div>
    </div>`}async function Yc(){await Xc()}async function Xc(){let e=document.getElementById(`convs-body`);if(e){try{let[e,t]=await Promise.all([fetch(`${nl()}/m5t/v5/conversations`),fetch(`${nl()}/m5t/v5/magnets`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Failed to load`);if(z.conversations=n.conversations||[],z.counts=n.counts||{},z.book=M(),t){let e=await t.json().catch(()=>({}));z.magnetNames={},z.magnetOwnerNames={};let n=z.book?Si():{};(e.magnets||[]).forEach(e=>{z.magnetNames[e.guid]=e.name,z.book&&(z.magnetOwnerNames[e.guid]=e.owner_name||n[e.owner_guid]||``)})}}catch(t){console.warn(`[conversations] load failed:`,t),e.innerHTML=sl(`error`,`Could not load journeys. Please try again.`);return}$c()}}function Zc(){return z.filter===`ALL`?z.conversations:z.conversations.filter(e=>e.status===z.filter)}function Qc(e){let t=Hc(e.lead),n=z.magnetNames[e.magnet_guid]||`—`,r=il[e.status]||il.ABANDONED,i=e.steps_total?Math.min(100,Math.round((e.steps_reached||0)/e.steps_total*100)):null,a=(e.routes||[]).map(e=>al[e]||e).join(`, `);return`
    <tr class="convs-row" data-session="${R(e.session)}">
      <td>
        <span class="convs-who">
          <span class="convs-ava${t?``:` anon`}">${t?R(Uc(t)):`<span class="material-symbols-outlined" style="font-size:16px">person_off</span>`}</span>
          <span><span class="convs-name">${t?R(t):`<span class="convs-muted">Anonymous visitor</span>`}</span>
            ${e.lead?.email?`<div class="convs-sub">${R(e.lead.email)}</div>`:a?`<div class="convs-sub">Picked: ${R(a)}</div>`:``}</span>
        </span>
      </td>
      ${z.book?`<td>${Oi(z.magnetOwnerNames[e.magnet_guid]||``)||`<span class="convs-muted">—</span>`}</td>`:``}
      <td><span class="convs-sub">${R(n)}</span></td>
      <td><span class="convs-badge" data-s="${R(e.status)}"><span class="material-symbols-outlined" aria-hidden="true">${r.icon}</span>${r.label}</span></td>
      <td>${i==null?`<span class="convs-muted">—</span>`:`<span class="convs-prog"><span class="convs-prog__track"><span class="convs-prog__fill" style="width:${i}%"></span></span><span class="convs-sub">${e.steps_reached}/${e.steps_total}</span></span>`}</td>
      <td class="convs-muted" style="white-space:nowrap" title="${R(Wc(e.started_at))}">${R(Gc(e.started_at))}</td>
      <td class="convs-muted" style="white-space:nowrap">${R(Kc(e.duration_s))}</td>
    </tr>`}function $c(){let e=document.getElementById(`convs-body`);if(!e)return;if(!z.conversations.length){e.innerHTML=sl(`route`,`No journeys yet. As visitors open your magnets, every session, completed or abandoned, appears here.`);return}let t=Zc();e.innerHTML=`
    <div class="convs-bar">
      <div class="convs-filter">
        ${[[`ALL`,`All`],[`COMPLETED`,`Completed`],[`IN_PROGRESS`,`In progress`],[`ABANDONED`,`Abandoned`]].map(([e,t])=>`<button data-filter="${e}" class="${z.filter===e?`active`:``}">${t}${e!==`ALL`&&z.counts[e]?` (${rl(z.counts[e])})`:``}</button>`).join(``)}
      </div>
      <span class="convs-count">${rl(t.length)} of ${rl(z.conversations.length)} (30 days)</span>
    </div>
    <div class="convs-tablewrap">
      <table class="convs-table">
        <thead><tr><th>Visitor</th>${z.book?`<th>Client</th>`:``}<th>Magnet</th><th>Status</th><th>Progress</th><th>Started</th><th>Duration</th></tr></thead>
        <tbody id="convs-tbody">${t.map(Qc).join(``)||`<tr><td colspan="${z.book?7:6}"><div class="convs-muted" style="padding:14px 4px">No ${z.filter.toLowerCase().replace(`_`,` `)} journeys.</div></td></tr>`}</tbody>
      </table>
    </div>`;let n=e.querySelector(`#convs-tbody`);n&&fi(n,{rowSelector:`tr.convs-row`,noun:`journeys`,controlHost:e.querySelector(`.convs-tablewrap`)||n.parentElement}),e.querySelector(`.convs-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(z.filter=t.dataset.filter,$c())}),e.querySelector(`#convs-tbody`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.convs-row`);t&&el(t.dataset.session)})}async function el(e){let t=z.conversations.find(t=>t.session===e);if(!t)return;let n=null;try{n=await(await fetch(`${nl()}/m5t/v5/conversations/${encodeURIComponent(e)}`)).json().catch(()=>null),n?.ok||(n=null)}catch{n=null}let r=Hc(t.lead),i=z.magnetNames[t.magnet_guid]||`—`,a=(n?.events||[]).filter((e,t,n)=>e.event!==`step`||!(n[t+1]&&n[t+1].event===`step`)).map(e=>`
    <div class="convs-tl__item${e.event===`complete`?` done`:``}">
      <span class="convs-tl__dot"></span>
      <div class="convs-tl__label">${R((cl[e.event]||(()=>e.event))(e.detail))}</div>
      <div class="convs-tl__time">${R(Wc(e.at))}${e.variant?` · Variant ${R(e.variant)}`:``}</div>
    </div>`).join(``),o=document.createElement(`div`);o.className=`convs-drawer-scrim`,o.innerHTML=`
    <aside class="convs-drawer" role="dialog" aria-modal="true" aria-label="Journey detail">
      <div class="convs-drawer__head">
        <span class="convs-drawer__title">${r?R(r):`Anonymous visitor`}</span>
        <button class="convs-drawer__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="convs-drawer__body">
        ${r?`<a class="convs-drawer__lead" href="#/leads">
              <span class="convs-ava">${R(Uc(r))}</span>
              <span><div class="convs-name">${R(r)}</div><div class="convs-sub">${R(t.lead?.email||t.lead?.phone||``)}</div></span>
              <span class="material-symbols-outlined" style="margin-left:auto;color:var(--color-text-subtle,#6C7C9A)">chevron_right</span>
            </a>`:`<div class="convs-drawer__anon">This visitor didn’t finish, so no contact details were captured. Answers are only collected when a journey completes.</div>`}
        <div class="convs-sub" style="margin-bottom:6px">${R(i)} · ${R(Kc(t.duration_s))}${t.variant?` · Variant ${R(t.variant)}`:``}</div>
        ${a?`<div class="convs-tl">${a}</div>`:sl(`timeline`,`No timeline available for this journey.`)}
      </div>
    </aside>`,document.body.appendChild(o),requestAnimationFrame(()=>{o.classList.add(`open`),o.querySelector(`.convs-drawer`).classList.add(`open`)});let s=()=>{o.classList.remove(`open`),setTimeout(()=>o.remove(),220)};o.querySelector(`.convs-drawer__close`).addEventListener(`click`,s),o.addEventListener(`click`,e=>{e.target===o&&s()})}var tl,R,nl,rl,z,il,al,ol,sl,cl,ll,ul=o((()=>{D(),ki(),mi(),tl={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},R=e=>String(e??``).replace(/[&<>"']/g,e=>tl[e]),nl=()=>E.getConfig?.().BASE_URL||``,rl=e=>Number(e||0).toLocaleString(),z={conversations:[],counts:{},magnetNames:{},filter:`ALL`,book:!1,magnetOwnerNames:{}},il={COMPLETED:{label:`Completed`,icon:`check_circle`},IN_PROGRESS:{label:`In progress`,icon:`pending`},ABANDONED:{label:`Abandoned`,icon:`highlight_off`}},al={book:`Book`,chat:`Chat`,call:`Call`,email:`Email`,support:`Support`},ol=!1,sl=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,cl={open:()=>`Opened the magnet`,engage:e=>`First interaction${e?`: ${al[e]||e}`:``}`,route:e=>`Picked ${al[e]||e||`a channel`}`,step:e=>`Reached step ${e||``}`,complete:()=>`Completed: lead captured`},ll={render:Jc,init:Yc}})),dl=c({default:()=>Fl,init:()=>ml,render:()=>pl});function fl(){if(Nl)return;let e=document.createElement(`style`);e.id=`m5t-abt-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Nl=!0}function pl(){return M()?bi({section:`ab-testing`,title:`A/B Testing`,description:`Pick a client to view their experiments.`}):(fl(),`
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
      <div id="abt-body">${Pl(`hourglass_empty`,`Loading tests…`)}</div>
    </div>`)}async function ml(){if(M())return xi(kl(),[{h:`Running`,td:e=>Al(e.ab_tests?.running)},{h:`Completed`,td:e=>Al(e.ab_tests?.completed)},{h:`Compl. %`,td:e=>e.completion_rate==null?`—`:`${e.completion_rate}%`}],{emptyMsg:`No client orgs yet. Experiments appear per client once you have one.`});let e=document.getElementById(`abt-body`);try{let e=new Date,t=new Date(e.getTime()-76896e5).toISOString().slice(0,10),n=e.toISOString().slice(0,10),[r,i]=await Promise.all([fetch(`${kl()}/m5t/v5/magnets`),fetch(`${kl()}/m5t/v5/magnets/stats?from=${t}&to=${n}`)]),a=await r.json().catch(()=>({}));if(!a.ok)throw Error(a.message||`Failed to load`);jl.magnets=a.magnets||[],jl.canManage=!!a.canManage;let o=await i.json().catch(()=>({}));jl.stats=o?.stats||{}}catch(t){console.warn(`[ab-testing] load failed:`,t),e&&(e.innerHTML=Pl(`error`,`Could not load your tests. Please try again.`));return}hl()}function hl(){let e=document.getElementById(`abt-body`);if(!e)return;let t=jl.magnets.filter(e=>e.ab?.enabled),n=jl.magnets.filter(e=>!e.ab?.enabled&&e.ab?.declared);if(!t.length&&!n.length){e.innerHTML=Pl(`science`,`No experiments yet. Open a magnet on Your Magnets → Edit → “A/B experiment”, give variant B a change, and results appear here.`);return}e.innerHTML=(t.length?`<div class="abt-sect">Running</div>${t.map(bl).join(``)}`:``)+(n.length?`<div class="abt-sect">Completed Tests</div>${n.map(xl).join(``)}`:``),e.querySelectorAll(`[data-declare]`).forEach(e=>e.addEventListener(`click`,()=>Sl(e.dataset.declare,e.dataset.winner)))}function gl(e){let t=jl.stats[e.guid]?.variants||{};return{A:{opens:0,engaged:0,completions:0,rate:null,...t.A||{}},B:{opens:0,engaged:0,completions:0,rate:null,...t.B||{}}}}function _l(e){let t=Object.keys(e?.b||{}).map(e=>Ml[e]||e);return t.length?`Changes: ${t.join(`, `)}`:``}function vl(e){try{return Math.max(0,Math.floor((Date.now()-new Date(e).getTime())/864e5))}catch{return null}}function yl(e,t,n,r,i,a){return`
    <div class="abt-variant${i?` leader`:``}">
      <div class="abt-vhead"><span class="abt-vname">${Dl(e)}</span><span class="abt-vtag${i?` win`:``}">${Dl(t)}</span></div>
      ${n?`<div class="abt-vdesc">${Dl(n)}</div>`:``}
      <div class="abt-mrow"><span class="k">Visitors</span><span class="v">${Al(r.opens)}</span></div>
      <div class="abt-mrow"><span class="k">Completions</span><span class="v">${Al(r.completions)}</span></div>
      <div class="abt-mrow hl"><span class="k">Conversion Rate</span><span class="v">${r.rate==null?`—`:r.rate+`%`}${a?`<span class="abt-improve">${a}</span>`:``}</span></div>
    </div>`}function bl(e){let t=e.ab,{A:n,B:r}=gl(e),i=(r.rate??-1)>(n.rate??-1)?`B`:(n.rate??-1)>(r.rate??-1)?`A`:null,a=i&&n.rate!=null&&r.rate!=null?`+${Math.round(Math.abs(r.rate-n.rate)*10)/10}%`:``,o=Cl(n,r),s=t.started_tz?vl(t.started_tz):null,c=(n.opens||0)+(r.opens||0),l=t.split||50;return`
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${Dl(e.name)}</h2>
        <span class="abt-status running"><span class="pulse-dot"></span>Running</span>
        <div class="abt-actions">
          ${jl.canManage&&i?`<button class="btn btn-primary" type="button" data-declare="${Dl(e.guid)}" data-winner="${i}"><span class="material-symbols-outlined" aria-hidden="true">emoji_events</span>Declare Winner</button>`:``}
        </div>
      </div>
      <div class="abt-meta">
        ${s==null?``:`<span><span class="material-symbols-outlined" aria-hidden="true">schedule</span>Started ${s===0?`today`:`${s} day${s===1?``:`s`} ago`}</span>`}
        <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span>${Al(c)} total visitors</span>
        <span><span class="material-symbols-outlined" aria-hidden="true">swap_horiz</span>${100-l}/${l} traffic split</span>
      </div>
      <div class="abt-compare">
        ${yl(`Variant A`,`Control`,`The magnet as configured`,n,i===`A`,i===`A`?a:``)}
        <div class="abt-vs">VS</div>
        ${yl(`Variant B`,i===`B`?`Leading`:`Challenger`,_l(t),r,i===`B`,i===`B`?a:``)}
      </div>
      <div class="abt-sig">
        <div class="abt-sig__bar"><div class="abt-sig__fill${o!=null&&o>=95?` sig`:``}" style="width:${o==null?0:Math.min(100,o)}%"></div></div>
        <div class="abt-sig__text">
          <span class="material-symbols-outlined" aria-hidden="true">${o!=null&&o>=95?`check_circle`:`hourglass_top`}</span>
          ${o==null?`<span>Not enough data yet. Confidence appears after ~30 visitors per variant.</span>`:`<span><strong>${o}% Statistical Confidence</strong>: results ${o>=95?`are statistically significant`:`are not yet significant; keep it running`}</span>`}
        </div>
      </div>
    </div>`}function xl(e){let t=e.ab.declared,n=t.A?.opens?t.A.completions/t.A.opens*100:null,r=t.B?.opens?t.B.completions/t.B.opens*100:null,i=n!=null&&r!=null&&Math.min(n,r)>0?Math.round(Math.abs(r-n)/Math.min(n,r)*100):null,a=e.ab.started_tz&&t.tz?Math.max(1,Math.round((new Date(t.tz)-new Date(e.ab.started_tz))/864e5)):null,o=(t.A?.opens||0)+(t.B?.opens||0);return`
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${Dl(e.name)}</h2>
        <span class="abt-status completed"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:14px">check_circle</span>Completed</span>
      </div>
      <div class="abt-summary">
        <span><span class="k">Winner:</span><span class="v">Variant ${Dl(t.winner)}</span></span>
        ${i==null?``:`<span><span class="k">Improvement:</span><span class="v pos">+${i}%</span></span>`}
        ${a==null?``:`<span><span class="k">Duration:</span><span class="v">${a} day${a===1?``:`s`}</span></span>`}
        <span><span class="k">Total Visitors:</span><span class="v">${Al(o)}</span></span>
      </div>
    </div>`}async function Sl(e,t){let n=jl.magnets.find(t=>t.guid===e);if(n&&window.confirm(`Declare Variant ${t} the winner for “${n.name}”?\n\n${t===`B`?`Variant B’s changes become the magnet’s configuration for everyone.`:`The magnet keeps its current configuration.`} The experiment ends and moves to Completed.`)){try{let n=await(await fetch(`${kl()}/m5t/v5/magnets/${encodeURIComponent(e)}/ab/declare`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({winner:t})})).json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Declare failed`);Ol(`Variant ${t} declared the winner`,`success`)}catch(e){Ol(e.message||`Could not declare a winner`,`danger`);return}try{await ml()}catch(e){console.warn(`[ab-testing] refresh after declare failed:`,e)}}}function Cl(e,t){let n=e.opens||0,r=t.opens||0,i=e.completions||0,a=t.completions||0;if(n<30||r<30||i+a<5)return null;let o=i/n,s=a/r,c=(i+a)/(n+r),l=Math.sqrt(c*(1-c)*(1/n+1/r));if(!l)return null;let u=Math.abs(s-o)/l;return Math.round(2*(wl(u)-.5)*1e3)/10}function wl(e){let t=1/(1+.2316419*Math.abs(e)),n=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return e>0?1-n:n}var Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il=o((()=>{D(),Tl=u(f(),1),m(),ki(),El={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Dl=e=>String(e??``).replace(/[&<>"']/g,e=>El[e]),Ol=(e,t=`info`)=>{try{Tl.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},kl=()=>E.getConfig?.().BASE_URL||``,Al=e=>Number(e||0).toLocaleString(),jl={magnets:[],stats:{},canManage:!1},Ml={mag_title:`header title`,mag_subtitle:`subtitle`,mag_welcome:`welcome message`,mag_theme_color:`color`,mag_launcher_label:`launcher label`},Nl=!1,Pl=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Fl={render:pl,init:ml}}));function Ll(e,t){let n={};return Object.keys(e&&typeof e==`object`?e:{}).forEach(r=>{t.includes(r)||(n[r]=e[r])}),Object.keys(n).length?n:null}function Rl(e){return Ll(e,Eu)}function zl(e,t){let n=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(e||``).trim());return n?`rgba(${parseInt(n[1],16)},${parseInt(n[2],16)},${parseInt(n[3],16)},${t})`:`rgba(0,114,186,${t})`}function Bl(){if(ku)return;let e=document.createElement(`style`);e.id=`m5t-flow-styles`,e.textContent=`
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
  `,document.head.appendChild(e),ku=!0}function Vl(e=`single_select`){return{_uid:Bu(),id:``,step_type:e,step_prompts:[``],step_options:bu(e)?[{label:``,goto:``,icon:``},{label:``,goto:``,icon:``}]:[],step_columns:wu(e)?[wu(e)]:[],step_description:``,step_config:Su(e)?Tu():null}}function Hl(e){return(Array.isArray(e)?e:[]).map(e=>({_uid:Bu(),id:e.id==null?``:String(e.id),step_type:gu[e.step_type]?e.step_type:`single_select`,step_prompts:Array.isArray(e.step_prompts)?e.step_prompts.map(String):[],step_options:(Array.isArray(e.step_options)?e.step_options:[]).map(e=>({label:e&&e.label!=null?String(e.label):``,goto:e&&e.goto!=null?String(e.goto):``,icon:e&&e.icon!=null?String(e.icon):``})),step_columns:Array.isArray(e.step_columns)?e.step_columns.map(String):[],step_description:e.step_description==null?``:String(e.step_description),step_config:Su(e.step_type)?{...Tu(),...e.step_config&&typeof e.step_config==`object`?e.step_config:{}}:e.step_config&&typeof e.step_config==`object`?{...e.step_config}:null}))}function Ul(){return[{_uid:Bu(),id:``,step_type:`text`,step_prompts:[`Great, and your name?`],step_options:[],step_columns:[`first_name`],step_description:``,step_config:null},{_uid:Bu(),id:``,step_type:`email`,step_prompts:[`The best email to reach you?`],step_options:[],step_columns:[`email`],step_description:``,step_config:null}]}function Wl(e,t){if(e===`book`)return[{_uid:Bu(),id:``,step_type:`scheduler`,step_prompts:[`When works best for you?`],step_options:[],step_columns:[],step_description:``,step_config:Tu()},...Ul()];if(e===`support`){let e=(t.actions||[]).find(e=>e&&e.type===`support`),n=e&&e.config&&Array.isArray(e.config.options)?e.config.options:[],r=n.length?n.map(e=>({label:e&&e.label||String(e),goto:``,icon:e&&e.icon||``})):[`Sales enquiry`,`Support`,`Billing`,`Something else`].map(e=>({label:e,goto:``,icon:``}));return[{_uid:Bu(),id:``,step_type:`multi_select`,step_prompts:[`How can we help you today?`],step_options:r,step_columns:[],step_description:`Select all that apply`,step_config:null},...Ul()]}return[Vl(`single_select`)]}function Gl(e,t){let n=Hl(e===`chat`?t.steps:t.routes&&t.routes[e]);return n.length?n:e===`chat`?[Vl(`single_select`)]:Wl(e,t)}function Kl(e){bu(e.step_type)?e.step_options.length||(e.step_options=[{label:``,goto:``,icon:``},{label:``,goto:``,icon:``}]):e.step_options=[],xu(e.step_type)?!e.step_columns.length&&wu(e.step_type)&&(e.step_columns=[wu(e.step_type)]):e.step_columns=[],e.step_config=Su(e.step_type)?{...Tu(),...e.step_config||{}}:Rl(e.step_config)}function ql(e,t){return`<div class="flow-opt">
    <input class="mag-modal__input flow-o-label" type="text" value="${B(e.label)}" placeholder="Option label">
    <select class="mag-modal__select flow-o-icon" title="Icon">${Ou.map(([t,n])=>`<option value="${B(t)}"${t===e.icon?` selected`:``}>${B(n)}</option>`).join(``)}</select>
    <button class="flow-opt__del" type="button" data-x="delopt" title="Remove choice"${t?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
  </div>`}function Jl(e){let t=_u.map(t=>`<option value="${t}"${t===e.step_type?` selected`:``}>${B(yu(t).label)}</option>`).join(``),n=e.step_options.length<=1;return`<div class="flow-node__body">
    <label class="mag-modal__label">Step type</label>
    <select class="mag-modal__select flow-f-type">${t}</select>

    <label class="mag-modal__label">${e.step_type===`message`?`Message`:`Question`} <span class="flow-sub">one bubble per line</span></label>
    <textarea class="mag-modal__input flow-f-prompts" rows="2" placeholder="${e.step_type===`message`?`Thanks! One moment…`:`What can we help you with?`}">${B(e.step_prompts.join(`
`))}</textarea>

    ${Cu(e.step_type)?`
    <div class="mag-tog-row" style="margin-top:10px">
      <input type="checkbox" class="flow-f-terminal" id="flow-f-terminal-${e._uid}"${e.step_config?.terminal?` checked`:``}>
      <label for="flow-f-terminal-${e._uid}">End the conversation here</label>
    </div>
    ${e.step_config?.terminal?`
    <label class="mag-modal__label">Link label <span class="flow-sub flow-cta-req">optional</span></label>
    <input class="mag-modal__input flow-f-cta-label" type="text" value="${B(e.step_config?.cta?.label||``)}" placeholder="e.g. Visit our site">
    <label class="mag-modal__label">Link URL <span class="flow-sub flow-cta-req">optional</span></label>
    <input class="mag-modal__input flow-f-cta-url" type="url" value="${B(e.step_config?.cta?.url||``)}" placeholder="https://example.com">
    <p class="flow-cta-warn" hidden>Both are needed to show the button — fill in the other one, or clear this one.</p>
    <p class="mag-modal__hint">Fill in both to show a button after this message, or leave both blank to just end the conversation. Opens in a new tab.</p>`:``}`:``}

    ${xu(e.step_type)?`
    <label class="mag-modal__label">Saves to</label>
    <select class="mag-modal__select flow-f-field">
      <option value=""${e.step_columns[0]?``:` selected`} disabled>Choose a lead field…</option>
      ${Le.map(t=>`<option value="${B(t.value)}"${t.value===e.step_columns[0]?` selected`:``}>${B(t.label)}</option>`).join(``)}
    </select>
    <p class="mag-modal__hint">The lead record field this answer fills in — these are the only fields a magnet can actually save to.</p>`:``}

    ${bu(e.step_type)?`
    <label class="mag-modal__label">Choices${e.step_type===`multi_select`?` <span class="flow-sub">visitor can pick several</span>`:``}</label>
    <div class="flow-opts">${e.step_options.map(e=>ql(e,n)).join(``)}</div>
    <button class="mag-flow__addopt" type="button" data-x="addopt"><span class="material-symbols-outlined" aria-hidden="true">add</span> Add choice</button>`:``}

    ${Su(e.step_type)?`
    <label class="mag-modal__label">Meeting label <span class="flow-sub">optional</span></label>
    <input class="mag-modal__input flow-f-mtlabel" type="text" value="${B(e.step_config?.meeting_label||``)}" placeholder="e.g. 15 minute call">
    <div class="mag-modal__row" style="margin-top:8px">
      <div><label class="mag-modal__label">From</label><input class="mag-modal__input flow-f-start" type="time" value="${B(e.step_config?.start||`09:00`)}"></div>
      <div><label class="mag-modal__label">To</label><input class="mag-modal__input flow-f-end" type="time" value="${B(e.step_config?.end||`17:00`)}"></div>
      <div style="flex:0 0 auto"><label class="mag-modal__label">Slot</label>
        <select class="mag-modal__select flow-f-mins">${[15,30,45,60].map(t=>`<option value="${t}"${(e.step_config?.mins||30)===t?` selected`:``}>${t} min</option>`).join(``)}</select></div>
    </div>
    <p class="mag-modal__hint">Visitors pick a day + time within these hours; the choice saves to the field above.</p>`:``}
  </div>`}function Yl(e){let t=e.step_prompts.find(e=>String(e).trim()!==``)||``,n=t?`<div class="flow-node__prompt">“${B(t)}”</div>`:`<div class="flow-node__prompt is-empty">${e.step_type===`message`?`No message yet`:`No question yet`}</div>`,r=``;if(bu(e.step_type)){let t=e.step_options.map(e=>String(e.label).trim()).filter(Boolean);t.length&&(r=`<div class="flow-node__chips">${t.slice(0,4).map(e=>`<span class="flow-node__chip">${B(e)}</span>`).join(``)}${t.length>4?`<span class="flow-node__chip">+${t.length-4}</span>`:``}</div>`)}else if(xu(e.step_type)&&e.step_columns[0]){let t=Le.find(t=>t.value===e.step_columns[0])?.label||e.step_columns[0];r=`<div class="flow-node__meta">Saves to <b>${B(t)}</b></div>`}else if(Cu(e.step_type)&&e.step_config?.terminal){let t=String(e.step_config?.cta?.label||``).trim();r=`<div class="flow-node__meta">Ends the conversation${t?` — link: <b>${B(t)}</b>`:``}</div>`}return`<div class="flow-node__preview">${n}${r}</div>`}function Xl(e,t,n){let r=yu(e.step_type),i=e._uid===Au,a=`--nc:${r.color};--nct:${zl(r.color,.14)}`;return`<div class="flow-node${i?` flow-node--open`:``}" data-uid="${e._uid}" style="${a}"${i?``:` draggable="true"`}>
    <div class="flow-node__hd">
      <span class="flow-node__grip" title="${i?``:`Drag to reorder`}"><span class="material-symbols-outlined" aria-hidden="true">${i?`expand_less`:`drag_indicator`}</span></span>
      <span class="flow-node__ico"><span class="material-symbols-outlined" aria-hidden="true">${r.icon}</span></span>
      <span class="flow-node__type">${B(r.label)}</span>
      <span class="flow-node__n">Step ${t+1}</span>
      <span class="flow-node__tools">
        <button type="button" data-x="up" title="Move up"${t===0?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span></button>
        <button type="button" data-x="down" title="Move down"${t===n-1?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span></button>
        <button type="button" data-x="del" title="Delete step"${n===1?` disabled`:``}><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </span>
    </div>
    ${i?Jl(e):Yl(e)}
  </div>`}function Zl(){let e=document.getElementById(`flow-nodes`);if(!e)return;let t=V.length,n=[`<div class="flow-start"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Conversation starts</div>`,Vu];V.forEach((e,r)=>{n.push(Xl(e,r,t)),r<t-1&&n.push(Vu)}),e.innerHTML=n.join(``)}function Ql(){let e=document.querySelector(`.flow-node--open`);if(!e)return;let t=V.find(t=>t._uid===e.dataset.uid);if(!t)return;let n=e.querySelector(`.flow-f-type`);n&&(t.step_type=n.value);let r=e.querySelector(`.flow-f-prompts`);r&&(t.step_prompts=r.value.split(`
`));let i=e.querySelector(`.flow-f-field`);if(t.step_columns=i&&i.value.trim()?[i.value.trim()]:[],bu(t.step_type)){let n=t.step_options,r=[];e.querySelectorAll(`.flow-opt`).forEach((e,t)=>{r.push({label:e.querySelector(`.flow-o-label`)?.value??``,icon:e.querySelector(`.flow-o-icon`)?.value??``,goto:n[t]&&n[t].goto||``})}),t.step_options=r}else t.step_options=[];if(Su(t.step_type)){let n=e.querySelector(`.flow-f-mtlabel`),r=e.querySelector(`.flow-f-start`),i=e.querySelector(`.flow-f-end`),a=e.querySelector(`.flow-f-mins`);t.step_config={...t.step_config||Tu(),...n?{meeting_label:n.value.trim()}:{},...r&&r.value?{start:r.value}:{},...i&&i.value?{end:i.value}:{},...a?{mins:parseInt(a.value,10)||30}:{}}}else if(Cu(t.step_type)){let n=e.querySelector(`.flow-f-terminal`);if(n){let r=e.querySelector(`.flow-f-cta-label`),i=e.querySelector(`.flow-f-cta-url`),a=Ll(t.step_config,Du)||{};t.step_config=n.checked?{...a,terminal:!0,cta:{label:r?r.value:``,url:i?i.value:``}}:Ll(t.step_config,Du)}}else t.step_config=Rl(t.step_config)}function $l(){document.querySelectorAll(`.flow-node.drop-before, .flow-node.drop-after`).forEach(e=>e.classList.remove(`drop-before`,`drop-after`))}function eu(){$l(),document.querySelectorAll(`.flow-node.dragging`).forEach(e=>e.classList.remove(`dragging`)),Mu=null,Nu=null}function tu(e=V){if(!e.length)return{message:`Add at least one step.`,uid:null,field:null};for(let t=0;t<e.length;t++){let n=e[t],r=t+1,i=(e,t=null)=>({message:e,uid:n._uid,field:t});if(!n.step_prompts.some(e=>String(e).trim()!==``))return i(`Step ${r}: add what the magnet should say.`,`prompts`);if(bu(n.step_type)&&!n.step_options.some(e=>String(e.label).trim()!==``))return i(`Step ${r}: add at least one choice.`,`options`);if(xu(n.step_type)&&!n.step_columns.length)return i(`Step ${r}: choose which field this answer saves to.`,`field`);if(Cu(n.step_type)&&n.step_config?.terminal){let e=String(n.step_config.cta?.label||``).trim(),t=String(n.step_config.cta?.url||``).trim();if(!!e!=!!t)return i(`Step ${r}: fill in both the link label and URL, or leave both blank.`,`cta`)}}return null}function nu(e){if(!e)return;let t=e.querySelector(`.flow-f-cta-label`),n=e.querySelector(`.flow-f-cta-url`);if(!t||!n)return;let r=t.value.trim()!==``,i=n.value.trim()!==``,a=r||i,o=r!==i;e.querySelectorAll(`.flow-cta-req`).forEach(e=>{e.textContent=a?`required`:`optional`,e.classList.toggle(`flow-sub--req`,a)}),t.classList.toggle(`flow-f-invalid`,o&&!r),n.classList.toggle(`flow-f-invalid`,o&&!i);let s=e.querySelector(`.flow-cta-warn`);s&&(s.hidden=!o)}function ru(e=V){let t=0;return e.forEach(e=>{let n=parseInt(e.id,10);!isNaN(n)&&n>t&&(t=n)}),e.map(e=>{let n=e.id&&String(e.id).trim()?String(e.id):String(++t),r=bu(e.step_type)?e.step_options.map(e=>{let t={label:String(e.label).trim(),goto:String(e.goto||``)};return e.icon&&(t.icon=String(e.icon)),t}).filter(e=>e.label!==``):[],i={id:n,step_type:e.step_type,step_prompts:e.step_prompts.map(e=>String(e)).filter(e=>e.trim()!==``),step_options:r,step_columns:e.step_columns.slice(),step_description:e.step_description||``};if(Su(e.step_type))e.step_config&&(i.step_config={...Tu(),...e.step_config});else if(e.step_config&&Object.keys(e.step_config).length){let t={...e.step_config};if(Cu(e.step_type)&&t.terminal){let e=String(t.cta?.label??``).trim(),n=String(t.cta?.url??``).trim();e&&n?t.cta={label:e,url:n}:delete t.cta}i.step_config=t}return i})}function iu(e,t,n){Bl(),Lu=t,Ru=typeof n==`function`?n:null,zu=t?.modified_tz||``,Iu=[`chat`,...[`book`,`support`].filter(e=>(t.actions||[]).some(t=>t&&t.type===e))],Fu={chat:Gl(`chat`,t)},Pu=`chat`,V=Fu.chat,Au=V.length===1?V[0]._uid:null,Mu=null,Nu=null,e.innerHTML=`
    <p class="mag-modal__hint" style="margin-top:0">Each card is one thing your magnet asks. Drag a card to reorder, click to edit, add steps from the palette below.</p>
    ${Iu.length>1?`<div class="flow-routes"><span class="flow-routes__lbl">Editing flow</span><select class="mag-modal__select" id="flow-route">${Iu.map(e=>`<option value="${e}">${B(vu[e]||e)}</option>`).join(``)}</select></div>`:``}
    <p class="mag-modal__error" id="flow-error"></p>
    <div class="flow-canvas" id="flow-nodes"></div>
    <div class="flow-palette">
      <p class="flow-palette__t">Add a step</p>
      <div class="flow-palette__grid" id="flow-palette">
        ${_u.map(e=>{let t=yu(e);return`<button class="flow-palette__chip" type="button" data-type="${e}" style="--pc:${t.color}"><span class="material-symbols-outlined" aria-hidden="true">${t.icon}</span>${B(t.label)}</button>`}).join(``)}
      </div>
    </div>`,Zl(),su(e)}function au(){Ru&&Ru()}function ou(){let e=document.getElementById(`flow-error`);e&&(e.textContent=``)}function su(e){let t=e.querySelector(`#flow-nodes`),n=e.querySelector(`#flow-route`);n?.addEventListener(`change`,()=>{Ql(),Pu=n.value,Fu[Pu]||(Fu[Pu]=Gl(Pu,Lu)),V=Fu[Pu],Au=V.length===1?V[0]._uid:null,ou(),Zl()});let r=e=>{ou();let t=Au;Ql(),Au=Au===e?null:e,t&&au(),Zl()};t.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-x]`),n=e.target.closest(`.flow-node`);if(!n)return;let i=V.findIndex(e=>e._uid===n.dataset.uid);if(!(i<0)){if(t){let e=t.dataset.x;if(ou(),Ql(),e===`up`&&i>0)[V[i-1],V[i]]=[V[i],V[i-1]],au(),Zl();else if(e===`down`&&i<V.length-1)[V[i+1],V[i]]=[V[i],V[i+1]],au(),Zl();else if(e===`del`&&V.length>1)Au===n.dataset.uid&&(Au=null),V.splice(i,1),au(),Zl();else if(e===`addopt`)V[i].step_options.push({label:``,goto:``,icon:``}),au(),Zl();else if(e===`delopt`){let e=t.closest(`.flow-opt`),n=Array.from(e.parentNode.children).indexOf(e);V[i].step_options.length>1&&n>=0&&(V[i].step_options.splice(n,1),au(),Zl())}return}e.target.closest(`.flow-node__body`)||(e.target.closest(`.flow-node__hd`)||e.target.closest(`.flow-node__preview`))&&r(n.dataset.uid)}}),t.addEventListener(`input`,e=>{!e.target.classList?.contains(`flow-f-cta-label`)&&!e.target.classList?.contains(`flow-f-cta-url`)||(ou(),nu(e.target.closest(`.flow-node`)))}),t.addEventListener(`change`,e=>{e.stopPropagation();let t=e.target.classList.contains(`flow-f-type`),n=e.target.classList.contains(`flow-f-terminal`);if(!(!t&&!n)){if(ou(),Ql(),t){let t=V.find(t=>t._uid===e.target.closest(`.flow-node`)?.dataset.uid);t&&Kl(t)}au(),Zl()}}),t.addEventListener(`dragstart`,e=>{let t=e.target.closest(`.flow-node`);if(!(!t||t.getAttribute(`draggable`)!==`true`)){Mu=t.dataset.uid,e.dataTransfer.effectAllowed=`move`;try{e.dataTransfer.setData(`text/plain`,Mu)}catch{}requestAnimationFrame(()=>t.classList.add(`dragging`))}}),t.addEventListener(`dragover`,e=>{if(!Mu)return;e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.target.closest(`.flow-node`);if($l(),!t||t.dataset.uid===Mu){Nu=null;return}let n=t.getBoundingClientRect(),r=e.clientY>n.top+n.height/2;t.classList.add(r?`drop-after`:`drop-before`),Nu={uid:t.dataset.uid,after:r}}),t.addEventListener(`drop`,e=>{if(!Mu||!Nu){eu();return}e.preventDefault(),ou(),Ql();let t=V.findIndex(e=>e._uid===Mu);if(t<0){eu();return}let[n]=V.splice(t,1),r=V.findIndex(e=>e._uid===Nu.uid);if(r<0){V.splice(t,0,n),eu();return}V.splice(Nu.after?r+1:r,0,n),au(),eu(),Zl()}),t.addEventListener(`dragend`,eu),e.querySelector(`#flow-palette`).addEventListener(`click`,e=>{let n=e.target.closest(`[data-type]`);if(!n)return;ou(),Ql();let r=Vl(n.dataset.type);V.push(r),Au=r._uid,au(),Zl(),t.lastElementChild?.scrollIntoView({behavior:`smooth`,block:`nearest`})})}function cu(){Ql();for(let e of Object.keys(Fu)){let t=tu(Fu[e]);if(t)return{route:e,message:(Iu.length>1?`${vu[e]||e}: `:``)+t.message,uid:t.uid,field:t.field}}return null}function lu(e,t,n={}){let{uid:r=null,field:i=null}=n;if(Fu[e]){Ql(),Pu=e,V=Fu[e],Au=r&&V.some(e=>e._uid===r)?r:null;let t=document.getElementById(`flow-route`);t&&(t.value=e),Zl()}let a=document.getElementById(`flow-error`);if(a&&(a.textContent=t||``),!r)return;let o=document.querySelector(`.flow-node[data-uid="${r}"]`);if(o&&(o.scrollIntoView?.({behavior:`smooth`,block:`center`}),i===`cta`)){nu(o);let e=o.querySelector(`.flow-f-cta-label`),t=o.querySelector(`.flow-f-cta-url`);(e&&e.value.trim()===``?e:t)?.focus?.()}}async function uu(e){if(zu)try{let t=((await(await fetch(`${mu()}/m5t/v5/magnets`)).json().catch(()=>({}))).magnets||[]).find(t=>t.guid===e);if(!t||!t.modified_tz||t.modified_tz===zu)return;if(!confirm(`This magnet was edited elsewhere since you opened it — saving now may overwrite those changes. Save anyway?`))throw Error(`Save cancelled — this magnet was edited elsewhere.`);zu=t.modified_tz}catch(e){if(e.message&&e.message.indexOf(`Save cancelled`)===0)throw e;console.warn(`[magnet-flow] save-conflict check failed, proceeding without it:`,e)}}async function du(e){await uu(e),Ql();for(let t of Object.keys(Fu)){let n=t===`chat`?{steps:ru(Fu[t])}:{route:t,steps:ru(Fu[t])},r=await(await fetch(`${mu()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})).json().catch(()=>({}));if(!r.ok)throw Error(r.message||`Flow save failed`)}}function fu(){return Ql(),ru(Fu.chat||[])}var pu,B,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,V,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu=o((()=>{D(),f(),m(),qe(),pu={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},B=e=>String(e??``).replace(/[&<>"']/g,e=>pu[e]),mu=()=>E.getConfig?.().BASE_URL||``,hu={single_select:{icon:`quiz`,color:`#0072BA`,darkColor:`#38BDF8`},multi_select:{icon:`checklist`,color:`#0E6BA8`,darkColor:`#22D3EE`},scheduler:{icon:`event`,color:`#915E8B`,darkColor:`#E879F9`},text:{icon:`short_text`,color:`#5B54C6`,darkColor:`#A78BFA`},email:{icon:`mail`,color:`#0E8F86`,darkColor:`#2DD4BF`},phone:{icon:`call`,color:`#2E8B57`,darkColor:`#4ADE80`},message:{icon:`chat`,color:`#B4791F`,darkColor:`#FBBF24`}},gu={},ze.forEach(e=>{gu[e.value]={label:e.label,...hu[e.value]||{icon:`quiz`,color:`#0072BA`,darkColor:`#38BDF8`}}}),_u=ze.map(e=>e.value),vu={chat:`Chat / default`,book:`Book (scheduler)`,support:`Support (intake)`},yu=e=>{let t=gu[e]||gu.single_select;return document.documentElement.getAttribute(`data-theme`)===`dark`?{...t,color:t.darkColor}:t},bu=e=>e===`single_select`||e===`multi_select`,xu=e=>e!==`message`,Su=e=>e===`scheduler`,Cu=e=>e===`message`,wu=e=>e===`email`?`email`:e===`phone`?`phone`:``,Tu=()=>({meeting_label:``,start:`09:00`,end:`17:00`,mins:30,days:14}),Eu=[`meeting_label`,`start`,`end`,`mins`,`days`],Du=[`terminal`,`cta`],Ou=[[``,`No icon`],[`event`,`Calendar`],[`schedule`,`Clock`],[`mail`,`Email`],[`sms`,`Text`],[`phone`,`Phone`],[`chat`,`Chat`],[`description`,`Document`],[`help`,`Question`],[`place`,`Location`],[`person`,`Person`],[`bolt`,`Quick`],[`check_circle`,`Check`],[`star`,`Star`],[`home`,`Home`],[`build`,`Service`]],ku=!1,V=[],Au=null,ju=0,Mu=null,Nu=null,Pu=`chat`,Fu={},Iu=[],Lu=null,Ru=null,zu=``,Bu=()=>`f`+ ++ju,Vu=`<div class="flow-conn"><span class="flow-conn__line"></span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></div>`})),Uu,Wu=o((()=>{Uu=`!function(){"use strict";try{window.machfivemagnet={appGuid:"##APPGUID##",magnets:"##MAGNET_DEFINITIONS##"}}catch(e){return}var e=window.machfivemagnet||{},t="string"==typeof e.appGuid?e.appGuid:"",a=Array.isArray(e.magnets)?e.magnets:[];if(t&&a.length){var r,n="function"==typeof window.fetch?window.fetch.bind(window):null,o="#0072BA",i="Chat with us",m="Typically replies in a few minutes",s=function(){try{var e=document.currentScript;if(!e||!e.src)for(var t=document.getElementsByTagName("script"),a=t.length-1;a>=0;a--)if(/coreSnippet/.test(t[a].src||"")){e=t[a];break}if(e&&e.src)return new URL(e.src,location.href).origin}catch(e){}return"https://machfivemagnet-saas.onrender.com"}(),l=function(){var e={};try{var t=new URLSearchParams(location.search);["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(a){var r=t.get(a);r&&(e[a]=r)})}catch(e){}try{var a=JSON.parse(sessionStorage.getItem("m5m_attr")||"{}");e=Object.assign({},a,e),Object.keys(e).length&&sessionStorage.setItem("m5m_attr",JSON.stringify(e))}catch(e){}return e}(),c=function(){try{var e=window.MachFiveMagnet;return e&&"object"==typeof e&&Array.isArray(e.instances)||(e={instances:[],open:function(t,a){var r=k(e.instances,t);if(r)try{r.open(a||null)}catch(e){_(e)}return!!r},close:function(t){var a=k(e.instances,t);if(a)try{a.close()}catch(e){}return!!a}},window.MachFiveMagnet=e),e}catch(e){return{instances:[]}}}(),d={attrs:["data-theme","data-mode","data-color-scheme"],dark:["dark","theme-dark"],light:["light","theme-light"]},p=[],u=null,h={manual:"none"},g={surface:"--m5-surface",surface_2:"--m5-surface-2",border:"--m5-border",text:"--m5-text",text_sub:"--m5-text-sub",meta:"--m5-meta",msg_bg:"--m5-msg-bg",bot_bg:"--m5-bot-bg",bot_border:"--m5-bot-border",radius:"--m5-radius",radius_msg:"--m5-radius-msg"},f={inter:"Inter:wght@400;500;600;700",roboto:"Roboto:wght@400;500;700",poppins:"Poppins:wght@400;500;600;700",montserrat:"Montserrat:wght@400;500;600;700",lato:"Lato:wght@400;700","open sans":"Open+Sans:wght@400;600;700",nunito:"Nunito:wght@400;600;700",raleway:"Raleway:wght@400;600;700","work sans":"Work+Sans:wght@400;500;600;700",oswald:"Oswald:wght@400;500;600;700",merriweather:"Merriweather:wght@400;700"},v={call:{icon:"phone",label:"Call"},email:{icon:"mail",label:"Email"},book:{icon:"event",label:"Book"},chat:{icon:"chat",label:"Chat"},support:{icon:"headset",label:"Support"}},b=[{label:"Sales enquiry",icon:"description"},{label:"Support",icon:"help"},{label:"Billing",icon:"description"},{label:"Something else",icon:"chat"}],x={chat:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',close:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',send:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',check:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',arrow:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',phone:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',mail:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',calendar:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'},y={event:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",schedule:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",mail:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",chat:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",sms:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",phone:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",description:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",help:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",place:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",person:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",bolt:"M7 2v11h3v9l7-12h-4l4-8z",check_circle:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",home:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",build:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",headset:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z",copy:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},w={calendar:"event",appointment:"event",book:"event",email:"mail",message:"chat",text:"sms",call:"phone",quote:"description",document:"description",question:"help",location:"place",clock:"schedule",quick:"bolt",check:"check_circle",services:"build",service:"build",support:"headset",support_agent:"headset",headset_mic:"headset"};r=function(){try{!function(){for(var e={},t=0;t<a.length;t++){var r=a[t],n=r&&r.mag_display_mode;n&&!e[n]&&(e[n]=!0,"chat"===n||"right_slide"===n||"modal"===n||"inline"===n?Y(r,n):_("display mode not yet supported: "+n))}}()}catch(e){_("boot failed",e)}},document.body?r():document.addEventListener("DOMContentLoaded",function(){r()})}function k(e,t){if(!Array.isArray(e)||!e.length)return null;if(null==t||""===t)return e[0];var a,r=String(t);for(a=0;a<e.length;a++)if(e[a]&&e[a].id===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].guid===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].mode===r)return e[a];return null}function _(){try{console.warn.apply(console,["[m5m]"].concat([].slice.call(arguments)))}catch(e){}}function S(e){var t=e&&e.mag_theme_sync&&"object"==typeof e.mag_theme_sync?e.mag_theme_sync:{},a=function(e){var a=Array.isArray(t[e])?t[e].filter(function(e){return"string"==typeof e&&e}):[];return d[e].concat(a)};return{attrs:a("attrs"),dark:a("dark"),light:a("light")}}function C(e){try{var t=document.documentElement;if(!t)return null;for(var a=0;a<e.attrs.length;a++){var r=t.getAttribute(e.attrs[a]);if(r){if("dark"===(r=String(r).trim().toLowerCase()))return"dark";if("light"===r)return"light"}}try{var n=(window.getComputedStyle(t).colorScheme||"").trim().toLowerCase();if(n&&"normal"!==n){var o=n.split(/\\s+/).filter(function(e){return"only"!==e});if(1===o.length&&"dark"===o[0])return"dark";if(1===o.length&&"light"===o[0])return"light"}}catch(e){}var i=t.classList;if(i){var m=e.dark.some(function(e){return i.contains(e)}),s=e.light.some(function(e){return i.contains(e)});if(m&&!s)return"dark";if(s&&!m)return"light"}}catch(e){}return null}function E(e){var t=C(e.cfg),a=e.el&&e.el.classList;return a?(a.toggle("m5m-dark","dark"===t),a.toggle("m5m-light","light"===t),t):t}function L(e,t){if(!e)return null;var a={el:e,cfg:S(t)};p.push(a);var r=E(a);if(!u&&"function"==typeof MutationObserver){u=new MutationObserver(function(){for(var e=0;e<p.length;e++)p[e].el&&!1!==p[e].el.isConnected&&E(p[e])});try{u.observe(document.documentElement,{attributes:!0})}catch(e){u=null}}return r}function z(e,t){try{if("function"==typeof CSSStyleSheet&&"adoptedStyleSheets"in e){var a=new CSSStyleSheet;if("function"==typeof a.replaceSync)return a.replaceSync(t),e.adoptedStyleSheets=[a],"adopted"}}catch(e){}var r=document.createElement("style");return r.textContent=t,e.prepend?e.prepend(r):e.appendChild(r),"style-element"}function M(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}function A(e){3===(e=String(e||"").trim().replace("#","")).length&&(e=e.split("").map(function(e){return e+e}).join("")),/^[0-9a-fA-F]{6}$/.test(e)||(e=o.replace("#",""));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}function N(e,t){return e.map(function(e){return Math.max(0,Math.min(255,Math.round(e*t)))})}function T(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function H(e,t){return"rgba("+e[0]+","+e[1]+","+e[2]+","+t+")"}function j(e){var t=e.map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return.2126*t[0]+.7152*t[1]+.0722*t[2]}function P(e){if(null==e)return"";var t=String(e).trim();return!t||t.length>40?"":/^\\d+(\\.\\d+)?$/.test(t)?t+"px":/^\\d+(\\.\\d+)?(px|rem|em|vh|vw|%)$/.test(t)||/^(min|max|clamp)\\(\\s*[\\d.\\s,a-z%()+*/-]+\\)$/i.test(t)?t:""}function O(e){if(!e)return null;try{var t=new URL(e,location.href).protocol;return/^(https?|mailto|tel):$/.test(t)?e:null}catch(e){return null}}function I(e){try{if(!e)return;var t=String(e).split(",")[0].trim().replace(/^["']+|["']+$/g,"").toLowerCase(),a=f[t];if(!a)return;var r="m5m-font-"+t.replace(/\\s+/g,"-");if(document.getElementById(r))return;var n=document.createElement("link");n.id=r,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family="+a+"&display=swap",(document.head||document.documentElement).appendChild(n)}catch(e){}}function q(e,t){var a=[];try{var r=e.mag_theme_vars&&"object"==typeof e.mag_theme_vars?e.mag_theme_vars:{};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&g[n]){var o=String(r[n]).trim();o&&o.length<=60&&/^[#a-zA-Z0-9(),.%\\s/-]+$/.test(o)&&a.push(g[n]+":"+o)}if(e.mag_font){var i=String(e.mag_font).trim();i&&i.length<=120&&/^[a-zA-Z0-9'",\\s-]+$/.test(i)&&a.push("font-family:"+i)}}catch(e){}return a.length?".m5m-root.m5m-mode-"+t+"{"+a.join(";")+";}":""}function B(e){var t=[];return(Array.isArray(e)?e:[]).forEach(function(e){if(v[(e=e||{}).type]){var a="call"===e.type||"email"===e.type,r=null!=e.value?String(e.value).trim():"";a&&!r||t.push({type:e.type,label:null!=e.label&&String(e.label).trim()||v[e.type].label,value:r,config:e.config&&"object"==typeof e.config?e.config:{}})}}),t.slice(0,6)}function D(e){return e.length?'<div class="m5m-actionbar">'+e.map(function(e){return'<button type="button" class="m5m-action" data-m5m-act="'+M(e.type)+'">'+V(v[e.type].icon)+"<span>"+M(e.label)+"</span></button>"}).join("")+"</div>":""}function V(e){if(!e)return"";var t=String(e).trim().toLowerCase().replace(/[\\s-]+/g,"_");return w[t]&&(t=w[t]),y[t]?'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+y[t]+'"></path></svg>':""}function Y(e,a){var r=null;try{var d=e&&e.mag_ab;if(d&&d.enabled&&d.b&&"object"==typeof d.b){var p="m5m_ab_"+t;try{r=localStorage.getItem(p)}catch(e){}if("A"!==r&&"B"!==r){var u="number"==typeof d.split?d.split:50;r=100*Math.random()<u?"B":"A";try{localStorage.setItem(p,r)}catch(e){}}"B"===r&&(e=Object.assign({},e,d.b))}}catch(e){r=null}var g,f,v=e,y=[],w={},k=0,E=0,Y={},F="",U=!1,$=a||"chat",G=[],J=!1,W=!1,X=!1,Z="",K=[],Q={},ee=[],te=!1,ae=0,re={},ne=-1,oe=!1,ie="m5m"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),me=!1,se=!1;function le(){if(!se){se=!0,_("Requests to "+s+" are being blocked by this page — captures and leads will silently fail until this is fixed. This is almost always the HOST PAGE'S own Content-Security-Policy (connect-src), not a bug in the widget: check this tab's Console for a line like \\"Content-Security-Policy: ... blocked ... connect-src ...\\". Fix: add "+s+' to connect-src (also confirm script-src and img-src) — the Magnets page in your MachFiveMagnet dashboard has a copy-paste-ready snippet under "Strict Content-Security-Policy on your site?".');try{(new Image).src=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/csp-ping"}catch(e){}}}function ce(e,a){try{var o=JSON.stringify({event:e,detail:a||null,mode:$,session:ie,variant:r}),i=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/event";if(n)return void n(i,{method:"POST",headers:{"Content-Type":"application/json"},body:o,keepalive:!0}).catch(function(){le()});navigator.sendBeacon&&navigator.sendBeacon(i,o)}catch(e){}}function de(e){if(!me){me=!0,ce("engage",e);try{document.cookie="m5m_sid="+encodeURIComponent(ie)+"; max-age=1800; path=/; SameSite=Lax"}catch(e){}}}function pe(){return'<span class="m5m-ava-mark">'+x.chat+"</span>"+(F?'<img class="m5m-ava-img" src="'+M(F)+'" alt="">':"")}function ue(){return!(!Q.root||!Q.root.classList.contains("m5m-open"))}function he(e,t){var a=setTimeout(e,t);return ee.push(a),a}function ge(){ee.forEach(clearTimeout),ee=[],ae=0}function fe(e,t){return ae++,he(function(){ae--,e()},t)}function ve(){if(!ue()){Q.root.classList.add("m5m-open");try{Q.panel.focus()}catch(e){}if(!J)return J=!0,ce("open"),void Te();!te||X||W||xe()}}function be(){ae>0&&(te=!0),ge(),Q.root.classList.remove("m5m-open");try{Q.launcher.focus()}catch(e){}}function xe(){te=!1,function(){try{for(var e=Q.messages.querySelectorAll(".m5m-typing"),t=0;t<e.length;t++){var a=e[t].parentNode;a&&a.parentNode&&a.parentNode.removeChild(a)}}catch(e){}}(),Ne()}function ye(e){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function we(){G.push({idx:k,answers:ye(Y),emailOptOut:oe,messageCount:ne}),ke(G.length>1)}function ke(e){Q.backBtn&&Q.backBtn.classList.toggle("m5m-hidden",!e)}function _e(){Q.backBtn=g.querySelector(".m5m-back"),Q.backBtn&&Q.backBtn.addEventListener("click",function(){try{!function(){if(!(G.length<2||W||X)){G.pop();var e=G.pop();if(k=e.idx,Y=ye(e.answers),oe=!!e.emailOptOut,ge(),Q.messages)for(;Q.messages.children.length>e.messageCount;)Q.messages.removeChild(Q.messages.lastChild);Le(),Ne(!0)}}()}catch(e){_(e)}})}function Se(){try{c.instances.push({id:null!=v.mag_id&&""!==String(v.mag_id)?String(v.mag_id):null,guid:null!=v.mag_guid&&""!==String(v.mag_guid)?String(v.mag_guid):null,mode:$,launcher:"inline"!==$&&!0!==v.mag_hide_launcher,appGuid:t,open:function(e){try{!function(e){e=e&&"object"==typeof e?e:{};var t=J&&!X&&(!0===e.reset||W);t&&(ge(),Y={},re={},Z="",oe=!1,W=!1,X=!1,U=!1,k=0,E=0,te=!1,ne=-1,G=[],ke(!1),Q.messages&&(Q.messages.innerHTML=""),Le(),je(null),y=Array.isArray(v.mag_macro_steps)?v.mag_macro_steps:[],w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)})),function(e){if(e&&"object"==typeof e){var t=0;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t>=40)break;var r=e[a];if(null!=r&&""!==(r=String(r).slice(0,250))){var n=String(a).slice(0,60);Object.prototype.hasOwnProperty.call(Y,n)||(Y[n]=r,re[n]=!0,t++)}}}}(e.prefill),"inline"!==$?(ve(),t&&Te()):t?Te():!te||X||W||xe()}(e)}catch(e){_(e)}},close:function(){if("inline"!==$)try{be()}catch(e){}}})}catch(e){}}function Ce(){var e=Q.messages.lastElementChild;return!(!e||!e.classList.contains("m5m-row-bot"))}function Ee(){if("inline"===$&&ne>=0){var e=Q.messages.children[ne];if(e)return void(Q.messages.scrollTop=Math.max(0,e.getBoundingClientRect().top-Q.messages.getBoundingClientRect().top+Q.messages.scrollTop-8))}Q.messages.scrollTop=Q.messages.scrollHeight}function Le(){Q.input.innerHTML=""}function ze(e){ne=-1;var t=document.createElement("div");t.className="m5m-row m5m-row-user";var a=document.createElement("div");a.className="m5m-msg m5m-user",a.textContent=e,t.appendChild(a),Q.messages.appendChild(t),Ee()}function Me(){var e=Ce(),t=document.createElement("div");t.className="m5m-row m5m-row-bot"+(e?" m5m-grouped":""),t.setAttribute("aria-hidden","true");var a=document.createElement("span");a.className="m5m-msg-ava",e||(a.innerHTML=pe());var r=document.createElement("div");return r.className="m5m-typing",r.innerHTML="<span></span><span></span><span></span>",t.appendChild(a),t.appendChild(r),Q.messages.appendChild(t),Ee(),t}function Ae(e,t){var a=(Array.isArray(e)?e:[]).filter(function(e){return null!=e&&""!==String(e)}),r=0;!function e(){ue()?r>=a.length?t():function(e,t){if(e){var a=Me();fe(function(){a.parentNode&&a.parentNode.removeChild(a),function(e){var t=Ce(),a=document.createElement("div");a.className="m5m-row m5m-row-bot"+(t?" m5m-grouped":"");var r=document.createElement("span");r.className="m5m-msg-ava",t||(r.innerHTML=pe());var n=document.createElement("div");n.className="m5m-msg m5m-bot",n.innerHTML=M(e);var o=document.createElement("div");o.className="m5m-col",o.appendChild(n);var i=document.createElement("span");i.className="m5m-time",i.setAttribute("aria-hidden","true"),i.textContent=function(){try{return(new Date).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}catch(e){return""}}(),o.appendChild(i),a.appendChild(r),a.appendChild(o),Q.messages.appendChild(a),Ee()}(e),t&&t()},550)}else t&&t()}(a[r++],e):te=!0}()}function Ne(e){if(ue()){if(te=!1,ne=Q.messages?Q.messages.children.length:-1,!e&&++E>100)return _("step guard tripped — ending flow"),void Ue();if(k<0||k>=y.length)return ke(!1),void(v&&v.mag_summary&&!U&&Fe().length?(U=!0,function(){Le();var e=v&&v.mag_summary_heading||"Here’s what we’ve got",t=v&&v.mag_summary_confirm_label||"Confirm & send",a=Fe().map(function(e){return'<div class="m5m-sum-row"><span class="m5m-sum-label">'+M((t=e,(t=String(t).replace(/_/g," ").trim())?t.charAt(0).toUpperCase()+t.slice(1):t))+'</span><span class="m5m-sum-val">'+M(Y[e])+"</span></div>";var t}).join(""),r=document.createElement("div");r.className="m5m-summary",r.innerHTML='<div class="m5m-sum-head" role="heading" aria-level="2">'+M(e)+'</div><div class="m5m-sum-rows">'+a+'</div><button type="button" class="m5m-sum-confirm">'+M(t)+"</button>",Q.messages.appendChild(r),Ee();var n=r.querySelector(".m5m-sum-confirm");n.addEventListener("click",function(){n.disabled=!0,Ue()}),n.focus()}()):Ue());var t=y[k]||{},a=t.step_type,r=t.step_config&&"object"==typeof t.step_config?t.step_config:{};if(r.skip_if_prefilled&&function(e){var t=Array.isArray(e.step_columns)?e.step_columns:[];if(!t.length)return!1;for(var a=0;a<t.length;a++){var r=Y[String(t[a])];if(null==r||""===r)return!1}return!0}(t))Re("");else{if(ce("step",k+1+"/"+y.length),"message"===a)return r.terminal?(we(),void Ae(t.step_prompts,function(){!function(e){Le();var t=e&&e.cta&&"object"==typeof e.cta?e.cta:null,a=t?O(t.url):null,r=t&&null!=t.label?String(t.label):"";if(a&&r){var n=document.createElement("div");n.className="m5m-terminal",n.innerHTML='<a class="m5m-terminal-cta" href="'+M(a)+'" target="_blank" rel="noopener noreferrer">'+M(r)+"</a>",Q.messages.appendChild(n),Ee()}}(r)})):void Ae(t.step_prompts,function(){Re("")});we(),Ae(t.step_prompts,function(){"single_select"===a?function(e){Le();var t="inline"===$,a=document.createElement("div");a.className="m5m-choices"+(t?" m5m-tiles":"");var r=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});r.length?(r.forEach(function(r){var n=String(r.label),o=V(r.icon),i=r.description?String(r.description):"",m=document.createElement("button");m.type="button",m.className="m5m-choice",m.innerHTML=(o?'<span class="m5m-choice-icon">'+o+"</span>":"")+'<span class="m5m-choice-body"><span class="m5m-choice-label">'+M(n)+"</span>"+(i?'<span class="m5m-choice-desc">'+M(i)+"</span>":"")+'</span><span class="m5m-choice-arrow">'+x.arrow+"</span>",m.addEventListener("click",function(){de("choice"),Ye(e,n),t&&a.parentNode&&a.remove(),ze(n),Le(),fe(function(){Re(r.goto?String(r.goto):"")},260)}),a.appendChild(m)}),(t?Q.messages:Q.input).appendChild(a),Ee()):Re("")}(t):"multi_select"===a?function(e){Le();var t=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});if(t.length){var a=document.createElement("div");a.className="m5m-multi";var r={},n=document.createElement("button");t.forEach(function(e){var t=String(e.label),o=V(e.icon),i=document.createElement("button");i.type="button",i.className="m5m-mopt",i.innerHTML=(o?'<span class="m5m-mopt-icon">'+o+"</span>":"")+'<span class="m5m-mopt-label">'+M(t)+'</span><span class="m5m-mopt-check">'+x.check+"</span>",i.addEventListener("click",function(){var e=!r[t];r[t]=e,i.classList.toggle("m5m-mopt-on",e),function(){var e=!1;for(var t in r)if(r[t]){e=!0;break}n.disabled=!e}()}),a.appendChild(i)}),n.type="button",n.className="m5m-multi-cont",n.textContent="Continue",n.disabled=!0,n.addEventListener("click",function(){var t=[];for(var n in r)r[n]&&t.push(n);if(t.length){de("multi_select");var o=t.join(", ");Ye(e,o),a.parentNode&&a.remove(),ze(o),Le(),fe(function(){Re("")},260)}}),a.appendChild(n),Q.messages.appendChild(a),Ee()}else Re("")}(t):"scheduler"===a?function(e){if(Le(),!Array.isArray(e.step_columns)||!e.step_columns.length)return _("scheduler step has no Saves-to field configured — skipping"),void Re("");var t=e&&e.step_config||{},a=t.meeting_label||"",r=Ve(t.start||"09:00"),n=Ve(t.end||"17:00"),o=t.mins||30,i=Math.max(1,Math.min(60,t.days||14)),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=new Date;l.setHours(0,0,0,0);for(var c=[],d=0;d<i;d++)c.push(new Date(l.getTime()+864e5*d));for(var p=[],u=r;u<n;u+=o)p.push(u);var h=0,g=null,f=function(e){var t=Math.floor(e/60),a=e%60,r=t%12;return 0===r&&(r=12),r+":"+(a<10?"0"+a:a)+" "+(t>=12?"PM":"AM")},v=document.createElement("div");v.className="m5m-sched";var b=function(){var e=c.map(function(e,t){return'<button type="button" class="m5m-sd-day'+(t===h?" m5m-sd-on":"")+'" data-d="'+t+'"><span class="m5m-sd-dow">'+m[e.getDay()]+'</span><span class="m5m-sd-num">'+e.getDate()+'</span><span class="m5m-sd-mon">'+s[e.getMonth()]+"</span></button>"}).join(""),t=p.map(function(e){return'<button type="button" class="m5m-sd-slot'+(g===e?" m5m-sd-on":"")+'" data-t="'+e+'">'+f(e)+"</button>"}).join("");v.innerHTML=(a?'<div class="m5m-sd-meta">'+V("schedule")+"<span>"+M(a)+"</span></div>":"")+'<div class="m5m-sd-days">'+e+'</div><div class="m5m-sd-slots">'+t+'</div><button type="button" class="m5m-sd-confirm"'+(null===g?" disabled":"")+">Confirm time</button>"};b(),v.addEventListener("click",function(t){var a=t.target.closest(".m5m-sd-day");if(a)return h=parseInt(a.getAttribute("data-d"),10)||0,g=null,void b();var r=t.target.closest(".m5m-sd-slot");if(r)return g=parseInt(r.getAttribute("data-t"),10),void b();if(t.target.closest(".m5m-sd-confirm")){if(null===g)return;de("scheduler");var n=c[h],o=m[n.getDay()]+" "+s[n.getMonth()]+" "+n.getDate()+", "+f(g);try{Z=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(t){Z=""}Ye(e,o),v.parentNode&&v.remove(),ze(o),Le(),fe(function(){Re("")},260)}}),Q.messages.appendChild(v),Ee()}(t):function(e){if(Le(),!Array.isArray(e.step_columns)||!e.step_columns.length)return _("input step has no Saves-to field configured — skipping"),void Re("");var t=e.step_type,a=e.step_config&&"object"==typeof e.step_config?e.step_config:{},r=document.createElement("form");r.className="m5m-form";var n=document.createElement("input");n.type="email"===t?"email":"phone"===t?"tel":"text",n.placeholder=null!=a.placeholder&&""!==String(a.placeholder)?String(a.placeholder):v&&v.mag_input_placeholder||"Type your answer…",n.autocomplete="email"===t?"email":"phone"===t?"tel":"off",n.required=!0;var o=document.createElement("button");if(o.type="submit",o.className="m5m-send",o.setAttribute("aria-label","Send"),o.innerHTML=x.send,r.appendChild(n),r.appendChild(o),r.addEventListener("submit",function(a){a.preventDefault();var r=(n.value||"").trim();!r||"email"===t&&n.validity&&!n.validity.valid?n.focus():(de("input"),Ye(e,r),ze(r),Le(),fe(function(){Re("")},260))}),Q.input.appendChild(r),"email"===t){var i=document.createElement("label");i.className="m5m-optout";var m=document.createElement("input");m.type="checkbox",m.checked=oe,m.addEventListener("change",function(){oe=m.checked});var s=document.createElement("span");s.textContent="Don’t email me updates",i.appendChild(m),i.appendChild(s),Q.input.appendChild(i)}if(a.optional){var l=document.createElement("button");l.type="button",l.className="m5m-skip",l.textContent=null!=a.skip_label&&""!==String(a.skip_label)?String(a.skip_label):"Skip",l.addEventListener("click",function(){de("skip"),Le(),fe(function(){Re("")},120)}),Q.input.appendChild(l)}n.focus(),Ee()}(t)})}}}function Te(){v&&v.mag_home&&K.length>0?function(){Q.messages&&(Q.messages.innerHTML=""),Le(),je(null),ke(!1);var e=null!=v.mag_welcome?String(v.mag_welcome):"",t=v.mag_home_title||v.mag_title||"How can we help?",a=document.createElement("div");a.className="m5m-home",a.innerHTML='<div class="m5m-home-ava">'+pe()+"</div>"+("inline"===$?"":'<div class="m5m-home-title" role="heading" aria-level="2">'+M(t)+"</div>")+(e?'<div class="m5m-home-text">'+M(e)+"</div>":"")+'<div class="m5m-home-hint">'+V("bolt")+"<span>Choose an option below to get started.</span></div>",Q.messages.appendChild(a),Ee()}():(k=0,E=0,Ne())}function He(){Q.actionbar&&Q.actionbar.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("[data-m5m-act]"):null;if(a)try{!function(e){for(var a=null,r=0;r<K.length;r++)if(K[r].type===e){a=K[r];break}if(a)if(ce("route",e),de(e),ge(),je(e),ke(!1),"call"!==e&&"email"!==e)if("book"===e&&a.config&&"calendly"===a.config.source&&function(e){try{var t=new URL(e);return"https:"===t.protocol&&("calendly.com"===t.hostname||/\\.calendly\\.com$/.test(t.hostname))}catch(e){return!1}}(a.config.calendly_url))!function(e){var a;try{a=new URL(e.config.calendly_url)}catch(e){return void qe(Be("book",{type:"book",config:{}}))}a.searchParams.set("embed_domain",location.hostname||"localhost"),a.searchParams.set("embed_type","Inline"),a.searchParams.set("hide_gdpr_banner","1"),a.searchParams.set("utm_source","machfivemagnet"),a.searchParams.set("utm_content",t),a.searchParams.set("salesforce_uuid",ie);var r=Pe(["email","email_address","work_email"]),n=Pe(["name","full_name"]);n||(n=[Pe(["first_name","firstname"]),Pe(["last_name","lastname"])].filter(function(e){return e}).join(" ")),n&&a.searchParams.set("name",n.slice(0,100)),r&&a.searchParams.set("email",r.slice(0,100)),Q.messages&&(Q.messages.innerHTML=""),Le();var o=document.createElement("div");o.className="m5m-cal";var i=document.createElement("iframe");i.className="m5m-cal-frame",i.src=a.toString(),i.title=e.config.event_name||"Schedule a meeting",o.appendChild(i),Q.messages.appendChild(o),Ee(),function(e){Oe=e,Ie||(Ie=!0,window.addEventListener("message",function(e){try{var t="";try{t=new URL(e.origin).hostname}catch(e){return}if("calendly.com"!==t&&!/\\.calendly\\.com$/.test(t))return;if(!e.data||"calendly.event_scheduled"!==e.data.event)return;if(!Oe||!Oe.isConnected)return;if(Oe.querySelector(".m5m-cal-done"))return;var a=document.createElement("div");a.className="m5m-cal-done",a.textContent="You are booked. A confirmation email is on the way.",Oe.appendChild(a),Ee()}catch(e){}}))}(o)}(a);else if("book"===e&&function(e){try{return/^https?:$/.test(new URL(e).protocol)}catch(e){return!1}}(a.value))try{window.open(a.value,"_blank","noopener")}catch(e){}else Y={},U=!1,W=!1,X=!1,Z="",qe(Be(e,a));else!function(e,t){Q.messages&&(Q.messages.innerHTML=""),Le();var a=t&&t.value?String(t.value):"",r="call"===e,n=O(r?"tel:"+a.replace(/[^\\d+]/g,""):"mailto:"+a),o=document.createElement("div");o.className="m5m-reveal",o.innerHTML='<div class="m5m-reveal-icon">'+V(r?"phone":"mail")+'</div><div class="m5m-reveal-title" role="heading" aria-level="2">'+(r?"Call us":"Email us")+"</div>"+(n?'<a class="m5m-reveal-val" href="'+M(n)+'"'+(r?"":' target="_blank" rel="noopener noreferrer"')+">"+M(a)+"</a>":'<div class="m5m-reveal-val">'+M(a)+"</div>")+'<button type="button" class="m5m-reveal-copy">'+V("copy")+"<span>Copy</span></button>",Q.messages.appendChild(o);var i=o.querySelector(".m5m-reveal-copy");if(i&&i.addEventListener("click",function(){var e=o.querySelector(".m5m-reveal-val");!function(e,t){var a=function(){var e=t&&t.querySelector("span");if(e){var a=e.textContent;e.textContent="Copied",he(function(){e&&(e.textContent=a)},1400)}};try{if(navigator.clipboard&&navigator.clipboard.writeText)return void navigator.clipboard.writeText(e).then(a,function(){De(e),a()})}catch(e){}De(e),a()}((e&&e.textContent?e.textContent.replace(/^\\s+|\\s+$/g,""):"")||a,i)}),Ee(),r&&f)try{window.CallTrk&&"function"==typeof window.CallTrk.swap&&window.CallTrk.swap(f)}catch(e){}}(e,a)}(a.getAttribute("data-m5m-act"))}catch(e){_(e)}})}function je(e){if(Q.actionbar)for(var t=Q.actionbar.querySelectorAll("[data-m5m-act]"),a=0;a<t.length;a++)t[a].classList.toggle("m5m-act-on",t[a].getAttribute("data-m5m-act")===e)}function Pe(e){for(var t in Y)if(Object.prototype.hasOwnProperty.call(Y,t)&&-1!==e.indexOf(String(t).toLowerCase())&&String(Y[t]||"").trim())return String(Y[t]).trim();return""}var Oe=null,Ie=!1;function qe(e){y=Array.isArray(e)?e.slice():[],w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)}),Q.messages&&(Q.messages.innerHTML=""),Le(),k=0,E=0,y.length?Ne():_("route has no steps")}function Be(e,t){var a=v&&v.mag_routes||{},r=function(e){return Array.isArray(e)&&e.length?e:null};return"chat"===e?r(a.chat)||(Array.isArray(v.mag_macro_steps)?v.mag_macro_steps:[]):"book"===e?r(a.book)||function(e){var t=e&&e.config||{};return[{id:"m5m_book",step_type:"scheduler",step_options:[],step_columns:[t.column||"preferred_time"],step_prompts:[t.heading||"When works best for you?"],step_config:{meeting_label:t.meeting_label||"",start:t.start||"09:00",end:t.end||"17:00",mins:t.mins||30,days:t.days||14}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):"support"===e?r(a.support)||function(e){var t=e&&e.config||{};return[{id:"m5m_support",step_type:"multi_select",step_options:(Array.isArray(t.options)&&t.options.length?t.options:b).map(function(e){return e&&"object"==typeof e?{label:String(e.label||""),icon:e.icon||""}:{label:String(e),icon:""}}).filter(function(e){return""!==e.label}),step_columns:t.column?[t.column]:[],step_prompts:[t.heading||"How can we help you today?"],step_description:"Select all that apply",step_config:{}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):[]}function De(e){try{var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",(g||document.body).appendChild(t),t.focus(),t.select(),document.execCommand("copy"),t.parentNode&&t.parentNode.removeChild(t)}catch(e){}}function Ve(e){var t=String(e).split(":");return 60*(parseInt(t[0],10)||0)+(parseInt(t[1],10)||0)}function Ye(e,t){(Array.isArray(e.step_columns)?e.step_columns:[]).forEach(function(e){e&&(Y[String(e)]=t,delete re[String(e)])})}function Re(e){if(e){if(!Object.prototype.hasOwnProperty.call(w,e))return _("goto target not found: "+e),void Ue();k=w[e]}else k+=1;Ne()}function Fe(){return Object.keys(Y).filter(function(e){return!re[e]})}function Ue(){if(ue()&&(Le(),!W&&!X))if(n){X=!0;var e=Me(),a={"Content-Type":"application/json"},o="";try{o=window.localStorage&&window.localStorage.getItem("m5m_test_token")||""}catch(e){}o&&(a.Authorization="Bearer "+o,a["X-M5M-Test-Mode"]="1"),n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/capture",{method:"POST",headers:a,body:JSON.stringify({fields:Y,attribution:l,session:ie,mode:$,variant:r,scheduler_tz:Z||void 0,email_opt_out:oe}),keepalive:!0}).then(function(e){if(!e.ok)throw new Error("capture HTTP "+e.status);return e.json().catch(function(){return{}})}).then(function(){W=!0,X=!1,e.parentNode&&e.parentNode.removeChild(e),ue()&&function(){Le();var e=v&&v.mag_success_title||"You’re all set!",t=v&&null!=v.mag_success_text?String(v.mag_success_text):"Thanks! We’ve got your details and someone will be in touch shortly.",a=v&&v.mag_success_cta&&"object"==typeof v.mag_success_cta?v.mag_success_cta:null,r=a?O(a.url):null,n=a&&null!=a.label?String(a.label):"",o=document.createElement("div");o.className="m5m-success";var i="inline"===$;o.innerHTML='<div class="m5m-success-icon">'+x.check+'</div><div class="m5m-success-title" role="heading" aria-level="2">'+M(e)+"</div>"+(t?'<div class="m5m-success-text">'+M(t)+"</div>":"")+(r&&n?'<a class="m5m-success-link" href="'+M(r)+'" target="_blank" rel="noopener noreferrer">'+M(n)+"</a>":"")+(i?"":'<button type="button" class="m5m-success-cta">Close</button>'),Q.messages.appendChild(o),Ee();var m=o.querySelector(".m5m-success-link"),s=o.querySelector(".m5m-success-cta");s&&s.addEventListener("click",be),m?m.focus():s&&s.focus()}()}).catch(function(t){X=!1,e.parentNode&&e.parentNode.removeChild(e),_("capture failed",t),t instanceof TypeError&&le(),ue()&&$e()})}else $e()}function $e(){Q.input.innerHTML='<div class="m5m-error"><div class="m5m-error-text">Something went wrong sending your details.</div><button type="button" class="m5m-retry">Try again</button></div>';var e=Q.input.querySelector(".m5m-retry");e.addEventListener("click",function(){Le(),X=!1,Ue()}),e.focus()}"inline"===$?function(){if(document.body&&!document.getElementById("m5m-magnet-inline")){var t=function(){try{var e=document.querySelector("[data-m5m-inline], #m5m-inline");if(e)return e;for(var t=null,a=document.getElementsByTagName("script"),r=a.length-1;r>=0;r--)if(/coreSnippet/.test(a[r].src||"")){t=a[r];break}if(t&&t.parentNode){var n=document.createElement("div");return t.parentNode.insertBefore(n,t.nextSibling),n}}catch(e){}return null}();if(t)if(y=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],K=B(e.mag_actions),y.length||e.mag_home&&K.length){w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)});var a=e.mag_theme_color||o,r=e.mag_title||i,n=null!=e.mag_subtitle?String(e.mag_subtitle):m,s=e.mag_theme_mode,l="sync"===s?C(S(e)):null,c="dark"===s||"dark"===l?"m5m-dark":"light"===s||"light"===l?"m5m-light":"";I(e.mag_font),F=e.mag_logo_url||"";var d=D(K),p=A(a),u=j(p)>.55,h=T(N(p,u?.6:.78));(f=document.createElement("div")).id="m5m-magnet-inline",f.style.setProperty("--m5-brand",T(p)),f.style.setProperty("--m5-brand-2",h),f.style.setProperty("--m5-brand-soft",H(p,.12)),f.style.setProperty("--m5-brand-glow",H(p,.34)),f.style.setProperty("--m5-brand-ring",H(p,.38)),f.style.setProperty("--m5-on-brand",u?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover");var v=P(e.mag_inline_width),b=P(e.mag_inline_height);v&&f.style.setProperty("--m5-inline-w",v),b&&f.style.setProperty("--m5-inline-h",b),t.appendChild(f),(g=f.attachShadow({mode:"open"})).innerHTML='<div class="m5m-root m5m-mode-inline m5m-open'+(c?" "+c:"")+'"><section class="m5m-inline-card" aria-label="'+M(r)+'"><header class="m5m-header"><button class="m5m-back m5m-hidden" type="button" aria-label="Back to the previous question">'+x.arrow+'</button><span class="m5m-ava">'+pe()+'</span><span class="m5m-head-text"><span class="m5m-title">'+M(r)+"</span>"+(n?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+M(n)+"</span>":"")+'</span></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+d+"</section></div>",z(g,R()+q(e,$)),Q.root=g.querySelector(".m5m-root"),"sync"===s&&L(Q.root,e),Q.panel=g.querySelector(".m5m-inline-card"),Q.messages=g.querySelector(".m5m-messages"),Q.input=g.querySelector(".m5m-input"),Q.actionbar=g.querySelector(".m5m-actionbar"),He(),_e(),g.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),g.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),J=!0,ce("open"),Te(),Se()}else _("magnet has no steps");else _("inline magnet: no mount target — add <div data-m5m-inline></div> where it should appear")}}():function(){if(document.body){var a="m5m-magnet-"+$;if(!document.getElementById(a))if(y=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],K=B(e.mag_actions),y.length||e.mag_home&&K.length){w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)});var r=e.mag_theme_color||o,n=e.mag_title||i,s=null!=e.mag_subtitle?String(e.mag_subtitle):m,l=e.mag_launcher_label||n,d=e.mag_theme_mode,p="sync"===d?C(S(e)):null,u="dark"===d||"dark"===p?"m5m-dark":"light"===d||"light"===p?"m5m-light":"";!0===e.mag_hide_launcher&&(u+=(u?" ":"")+"m5m-no-launcher");var v=0;if(!0!==e.mag_hide_launcher)try{v=c.instances.filter(function(e){return e&&e.launcher}).length}catch(e){}I(e.mag_font),F=e.mag_logo_url||"";var b=D(K),k=A(r),E=j(k)>.55,P=T(N(k,E?.6:.78));(f=document.createElement("div")).id=a,f.style.setProperty("--m5-brand",T(k)),f.style.setProperty("--m5-brand-2",P),f.style.setProperty("--m5-brand-soft",H(k,.12)),f.style.setProperty("--m5-brand-glow",H(k,.34)),f.style.setProperty("--m5-brand-ring",H(k,.38)),f.style.setProperty("--m5-on-brand",E?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover"),v>0&&f.style.setProperty("--m5-launcher-bottom",20+74*v+"px"),document.body.appendChild(f),(g=f.attachShadow({mode:"open"})).innerHTML='<div class="m5m-root m5m-mode-'+$+(u?" "+u:"")+'"><div class="m5m-scrim"></div><button class="m5m-launcher" type="button" aria-label="Open '+M(n)+'"><span class="m5m-launcher-ava">'+x.chat+'</span><span class="m5m-launcher-label">'+M(l)+'</span></button><section class="m5m-panel" role="dialog" aria-modal="'+("modal"===$?"true":"false")+'" tabindex="-1" aria-label="'+M(n)+'"><header class="m5m-header"><button class="m5m-back m5m-hidden" type="button" aria-label="Back to the previous question">'+x.arrow+'</button><span class="m5m-ava">'+pe()+'</span><span class="m5m-head-text"><span class="m5m-title">'+M(n)+"</span>"+(s?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+M(s)+"</span>":"")+'</span><button class="m5m-close" type="button" aria-label="Close '+M(n)+'">'+x.close+'</button></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+b+"</section></div>",z(g,R()+q(e,$)),Q.root=g.querySelector(".m5m-root"),"sync"===d&&L(Q.root,e),Q.launcher=g.querySelector(".m5m-launcher"),Q.panel=g.querySelector(".m5m-panel"),Q.messages=g.querySelector(".m5m-messages"),Q.input=g.querySelector(".m5m-input"),Q.actionbar=g.querySelector(".m5m-actionbar"),He(),_e(),Q.launcher.addEventListener("click",function(){try{ve()}catch(e){_(e)}}),g.querySelector(".m5m-close").addEventListener("click",function(){try{be()}catch(e){}}),g.querySelector(".m5m-scrim").addEventListener("click",function(){try{be()}catch(e){}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&ue()&&be()}),g.addEventListener("keydown",function(e){if("Tab"===e.key&&"modal"===$&&ue()){var t=function(){try{var e=Q.panel.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(e)}catch(e){return[]}}();if(t.length){var a=t[0],r=t[t.length-1],n=g.activeElement;e.shiftKey?n!==a&&-1!==t.indexOf(n)||(e.preventDefault(),r.focus()):n!==r&&-1!==t.indexOf(n)||(e.preventDefault(),a.focus())}}}),g.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),g.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),function(e){var a="m5m_auto_opened_"+t;try{if("1"===sessionStorage.getItem(a))return}catch(e){}function r(){if(!J){try{sessionStorage.setItem(a,"1")}catch(e){}try{ve()}catch(e){}}}try{if("on_load"===e)he(r,500);else if("on_8_seconds"===e)he(r,8e3);else if("on_scroll_80_percent"===e){var n=function(){try{var e=window.pageYOffset||document.documentElement.scrollTop||0,t=document.documentElement.scrollHeight-window.innerHeight;t>0&&e/t>=.8&&(window.removeEventListener("scroll",n),r())}catch(e){}};window.addEventListener("scroll",n,{passive:!0})}else if("on_exit_intent"===e){var o=function(e){(null==e.clientY||e.clientY<=0)&&!J&&(document.removeEventListener("mouseout",o),r())};document.addEventListener("mouseout",o)}}catch(e){}}((O=e.mag_trigger,V=O,O&&"object"==typeof O&&!Array.isArray(O)&&(V=function(){try{return window.matchMedia?window.matchMedia("(max-width: 480px)").matches:(window.innerWidth||document.documentElement.clientWidth||0)<=480}catch(e){return!1}}()?O.mobile:O.desktop),"string"!=typeof V?"none":(V=V.trim(),h[V]||V))),Se()}else _("magnet has no steps")}var O,V}()}function R(){var e="--m5-surface:#0F2435;--m5-surface-2:#17334A;--m5-border:#2a4a66;--m5-text:#E8F0F7;--m5-text-sub:#8FA8C0;--m5-meta:#9ab0c6;--m5-danger:#F87171;--m5-msg-bg:#0c1c2b;--m5-bot-bg:#17334A;--m5-bot-border:#23425e;--m5-shadow-launcher:0 8px 24px rgba(0,0,0,.5);--m5-shadow-panel:0 24px 60px rgba(0,0,0,.55),0 6px 16px rgba(0,0,0,.40);";return[":host{all:initial;}","[hidden]{display:none!important;}",".m5m-root{all:initial;","--m5-surface:#ffffff;--m5-surface-2:#f1f5f9;--m5-border:#e6ebf2;","--m5-text:#16243a;--m5-text-sub:#64748b;--m5-meta:#5b6b7f;--m5-danger:#DC2626;","--m5-msg-bg:#eef2f7;--m5-bot-bg:#ffffff;--m5-bot-border:#dde5ef;","--m5-shadow-launcher:0 8px 24px rgba(15,23,42,.20);","--m5-shadow-panel:0 24px 60px rgba(15,23,42,.22),0 6px 16px rgba(15,23,42,.10);","--m5-radius:18px;--m5-radius-msg:16px;--m5-radius-pill:999px;--m5-ease:cubic-bezier(.4,0,.2,1);",'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.45;}',".m5m-root *{box-sizing:border-box;}","@media (prefers-color-scheme: dark){.m5m-root:not(.m5m-light){"+e+"}}",".m5m-root.m5m-dark{"+e+"}",".m5m-launcher{position:fixed;bottom:var(--m5-launcher-bottom,20px);right:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);height:58px;padding:0 22px 0 16px;","border-radius:var(--m5-radius-pill);box-shadow:var(--m5-shadow-launcher),0 0 0 0 var(--m5-brand-glow);","transition:transform .22s var(--m5-ease),box-shadow .22s var(--m5-ease),opacity .2s var(--m5-ease);}",".m5m-launcher:hover{transform:translateY(-2px);box-shadow:var(--m5-shadow-launcher),0 10px 30px var(--m5-brand-glow);}",".m5m-launcher:active{transform:translateY(0);}",".m5m-launcher-ava{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(127,127,127,.18);color:var(--m5-on-brand);}",".m5m-launcher-ava svg{width:20px;height:20px;}",".m5m-launcher-label{font-size:15px;font-weight:650;letter-spacing:.1px;white-space:nowrap;}",".m5m-open .m5m-launcher{opacity:0;transform:translateY(8px) scale(.9);pointer-events:none;}",".m5m-panel{position:fixed;bottom:20px;right:20px;z-index:2147483000;width:374px;max-width:calc(100vw - 32px);","height:560px;max-height:calc(100vh - 40px);background:var(--m5-surface);border-radius:var(--m5-radius);","box-shadow:var(--m5-shadow-panel);display:flex;flex-direction:column;overflow:hidden;outline:none;","opacity:0;visibility:hidden;transform:translateY(14px) scale(.97);transform-origin:bottom right;pointer-events:none;","transition:opacity .26s var(--m5-ease),transform .26s var(--m5-ease),visibility 0s linear .26s;}",".m5m-open .m5m-panel{opacity:1;visibility:visible;transform:none;pointer-events:auto;transition:opacity .28s var(--m5-ease),transform .28s var(--m5-ease);}",".m5m-mode-right_slide .m5m-panel{top:0;bottom:0;right:0;height:100%;max-height:100%;width:400px;max-width:100vw;border-radius:0;transform:translateX(28px);}",".m5m-mode-right_slide.m5m-open .m5m-panel{transform:none;}",".m5m-mode-modal .m5m-panel{top:50%;left:50%;right:auto;bottom:auto;transform:translate(-50%,-46%) scale(.97);width:400px;max-width:calc(100vw - 24px);height:min(600px,86vh);transform-origin:center;}",".m5m-mode-modal.m5m-open .m5m-panel{transform:translate(-50%,-50%);}",".m5m-scrim{position:fixed;inset:0;z-index:2147482999;background:rgba(11,18,32,.5);opacity:0;visibility:hidden;transition:opacity .25s var(--m5-ease),visibility 0s linear .25s;}",".m5m-mode-modal.m5m-open .m5m-scrim{opacity:1;visibility:visible;transition:opacity .25s var(--m5-ease);}",".m5m-mode-inline{display:block;width:100%;}",".m5m-inline-card{display:flex;flex-direction:column;width:100%;max-width:var(--m5-inline-w,640px);margin:0 auto;height:var(--m5-inline-h,min(520px,80vh));","background:var(--m5-surface);border:1px solid var(--m5-border);border-radius:var(--m5-radius);box-shadow:0 6px 24px rgba(15,23,42,.08);overflow:hidden;}",".m5m-mode-inline .m5m-header{position:relative;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:24px 22px 18px;background:var(--m5-surface);color:var(--m5-text);border-bottom:1px solid var(--m5-border);}",".m5m-mode-inline .m5m-back{position:absolute;top:10px;left:10px;}",".m5m-mode-inline .m5m-ava{width:54px;height:54px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mode-inline .m5m-ava svg{width:28px;height:28px;}",".m5m-mode-inline .m5m-head-text{align-items:center;}",".m5m-mode-inline .m5m-title{font-size:20px;font-weight:700;line-height:1.28;}",".m5m-mode-inline .m5m-subtitle{color:var(--m5-text-sub);opacity:1;justify-content:center;}",".m5m-mode-inline .m5m-messages{padding:18px 18px 10px;}",".m5m-choices.m5m-tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;}",".m5m-tiles .m5m-choice:last-child:nth-child(odd){grid-column:1 / -1;}",".m5m-tiles .m5m-choice{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:10px;min-height:84px;padding:14px 16px;border:0;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:hover{transform:translateY(-2px);border:0;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 24px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:active{transform:translateY(0) scale(.99);}",".m5m-tiles .m5m-choice-icon{width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.22);color:var(--m5-on-brand);}",".m5m-tiles .m5m-choice-icon svg{width:22px;height:22px;}",".m5m-tiles .m5m-choice-body{flex:1 1 auto;}",".m5m-tiles .m5m-choice-label{font-size:14.5px;font-weight:650;line-height:1.3;white-space:normal;}",".m5m-tiles .m5m-choice-desc{color:var(--m5-on-brand);opacity:.85;}",".m5m-tiles .m5m-choice-arrow{display:none;}","@media (max-width:420px){.m5m-choices.m5m-tiles{grid-template-columns:1fr;}}",".m5m-header{display:flex;align-items:center;gap:12px;padding:15px 16px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));}",".m5m-ava{position:relative;flex:0 0 auto;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:rgba(127,127,127,.20);overflow:hidden;color:var(--m5-on-brand);}",".m5m-ava svg{width:21px;height:21px;}",".m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:50%;}",".m5m-head-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-title{font-size:15.5px;font-weight:680;letter-spacing:.1px;line-height:1.25;}",".m5m-subtitle{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.92;font-weight:500;}",".m5m-online{width:7px;height:7px;border-radius:50%;background:#34D399;box-shadow:0 0 0 0 rgba(52,211,153,.6);animation:m5mPulse 2.4s ease-in-out infinite;}",".m5m-close,.m5m-back{flex:0 0 auto;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:var(--m5-on-brand);cursor:pointer;transition:background .18s var(--m5-ease);}",".m5m-close:hover,.m5m-back:hover{background:rgba(127,127,127,.22);}",".m5m-back svg{transform:rotate(180deg);}",".m5m-messages{flex:1;overflow-y:auto;padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px;background:var(--m5-msg-bg);}",".m5m-row{display:flex;align-items:flex-end;gap:8px;max-width:100%;animation:m5mIn .32s var(--m5-ease) both;}",".m5m-row-user{flex-direction:row-reverse;}",".m5m-row.m5m-grouped{margin-top:-4px;}",".m5m-msg-ava{position:relative;flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));overflow:hidden;align-self:flex-start;color:var(--m5-on-brand);}",".m5m-msg-ava:empty{background:transparent;}",".m5m-msg-ava svg{width:15px;height:15px;}",".m5m-col{display:flex;flex-direction:column;gap:3px;max-width:78%;}",".m5m-msg{padding:10px 14px;border-radius:var(--m5-radius-msg);font-size:14px;line-height:1.45;word-wrap:break-word;}",".m5m-bot{background:var(--m5-bot-bg);color:var(--m5-text);border:1px solid var(--m5-bot-border);border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(15,23,42,.10);}",".m5m-user{max-width:78%;align-self:flex-end;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);border-bottom-right-radius:5px;box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-time{font-size:11px;color:var(--m5-meta);padding:0 6px;}",".m5m-typing{display:flex;align-items:center;gap:4px;padding:13px 15px;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);border-bottom-left-radius:5px;}",".m5m-typing span{width:7px;height:7px;border-radius:50%;background:var(--m5-text-sub);opacity:.55;animation:m5mDot 1.2s infinite ease-in-out;}",".m5m-typing span:nth-child(2){animation-delay:.16s;}",".m5m-typing span:nth-child(3){animation-delay:.32s;}",".m5m-input{padding:12px 14px 14px;background:var(--m5-surface);border-top:1px solid var(--m5-border);}",".m5m-input:empty{display:none;}",".m5m-actionbar{display:flex;border-top:1px solid var(--m5-border);background:var(--m5-surface);}",".m5m-action{flex:1;appearance:none;border:0;background:var(--m5-surface);cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:9px 4px;min-height:54px;color:var(--m5-text-sub);text-decoration:none;font-size:11px;font-weight:600;transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-action svg{width:20px;height:20px;}",".m5m-action:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-action:active{background:var(--m5-brand-soft);}",".m5m-action.m5m-act-on{color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:inset 0 -2.5px 0 var(--m5-brand);}",".m5m-action + .m5m-action{border-left:1px solid var(--m5-border);}",".m5m-form{display:flex;gap:8px;align-items:center;}",".m5m-form input{flex:1;min-width:0;border:1.5px solid var(--m5-border);border-radius:var(--m5-radius-pill);padding:11px 16px;font-size:14px;outline:none;background:var(--m5-surface);color:var(--m5-text);transition:border-color .18s var(--m5-ease),box-shadow .18s var(--m5-ease);}",".m5m-form input::placeholder{color:var(--m5-text-sub);}",".m5m-form input:focus{border-color:var(--m5-brand);box-shadow:0 0 0 3px var(--m5-brand-ring);}",".m5m-send{flex:0 0 auto;width:44px;height:44px;border:0;border-radius:50%;color:var(--m5-on-brand);cursor:pointer;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-send:hover{transform:scale(1.06);}",".m5m-send:active{transform:scale(.94);}",".m5m-choices{display:flex;flex-direction:column;gap:8px;}",".m5m-choice{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:14px;background:var(--m5-surface);color:var(--m5-text);padding:11px 14px;font-size:14px;font-weight:600;font-family:inherit;min-height:44px;transition:transform .16s var(--m5-ease),border-color .16s var(--m5-ease),background .16s var(--m5-ease),box-shadow .16s var(--m5-ease);}",".m5m-choice:hover{transform:translateX(4px);border-color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:0 4px 14px var(--m5-brand-glow);}",".m5m-choice:active{transform:translateX(2px) scale(.99);}",".m5m-choice-icon{flex:0 0 auto;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-choice-icon svg{width:18px;height:18px;}",".m5m-choice-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-choice-label{line-height:1.3;}",".m5m-choice-arrow{flex:0 0 auto;color:var(--m5-text-sub);opacity:0;transform:translateX(-4px);transition:opacity .16s var(--m5-ease),transform .16s var(--m5-ease),color .16s var(--m5-ease);display:grid;place-items:center;}",".m5m-choice:hover .m5m-choice-arrow{opacity:1;transform:translateX(0);color:var(--m5-brand);}",".m5m-success{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:26px 22px;margin-top:auto;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-success-icon{display:grid;place-items:center;width:62px;height:62px;border-radius:18px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 28px var(--m5-brand-glow);animation:m5mPop .42s var(--m5-ease) both;}",".m5m-success-title{font-size:17px;font-weight:700;color:var(--m5-text);margin-top:4px;}",".m5m-success-text{font-size:13.5px;color:var(--m5-text-sub);max-width:260px;}",".m5m-success-cta{margin-top:8px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:11px 26px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-success-cta:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-success-link{display:inline-block;margin-top:8px;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-success-link:hover{transform:translateY(-1px);}",".m5m-terminal{display:flex;justify-content:center;padding:8px 0 14px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-terminal-cta{display:inline-block;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-terminal-cta:hover{transform:translateY(-1px);}",".m5m-skip{display:block;margin:8px auto 0;border:0;background:transparent;color:var(--m5-text-sub);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;padding:4px 10px;border-radius:var(--m5-radius-pill);transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-skip:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-optout{display:flex;align-items:center;gap:6px;margin:8px 2px 0;font-size:12.5px;color:var(--m5-text-sub);cursor:pointer;user-select:none;}",".m5m-optout input{margin:0;flex:0 0 auto;accent-color:var(--m5-brand);cursor:pointer;}",".m5m-no-launcher .m5m-launcher{display:none!important;}",".m5m-summary{align-self:stretch;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);padding:15px 16px;box-shadow:0 1px 3px rgba(15,23,42,.10);animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sum-head{font-size:13px;font-weight:700;color:var(--m5-text);margin-bottom:11px;}",".m5m-sum-rows{display:flex;flex-direction:column;gap:9px;}",".m5m-sum-row{display:flex;justify-content:space-between;gap:14px;font-size:13px;line-height:1.35;}",".m5m-sum-label{color:var(--m5-text-sub);white-space:nowrap;}",".m5m-sum-val{color:var(--m5-text);font-weight:600;text-align:right;word-break:break-word;}",".m5m-sum-confirm{margin-top:14px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:11px;font-size:14px;font-weight:650;cursor:pointer;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-sum-confirm:hover{transform:translateY(-1px);}",".m5m-sum-confirm:disabled{opacity:.6;cursor:default;transform:none;}",".m5m-error{display:flex;flex-direction:column;gap:10px;align-items:center;padding:18px;text-align:center;}",".m5m-error-text{font-size:13.5px;color:var(--m5-danger);}",".m5m-retry{border:0;border-radius:var(--m5-radius-pill);padding:11px 22px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-home{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:22px 20px 10px;margin:auto 0;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-home-ava{position:relative;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 26px var(--m5-brand-glow);overflow:hidden;}",".m5m-home-ava .m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-home-ava svg{width:26px;height:26px;}",".m5m-home-ava .m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:16px;}",".m5m-home-title{font-size:18px;font-weight:750;color:var(--m5-text);line-height:1.3;}",".m5m-home-text{font-size:13.5px;color:var(--m5-text-sub);max-width:290px;line-height:1.5;}",".m5m-home-hint{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:var(--m5-brand);}",".m5m-home-hint svg{width:16px;height:16px;}",".m5m-reveal{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:26px 22px;margin:auto 0;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-reveal-icon{display:grid;place-items:center;width:56px;height:56px;border-radius:16px;color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-reveal-icon svg{width:26px;height:26px;}",".m5m-reveal-title{font-size:16px;font-weight:700;color:var(--m5-text);}",".m5m-reveal-val{font-size:19px;font-weight:750;color:var(--m5-brand);text-decoration:none;word-break:break-word;}",".m5m-reveal-val:hover{text-decoration:underline;}",".m5m-reveal-copy{display:inline-flex;align-items:center;gap:6px;margin-top:4px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease),color .16s var(--m5-ease);}",".m5m-reveal-copy:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-reveal-copy svg{width:15px;height:15px;}",".m5m-multi{display:flex;flex-direction:column;gap:8px;align-self:stretch;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-mopt{display:flex;align-items:center;gap:11px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:13px;background:var(--m5-surface);color:var(--m5-text);padding:12px 14px;font-size:14px;font-weight:600;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-mopt:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-icon{flex:0 0 auto;display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mopt-icon svg{width:17px;height:17px;}",".m5m-mopt-label{flex:1;min-width:0;}",".m5m-mopt-check{flex:0 0 auto;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--m5-border);color:transparent;transition:background .14s var(--m5-ease),border-color .14s var(--m5-ease),color .14s var(--m5-ease);}",".m5m-mopt-check svg{width:13px;height:13px;}",".m5m-mopt-on{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-on .m5m-mopt-check{background:var(--m5-brand);border-color:var(--m5-brand);color:var(--m5-on-brand);}",".m5m-multi-cont{margin-top:6px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-multi-cont:hover:not(:disabled){transform:translateY(-1px);}",".m5m-multi-cont:disabled{opacity:.5;cursor:default;}",".m5m-sched{align-self:stretch;display:flex;flex-direction:column;gap:12px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sd-meta{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--m5-text-sub);}",".m5m-sd-meta svg{width:16px;height:16px;}",".m5m-sd-days{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;}",".m5m-sd-day{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:1px;width:52px;padding:8px 4px;border:1.5px solid var(--m5-border);border-radius:12px;background:var(--m5-surface);color:var(--m5-text);cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-day:hover{border-color:var(--m5-brand);}",".m5m-sd-dow{font-size:10.5px;font-weight:600;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-num{font-size:17px;font-weight:750;}",".m5m-sd-mon{font-size:10px;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-day.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-day.m5m-sd-on .m5m-sd-dow,.m5m-sd-day.m5m-sd-on .m5m-sd-mon{color:rgba(255,255,255,.85);}",".m5m-sd-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}",".m5m-sd-slot{border:1.5px solid var(--m5-border);border-radius:10px;background:var(--m5-surface);color:var(--m5-text);padding:9px 4px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-slot:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-sd-slot.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-confirm{margin-top:2px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-sd-confirm:hover:not(:disabled){transform:translateY(-1px);}",".m5m-sd-confirm:disabled{opacity:.5;cursor:default;}",".m5m-cal{align-self:stretch;display:flex;flex-direction:column;gap:10px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-cal-frame{border:0;width:100%;flex:1 1 auto;min-height:440px;border-radius:12px;background:#fff;}",".m5m-cal-done{padding:11px 14px;border-radius:12px;background:var(--m5-brand-soft);color:var(--m5-text);font-size:13px;font-weight:600;}",".m5m-hidden{display:none!important;}","@keyframes m5mIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}","@keyframes m5mDot{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-4px);opacity:1;}}","@keyframes m5mPulse{0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5);}50%{box-shadow:0 0 0 5px rgba(52,211,153,0);}}","@keyframes m5mPop{0%{transform:scale(.4);opacity:0;}60%{transform:scale(1.08);}100%{transform:scale(1);opacity:1;}}","@media (max-width:480px){.m5m-panel{width:auto;left:12px;right:12px;bottom:12px;height:auto;top:12px;max-height:none;}.m5m-launcher{bottom:var(--m5-launcher-bottom,14px);right:14px;}}","@media (prefers-reduced-motion: reduce){.m5m-root *{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;}.m5m-choice:hover,.m5m-launcher:hover,.m5m-send:hover{transform:none;}}"].join("")}}();`}));function Gu(e={}){let t=e||{},n=Array.isArray(t.steps)&&t.steps.length?t.steps:[{id:`1`,step_type:`message`,step_prompts:[`👋 Add steps in the flow builder to preview the conversation.`],step_options:[],step_columns:[],step_description:``}];return{mag_display_mode:t.display_mode||`chat`,mag_trigger:`on_load`,mag_theme_color:/^#[0-9a-fA-F]{6}$/.test(t.theme_color||``)?t.theme_color:`#0072BA`,mag_theme_mode:t.theme_mode||`auto`,mag_title:t.title&&String(t.title).trim()||t.name||`Chat with us`,mag_subtitle:t.subtitle==null?`Typically replies in a few minutes`:t.subtitle,mag_launcher_label:t.launcher_label||``,mag_logo_url:t.logo_url||``,mag_logo_fit:t.logo_fit===`contain`?`contain`:`cover`,mag_summary:!!t.summary,mag_summary_heading:t.summary_heading||``,mag_summary_confirm_label:t.summary_confirm_label||``,mag_home:!!t.home,mag_welcome:t.welcome==null?``:t.welcome,mag_actions:Array.isArray(t.actions)?t.actions:[],mag_macro_steps:n,mag_font:t.font||``,mag_theme_vars:t.theme_vars&&typeof t.theme_vars==`object`&&Object.keys(t.theme_vars).length?t.theme_vars:void 0,mag_inline_width:t.inline_width||``,mag_inline_height:t.inline_height||``,mag_input_placeholder:t.input_placeholder||``,mag_success_title:t.success_title||``,mag_success_text:t.success_text==null?``:t.success_text,mag_success_cta:t.success_cta&&t.success_cta.url&&t.success_cta.label?t.success_cta:void 0}}function Ku(e){let t=JSON.stringify([e]),n=Uu.replace(/##APPGUID##/g,()=>`preview`).replace(/["']##MAGNET_DEFINITIONS##["']/g,()=>t).replace(/<\/script>/gi,`<\\/script>`);return`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
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
</body></html>`}function qu(){if(Qu)return;let e=document.createElement(`style`);e.id=`m5t-preview-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Qu=!0}function Ju(e){return`<div class="pv-hintwrap">
    <p class="pv-hint">${e}</p>
    <p class="pv-hint pv-hint--style">Custom styling on your site won't be shown here
      <button type="button" class="pv-info" data-pv-info aria-label="More about custom styling"><span class="material-symbols-outlined" aria-hidden="true">info</span></button>
    </p>
    <div class="pv-info-pop" data-pv-info-pop hidden>
      <strong>About custom styling</strong>
      This preview shows the magnet exactly as you set it up here. If you style over it with your own CSS on your website or app, those changes won't show in this preview, so the live version can look a little different.
    </div>
  </div>`}function Yu(e){let t=e.querySelector(`[data-pv-info]`),n=e.querySelector(`[data-pv-info-pop]`);t&&n&&t.addEventListener(`click`,()=>{n.hidden=!n.hidden})}function Xu(e,t){qu(),e.innerHTML=`
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
      ${Ju(`Live render of the real widget. Capture is disabled, so no test leads.`)}
    </div>`,Yu(e);let n=e.querySelector(`.pv-pane__frame`),r=e.querySelector(`.pv-pane__badge`),i=null,a=0;n.addEventListener(`load`,()=>{let e=(typeof performance<`u`?performance.now():Date.now())-a;clearTimeout(i),e<450?i=setTimeout(()=>{r.hidden=!0},450-e):r.hidden=!0});let o=()=>{let e;try{e=Ku(t())}catch{return}a=typeof performance<`u`?performance.now():Date.now(),r.hidden=!1,n.srcdoc=e,clearTimeout(i),i=setTimeout(()=>{r.hidden=!0},1500)};return e.querySelector(`.pv-pane__seg`).addEventListener(`click`,t=>{let r=t.target.closest(`button[data-device]`);!r||r.dataset.device===n.dataset.device||(e.querySelectorAll(`.pv-pane__seg button`).forEach(e=>e.classList.toggle(`is-on`,e===r)),n.dataset.device=r.dataset.device)}),o(),{refresh:o,destroy(){clearTimeout(i)}}}function Zu(e){qu();let t=`desktop`,n=document.createElement(`div`);n.className=`pv-scrim`,n.innerHTML=`
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
          ${Ju(`Live render of the actual widget. Capture is disabled, so no test leads are created.`)}
        </div>
      </div>
    </div>`,document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add(`open`)),Yu(n);let r=n.querySelector(`.pv-frame`),i=n.querySelector(`.pv-stage`),a=()=>{try{r.srcdoc=Ku(e())}catch{}};a();let o=()=>{n.classList.remove(`open`),setTimeout(()=>n.remove(),180)};return n.querySelector(`[data-x="close"]`).addEventListener(`click`,o),n.querySelector(`[data-x="refresh"]`).addEventListener(`click`,a),n.addEventListener(`click`,e=>{e.target===n&&o()}),n.querySelector(`.pv-seg`).addEventListener(`click`,e=>{let r=e.target.closest(`button[data-device]`);!r||r.dataset.device===t||(t=r.dataset.device,n.querySelectorAll(`.pv-seg button`).forEach(e=>e.classList.toggle(`is-on`,e.dataset.device===t)),i.dataset.device=t,a())}),{close:o,rebuild:a}}var Qu,$u=o((()=>{Wu(),Qu=!1}));function ed(e){let t=[];for(let n of e.steps||[])for(let e of n.step_columns||[])e&&!t.includes(e)&&t.push(e);return t}function td(e){let t=(e.steps||[])[0]||{},n=(t.step_prompts||[])[0]||``,r=``;return t.step_type===`single_select`||t.step_type===`multi_select`?r=(t.step_options||[]).slice(0,3).map(e=>`<span class="mag-tpl-pv__btn">${ud(e?.label)}</span>`).join(``):pd[t.step_type]?r=`<span class="mag-tpl-pv__input">${ud(pd[t.step_type])}</span>`:t.step_type===`scheduler`&&(r=`<span class="mag-tpl-pv__cal"><span class="material-symbols-outlined" aria-hidden="true">calendar_month</span>Pick a time</span>`),`<div class="mag-tpl-card__preview" aria-hidden="true"><span class="mag-tpl-pv__bubble">${ud(n)}</span>${r}</div>`}function nd(e,{detail:t=!1,gallery:n=!1,canUse:r=!0}={}){let i=t?ed(e):[],a=n?` mag-tpl-card--gallery`:``,o=n?` data-cat="${ud(e.category||``)}"`:``,s=n&&e.featured?`<span class="m5t-badge m5t-badge--featured m5t-featured-corner">Most popular</span>`:``,c=n?td(e):``,l=n&&(e.tags||[]).length?`<div class="m5t-chip-row mag-tpl-card__tags">${e.tags.map(e=>`<span class="m5t-chip">${ud(e)}</span>`).join(``)}</div>`:``,u=r?`<button class="mag-tpl-card__btn" type="button" data-tpl="${e.id}">
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
    </div>`}function rd(e){Ai(Ni.MAGNET_TEMPLATE,{id:e,at:Date.now()})}function id(e){if(!e)return null;if(typeof e==`string`)return fd.find(t=>t.id===e)||null;let{id:t,at:n}=e;return typeof n==`number`&&Date.now()-n>=md?null:fd.find(e=>e.id===t)||null}function ad(){return id(ji(Ni.MAGNET_TEMPLATE))}function od(){return id(Mi(Ni.MAGNET_TEMPLATE))}function sd(){if(hd)return;let e=document.createElement(`style`);e.id=`m5t-mag-template-styles`,e.textContent=`
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
  `,document.head.appendChild(e),hd=!0}function cd(e){sd();let t=document.createElement(`div`);t.className=`mag-modal-scrim mag-tpl-modal`,t.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="Start from a template">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Start from a template</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body">
        <div class="mag-tpl-grid">
          ${fd.map(e=>nd(e)).join(``)}
        </div>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`open`),t.querySelector(`.mag-modal`).classList.add(`open`)});let n=()=>{t.classList.remove(`open`),setTimeout(()=>t.remove(),180),document.removeEventListener(`keydown`,r)};function r(e){e.key===`Escape`&&(e.preventDefault(),n())}document.addEventListener(`keydown`,r),t.querySelector(`.mag-modal__close`).addEventListener(`click`,n),t.querySelectorAll(`[data-tpl]`).forEach(r=>{r.addEventListener(`click`,()=>{let i=fd.find(e=>e.id===r.dataset.tpl);i&&(t.querySelectorAll(`[data-tpl]`).forEach(e=>{e.disabled=!0}),n(),e(i))})})}var ld,ud,dd,fd,pd,md,hd,gd=o((()=>{Fi(),ld={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ud=e=>String(e??``).replace(/[&<>"']/g,e=>ld[e]),dd=Object.freeze({lead_capture:`Lead capture`,booking:`Booking`,engagement:`Engagement`,support:`Support`}),fd=[{id:`lead_capture`,name:`Lead Capture`,description:`A general-purpose qualify-and-capture flow. Ask what a visitor needs, then get their contact info.`,icon:`person_add`,category:`lead_capture`,tags:[`Contact info`,`Qualifying`],featured:!0,appearance:{title:`Chat with us`,subtitle:`Typically replies in a few minutes`},steps:[{id:`1`,step_type:`single_select`,step_columns:[`product_interest`],step_prompts:[`Hi there! 👋`,`What brings you here today?`],step_options:[{label:`Get a quote`,goto:``},{label:`Learn more`,goto:``},{label:`Just browsing`,goto:``}],step_description:``},{id:`2`,step_type:`text`,step_columns:[`name`],step_prompts:[`Great! What’s your name?`],step_options:[],step_description:``},{id:`3`,step_type:`email`,step_columns:[`email`],step_prompts:[`And your best email?`],step_options:[],step_description:``},{id:`4`,step_type:`phone`,step_columns:[`phone`],step_prompts:[`Last thing. A phone number in case we need to follow up?`],step_options:[],step_description:``}]},{id:`appointment_booking`,name:`Appointment Booking`,description:`Collect contact details, then let the visitor pick a time. Pairs with the Calendly integration under Settings.`,icon:`event_available`,category:`booking`,tags:[`Scheduling`,`Calendly`],featured:!1,appearance:{title:`Book a time with us`,subtitle:`Pick whatever works for your schedule`},steps:[{id:`1`,step_type:`text`,step_columns:[`name`],step_prompts:[`Hi! 👋 What’s your name?`],step_options:[],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`What’s the best email for your confirmation?`],step_options:[],step_description:``},{id:`3`,step_type:`phone`,step_columns:[`phone`],step_prompts:[`And a phone number, in case we need to reach you?`],step_options:[],step_description:``},{id:`4`,step_type:`scheduler`,step_columns:[],step_prompts:[`When works best for a quick call?`],step_options:[],step_description:``,step_config:{meeting_label:``,start:`09:00`,end:`17:00`,mins:30,days:14}}]},{id:`support_triage`,name:`Support Triage`,description:`Route a visitor to the right kind of help before they describe the issue, so your team sees the full picture up front.`,icon:`support_agent`,category:`support`,tags:[`Routing`,`Existing customers`],featured:!1,appearance:{title:`How can we help?`,subtitle:`We’ll get back to you as soon as we can`},steps:[{id:`1`,step_type:`multi_select`,step_columns:[`product_interest`],step_prompts:[`What do you need help with?`,`Pick everything that applies.`],step_options:[{label:`Billing question`,goto:``},{label:`Technical issue`,goto:``},{label:`Feature request`,goto:``},{label:`Something else`,goto:``}],step_description:``},{id:`2`,step_type:`text`,step_columns:[`description`],step_prompts:[`Can you describe what’s going on?`],step_options:[],step_description:``},{id:`3`,step_type:`text`,step_columns:[`name`],step_prompts:[`What’s your name?`],step_options:[],step_description:``},{id:`4`,step_type:`email`,step_columns:[`email`],step_prompts:[`Best email to follow up on this?`],step_options:[],step_description:``}]},{id:`quote_request`,name:`Quote Request`,description:`For local and home-service businesses. Describe the job, leave contact info, get a callback.`,icon:`request_quote`,category:`lead_capture`,tags:[`Local services`,`Callback`],featured:!1,appearance:{title:`Get a free quote`,subtitle:`Tell us about the job and we’ll follow up`},steps:[{id:`1`,step_type:`text`,step_columns:[`description`],step_prompts:[`What’s the job? 🛠️`,`(e.g. roof repair, install a fence, fix a leak…)`],step_options:[],step_description:``},{id:`2`,step_type:`text`,step_columns:[`name`],step_prompts:[`What’s your name?`],step_options:[],step_description:``},{id:`3`,step_type:`phone`,step_columns:[`phone`],step_prompts:[`Best phone number for a quick callback?`],step_options:[],step_description:``},{id:`4`,step_type:`email`,step_columns:[`email`],step_prompts:[`And an email, in case we can’t reach you by phone?`],step_options:[],step_description:``}]},{id:`site_navigation_guide`,name:`Site Navigation Guide`,description:`A branching menu for content or reference sites. Visitors pick where they want to go instead of filling out a form. No contact info collected.`,icon:`signpost`,category:`engagement`,tags:[`Branching`,`No contact info`],featured:!1,appearance:{title:`Looking for something?`,subtitle:`Pick an option below`},steps:[{id:`1`,step_type:`single_select`,step_columns:[],step_prompts:[`Hi there! 👋`,`What can I help you find?`],step_options:[{label:`Browse products`,goto:`2`},{label:`See pricing`,goto:`3`},{label:`Read our guide`,goto:`4`},{label:`Something else`,goto:`5`}],step_description:``},{id:`2`,step_type:`message`,step_columns:[],step_prompts:[`Here’s where to browse. Take a look!`],step_options:[],step_description:``,step_config:{terminal:!0,cta:{label:`Browse products`,url:`https://example.com/products`}}},{id:`3`,step_type:`message`,step_columns:[],step_prompts:[`Here’s our pricing. Take a look!`],step_options:[],step_description:``,step_config:{terminal:!0,cta:{label:`See pricing`,url:`https://example.com/pricing`}}},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`Here’s our guide. Take a look!`],step_options:[],step_description:``,step_config:{terminal:!0,cta:{label:`Read our guide`,url:`https://example.com/guide`}}},{id:`5`,step_type:`message`,step_columns:[],step_prompts:[`Thanks for stopping by. Feel free to reach out if you need anything else.`],step_options:[],step_description:``,step_config:{terminal:!0}}]},{id:`newsletter_signup`,name:`Newsletter Signup`,description:`Pick a topic, leave an email, done. The shortest path from visitor to subscriber.`,icon:`mail`,category:`lead_capture`,tags:[`Email list`,`Two questions`],featured:!1,appearance:{title:`Join the list`,subtitle:`One short email, now and then`},steps:[{id:`1`,step_type:`single_select`,step_columns:[`product_interest`],step_prompts:[`Hi there! 👋`,`What do you want to hear about?`],step_options:[{label:`Product updates`,goto:``},{label:`Tips and how-tos`,goto:``},{label:`Deals and offers`,goto:``}],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`Where should we send it?`],step_options:[],step_description:``},{id:`3`,step_type:`message`,step_columns:[],step_prompts:[`You’re on the list. Watch your inbox!`],step_options:[],step_description:``}]},{id:`demo_request`,name:`Demo Request`,description:`Qualify a B2B visitor on name, work email, company and industry, then let them book the call.`,icon:`co_present`,category:`booking`,tags:[`B2B`,`Scheduling`],featured:!1,appearance:{title:`See a demo`,subtitle:`A short walkthrough, on your schedule`},steps:[{id:`1`,step_type:`text`,step_columns:[`name`],step_prompts:[`Happy to show you around! 👋`,`What’s your name?`],step_options:[],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`What’s your work email?`],step_options:[],step_description:``},{id:`3`,step_type:`text`,step_columns:[`company`],step_prompts:[`Where do you work?`],step_options:[],step_description:``},{id:`4`,step_type:`single_select`,step_columns:[`industry`],step_prompts:[`What kind of business is it?`],step_options:[{label:`Agency`,goto:``},{label:`Ecommerce`,goto:``},{label:`SaaS`,goto:``},{label:`Other`,goto:``}],step_description:``},{id:`5`,step_type:`scheduler`,step_columns:[],step_prompts:[`When works best for your demo?`],step_options:[],step_description:``,step_config:{meeting_label:``,start:`09:00`,end:`17:00`,mins:30,days:14}}]},{id:`feedback_pulse`,name:`Feedback Pulse`,description:`A three-tap sentiment check with room for a comment and an optional reply address.`,icon:`reviews`,category:`engagement`,tags:[`Feedback`,`Existing customers`],featured:!1,appearance:{title:`Quick question`,subtitle:`Takes about twenty seconds`},steps:[{id:`1`,step_type:`single_select`,step_columns:[],step_prompts:[`How was your experience with us?`],step_options:[{label:`Great`,goto:``},{label:`Okay`,goto:``},{label:`Not great`,goto:``}],step_description:``},{id:`2`,step_type:`text`,step_columns:[`description`],step_prompts:[`What could we do better?`],step_options:[],step_description:``},{id:`3`,step_type:`email`,step_columns:[`email`],step_prompts:[`Want a reply? Leave your email.`],step_options:[],step_description:``},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`Thanks, that really helps.`],step_options:[],step_description:``}]},{id:`exit_intent_offer`,name:`Exit Intent Offer`,description:`A discount for visitors about to leave, with a polite exit for anyone who says no.`,icon:`door_open`,category:`engagement`,tags:[`Discount`,`Branching`],featured:!1,appearance:{title:`Before you go`,subtitle:`10% off your first order`},steps:[{id:`1`,step_type:`single_select`,step_columns:[],step_prompts:[`Before you go, want 10% off your first order?`],step_options:[{label:`Yes, send me the code`,goto:`2`},{label:`No thanks`,goto:`4`}],step_description:``},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`No worries, enjoy your visit!`],step_options:[],step_description:``,step_config:{terminal:!0}},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`Where should we send the code?`],step_options:[],step_description:``},{id:`3`,step_type:`message`,step_columns:[],step_prompts:[`Check your inbox, your code is on the way.`],step_options:[],step_description:``}]},{id:`event_registration`,name:`Event Registration`,description:`Register an attendee and let them pick the session they want.`,icon:`event`,category:`booking`,tags:[`Events`,`Sessions`],featured:!1,appearance:{title:`Save your seat`,subtitle:`Register in under a minute`},steps:[{id:`1`,step_type:`text`,step_columns:[`name`],step_prompts:[`Glad you’re coming! 🎟️`,`What’s your name?`],step_options:[],step_description:``},{id:`2`,step_type:`email`,step_columns:[`email`],step_prompts:[`Where should we send your ticket?`],step_options:[],step_description:``},{id:`3`,step_type:`single_select`,step_columns:[],step_prompts:[`Which session do you want?`],step_options:[{label:`Morning session`,goto:``},{label:`Afternoon session`,goto:``},{label:`Evening session`,goto:``}],step_description:``},{id:`4`,step_type:`message`,step_columns:[],step_prompts:[`You’re registered. See you there!`],step_options:[],step_description:``}]}],pd={text:`Type your answer`,email:`you@example.com`,phone:`(555) 123-4567`},md=3e5,hd=!1})),_d=c({CTA_META:()=>Lf,CTA_ORDER:()=>Rf,DISPLAY_OPTS:()=>Pf,FONT_GROUPS:()=>Kf,MOBILE_BREAKPOINT_PX:()=>480,MODE_LABEL:()=>Mf,THEME_OPTS:()=>Ff,TRIGGER_OPTS:()=>If,collectTrigger:()=>xd,connIsPast:()=>Fd,cspNoteHTML:()=>Af,init:()=>Zd,installGuideHTML:()=>jf,openModal:()=>Tf,perDeviceSide:()=>yd,perDeviceTrigger:()=>Sd,perDeviceTriggerLabel:()=>Cd,render:()=>Xd,stepFunnelHTML:()=>uf,syncPerDeviceVisibility:()=>bd,triggerSelection:()=>vd});function vd(e){return e?Sd(e)?`__per_device`:e.trigger||`none`:`on_load`}function yd(e,t){let n=Sd(e);if(n)return n[t]||`none`;let r=e&&typeof e.trigger==`string`?e.trigger:`on_load`;return t===`mobile`?`none`:r}function bd(e){let t=e.querySelector(`#mag-f-trigger`),n=e.querySelector(`#mag-f-perdev`);if(!t||!n)return;let r=e.querySelector(`input[name="mag-display"]:checked`)?.value===`inline`,i=t.querySelector(`option[value="__per_device"]`);i&&(i.hidden=r),r&&t.value===`__per_device`&&(t.value=`none`),n.hidden=r||t.value!==`__per_device`}function xd(e){let t=e.querySelector(`#mag-f-trigger`)?.value||`on_load`;if(t!==`__per_device`)return t;let n=e.querySelector(`#mag-f-trigger-desktop`)?.value,r=e.querySelector(`#mag-f-trigger-mobile`)?.value;if(!(!n||!r))return{desktop:n,mobile:r}}function Sd(e){let t=e&&e.trigger;return t&&typeof t==`object`&&!Array.isArray(t)?t:null}function Cd(e){let t=Sd(e);if(!t)return``;let n=e=>(If.find(t=>t.value===(e||`none`))||{}).label||e||`none`;return`Per device — desktop: ${n(t.desktop)}; mobile: ${n(t.mobile)}`}async function wd(){if(zf)return zf;let e;try{let t=await fetch(`${G()}/m5t/v5/integrations/calendly/event_types`),n=await t.json().catch(()=>({}));e=t.status===404?{ok:!1,reason:`not_connected`}:n.ok?{ok:!0,list:n.data.event_types||[],scheduling_url:n.data.scheduling_url||``}:{ok:!1,reason:`error`}}catch{e={ok:!1,reason:`error`}}return e.ok&&(zf=e),e}async function Td(e){let t=e.dataset.saved||``,n=e.dataset.savedName||`Saved Calendly event`;e.innerHTML=`<option value="${U(t)}">${t?U(n):`Loading event types`}</option>`;let r=await wd();if(!r.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${U(t)}" selected>${U(n)}</option>`:`<option value="">${r.reason===`not_connected`?`Connect Calendly under Settings, Integrations first`:`Could not load event types`}</option>`;return}let i=[];r.scheduling_url&&i.push({url:r.scheduling_url,label:`Full scheduling page (visitor picks the event)`}),r.list.forEach(e=>i.push({url:e.scheduling_url,label:e.duration?`${e.name} (${e.duration} min)`:e.name})),t&&!i.some(e=>e.url===t)&&i.unshift({url:t,label:n}),e.innerHTML=i.length?i.map(e=>`<option value="${U(e.url)}"${e.url===(t||i[0].url)?` selected`:``}>${U(e.label)}</option>`).join(``):`<option value="">No active event types</option>`}async function Ed(){if(Bf)return Bf;let e;try{let t=await fetch(`${G()}/m5t/v5/integrations/callrail/trackers`),n=await t.json().catch(()=>({}));e=t.status===404?{ok:!1,reason:`not_connected`}:n.ok?{ok:!0,list:n.data.trackers||[]}:{ok:!1,reason:`error`}}catch{e={ok:!1,reason:`error`}}return e.ok&&(Bf=e),e}async function Dd(e){let t=e.dataset.saved||``,n=e.dataset.savedName||`Saved tracking number`;e.innerHTML=`<option value="${U(t)}">${t?U(n):`Loading tracking numbers`}</option>`;let r=await Ed();if(!r.ok){delete e.dataset.listed,e.innerHTML=t?`<option value="${U(t)}" selected>${U(n)}</option>`:`<option value="">${r.reason===`not_connected`?`Connect CallRail under Settings, Integrations first`:`Could not load tracking numbers`}</option>`;return}let i=r.list.map(e=>({number:e.number,id:e.id,name:e.name,label:`${e.name} · ${e.number}${e.type===`session`?` (number pool)`:``}`}));t&&!i.some(e=>e.number===t)&&i.unshift({number:t,id:e.dataset.savedId||``,name:n,label:n}),e.innerHTML=i.length?i.map(e=>`<option value="${U(e.number)}" data-tracker-id="${U(e.id)}" data-tracker-name="${U(e.name)}"${e.number===(t||i[0].number)?` selected`:``}>${U(e.label)}</option>`).join(``):`<option value="">No active tracking numbers in this company</option>`}function Od(e,t,n){return`<div class="mag-seg" role="radiogroup" aria-label="${U(e)}">${n.map(n=>`
    <label><input type="radio" name="${U(e)}" value="${U(n.value)}"${n.value===t?` checked`:``}>
      <span><span class="material-symbols-outlined" aria-hidden="true">${U(n.icon)}</span>${U(n.label)}</span></label>`).join(``)}</div>`}function kd(e,t){let n=Lf[e],r=!!t,i=r?``:` disabled`,a=``;if(n.kind===`value`&&e===`call`){let e=t?.config?.source===`callrail`,r=e&&t?.value||``,o=e?t?.config?.tracker_name||`Saved tracking number`:``;a=`
      <select class="mag-modal__select mag-cta__callsrc"${i}>
        <option value=""${e?``:` selected`}>Phone number</option>
        <option value="callrail"${e?` selected`:``}>CallRail</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="${U(n.placeholder)}" value="${U(e?``:t?.value||``)}"${i}${e?` hidden`:``}>
      <select class="mag-modal__select mag-cta__crtracker" data-saved="${U(r)}" data-saved-name="${U(o)}" data-saved-id="${U(e&&t?.config?.tracker_id||``)}"${i}${e?``:` hidden`}>
        ${r?`<option value="${U(r)}" selected>${U(o)}</option>`:``}
      </select>`}else if(n.kind===`value`)a=`<input class="mag-modal__input mag-cta__val" type="text" placeholder="${U(n.placeholder)}" value="${U(t?.value||``)}"${i}>`;else if(n.kind===`book`){let e=t?.config?.meeting_label||t?.value||``,n=t?.config?.source===`calendly`,r=n&&t?.config?.calendly_url||``,o=n?t?.config?.event_name||`Saved Calendly event`:``;a=`
      <select class="mag-modal__select mag-cta__booksrc"${i}>
        <option value=""${n?``:` selected`}>Built-in scheduler</option>
        <option value="calendly"${n?` selected`:``}>Calendly</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="Meeting label (e.g. 15 minute call), or paste a booking link" value="${U(e)}"${i}${n?` hidden`:``}>
      <select class="mag-modal__select mag-cta__calevent" data-saved="${U(r)}" data-saved-name="${U(o)}"${i}${n?``:` hidden`}>
        ${r?`<option value="${U(r)}" selected>${U(o)}</option>`:``}
      </select>`}else a=`<span class="mag-cta__note">${n.kind===`support`?`Multi-select intake`:`Opens your conversation flow`}</span>`;let o=``;if(n.kind===`support`){let e=(t?.config?.options||[]).map(e=>e&&e.label||e).filter(Boolean);o=`<textarea class="mag-modal__input mag-cta__opts" rows="3" placeholder="Support options, one per line (e.g. Sales&#10;Support&#10;Billing)"${i}>${U(e.join(`
`))}</textarea>`}return`<div class="mag-cta" data-type="${e}" data-kind="${n.kind}">
    <div class="mag-cta__main">
      <label class="mag-cta__tog"><input type="checkbox" class="mag-cta__on"${r?` checked`:``}>
        <span class="material-symbols-outlined" aria-hidden="true">${n.icon}</span>${n.label}</label>
      ${a}
    </div>
    ${o}
  </div>`}function Ad(){if(Df)return;let e=document.createElement(`style`);e.id=`m5t-magnets-styles`,e.textContent=`
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
    .page-shell .mag-guide { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
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
    .page-shell .mag-csp-note { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
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
    .page-shell .mag-install { margin: 8px 0 0; padding: 9px 11px; border-radius: 8px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); font-size: 0.78rem; }
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
    .page-shell .mag-conn { margin: 8px 0 0; padding: 9px 11px; border-radius: 8px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); font-size: 0.78rem; }
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
    .page-shell .mag-conn__sub { color: var(--color-text-subtle, #6C7C9A); font-size: 0.72rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-conn__status { flex: 0 0 auto; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-conn__past { margin-top: 4px; }
    .page-shell .mag-conn__past > summary { cursor: pointer; color: var(--color-text-muted, #4A5A78); font-size: 0.76rem; padding: 3px 0; }
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
    .page-shell .mag-actions { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 2px; }
    .page-shell .mag-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 11px; border-radius: 8px; display: inline-flex; align-items: center; gap: 5px; color: var(--color-text, #0B1220); }
    .page-shell .mag-btn:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .mag-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .mag-btn .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-btn--primary { border-color: var(--color-accent, #0072BA); color: var(--color-accent, #0072BA); font-weight: 700; }
    .page-shell .mag-btn--primary:hover { background: var(--color-accent-soft, rgba(0,114,186,0.10)); }
    .page-shell .mag-actions--sub { margin-top: 6px; }
    .page-shell .mag-actions--sub .mag-btn { font-size: 0.74rem; color: var(--color-text-muted, #4A5A78); }
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
  `,document.head.appendChild(e),Df=!0}function jd(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Md(e){let t=H.stats[e];if(!t||!t.opens&&!t.leads)return`<div class="mag-stats"><span><span class="material-symbols-outlined" aria-hidden="true">monitoring</span>No activity yet (30d)</span></div>`;let n=e=>Number(e||0).toLocaleString();return`<div class="mag-stats" title="Trailing 30 days">
    <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span><b>${n(t.opens)}</b>&nbsp;opens</span>
    <span><span class="material-symbols-outlined" aria-hidden="true">person_add</span><b>${n(t.leads)}</b>&nbsp;leads</span>
    ${t.completion_rate==null?``:`<span><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><b>${t.completion_rate}%</b></span>`}
  </div>`}function Nd(e){let t=H.install[e.guid];if(!t)return``;let n=t.unrecognized||[],r=(t.traffic?.opens||0)>0,i=e.can_manage===!0,a=n.length?`
    <div class="mag-install__seen">
      <div class="mag-install__seenhd">Seen requesting this magnet, not on the allow-list:</div>
      ${n.map(t=>`
        <div class="mag-install__row">
          <span class="mag-install__dom" title="${U(t.domain)}">${U(t.domain)}</span>
          <span class="mag-install__hits">${Number(t.hits||0).toLocaleString()}&times;</span>
          ${i?`<button class="mag-btn" data-action="allow-domain" data-guid="${U(e.guid)}" data-domain="${U(t.domain)}">Allow</button>
          <button class="mag-btn" data-action="dismiss-domain" data-guid="${U(e.guid)}" data-domain="${U(t.domain)}" title="Stop showing this domain">Dismiss</button>`:``}
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
          <span class="mag-install__dom" title="${U(t)}">${U(t)}</span>
          ${i?`<button class="mag-btn" data-action="restore-domain" data-guid="${U(e.guid)}" data-domain="${U(t)}">Restore</button>`:``}
        </div>`).join(``)}
      <p class="mag-install__hint">Dismissing also covers subdomains — hiding <code>vercel.app</code> hides every preview URL under it.</p>
    </details>`:``;if(r){let e=t.traffic.last_open_at?new Date(t.traffic.last_open_at).toLocaleString():``;return`<div class="mag-install" data-state="live">
      <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
        Live${e?` — last visitor ${U(e)}`:``}</div>
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
  </div>`}async function Pd(){await Promise.all(H.magnets.map(async e=>{try{let t=await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity`)).json().catch(()=>({}));if(!t.ok)return;H.install[e.guid]=t;let n=document.querySelector(`.mag-card[data-guid="${CSS.escape(e.guid)}"] .mag-install-slot`);n&&(n.innerHTML=Nd(e))}catch(t){console.warn(`[magnets] install activity failed:`,e.guid,t)}}))}function Fd(e){return e?e.status===`REVOKED`||e.status===`PENDING`&&e.codeLive===!1:!1}function Id(e,t){let n=t.status===`PENDING`&&t.codeLive===!1,r=(n?Hf.EXPIRED:Hf[t.status])||{label:t.status,icon:`help`,tone:`off`},i=t.lastSeen?new Date(t.lastSeen).toLocaleString():``,a=t.host?U(t.host):n||t.status===`REVOKED`?`Code was never used`:`Waiting for a site to use this code`,o=[t.siteName?U(t.siteName):``,i?`last seen ${U(i)}`:``].filter(Boolean).join(` — `);return`
    <div class="mag-conn__row" data-conn="${U(t.guid)}" data-state="${r.tone}">
      <span class="mag-conn__icon material-symbols-outlined" aria-hidden="true">${r.icon}</span>
      <span class="mag-conn__site">
        <span class="mag-conn__host">${a}</span>
        ${o?`<span class="mag-conn__sub">${o}</span>`:``}
      </span>
      <span class="mag-conn__status">${U(r.label)}</span>
      ${e.can_manage===!0?Fd(t)?`<button class="mag-btn" data-action="clear-connection" data-guid="${U(e.guid)}" data-conn="${U(t.guid)}"
                   data-label="${U(t.host||`this unused code`)}"
                   title="Remove this finished record from the list">
             Clear
           </button>`:`<button class="mag-btn" data-action="revoke-connection" data-guid="${U(e.guid)}" data-conn="${U(t.guid)}"
                   title="${t.status===`PENDING`?`Cancel this pairing code`:`Disconnect this site and revoke its key`}">
             ${t.status===`PENDING`?`Cancel`:`Disconnect`}
           </button>`:``}
    </div>`}function Ld(e){let t=H.pairing[e.guid];if(!t)return``;if(t.error)return`<div class="mag-conn__code" data-state="error">
      <p class="mag-install__hint">${U(t.error)}</p>
      <button class="mag-btn" data-action="pair-start" data-guid="${U(e.guid)}">Try again</button>
    </div>`;if(t.connected)return`<div class="mag-conn__code" data-state="done">
      <div class="mag-conn__hd"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
        Connected${t.connectedHost?` — ${U(t.connectedHost)}`:``}</div>
      <p class="mag-install__hint">The site is paired and its domain has been added to this magnet.</p>
    </div>`;let n=Math.max(0,Math.ceil((t.expiresAt-Date.now())/1e3));if(n<=0)return`<div class="mag-conn__code" data-state="expired">
      <p class="mag-install__hint">That code expired. Codes are shown once and can't be retrieved, so generate a new one.</p>
      <button class="mag-btn mag-btn--primary" data-action="pair-start" data-guid="${U(e.guid)}">Generate a new code</button>
    </div>`;let r=String(Math.floor(n/60)),i=String(n%60).padStart(2,`0`);return`<div class="mag-conn__code" data-state="live">
    <div class="mag-conn__hd">Your pairing code</div>
    <div class="mag-conn__codebox">
      <code data-x="code">${U(t.code)}</code>
      <button class="mag-btn" data-action="copy-code" data-guid="${U(e.guid)}" title="Copy pairing code">
        <span class="material-symbols-outlined" aria-hidden="true">content_copy</span>
      </button>
    </div>
    <p class="mag-conn__countdown">Expires in <strong data-x="countdown">${r}:${i}</strong>. Waiting for your site to connect&hellip;</p>
    <p class="mag-install__hint">This code is shown once and can't be shown again — if you lose it, generate another. It only works for this magnet.</p>
  </div>`}function Rd(e){let t=H.connections[e.guid];if(!t)return``;if(t.failed)return`<div class="mag-conn">
      <div class="mag-conn__hd">
        <span class="material-symbols-outlined" aria-hidden="true">lan</span>Connected sites
      </div>
      <p class="mag-install__hint">Couldn't load connected sites just now. Reload to try again — this doesn't affect the magnet itself.</p>
    </div>`;let n=t.connections||[],r=n.filter(t=>t.status!==`PENDING`||e.can_manage===!0),i=n.filter(e=>e.status===`ACTIVE`).length,a=Ld(e),o=r.filter(e=>!Fd(e)),s=r.filter(e=>Fd(e)),c=o.length?o.map(t=>Id(e,t)).join(``):`<p class="mag-install__hint">No sites connected yet. On WordPress, connecting a site pairs it without pasting the snippet by hand.</p>`,l=s.length?`
    <details class="mag-conn__past">
      <summary>${s.length} earlier ${s.length===1?`code or disconnected site`:`codes and disconnected sites`}</summary>
      ${s.map(t=>Id(e,t)).join(``)}
    </details>`:``;return`<div class="mag-conn">
    <div class="mag-conn__hd">
      <span class="material-symbols-outlined" aria-hidden="true">lan</span>
      Connected sites${i?` (${i})`:``}
    </div>
    ${c}
    ${l}
    ${a}
    ${e.can_manage===!0&&!a?`
      <button class="mag-btn" data-action="pair-start" data-guid="${U(e.guid)}">
        <span class="material-symbols-outlined" aria-hidden="true">add_link</span>Connect a WordPress site
      </button>`:``}
  </div>`}function zd(e){let t=document.querySelector(`.mag-card[data-guid="${CSS.escape(e.guid)}"] .mag-conn-slot`);t&&(t.innerHTML=Rd(e))}async function Bd(e){let t=await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/connections`)).json().catch(()=>({}));if(!t.ok)throw Error(t.error||`Could not load connected sites`);return t}async function Vd(){await Promise.all(H.magnets.map(async e=>{try{H.connections[e.guid]=await Bd(e)}catch(t){console.warn(`[magnets] connections failed:`,e.guid,t),H.connections[e.guid]={failed:!0}}zd(e)}))}function Hd(){H.pairTimer&&(clearInterval(H.pairTimer),H.pairTimer=null)}function Ud(e){return!!document.querySelector(`.mag-card[data-guid="${CSS.escape(e)}"] .mag-conn-slot`)}function Wd(){if(H.pairTimer)return;let e=0;H.pairTimer=setInterval(async()=>{for(let e of Object.keys(H.pairing))Ud(e)||delete H.pairing[e];let t=Object.keys(H.pairing);if(!t.length){Hd();return}if(!t.some(e=>{let t=H.pairing[e];return!t.connected&&!t.error&&t.expiresAt-Date.now()>0})){t.forEach(e=>{let t=H.magnets.find(t=>t.guid===e);t&&zd(t)}),Hd();return}e+=1e3;let n=e>=Vf;n&&(e=0);for(let e of t){let t=H.magnets.find(t=>t.guid===e),r=H.pairing[e];if(!t||!r)continue;let i=r.expiresAt-Date.now()<=0;if(n&&!r.connected&&!r.error&&!i)try{let n=await Bd(t);H.connections[e]=n;let i=(n.connections||[]).find(e=>e.guid===r.connectionGuid&&e.status===`ACTIVE`);i&&(H.pairing[e]={connected:!0,connectionGuid:r.connectionGuid,connectedHost:i.host},W(`${i.host||`Your site`} connected`,`success`))}catch{}zd(t)}},1e3)}async function Gd(e){try{let t=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/pairing-code`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`}),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok){H.pairing[e.guid]={error:n.message||n.error||`Could not generate a pairing code`},zd(e);return}H.pairing[e.guid]={code:n.pairingCode,connectionGuid:n.connectionGuid,expiresAt:new Date(n.expiresAt).getTime()};try{H.connections[e.guid]=await Bd(e)}catch{}zd(e),Wd()}catch{H.pairing[e.guid]={error:`Could not reach the server. Try again.`},zd(e)}}async function Kd(e){let t=H.pairing[e.guid]?.code;if(t)try{await navigator.clipboard.writeText(t),W(`Pairing code copied`,`success`)}catch{W(`Copy failed — select the code and copy it manually`,`danger`)}}async function qd(e,t,n){if(window.confirm(`Clear the record for ${n||`this connection`}?\n\nIt is removed from this list for good. This only tidies up the history — the site is already disconnected, so nothing about access changes.`))try{let n=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/connections/${encodeURIComponent(t)}`,{method:`DELETE`}),r=await n.json().catch(()=>({}));if(!n.ok||!r.ok){W(r.message||r.error||`Could not clear that record`,`danger`);return}W(`Record cleared`,`success`);try{H.connections[e.guid]=await Bd(e)}catch{}zd(e)}catch{W(`Could not reach the server`,`danger`)}}async function Jd(e,t){let n=(H.connections[e.guid]?.connections||[]).find(e=>e.guid===t),r=n?.status===`PENDING`,i=r?`Cancel this pairing code?`:`Disconnect ${n?.host||`this site`}?`,a=r?`The code stops working immediately.`:`Its key stops working immediately and the plugin will show as disconnected. The domain stays on the allow-list — remove it separately if you want the magnet off that site.`;if(window.confirm(`${i}\n\n${a}`))try{let n=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/connections/${encodeURIComponent(t)}/revoke`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`}),i=await n.json().catch(()=>({}));if(!n.ok||!i.ok){W(i.message||i.error||`Could not disconnect`,`danger`);return}H.pairing[e.guid]?.connectionGuid===t&&delete H.pairing[e.guid],W(r?`Pairing code cancelled`:`Site disconnected`,`success`);try{H.connections[e.guid]=await Bd(e)}catch{}zd(e)}catch{W(`Could not reach the server`,`danger`)}}function Yd(e){let t=H.owners.length>1||E.getMemberships().length>1,n=(e.domains||[]).filter(Boolean),r=e.can_manage===!0;return`
    <div class="mag-card" data-guid="${U(e.guid)}">
      <div class="mag-card__top">
        <span class="mag-swatch" style="background:${U(e.theme_color||`#0072BA`)}"></span>
        <span class="mag-card__hd">
          <div class="mag-name" title="${U(e.name)}">${U(e.name)}</div>
          ${t&&e.owner_name?`<div class="mag-owner">${U(e.owner_name)}</div>`:``}
        </span>
        <span class="mag-badge" data-s="${U(e.status)}">${U(e.status)}</span>
      </div>
      <span class="mag-mode"><span class="material-symbols-outlined" aria-hidden="true">${Nf[e.display_mode]||`chat`}</span>${U(Mf[e.display_mode]||`Chat bubble`)}${e.ab?.enabled?`&nbsp;&nbsp;<span class="mag-ab-chip"><span class="material-symbols-outlined" aria-hidden="true">science</span>A/B</span>`:``}${(e.notify_emails||[]).length?`&nbsp;&nbsp;<a class="mag-alert-chip" href="#/settings/notifications" title="Lead alerts to ${(e.notify_emails||[]).length} email${(e.notify_emails||[]).length===1?``:`s`}. Manage in Settings."><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span>${(e.notify_emails||[]).length}</a>`:``}</span>
      ${Md(e.guid)}
      <div class="mag-domains">${n.length?n.map(e=>U(e)).join(`, `):`<span>No domains set. Add yours to go live.</span>`}</div>
      <div class="mag-install-slot">${Nd(e)}</div>
      <div class="mag-conn-slot">${Rd(e)}</div>
      <div class="mag-embed">
        <input type="text" readonly value="${U(kf(e.guid))}" aria-label="Embed snippet">
        <button class="mag-btn" data-action="copy" data-guid="${U(e.guid)}" title="Copy embed snippet"><span class="material-symbols-outlined" aria-hidden="true">content_copy</span></button>
      </div>
      ${jf(e.guid)}
      ${Af()}
      ${e.display_mode===`inline`?`<div class="mag-inline-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><span>Inline mode: also place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> where you want it to appear.</span></div>`:``}
      <div class="mag-actions">
        <button class="mag-btn" data-action="preview" data-guid="${U(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview</button>
        <button class="mag-btn" data-action="funnel" data-guid="${U(e.guid)}" title="Which question loses the most visitors"><span class="material-symbols-outlined" aria-hidden="true">filter_alt</span>Funnel</button>
        ${r?`
        <button class="mag-btn mag-btn--primary" data-action="edit" data-guid="${U(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Edit</button>`:``}
      </div>
      ${r?`
      <div class="mag-actions mag-actions--sub">
        <button class="mag-btn" data-action="flow" data-guid="${U(e.guid)}" title="Edit the conversation flow"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
        ${e.status===`DRAFT`?``:`
        <button class="mag-btn" data-action="toggle" data-guid="${U(e.guid)}">${e.status===`ENABLED`?`<span class="material-symbols-outlined" aria-hidden="true">pause</span>Disable`:`<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Enable`}</button>`}
        <button class="mag-btn danger" data-action="delete" data-guid="${U(e.guid)}"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </div>`:``}
    </div>`}function Xd(){return M()?bi({section:`magnets`,title:`Your Magnets`,description:`Pick a client to view and manage their magnets.`}):(Ad(),`
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
          ${jd(`hourglass_empty`,`Loading magnets…`)}
        </div>
      </div>
    </div>`)}async function Zd(){if(M()){let e=od();if(e){let t=document.querySelector(`.page-shell .page-header-text .page-description`);t&&(t.textContent=`Template picked: ${e.name}. Choose the client to build it for.`)}let t=e=>Number(e||0).toLocaleString();return xi(G(),[{h:`Magnets`,td:e=>`${t(e.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${t(e.magnets.total)}</span>`},{h:`Leads · wk`,td:e=>t(e.leads.this_week)},{h:`Leads · total`,td:e=>t(e.leads.total)}],{emptyMsg:`No client orgs yet. Create one under Clients, then provision its magnets here.`})}zf=null,Bf=null,document.getElementById(`mag-new-btn`)?.addEventListener(`click`,af),document.getElementById(`mag-template-btn`)?.addEventListener(`click`,sf),document.getElementById(`mag-body`)?.addEventListener(`click`,cf),await Qd();let e=ad();e&&H.canProvision&&of(e)}async function Qd(){let e=document.getElementById(`mag-body`);if(!e)return;try{let[e,t]=await Promise.all([fetch(`${G()}/m5t/v5/magnets`),fetch(`${G()}/m5t/v5/magnets/stats`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Failed to load`);H.magnets=n.magnets||[],H.owners=n.owners||[],H.canProvision=!!n.canProvision,H.canManage=!!n.canManage,H.primaryOrgGuid=n.primaryOrgGuid||null;let r=t?await t.json().catch(()=>({})):{};H.stats=r?.stats||{}}catch{e.innerHTML=jd(`error`,`Could not load your magnets. Please try again.`);return}let t=document.getElementById(`mag-new-btn`);t&&(t.style.display=H.canProvision?``:`none`);let n=document.getElementById(`mag-template-btn`);if(n&&(n.style.display=H.canProvision?``:`none`),!H.magnets.length){e.innerHTML=jd(`widgets`,H.canProvision?`No magnets yet. Click “New magnet” to create your first.`:`No magnets yet.`);return}e.innerHTML=`<div class="mag-grid">${H.magnets.map(Yd).join(``)}</div>`,Pd(),Vd()}async function $d(e){let t={"Content-Type":`application/json`,"Idempotency-Key":crypto.randomUUID()},n={status:`DRAFT`};e&&(n.owner_guid=e);let r=await fetch(`${G()}/m5t/v5/magnets`,{method:`POST`,headers:t,body:JSON.stringify(n)}),i={};try{i=await r.json()}catch{}if(!r.ok||!i.ok)throw Error(i.message||`Could not start a new magnet (${r.status})`);return i.magnet}async function ef(e,t){let n=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:t.name,...t.appearance,steps:t.steps})}),r={};try{r=await n.json()}catch{}if(!n.ok||!r.ok)throw Error(r.message||`Could not apply the ${t.name} template (${n.status})`)}async function tf(e,t){let n=document.getElementById(`mag-new-btn`),r=document.getElementById(`mag-template-btn`);n&&(n.disabled=!0),r&&(r.disabled=!0);let i=null;try{let n=await $d(e);if(i=n.guid,t)await ef(n.guid,t),await Qd(),n=H.magnets.find(e=>e.guid===n.guid)||n;else{H.magnets=[n,...H.magnets];let e=document.getElementById(`mag-body`);e&&(e.innerHTML=`<div class="mag-grid">${H.magnets.map(Yd).join(``)}</div>`)}Tf(n,void 0,{freshDraft:!0})}catch(e){i&&fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(i)}`,{method:`DELETE`}).catch(()=>{}),W(e.message||`Could not start a new magnet`,`danger`)}finally{n&&(n.disabled=!1),r&&(r.disabled=!1)}}function nf(e){let t=document.createElement(`div`);t.className=`mag-modal-scrim`,t.innerHTML=`
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="Choose client" style="max-width:420px">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${e?`New magnet from “${U(e.name)}”`:`New magnet`}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body" style="padding:20px">
        <label class="mag-modal__label" for="mag-owner-pick">Client / workspace</label>
        <select class="mag-modal__select" id="mag-owner-pick">
          ${H.owners.map(e=>`<option value="${U(e.guid)}"${e.guid===H.primaryOrgGuid?` selected`:``}>${U(e.name||e.guid)}</option>`).join(``)}
        </select>
        <p class="mag-modal__hint">Which client is this magnet for? You can't change this later.</p>
      </div>
      <div class="mag-modal__foot">
        <div class="mag-modal__foot-btns">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="continue">Continue</button>
        </div>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`open`),t.querySelector(`.mag-modal`).classList.add(`open`)});let n=()=>{t.classList.remove(`open`),setTimeout(()=>t.remove(),180),document.removeEventListener(`keydown`,r)};function r(e){e.key===`Escape`&&(e.preventDefault(),n())}document.addEventListener(`keydown`,r),t.querySelector(`.mag-modal__close`).addEventListener(`click`,n),t.querySelector(`[data-x="cancel"]`).addEventListener(`click`,n),t.querySelector(`[data-x="continue"]`).addEventListener(`click`,()=>{let r=t.querySelector(`#mag-owner-pick`).value;n(),tf(r,e)})}function rf(){return H.owners.length===1?H.owners[0].guid:null}function af(){if(H.owners.length>1){nf();return}tf(rf())}function of(e){if(H.owners.length>1){nf(e);return}tf(rf(),e)}function sf(){cd(of)}function cf(e){let t=e.target.closest(`[data-action]`);if(!t)return;let n=t.dataset.guid,r=H.magnets.find(e=>e.guid===n),i=t.dataset.action;if(i===`copy`)return lf(n);if(r){if(i===`preview`)return Zu(()=>Gu(r));if(i===`funnel`)return df(r);if(i===`edit`)return Tf(r);if(i===`flow`)return Tf(r,`flow`);if(i===`allow-domain`)return ff(r,t.dataset.domain);if(i===`dismiss-domain`)return pf(r,t.dataset.domain);if(i===`restore-domain`)return mf(r,t.dataset.domain);if(i===`pair-start`)return Gd(r);if(i===`copy-code`)return Kd(r);if(i===`revoke-connection`)return Jd(r,t.dataset.conn);if(i===`clear-connection`)return qd(r,t.dataset.conn,t.dataset.label);if(i===`toggle`)return gf(r);if(i===`delete`)return _f(r)}}async function lf(e){try{await navigator.clipboard.writeText(kf(e)),W(`Embed snippet copied`,`success`)}catch{W(`Copy failed`,`danger`)}}function uf(e){let t=Number(e?.total_steps)||0,n={};if((Array.isArray(e?.funnel)?e.funnel:[]).forEach(e=>{n[e.position]=Number(e.reached)||0}),!t||!Object.keys(n).length)return`<p class="mag-modal__hint" style="margin:0">No step activity yet in this window. As visitors answer questions, drop-off by step will appear here.</p>`;let r=Math.max(1,n[1]||0),i=[];for(let e=1;e<=t;e++){let a=n[e]||0,o=Math.min(100,Math.round(a/r*100));i.push(`
      <div class="mag-funnel__row">
        <div class="mag-funnel__meta">
          <span class="mag-funnel__label">Step ${e} of ${t}</span>
          <span class="mag-funnel__val">${a.toLocaleString()} <span class="mag-funnel__pct">${o}%</span></span>
        </div>
        <div class="mag-funnel__track"><div class="mag-funnel__bar${e===1?``:` mag-funnel__bar--drop`}" style="width:${o}%"></div></div>
      </div>`)}return`<div class="mag-funnel">${i.join(``)}</div>`}async function df(e){let t=document.createElement(`div`);t.className=`mag-modal-scrim`,t.innerHTML=`
    <div class="mag-modal mag-funnel-modal" role="dialog" aria-modal="true" aria-label="Step funnel for ${U(e.name)}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Step funnel — ${U(e.name)}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body" style="padding:20px">
        <p class="mag-modal__hint" style="margin-top:0">How many visitors reached each question, last 30 days. A big drop between two steps is where people bail.</p>
        <div id="mag-funnel-body">${jd(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.add(`open`),t.querySelector(`.mag-modal`).classList.add(`open`)});let n=()=>{t.classList.remove(`open`),setTimeout(()=>t.remove(),180),document.removeEventListener(`keydown`,r)};function r(e){e.key===`Escape`&&(e.preventDefault(),n())}document.addEventListener(`keydown`,r),t.querySelector(`.mag-modal__close`).addEventListener(`click`,n),t.addEventListener(`click`,e=>{e.target===t&&n()});let i=t.querySelector(`#mag-funnel-body`);try{let t=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/step-funnel`),n=await t.json().catch(()=>({}));if(!t.ok||!n.ok)throw Error(n.message||`Failed (${t.status})`);i.innerHTML=uf(n)}catch{i.innerHTML=`<p class="mag-modal__hint" style="margin:0">Could not load the funnel. Please try again.</p>`}}async function ff(e,t){let n=String(t||``).trim().toLowerCase();if(!n||!window.confirm(`Allow ${n} to load this magnet?\n\nOnly do this for a site you recognise — anyone can put this magnet's embed code on a page.`))return;let r=[...new Set([...(e.domains||[]).filter(Boolean),n])];try{if(!(await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({domains:r})})).json().catch(()=>({}))).ok)throw Error();W(`${n} allowed`,`success`)}catch{W(`Could not allow that domain`,`danger`);return}try{await Qd()}catch(e){console.warn(`[magnets] refresh after allow-domain failed:`,e)}}async function pf(e,t){let n=String(t||``).trim().toLowerCase();if(!n)return;let r=n.split(`.`),i=r.length>2?r.slice(-2).join(`.`):null,a=n;i&&window.confirm(`Hide ${n} from this list?\n\nOK — hide every domain under ${i} too (covers preview/staging URLs that change every deploy).\nCancel — hide only ${n}.`)&&(a=i);try{if(!(await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity/dismiss`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({domain:a})})).json().catch(()=>({}))).ok)throw Error();W(`${a} hidden from this list`,`success`)}catch{W(`Could not dismiss that domain`,`danger`);return}await hf(e)}async function mf(e,t){let n=String(t||``).trim().toLowerCase();if(n){try{if(!(await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity/restore`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({domain:n})})).json().catch(()=>({}))).ok)throw Error();W(`${n} will show again`,`success`)}catch{W(`Could not restore that domain`,`danger`);return}await hf(e)}}async function hf(e){try{let t=await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}/install-activity`)).json().catch(()=>({}));if(!t.ok)return;H.install[e.guid]=t;let n=document.querySelector(`.mag-card[data-guid="${CSS.escape(e.guid)}"] .mag-install-slot`);n&&(n.innerHTML=Nd(e))}catch(e){console.warn(`[magnets] install refresh failed:`,e)}}async function gf(e){if(e.status===`DRAFT`){W(`Open Edit and Save to publish a draft magnet.`,`info`);return}let t=e.status===`ENABLED`?`DISABLED`:`ENABLED`;try{if(!(await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})})).json().catch(()=>({}))).ok)throw Error();W(t===`ENABLED`?`Magnet enabled`:`Magnet disabled`,`success`)}catch{W(`Update failed`,`danger`);return}try{await Qd()}catch(e){console.warn(`[magnets] refresh after status toggle failed:`,e)}}async function _f(e){if(window.confirm(`Delete “${e.name}”? Visitors will no longer see this magnet.`)){try{if(!(await(await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`DELETE`})).json().catch(()=>({}))).ok)throw Error();W(`Magnet deleted`,`success`)}catch{W(`Delete failed`,`danger`);return}try{await Qd()}catch(e){console.warn(`[magnets] refresh after delete failed:`,e)}}}function vf(e){let t=[];e.querySelectorAll(`.mag-cta`).forEach(e=>{if(!e.querySelector(`.mag-cta__on`).checked)return;let n=e.dataset.type,r=e.dataset.kind,i=e.querySelector(`.mag-cta__val`),a=i?i.value.trim():``;if(r===`value`){if(n===`call`&&e.querySelector(`.mag-cta__callsrc`)?.value===`callrail`){let r=e.querySelector(`.mag-cta__crtracker`),i=r?.value||``,a=r?.selectedOptions?.[0];i&&t.push({type:n,value:i,config:{source:`callrail`,...a?.dataset?.trackerId?{tracker_id:a.dataset.trackerId}:{},...a?.dataset?.trackerName?{tracker_name:a.dataset.trackerName}:{}}})}else a&&t.push({type:n,value:a})}else if(r===`book`){if(e.querySelector(`.mag-cta__booksrc`)?.value===`calendly`){let r=e.querySelector(`.mag-cta__calevent`),i=r?.value||``,a=(r?.selectedOptions?.[0]?.textContent||``).trim();t.push({type:n,config:{source:`calendly`,...i?{calendly_url:i}:{},...i&&a?{event_name:a}:{}}})}else{let e={type:n};a&&(/^https?:\/\//i.test(a)?e.value=a:e.config={meeting_label:a}),t.push(e)}}else if(r===`support`){let r=(e.querySelector(`.mag-cta__opts`)?.value||``).split(`
`).map(e=>e.trim()).filter(Boolean).map(e=>({label:e})),i={type:n};r.length&&(i.config={options:r}),t.push(i)}else t.push({type:n})});let n={display_mode:e.querySelector(`input[name="mag-display"]:checked`)?.value||`chat`,trigger:xd(e),theme_mode:e.querySelector(`input[name="mag-theme"]:checked`)?.value||`auto`,title:e.querySelector(`#mag-f-title`).value.trim(),theme_color:e.querySelector(`#mag-f-color`).value,subtitle:e.querySelector(`#mag-f-subtitle`).value,launcher_label:e.querySelector(`#mag-f-launcher`).value.trim(),logo_url:e.querySelector(`#mag-f-logo`).value.trim(),logo_fit:e.querySelector(`#mag-f-logo-fit`)?.value===`contain`?`contain`:`cover`,summary:e.querySelector(`#mag-f-summary`).checked,summary_heading:e.querySelector(`#mag-f-summary-heading`).value.trim(),home:e.querySelector(`#mag-f-home`).checked,welcome:e.querySelector(`#mag-f-welcome`).value,ab:Cf(e),actions:t,font:e.querySelector(`#mag-f-font`).value.trim(),theme_vars:xf(e),inline_width:e.querySelector(`#mag-f-inline-w`).value.trim(),inline_height:e.querySelector(`#mag-f-inline-h`).value.trim(),hide_launcher:e.querySelector(`#mag-f-hide-launcher`).checked,input_placeholder:e.querySelector(`#mag-f-input-ph`).value,summary_confirm_label:e.querySelector(`#mag-f-summary-confirm`).value.trim(),success_title:e.querySelector(`#mag-f-success-title`).value.trim(),success_text:e.querySelector(`#mag-f-success-text`).value,success_cta:Sf(e)};return n.trigger===void 0&&delete n.trigger,n}function yf(e){return new Promise((t,n)=>{let r=new Image,i=new FileReader;i.onerror=()=>n(Error(`Could not read that file.`)),i.onload=()=>{r.onerror=()=>n(Error(`That file isn’t a readable image.`)),r.onload=()=>{let e=Math.min(1,Uf/Math.max(r.naturalWidth,r.naturalHeight)),n=Math.max(1,Math.round(r.naturalWidth*e)),i=Math.max(1,Math.round(r.naturalHeight*e)),a=document.createElement(`canvas`);a.width=n,a.height=i,a.getContext(`2d`).drawImage(r,0,0,n,i),t(a.toDataURL(`image/png`))},r.src=i.result},i.readAsDataURL(e)})}function bf(e,t){let n=e.querySelector(`#mag-logo-drop`);if(!n)return;let r=e.querySelector(`#mag-f-logo-file`),i=e.querySelector(`#mag-logo-browse`),a=e.querySelector(`#mag-logo-remove`),o=e.querySelector(`#mag-logo-preview`),s=e.querySelector(`#mag-logo-status`),c=e.querySelector(`#mag-f-logo`),l=(e,t)=>{s.textContent=e,s.style.color=t?`var(--color-danger, #DD4124)`:``},u=e=>{o.innerHTML=e?`<img src="${U(e)}" alt="">`:`<span class="material-symbols-outlined" aria-hidden="true">image</span>`,a.hidden=!e},d=e=>{c.value=e,c.dispatchEvent(new Event(`input`,{bubbles:!0})),c.dispatchEvent(new Event(`change`,{bubbles:!0}))};async function f(e){if(!Wf.has(e.type)){l(`PNG, JPEG, GIF, or WEBP only.`,!0);return}if(e.size>Gf){l(`That file is too large (8MB max before resizing).`,!0);return}l(`Uploading…`,!1);try{let n=await yf(e),r=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}/logo`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({image:n})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok)throw Error(i.error||`Upload failed (${r.status})`);let a=`${G()}/m5t/v5/magnet/${encodeURIComponent(t.guid)}/logo?v=${Date.now()}`;d(a),u(a),l(`Logo updated.`,!1)}catch(e){l(e.message||`Upload failed.`,!0)}}r.addEventListener(`change`,()=>{r.files[0]&&f(r.files[0]),r.value=``}),n.addEventListener(`click`,e=>{e.target===a||a.contains(e.target)||e.target!==i&&r.click()}),i.addEventListener(`click`,()=>r.click()),[`dragenter`,`dragover`].forEach(e=>n.addEventListener(e,e=>{e.preventDefault(),n.classList.add(`is-dragover`)})),[`dragleave`,`drop`].forEach(e=>n.addEventListener(e,e=>{e.preventDefault(),n.classList.remove(`is-dragover`)})),n.addEventListener(`drop`,e=>{let t=e.dataTransfer?.files?.[0];t&&f(t)}),a.addEventListener(`click`,async e=>{e.stopPropagation(),l(`Removing…`,!1);try{let e=await fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(t.guid)}/logo`,{method:`DELETE`}),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`Remove failed (${e.status})`);d(``),u(``),l(`Logo removed.`,!1)}catch(e){l(e.message||`Remove failed.`,!0)}})}function xf(e){return e.querySelector(`#mag-f-surface-on`)?.checked?{surface:e.querySelector(`#mag-f-sv-surface`).value,surface_2:e.querySelector(`#mag-f-sv-surface2`).value,border:e.querySelector(`#mag-f-sv-border`).value,text:e.querySelector(`#mag-f-sv-text`).value,text_sub:e.querySelector(`#mag-f-sv-textsub`).value}:{}}function Sf(e){let t=e.querySelector(`#mag-f-success-cta-label`).value.trim(),n=e.querySelector(`#mag-f-success-cta-url`).value.trim();return t&&n?{label:t,url:n}:{}}function Cf(e){let t={},n=e.querySelector(`#mag-f-ab-title`)?.value.trim(),r=e.querySelector(`#mag-f-ab-welcome`)?.value.trim(),i=e.querySelector(`#mag-f-ab-color`)?.value||``,a=e.querySelector(`#mag-f-color`)?.value||``;return n&&(t.title=n),r&&(t.welcome=r),i&&i.toLowerCase()!==a.toLowerCase()&&(t.theme_color=i),{enabled:!!e.querySelector(`#mag-f-ab`)?.checked,split:Number(e.querySelector(`#mag-f-ab-split`)?.value)||50,b:t}}function wf(e){let t=String(e||``),n=new Set(Kf.flatMap(e=>e.opts.map(([e])=>e))),r=e=>e===t?` selected`:``,i=`<option value=""${t===``?` selected`:``}>System default</option>`;t&&!n.has(t)&&(i+=`<option value="${U(t)}" selected>Current: ${U(t)}</option>`);for(let e of Kf)i+=`<optgroup label="${U(e.label)}">`+e.opts.map(([e,t])=>`<option value="${U(e)}"${r(e)}>${U(t)}</option>`).join(``)+`</optgroup>`;return i}function Tf(e,t,n={}){let{freshDraft:r=!1}=n,i=!!e,a=i?null:crypto.randomUUID(),o=!i&&H.owners.length>1,s=e?.display_mode||`chat`,c=e?.theme_mode||`auto`,l={};(e?.actions||[]).forEach(e=>{e&&e.type&&(l[e.type]=e)});let u=!i||!!e.home,d=i?e.subtitle==null?``:e.subtitle:`Typically replies in a few minutes`,f=e?.theme_vars&&typeof e.theme_vars==`object`?e.theme_vars:{},m=Object.keys(f).length>0,h=(e,t)=>U(/^#[0-9a-fA-F]{6}$/.test(f[e]||``)?f[e]:t),g=document.createElement(`div`);g.className=`mag-modal-scrim`,g.innerHTML=`
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
        <input class="mag-modal__input" id="mag-f-name" type="text" placeholder="e.g. Homepage quote magnet" value="${U(e?.name||``)}">

        ${o?`
        <label class="mag-modal__label" for="mag-f-owner">Client / workspace</label>
        <select class="mag-modal__select" id="mag-f-owner">
          ${H.owners.map(e=>`<option value="${U(e.guid)}"${e.guid===H.primaryOrgGuid?` selected`:``}>${U(e.name||e.guid)}</option>`).join(``)}
        </select>`:``}

        <label class="mag-modal__label">Display mode</label>
        ${Od(`mag-display`,s,Pf)}
        <p class="mag-modal__hint">Inline renders where you place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> on your page. Chat, Slide &amp; Modal float over it, no markup needed.</p>

        <label class="mag-modal__label" for="mag-f-trigger">Auto-open</label>
        <select class="mag-modal__select" id="mag-f-trigger">
          ${If.map(t=>`<option value="${t.value}"${vd(e)===t.value?` selected`:``}>${U(t.label)}</option>`).join(``)}
          <option value="__per_device"${vd(e)===`__per_device`?` selected`:``}>Per device&hellip;</option>
        </select>
        <div class="mag-perdev" id="mag-f-perdev"${vd(e)===`__per_device`?``:` hidden`}>
          <div class="mag-perdev__row">
            <label class="mag-modal__label" for="mag-f-trigger-desktop">Desktop</label>
            <select class="mag-modal__select" id="mag-f-trigger-desktop">
              ${If.map(t=>`<option value="${t.value}"${yd(e,`desktop`)===t.value?` selected`:``}>${U(t.label)}</option>`).join(``)}
            </select>
          </div>
          <div class="mag-perdev__row">
            <label class="mag-modal__label" for="mag-f-trigger-mobile">Mobile</label>
            <select class="mag-modal__select" id="mag-f-trigger-mobile">
              ${If.map(t=>`<option value="${t.value}"${yd(e,`mobile`)===t.value?` selected`:``}>${U(t.label)}</option>`).join(``)}
            </select>
          </div>
          <p class="mag-modal__hint">Mobile means a viewport under 480px — the width at which the panel goes near-fullscreen, which is why an auto-open that suits desktop can be too much on a phone.</p>
        </div>
        <p class="mag-modal__hint">When the panel opens on its own: once per visit, and never after the visitor has already opened it. Doesn't apply to Inline, which is always visible.</p>

        <label class="mag-modal__label" for="mag-f-domains">Allowed domain(s)</label>
        <input class="mag-modal__input" id="mag-f-domains" type="text" placeholder="example.com, www.example.com" value="${U((e?.domains||[]).join(`, `))}">
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
              <input class="mag-modal__input" id="mag-f-title" type="text" placeholder="Chat with us" value="${U(e?.title||``)}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-color">Color</label>
              <input class="mag-modal__color" id="mag-f-color" type="color" value="${U(/^#[0-9a-fA-F]{6}$/.test(e?.theme_color||``)?e.theme_color:`#0072BA`)}">
            </div>
          </div>

          <label class="mag-modal__label" for="mag-f-subtitle">Subtitle</label>
          <input class="mag-modal__input" id="mag-f-subtitle" type="text" placeholder="Typically replies in a few minutes" value="${U(d)}">
          <p class="mag-modal__hint">Small line under the title. Leave blank to hide it.</p>

          <label class="mag-modal__label" for="mag-f-launcher">Launcher label</label>
          <input class="mag-modal__input" id="mag-f-launcher" type="text" placeholder="Defaults to the title" value="${U(e?.launcher_label||``)}">
          <p class="mag-modal__hint">Text on the floating button (Chat / Slide / Modal only).</p>

          <label class="mag-modal__label">Theme</label>
          ${Od(`mag-theme`,c,Ff)}

          <label class="mag-modal__label">Logo</label>
          ${i?`
          <div class="mag-logo-drop" id="mag-logo-drop">
            <input type="file" id="mag-f-logo-file" accept="image/png,image/jpeg,image/gif,image/webp" hidden>
            <div class="mag-logo-drop__preview" id="mag-logo-preview">${e?.logo_url?`<img src="${U(e.logo_url)}" alt="">`:`<span class="material-symbols-outlined" aria-hidden="true">image</span>`}</div>
            <div class="mag-logo-drop__body">
              <p class="mag-logo-drop__t">Drag an image here, or <button type="button" class="mag-logo-drop__browse" id="mag-logo-browse">browse</button></p>
              <p class="mag-modal__hint" style="margin:2px 0 0">PNG, JPEG, GIF, or WEBP — resized automatically.</p>
            </div>
            <button type="button" class="mag-logo-drop__remove" id="mag-logo-remove"${e?.logo_url?``:` hidden`} title="Remove logo"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
          </div>
          <p class="mag-modal__hint" id="mag-logo-status" role="status" style="min-height:1em"></p>
          `:`<p class="mag-modal__hint" style="margin-top:0">Save this magnet first, then reopen it here to upload a logo.</p>`}

          <label class="mag-modal__label" for="mag-f-logo">Or paste a logo URL</label>
          <input class="mag-modal__input" id="mag-f-logo" type="text" placeholder="https://…/logo.png" value="${U(e?.logo_url||``)}">
          <p class="mag-modal__hint">Shown in the header and on bot avatars. Falls back to a color mark.</p>

          <label class="mag-modal__label" for="mag-f-logo-fit">Logo fit</label>
          <select class="mag-modal__select" id="mag-f-logo-fit">
            <option value="cover"${(e?.logo_fit||`cover`)===`cover`?` selected`:``}>Cover: fills the circle (crops a wide logo)</option>
            <option value="contain"${e?.logo_fit===`contain`?` selected`:``}>Contain: shows the whole logo</option>
          </select>
          <p class="mag-modal__hint">Use “Contain” for a wide wordmark so it isn’t cropped.</p>

          <label class="mag-modal__label" for="mag-f-font">Font family</label>
          <select class="mag-modal__select" id="mag-f-font">${wf(e?.font||``)}</select>
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
            <div class="mag-modal__row">
              <div>
                <label class="mag-modal__label" for="mag-f-inline-w">Inline width</label>
                <input class="mag-modal__input" id="mag-f-inline-w" type="text" placeholder="640px" value="${U(e?.inline_width||``)}">
              </div>
              <div>
                <label class="mag-modal__label" for="mag-f-inline-h">Inline height</label>
                <input class="mag-modal__input" id="mag-f-inline-h" type="text" placeholder="min(520px, 80vh)" value="${U(e?.inline_height||``)}">
              </div>
            </div>
            <p class="mag-modal__hint">Inline mode only. A CSS length (<code>760px</code>, <code>100%</code>) or <code>min()/max()/clamp()</code>. Blank = default size.</p>
          </div>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-hide-launcher"${e?.hide_launcher?` checked`:``}>
            <label for="mag-f-hide-launcher">Hide the floating button (opens only from your own button or link)</label>
          </div>
          <p class="mag-modal__hint">For Chat / Slide / Modal: no bubble appears; you open it by calling <code>MachFiveMagnet.open()</code> from your page. Pair with Auto-open = “Manual”.</p>

          <label class="mag-modal__label" for="mag-f-input-ph">Input placeholder</label>
          <input class="mag-modal__input" id="mag-f-input-ph" type="text" placeholder="Type your answer…" value="${U(e?.input_placeholder||``)}">
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
          <textarea class="mag-modal__input" id="mag-f-welcome" rows="2" placeholder="Welcome! Pick an option below and we’ll take it from there.">${U(e?.welcome||``)}</textarea>
          <p class="mag-modal__hint">Shown first when the magnet opens. Visitors choose a CTA below instead of a blank chat.</p>
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Call-to-action bar</p>
          <p class="mag-modal__hint" style="margin-top:0">The persistent buttons a visitor taps to pick a channel. Book opens an in-panel scheduler, or your Calendly when connected. Call can use a CallRail tracking number when connected, so calls attribute to this magnet. Chat runs your flow, Support is a multi-select intake. Leave unchecked to hide.</p>
          ${Rf.map(e=>kd(e,l[e])).join(``)}
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
              <input class="mag-modal__input" id="mag-f-ab-title" type="text" placeholder="(unchanged)" value="${U(e?.ab?.b?.mag_title||``)}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-ab-color">B: Color</label>
              <input class="mag-modal__color" id="mag-f-ab-color" type="color" value="${U(/^#[0-9a-fA-F]{6}$/.test(e?.ab?.b?.mag_theme_color||``)?e.ab.b.mag_theme_color:e?.theme_color||`#0072BA`)}">
            </div>
          </div>
          <label class="mag-modal__label" for="mag-f-ab-welcome">B: Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-ab-welcome" rows="2" placeholder="(unchanged)">${U(e?.ab?.b?.mag_welcome||``)}</textarea>
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
          <input class="mag-modal__input" id="mag-f-summary-heading" type="text" placeholder="Here’s what we’ve got" value="${U(e?.summary_heading||``)}">
          <label class="mag-modal__label" for="mag-f-summary-confirm">Confirm button label</label>
          <input class="mag-modal__input" id="mag-f-summary-confirm" type="text" placeholder="Confirm &amp; send" value="${U(e?.summary_confirm_label||``)}">
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">After submit</p>
          <p class="mag-modal__hint" style="margin-top:0">The card shown once the visitor finishes. Blank = the default “You’re all set!” message.</p>
          <label class="mag-modal__label" for="mag-f-success-title">Success title</label>
          <input class="mag-modal__input" id="mag-f-success-title" type="text" placeholder="You’re all set!" value="${U(e?.success_title||``)}">
          <label class="mag-modal__label" for="mag-f-success-text">Success message</label>
          <textarea class="mag-modal__input" id="mag-f-success-text" rows="2" placeholder="Thanks! We’ve got your details and someone will be in touch shortly.">${U(e?.success_text||``)}</textarea>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-label">Button label (optional)</label>
              <input class="mag-modal__input" id="mag-f-success-cta-label" type="text" placeholder="e.g. Visit our site" value="${U(e?.success_cta?.label||``)}">
            </div>
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-url">Button link</label>
              <input class="mag-modal__input" id="mag-f-success-cta-url" type="text" placeholder="https://…" value="${U(e?.success_cta?.url||``)}">
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
    </div>`,document.body.appendChild(g),requestAnimationFrame(()=>{g.classList.add(`open`),g.querySelector(`.mag-modal`).classList.add(`open`)});let _=[...g.querySelectorAll(`.mag-modal__navitem`)],v=[...g.querySelectorAll(`.mag-tab`)],y=e=>{_.forEach(t=>t.classList.toggle(`is-active`,t.dataset.tab===e)),v.forEach(t=>{t.hidden=t.dataset.tab!==e}),g.querySelector(`.mag-modal__body`).scrollTop=0};_.forEach(e=>e.addEventListener(`click`,()=>y(e.dataset.tab)));let ee=()=>Gu({...e,...vf(g),...i?{steps:fu()}:{}}),b=g.querySelector(`#mag-preview-pane`),x=()=>window.matchMedia(`(min-width: 1200px)`).matches,te=null,ne=()=>{if(!te&&x())try{te=Xu(b,ee)}catch{}},S=null,re=()=>{x()&&(ne(),te&&(clearTimeout(S),S=setTimeout(()=>{try{te.refresh()}catch{}},300)))},ie=window.matchMedia(`(min-width: 1200px)`),ae=()=>{x()&&(ne(),re())};ie.addEventListener(`change`,ae);let oe=!1,se=!1,ce=g.querySelector(`#mag-f-dirty`),le=e=>{oe=e,ce&&(ce.hidden=!e)},ue=g.querySelector(`.mag-modal__main`);ue.addEventListener(`input`,()=>le(!0)),ue.addEventListener(`change`,()=>{le(!0),bd(g),re()}),bd(g),g.querySelector(`#mag-f-color`)?.addEventListener(`input`,()=>{le(!0),re()});let de=e=>{oe&&(e.preventDefault(),e.returnValue=``)};window.addEventListener(`beforeunload`,de);let fe=!0,pe=Ef.default.subscribe(p.ROUTE_NAV_BEFORE,()=>{if(fe){if(oe&&!confirm(`Discard your changes to this magnet?`)){window.router?.navigate(`/magnets`);return}me()}}),me=()=>{if(r&&!se&&e&&e.status===`DRAFT`){fetch(`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`,{method:`DELETE`}).catch(()=>{}),H.magnets=H.magnets.filter(t=>t.guid!==e.guid);let t=document.getElementById(`mag-body`);t&&(t.innerHTML=`<div class="mag-grid">${H.magnets.map(Yd).join(``)}</div>`)}fe=!1,window.removeEventListener(`beforeunload`,de),Ef.default.unsubscribe(pe),clearTimeout(S),ie.removeEventListener(`change`,ae),te&&te.destroy&&te.destroy(),g.classList.remove(`open`),setTimeout(()=>g.remove(),180),document.removeEventListener(`keydown`,ge)},he=()=>{oe&&!confirm(`Discard your changes to this magnet?`)||me()};function ge(e){e.key===`Escape`&&(e.preventDefault(),he())}document.addEventListener(`keydown`,ge),g.querySelector(`.mag-modal__close`).addEventListener(`click`,he),g.querySelector(`[data-x="cancel"]`).addEventListener(`click`,he),g.querySelector(`[data-close-modal]`)?.addEventListener(`click`,he),g.querySelector(`#mag-f-name`).focus();let _e=g.querySelector(`#mag-flow-panel`);i?iu(_e,e,()=>{le(!0),re()}):_e.innerHTML=`<p class="mag-modal__hint" style="margin-top:0">Your new magnet starts with a simple starter conversation. Create it first, then reopen it here to build the flow.</p>`,bf(g,e),t&&y(t),ne(),g.querySelectorAll(`.mag-cta`).forEach(e=>{let t=e.querySelector(`.mag-cta__on`),n=e.querySelector(`.mag-cta__val`),r=e.querySelector(`.mag-cta__opts`),i=e.querySelectorAll(`.mag-cta__booksrc, .mag-cta__calevent, .mag-cta__callsrc, .mag-cta__crtracker`);t.addEventListener(`change`,()=>{n&&(n.disabled=!t.checked),r&&(r.disabled=!t.checked),i.forEach(e=>{e.disabled=!t.checked}),t.checked&&(n||r)?.focus()}),n&&n.addEventListener(`input`,()=>{n.value.trim()&&!t.checked&&(t.checked=!0,r&&(r.disabled=!1))})}),g.querySelectorAll(`.mag-cta[data-kind="book"]`).forEach(e=>{let t=e.querySelector(`.mag-cta__booksrc`),n=e.querySelector(`.mag-cta__val`),r=e.querySelector(`.mag-cta__calevent`);if(!t||!r)return;let i=()=>{let e=t.value===`calendly`;n.hidden=e,r.hidden=!e,e&&!r.dataset.listed&&(r.dataset.listed=`1`,Td(r))};t.addEventListener(`change`,()=>{let t=e.querySelector(`.mag-cta__on`);t.checked||(t.checked=!0,t.dispatchEvent(new Event(`change`))),i()}),i()}),g.querySelectorAll(`.mag-cta[data-type="call"]`).forEach(e=>{let t=e.querySelector(`.mag-cta__callsrc`),n=e.querySelector(`.mag-cta__val`),r=e.querySelector(`.mag-cta__crtracker`);if(!t||!r)return;let i=()=>{let e=t.value===`callrail`;n.hidden=e,r.hidden=!e,e&&!r.dataset.listed&&(r.dataset.listed=`1`,Dd(r))};t.addEventListener(`change`,()=>{let t=e.querySelector(`.mag-cta__on`);t.checked||(t.checked=!0,t.dispatchEvent(new Event(`change`))),i()}),i()});let ve=g.querySelector(`#mag-f-surface-on`),ye=g.querySelector(`#mag-f-surface`);ve.addEventListener(`change`,()=>ye.hidden=!ve.checked);let be=g.querySelector(`#mag-f-inline-size`);g.querySelectorAll(`input[name="mag-display"]`).forEach(e=>e.addEventListener(`change`,()=>{be.hidden=g.querySelector(`input[name="mag-display"]:checked`)?.value!==`inline`})),g.querySelector(`[data-x="preview"]`)?.addEventListener(`click`,()=>Zu(()=>Gu({...e,...vf(g),...i?{steps:fu()}:{}}))),g.querySelector(`[data-x="save"]`).addEventListener(`click`,async t=>{let n=t.currentTarget,r=g.querySelector(`#mag-f-error`),s=g.querySelector(`#mag-f-name`).value.trim();if(!s){y(`basics`),r.textContent=`Please give your magnet a name.`;return}let c=g.querySelector(`#mag-f-domains`).value.split(`,`).map(e=>e.trim()).filter(Boolean),l=``;if(g.querySelectorAll(`.mag-cta`).forEach(e=>{let t=e.querySelector(`.mag-cta__on`).checked;if(e.dataset.kind===`book`){let n=e.querySelector(`.mag-cta__booksrc`)?.value===`calendly`;t&&n&&!e.querySelector(`.mag-cta__calevent`)?.value&&(l||=`Pick a Calendly event for the Book button, or switch it back to the built-in scheduler.`);return}if(e.dataset.kind!==`value`)return;if(e.dataset.type===`call`&&e.querySelector(`.mag-cta__callsrc`)?.value===`callrail`){t&&!e.querySelector(`.mag-cta__crtracker`)?.value&&(l||=`Pick a CallRail tracking number for the Call button, or switch it back to a phone number.`);return}let n=e.querySelector(`.mag-cta__val`).value.trim();t&&!n&&(l||=`Add a target for the ${Lf[e.dataset.type].label} button, or uncheck it.`)}),l){y(`welcome`),r.textContent=l;return}let u=Cf(g);if(u.enabled&&!Object.keys(u.b).length){y(`ab`),r.textContent=`Give variant B at least one change (title, welcome, or color), or untick the A/B test.`;return}if(i){let e=cu();if(e){y(`flow`),r.textContent=e.message,lu(e.route,e.message,{uid:e.uid,field:e.field});return}}let d={name:s,domains:c,...vf(g)};o&&(d.owner_guid=g.querySelector(`#mag-f-owner`).value);let f=i&&e.status===`DRAFT`;f&&(d.status=`ENABLED`),n.disabled=!0,r.textContent=``;try{let t=i?`${G()}/m5t/v5/magnets/${encodeURIComponent(e.guid)}`:`${G()}/m5t/v5/magnets`,n={"Content-Type":`application/json`};a&&(n[`Idempotency-Key`]=a);let r=await fetch(t,{method:i?`PATCH`:`POST`,headers:n,body:JSON.stringify(d)}),o={};try{o=await r.json()}catch{}if(!r.ok||!o.ok)throw Error(o.message||`Save failed (${r.status})`);i&&await du(e.guid),W(f||!i?`Magnet created`:`Magnet updated`,`success`),se=!0,me(),await Qd()}catch(e){n.disabled=!1,r.textContent=e.message||`Something went wrong.`}})}var Ef,Df,H,Of,U,W,G,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf=o((()=>{D(),Ef=u(f(),1),m(),Hu(),$u(),ki(),gd(),Df=!1,H={magnets:[],owners:[],canProvision:!1,canManage:!1,primaryOrgGuid:null,stats:{},install:{},connections:{},pairing:{},pairTimer:null},Of={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},U=e=>String(e??``).replace(/[&<>"']/g,e=>Of[e]),W=(e,t=`info`)=>{try{Ef.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},G=()=>E.getConfig?.().BASE_URL||``,kf=e=>`<script src="${G()}/m5t/v5/coreSnippet?appguid=${e}" async><\/script>`,Af=()=>`<details class="mag-csp-note">
  <summary><span class="material-symbols-outlined" aria-hidden="true">shield</span>Strict Content-Security-Policy on your site? Read this</summary>
  <div class="mag-csp-note__body">
    <p>A strict CSP can silently block the widget — it just never appears, no visible error. Allowlist <code>${U(G())}</code> under all three directives. Copy-paste ready for your CSP header/meta tag:</p>
    <pre class="mag-csp-note__snippet"><code>script-src 'self' ${U(G())};
connect-src 'self' ${U(G())};
img-src 'self' ${U(G())};</code></pre>
    <ul>
      <li><code>script-src</code> — lets the install script run at all</li>
      <li><code>connect-src</code> — lets it send captures and events</li>
      <li><code>img-src</code> — lets an uploaded logo render</li>
    </ul>
    <p>Merge these into your existing policy rather than replacing it — most sites already have other origins allowlisted (analytics, fonts, etc.) that this snippet doesn't know about.</p>
    <p>Using a nonce-based CSP? Add your page's own nonce to the script tag: <code>&lt;script nonce="your-nonce" src="..."&gt;</code></p>
  </div>
</details>`,jf=e=>{let t=U(kf(e));return`<details class="mag-guide">
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
  src="${U(G())}/m5t/v5/coreSnippet?appguid=${U(e)}"
  strategy="afterInteractive"
/&gt;</code></pre>
      <p class="mag-guide__note">If your app sets a Content-Security-Policy (a Next.js middleware with a nonce is the usual source), it will block the widget silently — see the CSP note below before you go hunting.</p>
    </div>

    <p class="mag-guide__note">Wherever it goes, the snippet is the same one shown above:</p>
    <pre class="mag-guide__snippet"><code>${t}</code></pre>
  </div>
</details>`},Mf={chat:`Chat bubble`,right_slide:`Slide-in panel`,modal:`Modal`,inline:`Inline`},Nf={chat:`chat`,right_slide:`vertical_split`,modal:`web_asset`,inline:`view_agenda`},Pf=[{value:`inline`,icon:`view_agenda`,label:`Inline`},{value:`chat`,icon:`chat`,label:`Chat`},{value:`right_slide`,icon:`vertical_split`,label:`Slide`},{value:`modal`,icon:`web_asset`,label:`Modal`}],Ff=[{value:`auto`,icon:`brightness_auto`,label:`Auto`},{value:`sync`,icon:`sync`,label:`Sync`},{value:`light`,icon:`light_mode`,label:`Light`},{value:`dark`,icon:`dark_mode`,label:`Dark`}],If=[{value:`on_load`,label:`Immediately on page load`},{value:`on_8_seconds`,label:`After 8 seconds`},{value:`on_scroll_80_percent`,label:`At 80% scroll depth`},{value:`on_exit_intent`,label:`On exit intent (mouse leaves the page)`},{value:`none`,label:`Manual only (visitor clicks the launcher)`}],Lf={book:{label:`Book`,icon:`event`,kind:`book`},chat:{label:`Chat`,icon:`chat`,kind:`flow`},call:{label:`Call`,icon:`phone`,kind:`value`,placeholder:`Phone number`},email:{label:`Email`,icon:`mail`,kind:`value`,placeholder:`Email address`},support:{label:`Support`,icon:`support_agent`,kind:`support`}},Rf=[`book`,`chat`,`call`,`email`,`support`],zf=null,Bf=null,Vf=5e3,Hf={ACTIVE:{label:`Connected`,icon:`check_circle`,tone:`live`},PENDING:{label:`Waiting to connect`,icon:`hourglass_empty`,tone:`pending`},REVOKED:{label:`Disconnected`,icon:`link_off`,tone:`off`},EXPIRED:{label:`Expired`,icon:`timer_off`,tone:`off`}},Uf=512,Wf=new Set([`image/png`,`image/jpeg`,`image/gif`,`image/webp`]),Gf=8388608,Kf=[{label:`Web fonts (loaded for you)`,opts:[[`Inter, sans-serif`,`Inter`],[`Poppins, sans-serif`,`Poppins`],[`Montserrat, sans-serif`,`Montserrat`],[`Roboto, sans-serif`,`Roboto`],[`"Open Sans", sans-serif`,`Open Sans`],[`Lato, sans-serif`,`Lato`],[`Nunito, sans-serif`,`Nunito`],[`Raleway, sans-serif`,`Raleway`],[`"Work Sans", sans-serif`,`Work Sans`],[`Oswald, sans-serif`,`Oswald`],[`Merriweather, serif`,`Merriweather (serif)`]]},{label:`System / always available`,opts:[[`system-ui, sans-serif`,`System UI`],[`Georgia, serif`,`Georgia (serif)`],[`"Times New Roman", Times, serif`,`Times (serif)`],[`Arial, Helvetica, sans-serif`,`Arial / Helvetica`],[`Verdana, Geneva, sans-serif`,`Verdana`],[`"Courier New", monospace`,`Courier (mono)`]]}]})),Jf=c({default:()=>ap,init:()=>Qf,render:()=>Zf});function Yf(){let e=new Map;for(let t of fd)e.set(t.category,(e.get(t.category)||0)+1);return Object.keys(dd).filter(t=>e.has(t)).map(t=>[t,e.get(t)])}function Xf(){if(sd(),ip)return;let e=document.createElement(`style`);e.id=`m5t-templates-page-styles`,e.textContent=`
    .page-shell[data-section="templates"] .tpl-filters { margin: 0 0 20px; }
    .page-shell[data-section="templates"] .settings-note { margin: 0 0 20px; }
  `,document.head.appendChild(e),ip=!0}function Zf(){Xf();let e=np();return`
    <div class="page-shell" data-section="templates">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Templates</h1>
          <p class="page-description">Start from a proven flow instead of a blank magnet.</p>
        </div>
        <a class="btn btn-secondary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">bolt</span>
          Your magnets
        </a>
      </div>

      ${e?``:`<div class="settings-note" id="tpl-readonly-note">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        Setup managed by your provider.
      </div>`}

      <div class="m5t-chip-row tpl-filters" id="tpl-filters" role="group" aria-label="Filter templates by category">
        ${rp(`all`,`All`,fd.length,`true`)}
        ${Yf().map(([e,t])=>rp(e,dd[e],t,`false`)).join(``)}
      </div>

      <div class="mag-tpl-grid mag-tpl-grid--page" id="tpl-grid">
        ${fd.map(t=>nd(t,{detail:!0,gallery:!0,canUse:e})).join(``)}
      </div>
    </div>`}function Qf(){let e=document.getElementById(`tpl-grid`);document.getElementById(`tpl-filters`)?.addEventListener(`click`,t=>{let n=t.target.closest(`[data-cat]`);if(!n)return;n.parentElement.querySelectorAll(`[data-cat]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e===n))});let r=n.dataset.cat;e?.querySelectorAll(`.mag-tpl-card`).forEach(e=>{e.hidden=r!==`all`&&e.dataset.cat!==r})}),e?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-preview]`);if(t){let e=fd.find(e=>e.id===t.dataset.preview);e&&Zu(()=>Gu({...e.appearance,steps:e.steps,name:e.name}));return}let n=e.target.closest(`[data-tpl]`);n&&(rd(n.dataset.tpl),window.location.hash=`#/magnets`)})}var $f,ep,tp,np,rp,ip,ap,op=o((()=>{D(),$u(),gd(),$f={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ep=e=>String(e??``).replace(/[&<>"']/g,e=>$f[e]),tp=[`provision_magnets`,`manage_magnets`],np=()=>E.getCapabilities().some(e=>tp.includes(e)),rp=(e,t,n,r)=>`<button class="m5t-chip--filter" type="button" data-cat="${ep(e)}" aria-pressed="${r}">${ep(t)}<span class="m5t-chip__count">${n}</span></button>`,ip=!1,ap={render:Zf,init:Qf}})),sp=c({default:()=>Ap,init:()=>pp,render:()=>fp});function cp(){if(Jn(),Dp)return;let e=document.createElement(`style`);e.id=`m5t-questionnaires-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Dp=!0}function lp(){return K.clients.map(e=>{let t=K.responses.filter(t=>t.owner_guid===e.guid),n=t[0]||null;return{guid:e.guid,name:e.caption||e.name||e.guid,latest:n,earlier:Math.max(0,t.length-1),status:n?n.status:`NOT_SENT`}})}function up(){let e=K.search.trim().toLowerCase();return lp().filter(t=>(K.filter===`ALL`||t.status===K.filter)&&(!e||t.name.toLowerCase().includes(e)))}function dp(e){let t=e.status===`SUBMITTED`,n=e.status===`SUBMITTED`?`<button class="qz-act" type="button" data-act="open" data-guid="${xp(e.latest.guid)}">Read answers</button>`:e.status===`DRAFT`?`<button class="qz-act" type="button" data-act="copy" data-url="${xp(e.latest.url||``)}">Copy link</button>`:`<a class="qz-act" href="#/clients">Go to client</a>`;return`<tr class="${t?`qz-row--open`:``}"${t?` data-open-guid="${xp(e.latest.guid)}"`:``}>
    <td><span class="qz-client">${xp(e.name)}</span>${e.earlier?`<span class="qz-earlier">${e.earlier} earlier</span>`:``}</td>
    <td><span class="qz-badge" data-s="${xp(e.status)}">${xp(Ep[e.status]||e.status)}</span></td>
    <td class="qz-when">${xp(kp(e,`created_tz`))}</td>
    <td class="qz-when">${xp(kp(e,`submitted_tz`))}</td>
    <td class="qz-actcell">${n}</td>
  </tr>`}function fp(){return cp(),`
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
        <div class="card-body" id="qz-body">${Op(`hourglass_empty`,`Loading…`)}</div>
      </div>
    </div>`}async function pp(){await mp()}async function mp(){let e=document.getElementById(`qz-body`);if(e){try{let[e,t]=await Promise.all([fetch(`${Sp()}/m5t/v5/acctGroup`),fetch(`${Sp()}/m5t/v5/m5mQuestionnaireResponse`)]),n=await e.json().catch(()=>({})),r=await t.json().catch(()=>({}));if(!e.ok||!t.ok)throw Error(`load failed`);K.clients=(n.data||[]).filter(e=>e.class===wp&&![`DELETED`,`ARCHIVED`].includes(e.status)).sort((e,t)=>String(e.caption||``).localeCompare(String(t.caption||``))),K.responses=r.data||[]}catch{e.innerHTML=Op(`error`,`Could not load questionnaires. Please try again.`);return}hp()}}function hp(){let e=document.getElementById(`qz-body`);if(!e)return;if(!K.clients.length){e.innerHTML=Op(`groups`,`No clients yet. Add a client first, then send them a kickoff questionnaire.`);return}let t=lp(),n={ALL:t.length};Tp.slice(1).forEach(([e])=>{n[e]=t.filter(t=>t.status===e).length});let r=up();e.innerHTML=`
    <div class="qz-bar">
      <div class="qz-filter">
        ${Tp.map(([e,t])=>`<button data-filter="${e}" class="${K.filter===e?`active`:``}">${xp(t)}${n[e]?`<span class="qz-pillnum">${n[e]}</span>`:``}</button>`).join(``)}
      </div>
      <span class="qz-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="qz-search" id="qz-search" type="search" placeholder="Search clients" value="${xp(K.search)}" aria-label="Search clients" />
      </span>
      <span class="qz-count">${r.length} of ${t.length}</span>
    </div>
    <div class="qz-tablewrap">
      <table class="qz-table">
        <thead><tr><th>Client</th><th>Status</th><th>Sent</th><th>Submitted</th><th></th></tr></thead>
        <tbody id="qz-tbody">${r.length?r.map(dp).join(``):`<tr><td colspan="5"><div class="qz-when" style="padding:14px 4px">${K.search.trim()?`No clients match your search.`:`No clients with status “${xp(Ep[K.filter]||K.filter)}”.`}</div></td></tr>`}</tbody>
      </table>
    </div>`,e.querySelector(`.qz-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(K.filter=t.dataset.filter,hp())}),e.querySelector(`#qz-search`)?.addEventListener(`input`,e=>{K.search=e.target.value,gp()}),e.querySelector(`#qz-tbody`)?.addEventListener(`click`,_p)}function gp(){let e=document.getElementById(`qz-tbody`);if(!e)return;let t=up();e.innerHTML=t.length?t.map(dp).join(``):`<tr><td colspan="5"><div class="qz-when" style="padding:14px 4px">No clients match your search.</div></td></tr>`;let n=document.querySelector(`.qz-count`);n&&(n.textContent=`${t.length} of ${lp().length}`)}function _p(e){let t=e.target.closest(`[data-act="copy"]`);if(t){e.stopPropagation();let n=t.dataset.url;if(!n){Cp(`No link on this questionnaire yet.`,`warning`);return}navigator.clipboard?.writeText(n).then(()=>{t.textContent=`Copied!`,setTimeout(()=>{t.textContent=`Copy link`},1500)},()=>Cp(`Could not copy the link.`,`error`));return}let n=e.target.closest(`[data-act="open"]`),r=e.target.closest(`[data-open-guid]`),i=n?.dataset.guid||r?.dataset.openGuid;i&&vp(i)}async function vp(e){K.openGuid=e;let t=document.createElement(`div`);t.className=`qz-drawer-scrim`;let n=document.createElement(`aside`);n.className=`qz-drawer`,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Questionnaire answers`),n.innerHTML=`
    <div class="qz-drawer__head">
      <div><div class="qz-drawer__title" id="qz-dtitle">Questionnaire</div><div class="qz-drawer__sub" id="qz-dsub"></div></div>
      <button class="qz-drawer__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="qz-drawer__body" id="qz-dbody">${Op(`hourglass_empty`,`Loading answers…`)}</div>`,document.body.append(t,n),requestAnimationFrame(()=>{t.classList.add(`open`),n.classList.add(`open`)});let r=()=>{K.openGuid=null,t.classList.remove(`open`),n.classList.remove(`open`),setTimeout(()=>{t.remove(),n.remove()},220),document.removeEventListener(`keydown`,i)};function i(e){e.key===`Escape`&&(e.preventDefault(),r())}document.addEventListener(`keydown`,i),t.addEventListener(`click`,r),n.querySelector(`.qz-drawer__close`).addEventListener(`click`,r);try{let t=await fetch(`${Sp()}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e)}`),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`load failed`);let i=r.data||{},a=K.clients.find(e=>e.guid===i.owner_guid)?.caption||`Client`;n.querySelector(`#qz-dtitle`).textContent=a;let o=i.submitted_tz?`Submitted ${Hn(i.submitted_tz)}`:`Not yet submitted`;n.querySelector(`#qz-dsub`).textContent=i.locked_tz?`${o} · Finalized`:o,n.querySelector(`#qz-dbody`).innerHTML=qn(i)+Wn(i,{emptyLabel:`Not answered`})}catch{n.querySelector(`#qz-dbody`).innerHTML=Op(`error`,`Could not load these answers. Please try again.`)}}var yp,bp,xp,Sp,Cp,wp,Tp,Ep,K,Dp,Op,kp,Ap,jp=o((()=>{D(),yp=u(f(),1),m(),Zn(),bp={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},xp=e=>String(e??``).replace(/[&<>"']/g,e=>bp[e]),Sp=()=>E.getConfig?.().BASE_URL||``,Cp=(e,t=`info`)=>{try{yp.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},wp=`managed_client`,Tp=[[`ALL`,`All`],[`NOT_SENT`,`Not sent`],[`DRAFT`,`Awaiting response`],[`SUBMITTED`,`Submitted`],[`CANCELLED`,`Cancelled`]],Ep=Object.fromEntries(Tp),K={clients:[],responses:[],filter:`ALL`,search:``,openGuid:null},Dp=!1,Op=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,kp=(e,t)=>e?.latest?.[t]?Hn(e.latest[t]):`—`,Ap={render:fp,init:pp}})),Mp=c({init:()=>Up,render:()=>Hp});function Np(e){let t=um(e);if(!t)return``;try{return new Date(t).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`})}catch{return``}}function Pp(e){let t=um(e);if(!t)return``;try{let n=Date.now()-new Date(t).getTime();if(n<0)return Np(e);let r=n/36e5;return r<1?`${Math.max(1,Math.floor(n/6e4))}m ago`:r<24?`${Math.floor(r)}h ago`:r<48?`Yesterday`:Np(e)}catch{return Np(e)}}function Fp(){if(nm)return;let e=document.createElement(`style`);e.id=`m5t-leads-styles`,e.textContent=`
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
    .page-shell .leads-more { display: block; margin: 14px auto 4px; appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 8px 18px; border-radius: 999px; }
    .page-shell .leads-more:hover { background: var(--color-accent-soft, #EEF4FF); }
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
    .page-shell .leads-panel { position: sticky; top: calc(var(--subnav-height, 61px) + 24px); max-height: calc(100vh - var(--subnav-height, 61px) - 48px); overflow-y: auto; }
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
  `,document.head.appendChild(e),nm=!0}function Ip(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Lp(e){return`<select class="leads-status" data-id="${J(e.id)}" data-act="status" onclick="event.stopPropagation()">
    ${im.map(t=>`<option value="${t}" ${e.status===t?`selected`:``}>${t[0]}${t.slice(1).toLowerCase()}</option>`).join(``)}
  </select>`}function Rp(e){let t=q.magnetNames[e.magnet_guid]||e.lead_source||`—`,n=e.phone?String(e.phone).replace(/[^\d+]/g,``):``;return`
    <tr class="leads-row${String(e.id)===q.selectedId?` selected`:``}" data-id="${J(e.id)}" tabindex="0" role="button" aria-label="Open lead ${J(cm(e))}">
      <td>
        <span class="leads-who">
          <span class="leads-avatar">${J(lm(e))}</span>
          <span><span class="leads-name">${J(cm(e))}</span>${e.company?`<span class="leads-sub">${J(e.company)}</span>`:``}</span>
        </span>
      </td>
      ${q.book?`<td>${Oi(q.ownerNames[e.owner_guid]||``)||`<span class="leads-muted">—</span>`}</td>`:``}
      <td>
        ${e.email?`<a class="leads-contactlink" href="mailto:${J(e.email)}" title="Email ${J(e.email)}">${J(e.email)}</a>`:`<span class="leads-muted">—</span>`}
        ${e.phone?`<a class="leads-contactlink leads-sub" href="tel:${J(n)}" title="Call ${J(e.phone)}">${J(e.phone)}</a>`:``}
      </td>
      <td>${e.product_interest?J(e.product_interest):`<span class="leads-muted">—</span>`}</td>
      <td><span class="leads-sub">${J(t)}</span>${e.utm_campaign||e.utm_source?`<span class="leads-sub" title="Campaign / source">${J(e.utm_campaign||e.utm_source)}${e.gclid?` <span class="leads-badge" data-s="QUALIFIED" style="font-size:0.58rem;padding:1px 6px">Ads</span>`:``}</span>`:``}</td>
      <td>${q.canManage?Lp(e):`<span class="leads-badge" data-s="${J(e.status)}">${J(e.status)}</span>`}</td>
      <td class="num leads-muted" style="white-space:nowrap" title="${J(Np(e))}">${dm(e)?`<span class="leads-fresh" title="Captured in the last 24 hours"></span>`:``}${J(Pp(e))}</td>
      <td class="leads-open" aria-hidden="true"><span class="material-symbols-outlined">chevron_right</span></td>
    </tr>`}function zp(e){let t=q.search.trim().toLowerCase();if(!t)return!0;let n=[e.first_name,e.last_name,e.email,e.company,e.phone,e.product_interest,q.magnetNames[e.magnet_guid],q.book?q.ownerNames[e.owner_guid]:``,e.utm_campaign,e.utm_source].filter(Boolean).join(` `).toLowerCase();return t.split(/\s+/).every(e=>n.includes(e))}function Bp(){return q.leads.filter(e=>(q.filter===`ALL`||e.status===q.filter)&&fm(e)&&zp(e)&&pm(e))}function Vp(){if(!q.day)return``;let e=q.day;try{e=new Date(`${q.day}T00:00:00Z`).toLocaleDateString([],{month:`short`,day:`numeric`,year:`numeric`,timeZone:`UTC`})}catch{}return`<button class="leads-daychip" type="button" id="leads-dayclear" title="Show every day again">
    <span class="material-symbols-outlined" aria-hidden="true">event</span>${J(e)}
    <span class="material-symbols-outlined leads-daychip__x" aria-hidden="true">close</span>
  </button>`}function Hp(){Fp(),hi();let e=M();return`
    <div class="page-shell" data-section="leads">
      ${e?`
      <div class="dashboard-card" style="margin-bottom:24px">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="pf-picker-body">${Ip(`hourglass_empty`,`Loading…`)}</div>
      </div>`:``}
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Leads</h1>
          <p class="page-description">${e?`All leads across your clients.`:`All your magnet leads.`}</p>
        </div>
        <button class="btn btn-secondary" id="leads-export" type="button" style="display:none">
          <span class="material-symbols-outlined" aria-hidden="true">download</span>
          Export CSV
        </button>
      </div>
      <div class="leads-layout">
        <div class="dashboard-card">
          <div class="card-body" id="leads-body">
            ${Ip(`hourglass_empty`,`Loading leads…`)}
          </div>
        </div>
        <aside class="dashboard-card leads-panel" aria-label="Lead detail">
          <div class="card-body" id="leads-panel-body">${mm()}</div>
        </aside>
      </div>
    </div>`}async function Up(){document.getElementById(`leads-export`)?.addEventListener(`click`,em);let e=ji(Ni.LEADS_SEARCH),t=ji(Ni.LEADS_DAY);if((e||t)&&(q.search=e||``,q.day=t||``,q.filter=`ALL`,q.clientFilter=`ALL`,q.shown=rm),M()){let e=e=>Number(e||0).toLocaleString();xi(sm(),[{h:`Leads · wk`,td:t=>e(t.leads.this_week)},{h:`Leads · total`,td:t=>e(t.leads.total)},{h:`Compl.`,td:e=>e.completion_rate==null?`—`:`${e.completion_rate}%`}],{emptyMsg:`No client orgs yet. Create one under Clients first.`})}await Wp()}async function Wp(){let e=document.getElementById(`leads-body`);if(e){try{let[e,t]=await Promise.all([fetch(`${sm()}/m5t/v5/m5mLead`),fetch(`${sm()}/m5t/v5/magnets`).catch(()=>null)]),n=await e.json().catch(()=>({}));if(!n.ok)throw Error(n.message||`Failed to load`);if(q.leads=(n.data||[]).filter(e=>![`DELETED`,`ARCHIVED`].includes(e.status)),q.total=Number.isFinite(n.total)?n.total:q.leads.length,q.truncated=q.total>(n.data||[]).length,q.book=M(),q.ownerNames=q.book?Si():{},t){let e=await t.json().catch(()=>({}));q.magnetNames={},(e.magnets||[]).forEach(e=>{q.magnetNames[e.guid]=e.name,e.owner_guid&&e.owner_name&&!q.ownerNames[e.owner_guid]&&(q.ownerNames[e.owner_guid]=e.owner_name)}),q.canManage=!!e.canManage}}catch{e.innerHTML=Ip(`error`,`Could not load your leads. Please try again.`);return}Gp()}}function Gp(){let e=document.getElementById(`leads-body`),t=document.getElementById(`leads-export`);if(!e)return;if(t&&(t.style.display=q.leads.length?``:`none`),!q.leads.length){e.innerHTML=Ip(`inbox`,`No leads captured yet. Publish a magnet and share it to start collecting.`),Qp();return}let n=q.leads.filter(fm),r={ALL:n.length};im.forEach(e=>{r[e]=n.filter(t=>t.status===e).length});let i=q.book?[...new Set(q.leads.map(e=>e.owner_guid).filter(Boolean))].map(e=>({guid:e,name:q.ownerNames[e]||e})).sort((e,t)=>e.name.localeCompare(t.name)):[];e.innerHTML=`
    <div class="leads-bar">
      <div class="leads-filter">
        ${[`ALL`,...im].map(e=>`<button data-filter="${e}" class="${q.filter===e?`active`:``}">${e===`ALL`?`All`:e[0]+e.slice(1).toLowerCase()}${r[e]?`<span class="leads-pillnum">${r[e]}</span>`:``}</button>`).join(``)}
      </div>
      ${q.book&&i.length>1?`
      <select class="leads-clientsel" id="leads-clientsel" aria-label="Filter by client">
        <option value="ALL">All clients</option>
        ${i.map(e=>`<option value="${J(e.guid)}" ${q.clientFilter===e.guid?`selected`:``}>${J(e.name)}</option>`).join(``)}
      </select>`:``}
      ${Vp()}
      <span class="leads-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="leads-search" id="leads-search" type="search" placeholder="Search leads" value="${J(q.search)}" aria-label="Search leads" />
      </span>
      <span class="leads-count" id="leads-countlbl"></span>
    </div>
    <div id="leads-tablezone"></div>`,e.querySelector(`.leads-filter`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(q.filter=t.dataset.filter,q.shown=rm,Gp())}),e.querySelector(`#leads-clientsel`)?.addEventListener(`change`,e=>{q.clientFilter=e.target.value,q.shown=rm,Gp()}),e.querySelector(`#leads-dayclear`)?.addEventListener(`click`,()=>{q.day=``,q.shown=rm,Gp()}),e.querySelector(`#leads-search`)?.addEventListener(`input`,e=>{q.search=e.target.value,q.shown=rm,Kp()}),Kp()}function Kp(){let e=document.getElementById(`leads-tablezone`),t=document.getElementById(`leads-countlbl`);if(!e)return;let n=Bp(),r=n.slice(0,q.shown),i=q.book?8:7;t&&(t.textContent=`${n.length} of ${q.leads.length}`),e.innerHTML=`
    <div class="leads-tablewrap">
      <table class="leads-table${q.book?` leads-table--book`:``}">
        ${hm()}
        <thead><tr><th>Name</th>${q.book?`<th>Client</th>`:``}<th>Contact</th><th>Interest</th><th>Magnet</th><th>Status</th><th class="num">Captured</th><th></th></tr></thead>
        <tbody id="leads-tbody">${r.map(Rp).join(``)||`<tr><td colspan="${i}"><div class="leads-muted" style="padding:14px 4px">${q.search.trim()?`No leads match your search.`:`No ${q.filter.toLowerCase()} leads.`}</div></td></tr>`}</tbody>
      </table>
    </div>
    ${n.length>q.shown?`<button class="leads-more" type="button" id="leads-more">Show ${Math.min(rm,n.length-q.shown)} more (${n.length-q.shown} remaining)</button>`:``}
    ${q.truncated?`<div class="leads-muted" style="padding:10px 4px">Showing your ${q.leads.length.toLocaleString()} most recent leads of ${q.total.toLocaleString()}. Search and filters cover these; older leads aren't included yet.</div>`:``}`,e.querySelector(`#leads-more`)?.addEventListener(`click`,()=>{q.shown+=rm,Kp()}),e.querySelector(`#leads-tbody`)?.addEventListener(`change`,qp),e.querySelector(`#leads-tbody`)?.addEventListener(`click`,e=>{if(e.target.closest(`.leads-status, a.leads-contactlink`))return;let t=e.target.closest(`.leads-row`);t&&Jp(t.dataset.id)}),e.querySelector(`#leads-tbody`)?.addEventListener(`keydown`,e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target.closest(`.leads-row`);t&&e.target===t&&(e.preventDefault(),Jp(t.dataset.id))})}async function qp(e){let t=e.target.closest(`.leads-status`);if(!t)return;let n=t.dataset.id,r=q.leads.find(e=>String(e.id)===String(n)),i=t.value,a=r?.status;try{if(!(await(await fetch(`${sm()}/m5t/v5/m5mLead/${encodeURIComponent(n)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:i})})).json().catch(()=>({}))).ok)throw Error();r&&(r.status=i),om(`Marked ${i[0]}${i.slice(1).toLowerCase()}`,`success`)}catch{t.value=a||`NEW`,om(`Could not update status`,`danger`);return}try{String(n)===q.selectedId&&Qp(),q.filter!==`ALL`&&Gp()}catch(e){console.warn(`[leads] re-render after status change failed:`,e)}}function Jp(e){q.selectedId=String(e),document.querySelectorAll(`.leads-row`).forEach(e=>e.classList.toggle(`selected`,e.dataset.id===q.selectedId)),Qp()}function Yp(e,t){let n=Array.isArray(e.tags)?e.tags:[];for(let e=n.length-1;e>=0;e--)if(n[e]&&n[e].tag===t&&n[e].value!=null)return String(n[e].value);return``}function Xp(e){let t=Yp(e,`appointment_start`);if(!t)return null;let n=Yp(e,`appointment_status`)||`booked`,r=Yp(e,`appointment_timezone`),i=Yp(e,`appointment_event_type`),a=new Date(t),o=t;if(!Number.isNaN(a.getTime())){let e={weekday:`short`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`};try{o=new Intl.DateTimeFormat(void 0,r?{...e,timeZone:r}:e).format(a)}catch{o=new Intl.DateTimeFormat(void 0,e).format(a)}}return{when:o,status:n,type:i,start:t}}function Zp(e){let t=Array.isArray(e.tags)?e.tags:[],n=null;for(let e of t)if(!(!e||!e.tag)){if(e.tag===`callrail_call_id`){n={};continue}n&&e.tag.indexOf(`call_`)===0&&e.value!=null&&(n[e.tag]=String(e.value))}if(!n||!n.call_started)return null;let r=n.call_started,i=new Date(r),a=r;Number.isNaN(i.getTime())||(a=new Intl.DateTimeFormat(void 0,{weekday:`short`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}).format(i));let o=Number(n.call_duration)||0,s=o?o<60?`${o}s`:`${Math.floor(o/60)}m ${o%60}s`:``;return{when:a,dur:s,source:n.call_source||``,answered:n.call_answered||``,recording:n.call_recording_player||``,started:r}}function Qp(){let e=document.getElementById(`leads-panel-body`);if(!e)return;let t=q.leads.find(e=>String(e.id)===q.selectedId),n=document.querySelector(`.leads-layout`);if(n&&(n.dataset.hasSelection=t?`true`:`false`),!t){e.innerHTML=mm();return}let r=q.magnetNames[t.magnet_guid]||t.lead_source||`—`,i=Xp(t),[a,o]=i?gm[i.status]||gm.booked:[``,``],s=Zp(t),c=(e,t)=>t?`<div class="leads-det__field"><span class="leads-det__k">${J(e)}</span><span class="leads-det__v">${J(t)}</span></div>`:``;e.innerHTML=`
    <div class="leads-det__head">
      <span class="leads-avatar leads-det__ava">${J(lm(t))}</span>
      <div>
        <div class="leads-det__name">${J(cm(t))}</div>
        <span class="leads-badge" data-s="${J(t.status)}">${J(t.status)}</span>
      </div>
    </div>
    <div class="leads-det__contact">
      ${t.email?`<a class="leads-det__cbtn" href="mailto:${J(t.email)}"><span class="material-symbols-outlined" aria-hidden="true">mail</span>Email</a>`:``}
      ${t.phone?`<a class="leads-det__cbtn" href="tel:${J(String(t.phone).replace(/[^\d+]/g,``))}"><span class="material-symbols-outlined" aria-hidden="true">call</span>Call</a>`:``}
    </div>
    ${c(`Email`,t.email)}
    ${c(`Phone`,t.phone)}
    ${c(`Mobile`,t.mobile)}
    ${c(`Company`,t.company)}
    ${c(`Title`,t.title)}
    ${c(`Interest`,t.product_interest)}
    ${c(`Location`,[t.city,t.state].filter(Boolean).join(`, `))}
    ${c(`Channel`,t.lead_source)}
    ${q.book?c(`Client`,q.ownerNames[t.owner_guid]||``):``}
    ${c(`Magnet`,r)}
    ${c(`Captured`,Np(t))}
    ${i?`<div class="leads-det__field"><span class="leads-det__k">Appointment</span><span class="leads-det__v">${J([i.when,i.type].filter(Boolean).join(` · `))} <span class="leads-badge" data-s="${J(a)}">${J(o)}</span></span></div>`:``}
    ${s?`<div class="leads-det__field"><span class="leads-det__k">Last call</span><span class="leads-det__v">${J([s.when,s.dur,s.source].filter(Boolean).join(` · `))} <span class="leads-badge" data-s="${s.answered===`no`?`WORKING`:`QUALIFIED`}">${s.answered===`no`?`Missed`:`Answered`}</span>${s.recording&&/^https:\/\//i.test(s.recording)?` <a href="${J(s.recording)}" target="_blank" rel="noopener">Recording</a>`:``}</span></div>`:``}
    ${c(`Campaign`,t.utm_campaign)}
    ${c(`Ad source`,[t.utm_source,t.utm_medium].filter(Boolean).join(` / `))}
    ${t.gclid?`<div class="leads-det__field"><span class="leads-det__k">Paid click</span><span class="leads-det__v"><span class="leads-badge" data-s="QUALIFIED">Google Ads</span></span></div>`:``}
    ${t.description?`<div class="leads-det__notes">${J(t.description)}</div>`:``}
    ${q.canManage?`
      <div class="leads-det__actions">
        <button type="button" class="leads-det__del" data-action="delete-lead" data-id="${J(t.id)}">
          <span class="material-symbols-outlined" aria-hidden="true">delete</span>Remove lead
        </button>
      </div>`:``}`,e.querySelector(`[data-action="delete-lead"]`)?.addEventListener(`click`,$p)}async function $p(e){let t=e.currentTarget?.dataset?.id,n=q.leads.find(e=>String(e.id)===String(t));if(!n)return;let r=cm(n);if(!window.confirm(`Remove ${r} from your leads?\n\nThis takes the lead out of your dashboard, lists and exports. The record is kept in our system, and this address can be captured again if they come back through one of your magnets.`))return;let i=e.currentTarget;i.disabled=!0;try{let e=await fetch(`${sm()}/m5t/v5/m5mLead/${encodeURIComponent(t)}`,{method:`DELETE`}),n=await e.json().catch(()=>({}));if(!e.ok||!n.ok)throw Error(n.error||`HTTP ${e.status}`);q.leads=q.leads.filter(e=>String(e.id)!==String(t)),q.selectedId=null,om(`${r} removed`,`success`),Gp()}catch{i.disabled=!1,om(`Could not remove that lead. Please try again.`,`danger`)}}function em(){let e=Bp();if(!e.length){om(`Nothing to export`,`info`);return}let t=[`first_name`,`last_name`,`email`,`phone`,`company`,`product_interest`,`lead_source`,`utm_source`,`utm_medium`,`utm_campaign`,`gclid`,`status`],n=e=>`"${String(e??``).replace(/"/g,`""`)}"`,r=[[...q.book?[`client`]:[],...t,`magnet`,`captured`,`appointment`,`last_call`].join(`,`)];for(let i of e){let e=Xp(i),a=Zp(i);r.push([...q.book?[n(q.ownerNames[i.owner_guid]||``)]:[],...t.map(e=>n(i[e])),n(q.magnetNames[i.magnet_guid]||i.lead_source||``),n(Np(i)),n(e?`${e.start} (${e.status})`:``),n(a?`${a.started} (${a.answered===`no`?`missed`:`answered`})`:``)].join(`,`))}let i=new Blob([r.join(`
`)],{type:`text/csv`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.href=a,o.download=`leads-${q.filter.toLowerCase()}.csv`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a),om(`Exported ${e.length} lead${e.length===1?``:`s`}`,`success`)}var tm,nm,q,rm,im,am,J,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m=o((()=>{D(),tm=u(f(),1),m(),ki(),Fi(),nm=!1,q={leads:[],magnetNames:{},filter:`ALL`,canManage:!1,book:!1,ownerNames:{},clientFilter:`ALL`,search:``,shown:100,selectedId:null,day:``,total:0,truncated:!1},rm=100,im=[`NEW`,`WORKING`,`QUALIFIED`,`UNQUALIFIED`,`CONVERTED`,`EXPORTED`],am={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},J=e=>String(e??``).replace(/[&<>"']/g,e=>am[e]),om=(e,t=`info`)=>{try{tm.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},sm=()=>E.getConfig?.().BASE_URL||``,cm=e=>[e.first_name,e.last_name].filter(Boolean).join(` `).trim()||e.email||`(no name)`,lm=e=>(cm(e).split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``)||`?`).toUpperCase(),um=e=>e.created?.created_tz||``,dm=e=>{let t=um(e);if(!t)return!1;try{return Date.now()-new Date(t).getTime()<864e5}catch{return!1}},fm=e=>q.clientFilter===`ALL`||e.owner_guid===q.clientFilter,pm=e=>!q.day||um(e).slice(0,10)===q.day,mm=()=>Ip(`touch_app`,`Click to see lead information.`),hm=()=>`
  <colgroup>
    <col style="width:22%">
    ${q.book?`<col style="width:12%">`:``}
    <col style="width:20%">
    <col style="width:13%">
    <col style="width:15%">
    <col style="width:150px">
    <col style="width:110px">
    <col style="width:40px">
  </colgroup>`,gm={booked:[`QUALIFIED`,`Booked`],rescheduled:[`WORKING`,`Rescheduled`],canceled:[`CANCELED`,`Canceled`]}})),vm=c({init:()=>wm,render:()=>Cm,tableHTML:()=>Sm});function ym(){if(Pm)return;let e=document.createElement(`style`);e.id=`m5t-analytics-styles`,e.textContent=`
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
    .page-shell .anl-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .anl-warn { font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F7FAFD); border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; padding: 8px 12px; margin: 0 0 12px; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
  `,document.head.appendChild(e),Pm=!0}function bm(e,t){let n=t>0?Math.round(e/t*100):0;return`<svg class="anl-bar" width="72" height="8" viewBox="0 0 72 8" role="img"
      aria-label="${e} of ${t} leads for the busiest magnet">
      <rect x="0" y="1" width="72" height="6" rx="3" fill="var(--color-surface-2, #EAF0F7)"></rect>
      ${n>0?`<rect x="0" y="1" width="${Math.max(2,Math.round(n*.72))}" height="6" rx="3" fill="var(--color-primary-600, #0072BA)"></rect>`:``}
    </svg>`}function xm(e,t,n){let r=Im[e.status]?`<span class="anl-chip">${Am(Im[e.status])}</span>`:``,i=n&&e.owner_name?`<span class="anl-sub">${Am(e.owner_name)}</span>`:``,a=e.ab_tests&&(e.ab_tests.running||e.ab_tests.completed)?`${Om(e.ab_tests.running)} / ${Om(e.ab_tests.completed)}`:`—`;return`<tr data-guid="${Am(e.magnet_guid)}">
    <td><a class="anl-name" href="#/magnets">${Am(e.name)}</a>${r}${i}</td>
    <td>${bm(Number(e.leads?.window||0),t)}</td>
    <td>${Om(e.leads?.window)}</td>
    <td>${Om(e.opens)}</td>
    <td>${jm(e.engagement_rate)}</td>
    <td>${jm(e.completion_rate)}</td>
    <td>${jm(e.lead_rate)}</td>
    <td>${a}</td>
  </tr>`}function Sm(e,t){let n=e.reduce((e,t)=>Math.max(e,Number(t.leads?.window||0)),0);return`<div class="anl-wrap"><table class="anl-table">
    <thead><tr>
      <th>Magnet</th><th></th><th>Leads</th><th>Opens</th>
      <th>Engaged</th><th>Completed</th><th>Leads / Open</th><th>A/B run / done</th>
    </tr></thead>
    <tbody>${e.map(e=>xm(e,n,t)).join(``)}</tbody>
  </table></div>`}function Cm(){return M()?bi({section:`analytics`,title:`Analytics`,description:`Pick a client to see how their magnets are performing.`}):(ym(),`
    <div class="page-shell" data-section="analytics">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Analytics</h1>
          <p class="page-description">How each magnet is performing, so you can tell them apart.</p>
        </div>
        <div class="chart-controls" id="anl-periods">
          ${Mm.map(e=>`<button class="chart-period-btn${e.d===Nm?` active`:``}" type="button" data-days="${e.d}">${e.label}</button>`).join(``)}
        </div>
      </div>

      <div class="stats-grid">
        ${Ii({icon:`person_add`,label:`Leads`,valueId:`anl-leads`,href:`#/leads`})}
        ${Ii({icon:`visibility`,label:`Opens`,valueId:`anl-opens`})}
        ${Ii({icon:`task_alt`,label:`Completion Rate`,valueId:`anl-completion`,href:`#/conversations`})}
        ${Ii({icon:`widgets`,label:`Active Magnets`,valueId:`anl-active`,href:`#/magnets`})}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">leaderboard</span> By magnet</h2>
          <span class="live-indicator" id="anl-range"></span>
        </div>
        <div class="card-body" id="anl-body">
          ${Fm(`hourglass_empty`,`Loading magnet performance…`)}
        </div>
      </div>
      <p class="anl-note">Leads / Open is the share of visitors who opened a magnet and left contact details. Rates show “—” where nothing opened in the period, rather than 0%.</p>
    </div>`)}async function wm(){if(M())return xi(Em(),[{h:`Leads`,td:e=>Om(e.leads.window??e.leads.total)},{h:`Opens`,td:e=>Om(e.opens)},{h:`Completed`,td:e=>jm(e.completion_rate)}]);ym(),await Tm();let e=document.getElementById(`anl-periods`);e&&e.addEventListener(`click`,t=>{let n=t.target.closest(`.chart-period-btn`);n&&(Nm=Number(n.dataset.days)||30,e.querySelectorAll(`.chart-period-btn`).forEach(e=>{e.classList.toggle(`active`,Number(e.dataset.days)===Nm)}),Tm())})}async function Tm(){let e=document.getElementById(`anl-body`),t=document.getElementById(`anl-range`);if(!e)return;e.innerHTML=Fm(`hourglass_empty`,`Loading magnet performance…`);let n=new Date,r=Dm(n),i=Dm(new Date(n.getTime()-(Nm-1)*864e5));t&&(t.textContent=`${i} → ${r}`);let a;try{let e=await fetch(`${Em()}/m5t/v5/dashboard/stats?from=${i}&to=${r}&group_by=magnet`);if(a=await e.json(),!e.ok||!a?.ok)throw Error(a?.error||`HTTP ${e.status}`)}catch(t){e.innerHTML=Fm(`cloud_off`,`Could not load analytics. Refresh to try again.`),console.error(`[analytics] load failed:`,t);return}let o=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)};o(`anl-leads`,Om(a.by_day?.reduce((e,t)=>e+Number(t.leads||0),0))),o(`anl-opens`,Om(a.funnel?.opens)),o(`anl-completion`,jm(a.funnel?.completion_rate)),o(`anl-active`,Om(a.magnets?.active));let s=Array.isArray(a.by_magnet)?a.by_magnet:[];if(!s.length){e.innerHTML=Fm(`widgets`,`No magnets yet. Create one and its numbers will show up here.`);return}let c=s.some(e=>Number(e.opens||0)>0||Number(e.leads?.window||0)>0),l=new Set(s.map(e=>e.owner_guid)).size>1;e.innerHTML=(a.by_magnet_truncated?`<p class="anl-warn">Showing the top ${s.length} magnets by leads. You have more than that, so this list is not complete.</p>`:``)+(c?``:`<p class="anl-warn">No opens or leads for any magnet in this period. Try a longer range.</p>`)+Sm(s,l)}var Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm=o((()=>{D(),ki(),zi(),Em=()=>E.getConfig?.().BASE_URL||``,Dm=e=>e.toISOString().slice(0,10),Om=e=>Number(e||0).toLocaleString(),km={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Am=e=>String(e??``).replace(/[&<>"']/g,e=>km[e]),jm=e=>e==null?`—`:`${e}%`,Mm=[{d:7,label:`7 Days`},{d:30,label:`30 Days`},{d:90,label:`90 Days`}],Nm=30,Pm=!1,Fm=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,Im={DRAFT:`Draft`,DISABLED:`Paused`}})),Rm=c({default:()=>oh,init:()=>Vm,render:()=>Bm});function zm(){if(nh)return;let e=document.createElement(`style`);e.id=`m5t-adperf-styles`,e.textContent=`
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
    .page-shell .adperf-conn { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adperf-conn:empty { display: none; }
    .page-shell .adperf-conn a { color: var(--color-accent, #0072BA); font-weight: 600; }
  `,document.head.appendChild(e),nh=!0}function Bm(){return M()?bi({section:`ad-performance`,title:`Ad Performance`,description:`Pick a client to view their spend and lead performance.`}):(zm(),`
    <div class="page-shell" data-section="ad-performance">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Performance</h1>
          <p class="page-description">Your advertising spend alongside the leads your magnets captured.</p>
          <div class="adperf-conn" id="adperf-conn"></div>
        </div>
        <div class="chart-controls" id="adperf-periods">
          ${ih.map(e=>`<button class="chart-period-btn${e.d===ah?` active`:``}" type="button" data-days="${e.d}">${e.label}</button>`).join(``)}
        </div>
      </div>

      <div class="stats-grid" id="adperf-stats">
        ${Ii({icon:`payments`,label:`Ad Spend`,valueId:`adperf-spend`,href:`#/ad-accounts`})}
        ${Ii({icon:`ads_click`,label:`Clicks`,valueId:`adperf-clicks`,href:`#/ad-accounts`})}
        ${Ii({icon:`person_add`,label:`Magnet Leads`,valueId:`adperf-leads`,href:`#/leads`})}
        ${Ii({icon:`request_quote`,label:`Cost / Lead`,valueId:`adperf-cpl`})}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Spend vs Leads</h2>
          <span class="live-indicator" id="adperf-range"></span>
        </div>
        <div class="card-body" id="adperf-body">
          ${rh(`hourglass_empty`,`Loading ad performance…`)}
        </div>
      </div>
      <p class="adperf-note">Spend and leads are shown on the same timeline for comparison. Leads are not yet matched to individual ad clicks.</p>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">campaign</span> Leads by campaign</h2>
          <span class="live-indicator" id="adperf-src-summary"></span>
        </div>
        <div class="card-body" id="adperf-sources">
          ${rh(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card" id="adperf-conv-card" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">flag</span> Other conversions</h2>
          <span class="live-indicator">Reported by Google Ads</span>
        </div>
        <div class="card-body" id="adperf-conv-body"></div>
      </div>
    </div>`)}async function Vm(){if(M()){let e=e=>Number(e||0).toLocaleString();return xi(Xm(),[{h:`Spend`,td:t=>t.ad?`$${e(t.ad.spend)}`:`—`},{h:`Clicks`,td:t=>t.ad?e(t.ad.clicks):`—`},{h:`Leads`,td:t=>e(t.leads.window??t.leads.total)},{h:`CPL`,td:t=>t.ad?.cost_per_lead==null?`—`:`$${e(t.ad.cost_per_lead)}`}],{emptyMsg:`No client orgs yet. Connect a client ad account to see spend here.`})}let e=document.getElementById(`adperf-periods`);e?.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-days]`);n&&(ah=Number(n.dataset.days)||30,e.querySelectorAll(`.chart-period-btn`).forEach(e=>e.classList.toggle(`active`,Number(e.dataset.days)===ah)),Hm())}),await Hm()}async function Hm(){let e=Xm(),t=document.getElementById(`adperf-body`),n=document.getElementById(`adperf-range`),r=new Date,i=Zm(r),a=Zm(new Date(r.getTime()-(ah-1)*864e5));n&&(n.textContent=`${a} → ${i}`);let o,s=[],c=null,l=null,u=null;try{let[t,n,r,d,f]=await Promise.all([fetch(`${e}/m5t/v5/coreAdMetrics/overlay?from=${a}&to=${i}`),fetch(`${e}/m5t/v5/coreAdAccount`),fetch(`${e}/m5t/v5/coreAdMetrics/by-source?from=${a}&to=${i}`),ds().catch(()=>null),fetch(`${e}/m5t/v5/coreAdMetrics/conversions?from=${a}&to=${i}`).then(e=>e.json()).catch(()=>null)]);if(!t.ok)throw Error(`HTTP ${t.status}`);o=await t.json(),s=((await n.json().catch(()=>({})))?.data||[]).filter(e=>e.status!==`DELETED`),c=await r.json().catch(()=>null),l=d,u=f}catch(e){console.warn(`[ad-performance] load failed:`,e),t&&(t.innerHTML=rh(`error`,`Could not load ad performance. Please try again.`));return}Um(l,s),Wm(u);let d=o.totals||{};if(Km(`adperf-spend`,Qm(d.spend)),Km(`adperf-clicks`,$m(d.clicks)),Km(`adperf-leads`,$m(d.magnet_leads)),Km(`adperf-cpl`,Qm(d.cost_per_lead)),Gm(c),!s.length){t.innerHTML=rh(`link_off`,`No ad account connected yet. Your agency can connect Google Ads or Local Services Ads to see performance here.`);return}if(!o.connected){t.innerHTML=rh(`cloud_sync`,`Account connected. No ad data for this range yet. Metrics appear here once they sync.`);return}t.innerHTML=Ym(o.rows||[])}function Um(e,t){let n=document.getElementById(`adperf-conn`);if(!n)return;if(!e||e.denied){n.innerHTML=``;return}let r=Ps.google_ads,i=cs(e.providers,`google_ads`),a=ls(r,i,!!e.configured?.google_ads),o=Os()?` <a href="#/settings/integrations/${r.urlSlug}">Manage</a>`:``;if(a===`connected`||a===`broken`){Cs(),n.innerHTML=`<span>Google Ads</span> ${us(a,i)}${o}`;return}if(t.length){n.innerHTML=`<span>Google Ads</span> <span>${t.length} associated account${t.length===1?``:`s`}</span>`;return}n.innerHTML=``}function Wm(e){let t=document.getElementById(`adperf-conv-card`),n=document.getElementById(`adperf-conv-body`),r=document.getElementById(`adperf-stats`),i=document.getElementById(`adperf-conv-stat`);if(i&&i.remove(),!t||!n)return;if(!e?.ok||!e.has_selection){t.style.display=`none`;return}if(r){let t=document.createElement(`div`);t.innerHTML=Ii({icon:`flag`,label:`Ads Conversions`,value:$m(e.totals?.conversions),sub:`Reported by Google Ads`,href:`#/settings/integrations/google-ads`});let n=t.firstElementChild;n.id=`adperf-conv-stat`,r.appendChild(n)}let a=e.actions||[];if(t.style.display=``,!a.length){n.innerHTML=rh(`search_off`,`No conversions in this range for the selected actions.`);return}let o=a.some(e=>e.value>0);n.innerHTML=`
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Conversion action</th><th>Category</th><th class="num">Conversions</th>${o?`<th class="num">Value</th>`:``}</tr></thead>
        <tbody>${a.map(e=>`
          <tr>
            <td>${th(e.name||e.id)}</td>
            <td class="adperf-src-sub">${th(String(e.category||``).toLowerCase().replace(/_/g,` `)||`—`)}</td>
            <td class="num"><b>${$m(e.conversions)}</b></td>
            ${o?`<td class="num">${Qm(e.value)}</td>`:``}
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="adperf-note">Counted actions are chosen on the Google Ads integration page. These are Google's own numbers and may overlap magnet leads, so they are never added together.</p>`}function Gm(e){let t=document.getElementById(`adperf-sources`),n=document.getElementById(`adperf-src-summary`);if(!t)return;let r=e&&Array.isArray(e.rows)?e.rows:[];if(!r.length){n&&(n.textContent=``),t.innerHTML=rh(`search_off`,`No leads in this range yet. Campaigns appear here as tagged leads (?utm_campaign=…) come in.`);return}let i=e.total_leads||r.reduce((e,t)=>e+(t.leads||0),0),a=e.tracked_leads||0;n&&(n.textContent=`${$m(a)} of ${$m(i)} leads tagged to a source`);let o=e=>e.campaign&&e.campaign!==`(none)`?th(e.campaign):e.source&&e.source!==`(direct)`?th(e.source):`<span class="adperf-src-untracked">Untracked / direct</span>`;t.innerHTML=`
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Campaign</th><th>Source</th><th class="num">Paid clicks</th><th class="num">Leads</th></tr></thead>
        <tbody>${r.map(e=>`
          <tr>
            <td>${o(e)}</td>
            <td class="adperf-src-sub">${th(e.source||`—`)}${e.medium?` · ${th(e.medium)}`:``}</td>
            <td class="num">${e.paid_clicks?$m(e.paid_clicks):`<span class="adperf-src-sub">—</span>`}</td>
            <td class="num"><b>${$m(e.leads)}</b></td>
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>`}function Km(e,t){let n=document.getElementById(e);n&&(n.textContent=t)}function qm(e){if(e<=0)return 1;let t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function Jm(e){return e=Math.round(e),e>=1e3?(e/1e3).toFixed(e%1e3==0?0:1)+`k`:String(e)}function Ym(e){let t=e.length||1,n=qm(Math.max(1,...e.map(e=>e.spend||0))),r=qm(Math.max(1,...e.map(e=>e.magnet_leads||0))),i=738/t,a=Math.min(24,i*.55),o=e=>56+i*(e+.5),s=e=>304-e/n*282,c=e=>304-e/r*282,l=[0,.25,.5,.75,1].map(e=>{let t=304-e*282;return`<line x1="56" y1="${t.toFixed(1)}" x2="794" y2="${t.toFixed(1)}" stroke="#EAF0F7"/><text x="48" y="${(t+3.5).toFixed(1)}" text-anchor="end" class="ax">$${Jm(n*e)}</text><text x="802" y="${(t+3.5).toFixed(1)}" text-anchor="start" class="ax">${Jm(r*e)}</text>`}).join(``),u=e.map((e,t)=>{let n=s(e.spend||0);return`<rect x="${(o(t)-a/2).toFixed(1)}" y="${n.toFixed(1)}" width="${a.toFixed(1)}" height="${Math.max(0,304-n).toFixed(1)}" rx="3" fill="#0072BA"><title>${e.date}: $${e.spend} spend</title></rect>`}).join(``),d=e.map((e,t)=>`${o(t).toFixed(1)},${c(e.magnet_leads||0).toFixed(1)}`).join(` `),f=t>1?`<polyline points="${d}" fill="none" stroke="#009473" stroke-width="2.5"/>`:``,p=e.map((e,t)=>`<circle cx="${o(t).toFixed(1)}" cy="${c(e.magnet_leads||0).toFixed(1)}" r="3.5" fill="#009473"><title>${e.date}: ${e.magnet_leads} leads</title></circle>`).join(``),m=Math.max(1,Math.ceil(t/6));return`
    <div class="adperf-legend">
      <span><i style="background:#0072BA"></i>Ad Spend</span>
      <span><i style="background:#009473"></i>Magnet Leads</span>
    </div>
    <svg class="adperf-chart" viewBox="0 0 840 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Ad spend versus magnet leads over time">
      ${l}${u}${f}${p}${e.map((e,n)=>n%m===0||n===t-1?`<text x="${o(n).toFixed(1)}" y="326" text-anchor="middle" class="ax">${e.date.slice(5)}</text>`:``).join(``)}
    </svg>`}var Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh=o((()=>{D(),ki(),zs(),zi(),Xm=()=>E.getConfig?.().BASE_URL||``,Zm=e=>e.toISOString().slice(0,10),Qm=e=>e==null?`—`:`$`+Number(e).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),$m=e=>Number(e||0).toLocaleString(),eh={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},th=e=>String(e??``).replace(/[&<>"']/g,e=>eh[e]),nh=!1,rh=(e,t)=>`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`,ih=[{d:7,label:`7 Days`},{d:30,label:`30 Days`},{d:90,label:`90 Days`}],ah=30,oh={render:Bm,init:Vm}})),ch=c({default:()=>kh,init:()=>dh,parseBookingCsv:()=>Sh,render:()=>uh});function lh(){if(Eh)return;let e=document.createElement(`style`);e.id=`m5t-adacct-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Eh=!0}function uh(){return M()?bi({section:`ad-accounts`,title:`Ad Accounts`,description:`Pick a client to see their connected ad accounts.`}):(lh(),Cs(),`
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
          ${ks(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Accounts feeding reporting</h2>
          <span class="live-indicator" id="adacct-count"></span>
        </div>
        <div class="card-body" id="adacct-list">
          ${ks(`hourglass_empty`,`Loading…`)}
        </div>
      </div>

      <div class="dashboard-card" id="adacct-offline" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">upload_file</span> Offline conversions</h2>
        </div>
        <div class="card-body">
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
    </div>`)}async function dh(){if(M()){let e=e=>Number(e||0).toLocaleString();return xi(I(),[{h:`Spend`,td:t=>t.ad?`$${e(t.ad.spend)}`:`—`},{h:`Leads`,td:t=>e(t.leads.window??t.leads.total)},{h:`CPL`,td:t=>t.ad?.cost_per_lead==null?`—`:`$${e(t.ad.cost_per_lead)}`}],{emptyMsg:`No client orgs yet. Connect a client ad account to see it here.`})}await fh()}async function fh(){let[e,t,n]=await Promise.all([ds().catch(()=>null),fetch(`${I()}/m5t/v5/coreAdAccount`).then(e=>e.json()).catch(()=>null),fetch(`${I()}/m5t/v5/coreAdMetrics/conversions`).then(e=>e.json()).catch(()=>null)]);ph(e,n),mh(t),hh(t)}function ph(e,t){let n=document.getElementById(`adacct-conn`);if(!n)return;let r=Ps.google_ads;if(!e||e.denied){n.innerHTML=ks(`link_off`,`Connection status is not available for your role.`);return}let i=cs(e.providers,`google_ads`),a=ls(r,i,!!e.configured?.google_ads),o=i?.external_account||{},s=r.card.reachableCount(o),c;c=a===`connected`?s?`${s} reachable account${s===1?``:`s`}.`:`Connected.`:a===`broken`?r.card.brokenDesc:a===`unavailable`?`Google Ads is being set up for this platform.`:Os()?`Not connected yet. Connect from Settings to pull spend and clicks.`:`Not connected yet.`;let l=Os()&&a!==`unavailable`?`<a class="adacct-manage" href="#/settings/integrations/${r.urlSlug}"><span class="material-symbols-outlined" aria-hidden="true">${a===`idle`?`link`:`settings`}</span>${a===`idle`?`Connect`:`Manage`}</a>`:``,u=``;if(t?.ok&&t.has_selection){let e=(t.actions||[]).map(e=>e.name||e.id),n=(t.selected_ids||[]).length-e.length;u=`
      <div class="adacct-chips">Counted in reporting:
        ${e.map(e=>`<span class="adacct-chip">${F(e)}</span>`).join(``)}
        ${n>0?`<span class="adacct-chip">${n} more</span>`:``}
      </div>`}n.innerHTML=`
    <div class="adacct-conn">
      ${ss(r)}
      <div class="adacct-conn__titles">
        <span class="adacct-conn__name">${F(r.label)} ${us(a,i)}</span>
        <span class="adacct-conn__sub">${F(c)}</span>
      </div>
      <span class="adacct-conn__spacer"></span>
      ${l}
    </div>
    ${u}`}function mh(e){let t=document.getElementById(`adacct-list`),n=document.getElementById(`adacct-count`);if(!t)return;if(!e||e.ok===!1){t.innerHTML=ks(`error`,`Could not load ad accounts. Please try again.`);return}let r=(e.data||[]).filter(e=>e.status!==`DELETED`),i=!!e.canConnect;if(n&&(n.textContent=r.length?`${r.length} account${r.length===1?``:`s`}`:``),!r.length){t.innerHTML=ks(`link_off`,i?`No ad accounts associated yet.`:`No ad accounts yet. Your agency connects these for you.`)+(i?`<p class="adacct-note">Associate a client's Customer ID from the <a href="#/clients">Clients page</a>.</p>`:``);return}t.innerHTML=`
    <div class="adacct-wrap">
      <table class="adacct-table">
        <thead><tr><th>Platform</th><th>Customer ID</th><th>Status</th></tr></thead>
        <tbody>${r.map(e=>`
          <tr>
            <td>${F(wh[e.provider]||e.provider)}</td>
            <td class="adacct-cid">${F(Th(e.external_customer_id))}</td>
            <td><span class="m5t-badge" data-tone="${e.status===`ACTIVE`?`success`:`warning`}">${F(e.status===`ACTIVE`?`Active`:e.status)}</span></td>
          </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    ${i?`<p class="adacct-note">Associations are managed per client from the <a href="#/clients">Clients page</a>.</p>`:``}`}function hh(e){let t=document.getElementById(`adacct-offline`);if(t){if(!e?.canConnect){t.style.display=`none`;return}t.style.display=``,document.getElementById(`adacct-oc-dl`)?.addEventListener(`click`,bh),document.getElementById(`adacct-oc-up`)?.addEventListener(`click`,yh),document.getElementById(`adacct-mc-file`)?.addEventListener(`change`,xh),gh()}}async function gh(){Dh=[];try{let e=await(await fetch(`${I()}/m5t/v5/integrations/google_ads/conversion_actions`)).json();if(!e.ok)return;let t=e.data.actions||[];if(Dh=t.filter(e=>e.type===`UPLOAD_CLICKS`&&(e.account_ids||[]).length),!Dh.length){if(t.length){let e=document.getElementById(`adacct-oc-result`);e&&(e.textContent=`Direct upload needs an import type conversion action in Google Ads. The CSV works either way.`)}return}let n=document.getElementById(`adacct-oc-target`);n&&(n.innerHTML=Dh.map(e=>`<option value="${F(e.id)}">${F(e.name||e.id)}</option>`).join(``)),document.getElementById(`adacct-oc-target-wrap`)?.style.setProperty(`display`,``),document.getElementById(`adacct-oc-up`)?.style.setProperty(`display`,``)}catch{}}function _h(){let e=document.getElementById(`adacct-oc-target`)?.value;return Dh.find(t=>t.id===e)||Dh[0]||null}async function vh(e,t){let n=_h();if(!n){t&&(t.textContent=`Pick an upload target first.`);return}let r=document.getElementById(`adacct-oc-value`)?.value,i=r!==``&&r!=null&&Number.isFinite(Number(r))?Number(r):null;t&&(t.textContent=`Uploading ${e.length} conversion${e.length===1?``:`s`}…`);try{let r=await(await fetch(`${I()}/m5t/v5/integrations/google_ads/upload_conversions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({customer_id:n.account_ids[0],conversion_action_id:n.id,rows:e.map(e=>i==null?e:{...e,value:i})})})).json();if(!r.ok)throw Error(r.error||`upload failed`);let a=[`${r.data.uploaded} uploaded to Google Ads.`];r.data.failed&&a.push(`${r.data.failed} rejected${r.data.errors?.[0]?`: ${r.data.errors[0]}`:`.`}`),t&&(t.textContent=a.join(` `))}catch(e){t&&(t.textContent=e.message===`upload failed`?`Upload failed. Please try again.`:`Upload failed: ${e.message}`)}}async function yh(){let e=document.getElementById(`adacct-oc-result`),t=Number(document.getElementById(`adacct-oc-days`)?.value)||90,n=[...document.querySelectorAll(`#adacct-oc-statuses input:checked`)].map(e=>e.value);if(!n.length){e&&(e.textContent=`Pick at least one status.`);return}let r=e=>e.toISOString().slice(0,10),i=r(new Date),a=r(new Date(Date.now()-(t-1)*864e5)),o=new URLSearchParams({from:a,to:i,statuses:n.join(`,`),format:`json`});try{let t=await(await fetch(`${I()}/m5t/v5/coreAdMetrics/offline-conversions.csv?${o}`)).json();if(!t.ok)throw Error();if(!t.rows.length){e&&(e.textContent=`No leads with a click id in that window.`);return}await vh(t.rows,e)}catch{e&&(e.textContent=`Upload failed. Please try again.`)}}async function bh(){let e=document.getElementById(`adacct-oc-result`),t=Number(document.getElementById(`adacct-oc-days`)?.value)||90,n=[...document.querySelectorAll(`#adacct-oc-statuses input:checked`)].map(e=>e.value);if(!n.length){e&&(e.textContent=`Pick at least one status.`);return}let r=document.getElementById(`adacct-oc-name`)?.value?.trim()||`M5M magnet lead`,i=document.getElementById(`adacct-oc-value`)?.value,a=e=>e.toISOString().slice(0,10),o=a(new Date),s=a(new Date(Date.now()-(t-1)*864e5)),c=new URLSearchParams({from:s,to:o,statuses:n.join(`,`),name:r});i!==``&&i!=null&&Number.isFinite(Number(i))&&c.set(`value`,i),e&&(e.textContent=`Building the export…`);try{let t=await fetch(`${I()}/m5t/v5/coreAdMetrics/offline-conversions.csv?${c}`);if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.text(),r=Math.max(0,n.trim().split(`
`).length-1);Ch(n,`google-ads-conversions-${s}-to-${o}.csv`),e&&(e.textContent=r?`${r} conversion${r===1?``:`s`} in the file.`:`No leads with a click id in that window. The file has headers only.`)}catch{e&&(e.textContent=`Export failed. Please try again.`)}}async function xh(e){let t=document.getElementById(`adacct-mc-result`),n=e.target.files?.[0];if(!n)return;let r=Sh(await n.text());if(!r.length){t&&(t.textContent=`No usable rows found. The CSV needs an email or phone column.`);return}t&&(t.textContent=`Matching ${r.length} row${r.length===1?``:`s`}…`);try{let e=await(await fetch(`${I()}/m5t/v5/coreAdMetrics/offline-conversions/match`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({rows:r})})).json();if(!e.ok)throw Error(e.error||`match failed`);let n=[`${e.matched_count} of ${r.length} rows matched a magnet lead with a click id.`];if(e.unmatched_count&&n.push(`${e.unmatched_count} had no matching lead.`),e.no_click_count&&n.push(`${e.no_click_count} matched a lead without a click id.`),!e.matched_count){t&&(t.textContent=n.join(` `));return}let i=document.getElementById(`adacct-oc-name`)?.value?.trim()||`M5M magnet lead`,a=document.getElementById(`adacct-oc-value`)?.value,o=a!==``&&a!=null&&Number.isFinite(Number(a))?Number(a):``,s=e=>`"${String(e??``).replace(/"/g,`""`)}"`,c=[`Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency`,...e.matched.map(e=>[s(e.gclid),s(i),s(e.time),o,``].join(`,`))].join(`\r
`)+`\r
`;if(Oh=e.matched.map(e=>({gclid:e.gclid,time:e.time})),t){t.innerHTML=``;let e=document.createElement(`span`);e.textContent=n.join(` `)+` `;let r=document.createElement(`button`);if(r.type=`button`,r.className=`adacct-manage`,r.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">download</span>Download matched CSV`,r.addEventListener(`click`,()=>Ch(c,`google-ads-conversions-matched-${new Date().toISOString().slice(0,10)}.csv`)),t.append(e,r),Dh.length){let e=document.createElement(`button`);e.type=`button`,e.className=`adacct-manage`,e.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">cloud_upload</span>Upload to Google Ads`,e.addEventListener(`click`,()=>vh(Oh,t)),t.append(` `,e)}}}catch{t&&(t.textContent=`Matching failed. Please try again.`)}finally{e.target.value=``}}function Sh(e){let t=[],n=[],r=``,i=!1;for(let a=0;a<e.length;a++){let o=e[a];i?o===`"`&&e[a+1]===`"`?(r+=`"`,a++):o===`"`?i=!1:r+=o:o===`"`?i=!0:o===`,`?(n.push(r),r=``):o===`
`||o===`\r`?(o===`\r`&&e[a+1]===`
`&&a++,n.push(r),r=``,n.some(e=>e.trim()!==``)&&t.push(n),n=[]):r+=o}if(n.push(r),n.some(e=>e.trim()!==``)&&t.push(n),t.length<2)return[];let a=t[0].map(e=>e.trim().toLowerCase()),o=a.findIndex(e=>/e-?mail/.test(e)),s=a.findIndex(e=>/phone|mobile|tel/.test(e)),c=a.findIndex(e=>/date|time|booked|appointment|start/.test(e));return o<0&&s<0?[]:t.slice(1).map(e=>({email:o>=0?(e[o]||``).trim():``,phone:s>=0?(e[s]||``).trim():``,at:c>=0?(e[c]||``).trim():``})).filter(e=>e.email||e.phone).slice(0,5e3)}function Ch(e,t){let n=new Blob([e],{type:`text/csv;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=t,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),4e3)}var wh,Th,Eh,Dh,Oh,kh,Ah=o((()=>{ki(),zs(),wh={google_ads:`Google Ads`,google_lsa:`Local Services Ads`},Th=e=>{let t=String(e||``).replace(/\D/g,``);return t.length===10?`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:String(e||``)},Eh=!1,Dh=[],Oh=null,kh={render:uh,init:dh}})),jh=c({default:()=>$h,init:()=>zh,openInviteModal:()=>Uh,render:()=>Rh});function Mh(e,t=`info`){try{Kh.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}}function Nh(){let e=E.getActiveOrg();if(e&&e.channel===qh)return{guid:e.guid,name:e.name};let t=E.getMemberships().find(e=>e.channel===qh);return t?{guid:t.orgGuid,name:t.name}:null}function Ph(e){let t=e?.created_tz;if(!t)return``;let n=new Date(t);return Number.isNaN(n.getTime())?``:n.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function Fh(){if(Yh)return;let e=document.createElement(`style`);e.id=`m5t-clients-styles`,e.textContent=`
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
  `,document.head.appendChild(e),Jn(),Yh=!0}function Ih(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function Lh(e){let t=e.caption||e.guid,n=e.status||`ENABLED`;return`
    <div class="client-row">
      <span class="client-row__avatar">${Y(Zh(t))}</span>
      <span class="client-row__main">
        <div class="client-row__name" title="${Y(t)}">${Y(t)}</div>
        <div class="client-row__meta">Added ${Y(Ph(e.created))||`—`}</div>
      </span>
      <span class="client-row__status" data-status="${Y(n)}">${Y(n)}</span>
      <div class="client-row__btns">
        <button class="client-card__invite" type="button" data-action="invite" data-client-guid="${Y(e.guid)}" data-client-name="${Y(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
        </button>
        <button class="client-card__invite" type="button" data-action="questionnaire" data-client-guid="${Y(e.guid)}" data-client-name="${Y(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">checklist</span> Questionnaire
        </button>
        ${E.getCapabilities().includes(`connect_ad_accounts`)?`
        <button class="client-card__invite" type="button" data-action="adaccounts" data-client-guid="${Y(e.guid)}" data-client-name="${Y(t)}">
          <span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Ad accounts
        </button>`:``}
      </div>
    </div>`}function Rh(){return Fh(),`
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
          ${Ih(`hourglass_empty`,`Loading clients…`)}
        </div>
      </div>
    </div>`}async function zh(){let e=Nh();document.getElementById(`clients-add-btn`)?.addEventListener(`click`,()=>Vh(e)),await Bh(e)}async function Bh(e){let t=document.getElementById(`clients-body`),n=document.getElementById(`clients-count`);if(t){if(!e?.guid){t.innerHTML=Ih(`info`,`Client provisioning is available to reseller / agency accounts.`),n&&(n.textContent=``);return}try{let r=E.getConfig?.().BASE_URL||``,i=await fetch(`${r}/m5t/v5/acctGroup`);if(!i.ok)throw Error(`HTTP ${i.status}`);let a=await i.json(),o=(Array.isArray(a?.data)?a.data:[]).filter(t=>t.class===Jh&&(!t.parent||t.parent===e.guid));if(!o.length){t.innerHTML=Ih(`group_off`,`No clients yet. Add your first client to start managing magnets on their behalf.`),n&&(n.textContent=``);return}t.innerHTML=`<div class="client-list">${o.map(Lh).join(``)}</div>`,n&&(n.textContent=`${o.length} client${o.length===1?``:`s`}`),t.querySelectorAll(`.client-card__invite`).forEach(e=>{e.addEventListener(`click`,()=>{e.dataset.action===`adaccounts`?Hh(e.dataset.clientGuid,e.dataset.clientName):e.dataset.action===`questionnaire`?Gh(e.dataset.clientGuid,e.dataset.clientName):Uh(e.dataset.clientGuid,e.dataset.clientName)})})}catch(e){console.warn(`[clients] load failed:`,e),t.innerHTML=Ih(`error`,`Couldn’t load clients. Please try again.`),n&&(n.textContent=``)}}}function Vh(e){if(!e?.guid){Mh(`Only reseller / agency accounts can add clients.`,`error`);return}let t=document.createElement(`div`);t.className=`client-modal-scrim`;let n=document.createElement(`div`);n.className=`client-modal`,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-modal`,`true`),n.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${Y(e.name||`your agency`)}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`,document.body.appendChild(t),document.body.appendChild(n),requestAnimationFrame(()=>{t.classList.add(`open`),n.classList.add(`open`)});let r=n.querySelector(`#client-name-input`),i=n.querySelector(`#client-modal-error`),a=n.querySelector(`[data-act="create"]`);r?.focus();let o=()=>{t.classList.remove(`open`),n.classList.remove(`open`),document.removeEventListener(`keydown`,s),setTimeout(()=>{t.remove(),n.remove()},200)},s=e=>{e.key===`Escape`&&o()};document.addEventListener(`keydown`,s),t.addEventListener(`click`,o),n.querySelector(`.client-modal__close`)?.addEventListener(`click`,o),n.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,o);let c=async()=>{let t=(r?.value||``).trim();if(i.textContent=``,!t){i.textContent=`Please enter a client name.`,r?.focus();return}a.disabled=!0;let n=a.innerHTML;a.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…`;try{let n=E.getConfig?.().BASE_URL||``,r=await fetch(`${n}/m5t/v5/acctGroup`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({class:Jh,caption:t,parent:e.guid})}),i=await r.json().catch(()=>({}));if(!r.ok||!i?.ok){let e=r.status===403?`You are not authorized to add a client here.`:i?.message||i?.error||`Failed (HTTP ${r.status})`;throw Error(e)}Mh(`Added client “${t}”`,`success`),o(),await Bh(e)}catch(e){console.warn(`[clients] create failed:`,e),i.textContent=e.message||`Something went wrong. Please try again.`,a.disabled=!1,a.innerHTML=n}};a?.addEventListener(`click`,c),r?.addEventListener(`keydown`,e=>{e.key===`Enter`&&c()})}async function Hh(e,t){let n=E.getConfig?.().BASE_URL||``,r={};try{let t=await fetch(`${n}/m5t/v5/coreAdAccount?owner_guid=${encodeURIComponent(e)}`),i=await t.json().catch(()=>({}));if(!t.ok)throw Error(`Failed to load ad accounts (${t.status})`);(i?.data||[]).forEach(e=>{r[e.provider]=e})}catch(e){console.warn(`[clients] ad-accounts prefill failed:`,e)}let i=r.google_ads,a=r.google_lsa,o=document.createElement(`div`);o.className=`client-modal-scrim`;let s=document.createElement(`div`);s.className=`client-modal`,s.setAttribute(`role`,`dialog`),s.setAttribute(`aria-modal`,`true`),s.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Ad accounts: ${Y(t)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Connect this client's advertising accounts so they can see ad performance next to their magnet leads. Enter account IDs only, no passwords.</p>
      <label class="client-modal__label" for="aa-gads">Google Ads Customer ID</label>
      <input class="client-modal__input" id="aa-gads" type="text" inputmode="numeric" placeholder="123-456-7890" autocomplete="off" value="${Y(i?.external_customer_id||``)}" />
      <p class="client-modal__hint">Found top-right in the client's Google Ads account. Dashes optional.</p>
      <label class="client-modal__label" for="aa-lsa" style="margin-top:14px">Local Services (LSA) Account ID</label>
      <input class="client-modal__input" id="aa-lsa" type="text" inputmode="numeric" placeholder="Optional" autocomplete="off" value="${Y(a?.external_customer_id||``)}" />
      <p class="client-modal__hint">Leave a field blank to disconnect that account.</p>
      <p class="client-modal__error" id="aa-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save">
          <span class="material-symbols-outlined" aria-hidden="true">save</span> Save
        </button>
      </div>
    </div>`,document.body.appendChild(o),document.body.appendChild(s),requestAnimationFrame(()=>{o.classList.add(`open`),s.classList.add(`open`)});let c=s.querySelector(`#aa-error`),l=s.querySelector(`[data-act="save"]`),u=()=>{o.classList.remove(`open`),s.classList.remove(`open`),document.removeEventListener(`keydown`,d),setTimeout(()=>{o.remove(),s.remove()},200)},d=e=>{e.key===`Escape`&&u()};document.addEventListener(`keydown`,d),o.addEventListener(`click`,u),s.querySelector(`.client-modal__close`)?.addEventListener(`click`,u),s.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,u);let f=(t,r,i)=>{let a=`${n}/m5t/v5/coreAdAccount`;return r&&!i?fetch(a,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({owner_guid:e,provider:t,external_customer_id:r})}):r&&i&&r!==i.external_customer_id?fetch(`${a}/${encodeURIComponent(i.guid)}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({external_customer_id:r})}):!r&&i?fetch(`${a}/${encodeURIComponent(i.guid)}`,{method:`DELETE`}):null};l?.addEventListener(`click`,async()=>{c.textContent=``;let e=Qh(s.querySelector(`#aa-gads`).value),t=Qh(s.querySelector(`#aa-lsa`).value),n=[f(`google_ads`,e,i),f(`google_lsa`,t,a)].filter(Boolean);if(!n.length){u();return}l.disabled=!0;let r=l.innerHTML;l.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…`;try{let e=await Promise.all(n);for(let t of e)if(!t.ok){let e=await t.json().catch(()=>({}));throw Error(t.status===403?`You are not authorized to connect accounts for this client.`:e?.error||e?.message||`Failed (HTTP ${t.status})`)}Mh(`Ad accounts updated`,`success`),u()}catch(e){c.textContent=e.message||`Something went wrong. Please try again.`,l.disabled=!1,l.innerHTML=r}})}function Uh(e,t){if(!e)return;let n=document.createElement(`div`);n.className=`client-modal-scrim`;let r=document.createElement(`div`);r.className=`client-modal`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${Y(t||`this client`)}</strong> to a read-only login for their account.</p>
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
    </div>`,document.body.appendChild(n),document.body.appendChild(r),requestAnimationFrame(()=>{n.classList.add(`open`),r.classList.add(`open`)});let i=()=>{n.classList.remove(`open`),r.classList.remove(`open`),document.removeEventListener(`keydown`,a),setTimeout(()=>{n.remove(),r.remove()},200)},a=e=>{e.key===`Escape`&&i()};document.addEventListener(`keydown`,a),n.addEventListener(`click`,i),r.querySelector(`.client-modal__close`)?.addEventListener(`click`,i),r.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,i);let o=r.querySelector(`#inv-email`),s=r.querySelector(`#inv-error`),c=r.querySelector(`[data-act="send"]`);o?.focus();let l=e=>e.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.dataset.url),e.textContent=`Copied!`,setTimeout(()=>{e.textContent=`Copy link`},1500)}catch{}});(async function(){let t=r.querySelector(`#invite-pending`);if(t)try{let n=E.getConfig?.().BASE_URL||``,r=await fetch(`${n}/m5t/v5/acctGroup/${encodeURIComponent(e)}/invites`),i=await r.json().catch(()=>({})),a=r.ok&&i.ok&&Array.isArray(i.invites)?i.invites:[];if(!a.length){t.innerHTML=``;return}t.innerHTML=`
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${a.map(e=>`
            <div class="invite-pending__row">
              <span class="invite-pending__email${e.expired?` expired`:``}" title="${Y(e.email)}">${Y(e.email)}${e.expired?` · expired`:``}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${Y(e.inviteUrl)}">Copy link</button>
            </div>`).join(``)}
        </div>`,t.querySelectorAll(`.invite-pending__copy`).forEach(l)}catch{t.innerHTML=``}})(),c?.addEventListener(`click`,async()=>{let t=(r.querySelector(`#inv-email`).value||``).trim(),n=(r.querySelector(`#inv-first`).value||``).trim(),a=(r.querySelector(`#inv-last`).value||``).trim();if(s.textContent=``,!t||!n||!a){s.textContent=`Email, first, and last name are required.`;return}c.disabled=!0;let o=c.innerHTML;c.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…`;try{let o=E.getConfig?.().BASE_URL||``,s=await fetch(`${o}/m5t/v5/acctGroup/${encodeURIComponent(e)}/invite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:t,first:n,last:a,member_role:`viewer`})}),c=await s.json().catch(()=>({}));if(!s.ok||!c.ok){let e=s.status===409?`A user with that email already exists.`:s.status===403?`You are not authorized to invite for this client.`:c.message||c.error||`Failed (HTTP ${s.status})`;throw Error(e)}Mh(`Invite created for ${t}`,`success`),r.querySelector(`#invite-body`).innerHTML=`
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${c.emailQueued?`An invite email is on its way to <strong>${Y(t)}</strong>.`:`Invite created for <strong>${Y(t)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly. It lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${Y(c.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;let l=r.querySelector(`#inv-link`);r.querySelector(`#inv-copy`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(l.value),r.querySelector(`#inv-copy`).textContent=`Copied!`}catch{l.select()}}),r.querySelector(`[data-act="done"]`)?.addEventListener(`click`,i)}catch(e){console.warn(`[clients] invite failed:`,e),s.textContent=e.message||`Something went wrong. Please try again.`,c.disabled=!1,c.innerHTML=o}})}function Wh(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?``:t.toLocaleString(void 0,{year:`numeric`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}async function Gh(e,t){if(!e)return;let n=E.getConfig?.().BASE_URL||``,r=document.createElement(`div`);r.className=`client-modal-scrim`;let i=document.createElement(`div`);i.className=`client-modal`,i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-modal`,`true`),i.innerHTML=`
    <div class="client-modal__head">
      <span class="client-modal__title">Kickoff Questionnaire: ${Y(t)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="qm-body">${Ih(`hourglass_empty`,`Loading…`)}</div>`,document.body.appendChild(r),document.body.appendChild(i),requestAnimationFrame(()=>{r.classList.add(`open`),i.classList.add(`open`)});let a=()=>{r.classList.remove(`open`),i.classList.remove(`open`),document.removeEventListener(`keydown`,o),setTimeout(()=>{r.remove(),i.remove()},200)},o=e=>{e.key===`Escape`&&a()};document.addEventListener(`keydown`,o),r.addEventListener(`click`,a),i.querySelector(`.client-modal__close`)?.addEventListener(`click`,a);let s=i.querySelector(`#qm-body`);function c(){s.innerHTML=`
      <p class="client-modal__sub">Send a Kickoff Questionnaire to <strong>${Y(t)}</strong>. They fill it out directly in their browser, no account needed. The link expires in 7 days.</p>
      <label class="client-modal__label" for="qm-email">Send to</label>
      <input class="client-modal__input" id="qm-email" type="email" placeholder="person@client.com" autocomplete="off" />
      <p class="client-modal__hint">We'll email the link here. You'll also get a copyable link afterwards as a backup.</p>
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send questionnaire</button>
      </div>`,s.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,a);let r=s.querySelector(`[data-act="send"]`),i=s.querySelector(`#qm-error`),o=s.querySelector(`#qm-email`);o?.focus(),r?.addEventListener(`click`,async()=>{let t=(o?.value||``).trim();if(i.textContent=``,!t){i.textContent=`Enter the email address to send this to.`,o?.focus();return}if(!be(t)){i.textContent=`That does not look like a valid email address.`,o?.focus();return}r.disabled=!0;let a=r.innerHTML;r.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…`;try{let r=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({owner_guid:e,recipient_email:t})}),i=await r.json().catch(()=>({}));if(!r.ok||!i.ok)throw Error(i.error||i.message||`Failed (HTTP ${r.status})`);Mh(i.data.emailQueued?`Questionnaire sent to ${t}`:`Link created — email could not be queued`,i.data.emailQueued?`success`:`info`),l({url:i.data.url,token_expiry:i.data.expires,recipient_email:i.data.recipient_email,emailQueued:i.data.emailQueued,guid:i.data.guid})}catch(e){i.textContent=e.message||`Something went wrong. Please try again.`,r.disabled=!1,r.innerHTML=a}})}function l(e){let t=e.recipient_email?`Sent`:`Link created`,r=e.emailQueued===!1?`<strong>The email could not be queued.</strong> Share the link below directly instead:`:e.recipient_email?`Emailed to <strong>${Y(e.recipient_email)}</strong>. The link is also below — handy if it bounces, or to share via text or chat:`:`Share this link with your client — email, text, chat:`;s.innerHTML=`
      <div class="qm-status" data-status="DRAFT"><span class="material-symbols-outlined" aria-hidden="true">hourglass_top</span> ${t} — awaiting response${e.token_expiry?`, link expires ${Y(Wh(e.token_expiry))}`:``}</div>
      <p class="client-modal__hint">${r}</p>
      <div class="client-modal__linkrow">
        <input class="client-modal__input" id="qm-link" type="text" readonly value="${Y(e.url||``)}" />
        <button class="client-modal__btn client-modal__btn--primary" type="button" id="qm-copy">Copy</button>
      </div>
      <p class="client-modal__error" id="qm-cancel-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel-q">Cancel questionnaire</button>
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button>
      </div>`;let i=s.querySelector(`#qm-link`);s.querySelector(`#qm-copy`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(i.value),s.querySelector(`#qm-copy`).textContent=`Copied!`}catch{i.select()}}),s.querySelector(`[data-act="done"]`)?.addEventListener(`click`,a);let o=s.querySelector(`[data-act="cancel-q"]`);o?.addEventListener(`click`,async()=>{if(!window.confirm(`Cancel this questionnaire? The link will stop working immediately. This cannot be undone — you would need to send a new one.`))return;o.disabled=!0;let t=o.innerHTML;o.innerHTML=`Cancelling…`;try{let t=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}/cancel`,{method:`POST`}),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||r.message||`Failed (HTTP ${t.status})`);Mh(`Questionnaire cancelled`,`success`),u({...e,status:`CANCELLED`,cancelled_tz:new Date().toISOString()})}catch(e){s.querySelector(`#qm-cancel-error`).textContent=e.message||`Something went wrong. Please try again.`,o.disabled=!1,o.innerHTML=t}})}function u(e){s.innerHTML=`
      <div class="qm-status" data-status="CANCELLED"><span class="material-symbols-outlined" aria-hidden="true">block</span> Cancelled${e.cancelled_tz?` ${Y(Wh(e.cancelled_tz))}`:``}${e.cancelled_by_email?` by ${Y(e.cancelled_by_email)}`:``}</div>
      <p class="client-modal__sub">This link was revoked and no longer works.${e.recipient_email?` It had been emailed to <strong>${Y(e.recipient_email)}</strong>.`:``}</p>
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Close</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="resend"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send a new one</button>
      </div>`,s.querySelector(`[data-act="done"]`)?.addEventListener(`click`,a),s.querySelector(`[data-act="resend"]`)?.addEventListener(`click`,()=>c())}function d(e,t=!1){let r=e.editability||{editable:e.status===`SUBMITTED`&&!e.locked_tz,reason:e.locked_tz?`finalized`:null,deadline:null},i=!!r.editable,o=!i&&e.status===`SUBMITTED`?r.reason===`finalized`?`<div class="qm-status" data-status="LOCKED"><span class="material-symbols-outlined" aria-hidden="true">lock</span> Finalized${e.locked_tz?` ${Y(Wh(e.locked_tz))}`:``}${e.locked_by_email?` by ${Y(e.locked_by_email)}`:``} — no further edits.</div>`:`<div class="qm-status" data-status="LOCKED"><span class="material-symbols-outlined" aria-hidden="true">lock_clock</span> Editing closed${r.deadline?` ${Y(Wh(r.deadline))}`:``} — a response locks 14 days after it is submitted.</div>`:``,c=i&&r.deadline?`<p class="client-modal__sub qm-editable-hint">You can edit these answers until ${Y(Wh(r.deadline))}.</p>`:``;s.innerHTML=`
      <div class="qm-status" data-status="SUBMITTED"><span class="material-symbols-outlined" aria-hidden="true">task_alt</span> Submitted ${e.submitted_tz?Y(Wh(e.submitted_tz)):``}</div>
      ${o}
      ${qn(e)}
      <form id="qm-form">
        ${Wn(e,t?{renderAnswer:Gn}:{})}
      </form>
      ${t?``:c}
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        ${t?`<button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel-edit">Cancel</button>
             <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save changes</button>`:`<button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Close</button>
             ${i?`<button class="client-modal__btn client-modal__btn--primary" type="button" data-act="edit"><span class="material-symbols-outlined" aria-hidden="true">edit</span> Edit answers</button>`:``}`}
      </div>`,s.querySelector(`[data-act="done"]`)?.addEventListener(`click`,a),s.querySelector(`[data-act="cancel-edit"]`)?.addEventListener(`click`,()=>d(e,!1)),s.querySelector(`[data-act="edit"]`)?.addEventListener(`click`,()=>d(e,!0));let l=s.querySelector(`[data-act="save"]`);l?.addEventListener(`click`,async()=>{let t=Kn(s);l.disabled=!0;let r=l.innerHTML;l.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…`;let i;try{i=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({answers:t})});let r=await i.json().catch(()=>({}));if(!i.ok||!r.ok)throw Error(r.error||r.message||`Failed (HTTP ${i.status})`);Mh(`Answers updated`,`success`);let a=await(await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}`)).json().catch(()=>({}));d(a.ok?a.data:{...e,answers:t},!1)}catch(t){if(i&&i.status===423){Mh(t.message||`This questionnaire is now locked.`,`info`);let r=await(await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(e.guid)}`)).json().catch(()=>({}));d(r.ok?r.data:e,!1);return}s.querySelector(`#qm-error`).textContent=t.message||`Something went wrong. Please try again.`,l.disabled=!1,l.innerHTML=r}})}try{let t=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse?owner_guid=${encodeURIComponent(e)}`),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok)throw Error(r.error||`HTTP ${t.status}`);let i=(r.data||[])[0]||null;if(!i){c();return}if(i.status===`DRAFT`){l(i);return}if(i.status===`CANCELLED`){u(i);return}let a=await fetch(`${n}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(i.guid)}`),o=await a.json().catch(()=>({}));if(!a.ok||!o.ok)throw Error(o.error||`HTTP ${a.status}`);d(o.data)}catch(e){console.warn(`[clients] questionnaire load failed:`,e),s.innerHTML=`<p class="client-modal__error">Could not load questionnaire status. ${Y(e.message||``)}</p>`}}var Kh,qh,Jh,Yh,Xh,Y,Zh,Qh,$h,eg=o((()=>{D(),qe(),Kh=u(f(),1),m(),Zn(),qh=`reseller_org`,Jh=`managed_client`,Yh=!1,Xh={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Y=e=>String(e??``).replace(/[&<>"']/g,e=>Xh[e]),Zh=e=>String(e||`?`).trim().split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,Qh=e=>String(e||``).replace(/[^0-9]/g,``),$h={render:Rh,init:zh}})),tg=c({default:()=>yg,init:()=>ug,loadTeam:()=>dg,render:()=>lg});function ng(){let e=E.getActiveOrg(),t=e&&e.channel!==mg?e:null;if(!t){let e=E.getMemberships().find(e=>e.channel!==mg);e&&(t={guid:e.orgGuid,channel:e.channel,memberRole:e.memberRole})}if(!t)return null;let n=E.getMemberships().find(e=>e.orgGuid===t.guid)?.name;return{...t,name:n}}function rg(e){return Object.values(je).filter(t=>Ae(e,t.value)).sort((e,t)=>t.rank-e.rank)}function ig(){if(hg)return;let e=document.createElement(`style`);e.id=`m5t-team-styles`,e.textContent=`
    .page-shell .team-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-list { display: flex; flex-direction: column; }
    .page-shell .team-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
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
  `,document.head.appendChild(e),hg=!0}function ag(e,t){return`<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${e}</span><p>${t}</p></div>`}function og(e,t,n){let r=e.member_role||`member`,i=e.entity_guid&&e.entity_guid===E.getEntity?.()?.guid,a=n&&!i&&rg(t.memberRole).some(e=>e.value===r);return`
    <div class="team-row">
      <span class="team-avatar">${X(vg(e.name||e.email))}</span>
      <span class="team-main">
        <div class="team-name">${X(e.name||e.email)}${e.verified?``:` · <span style="color:var(--color-text-subtle,#6C7C9A);font-weight:400;">pending verification</span>`}</div>
        <div class="team-email" title="${X(e.email)}">${X(e.email)}</div>
      </span>
      <span class="team-role" data-role="${X(r)}">${X(je[r]?.label||r)}</span>
      ${a?`<button class="team-modal__btn team-modal__btn--ghost team-remove" type="button" data-id="${X(e.id)}" data-name="${X(e.name||e.email)}">Remove</button>`:``}
    </div>`}async function sg(e,t){let{uid:n,email:r}=e.dataset;if(window.confirm(`Revoke the invitation for ${r}?\n\nThe invitation link stops working immediately, including any copy already sent. You can invite this address again afterwards.`)){e.disabled=!0;try{let e=E.getConfig?.().BASE_URL||``,i=await fetch(`${e}/m5t/v5/acctGroup/${encodeURIComponent(t.guid)}/invites/${encodeURIComponent(n)}`,{method:`DELETE`}),a=await i.json().catch(()=>({}));if(!i.ok||!a.ok)throw Error(a.message||a.error||`HTTP ${i.status}`);_g(`Invitation for ${r} revoked`,`success`)}catch(t){e.disabled=!1,_g(t.message||`Could not revoke that invitation.`,`error`);return}try{await dg(t)}catch{}}}async function cg(e,t){let{id:n,name:r}=e.dataset;if(window.confirm(`Remove ${r} from the team?\n\nThey lose access to this workspace immediately. Their account itself is not deleted, and you can invite them again later.`)){e.disabled=!0;try{let e=E.getConfig?.().BASE_URL||``,t=await fetch(`${e}/m5t/v5/acctGroupMember/${encodeURIComponent(n)}`,{method:`DELETE`}),i=await t.json().catch(()=>({}));if(!t.ok||!i.ok)throw Error(i.message||i.error||`HTTP ${t.status}`);_g(`${r} removed from the team`,`success`)}catch(t){e.disabled=!1,_g(t.message||`Could not remove that member.`,`error`);return}try{await dg(t)}catch{}}}function lg(){return ig(),`
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
          ${ag(`hourglass_empty`,`Loading team…`)}
        </div>
      </div>
    </div>`}async function ug(){let e=ng(),t=document.getElementById(`team-invite-btn`);if(!e){t&&(t.style.display=`none`),document.getElementById(`team-body`).innerHTML=ag(`info`,`Team management is available for agency and workspace accounts.`);return}t?.addEventListener(`click`,()=>fg(e)),await dg(e)}async function dg(e){let t=document.getElementById(`team-body`),n=document.getElementById(`team-count`);if(t)try{let r=E.getConfig?.().BASE_URL||``,[i,a]=await Promise.all([fetch(`${r}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/members`),fetch(`${r}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/invites`)]),[o,s]=await Promise.all([i.json().catch(()=>({})),a.json().catch(()=>({}))]);if(!i.ok||!a.ok)throw Error(`Failed to load team (members: ${i.status}, invites: ${a.status})`);let c=o.members||[],l=s.invites||[],u=rg(e.memberRole).length>0;t.innerHTML=(l.length?`
      <div class="team-pending">
        <div class="team-pending__label">Pending invites</div>
        ${l.map(e=>`
          <div class="team-pending__row">
            <span class="team-pending__email" title="${X(e.email)}">${X(e.email)}${e.expired?` · expired`:``}</span>
            <button class="team-modal__btn team-modal__btn--ghost team-copy" type="button" data-url="${X(e.inviteUrl)}">Copy link</button>
            ${u?`<button class="team-modal__btn team-modal__btn--ghost team-revoke" type="button" data-uid="${X(e.uid)}" data-email="${X(e.email)}">Revoke</button>`:``}
          </div>`).join(``)}
      </div>`:``)+(c.length?`<div class="team-list">${c.map(t=>og(t,e,u)).join(``)}</div>`:ag(`group`,`No members yet.`)),n&&(n.textContent=`${c.length} member${c.length===1?``:`s`}`),t.querySelectorAll(`.team-copy`).forEach(e=>e.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e.dataset.url),e.textContent=`Copied!`,setTimeout(()=>{e.textContent=`Copy link`},1500)}catch{}})),t.querySelectorAll(`.team-revoke`).forEach(t=>t.addEventListener(`click`,()=>sg(t,e))),t.querySelectorAll(`.team-remove`).forEach(t=>t.addEventListener(`click`,()=>cg(t,e)))}catch(e){console.warn(`[team] load failed:`,e),t.innerHTML=ag(`error`,`Couldn’t load the team. Please try again.`)}}function fg(e){let t=rg(e.memberRole);if(!t.length){_g(`You don’t have permission to invite teammates.`,`error`);return}let n=document.createElement(`div`);n.className=`team-modal-scrim`;let r=document.createElement(`div`);r.className=`team-modal`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.innerHTML=`
    <div class="team-modal__head">
      <span class="team-modal__title">Invite a teammate</span>
      <button class="team-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="team-modal__body" id="team-invite-body">
      <p class="team-modal__sub">They'll get a link to set a password and join <strong>${X(e.name||`your workspace`)}</strong>.</p>
      <label class="team-modal__label" for="tm-email">Email</label>
      <input class="team-modal__input" id="tm-email" type="email" placeholder="teammate@company.com" autocomplete="off" />
      <div class="team-modal__row">
        <div><label class="team-modal__label" for="tm-first">First name</label><input class="team-modal__input" id="tm-first" type="text" autocomplete="off" /></div>
        <div><label class="team-modal__label" for="tm-last">Last name</label><input class="team-modal__input" id="tm-last" type="text" autocomplete="off" /></div>
      </div>
      <label class="team-modal__label" for="tm-role">Role</label>
      <select class="team-modal__select" id="tm-role">
        ${t.map(e=>`<option value="${e.value}"${e.value===`member`?` selected`:``}>${X(e.label)}</option>`).join(``)}
      </select>
      <p class="team-modal__error" id="tm-error"></p>
      <div class="team-modal__actions">
        <button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="team-modal__btn team-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`,document.body.appendChild(n),document.body.appendChild(r),requestAnimationFrame(()=>{n.classList.add(`open`),r.classList.add(`open`)});let i=()=>{n.classList.remove(`open`),r.classList.remove(`open`),document.removeEventListener(`keydown`,a),setTimeout(()=>{n.remove(),r.remove()},200)},a=e=>{e.key===`Escape`&&i()};document.addEventListener(`keydown`,a),n.addEventListener(`click`,i),r.querySelector(`.team-modal__close`)?.addEventListener(`click`,i),r.querySelector(`[data-act="cancel"]`)?.addEventListener(`click`,i),r.querySelector(`#tm-email`)?.focus();let o=r.querySelector(`#tm-error`),s=r.querySelector(`[data-act="send"]`);s?.addEventListener(`click`,async()=>{let t=(r.querySelector(`#tm-email`).value||``).trim(),n=(r.querySelector(`#tm-first`).value||``).trim(),a=(r.querySelector(`#tm-last`).value||``).trim(),c=r.querySelector(`#tm-role`).value;if(o.textContent=``,!t||!n||!a){o.textContent=`Email, first, and last name are required.`;return}s.disabled=!0;let l=s.innerHTML;s.innerHTML=`<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…`;try{let o=E.getConfig?.().BASE_URL||``,s=await fetch(`${o}/m5t/v5/acctGroup/${encodeURIComponent(e.guid)}/invite`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:t,first:n,last:a,member_role:c})}),l=await s.json().catch(()=>({}));if(!s.ok||!l.ok){let e=s.status===409?`A user with that email already exists.`:s.status===403?l.message||`You are not authorized to invite this role.`:l.message||l.error||`Failed (HTTP ${s.status})`;throw Error(e)}_g(`Invite created for ${t}`,`success`),r.querySelector(`#team-invite-body`).innerHTML=`
        <div class="team-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${l.emailQueued?`An invite email is on its way to <strong>${X(t)}</strong>.`:`Invite created for <strong>${X(t)}</strong>.`}</p>
          <p class="team-modal__sub">Or share this link directly:</p>
          <div class="team-modal__linkrow">
            <input class="team-modal__input" id="tm-link" type="text" readonly value="${X(l.inviteUrl)}" />
            <button class="team-modal__btn team-modal__btn--primary" type="button" id="tm-copy">Copy</button>
          </div>
          <div class="team-modal__actions"><button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;let u=r.querySelector(`#tm-link`);r.querySelector(`#tm-copy`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(u.value),r.querySelector(`#tm-copy`).textContent=`Copied!`}catch{u.select()}}),r.querySelector(`[data-act="done"]`)?.addEventListener(`click`,()=>{i(),dg(e)})}catch(e){console.warn(`[team] invite failed:`,e),o.textContent=e.message||`Something went wrong. Please try again.`,s.disabled=!1,s.innerHTML=l}})}var pg,mg,hg,gg,X,_g,vg,yg,bg=o((()=>{D(),pg=u(f(),1),m(),qe(),mg=`managed_client`,hg=!1,gg={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},X=e=>String(e??``).replace(/[&<>"']/g,e=>gg[e]),_g=(e,t=`info`)=>{try{pg.default.publish(p.UI_TOAST,{message:e,type:t})}catch{}},vg=e=>String(e||`?`).trim().split(/\s+/).slice(0,2).map(e=>e[0]||``).join(``).toUpperCase()||`?`,yg={render:lg,init:ug}}));m(),ye(),D(),It(),y(),fn(),yn(),Ze(),window.m5t=Object.create(null),window.m5t.pubsub=b.default,console.log(`StreamSyncEngage SaaS Client - Starting...`),console.log(`Environment:`,`production`),console.log(`Document readyState:`,document.readyState),console.log(`window.mvvLegit:`,typeof window.mvvLegit),console.log(`globalThis.mvvLegit:`,typeof globalThis.mvvLegit);try{console.log(`mvvLegit (direct):`,typeof mvvLegit)}catch(e){console.log(`mvvLegit (direct): ReferenceError -`,e.message)}var xg=Object.keys(window).filter(e=>e.toLowerCase().includes(`mvv`)||e.toLowerCase().includes(`neodigm`)||e.toLowerCase().includes(`legit`));console.log(`Possible Neodigm globals:`,xg);var Z=new ee.default(`/`,{hash:!0});window.router=Z;function Q(e){let t=e?`${e.replace(/-/g,`_`)}_route`:`splash_route`;return console.log(`[Router] Checking access: ${e} -> ${t}`),mvvLegit.isRouteAllowed(t)?!0:(console.warn(`[Router] Access denied to route: ${t}`),b.default.publish(p.UI_TOAST,{message:`Please sign in to access this page`,type:`warning`}),!1)}function $(e){console.log(`[Router] Navigating to:`,e),Z.navigate(`/${e}`)}var Sg=new Set([`splash`,`signin`,`signup`,`forgot`,`resethash`,`verf-link`,`accept-invite`,`signout`]),Cg={},wg={},Tg=null,Eg={admin:{caption:`Platform Admin`,icon:`shield_person`},reseller:{caption:`Reseller`,icon:`handshake`},managed:{caption:`Managed`,icon:`visibility`},self_serve:{caption:`Self-Serve`,icon:`rocket_launch`}},Dg=`__portfolio__`;function Og(){try{Z._setCurrent(null)}catch{}Z.resolve()}function kg(){let e=document.getElementById(`m5t-side-nav`);if(!e)return;let t=!E.getScope()&&E.isAuthenticated(),n=E.getCapabilities(),r=E.getUiMode(),i=Vt.getSideNav(n,{uiMode:r});Cg={},wg={};let a=e=>{e.route&&(Cg[e.route]={sectionToken:e.token,childToken:null,children:e.children||null},Array.isArray(e.children)&&e.children.forEach(t=>{t.route&&(wg[t.token]=t.route,Cg[t.route]={sectionToken:e.token,childToken:t.token,children:e.children})}))},o=e=>e.forEach(e=>{e.group&&Array.isArray(e.items)?o(e.items):a(e)});o(i);let s=E.getMemberships(),c=E.getActiveOrg(),l=E.getManagedClients(),u=E.getStoredActiveOrg(),d=l.length?[{guid:Dg,name:`Portfolio (all clients)`},...s.map(e=>({guid:e.orgGuid,name:e.name||e.channel,channel:e.channel,group:`Your organization`})),...l.map(e=>({guid:e.orgGuid,name:e.name||e.orgGuid,channel:e.channel,group:`Clients`}))]:s.map(e=>({guid:e.orgGuid,name:e.name||e.channel,channel:e.channel}));e.setState({buttons:i,orgs:d,activeOrg:l.length?u||Dg:c?.guid||null,footerBadge:Eg[r]||null,loading:t}),jg(),Tg&&Mg(Tg)}var Ag=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function jg(){let e=document.getElementById(`app-content`);if(!e)return;let t=document.getElementById(`org-context-banner`);t||(t=document.createElement(`div`),t.id=`org-context-banner`,e.insertBefore(t,e.firstChild),nn(t));let n=E.getActiveOrg(),r=E.isPreviewingAsClient(),i=!!n?.viaSubtree&&!!Tg&&!Sg.has(Tg);if(t.hidden=!i,!i){t.innerHTML=``;return}let a=Ag(n.name||`Client`);t.innerHTML=`
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
    </div>`,t.querySelector(`[data-ocb="preview"]`)?.addEventListener(`click`,()=>{E.setPreviewAsClient(!E.isPreviewingAsClient()),Og()}),t.querySelector(`[data-ocb="portfolio"]`)?.addEventListener(`click`,()=>{E.setPreviewAsClient(!1),E.setActiveOrg(null)})}function Mg(e){let t=document.getElementById(`m5t-side-nav`),n=Cg[`/${e}`]||Cg[e]||null;t?.setActiveToken(n?.sectionToken||null),Ng(n)}function Ng(e){let t=document.getElementById(`m5t-sub-nav`),n=document.getElementById(`app-shell`);if(!t)return;let r=e?.children;t.hidden=!1,r&&r.length>1?(t.updateButtons(r.map(t=>({token:t.token,caption:t.caption,enabled:!0,selected:t.token===e.childToken}))),n?.classList.add(`has-sub-nav`)):(t.updateButtons([]),n?.classList.remove(`has-sub-nav`))}function Pg(){let e=Ft.getAvailableLanguages&&Ft.getAvailableLanguages()||[];if(e.length<2){b.default.publish(p.UI_TOAST,{message:`Only one language is available`,type:`info`});return}let t=localStorage.getItem(v.FF_SSE_LS_USER_LANG)||v.FF_SSE_I18N_LANG||e[0],n=e[(e.indexOf(t)+1)%e.length];Ft.setLanguage(n),b.default.publish(p.UI_TOAST,{message:`Language: ${n}`,type:`info`})}function Fg(){document.documentElement.classList.toggle(`ff-no-animations`,un())}function Ig(){let e=document.getElementById(`m5t-side-nav`);if(!e)return;Vt.setAppToken(`client-saas`),dn(e),document.getElementById(`app-shell`)?.classList.toggle(`nav-collapsed`,e.getAttribute(`data-collapsed`)===`true`),e.addEventListener(`nav-select`,e=>{let t=e.detail?.route;t&&Z.navigate(t.startsWith(`/`)?t:`/${t}`)}),e.addEventListener(`logo-click`,()=>Z.navigate(`/home`)),e.addEventListener(`nav-collapse`,e=>{document.getElementById(`app-shell`)?.classList.toggle(`nav-collapsed`,!!e.detail?.collapsed)}),e.addEventListener(`org-switch`,e=>{let t=e.detail?.orgGuid;t&&E.setActiveOrg(t===Dg?null:t)}),e.addEventListener(`footer-action`,e=>{switch(e.detail?.action){case`account`:Z.navigate(`/settings`);break;case`signout`:Z.navigate(`/signout`);break;case`lang`:Pg();break;case`theme`:_n()}}),document.getElementById(`m5t-sub-nav`)?.addEventListener(`nav-select`,e=>{let t=wg[e.detail?.token];t&&Z.navigate(t)}),document.addEventListener(`language-changed`,()=>kg()),kg(),b.default.subscribe(p.AUTH_SCOPE_LOADED,()=>kg());let t=()=>{let e=E.getScope();return[e?.uiMode,e?.activeOrg?.guid,(e?.managedClients||[]).length,(e?.capabilities||[]).join(`,`),E.getStoredActiveOrg()].join(`|`)},n=t();b.default.subscribe(p.AUTH_SCOPE_LOADED,()=>{let e=t();e!==n&&(n=e,Tg&&!Sg.has(Tg)&&Og())})}function Lg(e){Tg=e;let t=document.getElementById(`m5t-side-nav`),n=document.getElementById(`app-shell`);if(!t||!n)return;let r=!Sg.has(e);if(t.hidden=!r,n.classList.toggle(`has-side-nav`,r),Qt(r),r)Mg(e);else{let e=document.getElementById(`m5t-sub-nav`);e&&(e.hidden=!0),n.classList.remove(`has-sub-nav`)}jg()}b.default.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{t?.route&&Lg(t.route)});var Rg=()=>{console.log(`[Router] Route: splash`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`splash`});let e=he()?.name;w(e===`invite`?()=>Promise.resolve().then(()=>(Dn(),bn)):e===`questionnaire`?()=>Promise.resolve().then(()=>(mr(),er)):()=>Promise.resolve().then(()=>(yr(),hr)),void 0,import.meta.url).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`splash`})}).catch(e=>{console.error(`[Router] Error loading splash route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`splash`,error:e})})};Z.on(`/`,Rg),Z.on(`/splash`,Rg),Z.on(`/signin`,()=>{console.log(`[Router] Route: /signin`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`signin`}),w(()=>Promise.resolve().then(()=>(Ar(),Cr)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`signin`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading signin route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`signin`,error:e})})}),Z.on(`/signup`,()=>{console.log(`[Router] Route: /signup`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`signup`}),w(()=>Promise.resolve().then(()=>(Ur(),Pr)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`signup`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading signup route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`signup`,error:e})})}),Z.on(`/verf-link`,()=>{console.log(`[Router] Route: /verf-link`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`verf-link`}),w(()=>Promise.resolve().then(()=>(qr(),Wr)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`verf-link`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading verf-link route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`verf-link`,error:e})})}),Z.on(`/forgot`,()=>{console.log(`[Router] Route: /forgot`),b.default.publish(p.ROUTE_NAV_BEFORE,{route:`forgot`}),w(()=>Promise.resolve().then(()=>(ii(),$r)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`forgot`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading forgot route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`forgot`,error:e})})}),Z.on(`/resethash`,()=>{if(console.log(`[Router] Route: /resethash`),!Q(`resethash`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`resethash`}),w(()=>Promise.resolve().then(()=>(ui(),ai)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`resethash`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading resethash route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`resethash`,error:e})})}),Z.on(`/home`,()=>{if(console.log(`[Router] Route: /home`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`home`}),w(()=>Promise.resolve().then(()=>(fa(),Bi)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`home`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading home route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`home`,error:e})})}),Z.on(`/signout`,()=>{if(console.log(`[Router] Route: /signout`),!Q(`signout`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`signout`}),w(()=>Promise.resolve().then(()=>(ga(),pa)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`signout`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading signout route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`signout`,error:e})})}),[{path:`/billing`,name:`billing`,title:`Billing`,icon:`receipt_long`},{path:`/magnets/drafts`,name:`magnets/drafts`,title:`Magnets · Drafts`,icon:`widgets`},{path:`/magnets/archived`,name:`magnets/archived`,title:`Magnets · Archived`,icon:`widgets`},{path:`/analytics/conversions`,name:`analytics/conversions`,title:`Analytics · Conversions`,icon:`monitoring`}].forEach(({path:e,name:t,title:n,icon:r})=>{Z.on(e,()=>{if(console.log(`[Router] Route: ${e}`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:t}),w(()=>Promise.resolve().then(()=>(Ca(),_a)).then(e=>{let i=document.getElementById(`app`);i.innerHTML=e.render({title:n,icon:r,name:t}),e.init&&e.init({name:t}),b.default.publish(p.ROUTE_NAV_AFTER,{route:t})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading section route (${t}):`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:t,error:e})})})}),Z.on(`/settings`,()=>{if(console.log(`[Router] Route: /settings`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings`}),w(()=>Promise.resolve().then(()=>(qa(),wa)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-general route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings`,error:e})})}),Z.on(`/settings/workspace`,()=>{if(console.log(`[Router] Route: /settings/workspace`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/workspace`}),w(()=>Promise.resolve().then(()=>(To(),Ja)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/workspace`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-workspace route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/workspace`,error:e})})}),Z.on(`/settings/notifications`,()=>{if(console.log(`[Router] Route: /settings/notifications`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/notifications`}),w(()=>Promise.resolve().then(()=>(Xo(),Eo)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/notifications`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-notifications route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/notifications`,error:e})})}),Z.on(`/settings/integrations`,()=>{if(console.log(`[Router] Route: /settings/integrations`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/integrations`}),w(()=>Promise.resolve().then(()=>(Zs(),Bs)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/integrations`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-integrations route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/integrations`,error:e})})}),Z.on(`/settings/integrations/:provider`,e=>{let t=e?.data?.provider||``;if(console.log(`[Router] Route: /settings/integrations/`+t),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/integrations`}),w(()=>Promise.resolve().then(()=>(hc(),Qs)).then(e=>{let n=document.getElementById(`app`);n.innerHTML=e.render({provider:t}),e.init&&e.init({provider:t}),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/integrations`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading integration detail route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/integrations`,error:e})})}),Z.on(`/settings/security`,()=>{if(console.log(`[Router] Route: /settings/security`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`settings/security`}),w(()=>Promise.resolve().then(()=>(Bc(),gc)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`settings/security`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading settings-security route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`settings/security`,error:e})})}),Z.on(`/conversations`,()=>{if(console.log(`[Router] Route: /conversations`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`conversations`}),w(()=>Promise.resolve().then(()=>(ul(),Vc)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`conversations`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading conversations route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`conversations`,error:e})})}),Z.on(`/ab-testing`,()=>{if(console.log(`[Router] Route: /ab-testing`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`ab-testing`}),w(()=>Promise.resolve().then(()=>(Il(),dl)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`ab-testing`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading ab-testing route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`ab-testing`,error:e})})}),Z.on(`/magnets`,()=>{if(console.log(`[Router] Route: /magnets`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`magnets`}),w(()=>Promise.resolve().then(()=>(qf(),_d)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`magnets`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading magnets route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`magnets`,error:e})})}),Z.on(`/templates`,()=>{if(console.log(`[Router] Route: /templates`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`templates`}),w(()=>Promise.resolve().then(()=>(op(),Jf)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`templates`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading templates route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`templates`,error:e})})}),Z.on(`/questionnaires`,()=>{if(console.log(`[Router] Route: /questionnaires`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`questionnaires`}),w(()=>Promise.resolve().then(()=>(jp(),sp)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`questionnaires`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading questionnaires route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`questionnaires`,error:e})})}),Z.on(`/leads`,()=>{if(console.log(`[Router] Route: /leads`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`leads`}),w(()=>Promise.resolve().then(()=>(_m(),Mp)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`leads`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading leads route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`leads`,error:e})})}),Z.on(`/analytics`,()=>{if(console.log(`[Router] Route: /analytics`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`analytics`}),w(()=>Promise.resolve().then(()=>(Lm(),vm)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`analytics`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading analytics route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`analytics`,error:e})})}),Z.on(`/analytics/ad-performance`,()=>{if(console.log(`[Router] Route: /analytics/ad-performance`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`analytics/ad-performance`}),w(()=>Promise.resolve().then(()=>(sh(),Rm)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`analytics/ad-performance`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading ad-performance route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`analytics/ad-performance`,error:e})})}),Z.on(`/ad-accounts`,()=>{if(console.log(`[Router] Route: /ad-accounts`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`ad-accounts`}),w(()=>Promise.resolve().then(()=>(Ah(),ch)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`ad-accounts`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading ad-accounts route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`ad-accounts`,error:e})})}),Z.on(`/clients`,()=>{if(console.log(`[Router] Route: /clients`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`clients`}),w(()=>Promise.resolve().then(()=>(eg(),jh)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`clients`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading clients route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`clients`,error:e})})}),Z.on(`/team`,()=>{if(console.log(`[Router] Route: /team`),!Q(`home`)){$(`signin`);return}b.default.publish(p.ROUTE_NAV_BEFORE,{route:`team`}),w(()=>Promise.resolve().then(()=>(bg(),tg)).then(e=>{let t=document.getElementById(`app`);t.innerHTML=e.render(),e.init&&e.init(),b.default.publish(p.ROUTE_NAV_AFTER,{route:`team`})}),void 0,import.meta.url).catch(e=>{console.error(`[Router] Error loading team route:`,e),b.default.publish(p.ROUTE_NAV_ERROR,{route:`team`,error:e})})}),Z.notFound(()=>{console.log(`[Router] Route not found - redirecting to splash`),$(`splash`)}),b.default.subscribe(p.ROUTE_NAV,(e,t)=>{console.log(`[Router] ROUTE_NAV event received:`,t),t?.route&&$(t.route)});function zg(){console.log(`[App] Waiting for Neodigm 55 library...`);let e=0,t=setInterval(()=>{e++,e%10==0&&console.log(`[App] Still waiting... attempt ${e}/100`,{mvvLegitExists:typeof mvvLegit<`u`,neodigmLoaded:window.__neodigmLoaded}),typeof mvvLegit<`u`?(console.log(`[App] Neodigm 55 loaded after ${e*100}ms`),clearInterval(t),Bg()):e>=100&&(clearInterval(t),console.error(`[App] Failed to load Neodigm 55 library after 10 seconds`),console.error(`[App] Check browser console for CORS or network errors`),document.getElementById(`app`).innerHTML=`
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `,b.default.publish(p.APP_ERROR,{message:`Failed to load authentication library`}))},100)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,zg):zg();async function Bg(){if(console.log(`[App] Neodigm 55 loaded, initializing...`),mn(),Fg(),ce(),Ft.initialize(),console.log(`[App] I18n Controller initialized`),!await E.init({BASE_URL:`https://machfivemagnet-saas.onrender.com`,navigateFunction:e=>{console.log(`[AuthController] Navigation requested:`,e),$(e)}})){console.error(`[App] AuthController initialization failed`);return}let e=E.getEntity();e&&(console.log(`[App] Session restored for:`,e.email),b.default.publish(p.APP_USER_LOADED,{entity:e}),E.isAuthenticated()&&(localStorage.getItem(E.CONFIG.LS_KEYS.ACTIVE_ORG)?await E.fetchScope():E.fetchScope())),b.default.publish(p.APP_READY,{timestamp:new Date().toISOString(),sessionUser:e}),Ig(),sn(),Z.resolve(),window.AuthController=E,window.I18nController=Ft,window.MachVive=Lt,console.log(`[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)`)}b.default.subscribe(p.ROUTE_NAV_AFTER,(e,t)=>{Ft!==void 0&&Ft.refresh&&setTimeout(()=>{Ft.refresh()},100)});
//# sourceMappingURL=index.js.map