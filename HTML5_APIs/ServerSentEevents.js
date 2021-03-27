// Server-Sent Events (SSE) allow a web page to get updates from a server.

// How do we receive the server side notifications

var source = new EventSource("demo_sse.php");  //url of the page sending the updates

source.onmessage = function(event) {
  document.getElementById("result").innerHTML += event.data + "<br>";
};

// Server side changes required to make a server capable of sending updates

// <?php
// header('Content-Type: text/event-stream');   // We have to make the content type as event-stream.
// header('Cache-Control: no-cache');
// ?>