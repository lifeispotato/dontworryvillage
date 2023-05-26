import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/generalmember/ManageGeneralMember.css";
import "../../css/Manage.css";
const ManageGeneralMember = () => {
  const [memberData, setMemberData] = useState([
    {
      email: "이메일",
      name: "이름",
      nickname: "별명별명별명",
      date: "YYYY/MM/DD",
      state: "활성",
      delLink: "#",
      detailLink: "#",
    },
  ]);
  const [accountActive, setAccountActive] = useState(null);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table">
        <span>일반회원 관리</span>
        <div className="manage-table-container">
          <div className="Manage-general-member-search-container">
            <div className="Manage-general-member-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-general-member-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <a href="#">
                  <span>삭제</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span>문자 보내기</span>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="img\download.svg" />
                  <span>엑셀로 내보내기</span>
                </a>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-general-member">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>이메일</th>
                  <th>이름</th>
                  <th>별명</th>
                  <th>가입일</th>
                  <th>계정 상태</th>
                  <th>계정 삭제</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                {memberData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" id="check1"></input>
                        <label htmlFor="check1"></label>
                      </td>
                      <td>{item.email}</td>
                      <td>
                        <span>{item.name}</span>
                      </td>
                      <td>
                        <span>{item.nickname}</span>
                      </td>
                      <td>{item.date}</td>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (accountActive === index) {
                              setAccountActive(null);
                            } else {
                              setAccountActive(index);
                            }
                          }}
                        >
                          <span>{item.state}</span>
                          <img src="img\table-togle.svg" />
                        </a>
                        {accountActive === index ? (
                          <ul className="table-sub-menu">
                            <li
                              onClick={() => {
                                let copyData = [...memberData];
                                copyData[index].state = "활성";
                                setMemberData(copyData);
                                setAccountActive(null);
                              }}
                            >
                              활성
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...memberData];
                                copyData[index].state = "비활성";
                                setMemberData(copyData);
                                setAccountActive(null);
                              }}
                            >
                              비활성
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>
                        <div>
                          <a href={item.delLink}>삭제</a>
                        </div>
                      </td>
                      <td>
                        <a href={item.detailLink}>
                          <img src="img/see-more-btn-plus.svg" />
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

export default ManageGeneralMember;
