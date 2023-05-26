import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringNoticeSeeMore.css";
import "../../css/Manage.css";
const ManageGatheringNoticeSeeMore = () => {
  const [data, setData] = useState([
    {
      no: 1,
      nickname: "별명",
      section: "대댓글",
      date: "YYY/MM/DD",
      content: "내용내용내용내용내용내용내용내용내용내용내용",
      state: "일반",
    },
    {
      no: 2,
      nickname: "별명",
      section: "대댓글",
      date: "YYY/MM/DD",
      content: "내용내용내용내용내용내용내용내용내용내용내용",
      state: "숨김",
    },
    {
      no: 3,
      nickname: "별명",
      section: "대댓글",
      date: "YYY/MM/DD",
      content: "내용내용내용내용내용내용내용내용내용내용내용",
      state: "일반",
    },
    {
      no: 4,
      nickname: "별명",
      section: "대댓글",
      date: "YYY/MM/DD",
      content: "내용내용내용내용내용내용내용내용내용내용내용",
      state: "숨김",
    },
    {
      no: 5,
      nickname: "별명",
      section: "대댓글",
      date: "YYY/MM/DD",
      content: "내용내용내용내용내용내용내용내용내용내용내용",
      state: "일반",
    },
    {
      no: 6,
      nickname: "별명",
      section: "대댓글",
      date: "YYY/MM/DD",
      content: "내용내용내용내용내용내용내용내용내용내용내용",
      state: "일반",
    },
  ]);

  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [commentsubmenu, setCommentSubmenu] = useState(0);
  // const [activeComment, setActiveComment] = useState("일반");
  const [activeCommentList, setActiveCommentList] = useState(["일반", "숨김"]);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-notice-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a href="#">수정하기</a>
          </div>
        </div>
        <div className="Manage-form gathering-notice-seemore-info-container">
          <span>상세보기</span>
          <div className="Manage-form-view-details details-info-notice-seemore">
            <span>게시글 관리자 이메일</span>
            <span>이메일이메일</span>
          </div>
          <div className="Manage-form-view-details details-info-notice-seemore">
            <span>게시일자</span>
            <span>제목제목제목제목</span>
          </div>
          <div className="Manage-form-view-details details-info-notice-seemore">
            <span>제목</span>
            <span>제목제목제목제목</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-flexstart">
            <span>본문</span>
            <span>
              상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            </span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-flexstart">
            <span>
              상세이미지
              <br />
              (*최대 5장)
            </span>
            <div className="schedule-notice-detail-img-container">
              <img src="img\Rectangle.svg" />
              <div className="schedule-notice-detail-img-name">
                <a href="#" download>
                  <span>파일명.확장자명</span>
                  <img src="img\download_black.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details details-info-notice-seemore">
            <span>첨부파일</span>
            <div className="schedule-notice-detail-file-name">
              <a href="#" download>
                <span>파일명.확장자명</span>
                <img src="img\download_black.svg" />
              </a>
            </div>
          </div>
          <div className="Manage-form-view-details details-info-notice-seemore">
            <span>댓글수</span>
            <span>N개</span>
          </div>
          <div className="Manage-form-view-details details-info-notice-seemore">
            <span>좋아요수</span>
            <span>N개</span>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-notice-see-more-comment">
          <span>댓글</span>
          <table>
            <thead>
              <tr>
                <th>별명</th>
                <th>분류</th>
                <th>작성일자</th>
                <th>내용</th>
                <th>상태</th>
                <th>결제내역</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.nickname}</td>
                    <td>{item.section}</td>
                    <td>{item.date}</td>
                    <td>
                      <span>{item.content}</span>
                    </td>
                    <td className="table-sub-catagory-container">
                      <a
                        onClick={() => {
                          if (openSubmenu !== item.no) {
                            setOpenSubmenu(item.no);
                          } else {
                            openSubmenu
                              ? setOpenSubmenu(null)
                              : setOpenSubmenu(item.no);
                          }
                        }}
                      >
                        <span>{item.state}</span>
                        <img src="\img\table-togle.svg" />
                      </a>
                      {openSubmenu === item.no ? (
                        <ul className="table-sub-menu">
                          <li
                            onClick={() => {
                              let temp01 = [...data];
                              let tempIndex = temp01.findIndex((item02) => {
                                return item02.no === item.no;
                              });
                              temp01[tempIndex].state = "일반";

                              setData(temp01);
                              // item.state = "일반";
                              setOpenSubmenu(null);
                            }}
                          >
                            {activeCommentList[0]}
                          </li>
                          <li
                            onClick={() => {
                              let temp01 = [...data];
                              let tempIndex = temp01.findIndex((item02) => {
                                return item02.no === item.no;
                              });
                              temp01[tempIndex].state = "숨김";

                              setData(temp01);

                              // item.state = "숨김";
                              setOpenSubmenu(null);
                            }}
                          >
                            {activeCommentList[1]}
                          </li>
                        </ul>
                      ) : null}
                    </td>
                    <td>
                      <a>
                        <img src="\img\see-more-btn-plus.svg" />
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

export default ManageGatheringNoticeSeeMore;
