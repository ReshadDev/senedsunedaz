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

Font.register({ family: 'Roboto', src: myCustomFont });

const styles = StyleSheet.create({
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
    fontSize: '20px', // Adjusting font size for header
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
    fontSize: '12px', // Adjusting font size for body text
  },
  listItem: {
    paddingLeft: '10px',
    fontFamily: 'Roboto',
    marginBottom: '5px',
  },
});

export const CVContent = ({
  watch,
  schoolCount,
  experienceCount,
  languageCount,
  certificateCount,
  hobbyCount,
}) => {
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
              <Text style={styles.bodyText}>Phone: {watch('phoneNumber')}</Text>
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
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Təhsil</Text>
            {Array.from({ length: schoolCount }).map((_, index) => (
              <View key={index} style={{ marginBottom: '10px' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {watch(`eduType-${index}`)} of {watch(`profession-${index}`)}
                </Text>
                <Text style={styles.bodyText}>
                  Institution: {watch(`university-${index}`)}
                </Text>
                <Text style={styles.bodyText}>
                  Start: {watch(`eduStartDate-${index}`)}
                </Text>
                <Text style={styles.bodyText}>
                  Graduation: {watch(`eduEndDate-${index}`)}
                </Text>
              </View>
            ))}
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>İş təcrübəsi</Text>
            {Array.from({ length: experienceCount }).map((_, index) => (
              <View key={index} style={{ marginBottom: '10px' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {watch(`dutyname-${index}`)}
                </Text>
                <Text style={styles.bodyText}>{watch(`work-${index}`)}</Text>
                <Text style={styles.bodyText}>
                  {watch(`workStartDate-${index}`)} -{' '}
                  {watch(`workEndDate-${index}`)}
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

          {/* Language */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Dil bilikləri </Text>
            {Array.from({ length: languageCount }).map((_, index) => (
              <Text key={index} style={styles.bodyText}>
                {watch(`language-${index}`)} ({watch(`level-${index}`)})
              </Text>
            ))}
          </View>

          {/* Certificate */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Sertifikatlar</Text>
            {Array.from({ length: certificateCount }).map((_, index) => (
              <Link key={index} src={watch(`certificate-${index}`)}>
                {watch(`certificate-${index}`)}
              </Link>
            ))}
          </View>

          {/* Hobby */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Hobbilər</Text>
            <Text style={styles.bodyText}>{watch(`hobby`)}</Text>
            {Array.from({ length: hobbyCount }).map((_, index) => (
              <Text key={index} style={styles.bodyText}>
                {watch(`hobby-${index}`)}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
