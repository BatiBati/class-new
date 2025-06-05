"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhotoSvg } from "./_components/assets/PhotoSvg";
import { useState } from "react";
import { useAuth } from "@/app/_providers/AuthProvider";
import axios from "axios";
import Image from "next/image";

const profileSchema = z.object({
  image: z.string().min(3, { message: "Please enter your profile image." }),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  about: z
    .string()
    .min(3, { message: "About must be at least 3 characters." })
    .max(255, { message: "Max character 255 digits" }),
  socialMediaUrl: z.string().includes("https://"),
});

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState("");
  const { loading, setLoading } = useAuth();
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      image: uploadedImage[0],
      name: "",
      about: "",
      socialMediaUrl: "",
    },
  });

  const uploadedImageFunction = async (file: File | undefined) => {
    if (!file) {
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_KEY!);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = response.data.url;
      return result;
    } catch (error) {
      console.error("Failed to upload image", error);
    }
  };

  const handleInputFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    if (files) {
      const result = await uploadedImageFunction(files);
      setUploadedImage(result);
    }
  };

  function onSubmit(values: z.infer<typeof profileSchema>) {
    const handleCreate = async () => {
      // try {
      //   setLoading(true);
      //   const createProfileData = await.post()
      // }

    };
  }


  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-fit h-fit">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="w-500px">
                  <div className="flex flex-col gap-2">
                    <p className="text-[24px] font-semibold">
                      Complete your profile page
                    </p>
                  </div>
                  <FormLabel>Add photo</FormLabel>
                  <div className="w-fit h-full relative flex justify-center items-center">
                    <div className="p-[100px] rounded-full w-[100px] h-[100px] border-2 border-dashed">
                      {/* <AddProfileImage field={field} /> */}
                      <Input
                        // placeholder="Enter username here."
                        {...field}
                        className="p-[100px] rounded-full w-[100px] h-[100px] absolute top-0 left-0 opacity-0"
                        onChange={handleInputFile}
                        id="picture"
                        type="file"
                      />
                    </div>
                    <div className="w-fit h-fit absolute">
                      {uploadedImage ? (
                        <Image src={`${uploadedImage}`} alt="uploadedImage" width={150} height={150} />
                      ) : (
                        <PhotoSvg />
                      )}
                    </div>
                  </div>
                  <FormControl className="w-full"></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-500px">
                  <FormLabel>Email</FormLabel>
                  <FormControl className="w-full">
                    <Input
                      placeholder="Enter username here."
                      {...field}
                      className="pr-0 pl-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write about yourself..."
                      {...field}
                      className="min-h-[150px] resize-none p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialMediaUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Social media URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write about yourself..."
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end">
              <Button type="submit" variant={"outline"}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
