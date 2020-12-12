import React from "react"
import "../TodoList.css"

const InputText = ({ type, value, onClick, onChange }) => {
  return (
    <form className="todos-header">
      <input className="todos-header-plus" type={type} value={value} onChange={onChange} />
      <input className="todos-header-plus" type="submit" value="＋" onClick={onClick} />
    </form>
  )
}

export default InputText
