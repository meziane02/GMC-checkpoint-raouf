// src/components/TaskDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <h2>Task not found!</h2>;
  }

  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default TaskDetail;
