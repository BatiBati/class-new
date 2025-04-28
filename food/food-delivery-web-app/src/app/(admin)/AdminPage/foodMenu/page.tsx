"use client";
import { PlusSvg } from "@/app/_components/assets/PlusSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryCompTop } from "../_components/CategoryComp";
import { CategoryCompBot } from "../_components/CategoryCompBot";

export type FoodResponse = {
  foods: FoodType[];
};

export type FoodType = {
  _id: string;
  price: number;
  ingredients: string;
  image: string;
  foodName: string;
  createdAt: string;
  updatedAt: string;
  category: CategoryType;
};

type CategoryType = {
  categoryName: string;
  _id: string;
};

export default function Home() {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getFood = async () => {
    try {
      const foodResponse = await axios.get<FoodResponse>(
        `http://localhost:3001/food/`
      );
      setFoods(foodResponse.data.foods);
    } catch (error) {
      console.error("Error fetching foods", error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-[#F4F4F5] p-10 w-full">
      <div className="w-full flex justify-end">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full flex flex-col gap-4 p-6 bg-white rounded-xl">
        <div className=" text-[20px] font-semibold">Dish Category</div>
        <div className="w-full flex  gap-3 items-center">
          <div className="flex gap-[8px] py-2 px-4 border-[1px] border-[#ef4444] rounded-full">
            All dishes
            <span className="py-[2px] px-[10px] bg-[#18181b] rounded-full text-white h-fit">
              {foods.length}
            </span>
          </div>
          <CategoryCompTop />
          <div className="w-9 h-9 bg-red-500  rounded-full flex justify-center items-center">
            <PlusSvg stroke="white" />
          </div>
        </div>
      </div>

      <CategoryCompBot />
    </div>
  );
}
