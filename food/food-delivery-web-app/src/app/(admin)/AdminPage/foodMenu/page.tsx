"use client"
import { PlusSvg } from "@/app/_components/assets/PlusSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

type Response = {
    category: CategoriesType[]
}

type CategoriesType = {
    categoryName: string
}



export default function Home() {

    const [categories, setCategories] = useState<CategoriesType[]>([])

    const getCategoryData = async () => {
        try {
            const response = await axios.get<Response>("http://localhost:3001/category");
            setCategories(response.data.category)

        } catch (error) {
            console.error("Error fetching categories", error);

        }
    }
    useEffect(() => {
        getCategoryData();
    }, [])




    return (
        <div className="flex flex-col gap-4 bg-[#F4F4F5] p-10 w-full">
            <div className="w-full flex justify-end">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="w-full flex flex-col gap-4 p-6 bg-white rounded-xl">
                <div className=" text-[20px] font-semibold">Dish Category</div>
                <div className="w-full flex flex-wrap gap-3 items-center">
                    <div className="flex gap-[8px] py-2 px-4 border-[1px] border-[#ef4444] rounded-full">All dishes</div>
                    {categories.map((category) => {
                        return (
                            <div className="flex gap-[8px] py-2 px-4 border-[1px] border-[#e44e7] rounded-full">
                                <div className="">{category.categoryName}</div>
                                <div className="py-[2px] px-[10px] bg-[#18181b] rounded-full text-white">1</div>
                            </div>
                        )
                    })}
                    <div className="w-9 h-9 bg-red-500  rounded-full flex justify-center items-center">
                        <PlusSvg stroke="white" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-6 bg-white rounded-xl">
                s
            </div>
        </div>
    )
}