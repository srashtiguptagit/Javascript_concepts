// object to string conversion
var obj = {
    name: 'Srashti',
    age: 31
  }
  
  var newObj = JSON.stringify(obj);
  console.log(newObj);
  console.log(typeof(newObj));

  
  var newObj1 = JSON.parse(newObj);
  console.log(newObj1);
  console.log(typeof(newObj1));

Outputs

//   "{\"name\":\"Srashti\",\"age\":31}"
// "string"
// [object Object] {
//   age: 31,
//   name: "Srashti"
// }
// "object"

