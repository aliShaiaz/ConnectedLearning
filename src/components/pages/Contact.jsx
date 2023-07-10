import React from "react";
import imageFiles from "../../files/_imageFiles";
const ContactPage = () => {
  const pageName = "Contact";

  return (
    <>
      <div className="contactPage">
        <div className="landingWallpaper">
          <div className="Background">
            <img
              className="darken"
              src={imageFiles["wallpaper_" + pageName.toLowerCase()]}
              alt="Handshake"
            />
          </div>
          <div className="Foreground">
            <span>Home</span>
            <div className="flipH">〱</div>
            <span className="pageTitle">{pageName}</span>
          </div>
        </div>

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
          <table className="feedbackForm">
            <tbody>
              <tr>
                <th>
                  <label htmlFor="name">Your Name</label>
                  <input
                    className="inp"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Type Your Name Here"
                  />
                </th>
                <th>
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="inp"
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Type your email here"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="Subject">Subject</label>
                  <input
                    className="inp"
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="Type your subject here"
                  />
                </th>
                <th>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="inp"
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Type your phone number here"
                  />
                </th>
              </tr>
              <tr>
                <th colSpan={2}>
                  <label id="lbl2" htmlFor="message">
                    Massage ....
                  </label>
                  <input
                    className="inp2"
                    name="message"
                    id="message"
                    type="text"
                    placeholder="Type your massage here ..........."
                  />
                </th>
              </tr>
            </tbody>
          </table>
          <div className="privacy">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">
              Accept <a href="">terms</a> and <a href="">privacy</a> policy.
            </label>
          </div>
          <button className="submitBtn" onClick={() => alert("Submitted!")}>
            Submit Message
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
