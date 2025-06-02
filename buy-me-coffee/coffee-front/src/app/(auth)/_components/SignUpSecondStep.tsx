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
import { SignUpStepProps } from "./SignUpFirstStep";
import { z } from "zod";
import { api } from "../../../../axios";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_providers/AuthProvider";

const emailPasswordSchema = z.object({
  email: z
    .string()
    .min(3, "Email must be at least 3 characters")
    .email("Invalid email address"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export const SignUpSecondStep = ({ formData }: SignUpStepProps) => {
  const { signUp } = useAuth();

  const form = useForm({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    signUp(formData.username, values.email, values.password);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6 w-[27%]">
        <div>
          <div className="text-[24px] font-semibold">
            Welcome, {formData.username}
          </div>
          <div className="text-[#71717A] text-[14px]">
            Connect email and set a password
          </div>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
