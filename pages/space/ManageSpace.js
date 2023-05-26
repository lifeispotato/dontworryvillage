import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/space/ManageSpace.css";
import "../../css/Manage.css";
const ManageSpace = () => {
  const [spaceData, setSpaceData] = useState([
    {
      spaceName: "공간명공간명공간명",
      state: "일반공간",
      nickname: "상호명상호명상호명",
      managerName: "담당자명",
      tel: "010-1234-1234",
      delLink: "#",
      detailLink: "#",
    },
  ]);
  const [subMenu, setSubMenu] = useState(null);
  const [spaceToggleText, setSpaceToggleText] = useState("일반공간");
  const [spaceToggleList, setSpaceToggleList] = useState([
    "일반공간",
    "협력공간",
  ]);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table">
        <span>공간 관리</span>
        <div className="manage-table-container">
          <div className="Manage-space-search-container">
            <div className="Manage-space-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-space-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <img src="img\see-more-btn-plus.svg" />
                <span>공간 추가</span>
              </div>
              <div>
                <img src="img\download.svg" />
                <span>엑셀로 내보내기</span>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-space">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>공간명</th>
                  <th>분류</th>
                  <th>상호명</th>
                  <th>담당자명</th>
                  <th>휴대전화</th>
                  <th>공간 삭제</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                {spaceData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" id={"check" + index}></input>
                        <label htmlFor={"check" + index}></label>
                      </td>
                      <td>
                        <span>{item.spaceName}</span>
                      </td>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (subMenu === index) {
                              setSubMenu(null);
                            } else {
                              setSubMenu(index);
                            }
                          }}
                        >
                          <span>{item.state}</span>
                          <img src="img\table-togle.svg" />
                        </a>
                        {subMenu === index ? (
                          <ul className="table-sub-menu">
                            <li
                              onClick={() => {
                                let copyData = [...spaceData];
                                copyData[index].state = "일반공간";
                                setSpaceData(copyData);
                                setSubMenu(null);
                              }}
                            >
                              일반공간
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...spaceData];
                                copyData[index].state = "협력공간";
                                setSpaceData(copyData);
                                setSubMenu(null);
                              }}
                            >
                              협력공간
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>
                        <span>{item.nickname}</span>
                      </td>
                      <td>{item.managerName}</td>
                      <td>{item.tel}</td>
                      <td>
                        <div>
                          <a href={item.delLink}>삭제</a>
                        </div>
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

export default ManageSpace;
