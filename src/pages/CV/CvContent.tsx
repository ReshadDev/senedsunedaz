import React from "react";
import {
  Document,
  Page,
  Text,
  Link,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import myCustomFont from "../../assets/Roboto-Medium.ttf";
import { getDegreeName, getLanguageName, getLevelName } from "../../constants";

Font.register({ family: "Roboto", src: myCustomFont });

const styles = StyleSheet.create({
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
});

const styles2 = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Roboto",
  },
  reng: {
    backgroundColor: "#f1f0f0",
  },
  header: {
    flexDirection: "row",
    color: "#ffffff",
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 12,
  },
  listItem: {
    paddingLeft: 10,
    marginBottom: 5,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  leftSide: {
    width: "40%",
  },
  rightSide: {
    width: "60%",
  },
  boldText: {
    fontWeight: "bold",
  },
  divider: {
    height: 3,
    backgroundColor: "#848484",
    width: "30%",
    marginBottom: 10,
  },
  contactInfo: {
    color: "#000000",
    fontSize: 15,
    marginBottom: 5,
  },
});

const styles3 = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Roboto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    color: "#000",
    marginBottom: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  borderBottom: {
    height: 30,
    backgroundColor: "#31859b",
    width: "100%",
    marginBottom: 10,
  },
  mainBoard: {
    display: "flex",
    flexDirection: "row",
  },
  leftSide: {
    width: "40%",
    backgroundColor: "#f5fafa",
    padding: 10,
  },
  rightSide: {
    width: "60%",
    padding: 10,
  },
  sectionHeader: {
    color: "#000",
    fontSize: 20,
    marginBottom: 5,
  },
  divider: {
    height: 3,
    backgroundColor: "#31859b",
    width: "100%",
    marginBottom: 10,
  },
  text: {
    color: "#000000",
    fontSize: 13,
    fontWeight:"medium",
    marginBottom: 5,
  },
  subText: {
    color: "#b8b4b4",
    fontSize: 12,
    marginBottom: 2,
  },
  boldText: {
    color: "#000",
    fontSize: 16,
    marginBottom: 5,
  },
});

