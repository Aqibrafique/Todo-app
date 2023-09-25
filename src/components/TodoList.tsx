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
          {todos.map((todo) => (
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
      {todos.map((todo) => (
            <CompletedTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              isDone={todo.isDone}
              setTodos={setTodos}
            />
          ))}
      </div>
      </div>
    </>
  );
}

export default TodoList;
