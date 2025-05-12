"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RightArrow } from "@/app/_components/assets/RightArrow";
import { AuthProvider, useAuth } from "@/app/_providers/AuthProvider";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: "Username must be at least 2 characters.",
    })
    .email(),
  password: z.string().min(3, { message: "Character at least 3." }),
});
export const SignUp = () => {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(step);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[416px] h-[288px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Button className="rotate-180">
            <RightArrow width="20px" height="20px" />
          </Button>
          {step === 1 && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[24px] font-semibold">
                    Create your account
                  </FormLabel>
                  <FormDescription>
                    Sign up to explore your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {step === 2 && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[24px] font-semibold">
                    Create your account
                  </FormLabel>
                  <FormDescription>
                    Sign up to explore your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            variant="outline"
            className="w-full justify-center"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Let's Goqweqwe
          </Button>
          <div className="flex gap-3 justify-center">
            <p> Already have an account?</p>
            <p className="text-blue-500 underline">Log in</p>
          </div>
        </form>
      </Form>
    </div>
  );
};
