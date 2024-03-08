import React from "react";
import {
  cvformstep1,
  cvformstep2,
  cvformstep3,
  cvformstep4,
  cvformstepactive,
  cvformstep1completed,
  cvformstep2completed,
  cvformstep3completed,
  cvformstep4completed,
} from "../../assets/icons";
import { InputLabel, OutlinedInput, styled } from "@mui/material";
import { useForm } from "react-hook-form";

const FormTextField = styled(OutlinedInput)({
  marginBottom: "20px",
});

interface FormData {
  email: string;
}

const CVForm: React.FC = () => {
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  const handleNextStep = () => {
    setCompletedSteps((prevSteps) => [...prevSteps, currentStep]);
    setCurrentStep((prevStep) => prevStep + 1);
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

  const { register } = useForm<FormData>();

  return (
    <div id="cv-form">
      <div className="upper-block">
        <div className="container">
          <div className="main-heading-box">
            <div className="heading-text">
              <h1>Şəxsi məlumatlar</h1>
            </div>
            <div className="steps-box">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index + 1} className="step-box">
                  {index > 0 && (
                    <div
                      className={`line ${
                        currentStep >= index + 1 ? "active-line" : ""
                      }`}
                      style={{
                        backgroundColor:
                          currentStep >= index + 1 ? "#154A4C" : "white",
                      }}
                    />
                  )}
                  <div
                    className={`step ${
                      currentStep === index + 1 ? "active" : ""
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
          </div>

          <div className="form-box">
            <form>
              {currentStep === 1 && (
                <div className="container-new">
                  <div className="heading-box">
                    <h1>Şəxsi məlumatlar</h1>
                  </div>
                  <div className="row">
                    <div className="form-element">
                      <InputLabel shrink className="label-text">
                        Ad
                      </InputLabel>
                      <FormTextField placeholder="daxil edin" fullWidth />
                    </div>
                    <div className="form-element">
                      <InputLabel shrink className="label-text">
                        Soyad
                      </InputLabel>
                      <FormTextField placeholder="daxil edin" fullWidth />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-element">
                      <InputLabel shrink className="label-text">
                        Ölkə
                      </InputLabel>
                      <FormTextField placeholder="daxil edin" fullWidth />
                    </div>
                    <div className="form-element">
                      <InputLabel shrink className="label-text">
                        Şəhər
                      </InputLabel>
                      <FormTextField placeholder="daxil edin" fullWidth />
                    </div>
                  </div>
                  <div className="heading-box">
                    <h1>Əlaqə vasitələri</h1>
                  </div>
                  <div className="row">
                    <div className="form-element">
                      <InputLabel shrink className="label-text">
                        Email
                      </InputLabel>
                      <FormTextField
                        {...register("email", {
                          required: "email is required",
                        })}
                        placeholder="random@gmail.com"
                        fullWidth
                      />
                    </div>
                    <div className="form-element">
                      <InputLabel shrink className="label-text">
                        Telefon nömrəsi
                      </InputLabel>
                      <FormTextField placeholder="+994......." fullWidth />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-element-l">
                      <InputLabel shrink className="label-text">
                        LinkedIn profil linki
                      </InputLabel>
                      <FormTextField
                        placeholder="https://www.linkedin.com/in/yourprofile"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-element-l">
                      <InputLabel shrink className="label-text">
                        Haqqımda qısa icmal
                      </InputLabel>
                      <FormTextField
                        placeholder="daxil edin"
                        fullWidth
                        multiline
                      />
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="button-box">
            {currentStep < 5 ? (
              <div className="container-new">
                <button className="btn prev-btn" onClick={handlePreviousStep}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M20.5298 25.4701C20.6035 25.5388 20.6626 25.6216 20.7036 25.7136C20.7446 25.8056 20.7666 25.9049 20.7684 26.0056C20.7702 26.1063 20.7517 26.2063 20.714 26.2997C20.6762 26.3931 20.6201 26.4779 20.5489 26.5491C20.4776 26.6203 20.3928 26.6765 20.2994 26.7142C20.206 26.7519 20.106 26.7705 20.0053 26.7687C19.9046 26.7669 19.8053 26.7449 19.7133 26.7039C19.6213 26.6629 19.5385 26.6038 19.4698 26.5301L9.46983 16.5301C9.32938 16.3895 9.25049 16.1988 9.25049 16.0001C9.25049 15.8013 9.32938 15.6107 9.46983 15.4701L19.4698 5.47009C19.612 5.33761 19.8 5.26549 19.9944 5.26892C20.1887 5.27234 20.374 5.35106 20.5114 5.48847C20.6489 5.62588 20.7276 5.81127 20.731 6.00557C20.7344 6.19987 20.6623 6.38792 20.5298 6.53009L11.0611 16.0001L20.5298 25.4701Z"
                      fill="black"
                    />
                  </svg>
                  Geri
                </button>
                <button className="btn next-btn" onClick={handleNextStep}>
                  Növbəti
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M22.5298 16.5301L12.5298 26.5301C12.3877 26.6626 12.1996 26.7347 12.0053 26.7313C11.811 26.7278 11.6256 26.6491 11.4882 26.5117C11.3508 26.3743 11.2721 26.1889 11.2687 25.9946C11.2652 25.8003 11.3374 25.6123 11.4698 25.4701L20.9386 16.0001L11.4698 6.53009C11.3374 6.38792 11.2652 6.19987 11.2687 6.00557C11.2721 5.81127 11.3508 5.62588 11.4882 5.48847C11.6256 5.35106 11.811 5.27234 12.0053 5.26892C12.1996 5.26549 12.3877 5.33761 12.5298 5.47009L22.5298 15.4701C22.6703 15.6107 22.7492 15.8013 22.7492 16.0001C22.7492 16.1988 22.6703 16.3895 22.5298 16.5301Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button onClick={() => console.log("SAAALAM")}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
