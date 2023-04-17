// practics of class 

// parent class is also known as superclass

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(food) {
        return `${this.name} eat ${food}`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}
/*
const animal1 = new Animal("Tom", 1);
const animal2 = new Animal("ketty", 1);

console.log(animal1);
console.log(animal1.eat("roti"));
console.log(animal1.isCute());
console.log(animal1.isSuperCute());

console.log(animal2);
console.log(animal2.eat("bread"));

*/

// in javaScript it is called subclass
class Dog extends Animal {

}

// object/instance   both are same
const tommy = new Dog("tommy", 3);
console.log(tommy);