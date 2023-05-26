import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/program/ManageProgram.css";
import "../../css/Manage.css";
const ManageProgram = () => {
  const [programData, setProgramDate] = useState([
    {
      state: "종료",
      name: "프로그램명 프로그램명프로그램명프로그램명프로그램명",
      time: "0시간",
      manager: "등록관리자이메일",
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
      <section className="Manage-contents Manage-contents-table Manage-contents-table-program">
        <span>프로그램 관리</span>
        <div className="manage-table-container">
          <div className="Manage-program-filter">
            <a>전체</a>
            <a>일반</a>
            <a>종료</a>
          </div>
          <div className="Manage-program-search-container">
            <div className="Manage-program-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-program-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <img src="\img\sidebar-plus-icon.svg" />
                <span>프로그램 추가</span>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-program">
            <table>
              <thead>
                <tr>
                  <th>상태</th>
                  <th>프로그램명</th>
                  <th>소요시간</th>
                  <th>등록 관리자</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                {programData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (subMenuActive === index) setSubMenuActive(null);
                            else setSubMenuActive(index);
                          }}
                        >
                          <span>{item.state}</span>
                          <img src="/img/table-togle.svg" />
                        </a>
                        {subMenuActive === index ? (
                          <ul className="table-sub-menu table-sub-menu-program">
                            <li
                              onClick={() => {
                                let copyData = [...programData];
                                copyData[index].state = "일반";
                                setProgramDate(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              일반
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...programData];
                                copyData[index].state = "종료";
                                setProgramDate(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              종료
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>
                        <span>{item.name}</span>
                      </td>
                      <td>{item.time}</td>
                      <td>{item.manager}</td>
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

export default ManageProgram;
