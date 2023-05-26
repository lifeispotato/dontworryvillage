import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/alarm/ManageAlarmSeeMoreAdd.css";
import "../../css/Manage.css";
const ManageAlarmSeeMoreAdd = () => {
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
            <img src="\img\chevron-left.svg" />
            <span>뒤로가기</span>
          </a>
        </div>
        <div className="Manage-form manage-form-alarm-see-more-add">
          <span>추가하기</span>
          <div className="Manage-input-container">
            <p className="Manage-input-title">모임제목</p>
            <input
              className="Manage-input-textarea manage-form-alarm-see-more-input"
              type="text"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="Manage-input-container Manage-input-container-maintext">
            <p className="Manage-input-title">상세설명</p>
            <textarea className="Manage-input-textarea manage-form-alarm-see-more-textarea"></textarea>
          </div>
          <div className="Manage-input-container Manage-input-container-postdate">
            <p className="Manage-input-title">게시일자</p>
            <div>
              <div className="Manage-radio-postdate-alarm">
                <div>
                  <input
                    type="radio"
                    name="postdate"
                    required
                    value="now"
                    id="alarm-now"
                  />
                  <label htmlFor="alarm-now">즉시</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="postdate"
                    required
                    value="reservation"
                    id="alarm-reservation"
                  />
                  <label htmlFor="alarm-reservation">예약하기</label>
                </div>
              </div>
              <div className="Manage-date-postdate">
                <input type="date" required data-placeholder="NNNN-NN-NN" />
                <input type="time" required />
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-alarm-see-more-add">
            <button>등록하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageAlarmSeeMoreAdd;
