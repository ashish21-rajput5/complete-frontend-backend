// event object

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click", function(event) {
//     console.log(event);
// })

/*
when will we add eventListener at any element 
js Engine  ---- will execute our code line by line
browser ----  js Engine + extra feature
browser ----  js engine + webAPI

when browser will known he did perform event
that is listen by us

browser ---- 2 works
1.) it will give callBack function to js Engine
2.) with callBack Function browser also give information about event 
this information will give us in the form of object
*/



const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        // console.log(e.target); // these both are different means operation complete different
        console.log(e.currentTarget);
    })
}