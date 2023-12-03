// Value Types are primitives such as Number, String, Boolean, Symbol, Undefined and null

// Reference Types are objects such as Object, Function and Array

let x = 10;
let y = x;

x = 20;
// y is still 10 as it is a Value Type

let a = { value: 10 };
let b = a;

a.value = 20
// changing a.value will also change b.value as they both are reference types the both point to the same object in the memory 

// Primitives are copied by their Value ****
// Objects are copied by their reference ****

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // it will print 10 as number is a value type and its value will be copied in the 

let obj = { value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // it will print 11 as obj is a reference type and its reference will be copied in the obj parameter 
