"use client";

import axios from "axios";
import { EditSvg } from "./assets/EditSvg";
import { useEffect, useState } from "react";
import { FoodResponse, FoodType } from "../foodMenu/page";
import { FoodAddComp } from "./FoodAddComp";
import { FoodEditButton } from "./FoodEditButton";
import { Button } from "@/components/ui/button";

type FoodsProps = {
  categoryId: string;
  categoryName: string;
  getCategoryData: () => Promise<void>;
};

export const Foods = ({
  categoryId,
  categoryName,
  getCategoryData,
}: FoodsProps) => {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getFood = async () => {
    try {
      const foodResponse = await axios.get<FoodResponse>(
        `http://localhost:3001/food?categoryId=${categoryId}`
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
    <div className="flex flex-wrap gap-5 ">
      <div className="w-full text-[20px] font-semibold">
        {categoryName} ({foods.length})
      </div>
      <FoodAddComp
        categoryName={categoryName}
        categoryId={categoryId}
        getCategoryData={getCategoryData}
        getFood={getFood}
      />
      {foods.map((food) => {
        return (
          <div
            className="w-[270px] h-[241px] bg-white rounded-[20px] overflow-hidden flex flex-col p-4 gap-5 border-[1px]"
            key={food._id}
          >
            <div className="rounded-xl overflow-hidden h-[210px] relative ">
              <img src={`${food.image}`} className="h-full w-full rounded-xl" />
              <div className="absolute right-5 bottom-5 w-11 h-11 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <FoodEditButton />
              </div>
            </div>

            <div className="w-full gap-2 h-fit flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <p className="text-[#EF4444] font-medium">{food.foodName}</p>
                <p className="text-black text-[12px] font-normal">
                  $ {food.price}
                </p>
              </div>

              <p className="text-black text-[12px] font-normal">
                {food.ingredients}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
