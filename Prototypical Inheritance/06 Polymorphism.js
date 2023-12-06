/*
Polymorphism - (Poly - many, Morph - forms)

Using Polymorphism we can call different kinds of methods for different objects by encapsulated methods and properties

this helps reduce the complexity of the code by reducing the size of the code and helps in increasing reusability of code
*/

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
}

function Square() {

}

extend(Square, Shape);

Square.prototype.duplicate = function () {
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes) {
    shape.duplicate();
}