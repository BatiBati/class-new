"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { CountFoods } from "./CountFoods";
import { Button } from "@/components/ui/button";
import { AddCategory } from "./AddCategory";

type Response = {
  category: CategoryType[];
};

type CategoryType = {
  categoryName: string;
  _id: string;
};

type FoodsLengthType = {
  foodsLength: number;
};
export const CategoryCompTop = ({ foodsLength }: FoodsLengthType) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const getCategoryData = async () => {
    try {
      const response = await axios.get<Response>(
        `http://localhost:3001/category`
      );
      setCategories(response.data.category);
    } catch (error) {
      console.error("Error fetching category", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button className="rounded-full">
        <div>All Dishes</div>
        <div className="bg-black text-white rounded-full px-[10px] py-[2px]">
          {foodsLength}
        </div>
      </Button>
      {categories.map((category) => {
        return (
          <div key={category._id}>
            <CountFoods
              categoryId={category._id}
              categoryName={category.categoryName}
            />
          </div>
        );
      })}
      <AddCategory />
    </div>
  );
};
