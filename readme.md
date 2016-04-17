# route event

Simple route event for the browser. Call a function with a path whenever someone clicks a link that is local to the server.

## example

Listen for click events on `document.body`: 

```js
var route = require('route-event')

var setRoute = route(function onChange(path) {
  console.log(path)
  // '/example/path'
})

// navigate somewhere and fire the onChange cb
setRoute('/some/path')
```

Pass in an element to listen to, and handle events with a router:

```js
var route = require('route-event')
var router = require('routes')()

router.addRoute('/', function() {
  console.log('ham')
})

route({ el: document.getElementById('app') }, function onChange(path) {
  var m = router.match(path)
  m.fn()
})
```
