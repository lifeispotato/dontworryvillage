import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/space/ManageSpaceAdd.css";
const ManageSpaceAdd = () => {
  const subMenuCatagory = ["이용안내1", "이용안내2", "이용안내3", "이용안내4"];
  const [selectMenu, setSelectMenu] = useState(false);
  const [selectedCatagory, setSelectedCatagory] = useState(false);
  const [selectMenuText, setSelectMenuText] =
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
        <div className="go-back-container-space-add">
          <div className="go-back">
            <a href="#">
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="Manage-form manage-form-space-add">
          <span>추가하기</span>
          <div>
            <span>기본정보</span>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">등록관리자이메일</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input"
                type="email"
                placeholder="이메일"
                disabled
              />
            </div>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">공간명*</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input"
                type="text"
                placeholder="공간명을 입력하세요"
                required
              />
              <a className="space-name-duplication-check">공간명 중복 확인</a>
            </div>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">담당자명*</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input"
                type="text"
                placeholder="담당자명을 입력하세요"
                required
              />
            </div>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">휴대전화*</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input"
                type="tel"
                placeholder="휴대전화번호를 입력하세요. (숫자만 입력가능)"
                required
              />
            </div>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">이메일*</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input"
                type="email"
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">상호(기업)명*</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input"
                type="text"
                placeholder="상호(기업)명을 입력하세요"
                required
              />
            </div>
            <div className="Manage-input-container manage-flex-start">
              <span className="Manage-input-title">통장사본*</span>
              <div className="space-add-input-file-container">
                <label htmlFor="file-input">
                  <img src="img\file-upload-plus.svg" />
                  <span>파일 등록</span>
                </label>
                <input
                  id="file-input"
                  className="Manage-input-textarea manage-form-space-add-input"
                  type="file"
                  required
                />
              </div>
            </div>
            <div className="Manage-input-container manage-flex-start input-container-last">
              <span className="Manage-input-title">
                신분증
                <br />
                (개인일 경우 등록)
              </span>
              <div className="space-add-input-file-container">
                <label htmlFor="file-input">
                  <img src="img\file-upload-plus.svg" />
                  <span>파일 등록</span>
                </label>
                <input
                  id="file-input"
                  className="Manage-input-textarea manage-form-space-add-input"
                  type="file"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <span className="space-add-title">프로필 관리</span>
            <div className="Manage-input-container Manage-input-container-space-add">
              <p className="Manage-input-title">카테고리*</p>
              <div className="select">
                <div
                  className="selected"
                  onClick={() => setSelectMenu(!selectMenu)}
                >
                  <div
                    className={
                      selectedCatagory
                        ? "selected-value"
                        : "selected-value-basic"
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
                        setSelectMenuText(subMenuCatagory[0]);
                        setSelectedCatagory(true);
                      }}
                    >
                      {subMenuCatagory[0]}
                    </li>
                    <li
                      className="option"
                      onClick={() => {
                        setSelectMenuText(subMenuCatagory[1]);
                        setSelectedCatagory(true);
                      }}
                    >
                      {subMenuCatagory[1]}
                    </li>
                    <li
                      className="option"
                      onClick={() => {
                        setSelectMenuText(subMenuCatagory[2]);
                        setSelectedCatagory(true);
                      }}
                    >
                      {subMenuCatagory[2]}
                    </li>
                    <li
                      className="option"
                      onClick={() => {
                        setSelectMenuText(subMenuCatagory[3]);
                        setSelectedCatagory(true);
                      }}
                    >
                      {subMenuCatagory[3]}
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="Manage-input-container manage-flex-start">
              <span className="Manage-input-title">프로필 이미지*</span>
              <div className="space-add-input-file-container">
                <label htmlFor="file-input">
                  <img src="img\file-upload-plus.svg" />
                  <span>파일 등록</span>
                </label>
                <input
                  id="file-input"
                  className="Manage-input-textarea manage-form-space-add-input"
                  type="file"
                  required
                />
              </div>
            </div>
            <div className="Manage-input-container manage-flex-start">
              <span className="Manage-input-title">배경 이미지*</span>
              <div className="space-add-input-file-container">
                <label htmlFor="file-input">
                  <img src="img\file-upload-plus.svg" />
                  <span>파일 등록</span>
                </label>
                <input
                  id="file-input"
                  className="Manage-input-textarea manage-form-space-add-input"
                  type="file"
                  required
                />
              </div>
            </div>
            <div className="Manage-input-container Manage-input-container-space-add manage-flex-start">
              <span className="Manage-input-title">공간 소개글*</span>
              <textarea
                placeholder="공간 소개글을 입력하세요 (띄어쓰기 포함 200자 이내 작성)"
                maxLength="200"
              ></textarea>
            </div>
            <div className="Manage-input-container Manage-input-container-space-add manage-flex-start">
              <span className="Manage-input-title">운영시간*</span>
              <textarea placeholder="운영시간을 입력하세요"></textarea>
            </div>
            <div className="Manage-input-container Manage-input-container-space-add">
              <span className="Manage-input-title">공간명*</span>
              <input
                className="Manage-input-textarea manage-form-space-add-input space-add-search-address"
                type="text"
                placeholder="공간명을 입력하세요"
                required
              />
            </div>
          </div>
          <div>
            <span className="space-add-title">상세설명</span>
            <div className="Manage-input-container manage-flex-start">
              <span className="Manage-input-title">대표 이미지</span>
              <div className="space-add-input-file-container">
                <label htmlFor="file-input">
                  <img src="img\file-upload-plus.svg" />
                  <span>파일 등록</span>
                </label>
                <input
                  id="file-input"
                  className="Manage-input-textarea manage-form-space-add-input"
                  type="file"
                  required
                />
              </div>
            </div>
            <div className="Manage-input-container manage-flex-start">
              <span className="Manage-input-title">상세 이미지</span>
              <div className="space-add-input-file-container">
                <label htmlFor="file-input">
                  <img src="img\file-upload-plus.svg" />
                  <span>파일 등록</span>
                </label>
                <input
                  id="file-input"
                  className="Manage-input-textarea manage-form-space-add-input"
                  type="file"
                  required
                />
              </div>
            </div>
            <div className="Manage-input-container Manage-input-container-space-add manage-flex-start">
              <span className="Manage-input-title">상세설명</span>
              <textarea
                placeholder="공간 상세설명을 입력하세요 (띄어쓰기 포함 1000자 이내 작성)"
                maxLength="1000"
              ></textarea>
            </div>
          </div>
          <div className="Manage-form-save manage-form-save-space-add">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSpaceAdd;
