// A closure is a feature in JavaScript where an inner function 
// has access to the outer (enclosing) function’s variables — a scope chain.

// The closure has three scope chains:
// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables
var add = (function () {
    var counter = 0;
    return function () {
      counter += 1; 
      return counter;
    }
  })();

  add();   //1
  add();   //2
  add();   //3
  



