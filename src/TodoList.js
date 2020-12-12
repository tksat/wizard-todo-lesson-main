import React, { useState } from "react"
import "./TodoList.css"
import Trash from "./component/Trash"
import InputText from "./component/InputText"

/*
コンポーネントの切り分けを行う
・ゴミ箱ボタン（表示アイコンを渡して表示させる）
・todo入力
・todo一覧
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
        <li className="tool" >
          <Trash onClick={removeItem} />
        </li>
      </ul>
      <div className="todo-list">
        <InputText type="text" value={todoText} onChange={(e) => handleChange(e)} onClick={handleClick} />
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
