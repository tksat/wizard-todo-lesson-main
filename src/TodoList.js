import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import "./TodoList.css"

/*
・入力中のテキストを格納する
・todoリスト情報を格納する
*/

const TodoList = () => {
  const [todoText, setTodoText] = useState("")
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(0)

  const handleChange = (e) => setTodoText(e.target.value)
  const handleClick = (e) => {
    setTodoId(todoId + 1)
    setTodos([...todos, { id: todoId, text: todoText }])

    setTodoText("")
    return e.preventDefault()
  }

  //削除機能
  const checked = (id) => {
    const filteredList = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    setTodos(filteredList)
  }
  const removeItem = () => {
    const filteredList = todos.filter(todo => !todo.checked)
    setTodos(filteredList)
  }

  return (
    <div className="container">
      <h1 className="title">Example Todo</h1>
      <ul className="tools">
        <li className="tool">
          <div onClick={removeItem}>
            <FontAwesomeIcon className="delete-all-icon" icon={faTrashAlt} />
          </div>
        </li>
      </ul>
      <div className="todo-list">
        <form className="todos-header">
          <input className="todos-header-input" type="text" value={todoText} onChange={(e) => handleChange(e)} />
          <input className="todos-header-plus" type="submit" value="＋" onClick={(e) => handleClick(e)} />
        </form>
        <ul className="todos">
          {todos.map(item => {
            return (
              <li className="todo" key={item.id}>
                <input
                  className="todo-checkbox"
                  type="checkbox"
                  onChange={() => checked(item.id)}
                />
                <label className={"todo-text" + " " + (item.checked ? "onCheck" : " ")}>
                  {item.text}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
