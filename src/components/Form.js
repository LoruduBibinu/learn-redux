import React, {useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos,editTodo,setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
    }); 
    setTodos (newTodo);
  setEditTodo("");
};
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
      if(!editTodo){
    setTodos([...todos, {id:uuidv4(), title: input, completed: false}]);
    setInput("");}
    else {
      updateTodo(input,editTodo.id, editTodo.completed);
      setEditTodo(null);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="btn-add" type="submit">
        Add Task biatch
      </button>

    </form>
  );
};
export default Form;
