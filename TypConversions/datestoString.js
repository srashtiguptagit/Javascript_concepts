// Date => String

var x= new Date();
console.log(typeof(x));   // object

var y = x.toString();
console.log(typeof(y));   // String

// String => Date

var x= "Srashti";
console.log(typeof(x));  // String
 
var y = new Date(x);    // object
console.log(typeof(y));
 