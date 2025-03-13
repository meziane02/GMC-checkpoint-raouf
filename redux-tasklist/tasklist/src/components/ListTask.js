import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;
