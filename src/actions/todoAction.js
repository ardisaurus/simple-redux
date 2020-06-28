import { FETCH_TODO, ADD_TODO, DELETE_TODO, MARK_COMPLETE_TODO } from "./types";
import Axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodo = () => (dispatch) => {
  Axios.get(url + "?_limit=10").then((res) =>
    dispatch({
      type: FETCH_TODO,
      payload: res.data,
    })
  );
};
export const addTodo = (todoData) => (dispatch) => {
  Axios.post(url, {
    title: todoData.title,
    completed: false,
  }).then((res) =>
    dispatch({
      type: ADD_TODO,
      payload: res.data,
    })
  );
};
export const deleteTodo = (id) => (dispatch) => {
  Axios.delete(`${url}/${id}`).then(() =>
    dispatch({
      type: DELETE_TODO,
      payload: id,
    })
  );
};
export const markCompleteTodo = (id) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETE_TODO,
    payload: id,
  });
};
