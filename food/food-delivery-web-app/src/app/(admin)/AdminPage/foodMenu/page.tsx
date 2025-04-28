"use client"
import { PlusSvg } from "@/app/_components/assets/PlusSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardOfFood } from "../_components/CardOfFood";

type Response = {
    category: CategoriesType[]
}

type CategoriesType = {
    categoryName: string
    _id: string
}

type FoodResponse = {
    foods: FoodType[]
}

type FoodType = {
    _id: string;
    price: number;
    ingredients: string;
    image: string
    foodName: string
    createdAt: string;
    updatedAt: string;
    category: CategoryType;
}

type CategoryType = {
    categoryName: string;
    _id: string
}
// type CatID = {
//     _id: string
// }

export default function Home() {
    const [foods, setFoods] = useState<FoodType[]>([]);
    const [categoryId, setCategoryId] = useState()

    const getFood = async () => {
        try {
            const foodResponse = await axios.get<FoodResponse>(`http://localhost:3001/food/`);
            setFoods(foodResponse.data.foods);
        } catch (error) {
            console.error("Error fetching foods", error);
        }
    }

    useEffect(() => {
        getFood();
    }, [])

    console.log(foods);


    const categoryI = foods.map((el) => { return el.category._id })

    console.log(categoryId);



    const getCategoryId = async () => {
        try {
            const categoryResponse = await axios.get<FoodType[]>(`http://localhost:3001/food?categoryId=${categoryI}`);
            setCategoryId(categoryResponse.data.foods)
            console.log(categoryResponse.data.foods);

        } catch (error) {
            console.error("Error fetching categories", error);
        }
    }

    useEffect(() => {
        getCategoryId();
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
                    {foods.map((food) => {
                        return (
                            <div className="flex gap-[8px] py-2 px-4 border-[1px] border-[#e44e7] rounded-full" key={food._id}>
                                {/* <div className="">{food.category.}</div> */}
                                {food.category.categoryName}



                                {/* <div className="py-[2px] px-[10px] bg-[#18181b] rounded-full text-white">1 </div> */}
                            </div>
                        )
                    })}
                    <div className="w-9 h-9 bg-red-500  rounded-full flex justify-center items-center">
                        <PlusSvg stroke="white" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-6 bg-white rounded-xl">
                {foods.map((el) => {
                    return (
                        <div key={el._id}>
                            <div className="w-full font-semibold text-[20px] text-red-500">{el.category.categoryName} {foods.length}</div>
                            {/* <CardOfFood /> */}
                        </div>
                    )
                })}


                {/* <div className="w-full font-semibold text-[20px] text-red-500">Category name here (Number here)</div>
                <CardOfFood /> */}
            </div>
        </div>
    )
}