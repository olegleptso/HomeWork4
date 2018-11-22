const parentPromise = new Promise((resolve, reject) => {
        resolve("Parent");
});

const childPromise = new Promise((resolve, reject) => {
        resolve("Child");
});

const button4 = document.querySelector("#pressMe4");

button4.addEventListener("click", ()=>{
    parentPromise
    .then(()=>{
        alert("Parent");
        return childPromise;
    })
    .then(()=>{
        alert("Child, Calling function from Task3");
        Timeout();
    })
    .catch(()=>{
        alert("Error");
    });
});