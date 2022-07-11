import React, { Component } from 'react'

export class InputTodo extends Component {
  state = {
    title: ''
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add an item" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default InputTodo
