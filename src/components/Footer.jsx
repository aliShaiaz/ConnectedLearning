import React from "react";
import "../css/Footer.css";
import imageFiles from "../files/_imageFiles";

const Footer = () => {
  return (
    <div className="footer">
      <img src={imageFiles.Logo} className="logo" alt="" />
      <img src={imageFiles.appStore} alt="" className="appStore" />
      <img src={imageFiles.playStore} alt="" className="playStore" />
      <img src={imageFiles.linkedInIcon} alt="" className="linkedInIcon" />
      <img src={imageFiles.twitterIcon} alt="" className="twitterIcon" />
      <img src={imageFiles.fbIcon} alt="" className="fbIcon" />

      <input
        type="text"
        name=""
        id=""
        className="email"
        placeholder="     Email Address"
      />
      <button className="submitEmail">Started</button>

      <a className="l1">
        Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.
      </a>
      <a className="l2">Follow Us</a>
      <a className="l3">About Us</a>
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

      <a className="l4">Resources</a>
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
