// even if we have created similar objects they are never equal.
var a = {name: 'srashti'};
var b = {...a};

console.log(b);     // [object Object] {
                    //     name: "srashti"
                    // }
console.log(a===b);   // false


// If we create objects as below:

var a = new Object();
var b = new Object();

console.log(a==b);   // False


// Scenario 3 Usage of JSON.parse and JSON.stringify for deep clonning.

var a = {
    name:'srashti',
    age: 31
    }
    
    console.log(typeof(a));     // object
    
    var b = JSON.stringify(a);
    console.log(typeof(b));     // String
    console.log(b);            //{\"name\":\"srashti\",\"age\":31}
    
    
    var c = JSON.parse(b);
    console.log(typeof(c));        // object
    console.log(c);                 // [object Object] {
                                    //     age: 31,
                                    //     name: "srashti"
                                    // }


// Scenario 4: Checking the equality of objects created thru Object.create()

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

var abc = Object.create(persons);
console.log(Object.getPrototypeOf(abc) === persons)
    