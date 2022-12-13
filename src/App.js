import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import TodosList from "./components/List";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo,setEditTodo] =useState(null);
  let count = 0;

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        {" "}
        <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>{" "}
      </div>
    </div>
  );
}
export default App;
