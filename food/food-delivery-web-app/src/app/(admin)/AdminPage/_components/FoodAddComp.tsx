"use client";
import { PlusSvg } from "@/app/_components/assets/PlusSvg";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { AddPictureSvg } from "./assets/AddPictureSvg";
import { AddFoodImage } from "./AddFoodImage";
import { Loader } from "lucide-react";
import axios from "axios";

const UPLOAD_KEY = "Food_images";
const IMAGE_API_KEY = "dazhij9zy";

const formSchema = z.object({
  foodName: z
    .string()
    .min(3, { message: "Food name must be at least 3 characters." })
    .max(20, { message: "Max length must be 20 characters" }),
  price: z
    .string()
    .min(3, { message: "Food name must be at least 3 characters." }),
  // image: z.string().min(8, { message: "Please enter image." }),
  ingredients: z
    .string()
    .min(3, { message: "Ingredients must be at least 3 characters." }),
  // category: z.string(),
});

export const FoodAddComp = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "aaa",
      price: "",
      // image: "/asdasdadasdas",
      ingredients: "asdad",
      // category: "",
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
          image: "./",
          category: "68060ad5260fe70ac1903223",
        });
      } catch (error) {
        console.log(error);
      }
    };

    handleCreate();
    // setValues(values);
  }

  console.log(values);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-[270px] h-[241px] bg-white rounded-[20px] overflow-hidden flex flex-col justify-center p-4 gap-5 border-dashed border-[3px] border-[#ef4444]"
        >
          <div className="rounded-full p-4 bg-red-500">
            <PlusSvg stroke="white " />
          </div>
          <div className="text-[14px] font-medium w-fit">
            Add new Dish to Appetizers
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Dish to Appetizers</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="foodName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Food name</FormLabel>
                        <FormControl>
                          <Input placeholder="Type food name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Food price</FormLabel>
                        <FormControl>
                          <Input placeholder="Type food name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="ingredients"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-4 relative h-[86px]">
                      <FormLabel>Ingredients</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="List of ingredients"
                          {...field}
                          className="h-[90px]  "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <AddFoodImage />
              <DialogFooter>
                <Button type="submit" className="bg-black text-white">
                  {loading === false ? "Add dish" : <Loader />}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
