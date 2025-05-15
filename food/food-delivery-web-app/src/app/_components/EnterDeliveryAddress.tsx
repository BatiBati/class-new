"use client";

import { RightArrow } from "./assets/RightArrow";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocationLogo } from "./assets/Location";
import { useEffect, useState } from "react";
type DeliveryAddressType = {
  deliverAddress: string;
  setDeliverAddress: (address: string) => void;
};

export const EnterDeliveryAddress = ({
  deliverAddress,
  setDeliverAddress,
}: DeliveryAddressType) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const handleAddress = () => {
    setDeliverAddress(value);

    setOpen(false);
  };
  return (
    <div className="w-[280px] h-fit bg-white rounded-full text-black">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="rounded-full flex h-[36px] w-full p-3 items-center gap-3">
            <LocationLogo />
            <div className="text-[#ef4444] text-[12px] font-normal">
              Delivery address:
            </div>
            <div className="opacity-50 overflow-hidden w-[200px] h-[20px] flex">
              {deliverAddress}
            </div>
            <RightArrow width="15px" height="15px" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Delivery address</DialogTitle>
          </DialogHeader>

          <div className=" items-center gap-4">
            <div className="w-full h-[200px]  ">
              <input
                id="name"
                className="w-[100%] h-[100%] p-3"
                placeholder="Write your deliver address here."
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant={"outline"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-black text-white"
              onClick={() => handleAddress()}
            >
              Deliver here
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
