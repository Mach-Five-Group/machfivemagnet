const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./questionnaire-fill-route-CXeqTkJo.js","./coBrand-DbiPODuF.js","./questionnaireAnswers-BUs4-Lnv.js","./auth-hero-sketch-emnp5_QT.js","./deliverable-fill-route-Cj00vKRO.js","./splash-route-C87dv6xo.js","./signin-route-DfYKI1MP.js","./formHelpers-CBV2tQ_I.js","./signup-route-CuokJOa7.js","./passwordValidator-CLQPipXE.js","./verf-link-route-Di3XP2sd.js","./forgot-route-C1SEbesv.js","./resethash-route-2ALgG8np.js","./dashboard-route-C7G4W0nR.js","./portfolio-view-D5t4pXOZ.js","./routeHandoff-CzcXjRAH.js","./statCard-1WYYWdna.js","./signout-route-m-aIohBB.js","./settings-notifications-route-DXmcM55x.js","./index-Divrdfja.js","./settings-integrations-route-C69G8Txe.js","./integrations-shared-DIkAqJCS.js","./confirmDialog-B9956zZ8.js","./settings-integration-detail-route-C7V76Wrg.js","./settings-security-route-5rwS41-u.js","./conversations-route-BmmZZZih.js","./ab-testing-route-Y-AVD4aF.js","./magnets-route-vSpr8hQ0.js","./magnet-templates-D_rF6WkH.js","./templates-route-6jt4emcG.js","./questionnaires-route-DgIbjO2k.js","./deliverables-route-DhDaQCSG.js","./leads-route-DIutAyLV.js","./analytics-route-pX5iyFS7.js","./ad-performance-route-B64kFNEg.js","./ad-accounts-route-DWTW-XXQ.js","./clients-route-F-gaefLA.js"])))=>i.map(i=>d[i]);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (!!importerUrl) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
        const link$1 = links[i$1];
        if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
      }
      else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
