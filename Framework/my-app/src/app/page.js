"use client";
import { RightArrow } from "@/components/assets/RightArrow";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { FirstnameField } from "@/components/FirstnameField";

export const schema = z.object({
  firstname: z
    .string()
    .min(1, { message: "Firstname must be only character" })
    .refine(
      (value) => {
        const valueNumber = value.split("");
        return valueNumber.every((number) => {
          return !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            number
          );
        });
      },
      {
        message: "Firstname must be contain only characters",
      }
    ),

  lastname: z
    .string()
    .min(1, { message: "Lastname must be only character" })
    .refine(
      (value) => {
        const valueNumber = value.split("");
        return valueNumber.every((number) => {
          return !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            number
          );
        });
      },
      {
        message: "Lastname must be contain only characters",
      }
    ),
  username: z.string().min(1, { message: "Username must be only character" }),
});

export default function Home() {
  const [step, setStep] = useState(0);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
    },
  });

  const handlePrev = async () => {};

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {step === 0 && (
        <form
          onSubmit={handleSubmit((data) => {
            setStep((page) => page + 1);
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
                <FirstnameField />

                {/* <div className="flex flex-col">
                  <p className="text-[#334155] font-semibold">
                    Last name <span className="text-red-500">*</span>
                  </p>

                  <input
                    placeholder="Enter Last name"
                    className="w-full p-2 border rounded-md"
                    {...register("lastname")}
                  />

                  {formState.errors.lastname && (
                    <div className="text-red-500">
                      {formState.errors.lastname.message}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <p className="text-[#334155] font-semibold">
                    Username <span className="text-red-500">*</span>
                  </p>

                  <input
                    placeholder="Enter username"
                    className="w-full p-2 border rounded-md"
                    {...register("username")}
                  />

                  {formState.errors.username && (
                    <div className="text-red-500">
                      {formState.errors.username.message}
                    </div>
                  )}
                </div> */}
              </div>

              <button
                className="w-full bg-[#121316] flex items-center justify-center gap-2 text-white text-base font-semibold border rounded-md py-[10px] px-[12px]"
                onClick={handlePrev}
              >
                Continue {step}/3 .<RightArrow />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
