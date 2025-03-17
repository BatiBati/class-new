"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { RightArrow } from "@/components/assets/RightArrow";
import { LeftArrow } from "@/components/assets/LeftArrow";




export const ThirdStep = ({ nextPage, prevStep, maxStep }) => {
  const page = 3;
  const { register, formState, handleSubmit } = useForm({
    // resolver: zodResolver(schema),
    defaultValues: {
      date: "",
      image: "",
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(() => {
          nextPage();
        })}
      >
        <div className="flex flex-col justify-between gap-5 w-[480px] h-[655px] p-8 bg-white rounded-2xl">
          <div>
            <div className="flex flex-col">
              Date of birth
              <input {...register("date")} type={"date"} />
            </div>
            <div>
              Profile image
              <div className="w-[350px] h-[350px] flex justify-center items-center">
                <input
                  {...register("image")}
                  type="file"
                  className="w-fit h-fit"
                />
              </div>
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
              Continue {page}/{maxStep} <RightArrow />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
