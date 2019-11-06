import React, {Component} from "react"
import TodoList from "./TodoList"
import Form from "./Form"
import axios from "axios"

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    axios.get('https://api.vschool.io/justin/todo').then(res => {
      console.log(res)
      this.setState({todos: res.data.reverse()})
    })
  }

  handleDelete = (id) => {
    axios.delete('https://api.vschool.io/justin/todo/' + id).then(response => {
      console.log(response)
      this.setState((prevState)=>{
        const todos = prevState.todos.filter(todo => {
          return todo._id !== id
        })
        return { todos }
      })
    })
  }

  handleSubmit = (todo) => {
    axios.post('https://api.vschool.io/justin/todo', todo).then(res => {
      this.setState(prevState => {
         return {todos: [res.data, ...prevState.todos]}
      })
    })
  }

  handleSave = (updates, id) => {
    axios.put('https://api.vschool.io/justin/todo/' + id, updates).then(response => {
      this.setState(prevState => {
        const todos = [...prevState.todos]
        const index = todos.findIndex(todo => {
          return todo._id === id
        })

        todos[index] = response.data

        return {todos}
      })
    })
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
    console.log(this.state.todos)
    return (
      <div style={style}>
        <Form handleSubmit={this.handleSubmit}/>
        <TodoList 
        handleDelete={this.handleDelete} 
        handleSave={this.handleSave}
        todos={this.state.todos}/>
      </div>
    )
    
  }
}

export default App