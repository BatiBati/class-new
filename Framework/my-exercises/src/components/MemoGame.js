"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/memoGame.module.css";

const formatTime = (time) => {
  const sec = time % 60;
  const min = ((time - sec) / 60) % 60;

  return `  ${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
};

const board = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

export default function Home() {
  const [shown, setShown] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [time, setTime] = useState(180);
  const [isStart, setIsStarted] = useState(false);
  const [restart, setRestart] = useState();

  const startGame = () => {
    setIsStarted(true);
  };

  const restartGame = () => {
    if (shown.length === 16) return;
    if (isStart === true) {
      setTime(180);
      setIsStarted(false);
    }
  };

  useEffect(() => {
    if (isStart === false) return;
    if (time !== 0) {
      const id = setInterval(() => {
        setTime(time - 1);
      }, 1);
      return () => {
        clearInterval(id);
      };
    } else {
      return alert("Game Over");
    }
  }, [time, isStart]);

  const handleShow = (index) => {
    if (shown.length === 2) return;
    if (shown.includes(index)) return;
    const newShown = [...shown];
    newShown.push(index);
    setShown(newShown);
  };

  useEffect(() => {
    if (shown.length !== 2) return;

    const [first, second] = shown;

    setTimeout(() => {
      if (board[first] === board[second])
        setMatched([...matched, first, second]);
      setShown([]);
    }, 1000);
  }, [matched, shown]);

  useEffect(() => {
    if (matched.length === board.length) setIsWon(true);
  }, [matched]);

  console.log(time);
  console.log(isStart);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timeContainer}>
          <button onClick={startGame}>Start</button>
          <button onClick={restartGame}>Restart</button>
          <div className={styles.time}>{formatTime(time)}</div>
        </div>

        <div className={styles.cardsCont}>
          {board.map((value, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                handleShow(index);
              }}
            >
              {matched.includes(index)
                ? value
                : shown.includes(index)
                ? value
                : ""}
            </div>
          ))}
        </div>

        {isWon && <div className={styles.won}>You won!</div>}
      </div>
    </>
  );
}
