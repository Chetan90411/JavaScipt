// with this current implementation we will have as many copies of draw() method as the number of objects we create
// We can take the draw method out of the Circle object and put it in it's prototype then we will have a single instance of draw method and Circle object

// In JavaScript we have 2 types of properties and methods
// Instance members
// Prototype members


// We can reference an Instance member from a Prototype member  and vice versa (refer move and draw methods)

function Circle(radius) {
    //Instance members 
    this.radius = radius;

    this.move = function () {
        this.draw()
        console.log('move');
    }
    // this.draw = () => {
    //     console.log('draw');
    // }
}
//Prototype members
Circle.prototype.draw = function () {
    // this.move();
    console.log('draw');
}
// this prototype member will become a part of the __proto__ object of the objects created by Circle constructor

// Since the following implementation of toString() method is more accessable it wil be called
Circle.prototype.toString = function () {
    return "Circle with radius" + this.radius;
}


const c1 = new Circle(1);
const c2 = new Circle(1);