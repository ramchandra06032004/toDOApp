import React, { useState } from "react";
import "../styles/Add.css";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, deadline };
    const response = await fetch("http://localhost:6001", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("addUser", addUser);

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log("User added successfully", result);
      setName("");
      setDeadline("");
      setError("");
      navigate("/");
    }
  };
  return (
    <div className="addPage">
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          className="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="date"
          className="date"
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          value={deadline}
        />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Add;
