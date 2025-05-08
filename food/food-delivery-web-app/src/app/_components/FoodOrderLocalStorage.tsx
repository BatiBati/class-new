"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBox } from "./assets/ShoppingBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { UserLastOrder } from "./UserLastOrder";
export type Food = {
  foodId: string;
  foodImage: string;
  foodName: string;
  foodIngredients: string;
  foodPrice: number;
  quantity: number;
  oneFoodTotalPrice: number;
};

export const GetFoodOrderLocalStorage = () => {
  const [selectedTab, setSelectedTab] = useState("cart");
  const [foodDataFromLocalStorage, setFoodDataFromLocalStorage] = useState<
    Food[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState(0.99);

  const ITEMS_TOTAL = foodDataFromLocalStorage.reduce(
    (acc, item) => acc + item.foodPrice * item.quantity,
    0
  );

  const TOTAL_PRICE = ITEMS_TOTAL + shipping;

  useEffect(() => {
    const existing: Food[] = JSON.parse(
      localStorage.getItem("foodOrder") || "[]"
    );

    setFoodDataFromLocalStorage(existing);
  }, []);

  const handleDeleteFood = (foodId: string) => {
    setLoading(true);
    const updatedData = foodDataFromLocalStorage.filter(
      (food) => food.foodId !== foodId
    );

    setFoodDataFromLocalStorage(updatedData);
    localStorage.setItem("foodOrder", JSON.stringify(updatedData));
    setLoading(false);
  };

  const handlePlusFood = (foodId: string, foodPrice: number) => {
    let updatedData = [...foodDataFromLocalStorage];

    updatedData = updatedData.map((item) => {
      if (item.foodId === foodId) {
        return {
          ...item,
          quantity: item.quantity + 1,
          oneFoodTotalPrice: item.quantity * foodPrice + item.foodPrice,
        };
      }
      return item;
    });

    setFoodDataFromLocalStorage(updatedData);

    localStorage.setItem("foodOrder", JSON.stringify(updatedData));
  };

  const handleMinusFood = (foodId: string, foodPrice: number) => {
    let updatedData = [...foodDataFromLocalStorage];
    updatedData = updatedData.map((item) => {
      if (item.foodId === foodId) {
        return {
          ...item,
          quantity: item.quantity - 1,
          oneFoodTotalPrice: item.quantity * foodPrice - item.foodPrice,
        };
      }
      return item;
    });
    setFoodDataFromLocalStorage(updatedData);

    localStorage.setItem("foodOrder", JSON.stringify(updatedData));
    console.log(updatedData);
  };

  console.log(foodDataFromLocalStorage);

  return (
    <SheetHeader>
      <SheetTitle>
        <div className="flex w-full gap-3 items-center">
          <ShoppingBox width="24px" height="24px" stroke="#fff" />
          <p className="text-[20px] font-semibold text-white">Order detail</p>
        </div>
      </SheetTitle>
      <div className="flex w-full h-fit">
        <Tabs
          defaultValue="cart"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 rounded-full w-full">
            <TabsTrigger
              value="cart"
              style={
                selectedTab === "cart"
                  ? { backgroundColor: "#EF4444", color: "white" }
                  : {}
              }
              className="rounded-full"
            >
              Cart
            </TabsTrigger>
            <TabsTrigger
              value="order"
              style={
                selectedTab === "order"
                  ? { backgroundColor: "#EF4444", color: "white" }
                  : {}
              }
              className="rounded-full"
            >
              Order
            </TabsTrigger>
          </TabsList>
          {foodDataFromLocalStorage.length > 0 ? (
            <div>
              <TabsContent value="cart" className="flex flex-col gap-6 w-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[20px] font-semibold">
                      My cart
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {foodDataFromLocalStorage.map((food) => {
                      return (
                        <div key={food.foodId}>
                          {loading === true ? (
                            <Loader />
                          ) : (
                            <div className="space-y-1 flex w-full gap-[10px]">
                              <img
                                src={`${food.foodImage}`}
                                className="w-[120px] h-[135px] rounded-xl"
                              />

                              <div className="w-full h-fit flex flex-col gap-2">
                                <div className="flex w-full justify-between">
                                  <div className="text-[#EF4444] font-bold text-[16px]">
                                    {food.foodName}
                                  </div>
                                  <Button
                                    className="rounded-full border-[1px] border-[#EF4444] text-[#EF4444] hover:text-[#EF4444] cursor-pointer"
                                    variant="outline"
                                    onClick={() =>
                                      handleDeleteFood(food.foodId)
                                    }
                                  >
                                    X
                                  </Button>
                                </div>
                                <div>{food.foodIngredients}</div>
                                <div className="w-full flex justify-between items-center">
                                  <div className="flex gap-2 items-center">
                                    <Button
                                      className="rounded-full"
                                      onClick={() =>
                                        handleMinusFood(
                                          food.foodId,
                                          food.foodPrice
                                        )
                                      }
                                    >
                                      -
                                    </Button>
                                    {food.quantity}
                                    <Button
                                      className="rounded-full"
                                      onClick={() =>
                                        handlePlusFood(
                                          food.foodId,
                                          food.foodPrice
                                        )
                                      }
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <div>${food.oneFoodTotalPrice}</div>
                                </div>
                              </div>
                            </div>
                          )}
                          {foodDataFromLocalStorage.length! === 0 ? (
                            ""
                          ) : (
                            <div className="w-full border-[2px] border-dashed mt-5 mb-5"></div>
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[20px] font-semibold">
                      Payment info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 w-full flex flex-col gap-2">
                      <div className="w-full flex justify-between">
                        <div className="text-[#71717A]">Items</div>
                        <div className="text-[#09090B] font-bold text-[16px]">
                          {ITEMS_TOTAL}
                        </div>
                      </div>
                      <div className="w-full flex justify-between">
                        <div className="text-[#71717A]">Shipping</div>
                        <div className="text-[#09090B] font-bold text-[16px]">
                          ${shipping}
                        </div>
                      </div>
                      <div className="w-full border-[2px] border-dashed"></div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="text-[#71717A]">Total</div>
                      <div className="text-[#09090B] font-bold text-[16px]">
                        ${TOTAL_PRICE}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full border-[1px] bg-[#EF4444] hover:bg-[#EF4444] hover:text-white text-white cursor-pointer">
                      Checkout
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <UserLastOrder />
            </div>
          ) : (
            <div className="w-full text-white flex justify-center">
              Order food is empty
            </div>
          )}
        </Tabs>
      </div>
    </SheetHeader>
  );
};
