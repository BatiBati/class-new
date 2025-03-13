"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

export const schema = z.object({
  phone: z
    .string()
    .length(8, { message: "Phone number must be 8 digits" })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) =>
          ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
        );
      },
      { message: "Phone number must only contain numbers" }
    ),
  email: z.string().email({ message: "Имэйл буруу" }),
});

export default function Home() {
  const [step, setStep] = useState(0);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "",
      email: "",
    },
  });

  const handlePrev = async () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <div className="w-screen h-screen bg-amber-500">
        {step === 0 && (
          <div className="flex w-full h-full justify-center items-center">
            <form
              onSubmit={handleSubmit(() => {
                console.log(formState);
              })}
              className="p-4 rounded-sm bg-white shadow-md flex flex-col gap-3 w-[300px]"
            >
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Phone</p>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="px-3 py-1 border rounded-sm border-gray-300"
                />
                {formState.errors.phone && (
                  <p className="text-xs text-red-500">
                    {formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Email</p>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="px-3 py-1 border rounded-sm border-gray-300"
                />
                {formState.errors.email && (
                  <p className="text-xs text-red-500">
                    {formState.errors.email.message}
                  </p>
                )}
              </div>

              <button
                className="px-3 py-1 border rounded-sm border-gray-300 cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {step === 1 && (
          <div className="w-[250px] h-[250px] bg-amber-900">
            <p>Next Stepssssssssssss</p>

            <button
              type="submit"
              className="px-3 py-1 border rounded-sm border-gray-300 cursor-pointer"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
