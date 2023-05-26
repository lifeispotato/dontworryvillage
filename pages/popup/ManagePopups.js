import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/popup/ManagePopups.css";
import "../../css/Manage.css";

const ManagePopups = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <span>팝업 관리</span>
        <div className="manage-table-container">
          <div className="manage-add-popups">
            <div>
              <span>전체 팝업 수</span>
              <span>000</span>
            </div>
            <button>
              <img src="\img\sidebar-plus-icon.svg" />
              <span>추가하기</span>
            </button>
          </div>
        </div>
        <div className="Manage-table manage-table-popups">
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>등록일자</th>
                <th>삭제</th>
                <th>수정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
                </td>
              </tr>
              <tr>
                <td>
                  제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                </td>
                <td>YYYY/MM/DD</td>
                <td>
                  <a>삭제</a>
                </td>
                <td>
                  <a>수정</a>
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
      </section>
    </div>
  );
};

export default ManagePopups;
