"use client";
import style from "@/styles/myTimer.module.css";
import { useState } from "react";
const times = ["Hour", "Min", "Sec", "MilSeconds"];
export default function MyTimer() {
  console.log(times);

  return (
    <>
      <div className={style.container}>
        <div className={style.timerCont}>
          <h1>00:00:00</h1>
          <div className={style.buttons}>
            {times.map((el) => {
              <button className={style.button}>{el}</button>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
