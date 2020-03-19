import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Review from "./components/review/review";
import Content from "./components/content/content";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Intro />
      </div>
      <Content />
      <Review />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}

export default App;
