var onRoute = require('../src')()
var router = require('routes')()

router.addRoute('/', function() {
    console.log('root')
})

router.addRoute('/foo', function () {
    console.log('foo')
})

onRoute(function(path) {
    var m = router.match(path)
    m.fn()
})


