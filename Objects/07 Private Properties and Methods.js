// Closure property states that  a function inside another function can access the local variables of the outer function as well as its own local variables

// color , defaultLocation and computeOptimumLocation are in scope of Circle function and they also are in closure of draw() function.

// scope is temporary but closure is permanent so after the draw() function dies the color , defaultLocation and computeOptimumLocation continue to stay in the memory, they will preserve their state, as they are the closure of the draw() function

function Circle(radius) {
    let color = 'red'; // this is only a local variable and when we go out of scope this variable will die 
    // with this technique we can hide the details
    
    this.radius = radius;

    // as it is a local variable it will now not be accessable from the outside
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = (factor) => {
        //  ...
    };
    
    this.draw = () => {
        // as computeOptimumLocation() is no longer a method of this new object we can access it directly without using this keyword
        // this.computeOptimumLocation()
        computeOptimumLocation(0.1)
        // defaultLocation
        // this.radius

        console.log('Draw');
    };
}

const circle = new Circle(10)
circle.draw();
