import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/gathering/ManageGatheringAdd.css";
const ManageGatheringAdd = () => {
  const subMenuState = ["모집중", "모집완료", "종료", "취소"];
  const subMenuCatagory = ["카페", "제과", "독서", "쿠킹"];

  const [selectMenu, setSelectMenu] = useState(false);
  const [selectCatagory, setSelectCatagory] = useState(false);
  const [selectedCatagory, setSelectedCatagory] = useState(false);

  const [selectMenuText, setSelectMenuText] = useState("모임상태를 선택하세요");
  const [selectCatagoryText, setSelectCatagoryText] =
    useState("공간 카테고리를 선택하세요");
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-add">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-add">
          <span>추가하기</span>
          <span>기본정보 및 소개</span>
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <span className="Manage-input-title">등록관리자이메일</span>
            <input
              className="Manage-input-textarea manage-form-gathering-add-input"
              type="email"
              placeholder="이메일"
              disabled
            />
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <span className="Manage-input-title">공간명*</span>
            <input
              className="Manage-input-textarea manage-form-gathering-add-input"
              type="text"
              placeholder="공간명 검색 후 선택하세요"
              required
            />
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <p className="Manage-input-title">상태*</p>
            <div className="select">
              <div
                className="selected"
                onClick={() => setSelectMenu(!selectMenu)}
              >
                <div
                  className={
                    selectedCatagory ? "selected-value" : "selected-value-basic"
                  }
                >
                  {selectMenuText}
                </div>
                <div className="select-toggle-btn">
                  <img src="img\table-togle.svg" />
                </div>
              </div>
              {selectMenu ? (
                <ul className="option-container">
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuState[0]);
                      setSelectedCatagory(true);
                      setSelectMenu(false);
                    }}
                  >
                    {subMenuState[0]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuState[1]);
                      setSelectedCatagory(true);
                      setSelectMenu(false);
                    }}
                  >
                    {subMenuState[1]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuState[2]);
                      setSelectedCatagory(true);
                      setSelectMenu(false);
                    }}
                  >
                    {subMenuState[2]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuState[3]);
                      setSelectedCatagory(true);
                      setSelectMenu(false);
                    }}
                  >
                    {subMenuState[3]}
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <p className="Manage-input-title">카테고리*</p>
            <div className="select">
              <div
                className="selected"
                onClick={() => setSelectCatagory(!selectCatagory)}
              >
                <div
                  className={
                    selectedCatagory ? "selected-value" : "selected-value-basic"
                  }
                >
                  {selectCatagoryText}
                </div>
                <div className="select-toggle-btn">
                  <img src="img\table-togle.svg" />
                </div>
              </div>
              {selectCatagory ? (
                <ul className="option-container">
                  <li
                    className="option"
                    onClick={() => {
                      setSelectCatagoryText(subMenuCatagory[0]);
                      setSelectedCatagory(true);
                      setSelectCatagory(false);
                    }}
                  >
                    {subMenuCatagory[0]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectCatagoryText(subMenuCatagory[1]);
                      setSelectedCatagory(true);
                      setSelectCatagory(false);
                    }}
                  >
                    {subMenuCatagory[1]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectCatagoryText(subMenuCatagory[2]);
                      setSelectedCatagory(true);
                      setSelectCatagory(false);
                    }}
                  >
                    {subMenuCatagory[2]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectCatagoryText(subMenuCatagory[3]);
                      setSelectedCatagory(true);
                      setSelectCatagory(false);
                    }}
                  >
                    {subMenuCatagory[3]}
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-postdate">
            <p className="Manage-input-title">일시*</p>
            <div className="Manage-date-postdate Manage-date-postdate-gathering">
              <input type="date" required data-placeholder="NNNN-NN-NN" />
              <input
                className="Manage-input-textarea manage-form-gathering-add-input"
                type="text"
                required
                placeholder="N시간 혹은 N박 N일로 입력하세요"
              />
            </div>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-add">
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
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <span className="Manage-input-title">상세소개*</span>
            <textarea placeholder="모임 상세소개를 입력하세요"></textarea>
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <p className="Manage-input-title">
              서브 카테고리
              <br />
              (최대5개)
            </p>
            <input
              className="Manage-input-textarea manage-form-gathering-add-input"
              type="text"
              placeholder="ex) 서핑, 바다, 익스트림"
            />
          </div>
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <span className="Manage-input-title">이미지 (*최대 5장)</span>
            <div className="manage-form-gathering-add-input-img manage-form-gathering-add-input-img-root">
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
          <div className="Manage-input-container Manage-input-container-gathering-add">
            <span className="Manage-input-title">가격</span>
            <div>
              <input
                type="number"
                className="Manage-input-textarea manage-form-gathering-add-input"
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
          <div className="gathering-program-add-wrap">
            <span className="gathering-program-add">프로그램 등록</span>
            <div className="gathering-program-add-btn">
              <a>프로그램 추가</a>
              <a>새로운 프로그램 추가</a>
            </div>
            <span className="gathering-program-add-note">
              *프로그램 리뷰 작성은 최대 3개까지 선택 가능합니다.
            </span>
            <div className="Manage-input-container Manage-input-container-gathering-add">
              <span className="Manage-input-title">프로그램*</span>
              <div className="gathering-program-add-column">
                <div>
                  <div className="gathering-program-add-select-container">
                    <select
                      required
                      className="Manage-input-textarea-gathering gathering-program-add-select"
                    >
                      <option value="" disabled selected>
                        프로그램을 선택하세요
                      </option>
                      <option>이용안내</option>
                      <option>이용안내</option>
                      <option>이용안내</option>
                    </select>
                    <div>
                      <a>삭제</a>
                    </div>
                  </div>
                </div>
                <div className="gathering-review-apply">
                  <input type="checkbox" id="review-apply"></input>
                  <label htmlFor="review-apply"></label>
                  <span>리뷰작성</span>
                </div>
              </div>
            </div>
            <div className="Manage-input-container Manage-input-container-gathering-add">
              <span className="Manage-input-title">프로그램*</span>
              <div className="gathering-program-add-column">
                <div>
                  <div className="gathering-program-add-select-container">
                    <select
                      required
                      className="Manage-input-textarea-gathering gathering-program-add-select"
                    >
                      <option value="" disabled selected>
                        프로그램을 선택하세요
                      </option>
                      <option>이용안내</option>
                      <option>이용안내</option>
                      <option>이용안내</option>
                    </select>
                    <div>
                      <a>삭제</a>
                    </div>
                  </div>
                </div>
                <div className="gathering-review-apply">
                  <input type="checkbox" id="review-apply"></input>
                  <label htmlFor="review-apply"></label>
                  <span>리뷰작성</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-gathering-add">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringAdd;
