
// This statement is valid as Function Declarations as hoisted
sayHello();

// This statement is not valid as Function Expressions are not hoisted
// sayGoodbye();

// Function Declaration
function sayHello() {}

// Function Expression
const sayGoodbye = function() {};
// we use semicolans only with expressions



// Class Declaration is also not hoisted so the following is also not valid 
// const c = new Circle()

// Class Declaration
class Circle {
}

// Class Expression
const Square = class{
};
