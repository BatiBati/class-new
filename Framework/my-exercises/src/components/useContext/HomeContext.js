"use client";
import { useState } from "react";
import { ParentOne } from "./ParentOne";
import { StepProvider } from "@/components/useContext/StepProvider";

export const HomeContext = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <StepProvider step={step} setStep={setStep}>
        <div className="w-[500px] h-[350px] flex flex-col justify-center items-center bg-amber-100 rounded-3xl shadow-2xl text-black">
          I'm Home page
          <ParentOne />
        </div>
      </StepProvider>
    </div>
  );
};
