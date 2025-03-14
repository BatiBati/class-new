"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputTag } from "../InputTag/InputTag";
import { useState } from "react";

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

export const FirstStep = ({ nextPage }) => {
  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
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
            Firstname
            <InputTag
              {...register("firstname")}
              error={formState.errors["firstname"]}
            />
          </div>
          <div>
            Lastname
            <InputTag
              {...register("lastname")}
              error={formState.errors["lastname"]}
            />
          </div>
          <div>
            username
            <InputTag
              {...register("username")}
              error={formState.errors["username"]}
            />
          </div>
        </div>
        <div>
          <button className="bg-black text-white w-full p-2 mt-3" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
