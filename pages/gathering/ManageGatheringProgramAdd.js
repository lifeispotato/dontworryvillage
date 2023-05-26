import React, { useState } from "react";
import "../../css/Manage.css";
import "../../css/gathering/ManageGatheringProgramAdd.css";

const ManageGatheringProgramAdd = () => {
  return (
    <div className="Manage-container">
      <div className="gathering-program-add-container">
        <div className="gathering-program-add-popup">
          <span>새로운 프로그램 추가하기</span>
          <div className="Manage-input-container manage-input-container-gathering-popup">
            <p className="Manage-input-title">프로그램명</p>
            <input
              type="text"
              className="Manage-input-textarea"
              placeholder="프로그램명"
            />
          </div>
          <div className="Manage-input-container manage-input-container-gathering-popup">
            <p className="Manage-input-title">소요시간</p>
            <input type="time" className="Manage-input-textarea" />
          </div>
          <div className="Manage-input-container manage-input-container-popup">
            <p className="Manage-input-title">상세설명*</p>
            <textarea
              className="Manage-input-textarea-popup"
              placeholder="상세설명을 입력하세요"
            ></textarea>
          </div>
          <div className="Manage-input-container manage-input-container-popup">
            <p className="Manage-input-title">이미지(*최대5장)</p>
            <div className="gathering-popup-img-container">
              <label htmlFor="img-input">
                <img src="img\file-upload-plus.svg" />
                <span>파일 등록</span>
              </label>
              <input
                id="img-input"
                className="Manage-input-textarea manage-form-gathering-add-input"
                type="file"
                required
              />
              <div className="gathering-popup-img-list">
                <div className="gathering-popup-img-list-up">
                  <div className="gathering-popup-img-name">
                    <span>파일명.확장자명</span>
                    <img src="img\image-cancel.svg" />
                  </div>
                  <div className="gathering-popup-img-name">
                    <span>파일명.확장자명</span>
                    <img src="img\image-cancel.svg" />
                  </div>
                  <div className="gathering-popup-img-name">
                    <span>파일명.확장자명</span>
                    <img src="img\image-cancel.svg" />
                  </div>
                </div>
                <div className="gathering-popup-img-list-down">
                  <div className="gathering-popup-img-name">
                    <span>파일명.확장자명</span>
                    <img src="img\image-cancel.svg" />
                  </div>
                  <div className="gathering-popup-img-name">
                    <span>파일명.확장자명</span>
                    <img src="img\image-cancel.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="save-gathering-program-add-popup">
            <a>닫기</a>
            <a>추가하기</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGatheringProgramAdd;
