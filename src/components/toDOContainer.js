import React, { Component } from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList'

export class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "let's try",
        completed: true
      },
      {
        id: 2,
        title: "let's try something",
        completed: false
      },
      {
        id: 3,
        title: "let's try something else",
        completed: true
      }
    ]
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




  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodosList todos={this.state.todos} handleChange={this.handleChange} handleDelete= {this.deleteItem} />
      </div>
    )
  }
}

export default TodoContainer
