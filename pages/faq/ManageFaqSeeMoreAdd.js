import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/faq/ManageFaqSeeMoreAdit.css";
import "../../css/Manage.css";
const ManageFaqSeeMoreAdd = () => {
  const subMenuCatagory = ["이용안내1", "이용안내2", "이용안내3", "이용안내4"];
  const [selectMenu, setSelectMenu] = useState(false);
  const [selectMenuText, setSelectMenuText] = useState("카테고리를 선택하세요");

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
        <div className="Manage-form manage-form-faq-see-more-adit">
          <span>추가하기</span>
          <div className="Manage-input-container">
            <p className="Manage-input-title">카테고리</p>
            <div className="select">
              <div
                className="selected"
                onClick={() => setSelectMenu(!selectMenu)}
              >
                <div
                  className={
                    selectMenuText === "카테고리를 선택하세요"
                      ? "selected-value-basic"
                      : "selected-value"
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
                    }}
                  >
                    {subMenuCatagory[0]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuCatagory[1]);
                    }}
                  >
                    {subMenuCatagory[1]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuCatagory[2]);
                    }}
                  >
                    {subMenuCatagory[2]}
                  </li>
                  <li
                    className="option"
                    onClick={() => {
                      setSelectMenuText(subMenuCatagory[3]);
                    }}
                  >
                    {subMenuCatagory[3]}
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="Manage-input-container">
            <p className="Manage-input-title">제목</p>
            <input
              className="Manage-input-textarea manage-form-faq-see-more-input"
              type="text"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="Manage-input-container Manage-input-container-maintext">
            <p className="Manage-input-title">본문</p>
            <textarea
              className="Manage-input-textarea manage-form-faq-see-more-textarea"
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>{" "}
          <div className="Manage-form-save manage-form-save-faq-see-more-adit">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageFaqSeeMoreAdd;
