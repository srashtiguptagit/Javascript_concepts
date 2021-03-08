var text= "Srashti";
console.log(text.length);

var text ="My name is Srashti";
var temp = text.indexOf('Srashti');
console.log(temp);

var text ="My name is Srashti";
var temp = text.replace('Srashti', 'Miraya');
console.log(temp);

var text= "My Name is Srashti"; // slice(start, end)it can take -ve values
var temp = text.slice(3);
console.log(temp);

var text= "My Name is Srashti"; //substring(start, end) it cannot take -ve values
var temp = text.substring(3);
console.log(temp);

var text= "My Name is Srashti";  // substr(start, length)
var temp = text.substr(3, 10);
console.log(temp);

// 7
// 11
// "My name is Miraya"
// "Name is Srashti"
// "Name is Srashti"
// "Name is Sr"