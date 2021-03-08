// Different methods to clone an object

//1. Object.assign

var persons ={
    name:'Srashti',
     age: 31
  }

var newPerson = {
  gender: 'female'
}

var newPerson1 = Object.assign(newPerson, persons);
console.log(newPerson1);

// Output:
// [object Object] {
//     age: 31,
//     gender: "female",
//     name: "Srashti"
//   }

//2. If we want to create a new object with the same properties as original object

var persons = {
    name:'Srashti',
    age: 31
  }

var newPerson1 = Object.assign({}, persons);
console.log(newPerson1);

// [object Object] {
//     age: 31,
//     name: "Srashti"
//   }

//3. With the help of spread operator

var persons =
  {
    name:'Srashti',
    age: 31
  }

var newPerson1 = {...persons};
console.log(newPerson1);

// [object Object] {
//     age: 31,
//     name: "Srashti"
//   }

// 4. Json.parse method

var persons =
  {
    name: {
      firstName: 'Srashti',
      lastName: {
        middle:'Gupta',
        surname: 'Gupta'
      }
    },
    age: 31
  }

var newObject = JSON.parse(JSON.stringify(persons));
console.log(newObject);

// [object Object] {
//     age: 31,
//     name: [object Object] {
//       firstName: "Srashti",
//       lastName: [object Object] { ... }
//     }
//   }