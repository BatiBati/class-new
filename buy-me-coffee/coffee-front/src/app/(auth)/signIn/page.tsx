"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SignInStep } from "../_components/SignInStep";
import { useAuth } from "@/app/_providers/AuthProvider";

export default function Home() {
  const router = useRouter();
  const { loading } = useAuth();
  return (
    <div className="w-[50%] p-10 relative">
      {!loading && (
        <>
          <div className="absolute right-10 top-10">
            <Button variant="outline" onClick={() => router.push("/signUp")}>
              Sign up
            </Button>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-10">
            <SignInStep />
          </div>
        </>
      )}

      {/* <div className="absolute right-10 top-10">
        <Button variant="outline" onClick={() => router.push("/signUp")}>
          Sign up
        </Button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <SignInStep />
      </div> */}
    </div>
  );
}
