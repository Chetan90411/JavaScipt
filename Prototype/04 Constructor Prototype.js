// ways to get prototype of an object
// way 1
Object.getPrototypeOf(myObj);
// way 2
// myObj.__proto__ (parent of myObj) or (objectBase)

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype will be used as parent for the objects created by Circle constructor
Circle.prototype

const circle = new Circle(1);

// under the hood Object constructor is called
// Object constructor has a prototype property
// Object.prototype this is the object that will be used as the prototype for all objects ceated by this Object() constructor

// Therefore Object.prototype === myObj.__proto__


//Similarly

// whenever we create an array under the hood Array constructor is called
let array = [];

// array.__proto__ (arrayBase)
// Array.prototype (arrayBase)
// Therefore Array.prototype === array.__proto__