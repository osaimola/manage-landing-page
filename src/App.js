import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Review from "./components/review/review";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Intro />
      </div>
      <Review />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}

export default App;
