import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import Style from "./mystyle.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
const alltasks = {
  display: "flex",
  justifyContent: "space-between",
  border: "solid 1px blue",
  width: "100%",
  marginTop: "20px",
  height: "30px",
  alignItems: "center",
  backgroundColor: "yellow",
  overflow: "auto",
  borderRadius: "10px",
};
type props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const CompletedTodo = ({ todo, todos, setTodos }: props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    // setDeleteTodo("deleted");
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: "deleted" } : todo
      )
    );
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  console.log(editTodo);
  return (
    <div>
      <form onSubmit={(e) => handleEdit(e, todo.id)} style={alltasks}>
        <div style={{ width: "70%" }}>
          {edit ? (
            <input
              style={{
                height: "25px",
                width: "90%",
                border: "none",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              autoFocus
              type="text"
              value={editTodo}
              onChange={(e) => seteditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <s>{todo.todo}</s>
          ) : (
            <span>{todo.todo}</span>
          )}
        </div>
        <div>
          <span
            className={Style.icons}
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span className={Style.icons} onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className={Style.icons} onClick={() => handleDone(todo.id)}>
            <MdDoneAll />
          </span>
        </div>
      </form>
    </div>
  );
};

export default CompletedTodo;
