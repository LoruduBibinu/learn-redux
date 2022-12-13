import React from "react";
const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const onTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const HandleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const HandleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.title}
            <div className="Buttons">
              <div>
                <button
                  className="btn-complete task-button"
                  onClick={() => HandleComplete(todo)}
                >
                  {" "}
                  <i>Complete</i>
                </button>
              </div>
              <button className="btn-edit" onClick={() => HandleEdit(todo)}>
                Edit Task
              </button>
              <button
                className="btn-delete"
                onClick={() => onTodoDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodosList;
