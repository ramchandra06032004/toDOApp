import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Task from "../components/Task.jsx";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await fetch("http://localhost:6001");
    const result = await response.json();
    if (response.ok) {
      setTasks(result);
    } else {
      console.log(result.error);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:6001/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setTasks(tasks.filter((task) => task._id !== id));
    } else {
      const result = await response.json();
      console.log(result.error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="home">
      <div className="homeBox">
        <div className="Title">To Do List</div>
        <div className="buttons">
          <Link className="Link" to="/add">
            Add Task
          </Link>
        </div>
        <div className="taskContainer">
          {tasks.map((task, index) => {
            return <Task key={index} task={task} onDelete={handleDelete} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
