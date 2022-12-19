var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => Route
});
module.exports = __toCommonJS(src_exports);
var import_single_page = require("@nichoth/single-page");
var import_catch_links = __toESM(require("@nichoth/catch-links"), 1);
function Route(opts) {
  opts = opts || {};
  var listeners = [];
  var el = opts.el || document.body;
  var setRoute = (0, import_single_page.singlePage)(function(href, scroll) {
    listeners.forEach(function(cb) {
      cb(href, scroll);
    });
  }, opts);
  (0, import_catch_links.default)(el, setRoute);
  function listen(cb) {
    var i = listeners.length;
    listeners.push(cb);
    return /* @__PURE__ */ __name(function unlisten() {
      listeners.splice(i, 1);
    }, "unlisten");
  }
  __name(listen, "listen");
  listen.setRoute = setRoute;
  return listen;
}
__name(Route, "Route");
