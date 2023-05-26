import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/spacesupport/ManageSpaceSupportSeeMore.css";
import "../../css/Manage.css";
const ManageSpaceSupportSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-spacesupport-seemore">
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
        <div className="Manage-form manage-form-spacesupport-see-more">
          <span>공간 지원 내용</span>
          <div className="Manage-form-view-details">
            <span>상태</span>
            <span>미처리</span>
          </div>
          <div className="Manage-form-view-details">
            <span>담당자 이름</span>
            <span>담당자 이름</span>
          </div>
          <div className="Manage-form-view-details">
            <span>담당자 전화번호</span>
            <span>00000000</span>
          </div>
          <div className="Manage-form-view-details">
            <span>위치</span>
            <span>위치위치위치위치위치위치위치</span>
          </div>
          <div className="Manage-form-view-details manage-flex-start">
            <span>댓글 내용</span>
            <span>
              제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용제휴내용
            </span>
          </div>
          <div className="Manage-form-view-details manage-flex-start">
            <span>약관 동의</span>
            <div>
              <div className="seemore-consent-checkbox">
                <span>개인정보 수집 및 이용 동의</span>
                <input type="checkbox" id="consent-personal-info"></input>
                <label htmlFor="consent-personal-info"></label>
              </div>
              <div className="seemore-consent-checkbox">
                <span>정보 제3자 제공동의</span>
                <input type="checkbox" id="consent-personal-info-third"></input>
                <label htmlFor="consent-personal-info-third"></label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSpaceSupportSeeMore;
