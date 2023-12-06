/*
When we want a particular method which is inherited from a parent prototype to behave differently we use method overriding

It is a way to implement polymorphism.

when there are two implementations parent and child methods then child implementation will be used 
but we can also call the parent method explicitly
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
// in the above statement we are resetting the prototype so we need to override the function only after this statement else this below implementation will disappear
Circle.prototype.duplicate = function () {
    // if we are using this in the parent duplicate functon then we need to pass this as argument else we do not need to pass this using call method
    Shape.prototype.duplicate.call(this);

    console.log('duplicate circle');
}

const c = new Circle();
// this statement will call the duplicate function in the Circle constructor 
c.duplicate(); // ==> duplicate circle
