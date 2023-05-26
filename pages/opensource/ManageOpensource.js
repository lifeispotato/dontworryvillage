import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "../../css/opensource/ManageOpensource.css";
import "../../css/Manage.css";

const ManageOpensource = () => {
  return (
    <div className="Manage-container">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <section className="Manage-contents">
        <span>오픈소스</span>
        <div className="Manage-form manage-form-opensource">
          <div>
            <span>오픈소스</span>
            <img src="img/table-toggle-up.svg" />
          </div>
          <div>
            <textarea className="Manage-form-textarea"></textarea>
          </div>
          <div className="Manage-form-save Manage-form-save-opensource">
            <button>저장하기</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageOpensource;
