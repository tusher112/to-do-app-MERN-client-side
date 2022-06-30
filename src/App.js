import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <h1>Hello from To-do-app</h1>

      <Routes>
        <Route path="/" element={<Todo />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
