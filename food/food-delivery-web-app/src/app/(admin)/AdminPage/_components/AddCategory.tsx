"use client";
import { PlusSvg } from "@/app/_components/assets/PlusSvg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "../../../../../axios";

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
      await api.post(`/category`, {
        categoryName: inputValue,
      });
      await getCategoryData();
      toast.success("New Category is being added to the menu.");
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
        </DialogHeader>
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
