import { useEffect, useState } from "react";
import { Categories, Response } from "./Footer";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CategoryNames = () => {
  const [categories, setCategory] = useState<Categories[]>([]);

  const getCategoryData = async () => {
    try {
      const response = await axios.get<Response>(
        "http://localhost:3001/category"
      );
      setCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="w-[1440px] bg-[#404040] flex flex-col justify-between gap-9 pt-8 pb-8 p-[48px]">
      <div className="text-[30px] font-semibold text-white">Categories</div>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <div className="w-full flex justify-center ">
            <CarouselContent className="w-[1200px] flex gap-10">
              {categories.map((category) => {
                return (
                  <CarouselItem
                    className="md:basis-1/9 bg-white flex justify-center rounded-full  "
                    key={category._id}
                  >
                    <div>{category.categoryName}</div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
