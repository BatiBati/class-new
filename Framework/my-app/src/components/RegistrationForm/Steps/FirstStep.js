"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTag } from "../InputTag/InputTag";
import { RightArrow } from "@/components/assets/RightArrow";
import { useContext } from "react";
import { StepContext } from "./StepProvider";
import { motion } from "motion/react";

export const schema = z.object({
  firstname: z
    .string()
    .min(1, { message: "Char at least 2 " })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) => {
          return !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            char
          );
        });
      },
      { message: "Only characters" }
    ),
  lastname: z
    .string()
    .min(1, { message: "Char at least 2 " })
    .refine(
      (value) => {
        const chars = value.split("");
        return chars.every((char) => {
          return !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            char
          );
        });
      },
      { message: "Only characters" }
    ),
  username: z
    .string({ message: "Please enter username" })
    .min(1, { message: "Char at least 2 " }),
});

export const FirstStep = ({ nextPage, maxStep }) => {
  const { values, setValues } = useContext(StepContext);
  const page = 1;

  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: values.firstname,
      lastname: values.lastname,
      username: values.username,
    },
  });

  const saveValues = (data) => {
    const newValues = { ...values };
    newValues.firstname = data.firstname;
    newValues.lastname = data.lastname;
    newValues.username = data.username;
    setValues(newValues);
    nextPage();
  };

  const handleAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };

  // const localStorage = JSON.parse();
  // console.log(localStorage);

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
                  Firstname
                  {formState.errors["firstname"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("firstname")}
                  error={formState.errors["firstname"]}
                  placeholder={"Firstname here..."}
                />
              </div>
              <div className="w-full flex flex-col gap-1.5 mt-3">
                <p className="text-sm font-semibold text-[#334155]">
                  Last name
                  {formState.errors["lastname"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("lastname")}
                  error={formState.errors["lastname"]}
                  placeholder={"Lastname here..."}
                />
              </div>
              <div className="w-full flex flex-col gap-1.5 mt-3">
                <p className="text-sm font-semibold text-[#334155]">
                  Username
                  {formState.errors["username"] && (
                    <span className="text-red-500"> *</span>
                  )}
                </p>
                <InputTag
                  {...register("username")}
                  error={formState.errors["username"]}
                  placeholder={"Username here..."}
                />
              </div>
            </div>

            <div>
              <button
                className="bg-[#121316] text-white w-full p-2 mt-3 rounded-md flex items-center justify-center"
                type="submit"
              >
                Continue {page}/{maxStep} <RightArrow />
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
