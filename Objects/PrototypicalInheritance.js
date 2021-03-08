// the hierarchy that folows here:

// x=> ArrayBase => Objectbase

function shape() {
    color: blue
    shape.prototype.duplicate = () => {
        console.log('parent');
    }
}

function Circle() {
    this.radius = radius;
    shape.call(this , color); // we can do this post inheritance
}

Circle.prototype = Object.create(shape.prototype);
Circle.prototype.constructor = Circle; // As a part of best practice do this