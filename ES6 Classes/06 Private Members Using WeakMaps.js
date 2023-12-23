const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // here we use an arrow function as we want to prevent the this keyword to point to the window object which will give undefined in strict mode
        _move.set(this, () => {
            console.log('move', this);
        })
    }

    draw() {
        console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw');
    }
}

const c = new Circle(1);