import { test } from '@socketsupply/tapzero'
import Route from 'route-event'

test('catch route change', t => {
    Route()(function onRoute (href) {
        t.equal(href, '/bar', 'should callback with the expected href')
    })

    const el = document.getElementById('bar')
    el.dispatchEvent(new window.Event('click', { bubbles: true }))
})
