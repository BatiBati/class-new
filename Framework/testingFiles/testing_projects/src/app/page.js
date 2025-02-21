"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([""]);



  const decrement = () => {
    setCount(count - 1);
  };

  const Increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className={styles.container}>
      <input value={text} onChange={} />
      <div className={styles.buttonCont}>
        <div
          className={styles.decrement}
          onClick={() => {
            decrement();
          }}
        >
          Decrement
        </div>
        <div
          className={styles.decrement}
          onClick={() => {
            Increment();
          }}
        >
          Increment
        </div>
      </div>
    </div>
  );
}
