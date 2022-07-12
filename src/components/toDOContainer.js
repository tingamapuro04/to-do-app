import React, { useState } from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList';
import { v4 as mobutu } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([])

  const handleChange = (id) => {
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

  const deleteItem = (id) => {
    setTodos([
      ...todos.filter(item => {
        return item.id !== id})
    ])
  }


  const addTodo = (title) => {
    const newTodo = {
      id: mobutu(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos)
  //     localStorage.setItem('list', temp)
  //   }
  // }



  // componentDidMount() {
  //   const loadedTodos = JSON.parse(localStorage.getItem('list'));
  //   if (loadedTodos) {
  //     this.setState({
  //       todos: loadedTodos
  //     })
  //   }
  // }



  return (
    <div>
      <Header />
      <InputTodo addtodoprops= {addTodo}/>
      <TodosList todos={todos} handleChange={handleChange} handleDelete= {deleteItem} />
    </div>
  )
}

export default TodoContainer
