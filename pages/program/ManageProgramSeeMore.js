import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/program/ManageProgramSeeMore.css";
const ManageProgramSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-program-seemore">
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
        <div className="Manage-form manage-form-program-see-more">
          <span>상세</span>
          <div className="Manage-form-view-details Manage-form-view-details-program-seemore">
            <span>프로그램명</span>
            <span>프로그램명프로그램명프로그램명</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-program-seemore">
            <span>소요시간</span>
            <span>03:00 시간</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-program-seemore">
            <span>상세설명</span>
            <span>
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-program-seemore">
            <span>
              이미지
              <br />
              (*최대 5장)
            </span>
            <div className="Manage-form-view-details-img Manage-form-view-details-img-program">
              <div>
                <img src="\img\Rectangle.svg" />
              </div>
              <div>
                <a href="#" download>
                  <span>파일명.확장자명</span>
                  <img src="\img\download_black.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageProgramSeeMore;
