// Array => String

var arr= ['s', 'r', 'a', 's', 'h', 't', 'i'];
console.log(typeof(arr));     // object

var newArr = arr.join('');
console.log(newArr);
console.log(typeof(newArr));  // string

// String => Array

var x= 'Srashti';
var y = x.split('');
console.log(y);
console.log(typeof(y));

// ["S", "r", "a", "s", "h", "t", "i"]
// "object"