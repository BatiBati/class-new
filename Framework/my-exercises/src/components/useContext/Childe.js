"use client";
import { useContext } from "react";
import { StepContext } from "./StepProvider";
export const Childe = () => {
  const { step, setStep } = useContext(StepContext);

  return (
    <div className="w-[200px] h-[150px] flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-amber-600">
      <p> I'm Child Comp</p>
      <button onClick={() => setStep(step + 100)}>Step: {step}</button>
    </div>
  );
};
