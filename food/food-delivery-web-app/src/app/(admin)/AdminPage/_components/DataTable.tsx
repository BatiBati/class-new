"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { SelectArrow } from "./SelectArrow";
import { Checkbox } from "@/components/ui/checkbox";
import { UpDownArrow } from "./assets/UpDownArrow";
import { Button } from "@/components/ui/button";
import { ChangeDeliveryState } from "./ChangeDeliveryState";

export type Response = {
  foodOrder: FoodOrderType[];
};
export type FoodOrderType = {
  _id: string;
  deliveryAddress: string;
  foodOrderItems: FoodsTypes[];
  status: string;
  totalPrice: number;
  user: UserType;
  createdAt: string;
};

export type FoodType = {
  _id: string;
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
};

type UserType = {
  address: string;
  email: string;
  password: string;
  phoneNumber: number;
  role: string;
  ttl: string;
};
type FoodsTypes = {
  food: FoodType;
  quantity: number;
};

type PropsType = {
  checkAll: boolean;
  setCheckAllAction: React.Dispatch<React.SetStateAction<boolean>>;
  checkTarget: string[];
  setCheckTarget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataTable = ({ checkAll, setCheckAllAction, checkTarget, setCheckTarget }: PropsType) => {
  const [foodOrder, setFoodOrder] = useState<FoodOrderType[]>([]);
  const [checkedValue, setCheckedValue] = useState<boolean>(false)
  console.log(checkedValue);
  console.log(checkTarget);

  const getFoodOrder = async () => {
    try {
      const response = await axios.get<Response>(
        "http://localhost:3001/foodOrder"
      );
      setFoodOrder(response.data.foodOrder);

    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getFoodOrder();
  }, []);

  // const handleCheck = () => {
  //   if (checkedValue) {
  //     setCheckTarget(!checkTarget)
  //   }
  // }

  return (
    <Table>
      <TableHeader className="w-full text-[#71717a] ">
        <TableRow>
          <TableHead className="p-4 w-[30px]">
            <Checkbox checked={checkAll} onCheckedChange={(value) => setCheckAllAction(!!value)} />
          </TableHead>
          <TableHead className="p-4">№</TableHead>
          <TableHead className="p-4">Customer</TableHead>
          <TableHead className="p-4">Food</TableHead>
          <TableHead className="p-4">
            <div className="flex justify-between items-center">
              <div>Date</div>
              <Button className="w-[10px] h-[10px] rounded-full bg-red-500">

                <UpDownArrow />
              </Button>
            </div>
          </TableHead>
          <TableHead className="p-4">Total</TableHead>
          <TableHead className="p-4 w-[300px]">Delivery address</TableHead>
          <TableHead className="p-4">Delivery state</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-full text-[#71717a] h-fit overflow-scroll">
        {foodOrder.slice(0, 10).map((order) => (
          <TableRow key={order._id} className="w-full">
            <TableCell className="p-4 w-[30px]">
              {/* {checkAll ? (<Checkbox checked={checkAll} />) : (<Checkbox checked={checkedValue} onCheckedChange={() => setCheckTarget(!checkedValue)} />)} */}
              <Checkbox
                checked={checkTarget.includes(order._id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCheckTarget(prev => [...prev, order._id]);
                  } else {
                    setCheckTarget(prev => prev.filter(id => id !== order._id));
                  }
                }}
              />
            </TableCell>
            <TableCell className="p-4 w-[30px] align-middle">1</TableCell>
            <TableCell className="p-4">{order.user.email}</TableCell>
            <TableCell className="p-4">
              <div className="w-full flex justify-between">
                <div>{order.foodOrderItems.length} foods</div>
                <div>
                  <SelectArrow foodOrderItems={order.foodOrderItems} />
                </div>
              </div>
            </TableCell>
            <TableCell className="p-4">{order.createdAt}</TableCell>
            <TableCell className="p-4 ">{order.totalPrice}₮</TableCell>
            <TableCell className="p-4 ">
              {order.deliveryAddress}
            </TableCell>
            <TableCell>
              <ChangeDeliveryState order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table >
  );
};
