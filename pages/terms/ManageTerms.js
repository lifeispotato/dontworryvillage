import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/terms/ManageTerms.css";
import "../../css/Manage.css";

const ManageTerms = () => {
  const [termsOpen, setTermsOpen] = useState(null);

  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <span>약관 수정하기</span>
        <div
          onClick={() => {
            if (termsOpen === 1) setTermsOpen(null);
            else setTermsOpen(1);
          }}
          className={
            "Manage-form" +
            " manage-form-terms" +
            (termsOpen === 1 ? "" : " manage-form-terms-close")
          }
        >
          <div>
            <span>(필수) 괜찮아마을 이용약관 동의</span>
            <a>
              {termsOpen !== 1 ? (
                <img src="img/table-togle.svg" />
              ) : (
                <img src="img/table-toggle-up.svg" />
              )}
            </a>
          </div>
          {termsOpen !== 1 ? null : (
            <>
              <div className="Manage-form-textarea-wrap">
                <textarea className="Manage-form-textarea"></textarea>
              </div>
              <div className="Manage-form-save Manage-form-save-terms">
                <button>저장하기</button>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => {
            if (termsOpen === 2) setTermsOpen(null);
            else setTermsOpen(2);
          }}
          className={
            "Manage-form" +
            " manage-form-terms" +
            (termsOpen === 2 ? "" : " manage-form-terms-close")
          }
        >
          <div>
            <span>(필수) 개인정보수집 및 이용 동의</span>
            <a>
              {termsOpen !== 2 ? (
                <img src="img/table-toggle-up.svg" />
              ) : (
                <img src="img/table-togle.svg" />
              )}
            </a>
          </div>
          {termsOpen !== 2 ? null : (
            <>
              <div className="Manage-form-textarea-wrap">
                <textarea className="Manage-form-textarea"></textarea>
              </div>
              <div className="Manage-form-save Manage-form-save-terms">
                <button>저장하기</button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ManageTerms;
