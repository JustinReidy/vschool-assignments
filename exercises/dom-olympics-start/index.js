const title = document.createElement('h1')
const subHeaderContainer = document.createElement('div')
const name = document.createElement('span')
const theRest = document.createElement('span')
const header = document.getElementById("header")
const clear = document.getElementById('clearButton')
const messages = document.getElementsByClassName('messages')
const send = document.message


let newMessage = send.input.value

title.textContent = "Javascript Made This"
title.className = "header"

name.textContent = "Justin "
name.className = "name"

theRest.textContent = "wrote the JavaScript"
subHeaderContainer.className = "header"

subHeaderContainer.appendChild(name)
subHeaderContainer.appendChild(theRest)

header.appendChild(title)
header.appendChild(subHeaderContainer)

clear.addEventListener('click', function(e){
    for(let i = 0; i < messages.length; i++){
        messages[i].textContent = ""
    }
})

send.addEventListener('submit', function(e){
    event.preventDefault();
    
    let count = messages[0].children.length
    const push = document.createElement('div')
    push.textContent = newMessage
    
    if(count % 2 === 0){
        push.className = 'message left' 
    } else {
        push.className = 'message right' 
    }
    
    messages[0].appendChild(push)
})