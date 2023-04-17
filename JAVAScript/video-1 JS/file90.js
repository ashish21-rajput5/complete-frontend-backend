// getter and setters

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        // setName(firstName, lastName) {
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        // }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("A", "R", 20);
// console.log(person1.fullName());

// console.log(person1.fullName); 
// that you do only when you declare function as get


person1.fullName = "Ashish Rajput";
console.log(person1)





// console.log(person1.firstName);
// console.log(person1.lastName);

// // person1.setName("Akash", "Kumar");
// person1.firstName = "Akash";
// person1.lastName = "Kumar";

// console.log(person1.firstName);
// console.log(person1.lastName);