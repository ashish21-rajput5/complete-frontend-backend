// lexical scope
const myVar = "value1";

function myApp() {

    function myFunc() {
        // const myVar = "value47";
        console.log("inside myFunc", myVar);
    }

    console.log(myVar);
    myFunc();
}

myApp();