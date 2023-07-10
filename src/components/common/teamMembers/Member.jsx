import React from "react";

const Member = ({ memberInfo }) => {
  return (
    <div className="teamMember">
      <img className="photo" src={memberInfo.photo} alt="" />
      <div className="bkgrnd"></div>
      <p className="name">{memberInfo.name}</p>
      <p className="designation">{memberInfo.designation}</p>
    </div>
  );
};

export default Member;
