import React from "react";

import SearchInput from "../components/SearchInput";

const CategoryErizeler: React.FC = () => {
  const data = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="all-erizeler">
      <main id="maincontent" className="content">
        <div className="container">
          <div className="all-erizeler-content">
            <div className="container">
              <div className="all-erizeler-search-box">
                <div className="all-erizeler-input-box">
                  <SearchInput />
                </div>
              </div>
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
      </main>
    </div>
  );
};

export default CategoryErizeler;