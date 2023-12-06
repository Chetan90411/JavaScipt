/*
Whenever there is a constructor property given using which we have to dynamically create an object on that constructor function
then we can simply navigate it as we know that 
c object contains __proto__(eqvivalent to prototype) inside which there is a constructor property which returns the constructor function 

so we can also create object as follows:
obj = new Circle.prototype.constructor(1);

so writing 
new Circle.prototype.constructor()
is same writing
new Circle()
*/

function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius) {
    this.radius = radius;
}

// before using object.create function to assign to Circle prototype
// Circle had a constructor property in it's prototype

// new Circle.prototype.constructor() => new Circle(); 

// So we have to reset the constructor property to Circle() constructor or else object of Shape will be created
Circle.prototype = Object.create(Shape.prototype) // resetting prototype
Circle.prototype.constructor = Circle; // resetting constructor

const c = new Circle(1);
obj = new Circle.prototype.constructor(1);
console.log(obj.radius);

// Conclusion
// Make sure to reset the constructor after resetting the prototype