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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

type Response = {
  foodOrder: FoodOrderType[];
};
type FoodOrderType = {
  _id: string;
  deliveryAddress: string;
  foodOrderItems: FoodsTypes[];
  status: string;
  totalPrice: number;
  user: UserType;
  createdAt: string;
};

export type FoodType = {
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

export const DataTable = () => {
  const [foodOrder, setFoodOrder] = useState<FoodOrderType[]>([]);

  const getFoodOrder = async () => {
    try {
      const response = await axios.get<Response>(
        "http://localhost:3001/foodOrder"
      );
      setFoodOrder(response.data.foodOrder);
      console.log(response.data.foodOrder);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getFoodOrder();
  }, []);

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="w-full text-[#71717a]">
        <TableRow>
          <TableHead className="p-4 w-[30px]">
            <Checkbox />
          </TableHead>
          <TableHead className="p-4">№</TableHead>
          <TableHead className="p-4">Customer</TableHead>
          <TableHead className="p-4">Food</TableHead>
          <TableHead className="p-4">
            <div className="flex justify-between items-center">
              <div>Date</div>
              <Button className="w-[10px] h-[10px] rounded-full bg-white">
                <UpDownArrow />
              </Button>
            </div>
          </TableHead>
          <TableHead className="p-4">Total</TableHead>
          <TableHead className="p-4 w-[300px]">Delivery address</TableHead>
          <TableHead className="p-4">Delivery state</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-full text-[#71717a] ">
        {foodOrder.map((order) => (
          <TableRow key={order._id} className="w-full">
            <TableCell className="p-4 w-[30px]">
              <Checkbox />
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
            <TableCell className="p-4 text-red-500">
              {order.totalPrice}₮
            </TableCell>
            <TableCell className="p-4 w-[30px] ">
              {order.deliveryAddress}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};
