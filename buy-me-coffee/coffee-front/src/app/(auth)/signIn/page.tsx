"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SignInStep } from "../_components/SignInStep";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-[50%] p-10 relative">
      <div className="absolute right-10 top-10">
        <Button variant="outline" onClick={() => router.push("/signUp")}>
          Sign up
        </Button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <SignInStep />
      </div>
    </div>
  );
}
