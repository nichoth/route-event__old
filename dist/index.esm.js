var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_src = __commonJS({
  "src/index.js"(exports, module) {
    var singlePage = require("single-page");
    var catchLinks = require("@nichoth/catch-links/dist");
    function Route(opts) {
      opts = opts || {};
      var listeners = [];
      var el = opts.el || document.body;
      var setRoute = singlePage(function(href, scroll) {
        listeners.forEach(function(cb) {
          cb(href, scroll);
        });
      }, opts);
      catchLinks(el, setRoute);
      function listen(cb) {
        var i = listeners.length;
        listeners.push(cb);
        return /* @__PURE__ */ __name(function unlisten() {
          listeners.splice(i, 1);
        }, "unlisten");
      }
      __name(listen, "listen");
      listen.getRoute = getRoute;
      listen.setRoute = setRoute;
      return listen;
    }
    __name(Route, "Route");
    Route.getRoute = getRoute;
    function getRoute() {
      return window.location.pathname;
    }
    __name(getRoute, "getRoute");
    module.exports = Route;
  }
});
export default require_src();
