# route event

Simple route event for the browser. Take a function and call it with a path. Only triggers for links that are local to the server.

## example

Listen for click events on `document.body` and pass the path:

```js
var onRoute = require('route-event')

onRoute(function(path) {
  console.log(path)
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
