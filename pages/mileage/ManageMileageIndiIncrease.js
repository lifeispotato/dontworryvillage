import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/mileage/ManageMileageIncrease.css";
const ManageMileageIndiIncrease = () => {
  return (
    <div className="Manage-container">
      <div className="Popup-container">
        <div className="Popup popup-mileage">
          <div className="Popup-title">
            <span>개별회원 마을리지 증감 설정</span>
          </div>
          <div className="mileage-popup-middle Manage-input-mileage">
            <div className="Manage-form-view-details">
              <span>회원 이메일</span>
              <input
                className="Manage-input-textarea Manage-input-mileage-email"
                type="email"
                required
                placeholder="회원명 검색 후 선택하세요"
              />
            </div>
            <div className="Manage-form-view-details">
              <span>포인트 내용</span>
              <input
                className="Manage-input-textarea Manage-input-mileage-point-detail"
                type="text"
                required
                placeholder="포인트 내용을 입력하세요"
              />
            </div>
            <div className="Manage-form-view-details">
              <span>포인트</span>
              <input
                className="Manage-input-textarea Manage-input-mileage-point"
                type="number"
                required
                placeholder="0"
              />
            </div>
            <div className="Manage-form-view-details Manage-form-view-details-explanation">
              <span>포인트 유효기간</span>
              <div>
                <div className="point-expiration-container">
                  <input
                    className="Manage-input-textarea Manage-input-mileage-point-expiration"
                    type="number"
                    required
                    placeholder="N"
                  />
                  <span>일</span>
                </div>
                <span className="point-expiration-annotation">
                  *0 입력시 유효기간이 적용되지 않습니다.
                </span>
              </div>
            </div>
          </div>
          <div className="mileage-popup-close-container">
            <div className="mileage-popup-close">
              <span>닫기</span>
            </div>
            <div className="mileage-popup-setup">
              <span>설정하기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMileageIndiIncrease;
