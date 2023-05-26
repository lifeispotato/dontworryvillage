import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/spacesupport/ManageSpaceSupport.css";
const ManageSpaceSupport = () => {
  const [spaceSupportData, setSpaceSupportData] = useState([
    {
      no: 0,
      name: "이름이름이름",
      content: "제목제목제목제목제목제목제목",
      date: "YYYY/MM/DD",
      state: "처리",
      detailLink: "#",
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
      <section className="Manage-contents Manage-contents-table">
        <span>공간 지원 관리</span>
        <div className="manage-table-container">
          <div className="Manage-spacesupport-search-container">
            <div className="Manage-spacesupport-search-number">
              <span>전체</span>
              <span>000</span>
            </div>
            <div className="Manage-spacesupport-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <img src="\img\download.svg" />
                <span>엑셀로 내보내기</span>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-spacesupport">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>담당자 이름</th>
                  <th>제휴 내용</th>
                  <th>신청일</th>
                  <th>상태</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                {spaceSupportData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.no}</td>
                      <td>{item.name}</td>
                      <td>{item.content}</td>
                      <td>{item.date}</td>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (subMenuActive === index) setSubMenuActive(null);
                            else setSubMenuActive(index);
                          }}
                        >
                          <span>{item.state}</span>
                          <img src="img\table-togle.svg" />
                        </a>
                        {subMenuActive === index ? (
                          <ul className="table-sub-menu table-sub-menu-spacesupport">
                            <li
                              onClick={() => {
                                let copyData = [...spaceSupportData];
                                copyData[index].state = "처리";
                                setSpaceSupportData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              처리
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...spaceSupportData];
                                copyData[index].state = "미처리";
                                setSpaceSupportData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              미처리
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>
                        <a href={item.detailLink}>
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
        </div>
      </section>
    </div>
  );
};

export default ManageSpaceSupport;
