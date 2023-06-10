//js for scrimba freecodecamp.   7hrs

let countEl = document.getElementById("count_el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}

//document.getElementById("count_el").innerText = 5
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
// let count = 5
// count = count + 1
// console.log(count);
// let bonusPoint = 50
// bonusPoint = bonusPoint + 20
// console.log(bonusPoint)
// bonusPoint = bonusPoint - 25
// console.log(bonusPoint) 
// // document.getElementById("increment-btn").innerText = "harkeen"
// function increment() {
//     console.log("the button was clicked")
// // }
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// // countdown()
// let lapscompleted = 0
// function incrementlap() {
//     lapscompleted = lapscompleted + 1
// }
// incrementlap()
// incrementlap()
// incrementlap()
// // console.log(lapscompleted)
// let countEL = document.getElementById("count_el")

// let userName = "per"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + userName + "!"
// console.log(messageToUser);
// let name = "AKINPADE OLUWAPELUMI"
// let greeting = "Hi, my name is "
// let myGreetings = greeting + name;
// console.log(myGreetings);
// console.log(4 + 5) // 9
// console.log("2" + "4") //24
// console.log("4" + 5)//45
// console.log(100 + "100") //100100

// let firstName = "OLUWAPELUMI "
// let lastName = "AKINPADE"
// let fullName = firstName + lastName
// console.log(fullName);

// let myPoints = 3
// function add3Points() {
//     myPoints += 3
// }
// add3Points()
// add3Points()
// add3Points()
// function remove1Point() {
//     myPoints -= 1
// }
// remove1Point()
// remove1Point()
// console.log(myPoints)

// console.log("my points; " + 5 + 9) // "my points; 59"
 





