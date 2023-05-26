import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/generalmember/ManageGeneralMemberMessage.css";
const ManageGeneralMemberMessage = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-general-member-adit">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-message-adit">
          <span>문자 보내기</span>
          <div className="Manage-input-container Manage-input-container-general-member-message general-member-info-flex-start">
            <span className="Manage-input-title">받는이</span>
            <div className="recipient-list">
              <div className="recipient-detail">
                <div>
                  <span>이름</span>
                  <span>(01000000000)</span>
                </div>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="recipient-detail">
                <div>
                  <span>이름</span>
                  <span>(01000000000)</span>
                </div>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="recipient-detail">
                <div>
                  <span>이름</span>
                  <span>(01000000000)</span>
                </div>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="recipient-detail">
                <div>
                  <span>이름</span>
                  <span>(01000000000)</span>
                </div>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="recipient-detail">
                <div>
                  <span>이름</span>
                  <span>(01000000000)</span>
                </div>
                <img src="img\image-cancel.svg" />
              </div>
              <div className="recipient-detail">
                <div>
                  <span>이름</span>
                  <span>(01000000000)</span>
                </div>
                <img src="img\image-cancel.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-general-member-message">
            <span className="Manage-input-title">제목</span>
            <input
              className="Manage-input-textarea manage-form-general-member-adit-input"
              type="text"
              placeholder="제목"
              required
            />
          </div>
          <div className="Manage-input-container Manage-input-container-general-member-message general-member-info-flex-start">
            <span className="Manage-input-title">내용</span>
            <textarea></textarea>
          </div>
          <div className="Manage-form-save manage-form-save-general-member-adit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGeneralMemberMessage;
