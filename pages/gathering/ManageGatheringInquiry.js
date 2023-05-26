import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringInquiry.css";
import "../../css/Manage.css";
const ManageGatheringInquiry = () => {
  const [inquiryData, setInquiryData] = useState([
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      state: "답변대기",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      state: "답변완료",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      state: "답변대기",
      link: "#",
    },
  ]);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-inquiry">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="gathering-inquiry-menu-container">
          <a>기본정보 및 소개</a>
          <a>일정</a>
          <a>공지</a>
          <a>프로그램 리뷰</a>
          <a>문의</a>
        </div>
        <div className="Manage-form manage-form-gathering-inquiry">
          <div className="gathering-inquiry-title">
            <span>문의</span>
            <span>00개</span>
          </div>
          <table className="gathering-inquiry-table">
            <thead>
              <tr>
                <th>이메일</th>
                <th>별명</th>
                <th>작성일자</th>
                <th>상태</th>
                <th>상세보기</th>
              </tr>
            </thead>
            <tbody>
              {inquiryData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>
                      <span>{item.nickname}</span>
                    </td>
                    <td>{item.date}</td>
                    <td>
                      <span
                        className={
                          item.state === "답변대기"
                            ? "table-waiting-answer"
                            : ".table-complete-answer"
                        }
                      >
                        {item.state}
                      </span>
                    </td>
                    <td>
                      <a href={item.link}>
                        <img src="img\see-more-btn-plus.svg" />
                        <span>보기</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="manage-table-pagenation-container">
            <div className="manage-table-pagenation">
              <a>
                <img src="\img\chevron-left.svg" />
              </a>
              <a>1</a>
              <a>2</a>
              <a>3</a>
              <a>4</a>
              <a>
                <img src="\img\chevron-right.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageGatheringInquiry;
