import {
  FETCH_TODO,
  ADD_TODO,
  DELETE_TODO,
  MARK_COMPLETE_TODO,
} from "../actions/types";

const initialState = {
  todoList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return {
        todoList: [...state.todoList, ...action.payload],
      };
    case ADD_TODO:
      return {
        todoList: [...state.todoList, { title: action.payload.title }],
      };
    case DELETE_TODO:
      return {
        todoList: [
          ...state.todoList.filter((item) => item.id !== action.payload.id),
        ],
      };
    case MARK_COMPLETE_TODO:
      return {
        todoList: [
          ...state.todoList.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
}

export default rootReducer;
