import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { CompletedTodo } from "./CompletedTodo";
const alltaskheading = {
  width: "30%",
  height: "50px",
  margin: "20px",
  display: "flex",
  justifyContent: "center",
  color: "yellow",
  fontSize: "40px",
  fontFamily:"cursive"
};
const alltaskbox = {
  border: "solid 1px yellow",
  width: "30%",
  height: "500px",
  overflow: "auto",
  margin: "20px",
  display: "flex",
  justifyContent: "center",
}
type props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoList({ todos, setTodos }: props) {
  console.log(todos);
  return (
    <>
    <div style={{display:"flex"}}>
      <div style={alltaskheading}>
        ALL TASKS
      </div>
      <div style={alltaskheading}>
        COMPLETED TASKS
      </div>
      </div>
      <div style={{display:"flex"}}>
      <div style={alltaskbox}>
        <div style={{ width: "90%" }}>
          {todos.filter((a)=>{if(a.isDone==false){return a}}).map((todo) => (

            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
    
      </div>
      
      <div style={alltaskbox}>
        <div style={{ width: "90%" }}>
          {todos.filter((a)=>{if(a.isDone==true){return a}}).map((todo) => (

            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
    
      </div>
      <div style={alltaskbox}>
        <div style={{ width: "90%" }}>
        {todos.filter((a)=>{a.isDone=="deleted" && {return: a}}).map((todo) => (

            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              
            />
          ))}
        </div>
    
      </div>
      </div>
    </>
  );
}

export default TodoList;
