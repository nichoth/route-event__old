var url = require('url')
var singlePage = require('single-page')
var catchLinks = require('catch-links')

module.exports = route

function route(opts, onRoute) {
  if (typeof opts === 'function') {
    onRoute = opts
    opts = {}
  }

  var el = opts.el || document.body
  var setRoute = singlePage(function(href) {
    var path = url.parse(href).pathname
    onRoute(path)
  })

  catchLinks(el, setRoute.bind(null))

  return setRoute
}

