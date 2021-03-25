
// The difference bteween Object.is and === in javascript


console.log(Object.is(-0, +0)) // false
console.log(-0 === +0) // true
console.log(Object.is(NaN, NaN)) // true
console.log(NaN === NaN) // false

// Whereas if we check for undefined they behave the same way


console.log(Object.is(undefined, undefined)); // true
console.log(undefined === undefined);     // true