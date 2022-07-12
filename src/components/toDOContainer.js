import React, { Component } from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList';
import { v4 as mobutu } from "uuid";

export class TodoContainer extends Component {
  state = {
    todos: []
  }

  handleChange = (id) => {
    this.setState( prevState => ({
      todos: prevState.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      }),
    }))
  }

  deleteItem = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(item => {
          return item.id !== id
        })
      ]
    })
  }


  addTodo = (title) => {
    const newTodo = {
      id: mobutu(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem('list', temp)
    }
  }



  componentDidMount() {
    const loadedTodos = JSON.parse(localStorage.getItem('list'));
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }



  render() {
    return (
      <div>
        <Header />
        <InputTodo addtodoprops= {this.addTodo}/>
        <TodosList todos={this.state.todos} handleChange={this.handleChange} handleDelete= {this.deleteItem} />
      </div>
    )
  }
}

export default TodoContainer
