const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");



function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("element not found");
            }
        }, time)
    })
};

changeText(heading1, "One", "red", 1000)
    .then(() => changeText(heading2, "Two", "green", 1000))
    .then(() => changeText(heading3, "Three", "blue", 1000))
    .then(() => changeText(heading4, "Four", "brown", 1000))
    .then(() => changeText(heading5, "Five", "gray", 1000))
    .then(() => changeText(heading6, "Six", "pink", 1000))
    .then(() => changeText(heading7, "Seven", "yellow", 1000))
    .then(() => changeText(heading8, "Eight", "purple", 1000))
    .catch((error) => {
        alert(error); // it will alert to us on browser if we miss any class
    })