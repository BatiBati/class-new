"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const FoodOrders = () => {
  const [selectedTab, setSelectedTab] = useState("cart");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-white w-9 h-9 rounded-full relative"
          variant={"outline"}
        >
          <ShoppingBox width="100px" height="13px" stroke="#000" />
          {/* <div className="absolute right-[-10px] top-[-10px] w-[20px] h-[20px] bg-[#ef4444] rounded-full">
            1
          </div> */}
        </Button>
      </SheetTrigger>
      <SheetContent className="!w-[520px] !max-w-none p-3 bg-[#404040] rounded-tl-[30px] rounded-bl-[30px] border-0">
        <SheetHeader>
          <SheetTitle>
            <div className="flex w-full gap-3 items-center">
              <ShoppingBox width="24px" height="24px" stroke="#fff" />
              <p className="text-[20px] font-semibold text-white">
                Order detail
              </p>
            </div>
          </SheetTitle>
          <div className="flex w-full h-fit ">
            <Tabs
              defaultValue="cart"
              value={selectedTab}
              onValueChange={setSelectedTab}
            >
              <TabsList className="grid w-full grid-cols-2 rounded-full">
                <TabsTrigger
                  value="cart"
                  style={
                    selectedTab === "cart" ? { backgroundColor: "#EF4444", color: "white" } : {}
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
              <TabsContent value="cart" className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[20px] font-semibold">My cart</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 flex w-full gap-[10px]">
                      <div className="h-[120px]">
                        <img src="/images/orderFood.png" className="w-full h-full rounded-xl" />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <div className="flex w-full justify-between">
                          <div className="text-[#EF4444] font-bold text-[16px]">Sunshine Stackers </div>
                          <Button className="rounded-full border-[1px] border-[#EF4444] text-[#EF4444] hover:text-[#EF4444] cursor-pointer" variant="outline">X</Button>
                        </div>
                        <div>Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</div>
                      </div>

                    </div>
                    <div className="w-full border-[2px] border-dashed"></div>
                  </CardContent>
                  <CardFooter>

                    <Button className="w-full rounded-full border-[1px] border-[#EF4444] text-[#EF4444] hover:text-[#EF4444] cursor-pointer">Add food</Button>

                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[20px] font-semibold">Payment info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 w-full flex flex-col gap-2">
                      <div className="w-full flex justify-between">
                        <div className="text-[#71717A]">Items</div>
                        <div className="text-[#09090B] font-bold text-[16px]">$25.2</div>
                      </div>
                      <div className="w-full flex justify-between">
                        <div className="text-[#71717A]">Shipping</div>
                        <div className="text-[#09090B] font-bold text-[16px]">$25.2</div>
                      </div>
                      <div className="w-full border-[2px] border-dashed"></div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="text-[#71717A]">Total</div>
                      <div className="text-[#09090B] font-bold text-[16px]">$25.2</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full border-[1px] bg-[#EF4444] hover:bg-[#EF4444] hover:text-white text-white cursor-pointer">Checkout</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="order">
                <Card>
                  <CardHeader>
                    <CardTitle>Order</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged
                      out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SheetHeader>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};
