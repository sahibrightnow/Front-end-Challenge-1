const matches = document.querySelectorAll(".number");
let selected; 


matches.forEach(element => {
    element.onclick = event => {
        selected = event.target.id;
    }
})

const submit = document.querySelector("button");
submit.addEventListener("click", event => {
    if (selected === undefined) {
        alert("Please select a number");
    }
    else {
        document.querySelector(".first").style.display = "none";
        document.querySelector(".feedback").style.display = "block";
        document.querySelector("span").innerHTML= selected;
    }
})

