import React, { useState } from "react";
import "./footer.css";
import logo from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import youtube from "../../images/icon-youtube.svg";

// update hook from form input
function handleNewsletterChange(formInput, sethook) {
  sethook(formInput);
}

// respond to a submit click
function handleSubmit(formValue) {
  alert("Thanks for signing up " + formValue + "!");
}

function Footer() {
  const [newsletterFormInput, setNewsletterFormInput] = useState("");

  return (
    <React.Fragment>
      <div className="footer">
        <div className="brand">
          <div className="brand-content">
            <div className="brand-logo">
              <img alt="" src={logo} />
            </div>
            <div className="brand-content logos">
              <img alt="facebook" src={facebook} />
              <img alt="youtube" src={youtube} />
              <img alt="twitter" src={twitter} />
              <img alt="pinterest" src={pinterest} />
              <img alt="instagram" src={instagram} />
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-nav">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
          </div>
          <div className="footer-links-community">
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="newsletter">
          <div className="newsletter-input">
            <input
              placeholder="Get the latest updates..."
              onChange={e => {
                handleNewsletterChange(e.target.value, setNewsletterFormInput);
              }}
            ></input>
          </div>
          <div className="newsletter-submit">
            <button onClick={() => handleSubmit(newsletterFormInput)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
