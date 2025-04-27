import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Filter from "./Filter"

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <ul className="list">
            {todos.map(todoItem => {
                return (
                    // <TodoItem key={todoItem.id} id={todoItem.id} title={todoItem.title} completed={todoItem.completed} />
                    <TodoItem key={todoItem.id} {...todoItem} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            })}
            <li id="filterBox"><Filter todos={todos}/></li>
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}