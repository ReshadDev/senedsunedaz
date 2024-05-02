import { InputLabel, TextField, styled } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  cvformstep1,
  cvformstep1completed,
  cvformstep2,
  cvformstep2completed,
  cvformstep3,
  cvformstep3completed,
  cvformstep4,
  cvformstep4completed,
  cvformstepactive,
  cvtm1,
  cvtm2,
} from '../../assets/icons';
import { CVContent } from './CvContent';

const FormTextField = styled(TextField)({
  marginBottom: '15px',
});

interface FormData {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  professionName: string;
  universityName: string;
  schoolStartDate: string;
  schoolEndDate: string;
  studyDegree: string;
  positionName: string;
  workplaceName: string;
  workStartDate: string;
  workEndDate: string;
}

const CVForm: React.FC = () => {
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    professionName: '',
    universityName: '',
    schoolStartDate: '',
    schoolEndDate: '',
    studyDegree: '',
    positionName: '',
    workplaceName: '',
    workStartDate: '',
    workEndDate: '',
  });
  const [errors, setErrors] = React.useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('Name', name);
    console.log('Value', value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]:
          value.trim() === ''
            ? 'Email is required'
            : !validateEmail(value)
            ? 'Invalid email format'
            : '',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]:
          value.trim() === ''
            ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
            : '',
      }));
    }
  };
  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
      setCompletedSteps((prevSteps) => [...prevSteps, currentStep]);
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: Partial<FormData> = {};
    switch (step) {
      case 1:
        if (formData.name.trim() === '') {
          stepErrors.name = 'Adınız';
        }
        if (formData.surname.trim() === '') {
          stepErrors.surname = 'Soyadınız';
        }
        if (formData.email.trim() === '') {
          stepErrors.email = 'Emailiniz';
        } else if (!validateEmail(formData.email)) {
          stepErrors.email = 'Düzgün mail formatı deyil';
        }
        if (formData.phoneNumber.trim() === '') {
          stepErrors.phoneNumber = 'Nömrəniz';
        }
        break;
      case 2:
        if (formData.professionName.trim() === '') {
          stepErrors.professionName = 'İxtisasınız';
        }
        if (formData.universityName.trim() === '') {
          stepErrors.universityName = 'Universitetiniz';
        }
        if (formData.schoolStartDate.trim() === '') {
          stepErrors.schoolStartDate = 'Tarix';
        }
        if (formData.schoolEndDate.trim() === '') {
          stepErrors.schoolEndDate = 'Tarix';
        }
        if (formData.studyDegree.trim() === '') {
          stepErrors.studyDegree = 'Dereceniz ';
        }

        break;
      case 3:
        if (formData.positionName.trim() === '') {
          stepErrors.positionName = 'Position Name is required';
        }
        if (formData.workplaceName.trim() === '') {
          stepErrors.workplaceName = 'Workplace Name is required';
        }
        if (formData.workStartDate.trim() === '') {
          stepErrors.workStartDate = 'Work start date is required';
        }
        if (formData.workEndDate.trim() === '') {
          stepErrors.workEndDate = 'Work end date is required';
        }
        break;
      default:
        break;
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCompletedSteps((prevSteps) => prevSteps.slice(0, -1));
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const getStepImage = (step: number) => {
    const normalImages = [cvformstep1, cvformstep2, cvformstep3, cvformstep4];
    const completedImages = [
      cvformstep1completed,
      cvformstep2completed,
      cvformstep3completed,
      cvformstep4completed,
    ];
    const activeImage = cvformstepactive;

    if (completedSteps.includes(step)) {
      return completedImages[step - 1];
    }

    return currentStep === step ? activeImage : normalImages[step - 1];
  };

  const { register, watch } = useForm();

  const [experienceCount, setExperienceCount] = React.useState<number>(1);
  const [schoolCount, setSchoolCount] = React.useState<number>(1);
  const [languageCount, setLanguageCount] = React.useState<number>(1);
  const [certificateCount, setCertificateCount] = React.useState<number>(1);
  const [hobbyCount, setHobbyCount] = React.useState<number>(1);

  const generateExperiences = (): JSX.Element[] => {
    const forms: JSX.Element[] = [];
    for (let i = 0; i < experienceCount; i++) {
      forms.push(
        <div key={i} className='container-new'>
          <div className='heading-box'>
            <h1>İş təcrübəsi</h1>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Vəzifənin adı
              </InputLabel>
              <FormTextField
                {...register(`dutyname-${i}`, {
                  required: 'dutyname is required',
                })}
                placeholder='daxil edin'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.positionName}
                helperText={errors.positionName}
                required
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                İş yerinin adı
              </InputLabel>
              <FormTextField
                {...register(`work-${i}`, {
                  required: 'work is required',
                })}
                placeholder='daxil edin'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.workplaceName}
                helperText={errors.workplaceName}
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Başlama tarixi
              </InputLabel>
              <FormTextField
                {...register(`workStartDate-${i}`, {
                  required: 'startDate is required',
                })}
                placeholder='dd.mm.yyyy'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.workStartDate}
                helperText={errors.workStartDate}
                required
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Bitmə tarixi
              </InputLabel>
              <FormTextField
                {...register(`workEndDate-${i}`, {
                  required: 'endDate is required',
                })}
                placeholder='dd.mm.yyyy'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.workEndDate}
                helperText={errors.workEndDate}
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Ölkə
              </InputLabel>
              <FormTextField
                {...register(`workCountry-${i}`, {
                  required: 'workCountry is required',
                })}
                placeholder='Azərbaycan'
                fullWidth
                type='text'
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Şəhər
              </InputLabel>
              <FormTextField
                {...register(`workCity-${i}`, {
                  required: 'workCity is required',
                })}
                placeholder='Baku'
                fullWidth
                type='text'
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-element-l'>
              <InputLabel shrink className='label-text'>
                İşin təsviri
              </InputLabel>
              <FormTextField
                {...register(`jobDescription-${i}`, {
                  required: 'jobDescription is required',
                })}
                placeholder='daxil edin'
                fullWidth
                multiline
                type='text'
              />
            </div>
          </div>
        </div>
      );
    }
    return forms;
  };

  const generateSchools = (): JSX.Element[] => {
    const forms: JSX.Element[] = [];
    for (let i = 0; i < schoolCount; i++) {
      forms.push(
        <div key={i} className='container-new'>
          <div className='heading-box'>
            <h1>Təhsil keçmişi</h1>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                İxtisasın adı
              </InputLabel>
              <FormTextField
                {...register(`profession-${i}`)}
                
                placeholder='daxil edin'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.professionName}
                helperText={errors.professionName}
                required
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Universitetin adı
              </InputLabel>
              <FormTextField
                {...register(`university-${i}`)}
                placeholder='daxil edin'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.universityName}
                helperText={errors.universityName}
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Başlama tarixi
              </InputLabel>
              <FormTextField
                {...register(`eduStartDate-${i}`)}
                placeholder='dd.mm.yyyy'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.schoolStartDate}
                helperText={errors.schoolStartDate}
                required
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Bitmə tarixi
              </InputLabel>
              <FormTextField
                {...register(`eduEndDate-${i}`)}
                placeholder='dd.mm.yyyy'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.schoolEndDate}
                helperText={errors.schoolEndDate}
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Təhsil dərəcəsi
              </InputLabel>
              <FormTextField
                {...register(`eduType-${i}`)}
                placeholder='Bakalavr'
                fullWidth
                type='text'
                onChange={handleInputChange}
                error={!!errors.studyDegree}
                helperText={errors.studyDegree}
                required
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                GPA
              </InputLabel>
              <FormTextField
                {...register(`eduGpa-${i}`)}
                placeholder='00'
                fullWidth
                type='number'
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Ölkə
              </InputLabel>
              <FormTextField
                {...register(`eduCountry-${i}`)}
                placeholder='Azərbaycan'
                fullWidth
                type='text'
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Şəhər
              </InputLabel>
              <FormTextField
                {...register(`eduCity-${i}`)}
                placeholder='Baku'
                fullWidth
                type='text'
              />
            </div>
          </div>
        </div>
      );
    }
    return forms;
  };

  const generateLanguages = (): JSX.Element[] => {
    const forms: JSX.Element[] = [];
    for (let i = 0; i < languageCount; i++) {
      forms.push(
        <div key={i}>
          <div className='row'>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Dil
              </InputLabel>
              <FormTextField
                {...register(`language-${i}`, {
                  required: 'language is required',
                })}
                placeholder='daxil edin'
                fullWidth
                type='text'
              />
            </div>
            <div className='form-element'>
              <InputLabel shrink className='label-text'>
                Səviyyə
              </InputLabel>
              <FormTextField
                {...register(`level-${i}`, {
                  required: 'level is required',
                })}
                placeholder='daxil edin'
                fullWidth
                type='text'
              />
            </div>
          </div>
        </div>
      );
    }
    return forms;
  };

  const generateCertificates = (): JSX.Element[] => {
    const forms: JSX.Element[] = [];
    for (let i = 0; i < certificateCount; i++) {
      forms.push(
        <div key={i}>
          <div className='row'>
            <div className='form-element-l'>
              <InputLabel shrink className='label-text'>
                Sertifikat linki
              </InputLabel>
              <FormTextField
                {...register(`certificate-${i}`, {
                  required: 'certificate is required',
                })}
                placeholder='daxil edin'
                fullWidth
                type='text'
              />
            </div>
          </div>
        </div>
      );
    }
    return forms;
  };

  const generateHobbies = (): JSX.Element[] => {
    const forms: JSX.Element[] = [];
    for (let i = 0; i < hobbyCount; i++) {
      forms.push(
        <div key={i}>
          <div className='row'>
            <div className='form-element-l'>
              <InputLabel shrink className='label-text'>
                Təsvir et
              </InputLabel>
              <FormTextField
                {...register(`hobby-${i}`, {
                  required: 'hobby is required',
                })}
                placeholder='daxil edin'
                fullWidth
                type='text'
              />
            </div>
          </div>
        </div>
      );
    }
    return forms;
  };

  const handleAddNewExperience = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setExperienceCount(experienceCount + 1);
  };

  const handleAddNewSchool = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSchoolCount(schoolCount + 1);
  };

  const handleAddNewLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLanguageCount(languageCount + 1);
  };

  const handleAddNewCertificate = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setCertificateCount(certificateCount + 1);
  };

  const handleAddNewHobby = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHobbyCount(hobbyCount + 1);
  };

  return (
    <div id='cv-form'>
      <div className='main-heading-box'>
        <div className='container'>
          <div className='heading-text'>
            {currentStep === 1 && <h1>Şəxsi məlumatlar</h1>}
            {currentStep === 2 && <h1>Təhsil</h1>}
            {currentStep === 3 && <h1>İş təcrübəsi</h1>}
            {currentStep === 4 && <h1>Bilik və bacarıqlar</h1>}
            {currentStep === 5 && (
              <h1 className='extra5'>CV üçün şablon seçin</h1>
            )}
          </div>
          {currentStep < 5 && (
            <div className='steps-box'>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index + 1} className='step-box'>
                  {index > 0 && (
                    <div
                      className={`line ${
                        currentStep >= index + 1 ? 'active-line' : ''
                      }`}
                      style={{
                        backgroundColor:
                          currentStep >= index + 1 ? '#154A4C' : 'white',
                      }}
                    />
                  )}
                  <div
                    className={`step ${
                      currentStep === index + 1 ? 'active' : ''
                    }`}
                  >
                    <img
                      src={getStepImage(index + 1)}
                      alt={`Step ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='form-box'>
        <div className='container'>
          <form className='form-box-content'>
            {currentStep === 1 && (
              <div className='container-new'>
                <div className='heading-box'>
                  <h1>Şəxsi məlumatlar</h1>
                </div>
                <div className='row'>
                  <div className='form-element'>
                    <InputLabel shrink className='label-text'>
                      Ad
                    </InputLabel>
                    <FormTextField
                      {...register('name', {
                        required: 'name is required',
                      })}
                      onChange={handleInputChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      placeholder='daxil edin'
                      fullWidth
                      type='text'
                    />
                  </div>
                  <div className='form-element'>
                    <InputLabel shrink className='label-text'>
                      Soyad
                    </InputLabel>
                    <FormTextField
                      {...register('surname', {
                        required: 'surname is required',
                      })}
                      onChange={handleInputChange}
                      placeholder='daxil edin'
                      fullWidth
                      type='text'
                      required
                      error={!!errors.surname}
                      helperText={errors.surname}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='form-element'>
                    <InputLabel shrink className='label-text'>
                      Ölkə
                    </InputLabel>
                    <FormTextField
                      {...register('country', {
                        required: 'country is required',
                      })}
                      placeholder='daxil edin'
                      fullWidth
                      type='text'
                    />
                  </div>
                  <div className='form-element'>
                    <InputLabel shrink className='label-text'>
                      Şəhər
                    </InputLabel>
                    <FormTextField
                      {...register('city', {
                        required: 'city is required',
                      })}
                      placeholder='daxil edin'
                      fullWidth
                      type='text'
                    />
                  </div>
                </div>
                <div className='heading-box'>
                  <h1>Əlaqə vasitələri</h1>
                </div>
                <div className='row'>
                  <div className='form-element'>
                    <InputLabel shrink className='label-text'>
                      Email
                    </InputLabel>
                    <FormTextField
                      {...register('email', {
                        required: 'email is required',
                      })}
                      placeholder='random@gmail.com'
                      fullWidth
                      required
                      onChange={handleInputChange}
                      type='email'
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </div>
                  <div className='form-element'>
                    <InputLabel shrink className='label-text'>
                      Telefon nömrəsi
                    </InputLabel>
                    <FormTextField
                      {...register('phoneNumber', {
                        required: 'phoneNumber is required',
                      })}
                      placeholder='+994.......'
                      onChange={handleInputChange}
                      fullWidth
                      required
                      type='number'
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='form-element-l'>
                    <InputLabel shrink className='label-text'>
                      LinkedIn profil linki
                    </InputLabel>
                    <FormTextField
                      {...register('linkedinProfile', {
                        required: 'linkedinProfile is required',
                      })}
                      placeholder='https://www.linkedin.com/in/yourprofile'
                      fullWidth
                      type='text'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='form-element-l'>
                    <InputLabel shrink className='label-text'>
                      Haqqımda qısa icmal
                    </InputLabel>
                    <FormTextField
                      {...register('aboutMe', {
                        required: 'aboutMe is required',
                      })}
                      placeholder='daxil edin'
                      fullWidth
                      multiline
                      type='text'
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className=''>
                {generateSchools()}
                <div className='add-new-box container-new'>
                  <button
                    className='btn add-new-btn'
                    onClick={handleAddNewSchool}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M13.875 8C13.875 8.09946 13.8355 8.19484 13.7652 8.26517C13.6948 8.33549 13.5995 8.375 13.5 8.375H8.375V13.5C8.375 13.5995 8.33549 13.6948 8.26517 13.7652C8.19484 13.8355 8.09946 13.875 8 13.875C7.90054 13.875 7.80516 13.8355 7.73484 13.7652C7.66451 13.6948 7.625 13.5995 7.625 13.5V8.375H2.5C2.40054 8.375 2.30516 8.33549 2.23483 8.26517C2.16451 8.19484 2.125 8.09946 2.125 8C2.125 7.90054 2.16451 7.80516 2.23483 7.73484C2.30516 7.66451 2.40054 7.625 2.5 7.625H7.625V2.5C7.625 2.40054 7.66451 2.30516 7.73484 2.23483C7.80516 2.16451 7.90054 2.125 8 2.125C8.09946 2.125 8.19484 2.16451 8.26517 2.23483C8.33549 2.30516 8.375 2.40054 8.375 2.5V7.625H13.5C13.5995 7.625 13.6948 7.66451 13.7652 7.73484C13.8355 7.80516 13.875 7.90054 13.875 8Z'
                        fill='#127371'
                      />
                    </svg>
                    Əlavə et
                  </button>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className=''>
                {generateExperiences()}
                <div className='add-new-box container-new'>
                  <button
                    className='btn add-new-btn'
                    onClick={handleAddNewExperience}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M13.875 8C13.875 8.09946 13.8355 8.19484 13.7652 8.26517C13.6948 8.33549 13.5995 8.375 13.5 8.375H8.375V13.5C8.375 13.5995 8.33549 13.6948 8.26517 13.7652C8.19484 13.8355 8.09946 13.875 8 13.875C7.90054 13.875 7.80516 13.8355 7.73484 13.7652C7.66451 13.6948 7.625 13.5995 7.625 13.5V8.375H2.5C2.40054 8.375 2.30516 8.33549 2.23483 8.26517C2.16451 8.19484 2.125 8.09946 2.125 8C2.125 7.90054 2.16451 7.80516 2.23483 7.73484C2.30516 7.66451 2.40054 7.625 2.5 7.625H7.625V2.5C7.625 2.40054 7.66451 2.30516 7.73484 2.23483C7.80516 2.16451 7.90054 2.125 8 2.125C8.09946 2.125 8.19484 2.16451 8.26517 2.23483C8.33549 2.30516 8.375 2.40054 8.375 2.5V7.625H13.5C13.5995 7.625 13.6948 7.66451 13.7652 7.73484C13.8355 7.80516 13.875 7.90054 13.875 8Z'
                        fill='#127371'
                      />
                    </svg>
                    Əlavə et
                  </button>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className='container-new'>
                <div className='heading-box'>
                  <h1>Dil bilikləri</h1>
                </div>
                {generateLanguages()}
                <div className='add-new-box '>
                  <button
                    className='btn add-new-btn'
                    onClick={handleAddNewLanguage}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M13.875 8C13.875 8.09946 13.8355 8.19484 13.7652 8.26517C13.6948 8.33549 13.5995 8.375 13.5 8.375H8.375V13.5C8.375 13.5995 8.33549 13.6948 8.26517 13.7652C8.19484 13.8355 8.09946 13.875 8 13.875C7.90054 13.875 7.80516 13.8355 7.73484 13.7652C7.66451 13.6948 7.625 13.5995 7.625 13.5V8.375H2.5C2.40054 8.375 2.30516 8.33549 2.23483 8.26517C2.16451 8.19484 2.125 8.09946 2.125 8C2.125 7.90054 2.16451 7.80516 2.23483 7.73484C2.30516 7.66451 2.40054 7.625 2.5 7.625H7.625V2.5C7.625 2.40054 7.66451 2.30516 7.73484 2.23483C7.80516 2.16451 7.90054 2.125 8 2.125C8.09946 2.125 8.19484 2.16451 8.26517 2.23483C8.33549 2.30516 8.375 2.40054 8.375 2.5V7.625H13.5C13.5995 7.625 13.6948 7.66451 13.7652 7.73484C13.8355 7.80516 13.875 7.90054 13.875 8Z'
                        fill='#127371'
                      />
                    </svg>
                    Əlavə et
                  </button>
                </div>
                <div className='heading-box'>
                  <h1>Sertifikatlar</h1>
                </div>
                {generateCertificates()}
                <div className='add-new-box '>
                  <button
                    className='btn add-new-btn'
                    onClick={handleAddNewCertificate}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M13.875 8C13.875 8.09946 13.8355 8.19484 13.7652 8.26517C13.6948 8.33549 13.5995 8.375 13.5 8.375H8.375V13.5C8.375 13.5995 8.33549 13.6948 8.26517 13.7652C8.19484 13.8355 8.09946 13.875 8 13.875C7.90054 13.875 7.80516 13.8355 7.73484 13.7652C7.66451 13.6948 7.625 13.5995 7.625 13.5V8.375H2.5C2.40054 8.375 2.30516 8.33549 2.23483 8.26517C2.16451 8.19484 2.125 8.09946 2.125 8C2.125 7.90054 2.16451 7.80516 2.23483 7.73484C2.30516 7.66451 2.40054 7.625 2.5 7.625H7.625V2.5C7.625 2.40054 7.66451 2.30516 7.73484 2.23483C7.80516 2.16451 7.90054 2.125 8 2.125C8.09946 2.125 8.19484 2.16451 8.26517 2.23483C8.33549 2.30516 8.375 2.40054 8.375 2.5V7.625H13.5C13.5995 7.625 13.6948 7.66451 13.7652 7.73484C13.8355 7.80516 13.875 7.90054 13.875 8Z'
                        fill='#127371'
                      />
                    </svg>
                    Əlavə et
                  </button>
                </div>
                <div className='heading-box'>
                  <h1>Hobbilər</h1>
                </div>
                {generateHobbies()}
                <div className='add-new-box '>
                  <button
                    className='btn add-new-btn'
                    onClick={handleAddNewHobby}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M13.875 8C13.875 8.09946 13.8355 8.19484 13.7652 8.26517C13.6948 8.33549 13.5995 8.375 13.5 8.375H8.375V13.5C8.375 13.5995 8.33549 13.6948 8.26517 13.7652C8.19484 13.8355 8.09946 13.875 8 13.875C7.90054 13.875 7.80516 13.8355 7.73484 13.7652C7.66451 13.6948 7.625 13.5995 7.625 13.5V8.375H2.5C2.40054 8.375 2.30516 8.33549 2.23483 8.26517C2.16451 8.19484 2.125 8.09946 2.125 8C2.125 7.90054 2.16451 7.80516 2.23483 7.73484C2.30516 7.66451 2.40054 7.625 2.5 7.625H7.625V2.5C7.625 2.40054 7.66451 2.30516 7.73484 2.23483C7.80516 2.16451 7.90054 2.125 8 2.125C8.09946 2.125 8.19484 2.16451 8.26517 2.23483C8.33549 2.30516 8.375 2.40054 8.375 2.5V7.625H13.5C13.5995 7.625 13.6948 7.66451 13.7652 7.73484C13.8355 7.80516 13.875 7.90054 13.875 8Z'
                        fill='#127371'
                      />
                    </svg>
                    Əlavə et
                  </button>
                </div>
              </div>
            )}
            {currentStep === 5 && (
              <div className='container-new'>
                <div className='heading-box'>
                  <h1>Şablonlar</h1>
                </div>

                <div className='templates-cv-form'>
                  <div className='tm-box col-4'>
                    <img src={cvtm1} alt='' />
                  </div>

                  <div className='tm-box col-4'>
                    <img src={cvtm2} alt='' />
                  </div>

                  <div className='tm-box col-4'>
                    <img src={cvtm1} alt='' />
                  </div>

                  <div className='tm-box col-4'>
                    <img src={cvtm2} alt='' />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className={`button-box`}>
        <div className='container'>
          <div className='button-box-content'>
            <div className='container-new'>
              {currentStep < 4 ? (
                <>
                  {currentStep === 1 ? (
                    <Link to='/cv' className='btn prev-btn'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                      >
                        <path
                          d='M20.5298 25.4701C20.6035 25.5388 20.6626 25.6216 20.7036 25.7136C20.7446 25.8056 20.7666 25.9049 20.7684 26.0056C20.7702 26.1063 20.7517 26.2063 20.714 26.2997C20.6762 26.3931 20.6201 26.4779 20.5489 26.5491C20.4776 26.6203 20.3928 26.6765 20.2994 26.7142C20.206 26.7519 20.106 26.7705 20.0053 26.7687C19.9046 26.7669 19.8053 26.7449 19.7133 26.7039C19.6213 26.6629 19.5385 26.6038 19.4698 26.5301L9.46983 16.5301C9.32938 16.3895 9.25049 16.1988 9.25049 16.0001C9.25049 15.8013 9.32938 15.6107 9.46983 15.4701L19.4698 5.47009C19.612 5.33761 19.8 5.26549 19.9944 5.26892C20.1887 5.27234 20.374 5.35106 20.5114 5.48847C20.6489 5.62588 20.7276 5.81127 20.731 6.00557C20.7344 6.19987 20.6623 6.38792 20.5298 6.53009L11.0611 16.0001L20.5298 25.4701Z'
                          fill='black'
                        />
                      </svg>
                      Əsas Səhifəyə Qayıt
                    </Link>
                  ) : (
                    <button
                      className='btn prev-btn'
                      onClick={handlePreviousStep}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                      >
                        <path
                          d='M20.5298 25.4701C20.6035 25.5388 20.6626 25.6216 20.7036 25.7136C20.7446 25.8056 20.7666 25.9049 20.7684 26.0056C20.7702 26.1063 20.7517 26.2063 20.714 26.2997C20.6762 26.3931 20.6201 26.4779 20.5489 26.5491C20.4776 26.6203 20.3928 26.6765 20.2994 26.7142C20.206 26.7519 20.106 26.7705 20.0053 26.7687C19.9046 26.7669 19.8053 26.7449 19.7133 26.7039C19.6213 26.6629 19.5385 26.6038 19.4698 26.5301L9.46983 16.5301C9.32938 16.3895 9.25049 16.1988 9.25049 16.0001C9.25049 15.8013 9.32938 15.6107 9.46983 15.4701L19.4698 5.47009C19.612 5.33761 19.8 5.26549 19.9944 5.26892C20.1887 5.27234 20.374 5.35106 20.5114 5.48847C20.6489 5.62588 20.7276 5.81127 20.731 6.00557C20.7344 6.19987 20.6623 6.38792 20.5298 6.53009L11.0611 16.0001L20.5298 25.4701Z'
                          fill='black'
                        />
                      </svg>
                      Geri
                    </button>
                  )}
                  <button className='btn next-btn' onClick={handleNextStep}>
                    Növbəti
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                    >
                      <path
                        d='M22.5298 16.5301L12.5298 26.5301C12.3877 26.6626 12.1996 26.7347 12.0053 26.7313C11.811 26.7278 11.6256 26.6491 11.4882 26.5117C11.3508 26.3743 11.2721 26.1889 11.2687 25.9946C11.2652 25.8003 11.3374 25.6123 11.4698 25.4701L20.9386 16.0001L11.4698 6.53009C11.3374 6.38792 11.2652 6.19987 11.2687 6.00557C11.2721 5.81127 11.3508 5.62588 11.4882 5.48847C11.6256 5.35106 11.811 5.27234 12.0053 5.26892C12.1996 5.26549 12.3877 5.33761 12.5298 5.47009L22.5298 15.4701C22.6703 15.6107 22.7492 15.8013 22.7492 16.0001C22.7492 16.1988 22.6703 16.3895 22.5298 16.5301Z'
                        fill='white'
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <button className='btn prev-btn' onClick={handlePreviousStep}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                    >
                      <path
                        d='M20.5298 25.4701C20.6035 25.5388 20.6626 25.6216 20.7036 25.7136C20.7446 25.8056 20.7666 25.9049 20.7684 26.0056C20.7702 26.1063 20.7517 26.2063 20.714 26.2997C20.6762 26.3931 20.6201 26.4779 20.5489 26.5491C20.4776 26.6203 20.3928 26.6765 20.2994 26.7142C20.206 26.7519 20.106 26.7705 20.0053 26.7687C19.9046 26.7669 19.8053 26.7449 19.7133 26.7039C19.6213 26.6629 19.5385 26.6038 19.4698 26.5301L9.46983 16.5301C9.32938 16.3895 9.25049 16.1988 9.25049 16.0001C9.25049 15.8013 9.32938 15.6107 9.46983 15.4701L19.4698 5.47009C19.612 5.33761 19.8 5.26549 19.9944 5.26892C20.1887 5.27234 20.374 5.35106 20.5114 5.48847C20.6489 5.62588 20.7276 5.81127 20.731 6.00557C20.7344 6.19987 20.6623 6.38792 20.5298 6.53009L11.0611 16.0001L20.5298 25.4701Z'
                        fill='black'
                      />
                    </svg>
                    Geri
                  </button>
                  <PDFDownloadLink
                    document={
                      <CVContent
                        certificateCount={certificateCount}
                        experienceCount={experienceCount}
                        languageCount={languageCount}
                        schoolCount={schoolCount}
                        hobbyCount={hobbyCount}
                        watch={watch}
                      />
                    }
                    fileName={`${watch('name')}-${watch('surname')}.pdf`}
                  >
                    <button className='btn next-btn'>CV YARAT</button>
                  </PDFDownloadLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
