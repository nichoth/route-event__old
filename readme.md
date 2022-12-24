# route event
Simple route event for the browser. Call a function with a path whenever someone clicks a link that is local to the server.

## install

```
npm i route-event
```

### CJS
```js
var Route = require('route-event')
```

### ESM
```js
import Route from 'route-event'
```

## example
Listen for click events on `document.body`: 

```js
var route = require('route-event')()

// listen for click events on docuement.body. If the href is local to the
// server, call `onRoute`
var stopListening = route(function onRoute (path, scrollState) {
  console.log(path)
  // '/example/path'
  console.log(scrollState)
  // { scrollX: 0, scrollY: 0 }
})

// change the location and call the onRoute cb
route.setRoute('/some/path')
```

Pass in an element to listen to, and handle events with a router:
```js
var route = require('route-event')({
    el: document.getElementById('app')
})
var router = require('routes')()

router.addRoute('/', function () {
  console.log('root')
})

route(function onChange (path) {
  var m = router.match(path)
  m.fn()
})
```
