import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/main/ManageMain.css";
const ManageMain = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="manage-main-container">
          <span>Welcome!</span>
          <div className="main-greetings">
            <h1>안녕하세요. 관리자님 :)</h1>
            <div className="main-user-count-container">
              <div className="all-user-count-container">
                <span>전체 이용자 수</span>
                <span>000명</span>
              </div>
              <div className="main-registration-secession">
                <span>회원(가입/탈퇴)</span>
                <span>000/000</span>
              </div>
            </div>
          </div>
          <div className="main-visitant-graph-container">
            <span>방문자 통계</span>
            <div className="main-graph-container">
              <div className="graph-chevron-left">
                <img src="img\chevron-left.svg" />
              </div>
              <div className="main-visitant-graph">
                <div className="graph-axis-wrap">
                  <div>
                    <span>15</span>
                    <div className="graph-axis-line"></div>
                  </div>
                  <div>
                    <span>10</span>
                    <div className="graph-axis-line"></div>
                  </div>
                  <div>
                    <span>5</span>
                    <div className="graph-axis-line"></div>
                  </div>
                  <div>
                    <span>0</span>
                    <div className="graph-axis-line"></div>
                  </div>
                </div>
                <div className="graph-bar-wrap">
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                  <div className="graph-bar-value">
                    <span>10</span>
                    <div>
                      <div className="graph-bar"></div>
                    </div>
                    <span>mm/dd</span>
                  </div>
                </div>
              </div>
              <div className="graph-chevron-right">
                <img src="img\chevron-right.svg" />
              </div>
            </div>
          </div>
          <div className="main-quick-menu">
            <span>퀵메뉴</span>
            <div className="main-quick-menu-list">
              <div className="main-quick-menu-container">
                <span>사용자관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div className="main-quick-menu-container">
                <span>사용자관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div className="main-quick-menu-container">
                <span>사용자관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div className="main-quick-menu-container">
                <span>사용자관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div className="main-quick-menu-container">
                <span>사용자관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="img\quick-menu-arrow.svg" />
                </div>
              </div>
              <div className="main-quick-menu-container">
                <span>사용자관리</span>
                <div>
                  <span>일반 회원 관리</span>
                  <img src="img\quick-menu-arrow.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageMain;
