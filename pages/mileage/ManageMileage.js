import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/mileage/ManageMileage.css";
import "../../css/Manage.css";
const ManageMileage = () => {
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
          <div className="Manage-mileage-search-container">
            <div className="Manage-mileage-search-number">
              <span>전체 갯수</span>
              <span>000</span>
            </div>
            <div className="Manage-mileage-search">
              <div>
                <input
                  className="table-search-input"
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
              <div>
                <img src="img/see-more-btn-plus.svg" />
                <span>전체회원 마을리지 증감 설정</span>
              </div>
              <div>
                <img src="img/see-more-btn-plus.svg" />
                <span>개별회원 마을리지 증감 설정</span>
              </div>
              <div>
                <img src="img/see-more-btn-plus.svg" />
                <span>엑셀로 내보내기</span>
              </div>
            </div>
          </div>
          <div className="Manage-table manage-table-mileage">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>이메일</th>
                  <th>마을리지 내용</th>
                  <th>마을리지</th>
                  <th>마을리지합</th>
                  <th>일시</th>
                  <th>만료일</th>
                  <th>상세보기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" id="check1"></input>
                    <label htmlFor="check1"></label>
                  </td>
                  <td>이메일</td>
                  <td>
                    <span>결제 시 1% 적립결제 시 1% 적립결제 시 1% 적립</span>
                  </td>
                  <td>000000</td>
                  <td>000,000,000</td>
                  <td>
                    20nn-nn-nn
                    <br />
                    00:00:00
                  </td>
                  <td>20nn-nn-nn</td>
                  <td>
                    <a>
                      <img src="img/see-more-btn-plus.svg" />
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

export default ManageMileage;
