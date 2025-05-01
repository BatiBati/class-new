"use client";
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
import { EditSvg } from "./assets/EditSvg";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  foodName: z
    .string()
    .min(3, { message: "Food name must be at least 3 characters." })
    .max(20, { message: "Max length must be 20 characters" }),
  price: z
    .string()
    .min(1, { message: "Food price must be at least 1 characters." }),
  ingredients: z
    .string()
    .min(3, { message: "Ingredients must be at least 3 characters." }),
  category: z.string(),
});

export const FoodEditButton = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "aaa",
      price: "0",
      // image: deployedImageUrl,
      ingredients: "asdad",
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const handleCreate = async () => {
      setLoading(true);
      try {
        await axios.post("http://localhost:3001/food", {
          foodName: values.foodName,
          price: Number(values.price),
          ingredients: values.ingredients,
          //   image: deployedImageUrl,
          //   category: categoryId,
        });
        // await getCategoryData();
        // await getFood();
        toast.success("Food created succesfully.");
        form.reset({
          foodName: "",
          price: "",
          ingredients: "",
          // image: deployedImageUrl,
          category: "",
        });
        setOpen(false);
      } catch (error) {
        toast.error("Failed to create food.");
      } finally {
        setLoading(false);
      }
    };

    handleCreate();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <EditSvg />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dishes info</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="foodName"
                render={({ field }) => (
                  <FormItem className="">
                    <div className="flex gap-4">
                      <FormLabel className="w-[40%]">Dish name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="">
                    <div className="flex gap-4">
                      <FormLabel className="w-[40%]">Dish category</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
