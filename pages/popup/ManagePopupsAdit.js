import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/popup/ManagePopupsAdit.css";
import "../../css/Manage.css";

const ManagePopupsAdit = () => {
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
        <div className="Manage-form manage-form-popup-adit">
          <span>수정하기</span>
          <div className="Manage-input-container">
            <p className="Manage-input-title">제목</p>
            <input type="text" className="Manage-input-textarea" />
          </div>
          <div className="Manage-input-container">
            <p className="Manage-input-title">시작일</p>
            <input
              type="date"
              data-placeholder="0000-00-00"
              required
              aria-required="true"
              className="Manage-input-textarea"
            />
          </div>
          <div className="Manage-input-container">
            <p className="Manage-input-title">종료일</p>
            <input
              type="date"
              data-placeholder="0000-00-00"
              required
              aria-required="true"
              className="Manage-input-textarea"
            />
          </div>
          <div className="Manage-img-container">
            <p className="Manage-input-title">사진업로드</p>
            <div>
              <div className="notice-input-img-container">
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
                <div className="notice-img">
                  <img src="img\Rectangle.svg" />
                  <img src="img\image-cancel.svg" />
                </div>
              </div>
              <span>*권장사이즈 96*118</span>
            </div>
          </div>
          <div className="Manage-input-container">
            <p className="Manage-input-title">연결 링크</p>
            <input type="url" className="Manage-input-textarea" />
          </div>
          <div className="Manage-form-save Manage-form-save-banner">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagePopupsAdit;
