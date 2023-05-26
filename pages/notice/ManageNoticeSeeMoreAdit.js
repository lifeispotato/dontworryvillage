import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/notice/ManageNoticeSeeMoreAdit.css";
import "../../css/Manage.css";
const ManageNoticeSeeMoreAdit = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back">
          <a>
            <img src="\img\chevron-left.svg" />
            <span>뒤로가기</span>
          </a>
        </div>
        <div className="Manage-form manage-form-notice-see-more-adit">
          <span>수정하기</span>
          <div className="Manage-input-container">
            <p className="Manage-input-title">제목</p>
            <input
              className="Manage-input-textarea manage-form-notice-see-more-input"
              type="text"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="Manage-input-container Manage-input-container-maintext">
            <p className="Manage-input-title">본문</p>
            <textarea className="Manage-input-textarea manage-form-notice-see-more-textarea"></textarea>
          </div>{" "}
          <div className="Manage-form-save manage-form-save-notice-see-more-adit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageNoticeSeeMoreAdit;
