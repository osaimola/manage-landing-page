import React from "react";
import "./intro.css";
import statsimg from "../../images/illustration-intro.svg";

function Intro() {
  return (
    <React.Fragment>
      <div className="intro-container">
        <div className="intro-text">
          <h1>Bring everyone together to build better products</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="intro-text cta">
            <button>Get Started</button>
          </div>
        </div>
        <div className="intro-stats">
          <img alt="" src={statsimg} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
