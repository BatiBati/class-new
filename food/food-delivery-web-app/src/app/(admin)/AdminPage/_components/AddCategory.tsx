"use client";
import { PlusSvg } from "@/app/_components/assets/PlusSvg";
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
import axios from "axios";

import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type GetCategoryDataType = {
  getCategoryData: () => Promise<void>;
};

export const AddCategory = ({ getCategoryData }: GetCategoryDataType) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/category", {
        categoryName: inputValue,
      });
      await getCategoryData();
      toast.success("Category created succesfully");
      setOpen(false);
    } catch {
      toast.error("Failed to create category");
    } finally {
      setInputValue("");
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-red-500">
          <PlusSvg stroke="white " />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new category name</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        {/* <div className="grid gap-4 py-4"> */}
        <div className="flex flex-col  gap-4">
          <Label htmlFor="name" className="text-right">
            Category name
          </Label>
          <Input
            id="name"
            placeholder="Type category name..."
            defaultValue=""
            className="col-span-3"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
        {/* </div>  */}
        <DialogFooter>
          <Button
            type="submit"
            className="bg-black text-white"
            onClick={handleCreate}
          >
            {loading === false ? "Add category" : <Loader />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
