import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGathering.css";
import "../../css/Manage.css";
const ManageGathering = () => {
  const [gatheringData, setGatheringData] = useState([
    {
      state: "종료",
      title: "모임게시글 제목제목제목 모임게시글 제목제목제목",
      date: "YY/MM/DD",
      periodStart: "YY/MM/DD",
      periodEnd: "YY/MM/DD",
      name: "상호명상호명상호명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
    {
      state: "모집중",
      title: "모임게시글 제목제목제목 모임게시글 제목제목제목",
      date: "YY/MM/DD",
      periodStart: "YY/MM/DD",
      periodEnd: "YY/MM/DD",
      name: "상호명상호명상호명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
    {
      state: "모집중",
      title: "모임게시글 제목제목제목 모임게시글 제목제목제목",
      date: "YY/MM/DD",
      periodStart: "YY/MM/DD",
      periodEnd: "YY/MM/DD",
      name: "상호명상호명상호명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
    {
      state: "모집완료",
      title: "모임게시글 제목제목제목 모임게시글 제목제목제목",
      date: "YY/MM/DD",
      periodStart: "YY/MM/DD",
      periodEnd: "YY/MM/DD",
      name: "상호명상호명상호명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
    {
      state: "취소",
      title: "모임게시글 제목제목제목 모임게시글 제목제목제목",
      date: "YY/MM/DD",
      periodStart: "YY/MM/DD",
      periodEnd: "YY/MM/DD",
      name: "상호명상호명상호명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
    {
      state: "종료",
      title: "모임게시글 제목제목제목 모임게시글 제목제목제목",
      date: "YY/MM/DD",
      periodStart: "YY/MM/DD",
      periodEnd: "YY/MM/DD",
      name: "상호명상호명상호명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
  ]);

  const [subMenuActive, setSubMenuActive] = useState(null);
  const [filterColor, setFilterColor] = useState(0);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table Manage-contents-table-gathering">
        <span>모임 관리</span>
        <div className="manage-table-container">
          <div className="Manage-gathering-filter">
            <a
              onClick={() => {
                setFilterColor(0);
                let gatheringCopy = [...gatheringData];
                setGatheringData(gatheringCopy);
              }}
              className={filterColor === 0 ? "filter-color" : null}
            >
              전체
            </a>
            <a
              onClick={() => {
                setFilterColor(1);
                let gatheringCopy = [...gatheringData];
                let newCopy = [];
                gatheringCopy.map((item, index) => {
                  if (item.state === "모집중") {
                    newCopy.push(item);
                  }
                  setGatheringData(newCopy);
                });
              }}
              className={filterColor === 1 ? "filter-color" : null}
            >
              모집중
            </a>
            <a>모집완료 (진행중)</a>
            <a>취소</a>
            <a>종료</a>
          </div>
          <div className="Manage-gathering-search-container">
            <div className="Manage-gathering-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-gathering-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <img src="\img\sidebar-plus-icon.svg" />
                <span>모임 추가</span>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-gathering">
            <table>
              <thead>
                <tr>
                  <th>상태</th>
                  <th>모임 제목</th>
                  <th>모임시작일</th>
                  <th>모집기간</th>
                  <th>상호명</th>
                  <th>담당자 휴대전화</th>
                  <th>삭제</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                {gatheringData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (subMenuActive === index) setSubMenuActive(null);
                            else setSubMenuActive(index);
                          }}
                        >
                          <span
                            className={
                              item.state === "취소" ? "toggled-text-red" : null
                            }
                          >
                            {item.state}
                          </span>
                          <img src="/img/table-togle.svg" />
                        </a>
                        {subMenuActive === index ? (
                          <ul className="table-sub-menu table-sub-menu-gathering">
                            <li
                              onClick={() => {
                                let gatheringCopy = [...gatheringData];
                                gatheringCopy[index].state = "종료";
                                setSubMenuActive(gatheringCopy);
                              }}
                            >
                              종료
                            </li>
                            <li
                              onClick={() => {
                                let gatheringCopy = [...gatheringData];
                                gatheringCopy[index].state = "모집중";
                                setSubMenuActive(gatheringCopy);
                              }}
                            >
                              모집중
                            </li>
                            <li
                              onClick={() => {
                                let gatheringCopy = [...gatheringData];
                                gatheringCopy[index].state = "모집완료";
                                setSubMenuActive(gatheringCopy);
                              }}
                            >
                              모집완료
                            </li>
                            <li
                              className="toggled-text-red"
                              onClick={() => {
                                let gatheringCopy = [...gatheringData];
                                gatheringCopy[index].state = "취소";
                                setSubMenuActive(gatheringCopy);
                              }}
                            >
                              취소
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>
                        <span>{item.title}</span>
                      </td>
                      <td>{item.date}</td>
                      <td>
                        {item.periodStart}
                        <br />~ {item.periodEnd}
                      </td>
                      <td>
                        <span>{item.name}</span>
                      </td>
                      <td>{item.tel}</td>
                      <td>
                        <a href={item.delLink}>삭제</a>
                      </td>
                      <td>
                        <a href={item.detailLink}>
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
        </div>
      </section>
    </div>
  );
};

export default ManageGathering;
