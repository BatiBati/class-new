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
          className="bg-white hover:bg-[#ef4444] w-9 h-9 rounded-full relative"
          variant={"outline"}
        >
          <ShoppingBox width="100px" height="13px" stroke="#000" />
          <div className="absolute right-[-10px] top-[-10px] w-[20px] h-[20px] bg-[#ef4444] rounded-full">
            1
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6 bg-[#404040] rounded-tl-[30px] rounded-bl-[30px] border-0">
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
              className="w-[400px]"
              value={selectedTab}
              onValueChange={setSelectedTab}
            >
              <TabsList className="grid w-full grid-cols-2 rounded-full">
                <TabsTrigger
                  value="cart"
                  style={
                    selectedTab === "cart" ? { backgroundColor: "#EF4444" } : {}
                  }
                  className="rounded-full"
                >
                  Cart
                </TabsTrigger>
                <TabsTrigger
                  value="order"
                  style={
                    selectedTab === "order"
                      ? { backgroundColor: "#EF4444" }
                      : {}
                  }
                  className="rounded-full"
                >
                  Order
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cart">
                <Card>
                  <CardHeader>
                    <CardTitle>My cart</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
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
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
