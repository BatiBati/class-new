"use client";

import { useState } from "react";
import { FirstStep } from "./Steps/FirstStep";
import { SecondStep } from "./Steps/SecondStep";
import { ThirdStep } from "./Steps/ThirdStep";

export const FormPage = () => {
  const [step, setStep] = useState(0);

  const nextPage = () => {
    setStep((prev) => prev + 1);
  };

  const prevPage = () => {
    setStep((prev) => prev - 1);
  };
  console.log(step);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {step === 0 && <FirstStep pageStep={step} nextPage={nextPage} />}
      {step === 1 && (
        <SecondStep pageStep={step} nextPage={nextPage} prevStep={prevPage} />
      )}
      {step === 2 && <ThirdStep pageStep={step} nextPage={nextPage} />}
      {/* {step === 3 && <FourthStep pageStep={step} nextPage={nextPage} />} */}
    </div>
  );
};
