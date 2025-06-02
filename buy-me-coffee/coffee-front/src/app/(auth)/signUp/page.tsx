"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SignUpFirstStep } from "../_components/SignUpFirstStep";
import { SignUpSecondStep } from "../_components/SignUpSecondStep";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_providers/AuthProvider";

export type FormData = {
  username: string;
  email: string;
  password: string;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const router = useRouter();
  const { loading } = useAuth();
  return (
    <div className="w-[50%] p-10 relative">
      {!loading && (
        <>
          <div className="absolute right-10 top-10">
            <Button variant="outline" onClick={() => router.push("/signIn")}>
              Log in
            </Button>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-10">
            {step === 1 && (
              <SignUpFirstStep
                formData={formData}
                handleFormData={setFormData}
                next={next}
              />
            )}
            {step === 2 && (
              <SignUpSecondStep
                formData={formData}
                handleFormData={setFormData}
                next={next}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
