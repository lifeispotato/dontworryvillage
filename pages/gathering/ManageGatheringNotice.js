import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringNotice.css";
import "../../css/Manage.css";
const ManageGatheringNotice = () => {
  const [menuActive, setMenuActive] = useState(0);

  const [noticeData, setNoticeData] = useState([
    {
      no: 1,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 2,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 3,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 4,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 5,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 6,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 7,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 8,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 9,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
    },
    {
      no: 10,
      title: "제목제목제목제목제목제목제목제목제목제목",
      email: "이메일이메일이메일",
      date: "YYYY/MM/DD",
      commentNum: 10,
      link: "www.google.com",
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
        <div className="go-back-container-gathering-notice">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="gathering-notice-menu-container">
          <a>기본정보 및 소개</a>
          <a>일정</a>
          <a>공지</a>
          <a>프로그램 리뷰</a>
          <a>문의</a>
        </div>
        <div className=" manage-form-gathering-notice">
          <div className="gathering-notice-add-container">
            <div className="gathering-notice-number">
              <span>공지사항 갯수</span>
              <span>000</span>
            </div>
            <div className="gathering-notice-add-btn">
              <a href="#">
                <img src="img\plus.svg" />
                <span>추가하기</span>
              </a>
            </div>
          </div>
          <table className="gathering-notice-table">
            <thead>
              <tr>
                <th>No</th>
                <th>제목</th>
                <th>게시 관리자 이메일</th>
                <th>게시일자</th>
                <th>댓글수</th>
                <th>더보기</th>
              </tr>
            </thead>
            <tbody>
              {noticeData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.no}</td>
                    <td>
                      <span>{item.title}</span>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.commentNum}</td>
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

export default ManageGatheringNotice;
