let num1 = 400
let num2 = 50
document.getElementById('num1-el').textContent = num1
document.getElementById("num2-el").textContent = num2
sumEL = document.getElementById("sum-el")

function add() {
    let addNum = num1 + num2
    sumEL.textContent = "Sum: " + addNum

}

function subtract() {
    let subNum = num1 - num2
    sumEL.textContent = "Sum: " + subNum

}

function divide() {
    let divideNum = num1 / num2
    sumEL.textContent = "Sum: " + divideNum
}

function multiply() {
    let multiNum = num1 * num2
    sumEL.textContent ="Sum: " + multiNum
}
