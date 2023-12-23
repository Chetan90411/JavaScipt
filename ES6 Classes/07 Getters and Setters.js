
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    // the following implementation looks like a method but it is a property
    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0) throw new Error('invalid radius ');
        _radius.set(this, value);
    }
}

const c = new Circle(1);