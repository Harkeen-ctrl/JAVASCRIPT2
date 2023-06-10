// let cards = []
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardEl = document.querySelector(".card-el")


// let player = {
//     name: "per",
//     chip : 200
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chip
// function getRandomCard() {

//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1){
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstcard = getRandomCard()
//     let secondcard = getRandomCard()
//     cards = [firstcard, secondcard] 
//     sum = firstcard + secondcard
//     renderGame()
// }
// function renderGame() {
//     cardEl.textContent = "cards: " 

//     for( let i = 0; i < cards.length; i++ ){
//         cardEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card"
//     } else if (sum === 21) {
//         message = "wohoo! you've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message  = "you're out of the game"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }


// function newCard() {
//     if (isAlive === true && hasBlackjack === false) {
//         let Card = getRandomCard()
//         sum += Card
//         cards.push(Card)
//         renderGame()

//     }
  
 //}

// for ( let count = 10; count <= 20; count +=1 ) {
//     console.log(count)
// }
// let messages = [
//     "hey,how is it going","i'm great",
//       "thank you! how about you?",
//       "All good. Been working on my portfolio lately.",
//       "same here!","Great to hear",
//       "all nice"]
// for (let i = 0; i < messages.length; i +=1) {
//     console.log(messages[i])
// }

// let pade = [7, 2, 9]
// for (let i = 0; i < pade.length; i ++) {
//     console.log(pade[i])
// }

// math.radom() = 0.000 - 0.9999
// math.random()*8 = 0.000 - 7.9999
// math.floor(math.random()*8) = 0 - 7
// math.floor(math.random()*8) + 1 = 1 - 8

// let likeDocumentaries = false

// let person = { 
//     name: "Akinpade",
//     age : 21,
//     country: "Nigeria"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// let age = 75

// if ( age < 6) {
//     console.log("free")
// } else if (age <= 17) {
//     console.log("child Discount")
// } else if (age <= 26) {
//     console.log("Student Discount")
// } else if (age <= 66) {
//     console.log("full price")
// } else {
//     console.log("Senior citizen discount")
//     }
// console.log("The 5 largest countries in the world")
// let largestCountries = ["China","India","USA","Indonesia","Pakistan"]

// for( let i = 0;i< largestCountries.length; i++) {
//     console.log("- " + largestCountries[i])
// }

// let largestCountries = ["Tvaalu","India","USA","Indonesia","Monaco"]
// largestCountries.pop()
// largestCountries.push("Pakistan")
// largestCountries.shift()
// largestCountries.unshift("China")

// console.log(largestCountries)
// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("YES!!!")
// } else {
//     console.log("Damn!!!")
// }

let hands = ["rock","paper","scissor"]

function game() {
    let randomNumber = Math.floor(Math.random() * 3)
    return hands[randomNumber] 

}
console.log(game())