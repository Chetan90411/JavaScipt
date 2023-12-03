function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = () => {
        return defaultLocation;
    };

    this.draw = () => {
        console.log('Draw');
    };

    // Object.defineProperty() function is used to define property for the object we want to add a property in this case we use this keyword as object as we want it to point to the object which called the method
    // first argument is object
    // second argument is name of the property 
    // third argument is a object containing a get method
    Object.defineProperty(this, 'defaultLocation', {
        // this is a get method
        get: function() {
            return defaultLocation;
        },
        // this is a set method
        set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid Location.');
            
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10)
circle.draw();
// this is how we can use set method
circle.defaultLocation = { x: 2, y: 3};
// this is how we can use get method
console.log(circle.defaultLocation)
