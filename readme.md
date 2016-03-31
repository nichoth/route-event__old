# route event

Simple route event for the browser. Call a function with a path whenever someone clicks a link that is local to the server.

## example

Listen for click events on `document.body`: 

```js
var onRoute = require('route-event')

onRoute(function(path) {
  console.log(path)
  // '/example/path'
  // (everything after the domain)
})
```

Pass in an element to listen to, and handle events with a router:

```js
var onRoute = require('route-event')
var router = require('routes')()

router.addRoute('/', function() {
  console.log('ham')
})

onRoute({ el: document.getElementById('app') }, function(path) {
  var m = router.match(path)
  m.fn()
})
```
