import { Button } from "@/components/ui/button";
import { DeleteSvg } from "./assets/DeleteSvg";
import axios from "axios";
import { toast } from "sonner";

type FoodIdType = {
  foodId: string
  getFood: () => Promise<void>
}

export const DeleteFood = ({ foodId, getFood }: FoodIdType) => {

  const deleteFood = async () => {
    try {
      await axios.delete(`http://localhost:3001/food/${foodId}`)
      await getFood();
      toast.success("Food deleted succesfully.");
    } catch (error) {
      console.error("Delete food error:", error);
      toast.error("Failed to delete food.")
    }
  }
  return (
    <Button type="submit" className="border-red-200 border-[1px]" onClick={deleteFood}>
      <DeleteSvg />
    </Button>
  );
};
