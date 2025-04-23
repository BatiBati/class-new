"use client";

import { CreateAccount } from "./_components/CreateAccount";

export default function AuthenticationPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <CreateAccount />
      </div>
      <div className=" ">
        <img src="/images/DeliveryMan.png" className="w-[856px] h-[904px]" />
      </div>
    </div>
  );
}
