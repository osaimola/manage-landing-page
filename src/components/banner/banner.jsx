import React from "react";
import "./banner.css";

function Banner() {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="banner-content">
          <h2>Simplify how your team works today.</h2>
          <div className="banner-content-cta">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
