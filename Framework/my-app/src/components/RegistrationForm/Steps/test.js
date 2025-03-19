// // "use client";
// // import { ArrowIcon } from "@/assets/Arrow-Icon";
// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { z } from "zod";
// // import { motion } from "framer-motion";

// // export const schema = z.object({
// //   date: z.string().min(1, { message: "Огноо оруулна уу" }),
// //   img: z.instanceof(FileList).refine(
// //     (files) => {
// //       const file = files[0];
// //       const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
// //       return allowedExtensions.includes(file.type.split("/")[1]);
// //     },
// //     { message: "Зурган файл оруулна уу" }
// //   ),
// // });

// // export const Step2 = ({ handleContinue, handlePrev }) => {
// //   const { saveData, setSaveData } = useContext(SaveContext);

// //   const {
// //     register,
// //     formState: { errors },
// //     handleSubmit,
// //     watch,
// //     setValue,
// //   } = useForm({
// //     resolver: zodResolver(schema),
// //     defaultValues: {
// //       date: "",
// //       img: null,
// //     },
// //   });

// //   const { img } = watch();

// //   const onSubmit = (data) => {
// //     console.log("Form data submitted: ", data);
// //     handleContinue(data);
// //   };

// //   const handleAnimation = {
// //     initial: { opacity: 0, x: -100 },
// //     animate: { opacity: 1, x: 0 },
// //     exit: { opacity: 0, x: 100 },
// //     transition: { duration: 0.5 },
// //   };

// //   return (
// //     <motion.div
// //       className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]"
// //       variants={handleAnimation}
// //       initial="initial"
// //       animate="animate"
// //       exit="exit"
// //       transition="transition"
// //     >
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <div className="flex flex-col relative w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
// //           <div className="flex flex-col gap-[8px] mb-[28px]">
// //             <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
// //             <div className="text-[26px] text-[#202124]">
// //               <b>Join Us! 😎</b>
// //             </div>
// //             <div className="text-[#8E8E8E] text-[18px]">
// //               Please provide all current information accurately.
// //             </div>
// //           </div>

// //           <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
// //             <div className="flex gap-[4px] font-semibold">
// //               Date <div className="flex text-[#E14942]">*</div>
// //             </div>
// //             <input
// //               {...register("date")}
// //               type="date"
// //               className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${
// //                 errors.date ? "border-red-600" : "border-[#8B8E95]"
// //               }`}
// //             />
// //             {errors.date && (
// //               <div className="text-red-600 text-sm">{errors.date.message}</div>
// //             )}
// //           </div>

// //           <div className="flex flex-col gap-[8px] text-[14px] text-[#334155] mt-[4px]">
// //             <div className="flex gap-[4px] font-semibold">
// //               Profile Image <div className="flex text-[#E14942]">*</div>
// //             </div>
// //             <input
// //               {...register("img")}
// //               type="file"
// //               className="w-[416px] h-[44px] p-[12px] rounded-md mt-[12px] bg-[#7F7F800D]"
// //             />
// //             {errors.img && (
// //               <div className="text-red-600 text-sm">{errors.img.message}</div>
// //             )}

// //             <div className="flex justify-center mt-4">
// //               {img && (
// //                 <img
// //                   className="w-full h-[200px] object-cover rounded-[10px]"
// //                   src={URL.createObjectURL(img[0])}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //           <div className="flex gap-[8px]">
// //             <button
// //               type="button"
// //               onClick={handlePrev}
// //               className="flex justify-center items-center bg-[white] rounded-[6px] text-[black] h-[44px] w-[416px] mt-[10px] border border-[#CBD5E1]"
// //             >
// //               Back
// //               <ArrowIcon />
// //             </button>
// //             <button
// //               type="submit"
// //               className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
// //             >
// //               Submit <ArrowIcon />
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </motion.div>
// //   );
// // };

// "use client";
// import { ArrowIcon } from "@/assets/Arrow-Icon";
// import { useState, useContext } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion } from "framer-motion";
// import { SaveContext } from "./saveDataProvider";

// export const schema = z.object({
//   date: z.string().min(1, { message: "Огноо оруулна уу" }),
//   img: z
//     .custom((files) => {
//       if (!files || files.length === 0) return false;
//       const file = files[0];
//       const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
//       return allowedExtensions.includes(file.type.split("/")[1]);
//     })
//     .refine((isValid) => isValid, { message: "Зурган файл оруулна уу" }),
// });

// export const Step2 = ({ handleContinue, handlePrev }) => {
//   const { saveData } = useContext(SaveContext);
//   const { updateSaveData } = useContext(SaveContext);

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
//   } = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       date: saveData?.date || "",
//       img: saveData?.img || null,
//     },
//   });

//   const { img } = watch();
//   const [preview, setPreview] = useState(null);

//   const onSubmit = (data) => {
//     if (data.img && data.img[0]) {
//       const file = data.img[0];
//       setPreview(URL.createObjectURL(file));
//     }
//     handleContinue(data);
//     updateSaveData(data);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex flex-col relative w-[480px] h-fit rounded-[8px] justify-between p-[32px] bg-[white]">
//           <div className="flex flex-col gap-[8px] mb-[28px]">
//             <img src="/Images/Main 1.png" className="w-[60px] h-[60px]" />
//             <div className="text-[26px] text-[#202124]">
//               <b>Join Us! 😎</b>
//             </div>
//             <div className="text-[#8E8E8E] text-[18px]">
//               Please provide all current information accurately.
//             </div>
//           </div>

