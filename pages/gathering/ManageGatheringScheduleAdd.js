import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringScheduleAdd.css";
import "../../css/Manage.css";
const ManageGatheringScheduleAdd = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-schedule">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-schedule-add">
          <div>
            <span>일정관리</span>
          </div>
          <div className="Manage-input-container">
            <p className="Manage-input-title-schedule">모임기간*</p>
            <div className="Manage-date-postdate gathering-period-schedule">
              <div>
                <input type="date" required data-placeholder="NNNN-NN-NN" />
              </div>
              <span>~</span>
              <div>
                <input type="date" required data-placeholder="NNNN-NN-NN" />
              </div>
              <a>등록</a>
            </div>
          </div>
          <div className="Manage-form-save save-gathering-add">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringScheduleAdd;