const CVContent = ({
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
  const prefix = watch("prefix", "55");
  const phoneNumber = watch("phoneNumber", "");

  return (
    <Document>
      <Page style={styles2.page}>
        {id === 3 && (
          <View style={styles2.flexColumn}>
            <View style={[styles2.flexRow, styles2.header]}>
              <View
                style={[
                  styles2.flexColumn,
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40%",
                    backgroundColor: "#000",
                  },
                ]}
              >
                <Text style={{ fontSize: 20 }}> {watch("name")}</Text>
                <Text style={{ fontSize: 30 }}> {watch("surname")}</Text>
              </View>
              <View
                style={[
                  styles2.flexColumn,
                  styles2.reng,
                  { width: "60%", padding: 10, backgroundColor: "#f1f0f0" },
                ]}
              >
                <Text style={styles2.contactInfo}>
                  <Text style={styles2.boldText}>Şəxsi məlumatlar</Text>
                </Text>
                <Text style={styles2.contactInfo}>Email: {watch("email")}</Text>
                <Text style={styles2.contactInfo}>
                  Phone: +994{prefix}
                  {phoneNumber}
                </Text>
                <Text style={styles2.contactInfo}>
                  Location: {watch("country")} {watch("city")}
                </Text>
                <Text style={styles2.contactInfo}>
                  LinkedIn: {watch("linkedinProfile")}
                </Text>
              </View>
            </View>

            <View style={styles2.flexRow}>
              <View style={styles2.leftSide}>
                <View style={{ padding: 20 }}>
                  <Text style={styles2.sectionHeader}>Haqqında qisa icmal</Text>
                  <View style={styles2.divider} />
                  <Text style={[styles2.bodyText, { marginBottom: "20px" }]}>
                    {watch("aboutMe")}
                  </Text>

                  {language.trim() && (
                    <View style={styles2.section}>
                      <Text style={styles2.sectionHeader}>Dil bilikləri</Text>
                      <View style={styles2.divider} />
                      {Array.from({ length: languageCount }).map((_, index) => (
                        <Text key={index} style={styles2.bodyText}>
                          {getLanguageName(watch(`language-${index}`))} (
                          {getLevelName(watch(`level-${index}`))})
                        </Text>
                      ))}
                    </View>
                  )}

                  {hobby.trim() && (
                    <View style={styles2.section}>
                      <Text style={styles2.sectionHeader}>Hobbilər</Text>
                      <View style={styles2.divider} />
                      <Text style={styles2.bodyText}>{watch(`hobby`)}</Text>
                      {Array.from({ length: hobbyCount }).map((_, index) => (
                        <Text key={index} style={styles2.bodyText}>
                          {watch(`hobby-${index}`)}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>

              <View style={styles2.rightSide}>
                <View style={{ padding: 20 }}>
                  {dutyname.trim() && (
                    <View>
                      <Text style={styles2.sectionHeader}>İş təcrübəsi</Text>
                      <View style={styles2.divider} />
                      {Array.from({ length: experienceCount }).map(
                        (_, index) => (
                          <View key={index}>
                            <Text style={styles2.boldText}>
                              {watch(`work${index}`)}
                            </Text>
                            <Text style={[{ color: "#b8b4b4" }]}>
                              {watch(`dutyname${index}`)}
                            </Text>
                            <Text
                              style={[
                                {
                                  fontSize: "12px",
                                  color: "#b8b4b4",
                                  marginBottom: "2px",
                                },
                              ]}
                            >
                              {watch(`workCity-${index}`)} |{" "}
                              {watch(`workCountry-${index}`)}
                            </Text>
                            <Text
                              style={[{ fontSize: "12px", color: "#b8b4b4" }]}
                            >
                              {watch(`workStartDate${index}`)} -{" "}
                              {isExperienceCheckboxChecked[index]
                                ? "Davam edir"
                                : watch(`workEndDate${index}`)}
                            </Text>
                            <Text
                              style={[
                                {
                                  color: "#000000",
                                  fontSize: "13px",
                                  marginBottom: "5px",
                                },
                              ]}
                            >
                              {watch(`jobDescription-${index}`)}
                            </Text>
                          </View>
                        )
                      )}
                    </View>
                  )}

                  {profession.trim() && (
                    <View style={{ marginTop: 20 }}>
                      <Text style={styles2.sectionHeader}>Təhsil</Text>
                      <View style={styles2.divider} />
                      {Array.from({ length: schoolCount }).map((_, index) => (
                        <View key={index}>
                          <Text style={styles2.boldText}>
                            {getDegreeName(watch(`eduType${index}`))} -{" "}
                            {watch(`profession${index}`)}
                          </Text>
                          <Text
                            style={[
                              {
                                fontSize: "15px",
                                marginBottom: "2px",
                                marginTop: "5px",
                                color: "#b8b4b4",
                              },
                            ]}
                          >
                            Universitet: {watch(`university${index}`)}
                          </Text>
                          <Text
                            style={[{ fontSize: "12px", color: "#b8b4b4" }]}
                          >
                            {watch(`eduCity-${index}`)}{" "}
                            {watch(`eduCountry-${index}`)}
                          </Text>
                          <Text
                            style={[{ fontSize: "12px", color: "#b8b4b4" }]}
                          >
                            {watch(`eduStartDate${index}`)} -{" "}
                            {isSchoolCheckboxChecked[index]
                              ? "Davam edir"
                              : watch(`eduEndDate${index}`)}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        )}

{id === 2 && (
         <View>
           <View style={styles3.header}>
            <Text style={{ fontSize: 20 }}>                {watch("name")}
            </Text>
            <Text style={{ fontSize: 30 }}> {watch("surname")}</Text>
          </View>
          <View style={styles3.borderBottom} />
          <View style={styles3.mainBoard}>
            <View style={styles3.leftSide}>
              <Text style={styles3.sectionHeader}>Şəxsi məlumatlar</Text>
              <View style={styles3.divider} />
              <Text style={styles3.text}>{watch('email')}</Text>
              <Text style={styles3.text}>+994{prefix}{phoneNumber}</Text>
              <Text style={styles3.text}>{watch('country')} {watch('city')}</Text>
              <Text style={styles3.text}>{watch('linkedinProfile')}</Text>

              <Text style={styles3.sectionHeader}>Haqqında qisa icmal</Text>
              <View style={styles3.divider} />
              <Text style={styles3.text}>{watch('aboutMe')}</Text>

              {language.trim() && (
                <View>
                  <Text style={styles3.sectionHeader}>Dil bilikləri</Text>
                  <View style={styles3.divider} />
                  {Array.from({ length: languageCount }).map((_, index) => (
                    <Text key={index} style={styles3.text}>
                      {getLanguageName(watch(`language-${index}`))} (
                      {getLevelName(watch(`level-${index}`))})
                    </Text>
                  ))}
                </View>
              )}

              {hobby.trim() && (
                <View>
                  <Text style={styles3.sectionHeader}>Hobbilər</Text>
                  <View style={styles3.divider} />
                  <Text style={styles3.text}>{watch('hobby')}</Text>
                  {Array.from({ length: hobbyCount }).map((_, index) => (
                    <Text key={index} style={styles3.text}>
                      {watch(`hobby-${index}`)}
                    </Text>
                  ))}
                </View>
              )}
            </View>

            <View style={styles3.rightSide}>
              {dutyname.trim() && (
                <View>
                  <Text style={styles3.sectionHeader}>İş təcrübəsi</Text>
                  <View style={styles3.divider} />
                  {Array.from({ length: experienceCount }).map((_, index) => (
                    <View key={index}>
                      <Text>{watch(`work${index}`)}</Text>
                      <Text style={styles3.subText}>{watch(`dutyname${index}`)}</Text>
                      <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                        <Text style={styles3.subText}>{watch(`workCity-${index}`)} | </Text>
                        <Text style={styles3.subText}>{watch(`workCountry-${index}`)}</Text>
                      </View>
                      <Text style={styles3.subText}>
                        {watch(`workStartDate${index}`)} -{" "}
                        {isExperienceCheckboxChecked[index] ? "Davam edir" : watch(`workEndDate${index}`)}
                      </Text>
                      <Text style={styles3.boldText}>{watch(`jobDescription-${index}`)}</Text>
                    </View>
                  ))}
                </View>
              )}

              {profession.trim() && (
                <View>
                  <Text style={styles3.sectionHeader}>Təhsil</Text>
                  <View style={styles3.divider} />
                  {Array.from({ length: schoolCount }).map((_, index) => (
                    <View key={index}>
                      <Text>
                        {getDegreeName(watch(`eduType${index}`))} - {watch(`profession${index}`)}
                      </Text>
                      <Text style={styles3.subText}>Universitet: {watch(`university${index}`)}</Text>
                      <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                        <Text style={styles3.subText}>{watch(`eduCity-${index}`)}</Text>
                        <Text style={styles3.subText}>{watch(`eduCountry-${index}`)}</Text>
                      </View>
                      <Text style={styles3.subText}>
                        {watch(`eduStartDate${index}`)} -{" "}
                        {isSchoolCheckboxChecked[index] ? "Davam edir" : watch(`eduEndDate${index}`)}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
         </View>
        )}

        {id === 1 && (
          <View>
            {/* Header */}
            <View style={styles.header}>
              <Text style={{ fontWeight: "bold" }}>
                {watch("name")} {watch("surname")}
              </Text>
              <Text>{watch("dutyname-0")}</Text>
            </View>

            {/* Personal Information */}
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Şəxsi məlumatlar</Text>
              <View>
                <Text style={styles.bodyText}>Email: {watch("email")}</Text>
                <Text style={styles.bodyText}>
                  Phone: +994{prefix}
                  {phoneNumber}
                </Text>
                <Text style={styles.bodyText}>
                  Linkedin:{" "}
                    {watch("linkedinProfile")}
                </Text>
                <Text style={styles.bodyText}>Country: {watch("country")}</Text>
                <Text style={styles.bodyText}>City: {watch("city")}</Text>
              </View>
            </View>

            {/* Education */}
            {profession.trim() && (
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Təhsil</Text>
                {Array.from({ length: schoolCount }).map((_, index) => (
                  <View key={index} style={{ marginBottom: "10px" }}>
                    <Text style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {getDegreeName(watch(`eduType${index}`))} - {" "}
                      {watch(`profession${index}`)}
                    </Text>
                    <Text style={styles.bodyText}>
                      Institution: {watch(`university${index}`)}
                    </Text>

                    <Text style={styles.bodyText}>
                      {watch(`eduStartDate${index}`)} -{" "}
                      {isSchoolCheckboxChecked[index]
                        ? "Davam edir"
                        : watch(`eduEndDate${index}`)}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Experience */}
            {dutyname.trim() && (
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>İş təcrübəsi</Text>
                {Array.from({ length: experienceCount }).map((_, index) => (
                  <View key={index} style={{ marginBottom: "10px" }}>
                    <Text style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {watch(`dutyname${index}`)}
                    </Text>
                    <Text style={styles.bodyText}>{watch(`work${index}`)}</Text>
                    <Text style={styles.bodyText}>
                      {watch(`workStartDate${index}`)} -{" "}
                      {isExperienceCheckboxChecked[index]
                        ? "Davam edir"
                        : watch(`workEndDate${index}`)}
                    </Text>
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Job Description:
                      </Text>
                      <Text style={styles.bodyText}>
                        {watch(`jobDescription-${index}`)}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* Language */}
            {language.trim() && (
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Dil bilikləri </Text>
                {Array.from({ length: languageCount }).map((_, index) => (
                  <Text key={index} style={styles.bodyText}>
                    {getLanguageName(watch(`language-${index}`))} (
                    {getLevelName(watch(`level-${index}`))}){" "}
                  </Text>
                ))}
              </View>
            )}

            {/* Certificate */}
            {certificate.trim() && (
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Sertifikatlar</Text>
                {Array.from({ length: certificateCount }).map((_, index) => (
                  <Link key={index} src={watch(`certificate-${index}`)}>
                    {watch(`certificate-${index}`)}
                  </Link>
                ))}
              </View>
            )}

            {/* Hobby */}
            {hobby.trim() && (
              <View style={styles.section}>
                <Text style={styles.sectionHeader}>Hobbilər</Text>
                <Text style={styles.bodyText}>{watch(`hobby`)}</Text>
                {Array.from({ length: hobbyCount }).map((_, index) => (
                  <Text key={index} style={styles.bodyText}>
                    {watch(`hobby-${index}`)}
                  </Text>
                ))}
              </View>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default CVContent;
