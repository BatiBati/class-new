"use client";
import { Checkbox } from "@/components/ui/checkbox";
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
  foods: FoodOrderType[]
}
type FoodOrderType = {

}

export const DataTable = () => {
  const [foodOrder, setFoodOrder] = useState();
  const getFoodOrder = async () => {
    try {
      const response = await axios.get<Response>("http://localhost:3001/foodOrder");
      setFoodOrder(response.data.foods);
      console.log(response.data);
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
      <TableHeader className="bg-red-400 ">
        <TableRow className="flex w-full justify-between items-center ">
          <div className="p-4">
            <Checkbox />
          </div>

          <TableHead>№</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Food</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Delivery address</TableHead>
          <div className="p-4">
            <TableHead>Delivery state</TableHead>
          </div>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-amber-300">
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="flex w-full justify-between items-center"
          >
            <div className="p-4">
              <Checkbox />
            </div>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <div className="p-4">
              <TableCell>{invoice.totalAmount}</TableCell>
            </div>
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
