import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
