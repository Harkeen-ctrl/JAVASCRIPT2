// function inputBtn() {
//     console.log("button clicked")
// }
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


//localStorage.setItem("myLeads", "www.examplelead.com")
let akin = localStorage.getItem("myLeeds", )
console.log(akin)


const inputBtn = document.getElementById("input-btn") 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    rendeerLeads()
    
})
function rendeerLeads() {
    let listItems = ""
for(let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target = '_blank' href =' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
    listItems += 
    `<li>
    <a target = '_blank' href ='${myLeads[i]}'>${myLeads[i]}</a>
    </li>`
}
ulEl.innerHTML = listItems

}


// let openBox = document.getElementById("input-btn")

// openBox.addEventListener("click", function() {
//     console.log("i want to open the box")
// })

