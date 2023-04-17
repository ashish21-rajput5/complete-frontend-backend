const obj1 = {
    key1: 'Value1',
    key2: 'Value2'
}


// __proto__   => also known dander

// offical ecmaScript Documentation

// [[prototype]]

// __proto__ ,[[prototype]] // these both are same



// prototype  // that is different remain twos


const obj2 = Object.create(obj1); // {}
// there is more way create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

// console.log(obj2.__proto__);


// this is happening