import React, { useState } from "react";
import "../../css/registration/ManageRegistration.css";

const ManageRegistration = () => {
  return (
    <div className="Manage-registration-container">
      <div className="Manage-registration">
        <h1>회원가입</h1>
        <form className="Manage-registration-form">
          <span>이름</span>
          <input type="text" required placeholder="이름을 입력해 주세요." />
          <span>이메일</span>
          <input type="email" required placeholder="이메일을 입력해 주세요." />
          <span>비밀번호</span>
          <input
            type="password"
            required
            placeholder="비밀번호를 입력해 주세요."
          />
          <div className="Manage-registration-form-pw-note">
            <span>
              조합: 영문 대문자/영문 소문자/숫자/특수문자 중 2가지 이상
              <br />
              글자수: 8자~16자
            </span>
          </div>
          <span>비밀번호 확인</span>
          <input
            type="password"
            required
            placeholder="비밀번호를 한 번 더 입력해 주세요."
          />
          <button className="Manage-registration-form-registration">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageRegistration;
