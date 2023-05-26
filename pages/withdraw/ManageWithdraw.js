import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/withdraw/ManageWithdraw.css";
const ManageWithdraw = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table">
        <span>탈퇴 회원 관리</span>
        <div className="manage-table-container">
          <div className="Manage-withdraw-search-container">
            <div className="Manage-withdraw-search-number">
              <span>탈퇴 회원 수</span>
              <span>000</span>
            </div>
            <div className="Manage-withdraw-search">
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
          <div className="Manage-table manage-table-withdraw">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>이메일</th>
                  <th>별명</th>
                  <th>탈퇴사유</th>
                  <th>탈퇴일</th>
                  <th>완전삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" id="check1"></input>
                    <label htmlFor="check1"></label>
                  </td>
                  <td>이메일</td>
                  <td>별명</td>
                  <td>
                    탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴사유탈퇴
                  </td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>완전삭제</a>
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

export default ManageWithdraw;
