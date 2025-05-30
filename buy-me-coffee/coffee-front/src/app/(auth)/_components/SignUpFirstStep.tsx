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
import { FormData } from "../signUp/page";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { api } from "../../../../axios";

import { GreenCheckSVG } from "@/app/_components/assets/GreenCheckSVG";
import { XSvg } from "@/app/_components/assets/XSvg";

export type SignUpStepProps = {
  formData: FormData;
  handleFormData: Dispatch<SetStateAction<FormData>>;
  next: () => void;
};

const usernameSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
});

export const SignUpFirstStep = ({ handleFormData, next }: SignUpStepProps) => {
  const [userNameInputValue, setUserNameInputValue] = useState<string>("");
  const [userNameCheck, setUserNameCheck] = useState<boolean | null>(null);
  const form = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    const checkUsername = async () => {
      try {
        const res = await api.get(
          `/auth/check-username?username=${userNameInputValue}`
        );
        setUserNameCheck(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (userNameInputValue) {
      checkUsername();
    }
  }, [userNameInputValue]);

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
                  onChange={(e) => {
                    field.onChange(e);
                    setUserNameInputValue(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />

              {userNameInputValue.length > 2 &&
                (userNameCheck === false ? (
                  <div className="flex items-center gap-1 text-[12px] text-[#EF4444]">
                    <XSvg />
                    The username is already taken
                  </div>
                ) : userNameCheck === true ? (
                  <div className="flex items-center gap-1 text-[12px] text-[#18BA51]">
                    <GreenCheckSVG />
                    Username available
                  </div>
                ) : null)}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="outline"
          className="w-full"
          disabled={userNameCheck === false}
        >
          Continue
        </Button>
      </form>
    </Form>
  );
};
