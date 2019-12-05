const express = require('express')
const uuid = require("uuid/v4")

const app = express()
app.use(express.json())

const PORT = 8000

const todos = []

app.get('/todo', (req, res) => {
    console.log(req.query)
    res.send(todos)
})

app.get('/todo/:_id', (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

app.post('/todo', (req, res) => {
    todos.push({...req.body, _id: uuid()})
    res.send(todos)
})

app.put('/todo/:_id', (req, res) => {
    const toUpdate = todos.find(todo => todo._id === req.params._id)
    const updateTodo = Object.assign(toUpdate, req.body)
    todos.splice(toUpdate, 1, updateTodo)
    res.send(todos)
})

app.delete('/todo/:_id', (req, res) => {
    const toDelete = todos.findIndex(todo => todo._id === req.params._id)
    todos.splice(toDelete, 1)
    res.send(todos)
})

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
    
})