import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringScheduleFalse.css";
import "../../css/Manage.css";
const ManageGatheringScheduleFalse = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-schedule">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="gathering-schedule-menu-container">
          <a>기본정보 및 소개</a>
          <a>일정</a>
          <a>공지</a>
          <a>프로그램 리뷰</a>
          <a>문의</a>
        </div>
        <div className="Manage-form manage-form-gathering-schedule">
          <div>
            <span>일정</span>
            <a>일정관리</a>
          </div>
          <span>일정을 추가하세요</span>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringScheduleFalse;
