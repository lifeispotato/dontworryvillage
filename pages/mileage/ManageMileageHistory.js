import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/mileage/ManageMileageHistory.css";
const ManageMileageHistory = () => {
  return (
    <div className="Manage-container">
      <div className="Popup-container">
        <div className="Popup popup-mileage popup-mileage-history">
          <div className="Popup-title Popup-title-mileage-history">
            <span>“이메일명” 회원 포인트 내역</span>
          </div>
          <div className="mileage-popup-middle">
            <table className="manage-table-mileage-history">
              <thead>
                <tr>
                  <th>일시</th>
                  <th>내용</th>
                  <th>만료</th>
                  <th>지급포인트</th>
                  <th>사용포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>20nn-nn-nn nn:nn:nn</td>
                  <td>첫 결제 지급</td>
                  <td>20nn.nn.nn</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <div className="manage-table-pagenation-container manage-table-pagenation-container-mileage">
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
          <div className="mileage-popup-history-close">
            <a>닫기</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMileageHistory;
