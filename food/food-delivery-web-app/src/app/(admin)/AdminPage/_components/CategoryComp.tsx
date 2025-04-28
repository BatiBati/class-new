"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FoodCount } from "./FoodCount";
import { Foods } from "./Foods";

type Response = {
  category: CategoryType[];
};

type CategoryType = {
  categoryName: string;
  _id: string;
};

export const CategoryCompTop = () => {
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
    <div className="flex flex-wrap gap-3 ">
      {categories.map((category, i) => {
        return (
          <div
            className="flex gap-[8px] py-2 px-4 border-[1px] border-[#e44e7] rounded-full"
            key={i}
          >
            <div> {category.categoryName}</div>
          </div>
        );
      })}
    </div>
  );
};
