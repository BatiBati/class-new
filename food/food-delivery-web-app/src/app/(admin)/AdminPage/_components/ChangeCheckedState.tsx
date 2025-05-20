"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FoodOrderType } from "./DataTable"
import { useState } from "react"
import axios from "axios"

type ChangeCheckedStateProps = {
    orderLength: FoodOrderType[];
    checkTarget: boolean
    setCheckTarget: React.Dispatch<React.SetStateAction<boolean>>;
};

const changeStatus = ["DELIVERED", "CANCELLED", "PENDING"];


export const ChangeCheckedState = ({ checkTarget, setCheckTarget }: ChangeCheckedStateProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [saveValue, setSaveValue] = useState<string>("")
    console.log(checkTarget);

    const handleChangeDeliverState = async () => {
        try {
            await Promise.all(
                checkTarget.map(async (orderId) => {
                    const url = `http://localhost:3001/foodOrder/${orderId}`;
                    const data = { status: saveValue };

                    const response = await axios.put(url, data);
                    console.log(`Updated order ${orderId}:`, response.data);
                })
            );
            setCheckTarget([]);
            setOpen(false);
        } catch (error) {
            console.error("Error updating delivery state:", error);
        }
    };


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="rounded-full bg-black text-white p-4"
                >
                    Change delivery state
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-6 gap-[20px]">
                <DialogHeader className="gap-8">
                    <DialogTitle>Change delivery state</DialogTitle>
                    <div className="w-full flex justify-between">
                        {changeStatus.map((status) => {
                            return (
                                <Button
                                    className="w-fit rounded-full bg-[#F4F4F5] text-black hover:text-white"
                                    variant={"destructive"}
                                    key={status}
                                    onClick={() => setSaveValue(status)}
                                >
                                    {status}
                                </Button>
                            )
                        })}
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        type="submit"
                        className="w-full rounded-full bg-black text-white"
                        onClick={() => handleChangeDeliverState}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}