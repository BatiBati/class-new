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
import { z, ZodSchema } from "zod";
import { FormData } from "../signUp/page";
import { Dispatch, SetStateAction, useState } from "react";

export type SignUpStepProps = {
  formData: FormData;
  handleFormData: Dispatch<SetStateAction<FormData>>;
  next: () => void;
};

const usernameSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
});

export const SignUpFirstStep = ({ handleFormData, next }: SignUpStepProps) => {
  const form = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleSubmit = form.handleSubmit((values) => {
    handleFormData((prev) => ({ ...prev, username: values.username }));
    next();
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8 w-[27%]">
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
