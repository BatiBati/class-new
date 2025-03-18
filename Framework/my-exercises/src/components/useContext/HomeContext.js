"use client"
import { useState } from "react"
import { ParentOne } from "./ParentOne"

export const HomeContext = () => {
    const [step, setStep] = useState(122)
    return (<div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[500px] h-[350px] flex flex-col justify-center items-center bg-amber-100 rounded-3xl shadow-2xl text-black">
            I'm Home page
            <ParentOne step={step} />
        </div>
    </div>)
}