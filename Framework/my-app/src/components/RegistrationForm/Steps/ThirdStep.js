"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useRef, useState } from "react";
import { RightArrow } from "@/components/assets/RightArrow";
import { LeftArrow } from "@/components/assets/LeftArrow";
import { InputImage } from "@/components/assets/InputImage";
import { format } from "date-fns";
import { date } from "zod";
import { StepContext } from "./StepProvider";

export const ThirdStep = ({ nextPage, prevStep, maxStep }) => {
  const { values, setValues } = useContext(StepContext);
  const [imagePreview, setImagePreview] = useState(null);
  const page = 3;
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      date: values.date,
      image: values.image,
    },
  });

  const saveValues = (data) => {
    const newValues = { ...values };
    newValues.date = data.date;
    newValues.image = data.image;
    setValues(newValues);
    nextPage();
  };
  const importImage = () => {
    return setImagePreview(<img src="./images/2birds.png" />);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
      // onSubmit={handleSubmit((data) => {
      //   saveValues(data);
      // })}
      >
        <div className="flex flex-col justify-between gap-5 w-[480px] h-[655px] p-8 rounded-2xl ">
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
            Date of birth
            <div>
              <input
                {...register("date")}
                className="w-full h-fit"
                type="date"
              />
            </div>
          </div>

          <div className=" h-full w-full flex flex-col gap-2 text-sm font-semibold text-[#334155] ">
            Profile image
            <div className="w-full h-full bg-[#e5e5e5] text-[#09090B] flex flex-col justify-center items-center rounded-2xl">
              {imagePreview === null && (
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-4xl p-2 bg-white w-fit h-fit hover:cursor-pointer">
                    <InputImage />
                  </div>
                </div>
              )}
              {imagePreview !== null && (
                <div className="w-full h-full bg-[#e5e5e5] text-[#09090B] flex flex-col justify-center items-center rounded-2xl">
                  <div></div>
                </div>
              )}
              <button onClick={importImage}> Add image </button>
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
    </div>
  );
};
