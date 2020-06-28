import React, { useEffect } from "react";
import TodoTable from "../layout/todo/TodoTable";
import TodoForm from "../layout/todo/TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo } from "../../actions/todoAction";

export default function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <div>
      <TodoForm />
      <TodoTable todoList={todoList} />
    </div>
  );
}
