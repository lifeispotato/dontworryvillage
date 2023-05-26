import React, { useState } from "react";
import "../../css/permission/ManagePermissions.css";
import "../../css/Manage.css";
import Header from "../../components/Header.js";
import Sidebar from "../../components/Sidebar.js";

const ManagePermissions = () => {
  const [permissionsData, setPermissionData] = useState([
    {
      email: "이메일",
      name: "이름",
      joinDate: "YYYY/MM/DD",
      state: "비활성화",
      right: "MANAGER",
      createDate: "YYYY/MM/DD",
      delLink: "#",
      access: "승인하기",
      detailLink: "#",
    },
  ]);
  const [subMenuActive, setSubMenuActive] = useState(null);
  const [rightMenuActive, setRightMenuActive] = useState(null);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <span>관리자 권한 관리</span>
        <div className="manage-table-container">
          <div className="Manage-permissions-type">
            <a>전체</a>
            <a>ROOT</a>
            <a>ADMIN</a>
            <a>MANAGER</a>
          </div>
          <div className="Manage-permissions-search-container">
            <div className="Manage-permissions-search-number">
              <span>전체 이용자 수</span>
              <span>000</span>
            </div>
            <div className="Manage-permissions-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <img src="\img\sidebar-plus-icon.svg" />
                <span>추가하기</span>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-permissions">
            <table>
              <thead>
                <tr>
                  <th>이메일</th>
                  <th>이름</th>
                  <th>가입일</th>
                  <th>활성화</th>
                  <th>권한</th>
                  <th>생성일</th>
                  <th>삭제</th>
                  <th>승인/수정</th>
                </tr>
              </thead>
              <tbody>
                {permissionsData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.joinDate}</td>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (subMenuActive === index) {
                              setSubMenuActive(null);
                            } else {
                              setSubMenuActive(index);
                              setRightMenuActive(null);
                            }
                          }}
                        >
                          <span>{item.state}</span>
                          <img src="\img\table-togle.svg" />
                        </a>
                        {subMenuActive === index ? (
                          <ul className="table-sub-menu table-sub-menu-permissions">
                            <li
                              onClick={() => {
                                let copyData = [...permissionsData];
                                copyData[index].state = "활성화";
                                setPermissionData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              활성화
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...permissionsData];
                                copyData[index].state = "비활성화";
                                setPermissionData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              비활성화
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (rightMenuActive === index) {
                              setRightMenuActive(null);
                            } else {
                              setRightMenuActive(index);
                              setSubMenuActive(null);
                            }
                          }}
                        >
                          <span>{item.right}</span>
                          <img src="\img\table-togle.svg" />
                        </a>
                        {rightMenuActive === index ? (
                          <ul className="table-sub-menu table-sub-menu-right">
                            <li
                              onClick={() => {
                                let copyData = [...permissionsData];
                                copyData[index].right = "-";
                                setPermissionData(copyData);
                                setRightMenuActive(null);
                              }}
                            >
                              -
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...permissionsData];
                                copyData[index].right = "ROOT";
                                setPermissionData(copyData);
                                setRightMenuActive(null);
                              }}
                            >
                              ROOT
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...permissionsData];
                                copyData[index].right = "ADMIN";
                                setPermissionData(copyData);
                                setRightMenuActive(null);
                              }}
                            >
                              ADMIN
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...permissionsData];
                                copyData[index].right = "MANAGER";
                                setPermissionData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              MANAGER
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>{item.createDate}</td>
                      <td>
                        <a href={item.delLink}>삭제</a>
                      </td>
                      <td>
                        <a href={item.detailLink}>
                          <span>{item.access}</span>
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

export default ManagePermissions;
