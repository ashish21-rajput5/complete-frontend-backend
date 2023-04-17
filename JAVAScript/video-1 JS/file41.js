// object destructring

const band = {
    bandName: "led zapplin",
    famoussong: "stairway to heaven",
    year: 1969,
    anotherFamousSong: "soch na saake"
};
// const bandName = band.bandName;
// const famoussong = band.famoussong;
// same by destructuring
// const { bandName, famoussong, year } = band;
// console.log(bandName, famoussong, year);

// // we can change name of variables
// const { bandName: value1, famoussong: value2 } = band;
// console.log(value1, value2);

let { bandName, famoussong, ...restVar } = band;
console.log(restVar);