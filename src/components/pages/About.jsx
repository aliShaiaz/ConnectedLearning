import React from "react";
import PageLandingWallpaper from "../common/PageLandingWallpaper";
import imageFiles from "../../files/_imageFiles";

import "../../css/AboutPage.css";
import TeamMembers from "../common/teamMembers/TeamMembers";

const AboutPage = () => {
  return (
    <>
      <PageLandingWallpaper pageName="About" />
      <div className="AboutPage">
        <div className="whyUs">
          <img src={imageFiles.whyUs} alt="" />
        </div>

        <img src={imageFiles.exp3} alt="" className="gExpIcon" />
        <p className="gExpTitle">Great Experience</p>
        <p className="gExpPara">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roopiece of classical Latin liter ature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin profes
        </p>

        <img src={imageFiles.dTeam} alt="" className="dTeamIcon" />
        <p className="dTeamTitle">Dedicated Team</p>
        <p className="dTeamPara">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roopiece of classical Latin liter ature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin profes
        </p>

        <img src={imageFiles.fPrice} alt="" className="fPriceIcon" />
        <p className="fPriceTitle">Flexible Pricing</p>
        <p className="fPricePara">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roopiece of classical Latin liter ature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin profes
        </p>

        <div className="mission">
          <img src={imageFiles.missionT} className="Text" alt="" />
          <img src={imageFiles.missionPhoto} className="Photo" alt="" />
        </div>

        <img src={imageFiles.tMember} alt="" className="tMember" />

        <div className="teamMembers">
          <TeamMembers />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
