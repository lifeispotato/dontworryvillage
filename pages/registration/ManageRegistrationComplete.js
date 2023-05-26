import React, { useState } from "react";
import "../../css/registration/ManageRegistrationComplete.css";

const ManageRegistrationComplete = () => {
  return (
    <div className="Manage-registration-container">
      <div className="Manage-registration-complete">
        <h1>가입완료</h1>
        <span>관리자 승인 후 로그인이 가능합니다.</span>
        <button className="Manage-registration-complete-button">
          로그인 페이지로
        </button>
      </div>
    </div>
  );
};

export default ManageRegistrationComplete;
