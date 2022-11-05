var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
