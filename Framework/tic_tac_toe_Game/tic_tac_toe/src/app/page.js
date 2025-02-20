"use client";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [cards, setCards] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [clickedCount, setClickedCount] = useState(0);
  const [draw, setDraw] = useState(null);

  const handleClick = (index) => {
    if (winner) return;
    if (cards[index] !== "") return;

    const type = [...cards];
    type[index] = turn;

    setTurn(turn === "X" ? "O" : "X");
    setCards(type);

    setClickedCount(clickedCount + 1);
  };

  const restartGame = () => {
    setWinner(null);
    setCards(["", "", "", "", "", "", "", "", ""]);
  };

  useEffect(() => {
    if (clickedCount === 9) return setDraw(true);
  }, [clickedCount]);

  useEffect(() => {
    if (cards[0] === cards[1] && cards[1] === cards[2] && cards[0] !== "") {
      setWinner(cards[0]);
    }
    if (cards[3] === cards[4] && cards[4] === cards[5] && cards[3] !== "") {
      setWinner(cards[3]);
    }
    if (cards[6] === cards[7] && cards[7] === cards[8] && cards[6] !== "") {
      setWinner(cards[6]);
    }
    if (cards[0] === cards[3] && cards[3] === cards[6] && cards[0] !== "") {
      setWinner(cards[0]);
    }
    if (cards[1] === cards[4] && cards[4] === cards[7] && cards[1] !== "") {
      setWinner(cards[1]);
    }
    if (cards[2] === cards[5] && cards[5] === cards[8] && cards[2] !== "") {
      setWinner(cards[2]);
    }
    if (cards[0] === cards[4] && cards[4] === cards[8] && cards[0] !== "") {
      setWinner(cards[0]);
    }
    if (cards[2] === cards[4] && cards[4] === cards[6] && cards[2] !== "") {
      setWinner(cards[2]);
    }
  }, [cards]);

  return (
    <>
      <div className={styles.containter}>
        <div className={styles.cardCont}>
          {cards.map((el, index) => {
            return (
              <div
                key={index}
                className={styles.cards}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <p>{el}</p>
              </div>
            );
          })}
          {winner && (
            <div
              className={styles.wINNER}
              onClick={() => {
                restartGame();
              }}
            >
              Winner is {winner}
            </div>
          )}

          {draw && (
            <div
              className={styles.wINNER}
              onClick={() => {
                restartGame();
              }}
            >
              Drawed restart
            </div>
          )}
        </div>
      </div>
    </>
  );
}
