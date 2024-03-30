import React from "react";
import "../styles/Task.css";

const Task = ({ task, onDelete }) => {
  const deadlineDate = new Date(task.deadline);
  const formattedDate = `${deadlineDate.getDate()}/${
    deadlineDate.getMonth() + 1
  }/${deadlineDate.getFullYear()}`;

  return (
    <div className="taskCard">
      <div className="taskName">{task.name}</div>
      <div className="deadline">{formattedDate}</div>
      <button className="deleteBtn" onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
