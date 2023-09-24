import React from "react";
import Style from "./mystyle.module.css";

interface props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

function AddTask({todo, setTodo, handleAdd}:props) {
  return (
    <>
      <div className={Style.appname}>
        <h1>TODO APP</h1>
      </div>
      <div>
        <form className={Style.formstyle} onSubmit={handleAdd}>
          <input
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
            type="input"
            className={Style.inputstyle}
            placeholder="Enter Task here"
          />
          <button className={Style.addbutton}>Add</button>
        </form>
      </div>
    </>
  );
}

export default AddTask;
