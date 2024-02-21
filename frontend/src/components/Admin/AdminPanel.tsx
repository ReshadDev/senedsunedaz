import React from "react";
import AdminSearchInput from "../AdminSearchInput";
import { Plus, User } from "../../assets/icons";

const AdminPanel: React.FC = () => {
  const data = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div id="adminpanel">
      <div className="left-sidebar">
        <div className="container">
          <div className="left-sidebar-content">
            <h2>AdminPanel</h2>

            <div className="list">
              <a href="">Erizeler</a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-sidebar">
        <div className="right-sidebar-content">
          <div className="top__bar">
            <div className="search-bar">
              <AdminSearchInput />
            </div>

            <div className="admin-bar">
              <img src={User} alt="" />
              <p>Admin</p>
            </div>
          </div>

          <div className="action-bar">
            <a className="upload-btn">
              <img src={Plus} alt="" />
              Ərizə yüklə
            </a>
          </div>

          <div className="all-erizeler-content-box">
            <div className="erizeler-list-box col-12">
              <div className="box__heading">
                <p>Ailə</p>
              </div>
              <div className="box__body">
                {data.map((item) => (
                  <div key={item} className="erize-box col-12">
                    <div className="erize-box__text-box">
                      <p>
                        Vergi ödəyicisinin filialının, numayəndəliyinin və
                        təsərrüfat subyektinin (obyektinin) olduğu yer üzrə
                        uçota alınması haqqında arayış
                      </p>
                    </div>
                    <div className="erize-box__buttons-box">
                      <a className="box-details-btn btn">Ətraflı</a>
                      <a className="download-btn btn">Yüklə</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
