import React from "react";
import imageFiles from "../../files/_imageFiles";
import PageLandingWallpaper from "../common/PageLandingWallpaper";

import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contactPage"
    >
      <div className="section_wallpaper">
        <PageLandingWallpaper pageName="Contact" />
      </div>

      <div className="section_contact">
        <PageLandingWallpaper pageName="Contact" />

        <div className="contactBlock">
          <img src={imageFiles.Contact_Us} alt="Contact_Us" />
        </div>

        <div className="contactUsImage">
          <img src={imageFiles.Contact_Us_Image} alt="Contact_Us_Image" />
        </div>
        <div className="getInTouch">
          <img src={imageFiles.GetInTouch} alt="GetInTouch" />
        </div>
        <div className="AnyQues">
          <img src={imageFiles.AnyQues} alt="AnyQues" />
        </div>
        <div className="feedback">
          <label style={{ top: "38px" }} className="col1 row1">
            Your Name
          </label>
          <label style={{ top: "38px" }} className="col2 row1">
            Email Address
          </label>
          <label style={{ top: "165px" }} className="col1 row2">
            Subject
          </label>
          <label style={{ top: "165px" }} className="col2 row2">
            Phone Number
          </label>
          <label style={{ top: "285px" }} className="specialInp">
            Massage ....
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="col1 row1 genInp"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            className="col2 row1 genInp"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="col1 row2 genInp"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            className="col2 row2 genInp"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Massage ...."
            className="specialInp"
          />
          <input type="checkbox" name="" id="" className="check" />
          <div className="terms">
            <p>Accept </p>
            <a href="#">terms</a>
            <p> and </p>
            <a href="#">privacy policy</a>
            <p>.</p>
          </div>
          <img
            src={imageFiles.btnSubmit}
            alt=""
            className="btnSubmit"
            onClick={() => alert("Submitted!")}
          />
        </div>
      </div>
      {/* */}
    </motion.div>
  );
};

export default ContactPage;
