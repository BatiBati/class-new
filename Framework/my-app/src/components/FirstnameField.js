import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const FirstnameField = () => {
  const [register, formState] = useForm({});

  return (
    <div className="flex flex-col">
      <p className="text-[#334155] font-semibold">
        First name <span className="text-red-500">*</span>
      </p>

      <input
        placeholder="Enter first name"
        className="w-full p-2 border rounded-md"
        {...register("firstname")}
      />

      {formState.errors.firstname && (
        <div className="text-red-500">{formState.errors.firstname.message}</div>
      )}
    </div>
  );
};
