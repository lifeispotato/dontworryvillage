import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/mileage/ManageMileageSeeMore.css";
import "../../css/Manage.css";
const ManageMileageSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-mileage-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>이 회원의 포인트내역 보기</a>
          </div>
        </div>
        <div className="Manage-form manage-form-mileage-see-more">
          <span>상세보기</span>
          <div className="Manage-form-view-details">
            <span>게시자 이메일</span>
            <span>이메일</span>
          </div>
          <div className="Manage-form-view-details">
            <span>마을리지 내용</span>
            <span>결제 시 1% 적립</span>
          </div>
          <div className="Manage-form-view-details">
            <span>포인트</span>
            <span>100</span>
          </div>
          <div className="Manage-form-view-details">
            <span>포인트합</span>
            <span>1,000</span>
          </div>
          <div className="Manage-form-view-details">
            <span>일시</span>
            <span>20nn.nn.nn 00:00:00</span>
          </div>
          <div className="Manage-form-view-details">
            <span>만료일</span>
            <span>20nn.nn.nn</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageMileageSeeMore;
