import { createSlice } from "@reduxjs/toolkit";
const savedInitialTodo =
  JSON.parse(localStorage.getItem("Todo") || "null") || [];
export const TodoSlice = createSlice({
  name: "Todo",
  initialState: { todos: savedInitialTodo },
  reducers: {
    addToTodos: (state, action) => {
      const Todo = action.payload;
      state.todos.push(Todo);
      localStorage.setItem("Todo", JSON.stringify(state.todos));
    },
    removeFromTodos: (state, action) => {
      const Todo = action.payload;
      state.todos = state.todos.filter((t) => {
        return t.id !== Todo.id;
      });
      localStorage.setItem("Todo", JSON.stringify(state.todos));
    },
  },
});
export const { addToTodos, removeFromTodos } = TodoSlice.actions;
export default TodoSlice.reducer;
