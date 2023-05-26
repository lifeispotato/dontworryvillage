import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/marker/ManageMarker.css";
import "../../css/Manage.css";

const ManageMarker = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <span>마커 관리</span>
        <div className="Manage-form manage-form-marker">
          <span className="ManageMarker-form-title">맛집</span>
          <div className="ManageMarker-form-img">
            <div className="ManageMarker-form-basic">
              <span>기본 디자인</span>
              <div className="marker-input-img-container">
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
                <div className="marker-img">
                  <img src="img\Rectangle.svg" />
                  <img src="img\image-cancel.svg" />
                </div>
              </div>
              <span>*권장사이즈 64*72</span>
            </div>
            <div className="ManageMarker-form-select">
              <span>선택된 디자인</span>
              <div className="marker-input-img-container">
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
                <div className="marker-img">
                  <img src="img\Rectangle.svg" />
                  <img src="img\image-cancel.svg" />
                </div>
              </div>
              <span>*권장사이즈 96*118</span>
            </div>
          </div>
          <div className="Manage-form-save Manage-form-save-marker">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageMarker;
