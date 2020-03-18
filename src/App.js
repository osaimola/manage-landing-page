import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Banner from "./components/banner/banner";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Intro />

        <p>hello world</p>
      </div>
      <Banner />
    </React.Fragment>
  );
}

export default App;
