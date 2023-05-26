import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/gathering/ManageGatheringSeeMore.css";
import "../../css/Manage.css";
const ManageGatheringSeeMore = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-gathering-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>삭제</a>
          </div>
        </div>
        <div className="gathering-seemore-menu-container">
          <a>기본정보 및 소개</a>
          <a>일정</a>
          <a>공지</a>
          <a>프로그램 리뷰</a>
          <a>문의</a>
        </div>
        <div className="Manage-form manage-form-gathering-see-more">
          <div>
            <span>기본정보</span>
            <a>수정하기</a>
          </div>
          <div className="Manage-form-view-details">
            <span>등록 관리자 이메일</span>
            <span>123@123.com</span>
          </div>
          <div className="Manage-form-view-details">
            <span>공간명</span>
            <span>공간명</span>
          </div>
          <div className="Manage-form-view-details">
            <span>상태</span>
            <span>모집중</span>
          </div>
          <div className="Manage-form-view-details">
            <span>카테고리</span>
            <span>모임 카테고리</span>
          </div>
          <div className="Manage-form-view-details">
            <span>일시</span>
            <span>23.00.00 PM 00 / 0박 0일</span>
          </div>
          <div className="Manage-form-view-details">
            <span>모집인원</span>
            <span>N명/N명</span>
          </div>
          <div className="Manage-form-view-details">
            <span>모집기간</span>
            <span>2000.00.00~2000.00.00</span>
          </div>
          <div className="Manage-form-view-details">
            <span>프로그램</span>
            <span>첫번째 프로그램 명 외 N개</span>
          </div>
          <div className="Manage-form-view-details manage-flex-start">
            <span>상세소개</span>
            <span>
              상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            </span>
          </div>
          <div className="Manage-form-view-details">
            <span>서브 카테고리(태그)</span>
            <span>아웃도어, 서핑</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-gathering-seemore manage-flex-start">
            <span>
              이미지
              <br />
              (*최대 5장)
            </span>
            <div className="Manage-form-view-details-img Manage-form-view-details-img-gathering">
              <div>
                <img src="\img\Rectangle.svg" />
              </div>
              <div>
                <span>파일명.확장자명</span>
                <img src="\img\download_black.svg" />
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details">
            <span>가격</span>
            <span>100,000(10%)</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-lastchild manage-flex-start">
            <span>상품약관</span>
            <span>
              상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명상세설명
            </span>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-see-more-comment">
          <span>등록된 프로그램</span>
          <table>
            <thead>
              <tr>
                <th>프로그램명</th>
                <th>리뷰작성</th>
                <th>삭제</th>
                <th>상세보기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>
                    프로그램명프로그램명프로그램명프로그램명프로그램명프로그램명프로그램명프로그램명
                  </span>
                </td>
                <td>O</td>
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
        <div className="Manage-form manage-form-gathering-see-more-list">
          <span>참여자 리스트 (N명/N명)</span>
          <table>
            <thead>
              <tr>
                <th>별명</th>
                <th>게시일자</th>
                <th>결제금액</th>
                <th>삭제</th>
                <th>결제내역</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>
                    별명별명별명별명별명별명&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;별명별명별명별명별명별명
                  </span>
                </td>
                <td>YYYY/MM/DD</td>
                <td>100,000원</td>
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
      </section>
    </div>
  );
};

export default ManageGatheringSeeMore;
