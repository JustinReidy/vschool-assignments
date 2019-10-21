let list = document.getElementById("list")

axios.get("https://api.vschool.io/justin/todo").then((response) =>{
    const todos = response.data

    for(let i = 0; i < todos.length; i++){
        createTodo(todos[i])
    }
})

document.add.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: ""
    }

    axios.post(url, newTodo).then((response) => {
        
    })
})


function createTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("input")

    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.img

    checkbox.type = "checkbox"
    checkbox.checked = todo.completed

    if(todo.completed){
        h1.style.textDecoration = "line-through"
    }

    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkbox)
    console.log(container)
    list.appendChild(container)
}

createTodo({title: "get to the store"});