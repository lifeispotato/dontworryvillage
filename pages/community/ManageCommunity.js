import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/community/ManageCommunity.css";
import "../../css/Manage.css";
const ManageCommunity = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table">
        <span>커뮤니티 관리</span>
        <div className="manage-table-container">
          <div className="Manage-community-search-container">
            <div className="Manage-community-search-number">
              <span>전체</span>
              <span>000</span>
            </div>
            <div className="Manage-community-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-community">
            <table>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>이메일</th>
                  <th>등록일자</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>숨김</a>
                  </td>
                </tr>
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

export default ManageCommunity;
