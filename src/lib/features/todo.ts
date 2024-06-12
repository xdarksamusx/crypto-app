import { createAction, createReducer } from "@reduxjs/toolkit";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const todosReducer = createReducer(
  [
    { value: "todo 1", id: 1, isCompleted: false },
    { value: "todo 2", id: 2, isCompleted: true },
    { value: "todo 3", id: 3, isCompleted: true },
  ],
  (builder) => {
    builder
      .addCase(ADD_TODO, (state, action: any) => {
        // "mutate" the array by calling push()
        state.push(action.payload);
      })
      .addCase(TOGGLE_TODO, (state, action: any) => {
        const todo = state[action.payload.index];
        // "mutate" the object by overwriting a field
        todo.isCompleted = !todo.isCompleted;
      })
      .addCase(REMOVE_TODO, (state, action: any) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index);
      });
  }
);

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const removeTodo = createAction(REMOVE_TODO);

export default todosReducer;
