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
              {currentStep === 1 && <div className="container-new">
                <form action=""></form>
                </div>}
            </form>
          </div>
          {currentStep < 5 ? (
            <>
              <button onClick={handlePreviousStep}>Prev Step</button>
              <button onClick={handleNextStep}>Next Step</button>
            </>
          ) : (
            <button onClick={() => console.log("SAAALAM")}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVForm;
