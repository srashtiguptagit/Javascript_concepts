// Bubbling

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
    <button onclick="event.stopPropagation()">Click me</button> // then this event wont reach p div form
    <button onclick="event.stopImmediatePropagation()">Click me</button> // this will stop immediate propogation on the current handler as well
  </div>
</form>

// A click on the inner <p> first runs onclick:

// On that <p>.
// Then on the outer <div>.
// Then on the outer <form>.
// And so on upwards till the document object.


// Stopping the propogation

// A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.
// But any handler may decide that the event has been fully processed and stop the bubbling.
// The method for it is event.stopPropagation().
// For instance, here body.onclick doesn’t work if you click on <button>:

