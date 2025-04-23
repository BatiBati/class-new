"use client";
import { z } from "zod";
const formSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: "Username must be at least 2 characters.",
    })
    .email(),
});
export const CreateAccount = () => {
  return <div></div>;
};
