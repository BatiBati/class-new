"use client"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FC } from "react"


// const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
const formSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters." }),
    // email: z.string().min(3, { message: "Email must be at least 3 characters." }).email(),
    // password: z.string().regex(emailRegex).min(3, { message: "Username must be at least 3 characters." }),
})


interface SignUpFirstStepProps {
    onNext: (data: z.infer<typeof formSchema>) => void;
}

export const SignUpFirstStep: FC<SignUpFirstStepProps> = ({ onNext }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        onNext(values); // pass data to parent
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="w-500px">
                            <div className="flex flex-col gap-2">
                                <p className="text-[24px] font-semibold">Create your account</p>
                                <p className="text-[14px] text-[#71717A]">Choose a username for your page</p>
                            </div>
                            <FormLabel>Username</FormLabel>
                            <FormControl className="w-full">
                                <Input placeholder="Enter username." {...field} className="pr-0 pl-4" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="button" variant="outline" className="w-full">Continue</Button>
            </form>
        </Form>
    )
}