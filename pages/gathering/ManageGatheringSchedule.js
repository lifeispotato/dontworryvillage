import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringSchedule.css";
import "../../css/Manage.css";
const ManageGatheringSchedule = () => {
  const [scheduleToggle, setScheduleToggle] = useState(false);

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
        <div className="gathering-schedule-menu-container">
          <a>기본정보 및 소개</a>
          <a>일정</a>
          <a>공지</a>
          <a>프로그램 리뷰</a>
          <a>문의</a>
        </div>
        <div className="Manage-form manage-form-gathering-schedule-exist">
          <div className="gathering-schedule-title">
            <span>일정</span>
            <a href="#">일정관리</a>
          </div>
          <div className="schedule-info-exist">
            <div className="schedule-date-info">
              <span>1일차 2000.00.00 (월)</span>
            </div>
            <div
              className="gathering-schedule-info"
              onClick={() => {
                setScheduleToggle(!scheduleToggle);
              }}
            >
              <div className="gathering-schedule-info-detail">
                <span>일정명</span>
                <span>목포중앙시장</span>
              </div>
              <img
                className="gathering-schedule-info-toggle-btn"
                src={
                  scheduleToggle
                    ? "/img/table-toggle-up.svg"
                    : "/img/table-togle.svg"
                }
              />
              {!scheduleToggle ? null : (
                <div>
                  <div className="gathering-schedule-info-detail">
                    <span>일정종류</span>
                    <span>장소방문</span>
                  </div>
                  <div className="gathering-schedule-info-detail">
                    <span>시간</span>
                    <span>13:00 ~ 14:00 (1시간)</span>
                  </div>
                  <div className="gathering-schedule-info-detail">
                    <span>이동수단</span>
                    <span>수단명</span>
                  </div>
                  <div className="gathering-schedule-info-detail gathering-schedule-info-flex-start">
                    <span>소개</span>
                    <span>
                      소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란소개란
                    </span>
                  </div>
                  <div className="gathering-schedule-info-detail gathering-schedule-info-flex-start">
                    <span>
                      상세이미지
                      <br />
                      (*최대 5장)
                    </span>
                    <div>
                      <img src="img\Rectangle.svg" />
                      <div className="schedule-info-detail-img-name">
                        <span>파일명.확장자명</span>
                        <img src="img\download_black.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="gathering-schedule-info">
              <div className="gathering-schedule-info-detail">
                <span>일정명</span>
                <span>목포중앙시장</span>
              </div>
              <img
                className="gathering-schedule-info-toggle-btn"
                src="img\table-togle.svg"
              />
            </div>
          </div>
          <div className="schedule-info-exist">
            <div className="schedule-date-info">
              <span>2일차 2000.00.00 (화)</span>
            </div>
            <div className="gathering-schedule-info">
              <div className="gathering-schedule-info-detail">
                <span>일정명</span>
                <span>목포중앙시장</span>
              </div>
              <img
                className="gathering-schedule-info-toggle-btn"
                src="img\table-togle.svg"
              />
            </div>
            <div className="gathering-schedule-info">
              <div className="gathering-schedule-info-detail">
                <span>일정명</span>
                <span>목포중앙시장</span>
              </div>
              <img
                className="gathering-schedule-info-toggle-btn"
                src="img\table-togle.svg"
              />
            </div>
            <div className="gathering-schedule-info">
              <div className="gathering-schedule-info-detail">
                <span>일정명</span>
                <span>목포중앙시장</span>
              </div>
              <img
                className="gathering-schedule-info-toggle-btn"
                src="img\table-togle.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringSchedule;
