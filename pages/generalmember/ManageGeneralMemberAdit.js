import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/generalmember/ManageGeneralMemberAdit.css";
const ManageGeneralMemberAdit = () => {
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
        <div className="Manage-form manage-form-general-member-adit">
          <span>수정하기</span>
          <div className="Manage-input-container Manage-input-container-general-member-adit">
            <span className="Manage-input-title">이메일</span>
            <input
              className="Manage-input-textarea manage-form-general-member-adit-input"
              type="email"
              placeholder="이메일"
              disabled
            />
          </div>
          <div className="Manage-input-container Manage-input-container-general-member-adit">
            <span className="Manage-input-title">이름*</span>
            <input
              className="Manage-input-textarea manage-form-general-member-adit-input"
              type="text"
              placeholder="이름"
              required
            />
          </div>
          <div className="Manage-input-container general-member-adit-dirth">
            <span className="Manage-input-title">생년월일*</span>
            <div>
              <input
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                }}
                className="Manage-input-textarea manage-form-general-member-adit-input"
                type="number"
                maxLength={6}
                required
              />
              <img src="img\dash.svg" />
              <div className="resident-number-second-wrap">
                <input
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  className="Manage-input-textarea manage-form-general-member-adit-input"
                  type="number"
                  maxLength={1}
                  required
                />
                <span>******</span>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details general-member-detail-gender">
            <span className="Manage-input-title">성별</span>
            <span>남성</span>
          </div>
          <div className="Manage-input-container Manage-input-container-general-member-adit">
            <span className="Manage-input-title">휴대폰 번호</span>
            <input
              className="Manage-input-textarea manage-form-general-member-adit-input"
              type="email"
              placeholder="010-0000-0000"
              disabled
            />
          </div>
          <div className="Manage-form-view-details general-member-info-flex-start">
            <span>
              주민등록증
              <br />
              이미지
            </span>
            <div className="general-member-img-container">
              <div>
                <label htmlFor="img-input">
                  <img src="img\img-registration.svg" />
                  <span>이미지 등록</span>
                </label>
                <input
                  id="img-input"
                  className="manage-form-general-member-add-input"
                  type="file"
                  required
                />
                <div className="manage-form-general-member-img-container">
                  <img src="img\Rectangle.svg" />
                  <img src="img\image-cancel.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-general-member-adit">
            <span className="Manage-input-title">별명*</span>
            <input
              className="Manage-input-textarea manage-form-general-member-adit-input"
              type="text"
              placeholder="별명"
              required
            />
          </div>
          <div className="Manage-input-container Manage-input-container-general-member-adit general-member-info-flex-start">
            <span className="Manage-input-title">한 줄 자기소개*</span>
            <textarea></textarea>
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
          <div className="Manage-form-save manage-form-save-general-member-adit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGeneralMemberAdit;
