import React, { useState } from "react";
import "../../css/permission/ManagePermissionsAdit.css";
import "../../css/permission/ManagePermissionsInformation.css";
import "../../css/Manage.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const ManagePermissionsInformation = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <section className="Manage-contents">
          <span>기본 정보 관리</span>
          <div className="Manage-form manage-form-information">
            <p>기업 정보</p>
            <div className="Manage-input-container">
              <p className="Manage-input-title">대표이사</p>
              <input type="email" className="Manage-input-textarea" />
            </div>
            <div className="Manage-input-container">
              <p className="Manage-input-title">주소</p>
              <input type="password" className="Manage-input-textarea" />
            </div>
            <div className="Manage-input-container">
              <p className="Manage-input-title">대표전화</p>
              <input type="password" className="Manage-input-textarea" />
            </div>
            <div className="Manage-input-container">
              <p className="Manage-input-title">이메일</p>
              <input type="password" className="Manage-input-textarea" />
            </div>
            <div className="Manage-input-container">
              <p className="Manage-input-title">고객센터</p>
              <input type="password" className="Manage-input-textarea" />
            </div>
            <div className="Manage-input-container">
              <p className="Manage-input-title">사업자등록번호</p>
              <input type="password" className="Manage-input-textarea" />
            </div>
            <div className="Manage-input-container">
              <p className="Manage-input-title">통신판매신고번호</p>
              <input type="password" className="Manage-input-textarea" />
            </div>
            <div className="Manage-form-save manage-form-save-information">
              <button>저장하기</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ManagePermissionsInformation;
