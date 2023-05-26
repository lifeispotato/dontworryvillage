import React, { useState } from "react";
import "../../css/permission/ManagePermissionsAdit.css";
import "../../css/Manage.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const ManagePermissionsAdit = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back">
          <a>
            <img src="img\chevron-left.svg" />
            <span>뒤로가기</span>
          </a>
        </div>
        <div className="Manage-form manage-form-peradit">
          <p>수정하기</p>
          <div className="Manage-input-container">
            <p className="manage-permissions-adit-title">이메일</p>
            <input type="email" className="manage-permissions-adit-input" />
          </div>
          <div className="Manage-input-container">
            <p className="manage-permissions-adit-title">비밀번호</p>
            <input
              type="password"
              className="manage-permissions-adit-input"
              disabled
            />
          </div>
          <div className="Manage-input-container">
            <p className="manage-permissions-adit-title">비밀번호 확인</p>
            <input
              type="password"
              className="manage-permissions-adit-input"
              disabled
            />
          </div>
          <div className="manage-permissions-adit-radio">
            <span className="manage-permissions-adit-title">권한</span>
            <div>
              <form>
                <input type="radio" name="right" id="root" value="ROOT" />
                <label htmlFor="root">ROOT</label>
                <input type="radio" name="right" id="admin" value="ADMIN" />
                <label htmlFor="admin">ADMIN</label>
                <input type="radio" name="right" id="manager" value="MANAGER" />
                <label htmlFor="manager">MANAGER</label>
              </form>
              <span>
                *ROOT일 경우 아래 접근권한 설정에 관계없이 모든 메뉴 접근이
                가능합니다.
              </span>
            </div>
          </div>
          <div className="manage-permissions-adit-radio manage-permissions-adit-access-right">
            <span className="manage-permissions-adit-title">접근 권한</span>
            <div className="access-right-container">
              <div className="user-management">
                <span>사용자 관리</span>
                <form>
                  <input type="radio" id="general" name="user-management" />
                  <label htmlFor="general">일반회원 관리</label>
                  <input type="radio" id="space" name="user-management" />
                  <label htmlFor="space">공간회원 관리</label>
                  <input
                    type="radio"
                    id="space-support"
                    name="user-management"
                  />
                  <label htmlFor="space-support">공간 지원 관리</label>
                  <input type="radio" id="withdraw" name="user-management" />
                  <label htmlFor="withdraw">탈퇴회원 관리</label>
                </form>
              </div>
              <div className="operation-management">
                <span>운영 관리</span>
                <form>
                  <input
                    type="radio"
                    id="gathering"
                    name="operation-management"
                  />
                  <label htmlFor="gathering">모임 관리</label>
                  <input
                    type="radio"
                    id="program"
                    name="operation-management"
                  />
                  <label htmlFor="program">프로그램 관리</label>
                  <input
                    type="radio"
                    id="mileage"
                    name="operation-management"
                  />
                  <label htmlFor="mileage">마을리지 관리</label>
                </form>
              </div>
              <div className="community-management">
                <span>커뮤니티 관리</span>
                <form>
                  <input
                    type="radio"
                    id="community"
                    name="community-management"
                  />
                  <label htmlFor="community">커뮤니티 관리</label>
                  <input type="radio" id="report" name="community-management" />
                  <label htmlFor="report">신고 관리</label>
                </form>
              </div>
              <div className="service-management">
                <span>서비스 관리</span>
                <form className="service-manage-form">
                  <input type="radio" name="service-management" />
                  <label>알림 관리</label>
                  <input type="radio" name="service-management" />
                  <label>공지사항 관리</label>
                  <input type="radio" name="service-management" />
                  <label>FAQ 관리</label>
                  <input type="radio" name="service-management" />
                  <label>1:1문의 관리</label>
                  <input type="radio" name="service-management" />
                  <label>팝업 관리</label>
                  <input type="radio" name="service-management" />
                  <label>약관 관리</label>
                  <input type="radio" name="service-management" />
                  <label>배너 관리</label>
                  <input type="radio" name="service-management" />
                  <label>오픈소스 관리</label>
                </form>
              </div>
              <div>
                <span>환경설정</span>
                <form>
                  <input type="radio" id="general-right" name="right" />
                  <label htmlFor="general-right">기본정보 관리</label>
                  <input type="radio" id="manager-right" name="right" />
                  <label htmlFor="manager-right">관리자 권한 관리</label>
                </form>
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-peradit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagePermissionsAdit;
