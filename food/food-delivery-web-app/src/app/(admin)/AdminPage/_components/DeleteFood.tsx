import { Button } from "@/components/ui/button";
import { DeleteSvg } from "./assets/DeleteSvg";

export const DeleteFood = () => {
  return (
    <Button type="submit" className="border-red-200 border-[1px]">
      <DeleteSvg />
    </Button>
  );
};
