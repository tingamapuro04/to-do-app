import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodosList extends Component {
  render() {
    return (
      <div>
        <ul>
          { this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} handleChange= {this.props.handleChange} handleDeleteProps= {this.props.handleDelete} />
          ))  }
        </ul>
      </div>
    )
  }
}

export default TodosList
