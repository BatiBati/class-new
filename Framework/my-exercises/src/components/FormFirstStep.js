"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Firstname } from "./Firstname"

export const FormFirstStep = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <h1>Registration Form</h1>

        <Firstname />

      </div>
    </div>
  )
}
