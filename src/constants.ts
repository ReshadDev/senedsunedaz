export const APIURL = 'https://sened.shamilabilov.live';

// export const APIURL = 'http://localhost:8080';

export const ITEMS_PER_PAGE = 6;

export const errorMessages = {
  name: 'Adınız',
  surname: 'Soyadınız',
  email: 'Emailiniz',
  phoneNumber: 'Nömrəniz',
  profession0: 'İxtisasınız',
  university0: 'Universitetiniz',
  eduStartDate0: 'Başlama tarixi',
  eduEndDate0: 'Bitmə tarixi',
  eduType0: 'Dərəcəniz',
};
export const languageOptions: LanguageOption[] = [
  { code: 'az', name: 'Azerbaijani' },
  { code: 'tr', name: 'Turkish' },
  { code: 'ru', name: 'Russian' },
  { code: 'fr', name: 'French' },
  { code: 'en', name: 'English' },
  { code: 'ge', name: 'German' },
];

interface LevelOption {
  code: string;
  name: string;
}

export const levelOptions: LevelOption[] = [
  { code: 'a1', name: 'A1' },
  { code: 'a2', name: 'A2' },
  { code: 'b1', name: 'B1' },
  { code: 'b2', name: 'B2' },
  { code: 'c1', name: 'C1' },
  { code: 'c2', name: 'C2' },
];

interface LanguageOption {
  code: string;
  name: string;
}

export const getLevelName = (code: string): string => {
  const level = levelOptions.find((lvl) => lvl.code === code);
  return level ? level.name : '';
};

export const getLanguageName = (code: string) => {
  const language = languageOptions.find((lang) => lang.code === code);
  return language ? language.name : '';
};
