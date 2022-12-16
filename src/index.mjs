// @ts-check
import { singlePage } from "@nichoth/single-page"
import CatchLinks from "@nichoth/catch-links"

export default function Route (opts) {
    opts = opts || {}
    var listeners = []
    var el = opts.el || document.body

    var setRoute = singlePage(function (href, scroll) {
        listeners.forEach(function (cb) {
            cb(href, scroll)
        })
    }, opts)

    CatchLinks(el, setRoute)

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
