"use client";

const runningWords = [1, 2, 3, 4];

export const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[755px] bg-[#18181B] text-white">
        <div className="w-[1440px] h-[92px] bg-[#EF4444] flex gap-[34px] px-[98px] py-7">
          {runningWords.map((_, i) => {
            return (
              <span className="text-white text-[30px] font-semibold" key={i}>
                Fresh fast delivered
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
