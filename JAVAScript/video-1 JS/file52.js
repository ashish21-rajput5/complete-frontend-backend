// rest parameters (...parameters ex----   ...c - array declare down)

// function myFunc(a, b, ...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(3, 4, 5, 6, 7, 8, 9);

function addAll(a, b, ...c) {
    let addition = 0;
    for (let i = 0; i < c.length; i++) {
        addition = c[i] + addition;
    }
    return a + b + addition;
}
console.log(addAll(3, 4, 5, 6, 7, 8));