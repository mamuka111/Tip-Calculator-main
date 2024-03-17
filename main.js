let insidepercents = document.querySelectorAll(".insidepercents");
let reset = document.querySelector(".reset");

let firstinput = document.querySelector(".firstinput");
let firstinputvalue = 0;
let percent = 0;
let answer;
let answer1;
let secondinputvalue = 0;
let secondInput = document.querySelector(".secondInput");

let custominput = document.querySelector(".custominput");

custominput.addEventListener("input", function () {
    percent = custominput.value;

});

custominput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        answer1 = firstinputvalue / secondinputvalue * percent / 100;
        answer1 = Math.ceil(answer1 * 100) / 100;
        rightoneup.innerHTML = "$" + answer1;
        answer = firstinputvalue / secondinputvalue + firstinputvalue / secondinputvalue * percent / 100;
        answer = Math.ceil(answer * 100) / 100;
        rightonedown.innerHTML = "$" + answer;
    }
  });

secondInput.addEventListener("input", function () {
    secondinputvalue = secondInput.value;

});

firstinput.addEventListener("input", function () {
    firstinputvalue = firstinput.value;

});



reset.addEventListener("click", function () {
    location.reload();
})


let cantbezero = document.querySelector(".cantbezero");
let rightoneup = document.querySelector(".rightoneup");
let rightonedown = document.querySelector(".rightonedown");

insidepercents.forEach(div => {
    div.addEventListener("click", function () {

        div.style.backgroundColor = "#9FE8DF";
        div.style.color = "#00474B";
        if (div.innerHTML === "5%") {
            percent = 5;
        } else if (div.innerHTML === "10%") {
            percent = 10;
        } else if (div.innerHTML === "15%") {
            percent = 15;
        } else if (div.innerHTML === "25%") {
            percent = 25;
        } else if (div.innerHTML === "50%") {
            percent = 50;
        }

        if (secondinputvalue == 0) {
            cantbezero.style.display = "block";
        } else {
            cantbezero.style.display = "none";
            answer1 = firstinputvalue / secondinputvalue * percent / 100;
            answer1 = Math.ceil(answer1 * 100) / 100;
            rightoneup.innerHTML = "$" + answer1;
            answer = firstinputvalue / secondinputvalue + firstinputvalue / secondinputvalue * percent / 100;
            answer = Math.ceil(answer * 100) / 100;
            rightonedown.innerHTML = "$" + answer;

        }


    })

});








