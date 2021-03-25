// Cross origin resource sharing helps to solve the issue with different origin .
// CORS deals with 2 type of requests (Simple and Preflighted requests)

// Simple request

// One of these methods is used: GET, POST, or HEAD
// A CORS safe-listed header is used
// When using the Content-Type header, only the following values are allowed: application/x-www-form-urlencoded, multipart/form-data, or text/plain
// No event listeners are registered on any XMLHttpRequestUpload object
// No ReadableStream object is used in the request

// Prefilghted Requests

// Access-Control-Request-Method: The intended method of the request (e.g., GET or POST)
// Access-Control-Request-Headers: An indication of the custom headers that will be sent with the request
// Origin: The usual origin header that contains the script's current origin
// An example of such a request might look like this:

// # Request
// curl -i -X OPTIONS localhost:3001/api/ping \
// -H 'Access-Control-Request-Method: GET' \
// -H 'Access-Control-Request-Headers: Content-Type, Accept' \
// -H 'Origin: http://localhost:3000'