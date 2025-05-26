"use client";

import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SignUpFirstStep } from "../_components/SignUpFirstStep";
import { SignUpSecondStep } from "../_components/SignUpSecondStep";

const usernameSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
});

const emailPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleFirstStepComplete = (data: { username: string }) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleSecondStepComplete = (data: {
    email: string;
    password: string;
  }) => {
    setFormData((prev) => ({ ...prev, ...data }));
    console.log("Full signup data:", { ...formData, ...data });
  };

  return (
    <div className="w-[50%] p-10 relative">
      <div className="absolute right-10 top-10">
        <Button variant="outline">Log in</Button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        {step === 1 && (
          <SignUpFirstStep
            onNext={handleFirstStepComplete}
            formSchema={usernameSchema}
          />
        )}
        {step === 2 && (
          <SignUpSecondStep
            onNext={handleSecondStepComplete}
            formSchema={emailPasswordSchema}
          />
        )}
      </div>
    </div>
  );
}
