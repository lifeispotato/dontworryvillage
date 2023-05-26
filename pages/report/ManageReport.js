import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/report/ManageReport.css";
import "../../css/Manage.css";
const ManageReport = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table">
        <span>신고 관리</span>
        <div className="manage-table-container">
          <div className="Manage-report-search-container">
            <div className="Manage-report-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-report-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-report">
            <table>
              <thead>
                <tr>
                  <th>유형</th>
                  <th>신고사유</th>
                  <th>신고콘텐츠 내용</th>
                  <th>신고자 이메일</th>
                  <th>신고일자</th>
                  <th>삭제</th>
                  <th>더보기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>게시글</td>
                  <td>주제와 맞지 않는 글입니다</td>
                  <td>게시글 제목 또는 댓글 내용이들dddddd...</td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>삭제</a>
                  </td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
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

export default ManageReport;
