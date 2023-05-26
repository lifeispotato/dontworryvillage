import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/faq/ManageFaq.css";
import "../../css/Manage.css";

const ManageFaq = () => {
  const [faqData, setFaqData] = useState([
    {
      catagory: "이용안내",
      title: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
      date: "YYYY/MM/DD",
      state: "활성",
      delLink: "#",
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
      <section className="Manage-contents">
        <div className="Manage-faq-catagory">
          <a>faq 관리</a>
          <a>카테고리 관리</a>
        </div>
        <span>FAQ 관리</span>
        <div className="manage-table-container">
          <div className="Manage-faq-type">
            <a>전체</a>
            <a>이용안내</a>
            <a>회원정보</a>
            <a>결제·환불</a>
            <a>환불완료</a>
            <a>마을리지 사용</a>
            <a>기타</a>
          </div>
          <div className="Manage-faq-search-container">
            <div className="Manage-faq-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-faq-search">
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
          <div className="Manage-table manage-table-faq">
            <table>
              <thead>
                <tr>
                  <th>카테고리</th>
                  <th>제목</th>
                  <th>등록일자</th>
                  <th>상태</th>
                  <th>삭제</th>
                  <th>더보기</th>
                </tr>
              </thead>
              <tbody>
                {faqData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.catagory}</td>
                      <td>{item.title}</td>
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
                          <ul className="table-sub-menu table-sub-menu-faq">
                            <li
                              onClick={() => {
                                let copyData = [...faqData];
                                copyData[index].state = "활성";
                                setFaqData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              활성
                            </li>
                            <li
                              onClick={() => {
                                let copyData = [...faqData];
                                copyData[index].state = "비활성";
                                setFaqData(copyData);
                                setSubMenuActive(null);
                              }}
                            >
                              비활성
                            </li>
                          </ul>
                        ) : null}
                      </td>
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

export default ManageFaq;
