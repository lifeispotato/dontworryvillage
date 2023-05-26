import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/generalmember/ManageGeneralMemberSeeMore.css";
import "../../css/Manage.css";
const ManageGeneralMemberSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-general-member-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a href="#">삭제</a>
            <a href="#">수정하기</a>
          </div>
        </div>
        <div className="Manage-form manage-form-general-member-see-more">
          <span>기본정보</span>
          <div className="Manage-form-view-details">
            <span>이메일</span>
            <span>이메일</span>
          </div>
          <div className="Manage-form-view-details">
            <span>이름</span>
            <span>이름</span>
          </div>
          <div className="Manage-form-view-details">
            <span>생년월일</span>
            <span>YYMMDD - 1</span>
          </div>
          <div className="Manage-form-view-details">
            <span>성별</span>
            <span>남성</span>
          </div>
          <div className="Manage-form-view-details">
            <span>휴대폰 번호</span>
            <span>010-0000-0000</span>
          </div>
          <div className="Manage-form-view-details general-member-info-flex-start">
            <span>
              주민등록증
              <br />
              이미지
            </span>
            <div className="general-member-info-img-container">
              <img src="img\Rectangle.svg" />
              <div>
                <span>파일명.확장자명</span>
                <img src="img\download_black.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details">
            <span>별명</span>
            <span>별명</span>
          </div>
          <div className="Manage-form-view-details general-member-info-flex-start">
            <span>한 줄 자기소개</span>
            <span>
              한 줄 자기소개한 줄 자기소개한 줄 자기소개한 줄 자기소개한 줄
              자기소개한 줄 자기소개 한 줄 자기소개한 줄 자기소개한 줄
              자기소개한 줄 자기소개한 줄 자기소개한 줄 자기소개
            </span>
          </div>
          <div className="Manage-form-view-details general-member-agreement-checkbox">
            <span>마케팅 수신 동의</span>
            <div>
              <div className="seemore-consent-checkbox">
                <span>(필수) 괜찮아마을 이용약관 동의</span>
                <input type="checkbox" id="consent-personal-info"></input>
                <label htmlFor="consent-personal-info"></label>
              </div>
              <div className="seemore-consent-checkbox">
                <span>(필수) 개인정보수집 및 이용 동의</span>
                <input type="checkbox" id="consent-personal-info-third"></input>
                <label htmlFor="consent-personal-info-third"></label>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details general-member-agreement-checkbox">
            <span>알림 수신 동의</span>
            <div>
              <div className="seemore-consent-checkbox">
                <span>(선택) 이메일 및 SMS 마케팅정보수신 동의</span>
                <input type="checkbox" id="consent-personal-info"></input>
                <label htmlFor="consent-personal-info"></label>
              </div>
              <div className="seemore-consent-checkbox">
                <span>(선택) 서비스 알림 수신 동의</span>
                <input type="checkbox" id="consent-personal-info-third"></input>
                <label htmlFor="consent-personal-info-third"></label>
              </div>
              <div className="seemore-consent-checkbox">
                <span>(선택) 광고성 알림 수신 동의</span>
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

export default ManageGeneralMemberSeeMore;
