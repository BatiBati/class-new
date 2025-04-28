"use client"

import { EditSvg } from "./assets/EditSvg"


export const CardOfFood = () => {
    return (<div
        className="w-[270px] h-[241px] bg-white rounded-[20px] overflow-hidden flex flex-col p-4 gap-5 border-[1px]"

    >
        <div className="rounded-xl overflow-hidden h-[210px] relative ">
            <img src="/images/TestFoodPic.png" className="h-full w-full rounded-xl" />
            <div className="absolute right-5 bottom-5 w-11 h-11 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <EditSvg />
            </div>
        </div>
        <div className="w-full gap-2 h-fit flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <p className="text-[#EF4444] font-medium">Food name Here</p>
                <p className="text-black text-[12px] font-normal">
                    $
                </p>
            </div>
            <p className="text-black text-[12px] font-normal">Food Ingeredients here</p>
        </div>
    </div>)
}