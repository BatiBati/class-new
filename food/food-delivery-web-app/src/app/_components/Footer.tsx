"use client";

import { useEffect, useState } from "react";
import { LogoCol } from "./assets/LogoCol";
import axios from "axios";

const runningWords = [1, 2, 3, 4];

type Response = {
  category: Categories[];
};

type Categories = {
  categoryName: string;
};

export const Footer = () => {
  const [categories, setCategory] = useState<Categories[]>([]);

  const getCategoryData = async () => {
    try {
      const response = await axios.get<Response>(
        "http://localhost:3001/category"
      );
      setCategory(response.data.category);
      console.log(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  console.log(categories);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[755px] bg-[#18181B] text-white relative">
        <div className="absolute top-[60px]">
          <div className="w-[1440px] h-[92px] bg-[#EF4444] flex gap-[34px] px-[98px] py-7 overflow-hidden ">
            <div className="w-[500%] flex">
              {runningWords.map((_, i) => {
                return (
                  <span
                    className="text-white text-[30px] font-semibold w-[100%]"
                    key={i}
                  >
                    Fresh fast delivered
                  </span>
                );
              })}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[1264px] h-fit relative flex justify-center gap-28">
              <div className="absolute left-0 top-0">
                <LogoCol />
              </div>
              <div className="w-fit gap-4 flex flex-col">
                <span className="text-[#71717A]">NOMNOM</span>
                <span>Home</span>
                <span>Contact us</span>
                <span>Delivery zone</span>
              </div>
              <div className="w-fit gap-4 flex flex-col">
                <span className="text-[#71717A]">Menu</span>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((item, index) => {
                    return (
                      <span key={index} className="cursor-pointer">
                        {item.categoryName}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="w-fit flex flex-col gap-4">
                <span className="text-[#71717A]">Follow us</span>
                <div className="flex gap-4 py-[5px]  h-fit w-fit ">
                  <img src="/images/Facebook.png" className="w-7 h-6.5" />
                  <img src="/images/Instagram.png" className="w-7 h-6.5" />
                </div>
              </div>
            </div>
          </div>
          <div>s</div>
        </div>
      </div>
    </div>
  );
};
