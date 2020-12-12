import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import "../TodoList.css"

const Trash = (props) => {
  return (
    <div onClick={props.onClick}>
      <FontAwesomeIcon className="delete-all-icon" icon={faTrashAlt} />
    </div>
  )
}

export default Trash
