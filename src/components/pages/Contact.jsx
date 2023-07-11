import React from "react";
import imageFiles from "../../files/_imageFiles";
import PageLandingWallpaper from "../common/PageLandingWallpaper";

const ContactPage = () => {
  return (
    <div className="contactPage">
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
          <label style={{ top: "18px" }} className="col1 row1">
            Your Name
          </label>
          <label style={{ top: "18px" }} className="col2 row1">
            Email Address
          </label>
          <label style={{ top: "145px" }} className="col1 row2">
            Subject
          </label>
          <label style={{ top: "145px" }} className="col2 row2">
            Phone Number
          </label>
          <label style={{ top: "265px" }} className="specialInp">
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
            <a href="">terms</a>
            <p> and </p>
            <a href="">privacy policy</a>
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
    </div>
  );
};

export default ContactPage;
