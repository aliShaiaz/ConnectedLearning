import React, { useState } from "react";
import "../css/Footer.css";
import imageFiles from "../files/_imageFiles";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="footer">
      <Link to="/">
        <img src={imageFiles.Logo} className="logo" alt="" />
      </Link>
      <img src={imageFiles.appStore} alt="" className="appStore" />
      <img src={imageFiles.playStore} alt="" className="playStore" />
      <img src={imageFiles.linkedInIcon} alt="" className="linkedInIcon" />
      <img src={imageFiles.twitterIcon} alt="" className="twitterIcon" />
      <img src={imageFiles.fbIcon} alt="" className="fbIcon" />

      <input
        type="text"
        name=""
        className="email"
        placeholder="     Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={() => alert('Email "' + email + '" Submitted!')}
        className="submitEmail"
      >
        Started
      </button>

      <a className="l1">
        Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.
      </a>
      <a href="" className="l2">
        Follow Us
      </a>
      <Link to="/about" className="l3">
        About Us
      </Link>
      <a href="" style={{ top: "181px" }} className="lcol2">
        Our Company
      </a>
      <a href="" style={{ top: "223px" }} className="lcol2">
        Career
      </a>
      <a href="" style={{ top: "265px" }} className="lcol2">
        Investor Relations
      </a>
      <a href="" style={{ top: "307px" }} className="lcol2">
        Social Impact
      </a>

      <a href="" className="l4">
        Resources
      </a>
      <a href="" style={{ top: "181px" }} className="lcol3">
        Contact
      </a>
      <a href="" style={{ top: "223px" }} className="lcol3">
        Give Feedback
      </a>
      <a href="" style={{ top: "265px" }} className="lcol3">
        Hello@example.com
      </a>

      <a href="" style={{ top: "181px" }} className="lcol4">
        Email US
      </a>
      <a href="" style={{ top: "223px" }} className="lcol4">
        RK@Oama.io
      </a>
      <a href="" style={{ top: "265px" }} className="lcol4">
        Bolomu All Rights Reserved, 2021
      </a>
    </div>
  );
};

export default Footer;
