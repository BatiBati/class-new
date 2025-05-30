import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export const SignInStep = () => {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-3 w-[27%]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-500px">
              <div className="flex flex-col gap-2">
                <p className="text-[24px] font-semibold">Welcome back</p>
              </div>
              <FormLabel>Username</FormLabel>
              <FormControl className="w-full">
                <Input
                  placeholder="Enter username here."
                  {...field}
                  className="pr-0 pl-4"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-500px">
              <FormLabel>Password</FormLabel>
              <FormControl className="w-full">
                <Input
                  placeholder="Enter password here."
                  {...field}
                  className="pr-0 pl-4"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline" className="w-full">
          Continue
        </Button>
      </form>
    </Form>
  );
};
