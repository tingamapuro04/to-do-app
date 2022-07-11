import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <li> <input type= "checkbox" checked= {this.props.todo.completed} onChange= {() => this.props.handleChange(this.props.todo.id)} /> {this.props.todo.title} <button onClick={() => this.props.handleDeleteProps(this.props.todo.id)}>DELETE</button></li>
      </div>
    )
  }
}

export default TodoItem

