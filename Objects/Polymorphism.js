function Shape() {
    shape.prototype.duplicate =() => {

    }
}

function temp(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;

}

function Circle( ) {
    temp(Shape, Circle);
    Circle.prototype.duplicate = () => {

    }
}

function Square( ) {
    temp(Shape, Square);
    Square.prototype.duplicate = () => {
        
    }
}