"use client"
import { Button } from "@/components/ui/button";
import { SignUpFirstStep } from "../_components/SignUpFirstStep";

import { useState } from "react";
import { SignUpSecondStep } from "../_components/SignUpSecondStep";

export default function Home() {
  const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({});


  const handleFirstStepSubmit = () => {
    // setFormData(data);
    setStep(2); // Move to second step
  };
  console.log(step);


  return <div className="w-[50%] p-10 relative">
    <div className="absolute right-10 top-10">
      <Button variant="outline">Log in</Button>
    </div>
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      {step === 1 && <SignUpFirstStep onNext={handleFirstStepSubmit} />}
      {step === 2 && <SignUpSecondStep />}
    </div>
  </div>;
}
