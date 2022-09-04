var router = require('routes')()

router.addRoute('/', function() {
    console.log('root')
})

router.addRoute('/foo', function () {
    console.log('foo')
})

navigation.addEventListener('navigate', ev => {
    console.log('nav event', ev)
    // ev.preventDefault()
    console.log(ev.destination.url)
    console.log('can intercept', ev.canIntercept)
    const url = new URL(ev.destination.url)
    console.log('url.pathname', url.pathname)
    // ev.intercept({ handler: loadIndexPage })
    ev.preventDefault()
})

function loadIndexPage () {
    console.log('aaaaaaa')
}
