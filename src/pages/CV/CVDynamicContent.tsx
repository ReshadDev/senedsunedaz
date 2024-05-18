import React from 'react';
import { getLanguageName, getLevelName } from '../../constants';

const template1 = {
  page: {
    padding: '20px',
    fontFamily: 'Roboto',
  },
  header: {
    backgroundColor: '#004080',
    color: '#ffffff',
    padding: '10px',
    marginBottom: '20px',
    fontFamily: 'Roboto',
    fontSize: '20px',
  },
  section: {
    marginBottom: '20px',
    fontFamily: 'Roboto',
  },
  sectionHeader: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#004080',
    borderBottom: '1px solid #004080',
    paddingBottom: '5px',
  },
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: '12px',
  },
  listItem: {
    paddingLeft: '10px',
    fontFamily: 'Roboto',
    marginBottom: '5px',
  },
};

const template2 = {
  page: {
    padding: '20px',
    fontFamily: 'Roboto',
  },
  header: {
    backgroundColor: '#154e4d',
    color: '#ffffff',
    padding: '10px',
    marginBottom: '20px',
    fontFamily: 'Roboto',
    fontSize: '20px',
  },
  section: {
    marginBottom: '20px',
    fontFamily: 'Roboto',
  },
  sectionHeader: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#154e4d',
    borderBottom: '1px solid #154e4d',
    paddingBottom: '5px',
  },
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: '12px',
  },
  listItem: {
    paddingLeft: '10px',
    fontFamily: 'Roboto',
    marginBottom: '5px',
  },
};

const template3 = {
  page: {
    padding: '20px',
    fontFamily: 'Roboto',
  },
  header: {
    backgroundColor: '#FF2727',
    color: '#ffffff',
    padding: '10px',
    marginBottom: '20px',
    fontFamily: 'Roboto',
    fontSize: '20px',
  },
  section: {
    marginBottom: '20px',
    fontFamily: 'Roboto',
  },
  sectionHeader: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#FF2727',
    borderBottom: '1px solid #FF2727',
    paddingBottom: '5px',
  },
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: '12px',
  },
  listItem: {
    paddingLeft: '10px',
    fontFamily: 'Roboto',
    marginBottom: '5px',
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

  const styles =
    id === 1
      ? template1
      : id === 2
      ? template2
      : id === 3
      ? template3
      : template1;
  const prefix = watch('prefix', '55'); // Default to '55' if not selected
  const phoneNumber = watch('phoneNumber', '');

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <strong>
          {watch('name')} {watch('surname')}
        </strong>
        <div>{watch('dutyname-0')}</div>
      </div>

      {/* Personal Information */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>Şəxsi məlumatlar</div>
        <div>
          <div style={styles.bodyText}>Email: {watch('email')}</div>
          <div style={styles.bodyText}>
            Phone: +994{prefix}
            {phoneNumber}
          </div>
          <div style={styles.bodyText}>
            Linkedin:{' '}
            <a href={watch('linkedinProfile')}>{watch('linkedinProfile')}</a>
          </div>
          <div style={styles.bodyText}>Country: {watch('country')}</div>
          <div style={styles.bodyText}>City: {watch('city')}</div>
        </div>
      </div>

      {/* Education */}
      {profession.trim() && (
        <div style={styles.section}>
          <div style={styles.sectionHeader}>Təhsil</div>
          {Array.from({ length: schoolCount }).map((_, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px' }}>
                {watch(`eduType${index}`)} of {watch(`profession${index}`)}
              </strong>
              <div style={styles.bodyText}>
                Institution: {watch(`university${index}`)}
              </div>
              <div style={styles.bodyText}>
                {watch(`eduStartDate${index}`)} -{' '}
                {isSchoolCheckboxChecked[index]
                  ? 'Davam edir'
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
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px' }}>
                {watch(`dutyname${index}`)}
              </strong>
              <div style={styles.bodyText}>{watch(`work${index}`)}</div>
              <div style={styles.bodyText}>
                {watch(`workStartDate${index}`)} -{' '}
                {isExperienceCheckboxChecked[index]
                  ? 'Davam edir'
                  : watch(`workEndDate${index}`)}
              </div>
              <div>
                <strong style={{ fontSize: '12px' }}>Job Description:</strong>
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
  );
};

export default CVDynamicContent;
