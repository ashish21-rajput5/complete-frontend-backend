// promise resolve
// promise chaining

// then method ---- always return promise method

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value => {
//     console.log(value);
// })


function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value; // it will also return promise function
        // return Promise.resolve(value); // also we can write this type
        // if we don't return any thing then it will return UNDEFINED
    })
    .then((value) => {
        console.log(value);
        value += "baaz";
        return value;
    })
    .then((value) => {
        console.log(value);
    })