import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/Manage.css";
import "../../css/space/ManageSpaceReview.css";
const ManageSpaceReview = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <div className="go-back-container-space-review">
          <div className="go-back">
            <a href="#">
              <img src="\img\chevron-left.svg" />
              <span>뒤로가기</span>
            </a>
          </div>
          <div>
            <a>숨김</a>
          </div>
        </div>
        <div className="Manage-form manage-form-gathering-review-see-more">
          <span>리뷰</span>
          <div className="Manage-form-view-details space-review-detail">
            <span>이메일</span>
            <span>mailto:ididididid@asd.com</span>
          </div>
          <div className="Manage-form-view-details space-review-detail">
            <span>별명</span>
            <span>별명별명별명별명별명</span>
          </div>
          <div className="Manage-form-view-details space-review-detail">
            <span>작성일자</span>
            <span>YYYY/MM/DD</span>
          </div>
          <div className="gathering-review-detail-img-container">
            <img src="img\Rectangle 4923 (1).png" />
            <img src="img\Rectangle 4923 (1).png" />
            <img src="img\Rectangle 4923 (1).png" />
            <img src="img\Rectangle 4923 (1).png" />
          </div>
          <div className="gathering-review-contents-container">
            <div className="gathering-review-scope-container">
              <img src="img\star-full.svg" />
              <img src="img\star-full.svg" />
              <img src="img\star-full.svg" />
              <img src="img\star-full.svg" />
              <img src="img\star-full.svg" />
              <span>리뷰4.0</span>
            </div>
            <span>
              여행할 만큼 해봤는데요... 괜찮아마을 갬성의 여행은 여기밖에
              없어요/// <br />
              뭐랄까 '나 자체 그대로' 온전히 존중받으면서도 '좋은사람들과 함께'
              하는 여행이고 <br />
              쉬는 듯하면서 자기성찰 하게 되는, <br />
              그리곤 돌아와서 잊을만 하면 에프터서비스가 '추억'으로 행복에 젖게
              하곤 합니다
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSpaceReview;
