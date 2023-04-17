// function returning function


// they functions also called higher order functions
// function myFunc() {
//     function Namaste() {
//         return "Namaste Duniyaa ... ";
//     }
//     return Namaste;
// }
// or 
function myFunc() {

    return function() {
        return "Namaste Duniyaa ... ";
    };
}

const variable = myFunc();
console.log(variable());