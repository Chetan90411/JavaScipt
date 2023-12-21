
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// const circle = new Circle(1);
const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);

// Static methods are not a part of the object
// Static methods can only be accessed by the reference of the  Class and not the instance of a class
// We use static methods to create utility functions that are not tied to a particular object

class Math2 {
    static abs(value) {
        // ...
    }
}

Math2.abs();
