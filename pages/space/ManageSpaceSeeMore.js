import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/space/ManageSpaceSeeMore.css";
const ManageSpaceSeeMore = () => {
  const [gatheringList, setGatheringList] = useState([
    {
      title: "모임제목모임제목모임제목모임제목모임제목모임제목",
      date: "YYYY/MM/DD",
      state: "모집취소",
      detailLink: "#",
    },
  ]);
  const [reviewList, setReviewList] = useState([
    {
      email: "ididididid@asd.com",
      nickname: "모임제목모임제목모임제목모임제목모임제목모임제목",
      date: "YYYY/MM/DD",
      mark: "4.0",
      state: "일반",
      detailLink: "#",
    },
  ]);
  const [subMenu, setSubMenu] = useState(null);
  const [reviewSubMenu, setReviewSubMenu] = useState(null);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-space-seemore">
          <div className="go-back">
            <a>
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>삭제</a>
            <a>수정하기</a>
          </div>
        </div>
        <div className="Manage-form manage-form-space-see-more">
          <span>기본정보</span>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>등록관리자</span>
            <span>등록관리자 이메일</span>
          </div>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>공간명</span>
            <span>공간명공간명공간명공간명공간명공간명</span>
          </div>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>휴대전화</span>
            <span>010-0000-0000</span>
          </div>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>이메일</span>
            <span>이메일@com</span>
          </div>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>상호(기업)명</span>
            <span>기업명</span>
          </div>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>통장사본</span>
            <div className="space-member-file-name">
              <a href="#" download>
                <span>파일명.확장자명</span>
                <img src="img\download_black.svg" />
              </a>
            </div>
          </div>
          <div className="Manage-form-view-details-space Manage-form-view-details-space-seemore">
            <span>신분증(*개인)</span>
            <div className="space-member-file-name">
              <a href="#" download>
                <span>파일명.확장자명</span>
                <img src="img\download_black.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="Manage-form manage-form-space-see-more">
          <span>프로필 관리</span>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore">
            <span>카테고리</span>
            <span>카페·제과</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore manage-flex-start">
            <span>프로필 이미지</span>
            <div className="Manage-form-view-details-img Manage-form-view-details-img-space">
              <div>
                <img src="\img\Rectangle.svg" />
              </div>
              <div>
                <a href="#" download>
                  <span>asdfadfasdasdfsadff.jpg</span>
                  <img src="\img\download_black.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore manage-flex-start">
            <span>배경 이미지</span>
            <div className="Manage-form-view-details-img Manage-form-view-details-img-space">
              <div>
                <img src="\img\Rectangle.svg" />
              </div>
              <div>
                <a href="#" download>
                  <span>파일명.확장자명</span>
                  <img src="\img\download_black.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore manage-flex-start">
            <span>공간 소개글</span>
            <span>
              길이는 띄어쓰기 포함해서 200자 이내로 작성되어야 합니다. 길이는
              띄어쓰기 포함해서 200자 이내로 작성되어야 합니다. 길이는 띄어쓰기
              포함해서 200자 이내로 작성되어야 합니다. 길이는 띄어쓰기 포함해서
              200자 이내로 작성되어야 합니다. 길이는 띄어쓰기 포함해서 200자
              이내로 작성되어야 합니다.
            </span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore">
            <span>운영시간</span>
            <span>운영시간 자유양식</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore">
            <span>주소</span>
            <span>주소주소주소주소</span>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore">
            <span>연락처</span>
            <span>010-0000-0000</span>
          </div>
        </div>
        <div className="Manage-form manage-form-space-see-more">
          <span>상세설명</span>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore manage-flex-start">
            <span>대표 이미지</span>
            <div className="Manage-form-view-details-img Manage-form-view-details-img-space">
              <div>
                <img src="\img\Rectangle.svg" />
              </div>
              <div>
                <a href="#" download>
                  <span>aslkdfjhasdlkfjhasdfkljashdfkj.확장자명</span>
                  <img src="\img\download_black.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore manage-flex-start">
            <span>
              상세이미지
              <br />
              (*최대 5장)
            </span>
            <div className="Manage-form-view-details-img Manage-form-view-details-img-space">
              <div className="space-detail-img-container">
                <div className="space-detail-img">
                  <img src="\img\Rectangle.svg" />
                  <div>
                    <a href="#" download>
                      <span>파일명.확장자명</span>
                      <img src="\img\download_black.svg" />
                    </a>
                  </div>
                </div>
                <div className="space-detail-img">
                  <img src="\img\Rectangle.svg" />
                  <div>
                    <a href="#" download>
                      <span>파일명.확장자명</span>
                      <img src="\img\download_black.svg" />
                    </a>
                  </div>
                </div>
                <div className="space-detail-img">
                  <img src="\img\Rectangle.svg" />
                  <div>
                    <a href="#" download>
                      <span>파일명.확장자명</span>
                      <img src="\img\download_black.svg" />
                    </a>
                  </div>
                </div>
                <div className="space-detail-img">
                  <img src="\img\Rectangle.svg" />
                  <div>
                    <a href="#" download>
                      <span>파일명.확장자명</span>
                      <img src="\img\download_black.svg" />
                    </a>
                  </div>
                </div>
                <div className="space-detail-img">
                  <img src="\img\Rectangle.svg" />
                  <div>
                    <a href="#" download>
                      <span>파일명.확장자명</span>
                      <img src="\img\download_black.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Manage-form-view-details Manage-form-view-details-space-seemore manage-flex-start">
            <span>상세설명</span>
            <span>
              길이는 띄어쓰기 포함해서 200자 이내로 작성되어야 합니다. 길이는
              띄어쓰기 포함해서 200자 이내로 작성되어야 합니다. 길이는 띄어쓰기
              포함해서 200자 이내로 작성되어야 합니다. 길이는 띄어쓰기 포함해서
              200자 이내로 작성되어야 합니다. 길이는 띄어쓰기 포함해서 200자
              이내로 작성되어야 합니다.
            </span>
          </div>
        </div>
        <div className="Manage-form manage-form-space-see-more space-see-more-gathering-list">
          <div>
            <span>모임 리스트</span>
            <span>00개</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>모임제목</th>
                <th>모임 시작일</th>
                <th>상태</th>
                <th>상세보기</th>
              </tr>
            </thead>
            <tbody>
              {gatheringList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <span>{item.title}</span>
                    </td>
                    <td>{item.date}</td>
                    <td className="table-sub-catagory-container">
                      <a
                        onClick={() => {
                          if (subMenu === index) {
                            setSubMenu(null);
                          } else {
                            setSubMenu(index);
                          }
                        }}
                      >
                        <span
                          className={
                            item.state === "모집취소"
                              ? "toggled-text-red"
                              : null
                          }
                        >
                          {item.state}
                        </span>
                        <img src="img\table-togle.svg" />
                      </a>
                      {subMenu === index ? (
                        <ul className="table-sub-menu">
                          <li
                            onClick={() => {
                              let copyData = [...gatheringList];
                              copyData[index].state = "모집중";
                              setGatheringList(copyData);
                              setSubMenu(null);
                            }}
                          >
                            모집중
                          </li>
                          <li
                            onClick={() => {
                              let copyData = [...gatheringList];
                              copyData[index].state = "종료";
                              setGatheringList(copyData);
                              setSubMenu(null);
                            }}
                          >
                            종료
                          </li>
                          <li
                            className="toggled-text-red"
                            onClick={() => {
                              let copyData = [...gatheringList];
                              copyData[index].state = "모집취소";
                              setGatheringList(copyData);
                              setSubMenu(null);
                            }}
                          >
                            모집취소
                          </li>
                        </ul>
                      ) : null}
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
        <div className="Manage-form manage-form-space-see-more space-see-more-review">
          <div>
            <span>리뷰 관리</span>
            <span>00개</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>이메일</th>
                <th>별명</th>
                <th>작성일자</th>
                <th>평점</th>
                <th>리뷰 상태</th>
                <th>상세보기</th>
              </tr>
            </thead>
            <tbody>
              {reviewList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>
                      <span>{item.nickname}</span>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.mark}</td>
                    <td className="table-sub-catagory-container">
                      <a
                        onClick={() => {
                          if (reviewSubMenu === index) {
                            setReviewSubMenu(null);
                          } else {
                            setReviewSubMenu(index);
                          }
                        }}
                      >
                        <span>{item.state}</span>
                        <img src="img\table-togle.svg" />
                      </a>
                      {reviewSubMenu === index ? (
                        <ul className="table-sub-menu">
                          <li
                            onClick={() => {
                              let copyData = [...reviewList];
                              copyData[index].state = "일반";
                              setReviewList(copyData);
                              setReviewSubMenu(null);
                            }}
                          >
                            일반
                          </li>
                          <li
                            onClick={() => {
                              let copyData = [...reviewList];
                              copyData[index].state = "숨김";
                              setReviewList(copyData);
                              setReviewSubMenu(null);
                            }}
                          >
                            숨김
                          </li>
                        </ul>
                      ) : null}
                    </td>
                    <td>
                      <a>
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
      </section>
    </div>
  );
};

export default ManageSpaceSeeMore;
