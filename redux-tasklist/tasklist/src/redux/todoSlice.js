import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) task.description = newDescription;
    },
    deleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
