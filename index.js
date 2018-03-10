var singlePage = require('single-page')
var catchLinks = require('catch-links')

module.exports = Route

function Route (opts) {
    opts = opts || {}
    var listeners = []
    var el = opts.el || document.body

    var setRoute = singlePage(function (href, scroll) {
        listeners.forEach(function (cb) {
            cb(href, scroll)
        })
    }, opts)

    catchLinks(el, setRoute)

    function listen (cb) {
        var i = listeners.length
        listeners.push(cb)
        return function unlisten () {
            listeners.splice(i, 1)
        }
    }

    listen.setRoute = setRoute
    return listen
}

