"use client";

import { ChangeDeliveryState } from "./ChangeDeliveryState";
import { DataTable } from "./DataTable";
import { DatePickerWithRange } from "./DatePickerWithRange";

export const Order = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="w-full flex justify-end">
        <img src="/images/AdminAvatar.png" />
      </div>
      <div className="h-full w-full bg-white rounded-lg overflow-hidden">
        <div className=" p-4 flex justify-between items-center bg-[#f4f4f5]">
          <div>
            <div className="text-[20px] font-bold">Orders</div>
            <div className="text-[12px] font-medium text-[#71717A]">
              32 items
            </div>
          </div>
          <div className="flex gap-3 ">
            <DatePickerWithRange />

            <ChangeDeliveryState />
          </div>
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};
