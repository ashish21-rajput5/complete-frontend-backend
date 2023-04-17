// clone using Object.assign

// memory

const obj = {
    key1: "value1",
    key2: "value2",
};

// const obj2 = obj; // by doing this key3 add in both obj obj2

// const obj2 = {...obj };//by doing this key3 add only in obj not in obj2

const obj2 = Object.assign({}, obj); //this is one more method of cloning

obj.key3 = "value3";

console.log(obj);
console.log(obj2);