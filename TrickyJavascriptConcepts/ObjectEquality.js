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


// Scenario 3

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
    