
let person = { name: 'Mosh' };

// console.log(person.toString());
// this method works with person object but is not visible when we display the methods of this object 

// console.log(Object.keys(person));
// for(let keys in person)
//     console.log(keys);

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString');
console.log(descriptor);

// when we see the descriptor of toString method we get to know that the enumerable protery in the constructor is set to false which does not allow toString

// Since we changed the writable property of the name property to false we cannot change its value now 
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

person.name = 'John';

console.log(person); // {name: 'Mosh'}

// if we set enumerable to false then name property will not be visible
console.log(Object.keys(person));

delete person.name;
// if we set configurable property to false we will not be able to delete the name property
console.log(person);