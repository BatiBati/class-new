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
import { useEffect, useState } from "react";
import { Food, GetFoodOrderLocalStorage } from "./FoodOrderLocalStorage";
import { useAuth } from "../_providers/AuthProvider";

export const FoodOrders = () => {
  const [orderFoods, setOrderFoods] = useState<Food[]>([]);

  useEffect(() => {
    const existing: Food[] = JSON.parse(
      localStorage.getItem("foodOrder") || "[]"
    );

    setOrderFoods(existing);
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-white w-9 h-9 rounded-full relative"
          variant={"outline"}
        >
          <ShoppingBox width="100px" height="13px" stroke="#000" />
          {orderFoods.length > 0 && (
            <div className="absolute right-[-10px] top-[-10px] w-[20px] h-[20px] bg-[#ef4444] rounded-full">
              {orderFoods.length}
            </div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="!w-[520px] !max-w-none p-3 bg-[#404040] rounded-tl-[30px] rounded-bl-[30px] border-0">
        <GetFoodOrderLocalStorage />
      </SheetContent>
    </Sheet>
  );
};
