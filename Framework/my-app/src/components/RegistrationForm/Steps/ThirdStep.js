"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useRef, useState } from "react";
import { RightArrow } from "@/components/assets/RightArrow";
import { LeftArrow } from "@/components/assets/LeftArrow";
import { InputImage } from "@/components/assets/InputImage";
import { StepContext } from "./StepProvider";
import { z } from "zod";
import { motion } from "motion/react";

export const schema = z.object({
  date: z.string().refine(
    (date) => {
      if (date === "") return false;
      return true;
    },
    {
      message: "Choose your birth",
    }
  ),
  profileImage: z
    .instanceof(FileList, { message: "Invalid Profile picture" })
    .refine(
      (item) => {
        const image = item[0];
        if (!image) return { message: "invalid" };
        return true;
      },
      {
        message: "Invalid Profile picture",
      }
    ),
});

export const ThirdStep = ({ nextPage, prevStep, maxStep }) => {
  const { values, setValues } = useContext(StepContext);
  const page = 3;
  const { register, formState, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: values.date,
      profileImage: values.profileImage,
    },
  });

  const saveValues = (data) => {
    const newValues = { ...values };
    newValues.date = data.date;
    newValues.profileImage = data.profileImage;
    setValues(newValues);
    nextPage();
  };

  const { profileImage } = watch();

  const clearImage = () => {
    setValue("profileImage", "");
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
        <form onSubmit={handleSubmit(saveValues)}>
          <div className="flex flex-col justify-between gap-5 w-[480px] h-fit p-8 rounded-2xl bg-white">
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
            <div className="flex flex-col text-sm font-semibold text-[#334155]">
              Date of birth:
              <div>
                <input
                  {...register("date")}
                  className="w-full h-fit p-2 border-2 border-gray-400 rounded-[8px] hover:border-gray-500 hover:cursor-pointer"
                  type="date"
                />
              </div>
              {formState.errors.date && (
                <div className="text-red-500 h-[20px] w-full">
                  {formState.errors.date.message}
                </div>
              )}
            </div>

            <div className=" h-full w-full flex flex-col gap-2 text-sm font-semibold text-[#334155] ">
              Profile image
              <div className="w-full h-full bg-[#e5e5e5] text-[#09090B] flex flex-col justify-center items-center rounded-2xl overflow-hidden">
                <div className="w-full h-[277px] bg-[#ececec] text-[#09090B] flex flex-col justify-center items-center rounded-2xl relative">
                  {profileImage === "" && (
                    <div className=" flex flex-col justify-center items-center">
                      <div className="rounded-4xl p-2 bg-white w-fit h-fit">
                        <InputImage />
                      </div>
                      <p>Add profile picture </p>
                      <input
                        {...register("profileImage")}
                        type="file"
                        className="w-full h-full absolute opacity-0"
                      />
                    </div>
                  )}
                  {profileImage && (
                    <div className="w-full h-full flex justify-end">
                      <div className="w-[100%] h-[100%] absolute ">
                        <img
                          src={URL.createObjectURL(profileImage[0])}
                          className="w-[100%] h-[100%]"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={clearImage}
                        className="text-white bg-[#202124] p-1 m-3 rounded-[100%] hover:bg-[#868686] hover:text-white hover:cursor-pointer   w-fit h-fit flex justify-end absolute z-10 "
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {formState.errors.profileImage && (
                <div className="text-red-500 h-[20px] w-full">
                  {formState.errors.profileImage.message}
                </div>
              )}
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
