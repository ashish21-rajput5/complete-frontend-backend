// practice

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const response = xhr.readyState;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }
/*
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    } else {
        console.log("SomeThing went wrong");
    }
}
xhr.onerror = () => {
    console.log("Network Error");
}
xhr.send();
*/



xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
        const data = JSON.parse(xhr.response);
        // console.log(data);
        const id = data[9].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2)
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    } else {
        console.log("SomeThing went wrong");
    }
}
xhr.onerror = () => {
    console.log("Network Error");
}
xhr.send();