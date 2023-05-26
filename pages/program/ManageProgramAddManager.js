import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/program/ManageProgramAddManager.css";
const ManageProgramAddManager = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-program-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-program-see-more">
          <span>추가하기</span>
          <div className="Manage-input-container Manage-input-container-program-seemore">
            <span className="Manage-input-title">프로그램명*</span>
            <input
              className="Manage-input-textarea manage-form-program-add-input"
              type="text"
              placeholder="프로그램명"
              required
            />
          </div>
          <div className="Manage-input-container Manage-input-container-program-seemore">
            <span className="Manage-input-title">소요시간*</span>
            <input
              className="Manage-input-textarea manage-form-program-add-input"
              type="time"
              required
            />
          </div>
          <div className="Manage-input-container Manage-input-container-program-seemore manage-flex-start">
            <span className="Manage-input-title">상세설명*</span>
            <textarea placeholder="상세설명을 입력하세요"></textarea>
          </div>
          <div className="Manage-input-container Manage-input-container-program-seemore-img manage-flex-start">
            <span className="Manage-input-title">이미지 (*최대 5장)</span>
            <div className="manage-form-program-add-input-img">
              <label htmlFor="img-input">
                <img src="\img\file-upload-plus.svg" />
                <span>파일등록</span>
              </label>
              <input
                id="img-input"
                className="Manage-input-textarea manage-form-program-add-input"
                type="file"
                required
              />
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-program-add">
            <button>등록하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageProgramAddManager;
