function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('Draw');
    }
}

const circle = new Circle(10)
// to enumerate all the keys in an object we use for in loop
for (let key in circle) {
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

// Below Object.keys() function returns all the methods and properties key values as an array but we cannot filter the methods from the object 
const keys = Object.keys(circle);
console.log(keys);

// To check the existence of a property in an object use 'in' operator
if ('radius' in circle)
    console.log('Circle has a radius')
