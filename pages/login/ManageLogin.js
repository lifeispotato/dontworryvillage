import React, { useState } from "react";
import "../../css/login/ManageLogin.css";

const ManageLogin = () => {
  return (
    <div className="Manage-login-container">
      <div className="Manage-login">
        <h1>로그인</h1>
        <form className="Manage-login-form">
          <span>이메일</span>
          <input type="email" required placeholder="이메일을 입력해 주세요" />
          <span>비밀번호</span>
          <input
            type="password"
            required
            placeholder="비밀번호를 입력해 주세요"
          />
          <button className="Manage-login-form-login">로그인</button>
          <button className="Manage-login-form-registration">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default ManageLogin;
