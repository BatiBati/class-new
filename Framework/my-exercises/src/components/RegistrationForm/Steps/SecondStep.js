"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTag } from "../InputTag/InputTag";
import { useState } from "react";

export const schema = z.object({
  email: z.string().min(1, { message: "Char at least 1 " }).email(),
  phonenumber: z
    .string()
    .max(8, { message: "Char at least 8 " })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) => {
          return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            char
          );
        });
      },
      { message: "Only numbers" }
    ),

  password: z
    .string({ message: "Please enter username" })
    .min(1, { message: "Char at least 1 " }),
  confirmPassword: z
    .string({ message: "Please enter username" })
    .min(1, { message: "Char at least 1 " }),
});

export const SecondStep = ({ nextPage, prevStep }) => {
  // const [prevStep, setPrevStep] = useState(1);
  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(() => {
          nextPage();
        })}
      >
        <div className="flex flex-col gap-5">
          <h1 className="w-full flex justify-center">Registration Form</h1>
          <div>
            email
            <InputTag
              {...register("email")}
              error={formState.errors["email"]}
            />
          </div>
          <div>
            Phone number
            <InputTag
              {...register("phonenumber")}
              error={formState.errors["phonenumber"]}
            />
          </div>
          <div>
            Password
            <InputTag
              {...register("password")}
              error={formState.errors["password"]}
            />
          </div>
          <div>
            Confirm password
            <InputTag
              {...register("confirmPassword")}
              error={formState.errors["confirmPassword"]}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="bg-black text-white w-full p-2 mt-3"
            type="button"
            onClick={prevStep}
          >
            Prev
          </button>
          <button className="bg-black text-white w-full p-2 mt-3" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
