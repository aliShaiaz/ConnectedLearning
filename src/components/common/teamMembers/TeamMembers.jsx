import Member from "./Member";
import "./TeamMembers.css";
import React from "react";
import membersInfo from "../../../files/teamMemberData/teamMemberData";

const TeamMembers = () => {
  return (
    <>
      {membersInfo &&
        membersInfo.map((member) => (
          <Member key={member.id} memberInfo={member} />
        ))}
    </>
  );
};

export default TeamMembers;
