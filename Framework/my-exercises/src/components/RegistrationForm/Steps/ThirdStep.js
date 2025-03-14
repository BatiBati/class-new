"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTag } from "../InputTag/InputTag";
import { useState } from "react";
import { formatDate } from "date-fns";

export const schema = z.object({
  // date: z.refine(),
});

export const ThirdStep = ({ nextPage, prevStep }) => {
  const [date, setDate] = useState("");

  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      date: "",
      image: "",
    },
  });

  console.log(formatDate);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(() => {
          nextPage();
        })}
      >
        <div className="flex flex-col gap-5">
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
