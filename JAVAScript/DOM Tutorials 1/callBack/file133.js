// callBacks , callBack hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "brown";
// }, 2000);

// callBack Hell
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "blue";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Heading 3";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Heading 4";
//                 heading4.style.color = "green";
//                 setTimeout(() => {
//                     heading5.textContent = "Heading 5";
//                     heading5.style.color = "yellow";
//                     setTimeout(() => {
//                         heading6.textContent = "Heading 6";
//                         heading6.style.color = "pink";
//                         setTimeout(() => {
//                             heading7.textContent = "Heading 7";
//                             heading7.style.color = "orange";
//                             setTimeout(() => {
//                                 heading8.textContent = "Heading 8";
//                                 heading8.style.color = "brown";
//                             }, 2000)
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000);


// pyramid of doom

function changeText(element, text, color, time, onSuccessCallBack, onFailureCallBack) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallBack) {
                onSuccessCallBack();
            }
        } else {
            if (onFailureCallBack) {
                onFailureCallBack();
                // console.log("your element does not exist");
            }
        }
    }, time)
};

// pyramid of Doom
changeText(heading1, "one", "blue", 2000, () => {
    changeText(heading2, "two", "red", 2000, () => {
        changeText(heading3, "three", "yellow", 2000, () => {
            changeText(heading4, "four", "green", 2000, () => {
                changeText(heading5, "five", "purple", 2000, () => {
                    changeText(heading6, "six", "brown", 2000, () => {
                        changeText(heading7, "seven", "gray", 2000, () => {
                            changeText(heading8, "eight", "pink", 2000, () => {}, () => { console.log("your element does not exist") })
                        }, () => { console.log("your element does not exist") })
                    }, () => { console.log("your element does not exist") })
                }, () => { console.log("your element does not exist") })
            }, () => { console.log("your element does not exist") })
        }, () => { console.log("your element does not exist") })
    }, () => { console.log("your element does not exist") })
}, () => { console.log("your element does not exist") });