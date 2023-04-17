// static methods and properties

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return "this is person class";
    }
    static desc = "Static property";

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(food) {
        return `${this.firstName} eat ${food}`;
    }
    isSuperCute() {
        return this.age <= 10;
    }
    isCute() {
        return true;
    }
}

const person1 = new person("Ashish ", "Rajput", 20);
console.log(person1.fullName)
console.log(person.classInfo());
console.log(person.desc);