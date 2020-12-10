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
  const [todosList, setTodosList] = useState([])
  const [todosListId, setTodosListId] = useState(0)

  const handleChange = (e) => setTodoText(e.target.value)
  const handleClick = (e) => {
    setTodosListId(todosListId + 1)
    setTodosList([...todosList, { id: todosListId, text: todoText }])

    setTodoText("")
    return e.preventDefault()
  }

  //削除機能
  const checked = (id) => {
    const filteredList = todosList.map(list => list.id === id ? { ...list, checked: !list.checked } : list)
    setTodosList(filteredList)
  }
  const removeItem = () => {
    const filteredList = todosList.filter(todo => !todo.checked)
    setTodosList(filteredList)
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
          {todosList.map(item => {
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
