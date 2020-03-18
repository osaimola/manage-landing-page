import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <p>hello world</p>
    </div>
  );
}

export default App;
