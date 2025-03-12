"use client";
import { RightArrow } from "@/components/assets/RightArrow";
import { useEffect, useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [isFirstnameValid, setIsFirstNameValid] = useState(true);
  const [error, setError] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    if (firstName.length === 0) false;
    if (!firstName) {
      setIsFirstNameValid(false);
    } else {
      setIsFirstNameValid(true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-[480px] h-[655px] p-[32px] flex flex-col justify-between">
        <div className="w-full h-[30%]">
          <img src="./images/pineConeLogo.svg" />
          <p className="font-semibold text-[26px]">Join Us! 😎</p>
          <p className="text-[#8E8E8E] text-lg">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="w-full h-[70%] flex flex-col justify-between">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-[#334155] font-semibold">
                First name <span className="text-red-500">*</span>
              </p>

              <input
                placeholder="Enter first name"
                className="w-full p-2 border rounded-md"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <div className="text-red-500"> {error}</div>
            </div>

            {/* <div className="flex flex-col">
              <p className="text-[#334155] font-semibold">
                Last name <span className="text-red-500">*</span>
              </p>

              <input
                placeholder="Enter Last name"
                className="w-full p-2 border rounded-md"
              />
              <div className="text-red-500"> Please enter Lastname </div>
            </div>

            <div className="flex flex-col">
              <p className="text-[#334155] font-semibold">
                Username <span className="text-red-500">*</span>
              </p>

              <input
                placeholder="Enter username"
                className="w-full p-2 border rounded-md"
              />
              <div className="text-red-500"> Please enter Username </div>
            </div> */}
          </div>

          <button
            className="w-full bg-[#121316] flex items-center justify-center gap-2 text-white text-base font-semibold border rounded-md py-[10px] px-[12px]"
            onClick={handleSubmit}
          >
            Continue 1/3 <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
