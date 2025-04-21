"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type Response = {
  data: FoodType[];
};

type FoodType = {
  category: Object;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

export default function Home() {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getFoods = async () => {
    try {
      const response = await axios.get<Response>("http://localhost:3001/food");
      setFoods(response.data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };
  useEffect(() => {
    getFoods();
  }, []);
  console.log(foods);

  return <div>Hi</div>;
}
