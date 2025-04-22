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
    <div className="w-[1440px] h-[176px] bg-[#404040] flex flex-col justify-between pt-8 pb-8 p-[48px]">
      <div className="text-[30px] font-semibold text-white">Categories</div>
      <div className="w-full ">
        <Carousel>
          <div className="flex justify-center">
            <CarouselContent className="  w-[1248px]">
              {categories.map((category, i) => {
                return (
                  <div key={i} className="w-fit">
                    <CarouselItem>
                      <div className="bg-white w-fit rounded-full pl-3 pr-3 pt-1 pb-1 flex justify-center">
                        {category.categoryName}
                      </div>
                    </CarouselItem>
                  </div>
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
