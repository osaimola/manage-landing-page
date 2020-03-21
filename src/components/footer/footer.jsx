import React, { useState } from "react";
import "./footer.css";
import logo from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import youtube from "../../images/icon-youtube.svg";

// update hook from form input
function handleNewsletterChange(formInput, setInputHook, setSignUpHook) {
  setInputHook(formInput);
  setSignUpHook("");
}

// confirm if email is valid on click
function handleSubmit(formValue, setHook) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (formValue.match(emailRegex)) setHook("success");
  else setHook("failed");
}

function Footer() {
  const [newsletterFormInput, setNewsletterFormInput] = useState("");
  const [signUpStatus, setSignUpStatus] = useState("");

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
          <div className={"newsletter-input " + signUpStatus}>
            <input
              name="email"
              placeholder="Get the latest updates..."
              onChange={e => {
                handleNewsletterChange(
                  e.target.value,
                  setNewsletterFormInput,
                  setSignUpStatus
                );
              }}
            ></input>
          </div>
          <div className="newsletter-submit">
            <button
              onClick={() => handleSubmit(newsletterFormInput, setSignUpStatus)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
