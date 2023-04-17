// break keyword

// let ans = 0;
// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         break;
//     }
//     ans = ans + i;
// }
// console.log(ans);

// continue keyword

let ans = 0;
for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log(i);
        continue;
    }
    ans = ans + i;
}
console.log(ans);