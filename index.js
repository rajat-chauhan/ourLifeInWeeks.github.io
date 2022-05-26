let ageInput = document.querySelector("#textbox");
let answer = document.querySelector(".answer");
let count = document.querySelector("#count");

let calculate = document.getElementById("calcBtn");
calculate.addEventListener("click", display);

var age;
var mytimer;

function display(){
    age = ageInput.value.trim();

    if(age == ""){
        clearInterval(mytimer); 

        let alert1 = document.querySelector(".alert1");
        alert1.classList.add("active");

        mytimer = setInterval(function() {
            alert1.classList.remove("active");
        }, 3000);

        
    }
    else if (isNaN(age) == true){
        clearInterval(mytimer); 

        let alert2 = document.querySelector(".alert2");
        alert2.classList.add("active");

        mytimer = setInterval(function() {
            alert2.classList.remove("active");
        }, 3000);
    }
    else {
        let remaining_years = 90 - age;
        let remaining_weeks = 52*remaining_years;
        answer.classList.add("active");
        count.textContent = remaining_weeks;
        ageInput.value ="";
    }
}

//for reset button function
let reset = document.getElementById("rstBtn");
reset.addEventListener("click", refresh);

function refresh(){
    let rst = document.querySelector(".refresh");
    rst.click();
}
