//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('Draw');
        }
    }
}

const circle = createCircle(2);
circle.draw()
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('Draw');
    }
}

// new keyword is used to create a new object and make this to point to this object and return this from the constructor
// if we don't use the new keyword then this keyword will point to the window object
const anotherCircle = new Circle(2);
anotherCircle.draw()

// let x = {}; is equvivalent to below under the hood in javascript using built in constructor Object() 
// let x = new Object();
// new String(); instead we use ''."",``
// new Boolean(); // true , false
// new Number(); // 1, 2, 3, ... 

// Factory function also creates object by using built in Object() constructor

