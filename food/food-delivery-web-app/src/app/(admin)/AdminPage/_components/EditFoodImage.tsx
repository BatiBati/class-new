"use client";

import { Loader } from "lucide-react";
import { AddPictureSvg } from "./assets/AddPictureSvg";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";

type EditFoodImageType = {
  deployedImageUrl: string;
  setDeployedImageUrl: () => Promise<void>;
};

export const EditFoodImage = ({
  deployedImageUrl,
  setDeployedImageUrl,
}: EditFoodImageType) => {







  return (
    <div>
      {!deployedImageUrl && (
        <div className="w-full h-[140px] relative flex justify-center items-center bg-[#dee6f9] rounded-xl border-[4px] border-dotted border-[#c3c9f5]">
          <input
            type="file"
            className="w-full h-full flex flex-col justify-center items-center absolute text-[#dee6f9] z-10"
            // onChange={deployImg}
          />
          {loading ? (
            <Loader />
          ) : (
            <div className="absolute flex flex-col items-center justify-start  gap-5">
              <div className="p-3 rounded-full bg-white ">
                <AddPictureSvg />
              </div>
              <div className="text-[#6e7289]">
                Choose a file or drag & drop it here
              </div>
            </div>
          )}
        </div>
      )}

      {/* {deployedImageUrl && (
        <div className="relative">
          <img
            src={`${deployedImageUrl}`}
            className="w-full h-[138px] rounded-xl"
          />
          <Button className="absolute right-3 top-3 rounded-full ">X</Button>
        </div>
      )} */}
    </div>
  );
};
