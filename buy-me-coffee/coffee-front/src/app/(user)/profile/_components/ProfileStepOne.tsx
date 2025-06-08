"use client"

import { z } from "zod";

const profileSchema = z.object({
    profileImage: z.string().min(3, { message: "Please enter your profile image." }),
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    about: z
        .string()
        .min(3, { message: "About must be at least 3 characters." })
        .max(255, { message: "Max character 255 digits" }),
    socialMediaUrl: z.string().includes("https://"),
});
export const ProfileStepOne = () => {
    return <div>

    </div>
}