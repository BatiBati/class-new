import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { FoodOrdersCard } from "./FoodOrdersCard";
import { ClockSvg } from "./assets/ClockSvg";
import { DeliverySvg } from "./assets/DeliverySvg";
import { NoOrderYet } from "./NoOrderYet";

type OrderDataType = {
  foodOrder: FoodsType[];
};

type FoodsType = {
  _id: string;
  totalPrice: number;
  status: string;
  user: UserType;
  foodOrderItems: foodOrderItems[];
  createdAt: string;
};
type UserType = {
  email: string;
  password: string;
};
export type foodOrderItems = {
  _id: string;
  quantity: number;
  food: OneFood;
};

export type OneFood = {
  _id: string;
  price: number;
  ingredients: string;
  image: string;
  foodName: string;
};

export const UserLastOrder = ({ foodOrder }: OrderDataType) => {
  console.log(foodOrder);

  return (
    <div>
      {foodOrder.length === 0 ? (
        <NoOrderYet />
      ) : (
        <TabsContent value="order">
          <Card>
            <CardHeader>
              <CardTitle>Order history</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 h-[950px] overflow-scroll">
              {foodOrder.map((order) => {
                return (
                  <div className="space-y-1 " key={order._id}>
                    <div className="w-full flex justify-between">
                      <div className="text-[16px] font-bold">
                        ${order.totalPrice + 0.99}
                      </div>
                      <div className="w-fit rounded-full border-[#ef4444] border text-[12px] font-semibold p-[10px]">
                        {order.status}
                      </div>
                    </div>
                    <div className="w-full ">
                      <FoodOrdersCard orderFoods={order.foodOrderItems} />
                    </div>
                    <div className="text-[#71717A] text-[12px] flex gap-3">
                      <ClockSvg /> {order.createdAt}
                    </div>
                    <div>
                      <DeliverySvg />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </div>
  );
};
