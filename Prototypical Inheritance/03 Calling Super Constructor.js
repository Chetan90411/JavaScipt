// Circle object will not have any of the property of the base constructor Shape as its own unless we call it as a Super Constructor

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    // Shape(color); this will not work properly as the this in Shape Constructor is pointing to global object
    Shape.call(this, color); // This is how you call a super constructor

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');