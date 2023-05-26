import React, { useState } from "react";
import "../../css/Manage.css";
import "../../css/gathering/ManageGatheringInquirySeeMore.css";

const ManageGatheringInquirySeeMore = () => {
  return (
    <div className="Manage-container">
      <div className="gathering-inquiry-seemore-container">
        <div className="gathering-inquiry-seemore-popup">
          <span>문의 상세</span>
          <div className="Manage-form-view-details gathering-inquiry-seemore-detail">
            <span>문의자 이메일</span>
            <span>mailto:ididididid@asd.com</span>
          </div>
          <div className="Manage-form-view-details gathering-inquiry-seemore-detail">
            <span>작성일자</span>
            <span>YYYY/MM/DD</span>
          </div>
          <div className="Manage-form-view-details gathering-inquiry-seemore-detail">
            <span>상태</span>
            <span>답변대기</span>
          </div>
          <div className="Manage-form-view-details gathering-inquiry-seemore-detail">
            <span>문의 내용</span>
            <span>
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            </span>
          </div>
          <div className="gathering-inquiry-seemore-detail">
            <span>답변</span>
            <div>
              <textarea placeholder="내용을 입력하세요"></textarea>
              <a>답변하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGatheringInquirySeeMore;
