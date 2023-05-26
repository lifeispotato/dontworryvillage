import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringCommentPopup.css";
import "../../css/Manage.css";
const ManageGatheringCommentPopup = () => {
  return (
    <div className="Manage-container">
      <div className="Popup-container">
        <div className="Popup">
          <div className="Popup-title gathering-comment-popup-title">
            <span>댓글 상세</span>
            <a>숨김</a>
          </div>
          <div className="gathering-comment-popup-middle">
            <div className="Manage-form-view-details">
              <span>게시일자</span>
              <span>20NN.NN.NN NN:NN:NN</span>
            </div>
            <div className="Manage-form-view-details">
              <span>작성자 별명</span>
              <span>게시자 별명</span>
            </div>
            <div className="Manage-form-view-details">
              <span>작성자 이메일</span>
              <span>이메일</span>
            </div>
            <div className="Manage-form-view-details">
              <span>분류</span>
              <span>댓글</span>
            </div>
            <div className="Manage-form-view-details Manage-form-view-details-textarea">
              <span>내용</span>
              <span>
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </span>
            </div>
          </div>
          <div className="gathering-comment-popup-close">
            <span>닫기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGatheringCommentPopup;
