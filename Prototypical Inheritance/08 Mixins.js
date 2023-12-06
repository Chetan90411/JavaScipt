// Mixin is used to do composition in order to avoid multilevel inheritance increasing the complexity of the code

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swimming');
    }
};

function Person() {

}

mixin(Person.prototype, canEat, canWalk, canSwim);

// assign(object to target, objectSource1, objectSource2) is used to copy the properties of any object to the target object
// Object.assign(Person.prototype, canEat, canWalk);  here we assign the properties to the constructor prototype

const person = new Person();
console.log(person);

function Goldfish() {

}

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);