import React, { useState } from "react";
import "../../../App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../actions/todoAction";

export default function TodoForm() {
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: formValue }));
    setFormValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          value={formValue}
          style={{ flex: "10", padding: "5px" }}
        ></input>
        <input type="submit" value="Add" className="btn" style={{ flex: 1 }} />
      </form>
    </div>
  );
}
