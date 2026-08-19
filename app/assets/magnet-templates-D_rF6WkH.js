import { p as peekHandoff, H as HANDOFF, t as takeHandoff, s as setHandoff } from "./routeHandoff-CzcXjRAH.js";
const SDK_RAW = `!function(){"use strict";try{window.machfivemagnet={appGuid:"##APPGUID##",magnets:"##MAGNET_DEFINITIONS##"}}catch(e){return}var e=window.machfivemagnet||{},t="string"==typeof e.appGuid?e.appGuid:"",a=Array.isArray(e.magnets)?e.magnets:[];if(t&&a.length){var r,n="function"==typeof window.fetch?window.fetch.bind(window):null,o="#0072BA",i="Chat with us",m="Typically replies in a few minutes",s=function(){try{var e=document.currentScript;if(!e||!e.src)for(var t=document.getElementsByTagName("script"),a=t.length-1;a>=0;a--)if(/coreSnippet/.test(t[a].src||"")){e=t[a];break}if(e&&e.src)return new URL(e.src,location.href).origin}catch(e){}return"https://machfivemagnet-saas.onrender.com"}(),l=function(){var e={};try{var t=new URLSearchParams(location.search);["gclid","gbraid","wbraid","utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(a){var r=t.get(a);r&&(e[a]=r)})}catch(e){}try{var a=JSON.parse(sessionStorage.getItem("m5m_attr")||"{}");e=Object.assign({},a,e),Object.keys(e).length&&sessionStorage.setItem("m5m_attr",JSON.stringify(e))}catch(e){}return e}(),c=function(){try{var e=window.MachFiveMagnet;return e&&"object"==typeof e&&Array.isArray(e.instances)||(e={instances:[],open:function(t,a){var r=k(e.instances,t);if(r)try{r.open(a||null)}catch(e){_(e)}return!!r},close:function(t){var a=k(e.instances,t);if(a)try{a.close()}catch(e){}return!!a}},window.MachFiveMagnet=e),e}catch(e){return{instances:[]}}}(),d={attrs:["data-theme","data-mode","data-color-scheme"],dark:["dark","theme-dark"],light:["light","theme-light"]},p=[],u=null,h={manual:"none"},g={surface:"--m5-surface",surface_2:"--m5-surface-2",border:"--m5-border",text:"--m5-text",text_sub:"--m5-text-sub",meta:"--m5-meta",msg_bg:"--m5-msg-bg",bot_bg:"--m5-bot-bg",bot_border:"--m5-bot-border",radius:"--m5-radius",radius_msg:"--m5-radius-msg"},f={inter:"Inter:wght@400;500;600;700",roboto:"Roboto:wght@400;500;700",poppins:"Poppins:wght@400;500;600;700",montserrat:"Montserrat:wght@400;500;600;700",lato:"Lato:wght@400;700","open sans":"Open+Sans:wght@400;600;700",nunito:"Nunito:wght@400;600;700",raleway:"Raleway:wght@400;600;700","work sans":"Work+Sans:wght@400;500;600;700",oswald:"Oswald:wght@400;500;600;700",merriweather:"Merriweather:wght@400;700"},v={call:{icon:"phone",label:"Call"},email:{icon:"mail",label:"Email"},book:{icon:"event",label:"Book"},chat:{icon:"chat",label:"Chat"},support:{icon:"headset",label:"Support"}},b=[{label:"Sales enquiry",icon:"description"},{label:"Support",icon:"help"},{label:"Billing",icon:"description"},{label:"Something else",icon:"chat"}],x={chat:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',close:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',send:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',check:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',arrow:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',phone:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',mail:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',calendar:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'},y={event:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",schedule:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",mail:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",chat:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",sms:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",phone:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",description:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",help:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",place:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",person:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",bolt:"M7 2v11h3v9l7-12h-4l4-8z",check_circle:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",home:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",build:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",headset:"M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z",copy:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},w={calendar:"event",appointment:"event",book:"event",email:"mail",message:"chat",text:"sms",call:"phone",quote:"description",document:"description",question:"help",location:"place",clock:"schedule",quick:"bolt",check:"check_circle",services:"build",service:"build",support:"headset",support_agent:"headset",headset_mic:"headset"};r=function(){try{!function(){for(var e={},t=0;t<a.length;t++){var r=a[t],n=r&&r.mag_display_mode;n&&!e[n]&&(e[n]=!0,"chat"===n||"right_slide"===n||"modal"===n||"inline"===n?Y(r,n):_("display mode not yet supported: "+n))}}()}catch(e){_("boot failed",e)}},document.body?r():document.addEventListener("DOMContentLoaded",function(){r()})}function k(e,t){if(!Array.isArray(e)||!e.length)return null;if(null==t||""===t)return e[0];var a,r=String(t);for(a=0;a<e.length;a++)if(e[a]&&e[a].id===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].guid===r)return e[a];for(a=0;a<e.length;a++)if(e[a]&&e[a].mode===r)return e[a];return null}function _(){try{console.warn.apply(console,["[m5m]"].concat([].slice.call(arguments)))}catch(e){}}function S(e){var t=e&&e.mag_theme_sync&&"object"==typeof e.mag_theme_sync?e.mag_theme_sync:{},a=function(e){var a=Array.isArray(t[e])?t[e].filter(function(e){return"string"==typeof e&&e}):[];return d[e].concat(a)};return{attrs:a("attrs"),dark:a("dark"),light:a("light")}}function C(e){try{var t=document.documentElement;if(!t)return null;for(var a=0;a<e.attrs.length;a++){var r=t.getAttribute(e.attrs[a]);if(r){if("dark"===(r=String(r).trim().toLowerCase()))return"dark";if("light"===r)return"light"}}try{var n=(window.getComputedStyle(t).colorScheme||"").trim().toLowerCase();if(n&&"normal"!==n){var o=n.split(/\\s+/).filter(function(e){return"only"!==e});if(1===o.length&&"dark"===o[0])return"dark";if(1===o.length&&"light"===o[0])return"light"}}catch(e){}var i=t.classList;if(i){var m=e.dark.some(function(e){return i.contains(e)}),s=e.light.some(function(e){return i.contains(e)});if(m&&!s)return"dark";if(s&&!m)return"light"}}catch(e){}return null}function E(e){var t=C(e.cfg),a=e.el&&e.el.classList;return a?(a.toggle("m5m-dark","dark"===t),a.toggle("m5m-light","light"===t),t):t}function L(e,t){if(!e)return null;var a={el:e,cfg:S(t)};p.push(a);var r=E(a);if(!u&&"function"==typeof MutationObserver){u=new MutationObserver(function(){for(var e=0;e<p.length;e++)p[e].el&&!1!==p[e].el.isConnected&&E(p[e])});try{u.observe(document.documentElement,{attributes:!0})}catch(e){u=null}}return r}function z(e,t){try{if("function"==typeof CSSStyleSheet&&"adoptedStyleSheets"in e){var a=new CSSStyleSheet;if("function"==typeof a.replaceSync)return a.replaceSync(t),e.adoptedStyleSheets=[a],"adopted"}}catch(e){}var r=document.createElement("style");return r.textContent=t,e.prepend?e.prepend(r):e.appendChild(r),"style-element"}function M(e){return String(null==e?"":e).replace(/[&<>"']/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]})}function A(e){3===(e=String(e||"").trim().replace("#","")).length&&(e=e.split("").map(function(e){return e+e}).join("")),/^[0-9a-fA-F]{6}$/.test(e)||(e=o.replace("#",""));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}function N(e,t){return e.map(function(e){return Math.max(0,Math.min(255,Math.round(e*t)))})}function T(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function H(e,t){return"rgba("+e[0]+","+e[1]+","+e[2]+","+t+")"}function j(e){var t=e.map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return.2126*t[0]+.7152*t[1]+.0722*t[2]}function P(e){if(null==e)return"";var t=String(e).trim();return!t||t.length>40?"":/^\\d+(\\.\\d+)?$/.test(t)?t+"px":/^\\d+(\\.\\d+)?(px|rem|em|vh|vw|%)$/.test(t)||/^(min|max|clamp)\\(\\s*[\\d.\\s,a-z%()+*/-]+\\)$/i.test(t)?t:""}function O(e){if(!e)return null;try{var t=new URL(e,location.href).protocol;return/^(https?|mailto|tel):$/.test(t)?e:null}catch(e){return null}}function I(e){try{if(!e)return;var t=String(e).split(",")[0].trim().replace(/^["']+|["']+$/g,"").toLowerCase(),a=f[t];if(!a)return;var r="m5m-font-"+t.replace(/\\s+/g,"-");if(document.getElementById(r))return;var n=document.createElement("link");n.id=r,n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family="+a+"&display=swap",(document.head||document.documentElement).appendChild(n)}catch(e){}}function q(e,t){var a=[];try{var r=e.mag_theme_vars&&"object"==typeof e.mag_theme_vars?e.mag_theme_vars:{};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)&&g[n]){var o=String(r[n]).trim();o&&o.length<=60&&/^[#a-zA-Z0-9(),.%\\s/-]+$/.test(o)&&a.push(g[n]+":"+o)}if(e.mag_font){var i=String(e.mag_font).trim();i&&i.length<=120&&/^[a-zA-Z0-9'",\\s-]+$/.test(i)&&a.push("font-family:"+i)}}catch(e){}return a.length?".m5m-root.m5m-mode-"+t+"{"+a.join(";")+";}":""}function B(e){var t=[];return(Array.isArray(e)?e:[]).forEach(function(e){if(v[(e=e||{}).type]){var a="call"===e.type||"email"===e.type,r=null!=e.value?String(e.value).trim():"";a&&!r||t.push({type:e.type,label:null!=e.label&&String(e.label).trim()||v[e.type].label,value:r,config:e.config&&"object"==typeof e.config?e.config:{}})}}),t.slice(0,6)}function D(e){return e.length?'<div class="m5m-actionbar">'+e.map(function(e){return'<button type="button" class="m5m-action" data-m5m-act="'+M(e.type)+'">'+V(v[e.type].icon)+"<span>"+M(e.label)+"</span></button>"}).join("")+"</div>":""}function V(e){if(!e)return"";var t=String(e).trim().toLowerCase().replace(/[\\s-]+/g,"_");return w[t]&&(t=w[t]),y[t]?'<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+y[t]+'"></path></svg>':""}function Y(e,a){var r=null;try{var d=e&&e.mag_ab;if(d&&d.enabled&&d.b&&"object"==typeof d.b){var p="m5m_ab_"+t;try{r=localStorage.getItem(p)}catch(e){}if("A"!==r&&"B"!==r){var u="number"==typeof d.split?d.split:50;r=100*Math.random()<u?"B":"A";try{localStorage.setItem(p,r)}catch(e){}}"B"===r&&(e=Object.assign({},e,d.b))}}catch(e){r=null}var g,f,v=e,y=[],w={},k=0,E=0,Y={},F="",U=!1,$=a||"chat",G=[],J=!1,W=!1,X=!1,Z="",K=[],Q={},ee=[],te=!1,ae=0,re={},ne=-1,oe=!1,ie="m5m"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),me=!1,se=!1;function le(){if(!se){se=!0,_("Requests to "+s+" are being blocked by this page — captures and leads will silently fail until this is fixed. This is almost always the HOST PAGE'S own Content-Security-Policy (connect-src), not a bug in the widget: check this tab's Console for a line like \\"Content-Security-Policy: ... blocked ... connect-src ...\\". Fix: add "+s+' to connect-src (also confirm script-src and img-src) — the Magnets page in your MachFiveMagnet dashboard has a copy-paste-ready snippet under "Strict Content-Security-Policy on your site?".');try{(new Image).src=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/csp-ping"}catch(e){}}}function ce(e,a){try{var o=JSON.stringify({event:e,detail:a||null,mode:$,session:ie,variant:r}),i=s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/event";if(n)return void n(i,{method:"POST",headers:{"Content-Type":"application/json"},body:o,keepalive:!0}).catch(function(){le()});navigator.sendBeacon&&navigator.sendBeacon(i,o)}catch(e){}}function de(e){if(!me){me=!0,ce("engage",e);try{document.cookie="m5m_sid="+encodeURIComponent(ie)+"; max-age=1800; path=/; SameSite=Lax"}catch(e){}}}function pe(){return'<span class="m5m-ava-mark">'+x.chat+"</span>"+(F?'<img class="m5m-ava-img" src="'+M(F)+'" alt="">':"")}function ue(){return!(!Q.root||!Q.root.classList.contains("m5m-open"))}function he(e,t){var a=setTimeout(e,t);return ee.push(a),a}function ge(){ee.forEach(clearTimeout),ee=[],ae=0}function fe(e,t){return ae++,he(function(){ae--,e()},t)}function ve(){if(!ue()){Q.root.classList.add("m5m-open");try{Q.panel.focus()}catch(e){}if(!J)return J=!0,ce("open"),void Te();!te||X||W||xe()}}function be(){ae>0&&(te=!0),ge(),Q.root.classList.remove("m5m-open");try{Q.launcher.focus()}catch(e){}}function xe(){te=!1,function(){try{for(var e=Q.messages.querySelectorAll(".m5m-typing"),t=0;t<e.length;t++){var a=e[t].parentNode;a&&a.parentNode&&a.parentNode.removeChild(a)}}catch(e){}}(),Ne()}function ye(e){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function we(){G.push({idx:k,answers:ye(Y),emailOptOut:oe,messageCount:ne}),ke(G.length>1)}function ke(e){Q.backBtn&&Q.backBtn.classList.toggle("m5m-hidden",!e)}function _e(){Q.backBtn=g.querySelector(".m5m-back"),Q.backBtn&&Q.backBtn.addEventListener("click",function(){try{!function(){if(!(G.length<2||W||X)){G.pop();var e=G.pop();if(k=e.idx,Y=ye(e.answers),oe=!!e.emailOptOut,ge(),Q.messages)for(;Q.messages.children.length>e.messageCount;)Q.messages.removeChild(Q.messages.lastChild);Le(),Ne(!0)}}()}catch(e){_(e)}})}function Se(){try{c.instances.push({id:null!=v.mag_id&&""!==String(v.mag_id)?String(v.mag_id):null,guid:null!=v.mag_guid&&""!==String(v.mag_guid)?String(v.mag_guid):null,mode:$,launcher:"inline"!==$&&!0!==v.mag_hide_launcher,appGuid:t,open:function(e){try{!function(e){e=e&&"object"==typeof e?e:{};var t=J&&!X&&(!0===e.reset||W);t&&(ge(),Y={},re={},Z="",oe=!1,W=!1,X=!1,U=!1,k=0,E=0,te=!1,ne=-1,G=[],ke(!1),Q.messages&&(Q.messages.innerHTML=""),Le(),je(null),y=Array.isArray(v.mag_macro_steps)?v.mag_macro_steps:[],w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)})),function(e){if(e&&"object"==typeof e){var t=0;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t>=40)break;var r=e[a];if(null!=r&&""!==(r=String(r).slice(0,250))){var n=String(a).slice(0,60);Object.prototype.hasOwnProperty.call(Y,n)||(Y[n]=r,re[n]=!0,t++)}}}}(e.prefill),"inline"!==$?(ve(),t&&Te()):t?Te():!te||X||W||xe()}(e)}catch(e){_(e)}},close:function(){if("inline"!==$)try{be()}catch(e){}}})}catch(e){}}function Ce(){var e=Q.messages.lastElementChild;return!(!e||!e.classList.contains("m5m-row-bot"))}function Ee(){if("inline"===$&&ne>=0){var e=Q.messages.children[ne];if(e)return void(Q.messages.scrollTop=Math.max(0,e.getBoundingClientRect().top-Q.messages.getBoundingClientRect().top+Q.messages.scrollTop-8))}Q.messages.scrollTop=Q.messages.scrollHeight}function Le(){Q.input.innerHTML=""}function ze(e){ne=-1;var t=document.createElement("div");t.className="m5m-row m5m-row-user";var a=document.createElement("div");a.className="m5m-msg m5m-user",a.textContent=e,t.appendChild(a),Q.messages.appendChild(t),Ee()}function Me(){var e=Ce(),t=document.createElement("div");t.className="m5m-row m5m-row-bot"+(e?" m5m-grouped":""),t.setAttribute("aria-hidden","true");var a=document.createElement("span");a.className="m5m-msg-ava",e||(a.innerHTML=pe());var r=document.createElement("div");return r.className="m5m-typing",r.innerHTML="<span></span><span></span><span></span>",t.appendChild(a),t.appendChild(r),Q.messages.appendChild(t),Ee(),t}function Ae(e,t){var a=(Array.isArray(e)?e:[]).filter(function(e){return null!=e&&""!==String(e)}),r=0;!function e(){ue()?r>=a.length?t():function(e,t){if(e){var a=Me();fe(function(){a.parentNode&&a.parentNode.removeChild(a),function(e){var t=Ce(),a=document.createElement("div");a.className="m5m-row m5m-row-bot"+(t?" m5m-grouped":"");var r=document.createElement("span");r.className="m5m-msg-ava",t||(r.innerHTML=pe());var n=document.createElement("div");n.className="m5m-msg m5m-bot",n.innerHTML=M(e);var o=document.createElement("div");o.className="m5m-col",o.appendChild(n);var i=document.createElement("span");i.className="m5m-time",i.setAttribute("aria-hidden","true"),i.textContent=function(){try{return(new Date).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}catch(e){return""}}(),o.appendChild(i),a.appendChild(r),a.appendChild(o),Q.messages.appendChild(a),Ee()}(e),t&&t()},550)}else t&&t()}(a[r++],e):te=!0}()}function Ne(e){if(ue()){if(te=!1,ne=Q.messages?Q.messages.children.length:-1,!e&&++E>100)return _("step guard tripped — ending flow"),void Ue();if(k<0||k>=y.length)return ke(!1),void(v&&v.mag_summary&&!U&&Fe().length?(U=!0,function(){Le();var e=v&&v.mag_summary_heading||"Here’s what we’ve got",t=v&&v.mag_summary_confirm_label||"Confirm & send",a=Fe().map(function(e){return'<div class="m5m-sum-row"><span class="m5m-sum-label">'+M((t=e,(t=String(t).replace(/_/g," ").trim())?t.charAt(0).toUpperCase()+t.slice(1):t))+'</span><span class="m5m-sum-val">'+M(Y[e])+"</span></div>";var t}).join(""),r=document.createElement("div");r.className="m5m-summary",r.innerHTML='<div class="m5m-sum-head" role="heading" aria-level="2">'+M(e)+'</div><div class="m5m-sum-rows">'+a+'</div><button type="button" class="m5m-sum-confirm">'+M(t)+"</button>",Q.messages.appendChild(r),Ee();var n=r.querySelector(".m5m-sum-confirm");n.addEventListener("click",function(){n.disabled=!0,Ue()}),n.focus()}()):Ue());var t=y[k]||{},a=t.step_type,r=t.step_config&&"object"==typeof t.step_config?t.step_config:{};if(r.skip_if_prefilled&&function(e){var t=Array.isArray(e.step_columns)?e.step_columns:[];if(!t.length)return!1;for(var a=0;a<t.length;a++){var r=Y[String(t[a])];if(null==r||""===r)return!1}return!0}(t))Re("");else{if(ce("step",k+1+"/"+y.length),"message"===a)return r.terminal?(we(),void Ae(t.step_prompts,function(){!function(e){Le();var t=e&&e.cta&&"object"==typeof e.cta?e.cta:null,a=t?O(t.url):null,r=t&&null!=t.label?String(t.label):"";if(a&&r){var n=document.createElement("div");n.className="m5m-terminal",n.innerHTML='<a class="m5m-terminal-cta" href="'+M(a)+'" target="_blank" rel="noopener noreferrer">'+M(r)+"</a>",Q.messages.appendChild(n),Ee()}}(r)})):void Ae(t.step_prompts,function(){Re("")});we(),Ae(t.step_prompts,function(){"single_select"===a?function(e){Le();var t="inline"===$,a=document.createElement("div");a.className="m5m-choices"+(t?" m5m-tiles":"");var r=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});r.length?(r.forEach(function(r){var n=String(r.label),o=V(r.icon),i=r.description?String(r.description):"",m=document.createElement("button");m.type="button",m.className="m5m-choice",m.innerHTML=(o?'<span class="m5m-choice-icon">'+o+"</span>":"")+'<span class="m5m-choice-body"><span class="m5m-choice-label">'+M(n)+"</span>"+(i?'<span class="m5m-choice-desc">'+M(i)+"</span>":"")+'</span><span class="m5m-choice-arrow">'+x.arrow+"</span>",m.addEventListener("click",function(){de("choice"),Ye(e,n),t&&a.parentNode&&a.remove(),ze(n),Le(),fe(function(){Re(r.goto?String(r.goto):"")},260)}),a.appendChild(m)}),(t?Q.messages:Q.input).appendChild(a),Ee()):Re("")}(t):"multi_select"===a?function(e){Le();var t=(Array.isArray(e.step_options)?e.step_options:[]).filter(function(e){return e&&""!==String(null!=e.label?e.label:"")});if(t.length){var a=document.createElement("div");a.className="m5m-multi";var r={},n=document.createElement("button");t.forEach(function(e){var t=String(e.label),o=V(e.icon),i=document.createElement("button");i.type="button",i.className="m5m-mopt",i.innerHTML=(o?'<span class="m5m-mopt-icon">'+o+"</span>":"")+'<span class="m5m-mopt-label">'+M(t)+'</span><span class="m5m-mopt-check">'+x.check+"</span>",i.addEventListener("click",function(){var e=!r[t];r[t]=e,i.classList.toggle("m5m-mopt-on",e),function(){var e=!1;for(var t in r)if(r[t]){e=!0;break}n.disabled=!e}()}),a.appendChild(i)}),n.type="button",n.className="m5m-multi-cont",n.textContent="Continue",n.disabled=!0,n.addEventListener("click",function(){var t=[];for(var n in r)r[n]&&t.push(n);if(t.length){de("multi_select");var o=t.join(", ");Ye(e,o),a.parentNode&&a.remove(),ze(o),Le(),fe(function(){Re("")},260)}}),a.appendChild(n),Q.messages.appendChild(a),Ee()}else Re("")}(t):"scheduler"===a?function(e){if(Le(),!Array.isArray(e.step_columns)||!e.step_columns.length)return _("scheduler step has no Saves-to field configured — skipping"),void Re("");var t=e&&e.step_config||{},a=t.meeting_label||"",r=Ve(t.start||"09:00"),n=Ve(t.end||"17:00"),o=t.mins||30,i=Math.max(1,Math.min(60,t.days||14)),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=new Date;l.setHours(0,0,0,0);for(var c=[],d=0;d<i;d++)c.push(new Date(l.getTime()+864e5*d));for(var p=[],u=r;u<n;u+=o)p.push(u);var h=0,g=null,f=function(e){var t=Math.floor(e/60),a=e%60,r=t%12;return 0===r&&(r=12),r+":"+(a<10?"0"+a:a)+" "+(t>=12?"PM":"AM")},v=document.createElement("div");v.className="m5m-sched";var b=function(){var e=c.map(function(e,t){return'<button type="button" class="m5m-sd-day'+(t===h?" m5m-sd-on":"")+'" data-d="'+t+'"><span class="m5m-sd-dow">'+m[e.getDay()]+'</span><span class="m5m-sd-num">'+e.getDate()+'</span><span class="m5m-sd-mon">'+s[e.getMonth()]+"</span></button>"}).join(""),t=p.map(function(e){return'<button type="button" class="m5m-sd-slot'+(g===e?" m5m-sd-on":"")+'" data-t="'+e+'">'+f(e)+"</button>"}).join("");v.innerHTML=(a?'<div class="m5m-sd-meta">'+V("schedule")+"<span>"+M(a)+"</span></div>":"")+'<div class="m5m-sd-days">'+e+'</div><div class="m5m-sd-slots">'+t+'</div><button type="button" class="m5m-sd-confirm"'+(null===g?" disabled":"")+">Confirm time</button>"};b(),v.addEventListener("click",function(t){var a=t.target.closest(".m5m-sd-day");if(a)return h=parseInt(a.getAttribute("data-d"),10)||0,g=null,void b();var r=t.target.closest(".m5m-sd-slot");if(r)return g=parseInt(r.getAttribute("data-t"),10),void b();if(t.target.closest(".m5m-sd-confirm")){if(null===g)return;de("scheduler");var n=c[h],o=m[n.getDay()]+" "+s[n.getMonth()]+" "+n.getDate()+", "+f(g);try{Z=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(t){Z=""}Ye(e,o),v.parentNode&&v.remove(),ze(o),Le(),fe(function(){Re("")},260)}}),Q.messages.appendChild(v),Ee()}(t):function(e){if(Le(),!Array.isArray(e.step_columns)||!e.step_columns.length)return _("input step has no Saves-to field configured — skipping"),void Re("");var t=e.step_type,a=e.step_config&&"object"==typeof e.step_config?e.step_config:{},r=document.createElement("form");r.className="m5m-form";var n=document.createElement("input");n.type="email"===t?"email":"phone"===t?"tel":"text",n.placeholder=null!=a.placeholder&&""!==String(a.placeholder)?String(a.placeholder):v&&v.mag_input_placeholder||"Type your answer…",n.autocomplete="email"===t?"email":"phone"===t?"tel":"off",n.required=!0;var o=document.createElement("button");if(o.type="submit",o.className="m5m-send",o.setAttribute("aria-label","Send"),o.innerHTML=x.send,r.appendChild(n),r.appendChild(o),r.addEventListener("submit",function(a){a.preventDefault();var r=(n.value||"").trim();!r||"email"===t&&n.validity&&!n.validity.valid?n.focus():(de("input"),Ye(e,r),ze(r),Le(),fe(function(){Re("")},260))}),Q.input.appendChild(r),"email"===t){var i=document.createElement("label");i.className="m5m-optout";var m=document.createElement("input");m.type="checkbox",m.checked=oe,m.addEventListener("change",function(){oe=m.checked});var s=document.createElement("span");s.textContent="Don’t email me updates",i.appendChild(m),i.appendChild(s),Q.input.appendChild(i)}if(a.optional){var l=document.createElement("button");l.type="button",l.className="m5m-skip",l.textContent=null!=a.skip_label&&""!==String(a.skip_label)?String(a.skip_label):"Skip",l.addEventListener("click",function(){de("skip"),Le(),fe(function(){Re("")},120)}),Q.input.appendChild(l)}n.focus(),Ee()}(t)})}}}function Te(){v&&v.mag_home&&K.length>0?function(){Q.messages&&(Q.messages.innerHTML=""),Le(),je(null),ke(!1);var e=null!=v.mag_welcome?String(v.mag_welcome):"",t=v.mag_home_title||v.mag_title||"How can we help?",a=document.createElement("div");a.className="m5m-home",a.innerHTML='<div class="m5m-home-ava">'+pe()+"</div>"+("inline"===$?"":'<div class="m5m-home-title" role="heading" aria-level="2">'+M(t)+"</div>")+(e?'<div class="m5m-home-text">'+M(e)+"</div>":"")+'<div class="m5m-home-hint">'+V("bolt")+"<span>Choose an option below to get started.</span></div>",Q.messages.appendChild(a),Ee()}():(k=0,E=0,Ne())}function He(){Q.actionbar&&Q.actionbar.addEventListener("click",function(e){var a=e.target.closest?e.target.closest("[data-m5m-act]"):null;if(a)try{!function(e){for(var a=null,r=0;r<K.length;r++)if(K[r].type===e){a=K[r];break}if(a)if(ce("route",e),de(e),ge(),je(e),ke(!1),"call"!==e&&"email"!==e)if("book"===e&&a.config&&"calendly"===a.config.source&&function(e){try{var t=new URL(e);return"https:"===t.protocol&&("calendly.com"===t.hostname||/\\.calendly\\.com$/.test(t.hostname))}catch(e){return!1}}(a.config.calendly_url))!function(e){var a;try{a=new URL(e.config.calendly_url)}catch(e){return void qe(Be("book",{type:"book",config:{}}))}a.searchParams.set("embed_domain",location.hostname||"localhost"),a.searchParams.set("embed_type","Inline"),a.searchParams.set("hide_gdpr_banner","1"),a.searchParams.set("utm_source","machfivemagnet"),a.searchParams.set("utm_content",t),a.searchParams.set("salesforce_uuid",ie);var r=Pe(["email","email_address","work_email"]),n=Pe(["name","full_name"]);n||(n=[Pe(["first_name","firstname"]),Pe(["last_name","lastname"])].filter(function(e){return e}).join(" ")),n&&a.searchParams.set("name",n.slice(0,100)),r&&a.searchParams.set("email",r.slice(0,100)),Q.messages&&(Q.messages.innerHTML=""),Le();var o=document.createElement("div");o.className="m5m-cal";var i=document.createElement("iframe");i.className="m5m-cal-frame",i.src=a.toString(),i.title=e.config.event_name||"Schedule a meeting",o.appendChild(i),Q.messages.appendChild(o),Ee(),function(e){Oe=e,Ie||(Ie=!0,window.addEventListener("message",function(e){try{var t="";try{t=new URL(e.origin).hostname}catch(e){return}if("calendly.com"!==t&&!/\\.calendly\\.com$/.test(t))return;if(!e.data||"calendly.event_scheduled"!==e.data.event)return;if(!Oe||!Oe.isConnected)return;if(Oe.querySelector(".m5m-cal-done"))return;var a=document.createElement("div");a.className="m5m-cal-done",a.textContent="You are booked. A confirmation email is on the way.",Oe.appendChild(a),Ee()}catch(e){}}))}(o)}(a);else if("book"===e&&function(e){try{return/^https?:$/.test(new URL(e).protocol)}catch(e){return!1}}(a.value))try{window.open(a.value,"_blank","noopener")}catch(e){}else Y={},U=!1,W=!1,X=!1,Z="",qe(Be(e,a));else!function(e,t){Q.messages&&(Q.messages.innerHTML=""),Le();var a=t&&t.value?String(t.value):"",r="call"===e,n=O(r?"tel:"+a.replace(/[^\\d+]/g,""):"mailto:"+a),o=document.createElement("div");o.className="m5m-reveal",o.innerHTML='<div class="m5m-reveal-icon">'+V(r?"phone":"mail")+'</div><div class="m5m-reveal-title" role="heading" aria-level="2">'+(r?"Call us":"Email us")+"</div>"+(n?'<a class="m5m-reveal-val" href="'+M(n)+'"'+(r?"":' target="_blank" rel="noopener noreferrer"')+">"+M(a)+"</a>":'<div class="m5m-reveal-val">'+M(a)+"</div>")+'<button type="button" class="m5m-reveal-copy">'+V("copy")+"<span>Copy</span></button>",Q.messages.appendChild(o);var i=o.querySelector(".m5m-reveal-copy");if(i&&i.addEventListener("click",function(){var e=o.querySelector(".m5m-reveal-val");!function(e,t){var a=function(){var e=t&&t.querySelector("span");if(e){var a=e.textContent;e.textContent="Copied",he(function(){e&&(e.textContent=a)},1400)}};try{if(navigator.clipboard&&navigator.clipboard.writeText)return void navigator.clipboard.writeText(e).then(a,function(){De(e),a()})}catch(e){}De(e),a()}((e&&e.textContent?e.textContent.replace(/^\\s+|\\s+$/g,""):"")||a,i)}),Ee(),r&&f)try{window.CallTrk&&"function"==typeof window.CallTrk.swap&&window.CallTrk.swap(f)}catch(e){}}(e,a)}(a.getAttribute("data-m5m-act"))}catch(e){_(e)}})}function je(e){if(Q.actionbar)for(var t=Q.actionbar.querySelectorAll("[data-m5m-act]"),a=0;a<t.length;a++)t[a].classList.toggle("m5m-act-on",t[a].getAttribute("data-m5m-act")===e)}function Pe(e){for(var t in Y)if(Object.prototype.hasOwnProperty.call(Y,t)&&-1!==e.indexOf(String(t).toLowerCase())&&String(Y[t]||"").trim())return String(Y[t]).trim();return""}var Oe=null,Ie=!1;function qe(e){y=Array.isArray(e)?e.slice():[],w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)}),Q.messages&&(Q.messages.innerHTML=""),Le(),k=0,E=0,y.length?Ne():_("route has no steps")}function Be(e,t){var a=v&&v.mag_routes||{},r=function(e){return Array.isArray(e)&&e.length?e:null};return"chat"===e?r(a.chat)||(Array.isArray(v.mag_macro_steps)?v.mag_macro_steps:[]):"book"===e?r(a.book)||function(e){var t=e&&e.config||{};return[{id:"m5m_book",step_type:"scheduler",step_options:[],step_columns:[t.column||"preferred_time"],step_prompts:[t.heading||"When works best for you?"],step_config:{meeting_label:t.meeting_label||"",start:t.start||"09:00",end:t.end||"17:00",mins:t.mins||30,days:t.days||14}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):"support"===e?r(a.support)||function(e){var t=e&&e.config||{};return[{id:"m5m_support",step_type:"multi_select",step_options:(Array.isArray(t.options)&&t.options.length?t.options:b).map(function(e){return e&&"object"==typeof e?{label:String(e.label||""),icon:e.icon||""}:{label:String(e),icon:""}}).filter(function(e){return""!==e.label}),step_columns:t.column?[t.column]:[],step_prompts:[t.heading||"How can we help you today?"],step_description:"Select all that apply",step_config:{}}].concat([{id:"m5m_name",step_type:"text",step_columns:["first_name"],step_options:[],step_prompts:["Great, and your name?"],step_description:""},{id:"m5m_email",step_type:"email",step_columns:["email"],step_options:[],step_prompts:["The best email to reach you?"],step_description:""}])}(t):[]}function De(e){try{var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",(g||document.body).appendChild(t),t.focus(),t.select(),document.execCommand("copy"),t.parentNode&&t.parentNode.removeChild(t)}catch(e){}}function Ve(e){var t=String(e).split(":");return 60*(parseInt(t[0],10)||0)+(parseInt(t[1],10)||0)}function Ye(e,t){(Array.isArray(e.step_columns)?e.step_columns:[]).forEach(function(e){e&&(Y[String(e)]=t,delete re[String(e)])})}function Re(e){if(e){if(!Object.prototype.hasOwnProperty.call(w,e))return _("goto target not found: "+e),void Ue();k=w[e]}else k+=1;Ne()}function Fe(){return Object.keys(Y).filter(function(e){return!re[e]})}function Ue(){if(ue()&&(Le(),!W&&!X))if(n){X=!0;var e=Me(),a={"Content-Type":"application/json"},o="";try{o=window.localStorage&&window.localStorage.getItem("m5m_test_token")||""}catch(e){}o&&(a.Authorization="Bearer "+o,a["X-M5M-Test-Mode"]="1"),n(s+"/m5t/v5/magnet/"+encodeURIComponent(t)+"/capture",{method:"POST",headers:a,body:JSON.stringify({fields:Y,attribution:l,session:ie,mode:$,variant:r,scheduler_tz:Z||void 0,email_opt_out:oe}),keepalive:!0}).then(function(e){if(!e.ok)throw new Error("capture HTTP "+e.status);return e.json().catch(function(){return{}})}).then(function(){W=!0,X=!1,e.parentNode&&e.parentNode.removeChild(e),ue()&&function(){Le();var e=v&&v.mag_success_title||"You’re all set!",t=v&&null!=v.mag_success_text?String(v.mag_success_text):"Thanks! We’ve got your details and someone will be in touch shortly.",a=v&&v.mag_success_cta&&"object"==typeof v.mag_success_cta?v.mag_success_cta:null,r=a?O(a.url):null,n=a&&null!=a.label?String(a.label):"",o=document.createElement("div");o.className="m5m-success";var i="inline"===$;o.innerHTML='<div class="m5m-success-icon">'+x.check+'</div><div class="m5m-success-title" role="heading" aria-level="2">'+M(e)+"</div>"+(t?'<div class="m5m-success-text">'+M(t)+"</div>":"")+(r&&n?'<a class="m5m-success-link" href="'+M(r)+'" target="_blank" rel="noopener noreferrer">'+M(n)+"</a>":"")+(i?"":'<button type="button" class="m5m-success-cta">Close</button>'),Q.messages.appendChild(o),Ee();var m=o.querySelector(".m5m-success-link"),s=o.querySelector(".m5m-success-cta");s&&s.addEventListener("click",be),m?m.focus():s&&s.focus()}()}).catch(function(t){X=!1,e.parentNode&&e.parentNode.removeChild(e),_("capture failed",t),t instanceof TypeError&&le(),ue()&&$e()})}else $e()}function $e(){Q.input.innerHTML='<div class="m5m-error"><div class="m5m-error-text">Something went wrong sending your details.</div><button type="button" class="m5m-retry">Try again</button></div>';var e=Q.input.querySelector(".m5m-retry");e.addEventListener("click",function(){Le(),X=!1,Ue()}),e.focus()}"inline"===$?function(){if(document.body&&!document.getElementById("m5m-magnet-inline")){var t=function(){try{var e=document.querySelector("[data-m5m-inline], #m5m-inline");if(e)return e;for(var t=null,a=document.getElementsByTagName("script"),r=a.length-1;r>=0;r--)if(/coreSnippet/.test(a[r].src||"")){t=a[r];break}if(t&&t.parentNode){var n=document.createElement("div");return t.parentNode.insertBefore(n,t.nextSibling),n}}catch(e){}return null}();if(t)if(y=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],K=B(e.mag_actions),y.length||e.mag_home&&K.length){w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)});var a=e.mag_theme_color||o,r=e.mag_title||i,n=null!=e.mag_subtitle?String(e.mag_subtitle):m,s=e.mag_theme_mode,l="sync"===s?C(S(e)):null,c="dark"===s||"dark"===l?"m5m-dark":"light"===s||"light"===l?"m5m-light":"";I(e.mag_font),F=e.mag_logo_url||"";var d=D(K),p=A(a),u=j(p)>.55,h=T(N(p,u?.6:.78));(f=document.createElement("div")).id="m5m-magnet-inline",f.style.setProperty("--m5-brand",T(p)),f.style.setProperty("--m5-brand-2",h),f.style.setProperty("--m5-brand-soft",H(p,.12)),f.style.setProperty("--m5-brand-glow",H(p,.34)),f.style.setProperty("--m5-brand-ring",H(p,.38)),f.style.setProperty("--m5-on-brand",u?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover");var v=P(e.mag_inline_width),b=P(e.mag_inline_height);v&&f.style.setProperty("--m5-inline-w",v),b&&f.style.setProperty("--m5-inline-h",b),t.appendChild(f),(g=f.attachShadow({mode:"open"})).innerHTML='<div class="m5m-root m5m-mode-inline m5m-open'+(c?" "+c:"")+'"><section class="m5m-inline-card" aria-label="'+M(r)+'"><header class="m5m-header"><button class="m5m-back m5m-hidden" type="button" aria-label="Back to the previous question">'+x.arrow+'</button><span class="m5m-ava">'+pe()+'</span><span class="m5m-head-text"><span class="m5m-title">'+M(r)+"</span>"+(n?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+M(n)+"</span>":"")+'</span></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+d+"</section></div>",z(g,R()+q(e,$)),Q.root=g.querySelector(".m5m-root"),"sync"===s&&L(Q.root,e),Q.panel=g.querySelector(".m5m-inline-card"),Q.messages=g.querySelector(".m5m-messages"),Q.input=g.querySelector(".m5m-input"),Q.actionbar=g.querySelector(".m5m-actionbar"),He(),_e(),g.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),g.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),J=!0,ce("open"),Te(),Se()}else _("magnet has no steps");else _("inline magnet: no mount target — add <div data-m5m-inline></div> where it should appear")}}():function(){if(document.body){var a="m5m-magnet-"+$;if(!document.getElementById(a))if(y=Array.isArray(e.mag_macro_steps)?e.mag_macro_steps:[],K=B(e.mag_actions),y.length||e.mag_home&&K.length){w={},y.forEach(function(e,t){e&&null!=e.id&&(w[String(e.id)]=t)});var r=e.mag_theme_color||o,n=e.mag_title||i,s=null!=e.mag_subtitle?String(e.mag_subtitle):m,l=e.mag_launcher_label||n,d=e.mag_theme_mode,p="sync"===d?C(S(e)):null,u="dark"===d||"dark"===p?"m5m-dark":"light"===d||"light"===p?"m5m-light":"";!0===e.mag_hide_launcher&&(u+=(u?" ":"")+"m5m-no-launcher");var v=0;if(!0!==e.mag_hide_launcher)try{v=c.instances.filter(function(e){return e&&e.launcher}).length}catch(e){}I(e.mag_font),F=e.mag_logo_url||"";var b=D(K),k=A(r),E=j(k)>.55,P=T(N(k,E?.6:.78));(f=document.createElement("div")).id=a,f.style.setProperty("--m5-brand",T(k)),f.style.setProperty("--m5-brand-2",P),f.style.setProperty("--m5-brand-soft",H(k,.12)),f.style.setProperty("--m5-brand-glow",H(k,.34)),f.style.setProperty("--m5-brand-ring",H(k,.38)),f.style.setProperty("--m5-on-brand",E?"#16243a":"#ffffff"),f.style.setProperty("--m5-logo-fit","contain"===e.mag_logo_fit?"contain":"cover"),v>0&&f.style.setProperty("--m5-launcher-bottom",20+74*v+"px"),document.body.appendChild(f),(g=f.attachShadow({mode:"open"})).innerHTML='<div class="m5m-root m5m-mode-'+$+(u?" "+u:"")+'"><div class="m5m-scrim"></div><button class="m5m-launcher" type="button" aria-label="Open '+M(n)+'"><span class="m5m-launcher-ava">'+x.chat+'</span><span class="m5m-launcher-label">'+M(l)+'</span></button><section class="m5m-panel" role="dialog" aria-modal="'+("modal"===$?"true":"false")+'" tabindex="-1" aria-label="'+M(n)+'"><header class="m5m-header"><button class="m5m-back m5m-hidden" type="button" aria-label="Back to the previous question">'+x.arrow+'</button><span class="m5m-ava">'+pe()+'</span><span class="m5m-head-text"><span class="m5m-title">'+M(n)+"</span>"+(s?'<span class="m5m-subtitle"><i class="m5m-online"></i>'+M(s)+"</span>":"")+'</span><button class="m5m-close" type="button" aria-label="Close '+M(n)+'">'+x.close+'</button></header><div class="m5m-messages" aria-live="polite"></div><div class="m5m-input"></div>'+b+"</section></div>",z(g,R()+q(e,$)),Q.root=g.querySelector(".m5m-root"),"sync"===d&&L(Q.root,e),Q.launcher=g.querySelector(".m5m-launcher"),Q.panel=g.querySelector(".m5m-panel"),Q.messages=g.querySelector(".m5m-messages"),Q.input=g.querySelector(".m5m-input"),Q.actionbar=g.querySelector(".m5m-actionbar"),He(),_e(),Q.launcher.addEventListener("click",function(){try{ve()}catch(e){_(e)}}),g.querySelector(".m5m-close").addEventListener("click",function(){try{be()}catch(e){}}),g.querySelector(".m5m-scrim").addEventListener("click",function(){try{be()}catch(e){}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&ue()&&be()}),g.addEventListener("keydown",function(e){if("Tab"===e.key&&"modal"===$&&ue()){var t=function(){try{var e=Q.panel.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(e)}catch(e){return[]}}();if(t.length){var a=t[0],r=t[t.length-1],n=g.activeElement;e.shiftKey?n!==a&&-1!==t.indexOf(n)||(e.preventDefault(),r.focus()):n!==r&&-1!==t.indexOf(n)||(e.preventDefault(),a.focus())}}}),g.addEventListener("error",function(e){var t=e.target;t&&t.classList&&t.classList.contains("m5m-ava-img")&&(t.style.display="none")},!0),g.addEventListener("load",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("m5m-ava-img")){var a=t.parentNode&&t.parentNode.querySelector(".m5m-ava-mark");a&&(a.style.display="none")}},!0),function(e){var a="m5m_auto_opened_"+t;try{if("1"===sessionStorage.getItem(a))return}catch(e){}function r(){if(!J){try{sessionStorage.setItem(a,"1")}catch(e){}try{ve()}catch(e){}}}try{if("on_load"===e)he(r,500);else if("on_8_seconds"===e)he(r,8e3);else if("on_scroll_80_percent"===e){var n=function(){try{var e=window.pageYOffset||document.documentElement.scrollTop||0,t=document.documentElement.scrollHeight-window.innerHeight;t>0&&e/t>=.8&&(window.removeEventListener("scroll",n),r())}catch(e){}};window.addEventListener("scroll",n,{passive:!0})}else if("on_exit_intent"===e){var o=function(e){(null==e.clientY||e.clientY<=0)&&!J&&(document.removeEventListener("mouseout",o),r())};document.addEventListener("mouseout",o)}}catch(e){}}((O=e.mag_trigger,V=O,O&&"object"==typeof O&&!Array.isArray(O)&&(V=function(){try{return window.matchMedia?window.matchMedia("(max-width: 480px)").matches:(window.innerWidth||document.documentElement.clientWidth||0)<=480}catch(e){return!1}}()?O.mobile:O.desktop),"string"!=typeof V?"none":(V=V.trim(),h[V]||V))),Se()}else _("magnet has no steps")}var O,V}()}function R(){var e="--m5-surface:#0F2435;--m5-surface-2:#17334A;--m5-border:#2a4a66;--m5-text:#E8F0F7;--m5-text-sub:#8FA8C0;--m5-meta:#9ab0c6;--m5-danger:#F87171;--m5-msg-bg:#0c1c2b;--m5-bot-bg:#17334A;--m5-bot-border:#23425e;--m5-shadow-launcher:0 8px 24px rgba(0,0,0,.5);--m5-shadow-panel:0 24px 60px rgba(0,0,0,.55),0 6px 16px rgba(0,0,0,.40);";return[":host{all:initial;}","[hidden]{display:none!important;}",".m5m-root{all:initial;","--m5-surface:#ffffff;--m5-surface-2:#f1f5f9;--m5-border:#e6ebf2;","--m5-text:#16243a;--m5-text-sub:#64748b;--m5-meta:#5b6b7f;--m5-danger:#DC2626;","--m5-msg-bg:#eef2f7;--m5-bot-bg:#ffffff;--m5-bot-border:#dde5ef;","--m5-shadow-launcher:0 8px 24px rgba(15,23,42,.20);","--m5-shadow-panel:0 24px 60px rgba(15,23,42,.22),0 6px 16px rgba(15,23,42,.10);","--m5-radius:18px;--m5-radius-msg:16px;--m5-radius-pill:999px;--m5-ease:cubic-bezier(.4,0,.2,1);",'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.45;}',".m5m-root *{box-sizing:border-box;}","@media (prefers-color-scheme: dark){.m5m-root:not(.m5m-light){"+e+"}}",".m5m-root.m5m-dark{"+e+"}",".m5m-launcher{position:fixed;bottom:var(--m5-launcher-bottom,20px);right:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);height:58px;padding:0 22px 0 16px;","border-radius:var(--m5-radius-pill);box-shadow:var(--m5-shadow-launcher),0 0 0 0 var(--m5-brand-glow);","transition:transform .22s var(--m5-ease),box-shadow .22s var(--m5-ease),opacity .2s var(--m5-ease);}",".m5m-launcher:hover{transform:translateY(-2px);box-shadow:var(--m5-shadow-launcher),0 10px 30px var(--m5-brand-glow);}",".m5m-launcher:active{transform:translateY(0);}",".m5m-launcher-ava{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(127,127,127,.18);color:var(--m5-on-brand);}",".m5m-launcher-ava svg{width:20px;height:20px;}",".m5m-launcher-label{font-size:15px;font-weight:650;letter-spacing:.1px;white-space:nowrap;}",".m5m-open .m5m-launcher{opacity:0;transform:translateY(8px) scale(.9);pointer-events:none;}",".m5m-panel{position:fixed;bottom:20px;right:20px;z-index:2147483000;width:374px;max-width:calc(100vw - 32px);","height:560px;max-height:calc(100vh - 40px);background:var(--m5-surface);border-radius:var(--m5-radius);","box-shadow:var(--m5-shadow-panel);display:flex;flex-direction:column;overflow:hidden;outline:none;","opacity:0;visibility:hidden;transform:translateY(14px) scale(.97);transform-origin:bottom right;pointer-events:none;","transition:opacity .26s var(--m5-ease),transform .26s var(--m5-ease),visibility 0s linear .26s;}",".m5m-open .m5m-panel{opacity:1;visibility:visible;transform:none;pointer-events:auto;transition:opacity .28s var(--m5-ease),transform .28s var(--m5-ease);}",".m5m-mode-right_slide .m5m-panel{top:0;bottom:0;right:0;height:100%;max-height:100%;width:400px;max-width:100vw;border-radius:0;transform:translateX(28px);}",".m5m-mode-right_slide.m5m-open .m5m-panel{transform:none;}",".m5m-mode-modal .m5m-panel{top:50%;left:50%;right:auto;bottom:auto;transform:translate(-50%,-46%) scale(.97);width:400px;max-width:calc(100vw - 24px);height:min(600px,86vh);transform-origin:center;}",".m5m-mode-modal.m5m-open .m5m-panel{transform:translate(-50%,-50%);}",".m5m-scrim{position:fixed;inset:0;z-index:2147482999;background:rgba(11,18,32,.5);opacity:0;visibility:hidden;transition:opacity .25s var(--m5-ease),visibility 0s linear .25s;}",".m5m-mode-modal.m5m-open .m5m-scrim{opacity:1;visibility:visible;transition:opacity .25s var(--m5-ease);}",".m5m-mode-inline{display:block;width:100%;}",".m5m-inline-card{display:flex;flex-direction:column;width:100%;max-width:var(--m5-inline-w,640px);margin:0 auto;height:var(--m5-inline-h,min(520px,80vh));","background:var(--m5-surface);border:1px solid var(--m5-border);border-radius:var(--m5-radius);box-shadow:0 6px 24px rgba(15,23,42,.08);overflow:hidden;}",".m5m-mode-inline .m5m-header{position:relative;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:24px 22px 18px;background:var(--m5-surface);color:var(--m5-text);border-bottom:1px solid var(--m5-border);}",".m5m-mode-inline .m5m-back{position:absolute;top:10px;left:10px;}",".m5m-mode-inline .m5m-ava{width:54px;height:54px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mode-inline .m5m-ava svg{width:28px;height:28px;}",".m5m-mode-inline .m5m-head-text{align-items:center;}",".m5m-mode-inline .m5m-title{font-size:20px;font-weight:700;line-height:1.28;}",".m5m-mode-inline .m5m-subtitle{color:var(--m5-text-sub);opacity:1;justify-content:center;}",".m5m-mode-inline .m5m-messages{padding:18px 18px 10px;}",".m5m-choices.m5m-tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;}",".m5m-tiles .m5m-choice:last-child:nth-child(odd){grid-column:1 / -1;}",".m5m-tiles .m5m-choice{flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:10px;min-height:84px;padding:14px 16px;border:0;","background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:hover{transform:translateY(-2px);border:0;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 24px var(--m5-brand-glow);}",".m5m-tiles .m5m-choice:active{transform:translateY(0) scale(.99);}",".m5m-tiles .m5m-choice-icon{width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.22);color:var(--m5-on-brand);}",".m5m-tiles .m5m-choice-icon svg{width:22px;height:22px;}",".m5m-tiles .m5m-choice-body{flex:1 1 auto;}",".m5m-tiles .m5m-choice-label{font-size:14.5px;font-weight:650;line-height:1.3;white-space:normal;}",".m5m-tiles .m5m-choice-desc{color:var(--m5-on-brand);opacity:.85;}",".m5m-tiles .m5m-choice-arrow{display:none;}","@media (max-width:420px){.m5m-choices.m5m-tiles{grid-template-columns:1fr;}}",".m5m-header{display:flex;align-items:center;gap:12px;padding:15px 16px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));}",".m5m-ava{position:relative;flex:0 0 auto;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:rgba(127,127,127,.20);overflow:hidden;color:var(--m5-on-brand);}",".m5m-ava svg{width:21px;height:21px;}",".m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:50%;}",".m5m-head-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-title{font-size:15.5px;font-weight:680;letter-spacing:.1px;line-height:1.25;}",".m5m-subtitle{display:flex;align-items:center;gap:6px;font-size:12px;opacity:.92;font-weight:500;}",".m5m-online{width:7px;height:7px;border-radius:50%;background:#34D399;box-shadow:0 0 0 0 rgba(52,211,153,.6);animation:m5mPulse 2.4s ease-in-out infinite;}",".m5m-close,.m5m-back{flex:0 0 auto;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:var(--m5-on-brand);cursor:pointer;transition:background .18s var(--m5-ease);}",".m5m-close:hover,.m5m-back:hover{background:rgba(127,127,127,.22);}",".m5m-back svg{transform:rotate(180deg);}",".m5m-messages{flex:1;overflow-y:auto;padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px;background:var(--m5-msg-bg);}",".m5m-row{display:flex;align-items:flex-end;gap:8px;max-width:100%;animation:m5mIn .32s var(--m5-ease) both;}",".m5m-row-user{flex-direction:row-reverse;}",".m5m-row.m5m-grouped{margin-top:-4px;}",".m5m-msg-ava{position:relative;flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));overflow:hidden;align-self:flex-start;color:var(--m5-on-brand);}",".m5m-msg-ava:empty{background:transparent;}",".m5m-msg-ava svg{width:15px;height:15px;}",".m5m-col{display:flex;flex-direction:column;gap:3px;max-width:78%;}",".m5m-msg{padding:10px 14px;border-radius:var(--m5-radius-msg);font-size:14px;line-height:1.45;word-wrap:break-word;}",".m5m-bot{background:var(--m5-bot-bg);color:var(--m5-text);border:1px solid var(--m5-bot-border);border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(15,23,42,.10);}",".m5m-user{max-width:78%;align-self:flex-end;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);border-bottom-right-radius:5px;box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-time{font-size:11px;color:var(--m5-meta);padding:0 6px;}",".m5m-typing{display:flex;align-items:center;gap:4px;padding:13px 15px;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);border-bottom-left-radius:5px;}",".m5m-typing span{width:7px;height:7px;border-radius:50%;background:var(--m5-text-sub);opacity:.55;animation:m5mDot 1.2s infinite ease-in-out;}",".m5m-typing span:nth-child(2){animation-delay:.16s;}",".m5m-typing span:nth-child(3){animation-delay:.32s;}",".m5m-input{padding:12px 14px 14px;background:var(--m5-surface);border-top:1px solid var(--m5-border);}",".m5m-input:empty{display:none;}",".m5m-actionbar{display:flex;border-top:1px solid var(--m5-border);background:var(--m5-surface);}",".m5m-action{flex:1;appearance:none;border:0;background:var(--m5-surface);cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:9px 4px;min-height:54px;color:var(--m5-text-sub);text-decoration:none;font-size:11px;font-weight:600;transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-action svg{width:20px;height:20px;}",".m5m-action:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-action:active{background:var(--m5-brand-soft);}",".m5m-action.m5m-act-on{color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:inset 0 -2.5px 0 var(--m5-brand);}",".m5m-action + .m5m-action{border-left:1px solid var(--m5-border);}",".m5m-form{display:flex;gap:8px;align-items:center;}",".m5m-form input{flex:1;min-width:0;border:1.5px solid var(--m5-border);border-radius:var(--m5-radius-pill);padding:11px 16px;font-size:14px;outline:none;background:var(--m5-surface);color:var(--m5-text);transition:border-color .18s var(--m5-ease),box-shadow .18s var(--m5-ease);}",".m5m-form input::placeholder{color:var(--m5-text-sub);}",".m5m-form input:focus{border-color:var(--m5-brand);box-shadow:0 0 0 3px var(--m5-brand-ring);}",".m5m-send{flex:0 0 auto;width:44px;height:44px;border:0;border-radius:50%;color:var(--m5-on-brand);cursor:pointer;display:grid;place-items:center;background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-send:hover{transform:scale(1.06);}",".m5m-send:active{transform:scale(.94);}",".m5m-choices{display:flex;flex-direction:column;gap:8px;}",".m5m-choice{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:14px;background:var(--m5-surface);color:var(--m5-text);padding:11px 14px;font-size:14px;font-weight:600;font-family:inherit;min-height:44px;transition:transform .16s var(--m5-ease),border-color .16s var(--m5-ease),background .16s var(--m5-ease),box-shadow .16s var(--m5-ease);}",".m5m-choice:hover{transform:translateX(4px);border-color:var(--m5-brand);background:var(--m5-brand-soft);box-shadow:0 4px 14px var(--m5-brand-glow);}",".m5m-choice:active{transform:translateX(2px) scale(.99);}",".m5m-choice-icon{flex:0 0 auto;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-choice-icon svg{width:18px;height:18px;}",".m5m-choice-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}",".m5m-choice-label{line-height:1.3;}",".m5m-choice-arrow{flex:0 0 auto;color:var(--m5-text-sub);opacity:0;transform:translateX(-4px);transition:opacity .16s var(--m5-ease),transform .16s var(--m5-ease),color .16s var(--m5-ease);display:grid;place-items:center;}",".m5m-choice:hover .m5m-choice-arrow{opacity:1;transform:translateX(0);color:var(--m5-brand);}",".m5m-success{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:26px 22px;margin-top:auto;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-success-icon{display:grid;place-items:center;width:62px;height:62px;border-radius:18px;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 28px var(--m5-brand-glow);animation:m5mPop .42s var(--m5-ease) both;}",".m5m-success-title{font-size:17px;font-weight:700;color:var(--m5-text);margin-top:4px;}",".m5m-success-text{font-size:13.5px;color:var(--m5-text-sub);max-width:260px;}",".m5m-success-cta{margin-top:8px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:11px 26px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-success-cta:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-success-link{display:inline-block;margin-top:8px;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-success-link:hover{transform:translateY(-1px);}",".m5m-terminal{display:flex;justify-content:center;padding:8px 0 14px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-terminal-cta{display:inline-block;border:0;border-radius:var(--m5-radius-pill);padding:12px 28px;font-size:14px;font-weight:650;cursor:pointer;text-decoration:none;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-terminal-cta:hover{transform:translateY(-1px);}",".m5m-skip{display:block;margin:8px auto 0;border:0;background:transparent;color:var(--m5-text-sub);font-size:12.5px;font-weight:600;font-family:inherit;cursor:pointer;padding:4px 10px;border-radius:var(--m5-radius-pill);transition:color .16s var(--m5-ease),background .16s var(--m5-ease);}",".m5m-skip:hover{color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-optout{display:flex;align-items:center;gap:6px;margin:8px 2px 0;font-size:12.5px;color:var(--m5-text-sub);cursor:pointer;user-select:none;}",".m5m-optout input{margin:0;flex:0 0 auto;accent-color:var(--m5-brand);cursor:pointer;}",".m5m-no-launcher .m5m-launcher{display:none!important;}",".m5m-summary{align-self:stretch;background:var(--m5-bot-bg);border:1px solid var(--m5-bot-border);border-radius:var(--m5-radius-msg);padding:15px 16px;box-shadow:0 1px 3px rgba(15,23,42,.10);animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sum-head{font-size:13px;font-weight:700;color:var(--m5-text);margin-bottom:11px;}",".m5m-sum-rows{display:flex;flex-direction:column;gap:9px;}",".m5m-sum-row{display:flex;justify-content:space-between;gap:14px;font-size:13px;line-height:1.35;}",".m5m-sum-label{color:var(--m5-text-sub);white-space:nowrap;}",".m5m-sum-val{color:var(--m5-text);font-weight:600;text-align:right;word-break:break-word;}",".m5m-sum-confirm{margin-top:14px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:11px;font-size:14px;font-weight:650;cursor:pointer;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease);}",".m5m-sum-confirm:hover{transform:translateY(-1px);}",".m5m-sum-confirm:disabled{opacity:.6;cursor:default;transform:none;}",".m5m-error{display:flex;flex-direction:column;gap:10px;align-items:center;padding:18px;text-align:center;}",".m5m-error-text{font-size:13.5px;color:var(--m5-danger);}",".m5m-retry{border:0;border-radius:var(--m5-radius-pill);padding:11px 22px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);}",".m5m-home{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:22px 20px 10px;margin:auto 0;animation:m5mIn .34s var(--m5-ease) both;}",".m5m-home-ava{position:relative;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 10px 26px var(--m5-brand-glow);overflow:hidden;}",".m5m-home-ava .m5m-ava-mark{display:grid;place-items:center;width:100%;height:100%;}",".m5m-home-ava svg{width:26px;height:26px;}",".m5m-home-ava .m5m-ava-img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--m5-logo-fit,cover);border-radius:16px;}",".m5m-home-title{font-size:18px;font-weight:750;color:var(--m5-text);line-height:1.3;}",".m5m-home-text{font-size:13.5px;color:var(--m5-text-sub);max-width:290px;line-height:1.5;}",".m5m-home-hint{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:var(--m5-brand);}",".m5m-home-hint svg{width:16px;height:16px;}",".m5m-reveal{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:26px 22px;margin:auto 0;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-reveal-icon{display:grid;place-items:center;width:56px;height:56px;border-radius:16px;color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-reveal-icon svg{width:26px;height:26px;}",".m5m-reveal-title{font-size:16px;font-weight:700;color:var(--m5-text);}",".m5m-reveal-val{font-size:19px;font-weight:750;color:var(--m5-brand);text-decoration:none;word-break:break-word;}",".m5m-reveal-val:hover{text-decoration:underline;}",".m5m-reveal-copy{display:inline-flex;align-items:center;gap:6px;margin-top:4px;border:1.5px solid var(--m5-border);background:transparent;color:var(--m5-text);border-radius:var(--m5-radius-pill);padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .16s var(--m5-ease),background .16s var(--m5-ease),color .16s var(--m5-ease);}",".m5m-reveal-copy:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-reveal-copy svg{width:15px;height:15px;}",".m5m-multi{display:flex;flex-direction:column;gap:8px;align-self:stretch;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-mopt{display:flex;align-items:center;gap:11px;width:100%;text-align:left;cursor:pointer;border:1.5px solid var(--m5-border);border-radius:13px;background:var(--m5-surface);color:var(--m5-text);padding:12px 14px;font-size:14px;font-weight:600;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-mopt:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-icon{flex:0 0 auto;display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--m5-brand-soft);color:var(--m5-brand);}",".m5m-mopt-icon svg{width:17px;height:17px;}",".m5m-mopt-label{flex:1;min-width:0;}",".m5m-mopt-check{flex:0 0 auto;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1.5px solid var(--m5-border);color:transparent;transition:background .14s var(--m5-ease),border-color .14s var(--m5-ease),color .14s var(--m5-ease);}",".m5m-mopt-check svg{width:13px;height:13px;}",".m5m-mopt-on{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-mopt-on .m5m-mopt-check{background:var(--m5-brand);border-color:var(--m5-brand);color:var(--m5-on-brand);}",".m5m-multi-cont{margin-top:6px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-multi-cont:hover:not(:disabled){transform:translateY(-1px);}",".m5m-multi-cont:disabled{opacity:.5;cursor:default;}",".m5m-sched{align-self:stretch;display:flex;flex-direction:column;gap:12px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-sd-meta{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--m5-text-sub);}",".m5m-sd-meta svg{width:16px;height:16px;}",".m5m-sd-days{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;}",".m5m-sd-day{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:1px;width:52px;padding:8px 4px;border:1.5px solid var(--m5-border);border-radius:12px;background:var(--m5-surface);color:var(--m5-text);cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-day:hover{border-color:var(--m5-brand);}",".m5m-sd-dow{font-size:10.5px;font-weight:600;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-num{font-size:17px;font-weight:750;}",".m5m-sd-mon{font-size:10px;color:var(--m5-text-sub);text-transform:uppercase;}",".m5m-sd-day.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-day.m5m-sd-on .m5m-sd-dow,.m5m-sd-day.m5m-sd-on .m5m-sd-mon{color:rgba(255,255,255,.85);}",".m5m-sd-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;}",".m5m-sd-slot{border:1.5px solid var(--m5-border);border-radius:10px;background:var(--m5-surface);color:var(--m5-text);padding:9px 4px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:border-color .14s var(--m5-ease),background .14s var(--m5-ease);}",".m5m-sd-slot:hover{border-color:var(--m5-brand);background:var(--m5-brand-soft);}",".m5m-sd-slot.m5m-sd-on{border-color:var(--m5-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));color:var(--m5-on-brand);}",".m5m-sd-confirm{margin-top:2px;width:100%;border:0;border-radius:var(--m5-radius-pill);padding:12px;font-size:14px;font-weight:650;cursor:pointer;font-family:inherit;color:var(--m5-on-brand);background:linear-gradient(135deg,var(--m5-brand),var(--m5-brand-2));box-shadow:0 2px 10px var(--m5-brand-glow);transition:transform .16s var(--m5-ease),opacity .16s var(--m5-ease);}",".m5m-sd-confirm:hover:not(:disabled){transform:translateY(-1px);}",".m5m-sd-confirm:disabled{opacity:.5;cursor:default;}",".m5m-cal{align-self:stretch;display:flex;flex-direction:column;gap:10px;animation:m5mIn .3s var(--m5-ease) both;}",".m5m-cal-frame{border:0;width:100%;flex:1 1 auto;min-height:440px;border-radius:12px;background:#fff;}",".m5m-cal-done{padding:11px 14px;border-radius:12px;background:var(--m5-brand-soft);color:var(--m5-text);font-size:13px;font-weight:600;}",".m5m-hidden{display:none!important;}","@keyframes m5mIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}","@keyframes m5mDot{0%,60%,100%{transform:translateY(0);opacity:.5;}30%{transform:translateY(-4px);opacity:1;}}","@keyframes m5mPulse{0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5);}50%{box-shadow:0 0 0 5px rgba(52,211,153,0);}}","@keyframes m5mPop{0%{transform:scale(.4);opacity:0;}60%{transform:scale(1.08);}100%{transform:scale(1);opacity:1;}}","@media (max-width:480px){.m5m-panel{width:auto;left:12px;right:12px;bottom:12px;height:auto;top:12px;max-height:none;}.m5m-launcher{bottom:var(--m5-launcher-bottom,14px);right:14px;}}","@media (prefers-reduced-motion: reduce){.m5m-root *{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;}.m5m-choice:hover,.m5m-launcher:hover,.m5m-send:hover{transform:none;}}"].join("")}}();`;
function magnetToPackage(source = {}) {
  const s = source || {};
  const steps = Array.isArray(s.steps) && s.steps.length ? s.steps : [{ id: "1", step_type: "message", step_prompts: ["👋 Add steps in the flow builder to preview the conversation."], step_options: [], step_columns: [], step_description: "" }];
  return {
    mag_display_mode: s.display_mode || "chat",
    mag_trigger: "on_load",
    mag_theme_color: /^#[0-9a-fA-F]{6}$/.test(s.theme_color || "") ? s.theme_color : "#0072BA",
    mag_theme_mode: s.theme_mode || "auto",
    mag_title: s.title && String(s.title).trim() || s.name || "Chat with us",
    mag_subtitle: s.subtitle != null ? s.subtitle : "Typically replies in a few minutes",
    mag_launcher_label: s.launcher_label || "",
    mag_logo_url: s.logo_url || "",
    mag_logo_fit: s.logo_fit === "contain" ? "contain" : "cover",
    mag_summary: !!s.summary,
    mag_summary_heading: s.summary_heading || "",
    mag_summary_confirm_label: s.summary_confirm_label || "",
    mag_home: !!s.home,
    mag_welcome: s.welcome != null ? s.welcome : "",
    mag_actions: Array.isArray(s.actions) ? s.actions : [],
    mag_macro_steps: steps,
    // Brand theming + inline sizing + post-submit (mirror of the builder's new fields).
    mag_font: s.font || "",
    mag_theme_vars: s.theme_vars && typeof s.theme_vars === "object" && Object.keys(s.theme_vars).length ? s.theme_vars : void 0,
    mag_inline_width: s.inline_width || "",
    mag_inline_height: s.inline_height || "",
    mag_input_placeholder: s.input_placeholder || "",
    mag_success_title: s.success_title || "",
    mag_success_text: s.success_text != null ? s.success_text : "",
    mag_success_cta: s.success_cta && s.success_cta.url && s.success_cta.label ? s.success_cta : void 0
    // hide_launcher is intentionally NOT forced in preview — the preview auto-opens
    // (mag_trigger 'on_load') so the panel is always visible to inspect.
  };
}
function buildDoc(pkg) {
  const defs = JSON.stringify([pkg]);
  const hydrated = SDK_RAW.replace(/##APPGUID##/g, () => "preview").replace(/["']##MAGNET_DEFINITIONS##["']/g, () => defs).replace(/<\/script>/gi, "<\\/script>");
  const inline = pkg.mag_display_mode === "inline";
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
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
    ${inline ? '<div class="pv-slot"><div data-m5m-inline></div></div>' : '<div class="pv-cards"><div class="pv-card"></div><div class="pv-card"></div></div>'}
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
  <script>${hydrated}<\/script>
</body></html>`;
}
let stylesInjected$1 = false;
function ensureStyles() {
  if (stylesInjected$1) return;
  const style = document.createElement("style");
  style.id = "m5t-preview-styles";
  style.textContent = `
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
  `;
  document.head.appendChild(style);
  stylesInjected$1 = true;
}
function infoHintHTML(captureText) {
  return `<div class="pv-hintwrap">
    <p class="pv-hint">${captureText}</p>
    <p class="pv-hint pv-hint--style">Custom styling on your site won't be shown here
      <button type="button" class="pv-info" data-pv-info aria-label="More about custom styling"><span class="material-symbols-outlined" aria-hidden="true">info</span></button>
    </p>
    <div class="pv-info-pop" data-pv-info-pop hidden>
      <strong>About custom styling</strong>
      This preview shows the magnet exactly as you set it up here. If you style over it with your own CSS on your website or app, those changes won't show in this preview, so the live version can look a little different.
    </div>
  </div>`;
}
function wireInfoHint(root) {
  const btn = root.querySelector("[data-pv-info]");
  const pop = root.querySelector("[data-pv-info-pop]");
  if (btn && pop) btn.addEventListener("click", () => {
    pop.hidden = !pop.hidden;
  });
}
function mountPreviewPane(container, getPkg) {
  ensureStyles();
  container.innerHTML = `
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
      ${infoHintHTML("Live render of the real widget. Capture is disabled, so no test leads.")}
    </div>`;
  wireInfoHint(container);
  const frame = container.querySelector(".pv-pane__frame");
  const badge = container.querySelector(".pv-pane__badge");
  let hideTimer = null;
  let shownAt = 0;
  const MIN_VISIBLE = 450;
  const hideBadge = () => {
    const elapsed = (typeof performance !== "undefined" ? performance.now() : Date.now()) - shownAt;
    clearTimeout(hideTimer);
    if (elapsed < MIN_VISIBLE) hideTimer = setTimeout(() => {
      badge.hidden = true;
    }, MIN_VISIBLE - elapsed);
    else badge.hidden = true;
  };
  frame.addEventListener("load", hideBadge);
  const refresh = () => {
    let doc;
    try {
      doc = buildDoc(getPkg());
    } catch {
      return;
    }
    shownAt = typeof performance !== "undefined" ? performance.now() : Date.now();
    badge.hidden = false;
    frame.srcdoc = doc;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      badge.hidden = true;
    }, 1500);
  };
  container.querySelector(".pv-pane__seg").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-device]");
    if (!btn || btn.dataset.device === frame.dataset.device) return;
    container.querySelectorAll(".pv-pane__seg button").forEach((b) => b.classList.toggle("is-on", b === btn));
    frame.dataset.device = btn.dataset.device;
  });
  refresh();
  return { refresh, destroy() {
    clearTimeout(hideTimer);
  } };
}
function openPreviewModal(getPkg) {
  ensureStyles();
  let device = "desktop";
  const scrim = document.createElement("div");
  scrim.className = "pv-scrim";
  scrim.innerHTML = `
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
          ${infoHintHTML("Live render of the actual widget. Capture is disabled, so no test leads are created.")}
        </div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  requestAnimationFrame(() => scrim.classList.add("open"));
  wireInfoHint(scrim);
  const frame = scrim.querySelector(".pv-frame");
  const stage = scrim.querySelector(".pv-stage");
  const rebuild = () => {
    try {
      frame.srcdoc = buildDoc(getPkg());
    } catch {
    }
  };
  rebuild();
  const close = () => {
    scrim.classList.remove("open");
    setTimeout(() => scrim.remove(), 180);
  };
  scrim.querySelector('[data-x="close"]').addEventListener("click", close);
  scrim.querySelector('[data-x="refresh"]').addEventListener("click", rebuild);
  scrim.addEventListener("click", (e) => {
    if (e.target === scrim) close();
  });
  scrim.querySelector(".pv-seg").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-device]");
    if (!btn || btn.dataset.device === device) return;
    device = btn.dataset.device;
    scrim.querySelectorAll(".pv-seg button").forEach((b) => b.classList.toggle("is-on", b.dataset.device === device));
    stage.dataset.device = device;
    rebuild();
  });
  return { close, rebuild };
}
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const TEMPLATE_CATEGORIES = Object.freeze({
  lead_capture: "Lead capture",
  booking: "Booking",
  engagement: "Engagement",
  support: "Support"
});
const MAGNET_TEMPLATES = [
  {
    id: "lead_capture",
    name: "Lead Capture",
    description: "A general-purpose qualify-and-capture flow. Ask what a visitor needs, then get their contact info.",
    icon: "person_add",
    category: "lead_capture",
    tags: ["Contact info", "Qualifying"],
    featured: true,
    appearance: {
      title: "Chat with us",
      subtitle: "Typically replies in a few minutes"
    },
    steps: [
      { id: "1", step_type: "single_select", step_columns: ["product_interest"], step_prompts: ["Hi there! 👋", "What brings you here today?"], step_options: [{ label: "Get a quote", goto: "" }, { label: "Learn more", goto: "" }, { label: "Just browsing", goto: "" }], step_description: "" },
      { id: "2", step_type: "text", step_columns: ["name"], step_prompts: ["Great! What’s your name?"], step_options: [], step_description: "" },
      { id: "3", step_type: "email", step_columns: ["email"], step_prompts: ["And your best email?"], step_options: [], step_description: "" },
      { id: "4", step_type: "phone", step_columns: ["phone"], step_prompts: ["Last thing. A phone number in case we need to follow up?"], step_options: [], step_description: "" }
    ]
  },
  {
    id: "appointment_booking",
    name: "Appointment Booking",
    description: "Collect contact details, then let the visitor pick a time. Pairs with the Calendly integration under Settings.",
    icon: "event_available",
    category: "booking",
    tags: ["Scheduling", "Calendly"],
    featured: false,
    appearance: {
      title: "Book a time with us",
      subtitle: "Pick whatever works for your schedule"
    },
    steps: [
      { id: "1", step_type: "text", step_columns: ["name"], step_prompts: ["Hi! 👋 What’s your name?"], step_options: [], step_description: "" },
      { id: "2", step_type: "email", step_columns: ["email"], step_prompts: ["What’s the best email for your confirmation?"], step_options: [], step_description: "" },
      { id: "3", step_type: "phone", step_columns: ["phone"], step_prompts: ["And a phone number, in case we need to reach you?"], step_options: [], step_description: "" },
      { id: "4", step_type: "scheduler", step_columns: [], step_prompts: ["When works best for a quick call?"], step_options: [], step_description: "", step_config: { meeting_label: "", start: "09:00", end: "17:00", mins: 30, days: 14 } }
    ]
  },
  {
    id: "support_triage",
    name: "Support Triage",
    description: "Route a visitor to the right kind of help before they describe the issue, so your team sees the full picture up front.",
    icon: "support_agent",
    category: "support",
    tags: ["Routing", "Existing customers"],
    featured: false,
    appearance: {
      title: "How can we help?",
      subtitle: "We’ll get back to you as soon as we can"
    },
    steps: [
      { id: "1", step_type: "multi_select", step_columns: ["product_interest"], step_prompts: ["What do you need help with?", "Pick everything that applies."], step_options: [{ label: "Billing question", goto: "" }, { label: "Technical issue", goto: "" }, { label: "Feature request", goto: "" }, { label: "Something else", goto: "" }], step_description: "" },
      { id: "2", step_type: "text", step_columns: ["description"], step_prompts: ["Can you describe what’s going on?"], step_options: [], step_description: "" },
      { id: "3", step_type: "text", step_columns: ["name"], step_prompts: ["What’s your name?"], step_options: [], step_description: "" },
      { id: "4", step_type: "email", step_columns: ["email"], step_prompts: ["Best email to follow up on this?"], step_options: [], step_description: "" }
    ]
  },
  {
    id: "quote_request",
    name: "Quote Request",
    description: "For local and home-service businesses. Describe the job, leave contact info, get a callback.",
    icon: "request_quote",
    category: "lead_capture",
    tags: ["Local services", "Callback"],
    featured: false,
    appearance: {
      title: "Get a free quote",
      subtitle: "Tell us about the job and we’ll follow up"
    },
    steps: [
      { id: "1", step_type: "text", step_columns: ["description"], step_prompts: ["What’s the job? 🛠️", "(e.g. roof repair, install a fence, fix a leak…)"], step_options: [], step_description: "" },
      { id: "2", step_type: "text", step_columns: ["name"], step_prompts: ["What’s your name?"], step_options: [], step_description: "" },
      { id: "3", step_type: "phone", step_columns: ["phone"], step_prompts: ["Best phone number for a quick callback?"], step_options: [], step_description: "" },
      { id: "4", step_type: "email", step_columns: ["email"], step_prompts: ["And an email, in case we can’t reach you by phone?"], step_options: [], step_description: "" }
    ]
  },
  {
    id: "site_navigation_guide",
    name: "Site Navigation Guide",
    description: "A branching menu for content or reference sites. Visitors pick where they want to go instead of filling out a form. No contact info collected.",
    icon: "signpost",
    category: "engagement",
    tags: ["Branching", "No contact info"],
    featured: false,
    appearance: {
      title: "Looking for something?",
      subtitle: "Pick an option below"
    },
    // Uses per-option `goto` + a terminal message step's step_config.terminal/cta —
    // both already fully supported at the data/runtime layer (see the SDK's
    // renderTerminal()); this was the first template to actually exercise `goto`
    // (exit_intent_offer is the second). Placeholder branches + example.com URLs
    // are deliberate — this reads as "customize me before publishing," not a real
    // destination, same as every other template's placeholder copy.
    steps: [
      { id: "1", step_type: "single_select", step_columns: [], step_prompts: ["Hi there! 👋", "What can I help you find?"], step_options: [
        { label: "Browse products", goto: "2" },
        { label: "See pricing", goto: "3" },
        { label: "Read our guide", goto: "4" },
        { label: "Something else", goto: "5" }
      ], step_description: "" },
      { id: "2", step_type: "message", step_columns: [], step_prompts: ["Here’s where to browse. Take a look!"], step_options: [], step_description: "", step_config: { terminal: true, cta: { label: "Browse products", url: "https://example.com/products" } } },
      { id: "3", step_type: "message", step_columns: [], step_prompts: ["Here’s our pricing. Take a look!"], step_options: [], step_description: "", step_config: { terminal: true, cta: { label: "See pricing", url: "https://example.com/pricing" } } },
      { id: "4", step_type: "message", step_columns: [], step_prompts: ["Here’s our guide. Take a look!"], step_options: [], step_description: "", step_config: { terminal: true, cta: { label: "Read our guide", url: "https://example.com/guide" } } },
      { id: "5", step_type: "message", step_columns: [], step_prompts: ["Thanks for stopping by. Feel free to reach out if you need anything else."], step_options: [], step_description: "", step_config: { terminal: true } }
    ]
  },
  {
    id: "newsletter_signup",
    name: "Newsletter Signup",
    description: "Pick a topic, leave an email, done. The shortest path from visitor to subscriber.",
    icon: "mail",
    category: "lead_capture",
    tags: ["Email list", "Two questions"],
    featured: false,
    appearance: {
      title: "Join the list",
      subtitle: "One short email, now and then"
    },
    steps: [
      { id: "1", step_type: "single_select", step_columns: ["product_interest"], step_prompts: ["Hi there! 👋", "What do you want to hear about?"], step_options: [
        { label: "Product updates", goto: "" },
        { label: "Tips and how-tos", goto: "" },
        { label: "Deals and offers", goto: "" }
      ], step_description: "" },
      { id: "2", step_type: "email", step_columns: ["email"], step_prompts: ["Where should we send it?"], step_options: [], step_description: "" },
      // Deliberately NOT terminal: the SDK stops on terminal message steps without ever
      // POSTing the capture (see advance() in shared/machfivemagnet.js — "an informational
      // branch is not a lead"). A plain message plays, falls through the end of the flow,
      // and finish() creates the lead.
      { id: "3", step_type: "message", step_columns: [], step_prompts: ["You’re on the list. Watch your inbox!"], step_options: [], step_description: "" }
    ]
  },
  {
    id: "demo_request",
    name: "Demo Request",
    description: "Qualify a B2B visitor on name, work email, company and industry, then let them book the call.",
    icon: "co_present",
    category: "booking",
    tags: ["B2B", "Scheduling"],
    featured: false,
    appearance: {
      title: "See a demo",
      subtitle: "A short walkthrough, on your schedule"
    },
    steps: [
      { id: "1", step_type: "text", step_columns: ["name"], step_prompts: ["Happy to show you around! 👋", "What’s your name?"], step_options: [], step_description: "" },
      { id: "2", step_type: "email", step_columns: ["email"], step_prompts: ["What’s your work email?"], step_options: [], step_description: "" },
      { id: "3", step_type: "text", step_columns: ["company"], step_prompts: ["Where do you work?"], step_options: [], step_description: "" },
      { id: "4", step_type: "single_select", step_columns: ["industry"], step_prompts: ["What kind of business is it?"], step_options: [
        { label: "Agency", goto: "" },
        { label: "Ecommerce", goto: "" },
        { label: "SaaS", goto: "" },
        { label: "Other", goto: "" }
      ], step_description: "" },
      // Same step_config shape as appointment_booking's scheduler step.
      { id: "5", step_type: "scheduler", step_columns: [], step_prompts: ["When works best for your demo?"], step_options: [], step_description: "", step_config: { meeting_label: "", start: "09:00", end: "17:00", mins: 30, days: 14 } }
    ]
  },
  {
    id: "feedback_pulse",
    name: "Feedback Pulse",
    description: "A three-tap sentiment check with room for a comment and an optional reply address.",
    icon: "reviews",
    category: "engagement",
    tags: ["Feedback", "Existing customers"],
    featured: false,
    appearance: {
      title: "Quick question",
      subtitle: "Takes about twenty seconds"
    },
    steps: [
      { id: "1", step_type: "single_select", step_columns: [], step_prompts: ["How was your experience with us?"], step_options: [
        { label: "Great", goto: "" },
        { label: "Okay", goto: "" },
        { label: "Not great", goto: "" }
      ], step_description: "" },
      { id: "2", step_type: "text", step_columns: ["description"], step_prompts: ["What could we do better?"], step_options: [], step_description: "" },
      { id: "3", step_type: "email", step_columns: ["email"], step_prompts: ["Want a reply? Leave your email."], step_options: [], step_description: "" },
      // Not terminal — see newsletter_signup: a terminal closer would swallow the capture.
      { id: "4", step_type: "message", step_columns: [], step_prompts: ["Thanks, that really helps."], step_options: [], step_description: "" }
    ]
  },
  {
    id: "exit_intent_offer",
    name: "Exit Intent Offer",
    description: "A discount for visitors about to leave, with a polite exit for anyone who says no.",
    icon: "door_open",
    category: "engagement",
    tags: ["Discount", "Branching"],
    featured: false,
    appearance: {
      title: "Before you go",
      subtitle: "10% off your first order"
    },
    // Second template to exercise `goto` (site_navigation_guide was the first):
    // "No thanks" jumps past the email ask straight to its own terminal, so a
    // visitor who declines is never asked for contact info. That decline step is
    // the ONLY terminal here — it collects nothing, so stopping without a capture
    // is correct. The accept path must NOT end terminal (the SDK never POSTs the
    // capture from a terminal step — see advance() in shared/machfivemagnet.js),
    // so its closer is a plain message that falls off the end of the flow into
    // finish()/capture. Array order matters for that fall-through: the decline
    // terminal is parked at index 1, ahead of the email step, so the accept tail
    // (email → closer) occupies the end of the array. goto targets are id-based,
    // so the jumps are unaffected by the ordering.
    steps: [
      { id: "1", step_type: "single_select", step_columns: [], step_prompts: ["Before you go, want 10% off your first order?"], step_options: [
        { label: "Yes, send me the code", goto: "2" },
        { label: "No thanks", goto: "4" }
      ], step_description: "" },
      { id: "4", step_type: "message", step_columns: [], step_prompts: ["No worries, enjoy your visit!"], step_options: [], step_description: "", step_config: { terminal: true } },
      { id: "2", step_type: "email", step_columns: ["email"], step_prompts: ["Where should we send the code?"], step_options: [], step_description: "" },
      { id: "3", step_type: "message", step_columns: [], step_prompts: ["Check your inbox, your code is on the way."], step_options: [], step_description: "" }
    ]
  },
  {
    id: "event_registration",
    name: "Event Registration",
    description: "Register an attendee and let them pick the session they want.",
    icon: "event",
    category: "booking",
    tags: ["Events", "Sessions"],
    featured: false,
    appearance: {
      title: "Save your seat",
      subtitle: "Register in under a minute"
    },
    steps: [
      { id: "1", step_type: "text", step_columns: ["name"], step_prompts: ["Glad you’re coming! 🎟️", "What’s your name?"], step_options: [], step_description: "" },
      { id: "2", step_type: "email", step_columns: ["email"], step_prompts: ["Where should we send your ticket?"], step_options: [], step_description: "" },
      { id: "3", step_type: "single_select", step_columns: [], step_prompts: ["Which session do you want?"], step_options: [
        { label: "Morning session", goto: "" },
        { label: "Afternoon session", goto: "" },
        { label: "Evening session", goto: "" }
      ], step_description: "" },
      // Not terminal — see newsletter_signup: a terminal closer would swallow the capture.
      { id: "4", step_type: "message", step_columns: [], step_prompts: ["You’re registered. See you there!"], step_options: [], step_description: "" }
    ]
  }
];
function templateFields(t) {
  const seen = [];
  for (const s of t.steps || []) {
    for (const c of s.step_columns || []) if (c && !seen.includes(c)) seen.push(c);
  }
  return seen;
}
const INPUT_PLACEHOLDER = {
  text: "Type your answer",
  email: "you@example.com",
  phone: "(555) 123-4567"
};
function derivedPreviewHTML(t) {
  const first = (t.steps || [])[0] || {};
  const line = (first.step_prompts || [])[0] || "";
  let body = "";
  if (first.step_type === "single_select" || first.step_type === "multi_select") {
    body = (first.step_options || []).slice(0, 3).map((o) => `<span class="mag-tpl-pv__btn">${esc(o?.label)}</span>`).join("");
  } else if (INPUT_PLACEHOLDER[first.step_type]) {
    body = `<span class="mag-tpl-pv__input">${esc(INPUT_PLACEHOLDER[first.step_type])}</span>`;
  } else if (first.step_type === "scheduler") {
    body = `<span class="mag-tpl-pv__cal"><span class="material-symbols-outlined" aria-hidden="true">calendar_month</span>Pick a time</span>`;
  }
  return `<div class="mag-tpl-card__preview" aria-hidden="true"><span class="mag-tpl-pv__bubble">${esc(line)}</span>${body}</div>`;
}
function templateCardHTML(t, { detail = false, gallery = false, canUse = true } = {}) {
  const fields = detail ? templateFields(t) : [];
  const galleryCls = gallery ? " mag-tpl-card--gallery" : "";
  const catAttr = gallery ? ` data-cat="${esc(t.category || "")}"` : "";
  const badge = gallery && t.featured ? `<span class="m5t-badge m5t-badge--featured m5t-featured-corner">Most popular</span>` : "";
  const art = gallery ? derivedPreviewHTML(t) : "";
  const tags = gallery && (t.tags || []).length ? `<div class="m5t-chip-row mag-tpl-card__tags">${t.tags.map((tag) => `<span class="m5t-chip">${esc(tag)}</span>`).join("")}</div>` : "";
  const useBtn = canUse ? `<button class="mag-tpl-card__btn" type="button" data-tpl="${t.id}">
        <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>Use this template
      </button>` : "";
  const previewBtn = gallery ? `<button class="mag-tpl-card__btn mag-tpl-card__btn--ghost" type="button" data-preview="${t.id}">
        <span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview
      </button>` : "";
  return `
    <div class="mag-tpl-card${galleryCls}"${catAttr}>${badge}${art}
      <span class="mag-tpl-card__icon"><span class="material-symbols-outlined" aria-hidden="true">${t.icon}</span></span>
      <span class="mag-tpl-card__name">${t.name}</span>
      <p class="mag-tpl-card__desc">${t.description}</p>${tags}
      ${detail ? `<p class="mag-tpl-card__meta">
        <span><span class="material-symbols-outlined" aria-hidden="true">list_alt</span>${(t.steps || []).length} steps</span>
        ${fields.length ? `<span><span class="material-symbols-outlined" aria-hidden="true">badge</span>Captures ${fields.join(", ")}</span>` : ""}
      </p>` : ""}
      ${gallery ? `<div class="mag-tpl-card__actions">${useBtn}${previewBtn}</div>` : useBtn}
    </div>`;
}
const PENDING_TEMPLATE_TTL_MS = 5 * 60 * 1e3;
function setPendingTemplate(id) {
  setHandoff(HANDOFF.MAGNET_TEMPLATE, { id, at: Date.now() });
}
function resolveParked(parked) {
  if (!parked) return null;
  if (typeof parked === "string") return MAGNET_TEMPLATES.find((x) => x.id === parked) || null;
  const { id, at } = parked;
  if (typeof at === "number" && Date.now() - at >= PENDING_TEMPLATE_TTL_MS) return null;
  return MAGNET_TEMPLATES.find((x) => x.id === id) || null;
}
function takePendingTemplate() {
  return resolveParked(takeHandoff(HANDOFF.MAGNET_TEMPLATE));
}
function peekPendingTemplate() {
  return resolveParked(peekHandoff(HANDOFF.MAGNET_TEMPLATE));
}
let stylesInjected = false;
function ensureTemplateStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-mag-template-styles";
  s.textContent = `
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
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
function openTemplateGallery(onPick) {
  ensureTemplateStyles();
  const scrim = document.createElement("div");
  scrim.className = "mag-modal-scrim mag-tpl-modal";
  scrim.innerHTML = `
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="Start from a template">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Start from a template</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body">
        <div class="mag-tpl-grid">
          ${MAGNET_TEMPLATES.map((t) => templateCardHTML(t)).join("")}
        </div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    scrim.querySelector(".mag-modal").classList.add("open");
  });
  const doClose = () => {
    scrim.classList.remove("open");
    setTimeout(() => scrim.remove(), 180);
    document.removeEventListener("keydown", onKey);
  };
  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      doClose();
    }
  }
  document.addEventListener("keydown", onKey);
  scrim.querySelector(".mag-modal__close").addEventListener("click", doClose);
  scrim.querySelectorAll("[data-tpl]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const template = MAGNET_TEMPLATES.find((t) => t.id === btn.dataset.tpl);
      if (!template) return;
      scrim.querySelectorAll("[data-tpl]").forEach((b) => {
        b.disabled = true;
      });
      doClose();
      onPick(template);
    });
  });
}
export {
  MAGNET_TEMPLATES as M,
  TEMPLATE_CATEGORIES as T,
  openTemplateGallery as a,
  magnetToPackage as b,
  templateCardHTML as c,
  ensureTemplateStyles as e,
  mountPreviewPane as m,
  openPreviewModal as o,
  peekPendingTemplate as p,
  setPendingTemplate as s,
  takePendingTemplate as t
};
//# sourceMappingURL=magnet-templates-D_rF6WkH.js.map
