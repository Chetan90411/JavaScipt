function Circle(radius) {
    let color = 'red'; // this is only a local variable and when we go out of scope this variable will die 
    // with this technique we can hide the details 
    
    // We want to only expose the essentials of this object like radius and draw()
    this.radius = radius;
    
    // we want to hide the implementation details from the user like defaultLocation and computeOptimumLocation as the user can change their values making the state of the object bad
    // this.defaultLocation = { x: 0, y: 0 };

    // as it is a local variable it will now not be accessable from the outside
    let defaultLocation = { x: 0, y: 0 };

    // One simple change in a method like introducing parameters in computeOptimumLocation() will require us to provide arguments in all of its call statements
    this.computeOptimumLocation = () => {
        //  ...
    };
    
    this.draw = () => {
        this.computeOptimumLocation()
        console.log('Draw');
    }
}

const circle = new Circle(10)
circle.draw();

// Hide the details and expose the essentials
