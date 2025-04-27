"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UpDownArrow } from "./assets/UpDownArrow";
import axios from "axios";
import { useState } from "react";

type PropsType = {
  order: OrderType;
};

type OrderType = {
  _id: string;
  status: string;
};

const changeStatus = ["DELIVERED", "CANCELLED", "PENDING"];

export const ChangeDeliveryState = ({ order }: PropsType) => {
  const [selectedStatus, setSelectedStatus] = useState(order.status);


  const updateDeliveryState = async () => {
    try {
      const url = `http://localhost:3001/foodOrder/${order._id}`;
      const data = { status: selectedStatus };

      const response = await axios.put(url, data);
      console.log("Delivery state updated:", response.data);
    } catch (error) {
      console.error("Error updating delivery state:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-full flex justify-center items-center">
          <Button
            variant="outline"
            className={`rounded-full border-[1px] ${order.status === "PENDING" ? "border-red-500" : ""
              } ${order.status === "DELIVERED" ? "border-green-500" : ""
              } flex gap-[10px]`}
          >
            {order.status}
            <div className="w-fit h-fit bg-white ">
              <UpDownArrow />
            </div>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6 gap-[24px]">
        <DialogHeader>
          <DialogTitle>Change delivery state</DialogTitle>
          <div className="w-full flex justify-between">
            {changeStatus.map((stat, i) => {
              return (
                <Button
                  className="w-fit rounded-full bg-[#F4F4F5] text-black"
                  style={{
                    background: stat === selectedStatus ? "red" : "",
                  }}
                  key={i}
                  onClick={() => {
                    setSelectedStatus(stat);
                  }}
                >
                  {stat}
                </Button>
              );
            })}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full rounded-full"
            onClick={updateDeliveryState}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
