import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, newDescription }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <p style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.description}
          </p>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? "Undo" : "Done"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
