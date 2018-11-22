var button = document.querySelector("#pressMe3");

button.addEventListener("click", Timeout);

function Timeout () {
    setTimeout(() =>{
        alert("10 seconds passed");
    }, 10000);
};
