import { test } from 'tapzero'
import Route from '../dist/index.mjs'

test('catch route change', t => {
    Route()(function onRoute (href) {
        console.log('wooo', href)
        t.equal(href, '/bar', 'should callback with the expected href')
    })

    const el = document.getElementById('bar')
    el.dispatchEvent(new window.Event('click', { bubbles: true }))
})
