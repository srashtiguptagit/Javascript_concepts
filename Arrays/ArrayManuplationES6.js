// 1.Map method
// Suppose we have a usecase that i want to return the square root of the elements in the array

var arr = [1, 2, 3, 4];
var newArr = arr.map((val) => {
  return val*val;
});

console.log(newArr);

// [1, 4, 9, 16]

// 2. Filter method: This creates an array of elements which passes a  criteria
// Suppose we have a usecase that i want to return the positive number of the elements in the array

var arr = [-1, 2, -3, 4];

var newArr = arr.filter((val)=>{
  return val > 0;
});

console.log(newArr);

//[2, 4]


// 3. Reduce method => Reduces the array of values into single array
// Suppose we want to find the sum of all the lements in the array

var arr = [-1, 2, -3, 4];

var newArr = arr.reduce((total, sum)=> {
  return total+sum;
});

console.log(newArr);

//2

// 4. Suppose we want to find the highest element in an array

var arr = [-1, 2, -3, 4];

var newArr = arr.reduce((highest, inital)=> {
  if(highest > inital){
    return highest;
  }
  else {
    return inital;
  }
});

console.log(newArr); // 4

//5. Find method (returns the first matched element)

var arr = [-1, 2, -3, 4, 5, 6];

var newArr = arr.find((val) => {
  return val > 3
  
})

console.log(newArr);  // 4

//===============================================================

//join Method

var arr= ['banana', 'grapes', 'oranges'];

var newArr = arr.join('+');

console.log(newArr);
console.log(typeof(newArr));

// "banana+grapes+oranges"
// "string"

// Push method=> adds the elements to end of the array

var arr= ['banana', 'grapes', 'oranges'];
arr.push('mango');
for(var key in arr) {
  console.log(arr[key]);
}

// "banana"
// "grapes"
// "oranges"
// "mango"

// Unshift => adds  the element to start of the array

var arr= ['banana', 'grapes', 'oranges'];
arr.unshift('apple');

console.log(arr);

//Pop method removes last element from array

var arr= ['banana', 'grapes', 'oranges'];
var x = arr.pop();

console.log(x); // oranges

// Removes the first element from array
var arr= ['banana', 'grapes', 'oranges'];
var x = arr.shift();

console.log(x);

// Splice method

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// ["Banana", "Orange", "Apple", "Lemon", "Kiwi", "Mango"]

// Slice method

var arr= ['banana', 'grapes', 'oranges'];
var x= arr.slice(1);
console.log(x);

//["grapes", "oranges"]