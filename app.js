
var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");
var clr = document.getElementById("clear");
var del = document.getElementById("del");


clr.addEventListener("click", clearDisplay);
function clearDisplay() {
    display.value = "";
}


del.addEventListener("click", delDisplay);
function delDisplay() {
    display.value = display.value.slice(0, -1);
}


function numBtn(event) {
    display.value += event.target.getAttribute("data-value");
}


buttons.forEach(button => {
    if (button.id !== "clear" && button.id !== "del" && button.id !== "equals"){
    button.addEventListener("click", numBtn);
    }
});
var equal=document.getElementById("equals");
equal.addEventListener("click",displayAns);
function displayAns() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    
}