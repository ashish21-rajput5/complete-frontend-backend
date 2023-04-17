// fetch  --  they will return Promise
// fetch keval tabhi reject hoga jab network related issues/errors aayege 

const URL = "https://jsonplaceholder.typicode.com/posts";

// const somethingAbout = fetch(URL);
// console.log(somethingAbout);

fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        // console.log("inside then block")
        // console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Something Went Wrong !!!!")
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("inside Catch Block")
        console.log(error);
    })