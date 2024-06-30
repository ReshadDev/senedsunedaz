import React from "react";
import { getDegreeName, getLanguageName, getLevelName } from "../../constants";

const template1 = {
  page: {
    padding: "20px",
    fontFamily: "Roboto",
  },
  header: {
    backgroundColor: "#004080",
    color: "#ffffff",
    padding: "10px",
    marginBottom: "20px",
    fontFamily: "Roboto",
    fontSize: "20px",
  },
  section: {
    marginBottom: "20px",
    fontFamily: "Roboto",
  },
  sectionHeader: {
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#004080",
    borderBottom: "1px solid #004080",
    paddingBottom: "5px",
  },
  bodyText: {
    fontFamily: "Roboto",
    fontSize: "12px",
  },
  listItem: {
    paddingLeft: "10px",
    fontFamily: "Roboto",
    marginBottom: "5px",
  },
};

interface CVContentProps {
  certificateCount: number;
  experienceCount: number;
  languageCount: number;
  schoolCount: number;
  hobbyCount: number;
  id: number | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: any;
  isExperienceCheckboxChecked: boolean[];
  isSchoolCheckboxChecked: boolean[];
}

const CVDynamicContent: React.FC<CVContentProps> = ({
  certificateCount,
  experienceCount,
  languageCount,
  schoolCount,
  hobbyCount,
  watch,
  isExperienceCheckboxChecked,
  isSchoolCheckboxChecked,
  id,
}) => {
  const dutyname = watch(`dutyname0`);
  const profession = watch(`profession0`);
  const language = watch(`language-0`);
  const certificate = watch(`certificate-0`);
  const hobby = watch(`hobby-0`);

  const styles = id === 1 ? template1 : template1;
  const prefix = watch("prefix", "55"); // Default to '55' if not selected
  const phoneNumber = watch("phoneNumber", "");

  return (
    <>
      {id === 1 && (
        <div style={styles.page}>
          {/* Header */}
          <div style={styles.header}>
            <strong>
              {watch("name")} {watch("surname")}
            </strong>
            <div>{watch("dutyname-0")}</div>
          </div>

          {/* Personal Information */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>Şəxsi məlumatlar</div>
            <div>
              <div style={styles.bodyText}>Email: {watch("email")}</div>
              <div style={styles.bodyText}>
                Phone: +994{prefix}
                {phoneNumber}
              </div>
              <div style={styles.bodyText}>
                Linkedin:{" "}
                <a href={watch("linkedinProfile")}>
                  {watch("linkedinProfile")}
                </a>
              </div>
              <div style={styles.bodyText}>Country: {watch("country")}</div>
              <div style={styles.bodyText}>City: {watch("city")}</div>
            </div>
          </div>

          {/* Education */}
          {profession.trim() && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>Təhsil</div>
              {Array.from({ length: schoolCount }).map((_, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <strong style={{ fontSize: "14px" }}>
                    {getDegreeName(watch(`eduType${index}`))} of{" "}
                    {watch(`profession${index}`)}
                  </strong>
                  <div style={styles.bodyText}>
                    Institution: {watch(`university${index}`)}
                  </div>
                  <div style={styles.bodyText}>
                    {watch(`eduStartDate${index}`)} -{" "}
                    {isSchoolCheckboxChecked[index]
                      ? "Davam edir"
                      : watch(`eduEndDate${index}`)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {dutyname.trim() && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>İş təcrübəsi</div>
              {Array.from({ length: experienceCount }).map((_, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <strong style={{ fontSize: "14px" }}>
                    {watch(`dutyname${index}`)}
                  </strong>
                  <div style={styles.bodyText}>{watch(`work${index}`)}</div>
                  <div style={styles.bodyText}>
                    {watch(`workStartDate${index}`)} -{" "}
                    {isExperienceCheckboxChecked[index]
                      ? "Davam edir"
                      : watch(`workEndDate${index}`)}
                  </div>
                  <div>
                    <strong style={{ fontSize: "12px" }}>
                      Job Description:
                    </strong>
                    <div style={styles.bodyText}>
                      {watch(`jobDescription-${index}`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Language */}
          {language.trim() && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>Dil bilikləri </div>
              {Array.from({ length: languageCount }).map((_, index) => (
                <div key={index} style={styles.bodyText}>
                  {getLanguageName(watch(`language-${index}`))} (
                  {getLevelName(watch(`level-${index}`))})
                </div>
              ))}
            </div>
          )}

          {/* Certificate */}
          {certificate.trim() && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>Sertifikatlar</div>
              {Array.from({ length: certificateCount }).map((_, index) => (
                <a key={index} href={watch(`certificate-${index}`)}>
                  {watch(`certificate-${index}`)}
                </a>
              ))}
            </div>
          )}

          {/* Hobby */}
          {hobby.trim() && (
            <div style={styles.section}>
              <div style={styles.sectionHeader}>Hobbilər</div>
              <div style={styles.bodyText}>{watch(`hobby`)}</div>
              {Array.from({ length: hobbyCount }).map((_, index) => (
                <div key={index} style={styles.bodyText}>
                  {watch(`hobby-${index}`)}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {id === 2 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#000000",
              marginBottom: "10px",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <strong style={{ fontSize: "20px" }}>Rashad</strong>
            <strong style={{ fontSize: "30px" }}>Garayev</strong>
          </div>

          {/* Border Bottom */}
          <div
            style={{
              height: "30px",
              background: "#31859b",
              width: "100%",
              marginBottom: "10px",
            }}
          ></div>

          {/* Main Board */}
          <div style={{ display: "flex" }}>
            {/* LEFT side */}
            <div
              className="left-side"
              style={{ width: "40%", background: "#f5fafa" }}
            >
              {/* Personal Information */}
              <div style={{ width: "80%",margin:"0 auto" }}>
                <strong style={{ color: "#000000", fontSize: "20px" }}>
                  {" "}
                  Şəxsi məlumatlar
                </strong>

                <div
                  style={{
                    height: "3px",
                    background: "#31859b",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                ></div>

                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-regular fa-envelope"
                  ></i>{" "}
                  {watch("email")}
                </div>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-solid fa-phone"
                  ></i>{" "}
                  +994{prefix}
                  {phoneNumber}
                </div>

                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-solid fa-location-dot"
                  ></i>{" "}
                  {watch("country")}
                  {watch("city")}
                </div>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-brands fa-linkedin"
                  ></i>{" "}
                  {watch("linkedinProfile")}
                </div>

                {/* About Information */}

                <strong style={{ color: "#000000", fontSize: "20px" }}>
                  Haqqında qisa icmal
                </strong>
                <div
                  style={{
                    height: "3px",
                    background: "#31859b",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                ></div>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  {watch("aboutMe")}
                </div>

                {/* Lang */}
                {language.trim() && (
                  <div style={{ marginBottom: "20px" }}>
                    <strong style={{ color: "#000000", fontSize: "20px" }}>
                      Dil bilikləri
                    </strong>
                    <div
                      style={{
                        height: "3px",
                        background: "#31859b",
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    ></div>
                    {Array.from({ length: languageCount }).map((_, index) => (
                      <div key={index} style={styles.bodyText}>
                        <i className="fa-solid fa-check"></i>{" "}
                        {getLanguageName(watch(`language-${index}`))} (
                        {getLevelName(watch(`level-${index}`))})
                      </div>
                    ))}
                  </div>
                )}

                {/* Hobby */}
                {hobby.trim() && (
                  <div style={{ marginBottom: "20px" }}>
                    <strong style={{ color: "#000000", fontSize: "20px" }}>
                      Hobbilər
                    </strong>
                    <div
                      style={{
                        height: "3px",
                        background: "#31859b",
                        width: "100%",
                        marginBottom: "10px",
                      }}
                    ></div>
                    <div style={styles.bodyText}>{watch(`hobby`)}</div>
                    {Array.from({ length: hobbyCount }).map((_, index) => (
                      <div key={index} style={styles.bodyText}>
                        <i className="fa-solid fa-check"></i>{" "}
                        {watch(`hobby-${index}`)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="right-side" style={{ width: "60%" }}>
            <div style={{ width: "90%",margin:"0 auto" }}>
               {/* Experience */}
               {dutyname.trim() && (
                <div>
                  <strong style={{ color: "#000000", fontSize: "20px" }}>
                    İş təcrübəsi
                  </strong>
                  <div
                    style={{
                      height: "3px",
                      background: "#31859b",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  ></div>
                  {Array.from({ length: experienceCount }).map((_, index) => (
                    <div key={index}>
                      <strong>{watch(`work${index}`)}</strong>
                      <div style={{ color: "#b8b4b4" }}>
                        {watch(`dutyname${index}`)}
                      </div>
                      <div
                        className="country-and-date"
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "2px",
                        }}
                      >
                        <div> {watch(`workCity-${index}`)} | </div>
                        <div> {watch(`workCountry-${index}`)}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "5px",
                        }}
                      >
                        {watch(`workStartDate${index}`)} -{" "}
                        {isExperienceCheckboxChecked[index]
                          ? "Davam edir"
                          : watch(`workEndDate${index}`)}
                      </div>
                      <div
                        style={{
                          color: "#000000",
                          fontSize: "16px",
                          marginBottom: "5px",
                        }}
                      >
                        {watch(`jobDescription-${index}`)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              {profession.trim() && (
                <>
                  <strong style={{ color: "#000000", fontSize: "20px" }}>
                    Təhsil
                  </strong>
                  <div
                    style={{
                      height: "3px",
                      background: "#31859b",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  ></div>
                  {Array.from({ length: schoolCount }).map((_, index) => (
                    <div key={index}>
                      <strong>
                        {getDegreeName(watch(`eduType${index}`))} OF{" "}
                        {watch(`profession${index}`)}
                      </strong>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "15px",
                          color: "#b8b4b4",
                          marginBottom: "2px",
                          marginTop: "5px",
                        }}
                      >
                        Universitet: {watch(`university${index}`)}
                      </div>
                      <div
                        className="country-and-date"
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "2px",
                        }}
                      >
                        <div> {watch(`eduCity-${index}`)}</div>
                        <div> {watch(`eduCountry-${index}`)}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "5px",
                        }}
                      >
                        {watch(`eduStartDate${index}`)} -{" "}
                        {isSchoolCheckboxChecked[index]
                          ? "Davam edir"
                          : watch(`eduEndDate${index}`)}
                      </div>
                    </div>
                  ))}
                </>
              )}
           </div>
            </div>
          </div>
        </div>
      )}
       {id === 3 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Header */}
         <div className="mini-board" style={{display:'flex'}}>
         <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              alignItems:"center",
              justifyContent:"center",
              background:"#000",
              width:"40%",
              paddingBottom:"20px",paddingTop:"20px"
            }}
          >
            <strong style={{ fontSize: "20px" }}>Rashad</strong>
            <strong style={{ fontSize: "30px" }}>Garayev</strong>
          </div>
          <div style={{width:"60%", display:"flex",alignItems:"flex-start",flexDirection:"column",background:"#f1f0f0",paddingBottom:"20px",paddingTop:"20px"}}>
          <strong style={{ color: "#000000", fontSize: "20px",marginLeft:"20px" }}>
                  {" "}
                  Şəxsi məlumatlar
                </strong>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "5px",
                    marginLeft:"20px",
                    marginTop:'10px'
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-regular fa-envelope"
                  ></i>{" "}
                  {watch("email")}
                </div>

                  
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "5px",
                    marginLeft:"20px"
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-solid fa-phone"
                  ></i>{" "}
                  +994{prefix}
                  {phoneNumber}
                </div>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "5px",
                    marginLeft:"20px"
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-solid fa-location-dot"
                  ></i>{" "}
                  {watch("country")}
                  {watch("city")}
                </div>

  
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "10px",
                    marginLeft:"20px"
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="fa-brands fa-linkedin"
                  ></i>{" "}
                  {watch("linkedinProfile")}
                </div>

          </div>
          <div>
        

           

           
          </div>
         </div>

          {/* Border Bottom */}
        

          {/* Main Board */}
          <div style={{ display: "flex" }}>
            {/* LEFT side */}
            <div
              className="left-side"
              style={{ width: "40%"}}
            >
              {/* Personal Information */}
              <div style={{ width: "80%",margin:"0 auto" ,marginTop:"20px"}}>
               

                {/* About Information */}

                <strong style={{ color: "#000000", fontSize: "20px" }}>
                  Haqqında qisa icmal
                </strong>
                <div
                  style={{
                    height: "3px",
                    background: "#848484",
                    width: "30%",
                    marginBottom: "10px",
                  }}
                ></div>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    marginBottom: "15px",
                  }}
                >
                  {watch("aboutMe")}
                </div>

                {/* Lang */}
                {language.trim() && (
                  <div style={{ marginBottom: "20px" }}>
                    <strong style={{ color: "#000000", fontSize: "20px" }}>
                      Dil bilikləri
                    </strong>
                    <div
                  style={{
                    height: "3px",
                    background: "#848484",
                    width: "30%",
                    marginBottom: "10px",
                  }}
                ></div>
                    {Array.from({ length: languageCount }).map((_, index) => (
                      <div key={index} style={styles.bodyText}>
                        <i className="fa-solid fa-check"></i>{" "}
                        {getLanguageName(watch(`language-${index}`))} (
                        {getLevelName(watch(`level-${index}`))})
                      </div>
                    ))}
                  </div>
                )}

                {/* Hobby */}
                {hobby.trim() && (
                  <div style={{ marginBottom: "20px" }}>
                    <strong style={{ color: "#000000", fontSize: "20px" }}>
                      Hobbilər
                    </strong>
                    <div
                  style={{
                    height: "3px",
                    background: "#848484",
                    width: "30%",
                    marginBottom: "10px",
                  }}
                ></div>
                    <div style={styles.bodyText}>{watch(`hobby`)}</div>
                    {Array.from({ length: hobbyCount }).map((_, index) => (
                      <div key={index} style={styles.bodyText}>
                        <i className="fa-solid fa-check"></i>{" "}
                        {watch(`hobby-${index}`)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="right-side" style={{ width: "60%" }}>
            <div style={{ width: "90%",margin:"0 auto" ,marginTop:"20px"}}>
            {/* Experience */}
               {dutyname.trim() && (
                <div>
                  <strong style={{ color: "#000000", fontSize: "20px" }}>
                    İş təcrübəsi
                  </strong>
                  <div
                  style={{
                    height: "3px",
                    background: "#848484",
                    width: "30%",
                    marginBottom: "10px",
                  }}
                ></div>
                  {Array.from({ length: experienceCount }).map((_, index) => (
                    <div key={index}>
                      <strong>{watch(`work${index}`)}</strong>
                      <div style={{ color: "#b8b4b4" }}>
                        {watch(`dutyname${index}`)}
                      </div>
                      <div
                        className="country-and-date"
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "2px",
                        }}
                      >
                        <div> {watch(`workCity-${index}`)} | </div>
                        <div> {watch(`workCountry-${index}`)}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "5px",
                        }}
                      >
                        {watch(`workStartDate${index}`)} -{" "}
                        {isExperienceCheckboxChecked[index]
                          ? "Davam edir"
                          : watch(`workEndDate${index}`)}
                      </div>
                      <div
                        style={{
                          color: "#000000",
                          fontSize: "16px",
                          marginBottom: "5px",
                        }}
                      >
                        {watch(`jobDescription-${index}`)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              {profession.trim() && (
                <div style={{marginTop:"20px"}}>
                  <strong style={{ color: "#000000", fontSize: "20px" }}>
                    Təhsil
                  </strong>
                  <div
                  style={{
                    height: "3px",
                    background: "#848484",
                    width: "30%",
                    marginBottom: "10px",
                  }}
                ></div>
                  {Array.from({ length: schoolCount }).map((_, index) => (
                    <div key={index}>
                      <strong>
                        {getDegreeName(watch(`eduType${index}`))} OF{" "}
                        {watch(`profession${index}`)}
                      </strong>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "15px",
                          color: "#b8b4b4",
                          marginBottom: "2px",
                          marginTop: "5px",
                        }}
                      >
                        Universitet: {watch(`university${index}`)}
                      </div>
                      <div
                        className="country-and-date"
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "2px",
                        }}
                      >
                        <div> {watch(`eduCity-${index}`)}</div>
                        <div> {watch(`eduCountry-${index}`)}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "12px",
                          color: "#b8b4b4",
                          marginBottom: "5px",
                        }}
                      >
                        {watch(`eduStartDate${index}`)} -{" "}
                        {isSchoolCheckboxChecked[index]
                          ? "Davam edir"
                          : watch(`eduEndDate${index}`)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
           </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVDynamicContent;
