"use client";
import { RightArrow } from "@/components/assets/RightArrow";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "Wrong E-mail" }),
  phoneNumber: z
    .string()
    .length(8, { message: "Phone number lenght must be 8 digits" })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) => {
          return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            char
          );
        });
      },
      { message: "Phone number must only contain numbers" }
    ),

  password: z.string().min(1, { message: "Please enter your password" }),

  confirmPassword: z.string().min(1, { message: "Your password not match" }),
});

export const SecondPage = () => {
  const [step, setStep] = useState(2);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });
  console.log(schema.phoneNumber);

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {step === 2 && (
        <form
          onSubmit={handleSubmit(() => {
            setStep((data) => data + 1);
          })}
        >
          <div className="w-[480px] h-[655px] p-[32px] flex flex-col justify-between">
            <div className="w-full h-[30%]">
              <img src="./images/pineConeLogo.svg" />
              <p className="font-semibold text-[26px]">Join Us! 😎</p>
              <p className="text-[#8E8E8E] text-lg">
                Please provide all current information accurately.
              </p>
            </div>
            <div className="w-full h-[70%] flex flex-col justify-between">
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col">
                  <p className="text-[#334155] font-semibold">
                    Email address <span className="text-red-500">*</span>
                  </p>

                  <input
                    placeholder="Enter email address"
                    className="w-full p-2 border rounded-md"
                    {...register("email")}
                  />

                  {formState.errors.email && (
                    <div className="text-red-500">
                      {formState.errors.email.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-[#334155] font-semibold">
                    Phone number <span className="text-red-500">*</span>
                  </p>

                  <input
                    placeholder="Phone number"
                    className="w-full p-2 border rounded-md"
                    {...register("phoneNumber")}
                  />

                  {formState.errors.phoneNumber && (
                    <div className="text-red-500">
                      {formState.errors.phoneNumber.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-[#334155] font-semibold">
                    Password <span className="text-red-500">*</span>
                  </p>

                  <input
                    placeholder="Enter password"
                    className="w-full p-2 border rounded-md"
                    {...register("email")}
                  />

                  {formState.errors.password && (
                    <div className="text-red-500">
                      {formState.errors.password.message}
                    </div>
                  )}
                </div>
                {/* <div className="flex flex-col">
                  <p className="text-[#334155] font-semibold">
                    Email address <span className="text-red-500">*</span>
                  </p>

                  <input
                    placeholder="Enter email address"
                    className="w-full p-2 border rounded-md"
                    {...register("email")}
                  />

                  {formState.errors.email && (
                    <div className="text-red-500">
                      {formState.errors.email.message}
                    </div>
                  )}
                </div> */}
              </div>

              <button className="w-full bg-[#121316] flex items-center justify-center gap-2 text-white text-base font-semibold border rounded-md py-[10px] px-[12px]">
                Continue {step}/3 .<RightArrow />
              </button>
            </div>
          </div>
        </form>
      )}
      {step === 3 && <ThirdPage />}
    </div>
  );
};
