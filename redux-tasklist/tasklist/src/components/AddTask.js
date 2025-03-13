import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
