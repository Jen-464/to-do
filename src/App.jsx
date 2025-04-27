import { useState, useEffect } from "react"
import NewTodoForm from "./Components/NewTodoForm"
import TodoList from "./Components/TodoList"
import "./style.scss"

export default function App() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todoItem => {
        if (todoItem.id === id) {
          return { ...todoItem, completed }
        }
        return todoItem
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todoItem => todoItem.id !== id)
    })
  }

  return (
    <>
      <header></header>
      <NewTodoForm onSubmit={addTodo} counter={counter} setCounter={setCounter} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}