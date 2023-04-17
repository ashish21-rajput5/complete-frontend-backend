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

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} is running ${this.speed} kmph`;
    }
}

// object/instance
const tommy = new Dog("tommy", 3, 40)
console.log(tommy.run());
// console.log(tommy.isCute());