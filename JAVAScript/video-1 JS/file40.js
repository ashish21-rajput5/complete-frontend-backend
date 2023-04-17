// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// //const newArray = [...array1, ...array2];
// const newArray = [...
//     "abc"
// ];
// console.log(newArray);


// spread operator in Objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1: "valuechanged",
    key3: "value3",
    key4: "value4",
};

// const newObject = {...obj1, ...obj2, key21: "value21" };
// if both object have same key then that object we spread in last 
// it will print her object key
const newObject = {... "abc", ...["item1", "item2"] };
console.log(newObject);