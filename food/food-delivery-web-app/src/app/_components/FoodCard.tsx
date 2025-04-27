"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusSvg } from "./assets/PlusSvg";
type ResponseOfFoodsType = {
  foods: Food[];
};
type Food = {
  _id: number;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

type IdNumber = {
  id: string;
};

export const FoodCard = ({ id }: IdNumber) => {
  const [foods, setFoods] = useState<Food[]>([]);

  const getFoodData = async () => {
    try {
      const response = await axios.get<ResponseOfFoodsType>(
        `http://localhost:3001/food?categoryId=${id}`
      );
      setFoods(response.data.foods);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getFoodData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-9 ">
      {foods.map((food) => {
        return (
          <div
            className="w-[398px] h-[342px] bg-white rounded-[20px] overflow-hidden flex flex-col p-5 gap-5"
            key={food._id}
          >
            <div className="rounded-xl overflow-hidden h-[210px] relative">
              <img src="/images/TestFoodPic.png" className="h-full w-full" />
              <div className="absolute right-1 bottom-2 w-11 h-11 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <PlusSvg stroke={"#EF4444"} />
              </div>
            </div>
            <div className="w-full gap-2 h-fit flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <p className="text-[#EF4444]">{food.foodName}</p>
                <p className="text-black text-[24px] font-semibold">
                  ${food.price}
                </p>
              </div>
              <p className="text-black text-[14px]">{food.ingredients}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
