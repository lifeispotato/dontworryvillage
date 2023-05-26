import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/gathering/ManageGatheringAdit.css";
const ManageGatheringAdit = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-adit">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-adit">
          <span>수정하기</span>
          <span>기본정보 및 소개</span>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <span className="Manage-input-title">등록관리자이메일</span>
            <input
              className="Manage-input-textarea manage-form-gathering-adit-input"
              type="email"
              placeholder="이메일"
              disabled
            />
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <span className="Manage-input-title">공간명*</span>
            <input
              className="Manage-input-textarea manage-form-gathering-adit-input"
              type="text"
              placeholder="공간명"
              required
              disabled
            />
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <p className="Manage-input-title">상태*</p>
            <select
              required
              className="Manage-input-textarea-gathering manage-form-gathering-see-more-select"
            >
              <option value="" disabled selected>
                모임상태를 선택하세요
              </option>
              <option>이용안내</option>
              <option>이용안내</option>
              <option>이용안내</option>
            </select>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <p className="Manage-input-title">카테고리*</p>
            <select
              required
              className="Manage-input-textarea-gathering manage-form-gathering-see-more-select"
            >
              <option value="" disabled selected>
                카테고리를 선택하세요
              </option>
              <option>이용안내</option>
              <option>이용안내</option>
              <option>이용안내</option>
            </select>
          </div>
          <div className="Manage-input-container Manage-input-container-postdate">
            <p className="Manage-input-title">일시*</p>
            <div className="Manage-date-postdate Manage-date-postdate-gathering">
              <input type="date" required data-placeholder="NNNN-NN-NN" />
              <input
                className="Manage-input-textarea manage-form-gathering-adit-input"
                type="text"
                required
                placeholder="N시간 혹은 N박 N일로 입력하세요"
              />
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <p className="Manage-input-title">모집인원*</p>
            <div>
              <div className="recruit-number-container">
                <input
                  className="Manage-input-textarea Manage-input-recruit-number"
                  type="number"
                  required
                  placeholder="N"
                />
                <span>명</span>
              </div>
            </div>
          </div>
          <div className="Manage-input-container">
            <p className="Manage-input-title">모집기간*</p>
            <div className="Manage-date-postdate Manage-date-postdate-gathering-period">
              <input type="date" required data-placeholder="NNNN-NN-NN" />
              <span>~</span>
              <input type="date" required data-placeholder="NNNN-NN-NN" />
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <span className="Manage-input-title">상세소개*</span>
            <textarea placeholder="모임 상세소개를 입력하세요"></textarea>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <p className="Manage-input-title">
              서브 카테고리
              <br />
              (최대5개)
            </p>
            <input
              className="Manage-input-textarea manage-form-gathering-adit-input"
              type="text"
              placeholder="ex) 서핑, 바다, 익스트림"
            />
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <span className="Manage-input-title">이미지 (*최대 5장)</span>
            <div className="manage-form-gathering-adit-input-img manage-form-gathering-adit-input-img-root">
              <label htmlFor="img-input">
                <img src="img\img-registration.svg" />
                <span>이미지 등록</span>
              </label>
              <input
                id="img-input"
                className="Manage-input-textarea manage-form-gathering-adit-input"
                type="file"
                required
              />
              <div className="manage-form-gathering-img-container">
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
              <div className="manage-form-gathering-img-container">
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
              <div className="manage-form-gathering-img-container">
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
              <div className="manage-form-gathering-img-container">
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
              <div className="manage-form-gathering-img-container">
                <img src="img\Rectangle.svg" />
                <img src="img\image-cancel.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-input-container">
            <span className="Manage-input-title">모임분류</span>
            <div className="input-radio-gathering-container">
              <input
                className="input-radio-gathering"
                type="radio"
                id="pay"
                name="gathering-classification"
              />
              <label htmlFor="pay">유료</label>
              <input
                className="input-radio-gathering"
                type="radio"
                id="free-procedure"
                name="gathering-classification"
              />
              <label htmlFor="free-procedure">무료 (승인절차O)</label>
              <input
                className="input-radio-gathering"
                type="radio"
                id="free-no-procedure"
                name="gathering-classification"
              />
              <label htmlFor="free-no-procedure">무료 (승인절차X)</label>
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-adit">
            <span className="Manage-input-title">가격</span>
            <div>
              <input
                type="number"
                className="Manage-input-textarea manage-form-gathering-adit-input"
                placeholder="숫자만 입력"
              />
              <div className="sale-apply-container">
                <input type="checkbox" id="sale-apply"></input>
                <label htmlFor="sale-apply"></label>
                <span>할인적용</span>
                <div className="apply-number-container">
                  <input
                    className="Manage-input-textarea Manage-input-sale-apply-number"
                    type="text"
                    placeholder="N"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-gathering-adit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringAdit;
