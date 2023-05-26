import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/notice/ManageNoticeSeeMore.css";
import "../../css/Manage.css";
const ManageNoticeSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-notice-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>삭제</a>
            <a>수정하기</a>
          </div>
        </div>
        <div className="Manage-form manage-form-notice-see-more">
          <span>상세보기</span>
          <div className="Manage-form-view-details">
            <span>카테고리</span>
            <span>카테고리</span>
          </div>
          <div className="Manage-form-view-details">
            <span>제목</span>
            <span>제목제목제목제목제목제목제목제목</span>
          </div>
          <div className="Manage-form-view-details">
            <span>게시일자</span>
            <span>YYYY/MM/DD NN:NN:NN</span>
          </div>
          <div className="Manage-form-view-details">
            <span>게시 관리자 이메일</span>
            <span>이메일이메일이메일이메일</span>
          </div>
          <div className="Manage-form-view-details">
            <span>본문</span>
            <span>
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageNoticeSeeMore;
