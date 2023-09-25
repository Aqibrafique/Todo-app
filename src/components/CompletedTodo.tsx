
import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import Style from "./mystyle.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
type props = {
  todo: Todo;
  todos: Todo[];
  isDone:boolean;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const CompletedTodo = ({ todo, todos,isDone, setTodos }: props) => {
    
  };
