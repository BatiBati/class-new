import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export const FirstnameField = () => {
  const [register, formState] = useForm({
    resolver: zodResolver(schme)
  });

  return (
   
  );
};
