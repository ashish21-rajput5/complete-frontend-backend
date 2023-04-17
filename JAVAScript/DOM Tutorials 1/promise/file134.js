// promise 
/* (it is unknown but in future we know )(it is browser feature not javaScript)
at run time they will add in -- MicroTask Queue -- or after then all functions store in microtask queue   */

/* if we have both microTask Queue & callBack Queue then priority of MicroTask Queue is higher 
then CallBack Queue   */


console.log("script start");


const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const FriedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    } else {
        reject("Couldn't do it"); // we can pass any thing inside resolve & reject(array,object,etc) 
    }
})

// produce



// consume 
// how to consume
/*
FriedRicePromise.then(
    // when promise is resolve
    (myFriedRice) => {
        console.log("lets eat", myFriedRice);
    },
    // when promise is reject
    (error) => {
        console.log(error);
    }
)  */

FriedRicePromise.then(
        // when promise is resolve
        (myFriedRice) => {
            console.log("lets eat", myFriedRice);
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )
    /* if we have both microTask Queue & callBack Queue then priority of MicroTask Queue is higher 
    then CallBack Queue   */
setTimeout(() => {
    console.log("That is setTimeOut function");
})

for (let i = 0; i < 50; i++) {
    console.log(Math.floor(Math.random() * 151));
}

console.log("script end");