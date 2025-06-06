"use client";

import { useEffect, useState } from "react";
import { FirstStep } from "@/components/RegistrationForm/Steps/FirstStep";
import { SecondStep } from "@/components/RegistrationForm/Steps/SecondStep";
import { ThirdStep } from "@/components/RegistrationForm/Steps/ThirdStep";
import { FourthStep } from "@/components/RegistrationForm/Steps/FourthStep";
import { StepProvider } from "@/components/RegistrationForm/Steps/StepProvider";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const [step, setStep] = useState(1);
  const [ready, setReady] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    profileImage: "",
  });

  const maxStep = 3;

  const nextPage = () => {
    setStep((prev) => prev + 1);
  };

  const prevPage = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (ready && values) {
      localStorage.setItem("formValues", JSON.stringify(values));
    }
  }, [ready, values]);

  useEffect(() => {
    const savedData = localStorage.getItem("formValues");
    if (savedData) {
      setValues(JSON.parse(savedData));
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <StepProvider values={values} setValues={setValues}>
      <div className="w-screen h-screen flex justify-center items-center">
        {step === 1 && (
          <div className="absolute w-full transition-opacity duration-500 ease-in-out opacity-100">
            <FirstStep pageStep={step} nextPage={nextPage} maxStep={maxStep} />
          </div>
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
          <ThirdStep
            pageStep={step}
            nextPage={nextPage}
            prevStep={prevPage}
            maxStep={maxStep}
          />
        )}

        {step === 4 && <FourthStep maxStep={maxStep} prevStep={prevPage} />}
      </div>
    </StepProvider>
  );
}
