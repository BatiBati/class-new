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

type SignUpFirstStepProps = {
  onNext: (data: { username: string }) => void;
  formSchema: any; // You can type this properly as Zod schema type
  z: string;
};

export const SignUpFirstStep = ({
  onNext,
  formSchema,
}: SignUpFirstStepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: any) {
    onNext(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-500px">
              <div className="flex flex-col gap-2">
                <p className="text-[24px] font-semibold">Create your account</p>
                <p className="text-[14px] text-[#71717A]">
                  Choose a username for your page
                </p>
              </div>
              <FormLabel>Username</FormLabel>
              <FormControl className="w-full">
                <Input
                  placeholder="Enter username."
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
