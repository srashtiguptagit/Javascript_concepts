// The instanceof operator tests the presence of constructor.prototype in object's prototype chain.

function C() {
}

function D() {
}

var o = new C();

o instanceof C     // True
o instanceof D     // False
o instanceof Object // True
