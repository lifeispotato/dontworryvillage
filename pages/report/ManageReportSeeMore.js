import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/report/ManageReportSeeMore.css";
import "../../css/Manage.css";
const ManageReportSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-report-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>삭제</a>
          </div>
        </div>
        <div className="Manage-form manage-form-report-see-more">
          <span>상세보기</span>
          <div className="Manage-form-view-details">
            <span>신고유형</span>
            <span>게시글</span>
          </div>
          <div className="Manage-form-view-details">
            <span>게시자 이메일</span>
            <span>이메일</span>
          </div>
          <div className="Manage-form-view-details">
            <span>게시자 별명</span>
            <span>게시자 별명</span>
          </div>
          <div className="Manage-form-view-details">
            <span>작성일시</span>
            <span>20NN.NN.NN NN:NN:NN</span>
          </div>
          <div className="Manage-form-view-details">
            <span>제목</span>
            <span>제목제목제목</span>
          </div>
          <div className="Manage-form-view-details manage-flex-start">
            <span>본문</span>
            <div className="Manage-form-view-details-textarea">
              <span>
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
              </span>
              <img src="img\Rectangle 4923 (1).png" />
              <img src="img\Rectangle 4923 (1).png" />
              <img src="img\Rectangle 4923 (1).png" />
              <img src="img\Rectangle 4923 (1).png" />
            </div>
          </div>
          <div className="Manage-form-view-details">
            <span>신고자 이메일</span>
            <span>OO@naver.com</span>
          </div>
          <div className="Manage-form-view-details">
            <span>신고일자</span>
            <span>YYYY/MM/DD</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-lastchild">
            <span>신고사유</span>
            <span>주제와 맞지 않는 글입니다</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageReportSeeMore;
