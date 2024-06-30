import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import myCustomFont from '../../assets/Roboto-Medium.ttf';
import { getDegreeName, getLanguageName, getLevelName } from '../../constants';

Font.register({ family: 'Roboto', src: myCustomFont });

const template1 = StyleSheet.create({
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
});

const template2 = StyleSheet.create({
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
});

const template3 = StyleSheet.create({
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
});

interface CVContentProps {
  certificateCount: number;
  experienceCount: number;
  languageCount: number;
  schoolCount: number;
  hobbyCount: number;
  id?: number | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: any;
  isExperienceCheckboxChecked: boolean[];
  isSchoolCheckboxChecked: boolean[];
}

const CVContent: React.FC<CVContentProps> = ({
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
    <Document>
      <Page style={styles.page}>
        <View>
          {/* Header */}
          <View style={styles.header}>
            <Text style={{ fontWeight: 'bold' }}>
              {watch('name')} {watch('surname')}
            </Text>
            <Text>{watch('dutyname-0')}</Text>
          </View>

          {/* Personal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Şəxsi məlumatlar</Text>
            <View>
              <Text style={styles.bodyText}>Email: {watch('email')}</Text>
              <Text style={styles.bodyText}>
                Phone: +994{prefix}
                {phoneNumber}
              </Text>
              <Text style={styles.bodyText}>
                Linkedin:{' '}
                <Link src={watch('linkedinProfile')}>
                  {watch('linkedinProfile')}
                </Link>
              </Text>
              <Text style={styles.bodyText}>Country: {watch('country')}</Text>
              <Text style={styles.bodyText}>City: {watch('city')}</Text>
            </View>
          </View>

          {/* Education */}
          {profession.trim() && (
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Təhsil</Text>
              {Array.from({ length: schoolCount }).map((_, index) => (
                <View key={index} style={{ marginBottom: '10px' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {getDegreeName(watch(`eduType${index}`))} of {watch(`profession${index}`)}
                  </Text>
                  <Text style={styles.bodyText}>
                    Institution: {watch(`university${index}`)}
                  </Text>

                  <Text style={styles.bodyText}>
                    {watch(`eduStartDate${index}`)} -{' '}
                    {isSchoolCheckboxChecked[index]
                      ? 'Davam edir'
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
                <View key={index} style={{ marginBottom: '10px' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    {watch(`dutyname${index}`)}
                  </Text>
                  <Text style={styles.bodyText}>{watch(`work${index}`)}</Text>
                  <Text style={styles.bodyText}>
                    {watch(`workStartDate${index}`)} -{' '}
                    {isExperienceCheckboxChecked[index]
                      ? 'Davam edir'
                      : watch(`workEndDate${index}`)}
                  </Text>
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: '12px' }}>
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
                  {getLevelName(watch(`level-${index}`))}){' '}
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
      </Page>
    </Document>
  );
};

export default CVContent;
