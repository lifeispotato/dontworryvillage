import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/community/ManageCommunitySeeMore.css";
import "../../css/Manage.css";
const ManageCommunitySeeMore = () => {
  const [communityComData, setCommunityComData] = useState([
    {
      nickname: "별명별명별명별명별명별명별명별명",
      classification: "댓글",
      date: "YYYY/MM/DD",
      content: "내용내용내내용내용내용내용내용내용내용내용",
      state: "일반",
      link: "#",
    },
  ]);

  const [subMenuActive, setSubMenuActive] = useState(null);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-community-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>삭제</a>
          </div>
        </div>
        <div className="Manage-form manage-form-community-see-more">
          <span>상세보기</span>
          <div className="Manage-form-view-details">
            <span>신고유형</span>
            <span>게시글</span>
          </div>
          <div className="Manage-form-view-details">
            <span>게시자 이메일</span>
            <span>이메일</span>
          </div>
          <div className="Manage-form-view-details">
            <span>게시자 별명</span>
            <span>게시자 별명</span>
          </div>
          <div className="Manage-form-view-details">
            <span>작성일시</span>
            <span>20NN.NN.NN NN:NN:NN</span>
          </div>
          <div className="Manage-form-view-details">
            <span>제목</span>
            <span>제목제목제목</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-flexstart">
            <span>본문</span>
            <div className="Manage-form-view-details-textarea">
              <span>
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
                본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
              </span>
              <img src="img\Rectangle 4923 (1).png" />
              <img src="img\Rectangle 4923 (1).png" />
              <img src="img\Rectangle 4923 (1).png" />
              <img src="img\Rectangle 4923 (1).png" />
            </div>
          </div>
          <div className="Manage-form-view-details">
            <span>신고자 이메일</span>
            <span>OO@naver.com</span>
          </div>
          <div className="Manage-form-view-details">
            <span>신고일자</span>
            <span>YYYY/MM/DD</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-lastchild">
            <span>신고사유</span>
            <span>주제와 맞지 않는 글입니다</span>
          </div>
        </div>
        <div className="Manage-form manage-form-community-see-more-comment">
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
              {communityComData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <span>{item.nickname}</span>
                    </td>
                    <td>
                      <span>{item.classification}</span>
                    </td>
                    <td>{item.date}</td>
                    <td>
                      <span>{item.content}</span>
                    </td>
                    <td className="table-sub-catagory-container">
                      <a
                        onClick={() => {
                          if (subMenuActive === index) {
                            setSubMenuActive(null);
                          } else {
                            setSubMenuActive(index);
                          }
                        }}
                      >
                        <span>{item.state}</span>
                        <img src="img\table-togle.svg" />
                      </a>
                      {subMenuActive === index ? (
                        <ul className="table-sub-menu">
                          <li
                            onClick={() => {
                              let copyData = [...communityComData];
                              copyData[index].state = "일반";
                              setCommunityComData(copyData);
                              setSubMenuActive(null);
                            }}
                          >
                            일반
                          </li>
                          <li
                            onClick={() => {
                              let copyData = [...communityComData];
                              copyData[index].state = "숨김";
                              setCommunityComData(copyData);
                              setSubMenuActive(null);
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

export default ManageCommunitySeeMore;
