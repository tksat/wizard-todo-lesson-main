import React from "react"

const Todo = ({ onChange, text, checked, ...props }) => {

  return (
    <>
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={onChange}
      />
      <label className={`todo-text ${checked && "onCheck"}`}>
        {text}
      </label>
    </>
  )
}

export default Todo
