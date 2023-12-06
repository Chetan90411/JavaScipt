// function to inherit any prototype to any object
// This extend function is called intermediate inheritance functions
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// parent function
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

// calling extend to inherit Shape prototype
extend(Circle, Shape);


Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

// calling extend to inherit Shape prototype
extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');
const sq = new Square(10);
sq.duplicate();