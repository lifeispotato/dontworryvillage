import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringReview.css";
import "../../css/Manage.css";
const ManageGatheringReview = () => {
  const [reviewData, setReviewData] = useState([
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      mark: 5.0,
      state: "숨김",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      mark: 4.0,
      state: "일반",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      mark: 4.0,
      state: "숨김",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      mark: 4.0,
      state: "일반",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      mark: 4.0,
      state: "일반",
      link: "#",
    },
    {
      email: "ididididid@asd.com",
      nickname: "별명별명별명별명별명별명별명별명",
      date: "YYYY/MM/DD",
      mark: 4.0,
      state: "일반",
      link: "#",
    },
  ]);

  const [visible, setvisible] = useState(null);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-review">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
        </div>
        <div className="gathering-review-menu-container">
          <a>기본정보 및 소개</a>
          <a>일정</a>
          <a>공지</a>
          <a>프로그램 리뷰</a>
          <a>문의</a>
        </div>
        <div className="Manage-form manage-form-gathering-review">
          <div className="gathering-review-title">
            <span>프로그램 리뷰</span>
            <span>00개</span>
          </div>
          <table className="gathering-review-table">
            <thead>
              <tr>
                <th>이메일</th>
                <th>별명</th>
                <th>작성일자</th>
                <th>평점</th>
                <th>리뷰상태</th>
                <th>상세보기</th>
              </tr>
            </thead>
            <tbody>
              {reviewData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>
                      <span>{item.nickname}</span>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.mark}</td>
                    <td className="table-sub-catagory-container">
                      <a
                        onClick={() => {
                          if (visible === index) {
                            setvisible(null);
                          } else {
                            setvisible(index);
                          }
                        }}
                      >
                        <span>{item.state}</span>
                        <img src="img\table-togle.svg" />
                      </a>
                      {visible === index ? (
                        <ul className="table-sub-menu">
                          <li
                            onClick={() => {
                              let copyData = [...reviewData];
                              copyData[index].state = "일반";
                              setReviewData(copyData);
                              setvisible(null);
                            }}
                          >
                            일반
                          </li>
                          <li
                            onClick={() => {
                              let copyData = [...reviewData];
                              copyData[index].state = "숨김";
                              setReviewData(copyData);
                              setvisible(null);
                            }}
                          >
                            숨김
                          </li>
                        </ul>
                      ) : null}
                    </td>
                    <td>
                      <a>
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

export default ManageGatheringReview;
