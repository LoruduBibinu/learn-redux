import React from "react";
const TodosList = ({ todos, setTodos }) => {
  const onTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.title}
            <button
              className="btn-delete"
              onClick={() => onTodoDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodosList;