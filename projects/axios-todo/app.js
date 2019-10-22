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
        makeTodo(response.data)
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
    img.src = todo.imgUrl

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

createTodo();