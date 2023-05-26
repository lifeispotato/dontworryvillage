import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/gathering/ManageGatheringNoticeAdit.css";
const ManageGatheringNoticeAdit = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-notice-adit">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-notice-see-more">
          <span>수정하기</span>
          <div className="Manage-input-container gathering-notice-adit-input-container">
            <span className="Manage-input-title">제목</span>
            <input
              className="Manage-input-textarea manage-form-gathering-notice-add-input"
              type="text"
              placeholder="프로그램명"
              required
            />
          </div>
          <div className="Manage-input-container gathering-notice-adit-input-container">
            <span className="Manage-input-title">내용</span>
            <textarea placeholder="내용을 입력하세요"></textarea>
          </div>
          <div className="Manage-input-container gathering-notice-adit-input-container">
            <span className="Manage-input-title">이미지</span>
            <div className="gathering-notice-add-input-img-container">
              <label htmlFor="img-input">
                <img src="img\img-registration.svg" />
                <span>이미지 등록</span>
              </label>
              <input
                id="img-input"
                className="Manage-input-textarea manage-form-gathering-notice-add-input"
                type="file"
                required
              />
              <div className="gathering-notice-img">
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
              <div>
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-input-container gathering-notice-adit-input-container">
            <span className="Manage-input-title">첨부파일</span>
            <div className="gathering-notice-add-input-file-container">
              <label htmlFor="file-input">
                <img src="img\file-upload-plus.svg" />
                <span>파일 등록</span>
              </label>
              <input
                id="file-input"
                className="Manage-input-textarea manage-form-gathering-notice-add-input"
                type="file"
                required
              />
              <div className="gathering-notice-filename">
                <span>파일명.확장자명</span>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="gathering-notice-filename">
                <span>파일명.확장자명</span>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="gathering-notice-filename">
                <span>파일명.확장자명</span>
                <img src="img\image-cancel.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-gathering-notice-add">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringNoticeAdit;
