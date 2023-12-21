// 'use strict';

// const Circle = function() {
//     this.draw = function() { console.log(this); }
// };

// const c = new Circle();
// // Method Call - here this points to the object c 
// c.draw();

// const draw = c.draw;

// Function Call - here this points to the global object which is window in the browser and global in node
// draw();// when we use stict mode then it will give undefined to prevent us from modifying the global object

// if we  do not user the new keyword with the constructor then the this object will point to the global object


// in the below code the strict mode is on by default

class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();
