// With web storage, web applications can store data locally within the user's browser.

// Before HTML5, application data had to be stored in cookies, included in every server request. 
// Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)


// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

localStorage.removeItem("lastname");

// Important difference between LS, SS and cookies

// 1. Unlike cookies, web storage objects are not sent to server with each request. 
// Because of that, we can store much more. Most browsers allow at least 2 megabytes 
// of data (or more) and have settings to configure that.

// 2. Also unlike cookies, the server can’t manipulate storage objects via HTTP headers.
// Everything’s done in JavaScript.

// 3. The storage is bound to the origin (domain/protocol/port triplet). 
// That is, different protocols or subdomains infer different storage objects, 
// they can’t access data from each other.