let Value1 = '';
let value2 = "";
let number1 = 0;
let number2 = 0;
let operator = "";
let result = 0;
let display = document.getElementById("display");
let answer = document.getElementById("answer");
function displaynum(){
    display.innerText = Value1 + operator + value2;
};
function displayAnswer(){
    if(result.toString().length > 10){
        answer.innerText = result.toExponential(4);
    }
    else{
    answer.innerText = result;
    }
};
function getresult(){
    number1 = parseFloat(Value1);
    number2 = parseFloat(value2);
    if (operator === "+"){
        result = number1 + number2;
    } else if (operator === "-"){
        result = number1 - number2;
    } else if (operator === "*"){
        result = number1 * number2;
    } else if (operator === "/"){
        result = number1 / number2;
    } else if (operator === "%"){
        result = number1 % number2;
    }
    if(isNaN(result) || !isFinite(result)){
        result = "Error";
    }
    displayAnswer();
}
let one = document.getElementById("one");
one.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "1";
    } else {
        value2 += "1";
        getresult();
    }
    displaynum();
});
let two = document.getElementById("two");
two.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "2";
    } else {
        value2 += "2";
        getresult();
    }
    displaynum();
});
let three = document.getElementById("three");
three.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "3";
    } else {
        value2 += "3";
        getresult();
    }
    displaynum();
});
let four = document.getElementById("four");
four.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "4";
    } else {
        value2 += "4";
        getresult();
    }
    displaynum();
});
let five = document.getElementById("five");
five.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "5";
    } else {
        value2 += "5";
        getresult();
    }
    displaynum();
});
let six = document.getElementById("six");
six.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "6";
    } else {
        value2 += "6";
        getresult();
    }
    displaynum();
});
let seven = document.getElementById("seven");
seven.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "7";
    } else {
        value2 += "7";
        getresult();
    }
    displaynum();
});
let eight = document.getElementById("eight");
eight.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "8";
    } else {
        value2 += "8";
        getresult();
    }
    displaynum();
});
let nine = document.getElementById("nine");
nine.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "9";
    } else {
        value2 += "9";
        getresult();
    }
    displaynum();
});
let zero = document.getElementById("zero");
zero.addEventListener("click", function(){
    if (operator === ""){
        Value1 += "0";
    } else {
        value2 += "0";
        getresult();
    }
    displaynum();
});
let decimal = document.getElementById("decimal");
decimal.addEventListener("click", function(){
    if (operator === ""){
        if (!Value1.includes(".")){
            Value1 += ".";
        }
    } else {
        if (!value2.includes(".")){
            value2 += ".";
            getresult();
        }
    }
    displaynum();
});


let add = document.getElementById("add");
add.addEventListener("click", function(){
    operator = "+";
    answer.innerText = "";
    if(result !== 0){
    Value1 = result.toString();
    value2 = "";
    }
    displaynum();
});

let subtract = document.getElementById("subtract");
subtract.addEventListener("click", function(){
    operator = "-";
    answer.innerText = "";
    if(result !== 0){
    Value1 = result.toString();
    value2 = "";
    }
    displaynum();
});

let multiply = document.getElementById("multiply");
multiply.addEventListener("click", function(){
    operator = "*";
    answer.innerText = "";
    if(result !== 0){
    Value1 = result.toString();
    value2 = "";
    }
    displaynum();
});

let divide = document.getElementById("divide");
divide.addEventListener("click", function(){
    operator = "/";
    answer.innerText = "";
    if(result !== 0){
    Value1 = result.toString();
    value2 = "";
    }
    displaynum();
});

let modulus = document.getElementById("modulus");
modulus.addEventListener("click", function(){
    operator = "%";
    answer.innerText = "";
    if(result !== 0){
    Value1 = result.toString();
    value2 = "";
    }
    displaynum();
});

let equals = document.getElementById("equals");
equals.addEventListener("click", function(){
    Value1 = result.toString();
    value2 = "";
    operator = "";
    display.innerHTML=result;
    answer.innerText = "";
});

let backspace = document.getElementById("backspace");
backspace.addEventListener("click", function(){
    if (value2 !== ""){
        value2 = value2.slice(0, -1);
        getresult();
    } else if (operator !== ""){
        operator = "";
    } else if (Value1 !== ""){
        Value1 = Value1.slice(0, -1);
    }
    displaynum();
});

let clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    Value1 = "";
    value2 = "";
    operator = "";
    result = 0;
    display.innerText = "";
    answer.innerText = "";
});

let sign = document.getElementById("sign");
sign.addEventListener("click", function(){
    if (operator === ""){
        if (Value1.startsWith("-")){
            Value1 = Value1.slice(1);
        } else {
            Value1 = "-" + Value1;
        }
    } else {
        if (value2.startsWith("-")){
            value2 = value2.slice(1);
        } else {
            value2 = "-" + value2;
        }
        getresult();
    }
    displaynum();
});