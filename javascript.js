//Calculator logic functions
function add(a,b) {
    display.innerHTML = (a+b).toFixed(2)
}

function substract(a,b) {
    display.innerHTML =  (a-b).toFixed(2)
}

function multiply(a,b) {
    display.innerHTML =  (a*b).toFixed(2)
}

function divide(a,b) {
    if(b == 0) {
        display.innerHTML = "ERROR"
    } else {
        display.innerHTML =  (a/b).toFixed(2)
    }
}

function operate(operator, a, b) {
    if (operator == "+") return add(a,b)
    if (operator == "-") return substract(a,b)
    if (operator == "*") return multiply(a,b)
    if (operator == "/") return divide(a,b)
}
//Erase display from screen
function clearDisplay() {
    display.innerText = "0"
    
}
function clearsecondDisplay () {
    second_display.innerText = ""
}
//I create variables and DOM
let x = ""
let y = ""
let operator = ""
let clear = document.querySelector("#clear")
let display = document.getElementById("third-display")
let second_display = document.querySelector("#second-display")
clear.addEventListener("click", function() {
    clearDisplay()
    clearsecondDisplay()
})
let digits = document.querySelectorAll("#digits") 
let operators = document.querySelectorAll("#operator")
let integer = document.querySelector("#integer")
let decimal = document.querySelector("#decimal")
let backspace = document.querySelector("#backspace")
let percent = document.querySelector("#percent")
//For each digit button and eventListener is added and the digit is displayed.
for (let i=0; i<digits.length; i++) {
    digits[i].addEventListener("click", function() {
        if (display.innerHTML == "0") {
            display.innerHTML = digits[i].innerHTML
        } else {
            display.innerHTML += digits[i].innerHTML
        }

    })
}
//For each operator button, the first input and the operator clicked  is saved
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", function() {
        x = display.innerHTML
        operator = operators[i].innerHTML
        let buffer = x + "" + operator
        second_display.innerHTML = buffer
        clearDisplay()
    })
}   
//Change positive value to negative
integer.addEventListener("click", function() {
    if (display.innerHTML == "0") {
        display.innerHTML = display.innerHTML
    }else if (display.innerHTML.includes('-')) {
        display.innerHTML = display.innerHTML.replace('-', "")
    }else {
        display.innerHTML = "-" + display.innerHTML
    } 
})
//Add decimal number
decimal.addEventListener("click", function() {
    if (display.innerHTML.includes('.')) {
        decimal.removeEventListener
    } else {
        display.innerHTML += "."
    }
})
//Backspace
backspace.addEventListener("click", function() {
    let lengthofdisplay = display.innerHTML.length
    if (lengthofdisplay ==1) {
        display.innerHTML = display.innerHTML.substring(0, lengthofdisplay-1)
        display.innerHTML =  "0"
    } else {
        display.innerHTML = display.innerHTML.substring(0, lengthofdisplay-1)
    }
})
//Percent
percent.addEventListener("click", function() {  
    let percent_int  =  parseFloat(display.innerHTML)/100
    display.innerHTML =  percent_int.toString()
})
//Evaluate the operation, operate and display value on screen
let evaluate = document.querySelector("#evaluate")
evaluate.addEventListener("click", function() {
    y = display.innerHTML
    second_display.innerHTML += y
    clearDisplay()
    operate(operator, parseFloat(x), parseFloat(y))
})






