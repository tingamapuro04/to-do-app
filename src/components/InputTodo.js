import React, { useState } from 'react'

const InputTodo = (props) => {
  const [title, setTitle] = useState('')

  const onChange =e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      props.addtodoprops(title);
      setTitle("")
    } else {
      alert("Write something")
    }
  }

  const kiche = {background: 'red', color: 'white', padding: '5px 10px'}

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit" style={kiche}>Submit</button>
    </form>
  )
}

export default InputTodo
