import React, { useState } from "react";
import "../../css/Manage.css";
import "../../css/permission/ManagePermissionsApproval.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const ManagePermissionsApproval = () => {
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
        <div className="Manage-form manage-form-approval">
          <p>수정하기</p>
          <div className="manage-permissions-approval">
            <p className="manage-permissions-approval-title">이메일</p>
            <input type="email" className="manage-permissions-approval-input" />
          </div>
          <div className="manage-permissions-approval">
            <p className="manage-permissions-approval-title">비밀번호</p>
            <input
              type="password"
              className="manage-permissions-approval-input"
            />
          </div>
          <div className="manage-permissions-approval">
            <p className="manage-permissions-approval-title">비밀번호 확인</p>
            <input
              type="password"
              className="manage-permissions-approval-input"
            />
          </div>
          <div className="manage-permissions-approval-radio">
            <span className="manage-permissions-approval-title">권한</span>
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
          <div className="manage-permissions-approval-radio manage-permissions-approval-access-right">
            <span className="manage-permissions-approval-title">접근 권한</span>
            <div className="manage-permissions-approval-access-right-container">
              <div className="user-management">
                <span>사용자 관리</span>
                <form>
                  <input type="radio" name="user-management" />
                  <label>일반회원 관리</label>
                  <input type="radio" name="user-management" />
                  <label>공간회원 관리</label>
                  <input type="radio" name="user-management" />
                  <label>공간 지원 관리</label>
                  <input type="radio" name="user-management" />
                  <label>탈퇴회원 관리</label>
                </form>
              </div>
              <div className="operation-management">
                <span>운영 관리</span>
                <form>
                  <input type="radio" name="operation-management" />
                  <label>모임 관리</label>
                  <input type="radio" name="operation-management" />
                  <label>프로그램 관리</label>
                  <input type="radio" name="operation-management" />
                  <label>마을리지 관리</label>
                </form>
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-approval">
            <button>승인하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ManagePermissionsApproval;
