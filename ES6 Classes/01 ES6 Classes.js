
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;

        // this move function will be added as a member function in the object being created 
        this.move = function () {
            console.log('move');
        }
    }

    // this draw method will be in the prototype of the created object
    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);
