let myArray = [];

// Arrays created by a array given constructor will have the same prototype
// Here myArray is an object which derives from arrayBase prototype which also derives from objectBase prototype
// this shows the multilevel inheritance myarray => arraBase => objectBase

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

const circle = new Circle(10)

// Objects created by a given constructor will have the same prototype

