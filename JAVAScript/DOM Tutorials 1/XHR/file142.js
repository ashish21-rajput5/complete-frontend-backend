const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error("SomeThing went wrong"));
            }
        }
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        }
        xhr.send();
    })
}

// const something = sendRequest("GET", URL);
// console.log(something);

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data => {
        const id = data[7].id;
        // console.log(id);
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error => {
        console.log(error);
    })