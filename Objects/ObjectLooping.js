// for in loop

var persons = [
    {
      name:'Srashti',
      age: 31
    },
    {
      name:'Miraya',
      age: 3
    }
  ];
  
  for(var key in persons){
    console.log(persons[key].name);   // this will give the below o/p
  }

// "Srashti"
// "Miraya"


//2. Object.keys()

// The Object.keys() method returns an array of a given object's 
// own enumerable property names, iterated in the same order that a normal loop would.

var persons = [
    {
      name:'Srashti',
      age: 31
    },
    {
      name:'Miraya',
      age: 3
    }
  ];
  
  for(var key in Object.keys(persons)) {
    console.log(persons[key].name);
  }

  // ["Srashti", "Miraya"]

// 3. Using Object.entries()

// The Object.entries() method returns an array of a given object's 
// own enumerable string-keyed property [key, value] pairs, in the same order 
// as that provided by a for...in loop. (The only important difference is that a for...in 
//     loop enumerates properties in the prototype chain as well). 

var persons = [
    {
      name:'Srashti',
      age: 31
    },
    {
      name:'Miraya',
      age: 3
    }
  ];
  
  console.log(Object.entries(persons));  

//   [["0", [object Object] {
//     age: 31,
//     name: "Srashti"
//   }], ["1", [object Object] {
//     age: 3,
//     name: "Miraya"
//   }]]

console.log(Object.entries(persons[0]));

//   [["0", [object Object] {
//     age: 31,
//     name: "Srashti"
//   }],

console.log(Object.entries(persons[0].name));

//Srashti


// 4. for of loop if in case we have array of objects and we ned to access the keys of the object

var persons = [
    {
      name:'Srashti',
      age: 31
    },
    {
      name:'Miraya',
      age: 3
    }
  ];
  
  for(var key of Object.entries(persons)) {
    console.log(key[1].name);
  }

  // Output will be
//   //"Srashti"
// "Miraya"