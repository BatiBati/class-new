"use client"

import { CreateAccount } from "./_components/CreateAccount"

export default function Login() {



    return (<div className="flex  items-center ">
        <div className="w-[30%]">
            <CreateAccount />
        </div>
        <div className="w-[70%]">
            <img src="/images/DeliveryMan.png" className="w-[856px] h-[904px]" />
        </div>
    </div>)
}