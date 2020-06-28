import React from "react";
import "../../../App.css";
import { useDispatch } from "react-redux";
import { deleteTodo, markCompleteTodo } from "../../../actions/todoAction";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const getStyle = () => {
    return {
      background: item.completed ? "#a7ffeb" : "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: item.completed ? "line-through" : "none",
    };
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const handleMarkComplete = (id) => {
    dispatch(markCompleteTodo({ id }));
  };
  return (
    <div style={getStyle()}>
      <p>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            handleMarkComplete(item.id);
          }}
        />
        {item.title}
        <button onClick={() => handleDelete(item.id)} className="delete-btn">
          x
        </button>
      </p>
    </div>
  );
}
