// A web worker is a JavaScript running in the background, without affecting the performance of the page.

// When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
// A web worker is a JavaScript that runs in the background, independently of other scripts, without
// affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things,
// etc., while the web worker runs in the background.

// Script file which runs in the background demo_workers.js
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);    // all the communications happens with postMessage()
  setTimeout("timedCount()",500);
}

timedCount();

// Creating a web worker
if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }

// Then we can send and receive messages from the web worker.

// Add an "onmessage" event listener to the web worker.

w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};

// Terminate a web workder
w.terminate();

// Reuse a web workers
w = undefined;