//           <div className="flex flex-col gap-[8px] text-[14px] text-[#334155]">
//             <div className="flex gap-[4px] font-semibold">
//               Date <div className="flex text-[#E14942]">*</div>
//             </div>
//             <input
//               {...register("date")}
//               type="date"
//               className={`w-[416px] h-[44px] border p-[12px] rounded-[8px] ${errors.date ? "border-red-600" : "border-[#8B8E95]"
//                 }`}
//             />
//             {errors.date && (
//               <div className="text-red-600 text-sm">{errors.date.message}</div>
//             )}
//           </div>

//           <div className="flex flex-col gap-[8px] text-[14px] text-[#334155] mt-[4px]">
//             <div className="flex gap-[4px] font-semibold">
//               Profile Image <div className="flex text-[#E14942]">*</div>
//             </div>
//             <input
//               {...register("img")}
//               type="file"
//               className="w-[416px] h-[44px] p-[12px] rounded-md mt-[12px] bg-[#7F7F800D]"
//             />
//             {errors.img && (
//               <div className="text-red-600 text-sm">{errors.img.message}</div>
//             )}

//             <div className="flex justify-center mt-4">
//               {img && (
//                 <img
//                   className="w-full h-[200px] object-cover rounded-[10px]"
//                   src={URL.createObjectURL(img[0])}
//                 />
//               )}
//             </div>
//             {/* <input
//               {...register("img")}
//               type="file"
//               className="w-[416px] h-[44px] p-[12px] rounded-md mt-[12px] bg-[#7F7F800D]"
//             />
//             {errors.img && (
//               <div className="text-red-600 text-sm">{errors.img.message}</div>
//             )}

//             <div className="flex justify-center mt-4">
//               {preview && (
//                 <img
//                   className="w-full h-[200px] object-cover rounded-[10px]"
//                   src={preview}
//                 />
//               )}
//             </div> */}
//           </div>

//           <div className="flex gap-[8px]">
//             <button
//               type="button"
//               onClick={() => {
//                 handlePrev();
//               }}
//               className="flex justify-center items-center bg-[white] rounded-[6px] text-[black] h-[44px] w-[416px] mt-[10px] border border-[#CBD5E1]"
//             >
//               Back
//               <ArrowIcon />
//             </button>
//             <button
//               type="submit"
//               className="flex justify-center items-center bg-[#121316] rounded-[6px] text-[white] h-[44px] w-[416px] mt-[10px]"
//             >
//               Submit <ArrowIcon />
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
// import { StepContext } from "./stepProvider";
export const schema = z.object({
  date: z.string().refine((value) => !isNaN(new Date(value).getTime()), {
    message: "Please select a date.",
  }),
  file: z
    .instanceof(FileList, { message: " image can not be blank" })
    .refine((value) => value !== "", { message: " image can not be blank" }),
});
export const Step3 = () => {
  const { step, setStep, values, setValues } = useContext(StepContext);

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { date: values.date, file: values.file },
  });
  const handlePrev2 = () => {
    setStep(step - 1);
  };
  const handleNext2 = () => {
    setStep(step + 1);
  };

  const { file } = watch();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setValues((prev) => {
          return {
            ...prev,
            date: data.date || prev.date,
            file: data.file || prev.file,
          };
        });
        handleNext2();
      })}
    >
      <div className="w-[480px] h-fit min-h-[655px] p-8 bg-white rounded-[8px] flex flex-col justify-between">
        <div className=" w-full g-fit flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <img src="images/Main 1.svg" className="w-15 h-15" />
            <p className=" text-[26px] font-semibold">Join Us!😎</p>
            <p className=" text-[18px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col relative">
            <p className=" font-semibold text-[14px]">
              Date<span className=" text-red-500">*</span>
            </p>
            <input
              type="date"
              className="w-[416px] h-11 border-[#CBD5E1] border-[1px] rounded-[8px] pl-3"
              {...register("date")}
            />
            {formState.errors.date && (
              <p className="text-xs text-red-500">
                {formState.errors.date.message}
              </p>
            )}
            <p className=" font-semibold text-[14px]">
              Profile image <span className=" text-red-500">*</span>
            </p>
            <div className="relative">
              <input
                hidden
                type="file"
                className={`w-[416px]  h-[180px]   relative z-10 border-[#CBD5E1] rounded-[8px] border-[1px] {border: file !== "" ? "0":"1px"}`}
                {...register("file")}
              />
              <button
                type="button"
                className={`w-[416px] h-[180px]  absolute z-20 border-[#CBD5E1] border-[1px] rounded-[8px] flex flex-col  justify-center items-center `}
                onClick={() =>
                  document.querySelector('input[type="file"]').click()
                }
              >
                <img
                  src="/images/image (5).svg"
                  alt="Upload"
                  className="w-6 h-6 mr-2"
                />
                Add image
              </button>
              {formState.errors.file && (
                <p className="text-xs text-red-500 relative top-47">
                  {formState.errors.file.message}
                </p>
              )}

              {file && (
                <div className="">
                  <img
                    src={URL.createObjectURL(file[0])}
                    className="w-[416px] h-[180px] object-cover absolute top-0 rounded-[8px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className=" w-[128px] h-11 justify-center items-center border-1 border-black rounded-[8px] flex"
            onClick={handlePrev2}
          >
            <img src="/images/chevron_left.svg" />
            back
          </button>
          <button
            type="submit"
            className=" bg-black w-full h-11 rounded-[6px] text-center flex justify-center items-center text-white gap-1 font-bold"
          >
            Continue 2/3
            <img src="/images/chevron_right.svg" />
          </button>
        </div>
      </div>
    </form>
  );
};
