// Function is also an object
// Functin Circle is also has a constructor named Function()

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('Draw');
    }
}

// this below function is the under the hood implementation of the above Constructor Function and is same for other functions too
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = () => {
//     console.log('Draw');
// }
// `);

// const circle = new Circle1(1);

// call will reference the this keyword to the object it has as argument
// the below statement is same as statement number 25 
Circle.call({}, 1)

// apply() is used to pass an array as an argument with the object 
Circle.apply({}, [1, 2, 3])
const another = new Circle(1);
