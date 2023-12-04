// Inheritance


// Inheritance is a core concept of object oriented programming that enables an object to take on the properties and methods of another object
// this makes it easy to reuse code in different parts of an application

// Derived/Child/Sub class inherits the properties and Base/Parent/Super class is the class from which the properties and methods are inherited
// The child class has a Is A relationsip with its parent class - for eg  - Circle is a Shape

// Javascript does not have classes therefore Prototypical inheritance comes into picture
// So there are two types of inheritances Classical and Prototypical inhericance


// Prototypes and Prototypical Inheritance

// A prototype is just a parent of another object
// Prototype === Parent of another object

// ***** Every object has a Prototype (__proto__ property) except a root object *****  
// under this property there are several other properties like : constructor, hasOwnProperty etc...

// every object directly or indirectly inherits from a common  object which is a prototype let's call it objectBase 

// we can make any 2 empty objects and compare their prototypes
x = {};
y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // it will give true as output since they both have __proto__ prototype common

// console.log(x.__proto__ === y.__proto__);
// __proto__ is a deprecated property and should not be used in code but can be used in console to debug

// Whenever we try to access a property of an object and it is not in that object then it goes to the prototype of that object to find that property
//that is the javascript engine walks up the prototypical chain to find the target member(object or method or property)
