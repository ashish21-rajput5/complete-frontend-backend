// async  --- async function always return Promise & and complete async function will fetched by browser in background

// await  --- it will wait at the completion of fetching of --fetch(URL)--

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))

// async function getPosts() {
//     const response = await fetch(URL);
//     if (!response.ok) {
//         console.log("something went wrong !!!!");
//     }
//     const data = await response.json();
//     return data;
// }

// async at arrow function 
const getPosts = async() => {
    const response = await fetch(URL);
    if (!response.ok) {
        console.log("something went wrong !!!!");
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error => {
        console.log("Inside catch");
        console.log(error);
    })