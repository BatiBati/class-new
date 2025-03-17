"use client";

import { useState } from "react";
import { FirstStep } from "@/components/RegistrationForm/Steps/FirstStep";
import { SecondStep } from "@/components/RegistrationForm/Steps/SecondStep";
import { ThirdStep } from "@/components/RegistrationForm/Steps/ThirdStep";
import { FourthStep } from "@/components/RegistrationForm/Steps/FourthStep";

export default function Home() {
  const [step, setStep] = useState(1);
  const maxStep = 3;

  const nextPage = () => {
    setStep((prev) => prev + 1);
  };

  const prevPage = () => {
    setStep((prev) => prev - 1);
  };
  console.log(step);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {step === 1 && (
        <FirstStep pageStep={step} nextPage={nextPage} maxStep={maxStep} />
      )}
      {step === 2 && (
        <SecondStep
          pageStep={step}
          nextPage={nextPage}
          prevStep={prevPage}
          maxStep={maxStep}
        />
      )}
      {step === 3 && (
        <ThirdStep pageStep={step} nextPage={nextPage} prevStep={prevPage} />
      )}
      {step === 4 && <FourthStep maxStep={maxStep} prevStep={prevPage} />}
    </div>
  );
}
