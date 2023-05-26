import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/banner/ManageBanner.css";
import "../../css/Manage.css";

const ManageBanner = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <span>배너 관리</span>
        <div className="Manage-form manage-form-banner">
          <span>슬라이드</span>
          <div className="ManageBanner-form-img">
            <div className="banner-input-img-container">
              <label htmlFor="img-input">
                <img src="img\img-registration.svg" />
                <span>이미지 등록</span>
              </label>
              <input
                id="img-input"
                className="Manage-input-textarea"
                type="file"
                required
              />
              <div className="banner-img-name-wrap">
                <span>파일명,확장자명</span>
                <img src="\img\image-cancel.svg" />
              </div>
            </div>
          </div>
          <span>*권장사이즈 720*720</span>
          <div className="ManageBanner-form-link">
            <span>연결링크</span>
            <input type="text" />
          </div>
          <div className="Manage-form-save Manage-form-save-banner">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageBanner;
