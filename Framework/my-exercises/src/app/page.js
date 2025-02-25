import Image from "next/image";
import styles from "./page.module.css";
import Timer from "@/components/Timer";
import TicTacToe from "@/components/Tic-tac-toe";
import TodoList from "@/components/TodoList";
import MyTimer from "@/components/MyTimer";
import MemoGame from "@/components/MemoGame";
import MyMemoGame from "@/components/MyMemoGame";

export default function Home() {
  return (
    <>
      <MyMemoGame />
    </>
  );
}
