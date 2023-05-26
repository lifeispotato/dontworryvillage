import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/catagory/ManageCatagoryAdit.css";
import "../../css/Manage.css";
const ManageCatagoryAdit = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-catagory-adit">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>숨김</a>
          </div>
        </div>
        <div className="Manage-form manage-form-catagory-adit">
          <span>카테고리</span>
          <div className="Manage-input-container">
            <p className="Manage-input-title">카테고리</p>
            <input
              className="Manage-input-textarea manage-form-catagory-adit-input"
              type="text"
              placeholder="카테고리를 입력하세요"
            />
          </div>
          <div className="Manage-form-save manage-form-save-catagory-adit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageCatagoryAdit;
