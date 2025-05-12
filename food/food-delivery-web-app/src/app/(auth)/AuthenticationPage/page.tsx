"use client";

import { SignUp } from "./_components/SignUp";

export default function AuthenticationPage() {
  return (
    <div className="w-screen h-screen flex  items-center">
      <div className="w-[50%] h-full flex justify-center items-center">
        <SignUp />
      </div>
      <div className="w-[50%] h-full ">
        <img src="/images/DeliveryMan.png" className="w-full h-full" />
      </div>
    </div>
  );
}
