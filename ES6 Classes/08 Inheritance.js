
class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

// It is necessary to call the parent class constructor from the subclass contructor.

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 2);