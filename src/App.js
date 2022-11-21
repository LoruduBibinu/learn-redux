import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import TodosList from "./components/List";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <Form
        input={input}
        setInput={setInput}
        todos= {todos}  
        setTodos={setTodos} 

        />
      </div>
      <div> <TodosList todos={todos} setTodos={setTodos}/> </div>
    </div>
  );
}
export default App;
