
// Methos 1 Array creation
var arr = new Array(5);
console.log(arr);

// [undefined, undefined, undefined, undefined, undefined]

//Method 2
var arr = ['Srashti', 'Miraya', 'Nakul'];
console.log(arr);

//["Srashti", "Miraya", "Nakul"]

// Method 3 Using spread opeartor
var arr = ['Srashti', 'Miraya', 'Nakul'];
var newArr = [...arr];
console.log(newArr);

// ["Srashti", "Miraya", "Nakul"]

// Method 4: Using Slice method

var arr = ['Srashti', 'Miraya', 'Nakul'];
var newArr = arr.slice();
console.log(newArr);

// ["Srashti", "Miraya", "Nakul"]





