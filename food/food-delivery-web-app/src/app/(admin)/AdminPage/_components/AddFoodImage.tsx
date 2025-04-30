"use client";
import { AddPictureSvg } from "./assets/AddPictureSvg";

export const AddFoodImage = () => {
  return (
    <div className="w-full h-[140px] relative flex justify-center items-center bg-[#dee6f9] rounded-xl border-[4px] border-dotted border-[#c3c9f5]">
      <input
        type="file"
        className="w-full h-full flex flex-col justify-center items-center absolute text-[#dee6f9] z-10"
      />
      <div className="absolute flex flex-col items-center justify-start  gap-5">
        <div className="p-3 rounded-full bg-white ">
          <AddPictureSvg />
        </div>
        <div className="text-[#6e7289]">
          Choose a file or drag & drop it here
        </div>
      </div>
    </div>
  );
};
