// function inside function

const app = () => {
    const myFunc = () => {
        console.log(" Namaste from myFunc ....");
    }
    const add = (num1, num2) => {
        return num1 + num2;
    }
    const mul = (num1, num2) => num1 * num2;

    console.log("inside function");

    console.log(add(5, 6));
    console.log(mul(5, 6));
}

app();