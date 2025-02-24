"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/timer.module.css";

const buttons = ["Start", "Stop", "Reset"];

const formatTime = (time) => {
  const sec = time % 60;
  const min = ((time - sec) / 60) % 60;
  const hour = (time - sec - 60 * min) / 3600;

  return `${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted === false) return;

    const id = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time, isStarted]);

  const handleStart = () => {
    setIsStarted(true);
  };
  const handleStop = () => {
    setIsStarted(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsStarted(false);
  };
  const funcs = [handleStart, handleStop, handleReset];

  return (
    <div className={styles.container}>
      <div className={styles.timeCont}>
        <h1>{formatTime(time)}</h1>
        <div className={styles.butCont}>
          {buttons.map((text, index) => {
            return (
              <button className={styles.buttons} onClick={funcs[index]}>
                {text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
