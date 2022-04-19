const log = console.log
let messages = []
const addBtn = document.querySelector("#button")
const inputEl = document.querySelector("#input-el")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
const deleteBtn = document.getElementById("delete-btn")
let checkBtn = document.getElementById("checkbox")
console.log(checkBtn)
let errorMessage = document.getElementById("errorMsg")

//Visibility of the message
checkBtn.addEventListener("click", function(){
    (inputEl.type==="text") ? inputEl.type="password":inputEl.type="text"
})


//[message1, message2, message3] or Null
let messagesToRender = JSON.parse(localStorage.getItem("messages"))
if(messagesToRender){
    messages = messagesToRender
    render()
}

addBtn.addEventListener("click", function(){
    //alert
    if(inputEl.value === ""){
        return alert("Please type a message")
    }
    messages.push(inputEl.value)
    inputEl.value = ""
    //Local storage has set the item
    localStorage.setItem("messages", JSON.stringify(messages))
    render()
})

function render(){
    let myMessages = ""
    for(let i = 0; i < messages.length; i++){
        myMessages += `<li>${messages[i]}</li>`
    }
    ulEl.innerHTML = myMessages
}
render()

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    messages = []
    render()
})














