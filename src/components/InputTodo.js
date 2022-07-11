import React, { Component } from 'react'

export class InputTodo extends Component {
  state = {
    title: '',
    count: 0,
    name: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.title.trim()) {
    this.props.addtodoprops(this.state.title)
    this.setState({
      title: ''
    })
    } else {
      alert("Please write something!")
    }
  }

  onChange = (e) => {
  this.setState({
    title: e.target.value
  })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit } id="form">
          <input type="text" placeholder="Add an item" value= {this.state.title} onChange= {this.onChange} name="first"/>
          
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default InputTodo
