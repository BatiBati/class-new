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
import { useAuth } from "@/app/_providers/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const userSchema = z.object({
  email: z.string().min(3, "Username must be at least 3 characters.").email(),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export const SignInStep = () => {
  const { signIn, user } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit((values) => {
    signIn(values.email, values.password);
    // if(user.profile  (router.push("/profile"): ("/"))
    if (user?.profile) { router.push("/profile") } else router.push("/"); toast.success("Create your profile.")

  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-3 w-[27%]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-500px">
              <div className="flex flex-col gap-2">
                <p className="text-[24px] font-semibold">Welcome back</p>
              </div>
              <FormLabel>Email</FormLabel>
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
                  type="password"
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
