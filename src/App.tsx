import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id: Date.now(),todo, isDone: false } ])
      setTodo(''); 
    }
  };  

  return (
    <div className="App">
      <AddTask todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t)=>
      <li>{t.todo}</li>
      )}
    </div>
  );
};

export default App;
