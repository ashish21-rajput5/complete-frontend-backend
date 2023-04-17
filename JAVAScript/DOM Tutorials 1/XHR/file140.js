// jsonPlaceHolder doc link -- https://jsonplaceholder.typicode.com/
// MDN ReadyState doc -- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

/* HTTP states codes ---1. https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
2. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status  */

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// console.log(xhr);
// step1


// console.log(xhr.readyState);
// xhr.open("GET", URL);
/*
// console.log(xhr.readyState);
xhr.onreadystatechange = function() {
    // console.log(xhr.readyState);
    if (this.readyState === 4) {
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(typeof data);
    }
}*/

xhr.onload = function() {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();