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

// 4. Supoose we want to find the highest element in an array

var arr = [-1, 2, -3, 4];

var newArr = arr.reduce((highest, inital)=> {
  if(highest > inital){
    return highest;
  }
  else {
    return inital;
  }
});

console.log(newArr); //4

