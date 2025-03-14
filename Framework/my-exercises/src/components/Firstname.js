"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const schema = z.object({
    firstname: z
        .string()
        .refine((value) => {
            const chars = value.split("");
            return chars.every((char) => {
                return !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char);
            });
        },
            { message: "Only characters" })
})

export const Firstname = ({ props }) => {

    const { register, formState, handleSubmit } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstname: "",
        }
    })



    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div className="p-5 flex flex-col">
                <input className="p-2 border-1 "
                    placeholder="Firstname"
                    {...register("firstname")} />

                {formState.errors.firstname && (<p className="text-red-500">{formState.errors.firstname.message}</p>)}

                <button className="bg-amber-950 text-white"
                    type="submit">
                    Next
                </button>
            </div >
        </form>
    )
}