let list = document.getElementById("list")

axios.get("https://api.vschool.io/justin/todo").then((response) =>{
    const todos = response.data

    for(let i = 0; i < todos.length; i++){
        createTodo(todos[i])
    }
})

add.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: add.title.value,
        description: add.desc.value,
        price: add.price.value,
        imgUrl: add.imgUrl.value
    }

    axios.post("https://api.vschool.io/justin/todo", newTodo).then( response => {
        createTodo(response.data)
    })
})


function createTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("input")
    const deleteBtn = document.createElement("button")

    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl

    deleteBtn.textContent = "delete"
    
    deleteBtn.addEventListener("click", e =>{
        e.preventDefault();
        axios.delete("https://api.vschool.io/justin/todo/" + todo._id).then(response => {
            console.log(response)
            container.remove()
        })
    })

    checkbox.type = "checkbox"
    checkbox.checked = todo.completed

    checkbox.addEventListener("change", e => {
        axios.put("https://api.vschool.io/justin/todo/" + todo._id, { completed: e.target.checked }).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through": "none"
        })
    })

    if(todo.completed){
        h1.style.textDecoration = "line-through"
    }

    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkbox)
    container.appendChild(deleteBtn)
    console.log(container)
    list.appendChild(container)
}

createTodo();