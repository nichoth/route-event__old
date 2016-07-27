# route event

Simple route event for the browser. Call a function with a path whenever someone clicks a link that is local to the server.

## example

Listen for click events on `document.body`: 

```js
var route = require('route-event')

// listen for click events on docuement.body. If the href is local to the
// server, call `onRoute`
var setRoute = route(onRoute)

function onRoute (path) {
  console.log(path)
  // '/example/path'
}

// change the location and fire the onRoute cb
setRoute('/some/path')
```

Pass in an element to listen to, and handle events with a router:
```js
var route = require('route-event')
var router = require('routes')()

router.addRoute('/', function () {
  console.log('root')
})

route({ el: document.getElementById('app') }, function onChange (path) {
  var m = router.match(path)
  m.fn()
})
```
