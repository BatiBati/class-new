import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

type OrderDataType = {
  foodOrder: FoodsType[];
};

type FoodsType = {
  foodOrderItems: OneFood[];
  status: string;
  totalPrice: number;
  user: User;
};
type OneFood = {
food: Food
quantity:
_id:
};
type Food = {
  _id: 
}
export const UserLastOrder = ({ orderData }: OrderDataType) => {
  console.log(orderData);

  return (
    <TabsContent value="order">
      <Card>
        <CardHeader>
          <CardTitle>Order</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
