"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { RightArrow } from "@/components/assets/RightArrow";
import { LeftArrow } from "@/components/assets/LeftArrow";

export const ThirdStep = ({ nextPage, prevStep, maxStep }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const page = 3;
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      date: "",
      image: "",
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    }
    setImagePreview(null);
  };

  const clearImage = () => {
    setImagePreview(null); // Clear the image preview
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input's value
    }
  };

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
            <div className="bg-red-200">
              Profile image
              <div className="w-full h-full flex justify-center items-center bg-amber-200">
                <input
                  {...register("image")}
                  accept=".png,.jpg,.jpeg"
                  className="w-fit h-fit"
                  onChange={handleImageChange}
                  type="file"
                />
                <img
                  src={imagePreview}
                  className="mt-4 w-fit h-fit object-cover rounded-lg"
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
              Continue {page}/{maxStep}
              <RightArrow />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
