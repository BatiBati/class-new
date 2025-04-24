import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { DownArrow } from "./assets/DownArrow";
import { FoodType } from "./DataTable";

type Props = {
  foodOrderItems: FoodsTypes[];
};

type FoodsTypes = {
  food: FoodType;
  quantity: number;
};

export const SelectArrow = ({ foodOrderItems }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full h-full flex justify-center items-center">
          <Button className="bg-white hover:bg-white w-4 h-4">
            <DownArrow />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-3 gap-3 rounded-md w-[300px] h-fit flex flex-col">
        {foodOrderItems.map((food, i) => {
          return (
            <div
              className="w-full h-fit flex items-center justify-between gap-[20px]"
              key={i}
            >
              <div className="flex gap-[10px] items-center">
                <div className="rounded-sm overflow-hidden ">
                  <img
                    src="/images/TestFoodPic.png"
                    className="w-[50px] h-[42px]"
                  />
                </div>
                <div className="text-[12px]">{food.food.foodName}</div>
              </div>
              <div className="flex gap-1">
                {food.quantity && <div>x</div>}
                {food.quantity}
              </div>
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};
