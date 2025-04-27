import { useState } from "react"
import PropTypes from 'prop-types';
import CircleCheck from "./CircleCheck";

export default function NewTodoForm({ onSubmit, counter, setCounter }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(newItem)
    setNewItem("")
    setCounter(counter + 1)
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="title">
        <h1>TODO</h1>
        <img className="modeSwitch" src="assets/icon-sun.svg" alt="icon of a sun" />
      </div>
      <div className="form-row">
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" placeholder="Create a new todo..." />
        <CircleCheck />
      </div>
    </form>
  )
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  counter: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired
};