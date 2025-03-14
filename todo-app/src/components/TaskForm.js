// src/components/TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim()) {
      alert("Please fill out all fields");
      return;
    }
    addTask({ ...task, id: Date.now(), completed: false });
    setTask({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
