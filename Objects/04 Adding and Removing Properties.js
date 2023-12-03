function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('Draw');
    }
}

const circle = new Circle(10);
// Dot Notation
circle.location = { x: 1};

// Bracket Name Notation is used to access property whenever we have special characters or space in property name and we can use it when we dont know the name of the property
// circle['location'] = { x: 1};
const propertyName = 'location';
circle[propertyName] = { x: 1};

// whenever we need to send some object without providing some of its properties we use delete and can be done using either Dot or Bracket Notation
delete circle.location;
// delete circle['location'];
