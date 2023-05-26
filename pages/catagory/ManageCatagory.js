import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/catagory/ManageCatagory.css";
import "../../css/Manage.css";

const ManageCatagory = () => {
  const [catagoryData, setCatagoryData] = useState([
    {
      name: "카테고리명카테고리명카테고리명카테고리명카테고리명카테고리명",
      date: "YYYY/MM/DD",
      state: "활성",
      modifyLink: "#",
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
        <div className="Manage-faq-catagory">
          <a>faq 관리</a>
          <a>카테고리 관리</a>
        </div>
        <span>카테고리 관리</span>
        <div className="manage-table-container">
          <div className="Manage-catagory-search-container">
            <div className="Manage-catagory-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-catagory-search">
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
          <div className="Manage-table manage-table-catagory">
            <table>
              <thead>
                <tr>
                  <th>카테고리명</th>
                  <th>등록일자</th>
                  <th>상태</th>
                  <th>더보기</th>
                </tr>
              </thead>
              <tbody>
                {catagoryData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td className="table-sub-catagory-container">
                        <a
                          onClick={() => {
                            if (subMenuActive === index) setSubMenuActive(null);
                            else setSubMenuActive(index);
                          }}
                        >
                          <span>{item.state}</span>
                          <img src="\img\table-togle.svg" />
                        </a>
                        {subMenuActive === index ? (
                          <ul className="table-sub-menu table-sub-menu-catagory">
                            <li
                              onClick={() => {
                                let copyData = [...catagoryData];
                                copyData[index].state = "활성";
                                setCatagoryData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              활성
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...catagoryData];
                                copyData[index].state = "비활성";
                                setCatagoryData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              비활성
                            </li>
                          </ul>
                        ) : null}
                      </td>
                      <td>
                        <a href={item.modifyLink}>수정</a>
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

export default ManageCatagory;
