// Symbol function is called to generate a symbol
// A symbol is essentially a unique identifier
const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        // this.radius = radius;
        // this['radius'] = radius;
        this[_radius] = radius;
    }

    // computed property names [] for method names is an ES6 Feature
    [_draw]() {

    }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

// There are three approaches to make properties private

// 1. adding underscore as the prefix to the variable or property name like _radius. This is just a convention hence it is a terrible approach
// 2. using symbols 