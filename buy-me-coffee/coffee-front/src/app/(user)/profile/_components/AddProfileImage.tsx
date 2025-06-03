// "use client";

// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { ControllerRenderProps } from "react-hook-form";
// type AddPictureProps = {
//   field: ControllerRenderProps<any, string>; // "any" can be your form schema, "string" is the field name
// };

// export const AddProfileImage = ({ field }: AddPictureProps) => {
//   const [uploadedImage, setUploadedImage] = useState("");

//   const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {};
//   console.log(uploadedImage);
//   return (
//     <Input
//       // placeholder="Enter username here."
//       {...field}
//       className="p-[100px] rounded-full w-[100px] h-[100px] absolute top-0 left-0 opacity-0"
//       onChange={(event) => setUploadedImage(event?.target.files?.[0])}
//       id="picture"
//       type="file"
//     />
//   );
// };
