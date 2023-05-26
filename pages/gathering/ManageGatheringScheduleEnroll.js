import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringScheduleEnroll.css";
import "../../css/Manage.css";
const ManageGatheringScheduleEnroll = () => {
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
              <a href="#">등록</a>
            </div>
          </div>
          <div className="schedule-eroll-container schedule-eroll-container-first">
            <div className="schedule-date">
              <span>1일차 2000.00.00 (월)</span>
            </div>
            <div className="schedule-enroll-add-btn">
              <span>*첫번째 일정은 장소 일정만 추가 가능합니다.</span>
              <div>
                <a>장소 일정 추가</a>
                <a>프로그램 일정 추가</a>
              </div>
            </div>
            <div className="schedule-enroll-information">
              <div className="Manage-input-container">
                <p className="Manage-input-title">일정명*</p>
                <input
                  className="Manage-input-textarea manage-form-schedule-enroll"
                  type="text"
                  placeholder="일정명을 입력하세요"
                  required
                />
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">시간*</p>
                <div className="Manage-time-schedule gathering-period-schedule gathering-period-schedule-enroll">
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                  <span>~</span>
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                </div>
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">이동수단*</p>
                <input
                  className="Manage-input-textarea manage-form-schedule-enroll"
                  type="text"
                  placeholder="ex)대중교통, 버스, 지하철, 자동차 등"
                  required
                />
              </div>
              <div className="Manage-input-container manage-input-container-detail">
                <p className="Manage-input-title">상세설명*</p>
                <textarea
                  className="Manage-input-textarea-detail"
                  placeholder="상세설명을 입력하세요"
                ></textarea>
              </div>
              <div className="Manage-input-container Manage-input-container-gathering-add">
                <span className="Manage-input-title">이미지 (*최대 5장)</span>
                <div className="schedule-info-img">
                  <label htmlFor="img-input">
                    <img src="img\img-registration.svg" />
                    <span>이미지 등록</span>
                  </label>
                  <input
                    id="img-input"
                    className="Manage-input-textarea manage-form-gathering-add-input"
                    type="file"
                    required
                  />
                  <div className="schedule-info-img-list">
                    <img src="img\Rectangle.svg" />
                    <img src="img\image-cancel.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-enroll-information schedule-enroll-information-program">
              <div className="Manage-input-container">
                <p className="Manage-input-title">프로그램*</p>
                <select
                  required
                  className="Manage-input-textarea-gathering manage-form-schedule-enroll-select"
                >
                  <option value="" disabled selected>
                    모임상태를 선택하세요
                  </option>
                  <option>이용안내</option>
                  <option>이용안내</option>
                  <option>이용안내</option>
                </select>
                <a>새로운 프로그램 추가</a>
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">시간*</p>
                <div className="Manage-time-schedule gathering-period-schedule gathering-period-schedule-enroll">
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                  <span>~</span>
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                </div>
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">이동수단*</p>
                <input
                  className="Manage-input-textarea manage-form-schedule-enroll"
                  type="text"
                  placeholder="ex)대중교통, 버스, 지하철, 자동차 등"
                  required
                />
              </div>
              <div className="Manage-input-container manage-input-container-detail">
                <p className="Manage-input-title">상세설명*</p>
                <textarea
                  className="Manage-input-textarea-detail"
                  placeholder="상세설명을 입력하세요"
                ></textarea>
              </div>
              <div className="Manage-input-container Manage-input-container-gathering-add">
                <span className="Manage-input-title">이미지 (*최대 5장)</span>
                <div className="schedule-info-img">
                  <label htmlFor="img-input">
                    <img src="img\img-registration.svg" />
                    <span>이미지 등록</span>
                  </label>
                  <input
                    id="img-input"
                    className="Manage-input-textarea manage-form-gathering-add-input"
                    type="file"
                    required
                  />
                  <div className="schedule-info-img-list">
                    <img src="img\Rectangle.svg" />
                    <img src="img\image-cancel.svg" />
                  </div>
                </div>
              </div>
              <div className="add-program-del-btn">
                <a>삭제</a>
              </div>
            </div>
          </div>
          <div className="schedule-eroll-container">
            <div className="schedule-date">
              <span>2일차 2000.00.00 (월)</span>
            </div>
            <div className="schedule-enroll-add-btn">
              <span>*첫번째 일정은 장소 일정만 추가 가능합니다.</span>
              <div>
                <a>장소 일정 추가</a>
                <a>프로그램 일정 추가</a>
              </div>
            </div>
            <div className="schedule-enroll-information">
              <div className="Manage-input-container">
                <p className="Manage-input-title">일정명*</p>
                <input
                  className="Manage-input-textarea manage-form-schedule-enroll"
                  type="text"
                  placeholder="일정명을 입력하세요"
                  required
                />
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">시간*</p>
                <div className="Manage-time-schedule gathering-period-schedule gathering-period-schedule-enroll">
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                  <span>~</span>
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                </div>
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">이동수단*</p>
                <input
                  className="Manage-input-textarea manage-form-schedule-enroll"
                  type="text"
                  placeholder="ex)대중교통, 버스, 지하철, 자동차 등"
                  required
                />
              </div>
              <div className="Manage-input-container manage-input-container-detail">
                <p className="Manage-input-title">상세설명*</p>
                <textarea
                  className="Manage-input-textarea-detail"
                  placeholder="상세설명을 입력하세요"
                ></textarea>
              </div>
              <div className="Manage-input-container Manage-input-container-gathering-add">
                <span className="Manage-input-title">이미지 (*최대 5장)</span>
                <div className="schedule-info-img">
                  <label htmlFor="img-input">
                    <img src="img\img-registration.svg" />
                    <span>이미지 등록</span>
                  </label>
                  <input
                    id="img-input"
                    className="Manage-input-textarea manage-form-gathering-add-input"
                    type="file"
                    required
                  />
                  <div className="schedule-info-img-list">
                    <img src="img\Rectangle.svg" />
                    <img src="img\image-cancel.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-enroll-information schedule-enroll-information-program">
              <div className="Manage-input-container">
                <p className="Manage-input-title">프로그램*</p>
                <select
                  required
                  className="Manage-input-textarea-gathering manage-form-schedule-enroll-select"
                >
                  <option value="" disabled selected>
                    모임상태를 선택하세요
                  </option>
                  <option>이용안내</option>
                  <option>이용안내</option>
                  <option>이용안내</option>
                </select>
                <a>새로운 프로그램 추가</a>
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">시간*</p>
                <div className="Manage-time-schedule gathering-period-schedule gathering-period-schedule-enroll">
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                  <span>~</span>
                  <input type="time" required data-placeholder="NNNN-NN-NN" />
                </div>
              </div>
              <div className="Manage-input-container">
                <p className="Manage-input-title">이동수단*</p>
                <input
                  className="Manage-input-textarea manage-form-schedule-enroll"
                  type="text"
                  placeholder="ex)대중교통, 버스, 지하철, 자동차 등"
                  required
                />
              </div>
              <div className="Manage-input-container manage-input-container-detail">
                <p className="Manage-input-title">상세설명*</p>
                <textarea
                  className="Manage-input-textarea-detail"
                  placeholder="상세설명을 입력하세요"
                ></textarea>
              </div>
              <div className="Manage-input-container Manage-input-container-gathering-add">
                <span className="Manage-input-title">이미지 (*최대 5장)</span>
                <div className="schedule-info-img">
                  <label htmlFor="img-input">
                    <img src="img\img-registration.svg" />
                    <span>이미지 등록</span>
                  </label>
                  <input
                    id="img-input"
                    className="Manage-input-textarea manage-form-gathering-add-input"
                    type="file"
                    required
                  />
                  <div className="schedule-info-img-list">
                    <img src="img\Rectangle.svg" />
                    <img src="img\image-cancel.svg" />
                  </div>
                </div>
              </div>
              <div className="add-program-del-btn">
                <a>삭제</a>
              </div>
            </div>
          </div>
          <div className="Manage-form-save save-gathering-schedule-enroll">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringScheduleEnroll;
