import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/program/ManageProgramAddRootAdmin.css";
const ManageProgramAddRootAdmin = () => {
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
            <span className="Manage-input-title">공간명*</span>
            <input
              className="Manage-input-textarea manage-form-program-add-input"
              type="text"
              placeholder="공간명 검색 후 선택하세요"
              required
            />
          </div>
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
          <div className="Manage-input-container Manage-input-container-program-seemore">
            <span className="Manage-input-title">상세설명*</span>
            <textarea placeholder="상세설명을 입력하세요"></textarea>
          </div>
          <div className="Manage-input-container Manage-input-container-program-seemore">
            <span className="Manage-input-title">이미지 (*최대 5장)</span>
            <div className="manage-form-program-add-input-img manage-form-program-add-input-img-root">
              <label htmlFor="img-input">
                <img src="img\img-registration.svg" />
                <span>이미지 등록</span>
              </label>
              <input
                id="img-input"
                className="Manage-input-textarea manage-form-program-add-input"
                type="file"
                required
              />
              <div>
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-program-add">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageProgramAddRootAdmin;
