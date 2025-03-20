"use client";
import { motion } from "motion/react";
export const FourthStep = () => {
  const handleAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };
  return (
    <motion.div
      className="flex justify-center items-center h-screen w-screen bg-[#F4F4F4]"
      variants={handleAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="h-[200px] w-[480px] p-5 bg-white">
          <img src="./images/pineConeLogo.svg" />
          <h1 className="font-semibold text-2xl">You're All Set 🔥</h1>
          <p className="text-[#8E8E8E]">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </motion.div>
  );
};
