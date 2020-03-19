import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

const links = ["Pricing", "Products", "About Us", "Careers", "Community"];

function renderLinks() {
  return links.map(link => {
    return (
      <a href="#" key={link}>
        {link}
      </a>
    );
  });
}

// display or hide menu on click
function handleHamburgerClick(iconState, setIconState) {
  console.log("clicked");
  iconState === "hamburger" ? setIconState("close") : setIconState("hamburger");
}

// switch between hamburger and close icons
function renderMenuIcon(icon) {
  switch (icon) {
    case "hamburger":
      return hamburger;
    case "close":
      return close;
    default:
      return hamburger;
  }
}

function renderMenuLinks(iconState) {
  switch (iconState) {
    case "hamburger":
      return;
    case "close":
      return <div className="nav-floating-links">{renderLinks()}</div>;
    default:
      return;
  }
}

function Navbar() {
  const [iconState, setIconState] = useState("hamburger");

  return (
    <React.Fragment>
      <div className="nav">
        <img alt="manage" src={logo} />
        <div className="nav-links">{renderLinks()}</div>
        <button className="nav-get-started">Get Started</button>

        <img
          alt="toggle nav"
          src={renderMenuIcon(iconState)}
          className="nav-toggle"
          onClick={() => {
            handleHamburgerClick(iconState, setIconState);
          }}
        />
      </div>
      {renderMenuLinks(iconState)}
    </React.Fragment>
  );
}

export default Navbar;
