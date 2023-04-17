function Func() {
    let count = 0;
    return function() {
        if (count < 1) {
            console.log("Hi, you called me");
            count++;
        } else {
            console.log("mai already ek baar call ho chuka hu");
            count++;
        }
    }
}

const myFunc = Func();
myFunc();
myFunc();
const myFunc2 = Func();
myFunc();
myFunc();