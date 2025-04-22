import { useEffect, useState } from "react"
import { Categories, Response } from "./Footer"
import axios from "axios"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const AllCategories = () => {
    const [categories, setCategory] = useState<Categories[]>([])

    const getCategoryData = async () => {
        try {
            const response = await axios.get<Response>(
                "http://localhost:3001/category"
            );
            setCategory(response.data.category);


        } catch (error) {
            console.error("Error fetching categories", error);

        }
    }
    useEffect(() => {
        getCategoryData()
    }, []);

    return (
        <div className="w-[1440px] h-[176px] bg-[#404040] flex flex-col justify-between pt-8 pb-8 p-[48px]">
            <div className="text-[30px] font-semibold text-white">Categories</div>

            <div className="w-full flex justify-center">
                <Carousel className="flex gap-[10px] w-[1248px]">
                    <CarouselContent className="-ml-1 ">
                        {categories.map((categore, i) => {
                            return (




                                <CarouselItem className="bg-green-600 w-fit" key={i}>
                                    <div >       {categore.categoryName}</div>

                                </CarouselItem>




                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>


        </div>
    )
}