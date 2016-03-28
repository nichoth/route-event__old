var onRoute = require('../route-event')
var router = require('routes')()

router.addRoute('/', function() {
  console.log('ham')
})

onRoute(function(path) {
  var m = router.match(path)
  m.fn()
})