var PARAMETER_REGEXP = /([:*])(\w+)/g;
var REPLACE_VARIABLE_REGEXP = "([^/]+)";
var WILDCARD_REGEXP = /\*/g;
var REPLACE_WILDCARD = "?(?:.*)";
var NOT_SURE_REGEXP = /\/\?/g;
var REPLACE_NOT_SURE = "/?([^/]+|)";
var START_BY_SLASH_REGEXP = "(?:/^|^)";
var MATCH_REGEXP_FLAGS = "";
function getCurrentEnvURL(fallback) {
  if (fallback === void 0) {
    fallback = "/";
  }
  if (windowAvailable()) {
    return location.pathname + location.search + location.hash;
  }
  return fallback;
}
function clean(s) {
  return s.replace(/\/+$/, "").replace(/^\/+/, "");
}
function isString(s) {
  return typeof s === "string";
}
function isFunction(s) {
  return typeof s === "function";
}
function extractHashFromURL(url) {
  if (url && url.indexOf("#") >= 0) {
    return url.split("#").pop() || "";
  }
  return "";
}
function regExpResultToParams(match, names) {
  if (names.length === 0) return null;
  if (!match) return null;
  return match.slice(1, match.length).reduce(function(params, value, index) {
    if (params === null) params = {};
    params[names[index]] = decodeURIComponent(value);
    return params;
  }, null);
}
function extractGETParameters(url) {
  var tmp = clean(url).split(/\?(.*)?$/);
  return [clean(tmp[0]), tmp.slice(1).join("")];
}
function parseQuery(queryString) {
  var query = {};
  var pairs = queryString.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    if (pair[0] !== "") {
      var key = decodeURIComponent(pair[0]);
      if (!query[key]) {
        query[key] = decodeURIComponent(pair[1] || "");
      } else {
        if (!Array.isArray(query[key])) query[key] = [query[key]];
        query[key].push(decodeURIComponent(pair[1] || ""));
      }
    }
  }
  return query;
}
function matchRoute(context, route) {
  var _extractGETParameters = extractGETParameters(clean(context.currentLocationPath)), current = _extractGETParameters[0], GETParams = _extractGETParameters[1];
  var params = GETParams === "" ? null : parseQuery(GETParams);
  var paramNames = [];
  var pattern;
  if (isString(route.path)) {
    pattern = START_BY_SLASH_REGEXP + clean(route.path).replace(PARAMETER_REGEXP, function(full, dots, name) {
      paramNames.push(name);
      return REPLACE_VARIABLE_REGEXP;
    }).replace(WILDCARD_REGEXP, REPLACE_WILDCARD).replace(NOT_SURE_REGEXP, REPLACE_NOT_SURE) + "$";
    if (clean(route.path) === "") {
      if (clean(current) === "") {
        return {
          url: current,
          queryString: GETParams,
          hashString: extractHashFromURL(context.to),
          route,
          data: null,
          params
        };
      }
    }
  } else {
    pattern = route.path;
  }
  var regexp = new RegExp(pattern, MATCH_REGEXP_FLAGS);
  var match = current.match(regexp);
  if (match) {
    var data = isString(route.path) ? regExpResultToParams(match, paramNames) : match.groups ? match.groups : match.slice(1);
    return {
      url: clean(current.replace(new RegExp("^" + context.instance.root), "")),
      queryString: GETParams,
      hashString: extractHashFromURL(context.to),
      route,
      data,
      params
    };
  }
  return false;
}
function pushStateAvailable() {
  return !!(typeof window !== "undefined" && window.history && window.history.pushState);
}
function undefinedOrTrue(obj, key) {
  return typeof obj[key] === "undefined" || obj[key] === true;
}
function parseNavigateOptions(source) {
  if (!source) return {};
  var pairs = source.split(",");
  var options = {};
  var resolveOptions;
  pairs.forEach(function(str) {
    var temp = str.split(":").map(function(v) {
      return v.replace(/(^ +| +$)/g, "");
    });
    switch (temp[0]) {
      case "historyAPIMethod":
        options.historyAPIMethod = temp[1];
        break;
      case "resolveOptionsStrategy":
        if (!resolveOptions) resolveOptions = {};
        resolveOptions.strategy = temp[1];
        break;
      case "resolveOptionsHash":
        if (!resolveOptions) resolveOptions = {};
        resolveOptions.hash = temp[1] === "true";
        break;
      case "updateBrowserURL":
      case "callHandler":
      case "updateState":
      case "force":
        options[temp[0]] = temp[1] === "true";
        break;
    }
  });
  if (resolveOptions) {
    options.resolveOptions = resolveOptions;
  }
  return options;
}
function windowAvailable() {
  return typeof window !== "undefined";
}
function accumulateHooks(hooks, result) {
  if (hooks === void 0) {
    hooks = [];
  }
  if (result === void 0) {
    result = {};
  }
  hooks.filter(function(h) {
    return h;
  }).forEach(function(h) {
    ["before", "after", "already", "leave"].forEach(function(type) {
      if (h[type]) {
        if (!result[type]) result[type] = [];
        result[type].push(h[type]);
      }
    });
  });
  return result;
}
function Q(funcs, c, done) {
  var context = c || {};
  var idx = 0;
  (function next() {
    if (!funcs[idx]) {
      if (done) {
        done(context);
      }
      return;
    }
    if (Array.isArray(funcs[idx])) {
      funcs.splice.apply(funcs, [idx, 1].concat(funcs[idx][0](context) ? funcs[idx][1] : funcs[idx][2]));
      next();
    } else {
      funcs[idx](context, function(moveForward) {
        if (typeof moveForward === "undefined" || moveForward === true) {
          idx += 1;
          next();
        } else if (done) {
          done(context);
        }
      });
    }
  })();
}
Q["if"] = function(condition, one, two) {
  if (!Array.isArray(one)) one = [one];
  if (!Array.isArray(two)) two = [two];
  return [condition, one, two];
};
function setLocationPath(context, done) {
  if (typeof context.currentLocationPath === "undefined") {
    context.currentLocationPath = context.to = getCurrentEnvURL(context.instance.root);
  }
  context.currentLocationPath = context.instance._checkForAHash(context.currentLocationPath);
  done();
}
function matchPathToRegisteredRoutes(context, done) {
  for (var i = 0; i < context.instance.routes.length; i++) {
    var route = context.instance.routes[i];
    var match = matchRoute(context, route);
    if (match) {
      if (!context.matches) context.matches = [];
      context.matches.push(match);
      if (context.resolveOptions.strategy === "ONE") {
        done();
        return;
      }
    }
  }
  done();
}
function checkForDeprecationMethods(context, done) {
  if (context.navigateOptions) {
    if (typeof context.navigateOptions["shouldResolve"] !== "undefined") {
      console.warn('"shouldResolve" is deprecated. Please check the documentation.');
    }
    if (typeof context.navigateOptions["silent"] !== "undefined") {
      console.warn('"silent" is deprecated. Please check the documentation.');
    }
  }
  done();
}
function checkForForceOp(context, done) {
  if (context.navigateOptions.force === true) {
    context.instance._setCurrent([context.instance._pathToMatchObject(context.to)]);
    done(false);
  } else {
    done();
  }
}
var isWindowAvailable = windowAvailable();
var isPushStateAvailable = pushStateAvailable();
function updateBrowserURL(context, done) {
  if (undefinedOrTrue(context.navigateOptions, "updateBrowserURL")) {
    var value = ("/" + context.to).replace(/\/\//g, "/");
    var isItUsingHash = isWindowAvailable && context.resolveOptions && context.resolveOptions.hash === true;
    if (isPushStateAvailable) {
      history[context.navigateOptions.historyAPIMethod || "pushState"](context.navigateOptions.stateObj || {}, context.navigateOptions.title || "", isItUsingHash ? "#" + value : value);
      if (location && location.hash) {
        context.instance.__freezeListening = true;
        setTimeout(function() {
          if (!isItUsingHash) {
            var tmp = location.hash;
            location.hash = "";
            location.hash = tmp;
          }
          context.instance.__freezeListening = false;
        }, 1);
      }
    } else if (isWindowAvailable) {
      window.location.href = context.to;
    }
  }
  done();
}
function checkForLeaveHook(context, done) {
  var instance = context.instance;
  if (!instance.lastResolved()) {
    done();
    return;
  }
  Q(instance.lastResolved().map(function(oldMatch) {
    return function(_, leaveLoopDone) {
      if (!oldMatch.route.hooks || !oldMatch.route.hooks.leave) {
        leaveLoopDone();
        return;
      }
      var runHook = false;
      var newLocationVSOldMatch = context.instance.matchLocation(oldMatch.route.path, context.currentLocationPath, false);
      if (oldMatch.route.path !== "*") {
        runHook = !newLocationVSOldMatch;
      } else {
        var someOfTheLastOnesMatch = context.matches ? context.matches.find(function(match) {
          return oldMatch.route.path === match.route.path;
        }) : false;
        runHook = !someOfTheLastOnesMatch;
      }
      if (undefinedOrTrue(context.navigateOptions, "callHooks") && runHook) {
        Q(oldMatch.route.hooks.leave.map(function(f) {
          return function(_2, d) {
            return f(function(shouldStop) {
              if (shouldStop === false) {
                context.instance.__markAsClean(context);
              } else {
                d();
              }
            }, context.matches && context.matches.length > 0 ? context.matches.length === 1 ? context.matches[0] : context.matches : void 0);
          };
        }).concat([function() {
          return leaveLoopDone();
        }]));
        return;
      } else {
        leaveLoopDone();
      }
    };
  }), {}, function() {
    return done();
  });
}
function checkForBeforeHook(context, done) {
  if (context.match.route.hooks && context.match.route.hooks.before && undefinedOrTrue(context.navigateOptions, "callHooks")) {
    Q(context.match.route.hooks.before.map(function(f) {
      return function beforeHookInternal(_, d) {
        return f(function(shouldStop) {
          if (shouldStop === false) {
            context.instance.__markAsClean(context);
          } else {
            d();
          }
        }, context.match);
      };
    }).concat([function() {
      return done();
    }]));
  } else {
    done();
  }
}
function callHandler(context, done) {
  if (undefinedOrTrue(context.navigateOptions, "callHandler")) {
    context.match.route.handler(context.match);
  }
  context.instance.updatePageLinks();
  done();
}
function checkForAfterHook(context, done) {
  if (context.match.route.hooks && context.match.route.hooks.after && undefinedOrTrue(context.navigateOptions, "callHooks")) {
    context.match.route.hooks.after.forEach(function(f) {
      return f(context.match);
    });
  }
  done();
}
function checkForAlreadyHook(context, done) {
  var current = context.instance.lastResolved();
  if (current && current[0] && current[0].route === context.match.route && current[0].url === context.match.url && current[0].queryString === context.match.queryString) {
    current.forEach(function(c) {
      if (c.route.hooks && c.route.hooks.already) {
        if (undefinedOrTrue(context.navigateOptions, "callHooks")) {
          c.route.hooks.already.forEach(function(f) {
            return f(context.match);
          });
        }
      }
    });
    done(false);
    return;
  }
  done();
}
function checkForNotFoundHandler(context, done) {
  var notFoundRoute = context.instance._notFoundRoute;
  if (notFoundRoute) {
    context.notFoundHandled = true;
    var _extractGETParameters = extractGETParameters(context.currentLocationPath), url = _extractGETParameters[0], queryString = _extractGETParameters[1];
    var hashString = extractHashFromURL(context.to);
    notFoundRoute.path = clean(url);
    var notFoundMatch = {
      url: notFoundRoute.path,
      queryString,
      hashString,
      data: null,
      route: notFoundRoute,
      params: queryString !== "" ? parseQuery(queryString) : null
    };
    context.matches = [notFoundMatch];
    context.match = notFoundMatch;
  }
  done();
}
function errorOut(context, done) {
  if (!context.resolveOptions || context.resolveOptions.noMatchWarning === false || typeof context.resolveOptions.noMatchWarning === "undefined") console.warn('Navigo: "' + context.currentLocationPath + `" didn't match any of the registered routes.`);
  done();
}
function flushCurrent(context, done) {
  context.instance._setCurrent(null);
  done();
}
function updateState(context, done) {
  if (undefinedOrTrue(context.navigateOptions, "updateState")) {
    context.instance._setCurrent(context.matches);
  }
  done();
}
var foundLifecycle = [checkForAlreadyHook, checkForBeforeHook, callHandler, checkForAfterHook];
var notFoundLifeCycle = [checkForLeaveHook, checkForNotFoundHandler, Q["if"](function(_ref) {
  var notFoundHandled = _ref.notFoundHandled;
  return notFoundHandled;
}, foundLifecycle.concat([updateState]), [errorOut, flushCurrent])];
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function processMatches(context, done) {
  var idx = 0;
  function nextMatch() {
    if (idx === context.matches.length) {
      updateState(context, done);
      return;
    }
    Q(foundLifecycle, _extends$1({}, context, {
      match: context.matches[idx]
    }), function end() {
      idx += 1;
      nextMatch();
    });
  }
  checkForLeaveHook(context, nextMatch);
}
function waitingList(context) {
  context.instance.__markAsClean(context);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var DEFAULT_LINK_SELECTOR = "[data-navigo]";
function Navigo(appRoute, options) {
  var DEFAULT_RESOLVE_OPTIONS = options || {
    strategy: "ONE",
    hash: false,
    noMatchWarning: false,
    linksSelector: DEFAULT_LINK_SELECTOR
  };
  var self2 = this;
  var root = "/";
  var current = null;
  var routes = [];
  var destroyed = false;
  var genericHooks;
  var isPushStateAvailable2 = pushStateAvailable();
  var isWindowAvailable2 = windowAvailable();
  if (!appRoute) {
    console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');
  } else {
    root = clean(appRoute);
  }
  function _checkForAHash(url) {
    if (url.indexOf("#") >= 0) {
      if (DEFAULT_RESOLVE_OPTIONS.hash === true) {
        url = url.split("#")[1] || "/";
      } else {
        url = url.split("#")[0];
      }
    }
    return url;
  }
  function composePathWithRoot(path) {
    return clean(root + "/" + clean(path));
  }
  function createRoute(path, handler, hooks, name) {
    path = isString(path) ? composePathWithRoot(path) : path;
    return {
      name: name || clean(String(path)),
      path,
      handler,
      hooks: accumulateHooks(hooks)
    };
  }
  function on(path, handler, hooks) {
    var _this = this;
    if (typeof path === "object" && !(path instanceof RegExp)) {
      Object.keys(path).forEach(function(p) {
        if (typeof path[p] === "function") {
          _this.on(p, path[p]);
        } else {
          var _path$p = path[p], _handler = _path$p.uses, name = _path$p.as, _hooks = _path$p.hooks;
          routes.push(createRoute(p, _handler, [genericHooks, _hooks], name));
        }
      });
      return this;
    } else if (typeof path === "function") {
      hooks = handler;
      handler = path;
      path = root;
    }
    routes.push(createRoute(path, handler, [genericHooks, hooks]));
    return this;
  }
  function resolve(to, options2) {
    if (self2.__dirty) {
      self2.__waiting.push(function() {
        return self2.resolve(to, options2);
      });
      return;
    } else {
      self2.__dirty = true;
    }
    to = to ? clean(root) + "/" + clean(to) : void 0;
    var context = {
      instance: self2,
      to,
      currentLocationPath: to,
      navigateOptions: {},
      resolveOptions: _extends({}, DEFAULT_RESOLVE_OPTIONS, options2)
    };
    Q([setLocationPath, matchPathToRegisteredRoutes, Q["if"](function(_ref) {
      var matches = _ref.matches;
      return matches && matches.length > 0;
    }, processMatches, notFoundLifeCycle)], context, waitingList);
    return context.matches ? context.matches : false;
  }
  function navigate(to, navigateOptions) {
    if (self2.__dirty) {
      self2.__waiting.push(function() {
        return self2.navigate(to, navigateOptions);
      });
      return;
    } else {
      self2.__dirty = true;
    }
    to = clean(root) + "/" + clean(to);
    var context = {
      instance: self2,
      to,
      navigateOptions: navigateOptions || {},
      resolveOptions: navigateOptions && navigateOptions.resolveOptions ? navigateOptions.resolveOptions : DEFAULT_RESOLVE_OPTIONS,
      currentLocationPath: _checkForAHash(to)
    };
    Q([checkForDeprecationMethods, checkForForceOp, matchPathToRegisteredRoutes, Q["if"](function(_ref2) {
      var matches = _ref2.matches;
      return matches && matches.length > 0;
    }, processMatches, notFoundLifeCycle), updateBrowserURL, waitingList], context, waitingList);
  }
  function navigateByName(name, data, options2) {
    var url = generate(name, data);
    if (url !== null) {
      navigate(url.replace(new RegExp("^/?" + root), ""), options2);
      return true;
    }
    return false;
  }
  function off(what) {
    this.routes = routes = routes.filter(function(r) {
      if (isString(what)) {
        return clean(r.path) !== clean(what);
      } else if (isFunction(what)) {
        return what !== r.handler;
      }
      return String(r.path) !== String(what);
    });
    return this;
  }
  function listen() {
    if (isPushStateAvailable2) {
      this.__popstateListener = function() {
        if (!self2.__freezeListening) {
          resolve();
        }
      };
      window.addEventListener("popstate", this.__popstateListener);
    }
  }
  function destroy() {
    this.routes = routes = [];
    if (isPushStateAvailable2) {
      window.removeEventListener("popstate", this.__popstateListener);
    }
    this.destroyed = destroyed = true;
  }
  function notFound(handler, hooks) {
    self2._notFoundRoute = createRoute("*", handler, [genericHooks, hooks], "__NOT_FOUND__");
    return this;
  }
  function updatePageLinks() {
    if (!isWindowAvailable2) return;
    findLinks().forEach(function(link2) {
      if ("false" === link2.getAttribute("data-navigo") || "_blank" === link2.getAttribute("target")) {
        if (link2.hasListenerAttached) {
          link2.removeEventListener("click", link2.navigoHandler);
        }
        return;
      }
      if (!link2.hasListenerAttached) {
        link2.hasListenerAttached = true;
        link2.navigoHandler = function(e) {
          if ((e.ctrlKey || e.metaKey) && e.target.tagName.toLowerCase() === "a") {
            return false;
          }
          var location2 = link2.getAttribute("href");
          if (typeof location2 === "undefined" || location2 === null) {
            return false;
          }
          if (location2.match(/^(http|https)/) && typeof URL !== "undefined") {
            try {
              var u = new URL(location2);
              location2 = u.pathname + u.search;
            } catch (err) {
            }
          }
          var options2 = parseNavigateOptions(link2.getAttribute("data-navigo-options"));
          if (!destroyed) {
            e.preventDefault();
            e.stopPropagation();
            self2.navigate(clean(location2), options2);
          }
        };
        link2.addEventListener("click", link2.navigoHandler);
      }
    });
    return self2;
  }
  function findLinks() {
    if (isWindowAvailable2) {
      return [].slice.call(document.querySelectorAll(DEFAULT_RESOLVE_OPTIONS.linksSelector || DEFAULT_LINK_SELECTOR));
    }
    return [];
  }
  function link(path) {
    return "/" + root + "/" + clean(path);
  }
  function setGenericHooks(hooks) {
    genericHooks = hooks;
    return this;
  }
  function lastResolved() {
    return current;
  }
  function generate(name, data, options2) {
    var route = routes.find(function(r) {
      return r.name === name;
    });
    var result = null;
    if (route) {
      result = route.path;
      if (data) {
        for (var key in data) {
          result = result.replace(":" + key, data[key]);
        }
      }
      result = !result.match(/^\//) ? "/" + result : result;
    }
    if (result && options2 && !options2.includeRoot) {
      result = result.replace(new RegExp("^/" + root), "");
    }
    return result;
  }
  function getLinkPath(link2) {
    return link2.getAttribute("href");
  }
  function pathToMatchObject(path) {
    var _extractGETParameters = extractGETParameters(clean(path)), url = _extractGETParameters[0], queryString = _extractGETParameters[1];
    var params = queryString === "" ? null : parseQuery(queryString);
    var hashString = extractHashFromURL(path);
    var route = createRoute(url, function() {
    }, [genericHooks], url);
    return {
      url,
      queryString,
      hashString,
      route,
      data: null,
      params
    };
  }
  function getCurrentLocation() {
    return pathToMatchObject(clean(getCurrentEnvURL(root)).replace(new RegExp("^" + root), ""));
  }
  function directMatchWithRegisteredRoutes(path) {
    var context = {
      instance: self2,
      currentLocationPath: path,
      to: path,
      resolveOptions: DEFAULT_RESOLVE_OPTIONS
    };
    matchPathToRegisteredRoutes(context, function() {
    });
    return context.matches ? context.matches : false;
  }
  function directMatchWithLocation(path, currentLocation, annotatePathWithRoot) {
    if (typeof currentLocation !== "undefined" && (typeof annotatePathWithRoot === "undefined" || annotatePathWithRoot)) {
      currentLocation = composePathWithRoot(currentLocation);
    }
    var context = {
      instance: self2,
      to: currentLocation,
      currentLocationPath: currentLocation
    };
    setLocationPath(context, function() {
    });
    if (typeof path === "string") {
      path = typeof annotatePathWithRoot === "undefined" || annotatePathWithRoot ? composePathWithRoot(path) : path;
    }
    var match = matchRoute(context, {
      name: String(path),
      path,
      handler: function handler() {
      },
      hooks: {}
    });
    return match ? match : false;
  }
  function addHook(type, route, func) {
    if (typeof route === "string") {
      route = getRoute(route);
    }
    if (route) {
      if (!route.hooks[type]) route.hooks[type] = [];
      route.hooks[type].push(func);
      return function() {
        route.hooks[type] = route.hooks[type].filter(function(f) {
          return f !== func;
        });
      };
    } else {
      console.warn("Route doesn't exists: " + route);
    }
    return function() {
    };
  }
  function getRoute(nameOrHandler) {
    if (typeof nameOrHandler === "string") {
      return routes.find(function(r) {
        return r.name === composePathWithRoot(nameOrHandler);
      });
    }
    return routes.find(function(r) {
      return r.handler === nameOrHandler;
    });
  }
  function __markAsClean(context) {
    context.instance.__dirty = false;
    if (context.instance.__waiting.length > 0) {
      context.instance.__waiting.shift()();
    }
  }
  this.root = root;
  this.routes = routes;
  this.destroyed = destroyed;
  this.current = current;
  this.__freezeListening = false;
  this.__waiting = [];
  this.__dirty = false;
  this.__markAsClean = __markAsClean;
  this.on = on;
  this.off = off;
  this.resolve = resolve;
  this.navigate = navigate;
  this.navigateByName = navigateByName;
  this.destroy = destroy;
  this.notFound = notFound;
  this.updatePageLinks = updatePageLinks;
  this.link = link;
  this.hooks = setGenericHooks;
  this.extractGETParameters = function(url) {
    return extractGETParameters(_checkForAHash(url));
  };
  this.lastResolved = lastResolved;
  this.generate = generate;
  this.getLinkPath = getLinkPath;
  this.match = directMatchWithRegisteredRoutes;
  this.matchLocation = directMatchWithLocation;
  this.getCurrentLocation = getCurrentLocation;
  this.addBeforeHook = addHook.bind(this, "before");
  this.addAfterHook = addHook.bind(this, "after");
  this.addAlreadyHook = addHook.bind(this, "already");
  this.addLeaveHook = addHook.bind(this, "leave");
  this.getRoute = getRoute;
  this._pathToMatchObject = pathToMatchObject;
  this._clean = clean;
  this._checkForAHash = _checkForAHash;
  this._setCurrent = function(c) {
    return current = self2.current = c;
  };
  listen.call(this);
  updatePageLinks.call(this);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var pubsub$1 = { exports: {} };
var pubsub = pubsub$1.exports;
var hasRequiredPubsub;
function requirePubsub() {
  if (hasRequiredPubsub) return pubsub$1.exports;
  hasRequiredPubsub = 1;
  (function(module2, exports$1) {
    (function(root, factory) {
      var PubSub2 = {};
      if (root.PubSub) {
        PubSub2 = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
      } else {
        root.PubSub = PubSub2;
        factory(PubSub2);
      }
      {
        if (module2 !== void 0 && module2.exports) {
          exports$1 = module2.exports = PubSub2;
        }
        exports$1.PubSub = PubSub2;
        module2.exports = exports$1 = PubSub2;
      }
    })(typeof window === "object" && window || pubsub || commonjsGlobal, function(PubSub2) {
      var messages = {}, lastUid = -1, ALL_SUBSCRIBING_MSG = "*";
      function hasKeys(obj) {
        var key;
        for (key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return true;
          }
        }
        return false;
      }
      function throwException(ex) {
        return function reThrowException() {
          throw ex;
        };
      }
      function callSubscriberWithDelayedExceptions(subscriber, message, data) {
        try {
          subscriber(message, data);
        } catch (ex) {
          setTimeout(throwException(ex), 0);
        }
      }
      function callSubscriberWithImmediateExceptions(subscriber, message, data) {
        subscriber(message, data);
      }
      function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
        var subscribers = messages[matchedMessage], callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions, s;
        if (!Object.prototype.hasOwnProperty.call(messages, matchedMessage)) {
          return;
        }
        for (s in subscribers) {
          if (Object.prototype.hasOwnProperty.call(subscribers, s)) {
            callSubscriber(subscribers[s], originalMessage, data);
          }
        }
      }
      function createDeliveryFunction(message, data, immediateExceptions) {
        return function deliverNamespaced() {
          var topic = String(message), position = topic.lastIndexOf(".");
          deliverMessage(message, message, data, immediateExceptions);
          while (position !== -1) {
            topic = topic.substr(0, position);
            position = topic.lastIndexOf(".");
            deliverMessage(message, topic, data, immediateExceptions);
          }
          deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
      }
      function hasDirectSubscribersFor(message) {
        var topic = String(message), found = Boolean(Object.prototype.hasOwnProperty.call(messages, topic) && hasKeys(messages[topic]));
        return found;
      }
      function messageHasSubscribers(message) {
        var topic = String(message), found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG), position = topic.lastIndexOf(".");
        while (!found && position !== -1) {
          topic = topic.substr(0, position);
          position = topic.lastIndexOf(".");
          found = hasDirectSubscribersFor(topic);
        }
        return found;
      }
      function publish(message, data, sync, immediateExceptions) {
        message = typeof message === "symbol" ? message.toString() : message;
        var deliver = createDeliveryFunction(message, data, immediateExceptions), hasSubscribers = messageHasSubscribers(message);
        if (!hasSubscribers) {
          return false;
        }
        if (sync === true) {
          deliver();
        } else {
          setTimeout(deliver, 0);
        }
        return true;
      }
      PubSub2.publish = function(message, data) {
        return publish(message, data, false, PubSub2.immediateExceptions);
      };
      PubSub2.publishSync = function(message, data) {
        return publish(message, data, true, PubSub2.immediateExceptions);
      };
      PubSub2.subscribe = function(message, func) {
        if (typeof func !== "function") {
          return false;
        }
        message = typeof message === "symbol" ? message.toString() : message;
        if (!Object.prototype.hasOwnProperty.call(messages, message)) {
          messages[message] = {};
        }
        var token = "uid_" + String(++lastUid);
        messages[message][token] = func;
        return token;
      };
      PubSub2.subscribeAll = function(func) {
        return PubSub2.subscribe(ALL_SUBSCRIBING_MSG, func);
      };
      PubSub2.subscribeOnce = function(message, func) {
        var token = PubSub2.subscribe(message, function() {
          PubSub2.unsubscribe(token);
          func.apply(this, arguments);
        });
        return PubSub2;
      };
      PubSub2.clearAllSubscriptions = function clearAllSubscriptions() {
        messages = {};
      };
      PubSub2.clearSubscriptions = function clearSubscriptions(topic) {
        var m;
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            delete messages[m];
          }
        }
      };
      PubSub2.countSubscriptions = function countSubscriptions(topic) {
        var m;
        var token;
        var count = 0;
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            for (token in messages[m]) {
              count++;
            }
            break;
          }
        }
        return count;
      };
      PubSub2.getSubscriptions = function getSubscriptions(topic) {
        var m;
        var list = [];
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            list.push(m);
          }
        }
        return list;
      };
      PubSub2.unsubscribe = function(value) {
        var descendantTopicExists = function(topic) {
          var m2;
          for (m2 in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m2) && m2.indexOf(topic) === 0) {
              return true;
            }
          }
          return false;
        }, isTopic = typeof value === "string" && (Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value)), isToken = !isTopic && typeof value === "string", isFunction2 = typeof value === "function", result = false, m, message, t;
        if (isTopic) {
          PubSub2.clearSubscriptions(value);
          return;
        }
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m)) {
            message = messages[m];
            if (isToken && message[value]) {
              delete message[value];
              result = value;
              break;
            }
            if (isFunction2) {
              for (t in message) {
                if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value) {
                  delete message[t];
                  result = true;
                }
              }
            }
          }
        }
        return result;
      };
    });
  })(pubsub$1, pubsub$1.exports);
  return pubsub$1.exports;
}
var pubsubExports = requirePubsub();
const PubSub$1 = /* @__PURE__ */ getDefaultExportFromCjs(pubsubExports);
const AppBroadcast = Object.freeze({
  // Application Events
  APP: "APP",
  APP_READY: "APP.READY",
  APP_ERROR: "APP.ERROR",
  APP_SIGNOUT: "APP.SIGNOUT",
  APP_AUTH: "APP.AUTH",
  APP_USER_LOADED: "APP.USER.LOADED",
  // Route Navigation Events
  // NOTE: pubsub-js delivers topics hierarchically (publishing 'A.B.C' also notifies
  // subscribers of 'A.B' and 'A'). "Command" topics whose subscribers navigate must NOT be a
  // dotted parent of an event topic that is published on its own, or the event bubbles up and
  // re-triggers the command (a navigation storm). So the command is a `.GO` sibling of its
  // events, never their parent. Do NOT collapse these back to a bare 'ROUTE.NAV'/'AUTH.SIGNUP'.
  ROUTE_NAV: "ROUTE.NAV.GO",
  ROUTE_NAV_BEFORE: "ROUTE.NAV.BEFORE",
  ROUTE_NAV_AFTER: "ROUTE.NAV.AFTER",
  ROUTE_NAV_ERROR: "ROUTE.NAV.ERROR",
  // Authentication Events
  AUTH_SIGNIN: "AUTH.SIGNIN.GO",
  AUTH_SIGNIN_SUCCESS: "AUTH.SIGNIN.SUCCESS",
  AUTH_SIGNIN_FAIL: "AUTH.SIGNIN.FAIL",
  AUTH_SIGNUP: "AUTH.SIGNUP.GO",
  AUTH_SIGNUP_SUCCESS: "AUTH.SIGNUP.SUCCESS",
  AUTH_SIGNUP_FAIL: "AUTH.SIGNUP.FAIL",
  AUTH_VERIFY_LINK: "AUTH.VERIFY.LINK",
  AUTH_SIGNOUT: "AUTH.SIGNOUT.GO",
  AUTH_SIGNOUT_SUCCESS: "AUTH.SIGNOUT.SUCCESS",
  AUTH_FORGOT: "AUTH.FORGOT.GO",
  AUTH_FORGOT_SUCCESS: "AUTH.FORGOT.SUCCESS",
  AUTH_RESETHASH: "AUTH.RESETHASH.GO",
  AUTH_RESETHASH_SUCCESS: "AUTH.RESETHASH.SUCCESS",
  AUTH_RESETHASH_NAV: "AUTH.RESETHASH.NAV",
  AUTH_TOKEN_EXPIRED: "AUTH.TOKEN.EXPIRED",
  AUTH_TOKEN_INVALID: "AUTH.TOKEN.INVALID",
  AUTH_SCOPE_LOADED: "AUTH.SCOPE.LOADED",
  // tenancy scope (/me) resolved + cached
  // Primary and Secondary Nav
  M5T_PRIMARY_NAV: "M5T_PRIMARY_NAV",
  M5T_PRIMARY_NAV_LOGO_TAP: "M5T_PRIMARY_NAV.LOGO_TAP",
  M5T_PRIMARY_NAV_HOVER: "M5T_PRIMARY_NAV.HOVER",
  M5T_PRIMARY_NAV_TAP: "M5T_PRIMARY_NAV.TAP",
  M5T_PRIMARY_NAV_DOUBLE_TAP: "M5T_PRIMARY_NAV.DOUBLE_TAP",
  M5T_PRIMARY_NAV_LONG_TAP: "M5T_PRIMARY_NAV.LONG_TAP",
  // Side Nav (client-saas persona-aware left navigation)
  M5T_SIDE_NAV: "M5T_SIDE_NAV",
  M5T_SIDE_NAV_TAP: "M5T_SIDE_NAV.TAP",
  M5T_SIDE_NAV_COLLAPSE: "M5T_SIDE_NAV.COLLAPSE",
  M5T_SIDE_NAV_LOGO_TAP: "M5T_SIDE_NAV.LOGO_TAP",
  M5T_SIDE_NAV_ORG_SWITCH: "M5T_SIDE_NAV.ORG_SWITCH",
  M5T_SIDE_NAV_FOOTER_ACTION: "M5T_SIDE_NAV.FOOTER_ACTION",
  // UI Events
  UI_LOADING_START: "UI.LOADING.START",
  UI_LOADING_END: "UI.LOADING.END",
  UI_TOAST: "UI.TOAST",
  UI_MODAL_OPEN: "UI.MODAL.OPEN",
  UI_MODAL_CLOSE: "UI.MODAL.CLOSE",
  UI_THEME_CHANGED: "UI.THEME.CHANGED",
  UI_WELCOME_BACK_CLICKED: "UI.WELCOME_BACK_CLICKED",
  // Data Events
  DATA_REFRESH: "DATA.REFRESH",
  DATA_UPDATE: "DATA.UPDATE",
  DATA_ERROR: "DATA.ERROR",
  // I18N Events
  I18N: "I18N",
  I18N_SET_LANG: "I18N.SET_LANG",
  // Conversation Events
  CONVERSATION: "CONVERSATION",
  CONVERSATION_PROMPT: "CONVERSATION.PROMPT",
  // Create JS Switch in app_events at this level.
  CONVERSATION_PROMPT_AGENT_CANVAS: "CONVERSATION.PROMPT.AGENT_CANVAS",
  //  Send this prompt to the agent and canvas
  CONVERSATION_PROMPT_AGENT: "CONVERSATION.PROMPT.AGENT",
  // Send this Prompt to the Agent only
  CONVERSATION_PROMPT_CANVAS: "CONVERSATION.PROMPT.CANVAS",
  // Send this Prompt to the Canvas only
  CONVERSATION_PROMPT_STAGE: "CONVERSATION.PROMPT.STAGE",
  // Render this Prompt in the Prompt Area so the user can change then click send
  CONVERSATION_RESPONSE: "CONVERSATION.RESPONSE",
  // Create JS Switch in app_events at this level.
  CONVERSATION_RESPONSE_CANVAS: "CONVERSATION.RESPONSE.CANVAS",
  // Stream this Reponse to the Canvas
  CONVERSATION_RESPONSE_WORKFLOW: "CONVERSATION.RESPONSE.WORKFLOW",
  //  Stream this Response to the Workflow Engine (tm)
  // Conversation Events
  CANVAS: "CANVAS",
  CANVAS_DO_SCROLL: "CANVAS.DO.SCROLL",
  //
  // Message Events (sseEtherMessage)
  MESSAGE: "MESSAGE",
  MESSAGE_CREATE: "MESSAGE.CREATE",
  // Create new message
  MESSAGE_CREATED: "MESSAGE.CREATED",
  // Message created successfully (payload: {messageId})
  MESSAGE_EDIT: "MESSAGE.EDIT",
  // Edit existing message (payload: {messageId})
  MESSAGE_UPDATED: "MESSAGE.UPDATED",
  // Message updated successfully (payload: {messageId})
  MESSAGE_DELETE: "MESSAGE.DELETE",
  // Delete message (payload: {messageId})
  MESSAGE_DELETED: "MESSAGE.DELETED",
  // Message deleted successfully (payload: {messageId})
  MESSAGE_REFRESH: "MESSAGE.REFRESH"
  // Reload messages
});
const __vite_import_meta_env__ = { "BASE_URL": "./", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "VITE_API_BASE_URL": "http://localhost:3333" };
var define_process_env_default = {};
const FEATURE_FLAGS = Object.freeze({
  // ============================================
  // LocalStorage Keys
  // ============================================
  /**
   * Session user entity storage key
   * @type {string}
   * @default "mvv_session_user"
   */
  FF_SSE_LS_SESSION_USER: "mvv_session_user",
  /**
   * JWT token storage key (managed by mvvLegit)
   * @type {string}
   * @default "mvv"
   * @readonly
   */
  FF_SSE_LS_TOKEN: "mvv",
  /**
   * Application theme storage key
   * @type {string}
   * @default "mvv_theme"
   */
  FF_SSE_LS_THEME: "mvv_theme",
  // ============================================
  // UI/UX Configuration
  // ============================================
  /**
   * Dark-mode kill switch. Real consumer: apps/client-saas/src/core/uiFlagGates.js
   * (resolveInitialTheme()/darkModeEnabled()), read by main.js's initTheme()/
   * toggleTheme() and used to hide the side-nav's "theme" footer button when off.
   * When false, the app always renders light regardless of any 'dark' value
   * already persisted in localStorage from before the flag was flipped off.
   *
   * Not coreMeta-backed — flipping this still needs a code deploy, same as every
   * other flag in this file. It exists so an unwanted dark-mode rollout can be
   * pulled with a one-line revert instead of unwinding the feature commit.
   * @type {boolean}
   * @default true
   */
  FF_SSE_UI_DARK_MODE: true,
  /**
   * Global animation/transition kill switch. Real consumer:
   * apps/client-saas/src/core/uiFlagGates.js (animationsDisabled()), applied by
   * main.js as a `ff-no-animations` class on <html> and enforced in
   * shared/styles/index.css via a `transition:none!important;animation:none!important`
   * override. Does not require touching the ~20 files with their own
   * transition/@keyframes declarations — the class wins on the cascade.
   * @type {boolean}
   * @default true
   */
  FF_SSE_UI_ANIMATIONS: true,
  // ============================================
  // Client Configuration (LaunchLegitController)
  // ============================================
  /**
   * Auth ping interval in milliseconds
   * How often to check if user's token is still valid
   * @type {number}
   * @default 1440000 (24 minutes)
   */
  FF_CLIENT_AUTH_PING_MS: 144e4,
  /**
   * Carousel element ID
   * @type {string}
   * @default "main_carousel_nav"
   */
  FF_CLIENT_CAROUSEL_ID: "main_carousel_nav",
  /**
   * LocalStorage key for compressed entity state
   * @type {string}
   * @default "sse_entity"
   */
  FF_CLIENT_LS_SESSION_ENTITY: "sse_entity",
  /**
   * LocalStorage key for deep-link GUID
   * @type {string}
   * @default "sse_deeplink"
   */
  FF_CLIENT_LS_DEEP_LINK: "sse_deeplink",
  // ============================================
  // Route Names
  // ============================================
  /**
   * Sign-in route name
   * @type {string}
   * @default "signin_route"
   */
  FF_CLIENT_ROUTE_SIGNIN: "signin_route",
  /**
   * Sign-up route name
   * @type {string}
   * @default "signup_route"
   */
  FF_CLIENT_ROUTE_SIGNUP: "signup_route",
  /**
   * Home route name
   * @type {string}
   * @default "home_route"
   */
  FF_CLIENT_ROUTE_HOME: "home_route",
  /**
   * Reset password (authenticated) route name
   * @type {string}
   * @default "resethash_route"
   */
  FF_CLIENT_ROUTE_RESET_HASH: "resethash_route",
  /**
   * Reset password (forgot flow) route name
   * @type {string}
   * @default "resetforgot_route"
   */
  FF_CLIENT_ROUTE_RESET_FORGOT: "resetforgot_route",
  /**
   * Sign-out route name
   * @type {string}
   * @default "signout_route"
   */
  FF_CLIENT_ROUTE_SIGNOUT: "signout_route",
  /**
   * Error route name
   * @type {string}
   * @default "error_route"
   */
  FF_CLIENT_ROUTE_ERROR: "error_route",
  /**
   * Email verification prompt route name
   * @type {string}
   * @default "verf_link_route"
   */
  FF_CLIENT_ROUTE_VERF_LINK: "verf_link_route",
  /**
   * Offline status route name
   * @type {string}
   * @default "offline_route"
   */
  FF_CLIENT_ROUTE_OFFLINE: "offline_route",
  /**
   * Protected routes (require authentication)
   * @type {Array<string>}
   */
  FF_CLIENT_PROTECTED_ROUTES: [
    "home_route",
    "resethash_route",
    "signout_route",
    "user_management_route"
  ],
  // ============================================
  // API Endpoints
  // ============================================
  /**
   * Sign-in endpoint path
   * @type {string}
   * @default "/m5t/v5/acctEntity/signin"
   */
  FF_CLIENT_ENDPOINT_SIGNIN: "/m5t/v5/acctEntity/signin",
  /**
   * Sign-out endpoint path
   * @type {string}
   * @default "/m5t/v5/acctEntity/signout"
   */
  FF_CLIENT_ENDPOINT_SIGNOUT: "/m5t/v5/acctEntity/signout",
  /**
   * Sign-up endpoint path
   * @type {string}
   * @default "/m5t/v5/acctEntity/"
   */
  FF_CLIENT_ENDPOINT_SIGNUP: "/m5t/v5/acctEntity/",
  /**
   * Reset password (authenticated) endpoint path
   * @type {string}
   * @default "/m5t/v5/acctEntity/resetHash"
   */
  FF_CLIENT_ENDPOINT_RESET_HASH: "/m5t/v5/acctEntity/resetHash",
  /**
   * Reset password (forgot flow) endpoint path
   * @type {string}
   * @default "/m5t/v5/acctEntity/resetforgot"
   */
  FF_CLIENT_ENDPOINT_RESET_FORGOT: "/m5t/v5/acctEntity/resetforgot",
  /**
   * Auth ping endpoint path
   * @type {string}
   * @default "/ping"
   */
  FF_CLIENT_ENDPOINT_PING: "/ping",
  /**
   * Metering endpoint path
   * @type {string}
   * @default "/m5t/v5/coreMeter/"
   */
  FF_CLIENT_ENDPOINT_METER: "/m5t/v5/coreMeter/",
  // ============================================
  // Metering Captions
  // ============================================
  /**
   * Deep-link access metering caption
   * @type {string}
   * @default "deep_link_access"
   */
  FF_CLIENT_METER_DEEP_LINK: "deep_link_access",
  /**
   * Client-initiated signout metering caption
   * @type {string}
   * @default "signout_client_initiated"
   */
  FF_CLIENT_METER_SIGNOUT_CLIENT: "signout_client_initiated",
  /**
   * Server-initiated signout metering caption
   * @type {string}
   * @default "signout_server_initiated"
   */
  FF_CLIENT_METER_SIGNOUT_SERVER: "signout_server_initiated",
  /**
   * Successful auth ping metering caption
   * @type {string}
   * @default "ping_auth_success"
   */
  FF_CLIENT_METER_PING_SUCCESS: "ping_auth_success",
  /**
   * Failed auth ping metering caption
   * @type {string}
   * @default "ping_auth_failure"
   */
  FF_CLIENT_METER_PING_FAILURE: "ping_auth_failure",
  // ============================================
  // Internationalization (i18n) Configuration
  // ============================================
  /**
   * Product identifier for microcopy resolution
   * @type {string}
   * @default "SSE"
   * @description StreamSyncEngage product identifier
   */
  FF_SSE_I18N_PRODUCT: "SSE",
  /**
   * Whitelabel identifier for microcopy resolution
   * @type {string}
   * @default "M5T"
   * @description Whitelabel/brand identifier (M5T, custom client brands, etc.)
   */
  FF_SSE_I18N_WHITELABEL: "M5T",
  /**
   * Current language code for microcopy resolution
   * @type {string}
   * @default "en"
   * @description ISO language code (en, es, zh-Hans, etc.)
   */
  FF_SSE_I18N_LANG: "en",
  /**
   * Delay in milliseconds before applying i18n to DOM
   * @type {number}
   * @default 100
   * @description Delay to ensure DOM/Shadow DOM is fully hydrated before applying microcopy
   */
  FF_SSE_I18N_APPLY_DELAY_MS: 100,
  /**
   * Enable i18n debug logging
   * @type {boolean}
   * @default false
   */
  FF_SSE_I18N_DEBUG: false,
  /**
   * LocalStorage key for user language preference
   * @type {string}
   * @default "mvv_user_lang"
   */
  FF_SSE_LS_USER_LANG: "mvv_user_lang",
  /**
   * LocalStorage key for whitelabel preference
   * @type {string}
   * @default "mvv_whitelabel"
   */
  FF_SSE_LS_WHITELABEL: "mvv_whitelabel",
  // ============================================
  // API Rate Limiting
  // ============================================
  // Defaults layer for apps/service-api/src/middleware/rateLimits.js. coreMeta
  // rows of the same token override these at runtime (5-min ConfigLoader TTL);
  // env RATE_LIMIT_ENFORCE=false overrides everything as an emergency stop.
  //
  // Every limiter ships OBSERVE-ONLY (*_ENFORCE: false): the check runs, the hit
  // is metered, the request is allowed through. Enable one limiter at a time,
  // starting with SIGNIN, and watch coreMeter between each.
  //
  // *_LIMIT values are re-read per request, so retuning a threshold needs no
  // deploy. Window sizes are NOT runtime-tunable (see the middleware header).
  /** Enforce signin brute-force limits (per-IP + per-email, failures only). */
  // ── RATE LIMITING IS NOW ENFORCED ────────────────────────────────────────────
  // Every one of these shipped as `false`, i.e. observe-only: the limiters counted
  // and logged, and let the request through. Nothing was actually limited. Turned on
  // 2026-08-14 at ZERO CUSTOMERS, deliberately — before any real traffic depends on
  // the current behaviour and while a wrong number costs nothing to correct.
  //
  // The LIMIT values below are unchanged. Only enforcement moved, so the ceilings are
  // the ones already reasoned about at each limiter's definition in
  // middleware/rateLimits.js; see there for why each number is what it is.
  //
  // ConfigLoader resolves coreMeta -> THIS FILE -> the call-site fallback, so a
  // coreMeta row still overrides any of these per environment without a deploy, and
  // EMERGENCY_OFF in rateLimits.js remains the global kill switch.
  FF_API_RATELIMIT_SIGNIN_ENFORCE: true,
  /** Failed signins per IP per 15 min. */
  FF_API_RATELIMIT_SIGNIN_IP_LIMIT: 20,
  /** Failed signins per email per 15 min. */
  FF_API_RATELIMIT_SIGNIN_EMAIL_LIMIT: 10,
  /** Enforce password-reset / signup limits. */
  FF_API_RATELIMIT_FORGOT_ENFORCE: true,
  /** Reset+signup requests per IP per hour. */
  FF_API_RATELIMIT_FORGOT_IP_LIMIT: 15,
  /** Reset+signup requests per email per hour. */
  FF_API_RATELIMIT_FORGOT_EMAIL_LIMIT: 5,
  /** Enforce public lead-capture limits. Revenue path — tune generously. */
  FF_API_RATELIMIT_CAPTURE_ENFORCE: true,
  /** Captures per magnet per IP per hour. */
  FF_API_RATELIMIT_CAPTURE_LIMIT: 30,
  /** Enforce public funnel-beacon limits. */
  FF_API_RATELIMIT_EVENT_ENFORCE: true,
  /** Beacons per magnet per IP per hour. */
  FF_API_RATELIMIT_EVENT_LIMIT: 600,
  /** Enforce the public CSP-block self-report pixel's limits. */
  FF_API_RATELIMIT_CSP_PING_ENFORCE: true,
  /** Pings per magnet per IP per hour. */
  FF_API_RATELIMIT_CSP_PING_LIMIT: 30,
  /** Enforce public passkey-authentication limits (no email to key a second limiter on). */
  FF_API_RATELIMIT_WEBAUTHN_AUTH_ENFORCE: true,
  /** Passkey sign-in attempts per IP per 15 min. */
  FF_API_RATELIMIT_WEBAUTHN_AUTH_IP_LIMIT: 20,
  /**
   * Enforce limits on integrations.js's public surface: Google Ads/GA4/
   * Calendly OAuth callbacks plus the Calendly/CallRail webhook receivers.
   * No appGuid to key on, so IP-only.
   */
  FF_API_RATELIMIT_INTEGRATIONS_ENFORCE: true,
  /** Callback/webhook requests per IP per 15 min. */
  FF_API_RATELIMIT_INTEGRATIONS_LIMIT: 60,
  /**
   * Enforce limits on m5mQuestionnaireResponse's public surface: the
   * client-facing fill-out link (GET definition+draft, POST submit). No
   * appGuid to key on, so IP-only.
   */
  FF_API_RATELIMIT_QUESTIONNAIRE_ENFORCE: true,
  /** Fill-out requests per IP per 15 min. */
  FF_API_RATELIMIT_QUESTIONNAIRE_LIMIT: 30,
  /**
   * Enforce limits on m5mDeliverable's public surface: the client-facing
   * review link (GET plan+review, POST submit, PUT edit). No appGuid to key
   * on, so IP-only — same posture as the questionnaire's.
   */
  FF_API_RATELIMIT_DELIVERABLE_ENFORCE: true,
  /** Review-link requests per IP per 15 min. */
  FF_API_RATELIMIT_DELIVERABLE_LIMIT: 30,
  /**
   * Enforce limits on the public pairing-code exchange (POST /magnet/pair), the
   * one unauthenticated endpoint that issues a credential. IP-keyed; a real site
   * calls it once at setup.
   */
  FF_API_RATELIMIT_PAIRING_ENFORCE: true,
  /** Pairing attempts per IP per 15 min. */
  FF_API_RATELIMIT_PAIRING_LIMIT: 20,
  /**
   * Enforce limits on credential-authenticated site operations (/magnet/site/*).
   * The caller already holds a per-site credential, so this bounds a runaway
   * install rather than a guessing attack. IP-keyed.
   */
  FF_API_RATELIMIT_SITE_OPS_ENFORCE: true,
  /** Site operations per IP per 15 min. */
  FF_API_RATELIMIT_SITE_OPS_LIMIT: 120,
  /** Enforce per-account ceiling on tenancy-scoped routers. */
  FF_API_RATELIMIT_AUTHENTICATED_ENFORCE: true,
  /** Requests per account per 15 min. */
  FF_API_RATELIMIT_AUTHENTICATED_LIMIT: 600,
  /**
   * Require an Origin/Referer (or a valid per-app X-M5M-Key) on the public
   * magnet capture/event endpoints.
   *
   * OFF = observe-only: origin-less requests are still allowed but recorded as
   * magnet_originless_request in coreMeter. Capture is the revenue path, so
   * measure real origin-less traffic before switching this on.
   * Env MAGNET_REQUIRE_ORIGIN=false forces observe-only regardless.
   */
  FF_API_MAGNET_REQUIRE_ORIGIN_ENFORCE: false,
  /** Enforce the coarse per-IP net in front of all routes. */
  FF_API_RATELIMIT_GLOBAL_ENFORCE: true,
  /** Requests per IP per 15 min. */
  FF_API_RATELIMIT_GLOBAL_LIMIT: 2e3
});
function getFlag(flagName, defaultValue = null) {
  if (flagName in FEATURE_FLAGS) {
    return FEATURE_FLAGS[flagName];
  }
  if (typeof process !== "undefined" && define_process_env_default && define_process_env_default[flagName]) {
    const envValue = define_process_env_default[flagName];
    if (envValue === "true") return true;
    if (envValue === "false") return false;
    if (!isNaN(envValue)) return Number(envValue);
    return envValue;
  }
  if (typeof import.meta !== "undefined" && __vite_import_meta_env__ && __vite_import_meta_env__[flagName]) {
    const envValue = __vite_import_meta_env__[flagName];
    if (envValue === "true") return true;
    if (envValue === "false") return false;
    if (!isNaN(envValue)) return Number(envValue);
    return envValue;
  }
  return defaultValue;
}
function isEnabled(flagName) {
  return getFlag(flagName, false) === true;
}
function getAllFlags() {
  return { ...FEATURE_FLAGS };
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    FEATURE_FLAGS,
    getFlag,
    isEnabled,
    getAllFlags
  };
}
const TYPE_STYLE = {
  success: { border: "var(--color-success, #009473)", bg: "var(--color-success-soft, rgba(0,148,115,0.10))", icon: "check_circle" },
  danger: { border: "var(--color-danger, #DD4124)", bg: "var(--color-danger-soft, rgba(221,65,36,0.09))", icon: "error" },
  error: { border: "var(--color-danger, #DD4124)", bg: "var(--color-danger-soft, rgba(221,65,36,0.09))", icon: "error" },
  warning: { border: "var(--color-warning, #D97706)", bg: "var(--color-warning-soft, #FEF3C7)", icon: "warning" },
  info: { border: "var(--color-info, #0D9488)", bg: "var(--color-info-soft, #CCFBF1)", icon: "info" }
};
const DISMISS_MS = 4500;
const EXIT_MS = 220;
let stack = null;
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-toast-styles";
  style.textContent = `
    .m5t-toast-stack { position: fixed; top: 16px; right: 16px; z-index: 6000; display: flex; flex-direction: column; gap: 10px; pointer-events: none; max-width: min(380px, calc(100vw - 32px)); }
    .m5t-toast { pointer-events: auto; display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); border: 1px solid; box-shadow: 0 8px 24px rgba(11,18,32,0.16); font-size: 0.86rem; line-height: 1.4; color: var(--color-text, #0B1220); opacity: 0; transform: translateX(16px); transition: opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease; }
    .m5t-toast.is-in { opacity: 1; transform: none; }
    .m5t-toast.is-out { opacity: 0; transform: translateX(16px); }
    .m5t-toast .material-symbols-outlined { font-size: 19px; flex: 0 0 auto; margin-top: 1px; }
    .m5t-toast__msg { flex: 1 1 auto; min-width: 0; word-break: break-word; }
    .m5t-toast__close { flex: 0 0 auto; appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); padding: 2px; line-height: 1; font-size: 17px; border-radius: 6px; }
    .m5t-toast__close:hover { color: var(--color-text, #0B1220); background: var(--color-surface-2, rgba(11,18,32,0.06)); }
    @media (prefers-reduced-motion: reduce) { .m5t-toast { transition: none; } }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function ensureStack() {
  if (stack && document.body.contains(stack)) return stack;
  stack = document.createElement("div");
  stack.className = "m5t-toast-stack";
  stack.setAttribute("role", "status");
  stack.setAttribute("aria-live", "polite");
  document.body.appendChild(stack);
  return stack;
}
function showToast(data) {
  const message = data && data.message;
  if (!message) return;
  ensureStyles();
  const style = TYPE_STYLE[data.type] || TYPE_STYLE.info;
  const el = document.createElement("div");
  el.className = "m5t-toast";
  el.style.borderColor = style.border;
  el.style.background = style.bg;
  el.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true" style="color:${style.border}">${style.icon}</span><span class="m5t-toast__msg"></span><button type="button" class="m5t-toast__close" aria-label="Dismiss"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>`;
  el.querySelector(".m5t-toast__msg").textContent = String(message);
  const container = ensureStack();
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add("is-in"));
  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(timer);
    el.classList.remove("is-in");
    el.classList.add("is-out");
    setTimeout(() => el.remove(), EXIT_MS);
  };
  const timer = setTimeout(dismiss, DISMISS_MS);
  el.querySelector(".m5t-toast__close").addEventListener("click", dismiss);
}
function initWebComponentEventBridge() {
  const handleWebComponentEvent = (eventType) => {
    return (e) => {
      const topic = e.detail?.pubsubTopic;
      if (topic) {
        PubSub$1.publish(topic, e.detail);
      }
    };
  };
  document.addEventListener("nav-select", handleWebComponentEvent());
  document.addEventListener("logo-click", handleWebComponentEvent());
  document.addEventListener("nav-hover", handleWebComponentEvent());
  document.addEventListener("nav-double-tap", handleWebComponentEvent());
  document.addEventListener("nav-long-tap", handleWebComponentEvent());
  document.addEventListener("message-sent", handleWebComponentEvent());
}
function initAppEvents() {
  console.log("[AppEvents] Initializing event listeners...");
  PubSub$1.subscribe(AppBroadcast.APP_READY, (msg, data) => {
    console.log("[AppEvents] APP_READY:", data);
  });
  PubSub$1.subscribe(AppBroadcast.APP_ERROR, (msg, data) => {
    console.error("[AppEvents] APP_ERROR:", data);
  });
  PubSub$1.subscribe(AppBroadcast.APP_SIGNOUT, (msg, data) => {
    console.log("[AppEvents] APP_SIGNOUT:", data);
  });
  PubSub$1.subscribe(AppBroadcast.ROUTE_NAV_BEFORE, (msg, data) => {
    console.log("[AppEvents] ROUTE_NAV_BEFORE:", data);
    PubSub$1.publish(AppBroadcast.UI_LOADING_START);
  });
  PubSub$1.subscribe(AppBroadcast.ROUTE_NAV_AFTER, (msg, data) => {
    console.log("[AppEvents] ROUTE_NAV_AFTER:", data);
    PubSub$1.publish(AppBroadcast.UI_LOADING_END);
  });
  PubSub$1.subscribe(AppBroadcast.ROUTE_NAV_ERROR, (msg, data) => {
    console.error("[AppEvents] ROUTE_NAV_ERROR:", data);
    PubSub$1.publish(AppBroadcast.APP_ERROR, {
      message: "Navigation error",
      details: data
    });
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNIN_SUCCESS, (msg, data) => {
    console.log("[AppEvents] AUTH_SIGNIN_SUCCESS:", data);
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNIN_FAIL, (msg, data) => {
    console.error("[AppEvents] AUTH_SIGNIN_FAIL:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: data.message || "Sign in failed",
      type: "danger"
    });
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNUP_SUCCESS, (msg, data) => {
    console.log("[AppEvents] AUTH_SIGNUP_SUCCESS:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: "Account created! Please check your email to verify.",
      type: "success"
    });
    PubSub$1.publish(AppBroadcast.AUTH_VERIFY_LINK);
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_VERIFY_LINK, (msg, data) => {
    console.log("[AppEvents] AUTH_VERIFY_LINK: Navigating to verf-link route");
    if (window.router) {
      window.router.navigate("/verf-link");
    }
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNUP_FAIL, (msg, data) => {
    console.error("[AppEvents] AUTH_SIGNUP_FAIL:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: data.message || "Sign up failed",
      type: "danger"
    });
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNOUT_SUCCESS, (msg, data) => {
    console.log("[AppEvents] AUTH_SIGNOUT_SUCCESS:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: "Signed out successfully",
      type: "info"
    });
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNUP, (msg, data) => {
    console.log("[AppEvents] AUTH_SIGNUP: Navigating to signup route");
    if (window.router) {
      window.router.navigate("/signup");
    }
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_FORGOT, (msg, data) => {
    console.log("[AppEvents] AUTH_FORGOT: Navigating to forgot route");
    if (window.router) {
      window.router.navigate("/forgot");
    }
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_FORGOT_SUCCESS, (msg, data) => {
    console.log("[AppEvents] AUTH_FORGOT_SUCCESS:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: "Password reset email sent!",
      type: "success"
    });
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_RESETHASH_NAV, (msg, data) => {
    console.log("[AppEvents] AUTH_RESETHASH_NAV: Navigating to resethash route");
    if (window.router) {
      window.router.navigate("/resethash");
    }
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_RESETHASH_SUCCESS, (msg, data) => {
    console.log("[AppEvents] AUTH_RESETHASH_SUCCESS:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: "Password reset successfully! Please sign in.",
      type: "success"
    });
  });
  PubSub$1.subscribe(AppBroadcast.AUTH_TOKEN_EXPIRED, (msg, data) => {
    console.warn("[AppEvents] AUTH_TOKEN_EXPIRED:", data);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: "Session expired. Please sign in again.",
      type: "warning"
    });
  });
  PubSub$1.subscribe(AppBroadcast.I18N_SET_LANG, (msg, data) => {
    console.log("[AppEvents] I18N_SET_LANG:", data);
    const { langCode } = data;
    if (!langCode) {
      console.error("[AppEvents] No langCode provided in I18N_SET_LANG event");
      return;
    }
    if (window.I18nController && typeof window.I18nController.setLanguage === "function") {
      try {
        window.I18nController.setLanguage(langCode);
        console.log("[AppEvents] Language changed successfully to:", langCode);
        PubSub$1.publish(AppBroadcast.UI_TOAST, {
          message: `Language changed to ${langCode}`,
          type: "success"
        });
      } catch (error) {
        console.error("[AppEvents] Error changing language:", error);
        PubSub$1.publish(AppBroadcast.UI_TOAST, {
          message: `Failed to change language: ${error.message}`,
          type: "danger"
        });
      }
    } else {
      console.error("[AppEvents] I18nController not available");
    }
  });
  PubSub$1.subscribe("CONVERSATION.PROMPT", (msg, data) => {
    const subTopic = msg.split(".")[2];
    console.log(`[AppEvents] CONVERSATION.PROMPT.${subTopic}:`, data);
    if (!data || !data.message) {
      console.warn("[AppEvents] CONVERSATION.PROMPT received without message data");
      return;
    }
    switch (subTopic) {
      case "CANVAS":
        console.log("[AppEvents] Display prompt in canvas:", data.message);
        addChatBubbleToCanvas(data.message, "user", data.timestamp);
        PubSub$1.publish(AppBroadcast.CANVAS_DO_SCROLL);
        break;
      case "AGENT":
        console.log("[AppEvents] Agent prompt (no implementation):", data.message);
        break;
      case "AGENT_CANVAS":
        console.log("[AppEvents] Display message in canvas:", data.message);
        addChatBubbleToCanvas(data.message, "user", data.timestamp);
        PubSub$1.publish(AppBroadcast.CANVAS_DO_SCROLL);
        break;
      case "STAGE":
        console.log("[AppEvents] Stage prompt for editing:", data.message);
        break;
      default:
        console.log(`[AppEvents] Unhandled CONVERSATION.PROMPT sub-topic: ${subTopic}`);
        break;
    }
  });
  PubSub$1.subscribe("CONVERSATION.RESPONSE", (msg, data) => {
    const subTopic = msg.split(".")[2];
    console.log(`[AppEvents] CONVERSATION.RESPONSE.${subTopic}:`, data);
    if (!data || !data.message) {
      console.warn("[AppEvents] CONVERSATION.RESPONSE received without message data");
      return;
    }
    switch (subTopic) {
      case "CANVAS":
        console.log("[AppEvents] Display response in canvas:", data.message);
        addChatBubbleToCanvas(data.message, "assistant", data.timestamp, data.streaming);
        break;
      case "WORKFLOW":
        console.log("[AppEvents] Send response to workflow engine:", data.message);
        break;
      default:
        console.log(`[AppEvents] Unhandled CONVERSATION.RESPONSE sub-topic: ${subTopic}`);
        break;
    }
  });
  PubSub$1.subscribe(AppBroadcast.UI_LOADING_START, (msg, data) => {
    const loader = document.getElementById("app-loader");
    if (loader) loader.classList.add("active");
  });
  PubSub$1.subscribe(AppBroadcast.UI_LOADING_END, (msg, data) => {
    const loader = document.getElementById("app-loader");
    if (loader) loader.classList.remove("active");
  });
  PubSub$1.subscribe(AppBroadcast.UI_TOAST, (msg, data) => {
    showToast(data);
  });
  PubSub$1.subscribe(AppBroadcast.UI_WELCOME_BACK_CLICKED, () => {
    console.log("[AppEvents] UI_WELCOME_BACK_CLICKED");
    const sMsg = "0.1";
    const curYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (typeof neodigmToast !== "undefined") {
      neodigmToast.q(`${sMsg} 8/19/2026, 2:28:51 PM|© ${curYear} Mach Five Tech`, "night");
    }
  });
  initWebComponentEventBridge();
  PubSub$1.subscribe("M5T_PRIMARY_NAV", (msg, data) => {
    const subTopic = msg.split(".")[1];
    switch (subTopic) {
      case "TAP":
        handlePrimaryNavTap(data);
        break;
      case "LOGO_TAP":
        handlePrimaryNavLogoTap();
        break;
      case "HOVER":
        break;
      case "DOUBLE_TAP":
        break;
      case "LONG_TAP":
        break;
      default:
        console.log(`[AppEvents] Unhandled M5T_PRIMARY_NAV sub-topic: ${subTopic}`);
        break;
    }
  });
  function handlePrimaryNavTap(data) {
    const { token, level, primaryToken } = data;
    switch (token) {
      // Profile secondary navigation - Password Reset
      case "RESET_PASSWORD":
        console.log("[AppEvents] Password reset requested");
        PubSub$1.publish(AppBroadcast.AUTH_RESETHASH_NAV);
        break;
      // Profile secondary navigation - Sign Out
      case "SIGN_OUT":
        console.log("[AppEvents] Sign out requested");
        if (window.router) {
          window.router.navigate("/signout");
        }
        break;
      // Default handler - log for debugging
      default:
        console.log(`[AppEvents] Navigation: ${level} -> ${token}`, { primaryToken });
        break;
    }
  }
  function handlePrimaryNavLogoTap(data) {
    const sMsg = "0.1";
    const curYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (typeof neodigmToast !== "undefined") {
      neodigmToast.q(`${sMsg} 8/19/2026, 2:28:51 PM|© ${curYear} Mach Five Tech`, "night", 5e3);
    }
  }
  PubSub$1.subscribe(AppBroadcast.AUTH_SIGNOUT, (msg, data) => {
    console.log("[AppEvents] AUTH_SIGNOUT: Clearing session_user from localStorage");
    localStorage.removeItem(FEATURE_FLAGS.FF_SSE_LS_SESSION_USER);
  });
  console.log("[AppEvents] Event listeners initialized");
}
function addChatBubbleToCanvas(message, type = "user", timestamp = null, streaming = false) {
  const chatMessages = document.getElementById("chat-messages");
  if (!chatMessages) {
    console.warn("[AppEvents] chat-messages element not found - may not be on home route");
    return;
  }
  if (!timestamp) {
    timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
  }
  if (streaming && type === "assistant") {
    const firstBubble = chatMessages.firstElementChild;
    if (firstBubble && firstBubble.tagName.toLowerCase() === "m5t-chat-response") {
      firstBubble.setAttribute("message", message);
      console.log(`[AppEvents] Updated streaming ${type} bubble (${message.length} chars)`);
      return;
    }
  }
  let bubble;
  if (type === "user" || type === "prompt") {
    bubble = document.createElement("m5t-chat-prompt");
  } else {
    bubble = document.createElement("m5t-chat-response");
  }
  bubble.setAttribute("message", message);
  bubble.setAttribute("timestamp", timestamp);
  chatMessages.prepend(bubble);
  console.log(`[AppEvents] Added ${type} bubble to canvas (${message.length} chars)`);
}
function isInviteLink(search = window.location.search) {
  const params = new URLSearchParams(search || "");
  return !!(params.get("uid") && params.get("token"));
}
function isQuestionnaireLink(search = window.location.search) {
  const params = new URLSearchParams(search || "");
  return !!(params.get("qr") && params.get("token"));
}
function getQuestionnaireLinkParams(search = window.location.search) {
  const params = new URLSearchParams(search || "");
  const guid = params.get("qr");
  const token = params.get("token");
  return guid && token ? { guid, token } : null;
}
function isDeliverableLink(search = window.location.search) {
  const params = new URLSearchParams(search || "");
  return !!(params.get("dl") && params.get("token"));
}
function getDeliverableLinkParams(search = window.location.search) {
  const params = new URLSearchParams(search || "");
  const guid = params.get("dl");
  const token = params.get("token");
  return guid && token ? { guid, token } : null;
}
const PUBLIC_TOKEN_LANDINGS = Object.freeze([
  Object.freeze({ name: "invite", matches: isInviteLink }),
  Object.freeze({ name: "questionnaire", matches: isQuestionnaireLink }),
  Object.freeze({ name: "deliverable", matches: isDeliverableLink })
]);
function publicLandingFor(search = window.location.search) {
  return PUBLIC_TOKEN_LANDINGS.find((landing) => landing.matches(search)) || null;
}
function isPublicTokenLanding(search = window.location.search) {
  return publicLandingFor(search) !== null;
}
function shouldSuppressAuthRedirect(_routeName, search = window.location.search) {
  return isPublicTokenLanding(search);
}
const EntityClasses = Object.freeze({
  admin_root_role: {
    value: 100,
    label: "Administrator",
    desc: "Mach Five platform staff — full access across every organization"
  },
  client_standard_role: {
    value: 0,
    label: "Client",
    desc: "Everyone else — what they can do comes from their organization membership, not this class"
  }
});
function getRoleByName(name) {
  return EntityClasses[name] || null;
}
function isAdminRole(roleValue) {
  return roleValue >= 50;
}
const MEMBER_ROLES = Object.freeze({
  owner: { value: "owner", rank: 30, label: "Owner" },
  admin: { value: "admin", rank: 20, label: "Admin" },
  member: { value: "member", rank: 10, label: "Member" },
  viewer: { value: "viewer", rank: 0, label: "Viewer" }
});
const CAPABILITIES = Object.freeze({
  VIEW_DASHBOARD: "view_dashboard",
  VIEW_MAGNETS: "view_magnets",
  PROVISION_MAGNETS: "provision_magnets",
  // create new magnets
  MANAGE_MAGNETS: "manage_magnets",
  // edit/configure/flow-builder
  VIEW_CONVERSATIONS: "view_conversations",
  VIEW_STATS: "view_stats",
  VIEW_AD_METRICS: "view_ad_metrics",
  CONNECT_AD_ACCOUNTS: "connect_ad_accounts",
  CREATE_CLIENT_ACCOUNTS: "create_client_accounts",
  // reseller creating managed clients
  MANAGE_TEAM: "manage_team",
  // invite/manage org members
  VIEW_BILLING: "view_billing",
  MANAGE_BILLING: "manage_billing"
});
const C = CAPABILITIES;
const ALL_CAPABILITIES = Object.freeze(Object.values(C));
const VIEW_ONLY = Object.freeze([
  C.VIEW_DASHBOARD,
  C.VIEW_MAGNETS,
  C.VIEW_CONVERSATIONS,
  C.VIEW_STATS,
  C.VIEW_AD_METRICS
]);
Object.freeze([
  C.PROVISION_MAGNETS,
  C.MANAGE_MAGNETS,
  C.CONNECT_AD_ACCOUNTS,
  C.CREATE_CLIENT_ACCOUNTS,
  C.MANAGE_TEAM,
  C.MANAGE_BILLING
]);
Object.freeze([
  C.VIEW_DASHBOARD,
  C.VIEW_MAGNETS,
  C.VIEW_CONVERSATIONS,
  C.VIEW_STATS,
  C.VIEW_AD_METRICS,
  C.VIEW_BILLING
]);
const CAPABILITY_MATRIX = Object.freeze({
  reseller_org: {
    owner: ALL_CAPABILITIES,
    admin: [
      C.VIEW_DASHBOARD,
      C.VIEW_MAGNETS,
      C.PROVISION_MAGNETS,
      C.MANAGE_MAGNETS,
      C.VIEW_CONVERSATIONS,
      C.VIEW_STATS,
      C.VIEW_AD_METRICS,
      C.CONNECT_AD_ACCOUNTS,
      C.CREATE_CLIENT_ACCOUNTS,
      C.MANAGE_TEAM,
      C.VIEW_BILLING
    ],
    member: [
      C.VIEW_DASHBOARD,
      C.VIEW_MAGNETS,
      C.PROVISION_MAGNETS,
      C.MANAGE_MAGNETS,
      C.VIEW_CONVERSATIONS,
      C.VIEW_STATS,
      C.VIEW_AD_METRICS
    ],
    viewer: VIEW_ONLY
  },
  // Managed clients are READ-ONLY by decision (resellers provision for them).
  managed_client: {
    owner: [...VIEW_ONLY, C.VIEW_BILLING],
    admin: [...VIEW_ONLY, C.VIEW_BILLING],
    member: VIEW_ONLY,
    viewer: VIEW_ONLY
  },
  saas_org: {
    owner: [
      C.VIEW_DASHBOARD,
      C.VIEW_MAGNETS,
      C.PROVISION_MAGNETS,
      C.MANAGE_MAGNETS,
      C.VIEW_CONVERSATIONS,
      C.VIEW_STATS,
      C.VIEW_AD_METRICS,
      C.CONNECT_AD_ACCOUNTS,
      C.MANAGE_TEAM,
      C.VIEW_BILLING,
      C.MANAGE_BILLING
    ],
    admin: [
      C.VIEW_DASHBOARD,
      C.VIEW_MAGNETS,
      C.PROVISION_MAGNETS,
      C.MANAGE_MAGNETS,
      C.VIEW_CONVERSATIONS,
      C.VIEW_STATS,
      C.VIEW_AD_METRICS,
      C.CONNECT_AD_ACCOUNTS,
      C.MANAGE_TEAM,
      C.VIEW_BILLING
    ],
    member: [
      C.VIEW_DASHBOARD,
      C.VIEW_MAGNETS,
      C.PROVISION_MAGNETS,
      C.MANAGE_MAGNETS,
      C.VIEW_CONVERSATIONS,
      C.VIEW_STATS
    ],
    viewer: VIEW_ONLY
  }
});
function isPlatformAdmin(entityClassName) {
  const role = getRoleByName(entityClassName);
  return !!role && isAdminRole(role.value);
}
function resolveCapabilities({ entityClass, orgChannel, memberRole } = {}) {
  if (isPlatformAdmin(entityClass)) {
    return [...ALL_CAPABILITIES];
  }
  const byChannel = CAPABILITY_MATRIX[orgChannel];
  const caps = byChannel && byChannel[memberRole];
  return caps ? [...caps] : [];
}
function canManageMemberRole(actorRole, targetRole) {
  const a = MEMBER_ROLES[actorRole]?.rank ?? -1;
  const t = MEMBER_ROLES[targetRole]?.rank ?? Infinity;
  return a >= MEMBER_ROLES.admin.rank && a >= t;
}
const LEAD_CAPTURE_FIELDS = [
  { value: "name", label: "Full name (splits into first + last automatically)" },
  { value: "first_name", label: "First name" },
  { value: "last_name", label: "Last name" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "mobile", label: "Mobile phone" },
  { value: "company", label: "Company" },
  { value: "title", label: "Job title" },
  { value: "city", label: "City" },
  { value: "state", label: "State / province" },
  { value: "product_interest", label: "Product interest" },
  { value: "lead_source", label: "Lead source" },
  { value: "rating", label: "Rating (Hot / Warm / Cold)" },
  { value: "description", label: "Notes / description" },
  // Added 2026-08-10. These are all REAL m5mLead columns that the admin
  // console's Rollers builder had been offering for a long time while
  // capture() quietly ignored them — the answer went to the free-text
  // description transcript instead of its own column (or vanished entirely
  // when the flow had its own description step, since `fields.description ||
  // buildTranscript(fields)` lets an author-supplied description win). Rather
  // than removing the options and hiding that they never worked, capture()
  // now maps them properly. See magnetPublic.js's FIELD_MAX_LEN /
  // FIELD_NUMERIC — the two numeric columns need real coercion, they are not
  // free text.
  { value: "salutation", label: "Salutation (Mr. / Ms. / Dr.)" },
  { value: "street", label: "Street address" },
  { value: "zip", label: "Postal / ZIP code" },
  { value: "country", label: "Country" },
  { value: "url", label: "Website URL" },
  { value: "industry", label: "Industry" },
  { value: "annual_revenue", label: "Annual revenue (number)" },
  { value: "employees", label: "Number of employees (whole number)" },
  { value: "is_primary", label: "Primary contact (Yes / No)" },
  { value: "current_generators", label: "Current generator(s)" },
  { value: "number_of_locations", label: "Number of locations (whole number)" }
];
new Set(LEAD_CAPTURE_FIELDS.map((f) => f.value));
const STEP_TYPES = [
  { value: "single_select", label: "Multiple choice" },
  { value: "multi_select", label: "Select all" },
  { value: "scheduler", label: "Scheduler" },
  { value: "text", label: "Short text" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "message", label: "Message" }
];
new Set(STEP_TYPES.map((t) => t.value));
const DISPLAY_MODES = [
  { value: "inline", label: "Inline" },
  { value: "chat", label: "Chat" },
  { value: "right_slide", label: "Slide" },
  { value: "modal", label: "Modal" }
];
const THEME_MODES = [
  // 'auto' follows the VISITOR'S OS via prefers-color-scheme. 'sync' follows the HOST
  // SITE's own theme — many sites let a visitor pick a theme independent of their OS,
  // and CSS inside a shadow root cannot see that choice, so the SDK reads <html>
  // directly (data-theme/data-mode/data-color-scheme, then color-scheme, then a
  // dark/theme-dark class) and mirrors it. A site using none of those conventions
  // degrades to the 'auto' behaviour, so 'sync' is never worse than 'auto'.
  { value: "auto", label: "Auto (visitor OS setting)" },
  { value: "sync", label: "Sync (match the site's own dark mode)" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" }
];
const TRIGGERS = [
  { value: "on_load", label: "Immediately on page load" },
  { value: "on_8_seconds", label: "After 8 seconds" },
  { value: "on_scroll_80_percent", label: "At 80% scroll depth" },
  { value: "on_exit_intent", label: "On exit intent (mouse leaves the page)" },
  { value: "none", label: "Manual only (visitor clicks the launcher)" }
];
const ACTION_TYPES = [
  { value: "book", label: "Book" },
  { value: "call", label: "Call" },
  { value: "email", label: "Email" },
  { value: "chat", label: "Chat" },
  { value: "support", label: "Support" }
];
DISPLAY_MODES.map((m) => m.value);
THEME_MODES.map((m) => m.value);
TRIGGERS.map((t) => t.value);
ACTION_TYPES.map((a) => a.value);
class AuthController {
  // ========================================================================
  // CONFIGURATION - Customize these for your project
  // ========================================================================
  static CONFIG = {
    // API Base URL - SaaS client ALWAYS uses production API
    // RULE: All client apps point to hosted API (no localhost fallback)
    BASE_URL: "https://machfivemagnet-saas.onrender.com",
    // Auth ping interval (milliseconds) - 0 to disable
    FF_AUTH_PING_MS: 144e4,
    // 24 minutes
    // LocalStorage keys
    LS_KEYS: {
      ENTITY: "sse_session_user",
      // Entity state (matches existing key)
      DEEP_LINK: "sse_deeplink",
      // Deep-link GUID
      SCOPE: "sse_session_scope",
      // Cached tenancy scope (/me)
      ACTIVE_ORG: "sse_active_org",
      // Active org guid (org switcher)
      REMEMBERED_EMAIL: "sse_remembered_email"
      // "Remember my email" on sign-in — email only, never the password
    },
    // Route names (Navigo paths without # prefix)
    ROUTES: {
      SIGNIN: "signin",
      SIGNUP: "signup",
      HOME: "home",
      RESET_HASH: "resethash",
      FORGOT: "forgot",
      SPLASH: "splash"
    },
    // Protected routes (require authentication)
    PROTECTED_ROUTES: [
      "home",
      "resethash"
    ],
    // API endpoints - m5t/v5 pattern
    ENDPOINTS: {
      SIGNIN: "/m5t/v5/acctEntity/signin",
      SIGNOUT: "/m5t/v5/acctEntity/signout",
      SIGNUP: "/m5t/v5/acctEntity/",
      RESET_HASH: "/m5t/v5/acctEntity/resetHash",
      RESET_FORGOT: "/m5t/v5/acctEntity/resetforgot",
      ME: "/m5t/v5/acctEntity/me",
      PING: "/ping",
      WEBAUTHN_AUTH_OPTIONS: "/m5t/v5/webauthn/authenticate/options",
      WEBAUTHN_AUTH_VERIFY: "/m5t/v5/webauthn/authenticate/verify"
    },
    // Metering captions
    METER_CAPTIONS: {
      DEEP_LINK: "deep_link_access",
      SIGNOUT_CLIENT: "signout_client_initiated",
      SIGNOUT_SERVER: "signout_server_initiated",
      PING_SUCCESS: "ping_auth_success",
      PING_FAILURE: "ping_auth_failure"
    }
  };
  // ========================================================================
  // PRIVATE PROPERTIES
  // ========================================================================
  static #initialized = false;
  static #pingInterval = null;
  static #entity = null;
  static #scope = null;
  // Cached tenancy scope (/me response)
  static #scopeFetchPromise = null;
  // in-flight /me call, shared by concurrent callers (see fetchScope())
  static #deepLinkGuid = null;
  static #navigateFunction = null;
  // Navigo navigate function
  // ========================================================================
  // INITIALIZATION
  // ========================================================================
  /**
   * Initialize the AuthController
   *
   * @param {Object} options - Configuration options
   * @param {string} options.BASE_URL - API base URL
   * @param {Function} options.navigateFunction - Navigo navigate function
   * @param {Object} options.customConfig - Optional custom configuration to merge
   * @returns {Promise<boolean>} - Success status
   */
  static async init({ BASE_URL, navigateFunction, customConfig = {} } = {}) {
    if (this.#initialized) {
      console.warn("[AuthController] Already initialized");
      return true;
    }
    try {
      if (navigateFunction && typeof navigateFunction === "function") {
        this.#navigateFunction = navigateFunction;
      } else {
        throw new Error("navigateFunction is required and must be a function");
      }
      if (BASE_URL) {
        this.CONFIG.BASE_URL = BASE_URL;
      }
      if (customConfig && Object.keys(customConfig).length > 0) {
        this.CONFIG = { ...this.CONFIG, ...customConfig };
      }
      console.log("[AuthController] Initializing with config:", {
        BASE_URL: this.CONFIG.BASE_URL,
        PING_INTERVAL: this.CONFIG.FF_AUTH_PING_MS
      });
      this.#loadEntityState();
      this.#initMvvLegit();
      this.#installActiveOrgFetch();
      if (this.CONFIG.FF_AUTH_PING_MS > 0) {
        this.#startAuthPing();
      }
      this.#initialized = true;
      console.log("[AuthController] Initialized successfully");
      return true;
    } catch (error) {
      console.error("[AuthController] Initialization failed:", error);
      return false;
    }
  }
  // ========================================================================
  // MVVLEGIT INITIALIZATION
  // ========================================================================
  /**
   * Initialize mvvLegit authentication framework
   */
  static #initMvvLegit() {
    if (typeof mvvLegit === "undefined" || !mvvLegit) {
      throw new Error("mvvLegit is not available. Ensure neodigm55 library is loaded.");
    }
    mvvLegit.setNavConroller((routeName = null) => {
      if (routeName) {
        if (shouldSuppressAuthRedirect()) {
          console.log("[AuthController] Ignoring mvvLegit redirect to", routeName, "— keeping visitor on their public landing page");
          return;
        }
        console.log("[AuthController] mvvLegit navigation to:", routeName);
        this.#navigate(routeName);
      }
    }).setOnState((state = null) => {
      if (state) {
        console.log("[AuthController] Auth state changed:", state);
        switch (state) {
          case "AUTH":
          case 4:
            this.#onAuthenticated();
            break;
          case "UNAUTH":
          case 1:
            this.#onUnauthenticated();
            break;
          case "UNVERF":
          case 2:
            this.#onUnverified();
            break;
        }
      }
    }).init({ BASE: this.CONFIG.BASE_URL });
    console.log("[AuthController] mvvLegit initialized");
  }
  /**
   * Navigate to route using Navigo
   *
   * @param {string} routeName - Route name (with or without _route suffix)
   */
  static #navigate(routeName) {
    if (!this.#navigateFunction) {
      console.error("[AuthController] Navigate function not set");
      return;
    }
    console.log("[AuthController] #navigate called with:", routeName);
    const path = routeName.replace(/_route$/, "").replace(/_/g, "-");
    console.log("[AuthController] Navigating to path:", path);
    this.#navigateFunction(path);
  }
  // ========================================================================
  // ACTIVE-ORG REQUEST CONTEXT
  // ========================================================================
  /**
   * Wrap window.fetch so every request to the API base carries the active-org
   * context as an X-Active-Org header. This is the SINGLE injection point (the
   * same pattern mvvLegit uses for the Bearer token) — route modules never have
   * to plumb an org param, and the server's attachScope middleware narrows
   * scope.ownerGuids to that org for every scoped endpoint at once.
   */
  static #installActiveOrgFetch() {
    if (window.__m5tActiveOrgFetch) return;
    const nativeFetch = window.fetch.bind(window);
    window.fetch = (input, init) => {
      try {
        const url = typeof input === "string" ? input : input?.url || "";
        const org = localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
        if (org && url.startsWith(this.CONFIG.BASE_URL)) {
          const headers = new Headers(
            init && init.headers || (input instanceof Request ? input.headers : void 0)
          );
          headers.set("X-Active-Org", org);
          init = { ...init || {}, headers };
        }
      } catch {
      }
      return nativeFetch(input, init);
    };
    window.__m5tActiveOrgFetch = true;
    console.log("[AuthController] Active-org fetch header installed");
  }
  // ========================================================================
  // ENTITY STATE PERSISTENCE
  // ========================================================================
  /**
   * Load entity state from localStorage
   */
  static #loadEntityState() {
    try {
      const saved = localStorage.getItem(this.CONFIG.LS_KEYS.ENTITY);
      if (saved) {
        this.#entity = JSON.parse(saved);
        console.log("[AuthController] Entity state loaded; hasEmail:", Boolean(this.#entity?.email));
      }
    } catch (err) {
      console.error("[AuthController] Error loading entity state:", err);
      localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY);
      this.#entity = null;
    }
    this.#deepLinkGuid = localStorage.getItem(this.CONFIG.LS_KEYS.DEEP_LINK) || null;
    try {
      const savedScope = localStorage.getItem(this.CONFIG.LS_KEYS.SCOPE);
      if (savedScope) {
        this.#scope = JSON.parse(savedScope);
        console.log("[AuthController] Scope state loaded (cached):", this.#scope?.uiMode);
      }
    } catch (err) {
      console.error("[AuthController] Error loading scope state:", err);
      localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);
      this.#scope = null;
    }
  }
  /**
   * Save entity state to localStorage
   *
   * @param {Object} entity - Entity object to save
   */
  static #saveEntityState(entity) {
    try {
      this.#entity = entity;
      localStorage.setItem(this.CONFIG.LS_KEYS.ENTITY, JSON.stringify(entity));
      console.log("[AuthController] Entity state saved");
    } catch (err) {
      console.error("[AuthController] Error saving entity state:", err);
    }
  }
  /**
   * Clear entity state
   */
  static #clearEntityState() {
    this.#entity = null;
    this.#scope = null;
    localStorage.removeItem(this.CONFIG.LS_KEYS.ENTITY);
    localStorage.removeItem(this.CONFIG.LS_KEYS.SCOPE);
    try {
      localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
      sessionStorage.removeItem(this.#PREVIEW_KEY);
    } catch {
    }
  }
  /**
   * Get entity state
   *
   * @returns {Object|null}
   */
  static getEntity() {
    return this.#entity;
  }
  // ========================================================================
  // TENANCY SCOPE  (/me → capabilities, uiMode, active org, memberships)
  // ========================================================================
  /**
   * Save tenancy scope to memory + localStorage (last-good cache).
   */
  static #saveScopeState(scope) {
    try {
      this.#scope = scope;
      localStorage.setItem(this.CONFIG.LS_KEYS.SCOPE, JSON.stringify(scope));
    } catch (err) {
      console.error("[AuthController] Error saving scope state:", err);
    }
  }
  /**
   * Fetch the caller's tenancy scope (/me) and cache it. mvvLegit injects the
   * Bearer token automatically for BASE_URL requests (same as #doPing).
   *
   * - 401/403 → hard signout (never render a logged-in nav for an invalid session)
   * - 404 / 5xx / network → keep last-good cached scope (cache-first); no signout
   *
   * Reconciliation, NOT a gate by default: callers should not block routing on
   * this — the cached scope paints first and AUTH.SCOPE.LOADED updates the UI
   * when it lands. When a caller DOES need to know the real thing landed
   * (main.js awaits this once, specifically when a stored ACTIVE_ORG exists —
   * see its own comment for why), concurrent callers share the SAME in-flight
   * promise (#scopeFetchPromise) rather than a boolean guard that would hand
   * an awaiting caller stale cached data before the real request finishes.
   *
   * @returns {Promise<Object|null>} scope object, cached scope on soft failure, or null
   */
  static async fetchScope() {
    if (typeof mvvLegit === "undefined" || !this.isAuthenticated()) {
      console.log("[AuthController] fetchScope skipped — not authenticated");
      return this.#scope;
    }
    if (this.#scopeFetchPromise) return this.#scopeFetchPromise;
    this.#scopeFetchPromise = this.#doFetchScope().finally(() => {
      this.#scopeFetchPromise = null;
    });
    return this.#scopeFetchPromise;
  }
  static async #doFetchScope() {
    try {
      const activeOrg = localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
      const qs = activeOrg ? `?org=${encodeURIComponent(activeOrg)}` : "";
      const response = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.ME}${qs}`);
      if (response.status === 401 || response.status === 403) {
        console.warn("[AuthController] /me unauthorized — signing out");
        this.doSignout(true);
        return null;
      }
      if (!response.ok) {
        console.warn(`[AuthController] /me failed (${response.status}) — using cached scope`);
        return this.#scope;
      }
      const data = await response.json();
      if (!data?.ok) {
        console.warn("[AuthController] /me returned not-ok — using cached scope");
        return this.#scope;
      }
      try {
        const stored = localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
        if (stored && data.activeOrg?.guid !== stored) {
          console.warn(`[AuthController] Stored active org not honored by /me${data.activeOrgError ? " (activeOrgError)" : ""} — clearing`);
          localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
        }
      } catch {
      }
      this.#saveScopeState(data);
      PubSub$1.publish(AppBroadcast.AUTH_SCOPE_LOADED, data);
      console.log(`[AuthController] Scope loaded: ${data.uiMode} (${data.memberships?.length || 0} org(s), ${data.managedClients?.length || 0} client(s))`);
      return data;
    } catch (error) {
      console.error("[AuthController] fetchScope error:", error);
      return this.#scope;
    }
  }
  /**
   * Switch the active org: persist the choice, refetch /me (so uiMode +
   * capabilities reflect the new org) and re-publish AUTH.SCOPE.LOADED.
   */
  static async setActiveOrg(orgGuid) {
    try {
      if (orgGuid) localStorage.setItem(this.CONFIG.LS_KEYS.ACTIVE_ORG, orgGuid);
      else localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
    } catch {
    }
    return this.fetchScope();
  }
  /** Full cached scope ({ entity, isPlatformAdmin, uiMode, capabilities, activeOrg, memberships, managedClients }). */
  static getScope() {
    return this.#scope;
  }
  /** Capabilities for the ACTIVE org (what the nav filters on). Preview-as-client masks these down. */
  static getCapabilities() {
    if (this.isPreviewingAsClient()) {
      return resolveCapabilities({ orgChannel: "managed_client", memberRole: "owner" });
    }
    return this.#scope?.capabilities || [];
  }
  /** UI mode: 'admin' | 'reseller' | 'managed' | 'self_serve'. Preview-as-client forces 'managed'. */
  static getUiMode() {
    if (this.isPreviewingAsClient()) return "managed";
    return this.#scope?.uiMode || "self_serve";
  }
  /** Active org { guid, name, channel, memberRole, capabilities, viaSubtree } or null. */
  static getActiveOrg() {
    return this.#scope?.activeOrg || null;
  }
  /** All org memberships [{ orgGuid, channel, memberRole, capabilities }]. */
  static getMemberships() {
    return this.#scope?.memberships || [];
  }
  /** Reseller subtree: managed-client orgs [{ orgGuid, name, channel, parent }]. */
  static getManagedClients() {
    return this.#scope?.managedClients || [];
  }
  /** The persisted EXPLICIT org choice (null = default scope / reseller portfolio). */
  static getStoredActiveOrg() {
    try {
      return localStorage.getItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
    } catch {
      return null;
    }
  }
  // ---- Preview-as-client (demo mode) --------------------------------------
  // Session-scoped toggle available while acting inside a subtree client's
  // context: the UI renders with the client's own capability set + uiMode so a
  // reseller can screen-share exactly what their client sees.
  static #PREVIEW_KEY = "m5m_preview_as_client";
  static isPreviewingAsClient() {
    try {
      return sessionStorage.getItem(this.#PREVIEW_KEY) === "1" && !!this.#scope?.activeOrg?.viaSubtree;
    } catch {
      return false;
    }
  }
  static setPreviewAsClient(on) {
    try {
      if (on) sessionStorage.setItem(this.#PREVIEW_KEY, "1");
      else sessionStorage.removeItem(this.#PREVIEW_KEY);
    } catch {
    }
    if (this.#scope) PubSub$1.publish(AppBroadcast.AUTH_SCOPE_LOADED, this.#scope);
  }
  // ========================================================================
  // AUTHENTICATION METHODS
  // ========================================================================
  /**
   * Sign in a user
   *
   * @param {string} email - User email
   * @param {string} password - User's plaintext password, sent over TLS
   * @returns {Promise<Object>} - Response object { ok, data, error }
   */
  static async doSignin(email, password) {
    try {
      const response = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.status === 303) {
        console.warn("[AuthController] Password reset required");
        if (data.accessToken) {
          mvvLegit.doSignin(data.accessToken);
          this.#saveEntityState(data.entity);
        }
        setTimeout(() => {
          this.#navigate(this.CONFIG.ROUTES.RESET_HASH);
        }, 1500);
        return { ok: false, resetRequired: true, data };
      }
      if (response.ok && data.accessToken) {
        console.log("[AuthController] Signin successful, calling mvvLegit.doSignin()");
        mvvLegit.doSignin(data.accessToken);
        this.#saveEntityState(data.entity);
        try {
          localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
          sessionStorage.removeItem(this.#PREVIEW_KEY);
        } catch {
        }
        this.fetchScope();
        console.log("[AuthController] Explicitly navigating to home");
        this.#navigate(this.CONFIG.ROUTES.HOME);
        return { ok: true, data };
      }
      return { ok: false, error: data.error || "Sign in failed", data };
    } catch (error) {
      console.error("[AuthController] Signin error:", error);
      return { ok: false, error: error.message };
    }
  }
  /**
   * Sign in with a passkey (WebAuthn) — no email typed first. Discoverable
   * credentials let the browser offer up whichever passkey it has for this
   * site; the server resolves which account it belongs to from the
   * assertion itself. Offered alongside doSignin(), not a replacement.
   *
   * @returns {Promise<Object>} - Response object { ok, data, error }
   */
  static async doPasskeySignin() {
    if (!window.PublicKeyCredential) {
      return { ok: false, error: "Passkeys are not supported in this browser" };
    }
    try {
      const { startAuthentication } = await __vitePreload(async () => {
        const { startAuthentication: startAuthentication2 } = await import("./index-BitdqKye.js");
        return { startAuthentication: startAuthentication2 };
      }, true ? [] : void 0, import.meta.url);
      const optRes = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.WEBAUTHN_AUTH_OPTIONS}`, { method: "POST" });
      const optData = await optRes.json();
      if (!optRes.ok || !optData.ok) {
        return { ok: false, error: optData.error || "Could not start passkey sign-in" };
      }
      let credential;
      try {
        credential = await startAuthentication({ optionsJSON: optData.options });
      } catch (err) {
        const canceled = err?.name === "NotAllowedError";
        if (!canceled) console.error("[AuthController] Passkey ceremony error:", err);
        return { ok: false, canceled, error: canceled ? "Passkey sign-in was canceled" : err.message || "Passkey sign-in failed" };
      }
      const verifyRes = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.WEBAUTHN_AUTH_VERIFY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response: credential })
      });
      const data = await verifyRes.json();
      if (!verifyRes.ok || !data.ok || !data.accessToken) {
        return { ok: false, error: data.error || "Passkey sign-in failed", data };
      }
      mvvLegit.doSignin(data.accessToken);
      this.#saveEntityState(data.entity);
      try {
        localStorage.removeItem(this.CONFIG.LS_KEYS.ACTIVE_ORG);
        sessionStorage.removeItem(this.#PREVIEW_KEY);
      } catch {
      }
      this.fetchScope();
      this.#navigate(this.CONFIG.ROUTES.HOME);
      return { ok: true, data };
    } catch (error) {
      console.error("[AuthController] Passkey signin error:", error);
      return { ok: false, error: error.message };
    }
  }
  /**
   * Sign out current user
   *
   * @param {boolean} serverInitiated - True if signout was server-initiated (e.g., expired token)
   */
  static async doSignout(serverInitiated = false) {
    console.log("[AuthController] doSignout called, serverInitiated:", serverInitiated);
    try {
      const token = mvvLegit.getConf()?.token;
      console.log("[AuthController] Token exists:", !!token);
      if (!serverInitiated && token) {
        const signoutUrl = `${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNOUT}?token=${encodeURIComponent(token)}`;
        console.log("[AuthController] Sending signout beacon to:", signoutUrl);
        if (navigator.sendBeacon) {
          const sent = navigator.sendBeacon(signoutUrl);
          console.log("[AuthController] Beacon sent:", sent);
          if (!sent) {
            console.warn("[AuthController] Beacon failed - browser may be blocking it");
          }
        } else {
          console.warn("[AuthController] navigator.sendBeacon not supported, signout not metered");
        }
      } else if (!token) {
        console.warn("[AuthController] No token found for signout request");
      }
      console.log("[AuthController] Clearing mvvLegit state...");
      mvvLegit.doSignout();
      console.log("[AuthController] Setting signout timestamp...");
      localStorage.setItem("mvv_ts", Date.now().toString());
      console.log("[AuthController] Clearing entity state...");
      this.#clearEntityState();
      console.log("[AuthController] Stopping auth ping...");
      this.#stopAuthPing();
      setTimeout(() => {
        console.log("[AuthController] Performing hard refresh...");
        if (typeof neodigmUtils !== "undefined" && neodigmUtils.hardReload) {
          neodigmUtils.hardReload();
        } else {
          window.location.reload();
        }
      }, 500);
    } catch (error) {
      console.error("[AuthController] Signout error:", error);
      setTimeout(() => {
        if (typeof neodigmUtils !== "undefined" && neodigmUtils.hardReload) {
          neodigmUtils.hardReload();
        } else {
          window.location.reload();
        }
      }, 500);
    }
  }
  /**
   * Sign up new user
   *
   * @param {Object} userData - { email, hash, first, last, company, phone }
   * @returns {Promise<Object>} - Response object { ok, data, error }
   */
  static async doSignup(userData) {
    try {
      const response = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.SIGNUP}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      if (response.ok && data.accessToken) {
        console.log("[AuthController] Signup successful - user needs to verify email");
        this.#saveEntityState(data.entity);
        return { ok: true, data };
      }
      return { ok: false, error: data.error || "Sign up failed", data };
    } catch (error) {
      console.error("[AuthController] Signup error:", error);
      return { ok: false, error: error.message };
    }
  }
  /**
   * Reset password (authenticated)
   *
   * @param {string} email - User email
   * @param {string} password - New plaintext password, sent over TLS
   * @returns {Promise<Object>} - Response object { ok, data, error }
   */
  static async doResetHash(email, password) {
    try {
      const token = mvvLegit.getConf()?.token;
      const response = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.RESET_HASH}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, modified_by: email })
      });
      const data = await response.json();
      if (response.ok && data.ok) {
        console.log("[AuthController] Password reset successful");
        await this.doSignout();
        return { ok: true, data };
      }
      return { ok: false, error: data.error || "Password reset failed", data };
    } catch (error) {
      console.error("[AuthController] Reset password error:", error);
      return { ok: false, error: error.message };
    }
  }
  // ========================================================================
  // AUTH PING
  // ========================================================================
  /**
   * Start periodic auth ping checks
   */
  static #startAuthPing() {
    if (this.#pingInterval) {
      console.log("[AuthController] Clearing existing ping interval");
      clearInterval(this.#pingInterval);
    }
    this.#pingInterval = setInterval(() => {
      console.log(`[AuthController] ⏰ Ping interval fired at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`);
      this.#doPing();
    }, this.CONFIG.FF_AUTH_PING_MS);
    console.log(`[AuthController] Auth ping started (${this.CONFIG.FF_AUTH_PING_MS}ms) - interval ID: ${this.#pingInterval}`);
    console.log(`[AuthController] Next ping scheduled for: ${new Date(Date.now() + this.CONFIG.FF_AUTH_PING_MS).toLocaleTimeString()}`);
  }
  /**
   * Stop auth ping checks
   */
  static #stopAuthPing() {
    if (this.#pingInterval) {
      clearInterval(this.#pingInterval);
      this.#pingInterval = null;
      console.log("[AuthController] Auth ping stopped");
    }
  }
  /**
   * Perform auth ping check
   *
   * Note: mvvLegit automatically injects the Bearer token via its fetch override,
   * so we don't need to manually add Authorization headers!
   */
  static async #doPing() {
    try {
      const response = await fetch(`${this.CONFIG.BASE_URL}${this.CONFIG.ENDPOINTS.PING}`);
      if (response.ok) {
        console.log("[AuthController] Ping success");
      } else if (response.status === 401 || response.status === 403) {
        console.warn("[AuthController] Auth ping failed - signing out");
        this.doSignout(true);
      }
    } catch (error) {
      console.error("[AuthController] Ping error:", error);
    }
  }
  // ========================================================================
  // DEEP LINKING
  // ========================================================================
  /**
   * Store deep-link GUID for later use
   *
   * @param {string} guid - GUID to store
   */
  static setDeepLinkGuid(guid) {
    this.#deepLinkGuid = guid;
    localStorage.setItem(this.CONFIG.LS_KEYS.DEEP_LINK, guid);
    console.log("[AuthController] Deep-link GUID stored:", guid);
  }
  /**
   * Get stored deep-link GUID
   *
   * @returns {string|null}
   */
  static getDeepLinkGuid() {
    return this.#deepLinkGuid;
  }
  /**
   * Clear deep-link GUID
   */
  static clearDeepLink() {
    this.#deepLinkGuid = null;
    localStorage.removeItem(this.CONFIG.LS_KEYS.DEEP_LINK);
  }
  // ========================================================================
  // STATE CALLBACKS
  // ========================================================================
  /**
   * Called when user becomes authenticated
   */
  static #onAuthenticated() {
    console.log("[AuthController] User authenticated");
    if (this.CONFIG.FF_AUTH_PING_MS > 0) {
      this.#startAuthPing();
    }
    queueMicrotask(() => this.fetchScope());
  }
  /**
   * Called when user becomes unauthenticated
   */
  static #onUnauthenticated() {
    console.log("[AuthController] User unauthenticated");
    this.#stopAuthPing();
  }
  /**
   * Called when user is unverified
   */
  static #onUnverified() {
    console.log("[AuthController] User unverified");
  }
  // ========================================================================
  // UTILITY METHODS
  // ========================================================================
  /**
   * Get current authentication state
   *
   * @returns {string|null} - 'AUTH', 'UNAUTH', 'UNVERF', or null
   */
  static getAuthState() {
    try {
      const lsKey = mvvLegit.getConf()?.LSKEY || "mvv";
      const compressed = localStorage.getItem(lsKey);
      if (!compressed) return "UNAUTH";
      if (typeof LZString === "undefined") return null;
      const decompressed = LZString.decompressFromUTF16(compressed);
      const data = JSON.parse(decompressed);
      const state = data?.state;
      if (state === 1) return "UNAUTH";
      if (state === 2) return "UNVERF";
      if (state === 4) return "AUTH";
      if (state === 5) return "FORGOT";
      return null;
    } catch (err) {
      return null;
    }
  }
  /**
   * Check if user is authenticated
   *
   * @returns {boolean}
   */
  static isAuthenticated() {
    return this.getAuthState() === "AUTH";
  }
  /**
   * Get configuration
   *
   * @returns {Object}
   */
  static getConfig() {
    return this.CONFIG;
  }
  /**
   * Navigate to route by name
   *
   * @param {string} routeName - Route name (e.g., 'signin', 'home')
   */
  static navigateTo(routeName) {
    this.#navigate(routeName);
  }
  /**
   * DEBUG: Check if ping interval is active
   *
   * @returns {boolean}
   */
  static isPingActive() {
    return this.#pingInterval !== null;
  }
  /**
   * DEBUG: Manually trigger a ping now
   */
  static async triggerPingNow() {
    console.log("[AuthController] DEBUG: Manually triggering ping...");
    await this.#doPing();
  }
}
class MicrocopyManager {
  /**
   * Microcopy data structure
   * Format: {
   *   [BUILDMODE]: {  // LOCAL, DEV, SIT, QA, PROD
   *     [M5T_PRODUCT]: {
   *       [WHITELABEL]: {
   *         [LANG]: {
   *           [TOKEN_MC]: string | string[] (randomized if array)
   *         }
   *       }
   *     }
   *   }
   * }
   */
  static #data = {
    LOCAL: {
      SSE: {
        M5T: {
          en: {
            welcome_back: "Welcome back",
            please_enter_your_details: "Please enter your details",
            email: "Email",
            enter_your_email: "Enter your email",
            password: "Password",
            enter_your_password: "Enter your password",
            enter_email_and_password: "Enter email and password",
            sign_in: "Sign in",
            forgot_password: "Forgot password?",
            remember_email: "Remember my email",
            dont_have_an_account: "START YOUR FREE ACCOUNT",
            sign_up: "Sign up",
            please_enter_your_details_to_get_started: "Please enter your details to get started",
            already_have_an_account: "Already have an account?",
            log_in: "Log in",
            name: "Name",
            enter_your_name: "Enter your name",
            first_name: "First name",
            last_name: "Last name",
            company: "Company",
            phone: "Phone",
            confirm_password: "Confirm password",
            create_account: "Create account",
            home: "Home",
            dashboard: "Dashboard",
            correspondence: "Correspondence",
            settings: "Settings",
            sign_out: "Sign out",
            reset_password: "Reset password",
            new_password: "New password",
            confirm_new_password: "Confirm new password",
            enter_new_password: "Enter new password",
            enter_company_name: "Enter your company name",
            enter_phone_number: "Enter your phone number",
            reenter_password: "Re-enter your password",
            update_password: "Update password",
            update_your_password: "Update your account password",
            are_you_sure_sign_out: "Are you sure you want to sign out?",
            enter_email_for_reset: "Please enter your email to receive a password reset link",
            send_reset_link: "Send reset link",
            remember_password: "Remember your password?",
            cancel: "Cancel",
            save: "Save",
            delete: "Delete",
            edit: "Edit",
            loading: "Loading...",
            error: "Error",
            success: "Success",
            refresh: "Refresh",
            search: "Search",
            filter: "Filter",
            sort: "Sort",
            view: "View",
            close: "Close",
            submit: "Submit",
            back: "Back",
            next: "Next",
            previous: "Previous",
            confirm: "Confirm",
            yes: "Yes",
            no: "No",
            ok: "OK",
            // Validation messages
            validation_email_required: "Please enter your email",
            validation_email_invalid: "Please enter a valid email address",
            validation_password_required: "Please enter your password",
            validation_password_min_length: "Password must be at least 10 characters",
            validation_password_mismatch: "Passwords do not match",
            validation_first_name_required: "Please enter your first name",
            validation_last_name_required: "Please enter your last name",
            validation_new_password_required: "Please enter a new password",
            // Success messages
            success_welcome_back: "Welcome back!",
            success_password_reset: "Password reset successfully",
            success_signed_out: "Signed out successfully",
            success_reset_link_sent: "Password reset link sent!|Please check your email",
            // Error messages
            error_signin_failed: "Sign in failed",
            error_signup_failed: "Sign up failed",
            error_network: "Network error - please try again",
            error_password_reset_required: "Password reset required - redirecting...",
            // Loading states
            loading_signing_in: "SIGNING IN...",
            loading_creating_account: "Creating account...",
            loading_resetting_password: "Resetting password...",
            // Navigation - Primary
            nav_home: "Home",
            nav_home_tagline: "Dashboard and overview",
            // Navigation - Secondary (Home)
            nav_home_apps: "My Apps",
            nav_home_apps_tagline: "Your applications and integrations",
            nav_home_dash: "Dashboard",
            nav_home_dash_tagline: "Main dashboard and analytics",
            nav_engagements: "Engagements",
            nav_engagements_tagline: "Customer engagement tools and interactions",
            nav_develop: "Develop",
            nav_develop_tagline: "Development tools and resources",
            nav_profile: "Profile",
            nav_profile_tagline: "Account settings and preferences",
            // Navigation - Secondary (Engagements)
            nav_engagements_surveys: "Surveys",
            nav_engagements_surveys_tagline: "Create and manage customer surveys",
            nav_engagements_thumbs: "Feedback",
            nav_engagements_thumbs_tagline: "Collect thumbs up/down feedback",
            nav_engagements_voicemail: "Voicemail",
            nav_engagements_voicemail_tagline: "Voice message collection",
            nav_engagements_guidedtours: "Guided Tours",
            nav_engagements_guidedtours_tagline: "Interactive product tours",
            nav_engagements_slideshows: "Slideshows",
            nav_engagements_slideshows_tagline: "Content slideshows and presentations",
            nav_engagements_abtests: "A/B Tests",
            nav_engagements_abtests_tagline: "A/B testing campaigns",
            nav_engagements_questionnaires: "Questionnaires",
            nav_engagements_questionnaires_tagline: "Detailed questionnaires and forms",
            // Navigation - Secondary (Develop)
            nav_develop_documentation: "Documentation",
            nav_develop_documentation_tagline: "API and product documentation",
            nav_develop_devtools: "Dev Tools",
            nav_develop_devtools_tagline: "Developer tools and utilities",
            nav_develop_kbase: "Knowledge Base",
            nav_develop_kbase_tagline: "Technical knowledge base and articles",
            nav_develop_hackathon: "Hackathon",
            nav_develop_hackathon_tagline: "Hackathon events and challenges",
            nav_develop_partner: "Partner",
            nav_develop_partner_tagline: "Partner program and integrations",
            nav_develop_certification: "Certification",
            nav_develop_certification_tagline: "Developer certification programs",
            // Navigation - Secondary (Profile)
            nav_profile_aboutme: "About Me",
            nav_profile_aboutme_tagline: "View and edit your personal information",
            nav_profile_badges: "Badges",
            nav_profile_badges_tagline: "View your earned badges and achievements",
            nav_profile_language: "Language",
            nav_profile_language_tagline: "Manage language settings and preferences",
            nav_reset_password: "Reset Password",
            nav_reset_password_tagline: "Change your account password",
            nav_sign_out: "Sign Out",
            nav_sign_out_tagline: "Sign out of your account",
            // Navigation - Primary (Account)
            nav_account: "Account",
            nav_account_tagline: "Account management and support",
            // Navigation - Secondary (Account)
            nav_account_contact: "Contact",
            nav_account_contact_tagline: "Contact support and sales",
            nav_account_pricetier: "Price Tier",
            nav_account_pricetier_tagline: "View and manage pricing plans",
            nav_account_helpfaq: "Help & FAQ",
            nav_account_helpfaq_tagline: "Frequently asked questions and help",
            nav_account_team: "Team",
            nav_account_team_tagline: "Manage team members and permissions",
            nav_account_terms: "Terms",
            nav_account_terms_tagline: "Terms of service and legal agreements",
            // Side Navigation (client-saas persona-aware left nav)
            nav_dashboard: "Dashboard",
            nav_dashboard_tagline: "Overview of your activity",
            nav_magnets: "Your Magnets",
            nav_magnets_tagline: "Manage your conversational magnets",
            nav_templates: "Templates",
            nav_templates_tagline: "Start from a magnet template",
            nav_conversations: "Conversations",
            nav_conversations_tagline: "Captured lead conversations",
            nav_ab_testing: "A/B Testing",
            nav_ab_testing_tagline: "Experiment and optimize",
            nav_analytics: "Analytics",
            nav_analytics_tagline: "Performance and ad metrics",
            nav_ad_accounts: "Ad Accounts",
            nav_ad_accounts_tagline: "Connect advertising accounts",
            nav_clients: "Clients",
            nav_clients_tagline: "Manage your client accounts",
            nav_team: "Team",
            nav_team_tagline: "Invite and manage teammates",
            nav_billing: "Billing",
            nav_billing_tagline: "Plan, usage, and invoices",
            nav_settings: "Settings",
            nav_settings_tagline: "Account and workspace settings",
            // Admin Console Navigation
            nav_home: "Home",
            nav_home_tagline: "Admin console home dashboard",
            nav_entities: "Entities",
            nav_entities_tagline: "Entity and account management",
            nav_accounts: "Accounts",
            nav_accounts_tagline: "User account management",
            nav_groups: "Groups",
            nav_groups_tagline: "Group and role management",
            nav_invoices: "Invoices",
            nav_invoices_tagline: "Invoice and billing management",
            nav_ab_tests: "A/B Tests",
            nav_ab_tests_tagline: "A/B testing campaigns",
            nav_feedback: "Feedback",
            nav_feedback_tagline: "User feedback collection",
            nav_guided_tours: "Guided Tours",
            nav_guided_tours_tagline: "Interactive product tours",
            nav_questionnaires: "Questionnaires",
            nav_questionnaires_tagline: "Detailed questionnaires and forms",
            nav_slideshows: "Slideshows",
            nav_slideshows_tagline: "Content slideshows and presentations",
            nav_surveys: "Surveys",
            nav_surveys_tagline: "Survey campaigns and analytics",
            nav_voicemail: "Voicemail",
            nav_voicemail_tagline: "Voice message management",
            nav_ethercards: "EtherCards",
            nav_ethercards_tagline: "EtherCards platform management",
            nav_apps: "Apps",
            nav_apps_tagline: "Application management",
            nav_channels: "Channels",
            nav_channels_tagline: "Communication channels",
            nav_messages: "Messages",
            nav_messages_tagline: "Message management and templates",
            nav_content: "Content",
            nav_content_tagline: "Content and asset management",
            nav_rss: "RSS",
            nav_rss_tagline: "RSS feed management and syndication",
            nav_core_assets: "Core Assets",
            nav_core_assets_tagline: "Manage core application assets and resources",
            nav_deeplinks: "Deeplinks",
            nav_deeplinks_tagline: "Deep link management and tracking",
            nav_snippets: "Snippets",
            nav_snippets_tagline: "Code and content snippet management",
            nav_rollers: "Magnet Builder",
            nav_rollers_tagline: "Rolling deployments and version management",
            nav_support: "Support",
            nav_support_tagline: "Support and monitoring tools",
            nav_dialog: "Dialog",
            nav_dialog_tagline: "Dialog and modal management",
            nav_meter: "Meter",
            nav_meter_tagline: "Usage metering and analytics",
            nav_metadata: "Metadata",
            nav_metadata_tagline: "Metadata and configuration",
            nav_i18n: "I18N",
            nav_i18n_tagline: "Internationalization maintenance",
            nav_meta_maint: "Meta Maint",
            nav_meta_maint_tagline: "Metadata maintenance and configuration",
            nav_silos: "Silos",
            nav_silos_tagline: "Data silo management",
            nav_cache: "Cache",
            nav_cache_tagline: "Cache management and statistics",
            nav_lifecycle: "Lifecycle",
            nav_lifecycle_tagline: "Data lifecycle and retention policies",
            nav_notifications: "Notifications",
            nav_notifications_tagline: "Notification management",
            nav_bell_drawer: "Bell Drawer",
            nav_bell_drawer_tagline: "Notification drawer configuration",
            nav_web_hooks: "Web Hooks",
            nav_web_hooks_tagline: "Webhook configuration and monitoring",
            nav_language: "Language",
            nav_language_tagline: "Change language preferences"
          },
          es: {
            welcome_back: "Bienvenido de nuevo",
            please_enter_your_details: "Por favor ingrese sus datos",
            email: "Correo electrónico",
            enter_your_email: "Ingrese su correo electrónico",
            password: "Contraseña",
            enter_your_password: "Ingrese su contraseña",
            enter_email_and_password: "Ingrese correo y contraseña",
            sign_in: "Iniciar sesión",
            forgot_password: "¿Olvidó su contraseña?",
            remember_email: "Recordar mi correo electrónico",
            dont_have_an_account: "¿No tiene una cuenta?",
            sign_up: "Registrarse",
            please_enter_your_details_to_get_started: "Ingrese sus datos para comenzar",
            already_have_an_account: "¿Ya tiene una cuenta?",
            log_in: "Iniciar sesión",
            name: "Nombre",
            enter_your_name: "Ingrese su nombre",
            first_name: "Nombre",
            last_name: "Apellido",
            company: "Empresa",
            phone: "Teléfono",
            confirm_password: "Confirmar contraseña",
            create_account: "Crear cuenta",
            home: "Inicio",
            dashboard: "Panel",
            correspondence: "Correspondencia",
            settings: "Configuración",
            sign_out: "Cerrar sesión",
            reset_password: "Restablecer contraseña",
            new_password: "Nueva contraseña",
            confirm_new_password: "Confirmar nueva contraseña",
            enter_new_password: "Ingrese nueva contraseña",
            enter_company_name: "Ingrese el nombre de su empresa",
            enter_phone_number: "Ingrese su número de teléfono",
            reenter_password: "Vuelva a ingresar su contraseña",
            update_password: "Actualizar contraseña",
            update_your_password: "Actualice la contraseña de su cuenta",
            are_you_sure_sign_out: "¿Está seguro de que desea cerrar sesión?",
            enter_email_for_reset: "Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña",
            send_reset_link: "Enviar enlace de restablecimiento",
            remember_password: "¿Recuerda su contraseña?",
            cancel: "Cancelar",
            save: "Guardar",
            delete: "Eliminar",
            edit: "Editar",
            loading: "Cargando...",
            error: "Error",
            success: "Éxito",
            refresh: "Actualizar",
            search: "Buscar",
            filter: "Filtrar",
            sort: "Ordenar",
            view: "Ver",
            close: "Cerrar",
            submit: "Enviar",
            back: "Atrás",
            next: "Siguiente",
            previous: "Anterior",
            confirm: "Confirmar",
            yes: "Sí",
            no: "No",
            ok: "OK",
            // Validation messages
            validation_email_required: "Por favor ingrese su correo electrónico",
            validation_email_invalid: "Por favor ingrese una dirección de correo válida",
            validation_password_required: "Por favor ingrese su contraseña",
            validation_password_min_length: "La contraseña debe tener al menos 10 caracteres",
            validation_password_mismatch: "Las contraseñas no coinciden",
            validation_first_name_required: "Por favor ingrese su nombre",
            validation_last_name_required: "Por favor ingrese su apellido",
            validation_new_password_required: "Por favor ingrese una nueva contraseña",
            // Success messages
            success_welcome_back: "¡Bienvenido de nuevo!",
            success_password_reset: "Contraseña restablecida exitosamente",
            success_signed_out: "Sesión cerrada exitosamente",
            success_reset_link_sent: "¡Enlace de restablecimiento enviado!|Por favor revise su correo electrónico",
            // Error messages
            error_signin_failed: "Error al iniciar sesión",
            error_signup_failed: "Error al registrarse",
            error_network: "Error de red - por favor intente de nuevo",
            error_password_reset_required: "Restablecimiento de contraseña requerido - redirigiendo...",
            // Loading states
            loading_signing_in: "INICIANDO SESIÓN...",
            loading_creating_account: "Creando cuenta...",
            loading_resetting_password: "Restableciendo contraseña...",
            // Navigation - Primary
            nav_home: "Inicio",
            nav_home_tagline: "Panel y resumen",
            // Navigation - Secondary (Home)
            nav_home_apps: "Mis Aplicaciones",
            nav_home_apps_tagline: "Sus aplicaciones e integraciones",
            nav_home_dash: "Panel",
            nav_home_dash_tagline: "Panel principal y análisis",
            nav_engagements: "Compromisos",
            nav_engagements_tagline: "Herramientas de interacción con clientes",
            nav_develop: "Desarrollar",
            nav_develop_tagline: "Herramientas y recursos de desarrollo",
            nav_profile: "Perfil",
            nav_profile_tagline: "Configuración y preferencias de cuenta",
            // Navigation - Secondary (Engagements)
            nav_engagements_surveys: "Encuestas",
            nav_engagements_surveys_tagline: "Crear y gestionar encuestas de clientes",
            nav_engagements_thumbs: "Retroalimentación",
            nav_engagements_thumbs_tagline: "Recopilar opiniones positivas y negativas",
            nav_engagements_voicemail: "Buzón de voz",
            nav_engagements_voicemail_tagline: "Recopilación de mensajes de voz",
            nav_engagements_guidedtours: "Recorridos guiados",
            nav_engagements_guidedtours_tagline: "Recorridos interactivos de productos",
            nav_engagements_slideshows: "Presentaciones",
            nav_engagements_slideshows_tagline: "Presentaciones y diapositivas de contenido",
            nav_engagements_abtests: "Pruebas A/B",
            nav_engagements_abtests_tagline: "Campañas de pruebas A/B",
            nav_engagements_questionnaires: "Cuestionarios",
            nav_engagements_questionnaires_tagline: "Cuestionarios y formularios detallados",
            // Navigation - Secondary (Develop)
            nav_develop_documentation: "Documentación",
            nav_develop_documentation_tagline: "Documentación de API y productos",
            nav_develop_devtools: "Herramientas Dev",
            nav_develop_devtools_tagline: "Herramientas y utilidades de desarrollo",
            nav_develop_kbase: "Base de Conocimientos",
            nav_develop_kbase_tagline: "Base de conocimientos y artículos técnicos",
            nav_develop_hackathon: "Hackathon",
            nav_develop_hackathon_tagline: "Eventos y desafíos de hackathon",
            nav_develop_partner: "Socio",
            nav_develop_partner_tagline: "Programa de socios e integraciones",
            nav_develop_certification: "Certificación",
            nav_develop_certification_tagline: "Programas de certificación para desarrolladores",
            // Navigation - Secondary (Profile)
            nav_profile_aboutme: "Sobre Mí",
            nav_profile_aboutme_tagline: "Ver y editar su información personal",
            nav_profile_badges: "Insignias",
            nav_profile_badges_tagline: "Ver sus insignias y logros obtenidos",
            nav_profile_language: "Idioma",
            nav_profile_language_tagline: "Gestionar configuración y preferencias de idioma",
            nav_reset_password: "Restablecer Contraseña",
            nav_reset_password_tagline: "Cambiar la contraseña de su cuenta",
            nav_sign_out: "Cerrar Sesión",
            nav_sign_out_tagline: "Cerrar sesión de su cuenta",
            // Navigation - Primary (Account)
            nav_account: "Cuenta",
            nav_account_tagline: "Gestión de cuenta y soporte",
            // Navigation - Secondary (Account)
            nav_account_contact: "Contacto",
            nav_account_contact_tagline: "Contactar con soporte y ventas",
            nav_account_pricetier: "Nivel de Precio",
            nav_account_pricetier_tagline: "Ver y gestionar planes de precios",
            nav_account_helpfaq: "Ayuda y FAQ",
            nav_account_helpfaq_tagline: "Preguntas frecuentes y ayuda",
            nav_account_team: "Equipo",
            nav_account_team_tagline: "Gestionar miembros del equipo y permisos",
            nav_account_terms: "Términos",
            nav_account_terms_tagline: "Términos de servicio y acuerdos legales",
            // Admin Console Navigation
            nav_home: "Inicio",
            nav_home_tagline: "Panel de inicio de la consola de administración",
            nav_silo_audits: "Auditorías de Silo",
            nav_silo_audits_tagline: "Auditar e inspeccionar datos de silo",
            nav_cache: "Caché",
            nav_cache_tagline: "Gestión de caché y estadísticas",
            nav_cache_stats: "Estadísticas",
            nav_cache_stats_tagline: "Estadísticas de rendimiento de caché",
            nav_dialog_links: "Enlaces de Diálogo",
            nav_dialog_links_tagline: "Gestionar configuraciones de enlaces de diálogo y modal",
            nav_i18n_maint: "Mant. I18n",
            nav_i18n_maint_tagline: "Mantenimiento de internacionalización y gestión de microcopia",
            nav_meta_maint: "Mant. Meta",
            nav_meta_maint_tagline: "Mantenimiento de metadatos y configuración",
            nav_bell_drawer: "Cajón de Campana",
            nav_bell_drawer_tagline: "Gestión de notificaciones y configuración del cajón de campana",
            nav_meter: "Medidor",
            nav_meter_tagline: "Medición de uso y analíticas",
            nav_deeplinks: "Enlaces Profundos",
            nav_deeplinks_tagline: "Gestión y seguimiento de enlaces profundos",
            nav_rss: "RSS",
            nav_rss_tagline: "Gestión de feeds RSS y sindicación",
            nav_core_assets: "Activos Principales",
            nav_core_assets_tagline: "Gestionar activos y recursos principales de la aplicación",
            nav_web_hooks: "Web Hooks",
            nav_web_hooks_tagline: "Configuración y monitoreo de webhooks",
            nav_snippets: "Fragmentos",
            nav_snippets_tagline: "Gestión de fragmentos de código y contenido",
            nav_snippets_sql: "SQL",
            nav_snippets_sql_tagline: "Fragmentos y plantillas de consultas SQL",
            nav_snippets_js: "JS",
            nav_snippets_js_tagline: "Fragmentos de código JavaScript",
            nav_rollers: "Magnet Builder",
            nav_rollers_tagline: "Despliegues progresivos y gestión de versiones",
            nav_rollers_primary_nav: "Nav Primaria",
            nav_rollers_primary_nav_tagline: "Configuración del roller de navegación primaria"
          },
          "zh-Hans": {
            welcome_back: "欢迎回来",
            please_enter_your_details: "请输入您的详细信息",
            email: "电子邮件",
            enter_your_email: "输入您的电子邮件",
            password: "密码",
            enter_your_password: "输入您的密码",
            enter_email_and_password: "输入邮箱和密码",
            sign_in: "登入",
            forgot_password: "忘记密码？",
            remember_email: "记住我的邮箱",
            dont_have_an_account: "没有账户？",
            sign_up: "报名",
            please_enter_your_details_to_get_started: "请输入您的详细信息以开始",
            already_have_an_account: "已有账户？",
            log_in: "登录",
            name: "姓名",
            enter_your_name: "输入您的姓名",
            first_name: "名字",
            last_name: "姓氏",
            company: "公司",
            phone: "电话",
            confirm_password: "确认密码",
            create_account: "创建账户",
            home: "首页",
            dashboard: "仪表板",
            correspondence: "信件",
            settings: "设置",
            sign_out: "登出",
            reset_password: "重置密码",
            new_password: "新密码",
            confirm_new_password: "确认新密码",
            enter_new_password: "输入新密码",
            enter_company_name: "输入您的公司名称",
            enter_phone_number: "输入您的电话号码",
            reenter_password: "重新输入您的密码",
            update_password: "更新密码",
            update_your_password: "更新您的账户密码",
            are_you_sure_sign_out: "您确定要登出吗？",
            enter_email_for_reset: "请输入您的电子邮件以接收密码重置链接",
            send_reset_link: "发送重置链接",
            remember_password: "记得您的密码？",
            cancel: "取消",
            save: "保存",
            delete: "删除",
            edit: "编辑",
            loading: "加载中...",
            error: "错误",
            success: "成功",
            refresh: "刷新",
            search: "搜索",
            filter: "筛选",
            sort: "排序",
            view: "查看",
            close: "关闭",
            submit: "提交",
            back: "返回",
            next: "下一个",
            previous: "上一个",
            confirm: "确认",
            yes: "是",
            no: "否",
            ok: "确定",
            // Validation messages
            validation_email_required: "请输入您的电子邮件",
            validation_email_invalid: "请输入有效的电子邮件地址",
            validation_password_required: "请输入您的密码",
            validation_password_min_length: "密码必须至少10个字符",
            validation_password_mismatch: "密码不匹配",
            validation_first_name_required: "请输入您的名字",
            validation_last_name_required: "请输入您的姓氏",
            validation_new_password_required: "请输入新密码",
            // Success messages
            success_welcome_back: "欢迎回来！",
            success_password_reset: "密码重置成功",
            success_signed_out: "成功登出",
            success_reset_link_sent: "密码重置链接已发送！|请检查您的电子邮件",
            // Error messages
            error_signin_failed: "登录失败",
            error_signup_failed: "注册失败",
            error_network: "网络错误 - 请重试",
            error_password_reset_required: "需要重置密码 - 正在重定向...",
            // Loading states
            loading_signing_in: "正在登录...",
            loading_creating_account: "正在创建账户...",
            loading_resetting_password: "正在重置密码...",
            // Navigation - Primary
            nav_home: "首页",
            nav_home_tagline: "仪表板和概览",
            // Navigation - Secondary (Home)
            nav_home_apps: "我的应用",
            nav_home_apps_tagline: "您的应用程序和集成",
            nav_home_dash: "仪表板",
            nav_home_dash_tagline: "主仪表板和分析",
            nav_engagements: "互动",
            nav_engagements_tagline: "客户互动工具和交互",
            nav_develop: "开发",
            nav_develop_tagline: "开发工具和资源",
            nav_profile: "个人资料",
            nav_profile_tagline: "账户设置和偏好",
            // Navigation - Secondary (Engagements)
            nav_engagements_surveys: "调查",
            nav_engagements_surveys_tagline: "创建和管理客户调查",
            nav_engagements_thumbs: "反馈",
            nav_engagements_thumbs_tagline: "收集赞成和反对意见",
            nav_engagements_voicemail: "语音信箱",
            nav_engagements_voicemail_tagline: "语音留言收集",
            nav_engagements_guidedtours: "引导式导览",
            nav_engagements_guidedtours_tagline: "交互式产品导览",
            nav_engagements_slideshows: "幻灯片",
            nav_engagements_slideshows_tagline: "内容幻灯片和演示",
            nav_engagements_abtests: "A/B测试",
            nav_engagements_abtests_tagline: "A/B测试活动",
            nav_engagements_questionnaires: "问卷",
            nav_engagements_questionnaires_tagline: "详细问卷和表单",
            // Navigation - Secondary (Develop)
            nav_develop_documentation: "文档",
            nav_develop_documentation_tagline: "API和产品文档",
            nav_develop_devtools: "开发工具",
            nav_develop_devtools_tagline: "开发者工具和实用程序",
            nav_develop_kbase: "知识库",
            nav_develop_kbase_tagline: "技术知识库和文章",
            nav_develop_hackathon: "黑客马拉松",
            nav_develop_hackathon_tagline: "黑客马拉松活动和挑战",
            nav_develop_partner: "合作伙伴",
            nav_develop_partner_tagline: "合作伙伴计划和集成",
            nav_develop_certification: "认证",
            nav_develop_certification_tagline: "开发者认证计划",
            // Navigation - Secondary (Profile)
            nav_profile_aboutme: "关于我",
            nav_profile_aboutme_tagline: "查看和编辑您的个人信息",
            nav_profile_badges: "徽章",
            nav_profile_badges_tagline: "查看您获得的徽章和成就",
            nav_profile_language: "语言",
            nav_profile_language_tagline: "管理语言设置和偏好",
            nav_reset_password: "重置密码",
            nav_reset_password_tagline: "更改您的账户密码",
            nav_sign_out: "登出",
            nav_sign_out_tagline: "退出您的账户",
            // Navigation - Primary (Account)
            nav_account: "账户",
            nav_account_tagline: "账户管理和支持",
            // Navigation - Secondary (Account)
            nav_account_contact: "联系",
            nav_account_contact_tagline: "联系支持和销售",
            nav_account_pricetier: "价格等级",
            nav_account_pricetier_tagline: "查看和管理定价计划",
            nav_account_helpfaq: "帮助和常见问题",
            nav_account_helpfaq_tagline: "常见问题和帮助",
            nav_account_team: "团队",
            nav_account_team_tagline: "管理团队成员和权限",
            nav_account_terms: "条款",
            nav_account_terms_tagline: "服务条款和法律协议",
            // Admin Console Navigation
            nav_home: "主页",
            nav_home_tagline: "管理控制台主页仪表板",
            nav_silo_audits: "仓库审计",
            nav_silo_audits_tagline: "审计和检查仓库数据",
            nav_cache: "缓存",
            nav_cache_tagline: "缓存管理和统计",
            nav_cache_stats: "统计",
            nav_cache_stats_tagline: "缓存性能统计",
            nav_dialog_links: "对话框链接",
            nav_dialog_links_tagline: "管理对话框和模态链接配置",
            nav_i18n_maint: "国际化维护",
            nav_i18n_maint_tagline: "国际化维护和微文案管理",
            nav_meta_maint: "元数据维护",
            nav_meta_maint_tagline: "元数据维护和配置",
            nav_bell_drawer: "铃铛抽屉",
            nav_bell_drawer_tagline: "通知管理和铃铛抽屉配置",
            nav_meter: "计量器",
            nav_meter_tagline: "使用计量和分析",
            nav_deeplinks: "深层链接",
            nav_deeplinks_tagline: "深层链接管理和跟踪",
            nav_rss: "RSS",
            nav_rss_tagline: "RSS订阅源管理和联合",
            nav_core_assets: "核心资产",
            nav_core_assets_tagline: "管理核心应用程序资产和资源",
            nav_web_hooks: "网络钩子",
            nav_web_hooks_tagline: "Webhook配置和监控",
            nav_snippets: "代码片段",
            nav_snippets_tagline: "代码和内容片段管理",
            nav_snippets_sql: "SQL",
            nav_snippets_sql_tagline: "SQL查询片段和模板",
            nav_snippets_js: "JS",
            nav_snippets_js_tagline: "JavaScript代码片段",
            nav_rollers: "Magnet Builder",
            nav_rollers_tagline: "滚动部署和版本管理",
            nav_rollers_primary_nav: "主导航",
            nav_rollers_primary_nav_tagline: "主导航滚动器配置"
          }
        }
      }
    },
    SIT: {
      SSE: {
        M5T: {
          en: {
            welcome_back: ["Welcome back", "Good to see you again", "Hello again"],
            please_enter_your_details: "Please enter your details",
            email: "Email",
            enter_your_email: "Enter your email",
            password: "Password",
            enter_your_password: "Enter your password",
            sign_in: "Sign in"
          }
        }
      }
    },
    UAT: {
      SSE: {
        M5T: {
          en: {
            welcome_back: "Welcome back",
            please_enter_your_details: "Please enter your details",
            email: "Email",
            enter_your_email: "Enter your email",
            password: "Password",
            enter_your_password: "Enter your password",
            sign_in: "Sign in"
          }
        }
      }
    },
    QA: {
      SSE: {
        M5T: {
          en: {
            welcome_back: "Welcome back",
            please_enter_your_details: "Please enter your details",
            email: "Email",
            enter_your_email: "Enter your email",
            password: "Password",
            enter_your_password: "Enter your password",
            sign_in: "Sign in"
          }
        }
      }
    },
    PROD: {
      SSE: {
        M5T: {
          en: {
            welcome_back: "Welcome back",
            please_enter_your_details: "Please enter your details",
            email: "Email",
            enter_your_email: "Enter your email",
            password: "Password",
            enter_your_password: "Enter your password",
            sign_in: "Sign in"
          }
        }
      }
    }
  };
  // Current context (overridable via setContext)
  static #context = {
    buildMode: "DEV",
    product: "SSE",
    whitelabel: "M5T",
    lang: "en"
  };
  /**
   * Set the current context for microcopy retrieval
   * @param {Object} context - Context object
   * @param {string} context.buildMode - Build mode (DEV, SIT, UAT, QA, PROD)
   * @param {string} context.product - Product name (SSE, etc.)
   * @param {string} context.whitelabel - Whitelabel name (M5T, etc.)
   * @param {string} context.lang - Language code (en, es, zh-Hans, etc.)
   */
  static setContext({ buildMode, product, whitelabel, lang }) {
    if (buildMode) this.#context.buildMode = buildMode;
    if (product) this.#context.product = product;
    if (whitelabel) this.#context.whitelabel = whitelabel;
    if (lang) this.#context.lang = lang;
  }
  /**
   * Get the current context
   * @returns {Object} Current context
   */
  static getContext() {
    return { ...this.#context };
  }
  /**
   * Get microcopy by token
   *
   * Falls back to LOCAL's copy for the same product/whitelabel/lang when the
   * requested buildMode is missing the token. LOCAL is the only buildMode with
   * a complete, actively-maintained token set — SIT/QA/UAT/PROD were seeded as
   * small stubs (7 tokens) and never backfilled as new tokens were added to
   * LOCAL over time, so before this fallback, PROD alone was missing ~90% of
   * every real token (forgot_password, sign_up, send_reset_link,
   * nav_settings*, and more) and callers chaining .toUpperCase()/.textContent
   * on the result crashed outright. Treating LOCAL as the authoritative
   * content and other buildModes as override-only (rather than requiring each
   * to duplicate the full set) also means a newly-added token works
   * everywhere immediately, instead of silently reproducing this same bug the
   * next time someone adds one.
   * @param {string} token - Microcopy token (e.g., 'welcome_back')
   * @param {Object} overrideContext - Optional context override
   * @returns {string|null} Microcopy text (randomized if array), or null if not found anywhere
   */
  static get(token, overrideContext = {}) {
    const ctx = { ...this.#context, ...overrideContext };
    const { buildMode, product, whitelabel, lang } = ctx;
    try {
      let value = this.#data[buildMode]?.[product]?.[whitelabel]?.[lang]?.[token];
      let resolvedFrom = buildMode;
      if (!value && buildMode !== "LOCAL") {
        value = this.#data.LOCAL?.[product]?.[whitelabel]?.[lang]?.[token];
        resolvedFrom = "LOCAL (fallback)";
      }
      if (!value) {
        console.warn(`[MicrocopyManager] Token not found: ${token} (${buildMode}/${product}/${whitelabel}/${lang}, LOCAL fallback also missing it)`);
        return null;
      }
      if (resolvedFrom === "LOCAL (fallback)") {
        console.warn(`[MicrocopyManager] Token '${token}' missing from ${buildMode} — served from LOCAL instead. Backfill ${buildMode}'s block if this is intentionally different copy.`);
      }
      if (Array.isArray(value)) {
        return value[Math.floor(Math.random() * value.length)];
      }
      return value;
    } catch (err) {
      console.error(`[MicrocopyManager] Error retrieving token: ${token}`, err);
      return null;
    }
  }
  /**
   * Get all microcopy for a given context
   * @param {Object} overrideContext - Optional context override
   * @returns {Object|null} All microcopy tokens, or null if not found
   */
  static getAll(overrideContext = {}) {
    const ctx = { ...this.#context, ...overrideContext };
    const { buildMode, product, whitelabel, lang } = ctx;
    try {
      return this.#data[buildMode]?.[product]?.[whitelabel]?.[lang] || null;
    } catch (err) {
      console.error(`[MicrocopyManager] Error retrieving all tokens`, err);
      return null;
    }
  }
  /**
   * Check if a token exists
   * @param {string} token - Microcopy token
   * @param {Object} overrideContext - Optional context override
   * @returns {boolean} True if token exists
   */
  static has(token, overrideContext = {}) {
    const ctx = { ...this.#context, ...overrideContext };
    const { buildMode, product, whitelabel, lang } = ctx;
    try {
      return !!this.#data[buildMode]?.[product]?.[whitelabel]?.[lang]?.[token];
    } catch (err) {
      return false;
    }
  }
  /**
   * Get all available languages for current context
   * @returns {string[]} Array of language codes
   */
  static getAvailableLanguages() {
    const { buildMode, product, whitelabel } = this.#context;
    try {
      return Object.keys(this.#data[buildMode]?.[product]?.[whitelabel] || {});
    } catch (err) {
      return [];
    }
  }
  /**
   * Update microcopy (for admin tool)
   * @param {string} token - Microcopy token
   * @param {string|string[]} value - New value
   * @param {Object} overrideContext - Optional context override
   * @returns {boolean} Success
   */
  static update(token, value, overrideContext = {}) {
    const ctx = { ...this.#context, ...overrideContext };
    const { buildMode, product, whitelabel, lang } = ctx;
    try {
      if (!this.#data[buildMode]) this.#data[buildMode] = {};
      if (!this.#data[buildMode][product]) this.#data[buildMode][product] = {};
      if (!this.#data[buildMode][product][whitelabel]) this.#data[buildMode][product][whitelabel] = {};
      if (!this.#data[buildMode][product][whitelabel][lang]) this.#data[buildMode][product][whitelabel][lang] = {};
      this.#data[buildMode][product][whitelabel][lang][token] = value;
      return true;
    } catch (err) {
      console.error(`[MicrocopyManager] Error updating token: ${token}`, err);
      return false;
    }
  }
  /**
   * Delete microcopy (for admin tool)
   * @param {string} token - Microcopy token
   * @param {Object} overrideContext - Optional context override
   * @returns {boolean} Success
   */
  static delete(token, overrideContext = {}) {
    const ctx = { ...this.#context, ...overrideContext };
    const { buildMode, product, whitelabel, lang } = ctx;
    try {
      delete this.#data[buildMode]?.[product]?.[whitelabel]?.[lang]?.[token];
      return true;
    } catch (err) {
      console.error(`[MicrocopyManager] Error deleting token: ${token}`, err);
      return false;
    }
  }
  /**
   * Export all data (for admin tool)
   * @returns {Object} Complete microcopy data
   */
  static exportData() {
    return JSON.parse(JSON.stringify(this.#data));
  }
  /**
   * Import data (for admin tool)
   * @param {Object} data - Microcopy data to import
   * @returns {boolean} Success
   */
  static importData(data) {
    try {
      this.#data = data;
      return true;
    } catch (err) {
      console.error(`[MicrocopyManager] Error importing data`, err);
      return false;
    }
  }
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { MicrocopyManager };
}
class I18nController {
  static #initialized = false;
  static #currentRoute = null;
  static #observer = null;
  /**
   * Initialize the i18n controller
   * Sets up MicrocopyManager context and subscribes to route changes
   */
  static initialize() {
    if (this.#initialized) {
      console.warn("[I18nController] Already initialized");
      return;
    }
    const context = this.#loadContext();
    MicrocopyManager.setContext(context);
    console.log("[I18nController] Initialized with context:", context);
    console.log("[I18nController] Available languages:", this.getAvailableLanguages());
    if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
      console.log("[I18nController] Debug mode enabled");
    }
    this.#subscribeToRouteChanges();
    this.#setupMutationObserver();
    this.#initialized = true;
    this.refresh();
  }
  /**
   * Map Vite's MODE to standardized build modes
   * Standardized: LOCAL, DEV, SIT, QA, PROD
   * @param {string} viteMode - Vite's import.meta.env.MODE
   * @returns {string} Standardized build mode
   */
  static #mapViteModeToStandardBuildMode(viteMode) {
    const modeMap = {
      "development": "LOCAL",
      "local": "LOCAL",
      "dev": "DEV",
      "sit": "SIT",
      "qa": "QA",
      "uat": "QA",
      // Map UAT to QA
      "production": "PROD",
      "prod": "PROD"
    };
    const normalized = viteMode.toLowerCase();
    return modeMap[normalized] || "DEV";
  }
  /**
   * Load context from featureFlags and localStorage
   * @returns {Object} Context object
   */
  static #loadContext() {
    const envMode = "production";
    const buildMode = this.#mapViteModeToStandardBuildMode(envMode);
    const whitelabel = localStorage.getItem(FEATURE_FLAGS.FF_SSE_LS_WHITELABEL) || FEATURE_FLAGS.FF_SSE_I18N_WHITELABEL;
    const lang = localStorage.getItem(FEATURE_FLAGS.FF_SSE_LS_USER_LANG) || FEATURE_FLAGS.FF_SSE_I18N_LANG;
    return {
      buildMode,
      product: FEATURE_FLAGS.FF_SSE_I18N_PRODUCT,
      whitelabel,
      lang
    };
  }
  /**
   * Subscribe to Neodigm Carousel route changes
   */
  static #subscribeToRouteChanges() {
    if (typeof neodigmCarousel !== "undefined" && neodigmCarousel.setOnAfterNav) {
      neodigmCarousel.setOnAfterNav(
        (carouselId, pageIndex, pageName) => {
          if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
            console.log("[I18nController] Route changed:", pageName);
          }
          this.#currentRoute = pageName;
          setTimeout(() => {
            this.refresh();
          }, FEATURE_FLAGS.FF_SSE_I18N_APPLY_DELAY_MS);
        },
        FEATURE_FLAGS.FF_CLIENT_CAROUSEL_ID
      );
    } else {
      console.warn("[I18nController] neodigmCarousel not found. Using fallback polling.");
      this.#fallbackPolling();
    }
  }
  /**
   * Fallback polling mechanism if neodigmCarousel is not available
   */
  static #fallbackPolling() {
    setInterval(() => {
      const currentPage = document.querySelector("[data-n55-carousel-page-name]");
      const pageName = currentPage?.getAttribute("data-n55-carousel-page-name");
      if (pageName && pageName !== this.#currentRoute) {
        this.#currentRoute = pageName;
        this.refresh();
      }
    }, 500);
  }
  /**
   * Set up MutationObserver to watch for dynamic DOM changes
   * Useful for SPAs with component-based rendering
   */
  static #setupMutationObserver() {
    if (this.#observer) return;
    this.#observer = new MutationObserver((mutations) => {
      let shouldRefresh = false;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.hasAttribute("data-meta-copywrite-i118n") || node.querySelector("[data-meta-copywrite-i118n]")) {
              shouldRefresh = true;
              break;
            }
          }
        }
        if (shouldRefresh) break;
      }
      if (shouldRefresh) {
        if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
          console.log("[I18nController] DOM mutation detected, refreshing i18n");
        }
        this.refresh();
      }
    });
    this.#observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  /**
   * Apply microcopy to all elements with data-meta-copywrite-i118n attribute
   * Searches both regular DOM and Shadow DOM
   */
  static refresh() {
    if (!this.#initialized) {
      console.warn("[I18nController] Not initialized. Call initialize() first.");
      return;
    }
    this.#processElements(document.body);
    this.#processShadowDOMs(document.body);
    if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
      console.log("[I18nController] Refresh complete");
    }
  }
  /**
   * Process elements with data-meta-copywrite-i118n attribute
   * @param {HTMLElement} rootElement - Root element to search within
   */
  static #processElements(rootElement) {
    const elements = rootElement.querySelectorAll("[data-meta-copywrite-i118n]");
    if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG && elements.length > 0) {
      console.log(`[I18nController] Processing ${elements.length} elements`);
    }
    elements.forEach((element) => {
      try {
        const configStr = element.getAttribute("data-meta-copywrite-i118n");
        const config = JSON.parse(configStr);
        if (!config.token) {
          console.warn("[I18nController] Missing token in config:", config);
          return;
        }
        const attribute = config.attribute || "textContent";
        const microcopy = MicrocopyManager.get(config.token);
        if (microcopy === null) {
          console.warn(`[I18nController] Microcopy not found for token: ${config.token}`);
          return;
        }
        if (attribute === "textContent") {
          element.textContent = microcopy;
        } else if (attribute === "innerHTML") {
          element.innerHTML = microcopy;
        } else {
          element.setAttribute(attribute, microcopy);
        }
        if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
          console.log(`[I18nController] Applied "${microcopy}" to ${attribute} for token: ${config.token}`);
        }
      } catch (err) {
        console.error("[I18nController] Error processing element:", err, element);
      }
    });
  }
  /**
   * Recursively process Shadow DOMs
   * @param {HTMLElement} rootElement - Root element to search within
   */
  static #processShadowDOMs(rootElement) {
    const shadowHosts = rootElement.querySelectorAll("*");
    shadowHosts.forEach((host) => {
      if (host.shadowRoot) {
        this.#processElements(host.shadowRoot);
        this.#processShadowDOMs(host.shadowRoot);
      }
    });
  }
  /**
   * Change language and refresh all microcopy
   * @param {string} langCode - Language code (e.g., 'en', 'es', 'zh-Hans')
   */
  static setLanguage(langCode) {
    const availableLanguages = MicrocopyManager.getAvailableLanguages();
    if (!availableLanguages.includes(langCode)) {
      console.error(`[I18nController] Language not available: ${langCode}. Available:`, availableLanguages);
      return;
    }
    localStorage.setItem(FEATURE_FLAGS.FF_SSE_LS_USER_LANG, langCode);
    MicrocopyManager.setContext({ lang: langCode });
    console.log("[I18nController] Language changed to:", langCode);
    const event = new CustomEvent("language-changed", {
      bubbles: true,
      composed: true,
      detail: { lang: langCode }
    });
    document.dispatchEvent(event);
    this.refresh();
  }
  /**
   * Change whitelabel and refresh all microcopy
   * @param {string} whitelabel - Whitelabel identifier
   */
  static setWhitelabel(whitelabel) {
    localStorage.setItem(FEATURE_FLAGS.FF_SSE_LS_WHITELABEL, whitelabel);
    MicrocopyManager.setContext({ whitelabel });
    if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
      console.log("[I18nController] Whitelabel changed to:", whitelabel);
    }
    this.refresh();
  }
  /**
   * Get current language
   * @returns {string} Current language code
   */
  static getLanguage() {
    return MicrocopyManager.getContext().lang;
  }
  /**
   * Get available languages
   * @returns {string[]} Array of language codes
   */
  static getAvailableLanguages() {
    return MicrocopyManager.getAvailableLanguages();
  }
  /**
   * Get current context
   * @returns {Object} Current context
   */
  static getContext() {
    return MicrocopyManager.getContext();
  }
  /**
   * Clean up (remove observers, etc.)
   */
  static destroy() {
    if (this.#observer) {
      this.#observer.disconnect();
      this.#observer = null;
    }
    this.#initialized = false;
    this.#currentRoute = null;
    if (FEATURE_FLAGS.FF_SSE_I18N_DEBUG) {
      console.log("[I18nController] Destroyed");
    }
  }
}
if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      I18nController.initialize();
    });
  } else {
    I18nController.initialize();
  }
}
class MachVive {
  /**
   * Initialization state
   * @private
   */
  static _initialized = false;
  /**
   * Debug mode flag
   * @private
   */
  static _debug = false;
  /**
   * Initialize MachVive bridge
   * Binds to mvvSSEther message callbacks and routes to PubSub
   *
   * NOTE: This is called automatically by mvvSSEther when it detects MachVive.
   * You can also call it manually after mvvSSEther is loaded.
   *
   * @param {Object} options - Configuration options
   * @param {boolean} options.debug - Enable debug logging
   * @returns {MachVive} Returns class for chaining
   * @public
   */
  static init(options = {}) {
    if (this._initialized) {
      console.warn("[MachVive] Already initialized, skipping duplicate initialization");
      return this;
    }
    this._debug = options.debug || false;
    if (!window.mvvSSEther) {
      console.error("[MachVive] mvvSSEther not found - cannot initialize bridge");
      console.error("[MachVive] Make sure mvvSSEther snippet is loaded before MachVive.init()");
      return this;
    }
    console.log("[MachVive] Initializing SSE to PubSub bridge...");
    const boundCallback = (messagePackage) => {
      this._handleSSEMessage(messagePackage);
    };
    window.mvvSSEther.onmessage(boundCallback);
    this._initialized = true;
    console.log("[MachVive] ✓ SSE to PubSub bridge initialized successfully");
    console.log("[MachVive] ✓ Bound callback to mvvSSEther.onmessage");
    return this;
  }
  /**
   * Handle incoming SSE message
   * Routes messages with valid topics to PubSub
   *
   * @param {Object} messagePackage - SSE message package from mvvSSEther
   * @param {string} messagePackage.id - Event ID
   * @param {Object} messagePackage.data - Decrypted message data
   * @param {string} messagePackage.raw - Raw encrypted data
   * @param {string} messagePackage.timestamp - Message timestamp
   * @private
   */
  static _handleSSEMessage(messagePackage) {
    try {
      if (this._debug) {
        console.log("[MachVive] SSE message received:", messagePackage);
      }
      const data = messagePackage?.data;
      if (!data) {
        if (this._debug) {
          console.log("[MachVive] No data in message, skipping");
        }
        return;
      }
      const packageData = data.data || data.package || data;
      if (!packageData) {
        if (this._debug) {
          console.log("[MachVive] No package found in message, skipping");
        }
        return;
      }
      let cfgObject = packageData.cfg;
      const payload = packageData.msg;
      if (this._debug) {
        console.log("[MachVive] cfg (raw):", cfgObject, "type:", typeof cfgObject, "length:", cfgObject?.length);
        console.log("[MachVive] msg (raw):", payload);
      }
      if (typeof cfgObject === "string") {
        if (cfgObject.trim() === "") {
          if (this._debug) {
            console.log("[MachVive] cfg is empty string, skipping");
          }
          return;
        }
        try {
          cfgObject = JSON.parse(cfgObject);
          console.log("[MachVive] cfg (parsed):", cfgObject);
        } catch (parseError) {
          console.warn("[MachVive] Failed to parse cfg as JSON:", {
            cfg: cfgObject,
            cfgLength: cfgObject.length,
            error: parseError.message
          });
          return;
        }
      } else if (!cfgObject) {
        if (this._debug) {
          console.log("[MachVive] cfg is empty/null, skipping");
        }
        return;
      }
      const topic = cfgObject?.topic;
      if (!topic) {
        if (this._debug) {
          console.log("[MachVive] No topic found in cfg, skipping");
        }
        return;
      }
      console.log("[MachVive] Extracted topic:", topic);
      if (!this._isValidTopic(topic)) {
        console.warn(`[MachVive] Topic '${topic}' not found in AppBroadcast, skipping`);
        return;
      }
      this._publishToPubSub(topic, payload, messagePackage, data);
    } catch (error) {
      console.error("[MachVive] Error handling SSE message:", error);
    }
  }
  /**
   * Validate if topic exists in AppBroadcast
   *
   * @param {string} topic - Topic name to validate
   * @returns {boolean} True if topic exists in AppBroadcast
   * @private
   */
  static _isValidTopic(topic) {
    if (!AppBroadcast || !AppBroadcast.hasOwnProperty(topic)) {
      console.warn(`[MachVive] Topic '${topic}' not found in AppBroadcast`);
      return false;
    }
    return true;
  }
  /**
   * Publish message to PubSub topic
   *
   * @param {string} topic - PubSub topic name (from AppBroadcast)
   * @param {*} payload - Message payload (package.msg)
   * @param {Object} messagePackage - Original SSE message package (for metadata)
   * @param {Object} fullData - Full decrypted message data (includes all fields)
   * @private
   */
  static _publishToPubSub(topic, payload, messagePackage, fullData) {
    try {
      if (!window.PubSub && typeof PubSub === "undefined") {
        console.error("[MachVive] PubSub not available");
        return;
      }
      const PubSubLib = window.PubSub || PubSub;
      const pubsubData = {
        message: payload,
        metadata: {
          source: "sse",
          sseEventId: messagePackage.id,
          timestamp: messagePackage.timestamp,
          appGuid: fullData.app_guid,
          channelGuid: fullData.channel_guid,
          eventAction: fullData.event_action,
          status: fullData.status,
          class: fullData.class,
          raw: fullData
        }
      };
      console.log(`[MachVive] Publishing to topic '${topic}':`, pubsubData);
      const topicString = AppBroadcast[topic];
      console.log(`[MachVive] AppBroadcast.${topic} = '${topicString}'`);
      PubSubLib.publish(topicString, pubsubData);
      console.log(`[MachVive] ✓ Published SSE message to topic: ${topic}`);
    } catch (error) {
      console.error(`[MachVive] Error publishing to topic '${topic}':`, error);
    }
  }
  /**
   * Enable/disable debug logging
   *
   * @param {boolean} enabled - Enable debug mode
   * @returns {MachVive} Returns class for chaining
   * @public
   */
  static debug(enabled) {
    this._debug = enabled;
    console.log(`[MachVive] Debug mode ${enabled ? "enabled" : "disabled"}`);
    return this;
  }
  /**
   * Check if MachVive is initialized
   *
   * @returns {boolean} True if initialized
   * @public
   */
  static isInitialized() {
    return this._initialized;
  }
  /**
   * Reset MachVive (for testing/debugging)
   *
   * @returns {MachVive} Returns class for chaining
   * @public
   */
  static reset() {
    this._initialized = false;
    this._debug = false;
    console.log("[MachVive] Reset complete");
    return this;
  }
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MachVive;
}
if (typeof window !== "undefined") {
  window.MachVive = MachVive;
}
const COLLAPSE_KEY = "m5t_sidenav_collapsed";
const ESC$1 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
class M5TSideNav extends HTMLElement {
  static get observedAttributes() {
    return ["data-active-token", "data-collapsed"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.items = [];
    this.orgs = [];
    this.activeOrgGuid = null;
    this.activeToken = null;
    this.footerBadge = null;
    this.loading = false;
    this.lastFocus = null;
  }
  // Mobile-drawer focus-trap + Escape; bound once, attached in connectedCallback.
  #mql = null;
  #keydown = (e) => {
    if (this.getAttribute("data-open") !== "true") return;
    if (e.key === "Escape") {
      e.preventDefault();
      this.closeDrawer();
      return;
    }
    if (e.key === "Tab") {
      const f = this.#focusables();
      if (f.length < 2) return;
      const first = f[0], last = f[f.length - 1];
      const active = this.shadowRoot.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  #onMediaChange = () => {
    this.closeDrawer();
    this.#syncInert();
  };
  connectedCallback() {
    if (!this.hasAttribute("data-collapsed")) {
      try {
        if (localStorage.getItem(COLLAPSE_KEY) === "true") this.setAttribute("data-collapsed", "true");
      } catch {
      }
    }
    this.activeToken = this.getAttribute("data-active-token") || null;
    this.render();
    this.#attach();
    this.addEventListener("keydown", this.#keydown);
    this.#mql = window.matchMedia("(max-width: 768px)");
    this.#mql.addEventListener("change", this.#onMediaChange);
    this.#syncInert();
  }
  disconnectedCallback() {
    this.removeEventListener("keydown", this.#keydown);
    this.#mql?.removeEventListener("change", this.#onMediaChange);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal || !this.shadowRoot) return;
    if (name === "data-active-token") {
      this.activeToken = newVal;
      this.#applyActive();
    } else if (name === "data-collapsed") {
      if (this.shadowRoot.firstChild) {
        this.render();
        this.#attach();
      }
    }
  }
  // ---- public API ----
  /** Batched state update — single render. */
  setState({ buttons, orgs, activeOrg, footerBadge, loading } = {}) {
    if (buttons !== void 0) this.items = Array.isArray(buttons) ? buttons : this.#safeParse(buttons) || [];
    if (orgs !== void 0) this.orgs = Array.isArray(orgs) ? orgs : this.#safeParse(orgs) || [];
    if (activeOrg !== void 0) this.activeOrgGuid = activeOrg || null;
    if (footerBadge !== void 0) this.footerBadge = footerBadge || null;
    if (loading !== void 0) this.loading = !!loading;
    if (this.shadowRoot) {
      this.render();
      this.#attach();
    }
  }
  setButtons(data) {
    this.setState({ buttons: data });
  }
  setOrgs(orgs) {
    this.setState({ orgs });
  }
  setActiveOrgGuid(guid) {
    this.setState({ activeOrg: guid });
  }
  setFooterBadge(badge) {
    this.setState({ footerBadge: badge });
  }
  setActiveToken(token) {
    this.activeToken = token || null;
    this.#applyActive();
  }
  toggleCollapsed(force) {
    const next = typeof force === "boolean" ? force : this.getAttribute("data-collapsed") !== "true";
    this.setAttribute("data-collapsed", String(next));
    try {
      localStorage.setItem(COLLAPSE_KEY, String(next));
    } catch {
    }
    this.dispatchEvent(new CustomEvent("nav-collapse", {
      bubbles: true,
      composed: true,
      detail: { pubsubTopic: "M5T_SIDE_NAV.COLLAPSE", collapsed: next, timestamp: Date.now() }
    }));
  }
  /** Open the mobile off-canvas drawer (focuses into it; focus is trapped until closed). */
  openDrawer() {
    this.lastFocus = this.shadowRoot.activeElement || document.activeElement;
    this.setAttribute("data-open", "true");
    this.shadowRoot.querySelector(".hamburger")?.setAttribute("aria-expanded", "true");
    this.#syncInert();
    const f = this.#focusables();
    (f[0] || this.shadowRoot.querySelector(".sidenav"))?.focus?.();
  }
  /** Close the mobile drawer and return focus to the trigger. No-op on desktop. */
  closeDrawer() {
    if (this.getAttribute("data-open") !== "true") return;
    this.removeAttribute("data-open");
    const ham = this.shadowRoot.querySelector(".hamburger");
    ham?.setAttribute("aria-expanded", "false");
    this.#syncInert();
    if (ham && this.#mql?.matches) ham.focus();
    else this.lastFocus?.focus?.();
  }
  toggleDrawer() {
    if (this.getAttribute("data-open") === "true") this.closeDrawer();
    else this.openDrawer();
  }
  // ---- internals ----
  #safeParse(raw) {
    try {
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error("[M5TSideNav] bad JSON:", e);
      return null;
    }
  }
  #esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ESC$1[c]);
  }
  #icon(name) {
    return name ? `<span class="ms" aria-hidden="true">${this.#esc(name)}</span>` : "";
  }
  #itemHTML(item) {
    if (!item || !item.token) return "";
    const active = item.token === this.activeToken;
    const route = item.route || "#";
    const href = route.startsWith("#") ? route : `#${route}`;
    const count = typeof item.count === "number" && item.count > 0 ? `<span class="badge">${item.count}</span>` : "";
    return `
      <a class="nav-item${active ? " active" : ""}" href="${this.#esc(href)}"
         data-token="${this.#esc(item.token)}" data-route="${this.#esc(route)}"
         ${active ? 'aria-current="page"' : ""}
         ${item.tagline ? `title="${this.#esc(item.tagline)}"` : ""}>
        ${this.#icon(item.icon)}
        <span class="label">${this.#esc(item.caption || item.token)}</span>
        ${count}
      </a>`;
  }
  #treeHTML() {
    if (this.loading) {
      return Array.from({ length: 6 }).map(() => `<div class="nav-skel" aria-hidden="true"><span class="skel-dot"></span><span class="skel-bar"></span></div>`).join("");
    }
    return this.items.map((node) => {
      if (node && node.group && Array.isArray(node.items)) {
        return `
          <div class="nav-group">
            <div class="group-label">${this.#esc(node.caption || "")}</div>
            ${node.items.map((i) => this.#itemHTML(i)).join("")}
          </div>`;
      }
      return this.#itemHTML(node);
    }).join("");
  }
  #footerHTML() {
    const badge = this.footerBadge;
    const opt = (o) => `<option value="${this.#esc(o.guid)}" ${o.guid === this.activeOrgGuid ? "selected" : ""}>${this.#esc(o.name || o.guid)}</option>`;
    const grouped = [];
    for (const o of Array.isArray(this.orgs) ? this.orgs : []) {
      const label = o.group || "";
      const last = grouped[grouped.length - 1];
      if (last && last.label === label) last.items.push(o);
      else grouped.push({ label, items: [o] });
    }
    const options = grouped.map(
      (g) => g.label ? `<optgroup label="${this.#esc(g.label)}">${g.items.map(opt).join("")}</optgroup>` : g.items.map(opt).join("")
    ).join("");
    const switcher = Array.isArray(this.orgs) && this.orgs.length > 1 ? `
      <label class="org-switcher" title="Active organization">
        ${this.#icon("corporate_fare")}
        <select class="org-select" aria-label="Active organization">
          ${options}
        </select>
      </label>` : "";
    const badgeHTML = badge ? `<span class="footer-badge">${this.#icon(badge.icon || "verified")}<span>${this.#esc(badge.caption || "")}</span></span>` : "";
    return `
      ${switcher}
      ${badgeHTML}
      <div class="footer-actions">
        <button class="footer-action" type="button" data-action="account" aria-label="Account" title="Account">${this.#icon("account_circle")}<span>Account</span></button>
        <button class="footer-action" type="button" data-action="lang" aria-label="Language" title="Language">${this.#icon("language")}<span>Language</span></button>
        <button class="footer-action" type="button" data-action="theme" aria-label="Toggle dark mode" title="Toggle dark mode">${this.#icon("dark_mode")}<span>Theme</span></button>
        <button class="footer-action" type="button" data-action="signout" aria-label="Sign out" title="Sign out">${this.#icon("logout")}<span>Sign out</span></button>
      </div>`;
  }
  render() {
    const collapsed = this.getAttribute("data-collapsed") === "true";
    this.shadowRoot.innerHTML = `
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
        aria-expanded="${this.getAttribute("data-open") === "true" ? "true" : "false"}" aria-controls="m5t-sidenav-aside">
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
            aria-expanded="${collapsed ? "false" : "true"}">
            <span class="ms" aria-hidden="true">${collapsed ? "chevron_right" : "chevron_left"}</span>
          </button>
        </div>

        <nav class="nav" aria-label="Primary"${this.loading ? ' aria-busy="true"' : ""}>
          ${this.#treeHTML()}
        </nav>

        <div class="footer" part="footer">
          ${this.#footerHTML()}
        </div>
      </aside>
    `;
  }
  #attach() {
    this.shadowRoot.querySelectorAll(".nav-item").forEach((a) => {
      a.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("nav-select", {
          bubbles: true,
          composed: true,
          detail: {
            pubsubTopic: "M5T_SIDE_NAV.TAP",
            token: a.getAttribute("data-token"),
            route: a.getAttribute("data-route"),
            caption: a.querySelector(".label")?.textContent || "",
            timestamp: Date.now()
          }
        }));
        this.closeDrawer();
      });
    });
    this.shadowRoot.querySelector(".collapse-btn")?.addEventListener("click", () => this.toggleCollapsed());
    this.shadowRoot.querySelector(".hamburger")?.addEventListener("click", () => this.toggleDrawer());
    this.shadowRoot.querySelector(".scrim")?.addEventListener("click", () => this.closeDrawer());
    this.#syncInert();
    this.shadowRoot.querySelector(".logo")?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("logo-click", {
        bubbles: true,
        composed: true,
        detail: { pubsubTopic: "M5T_SIDE_NAV.LOGO_TAP", timestamp: Date.now() }
      }));
    });
    this.shadowRoot.querySelector(".org-select")?.addEventListener("change", (e) => {
      this.dispatchEvent(new CustomEvent("org-switch", {
        bubbles: true,
        composed: true,
        detail: { pubsubTopic: "M5T_SIDE_NAV.ORG_SWITCH", orgGuid: e.target.value, timestamp: Date.now() }
      }));
    });
    this.shadowRoot.querySelectorAll(".footer-action").forEach((b) => {
      b.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("footer-action", {
          bubbles: true,
          composed: true,
          detail: { pubsubTopic: "M5T_SIDE_NAV.FOOTER_ACTION", action: b.getAttribute("data-action"), timestamp: Date.now() }
        }));
        this.closeDrawer();
      });
    });
    if (this.getAttribute("data-open") === "true") {
      this.#focusables()[0]?.focus();
    }
  }
  /** Surgical active-state swap — no innerHTML re-render (cheap + listener-stable). */
  #applyActive() {
    if (!this.shadowRoot) return;
    this.shadowRoot.querySelectorAll(".nav-item").forEach((a) => {
      const on = a.getAttribute("data-token") === this.activeToken;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  /** Focusable elements inside the drawer (for the mobile focus-trap). */
  #focusables() {
    return Array.from(
      this.shadowRoot.querySelectorAll(".sidenav a[href], .sidenav button:not([disabled]), .sidenav select")
    ).filter((el) => el.offsetParent !== null);
  }
  /** Off-canvas drawer must not be focusable/announced when closed on mobile. */
  #syncInert() {
    const aside = this.shadowRoot?.querySelector(".sidenav");
    if (!aside) return;
    const mobile = this.#mql ? this.#mql.matches : window.matchMedia("(max-width: 768px)").matches;
    aside.inert = mobile && this.getAttribute("data-open") !== "true";
  }
}
customElements.define("m5t-side-nav", M5TSideNav);
class NavMetaManager {
  static #appToken = null;
  /**
   * App-specific navigation configurations
   * Future: This will be fetched from coreMeta table
   */
  static #navConfigs = {
    "client-saas": [
      {
        token: "HOME",
        caption: "Home",
        enabled: true,
        icon: "--icon",
        admin_role: false,
        tagline: "Home Landing Page",
        secondary: [
          {
            token: "HOME_APPS",
            caption: "My Apps",
            enabled: true,
            icon: "--icon",
            admin_role: false,
            tagline: "My Apps"
          },
          {
            token: "HOME_DASH",
            caption: "Dashboard",
            enabled: true,
            icon: "--icon",
            admin_role: false,
            tagline: "Dashboard"
          }
        ]
      },
      {
        token: "ENGAGEMENTS",
        caption: "Engagements",
        enabled: true,
        icon: "var(--icon-engagements)",
        admin_role: false,
        tagline: "Customer engagement tools and interactions",
        secondary: [
          {
            token: "ENGAGEMENTS_SURVEYS",
            caption: "Surveys",
            enabled: true,
            icon: "var(--icon-surveys)",
            admin_role: false,
            tagline: "Create and manage customer surveys",
            secondary: []
          },
          {
            token: "ENGAGEMENTS_THUMBS",
            caption: "Feedback",
            enabled: true,
            icon: "var(--icon-feedback)",
            admin_role: false,
            tagline: "Quick thumbs up/down feedback",
            secondary: []
          },
          {
            token: "ENGAGEMENTS_VOICEMAIL",
            caption: "Voicemail",
            enabled: true,
            icon: "var(--icon-voicemail)",
            admin_role: false,
            tagline: "Voice message collection",
            secondary: []
          },
          {
            token: "ENGAGEMENTS_GUIDEDTOURS",
            caption: "Guided Tours",
            enabled: true,
            icon: "var(--icon-guided-tours)",
            admin_role: false,
            tagline: "Interactive product tours",
            secondary: []
          },
          {
            token: "ENGAGEMENTS_SLIDESHOWS",
            caption: "Slideshows",
            enabled: true,
            icon: "var(--icon-slideshows)",
            admin_role: false,
            tagline: "Content slideshows and presentations",
            secondary: []
          },
          {
            token: "ENGAGEMENTS_ABTESTS",
            caption: "A/B Tests",
            enabled: true,
            icon: "var(--icon-ab-tests)",
            admin_role: false,
            tagline: "A/B testing campaigns",
            secondary: []
          },
          {
            token: "ENGAGEMENTS_QUESTIONNAIRES",
            caption: "Questionnaires",
            enabled: true,
            icon: "var(--icon-questionnaires)",
            admin_role: false,
            tagline: "Detailed questionnaires and forms",
            secondary: []
          }
        ]
      },
      {
        token: "DEVELOP",
        caption: "Develop",
        enabled: true,
        icon: "var(--icon-develop)",
        admin_role: false,
        tagline: "Developer resources and tools",
        secondary: [
          {
            token: "DEVELOP_DOCUMENTATION",
            caption: "Documentation",
            enabled: true,
            icon: "var(--icon-documentation)",
            admin_role: false,
            tagline: "API and product documentation",
            secondary: []
          },
          {
            token: "DEVELOP_DEVTOOLS",
            caption: "Dev Tools",
            enabled: true,
            icon: "var(--icon-dev-tools)",
            admin_role: false,
            tagline: "Developer tools and utilities",
            secondary: []
          },
          {
            token: "DEVELOP_KBASE",
            caption: "Knowledge Base",
            enabled: true,
            icon: "var(--icon-knowledge-base)",
            admin_role: false,
            tagline: "Technical knowledge base and articles",
            secondary: []
          },
          {
            token: "DEVELOP_HACKATHON",
            caption: "Hackathon",
            enabled: true,
            icon: "var(--icon-hackathon)",
            admin_role: false,
            tagline: "Hackathon events and challenges",
            secondary: []
          },
          {
            token: "DEVELOP_PARTNER",
            caption: "Partner",
            enabled: true,
            icon: "var(--icon-partner)",
            admin_role: false,
            tagline: "Partner program and integrations",
            secondary: []
          },
          {
            token: "DEVELOP_CERTIFICATION",
            caption: "Certification",
            enabled: true,
            icon: "var(--icon-certification)",
            admin_role: false,
            tagline: "Developer certification programs",
            secondary: []
          }
        ]
      },
      {
        token: "PROFILE",
        caption: "Profile",
        enabled: true,
        icon: "var(--icon-profile)",
        admin_role: false,
        tagline: "Manage your personal profile and account",
        secondary: [
          {
            token: "PROFILE_ABOUTME",
            caption: "About Me",
            enabled: true,
            icon: "var(--icon-about-me)",
            admin_role: false,
            tagline: "View and edit your personal information",
            secondary: []
          },
          {
            token: "PROFILE_BADGES",
            caption: "Badges",
            enabled: true,
            icon: "var(--icon-badges)",
            admin_role: false,
            tagline: "View your earned badges and achievements",
            secondary: []
          },
          {
            token: "PROFILE_LANGUAGE",
            caption: "Language",
            enabled: true,
            icon: "var(--icon-profile-language)",
            admin_role: false,
            tagline: "Manage language settings and preferences",
            secondary: []
          },
          {
            token: "RESET_PASSWORD",
            caption: "Change Password",
            enabled: true,
            icon: "var(--icon-change-password)",
            admin_role: false,
            tagline: "Change your account password",
            secondary: []
          },
          {
            token: "SIGN_OUT",
            caption: "Sign Out",
            enabled: true,
            icon: "var(--icon-sign-out)",
            admin_role: false,
            tagline: "Log out of your account",
            secondary: []
          }
        ]
      },
      {
        token: "ACCOUNT",
        caption: "Account",
        enabled: true,
        icon: "var(--icon-account)",
        admin_role: false,
        tagline: "Account management and support",
        secondary: [
          {
            token: "ACCOUNT_CONTACT",
            caption: "Contact",
            enabled: true,
            icon: "var(--icon-contact)",
            admin_role: false,
            tagline: "Contact support and sales",
            secondary: []
          },
          {
            token: "ACCOUNT_PRICETIER",
            caption: "Price Tier",
            enabled: true,
            icon: "var(--icon-price-tier)",
            admin_role: false,
            tagline: "View and manage pricing plans",
            secondary: []
          },
          {
            token: "ACCOUNT_HELPFAQ",
            caption: "Help FAQ",
            enabled: true,
            icon: "var(--icon-help-faq)",
            admin_role: false,
            tagline: "Frequently asked questions",
            secondary: []
          },
          {
            token: "ACCOUNT_TEAM",
            caption: "Team",
            enabled: true,
            icon: "var(--icon-team)",
            admin_role: false,
            tagline: "Manage team members and roles",
            secondary: []
          },
          {
            token: "ACCOUNT_TERMS",
            caption: "Terms",
            enabled: true,
            icon: "var(--icon-terms)",
            admin_role: false,
            tagline: "Terms of service and legal documents",
            secondary: []
          }
        ]
      }
    ],
    "client-sse-console": [
      {
        token: "HOME",
        caption: "Home",
        enabled: true,
        icon: "fas fa-home",
        admin_role: false,
        tagline: "Admin console home dashboard",
        secondary: []
      },
      {
        token: "ACCOUNTS",
        caption: "Accounts",
        enabled: true,
        icon: "fas fa-user",
        admin_role: false,
        tagline: "User account management",
        secondary: []
      },
      {
        token: "GROUPS",
        caption: "Groups",
        enabled: true,
        icon: "fas fa-users-cog",
        admin_role: false,
        tagline: "Group and role management",
        secondary: []
      },
      {
        token: "QUESTIONNAIRES",
        caption: "Questionnaires",
        enabled: true,
        icon: "fas fa-clipboard-list",
        admin_role: false,
        tagline: "Client kickoff questionnaires — read answers and finalize",
        secondary: []
      },
      {
        token: "LEADS_MANAGE",
        caption: "Leads",
        enabled: true,
        icon: "fas fa-user-plus",
        admin_role: false,
        tagline: "Lead management and tracking",
        secondary: []
      },
      {
        token: "ROLLERS",
        caption: "Magnet Builder",
        enabled: true,
        icon: "fas fa-magnet",
        admin_role: false,
        tagline: "Build and configure magnets (steps, actions, flow)",
        secondary: []
      },
      {
        token: "SYSTEM",
        caption: "System",
        enabled: true,
        icon: "fas fa-server",
        admin_role: false,
        tagline: "System tools — dialog, health, and metering",
        secondary: [
          {
            token: "DIALOG",
            caption: "Dialog",
            enabled: true,
            icon: "fas fa-comment-alt",
            admin_role: false,
            tagline: "Dialog and modal management",
            secondary: []
          },
          {
            token: "HEALTH",
            caption: "Health",
            enabled: true,
            icon: "fas fa-heartbeat",
            admin_role: false,
            tagline: "API health and authentication testing",
            secondary: []
          },
          {
            token: "METER",
            caption: "Meter",
            enabled: true,
            icon: "fas fa-tachometer-alt",
            admin_role: false,
            tagline: "Usage metering and analytics",
            secondary: []
          }
        ]
      },
      {
        token: "APPS",
        caption: "Apps",
        enabled: true,
        icon: "fas fa-mobile-alt",
        admin_role: false,
        tagline: "Subscriber apps (EtherCards)",
        secondary: []
      },
      {
        token: "MESSAGES",
        caption: "Messages",
        enabled: true,
        icon: "fas fa-envelope",
        admin_role: false,
        tagline: "Message management and templates",
        secondary: []
      }
    ],
    "LaunCh_console_applet": [
      {
        token: "CONSOLE_HOME",
        caption: "Console Home",
        enabled: true,
        icon: "fas fa-terminal",
        admin_role: false,
        tagline: "Launch console home dashboard",
        secondary: []
      },
      {
        token: "SYSTEM_MONITOR",
        caption: "System Monitor",
        enabled: true,
        icon: "fas fa-desktop",
        admin_role: false,
        tagline: "Real-time system monitoring and health checks",
        secondary: [
          {
            token: "SYSTEM_MONITOR_CPU",
            caption: "CPU Usage",
            enabled: true,
            icon: "fas fa-microchip",
            admin_role: false,
            tagline: "Monitor CPU performance and load",
            secondary: []
          },
          {
            token: "SYSTEM_MONITOR_MEMORY",
            caption: "Memory",
            enabled: true,
            icon: "fas fa-memory",
            admin_role: false,
            tagline: "Track memory usage and allocation",
            secondary: []
          },
          {
            token: "SYSTEM_MONITOR_NETWORK",
            caption: "Network",
            enabled: true,
            icon: "fas fa-network-wired",
            admin_role: false,
            tagline: "Network traffic and connectivity",
            secondary: []
          }
        ]
      },
      {
        token: "LOGS",
        caption: "Logs",
        enabled: true,
        icon: "fas fa-file-medical-alt",
        admin_role: false,
        tagline: "View system logs and error reports",
        secondary: [
          {
            token: "LOGS_APPLICATION",
            caption: "Application",
            enabled: true,
            icon: "fas fa-code",
            admin_role: false,
            tagline: "Application-level logs",
            secondary: []
          },
          {
            token: "LOGS_SYSTEM",
            caption: "System",
            enabled: true,
            icon: "fas fa-server",
            admin_role: false,
            tagline: "System-level logs",
            secondary: []
          },
          {
            token: "LOGS_SECURITY",
            caption: "Security",
            enabled: true,
            icon: "fas fa-lock",
            admin_role: false,
            tagline: "Security audit logs",
            secondary: []
          }
        ]
      },
      {
        token: "DEPLOYMENTS",
        caption: "Deployments",
        enabled: true,
        icon: "fas fa-rocket",
        admin_role: false,
        tagline: "Manage application deployments",
        secondary: []
      }
    ],
    "Client_Property_Sandbox_Emulator": [
      {
        token: "SANDBOX_HOME",
        caption: "Sandbox Home",
        enabled: true,
        icon: "fas fa-home",
        admin_role: false,
        tagline: "Sandbox testing environment home",
        secondary: []
      },
      {
        token: "API_TESTING",
        caption: "API Testing",
        enabled: true,
        icon: "fas fa-vial",
        admin_role: false,
        tagline: "Test API endpoints and responses",
        secondary: [
          {
            token: "API_TESTING_ENDPOINTS",
            caption: "Endpoints",
            enabled: true,
            icon: "fas fa-plug",
            admin_role: false,
            tagline: "Available API endpoints",
            secondary: []
          },
          {
            token: "API_TESTING_REQUESTS",
            caption: "Requests",
            enabled: true,
            icon: "fas fa-paper-plane",
            admin_role: false,
            tagline: "Send test requests",
            secondary: []
          },
          {
            token: "API_TESTING_HISTORY",
            caption: "History",
            enabled: true,
            icon: "fas fa-history",
            admin_role: false,
            tagline: "Request history and logs",
            secondary: []
          }
        ]
      },
      {
        token: "DATA_SIMULATOR",
        caption: "Data Simulator",
        enabled: true,
        icon: "fas fa-database",
        admin_role: false,
        tagline: "Simulate data scenarios and edge cases",
        secondary: [
          {
            token: "DATA_SIMULATOR_GENERATE",
            caption: "Generate",
            enabled: true,
            icon: "fas fa-magic",
            admin_role: false,
            tagline: "Generate mock data",
            secondary: []
          },
          {
            token: "DATA_SIMULATOR_LOAD",
            caption: "Load",
            enabled: true,
            icon: "fas fa-upload",
            admin_role: false,
            tagline: "Load data fixtures",
            secondary: []
          }
        ]
      },
      {
        token: "SCENARIOS",
        caption: "Scenarios",
        enabled: true,
        icon: "fas fa-project-diagram",
        admin_role: false,
        tagline: "Pre-configured test scenarios",
        secondary: []
      },
      {
        token: "RESET_SANDBOX",
        caption: "Reset Sandbox",
        enabled: true,
        icon: "fas fa-redo",
        admin_role: false,
        tagline: "Reset sandbox to initial state",
        secondary: []
      }
    ]
  };
  /**
   * Side-navigation configs (client-saas left nav).
   *
   * A persona-aware MASTER tree authored once; NavMetaManager.getSideNav() filters
   * it by the user's capabilities (from tenancy.js, server-resolved via /me) so each
   * persona (reseller / managed_client / self-serve / admin) sees only its items —
   * no per-persona duplication. Managed clients lack provisioning capabilities, so
   * those items simply don't appear (per design: hide, don't disable).
   *
   * Item schema (extends the primary-nav schema):
   * - token: string         unique id; i18n key nav_{lowercase}; maps to active-state
   * - caption / tagline: i18n fallbacks (nav_{token} / nav_{token}_tagline)
   * - icon: string          Material Symbols name (demo-faithful)
   * - route: string         Navigo hash route this item navigates to
   * - capability: string    CAPABILITIES value required to SEE the item (null = always)
   * - capabilityAny: array  OR-set alternative to `capability`
   * - enabled / count: as primary nav
   * Optional grouping: a node may be { token, group:true, caption, items:[...] };
   * getSideNav drops a group whose items all filter out. (v1 authored flat, demo-style.)
   *
   * Capability strings mirror packages/shared/src/metadata/tenancy.js CAPABILITIES.
   */
  static #sideNavConfigs = {
    "client-saas": [
      { token: "DASHBOARD", caption: "Dashboard", icon: "dashboard", route: "/home", capability: "view_dashboard", enabled: true, tagline: "Overview of your activity" },
      {
        token: "MAGNETS",
        caption: "Your Magnets",
        icon: "widgets",
        route: "/magnets",
        capability: "view_magnets",
        enabled: true,
        tagline: "Manage your conversational magnets",
        children: [
          { token: "MAGNETS_ALL", caption: "All", route: "/magnets", capability: "view_magnets" },
          // HIDDEN until they have a page. Both resolve to the generic "this area is
          // being translated from the demo" placeholder, which shows internal
          // project-status copy to paying customers. The routes stay registered.
          // Drafts is cheap to restore — DRAFT is an existing magnet status, so it is a
          // filter over the list we already render, no backend work. Archived is not:
          // magnets have no ARCHIVED state (only ENABLED/DISABLED/DRAFT + DELETED), so
          // that nav item promised something the data model cannot express.
          { token: "MAGNETS_DRAFTS", caption: "Drafts", route: "/magnets/drafts", capability: "view_magnets", enabled: false },
          { token: "MAGNETS_ARCHIVED", caption: "Archived", route: "/magnets/archived", capability: "view_magnets", enabled: false }
        ]
      },
      { token: "LEADS", caption: "Leads", icon: "contacts", route: "/leads", capability: "view_magnets", enabled: true, tagline: "Leads your magnets captured" },
      { token: "TEMPLATES", caption: "Templates", icon: "content_copy", route: "/templates", capabilityAny: ["provision_magnets", "manage_magnets"], enabled: true, tagline: "Start from a magnet template" },
      { token: "CONVERSATIONS", caption: "Conversations", icon: "forum", route: "/conversations", capability: "view_conversations", enabled: true, tagline: "Captured lead conversations" },
      { token: "AB_TESTING", caption: "A/B Testing", icon: "science", route: "/ab-testing", capability: "manage_magnets", enabled: true, tagline: "Experiment and optimize" },
      {
        token: "ANALYTICS",
        caption: "Analytics",
        icon: "monitoring",
        route: "/analytics",
        capability: "view_stats",
        enabled: true,
        tagline: "Magnet performance and conversions",
        children: [
          { token: "ANALYTICS_OVERVIEW", caption: "Overview", route: "/analytics", capability: "view_stats" },
          // HIDDEN until it has a page — currently the generic placeholder. The parent
          // Analytics tagline still says "performance and conversions"; leaving that,
          // since Overview does report conversion counts.
          { token: "ANALYTICS_CONVERSIONS", caption: "Conversions", route: "/analytics/conversions", capability: "view_stats", enabled: false }
        ]
      },
      // Advertising groups the ad surface: Ad Performance (the real view; also the
      // section landing) and Ad Accounts. Every role holding connect_ad_accounts
      // also holds view_ad_metrics (tenancy.js matrix), so landing on the
      // performance route is safe for anyone who can see the section; the
      // Accounts child simply hides for view-only personas.
      {
        token: "ADVERTISING",
        caption: "Advertising",
        icon: "ads_click",
        route: "/analytics/ad-performance",
        capabilityAny: ["view_ad_metrics", "connect_ad_accounts"],
        enabled: true,
        tagline: "Ad performance and connected accounts",
        children: [
          { token: "ADVERTISING_PERFORMANCE", caption: "Ad Performance", route: "/analytics/ad-performance", capability: "view_ad_metrics" },
          { token: "ADVERTISING_ACCOUNTS", caption: "Ad Accounts", route: "/ad-accounts", capability: "connect_ad_accounts" }
        ]
      },
      { token: "CLIENTS", caption: "Clients", icon: "groups", route: "/clients", capability: "create_client_accounts", enabled: true, tagline: "Manage your client accounts" },
      // Same capability gate as Clients, deliberately: the kickoff questionnaire is a
      // reseller→client artefact, so an org with no clients has nothing to review here.
      { token: "QUESTIONNAIRES", caption: "Questionnaires", icon: "fact_check", route: "/questionnaires", capability: "create_client_accounts", enabled: true, tagline: "Kickoff questionnaire status per client" },
      // Same capability gate as Clients/Questionnaires: a deliverable is a
      // reseller→client artefact (Advertising Plan first; more kinds are new
      // template rows, not new nav items).
      { token: "DELIVERABLES", caption: "Deliverables", icon: "approval", route: "/deliverables", capability: "create_client_accounts", enabled: true, tagline: "Plans and sign-off status per client" },
      { token: "TEAM", caption: "Team", icon: "group", route: "/team", capability: "manage_team", enabled: true, tagline: "Invite and manage teammates" },
      // HIDDEN until there is something to bill against. This was the worst of the four:
      // every owner and admin holds view_billing, so essentially every paying customer
      // could click a nav item promising "Plan, usage, and invoices" and land on internal
      // project-status copy. There is no billing API at all — coreInvoice exists as a
      // table with no route — so this is a real project, not a page to finish.
      { token: "BILLING", caption: "Billing", icon: "receipt_long", route: "/billing", capability: "view_billing", enabled: false, tagline: "Plan, usage, and invoices" },
      {
        token: "SETTINGS",
        caption: "Settings",
        icon: "settings",
        route: "/settings",
        capability: null,
        enabled: true,
        tagline: "Account and workspace settings",
        children: [
          // Narrative order: you (General) -> your org (Workspace) -> where lead
          // events go (Notifications) -> connections (Integrations) -> how you
          // sign in (Security).
          { token: "SETTINGS_GENERAL", caption: "General", route: "/settings", capability: null },
          { token: "SETTINGS_WORKSPACE", caption: "Workspace", route: "/settings/workspace", capability: null },
          { token: "SETTINGS_NOTIFICATIONS", caption: "Notifications", route: "/settings/notifications", capability: null },
          { token: "SETTINGS_INTEGRATIONS", caption: "Integrations", route: "/settings/integrations", capability: null },
          { token: "SETTINGS_SECURITY", caption: "Security", route: "/settings/security", capability: null }
        ]
      }
    ]
  };
  /**
   * Set the app token for context-aware navigation
   * @param {string} appToken - App identifier (e.g., 'client-saas')
   */
  static setAppToken(appToken) {
    if (!this.#navConfigs[appToken]) {
      console.warn(`[NavMetaManager] Unknown app token: ${appToken}. Available: ${Object.keys(this.#navConfigs).join(", ")}`);
    }
    this.#appToken = appToken;
    console.log(`[NavMetaManager] App token set: ${appToken}`);
  }
  /**
   * Get current app token
   * @returns {string|null} Current app token
   */
  static getAppToken() {
    return this.#appToken;
  }
  /**
   * Resolve i18n tokens for a navigation item
   * Converts token (e.g., "HOME") to microcopy tokens (e.g., "nav_home", "nav_home_tagline")
   * @param {Object} item - Navigation item
   * @returns {Object} Item with resolved caption and tagline
   * @private
   */
  static #resolveI18n(item) {
    if (!item) return item;
    const tokenLower = item.token.toLowerCase();
    const captionToken = `nav_${tokenLower}`;
    const taglineToken = `nav_${tokenLower}_tagline`;
    const caption = MicrocopyManager.get(captionToken) || item.caption;
    const tagline = MicrocopyManager.get(taglineToken) || item.tagline;
    return {
      ...item,
      caption,
      tagline,
      // Recursively resolve secondary items
      secondary: item.secondary ? item.secondary.map((s) => this.#resolveI18n(s)) : []
    };
  }
  /**
   * Get primary navigation for current app with i18n resolved
   * @returns {Array} Array of primary navigation items with nested secondary
   */
  static getPrimaryNav() {
    if (!this.#appToken) {
      console.warn("[NavMetaManager] No app token set. Call setAppToken() first.");
      return [];
    }
    const navConfig = this.#navConfigs[this.#appToken] || [];
    return navConfig.map((item) => this.#resolveI18n(item));
  }
  /**
   * Get flattened navigation (all primary + secondary items)
   * @returns {Array} Flattened array of all navigation items
   */
  static getFlattenedNav() {
    const primary = this.getPrimaryNav();
    const flattened = [];
    primary.forEach((item) => {
      flattened.push(item);
      if (item.secondary && item.secondary.length > 0) {
        flattened.push(...item.secondary);
      }
    });
    return flattened;
  }
  /**
   * Get navigation item by token
   * @param {string} token - Navigation token
   * @returns {Object|null} Navigation item or null if not found
   */
  static getNavByToken(token) {
    const flattened = this.getFlattenedNav();
    return flattened.find((item) => item.token === token) || null;
  }
  /**
   * Get admin-only navigation items
   * @returns {Array} Navigation items requiring admin role
   */
  static getAdminNav() {
    const flattened = this.getFlattenedNav();
    return flattened.filter((item) => item.admin_role === true);
  }
  /**
   * Get user-accessible navigation items (non-admin)
   * @returns {Array} Navigation items accessible to regular users
   */
  static getUserNav() {
    const flattened = this.getFlattenedNav();
    return flattened.filter((item) => item.admin_role === false);
  }
  /**
   * Get navigation as JSON string (for web component attributes)
   * @returns {string} JSON string of navigation
   */
  static getPrimaryNavJSON() {
    return JSON.stringify(this.getPrimaryNav());
  }
  /**
   * Resolve i18n caption/tagline for a side-nav node (item or group).
   * Same convention as primary nav (nav_{token} / nav_{token}_tagline) but does
   * NOT force a `secondary` array — side-nav grouping is handled in getSideNav.
   * @private
   */
  static #resolveNavI18n(item) {
    if (!item || !item.token) return item;
    const t = item.token.toLowerCase();
    return {
      ...item,
      caption: MicrocopyManager.get(`nav_${t}`) || item.caption,
      tagline: MicrocopyManager.get(`nav_${t}_tagline`) || item.tagline
    };
  }
  /**
   * Get the persona-aware side navigation for the current app, filtered by the
   * user's capabilities. The master tree (#sideNavConfigs) is authored once;
   * items whose capability gate isn't satisfied are removed. Groups whose items
   * all filter out are dropped.
   *
   * @param {string[]} capabilities - CAPABILITIES the user holds (from /me scope).
   *   Pass [] for an unauthenticated/empty state (only ungated items appear).
   * @param {Object} [opts]
   * @param {string} [opts.uiMode] - active-org uiMode (reseller/managed/self_serve/admin);
   *   not used for filtering (capabilities drive that) but passed through for callers
   *   that tag the rendered tree (e.g. persona badge / read-only affordances).
   * @returns {Array} Filtered, i18n-resolved side-nav tree.
   */
  static getSideNav(capabilities = [], { uiMode = null } = {}) {
    const key = this.#sideNavConfigs[this.#appToken] ? this.#appToken : "client-saas";
    const tree = this.#sideNavConfigs[key] || [];
    const caps = Array.isArray(capabilities) ? capabilities : [];
    const isVisible = (node) => {
      if (node.enabled === false) return false;
      if (node.capability == null && !node.capabilityAny) return true;
      if (node.capability && !caps.includes(node.capability)) return false;
      if (node.capabilityAny && !node.capabilityAny.some((c) => caps.includes(c))) return false;
      return true;
    };
    const result = [];
    for (const node of tree) {
      if (node.group && Array.isArray(node.items)) {
        if (!isVisible(node)) continue;
        const items = node.items.filter(isVisible).map((i) => this.#resolveNavI18n(i));
        if (items.length) result.push({ ...this.#resolveNavI18n(node), items });
      } else if (isVisible(node)) {
        const resolved = this.#resolveNavI18n(node);
        if (Array.isArray(node.children) && node.children.length) {
          resolved.children = node.children.filter(isVisible).map((c) => this.#resolveNavI18n(c));
        }
        result.push(resolved);
      }
    }
    return result;
  }
  /**
   * Side navigation as a JSON string (for the m5t-side-nav data-buttons attribute).
   * @param {string[]} capabilities
   * @param {Object} [opts] - { uiMode }
   * @returns {string}
   */
  static getSideNavJSON(capabilities = [], opts = {}) {
    return JSON.stringify(this.getSideNav(capabilities, opts));
  }
  /**
   * Get all available app tokens
   * @returns {Array<string>} List of app identifiers
   */
  static getAvailableApps() {
    return Object.keys(this.#navConfigs);
  }
  /**
   * Fetch navigation config from coreMeta table
   * Meta token format: NAV_{APP_TOKEN}
   * Example: NAV_SSE_SAAS_CLIENT
   *
   * @param {string} baseUrl - API base URL
   * @returns {Promise<Array>} Array of navigation configurations
   */
  static async fetchFromCoreMeta(baseUrl = "/m5t/v5") {
    if (!this.#appToken) {
      console.warn("[NavMetaManager] No app token set. Using static config.");
      return this.getPrimaryNav();
    }
    try {
      const metaToken = `NAV_${this.#appToken.toUpperCase().replace(/-/g, "_")}`;
      const response = await fetch(`${baseUrl}/coreMeta?meta_token=${metaToken}`);
      if (!response.ok) {
        console.warn(`[NavMetaManager] Failed to fetch from coreMeta (${response.status}), using static config`);
        return this.getPrimaryNav();
      }
      const data = await response.json();
      if (data.ok && data.data && data.data.meta_keyval) {
        console.log(`[NavMetaManager] Loaded navigation from coreMeta: ${metaToken}`);
        return data.data.meta_keyval;
      }
      console.warn("[NavMetaManager] No data in coreMeta response, using static config");
      return this.getPrimaryNav();
    } catch (error) {
      console.error("[NavMetaManager] Error fetching from coreMeta:", error);
      return this.getPrimaryNav();
    }
  }
  /**
   * Get all navigation configs for all apps
   * @returns {Object} All navigation configurations
   */
  static getAll() {
    return { ...this.#navConfigs };
  }
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { NavMetaManager };
}
class M5TPrimaryNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.buttons = [];
    this.selectedPrimaryToken = null;
    this.selectedSecondaryToken = null;
    this.logoTopic = null;
    this.showSecondary = true;
    this.hideLogo = false;
    this.longTapTimer = null;
    this.longTapDelay = 4600;
    this.longTapActive = false;
    this.longTapFired = false;
  }
  connectedCallback() {
    this.logoTopic = this.getAttribute("data-logo-topic");
    this.showSecondary = this.getAttribute("data-show-secondary") !== "false";
    this.hideLogo = this.getAttribute("data-hide-logo") === "true";
    this.parseButtons();
    this.render();
    this.languageChangeHandler = () => {
      console.log("[M5TPrimaryNav] Language changed, refreshing navigation with i18n");
      const updatedNav = NavMetaManager.getPrimaryNav();
      if (updatedNav && updatedNav.length > 0) {
        this.setAttribute("data-buttons", JSON.stringify(updatedNav));
        this.parseButtons();
        this.render();
        this.attachEventListeners();
      } else {
        console.warn("[M5TPrimaryNav] No navigation data returned from NavMetaManager");
      }
    };
    document.addEventListener("language-changed", this.languageChangeHandler);
    this.attachEventListeners();
  }
  /**
   * Clean up event listeners when component is removed
   */
  disconnectedCallback() {
    if (this.languageChangeHandler) {
      document.removeEventListener("language-changed", this.languageChangeHandler);
    }
  }
  /**
   * Parse button data from attribute
   */
  parseButtons() {
    const buttonsData = this.getAttribute("data-buttons");
    if (buttonsData) {
      try {
        this.buttons = JSON.parse(buttonsData);
        const selected = this.buttons.find((btn) => btn.selected);
        this.selectedPrimaryToken = selected ? selected.token : this.buttons[0]?.token || null;
      } catch (error) {
        console.error("[M5TPrimaryNav] Error parsing buttons:", error);
        this.buttons = [];
      }
    }
  }
  /**
   * Get secondary buttons for currently selected primary
   */
  getSecondaryButtons() {
    if (!this.selectedPrimaryToken || !this.showSecondary) return [];
    const primaryBtn = this.buttons.find((btn) => btn.token === this.selectedPrimaryToken);
    return primaryBtn?.secondary || [];
  }
  /**
   * Get button data (caption, tagline) by token
   * @param {string} token - Button token
   * @param {string} level - 'primary' or 'secondary'
   * @returns {Object} Button data with caption and tagline
   */
  getButtonData(token, level) {
    if (level === "primary") {
      const btn = this.buttons.find((b) => b.token === token);
      return {
        caption: btn?.caption || "",
        tagline: btn?.tagline || ""
      };
    } else {
      for (const primaryBtn of this.buttons) {
        if (primaryBtn.secondary) {
          const secBtn = primaryBtn.secondary.find((s) => s.token === token);
          if (secBtn) {
            return {
              caption: secBtn.caption || "",
              tagline: secBtn.tagline || ""
            };
          }
        }
      }
    }
    return { caption: "", tagline: "" };
  }
  /**
   * Render the component
   */
  render() {
    const secondaryButtons = this.getSecondaryButtons();
    const hasSecondary = secondaryButtons.length > 0;
    const isSpacer = !Array.isArray(this.buttons) || this.buttons.length === 0;
    this.shadowRoot.innerHTML = `
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

      <div class="nav-wrapper${isSpacer ? " is-spacer" : ""}">
        <nav class="nav-container">
          ${this.hideLogo ? "" : `<div class="logo" title="Mach Five Magnet">
            <img class="logo-mark" src="m5m-mark.svg" alt="Mach Five Magnet" width="28" height="28" />
            <span class="logo-text">Mach Five <b>Magnet</b></span>
          </div>`}
          ${this.buttons.map((btn, index) => this.renderButton(btn, index, "primary")).join("")}
        </nav>
        ${hasSecondary ? `
        <nav class="secondary-nav">
          ${secondaryButtons.map((btn, index) => this.renderButton(btn, index, "secondary")).join("")}
        </nav>` : ""}
      </div>
    `;
  }
  /**
   * Render a single button
   */
  renderButton(btn, index, level = "primary") {
    const isSelected = level === "primary" ? btn.token === this.selectedPrimaryToken : false;
    const hasCount = typeof btn.count === "number" && btn.count !== null && btn.count !== void 0;
    const hasIcon = btn.icon && btn.icon.trim() !== "";
    const hasTagline = btn.tagline && btn.tagline.trim() !== "";
    return `
      <button
        class="nav-button ${isSelected ? "selected" : ""}"
        data-token="${btn.token}"
        data-level="${level}"
        data-admin="${btn.admin_role || false}"
        ${!btn.enabled ? "disabled" : ""}
        ${hasTagline ? `title="${btn.tagline}"` : ""}
      >
        ${hasIcon ? `<i class="${btn.icon} nav-button-icon"></i>` : ""}
        <span>${btn.caption}</span>
        ${hasCount ? `<span class="count-badge">${btn.count}</span>` : ""}
      </button>
    `;
  }
  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      const token = button.getAttribute("data-token");
      const level = button.getAttribute("data-level");
      button.addEventListener("click", (e) => {
        if (token && !e.currentTarget.disabled && !this.longTapFired) {
          if (level === "primary") {
            this.selectPrimaryButton(token);
          } else {
            this.selectSecondaryButton(token);
          }
        }
        this.longTapFired = false;
      });
      button.addEventListener("dblclick", (e) => {
        if (token && !e.currentTarget.disabled) {
          const buttonData = this.getButtonData(token, level);
          console.log("[M5TPrimaryNav] Button double-clicked:", token);
          this.dispatchEvent(new CustomEvent("nav-double-tap", {
            bubbles: true,
            composed: true,
            detail: {
              pubsubTopic: "M5T_PRIMARY_NAV.DOUBLE_TAP",
              token,
              level,
              caption: buttonData.caption,
              tagline: buttonData.tagline,
              timestamp: Date.now()
            }
          }));
        }
      });
      button.addEventListener("mouseenter", (e) => {
        if (token && !e.currentTarget.disabled) {
          const buttonData = this.getButtonData(token, level);
          this.dispatchEvent(new CustomEvent("nav-hover", {
            bubbles: true,
            composed: true,
            detail: {
              pubsubTopic: "M5T_PRIMARY_NAV.HOVER",
              token,
              level,
              caption: buttonData.caption,
              tagline: buttonData.tagline,
              action: "enter",
              timestamp: Date.now()
            }
          }));
        }
      });
      button.addEventListener("mouseleave", (e) => {
        if (token && !e.currentTarget.disabled) {
          const buttonData = this.getButtonData(token, level);
          this.dispatchEvent(new CustomEvent("nav-hover", {
            bubbles: true,
            composed: true,
            detail: {
              pubsubTopic: "M5T_PRIMARY_NAV.HOVER",
              token,
              level,
              caption: buttonData.caption,
              tagline: buttonData.tagline,
              action: "leave",
              timestamp: Date.now()
            }
          }));
        }
      });
      button.addEventListener("mousedown", (e) => {
        if (token && !e.currentTarget.disabled) {
          this.longTapActive = true;
          this.longTapFired = false;
          this.longTapTimer = setTimeout(() => {
            const buttonData = this.getButtonData(token, level);
            console.log("[M5TPrimaryNav] Button long-tap:", token);
            this.longTapFired = true;
            this.dispatchEvent(new CustomEvent("nav-long-tap", {
              bubbles: true,
              composed: true,
              detail: {
                pubsubTopic: "M5T_PRIMARY_NAV.LONG_TAP",
                token,
                level,
                caption: buttonData.caption,
                tagline: buttonData.tagline,
                timestamp: Date.now()
              }
            }));
          }, this.longTapDelay);
        }
      });
      button.addEventListener("mouseup", (e) => {
        if (this.longTapTimer) {
          clearTimeout(this.longTapTimer);
          this.longTapTimer = null;
        }
        this.longTapActive = false;
      });
      button.addEventListener("mouseleave", (e) => {
        if (this.longTapTimer) {
          clearTimeout(this.longTapTimer);
          this.longTapTimer = null;
        }
        this.longTapActive = false;
      });
    });
    const logo = this.shadowRoot.querySelector(".logo");
    if (logo) {
      logo.addEventListener("click", () => {
        console.log("[M5TPrimaryNav] Logo clicked");
        if (this.logoTopic && window.m5t?.pubsub) {
          console.log(`[M5TPrimaryNav] Publishing to topic: ${this.logoTopic}`);
          window.m5t.pubsub.publish(this.logoTopic, {
            timestamp: Date.now()
          });
        } else if (this.logoTopic && !window.m5t?.pubsub) {
          console.warn("[M5TPrimaryNav] Logo topic configured but window.m5t.pubsub not found");
        }
        this.dispatchEvent(new CustomEvent("logo-click", {
          bubbles: true,
          composed: true,
          detail: {
            pubsubTopic: "M5T_PRIMARY_NAV.LOGO_TAP",
            timestamp: Date.now()
          }
        }));
      });
    }
  }
  /**
   * Select a primary button by token
   */
  selectPrimaryButton(token) {
    const primaryBtn = this.buttons.find((btn) => btn.token === token);
    const buttonData = this.getButtonData(token, "primary");
    this.dispatchEvent(new CustomEvent("nav-select", {
      bubbles: true,
      composed: true,
      detail: {
        pubsubTopic: "M5T_PRIMARY_NAV.TAP",
        token,
        level: "primary",
        caption: buttonData.caption,
        tagline: buttonData.tagline,
        hasSecondary: (primaryBtn?.secondary?.length || 0) > 0,
        timestamp: Date.now()
      }
    }));
    if (this.selectedPrimaryToken !== token) {
      this.selectedPrimaryToken = token;
      this.render();
      this.attachEventListeners();
    }
  }
  /**
   * Select a secondary button by token
   * Secondary buttons are not stateful - they don't maintain selected state
   */
  selectSecondaryButton(token) {
    const buttonData = this.getButtonData(token, "secondary");
    this.dispatchEvent(new CustomEvent("nav-select", {
      bubbles: true,
      composed: true,
      detail: {
        pubsubTopic: "M5T_PRIMARY_NAV.TAP",
        token,
        primaryToken: this.selectedPrimaryToken,
        level: "secondary",
        caption: buttonData.caption,
        tagline: buttonData.tagline,
        timestamp: Date.now()
      }
    }));
  }
  /**
   * Public method to update buttons
   */
  updateButtons(buttonsData) {
    this.setAttribute("data-buttons", JSON.stringify(buttonsData));
    this.parseButtons();
    this.render();
    this.attachEventListeners();
  }
  /**
   * Public method to update a specific button's count
   */
  updateCount(token, count, level = "primary") {
    let button;
    if (level === "primary") {
      button = this.buttons.find((btn) => btn.token === token);
    } else {
      const secondaryButtons = this.getSecondaryButtons();
      button = secondaryButtons.find((btn) => btn.token === token);
    }
    if (button) {
      button.count = count;
      this.render();
      this.attachEventListeners();
    }
  }
  /**
   * Public method to get currently selected tokens
   * Note: Secondary buttons are not stateful, so secondary is always null
   */
  getSelection() {
    return {
      primary: this.selectedPrimaryToken,
      secondary: null
      // Secondary buttons are not stateful
    };
  }
}
customElements.define("m5t-primary-nav", M5TPrimaryNav);
const LIST_CAP = 25;
const LIST_STEP = 25;
function expandButtonHTML({ total, shown, id = "", noun = "", step = LIST_STEP } = {}) {
  const remaining = Math.max(0, (total || 0) - (shown || 0));
  if (remaining <= 0) return "";
  const next = Math.min(step, remaining);
  const what = noun ? ` ${escapeAttr(noun)}` : "";
  return `<button type="button" class="m5t-list-more"${id ? ` id="${escapeAttr(id)}"` : ""} data-action="list-expand" data-remaining="${remaining}" aria-label="Show ${next} more${what}, ${remaining} remaining">Show ${next} more${what} <span class="m5t-list-more__rest">(${remaining} remaining)</span></button>`;
}
function capList(container, { rowSelector, cap = LIST_CAP, step = LIST_STEP, noun = "", controlHost } = {}) {
  if (!container || !rowSelector) return 0;
  container.querySelectorAll(":scope > .m5t-list-more, .m5t-list-more").forEach((b) => b.remove());
  const rows = [...container.querySelectorAll(rowSelector)];
  rows.forEach((r) => r.removeAttribute("hidden"));
  if (rows.length <= cap) return 0;
  let shown = cap;
  const host = controlHost || container;
  const paint = () => {
    rows.forEach((r, i) => {
      if (i < shown) r.removeAttribute("hidden");
      else r.setAttribute("hidden", "");
    });
    host.querySelectorAll(".m5t-list-more").forEach((b) => b.remove());
    const html = expandButtonHTML({ total: rows.length, shown, noun, step });
    if (!html) return;
    host.insertAdjacentHTML("beforeend", html);
    host.querySelector(".m5t-list-more")?.addEventListener("click", () => {
      shown += step;
      paint();
    });
  };
  paint();
  return rows.length - cap;
}
function escapeAttr(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const POLL_MS = 5 * 60 * 1e3;
function relTime(iso) {
  try {
    const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1e3);
    if (s < 60) return "just now";
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
    return `${Math.floor(s / 86400)}d ago`;
  } catch {
    return "";
  }
}
function itemHTML(n) {
  const inner = `
      <div class="m5t-notif-title">${esc(n.title)}</div>
      ${n.body ? `<div class="m5t-notif-body">${esc(n.body)}</div>` : ""}
      <div class="m5t-notif-time">${esc(relTime(n.created_tz))}</div>`;
  return `<div class="m5t-notif-item" data-guid="${esc(n.guid)}" data-read="${n.read}" role="menuitem">
    ${n.link ? `<a class="m5t-notif-main m5t-notif-link" href="${esc(n.link)}">${inner}</a>` : `<div class="m5t-notif-main">${inner}</div>`}
    <button class="m5t-notif-dismiss" type="button" aria-label="Clear “${esc(n.title)}”" data-dismiss="${esc(n.guid)}">Clear</button>
  </div>`;
}
const SKELETON = `<div class="m5t-notif-skel"><span></span><span></span><span></span></div>`.repeat(3);
const isPanelOpen = (panel) => panel.dataset.open === "true";
const setPanelOpen = (panel, open) => {
  panel.dataset.open = open ? "true" : "false";
};
function setNotificationBellVisible(show) {
  const el = document.getElementById("m5t-notif-bell");
  if (el) el.hidden = !show;
  if (!show) {
    const panel = document.getElementById("m5t-notif-panel");
    if (panel) setPanelOpen(panel, false);
  }
}
const BELL_DEFAULT_TOP = 14;
let bellAlignObserver = null;
let bellVisibilityObserver = null;
function alignNotifBellToBanner(banner) {
  if (typeof ResizeObserver === "undefined" || !banner) return;
  const bell = document.getElementById("m5t-notif-bell");
  const bellBtn = document.getElementById("m5t-notif-bell-btn");
  if (!bell || !bellBtn) return;
  const apply = () => {
    const ctaBtn = !banner.hidden ? banner.querySelector(".ocb-btn") : null;
    if (!ctaBtn) {
      bell.style.top = `${BELL_DEFAULT_TOP}px`;
      return;
    }
    const bellSize = bellBtn.getBoundingClientRect().height;
    if (!bellSize) return;
    const r = ctaBtn.getBoundingClientRect();
    bell.style.top = `${Math.round(r.top + (r.height - bellSize) / 2)}px`;
  };
  bellAlignObserver?.disconnect();
  bellAlignObserver = new ResizeObserver(apply);
  bellAlignObserver.observe(banner);
  bellVisibilityObserver?.disconnect();
  bellVisibilityObserver = new MutationObserver(apply);
  bellVisibilityObserver.observe(bell, { attributes: true, attributeFilter: ["hidden"] });
  apply();
}
let pollTimer = null;
let docClickHandler = null;
let docVisibilityHandler = null;
function mountNotificationBell() {
  const btn = document.getElementById("m5t-notif-bell-btn");
  const badge = document.getElementById("m5t-notif-badge");
  const panel = document.getElementById("m5t-notif-panel");
  if (!btn || !badge || !panel) return;
  const setCount = (n) => {
    badge.textContent = n > 99 ? "99+" : String(n);
    badge.hidden = !n;
  };
  const refreshCount = async () => {
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/notifications/unread-count`);
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) setCount(data.count || 0);
    } catch {
    }
  };
  const LIST_PAGE_SIZE = 50;
  const reconcileCountWithList = (notes) => {
    if (notes.length >= LIST_PAGE_SIZE) {
      refreshCount();
      return;
    }
    setCount(notes.filter((n) => !n.read).length);
  };
  const headHTML = (actions = "") => `<div class="m5t-notif-head">Notifications${actions ? `<span class="m5t-notif-head__actions">${actions}</span>` : ""}</div>`;
  const renderEmpty = () => {
    panel.querySelectorAll(".m5t-notif-item, .m5t-notif-empty").forEach((el) => el.remove());
    panel.querySelector(".m5t-notif-head__actions")?.remove();
    panel.insertAdjacentHTML("beforeend", '<div class="m5t-notif-empty">You’re all caught up.</div>');
  };
  const loadList = async () => {
    panel.innerHTML = headHTML() + SKELETON;
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/notifications`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error();
      const notes = data.notifications || [];
      const actions = [
        notes.some((n) => !n.read) ? '<button class="m5t-notif-markall" type="button">Mark all read</button>' : "",
        notes.length ? '<button class="m5t-notif-clearall" type="button">Clear all</button>' : ""
      ].join("");
      panel.innerHTML = headHTML(actions) + (notes.length ? notes.map(itemHTML).join("") : '<div class="m5t-notif-empty">You’re all caught up.</div>');
      capList(panel, { rowSelector: ".m5t-notif-item", noun: "notifications" });
      reconcileCountWithList(notes);
    } catch {
      panel.innerHTML = headHTML() + '<div class="m5t-notif-empty">Could not load. Try again.</div>';
    }
  };
  const closePanel = () => {
    setPanelOpen(panel, false);
    btn.setAttribute("aria-expanded", "false");
  };
  const openPanel = async () => {
    setPanelOpen(panel, true);
    btn.setAttribute("aria-expanded", "true");
    await loadList();
  };
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPanelOpen(panel)) closePanel();
    else openPanel();
  });
  if (docVisibilityHandler) document.removeEventListener("visibilitychange", docVisibilityHandler);
  docVisibilityHandler = () => {
    if (document.visibilityState === "visible") refreshCount();
  };
  document.addEventListener("visibilitychange", docVisibilityHandler);
  if (docClickHandler) document.removeEventListener("click", docClickHandler);
  docClickHandler = (e) => {
    if (isPanelOpen(panel) && !panel.contains(e.target) && e.target !== btn) closePanel();
  };
  document.addEventListener("click", docClickHandler);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isPanelOpen(panel)) {
      closePanel();
      btn.focus();
    }
  });
  panel.addEventListener("click", async (e) => {
    const dismissBtn = e.target.closest("[data-dismiss]");
    if (dismissBtn) {
      e.preventDefault();
      e.stopPropagation();
      const row = dismissBtn.closest(".m5t-notif-item");
      const guid = dismissBtn.dataset.dismiss;
      const wasUnread = row?.dataset.read === "false";
      row?.setAttribute("data-leaving", "true");
      try {
        await fetch(`${apiBase()}/m5t/v5/notifications/${encodeURIComponent(guid)}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "DISMISSED" })
        });
      } catch {
      }
      setTimeout(() => {
        row?.remove();
        if (!panel.querySelector(".m5t-notif-item")) renderEmpty();
      }, 180);
      if (wasUnread) refreshCount();
      return;
    }
    const clearAll = e.target.closest(".m5t-notif-clearall");
    if (clearAll) {
      e.preventDefault();
      clearAll.disabled = true;
      panel.querySelectorAll(".m5t-notif-item").forEach((el) => el.setAttribute("data-leaving", "true"));
      try {
        await fetch(`${apiBase()}/m5t/v5/notifications/dismiss-all`, { method: "PATCH" });
      } catch {
      }
      setTimeout(renderEmpty, 180);
      refreshCount();
      return;
    }
    const item = e.target.closest(".m5t-notif-item");
    if (item && item.dataset.read === "false") {
      const guid = item.dataset.guid;
      item.dataset.read = "true";
      try {
        await fetch(`${apiBase()}/m5t/v5/notifications/${encodeURIComponent(guid)}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ read: true })
        });
        refreshCount();
      } catch {
      }
      return;
    }
    const markAll = e.target.closest(".m5t-notif-markall");
    if (markAll) {
      e.preventDefault();
      panel.querySelectorAll(".m5t-notif-item").forEach((el) => {
        el.dataset.read = "true";
      });
      markAll.remove();
      try {
        await fetch(`${apiBase()}/m5t/v5/notifications/read-all`, { method: "PATCH" });
      } catch {
      }
      refreshCount();
    }
  });
  refreshCount();
  clearInterval(pollTimer);
  pollTimer = setInterval(refreshCount, POLL_MS);
}
function darkModeEnabled() {
  return isEnabled("FF_SSE_UI_DARK_MODE");
}
function resolveInitialTheme(enabled = darkModeEnabled()) {
  if (!enabled) return "light";
  return localStorage.getItem(FEATURE_FLAGS.FF_SSE_LS_THEME) === "dark" ? "dark" : "light";
}
function animationsDisabled(enabled = isEnabled("FF_SSE_UI_ANIMATIONS")) {
  return !enabled;
}
function applyDarkModeButtonVisibility(nav, enabled = darkModeEnabled()) {
  if (!nav || enabled) return;
  nav.shadowRoot?.querySelector('.footer-action[data-action="theme"]')?.remove();
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
function initTheme() {
  applyTheme(resolveInitialTheme());
}
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function setTheme(theme, { quiet = false } = {}) {
  if (!darkModeEnabled()) return;
  const next = theme === "dark" ? "dark" : "light";
  if (next === currentTheme()) return;
  applyTheme(next);
  localStorage.setItem(FEATURE_FLAGS.FF_SSE_LS_THEME, next);
  if (!quiet) {
    PubSub$1.publish(AppBroadcast.UI_TOAST, { message: next === "dark" ? "Dark mode on" : "Dark mode off", type: "info" });
  }
  PubSub$1.publish(AppBroadcast.UI_THEME_CHANGED, { theme: next });
}
function toggleTheme() {
  setTheme(currentTheme() === "dark" ? "light" : "dark");
}
window.m5t = /* @__PURE__ */ Object.create(null);
window.m5t.pubsub = PubSub$1;
console.log("StreamSyncEngage SaaS Client - Starting...");
console.log("Environment:", "production");
console.log("Document readyState:", document.readyState);
console.log("window.mvvLegit:", typeof window.mvvLegit);
console.log("globalThis.mvvLegit:", typeof globalThis.mvvLegit);
try {
  console.log("mvvLegit (direct):", typeof mvvLegit);
} catch (e) {
  console.log("mvvLegit (direct): ReferenceError -", e.message);
}
const possibleGlobals = Object.keys(window).filter(
  (k) => k.toLowerCase().includes("mvv") || k.toLowerCase().includes("neodigm") || k.toLowerCase().includes("legit")
);
console.log("Possible Neodigm globals:", possibleGlobals);
const router = new Navigo("/", { hash: true });
window.router = router;
function checkRouteAccess(routePath) {
  const routeToken = routePath ? `${routePath.replace(/-/g, "_")}_route` : "splash_route";
  console.log(`[Router] Checking access: ${routePath} -> ${routeToken}`);
  const isAllowed = mvvLegit.isRouteAllowed(routeToken);
  if (!isAllowed) {
    console.warn(`[Router] Access denied to route: ${routeToken}`);
    PubSub$1.publish(AppBroadcast.UI_TOAST, {
      message: "Please sign in to access this page",
      type: "warning"
    });
    return false;
  }
  return true;
}
function navigateToRoute(routeName) {
  console.log("[Router] Navigating to:", routeName);
  router.navigate(`/${routeName}`);
}
const SIDE_NAV_HIDDEN_ROUTES = /* @__PURE__ */ new Set([
  "splash",
  "signin",
  "signup",
  "forgot",
  "resethash",
  "verf-link",
  "accept-invite",
  "signout"
]);
let sideNavRouteIndex = {};
let subNavRouteByToken = {};
let currentRouteName = null;
const PERSONA_BADGE = {
  admin: { caption: "Platform Admin", icon: "shield_person" },
  reseller: { caption: "Reseller", icon: "handshake" },
  managed: { caption: "Managed", icon: "visibility" },
  self_serve: { caption: "Self-Serve", icon: "rocket_launch" }
};
const ORG_PORTFOLIO = "__portfolio__";
function reloadCurrentRoute() {
  try {
    router._setCurrent(null);
  } catch {
  }
  router.resolve();
}
function renderSideNavFromScope() {
  const nav = document.getElementById("m5t-side-nav");
  if (!nav) return;
  const loading = !AuthController.getScope() && AuthController.isAuthenticated();
  const caps = AuthController.getCapabilities();
  const uiMode = AuthController.getUiMode();
  const tree = NavMetaManager.getSideNav(caps, { uiMode });
  sideNavRouteIndex = {};
  subNavRouteByToken = {};
  const indexItem = (item) => {
    if (!item.route) return;
    sideNavRouteIndex[item.route] = { sectionToken: item.token, childToken: null, children: item.children || null };
    if (Array.isArray(item.children)) {
      item.children.forEach((c) => {
        if (!c.route) return;
        subNavRouteByToken[c.token] = c.route;
        sideNavRouteIndex[c.route] = { sectionToken: item.token, childToken: c.token, children: item.children };
      });
    }
  };
  const walk = (nodes) => nodes.forEach((n) => {
    if (n.group && Array.isArray(n.items)) walk(n.items);
    else indexItem(n);
  });
  walk(tree);
  const memberships = AuthController.getMemberships();
  const activeOrg = AuthController.getActiveOrg();
  const clients = AuthController.getManagedClients();
  const storedOrg = AuthController.getStoredActiveOrg();
  const orgEntries = clients.length ? [
    { guid: ORG_PORTFOLIO, name: "Portfolio (all clients)" },
    ...memberships.map((m) => ({ guid: m.orgGuid, name: m.name || m.channel, channel: m.channel, group: "Your organization" })),
    ...clients.map((c) => ({ guid: c.orgGuid, name: c.name || c.orgGuid, channel: c.channel, group: "Clients" }))
  ] : memberships.map((m) => ({ guid: m.orgGuid, name: m.name || m.channel, channel: m.channel }));
  nav.setState({
    buttons: tree,
    orgs: orgEntries,
    activeOrg: clients.length ? storedOrg || ORG_PORTFOLIO : activeOrg?.guid || null,
    footerBadge: PERSONA_BADGE[uiMode] || null,
    loading
  });
  renderOrgContextBanner();
  if (currentRouteName) applyActiveForRoute(currentRouteName);
}
const escHTML = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
function renderOrgContextBanner() {
  const content = document.getElementById("app-content");
  if (!content) return;
  let el = document.getElementById("org-context-banner");
  if (!el) {
    el = document.createElement("div");
    el.id = "org-context-banner";
    content.insertBefore(el, content.firstChild);
    alignNotifBellToBanner(el);
  }
  const active = AuthController.getActiveOrg();
  const previewing = AuthController.isPreviewingAsClient();
  const show = !!active?.viaSubtree && !!currentRouteName && !SIDE_NAV_HIDDEN_ROUTES.has(currentRouteName);
  el.hidden = !show;
  if (!show) {
    el.innerHTML = "";
    return;
  }
  const name = escHTML(active.name || "Client");
  el.innerHTML = `
    <style>
      #org-context-banner .ocb {
        display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        /* Right padding wider than the other 3 sides — #m5t-notif-bell floats
           fixed at right:20px (40px wide, z-index:90, above everything), so the
           banner's own content needs a real gutter here or its rightmost button
           renders underneath the bell. */
        padding: 10px 84px 10px 48px; font-size: 0.86rem; font-weight: 500;
        background: ${previewing ? "color-mix(in srgb, var(--color-warning, #edba08) 16%, var(--color-surface, #F4F7FB))" : "color-mix(in srgb, var(--color-primary-600, #364C75) 10%, var(--color-surface, #F4F7FB))"};
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
      <span class="ms" aria-hidden="true">${previewing ? "visibility" : "supervised_user_circle"}</span>
      <span>${previewing ? `Previewing as <strong>${name}</strong>` : `Viewing client: <strong>${name}</strong>`}</span>
      <span class="ocb-spacer"></span>
      <button type="button" class="ocb-btn" data-ocb="preview">
        <span class="ms" aria-hidden="true">${previewing ? "visibility_off" : "visibility"}</span>
        ${previewing ? "Exit preview" : "Preview"}
      </button>
      <button type="button" class="ocb-btn" data-ocb="portfolio">
        <span class="ms" aria-hidden="true">arrow_back</span> Back to portfolio
      </button>
    </div>`;
  el.querySelector('[data-ocb="preview"]')?.addEventListener("click", () => {
    AuthController.setPreviewAsClient(!AuthController.isPreviewingAsClient());
    reloadCurrentRoute();
  });
  el.querySelector('[data-ocb="portfolio"]')?.addEventListener("click", () => {
    AuthController.setPreviewAsClient(false);
    AuthController.setActiveOrg(null);
  });
}
function applyActiveForRoute(routeName) {
  const nav = document.getElementById("m5t-side-nav");
  const entry = sideNavRouteIndex[`/${routeName}`] || sideNavRouteIndex[routeName] || null;
  nav?.setActiveToken(entry?.sectionToken || null);
  updateSubNav(entry);
}
function updateSubNav(entry) {
  const sub = document.getElementById("m5t-sub-nav");
  const shell = document.getElementById("app-shell");
  if (!sub) return;
  const children = entry?.children;
  sub.hidden = false;
  if (children && children.length > 1) {
    sub.updateButtons(children.map((c) => ({
      token: c.token,
      caption: c.caption,
      enabled: true,
      selected: c.token === entry.childToken
    })));
    shell?.classList.add("has-sub-nav");
  } else {
    sub.updateButtons([]);
    shell?.classList.remove("has-sub-nav");
  }
}
function cycleLanguage() {
  const langs = I18nController.getAvailableLanguages && I18nController.getAvailableLanguages() || [];
  if (langs.length < 2) {
    PubSub$1.publish(AppBroadcast.UI_TOAST, { message: "Only one language is available", type: "info" });
    return;
  }
  const current = localStorage.getItem(FEATURE_FLAGS.FF_SSE_LS_USER_LANG) || FEATURE_FLAGS.FF_SSE_I18N_LANG || langs[0];
  const next = langs[(langs.indexOf(current) + 1) % langs.length];
  I18nController.setLanguage(next);
  PubSub$1.publish(AppBroadcast.UI_TOAST, { message: `Language: ${next}`, type: "info" });
}
function applyAnimationsPref() {
  document.documentElement.classList.toggle("ff-no-animations", animationsDisabled());
}
function setupSideNav() {
  const nav = document.getElementById("m5t-side-nav");
  if (!nav) return;
  NavMetaManager.setAppToken("client-saas");
  applyDarkModeButtonVisibility(nav);
  document.getElementById("app-shell")?.classList.toggle(
    "nav-collapsed",
    nav.getAttribute("data-collapsed") === "true"
  );
  nav.addEventListener("nav-select", (e) => {
    const route = e.detail?.route;
    if (route) router.navigate(route.startsWith("/") ? route : `/${route}`);
  });
  nav.addEventListener("logo-click", () => router.navigate("/home"));
  nav.addEventListener("nav-collapse", (e) => {
    document.getElementById("app-shell")?.classList.toggle("nav-collapsed", !!e.detail?.collapsed);
  });
  nav.addEventListener("org-switch", (e) => {
    const guid = e.detail?.orgGuid;
    if (!guid) return;
    AuthController.setActiveOrg(guid === ORG_PORTFOLIO ? null : guid);
  });
  nav.addEventListener("footer-action", (e) => {
    switch (e.detail?.action) {
      case "account":
        router.navigate("/settings");
        break;
      case "signout":
        router.navigate("/signout");
        break;
      case "lang":
        cycleLanguage();
        break;
      case "theme":
        toggleTheme();
        break;
    }
  });
  const sub = document.getElementById("m5t-sub-nav");
  sub?.addEventListener("nav-select", (e) => {
    const route = subNavRouteByToken[e.detail?.token];
    if (route) router.navigate(route);
  });
  document.addEventListener("language-changed", () => renderSideNavFromScope());
  renderSideNavFromScope();
  PubSub$1.subscribe(AppBroadcast.AUTH_SCOPE_LOADED, () => renderSideNavFromScope());
  const scopeSig = () => {
    const s = AuthController.getScope();
    return [
      s?.uiMode,
      s?.activeOrg?.guid,
      (s?.managedClients || []).length,
      (s?.capabilities || []).join(","),
      AuthController.getStoredActiveOrg()
    ].join("|");
  };
  let lastScopeSig = scopeSig();
  PubSub$1.subscribe(AppBroadcast.AUTH_SCOPE_LOADED, () => {
    const sig = scopeSig();
    if (sig !== lastScopeSig) {
      lastScopeSig = sig;
      if (currentRouteName && !SIDE_NAV_HIDDEN_ROUTES.has(currentRouteName)) reloadCurrentRoute();
    }
  });
}
function updateSideNavForRoute(routeName) {
  currentRouteName = routeName;
  const nav = document.getElementById("m5t-side-nav");
  const shell = document.getElementById("app-shell");
  if (!nav || !shell) return;
  const showNav = !SIDE_NAV_HIDDEN_ROUTES.has(routeName);
  nav.hidden = !showNav;
  shell.classList.toggle("has-side-nav", showNav);
  setNotificationBellVisible(showNav);
  if (showNav) {
    applyActiveForRoute(routeName);
  } else {
    const sub = document.getElementById("m5t-sub-nav");
    if (sub) sub.hidden = true;
    shell.classList.remove("has-sub-nav");
  }
  renderOrgContextBanner();
}
PubSub$1.subscribe(AppBroadcast.ROUTE_NAV_AFTER, (_msg, data) => {
  if (data?.route) updateSideNavForRoute(data.route);
});
const loadSplash = () => {
  console.log("[Router] Route: splash");
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "splash" });
  const landing = publicLandingFor()?.name;
  const loader = landing === "invite" ? __vitePreload(() => import("./accept-invite-route-DR09vifW.js"), true ? [] : void 0, import.meta.url) : landing === "questionnaire" ? __vitePreload(() => import("./questionnaire-fill-route-CXeqTkJo.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url) : landing === "deliverable" ? __vitePreload(() => import("./deliverable-fill-route-Cj00vKRO.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0, import.meta.url) : __vitePreload(() => import("./splash-route-C87dv6xo.js"), true ? __vite__mapDeps([5,1]) : void 0, import.meta.url);
  loader.then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "splash" });
  }).catch((err) => {
    console.error("[Router] Error loading splash route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "splash", error: err });
  });
};
router.on("/", loadSplash);
router.on("/splash", loadSplash);
router.on("/signin", () => {
  console.log("[Router] Route: /signin");
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "signin" });
  __vitePreload(() => import("./signin-route-DfYKI1MP.js"), true ? __vite__mapDeps([6,1,7]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "signin" });
  }).catch((err) => {
    console.error("[Router] Error loading signin route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "signin", error: err });
  });
});
router.on("/signup", () => {
  console.log("[Router] Route: /signup");
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "signup" });
  __vitePreload(() => import("./signup-route-CuokJOa7.js"), true ? __vite__mapDeps([8,1,9,7]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "signup" });
  }).catch((err) => {
    console.error("[Router] Error loading signup route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "signup", error: err });
  });
});
router.on("/verf-link", () => {
  console.log("[Router] Route: /verf-link");
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "verf-link" });
  __vitePreload(() => import("./verf-link-route-Di3XP2sd.js"), true ? __vite__mapDeps([10,1]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "verf-link" });
  }).catch((err) => {
    console.error("[Router] Error loading verf-link route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "verf-link", error: err });
  });
});
router.on("/forgot", () => {
  console.log("[Router] Route: /forgot");
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "forgot" });
  __vitePreload(() => import("./forgot-route-C1SEbesv.js"), true ? __vite__mapDeps([11,1,7]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "forgot" });
  }).catch((err) => {
    console.error("[Router] Error loading forgot route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "forgot", error: err });
  });
});
router.on("/resethash", () => {
  console.log("[Router] Route: /resethash");
  if (!checkRouteAccess("resethash")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "resethash" });
  __vitePreload(() => import("./resethash-route-2ALgG8np.js"), true ? __vite__mapDeps([12,1,9,7]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "resethash" });
  }).catch((err) => {
    console.error("[Router] Error loading resethash route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "resethash", error: err });
  });
});
router.on("/home", () => {
  console.log("[Router] Route: /home");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "home" });
  __vitePreload(() => import("./dashboard-route-C7G4W0nR.js"), true ? __vite__mapDeps([13,14,15,16]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "home" });
  }).catch((err) => {
    console.error("[Router] Error loading home route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "home", error: err });
  });
});
router.on("/signout", () => {
  console.log("[Router] Route: /signout");
  if (!checkRouteAccess("signout")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "signout" });
  __vitePreload(() => import("./signout-route-m-aIohBB.js"), true ? __vite__mapDeps([17,1]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "signout" });
  }).catch((err) => {
    console.error("[Router] Error loading signout route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "signout", error: err });
  });
});
const SECTION_ROUTES = [
  // NOTE: /magnets has a dedicated handler below (real view), so it is intentionally NOT
  // in this placeholder list — same reason /clients and /team aren't.
  // NOTE: /templates has a dedicated handler below (real view — the starter-flow
  // gallery), so it is intentionally NOT in this placeholder list.
  // NOTE: /conversations and /ab-testing have dedicated handlers below (real views).
  // NOTE: /analytics has a dedicated handler below (real view — the per-magnet
  // overview), so it is intentionally NOT in this placeholder list.
  // NOTE: /ad-accounts has a dedicated handler below (real view — connection
  // status + associated Customer IDs), so it is intentionally NOT in this list.
  // Navigo resolves the FIRST registered match, so a placeholder entry here would
  // permanently shadow that handler no matter where it is registered.
  // NOTE: /clients and /team have dedicated handlers below (real views), so they are
  // intentionally NOT in this placeholder list.
  { path: "/billing", name: "billing", title: "Billing", icon: "receipt_long" },
  // NOTE: /settings (General) has a dedicated handler below (real view — profile
  // + preferences), so it is intentionally NOT in this placeholder list.
  // Sub-nav children (parent routes above cover Overview/General/All which share the parent path)
  { path: "/magnets/drafts", name: "magnets/drafts", title: "Magnets · Drafts", icon: "widgets" },
  { path: "/magnets/archived", name: "magnets/archived", title: "Magnets · Archived", icon: "widgets" },
  { path: "/analytics/conversions", name: "analytics/conversions", title: "Analytics · Conversions", icon: "monitoring" }
  // NOTE: /analytics/ad-performance has a dedicated handler below (real view), so it is
  // intentionally NOT in this placeholder list.
  // NOTE: /settings/workspace, /settings/integrations and /settings/security all
  // have dedicated handlers below (real views), so they are intentionally NOT in
  // this placeholder list.
];
SECTION_ROUTES.forEach(({ path, name, title, icon }) => {
  router.on(path, () => {
    console.log(`[Router] Route: ${path}`);
    if (!checkRouteAccess("home")) {
      navigateToRoute("signin");
      return;
    }
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: name });
    __vitePreload(() => import("./section-route-DpZY7MdQ.js"), true ? [] : void 0, import.meta.url).then((module2) => {
      const container = document.getElementById("app");
      container.innerHTML = module2.render({ title, icon, name });
      if (module2.init) module2.init({ name });
      PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: name });
    }).catch((err) => {
      console.error(`[Router] Error loading section route (${name}):`, err);
      PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: name, error: err });
    });
  });
});
router.on("/settings", () => {
  console.log("[Router] Route: /settings");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "settings" });
  __vitePreload(() => import("./settings-general-route-D-SxL6Tx.js"), true ? [] : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "settings" });
  }).catch((err) => {
    console.error("[Router] Error loading settings-general route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "settings", error: err });
  });
});
router.on("/settings/workspace", () => {
  console.log("[Router] Route: /settings/workspace");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "settings/workspace" });
  __vitePreload(() => import("./settings-workspace-route-Cdl3FsZV.js"), true ? [] : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "settings/workspace" });
  }).catch((err) => {
    console.error("[Router] Error loading settings-workspace route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "settings/workspace", error: err });
  });
});
router.on("/settings/notifications", () => {
  console.log("[Router] Route: /settings/notifications");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "settings/notifications" });
  __vitePreload(() => import("./settings-notifications-route-DXmcM55x.js"), true ? __vite__mapDeps([18,19,14]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "settings/notifications" });
  }).catch((err) => {
    console.error("[Router] Error loading settings-notifications route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "settings/notifications", error: err });
  });
});
router.on("/settings/integrations", () => {
  console.log("[Router] Route: /settings/integrations");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "settings/integrations" });
  __vitePreload(() => import("./settings-integrations-route-C69G8Txe.js"), true ? __vite__mapDeps([20,21,22,14]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "settings/integrations" });
  }).catch((err) => {
    console.error("[Router] Error loading settings-integrations route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "settings/integrations", error: err });
  });
});
router.on("/settings/integrations/:provider", (match) => {
  const provider = match?.data?.provider || "";
  console.log("[Router] Route: /settings/integrations/" + provider);
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "settings/integrations" });
  __vitePreload(() => import("./settings-integration-detail-route-C7V76Wrg.js"), true ? __vite__mapDeps([23,21,22,14]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render({ provider });
    if (module2.init) module2.init({ provider });
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "settings/integrations" });
  }).catch((err) => {
    console.error("[Router] Error loading integration detail route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "settings/integrations", error: err });
  });
});
router.on("/settings/security", () => {
  console.log("[Router] Route: /settings/security");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "settings/security" });
  __vitePreload(() => import("./settings-security-route-5rwS41-u.js"), true ? __vite__mapDeps([24,22,9]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "settings/security" });
  }).catch((err) => {
    console.error("[Router] Error loading settings-security route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "settings/security", error: err });
  });
});
router.on("/conversations", () => {
  console.log("[Router] Route: /conversations");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "conversations" });
  __vitePreload(() => import("./conversations-route-BmmZZZih.js"), true ? __vite__mapDeps([25,14]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "conversations" });
  }).catch((err) => {
    console.error("[Router] Error loading conversations route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "conversations", error: err });
  });
});
router.on("/ab-testing", () => {
  console.log("[Router] Route: /ab-testing");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "ab-testing" });
  __vitePreload(() => import("./ab-testing-route-Y-AVD4aF.js"), true ? __vite__mapDeps([26,14]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "ab-testing" });
  }).catch((err) => {
    console.error("[Router] Error loading ab-testing route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "ab-testing", error: err });
  });
});
router.on("/magnets", () => {
  console.log("[Router] Route: /magnets");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "magnets" });
  __vitePreload(() => import("./magnets-route-vSpr8hQ0.js"), true ? __vite__mapDeps([27,28,15,14]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "magnets" });
  }).catch((err) => {
    console.error("[Router] Error loading magnets route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "magnets", error: err });
  });
});
router.on("/templates", () => {
  console.log("[Router] Route: /templates");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "templates" });
  __vitePreload(() => import("./templates-route-6jt4emcG.js"), true ? __vite__mapDeps([29,28,15]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "templates" });
  }).catch((err) => {
    console.error("[Router] Error loading templates route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "templates", error: err });
  });
});
router.on("/questionnaires", () => {
  console.log("[Router] Route: /questionnaires");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "questionnaires" });
  __vitePreload(() => import("./questionnaires-route-DgIbjO2k.js"), true ? __vite__mapDeps([30,2]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "questionnaires" });
  }).catch((err) => {
    console.error("[Router] Error loading questionnaires route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "questionnaires", error: err });
  });
});
router.on("/deliverables", () => {
  console.log("[Router] Route: /deliverables");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "deliverables" });
  __vitePreload(() => import("./deliverables-route-DhDaQCSG.js"), true ? __vite__mapDeps([31,2]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "deliverables" });
  }).catch((err) => {
    console.error("[Router] Error loading deliverables route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "deliverables", error: err });
  });
});
router.on("/leads", () => {
  console.log("[Router] Route: /leads");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "leads" });
  __vitePreload(() => import("./leads-route-DIutAyLV.js"), true ? __vite__mapDeps([32,14,15]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "leads" });
  }).catch((err) => {
    console.error("[Router] Error loading leads route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "leads", error: err });
  });
});
router.on("/analytics", () => {
  console.log("[Router] Route: /analytics");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "analytics" });
  __vitePreload(() => import("./analytics-route-pX5iyFS7.js"), true ? __vite__mapDeps([33,14,16]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "analytics" });
  }).catch((err) => {
    console.error("[Router] Error loading analytics route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "analytics", error: err });
  });
});
router.on("/analytics/ad-performance", () => {
  console.log("[Router] Route: /analytics/ad-performance");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "analytics/ad-performance" });
  __vitePreload(() => import("./ad-performance-route-B64kFNEg.js"), true ? __vite__mapDeps([34,14,21,22,16]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "analytics/ad-performance" });
  }).catch((err) => {
    console.error("[Router] Error loading ad-performance route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "analytics/ad-performance", error: err });
  });
});
router.on("/ad-accounts", () => {
  console.log("[Router] Route: /ad-accounts");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "ad-accounts" });
  __vitePreload(() => import("./ad-accounts-route-DWTW-XXQ.js"), true ? __vite__mapDeps([35,14,21,22]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "ad-accounts" });
  }).catch((err) => {
    console.error("[Router] Error loading ad-accounts route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "ad-accounts", error: err });
  });
});
router.on("/clients", () => {
  console.log("[Router] Route: /clients");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "clients" });
  __vitePreload(() => import("./clients-route-F-gaefLA.js"), true ? __vite__mapDeps([36,19,2]) : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "clients" });
  }).catch((err) => {
    console.error("[Router] Error loading clients route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "clients", error: err });
  });
});
router.on("/team", () => {
  console.log("[Router] Route: /team");
  if (!checkRouteAccess("home")) {
    navigateToRoute("signin");
    return;
  }
  PubSub$1.publish(AppBroadcast.ROUTE_NAV_BEFORE, { route: "team" });
  __vitePreload(() => import("./team-route-BLLwvKq0.js"), true ? [] : void 0, import.meta.url).then((module2) => {
    const container = document.getElementById("app");
    container.innerHTML = module2.render();
    if (module2.init) module2.init();
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_AFTER, { route: "team" });
  }).catch((err) => {
    console.error("[Router] Error loading team route:", err);
    PubSub$1.publish(AppBroadcast.ROUTE_NAV_ERROR, { route: "team", error: err });
  });
});
router.notFound(() => {
  console.log("[Router] Route not found - redirecting to splash");
  navigateToRoute("splash");
});
PubSub$1.subscribe(AppBroadcast.ROUTE_NAV, (_msg, data) => {
  console.log("[Router] ROUTE_NAV event received:", data);
  if (data?.route) {
    navigateToRoute(data.route);
  }
});
function waitForNeodigm() {
  console.log("[App] Waiting for Neodigm 55 library...");
  let attempts = 0;
  const maxAttempts = 100;
  const checkMvvLegit = setInterval(() => {
    attempts++;
    if (attempts % 10 === 0) {
      console.log(`[App] Still waiting... attempt ${attempts}/100`, {
        mvvLegitExists: typeof mvvLegit !== "undefined",
        neodigmLoaded: window.__neodigmLoaded
      });
    }
    if (typeof mvvLegit !== "undefined") {
      console.log(`[App] Neodigm 55 loaded after ${attempts * 100}ms`);
      clearInterval(checkMvvLegit);
      initializeApp();
    } else if (attempts >= maxAttempts) {
      clearInterval(checkMvvLegit);
      console.error("[App] Failed to load Neodigm 55 library after 10 seconds");
      console.error("[App] Check browser console for CORS or network errors");
      document.getElementById("app").innerHTML = `
        <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
          <h2 style="color: #f44336;">Failed to Load Authentication Library</h2>
          <p>The Neodigm 55 library could not be loaded from the CDN.</p>
          <p>Please check your internet connection and try refreshing the page.</p>
          <button onclick="location.reload()" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `;
      PubSub$1.publish(AppBroadcast.APP_ERROR, {
        message: "Failed to load authentication library"
      });
    }
  }, 100);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", waitForNeodigm);
} else {
  waitForNeodigm();
}
async function initializeApp() {
  console.log("[App] Neodigm 55 loaded, initializing...");
  initTheme();
  applyAnimationsPref();
  initAppEvents();
  I18nController.initialize();
  console.log("[App] I18n Controller initialized");
  const authInitialized = await AuthController.init({
    // RULE: All client apps point to hosted API (no localhost fallback)
    BASE_URL: "https://machfivemagnet-saas.onrender.com",
    navigateFunction: (routePath) => {
      console.log("[AuthController] Navigation requested:", routePath);
      navigateToRoute(routePath);
    }
  });
  if (!authInitialized) {
    console.error("[App] AuthController initialization failed");
    return;
  }
  const sessionUser = AuthController.getEntity();
  if (sessionUser) {
    console.log("[App] Session restored for:", sessionUser.email);
    PubSub$1.publish(AppBroadcast.APP_USER_LOADED, { entity: sessionUser });
    if (AuthController.isAuthenticated()) {
      if (localStorage.getItem(AuthController.CONFIG.LS_KEYS.ACTIVE_ORG)) {
        await AuthController.fetchScope();
      } else {
        AuthController.fetchScope();
      }
    }
  }
  PubSub$1.publish(AppBroadcast.APP_READY, {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    sessionUser
  });
  setupSideNav();
  mountNotificationBell();
  router.resolve();
  window.AuthController = AuthController;
  window.I18nController = I18nController;
  window.MachVive = MachVive;
  console.log("[App] StreamSyncEngage client initialized (AuthController, I18nController, MachVive available globally)");
}
PubSub$1.subscribe(AppBroadcast.ROUTE_NAV_AFTER, (_msg, data) => {
  if (typeof I18nController !== "undefined" && I18nController.refresh) {
    setTimeout(() => {
      I18nController.refresh();
    }, 100);
  }
});
export {
  AuthController as A,
  FEATURE_FLAGS as F,
  I18nController as I,
  LEAD_CAPTURE_FIELDS as L,
  MicrocopyManager as M,
  PubSub$1 as P,
  STEP_TYPES as S,
  __vitePreload as _,
  getDeliverableLinkParams as a,
  AppBroadcast as b,
  capList as c,
  currentTheme as d,
  darkModeEnabled as e,
  LIST_CAP as f,
  getQuestionnaireLinkParams as g,
  expandButtonHTML as h,
  LIST_STEP as i,
  MEMBER_ROLES as j,
  canManageMemberRole as k,
  setTheme as s
};
//# sourceMappingURL=index.js.map
