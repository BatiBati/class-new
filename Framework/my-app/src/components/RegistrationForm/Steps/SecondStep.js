"use client";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTag } from "../InputTag/InputTag";
import { RightArrow } from "@/components/assets/RightArrow";
import { LeftArrow } from "@/components/assets/LeftArrow";
import { useContext } from "react";
import { StepContext } from "./StepProvider";
import { motion } from "motion/react";

export const schema = z
  .object({
    email: z.string().min(1, { message: "Char at least 1 " }).email(),
    phonenumber: z
      .string()
      .min(8, { message: "Char at least 8 " })
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

    password: z.string().trim().min(8, { message: "Char at least 8 " }),
    confirmPassword: z.string().trim().min(8, { message: "Char at least 8 " }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SecondStep = ({ nextPage, prevStep, maxStep }) => {
  const { values, setValues } = useContext(StepContext);
  const page = 2;

  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: values.email,
      phonenumber: values.phonenumber,
      password: values.password,
      confirmPassword: values.confirmPassword,
    },
  });

  const saveValues = (data) => {
    const newValues = { ...values };
    newValues.email = data.email;
    newValues.phonenumber = data.phonenumber;
    newValues.password = data.password;
    newValues.confirmPassword = data.confirmPassword;
    setValues(newValues);
    nextPage();
  };
  const handleAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <motion.div
        className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]"
        variants={handleAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
        <form
          onSubmit={handleSubmit((data) => {
            saveValues(data);
          })}
        >
          <div className="flex flex-col justify-between gap-5 w-[480px] h-[655px] p-8 bg-white rounded-2xl">
            <div>
              <img
                src="./images/pineConeLogo.svg"
                alt="PineconeLogo"
                className="w-[60px] h-[60px]"
              />
              <div className="mb-6">
                <p className="text-2xl font-semibold">Join Us! 😎</p>
                <p className="text-[#8E8E8E] font-lg ">
                  Please provide all current information accurately.
                </p>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <p className="text-sm font-semibold text-[#334155]">
                  Email
                  {formState.errors["email"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("email")}
                  error={formState.errors["email"]}
                  placeholder={"Type email here..."}
                />
              </div>
              <div className="w-full flex flex-col gap-1.5 mt-3">
                <p className="text-sm font-semibold text-[#334155]">
                  Phone number
                  {formState.errors["phonenumber"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("phonenumber")}
                  error={formState.errors["phonenumber"]}
                  placeholder={"Phone number here..."}
                />
              </div>
              <div className="w-full flex flex-col gap-1.5 mt-3">
                <p className="text-sm font-semibold text-[#334155]">
                  Password
                  {formState.errors["password"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("password")}
                  error={formState.errors["password"]}
                  placeholder={"Password here..."}
                  type="password"
                />
              </div>
              <div className="w-full flex flex-col gap-1.5 mt-3">
                <p className="text-sm font-semibold text-[#334155]">
                  Confirm Password{" "}
                  {formState.errors["confirmPassword"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("confirmPassword")}
                  error={formState.errors["confirmPassword"]}
                  placeholder={"Confirm password here..."}
                  type="password"
                />
              </div>
            </div>
            <div className="flex gap-3 w-[100%]">
              <button
                className=" bg-white text-black w-[20%] p-2 mt-3 rounded-md flex items-center justify-center border-[1px] border-[#CBD5E1]"
                type="button"
                onClick={prevStep}
              >
                <LeftArrow /> Back
              </button>
              <button
                className="bg-[#121316] text-white w-[80%] p-2 mt-3 rounded-md flex items-center justify-center"
                type="submit"
              >
                Continue {page}/{maxStep}
                <RightArrow />
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
