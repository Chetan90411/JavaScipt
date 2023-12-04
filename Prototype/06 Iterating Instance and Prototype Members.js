

function Circle(radius) {
    // Instance Members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

const c1 = new Circle(1);

// Prototype Member
Circle.prototype.draw = function () {
    console.log('draw');
}

// Object.keys() only returns instance members 
console.log(Object.keys(c1));

// for in loop returns all the members (instance + prototype)
for (let key in c1) console.log(key)

// Instance members or Property are also called OwnProperty
console.log(c1.hasOwnProperty('radius')); // will display true as radius is an instance property
console.log(c1.hasOwnProperty('draw')); // will display false as draw is a prototype property