import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/notice/ManageNotice.css";
import "../../css/Manage.css";
const ManageNotice = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents Manage-contents-table">
        <span>공지사항 관리</span>
        <div className="manage-table-container">
          <div className="Manage-notice-search-container">
            <div className="Manage-notice-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-notice-search">
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
          <div className="Manage-table manage-table-notice">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>제목</th>
                  <th>게시 관리자 이메일</th>
                  <th>게시일자</th>
                  <th>더보기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
                  <td>
                    <a>
                      <img src="\img\see-more-btn-plus.svg" />
                      <span>보기</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>
                    제목제목제목제목제목제목제목제목제목제목제목제목제목제목
                  </td>
                  <td>이메일이메일이메일</td>
                  <td>YYYY/MM/DD</td>
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

export default ManageNotice;
